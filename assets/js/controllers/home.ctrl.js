tc.controller('HomeController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    $scope.gallery = {
      images: []
    }

    ImgurService.getImages().then(function(result) {
      $scope.gallery.images = result;
      console.log("Home controller");
      console.log($scope.gallery);
    })

    // Once that's all done, call addthis.toolbox()
    addthis.toolbox('.addthis_toolbox');

  }
]); //  HomeController