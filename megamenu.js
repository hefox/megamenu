

Drupal.behaviors.megemenu = function (context) {
  $('.mega-menu > .menu > li.expanded a',context).bt({
    contentSelector: "$(this).next().html()",
    spikeGirth: 0,
    spikeLength: 0,
    positions: ['bottom'],
    trigger: ['mouseover','click'],
    cssClass:'bt-mega-menu',
    width: 960,
    cssStyles: {'width': 'auto'},
    postShow: function(box){
      $('.bt-content').bind('mouseleave',function() {
         $(box).hide();
      });
    }
  });

};
