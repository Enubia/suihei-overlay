(function(e){function t(t){for(var o,u,a=t[0],c=t[1],s=t[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"40bc3424"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=u(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/suihei-overlay/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"57ba":function(e,t,n){},b19f:function(e,t,n){},c11e:function(e,t,n){"use strict";n("57ba")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u=(n("c11e"),n("2877")),a={},c=Object(u["a"])(a,r,i,!1,null,"21760ab0",null),s=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex justify-center bg-gray-200 w-full",on:{contextmenu:function(t){return t.preventDefault(),e.openSettings(t)}}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])},p=[],d=n("9ab4"),b=n("1b40"),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.configWindow=null,t}return Object(d["b"])(t,e),t.prototype.openSettings=function(){var e=this,t="menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=700,height=400";this.configWindow=window.open("./suihei-overlay/#/settings","Suihei Config",t),this.configWindow&&(this.configWindow.focus(),this.configWindow.onbeforeunload=function(){e.configWindow=null})},t=Object(d["a"])([Object(b["a"])({name:"Overlay",components:{}})],t),t}(b["b"]),v=h,g=v,m=Object(u["a"])(g,f,p,!1,null,"09487e74",null),y=m.exports;o["a"].use(l["a"]);var w=[{path:"/",name:"Overlay",component:y},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))}}],O=new l["a"]({routes:w}),j=O,x=n("2f62");o["a"].use(x["a"]);var S=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("b19f");o["a"].config.productionTip=!1,new o["a"]({router:j,store:S,render:function(e){return e(s)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d7194882.js.map