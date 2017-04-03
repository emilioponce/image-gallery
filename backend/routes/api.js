import express from 'express';
import Flickr from 'node-flickr';
import config from '../../config/config';

var router = express.Router();

// Setting API Key for PUBLIC access
var flickr = new Flickr({
  api_key: config.API_KEY
});

function getImagesPage(images) {

  var domainImages = images.photo.map(function(image){
    return {
      'id': image.id,
      'title': image.title,
      'url': 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'_q.jpg'
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
    {"tags":config.TAGS, "page":requestedPag, "per_page":config.IMAGES_PER_PAGE},
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
