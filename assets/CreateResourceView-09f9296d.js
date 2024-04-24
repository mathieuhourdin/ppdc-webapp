import{q as h,d as w,b as u,h as I,o as n,f as m,i as s,s as L,c as k,w as D,l as A,m as d,k as E,a as V,_ as N,p as T}from"./index-95f5efb4.js";import{_}from"./TextInput.vue_vue_type_script_setup_true_lang-e79628cf.js";import{_ as p}from"./ActionButton.vue_vue_type_script_setup_true_lang-ab5b93a7.js";import{_ as B}from"./UserPicker.vue_vue_type_script_setup_true_lang-6b129153.js";import{u as F}from"./useResource-3af1034e.js";import{u as K}from"./useInteraction-5a2cf68b.js";async function S(x){return(await h.post("/link_preview",x)).data}function q(){return{postLinkPreview:S}}const O=w({__name:"ExternalResourcePreview",emits:["change"],setup(x,{emit:o}){const{postLinkPreview:y}=q(),f=async()=>{const r=await y({external_content_url:e.value});console.log(r),v.value=e.value,o("change",r)},e=u(""),v=u(""),b=I(()=>v.value!==e.value);return(r,i)=>(n(),m("div",null,[s(_,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=c=>e.value=c),class:"mb-4",onKeyup:L(f,["enter"]),label:"Lien ressource externe"},null,8,["modelValue","onKeyup"]),b.value?(n(),k(p,{key:0,class:"mb-4",text:"Preview",onClick:f,type:"valid"},{default:D(()=>[A("Générer")]),_:1})):d("",!0)]))}}),G={class:"mt-10 mx-5"},W={key:0},j={key:1},z={key:2},H={key:1},J=["src"],M=w({__name:"CreateResourceProcess",setup(x){const o=u(0),{newResource:y,createResource:f}=F(),e=u({id:"",title:"",subtitle:"",content:"",external_content_url:"",publishing_state:"",maturing_state:"",image_url:"",resource_type:"",comment:"",is_local_draft:!0,is_external:!1}),v=a=>{c.value=a,a?(o.value=1,e.value.maturing_state="fnsh",e.is_external=!0):(r.value=b.value.id,e.value.maturing_state="idea",e.is_external=!1,o.value=1,i.value=new Date(Date.now()).toISOString().split("T")[0])},{user:b}=T(),r=u(null),i=u(null),c=u(!1),g=u(!1),P=a=>{console.log("apply preview : ",a),e.value.title=a.title,e.value.subtitle=a.subtitle,e.value.image_url=a.image_url,e.value.content=a.content,e.value.resource_type=a.resource_type,e.value.external_content_url=a.external_content_url,g.value=!0},C=u([{text:"Livre",value:"book"},{text:"Fiche de lecture",value:"shet"},{text:"Article de média",value:"natc"},{text:"Article de recherche",value:"ratc"},{text:"Film",value:"movi"},{text:"Podcast",value:"pcst"},{text:"Poême",value:"poem"}]),{createInteractionForResource:R,newInteraction:X}=K(),U=E(),$=async()=>{const a=await f(e.value),t={interaction_user_id:r.value,resource_id:a.id,interaction_progress:c?100:0,interaction_date:new Date(i.value),interaction_comment:"",interaction_is_public:!!c.value};await R(a.id,t),U.push({path:"/resources/"+a.id,query:{editing:"false"}})};return(a,t)=>(n(),m("div",G,[o.value===0?(n(),m("div",W,[V("div",null,[s(p,{class:"mb-2",text:"Resource Externe",type:"valid",onClick:t[0]||(t[0]=l=>v(!0))}),s(p,{text:"Production personnelle",type:"valid",onClick:t[1]||(t[1]=l=>v(!1))})])])):d("",!0),o.value===1?(n(),m("div",j,[s(B,{class:"mb-4",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l)},null,8,["modelValue"]),r.value?(n(),k(_,{key:0,class:"text-2xs mb-4",label:"Date d'écriture","model-value":i.value,"onUpdate:modelValue":t[3]||(t[3]=l=>i.value=l),type:"date"},null,8,["model-value"])):d("",!0),s(p,{type:"valid",text:"Valider",onClick:t[4]||(t[4]=l=>o.value=2)})])):d("",!0),o.value===2?(n(),m("div",z,[V("div",null,[c.value?(n(),k(O,{key:0,onChange:t[5]||(t[5]=l=>P(l))})):d("",!0),!c.value||g.value?(n(),m("div",H,[s(_,{class:"mb-4",modelValue:e.value.title,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value.title=l),label:"Titre"},null,8,["modelValue"]),s(_,{class:"mb-4",modelValue:e.value.subtitle,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value.subtitle=l),label:"Description"},null,8,["modelValue"]),s(_,{class:"mb-4",modelValue:e.value.image_url,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value.image_url=l),label:"Url de l'image"},null,8,["modelValue"]),V("img",{class:"mb-4",src:e.value.image_url},null,8,J),s(N,{label:"Type de ressource",class:"mb-4",choices:C.value,modelValue:e.value.resource_type,"onUpdate:modelValue":t[9]||(t[9]=l=>e.value.resource_type=l)},null,8,["choices","modelValue"]),s(p,{class:"mb-4",text:"Créer",onClick:$,type:"valid"})])):d("",!0)])])):d("",!0)]))}}),Q={class:"w-full"},se=w({__name:"CreateResourceView",setup(x){return(o,y)=>(n(),m("div",Q,[s(M)]))}});export{se as default};
