(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_17_0__articulate_design-system-to-d9b441"],{18324(li){var wa="Expected a function",Me=NaN,Ot="[object Symbol]",Aa=/^\s+|\s+$/g,Lo=/^[-+]0x[0-9a-f]+$/i,jr=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,Ca=parseInt,ot=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,ka=typeof self=="object"&&self&&self.Object===Object&&self,Sa=ot||ka||Function("return this")(),ze=Object.prototype,Zt=ze.toString,za=Math.max,Ro=Math.min,Kt=function(){return Sa.Date.now()};function hr(F,be,nt){var Dt,L,_e,Ct,Fe,He,qt=0,Ea=!1,n=!1,y=!0;if(typeof F!="function")throw new TypeError(wa);be=Lr(be)||0,Yt(nt)&&(Ea=!!nt.leading,n="maxWait"in nt,_e=n?za(Lr(nt.maxWait)||0,be):_e,y="trailing"in nt?!!nt.trailing:y);function Nt(se){var pt=Dt,Xt=L;return Dt=L=void 0,qt=se,Ct=F.apply(Xt,pt),Ct}function Rr(se){return qt=se,Fe=setTimeout(Jt,be),Ea?Nt(se):Ct}function Mr(se){var pt=se-He,Xt=se-qt,Ia=be-pt;return n?Ro(Ia,_e-Xt):Ia}function Br(se){var pt=se-He,Xt=se-qt;return He===void 0||pt>=be||pt<0||n&&Xt>=_e}function Jt(){var se=Kt();if(Br(se))return Ta(se);Fe=setTimeout(Jt,Mr(se))}function Ta(se){return Fe=void 0,y&&Dt?Nt(se):(Dt=L=void 0,Ct)}function s(){Fe!==void 0&&clearTimeout(Fe),qt=0,Dt=He=L=Fe=void 0}function Bo(){return Fe===void 0?Ct:Ta(Kt())}function vr(){var se=Kt(),pt=Br(se);if(Dt=arguments,L=this,He=se,pt){if(Fe===void 0)return Rr(He);if(n)return Fe=setTimeout(Jt,be),Nt(He)}return Fe===void 0&&(Fe=setTimeout(Jt,be)),Ct}return vr.cancel=s,vr.flush=Bo,vr}function Yt(F){var be=typeof F;return!!F&&(be=="object"||be=="function")}function _a(F){return!!F&&typeof F=="object"}function Mo(F){return typeof F=="symbol"||_a(F)&&Zt.call(F)==Ot}function Lr(F){if(typeof F=="number")return F;if(Mo(F))return Me;if(Yt(F)){var be=typeof F.valueOf=="function"?F.valueOf():F;F=Yt(be)?be+"":be}if(typeof F!="string")return F===0?F:+F;F=F.replace(Aa,"");var nt=jr.test(F);return nt||ie.test(F)?Ca(F.slice(2),nt?2:8):Lo.test(F)?Me:+F}li.exports=hr},46275(li,wa,Me){"use strict";Me.r(wa),Me.d(wa,{Arc:()=>iv,ArcAbstractFlexLayouts:()=>be,ArcAbstractGapSizes:()=>_a,ArcAbstractIconSizes:()=>Yt,ArcAbstractOrientations:()=>nt,ArcAbstractPopoverActions:()=>hr,ArcAbstractPopoverModes:()=>Kt,ArcAbstractTextLayouts:()=>F,ArcAbstractTextOverflows:()=>Lr,ArcAbstractTextSizes:()=>Mo,ArcAvatar:()=>tn,ArcAvatarColors:()=>_i,ArcAvatarColorsReserved:()=>Ic,ArcAvatarOverflow:()=>Ed,ArcAvatarOverflowSizes:()=>Pc,ArcAvatarPile:()=>ll,ArcAvatarPileSizes:()=>Bc,ArcAvatarSizes:()=>jc,ArcAvatarText:()=>rn,ArcAvatarTextGapSizes:()=>Lc,ArcAvatarTextOverflows:()=>Rc,ArcAvatarTextSizes:()=>Mc,ArcBadge:()=>Ud,ArcBadgeColors:()=>Pd,ArcBadgeContrasts:()=>Fd,ArcBadgeCount:()=>tu,ArcBadgeCountColors:()=>Od,ArcBadgeCountContrasts:()=>Xd,ArcBadgeCountShapes:()=>Qd,ArcBadgeCountSizes:()=>qd,ArcBadgeCountVariants:()=>Jd,ArcBadgeLayouts:()=>Nd,ArcBadgeSizes:()=>Dd,ArcBadgeVariants:()=>Hd,ArcButton:()=>Te,ArcButtonDeprecatedVariants:()=>ls,ArcButtonHierarchies:()=>Ql,ArcButtonLayouts:()=>Yl,ArcButtonPopoverActions:()=>ed,ArcButtonSchemes:()=>Jl,ArcButtonShadows:()=>Xl,ArcButtonShapes:()=>Zl,ArcButtonSizes:()=>Kl,ArcButtonVariants:()=>ql,ArcCheckbox:()=>ms,ArcCheckboxBar:()=>fu,ArcCheckboxBarLayouts:()=>hu,ArcCheckboxBarOption:()=>pu,ArcCheckboxBarSizes:()=>vu,ArcCheckboxLayouts:()=>cu,ArcCheckboxSizes:()=>lu,ArcCheckboxVariants:()=>du,ArcDropdownMenu:()=>zn,ArcIcon:()=>O,ArcIconText:()=>Ze,ArcIconTextVariants:()=>Tl,ArcInputAction:()=>zu,ArcLabel:()=>ir,ArcLabelContent:()=>sr,ArcLabelLayouts:()=>au,ArcLink:()=>Iu,ArcLinkVariants:()=>Tu,ArcModal:()=>Qu,ArcModalAlert:()=>th,ArcModalAlertDefaults:()=>Et,ArcModalAlertVariants:()=>Mu,ArcModalBackdropColors:()=>Bu,ArcModalBodyPaddings:()=>Pu,ArcModalCloseReasons:()=>Du,ArcModalCommonDefaults:()=>Le,ArcModalCommonVariants:()=>Lu,ArcModalConfirm:()=>_s,ArcModalConfirmDefaults:()=>Ut,ArcModalConfirmVariants:()=>Ru,ArcModalSchemes:()=>ju,ArcModalSizes:()=>Ou,ArcPopover:()=>ta,ArcPopoverActions:()=>ul,ArcPopoverAnchors:()=>nn,ArcPopoverBoundaries:()=>sn,ArcPopoverButton:()=>Jr,ArcPopoverDefaults:()=>Pe,ArcPopoverDensities:()=>Di,ArcPopoverModes:()=>an,ArcPopoverSchemes:()=>on,ArcPopoverVariants:()=>Oi,ArcPopoverVariantsWithOutline:()=>hl,ArcRadio:()=>Es,ArcRadioBar:()=>lh,ArcRadioBarLayouts:()=>ih,ArcRadioBarOption:()=>ch,ArcRadioBarSizes:()=>sh,ArcRadioLayouts:()=>ah,ArcRadioSizes:()=>oh,ArcSelect:()=>Fh,ArcSelectLayouts:()=>uh,ArcSelectSizes:()=>hh,ArcSelectVariants:()=>vh,ArcSwitch:()=>Wh,ArcSwitchLabelPositions:()=>_r,ArcSwitchSizes:()=>Hh,ArcSwitchStates:()=>$e,ArcSystemAIGradients:()=>za,ArcSystemAlignments:()=>ka,ArcSystemColors:()=>Zt,ArcSystemGradients:()=>Ro,ArcSystemHierarchies:()=>Ca,ArcSystemLayouts:()=>ot,ArcSystemLineHeights:()=>Sa,ArcSystemSchemes:()=>Ot,ArcSystemShadows:()=>Aa,ArcSystemShapes:()=>jr,ArcSystemSizes:()=>ze,ArcSystemSurfaces:()=>Lo,ArcSystemVariants:()=>ie,ArcTextAlignments:()=>ev,ArcTextBodyElements:()=>Gs,ArcTextBodySizes:()=>Xh,ArcTextBodyVariants:()=>Qh,ArcTextElements:()=>Zs,ArcTextHeadingElements:()=>Ws,ArcTextHeadingSizes:()=>Yh,ArcTextHeadingVariants:()=>Jh,ArcTextInput:()=>uv,ArcTextInputLayouts:()=>sv,ArcTextInputSizes:()=>cv,ArcTextInputTypes:()=>dv,ArcTextInputVariants:()=>lv,ArcTextKinds:()=>Gh,ArcTextLineHeights:()=>tv,ArcTextSchemes:()=>Zh,ArcTextSubheadingSizes:()=>qh,ArcTextTitleSizes:()=>Kh,ArcToast:()=>dc,ArcToastDefaults:()=>oc,ArcToastPlacements:()=>ac,ArcToastPopoverActions:()=>vv,ArcToastPopoverModes:()=>rc,ArcToastProgressBarVariants:()=>pv,ArcToastSchemes:()=>Xs,ArcToastSeverities:()=>Qs,ArcToastSizes:()=>ec,ArcToastVariants:()=>tc,ArcTooltip:()=>cs,ArcTooltipDefaults:()=>st,SVGLogoArticulate:()=>Zo,SVGLogoProductAI:()=>Ko,SVGLogoProductPeek:()=>Yo,SVGLogoProductReach:()=>qo,SVGLogoProductReview:()=>Jo,SVGLogoProductRise:()=>Xo,SVGLogoProductStoryline:()=>Qo,SVGLogoProductStudio:()=>en,StorageType:()=>ma,adoptStyles:()=>H,anchorNameRegistry:()=>Wr,assignRef:()=>Ct,bindDelegatedEvents:()=>ns,clamp:()=>Fe,createEmptyRect:()=>Mv,css:()=>s,cssFeatures:()=>ln,didElementRectChange:()=>Ea,extractTextFromReactNode:()=>Vr,formatAnchorName:()=>dn,getPreferredAnchorForTooltipId:()=>mn,handlePopover:()=>Hi,handleToast:()=>nc,hasNativeAnchorPositioning:()=>cn,isDifferent:()=>He,isObject:()=>qi,isSame:()=>qt,isString:()=>Da,joinArray:()=>Ur,logError:()=>kl,logMessage:()=>Cl,logWarning:()=>Xi,makeHtmlId:()=>dl,mapDeprecated:()=>Dt,noTailAnchors:()=>Ni,normalizeAnchorName:()=>Gr,pickFromList:()=>L,pickFromListByKeys:()=>_e,resolveTailMetrics:()=>Fi,shareAdoptedStyles:()=>zc,splitString:()=>Ji,syncAnchorName:()=>Vi,unbindDelegatedEvents:()=>Wl,useIsoLayoutEffect:()=>Ba,useStableId:()=>Ge,useStorage:()=>Rv});const Ot=["auto","light","dark","inverse"],Aa=["none","sm","md","lg","xl"],Lo=["primary","secondary","inset","raised","floating"],jr=["circle","square","narrow"],ie=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Ca=["primary","secondary","tertiary","plain","link-style"],ot=["hug","fill","icon","gutter","inline"],ka=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Sa=["inherit","tight","standard","loose"],ze=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Zt=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],za=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Ro=[...za],Kt=["","auto","manual"],hr=["toggle","show","hide"],Yt=["inherit","xl","lg","md","sm","xs"],_a=["inherit","lg","md","sm"],Mo=["inherit","md","sm"],Lr=["inherit","wrap","truncate"],F=["gutter","inline"],be=["hug","fill"],nt=["horizontal","vertical"],Dt=(e,t)=>t[e]||e,L=(e,t)=>e.filter(r=>t.includes(r)),_e=(e,t)=>t.filter(r=>e.includes(r)),Ct=(e,t)=>{e&&(typeof e=="function"?e(t):e.current=t)},Fe=(e,t=0,r=100)=>Math.min(Math.max(e,t),r),He=(e,t)=>e!==t,qt=(e,t)=>e===t,Ea=({a:e,b:t})=>He(e?.top,t?.top)||He(e?.left,t?.left)||He(e?.width,t?.width)||He(e?.height,t?.height);var n=Me(57736),y=Me(26372);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,Rr=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mr=Symbol(),Br=new WeakMap;class Jt{constructor(t,r,a){if(this._$cssResult$=!0,a!==Mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Rr&&t===void 0){const a=r!==void 0&&r.length===1;a&&(t=Br.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Br.set(r,t))}return t}toString(){return this.cssText}}const Ta=e=>new Jt(typeof e=="string"?e:e+"",void 0,Mr),s=(e,...t)=>{const r=e.length===1?e[0]:t.reduce(((a,o,c)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[c+1]),e[0]);return new Jt(r,e,Mr)},Bo=(e,t)=>{if(Rr)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of t){const a=document.createElement("style"),o=Nt.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=r.cssText,e.appendChild(a)}},vr=Rr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const a of t.cssRules)r+=a.cssText;return Ta(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:se,defineProperty:pt,getOwnPropertyDescriptor:Xt,getOwnPropertyNames:Ia,getOwnPropertySymbols:bc,getPrototypeOf:yc}=Object,ja=globalThis,di=ja.trustedTypes,xc=di?di.emptyScript:"",wc=ja.reactiveElementPolyfillSupport,Pr=(e,t)=>e,Po={toAttribute(e,t){switch(t){case Boolean:e=e?xc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ui=(e,t)=>!se(e,t),hi={attribute:!0,type:String,converter:Po,reflect:!1,useDefault:!1,hasChanged:ui};Symbol.metadata??=Symbol("metadata"),ja.litPropertyMetadata??=new WeakMap;class pr extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=hi){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(t,a,r);o!==void 0&&pt(this.prototype,t,o)}}static getPropertyDescriptor(t,r,a){const{get:o,set:c}=Xt(this.prototype,t)??{get(){return this[r]},set(i){this[r]=i}};return{get:o,set(i){const d=o?.call(this);c?.call(this,i),this.requestUpdate(t,d,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hi}static _$Ei(){if(this.hasOwnProperty(Pr("elementProperties")))return;const t=yc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Pr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pr("properties"))){const r=this.properties,a=[...Ia(r),...bc(r)];for(const o of a)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[a,o]of r)this.elementProperties.set(a,o)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const o=this._$Eu(r,a);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const o of a)r.unshift(vr(o))}else t!==void 0&&r.push(vr(t));return r}static _$Eu(t,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){const a=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,a);if(o!==void 0&&a.reflect===!0){const c=(a.converter?.toAttribute!==void 0?a.converter:Po).toAttribute(r,a.type);this._$Em=t,c==null?this.removeAttribute(o):this.setAttribute(o,c),this._$Em=null}}_$AK(t,r){const a=this.constructor,o=a._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const c=a.getPropertyOptions(o),i=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:Po;this._$Em=o;const d=i.fromAttribute(r,c.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(t,r,a){if(t!==void 0){const o=this.constructor,c=this[t];if(a??=o.getPropertyOptions(t),!((a.hasChanged??ui)(c,r)||a.useDefault&&a.reflect&&c===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:o,wrapped:c},i){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??r??this[t]),c!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,c]of a){const{wrapped:i}=c,d=this[o];i!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,c,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((a=>a.hostUpdate?.())),this.update(r)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}}pr.elementStyles=[],pr.shadowRootOptions={mode:"open"},pr[Pr("elementProperties")]=new Map,pr[Pr("finalized")]=new Map,wc?.({ReactiveElement:pr}),(ja.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=globalThis,La=Oo.trustedTypes,vi=La?La.createPolicy("lit-html",{createHTML:e=>e}):void 0,Do="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,No="?"+kt,Ac=`<${No}>`,Qt=document,Or=()=>Qt.createComment(""),Dr=e=>e===null||typeof e!="object"&&typeof e!="function",Fo=Array.isArray,pi=e=>Fo(e)||typeof e?.[Symbol.iterator]=="function",Ho=`[ 	
\f\r]`,Nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fi=/-->/g,$i=/>/g,er=RegExp(`>|${Ho}(?:([^\\s"'>=/]+)(${Ho}*=${Ho}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gi=/'/g,mi=/"/g,bi=/^(?:script|style|textarea|title)$/i,Vo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ov=Vo(1),Dv=Vo(2),Nv=Vo(3),fr=Symbol.for("lit-noChange"),he=Symbol.for("lit-nothing"),yi=new WeakMap,tr=Qt.createTreeWalker(Qt,129);function xi(e,t){if(!Fo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return vi!==void 0?vi.createHTML(t):t}const wi=(e,t)=>{const r=e.length-1,a=[];let o,c=t===2?"<svg>":t===3?"<math>":"",i=Nr;for(let d=0;d<r;d++){const u=e[d];let h,v,f=-1,p=0;for(;p<u.length&&(i.lastIndex=p,v=i.exec(u),v!==null);)p=i.lastIndex,i===Nr?v[1]==="!--"?i=fi:v[1]!==void 0?i=$i:v[2]!==void 0?(bi.test(v[2])&&(o=RegExp("</"+v[2],"g")),i=er):v[3]!==void 0&&(i=er):i===er?v[0]===">"?(i=o??Nr,f=-1):v[1]===void 0?f=-2:(f=i.lastIndex-v[2].length,h=v[1],i=v[3]===void 0?er:v[3]==='"'?mi:gi):i===mi||i===gi?i=er:i===fi||i===$i?i=Nr:(i=er,o=void 0);const $=i===er&&e[d+1].startsWith("/>")?" ":"";c+=i===Nr?u+Ac:f>=0?(a.push(h),u.slice(0,f)+Do+u.slice(f)+kt+$):u+kt+(f===-2?d:$)}return[xi(e,c+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class Fr{constructor({strings:t,_$litType$:r},a){let o;this.parts=[];let c=0,i=0;const d=t.length-1,u=this.parts,[h,v]=wi(t,r);if(this.el=Fr.createElement(h,a),tr.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=tr.nextNode())!==null&&u.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Do)){const p=v[i++],$=o.getAttribute(f).split(kt),w=/([.?@])?(.*)/.exec(p);u.push({type:1,index:c,name:w[2],strings:$,ctor:w[1]==="."?Ci:w[1]==="?"?ki:w[1]==="@"?Si:Hr}),o.removeAttribute(f)}else f.startsWith(kt)&&(u.push({type:6,index:c}),o.removeAttribute(f));if(bi.test(o.tagName)){const f=o.textContent.split(kt),p=f.length-1;if(p>0){o.textContent=La?La.emptyScript:"";for(let $=0;$<p;$++)o.append(f[$],Or()),tr.nextNode(),u.push({type:2,index:++c});o.append(f[p],Or())}}}else if(o.nodeType===8)if(o.data===No)u.push({type:2,index:c});else{let f=-1;for(;(f=o.data.indexOf(kt,f+1))!==-1;)u.push({type:7,index:c}),f+=kt.length-1}c++}}static createElement(t,r){const a=Qt.createElement("template");return a.innerHTML=t,a}}function rr(e,t,r=e,a){if(t===fr)return t;let o=a!==void 0?r._$Co?.[a]:r._$Cl;const c=Dr(t)?void 0:t._$litDirective$;return o?.constructor!==c&&(o?._$AO?.(!1),c===void 0?o=void 0:(o=new c(e),o._$AT(e,r,a)),a!==void 0?(r._$Co??=[])[a]=o:r._$Cl=o),o!==void 0&&(t=rr(e,o._$AS(e,t.values),o,a)),t}class Ai{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:a}=this._$AD,o=(t?.creationScope??Qt).importNode(r,!0);tr.currentNode=o;let c=tr.nextNode(),i=0,d=0,u=a[0];for(;u!==void 0;){if(i===u.index){let h;u.type===2?h=new $r(c,c.nextSibling,this,t):u.type===1?h=new u.ctor(c,u.name,u.strings,this,t):u.type===6&&(h=new zi(c,this,t)),this._$AV.push(h),u=a[++d]}i!==u?.index&&(c=tr.nextNode(),i++)}return tr.currentNode=Qt,o}p(t){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}}class $r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,a,o){this.type=2,this._$AH=he,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rr(this,t,r),Dr(t)?t===he||t==null||t===""?(this._$AH!==he&&this._$AR(),this._$AH=he):t!==this._$AH&&t!==fr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==he&&Dr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Qt.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:a}=t,o=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Fr.createElement(xi(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===o)this._$AH.p(r);else{const c=new Ai(o,this),i=c.u(this.options);c.p(r),this.T(i),this._$AH=c}}_$AC(t){let r=yi.get(t.strings);return r===void 0&&yi.set(t.strings,r=new Fr(t)),r}k(t){Fo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,o=0;for(const c of t)o===r.length?r.push(a=new $r(this.O(Or()),this.O(Or()),this,this.options)):a=r[o],a._$AI(c),o++;o<r.length&&(this._$AR(a&&a._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,o,c){this.type=1,this._$AH=he,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=he}_$AI(t,r=this,a,o){const c=this.strings;let i=!1;if(c===void 0)t=rr(this,t,r,0),i=!Dr(t)||t!==this._$AH&&t!==fr,i&&(this._$AH=t);else{const d=t;let u,h;for(t=c[0],u=0;u<c.length-1;u++)h=rr(this,d[a+u],r,u),h===fr&&(h=this._$AH[u]),i||=!Dr(h)||h!==this._$AH[u],h===he?t=he:t!==he&&(t+=(h??"")+c[u+1]),this._$AH[u]=h}i&&!o&&this.j(t)}j(t){t===he?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ci extends Hr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===he?void 0:t}}class ki extends Hr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==he)}}class Si extends Hr{constructor(t,r,a,o,c){super(t,r,a,o,c),this.type=5}_$AI(t,r=this){if((t=rr(this,t,r,0)??he)===fr)return;const a=this._$AH,o=t===he&&a!==he||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,c=t!==he&&(a===he||o);o&&this.element.removeEventListener(this.name,this,a),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class zi{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){rr(this,t)}}const Fv={M:Do,P:kt,A:No,C:1,L:wi,R:Ai,D:pi,V:rr,I:$r,H:Hr,N:ki,U:Si,B:Ci,F:zi},Cc=Oo.litHtmlPolyfillSupport;Cc?.(Fr,$r),(Oo.litHtmlVersions??=[]).push("3.3.1");const kc=(e,t,r)=>{const a=r?.renderBefore??t;let o=a._$litPart$;if(o===void 0){const c=r?.renderBefore??null;a._$litPart$=o=new $r(t.insertBefore(Or(),c),c,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=globalThis;class Ra extends pr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fr}}Ra._$litElement$=!0,Ra.finalized=!0,Uo.litElementHydrateSupport?.({LitElement:Ra});const Sc=Uo.litElementPolyfillSupport;Sc?.({LitElement:Ra});const Hv={_$AK:(e,t,r)=>{e._$AK(t,r)},_$AL:e=>e._$AL};(Uo.litElementVersions??=[]).push("4.2.1");const Wo={};function H(e,t){if(typeof document<"u"&&t?.styleSheet){const r=Wo[e];Wo[e]=t.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(a=>a!==r),t.styleSheet]}}function zc(e){const t=Object.values(Wo),r=document.adoptedStyleSheets.filter(a=>t.includes(a));if(e.adoptedStyleSheets){const a=r.filter(o=>!e.adoptedStyleSheets.includes(o));e.adoptedStyleSheets=[...e.adoptedStyleSheets,...a]}}const _c=e=>e?.trim().charAt(0)??void 0,Ec=(e,t)=>{let r=0;const a=Math.min(e.length,50);for(let o=0;o<a;o+=1)r=(r+e.charCodeAt(o))%(t??33);return r},Tc=(e,t,r)=>t?.length?e?.trim()===""?r||t[0]:t[Ec(e,t.length)]||r||t[0]:r,_i=L(Zt,["blue","orange","mint","red","yellow","green","maroon","purple"]),Ic=L(Zt,["neutral","white","black"]),Ma=L(ze,["lg","md","sm","xs"]),jc=[...Ma,"profile-sm","profile-md","profile-lg"],Lc=_a,Rc=Lr,Mc=Ma,Bc=Ma,Pc=Ma,x=s`--arc•input•mask`,l=s`--arc•size`,g=s`--arc•space`,G=s`--arc•avatar`,ve=s`${G}•chars`,Go=s`

  &[data-size=lg] {
    ${G}•font•size: var(${l}•16);
    ${G}•size: 2.5em; /* target: 40px @ 100% */
    ${ve}•1: var(${l}•16);
    ${ve}•2: var(${l}•14);
    ${ve}•3: var(${l}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${G}•font•size: var(${l}•14);
    ${G}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${ve}•1: var(${l}•14);
    ${ve}•2: var(${l}•12);
    ${ve}•3: var(${l}•10);
  }

  &[data-size=sm] {
    ${G}•font•size: var(${l}•12);
    ${G}•size: 2em; /* target: 24px @ 100% */
    ${ve}•1: var(${l}•12);
    ${ve}•2: var(${l}•10);
    ${ve}•3: var(${l}•8);
  }

  &[data-size=xs] {
    ${G}•font•size: var(${l}•10);
    ${G}•size: 2em; /* target: 20px @ 100% */
    ${ve}•1: var(${l}•10);
    ${ve}•2: var(${l}•8);
    ${ve}•3: var(${l}•6);
  }

`,Oc=s`

  &[data-size=profile-lg] {
    ${G}•font•size: var(${l}•40);
    ${G}•size: 4em;
  }

  &[data-size=profile-md] {
    ${G}•font•size: var(${l}•32);
    ${G}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${G}•font•size: var(${l}•28);
    ${G}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Ei=s`

  [arc-avatar] {
    ${G}•font•size: inherit;
    ${G}•size: inherit;
    ${ve}•1: inherit;
    ${ve}•2: inherit;
    ${ve}•3: inherit;
  }

`,ar=s`${G}•fg`,Be=s`${G}•bg`,Dc=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${ar}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Be}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Be}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Be}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Be}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Be}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Be}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Be}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Be}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${ar}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Be}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${ar}: var(--arc-color-fg-secondary);
      ${Be}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${ar}: var(--arc-color-mono-black);
      ${Be}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Go}
    ${Oc}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${G}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${G}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${ve}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${ve}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${ve}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${G}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Be}));
      --arc-button-color: var(--arc-avatar-color, var(${ar}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${G}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${ar}: transparent;
        ${Be}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Be});
      color: var(${ar});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${G}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${G}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Nc=({children:e,initial:t,color:r,...a})=>(0,n.jsx)("span",{...a,"data-element":"initial","data-color":r,children:e||t}),Fc=({isLoaded:e,hasError:t,onLoad:r,onError:a,...o})=>{const c=!e&&""||void 0,i=t&&""||void 0,d=!e||t||void 0;return(0,n.jsx)("img",{...o,hidden:d,"data-element":"image","data-not-loaded":c,"data-has-error":i,onLoad:r,onError:a})},Zo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Ko=e=>(0,n.jsxs)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),Yo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),qo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Jo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Xo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Qo=e=>(0,n.jsx)("svg",{...e,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),en=e=>(0,n.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Hc;const Vc="fa-width-auto",Ti="fa-fw",Uc="arc-fw",Ii="arc-aw",Wc=e=>typeof e=="number"?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,Gc={"arc-svg logo-articulate":(0,n.jsx)(Zo,{}),"arc-svg product-ai":(0,n.jsx)(Ko,{}),"arc-svg product-peek":(0,n.jsx)(Yo,{}),"arc-svg product-reach":(0,n.jsx)(qo,{}),"arc-svg product-review":(0,n.jsx)(Jo,{}),"arc-svg product-rise":(0,n.jsx)(Xo,{}),"arc-svg product-storyline":(0,n.jsx)(Qo,{}),"arc-svg product-studio":(0,n.jsx)(en,{})},Wv=e=>e&&e.length>0&&e?.includes("arc-svg")?Gc[e]:Hc("span",{className:e}),ji=e=>{const t=e.includes(Vc),r=e.includes(Ti),a=e.includes(Uc),o=e.includes(Ii);return{hasFaAutoWidth:t,hasFaFixedWidth:r,hasArcFixedWidth:a,hasArcAutoWidth:o}},Li=e=>((0,y.isValidElement)(e)&&e.type===O?e.props.icon:e)??void 0,Ri=e=>{const t=Li(e);if(typeof t!="string")return t;const{hasFaFixedWidth:r,hasArcFixedWidth:a,hasArcAutoWidth:o}=ji(t);return!r&&!a&&!o?`${t} ${Ii}`:t},Zc=e=>{const t=Li(e);if(typeof t!="string")return t;let r=t;const{hasArcFixedWidth:a,hasFaFixedWidth:o}=ji(r);return a&&!o&&(r=`${r} ${Ti}`),r},Kc=s`--arc•icon`,St=s`${Kc}•fg`,Yc=s`
@layer arc-components {

[arc-icon] {
  ${St}: currentcolor;

  color: var(--arc-icon-color, var(${St}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${St}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
/* [arc-icon]:not([hidden]) > [arc-icon] { display: contents; } */

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand] {
    ${St}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${St}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${St}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${St}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error] {
    ${St}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${St}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,qc=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-articulate arc-aw",color:e?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":e?.["aria-label"]||"Articulate Logo"}),Jc=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":e?.["aria-label"]||"Articulate AI Logo",gradient:e?.gradient||"ai"}),Xc=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-peek arc-aw",color:e?.color||"var(--arc-color-logo-peek, #497add)","aria-label":e?.["aria-label"]||"Articulate Peek Logo"}),Qc=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-reach arc-aw",color:e?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":e?.["aria-label"]||"Articulate Reach Logo"}),el=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-review arc-aw",color:e?.color||"var(--arc-color-logo-review, #35b062)","aria-label":e?.["aria-label"]||"Articulate Review Logo"}),tl=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-rise arc-aw",color:e?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":e?.["aria-label"]||"Articulate Rise Logo"}),rl=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-storyline arc-aw",color:e?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":e?.["aria-label"]||"Articulate Storyline Logo"}),al=e=>(0,n.jsx)(O,{...e,icon:"fa-kit fa-product-badge-studio arc-aw",color:e?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":e?.["aria-label"]||"Articulate Studio Logo"}),O=({children:e,icon:t="fa-regular fa-circle-dashed",color:r,size:a,style:o,gradient:c,...i})=>{const d={...o,"--arc-icon-size":Wc(a),"--arc-icon-color":r},u=!!(i["aria-label"]||i["aria-labelledby"]),h=Zc(t),v=typeof h=="string"&&h.length>0?(0,n.jsx)("span",{className:h}):h;return(0,n.jsx)("span",{"aria-hidden":!u||void 0,...i,"arc-icon":"",style:d,"arc-gradient":c,children:e||v})};H("ArcIcon",Yc),O.Articulate=qc,O.AI=Jc,O.Peek=Xc,O.Reach=Qc,O.Review=el,O.Rise=tl,O.Storyline=rl,O.Studio=al,O.SVGArticulate=Zo,O.SVGAI=Ko,O.SVGPeek=Yo,O.SVGReach=qo,O.SVGReview=Jo,O.SVGRise=Xo,O.SVGStoryline=Qo,O.SVGStudio=en;const ol=({children:e,icon:t,color:r,...a})=>(0,n.jsx)("span",{...a,"data-element":"anonymous","data-color":"neutral",children:e||(0,n.jsx)(O,{icon:t})}),Mi="blue",Bi="neutral",nl="fa-solid fa-user arc-aw",tn=(0,y.forwardRef)(({children:e,size:t,color:r,isActive:a=!0,isAnonymous:o,alt:c,src:i,name:d,email:u,...h},v)=>{const[f,p]=(0,y.useState)(!1),[$,w]=(0,y.useState)(!1),k=N=>{p(!0),w(!1),h.onLoad?.(N)},T=N=>{p(!1),w(!0),h.onError?.(N)},M=_c(d||u),_=!!M,I=o||(!f||$)&&!_,S=!I&&!!i&&!$||void 0,z=(I&&Bi||void 0)??(r||void 0)??Tc(String(u||d||void 0),_i,Mi)??Mi,P={src:i,alt:c,isLoaded:f,hasError:$,onLoad:k,onError:T};return(0,y.useEffect)(()=>{I&&p(!1)},[I]),(0,n.jsx)("span",{...h,ref:v,"arc-avatar":"","data-is-inactive":!a||void 0,"data-size":t,"aria-label":(h.title??d??u)||void 0,children:e||(I?(0,n.jsx)(ol,{icon:nl,color:Bi}):(0,n.jsxs)(n.Fragment,{children:[S&&(0,n.jsx)(Fc,{...P}),_&&(0,n.jsx)(Nc,{initial:M,color:z})]}))})});H("ArcAvatar",Dc);const we=s`${G}•text`,or=s`${G}•subtext`,gr=s`${G}•gap`,il=s`
@layer arc-components {

  [arc-avatar-text] {
    ${we}•font•size: var(${l}•14);
    ${or}•font•size: var(${l}•12);
    ${gr}: var(${l}•8);

    ${we}•overflow: unset;
    ${we}•text•overflow: unset;
    ${we}•white•space: unset;

    &[data-overflow=truncate] {
      ${we}•overflow: hidden;
      ${we}•text•overflow: ellipsis;
      ${we}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${we}•font•size: 1em;
      ${or}•font•size: 0.875em;
      ${gr}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${we}•font•size: var(--arc-font-size-14);
      ${or}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${we}•font•size: var(--arc-font-size-14);
      ${or}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${we}•font•size: var(--arc-font-size-14);
      ${or}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${we}•font•size: var(--arc-font-size-12);
      ${or}•font•size: var(--arc-font-size-12);
      ${gr}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${gr}: var(${l}•12); }
    &[data-gap=sm] { ${gr}: var(${l}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${we}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${gr});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${or}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${we}•overflow);
      text-overflow: var(${we}•text•overflow);
      white-space: var(${we}•white•space);
    }
  }

}
`,sl="Anonymous",rn=({children:e,avatar:t={},subtext:r,size:a,gapSize:o,overflow:c,isStrong:i,...d})=>{const u=t.anonymousName||sl,h=t.name||t.email||t.src,v=t.name||t.email,f=t.isAnonymous||!h,p=e||f?u:v,$=o!=="inherit"?o:void 0,w=c!=="inherit"?c:void 0;return(0,n.jsxs)("span",{...d,"arc-avatar-text":"","data-gap":$,"data-overflow":w,"is-strong":i?"":void 0,children:[(0,n.jsx)(tn,{...t,isAnonymous:f,size:a}),(0,n.jsxs)("span",{"data-element":"text",children:[p,r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:r})]})]})]})};H("ArcAvatarText",il);const cl=s`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Go}
    ${Ei}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,ll=({size:e="md",...t})=>(0,n.jsx)("div",{...t,"arc-avatar-pile":"","data-size":e});H("ArcAvatarPile",cl);const Vr=e=>typeof e=="string"?e:typeof e=="number"?e.toString():Array.isArray(e)?e.map(Vr).join(""):(0,y.isValidElement)(e)?Vr(e.props.children):"",Pi={},dl=(e="id")=>{const t=(Pi[e]??0)+1;return Pi[e]=t,`${e}-${t}`},Ge=(e,t="id")=>{const r=(0,y.useId)();return e??`${t}-${r}`},an=[...Kt],on=[...Ot],ul=[...hr],Oi=L(ie,["common"]),hl=L(ie,["ai","brand"]),nn=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],sn=["ignore","flip"],Di=["compact","comfortable"],Ur=(e,t=1/0,r=" ")=>[...e].flat(t)?.filter(Boolean)?.join(r),Pe={popover:an[0],anchorAt:nn[13],boundary:sn[0],tryFallbacks:!1,variant:Oi[0],scheme:on[0],density:Di[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},cn=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),vl=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),ln={canAnchor:cn(),canAnchoredContainers:vl()},Ni=["center","nw-corner","ne-corner","se-corner","sw-corner"],Fi=({canHaveTail:e,tailSize:t})=>{if(!e)return{cssTailVar:"",floatingTailPx:0};const r=Math.abs(Number(t||Pe.tailSize)),a=r>0?r:Pe.tailSize;return{cssTailVar:a===Pe.tailSize?"":`${a}px`,floatingTailPx:a}},Ba=typeof window>"u"?y.useEffect:y.useLayoutEffect,Hi=(e,t="toggle")=>{const r=document.getElementById(e);({toggle:()=>r?.togglePopover(),show:()=>r?.showPopover(),hide:()=>r?.hidePopover()})[t]()},Wr=new WeakMap,dn=e=>{const t=String(e??"").trim();if(t==="none")return"none";let r=t.replace(/[^\w-]/g,"-");for(;r.startsWith("-");)r=r.slice(1);for(;r.endsWith("-");)r=r.slice(0,-1);return r?`--${r}`:"--"},Gr=e=>{const t=dn(e);return t==="none"?null:t},Vi=(e,t)=>{const r=Gr(t);if(!r)return()=>{};let a=Wr.get(e);return a||(a=new Set,Wr.set(e,a)),a.has(r)?()=>{}:(a.add(r),e.style.setProperty("anchor-name",Ur([...a],1/0,", ")),()=>{const o=Wr.get(e);if(o){if(o.delete(r),o.size===0){Wr.delete(e),e.style.removeProperty("anchor-name");return}e.style.setProperty("anchor-name",Ur([...o],1/0,", "))}})},Ui=e=>e==="start"||e==="end"?e:"center",pl=e=>{const t=e.split("-")[0];return t==="top"||t==="right"||t==="bottom"||t==="left"?t:null},Wi=e=>{const t=pl(e),r=Ui(e.split("-")[1]);switch(t){case"top":return{block:"start",inline:r};case"bottom":return{block:"end",inline:r};case"left":return{block:r,inline:"start"};case"right":return{block:r,inline:"end"};default:return{block:"center",inline:"center"}}},Gi=(e,t)=>e!=="center"&&t!=="center"&&e!==t,Zi=(e,t)=>{const r=Wi(e),a=Wi(t),o=Gi(r.block,a.block),c=Gi(r.inline,a.inline);return o&&c?"flip-block-inline":o?"flip-block":c?"flip-inline":""},fl={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Ki=e=>{e.style.removeProperty("top"),e.style.removeProperty("left"),e.style.removeProperty("position"),e.style.removeProperty("margin"),delete e.dataset.fallbacks},$l=[{test:(e,t,r)=>e==="y"&&t.includes("top")&&r.includes("top"),value:-1},{test:(e,t,r)=>e==="y"&&t.includes("top")&&r.includes("bottom"),value:-1},{test:(e,t,r)=>e==="y"&&t.includes("bottom")&&r.includes("top"),value:1},{test:(e,t,r)=>e==="x"&&t.includes("left")&&r.includes("left"),value:-1},{test:(e,t,r)=>e==="x"&&t.includes("left")&&r.includes("right"),value:-1},{test:(e,t,r)=>e==="x"&&t.includes("right")&&r.includes("left"),value:1}],Yi=(e,t,r)=>$l.find(a=>a.test(e,t,r))?.value||0,gl=({anchorEl:e,popoverEl:t,anchorAt:r,tryFallbacks:a,offsetPx:o,tailSizePx:c,hasTail:i,isOpen:d})=>{Ba(()=>{if(!(d&&!cn()&&!!e&&!!t)){t&&Ki(t);return}const h=e,v=t,f=fl[r];let p=!0,$;return(async()=>{try{const{autoUpdate:T,computePosition:M,flip:_,offset:I}=await Me.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Me.bind(Me,40153));if(!p)return;const S=i?Math.max(0,c)*(Math.sqrt(2)/2):0,z=[I(o)];a&&z.push(_({fallbackStrategy:"bestFit"}));const P=async()=>{try{const N=await M(h,v,{placement:f,strategy:"fixed",middleware:z}),W=N.x+S*Yi("x",N.placement,f),J=N.y+S*Yi("y",N.placement,f);if(v.style.left=`${W}px`,v.style.top=`${J}px`,!i||!a){delete v.dataset.fallbacks;return}const ae=Zi(f,N.placement);ae?v.dataset.fallbacks=ae:delete v.dataset.fallbacks}catch{}};$=T(h,v,P),await P()}catch{}})(),()=>{p=!1,$?.(),Ki(v)}},[r,e,i,d,o,t,c,a])},Pa=1,mr=2,ml=[{test:(e,t)=>t.top>=e.bottom+Pa,value:"bottom"},{test:(e,t)=>t.bottom<=e.top-Pa,value:"top"},{test:(e,t)=>t.left>=e.right+Pa,value:"right"},{test:(e,t)=>t.right<=e.left-Pa,value:"left"}],Zr=e=>{delete e.dataset.fallbacks};let un;const bl=()=>(un||(un=Me.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Me.bind(Me,40153))),un),Oa=e=>({x:e.left+e.width/2,y:e.top+e.height/2}),yl=(e,t,r,a)=>{const o=Oa(t),c=Oa(r);if(e==="top"||e==="bottom"){const h=Math.abs(a==="rtl"?r.right-t.right:r.left-t.left),v=Math.abs(a==="rtl"?r.left-t.left:r.right-t.right),f=Math.abs(c.x-o.x);return Math.abs(h-v)<=mr&&f<=mr||f+mr<Math.min(h,v)?"center":h<=v?"start":"end"}const i=Math.abs(r.top-t.top),d=Math.abs(r.bottom-t.bottom),u=Math.abs(c.y-o.y);return Math.abs(i-d)<=mr&&u<=mr||u+mr<Math.min(i,d)?"center":i<=d?"start":"end"},xl=(e,t,r,a)=>{const o=ml.find(u=>u.test(t,r));let c;if(o)c=o.value;else{const u=Oa(t),h=Oa(r),v=h.y-u.y,f=h.x-u.x,p=Math.min(t.height,r.height)*.1;Math.abs(v)>p?c=v>=0?"bottom":"top":c=f>=0?"right":"left"}if(Ui(e.split("-")[1])==="center")return c;const d=yl(c,t,r,a);return`${c}-${d}`},wl=({anchorEl:e,popoverEl:t,anchorAt:r,tryFallbacks:a,isOpen:o,hasTail:c})=>{Ba(()=>{if(!t||!ln.canAnchor)return;if(!c||!a||!o||ln.canAnchoredContainers||!e){Zr(t);return}const i=r;if(i==="center"||i.includes("corner")){Zr(t);return}const d=e,u=t;let h=!0,v;const f=()=>{const $=d.getBoundingClientRect(),w=u.getBoundingClientRect(),k=getComputedStyle(d).direction==="rtl"?"rtl":"ltr",T=xl(i,$,w,k),M=Zi(i,T);i===T?Zr(u):M?u.dataset.fallbacks=M:Zr(u)};return(async()=>{try{const{autoUpdate:w}=await bl();if(!h)return;v=w(d,u,f),f()}catch{}})(),()=>{h=!1,v?.(),Zr(u)}},[r,e,c,o,t,a])},Da=e=>typeof e=="string",qi=e=>e!==null&&typeof e=="object",Ji=(e,t=" ")=>e.split(t).map(r=>r.trim()).filter(Boolean),Al=s`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,hn=(0,y.forwardRef)(({progress:e,...t},r)=>(0,n.jsxs)("svg",{...t,ref:r,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":e??""},children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));hn.displayName="ArcSpinner",H("ArcSpinner",Al);const Cl=(...e)=>console.log(...e),Xi=(...e)=>console.warn(...e),kl=(...e)=>console.error(...e),br=s`--arc•icon•text`,Kr=s`${br}•font•size`,Qi=s`${br}•icon`,vn=s`${br}•text`,es=s`${br}•subtext`,it=s`${br}•fg`,zt=s`${br}•gap`,Ft=s`${Qi}•size`,Na=s`${Qi}•vertical•align`,Yr=s`${vn}•overflow`,Fa=s`${vn}•text•overflow`,Ha=s`${vn}•white•space`,Va=s`${es}•font•size`,ts=s`${es}•fg`,Sl=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${it}: currentcolor;
  }

  &[data-variant=primary] {
    ${it}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${it}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${it}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${it}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${it}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${it}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${it}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${it}: var(--arc-color-fg-critical-mid);
  }

`,zl=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Kr}: 1em;
    ${Va}: 0.75em;
    ${Ft}: 1em;
    ${zt}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Kr}: var(--arc-font-size-14);
    ${Va}: var(--arc-font-size-12);
    ${zt}: var(${g}•3);
  }

  &[data-size=sm] {
    ${Kr}: var(--arc-font-size-12);
    ${Va}: var(--arc-font-size-12);
    ${zt}: var(${g}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${zt}: var(${g}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${zt}: var(${g}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${zt}: var(${g}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${Ft}: var(${l}•24); }
  &[icon-size=lg] { ${Ft}: var(${l}•20); }
  &[icon-size=md] { ${Ft}: var(${l}•16); }
  &[icon-size=sm] { ${Ft}: var(${l}•14); }
  &[icon-size=xs] { ${Ft}: var(${l}•12); }
`,_l=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${ts}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${it}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Ft}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${Yr}: unset;
    ${Fa}: unset;
    ${Ha}: unset;

    ${Na}: calc((var(${Ft}) - var(${Kr})) / -2);

    &:has(svg) { ${Na}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Yr}: visible;
    ${Fa}: unset;
    ${Ha}: normal;

    &[data-overflow=truncate] {
      ${Yr}: hidden;
      ${Fa}: ellipsis;
      ${Ha}: nowrap;
    }
  }

`,El=s`
@layer arc-components {

  [arc-icon-text] {
    ${Sl}
    ${zl}
    ${_l}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Kr}));
    color: var(--arc-icon-text-text-color, var(${it}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${zt}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Yr}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Va}));
        color: var(--arc-icon-text-subtext-color, var(${ts}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Yr}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Fa}));
        white-space: var(--arc-icon-text-white-space, var(${Ha}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${Na}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${zt})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${zt})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${Na}: text-bottom;
      }
    }
  }
}

`,Tl=L(ie,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Ze=({children:e,layout:t="gutter",size:r="inherit",variant:a="inherit",tag:o="span",icon:c,text:i,subtext:d,gradient:u,overflow:h,iconSize:v,gapSize:f,isFlipped:p=!1,isStrong:$=!1,...w})=>{const k=e||i,T=!!c,M=!!k,_=t==="gutter",I=t==="inline",S=T&&(!p||_),z=T&&M&&p&&I,P=!!v&&v!=="inherit",N=P&&Yt.includes(v)?v:void 0,W=P&&!Yt.includes(v)?v:void 0,J=f!=="inherit"?f:void 0,ae=h!=="inherit"?h:void 0,X=Ri(c);return(0,n.jsxs)(o,{...w,"arc-icon-text":"","data-variant":a,"data-layout":t,"data-overflow":ae,"data-size":r,"data-gap":J,"icon-size":N,"is-flipped":p?"":void 0,"is-strong":$?"":void 0,children:[S&&(0,n.jsx)("span",{"data-element":"icon",children:typeof X=="string"?(0,n.jsx)(O,{icon:X,size:W,gradient:u}):X}),M&&(0,n.jsxs)("span",{"data-element":"text",children:[k,!!d&&(_?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:d})]}):(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("span",{"data-element":"subtext",children:d})]}))]}),z&&(0,n.jsx)("span",{"data-element":"icon",children:typeof X=="string"?(0,n.jsx)(O,{icon:X,size:W,gradient:u}):X})]})};H("ArcIconText",El);const st={...Pe,popover:an[2],anchorAt:nn[2],boundary:sn[1],tryFallbacks:!0,scheme:on[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0};let Ua=!1;const Il=100,jl=100;let pn=!0,fn=null;const Ll=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),Rl=e=>e instanceof Element?Ll?e.matches(":focus-visible")===!0:pn:!1,$n=new WeakMap,gn=new WeakMap,Wa=(e,t)=>{const r=e.get(t);r!=null&&(clearTimeout(r),e.delete(t))},rs=(e,t,r,a)=>{const o=window.setTimeout(()=>{a(),e.delete(t)},r);e.set(t,o)},as="[aria-describedby]",Ml=e=>typeof e=="object"&&e!==null&&e.hasAttribute?.("popover")===!0,os=e=>e instanceof HTMLElement&&e.getAttribute("role")==="tooltip"&&Ml(e),Bl=e=>!!e&&(e.tagName==="LABEL"||e.hasAttribute("arc-label")),Pl=e=>e?.match(/\S+/g)??[],mn=e=>{if(typeof document>"u")return null;const t=document.querySelector(`[aria-describedby~="${e}"]`);return t?t.closest("label,[arc-label]")??t:null},Ol=e=>{if(!(e instanceof Element))return null;const t=e.closest?.(as);if(t){const a=t.getAttribute("aria-describedby")??"";if(a)return{anchor:t.closest?.("label,[arc-label]")??t,tooltipId:a}}let r=e;for(;r;){if(Bl(r)){const a=r.querySelector?.(as),o=a?.getAttribute?.("aria-describedby")??"";if(a&&o)return{anchor:r,tooltipId:o}}r=r.parentElement}return null},Dl=e=>{if(!(e instanceof Element))return null;const t=e.closest?.('[role="tooltip"][popover]')??null;return t instanceof HTMLElement?t:null},Nl=e=>e?.id?mn(e.id):null,Fl=e=>{const t=Dl(e),r=Ol(e);if(!r&&t){const d=Nl(t);return!d||!t.id?null:{anchor:d,tooltip:t}}if(!r)return null;const{anchor:a,tooltipId:o}=r;if(!o)return null;const c=Pl(o),i=t??c.map(d=>document.getElementById(d)).find(d=>os(d))??null;return os(i)?{anchor:a,tooltip:i}:null},Hl=(e,t,r)=>{const a=r instanceof Element?r:null;if(!a)return!1;const o=e===a||e.contains(a),c=t===a||t.contains(a);return o||c},Vl=(e,t)=>{if(Wa(gn,e),Wa($n,e),!t){e.isConnected&&e.showPopover?.();return}rs($n,e,Il,()=>{e.isConnected&&e.showPopover?.()})},Ul=(e,t)=>{if(Wa($n,e),Wa(gn,e),!t){e.isConnected&&e.hidePopover?.();return}rs(gn,e,jl,()=>{e.isConnected&&e.hidePopover?.()})},qr=(e,t,r,a)=>{const o=Fl(t);if(!o)return;const{anchor:c,tooltip:i}=o;if(e){Vl(i,a);return}Hl(c,i,r)||Ul(i,a)};let Ga=null,Za=null,Ka=null,Ya=null,qa=null,Ja=null,yr=null;const ns=()=>{Ua||typeof document>"u"||(Ja=e=>{pn=!1,fn=e.target},yr=()=>{fn=null},Ga=e=>qr(!0,e.target,void 0,!0),Za=e=>{Rl(e.target)&&qr(!0,e.target,void 0,!1)},Ka=e=>qr(!1,e.target,e.relatedTarget,!0),Ya=e=>{const t=e.relatedTarget??fn;qr(!1,e.target,t,!1)},qa=e=>{e.key==="Tab"&&(pn=!0),e.key==="Escape"&&qr(!1,e.target,void 0,!1)},document.addEventListener("pointerdown",Ja),document.addEventListener("pointerup",yr),document.addEventListener("pointercancel",yr),document.addEventListener("pointerover",Ga),document.addEventListener("focusin",Za),document.addEventListener("pointerout",Ka),document.addEventListener("focusout",Ya),document.addEventListener("keydown",qa),Ua=!0)},Wl=()=>{if(!Ua||typeof document>"u")return;[["pointerdown",Ja],["pointerup",yr],["pointercancel",yr],["pointerover",Ga],["focusin",Za],["pointerout",Ka],["focusout",Ya],["keydown",qa]].forEach(([t,r])=>{r&&document.removeEventListener(t,r)}),Ga=null,Za=null,Ka=null,Ya=null,qa=null,Ja=null,yr=null,Ua=!1},ct=s`--arc•tooltip`,is=s`${ct}•subtext`,ss=s`${ct}•slot`,Gl=s`
@layer arc-components {
  [arc-tooltip] {
    ${ct}•width: max-content;
    ${ct}•max•width: 20em;
    ${ct}•font•size: var(${l}•12);
    ${ct}•padding: var(${g}•10);
    ${is}•spacing: var(${g}•6);
    ${ss}•margin•top: var(${g}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ct}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ct}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ct}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ct}•padding));

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ct}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${is}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${ss}•margin•top));
    }
  }
}
`,cs=(0,y.forwardRef)(({id:e,children:t,slot:r,isEnabled:a=st.isEnabled,popover:o=st.popover,variant:c=st.variant,anchorAt:i=st.anchorAt,alternateAnchor:d,boundary:u=st.boundary,tryFallbacks:h=st.tryFallbacks,hasTail:v=st.hasTail,offset:f=st.offset,scheme:p=st.scheme,isStrong:$=st.isStrong,text:w,subtext:k,icon:T,isFlipped:M,..._},I)=>{const S=Ge(e,"arc-tooltip"),z=X=>typeof X=="object"&&X!==null&&"tabIndex"in X,P=t,N=!!d;let W=null;(0,y.isValidElement)(P)?W=a?(0,y.cloneElement)(P,{"aria-describedby":S,...z(P.props)&&P.props.tabIndex!=null?{}:{tabIndex:0}}):P:!N&&typeof console<"u"&&Xi("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const J=(0,y.useMemo)(()=>()=>mn(S),[S]),ae=p==="auto"?void 0:p;return(0,y.useEffect)(()=>{if(a)try{ns()}catch{}},[a]),(0,n.jsxs)(n.Fragment,{children:[W,a&&(0,n.jsxs)(ta,{..._,"arc-tooltip":"",scheme:_?.isInverse?"inverse":ae,role:"tooltip",id:S,ref:I,popover:o,anchorAt:i,tryFallbacks:h||u==="flip",variant:c,hasTail:v,offset:f,hidePopoverButton:!0,alternateAnchor:d??J,tag:_?.tag??"span",contentTag:_?.contentTag??"span",children:[w&&(0,n.jsx)(Ze,{"arc-tooltip-content":"",text:w,subtext:k,icon:T,isFlipped:M,isStrong:$,size:"inherit",variant:"inherit"}),r&&(0,n.jsx)("span",{"arc-tooltip-slot-content":"",children:r})]})]})});H("ArcTooltip",Gl);const Zl=L(jr,["circle","square","narrow"]),Kl=L(ze,["xxl","xl","lg","md","sm"]),Yl=L(ot,["hug","fill","icon"]),ql=L(ie,["common","ai","critical","alpha"]),Jl=[...Ot],Xl=[...Aa],ls=L(ie,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Ql=L(Ca,["primary","secondary","tertiary","plain","link-style"]),ed=[...hr],td=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* common-secondary variant floating button */
  --arc-button-common-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-common-secondary-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));
  --arc-button-common-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-common-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* critical-secondary variant floating button */
  --arc-button-critical-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-secondary-floating-bg-active: var(--arc-color-bg-critical-muted);
  --arc-button-critical-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-critical-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* ai-secondary variant floating button */
  --arc-button-ai-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-ai-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-ai-secondary-floating-bg-focus: var(--arc-color-bg-primary);
}
`,rd=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,ad=s`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,m=s`--arc•button`,A=s`${m}•fg`,b=s`${m}•bg`,B=s`${m}•edge`,Ee=s`${m}•border`,xr=s`${m}•outline`,U=s`${m}•spinner`,Ae=s`${m}•icon`,od=s`
  &[data-size=xxl] {
    ${m}•font•size: var(${l}•16);
    ${U}•size: var(${l}•32);
    ${Ae}•size: var(${l}•20);
    ${Ae}•size•large: var(${l}•24);
    ${m}•height: var(${l}•56);
    ${m}•gap: var(${l}•10);
    ${m}•padding•inline: var(${l}•32);
  }

  &[data-size=xl] {
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ae}•size: var(${l}•16);
    ${Ae}•size•large: var(${l}•20);
    ${m}•height: var(${l}•48);
    ${m}•gap: var(${l}•8);
    ${m}•padding•inline: var(${l}•32);
  }

  &[data-size=lg] { /** @default */
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ae}•size: var(${l}•16);
    ${Ae}•size•large: var(${l}•20);
    ${m}•height: var(${l}•40);
    ${m}•gap: var(${l}•8);
    ${m}•padding•inline: var(${l}•20);
  }

  &[data-size=inherit] {
    ${m}•font•size: 1em;
    ${U}•size: 1em;
    ${Ae}•size: 1em;
    ${Ae}•size•large: 1.25em;
    ${m}•gap: 0.5em;
    ${m}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ae}•size: var(${l}•14);
    ${Ae}•size•large: var(${l}•20);
    ${m}•height: var(${l}•32);
    ${m}•gap: var(${l}•6);
    ${m}•padding•inline: var(${l}•16);
  }

  &[data-size=sm] {
    ${m}•font•size: var(${l}•12);
    ${U}•size: var(${l}•14);
    ${Ae}•size: var(${l}•12);
    ${Ae}•size•large: var(${l}•14);
    ${m}•height: var(${l}•24);
    ${m}•gap: var(${l}•4);
    ${m}•padding•inline: var(${l}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${m}•font•size: var(${l}•14);
    ${U}•size: var(${l}•16);
    ${Ae}•size: var(${l}•16);
    ${Ae}•size•large: var(${l}•20);
    ${m}•gap: var(${l}•8);
    ${m}•padding•inline: var(${l}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,nd=s`
  &[data-layout=hug] {
    ${m}•width: auto;
    ${m}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${m}•display: flex;
    ${m}•width: 100%;
    ${m}•content•width: 0;
  }

  &[data-layout=icon] {
    ${m}•aspect•ratio: 1 / 1;
    ${m}•flex: none;
    ${m}•min•width: min-content;
    ${m}•max•width: none;
    ${m}•padding•inline: var(${l}•0);

    &[data-shape=narrow] {
      ${m}•aspect•ratio: auto;
      ${m}•padding•inline: var(${l}•2);
    }
  }

