import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{p as _,q as e,r as u,I as p,J as m,H as i,x as f,F as v,z as l,B as o,K as g}from"./framework.d7d875d2.js";const h={class:"tab"},y=["onClick"],k=_({__name:"Tab",props:{data:{type:Array,required:!0},active:{type:String,required:!0}},emits:["update:active"],setup(r,{emit:t}){const s=n=>{t("update:active",n)};return(n,c)=>(e(),u("ul",h,[(e(!0),u(p,null,m(r.data,a=>(e(),u("li",{key:a,class:i(a===r.active?"active":""),onClick:D=>s(a)},f(a),11,y))),128))]))}});var b=d(k,[["__scopeId","data-v-8a9d94ac"]]);const F=["title"],$=["src","alt"],B=_({__name:"ImgList",props:{data:{type:Array,defualt:()=>[]}},setup(r){const t=v(!1),s=()=>{t.value=!t.value};return(n,c)=>(e(),u(p,null,[l("i",{class:i(`fa fa-${t.value?"th":"list"} display-btn`),onClick:s},null,2),l("ul",{class:i(`img-list ${t.value?"":"small"}`)},[(e(!0),u(p,null,m(r.data,a=>(e(),u("li",{key:a.url,title:a.text},[l("img",{src:a.url,alt:a.text},null,8,$)],8,F))),128))],2)],64))}});var x=d(B,[["__scopeId","data-v-442095b5"]]);const A=_({__name:"Arknights",setup(r){const t=[{url:"https://s1.xptou.com/2022/09/29/633501799dfa8.jpg",text:"\u7AEF\u5348-2022"},{url:"https://s1.xptou.com/2022/09/29/6335017932a9d.jpg",text:"\u65B0\u6625\u795D\u798F-\u963F\u7C73\u5A05"},{url:"https://s1.xptou.com/2022/09/29/6335017965b49.jpg",text:"\u65B0\u6625\u795D\u798F-\u51EF\u5C14\u897F"},{url:"https://s1.xptou.com/2022/09/29/63350179671fc.jpg",text:"\u65B0\u6625\u795D\u798F-\u514B\u6D1B\u65AF"}];return(s,n)=>(e(),o(x,{data:t}))}}),C=_({__name:"PathNoWhere",setup(r){const t=[{url:"https://s1.xptou.com/2022/09/29/6334fd445a35d.png",text:""},{url:"https://s1.xptou.com/2022/09/29/6334fdd8e3767.jpg",text:""}];return(s,n)=>(e(),o(x,{data:t}))}});const I={class:"game"},T=_({__name:"index",setup(r){const t=["Arknights"],s=v(t[0]);return(n,c)=>(e(),u("div",I,[g(b,{data:t,active:s.value,"onUpdate:active":c[0]||(c[0]=a=>s.value=a)},null,8,["active"]),s.value==="Arknights"?(e(),o(A,{key:0})):(e(),o(C,{key:1}))]))}}),q='{"title":"Game","description":"Game","frontmatter":{"title":"Game","description":"Game","date":"2022-09-23T00:00:00.000Z","page":true,"sidebar":true,"header":true,"comment":true,"postInfo":false,"postFooter":false},"relativePath":"pages/game.md","lastUpdated":1664414762738}',j={},E=Object.assign(j,{__name:"game",setup(r){return(t,s)=>(e(),u("div",null,[g(T)]))}});export{q as __pageData,E as default};
