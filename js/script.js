function onScroll(){
    var scroll_top = $(window).scrollTop();
    // console.log(scroll_top)
    $('.pskk i:eq(0)').html('')
    $('.pskk i:eq(0)').append(scroll_top)
    $('nav a').each(function()
    {
        var hash = $(this).attr("href");
        var target = $(hash);
        // console.log(target)
        var tagretStart = target.position().top
        var targetHeight = target.outerHeight()
        var tagretStartC = target.position().top.toFixed()
        var targetHeightC = target.outerHeight().toFixed()
        var targetStartAndHeight = parseInt(tagretStartC) + parseInt(targetHeightC)
        console.log(targetStartAndHeight)
        

        // console.log(tagretStart.toFixed())
        // console.log(targetHeight.toFixed())

        if (tagretStartC <= scroll_top && targetStartAndHeight > scroll_top && scroll_top != 0) 
        {
            // $('nav + a.active').removeClass("active");
            // $(this > '.dot').removeClass("active");
            $(this).addClass("active");
            $('.pskk i:eq(1)').html('')
            $('.pskk i:eq(1)').append(tagretStart)
            $('.pskk i:eq(2)').html('')
            $('.pskk i:eq(2)').append(targetStartAndHeight)

        } else 
        {
            $(this).removeClass("active");
        }
    });
}

$('document').ready(function()
{
	heightChild = $('.about div').css('height')
	$('.about').height(heightChild)
	$('.button').mousedown(function()
	{
		$(this).css('transform', 'scale(0.8)')
	}).mouseup(function()
	{
		$(this).css({'transform': 'scale(1)', 'transition': 'all 300ms cubic-bezier(0.175, 0.885, 0.52, 1.575)'})
	});

	var npoz = $('.l-active a').position().left
	var nshir = $('.l-active').width()
	$('.bot-line').css({'left': npoz - 10, 'width': nshir + 20})
	$('li').hover(function()
	{
		var poz = $(this).children('a').position().left
		var shir = $(this).children('a').width()
		$('.bot-line').css(
		{
			'left': poz - 10,
			'width': shir + 20,
			'transition': 'left 0.5s ease-out, width 0.5s ease-out'
		})
	}, function()
	{
		$('.bot-line').css(
		{
			'left': npoz - 10,
			'width': nshir + 20,
			'transition': 'left 0.5s ease-out, width 0.5s ease-out'
		})
	})

	// var ws = $('#contact').scrollTop()
	$('#downHome, #downServices, #downPortfolio, #downAbout, #downContact').on('click', function()
	{
		// idA = $(this).html()
		idA = $(this).attr("href")
		offsetEl = $(idA).offset().top
		$('html, body').animate({scrollTop: offsetEl}, 500);
	})

	$(window).scroll(function()
	{
		a = $(window).scrollTop()
		b = $('#services').offset().top
		c = $('#services').height()
		d = $(window).height()
		// console.log(a)
		// console.log(c)
		if ( (b - (d - c)/2) <= a && a <= (b + c/2)) 
		{
			$('.services__item').css(
			{
				'opacity': '1',
				'transform': 'translateX(0px)'
			})
		} else
		{
			$('.services__item:nth-of-type(1)').css(
			{
				'opacity': '0',
				'transform': 'translateX(-100px)'
			})
			$('.services__item:nth-of-type(2)').css(
			{
				'opacity': '0',
				'transform': 'translateY(100px)'
			})
			$('.services__item:nth-of-type(3)').css(
			{
				'opacity': '0',
				'transform': 'translateX(100px)'
			})
		}

		var cont = $('.bot-line').detach()

		if (a > 0) 
		{
			$('nav').addClass('fixed__nav')
			var cont = $('.bot-line').detach()
			$('.dot').css('display', 'inline')

		} else 
		{
			$('nav').removeClass('fixed__nav')
			$('<div class="bot-line"></div>').appendTo($('nav'))
			$('nav').append(cont)
			var npoz = $('.l-active a').position().left
			var nshir = $('.l-active').width()
			$('.bot-line').css({'left': npoz - 10, 'width': nshir + 20})
			$('.dot').css('display', 'none')
		}
	})

	$(document).on("scroll", onScroll);

});

