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
  PersonDataCtrl.$inject = ['$scope', 'PeopleFactory'];
  function PersonDataCtrl($scope, PeopleFactory) {
    // please name the mock data array you are getting from the nodeJS route, "peopleData"
    this.$onInit = () => {
      PeopleFactory.then((res) => {
        $scope.peopleData = res;
        console.log(res);
      })
    }

  }

  // Directive
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
