import{d as h,o as a,c as v,f as o,t as n,r as u,l as $,i as m,a as d,u as _,w as f,x as y,y as k,h as l,e as w}from"./index-65a2f855.js";import{a as B,_ as C}from"./ThoughtInputsList.vue_vue_type_script_setup_true_lang-833ebea1.js";import{_ as N}from"./CreateThoughtInput.vue_vue_type_script_setup_true_lang-9926b99b.js";import{u as V}from"./useThoughtInputs-1176c06a.js";import"./TextInput.vue_vue_type_script_setup_true_lang-a8940585.js";import"./TextInterface.vue_vue_type_script_setup_true_lang-0bede23c.js";const T={class:"text-center p-4 bg-slate-200"},b={class:"text-2xl bold"},D=h({__name:"UserInfos",props:{user:{}},setup(i){return(e,s)=>(a(),v("div",T,[o("div",b,n(e.user.first_name)+" "+n(e.user.last_name),1),o("div",null,n(e.user.handle),1)]))}}),E={class:"m-8"},F=o("div",{class:"text-center m-4 italic text-sm"},"Derniers apports extérieurs",-1),G=h({__name:"UserFeedView",props:{pageUserId:{}},setup(i){const e=i,s=u(!1),{getUserById:g,user:p}=w(),r=u(null),{getUserThoughtInputs:x}=V(),c=u([]);return $(async()=>{r.value=await g(e.pageUserId),c.value=await x(e.pageUserId)}),(I,t)=>(a(),v("div",null,[o("div",E,[r.value?(a(),m(D,{key:0,class:"mx-auto border my-8",user:r.value},null,8,["user"])):d("",!0),F,_(p)&&I.pageUserId==_(p).id?(a(),m(k,{key:1,class:"mx-auto md:mx-0",onClick:t[0]||(t[0]=U=>s.value=!0)},{default:f(()=>[y("+")]),_:1})):d("",!0),l(B,{open:s.value},{default:f(()=>[l(N,{onClose:t[1]||(t[1]=U=>s.value=!1)})]),_:1},8,["open"]),l(C,{class:"mx-auto","thought-inputs":c.value},null,8,["thought-inputs"])])]))}});export{G as default};