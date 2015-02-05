tc.config([
    'FacebookProvider',
    function(FacebookProvider) {
      var myAppId = '1538878606379836';
      FacebookProvider.init(myAppId);
    }
  ])
  .factory('ImageService', ['$rootScope', '$location', '$http', '$q', 'Facebook',
    function($rootScope, $location, $http, $q, Facebook) {

      var facebookService = {

        getImages: function() {


          return Facebook.api('/430002157148842/photos',
              function(response) {}, {
                access_token: '1538878606379836|ae28ecd25e2eb743ad1e564fcc04a506'
              })
            .then(function(response) {

              var images = [];
              response.data.forEach(function(entry) {
                var image = {
                  id: entry.id,
                  thumbnailSource: entry.source,
                  fullSource: entry.source,
                  datePosted: entry.created_time,
                  //likes: entry.likes.data.length,        //this causes an error if the image has not been liked
                  link: entry.link,
                  caption: entry.name
                };
                images.push(image);

              });
              return images;

            });
        }

      };

      return facebookService;

    }
  ]);