`,id=s`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${A}: inherit;
    ${b}: transparent;
    ${B}: transparent;
    ${A}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &:is(
    [data-variant=common],
    [data-variant=primary],
    [data-variant=primary-inverse]
  ) {
    ${A}: var(--arc-color-fg-on-theme-heavy);
    ${b}: var(--arc-color-bg-theme-heavy);
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-on-theme-mid);
    ${A}•processing: var(--arc-color-fg-on-theme-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-theme-stark);
    ${b}•active: var(--arc-color-bg-theme-mid);
    ${b}•processing: var(--arc-color-bg-theme-stark);
    ${b}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: var(--arc-color-border-theme-heavy);

    ${A}•active: var(--arc-color-fg-secondary);
    ${A}•processing: var(--arc-color-fg-secondary);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-neutral-muted);
    ${b}•active: var(--arc-color-bg-neutral-subtle);
    ${b}•processing: transparent;
    ${b}•disabled: transparent;
    ${b}•focus: var(--arc-color-alpha-white-3);

    ${B}•active: var(--arc-color-border-theme-mid);
    ${B}•processing: var(--arc-color-border-theme-subtle);
    ${B}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}: var(--arc-button-common-secondary-floating-bg);
      ${b}•hover: var(--arc-button-common-secondary-floating-bg-hover);
      ${b}•active: var(--arc-button-common-secondary-floating-bg-active);
      ${b}•processing: var(--arc-button-common-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-common-secondary-floating-bg-focus);
    }

    &[data-layout=icon] {
      ${B}: var(--arc-color-border-mid);
      ${B}•hover: var(--arc-color-border-stark);
      ${B}•focus: var(--arc-color-border-mid);
    }
  }

  &:is(
    [data-variant=tertiary],
    [data-variant=tertiary-inverse]
   ) {
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-secondary);
    ${A}•processing: var(--arc-color-fg-secondary);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-neutral-muted);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-neutral-muted);
    ${b}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-hierarchy=plain] {
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-alpha-heavy);
    ${A}•active: var(--arc-color-alpha-heavy);
    ${A}•processing: var(--arc-color-alpha-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: transparent;
    ${b}•active: transparent;
    ${b}•processing: transparent;
  }

