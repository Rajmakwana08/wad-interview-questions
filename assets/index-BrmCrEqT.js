(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))h(z);new MutationObserver(z=>{for(const K of z)if(K.type==="childList")for(const pe of K.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&h(pe)}).observe(document,{childList:!0,subtree:!0});function I(z){const K={};return z.integrity&&(K.integrity=z.integrity),z.referrerPolicy&&(K.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?K.credentials="include":z.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function h(z){if(z.ep)return;z.ep=!0;const K=I(z);fetch(z.href,K)}})();var lo={exports:{}},Sn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Jp(){if(md)return Sn;md=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function I(h,z,K){var pe=null;if(K!==void 0&&(pe=""+K),z.key!==void 0&&(pe=""+z.key),"key"in z){K={};for(var ze in z)ze!=="key"&&(K[ze]=z[ze])}else K=z;return z=K.ref,{$$typeof:M,type:h,key:pe,ref:z!==void 0?z:null,props:K}}return Sn.Fragment=fe,Sn.jsx=I,Sn.jsxs=I,Sn}var pd;function Kp(){return pd||(pd=1,lo.exports=Jp()),lo.exports}var He=Kp(),no={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function Pp(){if(hd)return O;hd=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),ce=Symbol.iterator;function Ke(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var _e={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,Nt={};function Pe(r,T,A){this.props=r,this.context=T,this.refs=Nt,this.updater=A||_e}Pe.prototype.isReactComponent={},Pe.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},Pe.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Kt(){}Kt.prototype=Pe.prototype;function Be(r,T,A){this.props=r,this.context=T,this.refs=Nt,this.updater=A||_e}var ut=Be.prototype=new Kt;ut.constructor=Be,we(ut,Pe.prototype),ut.isPureReactComponent=!0;var Tt=Array.isArray;function qe(){}var X={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function Ct(r,T,A){var D=A.ref;return{$$typeof:M,type:r,key:T,ref:D!==void 0?D:null,props:A}}function Ga(r,T){return Ct(r.type,T,r.props)}function Et(r){return typeof r=="object"&&r!==null&&r.$$typeof===M}function Ge(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(A){return T[A]})}var ba=/\/+/g;function Rt(r,T){return typeof r=="object"&&r!==null&&r.key!=null?Ge(""+r.key):T.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(qe,qe):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,T,A,D,H){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var F=!1;if(r===null)F=!0;else switch(V){case"bigint":case"string":case"number":F=!0;break;case"object":switch(r.$$typeof){case M:case fe:F=!0;break;case W:return F=r._init,v(F(r._payload),T,A,D,H)}}if(F)return H=H(r),F=D===""?"."+Rt(r,0):D,Tt(H)?(A="",F!=null&&(A=F.replace(ba,"$&/")+"/"),v(H,T,A,"",function(xl){return xl})):H!=null&&(Et(H)&&(H=Ga(H,A+(H.key==null||r&&r.key===H.key?"":(""+H.key).replace(ba,"$&/")+"/")+F)),T.push(H)),1;F=0;var Ue=D===""?".":D+":";if(Tt(r))for(var he=0;he<r.length;he++)D=r[he],V=Ue+Rt(D,he),F+=v(D,T,A,V,H);else if(he=Ke(r),typeof he=="function")for(r=he.call(r),he=0;!(D=r.next()).done;)D=D.value,V=Ue+Rt(D,he++),F+=v(D,T,A,V,H);else if(V==="object"){if(typeof r.then=="function")return v(yt(r),T,A,D,H);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return F}function E(r,T,A){if(r==null)return r;var D=[],H=0;return v(r,D,"","",function(V){return T.call(A,V,H++)}),D}function U(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(A){(r._status===0||r._status===-1)&&(r._status=1,r._result=A)},function(A){(r._status===0||r._status===-1)&&(r._status=2,r._result=A)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ie={map:E,forEach:function(r,T,A){E(r,function(){T.apply(this,arguments)},A)},count:function(r){var T=0;return E(r,function(){T++}),T},toArray:function(r){return E(r,function(T){return T})||[]},only:function(r){if(!Et(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return O.Activity=w,O.Children=ie,O.Component=Pe,O.Fragment=I,O.Profiler=z,O.PureComponent=Be,O.StrictMode=h,O.Suspense=B,O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,O.__COMPILER_RUNTIME={__proto__:null,c:function(r){return X.H.useMemoCache(r)}},O.cache=function(r){return function(){return r.apply(null,arguments)}},O.cacheSignal=function(){return null},O.cloneElement=function(r,T,A){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var D=we({},r.props),H=r.key;if(T!=null)for(V in T.key!==void 0&&(H=""+T.key),T)!Ve.call(T,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&T.ref===void 0||(D[V]=T[V]);var V=arguments.length-2;if(V===1)D.children=A;else if(1<V){for(var F=Array(V),Ue=0;Ue<V;Ue++)F[Ue]=arguments[Ue+2];D.children=F}return Ct(r.type,H,D)},O.createContext=function(r){return r={$$typeof:pe,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:K,_context:r},r},O.createElement=function(r,T,A){var D,H={},V=null;if(T!=null)for(D in T.key!==void 0&&(V=""+T.key),T)Ve.call(T,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(H[D]=T[D]);var F=arguments.length-2;if(F===1)H.children=A;else if(1<F){for(var Ue=Array(F),he=0;he<F;he++)Ue[he]=arguments[he+2];H.children=Ue}if(r&&r.defaultProps)for(D in F=r.defaultProps,F)H[D]===void 0&&(H[D]=F[D]);return Ct(r,V,H)},O.createRef=function(){return{current:null}},O.forwardRef=function(r){return{$$typeof:ze,render:r}},O.isValidElement=Et,O.lazy=function(r){return{$$typeof:W,_payload:{_status:-1,_result:r},_init:U}},O.memo=function(r,T){return{$$typeof:C,type:r,compare:T===void 0?null:T}},O.startTransition=function(r){var T=X.T,A={};X.T=A;try{var D=r(),H=X.S;H!==null&&H(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(qe,te)}catch(V){te(V)}finally{T!==null&&A.types!==null&&(T.types=A.types),X.T=T}},O.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},O.use=function(r){return X.H.use(r)},O.useActionState=function(r,T,A){return X.H.useActionState(r,T,A)},O.useCallback=function(r,T){return X.H.useCallback(r,T)},O.useContext=function(r){return X.H.useContext(r)},O.useDebugValue=function(){},O.useDeferredValue=function(r,T){return X.H.useDeferredValue(r,T)},O.useEffect=function(r,T){return X.H.useEffect(r,T)},O.useEffectEvent=function(r){return X.H.useEffectEvent(r)},O.useId=function(){return X.H.useId()},O.useImperativeHandle=function(r,T,A){return X.H.useImperativeHandle(r,T,A)},O.useInsertionEffect=function(r,T){return X.H.useInsertionEffect(r,T)},O.useLayoutEffect=function(r,T){return X.H.useLayoutEffect(r,T)},O.useMemo=function(r,T){return X.H.useMemo(r,T)},O.useOptimistic=function(r,T){return X.H.useOptimistic(r,T)},O.useReducer=function(r,T,A){return X.H.useReducer(r,T,A)},O.useRef=function(r){return X.H.useRef(r)},O.useState=function(r){return X.H.useState(r)},O.useSyncExternalStore=function(r,T,A){return X.H.useSyncExternalStore(r,T,A)},O.useTransition=function(){return X.H.useTransition()},O.version="19.2.7",O}var gd;function co(){return gd||(gd=1,no.exports=Pp()),no.exports}var Ed=co(),io={exports:{}},bn={},uo={exports:{}},so={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Ip(){return yd||(yd=1,(function(M){function fe(v,E){var U=v.length;v.push(E);e:for(;0<U;){var te=U-1>>>1,ie=v[te];if(0<z(ie,E))v[te]=E,v[U]=ie,U=te;else break e}}function I(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var E=v[0],U=v.pop();if(U!==E){v[0]=U;e:for(var te=0,ie=v.length,r=ie>>>1;te<r;){var T=2*(te+1)-1,A=v[T],D=T+1,H=v[D];if(0>z(A,U))D<ie&&0>z(H,A)?(v[te]=H,v[D]=U,te=D):(v[te]=A,v[T]=U,te=T);else if(D<ie&&0>z(H,U))v[te]=H,v[D]=U,te=D;else break e}}return E}function z(v,E){var U=v.sortIndex-E.sortIndex;return U!==0?U:v.id-E.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;M.unstable_now=function(){return K.now()}}else{var pe=Date,ze=pe.now();M.unstable_now=function(){return pe.now()-ze}}var B=[],C=[],W=1,w=null,ce=3,Ke=!1,_e=!1,we=!1,Nt=!1,Pe=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,Be=typeof setImmediate<"u"?setImmediate:null;function ut(v){for(var E=I(C);E!==null;){if(E.callback===null)h(C);else if(E.startTime<=v)h(C),E.sortIndex=E.expirationTime,fe(B,E);else break;E=I(C)}}function Tt(v){if(we=!1,ut(v),!_e)if(I(B)!==null)_e=!0,qe||(qe=!0,Ge());else{var E=I(C);E!==null&&yt(Tt,E.startTime-v)}}var qe=!1,X=-1,Ve=5,Ct=-1;function Ga(){return Nt?!0:!(M.unstable_now()-Ct<Ve)}function Et(){if(Nt=!1,qe){var v=M.unstable_now();Ct=v;var E=!0;try{e:{_e=!1,we&&(we=!1,Kt(X),X=-1),Ke=!0;var U=ce;try{t:{for(ut(v),w=I(B);w!==null&&!(w.expirationTime>v&&Ga());){var te=w.callback;if(typeof te=="function"){w.callback=null,ce=w.priorityLevel;var ie=te(w.expirationTime<=v);if(v=M.unstable_now(),typeof ie=="function"){w.callback=ie,ut(v),E=!0;break t}w===I(B)&&h(B),ut(v)}else h(B);w=I(B)}if(w!==null)E=!0;else{var r=I(C);r!==null&&yt(Tt,r.startTime-v),E=!1}}break e}finally{w=null,ce=U,Ke=!1}E=void 0}}finally{E?Ge():qe=!1}}}var Ge;if(typeof Be=="function")Ge=function(){Be(Et)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,Rt=ba.port2;ba.port1.onmessage=Et,Ge=function(){Rt.postMessage(null)}}else Ge=function(){Pe(Et,0)};function yt(v,E){X=Pe(function(){v(M.unstable_now())},E)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(v){v.callback=null},M.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<v?Math.floor(1e3/v):5},M.unstable_getCurrentPriorityLevel=function(){return ce},M.unstable_next=function(v){switch(ce){case 1:case 2:case 3:var E=3;break;default:E=ce}var U=ce;ce=E;try{return v()}finally{ce=U}},M.unstable_requestPaint=function(){Nt=!0},M.unstable_runWithPriority=function(v,E){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var U=ce;ce=v;try{return E()}finally{ce=U}},M.unstable_scheduleCallback=function(v,E,U){var te=M.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=U+ie,v={id:W++,callback:E,priorityLevel:v,startTime:U,expirationTime:ie,sortIndex:-1},U>te?(v.sortIndex=U,fe(C,v),I(B)===null&&v===I(C)&&(we?(Kt(X),X=-1):we=!0,yt(Tt,U-te))):(v.sortIndex=ie,fe(B,v),_e||Ke||(_e=!0,qe||(qe=!0,Ge()))),v},M.unstable_shouldYield=Ga,M.unstable_wrapCallback=function(v){var E=ce;return function(){var U=ce;ce=E;try{return v.apply(this,arguments)}finally{ce=U}}}})(so)),so}var vd;function Wp(){return vd||(vd=1,uo.exports=Ip()),uo.exports}var oo={exports:{}},Le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function Fp(){if(Sd)return Le;Sd=1;var M=co();function fe(B){var C="https://react.dev/errors/"+B;if(1<arguments.length){C+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)C+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+B+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I(){}var h={d:{f:I,r:function(){throw Error(fe(522))},D:I,C:I,L:I,m:I,X:I,S:I,M:I},p:0,findDOMNode:null},z=Symbol.for("react.portal");function K(B,C,W){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:w==null?null:""+w,children:B,containerInfo:C,implementation:W}}var pe=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ze(B,C){if(B==="font")return"";if(typeof C=="string")return C==="use-credentials"?C:""}return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Le.createPortal=function(B,C){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C||C.nodeType!==1&&C.nodeType!==9&&C.nodeType!==11)throw Error(fe(299));return K(B,C,null,W)},Le.flushSync=function(B){var C=pe.T,W=h.p;try{if(pe.T=null,h.p=2,B)return B()}finally{pe.T=C,h.p=W,h.d.f()}},Le.preconnect=function(B,C){typeof B=="string"&&(C?(C=C.crossOrigin,C=typeof C=="string"?C==="use-credentials"?C:"":void 0):C=null,h.d.C(B,C))},Le.prefetchDNS=function(B){typeof B=="string"&&h.d.D(B)},Le.preinit=function(B,C){if(typeof B=="string"&&C&&typeof C.as=="string"){var W=C.as,w=ze(W,C.crossOrigin),ce=typeof C.integrity=="string"?C.integrity:void 0,Ke=typeof C.fetchPriority=="string"?C.fetchPriority:void 0;W==="style"?h.d.S(B,typeof C.precedence=="string"?C.precedence:void 0,{crossOrigin:w,integrity:ce,fetchPriority:Ke}):W==="script"&&h.d.X(B,{crossOrigin:w,integrity:ce,fetchPriority:Ke,nonce:typeof C.nonce=="string"?C.nonce:void 0})}},Le.preinitModule=function(B,C){if(typeof B=="string")if(typeof C=="object"&&C!==null){if(C.as==null||C.as==="script"){var W=ze(C.as,C.crossOrigin);h.d.M(B,{crossOrigin:W,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0})}}else C==null&&h.d.M(B)},Le.preload=function(B,C){if(typeof B=="string"&&typeof C=="object"&&C!==null&&typeof C.as=="string"){var W=C.as,w=ze(W,C.crossOrigin);h.d.L(B,W,{crossOrigin:w,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0,type:typeof C.type=="string"?C.type:void 0,fetchPriority:typeof C.fetchPriority=="string"?C.fetchPriority:void 0,referrerPolicy:typeof C.referrerPolicy=="string"?C.referrerPolicy:void 0,imageSrcSet:typeof C.imageSrcSet=="string"?C.imageSrcSet:void 0,imageSizes:typeof C.imageSizes=="string"?C.imageSizes:void 0,media:typeof C.media=="string"?C.media:void 0})}},Le.preloadModule=function(B,C){if(typeof B=="string")if(C){var W=ze(C.as,C.crossOrigin);h.d.m(B,{as:typeof C.as=="string"&&C.as!=="script"?C.as:void 0,crossOrigin:W,integrity:typeof C.integrity=="string"?C.integrity:void 0})}else h.d.m(B)},Le.requestFormReset=function(B){h.d.r(B)},Le.unstable_batchedUpdates=function(B,C){return B(C)},Le.useFormState=function(B,C,W){return pe.H.useFormState(B,C,W)},Le.useFormStatus=function(){return pe.H.useHostTransitionStatus()},Le.version="19.2.7",Le}var bd;function $p(){if(bd)return oo.exports;bd=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),oo.exports=Fp(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function eh(){if(Td)return bn;Td=1;var M=Wp(),fe=co(),I=$p();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function pe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ze(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B(e){if(K(e)!==e)throw Error(h(188))}function C(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return B(n),e;if(i===l)return B(n),t;i=i.sibling}throw Error(h(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(h(189))}}if(a.alternate!==l)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,ce=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),_e=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Nt=Symbol.for("react.strict_mode"),Pe=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),Be=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Ct=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case Pe:return"Profiler";case Nt:return"StrictMode";case Tt:return"Suspense";case qe:return"SuspenseList";case Ct:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _e:return"Portal";case Be:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var yt=Array.isArray,v=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=I.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function r(e){return{current:e}}function T(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function A(e,t){ie++,te[ie]=e.current,e.current=t}var D=r(null),H=r(null),V=r(null),F=r(null);function Ue(e,t){switch(A(V,t),A(H,e),A(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hf(t),e=_f(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(D),A(D,e)}function he(){T(D),T(H),T(V)}function xl(e){e.memoizedState!==null&&A(F,e);var t=D.current,a=_f(t,e.type);t!==a&&(A(H,e),A(D,a))}function Tn(e){H.current===e&&(T(D),T(H)),F.current===e&&(T(F),hn._currentValue=U)}var Vi,ro;function Ta(e){if(Vi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||"",ro=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vi+e+ro}var Gi=!1;function ji(e,t){if(!e||Gi)return"";Gi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(g){var p=g}Reflect.construct(e,[],b)}else{try{b.call()}catch(g){p=g}e.call(b.prototype)}}else{try{throw Error()}catch(g){p=g}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),m=s.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===m.length)for(l=o.length-1,n=m.length-1;1<=l&&0<=n&&o[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==m[n]){var y=`
`+o[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=l&&0<=n);break}}}finally{Gi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return ji(e.type,!1);case 11:return ji(e.type.render,!1);case 1:return ji(e.type,!0);case 31:return Ta("Activity");default:return""}}function fo(e){try{var t="",a=null;do t+=Ad(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Yi=Object.prototype.hasOwnProperty,Qi=M.unstable_scheduleCallback,Xi=M.unstable_cancelCallback,xd=M.unstable_shouldYield,Md=M.unstable_requestPaint,Ie=M.unstable_now,Dd=M.unstable_getCurrentPriorityLevel,mo=M.unstable_ImmediatePriority,po=M.unstable_UserBlockingPriority,Cn=M.unstable_NormalPriority,Nd=M.unstable_LowPriority,ho=M.unstable_IdlePriority,Rd=M.log,Bd=M.unstable_setDisableYieldValue,Ml=null,We=null;function Pt(e){if(typeof Rd=="function"&&Bd(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Ml,e)}catch{}}var Fe=Math.clz32?Math.clz32:wd,Ld=Math.log,zd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(Ld(e)/zd|0)|0}var En=256,An=262144,xn=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ca(l):(u&=s,u!==0?n=Ca(u):a||(a=s&~e,a!==0&&(n=Ca(a))))):(s=l&~i,s!==0?n=Ca(s):u!==0?n=Ca(u):a||(a=l&~e,a!==0&&(n=Ca(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ud(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var e=xn;return xn<<=1,(xn&62914560)===0&&(xn=4194304),e}function ki(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Od(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,m=e.hiddenUpdates;for(a=u&~a;0<a;){var y=31-Fe(a),b=1<<y;s[y]=0,o[y]=-1;var p=m[y];if(p!==null)for(m[y]=null,y=0;y<p.length;y++){var g=p[y];g!==null&&(g.lane&=-536870913)}a&=~b}l!==0&&yo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function yo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Fe(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function vo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Fe(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function So(e,t){var a=t&-t;return a=(a&42)!==0?1:Zi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bo(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function To(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var It=Math.random().toString(36).slice(2),xe="__reactFiber$"+It,je="__reactProps$"+It,ja="__reactContainer$"+It,Ki="__reactEvents$"+It,Hd="__reactListeners$"+It,_d="__reactHandles$"+It,Co="__reactResources$"+It,Rl="__reactMarker$"+It;function Pi(e){delete e[xe],delete e[je],delete e[Ki],delete e[Hd],delete e[_d]}function Ya(e){var t=e[xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ja]||a[xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[xe])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[xe]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Xa(e){var t=e[Co];return t||(t=e[Co]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ee(e){e[Rl]=!0}var Eo=new Set,Ao={};function Ea(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(Ao[e]=t,e=0;e<t.length;e++)Eo.add(t[e])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xo={},Mo={};function Vd(e){return Yi.call(Mo,e)?!0:Yi.call(xo,e)?!1:qd.test(e)?Mo[e]=!0:(xo[e]=!0,!1)}function Dn(e,t,a){if(Vd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Nn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Bt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){if(!e._valueTracker){var t=Do(e)?"checked":"value";e._valueTracker=Gd(e,t,""+e[t])}}function No(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Do(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jd=/[\n"\\]/g;function ot(e){return e.replace(jd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wi(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Fi(e,u,st(t)):a!=null?Fi(e,u,st(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+st(s):e.removeAttribute("name")}function Ro(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ii(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ii(e)}function Fi(e,t,a){t==="number"&&Rn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Bo(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function Lo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(h(92));if(yt(l)){if(1<l.length)throw Error(h(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ii(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Yd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Yd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function wo(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&zo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&zo(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(e){return Xd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Lt(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Pa=null;function Uo(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[je]||null;if(!n)throw Error(h(90));Wi(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&No(l)}break e;case"textarea":Bo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var au=!1;function Oo(e,t,a){if(au)return e(t,a);au=!0;try{var l=e(t);return l}finally{if(au=!1,(Ka!==null||Pa!==null)&&(yi(),Ka&&(t=Ka,e=Pa,Pa=Ka=null,Uo(t),e)))for(t=0;t<e.length;t++)Uo(e[t])}}function Ll(e,t){var a=e.stateNode;if(a===null)return null;var l=a[je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(zt)try{var zl={};Object.defineProperty(zl,"passive",{get:function(){lu=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{lu=!1}var Wt=null,nu=null,Ln=null;function Ho(){if(Ln)return Ln;var e,t=nu,a=t.length,l,n="value"in Wt?Wt.value:Wt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Ln=n.slice(e,1<l?1-l:void 0)}function zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function _o(){return!1}function Ye(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wn:_o,this.isPropagationStopped=_o,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Ye(Aa),wl=w({},Aa,{view:0,detail:0}),kd=Ye(wl),iu,uu,Ul,On=w({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(iu=e.screenX-Ul.screenX,uu=e.screenY-Ul.screenY):uu=iu=0,Ul=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),qo=Ye(On),Zd=w({},On,{dataTransfer:0}),Jd=Ye(Zd),Kd=w({},wl,{relatedTarget:0}),su=Ye(Kd),Pd=w({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=Ye(Pd),Wd=w({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=Ye(Wd),$d=w({},Aa,{data:0}),Vo=Ye($d),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function ou(){return lm}var nm=w({},wl,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Ye(nm),um=w({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=Ye(um),sm=w({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),om=Ye(sm),cm=w({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Ye(cm),fm=w({},On,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Ye(fm),mm=w({},Aa,{newState:0,oldState:0}),pm=Ye(mm),hm=[9,13,27,32],cu=zt&&"CompositionEvent"in window,Ol=null;zt&&"documentMode"in document&&(Ol=document.documentMode);var gm=zt&&"TextEvent"in window&&!Ol,jo=zt&&(!cu||Ol&&8<Ol&&11>=Ol),Yo=" ",Qo=!1;function Xo(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ko(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function ym(e,t){switch(e){case"compositionend":return ko(t);case"keypress":return t.which!==32?null:(Qo=!0,Yo);case"textInput":return e=t.data,e===Yo&&Qo?null:e;default:return null}}function vm(e,t){if(Ia)return e==="compositionend"||!cu&&Xo(e,t)?(e=Ho(),Ln=nu=Wt=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jo&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function Jo(e,t,a,l){Ka?Pa?Pa.push(l):Pa=[l]:Ka=l,t=Ai(t,"onChange"),0<t.length&&(a=new Un("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Hl=null,_l=null;function bm(e){Bf(e,0)}function Hn(e){var t=Bl(e);if(No(t))return e}function Ko(e,t){if(e==="change")return t}var Po=!1;if(zt){var ru;if(zt){var fu="oninput"in document;if(!fu){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),fu=typeof Io.oninput=="function"}ru=fu}else ru=!1;Po=ru&&(!document.documentMode||9<document.documentMode)}function Wo(){Hl&&(Hl.detachEvent("onpropertychange",Fo),_l=Hl=null)}function Fo(e){if(e.propertyName==="value"&&Hn(_l)){var t=[];Jo(t,_l,e,tu(e)),Oo(bm,t)}}function Tm(e,t,a){e==="focusin"?(Wo(),Hl=t,_l=a,Hl.attachEvent("onpropertychange",Fo)):e==="focusout"&&Wo()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hn(_l)}function Em(e,t){if(e==="click")return Hn(t)}function Am(e,t){if(e==="input"||e==="change")return Hn(t)}function xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:xm;function ql(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Yi.call(t,n)||!$e(e[n],t[n]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=$o(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$o(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Rn(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mm=zt&&"documentMode"in document&&11>=document.documentMode,Wa=null,mu=null,Vl=null,pu=!1;function lc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Wa==null||Wa!==Rn(l)||(l=Wa,"selectionStart"in l&&du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vl&&ql(Vl,l)||(Vl=l,l=Ai(mu,"onSelect"),0<l.length&&(t=new Un("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Wa)))}function xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},hu={},nc={};zt&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Ma(e){if(hu[e])return hu[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in nc)return hu[e]=t[a];return e}var ic=Ma("animationend"),uc=Ma("animationiteration"),sc=Ma("animationstart"),Dm=Ma("transitionrun"),Nm=Ma("transitionstart"),Rm=Ma("transitioncancel"),oc=Ma("transitionend"),cc=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function vt(e,t){cc.set(e,t),Ea(t,[e])}var _n=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],$a=0,yu=0;function qn(){for(var e=$a,t=yu=$a=0;t<e;){var a=ct[t];ct[t++]=null;var l=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&rc(a,n,i)}}function Vn(e,t,a,l){ct[$a++]=e,ct[$a++]=t,ct[$a++]=a,ct[$a++]=l,yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function vu(e,t,a,l){return Vn(e,t,a,l),Gn(e)}function Da(e,t){return Vn(e,null,null,t),Gn(e)}function rc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Fe(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Gn(e){if(50<on)throw on=0,Ds=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Bm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new Bm(e,t,a,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=Op(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ct:return e=et(31,a,t,n),e.elementType=Ct,e.lanes=i,e;case we:return Na(a.children,n,i,t);case Nt:u=8,n|=24;break;case Pe:return e=et(12,a,t,n|2),e.elementType=Pe,e.lanes=i,e;case Tt:return e=et(13,a,t,n),e.elementType=Tt,e.lanes=i,e;case qe:return e=et(19,a,t,n),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:u=10;break e;case Kt:u=9;break e;case ut:u=11;break e;case X:u=14;break e;case Ve:u=16,l=null;break e}u=29,a=Error(h(130,e===null?"null":typeof e,"")),l=null}return t=et(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Na(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function bu(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function dc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Tu(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=mc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fo(t)},mc.set(e,t),t)}return{value:e,source:t,stack:fo(t)}}var tl=[],al=0,Yn=null,Gl=0,ft=[],dt=0,Ft=null,At=1,xt="";function Ut(e,t){tl[al++]=Gl,tl[al++]=Yn,Yn=e,Gl=t}function pc(e,t,a){ft[dt++]=At,ft[dt++]=xt,ft[dt++]=Ft,Ft=e;var l=At;e=xt;var n=32-Fe(l)-1;l&=~(1<<n),a+=1;var i=32-Fe(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,At=1<<32-Fe(t)+n|a<<n|l,xt=i+e}else At=1<<i|a<<n|l,xt=e}function Cu(e){e.return!==null&&(Ut(e,1),pc(e,1,0))}function Eu(e){for(;e===Yn;)Yn=tl[--al],tl[al]=null,Gl=tl[--al],tl[al]=null;for(;e===Ft;)Ft=ft[--dt],ft[dt]=null,xt=ft[--dt],ft[dt]=null,At=ft[--dt],ft[dt]=null}function hc(e,t){ft[dt++]=At,ft[dt++]=xt,ft[dt++]=Ft,At=t.id,xt=t.overflow,Ft=e}var Me=null,se=null,k=!1,$t=null,mt=!1,Au=Error(h(519));function ea(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(rt(t,e)),Au}function gc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[xe]=e,t[je]=l,a){case"dialog":j("cancel",t),j("close",t);break;case"iframe":case"object":case"embed":j("load",t);break;case"video":case"audio":for(a=0;a<rn.length;a++)j(rn[a],t);break;case"source":j("error",t);break;case"img":case"image":case"link":j("error",t),j("load",t);break;case"details":j("toggle",t);break;case"input":j("invalid",t),Ro(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":j("invalid",t);break;case"textarea":j("invalid",t),Lo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Uf(t.textContent,a)?(l.popover!=null&&(j("beforetoggle",t),j("toggle",t)),l.onScroll!=null&&j("scroll",t),l.onScrollEnd!=null&&j("scrollend",t),l.onClick!=null&&(t.onclick=Lt),t=!0):t=!1,t||ea(e,!0)}function yc(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Me=Me.return}}function ll(e){if(e!==Me)return!1;if(!k)return yc(e),k=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ys(e.type,e.memoizedProps)),a=!a),a&&se&&ea(e),yc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));se=Qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));se=Qf(e)}else t===27?(t=se,pa(e.type)?(e=Js,Js=null,se=e):se=t):se=Me?ht(e.stateNode.nextSibling):null;return!0}function Ra(){se=Me=null,k=!1}function xu(){var e=$t;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),$t=null),e}function jl(e){$t===null?$t=[e]:$t.push(e)}var Mu=r(null),Ba=null,Ot=null;function ta(e,t,a){A(Mu,t._currentValue),t._currentValue=a}function Ht(e){e._currentValue=Mu.current,T(Mu)}function Du(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Nu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Du(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Du(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function nl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var s=n.type;$e(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===F.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hn):e=[hn])}n=n.return}e!==null&&Nu(t,e,a,l),t.flags|=262144}function Qn(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Ba=e,Ot=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return vc(Ba,e)}function Xn(e,t){return Ba===null&&La(e),vc(e,t)}function vc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ot===null){if(e===null)throw Error(h(308));Ot=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ot=Ot.next=t;return a}var Lm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},zm=M.unstable_scheduleCallback,wm=M.unstable_NormalPriority,ve={$$typeof:Be,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new Lm,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&zm(wm,function(){e.controller.abort()})}var Ql=null,Bu=0,il=0,ul=null;function Um(e,t){if(Ql===null){var a=Ql=[];Bu=0,il=ws(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bu++,t.then(Sc,Sc),t}function Sc(){if(--Bu===0&&Ql!==null){ul!==null&&(ul.status="fulfilled");var e=Ql;Ql=null,il=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Om(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var bc=v.S;v.S=function(e,t){lf=Ie(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Um(e,t),bc!==null&&bc(e,t)};var za=r(null);function Lu(){var e=za.current;return e!==null?e:ue.pooledCache}function kn(e,t){t===null?A(za,za.current):A(za,t.pool)}function Tc(){var e=Lu();return e===null?null:{parent:ve._currentValue,pool:e}}var sl=Error(h(460)),zu=Error(h(474)),Zn=Error(h(542)),Jn={then:function(){}};function Cc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ec(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Lt,Lt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xc(e),e;default:if(typeof t.status=="string")t.then(Lt,Lt);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xc(e),e}throw Ua=t,sl}}function wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,sl):a}}var Ua=null;function Ac(){if(Ua===null)throw Error(h(459));var e=Ua;return Ua=null,e}function xc(e){if(e===sl||e===Zn)throw Error(h(483))}var ol=null,Xl=0;function Kn(e){var t=Xl;return Xl+=1,ol===null&&(ol=[]),Ec(ol,e,t)}function kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pn(e,t){throw t.$$typeof===ce?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mc(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=67108866,c):d):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,c,d,S){return c===null||c.tag!==6?(c=bu(d,f.mode,S),c.return=f,c):(c=n(c,d),c.return=f,c)}function o(f,c,d,S){var R=d.type;return R===we?y(f,c,d.props.children,S,d.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ve&&wa(R)===c.type)?(c=n(c,d.props),kl(c,d),c.return=f,c):(c=jn(d.type,d.key,d.props,null,f.mode,S),kl(c,d),c.return=f,c)}function m(f,c,d,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Tu(d,f.mode,S),c.return=f,c):(c=n(c,d.children||[]),c.return=f,c)}function y(f,c,d,S,R){return c===null||c.tag!==7?(c=Na(d,f.mode,S,R),c.return=f,c):(c=n(c,d),c.return=f,c)}function b(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=bu(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ke:return d=jn(c.type,c.key,c.props,null,f.mode,d),kl(d,c),d.return=f,d;case _e:return c=Tu(c,f.mode,d),c.return=f,c;case Ve:return c=wa(c),b(f,c,d)}if(yt(c)||Ge(c))return c=Na(c,f.mode,d,null),c.return=f,c;if(typeof c.then=="function")return b(f,Kn(c),d);if(c.$$typeof===Be)return b(f,Xn(f,c),d);Pn(f,c)}return null}function p(f,c,d,S){var R=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:s(f,c,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ke:return d.key===R?o(f,c,d,S):null;case _e:return d.key===R?m(f,c,d,S):null;case Ve:return d=wa(d),p(f,c,d,S)}if(yt(d)||Ge(d))return R!==null?null:y(f,c,d,S,null);if(typeof d.then=="function")return p(f,c,Kn(d),S);if(d.$$typeof===Be)return p(f,c,Xn(f,d),S);Pn(f,d)}return null}function g(f,c,d,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(d)||null,s(c,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ke:return f=f.get(S.key===null?d:S.key)||null,o(c,f,S,R);case _e:return f=f.get(S.key===null?d:S.key)||null,m(c,f,S,R);case Ve:return S=wa(S),g(f,c,d,S,R)}if(yt(S)||Ge(S))return f=f.get(d)||null,y(c,f,S,R,null);if(typeof S.then=="function")return g(f,c,d,Kn(S),R);if(S.$$typeof===Be)return g(f,c,d,Xn(c,S),R);Pn(c,S)}return null}function x(f,c,d,S){for(var R=null,Z=null,N=c,q=c=0,Q=null;N!==null&&q<d.length;q++){N.index>q?(Q=N,N=null):Q=N.sibling;var J=p(f,N,d[q],S);if(J===null){N===null&&(N=Q);break}e&&N&&J.alternate===null&&t(f,N),c=i(J,c,q),Z===null?R=J:Z.sibling=J,Z=J,N=Q}if(q===d.length)return a(f,N),k&&Ut(f,q),R;if(N===null){for(;q<d.length;q++)N=b(f,d[q],S),N!==null&&(c=i(N,c,q),Z===null?R=N:Z.sibling=N,Z=N);return k&&Ut(f,q),R}for(N=l(N);q<d.length;q++)Q=g(N,f,q,d[q],S),Q!==null&&(e&&Q.alternate!==null&&N.delete(Q.key===null?q:Q.key),c=i(Q,c,q),Z===null?R=Q:Z.sibling=Q,Z=Q);return e&&N.forEach(function(Sa){return t(f,Sa)}),k&&Ut(f,q),R}function L(f,c,d,S){if(d==null)throw Error(h(151));for(var R=null,Z=null,N=c,q=c=0,Q=null,J=d.next();N!==null&&!J.done;q++,J=d.next()){N.index>q?(Q=N,N=null):Q=N.sibling;var Sa=p(f,N,J.value,S);if(Sa===null){N===null&&(N=Q);break}e&&N&&Sa.alternate===null&&t(f,N),c=i(Sa,c,q),Z===null?R=Sa:Z.sibling=Sa,Z=Sa,N=Q}if(J.done)return a(f,N),k&&Ut(f,q),R;if(N===null){for(;!J.done;q++,J=d.next())J=b(f,J.value,S),J!==null&&(c=i(J,c,q),Z===null?R=J:Z.sibling=J,Z=J);return k&&Ut(f,q),R}for(N=l(N);!J.done;q++,J=d.next())J=g(N,f,q,J.value,S),J!==null&&(e&&J.alternate!==null&&N.delete(J.key===null?q:J.key),c=i(J,c,q),Z===null?R=J:Z.sibling=J,Z=J);return e&&N.forEach(function(Zp){return t(f,Zp)}),k&&Ut(f,q),R}function ne(f,c,d,S){if(typeof d=="object"&&d!==null&&d.type===we&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ke:e:{for(var R=d.key;c!==null;){if(c.key===R){if(R=d.type,R===we){if(c.tag===7){a(f,c.sibling),S=n(c,d.props.children),S.return=f,f=S;break e}}else if(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ve&&wa(R)===c.type){a(f,c.sibling),S=n(c,d.props),kl(S,d),S.return=f,f=S;break e}a(f,c);break}else t(f,c);c=c.sibling}d.type===we?(S=Na(d.props.children,f.mode,S,d.key),S.return=f,f=S):(S=jn(d.type,d.key,d.props,null,f.mode,S),kl(S,d),S.return=f,f=S)}return u(f);case _e:e:{for(R=d.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){a(f,c.sibling),S=n(c,d.children||[]),S.return=f,f=S;break e}else{a(f,c);break}else t(f,c);c=c.sibling}S=Tu(d,f.mode,S),S.return=f,f=S}return u(f);case Ve:return d=wa(d),ne(f,c,d,S)}if(yt(d))return x(f,c,d,S);if(Ge(d)){if(R=Ge(d),typeof R!="function")throw Error(h(150));return d=R.call(d),L(f,c,d,S)}if(typeof d.then=="function")return ne(f,c,Kn(d),S);if(d.$$typeof===Be)return ne(f,c,Xn(f,d),S);Pn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(a(f,c.sibling),S=n(c,d),S.return=f,f=S):(a(f,c),S=bu(d,f.mode,S),S.return=f,f=S),u(f)):a(f,c)}return function(f,c,d,S){try{Xl=0;var R=ne(f,c,d,S);return ol=null,R}catch(N){if(N===sl||N===Zn)throw N;var Z=et(29,N,null,f.mode);return Z.lanes=S,Z.return=f,Z}finally{}}}var Oa=Mc(!0),Dc=Mc(!1),aa=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Gn(e),rc(e,null,a),t}return Vn(e,l,t,a),Gn(e)}function Zl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,vo(e,a)}}function Ou(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hu=!1;function Jl(){if(Hu){var e=ul;if(e!==null)throw e}}function Kl(e,t,a,l){Hu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,m=o.next;o.next=null,u===null?i=m:u.next=m,u=o;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==u&&(s===null?y.firstBaseUpdate=m:s.next=m,y.lastBaseUpdate=o))}if(i!==null){var b=n.baseState;u=0,y=m=o=null,s=i;do{var p=s.lane&-536870913,g=p!==s.lane;if(g?(Y&p)===p:(l&p)===p){p!==0&&p===il&&(Hu=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var x=e,L=s;p=t;var ne=a;switch(L.tag){case 1:if(x=L.payload,typeof x=="function"){b=x.call(ne,b,p);break e}b=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=L.payload,p=typeof x=="function"?x.call(ne,b,p):x,p==null)break e;b=w({},b,p);break e;case 2:aa=!0}}p=s.callback,p!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[p]:g.push(p))}else g={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(m=y=g,o=b):y=y.next=g,u|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;g=s,s=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);y===null&&(o=b),n.baseState=o,n.firstBaseUpdate=m,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),ca|=u,e.lanes=u,e.memoizedState=b}}function Nc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Rc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nc(a[e],t)}var cl=r(null),In=r(0);function Bc(e,t){e=kt,A(In,e),A(cl,t),kt=e|t.baseLanes}function _u(){A(In,kt),A(cl,cl.current)}function qu(){kt=In.current,T(cl),T(In)}var tt=r(null),pt=null;function ia(e){var t=e.alternate;A(ge,ge.current&1),A(tt,e),pt===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(pt=e)}function Vu(e){A(ge,ge.current),A(tt,e),pt===null&&(pt=e)}function Lc(e){e.tag===22?(A(ge,ge.current),A(tt,e),pt===null&&(pt=e)):ua()}function ua(){A(ge,ge.current),A(tt,tt.current)}function at(e){T(tt),pt===e&&(pt=null),T(ge)}var ge=r(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ks(a)||Zs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _t=0,_=null,ae=null,Se=null,Fn=!1,rl=!1,Ha=!1,$n=0,Pl=0,fl=null,Hm=0;function de(){throw Error(h(321))}function Gu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function ju(e,t,a,l,n,i){return _t=i,_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?pr:as,Ha=!1,i=a(l,n),Ha=!1,rl&&(i=wc(t,a,l,n)),zc(e),i}function zc(e){v.H=Fl;var t=ae!==null&&ae.next!==null;if(_t=0,Se=ae=_=null,Fn=!1,Pl=0,fl=null,t)throw Error(h(300));e===null||be||(e=e.dependencies,e!==null&&Qn(e)&&(be=!0))}function wc(e,t,a,l){_=e;var n=0;do{if(rl&&(fl=null),Pl=0,rl=!1,25<=n)throw Error(h(301));if(n+=1,Se=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=hr,i=t(a,l)}while(rl);return i}function _m(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Il(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(_.flags|=1024),t}function Yu(){var e=$n!==0;return $n=0,e}function Qu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xu(e){if(Fn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fn=!1}_t=0,Se=ae=_=null,rl=!1,Pl=$n=0,fl=null}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?_.memoizedState=Se=e:Se=Se.next=e,Se}function ye(){if(ae===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Se===null?_.memoizedState:Se.next;if(t!==null)Se=t,ae=e;else{if(e===null)throw _.alternate===null?Error(h(467)):Error(h(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Se===null?_.memoizedState=Se=e:Se=Se.next=e}return Se}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(e){var t=Pl;return Pl+=1,fl===null&&(fl=[]),e=Ec(fl,e,t),t=_,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?pr:as),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Il(e);if(e.$$typeof===Be)return De(e)}throw Error(h(438,String(e)))}function ku(e){var t=null,a=_.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=_.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),_.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ga;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=ye();return Zu(t,ae,e)}function Zu(e,t,a){var l=e.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,o=null,m=t,y=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(Y&b)===b:(_t&b)===b){var p=m.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===il&&(y=!0);else if((_t&p)===p){m=m.next,p===il&&(y=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=b,u=i):o=o.next=b,_.lanes|=p,ca|=p;b=m.action,Ha&&a(i,b),i=m.hasEagerState?m.eagerState:a(i,b)}else p={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=p,u=i):o=o.next=p,_.lanes|=b,ca|=b;m=m.next}while(m!==null&&m!==t);if(o===null?u=i:o.next=s,!$e(i,e.memoizedState)&&(be=!0,y&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ju(e){var t=ye(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);$e(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Uc(e,t,a){var l=_,n=ye(),i=k;if(i){if(a===void 0)throw Error(h(407));a=a()}else a=t();var u=!$e((ae||n).memoizedState,a);if(u&&(n.memoizedState=a,be=!0),n=n.queue,Iu(_c.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,dl(9,{destroy:void 0},Hc.bind(null,l,n,a,t),null),ue===null)throw Error(h(349));i||(_t&127)!==0||Oc(l,t,a)}return a}function Oc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=_.updateQueue,t===null?(t=ei(),_.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Hc(e,t,a,l){t.value=a,t.getSnapshot=l,qc(t)&&Vc(e)}function _c(e,t,a){return a(function(){qc(t)&&Vc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Vc(e){var t=Da(e,2);t!==null&&Je(t,e,2)}function Ku(e){var t=Oe();if(typeof e=="function"){var a=e;if(e=a(),Ha){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Gc(e,t,a,l){return e.baseState=a,Zu(e,ae,typeof l=="function"?l:qt)}function qm(e,t,a,l,n){if(ii(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,jc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function jc(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=v.T,u={};v.T=u;try{var s=a(n,l),o=v.S;o!==null&&o(u,s),Yc(e,t,s)}catch(m){Pu(e,t,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=a(n,l),Yc(e,t,i)}catch(m){Pu(e,t,m)}}function Yc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Qc(e,t,l)},function(l){return Pu(e,t,l)}):Qc(e,t,a)}function Qc(e,t,a){t.status="fulfilled",t.value=a,Xc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,jc(e,a)))}function Pu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Xc(t),t=t.next;while(t!==l)}e.action=null}function Xc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kc(e,t){return t}function Zc(e,t){if(k){var a=ue.formState;if(a!==null){e:{var l=_;if(k){if(se){t:{for(var n=se,i=mt;n.nodeType!==8;){if(!i){n=null;break t}if(n=ht(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){se=ht(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=Oe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kc,lastRenderedState:t},a.queue=l,a=fr.bind(null,_,l),l.dispatch=a,l=Ku(!1),i=ts.bind(null,_,!1,l.queue),l=Oe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=qm.bind(null,_,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Jc(e){var t=ye();return Kc(t,ae,e)}function Kc(e,t,a){if(t=Zu(e,t,kc)[0],e=ai(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Il(t)}catch(u){throw u===sl?Zn:u}else l=t;t=ye();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(_.flags|=2048,dl(9,{destroy:void 0},Vm.bind(null,n,a),null)),[l,i,e]}function Vm(e,t){e.action=t}function Pc(e){var t=ye(),a=ae;if(a!==null)return Kc(t,a,e);ye(),t=t.memoizedState,a=ye();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=_.updateQueue,t===null&&(t=ei(),_.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ic(){return ye().memoizedState}function li(e,t,a,l){var n=Oe();_.flags|=e,n.memoizedState=dl(1|t,{destroy:void 0},a,l===void 0?null:l)}function ni(e,t,a,l){var n=ye();l=l===void 0?null:l;var i=n.memoizedState.inst;ae!==null&&l!==null&&Gu(l,ae.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(_.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function Wc(e,t){li(8390656,8,e,t)}function Iu(e,t){ni(2048,8,e,t)}function Gm(e){_.flags|=4;var t=_.updateQueue;if(t===null)t=ei(),_.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fc(e){var t=ye().memoizedState;return Gm({ref:t,nextImpl:e}),function(){if((P&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function $c(e,t){return ni(4,2,e,t)}function er(e,t){return ni(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,ni(4,4,tr.bind(null,t,e),a)}function Wu(){}function lr(e,t){var a=ye();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Gu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function nr(e,t){var a=ye();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Gu(t,l[1]))return l[0];if(l=e(),Ha){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l}function Fu(e,t,a){return a===void 0||(_t&1073741824)!==0&&(Y&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=uf(),_.lanes|=e,ca|=e,a)}function ir(e,t,a,l){return $e(a,t)?a:cl.current!==null?(e=Fu(e,a,l),$e(e,t)||(be=!0),e):(_t&42)===0||(_t&1073741824)!==0&&(Y&261930)===0?(be=!0,e.memoizedState=a):(e=uf(),_.lanes|=e,ca|=e,t)}function ur(e,t,a,l,n){var i=E.p;E.p=i!==0&&8>i?i:8;var u=v.T,s={};v.T=s,ts(e,!1,t,a);try{var o=n(),m=v.S;if(m!==null&&m(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var y=Om(o,l);Wl(e,t,y,it(e))}else Wl(e,t,l,it(e))}catch(b){Wl(e,t,{then:function(){},status:"rejected",reason:b},it())}finally{E.p=i,u!==null&&s.types!==null&&(u.types=s.types),v.T=u}}function jm(){}function $u(e,t,a,l){if(e.tag!==5)throw Error(h(476));var n=sr(e).queue;ur(e,n,t,U,a===null?jm:function(){return or(e),a(l)})}function sr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:U},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function or(e){var t=sr(e);t.next===null&&(t=e.alternate.memoizedState),Wl(e,t.next.queue,{},it())}function es(){return De(hn)}function cr(){return ye().memoizedState}function rr(){return ye().memoizedState}function Ym(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=la(a);var l=na(t,e,a);l!==null&&(Je(l,t,a),Zl(l,t,a)),t={cache:Ru()},e.payload=t;return}t=t.return}}function Qm(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?dr(t,a):(a=vu(e,t,a,l),a!==null&&(Je(a,e,l),mr(a,t,l)))}function fr(e,t,a){var l=it();Wl(e,t,a,l)}function Wl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))dr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,$e(s,u))return Vn(e,t,n,0),ue===null&&qn(),!1}catch{}finally{}if(a=vu(e,t,n,l),a!==null)return Je(a,e,l),mr(a,t,l),!0}return!1}function ts(e,t,a,l){if(l={lane:2,revertLane:ws(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(h(479))}else t=vu(e,a,l,2),t!==null&&Je(t,e,2)}function ii(e){var t=e.alternate;return e===_||t!==null&&t===_}function dr(e,t){rl=Fn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,vo(e,a)}}var Fl={readContext:De,use:ti,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Fl.useEffectEvent=de;var pr={readContext:De,use:ti,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Wc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,li(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){li(4,2,e,t)},useMemo:function(e,t){var a=Oe();t=t===void 0?null:t;var l=e();if(Ha){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Oe();if(a!==void 0){var n=a(t);if(Ha){Pt(!0);try{a(t)}finally{Pt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Qm.bind(null,_,e),[l.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:function(e){e=Ku(e);var t=e.queue,a=fr.bind(null,_,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,t){var a=Oe();return Fu(a,e,t)},useTransition:function(){var e=Ku(!1);return e=ur.bind(null,_,e.queue,!0,!1),Oe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=_,n=Oe();if(k){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),ue===null)throw Error(h(349));(Y&127)!==0||Oc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Wc(_c.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,{destroy:void 0},Hc.bind(null,l,i,a,t),null),a},useId:function(){var e=Oe(),t=ue.identifierPrefix;if(k){var a=xt,l=At;a=(l&~(1<<32-Fe(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$n++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Hm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:es,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var t=Oe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ts.bind(null,_,!0,a),a.dispatch=t,[e,t]},useMemoCache:ku,useCacheRefresh:function(){return Oe().memoizedState=Ym.bind(null,_)},useEffectEvent:function(e){var t=Oe(),a={impl:e};return t.memoizedState=a,function(){if((P&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},as={readContext:De,use:ti,useCallback:lr,useContext:De,useEffect:Iu,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:nr,useReducer:ai,useRef:Ic,useState:function(){return ai(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=ye();return ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(qt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:Uc,useId:cr,useHostTransitionStatus:es,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,t){var a=ye();return Gc(a,ae,e,t)},useMemoCache:ku,useCacheRefresh:rr};as.useEffectEvent=Fc;var hr={readContext:De,use:ti,useCallback:lr,useContext:De,useEffect:Iu,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:nr,useReducer:Ju,useRef:Ic,useState:function(){return Ju(qt)},useDebugValue:Wu,useDeferredValue:function(e,t){var a=ye();return ae===null?Fu(a,e,t):ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ju(qt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:Uc,useId:cr,useHostTransitionStatus:es,useFormState:Pc,useActionState:Pc,useOptimistic:function(e,t){var a=ye();return ae!==null?Gc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:rr};hr.useEffectEvent=Fc;function ls(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ns={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Je(t,e,l),Zl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Je(t,e,l),Zl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(Je(t,e,a),Zl(t,e,a))}};function gr(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!ql(a,l)||!ql(n,i):!0}function yr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function _a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function vr(e){_n(e)}function Sr(e){console.error(e)}function br(e){_n(e)}function ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Tr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function is(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){ui(e,t)},a}function Cr(e){return e=la(e),e.tag=3,e}function Er(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Tr(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Tr(t,a,l),typeof n!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Xm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?vi():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Bs(e,l,n)),!1;case 22:return a.flags|=65536,l===Jn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Bs(e,l,n)),!1}throw Error(h(435,a.tag))}return Bs(e,l,n),vi(),!1}if(k)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Au&&(e=Error(h(422),{cause:l}),jl(rt(e,a)))):(l!==Au&&(t=Error(h(423),{cause:l}),jl(rt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=rt(l,a),n=is(e.stateNode,l,n),Ou(e,n),me!==4&&(me=2)),!1;var i=Error(h(520),{cause:l});if(i=rt(i,a),sn===null?sn=[i]:sn.push(i),me!==4&&(me=2),t===null)return!0;l=rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=is(a.stateNode,l,e),Ou(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Cr(n),Er(n,e,a,l),Ou(a,n),!1}a=a.return}while(a!==null);return!1}var us=Error(h(461)),be=!1;function Ne(e,t,a,l){t.child=e===null?Dc(t,null,a,l):Oa(t,e.child,a,l)}function Ar(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return La(t),l=ju(e,t,a,u,i,n),s=Yu(),e!==null&&!be?(Qu(e,t,n),Vt(e,t,n)):(k&&s&&Cu(t),t.flags|=1,Ne(e,t,l,n),t.child)}function xr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Mr(e,t,i,l,n)):(e=jn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ps(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:ql,a(u,l)&&e.ref===t.ref)return Vt(e,t,n)}return t.flags|=1,e=wt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Mr(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(ql(i,l)&&e.ref===t.ref)if(be=!1,t.pendingProps=l=i,ps(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Vt(e,t,n)}return ss(e,t,a,l,n)}function Dr(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Nr(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kn(t,i!==null?i.cachePool:null),i!==null?Bc(t,i):_u(),Lc(t);else return l=t.lanes=536870912,Nr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(kn(t,i.cachePool),Bc(t,i),ua(),t.memoizedState=null):(e!==null&&kn(t,null),_u(),ua());return Ne(e,t,n,a),t.child}function $l(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nr(e,t,a,l,n){var i=Lu();return i=i===null?null:{parent:ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&kn(t,null),_u(),Lc(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function si(e,t){return t=ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rr(e,t,a){return Oa(t,e.child,null,a),e=si(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function km(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(k){if(l.mode==="hidden")return e=si(t,l),t.lanes=536870912,$l(null,e);if(Vu(t),(e=se)?(e=Yf(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:At,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=dc(e),a.return=t,t.child=a,Me=t,se=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return si(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Vu(t),n)if(t.flags&256)t.flags&=-257,t=Rr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(be||nl(e,t,a,!1),n=(a&e.childLanes)!==0,be||n){if(l=ue,l!==null&&(u=So(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Da(e,u),Je(l,e,u),us;vi(),t=Rr(e,t,a)}else e=i.treeContext,se=ht(u.nextSibling),Me=t,k=!0,$t=null,mt=!1,e!==null&&hc(t,e),t=si(t,l),t.flags|=4096;return t}return e=wt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ss(e,t,a,l,n){return La(t),a=ju(e,t,a,l,void 0,n),l=Yu(),e!==null&&!be?(Qu(e,t,n),Vt(e,t,n)):(k&&l&&Cu(t),t.flags|=1,Ne(e,t,a,n),t.child)}function Br(e,t,a,l,n,i){return La(t),t.updateQueue=null,a=wc(t,l,a,n),zc(e),l=Yu(),e!==null&&!be?(Qu(e,t,i),Vt(e,t,i)):(k&&l&&Cu(t),t.flags|=1,Ne(e,t,a,i),t.child)}function Lr(e,t,a,l,n){if(La(t),t.stateNode===null){var i=el,u=a.contextType;typeof u=="object"&&u!==null&&(i=De(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ns,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},wu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?De(u):el,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(ls(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ns.enqueueReplaceState(i,i.state,null),Kl(t,l,i,n),Jl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,o=_a(a,s);i.props=o;var m=i.context,y=a.contextType;u=el,typeof y=="object"&&y!==null&&(u=De(y));var b=a.getDerivedStateFromProps;y=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&yr(t,i,l,u),aa=!1;var p=t.memoizedState;i.state=p,Kl(t,l,i,n),Jl(),m=t.memoizedState,s||p!==m||aa?(typeof b=="function"&&(ls(t,a,b,l),m=t.memoizedState),(o=aa||gr(t,a,o,l,p,m,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=m),i.props=l,i.state=m,i.context=u,l=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Uu(e,t),u=t.memoizedProps,y=_a(a,u),i.props=y,b=t.pendingProps,p=i.context,m=a.contextType,o=el,typeof m=="object"&&m!==null&&(o=De(m)),s=a.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||p!==o)&&yr(t,i,l,o),aa=!1,p=t.memoizedState,i.state=p,Kl(t,l,i,n),Jl();var g=t.memoizedState;u!==b||p!==g||aa||e!==null&&e.dependencies!==null&&Qn(e.dependencies)?(typeof s=="function"&&(ls(t,a,s,l),g=t.memoizedState),(y=aa||gr(t,a,y,l,p,g,o)||e!==null&&e.dependencies!==null&&Qn(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,g,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,g,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=g),i.props=l,i.state=g,i.context=o,l=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,oi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Oa(t,e.child,null,n),t.child=Oa(t,null,a,n)):Ne(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Vt(e,t,n),e}function zr(e,t,a,l){return Ra(),t.flags|=256,Ne(e,t,a,l),t.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cs(e){return{baseLanes:e,cachePool:Tc()}}function rs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function wr(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(k){if(n?ia(t):ua(),(e=se)?(e=Yf(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:At,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=dc(e),a.return=t,t.child=a,Me=t,se=null)):e=null,e===null)throw ea(t);return Zs(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ua(),n=t.mode,s=ci({mode:"hidden",children:s},n),l=Na(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=cs(a),l.childLanes=rs(e,u,a),t.memoizedState=os,$l(null,l)):(ia(t),fs(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=ds(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),s=l.fallback,n=t.mode,l=ci({mode:"visible",children:l.children},n),s=Na(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Oa(t,e.child,null,a),l=t.child,l.memoizedState=cs(a),l.childLanes=rs(e,u,a),t.memoizedState=os,t=$l(null,l));else if(ia(t),Zs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,l=Error(h(419)),l.stack="",l.digest=u,jl({value:l,source:null,stack:null}),t=ds(e,t,a)}else if(be||nl(e,t,a,!1),u=(a&e.childLanes)!==0,be||u){if(u=ue,u!==null&&(l=So(u,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,Da(e,l),Je(u,e,l),us;ks(s)||vi(),t=ds(e,t,a)}else ks(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,se=ht(s.nextSibling),Me=t,k=!0,$t=null,mt=!1,e!==null&&hc(t,e),t=fs(t,l.children),t.flags|=4096);return t}return n?(ua(),s=l.fallback,n=t.mode,o=e.child,m=o.sibling,l=wt(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,m!==null?s=wt(m,s):(s=Na(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,$l(null,l),l=t.child,s=e.child.memoizedState,s===null?s=cs(a):(n=s.cachePool,n!==null?(o=ve._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Tc(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=rs(e,u,a),t.memoizedState=os,$l(e.child,l)):(ia(t),a=e.child,e=a.sibling,a=wt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function fs(e,t){return t=ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ci(e,t){return e=et(22,e,null,t),e.lanes=0,e}function ds(e,t,a){return Oa(t,e.child,null,a),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ur(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Du(e.return,t,a)}function ms(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Or(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=ge.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,A(ge,u),Ne(e,t,l,a),l=k?Gl:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ur(e,a,t);else if(e.tag===19)Ur(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ms(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ms(t,!0,a,null,i,l);break;case"together":ms(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ps(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qn(e)))}function Zm(e,t,a){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),ta(t,ve,e.memoizedState.cache),Ra();break;case 27:case 5:xl(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?wr(e,t,a):(ia(t),e=Vt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Or(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(ge,ge.current),l)break;return null;case 22:return t.lanes=0,Dr(e,t,a,t.pendingProps);case 24:ta(t,ve,e.memoizedState.cache)}return Vt(e,t,a)}function Hr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!ps(e,a)&&(t.flags&128)===0)return be=!1,Zm(e,t,a);be=(e.flags&131072)!==0}else be=!1,k&&(t.flags&1048576)!==0&&pc(t,Gl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e=="function")Su(e)?(l=_a(e,l),t.tag=1,t=Lr(null,t,e,l,a)):(t.tag=0,t=ss(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ut){t.tag=11,t=Ar(null,t,e,l,a);break e}else if(n===X){t.tag=14,t=xr(null,t,e,l,a);break e}}throw t=Rt(e)||e,Error(h(306,t,""))}}return t;case 0:return ss(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=_a(l,t.pendingProps),Lr(e,t,l,n,a);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(h(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Uu(e,t),Kl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ta(t,ve,l),l!==i.cache&&Nu(t,[ve],a,!0),Jl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=zr(e,t,l,a);break e}else if(l!==n){n=rt(Error(h(424)),t),jl(n),t=zr(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=ht(e.firstChild),Me=t,k=!0,$t=null,mt=!0,a=Dc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ra(),l===n){t=Vt(e,t,a);break e}Ne(e,t,l,a)}t=t.child}return t;case 26:return oi(e,t),e===null?(a=Kf(t.type,null,t.pendingProps,null))?t.memoizedState=a:k||(a=t.type,e=t.pendingProps,l=xi(V.current).createElement(a),l[xe]=t,l[je]=e,Re(l,a,e),Ee(l),t.stateNode=l):t.memoizedState=Kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xl(t),e===null&&k&&(l=t.stateNode=kf(t.type,t.pendingProps,V.current),Me=t,mt=!0,n=se,pa(t.type)?(Js=n,se=ht(l.firstChild)):se=n),Ne(e,t,t.pendingProps.children,a),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&k&&((n=l=se)&&(l=Cp(l,t.type,t.pendingProps,mt),l!==null?(t.stateNode=l,Me=t,se=ht(l.firstChild),mt=!1,n=!0):n=!1),n||ea(t)),xl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Ys(n,i)?l=null:u!==null&&Ys(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=ju(e,t,_m,null,null,a),hn._currentValue=n),oi(e,t),Ne(e,t,l,a),t.child;case 6:return e===null&&k&&((e=a=se)&&(a=Ep(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Me=t,se=null,e=!0):e=!1),e||ea(t)),null;case 13:return wr(e,t,a);case 4:return Ue(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Oa(t,null,l,a):Ne(e,t,l,a),t.child;case 11:return Ar(e,t,t.type,t.pendingProps,a);case 7:return Ne(e,t,t.pendingProps,a),t.child;case 8:return Ne(e,t,t.pendingProps.children,a),t.child;case 12:return Ne(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),Ne(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,La(t),n=De(n),l=l(n),t.flags|=1,Ne(e,t,l,a),t.child;case 14:return xr(e,t,t.type,t.pendingProps,a);case 15:return Mr(e,t,t.type,t.pendingProps,a);case 19:return Or(e,t,a);case 31:return km(e,t,a);case 22:return Dr(e,t,a,t.pendingProps);case 24:return La(t),l=De(ve),e===null?(n=Lu(),n===null&&(n=ue,i=Ru(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},wu(t),ta(t,ve,n)):((e.lanes&a)!==0&&(Uu(e,t),Kl(t,null,null,a),Jl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,ve,l)):(l=i.cache,ta(t,ve,l),l!==n.cache&&Nu(t,[ve],a,!0))),Ne(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Gt(e){e.flags|=4}function hs(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw Ua=Jn,zu}else e.flags&=-16777217}function _r(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(rf())e.flags|=8192;else throw Ua=Jn,zu}function ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?go():536870912,e.lanes|=t,gl|=t)}function en(e,t){if(!k)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Jm(e,t,a){var l=t.pendingProps;switch(Eu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ht(ve),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xu())),oe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Gt(t),i!==null?(oe(t),_r(t,i)):(oe(t),hs(t,n,null,l,a))):i?i!==e.memoizedState?(Gt(t),oe(t),_r(t,i)):(oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Gt(t),oe(t),hs(t,n,e,l,a)),null;case 27:if(Tn(t),a=V.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return oe(t),null}e=D.current,ll(t)?gc(t):(e=kf(n,l,a),t.stateNode=e,Gt(t))}return oe(t),null;case 5:if(Tn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return oe(t),null}if(i=D.current,ll(t))gc(t);else{var u=xi(V.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[xe]=t,i[je]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Re(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Gt(t)}}return oe(t),hs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(h(166));if(e=V.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Me,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[xe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Uf(e.nodeValue,a)),e||ea(t,!0)}else e=xi(e).createTextNode(l),e[xe]=t,t.stateNode=e}return oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[xe]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),e=!1}else a=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[xe]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),n=!1}else n=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ri(t,t.updateQueue),oe(t),null);case 4:return he(),e===null&&_s(t.stateNode.containerInfo),oe(t),null;case 10:return Ht(t.type),oe(t),null;case 19:if(T(ge),l=t.memoizedState,l===null)return oe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)en(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Wn(e),i!==null){for(t.flags|=128,en(l,!1),e=i.updateQueue,t.updateQueue=e,ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fc(a,e),a=a.sibling;return A(ge,ge.current&1|2),k&&Ut(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ie()>hi&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ri(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!k)return oe(t),null}else 2*Ie()-l.renderingStartTime>hi&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ie(),e.sibling=null,a=ge.current,A(ge,n?a&1|2:a&1),k&&Ut(t,l.treeForkCount),e):(oe(t),null);case 22:case 23:return at(t),qu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),a=t.updateQueue,a!==null&&ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&T(za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ht(ve),oe(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Km(e,t){switch(Eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ht(ve),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(ge),null;case 4:return he(),null;case 10:return Ht(t.type),null;case 22:case 23:return at(t),qu(),e!==null&&T(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ht(ve),null;case 25:return null;default:return null}}function qr(e,t){switch(Eu(t),t.tag){case 3:Ht(ve),he();break;case 26:case 27:case 5:Tn(t);break;case 4:he();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:T(ge);break;case 10:Ht(t.type);break;case 22:case 23:at(t),qu(),e!==null&&T(za);break;case 24:Ht(ve)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){ee(t,t.return,s)}}function sa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var o=a,m=s;try{m()}catch(y){ee(n,o,y)}}}l=l.next}while(l!==i)}}catch(y){ee(t,t.return,y)}}function Vr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Rc(t,a)}catch(l){ee(e,e.return,l)}}}function Gr(e,t,a){a.props=_a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function Mt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function jr(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function gs(e,t,a){try{var l=e.stateNode;gp(l,e.type,a,t),l[je]=t}catch(n){ee(e,e.return,n)}}function Yr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Lt));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vs(e,t,a),e=e.sibling;e!==null;)vs(e,t,a),e=e.sibling}function fi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Qr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Re(t,l,a),t[xe]=e,t[je]=a}catch(i){ee(e,e.return,i)}}var jt=!1,Te=!1,Ss=!1,Xr=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Pm(e,t){if(e=e.containerInfo,Gs=zi,e=ac(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,o=-1,m=0,y=0,b=e,p=null;t:for(;;){for(var g;b!==a||n!==0&&b.nodeType!==3||(s=u+n),b!==i||l!==0&&b.nodeType!==3||(o=u+l),b.nodeType===3&&(u+=b.nodeValue.length),(g=b.firstChild)!==null;)p=b,b=g;for(;;){if(b===e)break t;if(p===a&&++m===n&&(s=u),p===i&&++y===l&&(o=u),(g=b.nextSibling)!==null)break;b=p,p=b.parentNode}b=g}a=s===-1||o===-1?null:{start:s,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(js={focusedElem:e,selectionRange:a},zi=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var x=_a(a.type,n);e=l.getSnapshotBeforeUpdate(x,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(L){ee(a,a.return,L)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function kr(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Qt(e,a),l&4&&tn(5,a);break;case 1:if(Qt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(a,a.return,u)}else{var n=_a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(a,a.return,u)}}l&64&&Vr(a),l&512&&an(a,a.return);break;case 3:if(Qt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Rc(e,t)}catch(u){ee(a,a.return,u)}}break;case 27:t===null&&l&4&&Qr(a);case 26:case 5:Qt(e,a),t===null&&l&4&&jr(a),l&512&&an(a,a.return);break;case 12:Qt(e,a);break;case 31:Qt(e,a),l&4&&Kr(e,a);break;case 13:Qt(e,a),l&4&&Pr(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=np.bind(null,a),Ap(e,a))));break;case 22:if(l=a.memoizedState!==null||jt,!l){t=t!==null&&t.memoizedState!==null||Te,n=jt;var i=Te;jt=l,(Te=t)&&!i?Xt(e,a,(a.subtreeFlags&8772)!==0):Qt(e,a),jt=n,Te=i}break;case 30:break;default:Qt(e,a)}}function Zr(e){var t=e.alternate;t!==null&&(e.alternate=null,Zr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Qe=!1;function Yt(e,t,a){for(a=a.child;a!==null;)Jr(e,t,a),a=a.sibling}function Jr(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:Te||Mt(a,t),Yt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Mt(a,t);var l=re,n=Qe;pa(a.type)&&(re=a.stateNode,Qe=!1),Yt(e,t,a),dn(a.stateNode),re=l,Qe=n;break;case 5:Te||Mt(a,t);case 6:if(l=re,n=Qe,re=null,Yt(e,t,a),re=l,Qe=n,re!==null)if(Qe)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{re.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:re!==null&&(Qe?(e=re,Gf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Al(e)):Gf(re,a.stateNode));break;case 4:l=re,n=Qe,re=a.stateNode.containerInfo,Qe=!0,Yt(e,t,a),re=l,Qe=n;break;case 0:case 11:case 14:case 15:sa(2,a,t),Te||sa(4,a,t),Yt(e,t,a);break;case 1:Te||(Mt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Gr(a,t,l)),Yt(e,t,a);break;case 21:Yt(e,t,a);break;case 22:Te=(l=Te)||a.memoizedState!==null,Yt(e,t,a),Te=l;break;default:Yt(e,t,a)}}function Kr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(a){ee(t,t.return,a)}}}function Pr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(a){ee(t,t.return,a)}}function Im(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xr),t;default:throw Error(h(435,e.tag))}}function di(e,t){var a=Im(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=ip.bind(null,e,l);l.then(n,n)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){re=s.stateNode,Qe=!1;break e}break;case 5:re=s.stateNode,Qe=!1;break e;case 3:case 4:re=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(re===null)throw Error(h(160));Jr(i,u,n),re=null,Qe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ir(t,e),t=t.sibling}var St=null;function Ir(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),ke(e),l&4&&(sa(3,e,e.return),tn(3,e),sa(5,e,e.return));break;case 1:Xe(t,e),ke(e),l&512&&(Te||a===null||Mt(a,a.return)),l&64&&jt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(Xe(t,e),ke(e),l&512&&(Te||a===null||Mt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Rl]||i[xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Re(i,l,a),i[xe]=e,Ee(i),l=i;break e;case"link":var u=Wf("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Re(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Wf("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Re(i,l,a),n.head.appendChild(i);break;default:throw Error(h(468,l))}i[xe]=e,Ee(i),l=i}e.stateNode=l}else Ff(n,e.type,e.stateNode);else e.stateNode=If(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Ff(n,e.type,e.stateNode):If(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&gs(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),ke(e),l&512&&(Te||a===null||Mt(a,a.return)),a!==null&&l&4&&gs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),ke(e),l&512&&(Te||a===null||Mt(a,a.return)),e.flags&32){n=e.stateNode;try{Ja(n,"")}catch(x){ee(e,e.return,x)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,gs(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ss=!0);break;case 6:if(Xe(t,e),ke(e),l&4){if(e.stateNode===null)throw Error(h(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(x){ee(e,e.return,x)}}break;case 3:if(Ni=null,n=St,St=Mi(t.containerInfo),Xe(t,e),St=n,ke(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(x){ee(e,e.return,x)}Ss&&(Ss=!1,Wr(e));break;case 4:l=St,St=Mi(e.stateNode.containerInfo),Xe(t,e),ke(e),St=l;break;case 12:Xe(t,e),ke(e);break;case 31:Xe(t,e),ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,di(e,l)));break;case 13:Xe(t,e),ke(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pi=Ie()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,di(e,l)));break;case 22:n=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,m=jt,y=Te;if(jt=m||n,Te=y||o,Xe(t,e),Te=y,jt=m,ke(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||jt||Te||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var b=o.memoizedProps.style,p=b!=null&&b.hasOwnProperty("display")?b.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(x){ee(o,o.return,x)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(x){ee(o,o.return,x)}}}else if(t.tag===18){if(a===null){o=t;try{var g=o.stateNode;n?jf(g,!0):jf(o.stateNode,!1)}catch(x){ee(o,o.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,di(e,a))));break;case 19:Xe(t,e),ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,di(e,l)));break;case 30:break;case 21:break;default:Xe(t,e),ke(e)}}function ke(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Yr(l)){a=l;break}l=l.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var n=a.stateNode,i=ys(e);fi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Ja(u,""),a.flags&=-33);var s=ys(e);fi(e,s,u);break;case 3:case 4:var o=a.stateNode.containerInfo,m=ys(e);vs(e,m,o);break;default:throw Error(h(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kr(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),qa(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gr(t,t.return,a),qa(t);break;case 27:dn(t.stateNode);case 26:case 5:Mt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Xt(n,i,a),tn(4,i);break;case 1:if(Xt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(l,l.return,m)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Nc(o[n],s)}catch(m){ee(l,l.return,m)}}a&&u&64&&Vr(i),an(i,i.return);break;case 27:Qr(i);case 26:case 5:Xt(n,i,a),a&&l===null&&u&4&&jr(i),an(i,i.return);break;case 12:Xt(n,i,a);break;case 31:Xt(n,i,a),a&&u&4&&Kr(n,i);break;case 13:Xt(n,i,a),a&&u&4&&Pr(n,i);break;case 22:i.memoizedState===null&&Xt(n,i,a),an(i,i.return);break;case 30:break;default:Xt(n,i,a)}t=t.sibling}}function bs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yl(a))}function Ts(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e))}function bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fr(e,t,a,l),t=t.sibling}function Fr(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,l),n&2048&&tn(9,t);break;case 1:bt(e,t,a,l);break;case 3:bt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e)));break;case 12:if(n&2048){bt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(t,t.return,o)}}else bt(e,t,a,l);break;case 31:bt(e,t,a,l);break;case 13:bt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?bt(e,t,a,l):ln(e,t):i._visibility&2?bt(e,t,a,l):(i._visibility|=2,ml(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bs(u,t);break;case 24:bt(e,t,a,l),n&2048&&Ts(t.alternate,t);break;default:bt(e,t,a,l)}}function ml(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,o=l,m=u.flags;switch(u.tag){case 0:case 11:case 15:ml(i,u,s,o,n),tn(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?ml(i,u,s,o,n):ln(i,u):(y._visibility|=2,ml(i,u,s,o,n)),n&&m&2048&&bs(u.alternate,u);break;case 24:ml(i,u,s,o,n),n&&m&2048&&Ts(u.alternate,u);break;default:ml(i,u,s,o,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&bs(l.alternate,l);break;case 24:ln(a,l),n&2048&&Ts(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function pl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)$r(e,t,a),e=e.sibling}function $r(e,t,a){switch(e.tag){case 26:pl(e,t,a),e.flags&nn&&e.memoizedState!==null&&Hp(a,St,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,a);break;case 3:case 4:var l=St;St=Mi(e.stateNode.containerInfo),pl(e,t,a),St=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,pl(e,t,a),nn=l):pl(e,t,a));break;default:pl(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ae=l,af(l,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&sa(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mi(e)):un(e);break;default:un(e)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ae=l,af(l,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mi(t));break;default:mi(t)}e=e.sibling}}function af(e,t){for(;Ae!==null;){var a=Ae;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ae=l;else e:for(a=e;Ae!==null;){l=Ae;var n=l.sibling,i=l.return;if(Zr(l),l===a){Ae=null;break e}if(n!==null){n.return=i,Ae=n;break e}Ae=i}}}var Wm={getCacheForType:function(e){var t=De(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return De(ve).controller.signal}},Fm=typeof WeakMap=="function"?WeakMap:Map,P=0,ue=null,G=null,Y=0,$=0,lt=null,oa=!1,hl=!1,Cs=!1,kt=0,me=0,ca=0,Va=0,Es=0,nt=0,gl=0,sn=null,Ze=null,As=!1,pi=0,lf=0,hi=1/0,gi=null,ra=null,Ce=0,fa=null,yl=null,Zt=0,xs=0,Ms=null,nf=null,on=0,Ds=null;function it(){return(P&2)!==0&&Y!==0?Y&-Y:v.T!==null?ws():bo()}function uf(){if(nt===0)if((Y&536870912)===0||k){var e=An;An<<=1,(An&3932160)===0&&(An=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Je(e,t,a){(e===ue&&($===2||$===9)||e.cancelPendingCommit!==null)&&(vl(e,0),da(e,Y,nt,!1)),Nl(e,a),((P&2)===0||e!==ue)&&(e===ue&&((P&2)===0&&(Va|=a),me===4&&da(e,Y,nt,!1)),Dt(e))}function sf(e,t,a){if((P&6)!==0)throw Error(h(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?tp(e,t):Rs(e,t,!0),i=l;do{if(n===0){hl&&!l&&da(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$m(a)){n=Rs(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=sn;var o=s.current.memoizedState.isDehydrated;if(o&&(vl(s,u).flags|=256),u=Rs(s,u,!1),u!==2){if(Cs&&!o){s.errorRecoveryDisabledLanes|=i,Va|=i,n=4;break e}i=Ze,Ze=n,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){vl(e,0),da(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:da(l,t,nt,!oa);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=pi+300-Ie(),10<n)){if(da(l,t,nt,!oa),Mn(l,0,!0)!==0)break e;Zt=t,l.timeoutHandle=qf(of.bind(null,l,a,Ze,gi,As,t,nt,Va,gl,oa,i,"Throttled",-0,0),n);break e}of(l,a,Ze,gi,As,t,nt,Va,gl,oa,i,null,-0,0)}}break}while(!0);Dt(e)}function of(e,t,a,l,n,i,u,s,o,m,y,b,p,g){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Lt},$r(t,i,b);var x=(i&62914560)===i?pi-Ie():(i&4194048)===i?lf-Ie():0;if(x=_p(b,x),x!==null){Zt=i,e.cancelPendingCommit=x(gf.bind(null,e,t,i,a,l,n,u,s,o,y,b,null,p,g)),da(e,i,u,!m);return}}gf(e,t,i,a,l,n,u,s,o)}function $m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!$e(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,l){t&=~Es,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Fe(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&yo(e,a,t)}function yi(){return(P&6)===0?(cn(0),!1):!0}function Ns(){if(G!==null){if($===0)var e=G.return;else e=G,Ot=Ba=null,Xu(e),ol=null,Xl=0,e=G;for(;e!==null;)qr(e.alternate,e),e=e.return;G=null}}function vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,Ns(),ue=e,G=a=wt(e.current,null),Y=t,$=0,lt=null,oa=!1,hl=Dl(e,t),Cs=!1,gl=nt=Es=Va=ca=me=0,Ze=sn=null,As=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Fe(l),i=1<<n;t|=e[n],l&=~i}return kt=t,qn(),a}function cf(e,t){_=null,v.H=Fl,t===sl||t===Zn?(t=Ac(),$=3):t===zu?(t=Ac(),$=4):$=t===us?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,G===null&&(me=1,ui(e,rt(t,e.current)))}function rf(){var e=tt.current;return e===null?!0:(Y&4194048)===Y?pt===null:(Y&62914560)===Y||(Y&536870912)!==0?e===pt:!1}function ff(){var e=v.H;return v.H=Fl,e===null?Fl:e}function df(){var e=v.A;return v.A=Wm,e}function vi(){me=4,oa||(Y&4194048)!==Y&&tt.current!==null||(hl=!0),(ca&134217727)===0&&(Va&134217727)===0||ue===null||da(ue,Y,nt,!1)}function Rs(e,t,a){var l=P;P|=2;var n=ff(),i=df();(ue!==e||Y!==t)&&(gi=null,vl(e,t)),t=!1;var u=me;e:do try{if($!==0&&G!==null){var s=G,o=lt;switch($){case 8:Ns(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=$;if($=0,lt=null,Sl(e,s,o,m),a&&hl){u=0;break e}break;default:m=$,$=0,lt=null,Sl(e,s,o,m)}}ep(),u=me;break}catch(y){cf(e,y)}while(!0);return t&&e.shellSuspendCounter++,Ot=Ba=null,P=l,v.H=n,v.A=i,G===null&&(ue=null,Y=0,qn()),u}function ep(){for(;G!==null;)mf(G)}function tp(e,t){var a=P;P|=2;var l=ff(),n=df();ue!==e||Y!==t?(gi=null,hi=Ie()+500,vl(e,t)):hl=Dl(e,t);e:do try{if($!==0&&G!==null){t=G;var i=lt;t:switch($){case 1:$=0,lt=null,Sl(e,t,i,1);break;case 2:case 9:if(Cc(i)){$=0,lt=null,pf(t);break}t=function(){$!==2&&$!==9||ue!==e||($=7),Dt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Cc(i)?($=0,lt=null,pf(t)):($=0,lt=null,Sl(e,t,i,7));break;case 5:var u=null;switch(G.tag){case 26:u=G.memoizedState;case 5:case 27:var s=G;if(u?$f(u):s.stateNode.complete){$=0,lt=null;var o=s.sibling;if(o!==null)G=o;else{var m=s.return;m!==null?(G=m,Si(m)):G=null}break t}}$=0,lt=null,Sl(e,t,i,5);break;case 6:$=0,lt=null,Sl(e,t,i,6);break;case 8:Ns(),me=6;break e;default:throw Error(h(462))}}ap();break}catch(y){cf(e,y)}while(!0);return Ot=Ba=null,v.H=l,v.A=n,P=a,G!==null?0:(ue=null,Y=0,qn(),me)}function ap(){for(;G!==null&&!xd();)mf(G)}function mf(e){var t=Hr(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?Si(e):G=t}function pf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Br(a,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Br(a,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Xu(t);default:qr(a,t),t=G=fc(t,kt),t=Hr(a,t,kt)}e.memoizedProps=e.pendingProps,t===null?Si(e):G=t}function Sl(e,t,a,l){Ot=Ba=null,Xu(t),ol=null,Xl=0;var n=t.return;try{if(Xm(e,n,t,a,Y)){me=1,ui(e,rt(a,e.current)),G=null;return}}catch(i){if(n!==null)throw G=n,i;me=1,ui(e,rt(a,e.current)),G=null;return}t.flags&32768?(k||l===1?e=!0:hl||(Y&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),hf(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){hf(t,oa);return}e=t.return;var a=Jm(t.alternate,t,kt);if(a!==null){G=a;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);me===0&&(me=5)}function hf(e,t){do{var a=Km(e.alternate,e);if(a!==null){a.flags&=32767,G=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=a}while(e!==null);me=6,G=null}function gf(e,t,a,l,n,i,u,s,o){e.cancelPendingCommit=null;do bi();while(Ce!==0);if((P&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=yu,Od(e,a,i,u,s,o),e===ue&&(G=ue=null,Y=0),yl=t,fa=e,Zt=a,xs=i,Ms=n,nf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,up(Cn,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,n=E.p,E.p=2,u=P,P|=4;try{Pm(e,t,a)}finally{P=u,E.p=n,v.T=l}}Ce=1,yf(),vf(),Sf()}}function yf(){if(Ce===1){Ce=0;var e=fa,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=E.p;E.p=2;var n=P;P|=4;try{Ir(t,e);var i=js,u=ac(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&tc(s.ownerDocument.documentElement,s)){if(o!==null&&du(s)){var m=o.start,y=o.end;if(y===void 0&&(y=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(y,s.value.length);else{var b=s.ownerDocument||document,p=b&&b.defaultView||window;if(p.getSelection){var g=p.getSelection(),x=s.textContent.length,L=Math.min(o.start,x),ne=o.end===void 0?L:Math.min(o.end,x);!g.extend&&L>ne&&(u=ne,ne=L,L=u);var f=ec(s,L),c=ec(s,ne);if(f&&c&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==c.node||g.focusOffset!==c.offset)){var d=b.createRange();d.setStart(f.node,f.offset),g.removeAllRanges(),L>ne?(g.addRange(d),g.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),g.addRange(d))}}}}for(b=[],g=s;g=g.parentNode;)g.nodeType===1&&b.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<b.length;s++){var S=b[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}zi=!!Gs,js=Gs=null}finally{P=n,E.p=l,v.T=a}}e.current=t,Ce=2}}function vf(){if(Ce===2){Ce=0;var e=fa,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=E.p;E.p=2;var n=P;P|=4;try{kr(e,t.alternate,t)}finally{P=n,E.p=l,v.T=a}}Ce=3}}function Sf(){if(Ce===4||Ce===3){Ce=0,Md();var e=fa,t=yl,a=Zt,l=nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ce=5:(Ce=0,yl=fa=null,bf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ra=null),Ji(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=v.T,n=E.p,E.p=2,v.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{v.T=t,E.p=n}}(Zt&3)!==0&&bi(),Dt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Ds?on++:(on=0,Ds=e):on=0,cn(0)}}function bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yl(t)))}function bi(){return yf(),vf(),Sf(),Tf()}function Tf(){if(Ce!==5)return!1;var e=fa,t=xs;xs=0;var a=Ji(Zt),l=v.T,n=E.p;try{E.p=32>a?32:a,v.T=null,a=Ms,Ms=null;var i=fa,u=Zt;if(Ce=0,yl=fa=null,Zt=0,(P&6)!==0)throw Error(h(331));var s=P;if(P|=4,tf(i.current),Fr(i,i.current,u,a),P=s,cn(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ml,i)}catch{}return!0}finally{E.p=n,v.T=l,bf(e,t)}}function Cf(e,t,a){t=rt(a,t),t=is(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Nl(e,2),Dt(e))}function ee(e,t,a){if(e.tag===3)Cf(e,e,a);else for(;t!==null;){if(t.tag===3){Cf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))){e=rt(a,e),a=Cr(2),l=na(t,a,2),l!==null&&(Er(a,l,t,e),Nl(l,2),Dt(l));break}}t=t.return}}function Bs(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Fm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Cs=!0,n.add(a),e=lp.bind(null,e,t,a),t.then(e,e))}function lp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(Y&a)===a&&(me===4||me===3&&(Y&62914560)===Y&&300>Ie()-pi?(P&2)===0&&vl(e,0):Es|=a,gl===Y&&(gl=0)),Dt(e)}function Ef(e,t){t===0&&(t=go()),e=Da(e,t),e!==null&&(Nl(e,t),Dt(e))}function np(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ef(e,a)}function ip(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(t),Ef(e,a)}function up(e,t){return Qi(e,t)}var Ti=null,bl=null,Ls=!1,Ci=!1,zs=!1,ma=0;function Dt(e){e!==bl&&e.next===null&&(bl===null?Ti=bl=e:bl=bl.next=e),Ci=!0,Ls||(Ls=!0,op())}function cn(e,t){if(!zs&&Ci){zs=!0;do for(var a=!1,l=Ti;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-Fe(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Df(l,i))}else i=Y,i=Mn(l,l===ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,Df(l,i));l=l.next}while(a);zs=!1}}function sp(){Af()}function Af(){Ci=Ls=!1;var e=0;ma!==0&&vp()&&(e=ma);for(var t=Ie(),a=null,l=Ti;l!==null;){var n=l.next,i=xf(l,t);i===0?(l.next=null,a===null?Ti=n:a.next=n,n===null&&(bl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ci=!0)),l=n}Ce!==0&&Ce!==5||cn(e),ma!==0&&(ma=0)}function xf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Fe(i),s=1<<u,o=n[u];o===-1?((s&a)===0||(s&l)!==0)&&(n[u]=Ud(s,t)):o<=t&&(e.expiredLanes|=s),i&=~s}if(t=ue,a=Y,a=Mn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Xi(l),Ji(a)){case 2:case 8:a=po;break;case 32:a=Cn;break;case 268435456:a=ho;break;default:a=Cn}return l=Mf.bind(null,e),a=Qi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Xi(l),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var l=Y;return l=Mn(e,e===ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(sf(e,l,t),xf(e,Ie()),e.callbackNode!=null&&e.callbackNode===a?Mf.bind(null,e):null)}function Df(e,t){if(bi())return null;sf(e,t,!0)}function op(){bp(function(){(P&6)!==0?Qi(mo,sp):Af()})}function ws(){if(ma===0){var e=il;e===0&&(e=En,En<<=1,(En&261888)===0&&(En=256)),ma=e}return ma}function Nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bn(""+e)}function Rf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Nf((n[je]||null).action),u=l.submitter;u&&(t=(t=u[je]||null)?Nf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Un("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ma!==0){var o=u?Rf(n,u):new FormData(n);$u(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Rf(n,u):new FormData(n),$u(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Us=0;Us<gu.length;Us++){var Os=gu[Us],rp=Os.toLowerCase(),fp=Os[0].toUpperCase()+Os.slice(1);vt(rp,"on"+fp)}vt(ic,"onAnimationEnd"),vt(uc,"onAnimationIteration"),vt(sc,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Dm,"onTransitionRun"),vt(Nm,"onTransitionStart"),vt(Rm,"onTransitionCancel"),vt(oc,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn));function Bf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],o=s.instance,m=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=m;try{i(n)}catch(y){_n(y)}n.currentTarget=null,i=o}else for(u=0;u<l.length;u++){if(s=l[u],o=s.instance,m=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=m;try{i(n)}catch(y){_n(y)}n.currentTarget=null,i=o}}}}function j(e,t){var a=t[Ki];a===void 0&&(a=t[Ki]=new Set);var l=e+"__bubble";a.has(l)||(Lf(t,e,2,!1),a.add(l))}function Hs(e,t,a){var l=0;t&&(l|=4),Lf(a,e,l,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[Ei]){e[Ei]=!0,Eo.forEach(function(a){a!=="selectionchange"&&(dp.has(a)||Hs(a,!1,e),Hs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Hs("selectionchange",!1,t))}}function Lf(e,t,a,l){switch(ud(t)){case 2:var n=Gp;break;case 8:n=jp;break;default:n=Fs}a=n.bind(null,t,a,e),n=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function qs(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ya(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=i=u;continue e}s=s.parentNode}}l=l.return}Oo(function(){var m=i,y=tu(a),b=[];e:{var p=cc.get(e);if(p!==void 0){var g=Un,x=e;switch(e){case"keypress":if(zn(a)===0)break e;case"keydown":case"keyup":g=im;break;case"focusin":x="focus",g=su;break;case"focusout":x="blur",g=su;break;case"beforeblur":case"afterblur":g=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=om;break;case ic:case uc:case sc:g=Id;break;case oc:g=rm;break;case"scroll":case"scrollend":g=kd;break;case"wheel":g=dm;break;case"copy":case"cut":case"paste":g=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Go;break;case"toggle":case"beforetoggle":g=pm}var L=(t&4)!==0,ne=!L&&(e==="scroll"||e==="scrollend"),f=L?p!==null?p+"Capture":null:p;L=[];for(var c=m,d;c!==null;){var S=c;if(d=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||d===null||f===null||(S=Ll(c,f),S!=null&&L.push(fn(c,S,d))),ne)break;c=c.return}0<L.length&&(p=new g(p,x,null,a,y),b.push({event:p,listeners:L}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&a!==eu&&(x=a.relatedTarget||a.fromElement)&&(Ya(x)||x[ja]))break e;if((g||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=a.relatedTarget||a.toElement,g=m,x=x?Ya(x):null,x!==null&&(ne=K(x),L=x.tag,x!==ne||L!==5&&L!==27&&L!==6)&&(x=null)):(g=null,x=m),g!==x)){if(L=qo,S="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(L=Go,S="onPointerLeave",f="onPointerEnter",c="pointer"),ne=g==null?p:Bl(g),d=x==null?p:Bl(x),p=new L(S,c+"leave",g,a,y),p.target=ne,p.relatedTarget=d,S=null,Ya(y)===m&&(L=new L(f,c+"enter",x,a,y),L.target=d,L.relatedTarget=ne,S=L),ne=S,g&&x)t:{for(L=mp,f=g,c=x,d=0,S=f;S;S=L(S))d++;S=0;for(var R=c;R;R=L(R))S++;for(;0<d-S;)f=L(f),d--;for(;0<S-d;)c=L(c),S--;for(;d--;){if(f===c||c!==null&&f===c.alternate){L=f;break t}f=L(f),c=L(c)}L=null}else L=null;g!==null&&zf(b,p,g,L,!1),x!==null&&ne!==null&&zf(b,ne,x,L,!0)}}e:{if(p=m?Bl(m):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var Z=Ko;else if(Zo(p))if(Po)Z=Am;else{Z=Cm;var N=Tm}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&$i(m.elementType)&&(Z=Ko):Z=Em;if(Z&&(Z=Z(e,m))){Jo(b,Z,a,y);break e}N&&N(e,p,m),e==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&Fi(p,"number",p.value)}switch(N=m?Bl(m):window,e){case"focusin":(Zo(N)||N.contentEditable==="true")&&(Wa=N,mu=m,Vl=null);break;case"focusout":Vl=mu=Wa=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,lc(b,a,y);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":lc(b,a,y)}var q;if(cu)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Ia?Xo(e,a)&&(Q="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Q="onCompositionStart");Q&&(jo&&a.locale!=="ko"&&(Ia||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Ia&&(q=Ho()):(Wt=y,nu="value"in Wt?Wt.value:Wt.textContent,Ia=!0)),N=Ai(m,Q),0<N.length&&(Q=new Vo(Q,e,null,a,y),b.push({event:Q,listeners:N}),q?Q.data=q:(q=ko(a),q!==null&&(Q.data=q)))),(q=gm?ym(e,a):vm(e,a))&&(Q=Ai(m,"onBeforeInput"),0<Q.length&&(N=new Vo("onBeforeInput","beforeinput",null,a,y),b.push({event:N,listeners:Q}),N.data=q)),cp(b,e,m,a,y)}Bf(b,t)})}function fn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ai(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ll(e,a),n!=null&&l.unshift(fn(e,n,i)),n=Ll(e,t),n!=null&&l.push(fn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function mp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,o=s.alternate,m=s.stateNode;if(s=s.tag,o!==null&&o===l)break;s!==5&&s!==26&&s!==27||m===null||(o=m,n?(m=Ll(a,i),m!=null&&u.unshift(fn(a,m,o))):n||(m=Ll(a,i),m!=null&&u.push(fn(a,m,o)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var pp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function wf(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(hp,"")}function Uf(e,t){return t=wf(t),wf(e)===t}function le(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ja(e,""+l);break;case"className":Nn(e,"class",l);break;case"tabIndex":Nn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(e,a,l);break;case"style":wo(e,l,i);break;case"data":if(t!=="object"){Nn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Bn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Bn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Lt);break;case"onScroll":l!=null&&j("scroll",e);break;case"onScrollEnd":l!=null&&j("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Bn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":j("beforetoggle",e),j("toggle",e),Dn(e,"popover",l);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qd.get(a)||a,Dn(e,a,l))}}function Vs(e,t,a,l,n,i){switch(a){case"style":wo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&Ja(e,""+l);break;case"onScroll":l!=null&&j("scroll",e);break;case"onScrollEnd":l!=null&&j("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Lt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Dn(e,a,l)}}}function Re(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":j("error",e),j("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:le(e,t,i,u,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":j("invalid",e);var s=i=u=n=null,o=null,m=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":u=y;break;case"checked":o=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:le(e,t,l,y,a,null)}}Ro(e,i,s,o,m,u,n,!1);return;case"select":j("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:le(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Za(e,!!l,t,!1):a!=null&&Za(e,!!l,a,!0);return;case"textarea":j("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:le(e,t,u,s,a,null)}Lo(e,l,n,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,o,l,a,null)}return;case"dialog":j("beforetoggle",e),j("toggle",e),j("cancel",e),j("close",e);break;case"iframe":case"object":j("load",e);break;case"video":case"audio":for(l=0;l<rn.length;l++)j(rn[l],e);break;case"image":j("error",e),j("load",e);break;case"details":j("toggle",e);break;case"embed":case"source":case"link":j("error",e),j("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:le(e,t,m,l,a,null)}return;default:if($i(t)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&Vs(e,t,y,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&le(e,t,s,l,a,null))}function gp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,m=null,y=null;for(g in a){var b=a[g];if(a.hasOwnProperty(g)&&b!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=b;default:l.hasOwnProperty(g)||le(e,t,g,null,l,b)}}for(var p in l){var g=l[p];if(b=a[p],l.hasOwnProperty(p)&&(g!=null||b!=null))switch(p){case"type":i=g;break;case"name":n=g;break;case"checked":m=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==b&&le(e,t,p,g,l,b)}}Wi(e,u,s,o,m,y,i,n);return;case"select":g=u=s=p=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":g=o;default:l.hasOwnProperty(i)||le(e,t,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&le(e,t,n,i,l,o)}t=s,a=u,l=g,p!=null?Za(e,!!a,p,!1):!!l!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":g=p=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:le(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&le(e,t,u,n,l,i)}Bo(e,p,g);return;case"option":for(var x in a)if(p=a[x],a.hasOwnProperty(x)&&p!=null&&!l.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:le(e,t,x,null,l,p)}for(o in l)if(p=l[o],g=a[o],l.hasOwnProperty(o)&&p!==g&&(p!=null||g!=null))switch(o){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:le(e,t,o,p,l,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in a)p=a[L],a.hasOwnProperty(L)&&p!=null&&!l.hasOwnProperty(L)&&le(e,t,L,null,l,p);for(m in l)if(p=l[m],g=a[m],l.hasOwnProperty(m)&&p!==g&&(p!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:le(e,t,m,p,l,g)}return;default:if($i(t)){for(var ne in a)p=a[ne],a.hasOwnProperty(ne)&&p!==void 0&&!l.hasOwnProperty(ne)&&Vs(e,t,ne,void 0,l,p);for(y in l)p=l[y],g=a[y],!l.hasOwnProperty(y)||p===g||p===void 0&&g===void 0||Vs(e,t,y,p,l,g);return}}for(var f in a)p=a[f],a.hasOwnProperty(f)&&p!=null&&!l.hasOwnProperty(f)&&le(e,t,f,null,l,p);for(b in l)p=l[b],g=a[b],!l.hasOwnProperty(b)||p===g||p==null&&g==null||le(e,t,b,p,l,g)}function Of(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Of(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],m=o.startTime;if(m>s)break;var y=o.transferSize,b=o.initiatorType;y&&Of(b)&&(o=o.responseEnd,u+=y*(o<s?1:(s-m)/(o-m)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gs=null,js=null;function xi(e){return e.nodeType===9?e:e.ownerDocument}function Hf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _f(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=null;function vp(){var e=window.event;return e&&e.type==="popstate"?e===Qs?!1:(Qs=e,!0):(Qs=null,!1)}var qf=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(Tp)}:qf;function Tp(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Gf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Al(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")dn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Rl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&dn(e.ownerDocument.body);a=n}while(a);Al(t)}function jf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xs(a),Pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function Ep(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function Yf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function ks(e){return e.data==="$?"||e.data==="$~"}function Zs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ap(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Js=null;function Qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function kf(e,t,a){switch(t=xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pi(e)}var gt=new Map,Zf=new Set;function Mi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=E.d;E.d={f:xp,r:Mp,D:Dp,C:Np,L:Rp,m:Bp,X:zp,S:Lp,M:wp};function xp(){var e=Jt.f(),t=yi();return e||t}function Mp(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?or(t):Jt.r(e)}var Tl=typeof document>"u"?null:document;function Jf(e,t,a){var l=Tl;if(l&&typeof t=="string"&&t){var n=ot(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Zf.has(n)||(Zf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Re(t,"link",e),Ee(t),l.head.appendChild(t)))}}function Dp(e){Jt.D(e),Jf("dns-prefetch",e,null)}function Np(e,t){Jt.C(e,t),Jf("preconnect",e,t)}function Rp(e,t,a){Jt.L(e,t,a);var l=Tl;if(l&&e&&t){var n='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ot(a.imageSizes)+'"]')):n+='[href="'+ot(e)+'"]';var i=n;switch(t){case"style":i=Cl(e);break;case"script":i=El(e)}gt.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),gt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(mn(i))||t==="script"&&l.querySelector(pn(i))||(t=l.createElement("link"),Re(t,"link",e),Ee(t),l.head.appendChild(t)))}}function Bp(e,t){Jt.m(e,t);var a=Tl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=El(e)}if(!gt.has(i)&&(e=w({rel:"modulepreload",href:e},t),gt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pn(i)))return}l=a.createElement("link"),Re(l,"link",e),Ee(l),a.head.appendChild(l)}}}function Lp(e,t,a){Jt.S(e,t,a);var l=Tl;if(l&&e){var n=Xa(l).hoistableStyles,i=Cl(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(mn(i)))s.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=gt.get(i))&&Ks(e,a);var o=u=l.createElement("link");Ee(o),Re(o,"link",e),o._p=new Promise(function(m,y){o.onload=m,o.onerror=y}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Di(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function zp(e,t){Jt.X(e,t);var a=Tl;if(a&&e){var l=Xa(a).hoistableScripts,n=El(e),i=l.get(n);i||(i=a.querySelector(pn(n)),i||(e=w({src:e,async:!0},t),(t=gt.get(n))&&Ps(e,t),i=a.createElement("script"),Ee(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function wp(e,t){Jt.M(e,t);var a=Tl;if(a&&e){var l=Xa(a).hoistableScripts,n=El(e),i=l.get(n);i||(i=a.querySelector(pn(n)),i||(e=w({src:e,async:!0,type:"module"},t),(t=gt.get(n))&&Ps(e,t),i=a.createElement("script"),Ee(i),Re(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Kf(e,t,a,l){var n=(n=V.current)?Mi(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Cl(a.href),a=Xa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cl(a.href);var i=Xa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(mn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gt.set(e,a),i||Up(n,e,a,u.state))),t&&l===null)throw Error(h(528,""));return u}if(t&&l!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=El(a),a=Xa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Cl(e){return'href="'+ot(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Pf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Up(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Re(t,"link",a),Ee(t),e.head.appendChild(t))}function El(e){return'[src="'+ot(e)+'"]'}function pn(e){return"script[async]"+e}function If(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(l)return t.instance=l,Ee(l),l;var n=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ee(l),Re(l,"style",n),Di(l,a.precedence,e),t.instance=l;case"stylesheet":n=Cl(a.href);var i=e.querySelector(mn(n));if(i)return t.state.loading|=4,t.instance=i,Ee(i),i;l=Pf(a),(n=gt.get(n))&&Ks(l,n),i=(e.ownerDocument||e).createElement("link"),Ee(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Re(i,"link",l),t.state.loading|=4,Di(i,a.precedence,e),t.instance=i;case"script":return i=El(a.src),(n=e.querySelector(pn(i)))?(t.instance=n,Ee(n),n):(l=a,(n=gt.get(i))&&(l=w({},a),Ps(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ee(n),Re(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Di(l,a.precedence,e));return t.instance}function Di(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ni=null;function Wf(e,t,a){if(Ni===null){var l=new Map,n=Ni=new Map;n.set(a,l)}else n=Ni,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Rl]||i[xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function Ff(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Op(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Cl(l.href),i=t.querySelector(mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ri.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ee(i);return}i=t.ownerDocument||t,l=Pf(l),(n=gt.get(n))&&Ks(l,n),i=i.createElement("link"),Ee(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Re(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ri.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Is=0;function _p(e,t){return e.stylesheets&&e.count===0&&Li(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Is===0&&(Is=62500*yp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Is?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ri(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Li(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bi=null;function Li(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bi=new Map,t.forEach(qp,e),Bi=null,Ri.call(e))}function qp(e,t){if(!(t.state.loading&4)){var a=Bi.get(e);if(a)var l=a.get(null);else{a=new Map,Bi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ri.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hn={$$typeof:Be,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Vp(e,t,a,l,n,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ed(e,t,a,l,n,i,u,s,o,m,y,b){return e=new Vp(e,t,a,u,o,m,y,b,s),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=Ru(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},wu(i),e}function td(e){return e?(e=el,e):el}function ad(e,t,a,l,n,i){n=td(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(Je(a,e,t),Zl(a,e,t))}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ws(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function nd(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Je(t,e,67108864),Ws(e,67108864)}}function id(e){if(e.tag===13||e.tag===31){var t=it();t=Zi(t);var a=Da(e,t);a!==null&&Je(a,e,t),Ws(e,t)}}var zi=!0;function Gp(e,t,a,l){var n=v.T;v.T=null;var i=E.p;try{E.p=2,Fs(e,t,a,l)}finally{E.p=i,v.T=n}}function jp(e,t,a,l){var n=v.T;v.T=null;var i=E.p;try{E.p=8,Fs(e,t,a,l)}finally{E.p=i,v.T=n}}function Fs(e,t,a,l){if(zi){var n=$s(l);if(n===null)qs(e,t,l,wi,a),sd(e,l);else if(Qp(n,e,t,a,l))l.stopPropagation();else if(sd(e,l),t&4&&-1<Yp.indexOf(e)){for(;n!==null;){var i=Qa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ca(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-Fe(u);s.entanglements[1]|=o,u&=~o}Dt(i),(P&6)===0&&(hi=Ie()+500,cn(0))}}break;case 31:case 13:s=Da(i,2),s!==null&&Je(s,i,2),yi(),Ws(i,2)}if(i=$s(l),i===null&&qs(e,t,l,wi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else qs(e,t,l,null,a)}}function $s(e){return e=tu(e),eo(e)}var wi=null;function eo(e){if(wi=null,e=Ya(e),e!==null){var t=K(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=pe(t),e!==null)return e;e=null}else if(a===31){if(e=ze(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wi=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case mo:return 2;case po:return 8;case Cn:case Nd:return 32;case ho:return 268435456;default:return 32}default:return 32}}var to=!1,ha=null,ga=null,ya=null,gn=new Map,yn=new Map,va=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function vn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Qa(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Qp(e,t,a,l,n){switch(t){case"focusin":return ha=vn(ha,e,t,a,l,n),!0;case"dragenter":return ga=vn(ga,e,t,a,l,n),!0;case"mouseover":return ya=vn(ya,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return gn.set(i,vn(gn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,yn.set(i,vn(yn.get(i)||null,e,t,a,l,n)),!0}return!1}function od(e){var t=Ya(e.target);if(t!==null){var a=K(t);if(a!==null){if(t=a.tag,t===13){if(t=pe(a),t!==null){e.blockedOn=t,To(e.priority,function(){id(a)});return}}else if(t===31){if(t=ze(a),t!==null){e.blockedOn=t,To(e.priority,function(){id(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$s(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eu=l,a.target.dispatchEvent(l),eu=null}else return t=Qa(a),t!==null&&nd(t),e.blockedOn=a,!1;t.shift()}return!0}function cd(e,t,a){Ui(e)&&a.delete(t)}function Xp(){to=!1,ha!==null&&Ui(ha)&&(ha=null),ga!==null&&Ui(ga)&&(ga=null),ya!==null&&Ui(ya)&&(ya=null),gn.forEach(cd),yn.forEach(cd)}function Oi(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Xp)))}var Hi=null;function rd(e){Hi!==e&&(Hi=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Hi===e&&(Hi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(eo(l||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,$u(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Al(e){function t(o){return Oi(o,e)}ha!==null&&Oi(ha,e),ga!==null&&Oi(ga,e),ya!==null&&Oi(ya,e),gn.forEach(t),yn.forEach(t);for(var a=0;a<va.length;a++){var l=va[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)od(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[je]||null;if(typeof i=="function")u||rd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[je]||null)s=u.formAction;else if(eo(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),rd(a)}}}function fd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ao(e){this._internalRoot=e}_i.prototype.render=ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,l=it();ad(a,l,e,t,null,null)},_i.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),yi(),t[ja]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=bo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&od(e)}};var dd=fe.version;if(dd!=="19.2.7")throw Error(h(527,dd,"19.2.7"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=C(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var kp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Ml=qi.inject(kp),We=qi}catch{}}return bn.createRoot=function(e,t){if(!z(e))throw Error(h(299));var a=!1,l="",n=vr,i=Sr,u=br;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ed(e,1,!1,null,null,a,l,null,n,i,u,fd),e[ja]=t.current,_s(e),new ao(t)},bn.hydrateRoot=function(e,t,a){if(!z(e))throw Error(h(299));var l=!1,n="",i=vr,u=Sr,s=br,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=ed(e,1,!0,t,a??null,l,n,o,i,u,s,fd),t.context=td(null),a=t.current,l=it(),l=Zi(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Nl(t,a),Dt(t),e[ja]=t.current,_s(e),new _i(t)},bn.version="19.2.7",bn}var Cd;function th(){if(Cd)return io.exports;Cd=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),io.exports=eh(),io.exports}var ah=th();function lh(){const[M,fe]=Ed.useState(null),I=[{id:1,question:"1. Explain the ASP.NET Framework. Discuss its features and architecture.",answer:"",codeExample:`
============================================================
           ASP.NET Framework – Features and Architecture
============================================================

============================================================
What is ASP.NET Framework?
============================================================

ASP.NET is a web application framework developed by Microsoft.
It is used to build dynamic websites, web applications, and
web services. It runs on the .NET Framework and mainly uses
programming languages like C# and VB.NET.

It provides many built-in features such as authentication,
security, caching, session management, and database
connectivity, making web development faster and easier.


============================================================
Features of ASP.NET Framework
============================================================

------------------------------------------------------------
1. Easy to Develop
------------------------------------------------------------

• Uses simple programming languages like C# and VB.NET.
• Provides many built-in controls to reduce coding.

------------------------------------------------------------
2. High Performance
------------------------------------------------------------

• Code is compiled before execution.
• Faster than traditional scripting languages.

------------------------------------------------------------
3. Rich Server Controls
------------------------------------------------------------

Provides ready-made controls like:

• Button
• TextBox
• Label
• GridView
• Calendar

------------------------------------------------------------
4. Security
------------------------------------------------------------

Supports:

• User authentication
• Authorization
• Data encryption

Protects web applications from unauthorized access.

------------------------------------------------------------
5. State Management
------------------------------------------------------------

Maintains user data using:

• Session
• Cookies
• ViewState
• Application State

------------------------------------------------------------
6. Caching
------------------------------------------------------------

• Stores frequently used data in memory.
• Improves application speed and performance.

------------------------------------------------------------
7. Database Connectivity
------------------------------------------------------------

• Easily connects with databases using ADO.NET.
• Supports SQL Server, Oracle, MySQL, etc.

------------------------------------------------------------
8. Language Independence
------------------------------------------------------------

Supports multiple .NET languages such as:

• C#
• VB.NET
• F#

------------------------------------------------------------
9. Error Handling
------------------------------------------------------------

• Provides built-in exception handling.
• Displays custom error pages.

------------------------------------------------------------
10. Scalability
------------------------------------------------------------

• Suitable for both small and large web applications.


============================================================
Architecture of ASP.NET Framework
============================================================

The ASP.NET architecture shows how a user request is
processed until a response is sent back.
      
                 User (Browser)
                       │
                  HTTP Request
                       │
                       ▼
                IIS (Web Server)
                       │
                       ▼
                ASP.NET Runtime
                       │
                       │            
                       ▼             
                  CLR (.NET)      
                       │               
                       ▼            
              Business Logic (C# / VB.NET)
                       │
                       ▼
              ADO.NET (Database Access)
                       │
                       ▼
              SQL Server / Database
                       │
                       ▼
                  HTTP Response
                       │
                       ▼
                  User (Browser)


============================================================
Explanation of Architecture
============================================================

------------------------------------------------------------
1. Browser (Client)
------------------------------------------------------------

The user requests a web page using a browser.

------------------------------------------------------------
2. IIS (Internet Information Services)
------------------------------------------------------------

• Receives the HTTP request.
• Passes the request to the ASP.NET Runtime.

------------------------------------------------------------
3. ASP.NET Runtime
------------------------------------------------------------

• Processes the request.
• Manages page execution, sessions, caching, and security.

------------------------------------------------------------
4. CLR (Common Language Runtime)
------------------------------------------------------------

• Executes the compiled .NET code.
• Provides memory management, exception handling, and
  garbage collection.

------------------------------------------------------------
5. Business Logic
------------------------------------------------------------

Contains the application's main functionality written in
C# or VB.NET.

------------------------------------------------------------
6. ADO.NET
------------------------------------------------------------

• Connects the application to the database.
• Retrieves or stores data.

------------------------------------------------------------
7. Database
------------------------------------------------------------

Stores application data such as users, products, orders, etc.

------------------------------------------------------------
8. HTTP Response
------------------------------------------------------------

The processed result is sent back to the user's browser.


============================================================
Advantages of ASP.NET Framework
============================================================

• Easy to learn and use.
• High performance.
• Secure web applications.
• Supports multiple programming languages.
• Built-in debugging support.
• Rich collection of server controls.
• Easy database integration.
• Scalable for large applications.


============================================================
Disadvantages of ASP.NET Framework
============================================================

• Mostly dependent on Windows (classic ASP.NET Framework).
• Requires knowledge of the .NET Framework.
• Can consume more server resources.
• Hosting cost may be higher than some lightweight
  technologies.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET Framework is a web application framework developed by
Microsoft for building dynamic websites, web applications,
and web services using the .NET Framework. It supports
languages like C# and VB.NET and provides features such as
security, caching, state management, and database
connectivity.


============================================================
5-Mark Summary
============================================================

• ASP.NET is a Microsoft web development framework.
• Used to create dynamic websites and web applications.
• Features include security, caching, server controls,
  state management, database connectivity, scalability,
  and high performance.
• Architecture consists of:

  Browser
      ↓
     IIS
      ↓
ASP.NET Runtime
      ↓
     CLR
      ↓
Business Logic
      ↓
   ADO.NET
      ↓
  Database
      ↓
   Response

• It provides fast, secure, and reliable web application
  development.
      
      `},{id:2,question:"2. Explain the Common Language Runtime (CLR) with its architecture, responsibilities, and execution process.",answer:"",codeExample:`
============================================================
     Common Language Runtime (CLR) – Architecture,
     Responsibilities, and Execution Process
============================================================

============================================================
What is CLR?
============================================================

The Common Language Runtime (CLR) is the execution engine of
the .NET Framework. It is responsible for running .NET
applications and managing program execution. CLR provides
services such as memory management, security, exception
handling, garbage collection, and code execution.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The Common Language Runtime (CLR) is the execution environment
of the .NET Framework that manages the execution of .NET
programs by providing services like memory management,
security, exception handling, and garbage collection.


============================================================
Architecture of CLR
============================================================

            .NET Application
         (C#, VB.NET, F#, etc.)
                    │
                    ▼
          Language Compiler
      (C#, VB.NET Compiler)
                    │
                    ▼
     MSIL / IL (Intermediate Language)
                    │
                    ▼
      CLR (Common Language Runtime)

      ┌─────────────────────────────────┐
      │  JIT Compiler                   │
      │  Garbage Collector              │
      │  Security                       │
      │  Exception Handling             │
      │  Memory Management              │
      │  Thread Management              │
      └─────────────────────────────────┘

                    │
                    ▼
         Native Machine Code
                    │
                    ▼
           Operating System
                    │
                    ▼
           Program Execution


============================================================
Responsibilities of CLR
============================================================

------------------------------------------------------------
1. Memory Management
------------------------------------------------------------

• Allocates memory for objects.
• Frees unused memory automatically.

------------------------------------------------------------
2. Garbage Collection
------------------------------------------------------------

• Removes unused objects from memory.
• Prevents memory leaks.

------------------------------------------------------------
3. JIT (Just-In-Time) Compilation
------------------------------------------------------------

• Converts Intermediate Language (IL) into machine code at
  runtime.
• Improves execution speed.

------------------------------------------------------------
4. Exception Handling
------------------------------------------------------------

• Detects and handles runtime errors.
• Prevents application crashes.

------------------------------------------------------------
5. Security
------------------------------------------------------------

• Verifies code before execution.
• Prevents unauthorized access and unsafe code execution.

------------------------------------------------------------
6. Thread Management
------------------------------------------------------------

• Creates and manages multiple threads.
• Supports multitasking.

------------------------------------------------------------
7. Type Safety
------------------------------------------------------------

• Ensures that data types are used correctly.
• Reduces programming errors.

------------------------------------------------------------
8. Code Verification
------------------------------------------------------------

• Checks whether the compiled code is valid and safe before
  execution.

------------------------------------------------------------
9. Language Interoperability
------------------------------------------------------------

• Allows programs written in different .NET languages
  (C#, VB.NET, F#, etc.) to work together.


============================================================
Execution Process of CLR
============================================================

------------------------------------------------------------
Step 1: Write the Program
------------------------------------------------------------

The programmer writes code in a .NET language such as C# or
VB.NET.

------------------------------------------------------------
Step 2: Compilation
------------------------------------------------------------

The language compiler converts the source code into
Intermediate Language (IL/MSIL).

------------------------------------------------------------
Step 3: Load by CLR
------------------------------------------------------------

The CLR loads the IL code into memory.

------------------------------------------------------------
Step 4: Verification
------------------------------------------------------------

CLR checks the code for correctness, security, and type
safety.

------------------------------------------------------------
Step 5: JIT Compilation
------------------------------------------------------------

The Just-In-Time (JIT) Compiler converts IL into native
machine code.

------------------------------------------------------------
Step 6: Program Execution
------------------------------------------------------------

The CPU executes the native machine code.

------------------------------------------------------------
Step 7: Garbage Collection
------------------------------------------------------------

CLR automatically removes unused objects and frees memory.


============================================================
Advantages of CLR
============================================================

• Automatic memory management.
• Prevents memory leaks through garbage collection.
• Provides strong security.
• Supports multiple programming languages.
• Handles exceptions efficiently.
• Improves performance with JIT compilation.
• Ensures type safety and code reliability.


============================================================
Disadvantages of CLR
============================================================

• Adds a small startup overhead due to JIT compilation.
• Requires the .NET Runtime to be installed.
• Uses additional memory for runtime services.


============================================================
Exam Flow (Easy to Remember)
============================================================

      Source Code (C# / VB.NET)
                │
                ▼
            Compiler
                │
                ▼
         IL / MSIL Code
                │
                ▼
               CLR
        (Verify + JIT)
                │
                ▼
     Native Machine Code
                │
                ▼
       Program Execution
                │
                ▼
      Garbage Collection


============================================================
5-Mark Summary
============================================================

CLR (Common Language Runtime) is the execution engine of the
.NET Framework.

It converts Intermediate Language (IL) into native machine
code using the JIT Compiler.

Its main responsibilities are memory management, garbage
collection, security, exception handling, thread management,
type safety, and code verification.

Execution process:

Source Code → Compiler → IL → CLR → JIT Compiler →
Native Code → Execution → Garbage Collection.

CLR makes .NET applications secure, reliable, and efficient.
      
      `},{id:3,question:"3. Differentiate between Managed Code and Unmanaged Code.",answer:"",codeExample:`
============================================================
        Difference Between Managed Code and Unmanaged Code
============================================================

Managed Code is the code that is executed under the control of
the Common Language Runtime (CLR). The CLR provides services
like memory management, garbage collection, security, and
exception handling.

Unmanaged Code is the code that is executed directly by the
operating system without the control of the CLR. The programmer
is responsible for memory management and other low-level
operations.


============================================================
Difference Between Managed Code and Unmanaged Code
============================================================

| Managed Code                                                   | Unmanaged Code                                                    |
| ---------------------------------------------------------------| ----------------------------------------------------------------- |
| Runs under the CLR (Common Language Runtime).                  | Runs directly on the Operating System.                            |
| Memory is managed automatically by the Garbage Collector (GC). | Memory must be managed manually by the programmer.                |
| Provides built-in security and type checking.                  | Has limited runtime security.                                     |
| Supports automatic exception handling through the CLR.         | Exception handling must be managed by the programmer or language. |
| Easier to develop and maintain.                                | More difficult to develop and maintain.                           |
| Less chance of memory leaks.                                   | Higher chance of memory leaks if memory is not released properly. |
| Portable across systems that support the .NET Runtime.         | Usually platform-dependent.                                       |
| Examples: C#, VB.NET, F#                                       | Examples: C, C++, Assembly                                        |



============================================================
Advantages of Managed Code
============================================================

• Automatic memory management.
• Better security.
• Easy debugging.
• Automatic garbage collection.
• Fewer memory-related errors.


============================================================
Advantages of Unmanaged Code
============================================================

• Faster execution for low-level operations.
• Direct access to hardware and system resources.
• Suitable for device drivers, operating systems, and embedded
  systems.


============================================================
Exam Definition (2 Marks)
============================================================

Managed Code:

Code that is executed under the control of the CLR, which
provides services like memory management, security, and
garbage collection.

------------------------------------------------------------

Unmanaged Code:

Code that runs directly on the operating system without CLR
support, where the programmer manages memory manually.


============================================================
5-Mark Summary
============================================================

• Managed code is controlled by the CLR, while unmanaged code
  runs directly on the operating system.

• Managed code provides automatic memory management, garbage
  collection, security, and exception handling.

• Unmanaged code requires manual memory management and gives
  direct access to hardware.

• Examples:
  Managed – C#, VB.NET
  Unmanaged – C, C++, Assembly.

• Managed code is safer and easier to maintain, while
  unmanaged code offers better low-level performance and
  control.
      
      `},{id:4,question:"4. Explain Common Type System (CTS) and Common Language Specification (CLS). Compare CTS and CLS.",answer:"",codeExample:`
============================================================
     Common Type System (CTS) and Common Language Specification (CLS)
============================================================


============================================================
1. Common Type System (CTS)
============================================================

------------------------------------------------------------
What is CTS?
------------------------------------------------------------

The Common Type System (CTS) is a part of the .NET Framework
that defines how data types are declared, used, and managed by
the Common Language Runtime (CLR).

It ensures that all .NET languages (such as C#, VB.NET, and
F#) use a common set of data types, allowing them to work
together smoothly.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Common Type System (CTS) is a set of rules in the .NET
Framework that defines the data types and programming
constructs used by all .NET languages, enabling language
interoperability.

------------------------------------------------------------
Features of CTS
------------------------------------------------------------

• Defines common data types for all .NET languages.
• Ensures language interoperability.
• Provides type safety.
• Supports object-oriented programming.
• Managed by the CLR.

------------------------------------------------------------
Types in CTS
------------------------------------------------------------

CTS classifies data types into two categories:


------------------------------------------------------------
1. Value Types
------------------------------------------------------------

• Store the actual value.
• Stored in the stack.
• Faster to access.

Examples:

• int
• float
• char
• bool


------------------------------------------------------------
2. Reference Types
------------------------------------------------------------

• Store the reference (address) of an object.
• Stored in the heap.
• Managed by the Garbage Collector.

Examples:

• Class
• String
• Array
• Interface


============================================================
2. Common Language Specification (CLS)
============================================================

------------------------------------------------------------
What is CLS?
------------------------------------------------------------

The Common Language Specification (CLS) is a set of rules that
every .NET language should follow to ensure that code written
in one .NET language can be used by another.

CLS is a subset of CTS.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Common Language Specification (CLS) is a collection of rules
and standards that .NET languages follow to ensure
compatibility and interoperability among different .NET
languages.

------------------------------------------------------------
Features of CLS
------------------------------------------------------------

• Ensures language interoperability.
• Defines common programming rules.
• Helps developers create language-independent libraries.
• Improves code reusability.
• Supported by all CLS-compliant .NET languages.


============================================================
Architecture of CTS and CLS
============================================================

                 .NET Framework
                        │
                        ▼
         Common Language Runtime (CLR)
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
  Common Type System      Common Language
        (CTS)           Specification (CLS)
             │                     │
             └──────────┬──────────┘
                        ▼
             C#, VB.NET, F#, etc.


============================================================
Difference Between CTS and CLS
============================================================

| CTS (Common Type System)                                  | CLS (Common Language Specification)                      |
| --------------------------------------------------------- | -------------------------------------------------------- |
| Defines all data types used in .NET.                      | Defines a set of rules for .NET languages.               |
| Ensures that all .NET languages use the same type system. | Ensures that different .NET languages can work together. |
| Managed by the CLR.                                       | A subset of CTS.                                         |
| Includes all .NET data types.                             | Includes only the features common to all .NET languages. |
| Focuses on data types and type safety.                    | Focuses on language compatibility.                       |
| Larger in scope.                                          | Smaller in scope.                                        |


============================================================
Relationship Between CTS and CLS
============================================================

• CTS defines all data types and programming constructs in
  .NET.

• CLS defines only the common rules that all .NET languages
  should support.

• Therefore, CLS is a subset of CTS.


============================================================
Advantages of CTS
============================================================

• Common data type system.
• Type safety.
• Easy code sharing between languages.
• Supports object-oriented programming.
• Better reliability.



============================================================
Advantages of CLS
============================================================

• Improves language interoperability.
• Makes code reusable.
• Creates language-independent libraries.
• Ensures compatibility among .NET languages.
• Simplifies application development.


============================================================
Exam Definition (2 Marks)
============================================================

CTS:

Common Type System defines the data types and programming
constructs used by all .NET languages.

------------------------------------------------------------

CLS:

Common Language Specification defines the common rules that
.NET languages must follow for interoperability.


============================================================
5-Mark Summary
============================================================

CTS (Common Type System) defines all the data types and
programming constructs used in the .NET Framework.

CLS (Common Language Specification) defines a common set of
rules that .NET languages follow to ensure compatibility.

CTS focuses on data types and type safety, while CLS focuses
on language interoperability.

CLS is a subset of CTS.

Together, CTS and CLS allow applications written in different
.NET languages to work together seamlessly.
      `},{id:5,question:"5. Write short notes on: Microsoft Intermediate Language (MSIL), Just-In-Time (JIT) Compiler, Assemblies (Private and Shared), Garbage Collection",answer:"",codeExample:`
============================================================
           Short Notes on ASP.NET / .NET Concepts
============================================================


############################################################
1. Microsoft Intermediate Language (MSIL)
############################################################

What is MSIL?

Microsoft Intermediate Language (MSIL), also called
Intermediate Language (IL), is the code generated when a
.NET program is compiled. It is not machine code and cannot
run directly on the CPU.

The CLR later converts MSIL into machine code using the
JIT Compiler.


------------------------------------------------------------
Process
------------------------------------------------------------

C# / VB.NET Program
        │
        ▼
     Compiler
        │
        ▼
    MSIL (IL Code)
        │
        ▼
   JIT Compiler
        │
        ▼
   Machine Code
        │
        ▼
 Program Execution


------------------------------------------------------------
Features
------------------------------------------------------------

• Platform-independent code.
• Generated by all .NET language compilers.
• Executed by the CLR.
• Converted into machine code by the JIT compiler.


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Supports multiple .NET languages.
• Improves code portability.
• Provides security through CLR verification.



############################################################
2. Just-In-Time (JIT) Compiler
############################################################

What is JIT Compiler?

The Just-In-Time (JIT) Compiler is a component of the CLR
that converts MSIL (IL) code into native machine code at
runtime (just before execution).


------------------------------------------------------------
Working
------------------------------------------------------------

MSIL Code
    │
    ▼
JIT Compiler
    │
    ▼
Machine Code
    │
    ▼
CPU Executes Program


------------------------------------------------------------
Features
------------------------------------------------------------

• Converts IL to machine code at runtime.
• Improves execution speed.
• Compiles only the required code.
• Managed by the CLR.


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Faster program execution after compilation.
• Optimizes code for the current system.
• Reduces startup compilation work.



############################################################
3. Assemblies (Private and Shared)
############################################################

What is an Assembly?

An Assembly is the basic unit of deployment in the .NET
Framework. It contains the compiled code (DLL or EXE),
metadata, and resources required by an application.


------------------------------------------------------------
Types of Assemblies
------------------------------------------------------------

A) Private Assembly

• Used by only one application.
• Stored in the application's folder.
• Cannot be shared with other applications.

Example:

A DLL used only by one project.


------------------------------------------------------------

B) Shared Assembly

• Used by multiple applications.
• Stored in the Global Assembly Cache (GAC).
• Can be shared among different .NET applications.

Example:

A common library used by many applications.


------------------------------------------------------------
Difference Between Private and Shared Assembly
------------------------------------------------------------

| Private Assembly                  | Shared Assembly                            |
| --------------------------------- | ------------------------------------------ |
| Used by one application.          | Used by multiple applications.             |
| Stored in the application folder. | Stored in the Global Assembly Cache (GAC). |
| Cannot be shared.                 | Can be shared.                             |
| Easy to deploy.                   | Requires installation in the GAC.          |



############################################################
4. Garbage Collection (GC)
############################################################

What is Garbage Collection?

Garbage Collection (GC) is an automatic memory management
feature of the CLR. It removes objects that are no longer
in use and frees memory automatically.

The programmer does not need to release memory manually.


------------------------------------------------------------
Working
------------------------------------------------------------

Program Creates Objects
          │
          ▼
 Objects Become Unused
          │
          ▼
Garbage Collector Detects Them
          │
          ▼
Frees Memory Automatically


------------------------------------------------------------
Features
------------------------------------------------------------

• Automatic memory management.
• Removes unused objects.
• Prevents memory leaks.
• Improves application performance.
• Managed by the CLR.


------------------------------------------------------------
Advantages
------------------------------------------------------------

• No manual memory deallocation.
• Prevents memory leaks.
• Improves application stability.
• Reduces programming errors.



============================================================
Exam Summary (2 Marks)
============================================================

------------------------------------------------------------
MSIL
------------------------------------------------------------

MSIL (Microsoft Intermediate Language) is the intermediate
code generated by the .NET compiler. It is converted into
machine code by the JIT Compiler during execution.


------------------------------------------------------------
JIT Compiler
------------------------------------------------------------

The JIT Compiler converts MSIL into native machine code at
runtime, allowing the CPU to execute the program efficiently.


------------------------------------------------------------
Assemblies
------------------------------------------------------------

An Assembly is the deployment unit of .NET applications.
Private Assemblies are used by a single application, while
Shared Assemblies are stored in the Global Assembly Cache
(GAC) and used by multiple applications.


------------------------------------------------------------
Garbage Collection
------------------------------------------------------------

Garbage Collection is an automatic memory management process
in the CLR that removes unused objects and frees memory,
preventing memory leaks.
      
      `},{id:11,question:"11. Explain ASP.NET Server Controls. Discuss their features, types, properties, and advantages.",answer:"",codeExample:`
============================================================
      ASP.NET Server Controls – Features, Types,
           Properties, and Advantages
============================================================

============================================================
What are ASP.NET Server Controls?
============================================================

ASP.NET Server Controls are built-in controls provided by
ASP.NET that run on the server. They help developers create
interactive web pages without writing much HTML or JavaScript.

These controls are processed by the server and the generated
HTML is sent to the user's browser.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

ASP.NET Server Controls are reusable components that run on
the server, process user requests, and generate HTML output
to create dynamic web applications.


============================================================
Features of ASP.NET Server Controls
============================================================

------------------------------------------------------------
1. Server-Side Processing
------------------------------------------------------------

Controls are executed on the server before sending the page
to the browser.

------------------------------------------------------------
2. Automatic HTML Generation
------------------------------------------------------------

Automatically generates HTML code for different browsers.

------------------------------------------------------------
3. Event-Driven Programming
------------------------------------------------------------

Supports events like:

• Click
• TextChanged
• SelectedIndexChanged

------------------------------------------------------------
4. State Management
------------------------------------------------------------

Maintains control values using ViewState.

------------------------------------------------------------
5. Data Binding
------------------------------------------------------------

Can easily connect to databases and display data.

------------------------------------------------------------
6. Rich Built-in Controls
------------------------------------------------------------

Provides many ready-made controls like Button, TextBox,
GridView, Calendar, etc.

------------------------------------------------------------
7. Browser Compatibility
------------------------------------------------------------

Works with different web browsers.

------------------------------------------------------------
8. Reusability
------------------------------------------------------------

Controls can be reused in multiple web pages.


============================================================
Types of ASP.NET Server Controls
============================================================

------------------------------------------------------------
1. Standard Controls
------------------------------------------------------------

Used for basic user input.

Examples:

• Label
• TextBox
• Button
• CheckBox
• RadioButton
• DropDownList
• HyperLink

------------------------------------------------------------
2. Validation Controls
------------------------------------------------------------

Used to validate user input.

Examples:

• RequiredFieldValidator
• CompareValidator
• RangeValidator
• RegularExpressionValidator
• CustomValidator
• ValidationSummary

------------------------------------------------------------
3. Data Controls
------------------------------------------------------------

Used to display and manage data.

Examples:

• GridView
• DetailsView
• FormView
• Repeater
• DataList

------------------------------------------------------------
4. Navigation Controls
------------------------------------------------------------

Used for website navigation.

Examples:

• Menu
• TreeView
• SiteMapPath

------------------------------------------------------------
5. Rich Controls
------------------------------------------------------------

Provide advanced functionality.

Examples:

• Calendar
• FileUpload
• Wizard
• AdRotator
• Image

------------------------------------------------------------
6. List Controls
------------------------------------------------------------

Used to display a list of items.

Examples

DropDownList 
ListBox 
CheckBoxList 
RadioButtonList 
BulletedList

============================================================
Common Properties of Server Controls
============================================================

+----------------+------------------------------------------------------+
| Property       | Description                                          |
+----------------+------------------------------------------------------+
| ID             | Unique name of the control.                          |
+----------------+------------------------------------------------------+
| Text           | Displays text on the control.                        |
+----------------+------------------------------------------------------+
| Enabled        | Enables or disables the control.                     |
+----------------+------------------------------------------------------+
| Visible        | Shows or hides the control.                          |
+----------------+------------------------------------------------------+
| BackColor      | Sets the background color.                           |
+----------------+------------------------------------------------------+
| ForeColor      | Sets the text color.                                 |
+----------------+------------------------------------------------------+
| Font           | Sets the font style and size.                        |
+----------------+------------------------------------------------------+
| Width          | Sets the width of the control.                       |
+----------------+------------------------------------------------------+
| Height         | Sets the height of the control.                      |
+----------------+------------------------------------------------------+
| ToolTip        | Displays a hint when the mouse pointer is placed     |
|                | over the control.                                    |
+----------------+------------------------------------------------------+


============================================================
Advantages of ASP.NET Server Controls
============================================================

• Easy to use and learn.
• Reduces coding effort.
• Supports event-driven programming.
• Automatically generates browser-compatible HTML.
• Built-in validation controls improve data accuracy.
• Easy database connectivity with data controls.
• Reusable components reduce development time.
• Supports ViewState to maintain data between requests.
• Improves developer productivity.


============================================================
Disadvantages of ASP.NET Server Controls
============================================================

• May generate extra HTML, increasing page size.
• ViewState can increase page load time if overused.
• Requires server processing, which may affect performance
  for large applications.


============================================================
Simple Example
============================================================

<asp:Label ID="lblName" runat="server"
Text="Enter Name:"></asp:Label>

<asp:TextBox ID="txtName"
runat="server"></asp:TextBox>

<asp:Button ID="btnSubmit"
runat="server"
Text="Submit" />

------------------------------------------------------------
Explanation
------------------------------------------------------------

• Label displays text.
• TextBox accepts user input.
• Button performs an action when clicked.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET Server Controls are server-side components that run
on the web server and generate HTML to create dynamic and
interactive web pages. They support event handling, state
management, and data binding.


============================================================
5-Mark Summary
============================================================

• ASP.NET Server Controls are server-side controls used to
  build dynamic web pages.

• Features:
  Server-side processing, event handling, ViewState,
  data binding, browser compatibility, and reusability.

• Types:
  Standard Controls, Validation Controls, Data Controls,
  Navigation Controls, Login Controls, Web Parts Controls,
  and Rich Controls.

• Common Properties:
  ID, Text, Enabled, Visible, Width, Height, BackColor,
  ForeColor, Font, and ToolTip.

• Advantages:
  Easy development, reduced coding, built-in validation,
  database support, reusable controls, and improved
  productivity.
      `},{id:12,question:"12. Explain Button, TextBox, Label, CheckBox, and RadioButton controls with syntax, properties, and examples.",answer:"",codeExample:`
============================================================
 ASP.NET Controls: Button, TextBox, Label, CheckBox, and RadioButton
============================================================

These are the most commonly used ASP.NET Server Controls.
They run on the server and generate HTML that is displayed
in the user's browser.


============================================================
1. Button Control
============================================================

What is Button Control?

The Button control is used to perform an action when the user
clicks it, such as submitting a form or saving data.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:Button ID="btnSubmit"
    runat="server"
    Text="Submit" />


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+---------------------------------------------+
| Property       | Description                                 |
+----------------+---------------------------------------------+
| ID             | Unique name of the button.                  |
+----------------+---------------------------------------------+
| Text           | Text displayed on the button.               |
+----------------+---------------------------------------------+
| Enabled        | Enables or disables the button.             |
+----------------+---------------------------------------------+
| Visible        | Shows or hides the button.                  |
+----------------+---------------------------------------------+
| BackColor      | Sets the background color.                  |
+----------------+---------------------------------------------+
| ForeColor      | Sets the text color.                        |
+----------------+---------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:Button ID="btnSave"
    runat="server"
    Text="Save" />



============================================================
2. TextBox Control
============================================================

What is TextBox Control?

The TextBox control is used to accept input from the user.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:TextBox ID="txtName"
    runat="server">
</asp:TextBox>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+------------------------------------------------------+
| Property       | Description                                          |
+----------------+------------------------------------------------------+
| ID             | Unique name of the TextBox.                          |
+----------------+------------------------------------------------------+
| Text           | Gets or sets the entered text.                       |
+----------------+------------------------------------------------------+
| MaxLength      | Maximum number of characters allowed.                |
+----------------+------------------------------------------------------+
| ReadOnly       | Makes the TextBox read-only.                         |
+----------------+------------------------------------------------------+
| TextMode       | Defines the input type (SingleLine, MultiLine,       |
|                | Password).                                           |
+----------------+------------------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:TextBox ID="txtEmail"
    runat="server"
    TextMode="SingleLine">
</asp:TextBox>



============================================================
3. Label Control
============================================================

What is Label Control?

The Label control is used to display text or messages on a
web page.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:Label ID="lblMessage"
    runat="server"
    Text="Welcome">
</asp:Label>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+---------------------------------------------+
| Property       | Description                                 |
+----------------+---------------------------------------------+
| ID             | Unique name of the Label.                   |
+----------------+---------------------------------------------+
| Text           | Text displayed on the Label.                |
+----------------+---------------------------------------------+
| ForeColor      | Sets the text color.                        |
+----------------+---------------------------------------------+
| Font           | Sets the font style and size.               |
+----------------+---------------------------------------------+
| Visible        | Shows or hides the Label.                   |
+----------------+---------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:Label ID="lblResult"
    runat="server"
    Text="Registration Successful">
</asp:Label>



============================================================
4. CheckBox Control
============================================================

What is CheckBox Control?

The CheckBox control allows the user to select or deselect an
option. Multiple checkboxes can be selected at the same time.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:CheckBox ID="chkTerms"
    runat="server"
    Text="I Agree" />


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+---------------------------------------------+
| Property       | Description                                 |
+----------------+---------------------------------------------+
| ID             | Unique name of the CheckBox.                |
+----------------+---------------------------------------------+
| Text           | Text displayed beside the CheckBox.         |
+----------------+---------------------------------------------+
| Checked        | Indicates whether it is selected.           |
+----------------+---------------------------------------------+
| Enabled        | Enables or disables the CheckBox.           |
+----------------+---------------------------------------------+
| Visible        | Shows or hides the CheckBox.                |
+----------------+---------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:CheckBox ID="chkJava"
    runat="server"
    Text="Java" />



============================================================
5. RadioButton Control
============================================================

What is RadioButton Control?

The RadioButton control allows the user to select only one
option from a group.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:RadioButton ID="rbMale"
    runat="server"
    Text="Male"
    GroupName="Gender" />


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+--------------------------------------------------+
| Property       | Description                                      |
+----------------+--------------------------------------------------+
| ID             | Unique name of the RadioButton.                  |
+----------------+--------------------------------------------------+
| Text           | Text displayed beside the RadioButton.           |
+----------------+--------------------------------------------------+
| Checked        | Indicates whether it is selected.                |
+----------------+--------------------------------------------------+
| GroupName      | Groups RadioButtons together so only one         |
|                | can be selected.                                 |
+----------------+--------------------------------------------------+
| Enabled        | Enables or disables the RadioButton.             |
+----------------+--------------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:RadioButton ID="rbMale"
    runat="server"
    Text="Male"
    GroupName="Gender" />

<asp:RadioButton ID="rbFemale"
    runat="server"
    Text="Female"
    GroupName="Gender" />



============================================================
Difference Between CheckBox and RadioButton
============================================================

+---------------------------------------------+---------------------------------------------+
| CheckBox                                    | RadioButton                                 |
+---------------------------------------------+---------------------------------------------+
| Multiple options can be selected.           | Only one option can be selected in a group. |
+---------------------------------------------+---------------------------------------------+
| Does not require GroupName.                 | Requires GroupName for grouping.            |
+---------------------------------------------+---------------------------------------------+
| Used for multiple selections.               | Used for single selection.                  |
+---------------------------------------------+---------------------------------------------+


============================================================
Advantages of These Controls
============================================================

• Easy to use.
• Reduce coding effort.
• Support server-side processing.
• Easy event handling.
• Browser compatible.
• Reusable in different web pages.


============================================================
Exam Definition (2 Marks)
============================================================

Button:
Used to perform an action when clicked.

------------------------------------------------------------

TextBox:
Used to receive input from the user.

------------------------------------------------------------

Label:
Used to display text or messages.

------------------------------------------------------------

CheckBox:
Used to select one or more options.

------------------------------------------------------------

RadioButton:
Used to select only one option from a group.


============================================================
5-Mark Summary
============================================================

Button – Performs actions such as submit or save.

TextBox – Accepts user input.

Label – Displays text or messages.

CheckBox – Allows multiple selections.

RadioButton – Allows only one selection within a group.

All these controls support properties such as ID, Text,
Visible, and Enabled, making it easy to create interactive
ASP.NET web applications.
      
      `},{id:13,question:"13. Explain List Controls in ASP.NET (DropDownList, ListBox, CheckBoxList, RadioButtonList, BulletedList).",answer:"",codeExample:`
============================================================
                  List Controls in ASP.NET
============================================================

============================================================
What are List Controls?
============================================================

List Controls in ASP.NET are server controls used to display
a collection of items. They allow users to select one or
more options from a list.

The commonly used list controls are:

• DropDownList
• ListBox
• CheckBoxList
• RadioButtonList
• BulletedList


============================================================
1. DropDownList
============================================================

------------------------------------------------------------
What is DropDownList?
------------------------------------------------------------

The DropDownList control displays a list of items in a
drop-down menu. The user can select only one item.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:DropDownList ID="ddlCity" runat="server">
    <asp:ListItem>Vadodara</asp:ListItem>
    <asp:ListItem>Ahmedabad</asp:ListItem>
    <asp:ListItem>Surat</asp:ListItem>
</asp:DropDownList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------------------+
| Property         | Description                                          |
+------------------+------------------------------------------------------+
| ID               | Unique name of the control.                          |
+------------------+------------------------------------------------------+
| Items            | Collection of list items.                            |
+------------------+------------------------------------------------------+
| SelectedIndex    | Index of the selected item.                          |
+------------------+------------------------------------------------------+
| SelectedValue    | Value of the selected item.                          |
+------------------+------------------------------------------------------+
| AutoPostBack     | Automatically sends data to the server when          |
|                  | selection changes.                                   |
+------------------+------------------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

A drop-down list for selecting a city.


============================================================
2. ListBox
============================================================

------------------------------------------------------------
What is ListBox?
------------------------------------------------------------

The ListBox control displays a list of items. It allows users
to select one or multiple items.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:ListBox ID="lstCourse"
    runat="server"
    SelectionMode="Multiple">

    <asp:ListItem>Java</asp:ListItem>
    <asp:ListItem>Python</asp:ListItem>
    <asp:ListItem>C#</asp:ListItem>

</asp:ListBox>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------+
| Property         | Description                              |
+------------------+------------------------------------------+
| SelectionMode    | Single or Multiple selection.            |
+------------------+------------------------------------------+
| Items            | Collection of items.                     |
+------------------+------------------------------------------+
| SelectedItem     | Currently selected item.                 |
+------------------+------------------------------------------+
| Rows             | Number of visible rows.                  |
+------------------+------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

A list of programming courses where multiple courses can be
selected.


============================================================
3. CheckBoxList
============================================================

------------------------------------------------------------
What is CheckBoxList?
------------------------------------------------------------

The CheckBoxList control displays a group of checkboxes.
Users can select multiple options.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:CheckBoxList ID="chkSkill" runat="server">

    <asp:ListItem>Java</asp:ListItem>
    <asp:ListItem>Python</asp:ListItem>
    <asp:ListItem>ASP.NET</asp:ListItem>

</asp:CheckBoxList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------+
| Property         | Description                              |
+------------------+------------------------------------------+
| Items            | Collection of checkboxes.                |
+------------------+------------------------------------------+
| RepeatDirection  | Horizontal or Vertical display.          |
+------------------+------------------------------------------+
| RepeatColumns    | Number of columns.                       |
+------------------+------------------------------------------+
| SelectedItem     | Selected item.                           |
+------------------+------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

Selecting multiple skills such as Java, Python, and ASP.NET.


============================================================
4. RadioButtonList
============================================================

------------------------------------------------------------
What is RadioButtonList?
------------------------------------------------------------

The RadioButtonList control displays a group of radio
buttons. The user can select only one option.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:RadioButtonList ID="rblGender" runat="server">

    <asp:ListItem>Male</asp:ListItem>
    <asp:ListItem>Female</asp:ListItem>

</asp:RadioButtonList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------+
| Property         | Description                              |
+------------------+------------------------------------------+
| Items            | Collection of radio buttons.             |
+------------------+------------------------------------------+
| SelectedItem     | Selected item.                           |
+------------------+------------------------------------------+
| RepeatDirection  | Horizontal or Vertical display.          |
+------------------+------------------------------------------+
| RepeatColumns    | Number of columns.                       |
+------------------+------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

Selecting a gender (Male or Female).


============================================================
5. BulletedList
============================================================

------------------------------------------------------------
What is BulletedList?
------------------------------------------------------------

The BulletedList control displays a list of items with
bullets or numbers. It is mainly used to display information
rather than collect user input.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:BulletedList ID="blCourse" runat="server">

    <asp:ListItem>Java</asp:ListItem>
    <asp:ListItem>Python</asp:ListItem>
    <asp:ListItem>ASP.NET</asp:ListItem>

</asp:BulletedList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+----------------------------------------------+
| Property         | Description                                  |
+------------------+----------------------------------------------+
| Items            | Collection of list items.                    |
+------------------+----------------------------------------------+
| BulletStyle      | Style of bullets (Disc, Circle, Square,      |
|                  | Numbered, etc.).                             |
+------------------+----------------------------------------------+
| DisplayMode      | Text, HyperLink, or LinkButton.              |
+------------------+----------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

Displaying a bulleted list of available courses.


============================================================
Difference Between ASP.NET List Controls
============================================================

+------------------+-----------------------------------------------+---------------------------+
| Control          | Purpose                                       | Selection                 |
+------------------+-----------------------------------------------+---------------------------+
| DropDownList     | Displays a drop-down list                     | One item                  |
+------------------+-----------------------------------------------+---------------------------+
| ListBox          | Displays a list box                           | One or Multiple items     |
+------------------+-----------------------------------------------+---------------------------+
| CheckBoxList     | Displays multiple checkboxes                  | Multiple items            |
+------------------+-----------------------------------------------+---------------------------+
| RadioButtonList  | Displays multiple radio buttons               | One item                  |
+------------------+-----------------------------------------------+---------------------------+
| BulletedList     | Displays items with bullets                   | No selection (display     |
|                  |                                               | only)                     |
+------------------+-----------------------------------------------+---------------------------+


============================================================
Advantages of List Controls
============================================================

• Easy to display multiple items.
• Reduces coding effort.
• Supports data binding with databases.
• Improves user interaction.
• Supports server-side processing.
• Provides different selection options based on application
  needs.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET List Controls are server controls used to display a
collection of items and allow users to select one or more
options. Common list controls include DropDownList,
ListBox, CheckBoxList, RadioButtonList, and BulletedList.


============================================================
5-Mark Summary
============================================================

• DropDownList – Displays a drop-down menu; allows one selection.

• ListBox – Displays a list; allows single or multiple selections.

• CheckBoxList – Displays multiple checkboxes; allows multiple
  selections.

• RadioButtonList – Displays multiple radio buttons; allows only
  one selection.

• BulletedList – Displays items as a bulleted or numbered list;
  mainly used for display purposes.

These controls simplify data display, improve user
interaction, and support server-side processing.




RadioButton vs RadioButtonList


| Feature      | RadioButton                            | RadioButtonList                             |
| ------------ | -------------------------------------- | ------------------------------------------- |
| Selection    | Usually one option within a group      | Only one option                             |
| Options      | You create each RadioButton separately | Multiple options are managed in one control |
| Grouping     | Need GroupName                         | Automatically grouped                       |
| Data binding | Not convenient                         | Supports data binding                       |
| Code         | More code                              | Less code                                   |
| Example      | Male / Female using separate controls  | Gender list using one control               |


RadioButton example:

<asp:RadioButton ID="rbMale" runat="server"
    Text="Male" GroupName="Gender" />

<asp:RadioButton ID="rbFemale" runat="server"
    Text="Female" GroupName="Gender" />

Here, GroupName="Gender" makes sure only one can be selected.


RadioButtonList example:

<asp:RadioButtonList ID="rblGender" runat="server">
    <asp:ListItem>Male</asp:ListItem>
    <asp:ListItem>Female</asp:ListItem>
    <asp:ListItem>Other</asp:ListItem>
</asp:RadioButtonList>

Here, the whole list is handled by one control.



2. CheckBox vs CheckBoxList

| Feature      | CheckBox               | CheckBoxList                    |
| ------------ | ---------------------- | ------------------------------- |
| Selection    | Individual checkbox    | Multiple options from a list    |
| Options      | One option per control | Multiple options in one control |
| Grouping     | Not required           | All options managed together    |
| Data binding | Not convenient         | Supports data binding           |
| Example      | "I agree to terms"     | Selecting multiple hobbies      |


CheckBox example:

<asp:CheckBox ID="chkTerms" runat="server"
    Text="I agree to the terms" />

A user can check or uncheck it independently.


CheckBoxList example:

<asp:CheckBoxList ID="cblHobbies" runat="server">
    <asp:ListItem>Cricket</asp:ListItem>
    <asp:ListItem>Music</asp:ListItem>
    <asp:ListItem>Reading</asp:ListItem>
    <asp:ListItem>Coding</asp:ListItem>
</asp:CheckBoxList>

The user can select multiple hobbies.


Easy way to remember

RadioButton → One individual option
RadioButtonList → List of options, select only one
CheckBox → One individual option, independently checked
CheckBoxList → List of options, select multiple


Example:

  Gender: → RadioButtonList → 🟢 Male / ⚪ Female / ⚪ Other
  Hobbies: → CheckBoxList → ☑ Coding / ☑ Music / ☐ Cricket

So the most important difference is:

  RadioButton/RadioButtonList = single selection
  CheckBox/CheckBoxList = multiple selection

      `},{id:14,question:"14. Explain the ImageMap Control with its types of HotSpots and HotSpotMode.",answer:"",codeExample:`
============================================================
                 ImageMap Control in ASP.NET
============================================================

============================================================
What is ImageMap Control?
============================================================

The ImageMap control in ASP.NET is used to display an image
with clickable areas, called HotSpots. Each HotSpot can
perform a different action, such as opening another page,
posting data to the server, or doing nothing.

It is commonly used for maps, diagrams, menus, and navigation
images.


============================================================
Definition (2 Marks)
============================================================

ImageMap is an ASP.NET server control that displays an image
with multiple clickable regions called HotSpots, allowing
different actions for different parts of the image.


============================================================
Syntax
============================================================

aspx
<asp:ImageMap ID="ImageMap1" runat="server" ImageUrl="images/map.jpg">

    <asp:RectangleHotSpot
        Left="20"
        Top="20"
        Right="100"
        Bottom="80"
        NavigateUrl="Home.aspx" />

</asp:ImageMap>



============================================================
Types of HotSpots
============================================================

A HotSpot is a clickable area on an image.

------------------------------------------------------------
1. RectangleHotSpot
------------------------------------------------------------

• Defines a rectangular clickable area.
• Specified using Left, Top, Right, and Bottom coordinates.

Example

<asp:RectangleHotSpot
    Left="20"
    Top="20"
    Right="100"
    Bottom="80"
    NavigateUrl="Home.aspx" />


------------------------------------------------------------
2. CircleHotSpot
------------------------------------------------------------

• Defines a circular clickable area.
• Specified using the X-coordinate, Y-coordinate, and Radius.

Example

<asp:CircleHotSpot
    X="120"
    Y="100"
    Radius="40"
    NavigateUrl="About.aspx" />


------------------------------------------------------------
3. PolygonHotSpot
------------------------------------------------------------

• Defines an irregular (polygon) clickable area.
• Specified using multiple coordinate points.

Example

<asp:PolygonHotSpot
    Coordinates="30,20,70,20,90,60,40,90"
    NavigateUrl="Contact.aspx" />



============================================================
HotSpotMode
============================================================

The HotSpotMode property defines what happens when the user
clicks a HotSpot.


============================================================
Types of HotSpotMode
============================================================

------------------------------------------------------------
1. Navigate
------------------------------------------------------------

• Opens another web page.
• Uses the NavigateUrl property.

Example

Click → Opens Home.aspx

------------------------------------------------------------
2. PostBack
------------------------------------------------------------

• Sends the page back to the server.
• Used to execute server-side code or events.

Example

Click → Server processes the request.

------------------------------------------------------------
3. Inactive
------------------------------------------------------------

• The HotSpot is disabled.
• Clicking it has no effect.

Example

Click → No action performed.


============================================================
Table: HotSpotMode
============================================================

+----------------+-----------------------------------------------------------+
| HotSpotMode    | Purpose                                                   |
+----------------+-----------------------------------------------------------+
| Navigate       | Opens another web page.                                   |
+----------------+-----------------------------------------------------------+
| PostBack       | Sends the page to the server for processing.              |
+----------------+-----------------------------------------------------------+
| Inactive       | Disables the HotSpot; no action is performed.             |
+----------------+-----------------------------------------------------------+


============================================================
Common Properties of ImageMap
============================================================

+----------------+-----------------------------------------------------------+
| Property       | Description                                               |
+----------------+-----------------------------------------------------------+
| ID             | Unique name of the control.                               |
+----------------+-----------------------------------------------------------+
| ImageUrl       | Path of the image to display.                             |
+----------------+-----------------------------------------------------------+
| HotSpotMode    | Defines the action when a HotSpot is clicked.             |
+----------------+-----------------------------------------------------------+
| AlternateText  | Text displayed if the image cannot be loaded.             |
+----------------+-----------------------------------------------------------+
| Enabled        | Enables or disables the control.                          |
+----------------+-----------------------------------------------------------+
| Visible        | Shows or hides the control.                               |
+----------------+-----------------------------------------------------------+


============================================================
Advantages of ImageMap
============================================================

• Creates interactive images.
• Easy navigation using clickable regions.
• Supports multiple clickable areas in one image.
• Improves website design and user experience.
• Useful for maps, diagrams, menus, and floor plans.


============================================================
Disadvantages of ImageMap
============================================================

• Creating coordinates for HotSpots can be time-consuming.
• Large images may affect page loading speed.
• Requires careful design for accurate clickable areas.


============================================================
Applications of ImageMap
============================================================

• Website navigation menus.
• World or country maps.
• Campus or building maps.
• Product catalogs.
• Interactive diagrams and flowcharts.


============================================================
Exam Definition (2 Marks)
============================================================

ImageMap is an ASP.NET server control that displays an image
with clickable regions called HotSpots. The three types of
HotSpots are RectangleHotSpot, CircleHotSpot, and
PolygonHotSpot, and the HotSpotMode can be Navigate,
PostBack, or Inactive.


============================================================
5-Mark Summary
============================================================

• ImageMap is used to create interactive images with
  clickable areas.

HotSpot Types:

• RectangleHotSpot – Rectangular area.
• CircleHotSpot – Circular area.
• PolygonHotSpot – Irregular polygon area.

HotSpotMode Types:

• Navigate – Opens another page.
• PostBack – Sends the page to the server.
• Inactive – No action is performed.

ImageMap is widely used for maps, navigation menus,
diagrams, and interactive web pages.
      
      `},{id:15,question:`15. Explain the web.config file. Discuss its features and important sections. 
Explain the Global.asax file. Discuss its important events and compare it with web.config. ⭐⭐⭐⭐`,answer:"",codeExample:`
============================================================
          1. Explain the web.config File
============================================================

What is web.config?

The web.config file is an XML-based configuration file used in
ASP.NET applications. It stores application settings, security
settings, database connection strings, session settings,
custom error pages, and other configuration information.

Every ASP.NET application can have one or more web.config files.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The web.config file is an XML configuration file that stores
the settings and configuration information of an ASP.NET web
application.


============================================================
Features of web.config
============================================================

------------------------------------------------------------
1. XML-Based File
------------------------------------------------------------

• Written in XML format.
• Easy to read and modify.

------------------------------------------------------------
2. Application Configuration
------------------------------------------------------------

• Stores application-wide settings.

------------------------------------------------------------
3. Security Management
------------------------------------------------------------

• Configures authentication and authorization.

------------------------------------------------------------
4. Database Connection
------------------------------------------------------------

• Stores database connection strings.

------------------------------------------------------------
5. Session Management
------------------------------------------------------------

• Configures session timeout and session mode.

------------------------------------------------------------
6. Error Handling
------------------------------------------------------------

• Defines custom error pages.

------------------------------------------------------------
7. Easy Maintenance
------------------------------------------------------------

• Configuration changes can often be made without changing
  the application code.



============================================================
Important Sections of web.config
============================================================

------------------------------------------------------------
1. <configuration>
------------------------------------------------------------

Root element of the file.

------------------------------------------------------------
2. <appSettings>
------------------------------------------------------------

Stores application settings as key-value pairs.

Example

<appSettings>
   <add key="College" value="ABC College"/>
</appSettings>


------------------------------------------------------------
3. <connectionStrings>
------------------------------------------------------------

Stores database connection strings.

Example

<connectionStrings>
   <add name="MyDB"
        connectionString="Data Source=.;Initial Catalog=CollegeDB;Integrated Security=True"/>
</connectionStrings>


------------------------------------------------------------
4. <authentication>
------------------------------------------------------------

Configures user authentication.

Example:

• Windows Authentication
• Forms Authentication

------------------------------------------------------------
5. <authorization>
------------------------------------------------------------

Controls user access permissions.

------------------------------------------------------------
6. <sessionState>
------------------------------------------------------------

Configures session settings.

Example:

• Timeout
• Session mode

------------------------------------------------------------
7. <customErrors>
------------------------------------------------------------

Displays custom error pages.

------------------------------------------------------------
8. <system.web>
------------------------------------------------------------

Contains ASP.NET application settings.


============================================================
Advantages of web.config
============================================================

• Centralized configuration.
• Easy to modify.
• Improves security.
• Supports database configuration.
• Manages sessions and error handling.


============================================================
          2. Explain the Global.asax File
============================================================

What is Global.asax?

The Global.asax file, also called the ASP.NET Application
File, contains code that responds to application-level and
session-level events.

It allows developers to write code that runs automatically
when the application starts, ends, or when user sessions begin
or end.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The Global.asax file is an ASP.NET application file that
contains event handlers for application-level and session-level
events.


============================================================
Important Events in Global.asax
============================================================

------------------------------------------------------------
1. Application_Start
------------------------------------------------------------

• Executes when the application starts.
• Used to initialize application resources.

------------------------------------------------------------
2. Application_End
------------------------------------------------------------

• Executes when the application stops.
• Used to release resources.

------------------------------------------------------------
3. Session_Start
------------------------------------------------------------

• Executes when a new user session begins.

------------------------------------------------------------
4. Session_End
------------------------------------------------------------

• Executes when a user session ends or times out.

------------------------------------------------------------
5. Application_Error
------------------------------------------------------------

• Executes when an unhandled application error occurs.
• Used for global error handling.

------------------------------------------------------------
6. BeginRequest
------------------------------------------------------------

• Executes at the beginning of every HTTP request.

------------------------------------------------------------
7. EndRequest
------------------------------------------------------------

• Executes after every HTTP request is completed.


============================================================
Simple Example
============================================================

protected void Application_Start(object sender, EventArgs e)
{
    // Application initialization code
}



============================================================
Advantages of Global.asax
============================================================

• Handles global application events.
• Provides centralized error handling.
• Manages sessions.
• Initializes application resources.
• Improves application management.


============================================================
Difference Between web.config and Global.asax
============================================================

+------------------------------------------------------+------------------------------------------------------+
| web.config                                           | Global.asax                                          |
+------------------------------------------------------+------------------------------------------------------+
| XML configuration file.                              | ASP.NET application event file.                      |
+------------------------------------------------------+------------------------------------------------------+
| Stores application settings.                         | Contains event-handling code.                        |
+------------------------------------------------------+------------------------------------------------------+
| Used for configuration.                              | Used for application and session events.             |
+------------------------------------------------------+------------------------------------------------------+
| No programming logic is written.                     | Contains C# or VB.NET code.                          |
+------------------------------------------------------+------------------------------------------------------+
| Stores database, security, and session settings.     | Handles application lifecycle events.                |
+------------------------------------------------------+------------------------------------------------------+
| Multiple web.config files can exist.                 | Usually only one Global.asax file per application.   |
+------------------------------------------------------+------------------------------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

------------------------------------------------------------
web.config
------------------------------------------------------------

The web.config file is an XML configuration file used to
store application settings, database connections, security,
session management, and error handling information.

------------------------------------------------------------
Global.asax
------------------------------------------------------------

The Global.asax file is an ASP.NET application file that
handles application-level and session-level events such as
Application_Start, Session_Start, and Application_Error.


============================================================
5-Mark Summary
============================================================

------------------------------------------------------------
web.config
------------------------------------------------------------

• XML-based configuration file.
• Stores application settings, database connections,
  authentication, authorization, session configuration,
  and custom error pages.
• Important sections:
  <configuration>,
  <appSettings>,
  <connectionStrings>,
  <authentication>,
  <authorization>,
  <sessionState>,
  <customErrors>,
  and <system.web>.

------------------------------------------------------------
Global.asax
------------------------------------------------------------

• Handles application-level events.
• Important events:
  Application_Start,
  Application_End,
  Session_Start,
  Session_End,
  Application_Error,
  BeginRequest,
  and EndRequest.
• Used to initialize resources, manage sessions,
  and handle global errors.

------------------------------------------------------------
Comparison
------------------------------------------------------------

web.config is used for configuration settings, while
Global.asax is used for application event handling.
      
      `},{id:16,question:"16. Explain the structure of an ASP.NET Web Page and its components.",answer:"",codeExample:`
============================================================
        Structure of an ASP.NET Web Page and Its Components
============================================================

============================================================
What is an ASP.NET Web Page?
============================================================

An ASP.NET Web Page is a web page with the .aspx extension.
It contains HTML, ASP.NET server controls, and server-side
code to create dynamic web applications.

An ASP.NET page is processed by the ASP.NET Runtime on the
server before being sent to the user's browser.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An ASP.NET Web Page is a web page with the .aspx extension
that contains HTML, ASP.NET server controls, and server-side
code to create dynamic and interactive web applications.


============================================================
Structure of an ASP.NET Web Page
============================================================

aspx
<%@ Page Language="C#" AutoEventWireup="true"
CodeFile="Default.aspx.cs"
Inherits="_Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>My ASP.NET Page</title>
</head>

<body>

<form id="form1" runat="server">

    <asp:Label ID="lblMessage"
        runat="server"
        Text="Welcome to ASP.NET">
    </asp:Label>

    <br /><br />

    <asp:TextBox ID="txtName"
        runat="server">
    </asp:TextBox>

    <br /><br />

    <asp:Button ID="btnSubmit"
        runat="server"
        Text="Submit" />

</form>

</body>
</html>


============================================================
Components of an ASP.NET Web Page
============================================================

------------------------------------------------------------
1. Page Directive
------------------------------------------------------------

The Page Directive appears at the top of the page. It
provides information about the ASP.NET page.

Example

aspx
<%@ Page Language="C#" CodeFile="Default.aspx.cs"
Inherits="_Default" %>


Common Attributes

• Language – Programming language used (C#, VB.NET).
• CodeFile – Specifies the code-behind file.
• Inherits – Specifies the class that the page inherits.

------------------------------------------------------------
2. HTML Declaration
------------------------------------------------------------

Defines the document type.

html
<!DOCTYPE html>


------------------------------------------------------------
3. HTML Tag
------------------------------------------------------------

The root element of the web page.

html
<html>


------------------------------------------------------------
4. Head Section
------------------------------------------------------------

Contains page information such as:

• Title
• CSS
• JavaScript
• Meta tags

Example

html
<head runat="server">
    <title>Student Portal</title>
</head>


------------------------------------------------------------
5. Body Section
------------------------------------------------------------

Contains all the visible content displayed to the user.

html
<body>


------------------------------------------------------------
6. Form Control
------------------------------------------------------------

Every ASP.NET Web Forms page must contain at least one
server-side form.

html
<form id="form1" runat="server">


The attribute runat="server" tells ASP.NET that the form
will be processed on the server.

------------------------------------------------------------
7. ASP.NET Server Controls
------------------------------------------------------------

Used to create interactive web pages.

Examples:

• Label
• TextBox
• Button
• CheckBox
• DropDownList
• GridView

Example

aspx
<asp:Button ID="btnSave"
runat="server"
Text="Save" />


------------------------------------------------------------
8. Code-Behind File
------------------------------------------------------------

Contains the server-side code written in C# or VB.NET.

Example

text
Default.aspx.cs


Responsibilities:

• Event handling
• Business logic
• Database operations

------------------------------------------------------------
9. ViewState
------------------------------------------------------------

• Stores page data between postbacks.
• Helps maintain the values of controls.


============================================================
ASP.NET Web Page Flow
============================================================

User Opens Web Page
        │
        ▼
Browser Sends Request
        │
        ▼
IIS Receives Request
        │
        ▼
ASP.NET Runtime
        │
        ▼
Processes .aspx Page
        │
        ▼
Executes Code-Behind
        │
        ▼
Generates HTML
        │
        ▼
Browser Displays Page


============================================================
Advantages of ASP.NET Web Pages
============================================================

• Easy to develop.
• Supports server controls.
• Event-driven programming.
• Automatic state management using ViewState.
• Easy database connectivity.
• Rich user interface.
• High security.
• Code-behind improves code organization.


============================================================
Disadvantages
============================================================

• ViewState may increase page size.
• Requires server processing.
• Can consume more server resources.


============================================================
Exam Definition (2 Marks)
============================================================

An ASP.NET Web Page is a .aspx page that contains HTML,
server controls, and server-side code. Its main components
are the Page Directive, HTML structure, Head, Body, Server
Form, ASP.NET Controls, and the Code-Behind file.


============================================================
5-Mark Summary
============================================================

• An ASP.NET Web Page uses the .aspx extension.

Main Components:

• Page Directive
• HTML Declaration
• HTML Tag
• Head Section
• Body Section
• Server Form (runat="server")
• ASP.NET Server Controls
• Code-Behind File
• ViewState

Working:

Browser → IIS → ASP.NET Runtime → Code-Behind → HTML →
Browser.

ASP.NET Web Pages make it easy to build dynamic, secure, and
interactive web applications.
      `},{id:17,question:"17. Explain Object-Oriented Basics of C# (Class, Object, Method, Constructor, Encapsulation, Inheritance, Polymorphism, Abstraction).",answer:"",codeExample:`
============================================================
               Object-Oriented Basics of C#
============================================================

============================================================
What is Object-Oriented Programming (OOP)?
============================================================

Object-Oriented Programming (OOP) is a programming approach
that organizes programs using classes and objects. It helps
in making programs reusable, secure, and easy to maintain.

The main OOP concepts in C# are:

• Class
• Object
• Method
• Constructor
• Encapsulation
• Inheritance
• Polymorphism
• Abstraction


============================================================
1. Class
============================================================

What is a Class?

A Class is a blueprint or template used to create objects.
It contains data (fields) and functions (methods).

------------------------------------------------------------
Syntax
------------------------------------------------------------

class Student
{
    public string Name;
}

------------------------------------------------------------
Example
------------------------------------------------------------

class Student
{
    public string Name;
}


============================================================
2. Object
============================================================

What is an Object?

An Object is an instance of a class. It is used to access the
data members and methods of the class.

------------------------------------------------------------
Syntax
------------------------------------------------------------

Student s = new Student();

------------------------------------------------------------
Example
------------------------------------------------------------

Student s = new Student();
s.Name = "Raj";


============================================================
3. Method
============================================================

What is a Method?

A Method is a block of code that performs a specific task.
Methods define the behavior of a class.

------------------------------------------------------------
Syntax
------------------------------------------------------------

public void Display()
{
    Console.WriteLine("Hello");
}

------------------------------------------------------------
Example
------------------------------------------------------------

class Student
{
    public void Display()
    {
        Console.WriteLine("Welcome");
    }
}


============================================================
4. Constructor
============================================================

What is a Constructor?

A Constructor is a special method that is automatically
called when an object is created. It is used to initialize
objects.

------------------------------------------------------------
Features
------------------------------------------------------------

• Constructor name is the same as the class name.
• It has no return type.
• It is called automatically when an object is created.

------------------------------------------------------------
Syntax
------------------------------------------------------------

class Student
{
    public Student()
    {
        Console.WriteLine("Constructor Called");
    }
}

------------------------------------------------------------
Example
------------------------------------------------------------

Student s = new Student();


============================================================
5. Encapsulation
============================================================

What is Encapsulation?

Encapsulation means wrapping data and methods into a single
unit (class) and restricting direct access to data.

It is achieved using private variables and public methods or
properties.

------------------------------------------------------------
Example
------------------------------------------------------------

class Student
{
    private int marks;

    public void SetMarks(int m)
    {
        marks = m;
    }

    public int GetMarks()
    {
        return marks;
    }
}

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Data security.
• Prevents unauthorized access.
• Improves code maintenance.


============================================================
6. Inheritance
============================================================

What is Inheritance?

Inheritance allows one class to inherit the properties and
methods of another class.

• Parent Class (Base Class)
• Child Class (Derived Class)

------------------------------------------------------------
Syntax
------------------------------------------------------------

class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating");
    }
}

class Dog : Animal
{
}

------------------------------------------------------------
Example
------------------------------------------------------------

Dog d = new Dog();
d.Eat();

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Code reuse.
• Easy maintenance.
• Reduces duplicate code.


============================================================
7. Polymorphism
============================================================

What is Polymorphism?

Polymorphism means one method can have many forms.

There are two types:

------------------------------------------------------------
1. Compile-Time Polymorphism
------------------------------------------------------------

Achieved using Method Overloading.

Example

class Demo
{
    public void Show()
    {
        Console.WriteLine("No Parameter");
    }

    public void Show(string name)
    {
        Console.WriteLine(name);
    }
}

------------------------------------------------------------
2. Run-Time Polymorphism
------------------------------------------------------------

Achieved using Method Overriding.

Example

class Animal
{
    public virtual void Sound()
    {
        Console.WriteLine("Animal Sound");
    }
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Bark");
    }
}

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Flexibility.
• Code reuse.
• Easy extension of programs.


============================================================
8. Abstraction
============================================================

What is Abstraction?

Abstraction means hiding implementation details and showing
only essential features.

It is achieved using:

• Abstract Classes
• Interfaces

------------------------------------------------------------
Example
------------------------------------------------------------

abstract class Animal
{
    public abstract void Sound();
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Bark");
    }
}

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Hides complexity.
• Improves security.
• Makes code easier to understand.


============================================================
Summary of OOP Concepts
============================================================

+-----------------+--------------------------------------------------------------+
| Concept         | Description                                                  |
+-----------------+--------------------------------------------------------------+
| Class           | Blueprint for creating objects.                              |
+-----------------+--------------------------------------------------------------+
| Object          | Instance of a class.                                         |
+-----------------+--------------------------------------------------------------+
| Method          | Performs a specific task.                                    |
+-----------------+--------------------------------------------------------------+
| Constructor     | Initializes an object when it is created.                    |
+-----------------+--------------------------------------------------------------+
| Encapsulation   | Wraps data and methods together and hides data.              |
+-----------------+--------------------------------------------------------------+
| Inheritance     | Allows one class to inherit another class's properties       |
|                 | and methods.                                                 |
+-----------------+--------------------------------------------------------------+
| Polymorphism    | One method can have multiple forms.                          |
+-----------------+--------------------------------------------------------------+
| Abstraction     | Hides implementation details and shows only essential        |
|                 | features.                                                    |
+-----------------+--------------------------------------------------------------+


============================================================
Advantages of OOP
============================================================

• Code reusability.
• Easy maintenance.
• Better security through encapsulation.
• Reduces code duplication.
• Makes large applications easier to develop and manage.


============================================================
Exam Definition (2 Marks)
============================================================

Class:
Blueprint for creating objects.

------------------------------------------------------------

Object:
Instance of a class.

------------------------------------------------------------

Method:
Function that performs a task.

------------------------------------------------------------

Constructor:
Special method used to initialize objects.

------------------------------------------------------------

Encapsulation:
Wrapping data and methods together and restricting direct
access.

------------------------------------------------------------

Inheritance:
Acquiring properties and methods from another class.

------------------------------------------------------------

Polymorphism:
One method having multiple forms.

------------------------------------------------------------

Abstraction:
Hiding implementation details and showing only essential
features.


============================================================
5-Mark Summary
============================================================

• Class is a blueprint, and an Object is its instance.

• Method performs a specific task, while a Constructor
  initializes an object.

• Encapsulation protects data by hiding it inside a class.

• Inheritance enables code reuse by allowing a child class
  to inherit from a parent class.

• Polymorphism allows methods to behave differently in
  different situations (overloading and overriding).

• Abstraction hides internal implementation and exposes
  only the necessary functionality.

These OOP concepts make C# programs modular, reusable,
secure, and easy to maintain.
      
      `},{id:18,question:"18. Explain Data Types, Variables, and Statements in C# with suitable examples.",answer:"",codeExample:`
============================================================
          Data Types, Variables, and Statements in C#
============================================================


============================================================
1. Data Types in C#
============================================================

------------------------------------------------------------
What are Data Types?
------------------------------------------------------------

A Data Type specifies the type of data that a variable can
store, such as numbers, characters, or text.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Data Type defines the type and size of data that a variable
can store in a C# program.


============================================================
Types of Data Types
============================================================

------------------------------------------------------------
1. Value Data Types
------------------------------------------------------------

These store the actual value directly.

+---------------+-------------------------+---------------------------+
| Data Type     | Description             | Example                   |
+---------------+-------------------------+---------------------------+
| int           | Integer numbers         | int age = 20;             |
+---------------+-------------------------+---------------------------+
| float         | Decimal numbers         | float marks = 85.5f;      |
+---------------+-------------------------+---------------------------+
| double        | Large decimal numbers   | double salary = 50000.75; |
+---------------+-------------------------+---------------------------+
| char          | Single character        | char grade = 'A';         |
+---------------+-------------------------+---------------------------+
| bool          | True or False value     | bool pass = true;         |
+---------------+-------------------------+---------------------------+

------------------------------------------------------------
2. Reference Data Types
------------------------------------------------------------

These store the reference (address) of an object.

+---------------+------------------------------+
| Data Type     | Example                      |
+---------------+------------------------------+
| string        | "Raj"                        |
+---------------+------------------------------+
| object        | object obj = 100;            |
+---------------+------------------------------+
| array         | int[] num = {1,2,3};         |
+---------------+------------------------------+
| class         | Student s = new Student();   |
+---------------+------------------------------+

------------------------------------------------------------
Example of Data Types
------------------------------------------------------------

csharp
int age = 20;
float marks = 85.5f;
char grade = 'A';
bool result = true;
string name = "Raj";



============================================================
2. Variables in C#
============================================================

------------------------------------------------------------
What is a Variable?
------------------------------------------------------------

A Variable is a named memory location used to store data. Its
value can change during program execution.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Variable is a named memory location used to store data of a
specific data type.

------------------------------------------------------------
Syntax
------------------------------------------------------------

csharp
DataType VariableName = Value;


------------------------------------------------------------
Example
------------------------------------------------------------

csharp
int age = 21;
string name = "Raj";
double salary = 25000.50;


------------------------------------------------------------
Rules for Naming Variables
------------------------------------------------------------

• Variable name must start with a letter or _.
• It cannot start with a number.
• Spaces are not allowed.
• C# keywords cannot be used as variable names.
• Variable names are case-sensitive.

------------------------------------------------------------
Valid Examples
------------------------------------------------------------

csharp
int age;
string studentName;
float totalMarks;


------------------------------------------------------------
Invalid Examples
------------------------------------------------------------

csharp
int 1age;             // ❌ Starts with a number
string student name;  // ❌ Contains a space
int class;            // ❌ 'class' is a keyword



============================================================
3. Statements in C#
============================================================

------------------------------------------------------------
What are Statements?
------------------------------------------------------------

A Statement is an instruction that tells the computer to
perform a specific task. Each statement usually ends with a
semicolon (;).

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Statement is a command or instruction in a C# program that
performs a specific action.


============================================================
Types of Statements
============================================================

------------------------------------------------------------
1. Declaration Statement
------------------------------------------------------------

Used to declare variables.

csharp
int age;
string name;


------------------------------------------------------------
2. Assignment Statement
------------------------------------------------------------

Used to assign values to variables.

csharp
age = 20;
name = "Raj";


------------------------------------------------------------
3. Conditional Statement
------------------------------------------------------------

Used to make decisions.

Example: if statement

csharp
int marks = 70;

if (marks >= 35)
{
    Console.WriteLine("Pass");
}


------------------------------------------------------------
4. Loop Statement
------------------------------------------------------------

Used to repeat a block of code.

Example: for loop

csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}


------------------------------------------------------------
5. Jump Statement
------------------------------------------------------------

Used to change the normal flow of execution.

Examples:

csharp
break
continue
return


csharp
break;



============================================================
Complete Example
============================================================

csharp
using System;

class Program
{
    static void Main()
    {
        int age = 21;
        string name = "Raj";
        bool pass = true;

        Console.WriteLine(name);
        Console.WriteLine(age);

        if (pass)
        {
            Console.WriteLine("Passed");
        }
    }
}



============================================================
Advantages
============================================================

• Data types help store data correctly.
• Variables make data easy to access and modify.
• Statements control the flow of the program.
• Improves code readability and organization.


============================================================
Exam Definition (2 Marks)
============================================================

Data Type:

Defines the type of data that a variable can store.

------------------------------------------------------------

Variable:

A named memory location used to store data.

------------------------------------------------------------

Statement:

An instruction that performs a specific action in a C# program.


============================================================
5-Mark Summary
============================================================

Data Types specify the type of data stored in a variable.
They are mainly Value Types (int, float, char, bool) and
Reference Types (string, array, class, object).

Variables are named memory locations used to store data.
They follow specific naming rules and are declared using
DataType VariableName.

Statements are instructions executed by the program.
Common types include Declaration, Assignment, Conditional
(if), Loop (for), and Jump (break, continue, return)
statements.

Together, data types, variables, and statements form the
basic building blocks of every C# program.
      
      `},{id:21,question:"21. Explain ASP.NET Validation Controls. Discuss all basic validation controls with suitable examples.",answer:"",codeExample:`
============================================================
                 ASP.NET Validation Controls
============================================================

============================================================
What are Validation Controls?
============================================================

ASP.NET Validation Controls are server controls used to validate
user input before it is processed. They ensure that users enter
correct and valid data, reducing errors and improving data
accuracy.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

ASP.NET Validation Controls are server-side controls that check
user input and ensure it meets specified validation rules before
the data is submitted.


============================================================
Features of Validation Controls
============================================================

• Validate user input automatically.
• Reduce invalid data entry.
• Improve data accuracy.
• Easy to use with ASP.NET controls.
• Display error messages when validation fails.
• Support both client-side and server-side validation.


============================================================
Types of ASP.NET Validation Controls
============================================================

There are 6 basic validation controls in ASP.NET:

1. RequiredFieldValidator
2. CompareValidator
3. RangeValidator
4. RegularExpressionValidator
5. CustomValidator
6. ValidationSummary


============================================================
1. RequiredFieldValidator
============================================================

------------------------------------------------------------
What is RequiredFieldValidator?
------------------------------------------------------------

It ensures that the user does not leave a required field empty.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtName" runat="server"></asp:TextBox>

<asp:RequiredFieldValidator
    ID="rfvName"
    runat="server"
    ControlToValidate="txtName"
    ErrorMessage="Name is required!"
    ForeColor="Red">
</asp:RequiredFieldValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

If the Name field is empty, the message
"Name is required!" is displayed.


============================================================
2. CompareValidator
============================================================

------------------------------------------------------------
What is CompareValidator?
------------------------------------------------------------

It compares the value of one control with another control or
with a fixed value.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtPassword" runat="server"></asp:TextBox>

<asp:TextBox ID="txtConfirm" runat="server"></asp:TextBox>

<asp:CompareValidator
    ID="cvPassword"
    runat="server"
    ControlToValidate="txtConfirm"
    ControlToCompare="txtPassword"
    ErrorMessage="Passwords do not match!"
    ForeColor="Red">
</asp:CompareValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Checks whether Password and Confirm Password are the same.


============================================================
3. RangeValidator
============================================================

------------------------------------------------------------
What is RangeValidator?
------------------------------------------------------------

It checks whether the entered value lies within a specified
minimum and maximum range.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtAge" runat="server"></asp:TextBox>

<asp:RangeValidator
    ID="rvAge"
    runat="server"
    ControlToValidate="txtAge"
    MinimumValue="18"
    MaximumValue="60"
    Type="Integer"
    ErrorMessage="Age must be between 18 and 60."
    ForeColor="Red">
</asp:RangeValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Allows only ages between 18 and 60.


============================================================
4. RegularExpressionValidator
============================================================

------------------------------------------------------------
What is RegularExpressionValidator?
------------------------------------------------------------

It validates user input using a regular expression (pattern).

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>

<asp:RegularExpressionValidator
    ID="revEmail"
    runat="server"
    ControlToValidate="txtEmail"
    ValidationExpression="w+@w+.w+"
    ErrorMessage="Enter a valid email address."
    ForeColor="Red">
</asp:RegularExpressionValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Checks whether the email address is in a valid format.


============================================================
5. CustomValidator
============================================================

------------------------------------------------------------
What is CustomValidator?
------------------------------------------------------------

It allows the developer to create custom validation rules using
server-side or client-side code.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:CustomValidator
    ID="cvCustom"
    runat="server"
    ErrorMessage="Invalid value.">
</asp:CustomValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Checks custom conditions such as:

• Username already exists.
• Employee ID must follow company rules.


============================================================
6. ValidationSummary
============================================================

------------------------------------------------------------
What is ValidationSummary?
------------------------------------------------------------

It displays all validation error messages together in one place.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:ValidationSummary
    ID="vsSummary"
    runat="server"
    HeaderText="Please correct the following errors:" />


------------------------------------------------------------
Example
------------------------------------------------------------

If multiple validation controls fail, all error messages are
shown in one summary.


============================================================
Common Properties of Validation Controls
============================================================

+----------------------+------------------------------------------------------+
| Property             | Description                                          |
+----------------------+------------------------------------------------------+
| ID                   | Unique name of the validator.                        |
+----------------------+------------------------------------------------------+
| ControlToValidate    | Specifies the control to validate.                   |
+----------------------+------------------------------------------------------+
| ErrorMessage         | Message displayed when validation fails.             |
+----------------------+------------------------------------------------------+
| ForeColor            | Sets the color of the error message.                 |
+----------------------+------------------------------------------------------+
| Display              | Specifies how the error message is displayed.        |
+----------------------+------------------------------------------------------+
| ValidationGroup      | Groups related validation controls.                  |
+----------------------+------------------------------------------------------+


============================================================
Difference Between Validation Controls
============================================================

+-------------------------------+----------------------------------------------+
| Validation Control            | Purpose                                      |
+-------------------------------+----------------------------------------------+
| RequiredFieldValidator        | Ensures the field is not empty.              |
+-------------------------------+----------------------------------------------+
| CompareValidator              | Compares two values or controls.             |
+-------------------------------+----------------------------------------------+
| RangeValidator                | Checks whether a value is within a specified |
|                               | range.                                       |
+-------------------------------+----------------------------------------------+
| RegularExpressionValidator    | Validates input using a pattern              |
|                               | (e.g., email, phone).                        |
+-------------------------------+----------------------------------------------+
| CustomValidator               | Performs user-defined validation.            |
+-------------------------------+----------------------------------------------+
| ValidationSummary             | Displays all validation errors together.     |
+-------------------------------+----------------------------------------------+


============================================================
Advantages of Validation Controls
============================================================

• Improves data accuracy.
• Prevents invalid user input.
• Reduces server-side errors.
• Easy to implement.
• Supports client-side and server-side validation.
• Provides better user experience.


============================================================
Disadvantages
============================================================

• Complex validation may require custom code.
• Incorrect configuration can cause validation failures.
• Client-side validation alone is not sufficient for security.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET Validation Controls are server controls that validate
user input before processing. The six basic validation controls
are RequiredFieldValidator, CompareValidator, RangeValidator,
RegularExpressionValidator, CustomValidator, and
ValidationSummary.


============================================================
5-Mark Summary
============================================================

• Validation Controls ensure users enter valid and correct data.

• RequiredFieldValidator – Checks that a field is not empty.

• CompareValidator – Compares two values.

• RangeValidator – Validates a value within a specified range.

• RegularExpressionValidator – Validates input using a pattern.

• CustomValidator – Allows custom validation logic.

• ValidationSummary – Displays all validation errors in one
  place.

These controls improve data accuracy, security, and user
experience in ASP.NET applications.
      
      `},{id:22,question:"22. Explain Validation Techniques in ASP.NET. Discuss Client-side and Server-side validation.",answer:"",codeExample:`
============================================================
              Validation Techniques in ASP.NET
============================================================

============================================================
What is Validation?
============================================================

Validation is the process of checking whether the data entered
by the user is correct, complete, and in the required format
before it is processed or stored in the database.

ASP.NET provides two main validation techniques:

• Client-side Validation
• Server-side Validation


============================================================
1. Client-side Validation
============================================================

------------------------------------------------------------
What is Client-side Validation?
------------------------------------------------------------

Client-side validation checks the user's input in the web
browser before the data is sent to the server.

It uses JavaScript and ASP.NET Validation Controls to
validate data quickly.

------------------------------------------------------------
Working
------------------------------------------------------------

User Enters Data
        │
        ▼
 Browser Validates Input
        │
        ▼
Valid Data?
   │          │
  Yes        No
   │          │
   ▼          ▼
Send to     Show Error
 Server      Message

------------------------------------------------------------
Features
------------------------------------------------------------

• Performed in the browser.
• Faster because no server request is needed.
• Reduces server load.
• Gives immediate feedback to the user.

------------------------------------------------------------
Example
------------------------------------------------------------

If the Name field is empty, the browser immediately displays:

"Name is required!"

without sending the form to the server.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Fast validation.
• Reduces network traffic.
• Improves user experience.
• Decreases server workload.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Can be bypassed if JavaScript is disabled.
• Not suitable for sensitive security checks.


============================================================
2. Server-side Validation
============================================================

------------------------------------------------------------
What is Server-side Validation?
------------------------------------------------------------

Server-side validation checks the user's input after the form
is submitted to the server.

The server verifies the data before processing or storing it.

------------------------------------------------------------
Working
------------------------------------------------------------

User Enters Data
        │
        ▼
Submit Form
        │
        ▼
 Server Validates Input
        │
        ▼
Valid Data?
   │          │
  Yes        No
   │          │
   ▼          ▼
Process      Return Error
 Request      Message

------------------------------------------------------------
Features
------------------------------------------------------------

• Performed on the server.
• More secure than client-side validation.
• Cannot be bypassed by disabling JavaScript.
• Suitable for database and business rule validation.

------------------------------------------------------------
Example
------------------------------------------------------------

The server checks whether:

• Username already exists.
• Email is unique.
• Password matches the database.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Highly secure.
• Reliable.
• Prevents invalid data from entering the database.
• Supports complex validation.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Slower than client-side validation.
• Requires communication with the server.
• Increases server processing.


============================================================
Difference Between Client-side and Server-side Validation
============================================================

| Client-side Validation                     | Server-side Validation                              |
| ------------------------------------------ | --------------------------------------------------- |
| Performed in the browser.                  | Performed on the server.                            |
| Uses JavaScript and validation controls.   | Uses C# or VB.NET code on the server.               |
| Faster.                                    | Slower because data is sent to the server.          |
| Reduces server load.                       | Increases server load.                              |
| Can be bypassed if JavaScript is disabled. | Cannot be bypassed by disabling JavaScript.         |
| Suitable for basic input validation.       | Suitable for security and business rule validation. |



============================================================
Why Both Techniques Are Used
============================================================

In ASP.NET applications, both client-side and server-side
validation are used together because:

• Client-side validation provides a fast and user-friendly
  experience.

• Server-side validation ensures data is secure and valid
  before processing.

Using both techniques makes the application fast, secure,
and reliable.


============================================================
Advantages of Validation
============================================================

• Prevents invalid data entry.
• Improves data accuracy.
• Enhances application security.
• Reduces database errors.
• Improves user experience.


============================================================
Exam Definition (2 Marks)
============================================================

Validation is the process of checking user input before
processing it. ASP.NET supports Client-side Validation,
which validates data in the browser, and Server-side
Validation, which validates data on the server before
processing.


============================================================
5-Mark Summary
============================================================

• Validation ensures that user input is correct and complete.

• Client-side Validation:
  - Performed in the browser.
  - Fast and reduces server load.
  - Uses JavaScript and ASP.NET validation controls.

• Server-side Validation:
  - Performed on the server.
  - More secure and reliable.
  - Used for database checks and business rules.

• Client-side validation improves performance, while
  server-side validation provides strong security.

• Best practice is to use both client-side and server-side
  validation together in ASP.NET applications.
      


-----------------------------------------------------------------------


============================================================
              Client-side and Server-side Validation Examples
============================================================


============================================================
1. Client-side Validation Example
============================================================

Validation Used:

✅ RequiredFieldValidator

------------------------------------------------------------
Explanation
------------------------------------------------------------

When the user clicks the button without entering a name,
the error message appears immediately in the browser
(no request is sent to the server).

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Client Side Validation</title>
</head>
<body>

<form id="form1" runat="server">

    Name :
    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>

    <asp:RequiredFieldValidator
        ID="rfvName"
        runat="server"
        ControlToValidate="txtName"
        ErrorMessage="Name is required"
        ForeColor="Red">
    </asp:RequiredFieldValidator>

    <br /><br />

    <asp:Button
        ID="btnSubmit"
        runat="server"
        Text="Submit" />

</form>

</body>
</html>


------------------------------------------------------------
Output
------------------------------------------------------------

Name : ___________

[Submit]

If empty →

Name is required

------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ RequiredFieldValidator

This is Client-side Validation (it also performs server-side
validation automatically if JavaScript is unavailable).


============================================================
2. Client-side Validation Example
============================================================

Compare Password

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
Password :
<asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>

Confirm Password :
<asp:TextBox ID="txtConfirm" runat="server" TextMode="Password"></asp:TextBox>

<asp:CompareValidator
    ID="cv1"
    runat="server"
    ControlToValidate="txtConfirm"
    ControlToCompare="txtPassword"
    ErrorMessage="Password does not match"
    ForeColor="Red">
</asp:CompareValidator>


------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ CompareValidator


============================================================
3. Client-side Validation Example
============================================================

Email Validation

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
Email :

<asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>

<asp:RegularExpressionValidator
    ID="revEmail"
    runat="server"
    ControlToValidate="txtEmail"
    ValidationExpression="w+@w+.w+"
    ErrorMessage="Invalid Email"
    ForeColor="Red">
</asp:RegularExpressionValidator>


------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ RegularExpressionValidator


============================================================
4. Server-side Validation Example
============================================================

Suppose you want to check whether the Username is "admin".

Only the server knows this information.

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
<form id="form1" runat="server">

Username :

<asp:TextBox
    ID="txtUser"
    runat="server">
</asp:TextBox>

<br /><br />

<asp:Button
    ID="btnCheck"
    runat="server"
    Text="Check Username"
    OnClick="btnCheck_Click" />

<br /><br />

<asp:Label
    ID="lblResult"
    runat="server">
</asp:Label>

</form>


------------------------------------------------------------
C# Code (Default.aspx.cs)
------------------------------------------------------------

csharp
protected void btnCheck_Click(object sender, EventArgs e)
{
    if (txtUser.Text == "admin")
    {
        lblResult.Text = "Username already exists";
    }
    else
    {
        lblResult.Text = "Username is available";
    }
}


------------------------------------------------------------
Validation Used
------------------------------------------------------------

❌ No ASP.NET Validation Control

✅ Validation is done using C# code on the server.


============================================================
5. Server-side Validation Using CustomValidator
============================================================

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
Username :

<asp:TextBox ID="txtName" runat="server"></asp:TextBox>

<asp:CustomValidator
    ID="cvUser"
    runat="server"
    ControlToValidate="txtName"
    OnServerValidate="CheckUser"
    ErrorMessage="Username already exists"
    ForeColor="Red">
</asp:CustomValidator>

<br /><br />

<asp:Button
    ID="btnSave"
    runat="server"
    Text="Save" />


------------------------------------------------------------
C# Code
------------------------------------------------------------

csharp
protected void CheckUser(object source, ServerValidateEventArgs args)
{
    if (args.Value == "admin")
    {
        args.IsValid = false;
    }
    else
    {
        args.IsValid = true;
    }
}


------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ CustomValidator



      `},{id:23,question:"23. Explain State Management in ASP.NET. Discuss View State, Session State, Application State, Cookies, and URL Encoding.",answer:"",codeExample:`
============================================================
                State Management in ASP.NET
============================================================

============================================================
What is State Management?
============================================================

State Management is the process of storing and maintaining
user data between different page requests in an ASP.NET
application.

Since HTTP is a stateless protocol, it does not remember
previous requests. ASP.NET uses state management techniques
to preserve information such as user login, preferences,
and shopping cart data.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

State Management is the technique of storing and maintaining
user information between different requests in an ASP.NET
application.


============================================================
Types of State Management
============================================================

ASP.NET provides the following state management techniques:

• View State
• Session State
• Application State
• Cookies
• URL Encoding


============================================================
1. View State
============================================================

------------------------------------------------------------
What is View State?
------------------------------------------------------------

View State stores the values of controls on the same page
after a postback.

It is stored in a hidden field on the web page.

------------------------------------------------------------
Example
------------------------------------------------------------

Store Data

Example:
ViewState["Name"] = "Anmol";
ViewState["Age"] = 22;


Retrieve Data

Example:
string name = ViewState["Name"].ToString();
int age = Convert.ToInt32(ViewState["Age"]);


------------------------------------------------------------
Features
------------------------------------------------------------

• Stores page-level data.
• Maintains control values after postback.
• Stored on the client (hidden field).
• Available only for the current page.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Automatic state maintenance.
• Easy to use.
• No server memory required.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Increases page size.
• Works only for the same page.


============================================================
2. Session State
============================================================

------------------------------------------------------------
What is Session State?
------------------------------------------------------------

Session State stores data for a single user during a session.

It is stored on the server and is available until the user
logs out or the session expires.

------------------------------------------------------------
Example
------------------------------------------------------------

Store Data

Example:
Session["Name"] = "Anmol";
Session["Age"] = 22;

Retrieve Data
string name = Session["Name"].ToString();
int age = Convert.ToInt32(Session["Age"]);


------------------------------------------------------------
Features
------------------------------------------------------------

• Stores user-specific data.
• Stored on the server.
• Available across multiple pages.
• Expires after a timeout.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Secure.
• Easy to access.
• Suitable for login information and shopping carts.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Uses server memory.
• Data is lost when the session expires.


============================================================
3. Application State
============================================================

------------------------------------------------------------
What is Application State?
------------------------------------------------------------

Application State stores data that is shared by all users
of the application.

It remains available until the application stops or
restarts.

------------------------------------------------------------
Example
------------------------------------------------------------


Application["Visitors"] = 100;


To retrieve the value:

int count = (int)Application["Visitors"];


------------------------------------------------------------
Features
------------------------------------------------------------

• Shared by all users.
• Stored on the server.
• Available throughout the application.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to share common data.
• Suitable for application-wide information.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Not user-specific.
• Uses server memory.


============================================================
4. Cookies
============================================================

------------------------------------------------------------
What are Cookies?
------------------------------------------------------------

Cookies are small text files stored in the user's browser.
They are used to remember user information such as login
preferences and language settings.

------------------------------------------------------------
Example
------------------------------------------------------------

Create a Cookie

HttpCookie ck = new HttpCookie("User");
ck.Value = "Anmol";
Response.Cookies.Add(ck);

Read a Cookie

string name = Request.Cookies["User"].Value;


Create a Persistent Cookie

HttpCookie ck = new HttpCookie("User");
ck.Value = "Anmol";
ck.Expires = DateTime.Now.AddDays(7);
Response.Cookies.Add(ck);

Delete a Cookie

Response.Cookies["User"].Expires = DateTime.Now.AddDays(-1);


------------------------------------------------------------
Features
------------------------------------------------------------

• Stored on the client.
• Can persist after the browser is closed (if an expiry date
  is set).
• Small amount of data can be stored.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Saves user preferences.
• Reduces repeated login requests.
• Does not use server memory.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Limited storage size.
• Users can delete or disable cookies.
• Not suitable for sensitive information.


============================================================
5. URL Encoding (Query String)
============================================================

------------------------------------------------------------
What is URL Encoding?
------------------------------------------------------------

URL Encoding (Query String) passes information from one page
to another by appending data to the URL.

------------------------------------------------------------
Example
------------------------------------------------------------

text
Response.Redirect("Page2.aspx?name=Anmol&age=22");


Retrieve values in C#:

csharp
string name = Request.QueryString["Name"];
string age = Request.QueryString["Age"];


------------------------------------------------------------
Features
------------------------------------------------------------

• Data is passed through the URL.
• Easy to implement.
• Suitable for small amounts of data.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Simple to use.
• No server memory required.
• Useful for navigation between pages.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Data is visible in the browser's address bar.
• Limited amount of data can be passed.
• Not secure for confidential information.


============================================================
Difference Between State Management Techniques
============================================================

| Technique         | Storage Location      | Scope         | Example Use                            |
| ------------------| --------------------- | ------------- | -------------------------------------- |
| View State        | Client (Hidden Field) | Same page     | Maintain TextBox values after postback |
| Session State     | Server                | Single user   | Login information, shopping cart       |
| Application State | Server                | All users     | Visitor count, application settings    |
| Cookies           | Client Browser        | Single user   | Remember username, language preference |
| URL Encoding      | URL (Query String)    | Between pages | Pass ID or name to another page        |


============================================================
Advantages of State Management
============================================================

• Maintains user data.
• Improves user experience.
• Supports login and session tracking.
• Makes web applications interactive.
• Allows data sharing between pages.


============================================================
Exam Definition (2 Marks)
============================================================

State Management is the technique used in ASP.NET to store
and maintain user data between different page requests.
Common techniques include View State, Session State,
Application State, Cookies, and URL Encoding.


============================================================
5-Mark Summary
============================================================

• State Management maintains user data because HTTP is
  stateless.

• View State stores page data on the client and works only
  on the same page.

• Session State stores user-specific data on the server and
  is available across multiple pages.

• Application State stores application-wide data shared by
  all users.

• Cookies store small amounts of data in the browser.

• URL Encoding (Query String) passes data through the URL
  between pages.

• These techniques help create dynamic, user-friendly, and
  interactive ASP.NET applications.
      `},{id:24,question:"24. Explain Master Pages in ASP.NET. Discuss creating Master Pages and Content Pages with advantages.",answer:"",codeExample:`
============================================================
                    Master Pages in ASP.NET
============================================================

============================================================
What is a Master Page?
============================================================

A Master Page in ASP.NET is a special page that defines the
common layout (such as header, footer, navigation menu, and
sidebar) for multiple web pages.

It helps maintain a consistent look and feel throughout the
website. Master Pages have the .master extension.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Master Page is an ASP.NET page with the .master extension
that defines the common layout of a website and allows
multiple content pages to share the same design.


============================================================
Why Use Master Pages?
============================================================

Without a Master Page:

• Every web page must have its own header, footer, and menu.
• If the design changes, each page must be updated manually.

------------------------------------------------------------

With a Master Page:

• Common layout is created once.
• All content pages automatically use the same layout.


============================================================
Structure of Master Page
============================================================

Master Page (.master)
│
├── Header
├── Navigation Menu
├── ContentPlaceHolder
├── Sidebar
└── Footer


============================================================
Creating a Master Page
============================================================

------------------------------------------------------------
Step 1: Create a Master Page
------------------------------------------------------------

Create a file named Site.master.

------------------------------------------------------------
Master Page Code (Site.master)
------------------------------------------------------------

<%@ Master Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>My Website</title>
</head>

<body>

<h1>ABC College</h1>

<hr/>

<asp:ContentPlaceHolder
    ID="MainContent"
    runat="server">
</asp:ContentPlaceHolder>

<hr/>

<h3>Copyright © 2026</h3>

</body>
</html>


------------------------------------------------------------
Explanation
------------------------------------------------------------

• Header → Displays the website title.
• ContentPlaceHolder → Area where content pages display
  their content.
• Footer → Common footer for all pages.


============================================================
Creating a Content Page
============================================================

A Content Page uses the layout of the Master Page and provides
only the page-specific content.

------------------------------------------------------------
Step 2: Create Default.aspx
------------------------------------------------------------

<%@ Page
MasterPageFile="~/Site.master"
Language="C#"
Title="Home Page" %>

<asp:Content
ID="Content1"
ContentPlaceHolderID="MainContent"
runat="server">

<h2>Welcome to ASP.NET</h2>

<p>This is the Home Page.</p>

</asp:Content>


------------------------------------------------------------
Explanation
------------------------------------------------------------

• MasterPageFile → Specifies the Master Page.
• ContentPlaceHolderID → Links the content to the
  ContentPlaceHolder in the Master Page.
• The content inside <asp:Content> is displayed in the
  Master Page.


============================================================
Components of a Master Page
============================================================

------------------------------------------------------------
1. Master Directive
------------------------------------------------------------

aspx
<%@ Master Language="C#" %>


Defines the page as a Master Page.

------------------------------------------------------------
2. ContentPlaceHolder
------------------------------------------------------------

aspx
<asp:ContentPlaceHolder
ID="MainContent"
runat="server">
</asp:ContentPlaceHolder>


Provides a placeholder where content pages insert their
content.

------------------------------------------------------------
3. Content Control
------------------------------------------------------------

aspx
<asp:Content
ContentPlaceHolderID="MainContent"
runat="server">


Used in a content page to insert content into the Master Page.


============================================================
Working of Master Pages
============================================================

User Requests Content Page
          │
          ▼
Content Page
          │
Uses Master Page Layout
          │
          ▼
Content is inserted into
ContentPlaceHolder
          │
          ▼
Final Web Page
          │
          ▼
Displayed in Browser


============================================================
Advantages of Master Pages
============================================================

• Maintains a consistent layout across all pages.
• Reduces duplicate code.
• Easier website maintenance.
• Changes made in the Master Page automatically apply to all
  content pages.
• Improves code reusability.
• Saves development time.
• Makes website management easier.


============================================================
Disadvantages of Master Pages
============================================================

• More difficult to understand for beginners.
• Complex layouts may require multiple nested Master Pages.
• Improper design can make maintenance harder.


============================================================
Difference Between Master Page and Content Page
============================================================

| Master Page                                | Content Page                    |
| ------------------------------------------ | ------------------------------- |
| Defines the common layout.                 | Contains page-specific content. |
| Has the .master extension.                 | Has the .aspx extension.        |
| Contains ContentPlaceHolder.               | Contains Content controls.      |
| Shared by multiple pages.                  | Uses one Master Page.           |
| Usually contains header, footer, and menu. | Displays unique page content.   |


============================================================
Exam Definition (2 Marks)
============================================================

A Master Page is an ASP.NET page with the .master extension
that provides a common layout for multiple web pages.
Content Pages use the Master Page and display page-specific
content inside ContentPlaceHolder controls.


============================================================
5-Mark Summary
============================================================

• Master Page provides a common layout for all web pages.
• It contains Header, Footer, Navigation Menu, and
  ContentPlaceHolder.
• Content Pages use the Master Page and add their own content
  through the Content control.
• Creating a Master Page: Create a .master file and add a
  ContentPlaceHolder.
• Creating a Content Page: Create an .aspx page, set the
  MasterPageFile, and place content inside an
  <asp:Content> control.
• Advantages: Consistent design, reduced code duplication,
  easier maintenance, better reusability, and faster
  development.
      
      `},{id:25,question:"25. Explain Nested Master Pages and how to access Master Page controls from a Content Page.",answer:"",codeExample:`
============================================================
     Nested Master Pages and Accessing Master Page Controls
                 from a Content Page
============================================================


============================================================
1. Nested Master Pages
============================================================

------------------------------------------------------------
What are Nested Master Pages?
------------------------------------------------------------

A Nested Master Page is a Master Page that is based on another
Master Page. It allows you to create multiple levels of page
layouts.

For example:

• A Main Master Page provides the common layout for the
  entire website.

• A Nested Master Page adds a layout for a specific section
  (such as Student or Admin).

• Content Pages use the Nested Master Page.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Nested Master Page is a Master Page that inherits the layout
of another Master Page, allowing multiple levels of reusable
page layouts.


============================================================
Structure of Nested Master Pages
============================================================

Website

Main Master Page (Site.master)
│
├── Header
├── Navigation
├── Footer
│
▼
Nested Master Page (Student.master)
│
├── Student Menu
├── Student Sidebar
│
▼
Content Page (Home.aspx)


============================================================
Creating a Nested Master Page
============================================================

------------------------------------------------------------
Step 1: Main Master Page (Site.master)
------------------------------------------------------------

<%@ Master Language="C#" %>

<html>
<body>

<h1>ABC College</h1>

<asp:ContentPlaceHolder
ID="MainContent"
runat="server">
</asp:ContentPlaceHolder>

</body>
</html>


------------------------------------------------------------
Step 2: Nested Master Page (Student.master)
------------------------------------------------------------

<%@ Master
MasterPageFile="~/Site.master"
Language="C#" %>

<asp:Content
ContentPlaceHolderID="MainContent"
runat="server">

<h2>Student Section</h2>

<asp:ContentPlaceHolder
ID="StudentContent"
runat="server">
</asp:ContentPlaceHolder>

</asp:Content>


------------------------------------------------------------
Step 3: Content Page (Home.aspx)
------------------------------------------------------------

<%@ Page
MasterPageFile="~/Student.master"
Language="C#" %>

<asp:Content
ContentPlaceHolderID="StudentContent"
runat="server">

Welcome Student

</asp:Content>



============================================================
Advantages of Nested Master Pages
============================================================

• Better organization of large websites.
• Reuse layouts at multiple levels.
• Easy maintenance.
• Reduces duplicate code.
• Provides consistent design.


============================================================
2. Accessing Master Page Controls from a Content Page
============================================================

Sometimes a Content Page needs to access controls (such as a
Label, TextBox, or Button) that are placed in the Master Page.

This can be done using the Master.FindControl() method.


============================================================
Example
============================================================

------------------------------------------------------------
Master Page (Site.master)
------------------------------------------------------------

<asp:Label
ID="lblTitle"
runat="server"
Text="Welcome">
</asp:Label>


------------------------------------------------------------
Content Page (Default.aspx.cs)
------------------------------------------------------------

protected void Page_Load(object sender, EventArgs e)
{
    Label lbl = (Label)Master.FindControl("lblTitle");

    lbl.Text = "Student Portal";
}



============================================================
Explanation
============================================================

• Master refers to the current Master Page.

• FindControl("lblTitle") searches for the control with ID
  lblTitle.

• The Label text is changed from "Welcome" to
  "Student Portal".


============================================================
Another Example (Accessing a TextBox)
============================================================

------------------------------------------------------------
Master Page
------------------------------------------------------------

<asp:TextBox
ID="txtName"
runat="server">
</asp:TextBox>


------------------------------------------------------------
Content Page
------------------------------------------------------------

csharp
TextBox txt = (TextBox)Master.FindControl("txtName");

string name = txt.Text;


This retrieves the text entered in the TextBox on the Master
Page.


============================================================
Working of Nested Master Pages
============================================================

Content Page
      │
      ▼
Nested Master Page
      │
      ▼
Main Master Page
      │
      ▼
Final Web Page
      │
      ▼
Browser


============================================================
Difference Between Master Page and Nested Master Page
============================================================

| Master Page                     | Nested Master Page                                   |
| ------------------------------- | ---------------------------------------------------- |
| Main layout of the website.     | Inherits from another Master Page.                   |
| Directly used by content pages. | Used between the main Master Page and content pages. |
| Contains common layout.         | Adds section-specific layout.                        |
| One level of layout.            | Multiple levels of layout.                           |


============================================================
Advantages of Accessing Master Page Controls
============================================================

• Easy communication between the Master Page and
  Content Page.

• Updates common controls dynamically.

• Improves code reusability.

• Centralized management of shared controls.


============================================================
Exam Definition (2 Marks)
============================================================

Nested Master Page:

A Master Page that inherits another Master Page to create
multiple levels of reusable layouts.

------------------------------------------------------------

Accessing Master Page Controls:

Controls in the Master Page can be accessed from a Content Page
using the Master.FindControl() method.


============================================================
5-Mark Summary
============================================================

• A Nested Master Page is a Master Page that is based on
  another Master Page.

• It helps organize large websites by creating multi-level
  layouts.

• Structure:
  Main Master Page → Nested Master Page → Content Page.

• A Content Page can access Master Page controls using
  Master.FindControl().

• Advantages:
  Better organization, code reuse, easy maintenance,
  consistent design, and dynamic access to shared controls.
      `},{id:26,question:"26. Explain Themes in ASP.NET. Discuss Skin Files and CSS with suitable examples.",answer:"",codeExample:`
============================================================
                      Themes in ASP.NET
============================================================

============================================================
What are Themes?
============================================================

A Theme in ASP.NET is a collection of Skin files, CSS files,
and images that define the appearance (look and feel) of a
website.

Themes help maintain a consistent design across all web pages
without changing the application code.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An ASP.NET Theme is a collection of Skin files, CSS files,
and images used to provide a consistent appearance to web
pages.


============================================================
Components of a Theme
============================================================

An ASP.NET Theme mainly consists of:

• Skin Files (.skin)
• CSS Files (.css)
• Images (optional)


============================================================
Theme Folder Structure
============================================================

App_Themes
│
└── BlueTheme
    │
    ├── Button.skin
    ├── Style.css
    └── logo.png


============================================================
Applying a Theme
============================================================

The theme is applied using the Theme attribute in the Page
Directive.

------------------------------------------------------------
Example
------------------------------------------------------------

<%@ Page Language="C#" Theme="BlueTheme" %>


============================================================
Features of Themes
============================================================

• Provides a consistent look and feel.
• Easy to change website design.
• Reusable across multiple pages.
• Reduces duplicate styling code.
• Separates design from application logic.


============================================================
Skin Files (.skin)
============================================================

------------------------------------------------------------
What is a Skin File?
------------------------------------------------------------

A Skin File is a file with the .skin extension that defines
the appearance of ASP.NET server controls.

It stores properties such as color, font, width, and height.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Skin File is a .skin file that defines the default
appearance of ASP.NET server controls.

------------------------------------------------------------
Syntax of Skin File
------------------------------------------------------------

Button.skin

<asp:Button
runat="server"
BackColor="Blue"
ForeColor="White"
Font-Bold="True" />

------------------------------------------------------------
Using the Button
------------------------------------------------------------

Now simply write:

<asp:Button
ID="btnSave"
runat="server"
Text="Save" />

The button automatically gets the properties defined in
Button.skin.

------------------------------------------------------------
Advantages of Skin Files
------------------------------------------------------------

• No need to set properties repeatedly.
• Easy maintenance.
• Improves code reusability.
• Keeps design separate from logic.


============================================================
CSS (Cascading Style Sheets)
============================================================

------------------------------------------------------------
What is CSS?
------------------------------------------------------------

CSS is used to define the style of HTML elements, such as
colors, fonts, spacing, borders, and layouts.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

CSS (Cascading Style Sheets) is a stylesheet language used to
control the appearance and layout of web pages.

------------------------------------------------------------
Example of CSS File
------------------------------------------------------------

Style.css

body
{
    background-color: lightblue;
}

h1
{
    color: darkblue;
}

.button
{
    background-color: green;
    color: white;
}

------------------------------------------------------------
Linking CSS File
------------------------------------------------------------

<link href="Style.css" rel="stylesheet" />

------------------------------------------------------------
Using CSS
------------------------------------------------------------

<h1>Welcome to ASP.NET</h1>

<input type="button"
class="button"
value="Save" />


============================================================
Difference Between Skin Files and CSS
============================================================

| Skin File                                | CSS                                                       |
| ---------------------------------------- | --------------------------------------------------------- |
| Styles ASP.NET server controls.          | Styles HTML elements.                                     |
| File extension is .skin.                 | File extension is .css.                                   |
| Defines control properties.              | Defines visual styles such as colors, fonts, and layouts. |
| Stored inside the App_Themes folder.     | Can be stored anywhere in the project.                    |
| Used only in ASP.NET applications.       | Used in all web technologies.                             |


============================================================
Working of Themes
============================================================

Theme
│
├── Skin Files
├── CSS Files
└── Images
      │
      ▼
Applied to ASP.NET Page
      │
      ▼
Consistent Website Appearance


============================================================
Advantages of Themes
============================================================

• Consistent website design.
• Easy maintenance.
• Reusable styles.
• Reduces duplicate code.
• Easy to change the website appearance.
• Separates presentation from business logic.


============================================================
Disadvantages
============================================================

• Managing many themes can become complex.
• Skin files apply only to ASP.NET server controls.
• Large themes may increase project size.


============================================================
Exam Definition (2 Marks)
============================================================

Theme:

A collection of Skin files, CSS files, and images used to
provide a consistent appearance to ASP.NET web pages.

------------------------------------------------------------

Skin File:

A .skin file used to define the appearance of ASP.NET server
controls.

------------------------------------------------------------

CSS:

A stylesheet language used to style HTML elements and control
the layout of web pages.


============================================================
5-Mark Summary
============================================================

Themes provide a consistent look and feel for ASP.NET
applications.

A Theme contains Skin Files, CSS Files, and optionally Images.

Skin Files (.skin) define the appearance of ASP.NET server
controls (such as Button, Label, and TextBox).

CSS (.css) styles HTML elements by controlling colors, fonts,
spacing, and layout.

Themes make websites easier to maintain, reusable, and
visually consistent across all pages.
      
      `},{id:27,question:"27. Explain Site Navigation in ASP.NET. Discuss Navigation Controls with examples.",answer:"",codeExample:`
============================================================
                 Site Navigation in ASP.NET
============================================================

============================================================
What is Site Navigation?
============================================================

Site Navigation in ASP.NET is a feature that helps users move
from one web page to another easily. It provides a structured
way to organize and display links between pages in a website.

ASP.NET provides several Navigation Controls to create menus,
breadcrumbs, and tree structures.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Site Navigation is the process of providing links and menus
that help users navigate between different pages of an
ASP.NET website.


============================================================
Features of Site Navigation
============================================================

• Easy navigation between web pages.
• Improves user experience.
• Organizes website structure.
• Supports hierarchical (parent-child) menus.
• Easy to maintain using a site map.


============================================================
Site Map File
============================================================

ASP.NET uses a Web.sitemap file to define the website
structure.

------------------------------------------------------------
Example (Web.sitemap)
------------------------------------------------------------

xml
<?xml version="1.0" encoding="utf-8"?>

<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0">

    <siteMapNode title="Home" url="Home.aspx">

        <siteMapNode title="About" url="About.aspx"/>

        <siteMapNode title="Contact" url="Contact.aspx"/>

    </siteMapNode>

</siteMap>


============================================================
Navigation Controls in ASP.NET
============================================================

ASP.NET provides three main Navigation Controls:

• Menu Control
• TreeView Control
• SiteMapPath Control


============================================================
1. Menu Control
============================================================

------------------------------------------------------------
What is Menu Control?
------------------------------------------------------------

The Menu control displays navigation links in the form of
horizontal or vertical menus.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:Menu ID="Menu1" runat="server">

    <Items>

        <asp:MenuItem Text="Home"
        NavigateUrl="Home.aspx" />

        <asp:MenuItem Text="About"
        NavigateUrl="About.aspx" />

        <asp:MenuItem Text="Contact"
        NavigateUrl="Contact.aspx" />

    </Items>

</asp:Menu>


------------------------------------------------------------
Output
------------------------------------------------------------

Home   About   Contact

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to create menus.
• Supports submenus.
• User-friendly navigation.


============================================================
2. TreeView Control
============================================================

------------------------------------------------------------
What is TreeView Control?
------------------------------------------------------------

The TreeView control displays navigation items in a tree
structure with expandable and collapsible nodes.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TreeView ID="TreeView1" runat="server">

    <Nodes>

        <asp:TreeNode Text="Courses">

            <asp:TreeNode Text="BCA"/>

            <asp:TreeNode Text="MCA"/>

        </asp:TreeNode>

    </Nodes>

</asp:TreeView>


------------------------------------------------------------
Output
------------------------------------------------------------

Courses

├── BCA

└── MCA

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Displays hierarchical data.
• Supports expand/collapse.
• Easy navigation for large websites.


============================================================
3. SiteMapPath Control
============================================================

------------------------------------------------------------
What is SiteMapPath Control?
------------------------------------------------------------

The SiteMapPath control displays the navigation path
(breadcrumb) from the home page to the current page.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:SiteMapPath
    ID="SiteMapPath1"
    runat="server">
</asp:SiteMapPath>


------------------------------------------------------------
Output
------------------------------------------------------------

Home > Courses > MCA

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Shows the user's current location.
• Easy to return to previous pages.
• Improves navigation.


============================================================
Difference Between Navigation Controls
============================================================

| Control     | Purpose                             |
| ------------| ----------------------------------- |
| Menu        | Displays navigation links as menus. |
| TreeView    | Displays hierarchical navigation.   |
| SiteMapPath | Displays breadcrumb navigation.     |


============================================================
Working of Site Navigation
============================================================

User Opens Website
        │
        ▼
Reads Web.sitemap
        │
        ▼
Navigation Controls
(Menu / TreeView / SiteMapPath)
        │
        ▼
User Navigates Between Pages


============================================================
Advantages of Site Navigation
============================================================

• Easy website navigation.
• Improves user experience.
• Organizes website pages.
• Supports hierarchical menus.
• Easy maintenance using a single sitemap file.


============================================================
Disadvantages
============================================================

• Large websites may have complex sitemap files.
• Incorrect sitemap configuration can break navigation.
• Requires updates when pages are added or removed.


============================================================
Exam Definition (2 Marks)
============================================================

Site Navigation is the technique used in ASP.NET to help
users move between web pages. The main navigation controls
are Menu, TreeView, and SiteMapPath.


============================================================
5-Mark Summary
============================================================

• Site Navigation helps users move easily between web pages.

• ASP.NET uses a Web.sitemap file to define the website
  structure.

• Navigation Controls:

  - Menu – Displays links as horizontal or vertical menus.

  - TreeView – Displays pages in a hierarchical tree
    structure.

  - SiteMapPath – Displays breadcrumb navigation
    (e.g., Home > Courses > MCA).

• These controls improve website organization, navigation,
  and user experience.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid paper solutions",answer:"",codeExample:`
===========================================================
WEB APPLICATION DEVELOPMENT / ASP.NET
MID-TERM EXAMINATION – IMPORTANT ANSWERS
===========================================================


Q.1 (a) SHORT QUESTIONS – 1 MARK
===========================================================

Q1. What process in the CLR is responsible for memory management?

Answer:

The Garbage Collector (GC) is responsible for memory management
in the CLR.

It automatically:
- Allocates memory for objects.
- Removes unused objects.
- Frees memory when objects are no longer required.


-----------------------------------------------------------

Q2. What is the primary function of a ListBox control?

Answer:

The ListBox control is used to display a list of items from
which the user can select one or more items.

Example:

ListBox:
    Apple
    Mango
    Orange
    Banana


-----------------------------------------------------------

Q3. What method is used to set a cookie in ASP.NET?

Answer:

The Response.Cookies collection is used to create/set a cookie
in ASP.NET.

Example:

Response.Cookies["username"].Value = "Raj";



===========================================================
Q.1 (b) MCQs – 1 MARK
===========================================================

Q1. What is the main purpose of a Button control in ASP.NET?

(A) To submit data to the server
(B) To display data
(C) To store data
(D) To validate data

Answer:
(A) To submit data to the server


-----------------------------------------------------------

Q2. The Master Page in ASP.NET is used to:

Answer:

To define a common layout/design for multiple web pages.

Example:

Master Page
    |
    |-- Header
    |-- Menu
    |-- Content
    |-- Footer

All content pages can use the same layout.


===========================================================
Q.2 (a) – 2/3 MARK QUESTIONS
===========================================================

Q1. What is method overloading in C#?

Answer:

Method overloading means defining multiple methods with the
same name but with different parameters.

Example:

class Calculator
{
    int Add(int a, int b)
    {
        return a + b;
    }

    int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}

Here, both methods have the same name Add(), but different
number of parameters.

Advantages:
1. Improves code readability.
2. Allows the same operation with different inputs.


-----------------------------------------------------------

Q2. Explain the role of the Just-in-Time (JIT) compiler in .NET.

Answer:

JIT stands for Just-In-Time compiler.

The JIT compiler converts Intermediate Language (IL/MSIL)
code into machine code at runtime.

Working:

C# Source Code
      ↓
C# Compiler
      ↓
IL / MSIL Code
      ↓
JIT Compiler
      ↓
Machine Code
      ↓
CPU Execution

Advantages:
1. Improves execution speed.
2. Converts only required code into machine code.
3. Provides platform-specific machine code.


-----------------------------------------------------------

Q3. What are the key features of System.Linq namespace?

Answer:

System.Linq provides Language Integrated Query (LINQ).

Main features:
1. Query collections easily.
2. Filtering using Where().
3. Sorting using OrderBy().
4. Selecting data using Select().
5. Grouping data using GroupBy().

Example:

var result = numbers.Where(x => x > 10);


-----------------------------------------------------------

Q4. How can you handle unhandled exceptions in Global.asax?

Answer:

Unhandled exceptions can be handled using the
Application_Error() method in Global.asax.

Example:

protected void Application_Error(object sender, EventArgs e)
{
    Exception ex = Server.GetLastError();

    // Handle or log the exception

    Server.ClearError();
}

Purpose:
- Handles unexpected errors.
- Logs error information.
- Prevents application from showing unwanted error pages.


-----------------------------------------------------------

Q5. What is the RequiredFieldValidator control used for?

Answer:

RequiredFieldValidator is used to check whether a user has
entered a value in a required input field.

Example:

<asp:TextBox ID="txtName" runat="server"></asp:TextBox>

<asp:RequiredFieldValidator
    ID="rfvName"
    runat="server"
    ControlToValidate="txtName"
    ErrorMessage="Name is required">
</asp:RequiredFieldValidator>

It prevents the form from being submitted when the field
is empty.


-----------------------------------------------------------

Q6. How did .NET Core differ from the original .NET Framework
   in terms of architecture?

Answer:

.NET Framework:
- Mainly designed for Windows.
- Large and monolithic framework.
- Less suitable for cross-platform development.

.NET Core:
- Cross-platform.
- Modular architecture.
- Lightweight.
- Supports Windows, Linux and macOS.
- Better suited for modern cloud and web applications.

In short:

.NET Framework → Mainly Windows

.NET Core → Cross-platform + Modular + Lightweight



===========================================================
Q.3 – 5 MARK QUESTIONS
===========================================================

Q1. Create a basic site navigation structure using a
    Web.sitemap file in ASP.NET.

Answer:

Web.sitemap is used to define the navigation structure of
an ASP.NET website.

Example Web.sitemap:

<?xml version="1.0" encoding="utf-8" ?>

<siteMapNode
    xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0"
    title="Home"
    url="~/Home.aspx">

    <siteMapNode
        title="About"
        url="~/About.aspx" />

    <siteMapNode
        title="Products"
        url="~/Products.aspx">

        <siteMapNode
            title="Mobile"
            url="~/Mobile.aspx" />

        <siteMapNode
            title="Laptop"
            url="~/Laptop.aspx" />

    </siteMapNode>

    <siteMapNode
        title="Contact"
        url="~/Contact.aspx" />

</siteMapNode>


Navigation structure:

Home
 |
 |-- About
 |
 |-- Products
 |     |
 |     |-- Mobile
 |     |-- Laptop
 |
 |-- Contact


Using SiteMapPath:

<asp:SiteMapPath
    ID="SiteMapPath1"
    runat="server">
</asp:SiteMapPath>


Advantages:
1. Provides website navigation.
2. Maintains common navigation structure.
3. Makes navigation easier for users.
4. Can be used with Menu and SiteMapPath controls.


-----------------------------------------------------------

Q2. Analyse how different data types impact memory usage
    and performance in web applications.

Answer:

Different data types require different amounts of memory.
Choosing the correct data type improves application
performance.

1. Value Types:
   Examples: int, float, double, bool

   They normally store the actual value.

2. Reference Types:
   Examples: string, array, class, object

   They store a reference to an object.

3. Integer:
   int is useful for whole numbers and normally requires
   less memory than larger numeric types.

4. String:
   Strings may consume more memory because they store
   characters.

5. Object:
   object can store different types but may require
   additional memory and processing.

Example:

int age = 20;
double salary = 50000.50;
string name = "Raj";
bool active = true;

Conclusion:

Using suitable data types:
- Reduces memory usage.
- Improves execution speed.
- Reduces unnecessary memory allocation.
- Improves overall application performance.


-----------------------------------------------------------

Q3. Evaluate the role of CTS in ensuring that .NET
    applications can interoperate smoothly.

Answer:

CTS stands for Common Type System.

CTS defines how data types are declared, used and managed
in the .NET environment.

Main roles of CTS:

1. Provides common data types.
2. Ensures type safety.
3. Allows different .NET languages to work together.
4. Defines rules for value types and reference types.
5. Supports language interoperability.

Example:

C#:
int age = 20;

VB.NET:
Dim age As Integer = 20

Both languages use the .NET type system.

Diagram:

C# Application
      \\
       \\
VB.NET Application ---> CTS ---> CLR
       /
      /
F# Application

Conclusion:

CTS allows programs written in different .NET languages
to understand and use common data types, making
interoperability easier.


-----------------------------------------------------------

Q4. Analyse how the SiteMapPath control improves user
    experience on a website.

Answer:

SiteMapPath is an ASP.NET navigation control that displays
the current page location in a website.

Example:

Home > Products > Mobile > Android

This is also called a breadcrumb navigation.

Benefits:

1. Shows the user's current location.
2. Makes navigation easier.
3. Allows users to move back to parent pages.
4. Improves website usability.
5. Reduces confusion on large websites.

Example:

<asp:SiteMapPath
    ID="SiteMapPath1"
    runat="server">
</asp:SiteMapPath>

Diagram:

Home
  ↓
Products
  ↓
Mobile
  ↓
Android

Displayed as:

Home > Products > Mobile > Android

Conclusion:

SiteMapPath provides a simple and clear navigation path,
especially for websites having many pages.


===========================================================
IMPORTANT MEMORY TRICK
===========================================================

Remember these keywords for the exam:

1. CLR Memory
   → Garbage Collector (GC)

2. ListBox
   → Display + Select items

3. Cookie
   → Response.Cookies

4. Button
   → Submit data to server

5. Master Page
   → Common layout for multiple pages

6. Method Overloading
   → Same method name + different parameters

7. JIT
   → IL → Machine Code at Runtime

8. LINQ
   → Query collections

9. Global.asax
   → Application_Error()

10. RequiredFieldValidator
    → Checks empty field

11. .NET Core
    → Cross-platform + Modular + Lightweight

12. Web.sitemap
    → Website navigation structure

13. CTS
    → Common Type System + Language Interoperability

14. SiteMapPath
    → Breadcrumb / Current page location
===========================================================
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. Registration Page",answer:"",codeExample:`
ASP.NET Frontend Code (Registration.aspx):

<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Registration.aspx.cs" Inherits="Registration" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>User Registration</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="text-align:center">
            <h2>User Registration Form</h2>

            Name: <asp:TextBox ID="txtName" runat="server" /><br /><br />
            DOB: <asp:TextBox ID="txtDOB" runat="server" /><br /><br />
            Gender: 
            <asp:RadioButton ID="rdoMale" GroupName="Gender" Text="Male" runat="server" />
            <asp:RadioButton ID="rdoFemale" GroupName="Gender" Text="Female" runat="server" /><br /><br />
            Email: <asp:TextBox ID="txtEmail" runat="server" /><br /><br />
            Contact No: <asp:TextBox ID="txtContact" runat="server" /><br /><br />

            <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" /><br /><br />

            <asp:Label ID="lblResult" runat="server" Font-Bold="true" ForeColor="Blue" />
        </div>
    </form>
</body>
</html>


Code-Behind (Registration.aspx.cs):

using System;

public partial class Registration : System.Web.UI.Page
{
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        string name = txtName.Text;
        string dob = txtDOB.Text;
        string gender = rdoMale.Checked ? "Male" : "Female";
        string email = txtEmail.Text;
        string contact = txtContact.Text;

        lblResult.Text = "Registration Details:<br/>" +
                         "Name: " + name + "<br/>" +
                         "DOB: " + dob + "<br/>" +
                         "Gender: " + gender + "<br/>" +
                         "Email: " + email + "<br/>" +
                         "Contact No: " + contact;
    }
}


      `},{id:2.2,question:"2. Introduction to Master Page like home, about, contact page",answer:"",codeExample:`
ASP.NET Master Page Code (Site.master):

<!DOCTYPE html>
<html>
<head runat="server">
    <title>Master Page Demo</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="background-color:lightgray; padding:10px;">
            <h2>My Website</h2>
            <a href="Home.aspx">Home</a> |
            <a href="About.aspx">About Us</a> |
            <a href="Contact.aspx">Contact</a>
        </div>
        <asp:ContentPlaceHolder ID="MainContent" runat="server">
        </asp:ContentPlaceHolder>
    </form>
</body>
</html>


ASP.NET Content Page Code (Home.aspx):

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h3>Welcome to the Home Page</h3>
    <p>This is the default content for the home page.</p>
</asp:Content>


      
      
      `},{id:3.3,question:"3. Use of Master Page and Session used session to create login and signup page",answer:"",codeExample:`
  Master Page Navigation (Site.master):

<asp:Menu ID="NavigationMenu" runat="server" Orientation="Horizontal">
    <Items>
        <asp:MenuItem Text="Registration" NavigateUrl="~/Registration.aspx" />
        <asp:MenuItem Text="Login" NavigateUrl="~/Login.aspx" />
    </Items>
</asp:Menu>


Login Button Click Event (Login.aspx.cs):

protected void btnLogin_Click(object sender, EventArgs e)
{
    if(txtUsername.Text == "admin" && txtPassword.Text == "1234")
    {
        Session["User"] = txtUsername.Text;
        Response.Redirect("Welcome.aspx");
    }
    else
    {
        lblMessage.Text = "Invalid login credentials.";
    }
}


Displaying Session User (Welcome.aspx.cs):

protected void Page_Load(object sender, EventArgs e)
{
    if(Session["User"] != null)
    {
        lblWelcome.Text = "Welcome, " + Session["User"].ToString();
    }
    else
    {
        Response.Redirect("Login.aspx");
    }
}


      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],h=z=>{fe(M===z?null:z)};return He.jsxs("div",{className:"app-container",children:[He.jsx("h1",{children:"WAD Interview Questions"}),He.jsx("div",{className:"questions-container",children:I.map(z=>He.jsxs("div",{className:"question-item",children:[He.jsx("button",{className:`question-button ${M===z.id?"active":""}`,onClick:()=>h(z.id),children:z.question}),M===z.id&&He.jsxs("div",{className:"answer-container",children:[He.jsxs("div",{className:"answer",children:[He.jsx("h3",{children:"Answer:"}),He.jsx("p",{children:z.answer})]}),z.codeExample&&He.jsxs("div",{className:"code-example",children:[He.jsx("h3",{children:"Code Example:"}),He.jsx("pre",{children:He.jsx("code",{children:z.codeExample})})]})]})]},z.id))})]})}ah.createRoot(document.getElementById("root")).render(He.jsx(Ed.StrictMode,{children:He.jsx(lh,{})}));
