(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(14),c=n.n(a),i=n(9),l=n(7),s=n(17),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(28),n(30);var h=n(8),f={searchField:""},b={isPending:!1,robots:[],error:""},p=n(2),m=n(3),v=n(5),E=n(4),g=n(6),O=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-lightest-blue br3 pa3 dib ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,t,". ",n),o.a.createElement("p",null,r)))},w=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e){return o.a.createElement(O,{key:e.id,id:e.id,name:e.name,email:e.email})}))},y=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba bg-light-yellow",type:"search",placeholder:"Search robots",onChange:t}),";")},j=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"340px"}},t)},C=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={error:!1},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?o.a.createElement("h2",null,"Oops an error happened!!"):this.props.children}}]),t}(r.Component),R=(n(32),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(v.a)(this,Object(E.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("CounterButton"),o.a.createElement("button",{onClick:this.updateCount,color:this.props.color},this.state.count)}}]),t}(r.PureComponent)),S=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).shouldComponentUpdate=function(e,t){return!1},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("Header"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"Robot friends"),o.a.createElement(R,null))}}]),t}(r.Component),k=function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots;if(e.isPending||0===r.length)return o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement("h2",null,"Loading robots ..."));var a=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement(S,null),o.a.createElement(y,{searchChange:n}),o.a.createElement(j,null,o.a.createElement(C,null,o.a.createElement(w,{robots:a}))))}}]),t}(r.Component),_=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(k),T=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(h.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(h.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(h.a)({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(h.a)({},e,{isPending:!1,error:t.payload});default:return e}}}),N=Object(l.d)(T,Object(l.a)(s.a));c.a.render(o.a.createElement(i.a,{store:N},o.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");u?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):d(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.de9c52d9.chunk.js.map