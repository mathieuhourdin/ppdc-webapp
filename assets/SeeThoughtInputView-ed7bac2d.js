import{a as u}from"./ResourceComponent.vue_vue_type_script_setup_true_lang-26e79e81.js";import{u as r}from"./useThoughtInputs-a23135ee.js";import{d as p,b as s,e as m,f as i,c,m as l,o}from"./index-eb3705dd.js";import"./ActionButton.vue_vue_type_script_setup_true_lang-1dcdc126.js";import"./SelectionTextInterface.vue_vue_type_script_setup_true_lang-e76c8426.js";import"./SelectionTextInterface.vue_vue_type_style_index_0_lang-4befa9dc.js";import"./ProgressBar.vue_vue_type_script_setup_true_lang-1da19d18.js";import"./useResource-8eb42161.js";import"./UserPicker.vue_vue_type_script_setup_true_lang-f41bc055.js";import"./useResourceRelations-c94da818.js";const y=p({__name:"SeeThoughtInputView",props:{id:{}},setup(e){const n=e,t=s(null),{getThoughtInput:a}=r();return m(async()=>t.value=await a(n.id)),(h,f)=>(o(),i("div",null,[t.value?(o(),c(u,{key:0,"thought-input":t.value,class:"m-2"},null,8,["thought-input"])):l("",!0)]))}});export{y as default};
