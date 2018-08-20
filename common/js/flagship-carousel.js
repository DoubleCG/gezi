$(function() {
	$(".information_rotate").width($(".information_rotate").parent().width() - 420);
	
	$(".swp6").width($(".information_rotate").width() - 110);
	$(".swiper6 a").each(function() {
		for (var i = $(this).height(), t = $("p", $(this)).eq(1); t.outerHeight() > i;) t.text(t.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."))
	});
	var oopp = dsad.split("|");

	var sss = $(".swiper5").children().children().length;

	var	spiper5 = new Swiper(".swiper5", {
			slidesPerView: sss,
			spaceBetween: 30,
			slidesPerColumn: 1,
			breakpoints: {
				1440 :{
					slidesPerView: 10,
					spaceBetween: 30,
					slidesPerColumn: 1,
				},
				1000 : {
					slidesPerView: 7,
					spaceBetween: 30,
					slidesPerColumn: 1,
				},
				800 : {
					slidesPerView: 5,
					spaceBetween: 20,
					slidesPerColumn: 1,
				},
			}
		});
		var	spiper55 = new Swiper(".swiper55", {
			slidesPerView: 3,
			spaceBetween: 10,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
		});
		var spp6 = new Swiper(".swiper6", {
			slidesPerView: 1,
			resizeReInit : true,
		});


		var spiper7 = new Swiper(".swiper7", {
			slidesPerView: 1,
			loop: !0,
			pagination: ".swiper-pagination",
			paginationClickable: true,
		});
	$(".lb .arrow-left").click(function() {
		spiper5.slidePrev();
		spiper55.slidePrev()
	});
	$(".lb .arrow-right").click(function() {
		spiper5.slideNext();
		spiper55.slideNext()
	});
	$(".sp6-l").click(function() {
		spp6.slidePrev()
	});
	$(".sp6-r").click(function() {
		spp6.slideNext()
	});
	var e = new Swiper(".swiper4", {
		speed: 500,
		pagination: ".swiper-pagination",
		paginationClickable: true,
		breakpoints: {
			768 : {
					autoplay : 2000,
					effect : 'fade',
				},
		},
		onSlideChangeStart: function() {
			$("#contrast .contrastbox").eq(e.activeIndex).addClass("active").siblings().removeClass("active")
		}
	});
	$("#contrast .contrastbox").hover(function() {
		$(this).addClass("active").siblings().removeClass("active"),
		e.slideTo($(this).index())
	});
	$(".bf .start").click(function(){
		$(".bf .pus").show();
		$(this).hide();
		e.startAutoplay();
	});
	$(".bf .pus").click(function(){
		$(".bf .start").show();
		$(this).hide();
		e.stopAutoplay();
	});
	$("#banner").hover(function() {
		$("#contrast").animate({
			height: "54px"
		},"fast")
	},
	function() {
		$("#contrast").animate({
			height: "4px"
		},
		"fast")
	});

	$(window).resize(function() {
		spiper5.slideTo(0);
		$(".information_rotate").width($(".information_rotate").parent().width() - 421);
		$(".swp6").width($(".information_rotate").width() - 110);
		
		for( var m=0;m<oopp.length;m++){
			$(".swp6-row").eq(m).children("p:eq(1)").html(oopp[m]);
			
		};
		setTimeout(function(){
			$(".swiper6 a").each(function() {
				for (var i = $(this).height(), t = $("p", $(this)).eq(1); t.outerHeight() > i;) t.text(t.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."))
			});
		},150);
		spp6.onResize();
	});
})