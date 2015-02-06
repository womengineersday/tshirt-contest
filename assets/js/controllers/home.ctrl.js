tc.controller('HomeController', ['$scope', '$location', '$document', 'ImgurService', '$routeParams',
  function($scope, $location, $document, ImgurService, $routeParams) {

    $scope.images = [];

    ImgurService.getImages().then(function(result) {
      console.log("HomeController: calling ImgurService.getImages()");
      $scope.images = result;
    });


  }
]); //  HomeController