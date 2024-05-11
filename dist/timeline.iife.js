var $timeline=function(d){"use strict";var kt=Object.defineProperty;var At=(d,M,w)=>M in d?kt(d,M,{enumerable:!0,configurable:!0,writable:!0,value:w}):d[M]=w;var et=(d,M,w)=>(At(d,typeof M!="symbol"?M+"":M,w),w),Mt=(d,M,w)=>{if(!M.has(d))throw TypeError("Cannot "+w)};var h=(d,M,w)=>(Mt(d,M,"read from private field"),w?w.call(d):M.get(d)),H=(d,M,w)=>{if(M.has(d))throw TypeError("Cannot add the same private member more than once");M instanceof WeakSet?M.add(d):M.set(d,w)},W=(d,M,w,it)=>(Mt(d,M,"write to private field"),it?it.call(d,w):M.set(d,w),w);var B=(d,M,w)=>(Mt(d,M,"access private method"),w);var J,_,A,D,X,N,nt,wt,rt,St,at,Yt,ot,xt,ht,Ft,ct,G,R,ut,Ct;function M(m){return{all:m=m||new Map,on:function(s,n){var a=m.get(s);a?a.push(n):m.set(s,[n])},off:function(s,n){var a=m.get(s);a&&(n?a.splice(a.indexOf(n)>>>0,1):m.set(s,[]))},emit:function(s,n){var a=m.get(s);a&&a.slice().map(function(l){l(n)}),(a=m.get("*"))&&a.slice().map(function(l){l(s,n)})}}}var w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function it(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var Tt={exports:{}};(function(m,s){(function(n,a){m.exports=a()})(w,function(){var n=1e3,a=6e4,l=36e5,g="millisecond",$="second",T="minute",p="hour",S="day",F="week",y="month",j="quarter",O="year",z="date",lt="Invalid Date",$t=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,vt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,mt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var i=["th","st","nd","rd"],t=o%100;return"["+o+(i[(t-20)%10]||i[t]||i[0])+"]"}},Q=function(o,i,t){var r=String(o);return!r||r.length>=i?o:""+Array(i+1-r.length).join(t)+o},q={s:Q,z:function(o){var i=-o.utcOffset(),t=Math.abs(i),r=Math.floor(t/60),e=t%60;return(i<=0?"+":"-")+Q(r,2,"0")+":"+Q(e,2,"0")},m:function o(i,t){if(i.date()<t.date())return-o(t,i);var r=12*(t.year()-i.year())+(t.month()-i.month()),e=i.clone().add(r,y),c=t-e<0,u=i.clone().add(r+(c?-1:1),y);return+(-(r+(t-e)/(c?e-u:u-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:y,y:O,w:F,d:S,D:z,h:p,m:T,s:$,ms:g,Q:j}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},P="en",k={};k[P]=mt;var yt="$isDayjsObject",pt=function(o){return o instanceof dt||!(!o||!o[yt])},ft=function o(i,t,r){var e;if(!i)return P;if(typeof i=="string"){var c=i.toLowerCase();k[c]&&(e=c),t&&(k[c]=t,e=c);var u=i.split("-");if(!e&&u.length>1)return o(u[0])}else{var v=i.name;k[v]=i,e=v}return!r&&e&&(P=e),e||!r&&P},Y=function(o,i){if(pt(o))return o.clone();var t=typeof i=="object"?i:{};return t.date=o,t.args=arguments,new dt(t)},f=q;f.l=ft,f.i=pt,f.w=function(o,i){return Y(o,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var dt=function(){function o(t){this.$L=ft(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[yt]=!0}var i=o.prototype;return i.parse=function(t){this.$d=function(r){var e=r.date,c=r.utc;if(e===null)return new Date(NaN);if(f.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match($t);if(u){var v=u[2]-1||0,b=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],v,u[3]||1,u[4]||0,u[5]||0,u[6]||0,b)):new Date(u[1],v,u[3]||1,u[4]||0,u[5]||0,u[6]||0,b)}}return new Date(e)}(t),this.init()},i.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},i.$utils=function(){return f},i.isValid=function(){return this.$d.toString()!==lt},i.isSame=function(t,r){var e=Y(t);return this.startOf(r)<=e&&e<=this.endOf(r)},i.isAfter=function(t,r){return Y(t)<this.startOf(r)},i.isBefore=function(t,r){return this.endOf(r)<Y(t)},i.$g=function(t,r,e){return f.u(t)?this[r]:this.set(e,t)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(t,r){var e=this,c=!!f.u(r)||r,u=f.p(t),v=function(Z,L){var I=f.w(e.$u?Date.UTC(e.$y,L,Z):new Date(e.$y,L,Z),e);return c?I:I.endOf(S)},b=function(Z,L){return f.w(e.toDate()[Z].apply(e.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(L)),e)},x=this.$W,C=this.$M,E=this.$D,V="set"+(this.$u?"UTC":"");switch(u){case O:return c?v(1,0):v(31,11);case y:return c?v(1,C):v(0,C+1);case F:var U=this.$locale().weekStart||0,K=(x<U?x+7:x)-U;return v(c?E-K:E+(6-K),C);case S:case z:return b(V+"Hours",0);case p:return b(V+"Minutes",1);case T:return b(V+"Seconds",2);case $:return b(V+"Milliseconds",3);default:return this.clone()}},i.endOf=function(t){return this.startOf(t,!1)},i.$set=function(t,r){var e,c=f.p(t),u="set"+(this.$u?"UTC":""),v=(e={},e[S]=u+"Date",e[z]=u+"Date",e[y]=u+"Month",e[O]=u+"FullYear",e[p]=u+"Hours",e[T]=u+"Minutes",e[$]=u+"Seconds",e[g]=u+"Milliseconds",e)[c],b=c===S?this.$D+(r-this.$W):r;if(c===y||c===O){var x=this.clone().set(z,1);x.$d[v](b),x.init(),this.$d=x.set(z,Math.min(this.$D,x.daysInMonth())).$d}else v&&this.$d[v](b);return this.init(),this},i.set=function(t,r){return this.clone().$set(t,r)},i.get=function(t){return this[f.p(t)]()},i.add=function(t,r){var e,c=this;t=Number(t);var u=f.p(r),v=function(C){var E=Y(c);return f.w(E.date(E.date()+Math.round(C*t)),c)};if(u===y)return this.set(y,this.$M+t);if(u===O)return this.set(O,this.$y+t);if(u===S)return v(1);if(u===F)return v(7);var b=(e={},e[T]=a,e[p]=l,e[$]=n,e)[u]||1,x=this.$d.getTime()+t*b;return f.w(x,this)},i.subtract=function(t,r){return this.add(-1*t,r)},i.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||lt;var c=t||"YYYY-MM-DDTHH:mm:ssZ",u=f.z(this),v=this.$H,b=this.$m,x=this.$M,C=e.weekdays,E=e.months,V=e.meridiem,U=function(L,I,tt,gt){return L&&(L[I]||L(r,c))||tt[I].slice(0,gt)},K=function(L){return f.s(v%12||12,L,"0")},Z=V||function(L,I,tt){var gt=L<12?"AM":"PM";return tt?gt.toLowerCase():gt};return c.replace(vt,function(L,I){return I||function(tt){switch(tt){case"YY":return String(r.$y).slice(-2);case"YYYY":return f.s(r.$y,4,"0");case"M":return x+1;case"MM":return f.s(x+1,2,"0");case"MMM":return U(e.monthsShort,x,E,3);case"MMMM":return U(E,x);case"D":return r.$D;case"DD":return f.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return U(e.weekdaysMin,r.$W,C,2);case"ddd":return U(e.weekdaysShort,r.$W,C,3);case"dddd":return C[r.$W];case"H":return String(v);case"HH":return f.s(v,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return Z(v,b,!0);case"A":return Z(v,b,!1);case"m":return String(b);case"mm":return f.s(b,2,"0");case"s":return String(r.$s);case"ss":return f.s(r.$s,2,"0");case"SSS":return f.s(r.$ms,3,"0");case"Z":return u}return null}(L)||u.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(t,r,e){var c,u=this,v=f.p(r),b=Y(t),x=(b.utcOffset()-this.utcOffset())*a,C=this-b,E=function(){return f.m(u,b)};switch(v){case O:c=E()/12;break;case y:c=E();break;case j:c=E()/3;break;case F:c=(C-x)/6048e5;break;case S:c=(C-x)/864e5;break;case p:c=C/l;break;case T:c=C/a;break;case $:c=C/n;break;default:c=C}return e?c:f.a(c)},i.daysInMonth=function(){return this.endOf(y).$D},i.$locale=function(){return k[this.$L]},i.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),c=ft(t,r,!0);return c&&(e.$L=c),e},i.clone=function(){return f.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},o}(),bt=dt.prototype;return Y.prototype=bt,[["$ms",g],["$s",$],["$m",T],["$H",p],["$W",S],["$M",y],["$y",O],["$D",z]].forEach(function(o){bt[o[1]]=function(i){return this.$g(i,o[0],o[1])}}),Y.extend=function(o,i){return o.$i||(o(i,dt,Y),o.$i=!0),Y},Y.locale=ft,Y.isDayjs=pt,Y.unix=function(o){return Y(1e3*o)},Y.en=k[P],Y.Ls=k,Y.p={},Y})})(Tt);var Ht=Tt.exports;const Ot=it(Ht),st=(m,s="MM/DD HH:mm")=>Ot(m).format(s),Dt=(m,s)=>{let n,a=0;return(...l)=>{const g=Date.now(),$=g-a;!a||$>=s?(a=g,m.apply(void 0,l)):n||(n=setTimeout(()=>{a=g,m.apply(void 0,l),n=null},s-$))}},Lt=(m,s)=>{const n=document.createElement("canvas");n.width=n.height=1;const a=n.getContext("2d");a.fillStyle=m,a.fillRect(0,0,1,1);const l=a.getImageData(0,0,1,1).data;return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${s})`},_t=({xCenterPoint:m,cfg:s,timePerPixel:n,timeSpacing:a,currentTime:l,$canvas:g,screenScaleCount:$,scaleHeight:T,startTime:p,drawLine:S,drawText:F,drawArea:y})=>{const j=({space:z,scaleTimeFormat:lt,bgTimeFormat:$t,pointerTimeFormat:vt})=>{F({x:g.width-m/10,y:6,text:st(l,$t),fontSize:`${g.height-5}px`,align:"right",baseLine:"top",color:s.bgTextColor});const mt=p%a,Q=mt/n;for(let q=0;q<$;q++){const P=q*s.scaleSpacing-Q-s.pointerWidth/2,k=p+q*a-mt;if(k%(a*z)===0){S({x:P,y:T.long}),F({x:P,y:g.height-T.long-5,text:st(k,lt),baseLine:"bottom"});continue}S({x:P,y:T.short})}S({x:m-s.pointerWidth/2,y:g.height,width:s.pointerWidth,color:s.pointerColor}),y({startX:m-s.pointerDisplayWidth/2,startY:4,endX:m+s.pointerDisplayWidth/2,endY:4+s.pointerDisplayHeight,bgColor:s.pointerColor}),F({x:m,y:s.pointerDisplayHeight/2+5,text:st(l,vt),align:"center",baseLine:"middle"})},O=s.thresholdsConfig[a];O&&j({space:O.space,scaleTimeFormat:O.scaleTimeFormat,bgTimeFormat:O.bgTimeFormat,pointerTimeFormat:O.pointerTimeFormat})},Et={fill:!0,width:1e3,height:60,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",fontFamily:"Arial",scaleColor:"#ffffff",scaleSpacing:7,areaBgColor:"#ffffff55",pointerColor:"#00aeec",pointerWidth:3,pointerDisplayWidth:100,pointerDisplayHeight:14,fps:60,zoom:3,timeSpacingList:[10,100,1e3,1e4,6e4,6e5,36e5,864e5,6048e5],thresholdsConfig:{10:{scaleTimeFormat:"mm:ss:SSS",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},100:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},1e3:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},1e4:{scaleTimeFormat:"HH:mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:12},6e4:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},6e5:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},36e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"MM/DD HH:mm",space:12},864e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"YYYY/MM/DD HH:mm",space:12},6048e5:{scaleTimeFormat:"YYYY/MM/DD",bgTimeFormat:"YYYY",pointerTimeFormat:"YYYY/MM/DD",space:10}}};class Wt{constructor(s,n){H(this,nt);H(this,rt);H(this,at);H(this,ot);H(this,ht);H(this,ut);et(this,"$canvas");et(this,"$canvasParent");et(this,"ctx");et(this,"cfg");H(this,J,M());H(this,_,0);H(this,A,void 0);H(this,D,void 0);H(this,X,void 0);H(this,N,!1);H(this,ct,({x:s,y:n,width:a=1,color:l=this.cfg.scaleColor})=>{this.ctx.beginPath(),this.ctx.moveTo(s,this.$canvas.height),this.ctx.lineTo(s,this.$canvas.height-n),this.ctx.closePath(),this.ctx.strokeStyle=l,this.ctx.lineWidth=a,this.ctx.stroke()});H(this,G,({x:s,y:n,text:a,color:l=this.cfg.textColor,fontSize:g="11px",align:$="center",baseLine:T="alphabetic"})=>{this.ctx.beginPath(),this.ctx.font=`${g} ${this.cfg.fontFamily}`,this.ctx.fillStyle=l,this.ctx.textAlign=$,this.ctx.textBaseline=T,this.ctx.fillText(a,s,n)});H(this,R,({startX:s,startY:n,endX:a,endY:l,bgColor:g})=>{this.ctx.beginPath(),this.ctx.rect(s,n,a-s,l-n),this.ctx.fillStyle=g,this.ctx.fill()});if(!s)throw new Error("canvas Element Or Element ID is required!");typeof s=="string"?this.$canvas=document.querySelector(s):this.$canvas=s,this.ctx=this.$canvas.getContext("2d"),this.cfg={...Et,...n},n!=null&&n.pointColor&&(this.cfg.pointerColor=n.pointColor),n!=null&&n.pointWidth&&(this.cfg.pointerWidth=n.pointWidth);const{fill:a,width:l,height:g,zoom:$,timeSpacingList:T,scaleHeight:p,textColor:S,bgTextColor:F}=this.cfg;if(F||(this.cfg.bgTextColor=Lt(S,.18)),$<0||$>=T.length||$%1!==0)throw new Error(`zoom must be 0 ~ ${T.length-1}, and must be an integer`);if(a){const y=this.$canvas.parentElement;this.$canvasParent=y,this.$canvas.width=y.clientWidth,this.$canvas.height=y.clientHeight,new ResizeObserver(Dt(B(this,at,Yt).bind(this),200)).observe(y)}else this.$canvas.width=l,this.$canvas.height=g;W(this,D,T[$]),p!=null&&p.long&&(p!=null&&p.short)?W(this,X,p):W(this,X,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw(),this.$canvas.addEventListener("wheel",B(this,rt,St).bind(this),{passive:!1}),this.$canvas.addEventListener("mousedown",B(this,nt,wt).bind(this))}draw({currentTime:s,areas:n,_privateFlag:a}={}){if(h(this,N)&&!a)return;W(this,_,s||Date.now()),W(this,A,n||[]);const l=Math.ceil(this.$canvas.width/this.cfg.scaleSpacing),g=l*h(this,D),$=h(this,_)-g/2,T=h(this,_)+g/2,p=this.$canvas.width/2,S=g/this.$canvas.width;B(this,ot,xt).call(this),h(this,R).call(this,{startX:0,startY:0,endX:this.$canvas.width,endY:this.$canvas.height,bgColor:this.cfg.bgColor}),h(this,A).forEach(F=>{const y=F.startTime<=$?0:Math.round((F.startTime-$)/S),j=F.endTime>=T?this.$canvas.width:Math.round((F.endTime-$)/S);y<this.$canvas.width&&j>0&&h(this,R).call(this,{startX:y,startY:0,endX:j,endY:this.$canvas.height,bgColor:F.bgColor||this.cfg.areaBgColor})}),_t.bind(this)({xCenterPoint:p,screenScaleCount:l,startTime:$,timePerPixel:S,scaleHeight:h(this,X),timeSpacing:h(this,D),currentTime:h(this,_),$canvas:this.$canvas,cfg:this.cfg,drawLine:h(this,ct).bind(this),drawText:h(this,G).bind(this),drawArea:h(this,R).bind(this)}),B(this,ht,Ft).call(this)}getCurrentTime(){return h(this,_)}on(s,n){h(this,J).on(s,n)}off(s,n){h(this,J).off(s,n)}}return J=new WeakMap,_=new WeakMap,A=new WeakMap,D=new WeakMap,X=new WeakMap,N=new WeakMap,nt=new WeakSet,wt=function(s){W(this,N,!0);let n=0,a=h(this,_);const l=Dt(({offsetX:T})=>{if(!h(this,N))return;const p=T-s.offsetX;a=Math.round(h(this,_)-h(this,D)/this.cfg.scaleSpacing*(p-n)),n=p,this.draw({currentTime:a,areas:h(this,A),_privateFlag:!0})},1e3/this.cfg.fps),g=({offsetX:T,offsetY:p})=>{(T<3||T>this.$canvas.width-3||p<3||p>this.$canvas.height-3)&&(this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",g))},$=()=>{this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",g),document.removeEventListener("mouseup",$),W(this,N,!1),B(this,ut,Ct).call(this,"dragged",a)};this.$canvas.addEventListener("mousemove",l),this.$canvas.addEventListener("mousemove",g),document.addEventListener("mouseup",$)},rt=new WeakSet,St=function(s){s.preventDefault();const n=this.cfg.timeSpacingList.findIndex(a=>a===h(this,D));s.deltaY<0&&n>0?(W(this,D,this.cfg.timeSpacingList[n-1]),this.draw({currentTime:h(this,_),areas:h(this,A),_privateFlag:!0})):s.deltaY>0&&n<this.cfg.timeSpacingList.length-1&&(W(this,D,this.cfg.timeSpacingList[n+1]),this.draw({currentTime:h(this,_),areas:h(this,A),_privateFlag:!0}))},at=new WeakSet,Yt=function(){this.$canvasParent&&(this.$canvas.width=this.$canvasParent.clientWidth,this.$canvas.height=this.$canvasParent.clientHeight,this.cfg.scaleHeight||W(this,X,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw({currentTime:h(this,_),areas:h(this,A)}))},ot=new WeakSet,xt=function(){this.ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height)},ht=new WeakSet,Ft=function(){const s=()=>h(this,D)<1e3?`${h(this,D)}ms`:h(this,D)<6e4?`${Math.round(h(this,D)/100)/10}sec`:h(this,D)<36e5?`${Math.round(h(this,D)/100/60)/10}min`:h(this,D)<864e5?`${Math.round(h(this,D)/100/60/60)/10}hours`:h(this,D)<6048e5?`${Math.round(h(this,D)/100/60/60/24)/10}days`:`${Math.round(h(this,D)/100/60/60/24/7)/10}weeks`;h(this,G).call(this,{x:this.cfg.scaleSpacing+12,y:9,text:s(),align:"left",baseLine:"middle"}),this.ctx.beginPath(),this.ctx.moveTo(5,6),this.ctx.lineTo(5,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,6),this.ctx.strokeStyle=this.cfg.scaleColor,this.ctx.lineWidth=1.5,this.ctx.stroke()},ct=new WeakMap,G=new WeakMap,R=new WeakMap,ut=new WeakSet,Ct=function(...s){h(this,J).emit(...s)},d.default=Wt,d.format=st,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),d}({});
