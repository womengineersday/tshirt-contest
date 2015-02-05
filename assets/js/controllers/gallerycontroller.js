tc.controller('GalleryController',  ['$scope', '$location', '$document', '$http', 'Facebook', '$routeParams',
function($scope, $location, $document, $http, Facebook, $routeParams) {

  $scope.gallery = {
    images : Facebook.getImages(),

    getImages : function() {
    	console.log($scope.gallery.images);
		Facebook.getImages();
    },

    printTest : function() {
    	console.log($scope.gallery.images);
    }
  }

  $scope.single = {
  	routeId : $routeParams.id,
  	image : $scope.gallery.images[0],		//TODO: create getImage() function to pull image according to routeId
  	votes: 100,
  	ranking: 20,
  	total: 50
  	
  }

	/*$scope.getImage = function() {
		$scope.gallery.images.forEach(function(entry) {
			if(entry.id === routeId) return entry;
		});
		console.log("Error: image not found in list.");
		return null;
	};*/





}]); //  GalleryController
