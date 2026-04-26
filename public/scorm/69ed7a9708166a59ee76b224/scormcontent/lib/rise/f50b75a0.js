(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_22_0__articulate_design-system-to-32e01d"],{98998(Hi){var wt="Expected a function",sa=NaN,re="[object Symbol]",Ct=/^\s+|\s+$/g,Wn=/^[-+]0x[0-9a-f]+$/i,Co=/^0b[01]+$/i,zr=/^0o[0-7]+$/i,At=parseInt,Ia=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,St=typeof self=="object"&&self&&self.Object===Object&&self,zt=Ia||St||Function("return this")(),aa=Object.prototype,Se=aa.toString,Et=Math.max,Kn=Math.min,ze=function(){return zt.Date.now()};function Ye(lr,Vr,ja){var ge,q,Kr,La,va,pa,_e=0,Tt=!1,Ra=!1,n=!0;if(typeof lr!="function")throw new TypeError(wt);Vr=Ao(Vr)||0,Ee(ja)&&(Tt=!!ja.leading,Ra="maxWait"in ja,Kr=Ra?Et(Ao(ja.maxWait)||0,Vr):Kr,n="trailing"in ja?!!ja.trailing:n);function h(Er){var Ha=ge,Ie=q;return ge=q=void 0,_e=Er,La=lr.apply(Ie,Ha),La}function qe(Er){return _e=Er,va=setTimeout(Te,Vr),Tt?h(Er):La}function So(Er){var Ha=Er-pa,Ie=Er-_e,It=Vr-Ha;return Ra?Kn(It,Kr-Ie):It}function Ze(Er){var Ha=Er-pa,Ie=Er-_e;return pa===void 0||Ha>=Vr||Ha<0||Ra&&Ie>=Kr}function Te(){var Er=ze();if(Ze(Er))return zo(Er);va=setTimeout(Te,So(Er))}function zo(Er){return va=void 0,n&&ge?h(Er):(ge=q=void 0,La)}function Yn(){va!==void 0&&clearTimeout(va),_e=0,ge=pa=q=va=void 0}function s(){return va===void 0?La:zo(ze())}function Eo(){var Er=ze(),Ha=Ze(Er);if(ge=arguments,q=this,pa=Er,Ha){if(va===void 0)return qe(pa);if(Ra)return va=setTimeout(Te,Vr),h(pa)}return va===void 0&&(va=setTimeout(Te,Vr)),La}return Eo.cancel=Yn,Eo.flush=s,Eo}function Ee(lr){var Vr=typeof lr;return!!lr&&(Vr=="object"||Vr=="function")}function _t(lr){return!!lr&&typeof lr=="object"}function Gn(lr){return typeof lr=="symbol"||_t(lr)&&Se.call(lr)==re}function Ao(lr){if(typeof lr=="number")return lr;if(Gn(lr))return sa;if(Ee(lr)){var Vr=typeof lr.valueOf=="function"?lr.valueOf():lr;lr=Ee(Vr)?Vr+"":Vr}if(typeof lr!="string")return lr===0?lr:+lr;lr=lr.replace(Ct,"");var ja=Co.test(lr);return ja||zr.test(lr)?At(lr.slice(2),ja?2:8):Wn.test(lr)?sa:+lr}Hi.exports=Ye},50650(Hi,wt,sa){"use strict";sa.r(wt),sa.d(wt,{Arc:()=>Rf,ArcAbstractFlexLayouts:()=>Vr,ArcAbstractGapSizes:()=>_t,ArcAbstractIconSizes:()=>Ee,ArcAbstractOrientations:()=>ja,ArcAbstractPopoverActions:()=>Ye,ArcAbstractPopoverModes:()=>ze,ArcAbstractTextLayouts:()=>lr,ArcAbstractTextOverflows:()=>Ao,ArcAbstractTextSizes:()=>Gn,ArcAvatar:()=>vc,ArcAvatarColors:()=>is,ArcAvatarColorsReserved:()=>gu,ArcAvatarOverflow:()=>g0,ArcAvatarOverflowSizes:()=>$u,ArcAvatarPile:()=>Wu,ArcAvatarPileSizes:()=>bu,ArcAvatarSizes:()=>vu,ArcAvatarText:()=>pc,ArcAvatarTextGapSizes:()=>pu,ArcAvatarTextOverflows:()=>fu,ArcAvatarTextSizes:()=>mu,ArcBadge:()=>E0,ArcBadgeColors:()=>x0,ArcBadgeContrasts:()=>A0,ArcBadgeCount:()=>O0,ArcBadgeCountColors:()=>k0,ArcBadgeCountContrasts:()=>M0,ArcBadgeCountShapes:()=>B0,ArcBadgeCountSizes:()=>R0,ArcBadgeCountVariants:()=>P0,ArcBadgeLayouts:()=>C0,ArcBadgeSizes:()=>w0,ArcBadgeVariants:()=>S0,ArcBanner:()=>eg,ArcBannerActionPlacements:()=>Z0,ArcBannerAlignments:()=>X0,ArcBannerDefaults:()=>fe,ArcBannerDensities:()=>Y0,ArcBannerLayouts:()=>q0,ArcBannerSchemes:()=>J0,ArcBannerVariants:()=>rg,ArcButton:()=>kr,ArcButtonDeprecatedVariants:()=>Hs,ArcButtonHierarchies:()=>Ph,ArcButtonLayouts:()=>Ih,ArcButtonPopoverActions:()=>Mh,ArcButtonSchemes:()=>Lh,ArcButtonShadows:()=>Rh,ArcButtonShapes:()=>_h,ArcButtonSizes:()=>Th,ArcButtonVariants:()=>jh,ArcCheckbox:()=>Qs,ArcCheckboxBar:()=>fg,ArcCheckboxBarLayouts:()=>gg,ArcCheckboxBarOption:()=>pg,ArcCheckboxBarSizes:()=>vg,ArcCheckboxLayouts:()=>lg,ArcCheckboxSizes:()=>dg,ArcCheckboxVariants:()=>ug,ArcColorAllTools:()=>rl,ArcColorPalette:()=>yn,ArcColorPaletteAddFlows:()=>$g,ArcColorPicker:()=>Ve,ArcColorPickerDefaults:()=>$e,ArcColorPickerModes:()=>mg,ArcColorSimpleTools:()=>al,ArcColorSwatch:()=>ii,ArcColorSwatchKinds:()=>bg,ArcColorValueFormats:()=>Uf,ArcDropdownMenu:()=>ki,ArcIcon:()=>cr,ArcIconText:()=>Yr,ArcIconTextVariants:()=>hh,ArcInputAction:()=>cd,ArcLabel:()=>me,ArcLabelContent:()=>Oe,ArcLabelLayouts:()=>tg,ArcLink:()=>ip,ArcLinkVariants:()=>cp,ArcModal:()=>Ep,ArcModalAlert:()=>Tp,ArcModalAlertDefaults:()=>se,ArcModalAlertVariants:()=>up,ArcModalBackdropColors:()=>hp,ArcModalBodyPaddings:()=>gp,ArcModalCloseReasons:()=>pp,ArcModalCommonDefaults:()=>ia,ArcModalCommonVariants:()=>lp,ArcModalConfirm:()=>gd,ArcModalConfirmDefaults:()=>we,ArcModalConfirmVariants:()=>dp,ArcModalSchemes:()=>sp,ArcModalSizes:()=>vp,ArcPopover:()=>te,ArcPopoverActions:()=>Gu,ArcPopoverAnchors:()=>bc,ArcPopoverBoundaries:()=>$c,ArcPopoverButton:()=>Wo,ArcPopoverDefaults:()=>da,ArcPopoverDensities:()=>ms,ArcPopoverModes:()=>fc,ArcPopoverSchemes:()=>mc,ArcPopoverVariants:()=>fs,ArcPopoverVariantsWithOutline:()=>Yu,ArcRadio:()=>vd,ArcRadioBar:()=>Dp,ArcRadioBarLayouts:()=>Pp,ArcRadioBarOption:()=>Bp,ArcRadioBarSizes:()=>Mp,ArcRadioLayouts:()=>jp,ArcRadioSizes:()=>Lp,ArcSearch:()=>wd,ArcSearchLayouts:()=>rf,ArcSearchSizes:()=>af,ArcSearchVariants:()=>ef,ArcSelect:()=>pf,ArcSelectLayouts:()=>cf,ArcSelectSizes:()=>sf,ArcSelectVariants:()=>lf,ArcSwitch:()=>$f,ArcSwitchLabelPositions:()=>$o,ArcSwitchSizes:()=>ff,ArcSwitchStates:()=>Hr,ArcSystemAIGradients:()=>Et,ArcSystemAlignments:()=>St,ArcSystemColors:()=>Se,ArcSystemGradients:()=>Kn,ArcSystemHierarchies:()=>At,ArcSystemLayouts:()=>Ia,ArcSystemLineHeights:()=>zt,ArcSystemSchemes:()=>re,ArcSystemShadows:()=>Ct,ArcSystemShapes:()=>Co,ArcSystemSizes:()=>aa,ArcSystemSurfaces:()=>Wn,ArcSystemVariants:()=>zr,ArcTextAlignments:()=>Ef,ArcTextBodyElements:()=>jd,ArcTextBodySizes:()=>Sf,ArcTextBodyVariants:()=>zf,ArcTextElements:()=>Ld,ArcTextHeadingElements:()=>Id,ArcTextHeadingSizes:()=>wf,ArcTextHeadingVariants:()=>Af,ArcTextInput:()=>jn,ArcTextInputLayouts:()=>Rv,ArcTextInputSizes:()=>Pv,ArcTextInputTypes:()=>Bv,ArcTextInputVariants:()=>Mv,ArcTextKinds:()=>yf,ArcTextLineHeights:()=>_f,ArcTextSchemes:()=>xf,ArcTextSubheadingSizes:()=>Cf,ArcTextTitleSizes:()=>kf,ArcToast:()=>Zd,ArcToastDefaults:()=>Ud,ArcToastPlacements:()=>Vd,ArcToastPopoverActions:()=>Mf,ArcToastPopoverModes:()=>Hd,ArcToastProgressBarVariants:()=>Bf,ArcToastSchemes:()=>Dd,ArcToastSeverities:()=>Od,ArcToastSizes:()=>Fd,ArcToastVariants:()=>Nd,ArcTooltip:()=>Jt,ArcTooltipDefaults:()=>Ma,SVGLogoArticulate:()=>nc,SVGLogoProductAI:()=>cc,SVGLogoProductPeek:()=>ic,SVGLogoProductReach:()=>sc,SVGLogoProductReview:()=>lc,SVGLogoProductRise:()=>dc,SVGLogoProductStoryline:()=>uc,SVGLogoProductStudio:()=>hc,StorageType:()=>kt,adoptStyles:()=>ir,adoptThemeTokens:()=>lu,anchorNameRegistry:()=>Bo,assignRef:()=>La,bindDelegatedEvents:()=>Os,canonicalizeToHsv:()=>mn,clamp:()=>va,clampIt:()=>G,colorValueEquals:()=>bn,compositeRgbaOver:()=>dl,createEmptyRect:()=>Wf,css:()=>s,cssFeatures:()=>xc,didElementRectChange:()=>Tt,extractTextFromReactNode:()=>Po,formatAlphaCss:()=>pn,formatAlphaPercent:()=>go,formatAnchorName:()=>kc,getArcColorAs:()=>bl,getArcColorData:()=>He,getArcColorParts:()=>ml,getArcColorValue:()=>$l,getArcContrastColor:()=>ni,getColorName:()=>fn,getCssColor:()=>$a,getPlainLabel:()=>Ed,getPreferredAnchorForTooltipId:()=>Tc,getSelectedColorMeta:()=>ci,getShadowRootOrDocument:()=>Ra,handlePopover:()=>ys,handleToast:()=>Wd,hasBaseSelectSupport:()=>Cd,hasEmptyValueOption:()=>zd,hasMatchingColorValue:()=>ti,hasNativeAnchorPositioning:()=>yc,hslToRgbaData:()=>nl,hsvDeltaOK:()=>Jc,hsvToRgbaData:()=>Oa,isDifferent:()=>pa,isGroupLegendItem:()=>Ad,isHexLike:()=>hl,isHsvLike:()=>vl,isObject:()=>Es,isRgbaLike:()=>gl,isSame:()=>_e,isSelectGroup:()=>Nn,isSelectedColorMatch:()=>xl,isString:()=>Ot,joinArray:()=>Mo,logError:()=>ih,logMessage:()=>ch,logSkippedTopLevelItem:()=>Sd,logWarning:()=>Ts,makeHtmlId:()=>Ku,makeRandomColor:()=>yl,mapDeprecated:()=>ge,noTailAnchors:()=>bs,normalizeAnchorName:()=>Do,normalizeByte:()=>Wr,normalizeColorValue:()=>vo,normalizeHue:()=>ol,normalizeUnit:()=>tl,oklchToRgbaData:()=>sl,parseAlphaInput:()=>pl,parseByte:()=>rt,parseCssColorToRgba:()=>_r,parseHexStringToRgba:()=>ul,pickFromList:()=>q,pickFromListByKeys:()=>Kr,relativeLuminance:()=>ll,renderableOption:()=>bo,resolveTailMetrics:()=>$s,rgbaBytesEqual:()=>Zc,rgbaDeltaOK:()=>vn,rgbaEchoDeltaOK:()=>Xc,rgbaToHslData:()=>cl,rgbaToHsvData:()=>at,rgbaToOklchData:()=>il,roundIt:()=>gn,shareAdoptedStyles:()=>su,snapIt:()=>el,splitString:()=>_s,syncAnchorName:()=>xs,toHEX:()=>Sa,toHSL:()=>ei,toLinearChannel:()=>Fe,toOKLCH:()=>oi,toRGB:()=>Ne,unbindDelegatedEvents:()=>zh,useIsoLayoutEffect:()=>Mt,useStableId:()=>Ir,useStorage:()=>Vf});const re=["auto","light","dark","inverse"],Ct=["none","sm","md","lg","xl"],Wn=["primary","secondary","inset","raised","floating"],Co=["circle","square","narrow"],zr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],At=["primary","secondary","tertiary","plain","link-style"],Ia=["hug","fill","icon","gutter","inline"],St=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],zt=["inherit","tight","standard","loose"],aa=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Se=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Et=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Kn=[...Et],ze=["","auto","manual"],Ye=["toggle","show","hide"],Ee=["inherit","xl","lg","md","sm","xs"],_t=["inherit","lg","md","sm"],Gn=["inherit","md","sm"],Ao=["inherit","wrap","truncate"],lr=["gutter","inline"],Vr=["hug","fill"],ja=["horizontal","vertical"],ge=(r,a)=>a[r]||r,q=(r,a)=>r.filter(e=>a.includes(e)),Kr=(r,a)=>a.filter(e=>r.includes(e)),La=(r,a)=>{r&&(typeof r=="function"?r(a):r.current=a)},va=(r,a=0,e=100)=>Math.min(Math.max(r,a),e),pa=(r,a)=>r!==a,_e=(r,a)=>r===a,Tt=({a:r,b:a})=>pa(r?.top,a?.top)||pa(r?.left,a?.left)||pa(r?.width,a?.width)||pa(r?.height,a?.height);function Ra(r){if(!(r instanceof Node))return null;const a=r.getRootNode();return a instanceof ShadowRoot||a instanceof Document?a:null}var n=sa(1463),h=sa(9608);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=globalThis,So=qe.ShadowRoot&&(qe.ShadyCSS===void 0||qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),Te=new WeakMap;class zo{constructor(a,e,o){if(this._$cssResult$=!0,o!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=e}get styleSheet(){let a=this.o;const e=this.t;if(So&&a===void 0){const o=e!==void 0&&e.length===1;o&&(a=Te.get(e)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),o&&Te.set(e,a))}return a}toString(){return this.cssText}}const Yn=r=>new zo(typeof r=="string"?r:r+"",void 0,Ze),s=(r,...a)=>{const e=r.length===1?r[0]:a.reduce(((o,t,i)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+r[i+1]),r[0]);return new zo(e,r,Ze)},Eo=(r,a)=>{if(So)r.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of a){const o=document.createElement("style"),t=qe.litNonce;t!==void 0&&o.setAttribute("nonce",t),o.textContent=e.cssText,r.appendChild(o)}},Er=So?r=>r:r=>r instanceof CSSStyleSheet?(a=>{let e="";for(const o of a.cssRules)e+=o.cssText;return Yn(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ha,defineProperty:Ie,getOwnPropertyDescriptor:It,getOwnPropertyNames:Jd,getOwnPropertySymbols:Qd,getPrototypeOf:ru}=Object,jt=globalThis,Vi=jt.trustedTypes,au=Vi?Vi.emptyScript:"",eu=jt.reactiveElementPolyfillSupport,_o=(r,a)=>r,qn={toAttribute(r,a){switch(a){case Boolean:r=r?au:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,a){let e=r;switch(a){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ui=(r,a)=>!Ha(r,a),Wi={attribute:!0,type:String,converter:qn,reflect:!1,useDefault:!1,hasChanged:Ui};Symbol.metadata??=Symbol("metadata"),jt.litPropertyMetadata??=new WeakMap;class Xe extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,e=Wi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(a,e),!e.noAccessor){const o=Symbol(),t=this.getPropertyDescriptor(a,o,e);t!==void 0&&Ie(this.prototype,a,t)}}static getPropertyDescriptor(a,e,o){const{get:t,set:i}=It(this.prototype,a)??{get(){return this[e]},set(c){this[e]=c}};return{get:t,set(c){const l=t?.call(this);i?.call(this,c),this.requestUpdate(a,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Wi}static _$Ei(){if(this.hasOwnProperty(_o("elementProperties")))return;const a=ru(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(_o("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_o("properties"))){const e=this.properties,o=[...Jd(e),...Qd(e)];for(const t of o)this.createProperty(t,e[t])}const a=this[Symbol.metadata];if(a!==null){const e=litPropertyMetadata.get(a);if(e!==void 0)for(const[o,t]of e)this.elementProperties.set(o,t)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);t!==void 0&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const e=[];if(Array.isArray(a)){const o=new Set(a.flat(1/0).reverse());for(const t of o)e.unshift(Er(t))}else a!==void 0&&e.push(Er(a));return e}static _$Eu(a,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(a.set(o,this[o]),delete this[o]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Eo(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,e,o){this._$AK(a,o)}_$ET(a,e){const o=this.constructor.elementProperties.get(a),t=this.constructor._$Eu(a,o);if(t!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:qn).toAttribute(e,o.type);this._$Em=a,i==null?this.removeAttribute(t):this.setAttribute(t,i),this._$Em=null}}_$AK(a,e){const o=this.constructor,t=o._$Eh.get(a);if(t!==void 0&&this._$Em!==t){const i=o.getPropertyOptions(t),c=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:qn;this._$Em=t;const l=c.fromAttribute(e,i.type);this[t]=l??this._$Ej?.get(t)??l,this._$Em=null}}requestUpdate(a,e,o){if(a!==void 0){const t=this.constructor,i=this[a];if(o??=t.getPropertyOptions(a),!((o.hasChanged??Ui)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(a)&&!this.hasAttribute(t._$Eu(a,o))))return;this.C(a,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,e,{useDefault:o,reflect:t,wrapped:i},c){o&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,c??e??this[a]),i!==!0||c!==void 0)||(this._$AL.has(a)||(this.hasUpdated||o||(e=void 0),this._$AL.set(a,e)),t===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[t,i]of o){const{wrapped:c}=i,l=this[t];c!==!0||this._$AL.has(t)||l===void 0||this.C(t,void 0,i,l)}}let a=!1;const e=this._$AL;try{a=this.shouldUpdate(e),a?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw a=!1,this._$EM(),o}a&&this._$AE(e)}willUpdate(a){}_$AE(a){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(a){}firstUpdated(a){}}Xe.elementStyles=[],Xe.shadowRootOptions={mode:"open"},Xe[_o("elementProperties")]=new Map,Xe[_o("finalized")]=new Map,eu?.({ReactiveElement:Xe}),(jt.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=globalThis,Lt=Zn.trustedTypes,Ki=Lt?Lt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Xn="$lit$",ae=`lit$${Math.random().toFixed(9).slice(2)}$`,Jn="?"+ae,ou=`<${Jn}>`,je=document,To=()=>je.createComment(""),Io=r=>r===null||typeof r!="object"&&typeof r!="function",Qn=Array.isArray,Gi=r=>Qn(r)||typeof r?.[Symbol.iterator]=="function",rc=`[ 	
\f\r]`,jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yi=/-->/g,qi=/>/g,Le=RegExp(`>|${rc}(?:([^\\s"'>=/]+)(${rc}*=${rc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zi=/'/g,Xi=/"/g,Ji=/^(?:script|style|textarea|title)$/i,ac=r=>(a,...e)=>({_$litType$:r,strings:a,values:e}),Gf=ac(1),Yf=ac(2),qf=ac(3),Je=Symbol.for("lit-noChange"),Br=Symbol.for("lit-nothing"),Qi=new WeakMap,Re=je.createTreeWalker(je,129);function rs(r,a){if(!Qn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ki!==void 0?Ki.createHTML(a):a}const as=(r,a)=>{const e=r.length-1,o=[];let t,i=a===2?"<svg>":a===3?"<math>":"",c=jo;for(let l=0;l<e;l++){const d=r[l];let u,g,p=-1,v=0;for(;v<d.length&&(c.lastIndex=v,g=c.exec(d),g!==null);)v=c.lastIndex,c===jo?g[1]==="!--"?c=Yi:g[1]!==void 0?c=qi:g[2]!==void 0?(Ji.test(g[2])&&(t=RegExp("</"+g[2],"g")),c=Le):g[3]!==void 0&&(c=Le):c===Le?g[0]===">"?(c=t??jo,p=-1):g[1]===void 0?p=-2:(p=c.lastIndex-g[2].length,u=g[1],c=g[3]===void 0?Le:g[3]==='"'?Xi:Zi):c===Xi||c===Zi?c=Le:c===Yi||c===qi?c=jo:(c=Le,t=void 0);const m=c===Le&&r[l+1].startsWith("/>")?" ":"";i+=c===jo?d+ou:p>=0?(o.push(u),d.slice(0,p)+Xn+d.slice(p)+ae+m):d+ae+(p===-2?l:m)}return[rs(r,i+(r[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),o]};class Lo{constructor({strings:a,_$litType$:e},o){let t;this.parts=[];let i=0,c=0;const l=a.length-1,d=this.parts,[u,g]=as(a,e);if(this.el=Lo.createElement(u,o),Re.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(t=Re.nextNode())!==null&&d.length<l;){if(t.nodeType===1){if(t.hasAttributes())for(const p of t.getAttributeNames())if(p.endsWith(Xn)){const v=g[c++],m=t.getAttribute(p).split(ae),b=/([.?@])?(.*)/.exec(v);d.push({type:1,index:i,name:b[2],strings:m,ctor:b[1]==="."?os:b[1]==="?"?ts:b[1]==="@"?ns:Ro}),t.removeAttribute(p)}else p.startsWith(ae)&&(d.push({type:6,index:i}),t.removeAttribute(p));if(Ji.test(t.tagName)){const p=t.textContent.split(ae),v=p.length-1;if(v>0){t.textContent=Lt?Lt.emptyScript:"";for(let m=0;m<v;m++)t.append(p[m],To()),Re.nextNode(),d.push({type:2,index:++i});t.append(p[v],To())}}}else if(t.nodeType===8)if(t.data===Jn)d.push({type:2,index:i});else{let p=-1;for(;(p=t.data.indexOf(ae,p+1))!==-1;)d.push({type:7,index:i}),p+=ae.length-1}i++}}static createElement(a,e){const o=je.createElement("template");return o.innerHTML=a,o}}function Pe(r,a,e=r,o){if(a===Je)return a;let t=o!==void 0?e._$Co?.[o]:e._$Cl;const i=Io(a)?void 0:a._$litDirective$;return t?.constructor!==i&&(t?._$AO?.(!1),i===void 0?t=void 0:(t=new i(r),t._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=t:e._$Cl=t),t!==void 0&&(a=Pe(r,t._$AS(r,a.values),t,o)),a}class es{constructor(a,e){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:e},parts:o}=this._$AD,t=(a?.creationScope??je).importNode(e,!0);Re.currentNode=t;let i=Re.nextNode(),c=0,l=0,d=o[0];for(;d!==void 0;){if(c===d.index){let u;d.type===2?u=new Qe(i,i.nextSibling,this,a):d.type===1?u=new d.ctor(i,d.name,d.strings,this,a):d.type===6&&(u=new cs(i,this,a)),this._$AV.push(u),d=o[++l]}c!==d?.index&&(i=Re.nextNode(),c++)}return Re.currentNode=je,t}p(a){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(a,o,e),e+=o.strings.length-2):o._$AI(a[e])),e++}}class Qe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,e,o,t){this.type=2,this._$AH=Br,this._$AN=void 0,this._$AA=a,this._$AB=e,this._$AM=o,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&a?.nodeType===11&&(a=e.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,e=this){a=Pe(this,a,e),Io(a)?a===Br||a==null||a===""?(this._$AH!==Br&&this._$AR(),this._$AH=Br):a!==this._$AH&&a!==Je&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):Gi(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==Br&&Io(this._$AH)?this._$AA.nextSibling.data=a:this.T(je.createTextNode(a)),this._$AH=a}$(a){const{values:e,_$litType$:o}=a,t=typeof o=="number"?this._$AC(a):(o.el===void 0&&(o.el=Lo.createElement(rs(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===t)this._$AH.p(e);else{const i=new es(t,this),c=i.u(this.options);i.p(e),this.T(c),this._$AH=i}}_$AC(a){let e=Qi.get(a.strings);return e===void 0&&Qi.set(a.strings,e=new Lo(a)),e}k(a){Qn(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,t=0;for(const i of a)t===e.length?e.push(o=new Qe(this.O(To()),this.O(To()),this,this.options)):o=e[t],o._$AI(i),t++;t<e.length&&(this._$AR(o&&o._$AB.nextSibling,t),e.length=t)}_$AR(a=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);a!==this._$AB;){const o=a.nextSibling;a.remove(),a=o}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}}class Ro{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,e,o,t,i){this.type=1,this._$AH=Br,this._$AN=void 0,this.element=a,this.name=e,this._$AM=t,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Br}_$AI(a,e=this,o,t){const i=this.strings;let c=!1;if(i===void 0)a=Pe(this,a,e,0),c=!Io(a)||a!==this._$AH&&a!==Je,c&&(this._$AH=a);else{const l=a;let d,u;for(a=i[0],d=0;d<i.length-1;d++)u=Pe(this,l[o+d],e,d),u===Je&&(u=this._$AH[d]),c||=!Io(u)||u!==this._$AH[d],u===Br?a=Br:a!==Br&&(a+=(u??"")+i[d+1]),this._$AH[d]=u}c&&!t&&this.j(a)}j(a){a===Br?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}}class os extends Ro{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===Br?void 0:a}}class ts extends Ro{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==Br)}}class ns extends Ro{constructor(a,e,o,t,i){super(a,e,o,t,i),this.type=5}_$AI(a,e=this){if((a=Pe(this,a,e,0)??Br)===Je)return;const o=this._$AH,t=a===Br&&o!==Br||a.capture!==o.capture||a.once!==o.once||a.passive!==o.passive,i=a!==Br&&(o===Br||t);t&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}}class cs{constructor(a,e,o){this.element=a,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(a){Pe(this,a)}}const Zf={M:Xn,P:ae,A:Jn,C:1,L:as,R:es,D:Gi,V:Pe,I:Qe,H:Ro,N:ts,U:ns,B:os,F:cs},tu=Zn.litHtmlPolyfillSupport;tu?.(Lo,Qe),(Zn.litHtmlVersions??=[]).push("3.3.1");const nu=(r,a,e)=>{const o=e?.renderBefore??a;let t=o._$litPart$;if(t===void 0){const i=e?.renderBefore??null;o._$litPart$=t=new Qe(a.insertBefore(To(),i),i,void 0,e??{})}return t._$AI(r),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ec=globalThis;class Rt extends Xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=nu(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}}Rt._$litElement$=!0,Rt.finalized=!0,ec.litElementHydrateSupport?.({LitElement:Rt});const cu=ec.litElementPolyfillSupport;cu?.({LitElement:Rt});const Xf={_$AK:(r,a,e)=>{r._$AK(a,e)},_$AL:r=>r._$AL};(ec.litElementVersions??=[]).push("4.2.1");const iu=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(to right top, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(to right top, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(to right top, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(to right top, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(to right top, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(to right top, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(to right top, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-20), var(--arc-color-alpha-white-20));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static tokens (primitive colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(6px, 0.375em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
  }
  [arc-gradient][arc-icon] {
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - temporary shadow mappings */
  --arc-shadow-light-none: var(--arc-shadow-none);
  --arc-shadow-light-sm: var(--arc-shadow-sm);
  --arc-shadow-light-md: var(--arc-shadow-md);
  --arc-shadow-light-lg: var(--arc-shadow-lg);
  --arc-shadow-light-xl: var(--arc-shadow-xl);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,oc={};function ir(r,a){if(typeof document<"u"&&a?.styleSheet){const e=oc[r];oc[r]=a.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(o=>o!==e),a.styleSheet]}}function su(r){const a=Object.values(oc),e=document.adoptedStyleSheets.filter(o=>a.includes(o));if(r.adoptedStyleSheets){const o=e.filter(t=>!r.adoptedStyleSheets.includes(t));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...o]}}function lu(r){if(typeof CSSStyleSheet<"u"){const a=new CSSStyleSheet;a.replaceSync(iu),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(a)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,a]))}}const du=r=>r?.trim().charAt(0)??void 0,uu=(r,a)=>{let e=0;const o=Math.min(r.length,50);for(let t=0;t<o;t+=1)e=(e+r.charCodeAt(t))%(a??33);return e},hu=(r,a,e)=>a?.length?r?.trim()===""?e||a[0]:a[uu(r,a.length)]||e||a[0]:e,is=q(Se,["blue","orange","mint","red","yellow","green","maroon","purple"]),gu=q(Se,["neutral","white","black"]),Pt=q(aa,["lg","md","sm","xs"]),vu=[...Pt,"profile-sm","profile-md","profile-lg"],pu=_t,fu=Ao,mu=Pt,bu=Pt,$u=Pt,I=s`--arc•input•mask`,f=s`--arc•size`,E=s`--arc•space`,vr=s`--arc•avatar`,Dr=s`${vr}•chars`,tc=s`

  &[data-size=lg] {
    ${vr}•font•size: var(${f}•16);
    ${vr}•size: 2.5em; /* target: 40px @ 100% */
    ${Dr}•1: var(${f}•16);
    ${Dr}•2: var(${f}•14);
    ${Dr}•3: var(${f}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${vr}•font•size: var(${f}•14);
    ${vr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${Dr}•1: var(${f}•14);
    ${Dr}•2: var(${f}•12);
    ${Dr}•3: var(${f}•10);
  }

  &[data-size=sm] {
    ${vr}•font•size: var(${f}•12);
    ${vr}•size: 2em; /* target: 24px @ 100% */
    ${Dr}•1: var(${f}•12);
    ${Dr}•2: var(${f}•10);
    ${Dr}•3: var(${f}•8);
  }

  &[data-size=xs] {
    ${vr}•font•size: var(${f}•10);
    ${vr}•size: 2em; /* target: 20px @ 100% */
    ${Dr}•1: var(${f}•10);
    ${Dr}•2: var(${f}•8);
    ${Dr}•3: var(${f}•6);
  }

`,yu=s`

  &[data-size=profile-lg] {
    ${vr}•font•size: var(${f}•40);
    ${vr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${vr}•font•size: var(${f}•32);
    ${vr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${vr}•font•size: var(${f}•28);
    ${vr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,ss=s`

  [arc-avatar] {
    ${vr}•font•size: inherit;
    ${vr}•size: inherit;
    ${Dr}•1: inherit;
    ${Dr}•2: inherit;
    ${Dr}•3: inherit;
  }

`,Me=s`${vr}•fg`,la=s`${vr}•bg`,xu=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${Me}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${la}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${la}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${la}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${la}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${la}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${la}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${la}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${la}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${Me}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${la}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${Me}: var(--arc-color-fg-secondary);
      ${la}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${Me}: var(--arc-color-mono-black);
      ${la}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${tc}
    ${yu}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${vr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${vr}•size));
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
      --arc-button-font-size: var(${Dr}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${Dr}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${Dr}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${vr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${la}));
      --arc-button-color: var(--arc-avatar-color, var(${Me}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${vr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${Me}: transparent;
        ${la}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${la});
      color: var(${Me});
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
      visibility: var(${vr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${vr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,ku=({children:r,initial:a,color:e,...o})=>(0,n.jsx)("span",{...o,"data-element":"initial","data-color":e,children:r||a}),wu=({isLoaded:r,hasError:a,onLoad:e,onError:o,...t})=>{const i=!r&&""||void 0,c=a&&""||void 0,l=!r||a||void 0;return(0,n.jsx)("img",{...t,hidden:l,"data-element":"image","data-not-loaded":i,"data-has-error":c,onLoad:e,onError:o})},nc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),cc=r=>(0,n.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),ic=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),sc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),lc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),dc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),uc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),hc=r=>(0,n.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Cu;const Au="fa-width-auto",ls="fa-fw",Su="arc-fw",ds="arc-aw",zu=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,Eu={"arc-svg logo-articulate":(0,n.jsx)(nc,{}),"arc-svg product-ai":(0,n.jsx)(cc,{}),"arc-svg product-peek":(0,n.jsx)(ic,{}),"arc-svg product-reach":(0,n.jsx)(sc,{}),"arc-svg product-review":(0,n.jsx)(lc,{}),"arc-svg product-rise":(0,n.jsx)(dc,{}),"arc-svg product-storyline":(0,n.jsx)(uc,{}),"arc-svg product-studio":(0,n.jsx)(hc,{})},rm=r=>r&&r.length>0&&r?.includes("arc-svg")?Eu[r]:Cu("span",{className:r}),us=r=>{const a=r.includes(Au),e=r.includes(ls),o=r.includes(Su),t=r.includes(ds);return{hasFaAutoWidth:a,hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}},hs=r=>((0,h.isValidElement)(r)&&r.type===cr?r.props.icon:r)??void 0,gc=r=>{const a=hs(r);if(typeof a!="string")return a;const{hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}=us(a);return!e&&!o&&!t?`${a} ${ds}`:a},_u=r=>{const a=hs(r);if(typeof a!="string")return a;let e=a;const{hasArcFixedWidth:o,hasFaFixedWidth:t}=us(e);return o&&!t&&(e=`${e} ${ls}`),e},Tu=s`--arc•icon`,ee=s`${Tu}•fg`,Iu=s`
@layer arc-components {

[arc-icon] {
  ${ee}: currentcolor;

  color: var(--arc-icon-color, var(${ee}));
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
      fill: var(--arc-icon-color, var(${ee}));
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
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${ee}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${ee}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${ee}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${ee}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${ee}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${ee}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,ju=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),Lu=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),Ru=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),Pu=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),Mu=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Bu=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),Du=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),Ou=r=>(0,n.jsx)(cr,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),cr=({children:r,icon:a="fa-regular fa-circle-dashed",color:e,size:o,style:t,gradient:i,...c})=>{const l={...t,"--arc-icon-size":zu(o),"--arc-icon-color":e},d=!!(c["aria-label"]||c["aria-labelledby"]),u=_u(a),g=typeof u=="string"&&u.length>0?(0,n.jsx)("span",{className:u}):u;return(0,n.jsx)("span",{"aria-hidden":!d||void 0,...c,"arc-icon":"",style:l,"arc-gradient":i,children:r||g})};ir("ArcIcon",Iu),cr.Articulate=ju,cr.AI=Lu,cr.Peek=Ru,cr.Reach=Pu,cr.Review=Mu,cr.Rise=Bu,cr.Storyline=Du,cr.Studio=Ou,cr.SVGArticulate=nc,cr.SVGAI=cc,cr.SVGPeek=ic,cr.SVGReach=sc,cr.SVGReview=lc,cr.SVGRise=dc,cr.SVGStoryline=uc,cr.SVGStudio=hc;const Fu=({children:r,icon:a,color:e,...o})=>(0,n.jsx)("span",{...o,"data-element":"anonymous","data-color":"neutral",children:r||(0,n.jsx)(cr,{icon:a})}),gs="blue",vs="neutral",Nu="fa-solid fa-user arc-aw",vc=(0,h.forwardRef)(({children:r,size:a,color:e,isActive:o=!0,isAnonymous:t,alt:i,src:c,name:l,email:d,...u},g)=>{const[p,v]=(0,h.useState)(!1),[m,b]=(0,h.useState)(!1),$=B=>{v(!0),b(!1),u.onLoad?.(B)},k=B=>{v(!1),b(!0),u.onError?.(B)},_=du(l||d),y=!!_,z=t||(!p||m)&&!y,x=!z&&!!c&&!m||void 0,S=(z&&vs||void 0)??(e||void 0)??hu(String(d||l||void 0),is,gs)??gs,D={src:c,alt:i,isLoaded:p,hasError:m,onLoad:$,onError:k};return(0,h.useEffect)(()=>{z&&v(!1)},[z]),(0,n.jsx)("span",{...u,ref:g,"arc-avatar":"","data-is-inactive":!o||void 0,"data-size":a,"aria-label":(u.title??l??d)||void 0,children:r||(z?(0,n.jsx)(Fu,{icon:Nu,color:vs}):(0,n.jsxs)(n.Fragment,{children:[x&&(0,n.jsx)(wu,{...D}),y&&(0,n.jsx)(ku,{initial:_,color:S})]}))})});ir("ArcAvatar",xu);const Gr=s`${vr}•text`,Be=s`${vr}•subtext`,ro=s`${vr}•gap`,Hu=s`
@layer arc-components {

  [arc-avatar-text] {
    ${Gr}•font•size: var(${f}•14);
    ${Be}•font•size: var(${f}•12);
    ${ro}: var(${f}•8);

    ${Gr}•overflow: unset;
    ${Gr}•text•overflow: unset;
    ${Gr}•white•space: unset;

    &[data-overflow=truncate] {
      ${Gr}•overflow: hidden;
      ${Gr}•text•overflow: ellipsis;
      ${Gr}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Gr}•font•size: 1em;
      ${Be}•font•size: 0.875em;
      ${ro}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Gr}•font•size: var(--arc-font-size-14);
      ${Be}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Gr}•font•size: var(--arc-font-size-14);
      ${Be}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Gr}•font•size: var(--arc-font-size-14);
      ${Be}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Gr}•font•size: var(--arc-font-size-12);
      ${Be}•font•size: var(--arc-font-size-12);
      ${ro}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${ro}: var(${f}•12); }
    &[data-gap=sm] { ${ro}: var(${f}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Gr}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${ro});
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
      font-size: var(--arc-avatar-subtext-font-size, var(${Be}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Gr}•overflow);
      text-overflow: var(${Gr}•text•overflow);
      white-space: var(${Gr}•white•space);
    }
  }

}
`,Vu="Anonymous",pc=({children:r,avatar:a={},subtext:e,size:o,gapSize:t,overflow:i,isStrong:c,...l})=>{const d=a.anonymousName||Vu,u=a.name||a.email||a.src,g=a.name||a.email,p=a.isAnonymous||!u,v=r||p?d:g,m=t!=="inherit"?t:void 0,b=i!=="inherit"?i:void 0;return(0,n.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":m,"data-overflow":b,"is-strong":c?"":void 0,children:[(0,n.jsx)(vc,{...a,isAnonymous:p,size:o}),(0,n.jsxs)("span",{"data-element":"text",children:[v,e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:e})]})]})]})};ir("ArcAvatarText",Hu);const Uu=s`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${tc}
    ${ss}

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
`,Wu=({size:r="md",...a})=>(0,n.jsx)("div",{...a,"arc-avatar-pile":"","data-size":r});ir("ArcAvatarPile",Uu);const Po=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Po).join(""):(0,h.isValidElement)(r)?Po(r.props.children):"",ps={},Ku=(r="id")=>{const a=(ps[r]??0)+1;return ps[r]=a,`${r}-${a}`},Ir=(r,a="id")=>{const e=(0,h.useId)();return r??`${a}-${e}`},fc=[...ze],mc=[...re],Gu=[...Ye],fs=q(zr,["common"]),Yu=q(zr,["ai","brand"]),bc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],$c=["ignore","flip"],ms=["compact","comfortable"],Mo=(r,a=1/0,e=" ")=>[...r].flat(a)?.filter(Boolean)?.join(e),da={popover:fc[0],anchorAt:bc[13],boundary:$c[0],tryFallbacks:!1,variant:fs[0],scheme:mc[0],density:ms[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},yc=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),qu=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),xc={canAnchor:yc(),canAnchoredContainers:qu()},bs=["center","nw-corner","ne-corner","se-corner","sw-corner"],$s=({canHaveTail:r,tailSize:a})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const e=Math.abs(Number(a||da.tailSize)),o=e>0?e:da.tailSize;return{cssTailVar:o===da.tailSize?"":`${o}px`,floatingTailPx:o}},Mt=typeof window>"u"?h.useEffect:h.useLayoutEffect,ys=(r,a="toggle",e=document)=>{const o=e.getElementById(r);({toggle:()=>o?.togglePopover(),show:()=>o?.showPopover(),hide:()=>o?.hidePopover()})[a]()},Bo=new WeakMap,kc=r=>{const a=String(r??"").trim();if(a==="none")return"none";let e=a.replace(/[^\w-]/g,"-");for(;e.startsWith("-");)e=e.slice(1);for(;e.endsWith("-");)e=e.slice(0,-1);return e?`--${e}`:"--"},Do=r=>{const a=kc(r);return a==="none"?null:a},xs=(r,a)=>{const e=Do(a);if(!e)return()=>{};let o=Bo.get(r);return o||(o=new Set,Bo.set(r,o)),o.has(e)?()=>{}:(o.add(e),r.style.setProperty("anchor-name",Mo([...o],1/0,", ")),()=>{const t=Bo.get(r);if(t){if(t.delete(e),t.size===0){Bo.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Mo([...t],1/0,", "))}})},ks=r=>r==="start"||r==="end"?r:"center",Zu=r=>{const a=r.split("-")[0];return a==="top"||a==="right"||a==="bottom"||a==="left"?a:null},ws=r=>{const a=Zu(r),e=ks(r.split("-")[1]);switch(a){case"top":return{block:"start",inline:e};case"bottom":return{block:"end",inline:e};case"left":return{block:e,inline:"start"};case"right":return{block:e,inline:"end"};default:return{block:"center",inline:"center"}}},Cs=(r,a)=>r!=="center"&&a!=="center"&&r!==a,As=(r,a)=>{const e=ws(r),o=ws(a),t=Cs(e.block,o.block),i=Cs(e.inline,o.inline);return t&&i?"flip-block-inline":t?"flip-block":i?"flip-inline":""},Xu={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Ss=r=>{r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("position"),r.style.removeProperty("margin"),delete r.dataset.fallbacks},Ju=[{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("top"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("bottom"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("bottom")&&e.includes("top"),value:1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("left"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("right"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("right")&&e.includes("left"),value:1}],zs=(r,a,e)=>Ju.find(o=>o.test(r,a,e))?.value||0,Qu=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:o,offsetPx:t,tailSizePx:i,hasTail:c,isOpen:l})=>{Mt(()=>{if(!(l&&!yc()&&!!r&&!!a)){a&&Ss(a);return}const u=r,g=a,p=Xu[e];let v=!0,m;return(async()=>{try{const{autoUpdate:k,computePosition:_,flip:y,offset:z}=await sa.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(sa.bind(sa,40153));if(!v)return;const x=c?Math.max(0,i)*(Math.sqrt(2)/2):0,S=[z(t)];o&&S.push(y({fallbackStrategy:"bestFit"}));const D=async()=>{try{const B=await _(u,g,{placement:p,strategy:"fixed",middleware:S}),F=B.x+x*zs("x",B.placement,p),T=B.y+x*zs("y",B.placement,p);if(g.style.left=`${F}px`,g.style.top=`${T}px`,!c||!o){delete g.dataset.fallbacks;return}const C=As(p,B.placement);C?g.dataset.fallbacks=C:delete g.dataset.fallbacks}catch{}};m=k(u,g,D),await D()}catch{}})(),()=>{v=!1,m?.(),Ss(g)}},[e,r,c,l,t,a,i,o])},Bt=1,ao=2,rh=[{test:(r,a)=>a.top>=r.bottom+Bt,value:"bottom"},{test:(r,a)=>a.bottom<=r.top-Bt,value:"top"},{test:(r,a)=>a.left>=r.right+Bt,value:"right"},{test:(r,a)=>a.right<=r.left-Bt,value:"left"}],Oo=r=>{delete r.dataset.fallbacks};let wc;const ah=()=>(wc||(wc=sa.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(sa.bind(sa,40153))),wc),Dt=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),eh=(r,a,e,o)=>{const t=Dt(a),i=Dt(e);if(r==="top"||r==="bottom"){const u=Math.abs(o==="rtl"?e.right-a.right:e.left-a.left),g=Math.abs(o==="rtl"?e.left-a.left:e.right-a.right),p=Math.abs(i.x-t.x);return Math.abs(u-g)<=ao&&p<=ao||p+ao<Math.min(u,g)?"center":u<=g?"start":"end"}const c=Math.abs(e.top-a.top),l=Math.abs(e.bottom-a.bottom),d=Math.abs(i.y-t.y);return Math.abs(c-l)<=ao&&d<=ao||d+ao<Math.min(c,l)?"center":c<=l?"start":"end"},oh=(r,a,e,o)=>{const t=rh.find(d=>d.test(a,e));let i;if(t)i=t.value;else{const d=Dt(a),u=Dt(e),g=u.y-d.y,p=u.x-d.x,v=Math.min(a.height,e.height)*.1;Math.abs(g)>v?i=g>=0?"bottom":"top":i=p>=0?"right":"left"}if(ks(r.split("-")[1])==="center")return i;const l=eh(i,a,e,o);return`${i}-${l}`},th=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:o,isOpen:t,hasTail:i})=>{Mt(()=>{if(!a||!xc.canAnchor)return;if(!i||!o||!t||xc.canAnchoredContainers||!r){Oo(a);return}const c=e;if(c==="center"||c.includes("corner")){Oo(a);return}const l=r,d=a;let u=!0,g;const p=()=>{const m=l.getBoundingClientRect(),b=d.getBoundingClientRect(),$=getComputedStyle(l).direction==="rtl"?"rtl":"ltr",k=oh(c,m,b,$),_=As(c,k);c===k?Oo(d):_?d.dataset.fallbacks=_:Oo(d)};return(async()=>{try{const{autoUpdate:b}=await ah();if(!u)return;g=b(l,d,p),p()}catch{}})(),()=>{u=!1,g?.(),Oo(d)}},[e,r,i,t,a,o])},Ot=r=>typeof r=="string",Es=r=>r!==null&&typeof r=="object",_s=(r,a=" ")=>r.split(a).map(e=>e.trim()).filter(Boolean),nh=s`
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
`,Cc=(0,h.forwardRef)(({progress:r,...a},e)=>(0,n.jsxs)("svg",{...a,ref:e,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));Cc.displayName="ArcSpinner",ir("ArcSpinner",nh);const ch=(...r)=>console.log(...r),Ts=(...r)=>console.warn(...r),ih=(...r)=>console.error(...r),eo=s`--arc•icon•text`,Fo=s`${eo}•font•size`,Is=s`${eo}•icon`,Ac=s`${eo}•text`,js=s`${eo}•subtext`,Pa=s`${eo}•fg`,oe=s`${eo}•gap`,ve=s`${Is}•size`,Ft=s`${Is}•vertical•align`,No=s`${Ac}•overflow`,Nt=s`${Ac}•text•overflow`,Ht=s`${Ac}•white•space`,Vt=s`${js}•font•size`,Ls=s`${js}•fg`,sh=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${Pa}: currentcolor;
  }

  &[data-variant=primary] {
    ${Pa}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${Pa}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${Pa}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${Pa}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${Pa}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${Pa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${Pa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${Pa}: var(--arc-color-fg-critical-mid);
  }

`,lh=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Fo}: 1em;
    ${Vt}: 0.75em;
    ${ve}: 1em;
    ${oe}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Fo}: var(--arc-font-size-14);
    ${Vt}: var(--arc-font-size-12);
    ${oe}: var(${E}•3);
  }

  &[data-size=sm] {
    ${Fo}: var(--arc-font-size-12);
    ${Vt}: var(--arc-font-size-12);
    ${oe}: var(${E}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${oe}: var(${E}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${oe}: var(${E}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${oe}: var(${E}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${ve}: var(${f}•24); }
  &[icon-size=lg] { ${ve}: var(${f}•20); }
  &[icon-size=md] { ${ve}: var(${f}•16); }
  &[icon-size=sm] { ${ve}: var(${f}•14); }
  &[icon-size=xs] { ${ve}: var(${f}•12); }
`,dh=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Ls}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${Pa}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${ve}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${No}: unset;
    ${Nt}: unset;
    ${Ht}: unset;

    ${Ft}: calc((var(${ve}) - var(${Fo})) / -2);

    &:has(svg) { ${Ft}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${No}: visible;
    ${Nt}: unset;
    ${Ht}: normal;

    &[data-overflow=truncate] {
      ${No}: hidden;
      ${Nt}: ellipsis;
      ${Ht}: nowrap;
    }
  }

`,uh=s`
@layer arc-components {

  [arc-icon-text] {
    ${sh}
    ${lh}
    ${dh}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Fo}));
    color: var(--arc-icon-text-text-color, var(${Pa}));
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
      gap: var(--arc-icon-text-gap, var(${oe}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${No}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Vt}));
        color: var(--arc-icon-text-subtext-color, var(${Ls}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${No}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Nt}));
        white-space: var(--arc-icon-text-white-space, var(${Ht}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${Ft}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${oe})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${oe})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${Ft}: text-bottom;
      }
    }
  }
}

`,hh=q(zr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Yr=({children:r,layout:a="gutter",size:e="inherit",variant:o="inherit",tag:t="span",icon:i,iconTooltip:c,text:l,subtext:d,gradient:u,overflow:g,iconSize:p,gapSize:v,isFlipped:m=!1,isStrong:b=!1,...$})=>{const k=r||l,_=!!i,y=!!k,z=a==="gutter",x=a==="inline",S=_&&(!m||z),D=_&&y&&m&&x,B=!!p&&p!=="inherit",F=B&&Ee.includes(p)?p:void 0,T=B&&!Ee.includes(p)?p:void 0,C=v!=="inherit"?v:void 0,W=g!=="inherit"?g:void 0,H=gc(i),ar=typeof H=="string"?(0,n.jsx)(cr,{icon:H,size:T,gradient:u}):H,K=c?(0,n.jsx)(Jt,{text:c,children:ar}):ar;return(0,n.jsxs)(t,{...$,"arc-icon-text":"","data-variant":o,"data-layout":a,"data-overflow":W,"data-size":e,"data-gap":C,"icon-size":F,"is-flipped":m?"":void 0,"is-strong":b?"":void 0,children:[S&&(0,n.jsx)("span",{"data-element":"icon",children:K}),y&&(0,n.jsxs)("span",{"data-element":"text",children:[k,!!d&&(z?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:d})]}):(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("span",{"data-element":"subtext",children:d})]}))]}),D&&(0,n.jsx)("span",{"data-element":"icon",children:K})]})};ir("ArcIconText",uh);const Ma={...da,popover:fc[2],anchorAt:bc[2],boundary:$c[1],tryFallbacks:!0,scheme:mc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Ut=new WeakSet,gh=100,vh=100;let Sc=!0,zc=null;const ph=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),fh=r=>r instanceof Element?ph?r.matches(":focus-visible")===!0:Sc:!1,Ec=new WeakMap,_c=new WeakMap,Ho=new Set,Wt=(r,a)=>{const e=r.get(a);e!=null&&(clearTimeout(e),r.delete(a))},Rs=(r,a,e,o)=>{const t=window.setTimeout(()=>{o(),r.delete(a)},e);r.set(a,t)},Ps="[aria-describedby]",mh=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,Ms=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&mh(r),bh=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),$h=r=>r?.match(/\S+/g)??[],Tc=(r,a)=>{const e=Ra(a??document.documentElement);if(!e)return null;const o=e.querySelector(`[aria-describedby~="${r}"]`);return o?o.closest("label,[arc-label]")??o:null},yh=r=>{if(!(r instanceof Element))return null;const a=r.closest?.(Ps);if(a){const o=a.getAttribute("aria-describedby")??"";if(o)return{anchor:a.closest?.("label,[arc-label]")??a,tooltipId:o}}let e=r;for(;e;){if(bh(e)){const o=e.querySelector?.(Ps),t=o?.getAttribute?.("aria-describedby")??"";if(o&&t)return{anchor:e,tooltipId:t}}e=e.parentElement}return null},xh=r=>{if(!(r instanceof Element))return null;const a=r.closest?.('[role="tooltip"][popover]')??null;return a instanceof HTMLElement?a:null},kh=r=>r?.id?Tc(r.id,r):null,wh=r=>{const a=xh(r),e=yh(r);if(!e&&a){const d=kh(a);return!d||!a.id?null:{anchor:d,tooltip:a}}if(!e)return null;const{anchor:o,tooltipId:t}=e;if(!t)return null;const i=Ra(r);if(!i)return null;const c=$h(t),l=a??c.map(d=>i.getElementById(d)).find(d=>Ms(d))??null;return Ms(l)?{anchor:o,tooltip:l}:null},Ch=(r,a,e)=>{const o=e instanceof Element?e:null;if(!o)return!1;const t=r===o||r.contains(o),i=a===o||a.contains(o);return t||i},Bs=r=>{r.isConnected&&(r.showPopover?.(),Ho.add(r))},Ds=r=>{r.isConnected&&(r.hidePopover?.(),Ho.delete(r))},Ah=(r,a)=>{if(Wt(_c,r),Wt(Ec,r),!a){Bs(r);return}Rs(Ec,r,gh,()=>Bs(r))},Ic=(r,a)=>{if(Wt(Ec,r),Wt(_c,r),!a){Ds(r);return}Rs(_c,r,vh,()=>Ds(r))},Sh=()=>{Ho.forEach(r=>{Ic(r,!1)})},Vo=(r,a,e,o)=>{const t=wh(a);if(!t)return;const{anchor:i,tooltip:c}=t;if(r){Ah(c,o);return}Ch(i,c,e)||Ic(c,o)};let Kt=null,Gt=null,Yt=null,qt=null,Zt=null,Xt=null,oo=null,Uo=null;const Os=r=>{if(!r&&typeof document>"u")return;const a=r?Ra(r):document;if(!a||Ut.has(a))return;Xt=o=>{Sc=!1,zc=o.target},oo=()=>{zc=null},Kt=o=>Vo(!0,o.target,void 0,!0),Yt=o=>Vo(!1,o.target,o.relatedTarget,!0),Gt=o=>{fh(o.target)&&Vo(!0,o.target,void 0,!1)},qt=o=>{const t=o.relatedTarget??zc;Vo(!1,o.target,t,!1)},Zt=o=>{o.key==="Tab"&&(Sc=!0),o.key==="Escape"&&(Ho.size>0&&o.preventDefault(),Vo(!1,o.target,void 0,!1),Ho.forEach(t=>Ic(t,!1)))},Uo=o=>{if(o.newState!=="open")return;const{target:t}=o;if(t instanceof HTMLElement&&t.getAttribute("role")!=="tooltip"&&t.getAttribute("popover")!=="manual"){try{if(!t.matches("[popover]:popover-open"))return}catch{return}Sh()}},[["pointerdown",Xt],["pointerup",oo],["pointercancel",oo],["pointerover",Kt],["focusin",Gt],["pointerout",Yt],["focusout",qt],["keydown",Zt]].forEach(([o,t])=>{a.addEventListener(o,t)}),a.addEventListener("toggle",Uo,!0),Ut.add(a)},zh=()=>{if(!Ut.has(document)||typeof document>"u")return;[["pointerdown",Xt],["pointerup",oo],["pointercancel",oo],["pointerover",Kt],["focusin",Gt],["pointerout",Yt],["focusout",qt],["keydown",Zt]].forEach(([a,e])=>{e&&document.removeEventListener(a,e)}),Uo&&document.removeEventListener("toggle",Uo,!0),Kt=null,Gt=null,Yt=null,qt=null,Zt=null,Xt=null,oo=null,Uo=null,Ut.delete(document)},Ba=s`--arc•tooltip`,Fs=s`${Ba}•subtext`,Ns=s`${Ba}•slot`,Eh=s`
@layer arc-components {
  [arc-tooltip] {
    ${Ba}•width: max-content;
    ${Ba}•max•width: 20em;
    ${Ba}•font•size: var(${f}•12);
    ${Ba}•padding: var(${E}•10);
    ${Fs}•spacing: var(${E}•6);
    ${Ns}•margin•top: var(${E}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${Ba}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${Ba}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${Ba}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${Ba}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${Ba}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${Fs}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${Ns}•margin•top));
    }
  }
}
`,Jt=(0,h.forwardRef)(({id:r,children:a,slot:e,isEnabled:o=Ma.isEnabled,popover:t=Ma.popover,variant:i=Ma.variant,anchorAt:c=Ma.anchorAt,alternateAnchor:l,boundary:d=Ma.boundary,tryFallbacks:u=Ma.tryFallbacks,hasTail:g=Ma.hasTail,offset:p=Ma.offset,scheme:v=Ma.scheme,isStrong:m=Ma.isStrong,text:b,subtext:$,icon:k,isFlipped:_,...y},z)=>{const x=Ir(r,"arc-tooltip"),S=(0,h.useRef)(null);(0,h.useImperativeHandle)(z,()=>S.current);const D=H=>typeof H=="object"&&H!==null&&"tabIndex"in H,B=a,F=!!l;let T=null;(0,h.isValidElement)(B)?T=o?(0,h.cloneElement)(B,{"aria-describedby":x,...D(B.props)&&B.props.tabIndex!=null?{}:{tabIndex:0}}):B:!F&&typeof console<"u"&&Ts("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const C=(0,h.useMemo)(()=>()=>Tc(x,S.current),[x]),W=v==="auto"?void 0:v;return(0,h.useEffect)(()=>{if(o)try{Os(S.current)}catch{}},[o]),(0,n.jsxs)(n.Fragment,{children:[T,o&&(0,n.jsxs)(te,{...y,"arc-tooltip":"",scheme:y?.isInverse?"inverse":W,role:"tooltip",id:x,ref:S,popover:t,anchorAt:c,tryFallbacks:u??d==="flip",variant:i,hasTail:g,offset:p,hidePopoverButton:!0,alternateAnchor:l??C,tag:y?.tag??"span",contentTag:y?.contentTag??"span",children:[b&&(0,n.jsx)(Yr,{"arc-tooltip-content":"",text:b,subtext:$,icon:k,isFlipped:_,isStrong:m,size:"inherit",variant:"inherit"}),e&&(0,n.jsx)("span",{"arc-tooltip-slot-content":"",children:e})]})]})});ir("ArcTooltip",Eh);const _h=q(Co,["circle","square","narrow"]),Th=q(aa,["xxl","xl","lg","md","sm"]),Ih=q(Ia,["hug","fill","icon"]),jh=q(zr,["common","ai","critical","alpha"]),Lh=[...re],Rh=[...Ct],Hs=q(zr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Ph=q(At,["primary","secondary","tertiary","plain","link-style"]),Mh=[...Ye],Bh=s`
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
`,Dh=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,Oh=s`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,Fh=s`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
  --arc-banner-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
  --arc-banner-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
}
`,A=s`--arc•button`,R=s`${A}•fg`,w=s`${A}•bg`,tr=s`${A}•edge`,ea=s`${A}•border`,to=s`${A}•outline`,ur=s`${A}•spinner`,qr=s`${A}•icon`,Nh=s`
  &[data-size=xxl] {
    ${A}•font•size: var(${f}•16);
    ${ur}•size: var(${f}•32);
    ${qr}•size: var(${f}•20);
    ${qr}•size•large: var(${f}•24);
    ${A}•height: var(${f}•56);
    ${A}•gap: var(${f}•10);
    ${A}•padding•inline: var(${f}•32);
  }

  &[data-size=xl] {
    ${A}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${qr}•size: var(${f}•16);
    ${qr}•size•large: var(${f}•20);
    ${A}•height: var(${f}•48);
    ${A}•gap: var(${f}•8);
    ${A}•padding•inline: var(${f}•32);
  }

  &[data-size=lg] { /** @default */
    ${A}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${qr}•size: var(${f}•16);
    ${qr}•size•large: var(${f}•20);
    ${A}•height: var(${f}•40);
    ${A}•gap: var(${f}•8);
    ${A}•padding•inline: var(${f}•20);
  }

  &[data-size=inherit] {
    ${A}•font•size: 1em;
    ${ur}•size: 1em;
    ${qr}•size: 1em;
    ${qr}•size•large: 1.25em;
    ${A}•gap: 0.5em;
    ${A}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${A}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${qr}•size: var(${f}•14);
    ${qr}•size•large: var(${f}•20);
    ${A}•height: var(${f}•32);
    ${A}•gap: var(${f}•6);
    ${A}•padding•inline: var(${f}•16);
  }

  &[data-size=sm] {
    ${A}•font•size: var(${f}•12);
    ${ur}•size: var(${f}•14);
    ${qr}•size: var(${f}•12);
    ${qr}•size•large: var(${f}•14);
    ${A}•height: var(${f}•24);
    ${A}•gap: var(${f}•4);
    ${A}•padding•inline: var(${f}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${A}•font•size: var(${f}•14);
    ${ur}•size: var(${f}•16);
    ${qr}•size: var(${f}•16);
    ${qr}•size•large: var(${f}•20);
    ${A}•gap: var(${f}•8);
    ${A}•padding•inline: var(${f}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,Hh=s`
  &[data-layout=hug] {
    ${A}•width: auto;
    ${A}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${A}•display: flex;
    ${A}•width: 100%;
    ${A}•content•width: 0;
  }

  &[data-layout=icon] {
    ${A}•aspect•ratio: 1 / 1;
    ${A}•flex: none;
    ${A}•min•width: min-content;
    ${A}•max•width: none;
    ${A}•padding•inline: var(${f}•0);

    &[data-shape=narrow] {
      ${A}•aspect•ratio: auto;
      ${A}•padding•inline: var(${f}•2);
    }
  }

`,Vh=s`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${R}: inherit;
    ${w}: transparent;
    ${tr}: transparent;
    ${R}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &:is(
    [data-variant=common],
    [data-variant=primary],
    [data-variant=primary-inverse]
  ) {
    ${R}: var(--arc-color-fg-on-theme-heavy);
    ${w}: var(--arc-color-bg-theme-heavy);
    ${tr}: transparent;

    ${R}•active: var(--arc-color-fg-on-theme-mid);
    ${R}•processing: var(--arc-color-fg-on-theme-stark);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-color-bg-theme-stark);
    ${w}•active: var(--arc-color-bg-theme-mid);
    ${w}•processing: var(--arc-color-bg-theme-stark);
    ${w}•disabled: var(--arc-color-bg-disabled);

    ${ur}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${R}: var(--arc-color-fg-primary);
    ${tr}: var(--arc-color-border-theme-heavy);

    ${R}•active: var(--arc-color-fg-secondary);
    ${R}•processing: var(--arc-color-fg-secondary);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${tr}•active: var(--arc-color-border-theme-mid);
    ${tr}•processing: var(--arc-color-border-theme-subtle);
    ${tr}•disabled: var(--arc-color-border-disabled);

    &[data-layout=icon] {
      ${tr}: var(--arc-color-border-mid);
      ${tr}•hover: var(--arc-color-border-stark);
      ${tr}•focus: var(--arc-color-border-mid);
    }

    &[data-hierarchy=secondary] {
      ${w}: transparent;
      ${w}•hover: var(--arc-color-bg-neutral-muted);
      ${w}•active: var(--arc-color-bg-neutral-subtle);
      ${w}•processing: transparent;
      ${w}•disabled: transparent;
      ${w}•focus: var(--arc-color-alpha-white-3);
    }
  }

  &[data-variant=secondary]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${w}: var(--arc-color-mono-white);
    ${w}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-white);
    ${w}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-white);
    ${w}•processing: var(--arc-color-mono-white);
    ${w}•disabled: var(--arc-color-mono-white);
    ${w}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-white);
  }

  &[data-variant=secondary-inverse]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${w}: var(--arc-color-mono-black);
    ${w}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-black);
    ${w}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-black);
    ${w}•processing: var(--arc-color-mono-black);
    ${w}•disabled: var(--arc-color-mono-black);
    ${w}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-black);
  }

  /* "floating" button mitigation */
  &:is([data-variant=secondary], [data-variant=secondary-inverse])[arc-shadow] {
    ${w}: var(--arc-button-common-secondary-floating-bg);
    ${w}•hover: var(--arc-button-common-secondary-floating-bg-hover);
    ${w}•active: var(--arc-button-common-secondary-floating-bg-active);
    ${w}•processing: var(--arc-button-common-secondary-floating-bg-processing);
    ${w}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
    ${w}•focus: var(--arc-button-common-secondary-floating-bg-focus);
  }

  &:is(
    [data-variant=tertiary],
    [data-variant=tertiary-inverse]
   ) {
    ${R}: var(--arc-color-fg-primary);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•active: var(--arc-color-fg-secondary);
    ${R}•processing: var(--arc-color-fg-secondary);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-color-bg-neutral-muted);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-bg-neutral-muted);
    ${w}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-hierarchy=plain] {
    ${R}: var(--arc-color-fg-primary);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•hover: var(--arc-color-alpha-heavy);
    ${R}•active: var(--arc-color-alpha-heavy);
    ${R}•processing: var(--arc-color-alpha-heavy);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: transparent;
    ${w}•active: transparent;
    ${w}•processing: transparent;
  }

