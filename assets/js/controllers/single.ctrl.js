tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    $scope.baseURL = "http://womengineersday.com/tshirts";

    $scope.getURL = function() {
      console.log("getURL called");
      return $scope.baseURL + "/#/s/" + $scope.single.id;
    }

    $scope.single = {
      id: $routeParams.id,
      image: {}
    }

    ImgurService.getImage($routeParams.id).then(function(result) {
      $scope.single.image = result;
      console.log("Single controller");
      console.log($scope.image);
      $scope.smbInit();
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

  }
]); //  SingleController