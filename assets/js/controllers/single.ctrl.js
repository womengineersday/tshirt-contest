tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    $scope.image = {};

    ImgurService.getImage($routeParams.id).then(function(result) {
      console.log("SingleController: calling ImgurService service to get image with ID: " + $routeParams.id);
      $scope.image = result;
    });

  }
]); //  SingleController