tc.controller('HomeController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    $scope.baseURL = "http://womengineersday.com/tshirts/#/";

    $scope.gallery = {
      images: []
    }

    ImgurService.getImages().then(function(result) {
      $scope.gallery.images = result;
      console.log("Home controller");
      console.log($scope.gallery);
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
]); //  HomeController