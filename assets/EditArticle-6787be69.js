import{_}from"./ArticleForm.vue_vue_type_script_setup_true_lang-d6ead06c.js";import{i as v,r as f,n as w,x as t,l as x,o as g,c as h,a as s,d as n,f as A,_ as y,g as k,h as B}from"./index-fa62e879.js";import"./TextInput.vue_vue_type_script_setup_true_lang-eb9c89c6.js";const C={class:"max-w-xl mt-8 mx-auto border-2 p-4"},E=s("div",null,"Edition",-1),N={class:"flex"},U=v({__name:"EditArticle",props:{id:{}},setup(r){const a=r,{newArticle:u,getArticle:d,updateArticle:l}=k(),e=u(),o=f(null),m=async()=>{await l(t(a).id.value,e.value),B.push("/articles/"+t(a).id.value)};return w(async()=>{e.value=await d(t(a).id.value)}),x(e,i=>{console.log("New article : ",i),clearTimeout(o.value),o.value=setTimeout(async()=>{await l(t(a).id.value,e.value)},2e3)},{deep:!0}),(i,c)=>(g(),h("div",null,[s("div",C,[E,n(_,{class:"w-full",article:A(e),onChange:c[0]||(c[0]=p=>e.value=p)},null,8,["article"]),s("div",N,[n(y,{onClick:m,text:"Valider",type:"valid",class:"ml-auto m-4"})])])]))}});export{U as default};