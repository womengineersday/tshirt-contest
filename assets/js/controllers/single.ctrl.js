tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    $scope.current_title = 'Test';
    $scope.current_description = 'Test description';
	$scope.socialURL = $location.absUrl();
    $scope.testURL = $location.absUrl();
    
    $scope.image = {};

    ImgurService.getImage($routeParams.id).then(function(result) {
      console.log("SingleController: calling ImgurService service to get image with ID: " + $routeParams.id);
      $scope.image = result;
    });

    



  }
]); //  SingleController