var tc = angular.module('tc', ['ngRoute',
  'appControllers'
]);

var appControllers = angular.module('appControllers', []);

tc.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
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

}]);