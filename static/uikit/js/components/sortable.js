/*! For license information please see sortable.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("uikit-util")):"function"==typeof define&&define.amd?define("uikitsortable",["uikit-util"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitSortable=e(t.UIkit.util)}(this,(function(t){"use strict";function e(e,i=!1){let{offsetTop:s,offsetLeft:n,offsetHeight:o,offsetWidth:r}=e;return i&&([s,n]=t.offsetPosition(e)),{top:s,left:n,bottom:s+o,right:n+r}}const i="uk-transition-leave",s="uk-transition-enter";function n(e,n,l,h=0){const c=o(n,!0),d={opacity:1},u={opacity:0},p=t=>()=>c===o(n)?t():Promise.reject(),m=p((async()=>{t.addClass(n,i),await Promise.all(a(n).map(((e,i)=>new Promise((s=>setTimeout((()=>t.Transition.start(e,u,l/2,"ease").then(s)),i*h)))))),t.removeClass(n,i)})),f=p((async()=>{const i=t.height(n);t.addClass(n,s),e(),t.css(t.children(n),{opacity:0}),await new Promise((t=>requestAnimationFrame(t)));const r=t.children(n),p=t.height(n);t.css(n,"alignContent","flex-start"),t.height(n,i);const m=a(n);t.css(r,u);const f=m.map((async(e,i)=>{var s;await(s=i*h,new Promise((t=>setTimeout(t,s)))),await t.Transition.start(e,d,l/2,"ease")}));i!==p&&f.push(t.Transition.start(n,{height:p},l/2+m.length*h,"ease")),await Promise.all(f).then((()=>{t.removeClass(n,s),c===o(n)&&(t.css(n,{height:"",alignContent:""}),t.css(r,{opacity:""}),delete n.dataset.transition)}))}));return t.hasClass(n,i)?r(n).then(f):t.hasClass(n,s)?r(n).then(m).then(f):m().then(f)}function o(e,i){return i&&(e.dataset.transition=1+o(e)),t.toNumber(e.dataset.transition)||0}function r(e){return Promise.all(t.children(e).filter(t.Transition.inProgress).map((e=>new Promise((i=>t.once(e,"transitionend transitioncanceled",i))))))}function a(i){return(s=t.children(i),function(i,s,n){const o=[[]];for(const s of i){if(!t.isVisible(s))continue;let i=e(s);for(let t=o.length-1;t>=0;t--){const n=o[t];if(!n[0]){n.push(s);break}let r;if(n[0].offsetParent===s.offsetParent?r=e(n[0]):(i=e(s,!0),r=e(n[0],!0)),i.top>=r.bottom-1&&i.top!==r.top){o.push([s]);break}if(i.bottom-1>r.top||i.top===r.top){n.push(s);break}if(0===t){o.unshift([s]);break}}}return o}(s)).reduce(((e,i)=>e.concat(t.sortBy(i.filter((e=>t.isInView(e))),"offsetLeft"))),[]);var s}async function l(e,i,s){await d();let n=t.children(i);const o=n.map((t=>h(t,!0))),r={...t.css(i,["height","padding"]),display:"block"};await Promise.all(n.concat(i).map(t.Transition.cancel)),e(),n=n.concat(t.children(i).filter((e=>!t.includes(n,e)))),await Promise.resolve(),t.fastdom.flush();const a=t.attr(i,"style"),l=t.css(i,["height","padding"]),[u,p]=function(e,i,s){const n=i.map(((e,i)=>!(!t.parent(e)||!(i in s))&&(s[i]?t.isVisible(e)?c(e):{opacity:0}:{opacity:t.isVisible(e)?1:0}))),o=n.map(((n,o)=>{const r=t.parent(i[o])===e&&(s[o]||h(i[o]));if(!r)return!1;if(n){if(!("opacity"in n)){const{opacity:t}=r;t%1?n.opacity=1:delete r.opacity}}else delete r.opacity;return r}));return[n,o]}(i,n,o),m=n.map((e=>({style:t.attr(e,"style")})));n.forEach(((e,i)=>p[i]&&t.css(e,p[i]))),t.css(i,r),await d();const f=n.map(((e,n)=>t.parent(e)===i&&t.Transition.start(e,u[n],s,"ease"))).concat(t.Transition.start(i,l,s,"ease"));try{await Promise.all(f),n.forEach(((e,s)=>{t.attr(e,m[s]),t.parent(e)===i&&t.css(e,"display",0===u[s].opacity?"none":"")})),t.attr(i,"style",a)}catch(e){t.attr(n,"style",""),function(e,i){for(const s in i)t.css(e,s,"")}(i,r)}}function h(e,i){const s=t.css(e,"zIndex");return!!t.isVisible(e)&&{display:"",opacity:i?t.css(e,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===s?t.index(e):s,...c(e)}}function c(e){const{height:i,width:s}=t.offset(e);return{height:i,width:s,transform:"",...t.position(e),...t.css(e,["marginTop","marginLeft"])}}function d(){return new Promise((t=>requestAnimationFrame(t)))}var u={mixins:[{connected(){t.addClass(this.$el,this.$options.id)}},{props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(e,i=this.$el){const s=this.animation;return("fade"===s?n:"delayed-fade"===s?(...t)=>n(...t,40):s?l:()=>(e(),Promise.resolve()))(e,i,this.duration).catch(t.noop)}}}],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const e of["init","start","move","end"]){const i=this[e];this[e]=e=>{t.assign(this.pos,t.getEventPos(e)),i(e)}}},events:{name:t.pointerDown,passive:!1,handler:"init"},computed:{target(){return(this.$el.tBodies||[this.$el])[0]},items(){return t.children(this.target)},isEmpty:{get(){return t.isEmpty(this.items)},watch(e){t.toggleClass(this.target,this.clsEmpty,e)},immediate:!0},handles:{get({handle:e},i){return e?t.$$(e,i):this.items},watch(e,i){t.css(i,{touchAction:"",userSelect:""}),t.css(e,{touchAction:t.hasTouch?"none":"",userSelect:"none"})},immediate:!0}},update:{write(e){if(!this.drag||!t.parent(this.placeholder))return;const{pos:{x:i,y:s},origin:{offsetTop:n,offsetLeft:o},placeholder:r}=this;t.css(this.drag,{top:s-n,left:i-o});const a=this.getSortable(document.elementFromPoint(i,s));if(!a)return;const{items:l}=a;if(l.some(t.Transition.inProgress))return;const h=function(e,i){return e[t.findIndex(e,(e=>t.pointInRect(i,e.getBoundingClientRect())))]}(l,{x:i,y:s});if(l.length&&(!h||h===r))return;const c=this.getSortable(r),d=function(e,i,s,n,o,r){if(!t.children(e).length)return;const a=i.getBoundingClientRect();if(!r)return function(e,i){const s=1===t.children(e).length;s&&t.append(e,i);const n=t.children(e),o=n.some(((t,e)=>{const i=t.getBoundingClientRect();return n.slice(e+1).some((t=>{const e=t.getBoundingClientRect();return!m([i.left,i.right],[e.left,e.right])}))}));return s&&t.remove(i),o}(e,s)||o<a.top+a.height/2?i:i.nextElementSibling;const l=s.getBoundingClientRect(),h=m([a.top,a.bottom],[l.top,l.bottom]),c=h?n:o,d=h?"width":"height",u=h?"left":"top",p=h?"right":"bottom",f=l[d]<a[d]?a[d]-l[d]:0;return l[u]<a[u]?!(f&&c<a[u]+f)&&i.nextElementSibling:!(f&&c>a[p]-f)&&i}(a.target,h,r,i,s,a===c&&e.moved!==h);!1!==d&&(d&&r===d||(a!==c?(c.remove(r),e.moved=h):delete e.moved,a.insert(r,d),this.touched.add(a)))},events:["move"]},methods:{init(e){const{target:i,button:s,defaultPrevented:n}=e,[o]=this.items.filter((e=>t.within(i,e)));!o||n||s>0||t.isInput(i)||t.within(i,`.${this.clsNoDrag}`)||this.handle&&!t.within(i,this.handle)||(e.preventDefault(),this.touched=new Set([this]),this.placeholder=o,this.origin={target:i,index:t.index(o),...this.pos},t.on(document,t.pointerMove,this.move),t.on(document,t.pointerUp,this.end),this.threshold||this.start(e))},start(e){this.drag=function(e,i){let s;if(t.isTag(i,"li","tr")){s=t.$("<div>"),t.append(s,i.cloneNode(!0).children);for(const e of i.getAttributeNames())t.attr(s,e,i.getAttribute(e))}else s=i.cloneNode(!0);return t.append(e,s),t.css(s,"margin","0","important"),t.css(s,{boxSizing:"border-box",width:i.offsetWidth,height:i.offsetHeight,padding:t.css(i,"padding")}),t.height(s.firstElementChild,t.height(i.firstElementChild)),s}(this.$container,this.placeholder);const{left:i,top:s}=this.placeholder.getBoundingClientRect();t.assign(this.origin,{offsetLeft:this.pos.x-i,offsetTop:this.pos.y-s}),t.addClass(this.drag,this.clsDrag,this.clsCustom),t.addClass(this.placeholder,this.clsPlaceholder),t.addClass(this.items,this.clsItem),t.addClass(document.documentElement,this.clsDragState),t.trigger(this.$el,"start",[this,this.placeholder]),function(e){let i=Date.now();p=setInterval((()=>{let{x:s,y:n}=e;n+=document.scrollingElement.scrollTop;const o=.3*(Date.now()-i);i=Date.now(),t.scrollParents(document.elementFromPoint(s,e.y)).reverse().some((e=>{let{scrollTop:i,scrollHeight:s}=e;const{top:r,bottom:a,height:l}=t.offsetViewport(e);if(r<n&&r+35>n)i-=o;else{if(!(a>n&&a-35<n))return;i+=o}if(i>0&&i<s-l)return e.scrollTop=i,!0}))}),15)}(this.pos),this.move(e)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(t.off(document,t.pointerMove,this.move),t.off(document,t.pointerUp,this.end),!this.drag)return;clearInterval(p);const e=this.getSortable(this.placeholder);this===e?this.origin.index!==t.index(this.placeholder)&&t.trigger(this.$el,"moved",[this,this.placeholder]):(t.trigger(e.$el,"added",[e,this.placeholder]),t.trigger(this.$el,"removed",[this,this.placeholder])),t.trigger(this.$el,"stop",[this,this.placeholder]),t.remove(this.drag),this.drag=null;for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const s of this.touched)t.removeClass(s.items,e,i);this.touched=null,t.removeClass(document.documentElement,this.clsDragState)},insert(e,i){t.addClass(this.items,this.clsItem),this.animate((()=>i?t.before(i,e):t.append(this.target,e)))},remove(e){t.within(e,this.target)&&this.animate((()=>t.remove(e)))},getSortable(e){do{const t=this.$getComponent(e,"sortable");if(t&&(t===this||!1!==this.group&&t.group===this.group))return t}while(e=t.parent(e))}}};let p;function m(t,e){return t[1]>e[0]&&e[1]>t[0]}return"undefined"!=typeof window&&window.UIkit&&window.UIkit.component("sortable",u),u}));