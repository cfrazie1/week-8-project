const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost/goose");

const cars = mongoose.model("Cars", carsSchema);


const newCar = new cars({
  make: { type: String, required: true, unique: true },
  model: String,
  engineSize: Number,
  color: String,
  features: [{
    sunRoof: String,
    leatherSeats: true
  }],

});

router.get('/', function(req, res){
   carData.find({}).then(function(cars){
     res.render("index", {cars});
   })
});

router.get('/edit/:id', function(req, res){
   var idCars = req.params.id;
  sneakerData.findOne({_id: idCars}).then(function(car){
    res.render('edit', {myCars:make})

  });
});

router.post('/index', function(req, res){
  var car = new carData({
    make:req.body.make,
    model:req.body.model,
    features:[{
      leatherSeats:req.body.leatherSeats,
      sunRoof:req.body.sunRoof,

    }]
  })

  router.post('/edit', function(req,res){
    carData.updateOne({_id:req.body.edit},
      {
        make:req.body.make,
        "features":{name: req.body.leatherSeats, sunroof: req.body.sunRoof,
        size: req.body.size
      }).then(function(Cars){
          res.redirect('/');


});

module.exports = router;
module.exports = carData;
