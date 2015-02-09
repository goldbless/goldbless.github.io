/**
 * main.js v1.1
 * Syrena admin template
 *
 * License:
 * For License Information check out - https://wrapbootstrap.com
 * 
 * Copyright 2013, Stilearning
 * http://stilearning.com
 */
 
 $(function(){"use strict";$.extend(verge);window.paceOptions={elements:false,restartOnRequestAfter:false};window.Pace.start();$('[data-toggle="tooltip"]').tooltip();$('[data-toggle="popover"]').popover();$("#smart-search > .form-control").on("focus",function(e){var t=$(this),n=t.attr("data-target");$(n).addClass("open").fadeIn()}).on("focusout",function(e){var t=$(this),n=t.attr("data-target");$(n).removeClass("open active").fadeOut();t.val("");$(".side-wrapper-status").fadeIn(300);$(".side-wrapper-result").hide()}).on("keyup",function(e){var t=$(this),n=t.attr("data-target");if(t.val()==""){$(n).removeClass("active");$(".side-wrapper-status").fadeIn(300);$(".side-wrapper-result").hide()}else{$(n).addClass("active");$(".side-wrapper-status").hide();$(".side-wrapper-result").fadeIn(300)}});$("#smart-search").on("submit",function(e){e.preventDefault()});$(".side-nav-child").prev().on("click",function(e){e.preventDefault();var t=$(this),n=t.attr("href");$(n).addClass("open")});$(".side-nav-back").on("click",function(e){e.preventDefault();var t=$(this),n=t.parent().parent();$(n).removeClass("open")});var e=function(){var e=$.viewportW();if(e>=1680){if($(".content-aside").length>0){$(".content-main").addClass("content-main-md")}$(".content-aside").addClass("open")}else{$(".content-main").removeClass("content-main-md");$(".content-aside").removeClass("open")}if(e<=768){$(".content").addClass("content-lg");$("#toggle-search").addClass("hide")}};e();$(window).on("resize",function(){var t=$("#smart-search").find("input").is(":focus");if(!t){e()}});$("#toggle-search").on("click",function(e){e.preventDefault();var t=$("#brand"),n=$("#smart-search");t.toggleClass("hide");n.toggleClass("hide").find("input").focus().val("");$(this).toggleClass("active")});$("#toggle-content").on("click",function(e){e.preventDefault();var t=$("#content");t.toggleClass("content-lg");$("#toggle-search").toggleClass("hide")});$("#toggle-aside").on("click",function(e){e.preventDefault();var t=$(this),n=$("#content-main"),r=$("#content-aside");t.toggleClass("active");n.toggleClass("content-main-md");r.toggleClass("open")});$(".cm-contact-item").on("click",function(e){e.preventDefault();$(".cm-content").addClass("open");$(".cm-contact").addClass("fixed")});$(".cm-content-heading").on("click",function(e){e.preventDefault();$(".cm-contact").removeClass("fixed");$(".cm-content").removeClass("open")});$(".cm-content-chats").animate({scrollTop:$(this).scrollTop()+$(this).height()},300);$(".chat-in, .chat-out").each(function(){var e=$(this),t=e.find(".chat-msg").innerHeight();if(t>40){e.css({height:t+"px"})}});$("#frm-send-chat").on("submit",function(e){e.preventDefault();var t=$(this),n=$(".cm-content-chats"),r=$('[name="chat-msg"]').val(),i='<div class="chat-out">'+'<div class="chat-avatar">'+'<img src="assets/app/img/avatar4.png" title="" />'+"</div>"+'<div class="chat-msg">'+"<p>"+r+"</p>"+'<time datetime="2013-12-13T20:00">Now</time>'+"</div>"+"</div>";if($.trim(r)!=""){n.append(i);var s=$('.cm-content-chats > div[class*="chat-"]').last(),o=s.find(".chat-msg").innerHeight();s.css({height:o+"px"});var u=n.scrollTop()+n.height();n.animate({scrollTop:u},300);$('[name="chat-msg"]').val("")}else{$('[name="chat-msg"]').val("")}});$(".scroll-smooth:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$(".app-body").animate({scrollTop:e.offset().top},1e3);return false}}});$(function(){var e=$(".transition-layout.active").length;if(e===0){$(".transition-layout").first().addClass("active")}});$('[data-toggle="transition-layout"]').on("click",function(e){e.preventDefault();var t=$(this),n=$('[data-toggle="transition-layout"]'),r=$(".transition-layout"),i=$(".transition-layout.active"),s=t.attr("href"),o=$(s).hasClass("active"),u=t.attr("data-anim"),a="scaleIn",f="scaleOut";if(n.hasClass("btn")){n.removeClass("active");$(this).addClass("active")}else{n.parent().removeClass("active");$(this).parent().addClass("active")}if(s.length!==0){if(!o){r.removeClass("active scaleIn scaleOut slideIn slideOut");i.addClass(f);$(s).addClass("active "+a)}}});$(".magic-layout").each(function(){var e=$(this),t=e.parent(),n=e.attr("data-cols"),r=$.viewportW(),i,s;if(typeof n===undefined||n==""){n=2}if(n=="3"){i="ml-col-3"}else if(n=="4"){i="ml-col-4"}else{n=2}if(r<=1280){if(n>2){i="";n=2}}e.addClass(i);s=e.width()/n;e.isotope({itemSelector:".magic-element",resizable:false,masonry:{columnWidth:s}});setTimeout(function(){s=e.width()/n;e.isotope({masonry:{columnWidth:s}})},500);$(".transition-layout").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){s=e.width()/n;e.isotope({masonry:{columnWidth:s}})});$("#content-aside").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){var t=e.width()/n;e.isotope({masonry:{columnWidth:t}})});$(window).on("resize",function(){var t=$.viewportW();if(t<=1280){if(n>2){i="";n=2}}else{n=e.attr("data-cols");if(typeof n===undefined||n==""){n=2}if(n=="3"){i="ml-col-3"}else if(n=="4"){i="ml-col-4"}else{n=2}}e.removeClass("ml-col-3 ml-col-4");e.addClass(i);s=e.width()/n;e.isotope({masonry:{columnWidth:s}});$("#content").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){s=e.width()/n;e.isotope({masonry:{columnWidth:s}})})});$("#toggle-aside").on("click",function(t){e.isotope("reLayout")});$("#toggle-content").on("click",function(t){s=e.width()/n;e.isotope({masonry:{columnWidth:s}})});$('#content[data-swipe="true"]').on("swipe",function(){s=e.width()/n;e.isotope({masonry:{columnWidth:s}})})});var t=function(){$(".magic-layout").isotope("reLayout")};$('[data-toggle="tab"], [data-toggle="collapse"]').on("click",function(){var e=$(this),n=e.attr("href");$(n).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t()})});$(".panel [data-close]").on("click",function(e){e.preventDefault();var t=$(this),n=t.attr("data-close");$(n).hide(300,function(){$(".magic-layout").isotope("remove",$(this))})});$(".panel-collapsed .panel-body").hide(100,t);$(".panel-collapsed .table").hide(100,t);$(".panel-collapsed .list-group").hide(100,t);$(".panel [data-collapse]").on("click",function(e){e.preventDefault();var n=$(this),r=n.attr("data-collapse"),i=$(r).children(".panel-body"),s=$(r).children(".table"),o=$(r).children(".list-group");$(r).toggleClass("panel-collapsed");$(i).slideToggle(200,t);$(s).slideToggle(200,t);$(o).slideToggle(200,t)});$('[data-toggle="panel-collapse"]').on("dblclick",function(e){e.preventDefault();var n=$(this),r=n.attr("data-panel"),i=$(r).children(".panel-body"),s=$(r).children(".table"),o=$(r).children(".list-group");$(r).toggleClass("panel-collapsed");$(i).slideToggle(200,t);$(s).slideToggle(200,t);$(o).slideToggle(200,t)});$(".panel > .panel-heading > .panel-icon").on("dblclick",function(e){e.preventDefault();var n=$(this),r=n.parent().parent(),i=r.children(".panel-body"),s=r.children(".table"),o=r.children(".list-group");r.toggleClass("panel-collapsed");i.slideToggle(200,t);s.slideToggle(200,t);o.slideToggle(200,t)});$(".panel [data-expand]").on("click",function(e){e.preventDefault();var n=$(this),r=n.attr("data-expand");$(r).toggleClass("expand");t()});$(".panel [data-refresh]").on("click",function(e){e.preventDefault();var t=$(this),n=t.attr("data-refresh");$(n).append('<div class="panel-progress"><div class="panel-spinner"></div></div>')});$(".close").on("click",function(){t()})});(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U=[].slice,z={}.hasOwnProperty,W=function(e,t){function n(){this.constructor=e}for(var r in t)z.call(t,r)&&(e[r]=t[r]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},X=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};y={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},C=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?e:+(new Date)},L=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,g=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==L&&(L=function(e){return setTimeout(e,50)},g=function(e){return clearTimeout(e)}),O=function(e){var t,n;return t=C(),n=function(){var r;return r=C()-t,r>=33?(t=C(),e(r,function(){return L(n)})):setTimeout(n,33-r)},n()},A=function(){var e,t,n;return n=arguments[0],t=arguments[1],e=3<=arguments.length?U.call(arguments,2):[],"function"==typeof n[t]?n[t].apply(n,e):n[t]},b=function(){var e,t,n,r,i,s,o;for(t=arguments[0],r=2<=arguments.length?U.call(arguments,1):[],s=0,o=r.length;o>s;s++)if(n=r[s])for(e in n)z.call(n,e)&&(i=n[e],null!=t[e]&&"object"==typeof t[e]&&null!=i&&"object"==typeof i?b(t[e],i):t[e]=i);return t},d=function(e){var t,n,r,i,s;for(n=t=0,i=0,s=e.length;s>i;i++)r=e[i],n+=Math.abs(r),t++;return n/t},E=function(e,t){var n,r,i;if(null==e&&(e="options"),null==t&&(t=!0),i=document.querySelector("[data-pace-"+e+"]")){if(n=i.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n)}catch(s){return r=s,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},null==window.Pace&&(window.Pace={}),k=Pace.options=b(y,window.paceOptions,E()),u=function(e){function t(){return q=t.__super__.constructor.apply(this,arguments)}return W(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(k.target),!e)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){u=e}return this.el=void 0},e.prototype.render=function(){var e,t;return null==document.querySelector(k.target)?!1:(e=this.getElement(),e.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||0|(this.lastRenderedProgress|0!==this.progress))&&(e.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?t="99":(t=this.progress<10?"0":"",t+=0|this.progress),e.children[0].setAttribute("data-progress",""+t)),this.lastRenderedProgress=this.progress)},e.prototype.done=function(){return this.progress>=100},e}(),o=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var n,r,i,s,o;if(null!=this.bindings[e]){for(s=this.bindings[e],o=[],r=0,i=s.length;i>r;r++)n=s[r],o.push(n.call(this,t));return o}},e.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t)},e}(),j=window.XMLHttpRequest,B=window.XDomainRequest,H=window.WebSocket,w=function(e,t){var n,r,i,s;s=[];for(r in t.prototype)try{i=t.prototype[r],null==e[r]&&"function"!=typeof i?s.push(e[r]=i):s.push(void 0)}catch(o){n=o}return s},T=[],Pace.ignore=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?U.call(arguments,1):[],T.unshift("ignore"),n=t.apply(null,e),T.shift(),n},Pace.track=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?U.call(arguments,1):[],T.unshift("track"),n=t.apply(null,e),T.shift(),n},_=function(e){var t;if(null==e&&(e="GET"),"track"===T[0])return"force";if(!T.length&&k.ajax){if("socket"===e&&k.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),X.call(k.ajax.trackMethods,t)>=0)return!0}return!1},a=function(e){function t(){var e,n=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(r,i){return _(r)&&n.trigger("request",{type:r,url:i,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var n;return n=new j(t),e(n),n},w(window.XMLHttpRequest,j),null!=B&&(window.XDomainRequest=function(){var t;return t=new B,e(t),t},w(window.XDomainRequest,B)),null!=H&&k.ajax.trackWebSockets&&(window.WebSocket=function(e,t){var r;return r=new H(e,t),_("socket")&&n.trigger("request",{type:"socket",url:e,protocols:t,request:r}),r},w(window.WebSocket,H))}return W(t,e),t}(o),F=null,S=function(){return null==F&&(F=new a),F},S().on("request",function(t){var n,r,i,s;return s=t.type,i=t.request,Pace.running||k.restartOnRequestAfter===!1&&"force"!==_(s)?void 0:(r=arguments,n=k.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var t,n,o,u,a,f,l;if(n="socket"===s?i.readyState<2:0<(a=i.readyState)&&4>a){for(Pace.restart(),f=Pace.sources,l=[],o=0,u=f.length;u>o;o++){if(t=f[o],t instanceof e){t.watch.apply(t,r);break}l.push(void 0)}return l}},n))}),e=function(){function e(){var e=this;this.elements=[],S().on("request",function(){return e.watch.apply(e,arguments)})}return e.prototype.watch=function(e){var t,n,r;return r=e.type,t=e.request,n="socket"===r?new c(t):new h(t),this.elements.push(n)},e}(),h=function(){function e(e){var t,n,r,i,s,o,u=this;if(this.progress=0,null!=window.ProgressEvent)for(n=null,e.addEventListener("progress",function(e){return u.progress=e.lengthComputable?100*e.loaded/e.total:u.progress+(100-u.progress)/2}),o=["load","abort","timeout","error"],r=0,i=o.length;i>r;r++)t=o[r],e.addEventListener(t,function(){return u.progress=100});else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?u.progress=100:3===e.readyState&&(u.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}}return e}(),c=function(){function e(e){var t,n,r,i,s=this;for(this.progress=0,i=["error","open"],n=0,r=i.length;r>n;n++)t=i[n],e.addEventListener(t,function(){return s.progress=100})}return e}(),r=function(){function e(e){var t,n,r,s;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),s=e.selectors,n=0,r=s.length;r>n;n++)t=s[n],this.elements.push(new i(t))}return e}(),i=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check()},k.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),n=function(){function e(){var e,t,n=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),s=function(){function e(){var e,t,n,r,i,s=this;this.progress=0,e=0,i=[],r=0,n=C(),t=setInterval(function(){var o;return o=C()-n-50,n=C(),i.push(o),i.length>k.eventLag.sampleCount&&i.shift(),e=d(i),++r>=k.eventLag.minSamples&&e<k.eventLag.lagThreshold?(s.progress=100,clearInterval(t)):s.progress=100*(3/(e+3))},50)}return e}(),l=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=k.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=A(this.source,"progress"))}return e.prototype.tick=function(e,t){var n;return null==t&&(t=A(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/k.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),n=1-Math.pow(this.progress/100,k.easeFactor),this.progress+=n*this.rate*e,this.progress=Math.min(this.lastProgress+k.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),D=null,M=null,v=null,P=null,p=null,m=null,Pace.running=!1,x=function(){return k.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(I=window.history.pushState,window.history.pushState=function(){return x(),I.apply(window.history,arguments)}),null!=window.history.replaceState&&(R=window.history.replaceState,window.history.replaceState=function(){return x(),R.apply(window.history,arguments)}),f={ajax:e,elements:r,document:n,eventLag:s},(N=function(){var e,n,r,i,s,o,u,a,c;for(Pace.sources=D=[],u=["ajax","elements","document","eventLag"],r=0,s=u.length;s>r;r++)n=u[r],k[n]!==!1&&D.push(new f[n](k[n]));for(c=null!=(a=k.extraSources)?a:[],i=0,o=c.length;o>i;i++)e=c[i],D.push(new e(k));return Pace.bar=v=new t,M=[],P=new l})(),Pace.stop=function(){return Pace.running=!1,v.destroy(),m=!0,null!=p&&("function"==typeof g&&g(p),p=null),N()},Pace.restart=function(){return Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,v.render(),m=!1,p=O(function(e,t){var n,r,i,s,o,u,a,f,c,h,p,d,g,y,b,w,E,S;for(f=100-v.progress,r=g=0,i=!0,u=y=0,w=D.length;w>y;u=++y)for(p=D[u],h=null!=M[u]?M[u]:M[u]=[],o=null!=(S=p.elements)?S:[p],a=b=0,E=o.length;E>b;a=++b)s=o[a],c=null!=h[a]?h[a]:h[a]=new l(s),i&=c.done,c.done||(r++,g+=c.tick(e));return n=g/r,v.update(P.tick(e,n)),d=C(),v.done()||i||m?(v.update(100),setTimeout(function(){return v.finish(),Pace.running=!1},Math.max(k.ghostTime,Math.min(k.minTime,C()-d)))):t()})},Pace.start=function(e){b(k,e),Pace.running=!0;try{v.render()}catch(t){u=t}return document.querySelector(".pace")?Pace.go():setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:k.startOnPageLoad&&Pace.start()}).call(this);(function(e){function a(){var t,n,r={height:s.innerHeight,width:s.innerWidth};if(!r.height){t=i.compatMode;if(t||!e.support.boxModel){n=t==="CSS1Compat"?o:i.body;r={height:n.clientHeight,width:n.clientWidth}}}return r}function f(){return{top:s.pageYOffset||o.scrollTop||i.body.scrollTop,left:s.pageXOffset||o.scrollLeft||i.body.scrollLeft}}function l(){var i=e(),s,u=0;e.each(t,function(e,t){var n=t.data.selector,r=t.$element;i=i.add(n?r.find(n):r)});s=i.length;if(s){n=n||a();r=r||f();for(;u<s;u++){if(!e.contains(o,i[u])){continue}var l=e(i[u]),c={height:l.height(),width:l.width()},h=l.offset(),p=l.data("inview"),d,v,m;if(!r||!n){return}if(h.top+c.height>r.top&&h.top<r.top+n.height&&h.left+c.width>r.left&&h.left<r.left+n.width){d=r.left>h.left?"right":r.left+n.width<h.left+c.width?"left":"both";v=r.top>h.top?"bottom":r.top+n.height<h.top+c.height?"top":"both";m=d+"-"+v;if(!p||p!==m){l.data("inview",m).trigger("inview",[true,d,v])}}else if(p){l.data("inview",false).trigger("inview",[false])}}}}var t={},n,r,i=document,s=window,o=i.documentElement,u=e.expando;e.event.special.inview={add:function(n){t[n.guid+"-"+this[u]]={data:n,$element:e(this)}},remove:function(e){try{delete t[e.guid+"-"+this[u]]}catch(n){}}};e(s).bind("scroll resize",function(){n=r=null});if(!o.addEventListener&&o.attachEvent){o.attachEvent("onfocusin",function(){r=null})}setInterval(l,250)})(jQuery)