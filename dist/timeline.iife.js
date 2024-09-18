var $timeline=function(v){"use strict";var Nt=Object.defineProperty;var Ut=(v,T,Y)=>T in v?Nt(v,T,{enumerable:!0,configurable:!0,writable:!0,value:Y}):v[T]=Y;var q=(v,T,Y)=>(Ut(v,typeof T!="symbol"?T+"":T,Y),Y),St=(v,T,Y)=>{if(!T.has(v))throw TypeError("Cannot "+Y)};var r=(v,T,Y)=>(St(v,T,"read from private field"),Y?Y.call(v):T.get(v)),S=(v,T,Y)=>{if(T.has(v))throw TypeError("Cannot add the same private member more than once");T instanceof WeakSet?T.add(v):T.set(v,Y)},x=(v,T,Y,rt)=>(St(v,T,"write to private field"),rt?rt.call(v,Y):T.set(v,Y),Y);var X=(v,T,Y)=>(St(v,T,"access private method"),Y);var J,C,W,D,N,k,z,I,ot,Lt,ht,Ot,ct,_t,ut,Pt,lt,Et,ft,Wt,dt,kt,mt,Xt,gt,K,V,tt,xt;function T(f){return{all:f=f||new Map,on:function(t,n){var o=f.get(t);o?o.push(n):f.set(t,[n])},off:function(t,n){var o=f.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):f.set(t,[]))},emit:function(t,n){var o=f.get(t);o&&o.slice().map(function(l){l(n)}),(o=f.get("*"))&&o.slice().map(function(l){l(t,n)})}}}var Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Yt={exports:{}};(function(f,t){(function(n,o){f.exports=o()})(Y,function(){var n=1e3,o=6e4,l=36e5,m="millisecond",g="second",d="minute",b="hour",y="day",L="week",p="month",et="quarter",_="year",R="date",$t="Invalid Date",bt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,yt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,vt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var s=["th","st","nd","rd"],e=h%100;return"["+h+(s[(e-20)%10]||s[e]||s[0])+"]"}},it=function(h,s,e){var a=String(h);return!a||a.length>=s?h:""+Array(s+1-a.length).join(e)+h},G={s:it,z:function(h){var s=-h.utcOffset(),e=Math.abs(s),a=Math.floor(e/60),i=e%60;return(s<=0?"+":"-")+it(a,2,"0")+":"+it(i,2,"0")},m:function h(s,e){if(s.date()<e.date())return-h(e,s);var a=12*(e.year()-s.year())+(e.month()-s.month()),i=s.clone().add(a,p),c=e-i<0,u=s.clone().add(a+(c?-1:1),p);return+(-(a+(e-i)/(c?i-u:u-i))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:p,y:_,w:L,d:y,D:R,h:b,m:d,s:g,ms:m,Q:et}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},j="en",A={};A[j]=vt;var Ht="$isDayjsObject",wt=function(h){return h instanceof Mt||!(!h||!h[Ht])},pt=function h(s,e,a){var i;if(!s)return j;if(typeof s=="string"){var c=s.toLowerCase();A[c]&&(i=c),e&&(A[c]=e,i=c);var u=s.split("-");if(!i&&u.length>1)return h(u[0])}else{var M=s.name;A[M]=s,i=M}return!a&&i&&(j=i),i||!a&&j},F=function(h,s){if(wt(h))return h.clone();var e=typeof s=="object"?s:{};return e.date=h,e.args=arguments,new Mt(e)},$=G;$.l=pt,$.i=wt,$.w=function(h,s){return F(h,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var Mt=function(){function h(e){this.$L=pt(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[Ht]=!0}var s=h.prototype;return s.parse=function(e){this.$d=function(a){var i=a.date,c=a.utc;if(i===null)return new Date(NaN);if($.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var u=i.match(bt);if(u){var M=u[2]-1||0,w=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],M,u[3]||1,u[4]||0,u[5]||0,u[6]||0,w)):new Date(u[1],M,u[3]||1,u[4]||0,u[5]||0,u[6]||0,w)}}return new Date(i)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return $},s.isValid=function(){return this.$d.toString()!==$t},s.isSame=function(e,a){var i=F(e);return this.startOf(a)<=i&&i<=this.endOf(a)},s.isAfter=function(e,a){return F(e)<this.startOf(a)},s.isBefore=function(e,a){return this.endOf(a)<F(e)},s.$g=function(e,a,i){return $.u(e)?this[a]:this.set(i,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,a){var i=this,c=!!$.u(a)||a,u=$.p(e),M=function(Z,P){var B=$.w(i.$u?Date.UTC(i.$y,P,Z):new Date(i.$y,P,Z),i);return c?B:B.endOf(y)},w=function(Z,P){return $.w(i.toDate()[Z].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(P)),i)},H=this.$W,O=this.$M,E=this.$D,Q="set"+(this.$u?"UTC":"");switch(u){case _:return c?M(1,0):M(31,11);case p:return c?M(1,O):M(0,O+1);case L:var U=this.$locale().weekStart||0,st=(H<U?H+7:H)-U;return M(c?E-st:E+(6-st),O);case y:case R:return w(Q+"Hours",0);case b:return w(Q+"Minutes",1);case d:return w(Q+"Seconds",2);case g:return w(Q+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,a){var i,c=$.p(e),u="set"+(this.$u?"UTC":""),M=(i={},i[y]=u+"Date",i[R]=u+"Date",i[p]=u+"Month",i[_]=u+"FullYear",i[b]=u+"Hours",i[d]=u+"Minutes",i[g]=u+"Seconds",i[m]=u+"Milliseconds",i)[c],w=c===y?this.$D+(a-this.$W):a;if(c===p||c===_){var H=this.clone().set(R,1);H.$d[M](w),H.init(),this.$d=H.set(R,Math.min(this.$D,H.daysInMonth())).$d}else M&&this.$d[M](w);return this.init(),this},s.set=function(e,a){return this.clone().$set(e,a)},s.get=function(e){return this[$.p(e)]()},s.add=function(e,a){var i,c=this;e=Number(e);var u=$.p(a),M=function(O){var E=F(c);return $.w(E.date(E.date()+Math.round(O*e)),c)};if(u===p)return this.set(p,this.$M+e);if(u===_)return this.set(_,this.$y+e);if(u===y)return M(1);if(u===L)return M(7);var w=(i={},i[d]=o,i[b]=l,i[g]=n,i)[u]||1,H=this.$d.getTime()+e*w;return $.w(H,this)},s.subtract=function(e,a){return this.add(-1*e,a)},s.format=function(e){var a=this,i=this.$locale();if(!this.isValid())return i.invalidDate||$t;var c=e||"YYYY-MM-DDTHH:mm:ssZ",u=$.z(this),M=this.$H,w=this.$m,H=this.$M,O=i.weekdays,E=i.months,Q=i.meridiem,U=function(P,B,nt,Dt){return P&&(P[B]||P(a,c))||nt[B].slice(0,Dt)},st=function(P){return $.s(M%12||12,P,"0")},Z=Q||function(P,B,nt){var Dt=P<12?"AM":"PM";return nt?Dt.toLowerCase():Dt};return c.replace(yt,function(P,B){return B||function(nt){switch(nt){case"YY":return String(a.$y).slice(-2);case"YYYY":return $.s(a.$y,4,"0");case"M":return H+1;case"MM":return $.s(H+1,2,"0");case"MMM":return U(i.monthsShort,H,E,3);case"MMMM":return U(E,H);case"D":return a.$D;case"DD":return $.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return U(i.weekdaysMin,a.$W,O,2);case"ddd":return U(i.weekdaysShort,a.$W,O,3);case"dddd":return O[a.$W];case"H":return String(M);case"HH":return $.s(M,2,"0");case"h":return st(1);case"hh":return st(2);case"a":return Z(M,w,!0);case"A":return Z(M,w,!1);case"m":return String(w);case"mm":return $.s(w,2,"0");case"s":return String(a.$s);case"ss":return $.s(a.$s,2,"0");case"SSS":return $.s(a.$ms,3,"0");case"Z":return u}return null}(P)||u.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,a,i){var c,u=this,M=$.p(a),w=F(e),H=(w.utcOffset()-this.utcOffset())*o,O=this-w,E=function(){return $.m(u,w)};switch(M){case _:c=E()/12;break;case p:c=E();break;case et:c=E()/3;break;case L:c=(O-H)/6048e5;break;case y:c=(O-H)/864e5;break;case b:c=O/l;break;case d:c=O/o;break;case g:c=O/n;break;default:c=O}return i?c:$.a(c)},s.daysInMonth=function(){return this.endOf(p).$D},s.$locale=function(){return A[this.$L]},s.locale=function(e,a){if(!e)return this.$L;var i=this.clone(),c=pt(e,a,!0);return c&&(i.$L=c),i},s.clone=function(){return $.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},h}(),Ct=Mt.prototype;return F.prototype=Ct,[["$ms",m],["$s",g],["$m",d],["$H",b],["$W",y],["$M",p],["$y",_],["$D",R]].forEach(function(h){Ct[h[1]]=function(s){return this.$g(s,h[0],h[1])}}),F.extend=function(h,s){return h.$i||(h(s,Mt,F),h.$i=!0),F},F.locale=pt,F.isDayjs=wt,F.unix=function(h){return F(1e3*h)},F.en=A[j],F.Ls=A,F.p={},F})})(Yt);var At=Yt.exports;const It=rt(At),at=(f,t="MM/DD HH:mm")=>It(f).format(t),Tt=(f,t)=>{let n,o=0;return(...l)=>{const m=Date.now(),g=m-o;!o||g>=t?(o=m,f.apply(void 0,l)):n||(n=setTimeout(()=>{o=m,f.apply(void 0,l),n=null},t-g))}},Ft=f=>{const[t,n]=[f[0],f[1]],o=n.clientX-t.clientX,l=n.clientY-t.clientY;return Math.sqrt(o*o+l*l)},jt=(f,t)=>{const n=document.createElement("canvas");n.width=n.height=1;const o=n.getContext("2d");o.fillStyle=f,o.fillRect(0,0,1,1);const l=o.getImageData(0,0,1,1).data;return`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${t})`},zt=({xCenterPoint:f,cfg:t,timePerPixel:n,timeSpacing:o,currentTime:l,$canvas:m,screenScaleCount:g,scaleHeight:d,startTime:b,drawLine:y,drawText:L,drawArea:p})=>{const et=({space:R,scaleTimeFormat:$t,bgTimeFormat:bt,pointerTimeFormat:yt})=>{L({x:m.width-f/10,y:6,text:at(l,bt),fontSize:`${m.height-5}px`,align:"right",baseLine:"top",color:t.bgTextColor});const vt=b%o,it=vt/n;for(let G=0;G<g;G++){const j=G*t.scaleSpacing-it-t.pointerWidth/2,A=b+G*o-vt;if(A%(o*R)===0){y({x:j,y:d.long}),L({x:j,y:m.height-d.long-5,text:at(A,$t),baseLine:"bottom"});continue}y({x:j,y:d.short})}y({x:f-t.pointerWidth/2,y:m.height,width:t.pointerWidth,color:t.pointerColor}),p({startX:f-t.pointerDisplayWidth/2,startY:4,endX:f+t.pointerDisplayWidth/2,endY:4+t.pointerDisplayHeight,bgColor:t.pointerColor}),L({x:f,y:t.pointerDisplayHeight/2+5,text:at(l,yt),align:"center",baseLine:"middle"})},_=t.thresholdsConfig[o];_&&et({space:_.space,scaleTimeFormat:_.scaleTimeFormat,bgTimeFormat:_.bgTimeFormat,pointerTimeFormat:_.pointerTimeFormat})},Rt={fill:!0,width:1e3,height:60,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",fontFamily:"Arial",scaleColor:"#ffffff",scaleSpacing:7,areaBgColor:"#ffffff55",pointerColor:"#00aeec",pointerWidth:3,pointerDisplayWidth:100,pointerDisplayHeight:14,fps:60,zoom:3,timeSpacingList:[10,100,1e3,1e4,6e4,6e5,36e5,864e5,6048e5],thresholdsConfig:{10:{scaleTimeFormat:"mm:ss:SSS",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},100:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss:SSS",space:10},1e3:{scaleTimeFormat:"mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},1e4:{scaleTimeFormat:"HH:mm:ss",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:12},6e4:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},6e5:{scaleTimeFormat:"HH:mm",bgTimeFormat:"YYYY/MM/DD",pointerTimeFormat:"HH:mm:ss",space:10},36e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"MM/DD HH:mm",space:12},864e5:{scaleTimeFormat:"MM/DD HH:mm",bgTimeFormat:"YYYY/MM",pointerTimeFormat:"YYYY/MM/DD HH:mm",space:12},6048e5:{scaleTimeFormat:"YYYY/MM/DD",bgTimeFormat:"YYYY",pointerTimeFormat:"YYYY/MM/DD",space:10}}};class Bt{constructor(t,n){S(this,ot);S(this,ht);S(this,ct);S(this,ut);S(this,lt);S(this,ft);S(this,dt);S(this,mt);S(this,tt);q(this,"$canvas");q(this,"$canvasParent");q(this,"ctx");q(this,"cfg");q(this,"timeRanges");q(this,"msPerPixel");S(this,J,T());S(this,C,0);S(this,W,void 0);S(this,D,void 0);S(this,N,void 0);S(this,k,!1);S(this,z,null);S(this,I,null);S(this,gt,({x:t,y:n,width:o=1,color:l=this.cfg.scaleColor})=>{this.ctx.beginPath(),this.ctx.moveTo(t,this.$canvas.height),this.ctx.lineTo(t,this.$canvas.height-n),this.ctx.closePath(),this.ctx.strokeStyle=l,this.ctx.lineWidth=o,this.ctx.stroke()});S(this,K,({x:t,y:n,text:o,color:l=this.cfg.textColor,fontSize:m="11px",align:g="center",baseLine:d="alphabetic"})=>{this.ctx.beginPath(),this.ctx.font=`${m} ${this.cfg.fontFamily}`,this.ctx.fillStyle=l,this.ctx.textAlign=g,this.ctx.textBaseline=d,this.ctx.fillText(o,t,n)});S(this,V,({startX:t,startY:n,endX:o,endY:l,bgColor:m})=>{this.ctx.beginPath(),this.ctx.rect(t,n,o-t,l-n),this.ctx.fillStyle=m,this.ctx.fill()});if(!t)throw new Error("canvas Element Or Element ID is required!");typeof t=="string"?this.$canvas=document.querySelector(t):this.$canvas=t,this.ctx=this.$canvas.getContext("2d"),this.cfg={...Rt,...n},n!=null&&n.pointColor&&(this.cfg.pointerColor=n.pointColor),n!=null&&n.pointWidth&&(this.cfg.pointerWidth=n.pointWidth);const{fill:o,width:l,height:m,zoom:g,timeSpacingList:d,scaleHeight:b,textColor:y,bgTextColor:L}=this.cfg;if(L||(this.cfg.bgTextColor=jt(y,.18)),g<0||g>=d.length||g%1!==0)throw new Error(`zoom must be 0 ~ ${d.length-1}, and must be an integer`);if(o){const p=this.$canvas.parentElement;this.$canvasParent=p,this.$canvas.width=p.clientWidth,this.$canvas.height=p.clientHeight,new ResizeObserver(Tt(X(this,ft,Wt).bind(this),200)).observe(p)}else this.$canvas.width=l,this.$canvas.height=m;x(this,D,d[g]),b!=null&&b.long&&(b!=null&&b.short)?x(this,N,b):x(this,N,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw(),this.$canvas.addEventListener("wheel",X(this,ht,Ot).bind(this),{passive:!1}),this.$canvas.addEventListener("mousedown",X(this,ot,Lt).bind(this)),this.$canvas.addEventListener("touchstart",X(this,ct,_t).bind(this),{passive:!1}),this.$canvas.addEventListener("touchmove",Tt(X(this,ut,Pt).bind(this),1e3/this.cfg.fps),{passive:!1}),this.$canvas.addEventListener("touchend",X(this,lt,Et).bind(this))}draw({currentTime:t,areas:n,_privateFlag:o}={}){if(r(this,k)&&!o)return;x(this,C,t||Date.now()),x(this,W,n||[]);const l=this.$canvas.width/2,m=Math.ceil(this.$canvas.width/this.cfg.scaleSpacing),g=m*r(this,D),[d,b]=this.timeRanges=[r(this,C)-g/2,r(this,C)+g/2];this.msPerPixel=g/this.$canvas.width,X(this,dt,kt).call(this),r(this,V).call(this,{startX:0,startY:0,endX:this.$canvas.width,endY:this.$canvas.height,bgColor:this.cfg.bgColor}),r(this,W).forEach(y=>{const L=y.startTime<=d?0:Math.round((y.startTime-d)/this.msPerPixel),p=y.endTime>=b?this.$canvas.width:Math.round((y.endTime-d)/this.msPerPixel);L<this.$canvas.width&&p>0&&r(this,V).call(this,{startX:L,startY:0,endX:p,endY:this.$canvas.height,bgColor:y.bgColor||this.cfg.areaBgColor})}),zt.bind(this)({xCenterPoint:l,screenScaleCount:m,startTime:d,timePerPixel:this.msPerPixel,scaleHeight:r(this,N),timeSpacing:r(this,D),currentTime:r(this,C),$canvas:this.$canvas,cfg:this.cfg,drawLine:r(this,gt).bind(this),drawText:r(this,K).bind(this),drawArea:r(this,V).bind(this)}),X(this,mt,Xt).call(this)}getCurrentTime(){return r(this,C)}on(t,n){r(this,J).on(t,n)}off(t,n){r(this,J).off(t,n)}}return J=new WeakMap,C=new WeakMap,W=new WeakMap,D=new WeakMap,N=new WeakMap,k=new WeakMap,z=new WeakMap,I=new WeakMap,ot=new WeakSet,Lt=function(t){x(this,k,!0);let n=t.clientX,o=r(this,C);const l=Tt(({clientX:d})=>{r(this,k)&&(o=Math.round(r(this,C)-r(this,D)/this.cfg.scaleSpacing*(d-n)),n=d,this.draw({currentTime:o,areas:r(this,W),_privateFlag:!0}))},1e3/this.cfg.fps),m=d=>{const b=this.$canvas.getBoundingClientRect(),y=d.clientX-b.left,L=d.clientY-b.top,p=3;(y<p||y>this.$canvas.width-p||L<p||L>this.$canvas.height-p)&&(this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",m))},g=()=>{this.$canvas.removeEventListener("mousemove",l),this.$canvas.removeEventListener("mousemove",m),document.removeEventListener("mouseup",g),x(this,k,!1),X(this,tt,xt).call(this,"dragged",o)};this.$canvas.addEventListener("mousemove",l),this.$canvas.addEventListener("mousemove",m),document.addEventListener("mouseup",g)},ht=new WeakSet,Ot=function(t){t.preventDefault();const n=this.cfg.timeSpacingList.findIndex(o=>o===r(this,D));t.deltaY<0&&n>0?(x(this,D,this.cfg.timeSpacingList[n-1]),this.draw({currentTime:r(this,C),areas:r(this,W),_privateFlag:!0})):t.deltaY>0&&n<this.cfg.timeSpacingList.length-1&&(x(this,D,this.cfg.timeSpacingList[n+1]),this.draw({currentTime:r(this,C),areas:r(this,W),_privateFlag:!0}))},ct=new WeakSet,_t=function(t){t.preventDefault(),x(this,k,!0),x(this,z,t.touches[0].clientX),t.touches.length===2&&x(this,I,Ft(t.touches))},ut=new WeakSet,Pt=function(t){if(t.preventDefault(),!r(this,k))return;if(t.touches.length===2&&r(this,I)!==null){const m=Ft(t.touches),g=Math.abs(r(this,I)-m)>=45;if(!g)return;const d=this.cfg.timeSpacingList.findIndex(b=>b===r(this,D));if(d<=0||d>=this.cfg.timeSpacingList.length-1)return;m<r(this,I)?x(this,D,this.cfg.timeSpacingList[d+1]):x(this,D,this.cfg.timeSpacingList[d-1]),g&&x(this,I,m),this.draw({currentTime:r(this,C),areas:r(this,W),_privateFlag:!0});return}if(r(this,z)===null)return;const n=t.touches[0],o=n.clientX-r(this,z),l=Math.round(r(this,C)-r(this,D)/this.cfg.scaleSpacing*o);x(this,z,n.clientX),this.draw({currentTime:l,areas:r(this,W),_privateFlag:!0})},lt=new WeakSet,Et=function(t){r(this,k)&&(x(this,k,!1),x(this,z,null),t.touches.length<2&&x(this,I,null),X(this,tt,xt).call(this,"dragged",r(this,C)))},ft=new WeakSet,Wt=function(){this.$canvasParent&&(this.$canvas.width=this.$canvasParent.clientWidth,this.$canvas.height=this.$canvasParent.clientHeight,this.cfg.scaleHeight||x(this,N,{long:this.$canvas.height/3,medium:this.$canvas.height/6,short:this.$canvas.height/10}),this.draw({currentTime:r(this,C),areas:r(this,W)}))},dt=new WeakSet,kt=function(){this.ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height)},mt=new WeakSet,Xt=function(){const t=()=>r(this,D)<1e3?`${r(this,D)}ms`:r(this,D)<6e4?`${Math.round(r(this,D)/100)/10}sec`:r(this,D)<36e5?`${Math.round(r(this,D)/100/60)/10}min`:r(this,D)<864e5?`${Math.round(r(this,D)/100/60/60)/10}hours`:r(this,D)<6048e5?`${Math.round(r(this,D)/100/60/60/24)/10}days`:`${Math.round(r(this,D)/100/60/60/24/7)/10}weeks`;r(this,K).call(this,{x:this.cfg.scaleSpacing+12,y:9,text:t(),align:"left",baseLine:"middle"}),this.ctx.beginPath(),this.ctx.moveTo(5,6),this.ctx.lineTo(5,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,10),this.ctx.lineTo(this.cfg.scaleSpacing+6,6),this.ctx.strokeStyle=this.cfg.scaleColor,this.ctx.lineWidth=1.5,this.ctx.stroke()},gt=new WeakMap,K=new WeakMap,V=new WeakMap,tt=new WeakSet,xt=function(...t){r(this,J).emit(...t)},v.default=Bt,v.format=at,Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),v}({});
