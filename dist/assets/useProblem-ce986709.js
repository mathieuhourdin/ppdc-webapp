import{q as a,A as n}from"./index-a70689c5.js";const{launchSnackbar:o}=n(),s=()=>{const t={title:"",subtitle:"",content:"",external_content_url:"",publishing_state:"drft",maturing_state:"idea",image_url:"",resource_type:"pblm",comment:""};return{interaction_progress:0,interaction_comment:"",interaction_date:new Date(Date.now()),resource:t,interaction_is_public:!0}},c=t=>(t.created_at&&(t.created_at=new Date(t.created_at.split(".")[0])),t),i=async()=>(await a.get("/problems")).data.map(e=>c(e)),u=async t=>{var e;try{const r={...t,interaction_date:(e=t.interaction_date)==null?void 0:e.toISOString().split(".")[0]};return(await a.post("/thought_outputs",r)).data}catch(r){throw o(`Error updating resource : ${r}`,"error"),r}};function p(){return{newProblem:s,getProblems:i,createProblem:u}}export{p as u};