import{a as m}from"./ResourceComponent.vue_vue_type_script_setup_true_lang-0710b2ad.js";import{u as n}from"./useThoughtInputs-d1f4032d.js";import{d as a,b as u,e as i,f as s,c,m as l,o}from"./index-6b064939.js";import"./useArticle-4d64e15a.js";import"./ActionButton.vue_vue_type_script_setup_true_lang-0adba7cb.js";import"./RoundLinkButton.vue_vue_type_style_index_0_lang-99a7ff9f.js";import"./SelectionTextInterface.vue_vue_type_script_setup_true_lang-2b80f9ed.js";import"./SelectionTextInterface.vue_vue_type_style_index_0_lang-e2878867.js";import"./TextInput.vue_vue_type_script_setup_true_lang-22ba6d41.js";import"./useInteraction-ab9dc1a3.js";import"./ProgressBar.vue_vue_type_script_setup_true_lang-8d1b99c0.js";import"./UserPicker.vue_vue_type_script_setup_true_lang-294bd69a.js";import"./useResource-cbb88dbe.js";import"./useResourceRelations-b52ab82c.js";import"./useProblem-778017bf.js";const M=a({__name:"SeeThoughtInputView",props:{id:{}},setup(e){const r=e,t=u(null),{getThoughtInput:p}=n();return i(async()=>t.value=await p(r.id)),(h,f)=>(o(),s("div",null,[t.value?(o(),c(m,{key:0,"thought-input":t.value,class:"m-2"},null,8,["thought-input"])):l("",!0)]))}});export{M as default};