`,Uh=s`
  &[data-variant=ai-primary] {
    ${R}: var(--arc-color-fg-on-theme-stark);
    ${w}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${ur}•base•color: var(--arc-color-alpha-white-30);

    ${R}•active: var(--arc-color-fg-neutral-mid);
    ${R}•processing: var(--arc-color-fg-on-theme-heavy);
    ${R}•hover: var(--arc-color-fg-on-theme-heavy);

    ${w}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${w}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${w}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${w}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${R}: var(--arc-color-fg-primary);
    ${w}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${R}•active: var(--arc-color-fg-neutral-stark);
    ${R}•processing: var(--arc-color-fg-primary);

    ${w}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${w}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${w}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${w}•disabled: var(--arc-color-bg-disabled);
    ${w}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${w}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${w}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${w}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${tr}: transparent;

    ${R}•disabled: var(--arc-color-fg-disabled);
    ${tr}•disabled: var(--arc-color-border-disabled);
  }

`,Wh=s`
  &[data-variant=alpha-primary] {
    ${R}: var(--arc-color-mono-black);
    ${w}: var(--arc-color-mono-white);
    ${tr}: transparent;

    ${R}•focus: var(--arc-color-mono-black);
    ${R}•active: var(--arc-color-alpha-black-60);
    ${R}•processing: var(--arc-color-mono-black);
    ${R}•disabled: var(--arc-color-alpha-black-60);

    ${w}•hover: var(--arc-color-alpha-white-70);
    ${w}•focus: var(--arc-color-mono-white);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-40);
    ${w}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${R}: var(--arc-color-alpha-white-95);
    ${w}: transparent;
    ${tr}: var(--arc-color-alpha-white-80);

    ${R}•active: var(--arc-color-alpha-white-80);
    ${R}•processing: var(--arc-color-alpha-white-95);
    ${R}•disabled: var(--arc-color-alpha-white-50);

    ${w}•hover: var(--arc-color-alpha-white-20);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-25);
    ${w}•disabled: transparent;

    ${tr}•hover: var(--arc-color-alpha-white-100);
    ${tr}•focus: var(--arc-color-alpha-white-80);
    ${tr}•active: var(--arc-color-alpha-white-50);
    ${tr}•processing: transparent;
    ${tr}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant=alpha-tertiary] {
    ${R}: var(--arc-color-alpha-white-95);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•active: var(--arc-color-alpha-black-60);
    ${R}•processing: var(--arc-color-alpha-white-95);
    ${R}•disabled: var(--arc-color-alpha-white-50);

    ${w}•hover: var(--arc-color-alpha-white-20);
    ${w}•focus: var(--arc-color-alpha-white-5);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-20);
    ${w}•disabled: transparent;
  }

  &:is(
    [data-variant=alpha-plain],
    [data-variant=alpha-link-style]
  ) {
    ${R}: var(--arc-color-alpha-white-95);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•hover: var(--arc-color-alpha-white-60);
    ${R}•active: var(--arc-color-alpha-white-40);
    ${R}•processing: var(--arc-color-alpha-white-95);
    ${R}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=alpha-] {
    ${ur}•base•color: var(--arc-color-alpha-white-30);
  }
