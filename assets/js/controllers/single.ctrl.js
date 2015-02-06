tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
  function($scope, $location, ImgurService, $routeParams) {
 
    $scope.social = {
    	url : $location.absUrl(),
    	fburl : encodeURIComponent(encodeURIComponent($location.absUrl())),
    	title : 'Check out this submission for the #WomEngineersDay T-Shirt Contest',
    	description : 'Check out this submission for the #WomEngineersDay T-Shirt Contest'
    }

    $scope.image = {};

    ImgurService.getImage($routeParams.id).then(function(result) {
      console.log("SingleController: calling ImgurService service to get image with ID: " + $routeParams.id);
      $scope.image = result;
    });

    $scope.myModel = {
	  Name: "Check out this submission for the #WomEngineersDay T-Shirt Contest!",
	  ImageUrl: 'http://www.jasonwatmore.com/pics/jason-watmore.jpg',
	  FbLikeUrl: encodeURIComponent(encodeURIComponent($location.absUrl()))
	  //FbLikeUrl: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx'
	};

    console.log($scope.social.url);

  }
]); //  SingleController