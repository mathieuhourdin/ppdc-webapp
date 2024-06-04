import{_ as b}from"./FeedList.vue_vue_type_script_setup_true_lang-10f1837f.js";import{d as c,r as f,o,c as _,w,a,t as v,b as d,e as p,f as n,F as x,g as h,h as g,i as m,u as k}from"./index-c18c0667.js";import{u as y}from"./useResource-0cdd20e8.js";import"./useResourceRelations-3240a679.js";const F={class:"w-10 mx-auto"},$=["src"],B={class:"text-center overflow-hidden mt-1 text-xs",style:{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"3"}},R=c({__name:"FollowedProblem",props:{problem:{}},setup(l){return(s,t)=>{const r=f("router-link");return o(),_(r,{to:"/resources/"+s.problem.id+"/feed",class:"m-1"},{default:w(()=>[a("div",F,[a("img",{src:s.problem.image_url,class:"border-2 border-zinc-400 rounded-full max-w-full aspect-[2/2] object-cover object-center w-full"},null,8,$)]),a("div",B,v(s.problem.title),1)]),_:1},8,["to"])}}}),C={class:"flex"},I=c({__name:"FollowedProblemsList",setup(l){const{getResources:s}=y(),t=d([]);return p(async()=>{t.value=await s({is_external:!1,resource_type:"pblm"})}),(r,i)=>(o(),n("div",C,[(o(!0),n(x,null,h(t.value,e=>(o(),_(R,{problem:e,class:"shrink-0 grow-0 w-16"},null,8,["problem"]))),256))]))}}),V={class:"mt-1"},z=c({__name:"FeedView",setup(l){const{getReadAndWriteInteractions:s}=k(),t=d([]),r=g(()=>t.value.map(e=>({resource:e.resource,date:e.interaction_date,user_id:e.interaction_user_id,context_comment:e.interaction_comment,progress:e.interaction_progress,...e})).sort((e,u)=>u.date-e.date)),i=async()=>t.value=await s();return p(async()=>{await i()}),(e,u)=>(o(),n("div",V,[m(I,{class:"overflow-scroll mb-2 md:mx-8",style:{"scrollbar-width":"none","-ms-overflow-style":"none"}}),m(b,{"interactions-list":r.value,class:"md:w-96 mx-auto"},null,8,["interactions-list"])]))}});export{z as default};
