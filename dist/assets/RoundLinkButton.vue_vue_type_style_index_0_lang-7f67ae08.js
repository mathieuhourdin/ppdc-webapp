import{d as _,c as d,v as p,a as n,h as m,i as k,z as s,x as r,e as t}from"./index-c80b7e84.js";const v={class:"flex"},f=["title"],C=_({__name:"RoundLinkButton",props:{to:{},color:{},title:{}},emits:["click"],setup(a,{emit:u}){const o=a,l=d(()=>o.color==="green"?{"bg-green-400":!0}:o.color==="red"?{"bg-red-400":!0}:{"bg-blue-400":!0}),c=()=>{u("click")};return(e,g)=>{const i=p("router-link");return t(),n("div",v,[e.to?(t(),m(i,{key:0,class:s(["ml-auto w-12 rounded-square p-1 text-center text-4xl",l.value]),title:e.title,to:e.to},{default:k(()=>[r(e.$slots,"default")]),_:3},8,["class","title","to"])):(t(),n("div",{key:1,class:s(["ml-auto w-12 rounded-square p-1 text-center text-4xl",l.value]),title:e.title,onClick:c},[r(e.$slots,"default")],10,f))])}}});export{C as _};