tc.factory('Facebook',
['$rootScope', '$location', '$http',
function($rootScope, $location, $http) {

  var facebookService = {

    getImages : function() {

		var images = [{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"},{id:"444410022374722",thumbnailSource:"http://placehold.it/300x300",fullSource:"http://placehold.it/500x500",datePosted:"2014-02-05",likes:"50",shares:"20"}];		 var pageAccessToken = '855878717790986|YGl9fgn2EFAw9Av8AopfbIuQiog';
      	FB.api('/430002157148842/photos', 
              { access_token : pageAccessToken }, 
              function(resp) {
                console.log(resp);
                tc.willis_images = resp.data;
              }
        );


		return images;

    }

  };

  return facebookService;

}]);
