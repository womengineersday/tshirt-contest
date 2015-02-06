tc.controller('HomeController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {

    $scope.gallery = {
      images: []
    }

    ImgurService.getImages().then(function(result) {
      $scope.gallery.images = result;
      console.log("Home controller");
      console.log($scope.gallery);

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
]); //  HomeController