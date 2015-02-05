tc.controller('SingleController', ['$scope', '$location', 'ImageService', '$routeParams',
  function($scope, $location, ImageService, $routeParams) {

  	$scope.single = {
      id: $routeParams.id,
      image : {},
      meta : {
      	votes: 100,
		ranking: 20,
		total: 50
      }
    }

    ImageService.getImage($routeParams.id).then(function(result) {
      $scope.single.image = result;
      console.log("Single controller");
      console.log($scope.image);
    })

   
  }
]); //  SingleController