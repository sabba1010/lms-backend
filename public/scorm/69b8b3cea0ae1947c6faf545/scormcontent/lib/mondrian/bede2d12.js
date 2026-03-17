"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[539],{2539:(e,t,a)=>{function r(e){return`assets/${e}`}a.r(t),a.d(t,{applyReviewDataToManifest:()=>yp,default:()=>Ip,searchItemsByLesson:()=>wp});var i=a(4982);const o=e=>e.map((e=>e.toString().padStart(2,"0"))),n=(e,t=!0)=>{const a=(e=>{if(e<=0||isNaN(e))return;const t=Math.min(Math.floor(e/3600),0),a=Math.floor(e/60)-60*t;return{hours:t,minutes:a,seconds:e-60*a-3600*t}})(e);if(!a)return(t?"":"0")+"0:00";const{hours:r,minutes:i,seconds:n}=a,l=r>0?[r,i,n]:[i,n],[s,...c]=l;return(t?[s,...o(c)]:o(l)).join(":")},l=({a11yMediaRemainingTime:e},t)=>`${e}: ${n(t)}`,s=Object.values,c=Object.entries,d=Object.keys,p=Object.assign,h="var(--mon-theme-font-heading)",m="var(--mon-theme-font-body)",u=17,g=1.25,f="#000000",v={1:{textContent:"Heading 1",fontSize:40,lineHeight:g,fontFamily:h},2:{textContent:"Heading 2",fontSize:32,lineHeight:g,fontFamily:h},3:{textContent:"Heading 3",fontSize:24,lineHeight:g,fontFamily:h},4:{textContent:"Heading 4",fontSize:20,lineHeight:g,fontFamily:h},5:{textContent:"Heading 5",fontSize:18,lineHeight:g,fontFamily:h},6:{textContent:"Heading 6",fontSize:16,lineHeight:g,fontFamily:h}};var S=a(9679),I=a(3092),b=a.n(I),x=a(4198),w=a(3004),y=a(4758),k=a(1212),C=a(4959),T=a(3652),B=a(2359),M=a(31),L=a(2740),A=a(2559),D=a(5873),F=a(9395);function z(e,t){if(!e)return null;const a=e.match(/^\s*(\d+(\.\d+)?)\s*(cm|mm|in|px|pt|pc|em|rem|ex|ch|q|)\s*$/i);if(!a)return null;const r=Number(a[1]),i=a[3].toLowerCase();if(isNaN(r))return null;let o=null;switch(i){case"cm":o=r/2.54*96;break;case"mm":o=r/25.4*96;break;case"in":o=96*r;break;case"px":o=r;break;case"pt":o=r/72*96;break;case"pc":o=r/6*96;break;case"em":null!=t&&(o=r*t);break;case"rem":o=10*r;break;case"ex":null!=t&&(o=r*t*.45);break;case"ch":null!=t&&(o=r*t*.5);break;case"q":o=r/2.54*96/40}return{rawValue:r,unit:i,pixelValue:o}}var V=a(9777);function J(e){return"string"==typeof e?e.replace(/[:;]/g,""):"number"==typeof e?String(e):""}function $({attributes:e,chain:t,editor:a,selection:r}){const i=[];a.state.doc.nodesBetween(r.from,r.to,((e,t)=>{"listItem"===e.type.name&&i.push({node:e,pos:t})}));const o=r.$from.start()===r.from;if(i.length>1){for(const{node:a,pos:n}of i)(o||n>=r.from&&n<=r.to)&&t.setTextSelection({from:n,to:n+a.nodeSize}).updateAttributes("listItem",e);t.setTextSelection({from:r.from,to:r.to})}else a.isActive("listItem")&&o&&t.updateAttributes("listItem",e);return t}function P(e,t){for(let a=e;a;a=a.parentElement){const e=a.style.getPropertyValue(t);if(e)return e}return""}function R(e,t){for(let a=e;a;a=a.parentElement)if(a.tagName===t)return!0;return!1}const Z=c(v).map((([e,t])=>({tag:"H"+e,size:t.fontSize})));function O(e){const t=P(e,"font-size");if(!t){for(const{tag:t,size:a}of Z)if(R(e,t))return a;return u}const a=z(t,null);return a&&a.pixelValue?a.pixelValue:u}const _=x.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{textSize:{default:u,parseHTML:e=>Math.round(O(e)),renderHTML:e=>({style:`font-size: ${Number(e.textSize)}px`})}}}],addCommands:()=>({setTextSize:e=>({chain:t,editor:a,tr:{selection:r}})=>{const i=t().setMark("textStyle",{textSize:e});return $({attributes:{textSize:e},chain:i,editor:a,selection:r}).run()}})}),j=x.YY.create({name:"lineHeight",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{lineHeight:{default:2,parseHTML(e){const t=e.style.lineHeight,a=O(e),r=z(t,a);return!r||r.rawValue<=0?null:""===r.unit?r.rawValue:null!=r.pixelValue&&null!=a?r.pixelValue/a:null},renderHTML:e=>({style:`line-height: ${Number(e.lineHeight)}`})}}}],addCommands:()=>({setLineHeight:e=>({commands:t})=>{const a=t.updateAttributes("paragraph",{lineHeight:e}),r=t.updateAttributes("heading",{lineHeight:e});return a&&r}})}),Y=x.YY.create({name:"spaceAfter",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{spaceAfter:{default:0,parseHTML(e){const t=e.style.marginBlockEnd||e.style.marginBottom,a=z(t,O(e))?.pixelValue;return null!=a&&a>0?a:null},renderHTML:e=>({style:`margin-block-end: ${Number(e.spaceAfter)}px`})}}}],addCommands:()=>({setSpaceAfter:e=>({commands:t})=>{const a=t.updateAttributes("paragraph",{spaceAfter:e}),r=t.updateAttributes("heading",{spaceAfter:e});return a&&r}})}),H=x.YY.create({name:"fontFamily",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{fontFamily:{default:m,parseHTML:e=>e.style.fontFamily,renderHTML:e=>e.fontFamily?{style:`font-family: ${J(e.fontFamily)}`}:{}}}}],addCommands:()=>({setFontFamily:e=>({chain:t,editor:a,tr:{selection:r}})=>{const i=t();return i.setMark("textStyle",{fontFamily:e}),$({attributes:{fontFamily:e},chain:i,editor:a,selection:r}).run()}})}),E=x.YY.create({name:"color",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{color:{default:null,parseHTML(e){let t=e.style.color;return t||"LI"===e.tagName||(t=P(e,"color")),t&&(t=t.replace(/['"]+/g,"")),t&&(t=function(e){const t=(0,V.Mj)(e);return t.isValid()?t.toHex().toUpperCase().slice(0,7):e}(t)),t||void 0},renderHTML:e=>e.color?{style:`color: ${J(e.color)}`}:{}}}}],addCommands:()=>({setColor:e=>({chain:t,editor:a,tr:r})=>{const{selection:i}=r,o=t();return o.setMark("textStyle",{color:e}),a.getAttributes("link").href&&o.updateAttributes("link",{unlinkColor:e}),!0===r.getMeta("linkUpdateColorChange")?o.run():$({attributes:{color:e},chain:o,editor:a,selection:i}).run()},unsetColor:()=>({chain:e,editor:t,tr:{selection:a}})=>{const r=e();return r.setMark("textStyle",{color:null}).removeEmptyTextStyle(),$({attributes:{color:null},chain:r,editor:t,selection:a}).run()}})}),G=w.Ay.extend({addAttributes(){const e=this.parent(),t=e.color.renderHTML;return e.color.renderHTML=({color:e})=>t({color:J(e)}),e}}).configure({multicolor:!0}),X=B.A.extend({addGlobalAttributes(){const e=this.parent(),t=e[0].attributes.textAlign.renderHTML;return e[0].attributes.textAlign.renderHTML=({textAlign:e})=>t({textAlign:J(e)}),e}}).configure({types:["heading","paragraph"]}),q={rel:"noopener noreferrer",target:"_blank"},N=k.Ay.extend({addAttributes(){return{...this.parent(),rel:{default:q.rel,parseHTML:e=>e.getAttribute("rel"),renderHTML:()=>({rel:q.rel})},target:{default:q.target,parseHTML:e=>e.getAttribute("target"),renderHTML:()=>({target:q.target})},unlinkColor:{default:f}}}}),U=x.YY.create({name:"init",addCommands:()=>({initFontFamily:()=>({chain:e})=>e().setFontFamily(m).run(),initLineHeight:()=>({chain:e})=>e().setLineHeight(2).run(),initTextSize:()=>({chain:e})=>e().setTextSize(u).run(),initColor:()=>({chain:e})=>e().setColor(f).run()})}),W="latestDefocusedSelectionDecoration",Q=x.YY.create({name:W,addProseMirrorPlugins:()=>[new A.k_({key:new A.hs(W),state:{init:e=>D.zF.empty,apply(e,t){const{doc:a,selection:r}=e,i=e.getMeta(W),o=r&&r.from!==r.to;if(!o||"focus"===i?.action)return D.zF.empty;if(o&&"blur"===i?.action){const e=D.NZ.inline(r.from,r.to,{class:"latest-defocused-selection",nodeName:"mark"});return D.zF.create(a,[e])}return t}},props:{decorations(e){return this.getState(e)},handleDOMEvents:{blur(e){const{tr:t}=e.state,a=t.setMeta(W,{from:t.selection.from,to:t.selection.to,action:"blur"});e.dispatch(a)},focus(e){const{tr:t}=e.state,a=t.setMeta(W,{from:t.selection.from,to:t.selection.to,action:"focus"});e.dispatch(a)}}}})]}),K=x.YY.create({name:"clearMarksOnEnter",addKeyboardShortcuts(){return{Enter:()=>{const{state:e}=this.editor,{selection:t}=e,{$from:a,empty:r}=t;if(!r)return!1;const i=a.parent;if("heading"!==i.type.name)return!1;const o=a.marks().filter((e=>"textStyle"===e.type.name));let n=null;o.length>0&&(n=o[0].attrs.color||null);const l=i.attrs.textAlign||"left";let s=this.editor.chain().splitBlock().setParagraph().setTextAlign(l);return s=s.unsetMark("bold").unsetMark("italic").unsetMark("underline").unsetMark("strike").unsetMark("highlight"),s=n?s.setMark("textStyle",{color:n}):s.unsetMark("textStyle"),s.run()}}}}),ee=[M.A,C.A.extend({excludes:"superscript"}),T.A.extend({excludes:"subscript"}),F.A.configure({code:!1,history:!1,heading:{levels:[1,2,3,4,5,6]}}),X,G,K,E,_,j,Y,L.A,y.A,H,U,Q,N.configure({HTMLAttributes:q,openOnClick:!1,protocols:["http","https","mailto"]})],te=(0,x._w)(ee),ae=S.ZF.fromSchema(te);function re(e){const t=(e.marks??=[]).find((e=>"highlight"===e.type));t?(t.attrs??={}).color="#FFFF00":e.marks.push({type:"highlight",attrs:{textSize:"inherit",color:"#FFFF00"}})}const ie={color:f,fontFamily:"var(--mon-theme-font-body)",textSize:u},oe=(e,t)=>ne({doc:t,contentTypes:["text"],callback:t=>{if(t.marks){const a=t.marks.find((e=>"link"===e.type));a?.attrs&&e(a.attrs.href)&&(a.attrs.href=void 0)}}});function ne({callback:e,contentTypes:t,doc:a}){for(const r of a.content??[])r.type&&t.includes(r.type)&&e(r,a),r.content&&ne({callback:e,contentTypes:t,doc:r});return a}const le=e=>!(!e.text?.trim()&&!e.content?.some(le));function se(e,t,a,r){Object.hasOwn(e,a)||(e[a]={states:{}}),null!=r&&(e[a].translationId=r);const{states:i}=e[a];return Object.hasOwn(i,t)||(i[t]={}),i[t]}function ce(e,t,a){return t<e?e:t>a?a:t}function de({fromPoint:e,fromValue:t,toPoint:a,toValue:r},i){const o=i.x-e.x,n=i.y-e.y,l=a.x-e.x,s=a.y-e.y,c=(o*l+n*s)/(l*l+s*s);return(1-c)*t+c*r}function pe({fromPoint:e,fromValue:t,toPoint:a,toValue:r},i){const o=(i-t)/(r-t),n=1-o;return{x:e.x*n+a.x*o,y:e.y*n+a.y*o}}function he({fromPoint:e,i:t,j:a},r){const i=pe({fromPoint:e,...t},r.x),o=pe({fromPoint:e,...a},r.y);return{x:i.x+o.x-e.x,y:i.y+o.y-e.y}}const{sqrt:me,min:ue,atan2:ge,tan:fe,PI:ve,abs:Se}=Math;function Ie(e,t,a){const r=ue(.5*e.l,.5*t.l,a);if(r<.1)return null;let i=1,o=ge(e.y0-e.y3,e.x0-e.x3)-ge(t.y3-t.y0,t.x3-t.x0);o<0&&(o=-o,i^=1),o>ve&&(o=2*ve-o,i^=1);const n=fe(.5*o)*r;if(n<.1||n>1e6)return null;const l=1-r/e.l,s=r/t.l,c=e.x0*(1-l)+e.x3*l,d=e.y0*(1-l)+e.y3*l,p=t.x0*(1-s)+t.x3*s,h=t.y0*(1-s)+t.y3*s;return e.x2=c,e.y2=d,t.x1=p,t.y1=h,`A ${n} ${n} 0 0 ${i} ${p},${h}`}function be(e,t,a,r,i){if(t.length<2)throw new Error("emitPathRounded must have at least two path components!");const o=[],{p:{x:n,y:l}}=e;let s=n,c=l;function d(e,t){const a=e.x,o=e.y,n=`${a*r},${o*i}`;return t&&(s=a,c=o),n}function p(e,t){const a=e.x+s,o=e.y+c,n=`${a*r},${o*i}`;return t&&(s=a,c=o),n}function h(e,t,a){let n=e,l=t;a&&(n+=s,l+=c);const d=s*r,p=c*i,h=n*r,m=l*i,u=d-h,g=p-m,f=me(u*u+g*g);o.push({x0:d,y0:p,x1:d,y1:p,x2:h,y2:m,x3:h,y3:m,l:f}),s=n,c=l}for(const e of t)switch(e.cmd){case"T":o.push(`T ${d(e.p,!0)}`);break;case"t":o.push(`T ${p(e.p,!0)}`);break;case"Q":o.push(`Q ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"q":o.push(`Q ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"S":o.push(`S ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"s":o.push(`S ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"C":o.push(`C ${d(e.c1,!1)} ${d(e.c2,!1)} ${d(e.p,!0)}`);break;case"c":o.push(`C ${p(e.c1,!1)} ${p(e.c2,!1)} ${p(e.p,!0)}`);break;case"A":o.push(`A ${e.radius.x*r} ${e.radius.y*i} ${e.angle} ${+e.large} ${+e.sweep} ${d(e.p,!0)}`);break;case"a":o.push(`A ${e.radius.x*r} ${e.radius.y*i} ${e.angle} ${+e.large} ${+e.sweep} ${p(e.p,!0)}`);break;case"H":h(e.v,c,!1);break;case"h":h(e.v,0,!0);break;case"V":h(s,e.v,!1);break;case"v":h(0,e.v,!0);break;case"L":h(e.p.x,e.p.y,!1);break;case"l":h(e.p.x,e.p.y,!0)}return(Se(s-n)>.01||Se(c-l)>.01)&&h(n,l,!1),function(e,t,a,r){const i=[];for(let e=0;e<a.length;e+=1){const t=a[e],o=a[e+1]??a[0];if(i.push(t),"string"!=typeof t&&"string"!=typeof o){const e=Ie(t,o,r);e&&i.push(e)}}const o=i[0],n=["string"==typeof o?`M ${e},${t}`:`M ${o.x1},${o.y1}`];for(let e=0;e<i.length;e+=1){const t=i[e];"string"==typeof t?n.push(t):e!==i.length-1&&n.push(`L ${t.x2},${t.y2}`)}return n.push("Z"),n.join(" ")}(n,l,o,a)}function xe({width:e,height:t}){return{fromPoint:{x:0,y:0},i:{fromValue:1,toPoint:{x:e,y:0},toValue:0},j:{fromValue:.5,toPoint:{x:0,y:t},toValue:-.5}}}const we={discriminator:"arrow",paths({cornerRounding:e,thickness:t,headLength:a},{width:r,height:i}){const o=1-a;return[{d:be({cmd:"M",p:{x:0,y:.5-t}},[{cmd:"H",v:o},{cmd:"V",v:0},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:o,y:1}},{cmd:"V",v:.5+t},{cmd:"H",v:0}],e,r,i),fill:!0,dash:!0}]},textExtents({thickness:e,headLength:t}){const a=.5-e;return{left:0,top:a,width:2*a*t+(1-t),height:.5+e-a}},getControlPoints:({thickness:e,headLength:t},a,r,i,o)=>[{position:he(xe(a),{x:t,y:e}),style:"normal"}],dragControlPoint(e,t,a,r,i,o){const n=function({fromPoint:e,i:t,j:a},r){return{x:de({fromPoint:e,...t},r),y:de({fromPoint:e,...a},r)}}(xe(t),r);return{...e,thickness:ce(.1,n.y,.5),headLength:ce(.1,n.x,.9)}}},ye={discriminator:"bookmark",textExtents:({cutoutInset:e})=>({left:0,top:0,width:1,height:1-e}),paths:({cornerRounding:e,cutoutInset:t},{width:a,height:r})=>[{d:be({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:.5,y:1-t}},{cmd:"L",p:{x:1,y:1}},{cmd:"L",p:{x:1,y:0}},{cmd:"L",p:{x:0,y:0}}],e,a,r),fill:!0,dash:!0}],getControlPoints:({cutoutInset:e},t)=>[{position:pe(ke(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,cutoutInset:ce(0,de(ke(t)[a],r),.8)})};function ke({width:e,height:t}){const a=.5*e;return[{fromPoint:{x:a,y:.2*t},fromValue:.8,toPoint:{x:a,y:t},toValue:0}]}function Ce({width:e,height:t}){return[{fromPoint:{x:.3*e,y:.5*t},fromValue:.3,toPoint:{x:0,y:.5*t},toValue:0},{fromPoint:{x:.7*e,y:.5*t},fromValue:.7,toPoint:{x:1*e,y:.5*t},toValue:1}]}const Te={discriminator:"chevron",paths:({cornerRounding:e,insideCenterXCoord:t,outsideCornerXCoords:a},{width:r,height:i})=>[{d:be({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:a,y:0}},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:a,y:1}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:t,y:.5}},{cmd:"L",p:{x:0,y:0}}],e,r,i),fill:!0,dash:!0}],textExtents:({insideCenterXCoord:e,outsideCornerXCoords:t})=>({left:e,top:0,width:t-e,height:1}),getControlPoints({insideCenterXCoord:e,outsideCornerXCoords:t},a){const r=Ce(a);return[e,t].map(((e,t)=>({position:pe(r[t],e),style:"normal"})))},dragControlPoint(e,t,a,r){const i=de(Ce(t)[a],r),o={...e};switch(a){case 0:o.insideCenterXCoord=ce(0,i,.3);break;case 1:o.outsideCornerXCoords=ce(.7,i,1)}return o}},Be=[{cmd:"M",p:{x:217.234,y:57.006}},{cmd:"C",c1:{x:217.785,y:54.084},c2:{x:218.073,y:51.069},p:{x:218.073,y:47.986}},{cmd:"C",c1:{x:218.073,y:21.4841},c2:{x:196.796,y:0},p:{x:170.549,y:0}},{cmd:"C",c1:{x:154.49,y:0},c2:{x:140.291,y:8.043},p:{x:131.689,y:20.3575}},{cmd:"C",c1:{x:123.43,y:13.3566},c2:{x:112.778,y:9.1402},p:{x:101.151,y:9.1402}},{cmd:"C",c1:{x:75.1559,y:9.1402},c2:{x:54.036,y:30.2136},p:{x:53.6331,y:56.364}},{cmd:"C",c1:{x:24.4644,y:56.364},c2:{x:.82373,y:80.235},p:{x:.82373,y:109.682}},{cmd:"C",c1:{x:.82373,y:139.129},c2:{x:24.4644,y:163},p:{x:53.6272,y:163}},{cmd:"L",p:{x:209.021,y:163}},{cmd:"C",c1:{x:238.183,y:163},c2:{x:261.824,y:139.129},p:{x:261.824,y:109.682}},{cmd:"C",c1:{x:261.824,y:83.056},c2:{x:242.496,y:60.99},p:{x:217.234,y:57.006}},{cmd:"Z"}],Me={left:20/262,top:50/163,width:222/262,height:113/163},Le={discriminator:"cloud",paths(e,{width:t,height:a}){const r=function(e,t=1,a=1){const r=[];let i=0,o=0;function n(e,r){const n=e.x,l=e.y,s=`${(n-i)*t},${(l-o)*a}`;return r&&(i=n,o=l),s}function l(e,r){const n=e.x,l=e.y,s=`${n*t},${l*a}`;return r&&(i+=n,o+=l),s}for(const s of e)switch(r.push(s.cmd.toLowerCase()),s.cmd){case"M":case"L":case"T":r.push(n(s.p,!0));break;case"m":case"l":case"t":r.push(l(s.p,!0));break;case"H":r.push(n({x:s.v,y:o},!0));break;case"V":r.push(n({x:i,y:s.v},!0));break;case"h":r.push(l({x:s.v,y:0},!0));break;case"v":r.push(l({x:0,y:s.v},!0));break;case"C":r.push(n(s.c1,!1),n(s.c2,!1),n(s.p,!0));break;case"c":r.push(l(s.c1,!1),l(s.c2,!1),l(s.p,!0));break;case"S":case"Q":r.push(n(s.c,!1),n(s.p,!0));break;case"s":case"q":r.push(l(s.c,!1),l(s.p,!0));break;case"A":r.push(s.radius.x*t,s.radius.y*a,s.angle,+s.large,+s.sweep,n(s.p,!0));break;case"a":r.push(s.radius.x,s.radius.y,s.angle,+s.large,+s.sweep,l(s.p,!0))}return r.join(" ")}(Be,t/262,a/163);return[{d:r,fill:!0,dash:!0}]},textExtents:e=>Me},Ae={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},De={discriminator:"ellipse",paths(e,{width:t,height:a}){let r="m 0 0";return r+=` m ${t} ${a/2}`,r+=` a ${t/2} ${a/2} 0 0 1 ${-t},0`,r+=` a ${t/2} ${a/2} 0 0 1 ${t},0`,r+=" z",[{d:r,fill:!0,dash:!0}]},textExtents:e=>Ae},Fe=Math.sqrt(3)/2,{abs:ze,max:Ve}=Math,Je={left:0,top:0,width:1,height:1},{circle:$e,square:Pe,diamond:Re,triangle:Ze}={circle:(e,t,a,r)=>`M ${a-.5*e},${r} a ${.5*t} ${.5*t} 0 0 0 ${e} 0 a ${.5*t} ${.5*t} 0 0 0 ${-e} 0 z`,square:(e,t,a,r)=>`M ${a-.5*e},${r+.5*t} h ${e} v ${-t} h ${-e} z`,diamond:(e,t,a,r)=>`M ${a-.5*e},${r} l ${.5*e},${.5*t} l ${.5*e},${-.5*t}, l ${-.5*e},${-.5*t} z`,triangle:(e,t,a,r,i)=>`M ${a+.5*i},${r} l ${e*Fe}, ${.5*t} v ${-t} z`},Oe={none:(e,t,a,r,i)=>({used:.5*ze(i),path:null}),arrow:(e,t,a,r,i)=>({used:.5*ze(i),path:{d:`M ${a+.5*e+.5*i},${r+.5*t} l ${-.5*e},${-.5*t} l ${.5*e},${-.5*t}`,fill:!1,dash:!1}}),stop:(e,t,a,r,i)=>({used:.5*ze(i),path:{d:`M ${a+.5*i} ${r+.5*t} v ${-t}`,fill:!1,dash:!1}}),circle:(e,t,a,r)=>({used:.5*t,path:{d:$e(e,t,a,r),fill:!1,dash:!1}}),square:(e,t,a,r)=>({used:.5*t,path:{d:Pe(e,t,a,r),fill:!1,dash:!1}}),diamond:(e,t,a,r)=>({used:.5*t,path:{d:Re(e,t,a,r),fill:!1,dash:!1}}),triangle:(e,t,a,r,i)=>({used:t*Fe+.5*ze(i),path:{d:Ze(e,t,a,r,i),fill:!1,dash:!1}}),"circle-filled":(e,t,a,r)=>({used:.5*t,path:{d:$e(e,t,a,r),fill:!0,dash:!1}}),"square-filled":(e,t,a,r)=>({used:.5*t,path:{d:Pe(e,t,a,r),fill:!0,dash:!1}}),"diamond-filled":(e,t,a,r)=>({used:.5*t,path:{d:Re(e,t,a,r),fill:!0,dash:!1}}),"triangle-filled":(e,t,a,r,i)=>({used:t*Fe+.5*ze(i),path:{d:Ze(e,t,a,r,i),fill:!0,dash:!1}})},_e={discriminator:"line",paths({from:{style:e},to:{style:t}},{width:a,height:r,borderWidth:i}){let o=3*i,n=3*i;if(o+n>a){const e=a/(o+n);o*=e,n*=e}const{used:l,path:s}=Oe[e](o,o,0,.5*r,i),{used:c,path:d}=Oe[t](-1*n,n,a,.5*r,-1*i),p=[{d:`M ${l},${.5*r} H ${a-c}`,fill:!1,dash:!0}];return s&&p.push(s),d&&p.push(d),p},textExtents:()=>Je,extraDrawSpace({width:e,height:t,borderWidth:a}){const r=Ve(3*a,3*a);return{width:r,height:r}}},je={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},Ye={discriminator:"octagon",paths({cornerRounding:e},{width:t,height:a}){const r=Math.min(t,a)/(1+Math.SQRT2)/Math.SQRT2;return[{d:be({cmd:"M",p:{x:r,y:0}},[{cmd:"L",p:{x:t-r,y:0}},{cmd:"L",p:{x:t,y:r}},{cmd:"L",p:{x:t,y:a-r}},{cmd:"L",p:{x:t-r,y:a}},{cmd:"L",p:{x:r,y:a}},{cmd:"L",p:{x:0,y:a-r}},{cmd:"L",p:{x:0,y:r}},{cmd:"L",p:{x:r,y:0}}],e,1,1),fill:!0,dash:!0}]},textExtents:e=>je},He={discriminator:"parallelogram",textExtents:({shear:e})=>e>.45?{left:.45,top:0,width:0,height:1}:{left:e,top:0,width:1-2*e,height:1},paths:({cornerRounding:e,shear:t},{width:a,height:r})=>[{d:be({cmd:"M",p:{x:1,y:0}},[{cmd:"L",p:{x:t,y:0}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1-t,y:1}},{cmd:"L",p:{x:1,y:0}}],e,a,r),fill:!0,dash:!0}],getControlPoints:({shear:e},t)=>[{position:pe(Ee(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,shear:ce(0,de(Ee(t)[a],r),.99)})};function Ee({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Ge={discriminator:"plus",textExtents:({stroke:e})=>({left:0,top:(1-e)/2,width:1,height:e}),paths({cornerRounding:e,stroke:t},{width:a,height:r}){const i=(1-t)/2;return[{d:be({cmd:"M",p:{x:i,y:0}},[{cmd:"L",p:{x:i,y:i}},{cmd:"L",p:{x:0,y:i}},{cmd:"L",p:{x:0,y:1-i}},{cmd:"L",p:{x:i,y:1-i}},{cmd:"L",p:{x:i,y:1}},{cmd:"L",p:{x:1-i,y:1}},{cmd:"L",p:{x:1-i,y:1-i}},{cmd:"L",p:{x:1,y:1-i}},{cmd:"L",p:{x:1,y:i}},{cmd:"L",p:{x:1-i,y:i}},{cmd:"L",p:{x:1-i,y:0}},{cmd:"L",p:{x:i,y:0}}],e,a,r),fill:!0,dash:!0}]},getControlPoints:({stroke:e},t)=>[{position:pe(Xe(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,stroke:ce(.01,de(Xe(t)[a],r),1)})};function Xe({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:1,toPoint:{x:e/2,y:t/2},toValue:0}]}const qe=`url(${function(e,t){const a=[...(new TextEncoder).encode('\n<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">\n  <g filter="url(#filter0_d_10962_163787)">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.5V2.5L15.6 14.1081H8.55353L8.40242 14.232L4 18.5Z" fill="white"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.7998V15.9998L7.969 13.1307L8.129 12.9916L13.165 12.9998L5 4.7998Z" fill="black"/>\n    <path d="M8.5 27.5C9.06115 27.5 9.48005 27.0493 9.51635 26.5351C9.74356 23.3161 12.3161 20.7436 15.5351 20.5163C16.0493 20.4801 16.5 20.0611 16.5 19.5C16.5 18.956 16.0524 18.4804 15.4691 18.5163C11.1973 18.7798 7.7798 22.1973 7.51632 26.4691C7.48035 27.0524 7.95597 27.5 8.5 27.5Z" fill="black" stroke="white" stroke-linejoin="round"/>\n  </g>\n  <defs>\n    <filter id="filter0_d_10962_163787" x="2.2" y="1.7" width="16.6" height="29.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n      <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n      <feOffset dy="1"/>\n      <feGaussianBlur stdDeviation="0.9"/>\n      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>\n      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10962_163787"/>\n      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10962_163787" result="shape"/>\n    </filter>\n  </defs>\n</svg>\n')].map((e=>String.fromCharCode(e))).join("");return"data:image/svg+xml;base64,"+btoa(a)}()}) 5 5, move`,Ne=["ne","nw","nw","ne"],{min:Ue}=Math,We={left:0,top:0,width:1,height:1},Qe={topLeft:0,topRight:0,bottomRight:0,bottomLeft:0};function Ke(e,t,a){return e+a<=t?e:e*t/(e+a)}function et(e,t,a,r,i){return Ue(Ke(a,t,e),Ke(a,r,i))}function tt({topLeft:e,topRight:t,bottomRight:a,bottomLeft:r},{width:i,height:o}){return{topLeft:et(r,o,e,i,t),topRight:et(e,i,t,o,a),bottomRight:et(t,o,a,i,r),bottomLeft:et(a,i,r,o,e)}}function at(e){if(!e)return!0;const{topLeft:t,topRight:a,bottomRight:r,bottomLeft:i}=e;return t===a&&t===r&&t===i}function rt({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:10,y:10},toValue:10},{fromPoint:{x:e,y:0},fromValue:0,toPoint:{x:e-10,y:10},toValue:10},{fromPoint:{x:e,y:t},fromValue:0,toPoint:{x:e-10,y:t-10},toValue:10},{fromPoint:{x:0,y:t},fromValue:0,toPoint:{x:10,y:t-10},toValue:10}]}const it={discriminator:"rectangle",paths({borderRadius:e},t){const{width:a,height:r}=t;let i="m 0 0";if(e){const{topLeft:o,topRight:n,bottomRight:l,bottomLeft:s}=tt(e,t);i+=` m ${o} 0`,i+=` l ${a-o-n} 0 a ${n} ${n} 0 0 1 ${n},${n}`,i+=` l 0 ${r-n-l} a ${l} ${l} 0 0 1 ${-l},${l}`,i+=` l ${l+s-a} 0 a ${s} ${s} 0 0 1 ${-s},${-s}`,i+=` l 0 ${s+o-r} a ${o} ${o} 0 0 1 ${o},${-o}`}else i+=` l ${a} 0`,i+=` l 0 ${r}`,i+=` l ${-a} 0`,i+=" l 0 "+-r;return i+=" z",[{d:i,fill:!0,dash:!0}]},textExtents:e=>We,getControlPoints({borderRadius:e},t,a,r,i){const{topLeft:o,topRight:n,bottomRight:l,bottomLeft:s}=tt(e??Qe,t),c=rt(t),d=at(i?tt(i.borderRadius??Qe,t):e)!==r?"normal":"alternate";return[o,n,l,s].map(((e,t)=>({position:pe(c[t],e),style:d,tooltip:{text:`Radius ${e.toFixed(0)}`,position:Ne[t]},cursor:qe})))},dragControlPoint({borderRadius:e},t,a,r,i,o){const n=rt(t)[a],{width:l,height:s}=t,c=de(n,r);let d;if(at(e)!==o){const e=ce(0,c,Ue(s/2,l/2));d={topLeft:e,topRight:e,bottomRight:e,bottomLeft:e}}else switch(d={...e??Qe},a){case 0:d.topLeft=ce(0,c,Ue(s-d.bottomLeft,l-d.topRight));break;case 1:d.topRight=ce(0,c,Ue(l-d.topLeft,s-d.bottomRight));break;case 2:d.bottomRight=ce(0,c,Ue(s-d.topRight,l-d.bottomLeft));break;case 3:d.bottomLeft=ce(0,c,Ue(l-d.bottomRight,s-d.topLeft))}return{type:"rectangle",borderRadius:d}}},ot={left:0,top:0,width:1,height:1},nt={discriminator:"shield",paths({cornerRounding:e},{width:t,height:a}){const r=Math.min(.5*t,.5*a);return[{d:be({cmd:"M",p:{x:0,y:0}},[{cmd:"H",v:t},{cmd:"V",v:a-r},{cmd:"A",radius:{x:.5*t,y:r},angle:0,large:!1,sweep:!0,p:{x:0,y:a-r}},{cmd:"V",v:0}],e,1,1),fill:!0,dash:!0}]},textExtents:e=>ot},lt={cmd:"M",p:{x:0,y:0}},st=[{cmd:"H",v:210},{cmd:"V",v:175},{cmd:"H",v:129},{cmd:"L",p:{x:40,y:217}},{cmd:"V",v:175},{cmd:"H",v:0},{cmd:"V",v:0}],ct={left:0,top:0,width:1,height:175/217},dt={discriminator:"speechBubble",paths:({cornerRounding:e},{width:t,height:a})=>[{d:be(lt,st,e,t/210,a/217),fill:!0,dash:!0}],textExtents:e=>ct},{PI:pt,cos:ht,sin:mt,round:ut,floor:gt,max:ft}=Math,vt=-.5*pt,St=2*pt;function It(e,t){return vt+St*(e/t)}function bt(e,t){return vt+St*((2*e+1)/(2*t))}function xt({sidePairs:e,innerRadius:t}){const a=ht(It(ut(e/4),e)),r=ht(bt(gt(ut(e/2)/2),e))*t,i=mt(It(ut(e/2),e)),o=mt(bt(gt(e/2),e))*t;return{xFactor:.5/ft(a,r),yFactor:.5/(.5*ft(i,o)+.5)}}const wt={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2};function yt(e,{width:t,height:a}){const{sidePairs:r}=e,{xFactor:i,yFactor:o}=xt(e),n=bt(r-1,r);return{fromPoint:{x:.5*t,y:a*o},fromValue:0,toPoint:{x:(ht(n)*i+.5)*t,y:(mt(n)*o+o)*a},toValue:1}}const kt={discriminator:"star",paths(e,{width:t,height:a}){const{cornerRounding:r,sidePairs:i,innerRadius:o}=e,{xFactor:n,yFactor:l}=xt(e);let s;const c=[];let d=!0;function p(e,t){const a={x:ht(e)*t*n+.5,y:mt(e)*t*l+l};d?(s={cmd:"M",p:a},d=!1):c.push({cmd:"L",p:a})}for(let e=0;e<i;e+=1)p(It(e,i),1),p(bt(e,i),o);return[{d:be(s,c,r,t,a),fill:!0,dash:!0}]},textExtents:e=>wt,getControlPoints:(e,t)=>[{position:pe(yt(e,t),e.innerRadius),style:"normal"}],dragControlPoint(e,t,a,r){const i=de(yt(e,t),r);return{...e,innerRadius:ce(.1,i,1)}}},Ct={discriminator:"triangle",paths:({cornerRounding:e,topVertex:t},{width:a,height:r})=>[{d:be({cmd:"M",p:{x:t??.5,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1,y:1}}],e,a,r),fill:!0,dash:!0}],textExtents:({topVertex:e})=>({width:.5,height:.5,left:(e??.5)/2,top:.5}),getControlPoints:({topVertex:e},t)=>[{position:pe(Tt(t)[0],e??.5),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,topVertex:ce(0,de(Tt(t)[a],r),1)})};function Tt({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Bt=new Map;function Mt(e){Bt.set(e.discriminator,e)}Mt(it),Mt(De),Mt(kt),Mt(Le),Mt(Ge),Mt(Ct),Mt(ye),Mt(Ye),Mt(Te),Mt(He),Mt(dt),Mt(nt),Mt(we),Mt(_e);const Lt={width:0,height:0};var At=a(4015),Dt=a.n(At);function Ft(e,t,a=d(e.states.default)){const r=e.states.default,i=structuredClone(e.states[t]);return a.reduce(((e,t)=>(Dt()(e[t])&&(e[t]=structuredClone(r[t])),e)),i)}var zt=a(3134),Vt=a.n(zt);function Jt(e){return new Map(c(Vt()(e,(e=>e.sourceId??"none"))))}a(1999),a(921);var $t=a(6936),Pt=a(8182);function Rt(e){if(null==e.def.shape)throw new Error("partial() called on a non-object def");return(0,Pt.OH3)(e)}var Zt=a(6492);function Ot(e,t,a){return{name:e,deps:t,factory:a}}function _t(e){const t=new Map(e.map((e=>[e.name,{name:e.name,module:e,state:"new",value:0}])));function a(e){const r=t.get(e);if(!r)throw new Error(`Unknown require ${e}`);if("finished"===r.state)return r.value;if("pending"===r.state)throw new Error("Circular require!");r.state="pending";const i=r.module.deps.map(a),o=r.module.factory(...i);return r.state="finished",r.value=o,o}const r={};for(const{name:t}of e)r[t]=a(t);return r}const jt=Ot("LocaleContext",[],(()=>({LocaleContext:(0,Pt.Ikc)({active:(0,Pt.lqM)((0,Pt.YjP)()),source:(0,Pt.lqM)((0,Pt.YjP)())})}))),Yt=Ot("ReviewData",[],(()=>{const e=(t=(0,Pt.RZV)((()=>a)),(0,Pt.FsL)((0,Pt.pdi)((e=>Array.isArray(e)?e.filter((e=>(0,Zt.xLC)(t,e).success)):e)),(0,Pt.YOg)(t)));var t;const a=(0,Pt.Ikc)({path:(0,Pt.YOg)((0,Pt.YjP)()),locale:(0,Pt.YjP)(),command:(0,Pt.Ikc)({type:(0,Pt.euz)("update"),newValue:(0,Pt.YjP)()})});return{TranslationsReviewArray:e,TranslationsReviewItem:a}})),Ht=Ot("VersionedEntity",[],(()=>{const e=(0,Pt.Ikc)({id:(0,Pt.YjP)(),_v:(0,Pt.aig)()});return{VersionedEntity:e,VersionedManifest:(0,Pt.Ikc)({blockuments:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),e)),items:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),e))})}})),Et=Ot("Asset",[],(()=>({Asset:(0,Pt.Ikc)({id:(0,Pt.YjP)(),path:(0,Pt.YjP)(),name:(0,Pt.YjP)(),width:(0,Pt.lqM)((0,Pt.aig)()),height:(0,Pt.lqM)((0,Pt.aig)())})}))),Gt=Ot("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Pt.E$q)(a,Rt(e))},o={"@@generic":e=>(0,Pt.E$q)((0,Pt.Ikc)({default:e}),(0,Pt.g1P)((0,Pt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Pt.Ikc)({id:(0,Pt.YjP)(),blockumentId:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)()),parentId:(0,Pt.YjP)(),type:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128)),tagName:(0,Pt.k5n)(["div","figure","figcaption","blockquote"]),locked:(0,Pt.zMY)(),authoringVisible:(0,Pt.zMY)(),initialVisible:(0,Pt.zMY)(),initialState:(0,Pt.YjP)(),states:o["@@generic"](t),assets:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),e)),removed:(0,Pt.zMY)(),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),Xt=Ot("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Pt.Ikc)({id:(0,Pt.YjP)(),title:(0,Pt.YjP)().check((0,Pt.Ru6)(255)),children:(0,Pt.YOg)(e).check((0,Pt.Ru6)(1)),triggers:(0,Pt.YOg)(t),_v:a})}))),qt=Ot("Border",["Unit"],(({Unit:e})=>({Border:(0,Pt.Ikc)({applied:(0,Pt.zMY)(),type:(0,Pt.k5n)(["none","fill"]),color:(0,Pt.YjP)(),opacity:(0,Pt.aig)(),style:(0,Pt.k5n)(["solid","dashed","dotted"]),width:e})}))),Nt=Ot("Fill",["FillColor","FillImage","FillNone"],(({FillColor:e},{FillImage:t},{FillNone:a})=>({Fill:(0,Pt.gMt)("type",[e,t,a])}))),Ut=Ot("FillBase",[],(()=>({FillBase:(0,Pt.Ikc)({assetId:(0,Pt.lqM)((0,Pt.YjP)()),color:(0,Pt.lqM)((0,Pt.YjP)()),opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))})}))),Wt=Ot("FillColor",["FillBase"],(({FillBase:e})=>({FillColor:(0,Pt.X$i)(e,{type:(0,Pt.euz)("color"),color:(0,Pt.YjP)()})}))),Qt=Ot("FillImage",["FillBase"],(({FillBase:e})=>{const t=(0,Pt.Ikc)({width:(0,Pt.aig)(),height:(0,Pt.aig)(),left:(0,Pt.aig)(),top:(0,Pt.aig)()});return{FillImageCrop:t,FillImage:(0,Pt.X$i)(e,{type:(0,Pt.euz)("image"),assetId:(0,Pt.YjP)(),crop:t})}})),Kt=Ot("FillNone",["FillBase"],(({FillBase:e})=>({FillNone:(0,Pt.X$i)(e,{type:(0,Pt.euz)("none")})}))),ea=Ot("FillOverlay",["FillColor","FillNone"],(({FillColor:e},{FillNone:t})=>({FillOverlay:(0,Pt.gMt)("type",[e,t])}))),ta=Ot("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:a},{BaseItemFullState:r})=>{const i=(0,Pt.X$i)(r,{children:(0,Pt.YOg)(a)});return{GroupItemFullState:i,GroupItem:(0,Pt.X$i)(e["@@generic"](i),{type:(0,Pt.euz)("group")}),GroupItemState:t["@@generic"](i)}})),aa=Ot("ImageItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Pt.X$i)(a,{altText:(0,Pt.YjP)()});return{ImageItemFullState:r,ImageItem:(0,Pt.X$i)(e["@@generic"](r),{type:(0,Pt.euz)("image")}),ImageItemState:t["@@generic"](r)}})),ra=Ot("Item",["GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({GroupItem:e},{ImageItem:t},{ShapeItem:a},{TextItem:r},{VideoItem:i})=>({Item:(0,Pt.gMt)("type",[e,t,a,r,i])}))),ia=Ot("ItemRef",[],(()=>({ItemRef:(0,Pt.Ikc)({id:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)()),state:(0,Pt.YjP)(),visible:(0,Pt.zMY)()})}))),oa=Ot("JSONContent",[],(()=>{const e=(0,Pt.E$q)((0,Pt.Ikc)({type:(0,Pt.lqM)((0,Pt.YjP)()),attrs:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.bzn)())),content:(0,Pt.lqM)((0,Pt.YOg)((0,Pt.RZV)((()=>e)))),marks:(0,Pt.lqM)((0,Pt.YOg)((0,Pt.E$q)((0,Pt.Ikc)({type:(0,Pt.YjP)(),attrs:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.bzn)()))}),(0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.bzn)())))),text:(0,Pt.lqM)((0,Pt.YjP)())}),(0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.bzn)()));return{JSONContent:e}})),na=Ot("Manifest",["Blockument","Item"],(({Blockument:e},{Item:t})=>({Manifest:(0,Pt.Ikc)({blockuments:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),e)),items:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),t))})}))),la=Ot("Padding",["Unit"],(({Unit:e})=>({Padding:(0,Pt.Ikc)({top:e,left:e,bottom:e,right:e})}))),sa=Ot("RichTextRef",["JSONContent"],(({JSONContent:e})=>({RichTextRef:(0,Pt.Ikc)({id:(0,Pt.YjP)(),type:(0,Pt.euz)("tiptap"),json:e})}))),ca=Ot("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:a})=>{const r=(0,Pt.X$i)(a,{clipPath:(0,Pt.mee)((0,Pt.euz)("ellipse")),altText:(0,Pt.mee)((0,Pt.YjP)())});return{ShapeItemFullState:r,ShapeItem:(0,Pt.X$i)(e["@@generic"](r),{type:(0,Pt.euz)("shape")}),ShapeItemState:t["@@generic"](r)}})),da=Ot("State",["Border","Fill","FillOverlay","Padding","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:r},{Unit:i})=>{const o=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:o,BaseItemFullState:(0,Pt.X$i)(o,{x:i,y:i,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),position:(0,Pt.euz)("absolute"),width:i,height:i,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Pt.zMY)(),border:e,borderRadius:(0,Pt.Ikc)({applied:(0,Pt.zMY)(),topLeft:i,topRight:i,bottomRight:i,bottomLeft:i}),rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)()})}})),pa=Ot("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r})=>{const i=(0,Pt.k5n)(["top","middle","bottom"]),o=(0,Pt.X$i)(r,{text:a,textVerticalAlign:i});return{TextVerticalAlign:i,TextItemFullState:o,TextItem:(0,Pt.X$i)(e["@@generic"](o),{type:(0,Pt.euz)("text")}),TextItemState:t["@@generic"](o)}})),ha=Ot("Trigger",[],(()=>{const e=(0,Pt.Ikc)({id:(0,Pt.YjP)(),event:(0,Pt.k5n)(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:(0,Pt.lqM)((0,Pt.YjP)())}),t=(0,Pt.X$i)(e,{action:(0,Pt.k5n)(["mediaPause","mediaPlay","mediaEnd"]),targetId:(0,Pt.YjP)()}),a=(0,Pt.X$i)(e,{action:(0,Pt.euz)("changeState"),targetId:(0,Pt.YjP)(),targetState:(0,Pt.YjP)()}),r=(0,Pt.X$i)(e,{action:(0,Pt.euz)("changeVisibility"),targetId:(0,Pt.YjP)(),targetVisibility:(0,Pt.zMY)()});return{TriggerMediaAction:t,TriggerChangeState:a,TriggerChangeVisibility:r,Trigger:(0,Pt.gMt)("action",[a,r,t])}})),ma=Ot("Unit",[],(()=>({Unit:(0,Pt.Ikc)({unit:(0,Pt.k5n)(["px","%","auto","fr"]),value:(0,Pt.aig)()})}))),ua=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(2)}))),ga=Ot("VideoItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),i=(0,Pt.X$i)(a,{videoSources:r});return{VideoAssets:r,VideoItemFullState:i,VideoItem:(0,Pt.X$i)(e["@@generic"](i),{type:(0,Pt.euz)("video")}),VideoItemState:t["@@generic"](i)}})),fa=Ot("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),i=(0,Pt.X$i)(a,{audioSources:r});return{AudioAssets:r,AudioItemFullState:i,AudioItem:(0,Pt.X$i)(e["@@generic"](i),{type:(0,Pt.euz)("audio")}),AudioItemState:t["@@generic"](i)}})),va=Ot("Item",["AudioItem","GroupItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ShapeItem:a},{TextItem:r},{VideoItem:i})=>({Item:(0,Pt.gMt)("type",[e,t,a,r,i])}))),Sa=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(3)}))),Ia=Ot("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Pt.Ikc)({id:(0,Pt.YjP)(),title:(0,Pt.YjP)().check((0,Pt.Ru6)(255)),children:(0,Pt.YOg)(e).check((0,Pt.Ru6)(1)),triggers:(0,Pt.YOg)(t),fonts:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.YjP)())),_v:a})}))),ba=Ot("ShapeDef",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.euz)("rectangle"),borderRadius:(0,Pt.lqM)((0,Pt.Ikc)({topLeft:(0,Pt.aig)(),topRight:(0,Pt.aig)(),bottomRight:(0,Pt.aig)(),bottomLeft:(0,Pt.aig)()}))}),t=(0,Pt.Ikc)({type:(0,Pt.euz)("ellipse")}),a=(0,Pt.Ikc)({type:(0,Pt.euz)("star"),sidePairs:(0,Pt.aig)().check((0,Pt.ROM)(3)),innerRadius:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(1))}),r=(0,Pt.Ikc)({type:(0,Pt.euz)("cloud")});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:r,ShapeDef:(0,Pt.gMt)("type",[e,t,a,r])}})),xa=Ot("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:a})=>{const r=(0,Pt.X$i)(a,{altText:(0,Pt.mee)((0,Pt.YjP)())});return{ShapeItemFullState:r,ShapeItem:(0,Pt.X$i)(e["@@generic"](r),{type:(0,Pt.euz)("shape")}),ShapeItemState:t["@@generic"](r)}})),wa=Ot("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Pt.X$i)(n,{x:o,y:o,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),position:(0,Pt.euz)("absolute"),width:o,height:o,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Pt.zMY)(),border:e,clipDef:i,rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)()})}})),ya=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(4)}))),ka=Ot("ShapeDef",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.euz)("rectangle"),borderRadius:(0,Pt.lqM)((0,Pt.Ikc)({topLeft:(0,Pt.aig)(),topRight:(0,Pt.aig)(),bottomRight:(0,Pt.aig)(),bottomLeft:(0,Pt.aig)()}))}),t=(0,Pt.Ikc)({type:(0,Pt.euz)("ellipse")}),a=(0,Pt.Ikc)({type:(0,Pt.euz)("star"),sidePairs:(0,Pt.aig)().check((0,Pt.ROM)(3)),innerRadius:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(1))}),r=(0,Pt.Ikc)({type:(0,Pt.euz)("cloud")}),i=(0,Pt.Ikc)({type:(0,Pt.euz)("plus"),stroke:(0,Pt.aig)().check((0,Pt.ROM)(.01),(0,Pt.wJL)(1))}),o=(0,Pt.Ikc)({type:(0,Pt.euz)("triangle")}),n=(0,Pt.Ikc)({type:(0,Pt.euz)("bookmark"),cutoutInset:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.8))}),l=(0,Pt.Ikc)({type:(0,Pt.euz)("chevron"),outsideCornerXCoords:(0,Pt.aig)().check((0,Pt.ROM)(.7),(0,Pt.wJL)(1)),insideCenterXCoord:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.3))}),s=(0,Pt.Ikc)({type:(0,Pt.euz)("octagon")}),c=(0,Pt.Ikc)({type:(0,Pt.euz)("parallelogram"),shear:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:r,ShapePlus:i,ShapeTriangle:o,ShapeBookmark:n,ShapeChevron:l,ShapeOctagon:s,ShapeParallelogram:c,ShapeDef:(0,Pt.gMt)("type",[n,l,r,t,s,i,e,a,o,c])}})),Ca=Ot("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Pt.X$i)(n,{x:o,y:o,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),position:(0,Pt.euz)("absolute"),width:o,height:o,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Pt.zMY)(),border:e,clipDef:i,rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"])})}})),Ta=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(5)}))),Ba=Ot("ShapeDef",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.euz)("rectangle"),borderRadius:(0,Pt.lqM)((0,Pt.Ikc)({topLeft:(0,Pt.aig)(),topRight:(0,Pt.aig)(),bottomRight:(0,Pt.aig)(),bottomLeft:(0,Pt.aig)()}))}),t=(0,Pt.Ikc)({type:(0,Pt.euz)("ellipse")}),a=(0,Pt.Ikc)({type:(0,Pt.euz)("star"),sidePairs:(0,Pt.aig)().check((0,Pt.ROM)(3)),innerRadius:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(1))}),r=(0,Pt.Ikc)({type:(0,Pt.euz)("cloud")}),i=(0,Pt.Ikc)({type:(0,Pt.euz)("plus"),stroke:(0,Pt.aig)().check((0,Pt.ROM)(.01),(0,Pt.wJL)(1))}),o=(0,Pt.Ikc)({type:(0,Pt.euz)("triangle"),topVertex:(0,Pt.lqM)((0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)))}),n=(0,Pt.Ikc)({type:(0,Pt.euz)("bookmark"),cutoutInset:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.8))}),l=(0,Pt.Ikc)({type:(0,Pt.euz)("chevron"),outsideCornerXCoords:(0,Pt.aig)().check((0,Pt.ROM)(.7),(0,Pt.wJL)(1)),insideCenterXCoord:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.3))}),s=(0,Pt.Ikc)({type:(0,Pt.euz)("octagon")}),c=(0,Pt.Ikc)({type:(0,Pt.euz)("parallelogram"),shear:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))}),d=(0,Pt.Ikc)({type:(0,Pt.euz)("shield")}),p=(0,Pt.Ikc)({type:(0,Pt.euz)("speechBubble")}),h=(0,Pt.Ikc)({type:(0,Pt.euz)("arrow"),thickness:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.5)),headLength:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.9))});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:r,ShapePlus:i,ShapeTriangle:o,ShapeBookmark:n,ShapeChevron:l,ShapeOctagon:s,ShapeParallelogram:c,ShapeShield:d,ShapeSpeechBubble:p,ShapeArrow:h,ShapeDef:(0,Pt.gMt)("type",[n,l,r,t,s,i,e,a,o,c,d,p,h])}})),Ma=Ot("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r})=>{const i=(0,Pt.k5n)(["top","middle","bottom"]),o=(0,Pt.Ikc)({top:(0,Pt.aig)(),left:(0,Pt.aig)(),bottom:(0,Pt.aig)(),right:(0,Pt.aig)()}),n=(0,Pt.X$i)(r,{text:a,textVerticalAlign:i,textPadding:o});return{TextVerticalAlign:i,TextPadding:o,TextItemFullState:n,TextItem:(0,Pt.X$i)(e["@@generic"](n),{type:(0,Pt.euz)("text")}),TextItemState:t["@@generic"](n)}})),La=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(6)}))),Aa=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(7)}))),Da=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(8)}))),Fa=Ot("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Pt.Ikc)({id:(0,Pt.YjP)(),title:(0,Pt.YjP)().check((0,Pt.Ru6)(255)),children:(0,Pt.YOg)(e).check((0,Pt.BpQ)(0),(0,Pt.Ru6)(1)),triggers:(0,Pt.YOg)(t),fonts:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.YjP)())),_v:a})}))),za=Ot("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:a},{BaseItemFullState:r})=>{const i=(0,Pt.X$i)(r,{_groupBrand:(0,Pt.lqM)((0,Pt.ZmZ)())});return{GroupItemFullState:i,GroupItem:(0,Pt.X$i)(e["@@generic"](i),{type:(0,Pt.euz)("group"),children:(0,Pt.YOg)(a)}),GroupItemState:t["@@generic"](i)}})),Va=Ot("ItemRef",[],(()=>({ItemRef:(0,Pt.Ikc)({id:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)())})}))),Ja=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(9)}))),$a=Ot("DropShadow",[],(()=>{const e=(0,Pt.Ikc)({x:(0,Pt.aig)(),y:(0,Pt.aig)()}),t=(0,Pt.Ikc)({applied:(0,Pt.euz)(!1)}),a=(0,Pt.Ikc)({applied:(0,Pt.euz)(!0),offset:e,blur:(0,Pt.aig)().check((0,Pt.ROM)(0)),spread:(0,Pt.aig)().check((0,Pt.ROM)(0)),color:(0,Pt.YjP)(),opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))});return{DropShadow:(0,Pt.gMt)("applied",[t,a])}})),Pa=Ot("ShapeItem",["BaseItem","DropShadow","TextItem"],(({BaseItem:e,State:t},{DropShadow:a},{TextItemFullState:r})=>{const i=(0,Pt.X$i)(r,{altText:(0,Pt.mee)((0,Pt.YjP)()),dropShadow:a});return{ShapeItemFullState:i,ShapeItem:(0,Pt.X$i)(e["@@generic"](i),{type:(0,Pt.euz)("shape")}),ShapeItemState:t["@@generic"](i)}})),Ra=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(10)}))),Za=Ot("Trigger",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.k5n)(["mediaPause","mediaPlay","mediaEnd"]),targetId:(0,Pt.YOg)((0,Pt.YjP)())}),t=(0,Pt.Ikc)({type:(0,Pt.euz)("changeState"),targetId:(0,Pt.PVZ)([(0,Pt.YjP)()]),targetState:(0,Pt.YjP)()}),a=(0,Pt.Ikc)({type:(0,Pt.euz)("changeVisibility"),targetId:(0,Pt.YOg)((0,Pt.YjP)()),targetVisibility:(0,Pt.zMY)()}),r=(0,Pt.gMt)("type",[e,t,a]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:a,TriggerAction:r,Trigger:(0,Pt.Ikc)({id:(0,Pt.YjP)(),event:(0,Pt.k5n)(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:(0,Pt.lqM)((0,Pt.YjP)()),actions:(0,Pt.YOg)(r)})}})),Oa=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(11)}))),_a=Ot("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Pt.E$q)(a,Rt(e))},o={"@@generic":e=>(0,Pt.E$q)((0,Pt.Ikc)({default:e}),(0,Pt.g1P)((0,Pt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Pt.Ikc)({id:(0,Pt.YjP)(),blockumentId:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)()),parentId:(0,Pt.YjP)(),type:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128)),tagName:(0,Pt.k5n)(["div","figure","figcaption","blockquote"]),locked:(0,Pt.zMY)(),authoringVisible:(0,Pt.zMY)(),initialVisible:(0,Pt.zMY)(),initialState:(0,Pt.YjP)(),states:o["@@generic"](t),assets:(0,Pt.g1P)((0,Pt.YjP)(),e),removed:(0,Pt.zMY)(),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),ja=Ot("Fill",["FillBase"],(({FillColorFields:e,FillImageFields:t})=>{const a=(0,Pt.k5n)(["color","image"]);return{Fill:(0,Pt.E$q)((0,Pt.E$q)(e,t),(0,Pt.Ikc)({type:a}))}})),Ya=Ot("FillBase",[],(()=>{const e=(0,Pt.Ikc)({width:(0,Pt.aig)(),height:(0,Pt.aig)(),left:(0,Pt.aig)(),top:(0,Pt.aig)()}),t=(0,Pt.Ikc)({opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))});return{FillImageCrop:e,FillBase:t,FillColorFields:(0,Pt.X$i)(t,{color:(0,Pt.lqM)((0,Pt.YjP)())}),FillImageFields:(0,Pt.X$i)(t,{assetId:(0,Pt.lqM)((0,Pt.YjP)()),crop:e})}})),Ha=Ot("OverlayFill",["FillBase"],(({FillColorFields:e})=>({OverlayFill:(0,Pt.X$i)(e,{type:(0,Pt.euz)("color")})}))),Ea=Ot("State",["Border","Fill","OverlayFill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{OverlayFill:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Pt.X$i)(n,{x:o,y:o,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),position:(0,Pt.euz)("absolute"),width:o,height:o,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Pt.zMY)(),border:e,clipDef:i,rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"])})}})),Ga=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(12)}))),Xa=Ot("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Pt.E$q)(a,Rt(e))},o={"@@generic":e=>(0,Pt.E$q)((0,Pt.Ikc)({default:e}),(0,Pt.g1P)((0,Pt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Pt.Ikc)({id:(0,Pt.YjP)(),blockumentId:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)()),parentId:(0,Pt.YjP)(),type:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128)),tagName:(0,Pt.k5n)(["div","figure","figcaption","blockquote"]),locked:(0,Pt.zMY)(),authoringVisible:(0,Pt.zMY)(),initialVisible:(0,Pt.zMY)(),initialState:(0,Pt.YjP)(),states:o["@@generic"](t),assets:(0,Pt.g1P)((0,Pt.YjP)(),e),removed:(0,Pt.zMY)(),layer:(0,Pt.lqM)((0,Pt.YjP)()),aiExperiment:(0,Pt.lqM)((0,Pt.zMY)()),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),qa=Ot("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Pt.Ikc)({id:(0,Pt.YjP)(),title:(0,Pt.YjP)().check((0,Pt.Ru6)(255)),children:(0,Pt.YOg)(e).check((0,Pt.BpQ)(0),(0,Pt.Ru6)(1)),triggers:(0,Pt.YOg)(t),fonts:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.YjP)())),layers:(0,Pt.YOg)((0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)()})),aiExperiment:(0,Pt.lqM)((0,Pt.zMY)()),_v:a})}))),Na=Ot("Fill",[],(()=>{const e=(0,Pt.Ikc)({width:(0,Pt.aig)(),height:(0,Pt.aig)(),left:(0,Pt.aig)(),top:(0,Pt.aig)()}),t=(0,Pt.Ikc)({opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))}),a=(0,Pt.k5n)(["color","image"]),r=(0,Pt.X$i)(t,{color:(0,Pt.lqM)((0,Pt.YjP)())});return{FillImageCrop:e,FillColorFields:r,Fill:(0,Pt.X$i)(r,{type:a,assetId:(0,Pt.lqM)((0,Pt.YjP)()),crop:e})}})),Ua=Ot("State",["Border","Fill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t,FillColorFields:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Pt.X$i)(n,{x:o,y:o,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),position:(0,Pt.euz)("absolute"),width:o,height:o,padding:r,fill:t,opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)),overlay:a,aspectRatioLocked:(0,Pt.zMY)(),border:e,clipDef:i,rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"])})}})),Wa=Ot("Trigger",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.k5n)(["mediaPause","mediaPlay","mediaEnd"]),targetId:(0,Pt.YOg)((0,Pt.YjP)())}),t=(0,Pt.Ikc)({type:(0,Pt.euz)("changeState"),targetId:(0,Pt.PVZ)([(0,Pt.YjP)()]),targetState:(0,Pt.YjP)()}),a=(0,Pt.Ikc)({type:(0,Pt.euz)("changeVisibility"),targetId:(0,Pt.YOg)((0,Pt.YjP)()),targetVisibility:(0,Pt.zMY)()}),r=(0,Pt.Ikc)({type:(0,Pt.euz)("changeLayer"),layerId:(0,Pt.mee)((0,Pt.YjP)())}),i=(0,Pt.gMt)("type",[e,t,a,r]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:a,TriggerChangeLayerAction:r,TriggerAction:i,Trigger:(0,Pt.Ikc)({id:(0,Pt.YjP)(),event:(0,Pt.k5n)(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:(0,Pt.lqM)((0,Pt.YjP)()),actions:(0,Pt.YOg)(i)})}})),Qa=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(13)}))),Ka=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(14)}))),er=Ot("ShapeDef",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.YjP)()}),t=(0,Pt.X$i)(e,{cornerRounding:(0,Pt.aig)().check((0,Pt.ROM)(0))}),a=(0,Pt.X$i)(e,{type:(0,Pt.euz)("rectangle"),borderRadius:(0,Pt.lqM)((0,Pt.Ikc)({topLeft:(0,Pt.aig)(),topRight:(0,Pt.aig)(),bottomRight:(0,Pt.aig)(),bottomLeft:(0,Pt.aig)()}))}),r=(0,Pt.X$i)(e,{type:(0,Pt.euz)("ellipse")}),i=(0,Pt.X$i)(t,{type:(0,Pt.euz)("star"),sidePairs:(0,Pt.aig)().check((0,Pt.ROM)(3)),innerRadius:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(1))}),o=(0,Pt.X$i)(e,{type:(0,Pt.euz)("cloud")}),n=(0,Pt.X$i)(t,{type:(0,Pt.euz)("plus"),stroke:(0,Pt.aig)().check((0,Pt.ROM)(.01),(0,Pt.wJL)(1))}),l=(0,Pt.X$i)(t,{type:(0,Pt.euz)("triangle"),topVertex:(0,Pt.lqM)((0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)))}),s=(0,Pt.X$i)(t,{type:(0,Pt.euz)("bookmark"),cutoutInset:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.8))}),c=(0,Pt.X$i)(t,{type:(0,Pt.euz)("chevron"),outsideCornerXCoords:(0,Pt.aig)().check((0,Pt.ROM)(.7),(0,Pt.wJL)(1)),insideCenterXCoord:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.3))}),d=(0,Pt.X$i)(t,{type:(0,Pt.euz)("octagon")}),p=(0,Pt.X$i)(t,{type:(0,Pt.euz)("parallelogram"),shear:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))}),h=(0,Pt.X$i)(t,{type:(0,Pt.euz)("shield")}),m=(0,Pt.X$i)(t,{type:(0,Pt.euz)("speechBubble")}),u=(0,Pt.X$i)(t,{type:(0,Pt.euz)("arrow"),thickness:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.5)),headLength:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.9))});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:r,ShapeStar:i,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:h,ShapeSpeechBubble:m,ShapeArrow:u,ShapeDef:(0,Pt.gMt)("type",[s,c,o,r,d,n,a,i,l,p,h,m,u])}})),tr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(15)}))),ar=Ot("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:r},{ShapeDef:i})=>{const o=(0,Pt.Ikc)({border:e,overlay:a}),n=(0,Pt.X$i)(o,{dropShadow:t,shapeDef:i}),l=(0,Pt.Ikc)({fill:a}),s=(0,Pt.Ikc)({fill:r});return{MinimalBackdropData:o,ExtendedBackdropData:n,BackdropColorFillData:l,BackdropImageFillData:s,GroupBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)(o,l.def.shape),{}),ShapeBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)(n,l.def.shape),{}),ImageBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)(n,s.def.shape),{})}})),rr=Ot("Fill",[],(()=>{const e=(0,Pt.Ikc)({width:(0,Pt.aig)(),height:(0,Pt.aig)(),left:(0,Pt.aig)(),top:(0,Pt.aig)()}),t=(0,Pt.Ikc)({opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))});return{FillImageCrop:e,FillColor:(0,Pt.X$i)(t,{color:(0,Pt.lqM)((0,Pt.YjP)())}),FillImage:(0,Pt.X$i)(t,{assetId:(0,Pt.lqM)((0,Pt.YjP)()),crop:e})}})),ir=Ot("GroupItem",["Backdrop","BaseItem","ItemRef","State"],(({GroupBackdropStateData:e},{BaseItem:t,State:a},{ItemRef:r},{BaseItemFullState:i})=>{const o=(0,Pt.X$i)((0,Pt.X$i)(i,e.def.shape),{_groupBrand:(0,Pt.lqM)((0,Pt.ZmZ)())});return{GroupItemFullState:o,GroupItem:(0,Pt.X$i)(t["@@generic"](o),{type:(0,Pt.euz)("group"),children:(0,Pt.YOg)(r)}),GroupItemState:a["@@generic"](o)}})),or=Ot("ImageItem",["Backdrop","BaseItem","State"],(({ImageBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{altText:(0,Pt.YjP)()});return{ImageItemFullState:i,ImageItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("image")}),ImageItemState:a["@@generic"](i)}})),nr=Ot("Item",["AudioItem","GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ImageItem:a},{ShapeItem:r},{TextItem:i},{VideoItem:o})=>({Item:(0,Pt.gMt)("type",[e,t,a,r,i,o])}))),lr=Ot("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{});return{ShapeItemFullState:i,ShapeItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("shape")}),ShapeItemState:a["@@generic"](i)}})),sr=Ot("State",["Padding","Unit"],(({Padding:e},{Unit:t})=>{const a=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:a,BaseItemFullState:(0,Pt.X$i)(a,{x:t,y:t,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),position:(0,Pt.euz)("absolute"),width:t,height:t,padding:e,opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)),aspectRatioLocked:(0,Pt.zMY)(),rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"])})}})),cr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(16)}))),dr=Ot("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Pt.E$q)(a,Rt(e))},o={"@@generic":e=>(0,Pt.E$q)((0,Pt.Ikc)({default:e}),(0,Pt.g1P)((0,Pt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Pt.Ikc)({id:(0,Pt.YjP)(),blockumentId:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)()),parentId:(0,Pt.YjP)(),type:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128)),locked:(0,Pt.zMY)(),authoringVisible:(0,Pt.zMY)(),initialVisible:(0,Pt.zMY)(),initialState:(0,Pt.YjP)(),states:o["@@generic"](t),assets:(0,Pt.g1P)((0,Pt.YjP)(),e),removed:(0,Pt.zMY)(),layer:(0,Pt.lqM)((0,Pt.YjP)()),aiExperiment:(0,Pt.lqM)((0,Pt.zMY)()),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),pr=Ot("State",["Unit"],(({Unit:e})=>{const t=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:t,BaseItemFullState:(0,Pt.X$i)(t,{x:e,y:e,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),width:e,height:e,opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)),aspectRatioLocked:(0,Pt.zMY)(),rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"])})}})),hr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(17)}))),mr=Ot("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Pt.Ikc)({id:(0,Pt.YjP)(),title:(0,Pt.YjP)().check((0,Pt.Ru6)(255)),children:(0,Pt.YOg)(e).check((0,Pt.BpQ)(0),(0,Pt.Ru6)(1)),triggers:(0,Pt.YOg)(t),fonts:(0,Pt.lqM)((0,Pt.g1P)((0,Pt.YjP)(),(0,Pt.YjP)())),layers:(0,Pt.YOg)((0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)()})),aiExperiment:(0,Pt.lqM)((0,Pt.zMY)()),authoringOpened:(0,Pt.zMY)(),_v:a})}))),ur=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(18)}))),gr=Ot("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{altText:(0,Pt.YjP)()});return{ShapeItemFullState:i,ShapeItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("shape")}),ShapeItemState:a["@@generic"](i)}})),fr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(19)}))),vr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(20)}))),Sr=Ot("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),i=(0,Pt.Ikc)({text:(0,Pt.YjP)(),model:(0,Pt.YjP)(),stability:(0,Pt.lqM)((0,Pt.aig)()),similarity:(0,Pt.lqM)((0,Pt.aig)()),styleExaggeration:(0,Pt.lqM)((0,Pt.aig)()),speakerBoost:(0,Pt.lqM)((0,Pt.zMY)()),voiceName:(0,Pt.YjP)(),voiceSource:(0,Pt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Pt.lqM)((0,Pt.zMY)()),advancedSettingsModified:(0,Pt.lqM)((0,Pt.zMY)())}),o=(0,Pt.X$i)(a,{audioSources:r});return{AudioAssets:r,AiAudioSettings:i,AudioItemFullState:o,AudioItem:(0,Pt.X$i)(e["@@generic"](o),{type:(0,Pt.euz)("audio"),aiAudioSettings:(0,Pt.lqM)(i)}),AudioItemState:t["@@generic"](o)}})),Ir=Ot("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:r},{ShapeDef:i})=>{const o=(0,Pt.Ikc)({border:e}),n=(0,Pt.Ikc)({overlay:a}),l=(0,Pt.Ikc)({dropShadow:t,shapeDef:i}),s=(0,Pt.Ikc)({fill:a}),c=(0,Pt.Ikc)({fill:r});return{BorderBackdropData:o,OverlayBackdropData:n,ExtendedBackdropData:l,BackdropColorFillData:s,BackdropImageFillData:c,GroupBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(o,n.def.shape),s.def.shape),{}),ShapeBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(o,n.def.shape),l.def.shape),s.def.shape),{}),ImageBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(o,n.def.shape),l.def.shape),c.def.shape),{}),LineBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(o,l.def.shape),s.def.shape),{})}})),br=Ot("Item",["AudioItem","GroupItem","ImageItem","LineItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ImageItem:a},{LineItem:r},{ShapeItem:i},{TextItem:o},{VideoItem:n})=>({Item:(0,Pt.gMt)("type",[e,t,a,i,o,n,r])}))),xr=Ot("LineItem",["Backdrop","BaseItem","State"],(({LineBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{altText:(0,Pt.YjP)()});return{LineItemFullState:i,LineItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("line")}),LineItemState:a["@@generic"](i)}})),wr=Ot("ShapeDef",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.YjP)()}),t=(0,Pt.X$i)(e,{cornerRounding:(0,Pt.aig)().check((0,Pt.ROM)(0))}),a=(0,Pt.X$i)(e,{type:(0,Pt.euz)("rectangle"),borderRadius:(0,Pt.lqM)((0,Pt.Ikc)({topLeft:(0,Pt.aig)(),topRight:(0,Pt.aig)(),bottomRight:(0,Pt.aig)(),bottomLeft:(0,Pt.aig)()}))}),r=(0,Pt.X$i)(e,{type:(0,Pt.euz)("ellipse")}),i=(0,Pt.X$i)(t,{type:(0,Pt.euz)("star"),sidePairs:(0,Pt.aig)().check((0,Pt.ROM)(3)),innerRadius:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(1))}),o=(0,Pt.X$i)(e,{type:(0,Pt.euz)("cloud")}),n=(0,Pt.X$i)(t,{type:(0,Pt.euz)("plus"),stroke:(0,Pt.aig)().check((0,Pt.ROM)(.01),(0,Pt.wJL)(1))}),l=(0,Pt.X$i)(t,{type:(0,Pt.euz)("triangle"),topVertex:(0,Pt.lqM)((0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)))}),s=(0,Pt.X$i)(t,{type:(0,Pt.euz)("bookmark"),cutoutInset:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.8))}),c=(0,Pt.X$i)(t,{type:(0,Pt.euz)("chevron"),outsideCornerXCoords:(0,Pt.aig)().check((0,Pt.ROM)(.7),(0,Pt.wJL)(1)),insideCenterXCoord:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.3))}),d=(0,Pt.X$i)(t,{type:(0,Pt.euz)("octagon")}),p=(0,Pt.X$i)(t,{type:(0,Pt.euz)("parallelogram"),shear:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))}),h=(0,Pt.X$i)(t,{type:(0,Pt.euz)("shield")}),m=(0,Pt.X$i)(t,{type:(0,Pt.euz)("speechBubble")}),u=(0,Pt.X$i)(t,{type:(0,Pt.euz)("arrow"),thickness:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.5)),headLength:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.9))}),g=(0,Pt.k5n)(["none","arrow","stop","circle","square","diamond","triangle","circle-filled","square-filled","diamond-filled","triangle-filled"]),f=(0,Pt.Ikc)({style:g,size:(0,Pt.aig)().check((0,Pt.ROM)(1))}),v=(0,Pt.X$i)(e,{type:(0,Pt.euz)("line"),from:f,to:f});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:r,ShapeStar:i,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:h,ShapeSpeechBubble:m,ShapeArrow:u,LineEndStyle:g,LineEnd:f,ShapeLine:v,ShapeDef:(0,Pt.gMt)("type",[s,c,o,r,d,n,a,i,l,p,h,m,u,v])}})),yr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(21)}))),kr=Ot("ItemRef",[],(()=>({ItemRef:(0,Pt.Ikc)({id:(0,Pt.YjP)(),visualOrder:(0,Pt.aig)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)())})}))),Cr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(22)}))),Tr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(23)}))),Br=Ot("ImageItem",["Backdrop","BaseItem","State"],(({ImageBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{});return{ImageItemFullState:i,ImageItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("image")}),ImageItemState:a["@@generic"](i)}})),Mr=Ot("LineItem",["Backdrop","BaseItem","State"],(({LineBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{});return{LineItemFullState:i,LineItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("line")}),LineItemState:a["@@generic"](i)}})),Lr=Ot("State",["Unit"],(({Unit:e})=>{const t=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:t,BaseItemFullState:(0,Pt.X$i)(t,{x:e,y:e,xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),width:e,height:e,opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)),aspectRatioLocked:(0,Pt.zMY)(),rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"]),altText:(0,Pt.YjP)()})}})),Ar=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(24)}))),Dr=Ot("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),i=(0,Pt.Ikc)({text:(0,Pt.YjP)(),model:(0,Pt.YjP)(),stability:(0,Pt.lqM)((0,Pt.aig)()),similarity:(0,Pt.lqM)((0,Pt.aig)()),styleExaggeration:(0,Pt.lqM)((0,Pt.aig)()),speakerBoost:(0,Pt.lqM)((0,Pt.zMY)()),voiceName:(0,Pt.YjP)(),voiceSource:(0,Pt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Pt.lqM)((0,Pt.zMY)()),advancedSettingsModified:(0,Pt.lqM)((0,Pt.zMY)())}),o=(0,Pt.X$i)(a,{audioSources:r,transcript:(0,Pt.YjP)()});return{AudioAssets:r,AiAudioSettings:i,AudioItemFullState:o,AudioItem:(0,Pt.X$i)(e["@@generic"](o),{type:(0,Pt.euz)("audio"),aiAudioSettings:(0,Pt.lqM)(i)}),AudioItemState:t["@@generic"](o)}})),Fr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(25)}))),zr=Ot("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:r,FillLinearGradient:i},{ShapeDef:o})=>{const n=(0,Pt.Ikc)({border:e}),l=(0,Pt.Ikc)({overlay:a}),s=(0,Pt.Ikc)({dropShadow:t,shapeDef:o}),c=(0,Pt.Ikc)({fill:(0,Pt.KCZ)([a,i])}),d=(0,Pt.Ikc)({fill:r});return{BorderBackdropData:n,OverlayBackdropData:l,ExtendedBackdropData:s,BackdropColorFillData:c,BackdropImageFillData:d,GroupBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(n,l.def.shape),c.def.shape),{}),ShapeBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(n,l.def.shape),s.def.shape),c.def.shape),{}),ImageBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)((0,Pt.X$i)(n,l.def.shape),s.def.shape),d.def.shape),{}),LineBackdropStateData:(0,Pt.X$i)((0,Pt.X$i)(n,s.def.shape),{})}})),Vr=Ot("Border",[],(()=>({Border:(0,Pt.Ikc)({applied:(0,Pt.zMY)(),color:(0,Pt.YjP)(),opacity:(0,Pt.aig)(),style:(0,Pt.k5n)(["solid","dashed","dotted"]),width:(0,Pt.aig)()})}))),Jr=Ot("DropShadow",[],(()=>{const e=(0,Pt.Ikc)({x:(0,Pt.aig)(),y:(0,Pt.aig)()}),t=(0,Pt.Ikc)({applied:(0,Pt.euz)(!1)}),a=(0,Pt.Ikc)({applied:(0,Pt.euz)(!0),offset:e,blur:(0,Pt.aig)().check((0,Pt.ROM)(0)),color:(0,Pt.YjP)(),opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))});return{DropShadow:(0,Pt.gMt)("applied",[t,a])}})),$r=Ot("Fill",[],(()=>{const e=(0,Pt.Ikc)({width:(0,Pt.aig)(),height:(0,Pt.aig)(),left:(0,Pt.aig)(),top:(0,Pt.aig)()}),t=(0,Pt.Ikc)({opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))});return{FillImageCrop:e,FillColor:(0,Pt.X$i)(t,{color:(0,Pt.lqM)((0,Pt.YjP)()),angle:(0,Pt.lqM)((0,Pt.ZmZ)())}),FillImage:(0,Pt.X$i)(t,{assetId:(0,Pt.lqM)((0,Pt.YjP)()),crop:e}),FillLinearGradient:(0,Pt.Ikc)({angle:(0,Pt.aig)(),stops:(0,Pt.YOg)((0,Pt.Ikc)({t:(0,Pt.aig)(),color:(0,Pt.YjP)(),opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))}))})}})),Pr=Ot("ShapeDef",[],(()=>{const e=(0,Pt.Ikc)({type:(0,Pt.YjP)()}),t=(0,Pt.X$i)(e,{cornerRounding:(0,Pt.aig)().check((0,Pt.ROM)(0))}),a=(0,Pt.X$i)(e,{type:(0,Pt.euz)("rectangle"),borderRadius:(0,Pt.lqM)((0,Pt.Ikc)({topLeft:(0,Pt.aig)(),topRight:(0,Pt.aig)(),bottomRight:(0,Pt.aig)(),bottomLeft:(0,Pt.aig)()}))}),r=(0,Pt.X$i)(e,{type:(0,Pt.euz)("ellipse")}),i=(0,Pt.X$i)(t,{type:(0,Pt.euz)("star"),sidePairs:(0,Pt.aig)().check((0,Pt.ROM)(3)),innerRadius:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(1))}),o=(0,Pt.X$i)(e,{type:(0,Pt.euz)("cloud")}),n=(0,Pt.X$i)(t,{type:(0,Pt.euz)("plus"),stroke:(0,Pt.aig)().check((0,Pt.ROM)(.01),(0,Pt.wJL)(1))}),l=(0,Pt.X$i)(t,{type:(0,Pt.euz)("triangle"),topVertex:(0,Pt.lqM)((0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)))}),s=(0,Pt.X$i)(t,{type:(0,Pt.euz)("bookmark"),cutoutInset:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.8))}),c=(0,Pt.X$i)(t,{type:(0,Pt.euz)("chevron"),outsideCornerXCoords:(0,Pt.aig)().check((0,Pt.ROM)(.7),(0,Pt.wJL)(1)),insideCenterXCoord:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(.3))}),d=(0,Pt.X$i)(t,{type:(0,Pt.euz)("octagon")}),p=(0,Pt.X$i)(t,{type:(0,Pt.euz)("parallelogram"),shear:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1))}),h=(0,Pt.X$i)(t,{type:(0,Pt.euz)("shield")}),m=(0,Pt.X$i)(t,{type:(0,Pt.euz)("speechBubble")}),u=(0,Pt.X$i)(t,{type:(0,Pt.euz)("arrow"),thickness:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.5)),headLength:(0,Pt.aig)().check((0,Pt.ROM)(.1),(0,Pt.wJL)(.9))}),g=(0,Pt.k5n)(["none","arrow","stop","circle","square","diamond","triangle","circle-filled","square-filled","diamond-filled","triangle-filled"]),f=(0,Pt.Ikc)({style:g}),v=(0,Pt.X$i)(e,{type:(0,Pt.euz)("line"),from:f,to:f});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:r,ShapeStar:i,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:h,ShapeSpeechBubble:m,ShapeArrow:u,LineEndStyle:g,LineEnd:f,ShapeLine:v,ShapeDef:(0,Pt.gMt)("type",[s,c,o,r,d,n,a,i,l,p,h,m,u,v])}})),Rr=Ot("State",[],(()=>{const e=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))});return{StateMeta:e,BaseItemFullState:(0,Pt.X$i)(e,{x:(0,Pt.aig)(),y:(0,Pt.aig)(),xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),width:(0,Pt.aig)(),height:(0,Pt.aig)(),opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)),aspectRatioLocked:(0,Pt.zMY)(),rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"]),altText:(0,Pt.YjP)()})}})),Zr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(26)}))),Or=Ot("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r})=>{const i=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{});return{ShapeItemFullState:i,ShapeItem:(0,Pt.X$i)(t["@@generic"](i),{type:(0,Pt.euz)("shape"),autoHeight:(0,Pt.zMY)()}),ShapeItemState:a["@@generic"](i)}})),_r=Ot("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r})=>{const i=(0,Pt.k5n)(["top","middle","bottom"]),o=(0,Pt.Ikc)({top:(0,Pt.aig)(),left:(0,Pt.aig)(),bottom:(0,Pt.aig)(),right:(0,Pt.aig)()}),n=(0,Pt.X$i)(r,{text:a,textVerticalAlign:i,textPadding:o});return{TextVerticalAlign:i,TextPadding:o,TextItemFullState:n,TextItem:(0,Pt.X$i)(e["@@generic"](n),{type:(0,Pt.euz)("text"),autoHeight:(0,Pt.zMY)()}),TextItemState:t["@@generic"](n)}})),jr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(27)}))),Yr=Ot("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),o=(0,Pt.Ikc)({text:(0,Pt.YjP)(),model:(0,Pt.YjP)(),stability:(0,Pt.lqM)((0,Pt.aig)()),similarity:(0,Pt.lqM)((0,Pt.aig)()),styleExaggeration:(0,Pt.lqM)((0,Pt.aig)()),speakerBoost:(0,Pt.lqM)((0,Pt.zMY)()),voiceName:(0,Pt.YjP)(),voiceSource:(0,Pt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Pt.lqM)((0,Pt.zMY)()),advancedSettingsModified:(0,Pt.lqM)((0,Pt.zMY)())}),n=(0,Pt.Ikc)({audioSources:i,transcript:(0,Pt.YjP)()}),l=(0,Pt.X$i)((0,Pt.X$i)(a,n.def.shape),{}),s=(0,Pt.X$i)((0,Pt.X$i)(n,r.def.shape),{});return{AudioAssets:i,AiAudioSettings:o,AudioItemFullState:l,AudioItem:(0,Pt.X$i)(e["@@generic"](l,s),{type:(0,Pt.euz)("audio"),aiAudioSettings:(0,Pt.lqM)(o)}),AudioItemState:t["@@generic"](l)}})),Hr=Ot("BaseItem",["Asset","LocaleOverride","State","Version"],(({Asset:e},{LocaleOverrides:t},{BaseItemFullState:a,LocalizableBaseItemState:r,StateMeta:i},{SchemaVersion:o})=>{const n={"@@generic":e=>(0,Pt.E$q)(i,Rt(e))},l={"@@generic":e=>(0,Pt.E$q)((0,Pt.Ikc)({default:e}),(0,Pt.g1P)((0,Pt.YjP)(),n["@@generic"](e)))},s={"@@generic":(a,i=r)=>(0,Pt.Ikc)({id:(0,Pt.YjP)(),blockumentId:(0,Pt.YjP)(),clonedFromId:(0,Pt.lqM)((0,Pt.YjP)()),parentId:(0,Pt.YjP)(),type:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128)),locked:(0,Pt.zMY)(),authoringVisible:(0,Pt.zMY)(),initialVisible:(0,Pt.zMY)(),initialState:(0,Pt.YjP)(),states:l["@@generic"](a),assets:(0,Pt.g1P)((0,Pt.YjP)(),e),removed:(0,Pt.zMY)(),layer:(0,Pt.lqM)((0,Pt.YjP)()),aiExperiment:(0,Pt.lqM)((0,Pt.zMY)()),localeOverrides:t["@@generic"](i),translatableUpdatedAt:(0,Pt.lqM)((0,Pt.YjP)()),_v:o})},c=n["@@generic"](a);return{State:n,States:l,BaseItem:s,BaseItemState:c}})),Er=Ot("GroupItem",["Backdrop","BaseItem","ItemRef","State"],(({GroupBackdropStateData:e},{BaseItem:t,State:a},{ItemRef:r},{BaseItemFullState:i,LocalizableBaseItemState:o})=>{const n=(0,Pt.X$i)((0,Pt.X$i)(i,e.def.shape),{_groupBrand:(0,Pt.lqM)((0,Pt.ZmZ)())});return{GroupItemFullState:n,GroupItem:(0,Pt.X$i)(t["@@generic"](n,o),{type:(0,Pt.euz)("group"),children:(0,Pt.YOg)(r)}),GroupItemState:a["@@generic"](n)}})),Gr=Ot("ImageItem",["Backdrop","BaseItem","State"],(({BackdropImageFillData:e,ImageBackdropStateData:t},{BaseItem:a,State:r},{BaseItemFullState:i,LocalizableBaseItemState:o})=>{const n=(0,Pt.X$i)((0,Pt.X$i)(i,t.def.shape),{}),l=(0,Pt.X$i)((0,Pt.X$i)(e,o.def.shape),{});return{ImageItemFullState:n,ImageItem:(0,Pt.X$i)(a["@@generic"](n,l),{type:(0,Pt.euz)("image")}),ImageItemState:r["@@generic"](n)}})),Xr=Ot("LineItem",["Backdrop","BaseItem","State"],(({LineBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r,LocalizableBaseItemState:i})=>{const o=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{});return{LineItemFullState:o,LineItem:(0,Pt.X$i)(t["@@generic"](o,i),{type:(0,Pt.euz)("line")}),LineItemState:a["@@generic"](o)}})),qr=Ot("LocaleOverride",["State"],(({LocalizableBaseItemState:e})=>{const t=e=>(0,Pt.Ikc)({states:(0,Pt.E$q)((0,Pt.Ikc)({default:(0,Pt.lqM)(Rt(e))}),(0,Pt.g1P)((0,Pt.YjP)(),Rt(e))),translationId:(0,Pt.lqM)((0,Pt.YjP)()),translationRequestedAt:(0,Pt.lqM)((0,Pt.YjP)())});return{LocaleOverrides:{"@@generic":e=>(0,Pt.g1P)((0,Pt.YjP)(),t(e))}}})),Nr=Ot("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r,TextItemStateLocaleOverrideable:i})=>{const o=(0,Pt.X$i)((0,Pt.X$i)(r,e.def.shape),{});return{ShapeItemFullState:o,ShapeItem:(0,Pt.X$i)(t["@@generic"](o,i),{type:(0,Pt.euz)("shape"),autoHeight:(0,Pt.zMY)()}),ShapeItemState:a["@@generic"](o)}})),Ur=Ot("State",[],(()=>{const e=(0,Pt.Ikc)({id:(0,Pt.YjP)(),name:(0,Pt.YjP)().check((0,Pt.Ru6)(128))}),t=(0,Pt.Ikc)({altText:(0,Pt.YjP)()});return{StateMeta:e,LocalizableBaseItemState:t,BaseItemFullState:(0,Pt.X$i)((0,Pt.X$i)(e,t.def.shape),{x:(0,Pt.aig)(),y:(0,Pt.aig)(),xOffset:(0,Pt.aig)(),yOffset:(0,Pt.aig)(),width:(0,Pt.aig)(),height:(0,Pt.aig)(),opacity:(0,Pt.aig)().check((0,Pt.ROM)(0),(0,Pt.wJL)(1)),aspectRatioLocked:(0,Pt.zMY)(),rotation:(0,Pt.aig)(),flipX:(0,Pt.zMY)(),flipY:(0,Pt.zMY)(),authoringAspectRatioCropLock:(0,Pt.k5n)(["freeform","preset","none"])})}})),Wr=Ot("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r,LocalizableBaseItemState:i})=>{const o=(0,Pt.k5n)(["top","middle","bottom"]),n=(0,Pt.Ikc)({top:(0,Pt.aig)(),left:(0,Pt.aig)(),bottom:(0,Pt.aig)(),right:(0,Pt.aig)()}),l=(0,Pt.Ikc)({text:a}),s=(0,Pt.X$i)((0,Pt.X$i)(r,l.def.shape),{textVerticalAlign:o,textPadding:n}),c=(0,Pt.X$i)((0,Pt.X$i)(l,i.def.shape),{});return{TextVerticalAlign:o,TextPadding:n,LocalizableTextItemFullState:l,TextItemFullState:s,TextItemStateLocaleOverrideable:c,TextItem:(0,Pt.X$i)(e["@@generic"](s,c),{type:(0,Pt.euz)("text"),autoHeight:(0,Pt.zMY)()}),TextItemState:t["@@generic"](s)}})),Qr=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(28)}))),Kr=Ot("VideoItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),o=(0,Pt.Ikc)({videoSources:i}),n=(0,Pt.X$i)((0,Pt.X$i)(a,o.def.shape),{}),l=(0,Pt.X$i)((0,Pt.X$i)(o,r.def.shape),{});return{VideoAssets:i,VideoItemFullState:n,VideoItem:(0,Pt.X$i)(e["@@generic"](n,l),{type:(0,Pt.euz)("video")}),VideoItemState:t["@@generic"](n)}})),ei=Ot("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),o=(0,Pt.Ikc)({text:(0,Pt.YjP)(),model:(0,Pt.YjP)(),stability:(0,Pt.aig)(),similarity:(0,Pt.aig)(),speed:(0,Pt.aig)(),styleExaggeration:(0,Pt.lqM)((0,Pt.aig)()),speakerBoost:(0,Pt.lqM)((0,Pt.zMY)()),voiceName:(0,Pt.YjP)(),voiceSource:(0,Pt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Pt.lqM)((0,Pt.zMY)()),advancedSettingsModified:(0,Pt.lqM)((0,Pt.zMY)())}),n=(0,Pt.Ikc)({audioSources:i,transcript:(0,Pt.YjP)()}),l=(0,Pt.X$i)((0,Pt.X$i)(a,n.def.shape),{}),s=(0,Pt.X$i)((0,Pt.X$i)(n,r.def.shape),{});return{AudioAssets:i,AiAudioSettings:o,AudioItemFullState:l,AudioItem:(0,Pt.X$i)(e["@@generic"](l,s),{type:(0,Pt.euz)("audio"),aiAudioSettings:(0,Pt.lqM)(o)}),AudioItemState:t["@@generic"](l)}})),ti=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(29)}))),ai=Ot("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Pt.Ikc)({default:(0,Pt.YjP)()}),o=(0,Pt.k5n)(["reverted-to-source","supported-locale-fallback","unsupported-locale"]),n=(0,Pt.Ikc)({text:(0,Pt.YjP)(),model:(0,Pt.YjP)(),stability:(0,Pt.aig)(),similarity:(0,Pt.aig)(),speed:(0,Pt.aig)(),styleExaggeration:(0,Pt.lqM)((0,Pt.aig)()),speakerBoost:(0,Pt.lqM)((0,Pt.zMY)()),voiceName:(0,Pt.YjP)(),voiceSource:(0,Pt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Pt.lqM)((0,Pt.zMY)()),advancedSettingsModified:(0,Pt.lqM)((0,Pt.zMY)()),l10nAutoGenStatus:(0,Pt.lqM)(o)}),l=(0,Pt.Ikc)({audioSources:i,transcript:(0,Pt.YjP)(),aiAudioSettings:(0,Pt.lqM)(n)}),s=(0,Pt.X$i)((0,Pt.X$i)(a,l.def.shape),{}),c=(0,Pt.X$i)((0,Pt.X$i)(l,r.def.shape),{});return{AudioAssets:i,AiAudioSettings:n,AudioItemFullState:s,AudioItem:(0,Pt.X$i)(e["@@generic"](s,c),{type:(0,Pt.euz)("audio")}),AudioItemState:t["@@generic"](s)}})),ri=Ot("Version",[],(()=>({SchemaVersion:(0,Pt.euz)(30)}))),ii=_t([jt,Yt,Ht]),oi=_t([Et,Gt,Xt,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,ra,ia,oa,na,la,sa,ca,da,pa,ha,ma,ua,ga]),ni=_t([Et,fa,Gt,Xt,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,va,ia,oa,na,la,sa,ca,da,pa,ha,ma,Sa,ga]),li=_t([Et,fa,Gt,Ia,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,va,ia,oa,na,la,sa,ba,xa,wa,pa,ha,ma,ya,ga]),si=_t([Et,fa,Gt,Ia,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,va,ia,oa,na,la,sa,ka,xa,Ca,pa,ha,ma,Ta,ga]),ci=_t([Et,fa,Gt,Ia,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,va,ia,oa,na,la,sa,Ba,xa,Ca,Ma,ha,ma,La,ga]),di=_t([Et,fa,Gt,Ia,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,va,ia,oa,na,la,sa,Ba,xa,Ca,Ma,ha,ma,Aa,ga]),pi=_t([Et,fa,Gt,Ia,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,va,ia,oa,na,la,sa,Ba,xa,Ca,Ma,ha,ma,Da,ga]),hi=_t([Et,fa,Gt,Fa,qt,Nt,Ut,Wt,Qt,Kt,ea,za,va,Va,oa,na,la,sa,Ba,xa,Ca,Ma,ha,ma,Ja,ga]),mi=_t([Et,fa,Gt,Fa,qt,$a,Nt,Ut,Wt,Qt,Kt,ea,za,va,Va,oa,na,la,sa,Ba,Pa,Ca,Ma,ha,ma,Ra,ga]),ui=_t([Et,fa,Gt,Fa,qt,$a,Nt,Ut,Wt,Qt,Kt,ea,za,va,Va,oa,na,la,sa,Ba,Pa,Ca,Ma,Za,ma,Oa,ga]),gi=_t([Et,fa,_a,Fa,qt,$a,ja,Ya,za,va,Va,oa,na,Ha,la,sa,Ba,Pa,Ea,Ma,Za,ma,Ga,ga]),fi=_t([Et,fa,Xa,qa,qt,$a,Na,za,va,Va,oa,na,la,sa,Ba,Pa,Ua,Ma,Wa,ma,Qa,ga]),vi=_t([Et,fa,Xa,qa,qt,$a,Na,za,va,Va,oa,na,la,sa,Ba,Pa,Ua,Ma,Wa,ma,Ka,ga]),Si=_t([Et,fa,Xa,qa,qt,$a,Na,za,va,Va,oa,na,la,sa,er,Pa,Ua,Ma,Wa,ma,tr,ga]),Ii=_t([Et,fa,ar,Xa,qa,qt,$a,rr,ir,or,nr,Va,oa,na,la,sa,er,lr,sr,Ma,Wa,ma,cr,ga]),bi=_t([Et,fa,ar,dr,qa,qt,$a,rr,ir,or,nr,Va,oa,na,sa,er,lr,pr,Ma,Wa,ma,hr,ga]),xi=_t([Et,fa,ar,dr,mr,qt,$a,rr,ir,or,nr,Va,oa,na,sa,er,lr,pr,Ma,Wa,ma,ur,ga]),wi=_t([Et,fa,ar,dr,mr,qt,$a,rr,ir,or,nr,Va,oa,na,sa,er,gr,pr,Ma,Wa,ma,fr,ga]),yi=_t([Et,fa,ar,dr,mr,qt,$a,rr,ir,or,nr,Va,oa,na,sa,er,gr,pr,Ma,Wa,ma,vr,ga]),ki=_t([Et,Sr,Ir,dr,mr,qt,$a,rr,ir,or,br,Va,oa,xr,na,sa,wr,gr,pr,Ma,Wa,ma,yr,ga]),Ci=_t([Et,Sr,Ir,dr,mr,qt,$a,rr,ir,or,br,kr,oa,xr,na,sa,wr,gr,pr,Ma,Wa,ma,Cr,ga]),Ti=_t([Et,Sr,Ir,dr,mr,qt,$a,rr,ir,or,br,kr,oa,xr,na,sa,wr,gr,pr,Ma,Wa,ma,Tr,ga]),Bi=_t([Et,Sr,Ir,dr,mr,qt,$a,rr,ir,Br,br,kr,oa,Mr,na,sa,wr,lr,Lr,Ma,Wa,ma,Ar,ga]),Mi=_t([Et,Dr,Ir,dr,mr,qt,$a,rr,ir,Br,br,kr,oa,Mr,na,sa,wr,lr,Lr,Ma,Wa,ma,Fr,ga]),Li=_t([Et,Dr,zr,dr,mr,Vr,Jr,$r,ir,Br,br,kr,oa,Mr,na,sa,Pr,lr,Rr,Ma,Wa,Zr,ga]),Ai=_t([Et,Dr,zr,dr,mr,Vr,Jr,$r,ir,Br,br,kr,oa,Mr,na,sa,Pr,Or,Rr,_r,Wa,jr,ga]),Di=_t([Et,Yr,zr,Hr,mr,Vr,Jr,$r,Er,Gr,br,kr,oa,Xr,qr,na,sa,Pr,Nr,Ur,Wr,Wa,Qr,Kr]),Fi=_t([Et,ei,zr,Hr,mr,Vr,Jr,$r,Er,Gr,br,kr,oa,Xr,qr,na,sa,Pr,Nr,Ur,Wr,Wa,ti,Kr]),zi=_t([Et,ai,zr,Hr,mr,Vr,Jr,$r,Er,Gr,br,kr,oa,Xr,qr,na,sa,Pr,Nr,Ur,Wr,Wa,ri,Kr]),Vi=_t([Et,ai,zr,Hr,mr,Vr,Jr,$r,Er,Gr,br,kr,oa,Xr,qr,na,sa,Pr,Nr,Ur,Wr,Wa,ri,Kr]),Ji=(Vi.Asset.Asset,Vi.AudioItem.AudioAssets,Vi.AudioItem.AiAudioSettings,Vi.AudioItem.AudioItemFullState,Vi.AudioItem.AudioItem,Vi.AudioItem.AudioItemState,Vi.Backdrop.BorderBackdropData,Vi.Backdrop.OverlayBackdropData,Vi.Backdrop.ExtendedBackdropData,Vi.Backdrop.BackdropColorFillData,Vi.Backdrop.BackdropImageFillData,Vi.Backdrop.GroupBackdropStateData,Vi.Backdrop.ShapeBackdropStateData,Vi.Backdrop.ImageBackdropStateData,Vi.Backdrop.LineBackdropStateData,Vi.BaseItem.BaseItemState,Vi.Blockument.Blockument,Vi.Border.Border,Vi.DropShadow.DropShadow,Vi.Fill.FillImageCrop,Vi.Fill.FillColor,Vi.Fill.FillImage,Vi.Fill.FillLinearGradient,Vi.GroupItem.GroupItemFullState,Vi.GroupItem.GroupItem,Vi.GroupItem.GroupItemState,Vi.ImageItem.ImageItemFullState,Vi.ImageItem.ImageItem,Vi.ImageItem.ImageItemState,Vi.Item.Item,Vi.ItemRef.ItemRef,Vi.JSONContent.JSONContent,Vi.LineItem.LineItemFullState,Vi.LineItem.LineItem,Vi.LineItem.LineItemState,Vi.Manifest.Manifest,Vi.RichTextRef.RichTextRef,Vi.ShapeDef.ShapeDefBase,Vi.ShapeDef.ShapeDefRoundedCorners,Vi.ShapeDef.ShapeRectangle,Vi.ShapeDef.ShapeEllipse,Vi.ShapeDef.ShapeStar,Vi.ShapeDef.ShapeCloud,Vi.ShapeDef.ShapePlus,Vi.ShapeDef.ShapeTriangle,Vi.ShapeDef.ShapeBookmark,Vi.ShapeDef.ShapeChevron,Vi.ShapeDef.ShapeOctagon,Vi.ShapeDef.ShapeParallelogram,Vi.ShapeDef.ShapeShield,Vi.ShapeDef.ShapeSpeechBubble,Vi.ShapeDef.ShapeArrow,Vi.ShapeDef.LineEndStyle,Vi.ShapeDef.LineEnd,Vi.ShapeDef.ShapeLine,Vi.ShapeDef.ShapeDef,Vi.ShapeItem.ShapeItemFullState,Vi.ShapeItem.ShapeItem,Vi.ShapeItem.ShapeItemState,Vi.State.StateMeta,Vi.State.LocalizableBaseItemState,Vi.State.BaseItemFullState,Vi.TextItem.TextVerticalAlign,Vi.TextItem.TextPadding,Vi.TextItem.LocalizableTextItemFullState,Vi.TextItem.TextItemFullState,Vi.TextItem.TextItemStateLocaleOverrideable,Vi.TextItem.TextItem,Vi.TextItem.TextItemState,Vi.Trigger.TriggerMediaAction,Vi.Trigger.TriggerChangeStateAction,Vi.Trigger.TriggerChangeVisibilityAction,Vi.Trigger.TriggerChangeLayerAction,Vi.Trigger.TriggerAction,Vi.Trigger.Trigger,Vi.Version.SchemaVersion,Vi.VideoItem.VideoAssets,Vi.VideoItem.VideoItemFullState,Vi.VideoItem.VideoItem,Vi.VideoItem.VideoItemState,{click:"click",hover:"hover",mediaPlay:"mediaPlay",mediaPause:"mediaPause",mediaEnd:"mediaEnd"}),$i="changeState",Pi="changeVisibility",Ri="mediaPause",Zi="mediaPlay",Oi="mediaEnd",_i="changeLayer";var ji=a(2),Yi=a.n(ji),Hi=a(3537),Ei=a.n(Hi),Gi=a(8683),Xi=a.n(Gi);ii.LocaleContext.LocaleContext;const qi=ii.ReviewData.TranslationsReviewArray,Ni=(ii.ReviewData.TranslationsReviewItem,ii.VersionedEntity.VersionedEntity,ii.VersionedEntity.VersionedManifest),Ui=(oi.Asset.Asset,oi.BaseItem.BaseItemState,oi.Blockument.Blockument,oi.Border.Border,oi.Fill.Fill,oi.FillBase.FillBase,oi.FillColor.FillColor,oi.FillImage.FillImageCrop,oi.FillImage.FillImage,oi.FillNone.FillNone,oi.FillOverlay.FillOverlay,oi.GroupItem.GroupItemFullState,oi.GroupItem.GroupItem,oi.GroupItem.GroupItemState,oi.ImageItem.ImageItemFullState,oi.ImageItem.ImageItem,oi.ImageItem.ImageItemState,oi.Item.Item,oi.ItemRef.ItemRef,oi.JSONContent.JSONContent,oi.Manifest.Manifest),Wi=(oi.Padding.Padding,oi.RichTextRef.RichTextRef,oi.ShapeItem.ShapeItemFullState,oi.ShapeItem.ShapeItem,oi.ShapeItem.ShapeItemState,oi.State.StateMeta,oi.State.BaseItemFullState,oi.TextItem.TextVerticalAlign,oi.TextItem.TextItemFullState,oi.TextItem.TextItem,oi.TextItem.TextItemState,oi.Trigger.TriggerMediaAction,oi.Trigger.TriggerChangeState,oi.Trigger.TriggerChangeVisibility,oi.Trigger.Trigger,oi.Unit.Unit,oi.Version.SchemaVersion,oi.VideoItem.VideoAssets,oi.VideoItem.VideoItemFullState,oi.VideoItem.VideoItem,oi.VideoItem.VideoItemState,ni.Asset.Asset,ni.AudioItem.AudioAssets,ni.AudioItem.AudioItemFullState,ni.AudioItem.AudioItem,ni.AudioItem.AudioItemState,ni.BaseItem.BaseItemState,ni.Blockument.Blockument,ni.Border.Border,ni.Fill.Fill,ni.FillBase.FillBase,ni.FillColor.FillColor,ni.FillImage.FillImageCrop,ni.FillImage.FillImage,ni.FillNone.FillNone,ni.FillOverlay.FillOverlay,ni.GroupItem.GroupItemFullState,ni.GroupItem.GroupItem,ni.GroupItem.GroupItemState,ni.Item.Item,ni.ItemRef.ItemRef,ni.JSONContent.JSONContent,ni.Manifest.Manifest);ni.Padding.Padding,ni.RichTextRef.RichTextRef,ni.ShapeItem.ShapeItemFullState,ni.ShapeItem.ShapeItem,ni.ShapeItem.ShapeItemState,ni.State.StateMeta,ni.State.BaseItemFullState,ni.TextItem.TextVerticalAlign,ni.TextItem.TextItemFullState,ni.TextItem.TextItem,ni.TextItem.TextItemState,ni.Trigger.TriggerMediaAction,ni.Trigger.TriggerChangeState,ni.Trigger.TriggerChangeVisibility,ni.Trigger.Trigger,ni.Unit.Unit,ni.Version.SchemaVersion,ni.VideoItem.VideoAssets,ni.VideoItem.VideoItemFullState,ni.VideoItem.VideoItem,ni.VideoItem.VideoItemState;var Qi=a(4816),Ki=a.n(Qi);function eo(e,t,a){const{default:r,...i}=e;return{default:t(r),...Ki()(i,a)}}function to(e){return{...e,altText:"altText"in e?e.altText??null:void 0}}function ao(e){return{...e,clipPath:null,altText:e.altText??null,text:{id:crypto.randomUUID(),type:"tiptap",json:{type:"doc",content:[]}},textVerticalAlign:"middle"}}function ro(e){return"image"===e.type?function(e){return{...e,_v:3,type:"shape",states:eo(e.states,ao,to)}}(e):{...e,_v:3}}li.Asset.Asset,li.AudioItem.AudioAssets,li.AudioItem.AudioItemFullState,li.AudioItem.AudioItem,li.AudioItem.AudioItemState,li.BaseItem.BaseItemState,li.Blockument.Blockument,li.Border.Border,li.Fill.Fill,li.FillBase.FillBase,li.FillColor.FillColor,li.FillImage.FillImageCrop,li.FillImage.FillImage,li.FillNone.FillNone,li.FillOverlay.FillOverlay,li.GroupItem.GroupItemFullState,li.GroupItem.GroupItem,li.GroupItem.GroupItemState,li.Item.Item,li.ItemRef.ItemRef,li.JSONContent.JSONContent;const io=li.Manifest.Manifest;function oo(e){return e.applied?{type:"rectangle",borderRadius:{topLeft:e.topLeft.value,topRight:e.topRight.value,bottomRight:e.bottomRight.value,bottomLeft:e.bottomLeft.value}}:{type:"rectangle"}}function no(e){const{clipPath:t,borderRadius:a,...r}=e;return"ellipse"===t?{...r,clipDef:{type:"ellipse"}}:{...r,clipDef:oo(a)}}function lo(e){const{borderRadius:t,...a}=e;return{...a,clipDef:oo(t)}}function so(e){const{borderRadius:t,...a}=e;return t?{...a,clipDef:oo(t)}:{...a}}function co(e){if("shape"===e.type)return{...e,_v:4,states:eo(e.states,no,(t=>function(e,t){const{clipPath:a,borderRadius:r,...i}=e;return"ellipse"===a?{...i,clipDef:{type:"ellipse"}}:"ellipse"===t.clipPath?{...i}:r?{...i,clipDef:oo(r)}:{...i}}(t,e.states.default)))};if("text"===e.type)return{...e,_v:4,states:eo(e.states,lo,so)};if("video"===e.type)return{...e,_v:4,states:eo(e.states,lo,so)};if("group"===e.type)return{...e,_v:4,states:eo(e.states,lo,so)};if("audio"===e.type)return{...e,_v:4,states:eo(e.states,lo,so)};throw new Error("Internal error: should be unreachable")}li.Padding.Padding,li.RichTextRef.RichTextRef,li.ShapeDef.ShapeRectangle,li.ShapeDef.ShapeEllipse,li.ShapeDef.ShapeStar,li.ShapeDef.ShapeCloud,li.ShapeDef.ShapeDef,li.ShapeItem.ShapeItemFullState,li.ShapeItem.ShapeItem,li.ShapeItem.ShapeItemState,li.State.StateMeta,li.State.BaseItemFullState,li.TextItem.TextVerticalAlign,li.TextItem.TextItemFullState,li.TextItem.TextItem,li.TextItem.TextItemState,li.Trigger.TriggerMediaAction,li.Trigger.TriggerChangeState,li.Trigger.TriggerChangeVisibility,li.Trigger.Trigger,li.Unit.Unit,li.Version.SchemaVersion,li.VideoItem.VideoAssets,li.VideoItem.VideoItemFullState,li.VideoItem.VideoItem,li.VideoItem.VideoItemState,si.Asset.Asset,si.AudioItem.AudioAssets,si.AudioItem.AudioItemFullState,si.AudioItem.AudioItem,si.AudioItem.AudioItemState,si.BaseItem.BaseItemState,si.Blockument.Blockument,si.Border.Border,si.Fill.Fill,si.FillBase.FillBase,si.FillColor.FillColor,si.FillImage.FillImageCrop,si.FillImage.FillImage,si.FillNone.FillNone,si.FillOverlay.FillOverlay,si.GroupItem.GroupItemFullState,si.GroupItem.GroupItem,si.GroupItem.GroupItemState,si.Item.Item,si.ItemRef.ItemRef,si.JSONContent.JSONContent;const po=si.Manifest.Manifest,ho=(si.Padding.Padding,si.RichTextRef.RichTextRef,si.ShapeDef.ShapeRectangle,si.ShapeDef.ShapeEllipse,si.ShapeDef.ShapeStar,si.ShapeDef.ShapeCloud,si.ShapeDef.ShapePlus,si.ShapeDef.ShapeTriangle,si.ShapeDef.ShapeBookmark,si.ShapeDef.ShapeChevron,si.ShapeDef.ShapeOctagon,si.ShapeDef.ShapeParallelogram,si.ShapeDef.ShapeDef,si.ShapeItem.ShapeItemFullState,si.ShapeItem.ShapeItem,si.ShapeItem.ShapeItemState,si.State.StateMeta,si.State.BaseItemFullState,si.TextItem.TextVerticalAlign,si.TextItem.TextItemFullState,si.TextItem.TextItem,si.TextItem.TextItemState,si.Trigger.TriggerMediaAction,si.Trigger.TriggerChangeState,si.Trigger.TriggerChangeVisibility,si.Trigger.Trigger,si.Unit.Unit,si.Version.SchemaVersion,si.VideoItem.VideoAssets,si.VideoItem.VideoItemFullState,si.VideoItem.VideoItem,si.VideoItem.VideoItemState,{authoringAspectRatioCropLock:"none"});function mo(e){return{...e,...ho}}function uo(e){const t=null!=e.width||null!=e.height?ho:null;return{...e,...t}}function go(e){if("shape"===e.type)return{...e,_v:5,states:eo(e.states,mo,uo)};if("text"===e.type)return{...e,_v:5,states:eo(e.states,mo,uo)};if("video"===e.type)return{...e,_v:5,states:eo(e.states,mo,uo)};if("audio"===e.type)return{...e,_v:5,states:eo(e.states,mo,uo)};if("group"===e.type)return{...e,_v:5,states:eo(e.states,mo,uo)};throw new Error("Unexpected item type!")}ci.Asset.Asset,ci.AudioItem.AudioAssets,ci.AudioItem.AudioItemFullState,ci.AudioItem.AudioItem,ci.AudioItem.AudioItemState,ci.BaseItem.BaseItemState,ci.Blockument.Blockument,ci.Border.Border,ci.Fill.Fill,ci.FillBase.FillBase,ci.FillColor.FillColor,ci.FillImage.FillImageCrop,ci.FillImage.FillImage,ci.FillNone.FillNone,ci.FillOverlay.FillOverlay,ci.GroupItem.GroupItemFullState,ci.GroupItem.GroupItem,ci.GroupItem.GroupItemState,ci.Item.Item,ci.ItemRef.ItemRef,ci.JSONContent.JSONContent;const fo=ci.Manifest.Manifest,vo=(ci.Padding.Padding,ci.RichTextRef.RichTextRef,ci.ShapeDef.ShapeRectangle,ci.ShapeDef.ShapeEllipse,ci.ShapeDef.ShapeStar,ci.ShapeDef.ShapeCloud,ci.ShapeDef.ShapePlus,ci.ShapeDef.ShapeTriangle,ci.ShapeDef.ShapeBookmark,ci.ShapeDef.ShapeChevron,ci.ShapeDef.ShapeOctagon,ci.ShapeDef.ShapeParallelogram,ci.ShapeDef.ShapeShield,ci.ShapeDef.ShapeSpeechBubble,ci.ShapeDef.ShapeArrow,ci.ShapeDef.ShapeDef,ci.ShapeItem.ShapeItemFullState,ci.ShapeItem.ShapeItem,ci.ShapeItem.ShapeItemState,ci.State.StateMeta,ci.State.BaseItemFullState,ci.TextItem.TextVerticalAlign,ci.TextItem.TextPadding,ci.TextItem.TextItemFullState,ci.TextItem.TextItem,ci.TextItem.TextItemState,ci.Trigger.TriggerMediaAction,ci.Trigger.TriggerChangeState,ci.Trigger.TriggerChangeVisibility,ci.Trigger.Trigger,ci.Unit.Unit,ci.Version.SchemaVersion,ci.VideoItem.VideoAssets,ci.VideoItem.VideoItemFullState,ci.VideoItem.VideoItem,ci.VideoItem.VideoItemState,{top:20,left:20,bottom:20,right:20}),So={top:0,left:0,bottom:0,right:0};function Io(e){return"text"===e.type?{...e,_v:6,states:eo(e.states,(e=>({...e,textPadding:So})),(e=>e))}:"shape"===e.type?{...e,_v:6,states:eo(e.states,(e=>({...e,textPadding:vo})),(e=>e))}:{...e,_v:6}}di.Asset.Asset,di.AudioItem.AudioAssets,di.AudioItem.AudioItemFullState,di.AudioItem.AudioItem,di.AudioItem.AudioItemState,di.BaseItem.BaseItemState,di.Blockument.Blockument,di.Border.Border,di.Fill.Fill,di.FillBase.FillBase,di.FillColor.FillColor,di.FillImage.FillImageCrop,di.FillImage.FillImage,di.FillNone.FillNone,di.FillOverlay.FillOverlay,di.GroupItem.GroupItemFullState,di.GroupItem.GroupItem,di.GroupItem.GroupItemState,di.Item.Item,di.ItemRef.ItemRef,di.JSONContent.JSONContent;const bo=di.Manifest.Manifest;function xo(e,t){const a=t.width?.value??e.width.value,r=a<=100?8:a>300?32:16;return{top:16,left:r,bottom:16,right:r}}function wo(e){return"shape"===e.type?{...e,states:(t=e.states,eo(t,(e=>({...e,textPadding:xo(e,e)})),(e=>e.textPadding||e.width?{...e,textPadding:xo(t.default,e)}:e))),_v:7}:{...e,_v:7};var t}di.Padding.Padding,di.RichTextRef.RichTextRef,di.ShapeDef.ShapeRectangle,di.ShapeDef.ShapeEllipse,di.ShapeDef.ShapeStar,di.ShapeDef.ShapeCloud,di.ShapeDef.ShapePlus,di.ShapeDef.ShapeTriangle,di.ShapeDef.ShapeBookmark,di.ShapeDef.ShapeChevron,di.ShapeDef.ShapeOctagon,di.ShapeDef.ShapeParallelogram,di.ShapeDef.ShapeShield,di.ShapeDef.ShapeSpeechBubble,di.ShapeDef.ShapeArrow,di.ShapeDef.ShapeDef,di.ShapeItem.ShapeItemFullState,di.ShapeItem.ShapeItem,di.ShapeItem.ShapeItemState,di.State.StateMeta,di.State.BaseItemFullState,di.TextItem.TextVerticalAlign,di.TextItem.TextPadding,di.TextItem.TextItemFullState,di.TextItem.TextItem,di.TextItem.TextItemState,di.Trigger.TriggerMediaAction,di.Trigger.TriggerChangeState,di.Trigger.TriggerChangeVisibility,di.Trigger.Trigger,di.Unit.Unit,di.Version.SchemaVersion,di.VideoItem.VideoAssets,di.VideoItem.VideoItemFullState,di.VideoItem.VideoItem,di.VideoItem.VideoItemState,pi.Asset.Asset,pi.AudioItem.AudioAssets,pi.AudioItem.AudioItemFullState,pi.AudioItem.AudioItem,pi.AudioItem.AudioItemState,pi.BaseItem.BaseItemState,pi.Blockument.Blockument,pi.Border.Border,pi.Fill.Fill,pi.FillBase.FillBase,pi.FillColor.FillColor,pi.FillImage.FillImageCrop,pi.FillImage.FillImage,pi.FillNone.FillNone,pi.FillOverlay.FillOverlay,pi.GroupItem.GroupItemFullState,pi.GroupItem.GroupItem,pi.GroupItem.GroupItemState,pi.Item.Item,pi.ItemRef.ItemRef,pi.JSONContent.JSONContent;const yo=pi.Manifest.Manifest,ko=(pi.Padding.Padding,pi.RichTextRef.RichTextRef,pi.ShapeDef.ShapeRectangle,pi.ShapeDef.ShapeEllipse,pi.ShapeDef.ShapeStar,pi.ShapeDef.ShapeCloud,pi.ShapeDef.ShapePlus,pi.ShapeDef.ShapeTriangle,pi.ShapeDef.ShapeBookmark,pi.ShapeDef.ShapeChevron,pi.ShapeDef.ShapeOctagon,pi.ShapeDef.ShapeParallelogram,pi.ShapeDef.ShapeShield,pi.ShapeDef.ShapeSpeechBubble,pi.ShapeDef.ShapeArrow,pi.ShapeDef.ShapeDef,pi.ShapeItem.ShapeItemFullState,pi.ShapeItem.ShapeItem,pi.ShapeItem.ShapeItemState,pi.State.StateMeta,pi.State.BaseItemFullState,pi.TextItem.TextVerticalAlign,pi.TextItem.TextPadding,pi.TextItem.TextItemFullState,pi.TextItem.TextItem,pi.TextItem.TextItemState,pi.Trigger.TriggerMediaAction,pi.Trigger.TriggerChangeState,pi.Trigger.TriggerChangeVisibility,pi.Trigger.Trigger,pi.Unit.Unit,pi.Version.SchemaVersion,pi.VideoItem.VideoAssets,pi.VideoItem.VideoItemFullState,pi.VideoItem.VideoItem,pi.VideoItem.VideoItemState,"mondrian/assets");function Co(e){return{...e,_v:8,assets:Ki()(e.assets??{},(e=>({...e,path:`${ko}/${e.path}`})))}}hi.Asset.Asset,hi.AudioItem.AudioAssets,hi.AudioItem.AudioItemFullState,hi.AudioItem.AudioItem,hi.AudioItem.AudioItemState,hi.BaseItem.BaseItemState,hi.Blockument.Blockument,hi.Border.Border,hi.Fill.Fill,hi.FillBase.FillBase,hi.FillColor.FillColor,hi.FillImage.FillImageCrop,hi.FillImage.FillImage,hi.FillNone.FillNone,hi.FillOverlay.FillOverlay,hi.GroupItem.GroupItemFullState,hi.GroupItem.GroupItem,hi.GroupItem.GroupItemState,hi.Item.Item,hi.ItemRef.ItemRef,hi.JSONContent.JSONContent;const To=hi.Manifest.Manifest;function Bo(e){return{...e,_v:9,children:e.children.map((({id:e,clonedFromId:t})=>({id:e,clonedFromId:t})))}}function Mo(e){return"group"===e.type?function(e){const t=new Map,{default:a,...r}=e.states,i=[a,...s(r)];for(const e of i)if(e.children)for(const{id:a,clonedFromId:r}of e.children)t.has(a)||t.set(a,{id:a,clonedFromId:r});return{...e,_v:9,children:[...t.values()],states:eo(e.states,(({children:e,...t})=>t),(({children:e,...t})=>t))}}(e):{...e,_v:9}}hi.Padding.Padding,hi.RichTextRef.RichTextRef,hi.ShapeDef.ShapeRectangle,hi.ShapeDef.ShapeEllipse,hi.ShapeDef.ShapeStar,hi.ShapeDef.ShapeCloud,hi.ShapeDef.ShapePlus,hi.ShapeDef.ShapeTriangle,hi.ShapeDef.ShapeBookmark,hi.ShapeDef.ShapeChevron,hi.ShapeDef.ShapeOctagon,hi.ShapeDef.ShapeParallelogram,hi.ShapeDef.ShapeShield,hi.ShapeDef.ShapeSpeechBubble,hi.ShapeDef.ShapeArrow,hi.ShapeDef.ShapeDef,hi.ShapeItem.ShapeItemFullState,hi.ShapeItem.ShapeItem,hi.ShapeItem.ShapeItemState,hi.State.StateMeta,hi.State.BaseItemFullState,hi.TextItem.TextVerticalAlign,hi.TextItem.TextPadding,hi.TextItem.TextItemFullState,hi.TextItem.TextItem,hi.TextItem.TextItemState,hi.Trigger.TriggerMediaAction,hi.Trigger.TriggerChangeState,hi.Trigger.TriggerChangeVisibility,hi.Trigger.Trigger,hi.Unit.Unit,hi.Version.SchemaVersion,hi.VideoItem.VideoAssets,hi.VideoItem.VideoItemFullState,hi.VideoItem.VideoItem,hi.VideoItem.VideoItemState,mi.Asset.Asset,mi.AudioItem.AudioAssets,mi.AudioItem.AudioItemFullState,mi.AudioItem.AudioItem,mi.AudioItem.AudioItemState,mi.BaseItem.BaseItemState,mi.Blockument.Blockument,mi.Border.Border,mi.DropShadow.DropShadow,mi.Fill.Fill,mi.FillBase.FillBase,mi.FillColor.FillColor,mi.FillImage.FillImageCrop,mi.FillImage.FillImage,mi.FillNone.FillNone,mi.FillOverlay.FillOverlay,mi.GroupItem.GroupItemFullState,mi.GroupItem.GroupItem,mi.GroupItem.GroupItemState,mi.Item.Item,mi.ItemRef.ItemRef,mi.JSONContent.JSONContent;const Lo=mi.Manifest.Manifest;function Ao(e){return"shape"===e.type?{...e,_v:10,states:eo(e.states,(e=>({...e,dropShadow:{applied:!1}})),(e=>e))}:{...e,_v:10}}mi.Padding.Padding,mi.RichTextRef.RichTextRef,mi.ShapeDef.ShapeRectangle,mi.ShapeDef.ShapeEllipse,mi.ShapeDef.ShapeStar,mi.ShapeDef.ShapeCloud,mi.ShapeDef.ShapePlus,mi.ShapeDef.ShapeTriangle,mi.ShapeDef.ShapeBookmark,mi.ShapeDef.ShapeChevron,mi.ShapeDef.ShapeOctagon,mi.ShapeDef.ShapeParallelogram,mi.ShapeDef.ShapeShield,mi.ShapeDef.ShapeSpeechBubble,mi.ShapeDef.ShapeArrow,mi.ShapeDef.ShapeDef,mi.ShapeItem.ShapeItemFullState,mi.ShapeItem.ShapeItem,mi.ShapeItem.ShapeItemState,mi.State.StateMeta,mi.State.BaseItemFullState,mi.TextItem.TextVerticalAlign,mi.TextItem.TextPadding,mi.TextItem.TextItemFullState,mi.TextItem.TextItem,mi.TextItem.TextItemState,mi.Trigger.TriggerMediaAction,mi.Trigger.TriggerChangeState,mi.Trigger.TriggerChangeVisibility,mi.Trigger.Trigger,mi.Unit.Unit,mi.Version.SchemaVersion,mi.VideoItem.VideoAssets,mi.VideoItem.VideoItemFullState,mi.VideoItem.VideoItem,mi.VideoItem.VideoItemState,ui.Asset.Asset,ui.AudioItem.AudioAssets,ui.AudioItem.AudioItemFullState,ui.AudioItem.AudioItem,ui.AudioItem.AudioItemState,ui.BaseItem.BaseItemState,ui.Blockument.Blockument,ui.Border.Border,ui.DropShadow.DropShadow,ui.Fill.Fill,ui.FillBase.FillBase,ui.FillColor.FillColor,ui.FillImage.FillImageCrop,ui.FillImage.FillImage,ui.FillNone.FillNone,ui.FillOverlay.FillOverlay,ui.GroupItem.GroupItemFullState,ui.GroupItem.GroupItem,ui.GroupItem.GroupItemState,ui.Item.Item,ui.ItemRef.ItemRef,ui.JSONContent.JSONContent;const Do=ui.Manifest.Manifest;function Fo(e){switch(e.action){case"changeState":return{type:e.action,targetId:[e.targetId],targetState:e.targetState};case"changeVisibility":return{type:e.action,targetId:[e.targetId],targetVisibility:e.targetVisibility};default:return{type:e.action,targetId:[e.targetId]}}}function zo(e){return{...e,triggers:e.triggers.map((e=>({id:e.id,event:e.event,sourceId:e.sourceId,actions:[Fo(e)]}))),_v:11}}function Vo(e){return{...e,_v:11}}ui.Padding.Padding,ui.RichTextRef.RichTextRef,ui.ShapeDef.ShapeRectangle,ui.ShapeDef.ShapeEllipse,ui.ShapeDef.ShapeStar,ui.ShapeDef.ShapeCloud,ui.ShapeDef.ShapePlus,ui.ShapeDef.ShapeTriangle,ui.ShapeDef.ShapeBookmark,ui.ShapeDef.ShapeChevron,ui.ShapeDef.ShapeOctagon,ui.ShapeDef.ShapeParallelogram,ui.ShapeDef.ShapeShield,ui.ShapeDef.ShapeSpeechBubble,ui.ShapeDef.ShapeArrow,ui.ShapeDef.ShapeDef,ui.ShapeItem.ShapeItemFullState,ui.ShapeItem.ShapeItem,ui.ShapeItem.ShapeItemState,ui.State.StateMeta,ui.State.BaseItemFullState,ui.TextItem.TextVerticalAlign,ui.TextItem.TextPadding,ui.TextItem.TextItemFullState,ui.TextItem.TextItem,ui.TextItem.TextItemState,ui.Trigger.TriggerMediaAction,ui.Trigger.TriggerChangeStateAction,ui.Trigger.TriggerChangeVisibilityAction,ui.Trigger.TriggerAction,ui.Trigger.Trigger,ui.Unit.Unit,ui.Version.SchemaVersion,ui.VideoItem.VideoAssets,ui.VideoItem.VideoItemFullState,ui.VideoItem.VideoItem,ui.VideoItem.VideoItemState,gi.Asset.Asset,gi.AudioItem.AudioAssets,gi.AudioItem.AudioItemFullState,gi.AudioItem.AudioItem,gi.AudioItem.AudioItemState,gi.BaseItem.BaseItemState,gi.Blockument.Blockument,gi.Border.Border,gi.DropShadow.DropShadow,gi.Fill.Fill,gi.FillBase.FillImageCrop,gi.FillBase.FillBase,gi.FillBase.FillColorFields,gi.FillBase.FillImageFields,gi.GroupItem.GroupItemFullState,gi.GroupItem.GroupItem,gi.GroupItem.GroupItemState,gi.Item.Item,gi.ItemRef.ItemRef,gi.JSONContent.JSONContent;const Jo=gi.Manifest.Manifest;gi.OverlayFill.OverlayFill,gi.Padding.Padding,gi.RichTextRef.RichTextRef,gi.ShapeDef.ShapeRectangle,gi.ShapeDef.ShapeEllipse,gi.ShapeDef.ShapeStar,gi.ShapeDef.ShapeCloud,gi.ShapeDef.ShapePlus,gi.ShapeDef.ShapeTriangle,gi.ShapeDef.ShapeBookmark,gi.ShapeDef.ShapeChevron,gi.ShapeDef.ShapeOctagon,gi.ShapeDef.ShapeParallelogram,gi.ShapeDef.ShapeShield,gi.ShapeDef.ShapeSpeechBubble,gi.ShapeDef.ShapeArrow,gi.ShapeDef.ShapeDef,gi.ShapeItem.ShapeItemFullState,gi.ShapeItem.ShapeItem,gi.ShapeItem.ShapeItemState,gi.State.StateMeta,gi.State.BaseItemFullState,gi.TextItem.TextVerticalAlign,gi.TextItem.TextPadding,gi.TextItem.TextItemFullState,gi.TextItem.TextItem,gi.TextItem.TextItemState,gi.Trigger.TriggerMediaAction,gi.Trigger.TriggerChangeStateAction,gi.Trigger.TriggerChangeVisibilityAction,gi.Trigger.TriggerAction,gi.Trigger.Trigger,gi.Unit.Unit,gi.Version.SchemaVersion,gi.VideoItem.VideoAssets,gi.VideoItem.VideoItemFullState,gi.VideoItem.VideoItem,gi.VideoItem.VideoItemState;var $o=a(3330),Po=a.n($o);const Ro={createDocument:()=>document.implementation.createHTMLDocument(),createDocumentFromHTML:e=>(new DOMParser).parseFromString(e,"text/html")};let Zo;S.ZF.fromSchema(te);const Oo=S.S4.fromSchema(te),_o=[h,m,"Lato","Raleway","Roboto","Merriweather","Open Sans","Lora","Roboto Slab","Maitree","Cormorant","Montserrat","Poppins","Inter","Be Vietnam","DM Sans","Lustria","Maven Pro","Oswald"];function jo(e){const t=(Zo??(Zo=Ro.createDocument())).createElement("div");t.innerHTML=e;let a=Oo.parse(t,{preserveWhitespace:"full"}).toJSON();return a=ne({callback:e=>{let t;const a=[];"paragraph"===e.type?t=ie:(t={...ie,fontFamily:h,textSize:e.attrs?.level?v[e.attrs.level].fontSize:u},a.push({type:"bold"})),ne({callback:r=>{if(r.marks){const i=r.marks.find((e=>"textStyle"===e.type));if(i)if(i.attrs)for(const[e,a]of c(t))[void 0,""].includes(i.attrs[e])&&(i.attrs[e]=a);else i.attrs={...t};else r.marks=[...r.marks,{type:"textStyle",attrs:{...t}}];"heading"===e.type&&(r.marks.find((e=>"bold"===e.type))||(r.marks=[...a,...r.marks]))}else r.marks=[...a,{type:"textStyle",attrs:{...t}}];r.marks.sort(((e,t)=>e.type.localeCompare(t.type)))},contentTypes:["text"],doc:e})},contentTypes:["heading","paragraph"],doc:a}),a=function(e,t,a={heading:h,body:m}){const r=ne({callback:e=>{e.attrs?.fontFamily&&e.attrs.fontFamily.includes(",")&&(e.attrs.fontFamily=e.attrs.fontFamily.split(",")[0].trim()),t.some((t=>t.toLowerCase()===e.attrs?.fontFamily?.toLowerCase()))||(e.attrs.fontFamily=a.body)},contentTypes:["listItem"],doc:e}),i=(e,a)=>{const r=(e.marks??[]).find((e=>"textStyle"===e.type));r?.attrs?.fontFamily&&(r.attrs.fontFamily.includes(",")&&(r.attrs.fontFamily=r.attrs.fontFamily.split(",")[0].trim()),t.some((e=>e.toLowerCase()===r.attrs.fontFamily.toLowerCase()))||(r.attrs.fontFamily=a))},o=ne({callback:e=>{const t="heading"===e.type?a.heading:a.body;return ne({callback:e=>{i(e,t)},contentTypes:["text"],doc:e})},contentTypes:["heading","paragraph"],doc:r});return ne({callback:e=>{i(e,a.body)},contentTypes:["text"],doc:o})}(a,_o),a}function Yo(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(e)}const Ho=new Set(d({richText:0,altText:0,transcript:0,script:0}));function Eo(e){if(5!==e.length)return null;const[t,a,r,i,o]=e;return"mondrian"===t&&Yo(a)&&Yo(r)&&("default"===i||Yo(i))&&(n=o,Ho.has(n))?{blockumentId:a,itemId:r,stateId:i,type:o}:null;var n}const Go={id:crypto.randomUUID(),name:"bike.jpg",path:"mondrian/assets/default/bike.jpg",width:1680,height:1120},Xo={type:"color",opacity:1},qo={...Xo,crop:{height:1,width:1,top:0,left:0}};function No(e){return e&&"none"!==e.type?"color"===e.type?{...e,crop:qo.crop}:e:qo}function Uo(e){return{...e,_v:12}}function Wo(e){return{...e,fill:No(e.fill),overlay:No(e.overlay)}}function Qo(e){return{...e,fill:No(e.fill),overlay:(t=e.overlay,t&&"none"!==t.type?t:Xo)};var t}function Ko(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return function(e){return e.assets[Go.id]=Go,e.states.default.fill.assetId||(e.states.default.fill.assetId=Go.id),e}({...e,states:eo(e.states,Wo,Qo),_v:12,assets:e.assets??{}});default:throw new Error("Unreachable")}}fi.Asset.Asset,fi.AudioItem.AudioAssets,fi.AudioItem.AudioItemFullState,fi.AudioItem.AudioItem,fi.AudioItem.AudioItemState,fi.BaseItem.BaseItemState,fi.Blockument.Blockument,fi.Border.Border,fi.DropShadow.DropShadow,fi.Fill.FillImageCrop,fi.Fill.FillColorFields,fi.Fill.Fill,fi.GroupItem.GroupItemFullState,fi.GroupItem.GroupItem,fi.GroupItem.GroupItemState,fi.Item.Item,fi.ItemRef.ItemRef,fi.JSONContent.JSONContent;const en=fi.Manifest.Manifest;function tn(e){return{...e,layers:[],_v:13}}function an(e){return{...e,opacity:1}}function rn(e){return{...e,opacity:1}}function on(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,states:eo(e.states,an,rn),_v:13};default:throw new Error("Unreachable")}}fi.Padding.Padding,fi.RichTextRef.RichTextRef,fi.ShapeDef.ShapeRectangle,fi.ShapeDef.ShapeEllipse,fi.ShapeDef.ShapeStar,fi.ShapeDef.ShapeCloud,fi.ShapeDef.ShapePlus,fi.ShapeDef.ShapeTriangle,fi.ShapeDef.ShapeBookmark,fi.ShapeDef.ShapeChevron,fi.ShapeDef.ShapeOctagon,fi.ShapeDef.ShapeParallelogram,fi.ShapeDef.ShapeShield,fi.ShapeDef.ShapeSpeechBubble,fi.ShapeDef.ShapeArrow,fi.ShapeDef.ShapeDef,fi.ShapeItem.ShapeItemFullState,fi.ShapeItem.ShapeItem,fi.ShapeItem.ShapeItemState,fi.State.StateMeta,fi.State.BaseItemFullState,fi.TextItem.TextVerticalAlign,fi.TextItem.TextPadding,fi.TextItem.TextItemFullState,fi.TextItem.TextItem,fi.TextItem.TextItemState,fi.Trigger.TriggerMediaAction,fi.Trigger.TriggerChangeStateAction,fi.Trigger.TriggerChangeVisibilityAction,fi.Trigger.TriggerChangeLayerAction,fi.Trigger.TriggerAction,fi.Trigger.Trigger,fi.Unit.Unit,fi.Version.SchemaVersion,fi.VideoItem.VideoAssets,fi.VideoItem.VideoItemFullState,fi.VideoItem.VideoItem,fi.VideoItem.VideoItemState,vi.Asset.Asset,vi.AudioItem.AudioAssets,vi.AudioItem.AudioItemFullState,vi.AudioItem.AudioItem,vi.AudioItem.AudioItemState,vi.BaseItem.BaseItemState,vi.Blockument.Blockument,vi.Border.Border,vi.DropShadow.DropShadow,vi.Fill.FillImageCrop,vi.Fill.FillColorFields,vi.Fill.Fill,vi.GroupItem.GroupItemFullState,vi.GroupItem.GroupItem,vi.GroupItem.GroupItemState,vi.Item.Item,vi.ItemRef.ItemRef,vi.JSONContent.JSONContent;const nn=vi.Manifest.Manifest;function ln(e){return{...e,_v:14}}function sn(e){return{...e,opacity:1}}function cn(e){return{...e,opacity:1}}function dn(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,states:eo(e.states,sn,cn),_v:14};default:throw new Error("Unreachable")}}vi.Padding.Padding,vi.RichTextRef.RichTextRef,vi.ShapeDef.ShapeRectangle,vi.ShapeDef.ShapeEllipse,vi.ShapeDef.ShapeStar,vi.ShapeDef.ShapeCloud,vi.ShapeDef.ShapePlus,vi.ShapeDef.ShapeTriangle,vi.ShapeDef.ShapeBookmark,vi.ShapeDef.ShapeChevron,vi.ShapeDef.ShapeOctagon,vi.ShapeDef.ShapeParallelogram,vi.ShapeDef.ShapeShield,vi.ShapeDef.ShapeSpeechBubble,vi.ShapeDef.ShapeArrow,vi.ShapeDef.ShapeDef,vi.ShapeItem.ShapeItemFullState,vi.ShapeItem.ShapeItem,vi.ShapeItem.ShapeItemState,vi.State.StateMeta,vi.State.BaseItemFullState,vi.TextItem.TextVerticalAlign,vi.TextItem.TextPadding,vi.TextItem.TextItemFullState,vi.TextItem.TextItem,vi.TextItem.TextItemState,vi.Trigger.TriggerMediaAction,vi.Trigger.TriggerChangeStateAction,vi.Trigger.TriggerChangeVisibilityAction,vi.Trigger.TriggerChangeLayerAction,vi.Trigger.TriggerAction,vi.Trigger.Trigger,vi.Unit.Unit,vi.Version.SchemaVersion,vi.VideoItem.VideoAssets,vi.VideoItem.VideoItemFullState,vi.VideoItem.VideoItem,vi.VideoItem.VideoItemState,Si.Asset.Asset,Si.AudioItem.AudioAssets,Si.AudioItem.AudioItemFullState,Si.AudioItem.AudioItem,Si.AudioItem.AudioItemState,Si.BaseItem.BaseItemState,Si.Blockument.Blockument,Si.Border.Border,Si.DropShadow.DropShadow,Si.Fill.FillImageCrop,Si.Fill.FillColorFields,Si.Fill.Fill,Si.GroupItem.GroupItemFullState,Si.GroupItem.GroupItem,Si.GroupItem.GroupItemState,Si.Item.Item,Si.ItemRef.ItemRef,Si.JSONContent.JSONContent;const pn=Si.Manifest.Manifest;function hn(e){return{...e,_v:15}}function mn(e){if(e)switch(e.type){case"star":case"plus":case"triangle":case"bookmark":case"chevron":case"octagon":case"parallelogram":case"shield":case"speechBubble":case"arrow":return{...e,cornerRounding:0};default:return e}}function un(e){return{...e,clipDef:mn(e.clipDef)}}function gn(e){return{...e,clipDef:mn(e.clipDef)}}function fn(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,_v:15,states:eo(e.states,un,gn)};default:throw new Error}}Si.Padding.Padding,Si.RichTextRef.RichTextRef,Si.ShapeDef.ShapeDefBase,Si.ShapeDef.ShapeDefRoundedCorners,Si.ShapeDef.ShapeRectangle,Si.ShapeDef.ShapeEllipse,Si.ShapeDef.ShapeStar,Si.ShapeDef.ShapeCloud,Si.ShapeDef.ShapePlus,Si.ShapeDef.ShapeTriangle,Si.ShapeDef.ShapeBookmark,Si.ShapeDef.ShapeChevron,Si.ShapeDef.ShapeOctagon,Si.ShapeDef.ShapeParallelogram,Si.ShapeDef.ShapeShield,Si.ShapeDef.ShapeSpeechBubble,Si.ShapeDef.ShapeArrow,Si.ShapeDef.ShapeDef,Si.ShapeItem.ShapeItemFullState,Si.ShapeItem.ShapeItem,Si.ShapeItem.ShapeItemState,Si.State.StateMeta,Si.State.BaseItemFullState,Si.TextItem.TextVerticalAlign,Si.TextItem.TextPadding,Si.TextItem.TextItemFullState,Si.TextItem.TextItem,Si.TextItem.TextItemState,Si.Trigger.TriggerMediaAction,Si.Trigger.TriggerChangeStateAction,Si.Trigger.TriggerChangeVisibilityAction,Si.Trigger.TriggerChangeLayerAction,Si.Trigger.TriggerAction,Si.Trigger.Trigger,Si.Unit.Unit,Si.Version.SchemaVersion,Si.VideoItem.VideoAssets,Si.VideoItem.VideoItemFullState,Si.VideoItem.VideoItem,Si.VideoItem.VideoItemState,Ii.Asset.Asset,Ii.AudioItem.AudioAssets,Ii.AudioItem.AudioItemFullState,Ii.AudioItem.AudioItem,Ii.AudioItem.AudioItemState,Ii.Backdrop.MinimalBackdropData,Ii.Backdrop.ExtendedBackdropData,Ii.Backdrop.BackdropColorFillData,Ii.Backdrop.BackdropImageFillData,Ii.Backdrop.GroupBackdropStateData,Ii.Backdrop.ShapeBackdropStateData,Ii.Backdrop.ImageBackdropStateData,Ii.BaseItem.BaseItemState,Ii.Blockument.Blockument,Ii.Border.Border,Ii.DropShadow.DropShadow,Ii.Fill.FillImageCrop,Ii.Fill.FillColor,Ii.Fill.FillImage,Ii.GroupItem.GroupItemFullState,Ii.GroupItem.GroupItem,Ii.GroupItem.GroupItemState,Ii.ImageItem.ImageItemFullState,Ii.ImageItem.ImageItem,Ii.ImageItem.ImageItemState,Ii.Item.Item,Ii.ItemRef.ItemRef,Ii.JSONContent.JSONContent;const vn=Ii.Manifest.Manifest;Ii.Padding.Padding,Ii.RichTextRef.RichTextRef,Ii.ShapeDef.ShapeDefBase,Ii.ShapeDef.ShapeDefRoundedCorners,Ii.ShapeDef.ShapeRectangle,Ii.ShapeDef.ShapeEllipse,Ii.ShapeDef.ShapeStar,Ii.ShapeDef.ShapeCloud,Ii.ShapeDef.ShapePlus,Ii.ShapeDef.ShapeTriangle,Ii.ShapeDef.ShapeBookmark,Ii.ShapeDef.ShapeChevron,Ii.ShapeDef.ShapeOctagon,Ii.ShapeDef.ShapeParallelogram,Ii.ShapeDef.ShapeShield,Ii.ShapeDef.ShapeSpeechBubble,Ii.ShapeDef.ShapeArrow,Ii.ShapeDef.ShapeDef,Ii.ShapeItem.ShapeItemFullState,Ii.ShapeItem.ShapeItem,Ii.ShapeItem.ShapeItemState,Ii.State.StateMeta,Ii.State.BaseItemFullState,Ii.TextItem.TextVerticalAlign,Ii.TextItem.TextPadding,Ii.TextItem.TextItemFullState,Ii.TextItem.TextItem,Ii.TextItem.TextItemState,Ii.Trigger.TriggerMediaAction,Ii.Trigger.TriggerChangeStateAction,Ii.Trigger.TriggerChangeVisibilityAction,Ii.Trigger.TriggerChangeLayerAction,Ii.Trigger.TriggerAction,Ii.Trigger.Trigger,Ii.Unit.Unit,Ii.Version.SchemaVersion,Ii.VideoItem.VideoAssets,Ii.VideoItem.VideoItemFullState,Ii.VideoItem.VideoItem,Ii.VideoItem.VideoItemState;function Sn(e){return{...e,_v:16}}function In(e){let t;return t="group"===e.type?function(e){return e.parentId===e.blockumentId?{...e,_v:16,states:eo(e.states,(e=>({border:{applied:!1,type:"none",color:"#000000",opacity:1,style:"solid",width:{value:1,unit:"px"}},overlay:{opacity:1},fill:{opacity:1},...e})),(e=>e))}:{...e,_v:16,states:eo(e.states,(e=>({...e,border:{applied:!1,type:"none",color:"#000000",opacity:1,style:"solid",width:{value:1,unit:"px"}},overlay:{opacity:1},fill:{opacity:1}})),(e=>{const{border:t,overlay:a,fill:r,...i}=e;return i}))}}(e):"shape"===e.type?function(e){return"image"===e.states.default.fill.type&&e.states.default.fill.assetId&&e.assets[e.states.default.fill.assetId]?{...e,_v:16,type:"image",states:eo(e.states,(e=>{const{clipDef:t,altText:a,...r}=e;return{...r,shapeDef:t,altText:a??""}}),(e=>{if("image"===e.fill?.type){const{clipDef:t,altText:a,...r}=e;return{...r,shapeDef:t,altText:a??void 0}}{const{border:t,overlay:a,fill:r,clipDef:i,altText:o,...n}=e;return{...n,shapeDef:i,altText:o??void 0}}}))}:{...e,_v:16,states:eo(e.states,(e=>{const{clipDef:t,...a}=e;return{...a,shapeDef:t}}),(e=>{if("color"===e.fill?.type){const{clipDef:t,...a}=e;return{...a,shapeDef:t}}{const{border:t,overlay:a,fill:r,clipDef:i,...o}=e;return{...o,shapeDef:i}}}))}}(e):{...e,_v:16},function(e){const t=[];"audio"===e.type&&t.push(...s(e.states).map((e=>e.audioSources?.default))),"video"===e.type&&t.push(...s(e.states).map((e=>e.videoSources?.default))),"image"===e.type&&t.push(...s(e.states).map((e=>e.fill?.assetId)));const a=new Set(t);e.assets=Po()(e.assets,((e,t)=>a.has(t)))}(t),t}bi.Asset.Asset,bi.AudioItem.AudioAssets,bi.AudioItem.AudioItemFullState,bi.AudioItem.AudioItem,bi.AudioItem.AudioItemState,bi.Backdrop.MinimalBackdropData,bi.Backdrop.ExtendedBackdropData,bi.Backdrop.BackdropColorFillData,bi.Backdrop.BackdropImageFillData,bi.Backdrop.GroupBackdropStateData,bi.Backdrop.ShapeBackdropStateData,bi.Backdrop.ImageBackdropStateData,bi.BaseItem.BaseItemState,bi.Blockument.Blockument,bi.Border.Border,bi.DropShadow.DropShadow,bi.Fill.FillImageCrop,bi.Fill.FillColor,bi.Fill.FillImage,bi.GroupItem.GroupItemFullState,bi.GroupItem.GroupItem,bi.GroupItem.GroupItemState,bi.ImageItem.ImageItemFullState,bi.ImageItem.ImageItem,bi.ImageItem.ImageItemState,bi.Item.Item,bi.ItemRef.ItemRef,bi.JSONContent.JSONContent;const bn=bi.Manifest.Manifest;function xn(e){return{...e,_v:17}}function wn(e){return{...e,_v:17}}bi.RichTextRef.RichTextRef,bi.ShapeDef.ShapeDefBase,bi.ShapeDef.ShapeDefRoundedCorners,bi.ShapeDef.ShapeRectangle,bi.ShapeDef.ShapeEllipse,bi.ShapeDef.ShapeStar,bi.ShapeDef.ShapeCloud,bi.ShapeDef.ShapePlus,bi.ShapeDef.ShapeTriangle,bi.ShapeDef.ShapeBookmark,bi.ShapeDef.ShapeChevron,bi.ShapeDef.ShapeOctagon,bi.ShapeDef.ShapeParallelogram,bi.ShapeDef.ShapeShield,bi.ShapeDef.ShapeSpeechBubble,bi.ShapeDef.ShapeArrow,bi.ShapeDef.ShapeDef,bi.ShapeItem.ShapeItemFullState,bi.ShapeItem.ShapeItem,bi.ShapeItem.ShapeItemState,bi.State.StateMeta,bi.State.BaseItemFullState,bi.TextItem.TextVerticalAlign,bi.TextItem.TextPadding,bi.TextItem.TextItemFullState,bi.TextItem.TextItem,bi.TextItem.TextItemState,bi.Trigger.TriggerMediaAction,bi.Trigger.TriggerChangeStateAction,bi.Trigger.TriggerChangeVisibilityAction,bi.Trigger.TriggerChangeLayerAction,bi.Trigger.TriggerAction,bi.Trigger.Trigger,bi.Unit.Unit,bi.Version.SchemaVersion,bi.VideoItem.VideoAssets,bi.VideoItem.VideoItemFullState,bi.VideoItem.VideoItem,bi.VideoItem.VideoItemState,xi.Asset.Asset,xi.AudioItem.AudioAssets,xi.AudioItem.AudioItemFullState,xi.AudioItem.AudioItem,xi.AudioItem.AudioItemState,xi.Backdrop.MinimalBackdropData,xi.Backdrop.ExtendedBackdropData,xi.Backdrop.BackdropColorFillData,xi.Backdrop.BackdropImageFillData,xi.Backdrop.GroupBackdropStateData,xi.Backdrop.ShapeBackdropStateData,xi.Backdrop.ImageBackdropStateData,xi.BaseItem.BaseItemState,xi.Blockument.Blockument,xi.Border.Border,xi.DropShadow.DropShadow,xi.Fill.FillImageCrop,xi.Fill.FillColor,xi.Fill.FillImage,xi.GroupItem.GroupItemFullState,xi.GroupItem.GroupItem,xi.GroupItem.GroupItemState,xi.ImageItem.ImageItemFullState,xi.ImageItem.ImageItem,xi.ImageItem.ImageItemState,xi.Item.Item,xi.ItemRef.ItemRef,xi.JSONContent.JSONContent;const yn=xi.Manifest.Manifest;function kn(e){return{...e,authoringOpened:!0,_v:18}}function Cn(e){return{...e,_v:18}}xi.RichTextRef.RichTextRef,xi.ShapeDef.ShapeDefBase,xi.ShapeDef.ShapeDefRoundedCorners,xi.ShapeDef.ShapeRectangle,xi.ShapeDef.ShapeEllipse,xi.ShapeDef.ShapeStar,xi.ShapeDef.ShapeCloud,xi.ShapeDef.ShapePlus,xi.ShapeDef.ShapeTriangle,xi.ShapeDef.ShapeBookmark,xi.ShapeDef.ShapeChevron,xi.ShapeDef.ShapeOctagon,xi.ShapeDef.ShapeParallelogram,xi.ShapeDef.ShapeShield,xi.ShapeDef.ShapeSpeechBubble,xi.ShapeDef.ShapeArrow,xi.ShapeDef.ShapeDef,xi.ShapeItem.ShapeItemFullState,xi.ShapeItem.ShapeItem,xi.ShapeItem.ShapeItemState,xi.State.StateMeta,xi.State.BaseItemFullState,xi.TextItem.TextVerticalAlign,xi.TextItem.TextPadding,xi.TextItem.TextItemFullState,xi.TextItem.TextItem,xi.TextItem.TextItemState,xi.Trigger.TriggerMediaAction,xi.Trigger.TriggerChangeStateAction,xi.Trigger.TriggerChangeVisibilityAction,xi.Trigger.TriggerChangeLayerAction,xi.Trigger.TriggerAction,xi.Trigger.Trigger,xi.Unit.Unit,xi.Version.SchemaVersion,xi.VideoItem.VideoAssets,xi.VideoItem.VideoItemFullState,xi.VideoItem.VideoItem,xi.VideoItem.VideoItemState,wi.Asset.Asset,wi.AudioItem.AudioAssets,wi.AudioItem.AudioItemFullState,wi.AudioItem.AudioItem,wi.AudioItem.AudioItemState,wi.Backdrop.MinimalBackdropData,wi.Backdrop.ExtendedBackdropData,wi.Backdrop.BackdropColorFillData,wi.Backdrop.BackdropImageFillData,wi.Backdrop.GroupBackdropStateData,wi.Backdrop.ShapeBackdropStateData,wi.Backdrop.ImageBackdropStateData,wi.BaseItem.BaseItemState,wi.Blockument.Blockument,wi.Border.Border,wi.DropShadow.DropShadow,wi.Fill.FillImageCrop,wi.Fill.FillColor,wi.Fill.FillImage,wi.GroupItem.GroupItemFullState,wi.GroupItem.GroupItem,wi.GroupItem.GroupItemState,wi.ImageItem.ImageItemFullState,wi.ImageItem.ImageItem,wi.ImageItem.ImageItemState,wi.Item.Item,wi.ItemRef.ItemRef,wi.JSONContent.JSONContent;const Tn=wi.Manifest.Manifest;function Bn(e){return{...e,_v:19}}function Mn(e){return"shape"===e.type?{...e,_v:19,states:eo(e.states,(e=>({...e,altText:""})),(e=>e))}:{...e,_v:19}}wi.RichTextRef.RichTextRef,wi.ShapeDef.ShapeDefBase,wi.ShapeDef.ShapeDefRoundedCorners,wi.ShapeDef.ShapeRectangle,wi.ShapeDef.ShapeEllipse,wi.ShapeDef.ShapeStar,wi.ShapeDef.ShapeCloud,wi.ShapeDef.ShapePlus,wi.ShapeDef.ShapeTriangle,wi.ShapeDef.ShapeBookmark,wi.ShapeDef.ShapeChevron,wi.ShapeDef.ShapeOctagon,wi.ShapeDef.ShapeParallelogram,wi.ShapeDef.ShapeShield,wi.ShapeDef.ShapeSpeechBubble,wi.ShapeDef.ShapeArrow,wi.ShapeDef.ShapeDef,wi.ShapeItem.ShapeItemFullState,wi.ShapeItem.ShapeItem,wi.ShapeItem.ShapeItemState,wi.State.StateMeta,wi.State.BaseItemFullState,wi.TextItem.TextVerticalAlign,wi.TextItem.TextPadding,wi.TextItem.TextItemFullState,wi.TextItem.TextItem,wi.TextItem.TextItemState,wi.Trigger.TriggerMediaAction,wi.Trigger.TriggerChangeStateAction,wi.Trigger.TriggerChangeVisibilityAction,wi.Trigger.TriggerChangeLayerAction,wi.Trigger.TriggerAction,wi.Trigger.Trigger,wi.Unit.Unit,wi.Version.SchemaVersion,wi.VideoItem.VideoAssets,wi.VideoItem.VideoItemFullState,wi.VideoItem.VideoItem,wi.VideoItem.VideoItemState,yi.Asset.Asset,yi.AudioItem.AudioAssets,yi.AudioItem.AudioItemFullState,yi.AudioItem.AudioItem,yi.AudioItem.AudioItemState,yi.Backdrop.MinimalBackdropData,yi.Backdrop.ExtendedBackdropData,yi.Backdrop.BackdropColorFillData,yi.Backdrop.BackdropImageFillData,yi.Backdrop.GroupBackdropStateData,yi.Backdrop.ShapeBackdropStateData,yi.Backdrop.ImageBackdropStateData,yi.BaseItem.BaseItemState,yi.Blockument.Blockument,yi.Border.Border,yi.DropShadow.DropShadow,yi.Fill.FillImageCrop,yi.Fill.FillColor,yi.Fill.FillImage,yi.GroupItem.GroupItemFullState,yi.GroupItem.GroupItem,yi.GroupItem.GroupItemState,yi.ImageItem.ImageItemFullState,yi.ImageItem.ImageItem,yi.ImageItem.ImageItemState,yi.Item.Item,yi.ItemRef.ItemRef,yi.JSONContent.JSONContent;const Ln=yi.Manifest.Manifest;function An(e){ne({callback:e=>{e.marks&&(e.marks=e.marks.filter((e=>"code"!==e.type)))},contentTypes:["text"],doc:e})}function Dn(e){return e.text?.json?(An(e.text?.json),e):e}function Fn(e){return e.text?.json?(An(e.text?.json),e):e}function zn(e){return e.text?.json?(An(e.text?.json),e):e}function Vn(e){return e.text?.json?(An(e.text?.json),e):e}function Jn(e){return{...e,_v:20}}function $n(e){switch(e.type){case"text":return{...e,_v:20,states:eo(e.states,Dn,Fn)};case"shape":return{...e,_v:20,states:eo(e.states,zn,Vn)};default:return{...e,_v:20}}}yi.RichTextRef.RichTextRef,yi.ShapeDef.ShapeDefBase,yi.ShapeDef.ShapeDefRoundedCorners,yi.ShapeDef.ShapeRectangle,yi.ShapeDef.ShapeEllipse,yi.ShapeDef.ShapeStar,yi.ShapeDef.ShapeCloud,yi.ShapeDef.ShapePlus,yi.ShapeDef.ShapeTriangle,yi.ShapeDef.ShapeBookmark,yi.ShapeDef.ShapeChevron,yi.ShapeDef.ShapeOctagon,yi.ShapeDef.ShapeParallelogram,yi.ShapeDef.ShapeShield,yi.ShapeDef.ShapeSpeechBubble,yi.ShapeDef.ShapeArrow,yi.ShapeDef.ShapeDef,yi.ShapeItem.ShapeItemFullState,yi.ShapeItem.ShapeItem,yi.ShapeItem.ShapeItemState,yi.State.StateMeta,yi.State.BaseItemFullState,yi.TextItem.TextVerticalAlign,yi.TextItem.TextPadding,yi.TextItem.TextItemFullState,yi.TextItem.TextItem,yi.TextItem.TextItemState,yi.Trigger.TriggerMediaAction,yi.Trigger.TriggerChangeStateAction,yi.Trigger.TriggerChangeVisibilityAction,yi.Trigger.TriggerChangeLayerAction,yi.Trigger.TriggerAction,yi.Trigger.Trigger,yi.Unit.Unit,yi.Version.SchemaVersion,yi.VideoItem.VideoAssets,yi.VideoItem.VideoItemFullState,yi.VideoItem.VideoItem,yi.VideoItem.VideoItemState,ki.Asset.Asset,ki.AudioItem.AudioAssets,ki.AudioItem.AiAudioSettings,ki.AudioItem.AudioItemFullState,ki.AudioItem.AudioItem,ki.AudioItem.AudioItemState,ki.Backdrop.BorderBackdropData,ki.Backdrop.OverlayBackdropData,ki.Backdrop.ExtendedBackdropData,ki.Backdrop.BackdropColorFillData,ki.Backdrop.BackdropImageFillData,ki.Backdrop.GroupBackdropStateData,ki.Backdrop.ShapeBackdropStateData,ki.Backdrop.ImageBackdropStateData,ki.Backdrop.LineBackdropStateData,ki.BaseItem.BaseItemState,ki.Blockument.Blockument,ki.Border.Border,ki.DropShadow.DropShadow,ki.Fill.FillImageCrop,ki.Fill.FillColor,ki.Fill.FillImage,ki.GroupItem.GroupItemFullState,ki.GroupItem.GroupItem,ki.GroupItem.GroupItemState,ki.ImageItem.ImageItemFullState,ki.ImageItem.ImageItem,ki.ImageItem.ImageItemState,ki.Item.Item,ki.ItemRef.ItemRef,ki.JSONContent.JSONContent,ki.LineItem.LineItemFullState,ki.LineItem.LineItem,ki.LineItem.LineItemState;const Pn=ki.Manifest.Manifest;function Rn(e){return{...e,_v:21}}function Zn(e){return{...e,_v:21}}ki.RichTextRef.RichTextRef,ki.ShapeDef.ShapeDefBase,ki.ShapeDef.ShapeDefRoundedCorners,ki.ShapeDef.ShapeRectangle,ki.ShapeDef.ShapeEllipse,ki.ShapeDef.ShapeStar,ki.ShapeDef.ShapeCloud,ki.ShapeDef.ShapePlus,ki.ShapeDef.ShapeTriangle,ki.ShapeDef.ShapeBookmark,ki.ShapeDef.ShapeChevron,ki.ShapeDef.ShapeOctagon,ki.ShapeDef.ShapeParallelogram,ki.ShapeDef.ShapeShield,ki.ShapeDef.ShapeSpeechBubble,ki.ShapeDef.ShapeArrow,ki.ShapeDef.LineEndStyle,ki.ShapeDef.LineEnd,ki.ShapeDef.ShapeLine,ki.ShapeDef.ShapeDef,ki.ShapeItem.ShapeItemFullState,ki.ShapeItem.ShapeItem,ki.ShapeItem.ShapeItemState,ki.State.StateMeta,ki.State.BaseItemFullState,ki.TextItem.TextVerticalAlign,ki.TextItem.TextPadding,ki.TextItem.TextItemFullState,ki.TextItem.TextItem,ki.TextItem.TextItemState,ki.Trigger.TriggerMediaAction,ki.Trigger.TriggerChangeStateAction,ki.Trigger.TriggerChangeVisibilityAction,ki.Trigger.TriggerChangeLayerAction,ki.Trigger.TriggerAction,ki.Trigger.Trigger,ki.Unit.Unit,ki.Version.SchemaVersion,ki.VideoItem.VideoAssets,ki.VideoItem.VideoItemFullState,ki.VideoItem.VideoItem,ki.VideoItem.VideoItemState,Ci.Asset.Asset,Ci.AudioItem.AudioAssets,Ci.AudioItem.AiAudioSettings,Ci.AudioItem.AudioItemFullState,Ci.AudioItem.AudioItem,Ci.AudioItem.AudioItemState,Ci.Backdrop.BorderBackdropData,Ci.Backdrop.OverlayBackdropData,Ci.Backdrop.ExtendedBackdropData,Ci.Backdrop.BackdropColorFillData,Ci.Backdrop.BackdropImageFillData,Ci.Backdrop.GroupBackdropStateData,Ci.Backdrop.ShapeBackdropStateData,Ci.Backdrop.ImageBackdropStateData,Ci.Backdrop.LineBackdropStateData,Ci.BaseItem.BaseItemState,Ci.Blockument.Blockument,Ci.Border.Border,Ci.DropShadow.DropShadow,Ci.Fill.FillImageCrop,Ci.Fill.FillColor,Ci.Fill.FillImage,Ci.GroupItem.GroupItemFullState,Ci.GroupItem.GroupItem,Ci.GroupItem.GroupItemState,Ci.ImageItem.ImageItemFullState,Ci.ImageItem.ImageItem,Ci.ImageItem.ImageItemState,Ci.Item.Item,Ci.ItemRef.ItemRef,Ci.JSONContent.JSONContent,Ci.LineItem.LineItemFullState,Ci.LineItem.LineItem,Ci.LineItem.LineItemState;const On=Ci.Manifest.Manifest;function _n(e){return e.map((({id:e,clonedFromId:t},a)=>({id:e,visualOrder:0===a?0:-a,clonedFromId:t})))}function jn(e){return{...e,_v:22,children:_n(e.children)}}function Yn(e){return"group"===e.type?{...e,_v:22,children:_n(e.children)}:{...e,_v:22}}Ci.RichTextRef.RichTextRef,Ci.ShapeDef.ShapeDefBase,Ci.ShapeDef.ShapeDefRoundedCorners,Ci.ShapeDef.ShapeRectangle,Ci.ShapeDef.ShapeEllipse,Ci.ShapeDef.ShapeStar,Ci.ShapeDef.ShapeCloud,Ci.ShapeDef.ShapePlus,Ci.ShapeDef.ShapeTriangle,Ci.ShapeDef.ShapeBookmark,Ci.ShapeDef.ShapeChevron,Ci.ShapeDef.ShapeOctagon,Ci.ShapeDef.ShapeParallelogram,Ci.ShapeDef.ShapeShield,Ci.ShapeDef.ShapeSpeechBubble,Ci.ShapeDef.ShapeArrow,Ci.ShapeDef.LineEndStyle,Ci.ShapeDef.LineEnd,Ci.ShapeDef.ShapeLine,Ci.ShapeDef.ShapeDef,Ci.ShapeItem.ShapeItemFullState,Ci.ShapeItem.ShapeItem,Ci.ShapeItem.ShapeItemState,Ci.State.StateMeta,Ci.State.BaseItemFullState,Ci.TextItem.TextVerticalAlign,Ci.TextItem.TextPadding,Ci.TextItem.TextItemFullState,Ci.TextItem.TextItem,Ci.TextItem.TextItemState,Ci.Trigger.TriggerMediaAction,Ci.Trigger.TriggerChangeStateAction,Ci.Trigger.TriggerChangeVisibilityAction,Ci.Trigger.TriggerChangeLayerAction,Ci.Trigger.TriggerAction,Ci.Trigger.Trigger,Ci.Unit.Unit,Ci.Version.SchemaVersion,Ci.VideoItem.VideoAssets,Ci.VideoItem.VideoItemFullState,Ci.VideoItem.VideoItem,Ci.VideoItem.VideoItemState,Ti.Asset.Asset,Ti.AudioItem.AudioAssets,Ti.AudioItem.AiAudioSettings,Ti.AudioItem.AudioItemFullState,Ti.AudioItem.AudioItem,Ti.AudioItem.AudioItemState,Ti.Backdrop.BorderBackdropData,Ti.Backdrop.OverlayBackdropData,Ti.Backdrop.ExtendedBackdropData,Ti.Backdrop.BackdropColorFillData,Ti.Backdrop.BackdropImageFillData,Ti.Backdrop.GroupBackdropStateData,Ti.Backdrop.ShapeBackdropStateData,Ti.Backdrop.ImageBackdropStateData,Ti.Backdrop.LineBackdropStateData,Ti.BaseItem.BaseItemState,Ti.Blockument.Blockument,Ti.Border.Border,Ti.DropShadow.DropShadow,Ti.Fill.FillImageCrop,Ti.Fill.FillColor,Ti.Fill.FillImage,Ti.GroupItem.GroupItemFullState,Ti.GroupItem.GroupItem,Ti.GroupItem.GroupItemState,Ti.ImageItem.ImageItemFullState,Ti.ImageItem.ImageItem,Ti.ImageItem.ImageItemState,Ti.Item.Item,Ti.ItemRef.ItemRef,Ti.JSONContent.JSONContent,Ti.LineItem.LineItemFullState,Ti.LineItem.LineItem,Ti.LineItem.LineItemState;const Hn=Ti.Manifest.Manifest;function En(e){return{...e,_v:23}}function Gn(e){return"shape"!==e.type&&"text"!==e.type||ne({callback:e=>{if(e.marks?.length){const t=e.marks.find((e=>"highlight"===e.type));if(t?.attrs){const a=e.marks.find((e=>"textStyle"===e.type));"number"==typeof t.attrs.textSize&&"number"==typeof a?.attrs?.textSize&&(a.attrs.textSize=t.attrs.textSize,t.attrs={color:t.attrs.color})}}},contentTypes:["text"],doc:e.states.default.text.json}),{...e,_v:23}}Ti.RichTextRef.RichTextRef,Ti.ShapeDef.ShapeDefBase,Ti.ShapeDef.ShapeDefRoundedCorners,Ti.ShapeDef.ShapeRectangle,Ti.ShapeDef.ShapeEllipse,Ti.ShapeDef.ShapeStar,Ti.ShapeDef.ShapeCloud,Ti.ShapeDef.ShapePlus,Ti.ShapeDef.ShapeTriangle,Ti.ShapeDef.ShapeBookmark,Ti.ShapeDef.ShapeChevron,Ti.ShapeDef.ShapeOctagon,Ti.ShapeDef.ShapeParallelogram,Ti.ShapeDef.ShapeShield,Ti.ShapeDef.ShapeSpeechBubble,Ti.ShapeDef.ShapeArrow,Ti.ShapeDef.LineEndStyle,Ti.ShapeDef.LineEnd,Ti.ShapeDef.ShapeLine,Ti.ShapeDef.ShapeDef,Ti.ShapeItem.ShapeItemFullState,Ti.ShapeItem.ShapeItem,Ti.ShapeItem.ShapeItemState,Ti.State.StateMeta,Ti.State.BaseItemFullState,Ti.TextItem.TextVerticalAlign,Ti.TextItem.TextPadding,Ti.TextItem.TextItemFullState,Ti.TextItem.TextItem,Ti.TextItem.TextItemState,Ti.Trigger.TriggerMediaAction,Ti.Trigger.TriggerChangeStateAction,Ti.Trigger.TriggerChangeVisibilityAction,Ti.Trigger.TriggerChangeLayerAction,Ti.Trigger.TriggerAction,Ti.Trigger.Trigger,Ti.Unit.Unit,Ti.Version.SchemaVersion,Ti.VideoItem.VideoAssets,Ti.VideoItem.VideoItemFullState,Ti.VideoItem.VideoItem,Ti.VideoItem.VideoItemState,Bi.Asset.Asset,Bi.AudioItem.AudioAssets,Bi.AudioItem.AiAudioSettings,Bi.AudioItem.AudioItemFullState,Bi.AudioItem.AudioItem,Bi.AudioItem.AudioItemState,Bi.Backdrop.BorderBackdropData,Bi.Backdrop.OverlayBackdropData,Bi.Backdrop.ExtendedBackdropData,Bi.Backdrop.BackdropColorFillData,Bi.Backdrop.BackdropImageFillData,Bi.Backdrop.GroupBackdropStateData,Bi.Backdrop.ShapeBackdropStateData,Bi.Backdrop.ImageBackdropStateData,Bi.Backdrop.LineBackdropStateData,Bi.BaseItem.BaseItemState,Bi.Blockument.Blockument,Bi.Border.Border,Bi.DropShadow.DropShadow,Bi.Fill.FillImageCrop,Bi.Fill.FillColor,Bi.Fill.FillImage,Bi.GroupItem.GroupItemFullState,Bi.GroupItem.GroupItem,Bi.GroupItem.GroupItemState,Bi.ImageItem.ImageItemFullState,Bi.ImageItem.ImageItem,Bi.ImageItem.ImageItemState,Bi.Item.Item,Bi.ItemRef.ItemRef,Bi.JSONContent.JSONContent,Bi.LineItem.LineItemFullState,Bi.LineItem.LineItem,Bi.LineItem.LineItemState;const Xn=Bi.Manifest.Manifest;function qn(e){return{...e,_v:24}}function Nn(e){return{...e,altText:""}}function Un(e){switch(e.type){case"image":case"shape":case"line":return{...e,_v:24};case"group":case"video":case"audio":case"text":return{...e,states:eo(e.states,Nn,(e=>e)),_v:24};default:throw new Error("Unexpected item type "+e.type)}}Bi.RichTextRef.RichTextRef,Bi.ShapeDef.ShapeDefBase,Bi.ShapeDef.ShapeDefRoundedCorners,Bi.ShapeDef.ShapeRectangle,Bi.ShapeDef.ShapeEllipse,Bi.ShapeDef.ShapeStar,Bi.ShapeDef.ShapeCloud,Bi.ShapeDef.ShapePlus,Bi.ShapeDef.ShapeTriangle,Bi.ShapeDef.ShapeBookmark,Bi.ShapeDef.ShapeChevron,Bi.ShapeDef.ShapeOctagon,Bi.ShapeDef.ShapeParallelogram,Bi.ShapeDef.ShapeShield,Bi.ShapeDef.ShapeSpeechBubble,Bi.ShapeDef.ShapeArrow,Bi.ShapeDef.LineEndStyle,Bi.ShapeDef.LineEnd,Bi.ShapeDef.ShapeLine,Bi.ShapeDef.ShapeDef,Bi.ShapeItem.ShapeItemFullState,Bi.ShapeItem.ShapeItem,Bi.ShapeItem.ShapeItemState,Bi.State.StateMeta,Bi.State.BaseItemFullState,Bi.TextItem.TextVerticalAlign,Bi.TextItem.TextPadding,Bi.TextItem.TextItemFullState,Bi.TextItem.TextItem,Bi.TextItem.TextItemState,Bi.Trigger.TriggerMediaAction,Bi.Trigger.TriggerChangeStateAction,Bi.Trigger.TriggerChangeVisibilityAction,Bi.Trigger.TriggerChangeLayerAction,Bi.Trigger.TriggerAction,Bi.Trigger.Trigger,Bi.Unit.Unit,Bi.Version.SchemaVersion,Bi.VideoItem.VideoAssets,Bi.VideoItem.VideoItemFullState,Bi.VideoItem.VideoItem,Bi.VideoItem.VideoItemState,Mi.Asset.Asset,Mi.AudioItem.AudioAssets,Mi.AudioItem.AiAudioSettings,Mi.AudioItem.AudioItemFullState,Mi.AudioItem.AudioItem,Mi.AudioItem.AudioItemState,Mi.Backdrop.BorderBackdropData,Mi.Backdrop.OverlayBackdropData,Mi.Backdrop.ExtendedBackdropData,Mi.Backdrop.BackdropColorFillData,Mi.Backdrop.BackdropImageFillData,Mi.Backdrop.GroupBackdropStateData,Mi.Backdrop.ShapeBackdropStateData,Mi.Backdrop.ImageBackdropStateData,Mi.Backdrop.LineBackdropStateData,Mi.BaseItem.BaseItemState,Mi.Blockument.Blockument,Mi.Border.Border,Mi.DropShadow.DropShadow,Mi.Fill.FillImageCrop,Mi.Fill.FillColor,Mi.Fill.FillImage,Mi.GroupItem.GroupItemFullState,Mi.GroupItem.GroupItem,Mi.GroupItem.GroupItemState,Mi.ImageItem.ImageItemFullState,Mi.ImageItem.ImageItem,Mi.ImageItem.ImageItemState,Mi.Item.Item,Mi.ItemRef.ItemRef,Mi.JSONContent.JSONContent,Mi.LineItem.LineItemFullState,Mi.LineItem.LineItem,Mi.LineItem.LineItemState;const Wn=Mi.Manifest.Manifest;function Qn(e){return{...e,_v:25}}function Kn(e){return{...e,transcript:""}}function el(e){switch(e.type){case"image":case"shape":case"line":case"group":case"video":case"text":return{...e,_v:25};case"audio":return{...e,states:eo(e.states,Kn,(e=>e)),_v:25};default:throw new Error("Unexpected item type "+e.type)}}Mi.RichTextRef.RichTextRef,Mi.ShapeDef.ShapeDefBase,Mi.ShapeDef.ShapeDefRoundedCorners,Mi.ShapeDef.ShapeRectangle,Mi.ShapeDef.ShapeEllipse,Mi.ShapeDef.ShapeStar,Mi.ShapeDef.ShapeCloud,Mi.ShapeDef.ShapePlus,Mi.ShapeDef.ShapeTriangle,Mi.ShapeDef.ShapeBookmark,Mi.ShapeDef.ShapeChevron,Mi.ShapeDef.ShapeOctagon,Mi.ShapeDef.ShapeParallelogram,Mi.ShapeDef.ShapeShield,Mi.ShapeDef.ShapeSpeechBubble,Mi.ShapeDef.ShapeArrow,Mi.ShapeDef.LineEndStyle,Mi.ShapeDef.LineEnd,Mi.ShapeDef.ShapeLine,Mi.ShapeDef.ShapeDef,Mi.ShapeItem.ShapeItemFullState,Mi.ShapeItem.ShapeItem,Mi.ShapeItem.ShapeItemState,Mi.State.StateMeta,Mi.State.BaseItemFullState,Mi.TextItem.TextVerticalAlign,Mi.TextItem.TextPadding,Mi.TextItem.TextItemFullState,Mi.TextItem.TextItem,Mi.TextItem.TextItemState,Mi.Trigger.TriggerMediaAction,Mi.Trigger.TriggerChangeStateAction,Mi.Trigger.TriggerChangeVisibilityAction,Mi.Trigger.TriggerChangeLayerAction,Mi.Trigger.TriggerAction,Mi.Trigger.Trigger,Mi.Unit.Unit,Mi.Version.SchemaVersion,Mi.VideoItem.VideoAssets,Mi.VideoItem.VideoItemFullState,Mi.VideoItem.VideoItem,Mi.VideoItem.VideoItemState,Li.Asset.Asset,Li.AudioItem.AudioAssets,Li.AudioItem.AiAudioSettings,Li.AudioItem.AudioItemFullState,Li.AudioItem.AudioItem,Li.AudioItem.AudioItemState,Li.Backdrop.BorderBackdropData,Li.Backdrop.OverlayBackdropData,Li.Backdrop.ExtendedBackdropData,Li.Backdrop.BackdropColorFillData,Li.Backdrop.BackdropImageFillData,Li.Backdrop.GroupBackdropStateData,Li.Backdrop.ShapeBackdropStateData,Li.Backdrop.ImageBackdropStateData,Li.Backdrop.LineBackdropStateData,Li.BaseItem.BaseItemState,Li.Blockument.Blockument,Li.Border.Border,Li.DropShadow.DropShadow,Li.Fill.FillImageCrop,Li.Fill.FillColor,Li.Fill.FillImage,Li.Fill.FillLinearGradient,Li.GroupItem.GroupItemFullState,Li.GroupItem.GroupItem,Li.GroupItem.GroupItemState,Li.ImageItem.ImageItemFullState,Li.ImageItem.ImageItem,Li.ImageItem.ImageItemState,Li.Item.Item,Li.ItemRef.ItemRef,Li.JSONContent.JSONContent,Li.LineItem.LineItemFullState,Li.LineItem.LineItem,Li.LineItem.LineItemState;const tl=Li.Manifest.Manifest;function al(e){return{...e,_v:26}}function rl(e){return{applied:e.applied,color:e.color,opacity:e.opacity,style:e.style,width:e.width.value}}function il(e){return{...e,x:e.x.value,y:e.y.value,width:e.width.value,height:e.height.value}}function ol(e){return{...e,x:e.x?.value,y:e.y?.value,width:e.width?.value,height:e.height?.value}}function nl(e){return{...e,x:e.x.value,y:e.y.value,width:e.width.value,height:e.height.value,border:rl(e.border)}}function ll(e){return{...e,x:e.x?.value,y:e.y?.value,width:e.width?.value,height:e.height?.value,border:e.border&&rl(e.border)}}function sl(e){switch(e.type){case"audio":case"video":case"text":return{...e,_v:26,states:eo(e.states,il,ol)};case"shape":case"line":case"image":case"group":return{...e,_v:26,states:eo(e.states,nl,ll)};default:throw new Error("Unexpected item type "+e.type)}}Li.RichTextRef.RichTextRef,Li.ShapeDef.ShapeDefBase,Li.ShapeDef.ShapeDefRoundedCorners,Li.ShapeDef.ShapeRectangle,Li.ShapeDef.ShapeEllipse,Li.ShapeDef.ShapeStar,Li.ShapeDef.ShapeCloud,Li.ShapeDef.ShapePlus,Li.ShapeDef.ShapeTriangle,Li.ShapeDef.ShapeBookmark,Li.ShapeDef.ShapeChevron,Li.ShapeDef.ShapeOctagon,Li.ShapeDef.ShapeParallelogram,Li.ShapeDef.ShapeShield,Li.ShapeDef.ShapeSpeechBubble,Li.ShapeDef.ShapeArrow,Li.ShapeDef.LineEndStyle,Li.ShapeDef.LineEnd,Li.ShapeDef.ShapeLine,Li.ShapeDef.ShapeDef,Li.ShapeItem.ShapeItemFullState,Li.ShapeItem.ShapeItem,Li.ShapeItem.ShapeItemState,Li.State.StateMeta,Li.State.BaseItemFullState,Li.TextItem.TextVerticalAlign,Li.TextItem.TextPadding,Li.TextItem.TextItemFullState,Li.TextItem.TextItem,Li.TextItem.TextItemState,Li.Trigger.TriggerMediaAction,Li.Trigger.TriggerChangeStateAction,Li.Trigger.TriggerChangeVisibilityAction,Li.Trigger.TriggerChangeLayerAction,Li.Trigger.TriggerAction,Li.Trigger.Trigger,Li.Version.SchemaVersion,Li.VideoItem.VideoAssets,Li.VideoItem.VideoItemFullState,Li.VideoItem.VideoItem,Li.VideoItem.VideoItemState,Ai.Asset.Asset,Ai.AudioItem.AudioAssets,Ai.AudioItem.AiAudioSettings,Ai.AudioItem.AudioItemFullState,Ai.AudioItem.AudioItem,Ai.AudioItem.AudioItemState,Ai.Backdrop.BorderBackdropData,Ai.Backdrop.OverlayBackdropData,Ai.Backdrop.ExtendedBackdropData,Ai.Backdrop.BackdropColorFillData,Ai.Backdrop.BackdropImageFillData,Ai.Backdrop.GroupBackdropStateData,Ai.Backdrop.ShapeBackdropStateData,Ai.Backdrop.ImageBackdropStateData,Ai.Backdrop.LineBackdropStateData,Ai.BaseItem.BaseItemState,Ai.Blockument.Blockument,Ai.Border.Border,Ai.DropShadow.DropShadow,Ai.Fill.FillImageCrop,Ai.Fill.FillColor,Ai.Fill.FillImage,Ai.Fill.FillLinearGradient,Ai.GroupItem.GroupItemFullState,Ai.GroupItem.GroupItem,Ai.GroupItem.GroupItemState,Ai.ImageItem.ImageItemFullState,Ai.ImageItem.ImageItem,Ai.ImageItem.ImageItemState,Ai.Item.Item,Ai.ItemRef.ItemRef,Ai.JSONContent.JSONContent,Ai.LineItem.LineItemFullState,Ai.LineItem.LineItem,Ai.LineItem.LineItemState;const cl=Ai.Manifest.Manifest;function dl(e){return{...e,_v:27}}function pl(e){return"shape"===e.type||"text"===e.type?{...e,autoHeight:!0,_v:27}:{...e,_v:27}}Ai.RichTextRef.RichTextRef,Ai.ShapeDef.ShapeDefBase,Ai.ShapeDef.ShapeDefRoundedCorners,Ai.ShapeDef.ShapeRectangle,Ai.ShapeDef.ShapeEllipse,Ai.ShapeDef.ShapeStar,Ai.ShapeDef.ShapeCloud,Ai.ShapeDef.ShapePlus,Ai.ShapeDef.ShapeTriangle,Ai.ShapeDef.ShapeBookmark,Ai.ShapeDef.ShapeChevron,Ai.ShapeDef.ShapeOctagon,Ai.ShapeDef.ShapeParallelogram,Ai.ShapeDef.ShapeShield,Ai.ShapeDef.ShapeSpeechBubble,Ai.ShapeDef.ShapeArrow,Ai.ShapeDef.LineEndStyle,Ai.ShapeDef.LineEnd,Ai.ShapeDef.ShapeLine,Ai.ShapeDef.ShapeDef,Ai.ShapeItem.ShapeItemFullState,Ai.ShapeItem.ShapeItem,Ai.ShapeItem.ShapeItemState,Ai.State.StateMeta,Ai.State.BaseItemFullState,Ai.TextItem.TextVerticalAlign,Ai.TextItem.TextPadding,Ai.TextItem.TextItemFullState,Ai.TextItem.TextItem,Ai.TextItem.TextItemState,Ai.Trigger.TriggerMediaAction,Ai.Trigger.TriggerChangeStateAction,Ai.Trigger.TriggerChangeVisibilityAction,Ai.Trigger.TriggerChangeLayerAction,Ai.Trigger.TriggerAction,Ai.Trigger.Trigger,Ai.Version.SchemaVersion,Ai.VideoItem.VideoAssets,Ai.VideoItem.VideoItemFullState,Ai.VideoItem.VideoItem,Ai.VideoItem.VideoItemState,Di.Asset.Asset,Di.AudioItem.AudioAssets,Di.AudioItem.AiAudioSettings,Di.AudioItem.AudioItemFullState,Di.AudioItem.AudioItem,Di.AudioItem.AudioItemState,Di.Backdrop.BorderBackdropData,Di.Backdrop.OverlayBackdropData,Di.Backdrop.ExtendedBackdropData,Di.Backdrop.BackdropColorFillData,Di.Backdrop.BackdropImageFillData,Di.Backdrop.GroupBackdropStateData,Di.Backdrop.ShapeBackdropStateData,Di.Backdrop.ImageBackdropStateData,Di.Backdrop.LineBackdropStateData,Di.BaseItem.BaseItemState,Di.Blockument.Blockument,Di.Border.Border,Di.DropShadow.DropShadow,Di.Fill.FillImageCrop,Di.Fill.FillColor,Di.Fill.FillImage,Di.Fill.FillLinearGradient,Di.GroupItem.GroupItemFullState,Di.GroupItem.GroupItem,Di.GroupItem.GroupItemState,Di.ImageItem.ImageItemFullState,Di.ImageItem.ImageItem,Di.ImageItem.ImageItemState,Di.Item.Item,Di.ItemRef.ItemRef,Di.JSONContent.JSONContent,Di.LineItem.LineItemFullState,Di.LineItem.LineItem,Di.LineItem.LineItemState;const hl=Di.Manifest.Manifest;function ml(e){return{...e,_v:28}}function ul(e){return{...e,localeOverrides:{},_v:28}}Di.RichTextRef.RichTextRef,Di.ShapeDef.ShapeDefBase,Di.ShapeDef.ShapeDefRoundedCorners,Di.ShapeDef.ShapeRectangle,Di.ShapeDef.ShapeEllipse,Di.ShapeDef.ShapeStar,Di.ShapeDef.ShapeCloud,Di.ShapeDef.ShapePlus,Di.ShapeDef.ShapeTriangle,Di.ShapeDef.ShapeBookmark,Di.ShapeDef.ShapeChevron,Di.ShapeDef.ShapeOctagon,Di.ShapeDef.ShapeParallelogram,Di.ShapeDef.ShapeShield,Di.ShapeDef.ShapeSpeechBubble,Di.ShapeDef.ShapeArrow,Di.ShapeDef.LineEndStyle,Di.ShapeDef.LineEnd,Di.ShapeDef.ShapeLine,Di.ShapeDef.ShapeDef,Di.ShapeItem.ShapeItemFullState,Di.ShapeItem.ShapeItem,Di.ShapeItem.ShapeItemState,Di.State.StateMeta,Di.State.LocalizableBaseItemState,Di.State.BaseItemFullState,Di.TextItem.TextVerticalAlign,Di.TextItem.TextPadding,Di.TextItem.LocalizableTextItemFullState,Di.TextItem.TextItemFullState,Di.TextItem.TextItemStateLocaleOverrideable,Di.TextItem.TextItem,Di.TextItem.TextItemState,Di.Trigger.TriggerMediaAction,Di.Trigger.TriggerChangeStateAction,Di.Trigger.TriggerChangeVisibilityAction,Di.Trigger.TriggerChangeLayerAction,Di.Trigger.TriggerAction,Di.Trigger.Trigger,Di.Version.SchemaVersion,Di.VideoItem.VideoAssets,Di.VideoItem.VideoItemFullState,Di.VideoItem.VideoItem,Di.VideoItem.VideoItemState,Fi.Asset.Asset,Fi.AudioItem.AudioAssets,Fi.AudioItem.AiAudioSettings,Fi.AudioItem.AudioItemFullState,Fi.AudioItem.AudioItem,Fi.AudioItem.AudioItemState,Fi.Backdrop.BorderBackdropData,Fi.Backdrop.OverlayBackdropData,Fi.Backdrop.ExtendedBackdropData,Fi.Backdrop.BackdropColorFillData,Fi.Backdrop.BackdropImageFillData,Fi.Backdrop.GroupBackdropStateData,Fi.Backdrop.ShapeBackdropStateData,Fi.Backdrop.ImageBackdropStateData,Fi.Backdrop.LineBackdropStateData,Fi.BaseItem.BaseItemState,Fi.Blockument.Blockument,Fi.Border.Border,Fi.DropShadow.DropShadow,Fi.Fill.FillImageCrop,Fi.Fill.FillColor,Fi.Fill.FillImage,Fi.Fill.FillLinearGradient,Fi.GroupItem.GroupItemFullState,Fi.GroupItem.GroupItem,Fi.GroupItem.GroupItemState,Fi.ImageItem.ImageItemFullState,Fi.ImageItem.ImageItem,Fi.ImageItem.ImageItemState,Fi.Item.Item,Fi.ItemRef.ItemRef,Fi.JSONContent.JSONContent,Fi.LineItem.LineItemFullState,Fi.LineItem.LineItem,Fi.LineItem.LineItemState;const gl=Fi.Manifest.Manifest;function fl(e){return{...e,_v:29}}function vl(e){return function(e){return"audio"===e.type}(e)?"aiAudioSettings"in e&&e.aiAudioSettings?{...e,aiAudioSettings:{...e.aiAudioSettings,speed:1,similarity:e.aiAudioSettings?.similarity??1,stability:e.aiAudioSettings?.stability??.5},_v:29}:{...e,aiAudioSettings:void 0,_v:29}:{...e,_v:29}}Fi.RichTextRef.RichTextRef,Fi.ShapeDef.ShapeDefBase,Fi.ShapeDef.ShapeDefRoundedCorners,Fi.ShapeDef.ShapeRectangle,Fi.ShapeDef.ShapeEllipse,Fi.ShapeDef.ShapeStar,Fi.ShapeDef.ShapeCloud,Fi.ShapeDef.ShapePlus,Fi.ShapeDef.ShapeTriangle,Fi.ShapeDef.ShapeBookmark,Fi.ShapeDef.ShapeChevron,Fi.ShapeDef.ShapeOctagon,Fi.ShapeDef.ShapeParallelogram,Fi.ShapeDef.ShapeShield,Fi.ShapeDef.ShapeSpeechBubble,Fi.ShapeDef.ShapeArrow,Fi.ShapeDef.LineEndStyle,Fi.ShapeDef.LineEnd,Fi.ShapeDef.ShapeLine,Fi.ShapeDef.ShapeDef,Fi.ShapeItem.ShapeItemFullState,Fi.ShapeItem.ShapeItem,Fi.ShapeItem.ShapeItemState,Fi.State.StateMeta,Fi.State.LocalizableBaseItemState,Fi.State.BaseItemFullState,Fi.TextItem.TextVerticalAlign,Fi.TextItem.TextPadding,Fi.TextItem.LocalizableTextItemFullState,Fi.TextItem.TextItemFullState,Fi.TextItem.TextItemStateLocaleOverrideable,Fi.TextItem.TextItem,Fi.TextItem.TextItemState,Fi.Trigger.TriggerMediaAction,Fi.Trigger.TriggerChangeStateAction,Fi.Trigger.TriggerChangeVisibilityAction,Fi.Trigger.TriggerChangeLayerAction,Fi.Trigger.TriggerAction,Fi.Trigger.Trigger,Fi.Version.SchemaVersion,Fi.VideoItem.VideoAssets,Fi.VideoItem.VideoItemFullState,Fi.VideoItem.VideoItem,Fi.VideoItem.VideoItemState,zi.Asset.Asset,zi.AudioItem.AudioAssets,zi.AudioItem.AiAudioSettings,zi.AudioItem.AudioItemFullState,zi.AudioItem.AudioItem,zi.AudioItem.AudioItemState,zi.Backdrop.BorderBackdropData,zi.Backdrop.OverlayBackdropData,zi.Backdrop.ExtendedBackdropData,zi.Backdrop.BackdropColorFillData,zi.Backdrop.BackdropImageFillData,zi.Backdrop.GroupBackdropStateData,zi.Backdrop.ShapeBackdropStateData,zi.Backdrop.ImageBackdropStateData,zi.Backdrop.LineBackdropStateData,zi.BaseItem.BaseItemState,zi.Blockument.Blockument,zi.Border.Border,zi.DropShadow.DropShadow,zi.Fill.FillImageCrop,zi.Fill.FillColor,zi.Fill.FillImage,zi.Fill.FillLinearGradient,zi.GroupItem.GroupItemFullState,zi.GroupItem.GroupItem,zi.GroupItem.GroupItemState,zi.ImageItem.ImageItemFullState,zi.ImageItem.ImageItem,zi.ImageItem.ImageItemState,zi.Item.Item,zi.ItemRef.ItemRef,zi.JSONContent.JSONContent,zi.LineItem.LineItemFullState,zi.LineItem.LineItem,zi.LineItem.LineItemState;const Sl=zi.Manifest.Manifest;function Il(e){return{...e,_v:30}}function bl(e){if("audio"!==e.type||!e.aiAudioSettings)return{...e,_v:30};const{aiAudioSettings:t,...a}=e,r={...a,_v:30};for(const e of s(r.states))e.aiAudioSettings=t;return r}zi.RichTextRef.RichTextRef,zi.ShapeDef.ShapeDefBase,zi.ShapeDef.ShapeDefRoundedCorners,zi.ShapeDef.ShapeRectangle,zi.ShapeDef.ShapeEllipse,zi.ShapeDef.ShapeStar,zi.ShapeDef.ShapeCloud,zi.ShapeDef.ShapePlus,zi.ShapeDef.ShapeTriangle,zi.ShapeDef.ShapeBookmark,zi.ShapeDef.ShapeChevron,zi.ShapeDef.ShapeOctagon,zi.ShapeDef.ShapeParallelogram,zi.ShapeDef.ShapeShield,zi.ShapeDef.ShapeSpeechBubble,zi.ShapeDef.ShapeArrow,zi.ShapeDef.LineEndStyle,zi.ShapeDef.LineEnd,zi.ShapeDef.ShapeLine,zi.ShapeDef.ShapeDef,zi.ShapeItem.ShapeItemFullState,zi.ShapeItem.ShapeItem,zi.ShapeItem.ShapeItemState,zi.State.StateMeta,zi.State.LocalizableBaseItemState,zi.State.BaseItemFullState,zi.TextItem.TextVerticalAlign,zi.TextItem.TextPadding,zi.TextItem.LocalizableTextItemFullState,zi.TextItem.TextItemFullState,zi.TextItem.TextItemStateLocaleOverrideable,zi.TextItem.TextItem,zi.TextItem.TextItemState,zi.Trigger.TriggerMediaAction,zi.Trigger.TriggerChangeStateAction,zi.Trigger.TriggerChangeVisibilityAction,zi.Trigger.TriggerChangeLayerAction,zi.Trigger.TriggerAction,zi.Trigger.Trigger,zi.Version.SchemaVersion,zi.VideoItem.VideoAssets,zi.VideoItem.VideoItemFullState,zi.VideoItem.VideoItem,zi.VideoItem.VideoItemState;const xl=[{version:3,upgrade:function({blockuments:e,items:t}){return{blockuments:Ki()(e??{},(e=>({...e,_v:3}))),items:Ki()(t??{},ro)}},InputSchema:Ui,OutputSchema:Wi},{version:4,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},(e=>({...e,_v:4}))),items:Ki()(e.items??{},co)}},InputSchema:Wi,OutputSchema:io},{version:5,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},(e=>({...e,_v:5}))),items:Ki()(e.items??{},go)}},InputSchema:io,OutputSchema:po},{version:6,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},(e=>({...e,_v:6}))),items:Ki()(e.items??{},Io)}},InputSchema:po,OutputSchema:fo},{version:7,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},(e=>({...e,_v:7}))),items:Ki()(e.items??{},wo)}},InputSchema:fo,OutputSchema:bo},{version:8,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},(e=>({...e,_v:8}))),items:Ki()(e.items??{},Co)}},InputSchema:bo,OutputSchema:yo},{version:9,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Bo),items:Ki()(e.items??{},Mo)}},InputSchema:yo,OutputSchema:To},{version:10,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},(e=>({...e,_v:10}))),items:Ki()(e.items??{},Ao)}},InputSchema:To,OutputSchema:Lo},{version:11,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},zo),items:Ki()(e.items??{},Vo)}},InputSchema:Lo,OutputSchema:Do},{version:12,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Uo),items:Ki()(e.items??{},Ko)}},InputSchema:Do,OutputSchema:Jo},{version:13,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},tn),items:Ki()(e.items??{},on)}},InputSchema:Jo,OutputSchema:en},{version:14,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},ln),items:Ki()(e.items??{},dn)}},InputSchema:en,OutputSchema:nn},{version:15,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},hn),items:Ki()(e.items??{},fn)}},InputSchema:nn,OutputSchema:pn},{version:16,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Sn),items:Ki()(e.items??{},In)}},InputSchema:pn,OutputSchema:vn},{version:17,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},xn),items:Ki()(e.items??{},wn)}},InputSchema:vn,OutputSchema:bn},{version:18,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},kn),items:Ki()(e.items??{},Cn)}},InputSchema:bn,OutputSchema:yn},{version:19,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Bn),items:Ki()(e.items??{},Mn)}},InputSchema:yn,OutputSchema:Tn},{version:20,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Jn),items:Ki()(e.items??{},$n)}},InputSchema:Tn,OutputSchema:Ln},{version:21,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Rn),items:Ki()(e.items??{},Zn)}},InputSchema:Ln,OutputSchema:Pn},{version:22,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},jn),items:Ki()(e.items??{},Yn)}},InputSchema:Pn,OutputSchema:On},{version:23,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},En),items:Ki()(e.items??{},Gn)}},InputSchema:On,OutputSchema:Hn},{version:24,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},qn),items:Ki()(e.items??{},Un)}},InputSchema:Hn,OutputSchema:Xn},{version:25,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Qn),items:Ki()(e.items??{},el)}},InputSchema:Xn,OutputSchema:Wn},{version:26,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},al),items:Ki()(e.items??{},sl)}},InputSchema:Wn,OutputSchema:tl},{version:27,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},dl),items:Ki()(e.items??{},pl)}},InputSchema:tl,OutputSchema:cl},{version:28,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},ml),items:Ki()(e.items??{},ul)}},InputSchema:cl,OutputSchema:hl},{version:29,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},fl),items:Ki()(e.items??{},vl)}},InputSchema:hl,OutputSchema:gl},{version:30,upgrade:function(e){return{blockuments:Ki()(e.blockuments??{},Il),items:Ki()(e.items??{},bl)}},InputSchema:gl,OutputSchema:Sl}];a(9840);var wl=$t.vs('<link rel="prefetch" as="image">'),yl=a(2835);function kl(e,t){return[...e.querySelectorAll(t)]}function Cl(e,t,a,r){return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}var Tl,Bl,Ml=a(9701),Ll=function(e,t,a,r){if("a"===a&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?r:"a"===a?r.call(e):r?r.value:t.get(e)};class Al extends yl.WF{get $form(){return Ll(this,Bl,"f")?.form??null}get $slotted(){return this.$$$("*")}$(e){return function(e,t){return e.querySelector(t)}(this.shadowRoot,e)}$$(e){return kl(this.shadowRoot,e)}$$$(e,t){const a=t?`slot[name="${t}"]`:"slot:not([name])",r=this.$(a);return r?r.assignedElements({flatten:!0}).map((t=>t.matches(e)?[t]:kl(t,e))).flat():(console.warn(`Could not query ${a} within ${this.tagName.toLowerCase()} because it does not exist.`),[])}constructor(){super(),Tl.set(this,[]),Bl.set(this,void 0),this.hasSlotted=e=>this.$slotted.some((t=>t.contains(e))),this.hasWithin=e=>this.contains(e)||this.hasSlotted(e),this.unbindEvents=()=>{Ll(this,Tl,"f").forEach((e=>e()))},this.collectOff=e=>{Ll(this,Tl,"f").push(e)},this.on=(e,t,a)=>{const r=Cl(e,this,t,a);return this.collectOff(r),r},this.dispatch=(e,t={})=>function(e,t,a={},r={}){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,...r,detail:a}))}(this,e,t),this.constructor.formAssociated&&function(e,t,a,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===r?i.call(e,a):i?i.value=a:t.set(e,a)}(this,Bl,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}Tl=new WeakMap,Bl=new WeakMap,Al.formAssociated=!1,Al.shadowRootOptions={...yl.WF.shadowRootOptions,delegatesFocus:!0};var Dl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Fl=yl.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --mon-menu-item-hover-background-color: var(
      --arc-color-background-primary-hover
    );
    --mon-menu-item-selected-background-color: var(
      --arc-color-background-primary-selected
    );
    --mon-menu-font-size: var(--art-font-size-sm);
    --mon-menu-color: var(--art-color-mono-900);
    background: var(--arc-color-mono-white);
    border-radius: var(--mon-menu-border-radius, var(--arc-border-radius-lg));
    box-shadow: var(--mon-menu-box-shadow, var(--arc-shadow-lg));
    padding: var(--mon-menu-padding, var(--arc-space-0-5));
    min-width: var(--mon-menu-min-width, auto);
    font-size: var(--mon-menu-font-size);
    color: var(--mon-menu-color);
    display: flex;
    flex-direction: column;
  }

  :host([floating]) {
    position: var(--mon-menu-position, absolute);
    inset: var(--mon-menu-inset, 100% 0 auto 0);
    z-index: 99999;
    top: var(--mon-menu-top, unset);
    right: var(--mon-menu-right, unset);
  }
`;let zl=class extends Al{constructor(){super(...arguments),this.floating=!1,this.autofocusit=!1,this.value=null,this.itemFocus=0,this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.focusFirstApplicableItem=()=>{this.menuItems[this.itemFocus]?.focus()},this.onSelect=e=>{e.stopPropagation(),this.value=e.target.value??null;for(const e of this.$$$("mon-menu-item"))e.selected=e.value===this.value;this.submit()},this.onKeyDown=e=>{const{key:t,shiftKey:a}=e;e.target.assignedSlot?.parentElement===this||e.target.parentElement===this?(["ArrowUp","ArrowDown","ArrowRight","End","Home"].includes(t)&&(e.stopPropagation(),e.preventDefault()),["ArrowUp","ArrowDown","End","Home"].includes(t)?("ArrowDown"===t?(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.itemFocus=0)):"ArrowUp"===t?(this.itemFocus--,this.itemFocus<0&&(this.itemFocus=this.menuItems.length-1)):"Home"===t?this.itemFocus=0:"End"===t&&(this.itemFocus=this.menuItems.length-1),this.menuItems[this.itemFocus].focus(),this.value=this.menuItems[this.itemFocus].value??null):"Tab"===t?(a?(this.itemFocus--,this.itemFocus<0&&(this.value=null,this.dispatch("mon-menu:escape"))):(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.value=null,this.dispatch("mon-menu:escape"))),this.value=this.menuItems[this.itemFocus]?.value??null):"Escape"===t?this.dispatch("mon-menu:escape"):"ArrowRight"===t?this.dispatch("mon-menu:open-sub-menu",{name:this.name,value:this.value,target:this.menuItems[this.itemFocus]}):"ArrowLeft"===t&&this.dispatch("mon-menu:close-sub-menu")):"Escape"===t||"ArrowLeft"===t?(this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()):"Tab"===t&&(a||null!==e.target.nextElementSibling?a&&null===e.target.previousElementSibling?.previousElementSibling&&(this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()):(this.itemFocus++,this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()))},this.onKeyup=e=>{const{key:t}=e;"Enter"!==t&&" "!==t||(this.value=this.menuItems[this.itemFocus]?.value??null,this.submit())},this.onSlotChange=()=>{for(const e of this.menuItems)e.tabIndex=0,e.selected=e.value===this.value;this.autofocusit&&!mc()&&this.focusFirstApplicableItem()}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}get menuItems(){return this.$$$("mon-menu-item")}bindEvents(){this.on("mon-menu-item:select",this.onSelect),this.on("keyup",this.onKeyup),this.on("keydown",this.onKeyDown)}render(){return yl.qy` <slot @slotchange=${this.onSlotChange}></slot> `}};zl.styles=Fl,Dl([(0,Ml.MZ)({type:String,reflect:!0})],zl.prototype,"name",void 0),Dl([(0,Ml.MZ)({type:Boolean,reflect:!0})],zl.prototype,"floating",void 0),Dl([(0,Ml.MZ)({type:Boolean,reflect:!0})],zl.prototype,"autofocusit",void 0),Dl([(0,Ml.MZ)({type:String})],zl.prototype,"value",void 0),zl=Dl([(0,Ml.EM)("mon-menu")],zl);var Vl=a(4399),Jl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const $l=yl.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    cursor: pointer;
    display: flex;
    padding: var(
      --mon-menu-item-padding,
      var(--arc-space-1) var(--arc-space-1-5)
    );
    background-color: var(--arc-color-mono-white);
    align-items: center;
    font-size: var(--art-font-size-sm);
    color: var(--art-color-mono-900);
    border-radius: var(
      --mon-menu-item-border-radius,
      var(--arc-border-radius-md)
    );
    --mon-menu-item-gap: var(--arc-space-1);
    height: var(--mon-menu-item-height, auto);
    min-height: var(--mon-menu-item-min-height, auto);
    min-width: var(--mon-menu-item-min-width, auto);
  }

  :host(:hover) {
    background-color: var(--mon-menu-item-hover-background-color);
  }

  :host(:focus) {
    z-index: 1;
  }

  :host([selected]) {
    background-color: var(--mon-menu-item-selected-background-color);
    color: var(--arc-color-text-primary);
  }

  :host([disabled]) {
    color: var(--arc-color-text-disabled);
    --arc-icon-color: var(--arc-color-text-disabled);
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'],
  .extras {
    display: flex;
    align-items: center;
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'] {
    color: var(--arc-color-icon-primary);
  }

  /* Base icon slot styles */
  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --arc-icon-display: block;
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: 0;
    height: calc(var(--_icon-size) * 1.25);
    justify-content: center;
    opacity: 0;
  }

  /* When icon slot has content */
  slot[name='icon']:not(:empty) {
    width: calc(var(--_icon-size) * 1.25);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  /* For menus that always have icons (like context menu), force consistent spacing and visibility */
  :host([data-has-icons]) slot[name='icon'] {
    width: calc(var(--_icon-size) * 1.25);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  .content {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
  }

  ::slotted(*:not([slot])) {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  .extras {
    flex: none;
    justify-content: flex-end;
  }
`;let Pl=class extends Al{constructor(){super(...arguments),this.selected=!1,this.tabIndex=-1,this.role="menuitem",this.disabled=!1,this.delegatesFocus=!1,this.focusableRef=(0,Vl._)(),this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("click",this.onClick),this.on("focus",(()=>{if(this.delegatesFocus){const e=this.querySelector('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');e instanceof HTMLElement&&e.focus()}}))}}onClick(){this.dispatch("mon-menu-item:select")}render(){return yl.qy`
      <slot name="icon"></slot>
      <div class="content">
        <slot></slot>
        <div class="extras">
          <slot name="shortcut"></slot>
          <slot name="chevron"></slot>
        </div>
      </div>
    `}};Pl.formAssociated=!0,Pl.styles=$l,Pl.shadowRootOptions={...yl.WF.shadowRootOptions,delegatesFocus:!1},Jl([(0,Ml.MZ)({type:String,reflect:!0})],Pl.prototype,"value",void 0),Jl([(0,Ml.MZ)({type:Boolean,reflect:!0})],Pl.prototype,"selected",void 0),Jl([(0,Ml.MZ)({type:Number,reflect:!0})],Pl.prototype,"tabIndex",void 0),Jl([(0,Ml.MZ)({type:String,reflect:!0})],Pl.prototype,"role",void 0),Jl([(0,Ml.MZ)({type:Boolean,reflect:!0})],Pl.prototype,"disabled",void 0),Jl([(0,Ml.MZ)()],Pl.prototype,"delegatesFocus",void 0),Jl([(0,Ml.wk)()],Pl.prototype,"focusableRef",void 0),Pl=Jl([(0,Ml.EM)("mon-menu-item")],Pl);var Rl=a(5494),Zl=a(4993),Ol=a.n(Zl),_l=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const jl=yl.AH`
  :host {
    position: fixed;
    z-index: var(--mon-z-index-popover);
    border-radius: var(--mon-popover-border-radius, 0);
    padding: var(--mon-popover-padding, var(--arc-space-2));
    overflow: var(--mon-popover-overflow, auto);
    box-shadow: var(--mon-popover-shadow, var(--arc-shadow-md));
    box-sizing: border-box;
    width: var(--mon-popover-width, auto);
    clip-path: var(--mon-popover-clip-path, none);
  }

  :host([semantic]) {
    border: var(--mon-overlay-border, none);
    border-radius: var(--mon-popover-border-radius, 0);
    margin: var(--mon-popover-margin, 0);
    width: var(--mon-popover-width, fit-content);
  }
`,Yl={enabled:!1,padding:0,boundary:"clippingAncestors",prioritizeResize:!1,minResizeHeight:0,minResizeWidth:0,enableShiftCrossAxis:!1,flipPadding:0,shiftPadding:0,maxResizeHeight:1/0,maxResizeWidth:1/0,avoidFlipOverlap:!1,matchAnchorWidth:!1,altBoundaries:{}};let Hl=class extends Al{constructor(){super(...arguments),this.autoFlip=!0,this.autoResizeOptions={},this.customMiddleware=[],this.autoShift=!0,this.semantic=!1,this.enableAutoUpdates=!0,this.semanticPriority=Wd.Generic,this.offset=10,this.placement="bottom",this.positionInitialized=!1,this.sizeMiddlewareOptions={...Yl,...this.autoResizeOptions},this.middleware=[],this.syncMiddleware=()=>{this.sizeMiddlewareOptions={...Yl,...this.autoResizeOptions};const e=this.sizeMiddlewareOptions.avoidFlipOverlap,t=this.sizeMiddlewareOptions.minResizeWidth,a=this.sizeMiddlewareOptions.maxResizeWidth,r=this.sizeMiddlewareOptions.minResizeHeight,i=this.sizeMiddlewareOptions.maxResizeHeight,o=this.sizeMiddlewareOptions.matchAnchorWidth,n="number"==typeof this.sizeMiddlewareOptions.shiftPadding?this.sizeMiddlewareOptions.shiftPadding:this.sizeMiddlewareOptions.shiftPadding.top??0,l=this.sizeMiddlewareOptions.enabled&&(0,Rl.Ej)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.size,apply({availableWidth:l,availableHeight:s,elements:c,rects:d,y:p,placement:h}){const m=i?`${i}px`:"",u=[s,i,window.innerHeight-n];if(e){const e=c.reference.getBoundingClientRect().top;e>p&&h.includes("top")&&u.push(window.innerHeight-(window.innerHeight-e)-n)}const g=`${Math.max(r,Math.min(...u))}px`;c.floating.style.maxHeight=s>=c.floating.scrollHeight?m:g,c.floating.style.maxWidth=`${Math.max(t,Math.min(a,l))}px`,o&&(c.floating.style.minWidth=`${d.reference.width}px`)},padding:this.sizeMiddlewareOptions.padding,boundary:this.sizeMiddlewareOptions.boundary}),s=this.autoShift&&(0,Rl.BN)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.shift,crossAxis:this.sizeMiddlewareOptions.enableShiftCrossAxis,padding:this.sizeMiddlewareOptions.shiftPadding}),c=(0,Rl.cY)(this.offset);this.sizeMiddlewareOptions.prioritizeResize?this.middleware=[l,this.autoFlip&&(0,Rl.UU)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.flip,fallbackStrategy:"initialPlacement",flipAlignment:!1,padding:this.sizeMiddlewareOptions.flipPadding}),s,...this.customMiddleware,c].filter((e=>!!e)):this.middleware=[this.autoFlip&&(0,Rl.UU)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.flip,padding:this.sizeMiddlewareOptions.flipPadding}),s,l,...this.customMiddleware,c].filter((e=>!!e))},this.updatePosition=()=>{this.anchor&&(0,Rl.rD)(this.anchor,this,{placement:this.placement,strategy:"fixed",middleware:this.middleware}).then((({x:e,y:t})=>{this.style.left=`${e}px`,this.style.top=`${t}px`,this.reconcilePositionChanges()}))},this.reconcilePositionChanges=Ol()((()=>{window.requestAnimationFrame((()=>{this.positionInitialized||(this.dispatchEvent(new CustomEvent("initialized")),this.positionInitialized=!0)}))}),50,{leading:!1,trailing:!0})}updated(e){if(super.updated(e),Array.from(e.keys()).some((e=>["autoFlip","autoShift","autoResizeOptions","customMiddleware","offset"].includes(e)))&&this.syncMiddleware(),e.has("semantic")&&(this.semantic?(this.hasAttribute("popover")||(this.setAttribute("popover","manual"),Kd(this,this.semanticPriority)),this.collectOff((()=>{this.hasAttribute("popover")&&(ep(this),this.removeAttribute("popover"))}))):this.hasAttribute("popover")&&(ep(this),this.removeAttribute("popover"))),e.has("anchor")&&this.anchor)if(this.enableAutoUpdates){this.autoUpdateDisposer&&this.autoUpdateDisposer();const e=(0,Rl.ll)(this.anchor,this,this.updatePosition,{animationFrame:!0});this.collectOff(e),this.autoUpdateDisposer=e}else this.updatePosition()}render(){return yl.qy`<slot></slot>`}};Hl.styles=jl,_l([(0,Ml.MZ)()],Hl.prototype,"anchor",void 0),_l([(0,Ml.MZ)({type:Boolean})],Hl.prototype,"autoFlip",void 0),_l([(0,Ml.MZ)({type:Object})],Hl.prototype,"autoResizeOptions",void 0),_l([(0,Ml.MZ)({type:Array})],Hl.prototype,"customMiddleware",void 0),_l([(0,Ml.MZ)({type:Boolean})],Hl.prototype,"autoShift",void 0),_l([(0,Ml.MZ)({type:Boolean,reflect:!0})],Hl.prototype,"semantic",void 0),_l([(0,Ml.MZ)({type:Boolean})],Hl.prototype,"enableAutoUpdates",void 0),_l([(0,Ml.MZ)({type:Number,reflect:!0})],Hl.prototype,"semanticPriority",void 0),_l([(0,Ml.MZ)()],Hl.prototype,"offset",void 0),_l([(0,Ml.MZ)({type:String})],Hl.prototype,"placement",void 0),_l([(0,Ml.wk)()],Hl.prototype,"positionInitialized",void 0),Hl=_l([(0,Ml.EM)("mon-popover")],Hl);var El=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Gl=yl.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--arc-color-neutral-600);
    display: block;
    position: relative;
    max-width: 100%;
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--mon-select-trigger-gap, var(--arc-space-0-75));
    border: none;
    border-radius: var(--arc-border-radius-md);
    background: var(--mon-select-trigger-background, var(--mon-color-input));
    padding: 0 var(--arc-space-1-5);
    text-align: left;
    font-family: inherit;
    font-size: var(--arc-font-size-14);
    outline: none;
    border-radius: var(
      --mon-select-trigger-border-radius,
      var(--arc-border-radius-md)
    );
  }

  .trigger[data-size='md'] {
    height: 3.2rem;
  }

  .trigger[data-size='sm'] {
    height: 2.4rem;
  }

  .trigger:hover {
    box-shadow: var(
      --mon-select-trigger-hover-shadow,
      var(--mon-input-hover-box-shadow)
    );
  }

  .trigger[data-open='true'] {
    background: var(--mon-select-trigger-open-background);
  }

  .trigger:focus-visible {
    box-shadow: var(--mon-input-focus-box-shadow);
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: var(--mon-select-trigger-icon-size, 14px);
    height: var(--mon-select-trigger-icon-size, 14px);
    fill: var(--mon-select-trigger-icon-color, var(--arc-color-neutral-700));
    display: flex;
  }

  .mon-select-popover {
    --mon-popover-padding: 0;
    --mon-popover-border-radius: var(--arc-border-radius-lg);
  }

  .mon-select-menu {
    overflow-y: auto;
    --mon-menu-border-radius: 0;
  }
`;let Xl=class extends Al{constructor(){super(...arguments),this.disabled=!1,this.value=null,this.popoverPlacement="bottom-end",this.placeholder="Choose an item...",this.constrainHeight=!0,this.maxHeight=400,this.optionsOffset=0,this.triggerSize="md",this.open=!1,this.labelText="",this.anchorRef=(0,Vl._)(),this.scrollBarWidth=yc,this.cancel=()=>{this.open&&(this.dispatch("mon-select:cancel"),this.dispatch("mon-select:close")),this.open=!1},this.onMenuEscape=()=>{this.cancel()},this.onSubmit=e=>{this.open=!1,e.stopPropagation(),this.dispatch("mon-select:close"),this.dispatch("mon-select:change",{name:this.name,value:e.detail.value})},this.onClickOutside=()=>{this.cancel()},this.onClickTrigger=()=>{this.open?this.cancel():(this.open=!0,this.dispatch("mon-select:open"))},this.onKeyDown=e=>{"ArrowLeft"===e.key&&e.stopPropagation()},this.onButtonKeyDown=e=>{"Enter"===e.key?e.preventDefault():"ArrowDown"===e.key&&(e.stopPropagation(),this.open=!0,this.dispatch("mon-select:open"))},this.onSlotChange=()=>{this.syncLabelText()},this.syncLabelText=()=>{this.labelText=this.$$$("mon-menu-item")?.filter((e=>e.value===this.value))[0]?.innerText??this.placeholder},this.handleRefChange=e=>{this.anchorRef=e}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}bindEvents(){this.on("mon-menu:escape",this.onMenuEscape),this.on("keydown",this.onKeyDown),this.collectOff(Cl("mousedown",window,(e=>{const t=e.composedPath();e.target instanceof Node&&!t.includes(this)&&this.onClickOutside()}),{capture:!0,passive:!0}))}updated(e){e.has("value")&&this.syncLabelText(),this.open&&!1===e.get("open")&&window.requestAnimationFrame((()=>{const e=this.$$$("mon-menu-item")?.find((e=>e.value===this.value));e?.scrollIntoView({behavior:"instant",block:"nearest"})}))}renderTrigger(){return yl.qy`
      <button
        ?disabled=${this.disabled}
        ${(0,Vl.K)(this.handleRefChange)}
        @click=${this.onClickTrigger}
        @keydown=${this.onButtonKeyDown}
        type="button"
        class="trigger"
        data-size=${this.triggerSize}
        data-open=${this.open}
      >
        <span class="trigger-content">
          <slot name="selected">${this.labelText}</slot>
        </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?yl.qy`
          <mon-popover
            .anchor=${this.anchorRef}
            class="mon-select-popover"
            .offset=${this.optionsOffset}
            .autoResizeOptions=${{enabled:!0,padding:{top:0,right:0,bottom:36,left:0},prioritizeResize:!0,minResizeHeight:72,enableShiftCrossAxis:!0,shiftPadding:{top:0,right:0,bottom:0,left:this.scrollBarWidth},maxResizeHeight:this.constrainHeight?this.maxHeight:void 0,avoidFlipOverlap:!0,matchAnchorWidth:!0}}
            placement=${this.popoverPlacement}
            semantic=${!0}
            .autoShift=${!0}
          >
            <mon-menu
              class="mon-select-menu"
              name=${this.name}
              autofocusit
              @mon-menu:submit=${this.onSubmit}
              value=${this.value}
            >
              <slot></slot>
            </mon-menu>
          </mon-popover>
        `:yl.qy`<slot
          class="hidden"
          @slotchange=${this.onSlotChange}
        ></slot>`}render(){return yl.qy`${this.renderTrigger()}${this.renderMenu()}`}};Xl.styles=Gl,El([(0,Ml.MZ)({type:Boolean})],Xl.prototype,"disabled",void 0),El([(0,Ml.MZ)({type:String,reflect:!0})],Xl.prototype,"name",void 0),El([(0,Ml.MZ)({type:String})],Xl.prototype,"value",void 0),El([(0,Ml.MZ)({type:String})],Xl.prototype,"popoverPlacement",void 0),El([(0,Ml.MZ)()],Xl.prototype,"placeholder",void 0),El([(0,Ml.MZ)()],Xl.prototype,"constrainHeight",void 0),El([(0,Ml.MZ)()],Xl.prototype,"maxHeight",void 0),El([(0,Ml.MZ)()],Xl.prototype,"optionsOffset",void 0),El([(0,Ml.MZ)()],Xl.prototype,"triggerSize",void 0),El([(0,Ml.wk)()],Xl.prototype,"open",void 0),El([(0,Ml.wk)()],Xl.prototype,"labelText",void 0),El([(0,Ml.wk)()],Xl.prototype,"anchorRef",void 0),El([(0,Ml.wk)()],Xl.prototype,"scrollBarWidth",void 0),Xl=El([(0,Ml.EM)("mon-select")],Xl);var ql=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Nl=yl.AH`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    --border-color: rgb(0 0 0 / 30%);
    --border-color-active: black;
    --border-color-active-hover: rgb(0 0 0 / 60%);
    --border-color-hover: black;
    --border-radius: calc(0.5 * var(--toggle-height));
    --border-width: 1px;
    --control-width: 3.8rem;
    --focus-color: #4d90fe;
    --handle-bg-color: white;
    --handle-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
    --inset-active-bg-color: black;
    --inset-active-bg-hover-color: rgb(0 0 0 / 60%);
    --inset-bg-color: rgb(0 0 0 / 5%);
    --inset-bg-hover-color: rgb(0 0 0 / 10%);
    --toggle-height: 2.2rem;
    --transition: 0.1s ease-out;
  }

  .toggle .control {
    background-color: var(--inset-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    height: var(--toggle-height);
    position: relative;
    transition: var(--transition);
    width: var(--control-width);
  }

  .toggle .handle {
    background-color: var(--handle-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--handle-box-shadow);
    height: var(--toggle-height);
    left: calc(-1 * var(--border-width));
    position: absolute;
    top: calc(-1 * var(--border-width));
    transition: var(--transition);
    width: var(--toggle-height);
  }

  .toggle.active .control {
    background-color: var(--inset-active-bg-color);
  }

  .toggle.active .handle {
    border-color: var(--border-color-active);
    transform: translateX(calc(var(--control-width) - var(--toggle-height)));
  }

  .toggle.active:hover .control {
    background-color: var(--inset-active-bg-hover-color);
    border-color: var(--border-color-active-hover);
  }

  .toggle.active:hover .handle {
    border-color: var(--border-color-active-hover);
  }

  .toggle:hover .control {
    background-color: var(--inset-bg-hover-color);
    border-color: var(--border-color-hover);
  }

  .toggle:hover .handle {
    border-color: var(--border-color-hover);
  }

  .toggle.in-focus .control {
    outline: 2px solid var(--focus-color);
    outline-offset: 1px;
  }
`;let Ul=class extends Al{constructor(){super(...arguments),this.focusedByClick=!1,this.animationDuration=250}toggleSwitch(e){!0===e?this.toggle?.classList.add("active"):!1===e?this.toggle?.classList.remove("active"):this.toggle?.classList.toggle("active")}handleClick(){this.focusedByClick=!0,this.checkboxes[0].checked=!this.checkboxes[0].checked,this.checkboxes[0].dispatchEvent(new Event("change")),setTimeout((()=>{this.focusedByClick=!1}))}handleFocus(){setTimeout((()=>{!1===this.focusedByClick&&this.toggleVisibleFocus(!0)}))}handleBlur(){this.toggleVisibleFocus(!1)}toggleVisibleFocus(e){!0===e?this.toggle.classList.add("in-focus"):this.toggle.classList.remove("in-focus")}handleCheckboxChange(e){const t=e.target;this.toggleSwitch(t.checked)}handleKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.checkboxes.forEach((e=>{this.toggleSwitch(e.checked),e.style.left="0",e.style.opacity="0.01",e.style.outline="none !important",e.style.position="absolute",e.style.top="0",e.addEventListener("focus",this.handleFocus.bind(this)),e.addEventListener("blur",this.handleBlur.bind(this)),e.addEventListener("change",this.handleCheckboxChange.bind(this)),e.addEventListener("keydown",this.handleKeydown.bind(this))}))}render(){return yl.qy`
      <div class="toggle">
        <div
          @click=${this.handleClick}
          class="control"
        >
          <div class="handle"></div>
        </div>
        <slot></slot>
      </div>
    `}};Ul.styles=Nl,ql([(0,Ml.P)(".toggle")],Ul.prototype,"toggle",void 0),ql([(0,Ml.P)(".control")],Ul.prototype,"control",void 0),ql([(0,Ml.KN)({selector:'input[type="checkbox"]'})],Ul.prototype,"checkboxes",void 0),ql([(0,Ml.wk)()],Ul.prototype,"focusedByClick",void 0),ql([(0,Ml.MZ)({type:Number})],Ul.prototype,"animationDuration",void 0),Ul=ql([(0,Ml.EM)("mon-toggle")],Ul);const Wl=(e,t)=>{const a=t.cssText,r=new WeakSet;return t=>{const i=t.getRootNode();if(!r.has(i)){r.add(i);const t=(i instanceof ShadowRoot?i.ownerDocument:i instanceof Document?i:document).createElement("style");t.setAttribute("data-svelte-lit-styles",e),t.textContent=a,i.appendChild(t)}}},Ql=yl.AH`
  &[data-flex='1'] {
    --arc-internal-btn-flex: 1;
  }

  &[data-flex='2'] {
    --arc-internal-btn-flex: 2;
  }

  &[data-flex='3'] {
    --arc-internal-btn-flex: 3;
  }

  &[data-flex='4'] {
    --arc-internal-btn-flex: 4;
  }

  &[data-flex='5'] {
    --arc-internal-btn-flex: 5;
  }

  &[data-layout='fill'] {
    --arc-internal-btn-display: flex;
    --arc-internal-btn-width: 100%;
    --arc-internal-btn-content-width: 0;
  }

  &[data-layout='icon'] {
    --arc-internal-btn-flex: none;
    --arc-internal-btn-padding-inline: 0;
    --arc-internal-btn-min-width: min-content;
    --arc-internal-btn-max-width: none;
    --arc-internal-btn-aspect-ratio: 1 / 1;

    &[data-shape='narrow'] {
      --arc-internal-btn-padding-inline: 2;
      --arc-internal-btn-aspect-ratio: auto;
    }
  }
`,Kl=yl.AH`
  &[data-size='xxl'] {
    --arc-modifier: 16; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 20;
    --arc-internal-btn-height: 56;
    --arc-internal-btn-gap: 10;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 32;
  }

  &[data-size='xl'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 48;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='lg'] {
    /** @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 40;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 20;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='md'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 14;
    --arc-internal-btn-height: 32;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 16;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='sm'] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 12;
    --arc-internal-btn-height: 24;
    --arc-internal-btn-gap: 4;
    --arc-internal-btn-padding-inline: 12;
    --arc-internal-btn-spinner-width: 14;
  }
`,es=yl.AH`
  &[data-variant='primary'] {
    /** @default */
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-mono-black);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-800);

    --arc-internal-btn-active-text: var(--arc-color-neutral-200);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-600);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-neutral-800);
  }

  &[data-variant='secondary'] {
    /** @default - when icon-only */
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: var(--arc-color-border-full);

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-100);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-200);
    --arc-internal-btn-active-edge: var(--arc-color-border-stark);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-border-stark);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-edge: var(--arc-color-border-standard);
      --arc-internal-btn-hover-edge: var(--arc-color-border-stark);
      --arc-internal-btn-focus-edge: var(--arc-color-border-standard);
    }
  }

  &[data-variant='tertiary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-black-10);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-black-03);
  }

  /** TODO: We'll need to true this up once the design system component implements their text variant */
  &[data-variant='text'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-text: var(--arc-color-neutral-700);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-neutral-500);

    --arc-internal-btn-disabled-text: var(--arc-color-neutral-300);

    --arc-internal-btn-processing-text: var(--art-color-neutral-200);
  }
`,ts=yl.AH`
  &[data-variant='primary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-80);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant='secondary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);
    --arc-internal-btn-hover-edge: var(--arc-color-alpha-white-80);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
    --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);
    --arc-internal-btn-active-edge: var(--arc-color-alpha-white-50);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-edge: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: transparent;
    --arc-internal-btn-processing-edge: var(--arc-color-alpha-white-60);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
      --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
      --arc-internal-btn-active-edge: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant='tertiary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-20);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
    }
  }
`,as=yl.AH`
  &[data-variant='ai-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill:
      var(--arc-gradient-ai-500) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-600) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-text: var(--arc-color-alpha-white-70);
    --arc-internal-btn-processing-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant='ai-secondary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-300) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-100) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant^='ai-'] {
    --arc-internal-btn-border-width: var(--arc-computed-ai-btn-border-width);
    --arc-internal-btn-edge: transparent;
    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
  }
`,rs=yl.AH`
  &[data-variant='critical-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-critical-dark);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-active-text: var(--arc-color-critical-medium);
    --arc-internal-btn-active-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-critical-heavy);
  }

  &[data-variant='critical-secondary'] {
    --arc-internal-btn-text: var(--arc-color-critical-dark);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-critical-dark);

    --arc-internal-btn-hover-fill: var(--arc-color-critical-light);
    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-100);

    --arc-internal-btn-active-text: var(--arc-color-red-300);
    --arc-internal-btn-active-fill: var(--arc-color-red-100);
    --arc-internal-btn-active-edge: var(--arc-color-critical-medium);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-critical-medium);
  }
`,is=yl.AH`
  ${es}
  ${ts}
  ${rs}
  ${as}
`,os=Wl("MonArcButton",yl.AH`
  [arc-button] {
    ${Kl}
    ${Ql}
    ${is}

    & {
      --arc-internal-btn-text-color: var(--arc-internal-btn-text);
      --arc-internal-btn-fill-color: var(--arc-internal-btn-fill);
      --arc-internal-btn-edge-color: var(--arc-internal-btn-edge);

      --arc-internal-btn-border-radius: var(--arc-border-radius-pill);
      --arc-internal-btn-border-radius-md: 4;
      --arc-internal-btn-border-width: 1;
      --arc-internal-btn-outline-size: 2;

      --arc-modifier-px: var(--arc-modifier) * 1px;
      --arc-modifier-em: var(--arc-modifier) * 1em;

      /* COMPUTED VARIABLES ------------------------------------------• */

      --arc-computed-btn-font-size: calc(var(--arc-modifier-px));
      --arc-computed-btn-icon-size: calc(
        var(--arc-internal-btn-icon-size) / var(--arc-modifier-em)
      );
      --arc-computed-btn-border-width: calc(
        var(--arc-internal-btn-border-width) / var(--arc-modifier-em)
      );
      --arc-computed-btn-outline-size: max(
        var(--arc-border-width-md),
        calc(var(--arc-internal-btn-outline-size) / var(--arc-modifier-em))
      );
      --arc-computed-btn-border-radius-md: calc(
        var(--arc-internal-btn-border-radius-md) / var(--arc-modifier-em)
      );
      --arc-computed-btn-height: calc(
        var(--arc-internal-btn-height) / var(--arc-modifier-em)
      );
      --arc-computed-btn-padding-inline: calc(
        var(--arc-internal-btn-padding-inline) / var(--arc-modifier-em)
      );
      --arc-computed-btn-gap: calc(
        var(--arc-internal-btn-gap) / var(--arc-modifier-em)
      );
      --arc-computed-btn-spinner-width: calc(
        var(--arc-internal-btn-spinner-width) / var(--arc-modifier-em)
      );

      /* Inter-Component Communication -------------------------------• */
      --arc-icon-size: var(
        --arc-computed-btn-icon-size
      ); /** @computed • ArcIcon size */
    }

    &:is(
        [data-layout='icon']:not([data-shape]),
        [data-shape='square'],
        [data-shape='narrow']
      ) {
      --arc-internal-btn-border-radius: var(
        --arc-computed-btn-border-radius-md
      ); /** @computed • border-radius */
    }

    &[data-variant^='ai-'] {
      --arc-computed-btn-border-width: calc(2 / var(--arc-modifier-em));
    }

    /* STATES --------------------------------------------------------- */

    &:is([data-is-processing], :has(input)) {
      --arc-internal-btn-position: relative;
    }

    &:disabled {
      --arc-internal-btn-cursor: not-allowed;
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-disabled-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-disabled-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-disabled-edge,
        var(--arc-internal-btn-edge)
      );
    }

    &:not(:disabled, [data-is-processing]) {
      &:hover {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-hover-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-hover-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-hover-edge,
          var(--arc-internal-btn-edge)
        );
      }

      &:is(:active, [data-is-active]) {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-active-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-active-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-active-edge,
          var(--arc-internal-btn-edge)
        );
      }
    }

    &[data-is-processing] {
      --arc-internal-btn-cursor: default;
      --arc-internal-btn-content-visibility: hidden;
      --arc-internal-btn-content-opacity: 0;

      --arc-internal-btn-text-color: var(
        --arc-internal-btn-processing-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-processing-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-processing-edge,
        var(--arc-internal-btn-edge)
      );

      /* spinner svg style controls */
      --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-30);
      --arc-internal-btn-spinner-circle-stroke: var(
        --arc-internal-btn-text-color
      );
      --arc-internal-btn-spinner-progress-stroke: var(
        --arc-internal-btn-text-color
      );

      &:is(
      [data-variant*=secondary], /* contains 'secondary' */
      [data-variant*=tertiary], /* contains 'tertiary' */
      [data-variant^=ai-], /* starts with 'ai-' */
      [data-variant$=-inverse] /* ends with '-inverse' */
    ) {
        --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-100);
        --arc-internal-btn-spinner-progress-stroke: var(--arc-color-brand-root);
      }
    }

    &:where(:focus, :focus-within):focus-visible {
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-focus-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-focus-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-focus-edge,
        var(--arc-internal-btn-edge)
      );
      --arc-internal-btn-outline-color: var(--arc-color-border-focus);

      &[data-variant$='-inverse'] {
        --arc-internal-btn-outline-color: var(--arc-color-border-focus-inverse);
      }

      outline: var(--arc-computed-btn-outline-size) solid
        var(--arc-internal-btn-outline-color); /** @computed • outline-width */
      outline-offset: var(
        --arc-button-outline-offset,
        var(--arc-computed-btn-outline-size)
      ); /** @computed • outline-offset */

      * {
        outline: none;
      }
    }
  }

  /* CORE STYLES ------------------------------------------------------ */

  [arc-button]:not([hidden]) {
    flex: var(--arc-internal-btn-flex, unset);
    display: var(--arc-internal-btn-display, inline-flex);
    align-items: center;
    justify-content: center;
  }

  [arc-button] {
    appearance: none;
    cursor: var(--arc-internal-btn-cursor, pointer);
    position: var(--arc-internal-btn-position, unset);
    transition: 150ms ease-out;

    /* footprint */

    font: inherit;
    font-size: var(
      --arc-button-font-size,
      var(--arc-computed-btn-font-size, inherit)
    ); /** @computed • font-size */
    font-weight: var(--arc-button-font-weight, var(--arc-font-weight-600));
    max-width: var(--arc-internal-btn-max-width, 100%);
    min-width: var(--arc-internal-btn-min-width, unset);
    width: var(--arc-internal-btn-width, unset);
    height: var(--arc-computed-btn-height, unset); /** @computed • height */
    aspect-ratio: var(--arc-internal-btn-aspect-ratio, unset);

    padding-block: 0;
    padding-inline: var(
      --arc-computed-btn-padding-inline
    ); /** @computed • padding-inline */

    /* Variant Theme Applied -----------------------------------------• */

    color: var(--arc-internal-btn-text-color, unset);
    background: var(--arc-internal-btn-fill-color, transparent);
    border: var(--arc-computed-btn-border-width) solid
      var(--arc-internal-btn-edge-color, unset); /** @computed • border-width */
    border-radius: var(
      --arc-button-border-radius,
      var(--arc-internal-btn-border-radius)
    ); /** @computed • border-radius */

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ------------------------------------------------• */

    [data-element='button-content'] {
      flex: 1;
      width: var(--arc-internal-btn-content-width, auto);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: max(
        var(--arc-space-0-75),
        var(--arc-computed-btn-gap)
      ); /** @computed • gap */ /* 4px */
      max-width: 100%;
      overflow: hidden;
      pointer-events: var(--arc-internal-btn-content-pointer-events, none);
      user-select: none;
      visibility: var(--arc-internal-btn-content-visibility, unset);
      opacity: var(--arc-internal-btn-content-opacity, unset);
    }

    [data-element='button-label'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      line-height: normal;
      transition: 0.2s ease-out;
    }

    [data-element='button-icon'] {
      transition: 0.2s ease-out;
    }

    :is([data-element='button-spinner'], input) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    [data-element='button-spinner'] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(
        --arc-computed-btn-spinner-width
      ); /** @computed • spinner size */
      aspect-ratio: 1 / 1;

      [data-element='spinner-circle'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-circle-stroke);
        opacity: var(--arc-internal-btn-spinner-circle-opacity, 0.4);
      }

      [data-element='spinner-progress'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-progress-stroke);
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`);var ns=$t.Dn('<svg viewBox="0 0 100 100" data-element="button-spinner"><circle data-element="spinner-circle" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle><circle data-element="spinner-progress" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle></svg>'),ls=$t.vs('<span data-element="button-content"><!></span> <!>',1),ss=$t.vs('<a arc-button=""><!></a>'),cs=$t.vs('<button arc-button=""><!></button>');const ds=yl.AH`
  @layer arc-components {
    [arc-icon] {
      font-size: var(--arc-icon-size, 1em);
      color: var(--arc-icon-color, currentcolor);
      opacity: var(--arc-icon-opacity, 1);

      &:not([hidden]) {
        flex: none;
        display: var(--arc-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        max-height: 1lh;
        line-height: 1lh;
      }

      &:has(svg) {
        width: 1em;
        height: var(--arc-icon-svg-height, 1lh);
        align-self: var(--arc-icon-svg-align-self, center);
        vertical-align: -0.1lh;

        /* Todo: This is Mondrian CSS in the Arc style sheet to handle duotones. We should try to separate this */
        &:not([data-duotone]) {
          svg {
            fill: var(--arc-icon-color, currentcolor);
          }
        }

        svg {
          width: 100%; /* keeps Safari happy ¯\_(ツ)_/¯ */
        }
      }
    }
  }
`,ps=e=>"number"==typeof e?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,hs=Wl("MonArcIcon",ds);var ms=$t.vs("<span></span>"),us=$t.vs('<span arc-icon=""><!></span>');const gs=yl.AH`--arc•input•mask`,fs=yl.AH`--arc•size`,vs=yl.AH`--arc•space`,Ss=yl.AH`--arc•icon•text`,Is=yl.AH`
  ${Ss}•font•size
`,bs=yl.AH`
  ${Ss}•icon
`,xs=yl.AH`
  ${Ss}•text
`,ws=yl.AH`
  ${Ss}•subtext
`,ys=yl.AH`
  ${Ss}•fg
`,ks=yl.AH`
  ${Ss}•gap
`,Cs=yl.AH`
  ${bs}•size
`,Ts=yl.AH`
  ${bs}•vertical•align
`,Bs=yl.AH`
  ${xs}•overflow
`,Ms=yl.AH`
  ${xs}•text•overflow
`,Ls=yl.AH`
  ${xs}•white•space
`,As=yl.AH`
  ${ws}•font•size
`,Ds=yl.AH`
  ${ws}•fg
`,Fs=yl.AH`
  &[data-variant='inherit'] {
    /* @default 'inherit' • uses font/color props from context */
    ${ys}: currentcolor;
  }

  &[data-variant='primary'] {
    ${ys}: var(--arc-color-fg-primary);
  }

  &[data-variant='secondary'] {
    ${ys}: var(--arc-color-fg-secondary);
  }

  &[data-variant='inverse'] {
    ${ys}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant='brand'] {
    ${ys}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant='info'] {
    ${ys}: var(--arc-color-fg-info-stark);
  }

  &[data-variant='success'] {
    ${ys}: var(--arc-color-fg-success-stark);
  }

  &[data-variant='warning'] {
    ${ys}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant='critical'] {
    ${ys}: var(--arc-color-fg-critical-mid);
  }
`,zs=yl.AH`
  /* Overall Text Sizes */

  &[data-size='inherit'] {
    /* @default 'inherit' • uses font/size from context */
    ${Is}: 1em;
    ${As}: 0.75em;
    ${Cs}: 1em;
    ${ks}: 0.25em; /* 4px @ 100% */
  }

  &[data-size='md'] {
    ${Is}: var(--arc-font-size-14);
    ${As}: var(--arc-font-size-12);
    ${ks}: var(${vs}•3);
  }

  &[data-size='sm'] {
    ${Is}: var(--arc-font-size-12);
    ${As}: var(--arc-font-size-12);
    ${ks}: var(${vs}•3);
  }

  /* Gap Sizes */

  &[data-gap='lg'] {
    ${ks}: var(${vs}•12);
  } /* 12px @ 100% */
  &[data-gap='md'] {
    ${ks}: var(${vs}•8);
  } /* 8px @ 100% */
  &[data-gap='sm'] {
    ${ks}: var(${vs}•3);
  } /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size='xl'] {
    ${Cs}: var(${fs}•24);
  }
  &[icon-size='lg'] {
    ${Cs}: var(${fs}•20);
  }
  &[icon-size='md'] {
    ${Cs}: var(${fs}•16);
  }
  &[icon-size='sm'] {
    ${Cs}: var(${fs}•14);
  }
  &[icon-size='xs'] {
    ${Cs}: var(${fs}•12);
  }
`,Vs=yl.AH`
  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Ds}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${ys}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Cs}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout='inline'] {
    ${Bs}: unset;
    ${Ms}: unset;
    ${Ls}: unset;

    ${Ts}: calc((var(${Cs}) - var(${Is})) / -2);

    &:has(svg) {
      ${Ts}: text-bottom;
    }
  }

  /* Text Overflows */
  &[data-layout='gutter'] {
    ${Bs}: visible;
    ${Ms}: unset;
    ${Ls}: normal;

    &[data-overflow='truncate'] {
      ${Bs}: hidden;
      ${Ms}: ellipsis;
      ${Ls}: nowrap;
    }
  }
`;Wl("MonArcIconText",yl.AH`
  @layer arc-components {
    [arc-icon-text] {
      ${Fs}
      ${zs}
    ${Vs}
    }

    [arc-icon-text] {
      position: var(--arc-icon-text-position, relative);
      font-size: var(--arc-icon-text-font-size, var(${Is}));
      color: var(--arc-icon-text-text-color, var(${ys}));
      line-height: var(--arc-icon-text-line-height, inherit);

      [data-element='text'],
      [data-element='subtext'] {
        position: relative;
        hyphens: var(--arc-icon-text-hyphens, auto);
      }

      &[is-strong] [data-element='text'] {
        font-weight: var(
          --arc-icon-text-font-weight,
          var(--arc-font-weight-bold)
        );

        [data-element='subtext'] {
          font-weight: var(
            --arc-icon-text-subtext-font-weight,
            var(--arc-font-weight-normal)
          );
        }
      }

      /* @default • gutter layout */
      &[data-layout='gutter'] {
        display: inline-flex;
        align-items: var(--arc-icon-text-align-items, first baseline);
        gap: var(--arc-icon-text-gap, var(${ks}));

        /* Truncation Support */
        overflow: var(--arc-icon-text-overflow, var(${Bs}));

        &[is-flipped] {
          flex-direction: row-reverse;
        }

        &:not(:has([arc-gradient])) [data-element='icon'] {
          display: contents;
        }

        [data-element='text'] {
          flex: 1;
          min-width: 0%;
        }

        [data-element='subtext'] {
          display: var(--arc-icon-text-subtext-display, block);
          line-height: normal;
          font-size: var(
            --arc-icon-text-subtext-font-size,
            var(${As})
          );
          color: var(--arc-icon-text-subtext-color, var(${Ds}));
          padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
        }

        :where([data-element='text'], [data-element='subtext']) {
          overflow: var(--arc-icon-text-overflow, var(${Bs}));
          text-overflow: var(
            --arc-icon-text-text-overflow,
            var(${Ms})
          );
          white-space: var(--arc-icon-text-white-space, var(${Ls}));
        }
      }

      &[data-layout='inline'] {
        display: inline;

        [data-element='icon'] {
          line-height: normal;
          vertical-align: var(
            --arc-icon-text-icon-vertical-align,
            var(${Ts})
          );
        }

        [data-element='icon'] + [data-element='text'] {
          margin-inline-start: var(--arc-icon-text-gap, var(${ks}));
        }
        [data-element='text']:has(+ [data-element='icon']) {
          margin-inline-end: var(--arc-icon-text-gap, var(${ks}));
        }
        [data-element='subtext'] {
          display: contents;
        }

        &:has(svg) {
          ${Ts}: text-bottom;
        }
      }
    }
  }
`),$t.vs('<span data-element="icon"><!></span>'),$t.vs('<br> <small data-element="subtext"> </small>',1),$t.vs(' <span data-element="subtext"> </span>',1),$t.vs('<span data-element="text"> <!></span>'),$t.vs('<span data-element="icon"><!></span>'),$t.vs("<!> <!> <!>",1);const Js=yl.AH`
  :root {
    --arc-link-fg-hover-inverse: color-mix(
      in srgb,
      var(--arc-color-fg-on-mono-inverse) 68.2%,
      transparent
    );
    --arc-link-fg-disabled-inverse: color-mix(
      in srgb,
      var(--arc-color-fg-on-mono-inverse) 30%,
      transparent
    );
    --arc-link-focus-disabled-inverse: light-dark(
      var(--arc-color-light-blue-300),
      var(--arc-color-blue-600)
    );
  }
`,$s=yl.AH`--arc•link`,Ps=yl.AH`
  ${$s}•fg
`,Rs=yl.AH`
  ${Ps}•hover
`,Zs=yl.AH`
  ${Ps}•disabled
`,Os=yl.AH`
  ${$s}•outline
`,_s=yl.AH`
  ${Os}•size
`,js=yl.AH`
  ${Os}•offset
`,Ys=yl.AH`
  ${$s}•cursor
`,Hs=yl.AH`
  ${$s}•focus•color
`;Wl("MonArcLink",yl.AH`
  @layer arc-components {
    ${Js}

    [arc-link] {
      /* VARIANTS ------------------------------------------------------• */

      &[data-variant='inherit'] {
        /* @default */
        ${Ps}: currentcolor;
        ${Rs}: color-mix(in srgb, currentcolor, transparent 38.75%);
        ${Zs}: color-mix(in srgb, currentcolor, transparent 70%);

        ${Hs}: var(--arc-color-border-focus);
      }

      &[data-variant='primary'] {
        ${Ps}: var(--arc-color-fg-primary);
        ${Rs}: var(--arc-color-fg-secondary);
        ${Zs}: var(--arc-color-fg-disabled);
        ${Hs}: var(--arc-color-border-focus);
      }

      &[data-variant='secondary'] {
        ${Ps}: var(--arc-color-fg-secondary);
        ${Rs}: var(--arc-color-fg-primary);
        ${Zs}: var(--arc-color-fg-disabled);
        ${Hs}: var(--arc-color-border-focus);
      }

      /* @deprecated */
      &[data-variant='inverse'] {
        ${Ps}: var(--arc-color-fg-on-mono-inverse);
        ${Rs}: var(--arc-link-fg-hover-inverse);
        ${Zs}: var(--arc-link-fg-disabled-inverse);
        ${Hs}: var(--arc-link-focus-disabled-inverse);
      }

      & {
        ${_s}: 0.125em; /* 2px */
        ${js}: 0.0625em; /* 1px */
      }

      /* STATES --------------------------------------------------------• */

      &:not([data-is-disabled]):hover {
        ${Ps}: var(--arc-link-color-hover, var(${Rs}));
      }

      &:where(:focus, :focus-within):focus-visible {
        ${Os}: var(${_s}) solid var(--arc-link-color-focus, var(${Hs}));
        ${js}: var(${js});

        * {
          outline: none;
        }
      }

      &[data-is-disabled] {
        ${Ps}: var(--arc-link-color-disabled, var(${Zs}));
        ${Ys}: not-allowed;
      }

      & {
        /* Inter-Component Communication -------------------------------• */
        --arc-icon-color: var(
          --arc-link-color,
          var(${Ps})
        ); /** ArcIcon color */
      }
    }

    /* CORE STYLES ------------------------------------------------------ */

    [arc-link] {
      color: var(--arc-link-color, var(${Ps}));
      border-radius: var(--arc-border-radius-sm); /* for focus outline */
      text-decoration: var(--arc-link-text-decoration, underline);

      [data-element='icon'] {
        text-decoration: none;
      }

      [data-element='text'] {
        text-decoration: var(--arc-link-text-decoration, underline);
        text-decoration-color: currentcolor;
      }
    }
  }
`),$t.vs('<h2 class="svelte-1re8jym"> </h2>'),$t.vs('<button class="close-button svelte-1re8jym" aria-label="Close modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svelte-1re8jym"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" class="svelte-1re8jym"></path></svg></button>'),$t.vs('<dialog aria-modal="true"><div class="dialog-wrap svelte-1re8jym"><div class="dialog-header svelte-1re8jym"><!> <!></div> <div class="dialog-content svelte-1re8jym"><!></div></div></dialog>'),$t.Mm(["click","keydown"]);const Es=yl.AH`--arc•radio`,Gs=yl.AH`
  @layer arc-components {
    [arc-radio] {
      --arc•size•0: 0px;
      --arc•size•1: max(1px, 0.0625rem);
      --arc•size•2: max(2px, 0.125rem);
      --arc•size•3: max(3px, 0.1875rem);
      --arc•size•4: max(4px, 0.25rem);
      --arc•size•5: max(5px, 0.3125rem);
      --arc•size•6: max(6px, 0.375rem);
      --arc•size•8: max(8px, 0.5rem);
      --arc•size•10: max(10px, 0.625rem);
      --arc•size•12: max(12px, 0.75rem);
      --arc•size•14: max(14px, 0.875rem);
      --arc•size•16: max(16px, 1rem);
      --arc•size•18: max(18px, 1.125rem);
      --arc•size•20: max(20px, 1.25rem);
      --arc•size•22: max(22px, 1.375rem);
      --arc•size•24: max(24px, 1.5rem);
      --arc•size•26: max(26px, 1.625rem);
      --arc•size•28: max(28px, 1.75rem);
      --arc•size•30: max(30px, 1.875rem);
      --arc•size•32: max(32px, 2rem);
      --arc•size•34: max(34px, 2.125rem);
      --arc•size•36: max(36px, 2.25rem);
      --arc•size•38: max(38px, 2.375rem);
      --arc•size•40: max(40px, 2.5rem);
      --arc•size•42: max(42px, 2.625rem);
      --arc•size•44: max(44px, 2.75rem);
      --arc•size•46: max(46px, 2.875rem);
      --arc•size•48: max(48px, 3rem);
      --arc•size•50: max(50px, 3.125rem);
      --arc•size•52: max(52px, 3.25rem);
      --arc•size•54: max(54px, 3.375rem);
      --arc•size•56: max(56px, 3.5rem);
      --arc•size•58: max(58px, 3.625rem);
      --arc•size•60: max(60px, 3.75rem);
      --arc•size•64: max(64px, 4rem);
      --arc•size•68: max(68px, 4.25rem);
      --arc•size•72: max(72px, 4.5rem);
      --arc•size•76: max(76px, 4.75rem);
      --arc•size•80: max(80px, 5rem);
      --arc•size•88: max(88px, 5.5rem);
      --arc•size•96: max(96px, 6rem);
      --arc•size•104: max(104px, 6.5rem);
      --arc•size•112: max(112px, 7rem);
      --arc•size•120: max(120px, 7.5rem);
      --arc•size•128: max(128px, 8rem);
      --arc•size•136: max(136px, 8.5rem);
      --arc•size•144: max(144px, 9rem);
      --arc•size•152: max(152px, 9.5rem);
      --arc•size•160: max(160px, 10rem);

      --arc-color-fg-on-theme-heavy: #ffffff;
      --arc-color-bg-theme-heavy: #000000;
      --arc-color-bg-theme-subtle: rgb(0 0 0 / 10%);
      --arc-color-bg-theme-stark: #636363;
      --arc-color-border-theme-heavy: #000000;

      /* SIZES -------------------------------------------------------• */
      &[data-size='inherit'] {
        ${Es}•font•size: 1em;
        ${Es}•icon•size: 0.625em;
        ${Es}•size: 1.125em;
        ${Es}•gap: 0.5em;
      }

      &[data-size='md'] {
        ${Es}•font•size: var(${fs}•14);
        ${Es}•icon•size: var(${fs}•10);
        ${Es}•size: var(${fs}•18);
        ${Es}•gap: var(${fs}•8);
      }

      &[data-size='sm'] {
        ${Es}•font•size: var(${fs}•12);
        ${Es}•icon•size: var(${fs}•10);
        ${Es}•size: var(${fs}•16);
        ${Es}•gap: var(${fs}•6);
      }

      /* Inter-Component Communication -------------------------------• */
      /* for: Setup defaults for ArcBooleanInputMask */
      ${gs}•border•radius: var(--arc-border-radius-circle);
      ${gs}•size: var(${Es}•size);
      ${gs}•icon•size: var(${Es}•icon•size);
      ${gs}•width: var(${Es}•size);
      ${gs}•height: var(${Es}•size);
      ${gs}•translate: 0 var(${fs}•1m);

      /* for: ArcLabel */
      --arc-label-gap: var(${Es}•gap);
      --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
    }

    /* CORE STYLES ---------------------------------------------------• */
    [arc-radio]:not([hidden]) {
      font-size: var(${Es}•font•size);
      display: var(--arc-radio-display, inline-flex);
      min-height: 1lh;

      /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
      &:not(:has(:checked)) {
        ${gs}•color: transparent;
        ${gs}•background: transparent;
        ${gs}•border•color: var(--arc-color-border-stark);

        &:hover {
          ${gs}•background: var(--arc-color-bg-theme-subtle);
          ${gs}•border•color: var(--arc-color-border-theme-heavy);
        }

        &:has(:disabled) {
          ${gs}•background: var(--arc-color-bg-disabled);
          ${gs}•border•color: var(--arc-color-border-disabled);
        }
      }

      /* DISABLED */
      &:has(:disabled) {
        color: var(--arc-color-fg-disabled);
      }

      /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
      &:has(:checked) {
        ${gs}•color: var(--arc-color-fg-on-theme-heavy);
        ${gs}•background: var(--arc-color-bg-theme-heavy);
        ${gs}•border•color: transparent;

        &:not(:has(:disabled)):hover {
          ${gs}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${gs}•color: var(--arc-color-fg-on-theme-mid);
          ${gs}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }
  }
`;$t.vs("<input>"),Wl("MonArcBooleanInputMask",yl.AH`
  @layer arc-components {
    [arc-input-mask] {
      ${gs}•border•width: var(--arc-border-width-sm);
      ${gs}•border: var(${gs}•border•width) solid var(${gs}•border•color);

      /* Inter-Component Communication ---------------------------------• */

      /* for: ArcIcon */
      --arc-icon-size: var(${gs}•icon•size); /* ArcIcon */

      /* STATES --------------------------------------------------------• */

      &:has(:disabled) {
        ${gs}•cursor: not-allowed;
      }

      &:has(:focus:focus-visible) {
        ${gs}•outline: var(${gs}•border•width) solid var(--arc-color-border-focus);
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
      width: var(${gs}•width);
      height: var(${gs}•height);
      opacity: var(${gs}•opacity, var(--arc-alpha-100));

      color: var(${gs}•color, transparent);
      background: var(${gs}•background);
      border: var(${gs}•border);
      border-radius: var(${gs}•border•radius);
      translate: var(${gs}•translate, unset);

      outline: var(${gs}•outline, none);
      outline-offset: var(${gs}•border•width);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property: opacity, background, color, border-color, outline;

      [arc-input-type] {
        flex: none;
        outline: none;
        appearance: none;
        position: absolute;
        inset: calc(var(${gs}•border•width) * -1);
        cursor: var(${gs}•cursor, pointer);
        margin: 0;
        padding: 0;
        border: 0;
        z-index: var(${gs}•z•index, unset);
      }
    }
  }
`),$t.vs('<span arc-input-mask-wrapper=""><span><!></span></span>');const Xs=yl.AH`--arc•label`,qs=yl.AH`
  ${Xs}•cursor
`,Ns=yl.AH`
  ${Xs}•opacity
`,Us=yl.AH`
  @layer arc-components {
    [arc-label] {
      /* Inter-Component Communication -------------------------------• */
      /* also applies to nested ArcLabelContent */
      ${Ns}: var(--arc-label-opacity, unset);
      ${Ns}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

      /* Internal STYLES ---------------------------------------------• */
      ${Xs}•display: var(--arc-label-display, inline-flex);
      ${Xs}•gap: var(--arc-label-gap, var(${fs}•8));
      ${Xs}•align•items: var(--arc-label-align-items, baseline);

      ${qs}: var(--arc-label-cursor, pointer);
      ${qs}•disabled: var(--arc-label-cursor-disabled, not-allowed);

      &:has(:disabled) {
        ${qs}: var(${qs}•disabled);
        ${Ns}: var(${Ns}•disabled);
      }

      &[data-layout='fill'] {
        ${Xs}•display: flex;
      }
    }

    /* CORE STYLES ---------------------------------------------------• */
    [arc-label]:not([hidden]) {
      display: var(${Xs}•display);
      align-items: var(${Xs}•align•items);
      gap: var(${Xs}•gap);
      cursor: var(${qs});
    }
  }
`;Wl("MonArcLabel",Us),$t.vs("<label><!></label>"),Wl("MonArcLabelContent",Us),$t.vs("<span><!></span>"),Wl("MonArcRadio",Gs),$t.vs("<!> <!>",1),$t.vs("<!> <!>",1),$t.vs('<span arc-radio=""><!></span>');var Ws=a(8350);const Qs=yl.AH`arc•progress`,Ks=yl.AH`${Qs}•bar`,ec=yl.AH`${Qs}•value`;Wl("MonArcProgress",yl.AH`
@layer arc-components {
[arc-progress-bar] {
  --${Ks}-background: var(--arc-color-alpha-white-20);
  --${ec}-background: var(--arc-color-brand-root);

  &[data-variant=ai] {
    --${ec}-background: linear-gradient(to right, var(--arc-color-ai-purple-200), var(--arc-color-ai-blue-200));
  }

  &[data-variant=critical] {
    --${ec}-background: var(--arc-color-critical-root);
  }
}

[arc-progress-bar] {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: max(var(--arc-space-1), 0.5em);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(--${Ks}-background));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${ec}-background));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${ec}-background));
  }
}

}
`),$t.vs("<progress> </progress>"),Wl("MonArcToast",yl.AH`
  @layer arc-components {
    [arc-toast] {
      --arc-toast-padding: 0.75em 0.75em 0.75em 1em;
      --arc-toast-transition-duration: 300ms;
      --arc-toast-offset: 1em;

      --arc-modifier: 14;
      --arc-toast-content-gap: max(
        0.125em,
        calc(2 / var(--arc-modifier) * 1em)
      );

      /* SIZES ----------------------------------------------------------------• */

      &[data-size='md'] {
        /* @default */
        --arc-toast-font-size: var(--arc-font-size-body-lg);
        --arc-toast-content-font-size: var(
          --arc-font-size-body-md
        ); /* 14px @ 100% */
      }

      &[data-size='inherit'] {
        --arc-toast-font-size: 1em;
        --arc-toast-content-font-size: 0.875em;
      }

      /* STATES ---------------------------------------------------------------• */
      &[data-severity='error'] {
        --arc-toast-icon-color: var(--arc-color-critical-root);
      }

      &[data-severity='success'] {
        --arc-toast-icon-color: var(--arc-color-success-root);
      }

      &[data-severity='warning'] {
        --arc-toast-icon-color: var(--arc-color-warning-root);
      }

      /* VARIANTS -------------------------------------------------------------• */

      &[data-variant='common'] {
        /* @default */
        --arc-toast-background: var(--arc-color-text-primary);
        --arc-toast-color: var(--arc-color-text-inverse);
      }
    }

    /* CORE STYLES --------------------------------------------------• */

    [arc-toast] {
      inset: var(
        --arc-toast-inset,
        var(--top, auto) var(--right, auto) var(--bottom, auto)
          var(--left, auto)
      );

      &[data-placement*='top-'] {
        --top: var(--arc-toast-offset);
      }

      &[data-placement*='bottom-'] {
        --bottom: var(--arc-toast-offset);
      }

      &[data-placement='center'] {
        --arc-toast-inset: 0;
      }

      &[data-placement*='-left'] {
        --left: var(--arc-toast-offset);
      }

      &[data-placement*='-right'] {
        --right: var(--arc-toast-offset);
      }

      &[data-placement*='-center'] {
        --left: 50%;
        translate: -50% 0;
      }
    }

    [arc-toast] {
      font-size: var(--arc-toast-font-size);
      align-items: center;
      color: var(--arc-toast-color);
      background-color: var(--arc-toast-background);
      border-radius: var(--arc-toast-border-radius, 0.5em);
      padding: var(--arc-toast-padding);
      box-shadow: var(--arc-shadow-dark-lg);
      max-width: var(--arc-toast-max-width, 32em);
      min-width: var(--arc-toast-min-width, 12em);
      min-height: var(--arc-toast-min-height, 3.5em);
      border: none;
      box-sizing: border-box; /* Temporary Hack To Match DS Layout */

      &:has([arc-toast-heading]):has([arc-toast-subtext]) {
        --arc-toast-min-height: 5em;
        --arc-toast-content-display: flex;
      }

      [arc-toast-content-grid] {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.5em 1em;
      }

      [arc-toast-body] {
        display: flex;
        align-items: baseline;
        gap: 0.5em;
        padding: 0.25em 0; /* vertical padding to align with action button text */
      }

      [arc-toast-icon] {
        --arc-icon-color: var(--arc-toast-icon-color, currentcolor);

        height: 1lh;
        padding: 0 0.125em;
      }

      [arc-toast-content] {
        flex: 1;
        line-height: var(--arc-line-height-loose);
        font-size: var(--arc-toast-content-font-size);
        hyphens: auto;
        display: var(--arc-toast-content-display, block);
        flex-direction: column;
        gap: var(--arc-toast-content-gap);

        p {
          margin: 0;
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

    /* POPOVER + state ---------------------------------------------• */

    [arc-toast][data-semantic-popover='true] {
      opacity: 0;
      content-visibility: hidden;
      transition:
        display var(--arc-toast-transition-duration) allow-discrete,
        overlay var(--arc-toast-transition-duration) allow-discrete,
        opacity var(--arc-toast-transition-duration);
    }

    [arc-toast][data-semantic-popover='true]:popover-open {
      display: flex;
      opacity: 1;
      content-visibility: visible;
    }

    @starting-style {
      [arc-toast][data-semantic-popover='true]:popover-open {
        opacity: 0;
      }
    }
  }
`),$t.vs('<header arc-toast-heading=""><strong> </strong></header>'),$t.vs('<p arc-toast-subtext=""> </p>'),$t.vs("<!> <!>",1),$t.vs('<div arc-toast-actions=""><!> <!></div>'),$t.vs('<div arc-toast=""><div arc-toast-content-grid=""><div arc-toast-body=""><!> <div arc-toast-content=""><!></div></div> <!> <!></div></div>'),$t.vs("<span><!> <!></span>");var tc=a(2732),ac=a.n(tc),rc=a(3252);const ic=()=>ac()("tooltip-"),oc={nw:"top-end",n:"top",ne:"top-start",sw:"bottom-end",s:"bottom",se:"bottom-start",wn:"left-start",w:"left",ws:"left-end",en:"right-start",e:"right",es:"right-end"};function nc(e){return{delay:0,duration:450,easing:e=>e,css:e=>`opacity: ${e<200/450?(0,rc.wq)(450*e/200):1};`}}const lc=()=>({name:"travelBoxes",fn({x:e,y:t,rects:{reference:{x:a,y:r,width:i,height:o},floating:{width:n,height:l}}}){const s=e+n,c=t+l,d=a+i,p=r+o;return{data:{path:`\n        ${e<a?`M ${e},${c} L ${e},${t}`:`M ${a},${p} L ${a},${r}`}\n        ${t<r?`L ${e},${t} L ${s},${t}`:`L ${a},${r} L ${d},${r}`}\n        ${s>d?`L ${s},${t} L ${s},${c}`:`L ${d},${r} L ${d},${p}`}\n        ${c>p?`L ${s},${c} L ${e},${c}`:`L ${d},${p} L ${a},${p}`}\n        Z\n\n        M ${e},${c} L ${s},${c} L ${s},${t} L ${e},${t} Z\n        M ${a},${p} L ${d},${p} L ${d},${r} L ${a},${r} Z\n      `}}}});var sc=$t.vs('<div class="travel-boxes-wrapper svelte-xddqyh" aria-hidden="true"><svg class="svelte-xddqyh"><path class="svelte-xddqyh"></path></svg></div>'),cc=$t.vs('<div class="tooltip svelte-xddqyh" data-mon-tooltip="" popover="manual"><!> <div class="shadowed svelte-xddqyh"><div class="arrow svelte-xddqyh"><svg aria-hidden="true" data-mon-tooltip-arrow="" class="svelte-xddqyh"><defs><filter><feDropShadow dx="0px" dy="2px" stdDeviation="3px" flood-color="black" flood-opacity="0.4"></feDropShadow></filter></defs><path d="M13 0H1V1L6.2929 6.2929c.3905.3905 1.0237.3905 1.4142 0L13 1V0Z" class="svelte-xddqyh"></path></svg></div></div> <!></div>'),dc=$t.vs('<div class="tooltip-locator svelte-xddqyh"></div> <!>',1);const pc={hash:"svelte-xddqyh",code:".tooltip-locator.svelte-xddqyh {position:fixed;display:none;}.tooltip.svelte-xddqyh {pointer-events:none;padding:0;position:fixed;top:0;left:0;margin:0;overflow:visible;border:none;background:none;&:not([data-inverse]) {--popover-fill: var(--arc-color-background-primary);color:var(--arc-color-text-primary);}&[data-inverse] {--popover-fill: var(--arc-color-background-inverse);color:var(--arc-color-text-inverse);}&[data-pointer-events] {pointer-events:all;}}.arrow.svelte-xddqyh {position:absolute;width:12px;height:12px;svg:where(.svelte-xddqyh) {display:block;width:14px;height:14px;position:absolute;inset:-1px;}}.tooltip.svelte-xddqyh {&[data-placement^='bottom'] .arrow:where(.svelte-xddqyh) {transform:scale(-1); /* Turn that frown upsidedown */bottom:100%;}&[data-placement^='top'] .arrow:where(.svelte-xddqyh) {top:100%;}&[data-placement^='left'] .arrow:where(.svelte-xddqyh) {transform:rotate(270deg);left:100%;}&[data-placement^='right'] .arrow:where(.svelte-xddqyh) {transform:rotate(90deg);right:100%;}}.shadowed.svelte-xddqyh {position:absolute;inset:0;z-index:-1;background:var(--popover-fill);&[data-variant='popover'] {border-radius:var(--arc-border-radius-lg);\n      /* shadow/light/lg */filter:drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1));}&[data-variant='tooltip'] {border-radius:var(--arc-border-radius-md);\n      /* shadow/dark/md */box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.4);}.arrow:where(.svelte-xddqyh) path:where(.svelte-xddqyh) {fill:var(--popover-fill);}}.travel-boxes-wrapper.svelte-xddqyh {position:fixed;inset:0;pointer-events:none;svg:where(.svelte-xddqyh) {width:100%;height:100%;display:block;path:where(.svelte-xddqyh) {pointer-events:all;fill:none;.debug & {fill:#f00a;}}}}\n\n  /**\n   * Tooltip anchor global utility class; apply to nodes for convenience.\n   * Defined as a utility class instead of a component since tooltip anchors\n   * often need specific tags, specific attributes, custom styles, etc, and\n   * bundling those into a component has diminishing returns.\n   *\n   * However, it has no styles of its own.\n   * :global(.mon-tooltip-anchor) {\n   * }\n  */"};$t.vs("Share feedback <!>",1),$t.vs('<div class="feedback-container svelte-18phxd6"><h2 class="svelte-18phxd6">This feature is in beta</h2> <p class="svelte-18phxd6"><span class="svelte-18phxd6">We’re actively refining it and would love your input. Some functionality\n        may be limited or evolve as we gather feedback.</span></p> <!> <!></div>'),$t.vs('<div><div class="collapsible-section-content svelte-6iuxj0"><!></div></div>'),(0,i.writable)(!1);const hc=['input:not([type="checkbox"], [type="radio"])',"art-asset-library","textarea","[contenteditable]"].join(", ");function mc(e=Ud()){return null!=e&&!!e.matches(hc)}var uc=a(9205);const gc=a.n(uc)()("mondrian").extend("keyboard"),fc={activeModifierKeys:new Set,get alt(){return fc.activeModifierKeys.has("Alt")},get meta(){return fc.activeModifierKeys.has("Meta")||fc.activeModifierKeys.has("Control")},get shift(){return fc.activeModifierKeys.has("Shift")},key:void 0,get combo(){return[fc.meta&&"Meta",fc.alt&&"Alt",fc.shift&&"Shift",fc.key].filter(Boolean).join("+")}};function vc({metaKey:e,altKey:t,shiftKey:a,ctrlKey:r},i){let o=!1;return e!==i.has("Meta")&&(o=!0,e?i.add("Meta"):i.delete("Meta")),t!==i.has("Alt")&&(o=!0,t?i.add("Alt"):i.delete("Alt")),a!==i.has("Shift")&&(o=!0,a?i.add("Shift"):i.delete("Shift")),r!==i.has("Control")&&(o=!0,r?i.add("Control"):i.delete("Control")),o}let Sc=!1;const Ic={...(0,i.readable)(fc,(e=>{function t(t){const a="keydown"===t.type;vc(t,fc.activeModifierKeys),fc.key=a?t.key:void 0,e(fc)}function a(t){vc(t,fc.activeModifierKeys)&&e(fc)}Sc||(Sc=!0,window.addEventListener("keydown",t,{capture:!0}),window.addEventListener("keyup",t,{capture:!0}),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&(fc.activeModifierKeys.clear(),fc.key=void 0,e(fc))})),window.addEventListener("blur",(function(){fc.activeModifierKeys.clear(),fc.key=void 0,e(fc)})),window.addEventListener("mousedown",a,{passive:!0,capture:!0}),window.addEventListener("mousemove",a,{passive:!0,capture:!0}))})),is:e=>(fc.combo&&gc(`comparing keycombos, store: ${fc.combo}, comparison: ${e}`),fc.combo.toLowerCase()===e.toLowerCase()),on(e,t){const a=a=>{!mc()&&Ic.is(e)&&(gc("keyCombo matched, executing handler",e),t(a))};return window.addEventListener("keydown",a,{capture:!0}),()=>{window.removeEventListener("keydown",a,{capture:!0})}}},bc=((0,i.derived)(Ic,(e=>e.meta)),(0,i.derived)(Ic,(e=>e.alt)),(0,i.derived)(Ic,(e=>e.shift)),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1});(0,i.readable)(bc,(e=>{return window.addEventListener("mousedown",t,{capture:!0,passive:!0}),window.addEventListener("mousemove",r,{capture:!0,passive:!0}),window.addEventListener("mouseup",a,{capture:!0,passive:!0}),function(){window.removeEventListener("mousedown",t,{capture:!0}),window.removeEventListener("mousemove",r,{capture:!0}),window.removeEventListener("mouseup",a,{capture:!0})};function t(e){bc.down=!0,bc.downX=bc.x=e.clientX,bc.downY=bc.y=e.clientY,bc.target=e.target,i()}function a(){bc.down=!1,bc.downX=bc.x=bc.downY=bc.y=-1,bc.target=void 0,i()}function r(e){bc.x=e.x,bc.y=e.y,i()}function i(){e(bc)}}));const{setTimeout:xc,clearTimeout:wc}=window,yc=(()=>{const e=document.createElement("div");e.style.visibility="hidden",e.style.overflowX="hidden",e.style.overflowY="scroll",document.body.appendChild(e);const t=e.offsetWidth-e.scrollWidth;return e.remove(),t})();document.body.style.setProperty("--ua-scrollbar-width",`${yc}px`);$t.vs('<mon-menu-item><label class="multi-select-option-label svelte-1aujqfc"><input class="multi-select-option-checkbox svelte-1aujqfc" type="checkbox"> <!> <span class="multi-select-option-label-text svelte-1aujqfc"> </span></label></mon-menu-item>',2),$t.vs('<div class="no-results svelte-1aujqfc"> </div>'),$t.vs('<mon-popover><mon-menu><section class="filters svelte-1aujqfc"><div class="search-filter svelte-1aujqfc"><!> <input class="search-filter-input svelte-1aujqfc" type="text" placeholder="Search"></div> <label class="select-all svelte-1aujqfc"><input type="checkbox" class="svelte-1aujqfc"> <span> </span></label></section> <section class="menu-items svelte-1aujqfc"></section> <!></mon-menu></mon-popover>',2),$t.vs('<div class="multi-select svelte-1aujqfc"><div class="multi-select-menu-trigger svelte-1aujqfc" tabindex="-1"><div class="trigger-content svelte-1aujqfc"><!></div> <button class="chevron svelte-1aujqfc"><!></button></div> <!></div>'),$t.vs('<span class="hint-text svelte-1463wmx"><!></span>'),$t.vs('<div><input class="mon-focusable svelte-1tadwff" type="text" data-1pignore="" data-lpignore="" autocomplete="off"> <div tabindex="0"> </div></div>'),$t.vs("Share feedback <!>",1),$t.vs('<div class="feedback-container svelte-i5okdr"><h2 class="svelte-i5okdr">Coming Soon</h2> <p class="svelte-i5okdr"><span class="svelte-i5okdr">Interactivity is in development. Let us know what you\'d like to see!</span></p> <div class="popover-footer svelte-i5okdr"><!></div></div>'),$t.vs('<label><span class="label-text svelte-ja2ngw"> </span> <input class="input svelte-ja2ngw" type="number" placeholder="--"></label>'),$t.vs('<div class="mon-spinner svelte-1fzag14"><svg class="mon-spinner__icon svelte-1fzag14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" clip-rule="evenodd"></path><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"></path></svg> <!></div>'),$t.vs('<p class="mon-loading__text svelte-1omw61o">Loading custom block</p>'),$t.vs('<div class="mon-loading svelte-1omw61o"><!></div>');$t.Dn('<svg class="defs svelte-1l67ssw" aria-hidden="true"><defs><linearGradient x1="2.5" y1="25" x2="22.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0000"></stop><stop offset="0.135" stop-color="#FF8000"></stop><stop offset="0.315" stop-color="#FFFF00"></stop><stop offset="0.465" stop-color="#1AFE0A"></stop><stop offset="0.625" stop-color="#1EDFF4"></stop><stop offset="0.82" stop-color="#3912FA"></stop><stop offset="0.905" stop-color="#FF01E6"></stop></linearGradient><clipPath><circle cx="12" cy="12" r="12"></circle></clipPath><mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><circle cx="12" cy="12" r="12" fill="currentColor"></circle></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><clipPath><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></clipPath></defs></svg>');const kc="#glyphs-",Cc={"arc-transcription":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 13.6875H11.5C11.7188 13.6875 11.9375 13.4961 11.9375 13.25V5.375H9.75C9.25781 5.375 8.875 4.99219 8.875 4.5V2.3125H4.5C4.25391 2.3125 4.0625 2.53125 4.0625 2.75V13.25C4.0625 13.4961 4.25391 13.6875 4.5 13.6875ZM2.75 2.75C2.75 1.79297 3.51562 1 4.5 1H9.01172C9.47656 1 9.91406 1.19141 10.2422 1.51953L12.7305 4.00781C13.0586 4.33594 13.25 4.77344 13.25 5.23828V13.25C13.25 14.2344 12.457 15 11.5 15H4.5C3.51562 15 2.75 14.2344 2.75 13.25V2.75ZM8 8.4375V11.9375C8 12.1289 7.89062 12.293 7.72656 12.3477C7.5625 12.4297 7.37109 12.375 7.23438 12.2656L6.27734 11.2812H5.8125C5.56641 11.2812 5.375 11.0898 5.375 10.8438V9.53125C5.375 9.3125 5.56641 9.09375 5.8125 9.09375H6.27734L7.23438 8.13672C7.37109 8.02734 7.5625 7.97266 7.72656 8.05469C7.89062 8.10938 8 8.27344 8 8.4375ZM10.3242 8.32812C10.6523 8.875 10.8438 9.53125 10.8438 10.1875C10.8438 10.8711 10.6523 11.5 10.3242 12.0469C10.1602 12.375 9.75 12.4844 9.44922 12.293C9.12109 12.1289 9.01172 11.7188 9.20312 11.3906C9.39453 11.0625 9.53125 10.6523 9.53125 10.1875C9.53125 9.75 9.39453 9.33984 9.20312 8.98438C9.01172 8.68359 9.12109 8.27344 9.44922 8.10938C9.75 7.91797 10.1602 8.02734 10.3242 8.32812Z" fill="currentColor"/></svg>',"arc-fullscreen-disable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"arc-fullscreen-enable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg>',"arc-pause":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3.448 3.43 13.081 13.099"><path d="M6.5 4H7.5C8.3125 4 9 4.6875 9 5.5V14.5C9 15.3438 8.3125 16 7.5 16H6.5C5.65625 16 5 15.3438 5 14.5V5.5C5 4.6875 5.65625 4 6.5 4ZM12.5 4H13.5C14.3125 4 15 4.6875 15 5.5V14.5C15 15.3438 14.3125 16 13.5 16H12.5C11.6562 16 11 15.3438 11 14.5V5.5C11 4.6875 11.6562 4 12.5 4Z" /></svg>',"arc-pip-disable":'<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="18px" viewBox="0 0 22 18"><path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z" fill-rule="nonzero"/><path fill="none" d="M-1-3h24v24H-1z"/></svg>',"arc-pip-enable":'<svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H3V4.97h18z"></path></svg>',"arc-play":'<svg viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg"><path d="M2.74609 0.816406L10.6211 5.62891C11.0039 5.875 11.25 6.3125 11.25 6.75C11.25 7.21484 11.0039 7.65234 10.6211 7.87109L2.74609 12.6836C2.33594 12.9297 1.81641 12.957 1.40625 12.7109C0.996094 12.4922 0.75 12.0547 0.75 11.5625V1.9375C0.75 1.47266 0.996094 1.03516 1.40625 0.816406C1.81641 0.570312 2.33594 0.570312 2.74609 0.816406Z" /></svg>',"arc-transparency":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1H3.8V3.8H1V1Z" fill="black"/><path d="M3.7998 3.7998H6.5998V6.5998H3.7998V3.7998Z" fill="black" fill-opacity="0.8"/><path d="M6.6001 1H9.4001V3.8H6.6001V1Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 1H15.0002V3.8H12.2002V1Z" fill="black" fill-opacity="0.2"/><path d="M1 6.59961H3.8V9.39961H1V6.59961Z" fill="black"/><path d="M6.6001 6.59961H9.4001V9.39961H6.6001V6.59961Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 6.59961H15.0002V9.39961H12.2002V6.59961Z" fill="black" fill-opacity="0.2"/><path d="M1 12.2002H3.8V15.0002H1V12.2002Z" fill="black"/><path d="M6.6001 12.2002H9.4001V15.0002H6.6001V12.2002Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 12.2002H15.0002V15.0002H12.2002V12.2002Z" fill="black" fill-opacity="0.2"/><path d="M9.3999 3.7998H12.1999V6.5998H9.3999V3.7998Z" fill="black" fill-opacity="0.4"/><path d="M3.7998 9.40039H6.5998V12.2004H3.7998V9.40039Z" fill="black" fill-opacity="0.8"/><path d="M9.3999 9.40039H12.1999V12.2004H9.3999V9.40039Z" fill="black" fill-opacity="0.4"/></svg>',"arc-volume-high":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',"arc-volume-mid":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-muted":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.1 386.2C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5L449 326.6c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4L352 250.6 352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L197.8 129.8 38.8 5.1zM352 373.3L82.9 161.3C53.8 167.4 32 193.1 32 224l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448l0-74.7z"/></svg>',"border-solid":'<svg width="100%" height="100%" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="currentColor"/></svg>',"border-dashed":'<svg width="100%" height="100%" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="2" fill="currentColor"/><rect x="7" width="5" height="2" fill="currentColor"/><rect x="14" width="5" height="2" fill="currentColor"/></svg>',"border-dotted":'<svg width="100%" height="100%" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="2" fill="currentColor"/><rect x="4" width="2" height="2" fill="currentColor"/><rect x="8" width="2" height="2" fill="currentColor"/><rect x="12" width="2" height="2" fill="currentColor"/></svg>',"corner-radius-top-left":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25Z" fill="black"/>\n      <path d="M0.75 10C0.334375 10 0 10.3344 0 10.75V14.25C0 14.6656 0.334375 15 0.75 15H4.25C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5H1.5V10.75C1.5 10.3344 1.16562 10 0.75 10Z" fill="#C6C6C6"/>\n      <path d="M14 1.75C14 1.33437 13.6656 1 13.25 1H9.75C9.33437 1 9 1.33437 9 1.75C9 2.16562 9.33437 2.5 9.75 2.5H12.5V5.25C12.5 5.66563 12.8344 6 13.25 6C13.6656 6 14 5.66563 14 5.25V1.75Z" fill="#C6C6C6"/>\n      <path d="M13.25 10C12.8344 10 12.5 10.3344 12.5 10.75V13.5H9.75C9.33437 13.5 9 13.8344 9 14.25C9 14.6656 9.33437 15 9.75 15H13.25C13.6656 15 14 14.6656 14 14.25V10.75C14 10.3344 13.6656 10 13.25 10Z" fill="#C6C6C6"/>\n      </svg>',"corner-radius-top-right":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84280)">\n        <path d="M15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25Z" fill="black"/>\n        <path d="M6 0.75C6 0.334375 5.66563 -1.4616e-08 5.25 -3.27835e-08L1.75 -1.85773e-07C1.33437 -2.03941e-07 1 0.334375 1 0.75L1 4.25C1 4.66562 1.33437 5 1.75 5C2.16562 5 2.5 4.66562 2.5 4.25L2.5 1.5L5.25 1.5C5.66562 1.5 6 1.16562 6 0.75Z" fill="#C6C6C6"/>\n        <path d="M14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14Z" fill="#C6C6C6"/>\n        <path d="M6 13.25C6 12.8344 5.66562 12.5 5.25 12.5L2.5 12.5L2.5 9.75C2.5 9.33437 2.16563 9 1.75 9C1.33437 9 1 9.33437 1 9.75L1 13.25C1 13.6656 1.33437 14 1.75 14L5.25 14C5.66562 14 6 13.6656 6 13.25Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84280">\n        <rect width="14" height="16" fill="white" transform="translate(16) rotate(90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-left":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84287)">\n        <path d="M1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75Z" fill="black"/>\n        <path d="M10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25Z" fill="#C6C6C6"/>\n        <path d="M1.75 8.94366e-09C1.33438 3.98738e-09 1 0.334375 1 0.75L1 4.25C1 4.66563 1.33437 5 1.75 5C2.16562 5 2.5 4.66563 2.5 4.25L2.5 1.5L5.25 1.5C5.66563 1.5 6 1.16563 6 0.75C6 0.334375 5.66563 5.5637e-08 5.25 5.06807e-08L1.75 8.94366e-09Z" fill="#C6C6C6"/>\n        <path d="M10 0.75C10 1.16563 10.3344 1.5 10.75 1.5L13.5 1.5L13.5 4.25C13.5 4.66563 13.8344 5 14.25 5C14.6656 5 15 4.66563 15 4.25L15 0.75C15 0.334375 14.6656 5.5637e-08 14.25 5.06807e-08L10.75 8.94366e-09C10.3344 3.98738e-09 10 0.334375 10 0.75Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84287">\n        <rect width="14" height="16" fill="white" transform="translate(0 14) rotate(-90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-right":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15Z" fill="black"/>\n      <path d="M13.25 6C13.6656 6 14 5.66563 14 5.25L14 1.75C14 1.33437 13.6656 1 13.25 1L9.75 1C9.33438 1 9 1.33437 9 1.75C9 2.16562 9.33438 2.5 9.75 2.5L12.5 2.5L12.5 5.25C12.5 5.66562 12.8344 6 13.25 6Z" fill="#C6C6C6"/>\n      <path d="M6.55671e-08 14.25C2.9232e-08 14.6656 0.334375 15 0.75 15L4.25 15C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5L1.5 13.5L1.5 10.75C1.5 10.3344 1.16563 10 0.75 10C0.334375 10 4.07882e-07 10.3344 3.71547e-07 10.75L6.55671e-08 14.25Z" fill="#C6C6C6"/>\n      <path d="M0.75 6C1.16563 6 1.5 5.66562 1.5 5.25L1.5 2.5L4.25 2.5C4.66563 2.5 5 2.16563 5 1.75C5 1.33437 4.66563 1 4.25 1L0.75 1C0.334375 1 4.07882e-07 1.33437 3.71547e-07 1.75L6.55671e-08 5.25C2.9232e-08 5.66562 0.334375 6 0.75 6Z" fill="#C6C6C6"/>\n      </svg>',"aspect-ratio-9:16":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.4998 26.5V16V5.5C21.4998 5.00781 20.8331 4.625 20.4998 4.625H11.4998C10.9998 4.625 10.4998 5 10.4998 5.5L10.6667 16V26.5C10.6667 26.9375 11.1248 27.375 11.4998 27.375H20.4998C20.8331 27.375 21.4998 26.9375 21.4998 26.5ZM24 5.5V26.5C24 28.4141 22.7917 30 21.3333 30H10.6667C9.16667 30 8 28.4141 8 26.5V5.5C8 3.53125 9.16667 2 10.6667 2H21.3333C22.7917 2 24 3.53125 24 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-16:9":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 21.4998L16 21.4998L26.5 21.4998C26.9922 21.4998 27.375 20.8331 27.375 20.4998L27.375 11.4998C27.375 10.9998 27 10.4998 26.5 10.4998L16 10.6667L5.5 10.6667C5.0625 10.6667 4.625 11.1248 4.625 11.4998L4.625 20.4998C4.625 20.8331 5.0625 21.4998 5.5 21.4998ZM26.5 24L5.5 24C3.5859 24 2 22.7917 2 21.3333L2 10.6667C2 9.16667 3.5859 8 5.5 8L26.5 8C28.4688 8 30 9.16667 30 10.6667L30 21.3333C30 22.7917 28.4687 24 26.5 24Z" fill="currentColor"/></svg>',"aspect-ratio-2:3":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M23.5 26.5V16V5.5C23.5 5.00781 22.8958 4.625 22.5 4.625H10.5C9.90625 4.625 9.5 5 9.5 5.5V16V26.5C9.5 26.9375 10.0547 27.375 10.5 27.375H22.5C22.8958 27.375 23.5 26.9375 23.5 26.5ZM26 5.5V26.5C26 28.4141 24.5651 30 22.8333 30H10.1667C8.38542 30 7 28.4141 7 26.5V5.5C7 3.53125 8.38542 2 10.1667 2H22.8333C24.5651 2 26 3.53125 26 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-3:2":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 22.5L16 22.5L26.5 22.5C26.9922 22.5 27.375 21.8958 27.375 21.5L27.375 9.5C27.375 8.90625 27 8.5 26.5 8.5L16 8.5L5.5 8.5C5.0625 8.5 4.625 9.05469 4.625 9.5L4.625 21.5C4.625 21.8958 5.0625 22.5 5.5 22.5ZM26.5 25L5.5 25C3.5859 25 2 23.5651 2 21.8333L2 9.16667C2 7.38542 3.5859 6 5.5 6L26.5 6C28.4688 6 30 7.38542 30 9.16667L30 21.8333C30 23.5651 28.4687 25 26.5 25Z" fill="currentColor"/></svg>',"border-color":'\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n        <g clip-path="url(#mon-border-color-icon-boundary-clip-path)" data-figma-skip-parse="true">\n          <foreignObject x="0" y="0" width="24" height="24">\n            <div xmlns="http://www.w3.org/1999/xhtml"\n              style="background:var(--fa-secondary-color);height:100%;width:100%;opacity:1"></div>\n          </foreignObject>\n        </g>\n        <path\n          d="M23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM1 12C1 5.92487 5.92487 1 12 1V-1C4.8203 -1 -1 4.8203 -1 12H1ZM12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM16.3333 12C16.3333 14.3932 14.3932 16.3333 12 16.3333V18.3333C15.4978 18.3333 18.3333 15.4978 18.3333 12H16.3333ZM12 7.66667C14.3932 7.66667 16.3333 9.60677 16.3333 12H18.3333C18.3333 8.5022 15.4978 5.66667 12 5.66667V7.66667ZM7.66667 12C7.66667 9.60677 9.60677 7.66667 12 7.66667V5.66667C8.5022 5.66667 5.66667 8.5022 5.66667 12H7.66667ZM12 16.3333C9.60677 16.3333 7.66667 14.3932 7.66667 12H5.66667C5.66667 15.4978 8.5022 18.3333 12 18.3333V16.3333Z"\n          fill="black"\n          fill-opacity="0.1"\n          mask="url(#mon-border-color-icon-outline-mask)"\n        />\n      </svg>',"custom-shapes-rectangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="3.25" width="18.5" height="13.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-square":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="18.5" height="18.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-circle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-plus":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41667 6.66667V0.75H12.5833V6.66667V7.41667H13.3333H19.25V12.5833H13.3333H12.5833V13.3333V19.25H7.41667V13.3333V12.5833H6.66667H0.75V7.41667H6.66667H7.41667V6.66667Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-chevron":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0763 18.25L1.20849 18.25L5.1303 10.3329L5.29521 10L5.1303 9.66709L1.2085 1.75L15.0763 1.75L19.163 10L15.0763 18.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-octagon":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.757121 6.42456L5.99251 0.936083L13.5754 0.757121L19.0639 5.99251L19.2429 13.5754L14.0075 19.0639L6.42456 19.2429L0.936083 14.0075L0.757121 6.42456Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-triangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31131 17.75L10 2.97923L18.6887 17.75H1.31131Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-parallelogram":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998432 18.25L5.78397 1.75H19.0016L14.216 18.25H0.998432Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-shield":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.25C5.86967 19.25 2.75 16.455 2.75 13.266L2.75 0.750001L17.25 0.75L17.25 13.266C17.25 16.455 14.1303 19.25 10 19.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-bookmark":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70948 15.527L1.75 18.8714V0.75H18.25V18.8714L10.2905 15.527L10 15.405L9.70948 15.527Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-speech":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0481 15.445L4.5 18.8403V16.129V15.379H3.75H0.75V0.75H19.25V15.379H12.3558H12.1949L12.0481 15.445Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-burst":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.43692L11.2238 3.4368L11.5957 4.04466L12.2218 3.70422L14.2815 2.58415L14.3414 4.92798L14.3596 5.64039L15.072 5.65859L17.4159 5.71846L16.2958 7.77821L15.9553 8.40427L16.5632 8.77623L18.5631 10L16.5632 11.2238L15.9553 11.5957L16.2958 12.2218L17.4159 14.2815L15.072 14.3414L14.3596 14.3596L14.3414 15.072L14.2815 17.4159L12.2218 16.2958L11.5957 15.9553L11.2238 16.5632L10 18.5631L8.77623 16.5632L8.40427 15.9553L7.77821 16.2958L5.71846 17.4159L5.65859 15.072L5.64039 14.3596L4.92798 14.3414L2.58415 14.2815L3.70422 12.2218L4.04466 11.5957L3.4368 11.2238L1.43692 10L3.4368 8.77623L4.04466 8.40427L3.70422 7.77821L2.58415 5.71846L4.92798 5.65859L5.64039 5.64039L5.65859 4.92798L5.71846 2.58415L7.77821 3.70422L8.40427 4.04466L8.77623 3.4368L10 1.43692Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-star":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.74152L12.2033 6.35881L12.3786 6.72619L12.7821 6.77938L17.8543 7.44799L14.1438 10.9702L13.8486 11.2505L13.9227 11.6507L14.8542 16.6812L10.3578 14.2408L10 14.0467L9.64224 14.2408L5.14579 16.6813L6.07729 11.6507L6.1514 11.2505L5.85618 10.9702L2.14572 7.44799L7.21787 6.77938L7.62144 6.72619L7.79674 6.35881L10 1.74152Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-cloud":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8435 7.77179L15.7201 8.5053L16.4526 8.63477C17.9724 8.90342 19.25 10.4356 19.25 12.4205C19.25 14.6255 17.6897 16.25 15.9538 16.25H4.04624C2.31032 16.25 0.75 14.6255 0.75 12.4205C0.75 10.2156 2.31032 8.59108 4.04624 8.59108H4.0467H4.78646L4.79663 7.85139C4.82308 5.92674 6.18956 4.53505 7.68789 4.53505C8.36794 4.53505 9.00377 4.80993 9.51137 5.29221L10.1781 5.92566L10.6645 5.14517C11.2076 4.2736 12.0714 3.75 13.0057 3.75C14.5182 3.75 15.8974 5.16954 15.8974 7.1215C15.8974 7.34459 15.8788 7.56192 15.8435 7.77179Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-arrow":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.681 18.0566V14.0592V13.3092H10.931H0.75V6.69081H10.931H11.681V5.94081V1.94342L18.9875 10L11.681 18.0566Z" stroke=currentColor stroke-width="1.5"/></svg>',"folder-open":'<svg width="49" height="49"viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 11.625C1.125 8.75391 3.42188 6.375 6.375 6.375H15.9727C17.3672 6.375 18.6797 6.94922 19.6641 7.93359L21.8789 10.1484C22.8633 11.1328 24.1758 11.625 25.5703 11.625H35.25C38.1211 11.625 40.5 14.0039 40.5 16.875V22.125H12.9375C11.9531 22.125 11.1328 22.6172 10.6406 23.4375L1.45312 39.1875C1.20703 39.5977 1.125 40.0898 1.125 40.5V11.625ZM1.28906 41.5664C1.37109 41.6484 1.37109 41.7305 1.45312 41.8125C1.37109 41.8125 1.37109 41.7305 1.37109 41.6484L1.28906 41.5664ZM38.9414 41.6484L40.2539 39.3516C40.0078 40.1719 39.5977 40.9922 38.9414 41.6484Z" fill="#136EAB"/><path d="M12.9375 22.125H45.75C46.6523 22.125 47.5547 22.6172 47.9648 23.4375C48.457 24.2578 48.457 25.3242 47.9648 26.1445L38.7773 41.8945C38.2852 42.6328 37.4648 43.125 36.5625 43.125H3.75C2.76562 43.125 1.94531 42.6328 1.45312 41.8125C0.960938 40.9922 0.960938 40.0078 1.45312 39.1875L10.6406 23.4375C11.1328 22.6172 11.9531 22.125 12.9375 22.125Z" fill="#4BB4EE"/></svg>',"padding-top-bottom":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M15.9111 13.47C15.9111 12.8936 16.3777 12.4264 16.9532 12.4264C17.5287 12.4264 17.9953 12.8936 17.9953 13.47C17.9953 14.0464 17.5287 14.5137 16.9532 14.5137C16.3777 14.5137 15.9111 14.0464 15.9111 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 9.9915C15.9111 9.41511 16.3777 8.94785 16.9532 8.94785C17.5287 8.94785 17.9953 9.41511 17.9953 9.9915C17.9953 10.5679 17.5287 11.0352 16.9532 11.0352C16.3777 11.0352 15.9111 10.5679 15.9111 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 6.51494C15.9111 5.93854 16.3777 5.47128 16.9532 5.47128C17.5287 5.47128 17.9953 5.93854 17.9953 6.51494C17.9953 7.09133 17.5287 7.55859 16.9532 7.55859C16.3777 7.55859 15.9111 7.09133 15.9111 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 13.47C2.01093 12.8936 2.47749 12.4264 3.05303 12.4264C3.62857 12.4264 4.09514 12.8936 4.09514 13.47C4.09514 14.0464 3.62857 14.5137 3.05303 14.5137C2.47749 14.5137 2.01093 14.0464 2.01093 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 9.9915C2.01093 9.41511 2.47749 8.94785 3.05303 8.94785C3.62857 8.94785 4.09514 9.41511 4.09514 9.9915C4.09514 10.5679 3.62857 11.0352 3.05303 11.0352C2.47749 11.0352 2.01093 10.5679 2.01093 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 6.51494C2.01093 5.93854 2.47749 5.47128 3.05303 5.47128C3.62857 5.47128 4.09514 5.93854 4.09514 6.51494C4.09514 7.09133 3.62857 7.55859 3.05303 7.55859C2.47749 7.55859 2.01093 7.09133 2.01093 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.00006 3.04366C2.00006 2.46726 2.46663 2 3.04217 2L16.958 2C17.5335 2 18.0001 2.46726 18.0001 3.04366C18.0001 3.62005 17.5335 4.08731 16.958 4.08731L3.04217 4.08731C2.46663 4.08731 2.00006 3.62005 2.00006 3.04366Z" fill="black"/>\n      <path d="M2.00006 16.9558C2.00006 16.3794 2.46663 15.9121 3.04217 15.9121L16.958 15.9121C17.5335 15.9121 18.0001 16.3794 18.0001 16.9558C18.0001 17.5322 17.5335 17.9994 16.958 17.9994L3.04217 17.9994C2.46663 17.9994 2.00006 17.5322 2.00006 16.9558Z" fill="black"/>\n      </svg>',"padding-left-right":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.53 15.9119C7.10639 15.9119 7.57365 16.3784 7.57365 16.954C7.57365 17.5295 7.10639 17.9961 6.53 17.9961C5.9536 17.9961 5.48634 17.5295 5.48634 16.954C5.48634 16.3784 5.9536 15.9119 6.53 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 15.9119C10.5849 15.9119 11.0522 16.3784 11.0522 16.954C11.0522 17.5295 10.5849 17.9961 10.0085 17.9961C9.43212 17.9961 8.96486 17.5295 8.96486 16.954C8.96486 16.3784 9.43212 15.9119 10.0085 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 15.9119C14.0615 15.9119 14.5287 16.3784 14.5287 16.954C14.5287 17.5295 14.0615 17.9961 13.4851 17.9961C12.9087 17.9961 12.4414 17.5295 12.4414 16.954C12.4414 16.3784 12.9087 15.9119 13.4851 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M6.53 2.01149C7.10639 2.01149 7.57365 2.47806 7.57365 3.0536C7.57365 3.62914 7.10639 4.0957 6.53 4.0957C5.9536 4.0957 5.48634 3.62914 5.48634 3.0536C5.48634 2.47806 5.9536 2.01149 6.53 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 2.01149C10.5849 2.01149 11.0522 2.47806 11.0522 3.0536C11.0522 3.62914 10.5849 4.0957 10.0085 4.0957C9.43212 4.0957 8.96486 3.62914 8.96486 3.0536C8.96486 2.47806 9.43212 2.01149 10.0085 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 2.01149C14.0615 2.01149 14.5287 2.47806 14.5287 3.0536C14.5287 3.62914 14.0615 4.0957 13.4851 4.0957C12.9087 4.0957 12.4414 3.62914 12.4414 3.0536C12.4414 2.47806 12.9087 2.01149 13.4851 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M16.9564 2C17.5328 2 18 2.46657 18 3.04211L18 16.9579C18 17.5334 17.5328 18 16.9564 18C16.38 18 15.9127 17.5334 15.9127 16.9579L15.9127 3.04211C15.9127 2.46657 16.38 2 16.9564 2Z" fill="black"/>\n      <path d="M3.04425 2C3.62065 2 4.08791 2.46657 4.08791 3.04211L4.08791 16.9579C4.08791 17.5334 3.62065 18 3.04425 18C2.46786 18 2.00059 17.5334 2.00059 16.9579L2.00059 3.04211C2.00059 2.46657 2.46786 2 3.04425 2Z" fill="black"/>\n      </svg>',"regular-microphone-sparkle":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M0.5625 6.65625C0.5625 6.30078 0.835938 6 1.21875 6C1.57422 6 1.875 6.30078 1.875 6.65625V7.75C1.875 9.69141 3.43359 11.25 5.375 11.25C6.00391 11.25 6.60547 11.0859 7.125 10.7852C7.125 10.8125 7.125 10.8125 7.125 10.8125V10.8398C7.125 11.3047 7.34375 11.7148 7.72656 11.9609C7.20703 12.2617 6.63281 12.4531 6.03125 12.5352V13.4375H7.34375C7.69922 13.4375 8 13.7383 8 14.0938C8 14.4766 7.69922 14.75 7.34375 14.75H5.375H3.40625C3.02344 14.75 2.75 14.4766 2.75 14.0938C2.75 13.7383 3.02344 13.4375 3.40625 13.4375H4.71875V12.5352C2.36719 12.207 0.5625 10.2109 0.5625 7.75V6.65625ZM2.75 3.375C2.75 1.92578 3.92578 0.75 5.375 0.75C6.82422 0.75 8 1.92578 8 3.375V7.75C8 9.19922 6.82422 10.375 5.375 10.375C3.92578 10.375 2.75 9.19922 2.75 7.75V3.375ZM4.0625 3.375V7.75C4.0625 8.48828 4.63672 9.0625 5.375 9.0625C6.08594 9.0625 6.6875 8.48828 6.6875 7.75V3.375C6.6875 2.66406 6.08594 2.0625 5.375 2.0625C4.63672 2.0625 4.0625 2.66406 4.0625 3.375ZM8 10.8125C8 10.6211 8.10938 10.457 8.30078 10.375L10.625 9.5L11.4727 7.20312C11.5547 7.01172 11.7188 6.875 11.9375 6.875C12.1289 6.875 12.293 7.01172 12.375 7.20312L13.25 9.5L15.5469 10.375C15.7383 10.457 15.875 10.6211 15.875 10.8125C15.875 11.0312 15.7383 11.1953 15.5469 11.2773L13.25 12.125L12.375 14.4492C12.293 14.6406 12.1289 14.75 11.9375 14.75C11.7188 14.75 11.5547 14.6406 11.4727 14.4492L10.625 12.125L8.30078 11.2773C8.10938 11.1953 8 11.0312 8 10.8125ZM8.46484 9.39062C8.71094 8.89844 8.875 8.35156 8.875 7.75V6.65625C8.875 6.30078 9.14844 6 9.53125 6C9.88672 6 10.1875 6.30078 10.1875 6.65625V7.75C10.1875 7.91406 10.1602 8.07812 10.1602 8.24219L9.94141 8.84375L8.46484 9.39062Z" fill="black"/>\n      </svg>',"menu-border-width":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M15.5 13.4C15.5 13.5591 15.4539 13.7117 15.3719 13.8243C15.2898 13.9368 15.1785 14 15.0625 14L1.9375 14C1.82147 14 1.71019 13.9368 1.62814 13.8243C1.54609 13.7117 1.5 13.5591 1.5 13.4L1.5 11C1.5 10.8409 1.54609 10.6883 1.62814 10.5757C1.71019 10.4632 1.82147 10.4 1.9375 10.4L15.0625 10.4C15.1785 10.4 15.2898 10.4632 15.3719 10.5757C15.4539 10.6883 15.5 10.8409 15.5 11L15.5 13.4ZM15.5 7.4C15.5 7.55913 15.4539 7.71174 15.3719 7.82426C15.2898 7.93679 15.1785 8 15.0625 8L1.9375 8C1.82147 8 1.71019 7.93678 1.62814 7.82426C1.54609 7.71174 1.5 7.55913 1.5 7.4L1.5 6.2C1.5 6.04087 1.54609 5.88826 1.62814 5.77573C1.71019 5.66321 1.82147 5.6 1.9375 5.6L15.0625 5.6C15.1785 5.6 15.2898 5.66321 15.3719 5.77573C15.4539 5.88826 15.5 6.04087 15.5 6.2L15.5 7.4ZM15.5 2.6C15.5 2.75913 15.4539 2.91174 15.3719 3.02426C15.2898 3.13679 15.1785 3.2 15.0625 3.2L1.9375 3.2C1.82147 3.2 1.71019 3.13678 1.62814 3.02426C1.54609 2.91174 1.5 2.75913 1.5 2.6C1.5 2.44087 1.54609 2.28826 1.62814 2.17573C1.71019 2.06321 1.82147 2 1.9375 2L15.0625 2C15.1785 2 15.2898 2.06321 15.3719 2.17574C15.4539 2.28826 15.5 2.44087 15.5 2.6Z" fill="currentColor"/>\n    </svg>',"menu-corner-radius":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80187 1H4.76667H2.27778C1.84823 1 1.5 1.34823 1.5 1.77778C1.5 2.20733 1.84823 2.55556 2.27778 2.55556H4.76667C6.52189 2.55556 7.79152 2.55616 8.79008 2.63775C9.77954 2.71859 10.4341 2.87505 10.9717 3.14897C11.9962 3.67094 12.8291 4.50384 13.351 5.52827C13.6249 6.06585 13.7814 6.72046 13.8623 7.70992C13.9438 8.70848 13.9444 9.97811 13.9444 11.7333V14.2222C13.9444 14.6517 14.2927 15 14.7222 15C15.1517 15 15.5 14.6517 15.5 14.2222V11.7333V11.6981C15.5 9.98553 15.5 8.65252 15.4126 7.58325C15.3239 6.49758 15.1413 5.61549 14.737 4.82206C14.0659 3.50493 12.9951 2.43407 11.6779 1.76295C10.8845 1.35868 10.0024 1.17606 8.91675 1.08736C7.84748 1 6.51447 1 4.80187 1Z" fill="currentColor"/>\n    </svg>',"menu-box-shadow":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M13.75 2.75V1H1.5V13.25H3.25V15H15.5V2.75H13.75ZM12.875 12.375H2.375V1.875H12.875V12.375Z" fill="currentColor"/>\n    </svg>',"menu-overlay":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M12.7445 3.78598C12.5683 3.81798 10.005 3.81798 9.92492 3.76999V1.00247H7.12136V3.78598C6.96116 3.81798 4.38188 3.81798 4.30178 3.76999V1.01847C4.18964 0.986478 1.5623 1.00247 1.51424 1.01847C1.4822 1.16245 1.51424 3.73799 1.51424 3.81798H4.30178V6.60148H1.51424C1.4822 6.77745 1.51424 9.337 1.51424 9.41699H4.30178V12.2165H1.51424C1.4822 12.3285 1.51424 14.6801 1.51424 15H4.3178V12.2325C4.38188 12.2325 6.96116 12.2165 7.10534 12.2325C7.12136 12.2965 7.12136 14.76 7.10534 15H9.94094V12.2325H12.7285C12.7445 12.2965 12.7445 14.6961 12.7445 15H15.5V12.2165H12.7445V9.41699H15.5V6.58549H12.7445V3.81798H15.5V1.00247H12.7445V3.78598ZM7.10534 9.40099C7.04126 9.40099 4.55811 9.41699 4.33382 9.40099C4.30178 9.337 4.30178 6.76146 4.33382 6.61748H7.10534V9.40099ZM9.92492 12.2005C9.84482 12.2325 7.28156 12.2325 7.12136 12.2165V9.41699H9.92492V12.2005ZM7.12136 6.58549V3.81798H9.92492C9.92492 3.89796 9.94094 6.47351 9.92492 6.58549H7.12136ZM12.7445 9.40099H9.94094C9.92492 9.337 9.92492 6.76146 9.94094 6.61748H12.7445V9.40099Z" fill="url(#paint0_linear_14204_11278)"/>\n      <defs>\n        <linearGradient id="paint0_linear_14204_11278" x1="2.5" y1="8" x2="14" y2="8" gradientUnits="userSpaceOnUse">\n          <stop offset="0" stop-color="currentColor" />\n          <stop offset="1" stop-opacity="0.2" stop-color="currentColor" />\n        </linearGradient>\n      </defs>\n    </svg>\n    ',"swatch-solid":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g\n          clip-path="url(#mon-swatch-clip-path)"\n        >\n          <g>\n            <foreignObject\n              x="0"\n              y="0"\n              width="24"\n              height="24"\n            >\n              <div class="conic-gradient" style="background: var(--fa-primary-color, currentColor); height: 100%; width: 100%;"></div>\n            </foreignObject>\n          </g>\n        </g>\n        <circle\n          cx="12"\n          cy="12"\n          r="11.5"\n          stroke="black"\n          stroke-opacity="0.1"\n        />\n      </svg>\n    ',"swatch-split":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g mask="url(#mon-swatch-clip-mask)">\n          <rect width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="3.42822" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="3.42969" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="3.42822" y="10.2852" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="3.42822" y="17.1445" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="10.2856" y="3.42969" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="17.1426" y="3.42969" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="10.2856" y="10.2852" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="17.1426" y="10.2852" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="10.2856" y="17.1445" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="17.1426" y="17.1445" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <path d="M0 2C0 0.89543 0.895431 0 2 0H12V24H2C0.895431 24 0 23.1046 0 22V2Z" fill="var(--fa-primary-color, currentColor)" />\n          <g transform="translate(24, 0) scale(-1, 1)">\n            <path d="M0 2C0 0.89543 0.895431 0 2 0H12V24H2C0.895431 24 0 23.1046 0 22V2Z" fill="var(--fa-secondary-color, currentColor)" />\n          </g>\n          <circle cx="12" cy="12" r="11.5" stroke="black" stroke-opacity="0.2"/>\n        </g>\n      </svg>\n    ',"text-color":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M12.6016 4.28516L17.1953 15.2227C17.332 15.5508 17.168 15.9336 16.8398 16.0977C16.5117 16.2344 16.1289 16.0703 15.9648 15.7422L15.0352 13.5H8.9375L8.00781 15.7422C7.87109 16.0703 7.46094 16.2344 7.13281 16.0977C6.80469 15.9336 6.64062 15.5508 6.77734 15.2227L11.3711 4.28516C11.4805 4.03906 11.7266 3.875 12 3.875C12.2461 3.875 12.4922 4.03906 12.6016 4.28516ZM14.4883 12.1875L12 6.22656L9.48438 12.1875H14.4883Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight-undefined":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n      </svg>\n    ',"regular-image-sparkle":'\n      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5C0 3.90625 0.875 3 2 3H14C15.0938 3 16 3.90625 16 5V8.09375C15.8125 8.03125 15.6562 8 15.5 8C15.125 8 14.75 8.15625 14.5 8.375V5C14.5 4.75 14.25 4.5 14 4.5H2C1.71875 4.5 1.5 4.75 1.5 5V15V15.0312L1.625 14.8438L4.125 11.3438C4.28125 11.125 4.5 11 4.75 11C4.96875 11 5.21875 11.125 5.34375 11.3125L6.3125 12.6562L8.90625 9.3125C9.03125 9.125 9.25 9 9.5 9C9.71875 9 9.9375 9.125 10.0938 9.3125L11.9375 11.7188L11 12.0625C10.375 12.2812 10 12.875 10 13.5V13.5312C10 14.1562 10.375 14.7188 11 14.9688L13.2188 15.7812L13.6562 17H2C0.875 17 0 16.125 0 15V5ZM3.1875 6.75C3.46875 6.3125 3.9375 6 4.5 6C5.03125 6 5.53125 6.3125 5.78125 6.75C6.0625 7.21875 6.0625 7.8125 5.78125 8.25C5.53125 8.71875 5.03125 9 4.5 9C3.9375 9 3.46875 8.71875 3.1875 8.25C2.90625 7.8125 2.90625 7.21875 3.1875 6.75ZM11 13.5C11 13.2812 11.125 13.0938 11.3438 13L14 12L14.9688 9.375C15.0625 9.15625 15.25 9 15.5 9C15.7188 9 15.9062 9.15625 16 9.375L17 12L19.625 13C19.8438 13.0938 20 13.2812 20 13.5C20 13.75 19.8438 13.9375 19.625 14.0312L17 15L16 17.6562C15.9062 17.875 15.7188 18 15.5 18C15.25 18 15.0625 17.875 14.9688 17.6562L14 15L11.3438 14.0312C11.125 13.9375 11 13.75 11 13.5Z" fill="url(#paint0_linear_19093_1180)"/>\n        <defs>\n          <linearGradient id="paint0_linear_19093_1180" x1="0.243902" y1="20" x2="19.8657" y2="19.2606" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#9C15FF"/>\n            <stop offset="1" stop-color="#1EB4FB"/>\n          </linearGradient>\n        </defs>\n      </svg>\n    ',"line-arrow":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M1.46967 9.46967C1.17678 9.76256 1.17678 10.2374 1.46967 10.5303L6.24264 15.3033C6.53553 15.5962 7.01041 15.5962 7.3033 15.3033C7.59619 15.0104 7.59619 14.5355 7.3033 14.2426L3.06066 10L7.3033 5.75736C7.59619 5.46447 7.59619 4.98959 7.3033 4.6967C7.01041 4.40381 6.53553 4.40381 6.24264 4.6967L1.46967 9.46967ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75ZM2 10V10.75H17V10V9.25H2V10Z" fill="#707070"/>\n    </svg>',"line-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C8.20914 6 10 7.79086 10 10C10 12.2091 8.20914 14 6 14C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6ZM6 7.5C4.61929 7.5 3.5 8.61929 3.5 10C3.5 11.3807 4.61929 12.5 6 12.5C7.38071 12.5 8.5 11.3807 8.5 10C8.5 8.61929 7.38071 7.5 6 7.5Z" fill="#707070"/>\n    </svg>',"line-square":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <path d="M10 14H2V6H10V14ZM3.5 7.5V12.5H8.5V7.5H3.5Z" fill="#707070"/>\n    </svg>',"line-diamond":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM12 10L12 10.75L17 10.75L17 10L17 9.25L12 9.25L12 10Z" fill="#707070"/>\n      <path d="M7.65747 15.5651L1.99993 9.90754L7.65747 4.25L13.315 9.90754L7.65747 15.5651ZM7.65747 6.37132L4.12194 9.90685L7.65747 13.4424L11.193 9.90685L7.65747 6.37132Z" fill="#707070"/>\n    </svg>',"line-stop":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM3 10L3 10.75L17 10.75L17 10L17 9.25L3 9.25L3 10Z" fill="#707070"/>\n      <path d="M3 6L3 14" stroke="#707070" stroke-width="1.5" stroke-linecap="round"/>\n    </svg>',"line-triangle":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n\t    <defs>\n\t    \t<clipPath id="e6d286b7-1995-4639-ba8a-7354d534bfc3">\n\t\t    \t<path d="M2 10L9.5 14.3301V5.66987L2 10ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75Z" />\n\t    \t</clipPath>\n    \t</defs>\n    \t<g clip-path="url(#e6d286b7-1995-4639-ba8a-7354d534bfc3)">\n\t      <path d="M2 10L9.5 14.3301V5.66987L2 10ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75Z" stroke="#707070" stroke-width="3" fill="none" />\n    \t</g>\n\t    <path d="M8.75 10V10.75H17V10V9.25H8.75V10Z" fill="#707070"/>\n    </svg>',"line-triangle-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M2 10L9.5 14.3301V5.66987L2 10ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75ZM8.75 10V10.75H17V10V9.25H8.75V10Z" fill="#707070"/>\n    </svg>',"line-circle-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <path d="M6 6C8.20914 6 10 7.79086 10 10C10 12.2091 8.20914 14 6 14C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6Z" fill="#707070"/>\n    </svg>',"line-square-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <rect x="2" y="6" width="8" height="8" fill="#707070"/>\n    </svg>',"line-diamond-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM10 10L10 10.75L17 10.75L17 10L17 9.25L10 9.25L10 10Z" fill="#707070"/>\n      <rect x="7.65991" y="4.34314" width="8" height="8" transform="rotate(45 7.65991 4.34314)" fill="#707070"/>\n    </svg>'};function Tc(e){return Object.hasOwn(Cc,e)}function Bc(e){return e.startsWith(kc)}d(Cc);var Mc=$t.vs('<span class="glyph"> </span>');function Lc(e,t){$t.VC(t,!1);const a=$t.zg(),r=$t.zg(),i=$t.zg(),o=e=>{var t=$t.Im(),a=$t.es(t),r=e=>{var t=$t.Im(),a=$t.es(t);$t.qy(a,(()=>Cc[l()]),!1,!1),$t.BC(e,t)};$t.if(a,(e=>{Tc(l())&&e(r)})),$t.BC(e,t)},n=e=>{var t=$t.Im(),a=$t.es(t),r=e=>{var t=Mc(),a=$t.jf(t,!0);$t.cL(t),$t.vN((e=>$t.j(a,e)),[()=>function(e){return e.slice(kc.length)}(l())],$t.Xd),$t.BC(e,t)};$t.if(a,(e=>{Bc(l())&&e(r)})),$t.BC(e,t)};let l=$t._w(t,"icon",8),s=$t._w(t,"style",8,"regular"),c=$t._w(t,"size",8,14);$t.M3((()=>$t.iT(l())),(()=>{$t.hZ(a,Tc(l()))})),$t.M3((()=>$t.iT(l())),(()=>{$t.hZ(r,Bc(l()))})),$t.M3((()=>$t.iT(s())),(()=>{$t.hZ(i,"duotone"===s())})),$t.iq(),$t.Ts();const d=$t.Xd((()=>$t.Jt(a)?o:$t.Jt(r)?n:`fa-${s()} fa-${l()}`));!function(e,t){$t.VC(t,!1);let a=$t._w(t,"icon",8,"fa-regular fa-circle-dashed"),r=$t._w(t,"color",8,void 0),i=$t._w(t,"size",8,void 0),o=$t._w(t,"duotone",8,void 0),n=$t._w(t,"children",8,void 0);const l="string"==typeof a()&&a().length>0;$t.Ts();var s=us();let c;var d=$t.jf(s),p=e=>{var t=$t.Im(),r=$t.es(t);$t.UA(r,a),$t.BC(e,t)},h=(e,t)=>{var r=e=>{var t=ms();$t.vN((()=>$t.ys(t,1,$t.$z(a())))),$t.BC(e,t)},i=e=>{var t=$t.Im(),a=$t.es(t);$t.UA(a,(()=>n()??$t.lQ)),$t.BC(e,t)};$t.if(e,(e=>{l?e(r):e(i,!1)}),t)};$t.if(d,(e=>{a()&&"string"!=typeof a()?e(p):e(h,!1)})),$t.cL(s),$t.XI(s,(e=>hs?.(e))),$t.vN((e=>{$t.Jk(s,"data-duotone",o()||void 0),c=$t.hg(s,"",c,{"--arc-icon-size":e,"--arc-icon-color":r()})}),[()=>ps(i())],$t.Xd),$t.BC(e,s),$t.uY()}(e,{get icon(){return $t.Jt(d)},get size(){return c()},get duotone(){return $t.Jt(i)}}),$t.uY()}$t.vs("<div><!></div>"),$t.vs('<div class="scrollbar svelte-1hrnjzb" aria-hidden="true"><div class="handle svelte-1hrnjzb"></div> <input tabindex="-1" type="range" class="svelte-1hrnjzb"></div>'),$t.vs("<!> <!>",1),$t.vs('<div class="panel-tabs svelte-1uez1n9"><!></div>'),$t.vs('<div class="panel svelte-1uez1n9"><!> <!></div>'),$t.vs('<div class="panel-actions svelte-ir5tsd"><!></div>'),$t.vs('<header><div class="panel-heading svelte-ir5tsd"><!></div> <!></header>');var Ac=$t.vs('<div class="tooltip-text svelte-1yda0aw"><!></div>');const Dc={hash:"svelte-1yda0aw",code:".tooltip-text.svelte-1yda0aw {white-space:nowrap;width:max-content;padding:var(--arc-space-1-5);\n\n    /* arc-font-body/tight/sm-strong */font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-12);font-style:normal;font-weight:var(--arc-font-weight-600);line-height:120%; /* 14.4px */}"};$t.vs('<span class="text-label svelte-1l0xkh1"> </span>'),$t.vs('<!> <div class="mon-sr-only svelte-1l0xkh1"><!></div>',1),$t.vs("<div><!> <!></div>"),$t.vs('<div><input type="number" class="input-value svelte-gx1obz"> <div class="input-button dec svelte-gx1obz"><!></div> <div class="input-button inc svelte-gx1obz"><!></div></div>'),$t.vs("<button><!></button>"),$t.vs('<div><!> <input class="radio-input svelte-1nbcryn" type="radio"></div>'),$t.vs('<div class="radio-icon-group svelte-1nbcryn" role="radiogroup"></div>'),$t.vs('<div class="text-input-wrapper svelte-dw7kuc"><div class="text-input-prefix svelte-dw7kuc"><div class="text-input-lead-icon svelte-dw7kuc"><!></div></div> <input> <div class="actions svelte-dw7kuc"><!></div></div>'),$t.vs('<div class="slider-container svelte-7a6v09"><div class="slider-wrapper svelte-7a6v09"><div class="slider-track svelte-7a6v09"></div> <input type="range" class="slider svelte-7a6v09"></div> <!></div>'),$t.vs("<!> ",1),$t.vs("<mon-menu-item><!> </mon-menu-item>",2),$t.vs("<mon-menu></mon-menu>",2),$t.vs('<div class="mon-split-button mon-tooltip-anchor svelte-10dj79p"><div class="mon-split-button-primary svelte-10dj79p"><!></div> <div class="mon-split-button-divider svelte-10dj79p"></div> <div><div class="mon-split-button-secondary svelte-10dj79p"><!></div> <!></div></div>');var Fc=$t.vs("<div><!></div>");const zc={hash:"svelte-1i06x9o",code:".suspense.--loading.svelte-1i06x9o {visibility:hidden;}"};$t.vs('<label><input class="input mon-visually-hidden svelte-5dh97r"> <!></label>'),$t.vs('<div class="tag-group svelte-2750ar"><!></div>'),$t.vs("<input>"),$t.vs('<label class="toggle-group-option mon-tooltip-anchor svelte-13t9a5s"><!> <input class="svelte-13t9a5s"> <span class="icon-wrapper svelte-13t9a5s"><!></span></label>'),$t.vs('<div class="toggle-group-container svelte-13t9a5s"></div>');var Vc=a(2602),Jc=a.n(Vc);function $c(e,t){const a=structuredClone(t);for(const t in a)if(Object.hasOwn(e,t)){const r=e[t];"string"==typeof r&&r&&(a[t]=r)}return a}var Pc=$t.vs('<div class="transcript-panel-focuser" tabindex="0"></div>'),Rc=$t.vs('<div class="audio-player__transcript-button-holder mon-tooltip-anchor svelte-118nwps"><!> <!></div> <!>',1),Zc=$t.vs('<div class="audio-player svelte-118nwps" aria-live="off"><div class="audio-player__housing svelte-118nwps" role="group"><button class="audio-player__play svelte-118nwps" type="button"><!></button> <div class="audio-player__slider-wrapper svelte-118nwps"><input aria-label="audio seek" class="audio-player__slider svelte-118nwps" type="range" step="any"> <div class="audio-player__slider-progress svelte-118nwps"></div></div> <div class="audio-player__timer svelte-118nwps" role="timer"> </div></div> <audio class="audio-player__audio-element"></audio> <!></div>');const Oc={hash:"svelte-118nwps",code:".audio-player.svelte-118nwps {display:flex;min-width:0;flex:1;padding-block:4px;padding-inline:12px;height:40px;align-items:center;border-radius:100px;background-color:white;pointer-events:initial;}.audio-player__housing.svelte-118nwps {--slider-thumb-size: 10px;--slider-thumb-bg: black;--slider-thumb-border: 1px solid rgb(0 0 0 / 10%);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 5px;align-items:center;display:flex;flex-flow:row nowrap;width:100%;-webkit-user-select:none;user-select:none;}.audio-player__play.svelte-118nwps {cursor:pointer;display:flex;align-items:center;justify-content:center;color:black;}.audio-player__play.svelte-118nwps {-webkit-appearance:none;appearance:none;border:none;background:none;font-size:16px;padding-inline:0;}.audio-player__slider-wrapper.svelte-118nwps {position:relative;height:32px;min-width:0;flex:1;display:flex;--pad-left: 12.5px;--pad-right: 12px;}.audio-player__slider.svelte-118nwps {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;min-width:0;flex:1;height:100%;padding-inline-start:var(--pad-left);padding-inline-end:var(--pad-right);}.audio-player__transcript-button-holder.svelte-118nwps {display:flex;}\n\n  /***** Chrome, Safari, Opera and Edge Chromium styles *****/.audio-player__slider.svelte-118nwps::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-118nwps::-webkit-slider-runnable-track {background-color:rgb(0 0 0 / 10%);border-radius:var(--slider-track-height);height:var(--slider-track-height);}\n\n  /******** Firefox styles ********/.audio-player__slider.svelte-118nwps::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-118nwps::-moz-range-track {background-color:rgb(0 0 0 / 10%);border-radius:var(--slider-track-height);height:var(--slider-track-height);}.audio-player__slider-progress.svelte-118nwps {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );border-radius:var(--slider-track-height);height:var(--slider-track-height);position:absolute;inset-inline-start:var(--pad-left);inset-inline-end:var(--pad-right);inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;}.audio-player__timer.svelte-118nwps {font-size:14px;font-family:Inter, system-ui, sans-serif;font-weight:600;white-space:nowrap;text-align:right;width:40px;}"};function _c(e,t){$t.VC(t,!1),$t.kZ(e,Oc);const[a,r]=$t.DZ(),i=()=>$t.Hz(S,"$labels",a),o=()=>$t.Hz(v,"$transcriptPanelAdapter",a),s=$t.zg(),c=$t.zg(),d=$t.zg(),p=$t.zg(),h=$t.zg(),m=$t.zg(),u=$t.zg(),g=$t.zg(),{mediaElements:f,transcriptPanelAdapter:v,labels:S}=lp(),I=!0,b={a11yMediaPause:"Pause",a11yMediaPlay:"Play",a11yGroupAudioPlayer:"Audio player",audioShowTranscript:"Show transcript",audioHideTranscript:"Hide transcript",a11yMediaRemainingTime:"Remaining time"};let x=$t._w(t,"item",8),w=$t._w(t,"mediaSrc",8),y=$t.zg(),k=$t._w(t,"onPlay",8),C=$t._w(t,"onPause",8),T=$t._w(t,"onEnded",8),B=$t._w(t,"mediaStoreAdapter",8),M=$t._w(t,"onMediaProgress",8,(()=>{})),L=$t._w(t,"altText",8);(0,Ws.onMount)((()=>(f?.set(x().id,$t.Jt(y)),()=>{f?.delete(x().id)}))),(0,Ws.onMount)((()=>B()?.subscribe(x().id,(()=>{$t.hZ(Z,!0)}))));let A=$t.zg(),D=$t.zg(),F=$t.zg(),z=$t.zg("0"),V=$t.zg(),J=$t.zg(),$=!1,P=$t.zg(0),R=$t.zg(0),Z=$t.zg(!0),O=$t.zg(!1);const _=e=>{e.preventDefault(),e.stopPropagation(),$t.hZ(Z,!$t.Jt(Z))};let j=$t.zg(),Y=$t.zg(),H=$t.zg();const E=Jc()(M(),2e3),G=e=>{$t.hZ(P,e<0?Math.max($t.Jt(P)+e,0):Math.min($t.Jt(P)+e,$t.Jt(R)))},X=()=>{o()&&$t.Jt(F)&&o().togglePanel({itemId:x().id,refocusTarget:$t.Jt(F),transcript:x().states.default.transcript})},q=()=>{$t.hZ(O,!0)},N=e=>{e.relatedTarget!==$t.Jt(J)&&$t.hZ(O,!1)},U=e=>{o()&&(e.preventDefault(),o().focusPanel(x().id)),$t.hZ(O,!1)};$t.M3((()=>i()),(()=>{$t.hZ(s,$c(i(),b))})),$t.M3((()=>($t.Jt(c),$t.Jt(d),$t.Jt(p),$t.Jt(s))),(()=>{var e;e=$t.Jt(s),$t.hZ(c,e.a11yMediaPlay),$t.hZ(d,e.a11yMediaPause),$t.hZ(p,e.a11yGroupAudioPlayer)})),$t.M3((()=>($t.Jt(V),$t.Jt(z),$t.Jt(R),$t.iT(x()),$t.Jt(Z),$t.Jt(P))),(()=>{if($t.Jt(V)){const e=Number($t.Jt(z))/$t.Jt(R)*100;$t.Jt(V).style.setProperty("--slider-progress-percent",`${e}%`),E({mondrianItemId:x().id,progress:e,duration:$t.Jt(R),active:!$t.Jt(Z)})}$t.hZ(j,Math.round($t.Jt(R)-$t.Jt(P)))})),$t.M3((()=>($t.Jt(j),$t.Jt(s))),(()=>{$t.hZ(Y,n($t.Jt(j),!1)),$t.hZ(H,l($t.Jt(s),$t.Jt(j)))})),$t.M3((()=>$t.iT(x())),(()=>{$t.hZ(h,!!x().states.default.transcript)})),$t.M3((()=>o()),(()=>{$t.hZ(m,!o())})),$t.M3((()=>(o(),$t.iT(x()))),(()=>{$t.hZ(u,o()?.isPanelOpenForItem(x().id))})),$t.M3((()=>(o(),$t.Jt(u),$t.Jt(s))),(()=>{$t.hZ(g,o()?$t.Jt(u)?$t.Jt(s).audioHideTranscript:$t.Jt(s).audioShowTranscript:"Preview in lesson to view transcript")})),$t.iq(),$t.Ts();var W=Zc(),Q=$t.jf(W);$t.Jk(Q,"aria-hidden",!1),$t.Jk(Q,"tabindex",0);var K=$t.jf(Q);$t.Jk(K,"tabindex",0);var ee=$t.jf(K);const te=$t.Xd((()=>$t.Jt(Z)?"arc-play":"arc-pause"));Lc(ee,{size:"14px",get icon(){return $t.Jt(te)}}),$t.cL(K),$t.Lc(K,(e=>$t.hZ(A,e)),(()=>$t.Jt(A)));var ae=$t.AD(K,2),re=$t.jf(ae);$t.R0(re),$t.Jk(re,"min",0),$t.Lc(re,(e=>$t.hZ(D,e)),(()=>$t.Jt(D)));var ie=$t.AD(re,2);$t.Lc(ie,(e=>$t.hZ(V,e)),(()=>$t.Jt(V))),$t.cL(ae);var oe=$t.AD(ae,2),ne=$t.jf(oe,!0);$t.cL(oe),$t.cL(Q);var le=$t.AD(Q,2);$t.Lc(le,(e=>$t.hZ(y,e)),(()=>$t.Jt(y)));var se=$t.AD(le,2),ce=e=>{var t=Rc(),a=$t.es(t),r=$t.jf(a);!function(e,t){$t.VC(t,!1),$t.kZ(e,Dc);let a=$t._w(t,"id",24,ic),r=$t._w(t,"position",8,"s"),i=$t._w(t,"disabled",8,!1),o=$t._w(t,"children",8);$t.Ts(),function(e,t){$t.VC(t,!1),$t.kZ(e,pc);let a,r=$t._w(t,"id",8),i=$t._w(t,"position",8),o=$t._w(t,"disabled",8,!1),n=$t._w(t,"children",8),l=$t._w(t,"inverse",8),s=$t._w(t,"offset",8,6),c=$t._w(t,"pointerEvents",8,!1),d=$t._w(t,"styleVariant",8),p=$t.zg(),h=$t.zg(!1);(0,Ws.onMount)((()=>{const e=$t.Jt(p).closest(".mon-tooltip-anchor");if(e){const t={passive:!0},r=[Nd("mouseenter",e,(()=>{$t.hZ(h,!0)}),t),Nd("mouseleave",e,(()=>{$t.hZ(h,!1)}),t)];return a=e,()=>{for(const e of r)e()}}}));let m=$t.zg("top"),u=$t.zg(),g=$t.zg(),f=$t.zg();$t.Ts();var v=dc(),S=$t.es(v);$t.Lc(S,(e=>$t.hZ(p,e)),(()=>$t.Jt(p)));var I=$t.AD(S,2),b=e=>{var t=cc(),p=$t.jf(t),h=e=>{var t=sc(),a=$t.jf(t),r=$t.jf(a);$t.cL(a),$t.cL(t),$t.vN((()=>$t.Jk(r,"d",$t.Jt(f)))),$t.BC(e,t)};$t.if(p,(e=>{c()&&$t.Jt(f)&&e(h)}));var v=$t.AD(p,2),S=$t.jf(v);let I;var b=$t.jf(S),x=$t.jf(b),w=$t.jf(x);$t.cL(x);var y=$t.AD(x);$t.cL(b),$t.cL(S),$t.cL(v);var k=$t.AD(v,2);$t.UA(k,n),$t.cL(t),$t.XI(t,(e=>(e=>{const t=e.querySelector(".arrow");Kd(e,Wd.Tooltip);const r=(0,Rl.ll)(a,e,(async function(){const{x:r,y:o,placement:n,middlewareData:l}=await(0,Rl.rD)(a,e,{middleware:[(0,Rl.cY)(s()),(0,Rl.UU)({mainAxis:!0,crossAxis:!1}),(0,Rl.BN)(),(0,Rl.UE)({element:t,padding:8}),c()?lc():null],strategy:"fixed",placement:oc[i()]});if($t.hZ(m,n),e.style.left=r+"px",e.style.top=o+"px",l.arrow){const{x:e,y:t}=l.arrow;$t.hZ(u,e),$t.hZ(g,t)}$t.hZ(f,l.travelBoxes?.path)}),{animationFrame:!0});return{destroy(){r(),ep(e)}}})?.(e))),$t.vN((()=>{$t.Jk(t,"data-pointer-events",c()?"":void 0),$t.Jk(t,"data-inverse",l()?"":void 0),$t.Jk(t,"aria-hidden",o()||null),$t.Jk(t,"id",r()),$t.Jk(t,"data-placement",$t.Jt(m)),$t.Jk(v,"data-variant",d()),I=$t.hg(S,"",I,{left:$t.Jt(u)&&`${$t.Jt(u)}px`,top:$t.Jt(g)&&`${$t.Jt(g)}px`}),$t.Jk(w,"id",`mon-popover-shadow-${r()??""}`),$t.Jk(y,"data-filter",`url(#mon-popover-shadow-${r()??""})`)})),$t.kY(3,t,(()=>nc)),$t.BC(e,t)};$t.if(I,(e=>{!o()&&$t.Jt(h)&&e(b)})),$t.BC(e,v),$t.uY()}(e,{get id(){return a()},get position(){return r()},get disabled(){return i()},inverse:!0,styleVariant:"tooltip",children:(e,t)=>{var a=Ac(),r=$t.jf(a);$t.UA(r,o),$t.cL(a),$t.BC(e,a)},$$slots:{default:!0}}),$t.uY()}(r,{position:"n",children:(e,t)=>{$t.K2();var a=$t.NH();$t.vN((()=>$t.j(a,$t.Jt(g)))),$t.BC(e,a)},$$slots:{default:!0}}),function(e,t){$t.VC(t,!1);const a=$t.zg(),r=e=>{var t=ls(),a=$t.es(t),r=$t.jf(a);$t.UA(r,v),$t.cL(a);var i=$t.AD(a,2),n=e=>{var t=ns();$t.BC(e,t)};$t.if(i,(e=>{o()&&e(n)})),$t.BC(e,t)};let i=$t._w(t,"isActive",8,void 0),o=$t._w(t,"isProcessing",8,void 0),n=$t._w(t,"layout",8,void 0),l=$t._w(t,"shape",8,void 0),s=$t._w(t,"size",8,"lg"),c=$t._w(t,"variant",8,"primary"),d=$t._w(t,"disabled",8,!1),p=$t._w(t,"href",8,void 0),h=$t._w(t,"type",8,"button"),m=$t._w(t,"ariaLabel",8,void 0),u=$t._w(t,"popovertarget",8,void 0),g=$t._w(t,"target",8,void 0),f=$t._w(t,"rel",8,void 0),v=$t._w(t,"children",8),S=$t._w(t,"buttonRef",12,null);$t.M3((()=>($t.iT(o()),$t.iT(d()))),(()=>{$t.hZ(a,o()||d())})),$t.iq(),$t.Ts();var I=$t.Im(),b=$t.es(I),x=e=>{var d=ss(),h=$t.jf(d);r(h),$t.cL(d),$t.Lc(d,(e=>S(e)),(()=>S())),$t.XI(d,(e=>os?.(e))),$t.QZ((()=>$t.f0("click",d,(function(e){$t.Ib.call(this,t,e)})))),$t.QZ((()=>$t.f0("focusin",d,(function(e){$t.Ib.call(this,t,e)})))),$t.QZ((()=>$t.f0("focusout",d,(function(e){$t.Ib.call(this,t,e)})))),$t.vN((()=>{$t.Jk(d,"href",p()),$t.Jk(d,"data-variant",c()),$t.Jk(d,"data-layout",n()),$t.Jk(d,"data-shape",l()),$t.Jk(d,"data-size",s()),$t.Jk(d,"data-is-active",i()||null),$t.Jk(d,"data-is-processing",o()||null),$t.Jk(d,"aria-disabled",$t.Jt(a)),$t.Jk(d,"aria-label",m()),$t.Jk(d,"target",g()),$t.Jk(d,"rel",f())})),$t.BC(e,d)},w=e=>{var d=cs(),p=$t.jf(d);r(p),$t.cL(d),$t.Lc(d,(e=>S(e)),(()=>S())),$t.XI(d,(e=>os?.(e))),$t.QZ((()=>$t.f0("click",d,(function(e){$t.Ib.call(this,t,e)})))),$t.QZ((()=>$t.f0("focusin",d,(function(e){$t.Ib.call(this,t,e)})))),$t.QZ((()=>$t.f0("focusout",d,(function(e){$t.Ib.call(this,t,e)})))),$t.vN((()=>{$t.Jk(d,"type",h()),$t.Jk(d,"data-variant",c()),$t.Jk(d,"data-layout",n()),$t.Jk(d,"data-shape",l()),$t.Jk(d,"data-size",s()),$t.Jk(d,"data-is-active",i()||null),$t.Jk(d,"data-is-processing",o()||null),d.disabled=$t.Jt(a),$t.Jk(d,"aria-disabled",$t.Jt(a)),$t.Jk(d,"aria-label",m()),$t.Jk(d,"popovertarget",u())})),$t.BC(e,d)};$t.if(b,(e=>{p()?e(x):e(w,!1)})),$t.BC(e,I),$t.uY()}($t.AD(r,2),{variant:"tertiary",get ariaLabel(){return $t.Jt(g)},size:"md",layout:"icon",shape:"square",get disabled(){return $t.Jt(m)},get buttonRef(){return $t.Jt(F)},set buttonRef(e){$t.hZ(F,e)},$$events:{click:X,focusin:q,focusout:N},children:(e,t)=>{Lc(e,{size:"14px",icon:"arc-transcription"})},$$slots:{default:!0},$$legacy:!0}),$t.cL(a);var i=$t.AD(a,2),o=e=>{var t=Pc();$t.Lc(t,(e=>$t.hZ(J,e)),(()=>$t.Jt(J))),$t.f0("focusin",t,U),$t.BC(e,t)};$t.if(i,(e=>{$t.Jt(u)&&$t.Jt(O)&&e(o)})),$t.BC(e,t)};$t.if(se,(e=>{$t.Jt(h)&&e(ce)})),$t.cL(W),$t.vN((e=>{$t.Jk(Q,"aria-label",L()||$t.Jt(p)),$t.Jk(K,"aria-label",$t.Jt(Z)?$t.Jt(c):$t.Jt(d)),$t.Jk(re,"aria-valuetext",e),$t.Jk(re,"max",$t.Jt(R)||void 0),$t.Jk(oe,"aria-label",$t.Jt(H)),$t.j(ne,$t.Jt(Y)),$t.Jk(le,"src",w())}),[()=>l($t.Jt(s),Number($t.Jt(z)))],$t.Xd),$t.f0("click",K,_),$t.oJ(re,(()=>$t.Jt(z)),(e=>$t.hZ(z,e))),$t.f0("input",re,(()=>{$||($=!0),$t.Jt(V).style.setProperty("--slider-progress-percent",Number($t.Jt(z))/$t.Jt(R)*100+"%")})),$t.f0("change",re,(e=>{$&&($=!1);const t=Number(e.currentTarget?.value);$t.hZ(P,t)})),$t.f0("keydown",Q,(e=>{const t=e=>{e.preventDefault(),e.stopPropagation(),G(5)},a=e=>{e.preventDefault(),e.stopPropagation(),G(-5)};e.target===$t.Jt(A)||e.target===$t.Jt(D)?("Enter"===e.key||" "===e.key?_(e):e.stopPropagation(),e.target===$t.Jt(D)&&("ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"===e.key||"ArrowDown"===e.key?a(e):e.stopPropagation())):"Enter"===e.key||" "===e.key?_(e):"ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||a(e)})),$t.M$(le,(()=>$t.Jt(P)),(e=>$t.hZ(P,e))),$t.IY("duration","durationchange",le,(e=>$t.hZ(R,e))),$t.Ej(le,(()=>$t.Jt(Z)),(e=>$t.hZ(Z,e))),$t.f0("timeupdate",le,(e=>{const t=e.target,{currentTime:a}=t;$||$t.hZ(z,`${a}`)})),$t.f0("loadedmetadata",le,(e=>{const t=e.target;(t.duration===1/0||isNaN(t.duration))&&(t.currentTime=1e101,t.ontimeupdate=()=>{t.ontimeupdate=null,t.currentTime=0})})),$t.f0("ended",le,(function(...e){T()?.apply(this,e)})),$t.f0("pause",le,(function(...e){C()?.apply(this,e)})),$t.f0("play",le,(e=>{B()?.play(x().id),k()(e),o()&&o().updateTranscript({itemId:x().id,transcript:x().states.default.transcript})})),$t.BC(e,W),$t.Ek(t,"allowTabNavigation",I);var de=$t.uY({allowTabNavigation:I});return r(),de}var jc=$t.vs('<div class="mon-audio-wrapper svelte-1req34n"><!></div>');const Yc={hash:"svelte-1req34n",code:".mon-audio-wrapper.svelte-1req34n {align-items:center;display:flex;inset:0;position:absolute;}"};var Hc=$t.vs('<div class="mon-item-children svelte-ewdzh7"></div>');const Ec={hash:"svelte-ewdzh7",code:".mon-item-children.svelte-ewdzh7 {isolation:isolate;}"};var Gc=$t.Dn('<path class="border svelte-1b0340t"></path>'),Xc=$t.Dn("<g></g>");const qc={hash:"svelte-1b0340t",code:".border.svelte-1b0340t {fill:none;stroke-linecap:round;}"};const Nc=.5,Uc=1;var Wc=$t.Dn('<filter x="0" y="0" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha"></feGaussianBlur><feOffset result="mask"></feOffset><feFlood result="color"></feFlood><feComposite operator="in" in="color" in2="mask"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>'),Qc=$t.Dn('<rect class="fill-color svelte-s28lkx" width="100%" height="100%"></rect>');const Kc={hash:"svelte-s28lkx",code:".fill-color.svelte-s28lkx {stroke:none;}"};function ed(e,t){$t.VC(t,!1),$t.kZ(e,Kc);let a=$t._w(t,"fill",8);$t.Ts();var r=$t.Im(),i=$t.es(r),o=e=>{var t=Qc();$t.vN((()=>{$t.Jk(t,"fill",a().color),$t.Jk(t,"opacity",a().opacity)})),$t.BC(e,t)};$t.if(i,(e=>{a().color&&e(o)})),$t.BC(e,r),$t.uY()}var td=$t.Dn('<image class="fill-image" preserveAspectRatio="none"></image>');let ad=0;const rd=Math.PI/180,{cos:id,sin:od,abs:nd,sqrt:ld}=Math,sd=8,cd=sd-.5,dd=1/(2*sd);var pd=$t.Dn("<stop></stop>"),hd=$t.Dn('<defs><linearGradient color-interpolation="linearRGB"></linearGradient></defs><rect></rect>',1);let md=0;const ud={type:"rectangle"};function gd(e){return e?.applied?e:void 0}function fd(e){return e?.applied?e:void 0}var vd=$t.Dn("<path></path>"),Sd=$t.Dn("<g><!></g>"),Id=$t.Dn("<g><!></g>"),bd=$t.vs('<div class="backdrop-wrapper svelte-faya9i" role="presentation"><svg class="mon-item-backdrop svelte-faya9i" preserveAspectRatio="none"><defs><clipPath></clipPath><!></defs><g><g><g><!><!><!><rect></rect></g><!></g></g></svg></div>');const xd={hash:"svelte-faya9i",code:".backdrop-wrapper.svelte-faya9i {position:absolute;}.mon-item-backdrop.svelte-faya9i {display:block;width:100%;height:100%;}.mon-item-mouse-trigger.svelte-faya9i {fill:none;}.mon-item-mouse-trigger.--visible.svelte-faya9i {pointer-events:all;}.mon-item-mouse-trigger.--clickable.svelte-faya9i {cursor:pointer;}"};function wd(e,t){$t.VC(t,!1),$t.kZ(e,xd);const a=$t.zg(),r=$t.zg(),i=$t.zg(),o=$t.zg();let n=$t._w(t,"item",8),l=$t._w(t,"stateId",8),s=$t._w(t,"visible",8),c=$t._w(t,"clickable",8,!1),d=$t.zg(),p=$t.zg(),h=$t.zg(ud),m=$t.zg(),u=$t.zg(),g=$t.zg(),f=$t.zg(),v=$t.zg(),S=$t.zg(),I=$t.zg(),b=$t.zg(),x=$t.zg(),w=$t.zg(),y=$t.zg(),k=$t.zg();const C="mon-item-backdrop-clip-"+md++,T="mon-item-backdrop-shadow-filter-"+md++;$t.M3((()=>$t.iT(n())),(()=>{$t.hZ(a,n().states.default)})),$t.M3((()=>($t.iT(n()),$t.iT(l()))),(()=>{$t.hZ(r,n().states[l()])})),$t.M3((()=>($t.Jt(r),$t.Jt(a),$t.iT(n()),$t.Jt(v))),(()=>{if($t.hZ(d,$t.Jt(r).width??$t.Jt(a).width),$t.hZ(p,$t.Jt(r).height??$t.Jt(a).height),"image"===n().type){const e=$t.Jt(r),t=$t.Jt(a);$t.hZ(h,e.shapeDef??t.shapeDef),$t.hZ(v,fd(e.border??t.border)),$t.hZ(u,e.fill??t.fill),$t.hZ(g,e.overlay??t.overlay),$t.hZ(f,gd(e.dropShadow??t.dropShadow)),$t.hZ(S,e.altText??t.altText)}else if("shape"===n().type){const e=$t.Jt(r),t=$t.Jt(a);$t.hZ(h,e.shapeDef??t.shapeDef),$t.hZ(v,fd(e.border??t.border)),$t.hZ(m,e.fill??t.fill),$t.hZ(g,e.overlay??t.overlay),$t.hZ(f,gd(e.dropShadow??t.dropShadow)),$t.hZ(S,e.altText??t.altText)}else if("line"===n().type){const e=$t.Jt(r),t=$t.Jt(a);$t.hZ(h,e.shapeDef??t.shapeDef),$t.hZ(v,fd(e.border??t.border)),$t.hZ(m,$t.Jt(v)?{opacity:$t.Jt(v).opacity,color:$t.Jt(v).color}:{opacity:1,color:"black"}),$t.hZ(f,gd(e.dropShadow??t.dropShadow)),$t.hZ(S,e.altText??t.altText)}else if("group"===n().type){const e=$t.Jt(r),t=$t.Jt(a);$t.hZ(v,fd(e.border??t.border)),$t.hZ(m,e.fill??t.fill),$t.hZ(g,e.overlay??t.overlay)}})),$t.M3((()=>($t.Jt(d),$t.Jt(p),$t.Jt(v))),(()=>{$t.hZ(i,{width:$t.Jt(d),height:$t.Jt(p),borderWidth:$t.Jt(v)?.width??0})})),$t.M3((()=>($t.Jt(I),$t.Jt(d),$t.Jt(b),$t.Jt(p),$t.Jt(x),$t.Jt(w),$t.Jt(y),$t.Jt(k),$t.Jt(h),$t.Jt(i),$t.Jt(v),$t.Jt(f),Uc)),(()=>{$t.hZ(I,$t.Jt(d)),$t.hZ(b,$t.Jt(p)),$t.hZ(x,0),$t.hZ(w,0),$t.hZ(y,0),$t.hZ(k,0);{const{width:e,height:t}=function(e,t){const a=Bt.get(e.type);return a.extraDrawSpace?.(t)??Lt}($t.Jt(h),$t.Jt(i));$t.hZ(I,$t.Jt(I)+e),$t.hZ(b,$t.Jt(b)+t),$t.hZ(x,$t.Jt(x)-.5*e),$t.hZ(w,$t.Jt(w)-.5*t),$t.hZ(y,$t.Jt(y)-.5*e),$t.hZ(k,$t.Jt(k)-.5*t)}let e=0;if($t.Jt(v)&&(e+=Math.ceil(2*$t.Jt(v).width)),$t.Jt(f)){e+=$t.Jt(f).blur*Uc;const{offset:{x:t,y:a}}=$t.Jt(f);t<0?($t.hZ(I,$t.Jt(I)-t),$t.hZ(x,$t.Jt(x)+t)):($t.hZ(I,$t.Jt(I)+t),$t.hZ(y,$t.Jt(y)-t)),a<0?($t.hZ(b,$t.Jt(b)-a),$t.hZ(w,$t.Jt(w)+a)):($t.hZ(b,$t.Jt(b)+a),$t.hZ(k,$t.Jt(k)-a))}$t.hZ(I,$t.Jt(I)+2*e),$t.hZ(b,$t.Jt(b)+2*e),$t.hZ(x,$t.Jt(x)-e),$t.hZ(w,$t.Jt(w)-e),$t.hZ(y,$t.Jt(y)-e),$t.hZ(k,$t.Jt(k)-e)})),$t.M3((()=>($t.Jt(h),$t.Jt(i))),(()=>{var e,t;$t.hZ(o,(e=$t.Jt(h),t=$t.Jt(i),Bt.get(e.type).paths(e,t)))})),$t.iq(),$t.Ts();var B=bd();let M;var L=$t.jf(B),A=$t.jf(L),D=$t.jf(A);$t.Jk(D,"id",C),$t.__(D,5,(()=>$t.Jt(o)),(({d:e,fill:t})=>e),((e,t)=>{var a=$t.Im(),r=$t.es(a),i=e=>{var a=vd();$t.vN((()=>$t.Jk(a,"d",$t.Jt(t).d))),$t.BC(e,a)};$t.if(r,(e=>{$t.Jt(t).fill&&e(i)})),$t.BC(e,a)})),$t.cL(D);var F=$t.AD(D),z=e=>{!function(e,t){$t.VC(t,!1);let a=$t._w(t,"id",8),r=$t._w(t,"dropShadow",8),i=$t._w(t,"svgWidth",8),o=$t._w(t,"svgHeight",8);$t.Ts();var n=Wc(),l=$t.jf(n),s=$t.AD(l),c=$t.AD(s);$t.K2(2),$t.cL(n),$t.vN((()=>{$t.Jk(n,"id",a()),$t.Jk(n,"width",i()),$t.Jk(n,"height",o()),$t.Jk(l,"stdDeviation",r().blur*Nc),$t.Jk(s,"dx",r().offset.x),$t.Jk(s,"dy",r().offset.y),$t.Jk(c,"flood-color",r().color),$t.Jk(c,"flood-opacity",r().opacity)})),$t.BC(e,n),$t.uY()}(e,{id:T,get dropShadow(){return $t.Jt(f)},get svgWidth(){return $t.Jt(I)},get svgHeight(){return $t.Jt(b)}})};$t.if(F,(e=>{$t.Jt(f)&&e(z)})),$t.cL(A);var V=$t.AD(A),J=$t.jf(V),$=$t.jf(J);$t.Jk($,"clip-path",`url(#${C??""})`);var P=$t.jf($),R=e=>{var t=$t.Im(),a=$t.es(t),r=e=>{var t=Sd();ed($t.jf(t),{get fill(){return $t.Jt(m)}}),$t.cL(t),$t.vN((()=>$t.Jk(t,"transform",`translate(${$t.Jt(x)??""} ${$t.Jt(w)??""})`))),$t.BC(e,t)},i=e=>{!function(e,t){$t.VC(t,!1);const a=$t.zg(),r=$t.zg(),i=$t.zg(),o=$t.zg(),n=$t.zg(),l=$t.zg(),s=$t.zg(),c=$t.zg(),d=$t.zg(),p=$t.zg(),h=$t.zg(),m=$t.zg();let u=$t._w(t,"width",8),g=$t._w(t,"height",8),f=$t._w(t,"fill",8);const v="mon-fill-gradient="+ad++;$t.M3((()=>$t.iT(f())),(()=>{$t.hZ(a,(f().angle-90)*rd)})),$t.M3((()=>$t.Jt(a)),(()=>{$t.hZ(r,id($t.Jt(a)))})),$t.M3((()=>$t.Jt(a)),(()=>{$t.hZ(i,od($t.Jt(a)))})),$t.M3((()=>($t.Jt(o),$t.Jt(n),$t.Jt(r),$t.iT(u()),$t.Jt(i),$t.iT(g()))),(()=>{var e;e=function({x:e,y:t}){const a=1/ld(e*e+t*t);return{x:e*a,y:t*a}}({x:$t.Jt(r)*u(),y:$t.Jt(i)*g()}),$t.hZ(o,e.x),$t.hZ(n,e.y)})),$t.M3((()=>($t.Jt(o),$t.Jt(n))),(()=>{$t.hZ(l,nd($t.Jt(o))+nd($t.Jt(n)))})),$t.M3((()=>($t.Jt(o),$t.Jt(l))),(()=>{$t.hZ(s,$t.Jt(o)*sd*$t.Jt(l))})),$t.M3((()=>($t.Jt(n),$t.Jt(l))),(()=>{$t.hZ(c,$t.Jt(n)*sd*$t.Jt(l))})),$t.M3((()=>$t.Jt(s)),(()=>{$t.hZ(d,.5-$t.Jt(s))})),$t.M3((()=>$t.Jt(c)),(()=>{$t.hZ(p,.5-$t.Jt(c))})),$t.M3((()=>$t.Jt(s)),(()=>{$t.hZ(h,.5+$t.Jt(s))})),$t.M3((()=>$t.Jt(c)),(()=>{$t.hZ(m,.5+$t.Jt(c))})),$t.iq(),$t.Ts();var S=hd(),I=$t.es(S),b=$t.jf(I);$t.Jk(b,"id",v),$t.__(b,5,(()=>f().stops),$t.Pe,((e,t)=>{var a=pd();$t.vN((()=>{$t.Jk(a,"offset",($t.Jt(t).t+cd)*dd),$t.Jk(a,"stop-color",$t.Jt(t).color),$t.Jk(a,"stop-opacity",$t.Jt(t).opacity)})),$t.BC(e,a)})),$t.cL(b),$t.cL(I);var x=$t.AD(I);$t.Jk(x,"fill",`url(#${v??""})`),$t.vN((()=>{$t.Jk(b,"x1",$t.Jt(d)),$t.Jk(b,"y1",$t.Jt(p)),$t.Jk(b,"x2",$t.Jt(h)),$t.Jk(b,"y2",$t.Jt(m)),$t.Jk(x,"width",u()),$t.Jk(x,"height",g())})),$t.BC(e,S),$t.uY()}(e,{get width(){return $t.Jt(d)},get height(){return $t.Jt(p)},get fill(){return $t.Jt(m)}})};$t.if(a,(e=>{null==$t.Jt(m).angle?e(r):e(i,!1)})),$t.BC(e,t)};$t.if(P,(e=>{$t.Jt(m)&&e(R)}));var Z=$t.AD(P),O=e=>{!function(e,t){$t.VC(t,!1);const a=$t.zg();let r=$t._w(t,"width",8),i=$t._w(t,"height",8),o=$t._w(t,"assets",8,void 0),n=$t._w(t,"fill",8);const l=lp();$t.M3((()=>($t.iT(n()),$t.iT(o()))),(()=>{$t.hZ(a,n().assetId&&o()?.[n().assetId]?l.resolvePath(o()?.[n().assetId].path):null)})),$t.iq(),$t.Ts();var s=$t.Im(),c=$t.es(s),d=e=>{var t=td();const o=$t.Xd((()=>{const{crop:e}=n();return{crop:e}})),l=$t.Xd((()=>$t.Jt(o).crop.width*r())),s=$t.Xd((()=>$t.Jt(o).crop.height*i())),c=$t.Xd((()=>.5*(r()-$t.Jt(l))+r()*$t.Jt(o).crop.left)),d=$t.Xd((()=>.5*(i()-$t.Jt(s))+i()*$t.Jt(o).crop.top));let p;$t.vN((()=>{$t.Jk(t,"href",$t.Jt(a)),$t.Jk(t,"width",$t.Jt(l)),$t.Jk(t,"height",$t.Jt(s)),$t.Jk(t,"x",$t.Jt(c)),$t.Jk(t,"y",$t.Jt(d)),p=$t.hg(t,"",p,{opacity:n().opacity})})),$t.BC(e,t)};$t.if(c,(e=>{$t.Jt(a)&&e(d)})),$t.BC(e,s),$t.uY()}(e,{get width(){return $t.Jt(d)},get height(){return $t.Jt(p)},get assets(){return n().assets},get fill(){return $t.Jt(u)}})};$t.if(Z,(e=>{$t.Jt(u)&&e(O)}));var _=$t.AD(Z),j=e=>{var t=Id();ed($t.jf(t),{get fill(){return $t.Jt(g)}}),$t.cL(t),$t.vN((()=>$t.Jk(t,"transform",`translate(${$t.Jt(x)??""} ${$t.Jt(w)??""})`))),$t.BC(e,t)};$t.if(_,(e=>{$t.Jt(g)&&e(j)}));var Y=$t.AD(_);let H;$t.cL($);var E=$t.AD($),G=e=>{const t=$t.Xd((()=>"line"===n().type?"round":"miter"));!function(e,t){$t.VC(t,!1),$t.kZ(e,qc);const a=$t.zg();let r=$t._w(t,"border",8),i=$t._w(t,"paths",8),o=$t._w(t,"strokeLinejoin",8);$t.M3((()=>$t.iT(r())),(()=>{$t.hZ(a,function(e){if(!e.applied)return;const t=e.width;return"dashed"===e.style?`${2*t} ${2*t}`:"dotted"===e.style?"0 "+2*t:void 0}(r()))})),$t.iq(),$t.Ts();var n=Xc();let l;$t.__(n,5,i,(({d:e,dash:t})=>e),((e,t)=>{var r=Gc();$t.vN((()=>{$t.Jk(r,"stroke-dasharray",$t.Jt(t).dash?$t.Jt(a):void 0),$t.Jk(r,"d",$t.Jt(t).d)})),$t.BC(e,r)})),$t.cL(n),$t.vN((()=>{$t.Jk(n,"stroke-width",r().width),$t.Jk(n,"stroke",r().color),l=$t.hg(n,"",l,{opacity:r().opacity,"stroke-linejoin":o()})})),$t.BC(e,n),$t.uY()}(e,{get border(){return $t.Jt(v)},get paths(){return $t.Jt(o)},get strokeLinejoin(){return $t.Jt(t)}})};$t.if(E,(e=>{$t.Jt(v)&&e(G)})),$t.cL(J),$t.cL(V),$t.cL(L),$t.cL(B),$t.vN((e=>{M=$t.hg(B,"",M,{left:`${$t.Jt(x)??""}px`,top:`${$t.Jt(w)??""}px`,right:`${$t.Jt(y)??""}px`,bottom:`${$t.Jt(k)??""}px`}),$t.Jk(L,"viewBox",`0 0 ${$t.Jt(I)??""} ${$t.Jt(b)??""}`),$t.Jk(L,"role",$t.Jt(S)?"img":"presentation"),$t.Jk(L,"aria-label",$t.Jt(S)||void 0),$t.Jk(L,"aria-hidden",!$t.Jt(S)),$t.Jk(V,"filter",$t.Jt(f)?`url(#${T})`:void 0),$t.Jk(J,"transform",`translate(${-$t.Jt(x)} ${-$t.Jt(w)})`),H=$t.ys(Y,0,"mon-item-mouse-trigger svelte-faya9i",null,H,e),$t.Jk(Y,"width",$t.Jt(d)),$t.Jk(Y,"height",$t.Jt(p)),$t.Jk(Y,"role",c()?"button":void 0),$t.Jk(Y,"tabindex",c()?0:void 0)}),[()=>({"--visible":s(),"--clickable":c()})],$t.Xd),$t.BC(e,B),$t.uY()}var yd=$t.vs('<div role="presentation"><!></div>');const kd={hash:"svelte-d0xz7b",code:".mon-item-transform.svelte-d0xz7b {position:absolute;\n    /*\n    This element defines a virtual reference box for the item, but the actual physical\n    extents of the item may vary.  For non-rectangle ShapeItems, the clickable area of\n    the item can be much smaller.  For GroupItems, the reference box itself is generally\n    not clickable; only the children within.  So this element has to be non-interactable,\n    and children of ItemTransform that wish to be interactable are expected to override\n    this within the child components.\n    */pointer-events:none;}.mon-item-transform.--smooth-transitions.svelte-d0xz7b {transition:all 100ms ease;}"},Cd=(e,t)=>{const a=e.querySelector("[data-scrolling-element]"),r=e.querySelector("[data-scrollbar-element]"),i=e.querySelector("[data-offset-height-gauge]"),o=e.querySelector("[data-scroll-height-gauge]");if(!(a&&r&&i&&o))return void console.error("LearnerScrollable elements missing");let n={scrollStart:0,offsetSize:0,scrollSize:0},l=!1,s=!1;const c=new ResizeObserver((()=>{s||l||n.offsetSize===a.offsetHeight&&n.scrollSize===a.scrollHeight||d()}));async function d(){l=!0,c.disconnect(),r.removeAttribute("data-overflow"),await(0,Ws.tick)();let e=a.scrollTop,d=a.offsetHeight,p=a.scrollHeight;p-2>d&&(r.setAttribute("data-overflow",""),await(0,Ws.tick)(),e=a.scrollTop,d=a.offsetHeight,p=a.scrollHeight),n.scrollStart===e&&n.offsetSize===d&&n.scrollSize===p||(n={scrollStart:e,offsetSize:d,scrollSize:p},t(n)),await async function(e){return new Promise((e=>setTimeout(e,0)))}(),l=!1,s||(c.observe(i),c.observe(o))}return d(),{destroy(){s=!0,c.disconnect()}}};var Td=$t.vs('<div class="learner-scrollable svelte-1wcu64k"><div class="height-gauge svelte-1wcu64k" data-offset-height-gauge=""></div> <div class="learner-scrollable-scrolling-area svelte-1wcu64k" data-scrolling-element=""><div class="learner-scrollable-child-content svelte-1wcu64k"><div class="height-gauge svelte-1wcu64k" data-scroll-height-gauge=""></div> <!></div></div> <div class="learner-scrollable-scrollbar svelte-1wcu64k" data-scrollbar-element="" aria-hidden="true"><div class="handle svelte-1wcu64k"><div class="handle-shaded svelte-1wcu64k"></div></div> <input tabindex="-1" type="range" class="svelte-1wcu64k"></div></div>');const Bd={hash:"svelte-1wcu64k",code:".learner-scrollable.svelte-1wcu64k {position:absolute;inset:0;display:flex;.height-gauge:where(.svelte-1wcu64k) {position:absolute;inset:0 auto;width:0;pointer-events:none;}.learner-scrollable-scrolling-area:where(.svelte-1wcu64k) {flex:1 0 0;overflow-y:auto;overflow-x:visible;scrollbar-width:none;.learner-scrollable-child-content:where(.svelte-1wcu64k) {position:relative;display:flex;flex-direction:column;min-height:100%;justify-content:var(--text-item-vertical-align);overflow-anchor:none;}}.learner-scrollable-scrollbar:where(.svelte-1wcu64k) {position:relative;flex:0 0 12px;display:none;width:12px;margin-left:4px;&[data-overflow] {display:block;}writing-mode:vertical-lr;direction:ltr;border-radius:6px;background-color:var(--arc-color-alpha-white-70);box-shadow:inset 0 0 0 1px rgba(0, 0, 0, 0.1);&:hover {background-color:var(--arc-color-alpha-white-80);}.handle:where(.svelte-1wcu64k) {pointer-events:none;position:absolute;inset-block:0;inline-size:calc(var(--handleSize) * 100%);inset-inline-start:calc(var(--handleStart) * 100%);.handle-shaded:where(.svelte-1wcu64k) {position:absolute;inset:2px;border-radius:4px;background-color:var(--arc-color-neutral-700);.learner-scrollable-scrollbar:where(.svelte-1wcu64k):hover & {background-color:var(--arc-color-mono-black);}}}input:where(.svelte-1wcu64k) {position:absolute;inset:0 0 0 -4px;opacity:0;margin:0;-webkit-appearance:none;appearance:none;&::-moz-range-thumb {appearance:none;width:0;height:0;}&::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:0;height:0;}}}}\n\n  @media print {\n    /*\n      We're getting strange styling of these scrollbars in Rise's export to PDF feature.\n      This is a shot in the dark to try to fix those.\n    */input.svelte-1wcu64k {display:none;}\n  }"},Md={type:"rectangle"};var Ld=$t.vs('<div class="text-item-clip svelte-wh4ese"><div class="text-item-clip-boundary svelte-wh4ese"><div class="text-item-padding-boundary svelte-wh4ese"><!></div></div></div>');const Ad={hash:"svelte-wh4ese",code:".text-item-clip.svelte-wh4ese {position:absolute;inset:0;}.text-item-clip-boundary.svelte-wh4ese {position:absolute;pointer-events:all;}.text-item-padding-boundary.svelte-wh4ese {position:absolute;}.text-item-padding-boundary[data-vertical-align='top'].svelte-wh4ese {--text-item-vertical-align: start;}.text-item-padding-boundary[data-vertical-align='middle'].svelte-wh4ese {--text-item-vertical-align: center;}.text-item-padding-boundary[data-vertical-align='bottom'].svelte-wh4ese {--text-item-vertical-align: end;}"};function Dd(e,t){$t.VC(t,!1),$t.kZ(e,Ad);const a=$t.zg(),r=$t.zg(),i=$t.zg();let o=$t._w(t,"item",8),n=$t._w(t,"stateId",8),l=$t._w(t,"children",8);$t.M3((()=>($t.iT(o()),$t.iT(n()))),(()=>{$t.hZ(a,Ft(o(),n()))})),$t.M3((()=>($t.iT(o()),$t.Jt(a))),(()=>{var e;$t.hZ(r,(e="shape"===o().type?$t.Jt(a).shapeDef:Md,Bt.get(e.type).textExtents(e)))})),$t.M3((()=>($t.Jt(i),$t.Jt(a))),(()=>{var e;e=$t.Jt(a),$t.hZ(i,e.textPadding)})),$t.iq(),$t.Ts();var s=Ld(),c=$t.jf(s);let d;var p=$t.jf(c);let h;!function(e,t){$t.VC(t,!0),$t.kZ(e,Bd);let a=$t.wk(null),r=$t.wk(0),i=$t.wk(0),o=$t.wk(0);const n=e=>{$t.hZ(r,e.scrollStart,!0),$t.hZ(i,e.offsetSize,!0),$t.hZ(o,e.scrollSize,!0)},l=$t.un((()=>0!==$t.Jt(o)?Math.min($t.Jt(i)/$t.Jt(o),1):1)),s=$t.un((()=>0!==$t.Jt(o)?Math.min(Math.max($t.Jt(r)/$t.Jt(o),0),1-$t.Jt(l)):0));let c=null;var d=Td(),p=$t.AD($t.jf(d),2),h=$t.jf(p),m=$t.AD($t.jf(h),2);$t.UA(m,(()=>t.children)),$t.cL(h),$t.cL(p),$t.Lc(p,(e=>$t.hZ(a,e)),(()=>$t.Jt(a)));var u=$t.AD(p,2);let g;var f=$t.AD($t.jf(u),2);$t.R0(f),$t.cL(u),$t.cL(d),$t.XI(d,((e,t)=>Cd?.(e,t)),(()=>n)),$t.vN((()=>{g=$t.hg(u,"",g,{"--handleSize":$t.Jt(l),"--handleStart":$t.Jt(s)}),$t.Jk(f,"min",0-.5*$t.Jt(i)),$t.Jk(f,"max",$t.Jt(o)-.5*$t.Jt(i)),$t.to(f,$t.Jt(r))})),$t.f0("scroll",p,(e=>{$t.hZ(r,e.currentTarget.scrollTop,!0)}),void 0,!0),$t.f0("change",f,(function(){c=null})),$t.f0("input",f,(function(e){if(!$t.Jt(a))return;const t=e.currentTarget.valueAsNumber;if(null==c){const e=$t.Jt(r)-t;c=Math.abs(e)<.5*$t.Jt(i)?e:0}$t.Jt(a).scrollTop=t+c})),$t.f0("wheel",u,(e=>{$t.Jt(a)&&($t.Jt(a).scrollTop+=e.deltaY,e.preventDefault())})),$t.BC(e,d),$t.uY()}($t.jf(p),{get children(){return l()}}),$t.cL(p),$t.cL(c),$t.cL(s),$t.vN((()=>{d=$t.hg(c,"",d,{left:`calc(${$t.Jt(r).left??""} * 100%)`,top:`calc(${$t.Jt(r).top??""} * 100%)`,width:`calc(${$t.Jt(r).width??""} * 100%)`,height:`calc(${$t.Jt(r).height??""} * 100%)`}),$t.Jk(p,"data-vertical-align",$t.Jt(a).textVerticalAlign),h=$t.hg(p,"",h,{top:`${$t.Jt(i).top??""}px`,left:`${$t.Jt(i).left??""}px`,bottom:`${$t.Jt(i).bottom??""}px`,right:`${$t.Jt(i).right??""}px`})})),$t.BC(e,s),$t.uY()}var Fd=$t.vs('<div class="alt-text svelte-s9v9ex"> </div>'),zd=$t.vs('<div class="content-wrapper svelte-s9v9ex"><!> <div class="tiptap ProseMirror content"></div></div>');const Vd={hash:"svelte-s9v9ex",code:".content-wrapper.svelte-s9v9ex {height:100%;display:flex;pointer-events:auto;position:relative;}.alt-text.svelte-s9v9ex {position:absolute;inset:0;overflow:clip;-webkit-user-select:none;user-select:none;font-size:8px;color:transparent;pointer-events:none;clip-path:inset(50%);}"};var Jd=$t.vs('<button class="video-player__big-play-button svelte-m58po"><!></button>'),$d=$t.vs('<button class="video-player__pip-button svelte-m58po"><!></button>'),Pd=$t.vs('<div aria-live="off" role="group"><div class="video-player__resizer svelte-m58po"><video class="video-player__video svelte-m58po"><source></video></div> <!> <div class="video-player__controls svelte-m58po"><button class="video-player__play-button svelte-m58po" type="button"><!></button> <div class="video-player__seek-bar-wrapper svelte-m58po"><input class="video-player__seek-bar svelte-m58po" type="range"> <div class="video-player__seek-bar-progress svelte-m58po"></div></div> <span class="video-player__time-remaining svelte-m58po"><span class="mon-sr-only"> </span> <span aria-hidden="true">-</span> </span> <!> <button class="video-player__fullscreen-button svelte-m58po"><!></button> <div class="video-player__volume-control svelte-m58po"><button class="video-player__volume-button svelte-m58po"><!></button> <div class="video-player__volume-slider-wrapper svelte-m58po"><input class="video-player__volume-slider svelte-m58po" type="range" min="0" max="1" step="0.01"> <div class="video-player__volume-slider-progress svelte-m58po"></div></div></div></div></div>',2);const Rd={hash:"svelte-m58po",code:".video-player.svelte-m58po {--slider-thumb-size: 10px;--slider-thumb-bg: white;--slider-thumb-border: 1px solid rgb(0 0 0 / 10%);--slider-thumb-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);--slider-track-height: 2px;--slider-track-bg: rgb(255 255 255 / 20%);container-type:inline-size;container-name:video-player;position:relative;pointer-events:initial;width:100%;height:100%;display:flex;justify-content:center;align-items:center;.video-player__resizer:where(.svelte-m58po) {aspect-ratio:var(--aspect-ratio);height:100%;max-width:100%;display:flex;justify-content:center;align-items:center;.video-player__video:where(.svelte-m58po) {aspect-ratio:var(--aspect-ratio);width:100%;max-height:100%;object-fit:fill;}}}.video-player.fullscreen.svelte-m58po .video-player__video:where(.svelte-m58po) {margin:auto 0;}.video-player.touched.svelte-m58po:not(.active):not(.paused) .video-player__controls:where(.svelte-m58po),\n  .video-player.svelte-m58po:not(.touched) .video-player__controls:where(.svelte-m58po) {opacity:0;pointer-events:none;transition:opacity 1s;}.video-player__big-play-button.svelte-m58po {aspect-ratio:1 / 1;background-color:rgb(0 0 0 / 70%);border-radius:0;border-radius:50%;border:none;cursor:pointer;left:50%;margin:0;padding:0;position:absolute;top:50%;transform:translate(-50%, -50%);transition:background-color 0.4s;max-width:98px;width:13%;min-width:48px;color:white;display:flex;align-items:center;justify-content:center;}.video-player.svelte-m58po:hover .video-player__big-play-button:where(.svelte-m58po) {background-color:rgb(0 0 0 / 80%);outline:3px solid white;}.video-player__controls.svelte-m58po {bottom:0;position:absolute;align-items:center;background-color:rgb(0 0 0 / 70%);display:flex;gap:10px;width:100%;height:75px; /* mini = 32px */color:white;padding:0 10px;}.video-player__play-button.svelte-m58po {padding:0 4px;height:100%;}.video-player__play-button.svelte-m58po,\n  .video-player__pip-button.svelte-m58po,\n  .video-player__fullscreen-button.svelte-m58po,\n  .video-player__volume-button.svelte-m58po {display:flex;height:100%;align-items:center;background:none;border:none;cursor:pointer;font-size:15px;color:white;}.video-player__play-button.svelte-m58po:focus svg,\n  .video-player__pip-button.svelte-m58po:focus svg,\n  .video-player__fullscreen-button.svelte-m58po:focus svg,\n  .video-player__volume-button.svelte-m58po:focus svg {filter:drop-shadow(0 0 4px rgb(255 255 255 / 0.8));}.video-player__seek-bar-wrapper.svelte-m58po {position:relative;height:32px;min-width:0;flex:1;display:flex;}.video-player__time-remaining.svelte-m58po {font-size:12px;font-weight:700;min-width:35px;}.video-player__volume-control.svelte-m58po {align-items:center;display:flex;gap:5px;}.video-player__volume-slider-wrapper.svelte-m58po {position:relative;height:32px;min-width:0;width:100px;display:flex;}.video-player__volume-slider.svelte-m58po {width:100%;}.video-player__seek-bar.svelte-m58po,\n  .video-player__volume-slider.svelte-m58po {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;flex:1;height:100%;}.video-player__seek-bar.svelte-m58po::-webkit-slider-thumb,\n  .video-player__volume-slider.svelte-m58po::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-m58po::-webkit-slider-runnable-track,\n  .video-player__volume-slider.svelte-m58po::-webkit-slider-runnable-track {background-color:var(--slider-track-bg);height:var(--slider-track-height);}.video-player__seek-bar.svelte-m58po::-moz-range-thumb,\n  .video-player__volume-slider.svelte-m58po::-moz-range-thumb {appearance:none;\n    /* firefox needs border-box set so the thumb renders at the correct size */box-sizing:border-box;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-m58po::-moz-range-track,\n  .video-player__volume-slider.svelte-m58po::-moz-range-track {background:var(--slider-track-bg);height:var(--slider-track-height);}.video-player__seek-bar-progress.svelte-m58po,\n  .video-player__volume-slider-progress.svelte-m58po {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );height:var(--slider-track-height);position:absolute;inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;width:100%;}\n\n  @container video-player (max-width: 450px) {.video-player__controls.svelte-m58po {height:32px;justify-content:space-around;}.video-player__volume-slider-wrapper.svelte-m58po {width:100%;}.video-player__seek-bar-wrapper.svelte-m58po,\n    .video-player__time-remaining.svelte-m58po,\n    .video-player__pip-button.svelte-m58po {display:none;}\n  }"};var Zd=$t.vs('<div class="mon-video-wrapper svelte-ngn0zs"><!></div>');const Od={hash:"svelte-ngn0zs",code:".mon-video-wrapper.svelte-ngn0zs {align-items:center;display:flex;inset:0;position:absolute;}"};var _d=$t.vs('<div role="presentation"><!> <!></div>');const jd={hash:"svelte-19sv9wq",code:".mon-item.svelte-19sv9wq {position:absolute;inset:0;&.--smooth-transitions {transition:opacity 100ms ease;}&.--hidden {opacity:0;}&.--clip {overflow:clip;}}"};function Yd(e,t){$t.VC(t,!1),$t.kZ(e,jd);const[a,r]=$t.DZ(),i=()=>$t.Hz(C,"$item",a),o=()=>$t.Hz(T,"$stateId",a),s=()=>$t.Hz(M,"$triggersBySourceId",a),c=()=>$t.Hz(k,"$searchTerm",a),d=()=>$t.Hz(B,"$visible",a),p=$t.zg(),h=$t.zg(),m=$t.zg(),u=$t.zg();let g=$t._w(t,"itemId",8),f=$t._w(t,"visualOrder",8),v=$t._w(t,"clip",8,!1),I=$t._w(t,"noTransform",8,!1);const x=lp(),{bindTriggers:w,hideTextContentForId:y,searchTerm:k}=x,C=x.getItem(g()),T=x.getState(g()),B=x.getVisible(g()),M=x.getTriggersBySourceId(),L=ip();function A({event:e}){return"click"===e}$t.M3((()=>(i(),o())),(()=>{$t.hZ(p,i().states[o()].opacity??i().states.default.opacity)})),$t.M3((()=>(s(),i())),(()=>{$t.hZ(h,s().get(i().id)??[])})),$t.M3((()=>$t.Jt(h)),(()=>{$t.hZ(m,$t.Jt(h).some(A))})),$t.M3((()=>(o(),i(),c())),(()=>{$t.hZ(u,o()===i().initialState?c():void 0)})),$t.iq(),$t.Ts(),function(e,t){$t.VC(t,!1),$t.kZ(e,kd);const a=$t.zg(),r=$t.zg(),i=$t.zg(),o=$t.zg(),n=$t.zg(),l=$t.zg(),s=$t.zg(),c=$t.zg(),d=$t.zg();let p=$t._w(t,"item",8),h=$t._w(t,"stateId",8),m=$t._w(t,"zIndex",8,void 0),u=$t._w(t,"noTransform",8,!1);const g=!(p().parentId===p().blockumentId)&&ip();let f=$t.zg(),v=$t.zg();$t.M3((()=>$t.iT(p())),(()=>{$t.hZ(a,p().states.default)})),$t.M3((()=>($t.iT(p()),$t.iT(h()))),(()=>{$t.hZ(r,p().states[h()])})),$t.M3((()=>($t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(i,$t.Jt(r).width??$t.Jt(a).width)})),$t.M3((()=>($t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(o,$t.Jt(r).height??$t.Jt(a).height)})),$t.M3((()=>($t.Jt(a),$t.Jt(r))),(()=>{$t.hZ(n,$t.Jt(a).x+($t.Jt(r).xOffset??0))})),$t.M3((()=>($t.Jt(a),$t.Jt(r))),(()=>{$t.hZ(l,$t.Jt(a).y+($t.Jt(r).yOffset??0))})),$t.M3((()=>($t.Jt(r),$t.Jt(a),$t.Jt(f),$t.Jt(v))),(()=>{const e=$t.Jt(r).rotation??$t.Jt(a).rotation;if(null==$t.Jt(f))$t.hZ(v,e);else if(e!==$t.Jt(f)){let t=e-$t.Jt(f);t>180?t-=360:t<=-180&&(t+=360),$t.hZ(v,$t.Jt(v)+t)}$t.hZ(f,e)})),$t.M3((()=>($t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(s,$t.Jt(r).flipX??$t.Jt(a).flipX)})),$t.M3((()=>($t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(c,$t.Jt(r).flipY??$t.Jt(a).flipY)})),$t.M3((()=>($t.iT(u()),$t.Jt(n),$t.Jt(l),$t.Jt(v),$t.Jt(s),$t.Jt(c))),(()=>{$t.hZ(d,u()?void 0:`translate(${$t.Jt(n)}px, ${$t.Jt(l)}px) rotate(${$t.Jt(v)}deg) scale(${$t.Jt(s)?-1:1}, ${$t.Jt(c)?-1:1})`)})),$t.iq(),$t.Ts();var S=yd();let I;$t.ys(S,1,"mon-item-transform svelte-d0xz7b",null,{},{"--smooth-transitions":g});var b=$t.jf(S);$t.NI(b,t,"default",{},null),$t.cL(S),$t.vN((e=>{$t.Jk(S,"data-item-id",e),I=$t.hg(S,"",I,{width:`${$t.Jt(i)??""}px`,height:`${$t.Jt(o)??""}px`,transform:$t.Jt(d),"z-index":m()})}),[()=>p().id.slice(0,5)],$t.Xd),$t.BC(e,S),$t.uY()}(e,{get item(){return i()},get stateId(){return o()},get zIndex(){return f()},get noTransform(){return I()},children:(e,t)=>{var r=_d();let s,c;var f=$t.jf(r);wd(f,{get item(){return i()},get stateId(){return o()},get visible(){return d()},get clickable(){return $t.Jt(m)}});var I=$t.AD(f,2),k=e=>{!function(e,t){$t.VC(t,!1),$t.kZ(e,Ec);const a=$t.zg();let r=$t._w(t,"item",8),i=$t._w(t,"stateId",8);$t.M3((()=>($t.iT(r()),$t.iT(i()))),(()=>{$t.hZ(a,r().states[i()].altText??r().states.default.altText)})),$t.iq(),$t.Ts();var o=Hc();$t.__(o,5,(()=>r().children),(e=>e.id),((e,t)=>{Yd(e,{get itemId(){return $t.Jt(t).id},get visualOrder(){return $t.Jt(t).visualOrder}})})),$t.cL(o),$t.vN((()=>{$t.Jk(o,"role",$t.Jt(a)?"group":"presentation"),$t.Jk(o,"aria-label",$t.Jt(a))})),$t.BC(e,o),$t.uY()}(e,{get item(){return i()},get stateId(){return o()}})},C=(e,t)=>{var r=e=>{var t=$t.Im(),r=$t.es(t),n=e=>{!function(e,t){$t.VC(t,!1),$t.kZ(e,Vd);const a=$t.zg(),r=$t.zg(),i=$t.zg(),o=$t.zg(),n=$t.zg();let l=$t._w(t,"item",8),s=$t._w(t,"stateId",8),c=$t._w(t,"searchTerm",8),d=$t._w(t,"linkRenderConfig",8);$t.M3((()=>$t.iT(l())),(()=>{$t.hZ(a,l().states.default)})),$t.M3((()=>($t.iT(l()),$t.iT(s()))),(()=>{$t.hZ(r,l().states[s()])})),$t.M3((()=>($t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(i,$t.Jt(r).text?.json??$t.Jt(a).text.json)})),$t.M3((()=>($t.Jt(i),$t.iT(d()),$t.iT(c()))),(()=>{$t.hZ(o,function(e,t,a){if(t?.externalLinksDisabled||a){const r=structuredClone(e);return a&&function(e,t){if(!t)return;const a=new RegExp(b()(t),"gi");!function e(r){const{content:i}=r;if(!i?.length)return;const o=i[0].type;if("text"===o||"hardBreak"===o){let n="";for(const{type:c,text:d}of i)"text"===c&&d?n+=d:"hardBreak"===c&&(n+="\n");const l=[];for(a.lastIndex=0;a.test(n);)l.push({from:a.lastIndex-t.length,to:a.lastIndex});if(!l.length)return;const s=[];for(let p=0,h=0,m=0,u=l.at(m);p<i.length;p+=1){const g=i[p],{text:f,type:v}=g;if("hardBreak"===v){h+=1,s.push(g);continue}if(!f){s.push(g);continue}const S=h;for(h+=f.length;u&&u.to<=S;)m+=1,u=l[m];let I=S;function b(e){if(e>I){const t=structuredClone(g);t.text=n.slice(I,e),s.push(t)}}for(;u;){const{from:x,to:w}=u;if(x<h){const y=Math.max(S,x),k=Math.min(h,w);b(y);const C=structuredClone(g);C.text=n.slice(y,k),re(C),s.push(C),I=k}if(!(w<=h))break;m+=1,u=l[m]}b(h),r.content=s}}else for(const T of i)e(T)}(e)}(r,a),t?.externalLinksDisabled&&oe(t.isExternalLink,r),r}return e}($t.Jt(i),d(),c()))})),$t.M3((()=>($t.iT(l()),$t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(n,"text"===l().type&&($t.Jt(r).altText??$t.Jt(a).altText)||"")})),$t.iq(),$t.Ts();var p=$t.Im(),h=$t.es(p),m=e=>{Dd(e,{get item(){return l()},get stateId(){return s()},children:(e,t)=>{var a=zd(),r=$t.jf(a),i=e=>{var t=Fd(),a=$t.jf(t,!0);$t.cL(t),$t.vN((()=>$t.j(a,$t.Jt(n)))),$t.BC(e,t)};$t.if(r,(e=>{$t.Jt(n)&&e(i)}));var l=$t.AD(r,2);$t.XI(l,((e,t)=>((e,t)=>{function a({doc:t}){e.textContent="";const a=S.bP.fromJSON(te,t);ae.serializeFragment(a.content,void 0,e);for(const t of e.querySelectorAll("p,h1,h2,h3,h4,h5,h6"))t.appendChild(document.createElement("br"))}return a(t),{update:a}})?.(e,t)),(()=>({doc:$t.Jt(o)}))),$t.cL(a),$t.vN((()=>$t.Jk(l,"aria-hidden",!!$t.Jt(n)))),$t.BC(e,a)},$$slots:{default:!0}})};$t.if(h,(e=>{le($t.Jt(i))&&e(m)})),$t.BC(e,p),$t.uY()}(e,{get item(){return i()},get stateId(){return o()},get linkRenderConfig(){return x.linkRenderConfig},get searchTerm(){return $t.Jt(u)}})};$t.if(r,(e=>{$t.Hz(y,"$hideTextContentForId",a)!==g()&&e(n)})),$t.BC(e,t)},s=(e,t)=>{var a=e=>{!function(e,t){$t.VC(t,!1),$t.kZ(e,Od);const a=$t.zg(),r=$t.zg(),i=$t.zg(),o=$t.zg(),s=$t.zg(),c=$t.zg();let d=$t._w(t,"item",8),p=$t._w(t,"stateId",8);const h=lp();let m=$t.zg(),u=$t.zg();function g(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:d().id}}))}function f(e){g(e.target,Ji.mediaPlay)}function v(e){g(e.target,Ji.mediaPause)}function S(e){g(e.target,Ji.mediaEnd)}$t.M3((()=>($t.iT(d()),$t.iT(p()))),(()=>{$t.hZ(a,d().states[p()])})),$t.M3((()=>$t.iT(d())),(()=>{$t.hZ(r,d().states.default)})),$t.M3((()=>($t.Jt(a),$t.Jt(r))),(()=>{$t.hZ(i,$t.Jt(a).altText??$t.Jt(r).altText)})),$t.M3((()=>($t.Jt(a),$t.Jt(r),$t.Jt(u),$t.iT(d()))),(()=>{const e=$t.Jt(a).videoSources??$t.Jt(r).videoSources;$t.hZ(u,e.default);const t=$t.Jt(u)&&d().assets?.[$t.Jt(u)];$t.hZ(m,t?h.resolvePath(t.path):void 0)})),$t.M3((()=>($t.Jt(a),$t.Jt(r))),(()=>{$t.hZ(o,$t.Jt(a).width??$t.Jt(r).width)})),$t.M3((()=>($t.Jt(a),$t.Jt(r))),(()=>{$t.hZ(s,$t.Jt(a).height??$t.Jt(r).height)})),$t.M3((()=>($t.Jt(o),$t.Jt(s))),(()=>{$t.hZ(c,$t.Jt(o)/$t.Jt(s))})),$t.iq(),$t.Ts();var I=Zd(),b=$t.jf(I);$t.Eb(b,p,(e=>{var t=$t.Im(),a=$t.es(t),r=e=>{!function(e,t){$t.VC(t,!1),$t.kZ(e,Rd);const[a,r]=$t.DZ(),i=()=>$t.Hz(E,"$labels",a),o=$t.zg(),s=$t.zg(),c=$t.zg(),d=$t.zg(),p=$t.zg(),h=$t.zg(),m=$t.zg(),u=$t.zg(),g={a11yGroupVideoPlayer:"Video player",a11yMediaMute:"Mute",a11yMediaPause:"Pause",a11yMediaPlay:"Play",a11yMediaSeek:"Video progress",a11yMediaUnmute:"Unmute",a11yMediaVolume:"Volume level",a11yMediaPictureInPicture:"Picture-in-picture",a11yMediaExitPictureInPicture:"Exit picture-in-picture",a11yMediaRemainingTime:"Remaining time",a11yMediaFullscreen:"Fullscreen",a11yMediaExitFullscreen:"Exit fullscreen",a11yMediaPlayVideo:"Play video"},f=!0;let v=$t._w(t,"mediaSrc",8),S=$t._w(t,"itemId",8),I=$t._w(t,"aspectRatio",8),b=$t._w(t,"onPlay",8,(()=>{})),x=$t._w(t,"onPause",8,(()=>{})),w=$t._w(t,"onEnded",8,(()=>{})),y=$t._w(t,"onMediaProgress",8,(()=>{})),k=$t._w(t,"mediaStoreAdapter",8),C=$t._w(t,"altText",8),T=$t.zg(),B=$t.zg(),M=$t.zg(),L=$t.zg(),A=$t.zg(0),D=$t.zg(!0),F=$t.zg(1),z=$t.zg(0),V=$t.zg(0),J=$t.zg(!1),$=$t.zg(!1),P=!1,R=1,Z=$t.zg(!1),O=$t.zg(!1);const _=()=>0===$t.Jt(F)?"muted":$t.Jt(F)<=.33?"low":$t.Jt(F)<=.66?"mid":"high",j=Ol()((()=>{$t.hZ(O,!1)}),2e3),Y=Jc()(y(),2e3),{mediaElements:H,labels:E}=lp(),G=!!HTMLVideoElement.prototype.requestPictureInPicture;(0,Ws.onMount)((()=>(H?.set(S(),$t.Jt(B)),G&&$t.Jt(B)?.addEventListener("leavepictureinpicture",te),$t.Tk(M,$t.Jt(M).value="0"),()=>{H?.delete(S()),G&&$t.Jt(B)?.removeEventListener("leavepictureinpicture",te)}))),(0,Ws.onMount)((()=>k()?.subscribe(S(),(()=>{$t.hZ(D,!0)}))));let X=$t.zg(),q=$t.zg(),N=$t.zg(),U=$t.zg();const W=()=>{$t.hZ(O,!0),j()},Q=e=>{$t.Jt(D)?($t.Jt(B).play().catch((()=>{})),e&&b()(e),$t.hZ(Z,!0)):($t.Jt(B).pause(),e&&x()(e))};function K(e){Q(e),$t.Jt(L)&&$t.Jt(L).focus()}const ee=async()=>{document.pictureInPictureElement?await document.exitPictureInPicture():(await $t.Jt(B).requestPictureInPicture(),$t.hZ($,!0))},te=()=>{$t.hZ($,!1)};let ae=$t.zg();$t.M3((()=>i()),(()=>{$t.hZ(o,$c(i(),g))})),$t.M3((()=>($t.Jt(s),$t.Jt(c),$t.Jt(d),$t.Jt(p),$t.Jt(h),$t.Jt(m),$t.Jt(u),$t.Jt(o))),(()=>{var e;e=$t.Jt(o),$t.hZ(s,e.a11yGroupVideoPlayer),$t.hZ(c,e.a11yMediaMute),$t.hZ(d,e.a11yMediaPause),$t.hZ(p,e.a11yMediaPlay),$t.hZ(h,e.a11yMediaSeek),$t.hZ(m,e.a11yMediaUnmute),$t.hZ(u,e.a11yMediaVolume)})),$t.M3((()=>($t.Jt(A),$t.Jt(V))),(()=>{$t.hZ(X,Math.round($t.Jt(A)-$t.Jt(V)))})),$t.M3((()=>($t.Jt(X),$t.Jt(o),$t.Jt(U),$t.Jt(z),$t.Jt(A),$t.iT(S()),$t.Jt(D))),(()=>{$t.hZ(q,n($t.Jt(X))),$t.hZ(N,l($t.Jt(o),$t.Jt(X))),$t.hZ(U,Math.trunc(Number($t.Jt(z))/$t.Jt(A)*100)),Y({mondrianItemId:S(),progress:$t.Jt(U),duration:$t.Jt(A),active:!$t.Jt(D)})})),$t.M3((()=>($t.iT(v()),$t.Jt(B))),(()=>{$t.hZ(ae,(e=>{const t=e.split(".").pop()?.toLowerCase();switch(t){case"webm":return"video/webm";case"mp4":return"video/mp4";case"ogg":case"ogm":case"ogv":return"video/ogg";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"mkv":return"video/x-matroska";default:return"application/octet-stream"}})(v())),$t.Jt(B)?.load()})),$t.iq(),$t.Ts();var re=Pd();let ie,oe;$t.Jk(re,"aria-hidden",!1);var ne=$t.jf(re),le=$t.jf(ne),se=$t.jf(le);$t.cL(le),$t.Lc(le,(e=>$t.hZ(B,e)),(()=>$t.Jt(B))),$t.cL(ne);var ce=$t.AD(ne,2),de=e=>{var t=Jd();Lc($t.jf(t),{icon:"arc-play",size:"21px"}),$t.cL(t),$t.vN((()=>$t.Jk(t,"aria-label",$t.Jt(o).a11yMediaPlayVideo))),$t.f0("click",t,K),$t.BC(e,t)};$t.if(ce,(e=>{$t.Jt(D)&&e(de)}));var pe=$t.AD(ce,2),he=$t.jf(pe),me=$t.jf(he);const ue=$t.Xd((()=>$t.Jt(D)?"arc-play":"arc-pause"));Lc(me,{size:"14px",get icon(){return $t.Jt(ue)}}),$t.cL(he),$t.Lc(he,(e=>$t.hZ(L,e)),(()=>$t.Jt(L)));var ge=$t.AD(he,2),fe=$t.jf(ge);$t.R0(fe),$t.Jk(fe,"min",0),$t.Jk(fe,"step",.01),$t.Lc(fe,(e=>$t.hZ(M,e)),(()=>$t.Jt(M)));var ve=$t.AD(fe,2);let Se;$t.cL(ge);var Ie=$t.AD(ge,2),be=$t.jf(Ie),xe=$t.jf(be,!0);$t.cL(be);var we=$t.AD(be,3,!0);$t.cL(Ie);var ye=$t.AD(Ie,2),ke=e=>{var t=$d(),a=$t.jf(t);const r=$t.Xd((()=>"arc-pip-"+($t.Jt($)?"disable":"enable")));Lc(a,{get icon(){return $t.Jt(r)},size:"20px"}),$t.cL(t),$t.vN((()=>$t.Jk(t,"aria-label",$t.Jt($)?$t.Jt(o).a11yMediaExitPictureInPicture:$t.Jt(o).a11yMediaPictureInPicture))),$t.f0("click",t,ee),$t.BC(e,t)};$t.if(ye,(e=>{G&&e(ke)}));var Ce=$t.AD(ye,2),Te=$t.jf(Ce);const Be=$t.Xd((()=>"arc-fullscreen-"+($t.Jt(J)?"disable":"enable")));Lc(Te,{get icon(){return $t.Jt(Be)},size:"15px"}),$t.cL(Ce);var Me=$t.AD(Ce,2),Le=$t.jf(Me),Ae=$t.jf(Le);const De=$t.Xd((()=>`arc-volume-${_()}`));Lc(Ae,{get icon(){return $t.Jt(De)},size:"18px"}),$t.cL(Le);var Fe=$t.AD(Le,2),ze=$t.jf(Fe);$t.R0(ze);var Ve=$t.AD(ze,2);let Je;$t.cL(Fe),$t.cL(Me),$t.cL(pe),$t.cL(re),$t.Lc(re,(e=>$t.hZ(T,e)),(()=>$t.Jt(T))),$t.vN(((e,t,a,r,i)=>{ie=$t.ys(re,1,"video-player svelte-m58po",null,ie,e),$t.Jk(re,"aria-label",C()||$t.Jt(s)),oe=$t.hg(re,"",oe,{"--aspect-ratio":I()}),le.volume=$t.Jt(F),$t.Jk(se,"src",v()),$t.Jk(se,"type",$t.Jt(ae)),$t.Jk(pe,"aria-hidden",!$t.Jt(Z)),$t.Jk(he,"aria-label",$t.Jt(D)?$t.Jt(p):$t.Jt(d)),$t.Jk(fe,"max",$t.Jt(A)),$t.Jk(fe,"aria-label",$t.Jt(h)),$t.Jk(fe,"aria-valuenow",t),$t.Jk(fe,"aria-valuetext",a),Se=$t.hg(ve,"",Se,{"--slider-progress-percent":`${$t.Jt(U)}%`}),$t.Jk(Ie,"aria-valuetext",$t.Jt(N)),$t.Jk(Ie,"aria-valuenow",$t.Jt(X)),$t.j(xe,$t.Jt(o).a11yMediaRemainingTime),$t.j(we,$t.Jt(q)),$t.Jk(Ce,"aria-label",$t.Jt(J)?$t.Jt(o).a11yMediaExitFullscreen:$t.Jt(o).a11yMediaFullscreen),$t.Jk(Le,"aria-label",r),$t.Jk(ze,"aria-label",$t.Jt(u)),$t.Jk(ze,"aria-valuenow",$t.Jt(F)),$t.Jk(ze,"aria-valuetext",i),$t.to(ze,$t.Jt(F)),$t.Jk(Ve,"aria-label",$t.Jt(h)),Je=$t.hg(Ve,"",Je,{"--slider-progress-percent":100*$t.Jt(F)+"%"})}),[()=>({active:$t.Jt(O),paused:$t.Jt(D),fullscreen:$t.Jt(J),touched:$t.Jt(Z)}),()=>Number($t.Jt(z)),()=>l($t.Jt(o),Number($t.Jt(z))),()=>"muted"===_()?$t.Jt(m):$t.Jt(c),()=>`${Math.round(100*$t.Jt(F))}%`],$t.Xd),$t.M$(le,(()=>$t.Jt(V)),(e=>$t.hZ(V,e))),$t.IY("duration","durationchange",le,(e=>$t.hZ(A,e))),$t.Ej(le,(()=>$t.Jt(D)),(e=>$t.hZ(D,e))),$t.f0("click",le,Q),$t.f0("ended",le,(function(...e){w()?.apply(this,e)})),$t.f0("timeupdate",le,(e=>{const t=e.currentTarget,{currentTime:a}=t;P||$t.hZ(z,`${a}`)})),$t.f0("play",le,(()=>k()?.play(S()))),$t.f0("click",he,Q),$t.oJ(fe,(()=>$t.Jt(z)),(e=>$t.hZ(z,e))),$t.f0("input",fe,(()=>{P||(P=!0)})),$t.f0("change",fe,(e=>{P&&(P=!1);const t=Number(e.currentTarget?.value);$t.hZ(V,t)})),$t.f0("keydown",fe,(function(e){const t=e.shiftKey?10:5;var a;e.key.startsWith("Arrow")&&(e.preventDefault(),W(),a=["ArrowLeft","ArrowDown"].includes(e.key)?-t:t,$t.hZ(V,a<0?Math.max($t.Jt(V)+a,0):Math.min($t.Jt(V)+a,$t.Jt(A)))),[" ","Enter"].includes(e.key)&&(e.preventDefault(),Q())})),$t.f0("click",Ce,(async()=>{document.fullscreenElement?await document.exitFullscreen():await $t.Jt(T).requestFullscreen()})),$t.f0("click",Le,(()=>{$t.Jt(F)>0?(R=$t.Jt(F),$t.hZ(F,0)):$t.hZ(F,R)})),$t.f0("input",ze,(e=>{const t=e.target;$t.hZ(F,parseFloat(t.value))})),$t.f0("keydown",ze,(function(e){const t=e.shiftKey?.2:.1;var a;e.key.startsWith("Arrow")&&(e.preventDefault(),W(),a=["ArrowLeft","ArrowDown"].includes(e.key)?-t:t,$t.hZ(F,a<0?Math.max($t.Jt(F)+a,0):Math.min($t.Jt(F)+a,1)))})),$t.f0("fullscreenchange",re,(()=>{$t.hZ(J,!$t.Jt(J))})),$t.f0("click",re,W),$t.f0("mousemove",re,W),$t.f0("keydown",re,W),$t.BC(e,re),$t.Ek(t,"allowTabNavigation",f);var $e=$t.uY({allowTabNavigation:f});r()}(e,{get mediaSrc(){return $t.Jt(m)},get itemId(){return d().id},get aspectRatio(){return $t.Jt(c)},onPlay:f,onPause:v,onEnded:S,get onMediaProgress(){return h.onMediaProgress},get mediaStoreAdapter(){return h.mediaStoreAdapter},get altText(){return $t.Jt(i)}})};$t.if(a,(e=>{$t.Jt(m)&&e(r)})),$t.BC(e,t)})),$t.cL(I),$t.vN((()=>$t.Jk(I,"data-item-id",d().id))),$t.BC(e,I),$t.uY()}(e,{get item(){return i()},get stateId(){return o()}})},r=(e,t)=>{var a=e=>{!function(e,t){$t.VC(t,!1),$t.kZ(e,Yc);const a=$t.zg(),r=$t.zg(),i=$t.zg();let o=$t._w(t,"item",8),n=$t._w(t,"stateId",8);const l=lp();let s=$t.zg(),c=$t.zg();function d(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:o().id}}))}function p(e){d(e.target,Ji.mediaPlay)}function h(e){d(e.target,Ji.mediaPause)}function m(e){d(e.target,Ji.mediaEnd)}$t.M3((()=>$t.iT(o())),(()=>{$t.hZ(a,o().states.default)})),$t.M3((()=>($t.iT(o()),$t.iT(n()))),(()=>{$t.hZ(r,o().states[n()])})),$t.M3((()=>($t.Jt(r),$t.Jt(a))),(()=>{$t.hZ(i,$t.Jt(r).altText??$t.Jt(a).altText)})),$t.M3((()=>($t.Jt(r),$t.Jt(a),$t.Jt(c),$t.iT(o()))),(()=>{const e=$t.Jt(r).audioSources??$t.Jt(a).audioSources;$t.hZ(c,e.default);const t=$t.Jt(c)&&o().assets?.[$t.Jt(c)];$t.hZ(s,t?l.resolvePath(t.path):void 0)})),$t.iq(),$t.Ts();var u=jc(),g=$t.jf(u);$t.Eb(g,n,(e=>{var t=$t.Im(),a=$t.es(t),r=e=>{_c(e,{get item(){return o()},get mediaSrc(){return $t.Jt(s)},onPlay:p,onPause:h,onEnded:m,get onMediaProgress(){return l.onMediaProgress},get mediaStoreAdapter(){return l.mediaStoreAdapter},get altText(){return $t.Jt(i)}})};$t.if(a,(e=>{$t.Jt(s)&&e(r)})),$t.BC(e,t)})),$t.cL(u),$t.vN((()=>$t.Jk(u,"data-item-id",o().id))),$t.BC(e,u),$t.uY()}(e,{get item(){return i()},get stateId(){return o()}})};$t.if(e,(e=>{"audio"===i().type&&e(a)}),t)};$t.if(e,(e=>{"video"===i().type?e(a):e(r,!1)}),t)};$t.if(e,(e=>{"text"===i().type||"shape"===i().type?e(r):e(s,!1)}),t)};$t.if(I,(e=>{"group"===i().type?e(k):e(C,!1)})),$t.cL(r),$t.XI(r,((e,t)=>w?.(e,t)),(()=>({item:i(),triggers:$t.Jt(h)}))),$t.vN((e=>{s=$t.ys(r,1,"mon-item svelte-19sv9wq",null,s,e),r.inert=!d(),$t.Jk(r,"aria-hidden",!d()),c=$t.hg(r,"",c,{opacity:$t.Jt(p)})}),[()=>({"--smooth-transitions":L,"--clip":v(),"--hidden":!d()})],$t.Xd),$t.BC(e,r)},$$slots:{default:!0}}),$t.uY(),r()}var Hd=$t.vs('<div class="item-learner-hover svelte-1ov4e1m"></div>');const Ed={hash:"svelte-1ov4e1m",code:".item-learner-hover.svelte-1ov4e1m {position:absolute;pointer-events:none;box-shadow:0 0 0 2px var(--arc-color-mono-white);outline:2px dashed var(--arc-color-border-selected);}"};function Gd(e,t){$t.VC(t,!1),$t.kZ(e,Ed);const[a,r]=$t.DZ(),o=()=>$t.Hz(c,"$styleProps",a);let n=$t._w(t,"itemId",8);const l=lp(),s=(0,i.writable)({itemId:n()}),c=function(e){const t=new Map;let a;function r(){for(const{unsubscribe:e}of t.values())e();t.clear()}function o(e){if(!a)throw new Error("scopeGet may only be called synchronously from within a running reaction scope");a.add(e);let r=t.get(e),i=!0;return r||(r={value:null,unsubscribe:null},r.unsubscribe=e.subscribe((e=>{r.value=e,i||d()})),t.set(e,r),i=!1),r.value}const n=(0,i.writable)(null,(function(){return c(),r}));function c(){let e;a=new Set;try{e=(e=>{const{itemId:t}=e(s);if(!t)return null;let a=e(l.getItem(t));if(!a)return null;let r="",i=0,o=0;for(;;){const n=a.parentId===a.blockumentId,s=a.states.default,c=e(l.getState(t)),d=a.states[c],p=d.width??s.width,h=d.height??s.height;if(a.id===t&&(i=p,o=h),n)break;const m=.5*p,u=.5*h;r=`\n        translate(${s.x+(d.xOffset??0)+m}px, ${s.y+(d.yOffset??0)+u}px)\n        rotate(${d.rotation??s.rotation}deg)\n        scale(${d.flipX??s.flipX?-1:1}, ${d.flipY??s.flipY?-1:1})\n        translate(${-m}px, ${-u}px)\n      `+r,a=e(l.getItem(a.parentId))}return{transform:r,width:i+"px",height:o+"px"}})(o)}finally{const e=[];for(const r of t.keys())a.has(r)||e.push(r);for(const a of e)t.get(a).unsubscribe(),t.delete(a);a=void 0}n.set(e)}const d=function(e){let t;return()=>{function a(){t===a&&(e(),t=void 0)}t=a,(async()=>{await 0,a()})()}}(c);return n}();$t.M3((()=>$t.iT(n())),(()=>{$t.fT(s,{itemId:n()})})),$t.iq(),$t.Ts();var d=$t.Im(),p=$t.es(d),h=e=>{var t=Hd();let a;$t.vN((()=>a=$t.hg(t,"",a,{transform:o().transform,width:o().width,height:o().height}))),$t.BC(e,t)};$t.if(p,(e=>{null!=o()&&e(h)})),$t.BC(e,d),$t.uY(),r()}var Xd=$t.vs('<div class="ui-theme svelte-1hfium2"><!></div>');const qd={hash:"svelte-1hfium2",code:"\n  /* Note that :root is important for elements injected into `body`\n  to have access to these vars. */:root,\n  :host {--mon-color-border: var(--arc-color-border-standard);--mon-color-border-selected: var(--arc-color-brand-root);--mon-color-primary: var(--arc-color-blue-600);--mon-color-secondary: var(--arc-color-blue-500);--mon-opacity-inert: var(--arc-alpha-50);--mon-color-input: var(--arc-color-alpha-black-03);\n\n    /**\n      Rise uses a hardcoded hex value of #b5d5fd for text selection color. The issue with this value is\n      that it has no transparency, which means when text is selected you can no longer see any applicable\n      highlighting. \n\n      For us, we want a visually similar color that has some transparency to allow for underlying highlights\n      to still be visible when text is selected. We can employ color blending logic to calculate this color.\n\n      #b5d5fd is an RGB of (181, 213, 253). If we assume a white background (255, 255, 255) and apply 70% opacity\n      to the blue color, we can solve for the resulting blended color:\n\n        R1 = (R3 - R2 + R2 * A) / A\n        G1 = (G3 - G2 + G2 * A) / A\n        B1 = (B3 - B2 + B2 * A) / A\n\n      This color ends up being visually darker than #b5d5fd when the backdrop is darker than white, but that's an\n      unavoidable tradeoff which comes with using transparency. \n\n      This approach does not really address scenarios where the backdrop have low contrast with the effective selection\n      color, as that will require a more involved auto-contrast solution.\n    */\n    /** 70% opacity seems to be reasonable for allowing highlights to peek through, can tune based on feedback */--mon-text-selection-a: 0.7;--mon-text-selection-r: calc(\n      (181 - 255 + 255 * var(--mon-text-selection-a)) /\n        var(--mon-text-selection-a)\n    );--mon-text-selection-g: calc(\n      (213 - 255 + 255 * var(--mon-text-selection-a)) /\n        var(--mon-text-selection-a)\n    );--mon-text-selection-b: calc(\n      (253 - 255 + 255 * var(--mon-text-selection-a)) /\n        var(--mon-text-selection-a)\n    );--mon-color-text-selection: rgba(\n      var(--mon-text-selection-r),\n      var(--mon-text-selection-g),\n      var(--mon-text-selection-b),\n      var(--mon-text-selection-a)\n    );\n\n    /*\n     * Some z-indexes for things that may occupy a shared stacking context.\n     * When possible, order problems should be resolved by using isolation instead.\n     */--mon-z-index-select: 3000;--mon-z-index-popover: 3100;--mon-z-index-context-menu: 3200;--mon-z-index-tooltip: 4000;--mon-z-index-toast: 5000;--mon-input-padding: var(--arc-space-0-75) var(--arc-space-1);--mon-input-height: 3.2rem;--mon-focus-outline-width: 0.2rem;--mon-input-hover-box-shadow: inset 0 0 0 0.1rem\n      var(--arc-color-border-stark);--mon-input-focus-box-shadow: inset 0 0 0 var(--mon-focus-outline-width)\n      var(--arc-color-border-focus);--mon-button-hover-background: var(--arc-color-alpha-black-05);--mon-button-active-background: var(--arc-color-alpha-black-10);}.ui-theme.svelte-1hfium2 {font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-14);\n\n    /**\n    Short term fix for CBs which render in Rise RTL lessons.\n    More details: https://github.com/articulate/mondrian/issues/3172\n    */direction:ltr;\n\n    /*\n    Most descendants set their own color, but some don't, so set a starting inheritable color in case the\n    color outside is inconsistent.\n    */color:var(--arc-color-mono-black);\n\n    /**\n      Disable synthesis by default and re-enable in children on a case-by-case basis as needed.\n      For instance, item text wrappers have an override to enable synthesis of style and weight.\n    */font-synthesis:none;}.ui-theme.svelte-1hfium2 *,\n  .ui-theme.svelte-1hfium2 *::before,\n  .ui-theme.svelte-1hfium2 *::after {box-sizing:border-box;}.ui-theme.svelte-1hfium2 :where(button, input, textarea) {font-family:inherit;}.mon-sr-only {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}:where(.mon-focusable) {border-radius:var(--arc-border-radius-sm);}:where(.mon-focusable:not(:disabled, :has(:disabled)):hover) {box-shadow:inset 0 0 0 0.1rem var(--arc-color-neutral-100);}:where(.mon-focusable:is(:focus-visible, :has(:focus-visible))) {box-shadow:var(--mon-input-focus-box-shadow);}\n\n  /* TODO: Consider moving this utility class to own file */.mon-visually-hidden {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}\n\n  /** Custom tiptap overrides intended to be enforced by Mondrian specifically */.tiptap {font-family:var(--mon-theme-font-body);min-height:100%;width:100%;\n    /* These will generally be overridden by per-node styles. */font-size:14px;color:black;line-height:1.4;\n    /* Override some ARC defaulted things */font-variation-settings:normal;\n    /*\n      This ensures the browser can synthesize bold/italic styles for Rise fonts used in canvas items when the loaded\n      font files for those font families don't include bold/italic variants. TODO: Add support for small-caps\n      if/when we add support for small-cap chars\n    */font-synthesis:style weight;}.tiptap :is(h1, h2, h3, h4, h5, h6) {font-family:var(--mon-theme-font-heading);font-size:inherit;font-weight:inherit;}.tiptap :is(p, h1, h2, h3, h4, h5, h6, ul, ol) {margin:0;}.tiptap :is(ul, ol) {padding:0;padding-inline-start:40px;}\n\n  /** Ensure subscript & superscript elements are consistently styled across UAs */.tiptap :is(sub, sup) {font-size:smaller;}.tiptap :is(sub) {vertical-align:sub;}.tiptap :is(sup) {vertical-align:super;}.tiptap > :last-child {\n    /* The last paragraph/heading should have no space-after at all.\n    Since the individual space-after values are applied directly as style attributes, this needs\n    to be high specificity to override */margin-block-end:0 !important;}.tiptap strong {font-weight:bold;}.tiptap em {font-style:italic;}.tiptap s {text-decoration:line-through;}.tiptap u {text-decoration:underline;}\n\n  /** To align with Rise */.tiptap a {color:var(--color-theme);text-decoration:none;}.tiptap a > span {text-decoration:underline;}\n\n  /** Copy of styles that tiptap normally injects into the document head. We render in a shadow root\n    * so default injection doesn't work for us. So we just instead reproduce the rules in our UiTheme styles\n    * which do get rendered within our shadow root wrapper. \n    * TODO: Engage tiptap team about exporting their JS styles so we dont have to do stuff like this\n    */.ProseMirror {position:relative;word-wrap:break-word;white-space:pre-wrap;white-space:break-spaces;font-variant-ligatures:none;font-feature-settings:'liga' 0; /* the above doesn't seem to work in Edge */}.ProseMirror [contenteditable='false'] {white-space:normal;}.ProseMirror [contenteditable='false'] [contenteditable='true'] {white-space:pre-wrap;}.ProseMirror pre {white-space:pre-wrap;}img.ProseMirror-separator {display:inline !important;border:none !important;margin:0 !important;width:1px !important;height:1px !important;}.ProseMirror-gapcursor {display:none;pointer-events:none;position:absolute;margin:0;}.ProseMirror-gapcursor:after {content:'';display:block;position:absolute;top:-2px;width:20px;border-top:1px solid black;\n    animation: svelte-1hfium2-ProseMirror-cursor-blink 1.1s steps(2, start) infinite;}\n\n  @keyframes svelte-1hfium2-ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }.ProseMirror-hideselection *::selection {background:transparent;}.ProseMirror-hideselection *::-moz-selection {background:transparent;}.ProseMirror-hideselection * {caret-color:transparent;}.ProseMirror-focused .ProseMirror-gapcursor {display:block;}.tippy-box[data-animation='fade'][data-state='hidden'] {opacity:0;}"};function Nd(e,t,a,r){return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}function Ud(e=window.document){const t=e.activeElement;return t?t.shadowRoot?Ud(t.shadowRoot):t:null}const Wd={Low:-10,Generic:0,Tooltip:10};let Qd=[];function Kd(e,t){const a=[];let r;{let i=0;for(;i<Qd.length;i+=1){const e=Qd[i];if(e.order>t)break;a.push(e)}for(r=i,a.push({element:e,order:t});i<Qd.length;i+=1){const e=Qd[i];e.element.hidePopover(),a.push(e)}}for(let e=r;e<a.length;e+=1)a[e].element.showPopover();Qd=a}function ep(e){const t=Qd.findIndex((t=>t.element===e));t>=0&&Qd.splice(t,1),e.hidePopover()}const tp=(e,{item:t,triggers:a})=>{function r(r,i={}){a.filter((e=>e.event===r)).forEach((a=>{!function(e,t,a){t.dispatchEvent(new CustomEvent("trigger",{detail:a,bubbles:!0}))}(0,e,{itemId:t.id,triggerId:a.id,...i})}))}const i=[...new Set(a.map((e=>e.event)))].map((t=>{switch(t){case Ji.hover:{let a=!1;return[Nd("mouseenter",e,(e=>{a||(a=!0,r(t,{hovered:a}))})),Nd("mouseleave",e,(e=>{a&&(a=!1,r(t,{hovered:a}))}))]}case Ji.click:return[Nd("click",e,(e=>{const a=window.getSelection();"Range"!==a?.type&&r(t)})),Nd("keyup",e,(e=>{["Space","Enter"].includes(e.code)&&e.target===document.activeElement&&r(t)}))];case Ji.mediaPlay:case Ji.mediaPause:case Ji.mediaEnd:return Nd(t,e,(e=>{r(t)}));default:return Nd(t,e,(()=>{r(t)}))}})).flat(2).filter(Boolean);return{destroy(){i.forEach((e=>{e()}))}}},ap=(e,{items:t,currentStates:a,currentVisibles:r,triggers:i,mediaElements:o})=>{const n=Vt()(i,"sourceId"),l={[$i](e,r,i){const o="self"===e.targetId[0]?r:t[e.targetId[0]];!1===i.hovered?a.get(o.id)?.revert(e.targetState):a.get(o.id)?.set(e.targetState)},[Pi](e,a,i){e.targetId.forEach((o=>{const n="self"===o?a:t[o];!1===i.hovered?r.get(n.id)?.set(!e.targetVisibility):r.get(n.id)?.set(e.targetVisibility)}))},[Ri](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a?.pause()}))},[Zi](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a?.play().catch((()=>{}))}))},[Oi](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a&&(a.currentTime=a.duration,a.pause())}))},[_i](e,t){}},s=Nd("trigger",e,(e=>{const{itemId:a,triggerId:r,...i}=e.detail,o=t[a];if(!o)throw new Error(`Could not execute trigger ${r} on item ${a} because the item could not be found.`);const s=n[o.id]?.find((e=>e.id===r));if(!s||!s.actions.length)throw new Error(`Could not execute trigger ${r} on item ${a} because the trigger could not be found.`);s.actions.forEach((e=>{const t=l[e.type];if(!t)throw new Error(`Could not execute trigger ${r} on item ${a} because an appropriate handler for its '${e.type}' action could not be found.`);t(e,o,i)}))}));return{destroy(){s()}}},rp="isLearn",ip=()=>(0,Ws.getContext)(rp)??!1;function op(){return{externalLinksDisabled:!1,isExternalLink:e=>!1}}const np="ItemRenderingContext";function lp(){const e=(0,Ws.getContext)(np);if(!e)throw new Error("This component must be provided with an ItemRenderingContext");return e}const sp=Pt.YOg(Pt.YjP());var cp=$t.vs("<div> </div>"),dp=$t.vs('<div class="preview svelte-1hpxqaf"><div class="width-gauge svelte-1hpxqaf"></div> <div class="item-wrapper clip svelte-1hpxqaf"><!> <!></div></div>'),pp=$t.vs('<div class="item-wrapper svelte-1hpxqaf"><!></div>'),hp=$t.vs("<!> <!>",1);const mp={hash:"svelte-1hpxqaf",code:".preview.svelte-1hpxqaf {\n    /* Stacking context so Rise doesn't need to know about Mondrian z-indexes */isolation:isolate;width:100%;display:flex;flex-direction:column;align-items:center;}.item-wrapper.svelte-1hpxqaf {transform-origin:center top;position:relative;&.clip {overflow:clip;}}.width-gauge.svelte-1hpxqaf {width:100%;}"};var up=a(6186),gp=a.n(up),fp=a(4535);const vp=((e,t={width:"100%"},a="div")=>r=>{const i=(0,up.useRef)(null),o=(0,up.useRef)(null);return(0,up.useEffect)((()=>{const t=i.current.shadowRoot??i.current.attachShadow({mode:"open",clonable:!0,serializable:!0});return o.current=(0,fp.YU)({component:e,target:t,props:r}),()=>{o.current?.$destroy()}}),[]),(0,up.useEffect)((()=>{o.current?.$set(r)}),[r]),gp().createElement(a,{ref:i,style:t,"data-mondrian-shadow-root-host":!0,"data-arc-theme":"font-family"})})((function(e,t){$t.VC(t,!1),$t.kZ(e,mp);const[a,o]=$t.DZ(),n=()=>$t.Hz(V,"$itemsById",a),l=()=>$t.Hz($t.Jt(h),"$rootItemCurrentStateId",a),d=$t.zg(),h=$t.zg(),m=$t.zg(),u=$t.zg(),g=$t.zg();let f=$t._w(t,"manifest",8),v=$t._w(t,"blockumentId",8),S=$t._w(t,"prefetch",8,!0),I=$t._w(t,"searchTerm",8,void 0),b=$t._w(t,"locale",8,void 0),x=$t._w(t,"labels",8,void 0),w=$t._w(t,"hoveredItemPath",8,null),y=$t._w(t,"runtimeInterface",8,void 0),k=$t._w(t,"linkRenderConfig",24,op),C=$t._w(t,"mediaStoreAdapter",8,void 0),T=$t._w(t,"transcriptPanelAdapter",8,void 0),B=$t._w(t,"autoSize",8,!0),M=$t._w(t,"onMediaProgress",8,(()=>{}));(0,Ws.setContext)(rp,!0);let L=$t.zg(),A=$t.zg();const D=function(){const e=new Map;return{...(0,i.writable)(e),add:(t,a)=>(e.has(t)||e.set(t,function(e){let t,a,r;e.subscribe((e=>{t=e}));const o=(0,i.writable)(t);o.subscribe((e=>{a=r??t,r=e}));const n={...o,revert(e){r===e&&n.set(a)},reset(){n.set(t)}};return n}(a)),e.get(t)),get(t){if(!e.has(t))throw new Error(`No state found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),F=function(){const e=new Map;return{...(0,i.writable)(e),upsert(t,a){if(!e.has(t)){const r=function(e){const t={...(0,i.writable)(e),show(){t.set(!0)},hide(){t.set(!1)},reset(){t.set(e)}};return t}(a);return e.set(t,r),r}const r=e.get(t);return r.set(a),r},get(t){if(!e.has(t))throw new Error(`No visibility found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),z=(0,i.writable)(new Map),V=(0,i.writable)({}),J=(0,i.derived)(V,(e=>s(e))),$=(0,i.writable)(b());(0,i.derived)([z,J],(([e,t])=>({triggers:e,items:t}))).subscribe((({items:e})=>{e.forEach((e=>{D.add(e.id,(0,i.readable)(e.initialState)),F.upsert(e.id,e.initialVisible)})),F.resetAll(),D.resetAll()}));const P=new Map,R=(0,i.writable)(I()),Z=(0,i.writable)({});Z.subscribe(M());const O=(0,i.writable)(x()||{}),_={getTriggersBySourceId:()=>(0,i.readonly)(z),getItem:e=>(0,i.derived)([V,$],(([t,a])=>{const r=t[e];return r&&a?function(e,t){if(!t||!e.localeOverrides[t])return e;const a=structuredClone(e),r=a.localeOverrides[t];for(const[e,t]of c(r.states)){const r=a.states[e];r&&p(r,t)}return a}(r,a.active??null):r})),getState:e=>D.get(e),getVisible:e=>F.get(e),searchTerm:(0,i.readonly)(R),bindTriggers:tp,mediaElements:P,hideTextContentForId:(0,i.readable)(null),resolvePath:e=>(y()?.resolvePath??r)(e),linkRenderConfig:k(),mediaStoreAdapter:C(),transcriptPanelAdapter:(0,i.writable)(T()),onMediaProgress:e=>{const{mondrianItemId:t,...a}=e,r=n()[t];if(r){const e="audio"===r.type?r.states.default.audioSources?.default:"video"===r.type?r.states.default.videoSources?.default:null;e&&Z.update((t=>(t[e]={...a,itemId:e},t)))}},labels:O};var j;j=_,(0,Ws.setContext)(np,j);let Y=$t.zg();(0,Ws.onMount)((()=>{F.resetAll();const e=new ResizeObserver((()=>{$t.Jt(Y)&&E()}));return $t.Jt(Y)&&e.observe($t.Jt(Y)),()=>{e.disconnect()}}));let H=$t.zg(1);function E(){if(!($t.Jt(A)&&$t.Jt(Y)&&l()&&B()&&$t.Jt(u)&&$t.Jt(g)))return;const e=$t.Jt(Y).offsetWidth;$t.hZ(H,Math.min(1,e/$t.Jt(u)))}let G=$t.zg(),X=$t.zg(),q=$t.zg("off");const N=Ol()((e=>{$t.hZ(q,e?"polite":"off")}),100,{maxWait:500,trailing:!0});function U(){N(!0)}function W(){N(!1)}$t.M3((()=>$t.iT(w())),(()=>{$t.hZ(d,function(e){const t=sp.safeParse(e);if(!t.success)return null;const a=Eo(t.data);return a?.itemId??null}(w()))})),$t.M3((()=>$t.iT(b())),(()=>{$.set(b())})),$t.M3((()=>($t.iT(f()),$t.iT(v()),$t.Jt(L),Jt)),(()=>{const e=function(e,t){const a={},{items:r}=e;if(r)for(const e of s(r))e.blockumentId===t&&(a[e.id]=structuredClone(e));return a}(f(),v());$t.hZ(L,f().blockuments?.[v()]),$t.hZ(A,$t.Jt(L)?.children[0]?.id),z.set(Jt($t.Jt(L)?.triggers??[])),V.set(e)})),$t.M3((()=>$t.iT(I())),(()=>{R.set(I())})),$t.M3((()=>$t.iT(x())),(()=>{$t.fT(O,x()||{})})),$t.M3((()=>$t.iT(T())),(()=>{_.transcriptPanelAdapter.update((()=>T()))})),$t.M3((()=>$t.Jt(A)),(()=>{$t.QK($t.hZ(h,$t.Jt(A)?D.get($t.Jt(A)):void 0),"$rootItemCurrentStateId",a)})),$t.M3((()=>($t.Jt(A),n(),l(),Ft)),(()=>{$t.hZ(m,$t.Jt(A)&&n()[$t.Jt(A)]&&l()?Ft(n()[$t.Jt(A)],l(),["width","height"]):void 0)})),$t.M3((()=>$t.Jt(m)),(()=>{$t.hZ(u,$t.Jt(m)?.width)})),$t.M3((()=>$t.Jt(m)),(()=>{$t.hZ(g,$t.Jt(m)?.height)})),$t.M3((()=>($t.Jt(G),$t.Jt(u),$t.Jt(X),$t.Jt(g))),(()=>{$t.Jt(G)===$t.Jt(u)&&$t.Jt(X)===$t.Jt(g)||($t.hZ(G,$t.Jt(u)),$t.hZ(X,$t.Jt(g)),E())})),$t.iq(),$t.Ts(),function(e,t){$t.kZ(e,qd);var a=Xd(),r=$t.jf(a);$t.NI(r,t,"default",{},null),$t.cL(a),$t.BC(e,a)}(e,{children:(e,t)=>{var r=hp(),i=$t.es(r),o=e=>{!function(e,t){$t.VC(t,!1);const a=$t.zg();let r=$t._w(t,"items",8);const i=lp();$t.M3((()=>($t.iT(r()),s)),(()=>{$t.hZ(a,new Map(r().flatMap((e=>s(e.assets??{}))).map((e=>[e.id,e]))))})),$t.iq(),$t.Ts(),$t.d5((e=>{var t=$t.Im(),r=$t.es(t);$t.__(r,1,(()=>$t.Jt(a).values()),(e=>e.id),((e,t)=>{var a=wl();$t.vN((e=>$t.Jk(a,"href",e)),[()=>i.resolvePath($t.Jt(t).path)],$t.Xd),$t.BC(e,a)})),$t.BC(e,t)})),$t.uY()}(0,{get items(){return $t.Hz(J,"$itemsList",a)}})};$t.if(i,(e=>{S()&&e(o)}));var l=$t.AD(i,2),c=e=>{var t=cp(),a=$t.jf(t);$t.cL(t),$t.vN((()=>$t.j(a,`Block ${v()??""} could not be loaded`))),$t.BC(e,t)},p=e=>{!function(e,t){$t.VC(t,!1),$t.kZ(e,zc);const a=function(){const e=new Set;return(0,Ws.setContext)("mondrian-suspense",e),e}();let r=$t.zg(!0);(0,Ws.onMount)((()=>{Promise.all(a).then((()=>{$t.hZ(r,!1)}))})),$t.Ts();var i=Fc();let o;var n=$t.jf(i);$t.NI(n,t,"default",{get isLoading(){return $t.Jt(r)}},null),$t.cL(i),$t.vN((e=>o=$t.ys(i,1,"suspense svelte-1i06x9o",null,o,e)),[()=>({"--loading":$t.Jt(r)})],$t.Xd),$t.BC(e,i),$t.uY()}(e,{children:(e,t)=>{var a=$t.Im(),r=$t.es(a),i=e=>{var t=dp();let a;var r=$t.jf(t);$t.Lc(r,(e=>$t.hZ(Y,e)),(()=>$t.Jt(Y)));var i=$t.AD(r,2);let o;var l=$t.jf(i);Yd(l,{get itemId(){return $t.Jt(A)},visualOrder:0,noTransform:!0,clip:!0});var s=$t.AD(l,2),c=e=>{Gd(e,{get itemId(){return $t.Jt(d)}})};$t.if(s,(e=>{$t.Jt(d)&&e(c)})),$t.cL(i),$t.QZ((()=>$t.f0("focus",i,U))),$t.QZ((()=>$t.f0("blur",i,W))),$t.QZ((()=>$t.f0("focusin",i,U))),$t.QZ((()=>$t.f0("mouseover",i,U))),$t.QZ((()=>$t.f0("mouseout",i,W))),$t.QZ((()=>$t.f0("focusout",i,W))),$t.XI(i,((e,t)=>ap?.(e,t)),(()=>({items:n(),currentStates:D,currentVisibles:F,triggers:$t.Jt(L).triggers,mediaElements:P}))),$t.cL(t),$t.vN((()=>{a=$t.hg(t,"",a,{height:($t.Jt(g)??500)*$t.Jt(H)+"px"}),$t.Jk(i,"aria-live",$t.Jt(q)),o=$t.hg(i,"",o,{transform:`scale(${$t.Jt(H)??""})`,width:`${$t.Jt(u)??""}px`,height:`${$t.Jt(g)??""}px`,"min-height":`${$t.Jt(g)??""}px`})})),$t.BC(e,t)},o=e=>{var t=pp();let a;Yd($t.jf(t),{get itemId(){return $t.Jt(A)},visualOrder:0,clip:!0}),$t.cL(t),$t.QZ((()=>$t.f0("focus",t,U))),$t.QZ((()=>$t.f0("blur",t,W))),$t.QZ((()=>$t.f0("focusin",t,U))),$t.QZ((()=>$t.f0("mouseover",t,U))),$t.QZ((()=>$t.f0("mouseout",t,W))),$t.QZ((()=>$t.f0("focusout",t,W))),$t.XI(t,((e,t)=>ap?.(e,t)),(()=>({items:n(),currentStates:D,currentVisibles:F,triggers:$t.Jt(L).triggers,mediaElements:P}))),$t.vN((()=>{$t.Jk(t,"aria-live",$t.Jt(q)),a=$t.hg(t,"",a,{width:`${$t.Jt(u)??""}px`,height:`${$t.Jt(g)??""}px`})})),$t.BC(e,t)};$t.if(r,(e=>{B()?e(i):e(o,!1)})),$t.BC(e,a)},$$slots:{default:!0}})};$t.if(l,(e=>{void 0===$t.Jt(L)||void 0===$t.Jt(A)?e(c):e(p,!1)})),$t.BC(e,r)},$$slots:{default:!0}}),$t.uY(),o()})),Sp=new WeakMap,Ip=e=>{const{manifest:t,...a}=e,r=(0,up.useMemo)((()=>{let e=Sp.get(t);if(!e){try{e=function(e){const t=function(e){const t=Ni.parse(e);let a,r;function i(e){if(e)for(const{id:t,_v:i}of s(e))if(null==a)a=i,r=t;else if(a!==i)throw new Error(`Multiple versions found in manifest: { id: ${r}, _v: ${a} } and { id: ${t}, _v: ${i} }`)}return i(t.blockuments),i(t.items),a??30}(e);return 30===t?Sl.parse(e):function(e,t){return Yi()(function(e,t){const a=Ei()(e+1,31),r=xl.filter((({version:e})=>a.includes(e)));return Xi()(r,"version")}(e).map((({InputSchema:e,upgrade:t,OutputSchema:a})=>Yi()(e.parse,t,a.parse))))}(t)(e)}(t)}catch{}e&&Sp.set(t,e)}return e}),[t]);return r?gp().createElement(vp,{manifest:r,...a}):null},bp=["shape","text"],xp=(e,t,a,r)=>{if(t){if("group"===t.type)return t?.children.reduce(((t,i)=>t+xp(e,a[i.id],a,r)),0);if((e=>bp.includes(e.type))(t)){const a=r&&t.localeOverrides[r]?.states[t.initialState]?.text,i=t.states[t.initialState].text,o=a||i;if(o){const t=function(e,t){if(!t)return 0;const a=new RegExp(b()(t),"gi");let r=0;return function e({content:t}){if(!t?.length)return;const i=t[0].type;if("text"===i||"hardBreak"===i){let e="";for(const{type:a,text:r}of t)"text"===a&&r?e+=r:"hardBreak"===a&&(e+="\n");for(a.lastIndex=0;a.test(e);)r+=1}else for(const a of t)e(a)}(e),r}(o.json,e);return t}}}return 0},wp=(e,t,a,r)=>t.reduce(((t,i)=>(t[i.id]=a.items?i.items.reduce(((t,i)=>{const o=a.blockuments?.[i.blockumentId];return o?t+xp(e,a.items?.[o.children[0].id],a.items||{},r||null):t}),0):0,t)),{});function yp(e,t){const a=function(e,t){const a=null,r={};for(const t of e){const e=Eo(t.path);if(!e)continue;const{blockumentId:i,itemId:o,stateId:n,type:l}=e;let s;switch(l){case"richText":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,doc:jo(t.command.newValue)};break;case"altText":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,altText:t.command.newValue};break;case"transcript":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,transcript:t.command.newValue};break;case"script":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,script:t.command.newValue}}(r[t.locale]??=[]).push(s)}return function(e,t){const a=new Map;for(const[r,i]of c(t))for(const t of i){const{itemId:i,stateId:o}=t;if(!Yo(i)||!Yo(o)&&"default"!==o)throw new Error("itemId or stateId invalid");let n=a.get(i);if(!n&&Object.hasOwn(e,i)){const t=e[i];n=structuredClone(t),a.set(i,n)}if(n)if(Object.hasOwn(n.states,o))switch(t.type){case"altText":se(n.localeOverrides,o,r,t.translationId).altText=t.altText;break;case"transcript":"audio"===n.type&&(se(n.localeOverrides,o,r,t.translationId).transcript=t.transcript);break;case"richText":if("shape"===n.type||"text"===n.type){const e=se(n.localeOverrides,o,r,t.translationId);e.text?e.text.json=t.doc:e.text={id:crypto.randomUUID(),type:"tiptap",json:t.doc}}break;case"script":if("audio"===n.type){const e=se(n.localeOverrides,o,r,t.translationId);if(!e.aiAudioSettings){const t=n.states[o]?.aiAudioSettings;if(!t)break;e.aiAudioSettings=structuredClone(t)}e.aiAudioSettings.text=t.script}}else for(const{states:e}of s(n.localeOverrides))Object.hasOwn(e,o)&&delete e[o]}return[...a.values()]}(t,r)}(qi.parse(t),e.items??{}),r={...e.items};for(const e of a)r[e.id]=e;return{blockuments:e.blockuments??{},items:r}}}}]);