`,Kh=s`
  &[data-variant=link-style] {
    ${R}: var(--arc-color-fg-primary);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•hover: var(--arc-color-alpha-heavy);
    ${R}•active: var(--arc-color-alpha-heavy);
    ${R}•processing: var(--arc-color-alpha-heavy);
    ${R}•disabled: var(--arc-color-fg-disabled);
  }
`,Gh=s`
  &[data-variant=critical-primary] {
    ${R}: var(--arc-color-fg-on-stark);
    ${w}: var(--arc-color-bg-critical-stark);
    ${tr}: transparent;

    ${R}•active: var(--arc-color-fg-critical-subtle);
    ${R}•processing: var(--arc-color-fg-on-heavy);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-color-bg-critical-heavy);
    ${w}•active: var(--arc-color-bg-critical-heavy);
    ${w}•processing: var(--arc-color-bg-critical-heavy);
    ${w}•disabled: var(--arc-color-bg-disabled);

    ${ur}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${R}: var(--arc-color-fg-critical-stark);
    ${w}: transparent;
    ${tr}: var(--arc-color-border-critical-stark);

    ${R}•active: var(--arc-color-fg-critical-subtle);
    ${R}•processing: var(--arc-color-fg-critical-stark);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-button-critical-bg-hover);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-bg-critical-muted);
    ${w}•disabled: transparent;

    ${tr}•active: var(--arc-color-border-critical-subtle);
    ${tr}•processing: var(--arc-color-border-critical-stark);
    ${tr}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${w}: var(--arc-button-critical-secondary-floating-bg);
      ${w}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${w}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${w}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${w}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${w}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-tertiary] {
    ${R}: var(--arc-color-fg-critical-stark);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•active: var(--arc-color-fg-critical-subtle);
    ${R}•processing: var(--arc-color-fg-critical-stark);
    ${R}•disabled: var(--arc-color-fg-disabled);

    ${w}•hover: var(--arc-button-critical-bg-hover);
    ${w}•focus: var(--arc-color-alpha-white-3);
    ${w}•active: var(--arc-color-bg-critical-subtle);
    ${w}•processing: var(--arc-color-bg-critical-muted);
    ${w}•disabled: transparent;
  }

  &:is(
    [data-variant=critical-plain],
    [data-variant=critical-link-style]
  ) {
    ${R}: var(--arc-color-fg-critical-stark);
    ${w}: transparent;
    ${tr}: transparent;

    ${R}•hover: var(--arc-color-fg-critical-mid);
    ${R}•active: var(--arc-color-fg-critical-subtle);
    ${R}•processing: var(--arc-color-fg-critical-stark);
    ${R}•disabled: var(--arc-color-fg-disabled);
  }

`,Yh=s`
  ${A}•color: var(${R});
  ${A}•background: var(${w});
  ${A}•font•weight: var(--arc-font-weight-600);
  ${A}•padding: 0 var(${A}•padding•inline);
  ${A}•content•opacity: 1;
  ${A}•cursor: var(--arc-button-cursor, pointer);
  ${A}•transition: 0.2s ease-out;

  ${ea}•color: var(${tr});
  ${ea}: var(--arc-border-width-sm) solid var(${ea}•color, transparent);

  ${to}: var(--arc-border-width-md) solid var(${to}•color, transparent);
  ${to}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${ur}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${ur}•circle•color: var(--arc-button-color, var(${ur}•base•color, var(--arc-color-alpha-mid)));
  ${ur}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${A}•font•weight: normal;
  }

  &[data-variant^=ai-] {
    ${ea}: var(--arc-border-width-md) solid var(${ea}•color, transparent);
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    ${ea}•radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${ea}•radius: var(--arc-border-radius-md);
  }

  &:is(
    [arc-button=custom],
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${A}•padding: unset;
    ${A}•height: unset;
  }

  /* border-radius for plain and link-style informs focus state outline radius */
  &:is(
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${ea}•radius: var(--arc-border-radius-sm);
  }

  &[data-hierarchy=link-style] {
    ${A}•font•weight: inherit;
    ${A}•text•decoration: none;

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
  --arc-icon-size: var(${qr}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${qr}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${ur}•size);
  --arc-spinner-progress-color: var(${ur}•progress•color);
  --arc-spinner-circle-color: var(${ur}•circle•color);
  --arc-spinner-circle-opacity: var(${ur}•circle•opacity);
  --arc-spinner-position: var(${ur}•position, absolute);
  --arc-spinner-inset: var(${ur}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${ur}•translate, -50% -50%);

`,qh=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has(input)
  ) {
    ${A}•position: relative;
  }

  &[is-disabled] {
    ${A}•color: var(${R}•disabled, var(${R}));
    ${A}•background: var(${w}•disabled, var(${w}));
    ${ea}•color: var(${tr}•disabled, var(${tr}));
    ${A}•opacity: var(--arc-button-disabled-opacity, unset);
    ${A}•cursor: var(--arc-button-disabled-cursor, not-allowed);
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
      ${A}•color: var(${R}•hover, var(${R}));
      ${A}•background: var(${w}•hover, var(${w}));
      ${ea}•color: var(${tr}•hover, var(${tr}));
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${A}•color: var(${R}•active, var(${R}));
      ${A}•background: var(${w}•active, var(${w}));
      ${ea}•color: var(${tr}•active, var(${tr}));
    }
  }

  &[is-processing] {
    ${A}•content•visibility: hidden;
    ${A}•content•opacity: 0;

    /* spinner svg position controls */
    ${ur}•position: absolute;
    ${ur}•inset: 50% auto auto 50%;
    ${ur}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${A}•content•visibility: visible;

    /* spinner svg position controls */
    ${ur}•position: relative;
    ${ur}•inset: 0;
    ${ur}•translate: 0;
    ${ur}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${A}•opacity: var(--arc-button-processing-opacity, unset);
    ${A}•cursor: var(--arc-button-processing-cursor, default);

    ${A}•color: var(${R}•processing, var(${R}));
    ${A}•background: var(${w}•processing, var(${w}));
    ${ea}•color: var(${tr}•processing, var(${tr}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-hierarchy=plain],
      [data-hierarchy=link-style],
      [arc-scheme=inverse]:not([data-variant*=primary])
    ):not(
      [data-variant^=alpha-]
    ) {
      ${ur}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${A}•color: var(${R}•focus, var(${R}));
    ${A}•background: var(${w}•focus, var(${w}));
    ${ea}•color: var(${tr}•focus, var(${tr}));
    ${to}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Zh=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Bh}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${Nh}

    /* LAYOUTS -----------------------------------------------------• */
    ${Hh}

    /* VARIANTS ----------------------------------------------------• */
    ${Vh}
    ${Kh}
    ${Uh}
    ${Wh}
    ${Gh}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Yh}
    ${qh}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${A}•cursor));
    position: var(--arc-button-position, var(${A}•position, unset));
    transition: var(--arc-button-transition, var(${A}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${A}•font•weight));
    font-size: var(--arc-button-font-size, var(${A}•font•size, inherit));
    padding: var(--arc-button-padding, var(${A}•padding));

    width: var(--arc-button-width, var(${A}•width, auto));
    min-width: var(--arc-button-min-width, var(${A}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${A}•max•width, 100%));

    height: var(--arc-button-height, var(${A}•height, auto));
    min-height: var(--arc-button-min-height, var(${A}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${A}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${A}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${A}•color));
    background: var(--arc-button-background, var(${A}•background));
    border: var(--arc-button-border, var(${ea}));
    border-radius: var(--arc-button-border-radius, var(${ea}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${to}));
    outline-offset: var(--arc-button-outline-offset, var(${to}•offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
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
      gap: var(--arc-button-gap, var(${A}•gap));

      opacity: var(--arc-button-content-opacity, var(${A}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${A}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${A}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${A}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${A}•opacity));
      transition: var(--arc-button-label-transition, var(${A}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${A}•opacity));
      transition: var(--arc-button-icon-transition, var(${A}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${A}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Vs=(0,n.jsx)(Cc,{}),kr=(0,h.forwardRef)(({children:r,disabled:a,...e},o)=>{const t=(0,h.useRef)(null),{iconEnd:i,iconStart:c,icon:l,text:d,isActive:u,isDisabled:g,isProcessing:p,isProcessingWithText:v,hasLargeIcon:m,tag:b,href:$,type:k,title:_,layout:y,shape:z,size:x="lg",variant:S="common",hierarchy:D="primary",isInverse:B=!1,scheme:F="auto",shadow:T,_isCustom:C,...W}=e,H=b??($?"a":"button"),ar=H==="button"?k||"button":void 0,K=y==="icon",or=v||p||g||a,nr=W?.["aria-disabled"]||or||void 0,gr=!K&&(r||d),M=v&&Vs||c||l,O=!K&&(v&&!(c||l)?void 0:i),N=(p||v&&K)&&Vs,L=S&&Hs.includes(S),Z=(()=>{if(L)return S;const he=D||"primary";if(S==="ai"){const Kf=["primary","secondary"].includes(he)?he:"primary";return`${S}-${Kf}`}return he==="link-style"?S==="critical"||S==="alpha"?`${S}-${he}`:"link-style":S==="common"?he:S==="alpha"||S==="critical"?`${S}-${he}`:S})(),X=F==="auto"?void 0:F,dr=Z?.endsWith("-inverse")?"inverse":void 0,j=B?"inverse":X??dr,er=T===!0?"lg":T,{tooltip:pr,...xr}=W,Jr=Ot(pr)?pr:void 0,xa=e.tooltip??Jr,V=!!xa,Lr=Ot(xa)?{text:xa}:xa,hr=W["aria-describedby"],Mr=(0,h.useRef)(void 0),Ta=Ir(void 0,"arc-tooltip"),Ce=e.id?`${e.id}-tooltip`:Ta;V&&!Mr.current&&(Mr.current=Ce);const ue=V?Mo([hr,Mr.current]):hr,{anchorName:Vn,style:ko,popoverTarget:Ge,popoverTargetAction:Ja,...Q}=xr,Sr=Ge?Do(String(Vn||e?.id)):void 0,Qr=V?Do(String(Ce)):void 0,ra=Es(ko)?ko:void 0,Qa=ra&&"anchorName"in ra&&ra.anchorName,Ae=[...(Ot(Qa)?_s(Qa,", "):[]).map(Do),...Sr?[Sr]:[],...Qr?[Qr]:[]],Un=Mo(Ae,1/0,", "),Ni={...ra??{},...Un?{anchorName:Un}:{}};let Xd={popoverTarget:Ge||void 0,popoverTargetAction:Ja||void 0};return h.version.startsWith("18")&&(Xd={popovertarget:Ge||void 0,popovertargetaction:Ja||void 0}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(H,{...Q,...Xd,ref:he=>{t.current=he,La(o,he)},"arc-button":C?"custom":"","arc-scheme":j,"arc-shadow":er||void 0,disabled:!$&&or||void 0,href:$||void 0,title:V?void 0:_||void 0,type:ar,"data-layout":y,"data-shape":C?void 0:z,"data-size":C?void 0:x,"data-variant":C?void 0:Z,"data-hierarchy":D||void 0,"has-large-icon":m?"":void 0,"is-active":u?"":void 0,"is-processing":p||v&&K?"":void 0,"is-processing-with-text":v&&!K?"":void 0,"is-disabled":or||nr?"":void 0,"aria-disabled":nr,"aria-describedby":ue||void 0,style:Ni,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[M&&typeof M=="string"?(0,n.jsx)(cr,{"arc-button-icon":"",icon:M}):M&&(0,n.jsx)("span",{"arc-button-icon":"",children:M}),!!gr&&(0,n.jsx)("span",{"arc-button-label":"",children:gr}),O&&typeof O=="string"?(0,n.jsx)(cr,{"arc-button-icon":"",icon:O}):O&&(0,n.jsx)("span",{"arc-button-icon":"",children:O})]}),N]}),V&&(0,n.jsx)(Jt,{...Lr,id:Mr.current,alternateAnchor:Lr?.alternateAnchor??(()=>t.current),anchorName:Qr})]})});kr.displayName="ArcButton",ir("ArcButton",Zh);const Wo=(0,h.forwardRef)((r,a)=>(0,n.jsx)(kr,{...r,ref:a,"arc-popover-button":""})),Us=({isInverse:r=!1,isOpen:a,...e})=>(0,n.jsx)(kr,{icon:"fa-regular fa-xmark",text:"Dismiss",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),Xh=({isInverse:r=!1,...a})=>(0,n.jsx)(kr,{icon:"fa-regular fa-arrow-left",text:"Go Back",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),Jh=({children:r,isSticky:a,showDivider:e,showDismiss:o,dismissProps:t,showGoBack:i,goBackProps:c,headerSlotEnd:l,tag:d="header",...u})=>(0,n.jsx)(d,{...u,"arc-popover-header":"","has-divider":e?"":void 0,"is-sticky":a?"":void 0,children:(0,n.jsxs)("div",{"arc-popover-display":"",children:[(0,n.jsxs)("div",{"arc-popover-header-slot":"start",children:[i&&(0,n.jsx)(Xh,{...c}),r]}),(0,n.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,o&&(0,n.jsx)(Us,{...t})]})]})}),Qh=({children:r,tag:a="article",...e})=>(0,n.jsx)(a,{...e,"arc-popover-body":"",children:(0,n.jsx)("div",{"arc-popover-display":"",children:r})}),r0=({children:r,isSticky:a,showDivider:e,tag:o="footer",...t})=>(0,n.jsx)(o,{...t,"arc-popover-footer":"","has-divider":e?"":void 0,"is-sticky":a?"":void 0,children:(0,n.jsx)("div",{"arc-popover-display":"",children:r})});Wo.displayName="ArcPopoverButton";const P=s`--arc-popover`,Ur=s`--arc•popover`,rr=s`--arc•trail•mix`,jc=s`${Ur}•radius`,a0=s`${Ur}•content`,Qt=s`${Ur}•outline`,oa=s`${Ur}•offset`,Va=s`${Ur}•header`,e0=s`${Ur}•body`,Lc=s`${Ur}•divider`,rn=s`${Ur}•footer`,Da=s`${Ur}•tail`,fr=s`${Da}•top`,mr=s`${Da}•left`,Ko=s`${Da}•size`,fa=s`${Da}•x`,ma=s`${Da}•y`,Rc=s`${Ur}•font•size`,an=s`${Ur}•padding`,ta=s`${Ur}•margin`,no=s`${Va}•padding`,ka=s`${e0}•padding`,Ua=s`${rn}•padding`,Ws=s`${Ur}•fg`,en=s`${Ur}•bg`,on=s`${a0}•bg`,tn=s`${Da}•fill•a`,nn=s`${Da}•fill•b`,cn=s`${Da}•edge•a`,sn=s`${Da}•edge•b`,o0=s`

  ${Ur}•fallback: none;
  ${Qt}: var(${P}-outline-size, var(--arc-border-width-md));
  ${jc}: var(${P}-border-radius, var(--arc-border-radius-lg));
  ${oa}: var(${P}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${an}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${rr}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${fa}: var(${P}-tail-x, 1.75em);
  ${ma}: var(${P}-tail-y, 1.125em);
  ${Ko}: 0px;

  &:where([has-tail]) {
    ${Ko}: var(${P}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${oa}: calc(var(${P}-offset, var(--js•offset, 0px)) + var(${Ko}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${an}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${ka}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${ka}•block•end: 0; }
  }

`,t0=s`

  /* default variant: common */
  &[variant] {
    ${Ws}: var(--arc-color-fg-primary);
    ${en}: var(${P}-background, var(--arc-color-bg-mono)) border-box;
    ${on}: var(${P}-background, var(--arc-color-bg-mono)) padding-box;
    ${tn}: var(${P}-background, var(--arc-color-bg-mono));
    ${nn}: var(${P}-background, var(--arc-color-bg-mono));
    ${cn}: var(${P}-background, var(--arc-color-bg-mono));
    ${sn}: var(${P}-background, var(--arc-color-bg-mono));
    ${Ur}•shadow: var(--arc-shadow-lg);
    ${Lc}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${en}: var(--arc-color-border-brand-mid) border-box;
    ${on}: var(--arc-color-bg-brand-muted) padding-box;
    ${tn}: var(--arc-color-bg-brand-muted);
    ${nn}: var(--arc-color-bg-brand-muted);
    ${cn}: var(--arc-color-border-brand-mid);
    ${sn}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${en}: var(--arc-gradient-ai-200) border-box;
    ${on}: var(--arc-gradient-ai-50) padding-box;
    ${tn}: var(${P}-ai-purple-50);
    ${nn}: var(${P}-ai-blue-50);
    ${cn}: var(${P}-ai-purple-200);
    ${sn}: var(${P}-ai-blue-200);
  }

`,n0=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Rc}: 0.75em;
    ${Va}•gap: 0.75em;
    ${no}•block: 0.75em;
    ${no}•inline: 0.75em;

    ${ka}•block: 0.75em;
    ${ka}•inline: 0.75em;

    ${rn}•gap: 0.75em;
    ${Ua}•inline: 0.75em;
    ${Ua}•block•start: 0.75em;
    ${Ua}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${Rc}: 0.875em;
    ${Va}•gap: 1.125em;
    ${no}•block: 1em;
    ${no}•inline: 1.25em;

    ${ka}•block: 1.25em;
    ${ka}•inline: 1.25em;

    ${rn}•gap: 1.125em;
    ${Ua}•inline: 1.25em;
    ${Ua}•block•start: 1em;
    ${Ua}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${an}: 1.25em;
    }
  }

`,Go={TOP:s`
    &[anchor-at*='top-'] {
      ${ta}: 0 0 var(${oa}) 0;
      ${fr}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${rr}: 95%;
      ${mr}: calc(0% + var(${fa}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${rr}: 75%;
      ${mr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${rr}: 53.5%;
      ${mr}: calc(100% - var(${fa}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${ta}: 0 0 0 var(${oa});
      ${mr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${rr}: 53.5%;
      ${fr}: calc(0% + var(${ma}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${rr}: 75%;
      ${fr}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${rr}: 95%;
      ${fr}: calc(100% - var(${ma}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${ta}: var(${oa}) 0 0 0;
      ${fr}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${rr}: 5%;
      ${mr}: calc(100% - var(${fa}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${rr}: 25%;
      ${mr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${rr}: 47.5%;
      ${mr}: calc(0% + var(${fa}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${ta}: 0 var(${oa}) 0 0;
      ${mr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${rr}: 47.5%;
      ${fr}: calc(100% - var(${ma}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${rr}: 25%;
      ${fr}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${rr}: 5%;
      ${fr}: calc(0% + var(${ma}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${Da}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${ta}: 0; }
    &[anchor-at*='corner'] { ${ta}: var(${oa}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},co={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${ta}: 0 0 var(${oa}) 0; }
    &[anchor-at='top-start']::before { ${rr}: 47.5%; ${fr}: 0%; }
    &[anchor-at='top-center']::before { ${rr}: 25%; ${fr}: 0%; }
    &[anchor-at='top-end']::before { ${rr}: 5%; ${fr}: 0%; }

    &[anchor-at='right-start']::before { ${rr}: 95%; ${fr}: calc(100% - var(${ma})); }
    &[anchor-at='right-end']::before { ${rr}: 53.5%; ${fr}: calc(0% + var(${ma})); }

    &[anchor-at*='bottom-'] { ${ta}: var(${oa}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${rr}: 53.5%; ${fr}: 100%; }
    &[anchor-at='bottom-center']::before { ${rr}: 75%; ${fr}: 100%; }
    &[anchor-at='bottom-start']::before { ${rr}: 95%; ${fr}: 100%; }

    &[anchor-at='left-end']::before { ${rr}: 5%; ${fr}: calc(0% + var(${ma})); }
    &[anchor-at='left-start']::before { ${rr}: 47.5%; ${fr}: calc(100% - var(${ma})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${rr}: 53.5%; ${mr}: calc(100% - var(${fa})); }
    &[anchor-at='top-end']::before { ${rr}: 95%; ${mr}: calc(0% + var(${fa})); }

    &[anchor-at*='right-'] { ${ta}: 0 var(${oa}) 0 0; }
    &[anchor-at='right-start']::before { ${rr}: 5%; ${mr}: 100%; }
    &[anchor-at='right-center']::before { ${rr}: 25%; ${mr}: 100%; }
    &[anchor-at='right-end']::before { ${rr}: 47.5%; ${mr}: 100%; }

    &[anchor-at='bottom-end']::before { ${rr}: 47.5%; ${mr}: calc(0% + var(${fa})); }
    &[anchor-at='bottom-start']::before { ${rr}: 5%; ${mr}: calc(100% - var(${fa})); }

    &[anchor-at*='left-'] { ${ta}: 0 0 0 var(${oa}); }
    &[anchor-at='left-end']::before { ${rr}: 95%; ${mr}: 0%; }
    &[anchor-at='left-center']::before { ${rr}: 75%; ${mr}: 0%; }
    &[anchor-at='left-start']::before { ${rr}: 53.5%; ${mr}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${ta}: 0 0 var(${oa}) 0; }
    &[anchor-at='top-start']::before { ${rr}: 5%; ${fr}: 0%; ${mr}: calc(100% - var(${fa})); }
    &[anchor-at='top-end']::before { ${rr}: 47.5%; ${fr}: 0%; ${mr}: calc(0% + var(${fa})); }

    &[anchor-at*='right-'] { ${ta}: 0 var(${oa}) 0 0; }
    &[anchor-at='right-start']::before { ${rr}: 47.5%; ${fr}: calc(100% - var(${ma})); ${mr}: 100%; }
    &[anchor-at='right-end']::before { ${rr}: 5%; ${fr}: calc(0% + var(${ma})); ${mr}: 100%; }

    &[anchor-at*='bottom-'] { ${ta}: var(${oa}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${rr}: 95%; ${fr}: 100%; ${mr}: calc(0% + var(${fa})); }
    &[anchor-at='bottom-start']::before { ${rr}: 53.5%; ${fr}: 100%; ${mr}: calc(100% - var(${fa})); }

    &[anchor-at*='left-'] { ${ta}: 0 0 0 var(${oa}); }
    &[anchor-at='left-end']::before { ${rr}: 53.5%; ${fr}: calc(0% + var(${ma})); ${mr}: 0%; }
    &[anchor-at='left-start']::before { ${rr}: 95%; ${fr}: calc(100% - var(${ma})); ${mr}: 0%; }
  `},c0=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${ta});

    container-type: anchored;
    position-anchor: var(${P}-anchor-name, var(--js•anchor));

    ${Go.TOP}
    ${Go.RIGHT}
    ${Go.BOTTOM}
    ${Go.LEFT}
    ${Go.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${co.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${co.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${co.FLIP_BLOCK_INLINE}
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
          ${co.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${co.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${co.FLIP_BLOCK_INLINE}
        }
      }
    }
`,io={BACKDROP:s`
    [arc-popover]::backdrop {
      background: var(${P}-backdrop, transparent);
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${P}-flex, 1);
      position: relative;
      display: var(${P}-content-display, flex);
      flex-direction: var(${P}-content-flex-direction, column);
      gap: var(${P}-content-gap, 0);

      overflow: var(${P}-overflow, auto);
      overscroll-behavior: var(${P}-overscroll-behavior, contain);

      color: var(${P}-color, var(${Ws}));
      padding: var(${P}-padding, var(${an}));
      margin: var(${P}-margin, unset);
      background: var(${P}-content-background, var(${on}));
      border-radius: calc(var(${jc}) - var(${Qt}));
      border: var(${P}-border, none);

      height: var(${P}-height, auto);
      min-height: var(${P}-min-height, auto);
      max-height: var(${P}-max-height, 65vh);
      resize: var(${P}-resize, none);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${P}-header-flex, none);
      display: var(${P}-header-display, flex);
      justify-content: var(${P}-header-justify-content, space-between);
      align-items: var(${P}-header-align-items, baseline);
      gap: var(${P}-header-gap, var(${Va}•gap));

      padding: var(${P}-header-padding,
        var(${no}•block)
        var(${no}•inline)
      );

      color: var(${P}-header-color, inherit);
      background: var(${P}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${P}-header-z-index, 2);
        top: var(${P}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${P}-header-border-bottom, var(${Lc}));
      }

      :where([arc-button]) {
        margin: var(${P}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Va}•slot•flex: 1;
      ${Va}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Va}•slot•flex: none;
      ${Va}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Va}•slot•flex);
      display: var(${P}-header-display, flex);
      justify-content: var(${P}-header-justify-content, unset);
      align-items: var(${P}-header-align-items, baseline);
      gap: var(${P}-header-slot-gap, var(${Va}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      inset: var(${P}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${P}-dismiss-margin, 0);
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${P}-body-flex, 1);
      display: var(${P}-body-display, block);
      flex-direction: var(${P}-body-flex-direction, unset);

      padding: var(${P}-body-padding,
        var(${ka}•block•start, var(${ka}•block))
        var(${ka}•inline)
        var(${ka}•block•end, var(${ka}•block))
        var(${ka}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${P}-footer-flex, none);
      display: var(${P}-footer-display, flex);
      flex-direction: var(${P}-footer-flex-direction, row-reverse);
      justify-content: var(${P}-footer-justify-content, space-between);
      align-items: var(${P}-footer-align-items, center);
      gap: var(${P}-footer-gap, var(${rn}•gap));

      padding: var(${P}-footer-padding,
        var(${Ua}•block•start)
        var(${Ua}•inline)
        var(${Ua}•block•end)
        var(${Ua}•inline)
      );

      background: var(${P}-footer-background, none);
      color: var(${P}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${P}-footer-z-index, 2);
        bottom: var(${P}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${P}-footer-border-top, var(${Lc}));
      }
    }
  `,TAIL:s`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${Da}•display, block);

      inset: auto;
      top: var(${fr}, auto);
      left: var(${mr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Ko});
      height: var(${Ko});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${tn}) var(${rr}),
        var(${nn}) clamp(0%, 100% - var(${rr}), 100%)
      );

      border: var(${Qt}) solid color-mix(in srgb,
        var(${cn}) var(${rr}),
        var(${sn}) clamp(0%, 100% - var(${rr}), 100%)
      );
    }
  `},i0=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${P}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${P}-background, var(${en}));
    border: var(${Qt}) solid transparent;
    border-radius: var(${jc});
    box-shadow: var(${P}-shadow, var(${Ur}•shadow));
    width: var(${P}-width, auto);
    height: var(${P}-height, auto);
    min-width: var(${P}-min-width, auto);
    min-height: var(${P}-min-height, auto);
    max-width: var(${P}-max-width, 100vw);
    max-height: var(${P}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${P}-font-size, var(${Rc}));
  }

  ${io.CONTENT}
  ${io.HEADER}
  ${io.BODY}
  ${io.FOOTER}
  ${io.TAIL}
  ${io.BACKDROP}
`,Yo={SETUP:o0,ANCHORS:c0,VARIANTS:t0,DENSITIES:n0,ELEMENT:i0},s0=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Oh}

  [arc-popover] {
    ${Yo.SETUP}
    ${Yo.VARIANTS}
    ${Yo.DENSITIES}
  }

  ${Yo.ANCHORS}
  ${Yo.ELEMENT}

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

`,Ks=(0,h.forwardRef)(({children:r,popover:a=da.popover,anchorAt:e=da.anchorAt,anchorName:o,anchorProps:t,alternateAnchorId:i,alternateAnchor:c,boundary:l=da.boundary,tryFallbacks:d=da.tryFallbacks,density:u=da.density,variant:g=da.variant,scheme:p=da.scheme,isInverse:v,hasTail:m,tailSize:b=da.tailSize,offset:$=da.offset,hidePopoverButton:k,headerSlot:_,showHeaderDivider:y,isHeaderSticky:z,showDismiss:x,dismissProps:S,showGoBack:D,goBackProps:B,headerSlotEnd:F,footerSlot:T,isFooterSticky:C,showFooterDivider:W,tag:H="div",contentTag:ar="div",onToggle:K,...or},nr)=>{const gr=(0,h.useRef)(null),M=(0,h.useRef)(null),O=(0,h.useRef)(null),N=(0,h.useRef)(K);(0,h.useImperativeHandle)(nr,()=>M.current);const[L,Z]=(0,h.useState)(!1),X=(0,h.useMemo)(()=>p==="auto"?void 0:v?"inverse":p,[v,p]),J=(0,h.useCallback)(()=>{if(typeof document>"u")return gr.current??null;const hr=Ra(gr.current)??document;return i?hr.getElementById(i):typeof c=="string"?hr.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:gr.current??null},[c,i]),dr=d||l==="flip",j=!!m&&!bs.includes(e),er=$s({canHaveTail:j,tailSize:b}),pr=(0,h.useMemo)(()=>{const hr=o||i||(typeof c=="string"?c:void 0)||t?.id||or.id||void 0;return kc(String(hr))},[o,t?.id,or.id,c,i]),xr=(0,h.useMemo)(()=>({popoverTarget:or.id,"aria-haspopup":!0,"aria-controls":or.id,"aria-expanded":L}),[or.id,L]),Jr=(0,h.useMemo)(()=>({isOpen:L,"aria-label":"Dismiss",...xr,...S}),[S,L,xr]),ga=(0,h.useMemo)(()=>({ref:gr,...xr,...t,tooltip:L?void 0:t?.tooltip,anchorName:pr||""}),[t,xr,pr,L]),xa=(0,h.useMemo)(()=>({"--js\u2022anchor":ga?.anchorName||"","--js\u2022offset":Number($)===0?"":`${$}px`,"--js\u2022tail":er.cssTailVar}),[ga?.anchorName,$,er.cssTailVar]);Mt(()=>{const hr=J();if(O.current=hr,!!hr)return xs(hr,ga.anchorName)},[J,ga.anchorName,L]),(0,h.useEffect)(()=>{N.current=K},[K]),(0,h.useEffect)(()=>{const hr=M.current;if(!hr)return;const Mr=Ta=>{const{newState:Ce}=Ta,ue=Ce==="open";Z(ue),ue&&(O.current=J()),N.current?.(Ta)};return hr.addEventListener("toggle",Mr),()=>hr.removeEventListener("toggle",Mr)},[J]),Qu({anchorEl:O.current,popoverEl:M.current,anchorAt:e,tryFallbacks:dr,offsetPx:Number($)||0,tailSizePx:er.floatingTailPx,hasTail:j,isOpen:L}),th({anchorEl:O.current,popoverEl:M.current,anchorAt:e,tryFallbacks:dr,hasTail:j,isOpen:L});const V=!!(_||D||F),Lr=!!T;return(0,n.jsxs)(n.Fragment,{children:[!((i||c)&&k)&&(0,n.jsx)(Wo,{...ga}),(0,n.jsxs)(H,{...or,ref:M,"arc-popover":"","arc-scheme":X,"anchor-at":e,"try-fallbacks":dr?"":void 0,popover:a,variant:g,density:u,"has-tail":j?"":void 0,role:or.role??"dialog",style:{...or.style,...xa},children:[(0,n.jsxs)(ar,{"arc-popover-content":"",children:[V&&(0,n.jsx)(Jh,{showDivider:y,showGoBack:D,goBackProps:B,headerSlotEnd:F,showDismiss:x,dismissProps:Jr,isSticky:z,children:_}),V||Lr?(0,n.jsx)(Qh,{children:r}):(0,n.jsx)(ar,{"arc-popover-display":"",children:r}),Lr&&(0,n.jsx)(r0,{showDivider:W,isSticky:C,children:T})]}),x&&!V&&(0,n.jsx)(Us,{...Jr})]})]})});Ks.displayName="ArcPopover";const Pc=Ks;Pc.handlePopover=ys,Pc.Button=Wo;const te=Pc;ir("ArcPopover",s0);const l0=s`
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
      padding: var(${f}•4) var(${f}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${f}•6);
      padding: var(${f}•4) var(${f}•8);
    }

    ${tc}
    ${ss}
  }

}
`,d0=r=>(0,n.jsx)("ul",{...r,"data-element":"list"}),u0=r=>(0,n.jsx)("li",{...r,"data-element":"list-item"}),h0=({count:r,anchorId:a,overflowId:e,shouldShowOverflow:o,...t})=>(0,n.jsx)(vc,{title:`+${r}`,children:(0,n.jsx)(te.Button,{...t,id:a,popoverTarget:e,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!o,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),g0=({children:r,id:a,size:e="sm",overflowCount:o=0,shouldShowOverflow:t=!1,anchorAt:i="bottom-end",tryFallbacks:c=!0,...l})=>{const d=Math.min(o,999),u=Ir(a,"arc-avatar-overflow"),g=(0,h.useMemo)(()=>`${u}-anchor`,[u]),p=(0,h.useMemo)(()=>h.Children.toArray(r),[r]);return(0,n.jsxs)(n.Fragment,{children:[d>0&&(0,n.jsx)(h0,{count:d,anchorId:g,overflowId:u,shouldShowOverflow:t}),t&&d>0&&(0,n.jsx)(te,{...l,scheme:"inverse","arc-avatar-overflow":"",id:u,anchorAt:i,tryFallbacks:c,alternateAnchorId:g,hidePopoverButton:!0,variant:"common","data-size":e,children:(0,n.jsx)(d0,{children:p.map((v,m)=>(0,n.jsx)(u0,{children:v},m))})})]})};ir("ArcAvatarOverflow",l0);const Gs=({fg:r,bg:a})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${a}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${a}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${a}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${a}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${a}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${a}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${a}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${a}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${a}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${a}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${a}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${a}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${a}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${a}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${a}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${a}•low: var(--arc-color-alpha-black-40);
  }
`,Ys=({fg:r,bg:a})=>s`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${a}: var(${a}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${a}: var(${a}•low);
  }
`,U=s`--arc•badge`,Mc=s`${U}•fg`,Bc=s`${U}•bg`,v0=Gs({fg:Mc,bg:Bc}),p0=Ys({fg:Mc,bg:Bc}),f0=s`
  &:has(>[data-size=lg]) {
    ${U}•font•size: var(${f}•14);
    ${U}•font•size•caps: var(${f}•12);
    ${U}•size: var(${f}•24);
    ${U}•min•size: var(${f}•30);
    ${U}•padding•inline: var(${f}•8);
    ${U}•border•radius: var(${f}•4);
    ${U}•gap: var(${f}•4);
  }

  &:has(>[data-size=md]) {
    ${U}•font•size: var(${f}•12);
    ${U}•font•size•caps: var(${f}•10);
    ${U}•size: var(${f}•20);
    ${U}•min•size: var(${f}•24);
    ${U}•padding•inline: var(${f}•6);
    ${U}•border•radius: var(${f}•4);
    ${U}•gap: var(${f}•4);
  }

  &:has(>[data-size=sm]) {
    ${U}•font•size: var(${f}•10);
    ${U}•font•size•caps: var(${f}•8);
    ${U}•size: var(${f}•16);
    ${U}•min•size: var(${f}•18);
    ${U}•padding•inline: var(${f}•4);
    ${U}•border•radius: var(${f}•4);
    ${U}•gap: var(${f}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${U}•font•size: 1em;
    ${U}•font•size•text: 0.75em;
    ${U}•font•size•caps: 0.625em;
    ${U}•size: 1.25em;
    ${U}•min•size: 1.5em;
    ${U}•padding•inline: 0.375em;
    ${U}•border•radius: 0.25em;
    ${U}•gap: 0.25em;
  }
`,m0=s`
  &:has(>[data-layout=fill]) {
    ${U}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${U}•display: flex;
    ${U}•min•width: var(${U}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${U}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${U}•display: inline-flex;
    ${U}•min•width: min-content;
  }
`,b0=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${v0}
    ${p0}
    ${f0}
    ${m0}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${U}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${U}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${U}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${U}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${U}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${U}•flex);
    display: var(${U}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${U}•size);
    padding-inline: var(${U}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${Mc}));
    background: var(--arc-badge-background, var(${Bc}));
    border-radius: var(${U}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${U}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${U}•font•size•caps);
    }
  }

}
`,qs=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],$0=["brand",...qs.filter(r=>r!=="brand")],y0=["neutral",...qs.filter(r=>r!=="neutral")],x0=Kr(Se,$0),k0=Kr(Se,y0),w0=Kr(aa,["inherit","lg","md","sm"]),C0=Kr(Ia,["hug","fill"]),A0=["high","low"],S0=Kr(zr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),z0={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},E0=({children:r,icon:a,text:e,isFlipped:o,isFlexible:t,isUppercase:i,color:c,variant:l,size:d="inherit",layout:u="hug",contrast:g="high",...p})=>{const v=c??z0[l??"brand-blue"],m=r||(0,n.jsx)(Yr,{icon:a,text:e,isFlipped:o,layout:"gutter"}),b=u==="fill"&&t;return(0,n.jsx)("span",{...p,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":g,"data-color":v,"data-layout":u,"data-size":d,"data-is-flexible":b?"":void 0,"data-is-uppercase":i?"":void 0,children:m})})};ir("ArcBadge",b0);const wr=s`--arc•badge•count`,Dc=s`${wr}•fg`,Oc=s`${wr}•bg`,_0=Gs({fg:Dc,bg:Oc}),T0=Ys({fg:Dc,bg:Oc}),I0=s`
  &:has(>[data-size=lg]) {
    ${wr}•font•size: var(${f}•14);
    ${wr}•size: var(${f}•24);
    ${wr}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=md]) {
    ${wr}•font•size: var(${f}•12);
    ${wr}•size: var(${f}•20);
    ${wr}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=sm]) {
    ${wr}•font•size: var(${f}•10);
    ${wr}•size: var(${f}•16);
    ${wr}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${wr}•font•size: 1em;
    ${wr}•font•size•text: 0.75em;
    ${wr}•size: 1.25em;
    ${wr}•padding•inline: 0.25em;
  }
