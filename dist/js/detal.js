"use strict";define(["jquery","getUrl","text!../html/detalcreat.html","template"],function(t,e,o,a){var l=e("id");t.ajax({url:"/book/detal",data:{id:l},dataType:"json",success:function(e){a(e.item,"body",o),t(".folder-cnt").on("click",function(){t(this).toggleClass("-fold")})}}),t("body").on("click",".btn",function(){var e=t(this).data("id");t.ajax({url:"/detal",dataType:"json",success:function(t){console.log(t),t.meg?location.href="/read.html?id="+e:location.href="/login.html"}})})});