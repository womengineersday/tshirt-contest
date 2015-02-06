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
    });

    //Reload all of the social media buttons on the page.
    try{
        console.log("reloading FB buttons");
        FB.XFBML.parse();
    }catch (ex) { }    

    try {
      console.log("reloading Twitter button");
      twttr.widgets.load();  
    } catch(ex) { }

    try {
      console.loog("reloading Google+ button");
      gapi.plusone.go();
    } catch(ex) { }


  }
]); //  SingleController