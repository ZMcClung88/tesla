const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const massive = require('massive');
//var connString = "postgres://gfktnokb:eRF1aoO64gP0Z-wPB7AJHTEiibzhC9YR@hard-plum.db.elephantsql.com:5432/gfktnokb";
var connString = "postgres://tesladb1:password@localhost/tesla";



var app = module.exports = express();
// var connectionString = 'postgres://postgres:@localhost/tesla'
// var massiveInstance = massive.connectSync({connectionString : connectionString})

app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.json());
app.use(cors());

var db = massive.connect({connectionString : connString},

  function(err, localdb){
    db = localdb;
    app.set('db', db);

    // app.run(function(){
      db.createTables(function(x){
        console.log("!!!!!!!!!! Tables Created !!!!!!!!!!");
        // console.log(x);
      });
    // })
  }
)



var serverCtrl = require('./serverCtrl');

const port = 4000;
app.listen(port, function(){
  console.log("Yoda Lay Hee Whoo", port)
})

app.get('/api/cars', serverCtrl.getAllCars)
app.get('/api/cars/:id', serverCtrl.getCarById)
// app.get('/api/cars/:color', serverCtrl.filterCars)
// app.get('/api/cars/:color', function(req,res){
//     res.send({ cars.color })
// })

app.all('/*', function(req, res, next){
  res.header("Access-Contro-Allow-Origin", '*');
})
