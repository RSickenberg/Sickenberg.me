/*! For license information please see lightbox.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("uikit-util")):"function"==typeof define&&define.amd?define("uikitlightbox",["uikit-util"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitLightbox=e(t.UIkit.util)}(this,(function(t){"use strict";var e={slide:{show:t=>[{transform:i(-100*t)},{transform:i()}],percent(e){return i=e,Math.abs(t.css(i,"transform").split(",")[4]/i.offsetWidth)||0;var i},translate:(t,e)=>[{transform:i(-100*e*t)},{transform:i(100*e*(1-t))}]}};function i(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),"translate3d("+(t+=t?e:"")+", 0, 0)"}function s(t){return"scale3d("+t+", "+t+", 1)"}var n={...e,fade:{show:()=>[{opacity:0},{opacity:1}],percent:e=>1-t.css(e,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:s(.8)},{opacity:1,transform:s(1)}],percent:e=>1-t.css(e,"opacity"),translate:t=>[{opacity:1-t,transform:s(1-.2*t)},{opacity:t,transform:s(.8+.2*t)}]}},o={props:{container:Boolean},data:{container:!0},computed:{container(e){let{container:i}=e;return!0===i&&this.$container||i&&t.$(i)}}},r={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation(t){let{animation:e}=t;return!!e[0]},hasTransition(e){let{animation:i}=e;return["slide","reveal"].some((e=>t.startsWith(i[0],e)))}},methods:{toggleElement(e,i,s){return new Promise((n=>Promise.all(t.toNodes(e).map((e=>{const n=t.isBoolean(i)?i:!this.isToggled(e);if(!t.trigger(e,"before"+(n?"show":"hide"),[this]))return Promise.reject();const o=(t.isFunction(s)?s:!1!==s&&this.hasAnimation?this.hasTransition?h:l:a)(e,n,this),r=n?this.clsEnter:this.clsLeave;t.addClass(e,r),t.trigger(e,n?"show":"hide",[this]);const d=()=>{t.removeClass(e,r),t.trigger(e,n?"shown":"hidden",[this])};return o?o.then(d,(()=>(t.removeClass(e,r),Promise.reject()))):d()}))).then(n,t.noop)))},isToggled(e){return void 0===e&&(e=this.$el),[e]=t.toNodes(e),!!t.hasClass(e,this.clsEnter)||!t.hasClass(e,this.clsLeave)&&(this.cls?t.hasClass(e,this.cls.split(" ")[0]):t.isVisible(e))},_toggle(e,i){if(!e)return;let s;i=Boolean(i),this.cls?(s=t.includes(this.cls," ")||i!==t.hasClass(e,this.cls),s&&t.toggleClass(e,this.cls,t.includes(this.cls," ")?void 0:i)):(s=i===e.hidden,s&&(e.hidden=!i)),t.$$("[autofocus]",e).some((e=>t.isVisible(e)?e.focus()||!0:e.blur())),s&&t.trigger(e,"toggled",[i,this])}}};function a(e,i,s){let{_toggle:n}=s;return t.Animation.cancel(e),t.Transition.cancel(e),n(e,i)}async function h(e,i,s){var n;let{animation:o,duration:r,velocity:a,transition:h,_toggle:l}=s;const[d="reveal",c="top"]=(null==(n=o[0])?void 0:n.split("-"))||[],u=[["left","right"],["top","bottom"]],g=u[t.includes(u[0],c)?0:1],m=g[1]===c,p=["width","height"][u.indexOf(g)],v="margin-"+g[0],f="margin-"+c;let b=t.dimensions(e)[p];const w=t.Transition.inProgress(e);await t.Transition.cancel(e),i&&l(e,!0);const x=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",v,f].map((t=>[t,e.style[t]]))),k=t.dimensions(e),y=t.toFloat(t.css(e,v)),I=t.toFloat(t.css(e,f)),$=k[p]+I;w||i||(b+=I);const[C]=t.wrapInner(e,"<div>");t.css(C,{boxSizing:"border-box",height:k.height,width:k.width,...t.css(e,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",f])}),t.css(e,{padding:0,border:0,minWidth:0,minHeight:0,[f]:0,width:k.width,height:k.height,overflow:"hidden",[p]:b});const T=b/$;r=(a*$+r)*(i?1-T:T);const A={[p]:i?$:0};m&&(t.css(e,v,$-b+y),A[v]=i?y:$+y),!m^"reveal"===d&&(t.css(C,v,-$+b),t.Transition.start(C,{[v]:i?0:-$},r,h));try{await t.Transition.start(e,A,r,h)}finally{t.css(e,x),t.unwrap(C.firstChild),i||l(e,!1)}}function l(e,i,s){t.Animation.cancel(e);const{animation:n,duration:o,_toggle:r}=s;return i?(r(e,!0),t.Animation.in(e,n[0],o,s.origin)):t.Animation.out(e,n[1]||n[0],o,s.origin).then((()=>r(e,!1)))}const d=[];var c={mixins:[{connected(){t.addClass(this.$el,this.$options.id)}},o,r],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel(e,i){let{selPanel:s}=e;return t.$(s,i)},transitionElement(){return this.panel},bgClose(t){let{bgClose:e}=t;return e&&this.panel}},beforeDisconnect(){t.includes(d,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.hide()}},{name:"click",delegate:()=>'a[href*="#"]',handler(e){let{current:i,defaultPrevented:s}=e;const{hash:n}=i;var o;!s&&n&&(o=i,["origin","pathname","search"].every((t=>o[t]===location[t])))&&!t.within(n,this.$el)&&t.$(n,document.body)&&this.hide()}},{name:"toggle",self:!0,handler(e){e.defaultPrevented||(e.preventDefault(),this.isToggled()===t.includes(d,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(e){if(t.includes(d,this))return!1;!this.stack&&d.length?(Promise.all(d.map((t=>t.hide()))).then(this.show),e.preventDefault()):d.push(this)}},{name:"show",self:!0,handler(){t.once(this.$el,"hide",t.on(document,"focusin",(e=>{t.last(d)!==this||t.within(e.target,this.$el)||this.$el.focus()}))),this.overlay&&(t.once(this.$el,"hidden",function(e){if(CSS.supports("overscroll-behavior","contain")){const i=function(e,i){const s=[];return t.apply(e,(e=>{var i;i=e,/auto|scroll/.test(t.css(i,"overflow"))&&s.push(e)})),s}(e);return t.css(i,"overscrollBehavior","contain"),()=>t.css(i,"overscrollBehavior","")}let i;const s=[t.on(e,"touchstart",(t=>{let{targetTouches:e}=t;1===e.length&&(i=e[0].clientY)}),{passive:!0}),t.on(e,"touchmove",(s=>{if(1!==s.targetTouches.length)return;let[n]=t.scrollParents(s.target,/auto|scroll/);t.within(n,e)||(n=e);const o=s.targetTouches[0].clientY-i,{scrollTop:r,scrollHeight:a,clientHeight:h}=n;(h>=a||0===r&&o>0||a-r<=h&&o<0)&&s.cancelable&&s.preventDefault()}),{passive:!1})];return()=>s.forEach((t=>t()))}(this.$el),{self:!0}),t.once(this.$el,"hidden",function(){if(g)return t.noop;g=!0;const{scrollingElement:e}=document;return t.css(e,{overflowY:"hidden",touchAction:"none",paddingRight:t.width(window)-e.clientWidth}),()=>{g=!1,t.css(e,{overflowY:"",touchAction:"",paddingRight:""})}}(),{self:!0})),this.stack&&t.css(this.$el,"zIndex",t.toFloat(t.css(this.$el,"zIndex"))+d.length),t.addClass(document.documentElement,this.clsPage),this.bgClose&&t.once(this.$el,"hide",t.on(document,t.pointerDown,(e=>{let{target:i}=e;t.last(d)!==this||this.overlay&&!t.within(i,this.$el)||t.within(i,this.panel)||t.once(document,t.pointerUp+" "+t.pointerCancel+" scroll",(e=>{let{defaultPrevented:s,type:n,target:o}=e;s||n!==t.pointerUp||i!==o||this.hide()}),!0)})),{self:!0}),this.escClose&&t.once(this.$el,"hide",t.on(document,"keydown",(e=>{27===e.keyCode&&t.last(d)===this&&this.hide()})),{self:!0})}},{name:"shown",self:!0,handler(){t.isFocusable(this.$el)||t.attr(this.$el,"tabindex","-1"),t.$(":focus",this.$el)||this.$el.focus()}},{name:"hidden",self:!0,handler(){t.includes(d,this)&&d.splice(d.indexOf(this),1),t.css(this.$el,"zIndex",""),d.some((t=>t.clsPage===this.clsPage))||t.removeClass(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&t.parent(this.$el)!==this.container?(t.append(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,u)},hide(){return this.toggleElement(this.$el,!1,u)}}};function u(e,i,s){let{transitionElement:n,_toggle:o}=s;return new Promise(((s,r)=>t.once(e,"show hide",(()=>{null==e._reject||e._reject(),e._reject=r,o(e,i);const a=t.once(n,"transitionstart",(()=>{t.once(n,"transitionend transitioncancel",s,{self:!0}),clearTimeout(h)}),{self:!0}),h=setTimeout((()=>{a(),s()}),(l=t.css(n,"transitionDuration"))?t.endsWith(l,"ms")?t.toFloat(l):1e3*t.toFloat(l):0);var l})))).then((()=>delete e._reject))}let g;function m(e,i,s){t.trigger(e,t.createEvent(i,!1,!1,s))}var p={connected(){var e;this.registerObserver(t.observeResize((null==(e=this.$options.resizeTargets)?void 0:e.call(this))||this.$el,(()=>this.$emit("resize"))))}},v={props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){t.attr(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>(!this.draggable||!t.$(":focus",this.$el))&&(!this.pauseOnHover||!t.matches(this.$el,":hover"))&&!this.stack.length&&this.show("next")),this.autoplayInterval)},stopAutoplay(){this.interval&&clearInterval(this.interval)}}};const f={passive:!1,capture:!0},b={passive:!0,capture:!0},w="touchmove mousemove",x="touchend touchcancel mouseup click input scroll";var k={mixins:[{mixins:[v,{props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const e of["start","move","end"]){const i=this[e];this[e]=e=>{const s=t.getEventPos(e).x*(t.isRtl?-1:1);this.prevPos=s===this.pos?this.prevPos:this.pos,this.pos=s,i(e)}}},events:[{name:"touchstart mousedown",passive:!0,delegate(){return this.selSlides},handler(e){var i;!this.draggable||!t.isTouch(e)&&(i=e.target,"none"!==t.css(i,"userSelect")&&t.toNodes(i.childNodes).some((t=>3===t.nodeType&&t.textContent.trim())))||t.closest(e.target,t.selInput)||e.button>0||this.length<2||this.start(e)}},{name:"dragstart",handler(t){t.preventDefault()}},{name:w,el(){return this.list},handler:t.noop,...f}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,t.on(document,w,this.move,f),t.on(document,x,this.end,b),t.css(this.list,"userSelect","none")},move(e){const i=this.pos-this.drag;if(0===i||this.prevPos===this.pos||!this.dragging&&Math.abs(i)<this.threshold)return;t.css(this.list,"pointerEvents","none"),e.cancelable&&e.preventDefault(),this.dragging=!0,this.dir=i<0?1:-1;const{slides:s}=this;let{prevIndex:n}=this,o=Math.abs(i),r=this.getIndex(n+this.dir,n),a=this._getDistance(n,r)||s[n].offsetWidth;for(;r!==n&&o>a;)this.drag-=a*this.dir,n=r,o-=a,r=this.getIndex(n+this.dir,n),a=this._getDistance(n,r)||s[n].offsetWidth;this.percent=o/a;const h=s[n],l=s[r],d=this.index!==r,c=n===r;let u;[this.index,this.prevIndex].filter((e=>!t.includes([r,n],e))).forEach((e=>{t.trigger(s[e],"itemhidden",[this]),c&&(u=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||u)&&t.trigger(s[this.index],"itemshown",[this]),d&&(this.prevIndex=n,this.index=r,!c&&t.trigger(h,"beforeitemhide",[this]),t.trigger(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),h,!c&&l),d&&(!c&&t.trigger(h,"itemhide",[this]),t.trigger(l,"itemshow",[this]))},end(){if(t.off(document,w,this.move,f),t.off(document,x,this.end,b),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null;else{const e=(t.isRtl?this.dir*(t.isRtl?1:-1):this.dir)<0==this.prevPos>this.pos;this.index=e?this.index:this.prevIndex,e&&(this.percent=1-this.percent),this.show(this.dir>0&&!e||this.dir<0&&e?"next":"previous",!0)}t.css(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},{data:{selNav:!1},computed:{nav(e,i){let{selNav:s}=e;return t.$(s,i)},selNavItem(t){let{attrItem:e}=t;return"["+e+"],[data-"+e+"]"},navItems(e,i){return t.$$(this.selNavItem,i)}},update:{write(){this.nav&&this.length!==this.nav.children.length&&t.html(this.nav,this.slides.map(((t,e)=>"<li "+this.attrItem+'="'+e+'"><a href></a></li>')).join("")),this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]},events:[{name:"click",delegate(){return this.selNavItem},handler(e){e.preventDefault(),this.show(t.data(e.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav(){const e=this.getValidIndex();for(const i of this.navItems){const s=t.data(i,this.attrItem);t.toggleClass(i,this.clsActive,t.toNumber(s)===e),t.toggleClass(i,"uk-invisible",this.finite&&("previous"===s&&0===e||"next"===s&&e>=this.maxIndex))}}}},p],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){t.removeClass(this.slides,this.clsActive)},computed:{duration(t,e){let{velocity:i}=t;return e.offsetWidth/i*.5+300},list(e,i){let{selList:s}=e;return t.$(s,i)},maxIndex(){return this.length-1},selSlides(t){let{selList:e,selSlides:i}=t;return e+" "+(i||"> *")},slides:{get(){return t.$$(this.selSlides,this.$el)},watch(){this.$emit("resize")}},length(){return this.slides.length}},methods:{show(e,i){if(void 0===i&&(i=!1),this.dragging||!this.length)return;const{stack:s}=this,n=i?0:s.length,o=()=>{s.splice(n,1),s.length&&this.show(s.shift(),!0)};if(s[i?"unshift":"push"](e),!i&&s.length>1)return void(2===s.length&&this._transitioner.forward(Math.min(this.duration,200)));const r=this.getIndex(this.index),a=t.hasClass(this.slides,this.clsActive)&&this.slides[r],h=this.getIndex(e,this.index),l=this.slides[h];if(a===l)return void o();if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(e,r),this.prevIndex=r,this.index=h,a&&!t.trigger(a,"beforeitemhide",[this])||!t.trigger(l,"beforeitemshow",[this,a]))return this.index=this.prevIndex,void o();const d=this._show(a,l,i).then((()=>(a&&t.trigger(a,"itemhidden",[this]),t.trigger(l,"itemshown",[this]),new Promise((t=>{requestAnimationFrame((()=>{s.shift(),s.length?this.show(s.shift(),!0):this._transitioner=null,t()}))})))));return a&&t.trigger(a,"itemhide",[this]),t.trigger(l,"itemshow",[this]),d},getIndex(e,i){return void 0===e&&(e=this.index),void 0===i&&(i=this.index),t.clamp(t.getIndex(e,this.slides,i,this.finite),0,this.maxIndex)},getValidIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve();const{length:s}=this.stack;return this._transitioner[s>1?"forward":"show"](s>1?Math.min(this.duration,75+75/(s-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t,e,i){void 0===e&&(e=this.prevIndex),void 0===i&&(i=this.index);const s=this._getTransitioner(e!==i&&e,i);return s.translate(t),s},_getTransitioner(e,i,s,n){return void 0===e&&(e=this.prevIndex),void 0===i&&(i=this.index),void 0===s&&(s=this.dir||1),void 0===n&&(n=this.transitionOptions),new this.Transitioner(t.isNumber(e)?this.slides[e]:e,t.isNumber(i)?this.slides[i]:i,s*(t.isRtl?-1:1),n)}}}],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:e,Transitioner:function(e,i,s,n){let{animation:o,easing:r}=n;const{percent:a,translate:h,show:l=t.noop}=o,d=l(s),c=new t.Deferred;return{dir:s,show(n,o,a){void 0===o&&(o=0);const h=a?"linear":r;return n-=Math.round(n*t.clamp(o,-1,1)),this.translate(o),m(i,"itemin",{percent:o,duration:n,timing:h,dir:s}),m(e,"itemout",{percent:1-o,duration:n,timing:h,dir:s}),Promise.all([t.Transition.start(i,d[1],n,h),t.Transition.start(e,d[0],n,h)]).then((()=>{this.reset(),c.resolve()}),t.noop),c.promise},cancel(){t.Transition.cancel([i,e])},reset(){for(const s in d[0])t.css([i,e],s,"")},forward(s,n){return void 0===n&&(n=this.percent()),t.Transition.cancel([i,e]),this.show(s,n,!0)},translate(n){this.reset();const o=h(n,s);t.css(i,o[1]),t.css(e,o[0]),m(i,"itemtranslatein",{percent:n,dir:s}),m(e,"itemtranslateout",{percent:1-n,dir:s})},percent:()=>a(e||i,i,s),getDistance:()=>null==e?void 0:e.offsetWidth}}},computed:{animation(t){let{animation:e,Animations:i}=t;return{...i[e]||i.slide,name:e}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow(e){let{target:i}=e;t.addClass(i,this.clsActive)},itemshown(e){let{target:i}=e;t.addClass(i,this.clsActivated)},itemhidden(e){let{target:i}=e;t.removeClass(i,this.clsActive,this.clsActivated)}}},y={mixins:[o,c,r,k],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:n,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const e=t.$(this.template),i=t.$(this.selList,e);this.items.forEach((()=>t.append(i,"<li>"))),this.$mount(t.append(this.container,e))},computed:{caption(e,i){let{selCaption:s}=e;return t.$(s,i)}},events:[{name:t.pointerMove+" "+t.pointerDown+" keydown",handler:"showControls"},{name:"click",self:!0,delegate(){return this.selSlides},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),t.removeClass(this.slides,this.clsActive),t.Transition.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous");break;case 39:this.show("next")}}},{name:"beforeitemshow",handler(e){this.isToggled()||(this.draggable=!1,e.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=n.scale,t.removeClass(e.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){t.html(this.caption,this.getItem().caption||"");for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(e,i){const{source:s,type:n,alt:o="",poster:r,attrs:a={}}=i;if(this.setItem(i,"<span uk-spinner></span>"),!s)return;let h;const l={allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay};if("image"===n||s.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))try{const{width:e,height:n}=await t.getImage(s,a.srcset,a.size);this.setItem(i,I("img",{src:s,width:e,height:n,alt:o,...a}))}catch(t){this.setError(i)}else if("video"===n||s.match(/\.(mp4|webm|ogv)($|\?)/i)){const e=I("video",{src:s,poster:r,controls:"",playsinline:"","uk-video":""+this.videoAutoplay});t.on(e,"loadedmetadata",(()=>{t.attr(e,{width:e.videoWidth,height:e.videoHeight,...a}),this.setItem(i,e)})),t.on(e,"error",(()=>this.setError(i)))}else if("iframe"===n||s.match(/\.(html|php)($|\?)/i))this.setItem(i,I("iframe",{src:s,allowfullscreen:"",class:"uk-lightbox-iframe",...a}));else if(h=s.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(i,I("iframe",{src:"https://www.youtube"+(h[1]||"")+".com/embed/"+h[2]+(h[3]?"?"+h[3]:""),width:1920,height:1080,...l,...a}));else if(h=s.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:e}=await(await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(s),{credentials:"omit"})).json();this.setItem(i,I("iframe",{src:"https://player.vimeo.com/video/"+h[1]+(h[2]?"?"+h[2]:""),width:e,height:t,...l,...a}))}catch(t){this.setError(i)}}}],methods:{loadItem(e){void 0===e&&(e=this.index);const i=this.getItem(e);this.getSlide(i).childElementCount||t.trigger(this.$el,"itemload",[i])},getItem(e){return void 0===e&&(e=this.index),this.items[t.getIndex(e,this.slides)]},setItem(e,i){t.trigger(this.$el,"itemloaded",[this,t.html(this.getSlide(e),i)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),t.addClass(this.$el,"uk-active","uk-transition-active")},hideControls(){t.removeClass(this.$el,"uk-active","uk-transition-active")}}};function I(e,i){const s=t.fragment("<"+e+">");return t.attr(s,i),s}var $={install:function(e,i){e.lightboxPanel||e.component("lightboxPanel",y),t.assign(i.props,e.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get(e,i){let{toggle:s}=e;return t.$$(s,i)},watch(){this.hide()}}},disconnected(){this.hide()},events:[{name:"click",delegate(){return this.toggle+":not(.uk-disabled)"},handler(t){t.preventDefault(),this.show(t.current)}}],methods:{show(e){const i=t.uniqueBy(this.toggles.map(C),"source");if(t.isElement(e)){const{source:s}=C(e);e=t.findIndex(i,(t=>{let{source:e}=t;return s===e}))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:i}),t.on(this.panel.$el,"hidden",(()=>this.panel=null)),this.panel.show(e)},hide(){var t;return null==(t=this.panel)?void 0:t.hide()}}};function C(e){const i={};for(const s of["href","caption","type","poster","alt","attrs"])i["href"===s?"source":s]=t.data(e,s);return i.attrs=t.parseOptions(i.attrs),i}return"undefined"!=typeof window&&window.UIkit&&window.UIkit.component("lightbox",$),$}));