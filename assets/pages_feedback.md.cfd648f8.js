import{u as l}from"./Debug.vue_vue_type_style_index_0_scoped_true_lang.8c24debc.js";import{p as u,y as h,F as k,M as b,N as g,u as p,q as c,r as _,s as F,_ as V,z as a,K as m,v as x,D as y,E as I}from"./plugin-vue_export-helper.a92e0a4e.js";import{_ as N}from"./preload-helper.1c052cf7.js";const C={key:0,id:"comment"},D=u({__name:"Comment",setup(e){const{theme:t,frontmatter:s}=l(),o=h(()=>s.value.comment);let v=t.value.valine,n=k();b(async()=>{let d=await N(()=>import("./Valine.min.ad08ee52.js").then(function(i){return i.V}),[]);n.value=d.default,r()}),g(()=>{r()});const r=()=>{o&&new n.value({el:"#comment",...v})};return(d,i)=>p(o)?(c(),_("div",C)):F("",!0)}});const f=e=>(y("data-v-ef895cc6"),e=e(),I(),e),E={class:"feedback"},P={class:"tc"},T=x("Feedback "),$=["id"],w=f(()=>a("i",{class:"fa fa-eye mr4"},null,-1)),B=f(()=>a("i",{class:"leancloud-visitors-count"},"0",-1)),M=[w,B],S=u({__name:"feedback",setup(e){const{page:t}=l();return(s,o)=>(c(),_("div",E,[a("h1",P,[T,a("div",{id:`/${p(t).relativePath.replace(".md",".html")}`,class:"leancloud_visitors","data-flag-title":"Your Article Title"},M,8,$)]),m(D)]))}});var A=V(S,[["__scopeId","data-v-ef895cc6"]]);const q='{"title":"Feedback","description":"Feedback","frontmatter":{"title":"Feedback","description":"Feedback","date":"2022-09-23T00:00:00.000Z","page":true,"sidebar":true,"header":true,"comment":true,"postInfo":false,"postFooter":false},"relativePath":"pages/feedback.md","lastUpdated":1664423955552}',O={},z=Object.assign(O,{__name:"feedback",setup(e){return(t,s)=>(c(),_("div",null,[m(A)]))}});export{q as __pageData,z as default};