`,j0=s`
  &:has(>[data-shape=square]) {
    ${wr}•border•radius: var(${f}•4);
  }

  &:has(>[data-shape=circle]) {
    ${wr}•border•radius: var(--arc-border-radius-pill);
  }
`,L0=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${_0}
  ${T0}
  ${I0}
  ${j0}
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
  font-size: var(--arc-badge-count-font-size, var(${wr}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${wr}•size);
  min-width: var(${wr}•size);
  padding-inline: var(${wr}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Dc}));
  background: var(--arc-badge-count-background, var(${Oc}));
  border-radius: var(${wr}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${wr}•font•size•text, 1em);
  }
}

`,R0=Kr(aa,["inherit","lg","md","sm"]),P0=Kr(zr,["neutral","brand","critical","warning","success","inverse"]),M0=["low","high"],B0=Kr(Co,["square","circle"]),D0={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},O0=({children:r,text:a,color:e,variant:o,contrast:t,size:i="inherit",shape:c="square",...l})=>{const d=r||(0,n.jsx)("span",{"data-element":"text",children:a}),u=e??D0[o??"neutral"],g=o==="critical"?"high":t??"low";return(0,n.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-color":u,"data-contrast":g,"data-shape":c,"data-size":i,children:d})})};ir("ArcBadgeCount",L0);const wa=s`--arc•banner`,na=s`${wa}•bg`,Zr=s`${wa}•fg`,ba=s`${wa}•columns`,ne=s`${wa}•border`,Fc=s`${wa}•border•radius`,qo=s`${wa}•padding`,De=s`${wa}•min•height`,ln=s`${wa}•body`,so=s`${ln}•font•size`,dn=s`${ln}•gap`,Zs=s`${ln}•flex•direction`,Xs=s`${ln}•min•width`,Nc=s`${wa}•icon`,lo=s`${Nc}•font•size`,Hc=s`${Nc}•padding`,pe=s`${Nc}•color`,Js=s`${wa}•action`,Vc=s`${Js}•justify`,Uc=s`${Js}•gap`,Zo=s`${wa}•column•gap`,Wc=s`${wa}•row•gap`,F0=s`
  &:where([variant=ai]) {
    ${Zr}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${na}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${ne}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${Zr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-brand-mid);
    ${na}: var(--arc-color-bg-blue-muted);
    ${ne}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${Zr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-critical-mid);
    ${na}: var(--arc-color-bg-critical-muted);
    ${ne}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${Zr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-info-mid);
    ${na}: var(--arc-color-bg-info-muted);
    ${ne}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${Zr}: var(--arc-color-fg-secondary);
    ${pe}: var(--arc-color-fg-secondary);
    ${na}: var(--arc-color-alpha-muted);
    ${ne}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${Zr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-success-mid);
    ${na}: var(--arc-color-bg-success-muted);
    ${ne}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${Zr}: var(--arc-color-fg-primary);
    ${pe}: var(--arc-color-fg-warning-mid);
    ${na}: var(--arc-color-bg-warning-muted);
    ${ne}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,N0=s`
  &:where([variant=ai]) {
    ${Zr}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${na}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${Zr}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${Zr}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${Zr}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${Zr}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${Zr}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${Zr}: var(--arc-color-fg-on-mid);
    ${na}: var(--arc-color-bg-warning-mid);
  }
`,H0=s`
  ${dn}: 0.375em;
  ${Zs}: column;
  ${Xs}: 7em;
  ${Uc}: 0.75em;
  ${Zo}: 0.75em;
  ${Wc}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${F0}

    ${qo}: 0 0.75em 0 1em;
    ${Fc}: var(--arc-border-radius-lg);
    ${dn}: 0.125em;
    ${Hc}: 0.0625em;
    ${Zo}: 0.625em;

    ${De}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${De}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${De}: 3.5em;
        ${Wc}: 0.25em;

        &:has([arc-banner-actions]) {
          ${De}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${Vc}: flex-start;

      &[density=compact] {
        ${qo}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${so});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${N0}

    ${De}: 4em;
    ${qo}: 0 0.75em 0 1em;
    ${ne}: none;
    ${Fc}: 0;
    ${dn}: 0.125em;
    ${Zo}: 1em;
    ${Vc}: flex-end;
    ${Hc}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${lo}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${so});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${lo}: 1em;
    ${so}: 0.875em;
  }

  &[density=compact] {
    ${De}: 2em;
    ${qo}: 0 0.25em 0 0.5em;
    ${so}: 0.75em;
    ${Uc}: 0.5em;
    ${Zo}: 0.5em;

    &[action-placement=inline] {
      ${lo}: 1em;
    }

    &[action-placement=bottom] {
      ${lo}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${pe}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${pe}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${lo});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,V0=s`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,U0=s`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${so});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,W0=s`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${ba}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${ba}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${ba}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${ba}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${ba}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${ba}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${ba}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${ba}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${ba}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${ba}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${ba}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${ba}: 1fr;
    }
  }
`,K0=s`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${ne}));
  background: var(--arc-banner-background, var(${na}));
  border-radius: var(--arc-banner-border-radius, var(${Fc}));
  padding: var(--arc-banner-padding, var(${qo}));
  min-height: var(--arc-banner-min-height, var(${De}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${W0}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${Zr}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${ba});
    column-gap: var(${Zo});
    row-gap: var(${Wc});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${Zr}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${Xs}));

    display: flex;
    flex-direction: var(${Zs});
    gap: var(${dn});
  }

  [arc-banner-icon] {
    font-size: var(${lo});
    padding-inline: var(${Hc});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${so});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${Vc}));
    gap: var(--arc-banner-action-gap, var(${Uc}));
  }

`,G0=s`
@layer arc-components {
  ${Fh}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${H0}

    /* CORE STYLES --------------------------------------------------• */
    ${K0}

    /* INSET LAYOUT -------------------------------------------------• */
    ${V0}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${U0}
  }

}
`,Y0=["comfortable","compact"],q0=["inset","bleed"],Z0=["inline","bottom"],X0=["left","center"],J0=[...re],Q0=[...zr,"announcement"],rg=Kr(Q0,["ai","announcement","critical","info","neutral","success","warning"]),fe={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},ag=r=>r==="critical"||r==="warning"?"alert":"status",eg=({children:r,id:a,icon:e,dismissProps:o,heading:t,density:i=fe.density,layout:c=fe.layout,actionPlacement:l=fe.actionPlacement,alignment:d=fe.alignment,actionSlot:u,showDismiss:g=fe.showDismiss,message:p,variant:v=fe.variant,onClose:m,...b})=>{const $=Ir(a,"arc-banner"),k=gc(e),_=d==="center",y=c==="bleed",z=c==="inset",x=i==="compact",S=l==="inline",D=!!k,F=z&&v==="ai"?"ai-200":void 0,T={variant:v,layout:c,density:i,alignment:d,"action-placement":l},C=()=>(0,n.jsx)(cr,{icon:k,gradient:F}),W=()=>(0,n.jsx)(n.Fragment,{children:!!u&&(0,n.jsx)("span",{"arc-banner-actions":"",children:u})}),H=()=>(0,n.jsx)("div",{"arc-banner-dismiss":"",children:(0,n.jsx)(kr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:z||y&&v==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:x?"sm":"md",...o,onClick:or=>{o?.onClick?.(or),m?.()}})}),ar=({showActions:or=!0})=>(0,n.jsx)("div",{"arc-banner-body":"",children:r||(0,n.jsxs)(Yr,{icon:(0,n.jsx)(C,{}),children:[!!t&&(0,n.jsx)("strong",{children:t})," ",p," ",or&&u]})}),K=()=>(0,n.jsxs)(n.Fragment,{children:[D&&(0,n.jsx)("span",{"arc-banner-icon":"",children:(0,n.jsx)(C,{})}),(0,n.jsx)("div",{"arc-banner-body":"",children:r||(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)("strong",{"arc-banner-heading":"",children:t}),p&&(0,n.jsx)("span",{"arc-banner-message":"",children:p})]})})]});return(0,n.jsx)("div",{role:ag(v??fe.variant),...b,...T,"arc-banner":"",id:$,children:(0,n.jsxs)("div",{"arc-banner-grid":"",children:[_?(0,n.jsx)(ar,{}):(0,n.jsxs)(n.Fragment,{children:[x&&S?(0,n.jsx)(ar,{showActions:!1}):(0,n.jsx)(K,{}),(0,n.jsx)(W,{})]}),g&&(0,n.jsx)(H,{})]})})};ir("ArcBanner",G0);const ce=s`--arc•label`,Xo=s`${ce}•cursor`,Jo=s`${ce}•opacity`,og=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${Jo}: var(--arc-label-opacity, unset);
    ${Jo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${ce}•display: var(--arc-label-display, inline-flex);
    ${ce}•gap: var(--arc-label-gap, var(${f}•8));
    ${ce}•align•items: var(--arc-label-align-items, baseline);

    ${Xo}: var(--arc-label-cursor, pointer);
    ${Xo}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${Xo}: var(${Xo}•disabled);
      ${Jo}: var(${Jo}•disabled);
    }

    &[data-layout=fill] {
      ${ce}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${ce}•display);
    align-items: var(${ce}•align•items);
    gap: var(${ce}•gap);
    cursor: var(${Xo});
  }

}
`,tg=q(Ia,["hug","fill"]),me=({layout:r,...a})=>(0,n.jsx)("label",{...a,"arc-label":"","data-layout":r});ir("ArcLabel",og);const ng=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${Jo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,Oe=r=>(0,n.jsx)("span",{...r,"arc-label-content":""});ir("LabelContent",ng);const cg={checkbox:"checkbox",radio:"radio",switch:"radio"},Qo=({id:r,indeterminate:a,type:e,onChange:o,...t})=>{const i=e==="checkbox"&&!!a,c=(0,h.useRef)(null),l=Ir(r,`arc-${e}`),d=u=>g=>{if(!(g?.target instanceof HTMLInputElement))return;const p={checked:g?.target.checked,indeterminate:g?.target?.indeterminate,name:g?.target?.name,value:t?.value};u?.(p,g)};return(0,h.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!a)},[a]),(0,n.jsx)("input",{...t,id:l,ref:c,type:cg[e],"arc-input-type":e,"aria-disabled":t?.disabled||void 0,"data-is-disabled":t?.disabled||void 0,"data-is-checked":t?.checked||void 0,"data-is-indeterminate":i||void 0,onChange:d(o)})},ig=s`
@layer arc-components {

  [arc-input-mask] {
    ${I}•border•width: var(--arc-border-width-sm);
    ${I}•border: var(${I}•border•width) solid var(${I}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${I}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${I}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${I}•outline: var(${I}•border•width) solid var(--arc-color-border-focus);
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
    width: var(${I}•width);
    height: var(${I}•height);
    opacity: var(${I}•opacity, var(--arc-alpha-100));

    color: var(${I}•color, transparent);
    background: var(${I}•background);
    border: var(${I}•border);
    border-radius: var(${I}•border•radius);
    translate: var(${I}•translate, unset);

    outline: var(${I}•outline, none);
    outline-offset: var(${I}•border•width);

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
      inset: calc(var(${I}•border•width) * -1);
      cursor: var(${I}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${I}•z•index, unset);
    }
  }

}
`,un=({type:r,...a})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...a,"arc-input-mask":r})});ir("ArcBooleanInputMask",ig);const Or=s`--arc•checkbox`,sg=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Or}•font•size: 1em;
      ${Or}•icon•size: 0.625em;
      ${Or}•size: 1.125em;
      ${Or}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Or}•font•size: var(${f}•14);
      ${Or}•icon•size: var(${f}•10);
      ${Or}•size: var(${f}•18);
      ${Or}•gap: var(${f}•8);
    }

    &[data-size=sm] {
      ${Or}•font•size: var(${f}•12);
      ${Or}•icon•size: var(${f}•10);
      ${Or}•size: var(${f}•16);
      ${Or}•gap: var(${f}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${I}•border•radius: var(${f}•4);
    ${I}•size: var(${Or}•size);
    ${I}•icon•size: var(${Or}•icon•size);
    ${I}•width: var(${Or}•size);
    ${I}•height: var(${Or}•size);
    ${I}•translate: 0 var(${f}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${Or}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${Or}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${I}•color: transparent;
      ${I}•border•color: var(--arc-color-border-stark);
      ${I}•background: transparent;

      &:hover {
        ${I}•border•color: var(--arc-color-border-theme-heavy);
        ${I}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${I}•border•color: var(--arc-color-border-disabled);
        ${I}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${I}•color: var(--arc-color-fg-on-theme-heavy);
        ${I}•border•color: transparent;
        ${I}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${I}•color: var(--arc-color-fg-on-theme-stark);
          ${I}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${I}•color: var(--arc-color-fg-on-theme-mid);
          ${I}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${I}•color: var(--arc-color-fg-theme-heavy);
        ${I}•border•color: var(--arc-color-border-theme-heavy);
        ${I}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${I}•color: var(--arc-color-fg-theme-stark);
          ${I}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${I}•color: var(--arc-color-fg-theme-subtle);
          ${I}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,lg=q(Ia,["hug","fill"]),dg=q(aa,["inherit","md","sm"]),ug=q(zr,["primary","secondary"]),Qs=({children:r,label:a,layout:e,size:o="md",variant:t="primary",useMask:i=!0,...c})=>{const{className:l,title:d,...u}=c,g={className:l,title:d},p=r??a,v=(0,n.jsx)(Qo,{...u,type:"checkbox"}),m=i&&(0,n.jsxs)(un,{type:"checkbox",children:[v,(0,n.jsx)(cr,{icon:u?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),b=!!p&&(0,n.jsxs)(me,{layout:e,children:[m||v,(0,n.jsx)(Oe,{children:p})]});return(0,n.jsx)("span",{...g,"arc-checkbox":"","data-size":o,"data-variant":t,children:b||m||v})};ir("ArcCheckbox",sg);const Ca=s`--arc•cb`,Cr=s`${Ca}•o`,Aa=s`${Cr}•border`,Kc=s`${Cr}•icon`,Gc=s`${Cr}•text`,hg=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Ca}•font•size: var(${f}•14);
    ${Ca}•border•radius: var(${f}•6);
    ${Ca}•background: var(--arc-color-alpha-black-0);
    ${Ca}•padding: 0px;
    ${Ca}•gap: var(${f}•2);

    ${Cr}•color: var(--arc-color-fg-secondary);
    ${Cr}•background: var(--arc-color-alpha-white-0);

    ${Aa}•color: var(--arc-color-alpha-black-0);
    ${Aa}•width: var(${f}•1);
    ${Aa}•radius: var(${f}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${Cr}•size: var(${f}•40);
      ${Cr}•line•height: var(${f}•38); /* • -2px to account for border-width (top/bottom) */
      ${Kc}•padding: var(${f}•8);
      ${Gc}•padding: var(${f}•12);
    }

    &[data-size=md] {
      ${Cr}•size: var(${f}•32);
      ${Cr}•line•height: var(${f}•30); /* • -2px to account for border-width (top/bottom) */
      ${Kc}•padding: var(${f}•6);
      ${Gc}•padding: var(${f}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Ca}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Ca}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${Cr}•color: var(--arc-color-fg-on-hover-default);
        ${Cr}•background: var(--arc-color-bg-hover-default);
        ${Aa}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${Cr}•color: var(--arc-color-fg-primary);
      ${Cr}•background: var(--arc-color-bg-secondary);
      ${Aa}•color: var(--arc-color-alpha-black-0);
      ${Cr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${Cr}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${Cr}•outline: var(${Aa}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Ca}•font•size));
    display: var(${Ca}•display);
    gap: var(${Ca}•gap);
    background: var(${Ca}•background);
    border-radius: var(${Aa}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Aa}•radius);
      outline: var(${Cr}•outline, none);
      outline-offset: var(${Aa}•width);
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
      line-height: var(${Cr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${Cr}•size);
      min-width: var(${Cr}•size);

      border-radius: var(${Aa}•radius);
      border: var(${Aa}•width) solid var(${Aa}•color);
      background: var(${Cr}•background);
      color: var(${Cr}•color);
      font-weight: var(${Cr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Gc}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Kc}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,gg=q(Ia,["hug","fill"]),vg=q(aa,["lg","md"]),pg=({children:r,label:a,icon:e,...o})=>{const t=r||(0,n.jsx)(Yr,{icon:e,text:a});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,n.jsx)(Qs,{...o,label:t,layout:"fill",useMask:!1})})},fg=({children:r,size:a="lg",layout:e="hug",...o})=>(0,n.jsx)("ul",{...o,"arc-checkbox-bar":"","data-size":a,"data-layout":e,role:"group",children:r});ir("ArcCheckboxBar",hg);const mg=["normal","simple","add"],bg=["swatch","color-stop","thumbnail"],$g=["standalone","embedded"],rl=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],al=["eye-dropper","alpha-slider","hex-input","palettes"],yg=1e-10,Yc=1e-6,hn=1e-4,G=(r,a,e)=>Math.min(e,Math.max(a,r)),gn=(r,a)=>{const e=10**a;return Math.round(r*e)/e},el=(r,a=Yc)=>Math.abs(r)<a?0:Math.abs(1-r)<a?1:r,rt=r=>parseInt(r,16),Wr=r=>G(gn(r,0),0,255),ol=r=>gn((r%360+360)%360,2),tl=(r,a)=>el(gn(G(r,0,1),a)),Oa=r=>{const a=(r.h%360+360)%360,e=G(r.s,0,1),o=G(r.v,0,1),t=G(r.a,0,1),i=o*e,c=i*(1-Math.abs(a/60%2-1)),l=o-i;let d=0,u=0,g=0;return a<60?[d,u,g]=[i,c,0]:a<120?[d,u,g]=[c,i,0]:a<180?[d,u,g]=[0,i,c]:a<240?[d,u,g]=[0,c,i]:a<300?[d,u,g]=[c,0,i]:[d,u,g]=[i,0,c],{r:(d+l)*255,g:(u+l)*255,b:(g+l)*255,a:t}},at=(r,a)=>{const e=G(r.r,0,255)/255,o=G(r.g,0,255)/255,t=G(r.b,0,255)/255,i=Math.max(e,o,t),c=Math.min(e,o,t),l=i-c,d=i===0?0:l/i,u=i;let g=a??0;return l>yg?(i===e?g=60*((o-t)/l%6):i===o?g=60*((t-e)/l+2):g=60*((e-o)/l+4),g<0&&(g+=360)):g=(g%360+360)%360,{h:g,s:d,v:u,a:G(r.a,0,1)}},nl=r=>{const a=(r.h%360+360)%360,{s:e}=r,{l:o}=r,t=(1-Math.abs(2*o-1))*e,i=t*(1-Math.abs(a/60%2-1)),c=o-t/2;let l=0,d=0,u=0;return a<60?[l,d,u]=[t,i,0]:a<120?[l,d,u]=[i,t,0]:a<180?[l,d,u]=[0,t,i]:a<240?[l,d,u]=[0,i,t]:a<300?[l,d,u]=[i,0,t]:[l,d,u]=[t,0,i],{r:(l+c)*255,g:(d+c)*255,b:(u+c)*255,a:r.a}},cl=r=>{const a=r.r/255,e=r.g/255,o=r.b/255,t=Math.max(a,e,o),i=Math.min(a,e,o),c=t-i;let l=0;c!==0&&(t===a?l=60*((e-o)/c%6):t===e?l=60*((o-a)/c+2):l=60*((a-e)/c+4)),l<0&&(l+=360);const d=(t+i)/2,u=c===0?0:c/(1-Math.abs(2*d-1));return{h:l,s:u,l:d,a:r.a}},il=r=>{const a=Fe(r.r),e=Fe(r.g),o=Fe(r.b),t=.4122214708*a+.5363325363*e+.0514459929*o,i=.2119034982*a+.6806995451*e+.1073969566*o,c=.0883024619*a+.2817188376*e+.6299787005*o,l=Math.cbrt(t),d=Math.cbrt(i),u=Math.cbrt(c),g=.2104542553*l+.793617785*d-.0040720468*u,p=1.9779984951*l-2.428592205*d+.4505937099*u,v=.0259040371*l+.7827717662*d-.808675766*u,m=Math.sqrt(p*p+v*v);let b=Math.atan2(v,p)*180/Math.PI;return b<0&&(b+=360),{L:G(g,0,1),C:m,h:b,a:G(r.a,0,1)}},sl=r=>{const a=G(r.L,0,1),e=r.h*Math.PI/180,o=r.C*Math.cos(e),t=r.C*Math.sin(e),i=a+.3963377774*o+.2158037573*t,c=a-.1055613458*o-.0638541728*t,l=a-.0894841775*o-1.291485548*t,d=i*i*i,u=c*c*c,g=l*l*l,p=4.0767416621*d-3.3077115913*u+.2309699292*g,v=-1.2684380046*d+2.6097574011*u-.3413193965*g,m=-.0041960863*d-.7034186147*u+1.707614701*g,b=$=>{const k=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(G(k,0,1)*255)};return{r:b(p),g:b(v),b:b(m),a:G(r.a,0,1)}},Fe=r=>{const a=Wr(r)/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4},ll=r=>{const a=Fe(r.r),e=Fe(r.g),o=Fe(r.b);return .2126*a+.7152*e+.0722*o},dl=(r,a)=>{const e=r.a+a.a*(1-r.a);if(e<=0)return{r:0,g:0,b:0,a:0};const o=r.a/e,t=a.a*(1-r.a)/e;return{r:Wr(r.r*o+a.r*t),g:Wr(r.g*o+a.g*t),b:Wr(r.b*o+a.b*t),a:tl(e,2)}},et=(r,a,e,o)=>{const t=o?o(r):r,i=o?o(a):a;return Math.abs(t-i)<=e},uo=(r,a,e)=>et(r,a,e,Math.round),qc=(r,a,e)=>et(r,a,e),vn=(r,a)=>!a||!r?!1:uo(r.r,a.r,1)&&uo(r.g,a.g,1)&&uo(r.b,a.b,1)&&qc(r.a,a.a,1/255+Yc),Zc=(r,a)=>!r||!a?!1:Wr(r.r)===Wr(a.r)&&Wr(r.g)===Wr(a.g)&&Wr(r.b)===Wr(a.b)&&Math.abs(r.a-a.a)<Yc,Xc=(r,a)=>!a||!r?!1:uo(r.r,a.r,3)&&uo(r.g,a.g,3)&&uo(r.b,a.b,3)&&qc(r.a,a.a,.02),Jc=(r,a)=>et(r.h,a.h,hn)&&et(r.s,a.s,hn)&&et(r.v,a.v,hn)&&qc(r.a,a.a,hn),xg=/^[0-9a-f]+$/i,kg=500,ho=new Map,Qc=r=>({...r}),wg=(r,a)=>{if(ho.size>=kg){const e=ho.keys().next().value;e&&ho.delete(e)}ho.set(r,a?Qc(a):null)},Cg=r=>r.split("").map(a=>a+a).join(""),ul=r=>{const a=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(a.length))return null;const e=a.length<=4?Cg(a):a;if(!xg.test(e))return null;const o=rt(e.slice(0,2)),t=rt(e.slice(2,4)),i=rt(e.slice(4,6)),c=e.length===8?rt(e.slice(6,8))/255:1;return[o,t,i,c].some(l=>Number.isNaN(l))?null:{r:o,g:t,b:i,a:G(c,0,1)}},Wa=r=>{const a=Number(r.trim());return Number.isFinite(a)?a:null},ri=r=>{const a=r.trim();if(a.endsWith("%")){const o=Wa(a.slice(0,-1));return o==null?null:G(o/100*255,0,255)}const e=Wa(a);return e==null?null:G(e,0,255)},ot=r=>{const a=r.trim();if(a.endsWith("%")){const o=Wa(a.slice(0,-1));return o==null?null:G(o/100,0,1)}const e=Wa(a);return e==null?null:G(e,0,1)},ai=(r,a)=>{const o=r.trim().toLowerCase().match(a);if(!o)return null;const t=o[1].trim(),[i,c]=t.split("/").map(u=>u.trim()),l=i.includes(",")?i.split(",").map(u=>u.trim()):i.split(/\s+/).filter(Boolean),d=c&&c.length?c:null;return{body:t,channels:l,alphaPart:d}},Ag=r=>{const a=ai(r,/^rgba?\((.*)\)$/);if(!a)return null;const{body:e,channels:o,alphaPart:t}=a;if(o.length!==3)return null;const i=ri(o[0]),c=ri(o[1]),l=ri(o[2]);if(i==null||c==null||l==null)return null;let d=1;if(t){const u=ot(t);if(u==null)return null;d=u}else{const u=e.includes(",")?e.split(",").map(g=>g.trim()):null;if(u&&u.length===4){const g=ot(u[3]);if(g==null)return null;d=g}}return{r:i,g:c,b:l,a:d}},Sg=r=>{const a=ai(r,/^hsla?\((.*)\)$/);if(!a)return null;const{body:e,channels:o,alphaPart:t}=a;if(o.length!==3)return null;const i=p=>Number(p.replace("deg","").trim()),c=p=>{if(!p.endsWith("%"))return null;const v=Wa(p.slice(0,-1));return v==null?null:v/100},l=i(o[0]),d=c(o[1]),u=c(o[2]);if(!Number.isFinite(l)||d==null||u==null)return null;let g=1;if(t){const p=ot(t);if(p==null)return null;g=p}else{const p=e.includes(",")?e.split(",").map(v=>v.trim()):null;if(p&&p.length===4){const v=ot(p[3]);if(v==null)return null;g=v}}return nl({h:l,s:d,l:u,a:g})},zg=r=>{const a=ai(r,/^oklch\((.*)\)$/);if(!a)return null;const{channels:e,alphaPart:o}=a;if(e.length!==3)return null;const t=g=>{const p=g.trim();if(p.endsWith("%")){const m=Wa(p.slice(0,-1));return m!=null?G(m/100,0,1):null}const v=Wa(p);return v!=null?G(v,0,1):null},i=g=>{const p=g.trim();if(p.endsWith("%")){const m=Wa(p.slice(0,-1));return m!=null&&m>=0?m/100*.4:null}const v=Wa(p);return v!=null&&v>=0?v:null},c=t(e[0]),l=i(e[1]),d=Wa(e[2].trim());if(c==null||l==null||d==null||!Number.isFinite(d))return null;let u=1;if(o){const g=ot(o);if(g==null)return null;u=g}return sl({L:c,C:l,h:d,a:u})},_r=r=>{if(!r||typeof r!="string")return null;const a=r.toLowerCase().trim();if(ho.has(a)){const o=ho.get(a);return o?Qc(o):null}let e=null;return a.startsWith("#")?e=ul(a):a.startsWith("rgb")?e=Ag(a):a.startsWith("hsl")?e=Sg(a):a.startsWith("oklch")&&(e=zg(a)),wg(a,e),e?Qc(e):null},hl=r=>{if(!r||typeof r!="string")return!1;const a=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(a)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(a)},gl=r=>{if(!r||typeof r!="object")return!1;const a=r;return typeof a.r=="number"&&typeof a.g=="number"&&typeof a.b=="number"&&typeof a.a=="number"},vl=r=>{if(!r||typeof r!="object")return!1;const a=r;return typeof a.h=="number"&&typeof a.s=="number"&&typeof a.v=="number"&&typeof a.a=="number"},go=r=>String(Math.round(G(r,0,1)*100)),pl=r=>{const a=r.trim();if(!a)return null;if(a.endsWith("%")){const o=Number(a.slice(0,-1).trim());return Number.isFinite(o)?G(o/100,0,1):null}if(a.startsWith(".")||a.includes(".")){const o=Number(a);return Number.isFinite(o)?G(o,0,1):null}const e=Number(a);return Number.isFinite(e)?G(e/100,0,1):null},pn=r=>G(Number(r.toFixed(2)),0,1).toString(),Sa=(r,a=!1)=>{const e=l=>G(Math.round(l),0,255).toString(16).padStart(2,"0"),o=e(r.r),t=e(r.g),i=e(r.b),c=e(G(r.a,0,1)*255);return a?`#${o}${t}${i}${c}`:`#${o}${t}${i}`},ei=r=>{const a=cl(r),e=Math.round(a.h),o=Math.round(a.s*100),t=Math.round(a.l*100);return`hsl(${e} ${o}% ${t}% / ${pn(G(a.a,0,1))})`},Ne=r=>{const a=G(Math.round(r.r),0,255),e=G(Math.round(r.g),0,255),o=G(Math.round(r.b),0,255),t=G(r.a,0,1);return t<1?`rgb(${a} ${e} ${o} / ${pn(t)})`:`rgb(${a} ${e} ${o})`},oi=r=>{const a=il(r),e=Math.round(a.L*1e3)/10,o=Math.round(a.C/.4*1e3)/10,t=Math.round(a.h),i=G(a.a,0,1);return i<1?`oklch(${e}% ${o}% ${t} / ${pn(i)})`:`oklch(${e}% ${o}% ${t})`},fl={auto:r=>r.a<1?Ne(r):Sa({...r,a:1},!1),hex:r=>Sa({...r,a:1},!1),hexa:r=>Sa(r,!0),rgb:r=>Ne(r),hsl:r=>ei(r),oklch:r=>oi(r)},Eg=(r,a)=>(fl[r]??fl.hex)(a),$a=r=>typeof r=="string"?r:r.color,fn=(r,a)=>typeof r!="string"&&r.name?r.name:a??void 0,ml=r=>{const a=$a(r),e=_r(a),o=!!e&&e.a<1&&e.a>.01,t=!!e&&e.a===0;return{cssColor:a,rgba:e,isTranslucent:o,isTransparent:t,opaqueHex:e?Sa({...e,a:1},!1):null}},mn=(r,a)=>{if(vl(r))return r;const e=(gl(r)?r:null)??_r(r)??_r(a)??{r:0,g:0,b:0,a:1};return at(e)},He=(r,a)=>{const e=a?.fallbackHex??"#000000",o=a?.format??"hex",t=mn(r,e),i={h:(t.h%360+360)%360,s:G(t.s,0,1),v:G(t.v,0,1),a:G(t.a,0,1)},c=Oa(i),l={r:Wr(c.r),g:Wr(c.g),b:Wr(c.b),a:i.a},d=Eg(o,l);let u,g,p,v,m;const b=l.a<1?"rgb":"hex",$=l.a<1?Ne(l):Sa({...l,a:1},!1);return{format:o,value:d,alpha:l.a,autoFormat:b,autoValue:$,hsv:i,rgba:l,get hex(){return u??=Sa({...l,a:1},!1)},get hexa(){return g??=Sa(l,!0)},get rgb(){return p??=Ne(l)},get hsl(){return v??=ei(l)},get oklch(){return m??=oi(l)}}},bl=(r,a)=>({...He(r.hsv,{format:a}),name:r.name}),$l=(r,a)=>({color:$a(r),name:fn(r,a)}),yl=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),vo=r=>$a(r).trim().toLowerCase(),bn=(r,a)=>{if(vo(r)===vo(a))return!0;const e=_r($a(r)),o=_r($a(a));return!!e&&!!o&&vn(e,o)},ti=(r,a,e)=>{const o=e?.skipIndex;return r.some((t,i)=>i!==o?bn(t,a):!1)},_g=r=>{let a=null;try{a=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(a==null)return null;const e=window.getComputedStyle(a);return _r(e?.backgroundColor)},ni=(r,a)=>{const e=_r($a(r));if(!e)return a?.useScheme?"auto":"inherit";const{darkColor:o,lightColor:t,contrastBias:i,bgColor:c,bgElement:l}=a??{},d=a?.useScheme?"light":o??"#000000",u=a?.useScheme?"dark":t??"#ffffff",g=G(i??-4,-7,7);let p=e;if(e.a<1){const $=_r(c??""),k=$?null:_g(l);p=dl(e,$??k??{r:255,g:255,b:255,a:1})}const v=ll(p),m=(v+.05)/.05,b=1.05/(v+.05);return m+g>=b?d:u},ci=r=>r==null?null:{comparisonKey:vo(r),selectedRgba:_r($a(r))},xl=(r,a)=>{if(!a)return!1;if(vo(r)===a.comparisonKey)return!0;if(!a.selectedRgba)return!1;const e=_r($a(r));return!!e&&vn(e,a.selectedRgba)},Tg=s`--arc•button•bar`,tt=s`${Tg}•axis`,Ig=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${tt}: row;

    &[is-flipped] {
      ${tt}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${tt}: column;

    &[is-flipped] {
      ${tt}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${tt}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${E}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,$n=({children:r,...a})=>{const{Element:e="menu",orientation:o="horizontal",isFlipped:t=!1,...i}=a;return(0,n.jsx)(e,{...i,"arc-button-bar":o,"is-flipped":t?"":void 0,role:i.role??"group",children:r})};ir("ArcButtonBar",Ig);const jg=({activeColor:r})=>{const[a,e]=(0,h.useState)(r),o=r!=null,t=o?r:a;(0,h.useEffect)(()=>{r!=null&&e(r)},[r]);const i=(0,h.useCallback)(c=>{o||e(c)},[o]);return{isSelectionControlled:o,activeSelectedColor:t,setUncontrolledSelectedColor:e,selectColor:i}},kl=(r,a)=>ti(r,a)?r:[...r,a],wl=(r,a)=>{const e=kl(r.colors??[],a);return e===r.colors?r:{...r,colors:e}},Cl=(r,a)=>{const e=r.colors??[],o=e.filter(t=>!bn(t,a));return o.length===e.length?r:{...r,colors:o}},Al=(r,a,e)=>r.map(o=>o.id===a.id?wl(o,e):o),Sl=(r,a,e)=>r.map(o=>o.id===a.id?Cl(o,e):o),Lg=(r,a,e)=>{if(Array.isArray(r)){if(e===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Al(r,a,e)}return wl(r,a)},Rg=(r,a,e)=>{if(Array.isArray(r)){if(e===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Sl(r,a,e)}return Cl(r,a)},Pg=(r,a,e)=>{const o=r.find(t=>t.id===a);return o?Al(r,o,e):r},Mg=(r,a,e)=>{const o=r.find(t=>t.id===a);return o?Sl(r,o,e):r},Bg=({palette:r,isSelectionControlled:a,onAddColor:e,emitColorChange:o,setLocalColors:t,setUncontrolledSelectedColor:i,initialColorValue:c,shouldOpenPopover:l=!0,notifyAddColorToggle:d,showPopover:u,hidePopover:g})=>{const p=(0,h.useCallback)(()=>c??yl(),[c]),[v,m]=(0,h.useState)(null),[b,$]=(0,h.useState)(p),k=(0,h.useCallback)(()=>{m(null),$(p())},[p]),_=(0,h.useCallback)(T=>{t(C=>kl(C,T))},[t]),y=(0,h.useCallback)((T,C)=>{e?.(r,T,C),o(T),a||i(T)},[o,a,e,r,i]),z=(0,h.useCallback)((T,C)=>{_(T),y(T,C??void 0)},[_,y]),x=(0,h.useCallback)(()=>{if(v!=null)return;const T=p();let C=-1;t(W=>(C=W.length,[...W,T])),m(C),$(T),d?.(!0),l&&u()},[v,p,d,t,l,u]),S=(0,h.useCallback)(T=>{v!=null&&$(T)},[v]),D=(0,h.useCallback)(T=>{T?.preventDefault(),T?.stopPropagation(),v!=null&&t(C=>C.filter((W,H)=>H!==v)),k(),d?.(!1),l&&g()},[v,g,d,k,t,l]),B=(0,h.useCallback)((T,C)=>{const H=(or=>typeof or?.preventDefault=="function")(T)?T:C;if(H?.preventDefault(),H?.stopPropagation(),v==null||b==null){d?.(!1),l&&g();return}const K=(r.colors??[]).map((or,nr)=>nr===v?b:or);t(K),y(b,H??void 0),k(),d?.(!1),l&&g()},[v,b,y,g,d,r.colors,k,t,l]),F=(0,h.useCallback)((T,C)=>{C?.preventDefault(),C?.stopPropagation(),z(T,C??void 0)},[z]);return{draftColorIndex:v,draftColorValue:b,startAddDraft:x,updateDraftColor:S,cancelDraftColor:D,saveDraftColor:B,saveCurrentColor:F}},ya=s`--arc-popover`,po=s`--arc•color•picker`,jr=s`${po}•thumb`,nt=s`${po}•tools`,Ka=s`${po}•dropper`,zl=s`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,El={POPOVER:s`
    /* Inter-Component Communication: ArcPopover */
    ${ya}-width: 14em; /* 224px */
    ${ya}-min-width: 10.5em; /* 140px */
    ${ya}-max-width: 15.75em; /* 252px */
    ${ya}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${ya}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${ya}-padding: 0;

    ${ya}-header-padding: 0.75em 1em;
    ${ya}-header-background: var(--arc-color-bg-mono);
    ${ya}-header-align-items: center;

    ${ya}-body-padding: 0;

    ${ya}-footer-padding: 1em;
    ${ya}-footer-background: var(--arc-color-bg-mono);


    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }

    &:has([arc-color-picker=simple]) {
      ${ya}-width: 12.25em; /* 196px */
    }
  `,PICKER:s`
    ${jr}•shadow: 0 0 0 0.25em var(--arc-color-alpha-white-95), 0 0 0.375em 0.1875em var(--arc-color-alpha-black-30);
    ${jr}•size: 0.625em;
    ${jr}•transition: 200ms ease-out;

    ${po}•padding: 1em;
    &[is-inline] { ${po}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Ka}•align•self: end;
      ${nt}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},Dg=s`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${jr}•transition), top var(${jr}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${jr}•size);
    height: var(${jr}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${jr}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      background var(${jr}•transition),
      left var(${jr}•transition),
      top var(${jr}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,Og=s`

  [arc-color-slider] {
    display: grid;
    gap: 0.375em;

    [arc-label] {
      font-size: 0.75em;
    }

    [arc-color-surface] {
      position: relative;
      display: flex;
      border-radius: var(--arc-border-radius-pill);
      height: 0.875em;
      align-items: center;

      &[arc-color-surface=hue] {
        ${jr}•bg: var(--js•hue);

        background-image:
          linear-gradient(
            to right,
            #f00 0%,
            #ff0 16.66%,
            #0f0 33.33%,
            #0ff 50%,
            #00f 66.66%,
            #f0f 83.33%,
            #f00 100%
          );
      }

      &[arc-color-surface=alpha] {
        ${jr}•bg: var(--js•rgb);
        ${zl}
      }

      &:has(input[type=range]:focus:focus-visible) {
        ::-webkit-slider-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }

        ::-moz-range-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }
      }
    }

    input[type=range] {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      appearance: none;
      outline: none;
      cursor: pointer;
      font: inherit;

      /* Track */
      &::-webkit-slider-runnable-track { display: flex; align-items: center; }
      &::-moz-range-track { display: flex; align-items: center; }

      /* Thumb */
      &::-webkit-slider-thumb {
        appearance: none;
        width: var(${jr}•size);
        height: var(${jr}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${jr}•shadow);
        background: var(${jr}•bg);
      }

      &::-moz-range-thumb {
        appearance: none;
        width: var(${jr}•size);
        height: var(${jr}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${jr}•shadow);
        background: var(${jr}•bg);
      }
    }
  }

`,_l=s`3.75em`,Fg=s`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${_l};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${_l} 1fr;
    }

    [arc-color-input=alpha] {
      --arc-input-text-align: end;
    }

    [arc-color-input=hex] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
    }

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    input[type=number] {
      appearance: textfield;
    }
  }

