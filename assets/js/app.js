var tc = angular.module('tc', ['ngRoute',
  'appControllers',
  'ngSocial',
  'angulike'
]).run([
      '$rootScope', function($rootScope) {
          $rootScope.facebookAppId = '1538878606379836';
      }
  ]);

var appControllers = angular.module('appControllers', []);

tc.config(function($routeProvider, $locationProvider) {
  
  $routeProvider.
  when('/', {
    templateUrl: 'assets/views/home.html',
    controller: 'HomeController'
  }).
  when('/s/:id', {
    templateUrl: 'assets/views/single.html',
    controller: 'SingleController'
  }).
  when('/detailsrules', {
    templateUrl: 'assets/views/detailsrules.html',
    controller: 'StaticPageController'
  }).
  otherwise({
    redirectTo: '/'
  });

  // use the HTML5 History API
  //$locationProvider.html5Mode(true);

});