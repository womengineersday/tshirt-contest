tc.factory('ImgurService', ['$rootScope', '$location', '$http', '$q',
  function($rootScope, $location, $http, $q) {

    var imgurService = {

      /*
        Returns a list of images from the imgur api
      */
      getImages: function() {
        return $http.get('https://api.imgur.com/3/album/3HVhh', {
          headers: {
            Accept: 'application/json',
            Authorization: 'Client-Id 7787cb4c8d72688'
          }
        }).then(function(getResult) {
            console.log("getImages");
            console.log(getResult);
            var images = [];
            getResult.data.data.images.forEach(function(entry) {
              //images.push(resultToImage(entry));
              var image = {
                id: entry.id,
                thumbnailSource: entry.link,
                fullSource: entry.link,
                datePosted: entry.datetime,
                description: entry.description,
                title: entry.title
              };
              images.push(image);
            });
            return images;
          }

        );
      },

      /*
        Returns a single image from the imgur api
      */
      getImage: function(imageId) {
        return $http.get('https://api.imgur.com/3/image/' + imageId, {
          headers: {
            Accept: 'application/json',
            Authorization: 'Client-Id 7787cb4c8d72688'
          }
        }).then(function(getResult) {
            console.log("getImage");
            console.log(getResult);
            var getResult = getResult.data.data; //LOLZ
            var image = {
              id: getResult.id,
              thumbnailSource: getResult.link,
              fullSource: getResult.link,
              datePosted: getResult.datetime,
              description: getResult.description,
              title: getResult.title
            };
            return image;
          }

        );


      },

      resultToImage: function(result) {
        return {
          id : result.id,
          thumbnailSource: result.link,
          fullSource: result.link,
          datePosted: result.datetime,
          title: result.title,
          description: result.description
        }
      }

    };

    return imgurService;

  }
]);