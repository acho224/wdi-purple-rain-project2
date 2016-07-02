'use strict'
const express         = require('express');
const router          = express.Router();
const parksModel       = require('../models/park_models')


router.get('/api', parksModel.searchParks, function(req,res){
})

module.exports = router;
