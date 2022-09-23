import{G as E,H as it,I,J as lt,K as O,L as ct,M as ut,N as pt,O as gt,P as dt,Q as tt,R as ht,S as mt,T as ft,U as et,V as bt,W as vt,X as yt,Y as nt,e as m,C as D,Z as j,$ as wt,d as N,y as F,o as u,c as p,f as g,F as x,k as T,u as h,t as y,r as _t,w as xt,D as Pt,a as L,n as ot,l as A,h as Mt,_ as St,g as Nt}from"./plugin-vue_export-helper.18425321.js";const qt="http://www.w3.org/2000/svg",w=typeof document!="undefined"?document:null,J=w&&w.createElement("template"),Ct={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const r=e?w.createElementNS(qt,t):w.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:t=>w.createTextNode(t),createComment:t=>w.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>w.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,o,r,i){const s=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{J.innerHTML=o?`<svg>${t}</svg>`:t;const a=J.content;if(o){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Tt(t,e,n){const o=t._vtc;o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Et(t,e,n){const o=t.style,r=E(n);if(n&&!r){for(const i in n)R(o,i,n[i]);if(e&&!E(e))for(const i in e)n[i]==null&&R(o,i,"")}else{const i=o.display;r?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=i)}}const G=/\s*!important$/;function R(t,e,n){if(I(n))n.forEach(o=>R(t,e,o));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=Lt(t,e);G.test(n)?t.setProperty(tt(o),n.replace(G,""),"important"):t[o]=n}}const V=["Webkit","Moz","ms"],k={};function Lt(t,e){const n=k[e];if(n)return n;let o=ht(e);if(o!=="filter"&&o in t)return k[e]=o;o=mt(o);for(let r=0;r<V.length;r++){const i=V[r]+o;if(i in t)return k[e]=i}return e}const B="http://www.w3.org/1999/xlink";function jt(t,e,n,o,r){if(o&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(B,e.slice(6,e.length)):t.setAttributeNS(B,e,n);else{const i=ft(e);n==null||i&&!et(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function kt(t,e,n,o,r,i,s){if(e==="innerHTML"||e==="textContent"){o&&s(o,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=et(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[rt,At]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let H=0;const Rt=Promise.resolve(),Ht=()=>{H=0},It=()=>H||(Rt.then(Ht),H=rt());function M(t,e,n,o){t.addEventListener(e,n,o)}function Dt(t,e,n,o){t.removeEventListener(e,n,o)}function $t(t,e,n,o,r=null){const i=t._vei||(t._vei={}),s=i[e];if(o&&s)s.value=o;else{const[a,l]=Ot(e);if(o){const d=i[e]=Ft(o,r);M(t,a,d,l)}else s&&(Dt(t,a,s,l),i[e]=void 0)}}const W=/(?:Once|Passive|Capture)$/;function Ot(t){let e;if(W.test(t)){e={};let o;for(;o=t.match(W);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tt(t.slice(2)),e]}function Ft(t,e){const n=o=>{const r=o.timeStamp||rt();(At||r>=n.attached-1)&&bt(Jt(o,n.value),e,5,[o])};return n.value=t,n.attached=It(),n}function Jt(t,e){if(I(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(o=>r=>!r._stopped&&o&&o(r))}else return e}const U=/^on[a-z]/,Gt=(t,e,n,o,r=!1,i,s,a,l)=>{e==="class"?Tt(t,o,r):e==="style"?Et(t,n,o):pt(e)?gt(e)||$t(t,e,n,o,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vt(t,e,o,r))?kt(t,e,o,i,s,a,l):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),jt(t,e,o,r))};function Vt(t,e,n,o){return o?!!(e==="innerHTML"||e==="textContent"||e in t&&U.test(e)&&dt(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||U.test(e)&&E(n)?!1:e in t}const z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return I(e)?n=>lt(e,n):e};function Bt(t){t.target.composing=!0}function K(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wt={created(t,{modifiers:{lazy:e,trim:n,number:o}},r){t._assign=z(r);const i=o||r.props&&r.props.type==="number";M(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=O(a)),t._assign(a)}),n&&M(t,"change",()=>{t.value=t.value.trim()}),e||(M(t,"compositionstart",Bt),M(t,"compositionend",K),M(t,"change",K))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:r}},i){if(t._assign=z(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||o&&t.value.trim()===e||(r||t.type==="number")&&O(t.value)===e))return;const s=e==null?"":e;t.value!==s&&(t.value=s)}},Fe={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):q(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),q(t,!0),o.enter(t)):o.leave(t,()=>{q(t,!1)}):q(t,e))},beforeUnmount(t,{value:e}){q(t,e)}};function q(t,e){t.style.display=e?t._vod:"none"}const st=ut({patchProp:Gt},Ct);let C,Q=!1;function Ut(){return C||(C=ct(st))}function zt(){return C=Q?C:it(st),Q=!0,C}const Je=(...t)=>{Ut().render(...t)},Ge=(...t)=>{const e=zt().createApp(...t),{mount:n}=e;return e.mount=o=>{const r=Kt(o);if(r)return n(r,!0,r instanceof SVGElement)},e};function Kt(t){return E(t)?document.querySelector(t):t}var Qt='{"lang":"en-US","title":"Wonderven","description":"vitepress,blog,blog-theme","base":"/","head":[["script",{"src":"https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js"}]],"themeConfig":{"posts":[{"frontMatter":{"page":false,"title":"VitePress \u751F\u6210\u6587\u7AE0\u76EE\u5F55","description":"Vue3 + TS","date":"2022-09-21","sidebar":true,"comment":true,"category":["Tech"],"tags":["VitePress"]},"regularPath":"/posts/tech/vitepress/catalog.html"},{"frontMatter":{"page":false,"title":"VitePress \u5B9E\u73B0\u672C\u5730\u641C\u7D22","description":"\u901A\u8FC7 JS \u904D\u5386\u89E3\u6790 Markdown \u6587\u4EF6\u751F\u6210\u7D22\u5F15\u5217\u8868","date":"2022-09-20","sidebar":true,"comment":true,"category":["Tech"],"tags":["VitePress"]},"regularPath":"/posts/tech/vitepress/local-search.html"},{"frontMatter":{"page":false,"title":"\u3010\u4E09\u9636\u301110\u5A1C","description":"<img src=\\"https://cdn.jsdelivr.net/gh/Wonderven/webimg@latest/2022/yln.jpg\\" />","date":"2022-09-17","sidebar":true,"comment":true,"category":["Game"],"tags":["Path to Nowhere"]},"regularPath":"/posts/game/path to nowhere/10n.html"},{"frontMatter":{"page":false,"title":"\u3010NEW\u3011\u5C0F\u9ED1","description":"<img src=\\"https://cdn.jsdelivr.net/gh/Wonderven/webimg@latest/lxh.png\\" />","date":"2022-09-17","sidebar":true,"comment":true,"category":["Game"],"tags":["Arknights"]},"regularPath":"/posts/game/arknights/lxh.html"},{"frontMatter":{"page":false,"title":"\u6D4F\u89C8\u5668\u63D2\u4EF6","description":"\u652F\u6301\u4E3B\u6D41\u6D4F\u89C8\u5668","date":"2022-08-23","sidebar":true,"comment":true,"category":["Tool"],"tags":[null]},"regularPath":"/posts/tool/browser-plugins.html"},{"frontMatter":{"page":false,"title":"\u9AD8\u6548\u7387 Windows \u7CFB\u7EDF\u5DE5\u5177","description":null,"date":"2022-07-08","sidebar":true,"comment":true,"category":["Tool"],"tags":[null]},"regularPath":"/posts/tool/win.html"},{"frontMatter":{"page":false,"title":"PicGo \u514D\u8D39\u56FE\u5E8A\u642D\u5EFA","description":"PicGo + GitHub [+ JSDelivr]","date":"2022-06-23","sidebar":true,"comment":true,"category":["Tech"],"tags":["PicGo"]},"regularPath":"/posts/tech/picgo.html"},{"frontMatter":{"page":false,"title":"\u3010VitePress\u3011Live2d \u770B\u677F\u5A18","description":"2233\u54EA\uFF01","date":"2022-05-19","sidebar":true,"comment":true,"category":["Tech"],"tags":["VitePress"]},"regularPath":"/posts/tech/vitepress/l2d.html"},{"frontMatter":{"page":false,"title":"Build a Free CDN\u3010Github + JSDelivr\u3011","description":null,"date":"2022-04-11","sidebar":true,"comment":true,"category":["Tech"],"tags":["VitePress"]},"regularPath":"/posts/tech/cdn-github.html"},{"frontMatter":{"page":false,"title":"JS \u8FD4\u56DE\u9875\u9762\u9876\u90E8\u529F\u80FD","description":"Vue3 + TS","date":"2022-03-02","sidebar":true,"comment":true,"category":["Tech"],"tags":["JS"]},"regularPath":"/posts/tech/js/backtop.html"},{"frontMatter":{"page":false,"title":"One-click Copy","description":"TS","date":"2022-02-10","sidebar":true,"comment":true,"category":["Tech"],"tags":["JS"]},"regularPath":"/posts/tech/js/copy.html"},{"frontMatter":{"page":false,"title":"HTML Tag <object> and <embed>","description":"From HTML5","date":"2022-02-09","sidebar":true,"comment":true,"category":["Tech"],"tags":["HTML"]},"regularPath":"/posts/tech/html/embed-object.html"},{"frontMatter":{"page":false,"title":"NPM Registry Configuration","description":"NPM Registry manager","date":"2022-02-08","sidebar":true,"comment":true,"category":["Tech"],"tags":["NPM"]},"regularPath":"/posts/tech/npm-reg.html"},{"frontMatter":{"title":"Multi-User Configuration","description":null,"sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"],"date":"2022-01-24"},"regularPath":"/posts/tech/git/uconfig.html"},{"frontMatter":{"title":"High-Frequency Git CMD","description":"Note","date":"2022-01-18","sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"]},"regularPath":"/posts/tech/git/cmd.html"},{"frontMatter":{"title":"Hello World","description":"Sariaer!","date":"2022-01-11","sidebar":true,"comment":true,"category":["Game"],"tags":["Arknights"]},"regularPath":"/posts/game/arknights/hello-world.html"}],"logo":"https://cdn.jsdelivr.net/gh/Wonderven/webimg@latest/avatar.png","pageSize":6,"website":"https://wonderven.github.io","nav":[{"text":"Home","link":"/index"},{"text":"Archives","link":"/pages/archives"},{"text":"Feedback","link":"/pages/feedback"}],"socialLinks":[],"docFooter":{"prev":{"icon":"hand-o-left","text":""},"next":{"icon":"hand-o-right","text":""}},"valine":{"enable":true,"appId":"W06FWeFCFNgKnW1HwR3Le07E-gzGzoHsz","appKey":"uykZ3SPHD6JcsrVN9Ck1bue8","placeholder":"This message will send by Penguin Logistics.","avatar":"mp","lang":"en","visitor":true,"highlight":true,"recordIP":true,"enableQQ":true},"footer":{"copyright":false,"runtime":{"enable":true,"startTime":"2022-01-01"}},"live2d":true,"lantern":false,"search":true},"locales":{},"langs":{}}';const Xt=/^https?:/i,S=typeof window!="undefined";function Yt(t,e){e.sort((n,o)=>{const r=o.split("/").length-n.split("/").length;return r!==0?r:o.length-n.length});for(const n of e)if(t.startsWith(n))return n}function X(t,e){const n=Yt(e,Object.keys(t));return n?t[n]:void 0}function Zt(t){const{locales:e}=t.themeConfig||{},n=t.locales;return e&&n?Object.keys(e).reduce((o,r)=>(o[r]={label:e[r].label,lang:n[r].lang},o),{}):{}}function te(t,e){e=ee(t,e);const n=X(t.locales||{},e),o=X(t.themeConfig.locales||{},e);return Object.assign({},t,n,{themeConfig:Object.assign({},t.themeConfig,o,{locales:{}}),lang:(n||t).lang,locales:{},langs:Zt(t)})}function ee(t,e){if(!S)return e;const n=t.base,o=n.endsWith("/")?n.slice(0,-1):n;return e.slice(o.length)}const ne=Symbol(),at=vt(oe(Qt));function oe(t){return yt(JSON.parse(t))}function Ve(t){const e=m(()=>te(at.value,t.path));return{site:e,theme:m(()=>e.value.themeConfig),page:m(()=>t.data),frontmatter:m(()=>t.data.frontmatter),lang:m(()=>e.value.lang),localePath:m(()=>{const{langs:n,lang:o}=e.value,r=Object.keys(n).find(i=>n[i].lang===o);return _(r||"/")}),title:m(()=>t.data.title?t.data.title+" | "+e.value.title:e.value.title),description:m(()=>t.data.description||e.value.description)}}function re(){const t=nt(ne);if(!t)throw new Error("vitepress data not properly injected in app");return t}function se(t,e){return`${t}${e}`.replace(/\/+/g,"/")}function _(t){return Xt.test(t)?t:se(at.value.base,t)}function Be(t){let e=t.replace(/\.html$/,"");if(e=decodeURIComponent(e),e.endsWith("/")&&(e+="index"),S){const n="/";e=e.slice(n.length).replace(/\//g,"_")+".md";const o=__VP_HASH_MAP__[e.toLowerCase()];e=`${n}assets/${e}.${o}.js`}else e=`./${e.slice(1).replace(/\//g,"_")}.md.js`;return e}const ae=Symbol(),Y="http://a.com",ie=()=>({path:"/",component:null,data:null});function We(t,e){const n=D(ie());function o(s=S?location.href:"/"){const a=new URL(s,Y);return!a.pathname.endsWith("/")&&!a.pathname.endsWith(".html")&&(a.pathname+=".html",s=a.pathname+a.search+a.hash),S&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",s)),i(s)}let r=null;async function i(s,a=0){const l=new URL(s,Y),d=r=l.pathname;try{let c=t(d);if("then"in c&&typeof c.then=="function"&&(c=await c),r===d){r=null;const{default:f,__pageData:b}=c;if(!f)throw new Error(`Invalid route component: ${f}`);n.path=d,n.component=j(f),n.data=j(JSON.parse(b)),S&&wt(()=>{if(l.hash&&!a){let v=null;try{v=document.querySelector(decodeURIComponent(l.hash))}catch(P){console.warn(P)}if(v){Z(v,l.hash);return}}window.scrollTo(0,a)})}}catch(c){c.message.match(/fetch/)||console.error(c),r===d&&(r=null,n.path=d,n.component=e?j(e):null)}}return S&&(window.addEventListener("click",s=>{const a=s.target.closest("a");if(a){const{href:l,protocol:d,hostname:c,pathname:f,hash:b,target:v}=a,P=window.location,$=f.match(/\.\w+$/);!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey&&v!=="_blank"&&d===P.protocol&&c===P.hostname&&!($&&$[0]!==".html")&&(s.preventDefault(),f===P.pathname?b&&b!==P.hash&&(history.pushState(null,"",b),window.dispatchEvent(new Event("hashchange")),Z(a,b,a.classList.contains("header-anchor"))):o(l))}},{capture:!0}),window.addEventListener("popstate",s=>{i(location.href,s.state&&s.state.scrollPosition||0)}),window.addEventListener("hashchange",s=>{s.preventDefault()})),{route:n,go:o}}function le(){const t=nt(ae);if(!t)throw new Error("useRouter() is called without provider.");return t}function ce(){return le().route}function Z(t,e,n=!1){let o=null;try{o=t.classList.contains(".header-anchor")?t:document.querySelector(decodeURIComponent(e))}catch(r){console.warn(r)}if(o){const r=o.offsetTop;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}const Ue=N({name:"VitePressContent",setup(){const t=ce();return()=>F("div",{style:{position:"relative"}},[t.component?F(t.component):null])}});const ue=["href"],pe={class:"post-info"},ge={class:"post-info-categories"},de=["href"],he={key:1,href:"#"},me={class:"post-info-tags"},fe=["href"],be={key:1,href:"#"},ve={datetime:"2022-01-25T19:21:35.000Z"},ye={class:"post-title"},we={class:"post-excerpt"},_e=["innerHTML"],xe=g("span",{class:"post-btn"},"READ MORE +",-1),Pe=N({__name:"PostItem",props:{article:Object},setup(t){return(e,n)=>(u(),p("a",{href:h(_)(t.article.regularPath),class:"post-item"},[g("div",pe,[g("div",null,[g("span",ge,[t.article.frontMatter.category&&t.article.frontMatter.category.length?(u(!0),p(x,{key:0},T(t.article.frontMatter.category,o=>(u(),p("a",{key:o,href:h(_)(`/pages/archives#category-${o}`)},y(o),9,de))),128)):(u(),p("a",he,"Empty"))]),g("span",me,[t.article.frontMatter.tags&&t.article.frontMatter.tags.length?(u(!0),p(x,{key:0},T(t.article.frontMatter.tags,o=>(u(),p("a",{key:o,href:h(_)(`/pages/archives#tag-${o}`)},y(o),9,fe))),128)):(u(),p("a",be," Empty "))])]),g("time",ve,y(t.article.frontMatter.dateArr[2])+" / "+y(t.article.frontMatter.dateArr[1])+" / "+y(t.article.frontMatter.dateArr[0]),1)]),g("h1",ye,y(t.article.frontMatter.title),1),g("div",we,[g("div",{innerHTML:t.article.frontMatter.description},null,8,_e)]),xe],8,ue))}});var Me=[{title:"Hello World",content:`
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
`,excerpt:"",url:"/posts\\tool\\win"}];const Se={class:"input-group"},Ne=g("i",{class:"fa fa-search"},null,-1),qe={class:"result"},Ce=["href"],Te=["innerHTML"],Ee=["innerHTML"],Le={key:0,class:"empty"},je=N({__name:"Search",setup(t){const{theme:e}=re(),n=_t("");let o=D([]);const r=m(()=>!!(o.length||n.value));xt(()=>{i(n.value)});function i(l){o.length=0,l.trim()!==""&&Me.forEach(d=>{const c=JSON.parse(JSON.stringify(d)),f=new RegExp(l,"ig"),b=c.title.match(f),v=c.content.match(f);b&&(c.title=s(l,c.title)),v&&(c.content=s(l,c.content)),(b||v)&&o.push(c)})}const s=(l,d)=>{const c=new RegExp(l,"ig");return d.replace(c,`<span class="search-highlight">${l}</span>`)},a=()=>{n.value=""};return(l,d)=>h(e).search?(u(),p("div",{key:0,class:ot(["search-wrapper",h(r)?"open":""])},[g("div",Se,[Ne,Pt(g("input",{type:"text",placeholder:"Search","onUpdate:modelValue":d[0]||(d[0]=c=>n.value=c)},null,512),[[Wt,n.value]])]),g("ul",qe,[(u(!0),p(x,null,T(h(o),c=>(u(),p("li",{key:c.title},[g("a",{href:c.url,onClick:a},[g("p",{innerHTML:c.title,class:"title"},null,8,Te),g("p",{innerHTML:c.content,class:"content"},null,8,Ee)],8,Ce)]))),128)),!h(o).length&&n.value!==""?(u(),p("li",Le,"Empty")):L("",!0)])],2)):L("",!0)}}),ke=N({__name:"index",props:{posts:Array},setup(t){return(e,n)=>(u(),p(x,null,[A(je),g("div",null,[(u(!0),p(x,null,T(t.posts,(o,r)=>(u(),Mt(Pe,{key:r,article:o},null,8,["article"]))),128))])],64))}});const Ae={class:"pagination"},Re=["href"],He=["href"],Ie=["href"],De=N({__name:"Pagination",props:{current:Number,pageNum:Number},setup(t){return(e,n)=>(u(),p("div",Ae,[t.current>1?(u(),p("a",{key:0,class:"link",href:h(_)(t.current===2?"/index.html":`/page_${t.current-1}.html`)},"Prev",8,Re)):L("",!0),(u(!0),p(x,null,T(t.pageNum,o=>(u(),p("a",{class:ot(["link",{active:t.current===o}]),key:o,href:h(_)(o===1?"/index.html":`/page_${o}.html`)},y(o),11,He))),128)),t.current<t.pageNum?(u(),p("a",{key:1,class:"link",href:h(_)(`/page_${t.current+1}.html`)},"Next",8,Ie)):L("",!0)]))}});var $e=St(De,[["__scopeId","data-v-64328b95"]]);const ze=N({__name:"Page",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(t){const e=t;let n=D([]);return n=m(()=>{var r;return(((r=Nt(e).posts)==null?void 0:r.value)||[]).map(i=>{const s=JSON.parse(JSON.stringify(i)),a=s.frontMatter.date;return s.frontMatter.dateArr=a.split("-"),s})}),(o,r)=>(u(),p(x,null,[A(ke,{posts:h(n)},null,8,["posts"]),A($e,{current:t.pageCurrent,pageNum:t.pagesNum},null,8,["current","pageNum"])],64))}});export{Ue as C,Xt as E,ae as R,ze as _,ce as a,Ge as b,We as c,Ve as d,ne as e,S as i,Be as p,Je as r,at as s,re as u,Fe as v,_ as w};
