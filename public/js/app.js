(function () {
  'use strict';


  angular
      .module('zoomInfo', [])
      .controller('PersonDataCtrl', PersonDataCtrl);

  PersonDataCtrl.$inject = ["$scope"];

  function PersonDataCtrl($scope) {
    var vm = this;

    $scope.data = [
      {
        "profileImageURL": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/005/384/0cd3821.jpg",
        "firstName": "Howard",
        "lastName": "Witkin",
        "topLevelIndustry": "Insurance",
        "lastMentioned": "2016-12-01",
        "lastUpdatedDate": "2016-12-01",
        "name": "Howard Witkin",
        "managementLevel": "Manager",
        "title": "Managing General Agent",
        "companyLogo": "http://www.lifeinsurance.net/wp-content/uploads/2012/03/LIN-logo-transparent-260w.png",
        "companyName": "Life Insurance Company",
        "companyAddress": {
          "Street": "45 Market Street",
          "City": "Wirral",
          "State": "Cheshire",
          "Zip": "CH47 2BQ",
          "CountryCode": "United Kingdom"
        },
        "companyRevenue": "$3 Million",
        "companyRevenueRange": "$1 mil. - $5 mil.",
        "companyEmployees": 15,
        "companyEmployeeCountRange": "10 - 20",
        "companyDomain": "www.lifeinsurance.net",
        "companyRevenueIn000s": 3000
      },
      {
        "profileImageURL": "http://www.roughbros.com/assets/uploads/leadership/dave.jpg",
        "firstName": "David",
        "lastName": "Roberts",
        "topLevelIndustry": [
          "Software",
          "Manufacturing",
          "Retail",
          "Business Services"
        ],
        "lastMentioned": "2017-03-13",
        "lastUpdatedDate": "2017-03-13",
        "name": "David Roberts",
        "managementLevel": "Manager",
        "title": "Federal Inside Sales District Manager",
        "companyLogo": "http://img2.insight.com/graphics/insight/en-gb/content/header_black_logo.gif",
        "companyName": "Insight",
        "companyAddress": {
          "Street": "Insight US ( Includes TC Computers 6820 South Harl Ave.",
          "City": "Tempe",
          "State": "Arizona",
          "Zip": 85283,
          "CountryCode": "United States"
        },
        "companyRevenue": "$5.4 Billion",
        "companyRevenueRange": "Over $5 bil.",
        "companyEmployees": 5761,
        "companyEmployeeCountRange": "5,000 - 10,000",
        "companyDomain": "www.insight.com",
        "companyRevenueIn000s": 5373090
      },
      {
        "profileImageURL": "http://cloaklabs.com/wp-content/uploads/2013/06/430x300xhoodie_5_front-430x300.jpg.pagespeed.ic.QyEkaED9Bv.jpg",
        "firstName": "Robert",
        "lastName": "Miller",
        "topLevelIndustry": [
          "Software",
          "Manufacturing",
          "Business Services",
          "Telecommunications"
        ],
        "lastMentioned": "2017-03-13",
        "lastUpdatedDate": "2017-03-13",
        "name": "Robert Miller",
        "managementLevel": "Manager",
        "title": "Enterprise Software Licensing Manager",
        "companyLogo": "http://www.topica.com/images/t_logo_ibm.gif",
        "companyName": "IBM Corporation",
        "companyAddress": {
          "Street": "1 New Orchard Rd",
          "City": "Armonk",
          "State": "New York",
          "Zip": 10504,
          "CountryCode": "United States"
        },
        "companyRevenue": "$81.7 Billion",
        "companyRevenueRange": "Over $5 bil.",
        "companyEmployees": 377757,
        "companyEmployeeCountRange": "Over 10,000",
        "companyDomain": "www.ibm.com",
        "companyRevenueIn000s": 81741000
      },
      {
        "profileImageURL": "http://www.learningtech.org/img/Jim-Miller.jpg",
        "firstName": "James",
        "lastName": "Miller",
        "topLevelIndustry": [
          "Manufacturing",
          "Software",
          "Finance"
        ],
        "lastMentioned": "2017-03-05",
        "lastUpdatedDate": "2017-03-05",
        "name": "James Miller",
        "managementLevel": "Manager",
        "title": "Program and Consulting Manager",
        "companyLogo": "http://welcome.hp-ww.com/img/hpweb_1-2_topnav_hp_logo.gif",
        "companyName": "Hewlett-Packard Company",
        "companyAddress": {
          "Street": "1501 Page Mill Road",
          "City": "Palo Alto",
          "State": "California",
          "Zip": 94304,
          "CountryCode": "United States"
        },
        "companyRevenue": "$103 Billion",
        "companyRevenueRange": "Over $5 bil.",
        "companyEmployees": 287000,
        "companyEmployeeCountRange": "Over 10,000",
        "companyDomain": "www.hp.com",
        "companyRevenueIn000s": 103000000
      },
      {
        "profileImageURL": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/194/0c3/2bd416f.jpg",
        "firstName": "Michael",
        "lastName": "Meyer",
        "topLevelIndustry": [
          "Software",
          "Manufacturing",
          "Business Services"
        ],
        "lastMentioned": "2017-03-17",
        "lastUpdatedDate": "2017-03-17",
        "name": "Michael Meyer",
        "managementLevel": "Manager",
        "title": "Area Sales Manager - Enterprise Mid-Atlantic, Data Protection Solutions",
        "companyLogo": "http://www.docsciences.com/assets/images/logo_documentsciences.gif",
        "companyName": "EMC Corporation",
        "companyAddress": {
          "Street": "176 South Street",
          "City": "Hopkinton",
          "State": "Massachusetts",
          "Zip": "01748",
          "CountryCode": "United States"
        },
        "companyRevenue": "$24.7 Billion",
        "companyRevenueRange": "Over $5 bil.",
        "companyEmployees": 72000,
        "companyEmployeeCountRange": "Over 10,000",
        "companyDomain": "www.emc.com",
        "companyRevenueIn000s": 24704000
      },
      {
        "profileImageURL": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/0bd/117/25e0057.jpg",
        "firstName": "Bryan",
        "lastName": "Johnson",
        "topLevelIndustry": [
          "Construction",
          "Manufacturing"
        ],
        "lastMentioned": "2017-03-09",
        "lastUpdatedDate": "2017-03-09",
        "name": "Bryan Johnson",
        "managementLevel": "Manager",
        "title": "Area Manager, Retail Division",
        "companyLogo": "http://building.sunroc.com/wp-content/uploads/logo-sunroc.png",
        "companyName": "Sunroc Corporation",
        "companyAddress": {
          "Street": "180 North 300 East",
          "City": "Saint George",
          "State": "Utah",
          "Zip": 84770,
          "CountryCode": "United States"
        },
        "companyRevenue": "$286 Million",
        "companyRevenueRange": "$250 mil. - $500 mil.",
        "companyEmployees": 350,
        "companyEmployeeCountRange": "250 - 500",
        "companyDomain": "www.sunroc.com",
        "companyRevenueIn000s": 286000
      },
      {
        "profileImageURL": "http://www.londonhp.nhs.uk/wp-content/uploads/2011/09/andymitchell.jpg",
        "firstName": "Andrew",
        "lastName": "Mitchell",
        "topLevelIndustry": [
          "Software",
          "Media & Internet"
        ],
        "lastMentioned": "2017-01-31",
        "lastUpdatedDate": "2017-01-31",
        "name": "Andrew Mitchell",
        "managementLevel": "Manager",
        "title": "Manager",
        "companyLogo": "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png",
        "companyName": "Facebook",
        "companyAddress": {
          "Street": "1601 Willow Road",
          "City": "Menlo Park",
          "State": "California",
          "Zip": 94025,
          "CountryCode": "United States"
        },
        "companyRevenue": "$17.9 Billion",
        "companyRevenueRange": "Over $5 bil.",
        "companyEmployees": 12691,
        "companyEmployeeCountRange": "Over 10,000",
        "companyDomain": "www.facebook.com",
        "companyRevenueIn000s": 17928000
      },
      {
        "profileImageURL": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/00e/1f1/2df084a.jpg",
        "firstName": "Robert",
        "lastName": "Johnson",
        "topLevelIndustry": [
          "Media & Internet",
          "Finance",
          "Software"
        ],
        "lastMentioned": "2017-03-15",
        "lastUpdatedDate": "2017-03-15",
        "name": "Robert Johnson",
        "managementLevel": "Manager",
        "title": "Manager I",
        "companyLogo": "http://loanlogics.com/images/logo_trans.png",
        "companyName": "Trans Union Corporation",
        "companyAddress": {
          "Street": "555 W. Adams Street",
          "City": "Chicago",
          "State": "Illinois",
          "Zip": 60661,
          "CountryCode": "United States"
        },
        "companyRevenue": "$1.5 Billion",
        "companyRevenueRange": "$1 bil. - $5 bil.",
        "companyEmployees": 4200,
        "companyEmployeeCountRange": "1,000 - 5,000",
        "companyDomain": "www.transunion.com",
        "companyRevenueIn000s": 1506800
      },
      {
        "profileImageURL": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAF5AAAAJDgwMTRjZDI2LWQ3MTktNDUwNi04ZDlhLTg4NWNjMTdlNjVlMw.jpg",
        "firstName": "Amit",
        "lastName": "Chowdhry",
        "topLevelIndustry": "Software",
        "lastMentioned": "2017-03-13",
        "lastUpdatedDate": "2017-03-13",
        "name": "Amit Chowdhry",
        "managementLevel": "Manager",
        "title": "Support Engineering Manager - Escalations",
        "companyLogo": "http://i.s-microsoft.com/global/ImageStore/PublishingImages/logos/hp/logo-lg-1x.png",
        "companyName": "Microsoft Corporation",
        "companyAddress": {
          "Street": "One Microsoft Way",
          "City": "Redmond",
          "State": "Washington",
          "Zip": 98033,
          "CountryCode": "United States"
        },
        "companyRevenue": "$85.3 Billion",
        "companyRevenueRange": "Over $5 bil.",
        "companyEmployees": 114000,
        "companyEmployeeCountRange": "Over 10,000",
        "companyDomain": "www.microsoft.com",
        "companyRevenueIn000s": 85320000
      },
      {
        "profileImageURL": "http://www.jindalsteelpower.com/img/frontend/images/team/Rakesh-Kumar.jpg",
        "firstName": "Rakesh",
        "lastName": "Kumar",
        "topLevelIndustry": "Software",
        "lastMentioned": "2017-03-15",
        "lastUpdatedDate": "2017-03-15",
        "name": "Rakesh Kumar",
        "managementLevel": "Manager",
        "title": "Manager- Talent Aquisition",
        "companyLogo": "http://www.itcinfotech.com/Oracle-Openworld/images/itc_logo.jpg",
        "companyName": "ITC Infotech Inc",
        "companyAddress": {
          "Street": "12 Route 17 North Suite 303",
          "City": "Paramus",
          "State": "New Jersey",
          "Zip": "07652",
          "CountryCode": "United States"
        },
        "companyRevenue": "$3.4 Billion",
        "companyRevenueRange": "$1 bil. - $5 bil.",
        "companyEmployees": 7500,
        "companyEmployeeCountRange": "5,000 - 10,000",
        "companyDomain": "www.itcinfotech.com",
        "companyRevenueIn000s": 3403000
      }
    ];
  }


})();