`,sd=s`
  &[data-variant=ai-primary] {
    ${A}: var(--arc-color-fg-on-theme-stark);
    ${b}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${U}•base•color: var(--arc-color-alpha-white-30);

    ${A}•active: var(--arc-color-fg-neutral-mid);
    ${A}•processing: var(--arc-color-fg-on-theme-heavy);
    ${A}•hover: var(--arc-color-fg-on-theme-heavy);

    ${b}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${b}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${b}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${A}: var(--arc-color-fg-primary);
    ${b}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${A}•active: var(--arc-color-fg-neutral-stark);
    ${A}•processing: var(--arc-color-fg-primary);

    ${b}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${b}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•disabled: var(--arc-color-bg-disabled);
    ${b}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${B}: transparent;

    ${A}•disabled: var(--arc-color-fg-disabled);
    ${B}•disabled: var(--arc-color-border-disabled);
  }

`,cd=s`
  &[data-variant=alpha-primary] {
    ${A}: var(--arc-color-mono-black);
    ${b}: var(--arc-color-mono-white);
    ${B}: transparent;

    ${A}•focus: var(--arc-color-mono-black);
    ${A}•active: var(--arc-color-alpha-black-60);
    ${A}•processing: var(--arc-color-mono-black);
    ${A}•disabled: var(--arc-color-alpha-black-60);

    ${b}•hover: var(--arc-color-alpha-white-70);
    ${b}•focus: var(--arc-color-mono-white);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-40);
    ${b}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${A}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${B}: var(--arc-color-alpha-white-80);

    ${A}•active: var(--arc-color-alpha-white-80);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-50);

    ${b}•hover: var(--arc-color-alpha-white-20);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-25);
    ${b}•disabled: transparent;

    ${B}•hover: var(--arc-color-alpha-white-100);
    ${B}•focus: var(--arc-color-alpha-white-80);
    ${B}•active: var(--arc-color-alpha-white-50);
    ${B}•processing: transparent;
    ${B}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant=alpha-tertiary] {
    ${A}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•active: var(--arc-color-alpha-black-60);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-50);

    ${b}•hover: var(--arc-color-alpha-white-20);
    ${b}•focus: var(--arc-color-alpha-white-5);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-20);
    ${b}•disabled: transparent;
  }

  &:is(
    [data-variant=alpha-plain],
    [data-variant=alpha-link-style]
  ) {
    ${A}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-alpha-white-60);
    ${A}•active: var(--arc-color-alpha-white-40);
    ${A}•processing: var(--arc-color-alpha-white-95);
    ${A}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=alpha-] {
    ${U}•base•color: var(--arc-color-alpha-white-30);
  }
`,ld=s`
  &[data-variant=link-style] {
    ${A}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-alpha-heavy);
    ${A}•active: var(--arc-color-alpha-heavy);
    ${A}•processing: var(--arc-color-alpha-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);
  }
`,dd=s`
  &[data-variant=critical-primary] {
    ${A}: var(--arc-color-fg-on-stark);
    ${b}: var(--arc-color-bg-critical-stark);
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-on-heavy);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-critical-heavy);
    ${b}•active: var(--arc-color-bg-critical-heavy);
    ${b}•processing: var(--arc-color-bg-critical-heavy);
    ${b}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${A}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${B}: var(--arc-color-border-critical-stark);

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-button-critical-bg-hover);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-critical-muted);
    ${b}•disabled: transparent;

    ${B}•active: var(--arc-color-border-critical-subtle);
    ${B}•processing: var(--arc-color-border-critical-stark);
    ${B}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}: var(--arc-button-critical-secondary-floating-bg);
      ${b}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${b}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${b}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-tertiary] {
    ${A}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-button-critical-bg-hover);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-critical-subtle);
    ${b}•processing: var(--arc-color-bg-critical-muted);
    ${b}•disabled: transparent;
  }

  &:is(
    [data-variant=critical-plain],
    [data-variant=critical-link-style]
  ) {
    ${A}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${B}: transparent;

    ${A}•hover: var(--arc-color-fg-critical-mid);
    ${A}•active: var(--arc-color-fg-critical-subtle);
    ${A}•processing: var(--arc-color-fg-critical-stark);
    ${A}•disabled: var(--arc-color-fg-disabled);
  }

`,ud=s`
  ${m}•color: var(${A});
  ${m}•background: var(${b});
  ${m}•font•weight: var(--arc-font-weight-600);
  ${m}•padding: 0 var(${m}•padding•inline);
  ${m}•content•opacity: 1;
  ${m}•cursor: var(--arc-button-cursor, pointer);
  ${m}•transition: 0.2s ease-out;

  ${Ee}•color: var(${B});
  ${Ee}: var(--arc-border-width-sm) solid var(${Ee}•color, transparent);

  ${xr}: var(--arc-border-width-md) solid var(${xr}•color, transparent);
  ${xr}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${U}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${U}•circle•color: var(--arc-button-color, var(${U}•base•color, var(--arc-color-alpha-mid)));
  ${U}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${m}•font•weight: normal;
  }

  &[data-variant^=ai-] {
    ${Ee}: var(--arc-border-width-md) solid var(${Ee}•color, transparent);
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    ${Ee}•radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Ee}•radius: var(--arc-border-radius-md);
  }

  &:is(
    [arc-button=custom],
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${m}•padding: unset;
    ${m}•height: unset;
  }

  /* border-radius for plain and link-style informs focus state outline radius */
  &:is(
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${Ee}•radius: var(--arc-border-radius-sm);
  }

  &[data-hierarchy=link-style] {
    ${m}•font•weight: inherit;
    ${m}•text•decoration: none;

    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication ---------------------------------• */

  /** ArcIcon */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(${Ae}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Ae}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${U}•size);
  --arc-spinner-progress-color: var(${U}•progress•color);
  --arc-spinner-circle-color: var(${U}•circle•color);
  --arc-spinner-circle-opacity: var(${U}•circle•opacity);
  --arc-spinner-position: var(${U}•position, absolute);
  --arc-spinner-inset: var(${U}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${U}•translate, -50% -50%);

