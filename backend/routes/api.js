import express from 'express';
import Flickr from 'node-flickr';

var router = express.Router();

//@TODO properties
const API_KEY = "9b59ed7d0dd204ba3c9f0f210fa559d6";
const TAGS = "cats,dogs,horses";
const IMAGES_PER_PAGE = 18;

// Setting API_KEY for PUBLIC access
var flickr = new Flickr({
  api_key: API_KEY
});

function getImagesPage(images) {

  var domainImages = images.photo.map(function(image){
    return {
      'title': image.title,
      'url':'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'_q.jpg',
      'owner': 'https://www.flickr.com/people/'+image.owner
    }
  });

  return {
    'page': images.page,
    'pages': images.pages,
    'images': domainImages
  }
}

/* GET Flickr Images */
router.get('/images', function(req, res, next) {

  // validate obligatory query param
  var requestedPag = req.query.pag;
  if(!requestedPag) {
    res.status(400).send("Query param 'pag' required");
    return;
  }

  flickr.get(
    "photos.search",
    {"tags":TAGS,"page":requestedPag,"per_page":IMAGES_PER_PAGE},
    function(err, result){
      if (err) {
        return res.send(err);
      }

      var imagesPage = getImagesPage(result.photos);
      res.send(imagesPage);
    });

  });


  /* GET Flickr Image */
  router.get('/images/:id', function(req, res, next) {

// EXAMPLE id: 9638138263

    // validate obligatory path param
    var imageId = req.params.id;
    if(!imageId) {
      res.status(400).send("Path param 'id' required");
      return;
    }

    flickr.get("photos.getInfo", {"photo_id":imageId}, function(err, result){
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  });


  module.exports = router;
