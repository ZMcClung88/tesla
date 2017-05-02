angular.module('tsla').service('inventoryService', function($http){

  this.getCars = function(callback){
    $http.get('http://127.0.0.1:4000/api/cars').then(
      function(response){
        callback(response.data);
        console.log(response.data)
      },
      function(err){
        callback(err)
      })
  },
  this.filterCars = function(color, callback){
    console.log('color');
  }


})
