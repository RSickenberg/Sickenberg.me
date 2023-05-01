/*! For license information please see lightbox.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("uikit-util")):"function"==typeof define&&define.amd?define("uikitlightbox",["uikit-util"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitLightbox=e(t.UIkit.util)}(this,(function(t){"use strict";var e={slide:{show:t=>[{transform:i(-100*t)},{transform:i()}],percent(e){return i=e,Math.abs(t.css(i,"transform").split(",")[4]/i.offsetWidth)||0;var i},translate:(t,e)=>[{transform:i(-100*e*t)},{transform:i(100*e*(1-t))}]}};function i(t=0,e="%"){return`translate3d(${t+=t?e:""}, 0, 0)`}function s(t){return`scale3d(${t}, ${t}, 1)`}var n={...e,fade:{show:()=>[{opacity:0},{opacity:1}],percent:e=>1-t.css(e,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:s(.8)},{opacity:1,transform:s(1)}],percent:e=>1-t.css(e,"opacity"),translate:t=>[{opacity:1-t,transform:s(1-.2*t)},{opacity:t,transform:s(.8+.2*t)}]}},o={props:{container:Boolean},data:{container:!0},computed:{container({container:e}){return!0===e&&this.$container||e&&t.$(e)}}},r={props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation:({animation:t})=>!!t[0],hasTransition:({animation:e})=>["slide","reveal"].some((i=>t.startsWith(e[0],i)))},methods:{toggleElement(e,i,s){return new Promise((n=>Promise.all(t.toNodes(e).map((e=>{const n=t.isBoolean(i)?i:!this.isToggled(e);if(!t.trigger(e,"before"+(n?"show":"hide"),[this]))return Promise.reject();const o=(t.isFunction(s)?s:!1!==s&&this.hasAnimation?this.hasTransition?l:h:a)(e,n,this),r=n?this.clsEnter:this.clsLeave;t.addClass(e,r),t.trigger(e,n?"show":"hide",[this]);const d=()=>{t.removeClass(e,r),t.trigger(e,n?"shown":"hidden",[this])};return o?o.then(d,(()=>(t.removeClass(e,r),Promise.reject()))):d()}))).then(n,t.noop)))},isToggled(e=this.$el){return e=t.toNode(e),!!t.hasClass(e,this.clsEnter)||!t.hasClass(e,this.clsLeave)&&(this.cls?t.hasClass(e,this.cls.split(" ")[0]):t.isVisible(e))},_toggle(e,i){if(!e)return;let s;i=Boolean(i),this.cls?(s=t.includes(this.cls," ")||i!==t.hasClass(e,this.cls),s&&t.toggleClass(e,this.cls,t.includes(this.cls," ")?void 0:i)):(s=i===e.hidden,s&&(e.hidden=!i)),t.$$("[autofocus]",e).some((e=>t.isVisible(e)?e.focus()||!0:e.blur())),s&&t.trigger(e,"toggled",[i,this])}}};function a(e,i,{_toggle:s}){return t.Animation.cancel(e),t.Transition.cancel(e),s(e,i)}async function l(e,i,{animation:s,duration:n,velocity:o,transition:r,_toggle:a}){var l;const[h="reveal",d="top"]=(null==(l=s[0])?void 0:l.split("-"))||[],c=[["left","right"],["top","bottom"]],u=c[t.includes(c[0],d)?0:1],m=u[1]===d,g=["width","height"][c.indexOf(u)],p=`margin-${u[0]}`,v=`margin-${d}`;let f=t.dimensions(e)[g];const b=t.Transition.inProgress(e);await t.Transition.cancel(e),i&&a(e,!0);const x=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",p,v].map((t=>[t,e.style[t]]))),w=t.dimensions(e),$=t.toFloat(t.css(e,p)),k=t.toFloat(t.css(e,v)),y=w[g]+k;b||i||(f+=k);const[I]=t.wrapInner(e,"<div>");t.css(I,{boxSizing:"border-box",height:w.height,width:w.width,...t.css(e,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",v])}),t.css(e,{padding:0,border:0,minWidth:0,minHeight:0,[v]:0,width:w.width,height:w.height,overflow:"hidden",[g]:f});const C=f/y;n=(o*y+n)*(i?1-C:C);const A={[g]:i?y:0};m&&(t.css(e,p,y-f+$),A[p]=i?$:y+$),!m^"reveal"===h&&(t.css(I,p,-y+f),t.Transition.start(I,{[p]:i?0:-y},n,r));try{await t.Transition.start(e,A,n,r)}finally{t.css(e,x),t.unwrap(I.firstChild),i||a(e,!1)}}function h(e,i,s){t.Animation.cancel(e);const{animation:n,duration:o,_toggle:r}=s;return i?(r(e,!0),t.Animation.in(e,n[0],o,s.origin)):t.Animation.out(e,n[1]||n[0],o,s.origin).then((()=>r(e,!1)))}let d;function c(e){const i=t.on(e,"touchmove",(e=>{if(1!==e.targetTouches.length||t.matches(e.target,'input[type="range"'))return;let[{scrollHeight:i,clientHeight:s}]=t.scrollParents(e.target);s>=i&&e.cancelable&&e.preventDefault()}),{passive:!1});if(d)return i;d=!0;const{scrollingElement:s}=document;return t.css(s,{overflowY:CSS.supports("overflow","clip")?"clip":"hidden",touchAction:"none",paddingRight:t.width(window)-s.clientWidth||""}),()=>{d=!1,i(),t.css(s,{overflowY:"",touchAction:"",paddingRight:""})}}const u=[];var m={mixins:[{connected(){t.addClass(this.$el,this.$options.id)}},o,r],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean,role:String},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1,role:"dialog"},computed:{panel:({selPanel:e},i)=>t.$(e,i),transitionElement(){return this.panel},bgClose({bgClose:t}){return t&&this.panel}},connected(){t.attr(this.panel||this.$el,"role",this.role),this.overlay&&t.attr(this.panel||this.$el,"aria-modal",!0)},beforeDisconnect(){t.includes(u,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return`${this.selClose},a[href*="#"]`},handler(e){const{current:i,defaultPrevented:s}=e,{hash:n}=i;!s&&n&&t.isSameSiteAnchor(i)&&!t.within(n,this.$el)&&t.$(n,document.body)?this.hide():t.matches(i,this.selClose)&&(e.preventDefault(),this.hide())}},{name:"toggle",self:!0,handler(e){e.defaultPrevented||(e.preventDefault(),this.isToggled()===t.includes(u,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(e){if(t.includes(u,this))return!1;!this.stack&&u.length?(Promise.all(u.map((t=>t.hide()))).then(this.show),e.preventDefault()):u.push(this)}},{name:"show",self:!0,handler(){this.stack&&t.css(this.$el,"zIndex",t.toFloat(t.css(this.$el,"zIndex"))+u.length);const e=[this.overlay&&(i=this,t.on(document,"focusin",(e=>{t.last(u)!==i||t.within(e.target,i.$el)||i.$el.focus()}))),this.overlay&&c(this.$el),this.bgClose&&p(this),this.escClose&&v(this)];var i;t.once(this.$el,"hidden",(()=>e.forEach((t=>t&&t()))),{self:!0}),t.addClass(document.documentElement,this.clsPage)}},{name:"shown",self:!0,handler(){t.isFocusable(this.$el)||t.attr(this.$el,"tabindex","-1"),t.matches(this.$el,":focus-within")||this.$el.focus()}},{name:"hidden",self:!0,handler(){t.includes(u,this)&&u.splice(u.indexOf(this),1),t.css(this.$el,"zIndex",""),u.some((t=>t.clsPage===this.clsPage))||t.removeClass(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&t.parent(this.$el)!==this.container?(t.append(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,g)},hide(){return this.toggleElement(this.$el,!1,g)}}};function g(e,i,{transitionElement:s,_toggle:n}){return new Promise(((o,r)=>t.once(e,"show hide",(()=>{var a;null==(a=e._reject)||a.call(e),e._reject=r,n(e,i);const l=t.once(s,"transitionstart",(()=>{t.once(s,"transitionend transitioncancel",o,{self:!0}),clearTimeout(h)}),{self:!0}),h=setTimeout((()=>{l(),o()}),(d=t.css(s,"transitionDuration"))?t.endsWith(d,"ms")?t.toFloat(d):1e3*t.toFloat(d):0);var d})))).then((()=>delete e._reject))}function p(e){return t.on(document,t.pointerDown,(({target:i})=>{t.last(u)!==e||e.overlay&&!t.within(i,e.$el)||t.within(i,e.panel)||t.once(document,`${t.pointerUp} ${t.pointerCancel} scroll`,(({defaultPrevented:s,type:n,target:o})=>{s||n!==t.pointerUp||i!==o||e.hide()}),!0)}))}function v(e){return t.on(document,"keydown",(i=>{27===i.keyCode&&t.last(u)===e&&e.hide()}))}function f(e,i,s){t.trigger(e,t.createEvent(i,!1,!1,s))}var b={props:{i18n:Object},data:{i18n:null},methods:{t(t,...e){var i,s,n;let o=0;return(null==(n=(null==(i=this.i18n)?void 0:i[t])||(null==(s=this.$options.i18n)?void 0:s[t]))?void 0:n.replace(/%s/g,(()=>e[o++]||"")))||""}}};function x(e,i=e.$el,s=""){if(i.id)return i.id;let n=`${e.$options.id}-${e._uid}${s}`;return t.$(`#${n}`)&&(n=x(e,i,`${s}-2`)),n}var w={i18n:{next:"Next slide",previous:"Previous slide",slideX:"Slide %s",slideLabel:"%s of %s",role:"String"},data:{selNav:!1,role:"region"},computed:{nav:({selNav:e},i)=>t.$(e,i),navChildren(){return t.children(this.nav)},selNavItem:({attrItem:t})=>`[${t}],[data-${t}]`,navItems(e,i){return t.$$(this.selNavItem,i)}},watch:{nav(e,i){t.attr(e,"role","tablist"),i&&this.$emit()},list(e){t.attr(e,"role","presentation")},navChildren(e){t.attr(e,"role","presentation")},navItems(e){for(const i of e){const e=t.data(i,this.attrItem),s=t.$("a,button",i)||i;let n,o=null;if(t.isNumeric(e)){const i=t.toNumber(e),r=this.slides[i];r&&(r.id||(r.id=x(this,r,`-item-${e}`)),o=r.id),n=this.t("slideX",t.toFloat(e)+1),t.attr(s,"role","tab")}else this.list&&(this.list.id||(this.list.id=x(this,this.list,"-items")),o=this.list.id),n=this.t(e);t.attr(s,{"aria-controls":o,"aria-label":t.attr(s,"aria-label")||n})}},slides(e){e.forEach(((e,i)=>t.attr(e,{role:this.nav?"tabpanel":"group","aria-label":this.t("slideLabel",i+1,this.length),"aria-roledescription":this.nav?null:"slide"})))},length(e){const i=this.navChildren.length;if(this.nav&&e!==i){t.empty(this.nav);for(let i=0;i<e;i++)t.append(this.nav,`<li ${this.attrItem}="${i}"><a href></a></li>`)}}},connected(){t.attr(this.$el,{role:this.role,ariaRoleDescription:"carousel"})},update:[{write(){this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]}],events:[{name:"click keydown",delegate(){return this.selNavItem},handler(e){!t.closest(e.target,"a,button")||"click"!==e.type&&32!==e.keyCode||(e.preventDefault(),this.show(t.data(e.current,this.attrItem)))}},{name:"itemshow",handler:"updateNav"},{name:"keydown",delegate(){return this.selNavItem},handler(e){const{current:i,keyCode:s}=e,n=t.data(i,this.attrItem);if(!t.isNumeric(n))return;let o=36===s?0:35===s?"last":37===s?"previous":39===s?"next":-1;~o&&(e.preventDefault(),this.show(o))}}],methods:{updateNav(){const e=this.getValidIndex();let i,s;for(const n of this.navItems){const o=t.data(n,this.attrItem),r=t.$("a,button",n)||n;if(t.isNumeric(o)){const a=t.toNumber(o)===e;t.toggleClass(n,this.clsActive,a),t.attr(r,{"aria-selected":a,tabindex:a?null:-1}),a&&(s=r),i=i||t.matches(r,":focus")}else t.toggleClass(n,"uk-invisible",this.finite&&("previous"===o&&0===e||"next"===o&&e>=this.maxIndex));i&&s&&s.focus()}}}};const $={passive:!1,capture:!0},k={passive:!0,capture:!0},y="touchmove mousemove",I="touchend touchcancel mouseup click input scroll";var C,A={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const e of["start","move","end"]){const i=this[e];this[e]=e=>{const s=t.getEventPos(e).x*(t.isRtl?-1:1);this.prevPos=s===this.pos?this.prevPos:this.pos,this.pos=s,i(e)}}},events:[{name:"touchstart mousedown",passive:!0,delegate(){return`${this.selList} > *`},handler(e){var i;!this.draggable||!t.isTouch(e)&&(i=e.target,"none"!==t.css(i,"userSelect")&&t.toArray(i.childNodes).some((t=>3===t.nodeType&&t.textContent.trim())))||t.closest(e.target,t.selInput)||e.button>0||this.length<2||this.start(e)}},{name:"dragstart",handler(t){t.preventDefault()}},{name:y,el(){return this.list},handler:t.noop,...$}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,t.on(document,y,this.move,$),t.on(document,I,this.end,k),t.css(this.list,"userSelect","none")},move(e){const i=this.pos-this.drag;if(0===i||this.prevPos===this.pos||!this.dragging&&Math.abs(i)<this.threshold)return;t.css(this.list,"pointerEvents","none"),e.cancelable&&e.preventDefault(),this.dragging=!0,this.dir=i<0?1:-1;const{slides:s}=this;let{prevIndex:n}=this,o=Math.abs(i),r=this.getIndex(n+this.dir,n),a=this._getDistance(n,r)||s[n].offsetWidth;for(;r!==n&&o>a;)this.drag-=a*this.dir,n=r,o-=a,r=this.getIndex(n+this.dir,n),a=this._getDistance(n,r)||s[n].offsetWidth;this.percent=o/a;const l=s[n],h=s[r],d=this.index!==r,c=n===r;let u;[this.index,this.prevIndex].filter((e=>!t.includes([r,n],e))).forEach((e=>{t.trigger(s[e],"itemhidden",[this]),c&&(u=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||u)&&t.trigger(s[this.index],"itemshown",[this]),d&&(this.prevIndex=n,this.index=r,!c&&t.trigger(l,"beforeitemhide",[this]),t.trigger(h,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),l,!c&&h),d&&(!c&&t.trigger(l,"itemhide",[this]),t.trigger(h,"itemshow",[this]))},end(){if(t.off(document,y,this.move,$),t.off(document,I,this.end,k),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null;else{const e=(t.isRtl?this.dir*(t.isRtl?1:-1):this.dir)<0==this.prevPos>this.pos;this.index=e?this.index:this.prevIndex,e&&(this.percent=1-this.percent),this.show(this.dir>0&&!e||this.dir<0&&e?"next":"previous",!0)}t.css(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},T={mixins:[{props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){t.attr(this.list,"aria-live",this.autoplay?"off":"polite"),this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){t.attr(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>{this.stack.length||this.draggable&&t.matches(this.$el,":focus-within")||this.pauseOnHover&&t.matches(this.$el,":hover")||this.show("next")}),this.autoplayInterval)},stopAutoplay(){clearInterval(this.interval)}}},A,w,b],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){t.removeClass(this.slides,this.clsActive)},computed:{duration:({velocity:t},e)=>e.offsetWidth/t*.5+300,list:({selList:e},i)=>t.$(e,i),maxIndex(){return this.length-1},slides(){return t.children(this.list)},length(){return this.slides.length}},watch:{slides(t,e){e&&this.$emit()}},observe:(C=t.observeResize,{observe:C,handler(){this.$emit("resize")}}),methods:{show(e,i=!1){var s;if(this.dragging||!this.length)return;const{stack:n}=this,o=i?0:n.length,r=()=>{n.splice(o,1),n.length&&this.show(n.shift(),!0)};if(n[i?"unshift":"push"](e),!i&&n.length>1)return void(2===n.length&&(null==(s=this._transitioner)||s.forward(Math.min(this.duration,200))));const a=this.getIndex(this.index),l=t.hasClass(this.slides,this.clsActive)&&this.slides[a],h=this.getIndex(e,this.index),d=this.slides[h];if(l===d)return void r();if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(e,a),this.prevIndex=a,this.index=h,l&&!t.trigger(l,"beforeitemhide",[this])||!t.trigger(d,"beforeitemshow",[this,l]))return this.index=this.prevIndex,void r();const c=this._show(l,d,i).then((()=>{l&&t.trigger(l,"itemhidden",[this]),t.trigger(d,"itemshown",[this]),n.shift(),this._transitioner=null,requestAnimationFrame((()=>n.length&&this.show(n.shift(),!0)))}));return l&&t.trigger(l,"itemhide",[this]),t.trigger(d,"itemshow",[this]),c},getIndex(e=this.index,i=this.index){return t.clamp(t.getIndex(e,this.slides,i,this.finite),0,Math.max(0,this.maxIndex))},getValidIndex(t=this.index,e=this.prevIndex){return this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve();const{length:s}=this.stack;return this._transitioner[s>1?"forward":"show"](s>1?Math.min(this.duration,75+75/(s-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t,e=this.prevIndex,i=this.index){const s=this._getTransitioner(e!==i&&e,i);return s.translate(t),s},_getTransitioner(e=this.prevIndex,i=this.index,s=this.dir||1,n=this.transitionOptions){return new this.Transitioner(t.isNumber(e)?this.slides[e]:e,t.isNumber(i)?this.slides[i]:i,s*(t.isRtl?-1:1),n)}}},_={mixins:[T],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:e,Transitioner:function(e,i,s,{animation:n,easing:o}){const{percent:r,translate:a,show:l=t.noop}=n,h=l(s),d=new t.Deferred;return{dir:s,show(n,r=0,a){const l=a?"linear":o;return n-=Math.round(n*t.clamp(r,-1,1)),this.translate(r),f(i,"itemin",{percent:r,duration:n,timing:l,dir:s}),f(e,"itemout",{percent:1-r,duration:n,timing:l,dir:s}),Promise.all([t.Transition.start(i,h[1],n,l),t.Transition.start(e,h[0],n,l)]).then((()=>{this.reset(),d.resolve()}),t.noop),d.promise},cancel(){t.Transition.cancel([i,e])},reset(){for(const s in h[0])t.css([i,e],s,"")},forward(s,n=this.percent()){return t.Transition.cancel([i,e]),this.show(s,n,!0)},translate(n){this.reset();const o=a(n,s);t.css(i,o[1]),t.css(e,o[0]),f(i,"itemtranslatein",{percent:n,dir:s}),f(e,"itemtranslateout",{percent:1-n,dir:s})},percent:()=>r(e||i,i,s),getDistance:()=>null==e?void 0:e.offsetWidth}}},computed:{animation:({animation:t,Animations:e})=>({...e[t]||e.slide,name:t}),transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow({target:e}){t.addClass(e,this.clsActive)},itemshown({target:e}){t.addClass(e,this.clsActivated)},itemhidden({target:e}){t.removeClass(e,this.clsActive,this.clsActivated)}}},P={mixins:[m,_],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:n,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const e=t.$(this.template),i=t.$(this.selList,e);this.items.forEach((()=>t.append(i,"<li>")));const s=t.$("[uk-close]",e),n=this.t("close");s&&n&&(s.dataset.i18n=JSON.stringify({label:n})),this.$mount(t.append(this.container,e))},computed:{caption:({selCaption:e},i)=>t.$(e,i)},events:[{name:`${t.pointerMove} ${t.pointerDown} keydown`,handler:"showControls"},{name:"click",self:!0,delegate(){return`${this.selList} > *`},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),t.removeClass(this.slides,this.clsActive),t.Transition.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler({keyCode:t}){if(!this.isToggled(this.$el)||!this.draggable)return;let e=-1;37===t?e="previous":39===t?e="next":36===t?e=0:35===t&&(e="last"),~e&&this.show(e)}},{name:"beforeitemshow",handler(e){this.isToggled()||(this.draggable=!1,e.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=n.scale,t.removeClass(e.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){t.html(this.caption,this.getItem().caption||"");for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(e,i){const{source:s,type:n,alt:o="",poster:r,attrs:a={}}=i;if(this.setItem(i,"<span uk-spinner></span>"),!s)return;let l;const h={allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":`${this.videoAutoplay}`};if("image"===n||s.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)){const e=E("img",{src:s,alt:o,...a});t.on(e,"load",(()=>this.setItem(i,e))),t.on(e,"error",(()=>this.setError(i)))}else if("video"===n||s.match(/\.(mp4|webm|ogv)($|\?)/i)){const e=E("video",{src:s,poster:r,controls:"",playsinline:"","uk-video":`${this.videoAutoplay}`,...a});t.on(e,"loadedmetadata",(()=>this.setItem(i,e))),t.on(e,"error",(()=>this.setError(i)))}else if("iframe"===n||s.match(/\.(html|php)($|\?)/i))this.setItem(i,E("iframe",{src:s,allowfullscreen:"",class:"uk-lightbox-iframe",...a}));else if(l=s.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(i,E("iframe",{src:`https://www.youtube${l[1]||""}.com/embed/${l[2]}${l[3]?`?${l[3]}`:""}`,width:1920,height:1080,...h,...a}));else if(l=s.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:e}=await(await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(s)}`,{credentials:"omit"})).json();this.setItem(i,E("iframe",{src:`https://player.vimeo.com/video/${l[1]}${l[2]?`?${l[2]}`:""}`,width:e,height:t,...h,...a}))}catch(t){this.setError(i)}}}],methods:{loadItem(e=this.index){const i=this.getItem(e);this.getSlide(i).childElementCount||t.trigger(this.$el,"itemload",[i])},getItem(e=this.index){return this.items[t.getIndex(e,this.slides)]},setItem(e,i){t.trigger(this.$el,"itemloaded",[this,t.html(this.getSlide(e),i)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),t.addClass(this.$el,"uk-active","uk-transition-active")},hideControls(){t.removeClass(this.$el,"uk-active","uk-transition-active")}}};function E(e,i){const s=t.fragment(`<${e}>`);return t.attr(s,i),s}var N={install:function(e,i){e.lightboxPanel||e.component("lightboxPanel",P),t.assign(i.props,e.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:({toggle:e},i)=>t.$$(e,i)},watch:{toggles(e){this.hide();for(const i of e)t.isTag(i,"a")&&t.attr(i,"role","button")}},disconnected(){this.hide()},events:{name:"click",delegate(){return`${this.toggle}:not(.uk-disabled)`},handler(t){t.preventDefault(),this.show(t.current)}},methods:{show(e){const i=t.uniqueBy(this.toggles.map(S),"source");if(t.isElement(e)){const{source:s}=S(e);e=t.findIndex(i,(({source:t})=>s===t))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:i}),t.on(this.panel.$el,"hidden",(()=>this.panel=null)),this.panel.show(e)},hide(){var t;return null==(t=this.panel)?void 0:t.hide()}}};function S(e){const i={};for(const s of["href","caption","type","poster","alt","attrs"])i["href"===s?"source":s]=t.data(e,s);return i.attrs=function(e,i=[]){try{return e?t.startsWith(e,"{")?JSON.parse(e):i.length&&!t.includes(e,":")?{[i[0]]:e}:e.split(";").reduce(((e,i)=>{const[s,n]=i.split(/:(.*)/);return s&&!t.isUndefined(n)&&(e[s.trim()]=n.trim()),e}),{}):{}}catch(t){return{}}}(i.attrs),i}return"undefined"!=typeof window&&window.UIkit&&window.UIkit.component("lightbox",N),N}));