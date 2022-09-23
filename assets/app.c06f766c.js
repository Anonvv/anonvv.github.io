import{i as X,c as _e,a as ut,b as fe,t as yt,d as me,e as ge,f as ve,g as be,h as ye,j as jt,k as xe,l as $e,m as we,n as Rt,o as ke,w as dt,_ as y,p as m,q as p,r as h,u as i,s as v,v as D,x as f,y as _,z as c,A as Ot,B as L,C as Ut,D as q,E as I,F as P,G as Z,H as N,I as S,J as M,K as g,L as k,M as A,N as tt,O as pt,P as T,Q as Y,R as Le,S as B,T as V,U as at,V as Ce}from"./plugin-vue_export-helper.71d24cb3.js";import{u as $,w as H,a as O,E as Se,_ as Ee,i as z,p as Vt,c as Pe,R as Ne,b as Ae,d as Te,C as Me,s as qe}from"./Page.8127f8f8.js";const Ie="modulepreload",xt={},De="/",et=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${De}${s}`,s in xt)return;xt[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ie,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},He="http://www.w3.org/2000/svg",R=typeof document!="undefined"?document:null,$t=R&&R.createElement("template"),Fe={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e?R.createElementNS(He,t):R.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>R.createTextNode(t),createComment:t=>R.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>R.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,o,r){const a=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{$t.innerHTML=s?`<svg>${t}</svg>`:t;const l=$t.content;if(s){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Be(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function je(t,e,n){const s=t.style,o=X(n);if(n&&!o){for(const r in n)it(s,r,n[r]);if(e&&!X(e))for(const r in e)n[r]==null&&it(s,r,"")}else{const r=s.display;o?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const wt=/\s*!important$/;function it(t,e,n){if(ut(n))n.forEach(s=>it(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Re(t,e);wt.test(n)?t.setProperty(jt(s),n.replace(wt,""),"important"):t[s]=n}}const kt=["Webkit","Moz","ms"],ot={};function Re(t,e){const n=ot[e];if(n)return n;let s=xe(e);if(s!=="filter"&&s in t)return ot[e]=s;s=$e(s);for(let o=0;o<kt.length;o++){const r=kt[o]+s;if(r in t)return ot[e]=r}return e}const Lt="http://www.w3.org/1999/xlink";function Oe(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lt,e.slice(6,e.length)):t.setAttributeNS(Lt,e,n);else{const r=we(e);n==null||r&&!Rt(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ue(t,e,n,s,o,r,a){if(e==="innerHTML"||e==="textContent"){s&&a(s,o,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const u=n==null?"":n;(t.value!==u||t.tagName==="OPTION")&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Rt(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[zt,Ve]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ct=0;const ze=Promise.resolve(),Ge=()=>{ct=0},Je=()=>ct||(ze.then(Ge),ct=zt());function U(t,e,n,s){t.addEventListener(e,n,s)}function We(t,e,n,s){t.removeEventListener(e,n,s)}function Xe(t,e,n,s,o=null){const r=t._vei||(t._vei={}),a=r[e];if(s&&a)a.value=s;else{const[l,u]=Ye(e);if(s){const d=r[e]=Qe(s,o);U(t,l,d,u)}else a&&(We(t,l,a,u),r[e]=void 0)}}const Ct=/(?:Once|Passive|Capture)$/;function Ye(t){let e;if(Ct.test(t)){e={};let s;for(;s=t.match(Ct);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jt(t.slice(2)),e]}function Qe(t,e){const n=s=>{const o=s.timeStamp||zt();(Ve||o>=n.attached-1)&&ke(Ke(s,n.value),e,5,[s])};return n.value=t,n.attached=Je(),n}function Ke(t,e){if(ut(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const St=/^on[a-z]/,Ze=(t,e,n,s,o=!1,r,a,l,u)=>{e==="class"?Be(t,s,o):e==="style"?je(t,n,s):ve(e)?be(e)||Xe(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tn(t,e,s,o))?Ue(t,e,s,r,a,l,u):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Oe(t,e,s,o))};function tn(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&St.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||St.test(e)&&X(n)?!1:e in t}const Et=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ut(e)?n=>fe(e,n):e};function en(t){t.target.composing=!0}function Pt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nn={created(t,{modifiers:{lazy:e,trim:n,number:s}},o){t._assign=Et(o);const r=s||o.props&&o.props.type==="number";U(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=yt(l)),t._assign(l)}),n&&U(t,"change",()=>{t.value=t.value.trim()}),e||(U(t,"compositionstart",en),U(t,"compositionend",Pt),U(t,"change",Pt))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:o}},r){if(t._assign=Et(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(o||t.type==="number")&&yt(t.value)===e))return;const a=e==null?"":e;t.value!==a&&(t.value=a)}},Nt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):G(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),G(t,!0),s.enter(t)):s.leave(t,()=>{G(t,!1)}):G(t,e))},beforeUnmount(t,{value:e}){G(t,e)}};function G(t,e){t.style.display=e?t._vod:"none"}const Gt=ge({patchProp:Ze},Fe);let J,At=!1;function sn(){return J||(J=me(Gt))}function on(){return J=At?J:_e(Gt),At=!0,J}const Xa=(...t)=>{sn().render(...t)},rn=(...t)=>{const e=on().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=an(s);if(o)return n(o,!0,o instanceof SVGElement)},e};function an(t){return X(t)?document.querySelector(t):t}function cn(t,e){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],l=Math.min(n.length,r.length);for(let u=0;u<l;u++){let d=n[u];const[b,x,C=""]=r[u];if(d.tagName.toLocaleLowerCase()===b){for(const E in x)d.getAttribute(E)!==x[E]&&d.setAttribute(E,x[E]);for(let E=0;E<d.attributes.length;E++){const F=d.attributes[E].name;F in x||d.removeAttribute(F)}d.innerHTML!==C&&(d.innerHTML=C)}else document.head.removeChild(d),d=Tt(r[u]),document.head.append(d);a.push(d)}n.slice(l).forEach(u=>document.head.removeChild(u)),r.slice(l).forEach(u=>{const d=Tt(u);document.head.appendChild(d),a.push(d)}),n=a};dt(()=>{const r=t.data,a=e.value,l=r&&r.title,u=r&&r.description,d=r&&r.frontmatter.head;document.title=(l?l+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",u||a.description),o([...d?un(d):[]])})}function Tt([t,e,n]){const s=document.createElement(t);for(const o in e)s.setAttribute(o,e[o]);return n&&(s.innerHTML=n),s}function ln(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function un(t){return t.filter(e=>!ln(e))}const dn=/#.*$/,pn=/(index)?\.(md|html)$/,Q=/\/$/,hn=/^[a-z]+:/i;function ht(t){return Array.isArray(t)}function _t(t){return hn.test(t)}function _n(t,e){if(e===void 0)return!1;const n=Mt(`/${t.data.relativePath}`),s=Mt(e);return n===s}function Mt(t){return decodeURI(t).replace(dn,"").replace(pn,"")}function fn(t,e){const n=t.endsWith("/"),s=e.startsWith("/");return n&&s?t.slice(0,-1)+e:!n&&!s?`${t}/${e}`:t+e}function lt(t){return/^\//.test(t)?t:`/${t}`}function Jt(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function mn(t){return t===!1||t==="auto"||ht(t)}function gn(t){return t.children!==void 0}function vn(t){return ht(t)?t.length===0:!t}function ft(t,e){if(mn(t))return t;e=lt(e);for(const n in t)if(e.startsWith(lt(n)))return t[n];return"auto"}function Wt(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:Jt(n.link)}),gn(n)&&(e=[...e,...Wt(n.children)]),e),[])}const bn=["href","aria-label"],yn=["src"],xn=m({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:s}=$();return(o,r)=>(p(),h("a",{class:"nav-bar-title",href:i(s),"aria-label":`${i(e).title}, back to home`},[i(n).logo?(p(),h("img",{key:0,class:"logo",src:i(H)(i(n).logo),alt:"Logo"},null,8,yn)):v("",!0),D(" "+f(i(e).title),1)],8,bn))}});var $n=y(xn,[["__scopeId","data-v-7ac13a1e"]]);function wn(){const{site:t,localePath:e,theme:n}=$();return _(()=>{const s=t.value.langs,o=Object.keys(s);if(o.length<2)return null;const a=O().path.replace(e.value,""),l=o.map(d=>({text:s[d].label,link:`${d}${a}`}));return{text:n.value.selectText||"Languages",items:l}})}const kn=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function Ln(){const{site:t}=$();return _(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const s=Cn(n);return{text:Sn(s,e.repoLabel),link:s}})}function Cn(t){return Se.test(t)?t:`https://github.com/${t}`}function Sn(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=kn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function Xt(t){const e=O(),n=_t(t.value.link);return{props:_(()=>{const o=qt(`/${e.data.relativePath}`);let r=!1;if(t.value.activeMatch)r=new RegExp(t.value.activeMatch).test(o);else{const a=qt(t.value.link);r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?t.value.link:H(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function qt(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const En={},Pn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Nn=c("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),An=c("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Tn=[Nn,An];function Mn(t,e){return p(),h("svg",Pn,Tn)}var mt=y(En,[["render",Mn]]);const qn={class:"nav-link"},In=m({__name:"NavLink",props:{item:null},setup(t){const n=Ot(t),{props:s,isExternal:o}=Xt(n.item);return(r,a)=>(p(),h("div",qn,[c("a",Ut({class:"item"},i(s)),[D(f(t.item.text)+" ",1),i(o)?(p(),L(mt,{key:0})):v("",!0)],16)]))}});var It=y(In,[["__scopeId","data-v-49fe041d"]]);const Dn=t=>(q("data-v-07381bdb"),t=t(),I(),t),Hn={class:"nav-dropdown-link-item"},Fn=Dn(()=>c("span",{class:"arrow"},null,-1)),Bn={class:"text"},jn={class:"icon"},Rn=m({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=Ot(t),{props:s,isExternal:o}=Xt(n.item);return(r,a)=>(p(),h("div",Hn,[c("a",Ut({class:"item"},i(s)),[Fn,c("span",Bn,f(t.item.text),1),c("span",jn,[i(o)?(p(),L(mt,{key:0})):v("",!0)])],16)]))}});var On=y(Rn,[["__scopeId","data-v-07381bdb"]]);const Un=["aria-label"],Vn={class:"button-text"},zn={class:"dialog"},Gn=m({__name:"NavDropdownLink",props:{item:null},setup(t){const e=O(),n=P(!1);Z(()=>e.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(p(),h("div",{class:N(["nav-dropdown-link",{open:n.value}])},[c("button",{class:"button","aria-label":t.item.ariaLabel,onClick:s},[c("span",Vn,f(t.item.text),1),c("span",{class:N(["button-arrow",n.value?"down":"right"])},null,2)],8,Un),c("ul",zn,[(p(!0),h(S,null,M(t.item.items,a=>(p(),h("li",{key:a.text,class:"dialog-item"},[g(On,{item:a},null,8,["item"])]))),128))])],2))}});var Dt=y(Gn,[["__scopeId","data-v-18d75f62"]]);const Jn={key:0,class:"nav-links"},Wn={key:1,class:"item"},Xn={key:2,class:"item"},Yn=m({__name:"NavLinks",setup(t){const{theme:e}=$(),n=wn(),s=Ln(),o=_(()=>e.value.nav||s.value||n.value);return(r,a)=>i(o)?(p(),h("nav",Jn,[i(e).nav?(p(!0),h(S,{key:0},M(i(e).nav,l=>(p(),h("div",{key:l.text,class:"item"},[l.items?(p(),L(Dt,{key:0,item:l},null,8,["item"])):(p(),L(It,{key:1,item:l},null,8,["item"]))]))),128)):v("",!0),i(n)?(p(),h("div",Wn,[g(Dt,{item:i(n)},null,8,["item"])])):v("",!0),i(s)?(p(),h("div",Xn,[g(It,{item:i(s)},null,8,["item"])])):v("",!0)])):v("",!0)}});var Yt=y(Yn,[["__scopeId","data-v-35b91e7e"]]);const Qn={emits:["toggle"]},Kn=c("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[c("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Zn=[Kn];function ts(t,e,n,s,o,r){return p(),h("div",{class:"sidebar-button",onClick:e[0]||(e[0]=a=>t.$emit("toggle"))},Zn)}var es=y(Qn,[["render",ts]]);const ns=t=>(q("data-v-40587210"),t=t(),I(),t),ss={class:"nav-bar"},os=ns(()=>c("div",{class:"flex-grow"},null,-1)),rs={class:"nav"},as=m({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(p(),h("header",ss,[g(es,{onToggle:n[0]||(n[0]=s=>e.$emit("toggle"))}),g($n),os,c("div",rs,[g(Yt)]),k(e.$slots,"search",{},void 0,!0)]))}});var is=y(as,[["__scopeId","data-v-40587210"]]);function cs(){let t=null,e=null;const n=hs(s,300);function s(){const a=ls(),l=us(a);for(let u=0;u<l.length;u++){const d=l[u],b=l[u+1],[x,C]=ps(u,d,b);if(x){history.replaceState(null,document.title,C||" "),o(C);return}}}function o(a){if(r(e),r(t),e=document.querySelector(`.sidebar a[href="${a}"]`),!e)return;e.classList.add("active");const l=e.closest(".sidebar-links > ul > li");l&&l!==e.parentElement?(t=l.querySelector("a"),t&&t.classList.add("active")):t=null}function r(a){a&&a.classList.remove("active")}A(()=>{s(),window.addEventListener("scroll",n)}),tt(()=>{o(decodeURIComponent(location.hash))}),pt(()=>{window.removeEventListener("scroll",n)})}function ls(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function us(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function ds(){return document.querySelector(".nav-bar").offsetHeight}function Ht(t){const e=ds();return t.parentElement.offsetTop-e-15}function ps(t,e,n){const s=window.scrollY;return t===0&&s===0?[!0,null]:s<Ht(e)?[!1,null]:!n||s<Ht(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function hs(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),s=!0,setTimeout(()=>{s=!1},e))}}function _s(){const t=O(),{site:e}=$();return cs(),_(()=>{const n=t.data.headers,s=t.data.frontmatter.sidebar,o=t.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Ft(n,o);const r=ft(e.value.themeConfig.sidebar,t.data.relativePath);return r===!1?[]:r==="auto"?Ft(n,o):r})}function Ft(t,e){const n=[];if(t===void 0)return[];let s;return t.forEach(({level:o,title:r,slug:a})=>{if(o-1>e)return;const l={text:r,link:`#${a}`};o===2?(s=l,n.push(l)):s&&(s.children||(s.children=[])).push(l)}),n}const Qt=t=>{const e=O(),{site:n,frontmatter:s}=$(),o=t.depth||1,r=s.value.sidebarDepth||1/0,a=e.data.headers,l=t.item.text,u=fs(n.value.base,t.item.link),d=t.item.children,b=_n(e,t.item.link),x=o<r?Kt(b,d,a,o+1):null;return T("li",{class:"sidebar-link"},[T(u?"a":"p",{class:{"sidebar-link-item":!0,active:b},href:u},l),x])};function fs(t,e){return e===void 0||e.startsWith("#")?e:fn(t,e)}function Kt(t,e,n,s=1){return e&&e.length>0?T("ul",{class:"sidebar-links"},e.map(o=>T(Qt,{item:o,depth:s}))):t&&n?Kt(!1,ms(n),void 0,s):null}function ms(t){return Zt(gs(t))}function gs(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function Zt(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?Zt(e.children):void 0}))}const vs={key:0,class:"sidebar-links"},bs=m({__name:"SideBarLinks",setup(t){const e=_s();return(n,s)=>i(e).length>0?(p(),h("ul",vs,[(p(!0),h(S,null,M(i(e),o=>(p(),L(i(Qt),{item:o},null,8,["item"]))),256))])):v("",!0)}});const ys=m({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(p(),h("aside",{class:N(["sidebar",{open:t.open}])},[g(Yt,{class:"nav"}),k(e.$slots,"sidebar-top",{},void 0,!0),g(bs),k(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var xs=y(ys,[["__scopeId","data-v-17c48e2f"]]);const $s=/bitbucket.org/;function ws(){const{page:t,theme:e,frontmatter:n}=$(),s=_(()=>{const{repo:r,docsDir:a="",docsBranch:l="master",docsRepo:u=r,editLinks:d}=e.value,b=n.value.editLink!=null?n.value.editLink:d,{relativePath:x}=t.value;return!b||!x||!r?null:ks(r,u,a,l,x)}),o=_(()=>e.value.editLinkText||"Edit this page");return{url:s,text:o}}function ks(t,e,n,s,o){return $s.test(t)?Cs(t,e,n,s,o):Ls(t,e,n,s,o)}function Ls(t,e,n,s,o){return(_t(e)?e:`https://github.com/${e}`).replace(Q,"")+`/edit/${s}/`+(n?n.replace(Q,"")+"/":"")+o}function Cs(t,e,n,s,o){return(_t(e)?e:t).replace(Q,"")+`/src/${s}/`+(n?n.replace(Q,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const Ss={class:"edit-link"},Es=["href"],Ps=m({__name:"EditLink",setup(t){const{url:e,text:n}=ws();return(s,o)=>(p(),h("div",Ss,[i(e)?(p(),h("a",{key:0,class:"link",href:i(e),target:"_blank",rel:"noopener noreferrer"},[D(f(i(n))+" ",1),g(mt,{class:"icon"})],8,Es)):v("",!0)]))}});var Ns=y(Ps,[["__scopeId","data-v-55695e90"]]);const As={key:0,class:"last-updated"},Ts={class:"prefix"},Ms={class:"datetime"},qs=m({__name:"LastUpdated",setup(t){const{theme:e,page:n}=$(),s=_(()=>{const a=e.value.lastUpdated;return a!==void 0&&a!==!1}),o=_(()=>{const a=e.value.lastUpdated;return a===!0?"Last Updated":a}),r=P("");return A(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,l)=>i(s)?(p(),h("p",As,[c("span",Ts,f(i(o))+":",1),c("span",Ms,f(r.value),1)])):v("",!0)}});var Is=y(qs,[["__scopeId","data-v-30c3cbb4"]]);const Ds={class:"page-footer"},Hs={class:"edit"},Fs={class:"updated"},Bs=m({__name:"PageFooter",setup(t){return(e,n)=>(p(),h("footer",Ds,[c("div",Hs,[g(Ns)]),c("div",Fs,[g(Is)])]))}});var js=y(Bs,[["__scopeId","data-v-5c96fb00"]]);function Rs(){const{page:t,theme:e}=$(),n=_(()=>Jt(lt(t.value.relativePath))),s=_(()=>{const u=ft(e.value.sidebar,n.value);return ht(u)?Wt(u):[]}),o=_(()=>s.value.findIndex(u=>u.link===n.value)),r=_(()=>{if(e.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=_(()=>{if(e.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),l=_(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:l}}const Os={},Us={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Vs=c("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),zs=[Vs];function Gs(t,e){return p(),h("svg",Us,zs)}var Js=y(Os,[["render",Gs]]);const Ws={},Xs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ys=c("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Qs=[Ys];function Ks(t,e){return p(),h("svg",Xs,Qs)}var Zs=y(Ws,[["render",Ks]]);const to={key:0,class:"next-and-prev-link"},eo={class:"container"},no={class:"prev"},so=["href"],oo={class:"text"},ro={class:"next"},ao=["href"],io={class:"text"},co=m({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:s}=Rs();return(o,r)=>i(e)?(p(),h("div",to,[c("div",eo,[c("div",no,[i(n)?(p(),h("a",{key:0,class:"link",href:i(H)(i(n).link)},[g(Js,{class:"icon icon-prev"}),c("span",oo,f(i(n).text),1)],8,so)):v("",!0)]),c("div",ro,[i(s)?(p(),h("a",{key:0,class:"link",href:i(H)(i(s).link)},[c("span",io,f(i(s).text),1),g(Zs,{class:"icon icon-next"})],8,ao)):v("",!0)])])])):v("",!0)}});var lo=y(co,[["__scopeId","data-v-e65a9748"]]);const uo={class:"page"},po={class:"container"},ho=m({__name:"Page",setup(t){return(e,n)=>{const s=Y("Content");return p(),h("main",uo,[c("div",po,[k(e.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(js),g(lo),k(e.$slots,"bottom",{},void 0,!0)])])}}});var _o=y(ho,[["__scopeId","data-v-8fcebc32"]]);const fo={key:0,id:"ads-container"},mo=m({__name:"Layout",setup(t){const e=Le(()=>et(()=>import("./Home.7064ff5b.js"),["assets/Home.7064ff5b.js","assets/Page.8127f8f8.js","assets/plugin-vue_export-helper.71d24cb3.js"])),n=()=>null,s=n,o=n,r=n,a=O(),{site:l,page:u,theme:d,frontmatter:b}=$(),x=_(()=>!!b.value.customLayout),C=_(()=>!!b.value.home),E=_(()=>Object.keys(l.value.langs).length>1),F=_(()=>{const w=d.value;return b.value.navbar===!1||w.navbar===!1?!1:l.value.title||w.logo||w.repo||w.nav}),j=P(!1),le=_(()=>b.value.home||b.value.sidebar===!1?!1:!vn(ft(d.value.sidebar,a.data.relativePath))),st=w=>{j.value=typeof w=="boolean"?w:!j.value},ue=st.bind(null,!1);Z(a,ue);const de=_(()=>[{"no-navbar":!F.value,"sidebar-open":j.value,"no-sidebar":!le.value}]);return(w,bt)=>{const pe=Y("Content"),he=Y("Debug");return p(),h(S,null,[c("div",{class:N(["theme",i(de)])},[i(F)?(p(),L(is,{key:0,onToggle:st},{search:B(()=>[k(w.$slots,"navbar-search",{},()=>[i(d).algolia?(p(),L(i(r),{key:0,options:i(d).algolia,multilang:i(E)},null,8,["options","multilang"])):v("",!0)])]),_:3})):v("",!0),g(xs,{open:j.value},{"sidebar-top":B(()=>[k(w.$slots,"sidebar-top")]),"sidebar-bottom":B(()=>[k(w.$slots,"sidebar-bottom")]),_:3},8,["open"]),c("div",{class:"sidebar-mask",onClick:bt[0]||(bt[0]=Ga=>st(!1))}),i(x)?(p(),L(pe,{key:1})):i(C)?k(w.$slots,"home",{key:2},()=>[g(i(e),null,{hero:B(()=>[k(w.$slots,"home-hero")]),features:B(()=>[k(w.$slots,"home-features")]),footer:B(()=>[k(w.$slots,"home-footer")]),_:3})]):(p(),L(_o,{key:3},{top:B(()=>[k(w.$slots,"page-top-ads",{},()=>[i(d).carbonAds&&i(d).carbonAds.carbon?(p(),h("div",fo,[(p(),L(i(s),{key:"carbon"+i(u).relativePath,code:i(d).carbonAds.carbon,placement:i(d).carbonAds.placement},null,8,["code","placement"]))])):v("",!0)]),k(w.$slots,"page-top")]),bottom:B(()=>[k(w.$slots,"page-bottom"),k(w.$slots,"page-bottom-ads",{},()=>[i(d).carbonAds&&i(d).carbonAds.custom?(p(),L(i(o),{key:"custom"+i(u).relativePath,code:i(d).carbonAds.custom,placement:i(d).carbonAds.placement},null,8,["code","placement"])):v("",!0)])]),_:3}))],2),g(he)],64)}}}),go={class:"theme"},vo=c("h1",null,"404",-1),bo=["href"],yo=m({__name:"NotFound",setup(t){const{site:e}=$(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(p(),h("div",go,[vo,c("blockquote",null,f(s()),1),c("a",{href:i(e).base,"aria-label":"go to home"},"Take me home.",8,bo)]))}}),xo={Layout:mo,NotFound:yo};class $o{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class gt{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=gt.getPoint(this.dustQuantity);for(let n of e){const s=new $o;this.buildDust(n[0],n[1],s),this.dustArr.push(s)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let s of e)if(s.x<0||s.y<0){const o=this.width,r=Math.floor(Math.random()*window.innerHeight);s.x=o,s.y=r,this.buildDust(o,r,s)}else{const o=s.x-s.vx,r=s.y-s.vy;this.buildDust(o,r,s)}}buildDust(e,n,s){const o=this.ctx;e&&(s.x=e),n&&(s.y=n),o&&(o.beginPath(),o.shadowBlur=s.shadowBlur,o.shadowColor=s.color,o.shadowOffsetX=s.shadowX,o.shadowOffsetY=s.shadowY,o.ellipse(s.x,s.y,s.radiusX,s.radiusY,s.rotation,0,Math.PI*2),o.closePath(),o.fillStyle=s.color,o.fill())}resize(){const e=this.canvas,n=window.innerWidth,s=window.innerHeight;this.width=n,this.height=s,this.dustQuantity=Math.floor((n+s)/38),e!==void 0&&(e.width=n,e.height=s)}static getPoint(e=1){let n=[];for(let s=0;s<e;s++){const o=Math.floor(Math.random()*window.innerWidth),r=Math.floor(Math.random()*window.innerHeight);n.push([o,r])}return n}}var wo=[{title:"Hello World",content:`
`,excerpt:"",url:"/posts\\game\\arknights\\hello-world"},{title:"\u3010NEW\u3011\u5C0F\u9ED1",content:`
`,excerpt:"",url:"/posts\\game\\arknights\\lxh"},{title:"\u3010\u4E09\u9636\u301110\u5A1C",content:`
`,excerpt:"",url:"/posts\\game\\path to nowhere\\10n"},{title:"Build a Free CDN\u3010Github + JSDelivr\u3011",content:`1. Create a public repository

