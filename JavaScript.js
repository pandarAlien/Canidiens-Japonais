var closeIcon =   document.querySelectorAll('svg.close'),
    $container = $('.container'),
    $list = $container.find('ul'),
    $links = $container.find('a'),
    $text = $container.find('span');


// When the '+' icon is clicked...
$(closeIcon).on('click', function() {
    // Add class to rotate icon to an 'x'
    this.toggleClass('active');
    // Toggle the list
    $list.toggle();
});

// When the icon is hovered, add
// a class to it's parent so we can style it
$(closeIcon).hover(function() {
  $container.addClass('hover');
}, function() {
  $container.removeClass('hover');
});


$links.on('click', function() {
  $links.removeClass('active');
  
    $(this).addClass('active');
  $text.text($(this).text()).addClass('fade');
  
  setTimeout(function(){
    $text.removeClass('fade');
  }, 800);
  
  $list.toggle();
  closeIcon.toggleClass('active');
});
