$(document).ready(function(){

  //Event Tracking
  $('.js-ga-event').each(function() {
    $(this).click(function(){
      _gaq.push(['_trackEvent', $(this).data("category"), $(this).data("action"), $(this).data("label")]);
      return false;
      alert("hello");
    });
  });
});

