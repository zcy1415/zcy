"use strict";define(["jquery","text!../html/swiper.html","template","swiper","bscroll","text!../html/hot.html","text!../html/shujia.html"],function(t,o,e,l,s,i,n){t.ajax({url:"/book/index",dataType:"json",success:function(n){console.log(n),e(n.items,".scroll1",o);var a=new l(".wrap",{on:{slideChangeTransitionStart:function(){var o=this.activeIndex;t(".header-tab div a").eq(o).addClass("Swipe-tab__on").siblings().removeClass("Swipe-tab__on")}}});t(".header-tab div a").on("click",function(){console.log(t(this).index()),a.slideTo(t(this).index())}),new l(".swiper",{loop:!0,autoplay:{delay:1e3}});var c=new s(".scroll",{probeType:2,scrollbar:!0,click:!0});c.on("scroll",function(){return r>=4?(t(".loading").text("到底了..."),!1):void(this.y<this.maxScrollY-90?t(".loading").text("释放加载..."):t(".loading").text("下拉加载..."))}),t(".header-user").on("click",function(){location.href="/login.html"}),c.on("scrollEnd",function(){return r>=4?(t(".loading").text("到底了..."),!1):void t(".loading").text("下拉加载...")});var r=0;t(".scroll1").on("touchend",function(){"释放加载..."==t(".loading").text()&&r<=4?t.getJSON("/book/index",{page:++r,limit:10},function(t){e(t.items,"#Tag__100",i)}):t(".loading").text("到底了...")})}}),t.ajax({url:"/book/shujia",dataType:"json",success:function(t){e(t.items,".scroll2",n)}}),t(".scroll2").on("click","#Tag__70",function(){"shelf__switch"==t(this).attr("class")?(t(this).addClass("shelf__switch_list"),t(".book-list").addClass("shelf-book book-table")):(t(this).removeClass(" shelf__switch_list"),t(".book-list").removeClass("shelf-book book-table"))})});