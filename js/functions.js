$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.image1').css({
    'transform' : 'translate(0px, '+ wScroll /20 +'%)'
  });

  $('.image2').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

if ( $(this).scrollTop() > 700) {
  $('.cosmos').css({
    'display': 'none'
    }); 
  $('.cosmos1').css({
    'display': 'block'
  });
}
else {
  $('.cosmos').css({
    'display': 'block'
  }); 
  $('.cosmos1').css({
    'display': 'none'
  });

}

 });
