(()=>{var e={362:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(354),s=n.n(i),r=n(314),o=n.n(r)()(s());o.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},353:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",c="month",l="quarter",d="year",u="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},b={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,c),r=n-s<0,o=t.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",y={};y[$]=m;var _="$isDayjsObject",g=function(e){return e instanceof w||!(!e||!e[_])},C=function e(t,n,i){var s;if(!t)return $;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var o=t.split("-");if(!s&&o.length>1)return e(o[0])}else{var a=t.name;y[a]=t,s=a}return!i&&s&&($=s),s||!i&&$},k=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},M=b;M.l=C,M.i=g,M.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[_]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return k(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<k(e)},v.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,l=!!M.u(t)||t,h=M.p(e),p=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return l?i:i.endOf(o)},f=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,b=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case d:return l?p(1,0):p(31,11);case c:return l?p(1,v):p(0,v+1);case a:var y=this.$locale().weekStart||0,_=(m<y?m+7:m)-y;return p(l?b-_:b+(6-_),v);case o:case u:return f($+"Hours",0);case r:return f($+"Minutes",1);case s:return f($+"Seconds",2);case i:return f($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var a,l=M.p(e),h="set"+(this.$u?"UTC":""),p=(a={},a[o]=h+"Date",a[u]=h+"Date",a[c]=h+"Month",a[d]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[l],f=l===o?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(u,1);m.$d[p](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[M.p(e)]()},v.add=function(n,l){var u,h=this;n=Number(n);var p=M.p(l),f=function(e){var t=k(h);return M.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===o)return f(1);if(p===a)return f(7);var m=(u={},u[s]=e,u[r]=t,u[i]=1e3,u)[p]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,c=n.weekdays,l=n.months,d=n.meridiem,u=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},p=function(e){return M.s(r%12||12,e,"0")},m=d||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(f,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return a+1;case"MM":return M.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,l,3);case"MMMM":return u(l,a);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,c,2);case"ddd":return u(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return M.s(r,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(r,o,!0);case"A":return m(r,o,!1);case"m":return String(o);case"mm":return M.s(o,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,h){var p,f=this,m=M.p(u),v=k(n),b=(v.utcOffset()-this.utcOffset())*e,$=this-v,y=function(){return M.m(f,v)};switch(m){case d:p=y()/12;break;case c:p=y();break;case l:p=y()/3;break;case a:p=($-b)/6048e5;break;case o:p=($-b)/864e5;break;case r:p=$/t;break;case s:p=$/e;break;case i:p=$/1e3;break;default:p=$}return h?p:M.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=C(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=w.prototype;return k.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",c],["$y",d],["$D",u]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,w,k),e.$i=!0),k},k.locale=C,k.isDayjs=g,k.unix=function(e){return k(1e3*e)},k.en=y[$],k.Ls=y,k.p={},k}()},522:function(e){e.exports=function(){"use strict";var e,t,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2628e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:c,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(e){return e instanceof $},h=function(e,t,n){return new $(e,n,t.$l)},p=function(e){return t.p(e)+"s"},f=function(e){return e<0},m=function(e){return f(e)?Math.ceil(e):Math.floor(e)},v=function(e){return Math.abs(e)},b=function(e,t){return e?f(e)?{negative:!0,format:""+v(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},$=function(){function f(e,t,n){var i=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*d[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(l);if(s){var r=s.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*d[n]}),0)},v.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=m(e/a),e%=a,this.$d.months=m(e/c),e%=c,this.$d.days=m(e/r),e%=r,this.$d.hours=m(e/s),e%=s,this.$d.minutes=m(e/i),e%=i,this.$d.seconds=m(e/n),e%=n,this.$d.milliseconds=e},v.toISOString=function(){var e=b(this.$d.years,"Y"),t=b(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=b(n,"D"),s=b(this.$d.hours,"H"),r=b(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var a=b(o,"S"),c=e.negative||t.negative||i.negative||s.negative||r.negative||a.negative,l=s.format||r.format||a.format?"T":"",d=(c?"-":"")+"P"+e.format+t.format+i.format+l+s.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},v.toJSON=function(){return this.toISOString()},v.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(e,t){return t||String(i[e])}))},v.as=function(e){return this.$ms/d[p(e)]},v.get=function(e){var t=this.$ms,n=p(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?m(t/d[n]):this.$d[n],t||0},v.add=function(e,t,n){var i;return i=t?e*d[p(t)]:u(e)?e.$ms:h(e,this).$ms,h(this.$ms+i*(n?-1:1),this)},v.subtract=function(e,t){return this.add(e,t,!0)},v.locale=function(e){var t=this.clone();return t.$l=e,t},v.clone=function(){return h(this.$ms,this)},v.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}(),y=function(e,t,n){return e.add(t.years()*n,"y").add(t.months()*n,"M").add(t.days()*n,"d").add(t.hours()*n,"h").add(t.minutes()*n,"m").add(t.seconds()*n,"s").add(t.milliseconds()*n,"ms")};return function(n,i,s){e=s,t=s().$utils(),s.duration=function(e,t){var n=s.locale();return h(e,{$l:n},t)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(e,t){return u(e)?y(this,e,1):r.bind(this)(e,t)},i.prototype.subtract=function(e,t){return u(e)?y(this,e,-1):o.bind(this)(e,t)}}}()},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},o=[],a=0;a<e.length;a++){var c=e[a],l=i.base?c[0]+i.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=s(p,i);i.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=n(r[o]);t[a].references--}for(var c=i(e,s),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function i(e){if(null!==e){if(!(e instanceof y))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var s=n(72),r=n.n(s),o=n(825),a=n.n(o),c=n(659),l=n.n(c),d=n(56),u=n.n(d),h=n(540),p=n.n(h),f=n(113),m=n.n(f),v=n(362),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),r()(v.A,b),v.A&&v.A.locals&&v.A.locals;const $="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add($),setTimeout((()=>{this.element.classList.remove($),e?.()}),600)}}class _ extends y{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}}class g extends y{get template(){return'\n    <ul class="trip-events__list"></ul>'}}var C=n(353),k=n.n(C),M=n(522),w=n.n(M);const S=["Paris","London","Chicago","Tokio","New York","Moscow","Amsterdam","San-Francisco"],E=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui."],T=1e3,D=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],A="everything",x="past",F="present",P="future",j="DD/MM/YY HH:mm",H="HH:mm",O="DEFAULT",q="EDITING",Y={DAY:{name:"day",disabled:!1},EVENT:{name:"event",disabled:!0},TIME:{name:"time",disabled:!1},PRICE:{name:"price",disabled:!1},OFFERS:{name:"offers",disabled:!0}},L=(e=1,t=100)=>Math.round(Math.random()*Math.abs(t-e))+e,I=e=>e[L(0,e.length-1)];k().extend(w());const B=(e,t)=>e?k()(e).format(t):"",N=(e,t)=>k().duration(k()(t).diff(k()(e))),W=e=>`${e[0].toUpperCase()}${e.slice(1)}`;class U extends y{#t=[];constructor({filters:e}){super(),this.#t=e}get template(){return`\n    <div class="trip-main__trip-controls  trip-controls">\n      <div class="trip-controls__filters">\n        <h2 class="visually-hidden">Filter events</h2>\n        <form class="trip-filters" action="#" method="get">\n          ${this.#t.map(((e,t)=>((e,t)=>`\n    <div class="trip-filters__filter">\n      <input id="filter-${e.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e.type}" ${t?"checked":""} ${0===e.count?"disabled":""}>\n      <label class="trip-filters__filter-label" for="filter-${e.type}">${W(e.type)}</label>\n    </div>`)(e,0===t))).join("")}\n\n          <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n      </div>\n    </div>`}}class Z extends y{#n=null;#i=null;constructor({currentSortType:e,onSortTypeChange:t}){super(),this.#n=e,this.#i=t,this.element.addEventListener("change",this.#s)}get template(){return e=this.#n,`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${Object.values(Y).map((t=>((e,t,n)=>`\n    <div class="trip-sort__item  trip-sort__item--${e}">\n      <input\n        id="sort-${e}"\n        class="trip-sort__input  visually-hidden"\n        type="radio"\n        name="trip-sort"\n        value="sort-${e}"\n        data-sort-type="${e}"\n        ${n.name===e?"checked":""}\n        ${t?"disabled":""}>\n      <label\n        class="trip-sort__btn"\n        for="sort-${e}">${W(e)}</label>\n    </div>`)(t.name,t.disabled,e))).join("")}\n    </form>`;var e}#s=e=>this.#i(e.target.dataset.sortType)}class V extends y{get template(){return'\n    <button class="trip-main__event-add-btn btn btn--big btn--yellow" type="button">New event</button>'}}class z extends y{#r=null;constructor({message:e}){super(),this.#r=e}get template(){return`\n    <p class="trip-events__msg">${this.#r}</p>`}}class J extends y{#o=[];#a=[];#c=[];#l=null;#d=null;constructor({point:e,offers:t,destinations:n,onEditClick:i,onFormSubmit:s}){super(),this.#o=e,this.#c=t,this.#a=n,this.#d=i,this.#l=s,this.element.querySelector("form").addEventListener("submit",this.#u),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#h)}get template(){return((e,t,n)=>{const i=n.find((t=>t.id===e.destination)),s=t.find((t=>t.type===e.type)).offers,r=s.filter((t=>e.offers.includes(t.id))),{basePrice:o,dateFrom:a,dateTo:c,type:l}=e,{description:d,name:u,pictures:h}=i||{},p=B(a,j),f=B(c,j);return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${l}.png" alt="Event ${l} icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                ${(e=>`\n  ${D.map((t=>`\n    <div class="event__type-item">\n      <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${t===e?"checked":""}>\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${W(t)}</label>\n    </div>`)).join("")}`)(l)}\n\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${W(l)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${u||""}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${(e=>e.map((e=>`<option value="${e.name}"></option>`)).join(""))(n)}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${p}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${f}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        ${((e,t,n,i)=>0!==e.length||n?`\n    <section class="event__details">\n      ${((e,t)=>{const n=e=>e.toLowerCase().split(" ")[-1];return 0===e.length?"":`\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n    <div class="event__available-offers">\n      ${e.map((e=>`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n(e.title)}-1" type="checkbox" name="event-offer-${n(e.title)}" ${t.map((e=>e.id)).includes(e.id)?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${n(e.title)}-1">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>`)).join("")}\n    </div>\n  </section>`})(e,t)}\n      ${((e,t)=>e?`\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${e}</p>\n\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${t.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.description}">`)).join("")}\n      </div>\n    </div>\n  </section>`:"")(n,i)}\n    </section>`:"")(s,r,d,h)}\n      </form>\n    </li>`})(this.#o,this.#c,this.#a)}#u=e=>{e.preventDefault(),this.#l(this.#o)};#h=()=>this.#d()}class R extends y{#o=[];#a=[];#c=[];#d=null;#p=null;constructor({point:e,offers:t,destinations:n,onEditClick:i,onFavoriteClick:s}){super(),this.#o=e,this.#a=n,this.#c=t,this.#d=i,this.#p=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#h),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#f)}get template(){return((e,t,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:o,type:a}=e,c=t.find((t=>t.type===e.type)).offers.filter((t=>e.offers.includes(t.id))),l=n.find((t=>t.id===e.destination)),d=B(s,"MMM D"),u=B(s,H),h=B(r,H),p=(f=N(s,r)).get("day")?f.format("DD[D] HH[H] mm[M]"):!f.get("day")&&f.get("hour")?f.format("HH[H] mm[M]"):f.format("mm[M]");var f;const m=o?"event__favorite-btn--active":"";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${s}">${d}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event ${a} icon">\n        </div>\n        <h3 class="event__title">${W(a)} ${W(l.name)}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${s}">${u}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${r}">${h}</time>\n          </p>\n          <p class="event__duration">${p}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${i}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${(e=>0===e.length?"":`\n    <ul class="event__selected-offers">\n      ${e.map((e=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </li>`)).join("")}\n    </ul>`)(c)}\n        <button class="event__favorite-btn ${m}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.#o,this.#c,this.#a)}#h=()=>this.#d();#f=()=>this.#p()}class X{#m=null;#v=null;#b=null;#o=[];#c=[];#a=[];#$=null;#y=null;#_=O;constructor({listComponent:e,onDataChange:t,onModeChange:n}){this.#m=e,this.#$=t,this.#y=n}init(n,s,r){this.#o=n,this.#c=s,this.#a=r;const o=this.#v,a=this.#b;this.#v=new R({point:this.#o,offers:this.#c,destinations:this.#a,onEditClick:this.#g,onFavoriteClick:this.#p}),this.#b=new J({point:this.#o,offers:this.#c,destinations:this.#a,onEditClick:this.#C,onFormSubmit:this.#l}),null!==o&&null!==a?(this.#_===O&&t(this.#v,o),this.#_===q&&t(this.#b,a),i(o),i(a)):e(this.#v,this.#m)}destroy(){i(this.#v),i(this.#b)}resetView(){this.#_!==O&&this.#k()}#M=()=>{t(this.#b,this.#v),document.addEventListener("keydown",this.#w),this.#y(),this.#_=q};#k=()=>{t(this.#v,this.#b),document.removeEventListener("keydown",this.#w),this.#_=O};#w=e=>{"Escape"===e.key&&(e.preventDefault(),this.#k())};#g=()=>{this.#M()};#C=()=>{this.#k()};#l=e=>{this.#$(e),this.#k()};#p=()=>{this.#$({...this.#o,isFavorite:!this.#o.isFavorite})}}const K={[A]:e=>e,[P]:e=>e.filter((e=>{return t=e.dateFrom,k()().isBefore(t);var t})),[F]:e=>e.filter((e=>{return t=e.dateFrom,n=e.dateTo,k()().isAfter(t)&&k()().isBefore(n);var t,n})),[x]:e=>e.filter((e=>{return t=e.dateTo,k()().isAfter(t);var t}))},G=[{id:1,basePrice:`${L(10,T)}`,dateFrom:"2024-09-09T22:55:56.845Z",dateTo:"2024-09-29T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01e73ab",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e2813jh7aa31","b4cio4e6-9y53-42ce-b747-e2813j88883w"],type:"taxi"},{id:2,basePrice:`${L(10,T)}`,dateFrom:"2023-07-04T19:30:56.845Z",dateTo:"2023-07-04T20:22:13.845Z",destination:"f4b62099-293f-4c3d-a702-94eec4a2808c",isFavorite:!0,offers:["r466o4e6-9t6q-420e-b7u7-e189nbn0kb6s"],type:"check-in"},{id:3,basePrice:`${L(10,T)}`,dateFrom:"2025-08-22T04:10:01.845Z",dateTo:"2025-08-22T07:22:13.845Z",destination:"f4b62099-29rf-4cud-ate2-u457c4a2998r",isFavorite:!0,offers:[],type:"sightseeing"},{id:4,basePrice:`${L(10,T)}`,dateFrom:"2023-02-10T03:40:24.845Z",dateTo:"2023-02-11T13:22:13.375Z",destination:"f4b6ob99-19ef-4y7d-ate2-47eec4a19pjr",isFavorite:!1,offers:["b466o4e6-9fgq-42ce-b7u7-e280pj89k0br","b466o4e6-9k0q-42ce-b7u7-e181en89kb6d"],type:"flight"},{id:5,basePrice:`${L(10,T)}`,dateFrom:"2023-04-10T14:35:56.845Z",dateTo:"2023-04-11T17:22:13.375Z",destination:"b4c3e4e6-9053-42ce-b747-e281314baa31",isFavorite:!0,offers:["b466o4e6-9k5q-42ce-b7u7-e281ej89k000"],type:"ship"}],Q=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01e73ab",description:`${I(E)}`,name:`${I(S)}`,pictures:[{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."},{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",description:`${I(E)}`,name:`${I(S)}`,pictures:[]},{id:"f4b62099-29rf-4cud-ate2-u457c4a2998r",description:`${I(E)}`,name:`${I(S)}`,pictures:[{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."}]},{id:"f4b6ob99-19ef-4y7d-ate2-47eec4a19pjr",description:`${I(E)}`,name:`${I(S)}`,pictures:[{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."}]},{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",description:`${I(E)}`,name:`${I(S)}`,pictures:[{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."},{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."},{src:`https://loremflickr.com/248/152?random=${L()}`,description:"Event photo."}]}],ee=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e2813jh7aa31",title:"Upgrade to a business class",price:`${L()}`},{id:"b4cee4e6-9y53-42ce-b747-e2813j7uf831",title:"Choose the radio station",price:`${L()}`},{id:"b4cio4e6-9y53-42ce-b747-e2813j88883w",title:"Choose temperature",price:`${L()}`},{id:"b466o4e6-9k5q-42ce-b7u7-e281ej89k83w",title:"Drive slowly",price:`${L()}`}]},{type:"bus",offers:[{id:"b466o4e6-9k5q-42ce-b7u7-e281ej89k8jj",title:"Infotainment system",price:`${L()}`},{id:"b466o4e6-9k5q-42ce-b7u7-e2k8ej89k55w",title:"Choose seats",price:`${L()}`},{id:"b466o4e6-9k5q-42ce-b7u7-e281tr89kp94",title:"Order meal",price:`${L()}`}]},{type:"train",offers:[{id:"b466o4e6-9k6q-42ce-b7u7-e281ej89u6e0",title:"Book a taxi at the arrival point",price:`${L()}`},{id:"b466o4e6-9k5q-48ge-b7u7-e281e111k83e",title:"Order a breakfast",price:`${L()}`},{id:"b49jo4e6-9k5q-42ce-b7u7-e281ej81w33w",title:"Wake up at a certain time",price:`${L()}`}]},{type:"ship",offers:[{id:"b466o4e6-9k5q-42ce-b7u7-e281e897k83w",title:"Add luggage",price:`${L()}`},{id:"b466o4e6-9k5q-42ce-b7u7-e281ej89k000",title:"Upgrade to a business class",price:`${L()}`},{id:"b466o4e6-9k5q-42ce-b7u7-e281ej76k83w",title:"Upgrade to comfort class",price:`${L()}`},{id:"b4666de6-9k5q-42ce-b7u7-e281ej89dd3f",title:"Business lounge",price:`${L()}`}]},{type:"drive",offers:[{id:"b466o4e6-9k5q-4200-b7u7-e281e7y9k0sw",title:"With automatic transmission",price:`${L()}`},{id:"b468h4e6-9k5q-42ce-b7u7-e2hm7j89k0op",title:"With air conditioning",price:`${L()}`}]},{type:"flight",offers:[{id:"b466o4e6-9fgq-42ce-b7u7-e280pj89k0br",title:"Upgrade to a business class",price:`${L()}`},{id:"a466o4e6-9lnq-42ce-b7u7-e20lej89k0vc",title:"Upgrade to comfort class",price:`${L()}`},{id:"b466o4e6-9k0q-42ce-b7u7-e181en89kb6d",title:"Add luggage",price:`${L()}`},{id:"r466o4e6-9k5q-42ce-b7u7-e189nb89kb6c",title:"Business lounge",price:`${L()}`}]},{type:"check-in",offers:[{id:"r466o4e6-9t6q-420e-b7u7-e189nbn0kb6s",title:"Choose the time of check-in",price:`${L()}`},{id:"r466o4e6-9t6q-420e-0ku7-e189nbn0kb6s",title:"Choose the time of check-out",price:`${L()}`},{id:"r466o4ne-9t6q-420e-b7u7-e189nbn0kb6m",title:"Order a meal from the restaurant",price:`${L()}`}]},{type:"sightseeing",offers:[]},{type:"restaurant",offers:[{id:"r46tv4e6-9t6q-420e-b799-e189nbn0kb6s",title:"Choose live music",price:`${L()}`},{id:"r466bve6-9t6q-420e-b7u7-e189nbn99b60",title:"Choose VIP area",price:`${L()}`}]}],te=document.querySelector(".trip-main"),ne=document.querySelector(".trip-events"),ie=document.querySelector(".trip-controls__filters"),se=new class{#S=null;#a=null;#c=null;constructor(){this.#S=[],this.#a=[],this.#c=[]}init(){this.#S=G,this.#a=Q,this.#c=ee}get points(){return this.#S}get destinations(){return this.#a}get offers(){return this.#c}};se.init();const re=new class{#E=new _;#T=new V;#m=new g;#D=null;#A=null;#x=new Map;#S=[];#c=[];#a=[];#F=Y.DAY;#n=this.#F;constructor({infoContainer:e,contentContainer:t,filtersContainer:n,pointModel:i}){this.infoContainer=e,this.contentContainer=t,this.filtersContainer=n,this.#A=i}init(){this.#S=[...this.#A.points],this.#a=[...this.#A.destinations],this.#c=[...this.#A.offers];const t=function(e){return Object.entries(K).map((([t,n])=>({type:t,count:n(e).length})))}(this.#S);e(this.#E,this.infoContainer,"afterbegin"),e(new U({filters:t}),this.filtersContainer),e(this.#T,this.infoContainer),this.#P(),this.#j()}#P=()=>{0===this.#S.length&&e(new z("Click New Event to create your first point"),this.contentContainer)};#j=()=>{this.#H(),this.#O(),this.#q(this.#F),this.#Y()};#H=()=>{const t=this.#n,n=this.#i;this.#D=new Z({currentSortType:t,onSortTypeChange:n}),e(this.#D,this.contentContainer)};#i=e=>{this.#L(),this.#q(e),this.#Y()};#q=e=>{switch(e){case"day":default:this.#S.sort((e=>(t,n)=>k()(t[e]).diff(k()(n[e])))("dateFrom"));break;case"time":this.#S.sort((n="dateFrom",i="dateTo",(e,t)=>{const s=N(e[n],e[i]);return N(t[n],t[i]).asMilliseconds()-s.asMilliseconds()}));break;case"price":this.#S.sort((t="basePrice",(e,n)=>n[t]-e[t]))}var t,n,i;this.#n=e};#L=()=>{this.#x.forEach((e=>e.destroy())),this.#x.clear()};#O=()=>{e(this.#m,this.contentContainer)};#Y=()=>{this.#S.forEach((e=>this.#I(e,this.#c,this.#a)))};#I=(e,t,n)=>{const i=this.#m.element,s=this.#B,r=this.#y,o=new X({listComponent:i,onDataChange:s,onModeChange:r});o.init(e,t,n),this.#x.set(e.id,o)};#B=e=>{var t,n;this.#S=(t=this.#S,n=e,t.map((e=>e.id===n.id?n:e))),this.#x.get(e.id).init(e,this.#c,this.#a)};#y=()=>{this.#x.forEach((e=>e.resetView()))}}({infoContainer:te,contentContainer:ne,filtersContainer:ie,pointModel:se});re.init()})()})();
//# sourceMappingURL=bundle.13abb305c1dc69ae507d.js.map