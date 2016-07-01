'use strict'
const express                 = require('express')
const path                    = require('path')
const logger                  = require('morgan')
const bodyParser              = require('body-parser')
const session                 = require('express-session')
const methodOverride          = require('method-override')

const homeRoute               = require('./routes/home_route')
const app                     = express()
const PORT                    = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')))

app.use('/', homeRoute)


app.listen(PORT, function(){
  console.log('Listening to ANDRE ', PORT)
});

// https://api.foursquare.com/v2/venues/search?near=nyc&query=dogpark&oauth_token=R01PRND41DCTK44EBZZIS4GOCGF0A3ITQSKBSG5EZWAHQ1XQ&v=20160630
