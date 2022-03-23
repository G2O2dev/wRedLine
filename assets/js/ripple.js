$(function(){

  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY){
    this.width = ( width <= height ) ? height : width;
    this.height = ( width <= height ) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }

  $('.btn').on('mousedown', function(e){
    //getting the button's offset position
    var pos = $(this).offset();

    //adding a css style to the ripple effect
    $('<span class="btn-ripple"></span>').appendTo(this).css(new RippleStyle($(this).outerWidth(), $(this).outerHeight(), e.pageX - pos.left, e.pageY - pos.top));
  });

  //this event listener will be triggered once the ripple animation is done
  $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
    $(this).remove();
  });
});
