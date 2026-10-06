(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))h(B);new MutationObserver(B=>{for(const Z of B)if(Z.type==="childList")for(const pe of Z.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&h(pe)}).observe(document,{childList:!0,subtree:!0});function W(B){const Z={};return B.integrity&&(Z.integrity=B.integrity),B.referrerPolicy&&(Z.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?Z.credentials="include":B.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function h(B){if(B.ep)return;B.ep=!0;const Z=W(B);fetch(B.href,Z)}})();var lu={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Ip(){if(mf)return vl;mf=1;var M=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function W(h,B,Z){var pe=null;if(Z!==void 0&&(pe=""+Z),B.key!==void 0&&(pe=""+B.key),"key"in B){Z={};for(var Be in B)Be!=="key"&&(Z[Be]=B[Be])}else Z=B;return B=Z.ref,{$$typeof:M,type:h,key:pe,ref:B!==void 0?B:null,props:Z}}return vl.Fragment=de,vl.jsx=W,vl.jsxs=W,vl}var pf;function Zp(){return pf||(pf=1,lu.exports=Ip()),lu.exports}var He=Zp(),iu={exports:{}},z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function Jp(){if(hf)return z;hf=1;var M=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),re=Symbol.iterator;function Ze(c){return c===null||typeof c!="object"?null:(c=re&&c[re]||c["@@iterator"],typeof c=="function"?c:null)}var Ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oe=Object.assign,Nt={};function Je(c,T,A){this.props=c,this.context=T,this.refs=Nt,this.updater=A||Ve}Je.prototype.isReactComponent={},Je.prototype.setState=function(c,T){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,T,"setState")},Je.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Zt(){}Zt.prototype=Je.prototype;function Re(c,T,A){this.props=c,this.context=T,this.refs=Nt,this.updater=A||Ve}var st=Re.prototype=new Zt;st.constructor=Re,Oe(st,Je.prototype),st.isPureReactComponent=!0;var Tt=Array.isArray;function qe(){}var k={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function Ct(c,T,A){var D=A.ref;return{$$typeof:M,type:c,key:T,ref:D!==void 0?D:null,props:A}}function Ga(c,T){return Ct(c.type,T,c.props)}function Et(c){return typeof c=="object"&&c!==null&&c.$$typeof===M}function Ge(c){var T={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(A){return T[A]})}var ba=/\/+/g;function wt(c,T){return typeof c=="object"&&c!==null&&c.key!=null?Ge(""+c.key):T.toString(36)}function yt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(qe,qe):(c.status="pending",c.then(function(T){c.status==="pending"&&(c.status="fulfilled",c.value=T)},function(T){c.status==="pending"&&(c.status="rejected",c.reason=T)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function S(c,T,A,D,H){var _=typeof c;(_==="undefined"||_==="boolean")&&(c=null);var F=!1;if(c===null)F=!0;else switch(_){case"bigint":case"string":case"number":F=!0;break;case"object":switch(c.$$typeof){case M:case de:F=!0;break;case K:return F=c._init,S(F(c._payload),T,A,D,H)}}if(F)return H=H(c),F=D===""?"."+wt(c,0):D,Tt(H)?(A="",F!=null&&(A=F.replace(ba,"$&/")+"/"),S(H,T,A,"",function(Mn){return Mn})):H!=null&&(Et(H)&&(H=Ga(H,A+(H.key==null||c&&c.key===H.key?"":(""+H.key).replace(ba,"$&/")+"/")+F)),T.push(H)),1;F=0;var Ue=D===""?".":D+":";if(Tt(c))for(var he=0;he<c.length;he++)D=c[he],_=Ue+wt(D,he),F+=S(D,T,A,_,H);else if(he=Ze(c),typeof he=="function")for(c=he.call(c),he=0;!(D=c.next()).done;)D=D.value,_=Ue+wt(D,he++),F+=S(D,T,A,_,H);else if(_==="object"){if(typeof c.then=="function")return S(yt(c),T,A,D,H);throw T=String(c),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return F}function E(c,T,A){if(c==null)return c;var D=[],H=0;return S(c,D,"","",function(_){return T.call(A,_,H++)}),D}function U(c){if(c._status===-1){var T=c._result;T=T(),T.then(function(A){(c._status===0||c._status===-1)&&(c._status=1,c._result=A)},function(A){(c._status===0||c._status===-1)&&(c._status=2,c._result=A)}),c._status===-1&&(c._status=0,c._result=T)}if(c._status===1)return c._result.default;throw c._result}var te=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ie={map:E,forEach:function(c,T,A){E(c,function(){T.apply(this,arguments)},A)},count:function(c){var T=0;return E(c,function(){T++}),T},toArray:function(c){return E(c,function(T){return T})||[]},only:function(c){if(!Et(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return z.Activity=O,z.Children=ie,z.Component=Je,z.Fragment=W,z.Profiler=B,z.PureComponent=Re,z.StrictMode=h,z.Suspense=R,z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,z.__COMPILER_RUNTIME={__proto__:null,c:function(c){return k.H.useMemoCache(c)}},z.cache=function(c){return function(){return c.apply(null,arguments)}},z.cacheSignal=function(){return null},z.cloneElement=function(c,T,A){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var D=Oe({},c.props),H=c.key;if(T!=null)for(_ in T.key!==void 0&&(H=""+T.key),T)!_e.call(T,_)||_==="key"||_==="__self"||_==="__source"||_==="ref"&&T.ref===void 0||(D[_]=T[_]);var _=arguments.length-2;if(_===1)D.children=A;else if(1<_){for(var F=Array(_),Ue=0;Ue<_;Ue++)F[Ue]=arguments[Ue+2];D.children=F}return Ct(c.type,H,D)},z.createContext=function(c){return c={$$typeof:pe,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:Z,_context:c},c},z.createElement=function(c,T,A){var D,H={},_=null;if(T!=null)for(D in T.key!==void 0&&(_=""+T.key),T)_e.call(T,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(H[D]=T[D]);var F=arguments.length-2;if(F===1)H.children=A;else if(1<F){for(var Ue=Array(F),he=0;he<F;he++)Ue[he]=arguments[he+2];H.children=Ue}if(c&&c.defaultProps)for(D in F=c.defaultProps,F)H[D]===void 0&&(H[D]=F[D]);return Ct(c,_,H)},z.createRef=function(){return{current:null}},z.forwardRef=function(c){return{$$typeof:Be,render:c}},z.isValidElement=Et,z.lazy=function(c){return{$$typeof:K,_payload:{_status:-1,_result:c},_init:U}},z.memo=function(c,T){return{$$typeof:C,type:c,compare:T===void 0?null:T}},z.startTransition=function(c){var T=k.T,A={};k.T=A;try{var D=c(),H=k.S;H!==null&&H(A,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(qe,te)}catch(_){te(_)}finally{T!==null&&A.types!==null&&(T.types=A.types),k.T=T}},z.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},z.use=function(c){return k.H.use(c)},z.useActionState=function(c,T,A){return k.H.useActionState(c,T,A)},z.useCallback=function(c,T){return k.H.useCallback(c,T)},z.useContext=function(c){return k.H.useContext(c)},z.useDebugValue=function(){},z.useDeferredValue=function(c,T){return k.H.useDeferredValue(c,T)},z.useEffect=function(c,T){return k.H.useEffect(c,T)},z.useEffectEvent=function(c){return k.H.useEffectEvent(c)},z.useId=function(){return k.H.useId()},z.useImperativeHandle=function(c,T,A){return k.H.useImperativeHandle(c,T,A)},z.useInsertionEffect=function(c,T){return k.H.useInsertionEffect(c,T)},z.useLayoutEffect=function(c,T){return k.H.useLayoutEffect(c,T)},z.useMemo=function(c,T){return k.H.useMemo(c,T)},z.useOptimistic=function(c,T){return k.H.useOptimistic(c,T)},z.useReducer=function(c,T,A){return k.H.useReducer(c,T,A)},z.useRef=function(c){return k.H.useRef(c)},z.useState=function(c){return k.H.useState(c)},z.useSyncExternalStore=function(c,T,A){return k.H.useSyncExternalStore(c,T,A)},z.useTransition=function(){return k.H.useTransition()},z.version="19.2.7",z}var gf;function cu(){return gf||(gf=1,iu.exports=Jp()),iu.exports}var Ef=cu(),su={exports:{}},bl={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Wp(){return yf||(yf=1,(function(M){function de(S,E){var U=S.length;S.push(E);e:for(;0<U;){var te=U-1>>>1,ie=S[te];if(0<B(ie,E))S[te]=E,S[U]=ie,U=te;else break e}}function W(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var E=S[0],U=S.pop();if(U!==E){S[0]=U;e:for(var te=0,ie=S.length,c=ie>>>1;te<c;){var T=2*(te+1)-1,A=S[T],D=T+1,H=S[D];if(0>B(A,U))D<ie&&0>B(H,A)?(S[te]=H,S[D]=U,te=D):(S[te]=A,S[T]=U,te=T);else if(D<ie&&0>B(H,U))S[te]=H,S[D]=U,te=D;else break e}}return E}function B(S,E){var U=S.sortIndex-E.sortIndex;return U!==0?U:S.id-E.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;M.unstable_now=function(){return Z.now()}}else{var pe=Date,Be=pe.now();M.unstable_now=function(){return pe.now()-Be}}var R=[],C=[],K=1,O=null,re=3,Ze=!1,Ve=!1,Oe=!1,Nt=!1,Je=typeof setTimeout=="function"?setTimeout:null,Zt=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function st(S){for(var E=W(C);E!==null;){if(E.callback===null)h(C);else if(E.startTime<=S)h(C),E.sortIndex=E.expirationTime,de(R,E);else break;E=W(C)}}function Tt(S){if(Oe=!1,st(S),!Ve)if(W(R)!==null)Ve=!0,qe||(qe=!0,Ge());else{var E=W(C);E!==null&&yt(Tt,E.startTime-S)}}var qe=!1,k=-1,_e=5,Ct=-1;function Ga(){return Nt?!0:!(M.unstable_now()-Ct<_e)}function Et(){if(Nt=!1,qe){var S=M.unstable_now();Ct=S;var E=!0;try{e:{Ve=!1,Oe&&(Oe=!1,Zt(k),k=-1),Ze=!0;var U=re;try{t:{for(st(S),O=W(R);O!==null&&!(O.expirationTime>S&&Ga());){var te=O.callback;if(typeof te=="function"){O.callback=null,re=O.priorityLevel;var ie=te(O.expirationTime<=S);if(S=M.unstable_now(),typeof ie=="function"){O.callback=ie,st(S),E=!0;break t}O===W(R)&&h(R),st(S)}else h(R);O=W(R)}if(O!==null)E=!0;else{var c=W(C);c!==null&&yt(Tt,c.startTime-S),E=!1}}break e}finally{O=null,re=U,Ze=!1}E=void 0}}finally{E?Ge():qe=!1}}}var Ge;if(typeof Re=="function")Ge=function(){Re(Et)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,wt=ba.port2;ba.port1.onmessage=Et,Ge=function(){wt.postMessage(null)}}else Ge=function(){Je(Et,0)};function yt(S,E){k=Je(function(){S(M.unstable_now())},E)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(S){S.callback=null},M.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<S?Math.floor(1e3/S):5},M.unstable_getCurrentPriorityLevel=function(){return re},M.unstable_next=function(S){switch(re){case 1:case 2:case 3:var E=3;break;default:E=re}var U=re;re=E;try{return S()}finally{re=U}},M.unstable_requestPaint=function(){Nt=!0},M.unstable_runWithPriority=function(S,E){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var U=re;re=S;try{return E()}finally{re=U}},M.unstable_scheduleCallback=function(S,E,U){var te=M.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,S){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=U+ie,S={id:K++,callback:E,priorityLevel:S,startTime:U,expirationTime:ie,sortIndex:-1},U>te?(S.sortIndex=U,de(C,S),W(R)===null&&S===W(C)&&(Oe?(Zt(k),k=-1):Oe=!0,yt(Tt,U-te))):(S.sortIndex=ie,de(R,S),Ve||Ze||(Ve=!0,qe||(qe=!0,Ge()))),S},M.unstable_shouldYield=Ga,M.unstable_wrapCallback=function(S){var E=re;return function(){var U=re;re=E;try{return S.apply(this,arguments)}finally{re=U}}}})(uu)),uu}var Sf;function Kp(){return Sf||(Sf=1,ou.exports=Wp()),ou.exports}var ru={exports:{}},Le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function Fp(){if(vf)return Le;vf=1;var M=cu();function de(R){var C="https://react.dev/errors/"+R;if(1<arguments.length){C+="?args[]="+encodeURIComponent(arguments[1]);for(var K=2;K<arguments.length;K++)C+="&args[]="+encodeURIComponent(arguments[K])}return"Minified React error #"+R+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var h={d:{f:W,r:function(){throw Error(de(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},B=Symbol.for("react.portal");function Z(R,C,K){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:O==null?null:""+O,children:R,containerInfo:C,implementation:K}}var pe=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Be(R,C){if(R==="font")return"";if(typeof C=="string")return C==="use-credentials"?C:""}return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Le.createPortal=function(R,C){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C||C.nodeType!==1&&C.nodeType!==9&&C.nodeType!==11)throw Error(de(299));return Z(R,C,null,K)},Le.flushSync=function(R){var C=pe.T,K=h.p;try{if(pe.T=null,h.p=2,R)return R()}finally{pe.T=C,h.p=K,h.d.f()}},Le.preconnect=function(R,C){typeof R=="string"&&(C?(C=C.crossOrigin,C=typeof C=="string"?C==="use-credentials"?C:"":void 0):C=null,h.d.C(R,C))},Le.prefetchDNS=function(R){typeof R=="string"&&h.d.D(R)},Le.preinit=function(R,C){if(typeof R=="string"&&C&&typeof C.as=="string"){var K=C.as,O=Be(K,C.crossOrigin),re=typeof C.integrity=="string"?C.integrity:void 0,Ze=typeof C.fetchPriority=="string"?C.fetchPriority:void 0;K==="style"?h.d.S(R,typeof C.precedence=="string"?C.precedence:void 0,{crossOrigin:O,integrity:re,fetchPriority:Ze}):K==="script"&&h.d.X(R,{crossOrigin:O,integrity:re,fetchPriority:Ze,nonce:typeof C.nonce=="string"?C.nonce:void 0})}},Le.preinitModule=function(R,C){if(typeof R=="string")if(typeof C=="object"&&C!==null){if(C.as==null||C.as==="script"){var K=Be(C.as,C.crossOrigin);h.d.M(R,{crossOrigin:K,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0})}}else C==null&&h.d.M(R)},Le.preload=function(R,C){if(typeof R=="string"&&typeof C=="object"&&C!==null&&typeof C.as=="string"){var K=C.as,O=Be(K,C.crossOrigin);h.d.L(R,K,{crossOrigin:O,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0,type:typeof C.type=="string"?C.type:void 0,fetchPriority:typeof C.fetchPriority=="string"?C.fetchPriority:void 0,referrerPolicy:typeof C.referrerPolicy=="string"?C.referrerPolicy:void 0,imageSrcSet:typeof C.imageSrcSet=="string"?C.imageSrcSet:void 0,imageSizes:typeof C.imageSizes=="string"?C.imageSizes:void 0,media:typeof C.media=="string"?C.media:void 0})}},Le.preloadModule=function(R,C){if(typeof R=="string")if(C){var K=Be(C.as,C.crossOrigin);h.d.m(R,{as:typeof C.as=="string"&&C.as!=="script"?C.as:void 0,crossOrigin:K,integrity:typeof C.integrity=="string"?C.integrity:void 0})}else h.d.m(R)},Le.requestFormReset=function(R){h.d.r(R)},Le.unstable_batchedUpdates=function(R,C){return R(C)},Le.useFormState=function(R,C,K){return pe.H.useFormState(R,C,K)},Le.useFormStatus=function(){return pe.H.useHostTransitionStatus()},Le.version="19.2.7",Le}var bf;function $p(){if(bf)return ru.exports;bf=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(de){console.error(de)}}return M(),ru.exports=Fp(),ru.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function eh(){if(Tf)return bl;Tf=1;var M=Kp(),de=cu(),W=$p();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Z(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function pe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Be(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(Z(e)!==e)throw Error(h(188))}function C(e){var t=e.alternate;if(!t){if(t=Z(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return R(l),e;if(i===n)return R(l),t;i=i.sibling}throw Error(h(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,o=l.child;o;){if(o===a){s=!0,a=l,n=i;break}if(o===n){s=!0,n=l,a=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===a){s=!0,a=i,n=l;break}if(o===n){s=!0,n=i,a=l;break}o=o.sibling}if(!s)throw Error(h(189))}}if(a.alternate!==n)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function K(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=K(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,re=Symbol.for("react.element"),Ze=Symbol.for("react.transitional.element"),Ve=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Nt=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),Zt=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ct=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case Je:return"Profiler";case Nt:return"StrictMode";case Tt:return"Suspense";case qe:return"SuspenseList";case Ct:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ve:return"Portal";case Re:return e.displayName||"Context";case Zt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var yt=Array.isArray,S=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function c(e){return{current:e}}function T(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function A(e,t){ie++,te[ie]=e.current,e.current=t}var D=c(null),H=c(null),_=c(null),F=c(null);function Ue(e,t){switch(A(_,t),A(H,e),A(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zd(t),e=Hd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(D),A(D,e)}function he(){T(D),T(H),T(_)}function Mn(e){e.memoizedState!==null&&A(F,e);var t=D.current,a=Hd(t,e.type);t!==a&&(A(H,e),A(D,a))}function Tl(e){H.current===e&&(T(D),T(H)),F.current===e&&(T(F),hl._currentValue=U)}var _i,du;function Ta(e){if(_i===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_i=t&&t[1]||"",du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_i+e+du}var Gi=!1;function ji(e,t){if(!e||Gi)return"";Gi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(g){var p=g}Reflect.construct(e,[],b)}else{try{b.call()}catch(g){p=g}e.call(b.prototype)}}else{try{throw Error()}catch(g){p=g}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var u=s.split(`
`),m=o.split(`
`);for(l=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(n===u.length||l===m.length)for(n=u.length-1,l=m.length-1;1<=n&&0<=l&&u[n]!==m[l];)l--;for(;1<=n&&0<=l;n--,l--)if(u[n]!==m[l]){if(n!==1||l!==1)do if(n--,l--,0>l||u[n]!==m[l]){var y=`
`+u[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=l);break}}}finally{Gi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Af(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return ji(e.type,!1);case 11:return ji(e.type.render,!1);case 1:return ji(e.type,!0);case 31:return Ta("Activity");default:return""}}function fu(e){try{var t="",a=null;do t+=Af(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Qi=Object.prototype.hasOwnProperty,Xi=M.unstable_scheduleCallback,ki=M.unstable_cancelCallback,xf=M.unstable_shouldYield,Mf=M.unstable_requestPaint,We=M.unstable_now,Df=M.unstable_getCurrentPriorityLevel,mu=M.unstable_ImmediatePriority,pu=M.unstable_UserBlockingPriority,Cl=M.unstable_NormalPriority,Nf=M.unstable_LowPriority,hu=M.unstable_IdlePriority,wf=M.log,Rf=M.unstable_setDisableYieldValue,Dn=null,Ke=null;function Jt(e){if(typeof wf=="function"&&Rf(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Dn,e)}catch{}}var Fe=Math.clz32?Math.clz32:Of,Lf=Math.log,Bf=Math.LN2;function Of(e){return e>>>=0,e===0?32:31-(Lf(e)/Bf|0)|0}var El=256,Al=262144,xl=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ml(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~i,n!==0?l=Ca(n):(s&=o,s!==0?l=Ca(s):a||(a=o&~e,a!==0&&(l=Ca(a))))):(o=n&~i,o!==0?l=Ca(o):s!==0?l=Ca(s):a||(a=n&~e,a!==0&&(l=Ca(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(){var e=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),e}function Yi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zf(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-Fe(a),b=1<<y;o[y]=0,u[y]=-1;var p=m[y];if(p!==null)for(m[y]=null,y=0;y<p.length;y++){var g=p[y];g!==null&&(g.lane&=-536870913)}a&=~b}n!==0&&yu(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function yu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Fe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Su(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Fe(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function vu(e,t){var a=t&-t;return a=(a&42)!==0?1:Pi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Pi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ii(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bu(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:sf(e.type))}function Tu(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var Wt=Math.random().toString(36).slice(2),xe="__reactFiber$"+Wt,je="__reactProps$"+Wt,ja="__reactContainer$"+Wt,Zi="__reactEvents$"+Wt,Hf="__reactListeners$"+Wt,Vf="__reactHandles$"+Wt,Cu="__reactResources$"+Wt,Rn="__reactMarker$"+Wt;function Ji(e){delete e[xe],delete e[je],delete e[Zi],delete e[Hf],delete e[Vf]}function Qa(e){var t=e[xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ja]||a[xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xd(e);e!==null;){if(a=e[xe])return a;e=Xd(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[xe]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ln(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function ka(e){var t=e[Cu];return t||(t=e[Cu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ee(e){e[Rn]=!0}var Eu=new Set,Au={};function Ea(e,t){Ya(e,t),Ya(e+"Capture",t)}function Ya(e,t){for(Au[e]=t,e=0;e<t.length;e++)Eu.add(t[e])}var qf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xu={},Mu={};function _f(e){return Qi.call(Mu,e)?!0:Qi.call(xu,e)?!1:qf.test(e)?Mu[e]=!0:(xu[e]=!0,!1)}function Dl(e,t,a){if(_f(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Nl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Rt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wi(e){if(!e._valueTracker){var t=Du(e)?"checked":"value";e._valueTracker=Gf(e,t,""+e[t])}}function Nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Du(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jf=/[\n"\\]/g;function ut(e){return e.replace(jf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ki(e,t,a,n,l,i,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Fi(e,s,ot(t)):a!=null?Fi(e,s,ot(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function wu(e,t,a,n,l,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Wi(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Wi(e)}function Fi(e,t,a){t==="number"&&wl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ru(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function Lu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(h(92));if(yt(n)){if(1<n.length)throw Error(h(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Wi(e)}function Ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ou(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Bu(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Bu(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return kf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Lt(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ja=null;function Uu(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ki(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[je]||null;if(!l)throw Error(h(90));Ki(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Nu(n)}break e;case"textarea":Ru(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var as=!1;function zu(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Za!==null||Ja!==null)&&(yi(),Za&&(t=Za,e=Ja,Ja=Za=null,Uu(t),e)))for(t=0;t<e.length;t++)Uu(e[t])}}function Bn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[je]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Bt)try{var On={};Object.defineProperty(On,"passive",{get:function(){ns=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{ns=!1}var Kt=null,ls=null,Ll=null;function Hu(){if(Ll)return Ll;var e,t=ls,a=t.length,n,l="value"in Kt?Kt.value:Kt.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return Ll=l.slice(e,1<n?1-n:void 0)}function Bl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function Vu(){return!1}function Qe(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ol:Vu,this.isPropagationStopped=Vu,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Qe(Aa),Un=O({},Aa,{view:0,detail:0}),Yf=Qe(Un),is,ss,zn,zl=O({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(is=e.screenX-zn.screenX,ss=e.screenY-zn.screenY):ss=is=0,zn=e),is)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),qu=Qe(zl),Pf=O({},zl,{dataTransfer:0}),If=Qe(Pf),Zf=O({},Un,{relatedTarget:0}),os=Qe(Zf),Jf=O({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Wf=Qe(Jf),Kf=O({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ff=Qe(Kf),$f=O({},Aa,{data:0}),_u=Qe($f),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function us(){return nm}var lm=O({},Un,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Qe(lm),sm=O({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=Qe(sm),om=O({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),um=Qe(om),rm=O({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Qe(rm),dm=O({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=Qe(dm),mm=O({},Aa,{newState:0,oldState:0}),pm=Qe(mm),hm=[9,13,27,32],rs=Bt&&"CompositionEvent"in window,Hn=null;Bt&&"documentMode"in document&&(Hn=document.documentMode);var gm=Bt&&"TextEvent"in window&&!Hn,ju=Bt&&(!rs||Hn&&8<Hn&&11>=Hn),Qu=" ",Xu=!1;function ku(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function ym(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(Xu=!0,Qu);case"textInput":return e=t.data,e===Qu&&Xu?null:e;default:return null}}function Sm(e,t){if(Wa)return e==="compositionend"||!rs&&ku(e,t)?(e=Hu(),Ll=ls=Kt=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Iu(e,t,a,n){Za?Ja?Ja.push(n):Ja=[n]:Za=n,t=Ai(t,"onChange"),0<t.length&&(a=new Ul("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Vn=null,qn=null;function bm(e){wd(e,0)}function Hl(e){var t=Ln(e);if(Nu(t))return e}function Zu(e,t){if(e==="change")return t}var Ju=!1;if(Bt){var cs;if(Bt){var ds="oninput"in document;if(!ds){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),ds=typeof Wu.oninput=="function"}cs=ds}else cs=!1;Ju=cs&&(!document.documentMode||9<document.documentMode)}function Ku(){Vn&&(Vn.detachEvent("onpropertychange",Fu),qn=Vn=null)}function Fu(e){if(e.propertyName==="value"&&Hl(qn)){var t=[];Iu(t,qn,e,ts(e)),zu(bm,t)}}function Tm(e,t,a){e==="focusin"?(Ku(),Vn=t,qn=a,Vn.attachEvent("onpropertychange",Fu)):e==="focusout"&&Ku()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(qn)}function Em(e,t){if(e==="click")return Hl(t)}function Am(e,t){if(e==="input"||e==="change")return Hl(t)}function xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:xm;function _n(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Qi.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function er(e,t){var a=$u(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$u(a)}}function tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wl(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mm=Bt&&"documentMode"in document&&11>=document.documentMode,Ka=null,ms=null,Gn=null,ps=!1;function nr(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ps||Ka==null||Ka!==wl(n)||(n=Ka,"selectionStart"in n&&fs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Gn&&_n(Gn,n)||(Gn=n,n=Ai(ms,"onSelect"),0<n.length&&(t=new Ul("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ka)))}function xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},hs={},lr={};Bt&&(lr=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Ma(e){if(hs[e])return hs[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lr)return hs[e]=t[a];return e}var ir=Ma("animationend"),sr=Ma("animationiteration"),or=Ma("animationstart"),Dm=Ma("transitionrun"),Nm=Ma("transitionstart"),wm=Ma("transitioncancel"),ur=Ma("transitionend"),rr=new Map,gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gs.push("scrollEnd");function St(e,t){rr.set(e,t),Ea(t,[e])}var Vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rt=[],$a=0,ys=0;function ql(){for(var e=$a,t=ys=$a=0;t<e;){var a=rt[t];rt[t++]=null;var n=rt[t];rt[t++]=null;var l=rt[t];rt[t++]=null;var i=rt[t];if(rt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&cr(a,l,i)}}function _l(e,t,a,n){rt[$a++]=e,rt[$a++]=t,rt[$a++]=a,rt[$a++]=n,ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ss(e,t,a,n){return _l(e,t,a,n),Gl(e)}function Da(e,t){return _l(e,null,null,t),Gl(e)}function cr(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Fe(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Gl(e){if(50<ul)throw ul=0,No=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function Rm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new Rm(e,t,a,n)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jl(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")vs(e)&&(s=1);else if(typeof e=="string")s=zp(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ct:return e=et(31,a,t,l),e.elementType=Ct,e.lanes=i,e;case Oe:return Na(a.children,l,i,t);case Nt:s=8,l|=24;break;case Je:return e=et(12,a,t,l|2),e.elementType=Je,e.lanes=i,e;case Tt:return e=et(13,a,t,l),e.elementType=Tt,e.lanes=i,e;case qe:return e=et(19,a,t,l),e.elementType=qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:s=10;break e;case Zt:s=9;break e;case st:s=11;break e;case k:s=14;break e;case _e:s=16,n=null;break e}s=29,a=Error(h(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Na(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function bs(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fr(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ts(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mr=new WeakMap;function ct(e,t){if(typeof e=="object"&&e!==null){var a=mr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fu(t)},mr.set(e,t),t)}return{value:e,source:t,stack:fu(t)}}var tn=[],an=0,Ql=null,jn=0,dt=[],ft=0,Ft=null,At=1,xt="";function Ut(e,t){tn[an++]=jn,tn[an++]=Ql,Ql=e,jn=t}function pr(e,t,a){dt[ft++]=At,dt[ft++]=xt,dt[ft++]=Ft,Ft=e;var n=At;e=xt;var l=32-Fe(n)-1;n&=~(1<<l),a+=1;var i=32-Fe(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,At=1<<32-Fe(t)+l|a<<l|n,xt=i+e}else At=1<<i|a<<l|n,xt=e}function Cs(e){e.return!==null&&(Ut(e,1),pr(e,1,0))}function Es(e){for(;e===Ql;)Ql=tn[--an],tn[an]=null,jn=tn[--an],tn[an]=null;for(;e===Ft;)Ft=dt[--ft],dt[ft]=null,xt=dt[--ft],dt[ft]=null,At=dt[--ft],dt[ft]=null}function hr(e,t){dt[ft++]=At,dt[ft++]=xt,dt[ft++]=Ft,At=t.id,xt=t.overflow,Ft=e}var Me=null,oe=null,Y=!1,$t=null,mt=!1,As=Error(h(519));function ea(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qn(ct(t,e)),As}function gr(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[xe]=e,t[je]=n,a){case"dialog":j("cancel",t),j("close",t);break;case"iframe":case"object":case"embed":j("load",t);break;case"video":case"audio":for(a=0;a<cl.length;a++)j(cl[a],t);break;case"source":j("error",t);break;case"img":case"image":case"link":j("error",t),j("load",t);break;case"details":j("toggle",t);break;case"input":j("invalid",t),wu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":j("invalid",t);break;case"textarea":j("invalid",t),Lu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Od(t.textContent,a)?(n.popover!=null&&(j("beforetoggle",t),j("toggle",t)),n.onScroll!=null&&j("scroll",t),n.onScrollEnd!=null&&j("scrollend",t),n.onClick!=null&&(t.onclick=Lt),t=!0):t=!1,t||ea(e,!0)}function yr(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Me=Me.return}}function nn(e){if(e!==Me)return!1;if(!Y)return yr(e),Y=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xo(e.type,e.memoizedProps)),a=!a),a&&oe&&ea(e),yr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));oe=Qd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));oe=Qd(e)}else t===27?(t=oe,pa(e.type)?(e=Zo,Zo=null,oe=e):oe=t):oe=Me?ht(e.stateNode.nextSibling):null;return!0}function wa(){oe=Me=null,Y=!1}function xs(){var e=$t;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),$t=null),e}function Qn(e){$t===null?$t=[e]:$t.push(e)}var Ms=c(null),Ra=null,zt=null;function ta(e,t,a){A(Ms,t._currentValue),t._currentValue=a}function Ht(e){e._currentValue=Ms.current,T(Ms)}function Ds(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ns(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=l;for(var u=0;u<t.length;u++)if(o.context===t[u]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Ds(i.return,a,e),n||(s=null);break e}i=o.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(h(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Ds(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ln(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var o=l.type;$e(l.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(l===F.current){if(s=l.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}l=l.return}e!==null&&Ns(t,e,a,n),t.flags|=262144}function Xl(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Ra=e,zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return Sr(Ra,e)}function kl(e,t){return Ra===null&&La(e),Sr(e,t)}function Sr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},zt===null){if(e===null)throw Error(h(308));zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zt=zt.next=t;return a}var Lm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Bm=M.unstable_scheduleCallback,Om=M.unstable_NormalPriority,Se={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ws(){return{controller:new Lm,data:new Map,refCount:0}}function Xn(e){e.refCount--,e.refCount===0&&Bm(Om,function(){e.controller.abort()})}var kn=null,Rs=0,sn=0,on=null;function Um(e,t){if(kn===null){var a=kn=[];Rs=0,sn=Uo(),on={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Rs++,t.then(vr,vr),t}function vr(){if(--Rs===0&&kn!==null){on!==null&&(on.status="fulfilled");var e=kn;kn=null,sn=0,on=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var br=S.S;S.S=function(e,t){nd=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Um(e,t),br!==null&&br(e,t)};var Ba=c(null);function Ls(){var e=Ba.current;return e!==null?e:se.pooledCache}function Yl(e,t){t===null?A(Ba,Ba.current):A(Ba,t.pool)}function Tr(){var e=Ls();return e===null?null:{parent:Se._currentValue,pool:e}}var un=Error(h(460)),Bs=Error(h(474)),Pl=Error(h(542)),Il={then:function(){}};function Cr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Er(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Lt,Lt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xr(e),e;default:if(typeof t.status=="string")t.then(Lt,Lt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xr(e),e}throw Ua=t,un}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,un):a}}var Ua=null;function Ar(){if(Ua===null)throw Error(h(459));var e=Ua;return Ua=null,e}function xr(e){if(e===un||e===Pl)throw Error(h(483))}var rn=null,Yn=0;function Zl(e){var t=Yn;return Yn+=1,rn===null&&(rn=[]),Er(rn,e,t)}function Pn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Jl(e,t){throw t.$$typeof===re?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mr(e){function t(d,r){if(e){var f=d.deletions;f===null?(d.deletions=[r],d.flags|=16):f.push(r)}}function a(d,r){if(!e)return null;for(;r!==null;)t(d,r),r=r.sibling;return null}function n(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function l(d,r){return d=Ot(d,r),d.index=0,d.sibling=null,d}function i(d,r,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<r?(d.flags|=67108866,r):f):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,r,f,v){return r===null||r.tag!==6?(r=bs(f,d.mode,v),r.return=d,r):(r=l(r,f),r.return=d,r)}function u(d,r,f,v){var w=f.type;return w===Oe?y(d,r,f.props.children,v,f.key):r!==null&&(r.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_e&&Oa(w)===r.type)?(r=l(r,f.props),Pn(r,f),r.return=d,r):(r=jl(f.type,f.key,f.props,null,d.mode,v),Pn(r,f),r.return=d,r)}function m(d,r,f,v){return r===null||r.tag!==4||r.stateNode.containerInfo!==f.containerInfo||r.stateNode.implementation!==f.implementation?(r=Ts(f,d.mode,v),r.return=d,r):(r=l(r,f.children||[]),r.return=d,r)}function y(d,r,f,v,w){return r===null||r.tag!==7?(r=Na(f,d.mode,v,w),r.return=d,r):(r=l(r,f),r.return=d,r)}function b(d,r,f){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=bs(""+r,d.mode,f),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ze:return f=jl(r.type,r.key,r.props,null,d.mode,f),Pn(f,r),f.return=d,f;case Ve:return r=Ts(r,d.mode,f),r.return=d,r;case _e:return r=Oa(r),b(d,r,f)}if(yt(r)||Ge(r))return r=Na(r,d.mode,f,null),r.return=d,r;if(typeof r.then=="function")return b(d,Zl(r),f);if(r.$$typeof===Re)return b(d,kl(d,r),f);Jl(d,r)}return null}function p(d,r,f,v){var w=r!==null?r.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return w!==null?null:o(d,r,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:return f.key===w?u(d,r,f,v):null;case Ve:return f.key===w?m(d,r,f,v):null;case _e:return f=Oa(f),p(d,r,f,v)}if(yt(f)||Ge(f))return w!==null?null:y(d,r,f,v,null);if(typeof f.then=="function")return p(d,r,Zl(f),v);if(f.$$typeof===Re)return p(d,r,kl(d,f),v);Jl(d,f)}return null}function g(d,r,f,v,w){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return d=d.get(f)||null,o(r,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ze:return d=d.get(v.key===null?f:v.key)||null,u(r,d,v,w);case Ve:return d=d.get(v.key===null?f:v.key)||null,m(r,d,v,w);case _e:return v=Oa(v),g(d,r,f,v,w)}if(yt(v)||Ge(v))return d=d.get(f)||null,y(r,d,v,w,null);if(typeof v.then=="function")return g(d,r,f,Zl(v),w);if(v.$$typeof===Re)return g(d,r,f,kl(r,v),w);Jl(r,v)}return null}function x(d,r,f,v){for(var w=null,P=null,N=r,q=r=0,X=null;N!==null&&q<f.length;q++){N.index>q?(X=N,N=null):X=N.sibling;var I=p(d,N,f[q],v);if(I===null){N===null&&(N=X);break}e&&N&&I.alternate===null&&t(d,N),r=i(I,r,q),P===null?w=I:P.sibling=I,P=I,N=X}if(q===f.length)return a(d,N),Y&&Ut(d,q),w;if(N===null){for(;q<f.length;q++)N=b(d,f[q],v),N!==null&&(r=i(N,r,q),P===null?w=N:P.sibling=N,P=N);return Y&&Ut(d,q),w}for(N=n(N);q<f.length;q++)X=g(N,d,q,f[q],v),X!==null&&(e&&X.alternate!==null&&N.delete(X.key===null?q:X.key),r=i(X,r,q),P===null?w=X:P.sibling=X,P=X);return e&&N.forEach(function(va){return t(d,va)}),Y&&Ut(d,q),w}function L(d,r,f,v){if(f==null)throw Error(h(151));for(var w=null,P=null,N=r,q=r=0,X=null,I=f.next();N!==null&&!I.done;q++,I=f.next()){N.index>q?(X=N,N=null):X=N.sibling;var va=p(d,N,I.value,v);if(va===null){N===null&&(N=X);break}e&&N&&va.alternate===null&&t(d,N),r=i(va,r,q),P===null?w=va:P.sibling=va,P=va,N=X}if(I.done)return a(d,N),Y&&Ut(d,q),w;if(N===null){for(;!I.done;q++,I=f.next())I=b(d,I.value,v),I!==null&&(r=i(I,r,q),P===null?w=I:P.sibling=I,P=I);return Y&&Ut(d,q),w}for(N=n(N);!I.done;q++,I=f.next())I=g(N,d,q,I.value,v),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?q:I.key),r=i(I,r,q),P===null?w=I:P.sibling=I,P=I);return e&&N.forEach(function(Pp){return t(d,Pp)}),Y&&Ut(d,q),w}function le(d,r,f,v){if(typeof f=="object"&&f!==null&&f.type===Oe&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:e:{for(var w=f.key;r!==null;){if(r.key===w){if(w=f.type,w===Oe){if(r.tag===7){a(d,r.sibling),v=l(r,f.props.children),v.return=d,d=v;break e}}else if(r.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_e&&Oa(w)===r.type){a(d,r.sibling),v=l(r,f.props),Pn(v,f),v.return=d,d=v;break e}a(d,r);break}else t(d,r);r=r.sibling}f.type===Oe?(v=Na(f.props.children,d.mode,v,f.key),v.return=d,d=v):(v=jl(f.type,f.key,f.props,null,d.mode,v),Pn(v,f),v.return=d,d=v)}return s(d);case Ve:e:{for(w=f.key;r!==null;){if(r.key===w)if(r.tag===4&&r.stateNode.containerInfo===f.containerInfo&&r.stateNode.implementation===f.implementation){a(d,r.sibling),v=l(r,f.children||[]),v.return=d,d=v;break e}else{a(d,r);break}else t(d,r);r=r.sibling}v=Ts(f,d.mode,v),v.return=d,d=v}return s(d);case _e:return f=Oa(f),le(d,r,f,v)}if(yt(f))return x(d,r,f,v);if(Ge(f)){if(w=Ge(f),typeof w!="function")throw Error(h(150));return f=w.call(f),L(d,r,f,v)}if(typeof f.then=="function")return le(d,r,Zl(f),v);if(f.$$typeof===Re)return le(d,r,kl(d,f),v);Jl(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,r!==null&&r.tag===6?(a(d,r.sibling),v=l(r,f),v.return=d,d=v):(a(d,r),v=bs(f,d.mode,v),v.return=d,d=v),s(d)):a(d,r)}return function(d,r,f,v){try{Yn=0;var w=le(d,r,f,v);return rn=null,w}catch(N){if(N===un||N===Pl)throw N;var P=et(29,N,null,d.mode);return P.lanes=v,P.return=d,P}finally{}}}var za=Mr(!0),Dr=Mr(!1),aa=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(J&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Gl(e),cr(e,null,a),t}return _l(e,n,t,a),Gl(e)}function In(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Su(e,a)}}function zs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hs=!1;function Zn(){if(Hs){var e=on;if(e!==null)throw e}}function Jn(e,t,a,n){Hs=!1;var l=e.updateQueue;aa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,m=u.next;u.next=null,s===null?i=m:s.next=m,s=u;var y=e.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==s&&(o===null?y.firstBaseUpdate=m:o.next=m,y.lastBaseUpdate=u))}if(i!==null){var b=l.baseState;s=0,y=m=u=null,o=i;do{var p=o.lane&-536870913,g=p!==o.lane;if(g?(Q&p)===p:(n&p)===p){p!==0&&p===sn&&(Hs=!0),y!==null&&(y=y.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=e,L=o;p=t;var le=a;switch(L.tag){case 1:if(x=L.payload,typeof x=="function"){b=x.call(le,b,p);break e}b=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=L.payload,p=typeof x=="function"?x.call(le,b,p):x,p==null)break e;b=O({},b,p);break e;case 2:aa=!0}}p=o.callback,p!==null&&(e.flags|=64,g&&(e.flags|=8192),g=l.callbacks,g===null?l.callbacks=[p]:g.push(p))}else g={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(m=y=g,u=b):y=y.next=g,s|=p;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);y===null&&(u=b),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=y,i===null&&(l.shared.lanes=0),ra|=s,e.lanes=s,e.memoizedState=b}}function Nr(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function wr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nr(a[e],t)}var cn=c(null),Wl=c(0);function Rr(e,t){e=Yt,A(Wl,e),A(cn,t),Yt=e|t.baseLanes}function Vs(){A(Wl,Yt),A(cn,cn.current)}function qs(){Yt=Wl.current,T(cn),T(Wl)}var tt=c(null),pt=null;function ia(e){var t=e.alternate;A(ge,ge.current&1),A(tt,e),pt===null&&(t===null||cn.current!==null||t.memoizedState!==null)&&(pt=e)}function _s(e){A(ge,ge.current),A(tt,e),pt===null&&(pt=e)}function Lr(e){e.tag===22?(A(ge,ge.current),A(tt,e),pt===null&&(pt=e)):sa()}function sa(){A(ge,ge.current),A(tt,tt.current)}function at(e){T(tt),pt===e&&(pt=null),T(ge)}var ge=c(0);function Kl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Po(a)||Io(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,V=null,ae=null,ve=null,Fl=!1,dn=!1,Ha=!1,$l=0,Wn=0,fn=null,Hm=0;function fe(){throw Error(h(321))}function Gs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function js(e,t,a,n,l,i){return Vt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?pc:ao,Ha=!1,i=a(n,l),Ha=!1,dn&&(i=Or(t,a,n,l)),Br(e),i}function Br(e){S.H=$n;var t=ae!==null&&ae.next!==null;if(Vt=0,ve=ae=V=null,Fl=!1,Wn=0,fn=null,t)throw Error(h(300));e===null||be||(e=e.dependencies,e!==null&&Xl(e)&&(be=!0))}function Or(e,t,a,n){V=e;var l=0;do{if(dn&&(fn=null),Wn=0,dn=!1,25<=l)throw Error(h(301));if(l+=1,ve=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=hc,i=t(a,n)}while(dn);return i}function Vm(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Kn(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(V.flags|=1024),t}function Qs(){var e=$l!==0;return $l=0,e}function Xs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ks(e){if(Fl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fl=!1}Vt=0,ve=ae=V=null,dn=!1,Wn=$l=0,fn=null}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?V.memoizedState=ve=e:ve=ve.next=e,ve}function ye(){if(ae===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ve===null?V.memoizedState:ve.next;if(t!==null)ve=t,ae=e;else{if(e===null)throw V.alternate===null?Error(h(467)):Error(h(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ve===null?V.memoizedState=ve=e:ve=ve.next=e}return ve}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kn(e){var t=Wn;return Wn+=1,fn===null&&(fn=[]),e=Er(fn,e,t),t=V,(ve===null?t.memoizedState:ve.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?pc:ao),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kn(e);if(e.$$typeof===Re)return De(e)}throw Error(h(438,String(e)))}function Ys(e){var t=null,a=V.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=V.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),V.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ga;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=ye();return Ps(t,ae,e)}function Ps(e,t,a){var n=e.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var o=s=null,u=null,m=t,y=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(Q&b)===b:(Vt&b)===b){var p=m.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===sn&&(y=!0);else if((Vt&p)===p){m=m.next,p===sn&&(y=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(o=u=b,s=i):u=u.next=b,V.lanes|=p,ra|=p;b=m.action,Ha&&a(i,b),i=m.hasEagerState?m.eagerState:a(i,b)}else p={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(o=u=p,s=i):u=u.next=p,V.lanes|=b,ra|=b;m=m.next}while(m!==null&&m!==t);if(u===null?s=i:u.next=o,!$e(i,e.memoizedState)&&(be=!0,y&&(a=on,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=u,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Is(e){var t=ye(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);$e(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Ur(e,t,a){var n=V,l=ye(),i=Y;if(i){if(a===void 0)throw Error(h(407));a=a()}else a=t();var s=!$e((ae||l).memoizedState,a);if(s&&(l.memoizedState=a,be=!0),l=l.queue,Ws(Vr.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},Hr.bind(null,n,l,a,t),null),se===null)throw Error(h(349));i||(Vt&127)!==0||zr(n,t,a)}return a}function zr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=V.updateQueue,t===null?(t=ei(),V.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Hr(e,t,a,n){t.value=a,t.getSnapshot=n,qr(t)&&_r(e)}function Vr(e,t,a){return a(function(){qr(t)&&_r(e)})}function qr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function _r(e){var t=Da(e,2);t!==null&&Ie(t,e,2)}function Zs(e){var t=ze();if(typeof e=="function"){var a=e;if(e=a(),Ha){Jt(!0);try{a()}finally{Jt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Gr(e,t,a,n){return e.baseState=a,Ps(e,ae,typeof n=="function"?n:qt)}function qm(e,t,a,n,l){if(ii(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};S.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,jr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function jr(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=S.T,s={};S.T=s;try{var o=a(l,n),u=S.S;u!==null&&u(s,o),Qr(e,t,o)}catch(m){Js(e,t,m)}finally{i!==null&&s.types!==null&&(i.types=s.types),S.T=i}}else try{i=a(l,n),Qr(e,t,i)}catch(m){Js(e,t,m)}}function Qr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Xr(e,t,n)},function(n){return Js(e,t,n)}):Xr(e,t,a)}function Xr(e,t,a){t.status="fulfilled",t.value=a,kr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,jr(e,a)))}function Js(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,kr(t),t=t.next;while(t!==n)}e.action=null}function kr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yr(e,t){return t}function Pr(e,t){if(Y){var a=se.formState;if(a!==null){e:{var n=V;if(Y){if(oe){t:{for(var l=oe,i=mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=ht(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){oe=ht(l.nextSibling),n=l.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=ze(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:t},a.queue=n,a=dc.bind(null,V,n),n.dispatch=a,n=Zs(!1),i=to.bind(null,V,!1,n.queue),n=ze(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=qm.bind(null,V,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ir(e){var t=ye();return Zr(t,ae,e)}function Zr(e,t,a){if(t=Ps(e,t,Yr)[0],e=ai(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Kn(t)}catch(s){throw s===un?Pl:s}else n=t;t=ye();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(V.flags|=2048,mn(9,{destroy:void 0},_m.bind(null,l,a),null)),[n,i,e]}function _m(e,t){e.action=t}function Jr(e){var t=ye(),a=ae;if(a!==null)return Zr(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=V.updateQueue,t===null&&(t=ei(),V.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Wr(){return ye().memoizedState}function ni(e,t,a,n){var l=ze();V.flags|=e,l.memoizedState=mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function li(e,t,a,n){var l=ye();n=n===void 0?null:n;var i=l.memoizedState.inst;ae!==null&&n!==null&&Gs(n,ae.memoizedState.deps)?l.memoizedState=mn(t,i,a,n):(V.flags|=e,l.memoizedState=mn(1|t,i,a,n))}function Kr(e,t){ni(8390656,8,e,t)}function Ws(e,t){li(2048,8,e,t)}function Gm(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=ei(),V.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fr(e){var t=ye().memoizedState;return Gm({ref:t,nextImpl:e}),function(){if((J&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function $r(e,t){return li(4,2,e,t)}function ec(e,t){return li(4,4,e,t)}function tc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,tc.bind(null,t,e),a)}function Ks(){}function nc(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Gs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function lc(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Gs(t,n[1]))return n[0];if(n=e(),Ha){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[n,t],n}function Fs(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=id(),V.lanes|=e,ra|=e,a)}function ic(e,t,a,n){return $e(a,t)?a:cn.current!==null?(e=Fs(e,a,n),$e(e,t)||(be=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(Q&261930)===0?(be=!0,e.memoizedState=a):(e=id(),V.lanes|=e,ra|=e,t)}function sc(e,t,a,n,l){var i=E.p;E.p=i!==0&&8>i?i:8;var s=S.T,o={};S.T=o,to(e,!1,t,a);try{var u=l(),m=S.S;if(m!==null&&m(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=zm(u,n);Fn(e,t,y,it(e))}else Fn(e,t,n,it(e))}catch(b){Fn(e,t,{then:function(){},status:"rejected",reason:b},it())}finally{E.p=i,s!==null&&o.types!==null&&(s.types=o.types),S.T=s}}function jm(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(h(476));var l=oc(e).queue;sc(e,l,t,U,a===null?jm:function(){return uc(e),a(n)})}function oc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:U},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=oc(e);t.next===null&&(t=e.alternate.memoizedState),Fn(e,t.next.queue,{},it())}function eo(){return De(hl)}function rc(){return ye().memoizedState}function cc(){return ye().memoizedState}function Qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var n=la(t,e,a);n!==null&&(Ie(n,t,a),In(n,t,a)),t={cache:ws()},e.payload=t;return}t=t.return}}function Xm(e,t,a){var n=it();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?fc(t,a):(a=Ss(e,t,a,n),a!==null&&(Ie(a,e,n),mc(a,t,n)))}function dc(e,t,a){var n=it();Fn(e,t,a,n)}function Fn(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))fc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,a);if(l.hasEagerState=!0,l.eagerState=o,$e(o,s))return _l(e,t,l,0),se===null&&ql(),!1}catch{}finally{}if(a=Ss(e,t,l,n),a!==null)return Ie(a,e,n),mc(a,t,n),!0}return!1}function to(e,t,a,n){if(n={lane:2,revertLane:Uo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(h(479))}else t=Ss(e,a,n,2),t!==null&&Ie(t,e,2)}function ii(e){var t=e.alternate;return e===V||t!==null&&t===V}function fc(e,t){dn=Fl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Su(e,a)}}var $n={readContext:De,use:ti,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe};$n.useEffectEvent=fe;var pc={readContext:De,use:ti,useCallback:function(e,t){return ze().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Kr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ni(4194308,4,tc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var a=ze();t=t===void 0?null:t;var n=e();if(Ha){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ze();if(a!==void 0){var l=a(t);if(Ha){Jt(!0);try{a(t)}finally{Jt(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Xm.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Zs(e);var t=e.queue,a=dc.bind(null,V,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ks,useDeferredValue:function(e,t){var a=ze();return Fs(a,e,t)},useTransition:function(){var e=Zs(!1);return e=sc.bind(null,V,e.queue,!0,!1),ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=V,l=ze();if(Y){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),se===null)throw Error(h(349));(Q&127)!==0||zr(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Kr(Vr.bind(null,n,i,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},Hr.bind(null,n,i,a,t),null),a},useId:function(){var e=ze(),t=se.identifierPrefix;if(Y){var a=xt,n=At;a=(n&~(1<<32-Fe(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$l++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Hm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Pr,useActionState:Pr,useOptimistic:function(e){var t=ze();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,V,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ys,useCacheRefresh:function(){return ze().memoizedState=Qm.bind(null,V)},useEffectEvent:function(e){var t=ze(),a={impl:e};return t.memoizedState=a,function(){if((J&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},ao={readContext:De,use:ti,useCallback:nc,useContext:De,useEffect:Ws,useImperativeHandle:ac,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:lc,useReducer:ai,useRef:Wr,useState:function(){return ai(qt)},useDebugValue:Ks,useDeferredValue:function(e,t){var a=ye();return ic(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(qt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Kn(e),t]},useSyncExternalStore:Ur,useId:rc,useHostTransitionStatus:eo,useFormState:Ir,useActionState:Ir,useOptimistic:function(e,t){var a=ye();return Gr(a,ae,e,t)},useMemoCache:Ys,useCacheRefresh:cc};ao.useEffectEvent=Fr;var hc={readContext:De,use:ti,useCallback:nc,useContext:De,useEffect:Ws,useImperativeHandle:ac,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:lc,useReducer:Is,useRef:Wr,useState:function(){return Is(qt)},useDebugValue:Ks,useDeferredValue:function(e,t){var a=ye();return ae===null?Fs(a,e,t):ic(a,ae.memoizedState,e,t)},useTransition:function(){var e=Is(qt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Kn(e),t]},useSyncExternalStore:Ur,useId:rc,useHostTransitionStatus:eo,useFormState:Jr,useActionState:Jr,useOptimistic:function(e,t){var a=ye();return ae!==null?Gr(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ys,useCacheRefresh:cc};hc.useEffectEvent=Fr;function no(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Ie(t,e,n),In(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Ie(t,e,n),In(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(Ie(t,e,a),In(t,e,a))}};function gc(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!_n(a,n)||!_n(l,i):!0}function yc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Sc(e){Vl(e)}function vc(e){console.error(e)}function bc(e){Vl(e)}function si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Tc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function io(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){si(e,t)},a}function Cc(e){return e=na(e),e.tag=3,e}function Ec(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Tc(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Tc(t,a,n),typeof l!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function km(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,l,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?Si():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Il?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Lo(e,n,l)),!1;case 22:return a.flags|=65536,n===Il?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Lo(e,n,l)),!1}throw Error(h(435,a.tag))}return Lo(e,n,l),Si(),!1}if(Y)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==As&&(e=Error(h(422),{cause:n}),Qn(ct(e,a)))):(n!==As&&(t=Error(h(423),{cause:n}),Qn(ct(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ct(n,a),l=io(e.stateNode,n,l),zs(e,l),me!==4&&(me=2)),!1;var i=Error(h(520),{cause:n});if(i=ct(i,a),ol===null?ol=[i]:ol.push(i),me!==4&&(me=2),t===null)return!0;n=ct(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=io(a.stateNode,n,e),zs(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ca===null||!ca.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Cc(l),Ec(l,e,a,n),zs(a,l),!1}a=a.return}while(a!==null);return!1}var so=Error(h(461)),be=!1;function Ne(e,t,a,n){t.child=e===null?Dr(t,null,a,n):za(t,e.child,a,n)}function Ac(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}else s=n;return La(t),n=js(e,t,a,s,i,l),o=Qs(),e!==null&&!be?(Xs(e,t,l),_t(e,t,l)):(Y&&o&&Cs(t),t.flags|=1,Ne(e,t,n,l),t.child)}function xc(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!vs(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Mc(e,t,i,n,l)):(e=jl(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ho(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:_n,a(s,n)&&e.ref===t.ref)return _t(e,t,l)}return t.flags|=1,e=Ot(i,n),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(_n(i,n)&&e.ref===t.ref)if(be=!1,t.pendingProps=n=i,ho(e,l))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,_t(e,t,l)}return oo(e,t,a,n,l)}function Dc(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Nc(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(t,i!==null?i.cachePool:null),i!==null?Rr(t,i):Vs(),Lr(t);else return n=t.lanes=536870912,Nc(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(Yl(t,i.cachePool),Rr(t,i),sa(),t.memoizedState=null):(e!==null&&Yl(t,null),Vs(),sa());return Ne(e,t,l,a),t.child}function el(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nc(e,t,a,n,l){var i=Ls();return i=i===null?null:{parent:Se._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Yl(t,null),Vs(),Lr(t),e!==null&&ln(e,t,n,!0),t.childLanes=l,null}function oi(e,t){return t=ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wc(e,t,a){return za(t,e.child,null,a),e=oi(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Ym(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Y){if(n.mode==="hidden")return e=oi(t,n),t.lanes=536870912,el(null,e);if(_s(t),(e=oe)?(e=jd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:At,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=fr(e),a.return=t,t.child=a,Me=t,oe=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return oi(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(_s(t),l)if(t.flags&256)t.flags&=-257,t=wc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(be||ln(e,t,a,!1),l=(a&e.childLanes)!==0,be||l){if(n=se,n!==null&&(s=vu(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Da(e,s),Ie(n,e,s),so;Si(),t=wc(e,t,a)}else e=i.treeContext,oe=ht(s.nextSibling),Me=t,Y=!0,$t=null,mt=!1,e!==null&&hr(t,e),t=oi(t,n),t.flags|=4096;return t}return e=Ot(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ui(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,n,l){return La(t),a=js(e,t,a,n,void 0,l),n=Qs(),e!==null&&!be?(Xs(e,t,l),_t(e,t,l)):(Y&&n&&Cs(t),t.flags|=1,Ne(e,t,a,l),t.child)}function Rc(e,t,a,n,l,i){return La(t),t.updateQueue=null,a=Or(t,n,a,l),Br(e),n=Qs(),e!==null&&!be?(Xs(e,t,i),_t(e,t,i)):(Y&&n&&Cs(t),t.flags|=1,Ne(e,t,a,i),t.child)}function Lc(e,t,a,n,l){if(La(t),t.stateNode===null){var i=en,s=a.contextType;typeof s=="object"&&s!==null&&(i=De(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Os(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?De(s):en,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(no(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&lo.enqueueReplaceState(i,i.state,null),Jn(t,n,i,l),Zn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,u=Va(a,o);i.props=u;var m=i.context,y=a.contextType;s=en,typeof y=="object"&&y!==null&&(s=De(y));var b=a.getDerivedStateFromProps;y=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||m!==s)&&yc(t,i,n,s),aa=!1;var p=t.memoizedState;i.state=p,Jn(t,n,i,l),Zn(),m=t.memoizedState,o||p!==m||aa?(typeof b=="function"&&(no(t,a,b,n),m=t.memoizedState),(u=aa||gc(t,a,u,n,p,m,s))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),i.props=n,i.state=m,i.context=s,n=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Us(e,t),s=t.memoizedProps,y=Va(a,s),i.props=y,b=t.pendingProps,p=i.context,m=a.contextType,u=en,typeof m=="object"&&m!==null&&(u=De(m)),o=a.getDerivedStateFromProps,(m=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||p!==u)&&yc(t,i,n,u),aa=!1,p=t.memoizedState,i.state=p,Jn(t,n,i,l),Zn();var g=t.memoizedState;s!==b||p!==g||aa||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof o=="function"&&(no(t,a,o,n),g=t.memoizedState),(y=aa||gc(t,a,y,n,p,g,u)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),i.props=n,i.state=g,i.context=u,n=y):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,ui(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=za(t,e.child,null,l),t.child=za(t,null,a,l)):Ne(e,t,a,l),t.memoizedState=i.state,e=t.child):e=_t(e,t,l),e}function Bc(e,t,a,n){return wa(),t.flags|=256,Ne(e,t,a,n),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ro(e){return{baseLanes:e,cachePool:Tr()}}function co(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=lt),e}function Oc(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Y){if(l?ia(t):sa(),(e=oe)?(e=jd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:At,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=fr(e),a.return=t,t.child=a,Me=t,oe=null)):e=null,e===null)throw ea(t);return Io(e)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,l?(sa(),l=t.mode,o=ri({mode:"hidden",children:o},l),n=Na(n,l,a,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=ro(a),n.childLanes=co(e,s,a),t.memoizedState=uo,el(null,n)):(ia(t),fo(t,o))}var u=e.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=mo(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),o=n.fallback,l=t.mode,n=ri({mode:"visible",children:n.children},l),o=Na(o,l,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,za(t,e.child,null,a),n=t.child,n.memoizedState=ro(a),n.childLanes=co(e,s,a),t.memoizedState=uo,t=el(null,n));else if(ia(t),Io(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var m=s.dgst;s=m,n=Error(h(419)),n.stack="",n.digest=s,Qn({value:n,source:null,stack:null}),t=mo(e,t,a)}else if(be||ln(e,t,a,!1),s=(a&e.childLanes)!==0,be||s){if(s=se,s!==null&&(n=vu(s,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,Da(e,n),Ie(s,e,n),so;Po(o)||Si(),t=mo(e,t,a)}else Po(o)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,oe=ht(o.nextSibling),Me=t,Y=!0,$t=null,mt=!1,e!==null&&hr(t,e),t=fo(t,n.children),t.flags|=4096);return t}return l?(sa(),o=n.fallback,l=t.mode,u=e.child,m=u.sibling,n=Ot(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,m!==null?o=Ot(m,o):(o=Na(o,l,a,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,el(null,n),n=t.child,o=e.child.memoizedState,o===null?o=ro(a):(l=o.cachePool,l!==null?(u=Se._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Tr(),o={baseLanes:o.baseLanes|a,cachePool:l}),n.memoizedState=o,n.childLanes=co(e,s,a),t.memoizedState=uo,el(e.child,n)):(ia(t),a=e.child,e=a.sibling,a=Ot(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fo(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,a){return za(t,e.child,null,a),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ds(e.return,t,a)}function po(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function zc(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=ge.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,A(ge,s),Ne(e,t,n,a),n=Y?jn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,a,t);else if(e.tag===19)Uc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Kl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),po(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}po(t,!0,a,null,i,n);break;case"together":po(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function _t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ra|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=Ot(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ot(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function Pm(e,t,a){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),ta(t,Se,e.memoizedState.cache),wa();break;case 27:case 5:Mn(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_s(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Oc(e,t,a):(ia(t),e=_t(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return zc(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(ge,ge.current),n)break;return null;case 22:return t.lanes=0,Dc(e,t,a,t.pendingProps);case 24:ta(t,Se,e.memoizedState.cache)}return _t(e,t,a)}function Hc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!ho(e,a)&&(t.flags&128)===0)return be=!1,Pm(e,t,a);be=(e.flags&131072)!==0}else be=!1,Y&&(t.flags&1048576)!==0&&pr(t,jn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")vs(e)?(n=Va(e,n),t.tag=1,t=Lc(null,t,e,n,a)):(t.tag=0,t=oo(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===st){t.tag=11,t=Ac(null,t,e,n,a);break e}else if(l===k){t.tag=14,t=xc(null,t,e,n,a);break e}}throw t=wt(e)||e,Error(h(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Va(n,t.pendingProps),Lc(e,t,n,l,a);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(h(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,Us(e,t),Jn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,Se,n),n!==i.cache&&Ns(t,[Se],a,!0),Zn(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bc(e,t,n,a);break e}else if(n!==l){l=ct(Error(h(424)),t),Qn(l),t=Bc(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=ht(e.firstChild),Me=t,Y=!0,$t=null,mt=!0,a=Dr(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),n===l){t=_t(e,t,a);break e}Ne(e,t,n,a)}t=t.child}return t;case 26:return ui(e,t),e===null?(a=Id(t.type,null,t.pendingProps,null))?t.memoizedState=a:Y||(a=t.type,e=t.pendingProps,n=xi(_.current).createElement(a),n[xe]=t,n[je]=e,we(n,a,e),Ee(n),t.stateNode=n):t.memoizedState=Id(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mn(t),e===null&&Y&&(n=t.stateNode=kd(t.type,t.pendingProps,_.current),Me=t,mt=!0,l=oe,pa(t.type)?(Zo=l,oe=ht(n.firstChild)):oe=l),Ne(e,t,t.pendingProps.children,a),ui(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Y&&((l=n=oe)&&(n=Cp(n,t.type,t.pendingProps,mt),n!==null?(t.stateNode=n,Me=t,oe=ht(n.firstChild),mt=!1,l=!0):l=!1),l||ea(t)),Mn(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,Xo(l,i)?n=null:s!==null&&Xo(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=js(e,t,Vm,null,null,a),hl._currentValue=l),ui(e,t),Ne(e,t,n,a),t.child;case 6:return e===null&&Y&&((e=a=oe)&&(a=Ep(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Me=t,oe=null,e=!0):e=!1),e||ea(t)),null;case 13:return Oc(e,t,a);case 4:return Ue(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=za(t,null,n,a):Ne(e,t,n,a),t.child;case 11:return Ac(e,t,t.type,t.pendingProps,a);case 7:return Ne(e,t,t.pendingProps,a),t.child;case 8:return Ne(e,t,t.pendingProps.children,a),t.child;case 12:return Ne(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Ne(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,La(t),l=De(l),n=n(l),t.flags|=1,Ne(e,t,n,a),t.child;case 14:return xc(e,t,t.type,t.pendingProps,a);case 15:return Mc(e,t,t.type,t.pendingProps,a);case 19:return zc(e,t,a);case 31:return Ym(e,t,a);case 22:return Dc(e,t,a,t.pendingProps);case 24:return La(t),n=De(Se),e===null?(l=Ls(),l===null&&(l=se,i=ws(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Os(t),ta(t,Se,l)):((e.lanes&a)!==0&&(Us(e,t),Jn(t,null,null,a),Zn()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,Se,n)):(n=i.cache,ta(t,Se,n),n!==l.cache&&Ns(t,[Se],a,!0))),Ne(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Gt(e){e.flags|=4}function go(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rd())e.flags|=8192;else throw Ua=Il,Bs}else e.flags&=-16777217}function Vc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fd(t))if(rd())e.flags|=8192;else throw Ua=Il,Bs}function ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gu():536870912,e.lanes|=t,yn|=t)}function tl(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Im(e,t,a){var n=t.pendingProps;switch(Es(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ht(Se),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xs())),ue(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Gt(t),i!==null?(ue(t),Vc(t,i)):(ue(t),go(t,l,null,n,a))):i?i!==e.memoizedState?(Gt(t),ue(t),Vc(t,i)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Gt(t),ue(t),go(t,l,e,n,a)),null;case 27:if(Tl(t),a=_.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return ue(t),null}e=D.current,nn(t)?gr(t):(e=kd(l,n,a),t.stateNode=e,Gt(t))}return ue(t),null;case 5:if(Tl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return ue(t),null}if(i=D.current,nn(t))gr(t);else{var s=xi(_.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[xe]=t,i[je]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(we(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Gt(t)}}return ue(t),go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(e=_.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Me,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[xe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Od(e.nodeValue,a)),e||ea(t,!0)}else e=xi(e).createTextNode(n),e[xe]=t,t.stateNode=e}return ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[xe]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else a=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[xe]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),l=!1}else l=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ci(t,t.updateQueue),ue(t),null);case 4:return he(),e===null&&qo(t.stateNode.containerInfo),ue(t),null;case 10:return Ht(t.type),ue(t),null;case 19:if(T(ge),n=t.memoizedState,n===null)return ue(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)tl(n,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Kl(e),i!==null){for(t.flags|=128,tl(n,!1),e=i.updateQueue,t.updateQueue=e,ci(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dr(a,e),a=a.sibling;return A(ge,ge.current&1|2),Y&&Ut(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&We()>hi&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Kl(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ci(t,e),tl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Y)return ue(t),null}else 2*We()-n.renderingStartTime>hi&&a!==536870912&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=We(),e.sibling=null,a=ge.current,A(ge,l?a&1|2:a&1),Y&&Ut(t,n.treeForkCount),e):(ue(t),null);case 22:case 23:return at(t),qs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),a=t.updateQueue,a!==null&&ci(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&T(Ba),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ht(Se),ue(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Zm(e,t){switch(Es(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ht(Se),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tl(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(ge),null;case 4:return he(),null;case 10:return Ht(t.type),null;case 22:case 23:return at(t),qs(),e!==null&&T(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ht(Se),null;case 25:return null;default:return null}}function qc(e,t){switch(Es(t),t.tag){case 3:Ht(Se),he();break;case 26:case 27:case 5:Tl(t);break;case 4:he();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:T(ge);break;case 10:Ht(t.type);break;case 22:case 23:at(t),qs(),e!==null&&T(Ba);break;case 24:Ht(Se)}}function al(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(o){ee(t,t.return,o)}}function oa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,l=t;var u=a,m=o;try{m()}catch(y){ee(l,u,y)}}}n=n.next}while(n!==i)}}catch(y){ee(t,t.return,y)}}function _c(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{wr(t,a)}catch(n){ee(e,e.return,n)}}}function Gc(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function nl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ee(e,t,l)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ee(e,t,l)}else a.current=null}function jc(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ee(e,e.return,l)}}function yo(e,t,a){try{var n=e.stateNode;gp(n,e.type,a,t),n[je]=t}catch(l){ee(e,e.return,l)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function So(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Lt));else if(n!==4&&(n===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vo(e,t,a),e=e.sibling;e!==null;)vo(e,t,a),e=e.sibling}function di(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(di(e,t,a),e=e.sibling;e!==null;)di(e,t,a),e=e.sibling}function Xc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);we(t,n,a),t[xe]=e,t[je]=a}catch(i){ee(e,e.return,i)}}var jt=!1,Te=!1,bo=!1,kc=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Jm(e,t){if(e=e.containerInfo,jo=Bi,e=ar(e),fs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,o=-1,u=-1,m=0,y=0,b=e,p=null;t:for(;;){for(var g;b!==a||l!==0&&b.nodeType!==3||(o=s+l),b!==i||n!==0&&b.nodeType!==3||(u=s+n),b.nodeType===3&&(s+=b.nodeValue.length),(g=b.firstChild)!==null;)p=b,b=g;for(;;){if(b===e)break t;if(p===a&&++m===l&&(o=s),p===i&&++y===n&&(u=s),(g=b.nextSibling)!==null)break;b=p,p=b.parentNode}b=g}a=o===-1||u===-1?null:{start:o,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qo={focusedElem:e,selectionRange:a},Bi=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var x=Va(a.type,l);e=n.getSnapshotBeforeUpdate(x,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(L){ee(a,a.return,L)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Yo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function Yc(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),n&4&&al(5,a);break;case 1:if(Xt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var l=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&_c(a),n&512&&nl(a,a.return);break;case 3:if(Xt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{wr(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Xc(a);case 26:case 5:Xt(e,a),t===null&&n&4&&jc(a),n&512&&nl(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),n&4&&Zc(e,a);break;case 13:Xt(e,a),n&4&&Jc(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lp.bind(null,a),Ap(e,a))));break;case 22:if(n=a.memoizedState!==null||jt,!n){t=t!==null&&t.memoizedState!==null||Te,l=jt;var i=Te;jt=n,(Te=t)&&!i?kt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),jt=l,Te=i}break;case 30:break;default:Xt(e,a)}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ji(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Xe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)Ic(e,t,a),a=a.sibling}function Ic(e,t,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Dn,a)}catch{}switch(a.tag){case 26:Te||Mt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Mt(a,t);var n=ce,l=Xe;pa(a.type)&&(ce=a.stateNode,Xe=!1),Qt(e,t,a),fl(a.stateNode),ce=n,Xe=l;break;case 5:Te||Mt(a,t);case 6:if(n=ce,l=Xe,ce=null,Qt(e,t,a),ce=n,Xe=l,ce!==null)if(Xe)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{ce.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:ce!==null&&(Xe?(e=ce,_d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xn(e)):_d(ce,a.stateNode));break;case 4:n=ce,l=Xe,ce=a.stateNode.containerInfo,Xe=!0,Qt(e,t,a),ce=n,Xe=l;break;case 0:case 11:case 14:case 15:oa(2,a,t),Te||oa(4,a,t),Qt(e,t,a);break;case 1:Te||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Gc(a,t,n)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Te=(n=Te)||a.memoizedState!==null,Qt(e,t,a),Te=n;break;default:Qt(e,t,a)}}function Zc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xn(e)}catch(a){ee(t,t.return,a)}}}function Jc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xn(e)}catch(a){ee(t,t.return,a)}}function Wm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kc),t;default:throw Error(h(435,e.tag))}}function fi(e,t){var a=Wm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=ip.bind(null,e,n);n.then(l,l)}})}function ke(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(pa(o.type)){ce=o.stateNode,Xe=!1;break e}break;case 5:ce=o.stateNode,Xe=!1;break e;case 3:case 4:ce=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(ce===null)throw Error(h(160));Ic(i,s,l),ce=null,Xe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}var vt=null;function Wc(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ke(t,e),Ye(e),n&4&&(oa(3,e,e.return),al(3,e),oa(5,e,e.return));break;case 1:ke(t,e),Ye(e),n&512&&(Te||a===null||Mt(a,a.return)),n&64&&jt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=vt;if(ke(t,e),Ye(e),n&512&&(Te||a===null||Mt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Rn]||i[xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),we(i,n,a),i[xe]=e,Ee(i),n=i;break e;case"link":var s=Wd("link","href",l).get(n+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(i=s[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}i=l.createElement(n),we(i,n,a),l.head.appendChild(i);break;case"meta":if(s=Wd("meta","content",l).get(n+(a.content||""))){for(o=0;o<s.length;o++)if(i=s[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}i=l.createElement(n),we(i,n,a),l.head.appendChild(i);break;default:throw Error(h(468,n))}i[xe]=e,Ee(i),n=i}e.stateNode=n}else Kd(l,e.type,e.stateNode);else e.stateNode=Jd(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Kd(l,e.type,e.stateNode):Jd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:ke(t,e),Ye(e),n&512&&(Te||a===null||Mt(a,a.return)),a!==null&&n&4&&yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ke(t,e),Ye(e),n&512&&(Te||a===null||Mt(a,a.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(x){ee(e,e.return,x)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,yo(e,l,a!==null?a.memoizedProps:l)),n&1024&&(bo=!0);break;case 6:if(ke(t,e),Ye(e),n&4){if(e.stateNode===null)throw Error(h(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(x){ee(e,e.return,x)}}break;case 3:if(Ni=null,l=vt,vt=Mi(t.containerInfo),ke(t,e),vt=l,Ye(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(t.containerInfo)}catch(x){ee(e,e.return,x)}bo&&(bo=!1,Kc(e));break;case 4:n=vt,vt=Mi(e.stateNode.containerInfo),ke(t,e),Ye(e),vt=n;break;case 12:ke(t,e),Ye(e);break;case 31:ke(t,e),Ye(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 13:ke(t,e),Ye(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pi=We()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 22:l=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,m=jt,y=Te;if(jt=m||l,Te=y||u,ke(t,e),Te=y,jt=m,Ye(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||u||jt||Te||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(i=u.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=u.stateNode;var b=u.memoizedProps.style,p=b!=null&&b.hasOwnProperty("display")?b.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(x){ee(u,u.return,x)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(x){ee(u,u.return,x)}}}else if(t.tag===18){if(a===null){u=t;try{var g=u.stateNode;l?Gd(g,!0):Gd(u.stateNode,!1)}catch(x){ee(u,u.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,fi(e,a))));break;case 19:ke(t,e),Ye(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 30:break;case 21:break;default:ke(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Qc(n)){a=n;break}n=n.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var l=a.stateNode,i=So(e);di(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ia(s,""),a.flags&=-33);var o=So(e);di(e,o,s);break;case 3:case 4:var u=a.stateNode.containerInfo,m=So(e);vo(e,m,u);break;default:throw Error(h(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Kc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yc(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),qa(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gc(t,t.return,a),qa(t);break;case 27:fl(t.stateNode);case 26:case 5:Mt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:kt(l,i,a),al(4,i);break;case 1:if(kt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){ee(n,n.return,m)}if(n=i,l=n.updateQueue,l!==null){var o=n.stateNode;try{var u=l.shared.hiddenCallbacks;if(u!==null)for(l.shared.hiddenCallbacks=null,l=0;l<u.length;l++)Nr(u[l],o)}catch(m){ee(n,n.return,m)}}a&&s&64&&_c(i),nl(i,i.return);break;case 27:Xc(i);case 26:case 5:kt(l,i,a),a&&n===null&&s&4&&jc(i),nl(i,i.return);break;case 12:kt(l,i,a);break;case 31:kt(l,i,a),a&&s&4&&Zc(l,i);break;case 13:kt(l,i,a),a&&s&4&&Jc(l,i);break;case 22:i.memoizedState===null&&kt(l,i,a),nl(i,i.return);break;case 30:break;default:kt(l,i,a)}t=t.sibling}}function To(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xn(a))}function Co(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e))}function bt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fc(e,t,a,n),t=t.sibling}function Fc(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,n),l&2048&&al(9,t);break;case 1:bt(e,t,a,n);break;case 3:bt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e)));break;case 12:if(l&2048){bt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,o=i.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ee(t,t.return,u)}}else bt(e,t,a,n);break;case 31:bt(e,t,a,n);break;case 13:bt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?bt(e,t,a,n):ll(e,t):i._visibility&2?bt(e,t,a,n):(i._visibility|=2,pn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&To(s,t);break;case 24:bt(e,t,a,n),l&2048&&Co(t.alternate,t);break;default:bt(e,t,a,n)}}function pn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,o=a,u=n,m=s.flags;switch(s.tag){case 0:case 11:case 15:pn(i,s,o,u,l),al(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?pn(i,s,o,u,l):ll(i,s):(y._visibility|=2,pn(i,s,o,u,l)),l&&m&2048&&To(s.alternate,s);break;case 24:pn(i,s,o,u,l),l&&m&2048&&Co(s.alternate,s);break;default:pn(i,s,o,u,l)}t=t.sibling}}function ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ll(a,n),l&2048&&To(n.alternate,n);break;case 24:ll(a,n),l&2048&&Co(n.alternate,n);break;default:ll(a,n)}t=t.sibling}}var il=8192;function hn(e,t,a){if(e.subtreeFlags&il)for(e=e.child;e!==null;)$c(e,t,a),e=e.sibling}function $c(e,t,a){switch(e.tag){case 26:hn(e,t,a),e.flags&il&&e.memoizedState!==null&&Hp(a,vt,e.memoizedState,e.memoizedProps);break;case 5:hn(e,t,a);break;case 3:case 4:var n=vt;vt=Mi(e.stateNode.containerInfo),hn(e,t,a),vt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,hn(e,t,a),il=n):hn(e,t,a));break;default:hn(e,t,a)}}function ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ae=n,ad(n,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&oa(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mi(e)):sl(e);break;default:sl(e)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ae=n,ad(n,e)}ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mi(t));break;default:mi(t)}e=e.sibling}}function ad(e,t){for(;Ae!==null;){var a=Ae;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Xn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ae=n;else e:for(a=e;Ae!==null;){n=Ae;var l=n.sibling,i=n.return;if(Pc(n),n===a){Ae=null;break e}if(l!==null){l.return=i,Ae=l;break e}Ae=i}}}var Km={getCacheForType:function(e){var t=De(Se),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return De(Se).controller.signal}},Fm=typeof WeakMap=="function"?WeakMap:Map,J=0,se=null,G=null,Q=0,$=0,nt=null,ua=!1,gn=!1,Eo=!1,Yt=0,me=0,ra=0,_a=0,Ao=0,lt=0,yn=0,ol=null,Pe=null,xo=!1,pi=0,nd=0,hi=1/0,gi=null,ca=null,Ce=0,da=null,Sn=null,Pt=0,Mo=0,Do=null,ld=null,ul=0,No=null;function it(){return(J&2)!==0&&Q!==0?Q&-Q:S.T!==null?Uo():bu()}function id(){if(lt===0)if((Q&536870912)===0||Y){var e=Al;Al<<=1,(Al&3932160)===0&&(Al=262144),lt=e}else lt=536870912;return e=tt.current,e!==null&&(e.flags|=32),lt}function Ie(e,t,a){(e===se&&($===2||$===9)||e.cancelPendingCommit!==null)&&(vn(e,0),fa(e,Q,lt,!1)),wn(e,a),((J&2)===0||e!==se)&&(e===se&&((J&2)===0&&(_a|=a),me===4&&fa(e,Q,lt,!1)),Dt(e))}function sd(e,t,a){if((J&6)!==0)throw Error(h(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Nn(e,t),l=n?tp(e,t):Ro(e,t,!0),i=n;do{if(l===0){gn&&!n&&fa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$m(a)){l=Ro(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;l=ol;var u=o.current.memoizedState.isDehydrated;if(u&&(vn(o,s).flags|=256),s=Ro(o,s,!1),s!==2){if(Eo&&!u){o.errorRecoveryDisabledLanes|=i,_a|=i,l=4;break e}i=Pe,Pe=l,i!==null&&(Pe===null?Pe=i:Pe.push.apply(Pe,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){vn(e,0),fa(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:fa(n,t,lt,!ua);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(l=pi+300-We(),10<l)){if(fa(n,t,lt,!ua),Ml(n,0,!0)!==0)break e;Pt=t,n.timeoutHandle=Vd(od.bind(null,n,a,Pe,gi,xo,t,lt,_a,yn,ua,i,"Throttled",-0,0),l);break e}od(n,a,Pe,gi,xo,t,lt,_a,yn,ua,i,null,-0,0)}}break}while(!0);Dt(e)}function od(e,t,a,n,l,i,s,o,u,m,y,b,p,g){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Lt},$c(t,i,b);var x=(i&62914560)===i?pi-We():(i&4194048)===i?nd-We():0;if(x=Vp(b,x),x!==null){Pt=i,e.cancelPendingCommit=x(hd.bind(null,e,t,i,a,n,l,s,o,u,y,b,null,p,g)),fa(e,i,s,!m);return}}hd(e,t,i,a,n,l,s,o,u)}function $m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!$e(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,a,n){t&=~Ao,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-Fe(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&yu(e,a,t)}function yi(){return(J&6)===0?(rl(0),!1):!0}function wo(){if(G!==null){if($===0)var e=G.return;else e=G,zt=Ra=null,ks(e),rn=null,Yn=0,e=G;for(;e!==null;)qc(e.alternate,e),e=e.return;G=null}}function vn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pt=0,wo(),se=e,G=a=Ot(e.current,null),Q=t,$=0,nt=null,ua=!1,gn=Nn(e,t),Eo=!1,yn=lt=Ao=_a=ra=me=0,Pe=ol=null,xo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Fe(n),i=1<<l;t|=e[l],n&=~i}return Yt=t,ql(),a}function ud(e,t){V=null,S.H=$n,t===un||t===Pl?(t=Ar(),$=3):t===Bs?(t=Ar(),$=4):$=t===so?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,G===null&&(me=1,si(e,ct(t,e.current)))}function rd(){var e=tt.current;return e===null?!0:(Q&4194048)===Q?pt===null:(Q&62914560)===Q||(Q&536870912)!==0?e===pt:!1}function cd(){var e=S.H;return S.H=$n,e===null?$n:e}function dd(){var e=S.A;return S.A=Km,e}function Si(){me=4,ua||(Q&4194048)!==Q&&tt.current!==null||(gn=!0),(ra&134217727)===0&&(_a&134217727)===0||se===null||fa(se,Q,lt,!1)}function Ro(e,t,a){var n=J;J|=2;var l=cd(),i=dd();(se!==e||Q!==t)&&(gi=null,vn(e,t)),t=!1;var s=me;e:do try{if($!==0&&G!==null){var o=G,u=nt;switch($){case 8:wo(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=$;if($=0,nt=null,bn(e,o,u,m),a&&gn){s=0;break e}break;default:m=$,$=0,nt=null,bn(e,o,u,m)}}ep(),s=me;break}catch(y){ud(e,y)}while(!0);return t&&e.shellSuspendCounter++,zt=Ra=null,J=n,S.H=l,S.A=i,G===null&&(se=null,Q=0,ql()),s}function ep(){for(;G!==null;)fd(G)}function tp(e,t){var a=J;J|=2;var n=cd(),l=dd();se!==e||Q!==t?(gi=null,hi=We()+500,vn(e,t)):gn=Nn(e,t);e:do try{if($!==0&&G!==null){t=G;var i=nt;t:switch($){case 1:$=0,nt=null,bn(e,t,i,1);break;case 2:case 9:if(Cr(i)){$=0,nt=null,md(t);break}t=function(){$!==2&&$!==9||se!==e||($=7),Dt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Cr(i)?($=0,nt=null,md(t)):($=0,nt=null,bn(e,t,i,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var o=G;if(s?Fd(s):o.stateNode.complete){$=0,nt=null;var u=o.sibling;if(u!==null)G=u;else{var m=o.return;m!==null?(G=m,vi(m)):G=null}break t}}$=0,nt=null,bn(e,t,i,5);break;case 6:$=0,nt=null,bn(e,t,i,6);break;case 8:wo(),me=6;break e;default:throw Error(h(462))}}ap();break}catch(y){ud(e,y)}while(!0);return zt=Ra=null,S.H=n,S.A=l,J=a,G!==null?0:(se=null,Q=0,ql(),me)}function ap(){for(;G!==null&&!xf();)fd(G)}function fd(e){var t=Hc(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?vi(e):G=t}function md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rc(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Rc(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:ks(t);default:qc(a,t),t=G=dr(t,Yt),t=Hc(a,t,Yt)}e.memoizedProps=e.pendingProps,t===null?vi(e):G=t}function bn(e,t,a,n){zt=Ra=null,ks(t),rn=null,Yn=0;var l=t.return;try{if(km(e,l,t,a,Q)){me=1,si(e,ct(a,e.current)),G=null;return}}catch(i){if(l!==null)throw G=l,i;me=1,si(e,ct(a,e.current)),G=null;return}t.flags&32768?(Y||n===1?e=!0:gn||(Q&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),pd(t,e)):vi(t)}function vi(e){var t=e;do{if((t.flags&32768)!==0){pd(t,ua);return}e=t.return;var a=Im(t.alternate,t,Yt);if(a!==null){G=a;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);me===0&&(me=5)}function pd(e,t){do{var a=Zm(e.alternate,e);if(a!==null){a.flags&=32767,G=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=a}while(e!==null);me=6,G=null}function hd(e,t,a,n,l,i,s,o,u){e.cancelPendingCommit=null;do bi();while(Ce!==0);if((J&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=ys,zf(e,a,i,s,o,u),e===se&&(G=se=null,Q=0),Sn=t,da=e,Pt=a,Mo=i,Do=l,ld=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sp(Cl,function(){return bd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=S.T,S.T=null,l=E.p,E.p=2,s=J,J|=4;try{Jm(e,t,a)}finally{J=s,E.p=l,S.T=n}}Ce=1,gd(),yd(),Sd()}}function gd(){if(Ce===1){Ce=0;var e=da,t=Sn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var n=E.p;E.p=2;var l=J;J|=4;try{Wc(t,e);var i=Qo,s=ar(e.containerInfo),o=i.focusedElem,u=i.selectionRange;if(s!==o&&o&&o.ownerDocument&&tr(o.ownerDocument.documentElement,o)){if(u!==null&&fs(o)){var m=u.start,y=u.end;if(y===void 0&&(y=m),"selectionStart"in o)o.selectionStart=m,o.selectionEnd=Math.min(y,o.value.length);else{var b=o.ownerDocument||document,p=b&&b.defaultView||window;if(p.getSelection){var g=p.getSelection(),x=o.textContent.length,L=Math.min(u.start,x),le=u.end===void 0?L:Math.min(u.end,x);!g.extend&&L>le&&(s=le,le=L,L=s);var d=er(o,L),r=er(o,le);if(d&&r&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==r.node||g.focusOffset!==r.offset)){var f=b.createRange();f.setStart(d.node,d.offset),g.removeAllRanges(),L>le?(g.addRange(f),g.extend(r.node,r.offset)):(f.setEnd(r.node,r.offset),g.addRange(f))}}}}for(b=[],g=o;g=g.parentNode;)g.nodeType===1&&b.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<b.length;o++){var v=b[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Bi=!!jo,Qo=jo=null}finally{J=l,E.p=n,S.T=a}}e.current=t,Ce=2}}function yd(){if(Ce===2){Ce=0;var e=da,t=Sn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var n=E.p;E.p=2;var l=J;J|=4;try{Yc(e,t.alternate,t)}finally{J=l,E.p=n,S.T=a}}Ce=3}}function Sd(){if(Ce===4||Ce===3){Ce=0,Mf();var e=da,t=Sn,a=Pt,n=ld;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ce=5:(Ce=0,Sn=da=null,vd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ca=null),Ii(a),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Dn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=S.T,l=E.p,E.p=2,S.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var o=n[s];i(o.value,{componentStack:o.stack})}}finally{S.T=t,E.p=l}}(Pt&3)!==0&&bi(),Dt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===No?ul++:(ul=0,No=e):ul=0,rl(0)}}function vd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xn(t)))}function bi(){return gd(),yd(),Sd(),bd()}function bd(){if(Ce!==5)return!1;var e=da,t=Mo;Mo=0;var a=Ii(Pt),n=S.T,l=E.p;try{E.p=32>a?32:a,S.T=null,a=Do,Do=null;var i=da,s=Pt;if(Ce=0,Sn=da=null,Pt=0,(J&6)!==0)throw Error(h(331));var o=J;if(J|=4,td(i.current),Fc(i,i.current,s,a),J=o,rl(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Dn,i)}catch{}return!0}finally{E.p=l,S.T=n,vd(e,t)}}function Td(e,t,a){t=ct(a,t),t=io(e.stateNode,t,2),e=la(e,t,2),e!==null&&(wn(e,2),Dt(e))}function ee(e,t,a){if(e.tag===3)Td(e,e,a);else for(;t!==null;){if(t.tag===3){Td(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ca===null||!ca.has(n))){e=ct(a,e),a=Cc(2),n=la(t,a,2),n!==null&&(Ec(a,n,t,e),wn(n,2),Dt(n));break}}t=t.return}}function Lo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Fm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Eo=!0,l.add(a),e=np.bind(null,e,t,a),t.then(e,e))}function np(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(Q&a)===a&&(me===4||me===3&&(Q&62914560)===Q&&300>We()-pi?(J&2)===0&&vn(e,0):Ao|=a,yn===Q&&(yn=0)),Dt(e)}function Cd(e,t){t===0&&(t=gu()),e=Da(e,t),e!==null&&(wn(e,t),Dt(e))}function lp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cd(e,a)}function ip(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(t),Cd(e,a)}function sp(e,t){return Xi(e,t)}var Ti=null,Tn=null,Bo=!1,Ci=!1,Oo=!1,ma=0;function Dt(e){e!==Tn&&e.next===null&&(Tn===null?Ti=Tn=e:Tn=Tn.next=e),Ci=!0,Bo||(Bo=!0,up())}function rl(e,t){if(!Oo&&Ci){Oo=!0;do for(var a=!1,n=Ti;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,o=n.pingedLanes;i=(1<<31-Fe(42|e)+1)-1,i&=l&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Md(n,i))}else i=Q,i=Ml(n,n===se?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Nn(n,i)||(a=!0,Md(n,i));n=n.next}while(a);Oo=!1}}function op(){Ed()}function Ed(){Ci=Bo=!1;var e=0;ma!==0&&Sp()&&(e=ma);for(var t=We(),a=null,n=Ti;n!==null;){var l=n.next,i=Ad(n,t);i===0?(n.next=null,a===null?Ti=l:a.next=l,l===null&&(Tn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ci=!0)),n=l}Ce!==0&&Ce!==5||rl(e),ma!==0&&(ma=0)}function Ad(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-Fe(i),o=1<<s,u=l[s];u===-1?((o&a)===0||(o&n)!==0)&&(l[s]=Uf(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}if(t=se,a=Q,a=Ml(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ki(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ki(n),Ii(a)){case 2:case 8:a=pu;break;case 32:a=Cl;break;case 268435456:a=hu;break;default:a=Cl}return n=xd.bind(null,e),a=Xi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ki(n),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var n=Q;return n=Ml(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(sd(e,n,t),Ad(e,We()),e.callbackNode!=null&&e.callbackNode===a?xd.bind(null,e):null)}function Md(e,t){if(bi())return null;sd(e,t,!0)}function up(){bp(function(){(J&6)!==0?Xi(mu,op):Ed()})}function Uo(){if(ma===0){var e=sn;e===0&&(e=El,El<<=1,(El&261888)===0&&(El=256)),ma=e}return ma}function Dd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function Nd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function rp(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Dd((l[je]||null).action),s=n.submitter;s&&(t=(t=s[je]||null)?Dd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var o=new Ul("action","action",null,n,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ma!==0){var u=s?Nd(l,s):new FormData(l);$s(a,{pending:!0,data:u,method:l.method,action:i},null,u)}}else typeof i=="function"&&(o.preventDefault(),u=s?Nd(l,s):new FormData(l),$s(a,{pending:!0,data:u,method:l.method,action:i},i,u))},currentTarget:l}]})}}for(var zo=0;zo<gs.length;zo++){var Ho=gs[zo],cp=Ho.toLowerCase(),dp=Ho[0].toUpperCase()+Ho.slice(1);St(cp,"on"+dp)}St(ir,"onAnimationEnd"),St(sr,"onAnimationIteration"),St(or,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(Dm,"onTransitionRun"),St(Nm,"onTransitionStart"),St(wm,"onTransitionCancel"),St(ur,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function wd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,m=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;i=o,l.currentTarget=m;try{i(l)}catch(y){Vl(y)}l.currentTarget=null,i=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,m=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;i=o,l.currentTarget=m;try{i(l)}catch(y){Vl(y)}l.currentTarget=null,i=u}}}}function j(e,t){var a=t[Zi];a===void 0&&(a=t[Zi]=new Set);var n=e+"__bubble";a.has(n)||(Rd(t,e,2,!1),a.add(n))}function Vo(e,t,a){var n=0;t&&(n|=4),Rd(a,e,n,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Ei]){e[Ei]=!0,Eu.forEach(function(a){a!=="selectionchange"&&(fp.has(a)||Vo(a,!1,e),Vo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Vo("selectionchange",!1,t))}}function Rd(e,t,a,n){switch(sf(t)){case 2:var l=Gp;break;case 8:l=jp;break;default:l=$o}a=l.bind(null,t,a,e),l=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function _o(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===l)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;o!==null;){if(s=Qa(o),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){n=i=s;continue e}o=o.parentNode}}n=n.return}zu(function(){var m=i,y=ts(a),b=[];e:{var p=rr.get(e);if(p!==void 0){var g=Ul,x=e;switch(e){case"keypress":if(Bl(a)===0)break e;case"keydown":case"keyup":g=im;break;case"focusin":x="focus",g=os;break;case"focusout":x="blur",g=os;break;case"beforeblur":case"afterblur":g=os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=um;break;case ir:case sr:case or:g=Wf;break;case ur:g=cm;break;case"scroll":case"scrollend":g=Yf;break;case"wheel":g=fm;break;case"copy":case"cut":case"paste":g=Ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gu;break;case"toggle":case"beforetoggle":g=pm}var L=(t&4)!==0,le=!L&&(e==="scroll"||e==="scrollend"),d=L?p!==null?p+"Capture":null:p;L=[];for(var r=m,f;r!==null;){var v=r;if(f=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||f===null||d===null||(v=Bn(r,d),v!=null&&L.push(dl(r,v,f))),le)break;r=r.return}0<L.length&&(p=new g(p,x,null,a,y),b.push({event:p,listeners:L}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&a!==es&&(x=a.relatedTarget||a.fromElement)&&(Qa(x)||x[ja]))break e;if((g||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=a.relatedTarget||a.toElement,g=m,x=x?Qa(x):null,x!==null&&(le=Z(x),L=x.tag,x!==le||L!==5&&L!==27&&L!==6)&&(x=null)):(g=null,x=m),g!==x)){if(L=qu,v="onMouseLeave",d="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(L=Gu,v="onPointerLeave",d="onPointerEnter",r="pointer"),le=g==null?p:Ln(g),f=x==null?p:Ln(x),p=new L(v,r+"leave",g,a,y),p.target=le,p.relatedTarget=f,v=null,Qa(y)===m&&(L=new L(d,r+"enter",x,a,y),L.target=f,L.relatedTarget=le,v=L),le=v,g&&x)t:{for(L=mp,d=g,r=x,f=0,v=d;v;v=L(v))f++;v=0;for(var w=r;w;w=L(w))v++;for(;0<f-v;)d=L(d),f--;for(;0<v-f;)r=L(r),v--;for(;f--;){if(d===r||r!==null&&d===r.alternate){L=d;break t}d=L(d),r=L(r)}L=null}else L=null;g!==null&&Ld(b,p,g,L,!1),x!==null&&le!==null&&Ld(b,le,x,L,!0)}}e:{if(p=m?Ln(m):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var P=Zu;else if(Pu(p))if(Ju)P=Am;else{P=Cm;var N=Tm}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&$i(m.elementType)&&(P=Zu):P=Em;if(P&&(P=P(e,m))){Iu(b,P,a,y);break e}N&&N(e,p,m),e==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&Fi(p,"number",p.value)}switch(N=m?Ln(m):window,e){case"focusin":(Pu(N)||N.contentEditable==="true")&&(Ka=N,ms=m,Gn=null);break;case"focusout":Gn=ms=Ka=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,nr(b,a,y);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":nr(b,a,y)}var q;if(rs)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Wa?ku(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(ju&&a.locale!=="ko"&&(Wa||X!=="onCompositionStart"?X==="onCompositionEnd"&&Wa&&(q=Hu()):(Kt=y,ls="value"in Kt?Kt.value:Kt.textContent,Wa=!0)),N=Ai(m,X),0<N.length&&(X=new _u(X,e,null,a,y),b.push({event:X,listeners:N}),q?X.data=q:(q=Yu(a),q!==null&&(X.data=q)))),(q=gm?ym(e,a):Sm(e,a))&&(X=Ai(m,"onBeforeInput"),0<X.length&&(N=new _u("onBeforeInput","beforeinput",null,a,y),b.push({event:N,listeners:X}),N.data=q)),rp(b,e,m,a,y)}wd(b,t)})}function dl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ai(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Bn(e,a),l!=null&&n.unshift(dl(e,l,i)),l=Bn(e,t),l!=null&&n.push(dl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function mp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ld(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var o=a,u=o.alternate,m=o.stateNode;if(o=o.tag,u!==null&&u===n)break;o!==5&&o!==26&&o!==27||m===null||(u=m,l?(m=Bn(a,i),m!=null&&s.unshift(dl(a,m,u))):l||(m=Bn(a,i),m!=null&&s.push(dl(a,m,u)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var pp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(hp,"")}function Od(e,t){return t=Bd(t),Bd(e)===t}function ne(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ia(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ia(e,""+n);break;case"className":Nl(e,"class",n);break;case"tabIndex":Nl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(e,a,n);break;case"style":Ou(e,n,i);break;case"data":if(t!=="object"){Nl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Rl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",l.name,l,null),ne(e,t,"formEncType",l.formEncType,l,null),ne(e,t,"formMethod",l.formMethod,l,null),ne(e,t,"formTarget",l.formTarget,l,null)):(ne(e,t,"encType",l.encType,l,null),ne(e,t,"method",l.method,l,null),ne(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Rl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Lt);break;case"onScroll":n!=null&&j("scroll",e);break;case"onScrollEnd":n!=null&&j("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Rl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":j("beforetoggle",e),j("toggle",e),Dl(e,"popover",n);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Dl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xf.get(a)||a,Dl(e,a,n))}}function Go(e,t,a,n,l,i){switch(a){case"style":Ou(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ia(e,n):(typeof n=="number"||typeof n=="bigint")&&Ia(e,""+n);break;case"onScroll":n!=null&&j("scroll",e);break;case"onScrollEnd":n!=null&&j("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Lt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Au.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Dl(e,a,n)}}}function we(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":j("error",e),j("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ne(e,t,i,s,a,null)}}l&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":j("invalid",e);var o=i=s=l=null,u=null,m=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":l=y;break;case"type":s=y;break;case"checked":u=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:ne(e,t,n,y,a,null)}}wu(e,i,o,u,m,s,l,!1);return;case"select":j("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":n=o;default:ne(e,t,l,o,a,null)}t=i,a=s,e.multiple=!!n,t!=null?Pa(e,!!n,t,!1):a!=null&&Pa(e,!!n,a,!0);return;case"textarea":j("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":n=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:ne(e,t,s,o,a,null)}Lu(e,n,l,i);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,u,n,a,null)}return;case"dialog":j("beforetoggle",e),j("toggle",e),j("cancel",e),j("close",e);break;case"iframe":case"object":j("load",e);break;case"video":case"audio":for(n=0;n<cl.length;n++)j(cl[n],e);break;case"image":j("error",e),j("load",e);break;case"details":j("toggle",e);break;case"embed":case"source":case"link":j("error",e),j("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ne(e,t,m,n,a,null)}return;default:if($i(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Go(e,t,y,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&ne(e,t,o,n,a,null))}function gp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,o=null,u=null,m=null,y=null;for(g in a){var b=a[g];if(a.hasOwnProperty(g)&&b!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":u=b;default:n.hasOwnProperty(g)||ne(e,t,g,null,n,b)}}for(var p in n){var g=n[p];if(b=a[p],n.hasOwnProperty(p)&&(g!=null||b!=null))switch(p){case"type":i=g;break;case"name":l=g;break;case"checked":m=g;break;case"defaultChecked":y=g;break;case"value":s=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==b&&ne(e,t,p,g,n,b)}}Ki(e,s,o,u,m,y,i,l);return;case"select":g=s=o=p=null;for(i in a)if(u=a[i],a.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":g=u;default:n.hasOwnProperty(i)||ne(e,t,i,null,n,u)}for(l in n)if(i=n[l],u=a[l],n.hasOwnProperty(l)&&(i!=null||u!=null))switch(l){case"value":p=i;break;case"defaultValue":o=i;break;case"multiple":s=i;default:i!==u&&ne(e,t,l,i,n,u)}t=o,a=s,n=g,p!=null?Pa(e,!!a,p,!1):!!n!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":g=p=null;for(o in a)if(l=a[o],a.hasOwnProperty(o)&&l!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ne(e,t,o,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":p=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(h(91));break;default:l!==i&&ne(e,t,s,l,n,i)}Ru(e,p,g);return;case"option":for(var x in a)if(p=a[x],a.hasOwnProperty(x)&&p!=null&&!n.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:ne(e,t,x,null,n,p)}for(u in n)if(p=n[u],g=a[u],n.hasOwnProperty(u)&&p!==g&&(p!=null||g!=null))switch(u){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ne(e,t,u,p,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in a)p=a[L],a.hasOwnProperty(L)&&p!=null&&!n.hasOwnProperty(L)&&ne(e,t,L,null,n,p);for(m in n)if(p=n[m],g=a[m],n.hasOwnProperty(m)&&p!==g&&(p!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:ne(e,t,m,p,n,g)}return;default:if($i(t)){for(var le in a)p=a[le],a.hasOwnProperty(le)&&p!==void 0&&!n.hasOwnProperty(le)&&Go(e,t,le,void 0,n,p);for(y in n)p=n[y],g=a[y],!n.hasOwnProperty(y)||p===g||p===void 0&&g===void 0||Go(e,t,y,p,n,g);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!n.hasOwnProperty(d)&&ne(e,t,d,null,n,p);for(b in n)p=n[b],g=a[b],!n.hasOwnProperty(b)||p===g||p==null&&g==null||ne(e,t,b,p,n,g)}function Ud(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,o=l.duration;if(i&&o&&Ud(s)){for(s=0,o=l.responseEnd,n+=1;n<a.length;n++){var u=a[n],m=u.startTime;if(m>o)break;var y=u.transferSize,b=u.initiatorType;y&&Ud(b)&&(u=u.responseEnd,s+=y*(u<o?1:(o-m)/(u-m)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jo=null,Qo=null;function xi(e){return e.nodeType===9?e:e.ownerDocument}function zd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=null;function Sp(){var e=window.event;return e&&e.type==="popstate"?e===ko?!1:(ko=e,!0):(ko=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,vp=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(e){return qd.resolve(null).then(e).catch(Tp)}:Vd;function Tp(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function _d(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),xn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")fl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,fl(a);for(var i=a.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[Rn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&fl(e.ownerDocument.body);a=l}while(a);xn(t)}function Gd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Yo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yo(a),Ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cp(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function Ep(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function Po(e){return e.data==="$?"||e.data==="$~"}function Io(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ap(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zo=null;function Qd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function kd(e,t,a){switch(t=xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function fl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ji(e)}var gt=new Map,Yd=new Set;function Mi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=E.d;E.d={f:xp,r:Mp,D:Dp,C:Np,L:wp,m:Rp,X:Bp,S:Lp,M:Op};function xp(){var e=It.f(),t=yi();return e||t}function Mp(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?uc(t):It.r(e)}var Cn=typeof document>"u"?null:document;function Pd(e,t,a){var n=Cn;if(n&&typeof t=="string"&&t){var l=ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Yd.has(l)||(Yd.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),we(t,"link",e),Ee(t),n.head.appendChild(t)))}}function Dp(e){It.D(e),Pd("dns-prefetch",e,null)}function Np(e,t){It.C(e,t),Pd("preconnect",e,t)}function wp(e,t,a){It.L(e,t,a);var n=Cn;if(n&&e&&t){var l='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ut(a.imageSizes)+'"]')):l+='[href="'+ut(e)+'"]';var i=l;switch(t){case"style":i=En(e);break;case"script":i=An(e)}gt.has(i)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),gt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(ml(i))||t==="script"&&n.querySelector(pl(i))||(t=n.createElement("link"),we(t,"link",e),Ee(t),n.head.appendChild(t)))}}function Rp(e,t){It.m(e,t);var a=Cn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=An(e)}if(!gt.has(i)&&(e=O({rel:"modulepreload",href:e},t),gt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(i)))return}n=a.createElement("link"),we(n,"link",e),Ee(n),a.head.appendChild(n)}}}function Lp(e,t,a){It.S(e,t,a);var n=Cn;if(n&&e){var l=ka(n).hoistableStyles,i=En(e);t=t||"default";var s=l.get(i);if(!s){var o={loading:0,preload:null};if(s=n.querySelector(ml(i)))o.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=gt.get(i))&&Jo(e,a);var u=s=n.createElement("link");Ee(u),we(u,"link",e),u._p=new Promise(function(m,y){u.onload=m,u.onerror=y}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Di(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:o},l.set(i,s)}}}function Bp(e,t){It.X(e,t);var a=Cn;if(a&&e){var n=ka(a).hoistableScripts,l=An(e),i=n.get(l);i||(i=a.querySelector(pl(l)),i||(e=O({src:e,async:!0},t),(t=gt.get(l))&&Wo(e,t),i=a.createElement("script"),Ee(i),we(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Op(e,t){It.M(e,t);var a=Cn;if(a&&e){var n=ka(a).hoistableScripts,l=An(e),i=n.get(l);i||(i=a.querySelector(pl(l)),i||(e=O({src:e,async:!0,type:"module"},t),(t=gt.get(l))&&Wo(e,t),i=a.createElement("script"),Ee(i),we(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Id(e,t,a,n){var l=(l=_.current)?Mi(l):null;if(!l)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=En(a.href),a=ka(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=En(a.href);var i=ka(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(ml(e)))&&!i._p&&(s.instance=i,s.state.loading=5),gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gt.set(e,a),i||Up(l,e,a,s.state))),t&&n===null)throw Error(h(528,""));return s}if(t&&n!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=An(a),a=ka(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function En(e){return'href="'+ut(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function Zd(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Up(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),we(t,"link",a),Ee(t),e.head.appendChild(t))}function An(e){return'[src="'+ut(e)+'"]'}function pl(e){return"script[async]"+e}function Jd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,Ee(n),n;var l=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ee(n),we(n,"style",l),Di(n,a.precedence,e),t.instance=n;case"stylesheet":l=En(a.href);var i=e.querySelector(ml(l));if(i)return t.state.loading|=4,t.instance=i,Ee(i),i;n=Zd(a),(l=gt.get(l))&&Jo(n,l),i=(e.ownerDocument||e).createElement("link"),Ee(i);var s=i;return s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),we(i,"link",n),t.state.loading|=4,Di(i,a.precedence,e),t.instance=i;case"script":return i=An(a.src),(l=e.querySelector(pl(i)))?(t.instance=l,Ee(l),l):(n=a,(l=gt.get(i))&&(n=O({},a),Wo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ee(l),we(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Di(n,a.precedence,e));return t.instance}function Di(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var o=n[s];if(o.dataset.precedence===t)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ni=null;function Wd(e,t,a){if(Ni===null){var n=new Map,l=Ni=new Map;l.set(a,n)}else l=Ni,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Rn]||i[xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var o=n.get(s);o?o.push(i):n.set(s,[i])}}return n}function Kd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=En(n.href),i=t.querySelector(ml(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ee(i);return}i=t.ownerDocument||t,n=Zd(n),(l=gt.get(l))&&Jo(n,l),i=i.createElement("link"),Ee(i);var s=i;s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),we(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ko=0;function Vp(e,t){return e.stylesheets&&e.count===0&&Li(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ko===0&&(Ko=62500*yp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ko?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function wi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Li(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function Li(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(qp,e),Ri=null,wi.call(e))}function qp(e,t){if(!(t.state.loading&4)){var a=Ri.get(e);if(a)var n=a.get(null);else{a=new Map,Ri.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=wi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var hl={$$typeof:Re,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function _p(e,t,a,n,l,i,s,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.hiddenUpdates=Yi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function $d(e,t,a,n,l,i,s,o,u,m,y,b){return e=new _p(e,t,a,s,u,m,y,b,o),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=ws(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Os(i),e}function ef(e){return e?(e=en,e):en}function tf(e,t,a,n,l,i){l=ef(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=la(e,n,t),a!==null&&(Ie(a,e,t),In(a,e,t))}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fo(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function nf(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Ie(t,e,67108864),Fo(e,67108864)}}function lf(e){if(e.tag===13||e.tag===31){var t=it();t=Pi(t);var a=Da(e,t);a!==null&&Ie(a,e,t),Fo(e,t)}}var Bi=!0;function Gp(e,t,a,n){var l=S.T;S.T=null;var i=E.p;try{E.p=2,$o(e,t,a,n)}finally{E.p=i,S.T=l}}function jp(e,t,a,n){var l=S.T;S.T=null;var i=E.p;try{E.p=8,$o(e,t,a,n)}finally{E.p=i,S.T=l}}function $o(e,t,a,n){if(Bi){var l=eu(n);if(l===null)_o(e,t,n,Oi,a),of(e,n);else if(Xp(l,e,t,a,n))n.stopPropagation();else if(of(e,n),t&4&&-1<Qp.indexOf(e)){for(;l!==null;){var i=Xa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ca(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var u=1<<31-Fe(s);o.entanglements[1]|=u,s&=~u}Dt(i),(J&6)===0&&(hi=We()+500,rl(0))}}break;case 31:case 13:o=Da(i,2),o!==null&&Ie(o,i,2),yi(),Fo(i,2)}if(i=eu(n),i===null&&_o(e,t,n,Oi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else _o(e,t,n,null,a)}}function eu(e){return e=ts(e),tu(e)}var Oi=null;function tu(e){if(Oi=null,e=Qa(e),e!==null){var t=Z(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=pe(t),e!==null)return e;e=null}else if(a===31){if(e=Be(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Oi=e,null}function sf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Df()){case mu:return 2;case pu:return 8;case Cl:case Nf:return 32;case hu:return 268435456;default:return 32}default:return 32}}var au=!1,ha=null,ga=null,ya=null,gl=new Map,yl=new Map,Sa=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function of(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function Sl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Xa(t),t!==null&&nf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Xp(e,t,a,n,l){switch(t){case"focusin":return ha=Sl(ha,e,t,a,n,l),!0;case"dragenter":return ga=Sl(ga,e,t,a,n,l),!0;case"mouseover":return ya=Sl(ya,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return gl.set(i,Sl(gl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,yl.set(i,Sl(yl.get(i)||null,e,t,a,n,l)),!0}return!1}function uf(e){var t=Qa(e.target);if(t!==null){var a=Z(t);if(a!==null){if(t=a.tag,t===13){if(t=pe(a),t!==null){e.blockedOn=t,Tu(e.priority,function(){lf(a)});return}}else if(t===31){if(t=Be(a),t!==null){e.blockedOn=t,Tu(e.priority,function(){lf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Xa(a),t!==null&&nf(t),e.blockedOn=a,!1;t.shift()}return!0}function rf(e,t,a){Ui(e)&&a.delete(t)}function kp(){au=!1,ha!==null&&Ui(ha)&&(ha=null),ga!==null&&Ui(ga)&&(ga=null),ya!==null&&Ui(ya)&&(ya=null),gl.forEach(rf),yl.forEach(rf)}function zi(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,kp)))}var Hi=null;function cf(e){Hi!==e&&(Hi=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Hi===e&&(Hi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(tu(n||a)===null)continue;break}var i=Xa(a);i!==null&&(e.splice(t,3),t-=3,$s(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function xn(e){function t(u){return zi(u,e)}ha!==null&&zi(ha,e),ga!==null&&zi(ga,e),ya!==null&&zi(ya,e),gl.forEach(t),yl.forEach(t);for(var a=0;a<Sa.length;a++){var n=Sa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[je]||null;if(typeof i=="function")s||cf(a);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[je]||null)o=s.formAction;else if(tu(l)!==null)continue}else o=s.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),cf(a)}}}function df(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function nu(e){this._internalRoot=e}Vi.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,n=it();tf(a,n,e,t,null,null)},Vi.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tf(e.current,2,null,e,null,null),yi(),t[ja]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&uf(e)}};var ff=de.version;if(ff!=="19.2.7")throw Error(h(527,ff,"19.2.7"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=C(t),e=e!==null?K(e):null,e=e===null?null:e.stateNode,e};var Yp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Dn=qi.inject(Yp),Ke=qi}catch{}}return bl.createRoot=function(e,t){if(!B(e))throw Error(h(299));var a=!1,n="",l=Sc,i=vc,s=bc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=$d(e,1,!1,null,null,a,n,null,l,i,s,df),e[ja]=t.current,qo(e),new nu(t)},bl.hydrateRoot=function(e,t,a){if(!B(e))throw Error(h(299));var n=!1,l="",i=Sc,s=vc,o=bc,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=$d(e,1,!0,t,a??null,n,l,u,i,s,o,df),t.context=ef(null),a=t.current,n=it(),n=Pi(n),l=na(n),l.callback=null,la(a,l,n),a=n,t.current.lanes=a,wn(t,a),Dt(t),e[ja]=t.current,qo(e),new Vi(t)},bl.version="19.2.7",bl}var Cf;function th(){if(Cf)return su.exports;Cf=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(de){console.error(de)}}return M(),su.exports=eh(),su.exports}var ah=th();function nh(){const[M,de]=Ef.useState(null),W=[{id:1,question:"1. Explain the ASP.NET Framework. Discuss its features and architecture.",answer:"",codeExample:`
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
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:31,question:"31. What is ADO.NET? Explain its basic features.",answer:"",codeExample:`
What is ADO.NET? Explain its Basic Features

1. What is ADO.NET?

ADO.NET stands for ActiveX Data Objects for .NET.

It is a data access technology in the .NET Framework used to
connect applications with databases and perform operations such as:

- Insert data
- Retrieve data
- Update data
- Delete data

ADO.NET can work with databases such as SQL Server, Oracle, and
other data sources through suitable data providers.

Definition:

ADO.NET is a .NET data access technology used to connect
applications with databases and perform database operations such
as retrieving, inserting, updating, and deleting data.


2. Basic Architecture of ADO.NET

The basic ADO.NET architecture contains two important parts:

        .NET Application
               |
               ↓
        ADO.NET Provider
        /             \\
       ↓               ↓
Connection          DataSet
Command             DataTable
DataReader
       |
       ↓
    Database


Main Components


1. Connection

Used to establish a connection between the application and
database.

Example:

SqlConnection con =
    new SqlConnection(connectionString);


2. Command

Used to execute SQL queries or stored procedures.

Example:

SqlCommand cmd =
    new SqlCommand("SELECT * FROM Student", con);

It can execute:

- SELECT
- INSERT
- UPDATE
- DELETE


3. DataReader

DataReader is used to read data from the database one record
at a time.

Example:

SqlDataReader dr = cmd.ExecuteReader();

while (dr.Read())
{
    Console.WriteLine(dr["Name"]);
}

It is generally fast and suitable for read-only, forward-only
data access.


4. DataAdapter

DataAdapter acts as a bridge between the database and DataSet.

Database
    ↕
DataAdapter
    ↕
DataSet


5. DataSet

A DataSet stores data in memory and can contain multiple
DataTable objects.

DataSet
   |
   +--- DataTable 1
   |
   +--- DataTable 2
   |
   +--- DataTable 3

It allows applications to work with data without keeping the
database connection continuously open.


3. Basic Features of ADO.NET


1. Database Connectivity

ADO.NET provides classes for connecting .NET applications
to databases.

Example:

ASP.NET Application
       ↓
    ADO.NET
       ↓
    SQL Server


2. Disconnected Data Access

One of the important features of ADO.NET is disconnected
architecture.

Data can be loaded into a DataSet, the connection can then
be closed, and the application can work with the data in memory.

Database
   ↓
DataAdapter
   ↓
DataSet
   ↓
Connection Closed
   ↓
Work with Data


3. Supports Multiple Databases

ADO.NET supports different database systems through different
data providers.

Examples:

- SQL Server → SqlClient
- ODBC → Odbc
- OLE DB → OleDb


4. Data Manipulation

ADO.NET allows applications to perform:

INSERT
SELECT
UPDATE
DELETE

Example:

INSERT INTO Student VALUES (1, 'Raj');


5. DataReader for Fast Data Reading

DataReader provides fast, forward-only reading of database
records.

Record 1
   ↓
Record 2
   ↓
Record 3
   ↓
Record 4


6. DataSet for In-Memory Data

DataSet can store multiple tables and relationships in memory.

This is useful when the application needs to work with data
after disconnecting from the database.


7. XML Support

ADO.NET provides good support for XML, allowing data to be
represented and exchanged using XML.


8. Transaction Support

ADO.NET supports transactions, which help maintain database
consistency.

Example:

Transaction Start
      ↓
Operation 1
      ↓
Operation 2
      ↓
If successful → COMMIT
If error      → ROLLBACK


9. Connection Pooling

ADO.NET can reuse database connections through connection
pooling, which can improve application performance.


Simple Example

using System.Data.SqlClient;

string cs = "your_connection_string";

SqlConnection con = new SqlConnection(cs);

con.Open();

SqlCommand cmd =
    new SqlCommand("SELECT * FROM Student", con);

SqlDataReader dr = cmd.ExecuteReader();

while (dr.Read())
{
    Console.WriteLine(dr["Name"]);
}

con.Close();


Working:

Create Connection
      ↓
Open Connection
      ↓
Create Command
      ↓
Execute SQL Query
      ↓
Read Data using DataReader
      ↓
Close Connection


Exam Definition — 2 Marks

ADO.NET is a data access technology of the .NET Framework used
to connect applications with databases and perform operations
such as SELECT, INSERT, UPDATE, and DELETE.
      `},{id:32,question:"32. Explain how to use SQL Data Sources in ASP.NET.",answer:"",codeExample:`
Using SQL Data Sources in ASP.NET

1. What is SQL Data Source?

SQL Data Source is an ASP.NET data source control used to connect
an ASP.NET application to a SQL database and perform operations
such as:

- Select
- Insert
- Update
- Delete

The ASP.NET control commonly used is SqlDataSource.

Definition:

SqlDataSource is an ASP.NET data source control that provides
connectivity between ASP.NET web applications and SQL databases.


2. Why Use SqlDataSource?

It makes database operations easier because we can configure the
database connection and SQL queries through the control.

It can be connected with controls such as:

- GridView
- DetailsView
- FormView
- DropDownList
- ListView

Simple Architecture:

ASP.NET Web Page
       ↓
 SqlDataSource
       ↓
   SQL Query
       ↓
 SQL Server Database


3. Steps to Use SQL Data Source


Step 1: Create a Database

Suppose we have a SQL Server database called CollegeDB.

Table:

Student

+----+-------+-----+
| ID | Name  | Age |
+----+-------+-----+
| 1  | Raj   | 20  |
| 2  | Amit  | 21  |
| 3  | Jay   | 20  |
+----+-------+-----+


Step 2: Create Connection String

The connection string contains information required to connect
to the database.

Example in Web.config:

<connectionStrings>
    <add name="CollegeDB"
         connectionString="Data Source=.;Initial Catalog=CollegeDB;Integrated Security=True"
         providerName="System.Data.SqlClient" />
</connectionStrings>

Meaning:

- Data Source → SQL Server name
- Initial Catalog → Database name
- Integrated Security=True → Uses Windows authentication


Step 3: Add SqlDataSource

In an ASP.NET Web Forms page:

<asp:SqlDataSource
    ID="SqlDataSource1"
    runat="server"
    ConnectionString="<%$ ConnectionStrings:CollegeDB %>"
    SelectCommand="SELECT * FROM Student">
</asp:SqlDataSource>

Here:

- ID → Name of the control.
- ConnectionString → Database connection.
- SelectCommand → SQL query used to retrieve data.


Step 4: Display Data Using GridView

We can connect SqlDataSource to a GridView.

<asp:GridView
    ID="GridView1"
    runat="server"
    DataSourceID="SqlDataSource1">
</asp:GridView>


Complete Example:

<asp:SqlDataSource
    ID="SqlDataSource1"
    runat="server"
    ConnectionString="<%$ ConnectionStrings:CollegeDB %>"
    SelectCommand="SELECT * FROM Student">
</asp:SqlDataSource>

<asp:GridView
    ID="GridView1"
    runat="server"
    DataSourceID="SqlDataSource1">
</asp:GridView>


Working:

SQL Server
    ↓
Student Table
    ↓
SqlDataSource
    ↓
GridView
    ↓
Display Students


5. INSERT Operation

SqlDataSource can also be used to insert records.

Example:

<asp:SqlDataSource
    ID="SqlDataSource1"
    runat="server"
    ConnectionString="<%$ ConnectionStrings:CollegeDB %>"
    InsertCommand="INSERT INTO Student(Name, Age) VALUES (@Name, @Age)">

    <InsertParameters>
        <asp:Parameter Name="Name" Type="String" />
        <asp:Parameter Name="Age" Type="Int32" />
    </InsertParameters>

</asp:SqlDataSource>

Here @Name and @Age are parameters.


6. UPDATE Operation

Example:

UpdateCommand="UPDATE Student
               SET Name=@Name, Age=@Age
               WHERE ID=@ID"

Parameters are supplied using:

<UpdateParameters>
    <asp:Parameter Name="Name" />
    <asp:Parameter Name="Age" Type="Int32" />
    <asp:Parameter Name="ID" Type="Int32" />
</UpdateParameters>


7. DELETE Operation

Example:

DeleteCommand="DELETE FROM Student WHERE ID=@ID"

Parameter:

<DeleteParameters>
    <asp:Parameter Name="ID" Type="Int32" />
</DeleteParameters>


8. CRUD Operations

Using SqlDataSource, we can perform CRUD operations:

        SqlDataSource
             |
    ┌────────┼────────┐
    ↓        ↓        ↓
 SELECT    INSERT   UPDATE
             |
           DELETE


CRUD Operations:

Operation     Command
--------------------------------
Create        InsertCommand
Read          SelectCommand
Update        UpdateCommand
Delete        DeleteCommand


Exam Definition — 2 Marks

SqlDataSource is an ASP.NET data source control used to connect
Web Forms applications with SQL databases and perform SELECT,
INSERT, UPDATE, and DELETE operations.
      `},{id:33,question:"33. Compare GridView, DetailsView, FormView and ListView controls.",answer:"",codeExample:`
Comparison of GridView, DetailsView, FormView and ListView Controls

These are ASP.NET Web Forms data-bound controls used to display
and work with data from a database or other data source.


1. GridView

GridView displays data in a table/grid format, with multiple
records shown as rows.

Example:

+----+-------+-----+
| ID | Name  | Age |
+----+-------+-----+
| 1  | Raj   | 20  |
| 2  | Amit  | 21  |
| 3  | Jay   | 20  |
+----+-------+-----+

Features:

- Displays multiple records.
- Supports sorting.
- Supports paging.
- Supports selecting, editing, and deleting records.
- Commonly used for displaying database tables.


2. DetailsView

DetailsView displays one record at a time in a vertical format.

Example:

ID       : 1
Name     : Raj
Age      : 20
Course   : BCA

Features:

- Displays one record at a time.
- Supports paging between records.
- Can support insert, edit, and delete operations.
- Useful for viewing detailed information about one record.


3. FormView

FormView displays one record at a time like DetailsView, but
provides more control over the layout.

The developer creates templates for displaying, editing,
inserting, etc.

Example:

<asp:FormView ID="FormView1"
    runat="server"
    DataSourceID="SqlDataSource1">

    <ItemTemplate>
        <h3>Student Details</h3>
        Name: <%# Eval("Name") %><br />
        Age: <%# Eval("Age") %>
    </ItemTemplate>

</asp:FormView>

Features:

- Displays one record at a time.
- Uses templates.
- Provides flexible/custom layout.
- Supports different templates for different operations.


4. ListView

ListView displays multiple records using templates, giving the
developer a high level of control over the layout.

Example:

Student 1
---------
Name: Raj
Age : 20

Student 2
---------
Name: Amit
Age : 21

Features:

- Displays multiple records.
- Uses templates.
- Highly customizable.
- Supports paging and sorting with suitable configuration.
- Can be used to create custom layouts.


5. Main Difference

| GridView                       | DetailsView                              | FormView                                  | ListView                                        |
| ------------------------------ | ---------------------------------------- | ----------------------------------------- | ----------------------------------------------- |
| Displays multiple records.     | Displays one record.                     | Displays one record.                      | Displays multiple records.                      |
| Uses table/grid format.        | Uses vertical field format.              | Uses templates.                           | Uses templates.                                 |
| Easy to use.                   | Easy for detailed single-record display. | More customizable than DetailsView.       | Highly customizable.                            |
| Supports paging and sorting.   | Supports paging.                         | Supports paging.                          | Supports paging and sorting with configuration. |
| Suitable for tabular data.     | Suitable for viewing one record.         | Suitable for custom single-record layout. | Suitable for custom multiple-record layout.     |
| Less layout flexibility.       | Limited layout flexibility.              | High layout flexibility.                  | Very high layout flexibility.                   |


6. Easy Example to Remember

Suppose we have 100 students.


GridView

Shows many students in a table:

Raj      20
Amit     21
Jay      20
Mehul    22
...


DetailsView

Shows one student:

ID   : 1
Name : Raj
Age  : 20


FormView

Shows one student with a custom design:

************************
    Student Details
************************
Name : Raj
Age  : 20
Course : BCA
************************


ListView

Shows many students with a custom design:

-----------------
Student: Raj
Age: 20
-----------------
Student: Amit
Age: 21
-----------------


7. Simple Memory Trick

GridView    → Many + Table
DetailsView → One + Details
FormView    → One + Custom Template
ListView    → Many + Custom Template


Exam Definition — 2 Marks

GridView, DetailsView, FormView, and ListView are ASP.NET Web
Forms data-bound controls used to display and manipulate data.

GridView displays multiple records in tabular form, DetailsView
displays one record vertically, FormView displays one record
using templates, and ListView displays multiple records using
customizable templates.
      
      `},{id:34,question:"34. Explain ObjectDataSource in ASP.NET.",answer:"",codeExample:`
Suppose you have a Student table in a database:

Student Database
----------------
1   Raj
2   Amit
3   Rahul

Normally, your ASP.NET page could directly talk to the database.

But with ObjectDataSource, we put one C# class in the middle:

ASP.NET Page
    ↓
ObjectDataSource
    ↓
C# Class
    ↓
Database

Think of ObjectDataSource as a bridge between your ASP.NET page
and your C# class.


Very Simple Example

1. We have a C# class

public class Student
{
    public static List<string> GetStudents()
    {
        List<string> students = new List<string>();

        students.Add("Raj");
        students.Add("Amit");
        students.Add("Rahul");

        return students;
    }
}

Here we have a method:

GetStudents()

It gives us:

Raj
Amit
Rahul


2. Now create ObjectDataSource

<asp:ObjectDataSource
    ID="ObjectDataSource1"
    runat="server"
    TypeName="Student"
    SelectMethod="GetStudents">
</asp:ObjectDataSource>

Don't worry about everything. Just remember these two:

TypeName = Student
     ↓
Which C# class?

SelectMethod = GetStudents
     ↓
Which method should be called?

So ASP.NET understands:

"Go to the Student class and call GetStudents()."


3. Connect it to GridView

<asp:GridView
    ID="GridView1"
    runat="server"
    DataSourceID="ObjectDataSource1">
</asp:GridView>

Now the complete flow is:

GridView
   ↓
ObjectDataSource1
   ↓
Student class
   ↓
GetStudents()
   ↓
Raj, Amit, Rahul

So GridView displays:

----------------
| Student Name |
----------------
| Raj          |
| Amit         |
| Rahul        |
----------------


What is the main point?

Without ObjectDataSource

ASP.NET Page
     ↓
Database

With ObjectDataSource

ASP.NET Page
     ↓
ObjectDataSource
     ↓
C# Class
     ↓
Database

The C# class handles the data work, and ObjectDataSource connects
that class to the ASP.NET control.


Remember this for exam

ObjectDataSource = Bridge between ASP.NET control and C# class.

GridView → ObjectDataSource → C# Class → Database

And:

TypeName     → Class name
SelectMethod → Get data
InsertMethod → Insert data
UpdateMethod → Update data
DeleteMethod → Delete data


One-line exam definition

ObjectDataSource is an ASP.NET control used to connect data-bound
controls with a C# business class for selecting, inserting,
updating, and deleting data.
      
      `},{id:41,question:"41. Explain ASP.NET AJAX Extension. What are its advantages?",answer:"",codeExample:`
ASP.NET AJAX Extension

Let's understand it in very simple words.


1. What is ASP.NET AJAX?

ASP.NET AJAX is a set of extensions for ASP.NET that allows a web
page to update part of the page without refreshing the entire page.

AJAX stands for:

Asynchronous JavaScript and XML


Normal website

Click Button
     ↓
Server
     ↓
Whole page reloads


ASP.NET AJAX

Click Button
     ↓
Server
     ↓
Only required part changes
     ↓
No full page refresh

This makes the website feel faster and smoother.


2. Simple Example

Suppose we have this page:

--------------------------------
|       Student Information     |
|                              |
| Name: Raj                    |
|                              |
| [ Get Result ]               |
|                              |
| Result:                      |
--------------------------------


Without AJAX:

Click "Get Result"
        ↓
Entire page reloads
        ↓
Result displayed


With ASP.NET AJAX:

Click "Get Result"
        ↓
Only "Result" section updates
        ↓
Other page remains unchanged


3. Important ASP.NET AJAX Controls

1. ScriptManager

ScriptManager manages AJAX functionality on the ASP.NET page.

<asp:ScriptManager
    ID="ScriptManager1"
    runat="server" />


2. UpdatePanel

UpdatePanel specifies the part of the page that should be updated
without refreshing the complete page.

<asp:UpdatePanel
    ID="UpdatePanel1"
    runat="server">

    <ContentTemplate>

        <asp:Label
            ID="Label1"
            runat="server"
            Text="Hello">
        </asp:Label>

        <asp:Button
            ID="Button1"
            runat="server"
            Text="Click Me" />

    </ContentTemplate>

</asp:UpdatePanel>

Here, when the button is clicked, the UpdatePanel area can be
updated without a complete page refresh.


4. Main Components

ASP.NET AJAX
     |
     +---- ScriptManager
     |
     +---- UpdatePanel
     |
     +---- UpdateProgress
     |
     +---- Timer


ScriptManager

Manages AJAX scripts.


UpdatePanel

Updates only a specific part of the page.


UpdateProgress

Shows a message while an AJAX request is running.

Example:

Please wait...
Loading...


Timer

Performs operations at regular time intervals.


5. Advantages of ASP.NET AJAX

1. No full page refresh

Only the required portion of the page is updated.


2. Faster response

Less information needs to be refreshed, so the application can feel
faster.


3. Better user experience

The user can continue viewing the page while a small part is updated.


4. Reduces server traffic

Only required information is exchanged instead of refreshing the
complete page.


5. Easy to implement

ASP.NET provides controls such as ScriptManager and UpdatePanel,
making AJAX easier to use.


6. Supports asynchronous communication

The browser can communicate with the server without waiting for a
complete page reload.
      `},{id:42,question:"42. What is LINQ? Explain LINQ and its advantages in ASP.NET.",answer:"",codeExample:`
LINQ in ASP.NET

Let's understand LINQ in very simple words.


1. What is LINQ?

LINQ stands for:

Language Integrated Query

LINQ is a feature of .NET that allows us to query and manipulate
data using C# syntax.

In simple words:

LINQ helps us search, filter, sort, and select data easily using
C# code.


2. Why do we need LINQ?

Suppose we have a list of students:

Students
----------------
Raj       80
Amit      65
Rahul     90
Jay       55

Suppose we want only students who scored more than 70.

Without LINQ, we may need a loop:

foreach (Student s in students)
{
    if (s.Marks > 70)
    {
        // use student
    }
}

With LINQ, we can write:

var result = students.Where(s => s.Marks > 70);

That's much shorter.


3. How LINQ Works

Think of LINQ as a filter/search tool.

All Data
   ↓
   LINQ
   ↓
Filter / Sort / Search
   ↓
Required Data

Example:

Students
   ↓
LINQ
   ↓
Marks > 70
   ↓
Raj, Rahul


4. Simple LINQ Example

Suppose we have:

List<int> marks = new List<int>
{
    50, 80, 65, 90, 40
};

We want marks greater than 60.

var result = marks.Where(x => x > 60);


Step-by-step:

50 > 60 ❌
80 > 60 ✅
65 > 60 ✅
90 > 60 ✅
40 > 60 ❌

Result:

80, 65, 90


5. Common LINQ Operations

Method                 Use
------------------------------------------------
Where()                Filter data
Select()               Select required data
OrderBy()              Sort ascending
OrderByDescending()    Sort descending
First()                Get first item
Count()                Count items
Sum()                  Calculate total
Average()              Calculate average


Example:

var result = students
                .Where(s => s.Marks >= 70)
                .OrderBy(s => s.Name)
                .Select(s => s.Name);

Meaning:

Where()
   ↓
Find students with marks >= 70

OrderBy()
   ↓
Sort by name

Select()
   ↓
Take only student names


6. LINQ with Database

LINQ can also be used with databases through technologies such as
LINQ to SQL and Entity Framework.

For example:

var students = db.Students
                 .Where(s => s.Marks > 70)
                 .ToList();

This means:

Get students from the database whose marks are greater than 70.

So:

ASP.NET Application
       ↓
      LINQ
       ↓
   Database
       ↓
 Required Data


7. Advantages of LINQ in ASP.NET

1. Easy to write

LINQ uses C# syntax, so queries are easy to understand.


2. Less code

We can perform filtering, sorting, and searching with fewer lines.


3. Type safety

Errors related to data types can often be detected during
compilation.


4. Easy data manipulation

LINQ can filter, sort, group, select, and calculate data.


5. Works with different data sources

- Collections
- Arrays
- Objects
- XML
- Databases


6. Better readability

LINQ queries are generally easier to read than long loops.


7. Reusable

LINQ queries can be used in different parts of an application.


Remember:

LINQ = Search + Filter + Sort + Select data using C#
      `},{id:43,question:"43. What is a Stored Procedure?",answer:"",codeExample:`
Stored Procedure

Let's understand it in very simple words.


1. What is a Stored Procedure?

A Stored Procedure is a pre-written group of SQL statements that is
saved inside the database.

Instead of writing the same SQL query again and again, we save it in
the database and call it whenever we need it.


Simple idea:

SQL Statements
      ↓
Save in Database
      ↓
Stored Procedure
      ↓
Call whenever required


2. Simple Example

Suppose we have a Student table:

Student
----------------
Id    Name   Marks
1     Raj     80
2     Amit    65
3     Rahul   90

We want to get students whose marks are greater than 70.

We can create a stored procedure:

CREATE PROCEDURE GetStudents
AS
BEGIN
    SELECT * FROM Student
    WHERE Marks > 70;
END

Now the procedure is saved in the database.

We can call it:

EXEC GetStudents;


Result:

Raj      80
Rahul    90


3. Stored Procedure with Parameter

We can also pass a value to a stored procedure.

CREATE PROCEDURE GetStudentById
    @Id INT
AS
BEGIN
    SELECT * FROM Student
    WHERE Id = @Id;
END

Call it:

EXEC GetStudentById @Id = 1;


Result:

1    Raj    80

Here:

@Id = 1
   ↓
Stored Procedure
   ↓
Find Student whose Id = 1
      `},{id:44,question:"44. Explain how to work with XML data in ASP.NET.",answer:"",codeExample:`
Working with XML Data in ASP.NET

Let's understand this in very simple words.


1. What is XML?

XML stands for Extensible Markup Language.

XML is used to store and exchange data in a structured format.

Example:

<Students>
    <Student>
        <Id>1</Id>
        <Name>Raj</Name>
        <Marks>80</Marks>
    </Student>

    <Student>
        <Id>2</Id>
        <Name>Amit</Name>
        <Marks>75</Marks>
    </Student>
</Students>

Here XML stores student information.


2. How ASP.NET Works with XML

ASP.NET can:

1. Create XML data
2. Read XML data
3. Modify XML data
4. Delete XML data
5. Display XML data on a web page


Simple flow:

XML File
   ↓
ASP.NET Application
   ↓
Read / Modify / Save
   ↓
Web Page


3. Reading XML Data

Suppose we have Students.xml:

<Students>
    <Student>
        <Id>1</Id>
        <Name>Raj</Name>
    </Student>

    <Student>
        <Id>2</Id>
        <Name>Amit</Name>
    </Student>
</Students>

In C#, we can read it using XmlDocument.

XmlDocument doc = new XmlDocument();

doc.Load(Server.MapPath("Students.xml"));


What happens?

Students.xml
     ↓
XmlDocument
     ↓
XML loaded into memory


4. Reading XML Values

We can find XML nodes using XPath.

XmlNodeList students =
    doc.SelectNodes("/Students/Student");

foreach (XmlNode student in students)
{
    string name = student["Name"].InnerText;

    Response.Write(name + "<br>");
}

Output:

Raj
Amit


5. Creating XML Data

ASP.NET can also create XML.

XmlDocument doc = new XmlDocument();

XmlElement root = doc.CreateElement("Students");

XmlElement student = doc.CreateElement("Student");

XmlElement name = doc.CreateElement("Name");
name.InnerText = "Raj";

student.AppendChild(name);
root.AppendChild(student);

doc.AppendChild(root);

This creates:

<Students>
    <Student>
        <Name>Raj</Name>
    </Student>
</Students>


6. Modifying XML

Suppose XML contains:

<Name>Raj</Name>

We can change it:

XmlNode node =
    doc.SelectSingleNode("/Students/Student/Name");

node.InnerText = "Rahul";

Now:

<Name>Rahul</Name>


7. Saving XML

After making changes:

doc.Save(Server.MapPath("Students.xml"));

The modified XML is saved back to the file.


8. Important Classes for XML

Class          Use
------------------------------------------------
XmlDocument    Load and modify XML
XmlNode        Represents an XML node
XmlElement     Represents an XML element
XmlNodeList    Collection of XML nodes
XmlReader      Read XML efficiently
XmlWriter      Write XML data
XDocument      Modern LINQ-based XML handling
      
      `},{id:45,question:"45. What is CAPTCHA Control? Explain its purpose and working.",answer:"",codeExample:`
CAPTCHA Control in ASP.NET

Let's understand it in very simple words.


1. What is CAPTCHA?

CAPTCHA is a security technique used on websites to check whether
the user is a human or an automated program (bot).

CAPTCHA commonly asks the user to enter characters shown in an image.

Example:

+-------------------+
|   A7K9P           |  ← CAPTCHA image
+-------------------+

Enter CAPTCHA: [ A7K9P ]

          [ Submit ]


If the user enters the correct characters → Allowed

If the characters are wrong → Rejected


2. Working of CAPTCHA

The working is simple:

User opens webpage
       ↓
CAPTCHA is generated
       ↓
Random characters/image shown
       ↓
User enters characters
       ↓
System checks the answer
       ↓
   ┌───────────────┐
   │ Correct?      │
   └───────────────┘
      ↓         ↓
     YES        NO
      ↓         ↓
  Continue    Reject


3. Why CAPTCHA is Used?

CAPTCHA helps protect websites from:

- Spam
- Automated form submissions
- Fake registrations
- Bot attacks
- Repeated automated requests


4. CAPTCHA in ASP.NET

In ASP.NET, CAPTCHA functionality can be implemented using a
CAPTCHA library/control or a CAPTCHA service.

A typical CAPTCHA control may look like:

<asp:Captcha
    ID="Captcha1"
    runat="server">
</asp:Captcha>

The exact control depends on the CAPTCHA library being used.


5. Advantages

1. Prevents automated bots.

2. Reduces spam.

3. Protects registration forms.

4. Helps prevent fake submissions.

5. Improves website security.


Easy Definition for Exam

CAPTCHA is a security mechanism used to determine whether a user is
a human or a computer program. It usually asks the user to identify
characters, images, or other challenges before allowing an operation.


Easy memory trick:

CAPTCHA = Human or Bot?
             ↓
       Human → Allowed
       Bot   → Rejected
      `},{id:46,question:"46. What is MVC? Explain the Model-View-Controller architecture with a neat diagram.",answer:"",codeExample:`
MVC in ASP.NET

Let's understand MVC in very simple words.


1. What is MVC?

MVC stands for:

M — Model
V — View
C — Controller

MVC is a software architectural pattern used to divide an
application into three separate parts.

The main purpose is to separate data, user interface, and
application logic.


2. MVC Architecture

                 USER
                   |
                   ↓
             ┌───────────┐
             │ Controller│
             └─────┬─────┘
                   |
          ┌────────┴────────┐
          ↓                 ↓
     ┌─────────┐       ┌─────────┐
     │  Model  │       │  View   │
     └────┬────┘       └────▲────┘
          |                 |
          ↓                 |
       Database             |
          |                 |
          └─────────────────┘


Simple flow:

User
 ↓
Controller
 ↓
Model
 ↓
Database
 ↓
Model
 ↓
Controller
 ↓
View
 ↓
User


3. Model

What is Model?

Model represents the data and business logic of the application.

It communicates with the database and performs operations on data.

Example:

Student
----------------
Id
Name
Marks

The Model can perform:

- Get student
- Add student
- Update student
- Delete student

Easy meaning:

Model = Data + Business Logic


4. View

What is View?

View is the user interface (UI) that the user sees.

It displays information to the user.

Examples:

Student List
-------------------
ID     Name    Marks
1      Raj      80
2      Amit     75

The View can contain:

- HTML
- CSS
- Razor syntax
- Forms
- Buttons
- Tables

Easy meaning:

View = What the user sees


5. Controller

What is Controller?

Controller acts as a middleman between Model and View.

It receives the user's request, calls the required Model, and sends
the result to the View.

Example:

User clicks:
"Show Students"
        ↓
Controller
        ↓
Model
        ↓
Database
        ↓
Model returns data
        ↓
Controller
        ↓
View
        ↓
Student list displayed

Easy meaning:

Controller = Handles requests and controls the flow


6. Real-Life Example

Think about a restaurant.

Customer
   ↓
Waiter
   ↓
Kitchen
   ↓
Food

In MVC:

User
   ↓
Controller
   ↓
Model
   ↓
Database

And then the result is shown through the View.


MVC Part       Simple Example
------------------------------------------
Model          Kitchen / Data
View           Food shown to customer
Controller     Waiter who handles the request


7. Advantages of MVC

1. Separation of concerns

Data, UI, and control logic are separated.


2. Easy maintenance

Changes in one part have less effect on other parts.


3. Reusability

Models and other components can be reused.


4. Easy testing

Business logic can be tested separately.


5. Team development

Different developers can work on Model, View, and Controller
separately.


6. Better organization

The application structure becomes clean and organized.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. Registration Page",answer:"",codeExample:`
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


      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],h=B=>{de(M===B?null:B)};return He.jsxs("div",{className:"app-container",children:[He.jsx("h1",{children:"WAD Interview Questions"}),He.jsx("div",{className:"questions-container",children:W.map(B=>He.jsxs("div",{className:"question-item",children:[He.jsx("button",{className:`question-button ${M===B.id?"active":""}`,onClick:()=>h(B.id),children:B.question}),M===B.id&&He.jsxs("div",{className:"answer-container",children:[He.jsxs("div",{className:"answer",children:[He.jsx("h3",{children:"Answer:"}),He.jsx("p",{children:B.answer})]}),B.codeExample&&He.jsxs("div",{className:"code-example",children:[He.jsx("h3",{children:"Code Example:"}),He.jsx("pre",{children:He.jsx("code",{children:B.codeExample})})]})]})]},B.id))})]})}ah.createRoot(document.getElementById("root")).render(He.jsx(Ef.StrictMode,{children:He.jsx(nh,{})}));
