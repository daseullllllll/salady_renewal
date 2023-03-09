if (true) {
	const $header = $('header')
	const $gnb = $('header .gnb')
	const $lnb = $gnb.find('.lnb')
	const $slider = $('.slides-container')
	const $btnGnb = $header.find('.btn-gnb')
	const $mgnb = $('header > .container > .m-gnb nav')

	$gnb.on('mouseenter', function () {
		$(this).find($lnb).stop().slideDown(500)
	})

	$gnb.on('mouseleave', function () {
		$(this).find($lnb).stop().slideUp(500)
	})

	$slider.bxSlider({
		mode: 'fade',
		speed: 1000,
		auto: true,
		pause: 3000,
		stopAutoOnClick: true,
	})

	$btnGnb.on('click', function () {
		$mgnb.toggle()
	})
}