`,hd=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has(input)
  ) {
    ${m}•position: relative;
  }

  &[is-disabled] {
    ${m}•color: var(${A}•disabled, var(${A}));
    ${m}•background: var(${b}•disabled, var(${b}));
    ${Ee}•color: var(${B}•disabled, var(${B}));
    ${m}•opacity: var(--arc-button-disabled-opacity, unset);
    ${m}•cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${m}•color: var(${A}•hover, var(${A}));
      ${m}•background: var(${b}•hover, var(${b}));
      ${Ee}•color: var(${B}•hover, var(${B}));
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${m}•color: var(${A}•active, var(${A}));
      ${m}•background: var(${b}•active, var(${b}));
      ${Ee}•color: var(${B}•active, var(${B}));
    }
  }

  &[is-processing] {
    ${m}•content•visibility: hidden;
    ${m}•content•opacity: 0;

    /* spinner svg position controls */
    ${U}•position: absolute;
    ${U}•inset: 50% auto auto 50%;
    ${U}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${m}•content•visibility: visible;

    /* spinner svg position controls */
    ${U}•position: relative;
    ${U}•inset: 0;
    ${U}•translate: 0;
    ${U}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${m}•opacity: var(--arc-button-processing-opacity, unset);
    ${m}•cursor: var(--arc-button-processing-cursor, default);

    ${m}•color: var(${A}•processing, var(${A}));
    ${m}•background: var(${b}•processing, var(${b}));
    ${Ee}•color: var(${B}•processing, var(${B}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-hierarchy=plain],
      [data-hierarchy=link-style],
      [arc-scheme=inverse]:not([data-variant*=primary])
    ):not(
      [data-variant^=alpha-]
    ) {
      ${U}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${m}•color: var(${A}•focus, var(${A}));
    ${m}•background: var(${b}•focus, var(${b}));
    ${Ee}•color: var(${B}•focus, var(${B}));
    ${xr}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,vd=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${td}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${od}

    /* LAYOUTS -----------------------------------------------------• */
    ${nd}

    /* VARIANTS ----------------------------------------------------• */
    ${id}
    ${ld}
    ${sd}
    ${cd}
    ${dd}

    /* CORE VARIABLES ----------------------------------------------• */
    ${ud}
    ${hd}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${m}•cursor));
    position: var(--arc-button-position, var(${m}•position, unset));
    transition: var(--arc-button-transition, var(${m}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${m}•font•weight));
    font-size: var(--arc-button-font-size, var(${m}•font•size, inherit));
    padding: var(--arc-button-padding, var(${m}•padding));

    width: var(--arc-button-width, var(${m}•width, auto));
    min-width: var(--arc-button-min-width, var(${m}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${m}•max•width, 100%));

    height: var(--arc-button-height, var(${m}•height, auto));
    min-height: var(--arc-button-min-height, var(${m}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${m}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${m}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${m}•color));
    background: var(--arc-button-background, var(${m}•background));
    border: var(--arc-button-border, var(${Ee}));
    border-radius: var(--arc-button-border-radius, var(${Ee}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${xr}));
    outline-offset: var(--arc-button-outline-offset, var(${xr}•offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* "floating" button mitigation */
    &[arc-shadow] {
      backdrop-filter: blur(0.5em);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(${m}•gap));

      opacity: var(--arc-button-content-opacity, var(${m}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${m}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${m}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${m}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${m}•opacity));
      transition: var(--arc-button-label-transition, var(${m}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${m}•opacity));
      transition: var(--arc-button-icon-transition, var(${m}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${m}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,ds=(0,n.jsx)(hn,{}),Te=(0,y.forwardRef)(({children:e,disabled:t,...r},a)=>{const o=(0,y.useRef)(null),{iconEnd:c,iconStart:i,icon:d,text:u,isActive:h,isDisabled:v,isProcessing:f,isProcessingWithText:p,hasLargeIcon:$,tag:w,href:k,type:T,title:M,layout:_,shape:I,size:S="lg",variant:z="common",hierarchy:P="primary",isInverse:N=!1,scheme:W="auto",shadow:J,_isCustom:ae,...X}=r,ye=w??(k?"a":"button"),me=ye==="button"?T||"button":void 0,Ne=_==="icon",de=p||f||v||t,et=X?.["aria-disabled"]||de||void 0,ne=!Ne&&(e||u),ht=p&&ds||i||d,vt=!Ne&&(p&&!(i||d)?void 0:c),tt=(f||p&&Ne)&&ds,jt=z&&ls.includes(z),Lt=(()=>{if(jt)return z;const Pt=P||"primary";if(z==="ai"){const Pv=["primary","secondary"].includes(Pt)?Pt:"primary";return`${z}-${Pv}`}return Pt==="link-style"?z==="critical"||z==="alpha"?`${z}-${Pt}`:"link-style":z==="common"?Pt:z==="alpha"||z==="critical"?`${z}-${Pt}`:z})(),rt=W==="auto"?void 0:W,V=Lt?.endsWith("-inverse")?"inverse":void 0,xe=N?"inverse":rt??V,ue=J===!0?"lg":J,{tooltip:Re,...xt}=X,wt=Da(Re)?Re:void 0,At=r.tooltip??wt,Wt=!!At,Eo=Da(At)?{text:At}:At,ya=X["aria-describedby"],dr=(0,y.useRef)(void 0),oi=Ge(void 0,"arc-tooltip"),xa=r.id?`${r.id}-tooltip`:oi;Wt&&!dr.current&&(dr.current=xa);const ni=Wt?Ur([ya,dr.current]):ya,{anchorName:ii,style:To,popoverTarget:Gt,popoverTargetAction:Io,...si}=xt,Rt=Gt?Gr(String(ii||r?.id)):void 0,Mt=Wt?Gr(String(xa)):void 0,Bt=qi(To)?To:void 0,Ir=Bt&&"anchorName"in Bt&&Bt.anchorName,ci=[...(Da(Ir)?Ji(Ir,", "):[]).map(Gr),...Rt?[Rt]:[],...Mt?[Mt]:[]],jo=Ur(ci,1/0,", "),Bv={...Bt??{},...jo?{anchorName:jo}:{}};let mc={popoverTarget:Gt||void 0,popoverTargetAction:Io||void 0};return y.version.startsWith("18")&&(mc={popovertarget:Gt||void 0,popovertargetaction:Io||void 0}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ye,{...si,...mc,ref:Pt=>{o.current=Pt,Ct(a,Pt)},"arc-button":ae?"custom":"","arc-scheme":xe,"arc-shadow":ue||void 0,disabled:!k&&de||void 0,href:k||void 0,title:Wt?void 0:M||void 0,type:me,"data-layout":_,"data-shape":ae?void 0:I,"data-size":ae?void 0:S,"data-variant":ae?void 0:Lt,"data-hierarchy":P||void 0,"has-large-icon":$?"":void 0,"is-active":h?"":void 0,"is-processing":f||p&&Ne?"":void 0,"is-processing-with-text":p&&!Ne?"":void 0,"is-disabled":de||et?"":void 0,"aria-disabled":et,"aria-describedby":ni||void 0,style:Bv,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[!!ht&&(0,n.jsx)(O,{"arc-button-icon":"",icon:ht}),!!ne&&(0,n.jsx)("span",{"arc-button-label":"",children:ne}),!!vt&&(0,n.jsx)(O,{"arc-button-icon":"",icon:vt})]}),tt]}),Wt&&(0,n.jsx)(cs,{...Eo,id:dr.current,alternateAnchor:Eo?.alternateAnchor??(()=>o.current),anchorName:Mt})]})});Te.displayName="ArcButton",H("ArcButton",vd);const Jr=(0,y.forwardRef)((e,t)=>(0,n.jsx)(Te,{...e,ref:t,"arc-popover-button":""})),us=({isInverse:e=!1,isOpen:t,...r})=>(0,n.jsx)(Te,{...r,icon:"fa-regular fa-xmark",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:e,"arc-popover-dismiss":""}),pd=({children:e,showDismiss:t,dismissProps:r,tag:a="header",...o})=>(0,n.jsxs)(a,{...o,"arc-popover-header":"",children:[e,t&&(0,n.jsx)(us,{...r})]}),fd=({tag:e="article",...t})=>(0,n.jsx)(e,{...t,"arc-popover-body":""}),$d=({showDivider:e,tag:t="footer",...r})=>(0,n.jsx)(t,{...r,"arc-popover-footer":"","has-divider":e?"":void 0});Jr.displayName="ArcPopoverButton";const C=s`--arc-popover`,Ce=s`--arc•popover`,R=s`--arc•trail•mix`,bn=s`${Ce}•radius`,gd=s`${Ce}•content`,Xa=s`${Ce}•outline`,Ie=s`${Ce}•offset`,Qa=s`${Ce}•header`,md=s`${Ce}•body`,hs=s`${Ce}•divider`,eo=s`${Ce}•footer`,lt=s`${Ce}•tail`,Z=s`${lt}•top`,K=s`${lt}•left`,Xr=s`${lt}•size`,Ve=s`${lt}•x`,Ue=s`${lt}•y`,to=s`${Ce}•padding`,je=s`${Ce}•margin`,wr=s`${Qa}•padding`,Ke=s`${md}•padding`,ft=s`${eo}•padding`,vs=s`${Ce}•fg`,ro=s`${Ce}•bg`,ao=s`${gd}•bg`,oo=s`${lt}•fill•a`,no=s`${lt}•fill•b`,io=s`${lt}•edge•a`,so=s`${lt}•edge•b`,bd=s`

  ${Ce}•fallback: none;
  ${Xa}: var(${C}-outline-size, var(--arc-border-width-md));
  ${bn}: var(${C}-border-radius, var(--arc-border-radius-lg));
  ${Ie}: var(${C}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${to}: var(${g}•14);

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${R}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${Ve}: var(${C}-tail-x, 1.75em);
  ${Ue}: var(${C}-tail-y, 1.125em);
  ${Xr}: 0px;

  &:where([has-tail]) {
    ${Xr}: var(${C}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${Ie}: calc(var(${C}-offset, var(--js•offset, 0px)) + var(${Xr}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${to}: 0;
    &:has([arc-popover-header]) { ${Ke}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${Ke}•block•end: 0; }
  }

`,yd=s`

  /* default variant: common */
  &[variant] {
    ${vs}: var(--arc-color-fg-primary);
    ${ro}: var(${C}-background, var(--arc-color-bg-mono)) border-box;
    ${ao}: var(${C}-background, var(--arc-color-bg-mono)) padding-box;
    ${oo}: var(${C}-background, var(--arc-color-bg-mono));
    ${no}: var(${C}-background, var(--arc-color-bg-mono));
    ${io}: var(${C}-background, var(--arc-color-bg-mono));
    ${so}: var(${C}-background, var(--arc-color-bg-mono));
    ${Ce}•shadow: var(--arc-shadow-lg);
    ${hs}•color: var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${ro}: var(--arc-color-border-brand-mid) border-box;
    ${ao}: var(--arc-color-bg-brand-muted) padding-box;
    ${oo}: var(--arc-color-bg-brand-muted);
    ${no}: var(--arc-color-bg-brand-muted);
    ${io}: var(--arc-color-border-brand-mid);
    ${so}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${ro}: var(--arc-gradient-ai-200) border-box;
    ${ao}: var(--arc-gradient-ai-50) padding-box;
    ${oo}: var(${C}-ai-purple-50);
    ${no}: var(${C}-ai-blue-50);
    ${io}: var(${C}-ai-purple-200);
    ${so}: var(${C}-ai-blue-200);
  }

`,xd=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Qa}•gap: var(${g}•12);
    ${wr}•block: var(${g}•12);
    ${wr}•inline: var(${g}•12);

    ${Ke}•block: var(${g}•12);
    ${Ke}•inline: var(${g}•12);

    ${eo}•gap: var(${g}•12);
    ${ft}•inline: var(${g}•12);
    ${ft}•block•start: var(${g}•12);
    ${ft}•block•end: var(${g}•12);
  }

  &[density=comfortable] {
    ${Qa}•gap: var(${g}•18);
    ${wr}•block: var(${g}•16);
    ${wr}•inline: var(${g}•20);

    ${Ke}•block: var(${g}•20);
    ${Ke}•inline: var(${g}•20);

    ${eo}•gap: var(${g}•18);
    ${ft}•inline: var(${g}•20);
    ${ft}•block•start: var(${g}•16);
    ${ft}•block•end: var(${g}•20);

    &:not(:has([arc-popover-body])) {
      ${to}: var(${g}•20);
    }

    [arc-popover-content] {
      font-size: var(${C}-font-size, var(${l}•14));
    }
  }

`,Qr={TOP:s`
    &[anchor-at*='top-'] {
      ${je}: 0 0 var(${Ie}) 0;
      ${Z}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${R}: 95%;
      ${K}: calc(0% + var(${Ve}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${R}: 75%;
      ${K}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${R}: 53.5%;
      ${K}: calc(100% - var(${Ve}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${je}: 0 0 0 var(${Ie});
      ${K}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${R}: 53.5%;
      ${Z}: calc(0% + var(${Ue}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${R}: 75%;
      ${Z}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${R}: 95%;
      ${Z}: calc(100% - var(${Ue}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${je}: var(${Ie}) 0 0 0;
      ${Z}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${R}: 5%;
      ${K}: calc(100% - var(${Ve}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${R}: 25%;
      ${K}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${R}: 47.5%;
      ${K}: calc(0% + var(${Ve}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${je}: 0 var(${Ie}) 0 0;
      ${K}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${R}: 47.5%;
      ${Z}: calc(100% - var(${Ue}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${R}: 25%;
      ${Z}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${R}: 5%;
      ${Z}: calc(0% + var(${Ue}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${lt}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${je}: 0; }
    &[anchor-at*='corner'] { ${je}: var(${Ie}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},Ar={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${je}: 0 0 var(${Ie}) 0; }
    &[anchor-at='top-start']::before { ${R}: 47.5%; ${Z}: 0%; }
    &[anchor-at='top-center']::before { ${R}: 25%; ${Z}: 0%; }
    &[anchor-at='top-end']::before { ${R}: 5%; ${Z}: 0%; }

    &[anchor-at='right-start']::before { ${R}: 95%; ${Z}: calc(100% - var(${Ue})); }
    &[anchor-at='right-end']::before { ${R}: 53.5%; ${Z}: calc(0% + var(${Ue})); }

    &[anchor-at*='bottom-'] { ${je}: var(${Ie}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${R}: 53.5%; ${Z}: 100%; }
    &[anchor-at='bottom-center']::before { ${R}: 75%; ${Z}: 100%; }
    &[anchor-at='bottom-start']::before { ${R}: 95%; ${Z}: 100%; }

    &[anchor-at='left-end']::before { ${R}: 5%; ${Z}: calc(0% + var(${Ue})); }
    &[anchor-at='left-start']::before { ${R}: 47.5%; ${Z}: calc(100% - var(${Ue})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${R}: 53.5%; ${K}: calc(100% - var(${Ve})); }
    &[anchor-at='top-end']::before { ${R}: 95%; ${K}: calc(0% + var(${Ve})); }

    &[anchor-at*='right-'] { ${je}: 0 var(${Ie}) 0 0; }
    &[anchor-at='right-start']::before { ${R}: 5%; ${K}: 100%; }
    &[anchor-at='right-center']::before { ${R}: 25%; ${K}: 100%; }
    &[anchor-at='right-end']::before { ${R}: 47.5%; ${K}: 100%; }

    &[anchor-at='bottom-end']::before { ${R}: 47.5%; ${K}: calc(0% + var(${Ve})); }
    &[anchor-at='bottom-start']::before { ${R}: 5%; ${K}: calc(100% - var(${Ve})); }

    &[anchor-at*='left-'] { ${je}: 0 0 0 var(${Ie}); }
    &[anchor-at='left-end']::before { ${R}: 95%; ${K}: 0%; }
    &[anchor-at='left-center']::before { ${R}: 75%; ${K}: 0%; }
    &[anchor-at='left-start']::before { ${R}: 53.5%; ${K}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${je}: 0 0 var(${Ie}) 0; }
    &[anchor-at='top-start']::before { ${R}: 5%; ${Z}: 0%; ${K}: calc(100% - var(${Ve})); }
    &[anchor-at='top-end']::before { ${R}: 47.5%; ${Z}: 0%; ${K}: calc(0% + var(${Ve})); }

    &[anchor-at*='right-'] { ${je}: 0 var(${Ie}) 0 0; }
    &[anchor-at='right-start']::before { ${R}: 47.5%; ${Z}: calc(100% - var(${Ue})); ${K}: 100%; }
    &[anchor-at='right-end']::before { ${R}: 5%; ${Z}: calc(0% + var(${Ue})); ${K}: 100%; }

    &[anchor-at*='bottom-'] { ${je}: var(${Ie}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${R}: 95%; ${Z}: 100%; ${K}: calc(0% + var(${Ve})); }
    &[anchor-at='bottom-start']::before { ${R}: 53.5%; ${Z}: 100%; ${K}: calc(100% - var(${Ve})); }

    &[anchor-at*='left-'] { ${je}: 0 0 0 var(${Ie}); }
    &[anchor-at='left-end']::before { ${R}: 53.5%; ${Z}: calc(0% + var(${Ue})); ${K}: 0%; }
    &[anchor-at='left-start']::before { ${R}: 95%; ${Z}: calc(100% - var(${Ue})); ${K}: 0%; }
  `},wd=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${je});

    container-type: anchored;
    position-anchor: var(${C}-anchor-name, var(--js•anchor));

    ${Qr.TOP}
    ${Qr.RIGHT}
    ${Qr.BOTTOM}
    ${Qr.LEFT}
    ${Qr.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ar.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ar.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ar.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${Ar.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${Ar.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${Ar.FLIP_BLOCK_INLINE}
        }
      }
    }
`,nr={BACKDROP:s`
    &::backdrop {
      background: var(${C}-backdrop, transparent);
    }
  `,DISMISS:s`
    [arc-popover-dismiss] {
      align-self: var(${C}-dismiss-align-self, auto);
      display: var(${C}-dismiss-display, inline-flex);
      align-items: var(${C}-dismiss-align-items, center);
      justify-content: var(${C}-dismiss-justify-content, center);
      margin: var(${C}-dismiss-margin, var(${g}•6m) var(${g}•0));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    &:where(:not([arc-popover-header])) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      ${C}-dismiss-margin: 0;
      inset: var(${C}-dismiss-inset, 0.5em 0.5em auto auto);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${C}-header-flex, none);
      display: var(${C}-header-display, flex);
      justify-content: var(${C}-header-justify-content, space-between);
      align-items: var(${C}-header-align-items, baseline);
      gap: var(${C}-header-gap, var(${Qa}•gap));

      padding: var(${C}-header-padding,
        var(${wr}•block)
        var(${wr}•inline)
      );

      color: var(${C}-header-color, inherit);
      background: var(${C}-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(${g}•12);
      }
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${C}-flex, 1);
      position: relative;
      display: var(${C}-content-display, flex);
      flex-direction: var(${C}-content-flex-direction, column);
      gap: var(${C}-content-gap, 0);

      overflow: var(${C}-overflow, auto);
      overscroll-behavior: var(${C}-overscroll-behavior, contain);

      color: var(${C}-color, var(${vs}));
      padding: var(${C}-padding, var(${to}));
      background: var(${C}-content-background, var(${ao}));
      border-radius: calc(var(${bn}) - var(${Xa}));
      border: var(${C}-border, none);

      width: var(${C}-width, auto);
      height: var(${C}-height, auto);
      min-width: var(${C}-min-width, auto);
      min-height: var(${C}-min-height, auto);
      max-width: var(${C}-max-width, 100vw);
      max-height: var(${C}-max-height, 65vh);
      resize: var(${C}-resize, none);
      font-size: var(${C}-font-size, var(${l}•12));
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${C}-body-flex, 1);
      display: var(${C}-body-display, block);
      flex-direction: var(${C}-body-flex-direction, unset);

      padding: var(${C}-body-padding,
        var(${Ke}•block•start, var(${Ke}•block))
        var(${Ke}•inline)
        var(${Ke}•block•end, var(${Ke}•block))
        var(${Ke}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${C}-footer-flex, none);
      display: var(${C}-footer-display, flex);
      flex-direction: var(${C}-footer-flex-direction, row-reverse);
      justify-content: var(${C}-footer-justify-content, space-between);
      align-items: var(${C}-footer-align-items, center);
      gap: var(${C}-footer-gap, var(${eo}•gap));

      padding: var(${C}-footer-padding,
        var(${ft}•block•start)
        var(${ft}•inline)
        var(${ft}•block•end)
        var(${ft}•inline)
      );

      background: var(${C}-footer-background, none);
      color: var(${C}-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(${C}-footer-border-top, var(${g}•1) solid var(${hs}•color));
      }
    }
  `,TAIL:s`
    &[has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${lt}•display, block);

      inset: auto;
      top: var(${Z}, auto);
      left: var(${K}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Xr});
      height: var(${Xr});
      border-radius: var(${l}•2);

      background: color-mix(in srgb,
        var(${oo}) var(${R}),
        var(${no}) clamp(0%, 100% - var(${R}), 100%)
      );

      border: var(${Xa}) solid color-mix(in srgb,
        var(${io}) var(${R}),
        var(${so}) clamp(0%, 100% - var(${R}), 100%)
      );
    }
  `},Ad=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    font-size: var(${l}•16); /* This font-size is intended NOT to be altered; it is locked
                                in as a reset for various popover calculations. The effective
                                popover font size is set on '[arc-popover-content]'. */

    background: var(${C}-background, var(${ro}));
    border: var(${Xa}) solid transparent;
    border-radius: var(${bn});
    box-shadow: var(${C}-shadow, var(${Ce}•shadow));
    width: var(${C}-width, auto);
    height: var(${C}-height, auto);
    min-width: var(${C}-min-width, auto);
    min-height: var(${C}-min-height, auto);
    max-width: var(${C}-max-width, 100vw);
    max-height: var(${C}-max-height, 65vh);

    ${nr.BACKDROP}
    ${nr.DISMISS}
    ${nr.HEADER}
    ${nr.CONTENT}
    ${nr.BODY}
    ${nr.FOOTER}
    ${nr.TAIL}
  }
`,ea={SETUP:bd,ANCHORS:wd,VARIANTS:yd,DENSITIES:xd,ELEMENT:Ad},Cd=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${ad}

  [arc-popover] {
    ${ea.SETUP}
    ${ea.VARIANTS}
    ${ea.DENSITIES}
  }

  ${ea.ANCHORS}
  ${ea.ELEMENT}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,ps=(0,y.forwardRef)(({children:e,popover:t=Pe.popover,anchorAt:r=Pe.anchorAt,anchorName:a,anchorProps:o,alternateAnchorId:c,alternateAnchor:i,boundary:d=Pe.boundary,tryFallbacks:u=Pe.tryFallbacks,density:h=Pe.density,variant:v=Pe.variant,scheme:f=Pe.scheme,isInverse:p,hasTail:$,tailSize:w=Pe.tailSize,offset:k=Pe.offset,hidePopoverButton:T,headerSlot:M,showDismiss:_,dismissProps:I,footerSlot:S,showFooterDivider:z,tag:P="div",contentTag:N="div",onToggle:W,...J},ae)=>{const X=(0,y.useRef)(null),ye=(0,y.useRef)(null),me=(0,y.useRef)(null),Ne=(0,y.useRef)(W);(0,y.useImperativeHandle)(ae,()=>ye.current);const[de,et]=(0,y.useState)(!1),ne=(0,y.useMemo)(()=>f==="auto"?void 0:p?"inverse":f,[p,f]),ht=(0,y.useCallback)(()=>typeof document>"u"?X.current??null:c?document.getElementById(c):typeof i=="string"?document.getElementById(i):i instanceof HTMLElement?i:typeof i=="function"?i():i&&typeof i=="object"&&"current"in i?i.current:X.current??null,[i,c]),vt=u||d==="flip",tt=!!$&&!Ni.includes(r),jt=Fi({canHaveTail:tt,tailSize:w}),Lt=(0,y.useMemo)(()=>{const ue=a||c||(typeof i=="string"?i:void 0)||o?.id||J.id||void 0;return dn(String(ue))},[a,o?.id,J.id,i,c]),rt=(0,y.useMemo)(()=>({popoverTarget:J.id,"aria-haspopup":!0,"aria-controls":J.id,"aria-expanded":de}),[J.id,de]),at=(0,y.useMemo)(()=>({isOpen:de,"aria-label":"Dismiss",...rt,...I}),[I,de,rt]),V=(0,y.useMemo)(()=>({ref:X,...rt,...o,tooltip:de?void 0:o?.tooltip,anchorName:Lt||void 0}),[o,rt,Lt,de]),xe=(0,y.useMemo)(()=>({"--js\u2022anchor":V?.anchorName||"","--js\u2022offset":Number(k)===0?"":`${k}px`,"--js\u2022tail":jt.cssTailVar}),[V?.anchorName,k,jt.cssTailVar]);return Ba(()=>{const ue=ht();if(me.current=ue,!!ue)return Vi(ue,V.anchorName)},[ht,V.anchorName]),(0,y.useEffect)(()=>{Ne.current=W},[W]),(0,y.useEffect)(()=>{const ue=ye.current;if(!ue)return;const Re=xt=>{const{newState:wt}=xt,ba=wt==="open";et(ba),ba&&(me.current=ht()),Ne.current?.(xt)};return ue.addEventListener("toggle",Re),()=>ue.removeEventListener("toggle",Re)},[ht]),gl({anchorEl:me.current,popoverEl:ye.current,anchorAt:r,tryFallbacks:vt,offsetPx:Number(k)||0,tailSizePx:jt.floatingTailPx,hasTail:tt,isOpen:de}),wl({anchorEl:me.current,popoverEl:ye.current,anchorAt:r,tryFallbacks:vt,hasTail:tt,isOpen:de}),(0,n.jsxs)(n.Fragment,{children:[!((c||i)&&T)&&(0,n.jsx)(Jr,{...V}),(0,n.jsxs)(P,{...J,ref:ye,"arc-popover":"","arc-scheme":ne,"anchor-at":r,"try-fallbacks":vt?"":void 0,popover:t,variant:v,density:h,"has-tail":tt?"":void 0,role:J.role??"dialog",style:{...J.style,...xe},children:[(0,n.jsxs)(N,{"arc-popover-content":"",children:[!!M&&(0,n.jsx)(pd,{showDismiss:_,dismissProps:at,children:M}),M||S?(0,n.jsx)(fd,{children:e}):e,!!S&&(0,n.jsx)($d,{showDivider:z,children:S})]}),_&&!M&&(0,n.jsx)(us,{...at})]})]})});ps.displayName="ArcPopover";const yn=ps;yn.handlePopover=Hi,yn.Button=Jr;const ta=yn;H("ArcPopover",Cd);const kd=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${l}•4) var(${l}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${l}•6);
      padding: var(${l}•4) var(${l}•8);
    }

    ${Go}
    ${Ei}
  }

}
`,Sd=e=>(0,n.jsx)("ul",{...e,"data-element":"list"}),zd=e=>(0,n.jsx)("li",{...e,"data-element":"list-item"}),_d=({count:e,anchorId:t,overflowId:r,shouldShowOverflow:a,...o})=>(0,n.jsx)(tn,{title:`+${e}`,children:(0,n.jsx)(ta.Button,{...o,id:t,popoverTarget:r,text:`+${e}`,variant:"common",hierarchy:"primary",disabled:!a,"data-element":"counter","data-color":"black","data-num-length":e?.toString().length})}),Ed=({children:e,id:t,size:r="sm",overflowCount:a=0,shouldShowOverflow:o=!1,anchorAt:c="bottom-end",tryFallbacks:i=!0,...d})=>{const u=Math.min(a,999),h=Ge(t,"arc-avatar-overflow"),v=(0,y.useMemo)(()=>`${h}-anchor`,[h]),f=(0,y.useMemo)(()=>y.Children.toArray(e),[e]);return(0,n.jsxs)(n.Fragment,{children:[u>0&&(0,n.jsx)(_d,{count:u,anchorId:v,overflowId:h,shouldShowOverflow:o}),o&&u>0&&(0,n.jsx)(ta,{...d,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:c,tryFallbacks:i,alternateAnchorId:v,hidePopoverButton:!0,variant:"common","data-size":r,children:(0,n.jsx)(Sd,{children:f.map((p,$)=>(0,n.jsx)(zd,{children:p},$))})})]})};H("ArcAvatarOverflow",kd);const fs=({fg:e,bg:t})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${e}•high: var(--arc-color-fg-on-mono-inverse);
    ${t}•high: var(--arc-color-bg-mono-inverse);
    ${e}•low: var(--arc-color-fg-on-subtle);
    ${t}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-brand-stark);
    ${e}•low: var(--arc-color-fg-brand-stark);
    ${t}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${e}•high: var(--arc-color-fg-on-mono);
    ${t}•high: var(--arc-color-bg-mono);
    ${e}•low: var(--arc-color-fg-on-mono);
    ${t}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-blue-stark);
    ${e}•low: var(--arc-color-fg-blue-stark);
    ${t}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${e}•high: var(--arc-color-fg-on-heavy);
    ${t}•high: var(--arc-color-bg-neutral-heavy);
    ${e}•low: var(--arc-color-fg-neutral-stark);
    ${t}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-purple-stark);
    ${e}•low: var(--arc-color-fg-purple-stark);
    ${t}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-green-stark);
    ${e}•low: var(--arc-color-fg-green-stark);
    ${t}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-yellow-stark);
    ${e}•low: var(--arc-color-fg-yellow-stark);
    ${t}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-red-stark);
    ${e}•low: var(--arc-color-fg-red-stark);
    ${t}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-maroon-stark);
    ${e}•low: var(--arc-color-fg-maroon-stark);
    ${t}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-mint-stark);
    ${e}•low: var(--arc-color-fg-mint-stark);
    ${t}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${e}•high: var(--arc-color-fg-on-stark);
    ${t}•high: var(--arc-color-bg-orange-stark);
    ${e}•low: var(--arc-color-fg-orange-stark);
    ${t}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${e}•high: var(--arc-color-fg-on-heavy);
    ${t}•high: var(--arc-gradient-ai-300);
    ${e}•low: var(--arc-color-fg-on-subtle);
    ${t}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${e}•high: var(--arc-color-mono-black);
    ${t}•high: var(--arc-color-alpha-white-80);
    ${e}•low: var(--arc-color-alpha-heavy);
    ${t}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${e}•high: var(--arc-color-mono-white);
    ${t}•high: var(--arc-color-alpha-black-70);
    ${e}•low: var(--arc-color-mono-white);
    ${t}•low: var(--arc-color-alpha-black-40);
  }
`,$s=({fg:e,bg:t})=>s`
  &:has(>[data-contrast=high]) {
    ${e}: var(${e}•high);
    ${t}: var(${t}•high);
  }

  &:has(>[data-contrast=low]) {
    ${e}: var(${e}•low);
    ${t}: var(${t}•low);
  }
`,E=s`--arc•badge`,xn=s`${E}•fg`,wn=s`${E}•bg`,Td=fs({fg:xn,bg:wn}),Id=$s({fg:xn,bg:wn}),jd=s`
  &:has(>[data-size=lg]) {
    ${E}•font•size: var(${l}•14);
    ${E}•font•size•caps: var(${l}•12);
    ${E}•size: var(${l}•24);
    ${E}•min•size: var(${l}•30);
    ${E}•padding•inline: var(${l}•8);
    ${E}•border•radius: var(${l}•4);
    ${E}•gap: var(${l}•4);
  }

  &:has(>[data-size=md]) {
    ${E}•font•size: var(${l}•12);
    ${E}•font•size•caps: var(${l}•10);
    ${E}•size: var(${l}•20);
    ${E}•min•size: var(${l}•24);
    ${E}•padding•inline: var(${l}•6);
    ${E}•border•radius: var(${l}•4);
    ${E}•gap: var(${l}•4);
  }

  &:has(>[data-size=sm]) {
    ${E}•font•size: var(${l}•10);
    ${E}•font•size•caps: var(${l}•8);
    ${E}•size: var(${l}•16);
    ${E}•min•size: var(${l}•18);
    ${E}•padding•inline: var(${l}•4);
    ${E}•border•radius: var(${l}•4);
    ${E}•gap: var(${l}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${E}•font•size: 1em;
    ${E}•font•size•text: 0.75em;
    ${E}•font•size•caps: 0.625em;
    ${E}•size: 1.25em;
    ${E}•min•size: 1.5em;
    ${E}•padding•inline: 0.375em;
    ${E}•border•radius: 0.25em;
    ${E}•gap: 0.25em;
  }
`,Ld=s`
  &:has(>[data-layout=fill]) {
    ${E}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${E}•display: flex;
    ${E}•min•width: var(${E}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${E}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${E}•display: inline-flex;
    ${E}•min•width: min-content;
  }
`,Rd=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${Td}
    ${Id}
    ${jd}
    ${Ld}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${E}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${E}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${E}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${E}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${E}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${E}•flex);
    display: var(${E}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${E}•size);
    padding-inline: var(${E}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${xn}));
    background: var(--arc-badge-background, var(${wn}));
    border-radius: var(${E}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${E}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${E}•font•size•caps);
    }
  }

}
`,gs=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Md=["brand",...gs.filter(e=>e!=="brand")],Bd=["neutral",...gs.filter(e=>e!=="neutral")],Pd=_e(Zt,Md),Od=_e(Zt,Bd),Dd=_e(ze,["inherit","lg","md","sm"]),Nd=_e(ot,["hug","fill"]),Fd=["high","low"],Hd=_e(ie,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),Vd={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},Ud=({children:e,icon:t,text:r,isFlipped:a,isFlexible:o,isUppercase:c,color:i,variant:d,size:u="inherit",layout:h="hug",contrast:v="high",...f})=>{const p=i??Vd[d??"brand-blue"],$=e||(0,n.jsx)(Ze,{icon:t,text:r,isFlipped:a,layout:"gutter"}),w=h==="fill"&&o;return(0,n.jsx)("span",{...f,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":v,"data-color":p,"data-layout":h,"data-size":u,"data-is-flexible":w?"":void 0,"data-is-uppercase":c?"":void 0,children:$})})};H("ArcBadge",Rd);const te=s`--arc•badge•count`,An=s`${te}•fg`,Cn=s`${te}•bg`,Wd=fs({fg:An,bg:Cn}),Gd=$s({fg:An,bg:Cn}),Zd=s`
  &:has(>[data-size=lg]) {
    ${te}•font•size: var(${l}•14);
    ${te}•size: var(${l}•24);
    ${te}•padding•inline: var(${l}•4);
  }

  &:has(>[data-size=md]) {
    ${te}•font•size: var(${l}•12);
    ${te}•size: var(${l}•20);
    ${te}•padding•inline: var(${l}•4);
  }

  &:has(>[data-size=sm]) {
    ${te}•font•size: var(${l}•10);
    ${te}•size: var(${l}•16);
    ${te}•padding•inline: var(${l}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${te}•font•size: 1em;
    ${te}•font•size•text: 0.75em;
    ${te}•size: 1.25em;
    ${te}•padding•inline: 0.25em;
  }
`,Kd=s`
  &:has(>[data-shape=square]) {
    ${te}•border•radius: var(${l}•4);
  }

  &:has(>[data-shape=circle]) {
    ${te}•border•radius: var(--arc-border-radius-pill);
  }
`,Yd=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${Wd}
  ${Gd}
  ${Zd}
  ${Kd}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${te}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${te}•size);
  min-width: var(${te}•size);
  padding-inline: var(${te}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${An}));
  background: var(--arc-badge-count-background, var(${Cn}));
  border-radius: var(${te}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${te}•font•size•text, 1em);
  }
}

`,qd=_e(ze,["inherit","lg","md","sm"]),Jd=_e(ie,["neutral","brand","critical","warning","success","inverse"]),Xd=["low","high"],Qd=_e(jr,["square","circle"]),eu={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},tu=({children:e,text:t,color:r,variant:a,contrast:o,size:c="inherit",shape:i="square",...d})=>{const u=e||(0,n.jsx)("span",{"data-element":"text",children:t}),h=r??eu[a??"neutral"],v=a==="critical"?"high":o??"low";return(0,n.jsx)("span",{...d,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":v,"data-shape":i,"data-size":c,children:u})})};H("ArcBadgeCount",Yd);const _t=s`--arc•label`,ra=s`${_t}•cursor`,aa=s`${_t}•opacity`,ru=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${aa}: var(--arc-label-opacity, unset);
    ${aa}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${_t}•display: var(--arc-label-display, inline-flex);
    ${_t}•gap: var(--arc-label-gap, var(${l}•8));
    ${_t}•align•items: var(--arc-label-align-items, baseline);

    ${ra}: var(--arc-label-cursor, pointer);
    ${ra}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${ra}: var(${ra}•disabled);
      ${aa}: var(${aa}•disabled);
    }

    &[data-layout=fill] {
      ${_t}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${_t}•display);
    align-items: var(${_t}•align•items);
    gap: var(${_t}•gap);
    cursor: var(${ra});
  }

}
`,au=L(ot,["hug","fill"]),ir=({layout:e,...t})=>(0,n.jsx)("label",{...t,"arc-label":"","data-layout":e});H("ArcLabel",ru);const ou=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${aa}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,sr=e=>(0,n.jsx)("span",{...e,"arc-label-content":""});H("LabelContent",ou);const nu={checkbox:"checkbox",radio:"radio",switch:"radio"},oa=({id:e,indeterminate:t,type:r,onChange:a,...o})=>{const c=r==="checkbox"&&!!t,i=(0,y.useRef)(null),d=Ge(e,`arc-${r}`),u=h=>v=>{if(!(v?.target instanceof HTMLInputElement))return;const f={checked:v?.target.checked,indeterminate:v?.target?.indeterminate,name:v?.target?.name,value:o?.value};h?.(f,v)};return(0,y.useEffect)(()=>{i.current?.type==="checkbox"&&(i.current.indeterminate=!!t)},[t]),(0,n.jsx)("input",{...o,id:d,ref:i,type:nu[r],"arc-input-type":r,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":c||void 0,onChange:u(a)})},iu=s`
@layer arc-components {

  [arc-input-mask] {
    ${x}•border•width: var(--arc-border-width-sm);
    ${x}•border: var(${x}•border•width) solid var(${x}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${x}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${x}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${x}•outline: var(${x}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${x}•width);
    height: var(${x}•height);
    opacity: var(${x}•opacity, var(--arc-alpha-100));

    color: var(${x}•color, transparent);
    background: var(${x}•background);
    border: var(${x}•border);
    border-radius: var(${x}•border•radius);
    translate: var(${x}•translate, unset);

    outline: var(${x}•outline, none);
    outline-offset: var(${x}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${x}•border•width) * -1);
      cursor: var(${x}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${x}•z•index, unset);
    }
  }

}
`,co=({type:e,...t})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...t,"arc-input-mask":e})});H("ArcBooleanInputMask",iu);const pe=s`--arc•checkbox`,su=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${pe}•font•size: 1em;
      ${pe}•icon•size: 0.625em;
      ${pe}•size: 1.125em;
      ${pe}•gap: 0.5em;
    }

    &[data-size=md] {
      ${pe}•font•size: var(${l}•14);
      ${pe}•icon•size: var(${l}•10);
      ${pe}•size: var(${l}•18);
      ${pe}•gap: var(${l}•8);
    }

    &[data-size=sm] {
      ${pe}•font•size: var(${l}•12);
      ${pe}•icon•size: var(${l}•10);
      ${pe}•size: var(${l}•16);
      ${pe}•gap: var(${l}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${x}•border•radius: var(${l}•4);
    ${x}•size: var(${pe}•size);
    ${x}•icon•size: var(${pe}•icon•size);
    ${x}•width: var(${pe}•size);
    ${x}•height: var(${pe}•size);
    ${x}•translate: 0 var(${l}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${pe}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${pe}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${x}•color: transparent;
      ${x}•border•color: var(--arc-color-border-stark);
      ${x}•background: transparent;

      &:hover {
        ${x}•border•color: var(--arc-color-border-theme-heavy);
        ${x}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${x}•border•color: var(--arc-color-border-disabled);
        ${x}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${x}•color: var(--arc-color-fg-on-theme-heavy);
        ${x}•border•color: transparent;
        ${x}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${x}•color: var(--arc-color-fg-on-theme-stark);
          ${x}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${x}•color: var(--arc-color-fg-on-theme-mid);
          ${x}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${x}•color: var(--arc-color-fg-theme-heavy);
        ${x}•border•color: var(--arc-color-border-theme-heavy);
        ${x}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${x}•color: var(--arc-color-fg-theme-stark);
          ${x}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${x}•color: var(--arc-color-fg-theme-subtle);
          ${x}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,cu=L(ot,["hug","fill"]),lu=L(ze,["inherit","md","sm"]),du=L(ie,["primary","secondary"]),ms=({children:e,label:t,layout:r,size:a="md",variant:o="primary",useMask:c=!0,...i})=>{const{className:d,title:u,...h}=i,v={className:d,title:u},f=e??t,p=(0,n.jsx)(oa,{...h,type:"checkbox"}),$=c&&(0,n.jsxs)(co,{type:"checkbox",children:[p,(0,n.jsx)(O,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),w=!!f&&(0,n.jsxs)(ir,{layout:r,children:[$||p,(0,n.jsx)(sr,{children:f})]});return(0,n.jsx)("span",{...v,"arc-checkbox":"","data-size":a,"data-variant":o,children:w||$||p})};H("ArcCheckbox",su);const Ye=s`--arc•cb`,re=s`${Ye}•o`,qe=s`${re}•border`,kn=s`${re}•icon`,Sn=s`${re}•text`,uu=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Ye}•font•size: var(${l}•14);
    ${Ye}•border•radius: var(${l}•6);
    ${Ye}•background: var(--arc-color-alpha-black-0);
    ${Ye}•padding: 0px;
    ${Ye}•gap: var(${l}•2);

    ${re}•color: var(--arc-color-fg-secondary);
    ${re}•background: var(--arc-color-alpha-white-0);

    ${qe}•color: var(--arc-color-alpha-black-0);
    ${qe}•width: var(${l}•1);
    ${qe}•radius: var(${l}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${re}•size: var(${l}•40);
      ${re}•line•height: var(${l}•38); /* • -2px to account for border-width (top/bottom) */
      ${kn}•padding: var(${l}•8);
      ${Sn}•padding: var(${l}•12);
    }

    &[data-size=md] {
      ${re}•size: var(${l}•32);
      ${re}•line•height: var(${l}•30); /* • -2px to account for border-width (top/bottom) */
      ${kn}•padding: var(${l}•6);
      ${Sn}•padding: var(${l}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Ye}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Ye}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${re}•color: var(--arc-color-fg-on-hover-default);
        ${re}•background: var(--arc-color-bg-hover-default);
        ${qe}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${re}•color: var(--arc-color-fg-primary);
      ${re}•background: var(--arc-color-bg-secondary);
      ${qe}•color: var(--arc-color-alpha-black-0);
      ${re}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${re}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${re}•outline: var(${qe}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Ye}•font•size));
    display: var(${Ye}•display);
    gap: var(${Ye}•gap);
    background: var(${Ye}•background);
    border-radius: var(${qe}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${qe}•radius);
      outline: var(${re}•outline, none);
      outline-offset: var(${qe}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${re}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${re}•size);
      min-width: var(${re}•size);

      border-radius: var(${qe}•radius);
      border: var(${qe}•width) solid var(${qe}•color);
      background: var(${re}•background);
      color: var(${re}•color);
      font-weight: var(${re}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Sn}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${kn}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,hu=L(ot,["hug","fill"]),vu=L(ze,["lg","md"]),pu=({children:e,label:t,icon:r,...a})=>{const o=e||(0,n.jsx)(Ze,{icon:r,text:t});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":a?.checked||void 0,children:(0,n.jsx)(ms,{...a,label:o,layout:"fill",useMask:!1})})},fu=({children:e,size:t="lg",layout:r="hug",...a})=>(0,n.jsx)("ul",{...a,"arc-checkbox-bar":"","data-size":t,"data-layout":r,role:"group",children:e});H("ArcCheckboxBar",uu);const $u=s`--arc•menu`,Ht=s`${$u}•item`,gu=s`
