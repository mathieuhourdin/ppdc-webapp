import{_ as b}from"./ActionButton.vue_vue_type_script_setup_true_lang-7193288c.js";import{d as v,r as k,a as w,u as $,o as A,c as a,h as y,F as C,j as B,b as q,k as o,e as E,t as N,p as S,q as R,f as K,g as L,C as f,s as h,D as p,E as T}from"./index-32cbd093.js";const j={class:"justify-items-center mx-auto flex flex-wrap max-w-full"},D={key:0,class:"ml-auto"},F={key:0,class:"absolute right-0 top-0 w-4 h-4 rounded-square text-2xs bg-green-400 text-center"},G=q("div",{class:"mr-auto"},null,-1),O=v({__name:"ToggleButtonGroup",props:{choices:{},default:{},urlKey:{},url:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},emits:["update"],setup(c,{emit:u}){const n=c,l=k(null),i=w(),e=$(),t=r=>{if(u("update",r),l.value=r,n.url){const g=e.query,s=e.path,_=n.urlKey??"tab";console.log(_);const m={};m[_]=r;const x={...g,...m};i.push({path:s,query:x}),console.log(`route : ${JSON.stringify(e)}`)}};return A(()=>t(n.default??"")),(r,g)=>(o(),a("div",j,[r.center?(o(),a("div",D)):y("",!0),(o(!0),a(C,null,B(r.choices,s=>(o(),a("div",{class:"relative",key:s.value},[E(b,{class:"w-30 my-1 mx-1",text:s.text,onClick:_=>t(s.value),type:s.value==l.value?"valid":"abort"},null,8,["text","onClick","type"]),s.count?(o(),a("div",F,N(s.count),1)):y("",!0)]))),128)),G]))}});const Q={class:"flex"},z=["title"],P=v({__name:"RoundLinkButton",props:{to:{},color:{},title:{}},emits:["click"],setup(c,{emit:u}){const n=c,l=S(()=>n.color==="green"?{"bg-green-400":!0}:n.color==="red"?{"bg-red-400":!0}:{"bg-blue-400":!0}),i=()=>{u("click")};return(e,t)=>{const r=R("router-link");return o(),a("div",Q,[e.to?(o(),K(r,{key:0,class:f(["ml-auto w-12 rounded-square p-1 text-center text-4xl",l.value]),title:e.title,to:e.to},{default:L(()=>[h(e.$slots,"default")]),_:3},8,["class","title","to"])):(o(),a("div",{key:1,class:f(["ml-auto w-12 rounded-square p-1 text-center text-4xl",l.value]),title:e.title,onClick:i},[h(e.$slots,"default")],10,z))])}}});const{launchSnackbar:d}=T();function V(){return{newArticle:()=>k({title:"",subtitle:"",content:"",comment:"",maturing_state:"",publishing_state:"drft",external_content_url:"",image_url:"",resource_type:"atcl"}),getArticle:async e=>{try{return(await p.get("/articles/"+e)).data}catch(t){d(`Error getting article : ${t}`,"error")}},createArticle:async e=>{try{return e.interaction_progress=Number(e.interaction_progress),(await p.post("/articles",e)).data}catch(t){d(`Error creating article : ${t}`,"error")}},updateArticle:async(e,t)=>{try{return t.interaction_progress=Number(t.interaction_progress),await p.put("/thought_outputs/"+e,t)}catch(r){d(`Error updating article : ${r}`,"error")}},getArticles:async e=>{try{const t=`?author=${e.author}&drafts=${e.drafts}`;return(await p.get("/articles"+t)).data}catch(t){d(`Error getting articles : ${t}`,"error")}}}}export{P as _,O as a,V as u};
