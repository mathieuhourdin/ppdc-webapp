import{_ as a}from"./TextInput.vue_vue_type_script_setup_true_lang-688c25f3.js";import{e as p,u as V}from"./ResourceComponent.vue_vue_type_script_setup_true_lang-4490771e.js";import{_ as n}from"./ActionButton.vue_vue_type_script_setup_true_lang-f1fa5f8e.js";import{d as f,r as d,b as _,e as x,g as o,f as u}from"./index-5b3a11e5.js";const b=u("div",null,"Nouvel apport",-1),g={class:"flex flex-wrap"},w={class:"flex flex-wrap"},y={class:"flex flex-row-reverse"},A=f({__name:"CreateThoughtInput",emits:["close","refresh"],setup(h,{emit:r}){const{newThoughtInput:m,createThoughtInput:i}=V(),e=d(m()),c=async()=>{await i(e.value),r("refresh"),s()},v=d([{text:"Livre",value:"book"},{text:"Fiche de lecture",value:"shet"},{text:"Article de média",value:"natc"},{text:"Article de recherche",value:"ratc"},{text:"Film",value:"movi"},{text:"Podcast",value:"pcst"}]),s=()=>r("close");return(U,l)=>(_(),x("div",null,[b,o(a,{label:"Titre de l'ouvrage",modelValue:e.value.resource.title,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.resource.title=t)},null,8,["modelValue"]),u("div",g,[o(a,{class:"h-8 w-full md:w-5/12",label:"Sous-titre",modelValue:e.value.resource.subtitle,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.resource.subtitle=t)},null,8,["modelValue"]),o(p,{label:"Type de ressource",class:"m-4 h-8 w-full md:w-5/12 md:ml-auto",choices:v.value,modelValue:e.value.resource.resource_type,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.resource.resource_type=t)},null,8,["choices","modelValue"])]),u("div",w,[o(a,{class:"h-8 w-full md:w-5/12",label:"Lien de la ressource",modelValue:e.value.resource.external_content_url,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.resource.external_content_url=t)},null,8,["modelValue"]),o(a,{class:"h-8 w-full md:w-5/12 md:ml-auto",label:"Lien de l'image",modelValue:e.value.resource.image_url,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.resource.image_url=t)},null,8,["modelValue"])]),o(a,{label:"Commentaire sur l'ouvrage",modelValue:e.value.resource.comment,"onUpdate:modelValue":l[5]||(l[5]=t=>e.value.resource.comment=t)},null,8,["modelValue"]),o(a,{label:"Avancement de l'ouvrage",modelValue:e.value.interaction_progress,"onUpdate:modelValue":l[6]||(l[6]=t=>e.value.interaction_progress=t),type:"number"},null,8,["modelValue"]),o(a,{label:"Date de lecture",modelValue:e.value.interaction_date,"onUpdate:modelValue":l[7]||(l[7]=t=>e.value.interaction_date=t),type:"date"},null,8,["modelValue"]),o(a,{label:"Pourquoi s'y être interessé ?",modelValue:e.value.interaction_comment,"onUpdate:modelValue":l[8]||(l[8]=t=>e.value.interaction_comment=t)},null,8,["modelValue"]),u("div",y,[o(n,{onClick:c,class:"m-4",text:"Valider",type:"valid"}),o(n,{onClick:s,class:"m-4",text:"Annuler",type:"abort"})])]))}});export{A as _};