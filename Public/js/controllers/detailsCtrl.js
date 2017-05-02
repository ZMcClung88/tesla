angular.module('tsla').controller('detailsCtrl', function($scope, detailsService, $stateParams){
    $scope.test = "is this thing working yet?";

    console.log($stateParams.id);

    detailsService.getCar($stateParams.id, function(response){
      console.log(response);
      $scope.car = response;
    })


    $('#emailbtn').on('click', function(){
      // $(this).css('border','3px solid blue');

      $overlay = $('<div/>').css({
        'width':'100%',
        'height':'200%',
        'backgroundColor':'rgba(50,50,50,0.5)',
        'position':'absolute',
        'top':0,
        'left':0
      }).appendTo('body')


      $modal = $('<div/>').css({
        'width':750,
        'height': 500,
        'margin':'60% auto',
        'position': 'relative',
        'background-color':'white',
        'border':'3px solid #505050'
      }).appendTo($overlay)

      $modal.on('mouseout', function(){
        $overlay.remove()
      })


    })

  })
