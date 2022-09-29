import{_ as dt}from"./preload-helper.1c052cf7.js";import{i as K,c as he,a as pt,b as me,t as $t,d as ge,e as _e,f as fe,g as ve,h as be,j as Dt,k as ye,l as xe,m as $e,n as Ot,o as ke,w as nt,p as b,q as u,r as p,u as a,s as _,v as j,x as g,y as f,z as l,A as ht,B as E,C as Ut,D as F,E as H,F as M,G as X,H as N,I as C,J as A,K as v,L as T,M as I,N as Vt,O as Y,P as z,Q as Z,R as we,S as R,T as O,U as it,V as zt,W as Le}from"./framework.d7d875d2.js";import{u as L,w as P,a as U,E as Se,i as G,p as Gt,c as Ce,R as qe,b as Te,d as Ee,C as Pe,s as Ne}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.6b6503a0.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const Me="http://www.w3.org/2000/svg",D=typeof document!="undefined"?document:null,kt=D&&D.createElement("template"),Ae={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const s=e?D.createElementNS(Me,t):D.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:t=>D.createTextNode(t),createComment:t=>D.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>D.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,o,s,r){const i=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{kt.innerHTML=o?`<svg>${t}</svg>`:t;const d=kt.content;if(o){const c=d.firstChild;for(;c.firstChild;)d.appendChild(c.firstChild);d.removeChild(c)}e.insertBefore(d,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ie(t,e,n){const o=t._vtc;o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function je(t,e,n){const o=t.style,s=K(n);if(n&&!s){for(const r in n)lt(o,r,n[r]);if(e&&!K(e))for(const r in e)n[r]==null&&lt(o,r,"")}else{const r=o.display;s?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const wt=/\s*!important$/;function lt(t,e,n){if(pt(n))n.forEach(o=>lt(t,e,o));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=Be(t,e);wt.test(n)?t.setProperty(Dt(o),n.replace(wt,""),"important"):t[o]=n}}const Lt=["Webkit","Moz","ms"],rt={};function Be(t,e){const n=rt[e];if(n)return n;let o=ye(e);if(o!=="filter"&&o in t)return rt[e]=o;o=xe(o);for(let s=0;s<Lt.length;s++){const r=Lt[s]+o;if(r in t)return rt[e]=r}return e}const St="http://www.w3.org/1999/xlink";function Re(t,e,n,o,s){if(o&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(St,e.slice(6,e.length)):t.setAttributeNS(St,e,n);else{const r=$e(e);n==null||r&&!Ot(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Fe(t,e,n,o,s,r,i){if(e==="innerHTML"||e==="textContent"){o&&i(o,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let d=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ot(n):n==null&&c==="string"?(n="",d=!0):c==="number"&&(n=0,d=!0)}try{t[e]=n}catch{}d&&t.removeAttribute(e)}const[Jt,He]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ct=0;const De=Promise.resolve(),Oe=()=>{ct=0},Ue=()=>ct||(De.then(Oe),ct=Jt());function V(t,e,n,o){t.addEventListener(e,n,o)}function Ve(t,e,n,o){t.removeEventListener(e,n,o)}function ze(t,e,n,o,s=null){const r=t._vei||(t._vei={}),i=r[e];if(o&&i)i.value=o;else{const[d,c]=Ge(e);if(o){const h=r[e]=Je(o,s);V(t,d,h,c)}else i&&(Ve(t,d,i,c),r[e]=void 0)}}const Ct=/(?:Once|Passive|Capture)$/;function Ge(t){let e;if(Ct.test(t)){e={};let o;for(;o=t.match(Ct);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dt(t.slice(2)),e]}function Je(t,e){const n=o=>{const s=o.timeStamp||Jt();(He||s>=n.attached-1)&&ke(We(o,n.value),e,5,[o])};return n.value=t,n.attached=Ue(),n}function We(t,e){if(pt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(o=>s=>!s._stopped&&o&&o(s))}else return e}const qt=/^on[a-z]/,Xe=(t,e,n,o,s=!1,r,i,d,c)=>{e==="class"?Ie(t,o,s):e==="style"?je(t,n,o):fe(e)?ve(e)||ze(t,e,n,o,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ye(t,e,o,s))?Fe(t,e,o,r,i,d,c):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),Re(t,e,o,s))};function Ye(t,e,n,o){return o?!!(e==="innerHTML"||e==="textContent"||e in t&&qt.test(e)&&be(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qt.test(e)&&K(n)?!1:e in t}const Tt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pt(e)?n=>me(e,n):e};function Qe(t){t.target.composing=!0}function Et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ke={created(t,{modifiers:{lazy:e,trim:n,number:o}},s){t._assign=Tt(s);const r=o||s.props&&s.props.type==="number";V(t,e?"change":"input",i=>{if(i.target.composing)return;let d=t.value;n&&(d=d.trim()),r&&(d=$t(d)),t._assign(d)}),n&&V(t,"change",()=>{t.value=t.value.trim()}),e||(V(t,"compositionstart",Qe),V(t,"compositionend",Et),V(t,"change",Et))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:s}},r){if(t._assign=Tt(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||o&&t.value.trim()===e||(s||t.type==="number")&&$t(t.value)===e))return;const i=e==null?"":e;t.value!==i&&(t.value=i)}},Pt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):J(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),J(t,!0),o.enter(t)):o.leave(t,()=>{J(t,!1)}):J(t,e))},beforeUnmount(t,{value:e}){J(t,e)}};function J(t,e){t.style.display=e?t._vod:"none"}const Wt=_e({patchProp:Xe},Ae);let W,Nt=!1;function Ze(){return W||(W=ge(Wt))}function tn(){return W=Nt?W:he(Wt),Nt=!0,W}const Za=(...t)=>{Ze().render(...t)},en=(...t)=>{const e=tn().createApp(...t),{mount:n}=e;return e.mount=o=>{const s=nn(o);if(s)return n(s,!0,s instanceof SVGElement)},e};function nn(t){return K(t)?document.querySelector(t):t}function on(t,e){let n=[],o=!0;const s=r=>{if(o){o=!1;return}const i=[],d=Math.min(n.length,r.length);for(let c=0;c<d;c++){let h=n[c];const[m,$,q=""]=r[c];if(h.tagName.toLocaleLowerCase()===m){for(const y in $)h.getAttribute(y)!==$[y]&&h.setAttribute(y,$[y]);for(let y=0;y<h.attributes.length;y++){const k=h.attributes[y].name;k in $||h.removeAttribute(k)}h.innerHTML!==q&&(h.innerHTML=q)}else document.head.removeChild(h),h=Mt(r[c]),document.head.append(h);i.push(h)}n.slice(d).forEach(c=>document.head.removeChild(c)),r.slice(d).forEach(c=>{const h=Mt(c);document.head.appendChild(h),i.push(h)}),n=i};nt(()=>{const r=t.data,i=e.value,d=r&&r.title,c=r&&r.description,h=r&&r.frontmatter.head;document.title=(d?d+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",c||i.description),s([...h?rn(h):[]])})}function Mt([t,e,n]){const o=document.createElement(t);for(const s in e)o.setAttribute(s,e[s]);return n&&(o.innerHTML=n),o}function sn(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function rn(t){return t.filter(e=>!sn(e))}const an=/#.*$/,ln=/(index)?\.(md|html)$/,tt=/\/$/,cn=/^[a-z]+:/i;function mt(t){return Array.isArray(t)}function gt(t){return cn.test(t)}function un(t,e){if(e===void 0)return!1;const n=At(`/${t.data.relativePath}`),o=At(e);return n===o}function At(t){return decodeURI(t).replace(an,"").replace(ln,"")}function dn(t,e){const n=t.endsWith("/"),o=e.startsWith("/");return n&&o?t.slice(0,-1)+e:!n&&!o?`${t}/${e}`:t+e}function ut(t){return/^\//.test(t)?t:`/${t}`}function Xt(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function pn(t){return t===!1||t==="auto"||mt(t)}function hn(t){return t.children!==void 0}function mn(t){return mt(t)?t.length===0:!t}function _t(t,e){if(pn(t))return t;e=ut(e);for(const n in t)if(e.startsWith(ut(n)))return t[n];return"auto"}function Yt(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:Xt(n.link)}),hn(n)&&(e=[...e,...Yt(n.children)]),e),[])}const gn=["href","aria-label"],_n=["src"],fn=b({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:o}=L();return(s,r)=>(u(),p("a",{class:"nav-bar-title",href:a(o),"aria-label":`${a(e).title}, back to home`},[a(n).logo?(u(),p("img",{key:0,class:"logo",src:a(P)(a(n).logo),alt:"Logo"},null,8,_n)):_("",!0),j(" "+g(a(e).title),1)],8,gn))}});var vn=x(fn,[["__scopeId","data-v-7ac13a1e"]]);function bn(){const{site:t,localePath:e,theme:n}=L();return f(()=>{const o=t.value.langs,s=Object.keys(o);if(s.length<2)return null;const i=U().path.replace(e.value,""),d=s.map(h=>({text:o[h].label,link:`${h}${i}`}));return{text:n.value.selectText||"Languages",items:d}})}const yn=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function xn(){const{site:t}=L();return f(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const o=$n(n);return{text:kn(o,e.repoLabel),link:o}})}function $n(t){return Se.test(t)?t:`https://github.com/${t}`}function kn(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const o=yn.find(([s,r])=>r.test(n[0]));return o&&o[0]?o[0]:"Source"}function Qt(t){const e=U(),n=gt(t.value.link);return{props:f(()=>{const s=It(`/${e.data.relativePath}`);let r=!1;if(t.value.activeMatch)r=new RegExp(t.value.activeMatch).test(s);else{const i=It(t.value.link);r=i==="/"?i===s:s.startsWith(i)}return{class:{active:r,isExternal:n},href:n?t.value.link:P(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function It(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const wn={},Ln={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Sn=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Cn=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),qn=[Sn,Cn];function Tn(t,e){return u(),p("svg",Ln,qn)}var ft=x(wn,[["render",Tn]]);const En={class:"nav-link"},Pn=b({__name:"NavLink",props:{item:null},setup(t){const n=ht(t),{props:o,isExternal:s}=Qt(n.item);return(r,i)=>(u(),p("div",En,[l("a",Ut({class:"item"},a(o)),[j(g(t.item.text)+" ",1),a(s)?(u(),E(ft,{key:0})):_("",!0)],16)]))}});var jt=x(Pn,[["__scopeId","data-v-49fe041d"]]);const Nn=t=>(F("data-v-07381bdb"),t=t(),H(),t),Mn={class:"nav-dropdown-link-item"},An=Nn(()=>l("span",{class:"arrow"},null,-1)),In={class:"text"},jn={class:"icon"},Bn=b({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=ht(t),{props:o,isExternal:s}=Qt(n.item);return(r,i)=>(u(),p("div",Mn,[l("a",Ut({class:"item"},a(o)),[An,l("span",In,g(t.item.text),1),l("span",jn,[a(s)?(u(),E(ft,{key:0})):_("",!0)])],16)]))}});var Rn=x(Bn,[["__scopeId","data-v-07381bdb"]]);const Fn=["aria-label"],Hn={class:"button-text"},Dn={class:"dialog"},On=b({__name:"NavDropdownLink",props:{item:null},setup(t){const e=U(),n=M(!1);X(()=>e.path,()=>{n.value=!1});function o(){n.value=!n.value}return(s,r)=>(u(),p("div",{class:N(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":t.item.ariaLabel,onClick:o},[l("span",Hn,g(t.item.text),1),l("span",{class:N(["button-arrow",n.value?"down":"right"])},null,2)],8,Fn),l("ul",Dn,[(u(!0),p(C,null,A(t.item.items,i=>(u(),p("li",{key:i.text,class:"dialog-item"},[v(Rn,{item:i},null,8,["item"])]))),128))])],2))}});var Bt=x(On,[["__scopeId","data-v-18d75f62"]]);const Un={key:0,class:"nav-links"},Vn={key:1,class:"item"},zn={key:2,class:"item"},Gn=b({__name:"NavLinks",setup(t){const{theme:e}=L(),n=bn(),o=xn(),s=f(()=>e.value.nav||o.value||n.value);return(r,i)=>a(s)?(u(),p("nav",Un,[a(e).nav?(u(!0),p(C,{key:0},A(a(e).nav,d=>(u(),p("div",{key:d.text,class:"item"},[d.items?(u(),E(Bt,{key:0,item:d},null,8,["item"])):(u(),E(jt,{key:1,item:d},null,8,["item"]))]))),128)):_("",!0),a(n)?(u(),p("div",Vn,[v(Bt,{item:a(n)},null,8,["item"])])):_("",!0),a(o)?(u(),p("div",zn,[v(jt,{item:a(o)},null,8,["item"])])):_("",!0)])):_("",!0)}});var Kt=x(Gn,[["__scopeId","data-v-35b91e7e"]]);const Jn={emits:["toggle"]},Wn=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Xn=[Wn];function Yn(t,e,n,o,s,r){return u(),p("div",{class:"sidebar-button",onClick:e[0]||(e[0]=i=>t.$emit("toggle"))},Xn)}var Qn=x(Jn,[["render",Yn]]);const Kn=t=>(F("data-v-40587210"),t=t(),H(),t),Zn={class:"nav-bar"},to=Kn(()=>l("div",{class:"flex-grow"},null,-1)),eo={class:"nav"},no=b({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(u(),p("header",Zn,[v(Qn,{onToggle:n[0]||(n[0]=o=>e.$emit("toggle"))}),v(vn),to,l("div",eo,[v(Kt)]),T(e.$slots,"search",{},void 0,!0)]))}});var oo=x(no,[["__scopeId","data-v-40587210"]]);function so(){let t=null,e=null;const n=co(o,300);function o(){const i=ro(),d=ao(i);for(let c=0;c<d.length;c++){const h=d[c],m=d[c+1],[$,q]=lo(c,h,m);if($){history.replaceState(null,document.title,q||" "),s(q);return}}}function s(i){if(r(e),r(t),e=document.querySelector(`.sidebar a[href="${i}"]`),!e)return;e.classList.add("active");const d=e.closest(".sidebar-links > ul > li");d&&d!==e.parentElement?(t=d.querySelector("a"),t&&t.classList.add("active")):t=null}function r(i){i&&i.classList.remove("active")}I(()=>{o(),window.addEventListener("scroll",n)}),Vt(()=>{s(decodeURIComponent(location.hash))}),Y(()=>{window.removeEventListener("scroll",n)})}function ro(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ao(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function io(){return document.querySelector(".nav-bar").offsetHeight}function Rt(t){const e=io();return t.parentElement.offsetTop-e-15}function lo(t,e,n){const o=window.scrollY;return t===0&&o===0?[!0,null]:o<Rt(e)?[!1,null]:!n||o<Rt(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function co(t,e){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(t,e):(t(),o=!0,setTimeout(()=>{o=!1},e))}}function uo(){const t=U(),{site:e}=L();return so(),f(()=>{const n=t.data.headers,o=t.data.frontmatter.sidebar,s=t.data.frontmatter.sidebarDepth;if(o===!1)return[];if(o==="auto")return Ft(n,s);const r=_t(e.value.themeConfig.sidebar,t.data.relativePath);return r===!1?[]:r==="auto"?Ft(n,s):r})}function Ft(t,e){const n=[];if(t===void 0)return[];let o;return t.forEach(({level:s,title:r,slug:i})=>{if(s-1>e)return;const d={text:r,link:`#${i}`};s===2?(o=d,n.push(d)):o&&(o.children||(o.children=[])).push(d)}),n}const Zt=t=>{const e=U(),{site:n,frontmatter:o}=L(),s=t.depth||1,r=o.value.sidebarDepth||1/0,i=e.data.headers,d=t.item.text,c=po(n.value.base,t.item.link),h=t.item.children,m=un(e,t.item.link),$=s<r?te(m,h,i,s+1):null;return z("li",{class:"sidebar-link"},[z(c?"a":"p",{class:{"sidebar-link-item":!0,active:m},href:c},d),$])};function po(t,e){return e===void 0||e.startsWith("#")?e:dn(t,e)}function te(t,e,n,o=1){return e&&e.length>0?z("ul",{class:"sidebar-links"},e.map(s=>z(Zt,{item:s,depth:o}))):t&&n?te(!1,ho(n),void 0,o):null}function ho(t){return ee(mo(t))}function mo(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function ee(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?ee(e.children):void 0}))}const go={key:0,class:"sidebar-links"},_o=b({__name:"SideBarLinks",setup(t){const e=uo();return(n,o)=>a(e).length>0?(u(),p("ul",go,[(u(!0),p(C,null,A(a(e),s=>(u(),E(a(Zt),{item:s},null,8,["item"]))),256))])):_("",!0)}});const fo=b({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(u(),p("aside",{class:N(["sidebar",{open:t.open}])},[v(Kt,{class:"nav"}),T(e.$slots,"sidebar-top",{},void 0,!0),v(_o),T(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var vo=x(fo,[["__scopeId","data-v-17c48e2f"]]);const bo=/bitbucket.org/;function yo(){const{page:t,theme:e,frontmatter:n}=L(),o=f(()=>{const{repo:r,docsDir:i="",docsBranch:d="master",docsRepo:c=r,editLinks:h}=e.value,m=n.value.editLink!=null?n.value.editLink:h,{relativePath:$}=t.value;return!m||!$||!r?null:xo(r,c,i,d,$)}),s=f(()=>e.value.editLinkText||"Edit this page");return{url:o,text:s}}function xo(t,e,n,o,s){return bo.test(t)?ko(t,e,n,o,s):$o(t,e,n,o,s)}function $o(t,e,n,o,s){return(gt(e)?e:`https://github.com/${e}`).replace(tt,"")+`/edit/${o}/`+(n?n.replace(tt,"")+"/":"")+s}function ko(t,e,n,o,s){return(gt(e)?e:t).replace(tt,"")+`/src/${o}/`+(n?n.replace(tt,"")+"/":"")+s+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}const wo={class:"edit-link"},Lo=["href"],So=b({__name:"EditLink",setup(t){const{url:e,text:n}=yo();return(o,s)=>(u(),p("div",wo,[a(e)?(u(),p("a",{key:0,class:"link",href:a(e),target:"_blank",rel:"noopener noreferrer"},[j(g(a(n))+" ",1),v(ft,{class:"icon"})],8,Lo)):_("",!0)]))}});var Co=x(So,[["__scopeId","data-v-55695e90"]]);const qo={key:0,class:"last-updated"},To={class:"prefix"},Eo={class:"datetime"},Po=b({__name:"LastUpdated",setup(t){const{theme:e,page:n}=L(),o=f(()=>{const i=e.value.lastUpdated;return i!==void 0&&i!==!1}),s=f(()=>{const i=e.value.lastUpdated;return i===!0?"Last Updated":i}),r=M("");return I(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(i,d)=>a(o)?(u(),p("p",qo,[l("span",To,g(a(s))+":",1),l("span",Eo,g(r.value),1)])):_("",!0)}});var No=x(Po,[["__scopeId","data-v-30c3cbb4"]]);const Mo={class:"page-footer"},Ao={class:"edit"},Io={class:"updated"},jo=b({__name:"PageFooter",setup(t){return(e,n)=>(u(),p("footer",Mo,[l("div",Ao,[v(Co)]),l("div",Io,[v(No)])]))}});var Bo=x(jo,[["__scopeId","data-v-5c96fb00"]]);function Ro(){const{page:t,theme:e}=L(),n=f(()=>Xt(ut(t.value.relativePath))),o=f(()=>{const c=_t(e.value.sidebar,n.value);return mt(c)?Yt(c):[]}),s=f(()=>o.value.findIndex(c=>c.link===n.value)),r=f(()=>{if(e.value.nextLinks!==!1&&s.value>-1&&s.value<o.value.length-1)return o.value[s.value+1]}),i=f(()=>{if(e.value.prevLinks!==!1&&s.value>0)return o.value[s.value-1]}),d=f(()=>!!r.value||!!i.value);return{next:r,prev:i,hasLinks:d}}const Fo={},Ho={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Do=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Oo=[Do];function Uo(t,e){return u(),p("svg",Ho,Oo)}var Vo=x(Fo,[["render",Uo]]);const zo={},Go={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Jo=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Wo=[Jo];function Xo(t,e){return u(),p("svg",Go,Wo)}var Yo=x(zo,[["render",Xo]]);const Qo={key:0,class:"next-and-prev-link"},Ko={class:"container"},Zo={class:"prev"},ts=["href"],es={class:"text"},ns={class:"next"},os=["href"],ss={class:"text"},rs=b({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:o}=Ro();return(s,r)=>a(e)?(u(),p("div",Qo,[l("div",Ko,[l("div",Zo,[a(n)?(u(),p("a",{key:0,class:"link",href:a(P)(a(n).link)},[v(Vo,{class:"icon icon-prev"}),l("span",es,g(a(n).text),1)],8,ts)):_("",!0)]),l("div",ns,[a(o)?(u(),p("a",{key:0,class:"link",href:a(P)(a(o).link)},[l("span",ss,g(a(o).text),1),v(Yo,{class:"icon icon-next"})],8,os)):_("",!0)])])])):_("",!0)}});var as=x(rs,[["__scopeId","data-v-e65a9748"]]);const is={class:"page"},ls={class:"container"},cs=b({__name:"Page",setup(t){return(e,n)=>{const o=Z("Content");return u(),p("main",is,[l("div",ls,[T(e.$slots,"top",{},void 0,!0),v(o,{class:"content"}),v(Bo),v(as),T(e.$slots,"bottom",{},void 0,!0)])])}}});var us=x(cs,[["__scopeId","data-v-8fcebc32"]]);const ds={key:0,id:"ads-container"},ps=b({__name:"Layout",setup(t){const e=we(()=>dt(()=>import("./Home.c4486532.js"),["assets/Home.c4486532.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.6b6503a0.js","assets/framework.d7d875d2.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/preload-helper.1c052cf7.js"])),n=()=>null,o=n,s=n,r=n,i=U(),{site:d,page:c,theme:h,frontmatter:m}=L(),$=f(()=>!!m.value.customLayout),q=f(()=>!!m.value.home),y=f(()=>Object.keys(d.value.langs).length>1),k=f(()=>{const S=h.value;return m.value.navbar===!1||S.navbar===!1?!1:d.value.title||S.logo||S.repo||S.nav}),w=M(!1),B=f(()=>m.value.home||m.value.sidebar===!1?!1:!mn(_t(h.value.sidebar,i.data.relativePath))),st=S=>{w.value=typeof S=="boolean"?S:!w.value},ce=st.bind(null,!1);X(i,ce);const ue=f(()=>[{"no-navbar":!k.value,"sidebar-open":w.value,"no-sidebar":!B.value}]);return(S,xt)=>{const de=Z("Content"),pe=Z("Debug");return u(),p(C,null,[l("div",{class:N(["theme",a(ue)])},[a(k)?(u(),E(oo,{key:0,onToggle:st},{search:R(()=>[T(S.$slots,"navbar-search",{},()=>[a(h).algolia?(u(),E(a(r),{key:0,options:a(h).algolia,multilang:a(y)},null,8,["options","multilang"])):_("",!0)])]),_:3})):_("",!0),v(vo,{open:w.value},{"sidebar-top":R(()=>[T(S.$slots,"sidebar-top")]),"sidebar-bottom":R(()=>[T(S.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:xt[0]||(xt[0]=Wa=>st(!1))}),a($)?(u(),E(de,{key:1})):a(q)?T(S.$slots,"home",{key:2},()=>[v(a(e),null,{hero:R(()=>[T(S.$slots,"home-hero")]),features:R(()=>[T(S.$slots,"home-features")]),footer:R(()=>[T(S.$slots,"home-footer")]),_:3})]):(u(),E(us,{key:3},{top:R(()=>[T(S.$slots,"page-top-ads",{},()=>[a(h).carbonAds&&a(h).carbonAds.carbon?(u(),p("div",ds,[(u(),E(a(o),{key:"carbon"+a(c).relativePath,code:a(h).carbonAds.carbon,placement:a(h).carbonAds.placement},null,8,["code","placement"]))])):_("",!0)]),T(S.$slots,"page-top")]),bottom:R(()=>[T(S.$slots,"page-bottom"),T(S.$slots,"page-bottom-ads",{},()=>[a(h).carbonAds&&a(h).carbonAds.custom?(u(),E(a(s),{key:"custom"+a(c).relativePath,code:a(h).carbonAds.custom,placement:a(h).carbonAds.placement},null,8,["code","placement"])):_("",!0)])]),_:3}))],2),v(pe)],64)}}}),hs={class:"theme"},ms=l("h1",null,"404",-1),gs=["href"],_s=b({__name:"NotFound",setup(t){const{site:e}=L(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function o(){return n[Math.floor(Math.random()*n.length)]}return(s,r)=>(u(),p("div",hs,[ms,l("blockquote",null,g(o()),1),l("a",{href:a(e).base,"aria-label":"go to home"},"Take me home.",8,gs)]))}}),fs={Layout:ps,NotFound:_s};function vs(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),o=24*60*60*1e3,s=n/o,r=Math.floor(s),i=(s-r)*24,d=Math.floor(i),c=(i-d)*60,h=Math.floor(c),m=(c-h)*60,$=Math.floor(m);return{day:r,hour:d,minute:h,second:$}}const bs=()=>{const t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=t})};const ys=["href"],xs={class:"post-info"},$s={class:"post-info-categories"},ks=["href"],ws={key:1,href:"#"},Ls={class:"post-info-tags"},Ss=["href"],Cs={key:1,href:"#"},qs={datetime:"2022-01-25T19:21:35.000Z"},Ts=["innerHTML"],Es={class:"post-excerpt"},Ps=["innerHTML"],Ns=l("span",{class:"post-btn"},"READ MORE +",-1),Ms=b({__name:"PostItem",props:{article:Object},setup(t){return(e,n)=>(u(),p("a",{href:a(P)(t.article.regularPath),class:"post-item"},[l("div",xs,[l("div",null,[l("span",$s,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(u(!0),p(C,{key:0},A(t.article.frontMatter.category,o=>(u(),p("a",{key:o,href:a(P)(`/pages/archives#category=${o}`)},g(o),9,ks))),128)):(u(),p("a",ws,"Empty"))]),l("span",Ls,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(u(!0),p(C,{key:0},A(t.article.frontMatter.tags,o=>(u(),p("a",{key:o,href:a(P)(`/pages/archives#tag=${o}`)},g(o),9,Ss))),128)):(u(),p("a",Cs," Empty "))])]),l("time",qs,g(t.article.frontMatter.dateArr[2])+" / "+g(t.article.frontMatter.dateArr[1])+" / "+g(t.article.frontMatter.dateArr[0]),1)]),l("h1",{class:"post-title",innerHTML:t.article.frontMatter.title},null,8,Ts),l("div",Es,[l("div",{innerHTML:t.article.frontMatter.description},null,8,Ps)]),Ns],8,ys))}});var As=[{title:"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883
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

`,excerpt:"",url:"/posts\\Site\\valine-email"},{title:"CSS \u4E2D\u7684\u5E38\u7528\u5355\u4F4D",content:`\u9996\u5148\u6765\u8BF4\u4E00\u4E0B\u5BF9\u5404\u79CD\u5355\u4F4D\u7684\u5B9A\u4E49\u3002


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

`,excerpt:"",url:"/posts\\Tech\\Git\\cmd"},{title:"Multi-User Configuration",content:`Add the file config to ~/.ssh.
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

`,excerpt:"",url:"/posts\\Tech\\Git\\uconfig"},{title:"HTML Tag [object] VS [embed]",content:`The two tags are both able to render media object such as audio, video, pdf and flash.Due to the compatibility depending on different browsers, we should mainly use &lt;object&gt;.
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
`,excerpt:"",url:"/posts\\Tech\\JS\\es6"},{title:"NPM Registry Configuration",content:`1. By NPM config cmd
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
`,excerpt:"",url:"/posts\\Tech\\NPM\\npm-reg"},{title:"\u4F7F\u7528 Vite \u6784\u5EFA\u9879\u76EE",content:`1. \u6784\u5EFA\u547D\u4EE4\uFF1A
# Npm
$ npm create vite@latest [app-name] --template [vue/react]
# Yarn
$ yarn create vite [app-name] --template [vue/react]

\u8F93\u5165\u547D\u4EE4\uFF0C\u9009\u62E9\u6784\u5EFA\u6A21\u677F\u548C JS \u7C7B\u578B\u3002
2. \u5B89\u88C5\u4F9D\u8D56
\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u8FDB\u5165\u9879\u76EE\u76EE\u5F55\uFF0C\u5B89\u88C5\u4F9D\u8D56\uFF1A
$ cd my-vue-app
$ npm install

3. \u542F\u52A8\u9879\u76EE
npm run dev

`,excerpt:"",url:"/posts\\Tech\\Vite\\start"},{title:"\u6D4F\u89C8\u5668\u63D2\u4EF6\u63A8\u8350",content:`1. \u5B89\u88C5\u65B9\u5F0F

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
`,excerpt:"",url:"/posts\\Tool\\ext-browser"},{title:"VsCode \u795E\u4ED9\u63D2\u4EF6",content:`1. Setting Sync
\u901A\u8FC7 GitHub \u8D26\u53F7\u540C\u6B65 VsCode \u8BBE\u7F6E\u3002
2. Code Runner
\u4E00\u952E\u8FD0\u884C\u4EE3\u7801\u3002
`,excerpt:"",url:"/posts\\Tool\\ext-vscode"},{title:"\u9AD8\u6548\u7387 Windows \u7CFB\u7EDF\u5DE5\u5177",content:`1. QTTabBar
\u8D44\u6E90\u7BA1\u7406\u5668\u589E\u5F3A\u8F6F\u4EF6\uFF0C\u652F\u6301\u591A\u6807\u7B7E\u9875\u7BA1\u7406\uFF0C\u50CF\u4F7F\u7528\u6D4F\u89C8\u5668\u4E00\u6837\u4F7F\u7528\u8D44\u6E90\u7BA1\u7406\u5668\u3002
2. Geek
\u5378\u8F7D\u8F6F\u4EF6\uFF0C\u540C\u65F6\u6E05\u7406\u6CE8\u518C\u8868\u548C\u6B8B\u7559\u7684\u6587\u4EF6\u5939\u3002
`,excerpt:"",url:"/posts\\Tool\\sf-win"},{title:"Vue3 \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F",content:`1. \u4E0A\u4E0B\u7EA7\u901A\u4FE1
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

`,excerpt:"",url:"/posts\\Vue\\comm"},{title:"\u56FE\u7247\u8D44\u6E90\u9884\u52A0\u8F7D",content:`\u9884\u52A0\u8F7D:\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u524D\uFF0C\u63D0\u524D\u52A0\u8F7D\u56FE\u7247\u7B49\u8D44\u6E90\uFF0C\u6709\u5229\u4E8E\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002
&lt;script setup lang=&quot;ts&quot;&gt;
import { onBeforeMount } from &quot;vue&quot;;
// some image url...
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

`,excerpt:"",url:"/posts\\Vue\\preload"},{title:"reactive \u58F0\u660E\u5F0F\u5BF9\u8C61\u91CD\u65B0\u8D4B\u503C\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u89E3\u51B3\u529E\u6CD5",content:`1. \u4F7F\u7528 ref \u58F0\u660E\u53D8\u91CF
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

`,excerpt:"",url:"/posts\\Vue\\reactive-modify"},{title:"Vue3 \u5B50\u7EC4\u4EF6\u66F4\u65B0\u4E0A\u7EA7\u7EC4\u4EF6\u53C2\u6570",content:`\u4E0A\u7EA7\u7EC4\u4EF6\u4F20\u53C2\u3002
&lt;!-- index.vue --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
import { Ref, ref } from &#39;vue&#39;
import Sub from &#39;./Sub.vue&#39;;
const count: Ref&lt;number&gt; = ref(0)
&lt;/script&gt;
    
&lt;template&gt;
    &lt;div class=&quot;index&quot;&gt;
        {{ count }}
        &lt;!-- \u7ED1\u5B9A\u53C2\u6570 count --&gt;
        &lt;Sub v-model:count=&quot;count&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

\u4E0B\u7EA7\u7EC4\u4EF6\u63A5\u6536\uFF0C\u5E76\u5728\u4E8B\u4EF6\u4E2D\u66F4\u65B0\u53C2\u6570\u3002
&lt;!-- Sub.vue --&gt;
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
`,excerpt:"",url:"/posts\\Vue\\v3-model"}];const Is={class:"input-group"},js=l("i",{class:"fa fa-search"},null,-1),Bs={class:"result"},Rs=["href"],Fs=["innerHTML"],Hs=["innerHTML"],Ds={key:0,class:"empty"},Os=l("i",{class:"fa fa-meh-o"},null,-1),Us=j(" No Data "),Vs=[Os,Us],zs=b({__name:"Search",setup(t){const{theme:e}=L(),n=M("");let o=O([]);const s=f(()=>!!(o.length||n.value));nt(()=>{r(n.value)});function r(c){o.length=0,c.trim()!==""&&As.forEach(h=>{const m=JSON.parse(JSON.stringify(h)),$=new RegExp(c,"ig"),q=m.title.match($),y=m.content.match($);q&&(m.title=i(c,m.title)),y&&(m.content=i(c,m.content)),(q||y)&&o.push(m)})}const i=(c,h)=>{const m=new RegExp(c,"ig");return h.replace(m,`<span class="search-highlight">${c}</span>`)},d=()=>{n.value=""};return(c,h)=>a(e).search?(u(),p("div",{key:0,class:N(["search-wrapper",a(s)?"open":""])},[l("div",Is,[js,it(l("input",{type:"text",placeholder:"Search","onUpdate:modelValue":h[0]||(h[0]=m=>n.value=m)},null,512),[[Ke,n.value]]),n.value?(u(),p("i",{key:0,class:"fa fa-trash",onClick:d})):_("",!0)]),l("ul",Bs,[(u(!0),p(C,null,A(a(o),m=>(u(),p("li",{key:m.title},[l("a",{href:m.url,onClick:d},[l("p",{innerHTML:m.title,class:"title"},null,8,Fs),l("p",{innerHTML:m.content,class:"content"},null,8,Hs)],8,Rs)]))),128)),!a(o).length&&n.value!==""?(u(),p("li",Ds,Vs)):_("",!0)])],2)):_("",!0)}}),Gs=b({__name:"PostList",props:{posts:Array},setup(t){const e=M("");return(n,o)=>(u(),p(C,null,[v(zs,{filterKey:e.value,"onUpdate:filterKey":o[0]||(o[0]=s=>e.value=s)},null,8,["filterKey"]),l("div",null,[(u(!0),p(C,null,A(t.posts,(s,r)=>(u(),E(Ms,{key:r,article:s},null,8,["article"]))),128))])],64))}});const Js={class:"pagination"},Ws=["href"],Xs=["href"],Ys=["href"],Qs=b({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(u(),p("div",Js,[t.current>1?(u(),p("a",{key:0,class:"link",href:a(P)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,Ws)):_("",!0),(u(!0),p(C,null,A(t.pageNum,o=>(u(),p("a",{class:N(["link",{active:t.current===o}]),key:o,href:a(P)(o===1?"/index.html":`/page_${o}.html`)},g(o),11,Xs))),128)),t.current<t.pageNum?(u(),p("a",{key:1,class:"link",href:a(P)(`/page_${t.current+1}.html`)},"Next",8,Ys)):_("",!0)]))}});var Ks=x(Qs,[["__scopeId","data-v-653fd1d2"]]);const Zs=b({__name:"index",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=O([]);return n=f(()=>{var s;return(((s=ht(e).posts)==null?void 0:s.value)||[]).map(r=>{const i=JSON.parse(JSON.stringify(r)),d=i.frontMatter.date;return i.frontMatter.dateArr=d.split("-"),i})}),I(()=>{bs()}),(o,s)=>(u(),p(C,null,[v(Gs,{posts:a(n)},null,8,["posts"]),v(Ks,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});class tr{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class vt{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=vt.getPoint(this.dustQuantity);for(let n of e){const o=new tr;this.buildDust(n[0],n[1],o),this.dustArr.push(o)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let o of e)if(o.x<0||o.y<0){const s=this.width,r=Math.floor(Math.random()*window.innerHeight);o.x=s,o.y=r,this.buildDust(s,r,o)}else{const s=o.x-o.vx,r=o.y-o.vy;this.buildDust(s,r,o)}}buildDust(e,n,o){const s=this.ctx;e&&(o.x=e),n&&(o.y=n),s&&(s.beginPath(),s.shadowBlur=o.shadowBlur,s.shadowColor=o.color,s.shadowOffsetX=o.shadowX,s.shadowOffsetY=o.shadowY,s.ellipse(o.x,o.y,o.radiusX,o.radiusY,o.rotation,0,Math.PI*2),s.closePath(),s.fillStyle=o.color,s.fill())}resize(){const e=this.canvas,n=window.innerWidth,o=window.innerHeight;this.width=n,this.height=o,this.dustQuantity=Math.floor((n+o)/38),e!==void 0&&(e.width=n,e.height=o)}static getPoint(e=1){let n=[];for(let o=0;o<e;o++){const s=Math.floor(Math.random()*window.innerWidth),r=Math.floor(Math.random()*window.innerHeight);n.push([s,r])}return n}}const er={class:"menu-list"},nr=["href"],or=["title"],sr=b({__name:"index",setup(t){const{theme:e,page:n}=L(),o=e.value.nav,s=f(()=>`/${n.value.relativePath.split(".")[0]}`);return(r,i)=>(u(),p("header",null,[l("nav",null,[l("div",er,[(u(!0),p(C,null,A(a(o),d=>(u(),p("a",{href:d.link,key:d.link,class:N(d.link===a(s)?"active":"")},[l("i",{class:N(`fa fa-${d.icon}`),title:d.text},null,10,or)],10,nr))),128))])])]))}});var rr=x(sr,[["__scopeId","data-v-4729bdee"]]);const ar={key:0,class:"social-links"},ir=["href"],lr=["title"],cr=b({__name:"SocialLinks",setup(t){const{theme:e}=L();return(n,o)=>a(e).socialLinks.length?(u(),p("div",ar,[(u(!0),p(C,null,A(a(e).socialLinks,s=>(u(),p("a",{key:s.link,href:s.link,target:"_blank"},[l("i",{class:N(`fa fa-${s.icon}`),title:s.icon},null,10,lr)],8,ir))),128))])):_("",!0)}});var ur=x(cr,[["__scopeId","data-v-d284cb48"]]);const bt=t=>(F("data-v-12b81e60"),t=t(),H(),t),dr={key:0,class:"aside-wrapper"},pr={href:"/",class:"logo"},hr=["src"],mr={class:"center dr"},gr={href:"/"},_r={class:"total"},fr=["href"],vr=bt(()=>l("span",{class:"total-title"},"Archives Total",-1)),br={class:"total-number"},yr={class:"total-tags"},xr=bt(()=>l("span",{class:"total-title"},"Tags:",-1)),$r={class:"total-number"},kr={class:"total-categories"},wr=bt(()=>l("span",{class:"total-title"},"Categories:",-1)),Lr={class:"total-number"},Sr=b({__name:"index",setup(t){const{site:e,theme:n,frontmatter:o}=L(),s=e.value.title,r=n.value.logo,i=n.value.posts.length,d=n.value.tags.length,c=n.value.cats.length,h=f(()=>o.value.sidebar);return(m,$)=>a(h)?(u(),p("div",dr,[l("aside",null,[l("div",null,[l("a",pr,[l("img",{src:a(P)(a(r)),alt:"Logo"},null,8,hr)]),l("h1",mr,[l("a",gr,"Dr."+g(a(s)),1)]),l("section",_r,[l("a",{class:"total-archives",href:a(P)("/pages/archives")},[vr,l("span",br,g(a(i)),1)],8,fr),l("div",yr,[xr,l("span",$r,g(a(d)),1)]),l("div",kr,[wr,l("span",Lr,g(a(c)),1)])]),v(ur)])])])):_("",!0)}});var Cr=x(Sr,[["__scopeId","data-v-12b81e60"]]);class qr{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const s=(await dt(()=>import("./message.ddd26d14.js"),["assets/message.ddd26d14.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/framework.d7d875d2.js","assets/preload-helper.1c052cf7.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.6b6503a0.js"])).default,r=document.createElement("i");r.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(r),r.addEventListener("click",function(){const i=document.createElement("textarea"),d=r.previousElementSibling;i.value=d.innerText,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),s.success("Copied")})})}}const Tr=t=>(F("data-v-059f3759"),t=t(),H(),t),Er={class:"post-header"},Pr={class:"title"},Nr={class:"info"},Mr={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},Ar=Tr(()=>l("div",{class:"divider"},null,-1)),Ir=b({__name:"PostHeader",setup(t){const{frontmatter:e}=L();let n=f(()=>e.value.title),o=f(()=>{const s=e.value.date;return(s?new Date(s).toJSON().split("T")[0]:"").split("-")});return(s,r)=>(u(),p("div",Er,[l("h1",Pr,g(a(n)),1),l("div",Nr,[l("span",Mr,g(a(o)[2])+" / "+g(a(o)[1])+" / "+g(a(o)[0]),1)]),Ar]))}});var jr=x(Ir,[["__scopeId","data-v-059f3759"]]);const yt=t=>(F("data-v-6246841b"),t=t(),H(),t),Br={class:"post-footer"},Rr=yt(()=>l("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),Fr=["href"],Hr=yt(()=>l("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),Dr=["href"],Or=yt(()=>l("li",null,[l("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),j(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),l("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),j(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),Ur=b({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:o}=L();let s=f(()=>{const r=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${r}`});return f(()=>o.value.postFooter),(r,i)=>(u(),p("div",Br,[l("ul",null,[l("li",null,[Rr,l("a",{href:a(n).themeConfig.website,target:"_blank"},g(a(n).title),9,Fr)]),l("li",null,[Hr,l("a",{href:a(s),target:"_blank"},g(a(s)),9,Dr)]),Or])]))}});var Vr=x(Ur,[["__scopeId","data-v-6246841b"]]);const ne=t=>(F("data-v-2ea4cd0e"),t=t(),H(),t),zr={class:"prev-next"},Gr=ne(()=>l("hr",null,null,-1)),Jr=["href"],Wr={key:1},Xr=["href"],Yr={key:1},Qr=ne(()=>l("hr",null,null,-1)),Kr=b({__name:"PrevNext",setup(t){const{theme:e,page:n}=L(),o=f(()=>e.value.posts),s=f(()=>n.value.frontmatter.title);let r=O({regularPath:"",frontMatter:{title:""}}),i=O({regularPath:"",frontMatter:{title:""}});const d=(c,h)=>{h?(c.regularPath=h.regularPath,c.frontMatter.title=h.frontMatter.title):(c.regularPath="",c.frontMatter.title="")};return nt(()=>{const c=o.value.findIndex(h=>h.frontMatter.title===s.value);if(c>-1){const h=o.value[c-1],m=o.value[c+1];d(r,h),d(i,m)}}),(c,h)=>{var m,$,q,y,k,w;return u(),p("div",zr,[Gr,l("div",null,[it(l("a",{class:"prev",href:a(P)((m=a(r))==null?void 0:m.regularPath)},[a(e).docFooter.prev.icon?(u(),p("i",{key:0,class:N(`fa fa-${a(e).docFooter.prev.icon}`)},null,2)):_("",!0),a(e).docFooter.prev.text?(u(),p("span",Wr,g(a(e).docFooter.prev.text),1)):_("",!0),j(" "+g((q=($=a(r))==null?void 0:$.frontMatter)==null?void 0:q.title),1)],8,Jr),[[Pt,a(r).regularPath]]),it(l("a",{class:"next",href:a(P)((y=a(i))==null?void 0:y.regularPath)},[j(g((w=(k=a(i))==null?void 0:k.frontMatter)==null?void 0:w.title)+" ",1),a(e).docFooter.next.icon?(u(),p("i",{key:0,class:N(`fa fa-${a(e).docFooter.next.icon}`)},null,2)):_("",!0),a(e).docFooter.next.text?(u(),p("span",Yr,g(a(e).docFooter.next.text),1)):_("",!0)],8,Xr),[[Pt,a(i).regularPath]])]),Qr])}}});var Zr=x(Kr,[["__scopeId","data-v-2ea4cd0e"]]);function ta(t){let e=t[0];for(let n=1;n<t.length;n++){const o=t[n];o.length>e.length&&(e=o)}return e}function oe(t,e){return Array.from(t).filter(s=>e.test(s.nodeName))}function se(t,e){let n,o,s=0;return function(){n=this,o=arguments;let r=new Date().valueOf();r-s>e&&(t.apply(n,o),s=r)}}const re=t=>(F("data-v-46ebd702"),t=t(),H(),t),ea=re(()=>l("i",{class:"fa fa-caret-up"},null,-1)),na=re(()=>l("p",null,"TOP",-1)),oa=[ea,na],sa=b({__name:"BackTop",setup(t){const e=M(0),n=f(()=>e.value>300?"block":"none");I(()=>{window.addEventListener("scroll",s)}),Y(()=>{window.removeEventListener("scroll",s)});const o=()=>{e.value=document.documentElement.scrollTop},s=se.bind(this,o,1e3)(),r=()=>{const i=document.documentElement.scrollTop/6,d=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-i,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(d)},50)};return(i,d)=>(u(),p("div",{class:"back-top",style:zt({display:a(n)}),onClick:r},oa,4))}});var ra=x(sa,[["__scopeId","data-v-46ebd702"]]);const ot=t=>(F("data-v-6f889226"),t=t(),H(),t),aa=ot(()=>l("i",{class:"fa fa-heartbeat mr4"},null,-1)),ia=ot(()=>l("p",null,[j(" Power With "),l("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),j(" & "),l("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),la=ot(()=>l("div",null,[l("span",null,"\xA9"),l("span",null,"2021 to 2022")],-1)),ca=ot(()=>l("div",null,[l("span",null,"ICP"),l("span",null,"\u2014 RHODEISLAND \u2014")],-1)),ua=b({__name:"Footer",setup(t){const{theme:e}=L(),n=M();let o=O({day:0,hour:0,minute:0,second:0}),s=null;I(()=>{e.value.footer.runtime.enable&&(s=setInterval(r,1e3))}),Y(()=>{s&&clearInterval(s)});const r=()=>{const i=vs();o.day=i.day,o.hour=i.hour,o.minute=i.minute,o.second=i.second};return(i,d)=>(u(),p("footer",null,[a(e).footer.runtime.enable?(u(),p("p",{key:0,ref_key:"runtimeRef",ref:n},[aa,j(" "+g(a(o).day)+" days "+g(a(o).hour)+" hours "+g(a(o).minute)+" minutes and "+g(a(o).second)+" seconds ",1)],512)):_("",!0),ia,a(e).footer.copyright?(u(),p(C,{key:1},[la,ca],64)):_("",!0)]))}});var da=x(ua,[["__scopeId","data-v-6f889226"]]);const ae=/^H[1-6]{1,}$/,pa=t=>{const e=t.childNodes,n=oe(e,ae);return ha(n)};function ha(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n],s=/^(_\d)+(-\d)*/ig,r=o.id.match(s)[0];e.push({nodeName:o.nodeName,text:o.innerText.slice(0,o.innerText.length-1),id:o.id,level:r})}return ma(e)}function ma(t){const e=[],n={};t.forEach(o=>{n[o.level]=o});for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const s=n[o];if(/^(_\d)+$/ig.test(o))e.push(s);else{const d=Object.keys(n).filter(h=>h!==o&&o.includes(h)),c=ta(d);n[c].child?n[c].child.push(s):n[c].child=[s]}}return e}const ga=["href","name","title","onClick"],_a=b({__name:"CataList",props:{tree:Array},setup(t){const e=n=>{n.open=!n.open,n.active=!0};return(n,o)=>(u(),p("ul",null,[(u(!0),p(C,null,A(t.tree,s=>{var r;return u(),p("li",{key:s.id},[l("a",{href:`#${s.id}`,name:s.id,title:s.text,class:N([[s.nodeName,s.active?"active":""],"link"]),onClick:i=>e(s)},g(s.text),11,ga),((r=s.child)==null?void 0:r.length)&&s.open?(u(),E(ie,{key:0,tree:s.child},null,8,["tree"])):_("",!0)])}),128))]))}});var ie=x(_a,[["__scopeId","data-v-33c6374d"]]);const fa={key:0,class:"catalog"},va=b({__name:"index",setup(t){const{frontmatter:e}=L(),n=M(0),o=M(0),s=O({data:[]}),r=O({titleNodes:[],titleMargins:[]});X(e,(y,k)=>{i()},{deep:!0}),I(()=>{i(),window.addEventListener("scroll",c)}),Y(()=>{window.removeEventListener("scroll",c)});const i=()=>{var w;const y=(w=document.getElementById("content"))==null?void 0:w.childNodes[0],k=pa(y);s.data=k,o.value=y.getBoundingClientRect().top,m(y)},d=()=>{n.value=document.documentElement.scrollTop,h()},c=se.bind(this,d,50)(),h=()=>{const y=r.titleMargins;for(let k=0;k<y.length;k++){const w=y[k];if(w.top-n.value>=o.value){q(s.data),$(s.data,w.id);return}}},m=y=>{const k=y.childNodes;r.titleNodes=oe(k,ae);const w=r.titleNodes.map(B=>({id:B.id,top:B.getBoundingClientRect().top}));r.titleMargins=w,h()},$=(y,k)=>{for(let w=0;w<y.length;w++){const B=y[w];if(B.id===k){B.active=!0,B.open=!0;return}B.child&&$(B.child,k)}},q=y=>{for(let k=0;k<y.length;k++){const w=y[k];w.active&&(w.active=!1),w.child&&q(w.child)}};return(y,k)=>s.data.length?(u(),p("div",fa,[v(ie,{tree:s.data},null,8,["tree"])])):_("",!0)}});var ba=x(va,[["__scopeId","data-v-32f802b6"]]);const ya={key:0,class:"post-tag"},xa=l("i",{class:"fa fa-tags"},null,-1),$a=["href"],ka=b({__name:"index",setup(t){const{frontmatter:e}=L(),n=f(()=>e.value.page),o=f(()=>e.value.tags||[]);I(()=>{s()}),Vt(()=>{s()});const s=()=>{n.value||new qr};return(r,i)=>{const d=Z("Content");return u(),p("div",{class:N(["content",a(n)?"":"post-content"]),id:"postContent"},[a(n)?_("",!0):(u(),E(jr,{key:0})),v(d,{id:"content"}),a(n)?_("",!0):(u(),p(C,{key:1},[a(o).length?(u(),p("p",ya,[xa,(u(!0),p(C,null,A(a(o),c=>(u(),p("a",{key:c,href:`/pages/archives#tag=${c}`},g(c),9,$a))),128))])):_("",!0),v(Vr),v(Zr),v(ra),v(ba)],64)),v(da)],2)}}}),wa=()=>z("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"}),La=t=>{const e=localStorage.getItem(t);return e&&JSON.parse(e)},Ht=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};const Sa=b({__name:"BgToggle",props:{bgUrl:String},emits:["update:bgUrl"],setup(t,{emit:e}){const{theme:n}=L(),o=n.value.bgUrls,s=M(0);nt(()=>{e("update:bgUrl",o[s.value])}),Le(()=>{d()}),I(()=>{r()});const r=()=>{const c=La("bgIdx");c==null?Ht("bgIdx",s.value):s.value=c},i=()=>{s.value>=o.length-1?s.value=0:s.value++,Ht("bgIdx",s.value)},d=()=>{o.forEach(c=>{const h=new Image;h.src=c})};return(c,h)=>(u(),p("i",{class:"fa fa-retweet bg-toggle",title:"toggle background",onClick:i}))}});var Ca=x(Sa,[["__scopeId","data-v-973b6b70"]]);const qa={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Ta=b({__name:"NewLayout",setup(t){const{theme:e}=L(),n=M("");return I(()=>{new vt("canvas-dust")}),(o,s)=>(u(),p(C,null,[l("main",{class:"layout",style:zt({"background-image":`url(${n.value})`})},[v(Cr,{class:"aside"}),v(ka,{class:"content"}),v(rr,{class:"navbar"})],4),v(Ca,{bgUrl:n.value,"onUpdate:bgUrl":s[0]||(s[0]=r=>n.value=r)},null,8,["bgUrl"]),a(e).live2d?(u(),E(a(wa),{key:0})):_("",!0),l("canvas",qa,null,512)],64))}});var Ea=x(Ta,[["__scopeId","data-v-603fe8f0"]]);const Pa={},Na={class:"loading-wrap hover",width:"100",height:"100",viewBox:"0 0 40 60"},Ma=l("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1),Aa=l("text",{class:"loading-text",x:"0",y:"45",fill:"#fff"},"Loading...",-1),Ia=[Ma,Aa];function ja(t,e){return u(),p("svg",Na,Ia)}var Ba=x(Pa,[["render",ja]]);var et={...fs,Layout:Ea,enhanceApp({app:t}){t.component("Page",Zs),t.component("Loading",Ba)}};const at=new Set,le=()=>document.createElement("link"),Ra=t=>{const e=le();e.rel="prefetch",e.href=t,document.head.appendChild(e)},Fa=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let Q;const Ha=G&&(Q=le())&&Q.relList&&Q.relList.supports&&Q.relList.supports("prefetch")?Ra:Fa;function Da(){if(!G||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(i=>{if(i.isIntersecting){const d=i.target;n.unobserve(d);const{pathname:c}=d;if(!at.has(c)){at.add(c);const h=Gt(c);Ha(h)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:i,hostname:d,pathname:c}=r,h=c.match(/\.\w+$/);h&&h[0]!==".html"||i!=="_blank"&&d===location.hostname&&(c!==location.pathname?n.observe(r):at.add(c))})})};I(o);const s=U();X(()=>s.path,o),Y(()=>{n&&n.disconnect()})}const Oa=b({setup(t,{slots:e}){const n=M(!1);return I(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Ua=et.NotFound||(()=>"404 Not Found"),Va={name:"VitePressApp",setup(){const{site:t}=L();return I(()=>{X(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),Da(),()=>z(et.Layout)}};function za(){const t=Ja(),e=Ga();e.provide(qe,t);const n=Te(t.route);return e.provide(Ee,n),G&&on(t.route,n.site),e.component("Content",Pe),e.component("ClientOnly",Oa),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),et.enhanceApp&&et.enhanceApp({app:e,router:t,siteData:Ne}),{app:e,router:t}}function Ga(){return en(Va)}function Ja(){let t=G,e;return Ce(n=>{let o=Gt(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),G?(t=!1,dt(()=>import(o),[])):require(o)},Ua)}if(G){const{app:t,router:e}=za();e.go().then(()=>{t.mount("#app")})}export{jt as N,za as createApp,Za as r};