`,Ng=s`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  [arc-color-tools] {
    display: grid;
    gap: var(${nt}•gap, 0.5em);
    grid-template-columns: var(${nt}•columns, auto 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${nt}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Ka}•align•self, center);
    justify-self: var(${Ka}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Ka}•align•self: end;
    ${Ka}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Ka}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Ka}•justify•self: start;
      ${nt}•columns: 1fr auto;
      ${Ka}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Ka}•column, 2);
      grid-row: var(${Ka}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${Dg}
  ${Og}
  ${Fg}

`,Hg=s`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${El.POPOVER}
  }

  [arc-color-picker] {
    ${El.PICKER}

     [arc-color-picker-section] {
      padding: var(${po}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${Ng}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,ca=s`--arc•color•chip`,Vg=s`
@layer arc-components {

  [arc-color-chip=add-color] {
    ${ca}•radius: var(--arc-border-radius-circle);
    ${ca}•width: var(${f}•24);
    ${ca}•height: var(${f}•24);
  }

  [arc-color-chip=swatch] {
    ${ca}•radius: var(--arc-border-radius-circle);
    ${ca}•width: var(${f}•24);
    ${ca}•height: var(${f}•24);
  }

  [arc-color-chip=color-stop] {
    ${ca}•radius: var(--arc-border-radius-md);
    ${ca}•width: var(${f}•24);
    ${ca}•height: var(${f}•24);
  }

  [arc-color-chip=thumbnail] {
    ${ca}•radius: var(--arc-border-radius-md);
    ${ca}•width: var(${f}•28);
    ${ca}•height: var(${f}•42);
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•color);
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(${ca}•width);
    --arc-button-height: var(${ca}•height);
    --arc-button-border-radius: var(${ca}•radius);
    --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${f}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${zl}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &[is-selected] {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,Tl=(0,h.memo)(({color:r,name:a,kind:e,isDraft:o,isSelected:t,contrastBias:i,contrastBgColor:c,canRemoveColor:l,icon:d,text:u,tooltip:g,onClick:p,style:v,...m})=>{const{cssColor:b,isTranslucent:$,isTransparent:k,opaqueHex:_}=(0,h.useMemo)(()=>ml(r??""),[r]),y=fn(r??"",a),z=u??y??b,x=(0,h.useMemo)(()=>ni(b,{contrastBias:i,bgColor:c}),[b,i,c]),[S,D]=(0,h.useState)(!1),[B,F]=(0,h.useState)(!1),[T,C]=(0,h.useState)(!1),[W,H]=(0,h.useState)(!1),[ar,K]=(0,h.useState)(!1);(0,h.useEffect)(()=>{const j=xr=>{(xr.metaKey||xr.key==="Meta")&&(D(!0),C(!0))},er=xr=>{const Jr=xr.metaKey;D(Jr),C(Jr)},pr=()=>{D(!1),C(!1)};return window.addEventListener("keydown",j),window.addEventListener("keyup",er),window.addEventListener("blur",pr),()=>{window.removeEventListener("keydown",j),window.removeEventListener("keyup",er),window.removeEventListener("blur",pr)}},[]);const nr=e==="swatch"&&!!l&&(W&&S||(S||T)&&B),gr=nr||ar,M=gr?"fa-regular fa-xmark":d??"fa-solid fa-check",O=gr?"Remove color":g??y??(hl(b)?b.toUpperCase():b);(0,h.useEffect)(()=>{nr&&K(!0)},[nr]),(0,h.useEffect)(()=>{!nr&&t&&!o&&K(!1)},[o,nr,t]);const N=(0,h.useCallback)(j=>{const er=nr||j.metaKey?"remove":"select",pr={...He(b,{format:"auto",fallbackHex:b}),name:y};p?.({colorData:pr,action:er,source:e,shouldClosePicker:!1},j)},[nr,p,b,y,e]),L=(0,h.useCallback)(j=>{j.preventDefault(),j.stopPropagation(),N(j)},[N]),Z=(0,h.useCallback)(j=>{j.metaKey&&(j.preventDefault(),j.stopPropagation(),N(j))},[N]),X=(0,h.useCallback)(j=>{const er=j.propertyName??"";!(er==="color"||er.includes("color"))||nr||K(!1)},[nr]),J=(0,h.useCallback)(j=>{j.key!=="Enter"||!nr||(j.preventDefault(),j.stopPropagation(),j.currentTarget.click())},[nr]),dr=(0,h.useMemo)(()=>({...v??{},"--js\u2022hex":k?"transparent":$&&(_??b)||"","--js\u2022color":b,"--js\u2022fg":t&&!o||nr?x:""}),[v,k,$,_,b,t,o,nr,x]);return(0,n.jsx)(kr,{...m,_isCustom:!0,"arc-color-chip":e,layout:"icon",shape:"circle",size:"sm",hierarchy:"secondary",tooltip:O,text:z,icon:M,"is-draft":o?"":void 0,"is-selected":!o&&t?"":void 0,"is-translucent":$?"":void 0,"is-transparent":k?"":void 0,style:dr,onClick:L,onContextMenu:Z,onMouseEnter:j=>{F(!0),C(j.metaKey)},onMouseMove:j=>{C(j.metaKey)},onMouseLeave:()=>{F(!1),C(!1),K(!1)},onFocus:()=>H(!0),onBlur:()=>{H(!1),K(!1)},onKeyDown:J,onTransitionEnd:X})});Tl.displayName="ArcColorSwatch";const ii=Tl;ii.getColorData=He,ir("ArcColorSwatch",Vg);const Ug=s`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${E}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${E}•4);
      font-size: var(${f}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${E}•4);
      max-width: calc((var(${f}•24) + var(${E}•4)) * 7 + var(${E}•24));
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${E}•8);
      padding-top: var(${E}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${E}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${E}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${f}•10);
    }
  }

}
`,yn=({children:r,id:a,heading:e,showHeading:o=!0,colors:t=[],activeColor:i,format:c=$e.format,canAddColor:l=!1,canRemoveColor:d=!1,contrastBgColor:u,addColorFlow:g="standalone",sharedSwatchProps:p,onSwatchClick:v,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:k,..._})=>{const y=g==="embedded",z=Ir(void 0,"add-color-anchor"),x=Ir(void 0,"add-color-popover"),[S,D]=(0,h.useState)(t),[B,F]=(0,h.useState)(!1),{isSelectionControlled:T,activeSelectedColor:C,setUncontrolledSelectedColor:W,selectColor:H}=jg({activeColor:i}),ar=(0,h.useMemo)(()=>ci(C),[C]),K=(0,h.useMemo)(()=>S.map(Q=>({normalized:vo(Q),rgba:_r($a(Q))})),[S]),or=(0,h.useMemo)(()=>K.map(Q=>ar?Q.normalized===ar.comparisonKey?!0:!!ar.selectedRgba&&!!Q.rgba&&vn(Q.rgba,ar.selectedRgba):!1),[K,ar]),nr=(0,h.useMemo)(()=>or.some(Boolean),[or]),gr=!y&&nr?void 0:C;(0,h.useEffect)(()=>{D(t)},[t]);const M=(0,h.useCallback)(Q=>{if(typeof Q=="object"&&Q!==null&&"hsv"in Q){$?.(Q);return}const Sr=$a(Q),Qr=fn(Q),ra=He(Sr,{format:c});$?.({...ra,name:Qr})},[$,c]),O=(0,h.useCallback)(Q=>{F(Q),k?.(a,Q)},[a,k]),N=(0,h.useCallback)(()=>te?.handlePopover?.(x,"show"),[x]),L=(0,h.useCallback)(()=>te?.handlePopover?.(x,"hide"),[x]),Z=(0,h.useMemo)(()=>({id:a,heading:e,showHeading:o,colors:S,activeColor:i,format:c,canAddColor:l,canRemoveColor:d,contrastBgColor:u,addColorFlow:g,sharedSwatchProps:p,onSwatchClick:v,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:k}),[a,e,o,S,i,c,l,d,u,g,p,v,m,b,$,k]),{draftColorIndex:X,draftColorValue:J,startAddDraft:dr,updateDraftColor:j,cancelDraftColor:er,saveDraftColor:pr,saveCurrentColor:xr}=Bg({palette:Z,isSelectionControlled:T,onAddColor:m,emitColorChange:M,setLocalColors:D,setUncontrolledSelectedColor:W,initialColorValue:gr,shouldOpenPopover:!y,notifyAddColorToggle:O,showPopover:N,hidePopover:L}),Jr=(0,h.useMemo)(()=>S.map((Q,Sr)=>X===Sr&&J!=null?J:Q),[X,J,S]),ga=(0,h.useMemo)(()=>{if(X==null||J==null||ar==null||X<0||X>=or.length)return or;const Q=[...or];return Q[X]=xl(J,ar),Q},[or,X,J,ar]),xa=(0,h.useMemo)(()=>ci(J),[J]),V=(0,h.useMemo)(()=>X==null||xa==null?!1:ti(S,J,{skipIndex:X}),[X,xa,J,S]),Lr=(0,h.useCallback)((Q,Sr)=>{if(!Q?.colorData)return;const Qr={color:Q.colorData.value,name:Q.colorData.name};if(Q.action==="remove"&&d){D(ra=>{const Qa=ra.filter(wo=>!bn(wo,Qr));return Qa.length===ra.length?ra:Qa}),b?.(Z,Qr,Sr);return}H(Qr),v?.({...Q,source:"swatch",shouldClosePicker:!1},Sr),M(Q.colorData)},[d,M,b,v,Z,H]),hr=(0,h.useCallback)(Q=>X===Q&&J!=null,[X,J]);(0,h.useEffect)(()=>{!y||X==null||C==null||j(C)},[C,X,y,j]);const Mr=(0,h.useCallback)(Q=>{const Sr=Q?.newState==="open";F(Sr),k?.(a,Sr)},[a,k]),Ta=(0,h.useCallback)(Q=>{const Sr=C??$e.color;xr(Sr,Q)},[C,xr]),Ce=(0,h.useCallback)(Q=>{Q.key!=="Escape"||!B||er(Q)},[er,B]),ue=!C||y&&!B&&nr,ko=y&&B?"Cancel":y?"Add Current Color":"Add Color",Ge=y||!B;let Ja=Ta;return y||(Ja=B?er:dr),(0,n.jsxs)("div",{..._,"arc-color-palette":a,"is-adding-color":B?"":void 0,children:[o&&e&&(0,n.jsx)("header",{"arc-color-palette-header":"",children:typeof e=="string"?(0,n.jsx)("strong",{children:e}):(0,n.jsx)(Yr,{...e,layout:"inline",isStrong:!0})}),(0,n.jsxs)("div",{"arc-color-palette-set":"",id:z,children:[Jr?.map((Q,Sr)=>(0,h.createElement)(ii,{...p,key:`${$a(Q)}-${Sr}`,color:Q,kind:"swatch",isDraft:hr(Sr),isSelected:ga[Sr],canRemoveColor:d&&!(y&&hr(Sr)),contrastBgColor:u,tooltip:y&&hr(Sr)?"Save Color":void 0,onClick:y&&hr(Sr)?pr:Lr})),l&&Ge&&(0,n.jsx)(kr,{"arc-add-color":"",popoverTarget:x,icon:"fa-regular fa-plus",layout:"icon",shape:"circle",size:"sm",hierarchy:"secondary",tooltip:ko,onClick:Ja,isDisabled:ue})]}),l&&!y&&(0,n.jsx)(Ve,{mode:"add",heading:"",color:J??$e.color,format:c,onChange:Q=>j(Q.value),popoverProps:{id:x,popover:"manual",anchorAt:"right-center",alternateAnchorId:z,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Mr,onKeyDown:Ce,footerSlot:(0,n.jsxs)($n,{"arc-color-picker-button-bar":"",children:[(0,n.jsx)(kr,{"arc-color-picker-button":"cancel",text:"Cancel",hierarchy:"secondary",size:"sm",onClick:er}),(0,n.jsx)(kr,{"arc-color-picker-button":"save",text:"Save",size:"sm",onClick:pr,isDisabled:V})]})}}),r&&(0,n.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};yn.addColor=Lg,yn.removeColor=Rg,ir("ArcColorPalette",Ug);const Wg=(0,h.memo)(function({palette:a,canAddColor:e,canRemoveColor:o,activePaletteColor:t,contrastBgColor:i,onSwatchClick:c,onAddColor:l,onRemoveColor:d}){const u=(0,h.useCallback)((g,p)=>{c(g,p,a.id)},[a.id,c]);return(0,n.jsx)(yn,{...a,canAddColor:e??a.canAddColor,canRemoveColor:o,addColorFlow:"embedded",activeColor:t,contrastBgColor:i,onAddColor:l,onRemoveColor:d,onSwatchClick:u})}),Il=({palettes:r=[],canAddColor:a,canRemoveColor:e,activePaletteColor:o,contrastBgColor:t,selectedNameRef:i,hsvRef:c,popoverId:l,onAddColor:d,onRemoveColor:u,commitLocalHsv:g,...p})=>{const v=(0,h.useRef)(r);v.current=r;const m=(0,h.useCallback)(($,k,_)=>{const y=v.current.find(x=>x.id===_);if(!y)return;if(k?.preventDefault(),k?.stopPropagation(),$?.action==="remove"&&(e??y.canRemoveColor)){y.onSwatchClick?.($,k);return}$?.colorData&&(i.current=$.colorData.name,g($.colorData.hsv));try{y.onSwatchClick?.($,k)}catch{}if(($?.shouldClosePicker??!0)&&l)try{te.handlePopover(l,"hide")}catch{}},[e,g,l,i]),b=(0,h.useCallback)(($,k,_)=>{d?.($,k,_)},[d]);return r.length?(0,n.jsx)("div",{...p,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map($=>(0,n.jsx)(Wg,{palette:$,canAddColor:a,canRemoveColor:!!(e??$.canRemoveColor),activePaletteColor:o,contrastBgColor:t,onSwatchClick:m,onAddColor:b,onRemoveColor:u},$.id))}):null},jl=1,Ll="Please enter six hex digits \u2192 A1B2C3",Kg="Use six hex digits (RGB only). Opacity is not editable in this picker.",Gg=/^[0-9A-Fa-f]{3}$/,Yg=/^[0-9A-Fa-f]{4}$/,qg="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Zg="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",Xg=0,Jg=255,be=r=>r.replace(/#/g,"").trim(),Rl=r=>r.length===3?`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`:r,ct=r=>Sa({...r,a:1},!1).replace(/^#/,""),Qg=r=>Math.min(Jg,Math.max(Xg,Math.round(r))),Pl=r=>{if(Gg.test(r))return{kind:"three",expanded:Rl(r)};if(Yg.test(r)){const a=_r(`#${r}`);if(a)return{kind:"four",shorthand:r,expanded:ct(a),alphaPercent:Math.round(a.a*100)}}return null},rv=r=>r?.kind==="three"?`Please enter six hex digits \u2192 ${r.expanded.toUpperCase()}.`:r?.kind==="four"?`Change to \u2192 #${r.expanded.toUpperCase()} at ${r.alphaPercent}% opacity?`:Ll,av=(r,a,e)=>{const o=be(r),t=Pl(o),i=o.length>0&&(!e&&o.length===8||!a&&o.length!==6&&o.length!==8||_r(`#${o}`)===null),l=!a&&o.length>0&&o.length!==6&&o.length!==8||!e&&o.length===8?rv(t):Ll,d=!e&&o.length===8?Kg:l;let u="Apply expanded six-digit hex";return t?.kind==="four"?u=`Apply #${t.expanded.toUpperCase()} and ${t.alphaPercent}% opacity`:t?.kind==="three"&&(u=`Apply expanded hex ${t.expanded.toUpperCase()}`),{isInvalid:i,errorAid:{tooltip:d,ariaLabel:u,fix:t}}},Ml=(r,a,e)=>{const o=_r(`#${r}`);o&&(a(r,{applyHexAlpha:!0}),e(ct(o)))},ev=(r,a,e,o)=>{if(a){Ml(r,e,o);return}const t=_r(`#${r}`);if(t){const i=ct(t);o(i),e(i)}},ov=(r,a,e,o)=>{if(a)Ml(r,e,o);else{const t=r.slice(0,6);o(t),e(t)}},tv=(r,a,e,o)=>{r.kind==="three"?(e(r.expanded),a(r.expanded)):o?(a(r.shorthand,{applyHexAlpha:!0}),e(r.expanded)):(e(r.expanded),a(r.expanded))},nv=r=>{const a=be(r);return a.length>6?a.slice(0,6):r},cv=(r,a,e,o,t)=>{const i=_r(`#${r}`)??a,c={...i,[e]:Qg(i[e]+o*t)};return ct(c)},iv=(r,a,e,o)=>{if(!e&&(r.length===8||o?.applyHexAlpha===!0))return!1;if(!a&&r.length>0){const t=r.length===6||r.length===8,i=o?.applyHexAlpha===!0&&r.length===4;if(!t&&!i)return!1}return!0},sv=(r,a,e)=>{const o=_r(`#${r}`);return o?e?.applyHexAlpha===!0&&(r.length===4||r.length===8)?o:{...o,a:a.a}:null},fo=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),lv=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),si=({children:r,...a})=>(0,n.jsx)(n.Fragment,{children:!!r&&(0,n.jsx)(me,{...a,children:(0,n.jsx)(Oe,{children:r})})}),dv=({children:r,layout:a,size:e,variant:o,tag:t="span",...i})=>(0,n.jsx)(t,{...i,"data-layout":a,"data-size":e,"data-variant":o,children:r}),uv=()=>(0,n.jsx)("span",{"input-element":"spacer"}),hv=r=>(0,n.jsx)(fo,{...r,"input-element":"header"}),gv=r=>(0,n.jsx)(si,{...r,"input-element":"header-label"}),vv=r=>(0,n.jsx)(fo,{...r,"input-element":"header-slot"}),pv=r=>(0,n.jsx)(fo,{...r,"input-element":"body"}),fv=r=>(0,n.jsx)(si,{...r,"input-element":"input-prefix"}),mv=r=>(0,n.jsx)(si,{...r,"input-element":"input-suffix"}),bv=r=>(0,n.jsx)(lv,{...r,"input-element":"input-action"}),$v=r=>(0,n.jsx)(fo,{...r,"input-element":"footer"}),yv=r=>(0,n.jsx)(fo,{...r,"input-element":"footer-caption"}),xv=r=>(0,n.jsx)(fo,{...r,"input-element":"footer-slot"}),kv=r=>a=>{if(!(a?.target instanceof HTMLInputElement))return;const e={name:a?.target?.name,value:a?.target?.value};r?.(e,a)},br=s`--arc•input`,ie=s`${br}•fg`,xn=s`${ie}•disabled`,kn=s`${ie}•readonly`,wn=s`${ie}•invalid`,za=s`${br}•bg`,Cn=s`${za}•hover`,An=s`${za}•disabled`,Sn=s`${za}•readonly`,zn=s`${za}•invalid`,wv=s`${br}•align`,Bl=s`${wv}•items`,Cv=s`${br}•flex`,Av=s`${Cv}•direction`,Dl=s`${br}•header`,En=s`${Dl}•label•color`,Ol=s`${Dl}•slot•color`,Fl=s`${br}•footer`,li=s`${Fl}•caption•color`,Nl=s`${Fl}•slot•color`,di=s`${br}•border`,ui=s`${di}•radius`,Sv=s`${di}•width`,Ea=s`${di}•color`,hi=s`${br}•outline`,Hl=s`${hi}•size`,Vl=s`${hi}•offset`,Ul=s`${hi}•color`,it=s`${br}•height`,zv=s`${br}•padding`,_n=s`${zv}•inline`,gi=s`${_n}•end`,Wl=s`${br}•slot`,vi=s`${Wl}•gap`,pi=s`${Wl}•font•size`,Tn=s`${Ea}•hover`,In=s`${Ea}•disabled`,fi=s`${Ea}•readonly`,st=s`${Ea}•invalid`,Ev=s`${br}•action•max•height`,Kl=s`${br}•gap`,mi=s`${br}•font•size`,_v=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${it}: var(${f}•48);
    ${gi}: var(${E}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${it}: var(${f}•40);
  }

  &[data-size=md] {
    ${it}: var(${f}•32);
    ${ui}: var(${f}•4);
    ${Ev}: 80%;
  }

  &:has(select) {
    ${_n}: 0;
    ${Bl}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${mi}: var(${f}•14);
    ${pi}: var(${f}•12);

    ${it}: var(${f}•40); /* default size */
    ${Kl}: var(${E}•6);
    ${vi}: var(${E}•4);
    ${_n}: var(${E}•12);
    ${gi}: var(${E}•3);
    ${ui}: var(${f}•8);
    ${Sv}: var(${f}•1);
    ${Hl}: var(${f}•2);
    ${Vl}: var(${f}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${br}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${mi}: 0.875em; /* 14px at 100% */
      ${pi}: 0.75em; /* 12px at 100% */
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
    ${ie}: var(--arc-color-fg-primary);
    ${En}: inherit;
    ${Ol}: var(--arc-color-fg-secondary);
    ${li}: var(--arc-color-fg-secondary);
    ${Nl}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${za}: var(--arc-color-bg-primary);
      ${Cn}: var(--arc-color-bg-primary);
      ${Ea}: var(--arc-color-border-mid);
      ${Tn}: var(--arc-color-border-heavy);

      ${xn}: var(--arc-color-fg-disabled);
      ${An}: var(--arc-color-bg-secondary);
      ${In}: var(--arc-color-border-mid);

      ${kn}: var(--arc-color-fg-primary);
      ${Sn}: var(--arc-color-bg-disabled);
      ${fi}: var(--arc-color-border-mid);

      ${wn}: var(--arc-color-fg-critical-mid);
      ${zn}: var(--arc-color-bg-primary);
      ${st}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${za}: var(--arc-color-bg-secondary);
      ${Cn}: var(--arc-color-bg-hover-default);
      ${Ea}: transparent;
      ${Tn}: var(--arc-color-border-stark);

      ${wn}: var(--arc-color-fg-critical-mid);
      ${zn}: var(--arc-color-bg-critical-muted);
      ${st}: transparent;

      ${xn}: var(--arc-color-fg-disabled);
      ${An}: var(--arc-color-bg-disabled);
      ${In}: transparent;

      ${kn}: var(--arc-color-fg-primary);
      ${Sn}: var(--arc-color-bg-disabled);
      ${st}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${za}: transparent;
      ${Cn}: var(--arc-color-bg-hover-default);
      ${Ea}: transparent;
      ${Tn}: transparent;

      ${wn}: var(--arc-color-fg-critical-mid);
      ${zn}: transparent;
      ${st}: var(--arc-color-fg-critical-mid);

      ${xn}: var(--arc-color-fg-disabled);
      ${An}: transparent;
      ${In}: transparent;

      ${kn}: var(--arc-color-fg-primary);
      ${Sn}: var(--arc-color-bg-disabled);
      ${fi}: transparent;
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
      ${br}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${Ea}: var(--arc-input-border-color-hover, var(${Tn}));
      ${za}: var(--arc-input-background-hover, var(${Cn}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${Ul}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${br}•cursor: default;
    ${ie}: var(${kn});
    ${za}: var(${Sn});
    ${Ea}: var(${fi});
  }

  &:has(input:disabled, select:disabled) {
    ${br}•cursor: not-allowed;
    ${ie}: var(${xn});
    ${za}: var(${An});
    ${Ea}: var(${In});
    ${En}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${za}: var(${zn});
    ${En}: var(${ie});
    ${Ea}: var(${st});
    ${li}: var(${wn});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${br}•display: flex;
  }

  &[data-layout=hug] {
    ${br}•display: inline-flex;
  }

  & {
    ${br}•border: var(--arc-border-width-sm) solid var(${Ea});
    ${br}•outline: var(${Hl}) solid var(${Ul}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${br}•display, flex);
  flex-direction: var(${Av}, column);
  gap: var(${vi});
  color: var(--arc-input-color, var(${ie}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${pi}));
    gap: var(${vi});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${En}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Ol}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${li}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Nl}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${Bl}, center);
    gap: var(--arc-input-gap, var(${Kl}));
    height: var(${it});
    font-size: var(${mi});

    color: var(--arc-input-color, var(${ie}));
    background-color: var(--arc-input-background, var(${za}));
    border: var(--arc-input-border, var(${br}•border));
    border-radius: var(--arc-input-border-radius, var(${ui}));
    outline: var(${br}•outline, none);
    outline-offset: var(${Vl});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${br}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${_n}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${gi});
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
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
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
      max-height: var(${br}•action•max•height, unset);
    }
  }
}

}
`,Tv={onChangeHandler:kv,Wrapper:dv,Spacer:uv,Header:hv,HeaderLabel:gv,HeaderSlot:vv,InputBody:pv,InputPrefix:fv,InputSuffix:mv,InputAction:bv,Footer:$v,FooterCaption:yv,FooterSlot:xv};ir("ArcInput",_v);const Ar=Tv,Iv="[input-element=body]",jv=100;function Lv({inputRef:r,onChange:a,enabled:e,deltaPerStep:o=jv}){const t=(0,h.useRef)(a);t.current=a,(0,h.useEffect)(()=>{if(!e||o<=0)return;let i=0;const c=()=>r.current,l=()=>{const b=c()?.closest(Iv);return b instanceof HTMLElement?b:null},d=(m,b)=>{const $=t.current;if(!$)return;const k={name:m.name,value:b};$(k,{target:m,currentTarget:m})},u=()=>{i=0},g=m=>{const b=c();if(!b||document.activeElement!==b||b.type!=="number"||b.disabled||b.readOnly)return;m.preventDefault(),m.stopPropagation();const $=Number(b.step)||1,k=Number(b.min),_=Number(b.max),y=Number.isFinite(k)?k:void 0,z=Number.isFinite(_)?_:void 0;let x=Number(b.value);if(!Number.isFinite(x))return;i+=m.deltaY;const S=o,D=()=>{const T=Math.max(y??-1/0,x-$);return T===x?!1:(x=T,d(b,String(T)),!0)},B=()=>{const T=Math.min(z??1/0,x+$);return T===x?!1:(x=T,d(b,String(T)),!0)};for(;i>=S;){if(!D()){i=0;break}i-=S}for(;i<=-S;){if(!B()){i=0;break}i+=S}},p=l(),v=c();if(!(!p||!v||v.type!=="number"))return v.addEventListener("blur",u),p.addEventListener("wheel",g,{passive:!1}),()=>{v.removeEventListener("blur",u),p.removeEventListener("wheel",g)}},[e,o,r])}const bi=q(Ia,["fill","hug"]),$i=q(aa,["inherit","xl","lg","md"]),Gl=q(zr,["outline","solid","plain"]),Rv=bi,Pv=$i,Mv=q(Gl,["outline","solid"]),Bv=["text","number","password","email","url"],jn=(0,h.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",inputProps:o,headerLabel:t,headerSlot:i,inputPrefix:c,inputAction:l,inputSuffix:d,footerCaption:u,footerSlot:g,numberInputWheel:p,...v},m)=>{const{id:b,onChange:$,...k}=o,_="arc-search"in v,y=_?"search":k?.type||"text",z=k?.disabled||void 0,x=k?.readOnly||void 0,S=k?.required||void 0,D=!!(t||i),B=!!(u||g),F=(0,h.useRef)(null),T=(0,h.useCallback)(C=>{F.current=C,La(m,C)},[m]);return Lv({inputRef:F,onChange:$,enabled:y==="number"&&p!==!1,...typeof p=="object"&&typeof p.deltaPerStep=="number"&&{deltaPerStep:p.deltaPerStep}}),(0,n.jsxs)(Ar.Wrapper,{...v,"arc-text-input":"","arc-input":y,layout:r,size:a,variant:e,children:[D&&(0,n.jsxs)(Ar.Header,{children:[(0,n.jsx)(Ar.HeaderLabel,{htmlFor:b,children:t}),!!i&&(0,n.jsx)(Ar.Spacer,{}),(0,n.jsx)(Ar.HeaderSlot,{children:i})]}),(0,n.jsxs)(Ar.InputBody,{children:[(0,n.jsx)(Ar.InputPrefix,{htmlFor:b,children:c}),(0,n.jsx)("input",{...k,..._?{type:y}:{},ref:T,id:b,"arc-input-type":y,onChange:Ar.onChangeHandler($),"aria-disabled":z,"aria-readonly":x,"aria-required":S}),(0,n.jsx)(Ar.InputSuffix,{htmlFor:b,children:d}),(0,n.jsx)(Ar.InputAction,{children:l})]}),B&&(0,n.jsxs)(Ar.Footer,{children:[(0,n.jsx)(Ar.FooterCaption,{children:u}),!!g&&(0,n.jsx)(Ar.Spacer,{}),(0,n.jsx)(Ar.FooterSlot,{children:g})]})]})}),Yl=({commitDraft:r,setIsEditing:a,onRevert:e})=>{const o=(0,h.useCallback)(()=>{a(!0)},[a]),t=(0,h.useCallback)(()=>{a(!1),r()},[a,r]),i=(0,h.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),a(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),a(!1),e(),c.currentTarget.blur())},[a,r,e]);return{onFocus:o,onBlur:t,onKeyDown:i}},ql=({hsv:r,draftValue:a,label:e="Hex",showLabel:o=!0,setIsEditing:t,commitDraft:i,setDraftValue:c,expandHexShorthand:l=!1,hasAlphaTools:d=!0})=>{const u=Ir(void 0,"hex-input"),g=(0,h.useRef)(null),p=ct(Oa(r)),[v,m]=(0,h.useState)(!1),{isInvalid:b,errorAid:$}=(0,h.useMemo)(()=>av(a,l,d),[a,l,d]),{onFocus:k,onBlur:_,onKeyDown:y}=Yl({commitDraft:i,setIsEditing:t,onRevert:()=>c(p)}),z=(0,h.useCallback)(()=>{m(!0);const C=be(a);if(C.length===8){ov(C,d,i,c),_();return}if(l&&C.length===3){const W=Rl(C);c(W),i(W),t(!1),_();return}l&&C.length===4&&ev(C,d,i,c),_()},[a,l,d,c,i,t,_]),x=(0,h.useCallback)(C=>{if(C.key!=="ArrowUp"&&C.key!=="ArrowDown")return;const W=C.key==="ArrowUp"?jl:-jl,H=C.altKey?"r":C.metaKey?"g":"b",ar=C.shiftKey?16:1,K=cv(be(a),Oa(r),H,W,ar);c(K),i(K),C.preventDefault()},[a,r,c,i]),S=(0,h.useCallback)(C=>{if(x(C),!C.defaultPrevented){if(C.key==="Enter"){C.preventDefault(),t(!1),C.currentTarget.blur();return}C.key==="Escape"&&y(C)}},[x,t,y]),D=({value:C})=>{const W=C??"",H=d?W:nv(W);c(H),i(H)},B=b&&v,F=B?$.tooltip:void 0,T=(0,h.useCallback)(()=>{const C=Pl(be(a));C&&tv(C,i,c,d),queueMicrotask(()=>{g.current?.focus()})},[a,i,c,d]);return(0,n.jsx)(jn,{ref:g,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:o?e:void 0,inputPrefix:"#",inputAction:B?(0,n.jsx)(kr,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:$.tooltip,"aria-label":$.ariaLabel,onClick:T}):void 0,inputProps:{id:u,placeholder:"...",value:a,pattern:d?qg:Zg,maxLength:d?8:6,title:F,"aria-invalid":B?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:k,onBlur:z,onKeyDown:S,onChange:D}})},yi=typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",Zl=yi?window.EyeDropper:void 0,Xl=Zl?new Zl:void 0,Jl=({onColorPicked:r,...a})=>{const[e,o]=(0,h.useState)(!1),t=async()=>{if(!(!yi||!Xl||e)){o(!0);try{const{sRGBHex:i}=await Xl.open();if(typeof r=="function"){const c=Oa(mn(i,"#000000"));r(Sa({...c,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(i){i instanceof DOMException&&i.name==="AbortError"||console.error("EyeDropper failed:",i)}finally{o(!1)}}};return yi?(0,n.jsx)("div",{"arc-color-eye-dropper":"",children:(0,n.jsx)(kr,{...a,onClick:t,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:"Dropper",tooltip:"Pick a color"})}):null},xi=({id:r,kind:a,label:e,value:o,max:t,min:i=0,step:c=1,isDisabled:l=!1,showLabel:d=!1,showTooltip:u=!1,tooltipText:g,onChange:p})=>{const v=Ir(void 0,r),m=t>1&&Number.isInteger(c)&&c>=1?Math.round(o):o,b=G(m,i,t),$=b.toFixed(c.toString().split(".")[1]?.length??0),k=(0,h.useRef)(null),_=t-i,z=`${(_<=0?0:(b-i)/_)*100}%`,x=D=>{const B=D.currentTarget.valueAsNumber,F=Number.isFinite(B)?B:i;p(G(F,i,t))},S=(0,n.jsx)("input",{id:v,type:"range",min:i,max:t,step:c,value:$,disabled:l??void 0,onChange:x,"aria-label":e});return(0,n.jsxs)("div",{"arc-color-slider":a,"data-disabled":l??void 0,children:[d&&!!e&&(0,n.jsx)(me,{htmlFor:v,children:(0,n.jsx)("strong",{children:e})}),(0,n.jsx)("div",{"arc-color-surface":a,children:u?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{ref:k,"aria-hidden":!0,style:{position:"absolute",left:z,top:"50%",transform:"translate(-50%, -50%)",width:1,height:1,pointerEvents:"none"}}),(0,n.jsx)(Jt,{alternateAnchor:k,text:g??$,scheme:"light",isStrong:!1,hasTail:!1,offset:11,children:S})]}):S})]})},Dv=196.6,Ov=(r,a)=>{const e=r.getContext("2d",{alpha:!1});if(!e)return;const{width:o,height:t}=r;if(!o||!t)return;const i=e.createImageData(o,t),c=i.data;let l=0;for(let d=0;d<t;d+=1){const u=1-(t<=1?0:d/(t-1));for(let g=0;g<o;g+=1){const p=o<=1?0:g/(o-1),v=Oa({h:a,s:p,v:u,a:1});c[l++]=Wr(v.r),c[l++]=Wr(v.g),c[l++]=Wr(v.b),c[l++]=255}}e.putImageData(i,0,0)},Fv=({value:r,label:a="Color Saturation and Value",step:e=.01,stepLarge:o=.1,isDisabled:t=!1,showLabel:i=!1,onChange:c})=>{const l=Ir(void 0,"color-field"),d=(0,h.useRef)(null),u=(0,h.useRef)(null),g=(0,h.useRef)(null),p=(0,h.useRef)(null),v=(0,h.useRef)(null),m=(0,h.useRef)(null),b=(0,h.useRef)(null),[$,k]=(0,h.useState)(!1),[_,y]=(0,h.useState)(null),z=G(r.saturation,0,1),x=G(r.value,0,1),S=Math.round(z*100),D=Math.round(x*100),B=(0,h.useMemo)(()=>{const M=r.hue;return typeof M=="number"&&Number.isFinite(M)?M:Dv},[r.hue]),F=(0,h.useMemo)(()=>ol(B),[B]),T=(0,h.useCallback)((M,O)=>{c({hue:B,saturation:G(M,0,1),value:G(O,0,1)})},[B,c]),C=(0,h.useCallback)((M,O,N)=>{const L=G((M-N.left)/N.width,0,1),Z=G((O-N.top)/N.height,0,1);T(L,1-Z)},[T]),W=(0,h.useCallback)(M=>{if(t)return;const{clientX:O,clientY:N,pointerId:L,currentTarget:Z}=M,X=Z.getBoundingClientRect();p.current=L,g.current=X,v.current={clientX:O,clientY:N},m.current=null,b.current=null,Z.focus(),Z.setPointerCapture(L),k(!0),C(O,N,X)},[t,C]),H=(0,h.useCallback)(M=>{if(t)return;const{clientX:O,clientY:N,currentTarget:L,pointerId:Z}=M;if(p.current!==Z)return;const X=g.current??L.getBoundingClientRect();if(M.shiftKey){const J=v.current;if(J){if(m.current===null){const pr=Math.abs(O-J.clientX),xr=Math.abs(N-J.clientY);m.current=pr>=xr?"s":"v",b.current={clientX:O,clientY:N}}const dr=b.current??J,j=m.current==="s"?O:dr.clientX,er=m.current==="v"?N:dr.clientY;C(j,er,X);return}}else m.current=null,b.current=null;C(O,N,X)},[t,C]),ar=(0,h.useCallback)(()=>{p.current=null,g.current=null,v.current=null,m.current=null,b.current=null,k(!1)},[]),K=(0,h.useCallback)(M=>{if(t)return;const O=M.shiftKey?o:e;let N=z,L=x;switch(M.key){case"ArrowLeft":N=z-O;break;case"ArrowRight":N=z+O;break;case"ArrowUp":L=x+O;break;case"ArrowDown":L=x-O;break;case"Home":N=0,L=1;break;case"End":N=1,L=0;break;default:return}M.preventDefault(),T(N,L)},[t,e,o,T,z,x]),or=(0,h.useCallback)(M=>{if(t||!M.key.startsWith("Arrow"))return;const O=M.shiftKey?o:e,N=M.key==="ArrowLeft"||M.key==="ArrowDown"?-O:O;M.preventDefault(),T(z+N,x)},[t,e,o,T,z,x]),nr=(0,h.useCallback)(M=>{if(t||!M.key.startsWith("Arrow"))return;const O=M.shiftKey?o:e,N=M.key==="ArrowLeft"||M.key==="ArrowDown"?-O:O;M.preventDefault(),T(z,x+N)},[t,e,o,T,z,x]),gr=(0,h.useMemo)(()=>({"--js\u2022s":String(z),"--js\u2022v":String(1-x)}),[z,x]);return(0,h.useLayoutEffect)(()=>{const M=d.current,O=u.current;if(!M||!O)return;const N=()=>{const X=M.getBoundingClientRect(),J=Math.max(1,Math.round(X.width)),dr=Math.max(1,Math.round(X.height)),j=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),er=Math.max(1,Math.round(J*j)),pr=Math.max(1,Math.round(dr*j));O.width!==er&&(O.width=er),O.height!==pr&&(O.height=pr),Ov(O,F)};N();const L=new ResizeObserver(()=>{N()});L.observe(M);const Z=()=>{N()};return O.addEventListener("contextrestored",Z),()=>{L.disconnect(),O.removeEventListener("contextrestored",Z)}},[F]),(0,n.jsxs)("div",{"arc-color-field":"","is-disabled":t?"":void 0,"is-interacting":$?"":void 0,"sr-focus":_??void 0,children:[i&&!!a&&(0,n.jsx)("label",{htmlFor:l,children:a}),(0,n.jsxs)("div",{id:l,ref:d,"arc-color-surface":"field",style:gr,tabIndex:t?-1:0,role:"application","aria-label":a,"aria-describedby":`${l}-readout`,onPointerDown:W,onPointerMove:H,onPointerUp:ar,onPointerCancel:ar,onKeyDown:K,children:[(0,n.jsx)("canvas",{ref:u,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,n.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,n.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":_==="saturation"?"":void 0,"aria-hidden":"true"}),(0,n.jsx)("div",{"arc-color-field-slice":"value","has-focus":_==="value"?"":void 0,"aria-hidden":"true"})]}),(0,n.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,n.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:t?-1:0,"aria-label":"Saturation","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":S,onKeyDown:or,onFocus:()=>y("saturation"),onBlur:()=>y(null)}),(0,n.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:t?-1:0,"aria-label":"Value","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":D,onKeyDown:nr,onFocus:()=>y("value"),onBlur:()=>y(null)})]}),(0,n.jsxs)("div",{id:`${l}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:["Saturation ",S,"%. Value ",D,"%."]})]})},Nv=({hsv:r,draftValue:a,label:e="Opacity",showLabel:o=!1,setIsEditing:t,commitDraft:i,setDraftValue:c})=>{const l=Ir(void 0,"alpha-input"),{onFocus:d,onBlur:u,onKeyDown:g}=Yl({commitDraft:i,setIsEditing:t,onRevert:()=>c(go(r.a))}),p=({value:v})=>{const m=String(v??1);c(m),i(m)};return(0,n.jsx)(jn,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:o?e:void 0,numberInputWheel:{deltaPerStep:24},inputProps:{id:l,"aria-label":e,placeholder:"...",value:a,type:"number",min:0,max:100,step:1,onFocus:d,onBlur:u,onKeyDown:g,onChange:p}})},Ql=r=>Sa({...r,a:1},!1).replace(/^#/,""),Hv=()=>typeof window<"u"&&"EyeDropper"in window,rd=({color:r,hsv:a,isSimpleMode:e,selectedNameRef:o,hsvRef:t,commitLocalHsv:i,tools:c,expandHexShorthand:l,...d})=>{const u=(0,h.useRef)(!1),[g,p]=(0,h.useState)(()=>{const L=_r($a(r));return L?Ql(L):"000000"}),[v,m]=(0,h.useState)(go(a.a)),[b,$]=(0,h.useState)(!1),k=(0,h.useCallback)(L=>{o.current=void 0;const X={...t.current,...L};i(X)},[i,t,o]),_=(0,h.useCallback)(L=>k({s:L.saturation,v:L.value}),[k]),y=L=>{const Z=mn(L,"#000000");i(Z)},z=(0,h.useMemo)(()=>!c||c.includes("color-field"),[c]),x=(0,h.useMemo)(()=>!c||c.includes("hue-slider"),[c]),S=(0,h.useMemo)(()=>!c||c.includes("alpha-slider"),[c]),D=(0,h.useMemo)(()=>!c||c.includes("hex-input"),[c]),B=(0,h.useMemo)(()=>!c||c.includes("alpha-input"),[c]),F=(0,h.useMemo)(()=>!c||c.includes("eye-dropper")&&Hv(),[c]),T=(0,h.useMemo)(()=>S||B,[S,B]),C=(L,Z)=>{o.current=void 0;const X=be(L??g);if(!iv(X,l??!1,T,Z))return;const J=Oa(t.current),dr=sv(X,J,Z);if(!dr||Zc(dr,J))return;const j=at(dr,t.current.h);i(j)},W=L=>{o.current=void 0;const Z=pl(L??v);Z!=null&&(k({a:Z}),m(go(Z)))},H=(0,h.useCallback)(L=>{p(be(L))},[]),ar=(0,h.useCallback)(L=>{m(L)},[]),K=(0,h.useCallback)(L=>{u.current=L},[]),or=(0,h.useCallback)(L=>{$(L),L&&m(go(t.current.a))},[t]);(0,h.useEffect)(()=>{if(u.current)return;const L=Oa(a),Z=Ql(L);p(X=>{if(X===Z)return X;if(!l){const J=be(X);if(J.length===3||J.length===4||J.length===8){const dr=_r(`#${J}`);if(dr){const j={...dr,a:L.a};if(Zc(j,L))return X}}}return Z})},[a,l]);const nr=(0,h.useMemo)(()=>b?v:go(a.a),[b,v,a.a]),gr=(0,h.useMemo)(()=>({hue:a.h,saturation:a.s,value:a.v}),[a]),M=(0,h.useMemo)(()=>G(Math.round(a.a*100),0,100),[a.a]),O=(0,h.useMemo)(()=>`${M.toString()}%`,[M]),N=(0,h.useMemo)(()=>`${Math.round(a.h).toString()}\xB0`,[a.h]);return(0,n.jsx)("div",{...d,"arc-color-tools":e?"simple":"","arc-color-picker-section":"tools",children:e?(0,n.jsxs)(n.Fragment,{children:[D&&(0,n.jsx)(ql,{hsv:a,draftValue:g,setIsEditing:K,commitDraft:C,setDraftValue:H,expandHexShorthand:l,hasAlphaTools:T}),F&&(0,n.jsx)(Jl,{onColorPicked:y}),S&&(0,n.jsx)(xi,{kind:"alpha",value:M,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!0,showTooltip:!0,tooltipText:O,onChange:L=>k({a:L/100})})]}):(0,n.jsxs)(n.Fragment,{children:[z&&(0,n.jsx)(Fv,{value:gr,onChange:_}),F&&(0,n.jsx)(Jl,{onColorPicked:y}),(x||S)&&(0,n.jsxs)("div",{"arc-color-sliders":"",children:[x&&(0,n.jsx)(xi,{kind:"hue",value:a.h,min:0,max:360,step:1,id:"hue-slider",label:"Hue",showLabel:!1,showTooltip:!0,tooltipText:`Hue: ${N}`,onChange:L=>k({h:L})}),S&&(0,n.jsx)(xi,{kind:"alpha",value:M,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!1,showTooltip:!0,tooltipText:`Opacity: ${O}`,onChange:L=>k({a:L/100})})]}),(D||B)&&(0,n.jsxs)("div",{"arc-color-inputs":"",children:[D&&(0,n.jsx)(ql,{hsv:a,draftValue:g,setIsEditing:K,commitDraft:C,setDraftValue:H,expandHexShorthand:l,hasAlphaTools:T}),B&&(0,n.jsx)(Nv,{hsv:a,showLabel:!D,draftValue:nr,setIsEditing:or,commitDraft:W,setDraftValue:ar})]})]})})},ad=({heading:r,showGoBack:a,goBackProps:e,...o})=>(0,n.jsx)(te,{...o,variant:"common","arc-color-picker-wrapper":"",showGoBack:a,goBackProps:e,headerSlot:!!r&&(0,n.jsx)(Yr,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});ad.displayName="ArcColorPickerWrapper";const $e={mode:"normal",color:"#05aff0",format:"auto",heading:"Color",palettes:[]},Vv={icon:"fa-regular fa-paint-brush",text:"Color Picker",layout:"icon",shape:"circle",size:"md"},Uv=(r,a)=>r===void 0?!0:a?r.includes("hex-input")||r.includes("eye-dropper")||r.includes("alpha-slider"):r.includes("color-field")||r.includes("eye-dropper")||r.includes("hue-slider")||r.includes("alpha-slider")||r.includes("hex-input")||r.includes("alpha-input"),Ve=({children:r,mode:a=$e.mode,color:e=$e.color,format:o=$e.format,heading:t=$e.heading,tools:i,omitTools:c,isInline:l=!1,showGoBack:d=!1,goBackProps:u,palettes:g,popoverProps:p,onChange:v,onAddColor:m,onRemoveColor:b,expandHexShorthand:$,...k})=>{const _=(0,h.useMemo)(()=>$l(e).color,[e]),y=Ir(p?.id??void 0,"color-picker"),z=(0,h.useMemo)(()=>a==="simple",[a]),[x,S]=(0,h.useState)(()=>{const j=_r(_);return j?at(j):{h:0,s:0,v:0,a:1}}),D=(0,h.useRef)(x),B=(0,h.useRef)(_),F=(0,h.useRef)(null),T=(0,h.useRef)(void 0);(0,h.useEffect)(()=>{D.current=x},[x]);const C=(0,h.useCallback)(j=>{if(v)try{const er=He(j,{format:o});B.current=er.value,F.current=er.rgba,v({...er,name:T.current})}catch{}},[v,o]),W=(0,h.useCallback)(j=>{Jc(j,D.current)||(D.current=j,S(j),C(j))},[C]),H=(0,h.useMemo)(()=>{const j=z?"":"manual";return p?.popover??j},[p?.popover,z]),ar=(0,h.useMemo)(()=>{const j=Oa(x);return{"--js\u2022hue":`hsl(${x.h} 100% 50%)`,"--js\u2022hex":Sa({...j,a:1},!1),"--js\u2022rgb":Ne(j)}},[x]),K=(0,h.useMemo)(()=>Ne(Oa(x)),[x]),or=(0,h.useMemo)(()=>g?.map(j=>({...j,canAddColor:!1,canRemoveColor:!1}))??[],[g]),nr=(0,h.useRef)(null),gr=(0,h.useCallback)(()=>{const j=nr.current;if(!j)return;const er=z?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';j.querySelector(er)?.focus()},[z]),M=p?.onToggle,O=(0,h.useCallback)(j=>{j?.newState==="open"&&setTimeout(gr,0),M?.(j)},[gr,M]);(0,h.useEffect)(()=>{if(_!==B.current){B.current=_;try{const j=_r(_)??{r:0,g:0,b:0,a:1},er=F.current;if(er&&Xc(j,er))return;const pr=Oa(D.current);if(Xc(j,pr))return;T.current=void 0;const xr=at(j,D.current.h);if(Jc(xr,D.current))return;D.current=xr,S(xr)}catch{}}},[_]);const N=(0,h.useMemo)(()=>{const j=i===void 0?[...z?al:rl]:[...i];if(!c?.length)return j;const er=new Set(c);return j.filter(pr=>!er.has(pr))},[i,z,c]),L=(0,h.useMemo)(()=>Uv(N,z),[N,z]),Z=(0,h.useMemo)(()=>N.includes("palettes"),[N]),X=(0,n.jsxs)("div",{...k,ref:nr,"arc-color-picker":z?"simple":"","is-inline":l?"":void 0,style:ar,children:[z?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Il,{palettes:Z?or:void 0,activePaletteColor:K,commitLocalHsv:W,selectedNameRef:T,hsvRef:D,popoverId:y,onAddColor:m??(()=>{}),onRemoveColor:b}),L&&(0,n.jsx)(rd,{color:_,hsv:x,hsvRef:D,selectedNameRef:T,commitLocalHsv:W,isSimpleMode:z,tools:N,expandHexShorthand:$})]}):(0,n.jsxs)(n.Fragment,{children:[L&&(0,n.jsx)(rd,{color:_,hsv:x,selectedNameRef:T,hsvRef:D,commitLocalHsv:W,tools:N,expandHexShorthand:$}),(0,n.jsx)(Il,{palettes:Z?g:void 0,activePaletteColor:K,commitLocalHsv:W,selectedNameRef:T,hsvRef:D,popoverId:y,onAddColor:m??(()=>{}),onRemoveColor:b,"has-divider":L?"top":void 0})]}),r&&(0,n.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(l)return X;const J=p?.anchorProps??Vv,dr=z?{...p,anchorAt:p?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...p,heading:t??void 0,showGoBack:d??void 0,goBackProps:u??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,n.jsx)(ad,{...dr,popover:H,anchorProps:J,id:y,onToggle:O,children:X})};Ve.getColorAs=bl,Ve.getColorData=He,Ve.getContrastColor=ni,Ve.addColor=Pg,Ve.removeColor=Mg,ir("ArcColorPicker",Hg);const Wv=s`--arc•menu`,ye=s`${Wv}•item`,Kv=s`
@layer arc-components {

  [arc-menu] {
    ${ye}•gap: var(${f}•8);
    ${ye}•fg: inherit;
    ${ye}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${f}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${f}•2));
    padding: var(--arc-menu-padding, var(${f}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${ye}•gap));

    background: var(--arc-menu-item-background, var(${ye}•bg));
    color: var(--arc-menu-item-color, var(${ye}•fg));
    padding: var(--arc-menu-item-padding, var(${f}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${ye}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${f}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${ye}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`;var Gv;const Yv=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],qv={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},Ue={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Zv=({icon:r,onClick:a,...e})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:e}),ed=(r,a)=>{const{icon:e,itemProps:o}=Zv(a);switch(r){case"divider":return(0,n.jsx)("hr",{});case"section-label":return(0,n.jsx)(Yr,{...o,...Ue,icon:e,size:"sm",isStrong:!0});case"icon-text":return(0,n.jsx)(Yr,{...o,...Ue,icon:e});case"icon-text-detail":return(0,n.jsx)(Yr,{...o,...Ue,icon:e,isStrong:!0});case"text":return(0,n.jsx)(Yr,{...o,...Ue});case"text-detail":return(0,n.jsx)(Yr,{...o,...Ue,subtext:o.subtext??"sub",isStrong:!0});case"user":return(0,n.jsx)(pc,{...o,...Ue,size:"sm"});case"user-detail":return(0,n.jsx)(pc,{...o,...Ue,size:"md",isStrong:!0});default:return r}},tm=r=>Object.fromEntries(Gv.map(a=>[a,ed(a,r)])),Xv=(r,a,e,o)=>{if(o||e==="divider"||!!!(a.href||a.onClick))return;r.currentTarget.closest("[arc-popover]")?.hidePopover?.()},Jv=r=>r?.role??qv[Ln(r)]??"menuitem",Ln=r=>Yv(r)?.find(({test:a})=>a())?.value??"text",od=r=>a=>ed(r,a),Qv=(r,a,e,o)=>{let t=1,i=r;const c=d=>d>=e?0:d+1,l=d=>d<=0?e:d-1;for(;t<=e;){const d=c(i),u=l(i),g={previous:a==="previous"?u:i,actual:i,next:a==="next"?d:i}[a];if(o(g))return g;i=g,t+=1}return-1},rp=({items:r,filterText:a,renderItem:e,isVisible:o,keepMenuOpen:t,...i})=>{const c=(0,h.useRef)(null),l=(0,h.useRef)([]),[d,u]=(0,h.useState)(-1),[g,p]=(0,h.useState)(!1);(0,h.useEffect)(()=>{o&&c.current&&(l.current=Array.from(c.current.querySelectorAll("[arc-button=custom]")))},[o,r]);const v=(0,h.useCallback)(x=>l.current[x]||null,[]),m=(0,h.useMemo)(()=>a?r.filter(x=>Object.values(x).some(S=>S===a)):r,[r,a]),b=Math.max(m.length-1,0),$=(0,h.useCallback)((x,S)=>{const D=Qv(x,S,b,v);u(D),v(D)?.focus()},[b,v]),k=(0,h.useCallback)((x,S)=>()=>{!g&&S&&$(x,"actual")},[g,$]),_={ArrowUp:x=>$(x,"previous"),ArrowDown:x=>$(x,"next"),Home:()=>$(0,"actual"),End:()=>$(b,"actual")},y=x=>S=>{Object.keys(_).includes(S.key)&&(p(!0),S.stopPropagation(),S.preventDefault(),_[S.key](x))},z=(0,h.useMemo)(()=>m.map((x,S)=>{const{itemId:D,role:B,keepMenuOpen:F,...T}=x,C=Ln(x)||"",W=B||Jv(x)||"menuitem",H=S===d;return(0,n.jsx)("li",{"arc-menu-item":C,role:W,onMouseEnter:k(S,!!(x.href||x.onClick)),onClick:ar=>Xv(ar,x,C,F??t),children:e?.(T,S,{filterText:a,isCurrent:H,itemId:D,role:B,keepMenuOpen:F??t})},D??S)}),[d,a,m,t,e,k]);return(0,h.useEffect)(()=>{o&&$(-1,"next")},[o,$]),(0,n.jsx)("ul",{...i,ref:c,"arc-menu":"",role:"menu",onKeyDown:y(d),onMouseLeave:()=>u(-1),onMouseMove:()=>p(!1),tabIndex:o?0:-1,children:z})};ir("ArcMenu",Kv);const td=r=>{const{startSlot:a,endSlot:e,onClick:o,href:t,target:i,containerProps:c,isDisabled:l,"aria-disabled":d,tooltip:u,...g}=r,p=Ln(g),v=(0,h.useMemo)(()=>od(p),[p]),m=d??l,b=p==="divider",$=!!(t||o),k=!b,_=k&&a?"":void 0,y=k&&e?"":void 0,z=(0,h.useMemo)(()=>({...c,onClick:o,tooltip:u,href:t,target:i}),[c,o,u,t,i]),x=(0,h.useMemo)(()=>({...c}),[c]);return $?(0,n.jsxs)(kr,{...z,"aria-disabled":m?"true":void 0,isDisabled:!!m,_isCustom:!0,"arc-dropdown-item":p??"","has-start-slot":_,"has-end-slot":y,children:[k&&a,(0,n.jsx)(v,{...g,"is-item-content":"interactive"}),k&&e]}):(0,n.jsxs)("div",{...x,"arc-dropdown-item":p??"","has-start-slot":_,"has-end-slot":y,children:[k&&a,(0,n.jsx)(v,{...g,"is-item-content":"inert"}),k&&e]})},ap=s`--arc•dropdown`,ep=s`${ap}•menu`,Xr=s`${ep}•item`,op=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Xr}•padding: var(${E}•8) var(${E}•12);
    ${Xr}•min•height: var(${f}•36);
    ${Xr}•gap: var(${E}•8);

    &[arc-dropdown-item=text-detail] {
      ${Xr}•min•height: var(${f}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Xr}•min•height: var(${f}•32);
    }

    &[arc-dropdown-item=user] {
      ${Xr}•min•height: var(${f}•40);

      &:not([has-start-slot]) {
        ${Xr}•padding: var(${E}•8) var(${E}•12) var(${E}•8) var(${E}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Xr}•min•height: var(${f}•48);

      &:not([has-start-slot]) {
        ${Xr}•padding: var(${E}•8) var(${E}•12) var(${E}•8) var(${E}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Xr}•min•height: var(${f}•8);
      ${Xr}•padding: 0;

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

    --arc-menu-item-gap: var(${Xr}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Xr}•gap);
    text-align: start;
    min-height: var(${Xr}•min•height);

    &:not([arc-button]) {
      padding: var(${Xr}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Xr}•padding);
      --arc-button-min-height: var(${f}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,nd=(0,h.forwardRef)((r,a)=>(0,n.jsx)(Wo,{...r,ref:a,"arc-dropdown-menu-button":""})),ki=r=>{const{items:a,renderItem:e,keepMenuOpen:o,...t}=r,[i,c]=(0,h.useState)(!1),l=(0,h.useCallback)((...u)=>{const[g]=u;return e?.(...u)??(0,n.jsx)(td,{...g})},[e]),d=u=>{c(u.newState==="open"),r?.onToggle?.(u)};return(0,n.jsx)(te,{...t,"arc-dropdown":"",variant:"common",onToggle:d,children:(0,n.jsx)(rp,{"arc-dropdown-menu":"",items:a??[],renderItem:l,isVisible:i,keepMenuOpen:o})})};nd.displayName="ArcDropdownButton",ki.Button=nd,ki.Item=td,ir("ArcDropdownMenu",op);const cd=r=>(0,n.jsx)(kr,{...r,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),Rn=s`--arc•link`,Ga=s`${Rn}•fg`,lt=s`${Ga}•hover`,dt=s`${Ga}•disabled`,wi=s`${Rn}•outline`,id=s`${wi}•size`,Ci=s`${wi}•offset`,tp=s`${Rn}•cursor`,ut=s`${Rn}•focus•color`,np=s`
@layer arc-components {
${Dh}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${Ga}: currentcolor;
    ${lt}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${dt}: color-mix(in srgb, currentcolor, transparent 70%);

    ${ut}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${Ga}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-secondary);
    ${dt}: var(--arc-color-fg-disabled);
    ${ut}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${Ga}: var(--arc-color-fg-secondary);
    ${lt}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-disabled);
    ${ut}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${Ga}: var(--arc-color-fg-on-mono-inverse);
    ${lt}: var(--arc-link-fg-hover-inverse);
    ${dt}: var(--arc-link-fg-disabled-inverse);
    ${ut}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${id}: 0.125em; /* 2px */
    ${Ci}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${Ga}: var(--arc-link-color-hover, var(${lt}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${wi}: var(${id}) solid var(--arc-link-color-focus, var(${ut}));
    ${Ci}: var(${Ci});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${Ga}: var(--arc-link-color-disabled, var(${dt}));
    ${tp}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${Ga}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${Ga}));
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
`,cp=q(zr,["inherit","primary","secondary","inverse"]),ip=({children:r,layout:a="gutter",size:e="inherit",variant:o="inherit",tag:t="a",href:i,icon:c,text:l,overflow:d,iconSize:u,gapSize:g,isFlipped:p,isDisabled:v,...m})=>(0,n.jsx)(t,{...m,href:v?void 0:i,"arc-link":"","data-variant":o,"aria-disabled":v,"data-is-disabled":v?"":void 0,children:r||(0,n.jsx)(Yr,{icon:c,text:l,overflow:d,iconSize:u,gapSize:g,size:e,layout:a,isFlipped:p})});ir("ArcLink",np);const sp=[...re],lp=q(zr,["common"]),dp=q(zr,["common","critical"]),up=q(zr,["common","brand","info","success","warning","error","processing"]),hp=["auto","dark","light","none"],gp=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],vp=q(aa,["xl","lg","md","sm","custom","fullscreen"]),pp=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Ai=r=>r?.matches(":modal"),Si=(r,a)=>a.target===r,fp=(r,a)=>a.clientX<r.left||a.clientX>r.right||a.clientY<r.top||a.clientY>r.bottom,ht=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onCloseOverride:o=void 0})=>(t,i)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){i?.(c);return}if(o){o(t,c,r.current),i?.(c);return}if(a&&t!=="confirm:discard"){e?.(!0);return}r.current?.close(t),e?.(!1),i?.(c)},zi=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onClose:o,onToggle:t})=>{(0,h.useEffect)(()=>{const i=r.current;if(!i)return;const c=d=>{Ai(i)&&Si(i,d)&&(a?(d.preventDefault(),d.stopPropagation(),e?.(!0)):o?.("outside",d))},l=d=>{Si(i,d)&&(e?.(!1),o?.(i.returnValue,d),t?.(!1,d))};return i.addEventListener("close",l),i.addEventListener("cancel",c),()=>{i.removeEventListener("close",l),i.removeEventListener("cancel",c)}},[r,a,e,o,t])},Ei=({modalRef:r,isOpen:a,isTopLayer:e})=>{(0,h.useEffect)(()=>{const o=r.current;o&&(a&&!o.open&&(e?o.showModal():o.show()),!a&&o.open&&o.close())},[a,e])},_i=({modalRef:r,isOpen:a,autoFocusId:e})=>{(0,h.useEffect)(()=>{const o=r.current;if(!o||!e||!a)return;const t=o.querySelector(`#${e}`);if(!t||!(t instanceof HTMLElement))return;const i=setTimeout(()=>{t.focus()},0);return()=>clearTimeout(i)},[r,e,a])},sd=(r,a)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(a)||r.target instanceof Node&&a.contains(r.target),ld=({modalRef:r,isOpen:a=!1,closeOnBackdrop:e=!1,attemptCloseModal:o})=>{(0,h.useEffect)(()=>{const t=r.current;if(!t||!a||!e||!Ai(t))return;let i=!1;const c=d=>{i=sd(d,t)},l=d=>{if(i||sd(d,t))return;const u=t.getBoundingClientRect();fp(u,d)&&o("outside")(d)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,o,a,e])},dd=({modalRef:r,isOpen:a=!1,closeOnEsc:e=!1,closedBy:o="closerequest",attemptCloseModal:t})=>{(0,h.useEffect)(()=>{const i=r.current;if(!i||!a||!e||!Ai(i))return;const c=l=>{if(l.key==="Escape"&&Si(i,l)){if(o==="none"){l.stopPropagation(),l.preventDefault();return}t("escape")(l)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,t,a,e,o])},Ti=r=>(0,n.jsx)(kr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),mp=r=>(0,n.jsx)(kr,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),Pn=(0,h.forwardRef)(({inert:r,...a},e)=>(0,n.jsx)("div",{...a,ref:e,"arc-modal-content":"",inert:r}));Pn.displayName="ModalContent";const ud=({showDivider:r,...a})=>(0,n.jsx)("header",{...a,"arc-modal-header":"","has-divider":r?"":void 0}),bp=({glyph:r,variant:a="common"})=>(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsx)(cr,{icon:r,"arc-modal-glyph":"","arc-icon-status":a})}),Ii=r=>{const{titleContent:a,TitleElement:e="h2",...o}=r;return(0,n.jsx)(n.Fragment,{children:a&&(0,n.jsx)(e,{...o,"arc-modal-title":"",children:typeof a=="string"?a:(0,n.jsx)(Yr,{...a})})})},$p=({message:r,...a})=>(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsx)("p",{...a,"arc-modal-message":"",children:r})}),ji=({tag:r="section",padding:a,...e})=>(0,n.jsx)(r,{...e,"arc-modal-body":"","data-padding":a==="auto"?void 0:a}),Li=({showDivider:r,...a})=>(0,n.jsx)("footer",{...a,"arc-modal-footer":"","has-divider":r?"":void 0}),yp=r=>a=>{if(a.key==="Escape"){if(r==="none"){a.stopPropagation(),a.preventDefault();return}return"escape"}},Y=s`--arc•modal`,gt=s`${Y}•layout`,xp=s`${Y}•header`,Mn=s`${Y}•body`,vt=s`${Y}•footer`,hd=s`${Y}•fg`,Bn=s`${Y}•bg`,Ya=s`${Y}•backdrop`,xe=s`${Y}•scale`,mo=s`${xp}•padding`,yr=s`${Mn}•padding`,ke=s`${vt}•padding`,kp=s`
  ${Y}•font•size: var(${f}•14);
  ${Y}•gap: var(${E}•16);

  ${gt}•rows: auto 1fr auto;
  ${gt}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${gt}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${gt}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${gt}•rows: auto;
  }

  ${hd}: var(--arc-color-fg-primary);
  ${Bn}: var(--arc-color-bg-primary);
  ${Y}•border: none;
  ${Y}•border•radius: var(--arc-border-radius-lg);
  ${Y}•divider: var(${f}•1) solid var(--arc-color-border-mid);

  ${Y}•max•width: calc(100vw - var(${E}•32));
  ${Y}•min•width: unset;
  ${Y}•width: auto;

  ${Y}•max•height: calc(100vh - var(${E}•32));
  ${Y}•min•height: unset;
  ${Y}•height: max-content;

  ${xe}: 1;
  ${xe}•start: 0.95;

  ${Mn}•text•align: unset;
  ${vt}•justify•content: flex-end;

  ${Ya}•bg: var(--arc-color-overlay-stark);
  ${Ya}•pointer•events: none;
  ${Ya}•cursor: default;

  &:where([is-backdrop=light]) {
    ${Ya}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${Ya}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${Ya}•bg: transparent;
  }
`,wp=s`
  &[data-size=sm] {
    ${Y}•width: 28em;
  }

  &[data-size=md] {
    ${Y}•width: 40em;
  }

  &[data-size=lg] {
    ${Y}•width: 50em;
  }

  &[data-size=xl] {
    ${Y}•width: 64em;
  }

  &[data-size=custom] {
    ${Y}•width: auto;
    ${Y}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${Y}•width: 100vw;
    ${Y}•height: 100vh;
    ${Y}•min•width: 100vw;
    ${Y}•min•height: 100vh;
    ${Y}•max•width: 100vw;
    ${Y}•max•height: 100vh;
    ${Y}•border•radius: var(--arc-border-radius-none);

    ${xe}: 1;
    ${xe}•start: 1.125;
  }
`,Cp=s`
  &[is-confirm] {
    ${vt}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${Mn}•text•align: center;
    ${vt}•justify•content: center;

    ${yr}•block•start: var(${E}•40);
    ${yr}•block•end: var(${E}•20);

    ${ke}•block•start: var(${E}•12);
    ${ke}•block•end: var(${E}•40);

    ${Y}•glyph•size: var(${f}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${Y}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${Y}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${E}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,Ap=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${yr}•block•start: var(${E}•10);
    }

    &:has([arc-modal-footer]) {
      ${yr}•block•end: var(${E}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${mo}•block•end: var(${E}•20);
      ${yr}•block•start: var(${E}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${yr}•block•end: var(${E}•20);
      ${ke}•block•start: var(${E}•12);
      ${ke}•block•end: var(${E}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${yr}•inline•start: 0;
      ${yr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${yr}•block•start: 0;
      ${yr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${yr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${yr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${yr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${yr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${yr}•block•start: var(${E}•20);
      ${yr}•inline•end: var(${E}•24);
      ${yr}•block•end: var(${E}•20);
      ${yr}•inline•start: var(${E}•24);
    }

    &:has([arc-modal-go-back]) {
      ${mo}•inline•start: var(${E}•20);
    }

    ${mo}:
      var(${E}•20)
      var(${E}•24)
      var(${mo}•block•end, var(${E}•10))
      var(${mo}•inline•start, var(${E}•24));

    ${yr}:
      var(${yr}•block•start, var(${E}•20))
      var(${yr}•inline•end, var(${E}•24))
      var(${yr}•block•end, var(${E}•20))
      var(${yr}•inline•start, var(${E}•24));

    ${ke}:
      var(${ke}•block•start, var(${E}•10))
      var(${E}•24)
      var(${ke}•block•end, var(${E}•20))
      var(${E}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${yr}: 0;
    }
  }
`,Sp=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
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
      transition-property: display, overlay, opacity, scale;
    }
  }
`,zp=s`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${xe}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
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
      scale: var(--arc-modal-scale-start, var(${xe}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Ri=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${kp}
    ${wp}
    ${Cp}
    ${Ap}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${xe}: 1;
      ${xe}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${hd}));
    background: var(--arc-modal-background, var(${Bn}));
    border: var(--arc-modal-border, var(${Y}•border));
    border-radius: var(--arc-modal-border-radius, var(${Y}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${Y}•width));
    height: var(--arc-modal-height, var(${Y}•height));
    min-width: var(--arc-modal-min-width, var(${Y}•min•width));
    min-height: var(--arc-modal-min-height, var(${Y}•min•height));
    max-width: var(--arc-modal-max-width, var(${Y}•max•width));
    max-height: var(--arc-modal-max-height, var(${Y}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${Ya}•bg));
      pointer-events: var(${Ya}•pointer•events, none);
      cursor: var(${Ya}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${Y}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${Y}•gap));

      padding: var(${mo});
      background: var(--arc-modal-header-background, var(${Bn}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${Y}•divider));
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
        margin: var(${E}•4m) var(${E}•8m) var(${E}•4m) var(${E}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${E}•4m) 0 var(${E}•4m) var(${E}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${E}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${E}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${yr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${Mn}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${vt}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${Y}•gap));

      background: var(--arc-modal-footer-background, var(${Bn}));
      padding: var(--arc-modal-footer-padding, var(${ke}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${Y}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${E}•16) var(${E}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${Ya}•bg));
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
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${E}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${Sp}
  ${zp}
`,we={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},gd=({children:r,headerProps:a,bodyProps:e,footerProps:o,...t})=>{const i=(0,h.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=we.isTopLayer,isInverse:u=we.isInverse,scheme:g=we.scheme,backdropColor:p=we.backdropColor,variant:v=we.variant,message:m=we.message,onCloseOverride:b=we.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:k,contentRef:_,...y}=t,{slotStart:z,TitleElement:x,titleContent:S,slotEnd:D,...B}=a||{},{primaryButton:F,secondaryButton:T,...C}=o||{},W=!!(S||z||D),H=g==="auto"?void 0:g,ar=!!b,K=M=>ar?b?.("confirm:discard",M,i.current??void 0):$?.("confirm:discard",M),or=M=>ar?b?.("confirm:cancel",M,i.current??void 0):k?.("confirm:cancel",M);zi({modalRef:i,onClose:b}),Ei({modalRef:i,isOpen:c,isTopLayer:d}),_i({modalRef:i,isOpen:c,autoFocusId:l});const nr=M=>{or(M),T?.onClick?.(M)},gr=M=>{K(M),F?.onClick?.(M)};return(0,n.jsx)("dialog",{...y,ref:i,"arc-modal":"","arc-scheme":u?"inverse":H,"is-confirm":v||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:"none",onKeyDown:yp("none"),children:(0,n.jsxs)(Pn,{ref:_,children:[W&&(0,n.jsxs)(ud,{...B,children:[z&&(0,n.jsx)("div",{"header-slot":"start",children:z}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(Ii,{TitleElement:x,titleContent:S})}),D&&(0,n.jsx)("div",{"header-slot":"end",children:D})]}),(0,n.jsx)(ji,{...e,children:r||m&&(0,n.jsx)("p",{style:{margin:0},children:m})}),(0,n.jsx)(Li,{...C,children:(0,n.jsxs)($n,{children:[(0,n.jsx)(kr,{...T,text:T?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:u,onClick:nr}),(0,n.jsx)(kr,{...F,text:F?.text||"Discard",variant:v??"common",hierarchy:"primary",isInverse:u,onClick:gr})]})})]})})};ir("ArcModalConfirm",Ri);const ia={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},Ep=({children:r,confirmProps:a,headerProps:e,bodyProps:o,dismissProps:t,footerProps:i,...c})=>{const l=(0,h.useRef)(null),[d,u]=(0,h.useState)(!1),{isOpen:g,autoFocusId:p,isTopLayer:v=ia.isTopLayer,isInverse:m=ia.isInverse,scheme:b=ia.scheme,backdropColor:$=ia.backdropColor,hasConfirmFlow:k=ia.hasConfirmFlow,hasUnsavedChanges:_=ia.hasUnsavedChanges,onCloseOverride:y=ia.onCloseOverride,bypassConfirmWhen:z=ia.bypassConfirmWhen??{},size:x=ia.size,closeOnBackdrop:S=ia.closeOnBackdrop,closeOnEsc:D=ia.closeOnEsc,showDismiss:B=ia.showDismiss,onActionError:F,onClose:T,onToggle:C,width:W,height:H,style:ar,contentRef:K,...or}=c,{showGoBack:nr,goBackProps:gr,slotStart:M,TitleElement:O,titleContent:N,slotEnd:L,showDivider:Z=ia.headerProps?.showDivider,...X}=e??{},{slotStart:J,primaryButton:dr,secondaryButton:j,tertiaryButton:er,showDivider:pr=ia.footerProps?.showDivider,...xr}=i??{},Jr=!!(nr||N||M||L),ga=!!(dr||j||er),xa=!!(ga||J),V=!!(k&&_),Lr=D?"closerequest":"none",hr=b==="auto"?void 0:b,{didPressEscapeKey:Mr,didClickBackdrop:Ta,didClickGoBackButton:Ce,didClickDismissButton:ue,didClickPrimaryButton:Vn,didClickSecondaryButton:ko,didClickTertiaryButton:Ge}=z,Ja=ht({modalRef:l,shouldConfirm:V,setIsConfirming:u,onCloseOverride:y});zi({modalRef:l,shouldConfirm:V,setIsConfirming:u,onClose:T,onToggle:C}),Ei({modalRef:l,isOpen:g,isTopLayer:v}),_i({modalRef:l,isOpen:g,autoFocusId:p}),ld({modalRef:l,isOpen:g,closeOnBackdrop:S,attemptCloseModal:Ta?ht({modalRef:l,shouldConfirm:V&&!Ta,setIsConfirming:u}):Ja}),dd({modalRef:l,isOpen:g,closeOnEsc:D,closedBy:Lr,attemptCloseModal:Mr?ht({modalRef:l,shouldConfirm:V&&!Mr,setIsConfirming:u}):Ja});const Q=()=>u(!1),Sr=(ra,Qa)=>Ja(ra)(Qa),Qr=(ra,Qa,wo)=>async Ae=>{Ae?.preventDefault?.(),Ae?.stopPropagation?.();const Un=()=>Qa?ht({modalRef:l,shouldConfirm:V&&!Qa,setIsConfirming:u})(ra,wo?.onCloseCallback)(Ae):Ja(ra,wo?.onCloseCallback)(Ae);try{await wo?.onClick?.(Ae),Un()}catch(Ni){F?.(Ni,{reason:ra,event:Ae})}};return(0,n.jsxs)("dialog",{...or,ref:l,"arc-modal":"","arc-scheme":m?"inverse":hr,"is-inverse":m?"":void 0,"is-top-layer":v?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":x,closedby:Lr,style:{"--arc-modal-width":W??"","--arc-modal-height":H??"",...ar},children:[!Jr&&B&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Ti,{...t,isInverse:m,onClick:Qr("button:dismiss",ue,t)})}),(0,n.jsxs)(Pn,{ref:K,inert:d?"":void 0,children:[Jr&&(0,n.jsxs)(ud,{...X,showDivider:Z,children:[nr&&(0,n.jsx)("div",{"header-slot":"go-back",children:(0,n.jsx)(mp,{...gr,isInverse:m,onClick:Qr("button:back",Ce,gr)})}),M&&(0,n.jsx)("div",{"header-slot":"start",children:M}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(Ii,{TitleElement:O,titleContent:N})}),L&&(0,n.jsx)("div",{"header-slot":"end",children:L}),B&&(0,n.jsx)("div",{"header-slot":"dismiss",children:(0,n.jsx)(Ti,{...t,isInverse:m,onClick:Qr("button:dismiss",ue,t)})})]}),(0,n.jsx)(ji,{...o,children:r}),xa&&(0,n.jsxs)(Li,{...xr,showDivider:pr,children:[J&&(0,n.jsx)("div",{"footer-slot":"content",children:J}),ga&&(0,n.jsxs)($n,{children:[er&&(0,n.jsx)(kr,{...er,text:er?.text||"Button",isInverse:m,variant:"common",hierarchy:"tertiary",onClick:Qr("button:tertiary",Ge,er)}),j&&(0,n.jsx)(kr,{...j,text:j?.text||"Cancel",isInverse:m,variant:"common",hierarchy:"secondary",onClick:Qr("button:secondary",ko,j)}),dr&&(0,n.jsx)(kr,{...dr,text:dr?.text||"Action",isInverse:m,variant:"common",hierarchy:"primary",onClick:Qr("button:primary",Vn,dr)})]})]})]}),k&&(0,n.jsx)(gd,{isOpen:d,isInverse:m,isTopLayer:v,backdropColor:$,...a,onConfirmDiscard:Sr,onConfirmCancel:Q})]})};ir("ArcModal",Ri);const se={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},_p={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,n.jsx)(Cc,{"arc-modal-spinner":""})},Tp=({children:r,dismissProps:a,bodyProps:e,footerProps:o,...t})=>{const i=(0,h.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=se.isTopLayer,isInverse:u=se.isInverse,scheme:g=se.scheme,backdropColor:p=se.backdropColor,closeOnBackdrop:v=se.closeOnBackdrop,closeOnEsc:m=se.closeOnEsc,variant:b=se.variant,icon:$,TitleElement:k,titleContent:_,message:y,showDismiss:z,onCloseOverride:x=se.onCloseOverride,onClose:S,onToggle:D,contentRef:B,...F}=t,{primaryButton:T,...C}=o??{},W=$||_p[b],H=m?"closerequest":"none",ar=g==="auto"?void 0:g,K=ht({modalRef:i,onCloseOverride:x});return zi({modalRef:i,onClose:S,onToggle:D}),Ei({modalRef:i,isOpen:c,isTopLayer:d}),_i({modalRef:i,isOpen:c,autoFocusId:l}),ld({modalRef:i,isOpen:c,closeOnBackdrop:v,attemptCloseModal:K}),dd({modalRef:i,isOpen:c,closeOnEsc:m,closedBy:H,attemptCloseModal:K}),(0,n.jsxs)("dialog",{...F,ref:i,"arc-modal":"","arc-scheme":u?"inverse":ar,"is-alert":b||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:H,children:[z&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Ti,{...a,isInverse:u,onClick:K("button:dismiss",a?.onClick)})}),(0,n.jsxs)(Pn,{ref:B,children:[(0,n.jsx)(ji,{...e,children:r||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(bp,{glyph:W,variant:b}),(0,n.jsx)(Ii,{TitleElement:k,titleContent:_}),(0,n.jsx)($p,{message:y})]})}),(0,n.jsx)(Li,{...C,children:(0,n.jsx)($n,{orientation:"vertical",children:(0,n.jsx)(kr,{...T,text:T?.text||"Close",variant:"common",hierarchy:"primary",isInverse:u,onClick:K("button:primary",T?.onClick)})})})]})]})};ir("ArcModalAlert",Ri);const Fr=s`--arc•radio`,Ip=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Fr}•font•size: 1em;
      ${Fr}•icon•size: 0.625em;
      ${Fr}•size: 1.125em;
      ${Fr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Fr}•font•size: var(${f}•14);
      ${Fr}•icon•size: var(${f}•10);
      ${Fr}•size: var(${f}•18);
      ${Fr}•gap: var(${f}•8);
    }

    &[data-size=sm] {
      ${Fr}•font•size: var(${f}•12);
      ${Fr}•icon•size: var(${f}•10);
      ${Fr}•size: var(${f}•16);
      ${Fr}•gap: var(${f}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${I}•border•radius: var(--arc-border-radius-circle);
    ${I}•size: var(${Fr}•size);
    ${I}•icon•size: var(${Fr}•icon•size);
    ${I}•width: var(${Fr}•size);
    ${I}•height: var(${Fr}•size);
    ${I}•translate: 0 var(${f}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${Fr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${Fr}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${I}•color: transparent;
      ${I}•background: transparent;
      ${I}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${I}•background: var(--arc-color-bg-theme-subtle);
        ${I}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${I}•background: var(--arc-color-bg-disabled);
        ${I}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${I}•color: var(--arc-color-fg-on-theme-heavy);
      ${I}•background: var(--arc-color-bg-theme-heavy);
      ${I}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${I}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${I}•color: var(--arc-color-fg-on-theme-mid);
        ${I}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,jp=q(Ia,["hug","fill"]),Lp=q(aa,["inherit","md","sm"]),vd=({children:r,label:a,layout:e,size:o="md",useMask:t=!0,...i})=>{const{className:c,title:l,...d}=i,u={className:c,title:l},g=r??a,p=(0,n.jsx)(Qo,{...d,type:"radio"}),v=t&&(0,n.jsxs)(un,{type:"radio",children:[p,(0,n.jsx)(cr,{icon:"fa-solid fa-circle-small arc-fw"})]}),m=!!g&&(0,n.jsxs)(me,{layout:e,children:[v||p,(0,n.jsx)(Oe,{children:g})]});return(0,n.jsx)("span",{...u,"arc-radio":"","data-size":o,children:m||v||p})};ir("ArcRadio",Ip);const ua=s`--arc•rb`,sr=s`${ua}•o`,Rp=s`
@layer arc-components {

  [arc-radio-bar] {
    ${ua}•font•size: var(${f}•14);
    ${ua}•border•radius: var(${f}•8);
    ${ua}•background: var(--arc-color-bg-secondary);
    ${ua}•padding: var(${f}•4);
    ${ua}•gap: var(${f}•2);

    ${sr}•color: var(--arc-color-fg-secondary);
    ${sr}•background: var(--arc-color-alpha-black-0);
    ${sr}•border•color: var(--arc-color-alpha-black-0);
    ${sr}•border•width: var(${f}•1);
    ${sr}•border•radius: var(${f}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${sr}•size: var(${f}•32);
      ${sr}•line•height: var(${f}•30); /* • -2px to account for border-width (top/bottom) */
      ${sr}•icon•padding: var(${f}•8);
      ${sr}•text•padding: var(${f}•12);
    }

    &[data-size=md] {
      ${sr}•size: var(${f}•24);
      ${sr}•line•height: var(${f}•22); /* • -2px to account for border-width (top/bottom) */
      ${sr}•icon•padding: var(${f}•6);
      ${sr}•text•padding: var(${f}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${ua}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${ua}•display: flex;
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
        ${sr}•color: var(--arc-color-fg-on-hover-default);
        ${sr}•background: var(--arc-color-bg-hover-default);
        ${sr}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${sr}•color: var(--arc-color-mono-black);
      ${sr}•background: var(--arc-color-mono-white);
      ${sr}•border•color: var(--arc-color-border-stark);
      ${sr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${sr}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${sr}•outline: var(${sr}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${ua}•font•size));
    display: var(${ua}•display);
    gap: var(${ua}•gap);
    border-radius: var(${ua}•border•radius);
    background: var(${ua}•background);
    padding: var(${ua}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${sr}•border•radius);
      outline: var(${sr}•outline, none);
      outline-offset: var(${sr}•border•width);
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
      line-height: var(${sr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${sr}•size);
      min-width: var(${sr}•size);

      border-radius: var(${sr}•border•radius);
      border: var(${sr}•border•width) solid var(${sr}•border•color);
      background: var(${sr}•background);
      color: var(${sr}•color);
      font-weight: var(${sr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${sr}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${sr}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Pp=q(Ia,["hug","fill"]),Mp=q(aa,["lg","md"]),Bp=({children:r,label:a,icon:e,...o})=>{const t=r||(0,n.jsx)(Yr,{icon:e,text:a});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,n.jsx)(vd,{...o,label:t,layout:"fill",useMask:!1})})},Dp=({children:r,size:a="lg",layout:e="hug",...o})=>(0,n.jsx)("ul",{...o,"arc-radio-bar":"","data-size":a,"data-layout":e,role:"radiogroup",children:r});ir("ArcRadioBar",Rp);var pd=sa(98998),Nr,Tr,Fa,le;function Op(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[a,e]=Nr(r),o=Tr(()=>{e(!0)},[]),t=Tr(()=>{e(!1)},[]),i=Tr(()=>{e(c=>!c)},[]);return{value:a,setValue:e,setTrue:o,setFalse:t,toggle:i}}var Na=typeof window<"u"?h.useLayoutEffect:h.useEffect;function _a(r,a,e,o){const t=(0,h.useRef)(a);Na(()=>{t.current=a},[a]),(0,h.useEffect)(()=>{const i=e?.current??window;if(!(i&&i.addEventListener))return;const c=l=>{t.current(l)};return i.addEventListener(r,c,o),()=>{i.removeEventListener(r,c,o)}},[r,e,o])}function nm(r){_a("click",a=>{r(a)})}function cm(){const[r,a]=Nr(null),e=Tr(async o=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),a(o),!0}catch(t){return console.warn("Copy failed",t),a(null),!1}},[]);return[r,e]}function Fp(r){const[a,e]=Nr(r??0),o=Tr(()=>{e(c=>c+1)},[]),t=Tr(()=>{e(c=>c-1)},[]),i=Tr(()=>{e(r??0)},[r]);return{count:a,increment:o,decrement:t,reset:i,setCount:e}}function Np(r,a){const e=Fa(r);Na(()=>{e.current=r},[r]),le(()=>{if(a===null)return;const o=setInterval(()=>{e.current()},a);return()=>{clearInterval(o)}},[a])}function im({countStart:r,countStop:a=0,intervalMs:e=1e3,isIncrement:o=!1}){const{count:t,increment:i,decrement:c,reset:l}=Fp(r),{value:d,setTrue:u,setFalse:g}=Op(!1),p=Tr(()=>{g(),l()},[g,l]),v=Tr(()=>{if(t===a){g();return}o?i():c()},[t,a,c,i,o,g]);return Np(v,d?e:null),[t,{startCountdown:u,stopCountdown:g,resetCountdown:p}]}function Dn(r){const a=(0,h.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return Na(()=>{a.current=r},[r]),(0,h.useCallback)((...e)=>{var o;return(o=a.current)==null?void 0:o.call(a,...e)},[a])}var Pi=typeof window>"u";function Mi(r,a,e={}){const{initializeWithValue:o=!0}=e,t=(0,h.useCallback)(v=>e.serializer?e.serializer(v):JSON.stringify(v),[e]),i=(0,h.useCallback)(v=>{if(e.deserializer)return e.deserializer(v);if(v==="undefined")return;const m=a instanceof Function?a():a;let b;try{b=JSON.parse(v)}catch($){return console.error("Error parsing JSON:",$),m}return b},[e,a]),c=(0,h.useCallback)(()=>{const v=a instanceof Function?a():a;if(Pi)return v;try{const m=window.localStorage.getItem(r);return m?i(m):v}catch(m){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,m),v}},[a,r,i]),[l,d]=(0,h.useState)(()=>o?c():a instanceof Function?a():a),u=Dn(v=>{Pi&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=v instanceof Function?v(c()):v;window.localStorage.setItem(r,t(m)),d(m),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(m){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,m)}}),g=Dn(()=>{Pi&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const v=a instanceof Function?a():a;window.localStorage.removeItem(r),d(v),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,h.useEffect)(()=>{d(c())},[r]);const p=(0,h.useCallback)(v=>{v.key&&v.key!==r||d(c())},[r,c]);return _a("storage",p),_a("local-storage",p),[l,u,g]}var Hp=typeof window>"u";function fd(r,{defaultValue:a=!1,initializeWithValue:e=!0}={}){const o=l=>Hp?a:window.matchMedia(l).matches,[t,i]=Nr(()=>e?o(r):a);function c(){i(o(r))}return Na(()=>{const l=window.matchMedia(r);return c(),l.addListener?l.addListener(c):l.addEventListener("change",c),()=>{l.removeListener?l.removeListener(c):l.removeEventListener("change",c)}},[r]),t}var Vp="(prefers-color-scheme: dark)",Up="usehooks-ts-dark-mode";function sm(r={}){const{defaultValue:a,localStorageKey:e=Up,initializeWithValue:o=!0}=r,t=fd(Vp,{initializeWithValue:o,defaultValue:a}),[i,c]=Mi(e,a??t??!1,{initializeWithValue:o});return Na(()=>{t!==i&&c(t)},[t]),{isDarkMode:i,toggle:()=>{c(l=>!l)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:l=>{c(l)}}}function md(r){const a=(0,h.useRef)(r);a.current=r,(0,h.useEffect)(()=>()=>{a.current()},[])}function On(r,a=500,e){const o=(0,h.useRef)();md(()=>{o.current&&o.current.cancel()});const t=(0,h.useMemo)(()=>{const i=pd(r,a,e),c=(...l)=>i(...l);return c.cancel=()=>{i.cancel()},c.isPending=()=>!!o.current,c.flush=()=>i.flush(),c},[r,a,e]);return(0,h.useEffect)(()=>{o.current=pd(r,a,e)},[r,a,e]),t}function lm(r,a,e){const o=e?.equalityFn??((u,g)=>u===g),t=r instanceof Function?r():r,[i,c]=Nr(t),l=Fa(t),d=On(c,a,e);return o(l.current,t)||(d(t),l.current=t),[i,d]}function dm(r,a={}){const{preserveTitleOnUnmount:e=!0}=a,o=Fa(null);Na(()=>{o.current=window.document.title},[]),Na(()=>{window.document.title=r},[r]),md(()=>{!e&&o.current&&(window.document.title=o.current)})}function um(r){const[a,e]=Nr(!1),o=()=>{e(!0)},t=()=>{e(!1)};return _a("mouseenter",o,r),_a("mouseleave",t,r),a}function hm({threshold:r=0,root:a=null,rootMargin:e="0%",freezeOnceVisible:o=!1,initialIsIntersecting:t=!1,onChange:i}={}){var c;const[l,d]=Nr(null),[u,g]=Nr(()=>({isIntersecting:t,entry:void 0})),p=Fa();p.current=i;const v=((c=u.entry)==null?void 0:c.isIntersecting)&&o;le(()=>{if(!l||!("IntersectionObserver"in window)||v)return;let $;const k=new IntersectionObserver(_=>{const y=Array.isArray(k.thresholds)?k.thresholds:[k.thresholds];_.forEach(z=>{const x=z.isIntersecting&&y.some(S=>z.intersectionRatio>=S);g({isIntersecting:x,entry:z}),p.current&&p.current(x,z),x&&o&&$&&($(),$=void 0)})},{threshold:r,root:a,rootMargin:e});return k.observe(l),()=>{k.disconnect()}},[l,JSON.stringify(r),a,e,v,o]);const m=Fa(null);le(()=>{var $;!l&&(($=u.entry)!=null&&$.target)&&!o&&!v&&m.current!==u.entry.target&&(m.current=u.entry.target,g({isIntersecting:t,entry:void 0}))},[l,u.entry,o,v,t]);const b=[d,!!u.isIntersecting,u.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}function gm(){const[r,a]=Nr(!1);return le(()=>{a(!0)},[]),r}function Wp(){const r=Fa(!1);return le(()=>(r.current=!0,()=>{r.current=!1}),[]),Tr(()=>r.current,[])}function vm(r=new Map){const[a,e]=Nr(new Map(r)),o={set:Tr((t,i)=>{e(c=>{const l=new Map(c);return l.set(t,i),l})},[]),setAll:Tr(t=>{e(()=>new Map(t))},[]),remove:Tr(t=>{e(i=>{const c=new Map(i);return c.delete(t),c})},[]),reset:Tr(()=>{e(()=>new Map)},[])};return[a,o]}function pm(r,a,e="mousedown",o={}){_a(e,t=>{const i=t.target;if(!i||!i.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(i)):r.current&&!r.current.contains(i))&&a(t)},void 0,o)}var bd=typeof window>"u";function fm(r,a={}){let{initializeWithValue:e=!0}=a;bd&&(e=!1);const o=Tr(d=>{if(a.deserializer)return a.deserializer(d);if(d==="undefined")return;let u;try{u=JSON.parse(d)}catch(g){return console.error("Error parsing JSON:",g),null}return u},[a]),t=Tr(()=>{if(bd)return null;try{const d=window.localStorage.getItem(r);return d?o(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,o]),[i,c]=Nr(()=>{if(e)return t()});le(()=>{c(t())},[r]);const l=Tr(d=>{d.key&&d.key!==r||c(t())},[r,t]);return _a("storage",l),_a("local-storage",l),i}var $d={width:void 0,height:void 0};function mm(r){const{ref:a,box:e="content-box"}=r,[{width:o,height:t},i]=Nr($d),c=Wp(),l=Fa({...$d}),d=Fa(void 0);return d.current=r.onResize,le(()=>{if(!a.current||typeof window>"u"||!("ResizeObserver"in window))return;const u=new ResizeObserver(([g])=>{const p=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",v=yd(g,p,"inlineSize"),m=yd(g,p,"blockSize");if(l.current.width!==v||l.current.height!==m){const $={width:v,height:m};l.current.width=v,l.current.height=m,d.current?d.current($):c()&&i($)}});return u.observe(a.current,{box:e}),()=>{u.disconnect()}},[e,a,c]),{width:o,height:t}}function yd(r,a,e){return r[a]?Array.isArray(r[a])?r[a][0][e]:r[a][e]:a==="contentBoxSize"?r.contentRect[e==="inlineSize"?"width":"height"]:void 0}var xd=typeof window>"u";function bm(r={}){let{initializeWithValue:a=!0}=r;xd&&(a=!1);const e=()=>{if(!xd)return window.screen},[o,t]=Nr(()=>{if(a)return e()}),i=On(t,r.debounceDelay);function c(){const l=e(),d=r.debounceDelay?i:t;if(l){const{width:u,height:g,availHeight:p,availWidth:v,colorDepth:m,orientation:b,pixelDepth:$}=l;d({width:u,height:g,availHeight:p,availWidth:v,colorDepth:m,orientation:b,pixelDepth:$})}}return _a("resize",c),Na(()=>{c()},[]),o}var Fn=new Map;function Kp(r){const a=document.querySelector(`script[src="${r}"]`),e=a?.getAttribute("data-status");return{node:a,status:e}}function $m(r,a){const[e,o]=Nr(()=>!r||a?.shouldPreventLoad?"idle":typeof window>"u"?"loading":Fn.get(r)??"loading");return le(()=>{if(!r||a?.shouldPreventLoad)return;const t=Fn.get(r);if(t==="ready"||t==="error"){o(t);return}const i=Kp(r);let c=i.node;if(c)o(i.status??t??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,a?.id&&(c.id=a.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const d=u=>{const g=u.type==="load"?"ready":"error";c?.setAttribute("data-status",g)};c.addEventListener("load",d),c.addEventListener("error",d)}const l=d=>{const u=d.type==="load"?"ready":"error";o(u),Fn.set(r,u)};return c.addEventListener("load",l),c.addEventListener("error",l),()=>{c&&(c.removeEventListener("load",l),c.removeEventListener("error",l)),c&&a?.removeOnUnmount&&(c.remove(),Fn.delete(r))}},[r,a?.shouldPreventLoad,a?.removeOnUnmount,a?.id]),e}var Gp=typeof window>"u";function ym(r={}){const{autoLock:a=!0,lockTarget:e,widthReflow:o=!0}=r,[t,i]=Nr(!1),c=Fa(null),l=Fa(null),d=()=>{if(c.current){const{overflow:g,paddingRight:p}=c.current.style;if(l.current={overflow:g,paddingRight:p},o){const v=c.current===document.body?window.innerWidth:c.current.offsetWidth,m=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,b=v-c.current.scrollWidth;c.current.style.paddingRight=`${b+m}px`}c.current.style.overflow="hidden",i(!0)}},u=()=>{c.current&&l.current&&(c.current.style.overflow=l.current.overflow,o&&(c.current.style.paddingRight=l.current.paddingRight)),i(!1)};return Na(()=>{if(!Gp)return e&&(c.current=typeof e=="string"?document.querySelector(e):e),c.current||(c.current=document.body),a&&d(),()=>{u()}},[a,e,o]),{isLocked:t,lock:d,unlock:u}}var Bi=typeof window>"u";function Yp(r,a,e={}){const{initializeWithValue:o=!0}=e,t=(0,h.useCallback)(v=>e.serializer?e.serializer(v):JSON.stringify(v),[e]),i=(0,h.useCallback)(v=>{if(e.deserializer)return e.deserializer(v);if(v==="undefined")return;const m=a instanceof Function?a():a;let b;try{b=JSON.parse(v)}catch($){return console.error("Error parsing JSON:",$),m}return b},[e,a]),c=(0,h.useCallback)(()=>{const v=a instanceof Function?a():a;if(Bi)return v;try{const m=window.sessionStorage.getItem(r);return m?i(m):v}catch(m){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,m),v}},[a,r,i]),[l,d]=(0,h.useState)(()=>o?c():a instanceof Function?a():a),u=Dn(v=>{Bi&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=v instanceof Function?v(c()):v;window.sessionStorage.setItem(r,t(m)),d(m),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(m){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,m)}}),g=Dn(()=>{Bi&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const v=a instanceof Function?a():a;window.sessionStorage.removeItem(r),d(v),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,h.useEffect)(()=>{d(c())},[r]);const p=(0,h.useCallback)(v=>{v.key&&v.key!==r||d(c())},[r,c]);return _a("storage",p),_a("session-storage",p),[l,u,g]}function xm(r){const[a,e]=Nr(1),o=a+1<=r,t=a-1>0,i=Tr(u=>{const g=u instanceof Function?u(a):u;if(g>=1&&g<=r){e(g);return}throw new Error("Step not valid")},[r,a]),c=Tr(()=>{o&&e(u=>u+1)},[o]),l=Tr(()=>{t&&e(u=>u-1)},[t]),d=Tr(()=>{e(1)},[]);return[a,{goToNextStep:c,goToPrevStep:l,canGoToNextStep:o,canGoToPrevStep:t,setStep:i,reset:d}]}var qp="(prefers-color-scheme: dark)",Zp="usehooks-ts-ternary-dark-mode";function km({defaultValue:r="system",localStorageKey:a=Zp,initializeWithValue:e=!0}={}){const o=fd(qp,{initializeWithValue:e}),[t,i]=Mi(a,r,{initializeWithValue:e});return{isDarkMode:t==="dark"||t==="system"&&o,ternaryDarkMode:t,setTernaryDarkMode:i,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];i(u=>{const g=(d.indexOf(u)+1)%d.length;return d[g]})}}}function wm(r,a){const e=Fa(r);Na(()=>{e.current=r},[r]),le(()=>{if(!a&&a!==0)return;const o=setTimeout(()=>{e.current()},a);return()=>{clearTimeout(o)}},[a])}function Cm(r){const[a,e]=Nr(!!r),o=Tr(()=>{e(t=>!t)},[]);return[a,o,e]}var Xp=typeof window>"u";function Am(r={}){let{initializeWithValue:a=!0}=r;Xp&&(a=!1);const[e,o]=Nr(()=>a?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),t=On(o,r.debounceDelay);function i(){(r.debounceDelay?t:o)({width:window.innerWidth,height:window.innerHeight})}return _a("resize",i),Na(()=>{i()},[]),e}const Jp=(r,a)=>{const e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;e?e.call(r,a):r.value=a,r.dispatchEvent(new Event("input",{bubbles:!0}))},Qp=({defaultValue:r="",value:a,debounceMs:e,inputElementRef:o,onClear:t,onKeyDown:i,onSearch:c})=>{const l=a!==void 0,d=c!==void 0&&e!==void 0,[u,g]=(0,h.useState)(r),p=l?a??"":u,v=(0,h.useRef)(!1),m=On(y=>{c?.(y)},e??0),b=(0,h.useCallback)(()=>{m.cancel()},[m]),$=(0,h.useCallback)(y=>{l||g(y)},[l]);(0,h.useEffect)(()=>b,[b]),(0,h.useEffect)(()=>{if(d){if(!v.current){v.current=!0;return}b(),m(p)}},[b,m,p,d]);const k=(0,h.useCallback)(()=>{b();const y=o.current;if(y){Jp(y,""),t?.(),y.focus();return}l||g(""),t?.()},[b,o,l,t]),_=(0,h.useCallback)(y=>{i?.(y),!(y.defaultPrevented||y.key!=="Enter"||!c)&&(b(),c(p))},[b,i,c,p]);return{resolvedValue:p,handleValueChange:$,handleClear:k,handleKeyDown:_}},rf=bi,af=$i,ef=q(Gl,["outline","solid"]),kd="Search",of="Clear search",Di={layout:"hug",size:"inherit",variant:"outline"},tf=({canClear:r,isDisabled:a,onClear:e})=>{if(r)return(0,n.jsx)(cd,{"aria-label":of,disabled:a,icon:"fa-regular fa-xmark",onClick:e})},nf=({ariaLabel:r,ariaLabelledBy:a,headerLabel:e})=>r??(!e&&!a?kd:void 0),wd=(0,h.forwardRef)(({debounceMs:r,inputProps:a,layout:e=Di.layout,onClear:o,onSearch:t,size:i=Di.size,variant:c=Di.variant,headerLabel:l,headerSlot:d,footerCaption:u,footerSlot:g,onChange:p,...v},m)=>{const{id:b,value:$,defaultValue:k="",onChange:_,onKeyDown:y,placeholder:z=kd,disabled:x,readOnly:S,required:D,"aria-label":B,"aria-labelledby":F,...T}=a,C=Ir(b,"arc-search"),W=(0,h.useRef)(null),{resolvedValue:H,handleValueChange:ar,handleClear:K,handleKeyDown:or}=Qp({defaultValue:k,value:$,debounceMs:r,inputElementRef:W,onClear:o,onKeyDown:y,onSearch:t}),nr=!x&&!S&&H.length>0,gr=nf({ariaLabel:B,ariaLabelledBy:F,headerLabel:l}),M=tf({canClear:nr,isDisabled:x,onClear:K}),O=L=>{W.current=L,La(m,L)},N=(L,Z)=>{ar(Z.target.value),_?.(L,Z)};return(0,n.jsx)(jn,{...v,"arc-search":"",layout:e,size:i,variant:c,ref:O,onChange:p,headerLabel:l,headerSlot:d,inputPrefix:(0,n.jsx)(cr,{icon:"fa-regular fa-search"}),inputAction:M,footerCaption:u,footerSlot:g,inputProps:{...T,id:C,value:H,disabled:x,placeholder:z,readOnly:S,required:D,onChange:N,onKeyDown:or,"aria-disabled":x||void 0,"aria-label":gr,"aria-labelledby":F,"aria-readonly":S||void 0,"aria-required":D||void 0}})});wd.displayName="ArcSearch";const cf=bi,sf=$i,lf=q(zr,["outline","solid","plain"]),Cd=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),Nn=r=>Array.isArray(r.options),bo=r=>{const a=r?.variant;return a!=="divider"&&a!=="section-label"},Ad=r=>r?.variant==="section-label"&&!!(r.text||r.icon),Sd=r=>{},zd=(r=[])=>r.flatMap(a=>Nn(a)?a.options:[a]).some(a=>bo(a)&&a.value===""),Ed=r=>{const a=t=>typeof t=="string"&&t.trim().length>0,e=t=>{if(typeof t!="object"||t===null)return;const{name:i}=t;return a(i)?i:void 0};return[r?.text,e(r?.avatar),r?.["aria-label"]].find(a)??"Anonymous"},pt=s`--arc•select`,ha=s`${pt}•picker`,_d=s`${ha}•fg`,Td=s`${ha}•bg`,Oi=s`${pt}•option`,ft=s`${Oi}•fg`,mt=s`${Oi}•bg`,We=s`${Oi}•icon`,df=s`
  ${_d}: currentcolor;
  ${Td}: var(--arc-color-bg-mono);
  ${pt}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${ha}•width: auto;
  ${ha}•min•width: 3em;
  ${ha}•border•radius: var(--arc-border-radius-lg);
  ${ha}•shadow: var(--arc-shadow-lg);

  ${ft}: currentcolor;
  ${mt}: transparent;

  ${We}•display: none;
  ${We}•color: var(${ft});
`,uf=s`
  &[data-layout=fill] {
    ${ha}•width: 100%; /* fallback */
    ${ha}•width: anchor-size(inline);
  }
`,hf=s`
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
`,gf=s`
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
`,vf=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${df}
    ${uf}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${ha}•display, none);
      flex-direction: column;
      gap: var(${E}•4);
      border: none;
      color: var(${_d});
      width: var(--arc-select-picker-width, var(${ha}•width));
      min-width: var(--arc-select-picker-min-width, var(${ha}•min•width));
      margin: var(--arc-select-picker-margin, var(${E}•4) 0);
      padding: var(--arc-select-picker-padding, var(${E}•4));
      background: var(--arc-select-picker-background, var(${Td}));
      border-radius: var(--arc-select-picker-border-radius, var(${ha}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${ha}•shadow));
    }

    ::picker(select):popover-open {
      ${ha}•display: flex;
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
      padding-inline: var(${f}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${E}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${pt}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${f}•24);
      --arc-avatar-initial-font-size: var(${f}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${f}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${E}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${f}•1) solid var(--arc-color-border-mid);
      margin-top: var(${E}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${E}•8);
      width: 100%;
      min-width: 0;
      color: var(${ft});
      background: var(--arc-select-option-background, var(${mt}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${E}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${ft}: var(--arc-color-fg-disabled);
        ${mt}: transparent;
        ${We}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${mt}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${mt}: var(--arc-color-bg-selected-default);
        ${We}•display: flex;
        ${We}•color: var(--arc-select-option-selected-icon-color, var(${ft}));
      }

      [arc-select-icon=selected] {
        display: var(${We}•display, none);
        color: var(${We}•color, currentcolor);
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

      select[data-placeholder] {
        color: var(${pt}•placeholder•fg);
      }
    }
  }

  ${hf}
  ${gf}

}
`,pf=(0,h.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",tag:o="span",items:t,placeholder:i,renderItem:c,headerLabel:l,headerSlot:d,footerCaption:u,footerSlot:g,id:p,value:v,defaultValue:m,required:b,disabled:$,readOnly:k,maxWidth:_,inputProps:y,...z},x)=>{const{name:S,onBlur:D,onChange:B,onFocus:F,onInput:T,"aria-describedby":C,"aria-label":W,"aria-labelledby":H,...ar}=z,K=Ir(p,"arc-select"),or=e==="plain"&&r==="fill"?"hug":r,nr=$||void 0,gr=k||void 0,M=b||void 0,O=Cd(),N=e!=="plain"&&!!(l||d),L=e!=="plain"&&!!(u||g),Z=typeof i=="string"&&i.length>0&&!zd(t),X=m??(Z?"":void 0),J=v??X,dr=Z&&J==="",j=O&&Z&&J==="",er=gr&&J!=null?String(J):void 0,pr=t.flatMap(V=>Nn(V)?V.options.filter(bo):bo(V)?[V]:(Sd(V),[])),xr=new Map(pr.map((V,Lr)=>[V,Lr])),Jr=V=>{const{itemId:Lr,...hr}=V,Mr=od(Ln(V));return(0,n.jsx)(Mr,{...hr})},ga=V=>{const Lr=xr.get(V)??0,hr=V["aria-disabled"]===!0||V.disabled===!0,Mr=typeof V.itemId=="string"&&V.itemId.length>0?V.itemId:Lr,Ta=String(V?.value??V?.itemId??Lr);return(0,n.jsx)("option",{value:Ta,disabled:hr||er!==void 0&&Ta!==er||void 0,"arc-select-option":"",children:O?(0,n.jsxs)(n.Fragment,{children:[c?c(V,Lr):Jr(V),(0,n.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,n.jsx)(cr,{icon:"fa-regular fa-check arc-fw"})})]}):Ed(V)},Mr)},xa=(V,Lr)=>{const hr=V.options.filter(bo);if(hr.length===0)return null;const Mr=V.options.find(Ad);return(0,n.jsxs)("optgroup",{label:V.label,disabled:V.disabled||void 0,children:[O&&Mr&&(0,n.jsx)("legend",{"arc-select-option-group-legend":"",children:Jr(Mr)}),hr.map(ga)]},V.itemId??`${V.label}-${Lr}`)};return(0,n.jsxs)(o,{...ar,"arc-select":"","arc-input":"select","data-layout":or,"data-size":a,"data-variant":e,children:[N&&(0,n.jsxs)(Ar.Header,{children:[(0,n.jsx)(Ar.HeaderLabel,{htmlFor:K,children:l}),!!d&&(0,n.jsx)(Ar.Spacer,{}),(0,n.jsx)(Ar.HeaderSlot,{children:d})]}),(0,n.jsx)(Ar.InputBody,{children:(0,n.jsxs)("select",{...y,name:y?.name??S,onBlur:y?.onBlur??D,onChange:y?.onChange??B,onFocus:y?.onFocus??F,onInput:y?.onInput??T,"aria-describedby":y?.["aria-describedby"]??C,"aria-label":y?.["aria-label"]??W,"aria-labelledby":y?.["aria-labelledby"]??H,value:v,defaultValue:v==null?X:void 0,required:b,disabled:$,ref:x,id:K,"aria-disabled":nr,"aria-required":M,"data-readonly":gr,"data-placeholder":dr||void 0,style:{..._?{"--js\u2022max\u2022width":_}:{},...y?.style},children:[(0,n.jsxs)("button",{"arc-select-button":"",children:[j&&(0,n.jsx)(Yr,{"arc-select-placeholder":"",text:i,overflow:"truncate"}),(0,n.jsx)("selectedcontent",{}),(0,n.jsx)("span",{"aria-hidden":!0,children:(0,n.jsx)(cr,{icon:"fa-regular fa-angle-down arc-fw"})})]}),Z&&(0,n.jsx)("option",{value:"",disabled:!0,hidden:!0,children:i}),t.map((V,Lr)=>Nn(V)?xa(V,Lr):bo(V)?ga(V):null)]})}),L&&(0,n.jsxs)(Ar.Footer,{children:[(0,n.jsx)(Ar.FooterCaption,{children:u}),!!g&&(0,n.jsx)(Ar.Spacer,{}),(0,n.jsx)(Ar.FooterSlot,{children:g})]})]})});ir("ArcSelect",vf);const ff=q(aa,["inherit","md","sm"]),Hr={On:"on",Off:"off"},$o={Before:"before",After:"after"},mf=({disabled:r,id:a,name:e,size:o="md",value:t,labelOff:i,labelOn:c,onChange:l,...d})=>{const u=Ir(e,"arc-switch-name"),g=Ir(a?`${a}-off`:void 0,"arc-switch-off"),p=Ir(a?`${a}-on`:void 0,"arc-switch-on"),v=y=>{if(y.code==="Space"){y.preventDefault(),y.stopPropagation();const z=t===Hr.On?Hr.Off:Hr.On;l?.({value:z},y)}},m=y=>{const z={on:Po(c),off:Po(i)};return z?.on&&z?.off?z[y]:!z?.on&&z?.off?`${z?.off}: ${y}`:z?.on&&!z?.off?`${z?.on}: ${y}`:z[y]},b=(0,n.jsxs)(un,{type:"switch",onKeyDown:v,children:[(0,n.jsx)(Qo,{type:"switch",name:u,id:g,value:Hr.Off,checked:t===Hr.Off,disabled:r,"aria-label":m(Hr.Off)?.trim(),onChange:l}),(0,n.jsx)(Qo,{type:"switch",name:u,id:p,value:Hr.On,checked:t===Hr.On,disabled:r,"aria-label":m(Hr.On)?.trim(),onChange:l}),(0,n.jsx)("span",{"data-element":"mask"})]}),$=!c&&t===Hr.Off?p:g,k=!i&&t===Hr.On?g:p,_=!!(c||i)&&(0,n.jsxs)(n.Fragment,{children:[!!i&&(0,n.jsx)(me,{htmlFor:$,"arc-switch-label":c?Hr.Off:"",children:(0,n.jsx)(Oe,{children:i})}),b,!!c&&(0,n.jsx)(me,{htmlFor:k,"arc-switch-label":i?Hr.On:"",children:(0,n.jsx)(Oe,{children:c})})]});return(0,n.jsx)("span",{...d,"arc-switch":"","data-state":t,"data-size":o,role:"radiogroup",children:_||b})},Pr=s`--arc•switch`,$r=s`${Pr}•knob`,bf=s`
@layer arc-components {

  [arc-switch] {
    ${Pr}•background: var(--arc-color-alpha-white-100);
    ${$r}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${Pr}•background: var(--arc-color-alpha-white-70);
      ${$r}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${I}•background: var(--arc-color-bg-neutral-subtle);
      ${I}•border•color: var(--arc-color-border-stark);
      ${$r}•border•color: var(--arc-color-border-on-stark);
      ${$r}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${I}•border•color: var(--arc-color-border-heavy);
        ${$r}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${I}•background: var(--arc-color-bg-disabled);
        ${I}•border•color: var(--arc-color-border-disabled);
        ${$r}•border•color: var(--arc-color-border-on-stark);
        ${$r}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${I}•background: var(--arc-color-bg-theme-heavy);
      ${I}•border•color: var(--arc-color-border-theme-heavy);
      ${$r}•border•color: var(--arc-color-border-theme-heavy);
      ${$r}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${I}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${I}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${Pr}•font•size: 1em;
      ${Pr}•width: 2.5em;
      ${Pr}•height: 1.5em;
      ${Pr}•gap: 0.5em;
      ${$r}•size: 1.5em;
      ${$r}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${Pr}•font•size: var(${f}•14);
      ${Pr}•width: var(${f}•40);
      ${Pr}•height: var(${f}•24);
      ${Pr}•gap: var(${f}•8);
      ${$r}•x•shift: var(${f}•4);
      ${$r}•size: var(${f}•24);
    }

    &[data-size=sm] {
      ${Pr}•font•size: var(${f}•12);
      ${Pr}•width: var(${f}•30);
      ${Pr}•height: var(${f}•14);
      ${Pr}•gap: var(${f}•8);
      ${$r}•x•shift: var(${f}•1);
      ${$r}•size: var(${f}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${I}•border•radius: var(--arc-border-radius-pill);
    ${I}•width: var(${Pr}•width);
    ${I}•height: var(${Pr}•height);
    ${I}•x•shift: var(${$r}•x•shift);
    ${I}•size: var(${$r}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${$r}•translate: calc(-100% + var(${$r}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${$r}•translate: calc(0% - var(${$r}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${Pr}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${Pr}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${I}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${$r}•translate);

      display: inline-flex;
      width: var(${$r}•size);
      height: var(${$r}•size);

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

      background: var(${$r}•color);
      box-shadow: var(${$r}•shadow);
      border: var(${I}•border•width) solid var(${$r}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,$f=({disabled:r,id:a,name:e,size:o="md",value:t,label:i,labelPosition:c=$o.After,onChange:l,labelOff:d,labelOn:u,...g})=>{const p=Ir(e,"arc-switch-name"),v=Ir(a,"arc-switch"),m=(k,_)=>{const y=k.checked?Hr.On:Hr.Off;l?.({...k,value:y},_)};!i&&(u||d)&&(i=u||d,c=u?$o.After:$o.Before);const b=(0,n.jsxs)(un,{type:"checkbox",children:[(0,n.jsx)(Qo,{type:"checkbox",name:p,id:v,checked:t===Hr.On,disabled:r,role:"switch","aria-checked":t===Hr.On,"aria-label":i?void 0:"Toggle switch",tabIndex:0,onChange:m}),(0,n.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,n.jsx)(me,{htmlFor:v,"arc-switch-label":c,children:(0,n.jsx)(Oe,{children:i})});return d&&u?(0,n.jsx)(mf,{...g,disabled:r,id:a,name:e,labelOff:d,labelOn:u,size:o,value:t,onChange:l}):(0,n.jsxs)("span",{...g,"arc-switch":"","data-state":t,"data-size":o,"data-label-position":c,role:"presentation","aria-live":"off",children:[i&&c===$o.Before&&$,b,i&&c===$o.After&&$]})};ir("ArcSwitch",bf);const yf=["title","heading","subheading","body"],Id=["h1","h2","h3","h4","h5","h6"],jd=["code","div","li","p","pre","span"],Ld=[...Id,...jd],xf=[...re],kf=["title-inherit","title-lg","title-md","title-sm"],wf=["heading-inherit","heading-lg","heading-md","heading-sm"],Cf=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Af=q(zr,["inherit","primary","primary-inverse"]),Sf=["body-inherit","body-lg","body-md","body-sm","body-xs"],zf=Kr(zr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),Ef=q(St,["inherit","start","center","justify","end"]),_f=q(zt,["inherit","loose","standard","tight"]),Tf={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},If=r=>{const{align:a,lineHeight:e,size:o,variant:t,scheme:i="auto",isMonospace:c,tag:l,...d}=r,u=Tf?.[l]??"body",g=o?.includes("inherit")?o?.split("-")?.[0]:o,p=t?.endsWith("-inverse");let v;return i!=="auto"?v=i:p&&(v=void 0),{...d,"arc-text":g||u,"arc-scheme":v,"data-is-monospace":c?"":void 0,"data-align":a?.includes("inherit")?void 0:a,"data-variant":t?.includes("inherit")?void 0:t,"data-line-height":e?.includes("inherit")?void 0:e}},de=s`--arc•text`,Fi=s`${de}•font`,yo=s`${de}•align`,qa=s`${de}fg`,Rd=s`${de}•flex`,Pd=s`${de}•hyphens`,bt=s`${de}•letterspacing`,Za=s`${de}•lineheight`,Md=s`${de}•opacity`,Bd=s`${de}•whitespace`,Ke=s`${Fi}•family`,Rr=s`${Fi}•size`,xo=s`${Fi}•weight`,jf=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${yo}: unset;
  ${qa}: unset;
  ${Rd}: unset;
  ${Pd}: auto;
  ${bt}: unset;
  ${Za}: unset;
  ${Md}: unset;
  ${Bd}: unset;

  ${Ke}: unset;
  ${Rr}: unset;
  ${xo}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${Za}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${Za}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${Za}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${yo}: start;
  }

  &[data-align=center] {
    ${yo}: center;
  }

  &[data-align=justify] {
    ${yo}: justify;
  }

  &[data-align=end] {
    ${yo}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${qa}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${qa}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${qa}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${qa}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${qa}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${qa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${qa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${qa}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Ke}: var(--arc-font-family-title);
  ${xo}: var(--arc-font-weight-title);
  ${bt}: var(--arc-letter-spacing-title);
  ${Za}: var(--arc-line-height-title);

  ${Rr}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Rr}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${Rr}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${Rr}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Ke}: var(--arc-font-family-heading);
  ${xo}: var(--arc-font-weight-heading);
  ${bt}: var(--arc-letter-spacing-heading);
  ${Za}: var(--arc-line-height-heading);

  ${Rr}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Rr}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Rr}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Rr}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Ke}: var(--arc-font-family-subheading);
  ${xo}: var(--arc-font-weight-subheading);
  ${bt}: unset;
  ${Za}: var(--arc-line-height-subheading);

  ${Rr}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Rr}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Rr}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Rr}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Ke}: var(--arc-font-family-body);
  ${xo}: var(--arc-font-weight-body);
  ${Za}: var(--arc-line-height-body);
  ${Rr}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Rr}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${Rr}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${Rr}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${Rr}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${Rr}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Ke}: var(--arc-font-family-mono);
  ${Za}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Rd}));
  hyphens: var(--arc-text-hyphens, var(${Pd})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${Md}));
  text-align: var(--arc-text-align, var(${yo}));
  white-space: var(--arc-text-white-space, var(${Bd}));

  color: var(--arc-text-color, var(${qa}));

  font-size: var(--arc-text-font-size, var(${Rr}));
  font-family: var(--arc-text-font-family, var(${Ke}));
  font-weight: var(--arc-text-font-weight, var(${xo}));
  line-height: var(--arc-text-line-height, var(${Za}));
  letter-spacing: var(--arc-text-letter-spacing, var(${bt}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Lf=r=>(0,h.forwardRef)((a,e)=>(0,h.createElement)(r,{...If({...a,tag:r}),ref:e})),Rf=[...Ld].reduce((r,a)=>({...r,[a]:Lf(a)}),{});ir("Arc",jf);const Pf=q(zr,["common","ai","critical"]),Dd=[...re],Od=["default","success","warning","error"],Fd=q(aa,["inherit","md"]),Nd=q(zr,["common"]),Hd=[...ze],Mf=[...Ye],Vd=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Bf=Pf.filter(r=>r!=="critical"),Ud={size:Fd[1],variant:Nd[0],scheme:Dd[2],popover:Hd[2],placement:Vd[4],severity:Od[0],showDismiss:!0},Wd=(r,a="toggle")=>{const e=document.getElementById(r);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[a]()},Kd=s`--arc•progress`,Df=s`${Kd}•bar`,Of=s`${Kd}•value`,Gd=s`${Df}•bg`,$t=s`${Of}•bg`,Ff=s`
@layer arc-components {
[arc-progress-bar] {
  ${Gd}: var(--arc-color-alpha-subtle);
  ${$t}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${$t}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${$t}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${f}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${Gd}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${$t}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${$t}));
  }
}

}
`,Nf=({progress:r=0,variant:a="common",...e})=>(0,n.jsxs)("progress",{...e,"arc-progress-bar":"","data-variant":a,value:r,max:e.max||100,"aria-valuenow":r,"aria-valuemax":e.max||100,children:[r,"% "]});ir("ArcProgressBar",Ff);const Xa=s`--arc•toast`,Hn=s`${Xa}•content`,Yd=s`${Xa}•color`,qd=s`${Xa}•background`,yt=s`${Xa}•icon•color`,xt=s`${Xa}•transition`,Hf=s`
@layer arc-components {

  [arc-toast] {
    ${Hn}•gap: var(${E}•2);
    ${xt}•duration: 300ms;
    ${yt}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${Xa}•font•size: var(${f}•16);
      ${Hn}•font•size: var(${f}•14);
    }

    &[data-size=inherit] {
      ${Xa}•font•size: 1em;
      ${Hn}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${yt}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${yt}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${yt}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${qd}: var(--arc-color-bg-mono);
      ${Yd}: var(--arc-color-fg-primary);
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
    margin: var(--arc-toast-offset, var(${E}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${Xa}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Yd}));
    background-color: var(--arc-toast-background, var(${qd}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${E}•12) var(${E}•12) var(${E}•12) var(${E}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${Xa}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${Xa}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${E}•8) var(${E}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${E}•8);
      padding: var(${E}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${yt}));

      height: 1lh;
      padding: 0 var(${E}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Hn}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${E}•2);
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
      display var(${xt}•duration) allow-discrete,
      overlay var(${xt}•duration) allow-discrete,
      content-visibility var(${xt}•duration) allow-discrete,
      opacity var(${xt}•duration);
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
`,Zd=({id:r,children:a,icon:e,heading:o,subtext:t,dismissProps:i,showDismiss:c=!0,onClose:l,actionSlot:d,size:u="md",variant:g="common",scheme:p=Ud.scheme,placement:v="bottom-left",getToastId:m,progressBarProps:b,severity:$,...k})=>{const _=()=>{l?.()},y=p==="auto"?void 0:p,z=!!d||c,x=Ir(r,"arc-toast"),{variant:S,hierarchy:D,...B}=i||{};(0,h.useEffect)(()=>{m?.(x)},[m,x]);const F=gc(e);return(0,n.jsx)("div",{...k,"arc-toast":"","arc-scheme":y,"data-size":u,"data-variant":g,"data-placement":v,"data-severity":$||void 0,id:x,children:(0,n.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[e&&(0,n.jsx)(cr,{icon:F,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:a||(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:o})}),t&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:t})]})})]}),z&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[d,c&&(0,n.jsx)(kr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...B,popoverTarget:x,onClick:_})]}),b&&(0,n.jsx)(Nf,{...b,variant:$==="error"?"critical":b.variant,"arc-toast-progress-bar":""})]})})};Zd.handleToast=Wd,ir("ArcToast",Hf);var kt;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(kt||(kt={}));const Vf=(r,a,e)=>{const[o,t]=(0,h.useState)(a),[i,c]=Yp(r,a),[l,d]=Mi(r,a);return e===kt.Temporary?[i,c]:e===kt.Persistent?[l,d]:[o,t]},Uf=["auto","hex","hexa","rgb","hsl","oklch"],Wf=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
