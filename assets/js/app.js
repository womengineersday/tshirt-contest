var tc = angular.module('tc',
  ['ngRoute',
  'appControllers'
  ]);

var appControllers = angular.module('appControllers',[]);

tc.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/home', {
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
    redirectTo: '/home'
  });
}]);
