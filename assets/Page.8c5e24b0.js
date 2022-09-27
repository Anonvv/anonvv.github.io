import{G as E,H as lt,I,J as ct,K as G,L as ut,M as gt,N as pt,O as mt,P as dt,Q as tt,R as ht,S as ft,T as bt,U as et,V as yt,W as vt,X as St,Y as nt,e as f,C as O,Z as j,$ as wt,d as P,y as $,o as u,c as g,f as m,F as w,k as L,u as h,t as x,r as ot,w as Tt,D as xt,a as C,n as rt,l as A,h as Mt,_ as _t,s as Pt,g as qt}from"./plugin-vue_export-helper.18425321.js";const Ct="http://www.w3.org/2000/svg",v=typeof document!="undefined"?document:null,J=v&&v.createElement("template"),Nt={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const r=e?v.createElementNS(Ct,t):v.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:t=>v.createTextNode(t),createComment:t=>v.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>v.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,o,r,i){const s=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{J.innerHTML=o?`<svg>${t}</svg>`:t;const a=J.content;if(o){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Lt(t,e,n){const o=t._vtc;o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Et(t,e,n){const o=t.style,r=E(n);if(n&&!r){for(const i in n)R(o,i,n[i]);if(e&&!E(e))for(const i in e)n[i]==null&&R(o,i,"")}else{const i=o.display;r?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=i)}}const V=/\s*!important$/;function R(t,e,n){if(I(n))n.forEach(o=>R(t,e,o));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=jt(t,e);V.test(n)?t.setProperty(tt(o),n.replace(V,""),"important"):t[o]=n}}const F=["Webkit","Moz","ms"],k={};function jt(t,e){const n=k[e];if(n)return n;let o=ht(e);if(o!=="filter"&&o in t)return k[e]=o;o=ft(o);for(let r=0;r<F.length;r++){const i=F[r]+o;if(i in t)return k[e]=i}return e}const B="http://www.w3.org/1999/xlink";function kt(t,e,n,o,r){if(o&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(B,e.slice(6,e.length)):t.setAttributeNS(B,e,n);else{const i=bt(e);n==null||i&&!et(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function At(t,e,n,o,r,i,s){if(e==="innerHTML"||e==="textContent"){o&&s(o,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=et(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[st,Rt]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let H=0;const Ht=Promise.resolve(),It=()=>{H=0},Ot=()=>H||(Ht.then(It),H=st());function M(t,e,n,o){t.addEventListener(e,n,o)}function Dt(t,e,n,o){t.removeEventListener(e,n,o)}function Gt(t,e,n,o,r=null){const i=t._vei||(t._vei={}),s=i[e];if(o&&s)s.value=o;else{const[a,l]=$t(e);if(o){const p=i[e]=Jt(o,r);M(t,a,p,l)}else s&&(Dt(t,a,s,l),i[e]=void 0)}}const U=/(?:Once|Passive|Capture)$/;function $t(t){let e;if(U.test(t)){e={};let o;for(;o=t.match(U);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tt(t.slice(2)),e]}function Jt(t,e){const n=o=>{const r=o.timeStamp||st();(Rt||r>=n.attached-1)&&yt(Vt(o,n.value),e,5,[o])};return n.value=t,n.attached=Ot(),n}function Vt(t,e){if(I(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(o=>r=>!r._stopped&&o&&o(r))}else return e}const W=/^on[a-z]/,Ft=(t,e,n,o,r=!1,i,s,a,l)=>{e==="class"?Lt(t,o,r):e==="style"?Et(t,n,o):pt(e)?mt(e)||Gt(t,e,n,o,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bt(t,e,o,r))?At(t,e,o,i,s,a,l):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),kt(t,e,o,r))};function Bt(t,e,n,o){return o?!!(e==="innerHTML"||e==="textContent"||e in t&&W.test(e)&&dt(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||W.test(e)&&E(n)?!1:e in t}const z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return I(e)?n=>ct(e,n):e};function Ut(t){t.target.composing=!0}function K(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wt={created(t,{modifiers:{lazy:e,trim:n,number:o}},r){t._assign=z(r);const i=o||r.props&&r.props.type==="number";M(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=G(a)),t._assign(a)}),n&&M(t,"change",()=>{t.value=t.value.trim()}),e||(M(t,"compositionstart",Ut),M(t,"compositionend",K),M(t,"change",K))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:r}},i){if(t._assign=z(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||o&&t.value.trim()===e||(r||t.type==="number")&&G(t.value)===e))return;const s=e==null?"":e;t.value!==s&&(t.value=s)}},Ve={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):q(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),q(t,!0),o.enter(t)):o.leave(t,()=>{q(t,!1)}):q(t,e))},beforeUnmount(t,{value:e}){q(t,e)}};function q(t,e){t.style.display=e?t._vod:"none"}const it=gt({patchProp:Ft},Nt);let N,Q=!1;function zt(){return N||(N=ut(it))}function Kt(){return N=Q?N:lt(it),Q=!0,N}const Fe=(...t)=>{zt().render(...t)},Be=(...t)=>{const e=Kt().createApp(...t),{mount:n}=e;return e.mount=o=>{const r=Qt(o);if(r)return n(r,!0,r instanceof SVGElement)},e};function Qt(t){return E(t)?document.querySelector(t):t}var Zt='{"lang":"en-US","title":"Wonderven","description":"vitepress,blog,blog-theme","base":"/","head":[["meta",{"name":"referer","content":"no-referer"}]],"themeConfig":{"posts":[{"frontMatter":{"page":false,"title":"Arknights - Max","description":null,"date":"2022-09-27","sidebar":true,"comment":true,"category":["Game"],"tags":["Arknights"]},"regularPath":"/posts/Game/Arknights/max.html"},{"frontMatter":{"page":false,"title":"Arknights - Clothese","description":null,"date":"2022-09-27","sidebar":true,"comment":true,"category":["Game"],"tags":["Arknights"]},"regularPath":"/posts/Game/Arknights/clothes.html"},{"frontMatter":{"page":false,"title":"Valine \u90AE\u4EF6\u63D0\u9192\u57FA\u7840\u914D\u7F6E","description":"VitePress","date":"2022-09-27","sidebar":true,"comment":true,"category":["Site"],"tags":["Valine"]},"regularPath":"/posts/Site/valine-email.html"},{"frontMatter":{"page":false,"title":"ES6+ \u65B0\u7279\u6027","description":"\u9762\u8BD5\u5907\u7528","date":"2022-09-25","sidebar":true,"comment":true,"category":["Tech"],"tags":["JavaScript"]},"regularPath":"/posts/Tech/JS/es6.html"},{"frontMatter":{"page":false,"title":"CSS \u4E2D\u7684\u5E38\u7528\u5355\u4F4D","description":"\u7EDD\u5BF9\u5355\u4F4D\u3001\u76F8\u5BF9\u5355\u4F4D & \u54CD\u5E94\u5F0F","date":"2022-09-25","sidebar":true,"comment":true,"category":["Tech"],"tags":["CSS"]},"regularPath":"/posts/Tech/CSS/unit.html"},{"frontMatter":{"page":false,"title":"VsCode \u795E\u4ED9\u63D2\u4EF6","description":null,"date":"2022-09-22","sidebar":true,"comment":true,"category":["Tool"],"tags":[null]},"regularPath":"/posts/Tool/ext-vscode.html"},{"frontMatter":{"page":false,"title":"VitePress \u521B\u5EFA\u6587\u7AE0\u76EE\u5F55","description":"Vue3 + TS","date":"2022-09-21","sidebar":true,"comment":true,"category":["Site"],"tags":["VitePress"]},"regularPath":"/posts/Site/catalog.html"},{"frontMatter":{"page":false,"title":"VitePress \u5B9E\u73B0\u672C\u5730\u641C\u7D22","description":"\u901A\u8FC7 JS \u904D\u5386\u89E3\u6790 Markdown \u6587\u4EF6\u751F\u6210\u7D22\u5F15\u5217\u8868","date":"2022-09-20","sidebar":true,"comment":true,"category":["Site"],"tags":[null]},"regularPath":"/posts/Site/local-search.html"},{"frontMatter":{"page":false,"title":"Arknights - New","description":"New operators","date":"2022-09-17","sidebar":true,"comment":true,"category":["Game"],"tags":["Arknights"]},"regularPath":"/posts/Game/Arknights/new.html"},{"frontMatter":{"page":false,"title":"5732 - III","description":"\u65E0\u671F\u8FF7\u9014\u4E09\u9636\u7EAA\u5FF5","date":"2022-09-17","sidebar":true,"comment":true,"category":["Game"],"tags":["Path to Nowhere"]},"regularPath":"/posts/Game/5732/III.html"},{"frontMatter":{"page":false,"title":"\u6D4F\u89C8\u5668\u63D2\u4EF6\u63A8\u8350","description":"\u652F\u6301\u4E3B\u6D41\u6D4F\u89C8\u5668","date":"2022-08-23","sidebar":true,"comment":true,"category":["Tool"],"tags":[null]},"regularPath":"/posts/Tool/ext-browser.html"},{"frontMatter":{"page":false,"title":"\u9AD8\u6548\u7387 Windows \u7CFB\u7EDF\u5DE5\u5177","description":null,"date":"2022-07-08","sidebar":true,"comment":true,"category":["Tool"],"tags":[null]},"regularPath":"/posts/Tool/sf-win.html"},{"frontMatter":{"page":false,"title":"PicGo \u514D\u8D39\u56FE\u5E8A\u642D\u5EFA","description":"PicGo + GitHub [+ JSDelivr]","date":"2022-06-23","sidebar":true,"comment":true,"category":["Site"],"tags":["PicGo"]},"regularPath":"/posts/Site/picgo.html"},{"frontMatter":{"page":false,"title":"VitePress - Add Live2d","description":"2233\u54EA\uFF01","date":"2022-05-19","sidebar":true,"comment":true,"category":["Site"],"tags":["VitePress"]},"regularPath":"/posts/Site/l2d.html"},{"frontMatter":{"page":false,"title":"Build a Free CDN\u3010Github + JSDelivr\u3011","description":null,"date":"2022-04-11","sidebar":true,"comment":true,"category":["Site"],"tags":[null]},"regularPath":"/posts/Site/cdn-github.html"},{"frontMatter":{"page":false,"title":"JavaScript \u4E00\u952E\u56DE\u5230\u9876\u90E8","description":"Vue3 + TS","date":"2022-03-02","sidebar":true,"comment":true,"category":["Tech"],"tags":["JavaScript"]},"regularPath":"/posts/Tech/JS/backtop.html"},{"frontMatter":{"page":false,"title":"One-click Copy","description":"TS","date":"2022-02-10","sidebar":true,"comment":true,"category":["Tech"],"tags":["JavaScript"]},"regularPath":"/posts/Tech/JS/copy.html"},{"frontMatter":{"page":false,"title":"HTML Tag [object] VS [embed]","description":"From HTML5","date":"2022-02-09","sidebar":true,"comment":true,"category":["Tech"],"tags":["HTML"]},"regularPath":"/posts/Tech/HTML/embed-object.html"},{"frontMatter":{"page":false,"title":"NPM Registry Configuration","description":"NPM Registry manager","date":"2022-02-08","sidebar":true,"comment":true,"category":["Tech"],"tags":["NPM"]},"regularPath":"/posts/Tech/NPM/npm-reg.html"},{"frontMatter":{"title":"Multi-User Configuration","description":null,"sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"],"date":"2022-01-24"},"regularPath":"/posts/Tech/Git/uconfig.html"},{"frontMatter":{"title":"High-Frequency Git CMD","description":"Note","date":"2022-01-18","sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"]},"regularPath":"/posts/Tech/Git/cmd.html"},{"frontMatter":{"title":"Hello World","description":"The first post!","date":"2022-01-11","sidebar":true,"comment":true,"category":["Site"],"tags":[null]},"regularPath":"/posts/Site/hello-world.html"}],"logo":"https://prts.wiki/images/thumb/a/ad/Avg_ac18_09.png/1200px-Avg_ac18_09.png","pageSize":6,"website":"https://wonderven.github.io","nav":[{"text":"Home","link":"/index","icon":"home"},{"text":"Archives","link":"/pages/archives","icon":"archive"},{"text":"Feedback","link":"/pages/feedback","icon":"comments"}],"socialLinks":[],"docFooter":{"prev":{"icon":"hand-o-left","text":""},"next":{"icon":"hand-o-right","text":""}},"valine":{"enable":true,"appId":"W06FWeFCFNgKnW1HwR3Le07E-gzGzoHsz","appKey":"uykZ3SPHD6JcsrVN9Ck1bue8","placeholder":"This message will send by Penguin Logistics.","avatar":"mp","lang":"en","visitor":true,"highlight":true,"recordIP":true,"enableQQ":true},"footer":{"copyright":false,"runtime":{"enable":true,"startTime":"2022-01-01"}},"live2d":true,"lantern":false,"search":true},"locales":{},"langs":{}}';const Xt=/^https?:/i,_=typeof window!="undefined";function Yt(t,e){e.sort((n,o)=>{const r=o.split("/").length-n.split("/").length;return r!==0?r:o.length-n.length});for(const n of e)if(t.startsWith(n))return n}function Z(t,e){const n=Yt(e,Object.keys(t));return n?t[n]:void 0}function te(t){const{locales:e}=t.themeConfig||{},n=t.locales;return e&&n?Object.keys(e).reduce((o,r)=>(o[r]={label:e[r].label,lang:n[r].lang},o),{}):{}}function ee(t,e){e=ne(t,e);const n=Z(t.locales||{},e),o=Z(t.themeConfig.locales||{},e);return Object.assign({},t,n,{themeConfig:Object.assign({},t.themeConfig,o,{locales:{}}),lang:(n||t).lang,locales:{},langs:te(t)})}function ne(t,e){if(!_)return e;const n=t.base,o=n.endsWith("/")?n.slice(0,-1):n;return e.slice(o.length)}const oe=Symbol(),at=vt(re(Zt));function re(t){return St(JSON.parse(t))}function Ue(t){const e=f(()=>ee(at.value,t.path));return{site:e,theme:f(()=>e.value.themeConfig),page:f(()=>t.data),frontmatter:f(()=>t.data.frontmatter),lang:f(()=>e.value.lang),localePath:f(()=>{const{langs:n,lang:o}=e.value,r=Object.keys(n).find(i=>n[i].lang===o);return S(r||"/")}),title:f(()=>t.data.title?t.data.title+" | "+e.value.title:e.value.title),description:f(()=>t.data.description||e.value.description)}}function se(){const t=nt(oe);if(!t)throw new Error("vitepress data not properly injected in app");return t}function ie(t,e){return`${t}${e}`.replace(/\/+/g,"/")}function S(t){return Xt.test(t)?t:ie(at.value.base,t)}function We(t){let e=t.replace(/\.html$/,"");if(e=decodeURIComponent(e),e.endsWith("/")&&(e+="index"),_){const n="/";e=e.slice(n.length).replace(/\//g,"_")+".md";const o=__VP_HASH_MAP__[e.toLowerCase()];e=`${n}assets/${e}.${o}.js`}else e=`./${e.slice(1).replace(/\//g,"_")}.md.js`;return e}const ae=Symbol(),X="http://a.com",le=()=>({path:"/",component:null,data:null});function ze(t,e){const n=O(le());function o(s=_?location.href:"/"){const a=new URL(s,X);return!a.pathname.endsWith("/")&&!a.pathname.endsWith(".html")&&(a.pathname+=".html",s=a.pathname+a.search+a.hash),_&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",s)),i(s)}let r=null;async function i(s,a=0){const l=new URL(s,X),p=r=l.pathname;try{let c=t(p);if("then"in c&&typeof c.then=="function"&&(c=await c),r===p){r=null;const{default:d,__pageData:b}=c;if(!d)throw new Error(`Invalid route component: ${d}`);n.path=p,n.component=j(d),n.data=j(JSON.parse(b)),_&&wt(()=>{if(l.hash&&!a){let y=null;try{y=document.querySelector(decodeURIComponent(l.hash))}catch(T){console.warn(T)}if(y){Y(y,l.hash);return}}window.scrollTo(0,a)})}}catch(c){c.message.match(/fetch/)||console.error(c),r===p&&(r=null,n.path=p,n.component=e?j(e):null)}}return _&&(window.addEventListener("click",s=>{const a=s.target.closest("a");if(a){const{href:l,protocol:p,hostname:c,pathname:d,hash:b,target:y}=a,T=window.location,D=d.match(/\.\w+$/);!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey&&y!=="_blank"&&p===T.protocol&&c===T.hostname&&!(D&&D[0]!==".html")&&(s.preventDefault(),d===T.pathname?b&&b!==T.hash&&(history.pushState(null,"",b),window.dispatchEvent(new Event("hashchange")),Y(a,b,a.classList.contains("header-anchor"))):o(l))}},{capture:!0}),window.addEventListener("popstate",s=>{i(location.href,s.state&&s.state.scrollPosition||0)}),window.addEventListener("hashchange",s=>{s.preventDefault()})),{route:n,go:o}}function ce(){const t=nt(ae);if(!t)throw new Error("useRouter() is called without provider.");return t}function ue(){return ce().route}function Y(t,e,n=!1){let o=null;try{o=t.classList.contains(".header-anchor")?t:document.querySelector(decodeURIComponent(e))}catch(r){console.warn(r)}if(o){const r=o.offsetTop;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}const Ke=P({name:"VitePressContent",setup(){const t=ue();return()=>$("div",{style:{position:"relative"}},[t.component?$(t.component):null])}});function Qe(t="2022-01-01"){const e=new Date(t),n=new Date().getTime()-e.getTime(),o=24*60*60*1e3,r=n/o,i=Math.floor(r),s=(r-i)*24,a=Math.floor(s),l=(s-a)*60,p=Math.floor(l),c=(l-p)*60,d=Math.floor(c);return{day:i,hour:a,minute:p,second:d}}const ge=()=>{const t=document.title;document.addEventListener("visibilitychange",function(){document.hidden?document.title="zzZZZ...":document.title=t})};const pe=["href"],me={class:"post-info"},de={class:"post-info-categories"},he=["href"],fe={key:1,href:"#"},be={class:"post-info-tags"},ye=["href"],ve={key:1,href:"#"},Se={datetime:"2022-01-25T19:21:35.000Z"},we=["innerHTML"],Te={class:"post-excerpt"},xe=["innerHTML"],Me=m("span",{class:"post-btn"},"READ MORE +",-1),_e=P({__name:"PostItem",props:{article:Object},setup(t){return(e,n)=>(u(),g("a",{href:h(S)(t.article.regularPath),class:"post-item"},[m("div",me,[m("div",null,[m("span",de,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(u(!0),g(w,{key:0},L(t.article.frontMatter.category,o=>(u(),g("a",{key:o,href:h(S)(`/pages/archives#category-${o}`)},x(o),9,he))),128)):(u(),g("a",fe,"Empty"))]),m("span",be,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(u(!0),g(w,{key:0},L(t.article.frontMatter.tags,o=>(u(),g("a",{key:o,href:h(S)(`/pages/archives#tag-${o}`)},x(o),9,ye))),128)):(u(),g("a",ve," Empty "))])]),m("time",Se,x(t.article.frontMatter.dateArr[2])+" / "+x(t.article.frontMatter.dateArr[1])+" / "+x(t.article.frontMatter.dateArr[0]),1)]),m("h1",{class:"post-title",innerHTML:t.article.frontMatter.title},null,8,we),m("div",Te,[m("div",{innerHTML:t.article.frontMatter.description},null,8,xe)]),Me],8,pe))}});var Pe=[{title:"5732 - III",content:`

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
`,excerpt:"",url:"/posts\\Tool\\sf-win"}];const qe={class:"input-group"},Ce=m("i",{class:"fa fa-search"},null,-1),Ne={class:"result"},Le=["href"],Ee=["innerHTML"],je=["innerHTML"],ke={key:0,class:"empty"},Ae=P({__name:"Search",setup(t){const{theme:e}=se(),n=ot("");let o=O([]);const r=f(()=>!!(o.length||n.value));Tt(()=>{i(n.value)});function i(l){o.length=0,l.trim()!==""&&Pe.forEach(p=>{const c=JSON.parse(JSON.stringify(p)),d=new RegExp(l,"ig"),b=c.title.match(d),y=c.content.match(d);b&&(c.title=s(l,c.title)),y&&(c.content=s(l,c.content)),(b||y)&&o.push(c)})}const s=(l,p)=>{const c=new RegExp(l,"ig");return p.replace(c,`<span class="search-highlight">${l}</span>`)},a=()=>{n.value=""};return(l,p)=>h(e).search?(u(),g("div",{key:0,class:rt(["search-wrapper",h(r)?"open":""])},[m("div",qe,[Ce,xt(m("input",{type:"text",placeholder:"Search","onUpdate:modelValue":p[0]||(p[0]=c=>n.value=c)},null,512),[[Wt,n.value]]),n.value?(u(),g("i",{key:0,class:"fa fa-close",onClick:a})):C("",!0)]),m("ul",Ne,[(u(!0),g(w,null,L(h(o),c=>(u(),g("li",{key:c.title},[m("a",{href:c.url,onClick:a},[m("p",{innerHTML:c.title,class:"title"},null,8,Ee),m("p",{innerHTML:c.content,class:"content"},null,8,je)],8,Le)]))),128)),!h(o).length&&n.value!==""?(u(),g("li",ke,"Empty")):C("",!0)])],2)):C("",!0)}}),Re=P({__name:"index",props:{posts:Array},setup(t){const e=ot("");return(n,o)=>(u(),g(w,null,[A(Ae,{filterKey:e.value,"onUpdate:filterKey":o[0]||(o[0]=r=>e.value=r)},null,8,["filterKey"]),m("div",null,[(u(!0),g(w,null,L(t.posts,(r,i)=>(u(),Mt(_e,{key:i,article:r},null,8,["article"]))),128))])],64))}});const He={class:"pagination"},Ie=["href"],Oe=["href"],De=["href"],Ge=P({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(u(),g("div",He,[t.current>1?(u(),g("a",{key:0,class:"link",href:h(S)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,Ie)):C("",!0),(u(!0),g(w,null,L(t.pageNum,o=>(u(),g("a",{class:rt(["link",{active:t.current===o}]),key:o,href:h(S)(o===1?"/index.html":`/page_${o}.html`)},x(o),11,Oe))),128)),t.current<t.pageNum?(u(),g("a",{key:1,class:"link",href:h(S)(`/page_${t.current+1}.html`)},"Next",8,De)):C("",!0)]))}});var $e=_t(Ge,[["__scopeId","data-v-64328b95"]]);const Ze=P({__name:"Page",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=O([]);return n=f(()=>{var r;return(((r=qt(e).posts)==null?void 0:r.value)||[]).map(i=>{const s=JSON.parse(JSON.stringify(i)),a=s.frontMatter.date;return s.frontMatter.dateArr=a.split("-"),s})}),Pt(()=>{ge()}),(o,r)=>(u(),g(w,null,[A(Re,{posts:h(n)},null,8,["posts"]),A($e,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});export{Ke as C,Xt as E,ae as R,Ze as _,ue as a,Be as b,ze as c,Ue as d,oe as e,Qe as g,_ as i,We as p,Fe as r,at as s,se as u,Ve as v,S as w};
