$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.row').addClass('scroll');
    }
    else {
        $('.row').removeClass('scroll')
    }
});



$(function(){
    $('.menu-btn').on('click',function(){
        $('.menu-btn').toggleClass('cross');
        $('.row.clearfix').toggleClass('open-nav');
        $('.header-nav').toggleClass('grow');		
	});
    $('.joinUs h3').on('click',function(){
        $('.joinUs ul').toggleClass('dropdown');	
	});
	$('.language h3').on('click',function(){
        $('.language h3').toggleClass('rotate');
        $('.language ul').toggleClass('dropdown');	
    });
    $('.language-footer h3').on('click',function(){
        $('.language-footer ul').toggleClass('dropdown');
        $('.language-footer h3').toggleClass('rotate');	
    });
});
