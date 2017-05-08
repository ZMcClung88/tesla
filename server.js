const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const massive = require('massive');
const configs = require('./config.js');


var app = module.exports = express();

// var massiveInstance = massive.connectSync({connectionString : connectionString}),

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

var connectionString = 'postgres://tesladb1:password@localhost/tesla'
var db = massive.connectSync({connectionString : connectionString})
app.set('db', db);
var db =  app.get('db')




var serverCtrl = require('./serverCtrl.js');

const port = 80;
app.listen(port, function(){
  console.log("Yoda Lay Hee Whoo", port)
  // db.createTables(function(x){
  //    console.log("!!!!!!!!!! Tables Created !!!!!!!!!!");
  //     console.log(x);
  //  });
})

app.get('/api/cars', serverCtrl.getAllCars)
app.get('/api/cars/:id', serverCtrl.getCarById)
// app.get('/api/cars/:color', serverCtrl.filterCars)
// app.get('/api/cars/:color', function(req,res){
//     res.send({ cars.color })
// })

// app.all('/*', function(req, res, next){
//   res.header("Access-Contro-Allow-Origin", '*');
// })