@layer arc-components {

  [arc-menu] {
    ${Ht}•gap: var(${l}•8);
    ${Ht}•fg: inherit;
    ${Ht}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${l}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${l}•2));
    padding: var(--arc-menu-padding, var(${l}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${Ht}•gap));

    background: var(--arc-menu-item-background, var(${Ht}•bg));
    color: var(--arc-menu-item-color, var(${Ht}•fg));
    padding: var(--arc-menu-item-padding, var(${l}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${Ht}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${l}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Ht}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`,mu=e=>[{test:()=>!!e.variant,value:e.variant},{test:()=>!!e.icon&&typeof e.subtext<"u",value:"icon-text-detail"},{test:()=>!!e.icon,value:"icon-text"},{test:()=>!!e.avatar&&typeof e.subtext<"u",value:"user-detail"},{test:()=>!!e.avatar,value:"user"},{test:()=>typeof e.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],bu={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},cr={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},yu=({icon:e,...t})=>{const r=e&&typeof e=="string"?`${e.replace(" fa-fw","")} arc-fw`:e;return{divider:(0,n.jsx)("hr",{}),"section-label":(0,n.jsx)(Ze,{...t,...cr,icon:r,size:"sm",isStrong:!0}),"icon-text":(0,n.jsx)(Ze,{...t,...cr,icon:r}),"icon-text-detail":(0,n.jsx)(Ze,{...t,...cr,icon:r,isStrong:!0}),text:(0,n.jsx)(Ze,{...t,...cr}),"text-detail":(0,n.jsx)(Ze,{...t,...cr,subtext:t.subtext??"sub",isStrong:!0}),user:(0,n.jsx)(rn,{...t,...cr,size:"sm"}),"user-detail":(0,n.jsx)(rn,{...t,...cr,size:"md",isStrong:!0})}},xu=e=>e?.role??bu[na(e)]??"menuitem",na=e=>mu(e)?.find(({test:t})=>t())?.value??"text",bs=e=>t=>yu(t)[e],wu=(e,t,r,a)=>{let o=1,c=e;const i=u=>u>=r?0:u+1,d=u=>u<=0?r:u-1;for(;o<=r;){const u=i(c),h=d(c),v={previous:t==="previous"?h:c,actual:c,next:t==="next"?u:c}[t];if(a(v))return v;c=v,o+=1}return-1},Au=({items:e,filterText:t,renderItem:r,isVisible:a,...o})=>{const c=(0,y.useRef)(null),i=(0,y.useRef)([]),[d,u]=(0,y.useState)(-1),[h,v]=(0,y.useState)(!1),[f,p]=(0,y.useState)(Math.max(e.length-1,0));(0,y.useEffect)(()=>{a&&c.current&&(i.current=Array.from(c.current.querySelectorAll("[arc-button=custom]")))},[a,e]);const $=(0,y.useCallback)(S=>i.current[S]||null,[]),w=(0,y.useCallback)((S,z)=>{const P=wu(S,z,f,$);u(P),$(P)?.focus()},[f,$]),k=(0,y.useCallback)((S,z)=>()=>{!h&&z&&w(S,"actual")},[h,w]),T={ArrowUp:S=>w(S,"previous"),ArrowDown:S=>w(S,"next"),Home:()=>w(0,"actual"),End:()=>w(f,"actual")},M=S=>z=>{Object.keys(T).includes(z.key)&&(v(!0),z.stopPropagation(),z.preventDefault(),T[z.key](S))},_=(0,y.useMemo)(()=>{const S=t?e.filter(z=>Object.values(z).some(P=>P===t)):e;return p(Math.max(S.length-1,0)),S},[e,t]),I=(0,y.useMemo)(()=>_.map(({itemId:S,role:z,...P},N)=>{const W=na(P)||"",J=z||xu(P)||"menuitem",ae=N===d;return(0,n.jsx)("li",{"arc-menu-item":W,role:J,onMouseEnter:k(N,!!P.onClick),children:r?.(P,N,{filterText:t,isCurrent:ae})},S)}),[d,t,_,r,k]);return(0,y.useEffect)(()=>{a&&w(-1,"next")},[a,w]),(0,n.jsx)("ul",{...o,ref:c,"arc-menu":"",role:"menu",onKeyDown:M(d),onMouseLeave:()=>u(-1),onMouseMove:()=>v(!1),tabIndex:a?0:-1,children:I})};H("ArcMenu",gu);const ys=e=>{const{startSlot:t,endSlot:r,onClick:a,href:o,target:c,containerProps:i,isDisabled:d,"aria-disabled":u,tooltip:h,...v}=e,f=na(v),p=bs(f),$=u??d,w=f==="divider",k=o||a,T=!w,M=T&&t?"":void 0,_=T&&r?"":void 0,I=S=>{$||(S.currentTarget.closest("[arc-popover]")?.hidePopover(),a?.(S.nativeEvent))};return k?(0,n.jsxs)(Te,{...i,tooltip:h,href:o,target:c,"aria-disabled":$?"true":void 0,_isCustom:!0,"arc-dropdown-item":f??"","has-start-slot":M,"has-end-slot":_,onClick:I,children:[T&&t,(0,n.jsx)(p,{...v,"is-item-content":"interactive"}),T&&r]}):(0,n.jsxs)("div",{...i,"arc-dropdown-item":f??"","has-start-slot":M,"has-end-slot":_,children:[T&&t,(0,n.jsx)(p,{...v,"is-item-content":"inert"}),T&&r]})},Cu=s`--arc•dropdown`,ku=s`${Cu}•menu`,ke=s`${ku}•item`,Su=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${ke}•padding: var(${g}•8) var(${g}•12);
    ${ke}•min•height: var(${l}•36);
    ${ke}•gap: var(${g}•8);

    &[arc-dropdown-item=text-detail] {
      ${ke}•min•height: var(${l}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${ke}•min•height: var(${l}•32);
    }

    &[arc-dropdown-item=user] {
      ${ke}•min•height: var(${l}•40);

      &:not([has-start-slot]) {
        ${ke}•padding: var(${g}•8) var(${g}•12) var(${g}•8) var(${g}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${ke}•min•height: var(${l}•48);

      &:not([has-start-slot]) {
        ${ke}•padding: var(${g}•8) var(${g}•12) var(${g}•8) var(${g}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${ke}•min•height: var(${l}•8);
      ${ke}•padding: 0;

      hr {
        flex: 1;
        border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
        height: 0;
        margin: 0;
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(${ke}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${ke}•gap);
    text-align: start;
    min-height: var(${ke}•min•height);

    &:not([arc-button]) {
      padding: var(${ke}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${ke}•padding);
      --arc-button-min-height: var(${l}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,xs=(0,y.forwardRef)((e,t)=>(0,n.jsx)(Jr,{...e,ref:t,"arc-dropdown-menu-button":""})),zn=e=>{const{items:t,renderItem:r,...a}=e,[o,c]=(0,y.useState)(!1),i=(0,y.useCallback)((...u)=>r?.(...u)||(0,n.jsx)(ys,{...u[0]}),[r]),d=u=>{c(u.newState==="open"),e?.onToggle?.(u)};return(0,n.jsx)(ta,{...a,"arc-dropdown":"",variant:"common",onToggle:d,children:(0,n.jsx)(Au,{"arc-dropdown-menu":"",items:t??[],renderItem:i,isVisible:o})})};xs.displayName="ArcDropdownButton",zn.Button=xs,zn.Item=ys,H("ArcDropdownMenu",Su);const zu=e=>(0,n.jsx)(Te,{...e,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),lo=s`--arc•link`,$t=s`${lo}•fg`,ia=s`${$t}•hover`,sa=s`${$t}•disabled`,_n=s`${lo}•outline`,ws=s`${_n}•size`,En=s`${_n}•offset`,_u=s`${lo}•cursor`,ca=s`${lo}•focus•color`,Eu=s`
@layer arc-components {
${rd}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${$t}: currentcolor;
    ${ia}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${sa}: color-mix(in srgb, currentcolor, transparent 70%);

    ${ca}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${$t}: var(--arc-color-fg-primary);
    ${ia}: var(--arc-color-fg-secondary);
    ${sa}: var(--arc-color-fg-disabled);
    ${ca}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${$t}: var(--arc-color-fg-secondary);
    ${ia}: var(--arc-color-fg-primary);
    ${sa}: var(--arc-color-fg-disabled);
    ${ca}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${$t}: var(--arc-color-fg-on-mono-inverse);
    ${ia}: var(--arc-link-fg-hover-inverse);
    ${sa}: var(--arc-link-fg-disabled-inverse);
    ${ca}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${ws}: 0.125em; /* 2px */
    ${En}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${$t}: var(--arc-link-color-hover, var(${ia}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${_n}: var(${ws}) solid var(--arc-link-color-focus, var(${ca}));
    ${En}: var(${En});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${$t}: var(--arc-link-color-disabled, var(${sa}));
    ${_u}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${$t}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${$t}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Tu=L(ie,["inherit","primary","secondary","inverse"]),Iu=({children:e,layout:t="gutter",size:r="inherit",variant:a="inherit",tag:o="a",href:c,icon:i,text:d,overflow:u,iconSize:h,gapSize:v,isFlipped:f,isDisabled:p,...$})=>(0,n.jsx)(o,{...$,href:p?void 0:c,"arc-link":"","data-variant":a,"aria-disabled":p,"data-is-disabled":p?"":void 0,children:e||(0,n.jsx)(Ze,{icon:i,text:d,overflow:u,iconSize:h,gapSize:v,size:r,layout:t,isFlipped:f})});H("ArcLink",Eu);const ju=[...Ot],Lu=L(ie,["common"]),Ru=L(ie,["common","critical"]),Mu=L(ie,["common","brand","info","success","warning","error","processing"]),Bu=["auto","dark","light","none"],Pu=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Ou=L(ze,["xl","lg","md","sm","custom","fullscreen"]),Du=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Nu=s`arc•button•bar`,la=s`${Nu}•axis`,Fu=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${la}: row;

    &[is-flipped] {
      ${la}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${la}: column;

    &[is-flipped] {
      ${la}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${la}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(--arc-space-1));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,Tn=({children:e,...t})=>{const{Element:r="menu",orientation:a="horizontal",isFlipped:o=!1,...c}=t;return(0,n.jsx)(r,{...c,"arc-button-bar":a,"is-flipped":o?"":void 0,role:c.role??"group",children:e})};H("ArcButtonBar",Fu);const In=e=>e?.matches(":modal"),jn=(e,t)=>t.target===e,Hu=(e,t)=>t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom,da=({modalRef:e,shouldConfirm:t,setIsConfirming:r,onCloseOverride:a=void 0})=>(o,c)=>i=>{if(i?.preventDefault?.(),i?.stopPropagation?.(),!e?.current){c?.(i);return}if(a){a(o,i,e.current),c?.(i);return}if(t&&o!=="confirm:discard"){r?.(!0);return}e.current?.close(o),r?.(!1),c?.(i)},Ln=({modalRef:e,shouldConfirm:t,setIsConfirming:r,onClose:a,onToggle:o})=>{(0,y.useEffect)(()=>{const c=e.current;if(!c)return;const i=u=>{In(c)&&jn(c,u)&&(t?(u.preventDefault(),u.stopPropagation(),r?.(!0)):a?.("outside",u))},d=u=>{jn(c,u)&&(r?.(!1),a?.(c.returnValue,u),o?.(!1,u))};return c.addEventListener("close",d),c.addEventListener("cancel",i),()=>{c.removeEventListener("close",d),c.removeEventListener("cancel",i)}},[e,t,r,a,o])},Rn=({modalRef:e,isOpen:t,isTopLayer:r})=>{(0,y.useEffect)(()=>{const a=e.current;a&&(t&&!a.open&&(r?a.showModal():a.show()),!t&&a.open&&a.close())},[t,r])},Mn=({modalRef:e,isOpen:t,autoFocusId:r})=>{(0,y.useEffect)(()=>{const a=e.current;if(!a||!r||!t)return;const o=a.querySelector(`#${r}`);if(!o||!(o instanceof HTMLElement))return;const c=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(c)},[e,r,t])},As=(e,t)=>(typeof e.composedPath=="function"?e.composedPath():[]).includes(t)||e.target instanceof Node&&t.contains(e.target),Cs=({modalRef:e,isOpen:t=!1,closeOnBackdrop:r=!1,attemptCloseModal:a})=>{(0,y.useEffect)(()=>{const o=e.current;if(!o||!t||!r||!In(o))return;let c=!1;const i=u=>{c=As(u,o)},d=u=>{if(c||As(u,o))return;const h=o.getBoundingClientRect();Hu(h,u)&&a("outside")(u)};return document.documentElement?.addEventListener("pointerdown",i,{capture:!0}),document.documentElement?.addEventListener("click",d,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",i,{capture:!0}),document.documentElement?.removeEventListener("click",d,{capture:!0})}},[e,a,t,r])},ks=({modalRef:e,isOpen:t=!1,closeOnEsc:r=!1,closedBy:a="closerequest",attemptCloseModal:o})=>{(0,y.useEffect)(()=>{const c=e.current;if(!c||!t||!r||!In(c))return;const i=d=>{if(d.key==="Escape"&&jn(c,d)){if(a==="none"){d.stopPropagation(),d.preventDefault();return}o("escape")(d)}};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,o,t,r,a])},Bn=e=>(0,n.jsx)(Te,{"aria-label":"Dismiss",text:"Dismiss",...e,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large fa-fw",layout:"icon",shape:"square",size:"md"}),Pn=e=>(0,n.jsx)("div",{...e,"arc-modal-content":""}),Ss=({showDivider:e,...t})=>(0,n.jsx)("header",{...t,"arc-modal-header":"","has-divider":e?"":void 0}),Vu=({glyph:e,variant:t="common"})=>(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)(O,{icon:e,"arc-modal-glyph":"","arc-icon-status":t})}),On=e=>{const{titleContent:t,TitleElement:r="h2",...a}=e;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsx)(r,{...a,"arc-modal-title":"",children:typeof t=="string"?t:(0,n.jsx)(Ze,{...t})})})},Uu=({message:e,...t})=>(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)("p",{...t,"arc-modal-message":"",children:e})}),Dn=({tag:e="section",padding:t,...r})=>(0,n.jsx)(e,{...r,"arc-modal-body":"","data-padding":t==="auto"?void 0:t}),Nn=({showDivider:e,...t})=>(0,n.jsx)("footer",{...t,"arc-modal-footer":"","has-divider":e?"":void 0}),Wu=e=>t=>{if(t.key==="Escape"){if(e==="none"){t.stopPropagation(),t.preventDefault();return}return"escape"}},j=s`--arc•modal`,Cr=s`${j}•layout`,Gu=s`${j}•header`,uo=s`${j}•body`,ua=s`${j}•footer`,zs=s`${j}•fg`,ho=s`${j}•bg`,gt=s`${j}•backdrop`,Se=s`${j}•transition`,kr=s`${Gu}•padding`,Q=s`${uo}•padding`,Vt=s`${ua}•padding`,Zu=s`
  ${j}•font•size: var(${l}•14);
  ${j}•gap: var(${g}•16);

  ${Cr}•rows: auto 1fr auto;
  ${Cr}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${Cr}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${Cr}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${Cr}•rows: auto;
  }

  ${zs}: var(--arc-color-fg-primary);
  ${ho}: var(--arc-color-bg-primary);
  ${j}•border: none;
  ${j}•border•radius: var(--arc-border-radius-lg);
  ${j}•divider: var(${l}•1) solid var(--arc-color-border-mid);

  ${j}•max•width: calc(100vw - var(${g}•32));
  ${j}•min•width: unset;
  ${j}•width: auto;

  ${j}•max•height: calc(100vh - var(${g}•32));
  ${j}•min•height: unset;
  ${j}•height: max-content;

  ${Se}•y: 1vh;
  ${Se}•y•start: 2.5vh;
  ${Se}•scale: 1;
  ${Se}•scale•start: 0.975;

  ${uo}•text•align: unset;
  ${ua}•justify•content: flex-end;

  ${gt}•bg: var(--arc-color-overlay-stark);
  ${gt}•pointer•events: none;
  ${gt}•cursor: default;

  &:where([is-backdrop=light]) {
    ${gt}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${gt}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${gt}•bg: transparent;
  }
`,Ku=s`
  &[data-size=sm] {
    ${j}•width: 28em;
  }

  &[data-size=md] {
    ${j}•width: 40em;
  }

  &[data-size=lg] {
    ${j}•width: 50em;
  }

  &[data-size=xl] {
    ${j}•width: 64em;
  }

  &[data-size=custom] {
    ${j}•width: auto;
    ${j}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${j}•width: 100vw;
    ${j}•height: 100vh;
    ${j}•min•width: 100vw;
    ${j}•min•height: 100vh;
    ${j}•max•width: 100vw;
    ${j}•max•height: 100vh;
    ${j}•border•radius: var(--arc-border-radius-none);

    ${Se}•y: 0;
    ${Se}•y•start: 0;
    ${Se}•scale: 1.125;
    ${Se}•scale•start: 1.125;
  }
`,Yu=s`
  &[is-confirm] {
    ${ua}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${uo}•text•align: center;
    ${ua}•justify•content: center;

    ${Q}•block•start: var(${g}•40);
    ${Q}•block•end: var(${g}•20);

    ${Vt}•block•start: var(${g}•12);
    ${Vt}•block•end: var(${g}•40);

    ${j}•glyph•size: var(${l}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${j}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${j}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${g}•12);
    }
  }

  &[is-top-layer] {
    inset: var(--arc-modal-inset, 50% auto auto 50%);
    translate: var(--arc-modal-translate, -50% -50%);

    /*
      * ArcSelect Issue:
      * Avoid "translate"/"transform" on the <dialog> itself — Chrome misplaces
      * native base-select pickers (::picker(select)) when an ancestor is transformed.
      *
      * Center using inset+auto margins instead. Consumers can customize placement via
      * --arc-modal-inset / --arc-modal-margin.
      */
     @supports (appearance: base-select) {
      &:has([arc-select]) {
        --arc-modal-inset: 0;
        --arc-modal-translate: none;
        margin: var(--arc-modal-margin, auto);
      }
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,qu=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Q}•block•start: var(${g}•10);
    }

    &:has([arc-modal-footer]) {
      ${Q}•block•end: var(${g}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${kr}•block•end: var(${g}•20);
      ${Q}•block•start: var(${g}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Q}•block•end: var(${g}•20);
      ${Vt}•block•start: var(${g}•12);
      ${Vt}•block•end: var(${g}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Q}•inline•start: 0;
      ${Q}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Q}•block•start: 0;
      ${Q}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Q}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Q}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Q}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Q}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Q}•block•start: var(${g}•20);
      ${Q}•inline•end: var(${g}•24);
      ${Q}•block•end: var(${g}•20);
      ${Q}•inline•start: var(${g}•24);
    }

    &:has([arc-modal-go-back]) {
      ${kr}•inline•start: var(${g}•20);
    }

    ${kr}:
      var(${g}•20)
      var(${g}•24)
      var(${kr}•block•end, var(${g}•10))
      var(${kr}•inline•start, var(${g}•24));

    ${Q}:
      var(${Q}•block•start, var(${g}•20))
      var(${Q}•inline•end, var(${g}•24))
      var(${Q}•block•end, var(${g}•20))
      var(${Q}•inline•start, var(${g}•24));

    ${Vt}:
      var(${Vt}•block•start, var(${g}•10))
      var(${g}•24)
      var(${Vt}•block•end, var(${g}•20))
      var(${g}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Q}: 0;
    }
  }
`,Ju=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, transform;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, transform;
    }
  }
