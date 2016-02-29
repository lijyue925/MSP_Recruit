$(document).ready(function(){
	
	//偵測滾動長度來顯示scrollToTop
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.scrollToTop').fadeIn();
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