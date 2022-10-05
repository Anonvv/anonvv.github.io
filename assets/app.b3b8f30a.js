import{_ as Vt}from"./preload-helper.1c052cf7.js";import{i as tt,c as xe,a as $e,b as Ut,d as ht,e as we,t as kt,f as ke,g as Ce,h as Se,j as Gt,k as qe,l as Le,m as Te,n as zt,o as Ee,w as st,p as _,q as c,r as p,u as a,s as f,v as j,x as h,y as v,z as i,A as X,B as E,C as Jt,D as R,E as D,F as A,G as Y,H as N,I as q,J as M,K as b,L as T,M as I,N as Wt,O as Q,P as G,Q as et,R as Pe,S as H,T as Me,U as Ae,V as F,W as dt,X as Xt,Y as Ne}from"./framework.9679036a.js";import{u as C,w as P,a as V,E as Ie,i as z,p as Yt,c as je,R as Be,b as Re,d as De,C as Fe,s as He}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.fa459758.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const Oe="http://www.w3.org/2000/svg",O=typeof document!="undefined"?document:null,Ct=O&&O.createElement("template"),Ve={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const s=e?O.createElementNS(Oe,t):O.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:t=>O.createTextNode(t),createComment:t=>O.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>O.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,o,s,r){const l=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ct.innerHTML=o?`<svg>${t}</svg>`:t;const d=Ct.content;if(o){const u=d.firstChild;for(;u.firstChild;)d.appendChild(u.firstChild);d.removeChild(u)}e.insertBefore(d,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ue(t,e,n){const o=t._vtc;o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ge(t,e,n){const o=t.style,s=tt(n);if(n&&!s){for(const r in n)pt(o,r,n[r]);if(e&&!tt(e))for(const r in e)n[r]==null&&pt(o,r,"")}else{const r=o.display;s?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const St=/\s*!important$/;function pt(t,e,n){if(ht(n))n.forEach(o=>pt(t,e,o));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=ze(t,e);St.test(n)?t.setProperty(Gt(o),n.replace(St,""),"important"):t[o]=n}}const qt=["Webkit","Moz","ms"],it={};function ze(t,e){const n=it[e];if(n)return n;let o=qe(e);if(o!=="filter"&&o in t)return it[e]=o;o=Le(o);for(let s=0;s<qt.length;s++){const r=qt[s]+o;if(r in t)return it[e]=r}return e}const Lt="http://www.w3.org/1999/xlink";function Je(t,e,n,o,s){if(o&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lt,e.slice(6,e.length)):t.setAttributeNS(Lt,e,n);else{const r=Te(e);n==null||r&&!zt(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function We(t,e,n,o,s,r,l){if(e==="innerHTML"||e==="textContent"){o&&l(o,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const u=n==null?"":n;(t.value!==u||t.tagName==="OPTION")&&(t.value=u),n==null&&t.removeAttribute(e);return}let d=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=zt(n):n==null&&u==="string"?(n="",d=!0):u==="number"&&(n=0,d=!0)}try{t[e]=n}catch{}d&&t.removeAttribute(e)}const[Qt,Xe]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let gt=0;const Ye=Promise.resolve(),Qe=()=>{gt=0},Ke=()=>gt||(Ye.then(Qe),gt=Qt());function U(t,e,n,o){t.addEventListener(e,n,o)}function Ze(t,e,n,o){t.removeEventListener(e,n,o)}function tn(t,e,n,o,s=null){const r=t._vei||(t._vei={}),l=r[e];if(o&&l)l.value=o;else{const[d,u]=en(e);if(o){const g=r[e]=nn(o,s);U(t,d,g,u)}else l&&(Ze(t,d,l,u),r[e]=void 0)}}const Tt=/(?:Once|Passive|Capture)$/;function en(t){let e;if(Tt.test(t)){e={};let o;for(;o=t.match(Tt);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gt(t.slice(2)),e]}function nn(t,e){const n=o=>{const s=o.timeStamp||Qt();(Xe||s>=n.attached-1)&&Ee(on(o,n.value),e,5,[o])};return n.value=t,n.attached=Ke(),n}function on(t,e){if(ht(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(o=>s=>!s._stopped&&o&&o(s))}else return e}const Et=/^on[a-z]/,sn=(t,e,n,o,s=!1,r,l,d,u)=>{e==="class"?Ue(t,o,s):e==="style"?Ge(t,n,o):Ce(e)?Se(e)||tn(t,e,n,o,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rn(t,e,o,s))?We(t,e,o,r,l,d,u):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),Je(t,e,o,s))};function rn(t,e,n,o){return o?!!(e==="innerHTML"||e==="textContent"||e in t&&Et.test(e)&&Ut(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Et.test(e)&&tt(n)?!1:e in t}const Pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ht(e)?n=>we(e,n):e};function an(t){t.target.composing=!0}function Mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ln={created(t,{modifiers:{lazy:e,trim:n,number:o}},s){t._assign=Pt(s);const r=o||s.props&&s.props.type==="number";U(t,e?"change":"input",l=>{if(l.target.composing)return;let d=t.value;n&&(d=d.trim()),r&&(d=kt(d)),t._assign(d)}),n&&U(t,"change",()=>{t.value=t.value.trim()}),e||(U(t,"compositionstart",an),U(t,"compositionend",Mt),U(t,"change",Mt))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:s}},r){if(t._assign=Pt(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||o&&t.value.trim()===e||(s||t.type==="number")&&kt(t.value)===e))return;const l=e==null?"":e;t.value!==l&&(t.value=l)}},At={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):J(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),J(t,!0),o.enter(t)):o.leave(t,()=>{J(t,!1)}):J(t,e))},beforeUnmount(t,{value:e}){J(t,e)}};function J(t,e){t.style.display=e?t._vod:"none"}const Kt=ke({patchProp:sn},Ve);let W,Nt=!1;function cn(){return W||(W=$e(Kt))}function un(){return W=Nt?W:xe(Kt),Nt=!0,W}const Zt=(...t)=>{const e=cn().createApp(...t),{mount:n}=e;return e.mount=o=>{const s=te(o);if(!s)return;const r=e._component;!Ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const l=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},e},dn=(...t)=>{const e=un().createApp(...t),{mount:n}=e;return e.mount=o=>{const s=te(o);if(s)return n(s,!0,s instanceof SVGElement)},e};function te(t){return tt(t)?document.querySelector(t):t}function pn(t,e){let n=[],o=!0;const s=r=>{if(o){o=!1;return}const l=[],d=Math.min(n.length,r.length);for(let u=0;u<d;u++){let g=n[u];const[m,$,L=""]=r[u];if(g.tagName.toLocaleLowerCase()===m){for(const y in $)g.getAttribute(y)!==$[y]&&g.setAttribute(y,$[y]);for(let y=0;y<g.attributes.length;y++){const w=g.attributes[y].name;w in $||g.removeAttribute(w)}g.innerHTML!==L&&(g.innerHTML=L)}else document.head.removeChild(g),g=It(r[u]),document.head.append(g);l.push(g)}n.slice(d).forEach(u=>document.head.removeChild(u)),r.slice(d).forEach(u=>{const g=It(u);document.head.appendChild(g),l.push(g)}),n=l};st(()=>{const r=t.data,l=e.value,d=r&&r.title,u=r&&r.description,g=r&&r.frontmatter.head;document.title=(d?d+" | ":"")+l.title,document.querySelector("meta[name=description]").setAttribute("content",u||l.description),s([...g?mn(g):[]])})}function It([t,e,n]){const o=document.createElement(t);for(const s in e)o.setAttribute(s,e[s]);return n&&(o.innerHTML=n),o}function gn(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function mn(t){return t.filter(e=>!gn(e))}const hn=/#.*$/,fn=/(index)?\.(md|html)$/,nt=/\/$/,_n=/^[a-z]+:/i;function ft(t){return Array.isArray(t)}function _t(t){return _n.test(t)}function vn(t,e){if(e===void 0)return!1;const n=jt(`/${t.data.relativePath}`),o=jt(e);return n===o}function jt(t){return decodeURI(t).replace(hn,"").replace(fn,"")}function bn(t,e){const n=t.endsWith("/"),o=e.startsWith("/");return n&&o?t.slice(0,-1)+e:!n&&!o?`${t}/${e}`:t+e}function mt(t){return/^\//.test(t)?t:`/${t}`}function ee(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function yn(t){return t===!1||t==="auto"||ft(t)}function xn(t){return t.children!==void 0}function $n(t){return ft(t)?t.length===0:!t}function vt(t,e){if(yn(t))return t;e=mt(e);for(const n in t)if(e.startsWith(mt(n)))return t[n];return"auto"}function ne(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:ee(n.link)}),xn(n)&&(e=[...e,...ne(n.children)]),e),[])}const wn=["href","aria-label"],kn=["src"],Cn=_({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:o}=C();return(s,r)=>(c(),p("a",{class:"nav-bar-title",href:a(o),"aria-label":`${a(e).title}, back to home`},[a(n).logo?(c(),p("img",{key:0,class:"logo",src:a(P)(a(n).logo),alt:"Logo"},null,8,kn)):f("",!0),j(" "+h(a(e).title),1)],8,wn))}});var Sn=x(Cn,[["__scopeId","data-v-7ac13a1e"]]);function qn(){const{site:t,localePath:e,theme:n}=C();return v(()=>{const o=t.value.langs,s=Object.keys(o);if(s.length<2)return null;const l=V().path.replace(e.value,""),d=s.map(g=>({text:o[g].label,link:`${g}${l}`}));return{text:n.value.selectText||"Languages",items:d}})}const Ln=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function Tn(){const{site:t}=C();return v(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const o=En(n);return{text:Pn(o,e.repoLabel),link:o}})}function En(t){return Ie.test(t)?t:`https://github.com/${t}`}function Pn(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const o=Ln.find(([s,r])=>r.test(n[0]));return o&&o[0]?o[0]:"Source"}function oe(t){const e=V(),n=_t(t.value.link);return{props:v(()=>{const s=Bt(`/${e.data.relativePath}`);let r=!1;if(t.value.activeMatch)r=new RegExp(t.value.activeMatch).test(s);else{const l=Bt(t.value.link);r=l==="/"?l===s:s.startsWith(l)}return{class:{active:r,isExternal:n},href:n?t.value.link:P(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function Bt(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Mn={},An={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Nn=i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),In=i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),jn=[Nn,In];function Bn(t,e){return c(),p("svg",An,jn)}var bt=x(Mn,[["render",Bn]]);const Rn={class:"nav-link"},Dn=_({__name:"NavLink",props:{item:null},setup(t){const n=X(t),{props:o,isExternal:s}=oe(n.item);return(r,l)=>(c(),p("div",Rn,[i("a",Jt({class:"item"},a(o)),[j(h(t.item.text)+" ",1),a(s)?(c(),E(bt,{key:0})):f("",!0)],16)]))}});var Rt=x(Dn,[["__scopeId","data-v-49fe041d"]]);const Fn=t=>(R("data-v-07381bdb"),t=t(),D(),t),Hn={class:"nav-dropdown-link-item"},On=Fn(()=>i("span",{class:"arrow"},null,-1)),Vn={class:"text"},Un={class:"icon"},Gn=_({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=X(t),{props:o,isExternal:s}=oe(n.item);return(r,l)=>(c(),p("div",Hn,[i("a",Jt({class:"item"},a(o)),[On,i("span",Vn,h(t.item.text),1),i("span",Un,[a(s)?(c(),E(bt,{key:0})):f("",!0)])],16)]))}});var zn=x(Gn,[["__scopeId","data-v-07381bdb"]]);const Jn=["aria-label"],Wn={class:"button-text"},Xn={class:"dialog"},Yn=_({__name:"NavDropdownLink",props:{item:null},setup(t){const e=V(),n=A(!1);Y(()=>e.path,()=>{n.value=!1});function o(){n.value=!n.value}return(s,r)=>(c(),p("div",{class:N(["nav-dropdown-link",{open:n.value}])},[i("button",{class:"button","aria-label":t.item.ariaLabel,onClick:o},[i("span",Wn,h(t.item.text),1),i("span",{class:N(["button-arrow",n.value?"down":"right"])},null,2)],8,Jn),i("ul",Xn,[(c(!0),p(q,null,M(t.item.items,l=>(c(),p("li",{key:l.text,class:"dialog-item"},[b(zn,{item:l},null,8,["item"])]))),128))])],2))}});var Dt=x(Yn,[["__scopeId","data-v-18d75f62"]]);const Qn={key:0,class:"nav-links"},Kn={key:1,class:"item"},Zn={key:2,class:"item"},to=_({__name:"NavLinks",setup(t){const{theme:e}=C(),n=qn(),o=Tn(),s=v(()=>e.value.nav||o.value||n.value);return(r,l)=>a(s)?(c(),p("nav",Qn,[a(e).nav?(c(!0),p(q,{key:0},M(a(e).nav,d=>(c(),p("div",{key:d.text,class:"item"},[d.items?(c(),E(Dt,{key:0,item:d},null,8,["item"])):(c(),E(Rt,{key:1,item:d},null,8,["item"]))]))),128)):f("",!0),a(n)?(c(),p("div",Kn,[b(Dt,{item:a(n)},null,8,["item"])])):f("",!0),a(o)?(c(),p("div",Zn,[b(Rt,{item:a(o)},null,8,["item"])])):f("",!0)])):f("",!0)}});var se=x(to,[["__scopeId","data-v-35b91e7e"]]);const eo={emits:["toggle"]},no=i("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[i("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),oo=[no];function so(t,e,n,o,s,r){return c(),p("div",{class:"sidebar-button",onClick:e[0]||(e[0]=l=>t.$emit("toggle"))},oo)}var ro=x(eo,[["render",so]]);const ao=t=>(R("data-v-40587210"),t=t(),D(),t),io={class:"nav-bar"},lo=ao(()=>i("div",{class:"flex-grow"},null,-1)),co={class:"nav"},uo=_({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(c(),p("header",io,[b(ro,{onToggle:n[0]||(n[0]=o=>e.$emit("toggle"))}),b(Sn),lo,i("div",co,[b(se)]),T(e.$slots,"search",{},void 0,!0)]))}});var po=x(uo,[["__scopeId","data-v-40587210"]]);function go(){let t=null,e=null;const n=vo(o,300);function o(){const l=mo(),d=ho(l);for(let u=0;u<d.length;u++){const g=d[u],m=d[u+1],[$,L]=_o(u,g,m);if($){history.replaceState(null,document.title,L||" "),s(L);return}}}function s(l){if(r(e),r(t),e=document.querySelector(`.sidebar a[href="${l}"]`),!e)return;e.classList.add("active");const d=e.closest(".sidebar-links > ul > li");d&&d!==e.parentElement?(t=d.querySelector("a"),t&&t.classList.add("active")):t=null}function r(l){l&&l.classList.remove("active")}I(()=>{o(),window.addEventListener("scroll",n)}),Wt(()=>{s(decodeURIComponent(location.hash))}),Q(()=>{window.removeEventListener("scroll",n)})}function mo(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ho(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function fo(){return document.querySelector(".nav-bar").offsetHeight}function Ft(t){const e=fo();return t.parentElement.offsetTop-e-15}function _o(t,e,n){const o=window.scrollY;return t===0&&o===0?[!0,null]:o<Ft(e)?[!1,null]:!n||o<Ft(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function vo(t,e){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(t,e):(t(),o=!0,setTimeout(()=>{o=!1},e))}}function bo(){const t=V(),{site:e}=C();return go(),v(()=>{const n=t.data.headers,o=t.data.frontmatter.sidebar,s=t.data.frontmatter.sidebarDepth;if(o===!1)return[];if(o==="auto")return Ht(n,s);const r=vt(e.value.themeConfig.sidebar,t.data.relativePath);return r===!1?[]:r==="auto"?Ht(n,s):r})}function Ht(t,e){const n=[];if(t===void 0)return[];let o;return t.forEach(({level:s,title:r,slug:l})=>{if(s-1>e)return;const d={text:r,link:`#${l}`};s===2?(o=d,n.push(d)):o&&(o.children||(o.children=[])).push(d)}),n}const re=t=>{const e=V(),{site:n,frontmatter:o}=C(),s=t.depth||1,r=o.value.sidebarDepth||1/0,l=e.data.headers,d=t.item.text,u=yo(n.value.base,t.item.link),g=t.item.children,m=vn(e,t.item.link),$=s<r?ae(m,g,l,s+1):null;return G("li",{class:"sidebar-link"},[G(u?"a":"p",{class:{"sidebar-link-item":!0,active:m},href:u},d),$])};function yo(t,e){return e===void 0||e.startsWith("#")?e:bn(t,e)}function ae(t,e,n,o=1){return e&&e.length>0?G("ul",{class:"sidebar-links"},e.map(s=>G(re,{item:s,depth:o}))):t&&n?ae(!1,xo(n),void 0,o):null}function xo(t){return ie($o(t))}function $o(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function ie(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?ie(e.children):void 0}))}const wo={key:0,class:"sidebar-links"},ko=_({__name:"SideBarLinks",setup(t){const e=bo();return(n,o)=>a(e).length>0?(c(),p("ul",wo,[(c(!0),p(q,null,M(a(e),s=>(c(),E(a(re),{item:s},null,8,["item"]))),256))])):f("",!0)}});const Co=_({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(c(),p("aside",{class:N(["sidebar",{open:t.open}])},[b(se,{class:"nav"}),T(e.$slots,"sidebar-top",{},void 0,!0),b(ko),T(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var So=x(Co,[["__scopeId","data-v-17c48e2f"]]);const qo=/bitbucket.org/;function Lo(){const{page:t,theme:e,frontmatter:n}=C(),o=v(()=>{const{repo:r,docsDir:l="",docsBranch:d="master",docsRepo:u=r,editLinks:g}=e.value,m=n.value.editLink!=null?n.value.editLink:g,{relativePath:$}=t.value;return!m||!$||!r?null:To(r,u,l,d,$)}),s=v(()=>e.value.editLinkText||"Edit this page");return{url:o,text:s}}function To(t,e,n,o,s){return qo.test(t)?Po(t,e,n,o,s):Eo(t,e,n,o,s)}function Eo(t,e,n,o,s){return(_t(e)?e:`https://github.com/${e}`).replace(nt,"")+`/edit/${o}/`+(n?n.replace(nt,"")+"/":"")+s}function Po(t,e,n,o,s){return(_t(e)?e:t).replace(nt,"")+`/src/${o}/`+(n?n.replace(nt,"")+"/":"")+s+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}const Mo={class:"edit-link"},Ao=["href"],No=_({__name:"EditLink",setup(t){const{url:e,text:n}=Lo();return(o,s)=>(c(),p("div",Mo,[a(e)?(c(),p("a",{key:0,class:"link",href:a(e),target:"_blank",rel:"noopener noreferrer"},[j(h(a(n))+" ",1),b(bt,{class:"icon"})],8,Ao)):f("",!0)]))}});var Io=x(No,[["__scopeId","data-v-55695e90"]]);const jo={key:0,class:"last-updated"},Bo={class:"prefix"},Ro={class:"datetime"},Do=_({__name:"LastUpdated",setup(t){const{theme:e,page:n}=C(),o=v(()=>{const l=e.value.lastUpdated;return l!==void 0&&l!==!1}),s=v(()=>{const l=e.value.lastUpdated;return l===!0?"Last Updated":l}),r=A("");return I(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(l,d)=>a(o)?(c(),p("p",jo,[i("span",Bo,h(a(s))+":",1),i("span",Ro,h(r.value),1)])):f("",!0)}});var Fo=x(Do,[["__scopeId","data-v-30c3cbb4"]]);const Ho={class:"page-footer"},Oo={class:"edit"},Vo={class:"updated"},Uo=_({__name:"PageFooter",setup(t){return(e,n)=>(c(),p("footer",Ho,[i("div",Oo,[b(Io)]),i("div",Vo,[b(Fo)])]))}});var Go=x(Uo,[["__scopeId","data-v-5c96fb00"]]);function zo(){const{page:t,theme:e}=C(),n=v(()=>ee(mt(t.value.relativePath))),o=v(()=>{const u=vt(e.value.sidebar,n.value);return ft(u)?ne(u):[]}),s=v(()=>o.value.findIndex(u=>u.link===n.value)),r=v(()=>{if(e.value.nextLinks!==!1&&s.value>-1&&s.value<o.value.length-1)return o.value[s.value+1]}),l=v(()=>{if(e.value.prevLinks!==!1&&s.value>0)return o.value[s.value-1]}),d=v(()=>!!r.value||!!l.value);return{next:r,prev:l,hasLinks:d}}const Jo={},Wo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Xo=i("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Yo=[Xo];function Qo(t,e){return c(),p("svg",Wo,Yo)}var Ko=x(Jo,[["render",Qo]]);const Zo={},ts={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},es=i("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),ns=[es];function os(t,e){return c(),p("svg",ts,ns)}var ss=x(Zo,[["render",os]]);const rs={key:0,class:"next-and-prev-link"},as={class:"container"},is={class:"prev"},ls=["href"],cs={class:"text"},us={class:"next"},ds=["href"],ps={class:"text"},gs=_({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:o}=zo();return(s,r)=>a(e)?(c(),p("div",rs,[i("div",as,[i("div",is,[a(n)?(c(),p("a",{key:0,class:"link",href:a(P)(a(n).link)},[b(Ko,{class:"icon icon-prev"}),i("span",cs,h(a(n).text),1)],8,ls)):f("",!0)]),i("div",us,[a(o)?(c(),p("a",{key:0,class:"link",href:a(P)(a(o).link)},[i("span",ps,h(a(o).text),1),b(ss,{class:"icon icon-next"})],8,ds)):f("",!0)])])])):f("",!0)}});var ms=x(gs,[["__scopeId","data-v-e65a9748"]]);const hs={class:"page"},fs={class:"container"},_s=_({__name:"Page",setup(t){return(e,n)=>{const o=et("Content");return c(),p("main",hs,[i("div",fs,[T(e.$slots,"top",{},void 0,!0),b(o,{class:"content"}),b(Go),b(ms),T(e.$slots,"bottom",{},void 0,!0)])])}}});var vs=x(_s,[["__scopeId","data-v-8fcebc32"]]);const bs={key:0,id:"ads-container"},ys=_({__name:"Layout",setup(t){const e=Pe(()=>Vt(()=>import("./Home.5025c66c.js"),["assets/Home.5025c66c.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.fa459758.js","assets/framework.9679036a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/preload-helper.1c052cf7.js"])),n=()=>null,o=n,s=n,r=n,l=V(),{site:d,page:u,theme:g,frontmatter:m}=C(),$=v(()=>!!m.value.customLayout),L=v(()=>!!m.value.home),y=v(()=>Object.keys(d.value.langs).length>1),w=v(()=>{const S=g.value;return m.value.navbar===!1||S.navbar===!1?!1:d.value.title||S.logo||S.repo||S.nav}),k=A(!1),B=v(()=>m.value.home||m.value.sidebar===!1?!1:!$n(vt(g.value.sidebar,l.data.relativePath))),at=S=>{k.value=typeof S=="boolean"?S:!k.value},_e=at.bind(null,!1);Y(l,_e);const ve=v(()=>[{"no-navbar":!w.value,"sidebar-open":k.value,"no-sidebar":!B.value}]);return(S,wt)=>{const be=et("Content"),ye=et("Debug");return c(),p(q,null,[i("div",{class:N(["theme",a(ve)])},[a(w)?(c(),E(po,{key:0,onToggle:at},{search:H(()=>[T(S.$slots,"navbar-search",{},()=>[a(g).algolia?(c(),E(a(r),{key:0,options:a(g).algolia,multilang:a(y)},null,8,["options","multilang"])):f("",!0)])]),_:3})):f("",!0),b(So,{open:k.value},{"sidebar-top":H(()=>[T(S.$slots,"sidebar-top")]),"sidebar-bottom":H(()=>[T(S.$slots,"sidebar-bottom")]),_:3},8,["open"]),i("div",{class:"sidebar-mask",onClick:wt[0]||(wt[0]=ui=>at(!1))}),a($)?(c(),E(be,{key:1})):a(L)?T(S.$slots,"home",{key:2},()=>[b(a(e),null,{hero:H(()=>[T(S.$slots,"home-hero")]),features:H(()=>[T(S.$slots,"home-features")]),footer:H(()=>[T(S.$slots,"home-footer")]),_:3})]):(c(),E(vs,{key:3},{top:H(()=>[T(S.$slots,"page-top-ads",{},()=>[a(g).carbonAds&&a(g).carbonAds.carbon?(c(),p("div",bs,[(c(),E(a(o),{key:"carbon"+a(u).relativePath,code:a(g).carbonAds.carbon,placement:a(g).carbonAds.placement},null,8,["code","placement"]))])):f("",!0)]),T(S.$slots,"page-top")]),bottom:H(()=>[T(S.$slots,"page-bottom"),T(S.$slots,"page-bottom-ads",{},()=>[a(g).carbonAds&&a(g).carbonAds.custom?(c(),E(a(s),{key:"custom"+a(u).relativePath,code:a(g).carbonAds.custom,placement:a(g).carbonAds.placement},null,8,["code","placement"])):f("",!0)])]),_:3}))],2),b(ye)],64)}}}),xs={class:"theme"},$s=i("h1",null,"404",-1),ws=["href"],ks=_({__name:"NotFound",setup(t){const{site:e}=C(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function o(){return n[Math.floor(Math.random()*n.length)]}return(s,r)=>(c(),p("div",xs,[$s,i("blockquote",null,h(o()),1),i("a",{href:a(e).base,"aria-label":"go to home"},"Take me home.",8,ws)]))}}),Cs={Layout:ys,NotFound:ks};class Ss{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class yt{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=yt.getPoint(this.dustQuantity);for(let n of e){const o=new Ss;this.buildDust(n[0],n[1],o),this.dustArr.push(o)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let o of e)if(o.x<0||o.y<0){const s=this.width,r=Math.floor(Math.random()*window.innerHeight);o.x=s,o.y=r,this.buildDust(s,r,o)}else{const s=o.x-o.vx,r=o.y-o.vy;this.buildDust(s,r,o)}}buildDust(e,n,o){const s=this.ctx;e&&(o.x=e),n&&(o.y=n),s&&(s.beginPath(),s.shadowBlur=o.shadowBlur,s.shadowColor=o.color,s.shadowOffsetX=o.shadowX,s.shadowOffsetY=o.shadowY,s.ellipse(o.x,o.y,o.radiusX,o.radiusY,o.rotation,0,Math.PI*2),s.closePath(),s.fillStyle=o.color,s.fill())}resize(){const e=this.canvas,n=window.innerWidth,o=window.innerHeight;this.width=n,this.height=o,this.dustQuantity=Math.floor((n+o)/38),e!==void 0&&(e.width=n,e.height=o)}static getPoint(e=1){let n=[];for(let o=0;o<e;o++){const s=Math.floor(Math.random()*window.innerWidth),r=Math.floor(Math.random()*window.innerHeight);n.push([s,r])}return n}}const qs=t=>{const e=localStorage.getItem(t);return e&&JSON.parse(e)},Ot=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};function Ls(t){let e=t[0];for(let n=1;n<t.length;n++){const o=t[n];o.length>e.length&&(e=o)}return e}function le(t,e){return Array.from(t).filter(s=>e.test(s.nodeName))}function ce(t,e){let n,o,s=0;return function(){n=this,o=arguments;let r=new Date().valueOf();r-s>e&&(t.apply(n,o),s=r)}}const Ts=t=>{t.forEach(e=>{const n=new Image;n.src=e})};const Es=_({__name:"BgToggle",props:{bgUrl:String},setup(t){const{theme:e}=C(),n=e.value.bgUrls,o=A(0),s=Me("setBg");st(()=>{s(n[o.value])}),Ae(()=>{Ts(n)}),I(()=>{r()});const r=()=>{const d=qs("bgIdx");d==null?Ot("bgIdx",o.value):o.value=d},l=()=>{o.value>=n.length-1?o.value=0:o.value++,Ot("bgIdx",o.value)};return(d,u)=>(c(),p("i",{class:"fa fa-retweet bg-toggle",title:"toggle background",onClick:l}))}});var Ps=x(Es,[["__scopeId","data-v-2dc83b4c"]]);const Ms=t=>(R("data-v-7d636702"),t=t(),D(),t),As={class:"menu-list"},Ns=Ms(()=>i("a",{href:""},[i("i",{class:"fa fa-navicon"})],-1)),Is=[Ns],js=["href"],Bs=["title"],Rs=_({__name:"index",setup(t){const{theme:e,page:n}=C(),o=e.value.nav,s=A(!0),r=v(()=>`/${n.value.relativePath.split(".")[0]}`),l=()=>{s.value=!s.value};return(d,u)=>(c(),p("header",null,[i("nav",null,[i("ul",As,[i("li",{class:"nav-toggle",onClick:l},Is),s.value?(c(!0),p(q,{key:0},M(a(o),g=>(c(),p("li",{class:N(g.link===a(r)?"active":"")},[(c(),p("a",{href:g.link,key:g.link},[i("i",{class:N(`fa fa-${g.icon}`),title:g.text},null,10,Bs)],8,js))],2))),256)):f("",!0),i("li",null,[b(Ps)])])])]))}});var Ds=x(Rs,[["__scopeId","data-v-7d636702"]]);const Fs={key:0,class:"social-links"},Hs=["href"],Os=["title"],Vs=_({__name:"SocialLinks",setup(t){const{theme:e}=C();return(n,o)=>a(e).socialLinks.length?(c(),p("div",Fs,[(c(!0),p(q,null,M(a(e).socialLinks,s=>(c(),p("a",{key:s.link,href:s.link,target:"_blank"},[i("i",{class:N(`fa fa-${s.icon}`),title:s.text},null,10,Os)],8,Hs))),128))])):f("",!0)}});var Us=x(Vs,[["__scopeId","data-v-1c971fe0"]]);const xt=t=>(R("data-v-1d916c1f"),t=t(),D(),t),Gs={key:0,class:"aside-wrapper"},zs={href:"/",class:"logo"},Js=["src"],Ws={class:"center dr"},Xs={href:"/"},Ys={class:"total"},Qs=["href"],Ks=xt(()=>i("span",{class:"total-title"},"Archives Total",-1)),Zs={class:"total-number"},tr={class:"total-tags"},er=xt(()=>i("span",{class:"total-title"},"Tags:",-1)),nr={class:"total-number"},or={class:"total-categories"},sr=xt(()=>i("span",{class:"total-title"},"Categories:",-1)),rr={class:"total-number"},ar=_({__name:"index",setup(t){const{site:e,theme:n,frontmatter:o}=C(),s=e.value.title,r=n.value.logo,l=n.value.posts.length,d=Object.keys(n.value.tags).length,u=Object.keys(n.value.cats).length,g=v(()=>o.value.sidebar);return(m,$)=>a(g)?(c(),p("div",Gs,[i("aside",null,[i("div",null,[i("a",zs,[i("img",{src:a(P)(a(r)),alt:"Logo"},null,8,Js)]),i("h1",Ws,[i("a",Xs,"Dr."+h(a(s)),1)]),i("section",Ys,[i("a",{class:"total-archives",href:a(P)("/pages/archives")},[Ks,i("span",Zs,h(a(l)),1)],8,Qs),i("div",tr,[er,i("span",nr,h(a(d)),1)]),i("div",or,[sr,i("span",rr,h(a(u)),1)])]),b(Us)])])])):f("",!0)}});var ir=x(ar,[["__scopeId","data-v-1d916c1f"]]);const lr={class:"message-wrapper"},cr=_({__name:"Message",props:{type:{type:String,required:!0},msg:{type:String,required:!0}},setup(t){return(e,n)=>(c(),p("div",lr,[i("span",null,h(t.msg.value),1)]))}});var ur=x(cr,[["__scopeId","data-v-716cb212"]]);const K=F({type:"success",msg:""}),dr=(t=K.type,e,n)=>{K.type=t,K.msg=e;const o=Zt(ur,{...X(K)}).mount(document.createElement("div"));document.body.appendChild(o.$el),setTimeout(()=>{document.body.removeChild(o.$el)},n)},ue={success(t,e=1e3){dr("success",t,e)},install(t){t.config.globalProperties.message=ue}};class pr{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const o=document.createElement("i");o.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(o),o.addEventListener("click",function(){const s=document.createElement("textarea"),r=o.previousElementSibling;s.value=r.innerText,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),ue.success("Copied!")})})}}const gr=t=>(R("data-v-4e6f6b2a"),t=t(),D(),t),mr={class:"post-header"},hr={class:"title"},fr={class:"info"},_r={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},vr=gr(()=>i("div",{class:"divider"},null,-1)),br=_({__name:"PostHeader",setup(t){const{frontmatter:e}=C();let n=v(()=>e.value.title),o=v(()=>{const s=e.value.date;return(s?new Date(s).toJSON().split("T")[0]:"").split("-")});return(s,r)=>(c(),p("div",mr,[i("h1",hr,h(a(n)),1),i("div",fr,[i("span",_r,h(a(o)[2])+" / "+h(a(o)[1])+" / "+h(a(o)[0]),1)]),vr]))}});var yr=x(br,[["__scopeId","data-v-4e6f6b2a"]]);const $t=t=>(R("data-v-f9cae6c6"),t=t(),D(),t),xr={class:"post-footer"},$r=$t(()=>i("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),wr=["href"],kr=$t(()=>i("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),Cr=["href"],Sr=$t(()=>i("li",null,[i("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),j(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),i("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),j(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),qr=_({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:o}=C();let s=v(()=>{const r=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${r}`});return v(()=>o.value.postFooter),(r,l)=>(c(),p("div",xr,[i("ul",null,[i("li",null,[$r,i("a",{href:a(n).themeConfig.website,target:"_blank"},h(a(n).title),9,wr)]),i("li",null,[kr,i("a",{href:a(s),target:"_blank"},h(a(s)),9,Cr)]),Sr])]))}});var Lr=x(qr,[["__scopeId","data-v-f9cae6c6"]]);const de=t=>(R("data-v-22a9c1c0"),t=t(),D(),t),Tr={class:"prev-next"},Er=de(()=>i("hr",null,null,-1)),Pr=["href"],Mr={key:1},Ar=["href"],Nr={key:1},Ir=de(()=>i("hr",null,null,-1)),jr=_({__name:"PrevNext",setup(t){const{theme:e,page:n}=C(),o=v(()=>e.value.posts),s=v(()=>n.value.frontmatter.title);let r=F({regularPath:"",frontMatter:{title:""}}),l=F({regularPath:"",frontMatter:{title:""}});const d=(u,g)=>{g?(u.regularPath=g.regularPath,u.frontMatter.title=g.frontMatter.title):(u.regularPath="",u.frontMatter.title="")};return st(()=>{const u=o.value.findIndex(g=>g.frontMatter.title===s.value);if(u>-1){const g=o.value[u-1],m=o.value[u+1];d(r,g),d(l,m)}}),(u,g)=>{var m,$,L,y,w,k;return c(),p("div",Tr,[Er,i("div",null,[dt(i("a",{class:"prev",href:a(P)((m=a(r))==null?void 0:m.regularPath)},[a(e).docFooter.prev.icon?(c(),p("i",{key:0,class:N(`fa fa-${a(e).docFooter.prev.icon}`)},null,2)):f("",!0),a(e).docFooter.prev.text?(c(),p("span",Mr,h(a(e).docFooter.prev.text),1)):f("",!0),j(" "+h((L=($=a(r))==null?void 0:$.frontMatter)==null?void 0:L.title),1)],8,Pr),[[At,a(r).regularPath]]),dt(i("a",{class:"next",href:a(P)((y=a(l))==null?void 0:y.regularPath)},[j(h((k=(w=a(l))==null?void 0:w.frontMatter)==null?void 0:k.title)+" ",1),a(e).docFooter.next.icon?(c(),p("i",{key:0,class:N(`fa fa-${a(e).docFooter.next.icon}`)},null,2)):f("",!0),a(e).docFooter.next.text?(c(),p("span",Nr,h(a(e).docFooter.next.text),1)):f("",!0)],8,Ar),[[At,a(l).regularPath]])]),Ir])}}});var Br=x(jr,[["__scopeId","data-v-22a9c1c0"]]);const pe=t=>(R("data-v-413ae51b"),t=t(),D(),t),Rr=pe(()=>i("i",{class:"fa fa-caret-up"},null,-1)),Dr=pe(()=>i("p",null,"TOP",-1)),Fr=[Rr,Dr],Hr=_({__name:"BackTop",setup(t){const e=A(0),n=v(()=>e.value>300?"block":"none");I(()=>{window.addEventListener("scroll",s)}),Q(()=>{window.removeEventListener("scroll",s)});const o=()=>{e.value=document.documentElement.scrollTop},s=ce.bind(this,o,1e3)(),r=()=>{const l=document.documentElement.scrollTop/6,d=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-l,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(d)},50)};return(l,d)=>(c(),p("div",{class:"back-top",style:Xt({display:a(n)}),onClick:r},Fr,4))}});var Or=x(Hr,[["__scopeId","data-v-413ae51b"]]);function Vr(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),o=24*60*60*1e3,s=n/o,r=Math.floor(s),l=(s-r)*24,d=Math.floor(l),u=(l-d)*60,g=Math.floor(u),m=(u-g)*60,$=Math.floor(m);return{day:r,hour:d,minute:g,second:$}}const Ur=()=>{const t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=t})};const rt=t=>(R("data-v-456a65eb"),t=t(),D(),t),Gr=rt(()=>i("i",{class:"fa fa-heartbeat mr4"},null,-1)),zr=rt(()=>i("p",null,[j(" Published With "),i("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),j(" & "),i("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank",class:"mr4"},"Arknights"),i("a",{href:"https://travellings.link/",target:"_blank"},[i("i",{class:"fa fa-paper-plane-o",title:"Travellings"})])],-1)),Jr=rt(()=>i("div",null,[i("span",null,"\xA9"),i("span",null,"2021 to 2022")],-1)),Wr=rt(()=>i("div",null,[i("span",null,"ICP"),i("span",null,"\u2014 RHODEISLAND \u2014")],-1)),Xr=_({__name:"Footer",setup(t){const{theme:e}=C(),n=A();let o=F({day:0,hour:0,minute:0,second:0}),s=null;I(()=>{e.value.footer.runtime.enable&&(s=setInterval(r,1e3))}),Q(()=>{s&&clearInterval(s)});const r=()=>{const l=Vr();o.day=l.day,o.hour=l.hour,o.minute=l.minute,o.second=l.second};return(l,d)=>(c(),p("footer",null,[a(e).footer.runtime.enable?(c(),p("p",{key:0,ref_key:"runtimeRef",ref:n},[Gr,j(" "+h(a(o).day)+" days "+h(a(o).hour)+" hours "+h(a(o).minute)+" minutes and "+h(a(o).second)+" seconds ",1)],512)):f("",!0),zr,a(e).footer.copyright?(c(),p(q,{key:1},[Jr,Wr],64)):f("",!0)]))}});var Yr=x(Xr,[["__scopeId","data-v-456a65eb"]]);const ge=/^H[1-6]{1,}$/,Qr=t=>{const e=t.childNodes,n=le(e,ge);return Kr(n)};function Kr(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n],s=/^(_\d)+(-\d)*/ig,r=o.id.match(s)[0];e.push({nodeName:o.nodeName,text:o.innerText.slice(0,o.innerText.length-1),id:o.id,level:r})}return Zr(e)}function Zr(t){const e=[],n={};t.forEach(o=>{n[o.level]=o});for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const s=n[o];if(/^(_\d)+$/ig.test(o))e.push(s);else{const d=Object.keys(n).filter(g=>g!==o&&o.includes(g)),u=Ls(d);n[u].child?n[u].child.push(s):n[u].child=[s]}}return e}const ta=["href","name","title","onClick"],ea=_({__name:"CataList",props:{tree:Array},setup(t){const e=n=>{n.open=!n.open,n.active=!0};return(n,o)=>(c(),p("ul",null,[(c(!0),p(q,null,M(t.tree,s=>{var r;return c(),p("li",{key:s.id},[i("a",{href:`#${s.id}`,name:s.id,title:s.text,class:N([[s.nodeName,s.active?"active":""],"link"]),onClick:l=>e(s)},h(s.text),11,ta),((r=s.child)==null?void 0:r.length)&&s.open?(c(),E(me,{key:0,tree:s.child},null,8,["tree"])):f("",!0)])}),128))]))}});var me=x(ea,[["__scopeId","data-v-33c6374d"]]);const na={key:0,class:"catalog"},oa=_({__name:"index",setup(t){const{frontmatter:e}=C(),n=A(0),o=A(0),s=F({data:[]}),r=F({titleNodes:[],titleMargins:[]});Y(e,(y,w)=>{l()},{deep:!0}),I(()=>{l(),window.addEventListener("scroll",u)}),Q(()=>{window.removeEventListener("scroll",u)});const l=()=>{var k;const y=(k=document.getElementById("content"))==null?void 0:k.childNodes[0],w=Qr(y);s.data=w,o.value=y.getBoundingClientRect().top,m(y)},d=()=>{n.value=document.documentElement.scrollTop,g()},u=ce.bind(this,d,50)(),g=()=>{const y=r.titleMargins;for(let w=0;w<y.length;w++){const k=y[w];if(k.top-n.value>=o.value){L(s.data),$(s.data,k.id);return}}},m=y=>{const w=y.childNodes;r.titleNodes=le(w,ge);const k=r.titleNodes.map(B=>({id:B.id,top:B.getBoundingClientRect().top}));r.titleMargins=k,g()},$=(y,w)=>{for(let k=0;k<y.length;k++){const B=y[k];if(B.id===w){B.active=!0,B.open=!0;return}B.child&&$(B.child,w)}},L=y=>{for(let w=0;w<y.length;w++){const k=y[w];k.active&&(k.active=!1),k.child&&L(k.child)}};return(y,w)=>s.data.length?(c(),p("div",na,[b(me,{tree:s.data},null,8,["tree"])])):f("",!0)}});var sa=x(oa,[["__scopeId","data-v-32f802b6"]]);const ra={key:0,class:"post-tag"},aa=i("i",{class:"fa fa-tags"},null,-1),ia=["href"],la=_({__name:"index",setup(t){const{frontmatter:e}=C(),n=v(()=>e.value.page),o=v(()=>e.value.tags||[]);I(()=>{s()}),Wt(()=>{s()});const s=()=>{n.value||new pr};return(r,l)=>{const d=et("Content");return c(),p("div",{class:N(["content",a(n)?"":"post-content"]),id:"postContent"},[a(n)?f("",!0):(c(),E(yr,{key:0})),b(d,{id:"content"}),a(n)?f("",!0):(c(),p(q,{key:1},[a(o).length?(c(),p("p",ra,[aa,(c(!0),p(q,null,M(a(o),u=>(c(),p("a",{key:u,href:`/pages/archives#tag=${u}`},h(u),9,ia))),128))])):f("",!0),b(Lr),b(Br),b(Or),b(sa)],64)),b(Yr)],2)}}}),ca=()=>G("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"});const ua={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},da=_({__name:"App",setup(t){const{theme:e}=C(),n=A("111111111111");return Ne("setBg",o=>{n.value=o}),I(()=>{new yt("canvas-dust")}),(o,s)=>(c(),p(q,null,[i("main",{class:"layout",style:Xt({"background-image":`url(${n.value})`})},[b(ir,{class:"aside"}),b(la,{class:"content"}),b(Ds,{class:"navbar"})],4),a(e).live2d?(c(),E(a(ca),{key:0,class:"l2d-model"})):f("",!0),i("canvas",ua,null,512)],64))}});var pa=x(da,[["__scopeId","data-v-c4151ec8"]]);const ga=["href"],ma={class:"post-info"},ha={class:"post-info-categories"},fa=["href"],_a={key:1,href:"#"},va={class:"post-info-tags"},ba=["href"],ya={key:1,href:"#"},xa={datetime:"2022-01-25T19:21:35.000Z"},$a=["innerHTML"],wa={class:"post-excerpt"},ka=["innerHTML"],Ca=i("span",{class:"post-btn"},"READ MORE +",-1),Sa=_({__name:"PostItem",props:{article:{type:Object,required:!0}},setup(t){return(e,n)=>(c(),p("a",{href:a(P)(t.article.regularPath),class:"post-item"},[i("div",ma,[i("div",null,[i("span",ha,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(c(!0),p(q,{key:0},M(t.article.frontMatter.category,o=>(c(),p("a",{key:o,href:a(P)(`/pages/archives#category=${o}`)},h(o),9,fa))),128)):(c(),p("a",_a,"Empty"))]),i("span",va,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(c(!0),p(q,{key:0},M(t.article.frontMatter.tags,o=>(c(),p("a",{key:o,href:a(P)(`/pages/archives#tag=${o}`)},h(o),9,ba))),128)):(c(),p("a",ya," Empty "))])]),i("time",xa,h(t.article.frontMatter.dateArr[2])+" / "+h(t.article.frontMatter.dateArr[1])+" / "+h(t.article.frontMatter.dateArr[0]),1)]),i("h1",{class:"post-title",innerHTML:t.article.frontMatter.title},null,8,$a),i("div",wa,[typeof t.article.frontMatter.description=="string"?(c(),p("p",{key:0,innerHTML:t.article.frontMatter.description},null,8,ka)):(c(!0),p(q,{key:1},M(t.article.frontMatter.description,o=>(c(),p("p",{key:o},h(o),1))),128))]),Ca],8,ga))}});var qa=[{title:"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883
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

`,excerpt:"",url:"/posts\\Site\\catalog"},{title:"Build a Free CDN\u3010Github + JSDelivr\u3011",content:`1. Create a public repository

2. Create a new release

3. Assets request
url template: https://cdn.jsdelivr.net/gh/user/repo@version/file
`,excerpt:"",url:"/posts\\Site\\cdn-github"},{title:"Hello World",content:`
`,excerpt:"",url:"/posts\\Site\\hello-world"},{title:"VitePress - Add Live2d",content:`1. Environment

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

`,excerpt:"",url:"/posts\\Site\\valine-email"},{title:"Flex Alignment Issue of the Last Element",content:`1. Issue
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

`,excerpt:"",url:"/posts\\Tech\\CSS\\flex-align"},{title:"CSS \u5E38\u7528\u5355\u4F4D",content:`\u9996\u5148\u6765\u8BF4\u4E00\u4E0B\u5BF9\u5404\u79CD\u5355\u4F4D\u7684\u5B9A\u4E49\u3002


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
`,excerpt:"",url:"/posts\\Tech\\CSS\\unit"},{title:"High-Frequency Git CMD",content:`1. Global config
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

`,excerpt:"",url:"/posts\\Tech\\Git\\cmd"},{title:"GitHub\uFF1AAccess has been restricted?",content:`1. Open the host file:
C:\\Windows\\System32\\drivers\\etc\\host
2. Add the following:
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

`,excerpt:"",url:"/posts\\Tech\\Git\\restricted"},{title:"Multi-User Configuration",content:`Add the file config to ~/.ssh.
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

`,excerpt:"",url:"/posts\\Tech\\Git\\uconfig"},{title:"Use and Customization of Audio Tag",content:`1. Basic
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
`,excerpt:"",url:"/posts\\Tech\\HTML\\audio"},{title:"HTML Tag [object] VS [embed]",content:`The two tags are both able to render media object such as audio, video, pdf and flash.Due to the compatibility depending on different browsers, we should mainly use &lt;object&gt;.
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

`,excerpt:"",url:"/posts\\Tech\\JS\\backtop"},{title:"One-click Copy",content:`1. Definition
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

`,excerpt:"",url:"/posts\\Tech\\JS\\preloadimg"},{title:"Node Read Local Files and Get the Direcctory Tree Data",content:`// fs-extra
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

`,excerpt:"",url:"/posts\\Tech\\Node\\readfiles"},{title:"NPM Registry Configuration",content:`1. By NPM config cmd
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
`,excerpt:"",url:"/posts\\Tech\\NPM\\npm-reg"},{title:"Build A Project By Vite",content:`1. Create
# Npm
$ npm create vite@latest [app-name] --template [vue/react]
# Yarn
$ yarn create vite [app-name] --template [vue/react]

2. Install
$ cd my-vue-app
$ npm install

3. Run
npm run dev

`,excerpt:"",url:"/posts\\Tech\\Vite\\start"},{title:"\u6D4F\u89C8\u5668\u63D2\u4EF6\u5206\u4EAB",content:`1. \u5B89\u88C5\u65B9\u5F0F

\u80FD\u8BBF\u95EE\u63D2\u4EF6\u5E02\u573A\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u63D2\u4EF6\u5E02\u573A\u5B89\u88C5\uFF0C\u65B9\u4FBF\u540C\u6B65\u81F3\u6D4F\u89C8\u5668\u8D26\u53F7\uFF1B
Chrome\uFF1Ahttps://chrome.google.com/webstore/category/extensions
Edge: https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home


\u4E0D\u80FD\u8BBF\u95EE\u63D2\u4EF6\u5E02\u573A\u7684\u7528\u6237\u53EF\u4EE5\u4E0B\u8F7D crx \u6587\u4EF6\u624B\u52A8\u5B89\u88C5\uFF0C\u4F46\u65E0\u6CD5\u540C\u6B65\u5230\u6D4F\u89C8\u5668\u8D26\u53F7\u3002 
\u63D2\u4EF6 crx \u4E0B\u8F7D\uFF1AChrome\u63D2\u4EF6\u7F51, Cnplugins




2. \u5E38\u89C4\u7C7B
2.1. IGuge Helper(iGG\u8C37\u6B4C\u5B66\u672F\u52A9\u624B)
\u514D\u8D39\u8BBF\u95EE\u8C37\u6B4C\u5B66\u672F\u3001\u8C37\u6B4C\u641C\u7D22\u3001Gmail\u3001\u63D2\u4EF6\u5E02\u573A\u7B49\u8C37\u6B4C\u57FA\u672C\u670D\u52A1\u3002
2.2. Tampermonkey(\u6CB9\u7334)
\u7528\u6237\u811A\u672C\u7BA1\u7406\uFF0C\u53EF\u4EE5\u5B89\u88C5\u5404\u7C7B\u4E30\u5BCC\u7684\u6269\u5C55\u811A\u672C\u3002
2.3. AdGuard
\u53BB\u9664\u7F51\u9875\u5E7F\u544A\u3002
2.4. Grammarly
\u82F1\u6587\u5199\u4F5C\u8BED\u6CD5\u68C0\u9519\u3001\u7EA0\u9519\u548C\u8BC4\u5206\u3002
2.5. Vimium
\u5168\u952E\u76D8\u64CD\u4F5C\u6D4F\u89C8\u5668\u3002
2.6. SuperCopy
\u89E3\u9664\u6587\u672C\u590D\u5236\u7981\u6B62\u3002

3. \u5F00\u53D1\u7C7B
3.1. FeHelper(\u524D\u7AEF\u52A9\u624B)
JSON \u4EE3\u7801\u7F8E\u5316\u3002
`,excerpt:"",url:"/posts\\Tools\\ext-browser"},{title:"VsCode \u63D2\u4EF6\u5206\u4EAB",content:`1. Setting Sync
\u901A\u8FC7 GitHub \u8D26\u53F7\u540C\u6B65 VsCode \u8BBE\u7F6E\u3002
2. Code Runner
\u4E00\u952E\u8FD0\u884C\u4EE3\u7801\u3002
`,excerpt:"",url:"/posts\\Tools\\ext-vscode"},{title:"\u9AD8\u6548\u7387 Windows \u8F6F\u4EF6",content:`1. QTTabBar
\u8D44\u6E90\u7BA1\u7406\u5668\u589E\u5F3A\u8F6F\u4EF6\uFF0C\u652F\u6301\u591A\u6807\u7B7E\u9875\u7BA1\u7406\uFF0C\u50CF\u4F7F\u7528\u6D4F\u89C8\u5668\u4E00\u6837\u4F7F\u7528\u8D44\u6E90\u7BA1\u7406\u5668\u3002
2. Geek
\u5378\u8F7D\u8F6F\u4EF6\uFF0C\u540C\u65F6\u6E05\u7406\u6CE8\u518C\u8868\u548C\u6B8B\u7559\u7684\u6587\u4EF6\u5939\u3002
`,excerpt:"",url:"/posts\\Tools\\sf-win"},{title:"Vue3 \u7EC4\u4EF6\u901A\u4FE1",content:`1. \u4E0A\u4E0B\u7EA7\u7EC4\u4EF6\u901A\u4FE1
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
`,excerpt:"",url:"/posts\\Vue\\v3-model"}];const La={class:"input-group"},Ta=i("i",{class:"fa fa-search"},null,-1),Ea={class:"result"},Pa=["href"],Ma=["innerHTML"],Aa=["innerHTML"],Na={key:0,class:"empty"},Ia=i("i",{class:"fa fa-meh-o"},null,-1),ja=j(" No Data "),Ba=[Ia,ja],Ra=_({__name:"Search",setup(t){const{theme:e}=C(),n=A("");let o=F([]);const s=v(()=>!!(o.length||n.value));st(()=>{r(n.value)});function r(u){o.length=0,u.trim()!==""&&qa.forEach(g=>{const m=JSON.parse(JSON.stringify(g)),$=new RegExp(u,"ig"),L=m.title.match($),y=m.content.match($);L&&(m.title=l(u,m.title)),y&&(m.content=l(u,m.content)),(L||y)&&o.push(m)})}const l=(u,g)=>{const m=new RegExp(u,"ig");return g.replace(m,`<span class="search-highlight">${u}</span>`)},d=()=>{n.value=""};return(u,g)=>a(e).search?(c(),p("div",{key:0,class:N(["search-wrapper",a(s)?"open":""])},[i("div",La,[Ta,dt(i("input",{type:"text",placeholder:"Search","onUpdate:modelValue":g[0]||(g[0]=m=>n.value=m)},null,512),[[ln,n.value]]),n.value?(c(),p("i",{key:0,class:"fa fa-trash",onClick:d})):f("",!0)]),i("ul",Ea,[(c(!0),p(q,null,M(a(o),m=>(c(),p("li",{key:m.title},[i("a",{href:m.url,onClick:d},[i("p",{innerHTML:m.title,class:"title"},null,8,Ma),i("p",{innerHTML:m.content,class:"content"},null,8,Aa)],8,Pa)]))),128)),!a(o).length&&n.value!==""?(c(),p("li",Na,Ba)):f("",!0)])],2)):f("",!0)}}),Da=_({__name:"PostList",props:{posts:Array},setup(t){const e=A("");return(n,o)=>(c(),p(q,null,[b(Ra,{filterKey:e.value,"onUpdate:filterKey":o[0]||(o[0]=s=>e.value=s)},null,8,["filterKey"]),i("div",null,[(c(!0),p(q,null,M(t.posts,(s,r)=>(c(),E(Sa,{key:r,article:s},null,8,["article"]))),128))])],64))}});const Fa={class:"pagination"},Ha=["href"],Oa=["href"],Va=["href"],Ua=_({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(c(),p("div",Fa,[t.current>1?(c(),p("a",{key:0,class:"link",href:a(P)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,Ha)):f("",!0),(c(!0),p(q,null,M(t.pageNum,o=>(c(),p("a",{class:N(["link",{active:t.current===o}]),key:o,href:a(P)(o===1?"/index.html":`/page_${o}.html`)},h(o),11,Oa))),128)),t.current<t.pageNum?(c(),p("a",{key:1,class:"link",href:a(P)(`/page_${t.current+1}.html`)},"Next",8,Va)):f("",!0)]))}});var Ga=x(Ua,[["__scopeId","data-v-653fd1d2"]]);const za=_({__name:"index",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=F([]);return n=v(()=>{var s;return(((s=X(e).posts)==null?void 0:s.value)||[]).map(r=>{const l=JSON.parse(JSON.stringify(r)),d=l.frontMatter.date;return l.frontMatter.dateArr=d.split("-"),l})}),I(()=>{Ur()}),(o,s)=>(c(),p(q,null,[b(Da,{posts:a(n)},null,8,["posts"]),b(Ga,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});const Ja=t=>(R("data-v-072447f6"),t=t(),D(),t),Wa={class:"loading"},Xa={class:"loading-svg hover",width:"100",height:"100",viewBox:"0 0 40 60"},Ya=Ja(()=>i("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1)),Qa={class:"text",x:"0",y:"45",fill:"#fff"},Ka=_({__name:"Loading",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(c(),p("div",Wa,[(c(),p("svg",Xa,[Ya,i("text",Qa,h(t.msg.value),1)]))]))}});var Za=x(Ka,[["__scopeId","data-v-072447f6"]]);const lt=F({msg:"Loading..."});let ct;const he={show(t=lt.msg){lt.msg=t,ct=Zt(Za,{...X(lt)}).mount(document.createElement("div")).$el,document.body.appendChild(ct)},hide(){document.body.removeChild(ct)},install(t){t.config.globalProperties.loading=he}};var ot={...Cs,Layout:pa,async enhanceApp({app:t,router:e,siteData:n}){t.component("Page",za),t.use(he)}};const ut=new Set,fe=()=>document.createElement("link"),ti=t=>{const e=fe();e.rel="prefetch",e.href=t,document.head.appendChild(e)},ei=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let Z;const ni=z&&(Z=fe())&&Z.relList&&Z.relList.supports&&Z.relList.supports("prefetch")?ti:ei;function oi(){if(!z||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(l=>{if(l.isIntersecting){const d=l.target;n.unobserve(d);const{pathname:u}=d;if(!ut.has(u)){ut.add(u);const g=Yt(u);ni(g)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:l,hostname:d,pathname:u}=r,g=u.match(/\.\w+$/);g&&g[0]!==".html"||l!=="_blank"&&d===location.hostname&&(u!==location.pathname?n.observe(r):ut.add(u))})})};I(o);const s=V();Y(()=>s.path,o),Q(()=>{n&&n.disconnect()})}const si=_({setup(t,{slots:e}){const n=A(!1);return I(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),ri=ot.NotFound||(()=>"404 Not Found"),ai={name:"VitePressApp",setup(){const{site:t}=C();return I(()=>{Y(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),oi(),()=>G(ot.Layout)}};function ii(){const t=ci(),e=li();e.provide(Be,t);const n=Re(t.route);return e.provide(De,n),z&&pn(t.route,n.site),e.component("Content",Fe),e.component("ClientOnly",si),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),ot.enhanceApp&&ot.enhanceApp({app:e,router:t,siteData:He}),{app:e,router:t}}function li(){return dn(ai)}function ci(){let t=z,e;return je(n=>{let o=Yt(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),z?(t=!1,Vt(()=>import(o),[])):require(o)},ri)}if(z){const{app:t,router:e}=ii();e.go().then(()=>{t.mount("#app")})}export{Rt as N,ii as createApp};
