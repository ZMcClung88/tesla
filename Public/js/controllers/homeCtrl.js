angular.module('tsla').controller('homeCtrl', function($scope){



  $('.newsletter-link').on('click', function(){
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
      'height': 400,
      'margin':'10% auto',
      'position': 'relative',
      'background-color':'white',
      // 'border':'3px solid #505050',
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'text-align': 'center',
      'color': 'grey'
    }).appendTo($overlay)

    $modal.append('<div class="newsletterModal-header"></div>\
                   <div class="newsletterModal-content">\
                     <h1>Get Tesla Updates</h1>\
                     <p>GET NEWSLETTER</p>\
                     <input placeholder=" example@email.com"></input>\
                     <button>SIGN UP</button>\
                    </div> ')


    $overlay.on('click', function(){
      $overlay.remove()
    })

  }),

  $('#order-btn').on('click', function(){
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
      'width':900,
      'height': 500,
      'margin':'10% auto',
      'position': 'relative',
      'background-color':'white',
      // 'border':'3px solid #505050',
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center',
      'text-align': 'center',
      'border-radius': '2px',
      // 'padding-top': '50px'
    }).appendTo($overlay)

    $modal.append('<div class="orderModal-header"></div>\
                  <div class="orderModal-title"><h1>Select A Model</h1></div>\
                  <div class="orderModal-desc">\
                    <div class="orderModal-left" style="display: flex; flex-direction: column; justify-content: space-around; margin-top: 3.5%"><img src="images/modal-select-models.png" style="height:180px;width:300px"/>\
                          <button id="orderModal-btn">MODEL S</button>\
                          <p style="color: #CC0000; font-weight:bolder; font-size:18px">Shop New Inventory</p>\
                          <p style="font-family: Gotham Light">Electric Sedan</p>\
                          <p style="font-family: Gotham Light">Quickest, Longest Range</p>\
                          <p style="font-family: Gotham Light">Seats 5 Adults</p>\
                    </div>\
                     <div class="orderModal-right" style="display: flex; flex-direction: column; justify-content: space-around"><img src="./images/model-select-modelx.png" style="height:200px;width:300px" />\
                           <button id="orderModal-btn">MODEL X</button>\
                           <p style="color: #CC0000; font-weight:bolder; font-size:18px">Shop New Inventory</p>\
                           <p style="font-family: Gotham Light">Electric SUV</p>\
                           <p style="font-family: Gotham Light">Spacious, Tow Rated</p>\
                           <p style="font-family: Gotham Light">Seats 7 Adults</p></div>\
                     </div>\
                   <div>\
    ')

    $overlay.on('click', function(){
      $overlay.remove()
    })

  }),

  $('#testdrive-btn').on('click', function(){
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
      'margin':'10% auto',
      'position': 'relative',
      'background-color':'white',
      // 'border':'3px solid #505050'
    }).appendTo($overlay)

    $modal.append('<div class="testDrive-modal">\
                    <div><h1>Schedule a Test Drive</h1></div>\
                        <div><p>Drivers must have a valid driver\'s license and be over the age of 21.</p></div>\
                        <div class="testdrive-form">\
                            <div class="modal-field">\
                                <label for="name">First</label>\
                                <input type="text" id="firstName" name="user_firstName">\
                            </div>\
                            <div class="modal-field">\
                                <label for="name">Last</label>\
                                <input type="text" id="lastName" name="user_lastName">\
                            </div>\
                            <div class="modal-field">\
                                <label for="mail">Email</label>\
                                <input id="mail" name="user_email"></input>\
                            </div>\
                            <div class="modal-field">\
                                <label for="phone">Phone</label>\
                                <input id="phone" name="user_phone"></input>\
                            </div>\
                            <div class="modal-field">\
                                <label for="country">Country</label>\
                                <input id="country" name="user_country"></input>\
                            </div>\
                            <div class="modal-field">\
                                <label for="zip">Zip</label>\
                                <input id="zip" name="user_zip"></input>\
                            </div>\
                        </div>\
                  </div>\
      ')

    $overlay.on('click', function(){
      $overlay.remove()
    })

  })

})
