import{_ as w}from"./FeedList.vue_vue_type_script_setup_true_lang-9cc81d7c.js";import{d as l,r as f,o,c as m,w as b,a as n,t as v,b as d,e as p,f as c,F as x,g as h,h as y,i as u,u as g}from"./index-c12685c0.js";import{u as k}from"./useResource-512f2130.js";import"./useResourceRelations-65809224.js";const F={class:"w-10 mx-auto"},$=["src"],B={class:"text-center overflow-hidden mt-1 text-xs",style:{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"3"}},R=l({__name:"FollowedProblem",props:{problem:{}},setup(i){return(t,s)=>{const r=f("router-link");return o(),m(r,{to:"/resources/"+t.problem.id+"/feed",class:"m-1"},{default:b(()=>[n("div",F,[n("img",{src:t.problem.image_url,class:"border-2 border-zinc-400 rounded-full max-w-full aspect-[2/2] object-cover object-center w-full"},null,8,$)]),n("div",B,v(t.problem.title),1)]),_:1},8,["to"])}}}),C={class:"flex"},D=l({__name:"FollowedProblemsList",setup(i){const{getResources:t}=k(),s=d([]);return p(async()=>{s.value=await t({is_external:!1,resource_type:"pblm"})}),(r,_)=>(o(),c("div",C,[(o(!0),c(x,null,h(s.value,e=>(o(),m(R,{problem:e,class:"shrink-0 grow-0 w-16"},null,8,["problem"]))),256))]))}}),I={class:"mt-1"},P=l({__name:"FeedView",setup(i){const{getReadAndWriteInteractions:t}=g(),s=d([]),r=y(()=>s.value.map(e=>({resource:e.resource,date:e.interaction_date,post_date:e.interaction_type==="inpt"?e.interaction_date:new Date(e.resource.created_at),user_id:e.interaction_user_id,context_comment:e.interaction_comment,progress:e.interaction_progress,...e})).sort((e,a)=>(e.interaction_type==="inpt"?e.interaction_date:new Date(e.resource.created_at))<(a.interaction_type==="inpt"?a.interaction_date:a.resource.created_at))),_=async()=>s.value=await t();return p(async()=>{await _()}),(e,a)=>(o(),c("div",I,[u(D,{class:"overflow-scroll mb-2 md:mx-8",style:{"scrollbar-width":"none","-ms-overflow-style":"none"}}),u(w,{"interactions-list":r.value,class:"md:w-2/3 mx-auto"},null,8,["interactions-list"])]))}});export{P as default};
