tc.factory('Facebook',
['$rootScope', '$location', '$http',
function($rootScope, $location, $http) {

  var facebookService = {

    getImages : function() {

      	FB.api('/1020500147046947/albums',  function(resp) {
            alert("I'm here...");
            console.log(resp);

            
        });

    }

  };

  return facebookService;

}]);
