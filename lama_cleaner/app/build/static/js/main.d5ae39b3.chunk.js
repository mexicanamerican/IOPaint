(this["webpackJsonplama-cleaner"]=this["webpackJsonplama-cleaner"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),c=n.n(r),i=(n(17),n(3)),s=n.n(i),o=n(4),l=n(2),u=n(8),d=n(24),p=n(1);function h(e){var t=e.children,n=e.className,r=e.disabled,c=e.icon,i=e.primary,s=e.onClick,o=e.onDown,u=e.onUp,d=Object(a.useState)(!1),h=Object(l.a)(d,2),b=h[0],f=h[1],v="";return i&&!r&&(v="bg-primary hover:bg-black hover:text-white"),b&&(v="bg-black text-white"),i||b||(v="hover:bg-primary"),Object(p.jsxs)("div",{role:"button",onKeyDown:s,onClick:s,onPointerDown:function(e){f(!0),null===o||void 0===o||o(e.nativeEvent)},onPointerUp:function(e){f(!1),null===u||void 0===u||u(e.nativeEvent)},tabIndex:-1,className:["inline-flex py-3 px-5 rounded-md cursor-pointer",t?"space-x-3":"",v,r?"pointer-events-none opacity-50":"",n].join(" "),children:[c,Object(p.jsx)("span",{className:"whitespace-nowrap select-none",children:t})]})}var b=n(6);function f(e){var t=e.onSelection,n=Object(a.useState)(!1),r=Object(l.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)("file-upload-".concat(Math.random().toString())),d=Object(l.a)(u,1)[0];function h(e){if(e&&e.type.match("image.*"))try{if(e.size>20971520)throw new Error("file too large");t(e)}catch(n){alert("error: ".concat(n.message))}}function f(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.file((function(t){return e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],a=[],r=0;r<t.length;r+=1)a.push(t[r].webkitGetAsEntry());case 3:if(!(a.length>0)){e.next=23;break}if(!(null===(c=a.shift())||void 0===c?void 0:c.isFile)){e.next=12;break}return e.next=8,f(c);case 8:i=e.sent,n.push(i),e.next=21;break;case 12:if(!(null===c||void 0===c?void 0:c.isDirectory)){e.next=21;break}return e.t0=a.push,e.t1=a,e.t2=b.a,e.next=18,x(c.createReader());case 18:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 21:e.next=3;break;case 23:return e.abrupt("return",n);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,g(t);case 3:a=e.sent;case 4:if(!(a.length>0)){e.next=11;break}return n.push.apply(n,Object(b.a)(a)),e.next=8,g(t);case 8:a=e.sent,e.next=4;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){t.readEntries(e,n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m(t.dataTransfer.items);case 3:n=e.sent,i(!1),h(n[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("label",{htmlFor:d,className:"block w-full h-full group relative cursor-pointer rounded-md font-medium focus-within:outline-none",children:Object(p.jsxs)("div",{className:["w-full h-full flex items-center justify-center px-6 pt-5 pb-6 text-md","border-2 border-dashed rounded-md","hover:border-black hover:bg-primary","text-center",c?"border-black bg-primary":"bg-gray-100 border-gray-300"].join(" "),onDrop:function(e){return y.apply(this,arguments)},onDragOver:function(e){e.stopPropagation(),e.preventDefault(),i(!0)},onDragLeave:function(){return i(!1)},children:[Object(p.jsx)("input",{id:d,name:d,type:"file",className:"sr-only",onChange:function(e){var t,n=null===(t=e.currentTarget.files)||void 0===t?void 0:t[0];n&&h(n)},accept:"image/png, image/jpeg"}),Object(p.jsx)("p",{className:"hidden sm:block",children:"Click here or drag an image file"}),Object(p.jsx)("p",{className:"sm:hidden",children:"Tap here to load your picture"})]})})}var v=n(22);function m(e){for(var t=e.split(",")[0].split(":")[1].split(";")[0],n=atob(e.split(",")[1]),a=[],r=0;r<n.length;r+=1)a.push(n.charCodeAt(r));return new Blob([new Uint8Array(a)],{type:t})}function j(e,t){return new Promise((function(n,a){var r=e.src,c=e;c.onload=n,c.onerror=function(e){c.src=r,a(e)},c.src=t}))}var x="".concat("","/inpaint");function O(e,t,n){return g.apply(this,arguments)}function g(){return g=Object(o.a)(s.a.mark((function e(t,n,a){var r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("image",t),c=m(n),r.append("mask",c),void 0===a?r.append("sizeLimit","1080"):r.append("sizeLimit",a),e.next=7,fetch(x,{method:"POST",body:r}).then(function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.blob());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:return i=e.sent,e.abrupt("return",URL.createObjectURL(i));case 9:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(e){var t=e.value,n=e.onChange,a=e.label,r=e.min,c=e.max,i=((c||100)-(r||0))/100;return Object(p.jsxs)("div",{className:"inline-flex items-center space-x-4 text-black",children:[Object(p.jsx)("span",{children:a}),Object(p.jsx)("input",{className:["appearance-none rounded-lg h-4","bg-primary","w-24 md:w-auto"].join(" "),type:"range",step:i,min:r,max:c,value:t,onChange:function(e){e.preventDefault(),e.stopPropagation(),n(parseInt(e.currentTarget.value,10))}})]})}var y=n(23),k=[["1080","1080"],["2000","2k"],["Original","Original"]];function L(e){var t=e.value,n=e.originalSize,a=e.onChange;return Object(p.jsxs)(y.a,{className:"my-4 flex items-center space-x-2",value:t,onChange:a,children:[Object(p.jsx)(y.a.Label,{children:"Resize"}),k.map((function(e){return Object(p.jsx)(y.a.Option,{value:e[0],children:function(t){var a=t.checked;return Object(p.jsx)("div",{className:[a?"bg-gray-200":"border-opacity-10","border-3 px-2 py-2 rounded-md"].join(" "),children:Object(p.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(p.jsx)("div",{className:["rounded-full w-5 h-5 border-4 ",a?"border-primary bg-black":"border-black border-opacity-10"].join(" ")}),"Original"===e[0]?Object(p.jsx)("span",{children:"".concat(e[1],"(").concat(n,")")}):Object(p.jsx)("span",{children:e[1]})]})})}},e[0])}))]})}var E="rgba(189, 255, 1, 0.75)";function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;e.strokeStyle=n,e.lineCap="round",e.lineJoin="round",t.forEach((function(t){(null===t||void 0===t?void 0:t.pts.length)&&t.size&&(e.lineWidth=t.size,e.beginPath(),e.moveTo(t.pts[0].x,t.pts[0].y),t.pts.forEach((function(t){return e.lineTo(t.x,t.y)})),e.stroke())}))}function C(e){var t=e.file,n=Object(a.useState)(40),r=Object(l.a)(n,2),c=r[0],i=r[1],f=function(e){var t=Object(a.useState)(new Image),n=Object(l.a)(t,1)[0],r=Object(a.useState)(!1),c=Object(l.a)(r,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){return n.onload=function(){s(!0)},s(!1),n.src=URL.createObjectURL(e),function(){n.onload=null}}),[e,n]),[n,i]}(t),m=Object(l.a)(f,2),x=m[0],g=m[1],y=Object(a.useState)([]),k=Object(l.a)(y,2),E=k[0],C=k[1],S=Object(a.useState)(),D=Object(l.a)(S,2),z=D[0],H=D[1],M=Object(a.useState)((function(){return document.createElement("canvas")})),P=Object(l.a)(M,1)[0],R=Object(a.useState)([{pts:[]}]),T=Object(l.a)(R,2),W=T[0],Z=T[1],U=Object(a.useState)({x:-1,y:-1}),F=Object(l.a)(U,2),I=F[0],V=I.x,B=I.y,X=F[1],Y=Object(a.useState)(!1),A=Object(l.a)(Y,2),J=A[0],K=A[1],$=Object(a.useState)(!1),_=Object(l.a)($,2),G=_[0],q=_[1],Q=Object(a.useState)(!1),ee=Object(l.a)(Q,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),re=Object(l.a)(ae,2),ce=re[0],ie=re[1],se=Object(a.useState)(1),oe=Object(l.a)(se,2),le=oe[0],ue=oe[1],de=Object(v.a)("sizeLimit","1080"),pe=Object(l.a)(de,2),he=pe[0],be=pe[1],fe=Object(d.a)(),ve=Object(a.useCallback)((function(){if(z){z.clearRect(0,0,z.canvas.width,z.canvas.height);var e=E[E.length-1];(null===e||void 0===e?void 0:e.src)?z.drawImage(e,0,0):z.drawImage(x,0,0);var t=W[W.length-1];N(z,[t])}}),[z,W,x,E]),me=Object(a.useCallback)((function(){if(!(null===z||void 0===z?void 0:z.canvas.width)||!(null===z||void 0===z?void 0:z.canvas.height))throw new Error("canvas has invalid size");P.width=null===z||void 0===z?void 0:z.canvas.width,P.height=null===z||void 0===z?void 0:z.canvas.height;var e=P.getContext("2d");if(!e)throw new Error("could not retrieve mask canvas");N(e,W,"white")}),[null===z||void 0===z?void 0:z.canvas.height,null===z||void 0===z?void 0:z.canvas.width,W,P]);Object(a.useEffect)((function(){if((null===z||void 0===z?void 0:z.canvas)&&g){z.canvas.width=x.naturalWidth,z.canvas.height=x.naturalHeight;var e=fe.width/x.naturalWidth,t=(fe.height-200)/x.naturalHeight;ue(e<1||t<1?Math.min(e,t):1),ve()}}),[null===z||void 0===z?void 0:z.canvas,ve,x,g,fe]),Object(a.useEffect)((function(){var e=null===z||void 0===z?void 0:z.canvas;if(e){var n=function(e){X({x:e.pageX,y:e.pageY})},a=function(e,t){W[W.length-1].pts.push({x:e,y:t}),ve()},r=function(e){var t=e.offsetX,n=e.offsetY;a(t,n)},i=function(){var n=Object(o.a)(s.a.mark((function n(){var a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(x.src){n.next=2;break}return n.abrupt("return");case 2:return ne(!0),e.removeEventListener("mousemove",r),window.removeEventListener("mouseup",i),me(),n.prev=6,n.next=9,O(t,P.toDataURL(),he);case 9:if(a=n.sent){n.next=12;break}throw new Error("empty response");case 12:return c=new Image,n.next=15,j(c,a);case 15:E.push(c),W.push({pts:[]}),C(Object(b.a)(E)),Z(Object(b.a)(W)),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(6),alert(n.t0.message?n.t0.message:n.t0.toString());case 24:ne(!1),ve();case 26:case"end":return n.stop()}}),n,null,[[6,21]])})));return function(){return n.apply(this,arguments)}}();window.addEventListener("mousemove",n);var l=function(t){t.preventDefault(),t.stopPropagation();var n=W[W.length-1],a=e.getBoundingClientRect();n.pts.push({x:(t.touches[0].clientX-a.x)/le,y:(t.touches[0].clientY-a.y)/le}),ve()},u=function(t){if(x.src){W[W.length-1].size=c,e.addEventListener("mousemove",r),window.addEventListener("mouseup",i);var n=e.getBoundingClientRect(),s=(t.touches[0].clientX-n.x)/le,o=(t.touches[0].clientY-n.y)/le;a(s,o)}};return e.addEventListener("touchstart",u),e.addEventListener("touchmove",l),e.addEventListener("touchend",i),e.onmouseenter=function(){return K(!0)},e.onmouseleave=function(){return K(!1)},e.onmousedown=function(t){x.src&&(W[W.length-1].size=c,e.addEventListener("mousemove",r),window.addEventListener("mouseup",i),a(t.offsetX,t.offsetY))},function(){e.removeEventListener("mousemove",r),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i),e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",l),e.removeEventListener("touchend",i),e.onmouseenter=null,e.onmouseleave=null,e.onmousedown=null}}}),[c,z,t,ve,W,me,P,x.src,E,x.naturalHeight,x.naturalWidth,le,he]);var je=Object(a.useCallback)((function(){var e=W;e.pop(),e.pop(),Z([].concat(Object(b.a)(e),[{pts:[]}]));var t=E;t.pop(),C(Object(b.a)(t))}),[W,E]);Object(a.useEffect)((function(){var e=function(e){E.length&&((e.metaKey||e.ctrlKey)&&"z"===e.key&&(e.preventDefault(),je()))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[E,je]);return Object(p.jsxs)("div",{className:["flex flex-col items-center",te?"animate-pulse-fast pointer-events-none transition-opacity":"",1!==le?"pb-24":""].join(" "),style:{height:1!==le?x.naturalHeight*le:void 0},children:[Object(p.jsxs)("div",{className:[1!==le?"":"relative"].join(" "),style:{transform:"scale(".concat(le,")"),transformOrigin:"top center"},children:[Object(p.jsx)("canvas",{className:"rounded-sm",style:J?{cursor:"none"}:{},ref:function(e){if(e&&!z){var t=e.getContext("2d");t&&H(t)}}}),Object(p.jsx)("div",{className:["absolute top-0 right-0 pointer-events-none","overflow-hidden","border-primary",ce?"border-l-4":""].join(" "),style:{width:G?"".concat(Math.round(x.naturalWidth),"px"):"0px",height:x.naturalHeight,transitionProperty:"width, height",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"},children:Object(p.jsx)("img",{className:"absolute right-0",src:x.src,alt:"original",width:"".concat(x.naturalWidth,"px"),height:"".concat(x.naturalHeight,"px"),style:{width:"".concat(x.naturalWidth,"px"),height:"".concat(x.naturalHeight,"px"),maxWidth:"none"}})})]}),J&&Object(p.jsx)("div",{className:"hidden sm:block absolute rounded-full border border-primary bg-primary bg-opacity-80 pointer-events-none",style:{width:"".concat(c*le,"px"),height:"".concat(c*le,"px"),left:"".concat(V,"px"),top:"".concat(B,"px"),transform:"translate(-50%, -50%)"}}),Object(p.jsxs)("div",{className:["flex items-center w-full max-w-5xl","space-x-3 sm:space-x-5","p-6",1!==le?"absolute bottom-0 justify-evenly":"relative justify-evenly sm:justify-between"].join(" "),children:[Object(p.jsx)(L,{value:he,onChange:function(e){be(e)},originalSize:"".concat(x.naturalWidth,"x").concat(x.naturalHeight)}),Object(p.jsx)(w,{label:Object(p.jsx)("span",{children:Object(p.jsx)("span",{className:"hidden md:inline",children:"Brush"})}),min:10,max:150,value:c,onChange:i}),E.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{icon:Object(p.jsx)("svg",{width:"19",height:"9",viewBox:"0 0 19 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",children:Object(p.jsx)("path",{d:"M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM1 8H0V9H1V8ZM8 9C8.55228 9 9 8.55229 9 8C9 7.44771 8.55228 7 8 7V9ZM16.5963 7.42809C16.8327 7.92721 17.429 8.14016 17.9281 7.90374C18.4272 7.66731 18.6402 7.07103 18.4037 6.57191L16.5963 7.42809ZM16.9468 5.83205L17.8505 5.40396L16.9468 5.83205ZM0 1V8H2V1H0ZM1 9H8V7H1V9ZM1.66896 8.74329L6.66896 4.24329L5.33104 2.75671L0.331035 7.25671L1.66896 8.74329ZM16.043 6.26014L16.5963 7.42809L18.4037 6.57191L17.8505 5.40396L16.043 6.26014ZM6.65079 4.25926C9.67554 1.66661 14.3376 2.65979 16.043 6.26014L17.8505 5.40396C15.5805 0.61182 9.37523 -0.710131 5.34921 2.74074L6.65079 4.25926Z",fill:"currentColor"})}),onClick:je}),Object(p.jsx)(h,{icon:Object(p.jsx)(u.c,{className:"w-6 h-6"}),onDown:function(e){e.preventDefault(),ie(!0),q(!0)},onUp:function(){q(!1),setTimeout((function(){return ie(!1)}),300)},children:fe.width>640?"Original":void 0})]}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)(h,{primary:!0,icon:Object(p.jsx)(u.b,{className:"w-6 h-6"}),disabled:!E.length,onClick:function(){var e=t.name.replace(/(\.[\w\d_-]+)$/i,"_cleanup$1");!function(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout((function(){n.remove()}),100)}(E[E.length-1].currentSrc,e)},children:fe.width>640?"Download":void 0})]})]})}var S=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(d.a)();return Object(p.jsxs)("div",{className:"h-full full-visible-h-safari flex flex-col",children:[Object(p.jsx)("header",{className:"relative z-10 flex px-5 pt-3 justify-center sm:justify-between items-center sm:items-start",children:n?Object(p.jsx)(h,{icon:Object(p.jsx)(u.a,{className:"w-6 h-6"}),onClick:function(){r(void 0)},children:c.width>640?"Start new":void 0}):Object(p.jsx)(p.Fragment,{})}),Object(p.jsx)("main",{className:["h-full flex flex-1 flex-col sm:items-center sm:justify-center overflow-hidden","items-center justify-center","pb-20"].join(" "),children:n?Object(p.jsx)(C,{file:n}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:["flex flex-col sm:flex-row items-center","space-y-5 sm:space-y-0 sm:space-x-6 p-5 pt-0 pb-10"].join(" "),children:Object(p.jsx)("div",{className:"max-w-xl flex flex-col items-center sm:items-start p-0 m-0 space-y-5",children:Object(p.jsxs)("h1",{className:"text-center sm:text-left text-xl sm:text-3xl",children:["Image inpainting powered by \ud83e\udd99",Object(p.jsx)("u",{children:Object(p.jsx)("a",{href:"https://github.com/saic-mdal/lama",children:"LaMa"})})]})})}),Object(p.jsx)("div",{className:"h-20 sm:h-52 px-4 w-full",style:{maxWidth:"800px"},children:Object(p.jsx)(f,{onSelection:function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})})]})})]})};c.a.render(Object(p.jsx)(S,{}),document.getElementById("root"))}},[[20,1,2]]]);