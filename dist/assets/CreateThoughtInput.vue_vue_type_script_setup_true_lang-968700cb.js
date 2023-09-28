import{_ as a}from"./TextInput.vue_vue_type_script_setup_true_lang-273045be.js";import{d as i,r as v,o as _,c as V,h as o,f as t,_ as s}from"./index-6c02f670.js";import{u as c}from"./useThoughtInputs-35710700.js";const f=t("div",null,"Nouvel apport",-1),g={class:"flex flex-wrap"},w={class:"flex flex-wrap"},x={class:"flex flex-row-reverse"},T=i({__name:"CreateThoughtInput",emits:["close"],setup(b,{emit:n}){const{newThoughtInput:m,createThoughtInput:d}=c(),e=v(m()),p=()=>{d(e.value),r()},r=()=>n("close");return(U,l)=>(_(),V("div",null,[f,o(a,{label:"Titre de l'ouvrage",modelValue:e.value.resource_title,"onUpdate:modelValue":l[0]||(l[0]=u=>e.value.resource_title=u)},null,8,["modelValue"]),t("div",g,[o(a,{class:"h-8 w-full md:w-5/12",label:"Nom de l'auteur",modelValue:e.value.resource_author_name,"onUpdate:modelValue":l[1]||(l[1]=u=>e.value.resource_author_name=u)},null,8,["modelValue"]),o(a,{class:"h-8 w-full md:w-5/12 md:ml-auto",label:"type de resource",modelValue:e.value.resource_type,"onUpdate:modelValue":l[2]||(l[2]=u=>e.value.resource_type=u)},null,8,["modelValue"])]),t("div",w,[o(a,{class:"h-8 w-full md:w-5/12",label:"Lien de la ressource",modelValue:e.value.resource_external_content_url,"onUpdate:modelValue":l[3]||(l[3]=u=>e.value.resource_external_content_url=u)},null,8,["modelValue"]),o(a,{class:"h-8 w-full md:w-5/12 md:ml-auto",label:"Lien de l'image",modelValue:e.value.resource_image_url,"onUpdate:modelValue":l[4]||(l[4]=u=>e.value.resource_image_url=u)},null,8,["modelValue"])]),o(a,{label:"Commentaire sur l'ouvrage",modelValue:e.value.resource_comment,"onUpdate:modelValue":l[5]||(l[5]=u=>e.value.resource_comment=u)},null,8,["modelValue"]),o(a,{label:"Avancement de l'ouvrage",modelValue:e.value.input_progress,"onUpdate:modelValue":l[6]||(l[6]=u=>e.value.input_progress=u),type:"number"},null,8,["modelValue"]),o(a,{label:"Date de lecture",modelValue:e.value.input_date,"onUpdate:modelValue":l[7]||(l[7]=u=>e.value.input_date=u),type:"date"},null,8,["modelValue"]),o(a,{label:"Pourquoi s'y être interessé ?",modelValue:e.value.input_comment,"onUpdate:modelValue":l[8]||(l[8]=u=>e.value.input_comment=u)},null,8,["modelValue"]),t("div",x,[o(s,{onClick:p,class:"m-4",text:"Valider",type:"valid"}),o(s,{onClick:r,class:"m-4",text:"Annuler",type:"abort"})])]))}});export{T as _};
