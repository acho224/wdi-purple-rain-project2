'use strict'
const express         = require('express');
const router          = express.Router();
const parksJson       = require('../parksJson.json')

router.get('/', function(req,res){
  res.json(parksJson)
})


module.exports = router;
