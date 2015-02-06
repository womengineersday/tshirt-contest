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
                datePosted: new Date(entry.datetime * 1000).toString("M/d/yy"),
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
        calls the album api
        finds the image with the passed imageId
        sets its image properties, including prevId and nextId
      */

      getImage: function(imageId) {
        return $http.get('https://api.imgur.com/3/album/3HVhh', {
          headers: {
            Accept: 'application/json',
            Authorization: 'Client-Id 7787cb4c8d72688'
          }
        }).then(function(getResult) {
            var resultImages = getResult.data.data.images;  //  Rename the convoluted array
            var image = null;
            for(var i = 0; i < resultImages.length; i++) {
              if (resultImages[i].id === imageId) {
                //  Set image properties
                image = {
                  id: resultImages[i].id,
                  thumbnailSource: resultImages[i].link,
                  fullSource: resultImages[i].link,
                  datePosted: new Date(resultImages[i].datetime * 1000).toString("M/d/yy"),
                  description: resultImages[i].description,
                  title: resultImages[i].title,
                  prevId: null,
                  nextId: null
                };
                //  Set previous and next image id's
                if(i == 0) {
                  image.prevId = resultImages[resultImages.length - 1].id;
                  image.nextId = resultImages[i + 1].id;
                } else if(i == resultImages.length - 1) {
                  image.prevId = resultImages[i - 1].id;
                  image.nextId = resultImages[0].id;
                } else {
                  image.prevId = resultImages[i - 1].id;
                  image.nextId = resultImages[i + 1].id;
                }
              }
            }
            return image;
          }

        );
      },

      resultToImage: function(result) {
        return {
          id: result.id,
          thumbnailSource: result.link,
          fullSource: result.link,
          datePosted: new Date(result.datetime * 1000).toString("M/d/yy"),
          title: result.title,
          description: result.description
        }
      }

    };

    return imgurService;

  }
]);