`,Xu=s`
  [arc-modal] {
    display: none;
    opacity: 0;
    transform:
      translateY(var(${Se}•y))
      scale(var(${Se}•scale));

    &:has([arc-select]) {
      transform: none;
    }

    /* ArcSelect Issue */
    @supports (appearance: base-select) {
      &:has([arc-select]) {
        transform: none;
      }
    }

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: grid;
      opacity: 1;
      transform:
        translateY(0)
        scale(1);

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          transform: none;
        }
      }
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      transform:
        translateY(var(${Se}•y•start))
        scale(var(${Se}•scale•start));

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          transform: none;
        }
      }
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Fn=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Zu}
    ${Ku}
    ${Yu}
    ${qu}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Se}•y: 0;
      ${Se}•scale: 1;
      ${Se}•y•start: 0;
      ${Se}•scale•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, transform;
    contain: layout style paint;

    padding: 0;
    color: var(--arc-modal-color, var(${zs}));
    background: var(--arc-modal-background, var(${ho}));
    border: var(--arc-modal-border, var(${j}•border));
    border-radius: var(--arc-modal-border-radius, var(${j}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${j}•width));
    height: var(--arc-modal-height, var(${j}•height));
    min-width: var(--arc-modal-min-width, var(${j}•min•width));
    min-height: var(--arc-modal-min-height, var(${j}•min•height));
    max-width: var(--arc-modal-max-width, var(${j}•max•width));
    max-height: var(--arc-modal-max-height, var(${j}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${gt}•bg));
      pointer-events: var(${gt}•pointer•events, none);
      cursor: var(${gt}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${j}•font•size));
      display: grid;
      grid-template-rows: var(--arc-modal-layout-rows, var(${Cr}•rows));
      grid-template-columns: var(--arc-modal-layout-columns, auto);
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${j}•gap));

      padding: var(${kr});
      background: var(--arc-modal-header-background, var(${ho}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${j}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${g}•4m) var(${g}•8m) var(${g}•4m) var(${g}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${g}•4m) 0 var(${g}•4m) var(${g}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${g}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${g}•4);
      }
    }

    [arc-modal-body] {
      padding: var(${Q});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${uo}•text•align));
    }

    [arc-modal-footer] {
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${ua}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${j}•gap));

      background: var(--arc-modal-footer-background, var(${ho}));
      padding: var(--arc-modal-footer-padding, var(${Vt}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${j}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${g}•16) var(${g}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${gt}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, auto);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${g}•32)));
      --arc-button-bar-flex: none;

      inset: var(--arc-modal-confirm-inset, 50% auto auto 50%);
      translate: var(--arc-modal-confirm-translate, -50% -50%);
      z-index: var(--arc-modal-confirm-z-index, 3);

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          --arc-modal-confirm-inset: 0;
          --arc-modal-confirm-translate: none;
          margin: var(--arc-modal-confirm-margin, auto);
        }
      }
    }
  }

  ${Ju}
  ${Xu}
`,Ut={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},_s=({children:e,headerProps:t,bodyProps:r,footerProps:a,...o})=>{const c=(0,y.useRef)(null),{isOpen:i,autoFocusId:d,isTopLayer:u=Ut.isTopLayer,isInverse:h=Ut.isInverse,scheme:v=Ut.scheme,backdropColor:f=Ut.backdropColor,variant:p=Ut.variant,message:$=Ut.message,onCloseOverride:w=Ut.onCloseOverride,onConfirmDiscard:k,onConfirmCancel:T,...M}=o,{slotStart:_,TitleElement:I,titleContent:S,slotEnd:z,...P}=t||{},{primaryButton:N,secondaryButton:W,...J}=a||{},ae=!!(S||_||z),X=v==="auto"?void 0:v,ye=!!w,me=ne=>ye?w?.("confirm:discard",ne,c.current??void 0):k?.("confirm:discard",ne),Ne=ne=>ye?w?.("confirm:cancel",ne,c.current??void 0):T?.("confirm:cancel",ne);Ln({modalRef:c,onClose:w}),Rn({modalRef:c,isOpen:i,isTopLayer:u}),Mn({modalRef:c,isOpen:i,autoFocusId:d});const de=ne=>{Ne(ne),W?.onClick?.(ne)},et=ne=>{me(ne),N?.onClick?.(ne)};return(0,n.jsx)("dialog",{...M,ref:c,"arc-modal":"","arc-scheme":h?"inverse":X,"is-confirm":p||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:"none",onKeyDown:Wu("none"),children:(0,n.jsxs)(Pn,{children:[ae&&(0,n.jsxs)(Ss,{...P,children:[_&&(0,n.jsx)("div",{"header-slot":"start",children:_}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(On,{TitleElement:I,titleContent:S})}),z&&(0,n.jsx)("div",{"header-slot":"end",children:z})]}),(0,n.jsx)(Dn,{...r,children:e||$&&(0,n.jsx)("p",{style:{margin:0},children:$})}),(0,n.jsx)(Nn,{...J,children:(0,n.jsxs)(Tn,{children:[(0,n.jsx)(Te,{...W,text:W?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:de}),(0,n.jsx)(Te,{...N,text:N?.text||"Discard",variant:p??"common",hierarchy:"primary",isInverse:h,onClick:et})]})})]})})};H("ArcModalConfirm",Fn);const Le={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},Qu=({children:e,confirmProps:t,headerProps:r,bodyProps:a,dismissProps:o,footerProps:c,...i})=>{const d=(0,y.useRef)(null),[u,h]=(0,y.useState)(!1),{isOpen:v,autoFocusId:f,isTopLayer:p=Le.isTopLayer,isInverse:$=Le.isInverse,scheme:w=Le.scheme,backdropColor:k=Le.backdropColor,hasConfirmFlow:T=Le.hasConfirmFlow,hasUnsavedChanges:M=Le.hasUnsavedChanges,onCloseOverride:_=Le.onCloseOverride,bypassConfirmWhen:I=Le.bypassConfirmWhen??{},size:S=Le.size,closeOnBackdrop:z=Le.closeOnBackdrop,closeOnEsc:P=Le.closeOnEsc,showDismiss:N=Le.showDismiss,onActionError:W,onClose:J,onToggle:ae,width:X,height:ye,style:me,...Ne}=i,{showGoBack:de,goBackProps:et,slotStart:ne,TitleElement:ht,titleContent:vt,slotEnd:tt,showDivider:jt=Le.headerProps?.showDivider,...Lt}=r??{},{slotStart:rt,primaryButton:at,secondaryButton:V,tertiaryButton:xe,showDivider:ue=Le.footerProps?.showDivider,...Re}=c??{},xt=!!(de||vt||ne||tt),wt=!!(at||V||xe),ba=!!(wt||rt),At=!!(T&&M),Wt=P?"closerequest":"none",Eo=w==="auto"?void 0:w,{didPressEscapeKey:ya,didClickBackdrop:dr,didClickGoBackButton:oi,didClickDismissButton:xa,didClickPrimaryButton:ni,didClickSecondaryButton:ii,didClickTertiaryButton:To}=I,Gt=da({modalRef:d,shouldConfirm:At,setIsConfirming:h,onCloseOverride:_});Ln({modalRef:d,shouldConfirm:At,setIsConfirming:h,onClose:J,onToggle:ae}),Rn({modalRef:d,isOpen:v,isTopLayer:p}),Mn({modalRef:d,isOpen:v,autoFocusId:f}),Cs({modalRef:d,isOpen:v,closeOnBackdrop:z,attemptCloseModal:dr?da({modalRef:d,shouldConfirm:At&&!dr,setIsConfirming:h}):Gt}),ks({modalRef:d,isOpen:v,closeOnEsc:P,closedBy:Wt,attemptCloseModal:ya?da({modalRef:d,shouldConfirm:At&&!ya,setIsConfirming:h}):Gt});const Io=()=>h(!1),si=(Mt,Bt)=>Gt(Mt)(Bt),Rt=(Mt,Bt,Ir)=>async ur=>{ur?.preventDefault?.(),ur?.stopPropagation?.();const ci=()=>Bt?da({modalRef:d,shouldConfirm:At&&!Bt,setIsConfirming:h})(Mt,Ir?.onCloseCallback)(ur):Gt(Mt,Ir?.onCloseCallback)(ur);try{await Ir?.onClick?.(ur),ci()}catch(jo){W?.(jo,{reason:Mt,event:ur})}};return(0,n.jsxs)("dialog",{...Ne,ref:d,"arc-modal":"","arc-scheme":$?"inverse":Eo,"is-inverse":$?"":void 0,"is-top-layer":p?"":void 0,"is-backdrop":k==="auto"?void 0:k,"data-size":S,closedby:Wt,style:{"--arc-modal-width":X??"","--arc-modal-height":ye??"",...me},children:[!xt&&N&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Bn,{...o,isInverse:$,onClick:Rt("button:dismiss",xa,o)})}),(0,n.jsxs)(Pn,{inert:u?"":void 0,children:[xt&&(0,n.jsxs)(Ss,{...Lt,showDivider:jt,children:[de&&(0,n.jsx)("div",{"header-slot":"go-back",children:(0,n.jsx)(Te,{"arc-modal-go-back":"",icon:"fa-regular fa-arrow-left fa-fw",text:"Go Back","aria-label":"Go Back",...et,layout:"icon",size:"md",variant:"common",hierarchy:"secondary",isInverse:$,onClick:Rt("button:back",oi,et)})}),ne&&(0,n.jsx)("div",{"header-slot":"start",children:ne}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(On,{TitleElement:ht,titleContent:vt})}),tt&&(0,n.jsx)("div",{"header-slot":"end",children:tt}),N&&(0,n.jsx)("div",{"header-slot":"dismiss",children:(0,n.jsx)(Bn,{...o,isInverse:$,onClick:Rt("button:dismiss",xa,o)})})]}),(0,n.jsx)(Dn,{...a,children:e}),ba&&(0,n.jsxs)(Nn,{...Re,showDivider:ue,children:[rt&&(0,n.jsx)("div",{"footer-slot":"content",children:rt}),wt&&(0,n.jsxs)(Tn,{children:[xe&&(0,n.jsx)(Te,{...xe,text:xe?.text||"Button",isInverse:$,variant:"common",hierarchy:"tertiary",onClick:Rt("button:tertiary",To,xe)}),V&&(0,n.jsx)(Te,{...V,text:V?.text||"Cancel",isInverse:$,variant:"common",hierarchy:"secondary",onClick:Rt("button:secondary",ii,V)}),at&&(0,n.jsx)(Te,{...at,text:at?.text||"Action",isInverse:$,variant:"common",hierarchy:"primary",onClick:Rt("button:primary",ni,at)})]})]})]}),T&&(0,n.jsx)(_s,{isOpen:u,isInverse:$,isTopLayer:p,backdropColor:k,...t,onConfirmDiscard:si,onConfirmCancel:Io})]})};H("ArcModal",Fn);const Et={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},eh={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-duotone fa-light-emergency-on",info:"fa-solid fa-circle-info",processing:(0,n.jsx)(hn,{"arc-modal-spinner":""})},th=({children:e,dismissProps:t,bodyProps:r,footerProps:a,...o})=>{const c=(0,y.useRef)(null),{isOpen:i,autoFocusId:d,isTopLayer:u=Et.isTopLayer,isInverse:h=Et.isInverse,scheme:v=Et.scheme,backdropColor:f=Et.backdropColor,closeOnBackdrop:p=Et.closeOnBackdrop,closeOnEsc:$=Et.closeOnEsc,variant:w=Et.variant,icon:k,TitleElement:T,titleContent:M,message:_,showDismiss:I,onCloseOverride:S=Et.onCloseOverride,onClose:z,onToggle:P,...N}=o,{primaryButton:W,...J}=a??{},ae=k||eh[w],X=$?"closerequest":"none",ye=v==="auto"?void 0:v,me=da({modalRef:c,onCloseOverride:S});return Ln({modalRef:c,onClose:z,onToggle:P}),Rn({modalRef:c,isOpen:i,isTopLayer:u}),Mn({modalRef:c,isOpen:i,autoFocusId:d}),Cs({modalRef:c,isOpen:i,closeOnBackdrop:p,attemptCloseModal:me}),ks({modalRef:c,isOpen:i,closeOnEsc:$,closedBy:X,attemptCloseModal:me}),(0,n.jsxs)("dialog",{...N,ref:c,"arc-modal":"","arc-scheme":h?"inverse":ye,"is-alert":w||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:X,children:[I&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Bn,{...t,isInverse:h,onClick:me("button:dismiss",t?.onClick)})}),(0,n.jsxs)(Pn,{children:[(0,n.jsx)(Dn,{...r,children:e||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Vu,{glyph:ae,variant:w}),(0,n.jsx)(On,{TitleElement:T,titleContent:M}),(0,n.jsx)(Uu,{message:_})]})}),(0,n.jsx)(Nn,{...J,children:(0,n.jsx)(Tn,{orientation:"vertical",children:(0,n.jsx)(Te,{...W,text:W?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:me("button:primary",W?.onClick)})})})]})]})};H("ArcModalAlert",Fn);const fe=s`--arc•radio`,rh=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${fe}•font•size: 1em;
      ${fe}•icon•size: 0.625em;
      ${fe}•size: 1.125em;
      ${fe}•gap: 0.5em;
    }

    &[data-size=md] {
      ${fe}•font•size: var(${l}•14);
      ${fe}•icon•size: var(${l}•10);
      ${fe}•size: var(${l}•18);
      ${fe}•gap: var(${l}•8);
    }

    &[data-size=sm] {
      ${fe}•font•size: var(${l}•12);
      ${fe}•icon•size: var(${l}•10);
      ${fe}•size: var(${l}•16);
      ${fe}•gap: var(${l}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-circle);
    ${x}•size: var(${fe}•size);
    ${x}•icon•size: var(${fe}•icon•size);
    ${x}•width: var(${fe}•size);
    ${x}•height: var(${fe}•size);
    ${x}•translate: 0 var(${l}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${fe}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${fe}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${x}•color: transparent;
      ${x}•background: transparent;
      ${x}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${x}•background: var(--arc-color-bg-theme-subtle);
        ${x}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${x}•color: var(--arc-color-fg-on-theme-heavy);
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${x}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${x}•color: var(--arc-color-fg-on-theme-mid);
        ${x}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,ah=L(ot,["hug","fill"]),oh=L(ze,["inherit","md","sm"]),Es=({children:e,label:t,layout:r,size:a="md",useMask:o=!0,...c})=>{const{className:i,title:d,...u}=c,h={className:i,title:d},v=e??t,f=(0,n.jsx)(oa,{...u,type:"radio"}),p=o&&(0,n.jsxs)(co,{type:"radio",children:[f,(0,n.jsx)(O,{icon:"fa-solid fa-circle-small arc-fw"})]}),$=!!v&&(0,n.jsxs)(ir,{layout:r,children:[p||f,(0,n.jsx)(sr,{children:v})]});return(0,n.jsx)("span",{...h,"arc-radio":"","data-size":a,children:$||p||f})};H("ArcRadio",rh);const Oe=s`--arc•rb`,D=s`${Oe}•o`,nh=s`
