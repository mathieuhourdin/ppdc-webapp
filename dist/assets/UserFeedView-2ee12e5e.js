import{d as c,o as i,c as m,f as n,t as p,r as h,q as I,n as C,y as D,g as T,a as f,z as $,h as r,_ as V,F as B,A as N,i as x,B as S,u as w,w as y,x as L,s as A,e as F}from"./index-4fb3fffb.js";import{_ as d}from"./TextInput.vue_vue_type_script_setup_true_lang-c8fd3d96.js";const z={class:"text-center p-4 bg-slate-200"},R={class:"text-2xl bold"},q=c({__name:"UserInfos",props:{user:{}},setup(u){return(o,a)=>(i(),m("div",z,[n("div",R,p(o.user.first_name)+" "+p(o.user.last_name),1),n("div",null,p(o.user.handle),1)]))}}),M={key:0,class:"fixed top-0 left-0 w-full h-full z-10 bg-slate-500/50"},O={class:"max-w-xl overflow-y-scroll max-h-screen mb-10 bg-white mx-auto mt-6 p-4 rounded shadow"},E=c({__name:"ModalSheet",props:{open:{type:Boolean,default:!1}},setup(u){const o=u,a=h(!1);return I(()=>a.value=o.open),C(D(o).open,t=>a.value=t),(t,e)=>a.value?(i(),m("div",M,[n("div",O,[T(t.$slots,"default")])])):f("",!0)}});function P(){return{resource_title:"",resource_author_name:"",resource_type:"",resource_link:"",resource_image_link:"",resource_comment:"",input_progress:0,input_date:new Date(Date.now()),input_comment:"",input_is_public:!0}}function b(u){return console.log("Date : ",u.input_date),u.input_date=new Date(u.input_date),u}async function W(u){return(await $.get("/users/"+u+"/thought_inputs")).data.map(a=>b(a))}async function j(u){const o=new Date(u.input_date);console.log("Date : ",o);const a=o.toISOString().split(".")[0],t=await $.post("/thought_inputs",{...u,input_date:a});return b(t.data)}function U(){return{getUserThoughtInputs:W,newThoughtInput:P,createThoughtInput:j}}const G=n("div",null,"Nouvel apport",-1),H={class:"flex flex-wrap"},J={class:"flex flex-wrap"},K={class:"flex flex-row-reverse"},Q=c({__name:"CreateThoughtInput",emits:["close"],setup(u,{emit:o}){const{newThoughtInput:a,createThoughtInput:t}=U(),e=h(a()),_=()=>{t(e.value),v()},v=()=>o("close");return(g,l)=>(i(),m("div",null,[G,r(d,{label:"titre de l'ouvrage",modelValue:e.value.resource_title,"onUpdate:modelValue":l[0]||(l[0]=s=>e.value.resource_title=s)},null,8,["modelValue"]),n("div",H,[r(d,{class:"h-8 mx-auto",label:"Nom de l'auteur",modelValue:e.value.resource_author_name,"onUpdate:modelValue":l[1]||(l[1]=s=>e.value.resource_author_name=s)},null,8,["modelValue"]),r(d,{class:"h-8 mx-auto",label:"type de resource",modelValue:e.value.resource_type,"onUpdate:modelValue":l[2]||(l[2]=s=>e.value.resource_type=s)},null,8,["modelValue"])]),n("div",J,[r(d,{class:"h-8 mx-auto",label:"Lien de la ressource",modelValue:e.value.resource_link,"onUpdate:modelValue":l[3]||(l[3]=s=>e.value.resource_link=s)},null,8,["modelValue"]),r(d,{class:"h-8 mx-auto",label:"Lien de l'image",modelValue:e.value.resource_image_link,"onUpdate:modelValue":l[4]||(l[4]=s=>e.value.resource_image_link=s)},null,8,["modelValue"])]),r(d,{label:"Commentaire sur l'ouvrage",modelValue:e.value.resource_comment,"onUpdate:modelValue":l[5]||(l[5]=s=>e.value.resource_comment=s)},null,8,["modelValue"]),r(d,{label:"Avancement de l'ouvrage",modelValue:e.value.input_progress,"onUpdate:modelValue":l[6]||(l[6]=s=>e.value.input_progress=s)},null,8,["modelValue"]),r(d,{label:"Date de lecture",modelValue:e.value.input_date,"onUpdate:modelValue":l[7]||(l[7]=s=>e.value.input_date=s),type:"date"},null,8,["modelValue"]),r(d,{label:"Pourquoi s'y être interessé ?",modelValue:e.value.input_comment,"onUpdate:modelValue":l[8]||(l[8]=s=>e.value.input_comment=s)},null,8,["modelValue"]),n("div",K,[r(V,{onClick:_,class:"m-4",text:"Valider",type:"valid"}),r(V,{onClick:v,class:"m-4",text:"Annuler",type:"abort"})])]))}}),X={class:"border shadow-xl rounded m-2 p-4 w-96"},Y={class:"flex"},Z=["src"],ee={class:"text-2xs italic",style:{"margin-top":"-8px"}},te={class:"text-2xs"},se={class:"text-2xs italic"},oe=c({__name:"ThoughtInputCard",props:{thoughtInput:{}},setup(u){const o=t=>t.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}),a=t=>t.length>200?t.slice(0,150)+"...":t;return(t,e)=>(i(),m("div",X,[n("div",Y,[n("img",{class:"w-8 h-fit mr-4",src:t.thoughtInput.resource_image_link},null,8,Z),n("div",null,[n("div",null,p(t.thoughtInput.resource_title),1),n("div",ee,p(t.thoughtInput.resource_author_name),1),n("div",te,p(a(t.thoughtInput.input_comment)),1)])]),n("div",se,p(o(t.thoughtInput.input_date)),1)]))}}),le=n("div",{class:"absolute md:border h-full start-1/2"},null,-1),ue=c({__name:"ThoughtInputsList",props:{thoughtInputs:{}},setup(u){return(o,a)=>(i(),m("div",null,[le,(i(!0),m(B,null,N(o.thoughtInputs,(t,e)=>(i(),x(oe,{key:t.id,class:S(["mx-auto md:mr-0 max-w-full",{"md:ml-0":e%2==0}]),"thought-input":t},null,8,["class","thought-input"]))),128))]))}}),ae={class:"m-8"},ne=n("div",{class:"text-center m-4 italic text-sm"},"Derniers apports extérieurs",-1),de=c({__name:"UserFeedView",props:{pageUserId:{}},setup(u){const o=u,a=h(!1),{getUserById:t,user:e}=F(),_=h(null),{getUserThoughtInputs:v}=U(),g=h([]);return I(async()=>{_.value=await t(o.pageUserId),g.value=await v(o.pageUserId)}),(l,s)=>(i(),m("div",null,[n("div",ae,[_.value?(i(),x(q,{key:0,class:"mx-auto border my-8",user:_.value},null,8,["user"])):f("",!0),ne,w(e)&&l.pageUserId==w(e).id?(i(),x(A,{key:1,class:"md:absolute mx-auto md:mx-0",onClick:s[0]||(s[0]=k=>a.value=!0)},{default:y(()=>[L("+")]),_:1})):f("",!0),r(E,{open:a.value},{default:y(()=>[r(Q,{onClose:s[1]||(s[1]=k=>a.value=!1)})]),_:1},8,["open"]),r(ue,{class:"mx-auto","thought-inputs":g.value},null,8,["thought-inputs"])])]))}});export{de as default};