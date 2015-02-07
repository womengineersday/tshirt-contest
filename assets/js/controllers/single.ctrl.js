tc.controller('SingleController', ['$scope', '$location', 'ImgurService', '$routeParams',
	function($scope, $location, ImgurService, $routeParams) {

		$scope.baseURL = 'http://womengineersday.com/tshirts/#/s/';
		$scope.image = {};

		ImgurService.getImage($routeParams.id).then(function(result) {
			console.log("SingleController: calling ImgurService service to get image with ID: " + $routeParams.id);
			$scope.image = result;
			console.log("SingleController: image object loaded with URL: " + $scope.image.fullSource);
		});

		/*
			re-initialize the social media buttons once the image and
			it's URL have been retrieved
		*/
		$scope.$watch('image', function(newVal, oldVal) {
			console.log('SingleController: image object changed: ', $scope.image);
			try {
				console.log("reloading FB buttons");
				FB.XFBML.parse();
			} catch (ex) {}
			try {
				console.log("reloading Twitter button");
				twttr.widgets.load();
			} catch (ex) {}

			try {
				console.log("reloading Google+ button");
				gapi.plusone.go();
			} catch (ex) {}
		})



	}
]); //  SingleController