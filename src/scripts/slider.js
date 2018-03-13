!function(d){d.flexslider=function(u,e){var p=d(u),m=d.extend({},d.flexslider.defaults,e),s=m.namespace,r="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,a=r?"touchend":"click",v="vertical"===m.direction,f=m.reverse,g=0<m.itemWidth,h="fade"===m.animation,l=""!==m.asNavFor,c={};d.data(u,"flexslider",p),c={init:function(){p.animating=!1,p.currentSlide=m.startAt,p.animatingTo=p.currentSlide,p.atEnd=0===p.currentSlide||p.currentSlide===p.last,p.containerSelector=m.selector.substr(0,m.selector.search(" ")),p.slides=d(m.selector,p),p.container=d(p.containerSelector,p),p.count=p.slides.length,p.syncExists=0<d(m.sync).length,"slide"===m.animation&&(m.animation="swing"),p.prop=v?"top":"marginLeft",p.args={},p.manualPause=!1;var e,t=p;if((e=!m.video)&&(e=!h)&&(e=m.useCSS))e:{e=document.createElement("div");var n,a=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(n in a)if(void 0!==e.style[a[n]]){p.pfx=a[n].replace("Perspective","").toLowerCase(),p.prop="-"+p.pfx+"-transform",e=!0;break e}e=!1}t.transitions=e,""!==m.controlsContainer&&(p.controlsContainer=0<d(m.controlsContainer).length&&d(m.controlsContainer)),""!==m.manualControls&&(p.manualControls=0<d(m.manualControls).length&&d(m.manualControls)),m.randomize&&(p.slides.sort(function(){return Math.round(Math.random())-.5}),p.container.empty().append(p.slides)),p.doMath(),l&&c.asNav.setup(),p.setup("init"),m.controlNav&&c.controlNav.setup(),m.directionNav&&c.directionNav.setup(),m.keyboard&&(1===d(p.containerSelector).length||m.multipleKeyboard)&&d(document).bind("keyup",function(e){e=e.keyCode,p.animating||39!==e&&37!==e||(e=39===e?p.getTarget("next"):37===e&&p.getTarget("prev"),p.flexAnimate(e,m.pauseOnAction))}),m.mousewheel&&p.bind("mousewheel",function(e,t){e.preventDefault();var n=t<0?p.getTarget("next"):p.getTarget("prev");p.flexAnimate(n,m.pauseOnAction)}),m.pausePlay&&c.pausePlay.setup(),m.slideshow&&(m.pauseOnHover&&p.hover(function(){!p.manualPlay&&!p.manualPause&&p.pause()},function(){!p.manualPause&&!p.manualPlay&&p.play()}),0<m.initDelay?setTimeout(p.play,m.initDelay):p.play()),r&&m.touch&&c.touch(),(!h||h&&m.smoothHeight)&&d(window).bind("resize focus",c.resize),setTimeout(function(){m.start(p)},200)},asNav:{setup:function(){p.asNav=!0,p.animatingTo=Math.floor(p.currentSlide/p.move),p.currentItem=p.currentSlide,p.slides.removeClass(s+"active-slide").eq(p.currentItem).addClass(s+"active-slide"),p.slides.click(function(e){e.preventDefault();var t=(e=d(this)).index();!d(m.asNavFor).data("flexslider").animating&&!e.hasClass("active")&&(p.direction=p.currentItem<t?"next":"prev",p.flexAnimate(t,m.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){p.manualControls?c.controlNav.setupManual():c.controlNav.setupPaging()},setupPaging:function(){var e,t=1;if(p.controlNavScaffold=d('<ol class="'+s+"control-nav "+s+("thumbnails"===m.controlNav?"control-thumbs":"control-paging")+'"></ol>'),1<p.pagingCount)for(var n=0;n<p.pagingCount;n++)e="thumbnails"===m.controlNav?'<img src="'+p.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+t+"</a>",p.controlNavScaffold.append("<li>"+e+"</li>"),t++;p.controlsContainer?d(p.controlsContainer).append(p.controlNavScaffold):p.append(p.controlNavScaffold),c.controlNav.set(),c.controlNav.active(),p.controlNavScaffold.delegate("a, img",a,function(e){e.preventDefault();e=d(this);var t=p.controlNav.index(e);e.hasClass(s+"active")||(p.direction=t>p.currentSlide?"next":"prev",p.flexAnimate(t,m.pauseOnAction))}),r&&p.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){p.controlNav=p.manualControls,c.controlNav.active(),p.controlNav.live(a,function(e){e.preventDefault();e=d(this);var t=p.controlNav.index(e);e.hasClass(s+"active")||(t>p.currentSlide?p.direction="next":p.direction="prev",p.flexAnimate(t,m.pauseOnAction))}),r&&p.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){p.controlNav=d("."+s+"control-nav li "+("thumbnails"===m.controlNav?"img":"a"),p.controlsContainer?p.controlsContainer:p)},active:function(){p.controlNav.removeClass(s+"active").eq(p.animatingTo).addClass(s+"active")},update:function(e,t){1<p.pagingCount&&"add"===e?p.controlNavScaffold.append(d("<li><a>"+p.count+"</a></li>")):1===p.pagingCount?p.controlNavScaffold.find("li").remove():p.controlNav.eq(t).closest("li").remove(),c.controlNav.set(),1<p.pagingCount&&p.pagingCount!==p.controlNav.length?p.update(t,e):c.controlNav.active()}},directionNav:{setup:function(){var e=d('<ul class="'+s+'direction-nav"><li><a class="'+s+'prev" href="#">'+m.prevText+'</a></li><li><a class="'+s+'next" href="#">'+m.nextText+"</a></li></ul>");p.controlsContainer?(d(p.controlsContainer).append(e),p.directionNav=d("."+s+"direction-nav li a",p.controlsContainer)):(p.append(e),p.directionNav=d("."+s+"direction-nav li a",p)),c.directionNav.update(),p.directionNav.bind(a,function(e){e.preventDefault(),e=d(this).hasClass(s+"next")?p.getTarget("next"):p.getTarget("prev"),p.flexAnimate(e,m.pauseOnAction)}),r&&p.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=s+"disabled";1===p.pagingCount?p.directionNav.addClass(e):m.animationLoop?p.directionNav.removeClass(e):0===p.animatingTo?p.directionNav.removeClass(e).filter("."+s+"prev").addClass(e):p.animatingTo===p.last?p.directionNav.removeClass(e).filter("."+s+"next").addClass(e):p.directionNav.removeClass(e)}},pausePlay:{setup:function(){var e=d('<div class="'+s+'pauseplay"><a></a></div>');p.controlsContainer?(p.controlsContainer.append(e),p.pausePlay=d("."+s+"pauseplay a",p.controlsContainer)):(p.append(e),p.pausePlay=d("."+s+"pauseplay a",p)),c.pausePlay.update(m.slideshow?s+"pause":s+"play"),p.pausePlay.bind(a,function(e){e.preventDefault(),d(this).hasClass(s+"pause")?(p.manualPause=!0,p.manualPlay=!1,p.pause()):(p.manualPause=!1,p.manualPlay=!0,p.play())}),r&&p.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?p.pausePlay.removeClass(s+"pause").addClass(s+"play").text(m.playText):p.pausePlay.removeClass(s+"play").addClass(s+"pause").text(m.pauseText)}},touch:function(){function n(e){l=v?i-e.touches[0].pageY:i-e.touches[0].pageX,(!(d=v?Math.abs(l)<Math.abs(e.touches[0].pageX-o):Math.abs(l)<Math.abs(e.touches[0].pageY-o))||500<Number(new Date)-c)&&(e.preventDefault(),!h&&p.transitions&&(m.animationLoop||(l/=0===p.currentSlide&&l<0||p.currentSlide===p.last&&0<l?Math.abs(l)/r+2:1),p.setProps(s+l,"setTouch")))}function a(){if(u.removeEventListener("touchmove",n,!1),p.animatingTo===p.currentSlide&&!d&&null!==l){var e=f?-l:l,t=0<e?p.getTarget("next"):p.getTarget("prev");p.canAdvance(t)&&(Number(new Date)-c<550&&50<Math.abs(e)||Math.abs(e)>r/2)?p.flexAnimate(t,m.pauseOnAction):h||p.flexAnimate(p.currentSlide,m.pauseOnAction,!0)}u.removeEventListener("touchend",a,!1),s=l=o=i=null}var i,o,s,r,l,c,d=!1;u.addEventListener("touchstart",function(e){p.animating?e.preventDefault():1===e.touches.length&&(p.pause(),r=v?p.h:p.w,c=Number(new Date),s=g&&f&&p.animatingTo===p.last?0:g&&f?p.limit-(p.itemW+m.itemMargin)*p.move*p.animatingTo:g&&p.currentSlide===p.last?p.limit:g?(p.itemW+m.itemMargin)*p.move*p.currentSlide:f?(p.last-p.currentSlide+p.cloneOffset)*r:(p.currentSlide+p.cloneOffset)*r,i=v?e.touches[0].pageY:e.touches[0].pageX,o=v?e.touches[0].pageX:e.touches[0].pageY,u.addEventListener("touchmove",n,!1),u.addEventListener("touchend",a,!1))},!1)},resize:function(){!p.animating&&p.is(":visible")&&(g||p.doMath(),h?c.smoothHeight():g?(p.slides.width(p.computedW),p.update(p.pagingCount),p.setProps()):v?(p.viewport.height(p.h),p.setProps(p.h,"setTotal")):(m.smoothHeight&&c.smoothHeight(),p.newSlides.width(p.computedW),p.setProps(p.computedW,"setTotal")))},smoothHeight:function(e){if(!v||h){var t=h?p:p.viewport;e?t.animate({height:p.slides.eq(p.animatingTo).height()},e):t.height(p.slides.eq(p.animatingTo).height())}},sync:function(e){var t=d(m.sync).data("flexslider"),n=p.animatingTo;switch(e){case"animate":t.flexAnimate(n,m.pauseOnAction,!1,!0);break;case"play":!t.playing&&!t.asNav&&t.play();break;case"pause":t.pause()}}},p.flexAnimate=function(e,t,n,a,i){if(l&&1===p.pagingCount&&(p.direction=p.currentItem<e?"next":"prev"),!p.animating&&(p.canAdvance(e,i)||n)&&p.is(":visible")){if(l&&a){if(n=d(m.asNavFor).data("flexslider"),p.atEnd=0===e||e===p.count-1,n.flexAnimate(e,!0,!1,!0,i),p.direction=p.currentItem<e?"next":"prev",n.direction=p.direction,Math.ceil((e+1)/p.visible)-1===p.currentSlide||0===e)return p.currentItem=e,p.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),!1;p.currentItem=e,p.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),e=Math.floor(e/p.visible)}if(p.animating=!0,p.animatingTo=e,m.before(p),t&&p.pause(),p.syncExists&&!i&&c.sync("animate"),m.controlNav&&c.controlNav.active(),g||p.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),p.atEnd=0===e||e===p.last,m.directionNav&&c.directionNav.update(),e===p.last&&(m.end(p),m.animationLoop||p.pause()),h)r?(p.slides.eq(p.currentSlide).css({opacity:0,zIndex:1}),p.slides.eq(e).css({opacity:1,zIndex:2}),p.slides.unbind("webkitTransitionEnd transitionend"),p.slides.eq(p.currentSlide).bind("webkitTransitionEnd transitionend",function(){m.after(p)}),p.animating=!1,p.currentSlide=p.animatingTo):(p.slides.eq(p.currentSlide).fadeOut(m.animationSpeed,m.easing),p.slides.eq(e).fadeIn(m.animationSpeed,m.easing,p.wrapup));else{var o=v?p.slides.filter(":first").height():p.computedW;g?(e=m.itemWidth>p.w?2*m.itemMargin:m.itemMargin,e=(e=(p.itemW+e)*p.move*p.animatingTo)>p.limit&&1!==p.visible?p.limit:e):e=0===p.currentSlide&&e===p.count-1&&m.animationLoop&&"next"!==p.direction?f?(p.count+p.cloneOffset)*o:0:p.currentSlide===p.last&&0===e&&m.animationLoop&&"prev"!==p.direction?f?0:(p.count+1)*o:f?(p.count-1-e+p.cloneOffset)*o:(e+p.cloneOffset)*o,p.setProps(e,"",m.animationSpeed),p.transitions?(m.animationLoop&&p.atEnd||(p.animating=!1,p.currentSlide=p.animatingTo),p.container.unbind("webkitTransitionEnd transitionend"),p.container.bind("webkitTransitionEnd transitionend",function(){p.wrapup(o)})):p.container.animate(p.args,m.animationSpeed,m.easing,function(){p.wrapup(o)})}m.smoothHeight&&c.smoothHeight(m.animationSpeed)}},p.wrapup=function(e){!h&&!g&&(0===p.currentSlide&&p.animatingTo===p.last&&m.animationLoop?p.setProps(e,"jumpEnd"):p.currentSlide===p.last&&0===p.animatingTo&&m.animationLoop&&p.setProps(e,"jumpStart")),p.animating=!1,p.currentSlide=p.animatingTo,m.after(p)},p.animateSlides=function(){p.animating||p.flexAnimate(p.getTarget("next"))},p.pause=function(){clearInterval(p.animatedSlides),p.playing=!1,m.pausePlay&&c.pausePlay.update("play"),p.syncExists&&c.sync("pause")},p.play=function(){p.animatedSlides=setInterval(p.animateSlides,m.slideshowSpeed),p.playing=!0,m.pausePlay&&c.pausePlay.update("pause"),p.syncExists&&c.sync("play")},p.canAdvance=function(e,t){var n=l?p.pagingCount-1:p.last;return!!t||(!(!l||p.currentItem!==p.count-1||0!==e||"prev"!==p.direction)||(!l||0!==p.currentItem||e!==p.pagingCount-1||"next"===p.direction)&&(!(e===p.currentSlide&&!l)&&(!!m.animationLoop||(!p.atEnd||0!==p.currentSlide||e!==n||"next"===p.direction)&&(!p.atEnd||p.currentSlide!==n||0!==e||"next"!==p.direction))))},p.getTarget=function(e){return"next"===(p.direction=e)?p.currentSlide===p.last?0:p.currentSlide+1:0===p.currentSlide?p.last:p.currentSlide-1},p.setProps=function(e,t,n){var a,i=e||(p.itemW+m.itemMargin)*p.move*p.animatingTo;a=-1*function(){if(g)return"setTouch"===t?e:f&&p.animatingTo===p.last?0:f?p.limit-(p.itemW+m.itemMargin)*p.move*p.animatingTo:p.animatingTo===p.last?p.limit:i;switch(t){case"setTotal":return f?(p.count-1-p.currentSlide+p.cloneOffset)*e:(p.currentSlide+p.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return f?e:p.count*e;case"jumpStart":return f?p.count*e:e;default:return e}}()+"px",p.transitions&&(a=v?"translate3d(0,"+a+",0)":"translate3d("+a+",0,0)",n=void 0!==n?n/1e3+"s":"0s",p.container.css("-"+p.pfx+"-transition-duration",n)),p.args[p.prop]=a,(p.transitions||void 0===n)&&p.container.css(p.args)},p.setup=function(e){var t,n;h?(p.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?p.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+m.animationSpeed/1e3+"s ease",zIndex:1}).eq(p.currentSlide).css({opacity:1,zIndex:2}):p.slides.eq(p.currentSlide).fadeIn(m.animationSpeed,m.easing)),m.smoothHeight&&c.smoothHeight()):("init"===e&&(p.viewport=d('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(p).append(p.container),p.cloneCount=0,p.cloneOffset=0,f&&(n=d.makeArray(p.slides).reverse(),p.slides=d(n),p.container.empty().append(p.slides))),m.animationLoop&&!g&&(p.cloneCount=2,p.cloneOffset=1,"init"!==e&&p.container.find(".clone").remove(),p.container.append(p.slides.first().clone().addClass("clone")).prepend(p.slides.last().clone().addClass("clone"))),p.newSlides=d(m.selector,p),t=f?p.count-1-p.currentSlide+p.cloneOffset:p.currentSlide+p.cloneOffset,v&&!g?(p.container.height(200*(p.count+p.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){p.newSlides.css({display:"block"}),p.doMath(),p.viewport.height(p.h),p.setProps(t*p.h,"init")},"init"===e?100:0)):(p.container.width(200*(p.count+p.cloneCount)+"%"),p.setProps(t*p.computedW,"init"),setTimeout(function(){p.doMath(),p.newSlides.css({width:p.computedW,float:"left",display:"block"}),m.smoothHeight&&c.smoothHeight()},"init"===e?100:0)));g||p.slides.removeClass(s+"active-slide").eq(p.currentSlide).addClass(s+"active-slide")},p.doMath=function(){var e=p.slides.first(),t=m.itemMargin,n=m.minItems,a=m.maxItems;p.w=p.width(),p.h=e.height(),p.boxPadding=e.outerWidth()-e.width(),g?(p.itemT=m.itemWidth+t,p.minW=n?n*p.itemT:p.w,p.maxW=a?a*p.itemT:p.w,p.itemW=p.minW>p.w?(p.w-t*n)/n:p.maxW<p.w?(p.w-t*a)/a:m.itemWidth>p.w?p.w:m.itemWidth,p.visible=Math.floor(p.w/(p.itemW+t)),p.move=0<m.move&&m.move<p.visible?m.move:p.visible,p.pagingCount=Math.ceil((p.count-p.visible)/p.move+1),p.last=p.pagingCount-1,p.limit=1===p.pagingCount?0:m.itemWidth>p.w?(p.itemW+2*t)*p.count-p.w-t:(p.itemW+t)*p.count-p.w-t):(p.itemW=p.w,p.pagingCount=p.count,p.last=p.count-1),p.computedW=p.itemW-p.boxPadding},p.update=function(e,t){p.doMath(),g||(e<p.currentSlide?p.currentSlide+=1:e<=p.currentSlide&&0!==e&&(p.currentSlide-=1),p.animatingTo=p.currentSlide),m.controlNav&&!p.manualControls&&("add"===t&&!g||p.pagingCount>p.controlNav.length?c.controlNav.update("add"):("remove"===t&&!g||p.pagingCount<p.controlNav.length)&&(g&&p.currentSlide>p.last&&(p.currentSlide-=1,p.animatingTo-=1),c.controlNav.update("remove",p.last))),m.directionNav&&c.directionNav.update()},p.addSlide=function(e,t){var n=d(e);p.count+=1,p.last=p.count-1,v&&f?void 0!==t?p.slides.eq(p.count-t).after(n):p.container.prepend(n):void 0!==t?p.slides.eq(t).before(n):p.container.append(n),p.update(t,"add"),p.slides=d(m.selector+":not(.clone)",p),p.setup(),m.added(p)},p.removeSlide=function(e){var t=isNaN(e)?p.slides.index(d(e)):e;p.count-=1,p.last=p.count-1,isNaN(e)?d(e,p.slides).remove():v&&f?p.slides.eq(p.last).remove():p.slides.eq(e).remove(),p.doMath(),p.update(t,"remove"),p.slides=d(m.selector+":not(.clone)",p),p.setup(),m.removed(p)},c.init()},d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:3e3,animationSpeed:400,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},d.fn.flexslider=function(n){if(void 0===n&&(n={}),"object"==typeof n)return this.each(function(){var e=d(this),t=e.find(n.selector?n.selector:".slides > li");1===t.length?(t.fadeIn(400),n.start&&n.start(e)):null==e.data("flexslider")&&new d.flexslider(this,n)});var e=d(this).data("flexslider");switch(n){case"play":e.play();break;case"pause":e.pause();break;case"next":e.flexAnimate(e.getTarget("next"),!0);break;case"prev":case"previous":e.flexAnimate(e.getTarget("prev"),!0);break;default:"number"==typeof n&&e.flexAnimate(n,!0)}}}(jQuery);