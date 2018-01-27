(function () {
  'use strict';
  const app = angular
    .module('zoomInfo', ['ngMaterial'])
    .directive('errSrc', ErrSrc)
    .factory('PeopleFactory', PeopleFactory)
    .controller('PersonDataCtrl', PersonDataCtrl);

  // Factory
  PeopleFactory.$inject = ['$http'];
  function PeopleFactory($http) {
    return $http.get('/getPersonsData').then((res) => {
      return res.data;
    });
  }

  // Controller
  PersonDataCtrl.$inject = ['$scope', '$q', 'PeopleFactory'];
  function PersonDataCtrl($scope, $q, PeopleFactory) {
    // please name the mock data array you are getting from the nodeJS route, "peopleData"
    this.$onInit = () => {
      getPeople();
      $scope.idInput = 4;
    }

    $scope.getParents = (id) => {
      sortBy(id);
    }

    function getPeople() {
      PeopleFactory.then((res) => {
        $scope.peopleData = res;
      })
    }

    function getItemByIdSync(id) {
      const item = $scope.peopleData.find((person) => {
        return person.id === id;
      });
      if (item) {
        return item;
      }
    }

    function getItemById(id) {
      const item = $scope.peopleData.find((person) => {
        return person.id === id;
      });
      if (item) {
        console.log(item);
        return $q.resolve(item);
      } else {
        return $q.reject({ message: "Error: couln\'t find id " + id + "in the DB." });
      }
    }

    function sortBy(input_id) {
      // reset the array every time
      getPeople();
      const sortedArr = [];

      (function recursivePush(input_id) {
        const item = getItemByIdSync(input_id);
        if (item.level > 1) {
          sortedArr.push(getItemById(item.parentId));
          recursivePush(item.parentId);
        } else {
          // handle array of promises
          $q.all(sortedArr).then((data) => {
            $scope.peopleData = data;
          })
        }
      }(input_id));
    }

  }// controller

  // Directive (for returning placeholder photo if request fails)
  function ErrSrc() {
    return {
      link: function (scope, element, attrs) {
        element.bind('error', function () {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    }
  };

})();
