'use strict'
const express         = require('express');
const router          = express.Router();


router.get('/parks', function(req,res){
  res.render('parks/parks')
})

module.exports = router;
