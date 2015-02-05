tc.controller('GalleryController',  ['$scope', '$location', '$document', '$http', 'Facebook', '$routeParams',
function($scope, $location, $document, $http, Facebook, $routeParams) {

  $scope.imageId = $routeParams.imageId;

  $scope.gallery = {
    images : Facebook.getImages(),

    getImages : function() {
    	console.log($scope.gallery.images);
		Facebook.getImages();
    }
  }

  $scope.singleImage = {
  	imageId : $routeParams.imageId,
  	dateSubmitted : Date.today().toString("yyyy-MM-dd"),
  	votes : 50,
  	ranking: 3,
  	total: 25
  }





}]); //  GalleryController
