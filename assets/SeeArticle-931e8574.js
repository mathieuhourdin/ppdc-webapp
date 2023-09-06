import{_ as U,u as q}from"./TextInterface.vue_vue_type_script_setup_true_lang-f7f5dcea.js";import{o as l,c as n,a as o,i as N,r as u,j,k as z,l as D,m as E,n as L,t as b,e as i,w as A,d as c,f as P,p as R,q as w,s as S,v as T,_ as C,g as H,x as F,u as O}from"./index-fa62e879.js";import{_ as G,a as I}from"./ArticleForm.vue_vue_type_script_setup_true_lang-d6ead06c.js";import"./TextInput.vue_vue_type_script_setup_true_lang-eb9c89c6.js";function J(m,r){return l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})])}const K={key:0,class:"px-8 mx-auto"},Q={key:0},W={class:"my-8"},X=["src"],Y={class:"text-3xl my-3 font-mplus md:text-center text-left"},Z={class:"md:text-center text-left"},ee={class:"md:flex my-8"},te=["href"],se={key:1},ae={class:"flex flex-row-reverse"},le={key:1,class:"p-2 border rounded bg-neutral-100"},oe=o("hr",{class:"border-top border-zinc-400 my-4"},null,-1),ce=N({__name:"SeeArticle",props:{id:{}},setup(m){const r=m,{getArticle:V,updateArticle:v}=H(),_=u(null),e=u(null),f=j(),$=z();D(()=>f.query.editing,t=>{console.log("Editing : ",t),d.value=t==="false"?!1:!!t});const d=u(!1),p=t=>{$.push({query:{editing:t}})},B=()=>{e.value.publishing_state="pbsh",v(e.value.id,e.value)},x=(t,s)=>{clearTimeout(_.value),_.value=setTimeout(async()=>{try{await v(t,s)}catch(a){console.log("An error : ",a)}},1e3)},g=t=>{t!=`
`&&x(F(r).id.value,{...e.value,content:t})},{user:h}=O(),y=E(()=>h.value?e.value.author_id==h.value.id:!1),{getCommentsForArticle:M}=q(),k=u([]);return L(async()=>{e.value=await V(r.id),k.value=await M(r.id);const t=f.query.editing;d.value=t==="false"?!1:!!t}),(t,s)=>e.value?(l(),n("div",K,[d.value?(l(),n("div",se,[c(G,{article:e.value,onChange:s[1]||(s[1]=a=>x(e.value.id,a))},null,8,["article"]),o("div",ae,[c(C,{class:"mx-4",onClick:s[2]||(s[2]=a=>p(!1)),type:"valid",text:"Preview"},{default:A(()=>[T("Ok")]),_:1}),e.value.publishing_state=="drft"?(l(),i(C,{key:0,onClick:B,type:"valid",text:"Publier"})):(l(),n("div",le,"Publié"))])])):(l(),n("div",Q,[o("div",W,[o("img",{src:e.value.image_url,class:"border border-slate-300 dark:border-zinc-700 rounded-xl ml-auto mr-auto"},null,8,X)]),o("h1",Y,b(e.value.title),1),o("div",Z,b(e.value.description),1),y.value?(l(),i(R,{key:0,onClick:s[0]||(s[0]=a=>p(!0))},{default:A(()=>[c(P(J),{class:"m-1"})]),_:1})):w("",!0),o("div",ee,[c(S,{"progress-value":e.value.progress,class:"w-1/3"},null,8,["progress-value"]),o("a",{class:"ml-auto underline",href:e.value.gdoc_url}," Ajouter un commentaire ",8,te)])])),oe,e.value.publishing_state!="drft"?(l(),i(U,{key:2,"ext-comments":k.value,"ressource-id":e.value.id,"full-text":e.value.content,editable:y.value,onChange:s[3]||(s[3]=a=>g(a))},null,8,["ext-comments","ressource-id","full-text","editable"])):(l(),i(I,{key:3,class:"h-96",label:"Contenu",modelValue:e.value.content,"onUpdate:modelValue":s[4]||(s[4]=a=>g(a))},null,8,["modelValue"]))])):w("",!0)}});export{ce as default};