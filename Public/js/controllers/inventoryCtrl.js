angular.module('tsla').controller('inventoryCtrl', function($scope, inventoryService){

  inventoryService.getCars(function(data){
        $scope.Cars = data;
        console.log(data);
  });

})
