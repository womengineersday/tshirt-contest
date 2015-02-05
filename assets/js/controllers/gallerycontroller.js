tc.controller('GalleryController',  ['$scope', '$location', '$document', '$http', 'Facebook', '$routeParams',
function($scope, $location, $document, $http, Facebook, $routeParams) {

  $scope.imageId = $routeParams.imageId;

  $scope.gallery = {
    //imageList : Facebook.getImages();
    getImages : function() {
      Facebook.getImages();
    }
  }





}]); //  GalleryController
