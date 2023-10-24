/*! For license information please see parallax.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("uikit-util")):"function"==typeof define&&define.amd?define("uikitparallax",["uikit-util"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitParallax=e(t.UIkit.util)}(this,(function(t){"use strict";function e(e,n,r){return{observe:e,handler(){!function(e,n="update"){e._connected&&e._updates.length&&(e._queued||(e._queued=new Set,t.fastdom.read((()=>{e._connected&&function(e,n){for(const{read:r,write:i,events:o=[]}of e._updates){if(!n.has("update")&&!o.some((t=>n.has(t))))continue;let s;r&&(s=r.call(e,e._data,n),s&&t.isPlainObject(s)&&t.assign(e._data,s)),i&&!1!==s&&t.fastdom.write((()=>{e._connected&&i.call(e,e._data,n)}))}}(e,e._queued),delete e._queued}))),e._queued.add(n.type||n))}(this,r)},...n}}var n={props:{media:Boolean},data:{media:!1},connected(){const e=function(e,n){if(t.isString(e))if(t.startsWith(e,"@"))e=t.toFloat(t.css(n,`--uk-breakpoint-${e.substr(1)}`));else if(isNaN(e))return e;return e&&t.isNumeric(e)?`(min-width: ${e}px)`:""}(this.media,this.$el);if(this.matchMedia=!0,e){this.mediaObj=window.matchMedia(e);const n=()=>{this.matchMedia=this.mediaObj.matches,t.trigger(this.$el,t.createEvent("mediachange",!1,!0,[this.mediaObj]))};this.offMediaObj=t.on(this.mediaObj,"change",(()=>{n(),this.$emit("resize")})),n()}},disconnected(){var t;null==(t=this.offMediaObj)||t.call(this)}};function r(t,e){var n;return null==(n=null==t?void 0:t.startsWith)?void 0:n.call(t,e)}const{isArray:i,from:o}=Array;function s(t){return null!==t&&"object"==typeof t}function c(t){return function(t){return!function(t){return s(t)&&t===t.window}(t)&&s(t)&&t.nodeType}(t)>=1}function u(t){return"string"==typeof t}function a(t){return l(t)[0]}function l(t){return c(t)?[t]:Array.from(t||[]).filter(c)}function f(t){const e=Object.create(null);return n=>e[n]||(e[n]=t(n))}function d(t){var e;return null==(e=a(t))?void 0:e.parentElement}function h(t,e){return l(t).some((t=>t.matches(e)))}function p(t,e){var n;return null==(n=a(t))?void 0:n.closest(r(e,">")?e.slice(1):e)}function g(t,e){return e?l(t).indexOf(a(e)):function(t,e){const n=(t=a(t))?o(t.children):[];return e?function(t,e){return l(t).filter((t=>h(t,e)))}(n,e):n}(d(t)).indexOf(t)}function m(t,e,n){var r;if(s(e))for(const n in e)m(t,n,e[n]);else{if(function(t){return void 0===t}(n))return null==(r=a(t))?void 0:r.getAttribute(e);for(const r of l(t))"function"==typeof n&&(n=n.call(r,m(r,e))),null===n?b(r,e):r.setAttribute(e,n)}}function b(t,e){l(t).forEach((t=>t.removeAttribute(e)))}const v=/(^|[^\\],)\s*[!>+~-]/,$=f((t=>t.match(v))),x=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,y=f((t=>t.replace(x,"$1 *"))),w=/.*?[^\\](?:,|$)/g,k=f((t=>t.match(w).map((t=>t.replace(/,$/,"").trim()))));function j(t){const e=[];for(;t.parentNode;){const r=m(t,"id");if(r){e.unshift(`#${n=r,u(n)?CSS.escape(n):""}`);break}{let{tagName:n}=t;"HTML"!==n&&(n+=`:nth-child(${g(t)+1})`),e.unshift(n),t=t.parentNode}}var n;return e.join(" > ")}const M=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function O(t,e){return u(n=t)&&r(n.trim(),"<")?l(function(t){const e=M.exec(t);if(e)return document.createElement(e[1]);const n=document.createElement("template");return n.innerHTML=t.trim(),(r=n.content.childNodes).length>1?r:r[0];var r}(t)):function(t,e){return l(function(t,e=document,n){if(!t||!u(t))return t;if(t=y(t),$(t)){const n=k(t);t="";for(let r of n){let i=e;if("!"===r[0]){const t=r.substr(1).trim().split(" ");if(i=p(d(e),t[0]),r=t.slice(1).join(" ").trim(),!r.length&&1===n.length)return i}if("-"===r[0]){const t=r.substr(1).trim().split(" "),n=(i||e).previousElementSibling;i=h(n,r.substr(1))?n:null,r=t.slice(1).join(" ")}i&&(t+=`${t?",":""}${j(i)} ${r}`)}e=document}try{return e[n](t)}catch(t){return null}}(t,a(e),"querySelectorAll"))}(t,e);var n}const S={x:F,y:F,rotate:F,scale:F,color:E,backgroundColor:E,borderColor:E,blur:q,hue:q,fopacity:q,grayscale:q,invert:q,saturate:q,sepia:q,opacity:function(t,e,n){return 1===n.length&&n.unshift(L(e,t,"")),n=T(n),(e,r)=>{e[t]=H(n,r)}},stroke:function(e,n,r){1===r.length&&r.unshift(0);const i=D(r),o=function(t){return Math.ceil(Math.max(0,...O("[stroke]",t).map((t=>{try{return t.getTotalLength()}catch(t){return 0}}))))}(n);return(r=T(r.reverse(),(e=>(e=t.toFloat(e),"%"===i?e*o/100:e)))).some((([t])=>t))?(t.css(n,"strokeDasharray",o),(t,e)=>{t.strokeDashoffset=H(r,e)}):t.noop},bgx:I,bgy:I},{keys:_}=Object;var N={mixins:[n],props:R(_(S),"list"),data:R(_(S),void 0),computed:{props(e,n){const r={};for(const n in e)n in S&&!t.isUndefined(e[n])&&(r[n]=e[n].slice());const i={};for(const t in r)i[t]=S[t](t,n,r[t],r);return i}},events:{load(){this.$emit()}},methods:{reset(){for(const e in this.getCss(0))t.css(this.$el,e,"")},getCss(e){const n={};for(const r in this.props)this.props[r](n,t.clamp(e));return n.willChange=Object.keys(n).map(t.propName).join(","),n}}};function F(e,n,r){let i,o=D(r)||{x:"px",y:"px",rotate:"deg"}[e]||"";return"x"===e||"y"===e?(e=`translate${t.ucfirst(e)}`,i=e=>t.toFloat(t.toFloat(e).toFixed("px"===o?0:6))):"scale"===e&&(o="",i=e=>{var r;return D([e])?t.toPx(e,"width",n,!0)/n["offset"+((null==(r=e.endsWith)?void 0:r.call(e,"vh"))?"Height":"Width")]:t.toFloat(e)}),1===r.length&&r.unshift("scale"===e?1:0),r=T(r,i),(t,n)=>{t.transform=`${t.transform||""} ${e}(${H(r,n)}${o})`}}function E(e,n,r){return 1===r.length&&r.unshift(L(n,e,"")),r=T(r,(e=>function(e,n){return L(e,"color",n).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(t.toFloat)}(n,e))),(n,i)=>{const[o,s,c]=W(r,i),u=o.map(((e,n)=>(e+=c*(s[n]-e),3===n?t.toFloat(e):parseInt(e,10)))).join(",");n[e]=`rgba(${u})`}}function q(t,e,n){1===n.length&&n.unshift(0);const r=D(n)||{blur:"px",hue:"deg"}[t]||"%";return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,n=T(n),(e,i)=>{const o=H(n,i);e.filter=`${e.filter||""} ${t}(${o+r})`}}function I(e,n,r,i){1===r.length&&r.unshift(0);const o="bgy"===e?"height":"width";i[e]=T(r,(e=>t.toPx(e,o,n)));const s=["bgx","bgy"].filter((t=>t in i));if(2===s.length&&"bgx"===e)return t.noop;if("cover"===L(n,"backgroundSize",""))return function(e,n,r,i){const o=function(e){const n=t.css(e,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1");if(A[n])return A[n];const r=new Image;return n&&(r.src=n,!r.naturalWidth)?(r.onload=()=>{A[n]=C(r),t.trigger(e,t.createEvent("load",!1))},C(r)):A[n]=C(r)}(n);if(!o.width)return t.noop;const s={width:n.offsetWidth,height:n.offsetHeight},c=["bgx","bgy"].filter((t=>t in i)),u={};for(const t of c){const e=i[t].map((([t])=>t)),n=Math.min(...e),r=Math.max(...e),o=e.indexOf(n)<e.indexOf(r),c=r-n;u[t]=(o?-c:0)-(o?n:r)+"px",s["bgy"===t?"height":"width"]+=c}const a=t.Dimensions.cover(o,s);for(const t of c){const e="bgy"===t?"height":"width",r=a[e]-s[e];u[t]=`max(${P(n,t)},-${r}px) + ${u[t]}`}const l=z(c,u,i);return(t,e)=>{l(t,e),t.backgroundSize=`${a.width}px ${a.height}px`,t.backgroundRepeat="no-repeat"}}(0,n,0,i);const c={};for(const t of s)c[t]=P(n,t);return z(s,c,i)}function P(t,e){return L(t,`background-position-${e.substr(-1)}`,"")}function z(t,e,n){return function(r,i){for(const o of t){const t=H(n[o],i);r[`background-position-${o.substr(-1)}`]=`calc(${e[o]} + ${t}px)`}}}const A={};function C(t){return{width:t.naturalWidth,height:t.naturalHeight}}function T(e,n=t.toFloat){const r=[],{length:i}=e;let o=0;for(let s=0;s<i;s++){let[c,u]=t.isString(e[s])?e[s].trim().split(/ (?![^(]*\))/):[e[s]];if(c=n(c),u=u?t.toFloat(u)/100:null,0===s?null===u?u=0:u&&r.push([c,0]):s===i-1&&(null===u?u=1:1!==u&&(r.push([c,u]),u=1)),r.push([c,u]),null===u)o++;else if(o){const t=r[s-o-1][1],e=(u-t)/(o+1);for(let n=o;n>0;n--)r[s-n][1]=t+e*(o-n+1);o=0}}return r}function W(e,n){const r=t.findIndex(e.slice(1),(([,t])=>n<=t))+1;return[e[r-1][0],e[r][0],(n-e[r-1][1])/(e[r][1]-e[r-1][1])]}function H(t,e){const[n,r,i]=W(t,e);return n+Math.abs(n-r)*i*(n<r?1:-1)}const U=/^-?\d+(?:\.\d+)?(\S+)?/;function D(t,e){var n;for(const e of t){const t=null==(n=e.match)?void 0:n.call(e,U);if(t)return t[1]}return e}function L(e,n,r){const i=e.style[n],o=t.css(t.css(e,n,r),n);return e.style[n]=i,o}function R(t,e){return t.reduce(((t,n)=>(t[n]=e,t)),{})}var V={mixins:[N],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target:({target:e},n)=>B(e&&t.query(e,n)||n),start({start:e}){return t.toPx(e,"height",this.target,!0)},end({end:e,viewport:n}){return t.toPx(e||(n=100*(1-n))&&`${n}vh+${n}%`,"height",this.target,!0)}},observe:[e(((e,n)=>t.observeViewportResize(n)),undefined),e(((e,n)=>{return{disconnect:t.on((r=e,t.toNodes(r).map((e=>{const{ownerDocument:n}=e,r=t.scrollParent(e,!0);return r===n.scrollingElement?n:r}))),"scroll",n,{passive:!0})};var r}),{target:({target:t})=>t},"scroll"),function(n){return e(t.observeResize,n,"resize")}({target:({$el:e,target:n})=>[e,n,t.scrollParent(n,!0)]})],update:{read({percent:e},n){if(n.has("scroll")||(e=!1),!t.isVisible(this.$el))return!1;if(!this.matchMedia)return;const r=e;return{percent:e=function(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}(t.scrolledOver(this.target,this.start,this.end),this.easing),style:r!==e&&this.getCss(e)}},write({style:e}){this.matchMedia?e&&t.css(this.$el,e):this.reset()},events:["scroll","resize"]}};function B(e){return e?"offsetTop"in e?e:B(t.parent(e)):document.documentElement}return"undefined"!=typeof window&&window.UIkit&&window.UIkit.component("parallax",V),V}));