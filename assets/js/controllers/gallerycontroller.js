tc.controller('GalleryController', ['$scope', '$location', '$document', '$http', 'FacebookAPI', '$routeParams',
  function($scope, $location, $document, $http, FacebookAPI, $routeParams) {

    $scope.gallery = {
      // getImages: FacebookAPI.getImages(),
      // images : $scope.gallery.getImages().$then(function() {
      //   return $scope.gallery.getImages;
      // }),

      printTest: function() {
        console.log("printTest called");
        console.log($scope.gallery.images);
        //console.log(FacebookAPI.getImages());
      }
    }

    $scope.single = {
      routeId: $routeParams.id,
      image: {
        id: "444410022374722",
        thumbnailSource: "http://placehold.it/300x300",
        fullSource: "http://placehold.it/500x500",
        datePosted: "2014-02-05",
        likes: "50",
        shares: "20"
      },
      votes: 100,
      ranking: 20,
      total: 50

    }

    FacebookAPI.getImages().then(function(result) {
      $scope.gallery.images = result;
      console.log("getImages call returned:");
      console.log(result);
    })

  }
]); //  GalleryController