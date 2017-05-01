var app = require('./server.js');

module.exports = {
  getAllCars: function(req, res) {
    var db = app.get('db');
    db.getAllCars(function(err, cars){
      if(!err) {
        res.send(cars);
      }
    })

  },
  getCarById: function(req, res) {
    var db = app.get('db');
    db.getCarById(req.params.id, function(err, car){
      if(!err) {
        res.send(car);
      }else {
        console.log("We have an error");
        console.log(err);
      }
    })
  }
}
