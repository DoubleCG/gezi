//var newsName = <%=newsList %>;
$(function() {
	$("#search_m").width($("#soso").width() - 196);
	var sWidth = $("#search_m").width()+77;
	$(".so_pul_m").css("width",sWidth+"px");
	$(".slide_box").width($(".tab-content").width() - 94);
	$("[data-target='#mobile_nav']").click(function() {
		$("#mobile_nav").slideToggle(),
		$(this).toggleClass("collapsed")
	});
	$(".m_tab ul li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var i = $(this).index();
		$(".m_tab_cont_ul").eq(i).show().siblings().hide()
	});
	$("[data-target='#soso']").click(function() {
		$("#soso").slideToggle()
	});

	var spiper1 =  new Swiper(".swiper1", {
			slidesPerView: 4,
			prevButton: ".sw1 .arrow-left",
			nextButton: ".sw1 .arrow-right",
		});

	var spiper2 = new Swiper(".swiper2", {
			slidesPerView: 4,
			prevButton: ".sw2 .arrow-left",
			nextButton: ".sw2 .arrow-right",
		});
	var spiper3 = new Swiper(".swiper3", {
			loop: !0,
			prevButton: ".arrow-left",
			nextButton: ".arrow-right",
		});

	$(".weibo").click(function() {
		var i = confirm("您现在正在离开爱普生网站。爱普生公司不对您通过本网站而可能进入的网站做任何陈述或保证。当您访问非爱普生网站时，即使该网站包含有爱普生的标志和关于爱普生产品和服务的内容，这类网站也是独立于爱普生公司的，爱普生公司并不控制非爱普生网站的运营。此外，指向非爱普生网站的链接并不意味着爱普生公司担保该网站或对该网站的使用承担任何责任");
		1 == i && window.open("http://weibo.com/epsoncn")
	}),
	$(".youku").click(function() {
		var i = confirm("您现在正在离开爱普生网站。爱普生公司不对您通过本网站而可能进入的网站做任何陈述或保证。当您访问非爱普生网站时，即使该网站包含有爱普生的标志和关于爱普生产品和服务的内容，这类网站也是独立于爱普生公司的，爱普生公司并不控制非爱普生网站的运营。此外，指向非爱普生网站的链接并不意味着爱普生公司担保该网站或对该网站的使用承担任何责任");
		1 == i && window.open("http://i.youku.com/u/UNTAxMjM2NTQw")
	}),
	/*$(".shop-tm").click(function() {
		var i = confirm("您现在正在离开爱普生网站。爱普生公司不对您通过本网站而可能进入的网站做任何陈述或保证。当您访问非爱普生网站时，即使该网站包含有爱普生的标志和关于爱普生产品和服务的内容，这类网站也是独立于爱普生公司的，爱普生公司并不控制非爱普生网站的运营。此外，指向非爱普生网站的链接并不意味着爱普生公司担保该网站或对该网站的使用承担任何责任〿);
		1 == i && window.open("https://epson.tmall.com/")
	}),
	$(".shop-jd").click(function() {
		var i = confirm("您现在正在离开爱普生网站。爱普生公司不对您通过本网站而可能进入的网站做任何陈述或保证。当您访问非爱普生网站时，即使该网站包含有爱普生的标志和关于爱普生产品和服务的内容，这类网站也是独立于爱普生公司的，爱普生公司并不控制非爱普生网站的运营。此外，指向非爱普生网站的链接并不意味着爱普生公司担保该网站或对该网站的使用承担任何责任〿);
		1 == i && window.open("http://epson.jd.com/")
	}),*/
	$(".weixin").click(function() {
		if ($(".showFooterWX").fadeToggle(300), $(window).width() > 500) {
			var i = $(".showFooterWX").width() / 2,
			t = $(".showFooterWX").height() / 2;
			$(".showFooterWX").css({
				"margin-left": -i,
				"margin-top": -t,
				top: "50%"
			})
		}
	}),
	$(".weixin-fw").click(function() {
		if ($(".showWX").fadeToggle(300), $(window).width() > 500) {
			var i = $(".showWX").width() / 2,
			t = $(".showWX").height() / 2;
			$(".showWX").css({
				"margin-left": -i,
				"margin-top": -t,
				top: "50%"
			})
		}
	}),
	$(".FooterWX_close").click(function() {
		$(this).parent().fadeOut(300)
	}),

	$(".swiper3 img").css("margin-top", (120 - $(".swiper3 img").height()) / 2),
	$("[rol='#rhgm']").click(function() {
		$(this).parent().addClass("active").siblings().removeClass("active"),
		$("#rhgm").css("visibility", "inherit").siblings().css("visibility", "hidden")
	}),
	$("[rol='#cxxx']").click(function() {
		$(this).parent().addClass("active").siblings().removeClass("active"),
		$("#cxxx").css("visibility", "inherit").siblings().css("visibility", "hidden"),
		$(".swiper3 img").css("margin-top", (120 - $(".swiper3 img").height()) / 2)
	});


	$(window).resize(function() {
		if ($(window).width() > 500) {
			var i = $(".showFooterWX").width() / 2;
			$(".showFooterWX").css({
				"margin-left": -i
			})
		}
		if ($(window).width() > 500) {
			var t = $(".showWX").width() / 2;
			$(".showWX").css({
				"margin-left": -t
			})
		}
		$(".slide_box").width($(".tab-content").width() - 94);
		$("#search_m").width($("#soso").width() - 196);
		var sWidth = $("#search_m").width()+77;
		$(".so_pul_m").css("width",sWidth+"px");
	})

	$("#searchProducts_all").autocomplete({
		appendTo: ".search_box_display ",
		position: {of: ".search_box_display ", collision: "fit"},
		source: function( request, response ) {
	        $.ajax({
	            url: "/Apps/Ajax/AutoCompleteSearch.ashx",
	            type: "POST",
	            data: { key: $("#searchProducts_all").val() },
	            success: function( data ) {
	            	data = $.parseJSON(data);
	            	response($.map(data, function(item) {
	                	return {
	                		label: item.title,
	                		link: item.link
	                	}
	                }));
	                                    
	            },
	            error: function(XMLHttpRequest, textStatus) {
	            	//alert(XMLHttpRequest.statusText + "123" + textStatus);
	            	//console.log(XMLHttpRequest.statusText + "123");
	            }
	        });
	    },
	    focus: function( event, ui ) {return;},
	    select: function( event, ui ) {return;},
	    minLength: 2

	}).autocomplete("instance")._renderMenu = function(ul, items) {
			var that = this;
			$.each(items, function(index, item) {
				 that._renderItemData = function (ul, item) {
				 	return $("<li>").append("<a href='" + item.link + "''>" + item.label + "</a>").appendTo(ul);
				 }(ul, item);
			});
			that._renderItemData = function (ul) {
				return $("<li class='more'>").append("<a href='/Apps/search/index.aspx?key=" + encodeURIComponent($('#searchProducts_all').val()) + "'>&nbsp;</a>").appendTo(ul);
			}(ul);
			$("ui.ui-menu").css({
	                	"width" : $(".search_box_display").width()
	                });
		};
$("#search_m").autocomplete({
	appendTo: ".so_pul_m",
	position: {of: ".so_pul_m", collision: "fit"},
	source: function( request, response ) {
        $.ajax({
            url: "/Apps/Ajax/AutoCompleteSearch.ashx",
            type: "POST",
            data: { key: $("#search_m").val() },
            success: function( data ) {
            	data = $.parseJSON(data);
            	response($.map(data, function(item) {
                	return {
                		label: item.title,
                		link: item.link
                	}
                }));
                                    
            },
            error: function(XMLHttpRequest, textStatus) {
            	//alert(XMLHttpRequest.statusText + "123" + textStatus);
            	//console.log(XMLHttpRequest.statusText + "123");
            }
        });
    },
    focus: function( event, ui ) {return;},
    select: function( event, ui ) {return;},
    minLength: 2

}).autocomplete("instance")._renderMenu = function(ul, items) {
		var that = this;
		$.each(items, function(index, item) {
			 that._renderItemData = function (ul, item) {
			 	return $("<li>").append("<a href='" + item.link + "''>" + item.label + "</a>").appendTo(ul);
			 }(ul, item);
		});
		that._renderItemData = function (ul) {
			return $("<li class='more'>").append("<a href='/Apps/search/index.aspx?key=" + encodeURIComponent($('#searchProducts_all').val()) + "'>&nbsp;</a>").appendTo(ul);
		}(ul);
		$("ui.ui-menu").css({
                	"width" : $("#search_m").width()
                });
	};
$('#searchProducts_all').bind('keypress',function(event){
	var $url = "/Apps/search/index.aspx?key=" + encodeURIComponent($('#searchProducts_all').val());
    if(event.keyCode == "13")
    {
        window.location = $url;
    }

});
/*var nowUrl = window.location.pathname.toLowerCase();
if(nowUrl.indexOf("/d-laber/") != "-1"){
$(".contact_info").show();
}else{
$(this).next().css("display","block");
}*/
$(".search_m_btn").click(function(){
	var aValue = $("#search_m").val();
	window.open("/Apps/search/index.aspx?key="+encodeURIComponent(aValue));
})
$(".soso_close").click(function(){
	var bValue = $("#searchProducts_all").val();
	window.open("/Apps/search/index.aspx?key="+encodeURIComponent(bValue));
})

$(".navbar-toggle.soso").click(function(){
	$(".zhezhao").toggle();
})

$(".zhezhao").click(function(){
	$("#soso").hide();
	$(this).hide();
})

$("#pc_nav .soso a").on("click",function(){
	$(this).parent(".soso").toggleClass("active");

})
$(".soso_pc").on("click",".close_keywords",function(){
	$(".soso_pc #searchProducts_all").val("");  
	$(".soso_pc #searchProducts_all").focus();
})
$(".soso_pc").on("click",".search_close",function(){
	$(".soso").removeClass("active");
})




$(window).scroll(function(){
	var vtop=$(document).scrollTop();
	if(vtop > 150){
		$("#soso").hide();
		$(".zhezhao").hide();
	}
});
});
	getAjaxUrl();
function getAjaxUrl(){
	var url = window.location.href;
	var data1 = {url: url};
	$.ajax({
		type: "POST",
		url: "/Apps/Ajax/GetSearchText.ashx",
		data: data1,
		dataType: "text",
		success: function (data) {
			// $("#searchProducts_all").attr("placeholder",data);
			$("#searchProducts_all").attr("value",data);
			$("#search_m").attr("value",data);
		},
		error : function(a,b){
			console.log(a+"|"+b);
		}
	})
}
// (function() {
//   var surveyScript = document.createElement('script');
//     surveyScript.type = 'text/javascript';
//     surveyScript.src = '/Apps/survey/2017/js/Elastic-layer.js';
//   var node = document.getElementsByTagName('script')[0];
//     node.parentNode.insertBefore(surveyScript, node);
// })();
