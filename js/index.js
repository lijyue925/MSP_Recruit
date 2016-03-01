$(document).ready(function(){
	
	//偵測滾動長度來顯示scrollToTop
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.scrollToTop').fadeIn();
			if($(this).scrollTop() > 1400) {
			    $('#line-area').css('visibility','');
			    $('#line1').animate({height: 150}, 1000);
			    $('#line2').animate({height: 330}, 1000);
			    $('#line3').animate({height: 510}, 1000);
			    $('#line4').animate({height: 690}, 1000);
			}
		} else {
			$('.scrollToTop').fadeOut();
		}
		
		clearTimeout($.data(this, "scrollCheck"));
        $.data(this, "scrollCheck", setTimeout(function() {
            $('.scrollToTop').fadeOut();
        }, 1000) );
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	
});