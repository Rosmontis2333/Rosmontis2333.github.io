var h=Object.defineProperty;var S=(s,e,a)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var c=(s,e,a)=>S(s,typeof e!="symbol"?e+"":e,a);import{d as v}from"./config-CtLrAUPm.js";import{B as y,j as g,k as C,D as R,E as w,l as T,m as x,F as M,K as D,R as E,S as _,n as P,T as V,p as B,q as O,s as k,u as H,v as N,w as A,x as I,y as j,z,A as F,G as U,H as $,I as q,J as l,L as K,g as d,M as W,c as X,a as G,N as L,O as Q,P as J,Q as Y,U as Z,W as ee,X as ae,b as p,Y as se,Z as te,d as u,$ as oe,a0 as re,a1 as ne,a2 as ie,a3 as ce,a4 as le,a5 as de,a6 as pe,a7 as ue,a8 as me,a9 as be,aa as fe,ab as he,ac as Se,ad as ve,ae as ye,h as ge,af as Ce,ag as Re,ah as we,ai as Te,aj as xe,ak as Me,al as De,am as Ee,an as _e,ao as Pe,ap as Ve,aq as Be,ar as Oe,as as ke,at as He,au as Ne,av as Ae,aw as Ie,ax as je,ay as ze,az as Fe,aA as Ue,aB as $e,aC as qe,aD as Ke,aE as We,aF as Xe,aG as Ge,aH as Le,aI as Qe,aJ as Je,aK as Ye,aL as Ze,aM as ea,aN as aa,aO as sa,aP as ta,aQ as oa,aR as ra,aS as na,o as m,aT as ia,aU as ca,aV as la,aW as da,aX as pa,aY as ua,aZ as ma,a_ as ba,a$ as fa,b0 as ha,e as Sa,b1 as va,r as b,b2 as ya,b3 as ga,b4 as Ca,b5 as Ra,b6 as wa,b7 as Ta,b8 as xa,b9 as Ma,ba as Da,bb as Ea,bc as _a,bd as Pa,be as Va,t as Ba,bf as Oa,bg as ka,bh as Ha,bi as Na,bj as Aa,bk as Ia,bl as ja,bm as za,bn as Fa,bo as Ua,bp as $a,bq as qa,br as Ka,bs as Wa,bt as Xa,bu as Ga,bv as La,bw as Qa,bx as Ja,by as Ya,bz as Za,bA as es,bB as as,bC as ss,bD as ts,bE as os,bF as rs,bG as ns,bH as is,bI as cs,bJ as ls,bK as ds,bL as ps,bM as us,bN as ms,bO as bs,bP as fs,bQ as hs,bR as Ss,bS as vs,V as ys,f as gs,C as Cs,_ as Rs}from"./index-DO5hmdsr.js";/**
* vue v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ws=()=>{},Ts=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:y,BaseTransitionPropsValidators:g,Comment:C,DeprecationTypes:R,EffectScope:w,ErrorCodes:T,ErrorTypeStrings:x,Fragment:M,KeepAlive:D,ReactiveEffect:E,Static:_,Suspense:P,Teleport:V,Text:B,TrackOpTypes:O,Transition:k,TransitionGroup:H,TriggerOpTypes:N,VueElement:A,assertNumber:I,callWithAsyncErrorHandling:j,callWithErrorHandling:z,camelize:F,capitalize:U,cloneVNode:$,compatUtils:q,compile:ws,computed:l,createApp:K,createBlock:d,createCommentVNode:W,createElementBlock:X,createElementVNode:G,createHydrationRenderer:L,createPropsRestProxy:Q,createRenderer:J,createSSRApp:Y,createSlots:Z,createStaticVNode:ee,createTextVNode:ae,createVNode:p,customRef:se,defineAsyncComponent:te,defineComponent:u,defineCustomElement:oe,defineEmits:re,defineExpose:ne,defineModel:ie,defineOptions:ce,defineProps:le,defineSSRCustomElement:de,defineSlots:pe,devtools:ue,effect:me,effectScope:be,getCurrentInstance:fe,getCurrentScope:he,getCurrentWatcher:Se,getTransitionRawChildren:ve,guardReactiveProps:ye,h:ge,handleError:Ce,hasInjectionContext:Re,hydrate:we,hydrateOnIdle:Te,hydrateOnInteraction:xe,hydrateOnMediaQuery:Me,hydrateOnVisible:De,initCustomFormatter:Ee,initDirectivesForSSR:_e,inject:Pe,isMemoSame:Ve,isProxy:Be,isReactive:Oe,isReadonly:ke,isRef:He,isRuntimeOnly:Ne,isShallow:Ae,isVNode:Ie,markRaw:je,mergeDefaults:ze,mergeModels:Fe,mergeProps:Ue,nextTick:$e,normalizeClass:qe,normalizeProps:Ke,normalizeStyle:We,onActivated:Xe,onBeforeMount:Ge,onBeforeUnmount:Le,onBeforeUpdate:Qe,onDeactivated:Je,onErrorCaptured:Ye,onMounted:Ze,onRenderTracked:ea,onRenderTriggered:aa,onScopeDispose:sa,onServerPrefetch:ta,onUnmounted:oa,onUpdated:ra,onWatcherCleanup:na,openBlock:m,popScopeId:ia,provide:ca,proxyRefs:la,pushScopeId:da,queuePostFlushCb:pa,reactive:ua,readonly:ma,ref:ba,registerRuntimeCompiler:fa,render:ha,renderList:Sa,renderSlot:va,resolveComponent:b,resolveDirective:ya,resolveDynamicComponent:ga,resolveFilter:Ca,resolveTransitionHooks:Ra,setBlockTracking:wa,setDevtoolsHook:Ta,setTransitionHooks:xa,shallowReactive:Ma,shallowReadonly:Da,shallowRef:Ea,ssrContextKey:_a,ssrUtils:Pa,stop:Va,toDisplayString:Ba,toHandlerKey:Oa,toHandlers:ka,toRaw:Ha,toRef:Na,toRefs:Aa,toValue:Ia,transformVNodeArgs:ja,triggerRef:za,unref:Fa,useAttrs:Ua,useCssModule:$a,useCssVars:qa,useHost:Ka,useId:Wa,useModel:Xa,useSSRContext:Ga,useShadowRoot:La,useSlots:Qa,useTemplateRef:Ja,useTransitionState:Ya,vModelCheckbox:Za,vModelDynamic:es,vModelRadio:as,vModelSelect:ss,vModelText:ts,vShow:os,version:rs,warn:ns,watch:is,watchEffect:cs,watchPostEffect:ls,watchSyncEffect:ds,withAsyncContext:ps,withCtx:us,withDefaults:ms,withDirectives:bs,withKeys:fs,withMemo:hs,withModifiers:Ss,withScopeId:vs},Symbol.toStringTag,{value:"Module"})),xs=u({name:"MDX",props:{code:{type:String,required:!0},margins:{type:Boolean,required:!1}},setup(s){const e=l(()=>{if(!s.code)return null;const a=new Function("exports","Vue",s.code),t={};return a(t,Ts),t.default});return()=>{var a;return p("div",{class:"markdown-content",style:s.margins?{margin:"10px min(4vw, 40px)"}:{}},[(a=e.value)==null?void 0:a.call(e,{components:{}})])}}});var Ms=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,f=(s,e,a,t)=>{for(var o=t>1?void 0:t?Ds(e,a):e,n=s.length-1,r;n>=0;n--)(r=s[n])&&(o=(t?r(e,a,o):r(o))||o);return t&&o&&Ms(e,a,o),o};let i=class extends ys{constructor(){super(...arguments);c(this,"name");c(this,"computedCode","")}created(){fetch(v+this.name+".json").then(a=>a.text()).then(a=>{this.computedCode=a})}};f([gs({required:!0})],i.prototype,"name",2);i=f([Cs({components:{MDX:xs}})],i);function Es(s,e,a,t,o,n){const r=b("MDX");return m(),d(r,{code:s.computedCode,class:"markdown"},null,8,["code"])}const Os=Rs(i,[["render",Es]]);export{Os as default};
