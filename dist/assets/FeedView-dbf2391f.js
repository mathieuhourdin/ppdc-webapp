import{_ as n}from"./FeedList.vue_vue_type_script_setup_true_lang-ff63d9a0.js";import{d as c,r as i,c as m,o as u,a as _,b as d,e as l}from"./index-1e51096d.js";import{u as p}from"./useInteraction-a2359cd9.js";import"./useResourceRelations-4972c113.js";const f={class:"mt-1 md:w-96"},I=c({__name:"FeedView",setup(v){const{getReadAndWriteInteractions:s}=p(),t=i([]),o=m(()=>t.value.map(e=>({resource:e.resource,date:e.interaction_date,user_id:e.interaction_user_id,context_comment:e.interaction_comment,progress:e.interaction_progress,...e})).sort((e,r)=>.5-Math.random())),a=async()=>t.value=await s();return u(async()=>{await a()}),(e,r)=>(l(),_("div",f,[d(n,{"interactions-list":o.value},null,8,["interactions-list"])]))}});export{I as default};