import{i as Z,c as me,a as pt,b as ge,t as kt,d as fe,e as ve,f as be,g as ye,h as xe,j as Ut,k as $e,l as ke,m as we,n as Vt,o as Le,w as Y,p as g,q as u,r as p,u as i,s as v,v as j,x as m,y as b,z as l,A as ht,B as N,C as zt,D as F,E as R,F as M,G as X,H as A,I as S,J as P,K as f,L as E,M as I,N as _t,O as Q,P as z,Q as tt,R as Se,S as H,T as D,U as lt,V as Gt}from"./framework.fcec6aef.js";import{u as k,w as q,a as U,E as Ce,i as G,p as Jt,c as Te,R as Ee,b as Pe,d as Ne,C as qe,s as Me}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.5e507a4a.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const Ae="modulepreload",wt={},Ie="/",st=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Ie}${s}`,s in wt)return;wt[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ae,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},je="http://www.w3.org/2000/svg",O=typeof document!="undefined"?document:null,Lt=O&&O.createElement("template"),Be={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e?O.createElementNS(je,t):O.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>O.createTextNode(t),createComment:t=>O.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>O.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,o,r){const a=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Lt.innerHTML=s?`<svg>${t}</svg>`:t;const c=Lt.content;if(s){const d=c.firstChild;for(;d.firstChild;)c.appendChild(d.firstChild);c.removeChild(d)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Fe(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Re(t,e,n){const s=t.style,o=Z(n);if(n&&!o){for(const r in n)ct(s,r,n[r]);if(e&&!Z(e))for(const r in e)n[r]==null&&ct(s,r,"")}else{const r=s.display;o?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const St=/\s*!important$/;function ct(t,e,n){if(pt(n))n.forEach(s=>ct(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=He(t,e);St.test(n)?t.setProperty(Ut(s),n.replace(St,""),"important"):t[s]=n}}const Ct=["Webkit","Moz","ms"],at={};function He(t,e){const n=at[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return at[e]=s;s=ke(s);for(let o=0;o<Ct.length;o++){const r=Ct[o]+s;if(r in t)return at[e]=r}return e}const Tt="http://www.w3.org/1999/xlink";function De(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Tt,e.slice(6,e.length)):t.setAttributeNS(Tt,e,n);else{const r=we(e);n==null||r&&!Vt(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Oe(t,e,n,s,o,r,a){if(e==="innerHTML"||e==="textContent"){s&&a(s,o,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const d=n==null?"":n;(t.value!==d||t.tagName==="OPTION")&&(t.value=d),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const d=typeof t[e];d==="boolean"?n=Vt(n):n==null&&d==="string"?(n="",c=!0):d==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[Wt,Ue]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ut=0;const Ve=Promise.resolve(),ze=()=>{ut=0},Ge=()=>ut||(Ve.then(ze),ut=Wt());function V(t,e,n,s){t.addEventListener(e,n,s)}function Je(t,e,n,s){t.removeEventListener(e,n,s)}function We(t,e,n,s,o=null){const r=t._vei||(t._vei={}),a=r[e];if(s&&a)a.value=s;else{const[c,d]=Ye(e);if(s){const h=r[e]=Xe(s,o);V(t,c,h,d)}else a&&(Je(t,c,a,d),r[e]=void 0)}}const Et=/(?:Once|Passive|Capture)$/;function Ye(t){let e;if(Et.test(t)){e={};let s;for(;s=t.match(Et);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ut(t.slice(2)),e]}function Xe(t,e){const n=s=>{const o=s.timeStamp||Wt();(Ue||o>=n.attached-1)&&Le(Qe(s,n.value),e,5,[s])};return n.value=t,n.attached=Ge(),n}function Qe(t,e){if(pt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const Pt=/^on[a-z]/,Ke=(t,e,n,s,o=!1,r,a,c,d)=>{e==="class"?Fe(t,s,o):e==="style"?Re(t,n,s):be(e)?ye(e)||We(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ze(t,e,s,o))?Oe(t,e,s,r,a,c,d):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),De(t,e,s,o))};function Ze(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Pt.test(e)&&xe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Pt.test(e)&&Z(n)?!1:e in t}const Nt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pt(e)?n=>ge(e,n):e};function tn(t){t.target.composing=!0}function qt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const en={created(t,{modifiers:{lazy:e,trim:n,number:s}},o){t._assign=Nt(o);const r=s||o.props&&o.props.type==="number";V(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=kt(c)),t._assign(c)}),n&&V(t,"change",()=>{t.value=t.value.trim()}),e||(V(t,"compositionstart",tn),V(t,"compositionend",qt),V(t,"change",qt))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:o}},r){if(t._assign=Nt(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(o||t.type==="number")&&kt(t.value)===e))return;const a=e==null?"":e;t.value!==a&&(t.value=a)}},Mt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):J(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),J(t,!0),s.enter(t)):s.leave(t,()=>{J(t,!1)}):J(t,e))},beforeUnmount(t,{value:e}){J(t,e)}};function J(t,e){t.style.display=e?t._vod:"none"}const Yt=ve({patchProp:Ke},Be);let W,At=!1;function nn(){return W||(W=fe(Yt))}function sn(){return W=At?W:me(Yt),At=!0,W}const Ii=(...t)=>{nn().render(...t)},on=(...t)=>{const e=sn().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=rn(s);if(o)return n(o,!0,o instanceof SVGElement)},e};function rn(t){return Z(t)?document.querySelector(t):t}function an(t,e){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],c=Math.min(n.length,r.length);for(let d=0;d<c;d++){let h=n[d];const[_,$,T=""]=r[d];if(h.tagName.toLocaleLowerCase()===_){for(const y in $)h.getAttribute(y)!==$[y]&&h.setAttribute(y,$[y]);for(let y=0;y<h.attributes.length;y++){const w=h.attributes[y].name;w in $||h.removeAttribute(w)}h.innerHTML!==T&&(h.innerHTML=T)}else document.head.removeChild(h),h=It(r[d]),document.head.append(h);a.push(h)}n.slice(c).forEach(d=>document.head.removeChild(d)),r.slice(c).forEach(d=>{const h=It(d);document.head.appendChild(h),a.push(h)}),n=a};Y(()=>{const r=t.data,a=e.value,c=r&&r.title,d=r&&r.description,h=r&&r.frontmatter.head;document.title=(c?c+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",d||a.description),o([...h?cn(h):[]])})}function It([t,e,n]){const s=document.createElement(t);for(const o in e)s.setAttribute(o,e[o]);return n&&(s.innerHTML=n),s}function ln(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function cn(t){return t.filter(e=>!ln(e))}const un=/#.*$/,dn=/(index)?\.(md|html)$/,et=/\/$/,pn=/^[a-z]+:/i;function mt(t){return Array.isArray(t)}function gt(t){return pn.test(t)}function hn(t,e){if(e===void 0)return!1;const n=jt(`/${t.data.relativePath}`),s=jt(e);return n===s}function jt(t){return decodeURI(t).replace(un,"").replace(dn,"")}function _n(t,e){const n=t.endsWith("/"),s=e.startsWith("/");return n&&s?t.slice(0,-1)+e:!n&&!s?`${t}/${e}`:t+e}function dt(t){return/^\//.test(t)?t:`/${t}`}function Xt(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function mn(t){return t===!1||t==="auto"||mt(t)}function gn(t){return t.children!==void 0}function fn(t){return mt(t)?t.length===0:!t}function ft(t,e){if(mn(t))return t;e=dt(e);for(const n in t)if(e.startsWith(dt(n)))return t[n];return"auto"}function Qt(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:Xt(n.link)}),gn(n)&&(e=[...e,...Qt(n.children)]),e),[])}const vn=["href","aria-label"],bn=["src"],yn=g({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:s}=k();return(o,r)=>(u(),p("a",{class:"nav-bar-title",href:i(s),"aria-label":`${i(e).title}, back to home`},[i(n).logo?(u(),p("img",{key:0,class:"logo",src:i(q)(i(n).logo),alt:"Logo"},null,8,bn)):v("",!0),j(" "+m(i(e).title),1)],8,vn))}});var xn=x(yn,[["__scopeId","data-v-7ac13a1e"]]);function $n(){const{site:t,localePath:e,theme:n}=k();return b(()=>{const s=t.value.langs,o=Object.keys(s);if(o.length<2)return null;const a=U().path.replace(e.value,""),c=o.map(h=>({text:s[h].label,link:`${h}${a}`}));return{text:n.value.selectText||"Languages",items:c}})}const kn=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function wn(){const{site:t}=k();return b(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const s=Ln(n);return{text:Sn(s,e.repoLabel),link:s}})}function Ln(t){return Ce.test(t)?t:`https://github.com/${t}`}function Sn(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=kn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function Kt(t){const e=U(),n=gt(t.value.link);return{props:b(()=>{const o=Bt(`/${e.data.relativePath}`);let r=!1;if(t.value.activeMatch)r=new RegExp(t.value.activeMatch).test(o);else{const a=Bt(t.value.link);r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?t.value.link:q(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function Bt(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Cn={},Tn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},En=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Pn=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Nn=[En,Pn];function qn(t,e){return u(),p("svg",Tn,Nn)}var vt=x(Cn,[["render",qn]]);const Mn={class:"nav-link"},An=g({__name:"NavLink",props:{item:null},setup(t){const n=ht(t),{props:s,isExternal:o}=Kt(n.item);return(r,a)=>(u(),p("div",Mn,[l("a",zt({class:"item"},i(s)),[j(m(t.item.text)+" ",1),i(o)?(u(),N(vt,{key:0})):v("",!0)],16)]))}});var Ft=x(An,[["__scopeId","data-v-49fe041d"]]);const In=t=>(F("data-v-07381bdb"),t=t(),R(),t),jn={class:"nav-dropdown-link-item"},Bn=In(()=>l("span",{class:"arrow"},null,-1)),Fn={class:"text"},Rn={class:"icon"},Hn=g({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=ht(t),{props:s,isExternal:o}=Kt(n.item);return(r,a)=>(u(),p("div",jn,[l("a",zt({class:"item"},i(s)),[Bn,l("span",Fn,m(t.item.text),1),l("span",Rn,[i(o)?(u(),N(vt,{key:0})):v("",!0)])],16)]))}});var Dn=x(Hn,[["__scopeId","data-v-07381bdb"]]);const On=["aria-label"],Un={class:"button-text"},Vn={class:"dialog"},zn=g({__name:"NavDropdownLink",props:{item:null},setup(t){const e=U(),n=M(!1);X(()=>e.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(u(),p("div",{class:A(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":t.item.ariaLabel,onClick:s},[l("span",Un,m(t.item.text),1),l("span",{class:A(["button-arrow",n.value?"down":"right"])},null,2)],8,On),l("ul",Vn,[(u(!0),p(S,null,P(t.item.items,a=>(u(),p("li",{key:a.text,class:"dialog-item"},[f(Dn,{item:a},null,8,["item"])]))),128))])],2))}});var Rt=x(zn,[["__scopeId","data-v-18d75f62"]]);const Gn={key:0,class:"nav-links"},Jn={key:1,class:"item"},Wn={key:2,class:"item"},Yn=g({__name:"NavLinks",setup(t){const{theme:e}=k(),n=$n(),s=wn(),o=b(()=>e.value.nav||s.value||n.value);return(r,a)=>i(o)?(u(),p("nav",Gn,[i(e).nav?(u(!0),p(S,{key:0},P(i(e).nav,c=>(u(),p("div",{key:c.text,class:"item"},[c.items?(u(),N(Rt,{key:0,item:c},null,8,["item"])):(u(),N(Ft,{key:1,item:c},null,8,["item"]))]))),128)):v("",!0),i(n)?(u(),p("div",Jn,[f(Rt,{item:i(n)},null,8,["item"])])):v("",!0),i(s)?(u(),p("div",Wn,[f(Ft,{item:i(s)},null,8,["item"])])):v("",!0)])):v("",!0)}});var Zt=x(Yn,[["__scopeId","data-v-35b91e7e"]]);const Xn={emits:["toggle"]},Qn=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Kn=[Qn];function Zn(t,e,n,s,o,r){return u(),p("div",{class:"sidebar-button",onClick:e[0]||(e[0]=a=>t.$emit("toggle"))},Kn)}var ts=x(Xn,[["render",Zn]]);const es=t=>(F("data-v-40587210"),t=t(),R(),t),ns={class:"nav-bar"},ss=es(()=>l("div",{class:"flex-grow"},null,-1)),os={class:"nav"},rs=g({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(u(),p("header",ns,[f(ts,{onToggle:n[0]||(n[0]=s=>e.$emit("toggle"))}),f(xn),ss,l("div",os,[f(Zt)]),E(e.$slots,"search",{},void 0,!0)]))}});var as=x(rs,[["__scopeId","data-v-40587210"]]);function is(){let t=null,e=null;const n=ps(s,300);function s(){const a=ls(),c=cs(a);for(let d=0;d<c.length;d++){const h=c[d],_=c[d+1],[$,T]=ds(d,h,_);if($){history.replaceState(null,document.title,T||" "),o(T);return}}}function o(a){if(r(e),r(t),e=document.querySelector(`.sidebar a[href="${a}"]`),!e)return;e.classList.add("active");const c=e.closest(".sidebar-links > ul > li");c&&c!==e.parentElement?(t=c.querySelector("a"),t&&t.classList.add("active")):t=null}function r(a){a&&a.classList.remove("active")}I(()=>{s(),window.addEventListener("scroll",n)}),_t(()=>{o(decodeURIComponent(location.hash))}),Q(()=>{window.removeEventListener("scroll",n)})}function ls(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function cs(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function us(){return document.querySelector(".nav-bar").offsetHeight}function Ht(t){const e=us();return t.parentElement.offsetTop-e-15}function ds(t,e,n){const s=window.scrollY;return t===0&&s===0?[!0,null]:s<Ht(e)?[!1,null]:!n||s<Ht(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function ps(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),s=!0,setTimeout(()=>{s=!1},e))}}function hs(){const t=U(),{site:e}=k();return is(),b(()=>{const n=t.data.headers,s=t.data.frontmatter.sidebar,o=t.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Dt(n,o);const r=ft(e.value.themeConfig.sidebar,t.data.relativePath);return r===!1?[]:r==="auto"?Dt(n,o):r})}function Dt(t,e){const n=[];if(t===void 0)return[];let s;return t.forEach(({level:o,title:r,slug:a})=>{if(o-1>e)return;const c={text:r,link:`#${a}`};o===2?(s=c,n.push(c)):s&&(s.children||(s.children=[])).push(c)}),n}const te=t=>{const e=U(),{site:n,frontmatter:s}=k(),o=t.depth||1,r=s.value.sidebarDepth||1/0,a=e.data.headers,c=t.item.text,d=_s(n.value.base,t.item.link),h=t.item.children,_=hn(e,t.item.link),$=o<r?ee(_,h,a,o+1):null;return z("li",{class:"sidebar-link"},[z(d?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:d},c),$])};function _s(t,e){return e===void 0||e.startsWith("#")?e:_n(t,e)}function ee(t,e,n,s=1){return e&&e.length>0?z("ul",{class:"sidebar-links"},e.map(o=>z(te,{item:o,depth:s}))):t&&n?ee(!1,ms(n),void 0,s):null}function ms(t){return ne(gs(t))}function gs(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function ne(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?ne(e.children):void 0}))}const fs={key:0,class:"sidebar-links"},vs=g({__name:"SideBarLinks",setup(t){const e=hs();return(n,s)=>i(e).length>0?(u(),p("ul",fs,[(u(!0),p(S,null,P(i(e),o=>(u(),N(i(te),{item:o},null,8,["item"]))),256))])):v("",!0)}});const bs=g({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(u(),p("aside",{class:A(["sidebar",{open:t.open}])},[f(Zt,{class:"nav"}),E(e.$slots,"sidebar-top",{},void 0,!0),f(vs),E(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ys=x(bs,[["__scopeId","data-v-17c48e2f"]]);const xs=/bitbucket.org/;function $s(){const{page:t,theme:e,frontmatter:n}=k(),s=b(()=>{const{repo:r,docsDir:a="",docsBranch:c="master",docsRepo:d=r,editLinks:h}=e.value,_=n.value.editLink!=null?n.value.editLink:h,{relativePath:$}=t.value;return!_||!$||!r?null:ks(r,d,a,c,$)}),o=b(()=>e.value.editLinkText||"Edit this page");return{url:s,text:o}}function ks(t,e,n,s,o){return xs.test(t)?Ls(t,e,n,s,o):ws(t,e,n,s,o)}function ws(t,e,n,s,o){return(gt(e)?e:`https://github.com/${e}`).replace(et,"")+`/edit/${s}/`+(n?n.replace(et,"")+"/":"")+o}function Ls(t,e,n,s,o){return(gt(e)?e:t).replace(et,"")+`/src/${s}/`+(n?n.replace(et,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const Ss={class:"edit-link"},Cs=["href"],Ts=g({__name:"EditLink",setup(t){const{url:e,text:n}=$s();return(s,o)=>(u(),p("div",Ss,[i(e)?(u(),p("a",{key:0,class:"link",href:i(e),target:"_blank",rel:"noopener noreferrer"},[j(m(i(n))+" ",1),f(vt,{class:"icon"})],8,Cs)):v("",!0)]))}});var Es=x(Ts,[["__scopeId","data-v-55695e90"]]);const Ps={key:0,class:"last-updated"},Ns={class:"prefix"},qs={class:"datetime"},Ms=g({__name:"LastUpdated",setup(t){const{theme:e,page:n}=k(),s=b(()=>{const a=e.value.lastUpdated;return a!==void 0&&a!==!1}),o=b(()=>{const a=e.value.lastUpdated;return a===!0?"Last Updated":a}),r=M("");return I(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,c)=>i(s)?(u(),p("p",Ps,[l("span",Ns,m(i(o))+":",1),l("span",qs,m(r.value),1)])):v("",!0)}});var As=x(Ms,[["__scopeId","data-v-30c3cbb4"]]);const Is={class:"page-footer"},js={class:"edit"},Bs={class:"updated"},Fs=g({__name:"PageFooter",setup(t){return(e,n)=>(u(),p("footer",Is,[l("div",js,[f(Es)]),l("div",Bs,[f(As)])]))}});var Rs=x(Fs,[["__scopeId","data-v-5c96fb00"]]);function Hs(){const{page:t,theme:e}=k(),n=b(()=>Xt(dt(t.value.relativePath))),s=b(()=>{const d=ft(e.value.sidebar,n.value);return mt(d)?Qt(d):[]}),o=b(()=>s.value.findIndex(d=>d.link===n.value)),r=b(()=>{if(e.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=b(()=>{if(e.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),c=b(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:c}}const Ds={},Os={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Us=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Vs=[Us];function zs(t,e){return u(),p("svg",Os,Vs)}var Gs=x(Ds,[["render",zs]]);const Js={},Ws={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ys=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Xs=[Ys];function Qs(t,e){return u(),p("svg",Ws,Xs)}var Ks=x(Js,[["render",Qs]]);const Zs={key:0,class:"next-and-prev-link"},to={class:"container"},eo={class:"prev"},no=["href"],so={class:"text"},oo={class:"next"},ro=["href"],ao={class:"text"},io=g({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:s}=Hs();return(o,r)=>i(e)?(u(),p("div",Zs,[l("div",to,[l("div",eo,[i(n)?(u(),p("a",{key:0,class:"link",href:i(q)(i(n).link)},[f(Gs,{class:"icon icon-prev"}),l("span",so,m(i(n).text),1)],8,no)):v("",!0)]),l("div",oo,[i(s)?(u(),p("a",{key:0,class:"link",href:i(q)(i(s).link)},[l("span",ao,m(i(s).text),1),f(Ks,{class:"icon icon-next"})],8,ro)):v("",!0)])])])):v("",!0)}});var lo=x(io,[["__scopeId","data-v-e65a9748"]]);const co={class:"page"},uo={class:"container"},po=g({__name:"Page",setup(t){return(e,n)=>{const s=tt("Content");return u(),p("main",co,[l("div",uo,[E(e.$slots,"top",{},void 0,!0),f(s,{class:"content"}),f(Rs),f(lo),E(e.$slots,"bottom",{},void 0,!0)])])}}});var ho=x(po,[["__scopeId","data-v-8fcebc32"]]);const _o={key:0,id:"ads-container"},mo=g({__name:"Layout",setup(t){const e=Se(()=>st(()=>import("./Home.a2d29e95.js"),["assets/Home.a2d29e95.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.5e507a4a.js","assets/framework.fcec6aef.js","assets/plugin-vue_export-helper.21dcd24c.js"])),n=()=>null,s=n,o=n,r=n,a=U(),{site:c,page:d,theme:h,frontmatter:_}=k(),$=b(()=>!!_.value.customLayout),T=b(()=>!!_.value.home),y=b(()=>Object.keys(c.value.langs).length>1),w=b(()=>{const C=h.value;return _.value.navbar===!1||C.navbar===!1?!1:c.value.title||C.logo||C.repo||C.nav}),L=M(!1),B=b(()=>_.value.home||_.value.sidebar===!1?!1:!fn(ft(h.value.sidebar,a.data.relativePath))),rt=C=>{L.value=typeof C=="boolean"?C:!L.value},de=rt.bind(null,!1);X(a,de);const pe=b(()=>[{"no-navbar":!w.value,"sidebar-open":L.value,"no-sidebar":!B.value}]);return(C,$t)=>{const he=tt("Content"),_e=tt("Debug");return u(),p(S,null,[l("div",{class:A(["theme",i(pe)])},[i(w)?(u(),N(as,{key:0,onToggle:rt},{search:H(()=>[E(C.$slots,"navbar-search",{},()=>[i(h).algolia?(u(),N(i(r),{key:0,options:i(h).algolia,multilang:i(y)},null,8,["options","multilang"])):v("",!0)])]),_:3})):v("",!0),f(ys,{open:L.value},{"sidebar-top":H(()=>[E(C.$slots,"sidebar-top")]),"sidebar-bottom":H(()=>[E(C.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:$t[0]||($t[0]=Ni=>rt(!1))}),i($)?(u(),N(he,{key:1})):i(T)?E(C.$slots,"home",{key:2},()=>[f(i(e),null,{hero:H(()=>[E(C.$slots,"home-hero")]),features:H(()=>[E(C.$slots,"home-features")]),footer:H(()=>[E(C.$slots,"home-footer")]),_:3})]):(u(),N(ho,{key:3},{top:H(()=>[E(C.$slots,"page-top-ads",{},()=>[i(h).carbonAds&&i(h).carbonAds.carbon?(u(),p("div",_o,[(u(),N(i(s),{key:"carbon"+i(d).relativePath,code:i(h).carbonAds.carbon,placement:i(h).carbonAds.placement},null,8,["code","placement"]))])):v("",!0)]),E(C.$slots,"page-top")]),bottom:H(()=>[E(C.$slots,"page-bottom"),E(C.$slots,"page-bottom-ads",{},()=>[i(h).carbonAds&&i(h).carbonAds.custom?(u(),N(i(o),{key:"custom"+i(d).relativePath,code:i(h).carbonAds.custom,placement:i(h).carbonAds.placement},null,8,["code","placement"])):v("",!0)])]),_:3}))],2),f(_e)],64)}}}),go={class:"theme"},fo=l("h1",null,"404",-1),vo=["href"],bo=g({__name:"NotFound",setup(t){const{site:e}=k(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(u(),p("div",go,[fo,l("blockquote",null,m(s()),1),l("a",{href:i(e).base,"aria-label":"go to home"},"Take me home.",8,vo)]))}}),yo={Layout:mo,NotFound:bo};function xo(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),s=24*60*60*1e3,o=n/s,r=Math.floor(o),a=(o-r)*24,c=Math.floor(a),d=(a-c)*60,h=Math.floor(d),_=(d-h)*60,$=Math.floor(_);return{day:r,hour:c,minute:h,second:$}}const $o=()=>{const t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=t})};const ko=["href"],wo={class:"post-info"},Lo={class:"post-info-categories"},So=["href"],Co={key:1,href:"#"},To={class:"post-info-tags"},Eo=["href"],Po={key:1,href:"#"},No={datetime:"2022-01-25T19:21:35.000Z"},qo=["innerHTML"],Mo={class:"post-excerpt"},Ao=["innerHTML"],Io=l("span",{class:"post-btn"},"READ MORE +",-1),jo=g({__name:"PostItem",props:{article:Object},setup(t){return(e,n)=>(u(),p("a",{href:i(q)(t.article.regularPath),class:"post-item"},[l("div",wo,[l("div",null,[l("span",Lo,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(u(!0),p(S,{key:0},P(t.article.frontMatter.category,s=>(u(),p("a",{key:s,href:i(q)(`/pages/archives#category=${s}`)},m(s),9,So))),128)):(u(),p("a",Co,"Empty"))]),l("span",To,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(u(!0),p(S,{key:0},P(t.article.frontMatter.tags,s=>(u(),p("a",{key:s,href:i(q)(`/pages/archives#tag=${s}`)},m(s),9,Eo))),128)):(u(),p("a",Po," Empty "))])]),l("time",No,m(t.article.frontMatter.dateArr[2])+" / "+m(t.article.frontMatter.dateArr[1])+" / "+m(t.article.frontMatter.dateArr[0]),1)]),l("h1",{class:"post-title",innerHTML:t.article.frontMatter.title},null,8,qo),l("div",Mo,[l("div",{innerHTML:t.article.frontMatter.description},null,8,Ao)]),Io],8,ko))}});var Bo=[{title:"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883
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

