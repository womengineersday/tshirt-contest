tc.config([
    'FacebookProvider',
    function(FacebookProvider) {
      var myAppId = '1538878606379836';
      FacebookProvider.init(myAppId);
    }
  ])
  .factory('FacebookAPI', ['$rootScope', '$location', '$http', 'Facebook',
    function($rootScope, $location, $http, Facebook) {

      var facebookService = {

        getImages: function() {

          var images = [{
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }, {
            id: "444410022374722",
            thumbnailSource: "http://placehold.it/300x300",
            fullSource: "http://placehold.it/500x500",
            datePosted: "2014-02-05",
            likes: "50",
            shares: "20"
          }];


          Facebook.api('/1538878606379836', function(response) {
            console.log(response);
          });

          Facebook.api('/430002157148842', function(response) {
            console.log(response);
          });

          /*FB.api(
            "/430002157148842",
            function(response) {
              if (response && !response.error) {
                console.log(response);
              } else {
                console.log("error", response);
              }
            }
          );*/


          /*var pageAccessToken = '855878717790986|YGl9fgn2EFAw9Av8AopfbIuQiog';
          FB.api('/430002157148842/photos', {
              access_token: pageAccessToken
            },
            function(resp) {
              console.log(resp);
              //images = resp.data;
              tc.willis_images = resp.data;
            }
          );*/

          // Get the access token
          // GET https://graph.facebook.com/oauth/access_token?client_id=855878717790986&client_secret=08c27b96aaf6265b3575b3294d9ccdaf&grant_type=client_credentials

          return images;

        }

      };

      return facebookService;

    }
  ]);