import{E as s}from"./index-5b3a11e5.js";const t=async e=>(await s.get("/resource/"+e+"/bibliography")).data,o=async e=>(await s.get("/resource/"+e+"/usages")).data,a=async e=>(await s.post("/thought_input_usages",e)).data;function c(){return{getResourceRelationsForResource:t,createResourceRelation:a,getUsagesForResource:o}}export{c as u};