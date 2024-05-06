var $timeline=function(m){"use strict";var jt=Object.defineProperty;var zt=(m,M,w)=>M in m?jt(m,M,{enumerable:!0,configurable:!0,writable:!0,value:w}):m[M]=w;var et=(m,M,w)=>(zt(m,typeof M!="symbol"?M+"":M,w),w),Dt=(m,M,w)=>{if(!M.has(m))throw TypeError("Cannot "+w)};var u=(m,M,w)=>(Dt(m,M,"read from private field"),w?w.call(m):M.get(m)),O=(m,M,w)=>{if(M.has(m))throw TypeError("Cannot add the same private member more than once");M instanceof WeakSet?M.add(m):M.set(m,w)},k=(m,M,w,it)=>(Dt(m,M,"write to private field"),it?it.call(m,w):M.set(m,w),w);var E=(m,M,w)=>(Dt(m,M,"access private method"),w);var R,_,P,T,N,U,nt,xt,rt,St,at,Ft,ot,Ct,ht,Ht,ct,Ot,G,Tt,q,gt,ut,Lt;function M(f){return{all:f=f||new Map,on:function(s,r){var n=f.get(s);n?n.push(r):f.set(s,[r])},off:function(s,r){var n=f.get(s);n&&(r?n.splice(n.indexOf(r)>>>0,1):f.set(s,[]))},emit:function(s,r){var n=f.get(s);n&&n.slice().map(function(l){l(r)}),(n=f.get("*"))&&n.slice().map(function(l){l(s,r)})}}}var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function it(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Yt={exports:{}};(function(f,s){(function(r,n){f.exports=n()})(w,function(){var r=1e3,n=6e4,l=36e5,$="millisecond",g="second",D="minute",p="hour",b="day",F="week",Y="month",C="quarter",A="year",j="date",lt="Invalid Date",vt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ft=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,pt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var i=["th","st","nd","rd"],t=o%100;return"["+o+(i[(t-20)%10]||i[t]||i[0])+"]"}},z=function(o,i,t){var a=String(o);return!a||a.length>=i?o:""+Array(i+1-a.length).join(t)+o},Q={s:z,z:function(o){var i=-o.utcOffset(),t=Math.abs(i),a=Math.floor(t/60),e=t%60;return(i<=0?"+":"-")+z(a,2,"0")+":"+z(e,2,"0")},m:function o(i,t){if(i.date()<t.date())return-o(t,i);var a=12*(t.year()-i.year())+(t.month()-i.month()),e=i.clone().add(a,Y),h=t-e<0,c=i.clone().add(a+(h?-1:1),Y);return+(-(a+(t-e)/(h?e-c:c-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:Y,y:A,w:F,d:b,D:j,h:p,m:D,s:g,ms:$,Q:C}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},I="en",Z={};Z[I]=pt;var wt="$isDayjsObject",Mt=function(o){return o instanceof mt||!(!o||!o[wt])},dt=function o(i,t,a){var e;if(!i)return I;if(typeof i=="string"){var h=i.toLowerCase();Z[h]&&(e=h),t&&(Z[h]=t,e=h);var c=i.split("-");if(!e&&c.length>1)return o(c[0])}else{var v=i.name;Z[v]=i,e=v}return!a&&e&&(I=e),e||!a&&I},x=function(o,i){if(Mt(o))return o.clone();var t=typeof i=="object"?i:{};return t.date=o,t.args=arguments,new mt(t)},d=Q;d.l=dt,d.i=Mt,d.w=function(o,i){return x(o,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var mt=function(){function o(t){this.$L=dt(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[wt]=!0}var i=o.prototype;return i.parse=function(t){this.$d=function(a){var e=a.date,h=a.utc;if(e===null)return new Date(NaN);if(d.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var c=e.match(vt);if(c){var v=c[2]-1||0,y=(c[7]||"0").substring(0,3);return h?new Date(Date.UTC(c[1],v,c[3]||1,c[4]||0,c[5]||0,c[6]||0,y)):new Date(c[1],v,c[3]||1,c[4]||0,c[5]||0,c[6]||0,y)}}return new Date(e)}(t),this.init()},i.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},i.$utils=function(){return d},i.isValid=function(){return this.$d.toString()!==lt},i.isSame=function(t,a){var e=x(t);return this.startOf(a)<=e&&e<=this.endOf(a)},i.isAfter=function(t,a){return x(t)<this.startOf(a)},i.isBefore=function(t,a){return this.endOf(a)<x(t)},i.$g=function(t,a,e){return d.u(t)?this[a]:this.set(e,t)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(t,a){var e=this,h=!!d.u(a)||a,c=d.p(t),v=function(J,L){var X=d.w(e.$u?Date.UTC(e.$y,L,J):new Date(e.$y,L,J),e);return h?X:X.endOf(b)},y=function(J,L){return d.w(e.toDate()[J].apply(e.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(L)),e)},S=this.$W,H=this.$M,W=this.$D,V="set"+(this.$u?"UTC":"");switch(c){case A:return h?v(1,0):v(31,11);case Y:return h?v(1,H):v(0,H+1);case F:var B=this.$locale().weekStart||0,K=(S<B?S+7:S)-B;return v(h?W-K:W+(6-K),H);case b:case j:return y(V+"Hours",0);case p:return y(V+"Minutes",1);case D:return y(V+"Seconds",2);case g:return y(V+"Milliseconds",3);default:return this.clone()}},i.endOf=function(t){return this.startOf(t,!1)},i.$set=function(t,a){var e,h=d.p(t),c="set"+(this.$u?"UTC":""),v=(e={},e[b]=c+"Date",e[j]=c+"Date",e[Y]=c+"Month",e[A]=c+"FullYear",e[p]=c+"Hours",e[D]=c+"Minutes",e[g]=c+"Seconds",e[$]=c+"Milliseconds",e)[h],y=h===b?this.$D+(a-this.$W):a;if(h===Y||h===A){var S=this.clone().set(j,1);S.$d[v](y),S.init(),this.$d=S.set(j,Math.min(this.$D,S.daysInMonth())).$d}else v&&this.$d[v](y);return this.init(),this},i.set=function(t,a){return this.clone().$set(t,a)},i.get=function(t){return this[d.p(t)]()},i.add=function(t,a){var e,h=this;t=Number(t);var c=d.p(a),v=function(H){var W=x(h);return d.w(W.date(W.date()+Math.round(H*t)),h)};if(c===Y)return this.set(Y,this.$M+t);if(c===A)return this.set(A,this.$y+t);if(c===b)return v(1);if(c===F)return v(7);var y=(e={},e[D]=n,e[p]=l,e[g]=r,e)[c]||1,S=this.$d.getTime()+t*y;return d.w(S,this)},i.subtract=function(t,a){return this.add(-1*t,a)},i.format=function(t){var a=this,e=this.$locale();if(!this.isValid())return e.invalidDate||lt;var h=t||"YYYY-MM-DDTHH:mm:ssZ",c=d.z(this),v=this.$H,y=this.$m,S=this.$M,H=e.weekdays,W=e.months,V=e.meridiem,B=function(L,X,tt,$t){return L&&(L[X]||L(a,h))||tt[X].slice(0,$t)},K=function(L){return d.s(v%12||12,L,"0")},J=V||function(L,X,tt){var $t=L<12?"AM":"PM";return tt?$t.toLowerCase():$t};return h.replace(ft,function(L,X){return X||function(tt){switch(tt){case"YY":return String(a.$y).slice(-2);case"YYYY":return d.s(a.$y,4,"0");case"M":return S+1;case"MM":return d.s(S+1,2,"0");case"MMM":return B(e.monthsShort,S,W,3);case"MMMM":return B(W,S);case"D":return a.$D;case"DD":return d.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return B(e.weekdaysMin,a.$W,H,2);case"ddd":return B(e.weekdaysShort,a.$W,H,3);case"dddd":return H[a.$W];case"H":return String(v);case"HH":return d.s(v,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return J(v,y,!0);case"A":return J(v,y,!1);case"m":return String(y);case"mm":return d.s(y,2,"0");case"s":return String(a.$s);case"ss":return d.s(a.$s,2,"0");case"SSS":return d.s(a.$ms,3,"0");case"Z":return c}return null}(L)||c.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(t,a,e){var h,c=this,v=d.p(a),y=x(t),S=(y.utcOffset()-this.utcOffset())*n,H=this-y,W=function(){return d.m(c,y)};switch(v){case A:h=W()/12;break;case Y:h=W();break;case C:h=W()/3;break;case F:h=(H-S)/6048e5;break;case b:h=(H-S)/864e5;break;case p:h=H/l;break;case D:h=H/n;break;case g:h=H/r;break;default:h=H}return e?h:d.a(h)},i.daysInMonth=function(){return this.endOf(Y).$D},i.$locale=function(){return Z[this.$L]},i.locale=function(t,a){if(!t)return this.$L;var e=this.clone(),h=dt(t,a,!0);return h&&(e.$L=h),e},i.clone=function(){return d.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},o}(),bt=mt.prototype;return x.prototype=bt,[["$ms",$],["$s",g],["$m",D],["$H",p],["$W",b],["$M",Y],["$y",A],["$D",j]].forEach(function(o){bt[o[1]]=function(i){return this.$g(i,o[0],o[1])}}),x.extend=function(o,i){return o.$i||(o(i,mt,x),o.$i=!0),x},x.locale=dt,x.isDayjs=Mt,x.unix=function(o){return x(1e3*o)},x.en=Z[I],x.Ls=Z,x.p={},x})})(Yt);var _t=Yt.exports;const Et=it(_t),st=(f,s="MM/DD HH:mm")=>Et(f).format(s),yt=(f,s)=>{let r,n=0;return(...l)=>{const $=Date.now(),g=$-n;!n||g>=s?(n=$,f.apply(void 0,l)):r||(r=setTimeout(()=>{n=$,f.apply(void 0,l),r=null},s-g))}},Wt=(f,s)=>{const r=document.createElement("canvas");r.width=r.height=1;const n=r.getContext("2d");n.fillStyle=f,n.fillRect(0,0,1,1);const l=n.getImageData(0,0,1,1).data;return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${s})`},kt=({xCenterPoint:f,cfg:s,timePerPixel:r,timeSpacing:n,currentTime:l,$canvas:$,screenScaleCount:g,scaleHeight:D,startTime:p,drawLine:b,drawText:F,drawArea:Y})=>{const C=({space:A,scaleTimeFormat:j,bgTimeFormat:lt,pointerTimeFormat:vt})=>{F({x:$.width-f/10,y:6,text:st(l,lt),fontSize:`${$.height-5}px`,align:"right",baseLine:"top",color:s.bgTextColor});const ft=p%n,pt=ft/r;for(let z=0;z<g;z++){const Q=z*s.scaleSpacing-pt-s.pointerWidth/2,I=p+z*n-ft;if(I%(n*A)===0){b({x:Q,y:D.long}),F({x:Q,y:$.height-D.long-5,text:st(I,j),baseLine:"bottom"});continue}b({x:Q,y:D.short})}b({x:f-s.pointerWidth/2,y:$.height,width:s.pointerWidth,color:s.pointerColor}),Y({startX:f-s.pointerDisplayWidth/2,startY:4,endX:f+s.pointerDisplayWidth/2,endY:4+s.pointerDisplayHeight,bgColor:s.pointerColor}),F({x:f,y:s.pointerDisplayHeight/2+5,text:st(l,vt),align:"center",baseLine:"middle"})};n<100?C({space:10,scaleTimeFormat:"mm:ss:SSS",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS"}):n<1e3?C({space:10,scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS"}):n<1e4?C({space:10,scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss"}):n<6e4?C({space:12,scaleTimeFormat:"HH:mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss"}):n<6e5?C({space:10,scaleTimeFormat:"HH:mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss"}):n<36e5?C({space:12,scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"MM/DD HH:mm:ss"}):n<864e5?C({space:12,scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"YYYY/MM/DD HH:mm"}):n<6048e5?C({space:10,scaleTimeFormat:"YYYY/MM/DD",bgTimeFormat:"YYYY",pointerTimeFormat:"YYYY/MM/DD"}):C({space:10,scaleTimeFormat:"YYYY/MM/DD",bgTimeFormat:"YYYY",pointerTimeFormat:"YYYY/MM/DD"})},At={fill:!0,width:1e3,height:60,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",scaleColor:"#ffffff",scaleSpacing:7,areaBgColor:"#ffffff55",pointerColor:"#00aeec",pointerWidth:3,pointerDisplayWidth:100,pointerDisplayHeight:14,fps:60,zoom:3,timeSpacingList:[10,100,1e3,1e4,6e4,6e5,36e5,864e5,6048e5]};class Pt{constructor(s,r){O(this,nt);O(this,rt);O(this,at);O(this,ot);O(this,ht);O(this,ct);O(this,G);O(this,q);O(this,ut);et(this,"$canvas");et(this,"ctx");et(this,"$canvasParent");et(this,"cfg");O(this,R,M());O(this,_,0);O(this,P,void 0);O(this,T,void 0);O(this,N,void 0);O(this,U,!1);if(!s)throw new Error("canvas Element Or Element ID is required!");typeof s=="string"?this.$canvas=document.querySelector(s):this.$canvas=s,this.ctx=this.$canvas.getContext("2d"),this.cfg={...At,...r},r!=null&&r.pointColor&&(this.cfg.pointerColor=r.pointColor),r!=null&&r.pointWidth&&(this.cfg.pointerWidth=r.pointWidth);const{fill:n,width:l,height:$,zoom:g,timeSpacingList:D,scaleHeight:p,textColor:b,bgTextColor:F}=this.cfg;if(F||(this.cfg.bgTextColor=Wt(b,.18)),g<0||g>=D.length||g%1!==0)throw new Error(`zoom must be 0 ~ ${D.length-1}, and must be an integer`);if(n){const Y=this.$canvas.parentElement;this.$canvasParent=Y,this.$canvas.width=Y.clientWidth,this.$canvas.height=Y.clientHeight,new ResizeObserver(yt(E(this,at,Ft).bind(this),200)).observe(Y)}else this.$canvas.width=l,this.$canvas.height=$;k(this,T,D[g]),p!=null&&p.long&&(p!=null&&p.short)?k(this,N,p):k(this,N,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw(),this.$canvas.addEventListener("wheel",E(this,rt,St).bind(this),{passive:!1}),this.$canvas.addEventListener("mousedown",E(this,nt,xt).bind(this))}draw({currentTime:s,areas:r,_privateFlag:n}={}){if(u(this,U)&&!n)return;k(this,_,s||Date.now()),k(this,P,r||[]);const l=Math.ceil(this.$canvas.width/this.cfg.scaleSpacing),$=l*u(this,T),g=u(this,_)-$/2,D=u(this,_)+$/2,p=this.$canvas.width/2,b=$/this.$canvas.width;E(this,ot,Ct).call(this),E(this,q,gt).call(this,{startX:0,startY:0,endX:this.$canvas.width,endY:this.$canvas.height,bgColor:this.cfg.bgColor}),u(this,P).forEach(F=>{const Y=F.startTime<=g?0:Math.round((F.startTime-g)/b),C=F.endTime>=D?this.$canvas.width:Math.round((F.endTime-g)/b);Y<this.$canvas.width&&C>0&&E(this,q,gt).call(this,{startX:Y,startY:0,endX:C,endY:this.$canvas.height,bgColor:F.bgColor||this.cfg.areaBgColor})}),kt.bind(this)({xCenterPoint:p,screenScaleCount:l,startTime:g,timePerPixel:b,scaleHeight:u(this,N),timeSpacing:u(this,T),currentTime:u(this,_),$canvas:this.$canvas,cfg:this.cfg,drawLine:E(this,ct,Ot).bind(this),drawText:E(this,G,Tt).bind(this),drawArea:E(this,q,gt).bind(this)}),E(this,ht,Ht).call(this)}getCurrentTime(){return u(this,_)}on(s,r){u(this,R).on(s,r)}off(s,r){u(this,R).off(s,r)}}return R=new WeakMap,_=new WeakMap,P=new WeakMap,T=new WeakMap,N=new WeakMap,U=new WeakMap,nt=new WeakSet,xt=function(s){k(this,U,!0);let r=0,n=u(this,_);const l=yt(({offsetX:D})=>{if(!u(this,U))return;const p=D-s.offsetX;n=Math.round(u(this,_)-u(this,T)/this.cfg.scaleSpacing*(p-r)),r=p,this.draw({currentTime:n,areas:u(this,P),_privateFlag:!0})},1e3/this.cfg.fps),$=({offsetX:D,offsetY:p})=>{(D<3||D>this.$canvas.width-3||p<3||p>this.$canvas.height-3)&&(this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",$))},g=()=>{this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",$),document.removeEventListener("mouseup",g),k(this,U,!1),E(this,ut,Lt).call(this,"dragged",n)};this.$canvas.addEventListener("mousemove",l),this.$canvas.addEventListener("mousemove",$),document.addEventListener("mouseup",g)},rt=new WeakSet,St=function(s){s.preventDefault();const r=this.cfg.timeSpacingList.findIndex(n=>n===u(this,T));s.deltaY<0&&r>0?(k(this,T,this.cfg.timeSpacingList[r-1]),this.draw({currentTime:u(this,_),areas:u(this,P),_privateFlag:!0})):s.deltaY>0&&r<this.cfg.timeSpacingList.length-1&&(k(this,T,this.cfg.timeSpacingList[r+1]),this.draw({currentTime:u(this,_),areas:u(this,P),_privateFlag:!0}))},at=new WeakSet,Ft=function(){this.$canvasParent&&(this.$canvas.width=this.$canvasParent.clientWidth,this.$canvas.height=this.$canvasParent.clientHeight,this.cfg.scaleHeight||k(this,N,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw({currentTime:u(this,_),areas:u(this,P)}))},ot=new WeakSet,Ct=function(){this.ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height)},ht=new WeakSet,Ht=function(){const s=()=>u(this,T)<1e3?`${u(this,T)}ms`:u(this,T)<6e4?`${Math.round(u(this,T)/100)/10}sec`:u(this,T)<36e5?`${Math.round(u(this,T)/100/60)/10}min`:u(this,T)<864e5?`${Math.round(u(this,T)/100/60/60)/10}hours`:u(this,T)<6048e5?`${Math.round(u(this,T)/100/60/60/24)/10}days`:`${Math.round(u(this,T)/100/60/60/24/7)/10}weeks`;E(this,G,Tt).call(this,{x:this.cfg.scaleSpacing+12,y:9,text:s(),align:"left",baseLine:"middle"}),this.ctx.beginPath(),this.ctx.moveTo(5,6),this.ctx.lineTo(5,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,6),this.ctx.strokeStyle=this.cfg.scaleColor,this.ctx.lineWidth=1.5,this.ctx.stroke()},ct=new WeakSet,Ot=function({x:s,y:r,width:n=1,color:l=this.cfg.scaleColor}){this.ctx.beginPath(),this.ctx.moveTo(s,this.$canvas.height),this.ctx.lineTo(s,this.$canvas.height-r),this.ctx.closePath(),this.ctx.strokeStyle=l,this.ctx.lineWidth=n,this.ctx.stroke()},G=new WeakSet,Tt=function({x:s,y:r,text:n,color:l=this.cfg.textColor,fontSize:$="11px",align:g="center",baseLine:D="alphabetic"}){this.ctx.beginPath(),this.ctx.font=`${$} Arial`,this.ctx.fillStyle=l,this.ctx.textAlign=g,this.ctx.textBaseline=D,this.ctx.fillText(n,s,r)},q=new WeakSet,gt=function({startX:s,startY:r,endX:n,endY:l,bgColor:$}){this.ctx.beginPath(),this.ctx.rect(s,r,n-s,l-r),this.ctx.fillStyle=$,this.ctx.fill()},ut=new WeakSet,Lt=function(...s){u(this,R).emit(...s)},m.default=Pt,m.format=st,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),m}({});