2. Create a new release

3. Assets request
url template: https://cdn.jsdelivr.net/gh/user/repo@version/file
`,excerpt:"",url:"/posts\\tech\\cdn-github"},{title:"High-Frequency Git CMD",content:`1. Global config
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

`,excerpt:"",url:"/posts\\tech\\git\\cmd"},{title:"Multi-User Configuration",content:`Add the file config to ~/.ssh.
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

`,excerpt:"",url:"/posts\\tech\\git\\uconfig"},{title:"HTML Tag <object> and <embed>",content:`The two tags are both able to render media object such as audio, video, pdf and flash.Due to the compatibility depending on different browsers, we should mainly use &lt;object&gt;.
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

`,excerpt:"",url:"/posts\\tech\\html\\embed-object"},{title:"JS \u8FD4\u56DE\u9875\u9762\u9876\u90E8\u529F\u80FD",content:`1. \u73AF\u5883
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

`,excerpt:"",url:"/posts\\tech\\js\\backtop"},{title:"One-click Copy",content:`1. Definition
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

`,excerpt:"",url:"/posts\\tech\\js\\copy"},{title:"NPM Registry Configuration",content:`1. By NPM config cmd
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
`,excerpt:"",url:"/posts\\tech\\npm-reg"},{title:"PicGo \u514D\u8D39\u56FE\u5E8A\u642D\u5EFA",content:`1. \u73AF\u5883

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
`,excerpt:"",url:"/posts\\tech\\picgo"},{title:"VitePress \u751F\u6210\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883

Vue3
TypeScript

2. \u601D\u8DEF

\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u83B7\u53D6\u6587\u7AE0\u5BB9\u5668\uFF0C\u67E5\u627E\u5BB9\u5668\u5185\u7B2C\u4E00\u7EA7\u7684 h1-h6 \u6807\u9898\u5143\u7D20\u8282\u70B9\u5217\u8868\uFF1B
\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5217\u8868\uFF0C\u904D\u5386\u8282\u70B9\u5217\u8868\uFF0C\u83B7\u53D6\u8282\u70B9\u4FE1\u606F(id\u3001\u6807\u7B7E\u540D\u79F0nodeName\u3001\u6807\u9898\u5185\u5BB9innerTEXT\u3001\u81EA\u5B9A\u4E49\u4E0B\u7EA7\u5217\u8868)\uFF0C\u5C01\u88C5\u4E3A\u5BF9\u8C61\u4FDD\u5B58\u5230\u521B\u5EFA\u7684\u8868\u4E2D\uFF1B\u901A\u8FC7childNodes\u67E5\u8BE2\u5143\u7D20\u4E0B\u7EA7\u5143\u7D20\uFF0C\u5982\u679C\u5305\u542B\u4E0B\u7EA7\u6807\u9898\uFF0C\u7EE7\u7EED\u9012\u5F52\uFF0C\u5C06\u7ED3\u679C\u4FDD\u5B58\u5230\u4E0B\u7EA7\u5217\u8868\u4E2D\uFF1B
\u62FF\u5230\u683C\u5F0F\u5316\u540E\u7684\u6570\u636E\uFF0C\u9012\u5F52\u521B\u5EFA\u76EE\u5F55\u7EC4\u4EF6\uFF0C\u6BCF\u4E2A\u63A7\u4EF6\u9700\u8981\u5305\u542Ba\u6807\u7B7E\uFF0C\u5C06href\u7ED1\u5B9Aid\uFF0C\u4EE5\u5B9E\u73B0\u951A\u70B9\u8DF3\u8F6C\u3002

3. \u5B9E\u73B0
1. \u5DE5\u5177\u51FD\u6570\uFF0C\u83B7\u53D6\u6587\u7AE0\u6807\u9898\u6811\u5F62\u5217\u8868
// util.ts

/**
 * \u83B7\u53D6\u6587\u7AE0\u76EE\u5F55\u6811\u5F62\u5217\u8868
 * @param parent \u7236\u7EA7\u5BB9\u5668
 * @returns \u6807\u9898\u6811
 */
export const getCatalogTree = (parent: HTMLElement): Array&lt;ICataItem&gt; =&gt; {
    // \u7B2C\u4E00\u5C42\u6807\u9898
    const children: NodeList = parent.childNodes as NodeList
    return loop(children)
    /**
     * \u9012\u5F52\u904D\u5386\u6807\u9898\u8282\u70B9
     * @param nodes \u6807\u9898\u8282\u70B9\u96C6\u5408
     * @returns \u6807\u9898\u6811
     */
    function loop(nodes: NodeList): Array&lt;ICataItem&gt; {
        if (!nodes || !nodes.length) return []
        // \u6807\u9898\u6811
        const titleList: Array&lt;ICataItem&gt; = []
        // \u8FC7\u6EE4\u51FA\u6807\u9898\u8282\u70B9
        const hNodes: Node[] = Array.from(nodes).filter((item: Node) =&gt; {
            // \u5339\u914Dh1-h6
            const reg = /^H+/ig;
            return reg.test(item.nodeName)
        })
        // \u904D\u5386\u6807\u9898\u8282\u70B9
        for (let i = 0; i &lt; hNodes.length; i++) {
            const item: Node = hNodes[i];
            titleList.push({
                nodeName: item.nodeName, 
                text: item.innerText,
                id: item.id,
                child: loop(item.childNodes) // \u9012\u5F52\u4E0B\u7EA7\u6807\u9898\u8282\u70B9
            })
        }
        return titleList
    }
}

\u81EA\u5B9A\u4E49\u6570\u636E\u63A5\u53E3
// catalog.d.ts

interface ICataItem {
    nodeName: string, // \u6807\u7B7E\u540D
    text: string, // \u6807\u9898\u5185\u5BB9
    id: string, // \u6807\u9898id
    child: Array&lt;ICataItem&gt; // \u4E0B\u7EA7\u6807\u9898
}

2. \u9012\u5F52\u521B\u5EFA\u89C6\u56FE\u7EC4\u4EF6
\u56E0\u4E3A\u6807\u7B7E\u540D\u672A\u77E5\uFF0C\u9700\u8981\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6\u9012\u5F52\u3002
// catalog.ts

import { h } from &#39;vue&#39;
// \u521B\u5EFA\u76EE\u5F55\u865A\u62DF\u8282\u70B9
function createTitleNodes(tree: Array&lt;ICataItem&gt;): VNode[] {
    if (!tree.length) return []
    const list: VNode[] = []
    // \u904D\u5386\u76EE\u5F55\u6811
    tree.forEach(item =&gt; {
        // \u521B\u5EFA\u865A\u62DF\u8282\u70B9
        list.push(
            h(
                item.nodeName,
                { class: &#39;catalog-title&#39; },
                h(&#39;a&#39;, { href: \`#\${item.id}\`, name: item.id }, item.text.slice(0, item.text.length - 1))
            )
        )
        if (item.child?.length) {
            // \u9012\u5F52\u4E0B\u7EA7\u6807\u9898
            list.push(h(item.nodeName, createTitleNodes(item.child)))
        }
    })
    return list
}
const Catalog =  (props: { tree: Array&lt;ICataItem&gt; }) =&gt; {
    const tree = props.tree // \u63A5\u6536\u76EE\u5F55\u6811
    return h(&#39;div&#39;, { class: &#39;catalog&#39; }, createTitleNodes(tree))
}
export default Catalog

vue \u5355\u6587\u4EF6\uFF0C\u76F4\u63A5\u5F15\u5165\u9875\u9762\u4F7F\u7528
&lt;!-- catalog.vue --&gt;
&lt;template&gt;
    &lt;Catalog v-if=&quot;isPost &amp;&amp; cataData.length&quot; :tree=&quot;cataData&quot;&gt;&lt;/Catalog&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { onMounted, reactive, onUpdated, computed } from &quot;vue&quot;;
import { useData } from &#39;vitepress&#39;

import { getCatalogTree } from &#39;./util.ts&#39;
import Catalog from &#39;./catalog.ts&#39;

const { page } = useData()
const cataData: [] = reactive([]) // \u76EE\u5F55\u6811
const isPost: any = computed(() =&gt; page.value.relativePath.includes(&#39;posts&#39;))

onMounted((): void =&gt; {
  init()
}),
// \u521D\u59CB\u5316
const init = (): void =&gt; {
    if (isPost.value) {
        // \u83B7\u53D6\u6B63\u6587\u5BB9\u5668
        const contentDiv: ChildNode = document.getElementById(&#39;content&#39;)?.childNodes[0]
        // \u83B7\u53D6\u76EE\u5F55
        cataData.push(...getCatalogTree(contentDiv))
    }
}
&lt;/script&gt;
&lt;style lang=&quot;sass&quot;&gt;

.catalog
    position: fixed
    right: -18px
    bottom: 0
    width: 200px
    height: auto
    max-height: 40rem
    overflow: auto
    padding: 10px 0
    opacity: .7
    transition: opacity 1s
    &amp;-title
        padding: 0
        font-weight: normal
        background-color: rgba(0,0,0,.1)
        padding: 4px 8px
        width: 100%
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

    @for $i from 1 through 6
        h#{$i}
            margin: 0
            padding-left: ($i * 4) + px
            font-size: (1.8 - $i * 0.2) + rem
&lt;/style&gt;

`,excerpt:"",url:"/posts\\tech\\vitepress\\catalog"},{title:"\u3010VitePress\u3011Live2d \u770B\u677F\u5A18",content:`1. \u73AF\u5883

VitePress

2. \u9879\u76EE\u5730\u5740
live2d-model &#x1F517; 
3. \u65B0\u589E\u4E3B\u9898\u5C5E\u6027
// ~/.vitepress/config.js
themeConfig: {
    // \u81EA\u5B9A\u4E49\u5C5E\u6027
    live2d: true
}

3. \u521B\u5EFA Live2D \u7EC4\u4EF6
// ~/components/L2d/index.ts

import { h, render } from &#39;vue&#39;

export default {
    render() {
        const vnode = h(
            &#39;script&#39;,
            { src: &#39;https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js&#39; }
        )
        render(vnode, document.body)
    },
}

5. \u5F15\u5165\u5230 Layout \u4E2D
&lt;!-- ~/Layout.vue --&gt;

&lt;template&gt;
    &lt;Content /&gt;
    &lt;!-- 2. \u6DFB\u52A0\u5230\u4EFB\u4F55\u4F4D\u7F6E --&gt;
    &lt;L2d v-if=&quot;theme.live2d&quot; /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
// 1. \u5F15\u5165\u7EC4\u4EF6
import L2d from &#39;./L2d/index.ts&#39;
&lt;/script&gt;

6. \u9884\u89C8

`,excerpt:"",url:"/posts\\tech\\vitepress\\l2d"},{title:"VitePress \u5B9E\u73B0\u672C\u5730\u641C\u7D22",content:`1. \u73AF\u5883

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

`,excerpt:"",url:"/posts\\tech\\vitepress\\local-search"},{title:"\u6D4F\u89C8\u5668\u63D2\u4EF6",content:`\u5B89\u88C5\u65B9\u5F0F

\u80FD\u8BBF\u95EE\u63D2\u4EF6\u5E02\u573A\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u63D2\u4EF6\u5E02\u573A\u5B89\u88C5\uFF0C\u65B9\u4FBF\u540C\u6B65\u81F3\u6D4F\u89C8\u5668\u8D26\u53F7\uFF1B
Chrome\uFF1Ahttps://chrome.google.com/webstore/category/extensions
Edge: https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home


\u4E0D\u80FD\u8BBF\u95EE\u63D2\u4EF6\u5E02\u573A\u7684\u7528\u6237\u53EF\u4EE5\u4E0B\u8F7D crx \u6587\u4EF6\u624B\u52A8\u5B89\u88C5\uFF0C\u4F46\u65E0\u6CD5\u540C\u6B65\u5230\u6D4F\u89C8\u5668\u8D26\u53F7\u3002 
\u63D2\u4EF6 crx \u4E0B\u8F7D\uFF1AChrome\u63D2\u4EF6\u7F51, Cnplugins




1. \u5E38\u89C4\u7C7B
1. IGuge Helper(iGG\u8C37\u6B4C\u5B66\u672F\u52A9\u624B)
\u514D\u8D39\u8BBF\u95EE\u8C37\u6B4C\u5B66\u672F\u3001\u8C37\u6B4C\u641C\u7D22\u3001Gmail\u3001\u63D2\u4EF6\u5E02\u573A\u7B49\u8C37\u6B4C\u57FA\u672C\u670D\u52A1\u3002
2. Tampermonkey(\u6CB9\u7334)
\u7528\u6237\u811A\u672C\u7BA1\u7406\uFF0C\u53EF\u4EE5\u5B89\u88C5\u5404\u7C7B\u4E30\u5BCC\u7684\u6269\u5C55\u811A\u672C\u3002
3. AdGuard
\u53BB\u9664\u7F51\u9875\u5E7F\u544A\u3002
4. Grammarly
\u82F1\u6587\u5199\u4F5C\u8BED\u6CD5\u68C0\u9519\u3001\u7EA0\u9519\u548C\u8BC4\u5206\u3002
5. Vimium
\u5168\u952E\u76D8\u64CD\u4F5C\u6D4F\u89C8\u5668\u3002
6. SuperCopy
\u89E3\u9664\u6587\u672C\u590D\u5236\u7981\u6B62\u3002

2. \u5F00\u53D1\u7C7B
1. FeHelper(\u524D\u7AEF\u52A9\u624B)
JSON \u4EE3\u7801\u7F8E\u5316\u3002
`,excerpt:"",url:"/posts\\tool\\browser-plugins"},{title:"\u9AD8\u6548\u7387 Windows \u7CFB\u7EDF\u5DE5\u5177",content:`1. QTTabBar
\u8D44\u6E90\u7BA1\u7406\u5668\u589E\u5F3A\u8F6F\u4EF6\uFF0C\u652F\u6301\u591A\u6807\u7B7E\u9875\u7BA1\u7406\uFF0C\u50CF\u4F7F\u7528\u6D4F\u89C8\u5668\u4E00\u6837\u4F7F\u7528\u8D44\u6E90\u7BA1\u7406\u5668\u3002
2. Geek
\u5378\u8F7D\u8F6F\u4EF6\uFF0C\u540C\u65F6\u6E05\u7406\u6CE8\u518C\u8868\u548C\u6B8B\u7559\u7684\u6587\u4EF6\u5939\u3002
`,excerpt:"",url:"/posts\\tool\\win"}];const ko={class:"result"},Lo=["href"],Co=["innerHTML"],So=["innerHTML"],Eo={key:0,class:"empty"},Po=m({__name:"Search",setup(t){const e=P("");let n=V([]);const s=_(()=>!!(n.length||e.value));dt(()=>{o(e.value)});function o(l){n.length=0,l.trim()!==""&&wo.forEach(u=>{const d=JSON.parse(JSON.stringify(u)),b=new RegExp(l,"ig"),x=d.title.match(b),C=d.content.match(b);x&&(d.title=r(l,d.title)),C&&(d.content=r(l,d.content)),(x||C)&&n.push(d)})}const r=(l,u)=>{const d=new RegExp(l,"ig");return u.replace(d,`<span class="search-highlight">${l}</span>`)},a=()=>{e.value=""};return(l,u)=>(p(),h("div",{class:N(["search-wrapper",i(s)?"open":""])},[at(c("input",{type:"text",placeholder:"Search","onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d)},null,512),[[nn,e.value]]),c("ul",ko,[(p(!0),h(S,null,M(i(n),d=>(p(),h("li",{key:d.title},[c("a",{href:d.url,onClick:a},[c("p",{innerHTML:d.title,class:"title"},null,8,Co),c("p",{innerHTML:d.content,class:"content"},null,8,So)],8,Lo)]))),128)),!i(n).length&&e.value!==""?(p(),h("li",Eo,"Empty")):v("",!0)])],2))}}),No=t=>{const e=t.childNodes;return n(e);function n(s){if(!s||!s.length)return[];const o=[],r=Array.from(s).filter(a=>/^H[1-6]{1,}$/ig.test(a.nodeName));for(let a=0;a<r.length;a++){const l=r[a];o.push({nodeName:l.nodeName,text:l.innerText,id:l.id,child:n(l.childNodes)})}return o}};function te(t){if(!t.length)return[];const e=[];return t.forEach(n=>{var s;e.push(T(n.nodeName,{class:"catalog-title"},T("a",{href:`#${n.id}`,name:n.id},n.text.slice(0,n.text.length-1)))),(s=n.child)!=null&&s.length&&e.push(T(n.nodeName,te(n.child)))}),e}const Ao=t=>{const e=t.tree;return T("div",{class:"catalog"},te(e))};const To=m({__name:"index",setup(t){const{frontmatter:e}=$(),n=_(()=>e.value.page),s=V([]);A(()=>{o()}),tt(()=>{o()});const o=()=>{var r;if(!n.value){const a=(r=document.getElementById("content"))==null?void 0:r.childNodes[0];s.length=0,s.push(...No(a))}};return(r,a)=>!i(n)&&s.length?(p(),L(i(Ao),{key:0,tree:s},null,8,["tree"])):v("",!0)}});const Mo={class:"menu-list"},qo=["href"],Io=m({__name:"index",setup(t){const{theme:e,page:n}=$(),s=e.value.nav,o=_(()=>`/${n.value.relativePath.split(".")[0]}`);return(r,a)=>(p(),h("header",null,[c("nav",null,[c("div",Mo,[(p(!0),h(S,null,M(i(s),l=>(p(),h("a",{href:l.link,key:l.link,class:N(l.link===i(o)?"active":"")},f(l.text),11,qo))),128))]),i(e).search?(p(),L(Po,{key:0})):v("",!0),g(To)])]))}});var Do=y(Io,[["__scopeId","data-v-54f58500"]]);function ee(t){const e={};for(let n=0;n<t.length;n++){const s=t[n],o=s.frontMatter.tags;o&&o.forEach(r=>{e[r]||(e[r]=[]),e[r].push(s)})}return e}function ne(t){const e={};for(let n=0;n<t.length;n++){const s=t[n],o=s.frontMatter.category;o&&o.forEach(r=>{e[r]||(e[r]=[]),e[r].push(s)})}return e}function se(t){const e=[];let n="0",s=-1;for(let o=0;o<t.length;o++){const r=t[o];if(r.frontMatter.date){const a=r.frontMatter.date.split("-")[0];a===n?e[s].push(r):(s++,e[s]=[],e[s].push(r),n=a)}}return e}function Bt(t,e,n){const s=[];for(let o=0;o<t.length;o++){const r=t[o],a=r.frontMatter[n];a&&a.includes(e)&&s.push(r)}return se(s)}const Ho={key:0,class:"social-links"},Fo=["href"],Bo=["title"],jo=m({__name:"SocialLinks",setup(t){const{theme:e}=$();return(n,s)=>i(e).socialLinks.length?(p(),h("div",Ho,[(p(!0),h(S,null,M(i(e).socialLinks,o=>(p(),h("a",{key:o.link,href:o.link,target:"_blank"},[c("i",{class:N(`fa fa-${o.icon}`),title:o.icon},null,10,Bo)],8,Fo))),128))])):v("",!0)}});var Ro=y(jo,[["__scopeId","data-v-78d89ee0"]]);const vt=t=>(q("data-v-b3654d6c"),t=t(),I(),t),Oo={key:0,class:"aside-wrapper"},Uo={href:"/",class:"logo"},Vo=["src"],zo={class:"center dr"},Go={href:"/"},Jo={class:"total"},Wo=["href"],Xo=vt(()=>c("span",{class:"total-title"},"Archives Total",-1)),Yo={class:"total-number"},Qo={class:"total-tags"},Ko=vt(()=>c("span",{class:"total-title"},"Tags:",-1)),Zo={class:"total-number"},tr={class:"total-categories"},er=vt(()=>c("span",{class:"total-title"},"Categories:",-1)),nr={class:"total-number"},sr=m({__name:"index",setup(t){const{site:e,theme:n,frontmatter:s}=$(),o=e.value.title,r=n.value.logo,a=n.value.posts.length,l=_(()=>s.value.sidebar),u=_(()=>Object.keys(ee(n.value.posts)).length),d=_(()=>Object.keys(ne(n.value.posts)).length);return(b,x)=>i(l)?(p(),h("div",Oo,[c("aside",null,[c("div",null,[c("a",Uo,[c("img",{src:i(H)(i(r)),alt:"Logo"},null,8,Vo)]),c("h1",zo,[c("a",Go,"Dr."+f(i(o)),1)]),c("section",Jo,[c("a",{class:"total-archives",href:i(H)("/pages/archives")},[Xo,c("span",Yo,f(i(a)),1)],8,Wo),c("div",Qo,[Ko,c("span",Zo,f(i(u)),1)]),c("div",tr,[er,c("span",nr,f(i(d)),1)])]),g(Ro)])])])):v("",!0)}});var or=y(sr,[["__scopeId","data-v-b3654d6c"]]);class rr{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const o=(await et(()=>import("./message.8b1f9bd0.js"),["assets/message.8b1f9bd0.js","assets/plugin-vue_export-helper.71d24cb3.js","assets/Page.8127f8f8.js"])).default,r=document.createElement("i");r.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(r),r.addEventListener("click",function(){const a=document.createElement("textarea"),l=r.previousElementSibling;a.value=l.innerText,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),o.success("Copied")})})}}function ar(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),s=24*60*60*1e3,o=n/s,r=Math.floor(o),a=(o-r)*24,l=Math.floor(a),u=(a-l)*60,d=Math.floor(u),b=(u-d)*60,x=Math.floor(b);return{day:r,hour:l,minute:d,second:x}}const ir=t=>(q("data-v-62602afa"),t=t(),I(),t),cr={class:"post-header"},lr={class:"title"},ur={class:"info"},dr={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},pr=ir(()=>c("div",{class:"divider"},null,-1)),hr=m({__name:"PostHeader",setup(t){const{frontmatter:e}=$();let n=_(()=>e.value.title),s=_(()=>{const o=e.value.date;return(o?new Date(o).toJSON().split("T")[0]:"").split("-")});return(o,r)=>(p(),h("div",cr,[c("h1",lr,f(i(n)),1),c("div",ur,[c("span",dr,f(i(s)[2])+" / "+f(i(s)[1])+" / "+f(i(s)[0]),1)]),pr]))}});var _r=y(hr,[["__scopeId","data-v-62602afa"]]);const oe=t=>(q("data-v-47e00f47"),t=t(),I(),t),fr={class:"post-footer"},mr=oe(()=>c("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),gr=["href"],vr=oe(()=>c("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),br=["href"],yr=m({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:s}=$();let o=_(()=>{const r=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${r}`});return _(()=>s.value.postFooter),(r,a)=>(p(),h("div",fr,[c("ul",null,[c("li",null,[mr,c("a",{href:i(n).themeConfig.website,target:"_blank"},f(i(n).title),9,gr)]),c("li",null,[vr,c("a",{href:i(o),target:"_blank"},f(i(o)),9,br)])])]))}});var xr=y(yr,[["__scopeId","data-v-47e00f47"]]);const re=t=>(q("data-v-2ea4cd0e"),t=t(),I(),t),$r={class:"prev-next"},wr=re(()=>c("hr",null,null,-1)),kr=["href"],Lr={key:1},Cr=["href"],Sr={key:1},Er=re(()=>c("hr",null,null,-1)),Pr=m({__name:"PrevNext",setup(t){const{theme:e,page:n}=$(),s=_(()=>e.value.posts),o=_(()=>n.value.frontmatter.title);let r=V({regularPath:"",frontMatter:{title:""}}),a=V({regularPath:"",frontMatter:{title:""}});const l=(u,d)=>{d?(u.regularPath=d.regularPath,u.frontMatter.title=d.frontMatter.title):(u.regularPath="",u.frontMatter.title="")};return dt(()=>{const u=s.value.findIndex(d=>d.frontMatter.title===o.value);if(u>-1){const d=s.value[u-1],b=s.value[u+1];l(r,d),l(a,b)}}),(u,d)=>{var b,x,C,E,F,j;return p(),h("div",$r,[wr,c("div",null,[at(c("a",{class:"prev",href:i(H)((b=i(r))==null?void 0:b.regularPath)},[i(e).docFooter.prev.icon?(p(),h("i",{key:0,class:N(`fa fa-${i(e).docFooter.prev.icon}`)},null,2)):v("",!0),i(e).docFooter.prev.text?(p(),h("span",Lr,f(i(e).docFooter.prev.text),1)):v("",!0),D(" "+f((C=(x=i(r))==null?void 0:x.frontMatter)==null?void 0:C.title),1)],8,kr),[[Nt,i(r).regularPath]]),at(c("a",{class:"next",href:i(H)((E=i(a))==null?void 0:E.regularPath)},[D(f((j=(F=i(a))==null?void 0:F.frontMatter)==null?void 0:j.title)+" ",1),i(e).docFooter.next.icon?(p(),h("i",{key:0,class:N(`fa fa-${i(e).docFooter.next.icon}`)},null,2)):v("",!0),i(e).docFooter.next.text?(p(),h("span",Sr,f(i(e).docFooter.next.text),1)):v("",!0)],8,Cr),[[Nt,i(a).regularPath]])]),Er])}}});var Nr=y(Pr,[["__scopeId","data-v-2ea4cd0e"]]);const ae=t=>(q("data-v-cedc88fc"),t=t(),I(),t),Ar=ae(()=>c("i",{class:"fa fa-caret-up"},null,-1)),Tr=ae(()=>c("p",null,"TOP",-1)),Mr=[Ar,Tr],qr=m({__name:"BackTop",setup(t){const e=P(0),n=_(()=>e.value>300?"block":"none");A(()=>{window.addEventListener("scroll",s)}),pt(()=>{window.removeEventListener("scroll",s)});const s=()=>{e.value=document.documentElement.scrollTop},o=()=>{window.scrollTo(0,0)};return(r,a)=>(p(),h("div",{class:"back-top",style:Ce({display:i(n)}),onClick:o},Mr,4))}});var Ir=y(qr,[["__scopeId","data-v-cedc88fc"]]);const nt=t=>(q("data-v-d53ac0c2"),t=t(),I(),t),Dr=nt(()=>c("i",{class:"fa fa-heartbeat mr4"},null,-1)),Hr=nt(()=>c("p",null,[D(" Power With "),c("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),D(" & "),c("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),Fr=nt(()=>c("div",null,[c("span",null,"\xA9"),c("span",null,"2021 to 2022")],-1)),Br=nt(()=>c("div",null,[c("span",null,"ICP"),c("span",null,"\u2014 RHODEISLAND \u2014")],-1)),jr=m({__name:"Footer",setup(t){const{theme:e}=$(),n=P();let s=V({day:0,hour:0,minute:0,second:0});A(()=>{e.value.footer.runtime.enable&&o()});const o=()=>{const r=ar();s.day=r.day,s.hour=r.hour,s.minute=r.minute,s.second=r.second};return(r,a)=>(p(),h("footer",null,[i(e).footer.runtime.enable?(p(),h("p",{key:0,ref_key:"runtimeRef",ref:n},[Dr,D(" "+f(i(s).day)+" days "+f(i(s).hour)+" hours "+f(i(s).minute)+" minutes and "+f(i(s).second)+" seconds ",1)],512)):v("",!0),Hr,i(e).footer.copyright?(p(),h(S,{key:1},[Fr,Br],64)):v("",!0)]))}});var Rr=y(jr,[["__scopeId","data-v-d53ac0c2"]]);const Or=m({__name:"index",setup(t){const{frontmatter:e}=$(),n=_(()=>e.value.page);A(()=>{s()}),tt(()=>{s()});const s=()=>{n.value||new rr};return(o,r)=>{const a=Y("Content");return p(),h("div",{class:N(["content",i(n)?"":"post-content"]),id:"postContent"},[i(n)?v("",!0):(p(),L(_r,{key:0})),g(a,{id:"content"}),i(n)?v("",!0):(p(),h(S,{key:1},[g(xr),g(Nr),g(Ir)],64)),g(Rr)],2)}}}),Ur=()=>T("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"});const Vr={class:"layout"},zr={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Gr=m({__name:"NewLayout",setup(t){const{theme:e}=$();return A(()=>{new gt("canvas-dust")}),(n,s)=>(p(),h(S,null,[c("main",Vr,[g(or,{class:"aside"}),g(Or,{class:"content"}),g(Do,{class:"navbar"})]),i(e).live2d?(p(),L(i(Ur),{key:0})):v("",!0),c("canvas",zr,null,512)],64))}});var Jr=y(Gr,[["__scopeId","data-v-5e919fbc"]]);const Wr={class:"categories"},Xr=c("h1",null,"categories",-1),Yr={class:"list"},Qr=["onClick"],Kr={class:"link",href:"#"},Zr={class:"count"},ta=m({__name:"Categories",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const s=P(t.selected),o=r=>{s.value=r,e("toggle",r)};return(r,a)=>(p(),h("div",Wr,[Xr,c("ul",Yr,[(p(!0),h(S,null,M(t.list,(l,u)=>(p(),h("li",{onClick:d=>o(u),class:N(["item",s.value==u?"active":""])},[c("a",Kr,"# "+f(u)+" #",1),c("span",Zr,f(t.list[u].length),1)],10,Qr))),256))])]))}});const ea=t=>(q("data-v-21fa307c"),t=t(),I(),t),na={class:"tags"},sa=ea(()=>c("h1",null,"tags",-1)),oa={class:"list",itemprop:"keywords"},ra=["onClick"],aa={class:"link",href:"#",rel:"tag"},ia={class:"count"},ca=m({__name:"Tags",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const s=P(t.selected),o=r=>{s.value=r,e("toggle",r)};return(r,a)=>(p(),h("div",na,[sa,c("ul",oa,[(p(!0),h(S,null,M(t.list,(l,u)=>(p(),h("li",{onClick:d=>o(u),class:N(["item",s.value==u?"active":""])},[c("a",aa,f(u),1),c("span",ia,f(t.list[u].length),1)],10,ra))),256))])]))}});var la=y(ca,[["__scopeId","data-v-21fa307c"]]);const ua={class:"archive-list"},da=c("h1",null,"archives",-1),pa={class:"bg"},ha=["href"],_a=m({__name:"ArchiveList",props:{list:Object},setup(t){return(e,n)=>(p(),h("div",ua,[da,t.list.length?(p(!0),h(S,{key:0},M(t.list,s=>(p(),h("div",pa,[c("h2",null,f(s[0].frontMatter.date.split("-")[0]),1),(p(!0),h(S,null,M(s,(o,r)=>(p(),h("div",{key:r,class:"article-item"},[c("time",null,f(o.frontMatter.date.slice(5)),1),c("a",{href:i(H)(o.regularPath)},f(o.frontMatter.title),9,ha)]))),128))]))),256)):v("",!0)]))}});const fa={class:"archive-wrapper"},ma={class:"aside"},ga=m({__name:"index",setup(t){const{theme:e}=$(),n=_(()=>ee(e.value.posts)),s=_(()=>ne(e.value.posts));let o=V({list:se(e.value.posts)}),r=P(""),a=P("");const l=d=>{r.value=d,a.value="",o.list=Bt(e.value.posts,d,"tags")},u=d=>{a.value=d,r.value="",o.list=Bt(e.value.posts,d,"category")};return A(()=>{const d=document.location.hash;if(d){const b=d.substring(1).split("-")[0],x=d.substring(1).split("-")[1];b==="tag"?r.value=x:a.value=x}}),(d,b)=>(p(),h("div",fa,[g(_a,{list:i(o).list,class:"item"},null,8,["list"]),c("div",ma,[g(ta,{list:i(s),onToggle:u,class:"item"},null,8,["list"]),g(la,{list:i(n),onToggle:l,class:"item"},null,8,["list"])])]))}}),va={key:0,id:"comment"},ba=m({__name:"Comment",setup(t){const{theme:e,frontmatter:n}=$(),s=_(()=>n.value.comment);let o=e.value.valine,r=P();P(1),A(async()=>{let l=await et(()=>import("./Valine.min.ad08ee52.js").then(function(u){return u.V}),[]);r.value=l.default,a()}),tt(()=>{a()});const a=()=>{s&&new r.value({el:"#comment",...o})};return(l,u)=>i(s)?(p(),h("div",va)):v("",!0)}});const ie=t=>(q("data-v-71b3bc70"),t=t(),I(),t),ya={class:"feedback"},xa={class:"tc"},$a=D("Feedback "),wa=["id"],ka=ie(()=>c("i",{class:"fa fa-eye mr4"},null,-1)),La=ie(()=>c("i",{class:"leancloud-visitors-count"},"0",-1)),Ca=[ka,La],Sa=m({__name:"Feedback",setup(t){const{page:e}=$();return(n,s)=>(p(),h("div",ya,[c("h1",xa,[$a,c("div",{id:`/${i(e).relativePath.replace(".md",".html")}`,class:"leancloud_visitors","data-flag-title":"Your Article Title"},Ca,8,wa)]),g(ba)]))}});var Ea=y(Sa,[["__scopeId","data-v-71b3bc70"]]);const Pa={},Na={class:"loading-wrap hover",width:"100",height:"100",viewBox:"0 0 40 60"},Aa=c("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1),Ta=c("text",{class:"loading-text",x:"0",y:"45",fill:"#fff"},"Loading...",-1),Ma=[Aa,Ta];function qa(t,e){return p(),h("svg",Na,Ma)}var Ia=y(Pa,[["render",qa]]);var K={...xo,Layout:Jr,enhanceApp({app:t}){t.component("Archives",ga),t.component("Page",Ee),t.component("Feedback",Ea),t.component("Loading",Ia)}};const rt=new Set,ce=()=>document.createElement("link"),Da=t=>{const e=ce();e.rel="prefetch",e.href=t,document.head.appendChild(e)},Ha=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let W;const Fa=z&&(W=ce())&&W.relList&&W.relList.supports&&W.relList.supports("prefetch")?Da:Ha;function Ba(){if(!z||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const l=a.target;n.unobserve(l);const{pathname:u}=l;if(!rt.has(u)){rt.add(u);const d=Vt(u);Fa(d)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:l,pathname:u}=r,d=u.match(/\.\w+$/);d&&d[0]!==".html"||a!=="_blank"&&l===location.hostname&&(u!==location.pathname?n.observe(r):rt.add(u))})})};A(s);const o=O();Z(()=>o.path,s),pt(()=>{n&&n.disconnect()})}const ja=m({setup(t,{slots:e}){const n=P(!1);return A(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Ra=K.NotFound||(()=>"404 Not Found"),Oa={name:"VitePressApp",setup(){const{site:t}=$();return A(()=>{Z(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),Ba(),()=>T(K.Layout)}};function Ua(){const t=za(),e=Va();e.provide(Ne,t);const n=Ae(t.route);return e.provide(Te,n),z&&cn(t.route,n.site),e.component("Content",Me),e.component("ClientOnly",ja),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),K.enhanceApp&&K.enhanceApp({app:e,router:t,siteData:qe}),{app:e,router:t}}function Va(){return rn(Oa)}function za(){let t=z,e;return Pe(n=>{let s=Vt(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),z?(t=!1,et(()=>import(s),[])):require(s)},Ra)}if(z){const{app:t,router:e}=Ua();e.go().then(()=>{t.mount("#app")})}export{It as N,Ua as createApp,Xa as r};
