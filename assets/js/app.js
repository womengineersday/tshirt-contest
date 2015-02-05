var tc = angular.module('tc',
  ['ngRoute',
  'appControllers'
  ]);

var appControllers = angular.module('appControllers',[]);

tc.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/single', {
    templateUrl: 'assets/views/single.html',
    controller: 'GalleryController'
  }).
  when('/home', {
    templateUrl: 'assets/views/home.html',
    controller: 'GalleryController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
