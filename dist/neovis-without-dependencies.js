!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/weak-map"),require("neo4j-driver"),require("vis-network/standalone"),require("@babel/runtime-corejs3/core-js-stable/object/freeze"),require("deepmerge")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","@babel/runtime-corejs3/core-js-stable/instance/filter","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","@babel/runtime-corejs3/core-js-stable/object/define-properties","@babel/runtime-corejs3/core-js-stable/object/define-property","@babel/runtime-corejs3/core-js-stable/instance/slice","@babel/runtime-corejs3/core-js-stable/array/from","@babel/runtime-corejs3/core-js/get-iterator-method","@babel/runtime-corejs3/helpers/typeof","@babel/runtime-corejs3/helpers/asyncToGenerator","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/helpers/defineProperty","@babel/runtime-corejs3/helpers/classPrivateFieldSet","@babel/runtime-corejs3/helpers/classPrivateFieldGet","core-js/modules/es.function.name.js","core-js/modules/es.array.iterator.js","core-js/modules/es.object.to-string.js","core-js/modules/es.promise.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js-stable/symbol","@babel/runtime-corejs3/core-js-stable/array/is-array","@babel/runtime-corejs3/core-js-stable/object/keys","@babel/runtime-corejs3/core-js-stable/instance/for-each","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/core-js-stable/object/values","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/core-js-stable/weak-map","neo4j-driver","vis-network/standalone","@babel/runtime-corejs3/core-js-stable/object/freeze","deepmerge"],r):"object"==typeof exports?exports.NeoVis=r(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/helpers/classPrivateFieldSet"),require("@babel/runtime-corejs3/helpers/classPrivateFieldGet"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/weak-map"),require("neo4j-driver"),require("vis-network/standalone"),require("@babel/runtime-corejs3/core-js-stable/object/freeze"),require("deepmerge")):e.NeoVis=r(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(self,(function(e,r,t,n,o,s,i,a,c,l,u,b,d,j,p,f,v,h,m,y,g,_,x,k,q,w,E,O,C,N,S,T,A,L,P,I,F){return(()=>{"use strict";var V={915:e=>{e.exports=a},6:e=>{e.exports=q},192:e=>{e.exports=T},344:e=>{e.exports=r},207:e=>{e.exports=E},434:e=>{e.exports=O},921:e=>{e.exports=i},86:e=>{e.exports=o},219:e=>{e.exports=s},373:e=>{e.exports=I},382:e=>{e.exports=t},105:e=>{e.exports=n},708:r=>{r.exports=e},322:e=>{e.exports=w},280:e=>{e.exports=C},936:e=>{e.exports=N},952:e=>{e.exports=S},673:e=>{e.exports=k},602:e=>{e.exports=A},465:e=>{e.exports=c},764:e=>{e.exports=u},698:e=>{e.exports=b},893:e=>{e.exports=f},369:e=>{e.exports=p},938:e=>{e.exports=d},845:e=>{e.exports=j},418:e=>{e.exports=l},398:e=>{e.exports=x},441:e=>{e.exports=h},301:e=>{e.exports=v},853:e=>{e.exports=m},701:e=>{e.exports=y},259:e=>{e.exports=g},182:e=>{e.exports=_},53:e=>{e.exports=F},235:e=>{e.exports=L},903:e=>{e.exports=P}},M={};function R(e){var r=M[e];if(void 0!==r)return r.exports;var t=M[e]={exports:{}};return V[e](t,t.exports,R),t.exports}R.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return R.d(r,{a:r}),r},R.d=(e,r)=>{for(var t in r)R.o(r,t)&&!R.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},R.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),R.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var D={};return(()=>{R.r(D),R.d(D,{NEOVIS_ADVANCED_CONFIG:()=>he,NEOVIS_DEFAULT_CONFIG:()=>ve,NeoVis:()=>ge,NeoVisEvents:()=>ce,default:()=>we,objectToTitleHtml:()=>ke,objectToTitleString:()=>qe});var e=R(708),r=R.n(e),t=R(344),n=R.n(t),o=R(382),s=R.n(o),i=R(105),a=R.n(i),c=R(86),l=R.n(c),u=R(219),b=R.n(u),d=R(921),j=R.n(d),p=R(915),f=R.n(p),v=R(465),h=R.n(v),m=R(418),y=R.n(m),g=R(764),_=R.n(g),x=R(698),k=R.n(x),q=R(938),w=R.n(q),E=R(845),O=R.n(E),C=R(369),N=R.n(C),S=R(893),T=R.n(S),A=(R(301),R(441),R(853),R(701),R(259),R(182),R(398)),L=R.n(A),P=R(673),I=R.n(P),F=R(322),V=R.n(F),M=R(207),U=R.n(M),H=R(434),z=R.n(H),G=R(280),W=R.n(G),B=R(936),J=R.n(B),Q=R(952),Y=R.n(Q),$=R(6),K=R.n($),X=R(192),Z=R.n(X),ee=R(602),re=R.n(ee),te=R(235),ne=R.n(te),oe=R(903),se={neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",driverConfig:{encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES",maxConnectionPoolSize:100,connectionAcquisitionTimeout:1e4,disableLosslessIntegers:!0}},visJs:{nodes:{font:{size:26,strokeWidth:7},scaling:{}},edges:{arrows:{to:{enabled:!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:!1,sortMethod:"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}}},ie=R(373);function ae(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var ce=R.n(ie)()({CompletionEvent:"completed",ClickNodeEvent:"clickNode",ClickEdgeEvent:"clickEdge",ErrorEvent:"error"}),le=function(){function e(){var r;k()(this,e),this._handlers=(r={},O()(r,ce.CompletionEvent,[]),O()(r,ce.ErrorEvent,[]),O()(r,ce.ClickNodeEvent,[]),O()(r,ce.ClickEdgeEvent,[]),r)}return w()(e,[{key:"register",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(r)}},{key:"generateEvent",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var t,n=function(e,r){var t=void 0!==I()&&h()(e)||e["@@iterator"];if(!t){if(K()(e)||(t=function(e,r){var t;if(e){if("string"==typeof e)return ae(e,r);var n=j()(t=Object.prototype.toString.call(e)).call(t,8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?f()(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){a=!0,s=e},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw s}}}}(this._handlers[e]);try{for(n.s();!(t=n.n()).done;)(0,t.value)(r)}catch(e){n.e(e)}finally{n.f()}}}]),e}(),ue=R(53),be=R.n(ue);function de(e,r){var t=void 0!==I()&&h()(e)||e["@@iterator"];if(!t){if(K()(e)||(t=function(e,r){var t;if(e){if("string"==typeof e)return je(e,r);var n=j()(t=Object.prototype.toString.call(e)).call(t,8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?f()(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){a=!0,s=e},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw s}}}}function je(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function pe(e,t){var o=V()(e);if(r()){var i=r()(e);t&&(i=n()(i).call(i,(function(r){return s()(e,r).enumerable}))),o.push.apply(o,i)}return o}function fe(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)U()(t=pe(Object(n),!0)).call(t,(function(r){O()(e,r,n[r])}));else if(a())l()(e,a()(n));else{var o;U()(o=pe(Object(n))).call(o,(function(r){b()(e,r,s()(n,r))}))}}return e}var ve=I()(),he=I()(),me=new(re()),ye=new(re()),ge=function(){function e(r){k()(this,e),O()(this,"_data",{nodes:new oe.DataSet,edges:new oe.DataSet}),me.set(this,{writable:!0,value:null}),ye.set(this,{writable:!0,value:new le}),this._init(r),this._consoleLog(r),this._consoleLog(se)}var r,t,n,o;return w()(e,[{key:"nodes",get:function(){return this._data.nodes}},{key:"edges",get:function(){return this._data.edges}},{key:"network",get:function(){return T()(this,me)}},{key:"_consoleLog",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==r||this._config.console_debug)&&console[r](e)}},{key:"_init",value:function(e){var r,t,n,o,s,i,a,c,l;if(e.labels&&e.labels[ve])for(var u=0,b=V()(e.labels);u<b.length;u++){var d=b[u];e=fe(fe({},e),{},{labels:fe(fe({},e.labels),{},O()({},d,fe(fe({},e.labels[ve]),e.labels[d])))})}if(e.relationships&&e.relationships[ve])for(var j=0,p=V()(e.relationships);j<p.length;j++){var f=p[j];e=fe(fe({},e),{},{relationships:fe(fe({},e.relationships),{},O()({},f,fe(fe({},e.relationships[ve]),e.relationships[f])))})}this._config=e,this._driver=e.neo4j instanceof ne().driver?e.neo4j:ne().driver(null!==(r=null===(t=e.neo4j)||void 0===t?void 0:t.server_url)&&void 0!==r?r:se.neo4jUri,ne().auth.basic(null!==(n=null===(o=e.neo4j)||void 0===o?void 0:o.server_user)&&void 0!==n?n:se.neo4j.neo4jUser,null!==(s=null===(i=e.neo4j)||void 0===i?void 0:i.server_password)&&void 0!==s?s:se.neo4j.neo4jPassword),be()(se.neo4j.driverConfig,null!==(a=null===(c=e.neo4j)||void 0===c?void 0:c.driverConfig)&&void 0!==a?a:{})),this._database=e.server_database,this._query=null!==(l=e.initial_cypher)&&void 0!==l?l:se.neo4j.initialQuery,this._container=document.getElementById(e.container_id)}},{key:"_runCypher",value:(o=_()(L().mark((function e(r,t){var n,o,s,i,a,c;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._driver.session(this._database&&{database:this._database}),o=[],e.prev=2,e.next=5,n.readTransaction((function(e){return e.run(r,{id:t})}));case 5:s=e.sent,i=de(s.records);try{for(i.s();!(a=i.n()).done;)c=a.value,U()(c).call(c,(function(e){o.push(e)}))}catch(e){i.e(e)}finally{i.f()}case 8:return e.prev=8,e.next=11,n.close();case 11:return e.finish(8);case 12:if(0!==o.length){e.next=16;break}return e.abrupt("return",void 0);case 16:if(1!==o.length){e.next=18;break}return e.abrupt("return",o.pop());case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,this,[[2,,8,12]])}))),function(e,r){return o.apply(this,arguments)})},{key:"_runFunction",value:function(e,r){if("function"==typeof e)return e(r);throw new Error("Function type property field must be a function")}},{key:"_buildStaticObject",value:function(e,r){if(e&&"object"===y()(e))for(var t=0,n=V()(e);t<n.length;t++){var o=n[t],s=e[o];s&&"object"===y()(s)?(r[o]||(r[o]={}),this._buildStaticObject(s,r[o])):r[o]=s}}},{key:"_buildPropertyNameObject",value:function(e,r,t){if(e&&"object"===y()(e))for(var n=0,o=V()(e);n<o.length;n++){var s=o[n],i=e[s];if(i&&"object"===y()(i))r[s]||(r[s]={}),this._buildStaticObject(i,r[s],t);else{var a=e[s];r[s]=xe(a,t)}}}},{key:"_buildCypherObject",value:(n=_()(L().mark((function e(r,t,n){var o,s,i,a;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||"object"!==y()(r)){e.next=17;break}o=0,s=V()(r);case 2:if(!(o<s.length)){e.next=17;break}if(i=s[o],!(a=r[i])||"object"!==y()(a)){e.next=11;break}return t[i]||(t[i]={}),e.next=9,this._buildCypherObject(a,t[i],n);case 9:e.next=14;break;case 11:return e.next=13,this._runCypher(a,n);case 13:t[i]=e.sent;case 14:o++,e.next=2;break;case 17:case"end":return e.stop()}}),e,this)}))),function(e,r,t){return n.apply(this,arguments)})},{key:"_buildFunctionObject",value:function(e,r,t){if(e&&"object"===y()(e))for(var n=0,o=V()(e);n<o.length;n++){var s=o[n],i=e[s];i&&"object"===y()(i)?(r[s]||(r[s]={}),this._buildFunctionObject(i,r[s],t)):r[s]=this._runFunction(i,t)}}},{key:"buildNodeVisObject",value:(t=_()(L().mark((function e(r){var t,n,o,s,i,a,c;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n=r.labels[0],o=this._config&&this._config.labels&&(this._config.labels[n]||this._config.labels[ve]),s=o&&o[he],t.id=r.identity,t.raw=r,this._buildPropertyNameObject(o,t,r),void 0===s||"object"==y()(s)){e.next=9;break}throw new Error("Advanced config should be an object. See documentation for details.");case 9:if(!s||"object"!==y()(s)){e.next=17;break}return i=s.static,this._buildStaticObject(i,t),a=s.cypher,e.next=15,this._buildCypherObject(a,t,t.id);case 15:c=s.function,this._buildFunctionObject(c,t,r);case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"buildEdgeVisObject",value:(r=_()(L().mark((function e(r){var t,n,o,s,i,a;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._config&&this._config.relationships&&(this._config.relationships[r.type]||this._config.relationships[ve]),n=t&&t[he],(o={}).id=r.identity,o.from=r.start,o.to=r.end,o.raw=r,this._buildPropertyNameObject(t,o,r),void 0===n||"object"==y()(n)){e.next=10;break}throw new Error("Advanced config should be an object. See documentation for details.");case 10:if(!n||"object"!==y()(n)){e.next=18;break}return s=n.static,this._buildStaticObject(s,o),i=n.cypher,e.next=16,this._buildCypherObject(i,o,o.id);case 16:a=n.function,this._buildFunctionObject(a,o,r);case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"render",value:function(e){var r,t=this,n=0,o=e||this._query,s=this._driver.session(this._database&&{database:this._database}),i=[];s.run(o,{limit:30}).subscribe({onNext:function(e){var r;n++,t._consoleLog("CLASS NAME"),t._consoleLog(e&&e.constructor.name),t._consoleLog(e);var o=z()(r=W()(e.toObject())).call(r,function(){var e=_()(L().mark((function e(r){var n,o,s,i,a,c,l,u,b,d,j,p;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._consoleLog("Constructor:"),t._consoleLog(r&&r.constructor.name),!(r instanceof ne().types.Node)){e.next=9;break}return e.next=5,t.buildNodeVisObject(r);case 5:n=e.sent;try{t._data.nodes.update(n)}catch(e){t._consoleLog(e,"error")}e.next=89;break;case 9:if(!(r instanceof ne().types.Relationship)){e.next=16;break}return e.next=12,t.buildEdgeVisObject(r);case 12:o=e.sent,t._data.edges.update(o),e.next=89;break;case 16:if(!(r instanceof ne().types.Path)){e.next=59;break}return t._consoleLog("PATH"),t._consoleLog(r),e.next=21,t.buildNodeVisObject(r.start);case 21:return s=e.sent,e.next=24,t.buildNodeVisObject(r.end);case 24:i=e.sent,t._data.nodes.update(s),t._data.nodes.update(i),a=de(r.segments),e.prev=28,a.s();case 30:if((c=a.n()).done){e.next=49;break}return l=c.value,e.t0=t._data.nodes,e.next=35,t.buildNodeVisObject(l.start);case 35:return e.t1=e.sent,e.t0.update.call(e.t0,e.t1),e.t2=t._data.nodes,e.next=40,t.buildNodeVisObject(l.end);case 40:return e.t3=e.sent,e.t2.update.call(e.t2,e.t3),e.t4=t._data.edges,e.next=45,t.buildEdgeVisObject(l.relationship);case 45:e.t5=e.sent,e.t4.update.call(e.t4,e.t5);case 47:e.next=30;break;case 49:e.next=54;break;case 51:e.prev=51,e.t6=e.catch(28),a.e(e.t6);case 54:return e.prev=54,a.f(),e.finish(54);case 57:e.next=89;break;case 59:if(!(r instanceof Array)){e.next=89;break}u=de(r),e.prev=61,u.s();case 63:if((b=u.n()).done){e.next=81;break}if(d=b.value,t._consoleLog("Array element constructor:"),t._consoleLog(d&&d.constructor.name),!(d instanceof ne().types.Node)){e.next=74;break}return e.next=70,t.buildNodeVisObject(d);case 70:j=e.sent,t._data.nodes.update(j),e.next=79;break;case 74:if(!(d instanceof ne().types.Relationship)){e.next=79;break}return e.next=77,t.buildEdgeVisObject(d);case 77:p=e.sent,t._data.edges.update(p);case 79:e.next=63;break;case 81:e.next=86;break;case 83:e.prev=83,e.t7=e.catch(61),u.e(e.t7);case 86:return e.prev=86,u.f(),e.finish(86);case 89:case"end":return e.stop()}}),e,null,[[28,51,54,57],[61,83,86,89]])})));return function(r){return e.apply(this,arguments)}}());i.push(J().all(o))},onCompleted:(r=_()(L().mark((function e(){var r,o,a,c,l;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J().all(i);case 2:return e.next=4,s.close();case 4:(null===(r=T()(t,me))||void 0===r?void 0:r.body.data.nodes.length)>0||(a=be()(se.visJs,null!==(o=t._config.visConfig)&&void 0!==o?o:{}),c=t._container,t._consoleLog(t._data.nodes),t._consoleLog(t._data.edges),N()(t,me,new oe.Network(c,t._data,a))),t._consoleLog("completed"),Y()((function(){T()(t,me).stopSimulation()}),1e4),T()(t,ye).generateEvent(ce.CompletionEvent,{record_count:n}),l=t,T()(t,me).on("click",(function(e){if(e.nodes.length>0){var r=this.getNodeAt(e.pointer.DOM);T()(l,ye).generateEvent(ce.ClickNodeEvent,{nodeId:r,node:l._data.nodes.get(r)})}else if(e.edges.length>0){var t=this.getEdgeAt(e.pointer.DOM);T()(l,ye).generateEvent(ce.ClickEdgeEvent,{edgeId:t,edge:l._data.edges.get(t)})}}));case 10:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),onError:function(e){t._consoleLog(e,"error"),T()(t,ye).generateEvent(ce.ErrorEvent,{error_msg:e})}})}},{key:"clearNetwork",value:function(){this._data.nodes.clear(),this._data.edges.clear()}},{key:"registerOnEvent",value:function(e,r){T()(this,ye).register(e,r)}},{key:"reinit",value:function(e){this._init(e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){T()(this,me).stopSimulation(),this._consoleLog("Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),this._query=e,this.render()}},{key:"updateWithCypher",value:function(e){this.render(e)}}]),e}();function _e(e,r){var t;if(K()(r)&&r.length>1){var n,o="<strong>".concat(e,":</strong><br /><ul>"),s=de(r);try{for(s.s();!(n=s.n()).done;){var i=n.value;o+="<li>".concat(i,"</li>")}}catch(e){s.e(e)}finally{s.f()}return o+"</ul>"}return Z()(t="<strong>".concat(e,":</strong> ")).call(t,r,"<br>")}function xe(e,r){if("object"===y()(null==r?void 0:r.properties))return r.properties[e];throw new Error("Neo4j object is not properly constructed")}function ke(e,r){var t="";r||(r=V()(e.properties));var n,o=de(r);try{for(o.s();!(n=o.n()).done;){var s=n.value,i=xe(s,e);i&&(t+=_e(s,i))}}catch(e){o.e(e)}finally{o.f()}var a=document.createElement("div");return a.innerHTML=t,a}function qe(e,r){var t="";r||(r=V()(e.properties));var n,o=de(r);try{for(o.s();!(n=o.n()).done;){var s,i=n.value,a=xe(i,e);a&&(t+=Z()(s="".concat(i,": ")).call(s,a,"\n"))}}catch(e){o.e(e)}finally{o.f()}return t}const we=ge})(),D})()}));
//# sourceMappingURL=neovis-without-dependencies.js.map