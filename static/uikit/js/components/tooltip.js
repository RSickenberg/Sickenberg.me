/*! For license information please see tooltip.js.LICENSE.txt */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("uikit-util")):"function"==typeof define&&define.amd?define("uikittooltip",["uikit-util"],i):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitTooltip=i(t.UIkit.util)}(this,(function(t){"use strict";function i(i,s,e){let{_toggle:o}=e;return t.Animation.cancel(i),t.Transition.cancel(i),o(i,s)}async function s(i,s,e){var o;let{animation:n,duration:l,velocity:r,transition:h,_toggle:a}=e;const[d="reveal",c="top"]=(null==(o=n[0])?void 0:o.split("-"))||[],f=[["left","right"],["top","bottom"]],p=f[t.includes(f[0],c)?0:1],u=p[1]===c,g=["width","height"][f.indexOf(p)],m="margin-"+p[0],w="margin-"+c;let b=t.dimensions(i)[g];const v=t.Transition.inProgress(i);await t.Transition.cancel(i),s&&a(i,!0);const y=Object.fromEntries(["padding","border","width","height","minWidth","minHeight","overflowY","overflowX",m,w].map((t=>[t,i.style[t]]))),T=t.dimensions(i),k=t.toFloat(t.css(i,m)),x=t.toFloat(t.css(i,w)),$=T[g]+x;v||s||(b+=x);const[P]=t.wrapInner(i,"<div>");t.css(P,{boxSizing:"border-box",height:T.height,width:T.width,...t.css(i,["overflow","padding","borderTop","borderRight","borderBottom","borderLeft","borderImage",w])}),t.css(i,{padding:0,border:0,minWidth:0,minHeight:0,[w]:0,width:T.width,height:T.height,overflow:"hidden",[g]:b});const C=b/$;l=(r*$+l)*(s?1-C:C);const _={[g]:s?$:0};u&&(t.css(i,m,$-b+k),_[m]=s?k:$+k),!u^"reveal"===d&&(t.css(P,m,-$+b),t.Transition.start(P,{[m]:s?0:-$},l,h));try{await t.Transition.start(i,_,l,h)}finally{t.css(i,y),t.unwrap(P.firstChild),s||a(i,!1)}}function e(i,s,e){t.Animation.cancel(i);const{animation:o,duration:n,_toggle:l}=e;return s?(l(i,!0),t.Animation.in(i,o[0],n,e.origin)):t.Animation.out(i,o[1]||o[0],n,e.origin).then((()=>l(i,!1)))}var o={mixins:[{props:{container:Boolean},data:{container:!0},computed:{container(i){let{container:s}=i;return!0===s&&this.$container||s&&t.$(s)}}},{props:{cls:Boolean,animation:"list",duration:Number,velocity:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,velocity:.2,origin:!1,transition:"ease",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave"},computed:{hasAnimation(t){let{animation:i}=t;return!!i[0]},hasTransition(i){let{animation:s}=i;return["slide","reveal"].some((i=>t.startsWith(s[0],i)))}},methods:{toggleElement(o,n,l){return new Promise((r=>Promise.all(t.toNodes(o).map((o=>{const r=t.isBoolean(n)?n:!this.isToggled(o);if(!t.trigger(o,"before"+(r?"show":"hide"),[this]))return Promise.reject();const h=(t.isFunction(l)?l:!1!==l&&this.hasAnimation?this.hasTransition?s:e:i)(o,r,this),a=r?this.clsEnter:this.clsLeave;t.addClass(o,a),t.trigger(o,r?"show":"hide",[this]);const d=()=>{t.removeClass(o,a),t.trigger(o,r?"shown":"hidden",[this])};return h?h.then(d,(()=>(t.removeClass(o,a),Promise.reject()))):d()}))).then(r,t.noop)))},isToggled(i){return void 0===i&&(i=this.$el),[i]=t.toNodes(i),!!t.hasClass(i,this.clsEnter)||!t.hasClass(i,this.clsLeave)&&(this.cls?t.hasClass(i,this.cls.split(" ")[0]):t.isVisible(i))},_toggle(i,s){if(!i)return;let e;s=Boolean(s),this.cls?(e=t.includes(this.cls," ")||s!==t.hasClass(i,this.cls),e&&t.toggleClass(i,this.cls,t.includes(this.cls," ")?void 0:s)):(e=s===i.hidden,e&&(i.hidden=!s)),t.$$("[autofocus]",i).some((i=>t.isVisible(i)?i.focus()||!0:i.blur())),e&&t.trigger(i,"toggled",[s,this])}}},{props:{pos:String,offset:null,flip:Boolean,shift:Boolean,inset:Boolean},data:{pos:"bottom-"+(t.isRtl?"right":"left"),offset:!1,flip:!0,shift:!0,inset:!1},connected(){this.pos=this.$props.pos.split("-").concat("center").slice(0,2),[this.dir,this.align]=this.pos,this.axis=t.includes(["top","bottom"],this.dir)?"y":"x"},methods:{positionAt(i,s,e){let o=[this.getPositionOffset(i),this.getShiftOffset(i)];const n=[this.flip&&"flip",this.shift&&"shift"],l={element:[this.inset?this.dir:t.flipPosition(this.dir),this.align],target:[this.dir,this.align]};if("y"===this.axis){for(const t in l)l[t].reverse();o.reverse(),n.reverse()}const[r]=t.scrollParents(i,/auto|scroll/),{scrollTop:h,scrollLeft:a}=r,d=t.dimensions(i);t.css(i,{top:-d.height,left:-d.width}),t.positionAt(i,s,{attach:l,offset:o,boundary:e,placement:n,viewportOffset:this.getViewportOffset(i)}),r.scrollTop=h,r.scrollLeft=a},getPositionOffset(i){return t.toPx(!1===this.offset?t.css(i,"--uk-position-offset"):this.offset,"x"===this.axis?"width":"height",i)*(t.includes(["left","top"],this.dir)?-1:1)*(this.inset?-1:1)},getShiftOffset(i){return"center"===this.align?0:t.toPx(t.css(i,"--uk-position-shift-offset"),"y"===this.axis?"width":"height",i)*(t.includes(["left","top"],this.align)?1:-1)},getViewportOffset:i=>t.toPx(t.css(i,"--uk-position-viewport-offset"))}}],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active"},beforeConnect(){var i;this.id="uk-tooltip-"+this._uid,this._hasTitle=t.hasAttr(this.$el,"title"),t.attr(this.$el,{title:"","aria-describedby":this.id}),i=this.$el,t.isFocusable(i)||t.attr(i,"tabindex","0")},disconnected(){this.hide(),t.attr(this.$el,"title")||t.attr(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){!this.isToggled(this.tooltip||null)&&this.title&&(this._unbind=t.once(document,"keydown "+t.pointerDown,this.hide,!1,(i=>i.type===t.pointerDown&&!t.within(i.target,this.$el)||"keydown"===i.type&&27===i.keyCode)),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){t.matches(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&(await this.toggleElement(this.tooltip,!1,!1),t.remove(this.tooltip),this.tooltip=null,this._unbind()))},_show(){this.tooltip=t.append(this.container,'<div id="'+this.id+'" class="uk-'+this.$options.name+'" role="tooltip"> <div class="uk-'+this.$options.name+'-inner">'+this.title+"</div> </div>"),t.on(this.tooltip,"toggled",((i,s)=>{if(!s)return;this.positionAt(this.tooltip,this.$el);const[e,o]=function(i,s,e){let[o,n]=e;const l=t.offset(i),r=t.offset(s),h=[["left","right"],["top","bottom"]];for(const t of h){if(l[t[0]]>=r[t[1]]){o=t[1];break}if(l[t[1]]<=r[t[0]]){o=t[0];break}}const a=t.includes(h[0],o)?h[1]:h[0];return n=l[a[0]]===r[a[0]]?a[0]:l[a[1]]===r[a[1]]?a[1]:"center",[o,n]}(this.tooltip,this.$el,this.pos);this.origin="y"===this.axis?t.flipPosition(e)+"-"+o:o+"-"+t.flipPosition(e)})),this.toggleElement(this.tooltip,!0)}},events:{focus:"show",blur:"hide",[t.pointerEnter+" "+t.pointerLeave](i){t.isTouch(i)||this[i.type===t.pointerEnter?"show":"hide"]()},[t.pointerDown](i){t.isTouch(i)&&this.show()}}};return"undefined"!=typeof window&&window.UIkit&&window.UIkit.component("tooltip",o),o}));