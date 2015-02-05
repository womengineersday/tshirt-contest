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


          var apiCall = Facebook.api('/430002157148842/photos', function(response) {
            if (response && !response.error) {
              apiCall.images = [];
              response.data.forEach(function(entry) {
                apiCall.images.push({
                  id: entry.id,
                  thumbnailSource: entry.source,
                  fullSource: entry.source,
                  datePosted: entry.created_time,
                  //likes: entry.likes.data.length,
                  link: entry.link,
                  caption: entry.name
                });
              });
              console.log(images);
              //return images;
            } else {
              console.log(response.error);
              //return [];
            }
          }, {
            access_token: '1538878606379836|ae28ecd25e2eb743ad1e564fcc04a506'
          });

          return apiCall;
          // GET https://graph.facebook.com/oauth/access_token?client_id=855878717790986&client_secret=08c27b96aaf6265b3575b3294d9ccdaf&grant_type=client_credentials

          //          return images;

        }

      };

      return facebookService;

    }
  ]);