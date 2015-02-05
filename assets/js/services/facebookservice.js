tc.factory('Facebook',
['$rootScope', '$location', '$http',
function($rootScope, $location, $http) {

  var facebookService = {

    getImages : function() {

        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token 
            // and signed request each expire
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            console(response.authResponse);

          } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook, 
            // but has not authenticated your app
            console.log("NOT AUTHORIZED");
          } else {
            // the user isn't logged in to Facebook.
            console.log("NOT LOGGED IN");
          }
        });

      	FB.api('/430002157148842/photos',  function(resp) {
            console.log(resp);
        });


		var image = {
			"thumbnailSource" : "http://placehold.it/300x300",
			"fullSource" : "http://placehold.it/500x500",
			"datePosted" : Date.today().toString("yyyy-MM-dd"),
			"likes" : "50",
			"shares" : "20"		//if you can get that
		}
		var images = [];
		for(var i = 0; i < 20; i++) images.push(image);

		return images;

    }

  };

  return facebookService;

}]);