@layer arc-components {

  [arc-radio-bar] {
    ${Oe}•font•size: var(${l}•14);
    ${Oe}•border•radius: var(${l}•8);
    ${Oe}•background: var(--arc-color-bg-secondary);
    ${Oe}•padding: var(${l}•4);
    ${Oe}•gap: var(${l}•2);

    ${D}•color: var(--arc-color-fg-secondary);
    ${D}•background: var(--arc-color-alpha-black-0);
    ${D}•border•color: var(--arc-color-alpha-black-0);
    ${D}•border•width: var(${l}•1);
    ${D}•border•radius: var(${l}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${D}•size: var(${l}•32);
      ${D}•line•height: var(${l}•30); /* • -2px to account for border-width (top/bottom) */
      ${D}•icon•padding: var(${l}•8);
      ${D}•text•padding: var(${l}•12);
    }

    &[data-size=md] {
      ${D}•size: var(${l}•24);
      ${D}•line•height: var(${l}•22); /* • -2px to account for border-width (top/bottom) */
      ${D}•icon•padding: var(${l}•6);
      ${D}•text•padding: var(${l}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${Oe}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Oe}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${D}•color: var(--arc-color-fg-on-hover-default);
        ${D}•background: var(--arc-color-bg-hover-default);
        ${D}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${D}•color: var(--arc-color-mono-black);
      ${D}•background: var(--arc-color-mono-white);
      ${D}•border•color: var(--arc-color-border-stark);
      ${D}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${D}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${D}•outline: var(${D}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${Oe}•font•size));
    display: var(${Oe}•display);
    gap: var(${Oe}•gap);
    border-radius: var(${Oe}•border•radius);
    background: var(${Oe}•background);
    padding: var(${Oe}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${D}•border•radius);
      outline: var(${D}•outline, none);
      outline-offset: var(${D}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${D}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${D}•size);
      min-width: var(${D}•size);

      border-radius: var(${D}•border•radius);
      border: var(${D}•border•width) solid var(${D}•border•color);
      background: var(${D}•background);
      color: var(${D}•color);
      font-weight: var(${D}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${D}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${D}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,ih=L(ot,["hug","fill"]),sh=L(ze,["lg","md"]),ch=({children:e,label:t,icon:r,...a})=>{const o=e||(0,n.jsx)(Ze,{icon:r,text:t});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":a?.checked||void 0,children:(0,n.jsx)(Es,{...a,label:o,layout:"fill",useMask:!1})})},lh=({children:e,size:t="lg",layout:r="hug",...a})=>(0,n.jsx)("ul",{...a,"arc-radio-bar":"","data-size":t,"data-layout":r,role:"radiogroup",children:e});H("ArcRadioBar",nh);const Ts=L(ot,["fill","hug"]),Is=L(ze,["inherit","xl","lg","md"]),dh=L(ie,["outline","solid","plain"]),uh=Ts,hh=Is,vh=L(ie,["outline","solid","plain"]),Sr=e=>(0,n.jsx)(n.Fragment,{children:!!e.children&&(0,n.jsx)("span",{...e})}),ph=e=>(0,n.jsx)(n.Fragment,{children:!!e.children&&(0,n.jsx)("span",{...e})}),Hn=({children:e,...t})=>(0,n.jsx)(n.Fragment,{children:!!e&&(0,n.jsx)(ir,{...t,children:(0,n.jsx)(sr,{children:e})})}),fh=({children:e,layout:t,size:r,variant:a,tag:o="span",...c})=>(0,n.jsx)(o,{...c,"data-layout":t,"data-size":r,"data-variant":a,children:e}),$h=()=>(0,n.jsx)("span",{"input-element":"spacer"}),gh=e=>(0,n.jsx)(Sr,{...e,"input-element":"header"}),mh=e=>(0,n.jsx)(Hn,{...e,"input-element":"header-label"}),bh=e=>(0,n.jsx)(Sr,{...e,"input-element":"header-slot"}),yh=e=>(0,n.jsx)(Sr,{...e,"input-element":"body"}),xh=e=>(0,n.jsx)(Hn,{...e,"input-element":"input-prefix"}),wh=e=>(0,n.jsx)(Hn,{...e,"input-element":"input-suffix"}),Ah=e=>(0,n.jsx)(ph,{...e,"input-element":"input-action"}),Ch=e=>(0,n.jsx)(Sr,{...e,"input-element":"footer"}),kh=e=>(0,n.jsx)(Sr,{...e,"input-element":"footer-caption"}),Sh=e=>(0,n.jsx)(Sr,{...e,"input-element":"footer-slot"}),zh=e=>t=>{if(!(t?.target instanceof HTMLInputElement))return;const r={name:t?.target?.name,value:t?.target?.value};e?.(r,t)},Y=s`--arc•input`,Tt=s`${Y}•fg`,vo=s`${Tt}•disabled`,po=s`${Tt}•readonly`,fo=s`${Tt}•invalid`,Je=s`${Y}•bg`,$o=s`${Je}•hover`,go=s`${Je}•disabled`,mo=s`${Je}•readonly`,bo=s`${Je}•invalid`,_h=s`${Y}•align`,js=s`${_h}•items`,Eh=s`${Y}•flex`,Th=s`${Eh}•direction`,Ls=s`${Y}•header`,yo=s`${Ls}•label•color`,Rs=s`${Ls}•slot•color`,Ms=s`${Y}•footer`,Vn=s`${Ms}•caption•color`,Bs=s`${Ms}•slot•color`,Un=s`${Y}•border`,Wn=s`${Un}•radius`,Ih=s`${Un}•width`,Xe=s`${Un}•color`,Gn=s`${Y}•outline`,Ps=s`${Gn}•size`,Os=s`${Gn}•offset`,Ds=s`${Gn}•color`,ha=s`${Y}•height`,jh=s`${Y}•padding`,xo=s`${jh}•inline`,Zn=s`${xo}•end`,Ns=s`${Y}•slot`,Kn=s`${Ns}•gap`,Yn=s`${Ns}•font•size`,wo=s`${Xe}•hover`,Ao=s`${Xe}•disabled`,qn=s`${Xe}•readonly`,va=s`${Xe}•invalid`,Lh=s`${Y}•action•max•height`,Fs=s`${Y}•gap`,Jn=s`${Y}•font•size`,Rh=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${ha}: var(${l}•48);
    ${Zn}: var(${g}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${ha}: var(${l}•40);
  }

  &[data-size=md] {
    ${ha}: var(${l}•32);
    ${Wn}: var(${l}•4);
    ${Lh}: 80%;
  }

  &:has(select) {
    ${xo}: 0;
    ${js}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Jn}: var(${l}•14);
    ${Yn}: var(${l}•12);

    ${ha}: var(${l}•40); /* default size */
    ${Fs}: var(${g}•6);
    ${Kn}: var(${g}•4);
    ${xo}: var(${g}•12);
    ${Zn}: var(${g}•3);
    ${Wn}: var(${l}•8);
    ${Ih}: var(${l}•1);
    ${Ps}: var(${l}•2);
    ${Os}: var(${l}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${Y}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${Jn}: 0.875em; /* 14px at 100% */
      ${Yn}: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Tt}: var(--arc-color-fg-primary);
    ${yo}: inherit;
    ${Rs}: var(--arc-color-fg-secondary);
    ${Vn}: var(--arc-color-fg-secondary);
    ${Bs}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${Je}: var(--arc-color-bg-primary);
      ${$o}: var(--arc-color-bg-primary);
      ${Xe}: var(--arc-color-border-stark);
      ${wo}: var(--arc-color-border-heavy);

      ${vo}: var(--arc-color-fg-disabled);
      ${go}: var(--arc-color-bg-secondary);
      ${Ao}: var(--arc-color-border-mid);

      ${po}: var(--arc-color-fg-primary);
      ${mo}: var(--arc-color-bg-disabled);
      ${qn}: var(--arc-color-border-mid);

      ${fo}: var(--arc-color-fg-critical-mid);
      ${bo}: var(--arc-color-bg-primary);
      ${va}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${Je}: var(--arc-color-bg-secondary);
      ${$o}: var(--arc-color-bg-hover-default);
      ${Xe}: transparent;
      ${wo}: var(--arc-color-border-stark);

      ${fo}: var(--arc-color-fg-critical-mid);
      ${bo}: var(--arc-color-bg-critical-muted);
      ${va}: transparent;

      ${vo}: var(--arc-color-fg-disabled);
      ${go}: var(--arc-color-bg-disabled);
      ${Ao}: transparent;

      ${po}: var(--arc-color-fg-primary);
      ${mo}: var(--arc-color-bg-disabled);
      ${va}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${Je}: transparent;
      ${$o}: var(--arc-color-bg-hover-default);
      ${Xe}: transparent;
      ${wo}: transparent;

      ${fo}: var(--arc-color-fg-critical-mid);
      ${bo}: transparent;
      ${va}: var(--arc-color-fg-critical-mid);

      ${vo}: var(--arc-color-fg-disabled);
      ${go}: transparent;
      ${Ao}: transparent;

      ${po}: var(--arc-color-fg-primary);
      ${mo}: var(--arc-color-bg-disabled);
      ${qn}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${Y}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${Xe}: var(--arc-input-border-color-hover, var(${wo}));
      ${Je}: var(--arc-input-background-hover, var(${$o}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${Ds}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${Y}•cursor: default;
    ${Tt}: var(${po});
    ${Je}: var(${mo});
    ${Xe}: var(${qn});
  }

  &:has(input:disabled, select:disabled) {
    ${Y}•cursor: not-allowed;
    ${Tt}: var(${vo});
    ${Je}: var(${go});
    ${Xe}: var(${Ao});
    ${yo}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${Je}: var(${bo});
    ${yo}: var(${Tt});
    ${Xe}: var(${va});
    ${Vn}: var(${fo});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${Y}•display: flex;
  }

  &[data-layout=hug] {
    ${Y}•display: inline-flex;
  }

  & {
    ${Y}•border: var(--arc-border-width-sm) solid var(${Xe});
    ${Y}•outline: var(${Ps}) solid var(${Ds}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${Y}•display, flex);
  flex-direction: var(${Th}, column);
  gap: var(${Kn});
  color: var(--arc-input-color, var(${Tt}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${Yn}));
    gap: var(${Kn});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${yo}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Rs}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Vn}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Bs}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${js}, center);
    gap: var(${Fs});
    height: var(${ha});
    font-size: var(${Jn});

    color: var(--arc-input-color, var(${Tt}));
    background-color: var(--arc-input-background, var(${Je}));
    border: var(--arc-input-border, var(${Y}•border));
    border-radius: var(--arc-input-border-radius, var(${Wn}));
    outline: var(${Y}•outline, none);
    outline-offset: var(${Os});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Y}•cursor, unset);

    padding-inline: var(${xo});

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Zn});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      min-width: 1em;
      max-width: 100%;
      text-align: var(--arc-input-text-align, unset);
    }
  }

  [input-element=input-prefix] {
    flex: none;
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(${Y}•action•max•height, unset);
    }
  }
}

}
`,Mh={onChangeHandler:zh,Wrapper:fh,Spacer:$h,Header:gh,HeaderLabel:mh,HeaderSlot:bh,InputBody:yh,InputPrefix:xh,InputSuffix:wh,InputAction:Ah,Footer:Ch,FooterCaption:kh,FooterSlot:Sh};H("ArcInput",Rh);const ee=Mh,Hs=s`--arc•select`,De=s`${Hs}•picker`,Vs=s`${De}•fg`,Us=s`${De}•bg`,Xn=s`${Hs}•option`,Co=s`${Xn}•fg`,ko=s`${Xn}•bg`,zr=s`${Xn}•icon`,Bh=s`
  ${Vs}: currentcolor;
  ${Us}: var(--arc-color-bg-mono);

  ${De}•width: auto;
  ${De}•min•width: 3em;
  ${De}•border•radius: var(--arc-border-radius-lg);
  ${De}•shadow: var(--arc-shadow-lg);

  ${Co}: currentcolor;
  ${ko}: transparent;

  ${zr}•display: none;
  ${zr}•color: var(${Co});
`,Ph=s`
  &[data-layout=fill] {
    ${De}•width: 100%; /* fallback */
    ${De}•width: anchor-size(inline);
  }
`,Oh=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,Dh=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Nh=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${Bh}
    ${Ph}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${De}•display, none);
      flex-direction: column;
      gap: var(${g}•4);
      border: none;
      color: var(${Vs});
      width: var(--arc-select-picker-width, var(${De}•width));
      min-width: var(--arc-select-picker-min-width, var(${De}•min•width));
      margin: var(--arc-select-picker-margin, var(${g}•4) 0);
      padding: var(--arc-select-picker-padding, var(${g}•4));
      background: var(--arc-select-picker-background, var(${Us}));
      border-radius: var(--arc-select-picker-border-radius, var(${De}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${De}•shadow));
    }

    ::picker(select):popover-open {
      ${De}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${l}•12);
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${g}•8);
      width: 100%;
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${l}•24);
      --arc-avatar-initial-font-size: var(${l}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [data-element=selected-icon] {
        display: none;
      }
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${g}•8);
      width: 100%;
      min-width: 0;

      color: var(${Co});
      background: var(--arc-select-option-background, var(${ko}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${g}•8));

      &::checkmark {
        display: none;
      }

      &:hover {
        ${ko}: var(--arc-color-bg-hover-default);
      }

      &:checked {
        ${ko}: var(--arc-color-bg-selected-default);
        ${zr}•display: flex;
        ${zr}•color: var(--arc-select-option-selected-icon-color, var(${Co}));
      }

      [data-element=selected-icon] {
        display: var(${zr}•display, none);
        color: var(${zr}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }
    }
  }

  ${Oh}
  ${Dh}

}
`,Fh=(0,y.forwardRef)(({layout:e="hug",size:t="inherit",variant:r="outline",items:a,renderItem:o,headerLabel:c,headerSlot:i,footerCaption:d,footerSlot:u,readOnly:h,id:v,onChange:f,onBlur:p,onFocus:$,onKeyDown:w,onKeyUp:k,onInput:T,onInvalid:M,onClick:_,name:I,value:S,defaultValue:z,required:P,disabled:N,autoComplete:W,autoFocus:J,form:ae,...X},ye)=>{const me=Ge(v,"arc-select"),Ne=r==="plain"&&e==="fill"?"hug":e,de=N||void 0,et=h||void 0,ne=P||void 0,ht=!!(globalThis?.CSS&&typeof CSS.supports=="function"&&CSS.supports("appearance","base-select")),vt=r!=="plain"&&!!(c||i),tt=r!=="plain"&&!!(d||u),jt=a?.filter(V=>V?.variant!=="divider"&&V?.variant!=="section-label")??[],Lt=V=>{const xe=Re=>typeof Re=="string"&&Re.trim().length>0;return[V?.text,V?.avatar?.name,V?.["aria-label"]].find(xe)??"Anonymous"},rt=(V,xe)=>{if(o)return o(V,xe);const ue=na(V),Re=bs(ue),{itemId:xt,...wt}=V;return Re(wt)},at=et&&(S!=null||z!=null)?String(S??z):void 0;return(0,n.jsxs)(ee.Wrapper,{...X,"arc-select":"","arc-input":"select",layout:Ne,size:t,variant:r,children:[vt&&(0,n.jsxs)(ee.Header,{children:[(0,n.jsx)(ee.HeaderLabel,{htmlFor:me,children:c}),!!i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ee.Spacer,{}),(0,n.jsx)(ee.HeaderSlot,{children:i})]})]}),(0,n.jsx)(ee.InputBody,{children:(0,n.jsxs)("select",{name:I,value:S,defaultValue:z,required:P,disabled:N,autoComplete:W,autoFocus:J,form:ae,ref:ye,id:me,onChange:f,onBlur:p,onFocus:$,onKeyDown:w,onKeyUp:k,onInput:T,onInvalid:M,onClick:_,"aria-disabled":de,"aria-required":ne,"data-readonly":et,children:[(0,n.jsxs)("button",{children:[(0,n.jsx)("selectedcontent",{}),(0,n.jsx)("span",{"data-element":"picker-icon","aria-hidden":!0,children:(0,n.jsx)(O,{icon:"fa-regular fa-angle-down arc-fw"})})]}),jt.map((V,xe)=>{const ue=V["aria-disabled"]===!0||V.disabled===!0,Re=String(V?.value??V?.itemId??xe),xt=na(V),wt=Lt(V);return(0,n.jsx)("option",{value:Re,disabled:ue||at!==void 0&&Re!==at||void 0,"arc-select-option":"","arc-select-option-role":xt,children:ht?(0,n.jsxs)(n.Fragment,{children:[rt(V,xe),(0,n.jsx)("span",{"data-element":"selected-icon","aria-hidden":!0,children:(0,n.jsx)(O,{icon:"fa-regular fa-check arc-fw"})})]}):wt},V.itemId??xe)})]})}),tt&&(0,n.jsxs)(ee.Footer,{children:[(0,n.jsx)(ee.FooterCaption,{children:d}),!!u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ee.Spacer,{}),(0,n.jsx)(ee.FooterSlot,{children:u})]})]})]})});H("ArcSelect",Nh);const Hh=L(ze,["inherit","md","sm"]),$e={On:"on",Off:"off"},_r={Before:"before",After:"after"},Vh=({disabled:e,id:t,name:r,size:a="md",value:o,labelOff:c,labelOn:i,onChange:d,...u})=>{const h=Ge(r,"arc-switch-name"),v=Ge(t?`${t}-off`:void 0,"arc-switch-off"),f=Ge(t?`${t}-on`:void 0,"arc-switch-on"),p=_=>{if(_.code==="Space"){_.preventDefault(),_.stopPropagation();const I=o===$e.On?$e.Off:$e.On;d?.({value:I},_)}},$=_=>{const I={on:Vr(i),off:Vr(c)};return I?.on&&I?.off?I[_]:!I?.on&&I?.off?`${I?.off}: ${_}`:I?.on&&!I?.off?`${I?.on}: ${_}`:I[_]},w=(0,n.jsxs)(co,{type:"switch",onKeyDown:p,children:[(0,n.jsx)(oa,{type:"switch",name:h,id:v,value:$e.Off,checked:o===$e.Off,disabled:e,"aria-label":$($e.Off)?.trim(),onChange:d}),(0,n.jsx)(oa,{type:"switch",name:h,id:f,value:$e.On,checked:o===$e.On,disabled:e,"aria-label":$($e.On)?.trim(),onChange:d}),(0,n.jsx)("span",{"data-element":"mask"})]}),k=!i&&o===$e.Off?f:v,T=!c&&o===$e.On?v:f,M=!!(i||c)&&(0,n.jsxs)(n.Fragment,{children:[!!c&&(0,n.jsx)(ir,{htmlFor:k,"arc-switch-label":i?$e.Off:"",children:(0,n.jsx)(sr,{children:c})}),w,!!i&&(0,n.jsx)(ir,{htmlFor:T,"arc-switch-label":c?$e.On:"",children:(0,n.jsx)(sr,{children:i})})]});return(0,n.jsx)("span",{...u,"arc-switch":"","data-state":o,"data-size":a,role:"radiogroup",children:M||w})},le=s`--arc•switch`,q=s`${le}•knob`,Uh=s`
@layer arc-components {

  [arc-switch] {
    ${le}•background: var(--arc-color-alpha-white-100);
    ${q}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${le}•background: var(--arc-color-alpha-white-70);
      ${q}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${x}•background: var(--arc-color-bg-neutral-subtle);
      ${x}•border•color: var(--arc-color-border-stark);
      ${q}•border•color: var(--arc-color-border-on-stark);
      ${q}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•border•color: var(--arc-color-border-heavy);
        ${q}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
        ${q}•border•color: var(--arc-color-border-on-stark);
        ${q}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: var(--arc-color-border-theme-heavy);
      ${q}•border•color: var(--arc-color-border-theme-heavy);
      ${q}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${x}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${le}•font•size: 1em;
      ${le}•width: 2.5em;
      ${le}•height: 1.5em;
      ${le}•gap: 0.5em;
      ${q}•size: 1.5em;
      ${q}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${le}•font•size: var(${l}•14);
      ${le}•width: var(${l}•40);
      ${le}•height: var(${l}•24);
      ${le}•gap: var(${l}•8);
      ${q}•x•shift: var(${l}•4);
      ${q}•size: var(${l}•24);
    }

    &[data-size=sm] {
      ${le}•font•size: var(${l}•12);
      ${le}•width: var(${l}•30);
      ${le}•height: var(${l}•14);
      ${le}•gap: var(${l}•8);
      ${q}•x•shift: var(${l}•1);
      ${q}•size: var(${l}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-pill);
    ${x}•width: var(${le}•width);
    ${x}•height: var(${le}•height);
    ${x}•x•shift: var(${q}•x•shift);
    ${x}•size: var(${q}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${q}•translate: calc(-100% + var(${q}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${q}•translate: calc(0% - var(${q}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${le}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${le}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${x}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${q}•translate);

      display: inline-flex;
      width: var(${q}•size);
      height: var(${q}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${q}•color);
      box-shadow: var(${q}•shadow);
      border: var(${x}•border•width) solid var(${q}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,Wh=({disabled:e,id:t,name:r,size:a="md",value:o,label:c,labelPosition:i=_r.After,onChange:d,labelOff:u,labelOn:h,...v})=>{const f=Ge(r,"arc-switch-name"),p=Ge(t,"arc-switch"),$=(T,M)=>{const _=T.checked?$e.On:$e.Off;d?.({...T,value:_},M)};!c&&(h||u)&&(c=h||u,i=h?_r.After:_r.Before);const w=(0,n.jsxs)(co,{type:"checkbox",children:[(0,n.jsx)(oa,{type:"checkbox",name:f,id:p,checked:o===$e.On,disabled:e,role:"switch","aria-checked":o===$e.On,"aria-label":c?void 0:"Toggle switch",tabIndex:0,onChange:$}),(0,n.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),k=(0,n.jsx)(ir,{htmlFor:p,"arc-switch-label":i,children:(0,n.jsx)(sr,{children:c})});return u&&h?(0,n.jsx)(Vh,{...v,disabled:e,id:t,name:r,labelOff:u,labelOn:h,size:a,value:o,onChange:d}):(0,n.jsxs)("span",{...v,"arc-switch":"","data-state":o,"data-size":a,"data-label-position":i,role:"presentation","aria-live":"off",children:[c&&i===_r.Before&&k,w,c&&i===_r.After&&k]})};H("ArcSwitch",Uh);const Gh=["title","heading","subheading","body"],Ws=["h1","h2","h3","h4","h5","h6"],Gs=["code","div","li","p","pre","span"],Zs=[...Ws,...Gs],Zh=[...Ot],Kh=["title-inherit","title-lg","title-md","title-sm"],Yh=["heading-inherit","heading-lg","heading-md","heading-sm"],qh=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Jh=L(ie,["inherit","primary","primary-inverse"]),Xh=["body-inherit","body-lg","body-md","body-sm","body-xs"],Qh=_e(ie,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),ev=L(ka,["inherit","start","center","justify","end"]),tv=L(Sa,["inherit","loose","standard","tight"]),rv={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},av=e=>{const{align:t,lineHeight:r,size:a,variant:o,scheme:c="auto",isMonospace:i,tag:d,...u}=e,h=rv?.[d]??"body",v=a?.includes("inherit")?a?.split("-")?.[0]:a,f=o?.endsWith("-inverse");let p;return c!=="auto"?p=c:f&&(p=void 0),{...u,"arc-text":v||h,"arc-scheme":p,"data-is-monospace":i?"":void 0,"data-align":t?.includes("inherit")?void 0:t,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":r?.includes("inherit")?void 0:r}},It=s`--arc•text`,Qn=s`${It}•font`,Er=s`${It}•align`,mt=s`${It}fg`,Ks=s`${It}•flex`,Ys=s`${It}•hyphens`,pa=s`${It}•letterspacing`,bt=s`${It}•lineheight`,qs=s`${It}•opacity`,Js=s`${It}•whitespace`,lr=s`${Qn}•family`,ce=s`${Qn}•size`,Tr=s`${Qn}•weight`,ov=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Er}: unset;
  ${mt}: unset;
  ${Ks}: unset;
  ${Ys}: auto;
  ${pa}: unset;
  ${bt}: unset;
  ${qs}: unset;
  ${Js}: unset;

  ${lr}: unset;
  ${ce}: unset;
  ${Tr}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${bt}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${bt}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${bt}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Er}: start;
  }

  &[data-align=center] {
    ${Er}: center;
  }

  &[data-align=justify] {
    ${Er}: justify;
  }

  &[data-align=end] {
    ${Er}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${mt}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${mt}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${mt}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${mt}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${mt}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${mt}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${mt}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${mt}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${lr}: var(--arc-font-family-title);
  ${Tr}: var(--arc-font-weight-title);
  ${pa}: var(--arc-letter-spacing-title);
  ${bt}: var(--arc-line-height-title);

  ${ce}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ce}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${ce}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${ce}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${lr}: var(--arc-font-family-heading);
  ${Tr}: var(--arc-font-weight-heading);
  ${pa}: var(--arc-letter-spacing-heading);
  ${bt}: var(--arc-line-height-heading);

  ${ce}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ce}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${ce}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${ce}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${lr}: var(--arc-font-family-subheading);
  ${Tr}: var(--arc-font-weight-subheading);
  ${pa}: unset;
  ${bt}: var(--arc-line-height-subheading);

  ${ce}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ce}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${ce}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${ce}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${lr}: var(--arc-font-family-body);
  ${Tr}: var(--arc-font-weight-body);
  ${bt}: var(--arc-line-height-body);
  ${ce}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${ce}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${ce}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${ce}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${ce}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${ce}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${lr}: var(--arc-font-family-mono);
  ${bt}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Ks}));
  hyphens: var(--arc-text-hyphens, var(${Ys})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${qs}));
  text-align: var(--arc-text-align, var(${Er}));
  white-space: var(--arc-text-white-space, var(${Js}));

  color: var(--arc-text-color, var(${mt}));

  font-size: var(--arc-text-font-size, var(${ce}));
  font-family: var(--arc-text-font-family, var(${lr}));
  font-weight: var(--arc-text-font-weight, var(${Tr}));
  line-height: var(--arc-text-line-height, var(${bt}));
  letter-spacing: var(--arc-text-letter-spacing, var(${pa}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,nv=e=>(0,y.forwardRef)((t,r)=>(0,y.createElement)(e,{...av({...t,tag:e}),ref:r})),iv=[...Zs].reduce((e,t)=>({...e,[t]:nv(t)}),{});H("Arc",ov);const sv=Ts,cv=Is,lv=L(dh,["outline","solid"]),dv=["text","number","password","email","url"],uv=(0,y.forwardRef)(({layout:e="hug",size:t="inherit",variant:r="outline",inputProps:a,headerLabel:o,headerSlot:c,inputPrefix:i,inputAction:d,inputSuffix:u,footerCaption:h,footerSlot:v,...f},p)=>{const{id:$,onChange:w,...k}=a,T=k?.type||"text",M=k?.disabled||void 0,_=k?.readOnly||void 0,I=k?.required||void 0,S=!!(o||c),z=!!(h||v);return(0,n.jsxs)(ee.Wrapper,{...f,"arc-text-input":"","arc-input":T,layout:e,size:t,variant:r,children:[S&&(0,n.jsxs)(ee.Header,{children:[(0,n.jsx)(ee.HeaderLabel,{htmlFor:$,children:o}),!!c&&(0,n.jsx)(ee.Spacer,{}),(0,n.jsx)(ee.HeaderSlot,{children:c})]}),(0,n.jsxs)(ee.InputBody,{children:[(0,n.jsx)(ee.InputPrefix,{htmlFor:$,children:i}),(0,n.jsx)("input",{...k,ref:p,id:$,"arc-input-type":T,onChange:ee.onChangeHandler(w),"aria-disabled":M,"aria-readonly":_,"aria-required":I}),(0,n.jsx)(ee.InputSuffix,{htmlFor:$,children:u}),(0,n.jsx)(ee.InputAction,{children:d})]}),z&&(0,n.jsxs)(ee.Footer,{children:[(0,n.jsx)(ee.FooterCaption,{children:h}),!!v&&(0,n.jsx)(ee.Spacer,{}),(0,n.jsx)(ee.FooterSlot,{children:v})]})]})}),hv=L(ie,["common","ai","critical"]),Xs=[...Ot],Qs=["default","success","warning","error"],ec=L(ze,["inherit","md"]),tc=L(ie,["common"]),rc=[...Kt],vv=[...hr],ac=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],pv=hv.filter(e=>e!=="critical"),oc={size:ec[1],variant:tc[0],scheme:Xs[2],popover:rc[2],placement:ac[4],severity:Qs[0],showDismiss:!0},nc=(e,t="toggle")=>{const r=document.getElementById(e);({toggle:()=>r?.togglePopover(),show:()=>r?.showPopover(),hide:()=>r?.hidePopover()})[t]()},ic=s`--arc•progress`,fv=s`${ic}•bar`,$v=s`${ic}•value`,sc=s`${fv}•bg`,fa=s`${$v}•bg`,gv=s`
