import{_ as B,a as N,u as R}from"./useArticle-a094c582.js";import{_ as S}from"./ArticleCard.vue_vue_type_script_setup_true_lang-cece81d6.js";import{_ as L}from"./ActionButton.vue_vue_type_script_setup_true_lang-1ec04a65.js";import{d as x,r as c,u as M,w as j,a as D,o as F,b as r,c as n,e as u,f as d,g as f,h as v,i as g,j as h,k as V,t as E,F as I,l as P,m as U}from"./index-4f9567ef.js";import"./ProgressBar.vue_vue_type_script_setup_true_lang-06e96c8b.js";import"./useResource-89ed9147.js";const z={class:"flex flex-wrap my-8"},G={class:"mx-auto flex flex-wrap max-w-full"},H={class:"text-center mb-8 text-sm"},J={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},K=x({__name:"ArticlesList",setup(y){const o=c([]),i=c([]),s=c(null),l=M();j(()=>l.query.maturing_state,e=>{console.log("new route query",e),typeof e=="string"&&(s.value=e)});const b=e=>e?{idea:"Simples idées qu'on a eu en passant, et qui peuvent être reprises par d'autres",rvew:"Articles déjà bien strucutrés, qui ont besoin d'être relus pour gagner en qualité",fnsh:"Articles qui peuvent donner lieu à des discussions mais qui ont atteint un stade abouti, lisible par le grand public"}[e]:"",m=D(),_=e=>{s.value=e,m.push({path:"/productions",query:{maturing_state:e}})},{getArticles:p,newArticle:A,createArticle:q}=R(),w=(e,a)=>e?e=="drft"?i.value:e=="alla"?a:a.filter(t=>t.maturing_state==e):[],k=e=>s.value==e?"valid":"abort",{user:$}=U(),C=async()=>{const e=A(),a=await q(e.value);m.push({path:"/articles/"+a.id,query:{editing:"true"}})};return F(async()=>{o.value=await p({author:!0}),i.value=await p({author:!1,drafts:!0}),typeof l.query.maturing_state=="string"?s.value=l.query.maturing_state:s.value="fnsh",_(s.value)}),(e,a)=>(r(),n("div",null,[u("div",z,[u("div",G,[d(B,{"url-key":"maturing_state",choices:[{text:"Tous",value:"alla"},{text:"Terminés",value:"fnsh"},{text:"Relecture",value:"rvew"},{text:"Idées",value:"idea"}],default:"alla",url:""})]),i.value.length>0?(r(),f(L,{key:0,class:"mr-auto my-1",text:"Mes brouillons",onClick:a[0]||(a[0]=t=>_("drft")),type:k("drft")},{default:v(()=>[g("Mes brouillons")]),_:1},8,["type"])):h("",!0),V($)?(r(),f(N,{key:1,class:"md:absolute mx-auto md:mx-0",onClick:C},{default:v(()=>[g("+")]),_:1})):h("",!0)]),u("div",H,E(b(s.value)),1),u("div",J,[(r(!0),n(I,null,P(w(s.value,o.value),(t,T)=>(r(),n("div",{key:T},[d(S,{title:t.title,subtitle:t.subtitle,"image-url":t.image_url,progress:t.interaction_progress,uuid:t.id,author:t.author},null,8,["title","subtitle","image-url","progress","uuid","author"])]))),128))])]))}}),O={class:"px-8"},te=x({__name:"ProductionsListView",setup(y){return(o,i)=>(r(),n("main",null,[u("div",O,[d(K,{state:"maturingState",style:{"min-height":"40rem"}})])]))}});export{te as default};
