$(function(){

  var feed = new Instafeed({
      // get: 'tagged',
      // tagName: 'awesome',
      // clientId: '783b41c8a8764ddd8926793e79726e61'
      get: 'user',
      userId: 1571068740,
      accessToken: '1571068740.783b41c.16eb2d00acc34c8f946ac5be2bb492af',
      template: '<a target="_blank" href="{{link}}" class="polaroid"><img src="{{image}}"><p>{{caption}}</p></a>',
      resolution: 'low_resolution'
      // before: beforeFunc, 
      // after: afterFunc

  });
  feed.run();



  // function afterFunc(model){
  //   console.log(model || "after func");

  //   var images = $("#instafeed").find('a');
  //   $.each(images, function(index, image) {
  //     var delay = (index * 75) + 'ms';
  //     $(image).css('-webkit-animation-delay', delay);
  //     $(image).css('-moz-animation-delay', delay);
  //     $(image).css('-ms-animation-delay', delay);
  //     $(image).css('-o-animation-delay', delay);
  //     $(image).css('animation-delay', delay);
  //     $(image).addClass('animated flipInX');
  //   });

  // }

});
