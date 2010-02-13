

Drupal.behaviors.megemenu = function (context) {
  $('.mega-menu > .menu > li.expanded',context).each(function(index) {
     $('a:first',this).next('ul:first').append('<a class="mega-menu-close" href="javascript:void($(\'.bt-active\').btOff());">Close</a>');
  });
  
  $('.mega-menu > .menu > li.leaf a',context).bind('mouseover', function() {  
    $('.bt-active').btOff();
  }); 
};
