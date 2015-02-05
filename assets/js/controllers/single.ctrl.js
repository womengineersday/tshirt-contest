tc.controller('SingleController', ['$scope', '$location', 'ImageService', '$routeParams',
  function($scope, $location, ImageService, $routeParams) {

  	$scope.image = {
      id: $routeParams.id,
      datePosted: "2014-02-05",
      votes: 100,
      ranking: 20,
      total: 50
    }

    ImageService.getImage($routeParams.id).then(function(result) {
      $scope.image = result;
      console.log("Single controller");
      console.log($scope.image);
    })

   
  }
]); //  SingleController