import{a as n}from"./ResourceComponent.vue_vue_type_script_setup_true_lang-31ca9134.js";import{u as p}from"./useThoughtInputs-977ad099.js";import{d as u,r as m,o as s,a as i,h as c,k as l,e as o}from"./index-1e51096d.js";import"./useArticle-7577fdfa.js";import"./ActionButton.vue_vue_type_script_setup_true_lang-6389271e.js";import"./RoundLinkButton.vue_vue_type_style_index_0_lang-d399684c.js";import"./TextInterface.vue_vue_type_script_setup_true_lang-779fe3a1.js";import"./TextInput.vue_vue_type_script_setup_true_lang-b5e1d808.js";import"./useInteraction-a2359cd9.js";import"./ProgressBar.vue_vue_type_script_setup_true_lang-ebc5e980.js";import"./useResource-64616034.js";import"./useResourceRelations-4972c113.js";import"./useProblem-54d6d564.js";const E=u({__name:"SeeThoughtInputView",props:{id:{}},setup(e){const r=e,t=m(null),{getThoughtInput:a}=p();return s(async()=>t.value=await a(r.id)),(h,d)=>(o(),i("div",null,[t.value?(o(),c(n,{key:0,"thought-input":t.value,class:"m-2"},null,8,["thought-input"])):l("",!0)]))}});export{E as default};