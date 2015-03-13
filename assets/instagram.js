$(function(){

  var feed = new Instafeed({
      // get: 'tagged',
      // tagName: 'awesome',
      // clientId: '783b41c8a8764ddd8926793e79726e61'
      get: 'user',
      userId: 1571068740,
      accessToken: '1571068740.467ede5.cb9c1a592e0041cc91994b2e0476c5f6',
      template: '<a href="{{link}}" class="polaroid"><img src="{{image}}"><p>{{caption}}</p></a>',
      resolution: 'low_resolution',
      before: beforeFunc, 
      after: afterFunc

  });
  feed.run();

  function beforeFunc(model){
    console.log(model || "before");
  }

  function afterFunc(model){
    console.log(model || "after func");

    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });

  }

  // $.getJSON('http://www.telize.com/geoip?callback=?', function(json) {
  //   console.log('The IP address is: ' + json.ip);
  //   console.log('Latitude: ' + json.latitude);
  //   console.log('Longitude: ' + json.longitude);

  //   // console.log(json);
  //   var items = [];

  //   $.each( json, function( key, val) {
  //     items.push( "<li>" + val + "</li>");
  //   });

  //   $( "<ul />", {
  //     "class": "list",
  //     html: items.join("")
  //   }).appendTo("#insta");
  // });

});
