tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    //re-initialize sharethis buttons
    //addthis.init();

    $scope.single = {
      id: $routeParams.id,
      image: {},
      meta: {
        votes: 100,
        ranking: 20,
        total: 50
      }
    }

    ImgurService.getImage($routeParams.id).then(function(result) {
      $scope.single.image = result;
      console.log("Single controller");
      console.log($scope.image);
    })

    //Reload all of the social media buttons on the page.
    try{
        FB.XFBML.parse(); 
        twttr.widgets.load();
        gapi.plusone.go();
    }catch(ex){}    



  }
]); //  SingleController