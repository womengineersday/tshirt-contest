tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {
 
    $scope.image = {};

    ImgurService.getImage($routeParams.id).then(function(result) {
      console.log("SingleController: calling ImgurService service to get image with ID: " + $routeParams.id);
      $scope.image = result;
    });

 //    $scope.social = {
 //    	url : 'http://imgur.com/' + $routeParams.id,
 //    	//url : $location.absUrl(),
 //    	//url2 : window.location.href,
 //    	fburl : encodeURIComponent(encodeURIComponent($location.absUrl())),

 //    	title : 'Check out this submission for the #WomEngineersDay T-Shirt Contest',
 //    	description : 'Check out this submission for the #WomEngineersDay T-Shirt Contest'
 //    }

 //    $scope.myModel = {
	//   Name: "Check out this submission for the #WomEngineersDay T-Shirt Contest!",
	//   ImageUrl: 'http://www.jasonwatmore.com/pics/jason-watmore.jpg',
	//   FbLikeUrl: encodeURIComponent(encodeURIComponent($location.absUrl()))
	//   //FbLikeUrl: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx'
	// };

 //    console.log($scope.social.url);

 	$scope.social = {
 		fbURL : 'http://imgur.com/' + $routeParams.id
 	}

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


    //$scope.smbInit();

  }
]); //  SingleController