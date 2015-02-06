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

    $scope.smbInit = function() {
      try{
        console.log("reloading FB buttons");
        FB.XFBML.parse();
      }catch (ex) { }    

      try {
        console.log("reloading Twitter button");
        twttr.widgets.load();  
      } catch(ex) { }

      try {
        console.log("reloading Google+ button");
        gapi.plusone.go();
      } catch(ex) { }
    };

    //Call any functions that depend on DOM elements being loaded.
    $scope.$on('$viewContentLoaded', function(){
      $scope.smbInit();
    });

  }
]); //  SingleController