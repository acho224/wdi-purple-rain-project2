'use strict'
//'https://api.foursquare.com/v2/venues/explore?query=dog+parks&near=nyc&oauth_token=R01PRND41DCTK44EBZZIS4GOCGF0A3ITQSKBSG5EZWAHQ1XQ&v=20160701'

const MongoClient   = require('mongodb').MongoClient
const dbConnection  = 'mongodb://localhost:27017/dog_parks'
const token         = process.env.FS_OAUTH;
const request       = require('request')

var date            = new Date();
var year            = date.getFullYear();
var month           = ("0" + (date.getMonth() + 1)).slice(-2);
var day             = ("0" + date.getDate()).slice(-2);
var fullDate        = year.toString()+month.toString()+day.toString();

module.exports = {
  searchParks: function(req,res,next){
    request ({
      url: 'https://api.foursquare.com/v2/venues/explore',
      qs: {
        query:'dog'+'park',
        near:'nyc',
        oauth_token: token,
        v: fullDate
      },
    method: 'GET'
  }, function (err, response, body){
      if (err)throw err;
      console.log(body);
      res.json(JSON.parse(body));
    })
      next()
  }
}



