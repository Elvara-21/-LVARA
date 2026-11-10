(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function n_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var dc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function i_(){if(Cp)return dt;Cp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(F,re,Ie){this.props=F,this.context=re,this.refs=A,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(F,re){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,re,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=S.prototype;function D(F,re,Ie){this.props=F,this.context=re,this.refs=A,this.updater=Ie||y}var L=D.prototype=new g;L.constructor=D,M(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,H=Object.prototype.hasOwnProperty,U={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function G(F,re,Ie){var ee,de={},Me=null,xe=null;if(re!=null)for(ee in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Me=""+re.key),re)H.call(re,ee)&&!O.hasOwnProperty(ee)&&(de[ee]=re[ee]);var we=arguments.length-2;if(we===1)de.children=Ie;else if(1<we){for(var Ue=Array(we),Qe=0;Qe<we;Qe++)Ue[Qe]=arguments[Qe+2];de.children=Ue}if(F&&F.defaultProps)for(ee in we=F.defaultProps,we)de[ee]===void 0&&(de[ee]=we[ee]);return{$$typeof:s,type:F,key:Me,ref:xe,props:de,_owner:U.current}}function T(F,re){return{$$typeof:s,type:F.type,key:re,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var re={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return re[Ie]})}var Z=/\/+/g;function J(F,re){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):re.toString(36)}function le(F,re,Ie,ee,de){var Me=typeof F;(Me==="undefined"||Me==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(Me){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,de=de(xe),F=ee===""?"."+J(xe,0):ee,P(de)?(Ie="",F!=null&&(Ie=F.replace(Z,"$&/")+"/"),le(de,re,Ie,"",function(Qe){return Qe})):de!=null&&(C(de)&&(de=T(de,Ie+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(Z,"$&/")+"/")+F)),re.push(de)),1;if(xe=0,ee=ee===""?".":ee+":",P(F))for(var we=0;we<F.length;we++){Me=F[we];var Ue=ee+J(Me,we);xe+=le(Me,re,Ie,Ue,de)}else if(Ue=x(F),typeof Ue=="function")for(F=Ue.call(F),we=0;!(Me=F.next()).done;)Me=Me.value,Ue=ee+J(Me,we++),xe+=le(Me,re,Ie,Ue,de);else if(Me==="object")throw re=String(F),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function fe(F,re,Ie){if(F==null)return F;var ee=[],de=0;return le(F,ee,"","",function(Me){return re.call(Ie,Me,de++)}),ee}function ae(F){if(F._status===-1){var re=F._result;re=re(),re.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=re)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},V={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:U};function oe(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:fe,forEach:function(F,re,Ie){fe(F,function(){re.apply(this,arguments)},Ie)},count:function(F){var re=0;return fe(F,function(){re++}),re},toArray:function(F){return fe(F,function(re){return re})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},dt.Component=S,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=D,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,dt.act=oe,dt.cloneElement=function(F,re,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ee=M({},F.props),de=F.key,Me=F.ref,xe=F._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,xe=U.current),re.key!==void 0&&(de=""+re.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(Ue in re)H.call(re,Ue)&&!O.hasOwnProperty(Ue)&&(ee[Ue]=re[Ue]===void 0&&we!==void 0?we[Ue]:re[Ue])}var Ue=arguments.length-2;if(Ue===1)ee.children=Ie;else if(1<Ue){we=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)we[Qe]=arguments[Qe+2];ee.children=we}return{$$typeof:s,type:F.type,key:de,ref:Me,props:ee,_owner:xe}},dt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},dt.createElement=G,dt.createFactory=function(F){var re=G.bind(null,F);return re.type=F,re},dt.createRef=function(){return{current:null}},dt.forwardRef=function(F){return{$$typeof:f,render:F}},dt.isValidElement=C,dt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ae}},dt.memo=function(F,re){return{$$typeof:m,type:F,compare:re===void 0?null:re}},dt.startTransition=function(F){var re=V.transition;V.transition={};try{F()}finally{V.transition=re}},dt.unstable_act=oe,dt.useCallback=function(F,re){return ce.current.useCallback(F,re)},dt.useContext=function(F){return ce.current.useContext(F)},dt.useDebugValue=function(){},dt.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},dt.useEffect=function(F,re){return ce.current.useEffect(F,re)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(F,re,Ie){return ce.current.useImperativeHandle(F,re,Ie)},dt.useInsertionEffect=function(F,re){return ce.current.useInsertionEffect(F,re)},dt.useLayoutEffect=function(F,re){return ce.current.useLayoutEffect(F,re)},dt.useMemo=function(F,re){return ce.current.useMemo(F,re)},dt.useReducer=function(F,re,Ie){return ce.current.useReducer(F,re,Ie)},dt.useRef=function(F){return ce.current.useRef(F)},dt.useState=function(F){return ce.current.useState(F)},dt.useSyncExternalStore=function(F,re,Ie){return ce.current.useSyncExternalStore(F,re,Ie)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var Rp;function Om(){return Rp||(Rp=1,dc.exports=i_()),dc.exports}var sn=Om();const I=n_(sn);var Ja={},hc={exports:{}},Nn={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function r_(){return Pp||(Pp=1,(function(s){function e(V,ue){var oe=V.length;V.push(ue);e:for(;0<oe;){var F=oe-1>>>1,re=V[F];if(0<a(re,ue))V[F]=ue,V[oe]=re,oe=F;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ue=V[0],oe=V.pop();if(oe!==ue){V[0]=oe;e:for(var F=0,re=V.length,Ie=re>>>1;F<Ie;){var ee=2*(F+1)-1,de=V[ee],Me=ee+1,xe=V[Me];if(0>a(de,oe))Me<re&&0>a(xe,de)?(V[F]=xe,V[Me]=oe,F=Me):(V[F]=de,V[ee]=oe,F=ee);else if(Me<re&&0>a(xe,oe))V[F]=xe,V[Me]=oe,F=Me;else break e}}return ue}function a(V,ue){var oe=V.sortIndex-ue.sortIndex;return oe!==0?oe:V.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],m=[],v=1,_=null,x=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(V){for(var ue=t(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=V)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(m)}}function P(V){if(A=!1,L(V),!M)if(t(h)!==null)M=!0,ae(H);else{var ue=t(m);ue!==null&&ce(P,ue.startTime-V)}}function H(V,ue){M=!1,A&&(A=!1,g(G),G=-1),y=!0;var oe=x;try{for(L(ue),_=t(h);_!==null&&(!(_.expirationTime>ue)||V&&!z());){var F=_.callback;if(typeof F=="function"){_.callback=null,x=_.priorityLevel;var re=F(_.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),L(ue)}else r(h);_=t(h)}if(_!==null)var Ie=!0;else{var ee=t(m);ee!==null&&ce(P,ee.startTime-ue),Ie=!1}return Ie}finally{_=null,x=oe,y=!1}}var U=!1,O=null,G=-1,T=5,C=-1;function z(){return!(s.unstable_now()-C<T)}function Z(){if(O!==null){var V=s.unstable_now();C=V;var ue=!0;try{ue=O(!0,V)}finally{ue?J():(U=!1,O=null)}}else U=!1}var J;if(typeof D=="function")J=function(){D(Z)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=Z,J=function(){fe.postMessage(null)}}else J=function(){S(Z,0)};function ae(V){O=V,U||(U=!0,J())}function ce(V,ue){G=S(function(){V(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ae(H))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var oe=x;x=ue;try{return V()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ue){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=x;x=V;try{return ue()}finally{x=oe}},s.unstable_scheduleCallback=function(V,ue,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,V={id:v++,callback:ue,priorityLevel:V,startTime:oe,expirationTime:re,sortIndex:-1},oe>F?(V.sortIndex=oe,e(m,V),t(h)===null&&V===t(m)&&(A?(g(G),G=-1):A=!0,ce(P,oe-F))):(V.sortIndex=re,e(h,V),M||y||(M=!0,ae(H))),V},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(V){var ue=x;return function(){var oe=x;x=ue;try{return V.apply(this,arguments)}finally{x=oe}}}})(mc)),mc}var bp;function s_(){return bp||(bp=1,pc.exports=r_()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function o_(){if(Lp)return Nn;Lp=1;var s=Om(),e=s_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(n){return h.call(_,n)?!0:h.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,o,u,d,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,D);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,D);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,D);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function re(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ie=!1;function ee(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),p=u.stack.split(`
`),E=d.length-1,N=p.length-1;1<=E&&0<=N&&d[E]!==p[N];)N--;for(;1<=E&&0<=N;E--,N--)if(d[E]!==p[N]){if(E!==1||N!==1)do if(E--,N--,0>N||d[E]!==p[N]){var k=`
`+d[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=N);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function de(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case U:return"Portal";case T:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Qe(n))}function gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function _n(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=we(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(n,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ct(n,i,o){(i!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function b(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function me(n,i){var o=we(i.value),u=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Ke(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Ke(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,se=null,pe=null;function Le(n){if(n=po(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ha(i),Ce(n.stateNode,n.type,i))}}function be(n){se?pe?pe.push(n):pe=[n]:se=n}function st(){if(se){var n=se,i=pe;if(pe=se=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function It(n,i){return n(i)}function $t(){}var xt=!1;function An(n,i,o){if(xt)return n(i,o);xt=!0;try{return It(n,i,o)}finally{xt=!1,(se!==null||pe!==null)&&($t(),st())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var u=ha(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Qr=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Qr=!1}function Ei(n,i,o,u,d,p,E,N,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(_e){this.onError(_e)}}var Mi=!1,Mr=null,Tr=!1,Yi=null,Yo={onError:function(n){Mi=!0,Mr=n}};function es(n,i,o,u,d,p,E,N,k){Mi=!1,Mr=null,Ei.apply(Yo,arguments)}function qo(n,i,o,u,d,p,E,N,k){if(es.apply(this,arguments),Mi){if(Mi){var te=Mr;Mi=!1,Mr=null}else throw Error(t(198));Tr||(Tr=!0,Yi=te)}}function di(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function jo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function $o(n){if(di(n)!==n)throw Error(t(188))}function Ul(n){var i=n.alternate;if(!i){if(i=di(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return $o(d),n;if(p===u)return $o(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var E=!1,N=d.child;N;){if(N===o){E=!0,o=d,u=p;break}if(N===u){E=!0,u=d,o=p;break}N=N.sibling}if(!E){for(N=p.child;N;){if(N===o){E=!0,o=p,u=d;break}if(N===u){E=!0,u=p,o=d;break}N=N.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ko(n){return n=Ul(n),n!==null?Zo(n):null}function Zo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Zo(n);if(i!==null)return i;n=n.sibling}return null}var R=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,tt=e.unstable_LowPriority,nt=e.unstable_IdlePriority,qe=null,ot=null;function Et(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:$e,Ot=Math.log,_t=Math.LN2;function $e(n){return n>>>=0,n===0?32:31-(Ot(n)/_t|0)|0}var Ht=64,vt=4194304;function on(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,E=o&268435455;if(E!==0){var N=E&~d;N!==0?u=on(N):(p&=E,p!==0&&(u=on(p)))}else E=o&~d,E!==0?u=on(E):p!==0&&(u=on(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Mt(i),d=1<<o,u|=n[o],i&=~d;return u}function yn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var E=31-Mt(p),N=1<<E,k=d[E];k===-1?((N&o)===0||(N&u)!==0)&&(d[E]=yn(N,i)):k<=i&&(n.expiredLanes|=N),p&=~N}}function Pt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=Ht;return Ht<<=1,(Ht&4194240)===0&&(Ht=64),n}function cn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Xt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=o}function fn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Mt(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function Ar(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Mt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var mt=0;function sd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var od,Fl,ad,ld,ud,Ol=!1,Jo=[],qi=null,ji=null,$i=null,Zs=new Map,Js=new Map,Ki=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function Qs(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=po(i),i!==null&&Fl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function wg(n,i,o,u,d){switch(i){case"focusin":return qi=Qs(qi,n,i,o,u,d),!0;case"dragenter":return ji=Qs(ji,n,i,o,u,d),!0;case"mouseover":return $i=Qs($i,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return Zs.set(p,Qs(Zs.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Js.set(p,Qs(Js.get(p)||null,n,i,o,u,d)),!0}return!1}function fd(n){var i=Cr(n.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=jo(o),i!==null){n.blockedOn=i,ud(n.priority,function(){ad(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=zl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);At=u,o.target.dispatchEvent(u),At=null}else return i=po(o),i!==null&&Fl(i),n.blockedOn=o,!1;i.shift()}return!0}function dd(n,i,o){Qo(n)&&o.delete(i)}function Ag(){Ol=!1,qi!==null&&Qo(qi)&&(qi=null),ji!==null&&Qo(ji)&&(ji=null),$i!==null&&Qo($i)&&($i=null),Zs.forEach(dd),Js.forEach(dd)}function eo(n,i){n.blockedOn===i&&(n.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ag)))}function to(n){function i(d){return eo(d,n)}if(0<Jo.length){eo(Jo[0],n);for(var o=1;o<Jo.length;o++){var u=Jo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&eo(qi,n),ji!==null&&eo(ji,n),$i!==null&&eo($i,n),Zs.forEach(i),Js.forEach(i),o=0;o<Ki.length;o++)u=Ki[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)fd(o),o.blockedOn===null&&Ki.shift()}var ts=P.ReactCurrentBatchConfig,ea=!0;function Cg(n,i,o,u){var d=mt,p=ts.transition;ts.transition=null;try{mt=1,kl(n,i,o,u)}finally{mt=d,ts.transition=p}}function Rg(n,i,o,u){var d=mt,p=ts.transition;ts.transition=null;try{mt=4,kl(n,i,o,u)}finally{mt=d,ts.transition=p}}function kl(n,i,o,u){if(ea){var d=zl(n,i,o,u);if(d===null)nu(n,i,u,ta,o),cd(n,u);else if(wg(d,n,i,o,u))u.stopPropagation();else if(cd(n,u),i&4&&-1<Tg.indexOf(n)){for(;d!==null;){var p=po(d);if(p!==null&&od(p),p=zl(n,i,o,u),p===null&&nu(n,i,u,ta,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else nu(n,i,u,null,o)}}var ta=null;function zl(n,i,o,u){if(ta=null,n=q(u),n=Cr(n),n!==null)if(i=di(n),i===null)n=null;else if(o=i.tag,o===13){if(n=jo(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ta=n,null}function hd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case De:return 4;case Oe:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Zi=null,Bl=null,na=null;function pd(){if(na)return na;var n,i=Bl,o=i.length,u,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[p-u];u++);return na=d.slice(n,1<u?1-u:void 0)}function ia(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ra(){return!0}function md(){return!1}function Fn(n){function i(o,u,d,p,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ra:md,this.isPropagationStopped=md,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Fn(ns),no=oe({},ns,{view:0,detail:0}),Pg=Fn(no),Hl,Gl,io,sa=oe({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==io&&(io&&n.type==="mousemove"?(Hl=n.screenX-io.screenX,Gl=n.screenY-io.screenY):Gl=Hl=0,io=n),Hl)},movementY:function(n){return"movementY"in n?n.movementY:Gl}}),gd=Fn(sa),bg=oe({},sa,{dataTransfer:0}),Lg=Fn(bg),Ng=oe({},no,{relatedTarget:0}),Wl=Fn(Ng),Dg=oe({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Fn(Dg),Ug=oe({},ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fg=Fn(Ug),Og=oe({},ns,{data:0}),vd=Fn(Og),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Bg[n])?!!i[n]:!1}function Xl(){return Vg}var Hg=oe({},no,{key:function(n){if(n.key){var i=kg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ia(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(n){return n.type==="keypress"?ia(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ia(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gg=Fn(Hg),Wg=oe({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Fn(Wg),Xg=oe({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),Yg=Fn(Xg),qg=oe({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=Fn(qg),$g=oe({},sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=Fn($g),Zg=[9,13,27,32],Yl=f&&"CompositionEvent"in window,ro=null;f&&"documentMode"in document&&(ro=document.documentMode);var Jg=f&&"TextEvent"in window&&!ro,xd=f&&(!Yl||ro&&8<ro&&11>=ro),yd=" ",Sd=!1;function Ed(n,i){switch(n){case"keyup":return Zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var is=!1;function Qg(n,i){switch(n){case"compositionend":return Md(i);case"keypress":return i.which!==32?null:(Sd=!0,yd);case"textInput":return n=i.data,n===yd&&Sd?null:n;default:return null}}function ev(n,i){if(is)return n==="compositionend"||!Yl&&Ed(n,i)?(n=pd(),na=Bl=Zi=null,is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xd&&i.locale!=="ko"?null:i.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!tv[n.type]:i==="textarea"}function wd(n,i,o,u){be(u),i=ca(i,"onChange"),0<i.length&&(o=new Vl("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var so=null,oo=null;function nv(n){Gd(n,0)}function oa(n){var i=ls(n);if(gt(i))return n}function iv(n,i){if(n==="change")return i}var Ad=!1;if(f){var ql;if(f){var jl="oninput"in document;if(!jl){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),jl=typeof Cd.oninput=="function"}ql=jl}else ql=!1;Ad=ql&&(!document.documentMode||9<document.documentMode)}function Rd(){so&&(so.detachEvent("onpropertychange",Pd),oo=so=null)}function Pd(n){if(n.propertyName==="value"&&oa(oo)){var i=[];wd(i,oo,n,q(n)),An(nv,i)}}function rv(n,i,o){n==="focusin"?(Rd(),so=i,oo=o,so.attachEvent("onpropertychange",Pd)):n==="focusout"&&Rd()}function sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return oa(oo)}function ov(n,i){if(n==="click")return oa(i)}function av(n,i){if(n==="input"||n==="change")return oa(i)}function lv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:lv;function ao(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Qn(n[d],i[d]))return!1}return!0}function bd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ld(n,i){var o=bd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bd(o)}}function Nd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Dd(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Nt(n.document)}return i}function $l(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function uv(n){var i=Dd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Nd(o.ownerDocument.documentElement,o)){if(u!==null&&$l(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=Ld(o,p);var E=Ld(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cv=f&&"documentMode"in document&&11>=document.documentMode,rs=null,Kl=null,lo=null,Zl=!1;function Id(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||rs==null||rs!==Nt(u)||(u=rs,"selectionStart"in u&&$l(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),lo&&ao(lo,u)||(lo=u,u=ca(Kl,"onSelect"),0<u.length&&(i=new Vl("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=rs)))}function aa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ss={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Jl={},Ud={};f&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function la(n){if(Jl[n])return Jl[n];if(!ss[n])return n;var i=ss[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ud)return Jl[n]=i[o];return n}var Fd=la("animationend"),Od=la("animationiteration"),kd=la("animationstart"),zd=la("transitionend"),Bd=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){Bd.set(n,i),l(i,[n])}for(var Ql=0;Ql<Vd.length;Ql++){var eu=Vd[Ql],fv=eu.toLowerCase(),dv=eu[0].toUpperCase()+eu.slice(1);Ji(fv,"on"+dv)}Ji(Fd,"onAnimationEnd"),Ji(Od,"onAnimationIteration"),Ji(kd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(zd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Hd(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,qo(u,i,void 0,n),n.currentTarget=null}function Gd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],k=N.instance,te=N.currentTarget;if(N=N.listener,k!==p&&d.isPropagationStopped())break e;Hd(d,N,te),p=k}else for(E=0;E<u.length;E++){if(N=u[E],k=N.instance,te=N.currentTarget,N=N.listener,k!==p&&d.isPropagationStopped())break e;Hd(d,N,te),p=k}}}if(Tr)throw n=Yi,Tr=!1,Yi=null,n}function Ut(n,i){var o=i[lu];o===void 0&&(o=i[lu]=new Set);var u=n+"__bubble";o.has(u)||(Wd(i,n,2,!1),o.add(u))}function tu(n,i,o){var u=0;i&&(u|=4),Wd(o,n,u,i)}var ua="_reactListening"+Math.random().toString(36).slice(2);function co(n){if(!n[ua]){n[ua]=!0,r.forEach(function(o){o!=="selectionchange"&&(hv.has(o)||tu(o,!1,n),tu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ua]||(i[ua]=!0,tu("selectionchange",!1,i))}}function Wd(n,i,o,u){switch(hd(i)){case 1:var d=Cg;break;case 4:d=Rg;break;default:d=kl}o=d.bind(null,i,o,n),d=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function nu(n,i,o,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;E=E.return}for(;N!==null;){if(E=Cr(N),E===null)return;if(k=E.tag,k===5||k===6){u=p=E;continue e}N=N.parentNode}}u=u.return}An(function(){var te=p,_e=q(o),ye=[];e:{var ge=Bd.get(n);if(ge!==void 0){var Ne=Vl,Ve=n;switch(n){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":Ne=Gg;break;case"focusin":Ve="focus",Ne=Wl;break;case"focusout":Ve="blur",Ne=Wl;break;case"beforeblur":case"afterblur":Ne=Wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Yg;break;case Fd:case Od:case kd:Ne=Ig;break;case zd:Ne=jg;break;case"scroll":Ne=Pg;break;case"wheel":Ne=Kg;break;case"copy":case"cut":case"paste":Ne=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=_d}var He=(i&4)!==0,Yt=!He&&n==="scroll",$=He?ge!==null?ge+"Capture":null:ge;He=[];for(var X=te,K;X!==null;){K=X;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=xn(X,$),Te!=null&&He.push(fo(X,Te,K)))),Yt)break;X=X.return}0<He.length&&(ge=new Ne(ge,Ve,null,o,_e),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&o!==At&&(Ve=o.relatedTarget||o.fromElement)&&(Cr(Ve)||Ve[Ti]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(Ve=o.relatedTarget||o.toElement,Ne=te,Ve=Ve?Cr(Ve):null,Ve!==null&&(Yt=di(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ne=null,Ve=te),Ne!==Ve)){if(He=gd,Te="onMouseLeave",$="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(He=_d,Te="onPointerLeave",$="onPointerEnter",X="pointer"),Yt=Ne==null?ge:ls(Ne),K=Ve==null?ge:ls(Ve),ge=new He(Te,X+"leave",Ne,o,_e),ge.target=Yt,ge.relatedTarget=K,Te=null,Cr(_e)===te&&(He=new He($,X+"enter",Ve,o,_e),He.target=K,He.relatedTarget=Yt,Te=He),Yt=Te,Ne&&Ve)t:{for(He=Ne,$=Ve,X=0,K=He;K;K=os(K))X++;for(K=0,Te=$;Te;Te=os(Te))K++;for(;0<X-K;)He=os(He),X--;for(;0<K-X;)$=os($),K--;for(;X--;){if(He===$||$!==null&&He===$.alternate)break t;He=os(He),$=os($)}He=null}else He=null;Ne!==null&&Xd(ye,ge,Ne,He,!1),Ve!==null&&Yt!==null&&Xd(ye,Yt,Ve,He,!0)}}e:{if(ge=te?ls(te):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Xe=iv;else if(Td(ge))if(Ad)Xe=av;else{Xe=sv;var Ze=rv}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=ov);if(Xe&&(Xe=Xe(n,te))){wd(ye,Xe,o,_e);break e}Ze&&Ze(n,ge,te),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch(Ze=te?ls(te):window,n){case"focusin":(Td(Ze)||Ze.contentEditable==="true")&&(rs=Ze,Kl=te,lo=null);break;case"focusout":lo=Kl=rs=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Id(ye,o,_e);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Id(ye,o,_e)}var Je;if(Yl)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else is?Ed(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(xd&&o.locale!=="ko"&&(is||it!=="onCompositionStart"?it==="onCompositionEnd"&&is&&(Je=pd()):(Zi=_e,Bl="value"in Zi?Zi.value:Zi.textContent,is=!0)),Ze=ca(te,it),0<Ze.length&&(it=new vd(it,n,null,o,_e),ye.push({event:it,listeners:Ze}),Je?it.data=Je:(Je=Md(o),Je!==null&&(it.data=Je)))),(Je=Jg?Qg(n,o):ev(n,o))&&(te=ca(te,"onBeforeInput"),0<te.length&&(_e=new vd("onBeforeInput","beforeinput",null,o,_e),ye.push({event:_e,listeners:te}),_e.data=Je))}Gd(ye,i)})}function fo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ca(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=xn(n,o),p!=null&&u.unshift(fo(n,p,d)),p=xn(n,i),p!=null&&u.push(fo(n,p,d))),n=n.return}return u}function os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xd(n,i,o,u,d){for(var p=i._reactName,E=[];o!==null&&o!==u;){var N=o,k=N.alternate,te=N.stateNode;if(k!==null&&k===u)break;N.tag===5&&te!==null&&(N=te,d?(k=xn(o,p),k!=null&&E.unshift(fo(o,k,N))):d||(k=xn(o,p),k!=null&&E.push(fo(o,k,N)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function Yd(n){return(typeof n=="string"?n:""+n).replace(pv,`
`).replace(mv,"")}function fa(n,i,o){if(i=Yd(i),Yd(n)!==i&&o)throw Error(t(425))}function da(){}var iu=null,ru=null;function su(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(n){return qd.resolve(null).then(n).catch(_v)}:ou;function _v(n){setTimeout(function(){throw n})}function au(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),to(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);to(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function jd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var as=Math.random().toString(36).slice(2),hi="__reactFiber$"+as,ho="__reactProps$"+as,Ti="__reactContainer$"+as,lu="__reactEvents$"+as,xv="__reactListeners$"+as,yv="__reactHandles$"+as;function Cr(n){var i=n[hi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ti]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=jd(n);n!==null;){if(o=n[hi])return o;n=jd(n)}return i}n=o,o=n.parentNode}return null}function po(n){return n=n[hi]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ha(n){return n[ho]||null}var uu=[],us=-1;function er(n){return{current:n}}function Ft(n){0>us||(n.current=uu[us],uu[us]=null,us--)}function Dt(n,i){us++,uu[us]=n.current,n.current=i}var tr={},dn=er(tr),Cn=er(!1),Rr=tr;function cs(n,i){var o=n.type.contextTypes;if(!o)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function pa(){Ft(Cn),Ft(dn)}function $d(n,i,o){if(dn.current!==tr)throw Error(t(168));Dt(dn,i),Dt(Cn,o)}function Kd(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return oe({},o,u)}function ma(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Rr=dn.current,Dt(dn,n),Dt(Cn,Cn.current),!0}function Zd(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Kd(n,i,Rr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Cn),Ft(dn),Dt(dn,n)):Ft(Cn),Dt(Cn,o)}var wi=null,ga=!1,cu=!1;function Jd(n){wi===null?wi=[n]:wi.push(n)}function Sv(n){ga=!0,Jd(n)}function nr(){if(!cu&&wi!==null){cu=!0;var n=0,i=mt;try{var o=wi;for(mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}wi=null,ga=!1}catch(d){throw wi!==null&&(wi=wi.slice(n+1)),R(Re,nr),d}finally{mt=i,cu=!1}}return null}var fs=[],ds=0,va=null,_a=0,Wn=[],Xn=0,Pr=null,Ai=1,Ci="";function br(n,i){fs[ds++]=_a,fs[ds++]=va,va=n,_a=i}function Qd(n,i,o){Wn[Xn++]=Ai,Wn[Xn++]=Ci,Wn[Xn++]=Pr,Pr=n;var u=Ai;n=Ci;var d=32-Mt(u)-1;u&=~(1<<d),o+=1;var p=32-Mt(i)+d;if(30<p){var E=d-d%5;p=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Ai=1<<32-Mt(i)+d|o<<d|u,Ci=p+n}else Ai=1<<p|o<<d|u,Ci=n}function fu(n){n.return!==null&&(br(n,1),Qd(n,1,0))}function du(n){for(;n===va;)va=fs[--ds],fs[ds]=null,_a=fs[--ds],fs[ds]=null;for(;n===Pr;)Pr=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null,Ai=Wn[--Xn],Wn[Xn]=null}var On=null,kn=null,kt=!1,ei=null;function eh(n,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function th(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,kn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Ai,overflow:Ci}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,On=n,kn=null,!0):!1;default:return!1}}function hu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pu(n){if(kt){var i=kn;if(i){var o=i;if(!th(n,i)){if(hu(n))throw Error(t(418));i=Qi(o.nextSibling);var u=On;i&&th(n,i)?eh(u,o):(n.flags=n.flags&-4097|2,kt=!1,On=n)}}else{if(hu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,On=n}}}function nh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function xa(n){if(n!==On)return!1;if(!kt)return nh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!su(n.type,n.memoizedProps)),i&&(i=kn)){if(hu(n))throw ih(),Error(t(418));for(;i;)eh(n,i),i=Qi(i.nextSibling)}if(nh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=Qi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=On?Qi(n.stateNode.nextSibling):null;return!0}function ih(){for(var n=kn;n;)n=Qi(n.nextSibling)}function hs(){kn=On=null,kt=!1}function mu(n){ei===null?ei=[n]:ei.push(n)}var Ev=P.ReactCurrentBatchConfig;function mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var N=d.refs;E===null?delete N[p]:N[p]=E},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ya(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rh(n){var i=n._init;return i(n._payload)}function sh(n){function i($,X){if(n){var K=$.deletions;K===null?($.deletions=[X],$.flags|=16):K.push(X)}}function o($,X){if(!n)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function u($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function d($,X){return $=cr($,X),$.index=0,$.sibling=null,$}function p($,X,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<X?($.flags|=2,X):K):($.flags|=2,X)):($.flags|=1048576,X)}function E($){return n&&$.alternate===null&&($.flags|=2),$}function N($,X,K,Te){return X===null||X.tag!==6?(X=oc(K,$.mode,Te),X.return=$,X):(X=d(X,K),X.return=$,X)}function k($,X,K,Te){var Xe=K.type;return Xe===O?_e($,X,K.props.children,Te,K.key):X!==null&&(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&rh(Xe)===X.type)?(Te=d(X,K.props),Te.ref=mo($,X,K),Te.return=$,Te):(Te=Wa(K.type,K.key,K.props,null,$.mode,Te),Te.ref=mo($,X,K),Te.return=$,Te)}function te($,X,K,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=ac(K,$.mode,Te),X.return=$,X):(X=d(X,K.children||[]),X.return=$,X)}function _e($,X,K,Te,Xe){return X===null||X.tag!==7?(X=kr(K,$.mode,Te,Xe),X.return=$,X):(X=d(X,K),X.return=$,X)}function ye($,X,K){if(typeof X=="string"&&X!==""||typeof X=="number")return X=oc(""+X,$.mode,K),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case H:return K=Wa(X.type,X.key,X.props,null,$.mode,K),K.ref=mo($,null,X),K.return=$,K;case U:return X=ac(X,$.mode,K),X.return=$,X;case ae:var Te=X._init;return ye($,Te(X._payload),K)}if(Ye(X)||ue(X))return X=kr(X,$.mode,K,null),X.return=$,X;ya($,X)}return null}function ge($,X,K,Te){var Xe=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:N($,X,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return K.key===Xe?k($,X,K,Te):null;case U:return K.key===Xe?te($,X,K,Te):null;case ae:return Xe=K._init,ge($,X,Xe(K._payload),Te)}if(Ye(K)||ue(K))return Xe!==null?null:_e($,X,K,Te,null);ya($,K)}return null}function Ne($,X,K,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,N(X,$,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return $=$.get(Te.key===null?K:Te.key)||null,k(X,$,Te,Xe);case U:return $=$.get(Te.key===null?K:Te.key)||null,te(X,$,Te,Xe);case ae:var Ze=Te._init;return Ne($,X,K,Ze(Te._payload),Xe)}if(Ye(Te)||ue(Te))return $=$.get(K)||null,_e(X,$,Te,Xe,null);ya(X,Te)}return null}function Ve($,X,K,Te){for(var Xe=null,Ze=null,Je=X,it=X=0,nn=null;Je!==null&&it<K.length;it++){Je.index>it?(nn=Je,Je=null):nn=Je.sibling;var Tt=ge($,Je,K[it],Te);if(Tt===null){Je===null&&(Je=nn);break}n&&Je&&Tt.alternate===null&&i($,Je),X=p(Tt,X,it),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt,Je=nn}if(it===K.length)return o($,Je),kt&&br($,it),Xe;if(Je===null){for(;it<K.length;it++)Je=ye($,K[it],Te),Je!==null&&(X=p(Je,X,it),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return kt&&br($,it),Xe}for(Je=u($,Je);it<K.length;it++)nn=Ne(Je,$,it,K[it],Te),nn!==null&&(n&&nn.alternate!==null&&Je.delete(nn.key===null?it:nn.key),X=p(nn,X,it),Ze===null?Xe=nn:Ze.sibling=nn,Ze=nn);return n&&Je.forEach(function(fr){return i($,fr)}),kt&&br($,it),Xe}function He($,X,K,Te){var Xe=ue(K);if(typeof Xe!="function")throw Error(t(150));if(K=Xe.call(K),K==null)throw Error(t(151));for(var Ze=Xe=null,Je=X,it=X=0,nn=null,Tt=K.next();Je!==null&&!Tt.done;it++,Tt=K.next()){Je.index>it?(nn=Je,Je=null):nn=Je.sibling;var fr=ge($,Je,Tt.value,Te);if(fr===null){Je===null&&(Je=nn);break}n&&Je&&fr.alternate===null&&i($,Je),X=p(fr,X,it),Ze===null?Xe=fr:Ze.sibling=fr,Ze=fr,Je=nn}if(Tt.done)return o($,Je),kt&&br($,it),Xe;if(Je===null){for(;!Tt.done;it++,Tt=K.next())Tt=ye($,Tt.value,Te),Tt!==null&&(X=p(Tt,X,it),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt);return kt&&br($,it),Xe}for(Je=u($,Je);!Tt.done;it++,Tt=K.next())Tt=Ne(Je,$,it,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Je.delete(Tt.key===null?it:Tt.key),X=p(Tt,X,it),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt);return n&&Je.forEach(function(t_){return i($,t_)}),kt&&br($,it),Xe}function Yt($,X,K,Te){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case H:e:{for(var Xe=K.key,Ze=X;Ze!==null;){if(Ze.key===Xe){if(Xe=K.type,Xe===O){if(Ze.tag===7){o($,Ze.sibling),X=d(Ze,K.props.children),X.return=$,$=X;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&rh(Xe)===Ze.type){o($,Ze.sibling),X=d(Ze,K.props),X.ref=mo($,Ze,K),X.return=$,$=X;break e}o($,Ze);break}else i($,Ze);Ze=Ze.sibling}K.type===O?(X=kr(K.props.children,$.mode,Te,K.key),X.return=$,$=X):(Te=Wa(K.type,K.key,K.props,null,$.mode,Te),Te.ref=mo($,X,K),Te.return=$,$=Te)}return E($);case U:e:{for(Ze=K.key;X!==null;){if(X.key===Ze)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){o($,X.sibling),X=d(X,K.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=ac(K,$.mode,Te),X.return=$,$=X}return E($);case ae:return Ze=K._init,Yt($,X,Ze(K._payload),Te)}if(Ye(K))return Ve($,X,K,Te);if(ue(K))return He($,X,K,Te);ya($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,X!==null&&X.tag===6?(o($,X.sibling),X=d(X,K),X.return=$,$=X):(o($,X),X=oc(K,$.mode,Te),X.return=$,$=X),E($)):o($,X)}return Yt}var ps=sh(!0),oh=sh(!1),Sa=er(null),Ea=null,ms=null,gu=null;function vu(){gu=ms=Ea=null}function _u(n){var i=Sa.current;Ft(Sa),n._currentValue=i}function xu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function gs(n,i){Ea=n,gu=ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(gu!==n)if(n={context:n,memoizedValue:i,next:null},ms===null){if(Ea===null)throw Error(t(308));ms=n,Ea.dependencies={lanes:0,firstContext:n}}else ms=ms.next=n;return i}var Lr=null;function yu(n){Lr===null?Lr=[n]:Lr.push(n)}function ah(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,yu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(n,u)}function Ri(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ir=!1;function Su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(yt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,o)}return d=u.interleaved,d===null?(i.next=i,yu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,o)}function Ma(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ar(n,o)}}function uh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ta(n,i,o,u){var d=n.updateQueue;ir=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var k=N,te=k.next;k.next=null,E===null?p=te:E.next=te,E=k;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,N=_e.lastBaseUpdate,N!==E&&(N===null?_e.firstBaseUpdate=te:N.next=te,_e.lastBaseUpdate=k))}if(p!==null){var ye=d.baseState;E=0,_e=te=k=null,N=p;do{var ge=N.lane,Ne=N.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ve=n,He=N;switch(ge=i,Ne=o,He.tag){case 1:if(Ve=He.payload,typeof Ve=="function"){ye=Ve.call(Ne,ye,ge);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=He.payload,ge=typeof Ve=="function"?Ve.call(Ne,ye,ge):Ve,ge==null)break e;ye=oe({},ye,ge);break e;case 2:ir=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[N]:ge.push(N))}else Ne={eventTime:Ne,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_e===null?(te=_e=Ne,k=ye):_e=_e.next=Ne,E|=ge;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=te,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ir|=E,n.lanes=E,n.memoizedState=ye}}function ch(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var go={},pi=er(go),vo=er(go),_o=er(go);function Nr(n){if(n===go)throw Error(t(174));return n}function Eu(n,i){switch(Dt(_o,i),Dt(vo,n),Dt(pi,go),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ft(pi),Dt(pi,i)}function vs(){Ft(pi),Ft(vo),Ft(_o)}function fh(n){Nr(_o.current);var i=Nr(pi.current),o=We(i,n.type);i!==o&&(Dt(vo,n),Dt(pi,o))}function Mu(n){vo.current===n&&(Ft(pi),Ft(vo))}var Bt=er(0);function wa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function wu(){for(var n=0;n<Tu.length;n++)Tu[n]._workInProgressVersionPrimary=null;Tu.length=0}var Aa=P.ReactCurrentDispatcher,Au=P.ReactCurrentBatchConfig,Dr=0,Vt=null,Kt=null,en=null,Ca=!1,xo=!1,yo=0,Mv=0;function hn(){throw Error(t(321))}function Cu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Qn(n[o],i[o]))return!1;return!0}function Ru(n,i,o,u,d,p){if(Dr=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=n===null||n.memoizedState===null?Cv:Rv,n=o(u,d),xo){p=0;do{if(xo=!1,yo=0,25<=p)throw Error(t(301));p+=1,en=Kt=null,i.updateQueue=null,Aa.current=Pv,n=o(u,d)}while(xo)}if(Aa.current=ba,i=Kt!==null&&Kt.next!==null,Dr=0,en=Kt=Vt=null,Ca=!1,i)throw Error(t(300));return n}function Pu(){var n=yo!==0;return yo=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Vt.memoizedState=en=n:en=en.next=n,en}function qn(){if(Kt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=en===null?Vt.memoizedState:en.next;if(i!==null)en=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?Vt.memoizedState=en=n:en=en.next=n}return en}function So(n,i){return typeof i=="function"?i(n):i}function bu(n){var i=qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Kt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var N=E=null,k=null,te=p;do{var _e=te.lane;if((Dr&_e)===_e)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var ye={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(N=k=ye,E=u):k=k.next=ye,Vt.lanes|=_e,Ir|=_e}te=te.next}while(te!==null&&te!==p);k===null?E=u:k.next=N,Qn(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Vt.lanes|=p,Ir|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Lu(n){var i=qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do p=n(p,E.action),E=E.next;while(E!==d);Qn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function dh(){}function hh(n,i){var o=Vt,u=qn(),d=i(),p=!Qn(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,Nu(gh.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Eo(9,mh.bind(null,o,u,d,i),void 0,null),tn===null)throw Error(t(349));(Dr&30)!==0||ph(o,i,d)}return d}function ph(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function mh(n,i,o,u){i.value=o,i.getSnapshot=u,vh(i)&&_h(n)}function gh(n,i,o){return o(function(){vh(i)&&_h(n)})}function vh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Qn(n,o)}catch{return!0}}function _h(n){var i=Ri(n,1);i!==null&&ri(i,n,1,-1)}function xh(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:n},i.queue=n,n=n.dispatch=Av.bind(null,Vt,n),[i.memoizedState,n]}function Eo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function yh(){return qn().memoizedState}function Ra(n,i,o,u){var d=mi();Vt.flags|=n,d.memoizedState=Eo(1|i,o,void 0,u===void 0?null:u)}function Pa(n,i,o,u){var d=qn();u=u===void 0?null:u;var p=void 0;if(Kt!==null){var E=Kt.memoizedState;if(p=E.destroy,u!==null&&Cu(u,E.deps)){d.memoizedState=Eo(i,o,p,u);return}}Vt.flags|=n,d.memoizedState=Eo(1|i,o,p,u)}function Sh(n,i){return Ra(8390656,8,n,i)}function Nu(n,i){return Pa(2048,8,n,i)}function Eh(n,i){return Pa(4,2,n,i)}function Mh(n,i){return Pa(4,4,n,i)}function Th(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wh(n,i,o){return o=o!=null?o.concat([n]):null,Pa(4,4,Th.bind(null,i,n),o)}function Du(){}function Ah(n,i){var o=qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Cu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Ch(n,i){var o=qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Cu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Rh(n,i,o){return(Dr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o):(Qn(o,i)||(o=Sn(),Vt.lanes|=o,Ir|=o,n.baseState=!0),i)}function Tv(n,i){var o=mt;mt=o!==0&&4>o?o:4,n(!0);var u=Au.transition;Au.transition={};try{n(!1),i()}finally{mt=o,Au.transition=u}}function Ph(){return qn().memoizedState}function wv(n,i,o){var u=lr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},bh(n))Lh(i,o);else if(o=ah(n,i,o,u),o!==null){var d=Mn();ri(o,n,u,d),Nh(o,i,u)}}function Av(n,i,o){var u=lr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(n))Lh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,N=p(E,o);if(d.hasEagerState=!0,d.eagerState=N,Qn(N,E)){var k=i.interleaved;k===null?(d.next=d,yu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=ah(n,i,d,u),o!==null&&(d=Mn(),ri(o,n,u,d),Nh(o,i,u))}}function bh(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Lh(n,i){xo=Ca=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Nh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ar(n,o)}}var ba={readContext:Yn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Cv={readContext:Yn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:Sh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ra(4194308,4,Th.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ra(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ra(4,2,n,i)},useMemo:function(n,i){var o=mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=mi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=wv.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:xh,useDebugValue:Du,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=xh(!1),i=n[0];return n=Tv.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=mi();if(kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),tn===null)throw Error(t(349));(Dr&30)!==0||ph(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Sh(gh.bind(null,u,p,n),[n]),u.flags|=2048,Eo(9,mh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=mi(),i=tn.identifierPrefix;if(kt){var o=Ci,u=Ai;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Mv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:Yn,useCallback:Ah,useContext:Yn,useEffect:Nu,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:Mh,useMemo:Ch,useReducer:bu,useRef:yh,useState:function(){return bu(So)},useDebugValue:Du,useDeferredValue:function(n){var i=qn();return Rh(i,Kt.memoizedState,n)},useTransition:function(){var n=bu(So)[0],i=qn().memoizedState;return[n,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1},Pv={readContext:Yn,useCallback:Ah,useContext:Yn,useEffect:Nu,useImperativeHandle:wh,useInsertionEffect:Eh,useLayoutEffect:Mh,useMemo:Ch,useReducer:Lu,useRef:yh,useState:function(){return Lu(So)},useDebugValue:Du,useDeferredValue:function(n){var i=qn();return Kt===null?i.memoizedState=n:Rh(i,Kt.memoizedState,n)},useTransition:function(){var n=Lu(So)[0],i=qn().memoizedState;return[n,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Iu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var La={isMounted:function(n){return(n=n._reactInternals)?di(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=lr(n),p=Pi(u,d);p.payload=i,o!=null&&(p.callback=o),i=rr(n,p,d),i!==null&&(ri(i,n,d,u),Ma(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=lr(n),p=Pi(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(n,p,d),i!==null&&(ri(i,n,d,u),Ma(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=lr(n),d=Pi(o,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(ri(i,n,u,o),Ma(i,n,u))}};function Dh(n,i,o,u,d,p,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,E):i.prototype&&i.prototype.isPureReactComponent?!ao(o,u)||!ao(d,p):!0}function Ih(n,i,o){var u=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(d=Rn(i)?Rr:dn.current,u=i.contextTypes,p=(u=u!=null)?cs(n,d):tr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Uh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&La.enqueueReplaceState(i,i.state,null)}function Uu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Su(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Yn(p):(p=Rn(i)?Rr:dn.current,d.context=cs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Iu(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&La.enqueueReplaceState(d,d.state,null),Ta(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function _s(n,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Fu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ou(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var bv=typeof WeakMap=="function"?WeakMap:Map;function Fh(n,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ka||(ka=!0,Ju=u),Ou(n,i)},o}function Oh(n,i,o){o=Pi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ou(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ou(n,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function kh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new bv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=Wv.bind(null,n,i,o),i.then(n,n))}function zh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Bh(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Lv=P.ReactCurrentOwner,Pn=!1;function En(n,i,o,u){i.child=n===null?oh(i,null,o,u):ps(i,n.child,o,u)}function Vh(n,i,o,u,d){o=o.render;var p=i.ref;return gs(i,d),u=Ru(n,i,o,u,p,d),o=Pu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(kt&&o&&fu(i),i.flags|=1,En(n,i,u,d),i.child)}function Hh(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!sc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Gh(n,i,p,u,d)):(n=Wa(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:ao,o(E,u)&&n.ref===i.ref)return bi(n,i,d)}return i.flags|=1,n=cr(p,u),n.ref=i.ref,n.return=i,i.child=n}function Gh(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(ao(p,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,bi(n,i,d)}return ku(n,i,o,u,d)}function Wh(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(ys,zn),zn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(ys,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Dt(ys,zn),zn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Dt(ys,zn),zn|=u;return En(n,i,d,o),i.child}function Xh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ku(n,i,o,u,d){var p=Rn(o)?Rr:dn.current;return p=cs(i,p),gs(i,d),o=Ru(n,i,o,u,p,d),u=Pu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(kt&&u&&fu(i),i.flags|=1,En(n,i,o,d),i.child)}function Yh(n,i,o,u,d){if(Rn(o)){var p=!0;ma(i)}else p=!1;if(gs(i,d),i.stateNode===null)Da(n,i),Ih(i,o,u),Uu(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var k=E.context,te=o.contextType;typeof te=="object"&&te!==null?te=Yn(te):(te=Rn(o)?Rr:dn.current,te=cs(i,te));var _e=o.getDerivedStateFromProps,ye=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==u||k!==te)&&Uh(i,E,u,te),ir=!1;var ge=i.memoizedState;E.state=ge,Ta(i,u,E,d),k=i.memoizedState,N!==u||ge!==k||Cn.current||ir?(typeof _e=="function"&&(Iu(i,o,_e,u),k=i.memoizedState),(N=ir||Dh(i,o,N,u,ge,k,te))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),E.props=u,E.state=k,E.context=te,u=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,lh(n,i),N=i.memoizedProps,te=i.type===i.elementType?N:ti(i.type,N),E.props=te,ye=i.pendingProps,ge=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=Yn(k):(k=Rn(o)?Rr:dn.current,k=cs(i,k));var Ne=o.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==ye||ge!==k)&&Uh(i,E,u,k),ir=!1,ge=i.memoizedState,E.state=ge,Ta(i,u,E,d);var Ve=i.memoizedState;N!==ye||ge!==Ve||Cn.current||ir?(typeof Ne=="function"&&(Iu(i,o,Ne,u),Ve=i.memoizedState),(te=ir||Dh(i,o,te,u,ge,Ve,k)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Ve,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Ve,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),E.props=u,E.state=Ve,E.context=k,u=te):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return zu(n,i,o,u,p,d)}function zu(n,i,o,u,d,p){Xh(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&Zd(i,o,!1),bi(n,i,p);u=i.stateNode,Lv.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=ps(i,n.child,null,p),i.child=ps(i,null,N,p)):En(n,i,N,p),i.memoizedState=u.state,d&&Zd(i,o,!0),i.child}function qh(n){var i=n.stateNode;i.pendingContext?$d(n,i.pendingContext,i.pendingContext!==i.context):i.context&&$d(n,i.context,!1),Eu(n,i.containerInfo)}function jh(n,i,o,u,d){return hs(),mu(d),i.flags|=256,En(n,i,o,u),i.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function $h(n,i,o){var u=i.pendingProps,d=Bt.current,p=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Dt(Bt,d&1),n===null)return pu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,p?(u=i.mode,p=i.child,E={mode:"hidden",children:E},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Xa(E,u,0,null),n=kr(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Vu(o),i.memoizedState=Bu,n):Hu(i,E));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return Nv(n,i,E,u,N,d,o);if(p){p=u.fallback,E=i.mode,d=n.child,N=d.sibling;var k={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=cr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?p=cr(N,p):(p=kr(p,E,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,E=n.child.memoizedState,E=E===null?Vu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=n.childLanes&~o,i.memoizedState=Bu,u}return p=n.child,n=p.sibling,u=cr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Hu(n,i){return i=Xa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Na(n,i,o,u){return u!==null&&mu(u),ps(i,n.child,null,o),n=Hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nv(n,i,o,u,d,p,E){if(o)return i.flags&256?(i.flags&=-257,u=Fu(Error(t(422))),Na(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Xa({mode:"visible",children:u.children},d,0,null),p=kr(p,d,E,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&ps(i,n.child,null,E),i.child.memoizedState=Vu(E),i.memoizedState=Bu,p);if((i.mode&1)===0)return Na(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(t(419)),u=Fu(p,u,void 0),Na(n,i,E,u)}if(N=(E&n.childLanes)!==0,Pn||N){if(u=tn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(n,d),ri(u,n,d,-1))}return rc(),u=Fu(Error(t(421))),Na(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Xv.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,kn=Qi(d.nextSibling),On=i,kt=!0,ei=null,n!==null&&(Wn[Xn++]=Ai,Wn[Xn++]=Ci,Wn[Xn++]=Pr,Ai=n.id,Ci=n.overflow,Pr=i),i=Hu(i,u.children),i.flags|=4096,i)}function Kh(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),xu(n.return,i,o)}function Gu(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function Zh(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(En(n,i,u.children,o),u=Bt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kh(n,o,i);else if(n.tag===19)Kh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(Bt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&wa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Gu(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&wa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Gu(i,!0,o,null,p);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=cr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=cr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Dv(n,i,o){switch(i.tag){case 3:qh(i),hs();break;case 5:fh(i);break;case 1:Rn(i.type)&&ma(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Dt(Sa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?$h(n,i,o):(Dt(Bt,Bt.current&1),n=bi(n,i,o),n!==null?n.sibling:null);Dt(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Zh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,Wh(n,i,o)}return bi(n,i,o)}var Jh,Wu,Qh,ep;Jh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wu=function(){},Qh=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(pi.current);var p=null;switch(o){case"input":d=B(n,d),u=B(n,u),p=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),p=[];break;case"textarea":d=w(n,d),u=w(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=da)}ft(o,u);var E;o=null;for(te in d)if(!u.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var N=d[te];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in u){var k=u[te];if(N=d!=null?d[te]:void 0,u.hasOwnProperty(te)&&k!==N&&(k!=null||N!=null))if(te==="style")if(N){for(E in N)!N.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&N[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(p||(p=[]),p.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(p=p||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&Ut("scroll",n),p||N===k||(p=[])):(p=p||[]).push(te,k))}o&&(p=p||[]).push("style",o);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},ep=function(n,i,o,u){o!==u&&(i.flags|=4)};function Mo(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Iv(n,i,o){var u=i.pendingProps;switch(du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Rn(i.type)&&pa(),pn(i),null;case 3:return u=i.stateNode,vs(),Ft(Cn),Ft(dn),wu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(tc(ei),ei=null))),Wu(n,i),pn(i),null;case 5:Mu(i);var d=Nr(_o.current);if(o=i.type,n!==null&&i.stateNode!=null)Qh(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Nr(pi.current),xa(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[hi]=i,u[ho]=p,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<uo.length;d++)Ut(uo[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":_n(u,p),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",u);break;case"textarea":Q(u,p),Ut("invalid",u)}ft(o,p),d=null;for(var E in p)if(p.hasOwnProperty(E)){var N=p[E];E==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&fa(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&fa(u.textContent,N,n),d=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ut("scroll",u)}switch(o){case"input":Rt(u),je(u,p,!0);break;case"textarea":Rt(u),ve(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=da)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[hi]=i,n[ho]=u,Jh(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),d=u;break;case"iframe":case"object":case"embed":Ut("load",n),d=u;break;case"video":case"audio":for(d=0;d<uo.length;d++)Ut(uo[d],n);d=u;break;case"source":Ut("error",n),d=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),d=u;break;case"details":Ut("toggle",n),d=u;break;case"input":_n(n,u),d=B(n,u),Ut("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":Q(n,u),d=w(n,u),Ut("invalid",n);break;default:d=u}ft(o,d),N=d;for(p in N)if(N.hasOwnProperty(p)){var k=N[p];p==="style"?et(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fe(n,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ut(n,k):typeof k=="number"&&ut(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ut("scroll",n):k!=null&&L(n,p,k,E))}switch(o){case"input":Rt(n),je(n,u,!1);break;case"textarea":Rt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?b(n,!!u.multiple,p,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)ep(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(_o.current),Nr(pi.current),xa(i)){if(u=i.stateNode,o=i.memoizedProps,u[hi]=i,(p=u.nodeValue!==o)&&(n=On,n!==null))switch(n.tag){case 3:fa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fa(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return pn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),hs(),i.flags|=98560,p=!1;else if(p=xa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[hi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),p=!1}else ei!==null&&(tc(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):rc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return vs(),Wu(n,i),n===null&&co(i.stateNode.containerInfo),pn(i),null;case 10:return _u(i.type._context),pn(i),null;case 17:return Rn(i.type)&&pa(),pn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return pn(i),null;if(u=(i.flags&128)!==0,E=p.rendering,E===null)if(u)Mo(p,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=wa(n),E!==null){for(i.flags|=128,Mo(p,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,n=E.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Dt(Bt,Bt.current&1|2),i.child}n=n.sibling}p.tail!==null&&W()>Ss&&(i.flags|=128,u=!0,Mo(p,!1),i.lanes=4194304)}else{if(!u)if(n=wa(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!kt)return pn(i),null}else 2*W()-p.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,u=!0,Mo(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=W(),i.sibling=null,o=Bt.current,Dt(Bt,u?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return ic(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Uv(n,i){switch(du(i),i.tag){case 1:return Rn(i.type)&&pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return vs(),Ft(Cn),Ft(dn),wu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Mu(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return vs(),null;case 10:return _u(i.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Ia=!1,mn=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function xs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function Xu(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var tp=!1;function Ov(n,i){if(iu=ea,n=Dd(),$l(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,N=-1,k=-1,te=0,_e=0,ye=n,ge=null;t:for(;;){for(var Ne;ye!==o||d!==0&&ye.nodeType!==3||(N=E+d),ye!==p||u!==0&&ye.nodeType!==3||(k=E+u),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===n)break t;if(ge===o&&++te===d&&(N=E),ge===p&&++_e===u&&(k=E),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}o=N===-1||k===-1?null:{start:N,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(ru={focusedElem:n,selectionRange:o},ea=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var He=Ve.memoizedProps,Yt=Ve.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?He:ti(i.type,He),Yt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Gt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=tp,tp=!1,Ve}function To(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Xu(i,o,p)}d=d.next}while(d!==u)}}function Ua(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Yu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function np(n){var i=n.alternate;i!==null&&(n.alternate=null,np(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[hi],delete i[ho],delete i[lu],delete i[xv],delete i[yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ip(n){return n.tag===5||n.tag===3||n.tag===4}function rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ip(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(u!==4&&(n=n.child,n!==null))for(qu(n,i,o),n=n.sibling;n!==null;)qu(n,i,o),n=n.sibling}function ju(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ju(n,i,o),n=n.sibling;n!==null;)ju(n,i,o),n=n.sibling}var an=null,ni=!1;function sr(n,i,o){for(o=o.child;o!==null;)sp(n,i,o),o=o.sibling}function sp(n,i,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qe,o)}catch{}switch(o.tag){case 5:mn||xs(o,i);case 6:var u=an,d=ni;an=null,sr(n,i,o),an=u,ni=d,an!==null&&(ni?(n=an,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ni?(n=an,o=o.stateNode,n.nodeType===8?au(n.parentNode,o):n.nodeType===1&&au(n,o),to(n)):au(an,o.stateNode));break;case 4:u=an,d=ni,an=o.stateNode.containerInfo,ni=!0,sr(n,i,o),an=u,ni=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&Xu(o,i,E),d=d.next}while(d!==u)}sr(n,i,o);break;case 1:if(!mn&&(xs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){Gt(o,i,N)}sr(n,i,o);break;case 21:sr(n,i,o);break;case 22:o.mode&1?(mn=(u=mn)||o.memoizedState!==null,sr(n,i,o),mn=u):sr(n,i,o);break;default:sr(n,i,o)}}function op(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Fv),i.forEach(function(u){var d=Yv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:an=N.stateNode,ni=!1;break e;case 3:an=N.stateNode.containerInfo,ni=!0;break e;case 4:an=N.stateNode.containerInfo,ni=!0;break e}N=N.return}if(an===null)throw Error(t(160));sp(p,E,d),an=null,ni=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(te){Gt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,n),i=i.sibling}function ap(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),gi(n),u&4){try{To(3,n,n.return),Ua(3,n)}catch(He){Gt(n,n.return,He)}try{To(5,n,n.return)}catch(He){Gt(n,n.return,He)}}break;case 1:ii(i,n),gi(n),u&512&&o!==null&&xs(o,o.return);break;case 5:if(ii(i,n),gi(n),u&512&&o!==null&&xs(o,o.return),n.flags&32){var d=n.stateNode;try{ut(d,"")}catch(He){Gt(n,n.return,He)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,E=o!==null?o.memoizedProps:p,N=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&pt(d,p),rt(N,E);var te=rt(N,p);for(E=0;E<k.length;E+=2){var _e=k[E],ye=k[E+1];_e==="style"?et(d,ye):_e==="dangerouslySetInnerHTML"?Fe(d,ye):_e==="children"?ut(d,ye):L(d,_e,ye,te)}switch(N){case"input":ct(d,p);break;case"textarea":me(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ne=p.value;Ne!=null?b(d,!!p.multiple,Ne,!1):ge!==!!p.multiple&&(p.defaultValue!=null?b(d,!!p.multiple,p.defaultValue,!0):b(d,!!p.multiple,p.multiple?[]:"",!1))}d[ho]=p}catch(He){Gt(n,n.return,He)}}break;case 6:if(ii(i,n),gi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(He){Gt(n,n.return,He)}}break;case 3:if(ii(i,n),gi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(He){Gt(n,n.return,He)}break;case 4:ii(i,n),gi(n);break;case 13:ii(i,n),gi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Zu=W())),u&4&&op(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(mn=(te=mn)||_e,ii(i,n),mn=te):ii(i,n),gi(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!_e&&(n.mode&1)!==0)for(ke=n,_e=n.child;_e!==null;){for(ye=ke=_e;ke!==null;){switch(ge=ke,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:To(4,ge,ge.return);break;case 1:xs(ge,ge.return);var Ve=ge.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(He){Gt(u,o,He)}}break;case 5:xs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){cp(ye);continue}}Ne!==null?(Ne.return=ge,ke=Ne):cp(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{d=ye.stateNode,te?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=ye.stateNode,k=ye.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Ke("display",E))}catch(He){Gt(n,n.return,He)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(He){Gt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ii(i,n),gi(n),u&4&&op(n);break;case 21:break;default:ii(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(ip(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ut(d,""),u.flags&=-33);var p=rp(n);ju(n,p,d);break;case 3:case 4:var E=u.stateNode.containerInfo,N=rp(n);qu(n,N,E);break;default:throw Error(t(161))}}catch(k){Gt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function kv(n,i,o){ke=n,lp(n)}function lp(n,i,o){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Ia;if(!E){var N=d.alternate,k=N!==null&&N.memoizedState!==null||mn;N=Ia;var te=mn;if(Ia=E,(mn=k)&&!te)for(ke=d;ke!==null;)E=ke,k=E.child,E.tag===22&&E.memoizedState!==null?fp(d):k!==null?(k.return=E,ke=k):fp(d);for(;p!==null;)ke=p,lp(p),p=p.sibling;ke=d,Ia=N,mn=te}up(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ke=p):up(n)}}function up(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Ua(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ch(i,p,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ch(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&to(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Yu(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function cp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function fp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(k){Gt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Gt(i,d,k)}}var p=i.return;try{Yu(i)}catch(k){Gt(i,p,k)}break;case 5:var E=i.return;try{Yu(i)}catch(k){Gt(i,E,k)}}}catch(k){Gt(i,i.return,k)}if(i===n){ke=null;break}var N=i.sibling;if(N!==null){N.return=i.return,ke=N;break}ke=i.return}}var zv=Math.ceil,Fa=P.ReactCurrentDispatcher,$u=P.ReactCurrentOwner,jn=P.ReactCurrentBatchConfig,yt=0,tn=null,qt=null,ln=0,zn=0,ys=er(0),Zt=0,wo=null,Ir=0,Oa=0,Ku=0,Ao=null,bn=null,Zu=0,Ss=1/0,Li=null,ka=!1,Ju=null,or=null,za=!1,ar=null,Ba=0,Co=0,Qu=null,Va=-1,Ha=0;function Mn(){return(yt&6)!==0?W():Va!==-1?Va:Va=W()}function lr(n){return(n.mode&1)===0?1:(yt&2)!==0&&ln!==0?ln&-ln:Ev.transition!==null?(Ha===0&&(Ha=Sn()),Ha):(n=mt,n!==0||(n=window.event,n=n===void 0?16:hd(n.type)),n)}function ri(n,i,o,u){if(50<Co)throw Co=0,Qu=null,Error(t(185));Xt(n,o,u),((yt&2)===0||n!==tn)&&(n===tn&&((yt&2)===0&&(Oa|=o),Zt===4&&ur(n,ln)),Ln(n,u),o===1&&yt===0&&(i.mode&1)===0&&(Ss=W()+500,ga&&nr()))}function Ln(n,i){var o=n.callbackNode;wr(n,i);var u=Jn(n,n===tn?ln:0);if(u===0)o!==null&&j(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&j(o),i===1)n.tag===0?Sv(hp.bind(null,n)):Jd(hp.bind(null,n)),vv(function(){(yt&6)===0&&nr()}),o=null;else{switch(sd(u)){case 1:o=Re;break;case 4:o=De;break;case 16:o=Oe;break;case 536870912:o=nt;break;default:o=Oe}o=Sp(o,dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function dp(n,i){if(Va=-1,Ha=0,(yt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Es()&&n.callbackNode!==o)return null;var u=Jn(n,n===tn?ln:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ga(n,u);else{i=u;var d=yt;yt|=2;var p=mp();(tn!==n||ln!==i)&&(Li=null,Ss=W()+500,Fr(n,i));do try{Hv();break}catch(N){pp(n,N)}while(!0);vu(),Fa.current=p,yt=d,qt!==null?i=0:(tn=null,ln=0,i=Zt)}if(i!==0){if(i===2&&(d=Pt(n),d!==0&&(u=d,i=ec(n,d))),i===1)throw o=wo,Fr(n,0),ur(n,u),Ln(n,W()),o;if(i===6)ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!Bv(d)&&(i=Ga(n,u),i===2&&(p=Pt(n),p!==0&&(u=p,i=ec(n,p))),i===1))throw o=wo,Fr(n,0),ur(n,u),Ln(n,W()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Or(n,bn,Li);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=Zu+500-W(),10<i)){if(Jn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ou(Or.bind(null,n,bn,Li),i);break}Or(n,bn,Li);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Mt(u);p=1<<E,E=i[E],E>d&&(d=E),u&=~p}if(u=d,u=W()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*zv(u/1960))-u,10<u){n.timeoutHandle=ou(Or.bind(null,n,bn,Li),u);break}Or(n,bn,Li);break;case 5:Or(n,bn,Li);break;default:throw Error(t(329))}}}return Ln(n,W()),n.callbackNode===o?dp.bind(null,n):null}function ec(n,i){var o=Ao;return n.current.memoizedState.isDehydrated&&(Fr(n,i).flags|=256),n=Ga(n,i),n!==2&&(i=bn,bn=o,i!==null&&tc(i)),n}function tc(n){bn===null?bn=n:bn.push.apply(bn,n)}function Bv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Qn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~Ku,i&=~Oa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Mt(i),u=1<<o;n[o]=-1,i&=~u}}function hp(n){if((yt&6)!==0)throw Error(t(327));Es();var i=Jn(n,0);if((i&1)===0)return Ln(n,W()),null;var o=Ga(n,i);if(n.tag!==0&&o===2){var u=Pt(n);u!==0&&(i=u,o=ec(n,u))}if(o===1)throw o=wo,Fr(n,0),ur(n,i),Ln(n,W()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Or(n,bn,Li),Ln(n,W()),null}function nc(n,i){var o=yt;yt|=1;try{return n(i)}finally{yt=o,yt===0&&(Ss=W()+500,ga&&nr())}}function Ur(n){ar!==null&&ar.tag===0&&(yt&6)===0&&Es();var i=yt;yt|=1;var o=jn.transition,u=mt;try{if(jn.transition=null,mt=1,n)return n()}finally{mt=u,jn.transition=o,yt=i,(yt&6)===0&&nr()}}function ic(){zn=ys.current,Ft(ys)}function Fr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,gv(o)),qt!==null)for(o=qt.return;o!==null;){var u=o;switch(du(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&pa();break;case 3:vs(),Ft(Cn),Ft(dn),wu();break;case 5:Mu(u);break;case 4:vs();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:_u(u.type._context);break;case 22:case 23:ic()}o=o.return}if(tn=n,qt=n=cr(n.current,null),ln=zn=i,Zt=0,wo=null,Ku=Oa=Ir=0,bn=Ao=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var E=p.next;p.next=d,u.next=E}o.pending=u}Lr=null}return n}function pp(n,i){do{var o=qt;try{if(vu(),Aa.current=ba,Ca){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ca=!1}if(Dr=0,en=Kt=Vt=null,xo=!1,yo=0,$u.current=null,o===null||o.return===null){Zt=1,wo=i,qt=null;break}e:{var p=n,E=o.return,N=o,k=i;if(i=ln,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,_e=N,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=zh(E);if(Ne!==null){Ne.flags&=-257,Bh(Ne,E,N,p,i),Ne.mode&1&&kh(p,te,i),i=Ne,k=te;var Ve=i.updateQueue;if(Ve===null){var He=new Set;He.add(k),i.updateQueue=He}else Ve.add(k);break e}else{if((i&1)===0){kh(p,te,i),rc();break e}k=Error(t(426))}}else if(kt&&N.mode&1){var Yt=zh(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Bh(Yt,E,N,p,i),mu(_s(k,N));break e}}p=k=_s(k,N),Zt!==4&&(Zt=2),Ao===null?Ao=[p]:Ao.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=Fh(p,k,i);uh(p,$);break e;case 1:N=k;var X=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(or===null||!or.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Oh(p,N,i);uh(p,Te);break e}}p=p.return}while(p!==null)}vp(o)}catch(Xe){i=Xe,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function mp(){var n=Fa.current;return Fa.current=ba,n===null?ba:n}function rc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),tn===null||(Ir&268435455)===0&&(Oa&268435455)===0||ur(tn,ln)}function Ga(n,i){var o=yt;yt|=2;var u=mp();(tn!==n||ln!==i)&&(Li=null,Fr(n,i));do try{Vv();break}catch(d){pp(n,d)}while(!0);if(vu(),yt=o,Fa.current=u,qt!==null)throw Error(t(261));return tn=null,ln=0,Zt}function Vv(){for(;qt!==null;)gp(qt)}function Hv(){for(;qt!==null&&!ne();)gp(qt)}function gp(n){var i=yp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?vp(n):qt=i,$u.current=null}function vp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Iv(o,i,zn),o!==null){qt=o;return}}else{if(o=Uv(o,i),o!==null){o.flags&=32767,qt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Or(n,i,o){var u=mt,d=jn.transition;try{jn.transition=null,mt=1,Gv(n,i,o,u)}finally{jn.transition=d,mt=u}return null}function Gv(n,i,o,u){do Es();while(ar!==null);if((yt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(fn(n,p),n===tn&&(qt=tn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,Sp(Oe,function(){return Es(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=jn.transition,jn.transition=null;var E=mt;mt=1;var N=yt;yt|=4,$u.current=null,Ov(n,o),ap(o,n),uv(ru),ea=!!iu,ru=iu=null,n.current=o,kv(o),ie(),yt=N,mt=E,jn.transition=p}else n.current=o;if(za&&(za=!1,ar=n,Ba=d),p=n.pendingLanes,p===0&&(or=null),Et(o.stateNode),Ln(n,W()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(ka)throw ka=!1,n=Ju,Ju=null,n;return(Ba&1)!==0&&n.tag!==0&&Es(),p=n.pendingLanes,(p&1)!==0?n===Qu?Co++:(Co=0,Qu=n):Co=0,nr(),null}function Es(){if(ar!==null){var n=sd(Ba),i=jn.transition,o=mt;try{if(jn.transition=null,mt=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,Ba=0,(yt&6)!==0)throw Error(t(331));var d=yt;for(yt|=4,ke=n.current;ke!==null;){var p=ke,E=p.child;if((ke.flags&16)!==0){var N=p.deletions;if(N!==null){for(var k=0;k<N.length;k++){var te=N[k];for(ke=te;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:To(8,_e,p)}var ye=_e.child;if(ye!==null)ye.return=_e,ke=ye;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ne=_e.return;if(np(_e),_e===te){ke=null;break}if(ge!==null){ge.return=Ne,ke=ge;break}ke=Ne}}}var Ve=p.alternate;if(Ve!==null){var He=Ve.child;if(He!==null){Ve.child=null;do{var Yt=He.sibling;He.sibling=null,He=Yt}while(He!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,ke=E;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:To(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,ke=$;break e}ke=p.return}}var X=n.current;for(ke=X;ke!==null;){E=ke;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,ke=K;else e:for(E=X;ke!==null;){if(N=ke,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ua(9,N)}}catch(Xe){Gt(N,N.return,Xe)}if(N===E){ke=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,ke=Te;break e}ke=N.return}}if(yt=d,nr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qe,n)}catch{}u=!0}return u}finally{mt=o,jn.transition=i}}return!1}function _p(n,i,o){i=_s(o,i),i=Fh(n,i,1),n=rr(n,i,1),i=Mn(),n!==null&&(Xt(n,1,i),Ln(n,i))}function Gt(n,i,o){if(n.tag===3)_p(n,n,o);else for(;i!==null;){if(i.tag===3){_p(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=_s(o,n),n=Oh(i,n,1),i=rr(i,n,1),n=Mn(),i!==null&&(Xt(i,1,n),Ln(i,n));break}}i=i.return}}function Wv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,tn===n&&(ln&o)===o&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>W()-Zu?Fr(n,0):Ku|=o),Ln(n,i)}function xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var o=Mn();n=Ri(n,i),n!==null&&(Xt(n,i,o),Ln(n,o))}function Xv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),xp(n,o)}function Yv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),xp(n,o)}var yp;yp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,Dv(n,i,o);Pn=(n.flags&131072)!==0}else Pn=!1,kt&&(i.flags&1048576)!==0&&Qd(i,_a,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Da(n,i),n=i.pendingProps;var d=cs(i,dn.current);gs(i,o),d=Ru(null,i,u,n,d,o);var p=Pu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(p=!0,ma(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Su(i),d.updater=La,i.stateNode=d,d._reactInternals=i,Uu(i,u,n,o),i=zu(null,i,u,!0,p,o)):(i.tag=0,kt&&p&&fu(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Da(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=jv(u),n=ti(u,n),d){case 0:i=ku(null,i,u,n,o);break e;case 1:i=Yh(null,i,u,n,o);break e;case 11:i=Vh(null,i,u,n,o);break e;case 14:i=Hh(null,i,u,ti(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),ku(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Yh(n,i,u,d,o);case 3:e:{if(qh(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,lh(n,i),Ta(i,u,null,o);var E=i.memoizedState;if(u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=_s(Error(t(423)),i),i=jh(n,i,u,o,d);break e}else if(u!==d){d=_s(Error(t(424)),i),i=jh(n,i,u,o,d);break e}else for(kn=Qi(i.stateNode.containerInfo.firstChild),On=i,kt=!0,ei=null,o=oh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),u===d){i=bi(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return fh(i),n===null&&pu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,E=d.children,su(u,d)?E=null:p!==null&&su(u,p)&&(i.flags|=32),Xh(n,i),En(n,i,E,o),i.child;case 6:return n===null&&pu(i),null;case 13:return $h(n,i,o);case 4:return Eu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ps(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Vh(n,i,u,d,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,E=d.value,Dt(Sa,u._currentValue),u._currentValue=E,p!==null)if(Qn(p.value,E)){if(p.children===d.children&&!Cn.current){i=bi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){E=p.child;for(var k=N.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=Pi(-1,o&-o),k.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),te.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),xu(p.return,o,i),N.lanes|=o;break}k=k.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(t(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),xu(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}En(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,gs(i,o),d=Yn(d),u=u(d),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,d=ti(u,i.pendingProps),d=ti(u.type,d),Hh(n,i,u,d,o);case 15:return Gh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Da(n,i),i.tag=1,Rn(u)?(n=!0,ma(i)):n=!1,gs(i,o),Ih(i,u,d),Uu(i,u,d,o),zu(null,i,u,!0,n,o);case 19:return Zh(n,i,o);case 22:return Wh(n,i,o)}throw Error(t(156,i.tag))};function Sp(n,i){return R(n,i)}function qv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,o,u){return new qv(n,i,o,u)}function sc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jv(n){if(typeof n=="function")return sc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===fe)return 14}return 2}function cr(n,i){var o=n.alternate;return o===null?(o=$n(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Wa(n,i,o,u,d,p){var E=2;if(u=n,typeof n=="function")sc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return kr(o.children,d,p,i);case G:E=8,d|=8;break;case T:return n=$n(12,o,i,d|2),n.elementType=T,n.lanes=p,n;case J:return n=$n(13,o,i,d),n.elementType=J,n.lanes=p,n;case le:return n=$n(19,o,i,d),n.elementType=le,n.lanes=p,n;case ce:return Xa(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case z:E=9;break e;case Z:E=11;break e;case fe:E=14;break e;case ae:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(E,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function kr(n,i,o,u){return n=$n(7,n,u,i),n.lanes=o,n}function Xa(n,i,o,u){return n=$n(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function oc(n,i,o){return n=$n(6,n,null,i),n.lanes=o,n}function ac(n,i,o){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $v(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function lc(n,i,o,u,d,p,E,N,k){return n=new $v(n,i,o,N,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=$n(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(p),n}function Kv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Ep(n){if(!n)return tr;n=n._reactInternals;e:{if(di(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return Kd(n,o,i)}return i}function Mp(n,i,o,u,d,p,E,N,k){return n=lc(o,u,!0,n,d,p,E,N,k),n.context=Ep(null),o=n.current,u=Mn(),d=lr(o),p=Pi(u,d),p.callback=i??null,rr(o,p,d),n.current.lanes=d,Xt(n,d,u),Ln(n,u),n}function Ya(n,i,o,u){var d=i.current,p=Mn(),E=lr(d);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,E),n!==null&&(ri(n,d,E,p),Ma(n,d,E)),E}function qa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function uc(n,i){Tp(n,i),(n=n.alternate)&&Tp(n,i)}function Zv(){return null}var wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function cc(n){this._internalRoot=n}ja.prototype.render=cc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ya(n,i,null,null)},ja.prototype.unmount=cc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ur(function(){Ya(null,n,null,null)}),i[Ti]=null}};function ja(n){this._internalRoot=n}ja.prototype.unstable_scheduleHydration=function(n){if(n){var i=ld();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,n),o===0&&fd(n)}};function fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function Jv(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var te=qa(E);p.call(te)}}var E=Mp(i,u,n,0,null,!1,!1,"",Ap);return n._reactRootContainer=E,n[Ti]=E.current,co(n.nodeType===8?n.parentNode:n),Ur(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var te=qa(k);N.call(te)}}var k=lc(n,0,!1,null,null,!1,!1,"",Ap);return n._reactRootContainer=k,n[Ti]=k.current,co(n.nodeType===8?n.parentNode:n),Ur(function(){Ya(i,k,o,u)}),k}function Ka(n,i,o,u,d){var p=o._reactRootContainer;if(p){var E=p;if(typeof d=="function"){var N=d;d=function(){var k=qa(E);N.call(k)}}Ya(i,E,n,d)}else E=Jv(o,i,n,d,u);return qa(E)}od=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=on(i.pendingLanes);o!==0&&(Ar(i,o|1),Ln(i,W()),(yt&6)===0&&(Ss=W()+500,nr()))}break;case 13:Ur(function(){var u=Ri(n,1);if(u!==null){var d=Mn();ri(u,n,1,d)}}),uc(n,1)}},Fl=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var o=Mn();ri(i,n,134217728,o)}uc(n,134217728)}},ad=function(n){if(n.tag===13){var i=lr(n),o=Ri(n,i);if(o!==null){var u=Mn();ri(o,n,i,u)}uc(n,i)}},ld=function(){return mt},ud=function(n,i){var o=mt;try{return mt=n,i()}finally{mt=o}},Ce=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=ha(u);if(!d)throw Error(t(90));gt(u),ct(u,d)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},It=nc,$t=Ur;var Qv={usingClientEntryPoint:!1,Events:[po,ls,ha,be,st,nc]},Ro={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e_={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ko(n),n===null?null:n.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{qe=Za.inject(e_),ot=Za}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,Nn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(i))throw Error(t(200));return Kv(n,i,null,o)},Nn.createRoot=function(n,i){if(!fc(n))throw Error(t(299));var o=!1,u="",d=wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=lc(n,1,!1,null,null,o,!1,u,d),n[Ti]=i.current,co(n.nodeType===8?n.parentNode:n),new cc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ko(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Ur(n)},Nn.hydrate=function(n,i,o){if(!$a(i))throw Error(t(200));return Ka(null,n,i,!0,o)},Nn.hydrateRoot=function(n,i,o){if(!fc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",E=wp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Mp(i,null,n,1,o??null,d,!1,p,E),n[Ti]=i.current,co(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ja(i)},Nn.render=function(n,i,o){if(!$a(i))throw Error(t(200));return Ka(null,n,i,!1,o)},Nn.unmountComponentAtNode=function(n){if(!$a(n))throw Error(t(40));return n._reactRootContainer?(Ur(function(){Ka(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1},Nn.unstable_batchedUpdates=nc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!$a(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ka(n,i,o,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Np;function a_(){if(Np)return hc.exports;Np=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hc.exports=o_(),hc.exports}var Dp;function l_(){if(Dp)return Ja;Dp=1;var s=a_();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var u_=l_();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),km=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=sn.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...f},h)=>sn.createElement("svg",{ref:h,...f_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:km("lucide",a),...f},[...c.map(([m,v])=>sn.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=(s,e)=>{const t=sn.forwardRef(({className:r,...a},l)=>sn.createElement(d_,{ref:l,iconNode:e,className:km(`lucide-${c_(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=fi("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=fi("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=fi("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=fi("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=fi("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=fi("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=fi("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=fi("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=fi("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=fi("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=fi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="171",__=0,Op=1,x_=2,zm=1,Bm=2,zi=3,Sr=0,In=1,Bi=2,xr=0,zs=1,kp=2,zp=3,Bp=4,y_=5,qr=100,S_=101,E_=102,M_=103,T_=104,w_=200,A_=201,C_=202,R_=203,Qc=204,ef=205,P_=206,b_=207,L_=208,N_=209,D_=210,I_=211,U_=212,F_=213,O_=214,tf=0,nf=1,rf=2,Hs=3,sf=4,of=5,af=6,lf=7,Vm=0,k_=1,z_=2,yr=0,B_=1,V_=2,H_=3,G_=4,W_=5,X_=6,Y_=7,Hm=300,Gs=301,Ws=302,uf=303,cf=304,Nl=306,ff=1e3,$r=1001,df=1002,ci=1003,q_=1004,Qa=1005,_i=1006,_c=1007,Kr=1008,Wi=1009,Gm=1010,Wm=1011,zo=1012,Hf=1013,Zr=1014,Vi=1015,Bo=1016,Gf=1017,Wf=1018,Xs=1020,Xm=35902,Ym=1021,qm=1022,ui=1023,jm=1024,$m=1025,Bs=1026,Ys=1027,Km=1028,Xf=1029,Zm=1030,Yf=1031,qf=1033,El=33776,Ml=33777,Tl=33778,wl=33779,hf=35840,pf=35841,mf=35842,gf=35843,vf=36196,_f=37492,xf=37496,yf=37808,Sf=37809,Ef=37810,Mf=37811,Tf=37812,wf=37813,Af=37814,Cf=37815,Rf=37816,Pf=37817,bf=37818,Lf=37819,Nf=37820,Df=37821,Al=36492,If=36494,Uf=36495,Jm=36283,Ff=36284,Of=36285,kf=36286,j_=3200,$_=3201,Qm=0,K_=1,_r="",Hn="srgb",qs="srgb-linear",Rl="linear",bt="srgb",Ms=7680,Vp=519,Z_=512,J_=513,Q_=514,eg=515,e0=516,t0=517,n0=518,i0=519,Hp=35044,Gp="300 es",Hi=2e3,Pl=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,zf=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function r0(s,e){return(s%e+e)%e}function yc(s,e,t){return(1-t)*s+t*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,r,a,l,c,f,h,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,m)}set(e,t,r,a,l,c,f,h,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],m=r[1],v=r[4],_=r[7],x=r[2],y=r[5],M=r[8],A=a[0],S=a[3],g=a[6],D=a[1],L=a[4],P=a[7],H=a[2],U=a[5],O=a[8];return l[0]=c*A+f*D+h*H,l[3]=c*S+f*L+h*U,l[6]=c*g+f*P+h*O,l[1]=m*A+v*D+_*H,l[4]=m*S+v*L+_*U,l[7]=m*g+v*P+_*O,l[2]=x*A+y*D+M*H,l[5]=x*S+y*L+M*U,l[8]=x*g+y*P+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],v=e[8];return t*c*v-t*f*m-r*l*v+r*f*h+a*l*m-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],v=e[8],_=v*c-f*m,x=f*h-v*l,y=m*l-c*h,M=t*_+r*x+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(a*m-v*r)*A,e[2]=(f*r-a*c)*A,e[3]=x*A,e[4]=(v*t-a*h)*A,e[5]=(a*l-f*t)*A,e[6]=y*A,e[7]=(r*h-m*t)*A,e[8]=(c*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*f)+c+e,-a*m,a*h,-a*(-m*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new at;function tg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s0(){const s=bl("canvas");return s.style.display="block",s}const Wp={};function Os(s){s in Wp||(Wp[s]=!0,console.warn(s))}function o0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function a0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function l0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){const s={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Rl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[qs]:{primaries:e,whitePoint:r,transfer:Rl,toXYZ:Xp,fromXYZ:Yp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:Xp,fromXYZ:Yp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),s}const wt=u0();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class c0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=bl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Gi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Gi(t[r]/255)*255):t[r]=Gi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f0=0;class ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Ec(a[c].image)):l.push(Ec(a[c]))}else l=Ec(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d0=0;class Un extends $s{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=$r,a=$r,l=_i,c=Kr,f=ui,h=Wi,m=Un.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Vo(),this.name="",this.source=new ng(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Hm;Un.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,m=h[0],v=h[4],_=h[8],x=h[1],y=h[5],M=h[9],A=h[2],S=h[6],g=h[10];if(Math.abs(v-x)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,P=(y+1)/2,H=(g+1)/2,U=(v+x)/4,O=(_+A)/4,G=(M+S)/4;return L>P&&L>H?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=U/r,l=O/r):P>H?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=U/a,l=G/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=O/l,a=G/l),this.set(r,a,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(_-A)/D,this.z=(x-v)/D,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends $s{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ng(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends h0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ig extends Un{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p0 extends Un{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];const x=l[c+0],y=l[c+1],M=l[c+2],A=l[c+3];if(f===0){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=A;return}if(_!==A||h!==x||m!==y||v!==M){let S=1-f;const g=h*x+m*y+v*M+_*A,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const H=Math.sqrt(L),U=Math.atan2(H,g*D);S=Math.sin(S*U)/H,f=Math.sin(f*U)/H}const P=f*D;if(h=h*S+x*P,m=m*S+y*P,v=v*S+M*P,_=_*S+A*P,S===1-f){const H=1/Math.sqrt(h*h+m*m+v*v+_*_);h*=H,m*=H,v*=H,_*=H}}e[t]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],m=r[a+2],v=r[a+3],_=l[c],x=l[c+1],y=l[c+2],M=l[c+3];return e[t]=f*M+v*_+h*y-m*x,e[t+1]=h*M+v*x+m*_-f*y,e[t+2]=m*M+v*y+f*x-h*_,e[t+3]=v*M-f*_-h*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(r/2),v=f(a/2),_=f(l/2),x=h(r/2),y=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=x*v*_+m*y*M,this._y=m*y*_-x*v*M,this._z=m*v*M+x*y*_,this._w=m*v*_-x*y*M;break;case"YXZ":this._x=x*v*_+m*y*M,this._y=m*y*_-x*v*M,this._z=m*v*M-x*y*_,this._w=m*v*_+x*y*M;break;case"ZXY":this._x=x*v*_-m*y*M,this._y=m*y*_+x*v*M,this._z=m*v*M+x*y*_,this._w=m*v*_-x*y*M;break;case"ZYX":this._x=x*v*_-m*y*M,this._y=m*y*_+x*v*M,this._z=m*v*M-x*y*_,this._w=m*v*_+x*y*M;break;case"YZX":this._x=x*v*_+m*y*M,this._y=m*y*_+x*v*M,this._z=m*v*M-x*y*_,this._w=m*v*_-x*y*M;break;case"XZY":this._x=x*v*_-m*y*M,this._y=m*y*_-x*v*M,this._z=m*v*M+x*y*_,this._w=m*v*_+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],v=t[6],_=t[10],x=r+f+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-m)*y,this._z=(c-a)*y}else if(r>f&&r>_){const y=2*Math.sqrt(1+r-f-_);this._w=(v-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+m)/y}else if(f>_){const y=2*Math.sqrt(1+f-r-_);this._w=(l-m)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+_-r-f);this._w=(c-a)/y,this._x=(l+m)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,m=t._z,v=t._w;return this._x=r*v+c*f+a*m-l*h,this._y=a*v+c*h+l*f-r*m,this._z=l*v+c*m+r*h-a*f,this._w=c*v-r*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*r+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),v=Math.atan2(m,f),_=Math.sin((1-t)*v)/m,x=Math.sin(t*v)/m;return this._w=c*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*a-f*r),v=2*(f*t-l*a),_=2*(l*r-c*t);return this.x=t+h*m+c*_-f*v,this.y=r+h*v+f*m-l*_,this.z=a+h*_+l*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new Y,qp=new Ho;class Go{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(l,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),tl.subVectors(this.max,bo),ws.subVectors(e.a,bo),As.subVectors(e.b,bo),Cs.subVectors(e.c,bo),dr.subVectors(As,ws),hr.subVectors(Cs,As),zr.subVectors(ws,Cs);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!Tc(t,ws,As,Cs,tl)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,ws,As,Cs,tl))?!1:(nl.crossVectors(dr,hr),t=[nl.x,nl.y,nl.z],Tc(t,ws,As,Cs,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],si=new Y,el=new Go,ws=new Y,As=new Y,Cs=new Y,dr=new Y,hr=new Y,zr=new Y,bo=new Y,tl=new Y,nl=new Y,Br=new Y;function Tc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Br.fromArray(s,l);const f=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),h=e.dot(Br),m=t.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>f)return!1}return!0}const m0=new Go,Lo=new Y,wc=new Y;class jf{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):m0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const t=Lo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Lo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(wc)),this.expandByPoint(Lo.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Y,Ac=new Y,il=new Y,pr=new Y,Cc=new Y,rl=new Y,Rc=new Y;class g0{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ac.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Ac);const l=e.distanceTo(t)*.5,c=-this.direction.dot(il),f=pr.dot(this.direction),h=-pr.dot(il),m=pr.lengthSq(),v=Math.abs(1-c*c);let _,x,y,M;if(v>0)if(_=c*h-f,x=c*f-h,M=l*v,_>=0)if(x>=-M)if(x<=M){const A=1/v;_*=A,x*=A,y=_*(_+c*x+2*f)+x*(c*_+x+2*h)+m}else x=l,_=Math.max(0,-(c*x+f)),y=-_*_+x*(x+2*h)+m;else x=-l,_=Math.max(0,-(c*x+f)),y=-_*_+x*(x+2*h)+m;else x<=-M?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+m):x<=M?(_=0,x=Math.min(Math.max(-l,-h),l),y=x*(x+2*h)+m):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+x*(x+2*h)+m);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),y=-_*_+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Ac).addScaledVector(il,x),y}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(l=(e.min.y-x.y)*v,c=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,c=(e.min.y-x.y)*v),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,r,a,l){Cc.subVectors(t,e),rl.subVectors(r,e),Rc.crossVectors(Cc,rl);let c=this.direction.dot(Rc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(rl.crossVectors(pr,rl));if(h<0)return null;const m=f*this.direction.dot(Cc.cross(pr));if(m<0||h+m>c)return null;const v=-f*pr.dot(Rc);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,a,l,c,f,h,m,v,_,x,y,M,A,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,m,v,_,x,y,M,A,S)}set(e,t,r,a,l,c,f,h,m,v,_,x,y,M,A,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=f,g[13]=h,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=y,g[7]=M,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),l=1/Rs.setFromMatrixColumn(e,1).length(),c=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*v,y=c*_,M=f*v,A=f*_;t[0]=h*v,t[4]=-h*_,t[8]=m,t[1]=y+M*m,t[5]=x-A*m,t[9]=-f*h,t[2]=A-x*m,t[6]=M+y*m,t[10]=c*h}else if(e.order==="YXZ"){const x=h*v,y=h*_,M=m*v,A=m*_;t[0]=x+A*f,t[4]=M*f-y,t[8]=c*m,t[1]=c*_,t[5]=c*v,t[9]=-f,t[2]=y*f-M,t[6]=A+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*v,y=h*_,M=m*v,A=m*_;t[0]=x-A*f,t[4]=-c*_,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*v,t[9]=A-x*f,t[2]=-c*m,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*v,y=c*_,M=f*v,A=f*_;t[0]=h*v,t[4]=M*m-y,t[8]=x*m+A,t[1]=h*_,t[5]=A*m+x,t[9]=y*m-M,t[2]=-m,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*m,M=f*h,A=f*m;t[0]=h*v,t[4]=A-x*_,t[8]=M*_+y,t[1]=_,t[5]=c*v,t[9]=-f*v,t[2]=-m*v,t[6]=y*_+M,t[10]=x-A*_}else if(e.order==="XZY"){const x=c*h,y=c*m,M=f*h,A=f*m;t[0]=h*v,t[4]=-_,t[8]=m*v,t[1]=x*_+A,t[5]=c*v,t[9]=y*_-M,t[2]=M*_-y,t[6]=f*v,t[10]=A*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,_0)}lookAt(e,t,r){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),mr.crossVectors(r,Bn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),mr.crossVectors(r,Bn)),mr.normalize(),sl.crossVectors(Bn,mr),a[0]=mr.x,a[4]=sl.x,a[8]=Bn.x,a[1]=mr.y,a[5]=sl.y,a[9]=Bn.y,a[2]=mr.z,a[6]=sl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],m=r[12],v=r[1],_=r[5],x=r[9],y=r[13],M=r[2],A=r[6],S=r[10],g=r[14],D=r[3],L=r[7],P=r[11],H=r[15],U=a[0],O=a[4],G=a[8],T=a[12],C=a[1],z=a[5],Z=a[9],J=a[13],le=a[2],fe=a[6],ae=a[10],ce=a[14],V=a[3],ue=a[7],oe=a[11],F=a[15];return l[0]=c*U+f*C+h*le+m*V,l[4]=c*O+f*z+h*fe+m*ue,l[8]=c*G+f*Z+h*ae+m*oe,l[12]=c*T+f*J+h*ce+m*F,l[1]=v*U+_*C+x*le+y*V,l[5]=v*O+_*z+x*fe+y*ue,l[9]=v*G+_*Z+x*ae+y*oe,l[13]=v*T+_*J+x*ce+y*F,l[2]=M*U+A*C+S*le+g*V,l[6]=M*O+A*z+S*fe+g*ue,l[10]=M*G+A*Z+S*ae+g*oe,l[14]=M*T+A*J+S*ce+g*F,l[3]=D*U+L*C+P*le+H*V,l[7]=D*O+L*z+P*fe+H*ue,l[11]=D*G+L*Z+P*ae+H*oe,l[15]=D*T+L*J+P*ce+H*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],v=e[2],_=e[6],x=e[10],y=e[14],M=e[3],A=e[7],S=e[11],g=e[15];return M*(+l*h*_-a*m*_-l*f*x+r*m*x+a*f*y-r*h*y)+A*(+t*h*y-t*m*x+l*c*x-a*c*y+a*m*v-l*h*v)+S*(+t*m*_-t*f*y-l*c*_+r*c*y+l*f*v-r*m*v)+g*(-a*f*v-t*h*_+t*f*x+a*c*_-r*c*x+r*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],v=e[8],_=e[9],x=e[10],y=e[11],M=e[12],A=e[13],S=e[14],g=e[15],D=_*S*m-A*x*m+A*h*y-f*S*y-_*h*g+f*x*g,L=M*x*m-v*S*m-M*h*y+c*S*y+v*h*g-c*x*g,P=v*A*m-M*_*m+M*f*y-c*A*y-v*f*g+c*_*g,H=M*_*h-v*A*h-M*f*x+c*A*x+v*f*S-c*_*S,U=t*D+r*L+a*P+l*H;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return e[0]=D*O,e[1]=(A*x*l-_*S*l-A*a*y+r*S*y+_*a*g-r*x*g)*O,e[2]=(f*S*l-A*h*l+A*a*m-r*S*m-f*a*g+r*h*g)*O,e[3]=(_*h*l-f*x*l-_*a*m+r*x*m+f*a*y-r*h*y)*O,e[4]=L*O,e[5]=(v*S*l-M*x*l+M*a*y-t*S*y-v*a*g+t*x*g)*O,e[6]=(M*h*l-c*S*l-M*a*m+t*S*m+c*a*g-t*h*g)*O,e[7]=(c*x*l-v*h*l+v*a*m-t*x*m-c*a*y+t*h*y)*O,e[8]=P*O,e[9]=(M*_*l-v*A*l-M*r*y+t*A*y+v*r*g-t*_*g)*O,e[10]=(c*A*l-M*f*l+M*r*m-t*A*m-c*r*g+t*f*g)*O,e[11]=(v*f*l-c*_*l-v*r*m+t*_*m+c*r*y-t*f*y)*O,e[12]=H*O,e[13]=(v*A*a-M*_*a+M*r*x-t*A*x-v*r*S+t*_*S)*O,e[14]=(M*f*a-c*A*a-M*r*h+t*A*h+c*r*S-t*f*S)*O,e[15]=(c*_*a-v*f*a+v*r*h-t*_*h-c*r*x+t*f*x)*O,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,m=l*c,v=l*f;return this.set(m*c+r,m*f-a*h,m*h+a*f,0,m*f+a*h,v*f+r,v*h-a*c,0,m*h-a*f,v*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,m=l+l,v=c+c,_=f+f,x=l*m,y=l*v,M=l*_,A=c*v,S=c*_,g=f*_,D=h*m,L=h*v,P=h*_,H=r.x,U=r.y,O=r.z;return a[0]=(1-(A+g))*H,a[1]=(y+P)*H,a[2]=(M-L)*H,a[3]=0,a[4]=(y-P)*U,a[5]=(1-(x+g))*U,a[6]=(S+D)*U,a[7]=0,a[8]=(M+L)*O,a[9]=(S-D)*O,a[10]=(1-(x+A))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Rs.set(a[0],a[1],a[2]).length();const c=Rs.set(a[4],a[5],a[6]).length(),f=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/l,v=1/c,_=1/f;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,t.setFromRotationMatrix(oi),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=Hi){const h=this.elements,m=2*l/(t-e),v=2*l/(r-a),_=(t+e)/(t-e),x=(r+a)/(r-a);let y,M;if(f===Hi)y=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Pl)y=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=Hi){const h=this.elements,m=1/(t-e),v=1/(r-a),_=1/(c-l),x=(t+e)*m,y=(r+a)*v;let M,A;if(f===Hi)M=(c+l)*_,A=-2*_;else if(f===Pl)M=l*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=A,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Rs=new Y,oi=new zt,v0=new Y(0,0,0),_0=new Y(1,1,1),mr=new Y,sl=new Y,Bn=new Y,jp=new zt,$p=new Ho;class yi{constructor(e=0,t=0,r=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],m=a[5],v=a[9],_=a[2],x=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-ht(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x0=0;const Kp=new Y,Ps=new Ho,Ui=new zt,ol=new Y,No=new Y,y0=new Y,S0=new Ho,Zp=new Y(1,0,0),Jp=new Y(0,1,0),Qp=new Y(0,0,1),em={type:"added"},E0={type:"removed"},bs={type:"childadded",child:null},Pc={type:"childremoved",child:null};class un extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Y,t=new yi,r=new Ho,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new at}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,t){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ol.copy(e):ol.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(No,ol,this.up):Ui.lookAt(ol,No,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),m=c(e.textures),v=c(e.images),_=c(e.shapes),x=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=a,r;function c(f){const h=[];for(const m in f){const v=f[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}un.DEFAULT_UP=new Y(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Y,Fi=new Y,bc=new Y,Oi=new Y,Ls=new Y,Ns=new Y,tm=new Y,Lc=new Y,Nc=new Y,Dc=new Y,Ic=new Lt,Uc=new Lt,Fc=new Lt;class li{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ai.subVectors(e,t),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ai.subVectors(a,t),Fi.subVectors(r,t),bc.subVectors(e,t);const c=ai.dot(ai),f=ai.dot(Fi),h=ai.dot(bc),m=Fi.dot(Fi),v=Fi.dot(bc),_=c*m-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,y=(m*h-f*v)*x,M=(c*v-f*h)*x;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return Ic.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Ic.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,r),Fc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Ic,l.x),c.addScaledVector(Uc,l.y),c.addScaledVector(Fc,l.z),c}static isFrontFacing(e,t,r,a){return ai.subVectors(r,t),Fi.subVectors(e,t),ai.cross(Fi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return li.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Ls.subVectors(a,r),Ns.subVectors(l,r),Lc.subVectors(e,r);const h=Ls.dot(Lc),m=Ns.dot(Lc);if(h<=0&&m<=0)return t.copy(r);Nc.subVectors(e,a);const v=Ls.dot(Nc),_=Ns.dot(Nc);if(v>=0&&_<=v)return t.copy(a);const x=h*_-v*m;if(x<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(Ls,c);Dc.subVectors(e,l);const y=Ls.dot(Dc),M=Ns.dot(Dc);if(M>=0&&y<=M)return t.copy(l);const A=y*m-h*M;if(A<=0&&m>=0&&M<=0)return f=m/(m-M),t.copy(r).addScaledVector(Ns,f);const S=v*M-y*_;if(S<=0&&_-v>=0&&y-M>=0)return tm.subVectors(l,a),f=(_-v)/(_-v+(y-M)),t.copy(a).addScaledVector(tm,f);const g=1/(S+A+x);return c=A*g,f=x*g,t.copy(r).addScaledVector(Ls,c).addScaledVector(Ns,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Oc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=wt.workingColorSpace){if(e=r0(e,1),t=ht(t,0,1),r=ht(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Oc(c,l,e+1/3),this.g=Oc(c,l,e),this.b=Oc(c,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=Hn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const r=sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return wt.fromWorkingColorSpace(vn.copy(this),e),Math.round(ht(vn.r*255,0,255))*65536+Math.round(ht(vn.g*255,0,255))*256+Math.round(ht(vn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(vn.copy(this),t);const r=vn.r,a=vn.g,l=vn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,m;const v=(f+c)/2;if(f===c)h=0,m=0;else{const _=c-f;switch(m=v<=.5?_/(c+f):_/(2-c-f),c){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Hn){wt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,r=vn.g,a=vn.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(al);const r=yc(gr.h,al.h,t),a=yc(gr.s,al.s,t),l=yc(gr.l,al.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new St;St.NAMES=sg;let M0=0;class Wo extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=zs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=ef,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qc&&(r.blendSrc=this.blendSrc),this.blendDst!==ef&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class og extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Y,ll=new Ge;class xi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),r=Dn(r,this.array),a=Dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),r=Dn(r,this.array),a=Dn(a,this.array),l=Dn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class ag extends xi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class lg extends xi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wt extends xi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let T0=0;const Kn=new zt,kc=new un,Ds=new Y,Vn=new Go,Do=new Go,rn=new Y;class Zn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?lg:ag)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new at().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,r){return Kn.makeTranslation(e,t,r),this.applyMatrix4(Kn),this}scale(e,t,r){return Kn.makeScale(e,t,r),this.applyMatrix4(Kn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Do.setFromBufferAttribute(f),this.morphTargetsRelative?(rn.addVectors(Vn.min,Do.min),Vn.expandByPoint(rn),rn.addVectors(Vn.max,Do.max),Vn.expandByPoint(rn)):(Vn.expandByPoint(Do.min),Vn.expandByPoint(Do.max))}Vn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)rn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(rn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)rn.fromBufferAttribute(f,m),h&&(Ds.fromBufferAttribute(e,m),rn.add(Ds)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<r.count;G++)f[G]=new Y,h[G]=new Y;const m=new Y,v=new Y,_=new Y,x=new Ge,y=new Ge,M=new Ge,A=new Y,S=new Y;function g(G,T,C){m.fromBufferAttribute(r,G),v.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),x.fromBufferAttribute(l,G),y.fromBufferAttribute(l,T),M.fromBufferAttribute(l,C),v.sub(m),_.sub(m),y.sub(x),M.sub(x);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(z),f[G].add(A),f[T].add(A),f[C].add(A),h[G].add(S),h[T].add(S),h[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,T=D.length;G<T;++G){const C=D[G],z=C.start,Z=C.count;for(let J=z,le=z+Z;J<le;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new Y,P=new Y,H=new Y,U=new Y;function O(G){H.fromBufferAttribute(a,G),U.copy(H);const T=f[G];L.copy(T),L.sub(H.multiplyScalar(H.dot(T))).normalize(),P.crossVectors(U,T);const z=P.dot(h[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,z)}for(let G=0,T=D.length;G<T;++G){const C=D[G],z=C.start,Z=C.count;for(let J=z,le=z+Z;J<le;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new Y,l=new Y,c=new Y,f=new Y,h=new Y,m=new Y,v=new Y,_=new Y;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),v.subVectors(c,l),_.subVectors(a,l),v.cross(_),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),f.add(v),h.add(v),m.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=t.count;x<y;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),v.subVectors(c,l),_.subVectors(a,l),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(f,h){const m=f.array,v=f.itemSize,_=f.normalized,x=new m.constructor(h.length*v);let y=0,M=0;for(let A=0,S=h.length;A<S;A++){f.isInterleavedBufferAttribute?y=h[A]*f.data.stride+f.offset:y=h[A]*v;for(let g=0;g<v;g++)x[M++]=m[y++]}return new xi(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let v=0,_=m.length;v<_;v++){const x=m[v],y=e(x,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];v.push(y.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let x=0,y=_.length;x<y;x++)v.push(_[x].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,v=c.length;m<v;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new zt,Vr=new g0,ul=new jf,im=new Y,cl=new Y,fl=new Y,dl=new Y,zc=new Y,hl=new Y,rm=new Y,pl=new Y;class wn extends un{constructor(e=new Zn,t=new og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){hl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const v=f[h],_=l[h];v!==0&&(zc.fromBufferAttribute(_,e),c?hl.addScaledVector(zc,v):hl.addScaledVector(zc.sub(t),v))}t.add(hl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(ul.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(ul,im)===null||Vr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(nm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,x=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,A=x.length;M<A;M++){const S=x[M],g=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let P=D,H=L;P<H;P+=3){const U=f.getX(P),O=f.getX(P+1),G=f.getX(P+2);a=ml(this,g,e,r,m,v,_,U,O,G),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=M,g=A;S<g;S+=3){const D=f.getX(S),L=f.getX(S+1),P=f.getX(S+2);a=ml(this,c,e,r,m,v,_,D,L,P),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,A=x.length;M<A;M++){const S=x[M],g=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let P=D,H=L;P<H;P+=3){const U=P,O=P+1,G=P+2;a=ml(this,g,e,r,m,v,_,U,O,G),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=M,g=A;S<g;S+=3){const D=S,L=S+1,P=S+2;a=ml(this,c,e,r,m,v,_,D,L,P),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function w0(s,e,t,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===Sr,f),h===null)return null;pl.copy(f),pl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(pl);return m<t.near||m>t.far?null:{distance:m,point:pl.clone(),object:s}}function ml(s,e,t,r,a,l,c,f,h,m){s.getVertexPosition(f,cl),s.getVertexPosition(h,fl),s.getVertexPosition(m,dl);const v=w0(s,e,t,r,cl,fl,dl,rm);if(v){const _=new Y;li.getBarycoord(rm,cl,fl,dl,_),a&&(v.uv=li.getInterpolatedAttribute(a,f,h,m,_,new Ge)),l&&(v.uv1=li.getInterpolatedAttribute(l,f,h,m,_,new Ge)),c&&(v.normal=li.getInterpolatedAttribute(c,f,h,m,_,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new Y,materialIndex:0};li.getNormal(cl,fl,dl,x.normal),v.face=x,v.barycoord=_}return v}class Xo extends Zn{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],v=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,a,c,2),M("x","z","y",1,-1,e,r,-t,a,c,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(_,2));function M(A,S,g,D,L,P,H,U,O,G,T){const C=P/O,z=H/G,Z=P/2,J=H/2,le=U/2,fe=O+1,ae=G+1;let ce=0,V=0;const ue=new Y;for(let oe=0;oe<ae;oe++){const F=oe*z-J;for(let re=0;re<fe;re++){const Ie=re*C-Z;ue[A]=Ie*D,ue[S]=F*L,ue[g]=le,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[S]=0,ue[g]=U>0?1:-1,v.push(ue.x,ue.y,ue.z),_.push(re/O),_.push(1-oe/G),ce+=1}}for(let oe=0;oe<G;oe++)for(let F=0;F<O;F++){const re=x+F+fe*oe,Ie=x+F+fe*(oe+1),ee=x+(F+1)+fe*(oe+1),de=x+(F+1)+fe*oe;h.push(re,Ie,de),h.push(Ie,ee,de),V+=6}f.addGroup(y,V,T),y+=V,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=js(s[t]);for(const a in r)e[a]=r[a]}return e}function A0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const C0={clone:js,merge:Tn};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class cg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new Y,sm=new Ge,om=new Ge;class Gn extends cg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,sm,om),t.subVectors(om,sm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Us=1;class b0 extends un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(Is,Us,e,t);a.layers=this.layers,this.add(a);const l=new Gn(Is,Us,e,t);l.layers=this.layers,this.add(l);const c=new Gn(Is,Us,e,t);c.layers=this.layers,this.add(c);const f=new Gn(Is,Us,e,t);f.layers=this.layers,this.add(f);const h=new Gn(Is,Us,e,t);h.layers=this.layers,this.add(h);const m=new Gn(Is,Us,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const m of t)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(t,v),e.setRenderTarget(_,x,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class fg extends Un{constructor(e,t,r,a,l,c,f,h,m,v){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,r,a,l,c,f,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L0 extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new fg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Xo(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:xr});l.uniforms.tEquirect.value=t;const c=new wn(a,l),f=t.minFilter;return t.minFilter===Kr&&(t.minFilter=_i),new b0(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}let N0=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const Bc=new Y,D0=new Y,I0=new at;class Xr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Bc.subVectors(r,t).cross(D0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Bc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||I0.getNormalMatrix(e),a=this.coplanarPoint(Bc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new jf,gl=new Y;class $f{constructor(e=new Xr,t=new Xr,r=new Xr,a=new Xr,l=new Xr,c=new Xr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],m=a[4],v=a[5],_=a[6],x=a[7],y=a[8],M=a[9],A=a[10],S=a[11],g=a[12],D=a[13],L=a[14],P=a[15];if(r[0].setComponents(h-l,x-m,S-y,P-g).normalize(),r[1].setComponents(h+l,x+m,S+y,P+g).normalize(),r[2].setComponents(h+c,x+v,S+M,P+D).normalize(),r[3].setComponents(h-c,x-v,S-M,P-D).normalize(),r[4].setComponents(h-f,x-_,S-A,P-L).normalize(),t===Hi)r[5].setComponents(h+f,x+_,S+A,P+L).normalize();else if(t===Pl)r[5].setComponents(f,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(gl.x=a.normal.x>0?e.max.x:e.min.x,gl.y=a.normal.y>0?e.max.y:e.min.y,gl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uo extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dg extends Un{constructor(e,t,r,a,l,c,f,h,m,v=Bs){if(v!==Bs&&v!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Bs&&(r=Zr),r===void 0&&v===Ys&&(r=Xs),super(null,a,l,c,f,h,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ci,this.minFilter=h!==void 0?h:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,m;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),m=r[a]-c,m<0)f=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const v=r[a],x=r[a+1]-v,y=(c-v)/x;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=t||(c.isVector2?new Ge:new Y);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,a=[],l=[],c=[],f=new Y,h=new zt;for(let y=0;y<=e;y++){const M=y/e;a[y]=this.getTangentAt(M,new Y)}l[0]=new Y,c[0]=new Y;let m=Number.MAX_VALUE;const v=Math.abs(a[0].x),_=Math.abs(a[0].y),x=Math.abs(a[0].z);v<=m&&(m=v,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),x<=m&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(a[y-1],a[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(ht(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,M))}c[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(ht(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(a[M],y*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kf extends Si{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ge){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=h-this.aX,y=m-this.aY;h=x*v-y*_+this.aX,m=x*_+y*v+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class U0 extends Kf{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Zf(){let s=0,e=0,t=0,r=0;function a(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,m){a(c,f,m*(f-l),m*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,m,v,_){let x=(c-l)/m-(f-l)/(m+v)+(f-c)/v,y=(f-c)/v-(h-c)/(v+_)+(h-f)/_;x*=v,y*=v,a(c,f,x,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const vl=new Y,Vc=new Zf,Hc=new Zf,Gc=new Zf;class F0 extends Si{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new Y){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,v;this.closed||f>0?m=a[(f-1)%l]:(vl.subVectors(a[0],a[1]).add(a[0]),m=vl);const _=a[f%l],x=a[(f+1)%l];if(this.closed||f+2<l?v=a[(f+2)%l]:(vl.subVectors(a[l-1],a[l-2]).add(a[l-1]),v=vl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(m.distanceToSquared(_),y),A=Math.pow(_.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(v),y);A<1e-4&&(A=1),M<1e-4&&(M=A),S<1e-4&&(S=A),Vc.initNonuniformCatmullRom(m.x,_.x,x.x,v.x,M,A,S),Hc.initNonuniformCatmullRom(m.y,_.y,x.y,v.y,M,A,S),Gc.initNonuniformCatmullRom(m.z,_.z,x.z,v.z,M,A,S)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(m.x,_.x,x.x,v.x,this.tension),Hc.initCatmullRom(m.y,_.y,x.y,v.y,this.tension),Gc.initCatmullRom(m.z,_.z,x.z,v.z,this.tension));return r.set(Vc.calc(h),Hc.calc(h),Gc.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function am(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function O0(s,e){const t=1-s;return t*t*e}function k0(s,e){return 2*(1-s)*s*e}function z0(s,e){return s*s*e}function Oo(s,e,t,r){return O0(s,e)+k0(s,t)+z0(s,r)}function B0(s,e){const t=1-s;return t*t*t*e}function V0(s,e){const t=1-s;return 3*t*t*s*e}function H0(s,e){return 3*(1-s)*s*s*e}function G0(s,e){return s*s*s*e}function ko(s,e,t,r,a){return B0(s,e)+V0(s,t)+H0(s,r)+G0(s,a)}class hg extends Si{constructor(e=new Ge,t=new Ge,r=new Ge,a=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ko(e,a.x,l.x,c.x,f.x),ko(e,a.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W0 extends Si{constructor(e=new Y,t=new Y,r=new Y,a=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ko(e,a.x,l.x,c.x,f.x),ko(e,a.y,l.y,c.y,f.y),ko(e,a.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pg extends Si{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X0 extends Si{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mg extends Si{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Oo(e,a.x,l.x,c.x),Oo(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends Si{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Oo(e,a.x,l.x,c.x),Oo(e,a.y,l.y,c.y),Oo(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gg extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],m=a[c],v=a[c>a.length-2?a.length-1:c+1],_=a[c>a.length-3?a.length-1:c+2];return r.set(am(f,h.x,m.x,v.x,_.x),am(f,h.y,m.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Ge().fromArray(a))}return this}}var lm=Object.freeze({__proto__:null,ArcCurve:U0,CatmullRomCurve3:F0,CubicBezierCurve:hg,CubicBezierCurve3:W0,EllipseCurve:Kf,LineCurve:pg,LineCurve3:X0,QuadraticBezierCurve:mg,QuadraticBezierCurve3:Y0,SplineCurve:gg});class q0 extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lm[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const c=a[l]-r,f=this.curves[l],h=f.getLength(),m=h===0?0:1-c/h;return f.getPointAt(m,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,a=this.curves.length;r<a;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let m=0;m<h.length;m++){const v=h[m];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(new lm[a.type]().fromJSON(a))}return this}}class j0 extends q0{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new pg(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,a){const l=new mg(this.currentPoint.clone(),new Ge(e,t),new Ge(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(e,t,r,a,l,c){const f=new hg(this.currentPoint.clone(),new Ge(e,t),new Ge(r,a),new Ge(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new gg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,a,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,a,l,c),this}absarc(e,t,r,a,l,c){return this.absellipse(e,t,r,r,a,l,c),this}ellipse(e,t,r,a,l,c,f,h){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+m,t+v,r,a,l,c,f,h),this}absellipse(e,t,r,a,l,c,f,h){const m=new Kf(e,t,r,a,l,c,f,h);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jf extends Zn{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:r,phiLength:a},t=Math.floor(t),a=ht(a,0,Math.PI*2);const l=[],c=[],f=[],h=[],m=[],v=1/t,_=new Y,x=new Ge,y=new Y,M=new Y,A=new Y;let S=0,g=0;for(let D=0;D<=e.length-1;D++)switch(D){case 0:S=e[D+1].x-e[D].x,g=e[D+1].y-e[D].y,y.x=g*1,y.y=-S,y.z=g*0,A.copy(y),y.normalize(),h.push(y.x,y.y,y.z);break;case e.length-1:h.push(A.x,A.y,A.z);break;default:S=e[D+1].x-e[D].x,g=e[D+1].y-e[D].y,y.x=g*1,y.y=-S,y.z=g*0,M.copy(y),y.x+=A.x,y.y+=A.y,y.z+=A.z,y.normalize(),h.push(y.x,y.y,y.z),A.copy(M)}for(let D=0;D<=t;D++){const L=r+D*v*a,P=Math.sin(L),H=Math.cos(L);for(let U=0;U<=e.length-1;U++){_.x=e[U].x*P,_.y=e[U].y,_.z=e[U].x*H,c.push(_.x,_.y,_.z),x.x=D/t,x.y=U/(e.length-1),f.push(x.x,x.y);const O=h[3*U+0]*P,G=h[3*U+1],T=h[3*U+0]*H;m.push(O,G,T)}}for(let D=0;D<t;D++)for(let L=0;L<e.length-1;L++){const P=L+D*e.length,H=P,U=P+e.length,O=P+e.length+1,G=P+1;l.push(H,U,G),l.push(O,G,U)}this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("uv",new Wt(f,2)),this.setAttribute("normal",new Wt(m,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.points,e.segments,e.phiStart,e.phiLength)}}class Ll extends Jf{constructor(e=1,t=1,r=4,a=8){const l=new j0;l.absarc(0,-t/2,e,Math.PI*1.5,0),l.absarc(0,t/2,e,0,Math.PI*.5),super(l.getPoints(r),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:r,radialSegments:a}}static fromJSON(e){return new Ll(e.radius,e.length,e.capSegments,e.radialSegments)}}class Qf extends Zn{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],h=[],m=new Y,v=new Ge;c.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let _=0,x=3;_<=t;_++,x+=3){const y=r+_/t*a;m.x=e*Math.cos(y),m.y=e*Math.sin(y),c.push(m.x,m.y,m.z),f.push(0,0,1),v.x=(c[x]/e+1)/2,v.y=(c[x+1]/e+1)/2,h.push(v.x,v.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ed extends Zn{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const v=[],_=[],x=[],y=[];let M=0;const A=[],S=r/2;let g=0;D(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(y,2));function D(){const P=new Y,H=new Y;let U=0;const O=(t-e)/r;for(let G=0;G<=l;G++){const T=[],C=G/l,z=C*(t-e)+e;for(let Z=0;Z<=a;Z++){const J=Z/a,le=J*h+f,fe=Math.sin(le),ae=Math.cos(le);H.x=z*fe,H.y=-C*r+S,H.z=z*ae,_.push(H.x,H.y,H.z),P.set(fe,O,ae).normalize(),x.push(P.x,P.y,P.z),y.push(J,1-C),T.push(M++)}A.push(T)}for(let G=0;G<a;G++)for(let T=0;T<l;T++){const C=A[T][G],z=A[T+1][G],Z=A[T+1][G+1],J=A[T][G+1];(e>0||T!==0)&&(v.push(C,z,J),U+=3),(t>0||T!==l-1)&&(v.push(z,Z,J),U+=3)}m.addGroup(g,U,0),g+=U}function L(P){const H=M,U=new Ge,O=new Y;let G=0;const T=P===!0?e:t,C=P===!0?1:-1;for(let Z=1;Z<=a;Z++)_.push(0,S*C,0),x.push(0,C,0),y.push(.5,.5),M++;const z=M;for(let Z=0;Z<=a;Z++){const le=Z/a*h+f,fe=Math.cos(le),ae=Math.sin(le);O.x=T*ae,O.y=S*C,O.z=T*fe,_.push(O.x,O.y,O.z),x.push(0,C,0),U.x=fe*.5+.5,U.y=ae*.5*C+.5,y.push(U.x,U.y),M++}for(let Z=0;Z<a;Z++){const J=H+Z,le=z+Z;P===!0?v.push(le,le+1,J):v.push(le+1,le,J),G+=3}m.addGroup(g,G,P===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dl extends Zn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),m=f+1,v=h+1,_=e/f,x=t/h,y=[],M=[],A=[],S=[];for(let g=0;g<v;g++){const D=g*x-c;for(let L=0;L<m;L++){const P=L*_-l;M.push(P,-D,0),A.push(0,0,1),S.push(L/f),S.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<f;D++){const L=D+m*g,P=D+m*(g+1),H=D+1+m*(g+1),U=D+1+m*g;y.push(L,P,U),y.push(P,H,U)}this.setIndex(y),this.setAttribute("position",new Wt(M,3)),this.setAttribute("normal",new Wt(A,3)),this.setAttribute("uv",new Wt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class td extends Zn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let m=0;const v=[],_=new Y,x=new Y,y=[],M=[],A=[],S=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let P=0;g===0&&c===0?P=.5/t:g===r&&h===Math.PI&&(P=-.5/t);for(let H=0;H<=t;H++){const U=H/t;_.x=-e*Math.cos(a+U*l)*Math.sin(c+L*f),_.y=e*Math.cos(c+L*f),_.z=e*Math.sin(a+U*l)*Math.sin(c+L*f),M.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),S.push(U+P,1-L),D.push(m++)}v.push(D)}for(let g=0;g<r;g++)for(let D=0;D<t;D++){const L=v[g][D+1],P=v[g][D],H=v[g+1][D],U=v[g+1][D+1];(g!==0||c>0)&&y.push(L,P,U),(g!==r-1||h<Math.PI)&&y.push(P,H,U)}this.setIndex(y),this.setAttribute("position",new Wt(M,3)),this.setAttribute("normal",new Wt(A,3)),this.setAttribute("uv",new Wt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nd extends Zn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const c=[],f=[],h=[],m=[],v=new Y,_=new Y,x=new Y;for(let y=0;y<=r;y++)for(let M=0;M<=a;M++){const A=M/a*l,S=y/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(A),_.y=(e+t*Math.cos(S))*Math.sin(A),_.z=t*Math.sin(S),f.push(_.x,_.y,_.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),x.subVectors(_,v).normalize(),h.push(x.x,x.y,x.z),m.push(M/a),m.push(y/r)}for(let y=1;y<=r;y++)for(let M=1;M<=a;M++){const A=(a+1)*y+M-1,S=(a+1)*(y-1)+M-1,g=(a+1)*(y-1)+M,D=(a+1)*y+M;c.push(A,S,D),c.push(S,g,D)}this.setIndex(c),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _l extends Wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qm,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $0 extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class id extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Z0 extends id{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wc=new zt,um=new Y,cm=new Y;class vg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;um.setFromMatrixPosition(e.matrixWorld),t.position.copy(um),cm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cm),t.updateMatrixWorld(),Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fm=new zt,Io=new Y,Xc=new Y;class J0 extends vg{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),r.position.copy(Io),Xc.copy(r.position),Xc.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Xc),r.updateMatrixWorld(),a.makeTranslation(-Io.x,-Io.y,-Io.z),fm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fm)}}class Q0 extends id{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _g extends cg{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ex extends vg{constructor(){super(new _g(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tx extends id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nx extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function dm(s,e,t,r){const a=ix(r);switch(t){case Ym:return s*e;case jm:return s*e;case $m:return s*e*2;case Km:return s*e/a.components*a.byteLength;case Xf:return s*e/a.components*a.byteLength;case Zm:return s*e*2/a.components*a.byteLength;case Yf:return s*e*2/a.components*a.byteLength;case qm:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case qf:return s*e*4/a.components*a.byteLength;case El:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(s,16)*Math.max(e,8)/4;case hf:case mf:return Math.max(s,8)*Math.max(e,8)/2;case vf:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case If:case Uf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jm:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Of:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(s){switch(s){case Wi:case Gm:return{byteLength:1,components:1};case zo:case Wm:case Bo:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case Zr:case Hf:case Vi:return{byteLength:4,components:1};case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function rx(s){const e=new WeakMap;function t(f,h){const m=f.array,v=f.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),f.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,m){const v=h.array,_=h.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,v);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],A=_[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const A=_[y];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:c}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_x=`#ifdef USE_IRIDESCENCE
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
#endif`,xx=`#ifdef USE_BUMPMAP
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ox=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
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
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`struct PhysicalMaterial {
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
}`,ry=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`#include <common>
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
}`,fS=`#if DEPTH_PACKING == 3200
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
}`,dS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
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
}`,vS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,xS=`uniform vec3 diffuse;
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
}`,yS=`#define LAMBERT
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
}`,SS=`#define LAMBERT
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
}`,ES=`#define MATCAP
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
}`,MS=`#define MATCAP
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
}`,TS=`#define NORMAL
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
}`,wS=`#define NORMAL
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
}`,AS=`#define PHONG
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
}`,CS=`#define PHONG
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
}`,RS=`#define STANDARD
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
}`,PS=`#define STANDARD
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
}`,bS=`#define TOON
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
}`,LS=`#define TOON
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
}`,NS=`uniform float size;
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
}`,DS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,US=`uniform vec3 color;
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
}`,FS=`uniform float rotation;
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
}`,OS=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:sx,alphahash_pars_fragment:ox,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:ux,alphatest_pars_fragment:cx,aomap_fragment:fx,aomap_pars_fragment:dx,batching_pars_vertex:hx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:vx,iridescence_fragment:_x,bumpmap_pars_fragment:xx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Mx,color_fragment:Tx,color_pars_fragment:wx,color_pars_vertex:Ax,color_vertex:Cx,common:Rx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:bx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Nx,emissivemap_fragment:Dx,emissivemap_pars_fragment:Ix,colorspace_fragment:Ux,colorspace_pars_fragment:Fx,envmap_fragment:Ox,envmap_common_pars_fragment:kx,envmap_pars_fragment:zx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Zx,envmap_vertex:Vx,fog_vertex:Hx,fog_pars_vertex:Gx,fog_fragment:Wx,fog_pars_fragment:Xx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:qx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:$x,lights_pars_begin:Kx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:oy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:cy,map_fragment:fy,map_pars_fragment:dy,map_particle_fragment:hy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:xy,morphtarget_pars_vertex:yy,morphtarget_vertex:Sy,normal_fragment_begin:Ey,normal_fragment_maps:My,normal_pars_fragment:Ty,normal_pars_vertex:wy,normal_vertex:Ay,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ly,opaque_fragment:Ny,packing:Dy,premultiplied_alpha_fragment:Iy,project_vertex:Uy,dithering_fragment:Fy,dithering_pars_fragment:Oy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:Vy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:Yy,skinnormal_vertex:qy,specularmap_fragment:jy,specularmap_pars_fragment:$y,tonemapping_fragment:Ky,tonemapping_pars_fragment:Zy,transmission_fragment:Jy,transmission_pars_fragment:Qy,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:sS,backgroundCube_vert:oS,backgroundCube_frag:aS,cube_vert:lS,cube_frag:uS,depth_vert:cS,depth_frag:fS,distanceRGBA_vert:dS,distanceRGBA_frag:hS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:vS,meshbasic_vert:_S,meshbasic_frag:xS,meshlambert_vert:yS,meshlambert_frag:SS,meshmatcap_vert:ES,meshmatcap_frag:MS,meshnormal_vert:TS,meshnormal_frag:wS,meshphong_vert:AS,meshphong_frag:CS,meshphysical_vert:RS,meshphysical_frag:PS,meshtoon_vert:bS,meshtoon_frag:LS,points_vert:NS,points_frag:DS,shadow_vert:IS,shadow_frag:US,sprite_vert:FS,sprite_frag:OS},Pe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},vi={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vi.physical={uniforms:Tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const xl={r:0,b:0,g:0},Gr=new yi,kS=new zt;function zS(s,e,t,r,a,l,c){const f=new St(0);let h=l===!0?0:1,m,v,_=null,x=0,y=null;function M(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function A(L){let P=!1;const H=M(L);H===null?g(f,h):H&&H.isColor&&(g(H,1),P=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,P){const H=M(P);H&&(H.isCubeTexture||H.mapping===Nl)?(v===void 0&&(v=new wn(new Xo(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:js(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(U,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Gr.copy(P.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Gr)),v.material.toneMapped=wt.getTransfer(H.colorSpace)!==bt,(_!==H||x!==H.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,_=H,x=H.version,y=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new wn(new Dl(2,2),new Er({name:"BackgroundMaterial",uniforms:js(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=wt.getTransfer(H.colorSpace)!==bt,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,_=H,x=H.version,y=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,P){L.getRGB(xl,ug(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,P,c)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),h=P,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,g(f,h)},render:A,addToRenderList:S,dispose:D}}function BS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(C,z,Z,J,le){let fe=!1;const ae=_(J,Z,z);l!==ae&&(l=ae,m(l.object)),fe=y(C,J,Z,le),fe&&M(C,J,Z,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,P(C,z,Z,J),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function _(C,z,Z){const J=Z.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let fe=le[z.id];fe===void 0&&(fe={},le[z.id]=fe);let ae=fe[J];return ae===void 0&&(ae=x(h()),fe[J]=ae),ae}function x(C){const z=[],Z=[],J=[];for(let le=0;le<t;le++)z[le]=0,Z[le]=0,J[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:J,object:C,attributes:{},index:null}}function y(C,z,Z,J){const le=l.attributes,fe=z.attributes;let ae=0;const ce=Z.getAttributes();for(const V in ce)if(ce[V].location>=0){const oe=le[V];let F=fe[V];if(F===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;ae++}return l.attributesNum!==ae||l.index!==J}function M(C,z,Z,J){const le={},fe=z.attributes;let ae=0;const ce=Z.getAttributes();for(const V in ce)if(ce[V].location>=0){let oe=fe[V];oe===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),le[V]=F,ae++}l.attributes=le,l.attributesNum=ae,l.index=J}function A(){const C=l.newAttributes;for(let z=0,Z=C.length;z<Z;z++)C[z]=0}function S(C){g(C,0)}function g(C,z){const Z=l.newAttributes,J=l.enabledAttributes,le=l.attributeDivisors;Z[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),le[C]!==z&&(s.vertexAttribDivisor(C,z),le[C]=z)}function D(){const C=l.newAttributes,z=l.enabledAttributes;for(let Z=0,J=z.length;Z<J;Z++)z[Z]!==C[Z]&&(s.disableVertexAttribArray(Z),z[Z]=0)}function L(C,z,Z,J,le,fe,ae){ae===!0?s.vertexAttribIPointer(C,z,Z,le,fe):s.vertexAttribPointer(C,z,Z,J,le,fe)}function P(C,z,Z,J){A();const le=J.attributes,fe=Z.getAttributes(),ae=z.defaultAttributeValues;for(const ce in fe){const V=fe[ce];if(V.location>=0){let ue=le[ce];if(ue===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const oe=ue.normalized,F=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ie=re.buffer,ee=re.type,de=re.bytesPerElement,Me=ee===s.INT||ee===s.UNSIGNED_INT||ue.gpuType===Hf;if(ue.isInterleavedBufferAttribute){const xe=ue.data,we=xe.stride,Ue=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<V.locationSize;Qe++)g(V.location+Qe,xe.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<V.locationSize;Qe++)S(V.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Qe=0;Qe<V.locationSize;Qe++)L(V.location+Qe,F/V.locationSize,ee,oe,we*de,(Ue+F/V.locationSize*Qe)*de,Me)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)g(V.location+xe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<V.locationSize;xe++)S(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<V.locationSize;xe++)L(V.location+xe,F/V.locationSize,ee,oe,F*de,F/V.locationSize*xe*de,Me)}}else if(ae!==void 0){const oe=ae[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(V.location,oe);break;case 3:s.vertexAttrib3fv(V.location,oe);break;case 4:s.vertexAttrib4fv(V.location,oe);break;default:s.vertexAttrib1fv(V.location,oe)}}}}D()}function H(){G();for(const C in r){const z=r[C];for(const Z in z){const J=z[Z];for(const le in J)v(J[le].object),delete J[le];delete z[Z]}delete r[C]}}function U(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const Z in z){const J=z[Z];for(const le in J)v(J[le].object),delete J[le];delete z[Z]}delete r[C.id]}function O(C){for(const z in r){const Z=r[z];if(Z[C.id]===void 0)continue;const J=Z[C.id];for(const le in J)v(J[le].object),delete J[le];delete Z[C.id]}}function G(){T(),c=!0,l!==a&&(l=a,m(l.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:T,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function VS(s,e,t){let r;function a(m){r=m}function l(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function c(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),t.update(v,r,_))}function f(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let y=0;for(let M=0;M<_;M++)y+=v[M];t.update(y,r,1)}function h(m,v,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<m.length;M++)c(m[M],v[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=v[A]*x[A];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function HS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==ui&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const G=O===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!G)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=h(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:H,maxSamples:U}}function GS(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Xr,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||a;return a=x,r=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=v(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!a||M===null||M.length===0||l&&!S)l?v(null):m();else{const D=l?0:r,L=D*4;let P=g.clippingState||null;h.value=P,P=v(M,x,L,y);for(let H=0;H!==L;++H)P[H]=t[H];g.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,y,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,M!==!0||S===null){const g=y+A*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,P=y;L!==A;++L,P+=4)c.copy(_[L]).applyMatrix4(D,f),c.normal.toArray(S,P),S[P+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function WS(s){let e=new WeakMap;function t(c,f){return f===uf?c.mapping=Gs:f===cf&&(c.mapping=Ws),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===uf||f===cf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new L0(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const ks=4,hm=[.125,.215,.35,.446,.526,.582],jr=20,Yc=new _g,pm=new St;let qc=null,jc=0,$c=0,Kc=!1;const Yr=(1+Math.sqrt(5))/2,Fs=1/Yr,mm=[new Y(-Yr,Fs,0),new Y(Yr,Fs,0),new Y(-Fs,0,Yr),new Y(Fs,0,Yr),new Y(0,Yr,-Fs),new Y(0,Yr,Fs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,jc,$c),this._renderer.xr.enabled=Kc,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Bo,format:ui,colorSpace:qs,depthBuffer:!1},a=vm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XS(l)),this._blurMaterial=YS(l,e,t)}return a}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Yc)}_sceneToCubeUV(e,t,r,a){const f=new Gn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(pm),v.toneMapping=yr,v.autoClear=!1;const y=new og({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new wn(new Xo,y);let A=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,A=!0):(y.color.copy(pm),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(f.up.set(0,h[g],0),f.lookAt(m[g],0,0)):D===1?(f.up.set(0,0,h[g]),f.lookAt(0,m[g],0)):(f.up.set(0,h[g],0),f.lookAt(0,0,m[g]));const L=this._cubeSize;yl(a,D*L,g>2?L:0,L,L),v.setRenderTarget(a),A&&v.render(M,f),v.render(e,f)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new wn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;yl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Yc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=mm[(a-l-1)%mm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new wn(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*jr-1),A=l/M,S=isFinite(l)?1+Math.floor(v*A):jr;S>jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${jr}`);const g=[];let D=0;for(let O=0;O<jr;++O){const G=O/A,T=Math.exp(-G*G/2);g.push(T),O===0?D+=T:O<S&&(D+=2*T)}for(let O=0;O<g.length;O++)g[O]=g[O]/D;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-r;const P=this._sizeLods[a],H=3*P*(a>L-ks?a-L+ks:0),U=4*(this._cubeSize-P);yl(t,H,U,3*P,2*P),h.setRenderTarget(t),h.render(_,Yc)}}function XS(s){const e=[],t=[],r=[];let a=s;const l=s-ks+1+hm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-ks?h=hm[c-s+ks-1]:c===0&&(h=0),r.push(h);const m=1/(f-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,M=6,A=3,S=2,g=1,D=new Float32Array(A*M*y),L=new Float32Array(S*M*y),P=new Float32Array(g*M*y);for(let U=0;U<y;U++){const O=U%3*2/3-1,G=U>2?0:-1,T=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];D.set(T,A*M*U),L.set(x,S*M*U);const C=[U,U,U,U,U,U];P.set(C,g*M*U)}const H=new Zn;H.setAttribute("position",new xi(D,A)),H.setAttribute("uv",new xi(L,S)),H.setAttribute("faceIndex",new xi(P,g)),e.push(H),a>ks&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function vm(s,e,t){const r=new Jr(s,e,t);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function YS(s,e,t){const r=new Float32Array(jr),a=new Y(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function _m(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function xm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function qS(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===uf||h===cf,v=h===Gs||h===Ws;if(m||v){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new gm(s)),_=m?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return m&&y&&y.height>0||v&&y&&a(y)?(t===null&&(t=new gm(s)),_=m?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function jS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function $S(s,e,t,r){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete a[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,M=_.attributes.position;let A=0;if(y!==null){const D=y.array;A=y.version;for(let L=0,P=D.length;L<P;L+=3){const H=D[L+0],U=D[L+1],O=D[L+2];x.push(H,U,U,O,O,H)}}else if(M!==void 0){const D=M.array;A=M.version;for(let L=0,P=D.length/3-1;L<P;L+=3){const H=L+0,U=L+1,O=L+2;x.push(H,U,U,O,O,H)}}else return;const S=new(tg(x)?lg:ag)(x,1);S.version=A;const g=l.get(_);g&&e.remove(g),l.set(_,S)}function v(_){const x=l.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function KS(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,y){s.drawElements(r,y,l,x*c),t.update(y,r,1)}function m(x,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,x*c,M),t.update(y,r,M))}function v(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,M);let S=0;for(let g=0;g<M;g++)S+=y[g];t.update(S,r,1)}function _(x,y,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/c,y[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,x,0,A,0,M);let g=0;for(let D=0;D<M;D++)g+=y[D]*A[D];t.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function ZS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function JS(s,e,t){const r=new WeakMap,a=new Lt;function l(c,f,h){const m=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let C=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),A===!0&&(P=2),S===!0&&(P=3);let H=f.attributes.position.count*P,U=1;H>e.maxTextureSize&&(U=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*U*4*_),G=new ig(O,H,U,_);G.type=Vi,G.needsUpdate=!0;const T=P*4;for(let z=0;z<_;z++){const Z=g[z],J=D[z],le=L[z],fe=H*U*4*z;for(let ae=0;ae<Z.count;ae++){const ce=ae*T;M===!0&&(a.fromBufferAttribute(Z,ae),O[fe+ce+0]=a.x,O[fe+ce+1]=a.y,O[fe+ce+2]=a.z,O[fe+ce+3]=0),A===!0&&(a.fromBufferAttribute(J,ae),O[fe+ce+4]=a.x,O[fe+ce+5]=a.y,O[fe+ce+6]=a.z,O[fe+ce+7]=0),S===!0&&(a.fromBufferAttribute(le,ae),O[fe+ce+8]=a.x,O[fe+ce+9]=a.y,O[fe+ce+10]=a.z,O[fe+ce+11]=le.itemSize===4?a.w:1)}}x={count:_,texture:G,size:new Ge(H,U)},r.set(f,x),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const A=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function QS(s,e,t,r){let a=new WeakMap;function l(h){const m=r.render.frame,v=h.geometry,_=e.get(h,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function c(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const yg=new Un,ym=new dg(1,1),Sg=new ig,Eg=new p0,Mg=new fg,Sm=[],Em=[],Mm=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function Ks(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Sm[a];if(l===void 0&&(l=new Float32Array(a),Sm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Il(s,e){let t=Em[e];t===void 0&&(t=new Int32Array(e),Em[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function eE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function rE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,r))return;wm.set(r),s.uniformMatrix2fv(this.addr,!1,wm),Qt(t,r)}}function sE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),Qt(t,r)}}function oE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,r))return;Mm.set(r),s.uniformMatrix4fv(this.addr,!1,Mm),Qt(t,r)}}function aE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function fE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function mE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ym.compareFunction=eg,l=ym):l=yg,t.setTexture2D(e||l,a)}function gE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Eg,a)}function vE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Mg,a)}function _E(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Sg,a)}function xE(s){switch(s){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return uE;case 35669:case 35673:return cE;case 5125:return fE;case 36294:return dE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return _E}}function yE(s,e){s.uniform1fv(this.addr,e)}function SE(s,e){const t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function EE(s,e){const t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function ME(s,e){const t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function TE(s,e){const t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wE(s,e){const t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function AE(s,e){const t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function CE(s,e){s.uniform1iv(this.addr,e)}function RE(s,e){s.uniform2iv(this.addr,e)}function PE(s,e){s.uniform3iv(this.addr,e)}function bE(s,e){s.uniform4iv(this.addr,e)}function LE(s,e){s.uniform1uiv(this.addr,e)}function NE(s,e){s.uniform2uiv(this.addr,e)}function DE(s,e){s.uniform3uiv(this.addr,e)}function IE(s,e){s.uniform4uiv(this.addr,e)}function UE(s,e,t){const r=this.cache,a=e.length,l=Il(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||yg,l[c])}function FE(s,e,t){const r=this.cache,a=e.length,l=Il(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Eg,l[c])}function OE(s,e,t){const r=this.cache,a=e.length,l=Il(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Mg,l[c])}function kE(s,e,t){const r=this.cache,a=e.length,l=Il(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Sg,l[c])}function zE(s){switch(s){case 5126:return yE;case 35664:return SE;case 35665:return EE;case 35666:return ME;case 35674:return TE;case 35675:return wE;case 35676:return AE;case 5124:case 35670:return CE;case 35667:case 35671:return RE;case 35668:case 35672:return PE;case 35669:case 35673:return bE;case 5125:return LE;case 36294:return NE;case 36295:return DE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return kE}}class BE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=xE(t.type)}}class VE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zE(t.type)}}class HE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function GE(s,e,t){const r=s.name,a=r.length;for(Zc.lastIndex=0;;){const l=Zc.exec(r),c=Zc.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===a){Am(t,m===void 0?new BE(f,s,e):new VE(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new HE(f),Am(t,_)),t=_}}}class Cl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);GE(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Cm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const WE=37297;let XE=0;function YE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Rm=new at;function qE(s){wt._getMatrix(Rm,wt.workingColorSpace,s);const e=`mat3( ${Rm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Rl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+YE(s.getShaderSource(e),c)}else return a}function jE(s,e){const t=qE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $E(s,e){let t;switch(e){case B_:t="Linear";break;case V_:t="Reinhard";break;case H_:t="Cineon";break;case G_:t="ACESFilmic";break;case X_:t="AgX";break;case Y_:t="Neutral";break;case W_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new Y;function KE(){wt.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function JE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function QE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Fo(s){return s!==""}function bm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(s){return s.replace(eM,nM)}const tM=new Map;function nM(s,e){let t=lt[e];if(t===void 0){const r=tM.get(e);if(r!==void 0)t=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(t)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(iM,rM)}function rM(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Dm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function sM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function oM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function lM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vm:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function uM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function cM(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=sM(t),m=oM(t),v=aM(t),_=lM(t),x=uM(t),y=ZE(t),M=JE(l),A=a.createProgram();let S,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Fo).join(`
`),g.length>0&&(g+=`
`)):(S=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),g=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?lt.tonemapping_pars_fragment:"",t.toneMapping!==yr?$E("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,jE("linearToOutputTexel",t.outputColorSpace),KE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),c=Bf(c),c=bm(c,t),c=Lm(c,t),f=Bf(f),f=bm(f,t),f=Lm(f,t),c=Nm(c),f=Nm(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+S+c,P=D+g+f,H=Cm(a,a.VERTEX_SHADER,L),U=Cm(a,a.FRAGMENT_SHADER,P);a.attachShader(A,H),a.attachShader(A,U),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function O(z){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(A).trim(),J=a.getShaderInfoLog(H).trim(),le=a.getShaderInfoLog(U).trim();let fe=!0,ae=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,H,U);else{const ce=Pm(a,H,"vertex"),V=Pm(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+ce+`
`+V)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(J===""||le==="")&&(ae=!1);ae&&(z.diagnostics={runnable:fe,programLog:Z,vertexShader:{log:J,prefix:S},fragmentShader:{log:le,prefix:g}})}a.deleteShader(H),a.deleteShader(U),G=new Cl(a,A),T=QE(a,A)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(A,WE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=U,this}let fM=0;class dM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hM(e),t.set(e,r)),r}}class hM{constructor(e){this.id=fM++,this.code=e,this.usedTimes=0}}function pM(s,e,t,r,a,l,c){const f=new rg,h=new dM,m=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return m.add(T),T===0?"uv":`uv${T}`}function S(T,C,z,Z,J){const le=Z.fog,fe=J.geometry,ae=T.isMeshStandardMaterial?Z.environment:null,ce=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),V=ce&&ce.mapping===Nl?ce.image.height:null,ue=M[T.type];T.precision!==null&&(y=a.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const oe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=oe!==void 0?oe.length:0;let re=0;fe.morphAttributes.position!==void 0&&(re=1),fe.morphAttributes.normal!==void 0&&(re=2),fe.morphAttributes.color!==void 0&&(re=3);let Ie,ee,de,Me;if(ue){const xt=vi[ue];Ie=xt.vertexShader,ee=xt.fragmentShader}else Ie=T.vertexShader,ee=T.fragmentShader,h.update(T),de=h.getVertexShaderID(T),Me=h.getFragmentShaderID(T);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ue=J.isInstancedMesh===!0,Qe=J.isBatchedMesh===!0,Rt=!!T.map,gt=!!T.matcap,Nt=!!ce,B=!!T.aoMap,_n=!!T.lightMap,pt=!!T.bumpMap,ct=!!T.normalMap,je=!!T.displacementMap,Ct=!!T.emissiveMap,Ye=!!T.metalnessMap,b=!!T.roughnessMap,w=T.anisotropy>0,Q=T.clearcoat>0,me=T.dispersion>0,ve=T.iridescence>0,he=T.sheen>0,We=T.transmission>0,Ae=w&&!!T.anisotropyMap,Fe=Q&&!!T.clearcoatMap,ut=Q&&!!T.clearcoatNormalMap,Ee=Q&&!!T.clearcoatRoughnessMap,ze=ve&&!!T.iridescenceMap,Ke=ve&&!!T.iridescenceThicknessMap,et=he&&!!T.sheenColorMap,Be=he&&!!T.sheenRoughnessMap,ft=!!T.specularMap,rt=!!T.specularColorMap,At=!!T.specularIntensityMap,q=We&&!!T.transmissionMap,Ce=We&&!!T.thicknessMap,se=!!T.gradientMap,pe=!!T.alphaMap,Le=T.alphaTest>0,be=!!T.alphaHash,st=!!T.extensions;let It=yr;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const $t={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ie,fragmentShader:ee,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Qe,batchingColor:Qe&&J._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,instancingMorph:Ue&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:qs,alphaToCoverage:!!T.alphaToCoverage,map:Rt,matcap:gt,envMap:Nt,envMapMode:Nt&&ce.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:_n,bumpMap:pt,normalMap:ct,displacementMap:x&&je,emissiveMap:Ct,normalMapObjectSpace:ct&&T.normalMapType===K_,normalMapTangentSpace:ct&&T.normalMapType===Qm,metalnessMap:Ye,roughnessMap:b,anisotropy:w,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:he,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:rt,specularIntensityMap:At,transmission:We,transmissionMap:q,thicknessMap:Ce,gradientMap:se,opaque:T.transparent===!1&&T.blending===zs&&T.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:be,combine:T.combine,mapUv:Rt&&A(T.map.channel),aoMapUv:B&&A(T.aoMap.channel),lightMapUv:_n&&A(T.lightMap.channel),bumpMapUv:pt&&A(T.bumpMap.channel),normalMapUv:ct&&A(T.normalMap.channel),displacementMapUv:je&&A(T.displacementMap.channel),emissiveMapUv:Ct&&A(T.emissiveMap.channel),metalnessMapUv:Ye&&A(T.metalnessMap.channel),roughnessMapUv:b&&A(T.roughnessMap.channel),anisotropyMapUv:Ae&&A(T.anisotropyMap.channel),clearcoatMapUv:Fe&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:ut&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(T.sheenRoughnessMap.channel),specularMapUv:ft&&A(T.specularMap.channel),specularColorMapUv:rt&&A(T.specularColorMap.channel),specularIntensityMapUv:At&&A(T.specularIntensityMap.channel),transmissionMapUv:q&&A(T.transmissionMap.channel),thicknessMapUv:Ce&&A(T.thicknessMap.channel),alphaMapUv:pe&&A(T.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(ct||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!fe.attributes.uv&&(Rt||pe),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:J.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Rt&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===bt,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===In,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:st&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&T.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function g(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)C.push(z),C.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(D(C,T),L(C,T),C.push(s.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function D(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function L(T,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),T.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),T.push(f.mask)}function P(T){const C=M[T.type];let z;if(C){const Z=vi[C];z=C0.clone(Z.uniforms)}else z=T.uniforms;return z}function H(T,C){let z;for(let Z=0,J=v.length;Z<J;Z++){const le=v[Z];if(le.cacheKey===C){z=le,++z.usedTimes;break}}return z===void 0&&(z=new cM(s,C,T,l),v.push(z)),z}function U(T){if(--T.usedTimes===0){const C=v.indexOf(T);v[C]=v[v.length-1],v.pop(),T.destroy()}}function O(T){h.remove(T)}function G(){h.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:H,releaseProgram:U,releaseShaderCache:O,programs:v,dispose:G}}function mM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function gM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_,x,y,M,A,S){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:A,group:S},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=M,g.renderOrder=_.renderOrder,g.z=A,g.group=S),e++,g}function f(_,x,y,M,A,S){const g=c(_,x,y,M,A,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):t.push(g)}function h(_,x,y,M,A,S){const g=c(_,x,y,M,A,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):t.unshift(g)}function m(_,x){t.length>1&&t.sort(_||gM),r.length>1&&r.sort(x||Im),a.length>1&&a.sort(x||Im)}function v(){for(let _=e,x=s.length;_<x;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:v,sort:m}}function vM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Um,s.set(r,[c])):a>=l.length?(c=new Um,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function _M(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new St};break;case"SpotLight":t={position:new Y,direction:new Y,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function xM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let yM=0;function SM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EM(s){const e=new _M,t=xM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,l=new zt,c=new zt;function f(m){let v=0,_=0,x=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let y=0,M=0,A=0,S=0,g=0,D=0,L=0,P=0,H=0,U=0,O=0;m.sort(SM);for(let T=0,C=m.length;T<C;T++){const z=m[T],Z=z.color,J=z.intensity,le=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=Z.r*J,_+=Z.g*J,x+=Z.b*J;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],J);O++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,V=t.get(z);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.directionalShadow[y]=V,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=z.shadow.matrix,D++}r.directional[y]=ae,y++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(Z).multiplyScalar(J),ae.distance=le,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[A]=ae;const ce=z.shadow;if(z.map&&(r.spotLightMap[H]=z.map,H++,ce.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[A]=ce.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.spotShadow[A]=V,r.spotShadowMap[A]=fe,P++}A++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(Z).multiplyScalar(J),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ae,S++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,V=t.get(z);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=z.shadow.matrix,L++}r.point[M]=ae,M++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(J),ae.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[g]=ae,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==y||G.pointLength!==M||G.spotLength!==A||G.rectAreaLength!==S||G.hemiLength!==g||G.numDirectionalShadows!==D||G.numPointShadows!==L||G.numSpotShadows!==P||G.numSpotMaps!==H||G.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+H-U,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,G.directionalLength=y,G.pointLength=M,G.spotLength=A,G.rectAreaLength=S,G.hemiLength=g,G.numDirectionalShadows=D,G.numPointShadows=L,G.numSpotShadows=P,G.numSpotMaps=H,G.numLightProbes=O,r.version=yM++)}function h(m,v){let _=0,x=0,y=0,M=0,A=0;const S=v.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),_++}else if(L.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),A++}}}return{setup:f,setupView:h,state:r}}function Fm(s){const e=new EM(s),t=[],r=[];function a(v){m.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function MM(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Fm(s),e.set(a,[f])):l>=c.length?(f=new Fm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`;function AM(s,e,t){let r=new $f;const a=new Ge,l=new Ge,c=new Lt,f=new $0({depthPacking:$_}),h=new K0,m={},v=t.maxTextureSize,_={[Sr]:In,[In]:Sr,[Bi]:Bi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:TM,fragmentShader:wM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new Zn;M.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wn(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zm;let g=this.type;this.render=function(U,O,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const T=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(xr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const J=g!==zi&&this.type===zi,le=g===zi&&this.type!==zi;for(let fe=0,ae=U.length;fe<ae;fe++){const ce=U[fe],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ue=V.getFrameExtents();if(a.multiply(ue),l.copy(V.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ue.x),a.x=l.x*ue.x,V.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ue.y),a.y=l.y*ue.y,V.mapSize.y=l.y)),V.map===null||J===!0||le===!0){const F=this.type!==zi?{minFilter:ci,magFilter:ci}:{};V.map!==null&&V.map.dispose(),V.map=new Jr(a.x,a.y,F),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const oe=V.getViewportCount();for(let F=0;F<oe;F++){const re=V.getViewport(F);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),Z.viewport(c),V.updateMatrices(ce,F),r=V.getFrustum(),P(O,G,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&D(V,G),V.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(T,C,z)};function D(U,O){const G=e.update(A);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Jr(a.x,a.y)),x.uniforms.shadow_pass.value=U.map.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,G,x,A,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,G,y,A,null)}function L(U,O,G,T){let C=null;const z=G.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)C=z;else if(C=G.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Z=C.uuid,J=O.uuid;let le=m[Z];le===void 0&&(le={},m[Z]=le);let fe=le[J];fe===void 0&&(fe=C.clone(),le[J]=fe,O.addEventListener("dispose",H)),C=fe}if(C.visible=O.visible,C.wireframe=O.wireframe,T===zi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=s.properties.get(C);Z.light=G}return C}function P(U,O,G,T,C){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===zi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,U.matrixWorld);const J=e.update(U),le=U.material;if(Array.isArray(le)){const fe=J.groups;for(let ae=0,ce=fe.length;ae<ce;ae++){const V=fe[ae],ue=le[V.materialIndex];if(ue&&ue.visible){const oe=L(U,ue,T,C);U.onBeforeShadow(s,U,O,G,J,oe,V),s.renderBufferDirect(G,null,J,oe,U,V),U.onAfterShadow(s,U,O,G,J,oe,V)}}}else if(le.visible){const fe=L(U,le,T,C);U.onBeforeShadow(s,U,O,G,J,fe,null),s.renderBufferDirect(G,null,J,fe,U,null),U.onAfterShadow(s,U,O,G,J,fe,null)}}const Z=U.children;for(let J=0,le=Z.length;J<le;J++)P(Z[J],O,G,T,C)}function H(U){U.target.removeEventListener("dispose",H);for(const G in m){const T=m[G],C=U.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const CM={[tf]:nf,[rf]:af,[sf]:lf,[Hs]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:Hs};function RM(s,e){function t(){let q=!1;const Ce=new Lt;let se=null;const pe=new Lt(0,0,0,0);return{setMask:function(Le){se!==Le&&!q&&(s.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){q=Le},setClear:function(Le,be,st,It,$t){$t===!0&&(Le*=It,be*=It,st*=It),Ce.set(Le,be,st,It),pe.equals(Ce)===!1&&(s.clearColor(Le,be,st,It),pe.copy(Ce))},reset:function(){q=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let q=!1,Ce=!1,se=null,pe=null,Le=null;return{setReversed:function(be){if(Ce!==be){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){se!==be&&!q&&(s.depthMask(be),se=be)},setFunc:function(be){if(Ce&&(be=CM[be]),pe!==be){switch(be){case tf:s.depthFunc(s.NEVER);break;case nf:s.depthFunc(s.ALWAYS);break;case rf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case sf:s.depthFunc(s.EQUAL);break;case of:s.depthFunc(s.GEQUAL);break;case af:s.depthFunc(s.GREATER);break;case lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=be}},setLocked:function(be){q=be},setClear:function(be){Le!==be&&(Ce&&(be=1-be),s.clearDepth(be),Le=be)},reset:function(){q=!1,se=null,pe=null,Le=null,Ce=!1}}}function a(){let q=!1,Ce=null,se=null,pe=null,Le=null,be=null,st=null,It=null,$t=null;return{setTest:function(xt){q||(xt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!q&&(s.stencilMask(xt),Ce=xt)},setFunc:function(xt,An,xn){(se!==xt||pe!==An||Le!==xn)&&(s.stencilFunc(xt,An,xn),se=xt,pe=An,Le=xn)},setOp:function(xt,An,xn){(be!==xt||st!==An||It!==xn)&&(s.stencilOp(xt,An,xn),be=xt,st=An,It=xn)},setLocked:function(xt){q=xt},setClear:function(xt){$t!==xt&&(s.clearStencil(xt),$t=xt)},reset:function(){q=!1,Ce=null,se=null,pe=null,Le=null,be=null,st=null,It=null,$t=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,g=null,D=null,L=null,P=null,H=null,U=null,O=new St(0,0,0),G=0,T=!1,C=null,z=null,Z=null,J=null,le=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),ae=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ae=ce>=2);let ue=null,oe={};const F=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ie=new Lt().fromArray(F),ee=new Lt().fromArray(re);function de(q,Ce,se,pe){const Le=new Uint8Array(4),be=s.createTexture();s.bindTexture(q,be),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<se;st++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return be}const Me={};Me[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Hs),pt(!1),ct(Op),xe(s.CULL_FACE),B(xr);function xe(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function we(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Ue(q,Ce){return _[q]!==Ce?(s.bindFramebuffer(q,Ce),_[q]=Ce,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ce),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(q,Ce){let se=y,pe=!1;if(q){se=x.get(Ce),se===void 0&&(se=[],x.set(Ce,se));const Le=q.textures;if(se.length!==Le.length||se[0]!==s.COLOR_ATTACHMENT0){for(let be=0,st=Le.length;be<st;be++)se[be]=s.COLOR_ATTACHMENT0+be;se.length=Le.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function Rt(q){return M!==q?(s.useProgram(q),M=q,!0):!1}const gt={[qr]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[E_]:s.FUNC_REVERSE_SUBTRACT};gt[M_]=s.MIN,gt[T_]=s.MAX;const Nt={[w_]:s.ZERO,[A_]:s.ONE,[C_]:s.SRC_COLOR,[Qc]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[P_]:s.DST_ALPHA,[R_]:s.ONE_MINUS_SRC_COLOR,[ef]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[b_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[U_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[O_]:s.ONE_MINUS_CONSTANT_ALPHA};function B(q,Ce,se,pe,Le,be,st,It,$t,xt){if(q===xr){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),q!==y_){if(q!==S||xt!==T){if((g!==qr||P!==qr)&&(s.blendEquation(s.FUNC_ADD),g=qr,P=qr),xt)switch(q){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kp:s.blendFunc(s.ONE,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}D=null,L=null,H=null,U=null,O.set(0,0,0),G=0,S=q,T=xt}return}Le=Le||Ce,be=be||se,st=st||pe,(Ce!==g||Le!==P)&&(s.blendEquationSeparate(gt[Ce],gt[Le]),g=Ce,P=Le),(se!==D||pe!==L||be!==H||st!==U)&&(s.blendFuncSeparate(Nt[se],Nt[pe],Nt[be],Nt[st]),D=se,L=pe,H=be,U=st),(It.equals(O)===!1||$t!==G)&&(s.blendColor(It.r,It.g,It.b,$t),O.copy(It),G=$t),S=q,T=!1}function _n(q,Ce){q.side===Bi?we(s.CULL_FACE):xe(s.CULL_FACE);let se=q.side===In;Ce&&(se=!se),pt(se),q.blending===zs&&q.transparent===!1?B(xr):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const pe=q.stencilWrite;f.setTest(pe),pe&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ct(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(q){C!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),C=q)}function ct(q){q!==__?(xe(s.CULL_FACE),q!==z&&(q===Op?s.cullFace(s.BACK):q===x_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=q}function je(q){q!==Z&&(ae&&s.lineWidth(q),Z=q)}function Ct(q,Ce,se){q?(xe(s.POLYGON_OFFSET_FILL),(J!==Ce||le!==se)&&(s.polygonOffset(Ce,se),J=Ce,le=se)):we(s.POLYGON_OFFSET_FILL)}function Ye(q){q?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(q){q===void 0&&(q=s.TEXTURE0+fe-1),ue!==q&&(s.activeTexture(q),ue=q)}function w(q,Ce,se){se===void 0&&(ue===null?se=s.TEXTURE0+fe-1:se=ue);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==q||pe.texture!==Ce)&&(ue!==se&&(s.activeTexture(se),ue=se),s.bindTexture(q,Ce||Me[q]),pe.type=q,pe.texture=Ce)}function Q(){const q=oe[ue];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(q){Ie.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Ie.copy(q))}function Be(q){ee.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),ee.copy(q))}function ft(q,Ce){let se=m.get(Ce);se===void 0&&(se=new WeakMap,m.set(Ce,se));let pe=se.get(q);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,q.name),se.set(q,pe))}function rt(q,Ce){const pe=m.get(Ce).get(q);h.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,q.__bindingPointIndex),h.set(Ce,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ue=null,oe={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,g=null,D=null,L=null,P=null,H=null,U=null,O=new St(0,0,0),G=0,T=!1,C=null,z=null,Z=null,J=null,le=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:xe,disable:we,bindFramebuffer:Ue,drawBuffers:Qe,useProgram:Rt,setBlending:B,setMaterial:_n,setFlipSided:pt,setCullFace:ct,setLineWidth:je,setPolygonOffset:Ct,setScissorTest:Ye,activeTexture:b,bindTexture:w,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ze,texImage3D:Ke,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:At}}function PM(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ge,v=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,w){return y?new OffscreenCanvas(b,w):bl("canvas")}function A(b,w,Q){let me=1;const ve=Ye(b);if((ve.width>Q||ve.height>Q)&&(me=Q/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const he=Math.floor(me*ve.width),We=Math.floor(me*ve.height);_===void 0&&(_=M(he,We));const Ae=w?M(he,We):_;return Ae.width=he,Ae.height=We,Ae.getContext("2d").drawImage(b,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+We+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,w,Q,me,ve=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=w;if(w===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8)),w===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),w===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),w===s.RGBA){const We=ve?Rl:wt.getTransfer(me);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=We===bt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(b,w){let Q;return b?w===null||w===Zr||w===Xs?Q=s.DEPTH24_STENCIL8:w===Vi?Q=s.DEPTH32F_STENCIL8:w===zo&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zr||w===Xs?Q=s.DEPTH_COMPONENT24:w===Vi?Q=s.DEPTH_COMPONENT32F:w===zo&&(Q=s.DEPTH_COMPONENT16),Q}function H(b,w){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==_i?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function U(b){const w=b.target;w.removeEventListener("dispose",U),G(w),w.isVideoTexture&&v.delete(w)}function O(b){const w=b.target;w.removeEventListener("dispose",O),C(w)}function G(b){const w=r.get(b);if(w.__webglInit===void 0)return;const Q=b.source,me=x.get(Q);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&T(b),Object.keys(me).length===0&&x.delete(Q)}r.remove(b)}function T(b){const w=r.get(b);s.deleteTexture(w.__webglTexture);const Q=b.source,me=x.get(Q);delete me[w.__cacheKey],c.memory.textures--}function C(b){const w=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=b.textures;for(let me=0,ve=Q.length;me<ve;me++){const he=r.get(Q[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(Q[me])}r.remove(b)}let z=0;function Z(){z=0}function J(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function le(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function fe(b,w){const Q=r.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&Q.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Q,b,w);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function ae(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){ee(Q,b,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function ce(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){ee(Q,b,w);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function V(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){de(Q,b,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const ue={[ff]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[df]:s.MIRRORED_REPEAT},oe={[ci]:s.NEAREST,[q_]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[_c]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},F={[Z_]:s.NEVER,[i0]:s.ALWAYS,[J_]:s.LESS,[eg]:s.LEQUAL,[Q_]:s.EQUAL,[n0]:s.GEQUAL,[e0]:s.GREATER,[t0]:s.NOTEQUAL};function re(b,w){if(w.type===Vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_i||w.magFilter===_c||w.magFilter===Qa||w.magFilter===Kr||w.minFilter===_i||w.minFilter===_c||w.minFilter===Qa||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ue[w.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ue[w.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ue[w.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,oe[w.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==Qa&&w.minFilter!==Kr||w.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(b,w){let Q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",U));const me=w.source;let ve=x.get(me);ve===void 0&&(ve={},x.set(me,ve));const he=le(w);if(he!==b.__cacheKey){ve[he]===void 0&&(ve[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ve[he].usedTimes++;const We=ve[b.__cacheKey];We!==void 0&&(ve[b.__cacheKey].usedTimes--,We.usedTimes===0&&T(w)),b.__cacheKey=he,b.__webglTexture=ve[he].texture}return Q}function ee(b,w,Q){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Ie(b,w),he=w.source;t.bindTexture(me,b.__webglTexture,s.TEXTURE0+Q);const We=r.get(he);if(he.version!==We.__version||ve===!0){t.activeTexture(s.TEXTURE0+Q);const Ae=wt.getPrimaries(wt.workingColorSpace),Fe=w.colorSpace===_r?null:wt.getPrimaries(w.colorSpace),ut=w.colorSpace===_r||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ee=A(w.image,!1,a.maxTextureSize);Ee=Ct(w,Ee);const ze=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let et=L(w.internalFormat,ze,Ke,w.colorSpace,w.isVideoTexture);re(me,w);let Be;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,At=We.__version===void 0||ve===!0,q=he.dataReady,Ce=H(w,Ee);if(w.isDepthTexture)et=P(w.format===Ys,w.type),At&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ze,Ke,null));else if(w.isDataTexture)if(ft.length>0){rt&&At&&t.texStorage2D(s.TEXTURE_2D,Ce,et,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Be=ft[se],rt?q&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Be.width,Be.height,ze,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,se,et,Be.width,Be.height,0,ze,Ke,Be.data);w.generateMipmaps=!1}else rt?(At&&t.texStorage2D(s.TEXTURE_2D,Ce,et,Ee.width,Ee.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ze,Ke,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ze,Ke,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,ft[0].width,ft[0].height,Ee.depth);for(let se=0,pe=ft.length;se<pe;se++)if(Be=ft[se],w.format!==ui)if(ze!==null)if(rt){if(q)if(w.layerUpdates.size>0){const Le=dm(Be.width,Be.height,w.format,w.type);for(const be of w.layerUpdates){const st=Be.data.subarray(be*Le/Be.data.BYTES_PER_ELEMENT,(be+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,be,Be.width,Be.height,1,ze,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Be.width,Be.height,Ee.depth,ze,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,et,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Be.width,Be.height,Ee.depth,ze,Ke,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,et,Be.width,Be.height,Ee.depth,0,ze,Ke,Be.data)}else{rt&&At&&t.texStorage2D(s.TEXTURE_2D,Ce,et,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Be=ft[se],w.format!==ui?ze!==null?rt?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,se,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Be.width,Be.height,ze,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,se,et,Be.width,Be.height,0,ze,Ke,Be.data)}else if(w.isDataArrayTexture)if(rt){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,et,Ee.width,Ee.height,Ee.depth),q)if(w.layerUpdates.size>0){const se=dm(Ee.width,Ee.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Ee.data.subarray(pe*se/Ee.data.BYTES_PER_ELEMENT,(pe+1)*se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,ze,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Ke,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,ze,Ke,Ee.data);else if(w.isData3DTexture)rt?(At&&t.texStorage3D(s.TEXTURE_3D,Ce,et,Ee.width,Ee.height,Ee.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Ke,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,ze,Ke,Ee.data);else if(w.isFramebufferTexture){if(At)if(rt)t.texStorage2D(s.TEXTURE_2D,Ce,et,Ee.width,Ee.height);else{let se=Ee.width,pe=Ee.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(s.TEXTURE_2D,Le,et,se,pe,0,ze,Ke,null),se>>=1,pe>>=1}}else if(ft.length>0){if(rt&&At){const se=Ye(ft[0]);t.texStorage2D(s.TEXTURE_2D,Ce,et,se.width,se.height)}for(let se=0,pe=ft.length;se<pe;se++)Be=ft[se],rt?q&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ze,Ke,Be):t.texImage2D(s.TEXTURE_2D,se,et,ze,Ke,Be);w.generateMipmaps=!1}else if(rt){if(At){const se=Ye(Ee);t.texStorage2D(s.TEXTURE_2D,Ce,et,se.width,se.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ke,Ee)}else t.texImage2D(s.TEXTURE_2D,0,et,ze,Ke,Ee);S(w)&&g(me),We.__version=he.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function de(b,w,Q){if(w.image.length!==6)return;const me=Ie(b,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Q);const he=r.get(ve);if(ve.version!==he.__version||me===!0){t.activeTexture(s.TEXTURE0+Q);const We=wt.getPrimaries(wt.workingColorSpace),Ae=w.colorSpace===_r?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===_r||We===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let pe=0;pe<6;pe++)!ut&&!Ee?ze[pe]=A(w.image[pe],!0,a.maxCubemapSize):ze[pe]=Ee?w.image[pe].image:w.image[pe],ze[pe]=Ct(w,ze[pe]);const Ke=ze[0],et=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ft=L(w.internalFormat,et,Be,w.colorSpace),rt=w.isVideoTexture!==!0,At=he.__version===void 0||me===!0,q=ve.dataReady;let Ce=H(w,Ke);re(s.TEXTURE_CUBE_MAP,w);let se;if(ut){rt&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,Ke.width,Ke.height);for(let pe=0;pe<6;pe++){se=ze[pe].mipmaps;for(let Le=0;Le<se.length;Le++){const be=se[Le];w.format!==ui?et!==null?rt?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,et,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,et,Be,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,et,Be,be.data)}}}else{if(se=w.mipmaps,rt&&At){se.length>0&&Ce++;const pe=Ye(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze[pe].width,ze[pe].height,et,Be,ze[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,ze[pe].width,ze[pe].height,0,et,Be,ze[pe].data);for(let Le=0;Le<se.length;Le++){const st=se[Le].image[pe].image;rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,st.width,st.height,0,et,Be,st.data)}}else{rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Be,ze[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,et,Be,ze[pe]);for(let Le=0;Le<se.length;Le++){const be=se[Le];rt?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,et,Be,be.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,et,Be,be.image[pe])}}}S(w)&&g(s.TEXTURE_CUBE_MAP),he.__version=ve.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Me(b,w,Q,me,ve,he){const We=l.convert(Q.format,Q.colorSpace),Ae=l.convert(Q.type),Fe=L(Q.internalFormat,We,Ae,Q.colorSpace),ut=r.get(w),Ee=r.get(Q);if(Ee.__renderTarget=w,!ut.__hasExternalTextures){const ze=Math.max(1,w.width>>he),Ke=Math.max(1,w.height>>he);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,Fe,ze,Ke,w.depth,0,We,Ae,null):t.texImage2D(ve,he,Fe,ze,Ke,0,We,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ct(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,pt(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(b,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,b),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,he=P(w.stencilBuffer,ve),We=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=pt(w);ct(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,he,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,b)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const he=me[ve],We=l.convert(he.format,he.colorSpace),Ae=l.convert(he.type),Fe=L(he.internalFormat,We,Ae,he.colorSpace),ut=pt(w);Q&&ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Fe,w.width,w.height):ct(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ve=me.__webglTexture,he=pt(w);if(w.depthTexture.format===Bs)ct(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Ys)ct(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const w=r.get(b),Q=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,b)}else if(Q){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[me],b,!1);else{const ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(b,w,Q){const me=r.get(b);w!==void 0&&Me(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ue(b)}function Rt(b){const w=b.texture,Q=r.get(b),me=r.get(w);b.addEventListener("dispose",O);const ve=b.textures,he=b.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,c.memory.textures++),he){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Q.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ut=r.get(ve[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&ct(b)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];Q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const ut=l.convert(Fe.format,Fe.colorSpace),Ee=l.convert(Fe.type),ze=L(Fe.internalFormat,ut,Ee,Fe.colorSpace,b.isXRRenderTarget===!0),Ke=pt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ze,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Q.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Me(Q.__webglFramebuffer[Ae][Fe],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Me(Q.__webglFramebuffer[Ae],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ut=ve[Ae],Ee=r.get(ut);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),re(s.TEXTURE_2D,ut),Me(Q.__webglFramebuffer,b,ut,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(ut)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),re(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Me(Q.__webglFramebuffer[Fe],b,w,s.COLOR_ATTACHMENT0,Ae,Fe);else Me(Q.__webglFramebuffer,b,w,s.COLOR_ATTACHMENT0,Ae,0);S(w)&&g(Ae),t.unbindTexture()}b.depthBuffer&&Ue(b)}function gt(b){const w=b.textures;for(let Q=0,me=w.length;Q<me;Q++){const ve=w[Q];if(S(ve)){const he=D(b),We=r.get(ve).__webglTexture;t.bindTexture(he,We),g(he),t.unbindTexture()}}}const Nt=[],B=[];function _n(b){if(b.samples>0){if(ct(b)===!1){const w=b.textures,Q=b.width,me=b.height;let ve=s.COLOR_BUFFER_BIT;const he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(b),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=r.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,ve,s.NEAREST),h===!0&&(Nt.length=0,B.length=0,Nt.push(s.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Nt.push(he),B.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const w=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const w=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(b){const w=c.render.frame;v.get(b)!==w&&(v.set(b,w),b.update())}function Ct(b,w){const Q=b.colorSpace,me=b.format,ve=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Q!==qs&&Q!==_r&&(wt.getTransfer(Q)===bt?(me!==ui||ve!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=Qe,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ct}function bM(s,e){function t(r,a=_r){let l;const c=wt.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Gm)return s.BYTE;if(r===Wm)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Hf)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===Ym)return s.ALPHA;if(r===qm)return s.RGB;if(r===ui)return s.RGBA;if(r===jm)return s.LUMINANCE;if(r===$m)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Ys)return s.DEPTH_STENCIL;if(r===Km)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===Zm)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===El||r===Ml||r===Tl||r===wl)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===El)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===El)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hf||r===pf||r===mf||r===gf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===hf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===_f||r===xf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===vf||r===_f)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===xf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yf||r===Sf||r===Ef||r===Mf||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Nf||r===Df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===yf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Af)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Df)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===If||r===Uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Al)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===If)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jm||r===Ff||r===Of||r===kf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Al)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Of)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const LM={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),g=this._getHandJoint(m,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),y=.02,M=.005;m.inputState.pinching&&x>y+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Uo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
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

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Un,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Er({vertexShader:NM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Dl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UM extends $s{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,m=null,v=null,_=null,x=null,y=null,M=null;const A=new IM,S=t.getContextAttributes();let g=null,D=null;const L=[],P=[],H=new Ge;let U=null;const O=new Gn;O.viewport=new Lt;const G=new Gn;G.viewport=new Lt;const T=[O,G],C=new nx;let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=L[ee];return de===void 0&&(de=new Jc,L[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=L[ee];return de===void 0&&(de=new Jc,L[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=L[ee];return de===void 0&&(de=new Jc,L[ee]=de),de.getHandSpace()};function J(ee){const de=P.indexOf(ee.inputSource);if(de===-1)return;const Me=L[de];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,m||c),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function le(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",fe);for(let ee=0;ee<L.length;ee++){const de=P[ee];de!==null&&(P[ee]=null,L[ee].disconnect(de))}z=null,Z=null,A.reset(),e.setRenderTarget(g),y=null,x=null,_=null,a=null,D=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",le),a.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Jr(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let de=null,Me=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?Ys:Bs,Me=S.stencil?Xs:Zr);const we={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};_=new XRWebGLBinding(a,t),x=_.createProjectionLayer(we),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Jr(x.textureWidth,x.textureHeight,{format:ui,type:Wi,depthTexture:new dg(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(f),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function fe(ee){for(let de=0;de<ee.removed.length;de++){const Me=ee.removed[de],xe=P.indexOf(Me);xe>=0&&(P[xe]=null,L[xe].disconnect(Me))}for(let de=0;de<ee.added.length;de++){const Me=ee.added[de];let xe=P.indexOf(Me);if(xe===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=P.length){P.push(Me),xe=Ue;break}else if(P[Ue]===null){P[Ue]=Me,xe=Ue;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Me)}}const ae=new Y,ce=new Y;function V(ee,de,Me){ae.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const xe=ae.distanceTo(ce),we=de.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Qe=we[14]/(we[10]-1),Rt=we[14]/(we[10]+1),gt=(we[9]+1)/we[5],Nt=(we[9]-1)/we[5],B=(we[8]-1)/we[0],_n=(Ue[8]+1)/Ue[0],pt=Qe*B,ct=Qe*_n,je=xe/(-B+_n),Ct=je*-B;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ct),ee.translateZ(je),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ye=Qe+je,b=Rt+je,w=pt-Ct,Q=ct+(xe-Ct),me=gt*Rt/b*Ye,ve=Nt*Rt/b*Ye;ee.projectionMatrix.makePerspective(w,Q,me,ve,Ye,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let de=ee.near,Me=ee.far;A.texture!==null&&(A.depthNear>0&&(de=A.depthNear),A.depthFar>0&&(Me=A.depthFar)),C.near=G.near=O.near=de,C.far=G.far=O.far=Me,(z!==C.near||Z!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,Z=C.far),O.layers.mask=ee.layers.mask|2,G.layers.mask=ee.layers.mask|4,C.layers.mask=O.layers.mask|G.layers.mask;const xe=ee.parent,we=C.cameras;ue(C,xe);for(let Ue=0;Ue<we.length;Ue++)ue(we[Ue],xe);we.length===2?V(C,O,G):C.projectionMatrix.copy(O.projectionMatrix),oe(ee,C,xe)};function oe(ee,de,Me){Me===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=zf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(ee){h=ee,x!==null&&(x.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let F=null;function re(ee,de){if(v=de.getViewerPose(m||c),M=de,v!==null){const Me=v.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let xe=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ue=0;Ue<Me.length;Ue++){const Qe=Me[Ue];let Rt=null;if(y!==null)Rt=y.getViewport(Qe);else{const Nt=_.getViewSubImage(x,Qe);Rt=Nt.viewport,Ue===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let gt=T[Ue];gt===void 0&&(gt=new Gn,gt.layers.enable(Ue),gt.viewport=new Lt,T[Ue]=gt),gt.matrix.fromArray(Qe.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Qe.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(gt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=_.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,a.renderState)}}for(let Me=0;Me<L.length;Me++){const xe=P[Me],we=L[Me];xe!==null&&we!==void 0&&we.update(xe,de,m||c)}F&&F(ee,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ie=new xg;Ie.setAnimationLoop(re),this.setAnimationLoop=function(ee){F=ee},this.dispose=function(){}}}const Wr=new yi,FM=new zt;function OM(s,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,ug(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,D,L,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(S,g):g.isMeshToonMaterial?(l(S,g),_(S,g)):g.isMeshPhongMaterial?(l(S,g),v(S,g)):g.isMeshStandardMaterial?(l(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,P)):g.isMeshMatcapMaterial?(l(S,g),M(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),A(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(c(S,g),g.isLineDashedMaterial&&f(S,g)):g.isPointsMaterial?h(S,g,D,L):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===In&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===In&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,P=D.envMapRotation;L&&(S.envMap.value=L,Wr.copy(P),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),S.envMapRotation.value.setFromMatrix4(FM.makeRotationFromEuler(Wr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function c(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function f(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function h(S,g,D,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*D,S.scale.value=L*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,D){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const D=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function kM(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const P=L.program;r.uniformBlockBinding(D,P)}function m(D,L){let P=a[D.id];P===void 0&&(M(D),P=v(D),a[D.id]=P,D.addEventListener("dispose",S));const H=L.program;r.updateUBOMapping(D,H);const U=e.render.frame;l[D.id]!==U&&(x(D),l[D.id]=U)}function v(D){const L=_();D.__bindingPointIndex=L;const P=s.createBuffer(),H=D.__size,U=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function _(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],P=D.uniforms,H=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let U=0,O=P.length;U<O;U++){const G=Array.isArray(P[U])?P[U]:[P[U]];for(let T=0,C=G.length;T<C;T++){const z=G[T];if(y(z,U,T,H)===!0){const Z=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let fe=0;fe<J.length;fe++){const ae=J[fe],ce=A(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,Z+le,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,L,P,H){const U=D.value,O=L+"_"+P;if(H[O]===void 0)return typeof U=="number"||typeof U=="boolean"?H[O]=U:H[O]=U.clone(),!0;{const G=H[O];if(typeof U=="number"||typeof U=="boolean"){if(G!==U)return H[O]=U,!0}else if(G.equals(U)===!1)return G.copy(U),!0}return!1}function M(D){const L=D.uniforms;let P=0;const H=16;for(let O=0,G=L.length;O<G;O++){const T=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,z=T.length;C<z;C++){const Z=T[C],J=Array.isArray(Z.value)?Z.value:[Z.value];for(let le=0,fe=J.length;le<fe;le++){const ae=J[le],ce=A(ae),V=P%H,ue=V%ce.boundary,oe=V+ue;P+=ue,oe!==0&&H-oe<ce.storage&&(P+=H-oe),Z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=ce.storage}}}const U=P%H;return U>0&&(P+=H-U),D.__size=P,D.__cache={},this}function A(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:m,dispose:g}}class zM{constructor(e={}){const{canvas:t=s0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=yr,this.toneMappingExposure=1;const P=this;let H=!1,U=0,O=0,G=null,T=-1,C=null;const z=new Lt,Z=new Lt;let J=null;const le=new St(0);let fe=0,ae=t.width,ce=t.height,V=1,ue=null,oe=null;const F=new Lt(0,0,ae,ce),re=new Lt(0,0,ae,ce);let Ie=!1;const ee=new $f;let de=!1,Me=!1;const xe=new zt,we=new zt,Ue=new Y,Qe=new Lt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Nt(){return G===null?V:1}let B=r;function _n(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const j="webgl2";if(B=_n(j,R),B===null)throw _n(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,ct,je,Ct,Ye,b,w,Q,me,ve,he,We,Ae,Fe,ut,Ee,ze,Ke,et,Be,ft,rt,At,q;function Ce(){pt=new jS(B),pt.init(),rt=new bM(B,pt),ct=new HS(B,pt,e,rt),je=new RM(B,pt),ct.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),Ct=new ZS(B),Ye=new mM,b=new PM(B,pt,je,Ye,ct,rt,Ct),w=new WS(P),Q=new qS(P),me=new rx(B),At=new BS(B,me),ve=new $S(B,me,Ct,At),he=new QS(B,ve,me,Ct),et=new JS(B,ct,b),Ee=new GS(Ye),We=new pM(P,w,Q,pt,ct,At,Ee),Ae=new OM(P,Ye),Fe=new vM,ut=new MM(pt),Ke=new zS(P,w,Q,je,he,y,h),ze=new AM(P,he,ct),q=new kM(B,Ct,ct,je),Be=new VS(B,pt,Ct),ft=new KS(B,pt,Ct),Ct.programs=We.programs,P.capabilities=ct,P.extensions=pt,P.properties=Ye,P.renderLists=Fe,P.shadowMap=ze,P.state=je,P.info=Ct}Ce();const se=new UM(P,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(ae,ce,!1))},this.getSize=function(R){return R.set(ae,ce)},this.setSize=function(R,j,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,ce=j,t.width=Math.floor(R*V),t.height=Math.floor(j*V),ne===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ae*V,ce*V).floor()},this.setDrawingBufferSize=function(R,j,ne){ae=R,ce=j,V=ne,t.width=Math.floor(R*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,j,ne,ie){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,j,ne,ie),je.viewport(z.copy(F).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,j,ne,ie){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,j,ne,ie),je.scissor(Z.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){je.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,j=!0,ne=!0){let ie=0;if(R){let W=!1;if(G!==null){const Se=G.texture.format;W=Se===qf||Se===Yf||Se===Xf}if(W){const Se=G.texture.type,Re=Se===Wi||Se===Zr||Se===zo||Se===Xs||Se===Gf||Se===Wf,De=Ke.getClearColor(),Oe=Ke.getClearAlpha(),tt=De.r,nt=De.g,qe=De.b;Re?(M[0]=tt,M[1]=nt,M[2]=qe,M[3]=Oe,B.clearBufferuiv(B.COLOR,0,M)):(A[0]=tt,A[1]=nt,A[2]=qe,A[3]=Oe,B.clearBufferiv(B.COLOR,0,A))}else ie|=B.COLOR_BUFFER_BIT}j&&(ie|=B.DEPTH_BUFFER_BIT),ne&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ke.dispose(),Fe.dispose(),ut.dispose(),Ye.dispose(),w.dispose(),Q.dispose(),he.dispose(),At.dispose(),q.dispose(),We.dispose(),se.dispose(),se.removeEventListener("sessionstart",Qr),se.removeEventListener("sessionend",Xi),Ei.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Ct.autoReset,j=ze.enabled,ne=ze.autoUpdate,ie=ze.needsUpdate,W=ze.type;Ce(),Ct.autoReset=R,ze.enabled=j,ze.autoUpdate=ne,ze.needsUpdate=ie,ze.type=W}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const j=R.target;j.removeEventListener("dispose",st),It(j)}function It(R){$t(R),Ye.remove(R)}function $t(R){const j=Ye.get(R).programs;j!==void 0&&(j.forEach(function(ne){We.releaseProgram(ne)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,ie,W,Se){j===null&&(j=Rt);const Re=W.isMesh&&W.matrixWorld.determinant()<0,De=jo(R,j,ne,ie,W);je.setMaterial(ie,Re);let Oe=ne.index,tt=1;if(ie.wireframe===!0){if(Oe=ve.getWireframeAttribute(ne),Oe===void 0)return;tt=2}const nt=ne.drawRange,qe=ne.attributes.position;let ot=nt.start*tt,Et=(nt.start+nt.count)*tt;Se!==null&&(ot=Math.max(ot,Se.start*tt),Et=Math.min(Et,(Se.start+Se.count)*tt)),Oe!==null?(ot=Math.max(ot,0),Et=Math.min(Et,Oe.count)):qe!=null&&(ot=Math.max(ot,0),Et=Math.min(Et,qe.count));const Mt=Et-ot;if(Mt<0||Mt===1/0)return;At.setup(W,ie,De,ne,Oe);let Ot,_t=Be;if(Oe!==null&&(Ot=me.get(Oe),_t=ft,_t.setIndex(Ot)),W.isMesh)ie.wireframe===!0?(je.setLineWidth(ie.wireframeLinewidth*Nt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(W.isLine){let $e=ie.linewidth;$e===void 0&&($e=1),je.setLineWidth($e*Nt()),W.isLineSegments?_t.setMode(B.LINES):W.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else W.isPoints?_t.setMode(B.POINTS):W.isSprite&&_t.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const $e=W._multiDrawStarts,Ht=W._multiDrawCounts,vt=W._multiDrawCount,on=Oe?me.get(Oe).bytesPerElement:1,Jn=Ye.get(ie).currentProgram.getUniforms();for(let yn=0;yn<vt;yn++)Jn.setValue(B,"_gl_DrawID",yn),_t.render($e[yn]/on,Ht[yn])}else if(W.isInstancedMesh)_t.renderInstances(ot,Mt,W.count);else if(ne.isInstancedBufferGeometry){const $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ht=Math.min(ne.instanceCount,$e);_t.renderInstances(ot,Mt,Ht)}else _t.render(ot,Mt)};function xt(R,j,ne){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,es(R,j,ne),R.side=Sr,R.needsUpdate=!0,es(R,j,ne),R.side=Bi):es(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),g=ut.get(ne),g.init(j),L.push(g),ne.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),R!==ne&&R.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ie=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];xt(De,ne,W),ie.add(De)}else xt(Se,ne,W),ie.add(Se)}),L.pop(),g=null,ie},this.compileAsync=function(R,j,ne=null){const ie=this.compile(R,j,ne);return new Promise(W=>{function Se(){if(ie.forEach(function(Re){Ye.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){W(R);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let An=null;function xn(R){An&&An(R)}function Qr(){Ei.stop()}function Xi(){Ei.start()}const Ei=new xg;Ei.setAnimationLoop(xn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){An=R,se.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},se.addEventListener("sessionstart",Qr),se.addEventListener("sessionend",Xi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,j,G),g=ut.get(R,L.length),g.init(j),L.push(g),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(we),Me=this.localClippingEnabled,de=Ee.init(this.clippingPlanes,Me),S=Fe.get(R,D.length),S.init(),D.push(S),se.enabled===!0&&se.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Mi(Se,j,-1/0,P.sortObjects)}Mi(R,j,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(ue,oe),gt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,gt&&Ke.addToRenderList(S,R),this.info.render.frame++,de===!0&&Ee.beginShadows();const ne=g.state.shadowsArray;ze.render(ne,R,j),de===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,W=S.transmissive;if(g.setupLights(),j.isArrayCamera){const Se=j.cameras;if(W.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const Oe=Se[Re];Tr(ie,W,R,Oe)}gt&&Ke.render(R);for(let Re=0,De=Se.length;Re<De;Re++){const Oe=Se[Re];Mr(S,R,Oe,Oe.viewport)}}else W.length>0&&Tr(ie,W,R,j),gt&&Ke.render(R),Mr(S,R,j);G!==null&&(b.updateMultisampleRenderTarget(G),b.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(P,R,j),At.resetDefaultState(),T=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],de===!0&&Ee.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Mi(R,j,ne,ie){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){ie&&Qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Re=he.update(R),De=R.material;De.visible&&S.push(R,Re,De,ne,Qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const Re=he.update(R),De=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qe.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Qe.copy(Re.boundingSphere.center)),Qe.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const Oe=Re.groups;for(let tt=0,nt=Oe.length;tt<nt;tt++){const qe=Oe[tt],ot=De[qe.materialIndex];ot&&ot.visible&&S.push(R,Re,ot,ne,Qe.z,qe)}}else De.visible&&S.push(R,Re,De,ne,Qe.z,null)}}const Se=R.children;for(let Re=0,De=Se.length;Re<De;Re++)Mi(Se[Re],j,ne,ie)}function Mr(R,j,ne,ie){const W=R.opaque,Se=R.transmissive,Re=R.transparent;g.setupLightsView(ne),de===!0&&Ee.setGlobalState(P.clippingPlanes,ne),ie&&je.viewport(z.copy(ie)),W.length>0&&Yi(W,j,ne),Se.length>0&&Yi(Se,j,ne),Re.length>0&&Yi(Re,j,ne),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Tr(R,j,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new Jr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Bo:Wi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[ie.id],Re=ie.viewport||z;Se.setSize(Re.z,Re.w);const De=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(le),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Ke.render(ne);const Oe=P.toneMapping;P.toneMapping=yr;const tt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),de===!0&&Ee.setGlobalState(P.clippingPlanes,ie),Yi(R,ne,ie),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let qe=0,ot=j.length;qe<ot;qe++){const Et=j[qe],Mt=Et.object,Ot=Et.geometry,_t=Et.material,$e=Et.group;if(_t.side===Bi&&Mt.layers.test(ie.layers)){const Ht=_t.side;_t.side=In,_t.needsUpdate=!0,Yo(Mt,ne,ie,Ot,_t,$e),_t.side=Ht,_t.needsUpdate=!0,nt=!0}}nt===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}P.setRenderTarget(De),P.setClearColor(le,fe),tt!==void 0&&(ie.viewport=tt),P.toneMapping=Oe}function Yi(R,j,ne){const ie=j.isScene===!0?j.overrideMaterial:null;for(let W=0,Se=R.length;W<Se;W++){const Re=R[W],De=Re.object,Oe=Re.geometry,tt=ie===null?Re.material:ie,nt=Re.group;De.layers.test(ne.layers)&&Yo(De,j,ne,Oe,tt,nt)}}function Yo(R,j,ne,ie,W,Se){R.onBeforeRender(P,j,ne,ie,W,Se),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(P,j,ne,ie,R,Se),W.transparent===!0&&W.side===Bi&&W.forceSinglePass===!1?(W.side=In,W.needsUpdate=!0,P.renderBufferDirect(ne,j,ie,W,R,Se),W.side=Sr,W.needsUpdate=!0,P.renderBufferDirect(ne,j,ie,W,R,Se),W.side=Bi):P.renderBufferDirect(ne,j,ie,W,R,Se),R.onAfterRender(P,j,ne,ie,W,Se)}function es(R,j,ne){j.isScene!==!0&&(j=Rt);const ie=Ye.get(R),W=g.state.lights,Se=g.state.shadowsArray,Re=W.state.version,De=We.getParameters(R,W.state,Se,j,ne),Oe=We.getProgramCacheKey(De);let tt=ie.programs;ie.environment=R.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(R.isMeshStandardMaterial?Q:w).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",st),tt=new Map,ie.programs=tt);let nt=tt.get(Oe);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Re)return di(R,De),nt}else De.uniforms=We.getUniforms(R),R.onBeforeCompile(De,P),nt=We.acquireProgram(De,Oe),tt.set(Oe,nt),ie.uniforms=De.uniforms;const qe=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Ee.uniform),di(R,De),ie.needsLights=Ul(R),ie.lightsStateVersion=Re,ie.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function qo(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Cl.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function di(R,j){const ne=Ye.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function jo(R,j,ne,ie,W){j.isScene!==!0&&(j=Rt),b.resetTextureUnits();const Se=j.fog,Re=ie.isMeshStandardMaterial?j.environment:null,De=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:qs,Oe=(ie.isMeshStandardMaterial?Q:w).get(ie.envMap||Re),tt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!ne.morphAttributes.position,ot=!!ne.morphAttributes.normal,Et=!!ne.morphAttributes.color;let Mt=yr;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const Ot=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,_t=Ot!==void 0?Ot.length:0,$e=Ye.get(ie),Ht=g.state.lights;if(de===!0&&(Me===!0||R!==C)){const Xt=R===C&&ie.id===T;Ee.setState(ie,R,Xt)}let vt=!1;ie.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ht.state.version||$e.outputColorSpace!==De||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isBatchedMesh&&$e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&$e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&$e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&$e.instancingMorph===!1&&W.morphTexture!==null||$e.envMap!==Oe||ie.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ee.numPlanes||$e.numIntersection!==Ee.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==nt||$e.morphTargets!==qe||$e.morphNormals!==ot||$e.morphColors!==Et||$e.toneMapping!==Mt||$e.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,$e.__version=ie.version);let on=$e.currentProgram;vt===!0&&(on=es(ie,j,W));let Jn=!1,yn=!1,wr=!1;const Pt=on.getUniforms(),Sn=$e.uniforms;if(je.useProgram(on.program)&&(Jn=!0,yn=!0,wr=!0),ie.id!==T&&(T=ie.id,yn=!0),Jn||C!==R){je.buffers.depth.getReversed()?(xe.copy(R.projectionMatrix),a0(xe),l0(xe),Pt.setValue(B,"projectionMatrix",xe)):Pt.setValue(B,"projectionMatrix",R.projectionMatrix),Pt.setValue(B,"viewMatrix",R.matrixWorldInverse);const fn=Pt.map.cameraPosition;fn!==void 0&&fn.setValue(B,Ue.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,yn=!0,wr=!0)}if(W.isSkinnedMesh){Pt.setOptional(B,W,"bindMatrix"),Pt.setOptional(B,W,"bindMatrixInverse");const Xt=W.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Pt.setValue(B,"boneTexture",Xt.boneTexture,b))}W.isBatchedMesh&&(Pt.setOptional(B,W,"batchingTexture"),Pt.setValue(B,"batchingTexture",W._matricesTexture,b),Pt.setOptional(B,W,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",W._indirectTexture,b),Pt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",W._colorsTexture,b));const cn=ne.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&et.update(W,ne,on),(yn||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,Pt.setValue(B,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Sn.envMap.value=Oe,Sn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&j.environment!==null&&(Sn.envMapIntensity.value=j.environmentIntensity),yn&&(Pt.setValue(B,"toneMappingExposure",P.toneMappingExposure),$e.needsLights&&$o(Sn,wr),Se&&ie.fog===!0&&Ae.refreshFogUniforms(Sn,Se),Ae.refreshMaterialUniforms(Sn,ie,V,ce,g.state.transmissionRenderTarget[R.id]),Cl.upload(B,qo($e),Sn,b)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Cl.upload(B,qo($e),Sn,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(B,"center",W.center),Pt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(B,"normalMatrix",W.normalMatrix),Pt.setValue(B,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Xt=ie.uniformsGroups;for(let fn=0,Ar=Xt.length;fn<Ar;fn++){const mt=Xt[fn];q.update(mt,on),q.bind(mt,on)}}return on}function $o(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,j,ne){Ye.get(R.texture).__webglTexture=j,Ye.get(R.depthTexture).__webglTexture=ne;const ie=Ye.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ne=Ye.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ne=0){G=R,U=j,O=ne;let ie=!0,W=null,Se=!1,Re=!1;if(R){const Oe=Ye.get(R);if(Oe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Oe.__hasExternalTextures)b.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if(Oe.__boundDepthTexture!==qe){if(qe!==null&&Ye.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const nt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?W=nt[j][ne]:W=nt[j],Se=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?W=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[ne]:W=nt,z.copy(R.viewport),Z.copy(R.scissor),J=R.scissorTest}else z.copy(F).multiplyScalar(V).floor(),Z.copy(re).multiplyScalar(V).floor(),J=Ie;if(je.bindFramebuffer(B.FRAMEBUFFER,W)&&ie&&je.drawBuffers(R,W),je.viewport(z),je.scissor(Z),je.setScissorTest(J),Se){const Oe=Ye.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,ne)}else if(Re){const Oe=Ye.get(R.texture),tt=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,ne||0,tt)}T=-1},this.readRenderTargetPixels=function(R,j,ne,ie,W,Se,Re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){je.bindFramebuffer(B.FRAMEBUFFER,De);try{const Oe=R.texture,tt=Oe.format,nt=Oe.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ie&&ne>=0&&ne<=R.height-W&&B.readPixels(j,ne,ie,W,rt.convert(tt),rt.convert(nt),Se)}finally{const Oe=G!==null?Ye.get(G).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,j,ne,ie,W,Se,Re){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Oe=R.texture,tt=Oe.format,nt=Oe.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-ie&&ne>=0&&ne<=R.height-W){je.bindFramebuffer(B.FRAMEBUFFER,De);const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(j,ne,ie,W,rt.convert(tt),rt.convert(nt),0);const ot=G!==null?Ye.get(G).__webglFramebuffer:null;je.bindFramebuffer(B.FRAMEBUFFER,ot);const Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await o0(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(qe),B.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ne=0){R.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const ie=Math.pow(2,-ne),W=Math.floor(R.image.width*ie),Se=Math.floor(R.image.height*ie),Re=j!==null?j.x:0,De=j!==null?j.y:0;b.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ne,0,0,Re,De,W,Se),je.unbindTexture()};const Ko=B.createFramebuffer(),Zo=B.createFramebuffer();this.copyTextureToTexture=function(R,j,ne=null,ie=null,W=0,Se=null){R.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,R=arguments[1],j=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(W!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Re,De,Oe,tt,nt,qe,ot,Et,Mt;const Ot=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(ne!==null)Re=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,tt=ne.min.x,nt=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const cn=Math.pow(2,-W);Re=Math.floor(Ot.width*cn),De=Math.floor(Ot.height*cn),R.isDataArrayTexture?Oe=Ot.depth:R.isData3DTexture?Oe=Math.floor(Ot.depth*cn):Oe=1,tt=0,nt=0,qe=0}ie!==null?(ot=ie.x,Et=ie.y,Mt=ie.z):(ot=0,Et=0,Mt=0);const _t=rt.convert(j.format),$e=rt.convert(j.type);let Ht;j.isData3DTexture?(b.setTexture3D(j,0),Ht=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Ht=B.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Ht=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=B.getParameter(B.UNPACK_ROW_LENGTH),on=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Jn=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),wr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qe);const Pt=R.isDataArrayTexture||R.isData3DTexture,Sn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const cn=Ye.get(R),Xt=Ye.get(j),fn=Ye.get(cn.__renderTarget),Ar=Ye.get(Xt.__renderTarget);je.bindFramebuffer(B.READ_FRAMEBUFFER,fn.__webglFramebuffer),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let mt=0;mt<Oe;mt++)Pt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,W,qe+mt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ye.get(j).__webglTexture,Se,Mt+mt)),B.blitFramebuffer(tt,nt,Re,De,ot,Et,Re,De,B.DEPTH_BUFFER_BIT,B.NEAREST);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Ye.has(R)){const cn=Ye.get(R),Xt=Ye.get(j);je.bindFramebuffer(B.READ_FRAMEBUFFER,Ko),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,Zo);for(let fn=0;fn<Oe;fn++)Pt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,W,qe+fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,W),Sn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,Se,Mt+fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,Se),W!==0?B.blitFramebuffer(tt,nt,Re,De,ot,Et,Re,De,B.COLOR_BUFFER_BIT,B.NEAREST):Sn?B.copyTexSubImage3D(Ht,Se,ot,Et,Mt+fn,tt,nt,Re,De):B.copyTexSubImage2D(Ht,Se,ot,Et,tt,nt,Re,De);je.bindFramebuffer(B.READ_FRAMEBUFFER,null),je.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ht,Se,ot,Et,Mt,Re,De,Oe,_t,$e,Ot.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,Se,ot,Et,Mt,Re,De,Oe,_t,Ot.data):B.texSubImage3D(Ht,Se,ot,Et,Mt,Re,De,Oe,_t,$e,Ot):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,ot,Et,Re,De,_t,$e,Ot.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,ot,Et,Ot.width,Ot.height,_t,Ot.data):B.texSubImage2D(B.TEXTURE_2D,Se,ot,Et,Re,De,_t,$e,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,on),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jn),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wr),Se===0&&j.generateMipmaps&&B.generateMipmap(Ht),je.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ne=null,ie=null,W=0){return R.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,R=arguments[2],j=arguments[3],W=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ne,ie,W)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){U=0,O=0,G=null,je.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function BM(){const s=sn.useRef(null);return sn.useEffect(()=>{const e=s.current;if(!e)return;const t=new N0;t.background=new St("#e9e0d3");const r=new Gn(35,e.clientWidth/e.clientHeight,.1,100);r.position.set(0,.2,7);const a=new zM({antialias:!0,alpha:!1});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(e.clientWidth,e.clientHeight),a.shadowMap.enabled=!0,a.shadowMap.type=Bm,a.outputColorSpace=Hn,e.appendChild(a.domElement),t.add(new Z0(16777215,9140325,2.1));const l=new tx(16777215,3);l.position.set(3,5,5),l.castShadow=!0,t.add(l);const c=new Q0(13215613,24,15);c.position.set(-4,1,2),t.add(c);const f=new Uo;t.add(f);const h=new _l({color:"#d6c5b0",roughness:.72,metalness:.02}),m=new _l({color:"#292521",roughness:.6}),v=new _l({color:"#b99a70",metalness:.72,roughness:.25}),_=new wn(new Ll(.72,1.25,8,18),h);_.scale.set(.9,1,.43),_.position.y=.15,_.castShadow=!0,f.add(_);const x=new wn(new ed(.17,.2,.42,24),h);x.position.y=1.35,f.add(x);const y=new wn(new td(.48,32,24),m);y.scale.set(.8,1.12,.82),y.position.y=1.9,y.castShadow=!0,f.add(y);const M=new wn(new Ll(.16,1.1,6,12),h);M.position.set(-.88,.1,0),M.rotation.z=-.18,f.add(M);const A=M.clone();A.position.x=.88,A.rotation.z=.18,f.add(A);const S=new wn(new nd(.54,.055,12,48),v);S.position.y=-.55,S.rotation.x=Math.PI/2,S.scale.set(1.25,.72,1),f.add(S);const g=new wn(new Qf(3.2,64),new _l({color:"#d9cbbb",roughness:1}));g.rotation.x=-Math.PI/2,g.position.y=-2.15,g.receiveShadow=!0,t.add(g),f.rotation.y=-.22;let D=0,L=0,P;const H=T=>{const C=e.getBoundingClientRect();D=((T.clientX-C.left)/C.width-.5)*.5,L=((T.clientY-C.top)/C.height-.5)*.25};e.addEventListener("pointermove",H);const U=()=>{P=requestAnimationFrame(U),f.rotation.y+=(D-f.rotation.y*.15)*.025,f.rotation.x+=(-L-f.rotation.x)*.025,f.position.y=Math.sin(Date.now()*8e-4)*.06,a.render(t,r)};U();const O=()=>{const T=e.clientWidth,C=e.clientHeight;r.aspect=T/C,r.updateProjectionMatrix(),a.setSize(T,C)},G=new ResizeObserver(O);return G.observe(e),()=>{cancelAnimationFrame(P),G.disconnect(),e.removeEventListener("pointermove",H),a.dispose(),a.domElement.parentNode===e&&e.removeChild(a.domElement),t.traverse(T=>{T.geometry&&T.geometry.dispose()})}},[]),I.createElement("div",{className:"three-scene",ref:s,"aria-label":"Interactive 3D fashion-inspired sculpture"})}const VM=[{id:1,name:"The Sculpted Blazer",category:"Western",price:2490,tag:"BESTSELLER",image:"photo-1591047139829-d91aecb6caea",tone:"Stone"},{id:2,name:"The Everyday Co-ord",category:"Everyday",price:1890,tag:"NEW",image:"photo-1483985988355-763728e1935b",tone:"Oat"},{id:3,name:"The Modern Kurta Set",category:"Ethnic",price:2190,tag:"JUST ARRIVED",image:"photo-1610030469983-98e550d6193c",tone:"Ivory"},{id:4,name:"The Sunday Dress",category:"Western",price:1990,tag:"EDITOR’S PICK",image:"photo-1539109136881-3be0616acf4b",tone:"Black"},{id:5,name:"The Fusion Layer",category:"Fusion",price:2290,tag:"LIMITED EDIT",image:"photo-1539008835657-9e8e9680c956",tone:"Sand"},{id:6,name:"The Soft Structure Shirt",category:"Everyday",price:1490,tag:"WARDROBE ICON",image:"photo-1598554747436-c9293d6a588f",tone:"Cream"}],HM=[{type:"THE EDIT",title:"A softer kind of statement.",text:"Quiet shapes, considered details and pieces that feel like you.",image:"photo-1529139574466-a303027c1d8b"},{type:"STYLE NOTES",title:"One piece. More possibilities.",text:"Build a wardrobe around pieces that move with your day.",image:"photo-1483985988355-763728e1935b"},{type:"THE PALETTE",title:"Neutrals, never ordinary.",text:"A study in texture, tone and the beauty of restraint.",image:"photo-1490481651871-ab68de25d43d"}],ki=(s,e=900)=>`https://images.unsplash.com/${s}?auto=format&fit=crop&w=${e}&q=85`;function GM(){const[s,e]=sn.useState(!1),[t,r]=sn.useState(!1),[a,l]=sn.useState([]),[c,f]=sn.useState("All"),[h,m]=sn.useState(""),[v,_]=sn.useState(!1),[x,y]=sn.useState(""),[M,A]=sn.useState(null),[S,g]=sn.useState(""),D=["All","Western","Ethnic","Fusion","Everyday"],L=sn.useMemo(()=>VM.filter(T=>(c==="All"||T.category===c)&&T.name.toLowerCase().includes(S.toLowerCase())),[c,S]),P=a.reduce((T,C)=>T+C.qty,0),H=a.reduce((T,C)=>T+C.price*C.qty,0),U=T=>{l(C=>C.find(Z=>Z.id===T.id)?C.map(Z=>Z.id===T.id?{...Z,qty:Z.qty+1}:Z):[...C,{...T,qty:1}]),y(`${T.name} added to your bag`),window.setTimeout(()=>y(""),2600)},O=(T,C)=>l(z=>z.map(Z=>Z.id===T?{...Z,qty:Z.qty+C}:Z).filter(Z=>Z.qty>0)),G=T=>{T.preventDefault(),h.includes("@")&&_(!0)};return I.createElement("div",{className:"site-shell"},I.createElement("div",{className:"announcement"},"A NEW POINT OF VIEW ON EVERYDAY DRESSING ",I.createElement("span",null,"✳")," THE FIRST EDIT IS COMING SOON"),I.createElement("header",{className:"header"},I.createElement("button",{className:"icon-btn mobile-menu",onClick:()=>e(!s),"aria-label":"Open menu"},s?I.createElement(vc,null):I.createElement(g_,null)),I.createElement("a",{className:"wordmark",href:"#home"},"ÉLVARA",I.createElement("span",null,"®"),I.createElement("small",null,"WOMENSWEAR")),I.createElement("nav",{className:s?"nav nav-open":"nav"},I.createElement("a",{href:"#collections",onClick:()=>e(!1)},"COLLECTIONS"),I.createElement("a",{href:"#story",onClick:()=>e(!1)},"OUR STORY"),I.createElement("a",{href:"#journal",onClick:()=>e(!1)},"THE JOURNAL"),I.createElement("a",{href:"#coming",onClick:()=>e(!1)},"COMING SOON")),I.createElement("div",{className:"header-actions"},I.createElement("button",{className:"icon-btn search-toggle",onClick:()=>{var T;return(T=document.getElementById("product-search"))==null?void 0:T.focus()},"aria-label":"Search"},I.createElement(Up,{size:18})),I.createElement("button",{className:"bag-btn",onClick:()=>r(!0)},I.createElement(Fp,{size:17})," ",I.createElement("span",null,"BAG (",P,")")))),I.createElement("main",null,I.createElement("section",{className:"hero",id:"home"},I.createElement("div",{className:"hero-image"}),I.createElement("div",{className:"hero-grain"}),I.createElement("div",{className:"hero-copy"},I.createElement("p",{className:"eyebrow light"},"THE ART OF EVERYDAY ELEGANCE"),I.createElement("h1",null,"Style that",I.createElement("br",null),I.createElement("em",null,"stays")," with you."),I.createElement("p",{className:"hero-description"},"Thoughtful pieces. Modern silhouettes.",I.createElement("br",null),"A wardrobe that feels entirely your own."),I.createElement("a",{href:"#collections",className:"light-cta"},"DISCOVER THE EDIT ",I.createElement(Ni,{size:16}))),I.createElement("div",{className:"hero-side-note"},"A STUDY IN MODERN FEMININITY — VOL. 01"),I.createElement("div",{className:"hero-bottom"},I.createElement("span",null,"01 / 04"),I.createElement("span",null,"WESTERN · ETHNIC · FUSION · EVERYDAY"),I.createElement("a",{href:"#collections"},"SCROLL TO EXPLORE ",I.createElement(h_,{size:14}))),I.createElement("div",{className:"hero-stamp"},"É",I.createElement("br",null),I.createElement("small",null,"V"))),I.createElement("section",{className:"intro section-pad"},I.createElement("div",{className:"intro-label eyebrow"},"A NOTE FROM ÉLVARA"),I.createElement("p",null,"We believe getting dressed should feel less like a decision and more like ",I.createElement("em",null,"coming home to yourself.")),I.createElement("span",{className:"intro-mark"},"✳")),I.createElement("section",{className:"collections section-pad",id:"collections"},I.createElement("div",{className:"section-heading"},I.createElement("div",null,I.createElement("p",{className:"eyebrow"},"CURATED FOR EVERY VERSION OF YOU"),I.createElement("h2",null,"The wardrobe, ",I.createElement("em",null,"reimagined."))),I.createElement("p",{className:"heading-note"},"Pieces to take you from slow mornings",I.createElement("br",null),"to wherever the day leads.")),I.createElement("div",{className:"collection-grid"},I.createElement("a",{className:"collection-card collection-large",href:"#products",onClick:()=>f("Western"),style:{backgroundImage:`url(${ki("photo-1539109136881-3be0616acf4b",1200)})`}},I.createElement("span",null,"01 / WESTERN"),I.createElement("b",null,"Modern",I.createElement("br",null),"silhouettes"),I.createElement("i",null,"EXPLORE ",I.createElement(Ni,{size:15}))),I.createElement("a",{className:"collection-card",href:"#products",onClick:()=>f("Ethnic"),style:{backgroundImage:`url(${ki("photo-1610030469983-98e550d6193c",900)})`}},I.createElement("span",null,"02 / ETHNIC"),I.createElement("b",null,"Rooted in",I.createElement("br",null),"expression"),I.createElement("i",null,"EXPLORE ",I.createElement(Ni,{size:15}))),I.createElement("a",{className:"collection-card",href:"#products",onClick:()=>f("Fusion"),style:{backgroundImage:`url(${ki("photo-1539008835657-9e8e9680c956",900)})`}},I.createElement("span",null,"03 / FUSION"),I.createElement("b",null,"Worlds in",I.createElement("br",null),"conversation"),I.createElement("i",null,"EXPLORE ",I.createElement(Ni,{size:15}))),I.createElement("a",{className:"collection-card",href:"#products",onClick:()=>f("Everyday"),style:{backgroundImage:`url(${ki("photo-1483985988355-763728e1935b",900)})`}},I.createElement("span",null,"04 / EVERYDAY"),I.createElement("b",null,"Effortless",I.createElement("br",null),"by nature"),I.createElement("i",null,"EXPLORE ",I.createElement(Ni,{size:15}))))),I.createElement("section",{className:"product-section section-pad",id:"products"},I.createElement("div",{className:"section-heading"},I.createElement("div",null,I.createElement("p",{className:"eyebrow"},"THE FIRST EDIT · VOL. 01"),I.createElement("h2",null,"Considered ",I.createElement("em",null,"essentials."))),I.createElement("p",{className:"heading-note"},"A first look at the pieces",I.createElement("br",null),"we can't stop thinking about.")),I.createElement("div",{className:"product-tools"},I.createElement("div",{className:"filters"},D.map(T=>I.createElement("button",{key:T,className:c===T?"filter active":"filter",onClick:()=>f(T)},T))),I.createElement("label",{className:"search-box"},I.createElement(Up,{size:15}),I.createElement("input",{id:"product-search",value:S,onChange:T=>g(T.target.value),placeholder:"Find a piece"}))),I.createElement("div",{className:"product-grid"},L.map(T=>I.createElement("article",{className:"product-card",key:T.id},I.createElement("button",{className:"product-image",onClick:()=>A(T),"aria-label":`View ${T.name}`},I.createElement("img",{src:ki(T.image,850),alt:T.name}),I.createElement("span",{className:"product-tag"},T.tag),I.createElement("span",{className:"quick-view"},"QUICK VIEW ",I.createElement(Ni,{size:13}))),I.createElement("div",{className:"product-info"},I.createElement("div",null,I.createElement("h3",null,T.name),I.createElement("p",null,T.category," · ",T.tone)),I.createElement("strong",null,"₹",T.price.toLocaleString("en-IN"))),I.createElement("button",{className:"add-btn",onClick:()=>U(T)},"ADD TO BAG ",I.createElement(gc,{size:14}))))),L.length===0&&I.createElement("p",{className:"empty"},"No pieces found. Try another search."),I.createElement("p",{className:"demo-note"},"PREVIEW COLLECTION — SAMPLE PRODUCTS AND PRICES FOR DESIGN DEMONSTRATION.")),I.createElement("section",{className:"story",id:"story"},I.createElement("div",{className:"story-image"},I.createElement("img",{src:ki("photo-1525507119028-ed4c629a60a3",1200),alt:"ÉLVARA editorial wardrobe"})),I.createElement("div",{className:"story-copy"},I.createElement("p",{className:"eyebrow"},"THE ÉLVARA PERSPECTIVE"),I.createElement("h2",null,"Not more.",I.createElement("br",null),I.createElement("em",null,"More meaningful.")),I.createElement("p",null,"ÉLVARA is a celebration of personal style — where contemporary western dressing meets the richness of Indian expression. We bring together the pieces, textures and details that make a wardrobe feel considered, versatile and truly yours."),I.createElement("a",{href:"#coming",className:"text-link"},"GET TO KNOW US ",I.createElement(Ni,{size:15})),I.createElement("div",{className:"story-sign"},"ÉLVARA ",I.createElement("span",null,"— THE EVERYDAY EDIT")))),I.createElement("section",{className:"three-section section-pad"},I.createElement("div",{className:"three-copy"},I.createElement("p",{className:"eyebrow"},"A DIFFERENT DIMENSION"),I.createElement("h2",null,"Form meets",I.createElement("br",null),I.createElement("em",null,"feeling.")),I.createElement("p",null,"Explore our interactive 3D-inspired brand sculpture. Move your pointer across the scene to shift its perspective."),I.createElement("span",{className:"drag-hint"},"↔ MOVE YOUR POINTER TO INTERACT")),I.createElement(BM,null),I.createElement("div",{className:"three-caption"},"ÉLVARA OBJECT STUDY / 001")),I.createElement("section",{className:"journal section-pad",id:"journal"},I.createElement("div",{className:"section-heading"},I.createElement("div",null,I.createElement("p",{className:"eyebrow"},"INSPIRATION, IN EVERY DETAIL"),I.createElement("h2",null,"The ",I.createElement("em",null,"journal."))),I.createElement("span",{className:"journal-count"},"NOTES ON PERSONAL STYLE — 001")),I.createElement("div",{className:"journal-grid"},HM.map((T,C)=>I.createElement("article",{className:"journal-card",key:T.title},I.createElement("a",{href:"#coming",className:"journal-img"},I.createElement("img",{src:ki(T.image,850),alt:T.title}),I.createElement("span",null,"0",C+1)),I.createElement("p",{className:"eyebrow"},T.type),I.createElement("h3",null,T.title),I.createElement("p",null,T.text),I.createElement("a",{className:"read-link",href:"#coming"},"READ THE NOTE ",I.createElement(Ni,{size:13})))))),I.createElement("section",{className:"coming",id:"coming"},I.createElement("div",{className:"coming-image"}),I.createElement("div",{className:"coming-content"},I.createElement("p",{className:"eyebrow light"},"THE FIRST CHAPTER IS ALMOST HERE"),I.createElement("h2",null,"Something",I.createElement("br",null),I.createElement("em",null,"beautiful"),I.createElement("br",null),"is on its way."),I.createElement("p",null,"Be first to discover the ÉLVARA first edit. Leave your email for a launch note when we are ready."),v?I.createElement("div",{className:"success"},I.createElement(Ip,{size:18})," YOU’RE ON THE LIST. THANK YOU."):I.createElement("form",{className:"signup",onSubmit:G},I.createElement("input",{type:"email",required:!0,value:h,onChange:T=>m(T.target.value),placeholder:"Your email address"}),I.createElement("button",{type:"submit","aria-label":"Join waitlist"},I.createElement(p_,null))),I.createElement("small",null,"NO SPAM. JUST A NOTE WHEN THE TIME IS RIGHT.")),I.createElement("div",{className:"coming-side"},"COMING SOON · INDIA")),I.createElement("section",{className:"social section-pad"},I.createElement("p",{className:"eyebrow"},"FOLLOW THE STORY"),I.createElement("h2",null,"Find us in the ",I.createElement("em",null,"everyday.")),I.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",className:"social-link"},I.createElement(m_,{size:17})," @ELVARA.LABEL ",I.createElement(Ni,{size:15})))),I.createElement("footer",{className:"footer"},I.createElement("div",{className:"footer-top"},I.createElement("a",{className:"wordmark footer-logo",href:"#home"},"ÉLVARA",I.createElement("span",null,"®"),I.createElement("small",null,"WOMENSWEAR")),I.createElement("p",null,"Elegance in every detail.",I.createElement("br",null),"A new point of view on everyday dressing."),I.createElement("a",{href:"#home",className:"back-top"},"BACK TO TOP ↑")),I.createElement("div",{className:"footer-bottom"},I.createElement("span",null,"© 2026 ÉLVARA. BRAND CONCEPT PREVIEW."),I.createElement("span",null,"AN INDEPENDENT FASHION LABEL CONCEPT"),I.createElement("span",null,"MADE WITH INTENTION."))),t&&I.createElement("div",{className:"overlay",onClick:()=>r(!1)},I.createElement("aside",{className:"cart-drawer",onClick:T=>T.stopPropagation()},I.createElement("div",{className:"drawer-head"},I.createElement("div",null,I.createElement("p",{className:"eyebrow"},"YOUR SELECTION"),I.createElement("h2",null,"Shopping bag (",P,")")),I.createElement("button",{className:"icon-btn",onClick:()=>r(!1)},I.createElement(vc,null))),a.length===0?I.createElement("div",{className:"empty-bag"},I.createElement(Fp,{size:32}),I.createElement("p",null,"Your bag is waiting for something lovely."),I.createElement("button",{className:"dark-btn",onClick:()=>r(!1)},"CONTINUE EXPLORING")):I.createElement(I.Fragment,null,I.createElement("div",{className:"cart-items"},a.map(T=>I.createElement("div",{className:"cart-item",key:T.id},I.createElement("img",{src:ki(T.image,240),alt:T.name}),I.createElement("div",{className:"cart-item-info"},I.createElement("h3",null,T.name),I.createElement("p",null,"₹",T.price.toLocaleString("en-IN")),I.createElement("div",{className:"qty"},I.createElement("button",{onClick:()=>O(T.id,-1)},I.createElement(v_,{size:12})),I.createElement("span",null,T.qty),I.createElement("button",{onClick:()=>O(T.id,1)},I.createElement(gc,{size:12})))),I.createElement("strong",null,"₹",(T.price*T.qty).toLocaleString("en-IN"))))),I.createElement("div",{className:"cart-total"},I.createElement("span",null,"SUBTOTAL"),I.createElement("strong",null,"₹",H.toLocaleString("en-IN"))),I.createElement("p",{className:"demo-note"},"DEMO BAG ONLY — CHECKOUT IS NOT ENABLED.")))),M&&I.createElement("div",{className:"overlay",onClick:()=>A(null)},I.createElement("div",{className:"quick-modal",onClick:T=>T.stopPropagation()},I.createElement("button",{className:"modal-close icon-btn",onClick:()=>A(null)},I.createElement(vc,null)),I.createElement("img",{src:ki(M.image,900),alt:M.name}),I.createElement("div",{className:"modal-copy"},I.createElement("p",{className:"eyebrow"},M.category," · ",M.tone),I.createElement("h2",null,M.name),I.createElement("strong",null,"₹",M.price.toLocaleString("en-IN")),I.createElement("p",null,"A considered wardrobe piece from the ÉLVARA preview edit. Product details, fabric and size availability will be confirmed before launch."),I.createElement("button",{className:"dark-btn",onClick:()=>{U(M),A(null)}},"ADD TO BAG ",I.createElement(gc,{size:14}))))),x&&I.createElement("div",{className:"toast"},I.createElement(Ip,{size:15}),x))}u_.createRoot(document.getElementById("root")).render(I.createElement(I.StrictMode,null,I.createElement(GM,null)));
