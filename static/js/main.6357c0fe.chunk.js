(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},26:function(e,n,t){e.exports=t(41)},34:function(e,n,t){},36:function(e,n,t){},38:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),r=t(17),c=t.n(r),i=t(12),l=t(5),s=t(23),u="OWNER_NAME";var m={ownerName:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return Object(s.a)({},e,{ownerName:n.payload.ownerName});default:return e}},f=Object(l.b)({ownerNameReducer:d}),p=Object(l.c)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=t(46),h=(t(34),t(6)),w=t(7),g=t(9),v=t(8),O=t(10),E=t(44),N=t(45),y=t(21),j=t.n(y),k=t(43),_=function(e){function n(){return Object(h.a)(this,n),Object(g.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(O.a)(n,e),Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.getOwnerName()}},{key:"render",value:function(){return a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),a.a.createElement("h1",null,"Hello  "," ",this.props.ownerName),a.a.createElement(k.a,{className:"btn btn-info",to:"/about"},"Go to About"))}}]),n}(o.Component),A=Object(i.b)(function(e){return{ownerName:e.ownerNameReducer.ownerName}},function(e){return{getOwnerName:function(){return e({type:u,payload:{ownerName:"Igor Yar 123"}})}}})(_),T=t(24),R=function(e){var n=e.className,t=void 0===n?null:n,o=e.label,r=void 0===o?"This is a button":o,c=e.type,i=void 0===c?"button":c,l=Object(T.a)(e,["className","label","type"]);return a.a.createElement("button",Object.assign({className:"btn "+t,type:i},l),r)},W=function(e){function n(){return Object(h.a)(this,n),Object(g.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(O.a)(n,e),Object(w.a)(n,[{key:"goToHome",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return a.a.createElement(o.Fragment,null,a.a.createElement("h1",null,"About Page"),a.a.createElement(R,{style:{margin:"auto"},label:"Go back to home",className:"btn-info",onClick:function(){e.goToHome()}}))}}]),n}(o.Component),C=(t(36),t(38),function(e){function n(){return Object(h.a)(this,n),Object(g.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(O.a)(n,e),Object(w.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E.a,null,a.a.createElement(N.a,{exact:!0,path:"/",component:A}),a.a.createElement(N.a,{exact:!0,path:"/about",component:W}),a.a.createElement(N.a,{component:function(){return a.a.createElement("div",null,"404 Not found ")}})))}}]),n}(o.Component)),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(i.a,{store:p},a.a.createElement(b.a,{basename:"/test"},a.a.createElement(C,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/test",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/test","/service-worker.js");S?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):x(n,e)})}}()}},[[26,2,1]]]);
//# sourceMappingURL=main.6357c0fe.chunk.js.map