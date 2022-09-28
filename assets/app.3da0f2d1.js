import{i as Q,c as me,a as pt,b as fe,t as $t,d as ge,e as ve,f as be,g as ye,h as xe,j as Rt,k as $e,l as ke,m as we,n as Ut,o as Le,w as W,p as g,q as u,r as p,u as i,s as b,v as I,x as m,y,z as l,A as ht,B as P,C as Gt,D as j,E as F,F as N,G as et,H as M,I as L,J as E,K as v,L as T,M as q,N as nt,O as Y,P as G,Q as K,R as Se,S as H,T as B,U as lt,V as Vt}from"./framework.fcec6aef.js";import{u as w,w as A,a as R,E as Ce,i as V,p as zt,c as Te,R as Ee,b as Pe,d as Ae,C as Me,s as Ne}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.89ed8307.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const qe="modulepreload",kt={},Ie="/",st=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Ie}${s}`,s in kt)return;kt[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":qe,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},je="http://www.w3.org/2000/svg",O=typeof document!="undefined"?document:null,wt=O&&O.createElement("template"),Fe={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const o=e?O.createElementNS(je,t):O.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>O.createTextNode(t),createComment:t=>O.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>O.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,o,r){const a=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{wt.innerHTML=s?`<svg>${t}</svg>`:t;const c=wt.content;if(s){const d=c.firstChild;for(;d.firstChild;)c.appendChild(d.firstChild);c.removeChild(d)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Be(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function He(t,e,n){const s=t.style,o=Q(n);if(n&&!o){for(const r in n)ct(s,r,n[r]);if(e&&!Q(e))for(const r in e)n[r]==null&&ct(s,r,"")}else{const r=s.display;o?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Lt=/\s*!important$/;function ct(t,e,n){if(pt(n))n.forEach(s=>ct(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=De(t,e);Lt.test(n)?t.setProperty(Rt(s),n.replace(Lt,""),"important"):t[s]=n}}const St=["Webkit","Moz","ms"],at={};function De(t,e){const n=at[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return at[e]=s;s=ke(s);for(let o=0;o<St.length;o++){const r=St[o]+s;if(r in t)return at[e]=r}return e}const Ct="http://www.w3.org/1999/xlink";function Oe(t,e,n,s,o){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ct,e.slice(6,e.length)):t.setAttributeNS(Ct,e,n);else{const r=we(e);n==null||r&&!Ut(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Re(t,e,n,s,o,r,a){if(e==="innerHTML"||e==="textContent"){s&&a(s,o,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const d=n==null?"":n;(t.value!==d||t.tagName==="OPTION")&&(t.value=d),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const d=typeof t[e];d==="boolean"?n=Ut(n):n==null&&d==="string"?(n="",c=!0):d==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[Jt,Ue]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ut=0;const Ge=Promise.resolve(),Ve=()=>{ut=0},ze=()=>ut||(Ge.then(Ve),ut=Jt());function U(t,e,n,s){t.addEventListener(e,n,s)}function Je(t,e,n,s){t.removeEventListener(e,n,s)}function We(t,e,n,s,o=null){const r=t._vei||(t._vei={}),a=r[e];if(s&&a)a.value=s;else{const[c,d]=Ye(e);if(s){const h=r[e]=Xe(s,o);U(t,c,h,d)}else a&&(Je(t,c,a,d),r[e]=void 0)}}const Tt=/(?:Once|Passive|Capture)$/;function Ye(t){let e;if(Tt.test(t)){e={};let s;for(;s=t.match(Tt);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rt(t.slice(2)),e]}function Xe(t,e){const n=s=>{const o=s.timeStamp||Jt();(Ue||o>=n.attached-1)&&Le(Qe(s,n.value),e,5,[s])};return n.value=t,n.attached=ze(),n}function Qe(t,e){if(pt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const Et=/^on[a-z]/,Ke=(t,e,n,s,o=!1,r,a,c,d)=>{e==="class"?Be(t,s,o):e==="style"?He(t,n,s):be(e)?ye(e)||We(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ze(t,e,s,o))?Re(t,e,s,r,a,c,d):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Oe(t,e,s,o))};function Ze(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Et.test(e)&&xe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Et.test(e)&&Q(n)?!1:e in t}const Pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pt(e)?n=>fe(e,n):e};function tn(t){t.target.composing=!0}function At(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const en={created(t,{modifiers:{lazy:e,trim:n,number:s}},o){t._assign=Pt(o);const r=s||o.props&&o.props.type==="number";U(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=$t(c)),t._assign(c)}),n&&U(t,"change",()=>{t.value=t.value.trim()}),e||(U(t,"compositionstart",tn),U(t,"compositionend",At),U(t,"change",At))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:o}},r){if(t._assign=Pt(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(o||t.type==="number")&&$t(t.value)===e))return;const a=e==null?"":e;t.value!==a&&(t.value=a)}},Mt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):z(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),z(t,!0),s.enter(t)):s.leave(t,()=>{z(t,!1)}):z(t,e))},beforeUnmount(t,{value:e}){z(t,e)}};function z(t,e){t.style.display=e?t._vod:"none"}const Wt=ve({patchProp:Ke},Fe);let J,Nt=!1;function nn(){return J||(J=ge(Wt))}function sn(){return J=Nt?J:me(Wt),Nt=!0,J}const Ii=(...t)=>{nn().render(...t)},on=(...t)=>{const e=sn().createApp(...t),{mount:n}=e;return e.mount=s=>{const o=rn(s);if(o)return n(o,!0,o instanceof SVGElement)},e};function rn(t){return Q(t)?document.querySelector(t):t}function an(t,e){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],c=Math.min(n.length,r.length);for(let d=0;d<c;d++){let h=n[d];const[_,f,k=""]=r[d];if(h.tagName.toLocaleLowerCase()===_){for(const $ in f)h.getAttribute($)!==f[$]&&h.setAttribute($,f[$]);for(let $=0;$<h.attributes.length;$++){const C=h.attributes[$].name;C in f||h.removeAttribute(C)}h.innerHTML!==k&&(h.innerHTML=k)}else document.head.removeChild(h),h=qt(r[d]),document.head.append(h);a.push(h)}n.slice(c).forEach(d=>document.head.removeChild(d)),r.slice(c).forEach(d=>{const h=qt(d);document.head.appendChild(h),a.push(h)}),n=a};W(()=>{const r=t.data,a=e.value,c=r&&r.title,d=r&&r.description,h=r&&r.frontmatter.head;document.title=(c?c+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",d||a.description),o([...h?cn(h):[]])})}function qt([t,e,n]){const s=document.createElement(t);for(const o in e)s.setAttribute(o,e[o]);return n&&(s.innerHTML=n),s}function ln(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function cn(t){return t.filter(e=>!ln(e))}const un=/#.*$/,dn=/(index)?\.(md|html)$/,Z=/\/$/,pn=/^[a-z]+:/i;function _t(t){return Array.isArray(t)}function mt(t){return pn.test(t)}function hn(t,e){if(e===void 0)return!1;const n=It(`/${t.data.relativePath}`),s=It(e);return n===s}function It(t){return decodeURI(t).replace(un,"").replace(dn,"")}function _n(t,e){const n=t.endsWith("/"),s=e.startsWith("/");return n&&s?t.slice(0,-1)+e:!n&&!s?`${t}/${e}`:t+e}function dt(t){return/^\//.test(t)?t:`/${t}`}function Yt(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function mn(t){return t===!1||t==="auto"||_t(t)}function fn(t){return t.children!==void 0}function gn(t){return _t(t)?t.length===0:!t}function ft(t,e){if(mn(t))return t;e=dt(e);for(const n in t)if(e.startsWith(dt(n)))return t[n];return"auto"}function Xt(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:Yt(n.link)}),fn(n)&&(e=[...e,...Xt(n.children)]),e),[])}const vn=["href","aria-label"],bn=["src"],yn=g({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:s}=w();return(o,r)=>(u(),p("a",{class:"nav-bar-title",href:i(s),"aria-label":`${i(e).title}, back to home`},[i(n).logo?(u(),p("img",{key:0,class:"logo",src:i(A)(i(n).logo),alt:"Logo"},null,8,bn)):b("",!0),I(" "+m(i(e).title),1)],8,vn))}});var xn=x(yn,[["__scopeId","data-v-7ac13a1e"]]);function $n(){const{site:t,localePath:e,theme:n}=w();return y(()=>{const s=t.value.langs,o=Object.keys(s);if(o.length<2)return null;const a=R().path.replace(e.value,""),c=o.map(h=>({text:s[h].label,link:`${h}${a}`}));return{text:n.value.selectText||"Languages",items:c}})}const kn=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function wn(){const{site:t}=w();return y(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const s=Ln(n);return{text:Sn(s,e.repoLabel),link:s}})}function Ln(t){return Ce.test(t)?t:`https://github.com/${t}`}function Sn(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=kn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function Qt(t){const e=R(),n=mt(t.value.link);return{props:y(()=>{const o=jt(`/${e.data.relativePath}`);let r=!1;if(t.value.activeMatch)r=new RegExp(t.value.activeMatch).test(o);else{const a=jt(t.value.link);r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?t.value.link:A(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function jt(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Cn={},Tn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},En=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Pn=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),An=[En,Pn];function Mn(t,e){return u(),p("svg",Tn,An)}var gt=x(Cn,[["render",Mn]]);const Nn={class:"nav-link"},qn=g({__name:"NavLink",props:{item:null},setup(t){const n=ht(t),{props:s,isExternal:o}=Qt(n.item);return(r,a)=>(u(),p("div",Nn,[l("a",Gt({class:"item"},i(s)),[I(m(t.item.text)+" ",1),i(o)?(u(),P(gt,{key:0})):b("",!0)],16)]))}});var Ft=x(qn,[["__scopeId","data-v-49fe041d"]]);const In=t=>(j("data-v-07381bdb"),t=t(),F(),t),jn={class:"nav-dropdown-link-item"},Fn=In(()=>l("span",{class:"arrow"},null,-1)),Bn={class:"text"},Hn={class:"icon"},Dn=g({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=ht(t),{props:s,isExternal:o}=Qt(n.item);return(r,a)=>(u(),p("div",jn,[l("a",Gt({class:"item"},i(s)),[Fn,l("span",Bn,m(t.item.text),1),l("span",Hn,[i(o)?(u(),P(gt,{key:0})):b("",!0)])],16)]))}});var On=x(Dn,[["__scopeId","data-v-07381bdb"]]);const Rn=["aria-label"],Un={class:"button-text"},Gn={class:"dialog"},Vn=g({__name:"NavDropdownLink",props:{item:null},setup(t){const e=R(),n=N(!1);et(()=>e.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(u(),p("div",{class:M(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":t.item.ariaLabel,onClick:s},[l("span",Un,m(t.item.text),1),l("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Rn),l("ul",Gn,[(u(!0),p(L,null,E(t.item.items,a=>(u(),p("li",{key:a.text,class:"dialog-item"},[v(On,{item:a},null,8,["item"])]))),128))])],2))}});var Bt=x(Vn,[["__scopeId","data-v-18d75f62"]]);const zn={key:0,class:"nav-links"},Jn={key:1,class:"item"},Wn={key:2,class:"item"},Yn=g({__name:"NavLinks",setup(t){const{theme:e}=w(),n=$n(),s=wn(),o=y(()=>e.value.nav||s.value||n.value);return(r,a)=>i(o)?(u(),p("nav",zn,[i(e).nav?(u(!0),p(L,{key:0},E(i(e).nav,c=>(u(),p("div",{key:c.text,class:"item"},[c.items?(u(),P(Bt,{key:0,item:c},null,8,["item"])):(u(),P(Ft,{key:1,item:c},null,8,["item"]))]))),128)):b("",!0),i(n)?(u(),p("div",Jn,[v(Bt,{item:i(n)},null,8,["item"])])):b("",!0),i(s)?(u(),p("div",Wn,[v(Ft,{item:i(s)},null,8,["item"])])):b("",!0)])):b("",!0)}});var Kt=x(Yn,[["__scopeId","data-v-35b91e7e"]]);const Xn={emits:["toggle"]},Qn=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Kn=[Qn];function Zn(t,e,n,s,o,r){return u(),p("div",{class:"sidebar-button",onClick:e[0]||(e[0]=a=>t.$emit("toggle"))},Kn)}var ts=x(Xn,[["render",Zn]]);const es=t=>(j("data-v-40587210"),t=t(),F(),t),ns={class:"nav-bar"},ss=es(()=>l("div",{class:"flex-grow"},null,-1)),os={class:"nav"},rs=g({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(u(),p("header",ns,[v(ts,{onToggle:n[0]||(n[0]=s=>e.$emit("toggle"))}),v(xn),ss,l("div",os,[v(Kt)]),T(e.$slots,"search",{},void 0,!0)]))}});var as=x(rs,[["__scopeId","data-v-40587210"]]);function is(){let t=null,e=null;const n=ps(s,300);function s(){const a=ls(),c=cs(a);for(let d=0;d<c.length;d++){const h=c[d],_=c[d+1],[f,k]=ds(d,h,_);if(f){history.replaceState(null,document.title,k||" "),o(k);return}}}function o(a){if(r(e),r(t),e=document.querySelector(`.sidebar a[href="${a}"]`),!e)return;e.classList.add("active");const c=e.closest(".sidebar-links > ul > li");c&&c!==e.parentElement?(t=c.querySelector("a"),t&&t.classList.add("active")):t=null}function r(a){a&&a.classList.remove("active")}q(()=>{s(),window.addEventListener("scroll",n)}),nt(()=>{o(decodeURIComponent(location.hash))}),Y(()=>{window.removeEventListener("scroll",n)})}function ls(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function cs(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function us(){return document.querySelector(".nav-bar").offsetHeight}function Ht(t){const e=us();return t.parentElement.offsetTop-e-15}function ds(t,e,n){const s=window.scrollY;return t===0&&s===0?[!0,null]:s<Ht(e)?[!1,null]:!n||s<Ht(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function ps(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),s=!0,setTimeout(()=>{s=!1},e))}}function hs(){const t=R(),{site:e}=w();return is(),y(()=>{const n=t.data.headers,s=t.data.frontmatter.sidebar,o=t.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Dt(n,o);const r=ft(e.value.themeConfig.sidebar,t.data.relativePath);return r===!1?[]:r==="auto"?Dt(n,o):r})}function Dt(t,e){const n=[];if(t===void 0)return[];let s;return t.forEach(({level:o,title:r,slug:a})=>{if(o-1>e)return;const c={text:r,link:`#${a}`};o===2?(s=c,n.push(c)):s&&(s.children||(s.children=[])).push(c)}),n}const Zt=t=>{const e=R(),{site:n,frontmatter:s}=w(),o=t.depth||1,r=s.value.sidebarDepth||1/0,a=e.data.headers,c=t.item.text,d=_s(n.value.base,t.item.link),h=t.item.children,_=hn(e,t.item.link),f=o<r?te(_,h,a,o+1):null;return G("li",{class:"sidebar-link"},[G(d?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:d},c),f])};function _s(t,e){return e===void 0||e.startsWith("#")?e:_n(t,e)}function te(t,e,n,s=1){return e&&e.length>0?G("ul",{class:"sidebar-links"},e.map(o=>G(Zt,{item:o,depth:s}))):t&&n?te(!1,ms(n),void 0,s):null}function ms(t){return ee(fs(t))}function fs(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function ee(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?ee(e.children):void 0}))}const gs={key:0,class:"sidebar-links"},vs=g({__name:"SideBarLinks",setup(t){const e=hs();return(n,s)=>i(e).length>0?(u(),p("ul",gs,[(u(!0),p(L,null,E(i(e),o=>(u(),P(i(Zt),{item:o},null,8,["item"]))),256))])):b("",!0)}});const bs=g({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(u(),p("aside",{class:M(["sidebar",{open:t.open}])},[v(Kt,{class:"nav"}),T(e.$slots,"sidebar-top",{},void 0,!0),v(vs),T(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ys=x(bs,[["__scopeId","data-v-17c48e2f"]]);const xs=/bitbucket.org/;function $s(){const{page:t,theme:e,frontmatter:n}=w(),s=y(()=>{const{repo:r,docsDir:a="",docsBranch:c="master",docsRepo:d=r,editLinks:h}=e.value,_=n.value.editLink!=null?n.value.editLink:h,{relativePath:f}=t.value;return!_||!f||!r?null:ks(r,d,a,c,f)}),o=y(()=>e.value.editLinkText||"Edit this page");return{url:s,text:o}}function ks(t,e,n,s,o){return xs.test(t)?Ls(t,e,n,s,o):ws(t,e,n,s,o)}function ws(t,e,n,s,o){return(mt(e)?e:`https://github.com/${e}`).replace(Z,"")+`/edit/${s}/`+(n?n.replace(Z,"")+"/":"")+o}function Ls(t,e,n,s,o){return(mt(e)?e:t).replace(Z,"")+`/src/${s}/`+(n?n.replace(Z,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const Ss={class:"edit-link"},Cs=["href"],Ts=g({__name:"EditLink",setup(t){const{url:e,text:n}=$s();return(s,o)=>(u(),p("div",Ss,[i(e)?(u(),p("a",{key:0,class:"link",href:i(e),target:"_blank",rel:"noopener noreferrer"},[I(m(i(n))+" ",1),v(gt,{class:"icon"})],8,Cs)):b("",!0)]))}});var Es=x(Ts,[["__scopeId","data-v-55695e90"]]);const Ps={key:0,class:"last-updated"},As={class:"prefix"},Ms={class:"datetime"},Ns=g({__name:"LastUpdated",setup(t){const{theme:e,page:n}=w(),s=y(()=>{const a=e.value.lastUpdated;return a!==void 0&&a!==!1}),o=y(()=>{const a=e.value.lastUpdated;return a===!0?"Last Updated":a}),r=N("");return q(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,c)=>i(s)?(u(),p("p",Ps,[l("span",As,m(i(o))+":",1),l("span",Ms,m(r.value),1)])):b("",!0)}});var qs=x(Ns,[["__scopeId","data-v-30c3cbb4"]]);const Is={class:"page-footer"},js={class:"edit"},Fs={class:"updated"},Bs=g({__name:"PageFooter",setup(t){return(e,n)=>(u(),p("footer",Is,[l("div",js,[v(Es)]),l("div",Fs,[v(qs)])]))}});var Hs=x(Bs,[["__scopeId","data-v-5c96fb00"]]);function Ds(){const{page:t,theme:e}=w(),n=y(()=>Yt(dt(t.value.relativePath))),s=y(()=>{const d=ft(e.value.sidebar,n.value);return _t(d)?Xt(d):[]}),o=y(()=>s.value.findIndex(d=>d.link===n.value)),r=y(()=>{if(e.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=y(()=>{if(e.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),c=y(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:c}}const Os={},Rs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Us=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Gs=[Us];function Vs(t,e){return u(),p("svg",Rs,Gs)}var zs=x(Os,[["render",Vs]]);const Js={},Ws={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ys=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Xs=[Ys];function Qs(t,e){return u(),p("svg",Ws,Xs)}var Ks=x(Js,[["render",Qs]]);const Zs={key:0,class:"next-and-prev-link"},to={class:"container"},eo={class:"prev"},no=["href"],so={class:"text"},oo={class:"next"},ro=["href"],ao={class:"text"},io=g({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:s}=Ds();return(o,r)=>i(e)?(u(),p("div",Zs,[l("div",to,[l("div",eo,[i(n)?(u(),p("a",{key:0,class:"link",href:i(A)(i(n).link)},[v(zs,{class:"icon icon-prev"}),l("span",so,m(i(n).text),1)],8,no)):b("",!0)]),l("div",oo,[i(s)?(u(),p("a",{key:0,class:"link",href:i(A)(i(s).link)},[l("span",ao,m(i(s).text),1),v(Ks,{class:"icon icon-next"})],8,ro)):b("",!0)])])])):b("",!0)}});var lo=x(io,[["__scopeId","data-v-e65a9748"]]);const co={class:"page"},uo={class:"container"},po=g({__name:"Page",setup(t){return(e,n)=>{const s=K("Content");return u(),p("main",co,[l("div",uo,[T(e.$slots,"top",{},void 0,!0),v(s,{class:"content"}),v(Hs),v(lo),T(e.$slots,"bottom",{},void 0,!0)])])}}});var ho=x(po,[["__scopeId","data-v-8fcebc32"]]);const _o={key:0,id:"ads-container"},mo=g({__name:"Layout",setup(t){const e=Se(()=>st(()=>import("./Home.a87c57dd.js"),["assets/Home.a87c57dd.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.89ed8307.js","assets/framework.fcec6aef.js","assets/plugin-vue_export-helper.21dcd24c.js"])),n=()=>null,s=n,o=n,r=n,a=R(),{site:c,page:d,theme:h,frontmatter:_}=w(),f=y(()=>!!_.value.customLayout),k=y(()=>!!_.value.home),$=y(()=>Object.keys(c.value.langs).length>1),C=y(()=>{const S=h.value;return _.value.navbar===!1||S.navbar===!1?!1:c.value.title||S.logo||S.repo||S.nav}),D=N(!1),ue=y(()=>_.value.home||_.value.sidebar===!1?!1:!gn(ft(h.value.sidebar,a.data.relativePath))),rt=S=>{D.value=typeof S=="boolean"?S:!D.value},de=rt.bind(null,!1);et(a,de);const pe=y(()=>[{"no-navbar":!C.value,"sidebar-open":D.value,"no-sidebar":!ue.value}]);return(S,xt)=>{const he=K("Content"),_e=K("Debug");return u(),p(L,null,[l("div",{class:M(["theme",i(pe)])},[i(C)?(u(),P(as,{key:0,onToggle:rt},{search:H(()=>[T(S.$slots,"navbar-search",{},()=>[i(h).algolia?(u(),P(i(r),{key:0,options:i(h).algolia,multilang:i($)},null,8,["options","multilang"])):b("",!0)])]),_:3})):b("",!0),v(ys,{open:D.value},{"sidebar-top":H(()=>[T(S.$slots,"sidebar-top")]),"sidebar-bottom":H(()=>[T(S.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:xt[0]||(xt[0]=Ai=>rt(!1))}),i(f)?(u(),P(he,{key:1})):i(k)?T(S.$slots,"home",{key:2},()=>[v(i(e),null,{hero:H(()=>[T(S.$slots,"home-hero")]),features:H(()=>[T(S.$slots,"home-features")]),footer:H(()=>[T(S.$slots,"home-footer")]),_:3})]):(u(),P(ho,{key:3},{top:H(()=>[T(S.$slots,"page-top-ads",{},()=>[i(h).carbonAds&&i(h).carbonAds.carbon?(u(),p("div",_o,[(u(),P(i(s),{key:"carbon"+i(d).relativePath,code:i(h).carbonAds.carbon,placement:i(h).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),T(S.$slots,"page-top")]),bottom:H(()=>[T(S.$slots,"page-bottom"),T(S.$slots,"page-bottom-ads",{},()=>[i(h).carbonAds&&i(h).carbonAds.custom?(u(),P(i(o),{key:"custom"+i(d).relativePath,code:i(h).carbonAds.custom,placement:i(h).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),v(_e)],64)}}}),fo={class:"theme"},go=l("h1",null,"404",-1),vo=["href"],bo=g({__name:"NotFound",setup(t){const{site:e}=w(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(u(),p("div",fo,[go,l("blockquote",null,m(s()),1),l("a",{href:i(e).base,"aria-label":"go to home"},"Take me home.",8,vo)]))}}),yo={Layout:mo,NotFound:bo};function xo(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),s=24*60*60*1e3,o=n/s,r=Math.floor(o),a=(o-r)*24,c=Math.floor(a),d=(a-c)*60,h=Math.floor(d),_=(d-h)*60,f=Math.floor(_);return{day:r,hour:c,minute:h,second:f}}const $o=()=>{const t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=t})};const ko=["href"],wo={class:"post-info"},Lo={class:"post-info-categories"},So=["href"],Co={key:1,href:"#"},To={class:"post-info-tags"},Eo=["href"],Po={key:1,href:"#"},Ao={datetime:"2022-01-25T19:21:35.000Z"},Mo=["innerHTML"],No={class:"post-excerpt"},qo=["innerHTML"],Io=l("span",{class:"post-btn"},"READ MORE +",-1),jo=g({__name:"PostItem",props:{article:Object},setup(t){return(e,n)=>(u(),p("a",{href:i(A)(t.article.regularPath),class:"post-item"},[l("div",wo,[l("div",null,[l("span",Lo,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(u(!0),p(L,{key:0},E(t.article.frontMatter.category,s=>(u(),p("a",{key:s,href:i(A)(`/pages/archives#category=${s}`)},m(s),9,So))),128)):(u(),p("a",Co,"Empty"))]),l("span",To,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(u(!0),p(L,{key:0},E(t.article.frontMatter.tags,s=>(u(),p("a",{key:s,href:i(A)(`/pages/archives#tag=${s}`)},m(s),9,Eo))),128)):(u(),p("a",Po," Empty "))])]),l("time",Ao,m(t.article.frontMatter.dateArr[2])+" / "+m(t.article.frontMatter.dateArr[1])+" / "+m(t.article.frontMatter.dateArr[0]),1)]),l("h1",{class:"post-title",innerHTML:t.article.frontMatter.title},null,8,Mo),l("div",No,[l("div",{innerHTML:t.article.frontMatter.description},null,8,qo)]),Io],8,ko))}});var Fo=[{title:"\u65E0\u671F\u8FF7\u9014 - \u4E09\u9636",content:`

