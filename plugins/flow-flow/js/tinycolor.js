!function(){function a(c,e){if(c=c?c:"",e=e||{},"object"==typeof c&&c.hasOwnProperty("_tc_id"))return c;var g=b(c),i=g.r,l=g.g,m=g.b,n=g.a,o=w(100*n)/100,q=e.format||g.format;return 1>i&&(i=w(i)),1>l&&(l=w(l)),1>m&&(m=w(m)),{ok:g.ok,format:q,_tc_id:u++,alpha:n,getAlpha:function(){return n},setAlpha:function(a){n=j(a),o=w(100*n)/100},toHsv:function(){var a=f(i,l,m);return{h:360*a.h,s:a.s,v:a.v,a:n}},toHsvString:function(){var a=f(i,l,m),b=w(360*a.h),c=w(100*a.s),d=w(100*a.v);return 1==n?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+o+")"},toHsl:function(){var a=d(i,l,m);return{h:360*a.h,s:a.s,l:a.l,a:n}},toHslString:function(){var a=d(i,l,m),b=w(360*a.h),c=w(100*a.s),e=w(100*a.l);return 1==n?"hsl("+b+", "+c+"%, "+e+"%)":"hsla("+b+", "+c+"%, "+e+"%, "+o+")"},toHex:function(a){return h(i,l,m,a)},toHexString:function(a){return"#"+h(i,l,m,a)},toRgb:function(){return{r:w(i),g:w(l),b:w(m),a:n}},toRgbString:function(){return 1==n?"rgb("+w(i)+", "+w(l)+", "+w(m)+")":"rgba("+w(i)+", "+w(l)+", "+w(m)+", "+o+")"},toPercentageRgb:function(){return{r:w(100*k(i,255))+"%",g:w(100*k(l,255))+"%",b:w(100*k(m,255))+"%",a:n}},toPercentageRgbString:function(){return 1==n?"rgb("+w(100*k(i,255))+"%, "+w(100*k(l,255))+"%, "+w(100*k(m,255))+"%)":"rgba("+w(100*k(i,255))+"%, "+w(100*k(l,255))+"%, "+w(100*k(m,255))+"%, "+o+")"},toName:function(){return 0===n?"transparent":B[h(i,l,m,!0)]||!1},toFilter:function(b){var c=h(i,l,m),d=c,f=Math.round(255*parseFloat(n)).toString(16),g=f,j=e&&e.gradientType?"GradientType = 1, ":"";if(b){var k=a(b);d=k.toHex(),g=Math.round(255*parseFloat(k.alpha)).toString(16)}return"progid:DXImageTransform.Microsoft.gradient("+j+"startColorstr=#"+p(f)+c+",endColorstr=#"+p(g)+d+")"},toString:function(a){var b=!!a;a=a||this.format;var c=!1,d=!b&&1>n&&n>0,e=d&&("hex"===a||"hex6"===a||"hex3"===a||"name"===a);return"rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),e?this.toRgbString():c||this.toHexString()}}}function b(a){var b={r:0,g:0,b:0},d=1,f=!1,h=!1;return"string"==typeof a&&(a=r(a)),"object"==typeof a&&(a.hasOwnProperty("r")&&a.hasOwnProperty("g")&&a.hasOwnProperty("b")?(b=c(a.r,a.g,a.b),f=!0,h="%"===String(a.r).substr(-1)?"prgb":"rgb"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("v")?(a.s=q(a.s),a.v=q(a.v),b=g(a.h,a.s,a.v),f=!0,h="hsv"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("l")&&(a.s=q(a.s),a.l=q(a.l),b=e(a.h,a.s,a.l),f=!0,h="hsl"),a.hasOwnProperty("a")&&(d=a.a)),d=j(d),{ok:f,format:a.format||h,r:x(255,y(b.r,0)),g:x(255,y(b.g,0)),b:x(255,y(b.b,0)),a:d}}function c(a,b,c){return{r:255*k(a,255),g:255*k(b,255),b:255*k(c,255)}}function d(a,b,c){a=k(a,255),b=k(b,255),c=k(c,255);var d,e,f=y(a,b,c),g=x(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function e(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+(b-a)*(2/3-c)*6:a}var e,f,g;if(a=k(a,360),b=k(b,100),c=k(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function f(a,b,c){a=k(a,255),b=k(b,255),c=k(c,255);var d,e,f=y(a,b,c),g=x(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function g(a,b,c){a=6*k(a,360),b=k(b,100),c=k(c,100);var d=v.floor(a),e=a-d,f=c*(1-b),g=c*(1-e*b),h=c*(1-(1-e)*b),i=d%6,j=[c,g,f,f,h,c][i],l=[h,c,c,g,f,f][i],m=[f,f,h,c,c,g][i];return{r:255*j,g:255*l,b:255*m}}function h(a,b,c,d){var e=[p(w(a).toString(16)),p(w(b).toString(16)),p(w(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function i(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function j(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function k(a,b){n(a)&&(a="100%");var c=o(a);return a=x(b,y(0,parseFloat(a))),c&&(a=parseInt(a*b,10)/100),v.abs(a-b)<1e-6?1:a%b/parseFloat(b)}function l(a){return x(1,y(0,a))}function m(a){return parseInt(a,16)}function n(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function o(a){return"string"==typeof a&&-1!=a.indexOf("%")}function p(a){return 1==a.length?"0"+a:""+a}function q(a){return 1>=a&&(a=100*a+"%"),a}function r(a){a=a.replace(s,"").replace(t,"").toLowerCase();var b=!1;if(A[a])a=A[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=C.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=C.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=C.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=C.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=C.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=C.hex6.exec(a))?{r:m(c[1]),g:m(c[2]),b:m(c[3]),format:b?"name":"hex"}:(c=C.hex3.exec(a))?{r:m(c[1]+""+c[1]),g:m(c[2]+""+c[2]),b:m(c[3]+""+c[3]),format:b?"name":"hex"}:!1}var s=/^[\s,#]+/,t=/\s+$/,u=0,v=Math,w=v.round,x=v.min,y=v.max,z=v.random;a.fromRatio=function(b,c){if("object"==typeof b){var d={};for(var e in b)b.hasOwnProperty(e)&&("a"===e?d[e]=b[e]:d[e]=q(b[e]));b=d}return a(b,c)},a.equals=function(b,c){return b&&c?a(b).toRgbString()==a(c).toRgbString():!1},a.random=function(){return a.fromRatio({r:z(),g:z(),b:z()})},a.desaturate=function(b,c){c=0===c?0:c||10;var d=a(b).toHsl();return d.s-=c/100,d.s=l(d.s),a(d)},a.saturate=function(b,c){c=0===c?0:c||10;var d=a(b).toHsl();return d.s+=c/100,d.s=l(d.s),a(d)},a.greyscale=function(b){return a.desaturate(b,100)},a.lighten=function(b,c){c=0===c?0:c||10;var d=a(b).toHsl();return d.l+=c/100,d.l=l(d.l),a(d)},a.darken=function(b,c){c=0===c?0:c||10;var d=a(b).toHsl();return d.l-=c/100,d.l=l(d.l),a(d)},a.complement=function(b){var c=a(b).toHsl();return c.h=(c.h+180)%360,a(c)},a.triad=function(b){var c=a(b).toHsl(),d=c.h;return[a(b),a({h:(d+120)%360,s:c.s,l:c.l}),a({h:(d+240)%360,s:c.s,l:c.l})]},a.tetrad=function(b){var c=a(b).toHsl(),d=c.h;return[a(b),a({h:(d+90)%360,s:c.s,l:c.l}),a({h:(d+180)%360,s:c.s,l:c.l}),a({h:(d+270)%360,s:c.s,l:c.l})]},a.splitcomplement=function(b){var c=a(b).toHsl(),d=c.h;return[a(b),a({h:(d+72)%360,s:c.s,l:c.l}),a({h:(d+216)%360,s:c.s,l:c.l})]},a.analogous=function(b,c,d){c=c||6,d=d||30;var e=a(b).toHsl(),f=360/d,g=[a(b)];for(e.h=(e.h-(f*c>>1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(a(e));return g},a.monochromatic=function(b,c){c=c||6;for(var d=a(b).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(a({h:e,s:f,v:g})),g=(g+i)%1;return h},a.readability=function(b,c){var d=a(b).toRgb(),e=a(c).toRgb(),f=(299*d.r+587*d.g+114*d.b)/1e3,g=(299*e.r+587*e.g+114*e.b)/1e3,h=Math.max(d.r,e.r)-Math.min(d.r,e.r)+Math.max(d.g,e.g)-Math.min(d.g,e.g)+Math.max(d.b,e.b)-Math.min(d.b,e.b);return{brightness:Math.abs(f-g),color:h}},a.readable=function(b,c){var d=a.readability(b,c);return d.brightness>125&&d.color>500},a.mostReadable=function(b,c){for(var d=null,e=0,f=!1,g=0;g<c.length;g++){var h=a.readability(b,c[g]),i=h.brightness>125&&h.color>500,j=3*(h.brightness/125)+h.color/500;(i&&!f||i&&f&&j>e||!i&&!f&&j>e)&&(f=i,e=j,d=a(c[g]))}return d};var A=a.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B=a.hexNames=i(A),C=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=a:"undefined"!=typeof define?define(function(){return a}):window.tinycolor=a}();