`,excerpt:"",url:"/posts\\Vue\\comm"}];const Fo={class:"input-group"},Ro=l("i",{class:"fa fa-search"},null,-1),Ho={class:"result"},Do=["href"],Oo=["innerHTML"],Uo=["innerHTML"],Vo={key:0,class:"empty"},zo=g({__name:"Search",setup(t){const{theme:e}=k(),n=M("");let s=D([]);const o=b(()=>!!(s.length||n.value));Y(()=>{r(n.value)});function r(d){s.length=0,d.trim()!==""&&Bo.forEach(h=>{const _=JSON.parse(JSON.stringify(h)),$=new RegExp(d,"ig"),T=_.title.match($),y=_.content.match($);T&&(_.title=a(d,_.title)),y&&(_.content=a(d,_.content)),(T||y)&&s.push(_)})}const a=(d,h)=>{const _=new RegExp(d,"ig");return h.replace(_,`<span class="search-highlight">${d}</span>`)},c=()=>{n.value=""};return(d,h)=>i(e).search?(u(),p("div",{key:0,class:A(["search-wrapper",i(o)?"open":""])},[l("div",Fo,[Ro,lt(l("input",{type:"text",placeholder:"Search","onUpdate:modelValue":h[0]||(h[0]=_=>n.value=_)},null,512),[[en,n.value]]),n.value?(u(),p("i",{key:0,class:"fa fa-close",onClick:c})):v("",!0)]),l("ul",Ho,[(u(!0),p(S,null,P(i(s),_=>(u(),p("li",{key:_.title},[l("a",{href:_.url,onClick:c},[l("p",{innerHTML:_.title,class:"title"},null,8,Oo),l("p",{innerHTML:_.content,class:"content"},null,8,Uo)],8,Do)]))),128)),!i(s).length&&n.value!==""?(u(),p("li",Vo,"Empty")):v("",!0)])],2)):v("",!0)}}),Go=g({__name:"PostList",props:{posts:Array},setup(t){const e=M("");return(n,s)=>(u(),p(S,null,[f(zo,{filterKey:e.value,"onUpdate:filterKey":s[0]||(s[0]=o=>e.value=o)},null,8,["filterKey"]),l("div",null,[(u(!0),p(S,null,P(t.posts,(o,r)=>(u(),N(jo,{key:r,article:o},null,8,["article"]))),128))])],64))}});const Jo={class:"pagination"},Wo=["href"],Yo=["href"],Xo=["href"],Qo=g({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(u(),p("div",Jo,[t.current>1?(u(),p("a",{key:0,class:"link",href:i(q)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,Wo)):v("",!0),(u(!0),p(S,null,P(t.pageNum,s=>(u(),p("a",{class:A(["link",{active:t.current===s}]),key:s,href:i(q)(s===1?"/index.html":`/page_${s}.html`)},m(s),11,Yo))),128)),t.current<t.pageNum?(u(),p("a",{key:1,class:"link",href:i(q)(`/page_${t.current+1}.html`)},"Next",8,Xo)):v("",!0)]))}});var Ko=x(Qo,[["__scopeId","data-v-28fa3df2"]]);const Zo=g({__name:"index",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=D([]);return n=b(()=>{var o;return(((o=ht(e).posts)==null?void 0:o.value)||[]).map(r=>{const a=JSON.parse(JSON.stringify(r)),c=a.frontMatter.date;return a.frontMatter.dateArr=c.split("-"),a})}),I(()=>{$o()}),(s,o)=>(u(),p(S,null,[f(Go,{posts:i(n)},null,8,["posts"]),f(Ko,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});class tr{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class bt{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=bt.getPoint(this.dustQuantity);for(let n of e){const s=new tr;this.buildDust(n[0],n[1],s),this.dustArr.push(s)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let s of e)if(s.x<0||s.y<0){const o=this.width,r=Math.floor(Math.random()*window.innerHeight);s.x=o,s.y=r,this.buildDust(o,r,s)}else{const o=s.x-s.vx,r=s.y-s.vy;this.buildDust(o,r,s)}}buildDust(e,n,s){const o=this.ctx;e&&(s.x=e),n&&(s.y=n),o&&(o.beginPath(),o.shadowBlur=s.shadowBlur,o.shadowColor=s.color,o.shadowOffsetX=s.shadowX,o.shadowOffsetY=s.shadowY,o.ellipse(s.x,s.y,s.radiusX,s.radiusY,s.rotation,0,Math.PI*2),o.closePath(),o.fillStyle=s.color,o.fill())}resize(){const e=this.canvas,n=window.innerWidth,s=window.innerHeight;this.width=n,this.height=s,this.dustQuantity=Math.floor((n+s)/38),e!==void 0&&(e.width=n,e.height=s)}static getPoint(e=1){let n=[];for(let s=0;s<e;s++){const o=Math.floor(Math.random()*window.innerWidth),r=Math.floor(Math.random()*window.innerHeight);n.push([o,r])}return n}}const er={class:"menu-list"},nr=["href"],sr=["title"],or=g({__name:"index",setup(t){const{theme:e,page:n}=k(),s=e.value.nav,o=b(()=>`/${n.value.relativePath.split(".")[0]}`);return(r,a)=>(u(),p("header",null,[l("nav",null,[l("div",er,[(u(!0),p(S,null,P(i(s),c=>(u(),p("a",{href:c.link,key:c.link,class:A(c.link===i(o)?"active":"")},[l("i",{class:A(`fa fa-${c.icon}`),title:c.text},null,10,sr)],10,nr))),128))])])]))}});var rr=x(or,[["__scopeId","data-v-4729bdee"]]);const ar={key:0,class:"social-links"},ir=["href"],lr=["title"],cr=g({__name:"SocialLinks",setup(t){const{theme:e}=k();return(n,s)=>i(e).socialLinks.length?(u(),p("div",ar,[(u(!0),p(S,null,P(i(e).socialLinks,o=>(u(),p("a",{key:o.link,href:o.link,target:"_blank"},[l("i",{class:A(`fa fa-${o.icon}`),title:o.icon},null,10,lr)],8,ir))),128))])):v("",!0)}});var ur=x(cr,[["__scopeId","data-v-d284cb48"]]);const yt=t=>(F("data-v-12b81e60"),t=t(),R(),t),dr={key:0,class:"aside-wrapper"},pr={href:"/",class:"logo"},hr=["src"],_r={class:"center dr"},mr={href:"/"},gr={class:"total"},fr=["href"],vr=yt(()=>l("span",{class:"total-title"},"Archives Total",-1)),br={class:"total-number"},yr={class:"total-tags"},xr=yt(()=>l("span",{class:"total-title"},"Tags:",-1)),$r={class:"total-number"},kr={class:"total-categories"},wr=yt(()=>l("span",{class:"total-title"},"Categories:",-1)),Lr={class:"total-number"},Sr=g({__name:"index",setup(t){const{site:e,theme:n,frontmatter:s}=k(),o=e.value.title,r=n.value.logo,a=n.value.posts.length,c=n.value.tags.length,d=n.value.cats.length,h=b(()=>s.value.sidebar);return(_,$)=>i(h)?(u(),p("div",dr,[l("aside",null,[l("div",null,[l("a",pr,[l("img",{src:i(q)(i(r)),alt:"Logo"},null,8,hr)]),l("h1",_r,[l("a",mr,"Dr."+m(i(o)),1)]),l("section",gr,[l("a",{class:"total-archives",href:i(q)("/pages/archives")},[vr,l("span",br,m(i(a)),1)],8,fr),l("div",yr,[xr,l("span",$r,m(i(c)),1)]),l("div",kr,[wr,l("span",Lr,m(i(d)),1)])]),f(ur)])])])):v("",!0)}});var Cr=x(Sr,[["__scopeId","data-v-12b81e60"]]);class Tr{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const o=(await st(()=>import("./message.32cf0b70.js"),["assets/message.32cf0b70.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/framework.fcec6aef.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.5e507a4a.js"])).default,r=document.createElement("i");r.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(r),r.addEventListener("click",function(){const a=document.createElement("textarea"),c=r.previousElementSibling;a.value=c.innerText,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),o.success("Copied")})})}}const Er=t=>(F("data-v-059f3759"),t=t(),R(),t),Pr={class:"post-header"},Nr={class:"title"},qr={class:"info"},Mr={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},Ar=Er(()=>l("div",{class:"divider"},null,-1)),Ir=g({__name:"PostHeader",setup(t){const{frontmatter:e}=k();let n=b(()=>e.value.title),s=b(()=>{const o=e.value.date;return(o?new Date(o).toJSON().split("T")[0]:"").split("-")});return(o,r)=>(u(),p("div",Pr,[l("h1",Nr,m(i(n)),1),l("div",qr,[l("span",Mr,m(i(s)[2])+" / "+m(i(s)[1])+" / "+m(i(s)[0]),1)]),Ar]))}});var jr=x(Ir,[["__scopeId","data-v-059f3759"]]);const xt=t=>(F("data-v-6246841b"),t=t(),R(),t),Br={class:"post-footer"},Fr=xt(()=>l("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),Rr=["href"],Hr=xt(()=>l("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),Dr=["href"],Or=xt(()=>l("li",null,[l("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),j(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),l("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),j(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),Ur=g({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:s}=k();let o=b(()=>{const r=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${r}`});return b(()=>s.value.postFooter),(r,a)=>(u(),p("div",Br,[l("ul",null,[l("li",null,[Fr,l("a",{href:i(n).themeConfig.website,target:"_blank"},m(i(n).title),9,Rr)]),l("li",null,[Hr,l("a",{href:i(o),target:"_blank"},m(i(o)),9,Dr)]),Or])]))}});var Vr=x(Ur,[["__scopeId","data-v-6246841b"]]);const se=t=>(F("data-v-2ea4cd0e"),t=t(),R(),t),zr={class:"prev-next"},Gr=se(()=>l("hr",null,null,-1)),Jr=["href"],Wr={key:1},Yr=["href"],Xr={key:1},Qr=se(()=>l("hr",null,null,-1)),Kr=g({__name:"PrevNext",setup(t){const{theme:e,page:n}=k(),s=b(()=>e.value.posts),o=b(()=>n.value.frontmatter.title);let r=D({regularPath:"",frontMatter:{title:""}}),a=D({regularPath:"",frontMatter:{title:""}});const c=(d,h)=>{h?(d.regularPath=h.regularPath,d.frontMatter.title=h.frontMatter.title):(d.regularPath="",d.frontMatter.title="")};return Y(()=>{const d=s.value.findIndex(h=>h.frontMatter.title===o.value);if(d>-1){const h=s.value[d-1],_=s.value[d+1];c(r,h),c(a,_)}}),(d,h)=>{var _,$,T,y,w,L;return u(),p("div",zr,[Gr,l("div",null,[lt(l("a",{class:"prev",href:i(q)((_=i(r))==null?void 0:_.regularPath)},[i(e).docFooter.prev.icon?(u(),p("i",{key:0,class:A(`fa fa-${i(e).docFooter.prev.icon}`)},null,2)):v("",!0),i(e).docFooter.prev.text?(u(),p("span",Wr,m(i(e).docFooter.prev.text),1)):v("",!0),j(" "+m((T=($=i(r))==null?void 0:$.frontMatter)==null?void 0:T.title),1)],8,Jr),[[Mt,i(r).regularPath]]),lt(l("a",{class:"next",href:i(q)((y=i(a))==null?void 0:y.regularPath)},[j(m((L=(w=i(a))==null?void 0:w.frontMatter)==null?void 0:L.title)+" ",1),i(e).docFooter.next.icon?(u(),p("i",{key:0,class:A(`fa fa-${i(e).docFooter.next.icon}`)},null,2)):v("",!0),i(e).docFooter.next.text?(u(),p("span",Xr,m(i(e).docFooter.next.text),1)):v("",!0)],8,Yr),[[Mt,i(a).regularPath]])]),Qr])}}});var Zr=x(Kr,[["__scopeId","data-v-2ea4cd0e"]]);function ta(t){let e=t[0];for(let n=1;n<t.length;n++){const s=t[n];s.length>e.length&&(e=s)}return e}function oe(t,e){return Array.from(t).filter(o=>e.test(o.nodeName))}function re(t,e){let n,s,o=0;return function(){n=this,s=arguments;let r=new Date().valueOf();r-o>e&&(t.apply(n,s),o=r)}}const ae=t=>(F("data-v-46ebd702"),t=t(),R(),t),ea=ae(()=>l("i",{class:"fa fa-caret-up"},null,-1)),na=ae(()=>l("p",null,"TOP",-1)),sa=[ea,na],oa=g({__name:"BackTop",setup(t){const e=M(0),n=b(()=>e.value>300?"block":"none");I(()=>{window.addEventListener("scroll",o)}),Q(()=>{window.removeEventListener("scroll",o)});const s=()=>{e.value=document.documentElement.scrollTop},o=re.bind(this,s,1e3)(),r=()=>{const a=document.documentElement.scrollTop/6,c=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-a,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(c)},50)};return(a,c)=>(u(),p("div",{class:"back-top",style:Gt({display:i(n)}),onClick:r},sa,4))}});var ra=x(oa,[["__scopeId","data-v-46ebd702"]]);const ot=t=>(F("data-v-6f889226"),t=t(),R(),t),aa=ot(()=>l("i",{class:"fa fa-heartbeat mr4"},null,-1)),ia=ot(()=>l("p",null,[j(" Power With "),l("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),j(" & "),l("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),la=ot(()=>l("div",null,[l("span",null,"\xA9"),l("span",null,"2021 to 2022")],-1)),ca=ot(()=>l("div",null,[l("span",null,"ICP"),l("span",null,"\u2014 RHODEISLAND \u2014")],-1)),ua=g({__name:"Footer",setup(t){const{theme:e}=k(),n=M();let s=D({day:0,hour:0,minute:0,second:0}),o=null;I(()=>{e.value.footer.runtime.enable&&(o=setInterval(r,1e3))}),Q(()=>{o&&clearInterval(o)});const r=()=>{const a=xo();s.day=a.day,s.hour=a.hour,s.minute=a.minute,s.second=a.second};return(a,c)=>(u(),p("footer",null,[i(e).footer.runtime.enable?(u(),p("p",{key:0,ref_key:"runtimeRef",ref:n},[aa,j(" "+m(i(s).day)+" days "+m(i(s).hour)+" hours "+m(i(s).minute)+" minutes and "+m(i(s).second)+" seconds ",1)],512)):v("",!0),ia,i(e).footer.copyright?(u(),p(S,{key:1},[la,ca],64)):v("",!0)]))}});var da=x(ua,[["__scopeId","data-v-6f889226"]]);const ie=/^H[1-6]{1,}$/,pa=t=>{const e=t.childNodes,n=oe(e,ie);return ha(n)};function ha(t){const e=[];for(let n=0;n<t.length;n++){const s=t[n],o=/^(_\d)+(-\d)*/ig,r=s.id.match(o)[0];e.push({nodeName:s.nodeName,text:s.innerText.slice(0,s.innerText.length-1),id:s.id,level:r})}return _a(e)}function _a(t){const e=[],n={};t.forEach(s=>{n[s.level]=s});for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const o=n[s];if(/^(_\d)+$/ig.test(s))e.push(o);else{const c=Object.keys(n).filter(h=>h!==s&&s.includes(h)),d=ta(c);n[d].child?n[d].child.push(o):n[d].child=[o]}}return e}const ma=["href","name","title","onClick"],ga=g({__name:"CataList",props:{tree:Array},setup(t){const e=n=>{n.open=!n.open,n.active=!0};return(n,s)=>(u(),p("ul",null,[(u(!0),p(S,null,P(t.tree,o=>{var r;return u(),p("li",{key:o.id},[l("a",{href:`#${o.id}`,name:o.id,title:o.text,class:A([[o.nodeName,o.active?"active":""],"link"]),onClick:a=>e(o)},m(o.text),11,ma),((r=o.child)==null?void 0:r.length)&&o.open?(u(),N(le,{key:0,tree:o.child},null,8,["tree"])):v("",!0)])}),128))]))}});var le=x(ga,[["__scopeId","data-v-33c6374d"]]);const fa={key:0,class:"catalog"},va=g({__name:"index",setup(t){const{frontmatter:e}=k(),n=M(0),s=M(0),o=D({data:[]}),r=D({titleNodes:[],titleMargins:[]});X(e,(y,w)=>{a()},{deep:!0}),I(()=>{a(),window.addEventListener("scroll",d)}),Q(()=>{window.removeEventListener("scroll",d)});const a=()=>{var L;const y=(L=document.getElementById("content"))==null?void 0:L.childNodes[0],w=pa(y);o.data=w,s.value=y.getBoundingClientRect().top,_(y)},c=()=>{n.value=document.documentElement.scrollTop,h()},d=re.bind(this,c,50)(),h=()=>{const y=r.titleMargins;for(let w=0;w<y.length;w++){const L=y[w];if(L.top-n.value>=s.value){T(o.data),$(o.data,L.id);return}}},_=y=>{const w=y.childNodes;r.titleNodes=oe(w,ie);const L=r.titleNodes.map(B=>({id:B.id,top:B.getBoundingClientRect().top}));r.titleMargins=L,h()},$=(y,w)=>{for(let L=0;L<y.length;L++){const B=y[L];if(B.id===w){B.active=!0,B.open=!0;return}B.child&&$(B.child,w)}},T=y=>{for(let w=0;w<y.length;w++){const L=y[w];L.active&&(L.active=!1),L.child&&T(L.child)}};return(y,w)=>o.data.length?(u(),p("div",fa,[f(le,{tree:o.data},null,8,["tree"])])):v("",!0)}});var ba=x(va,[["__scopeId","data-v-32f802b6"]]);const ya={key:0,class:"post-tag"},xa=l("i",{class:"fa fa-tag"},null,-1),$a=["href"],ka=g({__name:"index",setup(t){const{frontmatter:e}=k(),n=b(()=>e.value.page),s=b(()=>e.value.tags||[]);I(()=>{o()}),_t(()=>{o()});const o=()=>{n.value||new Tr};return(r,a)=>{const c=tt("Content");return u(),p("div",{class:A(["content",i(n)?"":"post-content"]),id:"postContent"},[i(n)?v("",!0):(u(),N(jr,{key:0})),f(c,{id:"content"}),i(n)?v("",!0):(u(),p(S,{key:1},[i(s).length?(u(),p("p",ya,[xa,(u(!0),p(S,null,P(i(s),d=>(u(),p("a",{key:d,href:`/pages/archives#tag=${d}`},m(d),9,$a))),128))])):v("",!0),f(Vr),f(Zr),f(ra),f(ba)],64)),f(da)],2)}}}),wa=()=>z("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"}),La=t=>{const e=localStorage.getItem(t);return e&&JSON.parse(e)},Ot=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};const Sa=g({__name:"BgToggle",props:{bgUrl:String},emits:["update:bgUrl"],setup(t,{emit:e}){const{theme:n}=k(),s=n.value.bgUrls,o=M(0);Y(()=>{e("update:bgUrl",s[o.value])}),I(()=>{r()});const r=()=>{const c=La("bgIdx");c==null?Ot("bgIdx",o.value):o.value=c},a=()=>{o.value>=s.length-1?o.value=0:o.value++,Ot("bgIdx",o.value)};return(c,d)=>(u(),p("i",{class:"fa fa-refresh bg-toggle",title:"toggle background",onClick:a}))}});var Ca=x(Sa,[["__scopeId","data-v-5e0949be"]]);const Ta={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Ea=g({__name:"NewLayout",setup(t){const{theme:e}=k(),n=M("");return I(()=>{new bt("canvas-dust")}),(s,o)=>(u(),p(S,null,[l("main",{class:"layout",style:Gt({"background-image":`url(${n.value})`})},[f(Cr,{class:"aside"}),f(ka,{class:"content"}),f(rr,{class:"navbar"})],4),f(Ca,{bgUrl:n.value,"onUpdate:bgUrl":o[0]||(o[0]=r=>n.value=r)},null,8,["bgUrl"]),i(e).live2d?(u(),N(i(wa),{key:0})):v("",!0),l("canvas",Ta,null,512)],64))}});var Pa=x(Ea,[["__scopeId","data-v-603fe8f0"]]);function Na(t){const e=[];let n="0",s=-1;for(let o=0;o<t.length;o++){const r=t[o];if(r.frontMatter.date){const a=r.frontMatter.date.split("-")[0];a===n?e[s].push(r):(s++,e[s]=[],e[s].push(r),n=a)}}return e}function qa(t,e="",n=""){const s=[];for(let o=0;o<t.length;o++){const r=t[o],a=!e||e&&r.frontMatter.category.includes(e),c=!n||n&&r.frontMatter.tags.includes(n);a&&c&&s.push(r)}return Na(s)}const Ma={class:"categories"},Aa=l("h1",null,"categories",-1),Ia={class:"list"},ja=["onClick"],Ba={class:"link",href:"#"},Fa={class:"count"},Ra=g({__name:"Categories",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const n=t,s=o=>{e("toggle",o,n.selected===o)};return(o,r)=>(u(),p("div",Ma,[Aa,l("ul",Ia,[(u(!0),p(S,null,P(t.list,(a,c)=>(u(),p("li",{onClick:d=>s(c),class:A(["item",t.selected==c?"active":""])},[l("a",Ba,"# "+m(c)+" #",1),l("span",Fa,m(t.list[c].length),1)],10,ja))),256))])]))}});const Ha=t=>(F("data-v-571f05fe"),t=t(),R(),t),Da={class:"tags"},Oa=Ha(()=>l("h1",null,"tags",-1)),Ua={class:"list",itemprop:"keywords"},Va=["onClick"],za={class:"link",href:"#",rel:"tag"},Ga={class:"count"},Ja=g({__name:"Tags",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const n=t,s=o=>{e("toggle",o,n.selected===o)};return(o,r)=>(u(),p("div",Da,[Oa,l("ul",Ua,[(u(!0),p(S,null,P(t.list,(a,c)=>(u(),p("li",{onClick:d=>s(c),class:A(["item",t.selected==c?"active":""])},[l("a",za,m(c),1),l("span",Ga,m(a),1)],10,Va))),256))])]))}});var Wa=x(Ja,[["__scopeId","data-v-571f05fe"]]);const Ya={class:"archive-list"},Xa=l("h1",null,"archives",-1),Qa={class:"bg"},Ka=["href"],Za=g({__name:"ArchiveList",props:{list:{type:Array,required:!0}},setup(t){return(e,n)=>(u(),p("div",Ya,[Xa,t.list.length?(u(!0),p(S,{key:0},P(t.list,s=>(u(),p("div",Qa,[l("h2",null,m(s[0].frontMatter.date.split("-")[0]),1),(u(!0),p(S,null,P(s,(o,r)=>(u(),p("div",{key:r,class:"article-item"},[l("time",null,m(o.frontMatter.date.slice(5)),1),l("a",{href:i(q)(o.regularPath)},m(o.frontMatter.title),9,Ka)]))),128))]))),256)):v("",!0)]))}});const ti={class:"archive-wrapper"},ei={class:"aside"},ni=g({__name:"index",setup(t){const{theme:e}=k(),n=e.value.tags,s=e.value.cats;let o=D({list:[]}),r=M(""),a=M("");const c=(h,_)=>{a.value=_?"":h},d=(h,_)=>{r.value=_?"":h};return Y(()=>{o.list=qa(e.value.posts,a.value,r.value)}),I(()=>{const h=document.location.hash;if(h){const _=h.substring(1).split("=")[0],$=h.substring(1).split("=")[1];_==="tag"?r.value=$:a.value=$}}),(h,_)=>(u(),p("div",ti,[f(Za,{list:i(o).list,class:"plane"},null,8,["list"]),l("div",ei,[f(Ra,{list:i(s),selected:i(a),onToggle:c,class:"plane"},null,8,["list","selected"]),f(Wa,{list:i(n),selected:i(r),onToggle:d,class:"plane"},null,8,["list","selected"])])]))}}),si={key:0,id:"comment"},oi=g({__name:"Comment",setup(t){const{theme:e,frontmatter:n}=k(),s=b(()=>n.value.comment);let o=e.value.valine,r=M();I(async()=>{let c=await st(()=>import("./Valine.min.ad08ee52.js").then(function(d){return d.V}),[]);r.value=c.default,a()}),_t(()=>{a()});const a=()=>{s&&new r.value({el:"#comment",...o})};return(c,d)=>i(s)?(u(),p("div",si)):v("",!0)}});const ce=t=>(F("data-v-090025bd"),t=t(),R(),t),ri={class:"feedback"},ai={class:"tc"},ii=j("Feedback "),li=["id"],ci=ce(()=>l("i",{class:"fa fa-eye mr4"},null,-1)),ui=ce(()=>l("i",{class:"leancloud-visitors-count"},"0",-1)),di=[ci,ui],pi=g({__name:"Feedback",setup(t){const{page:e}=k();return(n,s)=>(u(),p("div",ri,[l("h1",ai,[ii,l("div",{id:`/${i(e).relativePath.replace(".md",".html")}`,class:"leancloud_visitors","data-flag-title":"Your Article Title"},di,8,li)]),f(oi)]))}});var hi=x(pi,[["__scopeId","data-v-090025bd"]]);const _i={},mi={class:"loading-wrap hover",width:"100",height:"100",viewBox:"0 0 40 60"},gi=l("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1),fi=l("text",{class:"loading-text",x:"0",y:"45",fill:"#fff"},"Loading...",-1),vi=[gi,fi];function bi(t,e){return u(),p("svg",mi,vi)}var yi=x(_i,[["render",bi]]);var nt={...yo,Layout:Pa,enhanceApp({app:t}){t.component("Archives",ni),t.component("Page",Zo),t.component("Feedback",hi),t.component("Loading",yi)}};const it=new Set,ue=()=>document.createElement("link"),xi=t=>{const e=ue();e.rel="prefetch",e.href=t,document.head.appendChild(e)},$i=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let K;const ki=G&&(K=ue())&&K.relList&&K.relList.supports&&K.relList.supports("prefetch")?xi:$i;function wi(){if(!G||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const c=a.target;n.unobserve(c);const{pathname:d}=c;if(!it.has(d)){it.add(d);const h=Jt(d);ki(h)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:c,pathname:d}=r,h=d.match(/\.\w+$/);h&&h[0]!==".html"||a!=="_blank"&&c===location.hostname&&(d!==location.pathname?n.observe(r):it.add(d))})})};I(s);const o=U();X(()=>o.path,s),Q(()=>{n&&n.disconnect()})}const Li=g({setup(t,{slots:e}){const n=M(!1);return I(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Si=nt.NotFound||(()=>"404 Not Found"),Ci={name:"VitePressApp",setup(){const{site:t}=k();return I(()=>{X(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),wi(),()=>z(nt.Layout)}};function Ti(){const t=Pi(),e=Ei();e.provide(Ee,t);const n=Pe(t.route);return e.provide(Ne,n),G&&an(t.route,n.site),e.component("Content",qe),e.component("ClientOnly",Li),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),nt.enhanceApp&&nt.enhanceApp({app:e,router:t,siteData:Me}),{app:e,router:t}}function Ei(){return on(Ci)}function Pi(){let t=G,e;return Te(n=>{let s=Jt(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),G?(t=!1,st(()=>import(s),[])):require(s)},Si)}if(G){const{app:t,router:e}=Ti();e.go().then(()=>{t.mount("#app")})}export{Ft as N,Ti as createApp,Ii as r};