@layer arc-components {
[arc-progress-bar] {
  ${sc}: var(--arc-color-alpha-subtle);
  ${fa}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${fa}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${fa}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${l}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${sc}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${fa}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${fa}));
  }
}

}
`,mv=({progress:e=0,variant:t="common",...r})=>(0,n.jsxs)("progress",{...r,"arc-progress-bar":"","data-variant":t,value:e,max:r.max||100,"aria-valuenow":e,"aria-valuemax":r.max||100,children:[e,"% "]});H("ArcProgressBar",gv);const yt=s`--arc•toast`,So=s`${yt}•content`,cc=s`${yt}•color`,lc=s`${yt}•background`,$a=s`${yt}•icon•color`,ga=s`${yt}•transition`,bv=s`
@layer arc-components {

  [arc-toast] {
    ${So}•gap: var(${g}•2);
    ${ga}•duration: 300ms;
    ${$a}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${yt}•font•size: var(${l}•16);
      ${So}•font•size: var(${l}•14);
    }

    &[data-size=inherit] {
      ${yt}•font•size: 1em;
      ${So}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${$a}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${$a}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${$a}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${lc}: var(--arc-color-bg-mono);
      ${cc}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${g}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${yt}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${cc}));
    background-color: var(--arc-toast-background, var(${lc}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${g}•12) var(${g}•12) var(${g}•12) var(${g}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${yt}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${yt}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${g}•8) var(${g}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${g}•8);
      padding: var(${g}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${$a}));

      height: 1lh;
      padding: 0 var(${g}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${So}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${g}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${ga}•duration) allow-discrete,
      overlay var(${ga}•duration) allow-discrete,
      content-visibility var(${ga}•duration) allow-discrete,
      opacity var(${ga}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,dc=({id:e,children:t,icon:r,heading:a,subtext:o,dismissProps:c,showDismiss:i=!0,onClose:d,actionSlot:u,size:h="md",variant:v="common",scheme:f=oc.scheme,placement:p="bottom-left",getToastId:$,progressBarProps:w,severity:k,...T})=>{const M=()=>{d?.()},_=f==="auto"?void 0:f,I=!!u||i,S=Ge(e,"arc-toast"),{variant:z,hierarchy:P,...N}=c||{};(0,y.useEffect)(()=>{$?.(S)},[$,S]);const W=Ri(r);return(0,n.jsx)("div",{...T,"arc-toast":"","arc-scheme":_,"data-size":h,"data-variant":v,"data-placement":p,"data-severity":k||void 0,id:S,children:(0,n.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[r&&(0,n.jsx)(O,{icon:W,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:t||(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:a})}),o&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),I&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[u,i&&(0,n.jsx)(Te,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...N,popoverTarget:S,onClick:M})]}),w&&(0,n.jsx)(mv,{...w,variant:k==="error"?"critical":w.variant,"arc-toast-progress-bar":""})]})})};dc.handleToast=nc,H("ArcToast",bv);var Yv=Me(18324),ge,oe,We,dt,yv,uc;function xv(e=!1){if(typeof e!="boolean")throw new Error("defaultValue must be `true` or `false`");const[t,r]=ge(e),a=oe(()=>{r(!0)},[]),o=oe(()=>{r(!1)},[]),c=oe(()=>{r(i=>!i)},[]);return{value:t,setValue:r,setTrue:a,setFalse:o,toggle:c}}var ut=typeof window<"u"?y.useLayoutEffect:y.useEffect;function Qe(e,t,r,a){const o=(0,y.useRef)(t);ut(()=>{o.current=t},[t]),(0,y.useEffect)(()=>{const c=r?.current??window;if(!(c&&c.addEventListener))return;const i=d=>{o.current(d)};return c.addEventListener(e,i,a),()=>{c.removeEventListener(e,i,a)}},[e,r,a])}function qv(e){Qe("click",t=>{e(t)})}function Jv(){const[e,t]=ge(null),r=oe(async a=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(a),t(a),!0}catch(o){return console.warn("Copy failed",o),t(null),!1}},[]);return[e,r]}function wv(e){const[t,r]=ge(e??0),a=oe(()=>{r(i=>i+1)},[]),o=oe(()=>{r(i=>i-1)},[]),c=oe(()=>{r(e??0)},[e]);return{count:t,increment:a,decrement:o,reset:c,setCount:r}}function Av(e,t){const r=We(e);ut(()=>{r.current=e},[e]),dt(()=>{if(t===null)return;const a=setInterval(()=>{r.current()},t);return()=>{clearInterval(a)}},[t])}function Xv({countStart:e,countStop:t=0,intervalMs:r=1e3,isIncrement:a=!1}){const{count:o,increment:c,decrement:i,reset:d}=wv(e),{value:u,setTrue:h,setFalse:v}=xv(!1),f=oe(()=>{v(),d()},[v,d]),p=oe(()=>{if(o===t){v();return}a?c():i()},[o,t,i,c,a,v]);return Av(p,u?r:null),[o,{startCountdown:h,stopCountdown:v,resetCountdown:f}]}function zo(e){const t=(0,y.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return ut(()=>{t.current=e},[e]),(0,y.useCallback)((...r)=>{var a;return(a=t.current)==null?void 0:a.call(t,...r)},[t])}var ei=typeof window>"u";function ti(e,t,r={}){const{initializeWithValue:a=!0}=r,o=(0,y.useCallback)(p=>r.serializer?r.serializer(p):JSON.stringify(p),[r]),c=(0,y.useCallback)(p=>{if(r.deserializer)return r.deserializer(p);if(p==="undefined")return;const $=t instanceof Function?t():t;let w;try{w=JSON.parse(p)}catch(k){return console.error("Error parsing JSON:",k),$}return w},[r,t]),i=(0,y.useCallback)(()=>{const p=t instanceof Function?t():t;if(ei)return p;try{const $=window.localStorage.getItem(e);return $?c($):p}catch($){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,$),p}},[t,e,c]),[d,u]=(0,y.useState)(()=>a?i():t instanceof Function?t():t),h=zo(p=>{ei&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{const $=p instanceof Function?p(i()):p;window.localStorage.setItem(e,o($)),u($),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch($){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,$)}}),v=zo(()=>{ei&&console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);const p=t instanceof Function?t():t;window.localStorage.removeItem(e),u(p),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});(0,y.useEffect)(()=>{u(i())},[e]);const f=(0,y.useCallback)(p=>{p.key&&p.key!==e||u(i())},[e,i]);return Qe("storage",f),Qe("local-storage",f),[d,h,v]}var Cv=typeof window>"u";function hc(e,{defaultValue:t=!1,initializeWithValue:r=!0}={}){const a=d=>Cv?t:window.matchMedia(d).matches,[o,c]=ge(()=>r?a(e):t);function i(){c(a(e))}return ut(()=>{const d=window.matchMedia(e);return i(),d.addListener?d.addListener(i):d.addEventListener("change",i),()=>{d.removeListener?d.removeListener(i):d.removeEventListener("change",i)}},[e]),o}var kv="(prefers-color-scheme: dark)",Sv="usehooks-ts-dark-mode";function Qv(e={}){const{defaultValue:t,localStorageKey:r=Sv,initializeWithValue:a=!0}=e,o=hc(kv,{initializeWithValue:a,defaultValue:t}),[c,i]=ti(r,t??o??!1,{initializeWithValue:a});return ut(()=>{o!==c&&i(o)},[o]),{isDarkMode:c,toggle:()=>{i(d=>!d)},enable:()=>{i(!0)},disable:()=>{i(!1)},set:d=>{i(d)}}}function vc(e){const t=We(e);t.current=e,dt(()=>()=>{t.current()},[])}function ri(e,t=500,r){const a=We();vc(()=>{a.current&&a.current.cancel()});const o=yv(()=>{const c=uc(e,t,r),i=(...d)=>c(...d);return i.cancel=()=>{c.cancel()},i.isPending=()=>!!a.current,i.flush=()=>c.flush(),i},[e,t,r]);return dt(()=>{a.current=uc(e,t,r)},[e,t,r]),o}function ep(e,t,r){const a=r?.equalityFn??((h,v)=>h===v),o=e instanceof Function?e():e,[c,i]=ge(o),d=We(o),u=ri(i,t,r);return a(d.current,o)||(u(o),d.current=o),[c,u]}function tp(e,t={}){const{preserveTitleOnUnmount:r=!0}=t,a=We(null);ut(()=>{a.current=window.document.title},[]),ut(()=>{window.document.title=e},[e]),vc(()=>{!r&&a.current&&(window.document.title=a.current)})}function rp(e){const[t,r]=ge(!1),a=()=>{r(!0)},o=()=>{r(!1)};return Qe("mouseenter",a,e),Qe("mouseleave",o,e),t}function ap({threshold:e=0,root:t=null,rootMargin:r="0%",freezeOnceVisible:a=!1,initialIsIntersecting:o=!1,onChange:c}={}){var i;const[d,u]=ge(null),[h,v]=ge(()=>({isIntersecting:o,entry:void 0})),f=We();f.current=c;const p=((i=h.entry)==null?void 0:i.isIntersecting)&&a;dt(()=>{if(!d||!("IntersectionObserver"in window)||p)return;let k;const T=new IntersectionObserver(M=>{const _=Array.isArray(T.thresholds)?T.thresholds:[T.thresholds];M.forEach(I=>{const S=I.isIntersecting&&_.some(z=>I.intersectionRatio>=z);v({isIntersecting:S,entry:I}),f.current&&f.current(S,I),S&&a&&k&&(k(),k=void 0)})},{threshold:e,root:t,rootMargin:r});return T.observe(d),()=>{T.disconnect()}},[d,JSON.stringify(e),t,r,p,a]);const $=We(null);dt(()=>{var k;!d&&((k=h.entry)!=null&&k.target)&&!a&&!p&&$.current!==h.entry.target&&($.current=h.entry.target,v({isIntersecting:o,entry:void 0}))},[d,h.entry,a,p,o]);const w=[u,!!h.isIntersecting,h.entry];return w.ref=w[0],w.isIntersecting=w[1],w.entry=w[2],w}function op(){const[e,t]=ge(!1);return dt(()=>{t(!0)},[]),e}function zv(){const e=We(!1);return dt(()=>(e.current=!0,()=>{e.current=!1}),[]),oe(()=>e.current,[])}function np(e=new Map){const[t,r]=ge(new Map(e)),a={set:oe((o,c)=>{r(i=>{const d=new Map(i);return d.set(o,c),d})},[]),setAll:oe(o=>{r(()=>new Map(o))},[]),remove:oe(o=>{r(c=>{const i=new Map(c);return i.delete(o),i})},[]),reset:oe(()=>{r(()=>new Map)},[])};return[t,a]}function ip(e,t,r="mousedown",a={}){Qe(r,o=>{const c=o.target;if(!c||!c.isConnected)return;(Array.isArray(e)?e.filter(d=>!!d.current).every(d=>d.current&&!d.current.contains(c)):e.current&&!e.current.contains(c))&&t(o)},void 0,a)}var pc=typeof window>"u";function sp(e,t={}){let{initializeWithValue:r=!0}=t;pc&&(r=!1);const a=oe(u=>{if(t.deserializer)return t.deserializer(u);if(u==="undefined")return;let h;try{h=JSON.parse(u)}catch(v){return console.error("Error parsing JSON:",v),null}return h},[t]),o=oe(()=>{if(pc)return null;try{const u=window.localStorage.getItem(e);return u?a(u):null}catch(u){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,u),null}},[e,a]),[c,i]=ge(()=>{if(r)return o()});dt(()=>{i(o())},[e]);const d=oe(u=>{u.key&&u.key!==e||i(o())},[e,o]);return Qe("storage",d),Qe("local-storage",d),c}var fc={width:void 0,height:void 0};function cp(e){const{ref:t,box:r="content-box"}=e,[{width:a,height:o},c]=ge(fc),i=zv(),d=We({...fc}),u=We(void 0);return u.current=e.onResize,dt(()=>{if(!t.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([v])=>{const f=r==="border-box"?"borderBoxSize":r==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",p=$c(v,f,"inlineSize"),$=$c(v,f,"blockSize");if(d.current.width!==p||d.current.height!==$){const k={width:p,height:$};d.current.width=p,d.current.height=$,u.current?u.current(k):i()&&c(k)}});return h.observe(t.current,{box:r}),()=>{h.disconnect()}},[r,t,i]),{width:a,height:o}}function $c(e,t,r){return e[t]?Array.isArray(e[t])?e[t][0][r]:e[t][r]:t==="contentBoxSize"?e.contentRect[r==="inlineSize"?"width":"height"]:void 0}var gc=typeof window>"u";function lp(e={}){let{initializeWithValue:t=!0}=e;gc&&(t=!1);const r=()=>{if(!gc)return window.screen},[a,o]=ge(()=>{if(t)return r()}),c=ri(o,e.debounceDelay);function i(){const d=r(),u=e.debounceDelay?c:o;if(d){const{width:h,height:v,availHeight:f,availWidth:p,colorDepth:$,orientation:w,pixelDepth:k}=d;u({width:h,height:v,availHeight:f,availWidth:p,colorDepth:$,orientation:w,pixelDepth:k})}}return Qe("resize",i),ut(()=>{i()},[]),a}var _o=new Map;function _v(e){const t=document.querySelector(`script[src="${e}"]`),r=t?.getAttribute("data-status");return{node:t,status:r}}function dp(e,t){const[r,a]=ge(()=>!e||t?.shouldPreventLoad?"idle":typeof window>"u"?"loading":_o.get(e)??"loading");return dt(()=>{if(!e||t?.shouldPreventLoad)return;const o=_o.get(e);if(o==="ready"||o==="error"){a(o);return}const c=_v(e);let i=c.node;if(i)a(c.status??o??"loading");else{i=document.createElement("script"),i.src=e,i.async=!0,t?.id&&(i.id=t.id),i.setAttribute("data-status","loading"),document.body.appendChild(i);const u=h=>{const v=h.type==="load"?"ready":"error";i?.setAttribute("data-status",v)};i.addEventListener("load",u),i.addEventListener("error",u)}const d=u=>{const h=u.type==="load"?"ready":"error";a(h),_o.set(e,h)};return i.addEventListener("load",d),i.addEventListener("error",d),()=>{i&&(i.removeEventListener("load",d),i.removeEventListener("error",d)),i&&t?.removeOnUnmount&&(i.remove(),_o.delete(e))}},[e,t?.shouldPreventLoad,t?.removeOnUnmount,t?.id]),r}var Ev=typeof window>"u";function up(e={}){const{autoLock:t=!0,lockTarget:r,widthReflow:a=!0}=e,[o,c]=ge(!1),i=We(null),d=We(null),u=()=>{if(i.current){const{overflow:v,paddingRight:f}=i.current.style;if(d.current={overflow:v,paddingRight:f},a){const p=i.current===document.body?window.innerWidth:i.current.offsetWidth,$=parseInt(window.getComputedStyle(i.current).paddingRight,10)||0,w=p-i.current.scrollWidth;i.current.style.paddingRight=`${w+$}px`}i.current.style.overflow="hidden",c(!0)}},h=()=>{i.current&&d.current&&(i.current.style.overflow=d.current.overflow,a&&(i.current.style.paddingRight=d.current.paddingRight)),c(!1)};return ut(()=>{if(!Ev)return r&&(i.current=typeof r=="string"?document.querySelector(r):r),i.current||(i.current=document.body),t&&u(),()=>{h()}},[t,r,a]),{isLocked:o,lock:u,unlock:h}}var ai=typeof window>"u";function Tv(e,t,r={}){const{initializeWithValue:a=!0}=r,o=(0,y.useCallback)(p=>r.serializer?r.serializer(p):JSON.stringify(p),[r]),c=(0,y.useCallback)(p=>{if(r.deserializer)return r.deserializer(p);if(p==="undefined")return;const $=t instanceof Function?t():t;let w;try{w=JSON.parse(p)}catch(k){return console.error("Error parsing JSON:",k),$}return w},[r,t]),i=(0,y.useCallback)(()=>{const p=t instanceof Function?t():t;if(ai)return p;try{const $=window.sessionStorage.getItem(e);return $?c($):p}catch($){return console.warn(`Error reading sessionStorage key \u201C${e}\u201D:`,$),p}},[t,e,c]),[d,u]=(0,y.useState)(()=>a?i():t instanceof Function?t():t),h=zo(p=>{ai&&console.warn(`Tried setting sessionStorage key \u201C${e}\u201D even though environment is not a client`);try{const $=p instanceof Function?p(i()):p;window.sessionStorage.setItem(e,o($)),u($),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))}catch($){console.warn(`Error setting sessionStorage key \u201C${e}\u201D:`,$)}}),v=zo(()=>{ai&&console.warn(`Tried removing sessionStorage key \u201C${e}\u201D even though environment is not a client`);const p=t instanceof Function?t():t;window.sessionStorage.removeItem(e),u(p),window.dispatchEvent(new StorageEvent("session-storage",{key:e}))});(0,y.useEffect)(()=>{u(i())},[e]);const f=(0,y.useCallback)(p=>{p.key&&p.key!==e||u(i())},[e,i]);return Qe("storage",f),Qe("session-storage",f),[d,h,v]}function hp(e){const[t,r]=ge(1),a=t+1<=e,o=t-1>0,c=oe(h=>{const v=h instanceof Function?h(t):h;if(v>=1&&v<=e){r(v);return}throw new Error("Step not valid")},[e,t]),i=oe(()=>{a&&r(h=>h+1)},[a]),d=oe(()=>{o&&r(h=>h-1)},[o]),u=oe(()=>{r(1)},[]);return[t,{goToNextStep:i,goToPrevStep:d,canGoToNextStep:a,canGoToPrevStep:o,setStep:c,reset:u}]}var Iv="(prefers-color-scheme: dark)",jv="usehooks-ts-ternary-dark-mode";function vp({defaultValue:e="system",localStorageKey:t=jv,initializeWithValue:r=!0}={}){const a=hc(Iv,{initializeWithValue:r}),[o,c]=ti(t,e,{initializeWithValue:r});return{isDarkMode:o==="dark"||o==="system"&&a,ternaryDarkMode:o,setTernaryDarkMode:c,toggleTernaryDarkMode:()=>{const u=["light","system","dark"];c(h=>{const v=(u.indexOf(h)+1)%u.length;return u[v]})}}}function pp(e,t){const r=We(e);ut(()=>{r.current=e},[e]),dt(()=>{if(!t&&t!==0)return;const a=setTimeout(()=>{r.current()},t);return()=>{clearTimeout(a)}},[t])}function fp(e){const[t,r]=ge(!!e),a=oe(()=>{r(o=>!o)},[]);return[t,a,r]}var Lv=typeof window>"u";function $p(e={}){let{initializeWithValue:t=!0}=e;Lv&&(t=!1);const[r,a]=ge(()=>t?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=ri(a,e.debounceDelay);function c(){(e.debounceDelay?o:a)({width:window.innerWidth,height:window.innerHeight})}return Qe("resize",c),ut(()=>{c()},[]),r}var ma;(function(e){e.None="none",e.Persistent="localStorage",e.Temporary="sessionStorage"})(ma||(ma={}));const Rv=(e,t,r)=>{const[a,o]=(0,y.useState)(t),[c,i]=Tv(e,t),[d,u]=ti(e,t);return r===ma.Temporary?[c,i]:r===ma.Persistent?[d,u]:[a,o]},Mv=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
