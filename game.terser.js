!function(){function e(e,n,o,i){let r,l,a=e.currentTime+i,s=0,u=e.createGain();if(u.gain.value=(n[0]/9)**3,n[5]&&(l=e.createOscillator(),l.type=n[5],l.frequency.value=(n[7]/3)**3,r=e.createGain(),r.gain.value=(n[6]+3)**3,l.connect(r)),n[1]){let t=e.createBiquadFilter();t.type=n[1],t.frequency.value=2**n[2],t.Q.value=n[3]**1.5,r&&n[4]&&r.connect(t.detune),u.connect(t),t.connect(e.destination)}else u.connect(e.destination);for(let i of n[8]){let n=e.createGain();n.connect(u);let l=(i[1]/9)**3,c=(i[2]/9)**3,d=(i[3]/9)**3,f=c+d+(i[4]/6)**3;if(n.gain.setValueAtTime(0,a),n.gain.linearRampToValueAtTime(l,a+c),n.gain.setValueAtTime(l,a+c+d),n.gain.exponentialRampToValueAtTime(1e-5,a+f),i[0]){let t=e.createOscillator();t.type=i[0],t.connect(n),t.detune.value=3*(i[5]-7.5)**3,r&&i[6]&&r.connect(t.detune);let l=440*2**((o-69)/12);if(i[7]){let e=(i[8]/9)**3,n=(i[9]/9)**3,o=(i[10]/6)**3;t.frequency.linearRampToValueAtTime(0,a),t.frequency.linearRampToValueAtTime(l,a+e),t.frequency.setValueAtTime(l,a+e+n),t.frequency.exponentialRampToValueAtTime(1e-5,a+e+n+o)}else t.frequency.setValueAtTime(l,a);t.start(a),t.stop(a+f)}else{let o=e.createBufferSource();o.buffer=t(e),o.loop=!0,o.connect(n),o.start(a),o.stop(a+f)}f>s&&(s=f)}l&&(l.start(a),l.stop(a+s))}function t(e){if(!R){R=e.createBuffer(1,2*e.sampleRate,e.sampleRate);let t=R.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=2*Math.random()-1}return R}function n(e,t,n){let o=e.createShader(t);if(e.shaderSource(o,n),e.compileShader(o),!e.getShaderParameter(o,35713))throw Error(e.getShaderInfoLog(o));return o}function o(e,t,n){let o=t[0],i=t[1],r=t[2],l=t[3],a=t[4],s=t[5],u=t[6],c=t[7],d=t[8],f=t[9],h=t[10],m=t[11],p=t[12],v=t[13],$=t[14],w=t[15],g=n[0],y=n[1],b=n[2],T=n[3];return e[0]=g*o+y*a+b*d+T*p,e[1]=g*i+y*s+b*f+T*v,e[2]=g*r+y*u+b*h+T*$,e[3]=g*l+y*c+b*m+T*w,g=n[4],y=n[5],b=n[6],T=n[7],e[4]=g*o+y*a+b*d+T*p,e[5]=g*i+y*s+b*f+T*v,e[6]=g*r+y*u+b*h+T*$,e[7]=g*l+y*c+b*m+T*w,g=n[8],y=n[9],b=n[10],T=n[11],e[8]=g*o+y*a+b*d+T*p,e[9]=g*i+y*s+b*f+T*v,e[10]=g*r+y*u+b*h+T*$,e[11]=g*l+y*c+b*m+T*w,g=n[12],y=n[13],b=n[14],T=n[15],e[12]=g*o+y*a+b*d+T*p,e[13]=g*i+y*s+b*f+T*v,e[14]=g*r+y*u+b*h+T*$,e[15]=g*l+y*c+b*m+T*w,e}function i(e,t){let n=e.o.t[t],i=e.o.i[t];if(e.i=i,e.l){let t=e.s/e.u;!function(e,t,n,o,i){let r,l=1/Math.tan(t/2);e[0]=l/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=i&&i!==1/0?(r=1/(o-i),e[10]=(i+o)*r,e[14]=2*i*o*r):(e[10]=-1,e[14]=-2*o)}(i.h,t>1?i.m:i.m/t,t,i.p,i.v)}o(i.$,i.h,n.g)}function r(e){return{T:Math.floor(e%60),k:Math.floor(e%3600/60),S:Math.floor(e%86400/3600),F:Math.floor(e%31536e3/86400),M:Math.floor(e/31536e3)}}function l(e){let t=r(e);return t.M>0?`${Y.format(t.M)}y${t.F}d`:t.F>0?`${t.F}d${t.S}h`:t.S>0?`${t.S}h${t.k}m`:`${t.k}m${t.T}s`}function a(e){return O.format(1e3*e)}function s(e){return V.format(1e3*e)}function u(e){return W.format(1e3*e)}function c(e,t,n){let o=0;for(let t=0;t<n;t++)o+=e.P**t;return e.I*e.P**t*o}function d(e,t,n){let o=f(t,n);return e.C*o*t.N*("auto"===t.U?n**t.R:t.R**n)}function f(e,t){let n=1;for(let[o,i]of e.A){if(!(t>=o))break;n*=i}return n}function h(t,n){let o=B[t.B];if(-1===t._.Mouse0){e(t.Audio,G,74,0);for(let e of t.j){let n=A[e.id];"click"===n.U&&(t.D+=d(o,n,e.count))}}for(let e of t.j){let i=A[e.id];"auto"===i.U&&(t.D+=d(o,i,e.count)*n)}t.Y=0;for(let e of t.j){let n=A[e.id];"auto"===n.U&&(t.Y+=d(o,n,e.count))}t.q=Date.now()/1e3+1,t.K=t.D+t.O,!(1&t.V)&&t.D>60&&(t.V|=1)}function m(e,t){e.W.useProgram(t.G),e.W.uniformMatrix4fv(t.L.J,!1,e.i.$)}function p(e,t,n){e.W.uniformMatrix4fv(n.H.L.o,!1,t.o),e.W.activeTexture(33984),e.W.bindTexture(3553,n.X),e.W.uniform1i(n.H.L.Z,0),e.ee.bindVertexArrayOES(n.te),e.W.drawElements(n.H.ne,n.ie.oe,5123,0),e.ee.bindVertexArrayOES(null)}function v(e,t){let n=e.o.re[t];if(n.le.length<2)return;if(!n)return;let o=e.D;if(n.le[0].ae>=o)n.se=0;else{for(let e=0;e<n.le.length;e++){let t=n.le[e],i=n.le[e-1];if(t.ae<=o&&t.ue>=o)return void(n.se=e);if(i&&i.ue<=o&&t.ae>=o)return void(n.se=e-1)}n.le[n.le.length-1].ue<=o&&(n.se=n.le.length-1)}}function $(e,t,n,o){let i=t[0],r=t[1],l=t[2];return e[0]=i+o*(n[0]-i),e[1]=r+o*(n[1]-r),e[2]=l+o*(n[2]-l),e}function w(e,t){let n=e.o.re[t],o=n.le[n.se];if(!n)return;let i=e.o.t[t],r=e.D;if(r>=o.ue)return i.ce=!0,i.de=o.fe,void(i.he=[1,1,1]);if(r<o.ae)return i.ce=!0,i.de=o.me,void(i.he=[.9,.9,.9]);i.ce=!0;let l=Math.min(1,(r-o.ae)/(o.ue-o.ae));i.de=$([0,0,0],o.me,o.fe,l),$(i.he,[.9,.9,.9],[1,1,1],l)}function g(e,...t){return e.reduce((e,n)=>e+function(e){let t=e.shift();return"boolean"==typeof t||null==t?"":Array.isArray(t)?t.join(""):t}(t)+n)}function y(e,t,n,o){return e.pe[t]||(e.pe[t]=[e.u/2-50,e.s/2-125,U(e.pe)+1],e.ve=void 0),g`
<div
class="window"
style="
width: 250px;
position: absolute;
top: ${e.pe[t][0]}px;
left: ${e.pe[t][1]}px;
z-index: ${e.pe[t][2]};
"
onmousedown="event.stopPropagation(); $(${7}, '${t}');"
onmouseup="event.stopPropagation(); $(${6})"
>
<div class="title-bar" onmousedown="$(${5}, '${t}');">
<div class="title-bar-text">
${t}
</div>
<div class="title-bar-controls">
<button aria-label="Close" onmouseup="${o}"></button>
</div>
</div>
<div class="window-body">
${n}
</div>
</div>
`}function b(e=0,t=1){return z=16807*z%2147483647,~~((z-1)/2147483646*(t-e+1)+e)}function T(e){return e[b(0,e.length-1)]}function k(e,t,n,o=250){if(!e.pe[t])switch(e.ve=void 0,t){case"Clock":e.pe[t]=[16,16,0];break;case"Era Progress":e.pe[t]=[16,e.s/2-125,0];break;case"Time Elapsed":e.pe[t]=[16,e.s-266,0];break;case"Income Statistics":e.pe[t]=[245,e.s-266,0];break;case"👉 Tick":e.pe[t]=[245,16,0];break;case"🌤️ Sundial":e.pe[t]=[337,16,0];break;default:e.pe[t]=[e.u/2+b(-100,0),e.s/2+b(-250,0),U(e.pe)+1]}return g`
<div
class="window"
style="
width: ${o}px;
position: absolute;
top: ${e.pe[t][0]}px;
left: ${e.pe[t][1]}px;
z-index: ${e.pe[t][2]};
"
onmousedown="event.stopPropagation(); $(${7}, '${t}');"
onmouseup="event.stopPropagation(); $(${6})"
>
<div class="title-bar" onmousedown="$(${5}, '${t}');">
<div class="title-bar-text">
${t}
</div>
</div>
<div class="window-body">
${n}
</div>
</div>
`}function x(e){let t={timeSaved:Date.now(),dialogState:e.V,eraCurrent:e.B,timeEarned:e.D,generators:e.j,windowLayout:e.pe};localStorage.setItem("com.piesku.future.save",JSON.stringify(t))}function S(e){return(t,n)=>{t.o.$e[n]|=8,t.o.re[n]={se:0,le:e}}}function F(e,t,n,o){n*=.008726646259971648,o*=.008726646259971648;let i=Math.sin(t*=.008726646259971648),r=Math.cos(t),l=Math.sin(n),a=Math.cos(n),s=Math.sin(o),u=Math.cos(o);return e[0]=i*a*u-r*l*s,e[1]=r*l*u+i*a*s,e[2]=r*a*s-i*l*u,e[3]=r*a*u+i*l*s,e}function M(e,t,n){return(o,i)=>{if(!X.has(t)){let n=o.ee.createVertexArrayOES();o.ee.bindVertexArrayOES(n),o.W.bindBuffer(34962,t.we),o.W.enableVertexAttribArray(e.L.ge),o.W.vertexAttribPointer(e.L.ge,3,5126,!1,0,0),o.W.bindBuffer(34962,t.ye),o.W.enableVertexAttribArray(e.L.be),o.W.vertexAttribPointer(e.L.be,2,5126,!1,0,0),o.W.bindBuffer(34963,t.Te),o.ee.bindVertexArrayOES(null),X.set(t,n)}o.o.$e[i]|=2,o.o.ke[i]={U:0,H:e,ie:t,xe:2304,te:X.get(t),X:n}}}function P(e,t,n){let o=[],i=ee[n%ee.length];for(let n=-t/2;n<t/2;n++)for(let r=-t/2;r<t/2;r++)o.push(i(e,n,r));return{Se:o}}function I(e,t,n,o,i,r){return{de:[t,-2,n],Se:(0,te[r%te.length])(e,o,i)}}function C(e,{de:t,Fe:n,he:o,Me:i=[],Se:r=[]}){let l=function(e,t=0){for(let n=0;n<1e4;n++)if(!e.$e[n])return e.$e[n]=t,n;throw Error("No more entities available.")}(e.o);!function(e=[0,0,0],t=[0,0,0,1],n=[1,1,1]){return(o,i)=>{o.o.$e[i]|=4,o.o.t[i]={Pe:i,o:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],g:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],de:e,Fe:t,he:n,Se:[],ce:!0}}}(t,n,o)(e,l);for(let t of i)t(e,l);let a=e.o.t[l];for(let t of r){let n=C(e,t),o=e.o.t[n];o.Ie=a,a.Se.push(o)}return l}function N(e){e.o=new Q,e.i=void 0,e.l=!0,e.W.clearColor(0,.5,.8,1),z=198706*e.q;let t=[],n=0,o=0,i=e.B;for(let r=0;r<20;r++){let l=[],a=b(8,20),s=[];o=0;for(let t=0;t<a;t++){let a=b(-4,3),u=b(-4,3);for(;l.some(e=>e.x===a&&e.y===u);)a=b(-4,3),u=b(-4,3);l.push({x:a,y:u});let c=n+t*b(1,3)*60,d=c+(t||.5)*b(360,1200)*2*(r+1);o=Math.max(o,d),s.push(I(e,a,u,c,n+d,i))}C(e,{de:[8*r+20,0,0],Me:[S([{ae:n-100,ue:n,me:[8*r+20,0,0],fe:[8*r,0,0]}])],Se:[{de:[0,-3,0],...P(e,8,i)},...s]}),n+=o,t.push(n)}t.pop(),C(e,function(e,t,n){let o=[];for(let e=0;e<n.length;e++){let i=t.slice();i[0]+=8*e;let r=t.slice();r[0]+=8*(e+1);let l=n[e];o.push({ae:l-100,ue:l,me:i,fe:r})}return{Me:[S(o)],Se:[{Fe:[-.28,.364,.116,.88],Me:[(e,t)=>{e.o.$e[t]|=1,e.o.i[t]={m:1,p:.1,v:1e3,h:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],$:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}}]}]}}(0,[6,5,8],t))}function U(e){let t=0;for(let n in e)e[n][2]>t&&(t=e[n][2]);return t}let R;const A=[{U:"click",Ce:"👉 Tick",N:1,R:1.4,I:7,P:1.5,A:[]},{U:"auto",Ce:"🌤️ Sundial",N:3,R:1.1,I:40,P:1.12,A:[[10,2],[25,2],[50,3],[75,4],[100,5],[150,5],[200,5],[250,5],[500,5]]},{U:"auto",Ce:"⏳ Hourglass",N:53,R:1.2,I:1500,P:1.15,A:[[10,4],[25,2],[50,3],[75,4],[100,5],[150,5],[200,5],[250,5],[500,5]]},{U:"auto",Ce:"🕰️ Pendulum",N:887,R:1.1,I:44350,P:1.11,A:[[10,1.5],[25,2],[50,2.5],[75,3],[100,3.5],[150,4],[200,4.5],[250,5],[500,5.5]]},{U:"auto",Ce:"⌚ Quartz",N:3539,R:1.3,I:707800,P:1.14,A:[[10,2.1],[25,2.2],[50,2.3],[75,2.4],[100,2.5],[150,2.6],[200,2.7],[250,2.8],[500,2.9]]},{U:"auto",Ce:"🤖 Atomic",N:21371,R:1.5,I:10685500,P:1.13,A:[[10,1.1],[25,1.2],[50,1.3],[75,1.4],[100,1.5],[150,1.6],[200,1.7],[250,1.8],[500,1.9]]}],B=[{Ne:0,Ce:"Ancient Era",Ue:0,C:1},{Ne:1,Ce:"Classical Era",Ue:1e5,C:2},{Ne:2,Ce:"Middle Ages",Ue:1e6,C:4},{Ne:3,Ce:"Renaissance",Ue:1e7,C:8},{Ne:4,Ce:"Industrial Era",Ue:1e8,C:16},{Ne:5,Ce:"Information Era",Ue:1e9,C:32}];let E=Float32Array.from([-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5]),_=Float32Array.from([-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0]),j=Float32Array.from([.375,0,.625,0,.625,.25,.375,.25,.375,.25,.625,.25,.625,.5,.375,.5,.375,.5,.625,.5,.625,.75,.375,.75,.375,.75,.625,.75,.625,1,.375,1,.125,.5,.375,.5,.375,.75,.125,.75,.625,.5,.875,.5,.875,.75,.625,.75]),D=Uint16Array.from([23,22,20,22,21,20,19,18,16,18,17,16,15,14,12,14,13,12,11,10,8,10,9,8,7,6,4,6,5,4,3,2,0,2,1,0]);const Y=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}),q=new Intl.NumberFormat("en-US",{maximumFractionDigits:2}),K=new Intl.NumberFormat("en-US",{style:"percent"}),O=new Intl.DateTimeFormat("en-US",{era:"short",year:"numeric"}),V=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",weekday:"long"}),W=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1});let G=[8,!1,7,2,!1,!1,8,8,[["triangle",7,1,1,1,8,!1,!1,1,1,2]]],J=0,z=1;const L=new Intl.NumberFormat("en",{style:"percent"});let H;class Q{constructor(){this.$e=[],this.i=[],this.ke=[],this.t=[],this.re=[]}}let X=new WeakMap,Z=!1;const ee=[(e,t,n)=>({de:[t,0,n],Fe:F([0,0,0,1],0,T([0,90,180]),0),Me:[M(e.Re,e.Ae,e.Be.grass)]}),(e,t,n)=>({de:[t,0,n],Me:[M(e.Re,e.Ae,e.Be.sandstone)]}),(e,t,n)=>({de:[t,0,n],Me:[M(e.Re,e.Ae,e.Be.stone3)]}),(e,t,n)=>({de:[t,0,n],Me:[M(e.Re,e.Ae,e.Be.castle_floor)]}),(e,t,n)=>({de:[t,0,n],Me:[M(e.Re,e.Ae,e.Be.bricks)]}),(e,t,n)=>({de:[t,0,n],Fe:F([0,0,0,1],0,T([0,90,180]),0),Me:[M(e.Re,e.Ae,e.Be.road)]})];let te=[(e,t,n)=>{let o=e.Be.stone,i=e.Be.stone2,r=[],l=b(2,5),a=(n-t)/l;for(let n=0;n<l;n++){let s=!Z&&l>=5&&n===l-2;s&&(Z=!0),r.push({de:[0,-1,0],Me:[M(e.Re,e.Ae,s?i:o),S([{ae:t,ue:t+a*n+a,me:[0,-1,0],fe:[0,n,0]}])]})}return r},(e,t,n)=>{let o=[],i=b(3,6),r=(n-t)/i,l=F([0,0,0,1],0,T([0,90,180]),0);for(let n=0;n<i;n++){let a;a=0===n?e.Be.column1:n===i-1?e.Be.column3:e.Be.column2,o.push({de:[0,-1,0],Fe:l,Me:[M(e.Re,e.Ae,a),S([{ae:t,ue:t+r*n+r,me:[0,-1,0],fe:[0,n,0]}])]})}return o},(e,t,n)=>{let o=[],i=b(1,3),r=(n-t)/i;for(let n=0;n<i;n++){let i;i=0===n?e.Be.house1:e.Be.house2,o.push({de:[0,-1,0],Fe:F([0,0,0,1],0,T([0,90,180]),0),Me:[M(e.Re,e.Ae,i),S([{ae:t,ue:t+r*n+r,me:[0,-1,0],fe:[0,n,0]}])]})}return o},(e,t,n)=>{let o=[],i=b(2,5),r=(n-t)/i;for(let n=0;n<i;n++){let i=T([e.Be.castle1,e.Be.castle2]);o.push({de:[0,-1,0],Fe:F([0,0,0,1],0,T([0,90,180]),0),Me:[M(e.Re,e.Ae,i),S([{ae:t,ue:t+r*n+r,me:[0,-1,0],fe:[0,n,0]}])]})}return o},(e,t,n)=>{let o=[],i=b(3,6),r=(n-t)/i;for(let n=0;n<i;n++)o.push({de:[0,-1,0],Fe:F([0,0,0,1],0,T([0,90,180]),0),Me:[M(e.Re,e.Ae,e.Be.factory),S([{ae:t,ue:t+r*n+r,me:[0,-1,0],fe:[0,n,0]}])]});return o},(e,t,n)=>{let o=[],i=b(3,6),r=(n-t)/i;for(let n=0;n<i;n++)o.push({de:[0,-1,0],Me:[M(e.Re,e.Ae,e.Be.skyscraper),S([{ae:t,ue:t+r*n+r,me:[0,-1,0],fe:[0,n,0]}])]});return o}],ne=0,oe=0,ie=new class{constructor(){this.O=Date.UTC(-9999,0,1,0,0,0)/1e3,this.q=Date.now()/1e3+1,this.K=0,this.Y=0,this.Ee=0,this._e=!1,this.o=new Q,this.s=0,this.u=0,this.l=!1,this.je={},this._={},this.De=document.querySelector("main"),this.Audio=new(window.AudioContext||window.webkitAudioContext),this.Ye=document.querySelector("canvas"),this.W=this.Ye.getContext("webgl"),this.ee=this.W.getExtension("OES_vertex_array_object"),this.Re=function(e){let t=function(e,t,o){let i=e.createProgram();if(e.attachShader(i,n(e,35633,"\nuniform mat4 pv;\nuniform mat4 world;\n\nattribute vec3 position;\nattribute vec2 texcoord;\nvarying vec2 vert_texcoord;\n\nvoid main() {\nvec4 vert_pos = world * vec4(position, 1.0);\ngl_Position = pv * vert_pos;\n\nvert_texcoord = texcoord;\n}\n")),e.attachShader(i,n(e,35632,"\nprecision mediump float;\n\nvarying vec2 vert_texcoord;\n\nuniform sampler2D sampler;\n\nvoid main() {\ngl_FragColor = texture2D(sampler, vert_texcoord);\n}\n")),e.linkProgram(i),!e.getProgramParameter(i,35714))throw Error(e.getProgramInfoLog(i));return i}(e);return{ne:4,G:t,L:{J:e.getUniformLocation(t,"pv"),o:e.getUniformLocation(t,"world"),Z:e.getUniformLocation(t,"sampler"),ge:e.getAttribLocation(t,"position"),be:e.getAttribLocation(t,"texcoord")}}}(this.W),this.Ae=function(e){let t=e.createBuffer();e.bindBuffer(34962,t),e.bufferData(34962,E,35044);let n=e.createBuffer();e.bindBuffer(34962,n),e.bufferData(34962,_,35044);let o=e.createBuffer();e.bindBuffer(34962,o),e.bufferData(34962,j,35044);let i=e.createBuffer();return e.bindBuffer(34963,i),e.bufferData(34963,D,35044),{we:t,qe:E,Ke:n,ye:o,Te:i,Oe:D,oe:D.length}}(this.W),this.Be={},this.De.addEventListener("mousedown",e=>{this.je[`Mouse${e.button}`]=1,this._[`Mouse${e.button}`]=1}),this.De.addEventListener("mouseup",e=>{this.je[`Mouse${e.button}`]=0,this._[`Mouse${e.button}`]=-1}),this.De.addEventListener("mousemove",e=>{this.je.Ve=e.offsetX,this.je.We=e.offsetY,this._.Ve=e.movementX,this._.We=e.movementY});let e=localStorage.getItem("com.piesku.future.save");if(e){let t=JSON.parse(e);this.B=t.eraCurrent,this.j=t.generators,this.D=null===t.timeEarned?1/0:t.timeEarned,this.V=t.dialogState||0,this.pe=t.windowLayout||{},h(this,((Date.now()-t.timeSaved)/1e3)**.75),this.Ee=this.D-t.timeEarned}else this.V=0,this.pe={},this.B=0,this.D=0,this.Ee=0,this.j=[{id:0,count:1,unlocked:!0},{id:1,count:0,unlocked:!0},{id:2,count:0,unlocked:!1},{id:3,count:0,unlocked:!1},{id:4,count:0,unlocked:!1},{id:5,count:0,unlocked:!1}];this.W.enable(2929),this.W.enable(2884)}Ge(){this.l=!1;for(let e in this._)this._[e]=0}Je(e){!function(e,t){for(let t=0;t<e.o.$e.length;t++)12==(12&e.o.$e[t])&&v(e,t)}(this),function(e,t){for(let t=0;t<e.o.$e.length;t++)12==(12&e.o.$e[t])&&w(e,t)}(this),function(e,t){for(let t=0;t<e.o.$e.length;t++)4==(4&e.o.$e[t])&&(n=e.o.t[t]).ce&&(n.ce=!1,function e(t){for(let n of t.Se)n.ce=!0,e(n)}(n),function(e,t,n,o){let i=t[0],r=t[1],l=t[2],a=t[3],s=i+i,u=r+r,c=l+l,d=i*s,f=i*u,h=i*c,m=r*u,p=r*c,v=l*c,$=a*s,w=a*u,g=a*c,y=o[0],b=o[1],T=o[2];e[0]=(1-(m+v))*y,e[1]=(f+g)*y,e[2]=(h-w)*y,e[3]=0,e[4]=(f-g)*b,e[5]=(1-(d+v))*b,e[6]=(p+$)*b,e[7]=0,e[8]=(h+w)*T,e[9]=(p-$)*T,e[10]=(1-(d+m))*T,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1}(n.o,n.Fe,n.de,n.he),n.Ie&&o(n.o,n.Ie.o,n.o),function(e,t){let n=t[0],o=t[1],i=t[2],r=t[3],l=t[4],a=t[5],s=t[6],u=t[7],c=t[8],d=t[9],f=t[10],h=t[11],m=t[12],p=t[13],v=t[14],$=t[15],w=n*a-o*l,g=n*s-i*l,y=n*u-r*l,b=o*s-i*a,T=o*u-r*a,k=i*u-r*s,x=c*p-d*m,S=c*v-f*m,F=c*$-h*m,M=d*v-f*p,P=d*$-h*p,I=f*$-h*v,C=w*I-g*P+y*M+b*F-T*S+k*x;C&&(C=1/C,e[0]=(a*I-s*P+u*M)*C,e[1]=(i*P-o*I-r*M)*C,e[2]=(p*k-v*T+$*b)*C,e[3]=(f*T-d*k-h*b)*C,e[4]=(s*F-l*I-u*S)*C,e[5]=(n*I-i*F+r*S)*C,e[6]=(v*y-m*k-$*g)*C,e[7]=(c*k-f*y+h*g)*C,e[8]=(l*P-a*F+u*x)*C,e[9]=(o*F-n*P-r*x)*C,e[10]=(m*T-p*y+$*w)*C,e[11]=(d*y-c*T-h*w)*C,e[12]=(a*S-l*M-s*x)*C,e[13]=(n*M-o*S+i*x)*C,e[14]=(p*g-m*b-v*w)*C,e[15]=(c*b-d*g+f*w)*C)}(n.g,n.o));var n}(this),function(e,t){e.s==window.innerWidth&&e.u==window.innerHeight||(e.s=e.Ye.width=window.innerWidth,e.u=e.Ye.height=window.innerHeight,e.l=!0),e.i=void 0;for(let t=0;t<e.o.$e.length;t++)if(5==(5&e.o.$e[t]))return void i(e,t)}(this),function(e,t){e.W.clear(16640),e.l&&e.W.viewport(0,0,e.s,e.u);let n=null,o=null;for(let t=0;t<e.o.$e.length;t++)if(6==(6&e.o.$e[t])){let i=e.o.t[t],r=e.o.ke[t];if(r.H!==n)switch(n=r.H,r.U){case 0:m(e,r.H)}switch(r.xe!==o&&(o=r.xe,e.W.frontFace(r.xe)),r.U){case 0:p(e,i,r)}}}(this),h(this,e),function(e,t){J+=t,J>5&&(J=0,x(e))}(this,e),function(e,t){let n=function(e){let t=e.K>e.q,n=e.K>864e10,o=e.D>Number.MAX_SAFE_INTEGER,i=e.D>=Number.MAX_VALUE;return g`
<div
style="height: 100vh; display: flex; justify-content: space-between;"
onmouseup="$(${6});"
>
${function(e){return k(e,"Clock",g`
${e.K>e.q?"<p>Congratulations! You have reached the future.</p>":"<p>To win the game, reach the future!</p>"}
<fieldset class="field-row">
${e.K<=864e10?'\n<legend>\nCurrent Date\n</legend>\n<div class="field-row" style="justify-content: space-evenly;">\n<div id="clock-current-year" style="width: 60px; text-align: center;"></div>\n<div id="clock-current-day" style="width: 140px; text-align: center;"></div>\n<div id="clock-current-time" style="width: 50px; text-align: center;"></div>\n</div>\n':'\n<legend>\nYears into the Far Future\n</legend>\n<div class="field-row" id="clock-current-year" style="overflow-wrap: anywhere;"></div>\n'}
</fieldset>
<fieldset class="field-row">
<legend>
Goal Date
</legend>
<div class="field-row" style="justify-content: space-evenly;">
<div id="clock-future-year" style="width: 60px; text-align: center;"></div>
<div id="clock-future-day" style="width: 140px; text-align: center;"></div>
<div id="clock-future-time" style="width: 50px; text-align: center;"></div>
</div>
</fieldset>
${e.K>e.q&&'\n<div class="field-row" style="justify-content: center;">\n<button onmouseup="event.stopPropagation(); $(3);">\nStart a New Game\n</button>\n</div>\n'}
`,300)}(e)}
${e.j.map((t,n)=>t.unlocked?function(e,t,n){let o=A[t.id],i=c(o,t.count,1),r=c(o,t.count,10),a=l(i),s=l(r),u=function(e,t){let n=0;for(let[o,i]of e.A){if(t<o)return{ze:t-n,Le:o-n,He:o,C:i};n=o}}(o,t.count);return k(e,o.Ce,g`
<div class="field-row" style="justify-content: space-between;">
<h4 style="margin: 0;">${t.count}</h4>
<button
onmouseup="$(${0}, [${n}, 1]);"
${e._e||e.D<i?"disabled":""}
style="height: 35px; overflow: hidden; text-overflow: ellipsis;"
title="${a}"
>
Buy 1 <br />
${a}
</button>
<button
onmouseup="$(${0}, [${n}, 10]);"
${e._e||e.D<r?"disabled":""}
style="height: 35px; overflow: hidden; text-overflow: ellipsis;"
title="${s}"
>
Buy 10 <br />
${s}
</button>
</div>

${u&&g`
<fieldset
class="field-row"
title="Reach the count of ${u.He} to get the bonus."
>
<legend>
Next Bonus: +${L.format(u.C-1)}
</legend>

<div class="field-row">
<progress
value="${u.ze}"
max="${u.Le}"
>
${u.ze/u.Le}
</progress>
</div>
</fieldset>
`}
`)}(e,t,n):null)}
${function(e){let t=B[e.B+1];return t?k(e,"Era Progress",g`
<fieldset class="field-row">
<legend>
${B[e.B].Ce}
</legend>

<div class="field-row">
<progress value="${e.Y}" max="${t.Ue}">
${e.Y/t.Ue}
</progress>
</div>
</fieldset>
<div class="field-row" style="justify-content: center">
<button
onmouseup="event.stopPropagation(); $(${2});"
${e.Y<t.Ue?"disabled":""}
title="You'll start from scratch, but you'll earn time faster."
>
Advance to the ${t.Ce}
</button>
</div>
`):null}(e)} ${function(e){return k(e,"Time Elapsed",g` <h3 id="time" style="margin: 0; overflow: hidden; text-overflow: ellipsis;"></h3> `)}(e)} ${function(e){let t=B[e.B];return k(e,"Income Statistics",g`
<ul class="tree-view" style="overflow-y: scroll; overflow-wrap: anywhere;">
<li>
Total
<ul>
<li>Time per second: ${l(e.Y)}</li>
<li>Seconds per second: ${Y.format(e.Y)}</li>
<li>Era Multiplier : ${q.format(t.C)}x</li>
</ul>
</li>
${e.j.map(n=>{if(n.count>0){let o=A[n.id],i=d(t,o,n.count),r=e.Y>0?i/e.Y:0;return g`
<li>
${o.Ce}
<ul>
<li>Count: ${n.count}</li>
${"auto"===o.U?`<li>Time per second: ${l(i)}</li>\n<li>Share of Total: ${K.format(r)}</li>\n`:`<li>Time per click: ${l(i)}</li>\n`}
<li>
Bonus multiplier:
${q.format(f(o,n.count))}x
</li>
<!-- <li>Income +1: ${l(d(t,o,n.count+1))}</li>
<li>Income +10: ${l(d(t,o,n.count+10))}</li> -->
</ul>
</li>
`}return null})}
</ul>
`)}(e)}
<!-- Dialogs -->
${!(1&e.V)&&function(e){return y(e,"⏰ Time Is Money™ 1.1",g`
<p>Welcome to <em>Time Is Money</em>™!</p>
<p>
Your goal is to lead your people into the literal actual future. Like, literally one
second from <em>right now</em>.
</p>
<p>
Use the time measurement devices on the left to control and speed up the passage of
time. Careful though, as each purchase will rewind the world's clock by the duration
equal to its cost.
</p>
<p>To ${a(e.q)}, and beyond!</p>
<div class="field-row" style="justify-content: center">
<button
onmouseup="event.stopPropagation(); $(${4}, ${1});"
>
OK
</button>
</div>
`,"$(4, 1)")}(e)}
${t&&!(2&e.V)&&function(e){return y(e,"✨ Victory",g`
<p>You won!</p>
<p>
Congratulations, you have reached the future!
</p>
<p>
Building the civilization's future requires hard work and lots of time. Your people
are grateful to you, their sage leader. Well done!
</p>
<div class="field-row" style="justify-content: center">
<button
onmouseup="event.stopPropagation(); $(${4}, ${2});"
>
Continue Playing
</button>
<button onmouseup="event.stopPropagation(); $(${3});">
Start a New Game
</button>
</div>
`,"$(4, 2)")}(e)}
${n&&!(4&e.V)&&function(e){return y(e,"🚀 The Far Future",g`
<p>You have reached the far future!</p>
<p>
JavaScript cannot properly format dates larger than ${a(864e10)}. From
now on the clock will only show years into the future.
</p>
<p>
Lōʻihi, the youngest volcano in the Hawaiian–Emperor seamount chain, has risen above
the surface of the ocean and has become a new volcanic island.
</p>
<div class="field-row" style="justify-content: center">
<button onmouseup="event.stopPropagation(); $(${3});">
Start a New Game
</button>
</div>
`,"$(4, 4)")}(e)}
${o&&!(8&e.V)&&function(e){return y(e,"🌌 The Really Far Future",g`
<p>You have reached the really far future!</p>
<p>
You have now earned more than ${Y.format(Number.MAX_SAFE_INTEGER)} seconds,
which is the largest integer that can be represented in JavaScript without any loss
of precision.
</p>
<p>
The Solar System has completed a full revolution around the Milky Way. This is a
good moment to start over.
</p>
<div class="field-row" style="justify-content: center">
<button onmouseup="event.stopPropagation(); $(${3});">
Start a New Game
</button>
</div>
`,"$(4, 8)")}(e)}
${i&&!(16&e.V)&&function(e){return y(e,"🌠 Beyond Future",g`
<p>You have gone beyond the future!</p>
<p style="overflow-wrap: anywhere;">
You have now earned more than ${Y.format(Number.MAX_VALUE)} seconds, which
is the largest number that can be represented in JavaScript.
</p>
<p><em>Nice</em>.</p>
<p>
All
<a href="https://en.wikipedia.org/wiki/Timeline_of_the_far_future">
nucleons in the observable universe decayed</a
>
eons ago. It's time for a new Big Bang.
</p>
<div class="field-row" style="justify-content: center">
<button onmouseup="event.stopPropagation(); $(${3});">
Start a New Game
</button>
</div>
`,"$(4, 16)")}(e)}
${e.Ee>0&&function(e){let t=r(e.Ee);return y(e,"💡 Offline Progress",g`
<p>Welcome back!</p>
<p>
While you were offline, ${t.M} years, ${t.F} days, ${t.S} hours,
${t.k} minutes, and ${t.T} seconds have gone by.
</p>
<div class="field-row" style="justify-content: center">
<button onmouseup="event.stopPropagation(); $(${1});">
OK
</button>
</div>
`,"$(1)")}(e)}
</div>
`}(e);n!==H&&(e.De.innerHTML=H=n);let o=document.getElementById("time");if(o){let t=r(e.D);o.innerHTML=`\nyears:&nbsp;${Y.format(t.M)}<br>\ndays:&nbsp;${t.F}<br>\nhours:&nbsp;${t.S}<br>\nminutes:&nbsp;${t.k}<br>\nseconds:&nbsp;${t.T}`}if(e.K<=864e10){let t=document.getElementById("clock-current-year");t&&(t.textContent=a(e.K));let n=document.getElementById("clock-current-day");n&&(n.textContent=s(e.K));let o=document.getElementById("clock-current-time");o&&(o.textContent=u(e.K))}else{let t=document.getElementById("clock-current-year");t&&(t.textContent=Y.format(e.K/31536e3))}{let t=document.getElementById("clock-future-year");t&&(t.textContent=a(e.q));let n=document.getElementById("clock-future-day");n&&(n.textContent=s(e.q));let o=document.getElementById("clock-future-time");o&&(o.textContent=u(e.q))}e.ve&&(e.pe[e.ve][0]+=e._.We,e.pe[e.ve][1]+=e._.Ve)}(this)}};window.$=function(t,n,o){switch(n){case 0:{let[n,i]=o,r=t.j[n],l=c(A[n],r.count,i);if(!t._e&&t.D>=l){t._e=!0,oe=0;let o=l/10,a=setInterval(()=>{10===oe&&(t._e=!1,clearInterval(a)),t.D>o?t.D-=o:t.D=0,oe++},1e3/60);r.count+=i;let s=t.j[n+1];s&&!s.unlocked&&(s.unlocked=!0),e(t.Audio,G,84,0),x(t)}break}case 1:t.Ee=0,delete t.pe["💡 Offline Progress"],x(t);break;case 2:t.Y>B[t.B+1].Ue&&requestAnimationFrame(()=>{t.B++,t._e=!1,t.Y=0,t.D=0,t.Ee=0,t.j=[{id:0,count:1,unlocked:!0},{id:1,count:0,unlocked:!0},{id:2,count:0,unlocked:!1},{id:3,count:0,unlocked:!1},{id:4,count:0,unlocked:!1},{id:5,count:0,unlocked:!1}],x(t),N(t)});break;case 3:requestAnimationFrame(()=>{t.V=0,t.pe={},t.B=0,t._e=!1,t.Y=0,t.D=0,t.Ee=0,t.j=[{id:0,count:1,unlocked:!0},{id:1,count:0,unlocked:!0},{id:2,count:0,unlocked:!1},{id:3,count:0,unlocked:!1},{id:4,count:0,unlocked:!1},{id:5,count:0,unlocked:!1}],x(t),N(t)});break;case 4:t.V|=o,x(t);break;case 5:{let e=o;t.ve=e,t.pe[e][2]=U(t.pe)+1,x(t);break}case 6:t.ve=void 0,x(t);break;case 7:t.pe[o][2]=U(t.pe)+1,x(t)}}.bind(null,ie);let re=["grass","stone","stone2","stone3","sandstone","column1","column2","column3","house1","house2","castle1","castle2","castle_floor","factory","bricks","road","skyscraper"].map(async e=>new Promise((t,n)=>{let o=new Image;o.src=`./textures/${e}.jpg`,o.onload=()=>{ie.Be[e]=function(e,t){let n=e.W,o=n.createTexture();return n.bindTexture(3553,o),n.texImage2D(3553,0,6408,6408,5121,t),n.generateMipmap(3553),o}(ie,o),t()}}));Promise.all(re).then(()=>{N(ie),function(e){let t=performance.now(),n=o=>{e.Je((o-t)/1e3),e.Ge(),t=o,ne=requestAnimationFrame(n)};cancelAnimationFrame(ne),n(t)}(ie)})}();
