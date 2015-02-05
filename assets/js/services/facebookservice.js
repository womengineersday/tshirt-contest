tc.factory('Facebook',
['$rootScope', '$location', '$http',
function($rootScope, $location, $http) {

  var facebookService = {

    getImages : function() {

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
