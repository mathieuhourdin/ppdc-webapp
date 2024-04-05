import{_ as B,u as N}from"./useArticle-38bc2c5b.js";import{_ as R}from"./RoundLinkButton.vue_vue_type_style_index_0_lang-0fcaa2fc.js";import{_ as S}from"./ArticleCard.vue_vue_type_script_setup_true_lang-337850ac.js";import{_ as L}from"./ActionButton.vue_vue_type_script_setup_true_lang-eac7aa06.js";import{d as x,r as c,u as M,w as j,f as D,o as F,e as a,a as n,g as u,b as d,h as f,i as v,j as g,k as h,l as V,t as E,F as I,m as P,n as U}from"./index-7557a301.js";import"./ProgressBar.vue_vue_type_script_setup_true_lang-1e17bb19.js";import"./useResource-6f3572fc.js";const z={class:"flex flex-wrap my-8"},G={class:"mx-auto flex flex-wrap max-w-full"},H={class:"text-center mb-8 text-sm"},J={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},K=x({__name:"ArticlesList",setup(y){const o=c([]),i=c([]),s=c(null),l=M();j(()=>l.query.maturing_state,e=>{console.log("new route query",e),typeof e=="string"&&(s.value=e)});const b=e=>e?{idea:"Simples idées qu'on a eu en passant, et qui peuvent être reprises par d'autres",rvew:"Articles déjà bien strucutrés, qui ont besoin d'être relus pour gagner en qualité",fnsh:"Articles qui peuvent donner lieu à des discussions mais qui ont atteint un stade abouti, lisible par le grand public"}[e]:"",m=D(),_=e=>{s.value=e,m.push({path:"/productions",query:{maturing_state:e}})},{getArticles:p,newArticle:A,createArticle:q}=N(),w=(e,r)=>e?e=="drft"?i.value:e=="alla"?r:r.filter(t=>t.maturing_state==e):[],k=e=>s.value==e?"valid":"abort",{user:$}=U(),C=async()=>{const e=A(),r=await q(e.value);m.push({path:"/articles/"+r.id,query:{editing:"true"}})};return F(async()=>{o.value=await p({author:!0}),i.value=await p({author:!1,drafts:!0}),typeof l.query.maturing_state=="string"?s.value=l.query.maturing_state:s.value="fnsh",_(s.value)}),(e,r)=>(a(),n("div",null,[u("div",z,[u("div",G,[d(B,{"url-key":"maturing_state",choices:[{text:"Tous",value:"alla"},{text:"Terminés",value:"fnsh"},{text:"Relecture",value:"rvew"},{text:"Idées",value:"idea"}],default:"alla",url:""})]),i.value.length>0?(a(),f(L,{key:0,class:"mr-auto my-1",text:"Mes brouillons",onClick:r[0]||(r[0]=t=>_("drft")),type:k("drft")},{default:v(()=>[g("Mes brouillons")]),_:1},8,["type"])):h("",!0),V($)?(a(),f(R,{key:1,class:"md:absolute mx-auto md:mx-0",onClick:C},{default:v(()=>[g("+")]),_:1})):h("",!0)]),u("div",H,E(b(s.value)),1),u("div",J,[(a(!0),n(I,null,P(w(s.value,o.value),(t,T)=>(a(),n("div",{key:T},[d(S,{title:t.title,subtitle:t.subtitle,"image-url":t.image_url,progress:t.interaction_progress,uuid:t.id,author:t.author},null,8,["title","subtitle","image-url","progress","uuid","author"])]))),128))])]))}}),O={class:"px-8"},se=x({__name:"ProductionsListView",setup(y){return(o,i)=>(a(),n("main",null,[u("div",O,[d(K,{state:"maturingState",style:{"min-height":"40rem"}})])]))}});export{se as default};
