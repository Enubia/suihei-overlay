(function(e){function t(t){for(var o,a,s=t[0],u=t[1],c=t[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/suihei-overlay/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"57ba":function(e,t,n){},"90ad":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4zjOaXUAAAAGZJREFUOE+ljEEOACEIA92f+f9XaQ822EUgajJJC4xtvu+BPnEXFSBff7Bk5N8yw8pgW2aojLwdRHhy+YOTjMzhiUgGDB6ZjMyiVGTAgeV0rB1wqMusL7iIjrVb0mPtypMMGC7k1geoEhcn0OEM6wAAAABJRU5ErkJggg=="},b19f:function(e,t,n){},c11e:function(e,t,n){"use strict";n("57ba")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("c11e"),n("2877")),s={},u=Object(a["a"])(s,r,i,!1,null,"21760ab0",null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return Object.keys(e.overlayData).length>0?o("div",{staticClass:"flex justify-center w-full",on:{contextmenu:function(t){return t.preventDefault(),e.openSettings(t)}}},[e._v(" "+e._s(e.overlayData)+" ")]):o("div",{staticClass:"flex justify-center inactive w-full",on:{contextmenu:function(t){return t.preventDefault(),e.openSettings(t)}}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])},p=[],d=n("9ab4"),h=n("1b40"),g={offsetWidth:700,offsetHeight:400},v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.configWindow=null,t.overlayData={},t.isLocked=!1,t}return Object(d["b"])(t,e),t.prototype.created=function(){var e=this;document.addEventListener("onOverlayDataUpdate",(function(t){e.overlayData=t.detail})),document.addEventListener("onOverlayStateUpdate",(function(e){e.detail.isLocked?document.documentElement.classList.remove("resizable"):document.documentElement.classList.add("resizable")}))},t.prototype.openSettings=function(){var e=this,t=localStorage.getItem("suihei-overlay"),n=g;t&&(n=JSON.parse(t));var o=n.offsetWidth,r=n.offsetHeight,i="menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width="+(o||700)+",height="+(r||400),a="./#/settings";this.configWindow=window.open(a,"Suihei Config",i),this.configWindow&&(this.configWindow.focus(),this.configWindow.onbeforeunload=function(){e.configWindow=null})},t=Object(d["a"])([Object(h["a"])({name:"Overlay",components:{}})],t),t}(h["b"]),b=v,A=b,y=Object(a["a"])(A,f,p,!1,null,"333c98d7",null),m=y.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-yellow-100 settings"},[n("h1",{staticClass:"text-3xl"},[e._v("Settings page")])])}],j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(d["b"])(t,e),t.prototype.created=function(){window.addEventListener("resize",this.setWindowSize)},t.prototype.destroyed=function(){window.removeEventListener("resize",this.setWindowSize)},t.prototype.setWindowSize=function(e){e.preventDefault(),setTimeout((function(){var e=document.querySelector("#app"),t=e.offsetWidth,n=e.offsetHeight;localStorage.setItem("suihei-overlay",JSON.stringify({offsetWidth:t,offsetHeight:n}))}),300)},t=Object(d["a"])([Object(h["a"])({name:"Settings"})],t),t}(h["b"]),S=j,E=S,x=Object(a["a"])(E,w,O,!1,null,null,null),_=x.exports;o["a"].use(l["a"]);var W=[{path:"/",name:"Overlay",component:m},{path:"/settings",name:"Settings",component:_}],B=new l["a"]({routes:W}),U=B,z=n("2f62");o["a"].use(z["a"]);var C=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("b19f"),n("90ad");o["a"].config.productionTip=!1,new o["a"]({router:U,store:C,render:function(e){return e(c)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6468ba16.js.map