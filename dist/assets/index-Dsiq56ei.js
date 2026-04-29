(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Rm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fc={exports:{}},wo={},dc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function H_(){if(pp)return ft;pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function v(I,se,Ce){this.props=I,this.context=se,this.refs=w,this.updater=Ce||S}v.prototype.isReactComponent={},v.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function m(){}m.prototype=v.prototype;function N(I,se,Ce){this.props=I,this.context=se,this.refs=w,this.updater=Ce||S}var L=N.prototype=new m;L.constructor=N,T(L,v.prototype),L.isPureReactComponent=!0;var R=Array.isArray,K=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(I,se,Ce){var q,ce={},Se=null,_e=null;if(se!=null)for(q in se.ref!==void 0&&(_e=se.ref),se.key!==void 0&&(Se=""+se.key),se)K.call(se,q)&&!F.hasOwnProperty(q)&&(ce[q]=se[q]);var Ae=arguments.length-2;if(Ae===1)ce.children=Ce;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];ce.children=Ie}if(I&&I.defaultProps)for(q in Ae=I.defaultProps,Ae)ce[q]===void 0&&(ce[q]=Ae[q]);return{$$typeof:s,type:I,key:Se,ref:_e,props:ce,_owner:k.current}}function P(I,se){return{$$typeof:s,type:I.type,key:se,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function B(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ce){return se[Ce]})}var ue=/\/+/g;function ee(I,se){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):se.toString(36)}function fe(I,se,Ce,q,ce){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var _e=!1;if(I===null)_e=!0;else switch(Se){case"string":case"number":_e=!0;break;case"object":switch(I.$$typeof){case s:case e:_e=!0}}if(_e)return _e=I,ce=ce(_e),I=q===""?"."+ee(_e,0):q,R(ce)?(Ce="",I!=null&&(Ce=I.replace(ue,"$&/")+"/"),fe(ce,se,Ce,"",function(Ze){return Ze})):ce!=null&&(C(ce)&&(ce=P(ce,Ce+(!ce.key||_e&&_e.key===ce.key?"":(""+ce.key).replace(ue,"$&/")+"/")+I)),se.push(ce)),1;if(_e=0,q=q===""?".":q+":",R(I))for(var Ae=0;Ae<I.length;Ae++){Se=I[Ae];var Ie=q+ee(Se,Ae);_e+=fe(Se,se,Ce,Ie,ce)}else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Ae=0;!(Se=I.next()).done;)Se=Se.value,Ie=q+ee(Se,Ae++),_e+=fe(Se,se,Ce,Ie,ce);else if(Se==="object")throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(I,se,Ce){if(I==null)return I;var q=[],ce=0;return fe(I,q,"","",function(Se){return se.call(Ce,Se,ce++)}),q}function J(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(Ce){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ce)},function(Ce){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ce)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var Q={current:null},U={transition:null},le={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:U,ReactCurrentOwner:k};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(I,se,Ce){he(I,function(){se.apply(this,arguments)},Ce)},count:function(I){var se=0;return he(I,function(){se++}),se},toArray:function(I){return he(I,function(se){return se})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=v,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=N,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=oe,ft.cloneElement=function(I,se,Ce){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var q=T({},I.props),ce=I.key,Se=I.ref,_e=I._owner;if(se!=null){if(se.ref!==void 0&&(Se=se.ref,_e=k.current),se.key!==void 0&&(ce=""+se.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Ie in se)K.call(se,Ie)&&!F.hasOwnProperty(Ie)&&(q[Ie]=se[Ie]===void 0&&Ae!==void 0?Ae[Ie]:se[Ie])}var Ie=arguments.length-2;if(Ie===1)q.children=Ce;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];q.children=Ae}return{$$typeof:s,type:I.type,key:ce,ref:Se,props:q,_owner:_e}},ft.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=X,ft.createFactory=function(I){var se=X.bind(null,I);return se.type=I,se},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:f,render:I}},ft.isValidElement=C,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:J}},ft.memo=function(I,se){return{$$typeof:g,type:I,compare:se===void 0?null:se}},ft.startTransition=function(I){var se=U.transition;U.transition={};try{I()}finally{U.transition=se}},ft.unstable_act=oe,ft.useCallback=function(I,se){return Q.current.useCallback(I,se)},ft.useContext=function(I){return Q.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return Q.current.useDeferredValue(I)},ft.useEffect=function(I,se){return Q.current.useEffect(I,se)},ft.useId=function(){return Q.current.useId()},ft.useImperativeHandle=function(I,se,Ce){return Q.current.useImperativeHandle(I,se,Ce)},ft.useInsertionEffect=function(I,se){return Q.current.useInsertionEffect(I,se)},ft.useLayoutEffect=function(I,se){return Q.current.useLayoutEffect(I,se)},ft.useMemo=function(I,se){return Q.current.useMemo(I,se)},ft.useReducer=function(I,se,Ce){return Q.current.useReducer(I,se,Ce)},ft.useRef=function(I){return Q.current.useRef(I)},ft.useState=function(I){return Q.current.useState(I)},ft.useSyncExternalStore=function(I,se,Ce){return Q.current.useSyncExternalStore(I,se,Ce)},ft.useTransition=function(){return Q.current.useTransition()},ft.version="18.3.1",ft}var mp;function Ff(){return mp||(mp=1,dc.exports=H_()),dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function V_(){if(gp)return wo;gp=1;var s=Ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var _,y={},x=null,S=null;g!==void 0&&(x=""+g),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(y[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:S,props:y,_owner:a.current}}return wo.Fragment=n,wo.jsx=d,wo.jsxs=d,wo}var _p;function G_(){return _p||(_p=1,fc.exports=V_()),fc.exports}var Y=G_(),Yn=Ff();const W_=Rm(Yn);var ja={},hc={exports:{}},wn={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function X_(){return vp||(vp=1,(function(s){function e(U,le){var oe=U.length;U.push(le);e:for(;0<oe;){var I=oe-1>>>1,se=U[I];if(0<a(se,le))U[I]=le,U[oe]=se,oe=I;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var le=U[0],oe=U.pop();if(oe!==le){U[0]=oe;e:for(var I=0,se=U.length,Ce=se>>>1;I<Ce;){var q=2*(I+1)-1,ce=U[q],Se=q+1,_e=U[Se];if(0>a(ce,oe))Se<se&&0>a(_e,ce)?(U[I]=_e,U[Se]=oe,I=Se):(U[I]=ce,U[q]=oe,I=q);else if(Se<se&&0>a(_e,oe))U[I]=_e,U[Se]=oe,I=Se;else break e}}return le}function a(U,le){var oe=U.sortIndex-le.sortIndex;return oe!==0?oe:U.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],g=[],_=1,y=null,x=3,S=!1,T=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(U){for(var le=n(g);le!==null;){if(le.callback===null)r(g);else if(le.startTime<=U)r(g),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(g)}}function R(U){if(w=!1,L(U),!T)if(n(p)!==null)T=!0,J(K);else{var le=n(g);le!==null&&Q(R,le.startTime-U)}}function K(U,le){T=!1,w&&(w=!1,m(X),X=-1),S=!0;var oe=x;try{for(L(le),y=n(p);y!==null&&(!(y.expirationTime>le)||U&&!B());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var se=I(y.expirationTime<=le);le=s.unstable_now(),typeof se=="function"?y.callback=se:y===n(p)&&r(p),L(le)}else r(p);y=n(p)}if(y!==null)var Ce=!0;else{var q=n(g);q!==null&&Q(R,q.startTime-le),Ce=!1}return Ce}finally{y=null,x=oe,S=!1}}var k=!1,F=null,X=-1,P=5,C=-1;function B(){return!(s.unstable_now()-C<P)}function ue(){if(F!==null){var U=s.unstable_now();C=U;var le=!0;try{le=F(!0,U)}finally{le?ee():(k=!1,F=null)}}else k=!1}var ee;if(typeof N=="function")ee=function(){N(ue)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=ue,ee=function(){he.postMessage(null)}}else ee=function(){v(ue,0)};function J(U){F=U,k||(k=!0,ee())}function Q(U,le){X=v(function(){U(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,J(K))},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(U){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var oe=x;x=le;try{return U()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(U,le){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var oe=x;x=U;try{return le()}finally{x=oe}},s.unstable_scheduleCallback=function(U,le,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,U={id:_++,callback:le,priorityLevel:U,startTime:oe,expirationTime:se,sortIndex:-1},oe>I?(U.sortIndex=oe,e(g,U),n(p)===null&&U===n(g)&&(w?(m(X),X=-1):w=!0,Q(R,oe-I))):(U.sortIndex=se,e(p,U),T||S||(T=!0,J(K))),U},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(U){var le=x;return function(){var oe=x;x=le;try{return U.apply(this,arguments)}finally{x=oe}}}})(mc)),mc}var xp;function j_(){return xp||(xp=1,pc.exports=X_()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function Y_(){if(yp)return wn;yp=1;var s=Ff(),e=j_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:g.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(m,N);v[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(m,N);v[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(m,N);v[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),U=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function se(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ce=!1;function q(t,i){if(!t||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=D);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?se(t):""}function ce(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case J:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function W(t,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function fn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||bt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ye=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ye(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function me(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ae=null,pe=null;function De(t){if(t=uo(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),Pe(t.stateNode,t.type,i))}}function Le(t){ae?pe?pe.push(t):pe=[t]:ae=t}function rt(){if(ae){var t=ae,i=pe;if(pe=ae=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Dt(t,i){return t(i)}function Wt(){}var gt=!1;function vn(t,i,o){if(gt)return t(i,o);gt=!0;try{return Dt(t,i,o)}finally{gt=!1,(ae!==null||pe!==null)&&(Wt(),rt())}}function dn(t,i){var o=t.stateNode;if(o===null)return null;var l=aa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $r=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{$r=!1}function vi(t,i,o,l,c,h,M,D,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(xe){this.onError(xe)}}var xi=!1,Sr=null,Mr=!1,Wi=null,Ho={onError:function(t){xi=!0,Sr=t}};function Kr(t,i,o,l,c,h,M,D,O){xi=!1,Sr=null,vi.apply(Ho,arguments)}function Vo(t,i,o,l,c,h,M,D,O){if(Kr.apply(this,arguments),xi){if(xi){var te=Sr;xi=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Wi=te)}}function ci(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Go(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Wo(t){if(ci(t)!==t)throw Error(n(188))}function Nl(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Wo(c),t;if(h===l)return Wo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Nl(t),t!==null?V(t):null}function V(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=V(t);if(i!==null)return i;t=t.sibling}return null}var ne=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,G=e.unstable_shouldYield,we=e.unstable_requestPaint,Ee=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,St=null,pt=null;function nn(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(St,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,je=Math.log,$n=Math.LN2;function xt(t){return t>>>=0,t===0?32:31-(je(t)/$n|0)|0}var rn=64,Kn=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=Xt(D):(h&=M,h!==0&&(l=Xt(h)))}else M=o&~c,M!==0?l=Xt(M):h!==0&&(l=Xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Rt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),D=1<<M,O=c[M];O===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Rt(D,i)):O<=i&&(t.expiredLanes|=D),h&=~D}}function yi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hn(){var t=rn;return rn<<=1,(rn&4194240)===0&&(rn=64),t}function On(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function xn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Xo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Il(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var wt=0;function jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Yf,Ul,qf,$f,Kf,Fl=!1,jo=[],Xi=null,ji=null,Yi=null,Ys=new Map,qs=new Map,qi=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function cg(t,i,o,l,c){switch(i){case"focusin":return Xi=$s(Xi,t,i,o,l,c),!0;case"dragenter":return ji=$s(ji,t,i,o,l,c),!0;case"mouseover":return Yi=$s(Yi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Ys.set(h,$s(Ys.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,$s(qs.get(h)||null,t,i,o,l,c)),!0}return!1}function Qf(t){var i=Er(t.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Go(o),i!==null){t.blockedOn=i,Kf(t.priority,function(){qf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Et=l,o.target.dispatchEvent(l),Et=null}else return i=uo(o),i!==null&&Ul(i),t.blockedOn=o,!1;i.shift()}return!0}function Jf(t,i,o){Yo(t)&&o.delete(i)}function fg(){Fl=!1,Xi!==null&&Yo(Xi)&&(Xi=null),ji!==null&&Yo(ji)&&(ji=null),Yi!==null&&Yo(Yi)&&(Yi=null),Ys.forEach(Jf),qs.forEach(Jf)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Fl||(Fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fg)))}function Zs(t){function i(c){return Ks(c,t)}if(0<jo.length){Ks(jo[0],t);for(var o=1;o<jo.length;o++){var l=jo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Ks(Xi,t),ji!==null&&Ks(ji,t),Yi!==null&&Ks(Yi,t),Ys.forEach(i),qs.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)Qf(o),o.blockedOn===null&&qi.shift()}var Zr=R.ReactCurrentBatchConfig,qo=!0;function dg(t,i,o,l){var c=wt,h=Zr.transition;Zr.transition=null;try{wt=1,Ol(t,i,o,l)}finally{wt=c,Zr.transition=h}}function hg(t,i,o,l){var c=wt,h=Zr.transition;Zr.transition=null;try{wt=4,Ol(t,i,o,l)}finally{wt=c,Zr.transition=h}}function Ol(t,i,o,l){if(qo){var c=kl(t,i,o,l);if(c===null)tu(t,i,l,$o,o),Zf(t,l);else if(cg(c,t,i,o,l))l.stopPropagation();else if(Zf(t,l),i&4&&-1<ug.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&Yf(h),h=kl(t,i,o,l),h===null&&tu(t,i,l,$o,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else tu(t,i,l,null,o)}}var $o=null;function kl(t,i,o,l){if($o=null,t=H(l),t=Er(t),t!==null)if(i=ci(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Go(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function ed(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var $i=null,Bl=null,Ko=null;function td(){if(Ko)return Ko;var t,i=Bl,o=i.length,l,c="value"in $i?$i.value:$i.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Ko=c.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function nd(){return!1}function bn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:nd,this.isPropagationStopped=nd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=bn(Qr),Qs=oe({},Qr,{view:0,detail:0}),pg=bn(Qs),Hl,Vl,Js,Jo=oe({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Hl=t.screenX-Js.screenX,Vl=t.screenY-Js.screenY):Vl=Hl=0,Js=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),id=bn(Jo),mg=oe({},Jo,{dataTransfer:0}),gg=bn(mg),_g=oe({},Qs,{relatedTarget:0}),Gl=bn(_g),vg=oe({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),xg=bn(vg),yg=oe({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sg=bn(yg),Mg=oe({},Qr,{data:0}),rd=bn(Mg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ag(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wg[t])?!!i[t]:!1}function Wl(){return Ag}var Cg=oe({},Qs,{key:function(t){if(t.key){var i=Eg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rg=bn(Cg),Pg=oe({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=bn(Pg),bg=oe({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),Lg=bn(bg),Dg=oe({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=bn(Dg),Ig=oe({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=bn(Ig),Fg=[9,13,27,32],Xl=f&&"CompositionEvent"in window,eo=null;f&&"documentMode"in document&&(eo=document.documentMode);var Og=f&&"TextEvent"in window&&!eo,od=f&&(!Xl||eo&&8<eo&&11>=eo),ad=" ",ld=!1;function ud(t,i){switch(t){case"keyup":return Fg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function kg(t,i){switch(t){case"compositionend":return cd(i);case"keypress":return i.which!==32?null:(ld=!0,ad);case"textInput":return t=i.data,t===ad&&ld?null:t;default:return null}}function Bg(t,i){if(Jr)return t==="compositionend"||!Xl&&ud(t,i)?(t=td(),Ko=Bl=$i=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return od&&i.locale!=="ko"?null:i.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!zg[t.type]:i==="textarea"}function dd(t,i,o,l){Le(l),i=ra(i,"onChange"),0<i.length&&(o=new zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Hg(t){bd(t,0)}function ea(t){var i=rs(t);if(ht(i))return t}function Vg(t,i){if(t==="change")return i}var hd=!1;if(f){var jl;if(f){var Yl="oninput"in document;if(!Yl){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),Yl=typeof pd.oninput=="function"}jl=Yl}else jl=!1;hd=jl&&(!document.documentMode||9<document.documentMode)}function md(){to&&(to.detachEvent("onpropertychange",gd),no=to=null)}function gd(t){if(t.propertyName==="value"&&ea(no)){var i=[];dd(i,no,t,H(t)),vn(Hg,i)}}function Gg(t,i,o){t==="focusin"?(md(),to=i,no=o,to.attachEvent("onpropertychange",gd)):t==="focusout"&&md()}function Wg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(no)}function Xg(t,i){if(t==="click")return ea(i)}function jg(t,i){if(t==="input"||t==="change")return ea(i)}function Yg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Yg;function io(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function _d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vd(t,i){var o=_d(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_d(o)}}function xd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yd(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=bt(t.document)}return i}function ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function qg(t){var i=yd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&xd(o.ownerDocument.documentElement,o)){if(l!==null&&ql(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=vd(o,h);var M=vd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $g=f&&"documentMode"in document&&11>=document.documentMode,es=null,$l=null,ro=null,Kl=!1;function Sd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Kl||es==null||es!==bt(l)||(l=es,"selectionStart"in l&&ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=ra($l,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=es)))}function ta(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ts={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Zl={},Md={};f&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function na(t){if(Zl[t])return Zl[t];if(!ts[t])return t;var i=ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Md)return Zl[t]=i[o];return t}var Ed=na("animationend"),Td=na("animationiteration"),wd=na("animationstart"),Ad=na("transitionend"),Cd=new Map,Rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Cd.set(t,i),u(i,[t])}for(var Ql=0;Ql<Rd.length;Ql++){var Jl=Rd[Ql],Kg=Jl.toLowerCase(),Zg=Jl[0].toUpperCase()+Jl.slice(1);Ki(Kg,"on"+Zg)}Ki(Ed,"onAnimationEnd"),Ki(Td,"onAnimationIteration"),Ki(wd,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Ad,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Pd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Vo(l,i,void 0,t),t.currentTarget=null}function bd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],O=D.instance,te=D.currentTarget;if(D=D.listener,O!==h&&c.isPropagationStopped())break e;Pd(c,D,te),h=O}else for(M=0;M<l.length;M++){if(D=l[M],O=D.instance,te=D.currentTarget,D=D.listener,O!==h&&c.isPropagationStopped())break e;Pd(c,D,te),h=O}}}if(Mr)throw t=Wi,Mr=!1,Wi=null,t}function Nt(t,i){var o=i[au];o===void 0&&(o=i[au]=new Set);var l=t+"__bubble";o.has(l)||(Ld(i,t,2,!1),o.add(l))}function eu(t,i,o){var l=0;i&&(l|=4),Ld(o,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ia]){t[ia]=!0,r.forEach(function(o){o!=="selectionchange"&&(Qg.has(o)||eu(o,!1,t),eu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,eu("selectionchange",!1,i))}}function Ld(t,i,o,l){switch(ed(i)){case 1:var c=dg;break;case 4:c=hg;break;default:c=Ol}o=c.bind(null,i,o,t),c=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function tu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Er(D),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}D=D.parentNode}}l=l.return}vn(function(){var te=h,xe=H(o),ye=[];e:{var ge=Cd.get(t);if(ge!==void 0){var Ne=zl,Be=t;switch(t){case"keypress":if(Zo(o)===0)break e;case"keydown":case"keyup":Ne=Rg;break;case"focusin":Be="focus",Ne=Gl;break;case"focusout":Be="blur",Ne=Gl;break;case"beforeblur":case"afterblur":Ne=Gl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Lg;break;case Ed:case Td:case wd:Ne=xg;break;case Ad:Ne=Ng;break;case"scroll":Ne=pg;break;case"wheel":Ne=Ug;break;case"copy":case"cut":case"paste":Ne=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=sd}var He=(i&4)!==0,zt=!He&&t==="scroll",j=He?ge!==null?ge+"Capture":null:ge;He=[];for(var z=te,$;z!==null;){$=z;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,j!==null&&(Te=dn(z,j),Te!=null&&He.push(ao(z,Te,$)))),zt)break;z=z.return}0<He.length&&(ge=new Ne(ge,Be,null,o,xe),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",ge&&o!==Et&&(Be=o.relatedTarget||o.fromElement)&&(Er(Be)||Be[Si]))break e;if((Ne||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Be=o.relatedTarget||o.toElement,Ne=te,Be=Be?Er(Be):null,Be!==null&&(zt=ci(Be),Be!==zt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=te),Ne!==Be)){if(He=id,Te="onMouseLeave",j="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(He=sd,Te="onPointerLeave",j="onPointerEnter",z="pointer"),zt=Ne==null?ge:rs(Ne),$=Be==null?ge:rs(Be),ge=new He(Te,z+"leave",Ne,o,xe),ge.target=zt,ge.relatedTarget=$,Te=null,Er(xe)===te&&(He=new He(j,z+"enter",Be,o,xe),He.target=$,He.relatedTarget=zt,Te=He),zt=Te,Ne&&Be)t:{for(He=Ne,j=Be,z=0,$=He;$;$=ns($))z++;for($=0,Te=j;Te;Te=ns(Te))$++;for(;0<z-$;)He=ns(He),z--;for(;0<$-z;)j=ns(j),$--;for(;z--;){if(He===j||j!==null&&He===j.alternate)break t;He=ns(He),j=ns(j)}He=null}else He=null;Ne!==null&&Dd(ye,ge,Ne,He,!1),Be!==null&&zt!==null&&Dd(ye,zt,Be,He,!0)}}e:{if(ge=te?rs(te):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Xe=Vg;else if(fd(ge))if(hd)Xe=jg;else{Xe=Wg;var $e=Gg}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Xg);if(Xe&&(Xe=Xe(t,te))){dd(ye,Xe,o,xe);break e}$e&&$e(t,ge,te),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&Tt(ge,"number",ge.value)}switch($e=te?rs(te):window,t){case"focusin":(fd($e)||$e.contentEditable==="true")&&(es=$e,$l=te,ro=null);break;case"focusout":ro=$l=es=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Sd(ye,o,xe);break;case"selectionchange":if($g)break;case"keydown":case"keyup":Sd(ye,o,xe)}var Ke;if(Xl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Jr?ud(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(od&&o.locale!=="ko"&&(Jr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Jr&&(Ke=td()):($i=xe,Bl="value"in $i?$i.value:$i.textContent,Jr=!0)),$e=ra(te,tt),0<$e.length&&(tt=new rd(tt,t,null,o,xe),ye.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=cd(o),Ke!==null&&(tt.data=Ke)))),(Ke=Og?kg(t,o):Bg(t,o))&&(te=ra(te,"onBeforeInput"),0<te.length&&(xe=new rd("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:te}),xe.data=Ke))}bd(ye,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ra(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=dn(t,o),h!=null&&l.unshift(ao(t,h,c)),h=dn(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,O=D.alternate,te=D.stateNode;if(O!==null&&O===l)break;D.tag===5&&te!==null&&(D=te,c?(O=dn(o,h),O!=null&&M.unshift(ao(o,O,D))):c||(O=dn(o,h),O!=null&&M.push(ao(o,O,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Jg=/\r\n?/g,e_=/\u0000|\uFFFD/g;function Nd(t){return(typeof t=="string"?t:""+t).replace(Jg,`
`).replace(e_,"")}function sa(t,i,o){if(i=Nd(i),Nd(t)!==i&&o)throw Error(n(425))}function oa(){}var nu=null,iu=null;function ru(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,t_=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,n_=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(t){return Id.resolve(null).then(t).catch(i_)}:su;function i_(t){setTimeout(function(){throw t})}function ou(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Zs(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),di="__reactFiber$"+is,lo="__reactProps$"+is,Si="__reactContainer$"+is,au="__reactEvents$"+is,r_="__reactListeners$"+is,s_="__reactHandles$"+is;function Er(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Si]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Ud(t);t!==null;){if(o=t[di])return o;t=Ud(t)}return i}t=o,o=t.parentNode}return null}function uo(t){return t=t[di]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[lo]||null}var lu=[],ss=-1;function Qi(t){return{current:t}}function It(t){0>ss||(t.current=lu[ss],lu[ss]=null,ss--)}function Lt(t,i){ss++,lu[ss]=t.current,t.current=i}var Ji={},sn=Qi(Ji),yn=Qi(!1),Tr=Ji;function os(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Sn(t){return t=t.childContextTypes,t!=null}function la(){It(yn),It(sn)}function Fd(t,i,o){if(sn.current!==Ji)throw Error(n(168));Lt(sn,i),Lt(yn,o)}function Od(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,_e(t)||"Unknown",c));return oe({},o,l)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=sn.current,Lt(sn,t),Lt(yn,yn.current),!0}function kd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Od(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(yn),It(sn),Lt(sn,t)):It(yn),Lt(yn,o)}var Mi=null,ca=!1,uu=!1;function Bd(t){Mi===null?Mi=[t]:Mi.push(t)}function o_(t){ca=!0,Bd(t)}function er(){if(!uu&&Mi!==null){uu=!0;var t=0,i=wt;try{var o=Mi;for(wt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Mi=null,ca=!1}catch(c){throw Mi!==null&&(Mi=Mi.slice(t+1)),ne(ze,er),c}finally{wt=i,uu=!1}}return null}var as=[],ls=0,fa=null,da=0,kn=[],Bn=0,wr=null,Ei=1,Ti="";function Ar(t,i){as[ls++]=da,as[ls++]=fa,fa=t,da=i}function zd(t,i,o){kn[Bn++]=Ei,kn[Bn++]=Ti,kn[Bn++]=wr,wr=t;var l=Ei;t=Ti;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ei=1<<32-st(i)+c|o<<c|l,Ti=h+t}else Ei=1<<h|o<<c|l,Ti=t}function cu(t){t.return!==null&&(Ar(t,1),zd(t,1,0))}function fu(t){for(;t===fa;)fa=as[--ls],as[ls]=null,da=as[--ls],as[ls]=null;for(;t===wr;)wr=kn[--Bn],kn[Bn]=null,Ti=kn[--Bn],kn[Bn]=null,Ei=kn[--Bn],kn[Bn]=null}var Ln=null,Dn=null,Ut=!1,Qn=null;function Hd(t,i){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Vd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Ln=t,Dn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Ln=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Ln=t,Dn=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(Ut){var i=Dn;if(i){var o=i;if(!Vd(t,i)){if(du(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Ln;i&&Vd(t,i)?Hd(l,o):(t.flags=t.flags&-4097|2,Ut=!1,Ln=t)}}else{if(du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ut=!1,Ln=t}}}function Gd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function ha(t){if(t!==Ln)return!1;if(!Ut)return Gd(t),Ut=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ru(t.type,t.memoizedProps)),i&&(i=Dn)){if(du(t))throw Wd(),Error(n(418));for(;i;)Hd(t,i),i=Zi(i.nextSibling)}if(Gd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Dn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=Ln?Zi(t.stateNode.nextSibling):null;return!0}function Wd(){for(var t=Dn;t;)t=Zi(t.nextSibling)}function us(){Dn=Ln=null,Ut=!1}function pu(t){Qn===null?Qn=[t]:Qn.push(t)}var a_=R.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Xd(t){var i=t._init;return i(t._payload)}function jd(t){function i(j,z){if(t){var $=j.deletions;$===null?(j.deletions=[z],j.flags|=16):$.push(z)}}function o(j,z){if(!t)return null;for(;z!==null;)i(j,z),z=z.sibling;return null}function l(j,z){for(j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function c(j,z){return j=lr(j,z),j.index=0,j.sibling=null,j}function h(j,z,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<z?(j.flags|=2,z):$):(j.flags|=2,z)):(j.flags|=1048576,z)}function M(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,z,$,Te){return z===null||z.tag!==6?(z=sc($,j.mode,Te),z.return=j,z):(z=c(z,$),z.return=j,z)}function O(j,z,$,Te){var Xe=$.type;return Xe===F?xe(j,z,$.props.children,Te,$.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Xd(Xe)===z.type)?(Te=c(z,$.props),Te.ref=co(j,z,$),Te.return=j,Te):(Te=ka($.type,$.key,$.props,null,j.mode,Te),Te.ref=co(j,z,$),Te.return=j,Te)}function te(j,z,$,Te){return z===null||z.tag!==4||z.stateNode.containerInfo!==$.containerInfo||z.stateNode.implementation!==$.implementation?(z=oc($,j.mode,Te),z.return=j,z):(z=c(z,$.children||[]),z.return=j,z)}function xe(j,z,$,Te,Xe){return z===null||z.tag!==7?(z=Ir($,j.mode,Te,Xe),z.return=j,z):(z=c(z,$),z.return=j,z)}function ye(j,z,$){if(typeof z=="string"&&z!==""||typeof z=="number")return z=sc(""+z,j.mode,$),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case K:return $=ka(z.type,z.key,z.props,null,j.mode,$),$.ref=co(j,null,z),$.return=j,$;case k:return z=oc(z,j.mode,$),z.return=j,z;case J:var Te=z._init;return ye(j,Te(z._payload),$)}if(Ye(z)||le(z))return z=Ir(z,j.mode,$,null),z.return=j,z;pa(j,z)}return null}function ge(j,z,$,Te){var Xe=z!==null?z.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:D(j,z,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case K:return $.key===Xe?O(j,z,$,Te):null;case k:return $.key===Xe?te(j,z,$,Te):null;case J:return Xe=$._init,ge(j,z,Xe($._payload),Te)}if(Ye($)||le($))return Xe!==null?null:xe(j,z,$,Te,null);pa(j,$)}return null}function Ne(j,z,$,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return j=j.get($)||null,D(z,j,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case K:return j=j.get(Te.key===null?$:Te.key)||null,O(z,j,Te,Xe);case k:return j=j.get(Te.key===null?$:Te.key)||null,te(z,j,Te,Xe);case J:var $e=Te._init;return Ne(j,z,$,$e(Te._payload),Xe)}if(Ye(Te)||le(Te))return j=j.get($)||null,xe(z,j,Te,Xe,null);pa(z,Te)}return null}function Be(j,z,$,Te){for(var Xe=null,$e=null,Ke=z,tt=z=0,Qt=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(Qt=Ke,Ke=null):Qt=Ke.sibling;var yt=ge(j,Ke,$[tt],Te);if(yt===null){Ke===null&&(Ke=Qt);break}t&&Ke&&yt.alternate===null&&i(j,Ke),z=h(yt,z,tt),$e===null?Xe=yt:$e.sibling=yt,$e=yt,Ke=Qt}if(tt===$.length)return o(j,Ke),Ut&&Ar(j,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=ye(j,$[tt],Te),Ke!==null&&(z=h(Ke,z,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ut&&Ar(j,tt),Xe}for(Ke=l(j,Ke);tt<$.length;tt++)Qt=Ne(Ke,j,tt,$[tt],Te),Qt!==null&&(t&&Qt.alternate!==null&&Ke.delete(Qt.key===null?tt:Qt.key),z=h(Qt,z,tt),$e===null?Xe=Qt:$e.sibling=Qt,$e=Qt);return t&&Ke.forEach(function(ur){return i(j,ur)}),Ut&&Ar(j,tt),Xe}function He(j,z,$,Te){var Xe=le($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var $e=Xe=null,Ke=z,tt=z=0,Qt=null,yt=$.next();Ke!==null&&!yt.done;tt++,yt=$.next()){Ke.index>tt?(Qt=Ke,Ke=null):Qt=Ke.sibling;var ur=ge(j,Ke,yt.value,Te);if(ur===null){Ke===null&&(Ke=Qt);break}t&&Ke&&ur.alternate===null&&i(j,Ke),z=h(ur,z,tt),$e===null?Xe=ur:$e.sibling=ur,$e=ur,Ke=Qt}if(yt.done)return o(j,Ke),Ut&&Ar(j,tt),Xe;if(Ke===null){for(;!yt.done;tt++,yt=$.next())yt=ye(j,yt.value,Te),yt!==null&&(z=h(yt,z,tt),$e===null?Xe=yt:$e.sibling=yt,$e=yt);return Ut&&Ar(j,tt),Xe}for(Ke=l(j,Ke);!yt.done;tt++,yt=$.next())yt=Ne(Ke,j,tt,yt.value,Te),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?tt:yt.key),z=h(yt,z,tt),$e===null?Xe=yt:$e.sibling=yt,$e=yt);return t&&Ke.forEach(function(z_){return i(j,z_)}),Ut&&Ar(j,tt),Xe}function zt(j,z,$,Te){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case K:e:{for(var Xe=$.key,$e=z;$e!==null;){if($e.key===Xe){if(Xe=$.type,Xe===F){if($e.tag===7){o(j,$e.sibling),z=c($e,$.props.children),z.return=j,j=z;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&Xd(Xe)===$e.type){o(j,$e.sibling),z=c($e,$.props),z.ref=co(j,$e,$),z.return=j,j=z;break e}o(j,$e);break}else i(j,$e);$e=$e.sibling}$.type===F?(z=Ir($.props.children,j.mode,Te,$.key),z.return=j,j=z):(Te=ka($.type,$.key,$.props,null,j.mode,Te),Te.ref=co(j,z,$),Te.return=j,j=Te)}return M(j);case k:e:{for($e=$.key;z!==null;){if(z.key===$e)if(z.tag===4&&z.stateNode.containerInfo===$.containerInfo&&z.stateNode.implementation===$.implementation){o(j,z.sibling),z=c(z,$.children||[]),z.return=j,j=z;break e}else{o(j,z);break}else i(j,z);z=z.sibling}z=oc($,j.mode,Te),z.return=j,j=z}return M(j);case J:return $e=$._init,zt(j,z,$e($._payload),Te)}if(Ye($))return Be(j,z,$,Te);if(le($))return He(j,z,$,Te);pa(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,z!==null&&z.tag===6?(o(j,z.sibling),z=c(z,$),z.return=j,j=z):(o(j,z),z=sc($,j.mode,Te),z.return=j,j=z),M(j)):o(j,z)}return zt}var cs=jd(!0),Yd=jd(!1),ma=Qi(null),ga=null,fs=null,mu=null;function gu(){mu=fs=ga=null}function _u(t){var i=ma.current;It(ma),t._currentValue=i}function vu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ds(t,i){ga=t,mu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(mu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(ga===null)throw Error(n(308));fs=t,ga.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Cr=null;function xu(t){Cr===null?Cr=[t]:Cr.push(t)}function qd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,xu(i)):(o.next=c.next,c.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,wi(t,o)}return c=l.interleaved,c===null?(i.next=i,xu(l)):(i.next=c.next,c.next=i),l.interleaved=i,wi(t,o)}function _a(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Il(t,o)}}function Kd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function va(t,i,o,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var O=D,te=O.next;O.next=null,M===null?h=te:M.next=te,M=O;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=te:D.next=te,xe.lastBaseUpdate=O))}if(h!==null){var ye=c.baseState;M=0,xe=te=O=null,D=h;do{var ge=D.lane,Ne=D.eventTime;if((l&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=t,He=D;switch(ge=i,Ne=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(Ne,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ne,ye,ge):Be,ge==null)break e;ye=oe({},ye,ge);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[D]:ge.push(D))}else Ne={eventTime:Ne,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(te=xe=Ne,O=ye):xe=xe.next=Ne,M|=ge;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(xe===null&&(O=ye),c.baseState=O,c.firstBaseUpdate=te,c.lastBaseUpdate=xe,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);br|=M,t.lanes=M,t.memoizedState=ye}}function Zd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},hi=Qi(fo),ho=Qi(fo),po=Qi(fo);function Rr(t){if(t===fo)throw Error(n(174));return t}function Su(t,i){switch(Lt(po,i),Lt(ho,t),Lt(hi,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(hi),Lt(hi,i)}function hs(){It(hi),It(ho),It(po)}function Qd(t){Rr(po.current);var i=Rr(hi.current),o=Ve(i,t.type);i!==o&&(Lt(ho,t),Lt(hi,o))}function Mu(t){ho.current===t&&(It(hi),It(ho))}var Ft=Qi(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Eu=[];function Tu(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var ya=R.ReactCurrentDispatcher,wu=R.ReactCurrentBatchConfig,Pr=0,Ot=null,jt=null,Kt=null,Sa=!1,mo=!1,go=0,l_=0;function on(){throw Error(n(321))}function Au(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function Cu(t,i,o,l,c,h){if(Pr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ya.current=t===null||t.memoizedState===null?d_:h_,t=o(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,Kt=jt=null,i.updateQueue=null,ya.current=p_,t=o(l,c)}while(mo)}if(ya.current=Ta,i=jt!==null&&jt.next!==null,Pr=0,Kt=jt=Ot=null,Sa=!1,i)throw Error(n(300));return t}function Ru(){var t=go!==0;return go=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Hn(){if(jt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=Kt===null?Ot.memoizedState:Kt.next;if(i!==null)Kt=i,jt=t;else{if(t===null)throw Error(n(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function _o(t,i){return typeof i=="function"?i(t):i}function Pu(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=jt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,O=null,te=h;do{var xe=te.lane;if((Pr&xe)===xe)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(D=O=ye,M=l):O=O.next=ye,Ot.lanes|=xe,br|=xe}te=te.next}while(te!==null&&te!==h);O===null?M=l:O.next=D,Zn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,br|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bu(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Zn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Jd(){}function eh(t,i){var o=Ot,l=Hn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,Mn=!0),l=l.queue,Lu(ih.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Kt!==null&&Kt.memoizedState.tag&1){if(o.flags|=2048,vo(9,nh.bind(null,o,l,c,i),void 0,null),Zt===null)throw Error(n(349));(Pr&30)!==0||th(o,i,c)}return c}function th(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function nh(t,i,o,l){i.value=o,i.getSnapshot=l,rh(i)&&sh(t)}function ih(t,i,o){return o(function(){rh(i)&&sh(t)})}function rh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function sh(t){var i=wi(t,1);i!==null&&ni(i,t,1,-1)}function oh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=f_.bind(null,Ot,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function ah(){return Hn().memoizedState}function Ma(t,i,o,l){var c=pi();Ot.flags|=t,c.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Ea(t,i,o,l){var c=Hn();l=l===void 0?null:l;var h=void 0;if(jt!==null){var M=jt.memoizedState;if(h=M.destroy,l!==null&&Au(l,M.deps)){c.memoizedState=vo(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=vo(1|i,o,h,l)}function lh(t,i){return Ma(8390656,8,t,i)}function Lu(t,i){return Ea(2048,8,t,i)}function uh(t,i){return Ea(4,2,t,i)}function ch(t,i){return Ea(4,4,t,i)}function fh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dh(t,i,o){return o=o!=null?o.concat([t]):null,Ea(4,4,fh.bind(null,i,t),o)}function Du(){}function hh(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Au(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function ph(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Au(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function mh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):(Zn(o,i)||(o=hn(),Ot.lanes|=o,br|=o,t.baseState=!0),i)}function u_(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var l=wu.transition;wu.transition={};try{t(!1),i()}finally{wt=o,wu.transition=l}}function gh(){return Hn().memoizedState}function c_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},_h(t))vh(i,o);else if(o=qd(t,i,o,l),o!==null){var c=mn();ni(o,t,l,c),xh(o,i,l)}}function f_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(_h(t))vh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,Zn(D,M)){var O=i.interleaved;O===null?(c.next=c,xu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}o=qd(t,i,c,l),o!==null&&(c=mn(),ni(o,t,l,c),xh(o,i,l))}}function _h(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function vh(t,i){mo=Sa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function xh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Il(t,o)}}var Ta={readContext:zn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},d_={readContext:zn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:lh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ma(4194308,4,fh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=c_.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:oh,useDebugValue:Du,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=oh(!1),i=t[0];return t=u_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=pi();if(Ut){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Zt===null)throw Error(n(349));(Pr&30)!==0||th(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,lh(ih.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,nh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=pi(),i=Zt.identifierPrefix;if(Ut){var o=Ti,l=Ei;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=l_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},h_={readContext:zn,useCallback:hh,useContext:zn,useEffect:Lu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Pu,useRef:ah,useState:function(){return Pu(_o)},useDebugValue:Du,useDeferredValue:function(t){var i=Hn();return mh(i,jt.memoizedState,t)},useTransition:function(){var t=Pu(_o)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1},p_={readContext:zn,useCallback:hh,useContext:zn,useEffect:Lu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:bu,useRef:ah,useState:function(){return bu(_o)},useDebugValue:Du,useDeferredValue:function(t){var i=Hn();return jt===null?i.memoizedState=t:mh(i,jt.memoizedState,t)},useTransition:function(){var t=bu(_o)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Nu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var wa={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=mn(),c=or(t),h=Ai(l,c);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ni(i,t,c,l),_a(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=mn(),c=or(t),h=Ai(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ni(i,t,c,l),_a(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=mn(),l=or(t),c=Ai(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ni(i,t,l,o),_a(i,t,l))}};function yh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(c,h):!0}function Sh(t,i,o){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=zn(h):(c=Sn(i)?Tr:sn.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Mh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function Iu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},yu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=zn(h):(h=Sn(i)?Tr:sn.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Nu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&wa.enqueueReplaceState(c,c.state,null),va(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Uu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Fu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var m_=typeof WeakMap=="function"?WeakMap:Map;function Eh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Da||(Da=!0,Zu=l),Fu(t,i)},o}function Th(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Fu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Fu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function wh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new m_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=P_.bind(null,t,i,o),i.then(t,t))}function Ah(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ch(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var g_=R.ReactCurrentOwner,Mn=!1;function pn(t,i,o,l){i.child=t===null?Yd(i,null,o,l):cs(i,t.child,o,l)}function Rh(t,i,o,l,c){o=o.render;var h=i.ref;return ds(i,c),l=Cu(t,i,o,l,h,c),o=Ru(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Ut&&o&&cu(i),i.flags|=1,pn(t,i,l,c),i.child)}function Ph(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!rc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,bh(t,i,h,l,c)):(t=ka(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return Ci(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function bh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ci(t,i,c)}return Ou(t,i,o,l,c)}function Lh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(gs,Nn),Nn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(gs,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(gs,Nn),Nn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(gs,Nn),Nn|=l;return pn(t,i,c,o),i.child}function Dh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,o,l,c){var h=Sn(o)?Tr:sn.current;return h=os(i,h),ds(i,c),o=Cu(t,i,o,l,h,c),l=Ru(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Ut&&l&&cu(i),i.flags|=1,pn(t,i,o,c),i.child)}function Nh(t,i,o,l,c){if(Sn(o)){var h=!0;ua(i)}else h=!1;if(ds(i,c),i.stateNode===null)Ca(t,i),Sh(i,o,l),Iu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var O=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=zn(te):(te=Sn(o)?Tr:sn.current,te=os(i,te));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||O!==te)&&Mh(i,M,l,te),tr=!1;var ge=i.memoizedState;M.state=ge,va(i,l,M,c),O=i.memoizedState,D!==l||ge!==O||yn.current||tr?(typeof xe=="function"&&(Nu(i,o,xe,l),O=i.memoizedState),(D=tr||yh(i,o,D,l,ge,O,te))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,$d(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:Jn(i.type,D),M.props=te,ye=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=zn(O):(O=Sn(o)?Tr:sn.current,O=os(i,O));var Ne=o.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||ge!==O)&&Mh(i,M,l,O),tr=!1,ge=i.memoizedState,M.state=ge,va(i,l,M,c);var Be=i.memoizedState;D!==ye||ge!==Be||yn.current||tr?(typeof Ne=="function"&&(Nu(i,o,Ne,l),Be=i.memoizedState),(te=tr||yh(i,o,te,l,ge,Be,O)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return ku(t,i,o,l,h,c)}function ku(t,i,o,l,c,h){Dh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&kd(i,o,!1),Ci(t,i,h);l=i.stateNode,g_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,D,h)):pn(t,i,D,h),i.memoizedState=l.state,c&&kd(i,o,!0),i.child}function Ih(t){var i=t.stateNode;i.pendingContext?Fd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Fd(t,i.context,!1),Su(t,i.containerInfo)}function Uh(t,i,o,l,c){return us(),pu(c),i.flags|=256,pn(t,i,o,l),i.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ft,c&1),t===null)return hu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ba(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=zu(o),i.memoizedState=Bu,t):Hu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return __(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=lr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?zu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Bu,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Hu(t,i){return i=Ba({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,o,l){return l!==null&&pu(l),cs(i,t.child,null,o),t=Hu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function __(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Uu(Error(n(422))),Aa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ba({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=zu(M),i.memoizedState=Bu,h);if((i.mode&1)===0)return Aa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Uu(h,l,void 0),Aa(t,i,M,l)}if(D=(M&t.childLanes)!==0,Mn||D){if(l=Zt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,wi(t,c),ni(l,t,c,-1))}return ic(),l=Uu(Error(n(421))),Aa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=b_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Dn=Zi(c.nextSibling),Ln=i,Ut=!0,Qn=null,t!==null&&(kn[Bn++]=Ei,kn[Bn++]=Ti,kn[Bn++]=wr,Ei=t.id,Ti=t.overflow,wr=i),i=Hu(i,l.children),i.flags|=4096,i)}function Oh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vu(t.return,i,o)}function Vu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function kh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(pn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,o,i);else if(t.tag===19)Oh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&xa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Vu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&xa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Vu(i,!0,o,null,h);break;case"together":Vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function v_(t,i,o){switch(i.tag){case 3:Ih(i),us();break;case 5:Qd(i);break;case 1:Sn(i.type)&&ua(i);break;case 4:Su(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Fh(t,i,o):(Lt(Ft,Ft.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return kh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Lh(t,i,o)}return Ci(t,i,o)}var Bh,Gu,zh,Hh;Bh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Gu=function(){},zh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(hi.current);var h=null;switch(o){case"input":c=W(t,c),l=W(t,l),h=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}ct(o,l);var M;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var D=c[te];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var O=l[te];if(D=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&O!==D&&(O!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&D[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(h=h||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Nt("scroll",t),h||D===O||(h=[])):(h=h||[]).push(te,O))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},Hh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function x_(t,i,o){var l=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return Sn(i.type)&&la(),an(i),null;case 3:return l=i.stateNode,hs(),It(yn),It(sn),Tu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(ec(Qn),Qn=null))),Gu(t,i),an(i),null;case 5:Mu(i);var c=Rr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)zh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return an(i),null}if(t=Rr(hi.current),ha(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[di]=i,l[lo]=h,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)Nt(so[c],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":fn(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":Z(l,h),Nt("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":At(l),qe(l,h,!0);break;case"textarea":At(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=oa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[lo]=l,Bh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),c=l;break;case"iframe":case"object":case"embed":Nt("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)Nt(so[c],t);c=l;break;case"source":Nt("error",t),c=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),c=l;break;case"details":Nt("toggle",t),c=l;break;case"input":fn(t,l),c=W(t,l),Nt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),Nt("invalid",t);break;default:c=l}ct(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var O=D[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",t):O!=null&&L(t,h,O,M))}switch(o){case"input":At(t),qe(t,l,!1);break;case"textarea":At(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return an(i),null;case 6:if(t&&i.stateNode!=null)Hh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(po.current),Rr(hi.current),ha(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(h=l.nodeValue!==o)&&(t=Ln,t!==null))switch(t.tag){case 3:sa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return an(i),null;case 13:if(It(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wd(),us(),i.flags|=98560,h=!1;else if(h=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),h=!1}else Qn!==null&&(ec(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?Yt===0&&(Yt=3):ic())),i.updateQueue!==null&&(i.flags|=4),an(i),null);case 4:return hs(),Gu(t,i),t===null&&oo(i.stateNode.containerInfo),an(i),null;case 10:return _u(i.type._context),an(i),null;case 17:return Sn(i.type)&&la(),an(i),null;case 19:if(It(Ft),h=i.memoizedState,h===null)return an(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=xa(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ee()>_s&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=xa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ut)return an(i),null}else 2*Ee()-h.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ee(),i.sibling=null,o=Ft.current,Lt(Ft,l?o&1|2:o&1),i):(an(i),null);case 22:case 23:return nc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function y_(t,i){switch(fu(i),i.tag){case 1:return Sn(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),It(yn),It(sn),Tu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Mu(i),null;case 13:if(It(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ft),null;case 4:return hs(),null;case 10:return _u(i.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var Ra=!1,ln=!1,S_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function Wu(t,i,o){try{o()}catch(l){kt(t,i,l)}}var Vh=!1;function M_(t,i){if(nu=qo,t=yd(),ql(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,O=-1,te=0,xe=0,ye=t,ge=null;t:for(;;){for(var Ne;ye!==o||c!==0&&ye.nodeType!==3||(D=M+c),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===t)break t;if(ge===o&&++te===c&&(D=M),ge===h&&++xe===l&&(O=M),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}o=D===-1||O===-1?null:{start:D,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(iu={focusedElem:t,selectionRange:o},qo=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,zt=Be.memoizedState,j=i.stateNode,z=j.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),zt);j.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){kt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=Vh,Vh=!1,Be}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Wu(i,o,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Xu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Gh(t){var i=t.alternate;i!==null&&(t.alternate=null,Gh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[lo],delete i[au],delete i[r_],delete i[s_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wh(t){return t.tag===5||t.tag===3||t.tag===4}function Xh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(ju(t,i,o),t=t.sibling;t!==null;)ju(t,i,o),t=t.sibling}function Yu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yu(t,i,o),t=t.sibling;t!==null;)Yu(t,i,o),t=t.sibling}var en=null,ei=!1;function ir(t,i,o){for(o=o.child;o!==null;)jh(t,i,o),o=o.sibling}function jh(t,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(St,o)}catch{}switch(o.tag){case 5:ln||ms(o,i);case 6:var l=en,c=ei;en=null,ir(t,i,o),en=l,ei=c,en!==null&&(ei?(t=en,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):en.removeChild(o.stateNode));break;case 18:en!==null&&(ei?(t=en,o=o.stateNode,t.nodeType===8?ou(t.parentNode,o):t.nodeType===1&&ou(t,o),Zs(t)):ou(en,o.stateNode));break;case 4:l=en,c=ei,en=o.stateNode.containerInfo,ei=!0,ir(t,i,o),en=l,ei=c;break;case 0:case 11:case 14:case 15:if(!ln&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Wu(o,i,M),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!ln&&(ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){kt(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(ln=(l=ln)||o.memoizedState!==null,ir(t,i,o),ln=l):ir(t,i,o);break;default:ir(t,i,o)}}function Yh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new S_),i.forEach(function(l){var c=L_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:en=D.stateNode,ei=!1;break e;case 3:en=D.stateNode.containerInfo,ei=!0;break e;case 4:en=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(en===null)throw Error(n(160));jh(h,M,c),en=null,ei=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(te){kt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qh(i,t),i=i.sibling}function qh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),mi(t),l&4){try{yo(3,t,t.return),Pa(3,t)}catch(He){kt(t,t.return,He)}try{yo(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:ti(i,t),mi(t),l&512&&o!==null&&ms(o,o.return);break;case 5:if(ti(i,t),mi(t),l&512&&o!==null&&ms(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),it(D,M);var te=it(D,h);for(M=0;M<O.length;M+=2){var xe=O[M],ye=O[M+1];xe==="style"?Je(c,ye):xe==="dangerouslySetInnerHTML"?Ue(c,ye):xe==="children"?lt(c,ye):L(c,xe,ye,te)}switch(D){case"input":ut(c,h);break;case"textarea":me(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?b(c,!!h.multiple,Ne,!1):ge!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(ti(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(ti(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:ti(i,t),mi(t);break;case 13:ti(i,t),mi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ku=Ee())),l&4&&Yh(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(ln=(te=ln)||xe,ti(i,t),ln=te):ti(i,t),mi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!xe&&(t.mode&1)!==0)for(Fe=t,xe=t.child;xe!==null;){for(ye=Fe=xe;Fe!==null;){switch(ge=Fe,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:yo(4,ge,ge.return);break;case 1:ms(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,o,He)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Zh(ye);continue}}Ne!==null?(Ne.return=ge,Fe=Ne):Zh(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{c=ye.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Qe("display",M))}catch(He){kt(t,t.return,He)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(He){kt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,t),mi(t),l&4&&Yh(t);break;case 21:break;default:ti(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Wh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=Xh(t);Yu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Xh(t);ju(t,D,M);break;default:throw Error(n(161))}}catch(O){kt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function E_(t,i,o){Fe=t,$h(t)}function $h(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ra;if(!M){var D=c.alternate,O=D!==null&&D.memoizedState!==null||ln;D=Ra;var te=ln;if(Ra=M,(ln=O)&&!te)for(Fe=c;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?Qh(c):O!==null?(O.return=M,Fe=O):Qh(c);for(;h!==null;)Fe=h,$h(h),h=h.sibling;Fe=c,Ra=D,ln=te}Kh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Fe=h):Kh(t)}}function Kh(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ln||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!ln)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Zd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Zd(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Zs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ln||i.flags&512&&Xu(i)}catch(ge){kt(i,i.return,ge)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Zh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Qh(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Pa(4,i)}catch(O){kt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){kt(i,c,O)}}var h=i.return;try{Xu(i)}catch(O){kt(i,h,O)}break;case 5:var M=i.return;try{Xu(i)}catch(O){kt(i,M,O)}}}catch(O){kt(i,i.return,O)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var T_=Math.ceil,ba=R.ReactCurrentDispatcher,qu=R.ReactCurrentOwner,Vn=R.ReactCurrentBatchConfig,_t=0,Zt=null,Vt=null,tn=0,Nn=0,gs=Qi(0),Yt=0,So=null,br=0,La=0,$u=0,Mo=null,En=null,Ku=0,_s=1/0,Ri=null,Da=!1,Zu=null,rr=null,Na=!1,sr=null,Ia=0,Eo=0,Qu=null,Ua=-1,Fa=0;function mn(){return(_t&6)!==0?Ee():Ua!==-1?Ua:Ua=Ee()}function or(t){return(t.mode&1)===0?1:(_t&2)!==0&&tn!==0?tn&-tn:a_.transition!==null?(Fa===0&&(Fa=hn()),Fa):(t=wt,t!==0||(t=window.event,t=t===void 0?16:ed(t.type)),t)}function ni(t,i,o,l){if(50<Eo)throw Eo=0,Qu=null,Error(n(185));xn(t,o,l),((_t&2)===0||t!==Zt)&&(t===Zt&&((_t&2)===0&&(La|=o),Yt===4&&ar(t,tn)),Tn(t,l),o===1&&_t===0&&(i.mode&1)===0&&(_s=Ee()+500,ca&&er()))}function Tn(t,i){var o=t.callbackNode;Fn(t,i);var l=fi(t,t===Zt?tn:0);if(l===0)o!==null&&re(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&re(o),i===1)t.tag===0?o_(ep.bind(null,t)):Bd(ep.bind(null,t)),n_(function(){(_t&6)===0&&er()}),o=null;else{switch(jf(l)){case 1:o=ze;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=mt;break;default:o=nt}o=lp(o,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Jh(t,i){if(Ua=-1,Fa=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(vs()&&t.callbackNode!==o)return null;var l=fi(t,t===Zt?tn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Oa(t,l);else{i=l;var c=_t;_t|=2;var h=np();(Zt!==t||tn!==i)&&(Ri=null,_s=Ee()+500,Dr(t,i));do try{C_();break}catch(D){tp(t,D)}while(!0);gu(),ba.current=h,_t=c,Vt!==null?i=0:(Zt=null,tn=0,i=Yt)}if(i!==0){if(i===2&&(c=yi(t),c!==0&&(l=c,i=Ju(t,c))),i===1)throw o=So,Dr(t,0),ar(t,l),Tn(t,Ee()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,(l&30)===0&&!w_(c)&&(i=Oa(t,l),i===2&&(h=yi(t),h!==0&&(l=h,i=Ju(t,h))),i===1))throw o=So,Dr(t,0),ar(t,l),Tn(t,Ee()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,En,Ri);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Ku+500-Ee(),10<i)){if(fi(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=su(Nr.bind(null,t,En,Ri),i);break}Nr(t,En,Ri);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*T_(l/1960))-l,10<l){t.timeoutHandle=su(Nr.bind(null,t,En,Ri),l);break}Nr(t,En,Ri);break;case 5:Nr(t,En,Ri);break;default:throw Error(n(329))}}}return Tn(t,Ee()),t.callbackNode===o?Jh.bind(null,t):null}function Ju(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=En,En=o,i!==null&&ec(i)),t}function ec(t){En===null?En=t:En.push.apply(En,t)}function w_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~$u,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function ep(t){if((_t&6)!==0)throw Error(n(327));vs();var i=fi(t,0);if((i&1)===0)return Tn(t,Ee()),null;var o=Oa(t,i);if(t.tag!==0&&o===2){var l=yi(t);l!==0&&(i=l,o=Ju(t,l))}if(o===1)throw o=So,Dr(t,0),ar(t,i),Tn(t,Ee()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,En,Ri),Tn(t,Ee()),null}function tc(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(_s=Ee()+500,ca&&er())}}function Lr(t){sr!==null&&sr.tag===0&&(_t&6)===0&&vs();var i=_t;_t|=1;var o=Vn.transition,l=wt;try{if(Vn.transition=null,wt=1,t)return t()}finally{wt=l,Vn.transition=o,_t=i,(_t&6)===0&&er()}}function nc(){Nn=gs.current,It(gs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,t_(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(fu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:hs(),It(yn),It(sn),Tu();break;case 5:Mu(l);break;case 4:hs();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:_u(l.type._context);break;case 22:case 23:nc()}o=o.return}if(Zt=t,Vt=t=lr(t.current,null),tn=Nn=i,Yt=0,So=null,$u=La=br=0,En=Mo=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Cr=null}return t}function tp(t,i){do{var o=Vt;try{if(gu(),ya.current=Ta,Sa){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Pr=0,Kt=jt=Ot=null,mo=!1,go=0,qu.current=null,o===null||o.return===null){Yt=1,So=i,Vt=null;break}e:{var h=t,M=o.return,D=o,O=i;if(i=tn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,xe=D,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=Ah(M);if(Ne!==null){Ne.flags&=-257,Ch(Ne,M,D,h,i),Ne.mode&1&&wh(h,te,i),i=Ne,O=te;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(O),i.updateQueue=He}else Be.add(O);break e}else{if((i&1)===0){wh(h,te,i),ic();break e}O=Error(n(426))}}else if(Ut&&D.mode&1){var zt=Ah(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Ch(zt,M,D,h,i),pu(ps(O,D));break e}}h=O=ps(O,D),Yt!==4&&(Yt=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=Eh(h,O,i);Kd(h,j);break e;case 1:D=O;var z=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(rr===null||!rr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Th(h,D,i);Kd(h,Te);break e}}h=h.return}while(h!==null)}rp(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function np(){var t=ba.current;return ba.current=Ta,t===null?Ta:t}function ic(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Zt===null||(br&268435455)===0&&(La&268435455)===0||ar(Zt,tn)}function Oa(t,i){var o=_t;_t|=2;var l=np();(Zt!==t||tn!==i)&&(Ri=null,Dr(t,i));do try{A_();break}catch(c){tp(t,c)}while(!0);if(gu(),_t=o,ba.current=l,Vt!==null)throw Error(n(261));return Zt=null,tn=0,Yt}function A_(){for(;Vt!==null;)ip(Vt)}function C_(){for(;Vt!==null&&!G();)ip(Vt)}function ip(t){var i=ap(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?rp(t):Vt=i,qu.current=null}function rp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=x_(o,i,Nn),o!==null){Vt=o;return}}else{if(o=y_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Nr(t,i,o){var l=wt,c=Vn.transition;try{Vn.transition=null,wt=1,R_(t,i,o,l)}finally{Vn.transition=c,wt=l}return null}function R_(t,i,o,l){do vs();while(sr!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Xo(t,h),t===Zt&&(Vt=Zt=null,tn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Na||(Na=!0,lp(nt,function(){return vs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var M=wt;wt=1;var D=_t;_t|=4,qu.current=null,M_(t,o),qh(o,t),qg(iu),qo=!!nu,iu=nu=null,t.current=o,E_(o),we(),_t=D,wt=M,Vn.transition=h}else t.current=o;if(Na&&(Na=!1,sr=t,Ia=c),h=t.pendingLanes,h===0&&(rr=null),nn(o.stateNode),Tn(t,Ee()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=Zu,Zu=null,t;return(Ia&1)!==0&&t.tag!==0&&vs(),h=t.pendingLanes,(h&1)!==0?t===Qu?Eo++:(Eo=0,Qu=t):Eo=0,er(),null}function vs(){if(sr!==null){var t=jf(Ia),i=Vn.transition,o=wt;try{if(Vn.transition=null,wt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ia=0,(_t&6)!==0)throw Error(n(331));var c=_t;for(_t|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var D=h.deletions;if(D!==null){for(var O=0;O<D.length;O++){var te=D[O];for(Fe=te;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:yo(8,xe,h)}var ye=xe.child;if(ye!==null)ye.return=xe,Fe=ye;else for(;Fe!==null;){xe=Fe;var ge=xe.sibling,Ne=xe.return;if(Gh(xe),xe===te){Fe=null;break}if(ge!==null){ge.return=Ne,Fe=ge;break}Fe=Ne}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var zt=He.sibling;He.sibling=null,He=zt}while(He!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Fe=j;break e}Fe=h.return}}var z=t.current;for(Fe=z;Fe!==null;){M=Fe;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,Fe=$;else e:for(M=z;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Pa(9,D)}}catch(Xe){kt(D,D.return,Xe)}if(D===M){Fe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Fe=Te;break e}Fe=D.return}}if(_t=c,er(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(St,t)}catch{}l=!0}return l}finally{wt=o,Vn.transition=i}}return!1}function sp(t,i,o){i=ps(o,i),i=Eh(t,i,1),t=nr(t,i,1),i=mn(),t!==null&&(xn(t,1,i),Tn(t,i))}function kt(t,i,o){if(t.tag===3)sp(t,t,o);else for(;i!==null;){if(i.tag===3){sp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=ps(o,t),t=Th(i,t,1),i=nr(i,t,1),t=mn(),i!==null&&(xn(i,1,t),Tn(i,t));break}}i=i.return}}function P_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&o,Zt===t&&(tn&o)===o&&(Yt===4||Yt===3&&(tn&130023424)===tn&&500>Ee()-Ku?Dr(t,0):$u|=o),Tn(t,i)}function op(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var o=mn();t=wi(t,i),t!==null&&(xn(t,i,o),Tn(t,o))}function b_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),op(t,o)}function L_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),op(t,o)}var ap;ap=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,v_(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,Ut&&(i.flags&1048576)!==0&&zd(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=os(i,sn.current);ds(i,o),c=Cu(null,i,l,t,c,o);var h=Ru();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(h=!0,ua(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,yu(i),c.updater=wa,i.stateNode=c,c._reactInternals=i,Iu(i,l,t,o),i=ku(null,i,l,!0,h,o)):(i.tag=0,Ut&&h&&cu(i),pn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=N_(l),t=Jn(l,t),c){case 0:i=Ou(null,i,l,t,o);break e;case 1:i=Nh(null,i,l,t,o);break e;case 11:i=Rh(null,i,l,t,o);break e;case 14:i=Ph(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ou(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Nh(t,i,l,c,o);case 3:e:{if(Ih(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,$d(t,i),va(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Uh(t,i,l,o,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Uh(t,i,l,o,c);break e}else for(Dn=Zi(i.stateNode.containerInfo.firstChild),Ln=i,Ut=!0,Qn=null,o=Yd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===c){i=Ci(t,i,o);break e}pn(t,i,l,o)}i=i.child}return i;case 5:return Qd(i),t===null&&hu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,ru(l,c)?M=null:h!==null&&ru(l,h)&&(i.flags|=32),Dh(t,i),pn(t,i,M,o),i.child;case 6:return t===null&&hu(i),null;case 13:return Fh(t,i,o);case 4:return Su(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,o):pn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Rh(t,i,l,c,o);case 7:return pn(t,i,i.pendingProps,o),i.child;case 8:return pn(t,i,i.pendingProps.children,o),i.child;case 12:return pn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(ma,l._currentValue),l._currentValue=M,h!==null)if(Zn(h.value,M)){if(h.children===c.children&&!yn.current){i=Ci(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var O=D.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ai(-1,o&-o),O.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),te.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),vu(h.return,o,i),D.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),vu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}pn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,o),c=zn(c),l=l(c),i.flags|=1,pn(t,i,l,o),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Ph(t,i,l,c,o);case 15:return bh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ca(t,i),i.tag=1,Sn(l)?(t=!0,ua(i)):t=!1,ds(i,o),Sh(i,l,c),Iu(i,l,c,o),ku(null,i,l,!0,t,o);case 19:return kh(t,i,o);case 22:return Lh(t,i,o)}throw Error(n(156,i.tag))};function lp(t,i){return ne(t,i)}function D_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,o,l){return new D_(t,i,o,l)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N_(t){if(typeof t=="function")return rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===he)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Gn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ka(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")rc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Ir(o.children,c,h,i);case X:M=8,c|=8;break;case P:return t=Gn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case ee:return t=Gn(13,o,i,c),t.elementType=ee,t.lanes=h,t;case fe:return t=Gn(19,o,i,c),t.elementType=fe,t.lanes=h,t;case Q:return Ba(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case B:M=9;break e;case ue:M=11;break e;case he:M=14;break e;case J:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Gn(7,t,l,i),t.lanes=o,t}function Ba(t,i,o,l){return t=Gn(22,t,l,i),t.elementType=Q,t.lanes=o,t.stateNode={isHidden:!1},t}function sc(t,i,o){return t=Gn(6,t,null,i),t.lanes=o,t}function oc(t,i,o){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function I_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=On(0),this.expirationTimes=On(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=On(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ac(t,i,o,l,c,h,M,D,O){return t=new I_(t,i,o,D,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(h),t}function U_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function up(t){if(!t)return Ji;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Sn(o))return Od(t,o,i)}return i}function cp(t,i,o,l,c,h,M,D,O){return t=ac(o,l,!0,t,c,h,M,D,O),t.context=up(null),o=t.current,l=mn(),c=or(o),h=Ai(l,c),h.callback=i??null,nr(o,h,c),t.current.lanes=c,xn(t,c,l),Tn(t,l),t}function za(t,i,o,l){var c=i.current,h=mn(),M=or(c);return o=up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ni(t,c,M,h),_a(t,c,M)),M}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function lc(t,i){fp(t,i),(t=t.alternate)&&fp(t,i)}function F_(){return null}var dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function uc(t){this._internalRoot=t}Va.prototype.render=uc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));za(t,i,null,null)},Va.prototype.unmount=uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){za(null,t,null,null)}),i[Si]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=$f();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&Qf(t)}};function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function O_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=Ha(M);h.call(te)}}var M=cp(i,l,t,0,null,!1,!1,"",hp);return t._reactRootContainer=M,t[Si]=M.current,oo(t.nodeType===8?t.parentNode:t),Lr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var te=Ha(O);D.call(te)}}var O=ac(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=O,t[Si]=O.current,oo(t.nodeType===8?t.parentNode:t),Lr(function(){za(i,O,o,l)}),O}function Wa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var O=Ha(M);D.call(O)}}za(i,M,t,c)}else M=O_(o,i,t,c,l);return Ha(M)}Yf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Xt(i.pendingLanes);o!==0&&(Il(i,o|1),Tn(i,Ee()),(_t&6)===0&&(_s=Ee()+500,er()))}break;case 13:Lr(function(){var l=wi(t,1);if(l!==null){var c=mn();ni(l,t,1,c)}}),lc(t,1)}},Ul=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=mn();ni(i,t,134217728,o)}lc(t,134217728)}},qf=function(t){if(t.tag===13){var i=or(t),o=wi(t,i);if(o!==null){var l=mn();ni(o,t,i,l)}lc(t,i)}},$f=function(){return wt},Kf=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},Pe=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=aa(l);if(!c)throw Error(n(90));ht(l),ut(l,c)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Dt=tc,Wt=Lr;var k_={usingClientEntryPoint:!1,Events:[uo,rs,aa,Le,rt,tc]},To={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B_={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||F_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{St=Xa.inject(B_),pt=Xa}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(i))throw Error(n(200));return U_(t,i,null,o)},wn.createRoot=function(t,i){if(!cc(t))throw Error(n(299));var o=!1,l="",c=dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ac(t,1,!1,null,null,o,!1,l,c),t[Si]=i.current,oo(t.nodeType===8?t.parentNode:t),new uc(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Lr(t)},wn.hydrate=function(t,i,o){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!cc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=dp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=cp(i,null,t,1,o??null,c,!1,h,M),t[Si]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Va(i)},wn.render=function(t,i,o){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},wn.unstable_batchedUpdates=tc,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ga(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var Sp;function q_(){if(Sp)return hc.exports;Sp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hc.exports=Y_(),hc.exports}var Mp;function $_(){if(Mp)return ja;Mp=1;var s=q_();return ja.createRoot=s.createRoot,ja.hydrateRoot=s.hydrateRoot,ja}var K_=$_();const Z_=Rm(K_);function Q_(){const[s,e]=Yn.useState(()=>{const r=localStorage.getItem("theme");return r||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});return Yn.useEffect(()=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s)},[s]),{theme:s,toggle:()=>e(r=>r==="dark"?"light":"dark")}}function J_(s=".scroll-fade"){Yn.useEffect(()=>{const e=document.querySelectorAll(s),n=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("visible"),n.unobserve(a.target))}),{threshold:.1});return e.forEach(r=>n.observe(r)),()=>n.disconnect()},[s])}function ev(){Yn.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=window.matchMedia("(hover: none)").matches;if(s||e)return;const n=document.querySelector(".cursor-glow"),r=document.querySelector(".scroll-progress");let a=0,u=0,d=0,f=0,p=window.scrollY,g=0;const _=m=>{a=m.clientX,u=m.clientY},y=()=>{if(p=window.scrollY,r){const m=document.documentElement.scrollHeight-window.innerHeight,N=m>0?p/m*100:0;r.style.width=N+"%"}},x=()=>{d+=(a-d)*.15,f+=(u-f)*.15,n&&(n.style.transform=`translate3d(${d}px, ${f}px, 0) translate(-50%, -50%)`);const m=document.querySelector(".hero-content");m&&(m.style.transform=`translateY(${p*.15}px)`),g=requestAnimationFrame(x)};g=requestAnimationFrame(x);const S=document.querySelectorAll(".project-card"),T=[];S.forEach(m=>{const N=R=>{const K=m.getBoundingClientRect(),k=(R.clientX-K.left)/K.width,F=(R.clientY-K.top)/K.height,X=(.5-F)*4,P=(k-.5)*4;m.style.setProperty("--mx",`${k*100}%`),m.style.setProperty("--my",`${F*100}%`),m.style.transform=`perspective(900px) rotateX(${X}deg) rotateY(${P}deg) translateY(-2px)`},L=()=>{m.style.transform=""};m.addEventListener("mousemove",N),m.addEventListener("mouseleave",L),T.push([m,N,L])});const w=document.querySelectorAll(".btn"),v=[];return w.forEach(m=>{const N=R=>{const K=m.getBoundingClientRect(),k=R.clientX-(K.left+K.width/2),F=R.clientY-(K.top+K.height/2);m.style.transform=`translate(${k*.18}px, ${F*.18}px)`},L=()=>{m.style.transform=""};m.addEventListener("mousemove",N),m.addEventListener("mouseleave",L),v.push([m,N,L])}),window.addEventListener("mousemove",_,{passive:!0}),window.addEventListener("scroll",y,{passive:!0}),y(),()=>{cancelAnimationFrame(g),window.removeEventListener("mousemove",_),window.removeEventListener("scroll",y),T.forEach(([m,N,L])=>{m.removeEventListener("mousemove",N),m.removeEventListener("mouseleave",L)}),v.forEach(([m,N,L])=>{m.removeEventListener("mousemove",N),m.removeEventListener("mouseleave",L)})}},[])}function tv({theme:s,toggle:e}){const[n,r]=Yn.useState(!1),[a,u]=Yn.useState(!1);Yn.useEffect(()=>{const f=()=>u(window.scrollY>20);return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const d=()=>r(!1);return Y.jsxs("nav",{className:`navbar${a?" navbar--scrolled":""}`,children:[Y.jsx("a",{href:"#home",className:"nav-logo",children:"Nico"}),Y.jsxs("ul",{className:`nav-menu${n?" nav-menu--open":""}`,children:[Y.jsx("li",{children:Y.jsx("a",{href:"#home",onClick:d,children:"Home"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#about",onClick:d,children:"About"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#projects",onClick:d,children:"Projects"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#skills",onClick:d,children:"Skills"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#certifications",onClick:d,children:"Certifications"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#travel",onClick:d,children:"Travel"})}),Y.jsx("li",{children:Y.jsx("a",{href:"#contact",onClick:d,children:"Connect"})})]}),Y.jsx("button",{className:"theme-toggle",onClick:e,"aria-label":"Toggle theme",children:Y.jsx("i",{className:s==="dark"?"fas fa-sun":"fas fa-moon"})}),Y.jsx("button",{className:"menu-toggle",onClick:()=>r(f=>!f),"aria-label":"Toggle menu","aria-expanded":n,children:Y.jsx("i",{className:n?"fas fa-times":"fas fa-bars"})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="170",nv=0,Ep=1,iv=2,Pm=1,rv=2,Ii=3,xr=0,Rn=1,Ui=2,_r=0,Is=1,Tp=2,wp=3,Ap=4,sv=5,Gr=100,ov=101,av=102,lv=103,uv=104,cv=200,fv=201,dv=202,hv=203,Yc=204,qc=205,pv=206,mv=207,gv=208,_v=209,vv=210,xv=211,yv=212,Sv=213,Mv=214,$c=0,Kc=1,Zc=2,Os=3,Qc=4,Jc=5,ef=6,tf=7,bm=0,Ev=1,Tv=2,vr=0,wv=1,Av=2,Cv=3,Rv=4,Pv=5,bv=6,Lv=7,Lm=300,ks=301,Bs=302,nf=303,rf=304,Pl=306,sf=1e3,Xr=1001,of=1002,li=1003,Dv=1004,Ya=1005,_i=1006,gc=1007,jr=1008,Hi=1009,Dm=1010,Nm=1011,Io=1012,kf=1013,Yr=1014,Fi=1015,Uo=1016,Bf=1017,zf=1018,zs=1020,Im=35902,Um=1021,Fm=1022,ai=1023,Om=1024,km=1025,Us=1026,Hs=1027,Bm=1028,Hf=1029,zm=1030,Vf=1031,Gf=1033,xl=33776,yl=33777,Sl=33778,Ml=33779,af=35840,lf=35841,uf=35842,cf=35843,ff=36196,df=37492,hf=37496,pf=37808,mf=37809,gf=37810,_f=37811,vf=37812,xf=37813,yf=37814,Sf=37815,Mf=37816,Ef=37817,Tf=37818,wf=37819,Af=37820,Cf=37821,El=36492,Rf=36494,Pf=36495,Hm=36283,bf=36284,Lf=36285,Df=36286,Nv=3200,Iv=3201,Uv=0,Fv=1,gr="",Xn="srgb",Gs="srgb-linear",bl="linear",Ct="srgb",xs=7680,Cp=519,Ov=512,kv=513,Bv=514,Vm=515,zv=516,Hv=517,Vv=518,Gv=519,Rp=35044,Pp="300 es",Oi=2e3,wl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Nf=180/Math.PI;function Fo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function Wv(s,e){return(s%e+e)%e}function vc(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,d,f,p,g){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,g)}set(e,n,r,a,u,d,f,p,g){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],p=r[6],g=r[1],_=r[4],y=r[7],x=r[2],S=r[5],T=r[8],w=a[0],v=a[3],m=a[6],N=a[1],L=a[4],R=a[7],K=a[2],k=a[5],F=a[8];return u[0]=d*w+f*N+p*K,u[3]=d*v+f*L+p*k,u[6]=d*m+f*R+p*F,u[1]=g*w+_*N+y*K,u[4]=g*v+_*L+y*k,u[7]=g*m+_*R+y*F,u[2]=x*w+S*N+T*K,u[5]=x*v+S*L+T*k,u[8]=x*m+S*R+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],g=e[7],_=e[8];return n*d*_-n*f*g-r*u*_+r*f*p+a*u*g-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],g=e[7],_=e[8],y=_*d-f*g,x=f*p-_*u,S=g*u-d*p,T=n*y+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=y*w,e[1]=(a*g-_*r)*w,e[2]=(f*r-a*d)*w,e[3]=x*w,e[4]=(_*n-a*p)*w,e[5]=(a*u-f*n)*w,e[6]=S*w,e[7]=(r*p-g*n)*w,e[8]=(d*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const p=Math.cos(u),g=Math.sin(u);return this.set(r*p,r*g,-r*(p*d+g*f)+d+e,-a*g,a*p,-a*(-g*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new ot;function Gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Al(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xv(){const s=Al("canvas");return s.style.display="block",s}const bp={};function Do(s){s in bp||(bp[s]=!0,console.warn(s))}function jv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Yv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ct&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ct&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Lp=[.64,.33,.3,.6,.15,.06],Dp=[.2126,.7152,.0722],Np=[.3127,.329],Ip=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Gs]:{primaries:Lp,whitePoint:Np,transfer:bl,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:Dp,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:Lp,whitePoint:Np,transfer:Ct,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:Dp,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}});let ys;class $v{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Al("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Bi(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kv=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(yc(a[d].image)):u.push(yc(a[d]))}else u=yc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$v.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zv=0;class Pn extends Ws{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Xr,a=Xr,u=_i,d=jr,f=ai,p=Hi,g=Pn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Fo(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Lm;Pn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,g=p[0],_=p[4],y=p[8],x=p[1],S=p[5],T=p[9],w=p[2],v=p[6],m=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-w)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+w)<.1&&Math.abs(T+v)<.1&&Math.abs(g+S+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(g+1)/2,R=(S+1)/2,K=(m+1)/2,k=(_+x)/4,F=(y+w)/4,X=(T+v)/4;return L>R&&L>K?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=k/r,u=F/r):R>K?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=k/a,u=X/a):K<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(K),r=F/u,a=X/u),this.set(r,a,u,n),this}let N=Math.sqrt((v-T)*(v-T)+(y-w)*(y-w)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(v-T)/N,this.y=(y-w)/N,this.z=(x-_)/N,this.w=Math.acos((g+S+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qv extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Qv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Xm extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let p=r[a+0],g=r[a+1],_=r[a+2],y=r[a+3];const x=u[d+0],S=u[d+1],T=u[d+2],w=u[d+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=w;return}if(y!==w||p!==x||g!==S||_!==T){let v=1-f;const m=p*x+g*S+_*T+y*w,N=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const K=Math.sqrt(L),k=Math.atan2(K,m*N);v=Math.sin(v*k)/K,f=Math.sin(f*k)/K}const R=f*N;if(p=p*v+x*R,g=g*v+S*R,_=_*v+T*R,y=y*v+w*R,v===1-f){const K=1/Math.sqrt(p*p+g*g+_*_+y*y);p*=K,g*=K,_*=K,y*=K}}e[n]=p,e[n+1]=g,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],p=r[a+1],g=r[a+2],_=r[a+3],y=u[d],x=u[d+1],S=u[d+2],T=u[d+3];return e[n]=f*T+_*y+p*S-g*x,e[n+1]=p*T+_*x+g*y-f*S,e[n+2]=g*T+_*S+f*x-p*y,e[n+3]=_*T-f*y-p*x-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,g=f(r/2),_=f(a/2),y=f(u/2),x=p(r/2),S=p(a/2),T=p(u/2);switch(d){case"XYZ":this._x=x*_*y+g*S*T,this._y=g*S*y-x*_*T,this._z=g*_*T+x*S*y,this._w=g*_*y-x*S*T;break;case"YXZ":this._x=x*_*y+g*S*T,this._y=g*S*y-x*_*T,this._z=g*_*T-x*S*y,this._w=g*_*y+x*S*T;break;case"ZXY":this._x=x*_*y-g*S*T,this._y=g*S*y+x*_*T,this._z=g*_*T+x*S*y,this._w=g*_*y-x*S*T;break;case"ZYX":this._x=x*_*y-g*S*T,this._y=g*S*y+x*_*T,this._z=g*_*T-x*S*y,this._w=g*_*y+x*S*T;break;case"YZX":this._x=x*_*y+g*S*T,this._y=g*S*y+x*_*T,this._z=g*_*T-x*S*y,this._w=g*_*y-x*S*T;break;case"XZY":this._x=x*_*y-g*S*T,this._y=g*S*y-x*_*T,this._z=g*_*T+x*S*y,this._w=g*_*y+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],p=n[9],g=n[2],_=n[6],y=n[10],x=r+f+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-g)*S,this._z=(d-a)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+g)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(u-g)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(d-a)/S,this._x=(u+g)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,p=n._y,g=n._z,_=n._w;return this._x=r*_+d*f+a*g-u*p,this._y=a*_+d*p+u*f-r*g,this._z=u*_+d*g+r*p-a*f,this._w=d*_-r*f-a*p-u*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,f),y=Math.sin((1-n)*_)/g,x=Math.sin(n*_)/g;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,p=e.w,g=2*(d*a-f*r),_=2*(f*n-u*a),y=2*(u*r-d*n);return this.x=n+p*g+d*y-f*_,this.y=r+p*_+f*g-u*y,this.z=a+p*y+u*_-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-u*f,this.y=u*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new ie,Fp=new Oo;class ko{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(u,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),$a.subVectors(this.max,Co),Ss.subVectors(e.a,Co),Ms.subVectors(e.b,Co),Es.subVectors(e.c,Co),cr.subVectors(Ms,Ss),fr.subVectors(Es,Ms),Ur.subVectors(Ss,Es);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Ur.z,Ur.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Ur.z,0,-Ur.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Ur.y,Ur.x,0];return!Mc(n,Ss,Ms,Es,$a)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,Ss,Ms,Es,$a))?!1:(Ka.crossVectors(cr,fr),n=[Ka.x,Ka.y,Ka.z],Mc(n,Ss,Ms,Es,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ii=new ie,qa=new ko,Ss=new ie,Ms=new ie,Es=new ie,cr=new ie,fr=new ie,Ur=new ie,Co=new ie,$a=new ie,Ka=new ie,Fr=new ie;function Mc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){Fr.fromArray(s,u);const f=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),g=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>f)return!1}return!0}const e0=new ko,Ro=new ie,Ec=new ie;class Bo{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):e0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ec)),this.expandByPoint(Ro.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new ie,Tc=new ie,Za=new ie,dr=new ie,wc=new ie,Qa=new ie,Ac=new ie;class Wf{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Tc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Za),f=dr.dot(this.direction),p=-dr.dot(Za),g=dr.lengthSq(),_=Math.abs(1-d*d);let y,x,S,T;if(_>0)if(y=d*p-f,x=d*f-p,T=u*_,y>=0)if(x>=-T)if(x<=T){const w=1/_;y*=w,x*=w,S=y*(y+d*x+2*f)+x*(d*y+x+2*p)+g}else x=u,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+g;else x=-u,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+g;else x<=-T?(y=Math.max(0,-(-d*u+f)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+g):x<=T?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+g):(y=Math.max(0,-(d*u+f)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+g);else x=d>0?-u:u,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Tc).addScaledVector(Za,x),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,p;const g=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return g>=0?(r=(e.min.x-x.x)*g,a=(e.max.x-x.x)*g):(r=(e.max.x-x.x)*g,a=(e.min.x-x.x)*g),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),y>=0?(f=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,u){wc.subVectors(n,e),Qa.subVectors(r,e),Ac.crossVectors(wc,Qa);let d=this.direction.dot(Ac),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;dr.subVectors(this.origin,e);const p=f*this.direction.dot(Qa.crossVectors(dr,Qa));if(p<0)return null;const g=f*this.direction.dot(wc.cross(dr));if(g<0||p+g>d)return null;const _=-f*dr.dot(Ac);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,d,f,p,g,_,y,x,S,T,w,v){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,g,_,y,x,S,T,w,v)}set(e,n,r,a,u,d,f,p,g,_,y,x,S,T,w,v){const m=this.elements;return m[0]=e,m[4]=n,m[8]=r,m[12]=a,m[1]=u,m[5]=d,m[9]=f,m[13]=p,m[2]=g,m[6]=_,m[10]=y,m[14]=x,m[3]=S,m[7]=T,m[11]=w,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),d=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),g=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*_,S=d*y,T=f*_,w=f*y;n[0]=p*_,n[4]=-p*y,n[8]=g,n[1]=S+T*g,n[5]=x-w*g,n[9]=-f*p,n[2]=w-x*g,n[6]=T+S*g,n[10]=d*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,T=g*_,w=g*y;n[0]=x+w*f,n[4]=T*f-S,n[8]=d*g,n[1]=d*y,n[5]=d*_,n[9]=-f,n[2]=S*f-T,n[6]=w+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,T=g*_,w=g*y;n[0]=x-w*f,n[4]=-d*y,n[8]=T+S*f,n[1]=S+T*f,n[5]=d*_,n[9]=w-x*f,n[2]=-d*g,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*_,S=d*y,T=f*_,w=f*y;n[0]=p*_,n[4]=T*g-S,n[8]=x*g+w,n[1]=p*y,n[5]=w*g+x,n[9]=S*g-T,n[2]=-g,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*g,T=f*p,w=f*g;n[0]=p*_,n[4]=w-x*y,n[8]=T*y+S,n[1]=y,n[5]=d*_,n[9]=-f*_,n[2]=-g*_,n[6]=S*y+T,n[10]=x-w*y}else if(e.order==="XZY"){const x=d*p,S=d*g,T=f*p,w=f*g;n[0]=p*_,n[4]=-y,n[8]=g*_,n[1]=x*y+w,n[5]=d*_,n[9]=S*y-T,n[2]=T*y-S,n[6]=f*_,n[10]=w*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,n,r){const a=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),hr.crossVectors(r,In),hr.lengthSq()===0&&(Math.abs(r.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),hr.crossVectors(r,In)),hr.normalize(),Ja.crossVectors(In,hr),a[0]=hr.x,a[4]=Ja.x,a[8]=In.x,a[1]=hr.y,a[5]=Ja.y,a[9]=In.y,a[2]=hr.z,a[6]=Ja.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],p=r[8],g=r[12],_=r[1],y=r[5],x=r[9],S=r[13],T=r[2],w=r[6],v=r[10],m=r[14],N=r[3],L=r[7],R=r[11],K=r[15],k=a[0],F=a[4],X=a[8],P=a[12],C=a[1],B=a[5],ue=a[9],ee=a[13],fe=a[2],he=a[6],J=a[10],Q=a[14],U=a[3],le=a[7],oe=a[11],I=a[15];return u[0]=d*k+f*C+p*fe+g*U,u[4]=d*F+f*B+p*he+g*le,u[8]=d*X+f*ue+p*J+g*oe,u[12]=d*P+f*ee+p*Q+g*I,u[1]=_*k+y*C+x*fe+S*U,u[5]=_*F+y*B+x*he+S*le,u[9]=_*X+y*ue+x*J+S*oe,u[13]=_*P+y*ee+x*Q+S*I,u[2]=T*k+w*C+v*fe+m*U,u[6]=T*F+w*B+v*he+m*le,u[10]=T*X+w*ue+v*J+m*oe,u[14]=T*P+w*ee+v*Q+m*I,u[3]=N*k+L*C+R*fe+K*U,u[7]=N*F+L*B+R*he+K*le,u[11]=N*X+L*ue+R*J+K*oe,u[15]=N*P+L*ee+R*Q+K*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],p=e[9],g=e[13],_=e[2],y=e[6],x=e[10],S=e[14],T=e[3],w=e[7],v=e[11],m=e[15];return T*(+u*p*y-a*g*y-u*f*x+r*g*x+a*f*S-r*p*S)+w*(+n*p*S-n*g*x+u*d*x-a*d*S+a*g*_-u*p*_)+v*(+n*g*y-n*f*S-u*d*y+r*d*S+u*f*_-r*g*_)+m*(-a*f*_-n*p*y+n*f*x+a*d*y-r*d*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],g=e[7],_=e[8],y=e[9],x=e[10],S=e[11],T=e[12],w=e[13],v=e[14],m=e[15],N=y*v*g-w*x*g+w*p*S-f*v*S-y*p*m+f*x*m,L=T*x*g-_*v*g-T*p*S+d*v*S+_*p*m-d*x*m,R=_*w*g-T*y*g+T*f*S-d*w*S-_*f*m+d*y*m,K=T*y*p-_*w*p-T*f*x+d*w*x+_*f*v-d*y*v,k=n*N+r*L+a*R+u*K;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=N*F,e[1]=(w*x*u-y*v*u-w*a*S+r*v*S+y*a*m-r*x*m)*F,e[2]=(f*v*u-w*p*u+w*a*g-r*v*g-f*a*m+r*p*m)*F,e[3]=(y*p*u-f*x*u-y*a*g+r*x*g+f*a*S-r*p*S)*F,e[4]=L*F,e[5]=(_*v*u-T*x*u+T*a*S-n*v*S-_*a*m+n*x*m)*F,e[6]=(T*p*u-d*v*u-T*a*g+n*v*g+d*a*m-n*p*m)*F,e[7]=(d*x*u-_*p*u+_*a*g-n*x*g-d*a*S+n*p*S)*F,e[8]=R*F,e[9]=(T*y*u-_*w*u-T*r*S+n*w*S+_*r*m-n*y*m)*F,e[10]=(d*w*u-T*f*u+T*r*g-n*w*g-d*r*m+n*f*m)*F,e[11]=(_*f*u-d*y*u-_*r*g+n*y*g+d*r*S-n*f*S)*F,e[12]=K*F,e[13]=(_*w*a-T*y*a+T*r*x-n*w*x-_*r*v+n*y*v)*F,e[14]=(T*f*a-d*w*a-T*r*p+n*w*p+d*r*v-n*f*v)*F,e[15]=(d*y*a-_*f*a+_*r*p-n*y*p-d*r*x+n*f*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,p=e.z,g=u*d,_=u*f;return this.set(g*d+r,g*f-a*p,g*p+a*f,0,g*f+a*p,_*f+r,_*p-a*d,0,g*p-a*f,_*p+a*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,p=n._w,g=u+u,_=d+d,y=f+f,x=u*g,S=u*_,T=u*y,w=d*_,v=d*y,m=f*y,N=p*g,L=p*_,R=p*y,K=r.x,k=r.y,F=r.z;return a[0]=(1-(w+m))*K,a[1]=(S+R)*K,a[2]=(T-L)*K,a[3]=0,a[4]=(S-R)*k,a[5]=(1-(x+m))*k,a[6]=(v+N)*k,a[7]=0,a[8]=(T+L)*F,a[9]=(v-N)*F,a[10]=(1-(x+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const d=Ts.set(a[4],a[5],a[6]).length(),f=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const g=1/u,_=1/d,y=1/f;return ri.elements[0]*=g,ri.elements[1]*=g,ri.elements[2]*=g,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=y,ri.elements[9]*=y,ri.elements[10]*=y,n.setFromRotationMatrix(ri),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=Oi){const p=this.elements,g=2*u/(n-e),_=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(f===Oi)S=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(f===wl)S=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=Oi){const p=this.elements,g=1/(n-e),_=1/(r-a),y=1/(d-u),x=(n+e)*g,S=(r+a)*_;let T,w;if(f===Oi)T=(d+u)*y,w=-2*y;else if(f===wl)T=u*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new ie,ri=new Bt,t0=new ie(0,0,0),n0=new ie(1,1,1),hr=new ie,Ja=new ie,In=new ie,Op=new Bt,kp=new Oo;class Vi{constructor(e=0,n=0,r=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],p=a[1],g=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Cn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i0=0;const Bp=new ie,ws=new Oo,Li=new Bt,el=new ie,Po=new ie,r0=new ie,s0=new Oo,zp=new ie(1,0,0),Hp=new ie(0,1,0),Vp=new ie(0,0,1),Gp={type:"added"},o0={type:"removed"},As={type:"childadded",child:null},Cc={type:"childremoved",child:null};class _n extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new ie,n=new Vi,r=new Oo,a=new ie(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?el.copy(e):el.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Po,el,this.up):Li.lookAt(el,Po,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Li),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(o0),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,r0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const y=p[g];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(u(e.materials,this.material[p]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(u(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),g=d(e.textures),_=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(f){const p=[];for(const g in f){const _=f[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}_n.DEFAULT_UP=new ie(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ie,Di=new ie,Rc=new ie,Ni=new ie,Cs=new ie,Rs=new ie,Wp=new ie,Pc=new ie,bc=new ie,Lc=new ie,Dc=new Ht,Nc=new Ht,Ic=new Ht;class oi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Di.subVectors(r,n),Rc.subVectors(e,n);const d=si.dot(si),f=si.dot(Di),p=si.dot(Rc),g=Di.dot(Di),_=Di.dot(Rc),y=d*g-f*f;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(g*p-f*_)*x,T=(d*_-f*p)*x;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,d,f,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ni.x),p.addScaledVector(d,Ni.y),p.addScaledVector(f,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,u,d){return Dc.setScalar(0),Nc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Dc,u.x),d.addScaledVector(Nc,u.y),d.addScaledVector(Ic,u.z),d}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;Cs.subVectors(a,r),Rs.subVectors(u,r),Pc.subVectors(e,r);const p=Cs.dot(Pc),g=Rs.dot(Pc);if(p<=0&&g<=0)return n.copy(r);bc.subVectors(e,a);const _=Cs.dot(bc),y=Rs.dot(bc);if(_>=0&&y<=_)return n.copy(a);const x=p*y-_*g;if(x<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(Cs,d);Lc.subVectors(e,u);const S=Cs.dot(Lc),T=Rs.dot(Lc);if(T>=0&&S<=T)return n.copy(u);const w=S*g-p*T;if(w<=0&&g>=0&&T<=0)return f=g/(g-T),n.copy(r).addScaledVector(Rs,f);const v=_*T-S*y;if(v<=0&&y-_>=0&&S-T>=0)return Wp.subVectors(u,a),f=(y-_)/(y-_+(S-T)),n.copy(a).addScaledVector(Wp,f);const m=1/(v+w+x);return d=w*m,f=x*m,n.copy(r).addScaledVector(Cs,d).addScaledVector(Rs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Uc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=vt.workingColorSpace){return this.r=e,this.g=n,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=vt.workingColorSpace){if(e=Wv(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Uc(d,u,e+1/3),this.g=Uc(d,u,e),this.b=Uc(d,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,n=Xn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const r=Ym[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return vt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Cn(cn.r*255,0,255))*65536+Math.round(Cn(cn.g*255,0,255))*256+Math.round(Cn(cn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(cn.copy(this),n);const r=cn.r,a=cn.g,u=cn.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let p,g;const _=(f+d)/2;if(f===d)p=0,g=0;else{const y=d-f;switch(g=_<=.5?y/(d+f):y/(2-d-f),d){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Xn){vt.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,r=cn.g,a=cn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(tl);const r=vc(pr.h,tl.h,n),a=vc(pr.s,tl.s,n),u=vc(pr.l,tl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Mt;Mt.NAMES=Ym;let a0=0;class Xs extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Fo(),this.name="",this.blending=Is,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=qc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yc&&(r.blendSrc=this.blendSrc),this.blendDst!==qc&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qm extends Xs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new ie,nl=new Pt;class qn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Rp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class $m extends qn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Km extends qn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class zi extends qn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let l0=0;const Wn=new Bt,Fc=new _n,Ps=new ie,Un=new ko,bo=new ko,Jt=new ie;class ui extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Km:$m)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new zi(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Un.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];bo.setFromBufferAttribute(f),this.morphTargetsRelative?(Jt.addVectors(Un.min,bo.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,bo.max),Un.expandByPoint(Jt)):(Un.expandByPoint(bo.min),Un.expandByPoint(bo.max))}Un.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)Jt.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(Jt));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],p=this.morphTargetsRelative;for(let g=0,_=f.count;g<_;g++)Jt.fromBufferAttribute(f,g),p&&(Ps.fromBufferAttribute(e,g),Jt.add(Ps)),a=Math.max(a,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let X=0;X<r.count;X++)f[X]=new ie,p[X]=new ie;const g=new ie,_=new ie,y=new ie,x=new Pt,S=new Pt,T=new Pt,w=new ie,v=new ie;function m(X,P,C){g.fromBufferAttribute(r,X),_.fromBufferAttribute(r,P),y.fromBufferAttribute(r,C),x.fromBufferAttribute(u,X),S.fromBufferAttribute(u,P),T.fromBufferAttribute(u,C),_.sub(g),y.sub(g),S.sub(x),T.sub(x);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(B),v.copy(y).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(B),f[X].add(w),f[P].add(w),f[C].add(w),p[X].add(v),p[P].add(v),p[C].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,P=N.length;X<P;++X){const C=N[X],B=C.start,ue=C.count;for(let ee=B,fe=B+ue;ee<fe;ee+=3)m(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new ie,R=new ie,K=new ie,k=new ie;function F(X){K.fromBufferAttribute(a,X),k.copy(K);const P=f[X];L.copy(P),L.sub(K.multiplyScalar(K.dot(P))).normalize(),R.crossVectors(k,P);const B=R.dot(p[X])<0?-1:1;d.setXYZW(X,L.x,L.y,L.z,B)}for(let X=0,P=N.length;X<P;++X){const C=N[X],B=C.start,ue=C.count;for(let ee=B,fe=B+ue;ee<fe;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ie,u=new ie,d=new ie,f=new ie,p=new ie,g=new ie,_=new ie,y=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,v),_.subVectors(d,u),y.subVectors(a,u),_.cross(y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),f.add(_),p.add(_),g.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(v,g.x,g.y,g.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(f,p){const g=f.array,_=f.itemSize,y=f.normalized,x=new g.constructor(p.length*_);let S=0,T=0;for(let w=0,v=p.length;w<v;w++){f.isInterleavedBufferAttribute?S=p[w]*f.data.stride+f.offset:S=p[w]*_;for(let m=0;m<_;m++)x[T++]=g[S++]}return new qn(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],g=e(p,r);n.setAttribute(f,g)}const u=this.morphAttributes;for(const f in u){const p=[],g=u[f];for(let _=0,y=g.length;_<y;_++){const x=g[_],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const g=d[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let y=0,x=g.length;y<x;y++){const S=g[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const _=a[g];this.setAttribute(g,_.clone(n))}const u=e.morphAttributes;for(const g in u){const _=[],y=u[g];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,_=d.length;g<_;g++){const y=d[g];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new Bt,Or=new Wf,il=new Bo,jp=new ie,rl=new ie,sl=new ie,ol=new ie,Oc=new ie,al=new ie,Yp=new ie,ll=new ie;class ki extends _n{constructor(e=new ui,n=new qm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){al.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const _=f[p],y=u[p];_!==0&&(Oc.fromBufferAttribute(y,e),d?al.addScaledVector(Oc,_):al.addScaledVector(Oc.sub(n),_))}n.add(al)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),il.copy(r.boundingSphere),il.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(il.containsPoint(Or.origin)===!1&&(Or.intersectSphere(il,jp)===null||Or.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Xp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Xp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,g=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,w=x.length;T<w;T++){const v=x[T],m=d[v.materialIndex],N=Math.max(v.start,S.start),L=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let R=N,K=L;R<K;R+=3){const k=f.getX(R),F=f.getX(R+1),X=f.getX(R+2);a=ul(this,m,e,r,g,_,y,k,F,X),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let v=T,m=w;v<m;v+=3){const N=f.getX(v),L=f.getX(v+1),R=f.getX(v+2);a=ul(this,d,e,r,g,_,y,N,L,R),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,w=x.length;T<w;T++){const v=x[T],m=d[v.materialIndex],N=Math.max(v.start,S.start),L=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let R=N,K=L;R<K;R+=3){const k=R,F=R+1,X=R+2;a=ul(this,m,e,r,g,_,y,k,F,X),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let v=T,m=w;v<m;v+=3){const N=v,L=v+1,R=v+2;a=ul(this,d,e,r,g,_,y,N,L,R),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function u0(s,e,n,r,a,u,d,f){let p;if(e.side===Rn?p=r.intersectTriangle(d,u,a,!0,f):p=r.intersectTriangle(a,u,d,e.side===xr,f),p===null)return null;ll.copy(f),ll.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(ll);return g<n.near||g>n.far?null:{distance:g,point:ll.clone(),object:s}}function ul(s,e,n,r,a,u,d,f,p,g){s.getVertexPosition(f,rl),s.getVertexPosition(p,sl),s.getVertexPosition(g,ol);const _=u0(s,e,n,r,rl,sl,ol,Yp);if(_){const y=new ie;oi.getBarycoord(Yp,rl,sl,ol,y),a&&(_.uv=oi.getInterpolatedAttribute(a,f,p,g,y,new Pt)),u&&(_.uv1=oi.getInterpolatedAttribute(u,f,p,g,y,new Pt)),d&&(_.normal=oi.getInterpolatedAttribute(d,f,p,g,y,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:g,normal:new ie,materialIndex:0};oi.getNormal(rl,sl,ol,x.normal),_.face=x,_.barycoord=y}return _}class zo extends ui{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],g=[],_=[],y=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new zi(g,3)),this.setAttribute("normal",new zi(_,3)),this.setAttribute("uv",new zi(y,2));function T(w,v,m,N,L,R,K,k,F,X,P){const C=R/F,B=K/X,ue=R/2,ee=K/2,fe=k/2,he=F+1,J=X+1;let Q=0,U=0;const le=new ie;for(let oe=0;oe<J;oe++){const I=oe*B-ee;for(let se=0;se<he;se++){const Ce=se*C-ue;le[w]=Ce*N,le[v]=I*L,le[m]=fe,g.push(le.x,le.y,le.z),le[w]=0,le[v]=0,le[m]=k>0?1:-1,_.push(le.x,le.y,le.z),y.push(se/F),y.push(1-oe/X),Q+=1}}for(let oe=0;oe<X;oe++)for(let I=0;I<F;I++){const se=x+I+he*oe,Ce=x+I+he*(oe+1),q=x+(I+1)+he*(oe+1),ce=x+(I+1)+he*oe;p.push(se,Ce,ce),p.push(Ce,q,ce),U+=6}f.addGroup(S,U,P),S+=U,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function gn(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const a in r)e[a]=r[a]}return e}function c0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Zm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const f0={clone:Vs,merge:gn};var d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Xs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Qm extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ie,qp=new Pt,$p=new Pt;class jn extends Qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nf*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,$p),n.subVectors($p,qp)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,g=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*r/g,a*=d.width/p,r*=d.height/g}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ls=1;class p0 extends _n{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(bs,Ls,e,n);a.layers=this.layers,this.add(a);const u=new jn(bs,Ls,e,n);u.layers=this.layers,this.add(u);const d=new jn(bs,Ls,e,n);d.layers=this.layers,this.add(d);const f=new jn(bs,Ls,e,n);f.layers=this.layers,this.add(f);const p=new jn(bs,Ls,e,n);p.layers=this.layers,this.add(p);const g=new jn(bs,Ls,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,p]=n;for(const g of n)this.remove(g);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,g,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Jm extends Pn{constructor(e,n,r,a,u,d,f,p,g,_){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,a,u,d,f,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m0 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new zo(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:_r});u.uniforms.tEquirect.value=n;const d=new ki(a,u),f=n.minFilter;return n.minFilter===jr&&(n.minFilter=_i),new p0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const kc=new ie,g0=new ie,_0=new ot;class Hr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=kc.subVectors(r,n).cross(g0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(kc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||_0.getNormalMatrix(e),a=this.coplanarPoint(kc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Bo,cl=new ie;class eg{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,d=new Hr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],p=a[3],g=a[4],_=a[5],y=a[6],x=a[7],S=a[8],T=a[9],w=a[10],v=a[11],m=a[12],N=a[13],L=a[14],R=a[15];if(r[0].setComponents(p-u,x-g,v-S,R-m).normalize(),r[1].setComponents(p+u,x+g,v+S,R+m).normalize(),r[2].setComponents(p+d,x+_,v+T,R+N).normalize(),r[3].setComponents(p-d,x-_,v-T,R-N).normalize(),r[4].setComponents(p-f,x-y,v-w,R-L).normalize(),n===Oi)r[5].setComponents(p+f,x+y,v+w,R+L).normalize();else if(n===wl)r[5].setComponents(f,y,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tg(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function v0(s){const e=new WeakMap;function n(f,p){const g=f.array,_=f.usage,y=g.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,g,_),f.onUploadCallback();let S;if(g instanceof Float32Array)S=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=s.SHORT;else if(g instanceof Uint32Array)S=s.UNSIGNED_INT;else if(g instanceof Int32Array)S=s.INT;else if(g instanceof Int8Array)S=s.BYTE;else if(g instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,g){const _=p.array,y=p.updateRanges;if(s.bindBuffer(g,f),y.length===0)s.bufferSubData(g,0,_);else{y.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<y.length;S++){const T=y[x],w=y[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,y[x]=w)}y.length=x+1;for(let S=0,T=y.length;S<T;S++){const w=y[S];s.bufferSubData(g,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:a,remove:u,update:d}}class Ll extends ui{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),g=f+1,_=p+1,y=e/f,x=n/p,S=[],T=[],w=[],v=[];for(let m=0;m<_;m++){const N=m*x-d;for(let L=0;L<g;L++){const R=L*y-u;T.push(R,-N,0),w.push(0,0,1),v.push(L/f),v.push(1-m/p)}}for(let m=0;m<p;m++)for(let N=0;N<f;N++){const L=N+g*m,R=N+g*(m+1),K=N+1+g*(m+1),k=N+1+g*m;S.push(L,R,k),S.push(R,K,k)}this.setIndex(S),this.setAttribute("position",new zi(T,3)),this.setAttribute("normal",new zi(w,3)),this.setAttribute("uv",new zi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,D0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Oy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,By=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ky=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:x0,alphahash_pars_fragment:y0,alphamap_fragment:S0,alphamap_pars_fragment:M0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:w0,aomap_pars_fragment:A0,batching_pars_vertex:C0,batching_vertex:R0,begin_vertex:P0,beginnormal_vertex:b0,bsdfs:L0,iridescence_fragment:D0,bumpmap_pars_fragment:N0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:k0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:j0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:J0,envmap_pars_vertex:ex,envmap_physical_pars_fragment:fx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:ux,lights_pars_begin:cx,lights_toon_fragment:dx,lights_toon_pars_fragment:hx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:wx,map_pars_fragment:Ax,map_particle_fragment:Cx,map_particle_pars_fragment:Rx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:bx,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Ux,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:kx,normal_pars_vertex:Bx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:jx,packing:Yx,premultiplied_alpha_fragment:qx,project_vertex:$x,dithering_fragment:Kx,dithering_pars_fragment:Zx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:ry,skinning_pars_vertex:sy,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:uy,tonemapping_fragment:cy,tonemapping_pars_fragment:fy,transmission_fragment:dy,transmission_pars_fragment:hy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:Sy,cube_vert:My,cube_frag:Ey,depth_vert:Ty,depth_frag:wy,distanceRGBA_vert:Ay,distanceRGBA_frag:Cy,equirect_vert:Ry,equirect_frag:Py,linedashed_vert:by,linedashed_frag:Ly,meshbasic_vert:Dy,meshbasic_frag:Ny,meshlambert_vert:Iy,meshlambert_frag:Uy,meshmatcap_vert:Fy,meshmatcap_frag:Oy,meshnormal_vert:ky,meshnormal_frag:By,meshphong_vert:zy,meshphong_frag:Hy,meshphysical_vert:Vy,meshphysical_frag:Gy,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:jy,points_frag:Yy,shadow_vert:qy,shadow_frag:$y,sprite_vert:Ky,sprite_frag:Zy},be={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Mt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:gn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:gn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:gn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:gn([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:gn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:gn([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:gn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:gn([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:gn([be.common,be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:gn([be.lights,be.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};gi.physical={uniforms:gn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const fl={r:0,b:0,g:0},Br=new Vi,Qy=new Bt;function Jy(s,e,n,r,a,u,d){const f=new Mt(0);let p=u===!0?0:1,g,_,y=null,x=0,S=null;function T(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?n:e).get(L)),L}function w(N){let L=!1;const R=T(N);R===null?m(f,p):R&&R.isColor&&(m(R,1),L=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,d):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(N,L){const R=T(L);R&&(R.isCubeTexture||R.mapping===Pl)?(_===void 0&&(_=new ki(new zo(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Vs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(K,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(L.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Br)),_.material.toneMapped=vt.getTransfer(R.colorSpace)!==Ct,(y!==R||x!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=R,x=R.version,S=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new ki(new Ll(2,2),new yr({name:"BackgroundMaterial",uniforms:Vs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.toneMapped=vt.getTransfer(R.colorSpace)!==Ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||x!==R.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=R,x=R.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function m(N,L){N.getRGB(fl,Zm(s)),r.buffers.color.setClear(fl.r,fl.g,fl.b,L,d)}return{getClearColor:function(){return f},setClearColor:function(N,L=1){f.set(N),p=L,m(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,m(f,p)},render:w,addToRenderList:v}}function eS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,d=!1;function f(C,B,ue,ee,fe){let he=!1;const J=y(ee,ue,B);u!==J&&(u=J,g(u.object)),he=S(C,ee,ue,fe),he&&T(C,ee,ue,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,R(C,B,ue,ee),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function y(C,B,ue){const ee=ue.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let he=fe[B.id];he===void 0&&(he={},fe[B.id]=he);let J=he[ee];return J===void 0&&(J=x(p()),he[ee]=J),J}function x(C){const B=[],ue=[],ee=[];for(let fe=0;fe<n;fe++)B[fe]=0,ue[fe]=0,ee[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ue,attributeDivisors:ee,object:C,attributes:{},index:null}}function S(C,B,ue,ee){const fe=u.attributes,he=B.attributes;let J=0;const Q=ue.getAttributes();for(const U in Q)if(Q[U].location>=0){const oe=fe[U];let I=he[U];if(I===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;J++}return u.attributesNum!==J||u.index!==ee}function T(C,B,ue,ee){const fe={},he=B.attributes;let J=0;const Q=ue.getAttributes();for(const U in Q)if(Q[U].location>=0){let oe=he[U];oe===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),fe[U]=I,J++}u.attributes=fe,u.attributesNum=J,u.index=ee}function w(){const C=u.newAttributes;for(let B=0,ue=C.length;B<ue;B++)C[B]=0}function v(C){m(C,0)}function m(C,B){const ue=u.newAttributes,ee=u.enabledAttributes,fe=u.attributeDivisors;ue[C]=1,ee[C]===0&&(s.enableVertexAttribArray(C),ee[C]=1),fe[C]!==B&&(s.vertexAttribDivisor(C,B),fe[C]=B)}function N(){const C=u.newAttributes,B=u.enabledAttributes;for(let ue=0,ee=B.length;ue<ee;ue++)B[ue]!==C[ue]&&(s.disableVertexAttribArray(ue),B[ue]=0)}function L(C,B,ue,ee,fe,he,J){J===!0?s.vertexAttribIPointer(C,B,ue,fe,he):s.vertexAttribPointer(C,B,ue,ee,fe,he)}function R(C,B,ue,ee){w();const fe=ee.attributes,he=ue.getAttributes(),J=B.defaultAttributeValues;for(const Q in he){const U=he[Q];if(U.location>=0){let le=fe[Q];if(le===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const oe=le.normalized,I=le.itemSize,se=e.get(le);if(se===void 0)continue;const Ce=se.buffer,q=se.type,ce=se.bytesPerElement,Se=q===s.INT||q===s.UNSIGNED_INT||le.gpuType===kf;if(le.isInterleavedBufferAttribute){const _e=le.data,Ae=_e.stride,Ie=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Ze=0;Ze<U.locationSize;Ze++)m(U.location+Ze,_e.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ze=0;Ze<U.locationSize;Ze++)v(U.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ze=0;Ze<U.locationSize;Ze++)L(U.location+Ze,I/U.locationSize,q,oe,Ae*ce,(Ie+I/U.locationSize*Ze)*ce,Se)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)m(U.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<U.locationSize;_e++)v(U.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let _e=0;_e<U.locationSize;_e++)L(U.location+_e,I/U.locationSize,q,oe,I*ce,I/U.locationSize*_e*ce,Se)}}else if(J!==void 0){const oe=J[Q];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(U.location,oe);break;case 3:s.vertexAttrib3fv(U.location,oe);break;case 4:s.vertexAttrib4fv(U.location,oe);break;default:s.vertexAttrib1fv(U.location,oe)}}}}N()}function K(){X();for(const C in r){const B=r[C];for(const ue in B){const ee=B[ue];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete B[ue]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ue in B){const ee=B[ue];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete B[ue]}delete r[C.id]}function F(C){for(const B in r){const ue=r[B];if(ue[C.id]===void 0)continue;const ee=ue[C.id];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete ue[C.id]}}function X(){P(),d=!0,u!==a&&(u=a,g(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:K,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:v,disableUnusedAttributes:N}}function tS(s,e,n){let r;function a(g){r=g}function u(g,_){s.drawArrays(r,g,_),n.update(_,r,1)}function d(g,_,y){y!==0&&(s.drawArraysInstanced(r,g,_,y),n.update(_,r,y))}function f(g,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,_,0,y);let S=0;for(let T=0;T<y;T++)S+=_[T];n.update(S,r,1)}function p(g,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<g.length;T++)d(g[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,g,0,_,0,x,0,y);let T=0;for(let w=0;w<y;w++)T+=_[w]*x[w];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function nS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(F){return!(F!==ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const X=F===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Hi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Fi&&!X)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=T>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:K,maxSamples:k}}function iS(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new Hr,f=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const T=y.clippingPlanes,w=y.clipIntersection,v=y.clipShadows,m=s.get(y);if(!a||T===null||T.length===0||u&&!v)u?_(null):g();else{const N=u?0:r,L=N*4;let R=m.clippingState||null;p.value=R,R=_(T,x,L,S);for(let K=0;K!==L;++K)R[K]=n[K];m.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,T){const w=y!==null?y.length:0;let v=null;if(w!==0){if(v=p.value,T!==!0||v===null){const m=S+w*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,R=S;L!==w;++L,R+=4)d.copy(y[L]).applyMatrix4(N,f),d.normal.toArray(v,R),v[R+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function rS(s){let e=new WeakMap;function n(d,f){return f===nf?d.mapping=ks:f===rf&&(d.mapping=Bs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===nf||f===rf)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new m0(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",a),n(g.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class sS extends Qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,d=u+g*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,Kp=[.125,.215,.35,.446,.526,.582],Wr=20,Bc=new sS,Zp=new Mt;let zc=null,Hc=0,Vc=0,Gc=!1;const Vr=(1+Math.sqrt(5))/2,Ds=1/Vr,Qp=[new ie(-Vr,Ds,0),new ie(Vr,Ds,0),new ie(-Ds,0,Vr),new ie(Ds,0,Vr),new ie(0,Vr,-Ds),new ie(0,Vr,Ds),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Hc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Uo,format:ai,colorSpace:Gs,depthBuffer:!1},a=em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(u)),this._blurMaterial=aS(u,e,n)}return a}_compileMaterial(e){const n=new ki(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,r,a){const f=new jn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(Zp),_.toneMapping=vr,_.autoClear=!1;const S=new qm({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),T=new ki(new zo,S);let w=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,w=!0):(S.color.copy(Zp),w=!0);for(let m=0;m<6;m++){const N=m%3;N===0?(f.up.set(0,p[m],0),f.lookAt(g[m],0,0)):N===1?(f.up.set(0,0,p[m]),f.lookAt(0,g[m],0)):(f.up.set(0,p[m],0),f.lookAt(0,0,g[m]));const L=this._cubeSize;dl(a,N*L,m>2?L:0,L,L),_.setRenderTarget(a),w&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ks||e.mapping===Bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new ki(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;dl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Bc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Qp[(a-u-1)%Qp.length];this._blur(e,u-1,u,d,f)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const p=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new ki(this._lodPlanes[a],g),x=g.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Wr-1),w=u/T,v=isFinite(u)?1+Math.floor(_*w):Wr;v>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Wr}`);const m=[];let N=0;for(let F=0;F<Wr;++F){const X=F/w,P=Math.exp(-X*X/2);m.push(P),F===0?N+=P:F<v&&(N+=2*P)}for(let F=0;F<m.length;F++)m[F]=m[F]/N;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=m,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const R=this._sizeLods[a],K=3*R*(a>L-Ns?a-L+Ns:0),k=4*(this._cubeSize-R);dl(n,K,k,3*R,2*R),p.setRenderTarget(n),p.render(y,Bc)}}function oS(s){const e=[],n=[],r=[];let a=s;const u=s-Ns+1+Kp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-Ns?p=Kp[d-s+Ns-1]:d===0&&(p=0),r.push(p);const g=1/(f-2),_=-g,y=1+g,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,T=6,w=3,v=2,m=1,N=new Float32Array(w*T*S),L=new Float32Array(v*T*S),R=new Float32Array(m*T*S);for(let k=0;k<S;k++){const F=k%3*2/3-1,X=k>2?0:-1,P=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];N.set(P,w*T*k),L.set(x,v*T*k);const C=[k,k,k,k,k,k];R.set(C,m*T*k)}const K=new ui;K.setAttribute("position",new qn(N,w)),K.setAttribute("uv",new qn(L,v)),K.setAttribute("faceIndex",new qn(R,m)),e.push(K),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function em(s,e,n){const r=new qr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function aS(s,e,n){const r=new Float32Array(Wr),a=new ie(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function tm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function nm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===nf||p===rf,_=p===ks||p===Bs;if(g||_){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Jp(s)),y=g?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return g&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Jp(s)),y=g?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",u),y.texture):null}}}return f}function a(f){let p=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&p++;return p===g}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function uS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Do("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function cS(s,e,n,r){const a={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const w=x.morphAttributes[T];for(let v=0,m=w.length;v<m;v++)e.remove(w[v])}x.removeEventListener("dispose",d),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const w=S[T];for(let v=0,m=w.length;v<m;v++)e.update(w[v],s.ARRAY_BUFFER)}}function g(y){const x=[],S=y.index,T=y.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let L=0,R=N.length;L<R;L+=3){const K=N[L+0],k=N[L+1],F=N[L+2];x.push(K,k,k,F,F,K)}}else if(T!==void 0){const N=T.array;w=T.version;for(let L=0,R=N.length/3-1;L<R;L+=3){const K=L+0,k=L+1,F=L+2;x.push(K,k,k,F,F,K)}}else return;const v=new(Gm(x)?Km:$m)(x,1);v.version=w;const m=u.get(y);m&&e.remove(m),u.set(y,v)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&g(y)}else g(y);return u.get(y)}return{get:f,update:p,getWireframeAttribute:_}}function fS(s,e,n){let r;function a(x){r=x}let u,d;function f(x){u=x.type,d=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*d),n.update(S,r,1)}function g(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,x*d,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,T);let v=0;for(let m=0;m<T;m++)v+=S[m];n.update(v,r,1)}function y(x,S,T,w){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<x.length;m++)g(x[m]/d,S[m],w[m]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,w,0,T);let m=0;for(let N=0;N<T;N++)m+=S[N]*w[N];n.update(m,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function dS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function hS(s,e,n){const r=new WeakMap,a=new Ht;function u(d,f,p){const g=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let C=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,m=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),w===!0&&(R=2),v===!0&&(R=3);let K=f.attributes.position.count*R,k=1;K>e.maxTextureSize&&(k=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const F=new Float32Array(K*k*4*y),X=new Xm(F,K,k,y);X.type=Fi,X.needsUpdate=!0;const P=R*4;for(let B=0;B<y;B++){const ue=m[B],ee=N[B],fe=L[B],he=K*k*4*B;for(let J=0;J<ue.count;J++){const Q=J*P;T===!0&&(a.fromBufferAttribute(ue,J),F[he+Q+0]=a.x,F[he+Q+1]=a.y,F[he+Q+2]=a.z,F[he+Q+3]=0),w===!0&&(a.fromBufferAttribute(ee,J),F[he+Q+4]=a.x,F[he+Q+5]=a.y,F[he+Q+6]=a.z,F[he+Q+7]=0),v===!0&&(a.fromBufferAttribute(fe,J),F[he+Q+8]=a.x,F[he+Q+9]=a.y,F[he+Q+10]=a.z,F[he+Q+11]=fe.itemSize===4?a.w:1)}}x={count:y,texture:X,size:new Pt(K,k)},r.set(f,x),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let v=0;v<g.length;v++)T+=g[v];const w=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function pS(s,e,n,r){let a=new WeakMap;function u(p){const g=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==g&&(e.update(y),a.set(y,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return y}function d(){a=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}class ng extends Pn{constructor(e,n,r,a,u,d,f,p,g,_=Us){if(_!==Us&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Us&&(r=Yr),r===void 0&&_===Hs&&(r=zs),super(null,a,u,d,f,p,_,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:li,this.minFilter=p!==void 0?p:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ig=new Pn,im=new ng(1,1),rg=new Xm,sg=new Jv,og=new Jm,rm=[],sm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=rm[a];if(u===void 0&&(u=new Float32Array(a),rm[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(u,f)}return u}function qt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function $t(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=sm[e];n===void 0&&(n=new Int32Array(e),sm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function mS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;s.uniform2fv(this.addr,e),$t(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;s.uniform3fv(this.addr,e),$t(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;s.uniform4fv(this.addr,e),$t(n,e)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,r))return;lm.set(r),s.uniformMatrix2fv(this.addr,!1,lm),$t(n,r)}}function yS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,r))return;am.set(r),s.uniformMatrix3fv(this.addr,!1,am),$t(n,r)}}function SS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,r))return;om.set(r),s.uniformMatrix4fv(this.addr,!1,om),$t(n,r)}}function MS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;s.uniform2iv(this.addr,e),$t(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;s.uniform3iv(this.addr,e),$t(n,e)}}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;s.uniform4iv(this.addr,e),$t(n,e)}}function AS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;s.uniform2uiv(this.addr,e),$t(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;s.uniform3uiv(this.addr,e),$t(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;s.uniform4uiv(this.addr,e),$t(n,e)}}function bS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(im.compareFunction=Vm,u=im):u=ig,n.setTexture2D(e||u,a)}function LS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||sg,a)}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||og,a)}function NS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||rg,a)}function IS(s){switch(s){case 5126:return mS;case 35664:return gS;case 35665:return _S;case 35666:return vS;case 35674:return xS;case 35675:return yS;case 35676:return SS;case 5124:case 35670:return MS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return CS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return NS}}function US(s,e){s.uniform1fv(this.addr,e)}function FS(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function OS(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function kS(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function BS(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function zS(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function HS(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function VS(s,e){s.uniform1iv(this.addr,e)}function GS(s,e){s.uniform2iv(this.addr,e)}function WS(s,e){s.uniform3iv(this.addr,e)}function XS(s,e){s.uniform4iv(this.addr,e)}function jS(s,e){s.uniform1uiv(this.addr,e)}function YS(s,e){s.uniform2uiv(this.addr,e)}function qS(s,e){s.uniform3uiv(this.addr,e)}function $S(s,e){s.uniform4uiv(this.addr,e)}function KS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||ig,u[d])}function ZS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||sg,u[d])}function QS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||og,u[d])}function JS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);qt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||rg,u[d])}function eM(s){switch(s){case 5126:return US;case 35664:return FS;case 35665:return OS;case 35666:return kS;case 35674:return BS;case 35675:return zS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return jS;case 36294:return YS;case 36295:return qS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return JS}}class tM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=IS(n.type)}}class nM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eM(n.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function um(s,e){s.seq.push(e),s.map[e.id]=e}function rM(s,e,n){const r=s.name,a=r.length;for(Wc.lastIndex=0;;){const u=Wc.exec(r),d=Wc.lastIndex;let f=u[1];const p=u[2]==="]",g=u[3];if(p&&(f=f|0),g===void 0||g==="["&&d+2===a){um(n,g===void 0?new tM(f,s,e):new nM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new iM(f),um(n,y)),n=y}}}class Tl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);rM(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function cm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const sM=37297;let oM=0;function aM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const fm=new ot;function lM(s){vt._getMatrix(fm,vt.workingColorSpace,s);const e=`mat3( ${fm.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(s)){case bl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+aM(s.getShaderSource(e),d)}else return a}function uM(s,e){const n=lM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function cM(s,e){let n;switch(e){case wv:n="Linear";break;case Av:n="Reinhard";break;case Cv:n="Cineon";break;case Rv:n="ACESFilmic";break;case bv:n="AgX";break;case Lv:n="Neutral";break;case Pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new ie;function fM(){vt.getLuminanceCoefficients(hl);const s=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function hM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function pM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function No(s){return s!==""}function hm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(s){return s.replace(mM,_M)}const gM=new Map;function _M(s,e){let n=at[e];if(n===void 0){const r=gM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return If(n)}const vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(s){return s.replace(vM,xM)}function xM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function TM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function wM(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=yM(n),g=SM(n),_=MM(n),y=EM(n),x=TM(n),S=dM(n),T=hM(u),w=a.createProgram();let v,m,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),m.length>0&&(m+=`
`)):(v=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),m=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?at.tonemapping_pars_fragment:"",n.toneMapping!==vr?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,uM("linearToOutputTexel",n.outputColorSpace),fM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),d=If(d),d=hm(d,n),d=pm(d,n),f=If(f),f=hm(f,n),f=pm(f,n),d=mm(d),f=mm(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=N+v+d,R=N+m+f,K=cm(a,a.VERTEX_SHADER,L),k=cm(a,a.FRAGMENT_SHADER,R);a.attachShader(w,K),a.attachShader(w,k),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(B){if(s.debug.checkShaderErrors){const ue=a.getProgramInfoLog(w).trim(),ee=a.getShaderInfoLog(K).trim(),fe=a.getShaderInfoLog(k).trim();let he=!0,J=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,K,k);else{const Q=dm(a,K,"vertex"),U=dm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ue+`
`+Q+`
`+U)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(ee===""||fe==="")&&(J=!1);J&&(B.diagnostics={runnable:he,programLog:ue,vertexShader:{log:ee,prefix:v},fragmentShader:{log:fe,prefix:m}})}a.deleteShader(K),a.deleteShader(k),X=new Tl(a,w),P=pM(a,w)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,sM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=K,this.fragmentShader=k,this}let AM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new RM(e),n.set(e,r)),r}}class RM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function PM(s,e,n,r,a,u,d){const f=new jm,p=new CM,g=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return g.add(P),P===0?"uv":`uv${P}`}function v(P,C,B,ue,ee){const fe=ue.fog,he=ee.geometry,J=P.isMeshStandardMaterial?ue.environment:null,Q=(P.isMeshStandardMaterial?n:e).get(P.envMap||J),U=Q&&Q.mapping===Pl?Q.image.height:null,le=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=oe!==void 0?oe.length:0;let se=0;he.morphAttributes.position!==void 0&&(se=1),he.morphAttributes.normal!==void 0&&(se=2),he.morphAttributes.color!==void 0&&(se=3);let Ce,q,ce,Se;if(le){const gt=gi[le];Ce=gt.vertexShader,q=gt.fragmentShader}else Ce=P.vertexShader,q=P.fragmentShader,p.update(P),ce=p.getVertexShaderID(P),Se=p.getFragmentShaderID(P);const _e=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,At=!!P.map,ht=!!P.matcap,bt=!!Q,W=!!P.aoMap,fn=!!P.lightMap,dt=!!P.bumpMap,ut=!!P.normalMap,qe=!!P.displacementMap,Tt=!!P.emissiveMap,Ye=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,Z=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,de=P.sheen>0,Ve=P.transmission>0,Re=E&&!!P.anisotropyMap,Ue=Z&&!!P.clearcoatMap,lt=Z&&!!P.clearcoatNormalMap,Me=Z&&!!P.clearcoatRoughnessMap,Oe=ve&&!!P.iridescenceMap,Qe=ve&&!!P.iridescenceThicknessMap,Je=de&&!!P.sheenColorMap,ke=de&&!!P.sheenRoughnessMap,ct=!!P.specularMap,it=!!P.specularColorMap,Et=!!P.specularIntensityMap,H=Ve&&!!P.transmissionMap,Pe=Ve&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,Le=!!P.alphaHash,rt=!!P.extensions;let Dt=vr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Wt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ce,fragmentShader:q,defines:P.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ee.instanceColor!==null,instancingMorph:Ie&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Gs,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:ht,envMap:bt,envMapMode:bt&&Q.mapping,envMapCubeUVHeight:U,aoMap:W,lightMap:fn,bumpMap:dt,normalMap:ut,displacementMap:x&&qe,emissiveMap:Tt,normalMapObjectSpace:ut&&P.normalMapType===Fv,normalMapTangentSpace:ut&&P.normalMapType===Uv,metalnessMap:Ye,roughnessMap:b,anisotropy:E,anisotropyMap:Re,clearcoat:Z,clearcoatMap:Ue,clearcoatNormalMap:lt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:it,specularIntensityMap:Et,transmission:Ve,transmissionMap:H,thicknessMap:Pe,gradientMap:ae,opaque:P.transparent===!1&&P.blending===Is&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:P.combine,mapUv:At&&w(P.map.channel),aoMapUv:W&&w(P.aoMap.channel),lightMapUv:fn&&w(P.lightMap.channel),bumpMapUv:dt&&w(P.bumpMap.channel),normalMapUv:ut&&w(P.normalMap.channel),displacementMapUv:qe&&w(P.displacementMap.channel),emissiveMapUv:Tt&&w(P.emissiveMap.channel),metalnessMapUv:Ye&&w(P.metalnessMap.channel),roughnessMapUv:b&&w(P.roughnessMap.channel),anisotropyMapUv:Re&&w(P.anisotropyMap.channel),clearcoatMapUv:Ue&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(P.sheenRoughnessMap.channel),specularMapUv:ct&&w(P.specularMap.channel),specularColorMapUv:it&&w(P.specularColorMap.channel),specularIntensityMapUv:Et&&w(P.specularIntensityMap.channel),transmissionMapUv:H&&w(P.transmissionMap.channel),thicknessMapUv:Pe&&w(P.thicknessMap.channel),alphaMapUv:pe&&w(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(At||pe),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ui,flipSided:P.side===Rn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=g.has(1),Wt.vertexUv2s=g.has(2),Wt.vertexUv3s=g.has(3),g.clear(),Wt}function m(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)C.push(B),C.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(N(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function N(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),P.push(f.mask)}function R(P){const C=T[P.type];let B;if(C){const ue=gi[C];B=f0.clone(ue.uniforms)}else B=P.uniforms;return B}function K(P,C){let B;for(let ue=0,ee=_.length;ue<ee;ue++){const fe=_[ue];if(fe.cacheKey===C){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new wM(s,C,P,u),_.push(B)),B}function k(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function F(P){p.remove(P)}function X(){p.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:K,releaseProgram:k,releaseShaderCache:F,programs:_,dispose:X}}function bM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,p){s.get(d)[f]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function LM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,S,T,w,v){let m=s[e];return m===void 0?(m={id:y.id,object:y,geometry:x,material:S,groupOrder:T,renderOrder:y.renderOrder,z:w,group:v},s[e]=m):(m.id=y.id,m.object=y,m.geometry=x,m.material=S,m.groupOrder=T,m.renderOrder=y.renderOrder,m.z=w,m.group=v),e++,m}function f(y,x,S,T,w,v){const m=d(y,x,S,T,w,v);S.transmission>0?r.push(m):S.transparent===!0?a.push(m):n.push(m)}function p(y,x,S,T,w,v){const m=d(y,x,S,T,w,v);S.transmission>0?r.unshift(m):S.transparent===!0?a.unshift(m):n.unshift(m)}function g(y,x){n.length>1&&n.sort(y||LM),r.length>1&&r.sort(x||_m),a.length>1&&a.sort(x||_m)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:p,finish:_,sort:g}}function DM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new vm,s.set(r,[d])):a>=u.length?(d=new vm,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function NM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Mt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function IM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let UM=0;function FM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OM(s){const e=new NM,n=IM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ie);const a=new ie,u=new Bt,d=new Bt;function f(g){let _=0,y=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,w=0,v=0,m=0,N=0,L=0,R=0,K=0,k=0,F=0;g.sort(FM);for(let P=0,C=g.length;P<C;P++){const B=g[P],ue=B.color,ee=B.intensity,fe=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ue.r*ee,y+=ue.g*ee,x+=ue.b*ee;else if(B.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(B.sh.coefficients[J],ee);F++}else if(B.isDirectionalLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,U=n.get(B);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.directionalShadow[S]=U,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=B.shadow.matrix,N++}r.directional[S]=J,S++}else if(B.isSpotLight){const J=e.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(ue).multiplyScalar(ee),J.distance=fe,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,r.spot[w]=J;const Q=B.shadow;if(B.map&&(r.spotLightMap[K]=B.map,K++,Q.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[w]=Q.matrix,B.castShadow){const U=n.get(B);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.spotShadow[w]=U,r.spotShadowMap[w]=he,R++}w++}else if(B.isRectAreaLight){const J=e.get(B);J.color.copy(ue).multiplyScalar(ee),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=J,v++}else if(B.isPointLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){const Q=B.shadow,U=n.get(B);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,r.pointShadow[T]=U,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=B.shadow.matrix,L++}r.point[T]=J,T++}else if(B.isHemisphereLight){const J=e.get(B);J.skyColor.copy(B.color).multiplyScalar(ee),J.groundColor.copy(B.groundColor).multiplyScalar(ee),r.hemi[m]=J,m++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==v||X.hemiLength!==m||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==R||X.numSpotMaps!==K||X.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=v,r.point.length=T,r.hemi.length=m,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+K-k,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,X.directionalLength=S,X.pointLength=T,X.spotLength=w,X.rectAreaLength=v,X.hemiLength=m,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=R,X.numSpotMaps=K,X.numLightProbes=F,r.version=UM++)}function p(g,_){let y=0,x=0,S=0,T=0,w=0;const v=_.matrixWorldInverse;for(let m=0,N=g.length;m<N;m++){const L=g[m];if(L.isDirectionalLight){const R=r.directional[y];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),y++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),S++}else if(L.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),d.identity(),u.copy(L.matrixWorld),u.premultiply(v),d.extractRotation(u),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(v),w++}}}return{setup:f,setupView:p,state:r}}function xm(s){const e=new OM(s),n=[],r=[];function a(_){g.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function kM(s){let e=new WeakMap;function n(a,u=0){const d=e.get(a);let f;return d===void 0?(f=new xm(s),e.set(a,[f])):u>=d.length?(f=new xm(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class BM extends Xs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(s,e,n){let r=new eg;const a=new Pt,u=new Pt,d=new Ht,f=new BM({depthPacking:Iv}),p=new zM,g={},_=n.maxTextureSize,y={[xr]:Rn,[Rn]:xr,[Ui]:Ui},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new ui;T.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ki(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let m=this.type;this.render=function(k,F,X){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(_r),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const ee=m!==Ii&&this.type===Ii,fe=m===Ii&&this.type!==Ii;for(let he=0,J=k.length;he<J;he++){const Q=k[he],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const le=U.getFrameExtents();if(a.multiply(le),u.copy(U.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,U.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,U.mapSize.y=u.y)),U.map===null||ee===!0||fe===!0){const I=this.type!==Ii?{minFilter:li,magFilter:li}:{};U.map!==null&&U.map.dispose(),U.map=new qr(a.x,a.y,I),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const oe=U.getViewportCount();for(let I=0;I<oe;I++){const se=U.getViewport(I);d.set(u.x*se.x,u.y*se.y,u.x*se.z,u.y*se.w),ue.viewport(d),U.updateMatrices(Q,I),r=U.getFrustum(),R(F,X,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===Ii&&N(U,X),U.needsUpdate=!1}m=this.type,v.needsUpdate=!1,s.setRenderTarget(P,C,B)};function N(k,F){const X=e.update(w);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new qr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(F,null,X,x,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(F,null,X,S,w,null)}function L(k,F,X,P){let C=null;const B=X.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)C=B;else if(C=X.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=C.uuid,ee=F.uuid;let fe=g[ue];fe===void 0&&(fe={},g[ue]=fe);let he=fe[ee];he===void 0&&(he=C.clone(),fe[ee]=he,F.addEventListener("dispose",K)),C=he}if(C.visible=F.visible,C.wireframe=F.wireframe,P===Ii?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:y[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=s.properties.get(C);ue.light=X}return C}function R(k,F,X,P,C){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Ii)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),fe=k.material;if(Array.isArray(fe)){const he=ee.groups;for(let J=0,Q=he.length;J<Q;J++){const U=he[J],le=fe[U.materialIndex];if(le&&le.visible){const oe=L(k,le,P,C);k.onBeforeShadow(s,k,F,X,ee,oe,U),s.renderBufferDirect(X,null,ee,oe,k,U),k.onAfterShadow(s,k,F,X,ee,oe,U)}}}else if(fe.visible){const he=L(k,fe,P,C);k.onBeforeShadow(s,k,F,X,ee,he,null),s.renderBufferDirect(X,null,ee,he,k,null),k.onAfterShadow(s,k,F,X,ee,he,null)}}const ue=k.children;for(let ee=0,fe=ue.length;ee<fe;ee++)R(ue[ee],F,X,P,C)}function K(k){k.target.removeEventListener("dispose",K);for(const X in g){const P=g[X],C=k.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const WM={[$c]:Kc,[Zc]:ef,[Qc]:tf,[Os]:Jc,[Kc]:$c,[ef]:Zc,[tf]:Qc,[Jc]:Os};function XM(s,e){function n(){let H=!1;const Pe=new Ht;let ae=null;const pe=new Ht(0,0,0,0);return{setMask:function(De){ae!==De&&!H&&(s.colorMask(De,De,De,De),ae=De)},setLocked:function(De){H=De},setClear:function(De,Le,rt,Dt,Wt){Wt===!0&&(De*=Dt,Le*=Dt,rt*=Dt),Pe.set(De,Le,rt,Dt),pe.equals(Pe)===!1&&(s.clearColor(De,Le,rt,Dt),pe.copy(Pe))},reset:function(){H=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let H=!1,Pe=!1,ae=null,pe=null,De=null;return{setReversed:function(Le){if(Pe!==Le){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=De;De=null,this.setClear(Dt)}Pe=Le},getReversed:function(){return Pe},setTest:function(Le){Le?_e(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Le){ae!==Le&&!H&&(s.depthMask(Le),ae=Le)},setFunc:function(Le){if(Pe&&(Le=WM[Le]),pe!==Le){switch(Le){case $c:s.depthFunc(s.NEVER);break;case Kc:s.depthFunc(s.ALWAYS);break;case Zc:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case Qc:s.depthFunc(s.EQUAL);break;case Jc:s.depthFunc(s.GEQUAL);break;case ef:s.depthFunc(s.GREATER);break;case tf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Le}},setLocked:function(Le){H=Le},setClear:function(Le){De!==Le&&(Pe&&(Le=1-Le),s.clearDepth(Le),De=Le)},reset:function(){H=!1,ae=null,pe=null,De=null,Pe=!1}}}function a(){let H=!1,Pe=null,ae=null,pe=null,De=null,Le=null,rt=null,Dt=null,Wt=null;return{setTest:function(gt){H||(gt?_e(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(gt){Pe!==gt&&!H&&(s.stencilMask(gt),Pe=gt)},setFunc:function(gt,vn,dn){(ae!==gt||pe!==vn||De!==dn)&&(s.stencilFunc(gt,vn,dn),ae=gt,pe=vn,De=dn)},setOp:function(gt,vn,dn){(Le!==gt||rt!==vn||Dt!==dn)&&(s.stencilOp(gt,vn,dn),Le=gt,rt=vn,Dt=dn)},setLocked:function(gt){H=gt},setClear:function(gt){Wt!==gt&&(s.clearStencil(gt),Wt=gt)},reset:function(){H=!1,Pe=null,ae=null,pe=null,De=null,Le=null,rt=null,Dt=null,Wt=null}}}const u=new n,d=new r,f=new a,p=new WeakMap,g=new WeakMap;let _={},y={},x=new WeakMap,S=[],T=null,w=!1,v=null,m=null,N=null,L=null,R=null,K=null,k=null,F=new Mt(0,0,0),X=0,P=!1,C=null,B=null,ue=null,ee=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(U)[1]),J=Q>=1):U.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),J=Q>=2);let le=null,oe={};const I=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ce=new Ht().fromArray(I),q=new Ht().fromArray(se);function ce(H,Pe,ae,pe){const De=new Uint8Array(4),Le=s.createTexture();s.bindTexture(H,Le),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ae;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Pe+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Le}const Se={};Se[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),d.setFunc(Os),dt(!1),ut(Ep),_e(s.CULL_FACE),W(_r);function _e(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ie(H,Pe){return y[H]!==Pe?(s.bindFramebuffer(H,Pe),y[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ze(H,Pe){let ae=S,pe=!1;if(H){ae=x.get(Pe),ae===void 0&&(ae=[],x.set(Pe,ae));const De=H.textures;if(ae.length!==De.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,rt=De.length;Le<rt;Le++)ae[Le]=s.COLOR_ATTACHMENT0+Le;ae.length=De.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function At(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const ht={[Gr]:s.FUNC_ADD,[ov]:s.FUNC_SUBTRACT,[av]:s.FUNC_REVERSE_SUBTRACT};ht[lv]=s.MIN,ht[uv]=s.MAX;const bt={[cv]:s.ZERO,[fv]:s.ONE,[dv]:s.SRC_COLOR,[Yc]:s.SRC_ALPHA,[vv]:s.SRC_ALPHA_SATURATE,[gv]:s.DST_COLOR,[pv]:s.DST_ALPHA,[hv]:s.ONE_MINUS_SRC_COLOR,[qc]:s.ONE_MINUS_SRC_ALPHA,[_v]:s.ONE_MINUS_DST_COLOR,[mv]:s.ONE_MINUS_DST_ALPHA,[xv]:s.CONSTANT_COLOR,[yv]:s.ONE_MINUS_CONSTANT_COLOR,[Sv]:s.CONSTANT_ALPHA,[Mv]:s.ONE_MINUS_CONSTANT_ALPHA};function W(H,Pe,ae,pe,De,Le,rt,Dt,Wt,gt){if(H===_r){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(_e(s.BLEND),w=!0),H!==sv){if(H!==v||gt!==P){if((m!==Gr||R!==Gr)&&(s.blendEquation(s.FUNC_ADD),m=Gr,R=Gr),gt)switch(H){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.ONE,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ap:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,L=null,K=null,k=null,F.set(0,0,0),X=0,v=H,P=gt}return}De=De||Pe,Le=Le||ae,rt=rt||pe,(Pe!==m||De!==R)&&(s.blendEquationSeparate(ht[Pe],ht[De]),m=Pe,R=De),(ae!==N||pe!==L||Le!==K||rt!==k)&&(s.blendFuncSeparate(bt[ae],bt[pe],bt[Le],bt[rt]),N=ae,L=pe,K=Le,k=rt),(Dt.equals(F)===!1||Wt!==X)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Wt),F.copy(Dt),X=Wt),v=H,P=!1}function fn(H,Pe){H.side===Ui?Ae(s.CULL_FACE):_e(s.CULL_FACE);let ae=H.side===Rn;Pe&&(ae=!ae),dt(ae),H.blending===Is&&H.transparent===!1?W(_r):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const pe=H.stencilWrite;f.setTest(pe),pe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function ut(H){H!==nv?(_e(s.CULL_FACE),H!==B&&(H===Ep?s.cullFace(s.BACK):H===iv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=H}function qe(H){H!==ue&&(J&&s.lineWidth(H),ue=H)}function Tt(H,Pe,ae){H?(_e(s.POLYGON_OFFSET_FILL),(ee!==Pe||fe!==ae)&&(s.polygonOffset(Pe,ae),ee=Pe,fe=ae)):Ae(s.POLYGON_OFFSET_FILL)}function Ye(H){H?_e(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+he-1),le!==H&&(s.activeTexture(H),le=H)}function E(H,Pe,ae){ae===void 0&&(le===null?ae=s.TEXTURE0+he-1:ae=le);let pe=oe[ae];pe===void 0&&(pe={type:void 0,texture:void 0},oe[ae]=pe),(pe.type!==H||pe.texture!==Pe)&&(le!==ae&&(s.activeTexture(ae),le=ae),s.bindTexture(H,Pe||Se[H]),pe.type=H,pe.texture=Pe)}function Z(){const H=oe[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Ce.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ce.copy(H))}function ke(H){q.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),q.copy(H))}function ct(H,Pe){let ae=g.get(Pe);ae===void 0&&(ae=new WeakMap,g.set(Pe,ae));let pe=ae.get(H);pe===void 0&&(pe=s.getUniformBlockIndex(Pe,H.name),ae.set(H,pe))}function it(H,Pe){const pe=g.get(Pe).get(H);p.get(Pe)!==pe&&(s.uniformBlockBinding(Pe,pe,H.__bindingPointIndex),p.set(Pe,pe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,oe={},y={},x=new WeakMap,S=[],T=null,w=!1,v=null,m=null,N=null,L=null,R=null,K=null,k=null,F=new Mt(0,0,0),X=0,P=!1,C=null,B=null,ue=null,ee=null,fe=null,Ce.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),f.reset()}return{buffers:{color:u,depth:d,stencil:f},enable:_e,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:At,setBlending:W,setMaterial:fn,setFlipSided:dt,setCullFace:ut,setLineWidth:qe,setPolygonOffset:Tt,setScissorTest:Ye,activeTexture:b,bindTexture:E,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:Ve,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:Et}}function ym(s,e,n,r){const a=jM(r);switch(n){case Um:return s*e;case Om:return s*e;case km:return s*e*2;case Bm:return s*e/a.components*a.byteLength;case Hf:return s*e/a.components*a.byteLength;case zm:return s*e*2/a.components*a.byteLength;case Vf:return s*e*2/a.components*a.byteLength;case Fm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Gf:return s*e*4/a.components*a.byteLength;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:case cf:return Math.max(s,16)*Math.max(e,8)/4;case af:case uf:return Math.max(s,8)*Math.max(e,8)/2;case ff:case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case El:case Rf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hm:case bf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Lf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jM(s){switch(s){case Hi:case Dm:return{byteLength:1,components:1};case Io:case Nm:case Uo:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case Yr:case kf:case Fi:return{byteLength:4,components:1};case Im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function YM(s,e,n,r,a,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Pt,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return S?new OffscreenCanvas(b,E):Al("canvas")}function w(b,E,Z){let me=1;const ve=Ye(b);if((ve.width>Z||ve.height>Z)&&(me=Z/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(me*ve.width),Ve=Math.floor(me*ve.height);y===void 0&&(y=T(de,Ve));const Re=E?T(de,Ve):y;return Re.width=de,Re.height=Ve,Re.getContext("2d").drawImage(b,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Ve+")."),Re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),b;return b}function v(b){return b.generateMipmaps}function m(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,E,Z,me,ve=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=E;if(E===s.RED&&(Z===s.FLOAT&&(de=s.R32F),Z===s.HALF_FLOAT&&(de=s.R16F),Z===s.UNSIGNED_BYTE&&(de=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.R8UI),Z===s.UNSIGNED_SHORT&&(de=s.R16UI),Z===s.UNSIGNED_INT&&(de=s.R32UI),Z===s.BYTE&&(de=s.R8I),Z===s.SHORT&&(de=s.R16I),Z===s.INT&&(de=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(de=s.RG32F),Z===s.HALF_FLOAT&&(de=s.RG16F),Z===s.UNSIGNED_BYTE&&(de=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RG8UI),Z===s.UNSIGNED_SHORT&&(de=s.RG16UI),Z===s.UNSIGNED_INT&&(de=s.RG32UI),Z===s.BYTE&&(de=s.RG8I),Z===s.SHORT&&(de=s.RG16I),Z===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Z===s.UNSIGNED_INT&&(de=s.RGB32UI),Z===s.BYTE&&(de=s.RGB8I),Z===s.SHORT&&(de=s.RGB16I),Z===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Z===s.UNSIGNED_INT&&(de=s.RGBA32UI),Z===s.BYTE&&(de=s.RGBA8I),Z===s.SHORT&&(de=s.RGBA16I),Z===s.INT&&(de=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),E===s.RGBA){const Ve=ve?bl:vt.getTransfer(me);Z===s.FLOAT&&(de=s.RGBA32F),Z===s.HALF_FLOAT&&(de=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(de=Ve===Ct?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(b,E){let Z;return b?E===null||E===Yr||E===zs?Z=s.DEPTH24_STENCIL8:E===Fi?Z=s.DEPTH32F_STENCIL8:E===Io&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===zs?Z=s.DEPTH_COMPONENT24:E===Fi?Z=s.DEPTH_COMPONENT32F:E===Io&&(Z=s.DEPTH_COMPONENT16),Z}function K(b,E){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==li&&b.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function k(b){const E=b.target;E.removeEventListener("dispose",k),X(E),E.isVideoTexture&&_.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),C(E)}function X(b){const E=r.get(b);if(E.__webglInit===void 0)return;const Z=b.source,me=x.get(Z);if(me){const ve=me[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(b),Object.keys(me).length===0&&x.delete(Z)}r.remove(b)}function P(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const Z=b.source,me=x.get(Z);delete me[E.__cacheKey],d.memory.textures--}function C(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let ve=0;ve<E.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let me=0,ve=Z.length;me<ve;me++){const de=r.get(Z[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(Z[me])}r.remove(b)}let B=0;function ue(){B=0}function ee(){const b=B;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),B+=1,b}function fe(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function he(b,E){const Z=r.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,b,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function J(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){q(Z,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function Q(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){q(Z,b,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function U(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){ce(Z,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const le={[sf]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[of]:s.MIRRORED_REPEAT},oe={[li]:s.NEAREST,[Dv]:s.NEAREST_MIPMAP_NEAREST,[Ya]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[gc]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},I={[Ov]:s.NEVER,[Gv]:s.ALWAYS,[kv]:s.LESS,[Vm]:s.LEQUAL,[Bv]:s.EQUAL,[Vv]:s.GEQUAL,[zv]:s.GREATER,[Hv]:s.NOTEQUAL};function se(b,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===gc||E.magFilter===Ya||E.magFilter===jr||E.minFilter===_i||E.minFilter===gc||E.minFilter===Ya||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,le[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,oe[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==Ya&&E.minFilter!==jr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",k));const me=E.source;let ve=x.get(me);ve===void 0&&(ve={},x.set(me,ve));const de=fe(E);if(de!==b.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),ve[de].usedTimes++;const Ve=ve[b.__cacheKey];Ve!==void 0&&(ve[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(E)),b.__cacheKey=de,b.__webglTexture=ve[de].texture}return Z}function q(b,E,Z){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Ce(b,E),de=E.source;n.bindTexture(me,b.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(de);if(de.version!==Ve.__version||ve===!0){n.activeTexture(s.TEXTURE0+Z);const Re=vt.getPrimaries(vt.workingColorSpace),Ue=E.colorSpace===gr?null:vt.getPrimaries(E.colorSpace),lt=E.colorSpace===gr||Re===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Me=w(E.image,!1,a.maxTextureSize);Me=Tt(E,Me);const Oe=u.convert(E.format,E.colorSpace),Qe=u.convert(E.type);let Je=L(E.internalFormat,Oe,Qe,E.colorSpace,E.isVideoTexture);se(me,E);let ke;const ct=E.mipmaps,it=E.isVideoTexture!==!0,Et=Ve.__version===void 0||ve===!0,H=de.dataReady,Pe=K(E,Me);if(E.isDepthTexture)Je=R(E.format===Hs,E.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,Qe,null));else if(E.isDataTexture)if(ct.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Pe,Je,ct[0].width,ct[0].height);for(let ae=0,pe=ct.length;ae<pe;ae++)ke=ct[ae],it?H&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,ae,Je,ke.width,ke.height,0,Oe,Qe,ke.data);E.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Pe,Je,Me.width,Me.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,Qe,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,Qe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Je,ct[0].width,ct[0].height,Me.depth);for(let ae=0,pe=ct.length;ae<pe;ae++)if(ke=ct[ae],E.format!==ai)if(Oe!==null)if(it){if(H)if(E.layerUpdates.size>0){const De=ym(ke.width,ke.height,E.format,E.type);for(const Le of E.layerUpdates){const rt=ke.data.subarray(Le*De/ke.data.BYTES_PER_ELEMENT,(Le+1)*De/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Le,ke.width,ke.height,1,Oe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,Me.depth,Oe,Qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,ke.width,ke.height,Me.depth,0,Oe,Qe,ke.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Pe,Je,ct[0].width,ct[0].height);for(let ae=0,pe=ct.length;ae<pe;ae++)ke=ct[ae],E.format!==ai?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,ae,Je,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(E.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Je,Me.width,Me.height,Me.depth),H)if(E.layerUpdates.size>0){const ae=ym(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const De=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,Qe,De)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Qe,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,Qe,Me.data);else if(E.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Pe,Je,Me.width,Me.height,Me.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Qe,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,Qe,Me.data);else if(E.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Pe,Je,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let De=0;De<Pe;De++)n.texImage2D(s.TEXTURE_2D,De,Je,ae,pe,0,Oe,Qe,null),ae>>=1,pe>>=1}}else if(ct.length>0){if(it&&Et){const ae=Ye(ct[0]);n.texStorage2D(s.TEXTURE_2D,Pe,Je,ae.width,ae.height)}for(let ae=0,pe=ct.length;ae<pe;ae++)ke=ct[ae],it?H&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe,Qe,ke):n.texImage2D(s.TEXTURE_2D,ae,Je,Oe,Qe,ke);E.generateMipmaps=!1}else if(it){if(Et){const ae=Ye(Me);n.texStorage2D(s.TEXTURE_2D,Pe,Je,ae.width,ae.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,Qe,Me);v(E)&&m(me),Ve.__version=de.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ce(b,E,Z){if(E.image.length!==6)return;const me=Ce(b,E),ve=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const de=r.get(ve);if(ve.version!==de.__version||me===!0){n.activeTexture(s.TEXTURE0+Z);const Ve=vt.getPrimaries(vt.workingColorSpace),Re=E.colorSpace===gr?null:vt.getPrimaries(E.colorSpace),Ue=E.colorSpace===gr||Ve===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!lt&&!Me?Oe[pe]=w(E.image[pe],!0,a.maxCubemapSize):Oe[pe]=Me?E.image[pe].image:E.image[pe],Oe[pe]=Tt(E,Oe[pe]);const Qe=Oe[0],Je=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),ct=L(E.internalFormat,Je,ke,E.colorSpace),it=E.isVideoTexture!==!0,Et=de.__version===void 0||me===!0,H=ve.dataReady;let Pe=K(E,Qe);se(s.TEXTURE_CUBE_MAP,E);let ae;if(lt){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ct,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){ae=Oe[pe].mipmaps;for(let De=0;De<ae.length;De++){const Le=ae[De];E.format!==ai?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,Je,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ct,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,Je,ke,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ct,Le.width,Le.height,0,Je,ke,Le.data)}}}else{if(ae=E.mipmaps,it&&Et){ae.length>0&&Pe++;const pe=Ye(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,Je,ke,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Oe[pe].width,Oe[pe].height,0,Je,ke,Oe[pe].data);for(let De=0;De<ae.length;De++){const rt=ae[De].image[pe].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,Je,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ct,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,ke,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Je,ke,Oe[pe]);for(let De=0;De<ae.length;De++){const Le=ae[De];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,Je,ke,Le.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ct,Je,ke,Le.image[pe])}}}v(E)&&m(s.TEXTURE_CUBE_MAP),de.__version=ve.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Se(b,E,Z,me,ve,de){const Ve=u.convert(Z.format,Z.colorSpace),Re=u.convert(Z.type),Ue=L(Z.internalFormat,Ve,Re,Z.colorSpace),lt=r.get(E),Me=r.get(Z);if(Me.__renderTarget=E,!lt.__hasExternalTextures){const Oe=Math.max(1,E.width>>de),Qe=Math.max(1,E.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,de,Ue,Oe,Qe,E.depth,0,Ve,Re,null):n.texImage2D(ve,de,Ue,Oe,Qe,0,Ve,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Me.__webglTexture,0,dt(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Me.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(b,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const me=E.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=R(E.stencilBuffer,ve),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=dt(E);ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,de,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const me=E.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Ve=u.convert(de.format,de.colorSpace),Re=u.convert(de.type),Ue=L(de.internalFormat,Ve,Re,de.colorSpace),lt=dt(E);Z&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ue,E.width,E.height):ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ve=me.__webglTexture,de=dt(E);if(E.depthTexture.format===Us)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===Hs)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const E=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=me}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),_e(E.__webglDepthbuffer[me],b,!1);else{const ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),_e(E.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,E,Z){const me=r.get(b);E!==void 0&&Se(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ie(b)}function At(b){const E=b.texture,Z=r.get(b),me=r.get(E);b.addEventListener("dispose",F);const ve=b.textures,de=b.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,d.memory.textures++),de){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Z.__webglFramebuffer[Re][Ue]=s.createFramebuffer()}else Z.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Re=0,Ue=ve.length;Re<Ue;Re++){const lt=r.get(ve[Re]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),d.memory.textures++)}if(b.samples>0&&ut(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const Ue=ve[Re];Z.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const lt=u.convert(Ue.format,Ue.colorSpace),Me=u.convert(Ue.type),Oe=L(Ue.internalFormat,lt,Me,Ue.colorSpace,b.isXRRenderTarget===!0),Qe=dt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,E);for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Re][Ue],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else Se(Z.__webglFramebuffer[Re],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);v(E)&&m(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Re=0,Ue=ve.length;Re<Ue;Re++){const lt=ve[Re],Me=r.get(lt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),se(s.TEXTURE_2D,lt),Se(Z.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),v(lt)&&m(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Re=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,me.__webglTexture),se(Re,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Se(Z.__webglFramebuffer[Ue],b,E,s.COLOR_ATTACHMENT0,Re,Ue);else Se(Z.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Re,0);v(E)&&m(Re),n.unbindTexture()}b.depthBuffer&&Ie(b)}function ht(b){const E=b.textures;for(let Z=0,me=E.length;Z<me;Z++){const ve=E[Z];if(v(ve)){const de=N(b),Ve=r.get(ve).__webglTexture;n.bindTexture(de,Ve),m(de),n.unbindTexture()}}}const bt=[],W=[];function fn(b){if(b.samples>0){if(ut(b)===!1){const E=b.textures,Z=b.width,me=b.height;let ve=s.COLOR_BUFFER_BIT;const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),Re=E.length>1;if(Re)for(let Ue=0;Ue<E.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,ve,s.NEAREST),p===!0&&(bt.length=0,W.length=0,bt.push(s.COLOR_ATTACHMENT0+Ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(de),W.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,W)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<E.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(E[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(b){const E=d.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function Tt(b,E){const Z=b.colorSpace,me=b.format,ve=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==Gs&&Z!==gr&&(vt.getTransfer(Z)===Ct?(me!==ai||ve!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(g.width=b.naturalWidth||b.width,g.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(g.width=b.displayWidth,g.height=b.displayHeight):(g.width=b.width,g.height=b.height),g}this.allocateTextureUnit=ee,this.resetTextureUnits=ue,this.setTexture2D=he,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=U,this.rebindTextures=Ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function qM(s,e){function n(r,a=gr){let u;const d=vt.getTransfer(a);if(r===Hi)return s.UNSIGNED_BYTE;if(r===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Im)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dm)return s.BYTE;if(r===Nm)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===kf)return s.INT;if(r===Yr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Uo)return s.HALF_FLOAT;if(r===Um)return s.ALPHA;if(r===Fm)return s.RGB;if(r===ai)return s.RGBA;if(r===Om)return s.LUMINANCE;if(r===km)return s.LUMINANCE_ALPHA;if(r===Us)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===Bm)return s.RED;if(r===Hf)return s.RED_INTEGER;if(r===zm)return s.RG;if(r===Vf)return s.RG_INTEGER;if(r===Gf)return s.RGBA_INTEGER;if(r===xl||r===yl||r===Sl||r===Ml)if(d===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===af||r===lf||r===uf||r===cf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===af)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ff||r===df||r===hf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ff||r===df)return d===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===hf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===pf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_f)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Af)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return d===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===Rf||r===Pf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===El)return d===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hm||r===bf||r===Lf||r===Df)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===El)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Df)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class $M extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pl extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,r),m=this._getHandJoint(g,w);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const _=g.joints["index-finger-tip"],y=g.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,T=.005;g.inputState.pinching&&x>S+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=S-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ki(new Ll(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",p=1,g=null,_=null,y=null,x=null,S=null,T=null;const w=new JM,v=n.getContextAttributes();let m=null,N=null;const L=[],R=[],K=new Pt;let k=null;const F=new jn;F.viewport=new Ht;const X=new jn;X.viewport=new Ht;const P=[F,X],C=new $M;let B=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=L[q];return ce===void 0&&(ce=new Xc,L[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=L[q];return ce===void 0&&(ce=new Xc,L[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=L[q];return ce===void 0&&(ce=new Xc,L[q]=ce),ce.getHandSpace()};function ee(q){const ce=R.indexOf(q.inputSource);if(ce===-1)return;const Se=L[ce];Se!==void 0&&(Se.update(q.inputSource,q.frame,g||d),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function fe(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let q=0;q<L.length;q++){const ce=R[q];ce!==null&&(R[q]=null,L[q].disconnect(ce))}B=null,ue=null,w.reset(),e.setRenderTarget(m),S=null,x=null,y=null,a=null,N=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){f=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(q){g=q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new qr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,Se=null,_e=null;v.depth&&(_e=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=v.stencil?Hs:Us,Se=v.stencil?zs:Yr);const Ae={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new qr(x.textureWidth,x.textureHeight,{format:ai,type:Hi,depthTexture:new ng(x.textureWidth,x.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),g=null,d=await a.requestReferenceSpace(f),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(q){for(let ce=0;ce<q.removed.length;ce++){const Se=q.removed[ce],_e=R.indexOf(Se);_e>=0&&(R[_e]=null,L[_e].disconnect(Se))}for(let ce=0;ce<q.added.length;ce++){const Se=q.added[ce];let _e=R.indexOf(Se);if(_e===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=R.length){R.push(Se),_e=Ie;break}else if(R[Ie]===null){R[Ie]=Se,_e=Ie;break}if(_e===-1)break}const Ae=L[_e];Ae&&Ae.connect(Se)}}const J=new ie,Q=new ie;function U(q,ce,Se){J.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const _e=J.distanceTo(Q),Ae=ce.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),At=Ae[14]/(Ae[10]+1),ht=(Ae[9]+1)/Ae[5],bt=(Ae[9]-1)/Ae[5],W=(Ae[8]-1)/Ae[0],fn=(Ie[8]+1)/Ie[0],dt=Ze*W,ut=Ze*fn,qe=_e/(-W+fn),Tt=qe*-W;if(ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Tt),q.translateZ(qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ye=Ze+qe,b=At+qe,E=dt-Tt,Z=ut+(_e-Tt),me=ht*At/b*Ye,ve=bt*At/b*Ye;q.projectionMatrix.makePerspective(E,Z,me,ve,Ye,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let ce=q.near,Se=q.far;w.texture!==null&&(w.depthNear>0&&(ce=w.depthNear),w.depthFar>0&&(Se=w.depthFar)),C.near=X.near=F.near=ce,C.far=X.far=F.far=Se,(B!==C.near||ue!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ue=C.far),F.layers.mask=q.layers.mask|2,X.layers.mask=q.layers.mask|4,C.layers.mask=F.layers.mask|X.layers.mask;const _e=q.parent,Ae=C.cameras;le(C,_e);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],_e);Ae.length===2?U(C,F,X):C.projectionMatrix.copy(F.projectionMatrix),oe(q,C,_e)};function oe(q,ce,Se){Se===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let I=null;function se(q,ce){if(_=ce.getViewerPose(g||d),T=ce,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let _e=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Ie=0;Ie<Se.length;Ie++){const Ze=Se[Ie];let At=null;if(S!==null)At=S.getViewport(Ze);else{const bt=y.getViewSubImage(x,Ze);At=bt.viewport,Ie===0&&(e.setRenderTargetTextures(N,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(N))}let ht=P[Ie];ht===void 0&&(ht=new jn,ht.layers.enable(Ie),ht.viewport=new Ht,P[Ie]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(At.x,At.y,At.width,At.height),Ie===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(ht)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=y.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,a.renderState)}}for(let Se=0;Se<L.length;Se++){const _e=R[Se],Ae=L[Se];_e!==null&&Ae!==void 0&&Ae.update(_e,ce,g||d)}I&&I(q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Ce=new tg;Ce.setAnimationLoop(se),this.setAnimationLoop=function(q){I=q},this.dispose=function(){}}}const zr=new Vi,tE=new Bt;function nE(s,e){function n(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function r(v,m){m.color.getRGB(v.fogColor.value,Zm(s)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,N,L,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?u(v,m):m.isMeshToonMaterial?(u(v,m),y(v,m)):m.isMeshPhongMaterial?(u(v,m),_(v,m)):m.isMeshStandardMaterial?(u(v,m),x(v,m),m.isMeshPhysicalMaterial&&S(v,m,R)):m.isMeshMatcapMaterial?(u(v,m),T(v,m)):m.isMeshDepthMaterial?u(v,m):m.isMeshDistanceMaterial?(u(v,m),w(v,m)):m.isMeshNormalMaterial?u(v,m):m.isLineBasicMaterial?(d(v,m),m.isLineDashedMaterial&&f(v,m)):m.isPointsMaterial?p(v,m,N,L):m.isSpriteMaterial?g(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function u(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,n(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,n(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,n(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Rn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,n(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Rn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,n(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,n(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const N=e.get(m),L=N.envMap,R=N.envMapRotation;L&&(v.envMap.value=L,zr.copy(R),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(zr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,v.aoMapTransform))}function d(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,n(m.map,v.mapTransform))}function f(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function p(v,m,N,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*N,v.scale.value=L*.5,m.map&&(v.map.value=m.map,n(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,n(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function g(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,n(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,n(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function _(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function y(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function x(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function S(v,m,N){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,m){m.matcap&&(v.matcap.value=m.matcap)}function w(v,m){const N=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iE(s,e,n,r){let a={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const R=L.program;r.uniformBlockBinding(N,R)}function g(N,L){let R=a[N.id];R===void 0&&(T(N),R=_(N),a[N.id]=R,N.addEventListener("dispose",v));const K=L.program;r.updateUBOMapping(N,K);const k=e.render.frame;u[N.id]!==k&&(x(N),u[N.id]=k)}function _(N){const L=y();N.__bindingPointIndex=L;const R=s.createBuffer(),K=N.__size,k=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,K,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function y(){for(let N=0;N<f;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],R=N.uniforms,K=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let k=0,F=R.length;k<F;k++){const X=Array.isArray(R[k])?R[k]:[R[k]];for(let P=0,C=X.length;P<C;P++){const B=X[P];if(S(B,k,P,K)===!0){const ue=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let he=0;he<ee.length;he++){const J=ee[he],Q=w(J);typeof J=="number"||typeof J=="boolean"?(B.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,ue+fe,B.__data)):J.isMatrix3?(B.__data[0]=J.elements[0],B.__data[1]=J.elements[1],B.__data[2]=J.elements[2],B.__data[3]=0,B.__data[4]=J.elements[3],B.__data[5]=J.elements[4],B.__data[6]=J.elements[5],B.__data[7]=0,B.__data[8]=J.elements[6],B.__data[9]=J.elements[7],B.__data[10]=J.elements[8],B.__data[11]=0):(J.toArray(B.__data,fe),fe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,R,K){const k=N.value,F=L+"_"+R;if(K[F]===void 0)return typeof k=="number"||typeof k=="boolean"?K[F]=k:K[F]=k.clone(),!0;{const X=K[F];if(typeof k=="number"||typeof k=="boolean"){if(X!==k)return K[F]=k,!0}else if(X.equals(k)===!1)return X.copy(k),!0}return!1}function T(N){const L=N.uniforms;let R=0;const K=16;for(let F=0,X=L.length;F<X;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,B=P.length;C<B;C++){const ue=P[C],ee=Array.isArray(ue.value)?ue.value:[ue.value];for(let fe=0,he=ee.length;fe<he;fe++){const J=ee[fe],Q=w(J),U=R%K,le=U%Q.boundary,oe=U+le;R+=le,oe!==0&&K-oe<Q.storage&&(R+=K-oe),ue.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=R,R+=Q.storage}}}const k=R%K;return k>0&&(R+=K-k),N.__size=R,N.__cache={},this}function w(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function v(N){const L=N.target;L.removeEventListener("dispose",v);const R=d.indexOf(L.__bindingPointIndex);d.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function m(){for(const N in a)s.deleteBuffer(a[N]);d=[],a={},u={}}return{bind:p,update:g,dispose:m}}class rE{constructor(e={}){const{canvas:n=Xv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const T=new Uint32Array(4),w=new Int32Array(4);let v=null,m=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=vr,this.toneMappingExposure=1;const R=this;let K=!1,k=0,F=0,X=null,P=-1,C=null;const B=new Ht,ue=new Ht;let ee=null;const fe=new Mt(0);let he=0,J=n.width,Q=n.height,U=1,le=null,oe=null;const I=new Ht(0,0,J,Q),se=new Ht(0,0,J,Q);let Ce=!1;const q=new eg;let ce=!1,Se=!1;const _e=new Bt,Ae=new Bt,Ie=new ie,Ze=new Ht,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return X===null?U:1}let W=r;function fn(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Le,!1),W===null){const V="webgl2";if(W=fn(V,A),W===null)throw fn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let dt,ut,qe,Tt,Ye,b,E,Z,me,ve,de,Ve,Re,Ue,lt,Me,Oe,Qe,Je,ke,ct,it,Et,H;function Pe(){dt=new uS(W),dt.init(),it=new qM(W,dt),ut=new nS(W,dt,e,it),qe=new XM(W,dt),ut.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Tt=new dS(W),Ye=new bM,b=new YM(W,dt,qe,Ye,ut,it,Tt),E=new rS(R),Z=new lS(R),me=new v0(W),Et=new eS(W,me),ve=new cS(W,me,Tt,Et),de=new pS(W,ve,me,Tt),Je=new hS(W,ut,b),Me=new iS(Ye),Ve=new PM(R,E,Z,dt,ut,Et,Me),Re=new nE(R,Ye),Ue=new DM,lt=new kM(dt),Qe=new Jy(R,E,Z,qe,de,S,p),Oe=new GM(R,de,ut),H=new iE(W,Tt,ut,qe),ke=new tS(W,dt,Tt),ct=new fS(W,dt,Tt),Tt.programs=Ve.programs,R.capabilities=ut,R.extensions=dt,R.properties=Ye,R.renderLists=Ue,R.shadowMap=Oe,R.state=qe,R.info=Tt}Pe();const ae=new eE(R,W);this.xr=ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(J,Q,!1))},this.getSize=function(A){return A.set(J,Q)},this.setSize=function(A,V,ne=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,Q=V,n.width=Math.floor(A*U),n.height=Math.floor(V*U),ne===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(J*U,Q*U).floor()},this.setDrawingBufferSize=function(A,V,ne){J=A,Q=V,U=ne,n.width=Math.floor(A*ne),n.height=Math.floor(V*ne),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,V,ne,re){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,V,ne,re),qe.viewport(B.copy(I).multiplyScalar(U).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,V,ne,re){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,V,ne,re),qe.scissor(ue.copy(se).multiplyScalar(U).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){qe.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,V=!0,ne=!0){let re=0;if(A){let G=!1;if(X!==null){const we=X.texture.format;G=we===Gf||we===Vf||we===Hf}if(G){const we=X.texture.type,Ee=we===Hi||we===Yr||we===Io||we===zs||we===Bf||we===zf,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Ee?(T[0]=et,T[1]=nt,T[2]=We,T[3]=ze,W.clearBufferuiv(W.COLOR,0,T)):(w[0]=et,w[1]=nt,w[2]=We,w[3]=ze,W.clearBufferiv(W.COLOR,0,w))}else re|=W.COLOR_BUFFER_BIT}V&&(re|=W.DEPTH_BUFFER_BIT),ne&&(re|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ue.dispose(),lt.dispose(),Ye.dispose(),E.dispose(),Z.dispose(),de.dispose(),Et.dispose(),H.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",$r),ae.removeEventListener("sessionend",Gi),vi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const A=Tt.autoReset,V=Oe.enabled,ne=Oe.autoUpdate,re=Oe.needsUpdate,G=Oe.type;Pe(),Tt.autoReset=A,Oe.enabled=V,Oe.autoUpdate=ne,Oe.needsUpdate=re,Oe.type=G}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const V=A.target;V.removeEventListener("dispose",rt),Dt(V)}function Dt(A){Wt(A),Ye.remove(A)}function Wt(A){const V=Ye.get(A).programs;V!==void 0&&(V.forEach(function(ne){Ve.releaseProgram(ne)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ne,re,G,we){V===null&&(V=At);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ge=Go(A,V,ne,re,G);qe.setMaterial(re,Ee);let ze=ne.index,et=1;if(re.wireframe===!0){if(ze=ve.getWireframeAttribute(ne),ze===void 0)return;et=2}const nt=ne.drawRange,We=ne.attributes.position;let mt=nt.start*et,St=(nt.start+nt.count)*et;we!==null&&(mt=Math.max(mt,we.start*et),St=Math.min(St,(we.start+we.count)*et)),ze!==null?(mt=Math.max(mt,0),St=Math.min(St,ze.count)):We!=null&&(mt=Math.max(mt,0),St=Math.min(St,We.count));const pt=St-mt;if(pt<0||pt===1/0)return;Et.setup(G,re,Ge,ne,ze);let nn,st=ke;if(ze!==null&&(nn=me.get(ze),st=ct,st.setIndex(nn)),G.isMesh)re.wireframe===!0?(qe.setLineWidth(re.wireframeLinewidth*bt()),st.setMode(W.LINES)):st.setMode(W.TRIANGLES);else if(G.isLine){let je=re.linewidth;je===void 0&&(je=1),qe.setLineWidth(je*bt()),G.isLineSegments?st.setMode(W.LINES):G.isLineLoop?st.setMode(W.LINE_LOOP):st.setMode(W.LINE_STRIP)}else G.isPoints?st.setMode(W.POINTS):G.isSprite&&st.setMode(W.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const je=G._multiDrawStarts,$n=G._multiDrawCounts,xt=G._multiDrawCount,rn=ze?me.get(ze).bytesPerElement:1,Kn=Ye.get(re).currentProgram.getUniforms();for(let Xt=0;Xt<xt;Xt++)Kn.setValue(W,"_gl_DrawID",Xt),st.render(je[Xt]/rn,$n[Xt])}else if(G.isInstancedMesh)st.renderInstances(mt,pt,G.count);else if(ne.isInstancedBufferGeometry){const je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,$n=Math.min(ne.instanceCount,je);st.renderInstances(mt,pt,$n)}else st.render(mt,pt)};function gt(A,V,ne){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,Kr(A,V,ne),A.side=xr,A.needsUpdate=!0,Kr(A,V,ne),A.side=Ui):Kr(A,V,ne)}this.compile=function(A,V,ne=null){ne===null&&(ne=A),m=lt.get(ne),m.init(V),L.push(m),ne.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==ne&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const re=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const we=G.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){const Ge=we[Ee];gt(Ge,ne,G),re.add(Ge)}else gt(we,ne,G),re.add(we)}),L.pop(),m=null,re},this.compileAsync=function(A,V,ne=null){const re=this.compile(A,V,ne);return new Promise(G=>{function we(){if(re.forEach(function(Ee){Ye.get(Ee).currentProgram.isReady()&&re.delete(Ee)}),re.size===0){G(A);return}setTimeout(we,10)}dt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let vn=null;function dn(A){vn&&vn(A)}function $r(){vi.stop()}function Gi(){vi.start()}const vi=new tg;vi.setAnimationLoop(dn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(A){vn=A,ae.setAnimationLoop(A),A===null?vi.stop():vi.start()},ae.addEventListener("sessionstart",$r),ae.addEventListener("sessionend",Gi),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(V),V=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,V,X),m=lt.get(A,L.length),m.init(V),L.push(m),Ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,Se),v=Ue.get(A,N.length),v.init(),N.push(v),ae.enabled===!0&&ae.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&xi(we,V,-1/0,R.sortObjects)}xi(A,V,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(le,oe),ht=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ht&&Qe.addToRenderList(v,A),this.info.render.frame++,ce===!0&&Me.beginShadows();const ne=m.state.shadowsArray;Oe.render(ne,A,V),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=v.opaque,G=v.transmissive;if(m.setupLights(),V.isArrayCamera){const we=V.cameras;if(G.length>0)for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const ze=we[Ee];Mr(re,G,A,ze)}ht&&Qe.render(A);for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const ze=we[Ee];Sr(v,A,ze,ze.viewport)}}else G.length>0&&Mr(re,G,A,V),ht&&Qe.render(A),Sr(v,A,V);X!==null&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(R,A,V),Et.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(m=L[L.length-1],ce===!0&&Me.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?v=N[N.length-1]:v=null};function xi(A,V,ne,re){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){re&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Ee=de.update(A),Ge=A.material;Ge.visible&&v.push(A,Ee,Ge,ne,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ee=de.update(A),Ge=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ze.copy(Ee.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Ee.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],mt=Ge[We.materialIndex];mt&&mt.visible&&v.push(A,Ee,mt,ne,Ze.z,We)}}else Ge.visible&&v.push(A,Ee,Ge,ne,Ze.z,null)}}const we=A.children;for(let Ee=0,Ge=we.length;Ee<Ge;Ee++)xi(we[Ee],V,ne,re)}function Sr(A,V,ne,re){const G=A.opaque,we=A.transmissive,Ee=A.transparent;m.setupLightsView(ne),ce===!0&&Me.setGlobalState(R.clippingPlanes,ne),re&&qe.viewport(B.copy(re)),G.length>0&&Wi(G,V,ne),we.length>0&&Wi(we,V,ne),Ee.length>0&&Wi(Ee,V,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Mr(A,V,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new qr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Uo:Hi,minFilter:jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const we=m.state.transmissionRenderTarget[re.id],Ee=re.viewport||B;we.setSize(Ee.z,Ee.w);const Ge=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(fe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),ht&&Qe.render(ne);const ze=R.toneMapping;R.toneMapping=vr;const et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),ce===!0&&Me.setGlobalState(R.clippingPlanes,re),Wi(A,ne,re),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,mt=V.length;We<mt;We++){const St=V[We],pt=St.object,nn=St.geometry,st=St.material,je=St.group;if(st.side===Ui&&pt.layers.test(re.layers)){const $n=st.side;st.side=Rn,st.needsUpdate=!0,Ho(pt,ne,re,nn,st,je),st.side=$n,st.needsUpdate=!0,nt=!0}}nt===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}R.setRenderTarget(Ge),R.setClearColor(fe,he),et!==void 0&&(re.viewport=et),R.toneMapping=ze}function Wi(A,V,ne){const re=V.isScene===!0?V.overrideMaterial:null;for(let G=0,we=A.length;G<we;G++){const Ee=A[G],Ge=Ee.object,ze=Ee.geometry,et=re===null?Ee.material:re,nt=Ee.group;Ge.layers.test(ne.layers)&&Ho(Ge,V,ne,ze,et,nt)}}function Ho(A,V,ne,re,G,we){A.onBeforeRender(R,V,ne,re,G,we),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,V,ne,re,A,we),G.transparent===!0&&G.side===Ui&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,R.renderBufferDirect(ne,V,re,G,A,we),G.side=xr,G.needsUpdate=!0,R.renderBufferDirect(ne,V,re,G,A,we),G.side=Ui):R.renderBufferDirect(ne,V,re,G,A,we),A.onAfterRender(R,V,ne,re,G,we)}function Kr(A,V,ne){V.isScene!==!0&&(V=At);const re=Ye.get(A),G=m.state.lights,we=m.state.shadowsArray,Ee=G.state.version,Ge=Ve.getParameters(A,G.state,we,V,ne),ze=Ve.getProgramCacheKey(Ge);let et=re.programs;re.environment=A.isMeshStandardMaterial?V.environment:null,re.fog=V.fog,re.envMap=(A.isMeshStandardMaterial?Z:E).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,re.programs=et);let nt=et.get(ze);if(nt!==void 0){if(re.currentProgram===nt&&re.lightsStateVersion===Ee)return ci(A,Ge),nt}else Ge.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Ge,R),nt=Ve.acquireProgram(Ge,ze),et.set(ze,nt),re.uniforms=Ge.uniforms;const We=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Me.uniform),ci(A,Ge),re.needsLights=Nl(A),re.lightsStateVersion=Ee,re.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),re.currentProgram=nt,re.uniformsList=null,nt}function Vo(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Tl.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ci(A,V){const ne=Ye.get(A);ne.outputColorSpace=V.outputColorSpace,ne.batching=V.batching,ne.batchingColor=V.batchingColor,ne.instancing=V.instancing,ne.instancingColor=V.instancingColor,ne.instancingMorph=V.instancingMorph,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function Go(A,V,ne,re,G){V.isScene!==!0&&(V=At),b.resetTextureUnits();const we=V.fog,Ee=re.isMeshStandardMaterial?V.environment:null,Ge=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Gs,ze=(re.isMeshStandardMaterial?Z:E).get(re.envMap||Ee),et=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,St=!!ne.morphAttributes.color;let pt=vr;re.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(pt=R.toneMapping);const nn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,st=nn!==void 0?nn.length:0,je=Ye.get(re),$n=m.state.lights;if(ce===!0&&(Se===!0||A!==C)){const hn=A===C&&re.id===P;Me.setState(re,A,hn)}let xt=!1;re.version===je.__version?(je.needsLights&&je.lightsStateVersion!==$n.state.version||je.outputColorSpace!==Ge||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isBatchedMesh&&je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&je.instancingMorph===!1&&G.morphTexture!==null||je.envMap!==ze||re.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==nt||je.morphTargets!==We||je.morphNormals!==mt||je.morphColors!==St||je.toneMapping!==pt||je.morphTargetsCount!==st)&&(xt=!0):(xt=!0,je.__version=re.version);let rn=je.currentProgram;xt===!0&&(rn=Kr(re,V,G));let Kn=!1,Xt=!1,fi=!1;const Rt=rn.getUniforms(),Fn=je.uniforms;if(qe.useProgram(rn.program)&&(Kn=!0,Xt=!0,fi=!0),re.id!==P&&(P=re.id,Xt=!0),Kn||C!==A){qe.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),Yv(_e),qv(_e),Rt.setValue(W,"projectionMatrix",_e)):Rt.setValue(W,"projectionMatrix",A.projectionMatrix),Rt.setValue(W,"viewMatrix",A.matrixWorldInverse);const On=Rt.map.cameraPosition;On!==void 0&&On.setValue(W,Ie.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Xt=!0,fi=!0)}if(G.isSkinnedMesh){Rt.setOptional(W,G,"bindMatrix"),Rt.setOptional(W,G,"bindMatrixInverse");const hn=G.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Rt.setValue(W,"boneTexture",hn.boneTexture,b))}G.isBatchedMesh&&(Rt.setOptional(W,G,"batchingTexture"),Rt.setValue(W,"batchingTexture",G._matricesTexture,b),Rt.setOptional(W,G,"batchingIdTexture"),Rt.setValue(W,"batchingIdTexture",G._indirectTexture,b),Rt.setOptional(W,G,"batchingColorTexture"),G._colorsTexture!==null&&Rt.setValue(W,"batchingColorTexture",G._colorsTexture,b));const yi=ne.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Je.update(G,ne,rn),(Xt||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,Rt.setValue(W,"receiveShadow",G.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Fn.envMap.value=ze,Fn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&V.environment!==null&&(Fn.envMapIntensity.value=V.environmentIntensity),Xt&&(Rt.setValue(W,"toneMappingExposure",R.toneMappingExposure),je.needsLights&&Wo(Fn,fi),we&&re.fog===!0&&Re.refreshFogUniforms(Fn,we),Re.refreshMaterialUniforms(Fn,re,U,Q,m.state.transmissionRenderTarget[A.id]),Tl.upload(W,Vo(je),Fn,b)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Tl.upload(W,Vo(je),Fn,b),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Rt.setValue(W,"center",G.center),Rt.setValue(W,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(W,"normalMatrix",G.normalMatrix),Rt.setValue(W,"modelMatrix",G.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const hn=re.uniformsGroups;for(let On=0,xn=hn.length;On<xn;On++){const Xo=hn[On];H.update(Xo,rn),H.bind(Xo,rn)}}return rn}function Wo(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Nl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,V,ne){Ye.get(A.texture).__webglTexture=V,Ye.get(A.depthTexture).__webglTexture=ne;const re=Ye.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const ne=Ye.get(A);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ne=0){X=A,k=V,F=ne;let re=!0,G=null,we=!1,Ee=!1;if(A){const ze=Ye.get(A);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(W.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(ze.__hasExternalTextures)b.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ee=!0);const nt=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?G=nt[V][ne]:G=nt[V],we=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?G=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[ne]:G=nt,B.copy(A.viewport),ue.copy(A.scissor),ee=A.scissorTest}else B.copy(I).multiplyScalar(U).floor(),ue.copy(se).multiplyScalar(U).floor(),ee=Ce;if(qe.bindFramebuffer(W.FRAMEBUFFER,G)&&re&&qe.drawBuffers(A,G),qe.viewport(B),qe.scissor(ue),qe.setScissorTest(ee),we){const ze=Ye.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,ne)}else if(Ee){const ze=Ye.get(A.texture),et=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ze.__webglTexture,ne||0,et)}P=-1},this.readRenderTargetPixels=function(A,V,ne,re,G,we,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){qe.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const ze=A.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-re&&ne>=0&&ne<=A.height-G&&W.readPixels(V,ne,re,G,it.convert(et),it.convert(nt),we)}finally{const ze=X!==null?Ye.get(X).__webglFramebuffer:null;qe.bindFramebuffer(W.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,V,ne,re,G,we,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){const ze=A.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-re&&ne>=0&&ne<=A.height-G){qe.bindFramebuffer(W.FRAMEBUFFER,Ge);const We=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.bufferData(W.PIXEL_PACK_BUFFER,we.byteLength,W.STREAM_READ),W.readPixels(V,ne,re,G,it.convert(et),it.convert(nt),0);const mt=X!==null?Ye.get(X).__webglFramebuffer:null;qe.bindFramebuffer(W.FRAMEBUFFER,mt);const St=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await jv(W,St,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,we),W.deleteBuffer(We),W.deleteSync(St),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,ne=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-ne),G=Math.floor(A.image.width*re),we=Math.floor(A.image.height*re),Ee=V!==null?V.x:0,Ge=V!==null?V.y:0;b.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ne,0,0,Ee,Ge,G,we),qe.unbindTexture()},this.copyTextureToTexture=function(A,V,ne=null,re=null,G=0){A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,ne=null);let we,Ee,Ge,ze,et,nt,We,mt,St;const pt=A.isCompressedTexture?A.mipmaps[G]:A.image;ne!==null?(we=ne.max.x-ne.min.x,Ee=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,ze=ne.min.x,et=ne.min.y,nt=ne.isBox3?ne.min.z:0):(we=pt.width,Ee=pt.height,Ge=pt.depth||1,ze=0,et=0,nt=0),re!==null?(We=re.x,mt=re.y,St=re.z):(We=0,mt=0,St=0);const nn=it.convert(V.format),st=it.convert(V.type);let je;V.isData3DTexture?(b.setTexture3D(V,0),je=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),je=W.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),je=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const $n=W.getParameter(W.UNPACK_ROW_LENGTH),xt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),rn=W.getParameter(W.UNPACK_SKIP_PIXELS),Kn=W.getParameter(W.UNPACK_SKIP_ROWS),Xt=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,pt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ze),W.pixelStorei(W.UNPACK_SKIP_ROWS,et),W.pixelStorei(W.UNPACK_SKIP_IMAGES,nt);const fi=A.isDataArrayTexture||A.isData3DTexture,Rt=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Fn=Ye.get(A),yi=Ye.get(V),hn=Ye.get(Fn.__renderTarget),On=Ye.get(yi.__renderTarget);qe.bindFramebuffer(W.READ_FRAMEBUFFER,hn.__webglFramebuffer),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let xn=0;xn<Ge;xn++)fi&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,G,nt+xn),A.isDepthTexture?(Rt&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(V).__webglTexture,G,St+xn),W.blitFramebuffer(ze,et,we,Ee,We,mt,we,Ee,W.DEPTH_BUFFER_BIT,W.NEAREST)):Rt?W.copyTexSubImage3D(je,G,We,mt,St+xn,ze,et,we,Ee):W.copyTexSubImage2D(je,G,We,mt,St+xn,ze,et,we,Ee);qe.bindFramebuffer(W.READ_FRAMEBUFFER,null),qe.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(je,G,We,mt,St,we,Ee,Ge,nn,st,pt.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(je,G,We,mt,St,we,Ee,Ge,nn,pt.data):W.texSubImage3D(je,G,We,mt,St,we,Ee,Ge,nn,st,pt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,G,We,mt,we,Ee,nn,st,pt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,G,We,mt,pt.width,pt.height,nn,pt.data):W.texSubImage2D(W.TEXTURE_2D,G,We,mt,we,Ee,nn,st,pt);W.pixelStorei(W.UNPACK_ROW_LENGTH,$n),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,rn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Xt),G===0&&V.generateMipmaps&&W.generateMipmap(je),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,V,ne=null,re=null,G=0){return A.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0),Do('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,ne,re,G)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){k=0,F=0,X=null,qe.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),n.unpackColorSpace=vt._getUnpackColorSpace()}}class sE extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ag extends Xs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new ie,Rl=new ie,Sm=new Bt,Lo=new Wf,ml=new Bo,jc=new ie,Mm=new ie;class oE extends _n{constructor(e=new ui,n=new ag){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Cl.fromBufferAttribute(n,a-1),Rl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Cl.distanceTo(Rl);e.setAttribute("lineDistance",new zi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(a),ml.radius+=u,e.ray.intersectsSphere(ml)===!1)return;Sm.copy(a).invert(),Lo.copy(e.ray).applyMatrix4(Sm);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let w=S,v=T-1;w<v;w+=g){const m=_.getX(w),N=_.getX(w+1),L=gl(this,e,Lo,p,m,N);L&&n.push(L)}if(this.isLineLoop){const w=_.getX(T-1),v=_.getX(S),m=gl(this,e,Lo,p,w,v);m&&n.push(m)}}else{const S=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let w=S,v=T-1;w<v;w+=g){const m=gl(this,e,Lo,p,w,w+1);m&&n.push(m)}if(this.isLineLoop){const w=gl(this,e,Lo,p,T-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function gl(s,e,n,r,a,u){const d=s.geometry.attributes.position;if(Cl.fromBufferAttribute(d,a),Rl.fromBufferAttribute(d,u),n.distanceSqToSegment(Cl,Rl,jc,Mm)>r)return;jc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(jc);if(!(p<e.near||p>e.far))return{distance:p,point:Mm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Em=new ie,Tm=new ie;class aE extends oE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Em.fromBufferAttribute(n,a),Tm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Em.distanceTo(Tm);e.setAttribute("lineDistance",new zi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lg extends Xs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wm=new Bt,Uf=new Wf,_l=new Bo,vl=new ie;class lE extends _n{constructor(e=new ui,n=new lg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(a),_l.radius+=u,e.ray.intersectsSphere(_l)===!1)return;wm.copy(a).invert(),Uf.copy(e.ray).applyMatrix4(wm);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,g=r.index,y=r.attributes.position;if(g!==null){const x=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let T=x,w=S;T<w;T++){const v=g.getX(T);vl.fromBufferAttribute(y,v),Am(vl,v,p,a,e,n,this)}}else{const x=Math.max(0,d.start),S=Math.min(y.count,d.start+d.count);for(let T=x,w=S;T<w;T++)vl.fromBufferAttribute(y,T),Am(vl,T,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function Am(s,e,n,r,a,u,d){const f=Uf.distanceSqToPoint(s);if(f<n){const p=new ie;Uf.closestPointToPoint(s,p),p.applyMatrix4(r);const g=a.ray.origin.distanceTo(p);if(g<a.near||g>a.far)return;u.push({distance:g,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);const Cm=["HTML5","CSS3","JavaScript","React","Node.js","TypeScript","Python","C/C++","Git","Firebase","Linux","Vite"];function uE(){const s=Yn.useRef(null),e=Yn.useRef(null),n=Yn.useRef(null);return Yn.useEffect(()=>{const r=s.current,a=e.current;if(!r||!a)return;const u=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||window.innerWidth<768,f={particleCount:(navigator.hardwareConcurrency?navigator.hardwareConcurrency<=4:u)?250:800,showLines:!u,maxLineDistance:120,maxLines:150,pixelRatio:u?1:Math.min(window.devicePixelRatio,2),mouseParallax:!u,rotationSpeed:3e-4,particleSize:u?2.5:2,spreadX:800,spreadY:500,spreadZ:400,targetFPS:u?30:60},p=new rE({canvas:r,alpha:!0,antialias:!u,powerPreference:"high-performance"});p.setPixelRatio(f.pixelRatio),p.setSize(a.offsetWidth,a.offsetHeight),p.setClearColor(0,0);const g=new sE,_=new jn(60,a.offsetWidth/a.offsetHeight,1,2e3);_.position.z=600;function y(){const Q=getComputedStyle(document.documentElement).getPropertyValue("--text-muted").trim();return new Mt(Q||"#94a3b8")}const x=new Float32Array(f.particleCount*3),S=new Float32Array(f.particleCount*3);for(let J=0;J<f.particleCount;J++)x[J*3]=(Math.random()-.5)*f.spreadX,x[J*3+1]=(Math.random()-.5)*f.spreadY,x[J*3+2]=(Math.random()-.5)*f.spreadZ,S[J*3]=(Math.random()-.5)*.3,S[J*3+1]=(Math.random()-.5)*.3,S[J*3+2]=(Math.random()-.5)*.1;const T=new ui;T.setAttribute("position",new qn(x,3));let w=y();const v=new lg({color:w,size:f.particleSize,transparent:!0,opacity:0,sizeAttenuation:!0}),m=new lE(T,v);g.add(m);let N=null,L=null;if(f.showLines){L=new ui;const J=new ag({color:w,transparent:!0,opacity:0}),Q=new Float32Array(f.maxLines*6);L.setAttribute("position",new qn(Q,3)),L.setDrawRange(0,0),N=new aE(L,J),g.add(N)}const R={x:0,y:0,targetX:0,targetY:0},K=J=>{const Q=a.getBoundingClientRect();R.targetX=((J.clientX-Q.left)/Q.width-.5)*50,R.targetY=((J.clientY-Q.top)/Q.height-.5)*50};f.mouseParallax&&a.addEventListener("mousemove",K);let k=!0,F=0,X=0;const P=1e3/f.targetFPS,C=new IntersectionObserver(J=>{k=J[0].isIntersecting},{threshold:0});C.observe(a);const B=()=>{if(document.hidden)k=!1;else{const J=a.getBoundingClientRect();k=J.bottom>0&&J.top<window.innerHeight}};document.addEventListener("visibilitychange",B);const ue=new MutationObserver(()=>{w=y(),v.color.copy(w),N&&N.material.color.copy(w)});ue.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let ee;const fe=()=>{clearTimeout(ee),ee=setTimeout(()=>{const J=a.offsetWidth,Q=a.offsetHeight;_.aspect=J/Q,_.updateProjectionMatrix(),p.setSize(J,Q)},150)};window.addEventListener("resize",fe);function he(J){if(n.current=requestAnimationFrame(he),!k||J-X<P)return;X=J,F<1&&(F+=.012,F>1&&(F=1),v.opacity=F*.6,N&&(N.material.opacity=F*.15)),R.x+=(R.targetX-R.x)*.05,R.y+=(R.targetY-R.y)*.05,m.rotation.x+=f.rotationSpeed,m.rotation.y+=f.rotationSpeed*.7,f.mouseParallax&&(m.position.x=R.x,m.position.y=-R.y);const Q=T.attributes.position.array;for(let U=0;U<f.particleCount;U++)Q[U*3]+=S[U*3],Q[U*3+1]+=S[U*3+1],Q[U*3+2]+=S[U*3+2],Math.abs(Q[U*3])>f.spreadX/2&&(S[U*3]*=-1),Math.abs(Q[U*3+1])>f.spreadY/2&&(S[U*3+1]*=-1),Math.abs(Q[U*3+2])>f.spreadZ/2&&(S[U*3+2]*=-1);if(T.attributes.position.needsUpdate=!0,N&&L){const U=L.attributes.position.array;let le=0,oe=0;const I=f.maxLineDistance*f.maxLineDistance,se=Math.min(f.particleCount,200);for(let Ce=0;Ce<se&&oe<f.maxLines;Ce++)for(let q=Ce+1;q<se&&oe<f.maxLines;q++){const ce=Q[Ce*3]-Q[q*3],Se=Q[Ce*3+1]-Q[q*3+1],_e=Q[Ce*3+2]-Q[q*3+2];ce*ce+Se*Se+_e*_e<I&&(U[le++]=Q[Ce*3],U[le++]=Q[Ce*3+1],U[le++]=Q[Ce*3+2],U[le++]=Q[q*3],U[le++]=Q[q*3+1],U[le++]=Q[q*3+2],oe++)}L.attributes.position.needsUpdate=!0,L.setDrawRange(0,oe*2)}p.render(g,_)}return n.current=requestAnimationFrame(he),()=>{cancelAnimationFrame(n.current),C.disconnect(),ue.disconnect(),document.removeEventListener("visibilitychange",B),window.removeEventListener("resize",fe),f.mouseParallax&&a.removeEventListener("mousemove",K),p.dispose(),T.dispose(),v.dispose(),L&&L.dispose(),g.clear()}},[]),Y.jsxs(Y.Fragment,{children:[Y.jsxs("section",{id:"home",className:"hero",ref:e,children:[Y.jsx("canvas",{ref:s,className:"hero-canvas"}),Y.jsxs("div",{className:"hero-content",children:[Y.jsxs("div",{className:"hero-text",children:[Y.jsxs("h1",{className:"hero-hello",children:["Hello",Y.jsx("span",{className:"hero-dot",children:"."})]}),Y.jsx("p",{className:"hero-iam",children:"I'm Nico"}),Y.jsx("h2",{className:"hero-role",children:"Student founder & Entrepreneur"}),Y.jsxs("div",{className:"cta-buttons",children:[Y.jsx("a",{href:"#contact",className:"btn btn-orange",children:"Got a project?"}),Y.jsx("a",{href:"https://www.linkedin.com/in/nico-ramos28",target:"_blank",rel:"noreferrer",className:"btn btn-outline",children:"My resume"})]})]}),Y.jsxs("div",{className:"hero-visual",children:[Y.jsx("span",{className:"hero-bracket",children:"<"}),Y.jsx("div",{className:"hero-img-wrap",children:Y.jsx("div",{className:"hero-image",children:Y.jsx("img",{src:"/img/profileNico.jpeg",alt:"Nico Ramos"})})}),Y.jsx("span",{className:"hero-bracket",children:">"})]})]})]}),Y.jsx("div",{className:"hero-skills-ticker",children:Y.jsxs("div",{className:"hero-skills-track",children:[Cm.map(r=>Y.jsx("span",{children:r},r)),Cm.map(r=>Y.jsx("span",{"aria-hidden":"true",children:r},`${r}-dup`))]})})]})}const cE=[{icon:"🎓",title:"Education",text:"Computer Science student at Vancouver Island University. I care most about user experience, trust, and long-term retention. I enjoy building systems where small design decisions compound over time, especially in social and AI-driven products.",delay:""},{icon:"💻",title:"Expertise",text:"Full-stack web development with React, Next.js, and Firebase, with a focus on integrating AI models like OpenAI GPT and Claude into real products. Comfortable working across the entire stack, from designing responsive frontends to building serverless backends, managing databases, and deploying to production.",delay:"scroll-fade-delay-1"},{icon:"🚀",title:"Entrepreneurship",text:"Founder of Looply, an AI-powered web app that helps creators and builders plan content strategies and scope MVP applications. Instead of generic chatbots, Looply uses structured workflows to guide users step by step, remembering their goals, niche, and progress across sessions.",delay:"scroll-fade-delay-2"},{icon:"🌍",title:"Global Access",text:"I'm building a life around tech, travel, and international opportunity. As an Italian passport holder still studying in North America, I have access to 192 destinations without a prior visa, and I see mobility as more than movement. It's access to new markets, cultures, and ideas.",delay:"scroll-fade-delay-3"}];function fE(){return Y.jsx("section",{id:"about",className:"about-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"section-title scroll-fade",children:"About Me"}),Y.jsx("p",{className:"section-subtitle scroll-fade",children:"CS student, builder, and aspiring founder focused on creating products people actually use."}),Y.jsx("div",{className:"about-grid",children:cE.map(s=>Y.jsxs("div",{className:`about-card scroll-fade ${s.delay}`,children:[Y.jsxs("h3",{children:[s.icon," ",s.title]}),Y.jsx("p",{children:s.text})]},s.title))})]})})}const dE=[{title:"Looply",badge:"STARTUP",role:"Founder & Software Engineer",date:"2026 · Remote",desc:"Full-stack AI web app to help users plan content strategies and scope MVP applications. Designed persistent memory to store user context (goals, niches, progress) across sessions.",bullets:["Designed, built, and deployed a full-stack AI web application for content strategy and MVP scoping","Developed a performant React + Vite frontend with emphasis on clean rendering and responsive design","Integrated AI models to power structured, task-oriented workflows rather than generic chat interactions","Owned the full software lifecycle: architecture, development, debugging, deployment, and iteration"],tech:["React","Vite","Firebase","GPT by OpenAI","Claude by Anthropic","Vercel"],links:{},status:"MVP in progress"},{title:"ApplyKit",badge:"FEATURED",role:"Built with Lovable.dev",date:"2026 · Remote",desc:"An AI student application copilot MVP built to help students move faster through the internship and job search process with tailored application support.",bullets:["Tailor resumes to specific opportunities","Turn job links into application-ready content","Prototype a smarter, student-first way to apply"],tech:["Lovable.dev","AI Agent","MVP"],links:{live:"https://applykit.lovable.app"}},{title:"ChainMind",badge:"STARTUP",role:"Founder & Software Engineer",date:"2026 · Remote",desc:"A purpose-built blockchain with a conversational AI agent as its primary interface. Users manage wallets, send coins, and analyze on-chain data through natural language or voice.",bullets:["Architected across three layers: static frontend on Netlify CDN, serverless AI functions, and a Python/FastAPI blockchain backend","Implemented proof-of-work consensus, UTXO transaction model, and automatic peer-to-peer chain sync","Built a modular skills system. New agent capabilities are added by dropping a folder.","Integrated voice input and output via the Web Speech API with zero external dependencies"],tech:["Python","FastAPI","Claude Sonnet 4.6","Netlify Functions","SQLite","Vanilla JS"],links:{github:"https://github.com/itsnicoramos/ChainMind"}},{title:"CyberBank",badge:"FEATURED",role:"Solo Project",date:"2026 ",desc:"A solo-built C++ banking simulator designed to demonstrate object-oriented architecture, secure account authentication, transaction management, and persistent storage.",bullets:["Account creation and PIN-based login with salted hashing","Deposits, withdrawals, transfers, payee management, and interest accrual","Transaction history and CSV export","Configurable storage through a file-based backend with optional SQLite support","Lightweight web demo extending the core banking logic beyond the CLI"],tech:["C++","OOP","SQLite","Node.js","JavaScript","HTML","CSS","GNU Make","SHA-256","HMAC"],links:{github:"https://github.com/itsnicoramos/CyberBank"}},{title:"Portfolio Website",badge:"FEATURED",role:"Designer & Developer",date:"2024",desc:". A single-page React + Vite app written from scratch with no UI framework or CSS library, focused on a fast, hand-tuned feel.",bullets:["Component-per-folder architecture: each section owns its own .jsx and .css with no shared stylesheets","Light/dark theming via CSS custom properties on a data-theme attribute, applied pre-paint to avoid flashing","Three.js particle canvas in the hero, performance-tuned with intersection and visibility observers","Custom interactivity hook drives the cursor glow, scroll-progress bar, hero parallax, card tilt, and magnetic buttons in a single rAF loop","Hosted on Netlify with a strict Content-Security-Policy and security headers configured in netlify.toml"],tech:["React","Vite","Plain CSS","Three.js","Netlify"],links:{live:"https://itsnico.dev"},status:"Live"},{title:"CSCI 115: Web Development",badge:"COURSE",role:"Student",date:"Spring 2025 · VIU",desc:"Course project demonstrating foundational web development skills using HTML, CSS, and JavaScript.",bullets:[],tech:["HTML5","CSS3","JavaScript","Responsive Design"],links:{live:"https://itsnicoramos.github.io/csci115-project/"},status:"Completed"},{title:"MEDI 110: Media Production",badge:"COURSE",role:"Student",date:"Fall 2025 · VIU",desc:"Storytelling-based website showcasing Vancouver through photography, editing techniques, and responsive web design.",bullets:[],tech:["HTML5","CSS3","Responsive Design"],links:{live:"https://itsnicoramos.github.io/MEDI110finalProject/"},status:"Completed"},{title:"CSCI 159: Computer Science 1",badge:"COURSE",role:"Student",date:"Fall 2025 · VIU",desc:"First-year CS course covering structured programming, top-down design, recursion, and an introduction to dynamic data structures.",bullets:[],tech:["C++","Problem Solving","Debugging"],links:{github:"https://github.com/itsnicoramos/csci159-labs"},status:"Completed"},{title:"CSCI 161: Computer Science 2",badge:"COURSE",role:"Student",date:"In Progress · VIU",desc:"Topics include OOP (encapsulation, inheritance, polymorphism), dynamic data structures (arrays, linked lists, trees), and abstract data types. All solutions are my own work, not my professor’s.",bullets:[],tech:["C++","OOP","Data Structures","Make","Recursion","Linked Lists","BST"],links:{live:"https://itsnicoramos.github.io/csci-161/"},status:"In Progress"},{title:"CSCI 162: Topics in Computer Science",badge:"COURSE",role:"Student",date:"In Progress · VIU",desc:"Applied and theoretical topics: digital logic, programming paradigms, computer architecture, system software, and theory of computation. All solutions are my own work, not my professor’s.",bullets:[],tech:["C","MARIE Assembly","SQL","SQLite","GDB","Digital Logic","K-maps"],links:{live:"https://itsnicoramos.github.io/csci-162/"},status:"In Progress"}],hE={STARTUP:"badge--startup",FEATURED:"badge--featured",COURSE:"badge--course"};function pE(){return Y.jsx("section",{id:"projects",className:"projects-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"section-title scroll-fade",children:"Projects"}),Y.jsx("p",{className:"section-subtitle scroll-fade",children:"Real products and course projects I've built and shipped."}),Y.jsx("div",{className:"project-grid",children:dE.map(s=>Y.jsxs("div",{className:`project-card scroll-fade${s.badge==="STARTUP"?" project-card--startup":""}${s.badge==="FEATURED"?" project-card--featured":""}`,children:[Y.jsx("span",{className:`project-badge ${hE[s.badge]||""}`,children:s.badge}),Y.jsx("h3",{children:s.title}),Y.jsxs("div",{className:"project-meta",children:[Y.jsx("span",{className:"project-role",children:s.role}),Y.jsx("span",{className:"project-date",children:s.date})]}),s.status&&Y.jsx("span",{className:"project-status",children:s.status}),Y.jsx("p",{className:"project-desc",children:s.desc}),s.bullets.length>0&&Y.jsx("ul",{className:"project-bullets",children:s.bullets.map((e,n)=>Y.jsx("li",{children:e},n))}),Y.jsx("div",{className:"tech-tags",children:s.tech.map(e=>Y.jsx("span",{className:"tech-tag",children:e},e))}),Y.jsxs("div",{className:"project-links",children:[s.links.github&&Y.jsx("a",{href:s.links.github,target:"_blank",rel:"noreferrer",children:"View on GitHub →"}),s.links.live&&Y.jsx("a",{href:s.links.live,target:"_blank",rel:"noreferrer",children:"View Live →"})]})]},s.title))})]})})}const mE=[{icon:"fas fa-palette",title:"Frontend",skills:["HTML5","CSS3","JavaScript","React.js","Next.js","TypeScript"],delay:""},{icon:"fas fa-server",title:"Backend",skills:["C / C++","Python","SQL (SQLite)","Firebase","Node.js"],delay:"scroll-fade-delay-1"},{icon:"fas fa-wrench",title:"Tools",skills:["Git & GitHub","Linux","NPM","VS Code","Vite","Vercel"],delay:"scroll-fade-delay-2"},{icon:"fas fa-book-open",title:"Currently Learning",skills:["MongoDB","Prisma","Redux Toolkit","LLM Integration","Prompt Engineering"],delay:"scroll-fade-delay-3"}];function gE(){return Y.jsx("section",{id:"skills",className:"skills-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"section-title scroll-fade",children:"Technical Skills"}),Y.jsx("div",{className:"skills-grid",children:mE.map(s=>Y.jsxs("div",{className:`skill-card scroll-fade ${s.delay}`,children:[Y.jsx("i",{className:s.icon,style:{fontSize:"1.5rem",color:"var(--accent)",marginBottom:"12px",display:"block"}}),Y.jsx("strong",{children:s.title}),Y.jsx("div",{className:"tech-tags",style:{marginTop:"12px"},children:s.skills.map(e=>Y.jsx("span",{className:"tech-tag",children:e},e))})]},s.title))})]})})}const _E=[{title:"Master Claude Code, Plugins and Skills to Build AI Applications, Automate Business with Cowork, Deploy Autonomous Agents",issuer:"Anthropic",date:"2026",desc:"Hands-on training in Claude Code: building plugins and skills for AI applications, automating business workflows with Cowork, and deploying autonomous agents.",skills:["Claude Code","Plugins & Skills","Cowork","Autonomous Agents","AI Applications"]},{title:"Master Prompt Engineering: This Course Will Transform You Into a Skilled Prompt Architect",issuer:"Online Course",date:"2026",desc:"Comprehensive training in prompt engineering: designing, structuring, and optimizing prompts to get reliable, high-quality output from large language models.",skills:["Prompt Engineering","LLMs","Prompt Design","AI Workflows"]}];function vE(){return Y.jsx("section",{id:"certifications",className:"certifications-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"section-title scroll-fade",children:"Certifications"}),Y.jsx("p",{className:"section-subtitle scroll-fade",children:"Credentials and continued learning."}),Y.jsx("div",{className:"cert-grid",children:_E.map(s=>Y.jsxs("div",{className:"cert-card scroll-fade",children:[Y.jsx("span",{className:"cert-badge",children:"CERTIFICATION"}),Y.jsx("h3",{children:s.title}),Y.jsxs("div",{className:"cert-meta",children:[Y.jsx("span",{className:"cert-issuer",children:s.issuer}),Y.jsx("span",{className:"cert-date",children:s.date})]}),Y.jsx("p",{className:"cert-desc",children:s.desc}),Y.jsx("div",{className:"tech-tags",children:s.skills.map(e=>Y.jsx("span",{className:"tech-tag",children:e},e))})]},s.title))})]})})}const xE=[{icon:"🌏",title:"Explorer",text:"When I'm not coding, I'm exploring new cultures, cuisines, and perspectives. Travel fuels my creativity and broadens how I approach problem-solving in tech.",delay:""},{icon:"📸",title:"Visual Storyteller",text:"Capturing moments and sharing travel experiences through short-form video. Every trip becomes content that connects and inspires others.",delay:"scroll-fade-delay-1"},{icon:"🎯",title:"Dream Destinations",text:"Japan for tech culture, Switzerland for nature, Silicon Valley to connect with the startup ecosystem, and Dubai for real estate and a tax-free environment. Building a global perspective one trip at a time.",delay:"scroll-fade-delay-2"}];function yE(){return Y.jsx("section",{id:"travel",className:"travel-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"section-title scroll-fade",children:"Travel"}),Y.jsx("p",{className:"travel-eyebrow scroll-fade",children:"Moments from the road"}),Y.jsx("p",{className:"section-subtitle scroll-fade",children:"Short-form clips and moments from around the world."}),Y.jsxs("div",{className:"shorts-row scroll-fade",children:[Y.jsx("div",{className:"short-card",children:Y.jsxs("div",{className:"short-placeholder",children:[Y.jsx("i",{className:"fab fa-instagram"}),Y.jsx("span",{children:"Travel Reel"}),Y.jsx("p",{children:"Coming Soon"})]})}),Y.jsx("div",{className:"short-card",children:Y.jsxs("div",{className:"short-placeholder",children:[Y.jsx("i",{className:"fab fa-instagram"}),Y.jsx("span",{children:"Travel Reel"}),Y.jsx("p",{children:"Coming Soon"})]})})]}),Y.jsx("div",{className:"travel-instagram-link scroll-fade",children:Y.jsxs("a",{href:"https://www.instagram.com/itsnicoramos__",target:"_blank",rel:"noreferrer",className:"travel-ig-link",children:[Y.jsx("i",{className:"fab fa-instagram"})," See more on Instagram"]})}),Y.jsx("div",{className:"travel-grid",children:xE.map(s=>Y.jsxs("div",{className:`travel-card scroll-fade ${s.delay}`,children:[Y.jsx("div",{className:"travel-icon",children:s.icon}),Y.jsx("h3",{children:s.title}),Y.jsx("p",{children:s.text})]},s.title))})]})})}function SE(){const s=e=>{e.preventDefault(),window.location.href="mailto:"+atob("bmljY285N3JAZ21haWwuY29t")};return Y.jsx("section",{id:"contact",className:"contact-section",children:Y.jsxs("div",{className:"container",children:[Y.jsx("h2",{className:"section-title scroll-fade",children:"Open to Connect"}),Y.jsx("p",{className:"section-subtitle scroll-fade",children:"I'm always open to founders, operators, and builders who want to share ideas, explore collabs, or just talk shop."}),Y.jsxs("div",{className:"contact-groups scroll-fade",children:[Y.jsxs("div",{className:"contact-group",children:[Y.jsx("p",{className:"contact-group-label",children:"Work & Build"}),Y.jsxs("div",{className:"social-grid",children:[Y.jsx("a",{href:"https://www.linkedin.com/in/nico-ramos28",target:"_blank",rel:"noreferrer",className:"social-link",title:"LinkedIn",children:Y.jsx("i",{className:"fab fa-linkedin"})}),Y.jsx("a",{href:"https://github.com/itsnicoramos",target:"_blank",rel:"noreferrer",className:"social-link",title:"GitHub",children:Y.jsx("i",{className:"fab fa-github"})}),Y.jsx("a",{href:"#",className:"social-link",title:"Email",onClick:s,"aria-label":"Send email",children:Y.jsx("i",{className:"fas fa-envelope"})})]})]}),Y.jsxs("div",{className:"contact-group",children:[Y.jsx("p",{className:"contact-group-label",children:"Follow the Journey"}),Y.jsxs("div",{className:"social-grid",children:[Y.jsx("a",{href:"https://x.com/Nico971858665",target:"_blank",rel:"noreferrer",className:"social-link",title:"X (Twitter)",children:Y.jsx("i",{className:"fab fa-x-twitter"})}),Y.jsx("a",{href:"https://www.tiktok.com/@itsnicoramos_",target:"_blank",rel:"noreferrer",className:"social-link",title:"TikTok",children:Y.jsx("i",{className:"fab fa-tiktok"})}),Y.jsx("a",{href:"https://www.instagram.com/itsnicoramos__",target:"_blank",rel:"noreferrer",className:"social-link",title:"Instagram",children:Y.jsx("i",{className:"fab fa-instagram"})}),Y.jsx("a",{href:"https://threads.net/itsnicoramos__",target:"_blank",rel:"noreferrer",className:"social-link",title:"Threads",children:Y.jsx("i",{className:"fab fa-threads"})})]})]})]})]})})}function ME(){const s=new Date().getFullYear();return Y.jsx("footer",{className:"footer",children:Y.jsxs("p",{children:["© ",s," Nico™ — All rights reserved."]})})}function EE(){const{theme:s,toggle:e}=Q_();return J_(),ev(),Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"cursor-glow","aria-hidden":"true"}),Y.jsx("div",{className:"scroll-progress","aria-hidden":"true"}),Y.jsx(tv,{theme:s,toggle:e}),Y.jsxs("main",{children:[Y.jsx(uE,{}),Y.jsx(fE,{}),Y.jsx(pE,{}),Y.jsx(gE,{}),Y.jsx(vE,{}),Y.jsx(yE,{}),Y.jsx(SE,{})]}),Y.jsx(ME,{})]})}Z_.createRoot(document.getElementById("root")).render(Y.jsx(W_.StrictMode,{children:Y.jsx(EE,{})}));
