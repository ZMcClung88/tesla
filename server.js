const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const massive = require('massive');
// const configs = require('./config.js');


var app = module.exports = express();

// var massiveInstance = massive.connectSync({connectionString : connectionString}),

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

// <<<<<<< HEAD
// var db = massive.connect({connectionString : connString},
//
//  function(err, localdb){
//    db = localdb;
//     app.set('db', db);
// ||||||| merged common ancestors
// var db = massive.connect({connectionString : connString},
//
// //  function(err, localdb){
// //    db = localdb;
//     app.set('db', db);
// =======
var connectionString = 'postgres://tesladb1:password@localhost/tesla'
var db = massive.connectSync({connectionString : connectionString})
app.set('db', db);
var db =  app.get('db')
// >>>>>>> 1177920557246e5864f805825f81e0d651304e1e
//
// <<<<<<< HEAD
//     // app.run(function(){
//       // db.createTables(function(x){
//         // console.log("!!!!!!!!!! Tables Created !!!!!!!!!!");
//         // console.log(x);
//       // });
//     // })
//  }
// )
// ||||||| merged common ancestors
//     // app.run(function(){
//       db.createTables(function(x){
//         console.log("!!!!!!!!!! Tables Created !!!!!!!!!!");
//         // console.log(x);
//       });
//     // })
// //  }
// //)
// =======
// >>>>>>> 1177920557246e5864f805825f81e0d651304e1e



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
