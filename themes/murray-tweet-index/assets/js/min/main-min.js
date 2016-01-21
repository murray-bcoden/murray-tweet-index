window.Modernizr=function(e,t,n){function a(e){g.cssText=e}function o(e,t){return a(C.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var a in e){var o=e[a];if(!i(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function l(e,t,a){for(var o in e){var i=t[e[o]];if(i!==n)return a===!1?e[o]:r(i,"function")?i.bind(a||t):i}return!1}function c(e,t,n){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?s(o,t):(o=(e+" "+_.join(a+" ")+a).split(" "),l(o,t,n))}function d(){p.input=function(n){for(var a=0,o=n.length;o>a;a++)P[n[a]]=n[a]in y;return P.list&&(P.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var a=0,o,r,i,s=e.length;s>a;a++)y.setAttribute("type",r=e[a]),o="text"!==y.type,o&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&y.style.WebkitAppearance!==n?(h.appendChild(y),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,h.removeChild(y)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?y.checkValidity&&y.checkValidity()===!1:y.value!=b)),S[e[a]]=!!o;return S}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u="2.8.3",p={},f=!0,h=t.documentElement,m="modernizr",v=t.createElement(m),g=v.style,y=t.createElement("input"),b=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",k=x.split(" "),_=x.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},T={},S={},P={},M=[],O=M.slice,N,j=function(e,n,a,o){var r,i,s,l,c=t.createElement("div"),d=t.body,u=d||t.createElement("body");if(parseInt(a,10))for(;a--;)s=t.createElement("div"),s.id=o?o[a]:m+(a+1),c.appendChild(s);return r=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),c.id=m,(d?c:u).innerHTML+=r,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(u)),i=n(c,e),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),h.style.overflow=l),!!i},A=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var a;return j("@media "+t+" { #"+m+" { position: absolute; } }",function(t){a="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),a},z=function(){function e(e,o){o=o||t.createElement(a[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=r(o[e],"function"),r(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),B={}.hasOwnProperty,I;I=r(B,"undefined")||r(B.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return B.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=O.call(arguments,1),a=function(){if(this instanceof a){var o=function(){};o.prototype=t.prototype;var r=new o,i=t.apply(r,n.concat(O.call(arguments)));return Object(i)===i?i:r}return t.apply(e,n.concat(O.call(arguments)))};return a}),T.flexbox=function(){return c("flexWrap")},T.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},T.canvastext=function(){return!!p.canvas&&!!r(t.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:j(["@media (",C.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!c("indexedDB",e)},T.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!!e.history&&!!history.pushState},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),i(g.backgroundColor,"rgba")},T.hsla=function(){return a("background-color:hsla(120,40%,100%,.5)"),i(g.backgroundColor,"rgba")||i(g.backgroundColor,"hsla")},T.multiplebgs=function(){return a("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},T.backgroundsize=function(){return c("backgroundSize")},T.borderimage=function(){return c("borderImage")},T.borderradius=function(){return c("borderRadius")},T.boxshadow=function(){return c("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},T.cssanimations=function(){return c("animationName")},T.csscolumns=function(){return c("columnCount")},T.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return a((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),i(g.backgroundImage,"gradient")},T.cssreflections=function(){return c("boxReflect")},T.csstransforms=function(){return!!c("transform")},T.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in h.style&&j("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return c("transition")},T.fontface=function(){var e;return j('@font-face {font-family:"font";src:url("https://")}',function(n,a){var o=t.getElementById("smodernizr"),r=o.sheet||o.styleSheet,i=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(a.split(" ")[0])}),e},T.generatedcontent=function(){var e;return j(["#",m,"{font:0/0 a}#",m,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n},T.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(E.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(E.svg,"clipPath")))};for(var L in T)I(T,L)&&(N=L.toLowerCase(),p[N]=T[L](),M.push((p[N]?"":"no-")+N));return p.input||d(),p.addTest=function(e,t){if("object"==typeof e)for(var a in e)I(e,a)&&p.addTest(a,e[a]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof f&&f&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},a(""),v=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},m++,e[h]=m,v[m]=t),t}function r(e,n,a){if(n||(n=t),g)return n.createElement(e);a||(a=o(n));var r;return r=a.cache[e]?a.cache[e].cloneNode():p.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!r.canHaveChildren||u.test(e)||r.tagUrn?r:a.frag.appendChild(r)}function i(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),i=0,s=a(),l=s.length;l>i;i++)r.createElement(s[i]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var a=o(e);return y.shivCSS&&!f&&!a.hasCSS&&(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||s(e,a),e}var c="3.7.0",d=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,h="_html5shiv",m=0,v={},g;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,g=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:g,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:i};e.html5=y,l(t)}(this,t),p._version=u,p._prefixes=C,p._domPrefixes=_,p._cssomPrefixes=k,p.mq=A,p.hasEvent=z,p.testProp=function(e){return s([e])},p.testAllProps=c,p.testStyles=j,p.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+M.join(" "):""),p}(this,this.document),function(e,t,n){function a(e){return"[object Function]"==h.call(e)}function o(e){return"string"==typeof e}function r(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=m.shift();v=1,e?e.t?p(function(){("c"==e.t?S.injectCss:S.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function l(e,n,a,o,r,l,c){function d(t){if(!h&&i(u.readyState)&&(w.r=h=1,!v&&s(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&p(function(){b.removeChild(u)},50);for(var a in _[n])_[n].hasOwnProperty(a)&&_[n][a].onload()}}var c=c||S.errorTimeout,u=t.createElement(e),h=0,g=0,w={t:a,s:n,e:r,a:l,x:c};1===_[n]&&(g=1,_[n]=[]),"object"==e?u.data=n:(u.src=n,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){d.call(this,g)},m.splice(o,0,w),"img"!=e&&(g||2===_[n]?(b.insertBefore(u,y?null:f),p(d,c)):_[n].push(u))}function c(e,t,n,a,r){return v=0,t=t||"j",o(e)?l("c"==t?C:w,e,t,this.i++,n,a,r):(m.splice(this.i++,0,e),1==m.length&&s()),this}function d(){var e=S;return e.loader={load:c,i:0},e}var u=t.documentElement,p=e.setTimeout,f=t.getElementsByTagName("script")[0],h={}.toString,m=[],v=0,g="MozAppearance"in u.style,y=g&&!!t.createRange().compareNode,b=y?u:f.parentNode,u=e.opera&&"[object Opera]"==h.call(e.opera),u=!!t.attachEvent&&!u,w=g?"object":u?"script":"img",C=u?"script":w,x=Array.isArray||function(e){return"[object Array]"==h.call(e)},k=[],_={},E={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},T,S;S=function(e){function t(e){var e=e.split("!"),t=k.length,n=e.pop(),a=e.length,n={url:n,origUrl:n,prefixes:e},o,r,i;for(r=0;a>r;r++)i=e[r].split("="),(o=E[i.shift()])&&(n=o(n,i));for(r=0;t>r;r++)n=k[r](n);return n}function i(e,o,r,i,s){var l=t(e),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=a(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,r,i,s):(_[l.url]?l.noexec=!0:_[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(a(o)||a(c))&&r.load(function(){d(),o&&o(l.origUrl,s,i),c&&c(l.origUrl,s,i),_[l.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(c=function(){var e=[].slice.call(arguments);d.apply(this,e),u()}),i(e,c,t,0,s);else if(Object(e)===e)for(f in p=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(f)&&(!n&&!--p&&(a(c)?c=function(){var e=[].slice.call(arguments);d.apply(this,e),u()}:c[f]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),u()}}(d[f])),i(e[f],c,t,f,s))}else!n&&u()}var s=!!e.test,l=e.load||e.both,c=e.callback||r,d=c,u=e.complete||r,p,f;n(s?e.yep:e.nope,!!l),l&&n(l)}var l,c,u=this.yepnope.loader;if(o(e))i(e,0,u,0);else if(x(e))for(l=0;l<e.length;l++)c=e[l],o(c)?i(c,0,u,0):x(c)?S(c):Object(c)===c&&s(c,u);else Object(e)===e&&s(e,u)},S.addPrefix=function(e,t){E[e]=t},S.addFilter=function(e){k.push(e)},S.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",T=function(){t.removeEventListener("DOMContentLoaded",T,0),t.readyState="complete"},0)),e.yepnope=d(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,a,o,l,c){var d=t.createElement("script"),u,h,o=o||S.errorTimeout;d.src=e;for(h in a)d.setAttribute(h,a[h]);n=c?s:n||r,d.onreadystatechange=d.onload=function(){!u&&i(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},p(function(){u||(u=1,n(1))},o),l?d.onload():f.parentNode.insertBefore(d,f)},e.yepnope.injectCss=function(e,n,a,o,i,l){var o=t.createElement("link"),c,n=l?s:n||r;o.href=e,o.rel="stylesheet",o.type="text/css";for(c in a)o.setAttribute(c,a[c]);i||(f.parentNode.insertBefore(o,f),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},!function(e){function t(){e[n].glbl||(s={$wndw:e(window),$html:e("html"),$body:e("body")},o={},r={},i={},e.each([o,r,i],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,a=e.length;a>n;n++)t[e[n]]=t.mm(e[n])}}),o.mm=function(e){return"mm-"+e},o.add("wrapper menu vertical panel nopanel current highest opened subopened navbar hasnavbar title btn prev next first last listview nolistview selected divider spacer hidden fullsubopen"),o.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},r.mm=function(e){return"mm-"+e},r.add("parent sub"),i.mm=function(e){return e+".mm"},i.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"),e[n]._c=o,e[n]._d=r,e[n]._e=i,e[n].glbl=s)}var n="mmenu",a="5.2.0";if(!e[n]){e[n]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var a=this.$menu.children(this.conf.panelNodetype);return this._initAddons(),this.init(a),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=a,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],navbar:{title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{panel:"Panel",vertical:"Vertical",selected:"Selected",divider:"Divider",spacer:"Spacer"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={init:function(e){e=e.not("."+o.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+o.listview).children().removeClass(o.selected),e.addClass(o.selected),this.trigger("setSelected",e)},openPanel:function(t){var n=t.parent();if(n.hasClass(o.vertical)){var a=n.parents("."+o.subopened);if(a.length)return this.openPanel(a.first());n.addClass(o.opened)}else{if(t.hasClass(o.current))return;var r=e(this.$menu).children("."+o.panel),i=r.filter("."+o.current);r.removeClass(o.highest).removeClass(o.current).not(t).not(i).not("."+o.vertical).addClass(o.hidden),t.hasClass(o.opened)?i.addClass(o.highest).removeClass(o.opened).removeClass(o.subopened):(t.addClass(o.highest),i.addClass(o.subopened)),t.removeClass(o.hidden).addClass(o.current),setTimeout(function(){t.removeClass(o.subopened).addClass(o.opened)},this.conf.openingInterval)}this.trigger("openPanel",t)},closePanel:function(e){var t=e.parent();t.hasClass(o.vertical)&&(t.removeClass(o.opened),this.trigger("closePanel",e))},closeAllPanels:function(){this.$menu.find("."+o.listview).children().removeClass(o.selected).filter("."+o.vertical).removeClass(o.opened);var e=this.$menu.children("."+o.panel),t=e.first();this.$menu.children("."+o.panel).not(t).removeClass(o.subopened).removeClass(o.opened).removeClass(o.current).removeClass(o.highest).addClass(o.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(o.vertical)&&this[t.hasClass(o.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var a=0,o=this.cbck[n].length;o>a;a++)this.cbck[n][a].apply(e,t)},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",o.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(o.wrapper);var t=[o.menu];this.opts.slidingSubmenus||t.push(o.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var n=this;this.__findAddBack(t,"ul, ol").not("."+o.nolistview).addClass(o.listview);var a=this.__findAddBack(t,"."+o.listview).children();this.__refactorClass(a,this.conf.classNames.selected,"selected"),this.__refactorClass(a,this.conf.classNames.divider,"divider"),this.__refactorClass(a,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var i=e(),s=t.add(t.find("."+o.panel)).add(this.__findAddBack(t,"."+o.listview).children().children(this.conf.panelNodetype)).not("."+o.nopanel);this.__refactorClass(s,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||s.addClass(o.vertical),s.each(function(){var t=e(this),a=t;t.is("ul, ol")?(t.wrap('<div class="'+o.panel+'" />'),a=t.parent()):a.addClass(o.panel);var r=t.attr("id");t.removeAttr("id"),a.attr("id",r||n.__getUniqueId()),t.hasClass(o.vertical)&&(t.removeClass(n.conf.classNames.vertical),a.add(a.parent()).addClass(o.vertical)),i=i.add(a);var s=a.children().first(),l=a.children().last();s.is("."+o.listview)&&s.addClass(o.first),l.is("."+o.listview)&&l.addClass(o.last)});var l=e("."+o.panel,this.$menu);i.each(function(){var t=e(this),a=t.parent(),i=a.children("a, span").first();if(a.is("."+o.menu)||(a.data(r.sub,t),t.data(r.parent,a)),!a.children("."+o.next).length&&a.parent().is("."+o.listview)){var s=t.attr("id"),l=e('<a class="'+o.next+'" href="#'+s+'" data-target="#'+s+'" />').insertBefore(i);i.is("span")&&l.addClass(o.fullsubopen)}if(!t.children("."+o.navbar).length&&!a.hasClass(o.vertical)){if(a.parent().is("."+o.listview))var a=a.closest("."+o.panel);else var i=a.closest("."+o.panel).find('a[href="#'+t.attr("id")+'"]').first(),a=i.closest("."+o.panel);var c=e('<div class="'+o.navbar+'" />');if(a.length){var s=a.attr("id");switch(n.opts.navbar.titleLink){case"anchor":_url=i.attr("href");break;case"panel":case"parent":_url="#"+s;break;case"none":default:_url=!1}c.append('<a class="'+o.btn+" "+o.prev+'" href="#'+s+'" data-target="#'+s+'"></a>').append('<a class="'+o.title+'"'+(_url?' href="'+_url+'"':"")+">"+i.text()+"</a>").prependTo(t),t.addClass(o.hasnavbar)}else n.opts.navbar.title&&(c.append('<a class="'+o.title+'">'+n.opts.navbar.title+"</a>").prependTo(t),t.addClass(o.hasnavbar))}});var c=this.__findAddBack(t,"."+o.listview).children("."+o.selected).removeClass(o.selected).last().addClass(o.selected);c.add(c.parentsUntil("."+o.menu,"li")).filter("."+o.vertical).addClass(o.opened).end().not("."+o.vertical).each(function(){e(this).parentsUntil("."+o.menu,"."+o.panel).not("."+o.vertical).first().addClass(o.opened).parentsUntil("."+o.menu,"."+o.panel).not("."+o.vertical).first().addClass(o.opened).addClass(o.subopened)}),c.children("."+o.panel).not("."+o.vertical).addClass(o.opened).parentsUntil("."+o.menu,"."+o.panel).not("."+o.vertical).first().addClass(o.opened).addClass(o.subopened);var d=l.filter("."+o.opened);return d.length||(d=i.first()),d.addClass(o.opened).last().addClass(o.current),i.not("."+o.vertical).not(d.last()).addClass(o.hidden).end().appendTo(this.$menu),i},_initAnchors:function(){var t=this;s.$body.on(i.click+"-oncanvas","a[href]",function(a){var r=e(this),i=!1,l=t.$menu.find(r).length;for(var c in e[n].addons)if(i=e[n].addons[c].clickAnchor.call(t,r,l))break;if(!i&&l){var d=r.attr("href");if(d.length>1&&"#"==d.slice(0,1)){var u=e(d,t.$menu);u.is("."+o.panel)&&(i=!0,t[r.parent().hasClass(o.vertical)?"togglePanel":"openPanel"](u))}}if(i&&a.preventDefault(),!i&&l&&r.is("."+o.listview+" > li > a")&&!r.is('[rel="external"]')&&!r.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,r)&&t.setSelected(e(a.target).parent());var p=t.__valueOrFn(t.opts.onClick.preventDefault,r,"#"==d.slice(0,1));p&&a.preventDefault(),t.__valueOrFn(t.opts.onClick.blockUI,r,!p)&&s.$html.addClass(o.blocking),t.__valueOrFn(t.opts.onClick.close,r,p)&&t.close()}})},_initAddons:function(){for(var t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(var t in e[n].addons)e[n].addons[t].setup.call(this)},__api:function(){var t=this,n={};return e.each(this._api,function(){var e=this;n[e]=function(){var a=t[e].apply(t,arguments);return"undefined"==typeof a?n:a}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(o[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+o.divider).not("."+o.hidden)},__transitionend:function(e,t,n){var a=!1,o=function(){a||t.call(e[0]),a=!0};e.one(i.transitionend,o),e.one(i.webkitTransitionEnd,o),setTimeout(o,1.1*n)},__getUniqueId:function(){return o.mm(e[n].uniqueId++)}},e.fn[n]=function(a,o){return t(),a=e.extend(!0,{},e[n].defaults,a),o=e.extend(!0,{},e[n].configuration,o),this.each(function(){var t=e(this);if(!t.data(n)){var r=new e[n](t,a,o);t.data(n,r.__api())}})},e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints};var o,r,i,s}}(jQuery),!function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var o=this.opts[n],r=this.conf[n];i=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==o.position||"bottom"==o.position)&&(o.zposition="front"),"string"!=typeof r.pageSelector&&(r.pageSelector="> "+r.pageNodetype),i.$allMenus=(i.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var s=[a.offcanvas];"left"!=o.position&&s.push(a.mm(o.position)),"back"!=o.zposition&&s.push(a.mm(o.zposition)),this.$menu.addClass(s.join(" ")).parent().removeClass(a.wrapper),this.setPage(i.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu[r.menuInjectMethod+"To"](r.menuWrapperSelector)}},add:function(){a=e[t]._c,o=e[t]._d,r=e[t]._e,a.add("offcanvas slideout modal background opening blocker page"),o.add("style"),r.add("resize")},clickAnchor:function(e){if(!this.opts[n])return!1;var t=this.$menu.attr("id");if(t&&t.length&&(this.conf.clone&&(t=a.umm(t)),e.is('[href="#'+t+'"]')))return this.open(),!0;if(i.$page){var t=i.$page.first().attr("id");return t&&t.length&&e.is('[href="#'+t+'"]')?(this.close(),!0):!1}}},e[t].defaults[n]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var t=this;this.closeAllOthers(),i.$page.each(function(){e(this).data(o.style,e(this).attr("style")||"")}),i.$wndw.trigger(r.resize+"-offcanvas",[!0]);var s=[a.opened];this.opts[n].modal&&s.push(a.modal),this.opts[n].moveBackground&&s.push(a.background),"left"!=this.opts[n].position&&s.push(a.mm(this.opts[n].position)),"back"!=this.opts[n].zposition&&s.push(a.mm(this.opts[n].zposition)),this.opts.extensions&&s.push(this.opts.extensions),i.$html.addClass(s.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(a.current+" "+a.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(i.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),i.$html.addClass(a.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(i.$page.first(),function(){t.$menu.removeClass(a.current).removeClass(a.opened),i.$html.removeClass(a.opened).removeClass(a.modal).removeClass(a.background).removeClass(a.mm(t.opts[n].position)).removeClass(a.mm(t.opts[n].zposition)),t.opts.extensions&&i.$html.removeClass(t.opts.extensions),i.$page.each(function(){e(this).attr("style",e(this).data(o.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),i.$html.removeClass(a.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){i.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){var o=this,r=this.conf[n];t&&t.length||(t=i.$body.find(r.pageSelector),t.length>1&&r.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||o.__getUniqueId())}),t.addClass(a.page+" "+a.slideout),i.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+n]=function(){i.$wndw.off(r.keydown+"-offcanvas").on(r.keydown+"-offcanvas",function(e){return i.$html.hasClass(a.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;i.$wndw.off(r.resize+"-offcanvas").on(r.resize+"-offcanvas",function(t,n){if(1==i.$page.length&&(n||i.$html.hasClass(a.opened))){var o=i.$wndw.height();(n||o!=e)&&(e=o,i.$page.css("minHeight",o))}})},e[t].prototype._initBlocker=function(){var t=this;i.$blck||(i.$blck=e('<div id="'+a.blocker+'" class="'+a.slideout+'" />')),i.$blck.appendTo(i.$body).off(r.touchstart+"-offcanvas "+r.touchmove+"-offcanvas").on(r.touchstart+"-offcanvas "+r.touchmove+"-offcanvas",function(e){e.preventDefault(),e.stopPropagation(),i.$blck.trigger(r.mousedown+"-offcanvas")}).off(r.mousedown+"-offcanvas").on(r.mousedown+"-offcanvas",function(e){e.preventDefault(),i.$html.hasClass(a.modal)||(t.closeAllOthers(),t.close())})};var a,o,r,i}(jQuery),!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,o=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,a),t=42===r.offsetWidth,n.removeChild(o),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){C(!0)}var n={};e.respond=n,n.update=function(){};var a=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),r=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=r,n.queue=a,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s,l,c,d=e.document,u=d.documentElement,p=[],f=[],h=[],m={},v=30,g=d.getElementsByTagName("head")[0]||u,y=d.getElementsByTagName("base")[0],b=g.getElementsByTagName("link"),w=function(){var e,t=d.createElement("div"),n=d.body,a=u.style.fontSize,o=n&&n.style.fontSize,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=d.createElement("body"),n.style.background="none"),u.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),r&&u.insertBefore(n,u.firstChild),e=t.offsetWidth,r?u.removeChild(n):n.removeChild(t),u.style.fontSize=a,o&&(n.style.fontSize=o),e=c=parseFloat(e)},C=function(t){var n="clientWidth",a=u[n],o="CSS1Compat"===d.compatMode&&a||d.body[n]||a,r={},i=b[b.length-1],m=(new Date).getTime();if(t&&s&&v>m-s)return e.clearTimeout(l),void(l=e.setTimeout(C,v));s=m;for(var y in p)if(p.hasOwnProperty(y)){var x=p[y],k=x.minw,_=x.maxw,E=null===k,T=null===_,S="em";k&&(k=parseFloat(k)*(k.indexOf(S)>-1?c||w():1)),_&&(_=parseFloat(_)*(_.indexOf(S)>-1?c||w():1)),x.hasquery&&(E&&T||!(E||o>=k)||!(T||_>=o))||(r[x.media]||(r[x.media]=[]),r[x.media].push(f[x.rules]))}for(var P in h)h.hasOwnProperty(P)&&h[P]&&h[P].parentNode===g&&g.removeChild(h[P]);h.length=0;for(var M in r)if(r.hasOwnProperty(M)){var O=d.createElement("style"),N=r[M].join("\n");O.type="text/css",O.media=M,g.insertBefore(O,i.nextSibling),O.styleSheet?O.styleSheet.cssText=N:O.appendChild(d.createTextNode(N)),h.push(O)}},x=function(e,t,a){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),r=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!r&&a;t.length&&(t+="/"),l&&(r=1);for(var c=0;r>c;c++){var d,u,h,m;l?(d=a,f.push(s(e))):(d=o[c].match(n.regex.findStyles)&&RegExp.$1,f.push(RegExp.$2&&s(RegExp.$2))),h=d.split(","),m=h.length;for(var v=0;m>v;v++)u=h[v],i(u)||p.push({media:u.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:f.length-1,hasquery:u.indexOf("(")>-1,minw:u.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),
maxw:u.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}C()},k=function(){if(a.length){var t=a.shift();r(t.href,function(n){x(n,t.href,t.media),m[t.href]=!0,e.setTimeout(function(){k()},0)})}},_=function(){for(var t=0;t<b.length;t++){var n=b[t],o=n.href,r=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&i&&!m[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(x(n.styleSheet.rawCssText,o,r),m[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!y||o.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===o.substring(0,2)&&(o=e.location.protocol+o),a.push({href:o,media:r})))}k()};_(),n.update=_,n.getEmValue=w,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),$(document).ready(function(){function e(e){e.wrap("<div class='table-wrapper' />");var t=e.clone();t.find("td:not(:first-child), th:not(:first-child)").css("display","none"),t.removeClass("responsive"),e.closest(".table-wrapper").append(t),t.wrap("<div class='pinned' />"),e.wrap("<div class='scrollable' />")}function t(e){e.closest(".table-wrapper").find(".pinned").remove(),e.unwrap(),e.unwrap()}var n=!1,a=function(){return $(window).width()<767&&!n?(n=!0,$("table.responsive").each(function(t,n){e($(n))}),!0):void(n&&$(window).width()>767&&(n=!1,$("table.responsive").each(function(e,n){t($(n))})))};$(window).load(a),$(window).bind("resize",a)});/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.0 - 2014
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser=function(e){function t(e){s.style.opacity=e/100,s.style.filter="alpha(opacity="+e+")"}function n(e){t(e),1==e&&(s.style.display="block"),100==e&&(l=!0)}function a(){var e=document.getElementById("btnCloseUpdateBrowser"),t=document.getElementById("btnUpdateBrowser");s.style.backgroundColor=bkgColor,s.style.color=txtColor,s.children[0].style.color=txtColor,s.children[1].style.color=txtColor,t.style.color=txtColor,t.style.borderColor&&(t.style.borderColor=txtColor),e.style.color=txtColor,e.onmousedown=function(){s.style.display="none";var e=new Date;return e.setTime(e.getTime()+24*numDays*60*60*1e3),document.cookie="outdatedclosed=true; expires="+e.toGMTString(),!1},t.onmouseover=function(){this.style.color=bkgColor,this.style.backgroundColor=txtColor},t.onmouseout=function(){this.style.color=txtColor,this.style.backgroundColor=bkgColor}}function o(){var e=!1;if(window.XMLHttpRequest)e=new XMLHttpRequest;else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}return e}function r(e){var t=o();return t&&(t.onreadystatechange=function(){i(t)},t.open("GET",e,!0),t.send(null)),!1}function i(e){var t=document.getElementById("outdated");return 4==e.readyState&&(200==e.status||304==e.status?t.innerHTML=e.responseText:t.innerHTML=u,a()),!1}var s=document.getElementById("outdated");this.defaultOpts={bgColor:"#f25648",color:"#ffffff",lowerThan:"transform",languagePath:"../outdatedbrowser/lang/en.html",days:7},e?("IE8"==e.lowerThan||"borderSpacing"==e.lowerThan?e.lowerThan="borderSpacing":"IE9"==e.lowerThan||"boxShadow"==e.lowerThan?e.lowerThan="boxShadow":"IE10"==e.lowerThan||"transform"==e.lowerThan||""==e.lowerThan||"undefined"==typeof e.lowerThan?e.lowerThan="transform":("IE11"==e.lowerThan||"borderImage"==e.lowerThan)&&(e.lowerThan="borderImage"),this.defaultOpts.bgColor=e.bgColor,this.defaultOpts.color=e.color,this.defaultOpts.lowerThan=e.lowerThan,this.defaultOpts.languagePath=e.languagePath,this.defaultOpts.days=e.days,bkgColor=this.defaultOpts.bgColor,txtColor=this.defaultOpts.color,cssProp=this.defaultOpts.lowerThan,languagePath=this.defaultOpts.languagePath,numDays=this.defaultOpts.days):(bkgColor=this.defaultOpts.bgColor,txtColor=this.defaultOpts.color,cssProp=this.defaultOpts.lowerThan,languagePath=this.defaultOpts.languagePath,numDays=this.defaultOpts.days);var l=!0,c=function(){var e=document.createElement("div"),t="Khtml Ms O Moz Webkit".split(" "),n=t.length;return function(a){if(a in e.style)return!0;for(a=a.replace(/^[a-z]/,function(e){return e.toUpperCase()});n--;)if(t[n]+a in e.style)return!0;return!1}}();if(!c(""+cssProp)&&"true"!==document.cookie.replace(/(?:(?:^|.*;\s*)outdatedclosed\s*\=\s*([^;]*).*$)|^.*$/,"$1")){if(l&&"1"!==s.style.opacity){l=!1;for(var d=1;100>=d;d++)setTimeout(function(e){return function(){n(e)}}(d),8*d)}" "===languagePath||0==languagePath.length?a():r(languagePath);var u='<h6>Your browser is out-of-date!</h6><p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p><p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>'}};jQuery(document).ready(function($){$("#main-menu").mmenu({},{clone:!0})});
//# sourceMappingURL=./main-min.js.map