`,excerpt:"",url:"/posts\\Game\\5732\\III"},{title:"Arknights - Clothese",content:`
`,excerpt:"",url:"/posts\\Game\\Arknights\\clothes"},{title:"Arknights - Max",content:`

`,excerpt:"",url:"/posts\\Game\\Arknights\\max"},{title:"Arknights - New",content:`



`,excerpt:"",url:"/posts\\Game\\Arknights\\new"},{title:"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55",content:`1. \u73AF\u5883
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
    const hNodes: Node[] = filterTag(children, hReg)
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
export function filterTag(list: NodeList, reg: RegExp): Node[] {
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
`,excerpt:"",url:"/posts\\Tech\\NPM\\npm-reg"},{title:"\u6D4F\u89C8\u5668\u63D2\u4EF6\u63A8\u8350",content:`1. \u5B89\u88C5\u65B9\u5F0F

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
`,excerpt:"",url:"/posts\\Tool\\sf-win"}];const Bo={class:"input-group"},Ho=l("i",{class:"fa fa-search"},null,-1),Do={class:"result"},Oo=["href"],Ro=["innerHTML"],Uo=["innerHTML"],Go={key:0,class:"empty"},Vo=g({__name:"Search",setup(t){const{theme:e}=w(),n=N("");let s=B([]);const o=y(()=>!!(s.length||n.value));W(()=>{r(n.value)});function r(d){s.length=0,d.trim()!==""&&Fo.forEach(h=>{const _=JSON.parse(JSON.stringify(h)),f=new RegExp(d,"ig"),k=_.title.match(f),$=_.content.match(f);k&&(_.title=a(d,_.title)),$&&(_.content=a(d,_.content)),(k||$)&&s.push(_)})}const a=(d,h)=>{const _=new RegExp(d,"ig");return h.replace(_,`<span class="search-highlight">${d}</span>`)},c=()=>{n.value=""};return(d,h)=>i(e).search?(u(),p("div",{key:0,class:M(["search-wrapper",i(o)?"open":""])},[l("div",Bo,[Ho,lt(l("input",{type:"text",placeholder:"Search","onUpdate:modelValue":h[0]||(h[0]=_=>n.value=_)},null,512),[[en,n.value]]),n.value?(u(),p("i",{key:0,class:"fa fa-close",onClick:c})):b("",!0)]),l("ul",Do,[(u(!0),p(L,null,E(i(s),_=>(u(),p("li",{key:_.title},[l("a",{href:_.url,onClick:c},[l("p",{innerHTML:_.title,class:"title"},null,8,Ro),l("p",{innerHTML:_.content,class:"content"},null,8,Uo)],8,Oo)]))),128)),!i(s).length&&n.value!==""?(u(),p("li",Go,"Empty")):b("",!0)])],2)):b("",!0)}}),zo=g({__name:"PostList",props:{posts:Array},setup(t){const e=N("");return(n,s)=>(u(),p(L,null,[v(Vo,{filterKey:e.value,"onUpdate:filterKey":s[0]||(s[0]=o=>e.value=o)},null,8,["filterKey"]),l("div",null,[(u(!0),p(L,null,E(t.posts,(o,r)=>(u(),P(jo,{key:r,article:o},null,8,["article"]))),128))])],64))}});const Jo={class:"pagination"},Wo=["href"],Yo=["href"],Xo=["href"],Qo=g({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(u(),p("div",Jo,[t.current>1?(u(),p("a",{key:0,class:"link",href:i(A)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,Wo)):b("",!0),(u(!0),p(L,null,E(t.pageNum,s=>(u(),p("a",{class:M(["link",{active:t.current===s}]),key:s,href:i(A)(s===1?"/index.html":`/page_${s}.html`)},m(s),11,Yo))),128)),t.current<t.pageNum?(u(),p("a",{key:1,class:"link",href:i(A)(`/page_${t.current+1}.html`)},"Next",8,Xo)):b("",!0)]))}});var Ko=x(Qo,[["__scopeId","data-v-28fa3df2"]]);const Zo=g({__name:"index",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=B([]);return n=y(()=>{var o;return(((o=ht(e).posts)==null?void 0:o.value)||[]).map(r=>{const a=JSON.parse(JSON.stringify(r)),c=a.frontMatter.date;return a.frontMatter.dateArr=c.split("-"),a})}),q(()=>{$o()}),(s,o)=>(u(),p(L,null,[v(zo,{posts:i(n)},null,8,["posts"]),v(Ko,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});class tr{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class vt{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=vt.getPoint(this.dustQuantity);for(let n of e){const s=new tr;this.buildDust(n[0],n[1],s),this.dustArr.push(s)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let s of e)if(s.x<0||s.y<0){const o=this.width,r=Math.floor(Math.random()*window.innerHeight);s.x=o,s.y=r,this.buildDust(o,r,s)}else{const o=s.x-s.vx,r=s.y-s.vy;this.buildDust(o,r,s)}}buildDust(e,n,s){const o=this.ctx;e&&(s.x=e),n&&(s.y=n),o&&(o.beginPath(),o.shadowBlur=s.shadowBlur,o.shadowColor=s.color,o.shadowOffsetX=s.shadowX,o.shadowOffsetY=s.shadowY,o.ellipse(s.x,s.y,s.radiusX,s.radiusY,s.rotation,0,Math.PI*2),o.closePath(),o.fillStyle=s.color,o.fill())}resize(){const e=this.canvas,n=window.innerWidth,s=window.innerHeight;this.width=n,this.height=s,this.dustQuantity=Math.floor((n+s)/38),e!==void 0&&(e.width=n,e.height=s)}static getPoint(e=1){let n=[];for(let s=0;s<e;s++){const o=Math.floor(Math.random()*window.innerWidth),r=Math.floor(Math.random()*window.innerHeight);n.push([o,r])}return n}}const er={class:"menu-list"},nr=["href"],sr=["title"],or=g({__name:"index",setup(t){const{theme:e,page:n}=w(),s=e.value.nav,o=y(()=>`/${n.value.relativePath.split(".")[0]}`);return(r,a)=>(u(),p("header",null,[l("nav",null,[l("div",er,[(u(!0),p(L,null,E(i(s),c=>(u(),p("a",{href:c.link,key:c.link,class:M(c.link===i(o)?"active":"")},[l("i",{class:M(`fa fa-${c.icon}`),title:c.text},null,10,sr)],10,nr))),128))])])]))}});var rr=x(or,[["__scopeId","data-v-4729bdee"]]);const ar={key:0,class:"social-links"},ir=["href"],lr=["title"],cr=g({__name:"SocialLinks",setup(t){const{theme:e}=w();return(n,s)=>i(e).socialLinks.length?(u(),p("div",ar,[(u(!0),p(L,null,E(i(e).socialLinks,o=>(u(),p("a",{key:o.link,href:o.link,target:"_blank"},[l("i",{class:M(`fa fa-${o.icon}`),title:o.icon},null,10,lr)],8,ir))),128))])):b("",!0)}});var ur=x(cr,[["__scopeId","data-v-78d89ee0"]]);const bt=t=>(j("data-v-12b81e60"),t=t(),F(),t),dr={key:0,class:"aside-wrapper"},pr={href:"/",class:"logo"},hr=["src"],_r={class:"center dr"},mr={href:"/"},fr={class:"total"},gr=["href"],vr=bt(()=>l("span",{class:"total-title"},"Archives Total",-1)),br={class:"total-number"},yr={class:"total-tags"},xr=bt(()=>l("span",{class:"total-title"},"Tags:",-1)),$r={class:"total-number"},kr={class:"total-categories"},wr=bt(()=>l("span",{class:"total-title"},"Categories:",-1)),Lr={class:"total-number"},Sr=g({__name:"index",setup(t){const{site:e,theme:n,frontmatter:s}=w(),o=e.value.title,r=n.value.logo,a=n.value.posts.length,c=n.value.tags.length,d=n.value.cats.length,h=y(()=>s.value.sidebar);return(_,f)=>i(h)?(u(),p("div",dr,[l("aside",null,[l("div",null,[l("a",pr,[l("img",{src:i(A)(i(r)),alt:"Logo"},null,8,hr)]),l("h1",_r,[l("a",mr,"Dr."+m(i(o)),1)]),l("section",fr,[l("a",{class:"total-archives",href:i(A)("/pages/archives")},[vr,l("span",br,m(i(a)),1)],8,gr),l("div",yr,[xr,l("span",$r,m(i(c)),1)]),l("div",kr,[wr,l("span",Lr,m(i(d)),1)])]),v(ur)])])])):b("",!0)}});var Cr=x(Sr,[["__scopeId","data-v-12b81e60"]]);class Tr{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const o=(await st(()=>import("./message.d5f70d71.js"),["assets/message.d5f70d71.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/framework.fcec6aef.js","assets/Debug.vue_vue_type_style_index_0_scoped_true_lang.89ed8307.js"])).default,r=document.createElement("i");r.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(r),r.addEventListener("click",function(){const a=document.createElement("textarea"),c=r.previousElementSibling;a.value=c.innerText,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),o.success("Copied")})})}}const Er=t=>(j("data-v-059f3759"),t=t(),F(),t),Pr={class:"post-header"},Ar={class:"title"},Mr={class:"info"},Nr={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},qr=Er(()=>l("div",{class:"divider"},null,-1)),Ir=g({__name:"PostHeader",setup(t){const{frontmatter:e}=w();let n=y(()=>e.value.title),s=y(()=>{const o=e.value.date;return(o?new Date(o).toJSON().split("T")[0]:"").split("-")});return(o,r)=>(u(),p("div",Pr,[l("h1",Ar,m(i(n)),1),l("div",Mr,[l("span",Nr,m(i(s)[2])+" / "+m(i(s)[1])+" / "+m(i(s)[0]),1)]),qr]))}});var jr=x(Ir,[["__scopeId","data-v-059f3759"]]);const yt=t=>(j("data-v-6246841b"),t=t(),F(),t),Fr={class:"post-footer"},Br=yt(()=>l("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),Hr=["href"],Dr=yt(()=>l("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),Or=["href"],Rr=yt(()=>l("li",null,[l("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),I(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),l("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),I(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),Ur=g({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:s}=w();let o=y(()=>{const r=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${r}`});return y(()=>s.value.postFooter),(r,a)=>(u(),p("div",Fr,[l("ul",null,[l("li",null,[Br,l("a",{href:i(n).themeConfig.website,target:"_blank"},m(i(n).title),9,Hr)]),l("li",null,[Dr,l("a",{href:i(o),target:"_blank"},m(i(o)),9,Or)]),Rr])]))}});var Gr=x(Ur,[["__scopeId","data-v-6246841b"]]);const ne=t=>(j("data-v-2ea4cd0e"),t=t(),F(),t),Vr={class:"prev-next"},zr=ne(()=>l("hr",null,null,-1)),Jr=["href"],Wr={key:1},Yr=["href"],Xr={key:1},Qr=ne(()=>l("hr",null,null,-1)),Kr=g({__name:"PrevNext",setup(t){const{theme:e,page:n}=w(),s=y(()=>e.value.posts),o=y(()=>n.value.frontmatter.title);let r=B({regularPath:"",frontMatter:{title:""}}),a=B({regularPath:"",frontMatter:{title:""}});const c=(d,h)=>{h?(d.regularPath=h.regularPath,d.frontMatter.title=h.frontMatter.title):(d.regularPath="",d.frontMatter.title="")};return W(()=>{const d=s.value.findIndex(h=>h.frontMatter.title===o.value);if(d>-1){const h=s.value[d-1],_=s.value[d+1];c(r,h),c(a,_)}}),(d,h)=>{var _,f,k,$,C,D;return u(),p("div",Vr,[zr,l("div",null,[lt(l("a",{class:"prev",href:i(A)((_=i(r))==null?void 0:_.regularPath)},[i(e).docFooter.prev.icon?(u(),p("i",{key:0,class:M(`fa fa-${i(e).docFooter.prev.icon}`)},null,2)):b("",!0),i(e).docFooter.prev.text?(u(),p("span",Wr,m(i(e).docFooter.prev.text),1)):b("",!0),I(" "+m((k=(f=i(r))==null?void 0:f.frontMatter)==null?void 0:k.title),1)],8,Jr),[[Mt,i(r).regularPath]]),lt(l("a",{class:"next",href:i(A)(($=i(a))==null?void 0:$.regularPath)},[I(m((D=(C=i(a))==null?void 0:C.frontMatter)==null?void 0:D.title)+" ",1),i(e).docFooter.next.icon?(u(),p("i",{key:0,class:M(`fa fa-${i(e).docFooter.next.icon}`)},null,2)):b("",!0),i(e).docFooter.next.text?(u(),p("span",Xr,m(i(e).docFooter.next.text),1)):b("",!0)],8,Yr),[[Mt,i(a).regularPath]])]),Qr])}}});var Zr=x(Kr,[["__scopeId","data-v-2ea4cd0e"]]);function ta(t){let e=t[0];for(let n=1;n<t.length;n++){const s=t[n];s.length>e.length&&(e=s)}return e}function se(t,e){return Array.from(t).filter(s=>e.test(s.nodeName))}function oe(t,e){let n,s,o=0;return function(){n=this,s=arguments;let r=new Date().valueOf();r-o>e&&(t.apply(n,s),o=r)}}const re=t=>(j("data-v-46ebd702"),t=t(),F(),t),ea=re(()=>l("i",{class:"fa fa-caret-up"},null,-1)),na=re(()=>l("p",null,"TOP",-1)),sa=[ea,na],oa=g({__name:"BackTop",setup(t){const e=N(0),n=y(()=>e.value>300?"block":"none");q(()=>{window.addEventListener("scroll",o)}),Y(()=>{window.removeEventListener("scroll",o)});const s=()=>{e.value=document.documentElement.scrollTop},o=oe.bind(this,s,1e3)(),r=()=>{const a=document.documentElement.scrollTop/6,c=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-a,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(c)},50)};return(a,c)=>(u(),p("div",{class:"back-top",style:Vt({display:i(n)}),onClick:r},sa,4))}});var ra=x(oa,[["__scopeId","data-v-46ebd702"]]);const ot=t=>(j("data-v-6f889226"),t=t(),F(),t),aa=ot(()=>l("i",{class:"fa fa-heartbeat mr4"},null,-1)),ia=ot(()=>l("p",null,[I(" Power With "),l("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),I(" & "),l("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),la=ot(()=>l("div",null,[l("span",null,"\xA9"),l("span",null,"2021 to 2022")],-1)),ca=ot(()=>l("div",null,[l("span",null,"ICP"),l("span",null,"\u2014 RHODEISLAND \u2014")],-1)),ua=g({__name:"Footer",setup(t){const{theme:e}=w(),n=N();let s=B({day:0,hour:0,minute:0,second:0}),o=null;q(()=>{e.value.footer.runtime.enable&&(o=setInterval(r,1e3))}),Y(()=>{o&&clearInterval(o)});const r=()=>{const a=xo();s.day=a.day,s.hour=a.hour,s.minute=a.minute,s.second=a.second};return(a,c)=>(u(),p("footer",null,[i(e).footer.runtime.enable?(u(),p("p",{key:0,ref_key:"runtimeRef",ref:n},[aa,I(" "+m(i(s).day)+" days "+m(i(s).hour)+" hours "+m(i(s).minute)+" minutes and "+m(i(s).second)+" seconds ",1)],512)):b("",!0),ia,i(e).footer.copyright?(u(),p(L,{key:1},[la,ca],64)):b("",!0)]))}});var da=x(ua,[["__scopeId","data-v-6f889226"]]);const ae=/^H[1-6]{1,}$/ig,pa=t=>{const e=t.childNodes,n=se(e,ae);return ha(n)};function ha(t){const e=[];for(let n=0;n<t.length;n++){const s=t[n],o=/^(_\d)+(-\d)*/ig,r=s.id.match(o)[0];e.push({nodeName:s.nodeName,text:s.innerText.slice(0,s.innerText.length-1),id:s.id,level:r})}return _a(e)}function _a(t){const e=[],n={};t.forEach(s=>{n[s.level]=s});for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const o=n[s];if(/^(_\d)+$/ig.test(s))e.push(o);else{const c=Object.keys(n).filter(h=>h!==s&&s.includes(h)),d=ta(c);n[d].child?n[d].child.push(o):n[d].child=[o]}}return e}const ma=["href","name","title","onClick"],fa=g({__name:"CataList",props:{tree:Array},setup(t){const e=n=>{n.open=!n.open,n.active=!0};return(n,s)=>(u(),p("ul",null,[(u(!0),p(L,null,E(t.tree,o=>{var r;return u(),p("li",{key:o.id},[l("a",{href:`#${o.id}`,name:o.id,title:o.text,class:M([[o.nodeName,o.active?"active":""],"link"]),onClick:a=>e(o)},m(o.text),11,ma),((r=o.child)==null?void 0:r.length)&&o.open?(u(),P(ie,{key:0,tree:o.child},null,8,["tree"])):b("",!0)])}),128))]))}});var ie=x(fa,[["__scopeId","data-v-38b58cc4"]]);const ga={key:0,class:"catalog"},va=g({__name:"index",setup(t){const e=B([]),n=N(0),s=B([]),o=B([]);q(()=>{r(),window.addEventListener("scroll",c)}),nt(()=>{r()}),Y(()=>{window.removeEventListener("scroll",c)});const r=()=>{var $;const f=($=document.getElementById("content"))==null?void 0:$.childNodes[0];e.length=0;const k=pa(f);e.push(...k),d(f)},a=()=>{n.value=document.documentElement.scrollTop;for(let f=o.length-1;f>0;f--){const k=o[f];if(n.value>k.top-180){_(e),h(e,k.id);return}}},c=oe.bind(this,a,1e3)(),d=f=>{const k=f.childNodes;s.push(...se(k,ae));const $=s.map(C=>({id:C.id,top:C.getBoundingClientRect().bottom}));o.push(...$)},h=(f,k)=>{for(let $=0;$<f.length;$++){const C=f[$];if(C.id===k){C.active=!0,C.open=!0;return}C.child&&h(C.child,k)}},_=f=>{for(let k=0;k<f.length;k++){const $=f[k];$.active&&($.active=!1),$.child&&_($.child)}};return(f,k)=>e.length?(u(),p("div",ga,[v(ie,{tree:e},null,8,["tree"])])):b("",!0)}});var ba=x(va,[["__scopeId","data-v-fe7fdfe0"]]);const ya={key:0,class:"post-tag"},xa=l("i",{class:"fa fa-tag"},null,-1),$a=["href"],ka=g({__name:"index",setup(t){const{frontmatter:e}=w(),n=y(()=>e.value.page),s=y(()=>e.value.tags||[]);q(()=>{o()}),nt(()=>{o()});const o=()=>{n.value||new Tr};return(r,a)=>{const c=K("Content");return u(),p("div",{class:M(["content",i(n)?"":"post-content"]),id:"postContent"},[i(n)?b("",!0):(u(),P(jr,{key:0})),v(c,{id:"content"}),i(n)?b("",!0):(u(),p(L,{key:1},[i(s).length?(u(),p("p",ya,[xa,(u(!0),p(L,null,E(i(s),d=>(u(),p("a",{key:d,href:`/pages/archives#tag=${d}`},m(d),9,$a))),128))])):b("",!0),v(Gr),v(Zr),v(ra),v(ba)],64)),v(da)],2)}}}),wa=()=>G("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"}),La=t=>{const e=localStorage.getItem(t);return e&&JSON.parse(e)},Ot=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};const Sa=g({__name:"BgToggle",props:{bgUrl:String},emits:["update:bgUrl"],setup(t,{emit:e}){const{theme:n}=w(),s=n.value.bgUrls,o=N(0);W(()=>{e("update:bgUrl",s[o.value])}),q(()=>{r()});const r=()=>{const c=La("bgIdx");c==null?Ot("bgIdx",o.value):o.value=c},a=()=>{o.value>=s.length-1?o.value=0:o.value++,Ot("bgIdx",o.value)};return(c,d)=>(u(),p("i",{class:"fa fa-refresh bg-toggle",onClick:a}))}});var Ca=x(Sa,[["__scopeId","data-v-0bff3ee4"]]);const Ta={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Ea=g({__name:"NewLayout",setup(t){const{theme:e}=w(),n=N("");return q(()=>{new vt("canvas-dust")}),(s,o)=>(u(),p(L,null,[l("main",{class:"layout",style:Vt({"background-image":`url(${n.value})`})},[v(Cr,{class:"aside"}),v(ka,{class:"content"}),v(rr,{class:"navbar"})],4),v(Ca,{bgUrl:n.value,"onUpdate:bgUrl":o[0]||(o[0]=r=>n.value=r)},null,8,["bgUrl"]),i(e).live2d?(u(),P(i(wa),{key:0})):b("",!0),l("canvas",Ta,null,512)],64))}});var Pa=x(Ea,[["__scopeId","data-v-0645831e"]]);function Aa(t){const e=[];let n="0",s=-1;for(let o=0;o<t.length;o++){const r=t[o];if(r.frontMatter.date){const a=r.frontMatter.date.split("-")[0];a===n?e[s].push(r):(s++,e[s]=[],e[s].push(r),n=a)}}return e}function Ma(t,e="",n=""){const s=[];for(let o=0;o<t.length;o++){const r=t[o],a=!e||e&&r.frontMatter.category.includes(e),c=!n||n&&r.frontMatter.tags.includes(n);a&&c&&s.push(r)}return Aa(s)}const Na={class:"categories"},qa=l("h1",null,"categories",-1),Ia={class:"list"},ja=["onClick"],Fa={class:"link",href:"#"},Ba={class:"count"},Ha=g({__name:"Categories",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const n=t,s=o=>{e("toggle",o,n.selected===o)};return(o,r)=>(u(),p("div",Na,[qa,l("ul",Ia,[(u(!0),p(L,null,E(t.list,(a,c)=>(u(),p("li",{onClick:d=>s(c),class:M(["item",t.selected==c?"active":""])},[l("a",Fa,"# "+m(c)+" #",1),l("span",Ba,m(t.list[c].length),1)],10,ja))),256))])]))}});const Da=t=>(j("data-v-571f05fe"),t=t(),F(),t),Oa={class:"tags"},Ra=Da(()=>l("h1",null,"tags",-1)),Ua={class:"list",itemprop:"keywords"},Ga=["onClick"],Va={class:"link",href:"#",rel:"tag"},za={class:"count"},Ja=g({__name:"Tags",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const n=t,s=o=>{e("toggle",o,n.selected===o)};return(o,r)=>(u(),p("div",Oa,[Ra,l("ul",Ua,[(u(!0),p(L,null,E(t.list,(a,c)=>(u(),p("li",{onClick:d=>s(c),class:M(["item",t.selected==c?"active":""])},[l("a",Va,m(c),1),l("span",za,m(a),1)],10,Ga))),256))])]))}});var Wa=x(Ja,[["__scopeId","data-v-571f05fe"]]);const Ya={class:"archive-list"},Xa=l("h1",null,"archives",-1),Qa={class:"bg"},Ka=["href"],Za=g({__name:"ArchiveList",props:{list:{type:Array,required:!0}},setup(t){return(e,n)=>(u(),p("div",Ya,[Xa,t.list.length?(u(!0),p(L,{key:0},E(t.list,s=>(u(),p("div",Qa,[l("h2",null,m(s[0].frontMatter.date.split("-")[0]),1),(u(!0),p(L,null,E(s,(o,r)=>(u(),p("div",{key:r,class:"article-item"},[l("time",null,m(o.frontMatter.date.slice(5)),1),l("a",{href:i(A)(o.regularPath)},m(o.frontMatter.title),9,Ka)]))),128))]))),256)):b("",!0)]))}});const ti={class:"archive-wrapper"},ei={class:"aside"},ni=g({__name:"index",setup(t){const{theme:e}=w(),n=e.value.tags,s=e.value.cats;let o=B({list:[]}),r=N(""),a=N("");const c=(h,_)=>{a.value=_?"":h},d=(h,_)=>{r.value=_?"":h};return W(()=>{o.list=Ma(e.value.posts,a.value,r.value)}),q(()=>{const h=document.location.hash;if(h){const _=h.substring(1).split("=")[0],f=h.substring(1).split("=")[1];_==="tag"?r.value=f:a.value=f}}),(h,_)=>(u(),p("div",ti,[v(Za,{list:i(o).list,class:"plane"},null,8,["list"]),l("div",ei,[v(Ha,{list:i(s),selected:i(a),onToggle:c,class:"plane"},null,8,["list","selected"]),v(Wa,{list:i(n),selected:i(r),onToggle:d,class:"plane"},null,8,["list","selected"])])]))}}),si={key:0,id:"comment"},oi=g({__name:"Comment",setup(t){const{theme:e,frontmatter:n}=w(),s=y(()=>n.value.comment);let o=e.value.valine,r=N();q(async()=>{let c=await st(()=>import("./Valine.min.ad08ee52.js").then(function(d){return d.V}),[]);r.value=c.default,a()}),nt(()=>{a()});const a=()=>{s&&new r.value({el:"#comment",...o})};return(c,d)=>i(s)?(u(),p("div",si)):b("",!0)}});const le=t=>(j("data-v-090025bd"),t=t(),F(),t),ri={class:"feedback"},ai={class:"tc"},ii=I("Feedback "),li=["id"],ci=le(()=>l("i",{class:"fa fa-eye mr4"},null,-1)),ui=le(()=>l("i",{class:"leancloud-visitors-count"},"0",-1)),di=[ci,ui],pi=g({__name:"Feedback",setup(t){const{page:e}=w();return(n,s)=>(u(),p("div",ri,[l("h1",ai,[ii,l("div",{id:`/${i(e).relativePath.replace(".md",".html")}`,class:"leancloud_visitors","data-flag-title":"Your Article Title"},di,8,li)]),v(oi)]))}});var hi=x(pi,[["__scopeId","data-v-090025bd"]]);const _i={},mi={class:"loading-wrap hover",width:"100",height:"100",viewBox:"0 0 40 60"},fi=l("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1),gi=l("text",{class:"loading-text",x:"0",y:"45",fill:"#fff"},"Loading...",-1),vi=[fi,gi];function bi(t,e){return u(),p("svg",mi,vi)}var yi=x(_i,[["render",bi]]);var tt={...yo,Layout:Pa,enhanceApp({app:t}){t.component("Archives",ni),t.component("Page",Zo),t.component("Feedback",hi),t.component("Loading",yi)}};const it=new Set,ce=()=>document.createElement("link"),xi=t=>{const e=ce();e.rel="prefetch",e.href=t,document.head.appendChild(e)},$i=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let X;const ki=V&&(X=ce())&&X.relList&&X.relList.supports&&X.relList.supports("prefetch")?xi:$i;function wi(){if(!V||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const c=a.target;n.unobserve(c);const{pathname:d}=c;if(!it.has(d)){it.add(d);const h=zt(d);ki(h)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:c,pathname:d}=r,h=d.match(/\.\w+$/);h&&h[0]!==".html"||a!=="_blank"&&c===location.hostname&&(d!==location.pathname?n.observe(r):it.add(d))})})};q(s);const o=R();et(()=>o.path,s),Y(()=>{n&&n.disconnect()})}const Li=g({setup(t,{slots:e}){const n=N(!1);return q(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Si=tt.NotFound||(()=>"404 Not Found"),Ci={name:"VitePressApp",setup(){const{site:t}=w();return q(()=>{et(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),wi(),()=>G(tt.Layout)}};function Ti(){const t=Pi(),e=Ei();e.provide(Ee,t);const n=Pe(t.route);return e.provide(Ae,n),V&&an(t.route,n.site),e.component("Content",Me),e.component("ClientOnly",Li),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),tt.enhanceApp&&tt.enhanceApp({app:e,router:t,siteData:Ne}),{app:e,router:t}}function Ei(){return on(Ci)}function Pi(){let t=V,e;return Te(n=>{let s=zt(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),V?(t=!1,st(()=>import(s),[])):require(s)},Si)}if(V){const{app:t,router:e}=Ti();e.go().then(()=>{t.mount("#app")})}export{Ft as N,Ti as createApp,Ii as r};
