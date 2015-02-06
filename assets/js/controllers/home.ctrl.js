tc.controller('HomeController', ['$scope', '$location', '$document', 'ImgurService', '$routeParams',
  function($scope, $location, $document, ImgurService, $routeParams) {

    $scope.baseURL = "http://womengineersday.com/tshirts";

    $scope.gallery = {
      images: []
    }

    ImgurService.getImages().then(function(result) {
      $scope.gallery.images = result;
      console.log("Home controller");
      console.log($scope.gallery);
    });

     $scope.smbInit = function() {
      $scope.$apply();
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

    $scope.setSMB = function(index, id) {
      console.log(index, id);
      var d = $document.find(id);
      try {
        FB.XFBML.parse(d);
        FB.XFBML.parse(document.getElementById(id));
      } catch(ex) { }
      console.log(d);
    }

  }
]); //  HomeController