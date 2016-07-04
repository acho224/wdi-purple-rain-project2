'use strict'
const router = require('express').Router();
const { createUser, loginUser } = require('../models/user');


// NEW USER
router.get('/newuser', function(req,res){
  res.render('user/new/create_user')
})

router.post('/newuser', createUser, function(req,res) {
  console.log(req.body);
  req.session.user = res.user;
  req.session.save((err)=>{
    if(err)throw err;
    res.redirect('/user/login');
  })
})


// LOGIN
router.get('/login', function(req, res){
  res.render('user/login/login')
})

router.post('/login', loginUser, function(req,res) {
  console.log('made it here');
  console.log('user: ' + req.session.user)
  req.session.user = res.user;
  req.session.save(function(err) {
    if(err) throw err;
    res.redirect('/');
  });
});

router.delete('/logout', function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

module.exports = router;
