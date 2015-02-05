tc.controller('GalleryController', ['$scope', '$location', '$document', '$http', 'ImageService', '$routeParams',
      function($scope, $location, $document, $http, ImageService, $routeParams) {

        $scope.gallery = {
          images: []
        }

        ImageService.getImages().then(function(result) {
          //console.log(result);
          $scope.gallery.images = result;
        })

        $scope.single = {
          routeId: $routeParams.id,
          image: {},
          votes: 100,
          ranking: 20,
          total: 50
        }

        $scope.$watch($routeParams.id, function(newVal, oldVal) {
            ImageService.getImages().then(function(result) {
                result.forEach(function(entry) {
                  if (entry.id == newVal) {
                    $scope.single.image = entry;
                  }
                });
              });
            });



        }
      ]); //  GalleryController