tc.controller('HomeController', ['$scope', '$location', 'ImageService', '$routeParams',
  function($scope, $location, ImageService, $routeParams) {

    $scope.gallery = {
      images: []
    }

    ImageService.getImages().then(function(result) {
      $scope.gallery.images = result;
      console.log("Home controller");
      console.log($scope.gallery);
    })



  }
]); //  HomeController