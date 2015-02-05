tc.factory('Facebook',
['$rootScope', '$location', '$http',
function($rootScope, $location, $http) {

  var facebookService = {

    getImages : function() {
      alert("getting images from fb");
    }

  };

  return facebookService;

}]);
