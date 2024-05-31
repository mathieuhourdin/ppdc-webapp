import{_ as B}from"./FeedList.vue_vue_type_script_setup_true_lang-042f84de.js";import{d as k,n as $,y as N,h as w,b as _,e as x,A as h,f as i,a as u,q as U,t as n,c as y,w as I,G as q,m as f,i as o,o as t,H as A,u as E}from"./index-d06ac2da.js";import{_ as c,a as P}from"./ActionButton.vue_vue_type_script_setup_true_lang-2cd80ab5.js";import{_ as z}from"./CheckboxInput.vue_vue_type_script_setup_true_lang-670f3176.js";import{a as H,_ as R}from"./useThoughtInputs-ce7c1c8b.js";import{_ as j}from"./CreateThoughtInput.vue_vue_type_script_setup_true_lang-89871c19.js";import"./SelectionTextInterface.vue_vue_type_style_index_0_lang-cc2bf542.js";import"./useResourceRelations-b54bc278.js";import"./useResource-7dc6ad42.js";const D={class:"text-center p-4 bg-slate-200"},F={key:0,class:"relative"},G=["src"],M={key:0,class:"text-2xl bold"},S={key:1,class:"text-2xl bold"},T={class:"mt-4"},W={key:1},J={class:"grid grid-cols-2 gap-y-1 gap-x-2"},K={class:"col-span-1 flex flex-col"},L={class:"col-span-2"},O={class:"mt-2 flex flex-row-reverse"},Q=k({__name:"UserInfos",props:{user:{}},setup(g){const r=g,{user:d,debouncedUpdateUser:b}=$(),V=N(),m=w(()=>!r.user.is_platform_user||r.user.id===d.value.id),p=_(!1),s=_(null);return x(()=>{s.value=r.user,p.value=V.query.editingUser}),h(s,a=>{m.value&&b(a.id,a)},{deep:!0}),(a,l)=>(t(),i("div",D,[p.value?(t(),i("div",W,[u("div",J,[o(c,{class:"col-span-2",modelValue:s.value.profile_picture_url,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.profile_picture_url=e),label:"Photo de profil"},null,8,["modelValue"]),o(c,{class:"col-span-1",modelValue:s.value.first_name,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value.first_name=e),label:"Prénom"},null,8,["modelValue"]),o(c,{class:"col-span-1",modelValue:s.value.last_name,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value.last_name=e),label:"Nom"},null,8,["modelValue"]),o(c,{class:"col-span-1",modelValue:s.value.pseudonym,"onUpdate:modelValue":l[4]||(l[4]=e=>s.value.pseudonym=e),label:"Pseudo"},null,8,["modelValue"]),u("div",K,[o(z,{class:"item-center mr-auto my-auto",modelValue:s.value.pseudonymized,"onUpdate:modelValue":l[5]||(l[5]=e=>s.value.pseudonymized=e),label:"Ne montrer que votre pseudo"},null,8,["modelValue"])]),s.value.is_platform_user?(t(),y(c,{key:0,class:"col-span-1",modelValue:s.value.handle,"onUpdate:modelValue":l[6]||(l[6]=e=>s.value.handle=e),label:"Handle"},null,8,["modelValue"])):f("",!0),s.value.is_platform_user?(t(),y(c,{key:1,class:"col-span-1",modelValue:s.value.email,"onUpdate:modelValue":l[7]||(l[7]=e=>s.value.email=e),label:"Email"},null,8,["modelValue"])):f("",!0),u("div",L,[o(H,{modelValue:s.value.biography,"onUpdate:modelValue":l[8]||(l[8]=e=>s.value.biography=e),label:"Bio"},null,8,["modelValue"])])]),u("div",O,[o(P,{onClick:l[9]||(l[9]=e=>p.value=!1),text:"Valider",type:"valid"})])])):(t(),i("div",F,[u("img",{src:a.user.profile_picture_url,class:"mx-auto m-4 w-1/6"},null,8,G),a.user.id===U(d).id?(t(),i("div",M,n(a.user.first_name)+" "+n(a.user.last_name)+" "+n(a.user.pseudonym),1)):(t(),i("div",S,n(a.user.display_name),1)),u("div",null,n(a.user.handle),1),u("div",null,n(a.user.email),1),u("div",T,n(a.user.biography),1),m.value?(t(),y(q,{key:2,class:"right-4 absolute",onClick:l[0]||(l[0]=e=>p.value=!0)},{default:I(()=>[o(U(A),{class:"m-1"})]),_:1})):f("",!0)]))]))}}),X={class:"mt-8 md:mx-6"},re=k({__name:"UserFeedView",props:{pageUserId:{}},setup(g){const r=g,d=_(!1),{getUserById:b,user:V}=$(),m=_(null),{getUserReadAndWriteInteractions:p,getInteractions:s}=E(),a=_([]),l=w(()=>a.value.map(e=>({resource:e.resource,date:e.interaction_date,user_id:e.interaction_user_id,context_comment:e.interaction_comment,progress:e.interaction_progress,...e})).sort((e,v)=>v.date-e.date));return x(async()=>{m.value=await b(r.pageUserId),a.value=await p(r.pageUserId);const e=await s({interaction_type:"rvew",interaction_user_id:r.pageUserId});a.value=a.value.concat(e)}),(e,v)=>(t(),i("div",null,[u("div",X,[m.value?(t(),y(Q,{key:0,class:"mx-auto border my-8",user:m.value},null,8,["user"])):f("",!0),U(V)&&e.pageUserId==U(V).id?(t(),i("div",{key:1,class:"italic underline text-xs mb-4",onClick:v[0]||(v[0]=C=>d.value=!0)}," Ajouter un nouvel apport ")):f("",!0),o(R,{open:d.value},{default:I(()=>[o(j,{onClose:v[1]||(v[1]=C=>d.value=!1)})]),_:1},8,["open"]),o(B,{"interactions-list":l.value},null,8,["interactions-list"])])]))}});export{re as default};