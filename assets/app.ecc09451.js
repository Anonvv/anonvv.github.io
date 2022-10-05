import{_ as On}from"./preload-helper.1c052cf7.js";import{i as nn,c as Se,a as ke,b as Gn,d as pn,e as Ie,t as Rn,f as Re,g as xe,h as Te,j as Jn,k as Ae,l as Ce,m as $e,n as Vn,o as He,w as an,p as y,q as u,r as d,u as i,s as f,v as j,x as p,y as v,z as r,A as U,B as $,C as zn,D as E,E as W,F as L,G as K,H as M,I as T,J as q,K as w,L as C,M as P,N as Un,O as X,P as G,Q as en,R as qe,S as D,T as Le,U as Me,V as B,W as hn,X as Kn,Y as Pe,Z as Ne}from"./framework.3a6555e1.js";import{u as R,w as H,a as Y,E as Ee,i as J,p as Xn,c as We,R as je,b as Be,d as De,C as Fe,s as Ye}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.39d45426.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const Oe="http://www.w3.org/2000/svg",F=typeof document!="undefined"?document:null,xn=F&&F.createElement("template"),Ge={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,o)=>{const a=e?F.createElementNS(Oe,n):F.createElement(n,t?{is:t}:void 0);return n==="select"&&o&&o.multiple!=null&&a.setAttribute("multiple",o.multiple),a},createText:n=>F.createTextNode(n),createComment:n=>F.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>F.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,o,a,s){const l=t?t.previousSibling:e.lastChild;if(a&&(a===s||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),t),!(a===s||!(a=a.nextSibling)););else{xn.innerHTML=o?`<svg>${n}</svg>`:n;const h=xn.content;if(o){const c=h.firstChild;for(;c.firstChild;)h.appendChild(c.firstChild);h.removeChild(c)}e.insertBefore(h,t)}return[l?l.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Je(n,e,t){const o=n._vtc;o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Ve(n,e,t){const o=n.style,a=nn(t);if(t&&!a){for(const s in t)dn(o,s,t[s]);if(e&&!nn(e))for(const s in e)t[s]==null&&dn(o,s,"")}else{const s=o.display;a?e!==t&&(o.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(o.display=s)}}const Tn=/\s*!important$/;function dn(n,e,t){if(pn(t))t.forEach(o=>dn(n,e,o));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const o=ze(n,e);Tn.test(t)?n.setProperty(Jn(o),t.replace(Tn,""),"important"):n[o]=t}}const An=["Webkit","Moz","ms"],rn={};function ze(n,e){const t=rn[e];if(t)return t;let o=Ae(e);if(o!=="filter"&&o in n)return rn[e]=o;o=Ce(o);for(let a=0;a<An.length;a++){const s=An[a]+o;if(s in n)return rn[e]=s}return e}const Cn="http://www.w3.org/1999/xlink";function Ue(n,e,t,o,a){if(o&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Cn,e.slice(6,e.length)):n.setAttributeNS(Cn,e,t);else{const s=$e(e);t==null||s&&!Vn(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Ke(n,e,t,o,a,s,l){if(e==="innerHTML"||e==="textContent"){o&&l(o,a,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t==null?"":t;(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let h=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Vn(t):t==null&&c==="string"?(t="",h=!0):c==="number"&&(t=0,h=!0)}try{n[e]=t}catch{}h&&n.removeAttribute(e)}const[Qn,Xe]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let mn=0;const Qe=Promise.resolve(),Ze=()=>{mn=0},nt=()=>mn||(Qe.then(Ze),mn=Qn());function O(n,e,t,o){n.addEventListener(e,t,o)}function et(n,e,t,o){n.removeEventListener(e,t,o)}function tt(n,e,t,o,a=null){const s=n._vei||(n._vei={}),l=s[e];if(o&&l)l.value=o;else{const[h,c]=ot(e);if(o){const m=s[e]=at(o,a);O(n,h,m,c)}else l&&(et(n,h,l,c),s[e]=void 0)}}const $n=/(?:Once|Passive|Capture)$/;function ot(n){let e;if($n.test(n)){e={};let o;for(;o=n.match($n);)n=n.slice(0,n.length-o[0].length),e[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Jn(n.slice(2)),e]}function at(n,e){const t=o=>{const a=o.timeStamp||Qn();(Xe||a>=t.attached-1)&&He(st(o,t.value),e,5,[o])};return t.value=n,t.attached=nt(),t}function st(n,e){if(pn(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(o=>a=>!a._stopped&&o&&o(a))}else return e}const Hn=/^on[a-z]/,it=(n,e,t,o,a=!1,s,l,h,c)=>{e==="class"?Je(n,o,a):e==="style"?Ve(n,t,o):xe(e)?Te(e)||tt(n,e,t,o,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rt(n,e,o,a))?Ke(n,e,o,s,l,h,c):(e==="true-value"?n._trueValue=o:e==="false-value"&&(n._falseValue=o),Ue(n,e,o,a))};function rt(n,e,t,o){return o?!!(e==="innerHTML"||e==="textContent"||e in n&&Hn.test(e)&&Gn(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Hn.test(e)&&nn(t)?!1:e in n}const qn=n=>{const e=n.props["onUpdate:modelValue"]||!1;return pn(e)?t=>Ie(e,t):e};function lt(n){n.target.composing=!0}function Ln(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ut={created(n,{modifiers:{lazy:e,trim:t,number:o}},a){n._assign=qn(a);const s=o||a.props&&a.props.type==="number";O(n,e?"change":"input",l=>{if(l.target.composing)return;let h=n.value;t&&(h=h.trim()),s&&(h=Rn(h)),n._assign(h)}),t&&O(n,"change",()=>{n.value=n.value.trim()}),e||(O(n,"compositionstart",lt),O(n,"compositionend",Ln),O(n,"change",Ln))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:o,number:a}},s){if(n._assign=qn(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||o&&n.value.trim()===e||(a||n.type==="number")&&Rn(n.value)===e))return;const l=e==null?"":e;n.value!==l&&(n.value=l)}},Mn={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):V(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:o}){!e!=!t&&(o?e?(o.beforeEnter(n),V(n,!0),o.enter(n)):o.leave(n,()=>{V(n,!1)}):V(n,e))},beforeUnmount(n,{value:e}){V(n,e)}};function V(n,e){n.style.display=e?n._vod:"none"}const Zn=Re({patchProp:it},Ge);let z,Pn=!1;function ct(){return z||(z=ke(Zn))}function ht(){return z=Pn?z:Se(Zn),Pn=!0,z}const ne=(...n)=>{const e=ct().createApp(...n),{mount:t}=e;return e.mount=o=>{const a=ee(o);if(!a)return;const s=e._component;!Gn(s)&&!s.render&&!s.template&&(s.template=a.innerHTML),a.innerHTML="";const l=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),l},e},dt=(...n)=>{const e=ht().createApp(...n),{mount:t}=e;return e.mount=o=>{const a=ee(o);if(a)return t(a,!0,a instanceof SVGElement)},e};function ee(n){return nn(n)?document.querySelector(n):n}function mt(n,e){let t=[],o=!0;const a=s=>{if(o){o=!1;return}const l=[],h=Math.min(t.length,s.length);for(let c=0;c<h;c++){let m=t[c];const[g,S,A=""]=s[c];if(m.tagName.toLocaleLowerCase()===g){for(const b in S)m.getAttribute(b)!==S[b]&&m.setAttribute(b,S[b]);for(let b=0;b<m.attributes.length;b++){const k=m.attributes[b].name;k in S||m.removeAttribute(k)}m.innerHTML!==A&&(m.innerHTML=A)}else document.head.removeChild(m),m=Nn(s[c]),document.head.append(m);l.push(m)}t.slice(h).forEach(c=>document.head.removeChild(c)),s.slice(h).forEach(c=>{const m=Nn(c);document.head.appendChild(m),l.push(m)}),t=l};an(()=>{const s=n.data,l=e.value,h=s&&s.title,c=s&&s.description,m=s&&s.frontmatter.head;document.title=(h?h+" | ":"")+l.title,document.querySelector("meta[name=description]").setAttribute("content",c||l.description),a([...m?pt(m):[]])})}function Nn([n,e,t]){const o=document.createElement(n);for(const a in e)o.setAttribute(a,e[a]);return t&&(o.innerHTML=t),o}function gt(n){return n[0]==="meta"&&n[1]&&n[1].name==="description"}function pt(n){return n.filter(e=>!gt(e))}const ft=/#.*$/,yt=/(index)?\.(md|html)$/,tn=/\/$/,vt=/^[a-z]+:/i;function fn(n){return Array.isArray(n)}function yn(n){return vt.test(n)}function wt(n,e){if(e===void 0)return!1;const t=En(`/${n.data.relativePath}`),o=En(e);return t===o}function En(n){return decodeURI(n).replace(ft,"").replace(yt,"")}function bt(n,e){const t=n.endsWith("/"),o=e.startsWith("/");return t&&o?n.slice(0,-1)+e:!t&&!o?`${n}/${e}`:n+e}function gn(n){return/^\//.test(n)?n:`/${n}`}function te(n){return n.replace(/(index)?(\.(md|html))?$/,"")||"/"}function _t(n){return n===!1||n==="auto"||fn(n)}function St(n){return n.children!==void 0}function kt(n){return fn(n)?n.length===0:!n}function vn(n,e){if(_t(n))return n;e=gn(e);for(const t in n)if(e.startsWith(gn(t)))return n[t];return"auto"}function oe(n){return n.reduce((e,t)=>(t.link&&e.push({text:t.text,link:te(t.link)}),St(t)&&(e=[...e,...oe(t.children)]),e),[])}const It=["href","aria-label"],Rt=["src"],xt=y({__name:"NavBarTitle",setup(n){const{site:e,theme:t,localePath:o}=R();return(a,s)=>(u(),d("a",{class:"nav-bar-title",href:i(o),"aria-label":`${i(e).title}, back to home`},[i(t).logo?(u(),d("img",{key:0,class:"logo",src:i(H)(i(t).logo),alt:"Logo"},null,8,Rt)):f("",!0),j(" "+p(i(e).title),1)],8,It))}});var Tt=_(xt,[["__scopeId","data-v-7ac13a1e"]]);function At(){const{site:n,localePath:e,theme:t}=R();return v(()=>{const o=n.value.langs,a=Object.keys(o);if(a.length<2)return null;const l=Y().path.replace(e.value,""),h=a.map(m=>({text:o[m].label,link:`${m}${l}`}));return{text:t.value.selectText||"Languages",items:h}})}const Ct=["GitHub","GitLab","Bitbucket"].map(n=>[n,new RegExp(n,"i")]);function $t(){const{site:n}=R();return v(()=>{const e=n.value.themeConfig,t=e.docsRepo||e.repo;if(!t)return null;const o=Ht(t);return{text:qt(o,e.repoLabel),link:o}})}function Ht(n){return Ee.test(n)?n:`https://github.com/${n}`}function qt(n,e){if(e)return e;const t=n.match(/^https?:\/\/[^/]+/);if(!t)return"Source";const o=Ct.find(([a,s])=>s.test(t[0]));return o&&o[0]?o[0]:"Source"}function ae(n){const e=Y(),t=yn(n.value.link);return{props:v(()=>{const a=Wn(`/${e.data.relativePath}`);let s=!1;if(n.value.activeMatch)s=new RegExp(n.value.activeMatch).test(a);else{const l=Wn(n.value.link);s=l==="/"?l===a:a.startsWith(l)}return{class:{active:s,isExternal:t},href:t?n.value.link:H(n.value.link),target:n.value.target||(t?"_blank":null),rel:n.value.rel||(t?"noopener noreferrer":null),"aria-label":n.value.ariaLabel}}),isExternal:t}}function Wn(n){return n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Lt={},Mt={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Pt=r("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Nt=r("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Et=[Pt,Nt];function Wt(n,e){return u(),d("svg",Mt,Et)}var wn=_(Lt,[["render",Wt]]);const jt={class:"nav-link"},Bt=y({__name:"NavLink",props:{item:null},setup(n){const t=U(n),{props:o,isExternal:a}=ae(t.item);return(s,l)=>(u(),d("div",jt,[r("a",zn({class:"item"},i(o)),[j(p(n.item.text)+" ",1),i(a)?(u(),$(wn,{key:0})):f("",!0)],16)]))}});var jn=_(Bt,[["__scopeId","data-v-49fe041d"]]);const Dt=n=>(E("data-v-07381bdb"),n=n(),W(),n),Ft={class:"nav-dropdown-link-item"},Yt=Dt(()=>r("span",{class:"arrow"},null,-1)),Ot={class:"text"},Gt={class:"icon"},Jt=y({__name:"NavDropdownLinkItem",props:{item:null},setup(n){const t=U(n),{props:o,isExternal:a}=ae(t.item);return(s,l)=>(u(),d("div",Ft,[r("a",zn({class:"item"},i(o)),[Yt,r("span",Ot,p(n.item.text),1),r("span",Gt,[i(a)?(u(),$(wn,{key:0})):f("",!0)])],16)]))}});var Vt=_(Jt,[["__scopeId","data-v-07381bdb"]]);const zt=["aria-label"],Ut={class:"button-text"},Kt={class:"dialog"},Xt=y({__name:"NavDropdownLink",props:{item:null},setup(n){const e=Y(),t=L(!1);K(()=>e.path,()=>{t.value=!1});function o(){t.value=!t.value}return(a,s)=>(u(),d("div",{class:M(["nav-dropdown-link",{open:t.value}])},[r("button",{class:"button","aria-label":n.item.ariaLabel,onClick:o},[r("span",Ut,p(n.item.text),1),r("span",{class:M(["button-arrow",t.value?"down":"right"])},null,2)],8,zt),r("ul",Kt,[(u(!0),d(T,null,q(n.item.items,l=>(u(),d("li",{key:l.text,class:"dialog-item"},[w(Vt,{item:l},null,8,["item"])]))),128))])],2))}});var Bn=_(Xt,[["__scopeId","data-v-18d75f62"]]);const Qt={key:0,class:"nav-links"},Zt={key:1,class:"item"},no={key:2,class:"item"},eo=y({__name:"NavLinks",setup(n){const{theme:e}=R(),t=At(),o=$t(),a=v(()=>e.value.nav||o.value||t.value);return(s,l)=>i(a)?(u(),d("nav",Qt,[i(e).nav?(u(!0),d(T,{key:0},q(i(e).nav,h=>(u(),d("div",{key:h.text,class:"item"},[h.items?(u(),$(Bn,{key:0,item:h},null,8,["item"])):(u(),$(jn,{key:1,item:h},null,8,["item"]))]))),128)):f("",!0),i(t)?(u(),d("div",Zt,[w(Bn,{item:i(t)},null,8,["item"])])):f("",!0),i(o)?(u(),d("div",no,[w(jn,{item:i(o)},null,8,["item"])])):f("",!0)])):f("",!0)}});var se=_(eo,[["__scopeId","data-v-35b91e7e"]]);const to={emits:["toggle"]},oo=r("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[r("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),ao=[oo];function so(n,e,t,o,a,s){return u(),d("div",{class:"sidebar-button",onClick:e[0]||(e[0]=l=>n.$emit("toggle"))},ao)}var io=_(to,[["render",so]]);const ro=n=>(E("data-v-40587210"),n=n(),W(),n),lo={class:"nav-bar"},uo=ro(()=>r("div",{class:"flex-grow"},null,-1)),co={class:"nav"},ho=y({__name:"NavBar",emits:["toggle"],setup(n){return(e,t)=>(u(),d("header",lo,[w(io,{onToggle:t[0]||(t[0]=o=>e.$emit("toggle"))}),w(Tt),uo,r("div",co,[w(se)]),C(e.$slots,"search",{},void 0,!0)]))}});var mo=_(ho,[["__scopeId","data-v-40587210"]]);function go(){let n=null,e=null;const t=wo(o,300);function o(){const l=po(),h=fo(l);for(let c=0;c<h.length;c++){const m=h[c],g=h[c+1],[S,A]=vo(c,m,g);if(S){history.replaceState(null,document.title,A||" "),a(A);return}}}function a(l){if(s(e),s(n),e=document.querySelector(`.sidebar a[href="${l}"]`),!e)return;e.classList.add("active");const h=e.closest(".sidebar-links > ul > li");h&&h!==e.parentElement?(n=h.querySelector("a"),n&&n.classList.add("active")):n=null}function s(l){l&&l.classList.remove("active")}P(()=>{o(),window.addEventListener("scroll",t)}),Un(()=>{a(decodeURIComponent(location.hash))}),X(()=>{window.removeEventListener("scroll",t)})}function po(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function fo(n){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>n.some(t=>t.hash===e.hash))}function yo(){return document.querySelector(".nav-bar").offsetHeight}function Dn(n){const e=yo();return n.parentElement.offsetTop-e-15}function vo(n,e,t){const o=window.scrollY;return n===0&&o===0?[!0,null]:o<Dn(e)?[!1,null]:!t||o<Dn(t)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function wo(n,e){let t,o=!1;return()=>{t&&clearTimeout(t),o?t=setTimeout(n,e):(n(),o=!0,setTimeout(()=>{o=!1},e))}}function bo(){const n=Y(),{site:e}=R();return go(),v(()=>{const t=n.data.headers,o=n.data.frontmatter.sidebar,a=n.data.frontmatter.sidebarDepth;if(o===!1)return[];if(o==="auto")return Fn(t,a);const s=vn(e.value.themeConfig.sidebar,n.data.relativePath);return s===!1?[]:s==="auto"?Fn(t,a):s})}function Fn(n,e){const t=[];if(n===void 0)return[];let o;return n.forEach(({level:a,title:s,slug:l})=>{if(a-1>e)return;const h={text:s,link:`#${l}`};a===2?(o=h,t.push(h)):o&&(o.children||(o.children=[])).push(h)}),t}const ie=n=>{const e=Y(),{site:t,frontmatter:o}=R(),a=n.depth||1,s=o.value.sidebarDepth||1/0,l=e.data.headers,h=n.item.text,c=_o(t.value.base,n.item.link),m=n.item.children,g=wt(e,n.item.link),S=a<s?re(g,m,l,a+1):null;return G("li",{class:"sidebar-link"},[G(c?"a":"p",{class:{"sidebar-link-item":!0,active:g},href:c},h),S])};function _o(n,e){return e===void 0||e.startsWith("#")?e:bt(n,e)}function re(n,e,t,o=1){return e&&e.length>0?G("ul",{class:"sidebar-links"},e.map(a=>G(ie,{item:a,depth:o}))):n&&t?re(!1,So(t),void 0,o):null}function So(n){return le(ko(n))}function ko(n){n=n.map(t=>Object.assign({},t));let e;return n.forEach(t=>{t.level===2?e=t:e&&(e.children||(e.children=[])).push(t)}),n.filter(t=>t.level===2)}function le(n){return n.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?le(e.children):void 0}))}const Io={key:0,class:"sidebar-links"},Ro=y({__name:"SideBarLinks",setup(n){const e=bo();return(t,o)=>i(e).length>0?(u(),d("ul",Io,[(u(!0),d(T,null,q(i(e),a=>(u(),$(i(ie),{item:a},null,8,["item"]))),256))])):f("",!0)}});const xo=y({__name:"SideBar",props:{open:{type:Boolean}},setup(n){return(e,t)=>(u(),d("aside",{class:M(["sidebar",{open:n.open}])},[w(se,{class:"nav"}),C(e.$slots,"sidebar-top",{},void 0,!0),w(Ro),C(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var To=_(xo,[["__scopeId","data-v-17c48e2f"]]);const Ao=/bitbucket.org/;function Co(){const{page:n,theme:e,frontmatter:t}=R(),o=v(()=>{const{repo:s,docsDir:l="",docsBranch:h="master",docsRepo:c=s,editLinks:m}=e.value,g=t.value.editLink!=null?t.value.editLink:m,{relativePath:S}=n.value;return!g||!S||!s?null:$o(s,c,l,h,S)}),a=v(()=>e.value.editLinkText||"Edit this page");return{url:o,text:a}}function $o(n,e,t,o,a){return Ao.test(n)?qo(n,e,t,o,a):Ho(n,e,t,o,a)}function Ho(n,e,t,o,a){return(yn(e)?e:`https://github.com/${e}`).replace(tn,"")+`/edit/${o}/`+(t?t.replace(tn,"")+"/":"")+a}function qo(n,e,t,o,a){return(yn(e)?e:n).replace(tn,"")+`/src/${o}/`+(t?t.replace(tn,"")+"/":"")+a+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}const Lo={class:"edit-link"},Mo=["href"],Po=y({__name:"EditLink",setup(n){const{url:e,text:t}=Co();return(o,a)=>(u(),d("div",Lo,[i(e)?(u(),d("a",{key:0,class:"link",href:i(e),target:"_blank",rel:"noopener noreferrer"},[j(p(i(t))+" ",1),w(wn,{class:"icon"})],8,Mo)):f("",!0)]))}});var No=_(Po,[["__scopeId","data-v-55695e90"]]);const Eo={key:0,class:"last-updated"},Wo={class:"prefix"},jo={class:"datetime"},Bo=y({__name:"LastUpdated",setup(n){const{theme:e,page:t}=R(),o=v(()=>{const l=e.value.lastUpdated;return l!==void 0&&l!==!1}),a=v(()=>{const l=e.value.lastUpdated;return l===!0?"Last Updated":l}),s=L("");return P(()=>{s.value=new Date(t.value.lastUpdated).toLocaleString("en-US")}),(l,h)=>i(o)?(u(),d("p",Eo,[r("span",Wo,p(i(a))+":",1),r("span",jo,p(s.value),1)])):f("",!0)}});var Do=_(Bo,[["__scopeId","data-v-30c3cbb4"]]);const Fo={class:"page-footer"},Yo={class:"edit"},Oo={class:"updated"},Go=y({__name:"PageFooter",setup(n){return(e,t)=>(u(),d("footer",Fo,[r("div",Yo,[w(No)]),r("div",Oo,[w(Do)])]))}});var Jo=_(Go,[["__scopeId","data-v-5c96fb00"]]);function Vo(){const{page:n,theme:e}=R(),t=v(()=>te(gn(n.value.relativePath))),o=v(()=>{const c=vn(e.value.sidebar,t.value);return fn(c)?oe(c):[]}),a=v(()=>o.value.findIndex(c=>c.link===t.value)),s=v(()=>{if(e.value.nextLinks!==!1&&a.value>-1&&a.value<o.value.length-1)return o.value[a.value+1]}),l=v(()=>{if(e.value.prevLinks!==!1&&a.value>0)return o.value[a.value-1]}),h=v(()=>!!s.value||!!l.value);return{next:s,prev:l,hasLinks:h}}const zo={},Uo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ko=r("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Xo=[Ko];function Qo(n,e){return u(),d("svg",Uo,Xo)}var Zo=_(zo,[["render",Qo]]);const na={},ea={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ta=r("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),oa=[ta];function aa(n,e){return u(),d("svg",ea,oa)}var sa=_(na,[["render",aa]]);const ia={key:0,class:"next-and-prev-link"},ra={class:"container"},la={class:"prev"},ua=["href"],ca={class:"text"},ha={class:"next"},da=["href"],ma={class:"text"},ga=y({__name:"NextAndPrevLinks",setup(n){const{hasLinks:e,prev:t,next:o}=Vo();return(a,s)=>i(e)?(u(),d("div",ia,[r("div",ra,[r("div",la,[i(t)?(u(),d("a",{key:0,class:"link",href:i(H)(i(t).link)},[w(Zo,{class:"icon icon-prev"}),r("span",ca,p(i(t).text),1)],8,ua)):f("",!0)]),r("div",ha,[i(o)?(u(),d("a",{key:0,class:"link",href:i(H)(i(o).link)},[r("span",ma,p(i(o).text),1),w(sa,{class:"icon icon-next"})],8,da)):f("",!0)])])])):f("",!0)}});var pa=_(ga,[["__scopeId","data-v-e65a9748"]]);const fa={class:"page"},ya={class:"container"},va=y({__name:"Page",setup(n){return(e,t)=>{const o=en("Content");return u(),d("main",fa,[r("div",ya,[C(e.$slots,"top",{},void 0,!0),w(o,{class:"content"}),w(Jo),w(pa),C(e.$slots,"bottom",{},void 0,!0)])])}}});var wa=_(va,[["__scopeId","data-v-8fcebc32"]]);const ba={key:0,id:"ads-container"},_a=y({__name:"Layout",setup(n){const e=qe(()=>On(()=>import("./Home.eade6b7c.js"),["assets/Home.eade6b7c.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.39d45426.js","assets/framework.3a6555e1.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/preload-helper.1c052cf7.js"])),t=()=>null,o=t,a=t,s=t,l=Y(),{site:h,page:c,theme:m,frontmatter:g}=R(),S=v(()=>!!g.value.customLayout),A=v(()=>!!g.value.home),b=v(()=>Object.keys(h.value.langs).length>1),k=v(()=>{const x=m.value;return g.value.navbar===!1||x.navbar===!1?!1:h.value.title||x.logo||x.repo||x.nav}),I=L(!1),N=v(()=>g.value.home||g.value.sidebar===!1?!1:!kt(vn(m.value.sidebar,l.data.relativePath))),sn=x=>{I.value=typeof x=="boolean"?x:!I.value},ve=sn.bind(null,!1);K(l,ve);const we=v(()=>[{"no-navbar":!k.value,"sidebar-open":I.value,"no-sidebar":!N.value}]);return(x,In)=>{const be=en("Content"),_e=en("Debug");return u(),d(T,null,[r("div",{class:M(["theme",i(we)])},[i(k)?(u(),$(mo,{key:0,onToggle:sn},{search:D(()=>[C(x.$slots,"navbar-search",{},()=>[i(m).algolia?(u(),$(i(s),{key:0,options:i(m).algolia,multilang:i(b)},null,8,["options","multilang"])):f("",!0)])]),_:3})):f("",!0),w(To,{open:I.value},{"sidebar-top":D(()=>[C(x.$slots,"sidebar-top")]),"sidebar-bottom":D(()=>[C(x.$slots,"sidebar-bottom")]),_:3},8,["open"]),r("div",{class:"sidebar-mask",onClick:In[0]||(In[0]=hr=>sn(!1))}),i(S)?(u(),$(be,{key:1})):i(A)?C(x.$slots,"home",{key:2},()=>[w(i(e),null,{hero:D(()=>[C(x.$slots,"home-hero")]),features:D(()=>[C(x.$slots,"home-features")]),footer:D(()=>[C(x.$slots,"home-footer")]),_:3})]):(u(),$(wa,{key:3},{top:D(()=>[C(x.$slots,"page-top-ads",{},()=>[i(m).carbonAds&&i(m).carbonAds.carbon?(u(),d("div",ba,[(u(),$(i(o),{key:"carbon"+i(c).relativePath,code:i(m).carbonAds.carbon,placement:i(m).carbonAds.placement},null,8,["code","placement"]))])):f("",!0)]),C(x.$slots,"page-top")]),bottom:D(()=>[C(x.$slots,"page-bottom"),C(x.$slots,"page-bottom-ads",{},()=>[i(m).carbonAds&&i(m).carbonAds.custom?(u(),$(i(a),{key:"custom"+i(c).relativePath,code:i(m).carbonAds.custom,placement:i(m).carbonAds.placement},null,8,["code","placement"])):f("",!0)])]),_:3}))],2),w(_e)],64)}}}),Sa={class:"theme"},ka=r("h1",null,"404",-1),Ia=["href"],Ra=y({__name:"NotFound",setup(n){const{site:e}=R(),t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function o(){return t[Math.floor(Math.random()*t.length)]}return(a,s)=>(u(),d("div",Sa,[ka,r("blockquote",null,p(o()),1),r("a",{href:i(e).base,"aria-label":"go to home"},"Take me home.",8,Ia)]))}}),xa={Layout:_a,NotFound:Ra};class Ta{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class bn{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const t=document.getElementById(e);if(t)this.canvas=t,this.ctx=t.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=bn.getPoint(this.dustQuantity);for(let t of e){const o=new Ta;this.buildDust(t[0],t[1],o),this.dustArr.push(o)}setInterval(()=>{this.play()},40)}}play(){var t;const e=this.dustArr;(t=this.ctx)==null||t.clearRect(0,0,this.width,this.height);for(let o of e)if(o.x<0||o.y<0){const a=this.width,s=Math.floor(Math.random()*window.innerHeight);o.x=a,o.y=s,this.buildDust(a,s,o)}else{const a=o.x-o.vx,s=o.y-o.vy;this.buildDust(a,s,o)}}buildDust(e,t,o){const a=this.ctx;e&&(o.x=e),t&&(o.y=t),a&&(a.beginPath(),a.shadowBlur=o.shadowBlur,a.shadowColor=o.color,a.shadowOffsetX=o.shadowX,a.shadowOffsetY=o.shadowY,a.ellipse(o.x,o.y,o.radiusX,o.radiusY,o.rotation,0,Math.PI*2),a.closePath(),a.fillStyle=o.color,a.fill())}resize(){const e=this.canvas,t=window.innerWidth,o=window.innerHeight;this.width=t,this.height=o,this.dustQuantity=Math.floor((t+o)/38),e!==void 0&&(e.width=t,e.height=o)}static getPoint(e=1){let t=[];for(let o=0;o<e;o++){const a=Math.floor(Math.random()*window.innerWidth),s=Math.floor(Math.random()*window.innerHeight);t.push([a,s])}return t}}const Aa=n=>{const e=localStorage.getItem(n);return e&&JSON.parse(e)},Yn=(n,e)=>{localStorage.setItem(n,JSON.stringify(e))};function Ca(n){let e=n[0];for(let t=1;t<n.length;t++){const o=n[t];o.length>e.length&&(e=o)}return e}function ue(n,e){return Array.from(n).filter(a=>e.test(a.nodeName))}function ce(n,e){let t,o,a=0;return function(){t=this,o=arguments;let s=new Date().valueOf();s-a>e&&(n.apply(t,o),a=s)}}const $a=n=>{n.forEach(e=>{const t=new Image;t.src=e})};const Ha=y({__name:"BgToggle",props:{bgUrl:String},setup(n){const{theme:e}=R(),t=e.value.bgUrls,o=L(0),a=Le("setBg");an(()=>{a(t[o.value])}),Me(()=>{$a(t)}),P(()=>{s()});const s=()=>{const h=Aa("bgIdx");h==null?Yn("bgIdx",o.value):o.value=h},l=()=>{o.value>=t.length-1?o.value=0:o.value++,Yn("bgIdx",o.value)};return(h,c)=>(u(),d("i",{class:"fa fa-retweet bg-toggle",title:"toggle background",onClick:l}))}});var qa=_(Ha,[["__scopeId","data-v-2dc83b4c"]]);const La=n=>(E("data-v-7d636702"),n=n(),W(),n),Ma={class:"menu-list"},Pa=La(()=>r("a",{href:""},[r("i",{class:"fa fa-navicon"})],-1)),Na=[Pa],Ea=["href"],Wa=["title"],ja=y({__name:"index",setup(n){const{theme:e,page:t}=R(),o=e.value.nav,a=L(!0),s=v(()=>`/${t.value.relativePath.split(".")[0]}`),l=()=>{a.value=!a.value};return(h,c)=>(u(),d("header",null,[r("nav",null,[r("ul",Ma,[r("li",{class:"nav-toggle",onClick:l},Na),a.value?(u(!0),d(T,{key:0},q(i(o),m=>(u(),d("li",{class:M(m.link===i(s)?"active":"")},[(u(),d("a",{href:m.link,key:m.link},[r("i",{class:M(`fa fa-${m.icon}`),title:m.text},null,10,Wa)],8,Ea))],2))),256)):f("",!0),r("li",null,[w(qa)])])])]))}});var Ba=_(ja,[["__scopeId","data-v-7d636702"]]);const Da={key:0,class:"social-links"},Fa=["href"],Ya=["title"],Oa=y({__name:"SocialLinks",setup(n){const{theme:e}=R();return(t,o)=>i(e).socialLinks.length?(u(),d("div",Da,[(u(!0),d(T,null,q(i(e).socialLinks,a=>(u(),d("a",{key:a.link,href:a.link,target:"_blank"},[r("i",{class:M(`fa fa-${a.icon}`),title:a.text},null,10,Ya)],8,Fa))),128))])):f("",!0)}});var Ga=_(Oa,[["__scopeId","data-v-1c971fe0"]]);const _n=n=>(E("data-v-1d916c1f"),n=n(),W(),n),Ja={key:0,class:"aside-wrapper"},Va={href:"/",class:"logo"},za=["src"],Ua={class:"center dr"},Ka={href:"/"},Xa={class:"total"},Qa=["href"],Za=_n(()=>r("span",{class:"total-title"},"Archives Total",-1)),ns={class:"total-number"},es={class:"total-tags"},ts=_n(()=>r("span",{class:"total-title"},"Tags:",-1)),os={class:"total-number"},as={class:"total-categories"},ss=_n(()=>r("span",{class:"total-title"},"Categories:",-1)),is={class:"total-number"},rs=y({__name:"index",setup(n){const{site:e,theme:t,frontmatter:o}=R(),a=e.value.title,s=t.value.logo,l=t.value.posts.length,h=Object.keys(t.value.tags).length,c=Object.keys(t.value.cats).length,m=v(()=>o.value.sidebar);return(g,S)=>i(m)?(u(),d("div",Ja,[r("aside",null,[r("div",null,[r("a",Va,[r("img",{src:i(H)(i(s)),alt:"Logo"},null,8,za)]),r("h1",Ua,[r("a",Ka,"Dr."+p(i(a)),1)]),r("section",Xa,[r("a",{class:"total-archives",href:i(H)("/pages/archives")},[Za,r("span",ns,p(i(l)),1)],8,Qa),r("div",es,[ts,r("span",os,p(i(h)),1)]),r("div",as,[ss,r("span",is,p(i(c)),1)])]),w(Ga)])])])):f("",!0)}});var ls=_(rs,[["__scopeId","data-v-1d916c1f"]]);const us={class:"message-wrapper"},cs=y({__name:"Message",props:{type:{type:String,required:!0},msg:{type:String,required:!0}},setup(n){return(e,t)=>(u(),d("div",us,[r("span",null,p(n.msg.value),1)]))}});var hs=_(cs,[["__scopeId","data-v-716cb212"]]);const Q=B({type:"success",msg:""}),ds=(n=Q.type,e,t)=>{Q.type=n,Q.msg=e;const o=ne(hs,{...U(Q)}).mount(document.createElement("div"));document.body.appendChild(o.$el),setTimeout(()=>{document.body.removeChild(o.$el)},t)},he={success(n,e=1e3){ds("success",n,e)},install(n){n.config.globalProperties.message=he}};class ms{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async t=>{const o=document.createElement("i");o.setAttribute("class","btn-copy fa fa-clipboard"),t.appendChild(o),o.addEventListener("click",function(){const a=document.createElement("textarea"),s=o.previousElementSibling;a.value=s.innerText,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),he.success("Copied!")})})}}const gs=n=>(E("data-v-4e6f6b2a"),n=n(),W(),n),ps={class:"post-header"},fs={class:"title"},ys={class:"info"},vs={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},ws=gs(()=>r("div",{class:"divider"},null,-1)),bs=y({__name:"PostHeader",setup(n){const{frontmatter:e}=R();let t=v(()=>e.value.title),o=v(()=>{const a=e.value.date;return(a?new Date(a).toJSON().split("T")[0]:"").split("-")});return(a,s)=>(u(),d("div",ps,[r("h1",fs,p(i(t)),1),r("div",ys,[r("span",vs,p(i(o)[2])+" / "+p(i(o)[1])+" / "+p(i(o)[0]),1)]),ws]))}});var _s=_(bs,[["__scopeId","data-v-4e6f6b2a"]]);const Sn=n=>(E("data-v-f9cae6c6"),n=n(),W(),n),Ss={class:"post-footer"},ks=Sn(()=>r("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),Is=["href"],Rs=Sn(()=>r("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),xs=["href"],Ts=Sn(()=>r("li",null,[r("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),j(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),r("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),j(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),As=y({__name:"PostFooter",setup(n){const{page:e,site:t,frontmatter:o}=R();let a=v(()=>{const s=`${e.value.relativePath.split(".")[0]}.html`;return`${t.value.themeConfig.website}/${s}`});return v(()=>o.value.postFooter),(s,l)=>(u(),d("div",Ss,[r("ul",null,[r("li",null,[ks,r("a",{href:i(t).themeConfig.website,target:"_blank"},p(i(t).title),9,Is)]),r("li",null,[Rs,r("a",{href:i(a),target:"_blank"},p(i(a)),9,xs)]),Ts])]))}});var Cs=_(As,[["__scopeId","data-v-f9cae6c6"]]);const de=n=>(E("data-v-22a9c1c0"),n=n(),W(),n),$s={class:"prev-next"},Hs=de(()=>r("hr",null,null,-1)),qs=["href"],Ls={key:1},Ms=["href"],Ps={key:1},Ns=de(()=>r("hr",null,null,-1)),Es=y({__name:"PrevNext",setup(n){const{theme:e,page:t}=R(),o=v(()=>e.value.posts),a=v(()=>t.value.frontmatter.title);let s=B({regularPath:"",frontMatter:{title:""}}),l=B({regularPath:"",frontMatter:{title:""}});const h=(c,m)=>{m?(c.regularPath=m.regularPath,c.frontMatter.title=m.frontMatter.title):(c.regularPath="",c.frontMatter.title="")};return an(()=>{const c=o.value.findIndex(m=>m.frontMatter.title===a.value);if(c>-1){const m=o.value[c-1],g=o.value[c+1];h(s,m),h(l,g)}}),(c,m)=>{var g,S,A,b,k,I;return u(),d("div",$s,[Hs,r("div",null,[hn(r("a",{class:"prev",href:i(H)((g=i(s))==null?void 0:g.regularPath)},[i(e).docFooter.prev.icon?(u(),d("i",{key:0,class:M(`fa fa-${i(e).docFooter.prev.icon}`)},null,2)):f("",!0),i(e).docFooter.prev.text?(u(),d("span",Ls,p(i(e).docFooter.prev.text),1)):f("",!0),j(" "+p((A=(S=i(s))==null?void 0:S.frontMatter)==null?void 0:A.title),1)],8,qs),[[Mn,i(s).regularPath]]),hn(r("a",{class:"next",href:i(H)((b=i(l))==null?void 0:b.regularPath)},[j(p((I=(k=i(l))==null?void 0:k.frontMatter)==null?void 0:I.title)+" ",1),i(e).docFooter.next.icon?(u(),d("i",{key:0,class:M(`fa fa-${i(e).docFooter.next.icon}`)},null,2)):f("",!0),i(e).docFooter.next.text?(u(),d("span",Ps,p(i(e).docFooter.next.text),1)):f("",!0)],8,Ms),[[Mn,i(l).regularPath]])]),Ns])}}});var Ws=_(Es,[["__scopeId","data-v-22a9c1c0"]]);const me=n=>(E("data-v-413ae51b"),n=n(),W(),n),js=me(()=>r("i",{class:"fa fa-caret-up"},null,-1)),Bs=me(()=>r("p",null,"TOP",-1)),Ds=[js,Bs],Fs=y({__name:"BackTop",setup(n){const e=L(0),t=v(()=>e.value>300?"block":"none");P(()=>{window.addEventListener("scroll",a)}),X(()=>{window.removeEventListener("scroll",a)});const o=()=>{e.value=document.documentElement.scrollTop},a=ce.bind(this,o,1e3)(),s=()=>{const l=document.documentElement.scrollTop/6,h=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-l,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(h)},50)};return(l,h)=>(u(),d("div",{class:"back-top",style:Kn({display:i(t)}),onClick:s},Ds,4))}});var Ys=_(Fs,[["__scopeId","data-v-413ae51b"]]);function Os(n="2022-01-01"){const e=new Date(n),t=new Date().getTime()-e.getTime(),o=24*60*60*1e3,a=t/o,s=Math.floor(a),l=(a-s)*24,h=Math.floor(l),c=(l-h)*60,m=Math.floor(c),g=(c-m)*60,S=Math.floor(g);return{day:s,hour:h,minute:m,second:S}}const Gs=()=>{const n=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=n})};const kn=n=>(E("data-v-514ed06b"),n=n(),W(),n),Js=kn(()=>r("i",{class:"fa fa-heartbeat mr4"},null,-1)),Vs=Pe('<p data-v-514ed06b> Published With <a href="https://vitejs.cn/vitepress/" target="_blank" data-v-514ed06b>VitePress</a> &amp; <a href="https://github.com/Yue-plus/hexo-theme-arknights" target="_blank" class="mr4" data-v-514ed06b>Arknights</a><a href="https://travellings.link/" target="_blank" data-v-514ed06b><i class="fa fa-paper-plane-o" title="Travellings" data-v-514ed06b></i></a></p><p data-v-514ed06b> Mirror Hosting <a href="https://wonderven.netlify.app/" target="_blank" data-v-514ed06b>Netlify</a></p>',2),zs=kn(()=>r("div",null,[r("span",null,"\xA9"),r("span",null,"2021 to 2022")],-1)),Us=kn(()=>r("div",null,[r("span",null,"ICP"),r("span",null,"\u2014 RHODEISLAND \u2014")],-1)),Ks=y({__name:"Footer",setup(n){const{theme:e}=R(),t=L();let o=B({day:0,hour:0,minute:0,second:0}),a=null;P(()=>{e.value.footer.runtime.enable&&(a=setInterval(s,1e3))}),X(()=>{a&&clearInterval(a)});const s=()=>{const l=Os();o.day=l.day,o.hour=l.hour,o.minute=l.minute,o.second=l.second};return(l,h)=>(u(),d("footer",null,[i(e).footer.runtime.enable?(u(),d("p",{key:0,ref_key:"runtimeRef",ref:t},[Js,j(" "+p(i(o).day)+" days "+p(i(o).hour)+" hours "+p(i(o).minute)+" minutes and "+p(i(o).second)+" seconds ",1)],512)):f("",!0),Vs,i(e).footer.copyright?(u(),d(T,{key:1},[zs,Us],64)):f("",!0)]))}});var Xs=_(Ks,[["__scopeId","data-v-514ed06b"]]);const ge=/^H[1-6]{1,}$/,Qs=n=>{const e=n.childNodes,t=ue(e,ge);return Zs(t)};function Zs(n){const e=[];for(let t=0;t<n.length;t++){const o=n[t],a=/^(_\d{1,})+(-\d{1,})*/ig,s=o.id.match(a)[0];e.push({nodeName:o.nodeName,text:o.innerText.slice(0,o.innerText.length-1),id:o.id,level:s})}return ni(e)}function ni(n){const e=[],t={};n.forEach(o=>{t[o.level]=o});for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const a=t[o];if(/^(_\d{1,})+$/ig.test(o))e.push(a);else{const h=Object.keys(t).filter(m=>m!==o&&o.includes(m)),c=Ca(h);t[c].child?t[c].child.push(a):t[c].child=[a]}}return e}const ei=["href","name","title","onClick"],ti=y({__name:"CataList",props:{tree:Array},setup(n){const e=t=>{t.open=!t.open,t.active=!0};return(t,o)=>(u(),d("ul",null,[(u(!0),d(T,null,q(n.tree,a=>{var s;return u(),d("li",{key:a.id},[r("a",{href:`#${a.id}`,name:a.id,title:a.text,class:M([[a.nodeName,a.active?"active":""],"link"]),onClick:l=>e(a)},p(a.text),11,ei),((s=a.child)==null?void 0:s.length)&&a.open?(u(),$(pe,{key:0,tree:a.child},null,8,["tree"])):f("",!0)])}),128))]))}});var pe=_(ti,[["__scopeId","data-v-33c6374d"]]);const oi={key:0,class:"catalog"},ai=y({__name:"index",setup(n){const{frontmatter:e}=R(),t=L(0),o=L(0),a=B({data:[]}),s=B({titleNodes:[],titleMargins:[]});K(e,(b,k)=>{l()},{deep:!0}),P(()=>{l(),window.addEventListener("scroll",c)}),X(()=>{window.removeEventListener("scroll",c)});const l=()=>{var I;const b=(I=document.getElementById("content"))==null?void 0:I.childNodes[0],k=Qs(b);a.data=k,o.value=b.getBoundingClientRect().top,g(b)},h=()=>{t.value=document.documentElement.scrollTop,m()},c=ce.bind(this,h,50)(),m=()=>{const b=s.titleMargins;for(let k=0;k<b.length;k++){const I=b[k];if(I.top-t.value>=o.value){A(a.data),S(a.data,I.id);return}}},g=b=>{const k=b.childNodes;s.titleNodes=ue(k,ge);const I=s.titleNodes.map(N=>({id:N.id,top:N.getBoundingClientRect().top}));s.titleMargins=I,m()},S=(b,k)=>{for(let I=0;I<b.length;I++){const N=b[I];if(N.id===k){N.active=!0,N.open=!0;return}N.child&&S(N.child,k)}},A=b=>{for(let k=0;k<b.length;k++){const I=b[k];I.active&&(I.active=!1),I.child&&A(I.child)}};return(b,k)=>a.data.length?(u(),d("div",oi,[w(pe,{tree:a.data},null,8,["tree"])])):f("",!0)}});var si=_(ai,[["__scopeId","data-v-32f802b6"]]);const ii={key:0,class:"post-tag"},ri=r("i",{class:"fa fa-tags"},null,-1),li=["href"],ui=y({__name:"index",setup(n){const{frontmatter:e}=R(),t=v(()=>e.value.page),o=v(()=>e.value.tags||[]);P(()=>{a()}),Un(()=>{a()});const a=()=>{t.value||new ms};return(s,l)=>{const h=en("Content");return u(),d("div",{class:M(["content",i(t)?"":"post-content"]),id:"postContent"},[i(t)?f("",!0):(u(),$(_s,{key:0})),w(h,{id:"content"}),i(t)?f("",!0):(u(),d(T,{key:1},[i(o).length?(u(),d("p",ii,[ri,(u(!0),d(T,null,q(i(o),c=>(u(),d("a",{key:c,href:`/pages/archives#tag=${c}`},p(c),9,li))),128))])):f("",!0),w(Cs),w(Ws),w(Ys),w(si)],64)),w(Xs)],2)}}}),ci=()=>G("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"});const hi={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},di=y({__name:"App",setup(n){const{theme:e}=R(),t=L("111111111111");return Ne("setBg",o=>{t.value=o}),P(()=>{new bn("canvas-dust")}),(o,a)=>(u(),d(T,null,[r("main",{class:"layout",style:Kn({"background-image":`url(${t.value})`})},[w(ls,{class:"aside"}),w(ui,{class:"content"}),w(Ba,{class:"navbar"})],4),i(e).live2d?(u(),$(i(ci),{key:0,class:"l2d-model"})):f("",!0),r("canvas",hi,null,512)],64))}});var mi=_(di,[["__scopeId","data-v-52e49cdc"]]);const gi=["href"],pi={class:"post-info"},fi={class:"post-info-categories"},yi=["href"],vi={key:1,href:"#"},wi={class:"post-info-tags"},bi=["href"],_i={key:1,href:"#"},Si={datetime:"2022-01-25T19:21:35.000Z"},ki=["innerHTML"],Ii={class:"post-excerpt"},Ri=["innerHTML"],xi=r("span",{class:"post-btn"},"READ MORE +",-1),Ti=y({__name:"PostItem",props:{article:{type:Object,required:!0}},setup(n){return(e,t)=>(u(),d("a",{href:i(H)(n.article.regularPath),class:"post-item"},[r("div",pi,[r("div",null,[r("span",fi,[n.article.frontMatter.category&&n.article.frontMatter.category.length?(u(!0),d(T,{key:0},q(n.article.frontMatter.category,o=>(u(),d("a",{key:o,href:i(H)(`/pages/archives#category=${o}`)},p(o),9,yi))),128)):(u(),d("a",vi,"Empty"))]),r("span",wi,[n.article.frontMatter.tags&&n.article.frontMatter.tags.length?(u(!0),d(T,{key:0},q(n.article.frontMatter.tags,o=>(u(),d("a",{key:o,href:i(H)(`/pages/archives#tag=${o}`)},p(o),9,bi))),128)):(u(),d("a",_i," Empty "))])]),r("time",Si,p(n.article.frontMatter.dateArr[2])+" / "+p(n.article.frontMatter.dateArr[1])+" / "+p(n.article.frontMatter.dateArr[0]),1)]),r("h1",{class:"post-title",innerHTML:n.article.frontMatter.title},null,8,ki),r("div",Ii,[typeof n.article.frontMatter.description=="string"?(u(),d("p",{key:0,innerHTML:n.article.frontMatter.description},null,8,Ri)):(u(!0),d(T,{key:1},q(n.article.frontMatter.description,o=>(u(),d("p",{key:o},p(o),1))),128))]),xi],8,gi))}});var Ai=[{title:"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883
VitePress(Vue3 + TS)
2. \u601D\u8DEF

\u8BBE\u7F6E\u6587\u7AE0\u5BB9\u5668 id\uFF0C\u67E5\u627E\u5BB9\u5668\u5185\u6240\u6709 h1-h6 \u76F4\u63A5\u5B50\u8282\u70B9\uFF1B
\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5217\u8868\uFF0C\u904D\u5386\u8282\u70B9\u5217\u8868\uFF0C\u83B7\u53D6\u8282\u70B9\u4FE1\u606F\uFF0C\u5C01\u88C5\u4E3A\u5BF9\u8C61\uFF0C\u4FDD\u5B58\u5230\u521B\u5EFA\u7684\u5217\u8868\u4E2D\uFF1B\u5982\u679C\u5305\u542B\u5B50\u8282\u70B9\uFF0C\u7EE7\u7EED\u9012\u5F52\u904D\u5386\uFF1B
\u89E3\u6790\u6570\u636E\uFF0C\u5C55\u793A\u6587\u7AE0\u76EE\u5F55\u3002

3. \u5B9E\u73B0
3.1. \u6570\u636E\u7ED3\u6784\u8BBE\u8BA1
type ICatalog = {
    id: string, // unique title id
    nodeName: string, // title tag name
    text: string, // display text
    child: Array&lt;ICatalog&gt; // sub title
}

3.2. \u521B\u5EFA\u6587\u7AE0\u6807\u9898\u76EE\u5F55\u6570\u636E
// catalog.ts

/**
 * \u83B7\u53D6\u6587\u7AE0\u76EE\u5F55
 * @param container \u6587\u7AE0\u5BB9\u5668
 * @returns \u76EE\u5F55\u6811
 */
 export const getCatalogTree = (container: HTMLElement): Array&lt;ICatalog&gt; =&gt; {
    // \u6240\u6709\u5B50\u8282\u70B9
    const children: NodeList = container.childNodes as NodeList
    // \u8FC7\u6EE4\u6807\u9898\u8282\u70B9
    const hReg = /^H[1-6]{1,}$/ig
    const hNodes: Node[] = filterNodeByTag(children, hReg)
    // \u521B\u5EFA\u76EE\u5F55\u6811
    const tree: ICatalog[] = createTree(hNodes as HTMLElement[])
    return tree
}

/**
 * \u521B\u5EFA\u76EE\u5F55\u6811
 * @param htmlList html \u8282\u70B9\u5217\u8868
 * @returns \u76EE\u5F55\u6811
 */
function createTree(htmlList: HTMLElement[]): ICatalog[] {
    const list = []
    for (let i = 0; i &lt; htmlList.length; i++) {
        const item = htmlList[i];
        // \u5339\u914D\u5C42\u7EA7\u6807\u8BC6
        const levelReg = /^(_\\d)+(-\\d)*/ig
        // \u4E3A\u6BCF\u4E2A\u8282\u70B9\u8BBE\u7F6E\u5C42\u7EA7\u6807\u8BC6
        const level = (item.id.match(levelReg) as string[])[0]

        list.push({
            nodeName: item.nodeName,
            text: item.innerText.slice(0, item.innerText.length - 1),
            id: item.id,
            level: level
        })
    }
    return arrToTree(list)
}
/**
 * \u6570\u7EC4\u8F6C\u6811
 * @param arr 
 * @returns 
 */
function arrToTree(arr: ICatalog[]) {
    const result = []
    const obj: any = {} // \u4E34\u65F6map
    arr.forEach(item =&gt; {
        obj[item.level] = item
    })

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const item = obj[key];
            const firstLevReg = /^(_\\d)+$/ig // \u5224\u65AD\u4E00\u7EA7\u6807\u9898
            const isFirstLevel = firstLevReg.test(key)

            if (isFirstLevel) { // \u4E00\u7EA7\u6807\u9898
                result.push(item)
            } else { // \u4E0B\u7EA7\u6807\u9898
                // \u8FC7\u6EE4\u4E0A\u7EA7\u6807\u9898
                const filters = Object.keys(obj).filter(str =&gt; {
                    return str !== key &amp;&amp; key.includes(str)
                })
                // \u67E5\u627E\u76F4\u63A5\u4E0A\u7EA7\u6807\u9898(\u6700\u957F\u7684)
                const topLevel: string = findMaxLenStr(filters)
                if (obj[topLevel].child) {
                    obj[topLevel].child.push(item)
                } else {
                    obj[topLevel].child = [item]
                }
            }
            
        }
    }
    return result
}

/**
 * filter html node by nodeName
 * @param list original node list
 * @param reg filter rule
 * @returns target html node
 */
export function filterNodeByTag(list: NodeList, reg: RegExp): Node[] {
    const hNodes: Node[] = Array.from(list).filter((item: Node) =&gt; {
        return reg.test(item.nodeName)
    })
    return hNodes
}
/**
 * \u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u7684\u5B57\u7B26\u4E32
 * @param arr \u76EE\u6807\u6570\u7EC4
 * @returns \u6700\u957F\u7684\u5B57\u7B26\u4E32s
 */
export function findMaxLenStr(arr: string[]): string {
    let res: string = arr[0]
    for (let i = 1; i &lt; arr.length; i++) {
        const item = arr[i];
        if (item.length &gt; res.length) {
            res = item
        }
    }
    return res
}

3.3. \u521B\u5EFA\u76EE\u5F55\u7EC4\u4EF6
&lt;!-- CataList.vue --&gt;
&lt;template&gt;
    &lt;ul&gt;
        &lt;li v-for=&quot;item in (tree as ICatalog[])&quot; :key=&quot;item.id&quot;&gt;
            &lt;a
                :href=&quot;\`#\${item.id}\`&quot;
                :name=&quot;item.id&quot;
                :title=&quot;item.text&quot;
                :class=&quot;[item.nodeName, item.active? &#39;active&#39; : &#39;&#39;]&quot;
                class=&quot;link&quot;
            &gt;
                {{item.text}}
            &lt;/a&gt;
            &lt;!-- \u9012\u5F52\u521B\u5EFA\u4E0B\u7EA7\u76EE\u5F55 --&gt;
            &lt;CataList v-if=&quot;item.child?.length&quot; :tree=&quot;item.child&quot;&gt;&lt;/CataList&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// \u9012\u5F52 \u81EA\u5F15\u7528
import CataList from &#39;./CataList.vue&#39;

const props = defineProps({
    tree: Array // \u76EE\u5F55\u6570\u636E
})

&lt;/script&gt;
&lt;style&gt;
/* cusotm style... */
&lt;/style&gt;

3.4. \u6E32\u67D3\u7EC4\u4EF6
&lt;!-- index.vue --&gt;
&lt;template&gt;
    &lt;div v-if=&quot;cataData.length&quot;&gt;
        &lt;Catalog :tree=&quot;cataData&quot;&gt;&lt;/Catalog&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, onMounted, onUpdated } from &quot;vue&quot;;
import { getCatalogTree } from &#39;./catalog.ts&#39;
import Catalog from &quot;./CataList.vue&quot;;

// catalog tree data
const cataData: ICatalog[] = reactive([])

onMounted(() =&gt; {
    init()
}),
onUpdated(() =&gt; {
    init()
})

// init catalog
const init = (): void =&gt; {
    // get tree data
    const contentDiv: ChildNode = document.getElementById(&#39;content&#39;)?.childNodes[0] as ChildNode // \u6B63\u6587\u5BB9\u5668
    cataData.push(...getCatalogTree(contentDiv))
}

&lt;/script&gt;

`,excerpt:"",url:"/posts\\Site\\catalog"},{title:"Build a free CDN\u3010Github + JSDelivr\u3011",content:`1. Create a public repository

2. Create a new release

3. Assets request
url template: https://cdn.jsdelivr.net/gh/user/repo@version/file
`,excerpt:"",url:"/posts\\Site\\cdn-github"},{title:"Hello world",content:`
`,excerpt:"",url:"/posts\\Site\\hello-world"},{title:"VitePress - Add live2d",content:`1. Environment

Vue3

2. Git repository
live2d-model &#x1F517; 
3. Theme config
Add a prop under themeConfig
// ~/.vitepress/config.js
themeConfig: {
    // custom proName
    live2d: true
}

3. Create a component
or by CDN directly.
// L2d.ts

// live2d
import { h } from &#39;vue&#39;

const L2d = () =&gt; {
    return(
        h(&#39;script&#39;, { src: &#39;https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js&#39; })
    )
}

export default L2d

5. Render
&lt;!-- ./Layout.vue --&gt;

&lt;template&gt;
    &lt;Content /&gt;
    &lt;!-- any where --&gt;
    &lt;L2d v-if=&quot;theme.live2d&quot; /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// import L2d ocmponent
import L2d from &#39;./L2d.ts&#39;
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Site\\l2d"},{title:"VitePress \u5B9E\u73B0\u672C\u5730\u641C\u7D22",content:`1. \u73AF\u5883

VitePress(Vue3 + TS)

2. \u601D\u8DEF

\u9879\u76EE\u521D\u59CB\u5316\u65F6\uFF0C\u751F\u6210\u7D22\u5F15\u8868
\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5217\u8868Array\uFF0C\u5B58\u653E\u6587\u4EF6\u89E3\u6790\u5BF9\u8C61\uFF1B
\u9012\u5F52\u904D\u5386.md\u6587\u4EF6\uFF0C\u901A\u8FC7\u63D2\u4EF6grayMatter\u89E3\u6790frontmatter\u4FE1\u606F\uFF0C\u5B58\u5165\u5217\u8868\u4E2D\uFF1B
\u904D\u5386\u5B8C\u6210\u540E\uFF0C\u5C06Array\u8F6C\u4E3Ajson\u5B57\u7B26\u4E32\uFF0C\u5199\u5165\u6587\u4EF6post.json\uFF0C\u5B58\u5165\u78C1\u76D8\uFF1B


\u521B\u5EFA\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E76\u76D1\u542Cinput\u503C\u6539\u53D8
\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165\u7D22\u5F15\u8868\uFF0C\u5C06\u6587\u7AE0\u6807\u9898title\u548C\u5185\u5BB9content\u5206\u522B\u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u8FC7\u6EE4\u51FA\u5339\u914D\u6210\u529F\u7684\u9879\u76EE\uFF1B
\u6E32\u67D3\u5339\u914D\u5230\u7684\u7ED3\u679C\u5230\u641C\u7D22\u5217\u8868\u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u5173\u952E\u5B57\u9AD8\u4EAE\u3002

3. \u641C\u7D22\u6A21\u5757\u4EE3\u7801
// ~/.vitepress/theme/util/search-map.js

import fs from &#39;fs&#39;; // \u6587\u4EF6\u6A21\u5757
import path from &#39;path&#39;; // \u8DEF\u5F84\u6A21\u5757
import grayMatter from &#39;gray-matter&#39; // \u89E3\u6790 frontmatter

// \u7D22\u5F15\u5217\u8868
const fileMap = [];

/**
 * \u83B7\u53D6\u76EE\u5F55\u6587\u4EF6\u7D22\u5F15
 * @param {string} targetDirPath \u9700\u8981\u904D\u5386\u7684\u76EE\u5F55
 */
export default function createFilesJson(targetDirPath) {
    // \u8BFB\u53D6\u6587\u4EF6\u5217\u8868
    fs.readdirSync(targetDirPath).forEach(function (name) {
        // \u83B7\u53D6\u6587\u4EF6\u5B8C\u6574\u8DEF\u5F84
        const filePath = path.join(targetDirPath, name);
        // \u83B7\u53D6\u6587\u4EF6\u4FE1\u606F
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
            // \u4FDD\u5B58\u6587\u4EF6\u7D22\u5F15\u5BF9\u8C61
            fileMap.push(getFileObj(filePath))
        } else if ( // \u8FC7\u6EE4\u5FFD\u7565\u6587\u4EF6\u5939
            stat.isDirectory() &amp;&amp;
            &quot;.git&quot;!=path.basename(filePath) &amp;&amp;
            &#39;_&#39; != path.basename(filePath).substr(0,1)
        ) {
            // \u9012\u5F52\u904D\u5386\u76EE\u5F55
            createFilesJson(filePath);
        }
    });

    // \u904D\u5386\u5B8C\u6210\uFF0C\u5C06 post.json \u5199\u5165\u6839\u76EE\u5F55
    fs.writeFileSync(path.resolve(&#39;./&#39;) + &#39;/post.json&#39;, JSON.stringify(fileMap));
}

/**
 * \u83B7\u53D6\u6587\u4EF6\u7D22\u5F15\u5BF9\u8C61
 * @param {string} filePath \u6587\u4EF6\u8DEF\u5F84
 * @returns {object} \u7D22\u5F15\u5BF9\u8C61
 */
 function getFileObj(filePath) {
    if ( // \u8FC7\u6EE4\u5FFD\u7565\u6587\u4EF6
        &quot;.md&quot; == path.extname(filePath).toLowerCase()
        &amp;&amp; &#39;_&#39; != path.basename(filePath).substr(0,1) 
        &amp;&amp; &#39;README.md&#39; != path.basename(filePath)
        ){
        // \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9
        let dataStr = fs.readFileSync(filePath, &#39;utf8&#39;)
        // \u89E3\u6790 frontmatter
        const matterObj = grayMatter(dataStr)
        
        // \u8FD4\u56DE\u7D22\u5F15\u5BF9\u8C61
        return {
            title: matterObj.data.title, // \u6807\u9898
            content: matterObj.content, // \u6B63\u6587
            excerpt: matterObj.excerpt, // \u6458\u8981
            filePath: filePath // \u6587\u4EF6\u8DEF\u5F84
        }
    }
}

4. \u9879\u76EE\u521D\u59CB\u5316\u751F\u6210\u7D22\u5F15\u6587\u4EF6
// ~/.vitepress/config.js
import createFilesJson from &#39;./theme/util/search-map.js&#39;
createFilesJson(&#39;./posts/&#39;)

5. \u521B\u5EFA\u641C\u7D22\u7EC4\u4EF6\uFF0C\u76D1\u542C\u5173\u952E\u5B57\u53D8\u5316
\u6837\u5F0F\u53EF\u81EA\u884C\u8C03\u6574
&lt;!-- search.vue --&gt;

&lt;template&gt;
    &lt;div&gt;
        &lt;!-- \u641C\u7D22\u8F93\u5165\u6846 --&gt;
        &lt;input type=&quot;text&quot; v-model=&quot;searchVal&quot;&gt;
        &lt;!-- \u641C\u7D22\u7ED3\u679C\u5217\u8868 --&gt;
        &lt;ul&gt;
            &lt;li
                v-for=&quot;item in resultList&quot;
                :key=&quot;item.title&quot;
            &gt;
                &lt;a :href=&quot;item.filePath&quot; @click=&quot;clearSearch&quot;&gt;
                    &lt;p v-html=&quot;item.title&quot;&gt;&lt;/p&gt;
                    &lt;p v-html=&quot;item.content&quot;&gt;&lt;/p&gt;
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;!-- \u641C\u7D22\u7ED3\u679C\u4E3A\u7A7A --&gt;
            &lt;li v-if=&quot;!resultList.length &amp;&amp; searchVal !== &#39;&#39;&quot;&gt;Empty&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, reactive, watchEffect, computed } from &quot;vue&quot;;
import postJson from &#39;/post.json&#39; // \u5F15\u5165\u751F\u6210\u7684 post.json
// \u5173\u952E\u5B57
const searchVal = ref(&#39;&#39;)
// \u641C\u7D22\u7ED3\u679C\u5217\u8868
let resultList = reactive([])

// \u76D1\u542C\u8F93\u5165
watchEffect(() =&gt; {
    localSearch(searchVal.value)
})

/**
 * \u672C\u5730\u641C\u7D22
 * @param key \u5173\u952E\u5B57
 */
function localSearch(key: string): void {
    resultList.length = 0
    if (key.trim() === &#39;&#39;) { // \u5224\u7A7A
        return
    }
    // \u904D\u5386\u7D22\u5F15\u8868
    postJson.forEach(item =&gt; {
        // \u5BF9\u8C61\u6DF1\u62F7\u8D1D
        const newItem = JSON.parse(JSON.stringify(item))
        // \u5173\u952E\u5B57\u6B63\u5219
        const reg = new RegExp(key, &#39;ig&#39;)
        // \u6807\u9898\u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u6CA1\u6709\u8FD4\u56DE null
        const titleMatches = newItem.title.match(reg)
        // \u5185\u5BB9\u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u6CA1\u6709\u8FD4\u56DE null
        const contentMatches = newItem.content.match(reg)
        
        if (titleMatches || contentMatches) {
            // \u5339\u914D\u5185\u5BB9\u9AD8\u4EAE
            newItem.content = highLight(key, newItem.content)
            newItem.title = highLight(key, newItem.title)
            // \u4FDD\u5B58\u5230\u7ED3\u679C\u5217\u8868
            resultList.push(newItem)
        }
    })
}

/**
 * \u5173\u952E\u5B57\u9AD8\u4EAE
 * @param key \u5173\u952E\u5B57
 * @param str \u539F\u5185\u5BB9
 * @return \u65B0\u5B57\u7B26\u4E32
 */
const highLight = (key: string, str: string): string =&gt; {
    const reg = new RegExp(key, &#39;ig&#39;)
    return str.replace(reg, \`&lt;span style=&quot;color: red&quot;&gt;\${key}&lt;/span&gt;\`)
}

// \u6E05\u7A7A\u641C\u7D22
 const clearSearch = () =&gt; {
    searchVal.value = &#39;&#39;
}

&lt;/script&gt;

`,excerpt:"",url:"/posts\\Site\\local-search"},{title:"PicGo \u514D\u8D39\u56FE\u5E8A\u642D\u5EFA",content:`1. \u73AF\u5883

PicGo  Download &#x1F517;  Document &#x1F517; 

GitHub


2. \u914D\u7F6E

\u521B\u5EFA\u4E00\u4E2A\u516C\u5F00\u4ED3\u5E93\u5B58\u653E\u56FE\u7247\u8D44\u6E90\uFF1B

\u83B7\u53D6 token: 
 \u521B\u5EFA\u6210\u529F\u540E\uFF0Ctoken \u53EA\u4F1A\u51FA\u73B0\u4E00\u6B21\uFF0C\u4E00\u5B9A\u8981\u53CA\u65F6\u4FDD\u7559\u3002 

PicGo \u56FE\u5E8A\u914D\u7F6E: 
 \u81EA\u5B9A\u4E49\u57DF\u540D\u683C\u5F0F\uFF1A

GitHub: https://raw.githubusercontent.com/user/repo/branch    
JSDelivr: https://cdn.jsdelivr.net/gh/user/repo@version(\u63A8\u8350) \u3010\u5173\u4E8E JSDelivr CDN \u7684\u4F7F\u7528\u3011



3. \u4E0A\u4F20
\u62D6\u62FD\u6216\u70B9\u51FB\u4E0A\u4F20\u6210\u529F\u540E\uFF0CPicGo \u5C06\u81EA\u52A8\u751F\u6210\u94FE\u63A5\u5728\u7C98\u8D34\u677F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u535A\u5BA2\u4E2D\u4F7F\u7528\u3002
`,excerpt:"",url:"/posts\\Site\\picgo"},{title:"Valine \u90AE\u4EF6\u63D0\u9192\u57FA\u7840\u914D\u7F6E",content:`\u7531\u4E8E\u5B98\u7F51\u66F4\u65B0\u540E\uFF0C\u65E9\u4E9B\u7684\u6587\u6863\u90E8\u5206\u5DF2\u7ECF\u4E0D\u9002\u7528\uFF0C\u6B64\u7BC7\u5C31\u5F53\u524D\u6700\u65B0\u5B98\u7F51\u8FDB\u884C\u8865\u5145\u3002
1. \u767B\u5F55 LeanCloud
\u56FD\u5185\u548C\u56FD\u5916\u7248\u672C\u90FD\u53EF\u4EE5\u3002
2. \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF


SITE_NAME : \u7F51\u7AD9\u540D\u79F0\u3002
SITE_URL : \u7F51\u7AD9\u5730\u5740, \u6700\u540E\u4E0D\u8981\u52A0 / \u3002
SMTP_USER : SMTP \u670D\u52A1\u7528\u6237\u540D\uFF0C\u4E00\u822C\u4E3A\u90AE\u7BB1\u5730\u5740\u3002
SMTP_PASS : SMTP \u5BC6\u7801\uFF0C\u4E00\u822C\u4E3A\u6388\u6743\u7801\uFF0C\u800C\u4E0D\u662F\u90AE\u7BB1\u7684\u767B\u9646\u5BC6\u7801\uFF0C\u8BF7\u81EA\u884C\u67E5\u8BE2\u5BF9\u5E94\u90AE\u4EF6\u670D\u52A1\u5546\u7684\u83B7\u53D6\u65B9\u5F0F\u3002
SMTP_SERVICE : \u90AE\u4EF6\u670D\u52A1\u63D0\u4F9B\u5546\uFF0C\u652F\u6301 QQ\u3001163\u3001126\u3001Gmail\u3001&quot;Yahoo&quot;\u3001...... \uFF0C\u5168\u90E8\u652F\u6301\u8BF7\u53C2\u8003 : Nodemailer Supported - services\u3002 --- \u5982\u8FD9\u91CC\u6CA1\u6709\u4F60\u4F7F\u7528\u7684\u90AE\u4EF6\u63D0\u4F9B\u5546\uFF0C\u8BF7\u67E5\u770B\u81EA\u5B9A\u4E49\u90AE\u4EF6\u670D\u52A1\u5668
SENDER_NAME : \u5BC4\u4EF6\u4EBA\u540D\u79F0\u3002

3. \u90E8\u7F72 Git \u9879\u76EE
\u4E91\u5F15\u64CE &gt; \u90E8\u7F72 &gt; \u90E8\u7F72\u9879\u76EE


   
\u586B\u5165\u9879\u76EE\u5730\u5740\uFF1A      
https://github.com/zhaojun1998/Valine-Admin.git

\u6CE8\u610F\uFF1A \u7531\u4E8E\u5F53\u524D\u6E90\u4ED3\u5E93\u914D\u7F6E\u7684 node \u7248\u672C\u662F 6.x\uFF0C\u8FC7\u4F4E\u53EF\u80FD\u4F1A\u5BFC\u81F4 npm \u62A5\u9519\uFF1B\u6240\u4EE5\u5982\u679C\u9047\u5230\u62A5\u9519\u53EF\u4EE5\u5148 fork \u8FD9\u4E2A\u9879\u76EE\u5230\u81EA\u5DF1\u4ED3\u5E93\uFF0C\u5C06 package.json \u4E2D\u7684 node \u7248\u672C\u6539\u6210 12.x \u6216\u4EE5\u4E0A\uFF0C\u5C31\u53EF\u4EE5\u6210\u529F\u90E8\u7F72\u4E86\u3002
4. \u70B9\u51FB\u90E8\u7F72\u6309\u94AE\uFF0C\u5F00\u59CB\u6784\u5EFA\u3002

`,excerpt:"",url:"/posts\\Site\\valine-email"},{title:"Flex alignment issue of the last element",content:`1. Issue
Flex layout:
div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
        width: calc(100% / 3); // 3 elements per row
    }
}

Render result:

Divided equally per row: elements have been normally rendered;

| item | item | item |
|------|------|------|
| item | item | item |
|------|------|------|
| item | item | item |


The last line is less than number of per row: elements are justified at both ends.

| item | item | item |
|------|------|------|
| item | item | item |
|------|------|------|
| item |      | item |

2. Solution

Keep the number of rows consistant;
Use pseudo-classes element(::before/::after) placeholders if the last row of elements is not enough;
Sets for the last element margin-[reverseDirec]: auto(recommond)\u3002

div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
        width: calc(100% / 3); // 3 elements per row
        &amp;:last-child {
            margin-right: auto // align to the left
            // margin-left: auto // align to the right
            // margin-top: auto // align to the bottom
            // margin-bottom: auto // align to the top
        }
    }
}

`,excerpt:"",url:"/posts\\Tech\\CSS\\flex-align"},{title:"CSS \u5E38\u7528\u5355\u4F4D",content:`\u76F8\u5BF9\u5355\u4F4D vs \u7EDD\u5BF9\u5355\u4F4D


\u7EDD\u5BF9\u5355\u4F4D\uFF1A\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u503C\uFF0C\u53CD\u5E94\u4E86\u4E00\u4E2A\u771F\u5B9E\u7684\u7269\u7406\u5C3A\u5BF8\u3002
\u76F8\u5BF9\u5355\u4F4D\uFF1A\u76F8\u5BF9\u4E8E\u53C2\u7167\u5143\u7D20\u7684\u5355\u4F4D\uFF0C\u968F\u53C2\u7167\u5143\u7D20\u53D8\u5316\u3002


1. \u7EDD\u5BF9\u5355\u4F4D
1.1. px
1px \u5BF9\u5E94\u663E\u793A\u5668\u5C4F\u5E55\u4E0A\u7684\u4E00\u4E2A\u663E\u793A\u50CF\u7D20\u70B9\u3002
2. \u76F8\u5BF9\u5355\u4F4D
2.1. em
\u76F8\u5BF9\u4E8E\u8BE5\u5143\u7D20\u7684 font-size \u5C5E\u6027\u51B3\u5B9A\uFF0C1em = 1[font-size]\u3002
2.2. rem(font size of the root element)
\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20(html)\u7684\u5B57\u4F53\u5927\u5C0F\u51B3\u5B9A\u3002
2.3. %

\u4E00\u822C\u5B50\u5143\u7D20\uFF1A height \u6216 width \u76F8\u5BF9\u4E8E\u76F4\u63A5\u7236\u5143\u7D20\u7684 height \u6216 width\uFF1B
\u975E relative \u5B9A\u4F4D\u7684\u5B50\u5143\u7D20\uFF1A
\u5B50\u5143\u7D20\u7684 left \u6216 right \u76F8\u5BF9\u4E8E\u76F4\u63A5\u975E static \u5B9A\u4F4D\u7236\u5143\u7D20\u7684 width\uFF1B
\u5B50\u5143\u7D20\u7684 top \u6216 bottom \u76F8\u5BF9\u4E8E\u76F4\u63A5\u975E static \u5B9A\u4F4D\u7236\u5143\u7D20\u7684 height\uFF1B


\u5B50\u5143\u7D20\u7684 padding \u6216 margin\uFF1A\u5782\u76F4\u548C\u6C34\u5E73\u65B9\u5411\u90FD\u76F8\u5BF9\u4E8E\u76F4\u63A5\u7236\u5143\u7D20\u7684 width\uFF1B
\u5B50\u5143\u7D20\u7684 border-radius, translate, background-size\uFF1A\u76F8\u5BF9\u4E8E\u5143\u7D20\u81EA\u8EAB\u7684 width\u3002

2.4. vw / vh
\u76F8\u5BF9\u4E8E\u5F53\u524D\u89C6\u53E3(view port)\u7684\u5BBD\u5EA6 / \u9AD8\u5EA6\u3002
2.5. vmin / vmax
\u76F8\u5BF9\u4E8E\u5F53\u524D\u89C6\u53E3\u5BBD\u5EA6(vw)\u548C\u9AD8\u5EA6(vh)\u7684\u6700\u5C0F\u503C\uFF08\u5E38\u7528\u4E8E APP \u6A2A\u5C4F\u9002\u914D\uFF09\u3002
`,excerpt:"",url:"/posts\\Tech\\CSS\\unit"},{title:"High-frequency Git CMD",content:`1. Global config
# global username
git config --global user.name &quot;xxx&quot;

# global email
git config --global user.email &quot;xxx@email.com&quot;

# show configured info
git config --global --list

# clean configured info
git config --global --unset [user.name]

2. Generate key
ssh-keygen -t rsa -C &quot;xxx@email.com&quot;

`,excerpt:"",url:"/posts\\Tech\\Git\\cmd"},{title:"Synchronize Git and Gitee repository",content:`1. Create a remote repository on Git and Gitee respectively
Such as:GitHub: git@github.com:wonderven/test.gitGitee: git@gitee.com:wonderven/test.git
2. Create and init a local repository
~/test/
$ git init

3. Connect one of the two remote repositories
$ git remote add origin git@github.com:wonderven/test.git

4. Open the config file under .git
This is now:
[core]
     repositoryformatversion = 0
     filemode = false
     bare = false
     logallrefupdates = true
     symlinks = false
     ignorecase = true
 [remote &quot;origin&quot;]
     url = git@github.com:wonderven/test.git # github repo
     fetch = +refs/heads/*:refs/remotes/origin/*
 [branch &quot;main&quot;]
     remote = origin
     merge = refs/heads/main

5. Add another remote repository url
~/.git/config
[core]
    repositoryformatversion = 0
    filemode = false
    bare = false
    logallrefupdates = true
    symlinks = false
    ignorecase = true
[remote &quot;origin&quot;]
    url = git@github.com:wonderven/test.git # github repo
    url = git@gitee.com:wonderven/test.git # gitee repo
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch &quot;main&quot;]
    remote = origin
    merge = refs/heads/main

6. Push
$ git push origin main

`,excerpt:"",url:"/posts\\Tech\\Git\\repo-sync"},{title:"GitHub\uFF1AAccess has been restricted?",content:`If your GitHub has been restricted...
1. Solution

Open the host file:C:\\Windows\\System32\\drivers\\etc\\host

Add the following:


# GitHub Start 
140.82.114.4 github.com
140.82.114.4 gist.github.com
185.199.108.153 assets-cdn.github.com
151.101.64.133 raw.githubusercontent.com
151.101.108.133 gist.githubusercontent.com
151.101.108.133 cloud.githubusercontent.com
151.101.108.133 camo.githubusercontent.com
151.101.108.133 avatars0.githubusercontent.com
151.101.108.133 avatars1.githubusercontent.com
151.101.108.133 avatars2.githubusercontent.com
151.101.108.133 avatars3.githubusercontent.com
151.101.108.133 avatars4.githubusercontent.com
151.101.108.133 avatars5.githubusercontent.com
151.101.108.133 avatars6.githubusercontent.com
151.101.108.133 avatars7.githubusercontent.com
151.101.108.133 avatars8.githubusercontent.com 
# GitHub End

`,excerpt:"",url:"/posts\\Tech\\Git\\restricted"},{title:"Multi-user configuration",content:`Add the file config to ~/.ssh.
# ~/.ssh/config

# site alias
Host github.com

# domain name
HostName github.com

# verify method
PreferredAuthentications publickey

# username(email better)
User user@email.com

# key file location
IdentityFile ~/.ssh/id_rsa

`,excerpt:"",url:"/posts\\Tech\\Git\\uconfig"},{title:"Use and customization of audio tag",content:`1. Basic
1.1. Usage

Create using HTML;

&lt;audio controls src=&quot;test.mp3&quot;&gt;&lt;/audio&gt;


Create using JavaScript.

// create
const Audio = new Audio(&quot;test.mp3&quot;);
// get element
const AudioEle = document.getElementsByTagName(&quot;audio&quot;)[0];
// Event listening
AudioEle.addEventListener(&#39;canplay&#39;, () =&gt; {
    // do something...
});

1.2. Tag prototype



Prop
Type
Des



src
String
File path.


autoplay
Boolean
Autoplay after resources have been loaded.


preload
Boolean
If the value is true, autoplay is invalidated.


controls
Boolean
Show/Display the default control widget.


loop
Boolean
Play audio in a loop.


2. API
2.1. Prototype



Prop
Type
Default
Des



duration
Number
NaN
Audio file duration(s).


currentTime
Number
0
Set/Get current played time(s).


currentSrc
String
-
Return current file path.


paused
Boolean
-
Whether current file is paused.


ended
Boolean
false
Whether current file finishes playing.


muted
Boolean
false
Set/Get mute state.


volume
Number
1
Control the volume value(0-1).


2.2. Function



Function
Params
Return
Des



load()
-
void
Load audio file.


play()
-
void
Load and play current audio.


pause()
-
void
Pause the audio that is playing.


canPlayType(obj)
obj: target file
Boolean
Test whether the target file is supported.


2.3. Event



Event
Des



durationchange()
Duration change.


canplay()
Whether the current file can be played.


timeupdate()
When the playing time changed.


ended()
When current audio finishes playing.


error()
The current file can not be played.


3. Customization
AudioPlayer.vue
`,excerpt:"",url:"/posts\\Tech\\HTML\\audio"},{title:"HTML tag [object] VS [embed]",content:`The two tags are both able to render media object such as audio, video, pdf and flash.Due to the compatibility depending on different browsers, we should mainly use &lt;object&gt;.
1. &lt;object&gt;
Supported by all major browsers
&lt;object width=&quot;400&quot; height=&quot;400&quot; data=&quot;data path&quot;&gt;
    rendered when the tag is not being supported.
&lt;/object&gt;

2. &lt;embed&gt;
Supported by all major browsers(no longer recommended).
&lt;embed width=&quot;550&quot; height=&quot;400&quot; src=&quot;data path&quot; /&gt;

3. Combination usage
&lt;object width=&quot;400&quot; height=&quot;400&quot; data=&quot;data path&quot;&gt;
    &lt;!-- Typically in IE --&gt;
    &lt;embed width=&quot;550&quot; height=&quot;400&quot; src=&quot;data path&quot; /&gt;
&lt;/object&gt;

`,excerpt:"",url:"/posts\\Tech\\HTML\\embed-object"},{title:"JavaScript \u4E00\u952E\u56DE\u5230\u9876\u90E8",content:`1. \u73AF\u5883
Vue3 + TS
2. \u601D\u8DEF

\u521B\u5EFA\u7EC4\u4EF6\u63D2\u5165\u9875\u9762\uFF0C\u4E3A\u63A7\u4EF6\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6(click)\uFF0C\u5E76\u9690\u85CF\uFF1B
\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E(onMounted)\uFF0C\u4E3Awindow\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6(croll)\uFF1B
\u5B9E\u65F6\u76D1\u542C\u6EDA\u52A8\u9AD8\u5EA6(scrollTop)\uFF0C\u8D85\u8FC7\u8BBE\u5B9A\u9AD8\u5EA6\u503C\u663E\u793A\u63A7\u4EF6\uFF1B
\u70B9\u51FB\u63A7\u4EF6\uFF0C\u6EDA\u52A8\u9AD8\u5EA6\u91CD\u7F6E\u4E3A 0\uFF0C\u5E76\u9690\u85CF\u63A7\u4EF6\uFF1B
\u4E3A\u4E86\u8282\u7701\u6027\u80FD\u5F00\u9500\uFF0C\u79BB\u5F00\u9875\u9762\u524D\uFF0C\u9700\u8981\u79FB\u9664\u6EDA\u52A8\u4E8B\u4EF6\u3002

3. \u5B9E\u73B0
&lt;template&gt;
    &lt;div class=&quot;back-top&quot; :style=&quot;{ display }&quot; @click=&quot;backTop&quot;&gt;
        &lt;p&gt;Backtop&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, onMounted, onUnmounted, computed } from &#39;vue&#39;

const scrollHeight = ref(0) // \u6EDA\u52A8\u9AD8\u5EA6
const display = computed(() =&gt; { // \u5927\u4E8E\u8BBE\u5B9A\u503C\u663E\u793A\u63A7\u4EF6
    return scrollHeight.value &gt; 400 ? &#39;block&#39; : &#39;none&#39;
})
// \u9875\u9762\u52A0\u8F7D\u5B8C\u6210
onMounted(() =&gt; {
    // \u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6
    window.addEventListener(&#39;scroll&#39;, scrollFn)
})
// \u9875\u9762\u5378\u8F7D
onUnmounted(() =&gt; {
    // \u79FB\u9664\u6EDA\u52A8\u4E8B\u4EF6
    window.removeEventListener(&#39;scroll&#39;, scrollFn)
})
const scrollFn = (e) =&gt; {
    // \u83B7\u53D6\u5F53\u524D\u6EDA\u52A8\u9AD8\u5EA6
    scrollHeight.value = document.documentElement.scrollTop
}
// \u70B9\u51FB\u8FD4\u56DE\u9876\u90E8
const backTop = () =&gt; {
    window.scrollTo(0, 0)
}

&lt;/script&gt;
&lt;style lang=&quot;sass&quot; scoped&gt;
.back-top
    position: fixed
    bottom: 20px
    right: 20px
    text-align: center
    cursor: pointer
    z-index: 1
&lt;/style&gt;

`,excerpt:"",url:"/posts\\Tech\\JS\\backtop"},{title:"One-click copy",content:`1. Definition
export class CopyBoard {
    // which conainer the content in
    private codeEles: HTMLCollection = document.getElementsByTagName(&#39;pre&#39;)

    constructor() {
        const eleArr: Element[] = Array.from(this.codeEles)
        eleArr.forEach(ele =&gt; {
            const btn: HTMLButtonElement = document.createElement(&#39;button&#39;)
            btn.innerText = &#39;copy&#39;
            btn.setAttribute(&#39;class&#39;, &#39;btn-copy&#39;)
            ele.appendChild(btn)

            btn.addEventListener(&#39;click&#39;, function () {
                // textarea tag keep a from of the content
                const input: HTMLInputElement = document.createElement(&#39;textarea&#39;) 
                const prev: HTMLElement = btn.previousElementSibling as HTMLElement
                input.value = prev.innerText;
                // add a input to body
                document.body.appendChild(input)
                // select input content
                input.select()
                // execute copy cmd
                document.execCommand(&#39;copy&#39;)
                // successful tip
                btn.innerText = &#39;copied&#39;
                // remove input from body
                document.body.removeChild(input)
            })
        });
    }
}

2. Instantation
&lt;script setup lang=&quot;ts&quot;&gt;
import { CopyBoard } from &#39;copyboard.ts&#39;
import { onMounted } from &quot;vue&quot;;

onMounted(() =&gt; {
    new CopyBoard()
})
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Tech\\JS\\copy"},{title:"ES6+ \u65B0\u7279\u6027",content:`1. \u57FA\u7840
1.1. let &amp; const

let: \u58F0\u660E\u53D8\u91CF
  \u4EE3\u66FF var \u4F7F\u7528\uFF0C\u58F0\u660E\u7684\u53D8\u91CF\u65E0\u6CD5\u5728\u201C\u6682\u65F6\u6027\u6B7B\u533A\u201D\u4E2D\u8BBF\u95EE\uFF1B
const: \u58F0\u660E\u5E38\u91CF
  \u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u5730\u5740\uFF08\u6307\u9488\uFF09\u4E0D\u53EF\u88AB\u4FEE\u6539\u3002

1.2. \u6A21\u677F\u5B57\u7B26\u4E32
\u4F7F\u5B57\u7B26\u4E32\u8FDE\u63A5\u65B9\u4FBF\u6613\u8BFB\u3002
const name = &#39;Tom&#39;
const temp = \`Hi, \${person.name}\`

1.3. \u7BAD\u5934\u51FD\u6570
\u7279\u6027\uFF1A

\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C\u800C\u662F\u53D6\u51B3\u4E8E\u4E0A\u4E0B\u6587\u4E2D\u7684 this\uFF1B
\u4E0D\u80FD\u7528 new \u5173\u952E\u5B57\u8C03\u7528\uFF0C\u56E0\u4E3A\u6CA1\u6709\u81EA\u5DF1\u7684 prototype \u5C5E\u6027\uFF1B

const fn = () =&gt; {
    console.log(this) // window
}

1.4. \u51FD\u6570\u9ED8\u8BA4\u53C2\u6570
const fn = (n = 1) =&gt; {
    return n * 10
}
console.log(fn()) // 10

1.5. \u5C55\u5F00\u8FD0\u7B97\u7B26(\u63A5\u6536\u51FD\u6570\u5269\u4F59\u53C2\u6570)
\u5C55\u5F00\u5BF9\u8C61\u6216\u6570\u7EC4
// \u6570\u7EC4
const list = [1, 2, 3]
const list2 = [4, 5, 6]
console.log([...list, ...list2]) // 1, 2, 3
// \u5BF9\u8C61
const obj = { name: &#39;Tom&#39;, age: 10 }
const obj2 = {
    ...obj,
    gender: 0
}
console.log(obj2) // { name: &#39;Tom&#39;, age: 10, gender: 0 }

\u63A5\u6536\u5269\u4F59\u53C2\u6570\uFF1A
const fn = (n, ...args) =&gt; {
    console.log(args) // \u6CA1\u6709\u5F62\u53C2\u63A5\u6536\u7684\u53C2\u6570 [2, 3]
}
fn(1,2,3)

1.6. \u5BF9\u8C61/\u6570\u7EC4\u89E3\u6784
// \u5BF9\u8C61
const person = { name: &#39;Tom&#39;, age: 10, gender: 0 }
const { name:newName, age } = person // \u5C5E\u6027\u91CD\u547D\u540D propName:newPropName
console.log(newName, age) // Tom 10
// \u6570\u7EC4
const list = [1, 2, 3]
const [, b, c] = list // \u4E0D\u9700\u8981\u7684\u4F4D\u7F6E\u4F7F\u7528,\u5360\u4F4D
console.log(b, c); // 2 3

1.7. \u4E8C\u8FDB\u5236 &amp; \u516B\u8FDB\u5236\u6574\u6570\u5B57\u9762\u91CF

\u5341\u8FDB\u5236\uFF0C\u65E0\u524D\u7F00
\u4E8C\u8FDB\u5236\uFF0C\u524D\u7F00 0b \u6216 0B
\u516B\u8FDB\u5236\uFF0C\u524D\u7F00 0o \u6216 0O
\u5341\u516D\u8FDB\u5236\uFF0C\u524D\u7F00 0x \u6216 0X

const binary = 0b10 // \u4E8C\u8FDB\u5236 2
const octol = 0o10 // \u516B\u8FDB\u5236 8

1.8. Class &amp; super\u5173\u952E\u5B57
Class &amp; super\uFF1A
// super class
class Person {
    constructor(name) {
        this.name = name
    }
    study() {
        console.log(\`\${this.name} is studying!\`);
    }
}
// sub class\uFF08extends from Person\uFF09
class Student extends Person {
    constructor(name) {
        super(name) // call constructor of Person
    }
}
const s = new Student(&#39;Tom&#39;) // All person must to study!
s.study() // Tom is studying!

\u5728\u5BF9\u8C61\u4E2D\u4F7F\u7528 super\uFF1A
// super object
const person = {
    study() {
        console.log(\`All person must to study!\`);
    }
}
// sub object
const student = {
    study() {
        super.study()
    }
}
// \u5C06 student \u7684 prototype \u6307\u5411 person \u7684 prototype
Object.setPrototypeOf(student, person)

student.study()

1.9. \u8FED\u4EE3\u5668(Iterator)
for...of \u904D\u5386
2. \u5B57\u7B26\u4E32\u65B0\u7279\u6027
2.1. includes(substr: string, index: number)
\u4ECE\u4E0B\u6807 index \u5F00\u59CB\uFF0C\u67E5\u8BE2\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u5B50\u4E32(substr)\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u3002\u8FD4\u56DE\uFF1Aboolen
2.2. startsWidth(substr: string, index: number) / endsWidth(substr: string, index: number)
\u4ECE\u4E0B\u6807(index) \u5F00\u59CB\uFF0C\u67E5\u8BE2\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u6307\u5B9A\u5B50\u4E32(substr)\u5F00\u5934/\u7ED3\u5C3E\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u3002\u8FD4\u56DE\uFF1Aboolean
2.3. repeat(n: number)
\u5C06\u539F\u5B57\u7B26\u4E32\u91CD\u590D n \u6B21\u3002\u8FD4\u56DE\uFF1Astring \u65B0\u5B57\u7B26\u4E32
2.4. padStart(lenth: number, str: string) / padEnd(length: number, str: string)
\u586B\u5145\u51FD\u6570\u3002\u5982\u679C\u5B57\u7B26\u4E32\u4E0D\u591F\u957F\u5EA6 length\uFF0C\u5C06\u7528 str \u5C06\u5B57\u7B26\u4E32\u8865\u5145\u5230\u5934\u90E8/\u5C3E\u90E8\u3002 
\u8FD4\u56DE\uFF1A\u65B0\u5B57\u7B26\u4E32
2.5. at(index: number)
\u67E5\u627E\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26\uFF0C\u652F\u6301\u8D1F\u7D22\u5F15\u3002\u8FD4\u56DE\uFF1Astring \u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26
3. \u5BF9\u8C61\u65B0\u7279\u6027
3.1. Object.assign(target, source1...)
\u5C06\u5BF9\u8C61\u7684\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\u590D\u5236\u5230\u76EE\u6807\u5BF9\u8C61\u4E2D\u3002\u5C5E\u4E8E\u6D45\u62F7\u8D1D\u3002\u8FD4\u56DE\u503C\uFF1AObject \u62F7\u8D1D\u7684\u5BF9\u8C61
3.2. Object.is(value1, value2)
\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u4E25\u683C\u76F8\u7B49(===)\u3002\u8FD4\u56DE\u503C\uFF1Aboolean
3.3. Object.keys(target: Object) / Object.values(target: Object)
\u8FD4\u56DE\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027/\u503C\u3002\u8FD4\u56DE\u503C\uFF1AArray
3.4. Object.entries(target: Object)
\u8FD4\u56DE\u5BF9\u8C61\u952E\u503C\u5BF9\u3002\u8FD4\u56DE\u503C\uFF1A[][]
`,excerpt:"",url:"/posts\\Tech\\JS\\es6"},{title:"\u56FE\u7247\u9884\u52A0\u8F7D",content:`\u9884\u52A0\u8F7D:\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u524D\uFF0C\u63D0\u524D\u52A0\u8F7D\u56FE\u7247\u7B49\u8D44\u6E90\uFF0C\u6709\u5229\u4E8E\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002
&lt;script setup lang=&quot;ts&quot;&gt;
import { onBeforeMount } from &quot;vue&quot;;
// some image url
const urls: string[] = []
// before window loaded
onBeforeMount(() =&gt; {
    preloadImg()
})
// preload image
const preloadImg = (): void =&gt; {
    urls.forEach(url =&gt; {
        const img = new Image()
        img.src = url
        img.onload = () =&gt; {
            // loaded
        }
    })
}
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Tech\\JS\\preloadimg"},{title:"Node\uFF1ARead local Files and get the direcctory tree data",content:`// fs-extra
//   - extended all functions from fs
import fs from &#39;fs-extra&#39;

/**
 * get file tree by dir path
 * @param {String} dirPath target dir
 * @returns {Array} tree data
 */
export const getFileTree = (dirPath) =&gt; {
    const tree = [] // save tree data
    const dirs = fs.readdirSync(dirPath) // all dir under dirPath
    dirs.forEach((dir) =&gt; {
        const stat = fs.statSync(\`\${dirPath}\${dir}\`) // file data
        if (stat.isDirectory()) { // is directory
            const children = getFileTree(\`\${dirPath}\${dir}/\`) // recursion
            tree.push({
                name: dir,
                children
            })
        } else { // is file
            tree.push(dir)
        }
    })
    return tree
}

`,excerpt:"",url:"/posts\\Tech\\Node\\readfiles"},{title:'NPM\uFF1ACannot start service:Host version "0.15.10" does not match binary version "0.15.9"',content:`1. Error
When run npm run dev
2. Solution

Remove node_moduels;
Reinstall.

$ rm node_moduels
$ npm install
$ npm run dev

`,excerpt:"",url:"/posts\\Tech\\NPM\\error-start"},{title:"NPM registry configuration",content:`1. By NPM config cmd
# show current
npm config get registry
# set a registry: taobao
npm config set registry https://registry.npm.taobao.org # or cnpm: http://r.cnpmjs.org/
# reset
npm config set registry https://registry.npmjs.org/

2. By NRM
NRM is a registry manager for NPM. It is being used for quickly alternating NPM registry.
Firstly, install NRM globally
$ npm install -g nrm

Alternate registry
# show all registries
nrm ls
# use registry
nrm use [name] # eg: taobao

More cmd nrm --help
`,excerpt:"",url:"/posts\\Tech\\NPM\\npm-reg"},{title:"Build a project by Vite",content:`1. Create
# Npm
$ npm create vite@latest [app-name] --template [vue/react]
# Yarn
$ yarn create vite [app-name] --template [vue/react]

2. Install
$ cd my-vue-app
$ npm install

3. Run
npm run dev

`,excerpt:"",url:"/posts\\Tech\\Vite\\start"},{title:"\u6D4F\u89C8\u5668\u63D2\u4EF6",content:`1. \u5B89\u88C5\u65B9\u5F0F

\u5B98\u65B9\u63D2\u4EF6\u5E02\u573A\u4E00\u952E\u5B89\u88C5\uFF0C\u65B9\u4FBF\u540C\u6B65\uFF1B
Chrome
Edge


\u7B2C\u4E09\u65B9\u63D2\u4EF6\u5E02\u573A\u4E0B\u8F7D crx \u6587\u4EF6\u624B\u52A8\u5B89\u88C5\uFF0C\u65E0\u6CD5\u4FDD\u6301\u8DE8\u6D4F\u89C8\u5668\u540C\u6B65\u3002
\u7B2C\u4E09\u65B9\u63D2\u4EF6\u5E02\u573A\uFF1AChrome\u63D2\u4EF6\u7F51, Cnplugins \u7B49\u3002



2. \u65E5\u5E38



Name
Des
Link



Tampermonkey
\u7528\u6237\u811A\u672C\u7BA1\u7406
Edge\u3001Chrome


AdGuard
\u5E7F\u544A\u62E6\u622A
Edge\u3001Chrome


Grammarly
\u82F1\u8BED\u8BED\u6CD5\u68C0\u6D4B
Edge\u3001Chrome


Vimium C
\u5168\u952E\u76D8\u64CD\u4F5C\u6D4F\u89C8\u5668
Edge\u3001Chrome


SuperCopy
\u7834\u89E3\u7981\u6B62\u590D\u5236
Edge\u3001Chrome


Startme
\u6807\u7B7E\u9875\u7BA1\u7406
Edge\u3001Chrome


Circle\u622A\u56FE\u52A9\u624B
\u4E07\u80FD\u622A\u56FE
Edge\u3001Chrome


3. \u5F00\u53D1



Name
Des
Link



FeHelper
JSON \u4EE3\u7801\u7F8E\u5316
Edge\u3001Chrome


PostWoman
\u63A5\u53E3\u8C03\u8BD5
Edge\u3001Chrome


`,excerpt:"",url:"/posts\\Tools\\ext-browser"},{title:"VSCode \u63D2\u4EF6",content:`


Name
Des



Setting Sync
\u901A\u8FC7 GitHub \u8D26\u53F7\u540C\u6B65 VsCode \u8BBE\u7F6E


Code Runner
\u4E00\u952E\u8FD0\u884C\u4EE3\u7801


Live Server
\u5F00\u542F\u672C\u5730\u670D\u52A1


Markdown All in One
Markdown \u5199\u4F5C\u652F\u6301


Vue Language Features(Volar)
Vue \u8BED\u6CD5\u652F\u6301


`,excerpt:"",url:"/posts\\Tools\\ext-vscode"},{title:"Windows \u5B89\u88C5\u6E05\u5355",content:`1. \u5F00\u53D1



Name
Des
Link



Node.js
Node
https://nodejs.org/en/


Git
\u4EE3\u7801\u7BA1\u7406
https://git-scm.com/download/win


Python
Python
https://www.python.org/downloads/


Java
Java
https://www.java.com/zh-CN/download/


VSCode
\u7F16\u8F91\u5668
https://code.visualstudio.com/Download


Idea
\u7F16\u8F91\u5668
https://www.jetbrains.com/idea/download/#section=windows


HBuilder X
\u5C0F\u7A0B\u5E8F\u5F00\u53D1
https://dcloud.io/hbuilderx.html


Postman
\u63A5\u53E3\u8C03\u8BD5
https://www.postman.com/downloads/?utm_source=postman-home


2. \u5DE5\u5177



Name
Des
Link



QTTabBar
\u591A\u6807\u7B7E\u9875\u8D44\u6E90\u7BA1\u7406\u5668
http://qttabbar.wikidot.com/


Geek
\u5378\u8F7D\u8F6F\u4EF6\u5E76\u6E05\u7406\u6CE8\u518C\u8868\u548C\u6B8B\u7559\u7684\u6587\u4EF6\u5939
https://geekuninstaller.com/


Snipaste
\u622A\u56FE+\u8D34\u56FE
https://www.snipaste.com/


PotPlayer
\u4E07\u80FD\u64AD\u653E\u5668
https://potplayer.daum.net/?lang=zh_CN


JJDown
B\u7AD9\u89C6\u9891/\u97F3\u9891\u4E0B\u8F7D
http://client.jijidown.com/


`,excerpt:"",url:"/posts\\Tools\\sf-win"},{title:"POI lines",content:`This might be the first time I feel I like belong.                                          - Root


I learned everyone dies alone.\u6211\u5B66\u5230\u4E86\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u4F1A\u5B64\u8EAB\u6B7B\u53BB\u3002But if you mean something to someone.\u4F46\u5982\u679C\u4F60\u5BF9\u67D0\u4EBA\u5F88\u91CD\u8981\u3002If you helped someone or loved someone.\u5982\u679C\u4F60\u5E2E\u8FC7\u67D0\u4EBA\u6216\u7231\u8FC7\u67D0\u4EBA\u3002If even a single person remembers you.\u54EA\u6015\u53EA\u6709\u4E00\u4E2A\u4EBA\u8BB0\u5F97\u4F60\u3002Then maybe you never really die.\u90A3\u4E48\u4E5F\u8BB8\u4F60\u5C31\u6C38\u8FDC\u4E0D\u4F1A\u771F\u6B63\u6B7B\u53BB\u3002And maybe this isn&#39;t the end at all.\u4E5F\u8BB8\u4E00\u5207\u5E76\u672A\u7ED3\u675F\u3002

`,excerpt:"",url:"/posts\\Vedio\\poi-lines"},{title:"POI lines S02",content:`
S: Shaw  
R: Root  
H: Harald  
J: John  
L: Lionel

1. S02E16
1.1. 00:25:17--00:29:47
S:

 Hello, Veronica.
\u4F60\u597D\uFF0C\u7EF4\u7F57\u59AE\u5361

R:

 Come in. 
\u8FDB\u6765\u5427\u3002

S:

 Any chance you were followed?
\u6709\u4EBA\u8DDF\u8E2A\u4F60\u5417\uFF1F

R:

 I don&#39;t think so, but I haven\u2019t been in the filed since I was at the farm.\u6211\u89C9\u5F97\u6CA1\u6709\u3002\u4E0D\u8FC7\u6211\u4ECE\u8BAD\u7EC3\u8425\u6BD5\u4E1A\u540E\u4E00\u76F4\u6CA1\u51FA\u8FC7\u5916\u52E4\u3002  You&#39;re Sam,right? Michael talk about you.\u4F60\u662F\u8428\u59C6\uFF0C\u5BF9\u5417\uFF1F\u8FC8\u514B\u5C14\u8DDF\u6211\u8BF4\u8D77\u8FC7\u4F60\u3002  I mean,he didn&#39;t tell me about what you guys do or anying,but\u2026he liked you.  \u4ED6\u6CA1\u544A\u8BC9\u6211\u4F60\u4EEC\u662F\u505A\u4EC0\u4E48\u4E8B\u7684\u3002\u4E0D\u8FC7\uFF0C\u4ED6\u559C\u6B22\u4F60\u3002  What happened to him?  \u4ED6\u600E\u4E48\u4E86\uFF1F

S:

 He was killed.  \u88AB\u6740\u4E86\u3002  On a mission.  \u6267\u884C\u4EFB\u52A1\u65F6\u3002  The less you know about all of this, the safer you&#39;ll be.\u4F60\u5BF9\u8FD9\u4E9B\u77E5\u9053\u8D8A\u5C11\uFF0C\u5C31\u8D8A\u5B89\u5168\u3002  But I do need to know what he talked to you about.  \u4F46\u6211\u8981\u77E5\u9053\u4ED6\u5230\u5E95\u544A\u8BC9\u4F60\u4EC0\u4E48\u4E86\u3002

R:

 Mike sent over details of wire transfers to a nuclear engineer named Daniel Aquino.\u8FC8\u514B\u53D1\u7ED9\u6211\u4E00\u4E9B\u8D44\u91D1\u8F6C\u8D26\u4FE1\u606F\u662F\u8F6C\u7ED9\u6838\u7535\u5DE5\u7A0B\u5E08\u4E39\u5C3C\u5C14\xB7\u963F\u57FA\u8BFA\u7684\u3002They appeared to originate out of accounts affiliated with Hezbollah, but someone had electronically spoofed the transfers.\u8FD9\u4E9B\u8D44\u91D1\u770B\u8D77\u6765\u662F\u4ECE\u9ECE\u5DF4\u5AE9\u771F\u4E3B\u515A\u540D\u4E0B\u7684\u8D26\u6237\u4E2D\u53D1\u51FA\u7684\uFF0C\u4F46\u662F\u6709\u4EBA\u7BE1\u6539\u4E86\u90A3\u4E9B\u7535\u5B50\u8F6C\u8D26\u4FE1\u606F\u3002I was able to track down the real originating accounts. They were out of the US government.\u6211\u67E5\u5230\u4E86\u771F\u6B63\u8F6C\u51FA\u8D44\u91D1\u7684\u8D26\u6237\u3002\u8D44\u91D1\u662F\u4ECE\u7F8E\u56FD\u653F\u5E9C\u6C47\u51FA\u7684\u3002

S:

 Which part of the government?  \u653F\u5E9C\u4EC0\u4E48\u90E8\u95E8\uFF1F        

R:

 A group out of the pentagon called the Intelligence Support Avtivity.  \u96B6\u5C5E\u4E94\u89D2\u5927\u697C\u7684\u7EC4\u7EC7\uFF0C\u540D\u53EB\u201C\u60C5\u62A5\u652F\u6301\u884C\u52A8\u5904\u201D\u3002  Have you heard of them?  \u4F60\u542C\u8BF4\u8FC7\u4ED6\u4EEC\u5417\uFF1F      

S:

 You could say that. Up until yesterday, I worked for them.  \u53EF\u4EE5\u8FD9\u4E48\u8BF4\uFF0C\u76F4\u5230\u6628\u5929\uFF0C\u6211\u8FD8\u5728\u4E3A\u4ED6\u4EEC\u5DE5\u4F5C\u3002      

R:

 Their budget&#39;s confidential, but\u2026it stretches back five years.  \u4ED6\u4EEC\u7684\u9884\u7B97\u8D44\u91D1\u662F\u673A\u5BC6\uFF0C\u4F46\u662F\u2026\u4ECE\u4E94\u5E74\u524D\u5C31\u5F00\u59CB\u4E86\u3002  Huge amounts coded to a project called &quot;Northern Lights&quot;.  \u5927\u7B14\u91D1\u989D\u90FD\u62E8\u7ED9\u4E86\u4E00\u4E2A\u53EB\u201C\u5317\u6781\u5149\u201D\u7684\u9879\u76EE\u3002        

S:

 What was the project?  \u8FD9\u662F\u4EC0\u4E48\u9879\u76EE\uFF1F        

R:

 I don&#39;t know. But Aquino was part of it.  \u6211\u4E0D\u77E5\u9053\uFF0C\u4F46\u662F\u963F\u57FA\u8BFA\u53C2\u4E0E\u4E86\u8FD9\u4E2A\u9879\u76EE\u3002They built a facility of some kind coded as research. But I can&#39;t find the names of anyone else involved in the project.\u4ED6\u4EEC\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u53EB\u201C\u63A2\u7D22\u8005\u201D\u7684\u8BBE\u5907\u3002\u4F46\u6211\u67E5\u4E0D\u5230\u5176\u4ED6\u9879\u76EE\u53C2\u52A0\u8005\u7684\u540D\u5B57\u3002Mike said Aquino told you the name of his contact in Northern Lights. Do you remember it?\u9EA6\u514B\u8BF4\u963F\u57FA\u8BFA\u544A\u8BC9\u4E86\u4F60\u4ED6\u5728\u5317\u6781\u5149\u9879\u76EE\u4E2D\u8054\u7CFB\u4EBA\u7684\u540D\u5B57\u3002\u4F60\u8FD8\u8BB0\u5F97\u5417\uFF1F      

S:

 Stay here. And keep away from those windows.  \u5F85\u5728\u8FD9\u513F\u3002\u79BB\u7A97\u6237\u8FDC\u4E00\u70B9\u3002      

R:

 Veronica and I had a bit of a chat before you got here.  \u4F60\u6765\u4E4B\u524D\uFF0C\u7EF4\u7F57\u59AE\u5361\u548C\u6211\u95F2\u804A\u4E86\u4E00\u4F1A\u513F\u3002She tried really, really hard to remember anything else that could help me, but... she didn&#39;t know anything.\u5979\u975E\u5E38\u3001\u975E\u5E38\u52AA\u529B\u5730\u56DE\u5FC6\u6240\u6709\u5BF9\u6211\u6709\u5E2E\u52A9\u7684\u4E8B\u60C5\u3002\u4F46\u662F\uFF0C\u5979\u4E00\u65E0\u6240\u77E5\u3002I read your file, and I&#39;m kind of a big fan.\u6211\u770B\u8FC7\u4F60\u7684\u6863\u6848\uFF0C\u6211\u662F\u4F60\u7684\u5FE0\u5B9E\u7C89\u4E1D\u3002So, I really don&#39;t wanna hurt you. I just need the name.\u6240\u4EE5\uFF0C\u6211\u771F\u7684\u4E0D\u60F3\u4F24\u5BB3\u4F60\u3002\u6211\u53EA\u9700\u8981\u4E2A\u540D\u5B57\u3002You really have no idea what you&#39;re caught up in, do you?\u770B\u6765\u4F60\u6839\u672C\u4E0D\u77E5\u9053\u81EA\u5DF1\u5377\u5165\u4E86\u4EC0\u4E48\uFF0C\u662F\u5427\uFF1FWho you&#39;re actually working for?\u4E0D\u77E5\u9053\u4F60\u5230\u5E95\u662F\u5728\u4E3A\u8C01\u5DE5\u4F5C\uFF1FDid you honestly think the source of the numbers was Guantanamo?\u4F60\u771F\u7684\u76F8\u4FE1\u90A3\u4E9B\u53F7\u7801\u6765\u81EA\u5173\u5854\u90A3\u6469\u5417\uFF1FSome sad taxi driver rotting away in a cage somewhere?\u67D0\u4E2A\u53EF\u601C\u7684\u51FA\u79DF\u8F66\u53F8\u673A\u6B63\u88AB\u5173\u5728\u7B3C\u5B50\u91CC\u6162\u6162\u8150\u70C2\u5417\uFF1FI mean, you should know torture almost never produces good information.\u4F60\u5E94\u8BE5\u77E5\u9053\uFF0C\u4E25\u5211\u62F7\u6253\u51E0\u4E4E\u4ECE\u6765\u95EE\u4E0D\u51FA\u6709\u7528\u7684\u4FE1\u606F\u3002Almost never.\u51E0\u4E4ESadly, we are on a bit of a clock.\u53EF\u60DC\u7684\u662F\uFF0C\u6211\u4EEC\u65F6\u95F4\u6709\u70B9\u7D27\u3002Wilson&#39;s men started looking for Veronica here three hours ago.\u5A01\u5C14\u68EE\u7684\u4EBA\u4E09\u5C0F\u65F6\u524D\u5C31\u5F00\u59CB\u5BFB\u627E\u7EF4\u7F57\u59AE\u5361\u4E86Now\u2026\u73B0\u5728Aquino was hired to build a home for something very special, something I wanna find.\u963F\u57FA\u8BFA\u53D7\u96C7\u4E3A\u4E00\u4E2A\u6781\u7279\u6B8A\u7684\u4E1C\u897F\u5EFA\u9020\u573A\u6240\uFF0C\u6211\u60F3\u627E\u7684\u4E1C\u897F\u3002So you&#39;re gonna tell me the name of his contact.\u6240\u4EE5\u544A\u8BC9\u6211\u4ED6\u8054\u7CFB\u4EBA\u7684\u540D\u5B57\u3002      

S:

 One of the things I left out of my file... I kind of enjoy this sort of thing.  \u6211\u7684\u6863\u6848\u91CC\u6709\u4E00\u70B9\u6F0F\u4E86\u3002\u6211\u5BF9\u8FD9\u79CD\u4E8B\u5176\u5B9E\u4E50\u5728\u5176\u4E2D\u3002

R:

 I am so glad you said that.  \u6211\u771F\u9AD8\u5174\u4F60\u8FD9\u4E48\u8BF4\u3002  I do too.  \u6211\u4E5F\u662F\u5462\u3002And just when we were starting to really connect.\u6211\u4EEC\u521A\u8981\u5F00\u59CB\u4EB2\u8FD1\u4E00\u4E0B\u5462\u3002I&#39;m sorry.A little rude, I know.\u771F\u62B1\u6B49\u3002\u6709\u70B9\u65E0\u793C\uFF0C\u6211\u77E5\u9053\u3002  We&#39;ll do this again soon.\u6211\u4EEC\u5F88\u5FEB\u4F1A\u518D\u6709\u673A\u4F1A\u7684\u3002

2. S02E22
2.1. 00:29:53--00:29:54
S:

 [Peng\u2026]  \u3010\u7830\u2026\u3011

R:

 Uh~  \u554A~

`,excerpt:"",url:"/posts\\Vedio\\poi-lines02"},{title:"POI lines S03",content:`
1. S03E05
1.1. 00:43:03--00:43:09
R:

Did you miss me?\u4F60\u60F3\u6211\u4E86\u5417\uFF1FWe&#39;re gonna have so much fun together.\u6211\u4EEC\u5728\u4E00\u8D77\u4F1A\u5F88\u597D\u73A9\u7684\u3002

2. S03E06
2.1. 00:00:51--00:00:56
R:

Did you miss me?\u4F60\u60F3\u6211\u4E86\u5417\uFF1FWe&#39;re gonna have so much fun together.\u6211\u4EEC\u5728\u4E00\u8D77\u4F1A\u5F88\u597D\u73A9\u7684\u3002

2.2. 00:04:09--00:06:10
R:

Sorry about that.  \u62B1\u6B49\u5566\u3002

S:

Which part: the tasing,the drugging,or whatever this is?  \u62B1\u6B49\u5565\uFF1A\u7535\u51FB\uFF0C\u4E0B\u836F\uFF0C\u8FD8\u662F\u73B0\u5728\u8FD9\u73A9\u610F\uFF1F

R:

I had to make sure you&#39;d hear me out.\u6211\u5F97\u786E\u4FDD\u4F60\u4E56\u4E56\u542C\u6211\u8BF4\u8BDDShe needs our help, and I figured you wouldn&#39;t come willingly.\u5979\u9700\u8981\u6211\u4EEC\u7684\u5E2E\u52A9\uFF0C\u6211\u731C\u4F60\u4E0D\u4F1A\u4E50\u610F\u81EA\u613F\u5E2E\u5FD9\u3002

S:

She?  \u5979\uFF1F

R:

The machine&#39;s given me a mission. And step one is to team up with you.  \u673A\u5668\u7ED9\u4E86\u6211\u4E00\u4E2A\u4EFB\u52A1\u3002\u7B2C\u4E00\u6B65\uFF0C\u8DDF\u4F60\u7EC4\u961F\u3002

S:

I&#39;ll pass.Trust issues.  \u514D\u4E86\u3002\u4FE1\u4EFB\u95EE\u9898\u3002  Besides,the machine gives missions to Harold and the government--relevant, irrelevant.  \u518D\u8BF4\uFF0C\u673A\u5668\u5DF2\u7ECF\u6D3E\u4E86\u4EFB\u52A1\u7ED9\u54C8\u7F57\u5FB7\u548C\u653F\u5E9C\u65B9\u2014\u2014\u76F8\u5173\u7684\uFF0C\u65E0\u5173\u7684\u3002  Why would it be talking to you?  \u5B83\u4E3A\u4EC0\u4E48\u8FD8\u8981\u8DDF\u4F60\u8BF4\uFF1F

R:

Because now, there&#39;s a third category.  \u56E0\u4E3A\u73B0\u5728\uFF0C\u51FA\u73B0\u4E86\u7B2C\u4E09\u65B9\u3002  Things are evolving.  \u5F62\u52BF\u5728\u6F14\u53D8\u3002  And my relationship with the machine is a little...different.\u800C\u6211\u8DDF\u673A\u5668\u4E4B\u95F4\u7684\u5173\u7CFB\u7565\u6709\u2026\u4E0D\u540C\u3002  As for trust issues, I&#39;m happy to take the first step.  \u81F3\u4E8E\u4FE1\u4EFB\u95EE\u9898\uFF0C\u6211\u5F88\u4E50\u610F\u5148\u8FC8\u51FA\u7B2C\u4E00\u6B65\u3002  There&#39;s a gun for you in the glove compartment.  \u8D2E\u7269\u7BB1\u91CC\u6709\u4E00\u628A\u67AA\u7ED9\u4F60

S:

Thanks, but a knife will do just fine.  \u8C22\u4E86\uFF0C\u4E0D\u8FC7\u5200\u5C31\u591F\u4E86\u3002  This is the part where you give me one good reason why I should believe anything you say.  \u73B0\u5728\u5C31\u7ED9\u6211\u4E2A\u7406\u7531\u89E3\u91CA\u4E0B\uFF0C\u51ED\u4EC0\u4E48\u6211\u8981\u76F8\u4FE1\u4F60\u7684\u8BDD\u3002

R:

October 2, 1988. You took a road trip with your father to watch the Houston Oilers play the Philadelphia Eagles. He bought you a sweatshirt...  1988\u5E7410\u67082\u65E5\uFF0C\u4F60\u7236\u4EB2\u5F00\u8F66\u5E26\u4F60\u53BB\u770B\u4F11\u65AF\u987F\u6CB9\u4EBA\u961F\u548C\u8D39\u57CE\u8001\u9E70\u961F\u7684[\u6A44\u6984\u7403]\u6BD4\u8D5B\uFF0C\u4ED6\u7ED9\u4F60\u4E70\u4E86\u4EF6\u8FD0\u52A8\u886B\u3002

S:

Don&#39;t talk about my father.  \u4E0D\u8BB8\u63D0\u6211\u7236\u4EB2\u3002  It told you that?  \u5B83\u544A\u8BC9\u4F60\u7684\uFF1F

R:

The machine trusts me, even if you don&#39;t.  \u673A\u5668\u4FE1\u4EFB\u6211\uFF0C\u867D\u7136\u4F60\u4E0D\u4FE1\u4EFB\u6211\u3002  You spent years working for the machine, and she was never wrong.  \u4F60\u4E3A\u673A\u5668\u5DE5\u4F5C\u4E86\u6570\u5E74\uFF0C\u5979\u4ECE\u4E0D\u51FA\u9519\u3002  If you don&#39;t help me, someone might destroy her, and innocent people will die.  \u5982\u679C\u4F60\u4E0D\u5E2E\u6211\uFF0C\u6709\u4EBA\u4F1A\u6BC1\u4E86\u5979\uFF0C\u65E0\u8F9C\u767E\u59D3\u4F1A\u56E0\u6B64\u4E27\u547D\u3002  Forget how you feel about me. How would you feel about that?  \u5FD8\u6389\u4F60\u5BF9\u6211\u7684\u611F\u89C9\u3002\u4F60\u5BF9\u90A3\u4F1A\u6709\u4F55\u611F\u89C9\uFF1F

S:

Okay. I&#39;ll forget how I feel about you.  \u597D\u3002\u6211\u4F1A\u5148\u5FD8\u6389\u5BF9\u4F60\u7684\u611F\u89C9\u3002  But when this is over, you better hope I don&#39;t remember.  \u4E0D\u8FC7\u7B49\u7740\u4E00\u5207\u7ED3\u675F\uFF0C\u4F60\u5C31\u7948\u7977\u6211\u522B\u60F3\u8D77\u6765\u5427\u3002

2.3. 00:14:32--00:15:52
S:

So this mission we&#39;re on,what is it?  \u6211\u4EEC\u8FD9\u4E2A\u4EFB\u52A1\uFF0C\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F

R:

We&#39;ll find out soon enough.  \u6211\u4EEC\u5F88\u5FEB\u5C31\u4F1A\u77E5\u9053\u4E86\u3002  When you see this statue again, think impact.  \u4F60\u4E0B\u6B21\u770B\u5230\u8FD9\u5EA7\u96D5\u5851\u7684\u65F6\u5019\uFF0C\u60F3\u7740\u201C\u649E\u51FB\u201D\u3002

S:

The machine told you that?  \u673A\u5668\u8DDF\u4F60\u8BF4\u7684\u5417\uFF1F

R:

I suppose I could be making it up.  \u6211\u5012\u662F\u53EF\u4EE5\u80E1\u7F16\u3002

S:

And I suppose I could be kicking your ass.  \u6211\u5012\u662F\u53EF\u4EE5\u8E39\u4F60\u4E24\u811A\u3002

R:

Insurance.  \u4FDD\u9669\u3002

S:

And where are we headed to now?  \u6211\u4EEC\u73B0\u5728\u53BB\u54EA\u513F

R:

Down.  \u4E0B\u9762\u3002

S:

Spaghetti and an oxygen tank make a mean thermal lance.\u610F\u5927\u5229\u9762\u52A0\u6C27\u6C14\u7B52\u53EF\u4EE5\u505A\u6210\u70ED\u55B7\u67AA\u3002  What am I cutting?  \u6211\u8981\u5207\u4EC0\u4E48\uFF1F

R:

This.  \u8FD9\u4E2A\u3002

S:

You know the last time I used a blowtorch was to get intel from an uncooperative source.  \u4E0A\u6B21\u6211\u7528\u55B7\u67AA\u662F\u4ECE\u4E0D\u8BC6\u8DA3\u513F\u7684\u4EBA\u5634\u91CC\u64AC\u60C5\u62A5\u3002  Now, you either tell me what we&#39;re here to do, or I walk.  \u544A\u8BC9\u6211\u6765\u8FD9\u513F\u662F\u8981\u505A\u4EC0\u4E48\uFF0C\u5426\u5219\u6211\u8D70\u4EBA\u3002

R:

Honestly?  \u542C\u5B9E\u8BDD\u5417\uFF1F  Most of the time, I&#39;m told what to do a second before I have to do it.  \u5927\u591A\u6570\u65F6\u5019\uFF0C\u6211\u90FD\u662F\u5728\u6700\u540E\u4E00\u79D2\u624D\u88AB\u544A\u77E5\u8981\u505A\u4EC0\u4E48\u3002  The big picture, that&#39;s hers.  \u638C\u63E1\u5927\u5C40\u7684\uFF0C\u662F\u5979\u3002  The only thing I know for sure is I need you.  \u6211\u552F\u4E00\u80FD\u786E\u5B9A\u7684\u5C31\u662F\u6211 \u9700 \u8981 \u4F60\u3002

S:

Then you should get out of my way.  \u90A3\u5C31\u522B\u6321\u6211\u8DEF\u3002

R:

Wait.  \u7B49\u7B49\u3002  Safety first.  \u5B89\u5168\u7B2C\u4E00\u3002

2.4. 00:16:47--00:18:10
S:

Okay, so you don&#39;t know what we&#39;re doing.  \u597D\u4E86\uFF0C\u8FD9\u4E48\u8BF4\u4F60\u4E0D\u77E5\u9053\u6211\u4EEC\u5728\u505A\u4EC0\u4E48\u3002  Can you at least tell me what we&#39;re doing next?  \u80FD\u81F3\u5C11\u544A\u8BC9\u6211\u63A5\u4E0B\u6765\u8981\u505A\u4EC0\u4E48\u5417\uFF1F

R:

Breaking and entering.  \u975E\u6CD5\u5165\u4FB5\u3002

S:

Locked door.  \u5927\u95E8\u7D27\u9501\u3002  Phone.  \u624B\u673A\u3002  What&#39;s missing?  \u5C11\u4E86\u4EC0\u4E48\uFF1F

R:

Behind you.  \u5728\u4F60\u540E\u9762\u3002

S:

Highly trained operative in a bad suit.  \u8BAD\u7EC3\u6709\u7D20\uFF0C\u7A7F\u5EC9\u4EF7\u897F\u88C5\u7684\u7279\u5DE5\u3002  This is a CIA pickup site.\u8FD9\u662F\u4E2D\u60C5\u5C40\u7684\u4EA4\u63A5\u70B9\u3002

P:

Agent number?  \u7279\u5DE5\u53F7\u7801\uFF1F

R:

947-0038 alpha.  947-0038A

P:

Confirmation?  \u786E\u8BA4\u4FE1\u606F\uFF1F

R:

Diego 241.  Diego 241

P:

Pickup tomorrow, 0800. Have the package ready.  \u660E\u5929\u4EA4\u63A5\uFF0C\u4E0A\u5348\u516B\u70B9\u3002\u628A\u5305\u88F9\u51C6\u5907\u597D\u3002

S:

Okay, so what&#39;s the package?  \u597D\u5427\uFF0C\u4EC0\u4E48\u5305\u88F9\uFF1F

R:

I am.  \u6211\u3002

2.5. 00:21:36--00:22:10
S:

CIA is here to pick us up.  \u4E2D\u60C5\u5C40\u6765\u4EA4\u63A5\u4E86\u3002  Any last words?  \u6709\u9057\u8A00\u5417\uFF1F

R:

24381  24381

S:

Whatever.  \u968F\u4FBF\u5427\u3002

C:

PIN?  \u8BC6\u522B\u7801\uFF1F

S:

24381  24381

C:

Good to meet you, Agent Dearborn.  \u5F88\u9AD8\u5174\u89C1\u5230\u4F60\uFF0C\u8FEA\u5C14\u4F2F\u6069\u63A2\u5458  She been sanitized?  \u641C\u8FC7\u8EAB\u4E86\u5417\uFF1F  Looks like you got a fun one.  \u770B\u6765\u4F60\u6293\u7684\u8FD9\u4F4D\u633A\u6709\u8DA3\u3002

S:

You don&#39;t know the half of it.  \u7EDD\u5BF9\u8D85\u4E4E\u60F3\u8C61\u3002

2.6. 00:23:52--00:24:04
S:

Hope the voice in your head knows what it&#39;s doing.\u5E0C\u671B\u4F60\u8111\u888B\u91CC\u7684\u58F0\u97F3\u5FC3\u91CC\u6709\u6570\u3002That&#39;s gotta go.\u5F97\u53D6\u4E0B\u6765\u4E86\u3002

R:

Sundown, Ottawa, left, right, left, right, one, two, three.\u65E5\u843D\uFF0C\u6E25\u592A\u534E\uFF0C\u5DE6\uFF0C\u53F3\uFF0C\u5DE6\uFF0C\u53F3\uFF0C\u4E00\uFF0C\u4E8C\uFF0C\u4E09\u3002

S:

You say the sweetest things.\u4F60\u771F\u4F1A\u751C\u8A00\u871C\u8BED\u3002

2.7. 00:30:26--00:30:29
S:

I&#39;ll be right along.\u6211\u968F\u884C.  I&#39;m not letting this one out of my sight.\u7EDD\u4E0D\u80FD\u8BA9\u8FD9\u4F4D\u79BB\u5F00\u6211\u7684\u89C6\u7EBF.

2.8. 00:33:29--00:33:30
S:

Impact.  \u201C\u649E\u51FB\u201D

2.9. 00:36:37--00:36:43
R:

I knew you&#39;d come back for me.\u6211\u77E5\u9053\u4F60\u4F1A\u4E3A\u6211\u56DE\u6765\u3002

S:

Mission accomplished?\u4EFB\u52A1\u5B8C\u6210\u4E86\u5417\uFF1F

R:

Absolutely.\u5F53\u7136\u3002

S:

Good.\u5F88\u597D\u3002

3. S03E10
3.1. 00:13:28--00:13:33
S:

Harold knows who I&#39;m talking about.\u54C8\u7F57\u5FB7\u77E5\u9053\u6211\u5728\u8BF4\u8C01\u3002We&#39;re running out of options.\u6211\u4EEC\u522B\u65E0\u9009\u62E9\u4E86\u3002We need Root.\u6211\u4EEC\u9700\u8981\u6839\u3002

3.2. 00:17:46--00:17:51
R:

We&#39;re close. Turn off the headlights.\u5C31\u8981\u5230\u4E86\u3002\u5173\u6389\u8F66\u706F\u3002

S:

How am I supposed to see?\u90A3\u6211\u600E\u4E48\u770B\u8DEF\u3002

R:

You don&#39;t need to.\u4F60\u4E0D\u9700\u8981\u3002Steady for another 800 feet. Adjust left when you feel it.\u5300\u901F\u524D\u8FDB250\u7C73\u3002\u611F\u89C9\u5230\u4E4B\u540E\u5DE6\u8F6C\u3002

S:

Feel what?\u611F\u89C9\u5230\u4EC0\u4E48\uFF1F

00:19:07--00:19:15
R:

May I have a gun now?\u6211\u73B0\u5728\u80FD\u8981\u628A\u67AA\u5417\uFF1F

S:

What&#39;s with you and your poor listening skills?\u4F60\u7684\u542C\u529B\u51FA\u4EC0\u4E48\u6BDB\u75C5\u4E86\uFF1FNo...way.\u6CA1\u95E8\u3002

R:

Then you better turn around.\u90A3\u4F60\u6700\u597D\u8F6C\u8EAB\u3002

3.3. 00:19:45--00:20:29
A:

Wait for the light at 12:00.\u7B49\u5341\u4E8C\u70B9\u949F\u65B9\u5411\u7684\u706F\u4EAE\u8D77\u6765\u3002

S:

Is that...\u90A3\u662F\u2026

R:

Alonzo Quinn.\u963F\u4F26\u4F50\xB7\u594E\u6069\u3002The building has two main exits, two emergency exits. 12 U.S. Marshals guard the building, Plus our friend over there who was scouting the perimeter that we&#39;re now inside. Air support is ten minutes out. While the Russians aren&#39;t here yet, they will be soon.\u90A3\u680B\u5927\u697C\u6709\u4E24\u4E2A\u4E3B\u8981\u51FA\u53E3\uFF0C\u4E24\u4E2A\u5E94\u6025\u51FA\u53E3\u3002\u6709\u5341\u4E8C\u540D\u8054\u90A6\u6CD5\u8B66\u770B\u5B88\u3002\u6211\u4EEC\u90A3\u4F4D\u670B\u53CB\u521A\u624D\u5DF2\u7ECF\u4FA6\u67E5\u8FC7\u4E86\u6211\u4EEC\u73B0\u5728\u8FD9\u91CC\u3002\u7A7A\u4E2D\u652F\u63F4\u53EA\u9700\u5341\u5206\u949F\u4FBF\u5230\u3002\u4FC4\u7F57\u65AF\u4EBA\u8FD8\u6CA1\u5230\uFF0C\u4F46\u4E5F\u5FEB\u4E86\u3002

L:

You sure the big guy&#39;s here?\u4F60\u786E\u5B9A\u5927\u4E2A\u5B50\u5728\u8FD9\u513F\uFF1F

P:


What the hell was that?\u8FD9\u662F\u600E\u4E48\u56DE\u4E8B\uFF1F-Move in!\u5FEB\u6765\u3002


S:

Pretty sure.\u975E\u5E38\u786E\u5B9A\u3002

3.4. 00:29:16--00:30:16
R:

Can I please have a gun now?\u73B0\u5728\u80FD\u9EBB\u70E6\u7ED9\u6211\u628A\u67AA\u5417\uFF1F

S:

No, and you&#39;re really starting to irritate me by asking.\u4E0D\u884C\uFF0C\u4F60\u95EE\u5F97\u5FEB\u8981\u6FC0\u6012\u6211\u4E86\u3002

H:

As far as Root&#39;s request for a weapon, Ms. Shaw, the situation is becoming increasingly dangerous.\u6839\u5982\u6B64\u7D22\u8981\u6B66\u5668\uFF0C\u8096\u5973\u58EB\uFF0C\u5F62\u52BF\u6015\u662F\u8981\u6108\u53D1\u51F6\u9669\u4E86\u3002

L:

Yeah, no kidding!\u662F\u554A\uFF0C\u771F\u4E0D\u626F\u86CB\uFF01

H:

And if she wanted to kill us, I&#39;m guessing she could have done so many times already.\u5979\u8981\u662F\u60F3\u6740\u6211\u4EEC\uFF0C\u6211\u731C\u6211\u4EEC\u5DF2\u7ECF\u6B7B\u8FC7\u5F88\u591A\u56DE\u4E86\u3002

S:

Speak for yourself, Harold.\u522B\u634E\u4E0A\u6211\u4EEC\uFF0C\u54C8\u7F57\u5FB7\u3002But fine. Whatever. Take it.\u597D\u5427\uFF0C\u65E0\u6240\u8C13\u4E86\uFF0C\u62FF\u4E0A\u3002

R:

Can I have a second one, please?\u6211\u80FD\u518D\u8981\u4E00\u628A\u5417\uFF1F

S:

Two guns at once? That&#39;s kinda lame.\u8FD8\u8981\u53CC\u67AA\uFF1F\u900A\u3002You all set? Let&#39;s head up.\u884C\u4E86\u5427\uFF1F\u8D70\u5427\u3002

R:

Too late.\u592A\u8FDF\u4E86\u3002

L:

Where&#39;s she going?\u5979\u53BB\u54EA\u513F\uFF1F

S:

Okay, that was kinda hot.\u597D\u5427\uFF0C\u633A\u8FA3\u7684\u3002

R:

I&#39;ll watch the front. You should head up. We&#39;re almost out of time.\u6211\u5B88\u7740\u524D\u95E8\u3002\u4F60\u4EEC\u5FEB\u53BB\u3002\u6211\u4EEC\u5FEB\u6CA1\u65F6\u95F4\u4E86\u3002

4. S03E12
4.1. 00:02:38--00:03:19
R:

I told you, Harold--we were supposed to work together.\u6211\u544A\u8BC9\u8FC7\u4F60\uFF0C\u54C8\u7F57\u5FB7\u2014\u2014\u6211\u4EEC\u5E94\u8BE5\u5408\u4F5C\u3002

S:

Scold him later, Root. Cut me loose.\u4EE5\u540E\u518D\u9A82\u4ED6\uFF0C\u6839\u3002\u7ED9\u6211\u677E\u5F00\u3002Come on.\u5FEB\u3002

R:

Let&#39;s move. Make a left at the end of the hallway to the service elevator.\u8D70\u3002\u8D70\u5ECA\u5C3D\u5934\u5DE6\u62D0\u4E0A\u5458\u5DE5\u7535\u68AF\u3002

S:

This way, go.
\u8FD9\u8FB9\uFF0C\u8D70\u3002    

R:

Elevator code&#39;s 5228#. Go!\u7535\u68AF\u5BC6\u7801\u662F5228#\u3002\u8D70\uFF01

4.2. 00:38:09--00:38:17
R:

I&#39;m sorry I left without saying good-bye.\u62B1\u6B49\u6211\u4E0D\u8F9E\u800C\u522B\u3002

Tell Shaw I was touched she came to look for me.\u544A\u8BC9\u8096\uFF0C\u6211\u5F88\u611F\u52A8\u5979\u6765\u627E\u6211\u3002
5. S03E17
5.1. 00:13:18--00:13:37
R:

I heard you skipped breakfast.\u6211\u542C\u8BF4\u4F60\u6CA1\u5403\u65E9\u9910\u3002And you and your australopithecine coworker can just take the day off.\u4F60\u548C\u4F60\u7684\u91CE\u86EE\u539F\u59CB\u4EBA\u540C\u4F34\u4ECA\u5929\u53EF\u4EE5\u4F11\u606F\u4E86\u3002I&#39;ve been doing just fine without a safety net.\u6CA1\u6709\u5B89\u5168\u4FDD\u969C\u6211\u4E5F\u4E00\u76F4\u6CA1\u4E8B\u3002

S:

Look, the only reason you&#39;re not stuck in a cage right now is me.\u4F60\u73B0\u5728\u6CA1\u88AB\u5173\u5728\u7B3C\u5B50\u91CC\u5B8C\u5168\u662F\u56E0\u4E3A\u6211\u3002Don&#39;t make me look bad.\u522B\u8BA9\u6211\u8138\u4E0A\u65E0\u5149\u3002

R:

I couldn&#39;t make you look bad if I tried.\u7EDD\u4E0D\u53EF\u80FD\uFF0C\u4F60\u6C38\u8FDC\u5149\u5F69\u7167\u4EBA\u554A\u3002

5.2. 00:40:39--00:40:46
S:

Keep &#39;em dry.\u4FDD\u6301\u5E72\u71E5\u3002Change the dressings every 72 hours.\u6BCF72\u5C0F\u65F6\u66F4\u6362\u4E00\u6B21\u6577\u6599\u3002

R:

I love it when you play doctor.\u6211\u597D\u559C\u6B22\u4F60\u626E\u533B\u751F\u5462\u3002

6. S03E19
6.1. 00:32:28--00:33:00
R:

Sorry to bother you, Shaw.\u62B1\u6B49\u6253\u6405\u4F60\u4E86\uFF0C\u8096\u3002

S:

I&#39;m a little busy here, Root.\u6211\u8FD9\u4F1A\u513F\u6709\u70B9\u5FD9\uFF0C\u6839\u3002

R:

I&#39;m aware of your situation. That&#39;s why I called-- To apologize.\u6211\u77E5\u9053\u4F60\u7684\u60C5\u51B5\u3002\u6240\u4EE5\u624D\u6253\u7ED9\u4F60\u2014\u2014\u9053\u6B49\u3002

S:

Apologize for what?\u9053\u4EC0\u4E48\u6B49\uFF1F

R:

Vigilance keeps changing the way they communicate. I had to leak some sensitive information in order to find their latest method, which happens to be coded radio messages.\u201C\u65F6\u523B\u8B66\u60D5\u201D\u4E00\u76F4\u66F4\u6362\u901A\u4FE1\u65B9\u5F0F\u3002\u6211\u5F97\u6CC4\u9732\u70B9\u654F\u611F\u4FE1\u606F\u624D\u80FD\u627E\u5230\u4ED6\u4EEC\u6700\u65B0\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u52A0\u5BC6\u65E0\u7EBF\u7535\u4FE1\u606F\u3002

S:

What kind of sensitive information?\u4EC0\u4E48\u654F\u611F\u4FE1\u606F\uFF1F

R:

In my defense, I knew you and the big lug could handle yourselves.\u5148\u5BB9\u6211\u81EA\u8FA9\u4E0B\uFF0C\u6211\u77E5\u9053\u4F60\u548C\u90A3\u4F4D\u67D4\u60C5\u94C1\u6C49\u80FD\u641E\u5B9A\u3002

S:

You leaked our location to vigilance?\u4F60\u628A\u6211\u4EEC\u7684\u884C\u8E2A\u6CC4\u9732\u7ED9\u4E86&quot;\u65F6\u523B\u8B66\u60D5&quot;\uFF1F

R:

I just intercepted another coded message.\u6211\u521A\u62E6\u622A\u4E86\u53E6\u4E00\u6761\u52A0\u5BC6\u4FE1\u606F\u3002Harold&#39;s about to be in trouble. Gotta go.\u54C8\u7F57\u5FB7\u6709\u5371\u9669\u4E86\u3002\u5F97\u8D70\u4E86\u3002

7. S03E20
7.1. 00:03:26--00:03:43
S:

Root.\u6839\u3002

R:

Hey, kids.\u5B69\u5B50\u4EEC\u3002You miss me between drug deals?\u8D29\u6BD2\u65F6\u60F3\u6211\u4E86\u3002

S:

Yeah. I miss you like I miss an intestinal parasite.\u662F\u554A\u3002\u62FF\u4F60\u5F53\u6211\u80A0\u5B50\u91CC\u7684\u86D4\u866B\u90A3\u4E48\u60F3\u3002

R:

I love your similes.\u6211\u559C\u6B22\u4F60\u7684\u6BD4\u55BB\u3002Hop on, Shaw.\u4E0A\u6765\u5427\uFF0C\u8096\u3002We&#39;ve got a relevant number in Alaska. We&#39;re gonna steal a jet.\u963F\u62C9\u65AF\u52A0\u6709\u4E2A\u76F8\u5173\u53F7\u7801\u3002\u6211\u4EEC\u5F97\u5077\u67B6\u98DE\u673A\u3002

S:

Does sound kind of fun.\u542C\u7740\u633A\u597D\u73A9\u513F\u3002

7.2. 00:16:53--00:17:41
R:

Thanks for being my travel buddy on these errands.\u8C22\u8C22\u4F60\u966A\u6211\u5B8C\u6210\u8FD9\u4E9B\u6D3B\u513F\u3002

S:

Sure.\u6CA1\u4E8B\u3002It&#39;s not every day you get to beat up a militia group in anchorage, then hop a plane to Miami.\u53EF\u4E0D\u662F\u6BCF\u5929\u90FD\u6709\u673A\u4F1A\u53BB\u6CCA\u673A\u5904\u653E\u5012\u4E00\u5E2E\u6B66\u88C5\u5206\u5B50\uFF0C\u593A\u673A\u98DE\u5F80\u8FC8\u963F\u5BC6\u7684\u3002So is this what you&#39;re doing from now on, you&#39;re chasing down bad guys?\u4F60\u5C31\u5F00\u59CB\u5E72\u8FD9\u79CD\u6D3B\u513F\uFF0C\u6293\u574F\u4EBA\u4E86\u5417\uFF1F

R:

I doubt it. There&#39;s still too much work to be done.\u5E94\u8BE5\u4E0D\u4F1A\u3002\u592A\u591A\u5DE5\u4F5C\u8981\u505A\u3002

S:

What kind of work?\u4EC0\u4E48\u5DE5\u4F5C\uFF1F

R:

Preparation.\u51C6\u5907\u3002I understand. We&#39;re leaving now.\u660E\u767D\u3002\u6211\u4EEC\u9A6C\u4E0A\u79BB\u5F00\u3002Time to go.\u8BE5\u8D70\u4E86\u3002

S:

Where to?\u53BB\u54EA\u513F\uFF1F

R:

St. Louis.\u5723\u8DEF\u6613\u65AF\u3002

S:

Oh, great.\u597D\u6781\u4E86\u3002I know a steak joint that serves a filet that&#39;s better than sex.\u90A3\u91CC\u6709\u5BB6\u725B\u6392\u5E97\u7684\u83F2\u529B\u725B\u6392\u723D\u8FC7\u505A\u7231\u3002

R:

Yummy as that sounds, you won&#39;t be joining me. She needs you somewhere else.\u542C\u8D77\u6765\u771F\u7F8E\u5473\uFF0C\u4F46\u4F60\u4E0D\u80FD\u8DDF\u6211\u540C\u53BB\u4E86\uFF0C\u5979\u9700\u8981\u4F60\u53BB\u522B\u7684\u5730\u65B9\u3002

S:

W-where?\u54EA\u513F\uFF1F

8. S03E21
8.1. 00:03:05--00:04:15
R:

Nice to see you, too, John.\u6211\u4E5F\u5F88\u9AD8\u5174\u89C1\u5230\u4F60\uFF0C\u7EA6\u7FF0\u3002

S:

Where the hell did you come from?\u4F60\u8FD9\u662F\u4ECE\u54EA\u513F\u5192\u51FA\u6765\u7684\uFF1F

R:

El paso, most recently. The thing with the narco-trafficker. Very relevant, but not the point.\u6700\u8FD1\u5728[\u5FB7\u5DDE]\u5384\u5C14\u5DF4\u7D22\u3002\u6BD2\u54C1\u6218\u4E4B\u7C7B\u7684\u4E8B\u513F\u3002\u867D\u7136\u76F8\u5173\uFF0C\u4E0D\u8FC7\u4E0D\u91CD\u8981\u3002Take a peek around that corner, you two.\u77A7\u4E0B\u8857\u89D2\u5427\u4F60\u4EEC\u4FE9\u3002

J:

Ambush.\u57CB\u4F0F\u3002

S:

Who are the party crashers?\u8FD9\u662F\u8C01\u8981\u6765\u6405\u5C40\u554A\uFF1F

R:

Decima trigger teams... waiting for you with no less than six submachine guns and one honest-to-goodness Russian RPG-7. We need to get invisible fast.\u5FB7\u897F\u739B\u7684\u6740\u624B\u2026\u5728\u7B49\u4F60\u4EEC\uFF0C\u624B\u4E0A\u81F3\u5C11\u6709\u516D\u628A\u51B2\u950B\u67AA\u548C\u4E00\u628A\u539F\u88C5\u7684\u4FC4\u7F57\u65AF7\u578B\u706B\u7BAD\u63A8\u8FDB\u69B4\u5F39\u3002\u6211\u4EEC\u5F97\u9A6C\u4E0A\u9690\u5F62\u3002

R:

Phones and earpieces now.\u7535\u8BDD\u548C\u8033\u673A\u3002Streets aren&#39;t safe. Decima&#39;s machine is online. Can see us anywhere and everywhere in the five boroughs of New York city.\u8857\u4E0A\u4E0D\u5B89\u5168\u4E86\u3002\u5FB7\u897F\u739B\u7684\u673A\u5668\u4E0A\u7EBF\u4E86\u3002\u80FD\u5728\u7EBD\u7EA6\u4E94\u533A\u8303\u56F4\u5185\u968F\u65F6\u968F\u5730\u76D1\u89C6\u6211\u4EEC\u3002

J:

Samaritan? You confirmed it?\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\uFF1F\u4F60\u786E\u5B9A\u5417\uFF1F

R:

Our names are on the list, and Greer is keeping score. All systems--cameras, phones, the GPS in your car can track us.\u6211\u4EEC\u7684\u540D\u5B57\u9996\u5F53\u5176\u51B2\uFF0C\u683C\u91CC\u5C14\u8D44\u6E90\u5728\u624B\u3002\u6240\u6709\u7684\u7CFB\u7EDF\u3001\u6444\u50CF\u5934\u3001\u7535\u8BDD\u3001\u8F66\u8F7D\u5B9A\u4F4D\u7CFB\u7EDF\u90FD\u80FD\u8FFD\u8E2A\u5230\u6211\u4EEC\u3002

S:

So what, Samaritan can think for itself now? It can learn?\u600E\u4E48\uFF0C\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u73B0\u5728\u80FD\u81EA\u6211\u601D\u8003\uFF1F\u81EA\u6211\u5B66\u4E60\u4E86\u5417\uFF1F

R:

I don&#39;t think so.\u5E94\u8BE5\u4E0D\u80FD\u3002Right now, all it can do is watch us and follow.\u73B0\u5728\uFF0C\u5B83\u8FD8\u53EA\u80FD\u76D1\u89C6\u548C\u8DDF\u8E2A\u3002Just remember--what our machine sees, Samaritan sees.\u4F46\u8BB0\u4F4F\u2014\u2014\u6211\u4EEC\u7684\u673A\u5668\u80FD\u770B\u5230\u7684\uFF0C\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u90FD\u80FD\u770B\u5230\u3002Two Gods playing with the same deck of cards.\u4E24\u4E2A\u4E0A\u5E1D\u540C\u684C\u73A9\u724C\u3002Stop.\u505C\u3002We need to find another way.\u6211\u4EEC\u5F97\u53E6\u5BFB\u51FA\u8DEF\u3002

8.2. 00:06:06--00:07:34
R:

Hug the wall. There&#39;s a camera up ahead. We&#39;re covered on 23rd street by the flushing line elevated tracks.\u8D34\u5899\u8D70\u3002\u4E0A\u9762\u6709\u6444\u50CF\u5934\u3002\u752823\u5927\u8857\u4E0A\u7684\u5F17\u6765\u52CB\u7EBF\u8F7B\u8F68\u63A9\u62A4\u6211\u4EEC\u3002We make it that far, and maybe we don&#39;t get shot by the six Decima agents waiting a block away.\u6211\u4EEC\u51B2\u8FC7\uFF0C\u5E94\u8BE5\u5C31\u4E0D\u4F1A\u88AB\u4E00\u4E2A\u8857\u533A\u5916\u7684\u516D\u540D\u5FB7\u897F\u739B\u7279\u5DE5\u6740\u6389\u3002Samaritan 101.&quot;\u6492\u9A6C\u5229\u4E9A\u4EBA&quot;\u5165\u95E8\u6559\u7A0B\u3002Let&#39;s go.\u8D70\u5427\u3002Missed one.\u6F0F\u6389\u4E86\u4E00\u4E2A\u3002Hold here until the light changes. The camera angle switches with oncoming traffic.\u5728\u8FD9\u91CC\u7B49\u7740\u4EA4\u901A\u706F\u53D8\u3002\u6444\u50CF\u5934\u89D2\u5EA6\u4F1A\u6839\u636E\u4EA4\u901A\u72B6\u6001\u8F6C\u6362\u3002Come on!\u8D70\uFF01John. When that light switches, we&#39;re screwed! We can&#39;t worry about irrelevant numbers now.\u7EA6\u7FF0\u3002\u7B49\u4EA4\u901A\u706F\u518D\u53D8\uFF0C\u6211\u4EEC\u5C31\u5B8C\u4E86\uFF01\u6211\u4EEC\u73B0\u5728\u7BA1\u4E0D\u4E86\u65E0\u5173\u53F7\u7801\u3002

J:

What is it thinking... telling us to lay low then handing us a new number?\u5B83\u5728\u60F3\u4EC0\u4E48\u2026\u8BA9\u6211\u4EEC\u4F4E\u8C03\u70B9\uFF0C\u53C8\u7ED9\u6211\u4EEC\u65B0\u53F7\u7801\uFF1F

R:

There&#39;s no time!\u6CA1\u65F6\u95F4\u4E86\uFF01

J:

This is a life, and Finch would tell us to save it.\u8FD9\u662F\u751F\u547D\uFF0C\u82AC\u5947\u4F1A\u8981\u6211\u4EEC\u53BB\u62EF\u6551\u3002So you tell your complicated boss if it wants me to step out of danger, then I need more than just numbers. I want a name.\u544A\u8BC9\u4F60\u90A3\u795E\u79D8\u83AB\u6D4B\u7684\u8001\u5927\uFF0C\u5982\u679C\u5B83\u4E0D\u60F3\u6211\u6709\u5371\u9669\u5C31\u522B\u5149\u7ED9\u6211\u53F7\u7801\u3002\u6211\u8981\u540D\u5B57\u3002

R:

Fine. She&#39;s giving it to me. I&#39;ll tell you on-- Oh, no.\u597D\u5427\u3002\u5979\u7ED9\u6211\u3002\u6211\u8DEF\u4E0A\u544A\u2014\u2014\u4E0D\u3002

S:

What?\u600E\u4E48\u4E86\uFF1FWho is it?\u662F\u8C01\uFF1F

8.3. 00:17:12--00:17:21
S:

What do you think? Did we lose &#39;em?\u600E\u4E48\u6837\uFF1F\u7529\u6389\u4ED6\u4EEC\u4E86\u5417\uFF1F

R:

It was always 50/50.\u53EF\u80FD\u6027\u4E00\u534A\u4E00\u534A\u5427\u3002

8.4. 00:18:23--00:19:34
S:

Never thought I&#39;d love the sight of New Jersey.\u4ECE\u6CA1\u60F3\u5230\u6211\u5C45\u7136\u4F1A\u559C\u6B22\u65B0\u6CFD\u897F\u3002You sure we&#39;re safe here?\u4F60\u786E\u5B9A\u6211\u4EEC\u5728\u8FD9\u91CC\u5B89\u5168\u5417\uFF1F

R:

From everything but the coffee.\u4E00\u5207\u5B89\u5168\u3002\u9664\u4E86\u5496\u5561\u3002And, yes, we&#39;re off the radar as long as we&#39;re outside the five boroughs. Samaritan can&#39;t see this far...yet.\u6CA1\u9519\uFF0C\u6211\u4EEC\u8131\u79BB\u76D1\u63A7\u4E86\uFF0C\u53EA\u8981\u5728\u4E94\u533A\u4E4B\u5916\u5C31\u6CA1\u4E8B\u3002\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u76D1\u89C6\u4E0D\u4E86\u8FD9\u4E48\u8FDC\u2026\u6682\u65F6\u8FD8\u4E0D\u884C\u3002

J:

We have to go back and find Grace. If Decima&#39;s throwing everything they have at us, then she&#39;s their way to get to Finch.\u6211\u4EEC\u5F97\u56DE\u53BB\u627E\u683C\u857E\u65AF\u3002\u5FB7\u897F\u739B\u503E\u5C3D\u4E00\u5207\u5BF9\u4ED8\u6211\u4EEC\uFF0C\u4ED6\u4EEC\u80AF\u5B9A\u662F\u8981\u5229\u7528\u5979\u627E\u82AC\u5947\u3002

R:

Still the faithful watchdog, huh? Even after Harold left you.\u8FD8\u5F53\u5FE0\u8BDA\u7684\u5B88\u671B\u8005\u5462\uFF1F\u54C8\u7F57\u5FB7\u90FD\u79BB\u5F00\u4F60\u4E86\u3002

J:

Are you gonna help us or not?\u4F60\u5230\u5E95\u5E2E\u4E0D\u5E2E\u5FD9\uFF1F

R:

I thought you&#39;d never ask.\u5C31\u6015\u4F60\u4E0D\u95EE\u5462\u3002See everything in red? These are dead zones in the city. Spots where our machine can&#39;t find a hint of audio or visual surveillance. When Decima took Grace, they disappeared to this spot here. Red Hook Marine Terminal. An entire port blacked out to surveillance.\u770B\u5230\u7EA2\u8272\u7684\u533A\u57DF\u6CA1\uFF1F\u8FD9\u662F\u5E02\u91CC\u7684\u6B7B\u89D2\u3002\u8FD9\u4E9B\u5730\u65B9\u6211\u4EEC\u7684\u673A\u5668\u627E\u4E0D\u5230\u97F3\u9891\u548C\u89C6\u9891\u76D1\u89C6\u3002\u5FB7\u897F\u739B\u6293\u8D70\u683C\u857E\u65AF\u65F6\u4ED6\u4EEC\u6D88\u5931\u5728\u4E86\u8FD9\u91CC\u3002\u7EA2\u94A9\u822A\u8FD0\u7801\u5934\u3002\u6574\u4E2A\u7801\u5934\u90FD\u6CA1\u6709\u88AB\u76D1\u89C6\u3002

J:

Someone doesn&#39;t want the world to see what&#39;s going in or coming out.\u6709\u4EBA\u4E0D\u60F3\u4E16\u754C\u770B\u5230\u90A3\u91CC\u8FDB\u51FA\u7684\u662F\u4EC0\u4E48\u3002

W:

Here&#39;s your pancakes.\u4F60\u7684\u8584\u997C\u3002

R:

I&#39;m guessing it&#39;s our best shot at finding Grace.\u6211\u770B\u8FD9\u662F\u6700\u53EF\u80FD\u627E\u5230\u683C\u857E\u4E1D\u7684\u5730\u65B9\u3002

J:

Then let&#39;s go take a look.\u90A3\u6211\u4EEC\u53BB\u770B\u770B\u5427\u3002

S:

Stop the clock, sports fans. How do either of you plan on getting us back into the city?\u7B49\u4E00\uFF0C \u8FD0\u52A8\u7231\u597D\u8005\u3002\u4F60\u4EEC\u4FE9\u6253\u7B97\u600E\u4E48\u56DE\u57CE\uFF1F

J:

There&#39;s our ride.\u6211\u4EEC\u7684\u8F66\u6765\u4E86\u3002

8.5. 00:21:00--00:24:32
R:

You can lose the hat. Whole area&#39;s a dead zone, meaning &quot;camera free.&quot; And since we ditched our phones, I took the liberty of grabbing a few of these on our way out of the 8th.\u4F60\u53EF\u4EE5\u6458\u6389\u5E3D\u5B50\u4E86\u3002\u6574\u4E2A\u533A\u57DF\u90FD\u662F\u6B7B\u89D2\uFF0C\u5C31\u662F\u8BF4\u6CA1\u6709\u6444\u50CF\u5934\u3002\u65E2\u7136\u6211\u4EEC\u4E22\u6389\u4E86\u624B\u673A\uFF0C\u6211\u521A\u624D\u5728\u516B\u5C40\u65F6\u987A\u4E86\u51E0\u4E2A\u8FD9\u73A9\u610F\u513F\u3002

S:

Okay, so how many bad guys are we looking at here? What kind of firepower?	\u597D\u5427\uFF0C\u6709\u591A\u5C11\u574F\u86CB\u8981\u5904\u7406\uFF1F\u706B\u529B\u5982\u4F55\uFF1F

R:

I have no idea.\u6211\u4E0D\u77E5\u9053\u3002As long as we&#39;re here, we&#39;re flying blind.\u5728\u8FD9\u7247\u533A\u57DF\uFF0C\u53EA\u80FD\u4E24\u773C\u4E00\u62B9\u9ED1\u3002

S:

Finally... a chance for some good old-fashioned recon.\u7EC8\u4E8E\u2026\u53EF\u4EE5\u7528\u56DE\u7ECF\u5178\u8001\u62DB\u4E86\u3002

S:

There&#39;s nothing here but employee records.\u8FD9\u91CC\u53EA\u6709\u96C7\u5458\u4FE1\u606F\u3002She&#39;s gotta be on one of those four container ships at dock.\u5979\u5E94\u8BE5\u5728\u7801\u5934\u7684\u56DB\u4E2A\u96C6\u88C5\u7BB1\u8D27\u8239\u91CC\u3002

R:

You&#39;re sure you saw four ships out there?\u4F60\u786E\u5B9A\u662F\u770B\u5230\u4E86\u56DB\u8258\u8239\u5417\uFF1F

J:

Yeah. Why?\u662F\u554A\u3002\u600E\u4E48\u4E86\uFF1F

R:

Terminal manifest only lists three.\u7801\u5934\u8F7D\u8D27\u5355\u53EA\u6807\u6CE8\u4E86\u4E09\u8258\u3002What do you say we take a look behind door Number Four?\u6211\u4EEC\u53BB\u540E\u8FB9\u770B\u770B\u90A3\u7B2C\u56DB\u8258\u5982\u4F55\uFF1FYou two head below deck, try to find Grace. I&#39;ll keep watc    h up here.\u4F60\u4EEC\u4FE9\u4E0B\u53BB\u7532\u677F\u627E\u683C\u857E\u4E1D\u3002\u6211\u53BB\u4E0A\u9762\u770B\u7740\u3002

S:

No sign of Grace.\u6CA1\u770B\u5230\u683C\u857E\u4E1D\u3002

J:

Or anyone else. Takes a big crew to run a ship this size.\u6CA1\u770B\u5230\u4EFB\u4F55\u4EBA\u3002\u8FD9\u4E48\u5927\u7684\u8239\u9700\u8981\u5F88\u591A\u8239\u5458\u3002

S:

So where is everybody?\u90A3\u4EBA\u90FD\u53BB\u54EA\u513F\u4E86\uFF1FDiscoloration of the lips, fingernails. Signs of respiratory arrest. I&#39;m guessing... botulinum toxin.\u5634\u5507\uFF0C\u6307\u7532\u53D8\u8272\uFF0C\u547C\u5438\u9AA4\u505C\uFF0C\u6211\u731C\u662F\u2026\u8089\u6BD2\u6746\u83CC\u6BD2\u7D20\u3002For a job well done.\u5DE5\u4F5C\u5706\u6EE1\u3002

J:

Decima.\u5FB7\u897F\u739B\u3002

S:

But why would they poison the crew? Unless they have something to hide.\u4ED6\u4EEC\u4E3A\u4EC0\u4E48\u8981\u6BD2\u6B7B\u8239\u5458\uFF1F\u80AF\u5B9A\u662F\u60F3\u9690\u85CF\u4EC0\u4E48\u3002

R:

You guys might wanna come up here. There&#39;s something you should see.\u4F60\u4EEC\u5FEB\u4E0A\u6765\u3002\u6709\u4E1C\u897F\u7ED9\u4F60\u4EEC\u770B\u3002Computer servers. I&#39;d say there&#39;s about 60 per container. And, yes... they&#39;re state-of-the-art. With chipsets and acceleration technology .Three guesses what Decima&#39;s gonna use them for. But you won&#39;t need three.\u7535\u8111\u670D\u52A1\u5668\u3002\u6BCF\u4E2A\u96C6\u88C5\u7BB1\u91CC\u7EA6\u6709\u516D\u5341\u4E2A\u3002\u6CA1\u9519\u3002\u90FD\u662F\u6700\u5C16\u7AEF\u7684\u3002\u8FD9\u79CD\u6676\u7247\u7EC4\u548C\u52A0\u901F\u6280\u672F\u6211\u524D\u6240\u672A\u89C1\u3002\u7ED9\u4F60\u4E09\u6B21\u673A\u4F1A\u731C\u5FB7\u897F\u739B\u62FF\u8FD9\u4E9B\u5E72\u4EC0\u4E48\u3002\u4F60\u4E0D\u7528\u4E09\u6B21\u4E5F\u731C\u5F97\u51FA\u3002

S:

Samaritan? But it&#39;s already online.\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u5417\uFF1F\u4F46\u5B83\u5DF2\u7ECF\u4E0A\u7EBF\u4E86\u3002

R:

You think it&#39;s scary now? Samaritan&#39;s a brand-new system, a child learning to crawl. These servers... are for when it can run.\u4F60\u89C9\u5F97\u5B83\u73B0\u5728\u5C31\u5F88\u6050\u6016\u5417\uFF1F\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u662F\u5168\u65B0\u7684\u7CFB\u7EDF\uFF0C\u6B63\u5728\u5B66\u722C\u7684\u5B69\u5B50\u3002\u8FD9\u4E9B\u670D\u52A1\u5668\u2026\u80FD\u8BA9\u5B83\u8DD1\u8D77\u6765\u3002

J:

Can&#39;t question a dead guy. But maybe this can help.\u6B7B\u4EBA\u6CA1\u6CD5\u5BA1\u95EE\u3002\u8FD9\u4E2A\u53EF\u80FD\u8FD8\u6709\u70B9\u7528\u3002

R:

You couldn&#39;t have aimed 2 inches higher?\u4F60\u5C31\u4E0D\u80FD\u5F80\u9AD8\u5904\u7784\u4E00\u70B9\u70B9\u4E48\uFF1F

S:

Everybody&#39;s a critic today. Let&#39;s just go find you a computer.\u4ECA\u513F\u4E2A\u4EBA\u4EBA\u90FD\u5439\u6BDB\u6C42\u75B5\u3002\u7ED9\u4F60\u627E\u53F0\u7535\u8111\u5427\u3002

R:

Ready when you are. It was Decima, all right. Here to take inventory of the cargo. And receiving orders via self-deleting texts.\u51C6\u5907\u597D\u4E86\u3002\u7684\u786E\u662F\u5FB7\u897F\u739B\u3002\u6765\u76D8\u70B9\u5E93\u5B58\u8D27\u7269\u7684\u3002\u63A5\u6536\u6307\u4EE4\u7684\u77ED\u4FE1\u90FD\u662F\u81EA\u52A8\u5220\u9664\u7684\u3002

J:

They never make it easy, do they?\u4ED6\u4EEC\u771F\u662F\u4ECE\u4E0D\u653E\u6C34\u554A\uFF0C\u662F\u5427\uFF1F

R: Can&#39;t read the texts, but the machine found where they came from.\u77ED\u4FE1\u65E0\u6CD5\u8BFB\u53D6\u3002\u4F46\u673A\u5668\u627E\u5230\u4E86\u77ED\u4FE1\u6765\u6E90\u3002A building in Brooklyn.\u5E03\u9C81\u514B\u6797\u7684\u4E00\u5E62\u5EFA\u7B51\u3002
J:

If Decima&#39;s camped out there, then Grace probably is too. Let&#39;s go.\u8981\u662F\u5FB7\u897F\u739B\u5728\u90A3\u91CC\uFF0C\u683C\u857E\u4E1D\u591A\u534A\u4E5F\u5728\u3002\u6211\u4EEC\u8D70\u3002

S:

Are you coming?\u4F60\u4E0D\u6765\u5417\uFF1F

R:

She&#39;s telling me to stay put. You guys can handle it from here.\u5979\u53EB\u6211\u5F85\u5728\u8FD9\u91CC\u3002\u5269\u4E0B\u7684\u4EA4\u7ED9\u4F60\u4EEC\u4E86\u3002I&#39;ve got work to do.\u6211\u8FD8\u6709\u4E8B\u8981\u505A\u3002

8.6. 00:41:54--00:42:36
S:

So what&#39;s all the way out in Mount Vernon that&#39;s so important?\u4EC0\u4E48\u4E8B\u513F\u8FD9\u4E48\u91CD\u8981\uFF0C\u5F97\u5927\u8001\u8FDC\u8DD1\u6765[\u534E\u76DB\u987F\u5357]\u8292\u7279\u5F17\u519C\uFF1F

R:

At the time, it was outside New York city limits and Samaritan&#39;s prying eyes.\u5F53\u65F6\uFF0C\u8FD9\u91CC\u8FDC\u79BB\u7EBD\u7EA6\u5E02\u548C\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u7684\u89C6\u7EBF\u3002

S:

At the time?\u5F53\u65F6\uFF1F

R:

Decima&#39;s lost the feeds. So for now, the only one watching is her. Chin up, kids. You&#39;re not out of the game yet. Trust me.\u5FB7\u897F\u739B\u5931\u53BB\u4FE1\u53F7\u4E86\u3002\u76EE\u524D\uFF0C\u53EA\u6709\u5979\u5728\u76D1\u89C6\u4E86\u3002\u632F\u4F5C\u70B9\uFF0C\u5B69\u5B50\u4EEC\uFF0C\u4F60\u4EEC\u8FD8\u6CA1\u51FA\u5C40\u3002\u76F8\u4FE1\u6211\u3002

J:

We lost Finch, which means we lost everything.\u5931\u53BB\u4E86\u82AC\u5947\uFF0C\u5C31\u5931\u53BB\u4E86\u4E00\u5207\u3002

R:

Not everything. We now have seven of Samaritan&#39;s servers.\u5E76\u4E0D\u5C3D\u7136\u3002\u6211\u4EEC\u73B0\u5728\u6709&quot;\u6492\u9A6C\u5229\u4E9A\u4EBA&quot;\u4E03\u53F0\u670D\u52A1\u5668\u4E86\u3002Like I said... trust me.\u5982\u6211\u6240\u8BF4\u2026\u76F8\u4FE1\u6211.

9. S03E22
9.1. 00:02:45\u201400:03:31
J:

Why do these Decima guys keep killing themselves?\u5FB7\u897F\u739B\u7684\u4EBA\u4E3A\u4EC0\u4E48\u603B\u662F\u81EA\u6740\uFF1F

R:

It&#39;s for the insurance. Each agent gets a policy when they join the organization. Get caught, get nothing. Have an accident...\u56E0\u4E3A\u4FDD\u9669\u5408\u540C\u3002\u6240\u6709\u4EBA\u52A0\u5165\u7EC4\u7EC7\u65F6\u90FD\u6709\u4EFD\u4FDD\u5355\u3002\u4E00\u65E6\u88AB\u6293\uFF0C\u4FBF\u4E00\u65E0\u6240\u6709\u3002\u8981\u662F\u51FA\u4E86\u610F\u5916...

J:

Their next of kin gets a payday.\u5BB6\u5C5E\u4F1A\u83B7\u5F97\u8D54\u507F\u91D1\u3002

S:

Mr. Payday there was our last lead on Finch. We&#39;re back to square one.\u8FD9\u4F4D\u8D54\u507F\u91D1\u5148\u751F\u662F\u6211\u4EEC\u627E\u5230\u82AC\u5947\u7684\u6700\u540E\u7EBF\u7D22\u4E86\u3002\u6211\u4EEC\u53C8\u56DE\u5230\u8D77\u70B9\u4E86\u3002

R:

The machine says we have other things to worry about.\u673A\u5668\u8BF4\u6211\u4EEC\u8FD8\u6709\u522B\u7684\u4E8B\u60C5\u9700\u8981\u8003\u8651\u3002

J:

Greer has Finch. He&#39;s the only thing we have to worry about.\u683C\u91CC\u5C14\u6293\u4E86\u82AC\u5947\u3002\u4ED6\u5C31\u662F\u6211\u4EEC\u552F\u4E00\u9700\u8981\u8003\u8651\u7684\u3002

R:

I understand how you feel, John. But she assured me Harold&#39;s not in immediate danger. And we have a larger threat at hand.\u6211\u7406\u89E3\u4F60\u7684\u611F\u53D7\uFF0C\u7EA6\u7FF0\u3002\u4F46\u5979\u786E\u5B9A\u54C8\u7F57\u5FB7\u6682\u65F6\u6CA1\u6709\u5371\u9669\u3002\u800C\u6211\u4EEC\u73B0\u5728\u8FD8\u6709\u66F4\u5927\u7684\u5A01\u80C1\u3002

S:

You wanna expand on that?\u8981\u8BE6\u8BF4\u4E0B\u5417\uFF1F

R:

She can&#39;t see the full picture.	\u5979\u770B\u4E0D\u6E05\u5168\u5C40\u3002

S:

How can we help when the machine can&#39;t even see what&#39;s going on?\u673A\u5668\u90FD\u770B\u4E0D\u6E05\u5168\u5C40\uFF0C\u90A3\u8981\u6211\u4EEC\u5982\u4F55\u5E2E\u5FD9\uFF1F

R:

We&#39;ll be her eyes and ears.\u6211\u4EEC\u5F53\u5979\u7684\u8033\u76EE\u3002

9.2. 00:05:41--00:06:59
S:

Did you just steal a dead man&#39;s keys?\u4F60\u521A\u662F\u5077\u4E86\u6B7B\u4EBA\u7684\u94A5\u5319\uFF1F

R:

She asked me to. Can I borrow your knife, John?\u5979\u8981\u6211\u505A\u7684\u3002\u80FD\u501F\u4F60\u7684\u5200\u4E00\u7528\u4E48\uFF0C\u7EA6\u7FF0\uFF1FWhile Decima&#39;s too clever to use GPS...\u5FB7\u897F\u739B\u592A\u72E1\u733E\uFF0C\u80AF\u5B9A\u4E0D\u4F1A\u7528GPS\u3002

J:

The satellite radio has a GPS transponder.\u536B\u661F\u5E7F\u64AD\u5E26GPS\u8F6C\u9891\u5668\u3002

R:

The boys might be able to pull off some data, find out where our recently deceased Decima friend has been.\u5C0F\u5B50\u4EEC\u4E5F\u8BB8\u80FD\u627E\u51FA\u70B9\u6570\u636E\uFF0C\u67E5\u51FA\u6211\u4EEC\u65B0\u6545\u7684\u5FB7\u897F\u739B\u670B\u53CB\u5230\u8FC7\u54EA\u91CC\u3002

S:

The boys?\u5C0F\u5B50\u4EEC\uFF1F

B:

Shut the door. It&#39;s freezing.\u5173\u4E0A\u95E8\u554A\u3002\u51BB\u6B7B\u4E86\u3002I know them!\u6211\u8BA4\u8BC6\u4ED6\u4EEC\uFF01They helped you rescue me from Collier.\u4ED6\u4EEC\u5E2E\u4F60\u4ECE\u79D1\u5229\u5C14\u624B\u91CC\u6551\u51FA\u4E86\u6211\u3002You&#39;re that government hit man that made me pull out my molars.\u4F60\u662F\u90A3\u4E2A\u653F\u5E9C\u6740\u624B\uFF0C\u8FD8\u903C\u6211\u62D4\u7259\u6765\u7740\u3002That&#39;s messed up.\u592A\u91CE\u86EE\u4E86\u3002

J:

Relax, Casey. I&#39;m retired.\u653E\u677E\u3002\u51EF\u897F\u3002\u6211\u9000\u4F11\u4E86\u3002What are they doing here, Root?\u4ED6\u4EEC\u5728\u8FD9\u513F\u5E72\u561B  \u6839

R:

Daizo, Jason, Daniel, and I have been on the road collecting certain... contraband in the tri-cities.\u5317\u5C71\uFF0C\u6770\u68EE\uFF0C\u4E39\u5C3C\u5C14\u548C\u6211\u4E00\u76F4\u5728\u56DB\u5904\u6536\u96C6\u4E09\u57CE\u533A\u7684\u7981\u54C1...

S:

That sounds both vague and dangerous.\u542C\u7740\u662F\u65E2\u542B\u7CCA\u53C8\u5371\u9669\u554A\u3002

R:

I was hoping we could use your safe house, John, seeing as we went to all the trouble of saving them in the first place.\u6211\u5E0C\u671B\u80FD\u501F\u7528\u4E0B\u4F60\u7684\u5B89\u5168\u5C4B\uFF0C\u7EA6\u7FF0\uFF0C\u6BD5\u7ADF\u6211\u4EEC\u4E4B\u524D\u6551\u4ED6\u4EEC\u53EF\u8D39\u4E86\u4E0D\u5C11\u529B\u6C14\u3002And as much as I&#39;d love some girl talk, you need to go to the Carlton Hotel.\u6211\u771F\u60F3\u591A\u8DDF\u4F60\u60C5\u8BDD\u7EF5\u7EF5\u4E00\u4F1A\u513F\uFF0C\u4E0D\u8FC7\u4F60\u5F97\u53BB\u8D9F\u5361\u5C14\u987F\u9152\u5E97\u3002

S:

And, uh, why do I need a satphone?\u6211\u8981\u536B\u661F\u7535\u8BDD\u5E72\u561B\uFF1F

R:

Trust me.\u76F8\u4FE1\u6211\u5566\u3002

9.3. 00:09:34\u201400:12:12
S:

Root, I&#39;m at the Carlton. What now?\u6839\uFF0C\u6211\u5230\u5361\u5C14\u987F\u4E86\u3002\u73B0\u5728\u600E\u4E48\u505A\uFF1F

R:

The machine doesn&#39;t know exactly what it&#39;s looking for, so you&#39;ll need to tell me what you see.\u673A\u5668\u4E0D\u77E5\u9053\u5177\u4F53\u8981\u627E\u4EC0\u4E48\uFF0C\u6240\u4EE5\u4F60\u5F97\u628A\u4F60\u770B\u5230\u7684\u544A\u8BC9\u6211\u3002

S:

I spy... government license plates.\u6211\u770B...\u5230\u653F\u5E9C\u8F66\u724C\u3002Secret Service.\u7279\u52E4\u5C40\u3002

R:

The machine must be seeing clearly now. We&#39;re getting numbers.\u673A\u5668\u73B0\u5728\u80AF\u5B9A\u662F\u770B\u6E05\u695A\u4E86\u3002\u6211\u4EEC\u6709\u53F7\u7801\u4E86\u3002Oh, my... Five of them. And I know the first one by heart.\u5929\u554A\u3002\u4E94\u4E2A\u554A\u3002\u7B2C\u4E00\u4E2A\u70E7\u6210\u7070\u6211\u4E5F\u8BA4\u5F97\u3002

S:

Control. That&#39;s whose number we got?\u4E3B\u63A7\u8005\u3002\u662F\u5979\u7684\u53F7\u7801\uFF1F

R:

Control understands how the machine works. So she&#39;s covering her tracks.\u4E3B\u63A7\u8005\u4E86\u89E3\u673A\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u3002\u6240\u4EE5\u5979\u5728\u63A9\u76D6\u81EA\u5DF1\u7684\u884C\u8E2A\u3002

S:

The machine saw something. And if Control is behind it, then it&#39;s something bad.\u673A\u5668\u770B\u5230\u8981\u51FA\u4E8B\u4E86\u3002\u65E2\u7136\u4E8B\u5173\u4E3B\u63A7\u8005\uFF0C\u90A3\u80AF\u5B9A\u4E0D\u662F\u597D\u4E8B\u3002

J:

Is this really what the machine asked us to do, drink very bad coffee with... unemployed college graduates?\u673A\u5668\u5C31\u8BA9\u6211\u4EEC\u505A\u8FD9\u4E8B\u5417\uFF1F\u559D\u7740\u70C2\u5496\u5561\uFF0C\u966A\u7740\u2026\u5931\u4E1A\u7684\u5927\u5B66\u6BD5\u4E1A\u751F\uFF1F

R:

Patience, John.\u8010\u5FC3\u70B9\uFF0C\u7EA6\u7FF0\u3002Are you in, Shaw?\u4F60\u8FDB\u53BB\u4E86\u5417\uFF0C\u8096\uFF1F

S:

15th floor, just like you asked. You wanna tell me where I&#39;m going?\u5341\u4E94\u697C\uFF0C\u5982\u4F60\u8981\u6C42\u3002\u6253\u7B97\u544A\u8BC9\u6211\u8981\u53BB\u54EA\u513F\u5417\uFF1F

R:

First door, down on your left. You&#39;ll need to let yourself in.\u5DE6\u8FB9\u7B2C\u4E00\u6247\u95E8\u3002\u60F3\u529E\u6CD5\u8FDB\u53BB\u3002You might wanna use your silencer.\u4F60\u53EF\u80FD\u8981\u7528\u6D88\u97F3\u5668\u3002

S:

Don&#39;t.\u522B\u3002Next time your all-seeing other half wants me to break into a room filled with secret service guys a little heads up would be great.\u4E0B\u6B21\u4F60\u90A3\u5404\u79CD\u80FD\u770B\u7684\u53E6\u4E00\u534A\u518D\u60F3\u8BA9\u6211\u95EF\u5165\u6EE1\u662F\u7279\u52E4\u5C40\u7279\u5DE5\u7684\u623F\u95F4\u65F6\uFF0C\u9884\u5148\u63D0\u9192\u4E00\u4E0B\u6BD4\u8F83\u597D\u3002

R:

She knows you can handle yourself.\u5979\u77E5\u9053\u4F60\u80FD\u641E\u5B9A\u3002

S:

Okay, so we&#39;ve got eyes and ears on Control. She&#39;s with some guy-- tall, gray hair. Very serious.\u884C\u4E86\uFF0C\u53EF\u4EE5\u76D1\u63A7\u4E3B\u63A7\u8005\u4E86\u3002\u5979\u8DDF\u4E2A\u7537\u4EBA\u5728\u4E00\u8D77\u2014\u2014\u9AD8\u4E2A\uFF0C\u7070\u53D1\u3002\u5F88\u4E25\u8083\u554A\u3002R: Senator Ross Garrison, our second number. Have their other friends arrived yet?\u7F57\u65AF\xB7\u52A0\u91CC\u68EE\u53C2\u8BAE\u5458\uFF0C\u6211\u4EEC\u7684\u7B2C\u4E8C\u4E2A\u53F7\u7801\u3002\u4ED6\u4EEC\u5176\u4ED6\u670B\u53CB\u5230\u4E86\u5417\uFF1F

S:

That woman&#39;s got friends?\u8FD9\u5973\u4EBA\u8FD8\u6709\u670B\u53CB\uFF1F

9.4. 00:13:38--00:14:27
S:

Are you two hearing this?\u542C\u5230\u4E86\u5417\uFF1FThey&#39;re ready to get in bed with Decima and go all 1984 on us.\u4ED6\u4EEC\u8981\u8DDF\u5FB7\u897F\u739B\u52FE\u642D\uFF0C\u5B9E\u884C\u300A\u4E00\u4E5D\u516B\u56DB\u300B\u5F0F\u6743\u5A01\u76D1\u63A7\u3002I mean...more than usual. Let me just shoot &#39;em now.\u6211\u662F\u8BF4\u2026\u6BD4\u73B0\u5728\u8FD8\u72E0\u7684\u3002\u6211\u628A\u4ED6\u4EEC\u5168\u7A81\u7A81\u5F97\u4E86\u3002

R:

We still don&#39;t know if they&#39;re the perpetrators yet, Shaw.\u6211\u4EEC\u8FD8\u4E0D\u77E5\u9053\u4ED6\u4EEC\u662F\u4E0D\u662F\u884C\u51F6\u8005\uFF0C\u8096\u3002

S:

You&#39;re joking. It&#39;s Control. She almost killed you, Root, and me and Harold. Should I continue?\u5F00\u73A9\u7B11\u5427\u3002\u90A3\u662F\u4E3B\u63A7\u8005\u3002\u5979\u5DEE\u70B9\u6740\u4E86\u4F60\uFF0C\u6839\uFF0C\u8FD8\u6709\u6211\uFF0C\u8FD8\u6709\u54C8\u7F57\u5FB7\u3002\u8FD8\u8981\u5217\u4E3E\u5417\uFF1F

R:

We all make mistakes.\u4EBA\u5B70\u65E0\u8FC7\u3002Look at the front door. What do you see?\u770B\u6B63\u95E8\u3002\u770B\u5230\u4EC0\u4E48\uFF1F

S:

More government plates.\u66F4\u591A\u653F\u5E9C\u8F66\u724C\u3002These our other numbers?\u90FD\u662F\u53F7\u7801\uFF1F

R:

Yes.\u662F\u7684\u3002Head of the NSA, General Kyle Holcombe, and Manuel Rivera, senior advisor to the president.\u56FD\u5B89\u5C40\u7684\u5934\uFF0C\u5361\u5C14\xB7\u970D\u5C14\u5E93\u59C6\u5C06\u519B\uFF0C\u8FD8\u6709\u66FC\u7EBD\xB7\u91CC\u7EF4\u62C9\u603B\u7EDF\u9AD8\u7EA7\u987E\u95EE

S:

And what about the fifth number?\u90A3\u7B2C\u4E94\u4E2A\u53F7\u7801\u5462\uFF1F

R:

That one&#39;s still a question mark.\u8FD8\u662F\u4E2A\u95EE\u53F7\u3002

S:

Okay, so... just to confirm, you&#39;re saying I can&#39;t kill Control yet.\u597D\u5427 \uFF0C\u5C31\u786E\u8BA4\u4E00\u4E0B\uFF0C\u4F60\u662F\u8BF4\u6211\u8FD8\u4E0D\u80FD\u6740\u4E3B\u63A7\u8005\u3002

R:

Stay the course, Sameen.\u575A\u6301\u4F4F\u554A\uFF0C\u8428\u59C6\u6069\u3002

S:

Fine.\u597D\u5427\u3002But just remember I told you so when all this goes pear-shaped.\u56DE\u5934\u8981\u5931\u63A7\u4E86\uFF0C\u522B\u602A\u6211\u6CA1\u63D0\u9192\u8FC7\u4E86\u3002

9.5. 00:19:35--00:19:41
S:

Control just went in for the full-court press on total world domination.\u4E3B\u63A7\u8005\u521A\u624D\u5168\u573A\u7D27\u903C\uFF0C\u51C6\u5907\u7EDF\u6CBB\u4E16\u754C\u4E86\u3002Can I kill her now?\u73B0\u5728\u80FD\u6740\u5979\u4E86\u5427\uFF1F

R:

Not yet.\u8FD8\u4E0D\u884C\u3002

9.6. 00:21:20--00:21:39
S:

Did you say &quot;Vigilance?&quot; because... they&#39;re here. It must be to kill Control and the others.\u4F60\u521A\u662F\u8BF4\u201C\u65F6\u523B\u8B66\u60D5\u201D\u5417\uFF1F\u56E0\u4E3A...\u4ED6\u4EEC\u6765\u4E86\u3002\u4E00\u5B9A\u662F\u6765\u5E72\u6389\u4E3B\u63A7\u8005\u548C\u5176\u4ED6\u4EBA\u7684\u3002

R:

I&#39;m not a big fan of kicking a guy when he&#39;s down, But... sometimes it does the trick. Now tell us your plan.\u6211\u4E0D\u592A\u559C\u6B22\u843D\u4E95\u4E0B\u77F3\uFF0C\u4E0D\u8FC7\u2026\u7BA1\u7528\u554A\u3002\u8BF4\u51FA\u4F60\u4EEC\u7684\u8BA1\u5212\u3002

9.7. 00:25:18--00:25:40
R:

Shaw? I think it&#39;s time you had a chat with your old boss.\u8096\uFF1F\u6211\u770B\u4F60\u53EF\u4EE5\u53BB\u8DDF\u65E7\u8001\u677F\u804A\u804A\u5929\u4E86\u3002

S:

I&#39;m on it. We&#39;ll chat about how I&#39;m gonna kill her.\u9A6C\u4E0A\u53BB\u3002\u6211\u4EEC\u5F97\u804A\u804A\u6211\u5982\u4F55\u5BB0\u4E86\u5979\u3002

R:

Use your words.\u541B\u5B50\u52A8\u53E3\u4E0D\u52A8\u624B\u3002

S:

Okay, so she&#39;s the victim this time. But what about the next?\u597D\u5427\uFF0C\u5979\u8FD9\u6B21\u662F\u53D7\u5BB3\u8005\u3002\u90A3\u4E0B\u6B21\u5462\uFF1F

J:

Listen, Shaw. If Control&#39;s in touch with Greer, she&#39;ll lead us to Harold. Your trigger finger gets itchy, we&#39;ll get nothing and he dies.\u542C\u7740\uFF0C\u8096\u3002\u65E2\u7136\u4E3B\u63A7\u8005\u8DDF\u683C\u91CC\u5C14\u6709\u8054\u7CFB\uFF0C\u5979\u5C31\u80FD\u5E26\u7740\u6211\u4EEC\u627E\u5230\u54C8\u7F57\u5FB7\u3002\u4F60\u8981\u662F\u4E00\u65F6\u624B\u75D2\u6CA1\u5FCD\u4F4F\uFF0C\u6211\u4EEC\u843D\u4E86\u7A7A\uFF0C\u4ED6\u4F1A\u6B7B\u3002

S:

Low blow, Reese.\u9634\u554A\uFF0C\u91CC\u745F\u3002

9.8. 00:35:24--00:36:05
S:

Now&#39;s not a good time.\u73B0\u5728\u771F\u4E0D\u662F\u65F6\u5019\u3002

R:

Remember when I said Finch wasn&#39;t in imminent danger? I may have been a little hasty.\u8BB0\u5F97\u6211\u8BF4\u8FC7\u82AC\u5947\u6682\u65F6\u6CA1\u6709\u5371\u9669\u5417\uFF1F\u6211\u53EF\u80FD\u8FC7\u4E8E\u8F7B\u7387\u4E86\u3002In good news... I know who the fifth number belongs to. It was tucked away under several aliases, but... even MI6 can&#39;t hide from her.\u597D\u6D88\u606F\u662F\u2026\u6211\u77E5\u9053\u7B2C\u4E94\u4E2A\u53F7\u7801\u662F\u8C01\u4E86\u3002\u5B83\u88AB\u597D\u51E0\u4E2A\u5047\u540D\u63A9\u76D6\u4E86\uFF0C\u4F46\u662F\u2026\u519B\u60C5\u516D\u5904\u4E5F\u7792\u4E0D\u4E86\u5979\u3002Mr. Greer.\u683C\u91CC\u5C14\u5148\u751F\u3002

S:

And Greer has Finch.\u683C\u91CC\u5C14\u6293\u4E86\u82AC\u5947\u3002Which means that Vigilance is about to have him unless we can get to him first.\u5C31\u662F\u8BF4&quot;\u65F6\u523B\u8B66\u60D5&quot;\u5FEB\u6293\u5230\u4ED6\u4E86\uFF0C\u9664\u975E\u6211\u4EEC\u62A2\u5148\u4E00\u6B65\u3002

R:

You won&#39;t make it there in time.\u4F60\u4EEC\u6765\u4E0D\u53CA\u8D76\u5230\u90A3\u91CC\u4E86\u3002

S:

Where&#39;s &quot;there,&quot; Root?\u201C\u90A3\u91CC\u201D\u662F\u54EA\u91CC\uFF0C\u6839\uFF1F

R:

Still too hard to see.\u5C1A\u4E0D\u6E05\u695A\u3002

S:

Then how are we supposed to find him?\u90A3\u6211\u4EEC\u600E\u4E48\u627E\u4ED6\uFF1F

R:

The machine doesn&#39;t know. But Hersh does.\u673A\u5668\u4E5F\u4E0D\u77E5\u9053\u3002\u4F46\u8D6B\u4EC0\u77E5\u9053\u3002Be careful, Shaw.\u5343\u4E07\u5C0F\u5FC3\uFF0C\u8096\u3002

10. S03E23
10.1. 00:03:10--00:03:49
R:

Be at the intersection of 5th and 23rd in 15 minutes.\u5341\u4E94\u5206\u949F\u5185\u8D76\u53BB\u7B2C\u4E94\u5927\u9053\u548C23\u8857\u7684\u4EA4\u53C9\u53E3\u3002Good-bye, Shaw.\u62DC\uFF0C\u8096\u3002

S:

Wait, Root, is that all? Where are you?\u7B49\u7B49\uFF0C\u6839\uFF0C\u5C31\u8FD9\u6837\uFF1F\u4F60\u5728\u54EA\u513F\uFF1F

R:

Right where I&#39;m supposed to be.\u5728\u6211\u8BE5\u5728\u7684\u5730\u65B9\u3002

S:

You found it, didn&#39;t you.\u4F60\u627E\u5230\u5B83\u4E86\uFF0C\u662F\u5417\u3002Samaritan.\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u3002

R:

Maybe.\u4E5F\u8BB8\u5427\u3002Did you find Harold? She&#39;s worried about him. So am I.\u4F60\u4EEC\u627E\u5230\u54C8\u7F57\u5FB7\u4E86\u5417\uFF1F\u5979\u5F88\u62C5\u5FC3\u4ED6\u3002\u6211\u4E5F\u662F\u3002

S:

We&#39;re working on it, but seriously, are you about to kamikaze into a Decima fortress with a bunch of nerds?\u8FD8\u5728\u627E\uFF0C\u8BF4\u771F\u7684\uFF0C\u4F60\u771F\u7684\u51C6\u5907\u8DDF\u7FA4\u4E66\u5446\u5B50\u4E00\u8D77\u95EF\u5FB7\u897F\u739B\u5821\u5792\u627E\u6B7B\u5417\uFF1F

R:

Didn&#39;t know you cared, Shaw, and it&#39;s just me now.\u539F\u6765\u4F60\u8FD9\u4E48\u5728\u4E4E\u6211\u554A\uFF0C\u8096\uFF0C\u5176\u5B9E\u73B0\u5728\u53EA\u6709\u6211\u3002

S:

But the machine has your back, right?\u4F46\u662F\u673A\u5668\u4F1A\u5E2E\u4F60\uFF0C\u662F\u5417\uFF1FRight?\u662F\u5417\uFF1F

R:

23rd and 5th. 12 minutes. Tick-tock.23\u8857\u548C\u7B2C\u4E94\u5927\u9053\u4EA4\u53C9\u53E3\u3002\u5341\u4E8C\u5206\u949F\u3002\u65F6\u95F4\u4E0D\u7B49\u4EBA\u3002

10.2. 00:11:02--00:11:32
R:

Looks like someone crawled in under the fence.\u770B\u6765\u67D0\u4EBA\u722C\u5C71\u6D89\u6C34\u800C\u6765\u3002Admit it, you were worried about me.\u627F\u8BA4\u5427\uFF0C\u4F60\u62C5\u5FC3\u6211\u3002

S:

I&#39;m worried about the mission. Reese and Hersh are trying to save Finch, but that won&#39;t matter if Samaritan kills us all.\u6211\u662F\u62C5\u5FC3\u4EFB\u52A1\u3002\u91CC\u745F\u548C\u8D6B\u4EC0\u5728\u60F3\u529E\u6CD5\u6551\u82AC\u5947\uFF0C\u4F46\u8981\u662F&quot;\u6492\u9A6C\u5229\u4E9A\u4EBA&quot;\u628A\u54B1\u5168\u6740\u6389\u5C31\u767D\u8D39\u4E86\u3002

R:

Then let&#39;s get to work.\u90A3\u5C31\u5F00\u59CB\u5E72\u6D3B\u5427\u3002

S:

It&#39;s gonna be that kind of party, huh?\u73A9\u513F\u7684\u662F\u8FD9\u4E2A\u554A\uFF1F

R:

Decima tags its people. Anyone who doesn&#39;t have an RFID chip will stick out like a sore thumb.\u5FB7\u897F\u739B\u628A\u6807\u7B7E\u690D\u5165\u4EBA\u4F53\u3002\u6CA1\u6709\u5C04\u9891\u5FAE\u82AF\u7247\u7684\u4EBA\u4F1A\u8F7B\u6613\u88AB\u8BA4\u51FA\u3002Ready for your shot?\u51C6\u5907\u597D\u6253\u9488\u4E86\u5417\uFF1F

10.3. 00:16:39--00:17:19
S:

As soon as this is over, I&#39;m cutting this stupid chip out of my arm.\u8FD9\u4E8B\u4E00\u5B8C\uFF0C\u6211\u9A6C\u4E0A\u5207\u6389\u80F3\u818A\u91CC\u8FD9\u7834\u82AF\u7247\u3002

R:

I&#39;ll do yours if you do mine.\u4F60\u641E\u6211\u7684\uFF0C\u6211\u5C31\u641E\u4F60\u7684\u3002Ready for the moment of truth-- or lies really?\u51C6\u5907\u597D\u8FCE\u63A5\u771F\u76F8\u2014\u2014\u6216\u8005\u8BF4\u662F\u8C0E\u8A00\u4E86\u5417\uFF1F

S:

Damn it.\u8BE5\u6B7B\u3002Computers can bite me.\u7535\u8111\u6700\u626F\u86CB\u4E86\u3002

10.4. 00:24:57--00:25:30
S:

So this is Samaritan&#39;s brain?\u8FD9\u5C31\u662F\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u7684\u5927\u8111\uFF1F

R:

Part of it.\u4E00\u90E8\u5206\u3002

S:

So what&#39;s the deal, you just plug &#39;em in, then it&#39;s lights out, Samaritan?\u600E\u4E48\u641E\uFF0C\u4F60\u4E00\u63D2\u4E0A\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u5C31\u7184\u706F\u4E86\uFF1F

R:

Something like that.\u5DEE\u4E0D\u591A\u5427\u3002

S:

These two rows didn&#39;t light up. It didn&#39;t work?\u8FD9\u4E24\u5217\u6CA1\u4EAE\u3002\u4E0D\u7BA1\u7528\u5417\uFF1F

R:

Those lights staying dark is a good thing. Samaritan&#39;s A.I. won&#39;t get switched on until Greer gets the government feeds. Those lights turn blue...\u90A3\u4E9B\u706F\u4E0D\u4EAE\u662F\u597D\u4E8B\u3002\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\u7684\u4EBA\u5DE5\u667A\u80FD\u8981\u5F00\u542F\u5FC5\u987B\u8981\u683C\u91CC\u5C14\u62FF\u5230\u653F\u5E9C\u4FE1\u53F7\u3002\u90A3\u4E9B\u706F\u8981\u662F\u53D8\u84DD\u4E86...

S:

We&#39;re screwed.\u6211\u4EEC\u5C31\u5B8C\u86CB\u4E86\u3002

R:

We&#39;re inside a sleeping giant, Shaw. Try not to wake it up.\u6211\u4EEC\u5728\u6C89\u7761\u7684\u5DE8\u4EBA\u8179\u4E2D\uFF0C\u8096\u3002\u522B\u628A\u5B83\u5435\u9192\u4E86\u3002

10.5. 00:36:47--00:37:22
R:

Last one. Want to get out of here?\u6700\u540E\u4E00\u4E2A\u3002\u60F3\u79BB\u5F00\u4E86\u5417\uFF1F

S:

Not without an insurance policy in case your way doesn&#39;t work.\u5F97\u5148\u627E\u597D\u4FDD\u9669\uFF0C\u514D\u5F97\u4F60\u90A3\u62DB\u4E0D\u7BA1\u7528\u3002

S:

Just tell me where to put this thing--\u544A\u8BC9\u6211\u8FD9\u73A9\u610F\u513F\u653E\u54EA\u91CC\u2014\u2014

R:

This facility is 1 of 100 just like it all over the world. It would take years to destroy them all, and Decima would only rebuild them.\u50CF\u8FD9\u6837\u7684\u8BBE\u5907\u5168\u4E16\u754C\u5230\u5904\u90FD\u6709\u3002\u8981\u82B1\u8D39\u6570\u5E74\u624D\u80FD\u5168\u90E8\u6467\u6BC1\uFF0C\u800C\u4E14\u5FB7\u897F\u739B\u53EF\u4EE5\u8F7B\u6613\u91CD\u5EFA\u3002

S:

Then your magic boxes better shut this thing down.\u4F60\u90A3\u4E9B\u9B54\u672F\u76D2\u6700\u597D\u80FD\u5173\u4E86\u8FD9\u4E1C\u897F\u3002

R:

Shaw, this was never about turning it off.\u8096\uFF0C\u6211\u4EEC\u4E0D\u662F\u6765\u5173\u5B83\u7684\u3002

S:

Then what the hell have we been doing?\u90A3\u6211\u4EEC\u5230\u5E95\u662F\u6765\u5E72\u561B\u7684\uFF1F

R:

I hear you. We need to go. She says we&#39;re in danger.\u77E5\u9053\u4E86\u3002\u6211\u4EEC\u5F97\u8D70\u4E86\u3002\u5979\u8BF4\u6211\u4EEC\u6709\u5371\u9669\u3002

`,excerpt:"",url:"/posts\\Vedio\\poi-lines03"},{title:"POI lines S04",content:`
1. S04E01
1.1. 00:04:51--00:05:48
S:

Okay, this day job thing, not really working out.\u8FD9\u79CD\u6B63\u804C\uFF0C\u6211\u53D7\u4E0D\u4E86\u3002

R:

Sorry, Sam. You need an identity. And you need to trust the machine.\u62B1\u6B49\uFF0C\u8428\u59C6\u3002\u4F60\u9700\u8981\u4E00\u4E2A\u8EAB\u4EFD\u3002\u800C\u4E14\u4F60\u5F97\u4FE1\u4EFB\u673A\u5668\u3002
S:
Wait, the machine put me in this silly-ass job?\u7B49\u7B49\uFF0C\u662F\u673A\u5668\u5B89\u6392\u6211\u5E72\u8FD9\u50BB\u903C\u5DE5\u4F5C\u7684\uFF1F

R:

It&#39;s the only way to keep you alive and off Samaritan&#39;s radar.\u53EA\u6709\u8FD9\u6837\u624D\u80FD\u4FDD\u4F4F\u4F60\u7684\u547D\uFF0C\u4E0D\u88AB\u6492\u9A6C\u5229\u4E9A\u4EBA\u53D1\u73B0\u3002For what it&#39;s worth, I really like the new look.\u4E0D\u8FC7\u5462\uFF0C\u6211\u597D\u559C\u6B22\u4F60\u7684\u65B0\u5F62\u8C61\u3002You&#39;re definitely an autumn.\u4F60\u7EDD\u914D\u79CB\u8272\u7CFB\u3002

S:

I could stab you with my stiletto.\u4FE1\u4E0D\u4FE1\u6211\u62FF\u8DDF\u978B\u8E39\u4F60\u3002Enough already.\u89C1\u597D\u5C31\u6536\u554A\u3002Now when are we getting new numbers?\u6211\u4EEC\u4EC0\u4E48\u65F6\u5019\u80FD\u591F\u6536\u5230\u65B0\u53F7\u7801\uFF1F

R:

Keep it down.\u5C0F\u58F0\u70B9\u3002The machine has its reasons. Stay in character. Follow the calendar on the phone I gave you. Check Angler. Maybe find a match.\u673A\u5668\u884C\u4E8B\u81EA\u6709\u9053\u7406\u3002\u626E\u597D\u81EA\u5DF1\u7684\u89D2\u8272\u3002\u7167\u7740\u6211\u7ED9\u4F60\u7684\u624B\u673A\u4E0A\u7684\u65E5\u7A0B\u884C\u4E8B\u3002\u67E5\u67E5\u201C\u613F\u8005\u4E0A\u94A9\u201D\u3002\u4E5F\u8BB8\u80FD\u627E\u5230\u914D\u5BF9\u3002        

S:

A match? As in a date?\u914D\u5BF9\uFF1F\u7EA6\u4F1A\u5BF9\u8C61\uFF1F

R:

Make it look good.\u626E\u6F02\u4EAE\u70B9\u3002But for now, I need you to make me look good.\u4E0D\u8FC7\u73B0\u5728\uFF0C\u6211\u8981\u4F60\u5148\u628A\u6211\u626E\u6F02\u4EAE\u70B9\u3002New job interview.\u65B0\u5DE5\u4F5C\u9762\u8BD5\u3002

S:

Just promise me John&#39;s a barista.\u544A\u8BC9\u6211\u7EA6\u7FF0\u5728\u7ED9\u4EBA\u7AEF\u8336\u5012\u6C34\u3002


1.2. 00:38:53--00:39:28
R:

Didn&#39;t teach you knots in Girl Scouts?\u4F60\u5728\u5973\u7AE5\u5B50\u519B\u65F6\u6CA1\u5B66\u6253\u7ED3\u5417\uFF1F

S:

Are you checking up on me?\u4F60\u662F\u6765\u67E5\u5C97\u7684\u5417\uFF1F

R:

I worry about you, Sameen.\u6211\u662F\u62C5\u5FC3\u4F60\uFF0C\u8428\u59C6\u6069\u3002I also have a black-tie dinner tonight, and I need a new polish, something bold.\u6211\u4ECA\u665A\u8FD8\u6709\u4E2A\u6B63\u5F0F\u665A\u5BB4\uFF0C\u6211\u9700\u8981\u65B0\u6307\u7532\u6CB9\uFF0C\u8272\u8C03\u8981\u5927\u80C6\u3002And you should check your calendar. I think you have a coffee date.\u4F60\u5E94\u8BE5\u67E5\u770B\u4E0B\u4F60\u7684\u65E5\u7A0B\u3002\u4F60\u597D\u50CF\u7EA6\u4E86\u4EBA\u559D\u5496\u5561\u3002

S:

No way. The machine stuck me in this retail hell. There&#39;s no way I&#39;m letting it near my love life.\u6CA1\u95E8\u3002\u673A\u5668\u628A\u6211\u6254\u5728\u4E86\u8FD9\u5546\u54C1\u5730\u72F1\u3002\u6211\u624D\u4E0D\u4F1A\u8BA9\u5B83\u518D\u63D2\u624B\u6211\u7684\u7231\u60C5\u751F\u6D3B\u3002

R:

She has a reason for everything, even if sometimes it requires you to act like a well-adjusted member of society.\u5979\u505A\u6BCF\u4EF6\u4E8B\u90FD\u81EA\u6709\u9053\u7406\uFF0C\u5305\u62EC\u6709\u65F6\u8981\u4F60\u8868\u73B0\u5F97\u50CF\u4E2A\u6B63\u5E38\u7684\u793E\u4F1A\u6210\u5458\u3002Trust her.\u76F8\u4FE1\u5979\u3002

2. S04E02
2.1. 00:03:08--00:03:53
R:

Kiss kiss to you too.\u4E48\u4E48\u54D2\u3002

S:

Whatever this is, you have 29 seconds.\u4F60\u8981\u5E72\u561B\uFF0C\u53CD\u6B63\u53EA\u526929\u79D2\u3002

R:

Just checking in. New job and all.\u6765\u770B\u770B\u3002\u65B0\u5DE5\u4F5C\u5982\u4F55\u3002

S:

Skip the orientation, all right? I&#39;ve got this.\u7701\u7701\u5427\uFF1F\u6211\u6CA1\u95EE\u9898\u3002

R:

No burning questions?\u6CA1\u4EC0\u4E48\u7279\u522B\u60F3\u95EE\u7684\u5417\uFF1F

S:

Just one--why? These covers are supposed to make us look ordinary, so why would the machine make me--\u5C31\u4E00\u4E2A\u2014\u2014\u4E3A\u4EC0\u4E48\uFF1F\u63A9\u62A4\u8EAB\u4EFD\u5E94\u8BE5\u662F\u8BA9\u6211\u4EEC\u770B\u8D77\u6765\u666E\u901A\uFF0C\u4E3A\u4EC0\u4E48\u673A\u5668\u8BA9\u6211\u6210\u4E3A\u2014\u2014

R:

A criminal? Criminals are ordinary, Sameen. Every city&#39;s got them.\u7F6A\u72AF\u5417\uFF1F\u7F6A\u72AF\u5F88\u666E\u901A\u7684\uFF0C\u8428\u59C6\u6069\u6BCF\u4E2A\u57CE\u5E02\u90FD\u6709\u3002

S:

13 seconds.13\u79D2\u3002

R:

Only two mistakes you can make that&#39;ll put you on anyone&#39;s radar.\u53EA\u6709\u4E24\u4E2A\u9519\u8BEF\u4F1A\u8BA9\u4F60\u88AB\u76EF\u4E0A\u3002Number one, getting caught.\u7B2C\u4E00\uFF0C\u88AB\u6293\u3002

S:

Getting caught? If I apply even half of my skills and training--\u88AB\u6293\uFF1F\u53EA\u8981\u6211\u7528\u4E0A\u4E00\u534A\u7684\u8BAD\u7EC3\u6280\u5DE7\u2014\u2014

R:

You&#39;ll be making mistake number two-- drawing too much attention.\u90A3\u4F60\u5C31\u4F1A\u72AF\u7B2C\u4E8C\u4E2A\u9519\u8BEF\u2014\u2014\u5438\u5F15\u8FC7\u591A\u7684\u6CE8\u610F\u529B\u3002You can be a good thief, just not too good.\u4F60\u53EF\u4EE5\u5F53\u4E2A\u597D\u8D3C\uFF0C\u4F46\u662F\u522B\u592A\u597D\u4E86\u3002Shoot for a B-plus.\u4FDD\u6301\u4E2D\u4E0A\u6C34\u51C6\u5C31\u884C\u3002

S:

Thanks for the rousing pep talk.\u8C22\u8C22\u4F60\u6E29\u6696\u4EBA\u5FC3\u7684\u9F13\u52B1\u3002

R:

That&#39;s what I&#39;m here for.\u4EBA\u5BB6\u6B63\u662F\u4E3A\u6B64\u800C\u6765\u561B\u3002

3. S04E05
3.1. 00:14:10--00:15:35
R:

Is he your number? Not very popular.\u4ED6\u5C31\u662F\u4F60\u7684\u53F7\u7801\uFF1F\u4E0D\u592A\u53D7\u6B22\u8FCE\u554A\u3002

S:

Pollster poached the election.\u9009\u4E3E\u7684\u6C11\u8C03\u4E13\u5BB6\u3002Why are you here?\u4F60\u6765\u5E72\u561B\uFF1F

R:

The machine wanted me here.\u673A\u5668\u8981\u6211\u6765\u3002

S:

Eeyore,where&#39;s the perky psycho? You&#39;re creeping me out.\u77A7\u8FD9\u8138\u62C9\u7684\uFF0C\u4F60\u7684\u6D3B\u6CFC\u53EF\u7231\u52B2\u513F\u5462\uFF1F\u53EF\u5413\u7740\u6211\u4E86\u3002

S:

Simon&#39;s got a tough act to follow.\u897F\u8499\u53EF\u6709\u5F97\u53D7\u4E86\u3002

S:

Any chance the machine clued you in to what&#39;s going on?\u673A\u5668\u80FD\u4E0D\u80FD\u8DDF\u4F60\u900F\u9732\u4E0B\u8FD9\u662F\u5728\u95F9\u4EC0\u4E48\uFF1F

S:

The way this guy&#39;s stonewalling. Maybe he&#39;s in on it.\u770B\u8FD9\u5BB6\u4F19\u4E00\u76F4\u62E6\u963B\u3002\u4E5F\u8BB8\u4ED6\u6709\u4EFD\u513F\u3002

S:

Nothing in the commissioner&#39;s email about the election being fixed. He&#39;s been dealing with that crazy employee all morning. Got a tip from an  anonymous account.	\u9009\u4E3E\u76D1\u5BDF\u5458\u7684\u90AE\u4EF6\u4E2D\u6CA1\u663E\u793A\u9009\u4E3E\u88AB\u52A8\u4E86\u624B\u811A\u3002\u4ED6\u6574\u4E2A\u65E9\u4E0A\u90FD\u5728\u5904\u7406\u90A3\u4E2A\u53D1\u75AF\u7684\u5458\u5DE5\u3002\u56E0\u4E3A\u63A5\u5230\u4E86\u533F\u540D\u7EBF\u62A5\u3002

R:

What else did Simon find?\u897F\u8499\u8FD8\u53D1\u73B0\u4E86\u4EC0\u4E48\uFF1F

S:

He just said that the auto dialer went rogue.\u4ED6\u4E4B\u524D\u8BF4\u81EA\u52A8\u62E8\u53F7\u6709\u95EE\u9898\u3002Harold, anything turn up?\u54C8\u7F57\u5FB7\uFF0C\u67E5\u5230\u4EC0\u4E48\u6CA1\uFF1F

H:

It&#39;s as if the calls just disappeared. Hit an invisible wall.\u4F3C\u4E4E\u90A3\u4E9B\u7535\u8BDD\u51ED\u7A7A\u6D88\u5931\u4E86\u3002\u88AB\u65E0\u5F62\u7684\u5899\u6321\u4E86\u56DE\u53BB\u3002

R:

This is why she wanted me here.\u8FD9\u5C31\u662F\u5979\u8BA9\u6211\u6765\u6B64\u7684\u539F\u56E0\u3002It&#39;s all connected.\u5168\u90FD\u6709\u8054\u7CFB\u3002

3.2. 00:16:07--00:16:28
S:

Harold, Simon was about to get caught in the crossfire of a work dispute.\u54C8\u7F57\u5FB7\uFF0C\u897F\u8499\u5DEE\u70B9\u5377\u8FDB\u4E00\u8D77\u5DE5\u4F5C\u7EA0\u7EB7\u67AA\u51FB\u6848\u3002

R:

No. That&#39;s only what it was meant to look like. What Simon saw--the calls, the votes, the emails-- The election was fixed by something that can manipulate electronic signals without a trace. Samaritan rigged the election. Now it&#39;s cleaning up.\u4E0D\u3002\u90A3\u53EA\u662F\u8868\u9762\u4E0A\u3002\u897F\u8499\u6240\u89C1\u2014\u2014\u7535\u8BDD\u3001\u6295\u7968\u3001\u90AE\u4EF6\u3001\u9009\u4E3E\u88AB\u52A8\u4E86\u624B\u811A\u3002\u52A8\u624B\u8005\u53EF\u4EE5\u6BEB\u65E0\u75D5\u8FF9\u5730\u64CD\u7EB5\u7535\u5B50\u4FE1\u53F7\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u9009\u4E3E\u821E\u5F0A\u3002\u73B0\u5728\u6740\u4EBA\u706D\u53E3\u3002

3.3. 00:18:28--00:19:18
H:

Samaritan has begun to intervene invisibly in human affairs.\u6492\u9A6C\u5229\u4E9A\u4EBA\u5DF2\u7ECF\u5F00\u59CB\u6697\u4E2D\u4ECB\u5165\u4EBA\u7C7B\u6D3B\u52A8\u4E86\u3002

S:

And it&#39;s killing to cover it up.\u800C\u4E14\u8FD8\u6740\u4EBA\u63A9\u7F6A\u3002

R:

It profiles unstable people like that guy. It anonymously sent evidence to get him fired and arrested, knowing he&#39;d snap. He was an unwitting hit man. He&#39;d kill the Commissioner, and Simon would be collateral damage.\u5B83\u5206\u6790\u4FA7\u5199\u5371\u9669\u5206\u5B50\u5C31\u50CF\u90A3\u4F4D\u3002\u7136\u540E\u533F\u540D\u4E3E\u62A5\uFF0C\u8BA9\u4ED6\u88AB\u5F00\u9664\u5E76\u902E\u6355\u3002\u77E5\u9053\u4ED6\u4E00\u5B9A\u4F1A\u62A5\u590D\uFF0C\u8BA9\u4ED6\u65E0\u610F\u4E2D\u5F53\u4E86\u6740\u624B\u3002\u4ED6\u4F1A\u6740\u6B7B\u76D1\u5BDF\u5458\u3002\u800C\u897F\u8499\u5C31\u662F\u9644\u5E26\u4F24\u5BB3\u3002

H:

If Simon tries to go public, he only puts himself in more danger. This must remain a cold war. He needs to keep quiet.\u5982\u679C\u897F\u8499\u5411\u516C\u4F17\u516C\u5F00\uFF0C\u4ED6\u53EA\u4F1A\u66F4\u52A0\u5371\u9669\u3002\u51B7\u6218\u4E0D\u80FD\u518D\u5347\u7EA7\u4E86\u3002\u4ED6\u5FC5\u987B\u4FDD\u6301\u6C89\u9ED8\u3002

S:

So are you saying we just let this rigged election slide?\u4F60\u7684\u610F\u601D\u662F\u6211\u4EEC\u5C31\u773C\u7741\u7741\u653E\u8FC7\u9009\u4E3E\u821E\u5F0A\uFF1F

H:

No, Samaritan has positioned Perez to use the full executive powers of the State, which means she&#39;s integral to its plan. which means she&#39;s integral to its plan.\u4E0D\uFF0C\u6492\u9A6C\u5229\u4E9A\u4EBA\u65E2\u7136\u5B89\u6392\u4F69\u96F7\u65AF\u638C\u63E1\u5168\u5DDE\u7684\u884C\u653F\u5927\u6743\uFF0C\u90A3\u5C31\u662F\u8BF4\u5979\u662F\u5B83\u8BA1\u5212\u7684\u4E00\u90E8\u5206\u3002\u6211\u4EEC\u5F97\u903C\u5979\u8F9E\u804C\u3002

R:

Every politician has skeletons.\u5929\u4E0B\u653F\u5BA2\u4E00\u822C\u9ED1\u3002

H:

I&#39;ll dig into her digital footprint, but Ms. Groves, I could use your assistance.\u6211\u4F1A\u8FFD\u67E5\u5979\u7684\u7F51\u7EDC\u6570\u636E\u8D44\u6599\uFF0C\u4F46\u683C\u7F57\u592B\u65AF\u5973\u58EB\uFF0C\u6211\u9700\u8981\u4F60\u7684\u5E2E\u52A9\u3002

R:

I thought you&#39;d never ask.\u5C31\u6015\u4F60\u4E0D\u95EE\u5462\u3002

3.4. 00:23:38--00:24:33
S:

All right, people, we have a problem.\u6211\u8BF4\u4E24\u4F4D\uFF0C\u54B1\u4EEC\u6709\u9EBB\u70E6\u4E86\uFF0C

H:

Problem?\u9EBB\u70E6\uFF1F

S:

Look to your right. Simon snuck in. Since no one&#39;s returning his calls, he&#39;s taking the fight to Perez.\u770B\u53F3\u8FB9\u3002\u897F\u8499\u6E9C\u8FDB\u6765\u4E86\u3002\u6CA1\u4EBA\u56DE\u4ED6\u7684\u7535\u8BDD\uFF0C\u4ED6\u8981\u5411\u4F69\u96F7\u65AF\u5BA3\u6218\u3002

R:

He&#39;s gonna confront her in the middle of her own party. Cold war is about to turn hot.\u4ED6\u8981\u5728\u5E86\u529F\u5BB4\u4E0A\u8DDF\u5979\u5BF9\u8D28\u3002\u51B7\u6218\u5C31\u8981\u5347\u7EA7\u4E86\u3002
H:
We have to get him out of here without the cameras seeing us and without Simon realizing what we&#39;re doing.\u6211\u4EEC\u5F97\u5E26\u4ED6\u51FA\u53BB\u8FD8\u4E0D\u80FD\u8BA9\u6444\u50CF\u5934\u770B\u89C1\u3002\u4E0D\u80FD\u8BA9\u897F\u8499\u610F\u8BC6\u5230\u6211\u4EEC\u5728\u505A\u4EC0\u4E48\u3002

S:

Any ideas how I do that?\u90A3\u6211\u8981\u600E\u4E48\u505A\u5462\uFF1F

R:

Fall back now. There&#39;s an operative here for Simon. I think she&#39;s Samaritan. If so, she knows our faces.\u9A6C\u4E0A\u9000\u540E\u3002\u6709\u7279\u5DE5\u51B2\u897F\u8499\u6765\u4E86\u3002\u6211\u60F3\u5979\u662F\u6492\u9A6C\u5229\u4E9A\u4EBA\u3002\u5982\u679C\u8FD9\u6837\u7684\u8BDD\uFF0C\u5979\u8BA4\u5F97\u6211\u4EEC\u3002

S:

But if we don&#39;t do anything, Simon dies.\u4F46\u5982\u679C\u6211\u4EEC\u8896\u624B\u65C1\u89C2\uFF0C\u897F\u8499\u4F1A\u6B7B\u3002

R:

That woman wasn&#39;t here for Simon. Samaritan sent her to kill Perez.\u90A3\u5973\u4EBA\u4E0D\u662F\u51B2\u897F\u8499\u6765\u7684\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u6D3E\u5979\u6765\u6740\u4F69\u96F7\u65AF\u3002

3.5. 00:25:58--00:26:13
S:

Perez may have been that blonde bitch&#39;s target, but she&#39;s locked on Simon now.\u4F69\u96F7\u65AF\u4E4B\u524D\u662F\u90A3\u91D1\u53D1\u8D31\u4EBA\u7684\u76EE\u6807\uFF0C\u4F46\u5979\u73B0\u5728\u76EF\u4E0A\u897F\u8499\u4E86\u3002

R:

She&#39;s getting instructions in her earpiece. She&#39;s in God mode.\u5979\u5728\u901A\u8FC7\u8033\u673A\u63A5\u6536\u6307\u793A\u3002\u5979\u6709\u4E0A\u5E1D\u6A21\u5F0F\u3002We need keep Simon out of Samaritan&#39;s sight. This is why the machine give us a shadow map.\u897F\u8499\u4E0D\u53EF\u4EE5\u88AB\u6492\u9A6C\u5229\u4E9A\u4EBA\u770B\u89C1\u3002\u8FD9\u5C31\u662F\u673A\u5668\u7ED9\u6211\u4EEC\u9634\u5F71\u5730\u56FE\u7684\u539F\u56E0\u3002

S:

No cameras here.\u8FD9\u91CC\u6CA1\u6709\u6444\u50CF\u5934\u3002

3.6. 00:26:51---00:27:53
S:

I threw her off the scent.\u6211\u8BA9\u5979\u8DDF\u4E22\u4E86\u3002

H:

Simon&#39;s on the run. People are dying around him. He doesn&#39;t know why, but he knows he&#39;s in danger. He has to stay out of surveillance. There&#39;s a camera across the next intersection. He needs to turn right to remain hidden.\u897F\u8499\u5728\u9003\u3002\u8EAB\u8FB9\u7684\u4EBA\u7EB7\u7EB7\u6B7B\u53BB\u3002\u4ED6\u4E0D\u77E5\u9053\u539F\u56E0\uFF0C\u4F46\u77E5\u9053\u81EA\u5DF1\u6709\u5371\u9669\u4E86\u3002\u4ED6\u5FC5\u987B\u8FDC\u79BB\u76D1\u63A7\u3002\u4E0B\u4E00\u4E2A\u5341\u5B57\u8DEF\u53E3\u5BF9\u9762\u6709\u6444\u50CF\u5934\u3002\u4ED6\u5FC5\u987B\u53F3\u8F6C\u624D\u80FD\u4E0D\u88AB\u53D1\u73B0\u3002

R:

I&#39;ll give him a nudge.\u6211\u5E2E\u4ED6\u4E00\u628A\u3002

H:

Whose car was that?\u8FD9\u662F\u8C01\u7684\u8F66\uFF1F

R:

Someone who needs a good mechanic. Keep your eye on the prize, Harold.\u53CD\u6B63\u5F97\u597D\u597D\u4FEE\u4E00\u4E0B\u4E86\u3002\u76EF\u597D\u91CD\u70B9\uFF0C\u54C8\u7F57\u5FB7\u3002

H:

Simon&#39;s realized that his safest move is to hide, get off the grid until he can assess the situation. But the hotel will have security cameras.\u897F\u8499\u610F\u8BC6\u5230\u4E86\u73B0\u5728\u8981\u5B89\u5168\u5FC5\u987B\u8EB2\u8D77\u6765\uFF0C\u9500\u58F0\u533F\u8FF9\uFF0C\u76F4\u5230\u67E5\u660E\u771F\u76F8\u3002\u4F46\u9152\u5E97\u80AF\u5B9A\u5B89\u88C5\u4E86\u76D1\u63A7\u6444\u50CF\u5934\u3002

3.7. 00:31:18-- 00:32:06
R:

But the life I&#39;ve led, a good end would be a privilege.\u4F46\u6211\u8FD9\u4E00\u751F\uFF0C\u65E9\u5C31\u4E0D\u671F\u5F85\u5584\u7EC8\u4E86\u3002

H:

It&#39;s not where you begin, it&#39;s where you end up. You&#39;re a brilliant woman, comrade... and a friend.\u8D77\u70B9\u4E0D\u91CD\u8981\uFF0C\u7EC8\u70B9\u624D\u91CD\u8981\uFF0C\u4F60\u624D\u534E\u6A2A\u6EA2\uFF0C\u662F\u6218\u53CB\u2026\u662F\u670B\u53CB\u3002

R:

If the worst comes to pass, if you could give Shaw a message?\u5982\u679C\u6700\u574F\u7684\u7ED3\u679C\u51FA\u73B0\uFF0C\u5E2E\u6211\u8DDF\u8096\u634E\u53E5\u8BDD\u597D\u5417\uFF1F

H:

I think she already knows.\u6211\u60F3\u5979\u5DF2\u7ECF\u77E5\u9053\u4E86\u3002We will win this war.\u6211\u4EEC\u4F1A\u8D62\u3002

R:

If we do, there&#39;s no chance in hell all of us make it out alive. You have to be prepared for that.
\u5C31\u7B97\u8D62\u4E86\uFF0C\u4E5F\u4E0D\u53EF\u80FD\u6211\u4EEC\u6240\u6709\u4EBA\u5168\u8EAB\u800C\u9000\u3002\u5FC5\u987B\u505A\u597D\u51C6\u5907\u3002

3.8. 00:38:00--00:38:08
S:

Any word from Root?\u6839\u6709\u6D88\u606F\u5417\uFF1F

H:

It&#39;s going to be a long fight, but it must be won, at any cost.\u8FD9\u573A\u6218\u4E89\u4F1A\u5F88\u6F2B\u957F\uFF0C\u4F46\u5FC5\u987B\u8D62\uFF0C\u4E0D\u60DC\u4EFB\u4F55\u4EE3\u4EF7\u3002

4. S04E07
4.1. 00:13:44--00:15:45
R:

He&#39;s hot. I mean, not &quot;Hood and zip ties in a CIA safe house with ten hours to kill&quot; hot, but...\u4ED6\u633A\u8FA3\u5462\u3002\u867D\u7136\u4E0D\u662F\u201C\u8499\u5934\u6346\u597D\u6254\u5230\u4E2D\u60C5\u5C40\u5B89\u5168\u5C4B\u7EA0\u7F20\u5341\u4E2A\u5C0F\u65F6\u201D\u90A3\u79CD\u6027\u611F\uFF0C\u4E0D\u8FC7\u2026

T:

Bartender, two champagnes.\u9152\u4FDD\uFF0C\u4E24\u676F\u9999\u69DF\u3002

R:

I kind of get it.\u6211\u61C2\u3002

S:

Root, what the hell are you doing?\u6839\uFF0C\u4F60\u641E\u4EC0\u4E48\u5462\uFF1F

R:

Harold wanted me off the streets for a while after my latest brush with Samaritan, So I thought I&#39;d help keep an ear on you. He is a dangerous criminal after all,\u54C8\u7F57\u5FB7\u8981\u6211\u8EB2\u4E00\u9635\u5B50\uFF0C\u521A\u624D\u906D\u9047\u4E86\u201C\u6492\u9A6C\u5229\u4E9A\u4EBA\u201D\uFF0C\u6240\u4EE5\u6211\u60F3\u5E2E\u4F60\u770B\u7740\u70B9\u3002\u4ED6\u6BD5\u7ADF\u662F\u4E2A\u5371\u9669\u7684\u72AF\u7F6A\u5206\u5B50\uFF0C\u6211\u53EF\u4E0D\u80FD\u5FCD\u53D7\u4F60\u88AB\u4EBA\u4F24\u5BB3\uFF0CI mean, besides me.\u9664\u6211\u4E4B\u5916\uFF0C\u8C01\u90FD\u4E0D\u884C\u3002

S:

So... What do you need me for?\u90A3\u4E48\u2026\u4F60\u60F3\u8BA9\u6211\u5E72\u4EC0\u4E48\uFF1F

T:

I can think of several things.\u6211\u60F3\u8BA9\u4F60\u5E72\u5F88\u591A\u4E8B\u3002

R:

Subtle.\u542B\u84C4\u3002

S:

I&#39;ll bet. But, uh, for now let&#39;s just keep it professional. Now, I&#39;m willing to guess that last night&#39;s job was a test to check the NYPD&#39;s response time, Which means that you have something bigger lined up.\u6211\u731C\u4E5F\u662F\u3002\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u73B0\u5728\u8FD8\u662F\u4E13\u4E1A\u70B9\u3002\u6211\u731C\u6628\u665A\u7684\u6D3B\u53EA\u662F\u6D4B\u8BD5\uFF0C\u662F\u4E3A\u4E86\u8BB0\u5F55\u7EBD\u7EA6\u8B66\u5BDF\u7684\u53CD\u5E94\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u6709\u66F4\u5927\u7684\u6D3B\u3002

R:

See, now that was subtle.\u77A7\uFF0C\u8FD9\u624D\u53EB\u542B\u84C4\u3002

S:

So... are you ready for another score?\u90A3\u4E48\u2026\u4F60\u51C6\u5907\u597D\u5E72\u4E0B\u4E00\u7968\u4E86\u5417\uFF1F

R:

That not so much.\u4E0D\u591F\u542B\u84C4\u4E86\u3002

T:

Maybe. But I&#39;m not the kind of man who likes to rush. A perfectly planned job is a kind of seduction. Hours looking, wanting, turning your target around in your mind. And then... you move closer, brushing past, making contact just to see what will happen. And when everything&#39;s ready and when everything is right, all of that preparation pays off in one sudden, intense, crashing moment.\u4E5F\u8BB8\u5427\u3002\u4E0D\u8FC7\u6211\u4E0D\u559C\u6B22\u64CD\u4E4B\u8FC7\u6025\u3002\u4E00\u4E2A\u5B8C\u7F8E\u7684\u8BA1\u5212\u5982\u540C\u8BF1\u60D1\u3002\u957F\u65F6\u95F4\u7684\u5173\u6CE8\u3001\u6E34\u671B\u3001\u5728\u8111\u6D77\u4E2D\u53CD\u590D\u56DE\u5473\u76EE\u6807\uFF0C\u7136\u540E\u7F13\u7F13\u63A5\u8FD1\u3001\u64E6\u80A9\u800C\u8FC7\u3001\u6162\u6162\u63A5\u89E6\u3001\u89C2\u5BDF\u53CD\u5E94\u3002\u5F53\u4E00\u5207\u5C31\u7EEA\uFF0C\u4E00\u5207\u5230\u4F4D\uFF0C\u6240\u6709\u7684\u524D\u620F\u5C06\u4F1A\u6362\u6765\u5929\u96F7\u52FE\u52A8\u5730\u706B\u7684\u71C3\u60C5\u4E00\u523B\u3002

R:

He&#39;s good. But a line like that would never work on a trained operative like--\u4ED6\u4E0D\u9519\u3002\u4E0D\u8FC7\u8FD9\u79CD\u53F0\u8BCD\u7EDD\u5BF9\u6253\u52A8\u4E0D\u4E86\u4F60\u8FD9\u79CD\u804C\u4E1A\u7279\u2014\u2014

4.2. 00:19:38--00:19:41
R:

Shaw. How&#39;s your date?\u8096\u3002\u4F60\u7684\u7EA6\u4F1A\u5982\u4F55\uFF1F

4.3. 00:21:29--00:22:33
H:

Oh, dear, this is bad. This is very, very bad. Those labels don&#39;t say &quot;Marv.&quot; They say &quot;Mar-v,&quot; as in &quot;Marburg virus,&quot; A viral hemorrhagic fever with a mortality rate approaching 90%.\u5929\u554A\uFF0C\u4E0D\u5999\u4E86\u3002\u5927\u4E8B\u4E0D\u5999\u4E86\u3002\u90A3\u4E9B\u6807\u7B7E\u4E0D\u662F\u201C\u9A6C\u4E94\u201D\u3002\u800C\u662F\u201C\u9A6C\u6BD2\u201D\u3002\u6307\u201C\u9A6C\u5821\u75C5\u6BD2\u201D\u3002\u4E00\u79CD\u75C5\u6BD2\u6027\u51FA\u8840\u70ED\uFF0C\u6B7B\u4EA1\u7387\u63A5\u8FD190%\u3002

R:

It&#39;s like Ebola&#39;s evil twin.\u57C3\u535A\u62C9\u7684\u90AA\u6076\u53CC\u80DE\u80CE\u3002

H:

Dr. Petrova was in Uganda collecting samples of the virus. But due to the outbreak of Ebola in western Africa, her request to ship them to the CDC was denied by Homeland Security. Rather than lose months of research, Dr. Petrova chose to smuggle them into the U.S. illegally.\u4F69\u7279\u6D1B\u5A03\u535A\u58EB\u5728\u4E4C\u5E72\u8FBE\u641C\u96C6\u8FD9\u79CD\u75C5\u6BD2\u7684\u6837\u672C\u3002\u4F46\u662F\u7531\u4E8E\u897F\u975E\u57C3\u535A\u62C9\u75C5\u6BD2\u7206\u53D1\uFF0C\u5979\u628A\u6837\u672C\u9001\u56DE\u75BE\u63A7\u4E2D\u5FC3\u7684\u8981\u6C42\u88AB\u56FD\u5B89\u5C40\u62D2\u7EDD\u4E86\u3002\u4E3A\u4E86\u4E0D\u6D6A\u8D39\u6570\u6708\u7684\u7814\u7A76\u5FC3\u8840\uFF0C\u4F69\u7279\u6D1B\u5A03\u535A\u58EB\u628A\u6837\u672C\u975E\u6CD5\u5077\u8FD0\u56DE\u7F8E\u56FD\u3002

S:

And now somebody stole them.\u73B0\u5728\u5374\u88AB\u4EBA\u5077\u4E86\u3002

R:

If it makes you feel better, Dr. P&#39;s freaking out about it. She just turned herself in to her bosses at the CDC.\u5982\u679C\u80FD\u8BA9\u4F60\u8212\u670D\u70B9\u7684\u8BDD\uFF0C\u4F69\u535A\u58EB\u73B0\u5728\u5413\u5F97\u534A\u6B7B\u3002\u5979\u521A\u5411\u75BE\u63A7\u4E2D\u5FC3\u7684\u8D1F\u8D23\u4EBA\u81EA\u9996\u4E86\u3002

H:

It would be difficult to overstate the degree to which we do not need ten vials of Marburg floating around the streets of New York City. We have to find the virus and the people who stole it fast.\u7B80\u76F4\u4E0D\u6562\u60F3\u8C61\u5341\u74F6\u9A6C\u5821\u75C5\u6BD2\u8086\u8650\u7EBD\u7EA6\u662F\u4F55\u7B49\u540E\u679C\u3002\u6211\u4EEC\u5F97\u5C3D\u5FEB\u627E\u5230\u75C5\u6BD2\u548C\u76D7\u7A83\u8005\u3002

J:

Okay, I&#39;ll track down Max and Henrik, but we need to know who they&#39;re working for.\u597D\uFF0C\u6211\u53BB\u8FFD\u8E2A\u9EA6\u514B\u65AF\u548C\u4EA8\u91CC\u514B\uFF0C\u4F46\u6211\u4EEC\u5F97\u77E5\u9053\u4ED6\u4EEC\u662F\u66FF\u8C01\u5E72\u6D3B\u3002

S:

It was probably the same client who hired Tomas in the first place. Nobody else knew about the robbery.\u53EF\u80FD\u548C\u5F53\u521D\u96C7\u4F63\u6258\u9A6C\u65AF\u7684\u662F\u540C\u4E00\u4E2A\u5BA2\u6237\u3002\u5176\u4ED6\u4EBA\u90FD\u4E0D\u77E5\u9053\u62A2\u52AB\u7684\u4E8B\u3002

R:

Plus, paying those two to kill Tomas is cheaper than paying all three.\u518D\u8BF4\uFF0C\u7ED9\u94B1\u4ED6\u4EEC\u4FE9\u53BB\u6740\u4E86\u6258\u9A6C\u65AF\u6BD4\u4ED8\u4E09\u4E2A\u4EBA\u7684\u916C\u91D1\u8981\u4FBF\u5B9C\u3002It is.\u672C\u6765\u5C31\u662F\u3002

4.4. 00:41:17--00:42:03
S:

I&#39;m sure not having the machine in your ear anymore sucks and all, but it is pretty great finally being able to sneak up on you.\u6211\u77E5\u9053\u6CA1\u6709\u673A\u5668\u5728\u4F60\u8033\u8FB9\u8BF4\u8BDD\u8BA9\u4F60\u633A\u96BE\u8FC7\uFF0C\u4E0D\u8FC7\u7EC8\u4E8E\u80FD\u5077\u5077\u5413\u4F60\u4E00\u8DF3\u8FD8\u662F\u633A\u723D\u7684\u3002

R:

I live to amuse.\u6211\u4E50\u6545\u6211\u5728\u3002Where&#39;s Tomas?\u6258\u9A6C\u65AF\u5462\uFF1F

S:

Halfway to Barcelona. He gave me a pretty hard sell, trying to get me to go with him, and for a hot second, I almost did.\u53BB\u5DF4\u585E\u7F57\u90A3\u7684\u8DEF\u4E0A\u3002\u4ED6\u7ED9\u4E86\u6211\u4E2A\u633A\u597D\u7684\u63D0\u8BAE\uFF0C\u8BA9\u6211\u548C\u4ED6\u4E00\u8D77\u8D70\uFF0C\u6709\u90A3\u4E48\u4E00\u523B\uFF0C\u6211\u51E0\u4E4E\u7B54\u5E94\u4E86\u3002

R:

But?\u4F46\u662F\u5462\uFF1F

S:

I guess there are things I care about here.\u4E5F\u8BB8\uFF0C\u8FD9\u91CC\u8FD8\u6709\u6211\u5728\u4E4E\u7684\u4E1C\u897F\u3002

R:

And is that why you came to see me?\u6240\u4EE5\u4F60\u8DD1\u6765\u770B\u6211\uFF1F

S:

No.
\u4E0D\u3002
I need you to translate finch&#39;s instructions on how to destroy the virus. Dude never met a five-syllable word he didn&#39;t like.\u6211\u9700\u8981\u4F60\u7FFB\u8BD1\u82AC\u5947\u5982\u4F55\u6467\u6BC1\u75C5\u6BD2\u7684\u6307\u793A\u3002\u8FD9\u54E5\u4EEC\u72C2\u604B\u9AD8\u7AEF\u8BCD\u554A\u3002

R:

Full decontamination.\u5168\u9762\u51C0\u5316\u3002This could take all night.\u5F97\u82B1\u4E0A\u4E00\u6574\u591C\u3002


5. S04E09
5.1. 00:01:39--00:03:37
R:

Get on.\u4E0A\u6765\u3002

S:

Nice parking job.\u505C\u5F97\u6F02\u4EAE\u3002

R:

We&#39;re in a camera dead-zone.\u8FD9\u91CC\u662F\u65E0\u76D1\u63A7\u533A\u3002

S:

I&#39;m guessing the psycho blonde wasn&#39;t there for our free tote bag promotion.\u770B\u6765\u90A3\u91D1\u53D1\u75AF\u5B50\u4E0D\u662F\u53BB\u4EAB\u53D7\u514D\u8D39\u8D60\u888B\u4FC3\u9500\u7684\u3002

R:

No. Your cover&#39;s been blown.\u4E0D\u662F\u3002\u4F60\u7684\u63A9\u62A4\u8EAB\u4EFD\u66B4\u9732\u4E86\u3002

W:

That&#39;s the last of it.\u8FD9\u662F\u6700\u540E\u4E00\u7BB1\u3002

S:

You can let go now.\u4F60\u53EF\u4EE5\u677E\u5F00\u4E86\u3002

R:

I&#39;ve got her, Harry.\u5979\u5728\u8FD9\u513F\uFF0C\u54C8\u7F57\u3002

H:

Oh, thank goodness. And you&#39;re okay, Ms. Shaw?\u8C22\u5929\u8C22\u5730\u3002\u4F60\u8FD8\u597D\u5427\uFF0C\u8096\u5973\u58EB\uFF1F

S:

If by &quot;okay,&quot; you mean, &quot;ready to kick some righteous ass.&quot; I thought Samaritan couldn&#39;t see us.\u597D\u5F97\u8DB3\u4EE5\u53BB\u6559\u8BAD\u51E0\u4E2A\u88C5\u903C\u7684\u3002\u6211\u8FD8\u4EE5\u4E3A\u6492\u9A6C\u5229\u4E9A\u4EBA\u770B\u4E0D\u5230\u6211\u4EEC\u3002

R:

It can&#39;t. But its operatives can.\u5B83\u770B\u4E0D\u5230\u3002\u4F46\u5B83\u7684\u7279\u5DE5\u80FD\u770B\u5230\u3002

S:

If I was about to be capped, Shouldn&#39;t my number have come up?\u6211\u5DEE\u70B9\u513F\u6389\u8111\u888B\uFF0C\u6211\u7684\u53F7\u7801\u4E0D\u5E94\u8BE5\u4F1A\u8DF3\u51FA\u6765\u5417\uFF1F

H:

Assuming that the machine saw the threat, yes. But the fact that it didn&#39;t suggests that we&#39;re not the only ones who&#39;ve learned how to operate in the  shadows. Samaritan&#39;s agents have, as well.\u8981\u662F\u673A\u5668\u770B\u5230\u4E86\u5A01\u80C1\uFF0C\u662F\u4F1A\u3002\u4F46\u5B83\u5374\u6CA1\u6709\u3002\u8FD9\u5C31\u8BF4\u660E\u4E0D\u53EA\u662F\u6211\u4EEC\u5B66\u4F1A\u4E86\u4E8E\u9634\u5F71\u4E2D\u9690\u85CF\u884C\u52A8\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u7279\u5DE5\u4E5F\u4F1A\u4E86\u3002

R:

Look on the bright side, Sameen. I&#39;m pretty sure you just sold you last tube of luminizer.\u5F80\u597D\u5904\u60F3\uFF0C\u8428\u59C6\u6069\u3002\u4F60\u80AF\u5B9A\u662F\u518D\u4E5F\u4E0D\u7528\u5356\u4FEE\u9970\u4E73\u4E86\u3002

H:

Indeed. Ms. Shaw, You and Ms. Groves have to avoid all cameras and get back here as soon as you can. Use the shadow map.\u6B63\u662F\u3002\u8096\u5973\u58EB\uFF0C\u4F60\u548C\u683C\u7F57\u592B\u65AF\u5973\u58EB\u5FC5\u987B\u907F\u5F00\u6240\u6709\u7684\u6444\u50CF\u5934\u5C3D\u5FEB\u8D76\u56DE\u6765\u3002\u4F7F\u7528\u9634\u5F71\u5730\u56FE\u3002

S:

That&#39;s gonna be tricky considering... We&#39;re in a truck with no clue where we&#39;re heading.\u8FD9\u53EF\u6709\u70B9\u68D8\u624B\u4E86\u2026\u6211\u4EEC\u5728\u8F86\u5361\u8F66\u4E0A\uFF0C\u4E0D\u77E5\u9053\u662F\u5728\u54EA\u513F\u3002

H:

I have your location. And I&#39;m sending assistance.\u6211\u6709\u4F60\u4EEC\u7684\u4F4D\u7F6E\u3002\u6D3E\u5E2E\u624B\u53BB\u4E86\u3002

S:

So when we get back to the subway... Then what?\u7B49\u6211\u4EEC\u56DE\u5230\u5730\u94C1\u7AD9\u2026\u7136\u540E\u5462\uFF1F

H:

Then we&#39;ll keep you safe.\u7136\u540E\u4FDD\u62A4\u4F60\u7684\u5B89\u5168\u3002

S:

No, I mean, what if we get a new number?\u4E0D\uFF0C\u8981\u662F\u6211\u4EEC\u6709\u65B0\u53F7\u7801\u5462\uFF1F

H:

Not to worry. I&#39;m sure Mr. Reese can handle anything that comes along.\u4E0D\u7528\u62C5\u5FC3\u3002\u6211\u575A\u4FE1\u91CC\u745F\u5148\u751F\u80FD\u5E94\u4ED8\u4E00\u5207\u60C5\u51B5\u3002

5.2. 00:06:00--00:06:34
S:

We&#39;re stopping.\u8F66\u505C\u4E0B\u6765\u4E86\u3002

D:

Something wrong, officer?\u6709\u95EE\u9898\u5417\uFF0C\u8B66\u5B98\uFF1F

L:

Stay in the cab, please.\u8BF7\u5F85\u5728\u8F66\u4E0A\u3002Come on, come on, come on.\u8D70\uFF0C\u8D70\uFF0C\u8D70\u3002Should I even ask?\u6211\u8BE5\u95EE\u5417\uFF1F

S:

Really wanna know?\u771F\u60F3\u77E5\u9053\u5417\uFF1F

L:

Honestly? No.\u8001\u5B9E\u8BF4\uFF1F\u4E0D\u60F3\u3002

S:

Where are we on the shadow map?\u67E5\u67E5\u770B\u9634\u5F71\u5730\u56FE\uFF1F

R:

We&#39;re clear to the end of this block.\u8FD9\u6761\u8857\u90FD\u662F\u5B89\u5168\u7684\u3002Let&#39;s go.\u8D70\u5427\u3002

5.3. 00:11:33--00:12:25
S:

Finch can&#39;t expect Reese to pick up all the numbers. He&#39;s still got a day job.\u82AC\u5947\u4E0D\u80FD\u6307\u671B\u91CC\u745F\u5904\u7406\u6240\u6709\u7684\u53F7\u7801\u3002\u4ED6\u8FD8\u6709\u6B63\u804C\u5462\u3002

R:

I&#39;m sure Harry will find a solution.\u6211\u80AF\u5B9A\u54C8\u7F57\u4F1A\u6709\u529E\u6CD5\u7684\u3002

S:

I already have. The machine needs to give me a new identity.\u6211\u6709\u529E\u6CD5\u3002\u673A\u5668\u5F97\u7ED9\u6211\u4E2A\u65B0\u8EAB\u4EFD\u3002

R:

Sorry, Sam, it doesn&#39;t work like that.\u62B1\u6B49\uFF0C\u8428\u59C6\uFF0C\u529E\u4E0D\u5230\u3002

S:

Why not? I mean, it works like that for you. You go through identities like they&#39;re Dixie cups. But I&#39;m one and done?\u4E3A\u4EC0\u4E48\uFF1F\u4F60\u4E0D\u5C31\u8FD9\u6837\u561B\u3002\u4F60\u6362\u8EAB\u4EFD\u8DDF\u6362\u5305\u88C5\u4E00\u6837\u3002\u6211\u5C31\u53EA\u80FD\u6709\u4E00\u4E2A\uFF1F

R:

I don&#39;t make the rules.\u89C4\u77E9\u4E0D\u662F\u6211\u5B9A\u7684\u3002She does.\u662F\u5979\u5B9A\u7684\u3002Look, I get that you&#39;re frustrated, angry, and probably a little bit scared--\u6211\u77E5\u9053\u4F60\u5F88\u90C1\u95F7\uFF0C\u751F\u6C14\uFF0C\u6216\u8005\u8FD8\u6709\u70B9\u5BB3\u6015\u2014\u2014

S:

Please. I&#39;m not scared.\u62DC\u6258\u3002\u6211\u624D\u4E0D\u6015\u3002

R:

Maybe you should be. Because you almost died back there. And Samaritan&#39;s operatives are just getting smarter and faster. So while you may not be scared about what could happen to you the next time, other people are. People who care for you.\u4E5F\u8BB8\u4F60\u5E94\u8BE5\u5BB3\u6015\u3002\u56E0\u4E3A\u4F60\u521A\u624D\u5DEE\u70B9\u5C31\u6B7B\u4E86\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u7279\u5DE5\u8D8A\u6765\u8D8A\u806A\u660E\uFF0C\u8D8A\u6765\u8D8A\u8FC5\u901F\u3002\u6240\u4EE5\u5C31\u7B97\u4F60\u4E0D\u6015\uFF0C\u4E0B\u6B21\u4F1A\u53D1\u751F\u4EC0\u4E48\u4E8B\uFF0C\u522B\u4EBA\u4F1A\u6015\u3002\u5728\u4E4E\u4F60\u7684\u4EBA\u4F1A\u6015\u3002Try to remember that.\u7ED9\u6211\u8BB0\u4F4F\u3002We need to keep moving.\u6211\u4EEC\u5F97\u8D70\u4E86\u3002

5.4. 00:19:24--00:20:56
R:

Smaritan operatives.\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u7279\u5DE5\u3002

H:

Any status updates, Ms. Shaw?\u6709\u65B0\u6D88\u606F\u5417\uFF0C\u8096\u5973\u58EB\uFF1F

S:

Yeah, one. We&#39;re still breathing.\u6709\u554A\uFF0C\u6211\u4EEC\u8FD8\u5598\u7740\u6C14\u5462\u3002

H:

Good. The sooner you get here, the better. The operative that you encountered just questioned Detective Fusco. He may have thrown her off your scent, for now.\u5F88\u597D\u3002\u8D8A\u5FEB\u56DE\u6765\u8D8A\u597D\u3002\u4F60\u4EEC\u9047\u4E0A\u7684\u90A3\u4E2A\u7279\u5DE5\u521A\u5BA1\u95EE\u4E86\u5F17\u65AF\u79D1\u8B66\u63A2\u3002\u4ED6\u8F6C\u79FB\u4E86\u5979\u7684\u6CE8\u610F\u529B\u3002

S:

Attaboy, Lionel.\u597D\u6837\u7684\uFF0C\u83B1\u5948\u5C14\u3002

H:

I&#39;ll be in touch when I can. But for the moment, I need to assist Mr. Reese.\u60C5\u51B5\u5141\u8BB8\u65F6\u6211\u4F1A\u4E0E\u4F60\u8054\u7CFB\u3002\u4F46\u73B0\u5728\uFF0C\u6211\u5F97\u53BB\u5E2E\u91CC\u745F\u5148\u751F\u3002

S:

Assist how? You mean with a number?\u5E2E\u4EC0\u4E48\uFF1F\u4F60\u662F\u8BF4\u5E2E\u53F7\u7801\u5417\uFF1F

H:

That&#39;s none of your concern, Ms. Shaw.\u8FD9\u4E0D\u7528\u4F60\u62C5\u5FC3\uFF0C\u8096\u5973\u58EB\u3002

S:

Is John in some kind of trouble? I mean, who&#39;s the number?\u7EA6\u7FF0\u9047\u4E0A\u9EBB\u70E6\u4E86\u5417\uFF1F\u53F7\u7801\u662F\u8C01\uFF1FHarold.\u54C8\u7F57\u5FB7\u3002

H:

Carl Elias.\u5361\u5C14\xB7\u4EE5\u5229\u4E9A\u3002

S:

John&#39;s running with the mob? I&#39;m there. Where is he?\u7EA6\u7FF0\u6405\u8FDB\u9ED1\u5E2E\u4E86\uFF1F\u6211\u8981\u53BB\u3002\u4ED6\u4EBA\u5462\uFF1F

H:

I&#39;m sorry, that&#39;s out of the question.\u62B1\u6B49\uFF0C\u65E0\u53EF\u5949\u544A\u3002

S:

Harold.\u54C8\u7F57\u5FB7\u3002

H:

Good-bye, Ms. Shaw.\u518D\u89C1\uFF0C\u8096\u5973\u58EB\u3002

S:

What the hell does he think he&#39;s doing?\u4ED6\u5728\u641E\u4EC0\u4E48\u9B3C\uFF1F

R:

Trying to protect you.\u5728\u4FDD\u62A4\u4F60\u3002

S:

I don&#39;t need protection, okay? I do the protecting.\u6211\u4E0D\u7528\u4FDD\u62A4\uFF0C\u597D\u5417\uFF1F\u53EA\u6709\u6211\u4FDD\u62A4\u522B\u4EBA\u7684\u4EFD\u3002Now, do you know where John is?\u4F60\u77E5\u9053\u7EA6\u7FF0\u5728\u54EA\u513F\u5417\uFF1F

R:

Sameen, we already have a mission.\u8428\u7C73\u6069\uFF0C\u6211\u4EEC\u6709\u522B\u7684\u4EFB\u52A1\u4E86\u3002

S:

That means &quot;Yes.&quot; Tell me. Tell me. Root!\u90A3\u5C31\u662F\u77E5\u9053\u3002\u544A\u8BC9\u6211\u3002\u544A\u8BC9\u6211\u3002\u6839\uFF01Please.\u6C42\u4F60\u5566~

R:

Cute, but--\u771F\u53EF\u7231\uFF0C\u4E0D\u8FC7\u2014\u2014

S:

If you don&#39;t tell me where John is right now, I&#39;m not going any further. Samaritan&#39;s goons can just come and blast us into the next dimension.\u4F60\u4E0D\u7ACB\u9A6C\u544A\u8BC9\u6211\u7EA6\u7FF0\u5728\u54EA\uFF0C\u6211\u5C31\u4E0D\u8D70\u4E86\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u55BD\u5570\u5C31\u8FC7\u6765\u628A\u6211\u4EEC\u70B8\u5230\u5F02\u6B21\u5143\u53BB\u597D\u4E86\u3002

R:

Fine.\u597D\u5427\u3002But we use the shadow map to get there. And as soon as we help John, you promise to go underground.\u4F46\u6211\u4EEC\u9700\u8981\u9634\u5F71\u5730\u56FE\u624D\u80FD\u5230\u3002\u4E00\u65E6\u5E2E\u5B8C\u7EA6\u7FF0\uFF0C\u4F60\u4FDD\u8BC1\u9A6C\u4E0A\u8EB2\u8D77\u6765\u3002

S:

Deal.\u6210\u4EA4\u3002

5.5. 00:30:26--00:31:08
R:

No cameras.\u6CA1\u6709\u76D1\u63A7\u3002Remember our deal. We do this, then straight to the subway.\u8BB0\u4F4F\u4E4B\u524D\u7684\u7EA6\u5B9A\u3002\u5E72\u5B8C\u8FD9\u4E2A\uFF0C\u76F4\u63A5\u56DE\u5730\u94C1\u7AD9\u3002

S:

Yeah, yeah. You&#39;re killing the mood.\u597D\u5566\u597D\u5566\u3002\u4F60\u771F\u4F1A\u715E\u98CE\u666F\u3002

S:

Are you sure this is the place?\u4F60\u786E\u5B9A\u662F\u8FD9\u91CC\u5417\uFF1F

R:

Sorry, sweetie. You didn&#39;t leave me any choice.\u62B1\u6B49\uFF0C\u7231\u4EBA\u3002\u6211\u522B\u65E0\u9009\u62E9\u3002

S:

I will end you.\u6211\u5E9F\u4E86\u4F60\u3002

R:

You can end me all you want. Right after your nap.\u968F\u4FBF\u4F60\u600E\u4E48\u5E9F\u6211\u3002\u7B49\u4F60\u7761\u9192\u540E\u3002

6. S04E10
6.1. 00:02:19--00:04:17
H:

What&#39;s going on?\u600E\u4E48\u56DE\u4E8B\uFF1F

R:

Just finished entertaining at a children&#39;s party. Mr. Berenstain was a big hit.\u521A\u521A\u53BB\u513F\u7AE5\u6D3E\u5BF9\u8868\u6F14\u6765\u7740\u3002\u8D1D\u8D1D\u718A\u5148\u751F\u5927\u53D7\u6B22\u8FCE\u3002

S:

How could you let her do this to me, Finch-- tranq me like I&#39;m some kind of animal?\u4F60\u600E\u4E48\u80FD\u8BA9\u5979\u8FD9\u4E48\u5BF9\u6211\uFF0C\u82AC\u5947\u3002\u628A\u6211\u5F53\u52A8\u7269\u4F3C\u7684\u76F4\u63A5\u4E0B\u836F\uFF1F

H:

It was for your own good, Ms. Shaw. You are no longer safe from Samaritan&#39;s gaze, and you wouldn&#39;t listen to reason.\u8FD9\u662F\u4E3A\u4E86\u4F60\u597D\uFF0C\u8096\u5973\u58EB\u3002\u4F60\u5728\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u76D1\u89C6\u4E0A\u4E0D\u518D\u5B89\u5168\u4E86\uFF0C\u4F60\u53C8\u4E0D\u80AF\u542C\u8BDD\u3002

R:

He&#39;s right, Sam. You really wouldn&#39;t.\u4ED6\u8BF4\u5F97\u5BF9\uFF0C\u8428\u59C6\u3002\u4F60\u662F\u771F\u4E0D\u542C\u8BDD\u3002

S:

You turned on me, Harold. Not cool.\u4F60\u80CC\u53DB\u6211\uFF0C\u54C8\u7F57\u5FB7\u3002\u4E0D\u539A\u9053\u3002

H:

A peace offering.\u6C42\u548C\u793C\u7269\u3002It&#39;s the Beatrice Lillie from Park&#39;s Deli, including the extra ingredients you enjoy.\u4ECE\u6734\u6C0F\u719F\u98DF\u5E97\u4E70\u7684\u6BD5\u7FE0\u4E1D\xB7\u8389\u8389\uFF0C\u989D\u5916\u52A0\u4E86\u4F60\u559C\u6B22\u7684\u6599\u3002

R:

Here... Let me help you. Two hands are better than one.\u6765\u2026\u6211\u5E2E\u4F60\u3002\u4E24\u53EA\u624B\u597D\u8FC7\u4E00\u53EA\u624B\u3002

S:

So how long do you nerds expect to keep me locked up?\u4F60\u4EEC\u4FE9\u5B85\u5BA2\u80FD\u628A\u6211\u5173\u5230\u5565\u65F6\u5019\uFF1F

R:

Until it&#39;s safe for you.\u5173\u5230\u4F60\u5B89\u5168\u4E3A\u6B62\u3002

H:

And us. If Samaritan and its human agents discover you, it could lead them to every single one of us.\u52A0\u4E0A\u6211\u4EEC\u3002\u8981\u662F\u6492\u9A6C\u5229\u4E9A\u4EBA\u53CA\u5176\u6267\u884C\u4EBA\u53D1\u73B0\u4E86\u4F60\uFF0C\u5B83\u4F1A\u76F4\u63A5\u8FFD\u8E2A\u5230\u6211\u4EEC\u6BCF\u4E00\u4E2A\u4EBA\u3002

S:

Guilt, Harold? Really? You know, normally that wouldn&#39;t work on me, but I wouldn&#39;t want anything to happen to the dog.\u73A9\u5185\u759A\u6218\uFF0C\u54C8\u7F57\u5FB7\uFF1F\u771F\u7684\u4E48\uFF1F\u59D0\u4E00\u822C\u53EF\u4E0D\u5403\u8FD9\u4E00\u5957\uFF0C\u4E0D\u8FC7\uFF0C\u6211\u4E0D\u60F3\u4F24\u5BB3\u5230 \u72D7\u72D7\u3002

R:

I&#39;m glad we all agree you&#39;re going to stay put, especially since we know it would be impossible to keep you locked up... against your will, anyway.\u5F88\u9AD8\u5174\u6211\u4EEC\u8FBE\u6210\u5171\u8BC6\u4F60\u7559\u5728\u539F\u5730\u3002\u5176\u5B9E\u6211\u4EEC\u4E5F\u77E5\u9053\uFF0C\u4E0D\u592A\u53EF\u80FD\u5173\u4F4F\u4F60\u2026\u8981\u662F\u4F60\u771F\u4E0D\u4E50\u610F\u7684\u8BDD\u3002

S:

So true.\u592A\u5BF9\u4E86\u3002And what happens when we get a new number?\u6211\u4EEC\u6709\u65B0\u53F7\u7801\u600E\u4E48\u529E\uFF1F

H:

Mr. Reese is handling one now. I&#39;m sure he&#39;ll be fine on his own until we get this matter sorted out.\u91CC\u745F\u5148\u751F\u73B0\u5728\u6B63\u5728\u5904\u7406\u3002\u6211\u76F8\u4FE1\u4ED6\u6CA1\u4E8B\u7684\uFF0C\u80FD\u6491\u5230\u6211\u4EEC\u89E3\u51B3\u95EE\u9898\u3002

6.2. 00:07:54--00:08:13
S:

Why is Samaritan working the numbers?\u6492\u9A6C\u5229\u4E9A\u4EBA\u4E3A\u4EC0\u4E48\u4F1A\u5904\u7406\u53F7\u7801\uFF1F

H:

Samaritan doesn&#39;t care about the irrelevant numbers, Ms. Shaw. It wasn&#39;t programmed that way.\u6492\u9A6C\u5229\u4E9A\u4EBA\u4E0D\u5728\u4E4E\u65E0\u5173\u53F7\u7801\uFF0C\u8096\u5973\u58EB\u3002\u5B83\u7684\u7A0B\u5E8F\u4E2D\u4E0D\u5B58\u5728\u3002

R:

But it knew this woman was about to commit murder and chose to play judge, jury, and executioner with her husband.\u4F46\u5B83\u77E5\u9053\u8FD9\u4E2A\u5973\u4EBA\u5373\u5C06\u6740\u4EBA\uFF0C\u5C31\u51FA\u624B\u626E\u6F14\u5979\u4E08\u592B\u7684\u6CD5\u5B98\u3001\u966A\u5BA1\u56E2\u3001\u6267\u5211\u4EBA\u3002

H:

It&#39;s drawing attention to itself. But for what reason?\u5B83\u60F3\u5438\u5F15\u6CE8\u610F\u3002\u4F46\u4E3A\u4EC0\u4E48\u5462\uFF1F

6.3. 00:08:46--00:11:59
S:

You got to admit, Samaritan&#39;s pretty efficient.\u4E0D\u5F97\u4E0D\u627F\u8BA4\uFF0C\u6492\u9A6C\u5229\u4E9A\u4EBA\u76F8\u5F53\u9AD8\u6548\u3002

H:

But not efficient enough to stop the numbers from coming. We&#39;ve just received a new one. I&#39;ve sent John to investigate.\u518D\u9AD8\u6548\u4E5F\u6CA1\u6321\u4F4F\u53F7\u7801\u7EE7\u7EED\u8DF3\u51FA\u6765\u3002\u6211\u4EEC\u521A\u6536\u5230\u65B0\u53F7\u7801\u4E86\u3002\u6211\u6D3E\u7EA6\u7FF0\u53BB\u8C03\u67E5\u4E86\u3002

S:

I meant from stopping an innocent woman from making a terrible mistake, taking out the bad guy.\u81F3\u5C11\u963B\u6B62\u4E86\u65E0\u8F9C\u5973\u5B50\u94F8\u6210\u5927\u9519\uFF0C\u6253\u51FB\u574F\u86CB\u3002

H:

Yes, however, that bad guy deserved a trial by his peers.\u5C31\u7B97\u662F\u5427\uFF0C\u90A3\u4E2A\u574F\u86CB\u4E5F\u6709\u6743\u5229\u63A5\u53D7\u5BA1\u5224\u3002

S:

He saved the government some time and money.\u4ED6\u53EF\u5E2E\u653F\u5E9C\u8282\u7701\u4E86\u65F6\u95F4\u548C\u91D1\u94B1\u3002

H:

Are you ready for instantaneous judgment decided by an artificial intelligence that will lead to your demise, Ms. Shaw? Because I most certainly am not.\u4F60\u613F\u610F\u63A5\u53D7\u4EBA\u5DE5\u667A\u80FD\u7684\u77AC\u95F4\u5224\u65AD\u6765\u51B3\u5B9A\u4F60\u7684\u6B7B\u4EA1\u5417\uFF0C\u8096\u5973\u58EB\uFF1F\u6211\u53EF\u662F\u4E0D\u613F\u610F\u3002

S:

Okay. Not to stick up for Team Samaritan, but I used to do that for a living, remember? Eliminate targets at the behest of an A.I. I just didn&#39;t know who was giving the orders.\u597D\u5427\u3002\u4E0D\u662F\u60F3\u4E3A\u6492\u9A6C\u5229\u4E9A\u5C0F\u5206\u961F\u53EB\u597D\uFF0C\u53EF\u6211\u4EE5\u524D\u5C31\u662F\u5E72\u8FD9\u4E2A\u6D3B\u513F\u7684\uFF0C\u8BB0\u5F97\u5417\uFF1F\u542C\u4ECE\u4EBA\u5DE5\u667A\u80FD\u7684\u547D\u4EE4\u6D88\u9664\u76EE\u6807\u3002\u6211\u5F53\u65F6\u53EA\u662F\u4E0D\u77E5\u9053\u8C01\u4E0B\u7684\u4EE4\u3002Look, why don&#39;t you ask Root what she thinks? She&#39;s the one who wants us to bow down to our robot overlords.\u4F60\u5E72\u561B\u4E0D\u95EE\u95EE\u6839\u7684\u60F3\u6CD5\uFF1F\u5979\u624D\u4E00\u95E8\u5FC3\u601D\u60F3\u6211\u4EEC\u5168\u8DEA\u5012\u5728\u673A\u5668\u4EBA\u4E3B\u5B50\u819D\u4E0B\u3002

R:

The machine isn&#39;t a robot, Sam, but I hear your analogy. It seems that Samaritan has been helping people across the city for a few days now. The machine sent me a message. She said that Rachel Farrow was just one of its stops.\u673A\u5668\u4E0D\u662F\u673A\u5668\u4EBA\uFF0C\u8428\u59C6\uFF0C\u4E0D\u8FC7\u6211\u660E\u767D\u4F60\u7684\u6BD4\u55BB\u3002\u770B\u6765\u6492\u9A6C\u5229\u4E9A\u4EBA\u6700\u8FD1\u51E0\u5929\u4E00\u76F4\u5728\u57CE\u91CC\u6551\u4EBA\u3002\u673A\u5668\u7ED9\u4E86\u6211\u53E5\u8BDD\uFF0C\u5979\u8BF4\u96F7\u5207\u5C14\xB7\u6CD5\u7F57\u53EA\u662F\u5176\u4E2D\u4E4B\u4E00\u3002

H:

That tracks with what I&#39;m seeing here\u2014buses, subways, trains, all running like clockwork. Nothing broken. Nothing delayed. When was the last time that  happened in New York?\u6839\u636E\u6211\u73B0\u5728\u770B\u5230\u7684\u60C5\u51B5\u2014\u2014\u5DF4\u58EB\u3001\u5730\u94C1\u3001\u706B\u8F66\u8FD0\u884C\u7CBE\u786E\u5982\u949F\u8868\u3002\u6BEB\u65E0\u635F\u574F\u3002\u6BEB\u65E0\u5EF6\u8FDF\u3002\u4F60\u51E0\u65F6\u5728\u7EBD\u7EA6\u89C1\u8FC7\u8FD9\u79CD\u60C5\u51B5\uFF1F

S:

In my dreams, maybe.\u5728\u6211\u68A6\u91CC\u89C1\u8FC7\u5427\u3002

R:

Samaritan&#39;s running the city.\u6492\u9A6C\u5229\u4E9A\u4EBA\u5728\u63A7\u5236\u6574\u4E2A\u57CE\u5E02\u3002

H:

I believe it is. But why?\u6211\u76F8\u4FE1\u662F\u7684\u3002\u4F46\u4E3A\u4EC0\u4E48\u5462\uFF1F

R:

What if it&#39;s trying to reach out to the machine the only way it knows how.\u4E5F\u8BB8\u662F\u56E0\u4E3A\u5B83\u60F3\u63A5\u89E6\u673A\u5668\uFF0C\u8FD9\u662F\u5B83\u552F\u4E00\u7684\u529E\u6CD5\u3002

S:

But then why do it this way? Why not just-- I don&#39;t know. How do artificial super intelligences usually talk to each other?\u4F46\u4E3A\u4EC0\u4E48\u7528\u8FD9\u79CD\u65B9\u5F0F\u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u2014\u2014\u6211\u4E0D\u77E5\u9053\u8D85\u7EA7\u4EBA\u5DE5\u667A\u80FD\u4E4B\u95F4\u901A\u5E38\u600E\u4E48\u804A\u5929\uFF1F

H:

These machines have avoided making contact with one another for good reason. If two dueling A.S.I.s arrive at anything short of consensus, the outcome could be catastrophic.\u673A\u5668\u4E4B\u95F4\u907F\u514D\u63A5\u89E6\u662F\u6709\u539F\u56E0\u7684\u3002\u53EA\u8981\u4E24\u4E2A\u5BF9\u7ACB\u7684\u8D85\u7EA7\u4EBA\u5DE5\u667A\u80FD\u4E4B\u95F4\u7A0D\u6709\u9F83\u9F89\uFF0C\u540E\u679C\u90FD\u5C06\u662F\u707E\u96BE\u6027\u7684\u3002

R:

Two angry gods hurling boulders at one another while the ants scurry below.\u4E24\u4E2A\u6124\u6012\u7684\u4E0A\u5E1D\u4E92\u6BB4\uFF0C\u4E0B\u9762\u7684\u877C\u8681\u5C31\u8981\u906D\u6B83\u4E86\u3002

H:

This may be a request for peace talks.\u8FD9\u4E5F\u8BB8\u662F\u8BF7\u6C42\u548C\u5E73\u534F\u5546\u3002

S:

Maybe they should just kiss and make up.\u4E5F\u8BB8\u90A3\u4E24\u8D27\u5E94\u8BE5\u4EB2\u4EB2\u5C0F\u5634\u513F\uFF0C\u6478\u6478\u5C0F\u624B\u513F\u3002

H:

To what end, Ms. Shaw?\u7136\u540E\u5462\uFF0C\u8096\u5973\u58EB\uFF1FSamaritan&#39;s plans will be many hundreds, if not thousands, of steps beyond what we can imagine.\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u8BA1\u5212\u53EF\u80FD\u767E\u6B65\uFF0C\u751A\u81F3\u5343\u6B65\u9886\u5148\u4E8E\u6211\u4EEC\u7684\u731C\u60F3\u3002

R:

The machine will protect us.\u673A\u5668\u4F1A\u4FDD\u62A4\u6211\u4EEC\u3002

H:

Even if I had succeeded in creating a benevolent machine, as if any such thing could exist, never forget that even a so-called friendly artificial super intelligence would be every bit as dangerous as an unfriendly one.\u5C31\u7B97\u662F\u6211\u9020\u4E86\u4E00\u53F0\u6709\u60B2\u60AF\u4E4B\u5FC3\u7684\u673A\u5668\uFF0C\u5C31\u7B97\u8FD9\u79CD\u53EF\u80FD\u6027\u5B58\u5728\uFF0C\u4E5F\u522B\u5FD8\u4E86\u5C31\u7B97\u662F\u6240\u8C13\u201C\u53CB\u5584\u201D\u7684\u8D85\u7EA7\u4EBA\u5DE5\u667A\u80FD\uFF0C\u4E5F\u8DDF\u975E\u53CB\u5584\u7684\u4E00\u6837\u5371\u9669\u3002

S:

Your machine seems pretty warm and fuzzy to me.\u6211\u89C9\u5F97\u4F60\u7684\u673A\u5668\u633A\u6E29\u67D4\u633A\u8D34\u5FC3\u3002

H:

Have you forgotten that it asked us to kill a congressman?\u4F60\u5FD8\u4E86\u5B83\u66FE\u8BA9\u6211\u4EEC\u53BB\u8C0B\u6740\u56FD\u4F1A\u8BAE\u5458\u5417\uFF1F

S:

But that was to stop Samaritan from going online.\u4F46\u90A3\u662F\u4E3A\u4E86\u963B\u6B62\u6492\u9A6C\u5229\u4E9A\u4EBA\u4E0A\u7EBF\u3002

H:

So where does it end, Ms. Shaw? A congressman here, a president there. What if, one day, a friendly A.I. decides to end world hunger by killing enough people off of the planet that there would never again be a shortage of food? It would have fulfilled its goal, but it doesn&#39;t exactly sound like it has our best interests at heart.\u90A3\u5E95\u7EBF\u4F55\u5728\u5462\uFF0C\u8096\u5973\u58EB\uFF1F\u8FD9\u91CC\u6709\u8BAE\u5458\uFF0C\u90A3\u91CC\u8FD8\u6709\u603B\u7EDF\u3002\u5982\u679C\u6709\u4E00\u5929\uFF0C\u53CB\u5584\u7684\u4EBA\u5DE5\u667A\u80FD\u51B3\u5B9A\u4E3A\u4E86\u89E3\u51B3\u9965\u997F\u95EE\u9898\uFF0C\u8981\u6740\u6B7B\u5730\u7403\u4E0A\u8DB3\u591F\u6570\u91CF\u7684\u4EBA\u4EE5\u4FDD\u8BC1\u6C38\u8FDC\u4E0D\u4F1A\u518D\u51FA\u73B0\u98DF\u7269\u77ED\u7F3A\u5462\uFF1F\u8FD9\u6837\u5C31\u80FD\u5B9E\u73B0\u5B83\u7684\u76EE\u6807\uFF0C\u5B83\u53EF\u4E0D\u4F1A\u628A\u6211\u4EEC\u7684\u771F\u6B63\u5229\u76CA\u653E\u5728\u5FC3\u4E0A\u3002

R:

Your machine would never do that.\u4F60\u7684\u673A\u5668\u7EDD\u4E0D\u4F1A\u90A3\u4E48\u505A\u7684\u3002

H:

You don&#39;t know that, Ms. Groves. To say that a machine is benevolent doesn&#39;t make it so. It just makes you blind to the reality.\u4F60\u4E0D\u80FD\u4FDD\u8BC1\uFF0C\u683C\u7F57\u592B\u65AF\u5973\u58EB\u3002\u8BF4\u673A\u5668\u6709\u60B2\u60AF\u4E4B\u5FC3\u5E76\u4E0D\u4EE3\u8868\u5C31\u662F\u5982\u6B64\u3002\u90A3\u53EA\u4F1A\u8BA9\u4F60\u8BA4\u4E0D\u6E05\u73B0\u5B9E\u3002

S:

Which is?\u4EC0\u4E48\u73B0\u5B9E\uFF1F

H:

That our moral system will never be mirrored by theirs because of the very simple reason that they are not human.\u6211\u4EEC\u7684\u9053\u5FB7\u4F53\u7CFB\u65E0\u6CD5\u88AB\u53D6\u4EE3\uFF0C\u7406\u7531\u5F88\u7B80\u5355\uFF0C\u4ED6\u4EEC\u4E0D\u662F\u4EBA\u7C7B\u3002

6.4. 00:16:49--00:17:18
S:

I still think this could be a good thing, boys. We could take a little vacay. I looking kind of pasty. How about it, Harold? You are looking kind of pasty.\u6211\u770B\u8FD9\u662F\u597D\u4E8B\u554A\uFF0C\u5C0F\u5B50\u4EEC\u3002\u6211\u4EEC\u53EF\u4EE5\u4F11\u4E2A\u5047\u3002\u6211\u662F\u633A\u60F3\u53BB\u6652\u6652\u592A\u9633\u7684\u3002\u600E\u4E48\u6837\uFF0C\u54C8\u7F57\u5FB7\uFF1F\u4F60\u770B\u7740\u633A\u82CD\u767D\u554A\u3002

H:

This is the calm before the storm, Ms. Shaw. The only question is, when will the sky open?\u8FD9\u662F\u66B4\u98CE\u96E8\u524D\u7684\u5E73\u9759\uFF0C\u8096\u5973\u58EB\u3002\u552F\u4E00\u7684\u95EE\u9898\u662F\uFF0C\u51E0\u65F6\u503E\u76C6\u3002

R:

It&#39;s looking overcast, Harold.\u4E4C\u4E91\u5BC6\u5E03\u554A\uFF0C\u54C8\u7F57\u5FB7\u3002

H:

Where are you, Ms. Groves?\u4F60\u5728\u54EA\u91CC\uFF0C\u683C\u7F57\u592B\u65AF\u5973\u58EB\uFF1F

R:

Downtown. She sent me GPS coordinates that fall inside the shadow map. I think she wants me to find someone important. I just don&#39;t know who.\u4E0B\u57CE\u533A\u3002\u5979\u7ED9\u4E86\u6211GPS\u5750\u6807\u3002\u5728\u9634\u5F71\u5730\u56FE\u8303\u56F4\u5185\u3002\u5979\u5E94\u8BE5\u662F\u8981\u5B89\u6392\u6211\u89C1\u4E2A\u91CD\u8981\u4EBA\u7269\u3002\u6211\u53EA\u662F\u4E0D\u77E5\u9053\u662F\u8C01\u3002

6.5. 00:23:55--00:24:31
S:

Root...\u6839\u2026

R:

How&#39;s my favorite prisoner?\u6211\u7684\u5B9D\u8D1D\u56DA\u72AF\u600E\u4E48\u6837\u554A\uFF1F

S:

Better than the rest of you. Trains are down all over town, there are traffic outages everywhere in the city, and the crime rate has spiked 50% since yesterday.\u6BD4\u4F60\u4EEC\u5176\u4ED6\u4EBA\u597D\u591A\u4E86\u3002\u6574\u5EA7\u57CE\u5E02\u7684\u706B\u8F66\u90FD\u505C\u8FD0\u4E86\uFF0C\u5168\u5E02\u5404\u5904\u90FD\u5728\u5835\u8F66\uFF0C\u4ECE\u6628\u5929\u8D77\u72AF\u7F6A\u7387\u6FC0\u589E\u4E8650%\u3002

R:

Samaritan is making itself known.\u6492\u9A6C\u5229\u4E9A\u4EBA\u6B63\u5728\u8BC1\u660E\u81EA\u5DF1\u7684\u5B58\u5728\u3002

S:

Shot Spotter I.D.&#39;d over 20 gunshots In the last two hours, and I don&#39;t even want to guess how many of those ended up in a homicide.\u5C04\u51FB\u5B9A\u4F4D\u4E24\u5C0F\u65F6\u5185\u53D1\u73B0\u4E86\u4E8C\u5341\u591A\u8D77\u67AA\u51FB\u6848\uFF0C\u6211\u90FD\u4E0D\u6562\u60F3\u5176\u4E2D\u591A\u5C11\u8D77\u9020\u6210\u4E86\u4EBA\u5458\u4F24\u4EA1\u3002

R:

Three, according to Lionel. Samaritan&#39;s turning people against each other, revealing their secrets, unlocking doors that were never meant to be opened in the first place.\u4E09\u8D77\uFF0C\u83B1\u5948\u5C14\u8BF4\u7684\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u60F3\u8BA9\u4EBA\u81EA\u76F8\u6B8B\u6740\uFF0C\u66B4\u9732\u79D8\u5BC6\uFF0C\u6253\u5F00\u90A3\u4E9B\u4E0D\u8BE5\u88AB\u5F00\u542F\u7684\u7F6A\u6076\u4E4B\u95E8\u3002

6.6. 00:24:54--00:25:33
S:

What happened to you?\u4F60\u600E\u4E48\u4E86\uFF1F

H:

I was able to rescue one of our numbers, but I&#39;m afraid his office building wasn&#39;t so fortunate. There was a bit of an explosion.\u6211\u6551\u4E0B\u4E86\u4E00\u4E2A\u53F7\u7801\uFF0C\u4F46\u6050\u6015\u4ED6\u7684\u529E\u516C\u697C\u5C31\u6CA1\u90A3\u4E48\u5E78\u8FD0\u4E86\u3002\u53D1\u751F\u4E86\u70B9\u5C0F\u7206\u70B8\u3002

S:

How long can we go on like this, Finch? We&#39;ve already lost six.\u6211\u4EEC\u8FD9\u6837\u8FD8\u80FD\u6491\u591A\u4E45\uFF0C\u82AC\u5947\uFF1F\u5DF2\u7ECF\u5931\u53BB\u516D\u4E2A\u4EBA\u4E86\u3002

R:

Seven.\u4E03\u4EBA\u3002

S:

Look, if Samaritan wants a sit-down, I think it&#39;s time we do it. Aren&#39;t we supposed to be saving lives here?\u6492\u9A6C\u5229\u4E9A\u4EBA\u60F3\u8C08\u5224\uFF0C\u6211\u770B\u662F\u65F6\u5019\u7B54\u5E94\u4E86\u3002\u6211\u4EEC\u4E0D\u662F\u8981\u6551\u4EBA\u6D3B\u547D\u5417\uFF1F

H:

Look at what&#39;s happened to the city today. If this conversation goes badly, imagine what it will look like when two gods go to war.\u770B\u770B\u8FD9\u5EA7\u57CE\u5E02\u73B0\u5728\u4EC0\u4E48\u6A21\u6837\u4E86\u3002\u5982\u679C\u8C08\u8BDD\u8C08\u5D29\u4E86\uFF0C\u60F3\u60F3\u4E24\u4F4D\u4E0A\u5E1D\u5F00\u6218\u7684\u540E\u679C\u3002

R:

It&#39;s not our choice to make, Harold. I got a message from the machine. She says it&#39;s time.\u8FD9\u4E2A\u7531\u4E0D\u5F97\u6211\u4EEC\u51B3\u5B9A\uFF0C\u54C8\u7F57\u5FB7\u3002\u6211\u521A\u6536\u5230\u673A\u5668\u7684\u8BDD\u3002\u5979\u8BF4\u662F\u65F6\u5019\u4E86\u3002

6.7. 00:30:54--00:31:36
H:

She&#39;ll be fine, Ms. Shaw.\u5979\u6CA1\u4E8B\u7684\uFF0C\u8096\u5973\u58EB\u3002

S:

She&#39;s going to meet An all-seeing, all-evil god by herself. That doesn&#39;t sound fine to me. That sounds like someone who needs backup.\u5979\u8981\u72EC\u81EA\u53BB\u89C1\u4E00\u4E2A\u5168\u77E5\u5168\u80FD\u7684\u90AA\u6076\u4E0A\u5E1D\u3002\u6211\u4E0D\u89C9\u5F97\u8FD9\u53EB\u6CA1\u4E8B\u3002\u5979\u9700\u8981\u652F\u63F4\u3002

H:

I won&#39;t pretend that I&#39;m not concerned, but Ms. Groves believes the machine will protect her.\u6211\u5E76\u4E0D\u662F\u5047\u88C5\u4E0D\u62C5\u5FC3\uFF0C\u4F46\u683C\u7F57\u592B\u65AF\u5973\u58EB\u76F8\u4FE1\u673A\u5668\u4F1A\u4FDD\u62A4\u5979\u3002

S:

But you don&#39;t believe that, do you, Harold?\u4F46\u4F60\u5E76\u4E0D\u76F8\u4FE1\uFF0C\u5BF9\u5417\uFF0C\u54C8\u7F57\u5FB7\uFF1F

H:

I never imagined we would get this far, not once Samaritan became active, and yet, here we are.\u6211\u4ECE\u6CA1\u6709\u6599\u5230\u6211\u4EEC\u4F1A\u5230\u8FD9\u4E00\u6B65\uFF0C\u6492\u9A6C\u5229\u4E9A\u4EBA\u4E0A\u7EBF\u65F6\u90FD\u6CA1\u6709\uFF0C\u5982\u4ECA\u4E8B\u5DF2\u81F3\u6B64\u3002

S:

Yeah, here we are, hiding... underground in an abandoned subway while one of our own walks into certain death, alone.\u662F\u554A\uFF0C\u4E8B\u5DF2\u81F3\u6B64\uFF0C\u6211\u4EEC\u8EB2\u5728\u2026\u4E00\u4E2A\u5E9F\u5F03\u7684\u5730\u94C1\u7AD9\uFF0C\u800C\u6211\u4EEC\u5176\u4E2D\u4E00\u4F4D\u6B63\u8D70\u5411\u6B7B\u4EA1\uFF0C\u72EC\u81EA\u4E00\u4E2A\u4EBA\u3002

H:

There is one thing of which I am most certain.\u6709\u4EF6\u4E8B\u6211\u975E\u5E38\u80AF\u5B9A\u3002Root is not alone.\u6839\u4E0D\u662F\u4E00\u4E2A\u4EBA\u3002

6.8. 00:42:12--00:42:37
H:

Root, are you okay?\u6839\uFF0C\u4F60\u6CA1\u4E8B\u5427\uFF1F

R:

I&#39;m fine, but the conversation between the two parties ended at an impasse.\u6211\u6CA1\u4E8B\uFF0C\u4E0D\u8FC7\u53CC\u65B9\u7684\u8C08\u8BDD\u4EE5\u50F5\u5C40\u544A\u7EC8\u3002

H:

Unfortunately, that&#39;s not our only problem.\u4E0D\u5E78\u7684\u662F\uFF0C\u6211\u4EEC\u8FD8\u6709\u5176\u4ED6\u9EBB\u70E6\u3002

R:

What is it, Harry?\u4EC0\u4E48\u9EBB\u70E6\uFF0C\u54C8\u7F57\uFF1F

H:

Ms. Shaw is gone.\u8096\u5973\u58EB\u4E0D\u89C1\u4E86\u3002

R:

Where?\u54EA\u513F\uFF1F

H:

I can only imagine that she&#39;s come to help you and John with the numbers. Where are you?\u6211\u731C\u5979\u53BB\u5E2E\u4F60\u548C\u7EA6\u7FF0\u6551\u53F7\u7801\u4E86\u3002\u4F60\u5728\u54EA\u513F\uFF1F

R:

The machine sent me information. It led to Wall Street, but there&#39;s no specific address. I&#39;m not certain what it means yet.\u673A\u5668\u7ED9\u6211\u4E86\u6D88\u606F\u3002\u8981\u6211\u53BB\u534E\u5C14\u8857\uFF0C\u4F46\u6CA1\u6709\u5177\u4F53\u5730\u5740\u3002\u6211\u8FD8\u4E0D\u786E\u5B9A\u662F\u4EC0\u4E48\u610F\u601D\u3002

7. S04E11
7.1. 00:01:59--00:02:30
R:

How&#39;s it hanging, Sameen?\u4F60\u597D\uFF0C\u8428\u59C6\u6069\uFF1F

S:

I&#39;ve had better days... so has my broker friend here.\u4E0D\u7B97\u5565\u5927\u597D\u65E5\u5B50\u2026\u8FD9\u4F4D\u7ECF\u7EAA\u670B\u53CB\u4E5F\u662F\u3002You embezzle twinkies or money, Harvey?\u4F60\u8D2A\u6C61\u7684\u5230\u5E95\u662F\u86CB\u7CD5\u8FD8\u662F\u516C\u6B3E\u554A\uFF0C\u54C8\u7EF4\uFF1FWhat&#39;s up?\u600E\u4E48\u4E86\uFF1F

R:

We&#39;re headed to the Stock Exchange to try to save the world economy.\u6211\u4EEC\u6B63\u8D76\u53BB\u8BC1\u5238\u4EA4\u6613\u6240\uFF0C\u51C6\u5907\u62EF\u6551\u4E16\u754C\u7ECF\u6D4E\u3002

S:

That sounds fun. Is this an invite?\u542C\u8D77\u6765\u771F\u597D\u73A9\u3002\u9080\u6211\u540C\u884C\u5417\uFF1F

R:

Not a chance.\u6CA1\u95E8\u513F\u3002The place will be crawling with Samaritan operatives. And you&#39;re number one on their list.\u90A3\u91CC\u904D\u5E03\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u7279\u5DE5\u3002\u800C\u4F60\u662F\u4ED6\u4EEC\u7684\u5934\u53F7\u76EE\u6807\u3002But I do need a favor. And you need a metro card.\u4E0D\u8FC7\u6211\u9700\u8981\u4F60\u5E2E\u4E2A\u5FD9\u3002\u800C\u4F60\u9700\u8981\u5F20\u5730\u94C1\u5361\u3002

7.2. 00:05:26--00:06:25
R:

You found your mark, Shaw?\u53D1\u73B0\u76EE\u6807\u4E86\u5417\uFF0C\u8096\uFF1F

S:

Got eyes on our guy. How&#39;s he gonna help?\u76EF\u7740\u5462\u3002\u4ED6\u80FD\u5E2E\u4E0A\u4EC0\u4E48\u5FD9\uFF1F

R:

His company handles all the security for the Exchange. And we need to get into the server room.\u4ED6\u7684\u516C\u53F8\u8D1F\u8D23\u4EA4\u6613\u6240\u7684\u5168\u90E8\u5B89\u4FDD\u63AA\u65BD\u3002\u6211\u4EEC\u5F97\u8FDB\u670D\u52A1\u5668\u673A\u623F\u3002

S:

So he&#39;s got a key?\u8FD9\u4E48\u8BF4\u4ED6\u6709\u94A5\u5319\uFF1F

R:

Of sorts. He has an administrative code that bypasses the biometric palm scanner.\u7B97\u662F\u5427\u3002\u4ED6\u6709\u7BA1\u7406\u5BC6\u7801\u80FD\u7ED5\u8FC7\u751F\u7269\u638C\u7EB9\u8BC6\u522B\u4EEA\u3002

S:

You could&#39;ve at least given me a challenge.\u7ED9\u70B9\u6709\u6311\u6218\u7684\u597D\u4E0D\u597D\u3002

R:

If it makes you feel any better, we&#39;re gonna need it quick.\u5B89\u6170\u4E00\u4E0B\u4E0B\u4F60\uFF0C\u6211\u4EEC\u5F97\u5C3D\u5FEB\u62FF\u5230\u3002

S:

Mr. Clean&#39;s favoring his left knee. Right amount of pressure, he&#39;ll sing.\u5B9D\u6D01\u5148\u751F\u5DE6\u819D\u4E0D\u6562\u7528\u529B\u3002\u5F80\u90A3\u91CC\u6765\u51E0\u4E0B \uFF0C\u5C31\u4F1A\u5F00\u53E3\u3002I&#39;m gonna have to get back to you about that code.\u6211\u5F97\u7B49\u4F1A\u513F\u518D\u544A\u8BC9\u4F60\u5BC6\u7801\u4E86\u3002

7.3. 00:14:40--00:14:46
In simulation one
R:

Honey, you get our canary to sing? We need that code.\u4EB2\u4EB2\uFF0C\u6709\u8FDB\u5C55\u4E86\u5417\uFF1F\u6211\u4EEC\u9700\u8981\u5BC6\u7801\u3001

S:

Sorry, you&#39;re on your own.\u62B1\u6B49\uFF0C\u4F60\u4EEC\u53EA\u80FD\u9760\u81EA\u5DF1\u4E86\u3002

7.4. 00:25:39--00:27:15
In simulation two
R:

Hey, sweetie, you busy?\u4EB2\u4EB2\u3002\u4F60\u5728\u5FD9\u5417\uFF1F

S:

A little. Skip the verbal foreplay, Root. Why you calling?\u6709\u70B9\u3002\u7701\u7565\u524D\u620F\u5427\uFF0C\u6839\u3002\u6253\u7ED9\u6211\u5E72\u561B\uFF1F

R:

Can&#39;t a couple of gals take a little break from work to catch up?\u96BE\u9053\u4E24\u4F4D\u59D1\u5A18\u5C31\u4E0D\u80FD\u4F11\u606F\u4E00\u4E0B\u597D\u597D\u53D9\u53D9\u5417\uFF1F

S:

I&#39;ve been arrested and you&#39;re fighting an A.I. apocalypse So, no, we don&#39;t have time to catch up.\u6211\u88AB\u6355\u4E86\uFF0C\u800C\u4F60\u5728\u5E94\u4ED8\u4EBA\u5DE5\u667A\u80FD\u7684\u672B\u65E5\u5929\u542F\u3002\u6240\u4EE5\u4E0D\uFF0C\u6211\u4EEC\u6CA1\u65F6\u95F4\u53D9\u53D9\u3002

R:

There&#39;s no need to be rude.\u522B\u8FD9\u4E48\u51F6\u561B\u3002

S:

I am not having this conversation right now.\u6211\u73B0\u5728\u4E0D\u60F3\u8DDF\u4F60\u8BF4\u8FD9\u4E2A\u3002

R:

There&#39;s no time like the present, Sameen. Why are you so afraid to talk about your feelings?\u62E9\u65E5\u4E0D\u5982\u649E\u65E5\uFF0C\u8428\u59C6\u6069\u3002\u4E3A\u4EC0\u4E48\u4F60\u6297\u62D2\u8C08\u611F\u60C5\u5462\uFF1F

S:

Feelings?\u611F\u60C5\uFF1FI&#39;m a sociopath. I don&#39;t have feelings.\u6211\u53CD\u793E\u4F1A\u3002\u6211\u6CA1\u611F\u60C5\uFF1F

R:

And I&#39;m a reformed killer for hire. We&#39;re perfect for each other. You&#39;re gonna figure that out someday.\u800C\u6211\u662F\u6539\u8FC7\u81EA\u65B0\u7684\u6740\u624B\u3002\u6211\u4EEC\u662F\u5929\u751F\u4E00\u5BF9\u3002\u4F60\u603B\u6709\u4E00\u5929\u4F1A\u660E\u767D\u7684\u3002

S:

Root, if you and I were the last two people on the face of this planet--\u6839\uFF0C\u5C31\u7B97\u4F60\u548C\u6211\u6210\u4E86\u6574\u4E2A\u661F\u7403\u4E0A\u4EC5\u6709\u7684\u4EBA\u7C7B\u2014\u2014

R:

An increasingly plausible scenario given Samaritan&#39;s plans.\u4ECE\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u8BA1\u5212\u6765\u770B\uFF0C\u6709\u53EF\u80FD\u6210\u771F\u3002

S:

Fine. Maybe someday, when Samaritan wipes everyone out... We can talk about it.\u597D\u5427\uFF0C\u4E5F\u8BB8\u6709\u4E00\u5929\uFF0C\u6492\u9A6C\u5229\u4E9A\u4EBA\u628A\u5176\u4ED6\u4EBA\u5168\u706D\u4E86\u2026\u6211\u4EEC\u5C31\u8C08\u3002

R:

You&#39;re saying maybe someday?\u4F60\u662F\u8BF4\uFF0C\u4E5F\u8BB8\u6709\u4E00\u5929\uFF1F

S:

Yeah, sure, Root. Maybe someday.\u662F\uFF0C\u5F53\u7136\uFF0C\u6839\u3002\u4E5F\u8BB8\u6709\u4E00\u5929\u3002Is that good enough for you?\u4F60\u6EE1\u610F\u4E86\u5417\uFF1F

R:

Yes, Sameen. That&#39;s good enough for me.\u662F\u7684\uFF0C\u8428\u59C6\u6069\u3002\u6211\u6EE1\u610F\u4E86\u3002

S:

Root?\u6839\uFF1FRoot!\u6839\uFF01

7.5. 00:31:59--00:32:18
In simulation three
R:

Overly affectionate greeting.\u8FC7\u4E8E\u6DF1\u60C5\u7684\u95EE\u5019\u3002

S:

Greeting.\u95EE\u5019\u3002

R:

Transparent rationale for conversation.\u5766\u767D\u6C9F\u901A\u9700\u6C42\u3002

S:

Annoyed attempt to deflect subtext.\u50B2\u5A07\uFF0C\u8F6C\u79FB\u8BDD\u9898\u3002

R:

Overt come-on.\u516C\u7136\u52FE\u5F15\u3002

S:

Mildly embarrassed defensiveness bordering on hostility.\u7565\u5C34\u5C2C\uFF0C\u663E\u793A\u9632\u5FA1\u6027\u3002

R:

Playfully witty sign-off.\u5E7D\u9ED8\u6536\u5C3E\u3002

7.6. 00:40:02--00:41:30
R:

Hey, sweetie. You busy?\u4EB2\u4EB2\uFF0C\u4F60\u5728\u5FD9\u5417\uFF1F

S:

A little. Skip the verbal foreplay, Root. Why are you calling?\u6709\u70B9\u3002\u7701\u7565\u524D\u620F\u5427\uFF0C\u6839\u3002\u6253\u7ED9\u6211\u5E72\u561B\uFF1F

R:

Can&#39;t a couple of gals take a little break from work to catch up?\u96BE\u9053\u4E24\u4F4D\u59D1\u5A18\u5C31\u4E0D\u80FD\u4F11\u606F\u4E00\u4E0B\uFF0C\u597D\u597D\u53D9\u53D9\u5417\uFF1F

S:

No, we do not have time to catch up.\u4E0D\uFF0C\u6211\u4EEC\u6CA1\u65F6\u95F4\u53D9\u53D9\u3002You guys look like crap.\u4F60\u4EEC\u8FD8\u771F\u60E8\u3002

H:

How did you--\u4F60\u600E\u4E48\u2014\u2014

S:

Had to crawl through 50 yards of air duct. We won&#39;t make it that way.\u722C\u4E8645\u7C73\u7684\u5BFC\u98CE\u7B52\u3002\u6CA1\u6CD5\u539F\u8DEF\u8FD4\u56DE\u3002Don&#39;t worry. I got a little gift from our friend in the bomb vest. I&#39;ll take it from here.\u522B\u62C5\u5FC3\u3002\u6211\u6709\u90A3\u4F4D\u70B8\u5F39\u80CC\u5FC3\u670B\u53CB\u7684\u5C0F\u793C\u7269\u3002\u4EA4\u7ED9\u6211\u5427\u3002Come on, get him up.\u5FEB\uFF0C\u6276\u4ED6\u8D77\u6765\u3002

R:

We&#39;re so good at this together. You&#39;re gonna realize that someday.\u6211\u4EEC\u662F\u5929\u4F5C\u4E4B\u5408\u3002\u4F60\u603B\u6709\u4E00\u5929\u4F1A\u610F\u8BC6\u5230\u7684\u3002

S:

Root, no offense...\u6839\uFF0C\u65E0\u610F\u5192\u72AF\u2026You&#39;re hot. You&#39;re good with a gun. Those are two qualities I greatly admire.\u4F60\u5F88\u8FA3\u3002\u4F60\u64C5\u957F\u7528\u67AA\u3002\u8FD9\u662F\u6211\u6700\u4EF0\u6155\u7684\u4E24\u4E2A\u54C1\u8D28\u3002But you and me together would be like a four alarm fire in an oil refinery.\u4F46\u4F60\u6211\u4E8C\u4EBA\u5728\u4E00\u8D77\u4F1A\u6FC0\u70C8\u5982\u5929\u96F7\u5730\u706B\u3002

R:

Sounds cozy.\u542C\u7740\u771F\u4E0D\u9519\u3002I&#39;m out of ammo, Shaw.\u6211\u6CA1\u5F39\u836F\u4E86\uFF0C\u8096\u3002

H:

We need to go. Might not get a second chance.\u6211\u4EEC\u5F97\u8D70\u4E86\u3002\u4E5F\u8BB8\u6CA1\u6709\u7B2C\u4E8C\u6B21\u673A\u4F1A\u4E86\u3002

S:

Second chances are overrated, Harold.\u7B2C\u4E8C\u6B21\u673A\u4F1A\u6CA1\u60F3\u8C61\u4E2D\u90A3\u4E48\u597D\uFF0C\u54C8\u7F57\u5FB7\u3002

L:

What the--\u4EC0\u4E48\u2014\u2014

H:

The controls aren&#39;t responding.\u63A7\u5236\u88C5\u7F6E\u6CA1\u6709\u53CD\u5E94\u3002

S:

The desk. There&#39;s an override button. Someone&#39;s gotta get to that button and hold them off.\u684C\u5B50\u3002\u4E0A\u8FB9\u6709\u4E2A\u8D85\u9A70\u63A7\u5236\u6309\u94AE\u3002\u6709\u4EBA\u5F97\u53BB\u6309\u538B\u4F4F\u3002

R:

Sameen, if you even think I&#39;m gonna let you--\u8428\u59C6\u6069\uFF0C\u4F60\u8981\u89C9\u5F97\u6211\u4F1A\u8BA9\u4F60\u2014\u2014

S:

For god&#39;s sakes.\u5929\u554A\u3002

8. S04E21
Trap00:06:22--00:06:40
R:

Shaw&#39;s phone.\u8096\u7684\u624B\u673A\u3002

J:

Finch?\u82AC\u5947\uFF1F

H:

I have to go, Mr. Reese.\u4E0D\u8BF4\u4E86\uFF0C\u91CC\u745F\u5148\u751F\u3002You&#39;ll have to manage Elias yourself.\u4F60\u4EEC\u81EA\u5DF1\u5904\u7406\u5904\u7406\u4EE5\u5229\u4E9A\u7684\u4E8B\u3002

R:

Hello?\u5582\uFF1F

S:

Root, are you there? It&#39;s me. I need your help.\u6839\uFF0C\u662F\u4F60\u5417\uFF1F\u662F\u6211\u3002\u6211\u9700\u8981\u4F60\u5E2E\u5FD9\u3002

R:

Shaw?\u8096\uFF1FWait. Sameen.\u7B49\u7B49\u3002\u8428\u59C6\u6069\u3002

`,excerpt:"",url:"/posts\\Vedio\\poi-lines04"},{title:"POI lines S05",content:`
1. S05E04
1.1. 00:13:40--00:28:52
In the 6741st Samaritan simulation
R:

Whoever&#39;s back there, kick over your weapon, and I&#39;ll let you keep full mobility.\u91CC\u9762\u7684\u4EBA\uFF0C\u628A\u67AA\u8E22\u51FA\u6765\uFF0C\u6211\u5C31\u9976\u4F60\u819D\u76D6\u3002Shaw.\u8096\u3002

S:

Not a very friendly homecoming.\u91CD\u9022\u4E0D\u591F\u53CB\u597D\u554A\u3002Thanks for saving my ass.\u8C22\u8C22\u4F60\u6765\u6551\u6211\u3002

R:

I can&#39;t believe it&#39;s you.\u6211\u4E0D\u6562\u76F8\u4FE1\u662F\u4F60\u3002Shaw?\u8096\uFF1FShaw. Shaw!\u8096\u3002\u8096\uFF01

J:

Samaritan is definitely tracking her. We can&#39;t take her back to the Machine.\u6492\u9A6C\u5229\u4E9A\u4EBA\u80AF\u5B9A\u5728\u8FFD\u8E2A\u5979\u3002\u6211\u4EEC\u4E0D\u80FD\u5E26\u5979\u56DE\u673A\u5668\u90A3\u91CC\u3002

R:

I guess we&#39;re gonna have to do it here.\u770B\u6765\u53EA\u80FD\u5728\u8FD9\u513F\u505A\u4E86\u3002

S:

They got in my head.\u4ED6\u4EEC\u8FDB\u5165\u4E86\u6211\u7684\u5927\u8111\u3002

R:

Way ahead of you. We&#39;ve seen Samaritan&#39;s brain accessories before. Let&#39;s get that chip out of your skull.\u65E9\u53D1\u73B0\u4E86\u3002\u6211\u4EEC\u4E4B\u524D\u89C1\u8FC7\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u690D\u5165\u795E\u7ECF[S04E13] \u5148\u628A\u82AF\u7247\u4ECE\u4F60\u8111\u5B50\u91CC\u53D6\u51FA\u5427\u3002

S:

We&#39;re on a moving subway car that&#39;s probably caked in rat crap. Not the ideal operating theater.\u6211\u4EEC\u5728\u884C\u9A76\u7684\u5730\u94C1\u4E0A\uFF0C\u60C5\u51B5\u6076\u52A3\uFF0C\u6EE1\u662F\u7EC6\u83CC\u3002\u4E0D\u7B97\u662F\u7406\u60F3\u624B\u672F\u5BA4\u3002

R:

Fugitives can&#39;t be choosers.\u9003\u4EA1\u4E2D\u5C31\u522B\u6311\u6311\u62E3\u62E3\u4E86\u3002

S:

Brain surgery, medieval-style. Awesome.\u4E2D\u4E16\u7EAA\u98CE\u683C\u7684\u8111\u90E8\u624B\u672F\u3002\u592A\u68D2\u4E86\u3002

R:

Remember how we first met?\u8BB0\u5F97\u6211\u4EEC\u7B2C\u4E00\u6B21\u89C1\u9762\u7684\u65F6\u5019\u5417\uFF1F

S:

You tried to burn me with an iron.\u4F60\u60F3\u62FF\u71A8\u6597\u70EB\u6211\u3002

R:

Fun, right? Maybe you&#39;ll like this too. But it&#39;s probably gonna suck.\u5F88\u597D\u73A9\u5BF9\u4E0D\u5BF9\uFF1F\u4F60\u4E5F\u4F1A\u559C\u6B22\u8FD9\u4E2A\u7684\u3002\u4E0D\u8FC7\u53EF\u80FD\u4F1A\u5F88\u75DB\u3002

S:

Just get this damn thing out of me.\u8D76\u7D27\u628A\u8FD9\u73A9\u610F\u513F\u5F04\u51FA\u53BB\u3002

H:

We shouldn&#39;t throw caution to the wind. Remember Martine told us Shaw had been turned.\u6211\u4EEC\u4E0D\u80FD\u5192\u9669\u3002\u8BB0\u5F97\u739B\u8482\u5A1C\u8BF4\u8FC7\u8096\u88AB\u7B56\u53CD\u4E86\u5417\u3002

R:

She was lying. Shaw&#39;s one of us.\u5979\u8BF4\u8C0E\u3002\u8096\u662F\u6211\u4EEC\u7684\u4EBA\u3002

H:

We don&#39;t know what they did to her.\u6211\u4EEC\u4E0D\u77E5\u9053\u4ED6\u4EEC\u5BF9\u5979\u505A\u4E86\u4EC0\u4E48\u3002

S:

Where the hell did you take me?\u4F60\u4EEC\u628A\u6211\u5E26\u5230\u54EA\u4E86\uFF1F

R:

You&#39;re at my place, sweetie.\u4F60\u5728\u6211\u5BB6\uFF0C\u4EB2\u4EB2\u3002

S:

Nice digs.\u5730\u65B9\u4E0D\u9519\u3002

R:

Wanna move in?\u60F3\u642C\u8FDB\u6765\u5417\uFF1FSomeone else is excited you&#39;re back.\u8FD8\u6709\u522B\u4EBA\u56E0\u4E3A\u4F60\u7684\u56DE\u5F52\u5174\u594B\u5462\u3002Woman&#39;s best friend.\u5973\u4EBA\u6700\u597D\u7684\u670B\u53CB\u3002

S:

Bear. It&#39;s damn good to see you too, buddy.\u5C0F\u718A\u3002\u89C1\u5230\u4F60\u771F\u662F\u592A\u597D\u4E86\uFF0C\u4F19\u8BA1\u3002

H:

Bear, leave her be. Afliggen.\u5C0F\u718A\uFF0C\u522B\u70E6\u5979\u4E86\u3002[\u8377\u5170\u8BED]\u8DB4\u4E0B\u3002

S:

The chip?\u82AF\u7247\u5462\uFF1F

R:

Removed and disabled. They can&#39;t hurt you anymore.\u53D6\u51FA\u4E86\uFF0C\u5173\u6389\u4E86\u3002\u4ED6\u4EEC\u65E0\u6CD5\u518D\u4F24\u5BB3\u4F60\u4E86\u3002

H:

I&#39;ll analyze the chip. It may hold Intel that could help the Machine.\u6211\u53BB\u89E3\u6790\u82AF\u7247\u3002\u91CC\u9762\u7684\u4FE1\u606F\u4E5F\u8BB8\u80FD\u5E2E\u52A9\u673A\u5668\u3002

S:

So the Machine&#39;s still alive?\u673A\u5668\u8FD8\u6D3B\u7740\uFF1F

R:

Alive and well. Wanna take a field trip? Say hi?\u6D3B\u5F97\u597D\u597D\u7684\u3002\u60F3\u53BB\u6253\u4E2A\u62DB\u547C\u5417\uFF1F

S:

I don&#39;t know. If I step out of here, they could pick up the scent.\u6211\u53EF\u4E0D\u786E\u5B9A\u3002\u53EA\u8981\u6211\u8D70\u51FA\u53BB\uFF0C\u4ED6\u4EEC\u5C31\u4F1A\u55C5\u5230\u5473\u513F\u3002

H:

You&#39;re right to exercise caution.\u8C28\u614E\u884C\u4E8B\u662F\u5BF9\u7684\u3002

S:

We gotta get to Greer. Cut off the dragon&#39;s head, the body will die.\u6211\u4EEC\u5F97\u53BB\u627E\u683C\u91CC\u5C14\u3002\u64D2\u8D3C\u5148\u64D2\u738B\u3002

H:

A well thought-out plan takes time. We haven&#39;t survived this long by virtue of rash decisions.\u5468\u8BE6\u8BA1\u5212\u7684\u5236\u5B9A\u9700\u8981\u65F6\u95F4\u3002\u5192\u7136\u884C\u4E8B\u6211\u4EEC\u6015\u6D3B\u4E0D\u4E86\u591A\u4E45\u3002

S:

Yeah, &#39;cause actions aren&#39;t really your thing, huh?\u662F\u554A\uFF0C\u56E0\u4E3A\u4F60\u5C31\u662F\u4E0D\u559C\u6B22\u884C\u52A8\u3002Did you even look for me?\u4F60\u6709\u627E\u8FC7\u6211\u5417\uFF1F

H:

Of course we did.\u6211\u4EEC\u5F53\u7136\u627E\u8FC7\u3002

S:

Not hard enough.\u672A\u5C3D\u5168\u529B\u3002

H:

We should go, John. I trust you&#39;ll recover smoothly under Ms. Groves&#39; care.\u6211\u4EEC\u8D70\u5427\uFF0C\u7EA6\u7FF0\u3002\u6211\u76F8\u4FE1\u4F60\u4F1A\u5728\u683C\u7F57\u592B\u65AF\u5973\u58EB\u7684\u7167\u770B\u4E0B\u5E73\u7A33\u6062\u590D\u3002

J:

Left you, some get-well whiskey in the bar.\u7ED9\u4F60\uFF0C\u7559\u4E86\u795D\u541B\u5EB7\u590D\u5A01\u58EB\u5FCC\u5728\u5427\u53F0\u3002

S:

I hope he didn&#39;t miss me too much.\u4F46\u613F\u4ED6\u6CA1\u592A\u60F3\u6211\u3002

R:

I never stopped looking for you.\u6211\u6CA1\u505C\u6B62\u8FC7\u627E\u4F60\u3002

S:

It&#39;s kind of cold in here.\u8FD9\u513F\u6709\u70B9\u51B7\u3002

R:

Yeah. You&#39;re just, uh, still recovering from surgery. You should get under the covers.\u662F\u554A\u3002\u4F60\u8FD8\u5728\u672F\u540E\u6062\u590D\u4E2D\u3002\u76D6\u597D\u88AB\u5B50\u3002Kinda left me hanging at the stock exchange. Of course, you did save my life.\u5C31\u90A3\u4E48\u628A\u6211\u6254\u80A1\u7968\u4EA4\u6613\u6240\u4E86\u3002\u5F53\u7136\uFF0C\u4F60\u786E\u5B9E\u6551\u4E86\u6211\u4E00\u547D\u3002Maybe there&#39;s some way I can repay the favor?\u6216\u8BB8\u6211\u53EF\u4EE5\u56DE\u62A5\u4E00\u4E0B\uFF1F

S:

I&#39;m not really in the right mindset\u6211\u73B0\u5728\u6CA1\u5174\u81F4for any of this.\u4E0D\u60F3\u505A\u3002

R:

Right. You should get some rest. Had a rough couple of days.\u597D\u3002\u4F60\u662F\u8BE5\u4F11\u606F\u3002\u8FD9\u51E0\u5929\u4E5F\u633A\u7D2F\u3002

S:

You know, I&#39;m not tired. It&#39;s hard to imagine both of us... making it out of this in one piece.\u5176\u5B9E\uFF0C\u6211\u4E0D\u7D2F\u3002\u5F88\u96BE\u60F3\u8C61\u6211\u4EEC\u4FE9\u90FD\u80FD\u9003\u51FA\u751F\u5929\u3002

R:

Be a hell of a way to go.\u7261\u4E39\u82B1\u4E0B\u6B7B\uFF0C\u505A\u9B3C\u4E5F\u98CE\u6D41\u3002

Guess you&#39;re in the mindset now.\u770B\u6765\u4F60\u73B0\u5728\u6709\u5174\u81F4\u4E86\u3002
S:

Shut up.\u95ED\u5634\u3002

R:

That didn&#39;t suck.\u8FD8\u4E0D\u8D56\u3002

S:

There was plenty of sucking.\u5DF2\u7ECF\u8D56\u904D\u5168\u8EAB\u4E86\u3002

R:

I already wanted to tear Samaritan apart, turn it into an Atari.\u6211\u672C\u60F3\u628A\u6492\u9A6C\u5229\u4E9A\u4EBA\u5927\u5378\u516B\u5757\uFF0C\u6539\u88C5\u6210\u96C5\u8FBE\u5229\u6E38\u620F\u673A\u3002That&#39;s too nice. Scarred my beautiful girl. Maybe a Casio.\u592A\u4EC1\u6148\u4E86\u3002\u5C45\u7136\u4F24\u4E86\u6211\u7684\u7F8E\u4EBA\u513F\u3002\u6216\u8BB8\u8BE5\u6539\u6210\u5361\u897F\u6B27\u8BA1\u7B97\u5668\u3002

S:

All the scars are from before when I worked relevant numbers with the ISA. Samaritan&#39;s torture was more psychological.\u90FD\u662F\u8FC7\u53BB\u7684\u75A4\uFF0C\u6211\u5728\u60C5\u62A5\u7A81\u51FB\u961F\u5904\u7406\u76F8\u5173\u53F7\u7801\u65F6\u7559\u7684\u3002\u6492\u9A6C\u5229\u4E9A\u4EBA\u73A9\u7684\u662F\u7CBE\u795E\u6298\u78E8\u3002

R:

And you never broke.\u800C\u4F60\u5E76\u672A\u5D29\u6E83\u3002

S:

When I was training with the ISA, they taught us if we were ever tortured to take our mind somewhere else, someplace safe.\u6211\u5728\u60C5\u62A5\u7A81\u51FB\u961F\u63A5\u53D7\u8BAD\u7EC3\u65F6\uFF0C\u4ED6\u4EEC\u6559\u6211\u4EEC\u5982\u679C\u906D\u53D7\u6298\u78E8\u5C31\u628A\u6CE8\u610F\u529B\u8F6C\u5411\u522B\u7684\u5730\u65B9\uFF0C\u5B89\u5168\u4E4B\u5730\u3002

R:

Where did you go?\u4F60\u8F6C\u5230\u54EA\u513F\u53BB\u4E86\uFF1F

S:

Nowhere. The training was bull. There was no safe place. No escape.\u6CA1\u8F6C\u3002\u8FD9\u4E9B\u8BAD\u7EC3\u5728\u80E1\u626F\u3002\u6839\u672C\u6CA1\u6709\u5B89\u5168\u4E4B\u5730\u3002\u9003\u8131\u4E0D\u4E86\u3002

R:

Stay here with me.\u966A\u7740\u6211\u3002

S:

I couldn&#39;t stand you when we first met. You wouldn&#39;t stop bugging me.\u521D\u89C1\u65F6\u6211\u5C31\u53D7\u4E0D\u4E86\u4F60\u3002\u662F\u4F60\u6B7B\u76AE\u8D56\u8138\u5730\u7EA0\u7F20\u6211\u3002

S:

No.\u4E0D\u3002No...\u4E0D\u2026The chip is gone.\u82AF\u7247\u5DF2\u7ECF\u6CA1\u4E86\u3002You&#39;re--\u4F60\u2014\u2014you&#39;re not in my head anymore.\u4F60\u4E0D\u5728\u6211\u7684\u5927\u8111\u91CC\u4E86\u3002Get out of my...\u6EDA\u51FA\u6211\u7684\u2026

R:

Sameen?\u8428\u59C6\u6069\uFF1FAre you okay?\u4F60\u8FD8\u597D\u5417\uFF1F

S:

I don&#39;t know.\u6211\u4E5F\u4E0D\u77E5\u9053\u3002

R:

Come back to bed.\u56DE\u5E8A\u4E0A\u6765\u3002We&#39;ll figure it out in the morning.\u7B49\u5929\u4EAE\u518D\u8BF4\u3002

R:

Okay, I&#39;ll be right there.\u597D\uFF0C\u6211\u8FD9\u5C31\u8FC7\u53BB\u3002Hey, baby. Don&#39;t move a muscle. I&#39;m gonna go grab us some breakfast.\u5B9D\u8D1D\u3002\u4E56\u4E56\u522B\u52A8\u3002\u6211\u53BB\u4E70\u70B9\u65E9\u9910\u3002

R:

So what did you need to tell me so urgently?\u4EC0\u4E48\u4E8B\u8FD9\u4E48\u7740\u6025\u544A\u8BC9\u6211\uFF1F

J:

Finch finished analyzing the chip.\u82AC\u5947\u89E3\u6790\u5B8C\u4E86\u82AF\u7247\u3002It&#39;s a placebo.\u53EA\u662F\u5B89\u6170\u5242\u3002If there&#39;s anything wrong with Shaw, it&#39;s not the chip.\u8096\u5982\u679C\u6709\u4E0D\u5BF9\u52B2\uFF0C\u4E0D\u662F\u82AF\u7247\u7684\u539F\u56E0\u3002Is she okay?\u5979\u8FD8\u597D\u5417\uFF1F

R:

She&#39;s...behaving strangely.\u5979\u2026\u4E3E\u6B62\u6709\u4E9B\u53E4\u602A\u3002

J:

We need to figure out what&#39;s going on with her. If she&#39;s turned.\u6211\u4EEC\u5F97\u5F04\u660E\u767D\u5979\u5230\u5E95\u600E\u4E48\u4E86\u3002\u662F\u5426\u5DF2\u88AB\u7B56\u53CD\u3002

R:

Shaw&#39;s not the enemy. You have no idea what Samaritan put her through.\u8096\u4E0D\u662F\u654C\u4EBA\u3002\u4F60\u4E0D\u77E5\u9053\u6492\u9A6C\u5229\u4E9A\u4EBA\u5BF9\u8096\u505A\u4E86\u4EC0\u4E48\u3002

J:

Or how it&#39;s changed her?\u662F\u5426\u6539\u53D8\u4E86\u5979\uFF1F

R:

I won&#39;t hurt her. Neither will you.\u6211\u4E0D\u4F1A\u4F24\u5BB3\u5979\u3002\u4F60\u4E5F\u4E0D\u884C\u3002I&#39;m not saying that.\u6211\u6CA1\u90A3\u4E48\u8BF4\u3002Look, just...stay with her. See if you can find out anything.\u4F60\u5C31\u2026\u966A\u7740\u5979\u5427\u3002\u770B\u770B\u80FD\u53D1\u73B0\u4EC0\u4E48\u3002

S:

So I don&#39;t get it. You guys think that I&#39;m a double agent, or I&#39;m a human bomb about to detonate?\u6211\u4E0D\u660E\u767D\u4E86\u3002\u4F60\u4EEC\u89C9\u5F97\u6211\u662F\u53CC\u9762\u95F4\u8C0D\uFF0C\u8FD8\u662F\u968F\u65F6\u4F1A\u5F15\u7206\u7684\u4EBA\u4F53\u70B8\u5F39\uFF1F

R:

Sameen.\u8428\u59C6\u6069\u3002
S:
John&#39;s a professional dick,but I can&#39;t believe that you don&#39;t trust me.\u7EA6\u7FF0\u4E00\u76F4\u6DF7\u86CB\u900F\u9876 \uFF0C\u6211\u4E0D\u6562\u76F8\u4FE1\u4F60\u5C45\u7136\u4E0D\u4FE1\u6211\u3002

R:

Wait, did--\u7B49\u7B49\uFF0C\u4F60\u2014\u2014Did you bug me?\u4F60\u5728\u7A83\u542C\u6211\uFF1FI know you have been through things that we can&#39;t imagine, but... you don&#39;t have to be scared.\u6211\u77E5\u9053\u4F60\u7ECF\u5386\u4E86\u96BE\u4EE5\u60F3\u8C61\u7684\u75DB\u82E6\uFF0C\u53EF\u662F\u2026\u4F60\u4E0D\u8981\u5BB3\u6015\u3002

S:

Scared? This has to end now.\u5BB3\u6015\uFF1F\u73B0\u5728\u8BE5\u6709\u4E2A\u4E86\u7ED3\u4E86\u3002You know what? Screw this.\u4F60\u731C\u600E\u4E48\u7740\uFF1F\u53BB\u4ED6\u5988\u7684\u3002Excuse me.\u62B1\u6B49\u3002

P:

Hi, honey.\u55E8\uFF0C\u5B9D\u8D1D \u3002

S:

Yeah, this is Sameen Shaw.I know you&#39;re looking for me.\u6211\u662F\u8428\u59C6\u6069\xB7\u8096\u3002\u6211\u77E5\u9053\u4F60\u5728\u627E\u6211\u3002So come and get me.\u6765\u6293\u6211\u5427\u3002

P:

Hello? Who&#39;s this?\u8BF7\u95EE\u662F\u54EA\u4F4D\uFF1F

S:

I&#39;m taking the fight to Samaritan right now. And I&#39;m gonna destroy it once and for all.\u6211\u73B0\u5728\u5C31\u8DDF\u6492\u9A6C\u5229\u4E9A\u4EBA\u5BA3\u6218\u3002\u8FD9\u6B21\u6211\u8981\u5F7B\u5E95\u6467\u6BC1\u5B83\u3002

J:

We&#39;re not equipped for this hunting party.\u88C5\u5907\u4E3A\u96F6\uFF0C\u5F00\u6218\u65E0\u80FD\u3002

S:

We are now. I brought a few extra party favors. It&#39;s time we slay the dragon.\u5168\u9F50\u3002\u6211\u591A\u5E26\u4E86\u51E0\u4E2A\u201C\u5C0F\u5B9D\u8D1D\u201D\u3002\u8BE5\u64D2\u738B\u4E86\u3002

R:

Or time we hit the road.\u662F\u8BE5\u8DD1\u8DEF\u4E86\u5427\u3002

S:

Damn it.\u8BE5\u6B7B\u3002

M:

Hands up!\u4E3E\u8D77\u624B\u6765\uFF01Found our escapee, sir. We&#39;ll make it look clean. Could&#39;ve made it a little harder for us, though.\u627E\u5230\u9003\u72AF\u4E86\uFF0C\u5148\u751F\u3002\u6211\u4EEC\u4F1A\u6E05\u7406\u597D\u3002\u867D\u8BF4\u4F1A\u6709\u4E9B\u68D8\u624B\u3002

S:

You know, I was thinking the exact same thing.\u6211\u4E5F\u6709\u6B64\u987E\u8651\u3002

J:

Can you triangulate a signal off his last call?\u80FD\u8FFD\u8E2A\u5230\u4ED6\u6700\u540E\u7535\u8BDD\u7684\u4FE1\u53F7\u5417\uFF1F

R:

Let&#39;s reach out and touch his boss.\u6765\u76F4\u6363\u4ED6\u4EEC\u7684\u8001\u7A9D\u5427\u3002

G:

My dear Samaritan, have you relocated Sameen Shaw or her associates?\u4EB2\u7231\u7684\u6492\u9A6C\u5229\u4E9A\u4EBA\uFF0C\u4F60\u662F\u5426\u5DF2\u5B9A\u4F4D\u5230\u8428\u59C6\u6069\xB7\u8096\u53CA\u5176\u540C\u4F19\uFF1F

S:

Hey, Gramps.\u6211\u8BF4\u8001\u7237\u5B50\u3002Root!\u6839\uFF01

J:

You okay? Let&#39;s go.\u4F60\u8FD8\u597D\u5417\uFF1F\u6211\u4EEC\u8D70\u3002

G:

Everything all right, Sameen?\u522B\u6765\u65E0\u6059\u554A\uFF0C\u8428\u59C6\u6069\uFF1F

S:

If you want to live, keep your mouth shut.\u60F3\u6D3B\u547D\uFF0C\u5C31\u95ED\u5634\u3002

H:

Please don&#39;t shoot. I have no wish to make my final confession.\u8BF7\u522B\u5F00\u67AA\u3002\u6211\u8FD8\u4E0D\u60F3\u505A\u4E34\u7EC8\u5FCF\u6094\u3002

J:

Why&#39;d you bring us here, Finch?\u4E3A\u4EC0\u4E48\u5E26\u6211\u4EEC\u6765\u8FD9\uFF0C\u82AC\u5947\uFF1F

H:

Turns out this is the best place to hide from a god.\u539F\u6765\u8FD9\u91CC\u624D\u662F\u8EB2\u907F\u4E0A\u5E1D\u7684\u6700\u4F73\u5730\u70B9\u3002This way, please.\u8BF7\u8FD9\u8FB9\u8D70\u3002It seems centuries-old stone acts as a natural Faraday cage.\u51E0\u4E16\u7EAA\u9AD8\u9F84\u7684\u77F3\u780C\u5EFA\u7B51\u662F\u5929\u7136\u7684\u9759\u7535\u5C4F\u853D\u573A\u3002

R:

At least we won&#39;t disturb the occupants.\u81F3\u5C11\u4E0D\u4F1A\u60CA\u6270\u5230\u4EA1\u7075\u4EEC\u3002

H:

We should be safe here.\u6211\u4EEC\u5728\u8FD9\u91CC\u5F88\u5B89\u5168\u3002

G:

How unreasonably optimistic of you.\u591A\u4E48\u76F2\u76EE\u7684\u4E50\u89C2\u554A\u3002

J:

There&#39;s no hiding him, not for long.\u8FD9\u91CC\u85CF\u4E0D\u4F4F\u4ED6\uFF0C\u85CF\u4E0D\u4E45\u3002

R:

So we don&#39;t hide him. We kill him while we still have the chance.\u90A3\u5C31\u4E0D\u85CF\u7740\u4ED6\u3002\u8D81\u673A\u6740\u4E86\u4ED6\u3002
H:
We don&#39;t render final judgments, Ms. Groves.\u6211\u4EEC\u4E0D\u505A\u5BA1\u5224\u8005\uFF0C\u683C\u7F57\u592B\u65AF\u5973\u58EB\u3002

J:

Then we&#39;ll never win. Let&#39;s finish this now.\u90A3\u6211\u4EEC\u6C38\u8FDC\u8D62\u4E0D\u4E86\u3002\u73B0\u5728\u4E86\u7ED3\u5427\u3002

S:

We need him alive.\u4ED6\u5FC5\u987B\u6D3B\u7740\u3002

R:

Weren&#39;t you the one who said, &quot;Cut off the head, the dragon dies&quot;?\u4E0D\u662F\u4F60\u8BF4\u7684\u201C\u64D2\u8D3C\u5148\u64D2\u738B\u201D\u5417\uFF1F

S:

Oh, Puff&#39;s head&#39;s gonna roll, but not before he tells us how to defeat it.\u88AB\u64D2\u4F4F\u7684\u738B\u662F\u6B7B\u5B9A\u4E86\uFF0C\u4E0D\u8FC7\u4ED6\u5F97\u5148\u4EA4\u5F85\u600E\u4E48\u64D2\u8D3C\u3002

G:

I&#39;m not the head of the beast, as you suggest. There is no head. As such, I&#39;m irrelevant. So, do with me what you will. Torture, kill.\u6211\u5E76\u975E\u4F60\u6240\u8BF4\u7684\u201C\u738B\u201D\uFF0C\u6211\u4EEC\u6CA1\u6709\u9996\u9886\u3002\u6211\u65E0\u5173\u7D27\u8981\u3002\u6240\u4EE5\uFF0C\u968F\u4FBF\u4F60\u4EEC\u3002\u8981\u6740\u8981\u5250\u3002

S:

You know, I was hoping you&#39;d say that.\u6211\u5C31\u76FC\u4F60\u8FD9\u53E5\u3002

1.2. 00:37:18--00:41:27
R:

Shaw, you have to get out of there. I&#39;ll come find you, bring you back.\u8096\uFF0C\u4F60\u8D76\u7D27\u79BB\u5F00\u90A3\u91CC\u3002\u6211\u53BB\u627E\u4F60\uFF0C\u5E26\u4F60\u56DE\u6765\u3002

S:

You can&#39;t. You&#39;re hurt.\u4E0D\u884C\uFF0C\u4F60\u53D7\u4F24\u4E86\u3002

R:

I am not ready to lose you again, Sameen. Whatever happened, we&#39;ll fix it. Just stay alive.\u6211\u4E0D\u80FD\u518D\u6B21\u5931\u53BB\u4F60\uFF0C\u8428\u59C6\u6069\u3002\u4E0D\u8BBA\u53D1\u751F\u4EC0\u4E48\uFF0C\u6211\u4EEC\u90FD\u80FD\u89E3\u51B3\u3002\u6D3B\u4E0B\u53BB\u3002

S:

Don&#39;t. No, please don&#39;t.\u4E0D\u8981\u3002\u6C42\u4F60\u4E0D\u8981\u3002

R:

This way.\u8FD9\u8FB9\u3002

I think we lost them. We gotta get back to the Machine.\u5E94\u8BE5\u7529\u6389\u4ED6\u4EEC\u4E86\u3002\u6211\u4EEC\u5FEB\u56DE\u673A\u5668\u90A3\u91CC\u3002
S:

We need to be sure first.\u6211\u4EEC\u5148\u786E\u8BA4\u4E00\u4E0B\u3002

R:

Harold&#39;s alone, unprotected.\u54C8\u7F57\u5FB7\u5B64\u8EAB\u4E00\u4EBA\uFF0C\u65E0\u4EBA\u4FDD\u62A4\u3002Don&#39;t worry. I&#39;ll watch our tail. You lead the way.\u522B\u62C5\u5FC3\u3002\u6211\u6765\u57AB\u540E\u3002\u4F60\u5E26\u8DEF\u3002

S:

There&#39;s something I need to tell you about Reese.\u6709\u4EF6\u4E8B\u6211\u8981\u544A\u8BC9\u4F60\uFF0C\u5173\u4E8E\u91CC\u745F\u3002

R:

It can wait till we&#39;re home safe.\u7B49\u6211\u4EEC\u5E73\u5B89\u5230\u5BB6\u518D\u8BF4\u3002

S:

Follow me.\u8DDF\u6211\u6765\u3002

R:

Where are you going? We need to get back to Harold and the Machine.\u4F60\u8981\u53BB\u54EA\u513F\uFF1F\u6211\u4EEC\u8981\u56DE\u53BB\u54C8\u7F57\u5FB7\u548C\u673A\u5668\u90A3\u91CC\u3002

S:

I can&#39;t do this anymore. I don&#39;t know who&#39;s controlling this.\u6211\u4E0D\u80FD\u518D\u7EE7\u7EED\u4E0B\u53BB\u4E86\u3002\u6211\u4E0D\u77E5\u9053\u662F\u8C01\u5728\u64CD\u63A7\u8FD9\u4E00\u5207\u3002

R:

Controlling what, sweetie?\u64CD\u63A7\u4EC0\u4E48\uFF0C\u4EB2\u4EB2\uFF1F

S:

Me.\u6211\u3002I shot Reese.\u6211\u6740\u4E86\u91CC\u745F\u3002And now I&#39;m gonna kill you too.\u73B0\u5728\u6211\u8FD8\u8981\u6740\u4E86\u4F60\u3002      

R:

So why haven&#39;t you?
\u90A3\u4F60\u4E3A\u4EC0\u4E48\u8FD8\u4E0D\u52A8\u624B\uFF1FBecause somewhere... in your sociopathic heart, you know we belong together.\u56E0\u4E3A\u2026\u4F60\u90A3\u9897\u53CD\u793E\u4F1A\u7684\u5FC3\uFF0C\u660E\u767D\u6211\u4EEC\u5C5E\u4E8E\u5F7C\u6B64\u3002We&#39;ll work through this, but first...I need to get you to safety.\u6211\u4EEC\u80FD\u89E3\u51B3\uFF0C\u4F46\u9996\u5148\u2026\u6211\u8981\u628A\u4F60\u5E26\u5230\u5B89\u5168\u4E4B\u5730\u3002

S:

But nothing&#39;s safe.\u6CA1\u6709\u5B89\u5168\u4E4B\u5730\u3002Do you know where we are? What they did to me?\u4F60\u77E5\u9053\u6211\u4EEC\u5728\u54EA\u91CC\u5417\uFF1F\u4F60\u77E5\u9053\u4ED6\u4EEC\u5BF9\u6211\u505A\u4E86\u4EC0\u4E48\u5417\uFF1FThe torture?\u90A3\u4E9B\u6298\u78E8\uFF1FI told you I couldn&#39;t escape it.\u6211\u544A\u8BC9\u8FC7\u4F60\uFF0C\u6211\u65E0\u6CD5\u9003\u8131\u3002But when things got to be too bad... there was one place I would go to in my mind.\u4F46\u5728\u7279\u522B\u96BE\u53D7\u7684\u65F6\u5019..\u6211\u7684\u601D\u7EEA\u603B\u4F1A\u5E26\u6211\u53BB\u4E00\u4E2A\u5730\u65B9\u3002Here... with you.\u8FD9\u91CC\u2026\u548C\u4F60\u5728\u4E00\u8D77\u3002You were my safe place.\u4F60\u5C31\u662F\u6211\u7684\u5B89\u5168\u4E4B\u5730\u3002But not anymore,\u4F46\u73B0\u5728\u4E0D\u662F\u4E86\uFF0Cand I can&#39;t control myself. So the only thing I can control is this.\u6211\u63A7\u5236\u4E0D\u4E86\u81EA\u5DF1\u3002\u53EA\u6709\u4E00\u4EF6\u4E8B\u6211\u80FD\u63A7\u5236\u3002

R:

Sameen!\u8428\u59C6\u6069\uFF01


2. S05E07
2.1. 00:32:24--00:32:56
R:

Shaw,\u8096\uFF0Cplease get this.\u4E00\u5B9A\u8981\u6536\u5230\u3002

S:

Four, A.\u56DB  A\u3002Four.\u56DB\u3002Four alarm fire.\u56DB\u7EA7\u706B\u8B66/\u5929\u96F7\u5730\u706B\u3002[S04E11]Root.\u6839\u3002

3. S05E09
3.1. 00:23:22--00:25:08
S:

Root?\u6839\uFF1F

R:

Shaw.\u8096\u3002Sameen...\u8428\u59C6\u6069\u2026You&#39;re really here.\u4F60\u771F\u7684\u5728\u8FD9\u91CC\u3002She brought you back to me.\u5979\u628A\u4F60\u5E26\u56DE\u6211\u8EAB\u8FB9\u4E86\u3002Wha-- what are you doing here?\u4F60\u2014\u2014\u4F60\u5728\u8FD9\u513F\u5E72\u4EC0\u4E48\uFF1F

S:

What does it look like?\u4F60\u89C9\u5F97\u5462\uFF1FI&#39;m taking on Samaritan one agent at a time.\u6211\u5728\u653E\u5012\u6492\u9A6C\u5229\u4E9A\u4EBA\u7684\u7279\u5DE5\uFF0C\u4E00\u6B21\u4E00\u4E2A\u3002I gotta go.\u6211\u8981\u8D70\u4E86\u3002

R:

Wait.\u7B49\u7B49\u3002Go where? Wait. When did you escape?\u53BB\u54EA\u91CC\uFF1F\u7B49\u7B49\u3002\u4F60\u51E0\u65F6\u9003\u51FA\u6765\uFF1F

S:

It&#39;s complicated, Root.\u8BF4\u6765\u8BDD\u957F\uFF0C\u6839\u3002

R:

Then explain it to me.\u90A3\u5C31\u6162\u6162\u8BF4\u3002Please.\u62DC\u6258\u3002

S:

I escaped a week ago.\u6211\u4E00\u5468\u524D\u9003\u51FA\u6765\u7684\u3002I couldn&#39;t come and find you because it wasn&#39;t safe.\u6211\u4E0D\u80FD\u6765\u627E\u4F60\uFF0C\u56E0\u4E3A\u4E0D\u5B89\u5168\u3002

R:

Why?\u4E3A\u4EC0\u4E48\uFF1F

S:

When they had me, they put me through these tests,\u4ED6\u4EEC\u6293\u5230\u6211\uFF0C\u5BF9\u6211\u505A\u4E86\u6D4B\u8BD5\uFF0Cthese...simulations.\u505A\u4E86\u2026\u6A21\u62DF\u3002

R:

Simulation?\u6A21\u62DF\uFF1F

S:

Over 7,000 of them,\u8D85\u8FC7\u4E03\u5343\u6B21\u3002and always with the same goal.\u6BCF\u6B21\u7684\u76EE\u6807\u90FD\u4E00\u81F4\u3002To turn me against all of you.\u7B56\u53CD\u6211\u3002To kill you.\u6740\u4E86\u4F60\u3002

R:

Obviously they failed.\u663E\u7136\u4ED6\u4EEC\u5931\u8D25\u4E86\u3002

S:

No.\u4E0D\u3002They didn&#39;t,\u4ED6\u4EEC\u6CA1\u6709\uFF0C
because in all the simulations,\u5728\u6240\u6709\u7684\u6A21\u62DF\u4E2D\uFF0Cthat&#39;s exactly what I did.\u6211\u90FD\u90A3\u4E48\u505A\u4E86\u3002

3.2. 00:32:39--00:34:46
R:

Sameen, please, you have to believe me. This isn&#39;t a simulation. This is real. You&#39;re safe now. Let&#39;s get back to the subway.\u8428\u59C6\u6069\uFF0C\u62DC\u6258\uFF0C\u4F60\u8981\u76F8\u4FE1\u6211\u3002\u8FD9\u4E0D\u662F\u6A21\u62DF\u3002\u8FD9\u662F\u771F\u7684\u3002\u4F60\u73B0\u5728\u5B89\u5168\u4E86\u3002\u6211\u4EEC\u56DE\u5730\u94C1\u7AD9\u5427\u3002

S:

No. We can&#39;t.\u4E0D\u3002\u6211\u4EEC\u4E0D\u80FD\u3002

R:

Shaw--\u8096\u2014\u2014

S:

The simplest way to break someone is to rob them of their reality, and they did that well.\u6BC1\u6389\u4E00\u4E2A\u4EBA\u6700\u76F4\u63A5\u7684\u65B9\u6CD5\u5C31\u662F\u5265\u79BB\u5176\u73B0\u5B9E\u611F\uFF0C\u4ED6\u4EEC\u505A\u5F97\u5F88\u51FA\u8272\u3002And maybe you&#39;re right, maybe I am safe...\u4E5F\u8BB8\u4F60\u662F\u5BF9\u7684\uFF0C\u4E5F\u8BB8\u6211\u5B89\u5168\u4E86\u2026but as long as I&#39;m alive...\u4F46\u53EA\u8981\u6211\u6D3B\u7740\u2026You&#39;ll never be safe.\u4F60\u5C31\u6C38\u8FDC\u4E0D\u4F1A\u5B89\u5168\u3002

R:

What do you mean?\u4EC0\u4E48\u610F\u601D\uFF1F

S:

I could turn on you at any moment, and even if I don&#39;t, I could lead them to the Machine.\u6211\u968F\u65F6\u53EF\u80FD\u80CC\u53DB\u4F60\uFF0C\u5373\u4F7F\u6211\u4E0D\u4F1A\uFF0C\u6211\u4E5F\u80FD\u5E26\u4ED6\u4EEC\u627E\u5230\u673A\u5668\u3002

R:

That&#39;ll never happen.\u8FD9\u4E0D\u53EF\u80FD\u3002

S:

I don&#39;t know if I&#39;m calling the shots anymore...\u6211\u4E0D\u77E5\u9053\u80FD\u5426\u8BF4\u4E86\u7B97\u2026And neither do you.\u4F60\u4E5F\u4E00\u6837\u30027,000 simulations. I killed a lot of people, but the one person that I couldn&#39;t kill...\u4E03\u5343\u6B21\u6A21\u62DF\u3002\u6211\u6740\u4E86\u5F88\u591A\u4EBA\uFF0C\u4F46\u53EA\u6709\u4E00\u4E2A\u4EBA\u8BA9\u6211\u4E0B\u4E0D\u4E86\u624B\u2026Was you.\u4F60\u3002So I killed myself.\u4E8E\u662F\u6211\u5C31\u81EA\u6740\u3002Over and over again.\u4E00\u6B21\u53C8\u4E00\u6B21\u3002And I&#39;d rather do that here and now than to risk your life.\u6211\u73B0\u5728\u5B81\u613F\u8FD9\u4E48\u505A\u4E5F\u4E0D\u60F3\u5371\u5BB3\u4F60\u7684\u751F\u547D\u3002

R:

Okay, Shaw.\u597D\u5427\uFF0C\u8096\u3002

S:

What the hell are you doing?\u4F60\u8981\u5E72\u4EC0\u4E48\uFF1F

R:

We&#39;ll play it your way here.\u6211\u4EEC\u6309\u4F60\u7684\u6CD5\u5B50\u73A9\u3002You can&#39;t live with me...\u4F60\u4E0D\u80FD\u548C\u6211\u4E00\u8D77\u2026I can&#39;t live without you.\u6CA1\u6709\u4F60\uFF0C\u6211\u6D3B\u4E0D\u4E0B\u53BB\u3002So if you die, I die too.\u4F60\u6B7B\uFF0C\u6211\u4E5F\u6B7B\u3002

S:

Put that down.\u628A\u67AA\u653E\u4E0B\u3002

R:

I really don&#39;t know what&#39;s gonna happen when we pull the trigger.\u4E0D\u77E5\u9053\u6211\u4EEC\u6263\u4E0B\u6273\u673A\u540E\u4F1A\u53D1\u751F\u4EC0\u4E48\u3002Never been much of a believer, but hey...\u6211\u4ECE\u6765\u4E0D\u4FE1\u6559\uFF0C\u4E0D\u8FC7\u2026You never know.\u8C01\u77E5\u9053\u5462\u3002Guess we&#39;re about to find out, aren&#39;t we?\u8C1C\u5E95\u9A6C\u4E0A\u5C31\u8981\u63ED\u6653\u4E86\uFF0C\u5BF9\u5417\uFF1F

S:

Damn it, Root.\u8BE5\u6B7B\uFF0C\u6839\u3002

4. S05E10
4.1. 00:08:36--00:08:39
R:

Grab some guns, Sameen.\u62FF\u4E0A\u67AA\uFF0C\u8428\u59C6\u6069\u3002You&#39;ll feel better once we shoot some people.\u7B49\u4F1A\u513F\u80FD\u7A81\u7A81\u4EBA\u4E86\uFF0C\u4F60\u5C31\u4F1A\u5F00\u5FC3\u70B9\u4E86\u3002

4.2. 00:09:21--00:09:29
S:

Party crashers.\u7838\u573A\u5B50\u7684\u6765\u4E86\u3002You want to stick around, give &#39;em a proper welcome?\u8981\u7559\u4E0B\u597D\u597D\u6B22\u8FCE\u4ED6\u4EEC\u5417\uFF1F

R:

Thought you&#39;d never ask.\u5C31\u6015\u4F60\u4E0D\u95EE\u3002

4.3. 00:13:37--00:13:42
S:

This lapdog has the same card.\u8FD9\u8D70\u72D7\u4E5F\u6709\u540C\u6837\u7684\u540D\u7247\u3002Temporary Resolutions.\u4E34\u65F6\u51B3\u8BAE\u3002

4.4. 00:15:04--00:16:16
R:

That was Harry.\u662F\u54C8\u7F57\u3002

S:

I gathered.\u731C\u5230\u4E86\u3002He think I&#39;m the reason his cover&#39;s blown?\u4ED6\u8BA4\u4E3A\u662F\u6211\u5BB3\u4ED6\u66B4\u9732\u7684\u5417\uFF1F

R:

He knows you&#39;re not.\u4ED6\u77E5\u9053\u4E0D\u662F\u4F60\u3002He slipped up. He went back to the place he and Grace had their first date.\u662F\u4ED6\u758F\u5FFD\u4E86\u3002\u4ED6\u56DE\u4E86\u81EA\u5DF1\u548C\u683C\u857E\u65AF\u521D\u6B21\u7EA6\u4F1A\u7684\u5730\u70B9\u3002

S:

Harold has a weakness.\u54C8\u7F57\u5FB7\u6709\u4ED6\u7684\u8F6F\u808B\u3002

R:

We all do.\u6211\u4EEC\u90FD\u6709\u3002

S:

It&#39;d be nice if we could go back.\u8981\u80FD\u56DE\u53BB\u80AF\u5B9A\u4E0D\u9519\u3002I guess none of us...\u770B\u6765\u6211\u4EEC\u90FD\u6CA1\u6709\u2026has the life we want.\u8FC7\u4E0A\u81EA\u5DF1\u60F3\u8981\u7684\u751F\u6D3B\u3002

R:

Actually, Sameen?\u5176\u5B9E\uFF0C\u8428\u59C6\u6069\uFF1FI&#39;ve been hiding since I was 12.\u6211\u4ECE12\u5C81\u5F00\u59CB\u4E1C\u8EB2\u897F\u85CF\u3002This might be the first time I feel like I belong.\u8FD9\u662F\u6211\u7B2C\u4E00\u6B21\u6709\u4E86\u5F52\u5C5E\u611F\u3002

S:

These guys don&#39;t quit.\u8FD9\u4E9B\u5BB6\u4F19\u6CA1\u5B8C\u6CA1\u4E86\u554A\u3002

R:

Guess we might get a workout after all.\u770B\u6765\u6211\u4EEC\u5F97\u7EC3\u7EC3\u4E86\u3002

4.5. 00:20:50--00:20:57
J:

Root, RTCC got a hit on the vehicle transporting Finch.\u6839\uFF0C\u5B9E\u65F6\u72AF\u7F6A\u4E2D\u5FC3\u627E\u5230\u8F6C\u79FB\u82AC\u5947\u7684\u8F66\u4E86\u3002

R:

The Machine beat you to the punch.\u673A\u5668\u6BD4\u4F60\u5FEB\u3002Shaw and I are already on the way.\u8096\u548C\u6211\u5DF2\u7ECF\u5728\u8DEF\u4E0A\u4E86\u3002

4.6. 00:22:40--00:25:28
R:

So I was thinking about your thing.\u6211\u5728\u60F3\u4F60\u90A3\u4E8B\u513F\u3002

S:

My thing?\u6211\u90A3\u4E8B\u513F\uFF1F

R:

Your whole &quot;I&#39;m crazy and the world&#39;s just a simulation&quot; thing? It&#39;s a little like when Harry had me locked up and I was questioning everything.\u201C\u6211\u75AF\u4E86\uFF0C\u6574\u4E2A\u4E16\u754C\u90FD\u662F\u6A21\u62DF\u51FA\u6765\u7684\u201D\u7684\u4E8B\u513F\uFF1F\u633A\u50CF\u5F53\u521D\u54C8\u7F57\u9001\u6211\u5165\u9662\uFF0C\u6211\u8D28\u7591\u4E00\u5207\u7684\u6001\u5EA6\u3002

S:

Can we talk about this after the whole lethal shootout thing?\u54B1\u80FD\u7B49\u8FD9\u573A\u8981\u547D\u7684\u67AA\u6218\u8FC7\u4E86\u518D\u8C08\u5417\uFF1F

R:

No time like the present, Sameen.\u62E9\u65E5\u4E0D\u5982\u649E\u65E5\uFF0C\u8428\u59C6\u6069\u3002Besides, if this is just another simulation, who cares if we die?\u518D\u8BF4\u4E86\uFF0C\u5982\u679C\u8FD9\u53EA\u662F\u6A21\u62DF\uFF0C\u7BA1\u6211\u4EEC\u662F\u6B7B\u662F\u6D3B\u5462\uFF1FAnyway, Schrodinger said at its base level, the universe isn&#39;t made up of physical matter, but just shapes. I thought that might make you feel better.\u603B\u4E4B\uFF0C\u859B\u5B9A\u8C14\u66FE\u8BF4\u8FC7\uFF0C\u672C\u8D28\u4E0A\u5B87\u5B99\u7684\u7EC4\u6210\u6210\u4EFD\u5E76\u975E\u7269\u8D28\uFF0C\u800C\u662F\u201C\u5F62\u201D\u3002\u8FD9\u5E94\u8BE5\u80FD\u8BA9\u4F60\u611F\u89C9\u597D\u70B9\u5427\u3002

S:

Seriously?\u771F\u7684\u5417\uFF1F

R:

A shape, you know?\u4E00\u4E2A\u201C\u5F62\u201D\uFF0C\u61C2\u5417\uFF1FNothing firm.\u5E76\u65E0\u5B9E\u4F53\u3002What it means is the real world is essentially a simulation anyway.\u4E5F\u5C31\u662F\u8BF4\u771F\u5B9E\u4E16\u754C\u4E0D\u8FC7\u53EA\u662F\u4E00\u79CD\u6A21\u62DF\u3002

S:

You are the last person I should have confided in about this.\u6211\u5F53\u521D\u5C31\u4E0D\u8BE5\u8DDF\u4F60\u8BF4\u8FD9\u4E8B\u513F\u3002

R:

I liked that idea. That even if we&#39;re not real, we represent a dynamic.\u6211\u559C\u6B22\u8FD9\u8BBA\u70B9\u3002\u5373\u4FBF\u6211\u4EEC\u5E76\u4E0D\u771F\u5B9E\uFF0C\u4E5F\u4EE3\u8868\u4E00\u79CD\u53D8\u6570\u3002A tiny finger tracing a line in the infinite.\u597D\u50CF\u5C0F\u624B\u6307\u51ED\u7A7A\u5212\u51FA\u7684\u4E00\u6761\u7EBF\u3002A shape.\u4E00\u4E2A\u201C\u5F62\u201D\u3002And then we&#39;re gone.\u7136\u540E\u5C31\u6D88\u5931\u4E86\u3002

S:

That&#39;s supposed to make me feel better?\u8FD9\u5C31\u80FD\u8BA9\u6211\u611F\u89C9\u597D\u70B9\u554A\uFF1FI&#39;m a shape?\u6211\u662F\u4E2A\u201C\u5F62\u201D\uFF1F

R:

Yeah.\u5BF9\u554A\u3002And, darlin&#39;, you got a great shape.\u800C\u4E14\uFF0C\u7231\u4EBA\uFF0C\u4F60\u5F88\u6709\u201C\u5F62\u201D\u3002

S:

I swear to God, you flirt at the most awkward times.\u6211\u5BF9\u5929\u53D1\u8A93\uFF0C\u4F60\u8C03\u60C5\u6C38\u8FDC\u4E0D\u6311\u4E2A\u597D\u65F6\u5019\u3002

R:

I know.\u6211\u77E5\u9053\u3002Listen, all I saying is that if we&#39;re just information, just noise in the system... we might as well be a symphony.\u6211\u7684\u610F\u601D\u662F\uFF0C\u65E2\u7136\u6211\u4EEC\u90FD\u53EA\u662F\u4FE1\u606F\uFF0C\u53EA\u662F\u7CFB\u7EDF\u566A\u97F3\uFF0C\u4E0D\u5982\u5C31\u7434\u745F\u548C\u9E23\u5427\u2026

R:

Hey, Harry.\u4F60\u597D\u554A\uFF0C\u54C8\u7F57\u3002Need a lift?\u8981\u642D\u8F66\u5417\uFF1FGet back!\u9000\u540E\uFF01

S:

Get in the car. I&#39;ll draw the fire!\u4E0A\u8F66\u3002\u6211\u5438\u5F15\u706B\u529B\uFF01

R:

I&#39;m not leaving you again!\u6211\u4E0D\u4F1A\u518D\u6B21\u4E22\u4E0B\u4F60\uFF01

S:

Get him out of here now, or I&#39;ll shoot you myself!\u7ACB\u523B\u5E26\u4ED6\u8D70\uFF0C\u5426\u5219\u6211\u7ED9\u4F60\u4E00\u67AA\uFF01Go! Go!\u8D70\uFF01\u8D70\uFF01

5. S05E13
5.1. 00:04:33--00:04:46
S:

If this digital Armageddon turns out to be a full-blown Armageddon...\u65E2\u7136\u8FD9\u4E2A\u7F51\u7EDC\u7248\u7684\u672B\u65E5\u5BA1\u5224\u6218\uFF0C\u6F14\u53D8\u6210\u4E86\u5168\u9886\u57DF\u672B\u65E5\u5BA1\u5224\u6218\u2026I figured I should say good-bye.\u6211\u60F3\u6211\u5E94\u8BE5\u544A\u4E2A\u522B\u3002Sorry, Root.\u62B1\u6B49\uFF0C\u6839\u3002This... just isn&#39;t my thing.\u8FD9\u4E2A\u2026\u6211\u4E0D\u64C5\u957F\u3002

5.2. 00:28:55--00:29:13
M(R):

You always thought there was something wrong with you because you don&#39;t feel things the way other people do.\u4F60\u4E00\u76F4\u8BA4\u4E3A\u81EA\u5DF1\u6709\u95EE\u9898\uFF0C\u56E0\u4E3A\u4F60\u65E0\u6CD5\u611F\u53D7\u666E\u901A\u4EBA\u7684\u611F\u53D7\u3002But she always felt that was what made you beautiful.\u4F46\u5979\u4E00\u76F4\u89C9\u5F97\uFF0C\u8FD9\u6837\u7684\u4F60\u5F88\u7F8E\u3002She wanted you to know that if you were a shape, you were a straight line.\u5979\u60F3\u4F60\u77E5\u9053\uFF0C\u5982\u679C\u4F60\u662F\u201C\u5F62\u201D\uFF0C\u4F1A\u662F\u4E00\u6761\u76F4\u7EBF\u3002An arrow.\u4E00\u652F\u7BAD\u3002

5.3. 00:30:04--00:30:05
S:

Good-bye.\u522B\u4E86\u3002

`,excerpt:"",url:"/posts\\Vedio\\poi-lines05"},{title:"Vue3 \u7EC4\u4EF6\u901A\u4FE1",content:`1. \u4E0A\u4E0B\u7EA7\u7EC4\u4EF6\u901A\u4FE1
1.1. Props (\u4E0A -&gt; \u4E0B)
\u4E0A\u7EA7\u7EC4\u4EF6\u4F20\u53C2
&lt;!-- index.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
import Sub from &#39;./Sub.vue&#39;
const count: Ref&lt;number&gt; = ref(0)
&lt;/script&gt;

&lt;template&gt;
    &lt;div&gt;
        &lt;Sub :count=&quot;count&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u63A5\u6536
&lt;!-- Sub.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
defineProps&lt;{ count: number }&gt;()
&lt;/script&gt;
        
&lt;template&gt;
    &lt;div&gt;
        {{count}}
    &lt;/div&gt;
&lt;/template&gt;

1.2. emit (\u4E0B -&gt; \u4E0A)
\u4E0A\u7EA7\u7EC4\u4EF6\u63A5\u6536
&lt;!-- Sub.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import Sub from &#39;./Sub.vue&#39;;

const subClick = (msg: string): void =&gt; {
    console.log(&#39;recieve: &#39;, msg);
}
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div&gt;
        &lt;Sub :count=&quot;count&quot; @onClick=&quot;subClick&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u4F20\u53C2
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
const msg: Ref&lt;string&gt; = ref(&#39;msg from Sub&#39;)
const emits = defineEmits([&#39;onClick&#39;])
const onClick = (): void =&gt; {
    console.log(&#39;send:&#39;, msg.value);
    emits(&#39;onClick&#39;, msg.value)
}
&lt;/script&gt;
        
&lt;template&gt;
    &lt;div&gt;
        &lt;button @click=&quot;onClick&quot;&gt;Send&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

2. \u591A\u7EA7\u7EC4\u4EF6\u901A\u4FE1
2.1. provide / inject (\u4E0A -&gt; \u4E0B)
\u4E0A\u7EA7\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref, provide, readonly } from &quot;vue&quot;
const msg: Ref&lt;string&gt; = ref(&#39;hello&#39;) 
provide(&#39;msg&#39;, readonly(msg)) // readonly \u9632\u6B62\u53C2\u6570\u88AB\u4E0B\u7EA7\u7EC4\u4EF6\u4FEE\u6539
&lt;/script&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u6CE8\u5165
&lt;script setup lang=&quot;ts&quot;&gt;
import { inject } from &quot;vue&quot;
const msg = inject(&#39;msg&#39;)
&lt;/script&gt;

2.2. provide / inject (\u4E0B -&gt; \u4E0A)
\u4E0A\u7EA7\u7EC4\u4EF6\u60F3\u8981\u63A5\u6536\u8DE8\u5C42\u7EA7\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\uFF0C\u53EA\u8981\u901A\u8FC7 provide \u4F20\u9012\u65B9\u6CD5\u5230\u4E0B\u7EA7\u7EC4\u4EF6\uFF0C\u7531\u4E0B\u7EA7\u7EC4\u4EF6\u8C03\u7528\uFF0C\u4F20\u56DE\u53C2\u6570\u3002
\u4E0A\u7EA7\u7EC4\u4EF6\u5B9A\u4E49\u65B9\u6CD5\uFF1A
&lt;script setup lang=&quot;ts&quot;&gt;
import { provide } from &quot;vue&quot;
provide(&#39;func&#39;, (msg: string) =&gt; {
    console.log(&#39;msg from sub component:&#39;, msg)
})
&lt;/script&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u901A\u8FC7\u56DE\u4F20\u9012\u53C2\u6570\uFF1A
&lt;script setup lang=&quot;ts&quot;&gt;
import { inject } from &quot;vue&quot;
const func = inject(&#39;func&#39;)
func(&#39;hello&#39;) // \u5C06\u53C2\u6570\u4F20\u9012\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u6267\u884C
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Vue\\comm"},{title:"Vue \u81EA\u5B9A\u4E49\u5168\u5C40 Loading \u63D2\u4EF6",content:`1. \u5B9A\u4E49\u89C6\u56FE\u6A21\u677F
\u8FD9\u662F\u4E00\u4E2A\u5E73\u5E73\u65E0\u5947\u7684 loading \u7EC4\u4EF6\u3002
&lt;!-- Loading.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    {{ msg.value }}
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
const props = defineProps({
  msg: String
})
&lt;/script&gt;

2. \u6302\u8F7D\u548C\u6E32\u67D3
show(): \u5C06\u7EC4\u4EF6\u5185\u5BB9\u8FFD\u52A0\u5230 body \u5E95\u90E8\uFF1Bhide(): \u79FB\u9664\u7EC4\u4EF6\uFF1Binstall(): Vue \u81EA\u52A8\u8C03\u7528\uFF0C\u5C06 loading \u7EC4\u4EF6\u4F5C\u4E3A\u5C5E\u6027\u6302\u8F7D\u5230\u5168\u5C40\u3002
// loading.ts
import { createApp, reactive, toRefs } from &#39;vue&#39;
import Loading from &#39;./Loading.vue&#39;

const config = reactive({
    msg: &#39;Loading...&#39; // loading text
})

const $loading = createApp(
                    Loading,
                    { ...toRefs(config) } // keep ref
                ).mount(document.createElement(&#39;div&#39;))
const loading = {
    show(msg: string = config.msg) { // display loading
        config.msg = msg
        document.body.appendChild($loading.$el)
    },
    hide() { // hidden loading
        document.body.removeChild($loading.$el)
    },
    install(app) { // add global prototype(loading)
        app.config.globalProperties[&#39;loading&#39;] = loading;
    }
}
export default loading

3. Vue \u5168\u5C40\u8C03\u7528
&lt;!-- index.vue --&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { onBeforeMount, getCurrentInstance, ComponentInternalInstance } from &#39;vue&#39;;
// get current Vue component instance
const { appContext } = getCurrentInstance() as ComponentInternalInstance

onBeforeMount(async () =&gt; {
    appContext.config.globalProperties.loading.show() // show loading
    setTimeout(() =&gt; { // imitate a data loading
        appContext.config.globalProperties.loading.hide() // hideen loading
    }, 1000);
})
&lt;/script&gt;

4. JS \u8C03\u7528
import loading from &#39;./loading.ts&#39;
loading.show()

`,excerpt:"",url:"/posts\\Vue\\loading"},{title:"Vue \u81EA\u5B9A\u4E49\u5168\u5C40\u6D88\u606F\u63D2\u4EF6",content:`1. \u5B9A\u4E49\u6D88\u606F\u6A21\u677F
&lt;!-- Message.vue --&gt;
&lt;template&gt;
    &lt;div class=&quot;message-wrapper&quot;&gt;
        &lt;i :class=&quot;\`fa fa-\${style[type.value]?.icon}\`&quot;&gt;&lt;/i&gt;
        &lt;span&gt;{{ msg.value }}&lt;/span&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
const props = defineProps({
    type: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
})
const style = {
    success: {
        icon: &#39;check&#39;,
    },
    error: {
        icon: &#39;close&#39;
    }
}
&lt;/script&gt;

2. \u6302\u8F7D\u548C\u6E32\u67D3
// message.ts
import { createApp, reactive, toRefs } from &#39;vue&#39;
import Message from &#39;./Message.vue&#39;

// config options
const config = reactive({
    type: &#39;success&#39;,
    msg: &#39;&#39;,
})

// create a component instance
const $message = createApp(Message, { ...toRefs(config) }).mount(document.createElement(&#39;div&#39;))
/**
 * render
 * @param type message type
 * @param msg message content
 * @param delay duration
 */
const renderMsg = (type: string = config.type, msg: string, delay: number): void =&gt; {
    config.type = type
    config.msg = msg
    // show
    document.body.appendChild($message.$el)
    setTimeout(() =&gt; {
        // hidden
        document.body.removeChild($message.$el)
    }, delay)
}

const message = {
    success(msg: string, delay: number = 1000) {
        renderMsg(&#39;success&#39;, msg, delay)
    },
    install(app) {
        // add global prop
        app.config.globalProperties[&#39;message&#39;] = message;
    }
}

export default message

3. Vue \u5168\u5C40\u8C03\u7528
&lt;script lang=&quot;ts&quot; setup&gt;
import { getCurrentInstance, ComponentInternalInstance } from &#39;vue&#39;;
// get current Vue component instance
const { appContext } = getCurrentInstance() as ComponentInternalInstance
appContext.config.globalProperties.message.success(&#39;Success!&#39;)
&lt;/script&gt;

4. JS \u8C03\u7528
import message from &#39;./message.ts&#39;
message.success(&#39;Success!&#39;)

`,excerpt:"",url:"/posts\\Vue\\msg"},{title:"reactive \u58F0\u660E\u5F0F\u5BF9\u8C61\u91CD\u65B0\u8D4B\u503C\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u89E3\u51B3\u529E\u6CD5",content:`1. \u4F7F\u7528 ref \u58F0\u660E\u53D8\u91CF
&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
let obj = ref({ // \u58F0\u660E\u53D8\u91CF
    name: &#39;Tom&#39;
})
// \u6A21\u62DF\u4FEE\u6539\u64CD\u4F5C
setTimeout(() =&gt; {
    obj.value = { // \u91CD\u65B0\u8D4B\u503C
        name: &#39;Coco&#39;
    }
}, 1000);
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        {{ obj.name }}
    &lt;/div&gt;
&lt;/template&gt;

2. \u5C06\u6570\u636E\u4FDD\u5B58\u5230\u5BF9\u8C61\u5C5E\u6027\u4E2D
&lt;script setup lang=&quot;ts&quot;&gt;
import { reactive, toRefs } from &#39;vue&#39;
let obj = reactive({
    data: {
        name: &#39;Tom&#39;
    }
})
const { data } = toRefs(obj) // \u89E3\u6784\u5230\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528
// \u6A21\u62DF\u4FEE\u6539\u64CD\u4F5C
setTimeout(() =&gt; {
    obj.data = {
        name: &#39;Coco&#39;
    }
}, 1000);
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        name: {{ data.name }}
    &lt;/div&gt;
&lt;/template&gt;

`,excerpt:"",url:"/posts\\Vue\\reactive-modify"},{title:"Vue \u7236\u7EC4\u4EF6\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\u6216\u65B9\u6CD5",content:`1. Vue2
\u7236\u7EC4\u4EF6
&lt;!-- index.vue --&gt;
&lt;template&gt;
    &lt;div&gt;
        &lt;!-- 1. \u5B9A\u4E49ref\uFF0C\u8BE5\u7EC4\u4EF6\u5C06\u4F1A\u88AB\u7236\u7EC4\u4EF6\u7684 $refs \u6536\u96C6 --&gt;
        &lt;Child ref=&quot;childRef&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import Child from &#39;./Child.vue&#39;
export default {
    mounted() {
        // 3. \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\uFF0C\u8BBF\u95EE\u7EC4\u4EF6 ref
        //    - \u5982\u679C\u8BE5\u7EC4\u4EF6\u662F Vue \u7EC4\u4EF6\uFF0C\u8FD4\u56DE\u7EC4\u4EF6\u5B9E\u4F8B
        //    - \u5982\u679C\u8BE5\u7EC4\u4EF6\u662F\u666E\u901A\u6807\u7B7E\uFF0C\u539F\u6837\u8FD4\u56DE
        const childRef = this.$refs.childRef
        childRef.msg = &#39;world&#39;
    }
}
&lt;/script&gt;

\u5B50\u7EC4\u4EF6
&lt;!-- Child.vue --&gt;
&lt;script&gt;
export defualt {
    data() {
        return {
            msg: &#39;hello&#39;
        }
    }
}
&lt;/script&gt;

2. Vue3
\u7236\u7EC4\u4EF6
&lt;!-- index.vue --&gt;
&lt;template&gt;
    &lt;div&gt;
        &lt;!-- 1. \u5B9A\u4E49ref --&gt;
        &lt;Child ref=&quot;childRef&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import { onMounted, ref } from &#39;vue&#39;
import Child from &#39;./Child.vue&#39;
// 2. \u521D\u59CB\u5316
let childRef = ref(null)
// 3. \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u624D\u80FD\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u66B4\u9732\u7684\u5C5E\u6027
onMounted(() =&gt; {
    childRef.value.msg = &#39;world&#39;
})
&lt;/script&gt;

\u5B50\u7EC4\u4EF6
&lt;!-- Child.vue --&gt;
&lt;script&gt;
import { Ref, ref } from &#39;vue&#39;
const msg: Ref&lt;string&gt; = &#39;hello&#39;

// \u901A\u8FC7 defineExpose \u66B4\u9732\u7684\u5C5E\u6027\uFF0C\u5916\u90E8\u624D\u80FD\u8BBF\u95EE
defineExpose({
    msg
})
&lt;/script&gt;

`,excerpt:"",url:"/posts\\Vue\\ref-ele"},{title:"Vue3 \u5B50\u7EC4\u4EF6\u66F4\u65B0\u7236\u7EC4\u4EF6\u7684\u53C2\u6570",content:`\u7236\u7EC4\u4EF6\u4F20\u53C2\u3002
&lt;!-- index.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
import Child from &#39;./Child.vue&#39;;
const count: Ref&lt;number&gt; = ref(0)
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        {{ count }}
        &lt;!-- \u7ED1\u5B9A\u53C2\u6570 count --&gt;
        &lt;Child v-model:count=&quot;count&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u5B50\u7EC4\u4EF6\u63A5\u6536\uFF0C\u5E76\u5728\u4E8B\u4EF6\u4E2D\u66F4\u65B0\u53C2\u6570\u3002
&lt;!-- Child.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
// \u5B9A\u4E49\u63A5\u6536\u53C2\u6570
defineProps&lt;{ count: number }&gt;()
// \u6CE8\u518C\u4E8B\u4EF6
const emits = defineEmits([&#39;update:count&#39;])
&lt;/script&gt;
        
&lt;template&gt;
    &lt;div class=&quot;child&quot;&gt;
        &lt;!-- \u66F4\u65B0\u53C2\u6570 update:propName --&gt;
        &lt;input type=&quot;text&quot; @input=&quot;emits(&#39;update:count&#39;, $event.target.value)&quot;&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EC4\u4EF6\u4E0A\u7684 v-model \u4F7F\u7528 modelValue \u4F5C\u4E3A prop\uFF0C update:modelValue \u4F5C\u4E3A\u4E8B\u4EF6\u3002
`,excerpt:"",url:"/posts\\Vue\\v3-model"}];const Ci={class:"input-group"},$i=r("i",{class:"fa fa-search"},null,-1),Hi={class:"result"},qi=["href"],Li=["innerHTML"],Mi=["innerHTML"],Pi={key:0,class:"empty"},Ni=r("i",{class:"fa fa-meh-o"},null,-1),Ei=j(" No Data "),Wi=[Ni,Ei],ji=y({__name:"Search",setup(n){const{theme:e}=R(),t=L("");let o=B([]);const a=v(()=>!!(o.length||t.value));an(()=>{s(t.value)});function s(c){o.length=0,c.trim()!==""&&Ai.forEach(m=>{const g=JSON.parse(JSON.stringify(m)),S=new RegExp(c,"ig"),A=g.title.match(S),b=g.content.match(S);A&&(g.title=l(c,g.title)),b&&(g.content=l(c,g.content)),(A||b)&&o.push(g)})}const l=(c,m)=>{const g=new RegExp(c,"ig");return m.replace(g,`<span class="search-highlight">${c}</span>`)},h=()=>{t.value=""};return(c,m)=>i(e).search?(u(),d("div",{key:0,class:M(["search-wrapper",i(a)?"open":""])},[r("div",Ci,[$i,hn(r("input",{type:"text",placeholder:"Search","onUpdate:modelValue":m[0]||(m[0]=g=>t.value=g)},null,512),[[ut,t.value]]),t.value?(u(),d("i",{key:0,class:"fa fa-trash",onClick:h})):f("",!0)]),r("ul",Hi,[(u(!0),d(T,null,q(i(o),g=>(u(),d("li",{key:g.title},[r("a",{href:g.url,onClick:h},[r("p",{innerHTML:g.title,class:"title"},null,8,Li),r("p",{innerHTML:g.content,class:"content"},null,8,Mi)],8,qi)]))),128)),!i(o).length&&t.value!==""?(u(),d("li",Pi,Wi)):f("",!0)])],2)):f("",!0)}}),Bi=y({__name:"PostList",props:{posts:Array},setup(n){const e=L("");return(t,o)=>(u(),d(T,null,[w(ji,{filterKey:e.value,"onUpdate:filterKey":o[0]||(o[0]=a=>e.value=a)},null,8,["filterKey"]),r("div",null,[(u(!0),d(T,null,q(n.posts,(a,s)=>(u(),$(Ti,{key:s,article:a},null,8,["article"]))),128))])],64))}});const Di={class:"pagination"},Fi=["href"],Yi=["href"],Oi=["href"],Gi=y({__name:"Pagination",props:{current:Number,pageNum:Number},setup(n){return(e,t)=>(u(),d("div",Di,[n.current>1?(u(),d("a",{key:0,class:"link",href:i(H)(n.current===2?"/index.html":`/page_${n.current-1}.html`)},"Prev",8,Fi)):f("",!0),(u(!0),d(T,null,q(n.pageNum,o=>(u(),d("a",{class:M(["link",{active:n.current===o}]),key:o,href:i(H)(o===1?"/index.html":`/page_${o}.html`)},p(o),11,Yi))),128)),n.current<n.pageNum?(u(),d("a",{key:1,class:"link",href:i(H)(`/page_${n.current+1}.html`)},"Next",8,Oi)):f("",!0)]))}});var Ji=_(Gi,[["__scopeId","data-v-653fd1d2"]]);const Vi=y({__name:"index",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(n){const e=n;let t=B([]);return t=v(()=>{var a;return(((a=U(e).posts)==null?void 0:a.value)||[]).map(s=>{const l=JSON.parse(JSON.stringify(s)),h=l.frontMatter.date;return l.frontMatter.dateArr=h.split("-"),l})}),P(()=>{Gs()}),(o,a)=>(u(),d(T,null,[w(Bi,{posts:i(t)},null,8,["posts"]),w(Ji,{current:n.pageCurrent,pageNum:n.pagesNum},null,8,["current","pageNum"])],64))}});const zi=n=>(E("data-v-072447f6"),n=n(),W(),n),Ui={class:"loading"},Ki={class:"loading-svg hover",width:"100",height:"100",viewBox:"0 0 40 60"},Xi=zi(()=>r("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1)),Qi={class:"text",x:"0",y:"45",fill:"#fff"},Zi=y({__name:"Loading",props:{msg:{type:String,required:!0}},setup(n){return(e,t)=>(u(),d("div",Ui,[(u(),d("svg",Ki,[Xi,r("text",Qi,p(n.msg.value),1)]))]))}});var nr=_(Zi,[["__scopeId","data-v-072447f6"]]);const ln=B({msg:"Loading..."});let un;const fe={show(n=ln.msg){ln.msg=n,un=ne(nr,{...U(ln)}).mount(document.createElement("div")).$el,document.body.appendChild(un)},hide(){document.body.removeChild(un)},install(n){n.config.globalProperties.loading=fe}};var on={...xa,Layout:mi,async enhanceApp({app:n,router:e,siteData:t}){n.component("Page",Vi),n.use(fe)}};const cn=new Set,ye=()=>document.createElement("link"),er=n=>{const e=ye();e.rel="prefetch",e.href=n,document.head.appendChild(e)},tr=n=>{const e=new XMLHttpRequest;e.open("GET",n,e.withCredentials=!0),e.send()};let Z;const or=J&&(Z=ye())&&Z.relList&&Z.relList.supports&&Z.relList.supports("prefetch")?er:tr;function ar(){if(!J||!window.IntersectionObserver)return;let n;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let t=null;const o=()=>{t&&t.disconnect(),t=new IntersectionObserver(s=>{s.forEach(l=>{if(l.isIntersecting){const h=l.target;t.unobserve(h);const{pathname:c}=h;if(!cn.has(c)){cn.add(c);const m=Xn(c);or(m)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(s=>{const{target:l,hostname:h,pathname:c}=s,m=c.match(/\.\w+$/);m&&m[0]!==".html"||l!=="_blank"&&h===location.hostname&&(c!==location.pathname?t.observe(s):cn.add(c))})})};P(o);const a=Y();K(()=>a.path,o),X(()=>{t&&t.disconnect()})}const sr=y({setup(n,{slots:e}){const t=L(!1);return P(()=>{t.value=!0}),()=>t.value&&e.default?e.default():null}}),ir=on.NotFound||(()=>"404 Not Found"),rr={name:"VitePressApp",setup(){const{site:n}=R();return P(()=>{K(()=>n.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),ar(),()=>G(on.Layout)}};function lr(){const n=cr(),e=ur();e.provide(je,n);const t=Be(n.route);return e.provide(De,t),J&&mt(n.route,t.site),e.component("Content",Fe),e.component("ClientOnly",sr),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return t.frontmatter.value}}),on.enhanceApp&&on.enhanceApp({app:e,router:n,siteData:Ye}),{app:e,router:n}}function ur(){return dt(rr)}function cr(){let n=J,e;return We(t=>{let o=Xn(t);return n&&(e=o),(n||e===o)&&(o=o.replace(/\.js$/,".lean.js")),J?(n=!1,On(()=>import(o),[])):require(o)},ir)}if(J){const{app:n,router:e}=lr();e.go().then(()=>{n.mount("#app")})}export{jn as N,lr as createApp};
