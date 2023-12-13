import{_ as B,u as N,a as R}from"./useArticle-83f3e5a4.js";import{_ as T}from"./ArticleCard.vue_vue_type_script_setup_true_lang-c7260fa6.js";import{_ as L}from"./ActionButton.vue_vue_type_script_setup_true_lang-43aa7c90.js";import{d as x,r as c,u as M,w as j,a as D,o as F,c as o,b as u,e as d,f,g,h as v,i as V,t as E,F as I,j as P,k as a,l as h,m as U}from"./index-f61ac537.js";import"./ProgressBar.vue_vue_type_script_setup_true_lang-f51cdca7.js";const z={class:"flex flex-wrap my-8"},G={class:"mx-auto flex flex-wrap max-w-full"},H={class:"text-center mb-8 text-sm"},J={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},K=x({__name:"ArticlesList",props:{maturingState:{}},setup(y){const i=c([]),n=c([]),s=c(null),l=M();j(()=>l.query.maturing_state,t=>{console.log("new route query",t),typeof t=="string"&&(s.value=t)});const b=t=>t?{idea:"Simples idées qu'on a eu en passant, et qui peuvent être reprises par d'autres",rvew:"Articles déjà bien strucutrés, qui ont besoin d'être relus pour gagner en qualité",fnsh:"Articles qui peuvent donner lieu à des discussions mais qui ont atteint un stade abouti, lisible par le grand public"}[t]:"",m=D(),p=t=>{s.value=t,m.push({path:"/productions",query:{maturing_state:t}})},{getArticles:_,newArticle:A,createArticle:q}=N(),w=(t,r)=>t?t=="drft"?n.value:r.filter(e=>e.maturing_state==t):[],k=t=>s.value==t?"valid":"abort",{user:$}=U(),S=async()=>{const t=A(),r=await q(t.value);m.push({path:"/articles/"+r.id,query:{editing:"true"}})};return F(async()=>{i.value=await _({author:!0}),n.value=await _({author:!1,drafts:!0}),typeof l.query.maturing_state=="string"?s.value=l.query.maturing_state:s.value="fnsh",p(s.value)}),(t,r)=>(a(),o("div",null,[u("div",z,[u("div",G,[d(R,{"url-key":"maturing_state",choices:[{text:"Terminés",value:"fnsh"},{text:"Relecture",value:"rvew"},{text:"Idées",value:"idea"}],default:"fnsh",url:""})]),n.value.length>0?(a(),f(L,{key:0,class:"mr-auto my-1",text:"Mes brouillons",onClick:r[0]||(r[0]=e=>p("drft")),type:k("drft")},{default:g(()=>[h("Mes brouillons")]),_:1},8,["type"])):v("",!0),V($)?(a(),f(B,{key:1,class:"md:absolute mx-auto md:mx-0",onClick:S},{default:g(()=>[h("+")]),_:1})):v("",!0)]),u("div",H,E(b(s.value)),1),u("div",J,[(a(!0),o(I,null,P(w(s.value,i.value),(e,C)=>(a(),o("div",{key:C},[d(T,{title:e.title,subtitle:e.subtitle,"image-url":e.image_url,progress:e.interaction_progress,uuid:e.id,author:e.author},null,8,["title","subtitle","image-url","progress","uuid","author"])]))),128))])]))}}),O={class:"px-8"},tt=x({__name:"ProductionsListView",props:{maturingState:{}},setup(y){return(i,n)=>(a(),o("main",null,[u("div",O,[d(K,{"maturing-state":i.maturingState,style:{"min-height":"40rem"}},null,8,["maturing-state"])])]))}});export{tt as default};