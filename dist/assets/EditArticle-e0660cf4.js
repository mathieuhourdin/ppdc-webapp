import{_ as v}from"./ArticleForm.vue_vue_type_script_setup_true_lang-aa878104.js";import{k as _,r as f,q as w,y as t,n as x,o as h,c as A,a as s,e as n,h as g,f as y,i as k,j as B}from"./index-ceb47556.js";import"./TextInput.vue_vue_type_script_setup_true_lang-d656c46a.js";const C={class:"max-w-xl mt-8 mx-auto border-2 p-4"},E=s("div",null,"Edition",-1),N={class:"flex"},U=_({__name:"EditArticle",props:{id:{}},setup(r){const a=r,{newArticle:u,getArticle:d,updateArticle:l}=k(),e=u(),o=f(null),m=async()=>{await l(t(a).id.value,e.value),B.push("/articles/"+t(a).id.value)};return w(async()=>{e.value=await d(t(a).id.value)}),x(e,i=>{console.log("New article : ",i),clearTimeout(o.value),o.value=setTimeout(async()=>{await l(t(a).id.value,e.value)},2e3)},{deep:!0}),(i,c)=>(h(),A("div",null,[s("div",C,[E,n(v,{class:"w-full",article:g(e),onChange:c[0]||(c[0]=p=>e.value=p)},null,8,["article"]),s("div",N,[n(y,{onClick:m,text:"Valider",type:"valid",class:"ml-auto m-4"})])])]))}});export{U as default};
