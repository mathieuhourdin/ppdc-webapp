import{_ as i}from"./ArticleForm.vue_vue_type_script_setup_true_lang-d6ead06c.js";import{o as n,c as _,a as t,d as s,f as u,g as m,_ as d,h as p}from"./index-fa62e879.js";import"./TextInput.vue_vue_type_script_setup_true_lang-eb9c89c6.js";const f={class:"max-w-xl mt-8 mx-auto border-2 p-4"},v=t("div",null,"Nouvel Article",-1),x={class:"flex"},C={__name:"WriteArticle",setup(A){const{newArticle:l,createArticle:c}=m(),e=l(),r=async()=>{await c(e.value),p.push("/")};return(h,a)=>(n(),_("div",null,[t("div",f,[v,s(i,{class:"w-full",article:u(e),onChange:a[0]||(a[0]=o=>e.value=o)},null,8,["article"]),t("div",x,[s(d,{onClick:r,text:"Valider",type:"valid",class:"ml-auto m-4"})])])]))}};export{C as default};