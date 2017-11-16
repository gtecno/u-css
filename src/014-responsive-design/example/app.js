$(document).ready(function(){
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 120){
      $(".rd-mq-navbar").removeClass('rd-mq-navbar-no-scroll');
      $(".rd-mq-navbar").addClass('rd-mq-navbar-scroll');
    }
    else{
      $(".rd-mq-navbar").removeClass('rd-mq-navbar-scroll');
      $(".rd-mq-navbar").addClass('rd-mq-navbar-no-scroll');
    }
  });
});
