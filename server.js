const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const massive = require('massive');
const configs = require('./config.js');


var app = module.exports = express();
// var connectionString = 'postgres://postgres:@localhost/tesla'
// var massiveInstance = massive.connectSync({connectionString : connectionString}),

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

var db = massive.connectSync({connectionString : configs.serverSecret})
app.set('db', db);
var db =  app.get('db')

//   function(err, localdb){
    // app.run(function(){
      // db.createTables(function(x){
      //   console.log("!!!!!!!!!! Tables Created !!!!!!!!!!");
      //   // console.log(x);
      // });
    // })
  // }
// )






var serverCtrl = require('./serverCtrl.js');

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

// app.all('/*', function(req, res, next){
//   res.header("Access-Contro-Allow-Origin", '*');
// })
