tc.controller('GalleryController', ['$scope', '$location', '$document', '$http', 'FacebookAPI', '$routeParams',
      function($scope, $location, $document, $http, FacebookAPI, $routeParams) {

        $scope.gallery = {
          images: []
        }

        FacebookAPI.getImages().then(function(result) {
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
            FacebookAPI.getImages().then(function(result) {
                result.forEach(function(entry) {
                  if (entry.id == newVal) {
                    $scope.single.image = entry;
                  }
                });
              });
            });



        }
      ]); //  GalleryController