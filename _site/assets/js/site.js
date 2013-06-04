$(document).ready(function(){

  //Event Tracking
  $('.js-ga-event').each(function() {
    $(this).click(function(){
      ga('send', 'event', $(this).data("category"), $(this).data("action"), $(this).data("label"));
    });
  });
});

