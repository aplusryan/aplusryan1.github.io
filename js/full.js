$(function() {
  var effects = 'animated shake';
  var effectsEnd = ' animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd' ;

$('img.button').hover(function() {
  $(this).addClass(effects).one(effectsEnd, function() {
    $(this).removeClass(effects);
    });
  });
});
