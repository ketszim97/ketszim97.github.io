$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 100 ){

 		$('.page-title').addClass('show');

  } else {

    $('.page-title').removeClass('show');

 	};
});
