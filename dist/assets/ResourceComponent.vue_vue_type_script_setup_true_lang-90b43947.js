import{_ as ke,u as Le,a as ce}from"./useArticle-b3eb9368.js";import{b as a,c,e as r,d as I,t as w,F as me,l as pe,r as p,p as D,o as A,f as u,m as q,x as Oe,w as se,y as H,s as Pe,z as Ee,A as Ne,j as k,q as $e,g as R,h as S,i as Z,B as Me,C as qe,D as T,E as Ve,k as M,G as je,H as ze,v as He,u as Je,a as Ke}from"./index-397c4326.js";import{_ as K}from"./ActionButton.vue_vue_type_script_setup_true_lang-b00d2ce2.js";import{_ as de,a as xe,u as Re}from"./TextInterface.vue_vue_type_script_setup_true_lang-ce3630ac.js";import{_ as N}from"./TextInput.vue_vue_type_script_setup_true_lang-141fb80c.js";import{_ as Ce}from"./ProgressBar.vue_vue_type_script_setup_true_lang-7792d048.js";import{u as ve}from"./useResource-70254603.js";import{a as We,u as Ie}from"./useProblem-e75b8105.js";function Ge(s,e){return a(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"})])}function Qe(s,e){return a(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})])}function Xe(s,e){return a(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"})])}const Ye={class:"block text-2xs text-slate-800"},Ze=["value"],et=["value"],J=I({__name:"SelectInput",props:{label:{},choices:{},modelValue:{},displayFunction:{type:Function,default:s=>s.text}},emits:["update:modelValue"],setup(s,{emit:e}){const t=o=>{console.log(o.target.value),e("update:modelValue",o.target.value)};return(o,l)=>(a(),c("div",null,[r("label",Ye,w(o.label),1),r("select",{value:o.modelValue,name:"Stade d'écriture",class:"text-xs w-full p-1 block rounded border-2 border-neutral-400",onInput:l[0]||(l[0]=i=>t(i))},[(a(!0),c(me,null,pe(o.choices,i=>(a(),c("option",{key:i.value,value:i.value},w(o.displayFunction(i)),9,et))),128))],40,Ze)]))}}),tt={class:"m-4"},ot={class:"block text-2xs text-slate-800"},st=["value","placeholder"],ee=I({__name:"TextAreaInput",props:{label:{},modelValue:{},placeholder:{}},emits:["update:modelValue"],setup(s,{emit:e}){const t=o=>{e("update:modelValue",o.target.value)};return(o,l)=>(a(),c("div",tt,[r("label",ot,w(o.label),1),r("textarea",{class:"border border-neutral-800 block h-full w-full",value:o.modelValue,placeholder:o.placeholder,onInput:l[0]||(l[0]=i=>t(i))},null,40,st)]))}}),nt=r("hr",{class:"border-top border-zinc-400 my-4"},null,-1),at=r("div",{class:"text-xs italic"},"Raison de la lecture",-1),lt=I({__name:"SeeThoughtInput",props:{thoughtInput:{}},setup(s){const e=s,{getUserById:t,user:o}=q(),l=p(null),i=D(()=>o.value?e.thoughtInput.interaction_user_id===o.value.id:!1);return A(async()=>{e.thoughtInput.interaction_user_id&&(l.value=await t(e.thoughtInput.interaction_user_id))}),(f,d)=>(a(),c("div",null,[u(To,{id:f.thoughtInput.resource_id,"second-level":""},null,8,["id"]),nt,at,u(de,{"full-text":f.thoughtInput.interaction_comment,editable:i.value},null,8,["full-text","editable"])]))}}),rt={class:"flex"},oe=I({__name:"ModalSheet",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:e}){const t=s,o=p(!1);return A(()=>{o.value=t.open}),Oe(()=>{const l=i=>{(i.key==="Escape"||i.key==="Enter"||i.key==="Esc"||i.keyCode===27)&&e("close")};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}}),se(H(t).open,l=>o.value=l),(l,i)=>o.value?(a(),c("div",{key:0,tabindex:"0",onKeyup:i[2]||(i[2]=Ne(f=>e("close"),["esc"])),class:"fixed top-0 left-0 w-full h-full z-10 bg-slate-500/50",onClick:i[3]||(i[3]=f=>e("close"))},[r("div",{class:"max-w-xl overflow-y-scroll max-h-screen mb-10 bg-white mx-auto mt-6 p-4 rounded shadow",onClick:i[1]||(i[1]=Ee(()=>{},["stop"]))},[r("div",rt,[r("div",{class:"ml-auto",onClick:i[0]||(i[0]=f=>e("close"))},"x")]),Pe(l.$slots,"default")])],32)):k("",!0)}}),ut={class:"w-full md:w-96"},it={key:0,class:"text-xs italic mb-2 bg-white"},ct={class:"flex flex-wrap"},dt={key:1,class:"text-2xs italic ml-2"},mt={key:2,class:"ml-auto m-1 w-1/3"},pt={key:0,class:"border shadow-lg rounded p-4 md:w-96 bg-white"},vt={class:"flex"},_t=["src"],ft={class:"flex flex-wrap w-full",style:{"margin-top":"-8px"}},gt={class:"text-2xs"},ht={class:"flex flex-wrap"},yt={key:0,class:"text-2xs italic"},bt=I({__name:"ThoughtInputCard",props:{contextualResource:{},isDisabled:{type:Boolean,default:!1}},setup(s){const e=s,{getUserById:t}=q(),{getAuthorInteractionForResource:o}=ve(),l=p(null),i=p(null),f=p(null);A(async()=>{e.contextualResource.user_id&&(f.value=await t(e.contextualResource.user_id)),e.contextualResource.resource&&(i.value=await o(e.contextualResource.resource.id)),i.value&&(l.value=await t(i.value.interaction_user_id))});const d=n=>n?n.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}):"",g=n=>n.length>200?n.slice(0,150)+"...":n;return(n,m)=>{const b=$e("router-link");return a(),c("div",ut,[n.contextualResource.context_comment?(a(),c("div",it,[r("div",null,w(n.contextualResource.context_comment),1),r("div",ct,[f.value?(a(),R(b,{key:0,to:"/users/"+f.value.id,class:"text-2xs underline"},{default:S(()=>[Z(w(f.value.first_name)+" "+w(f.value.last_name),1)]),_:1},8,["to"])):k("",!0),n.contextualResource.date?(a(),c("div",dt,w(d(n.contextualResource.date)),1)):k("",!0),n.contextualResource.progress?(a(),c("div",mt,[u(Ce,{"progress-value":n.contextualResource.progress},null,8,["progress-value"])])):k("",!0)])])):k("",!0),n.contextualResource.resource?(a(),R(Me(n.isDisabled?"span":"vue-router"),{key:1,to:"/resources/"+n.contextualResource.resource.id+"?tab=ctnt"},{default:S(()=>[n.contextualResource.resource?(a(),c("div",pt,[r("div",vt,[n.contextualResource.resource?(a(),c("img",{key:0,class:"w-8 h-fit mr-4",src:n.contextualResource.resource.image_url},null,8,_t)):k("",!0),r("div",null,[r("div",null,w(n.contextualResource.resource.title)+" "+w(n.contextualResource.resource.subtitle),1),r("div",ft,[l.value?(a(),R(b,{key:0,to:"/users/"+l.value.id,class:"text-2xs underline"},{default:S(()=>[Z(w(l.value.first_name)+" "+w(l.value.last_name),1)]),_:1},8,["to"])):k("",!0)]),r("div",gt,w(g(n.contextualResource.resource.comment)),1)])]),r("div",ht,[n.contextualResource.date?(a(),c("div",yt,w(d(n.contextualResource.resourcedate)),1)):k("",!0)])])):k("",!0)]),_:1},8,["to"])):k("",!0)])}}}),xt={class:"w-fit"},wt=I({__name:"ThoughtInputCardWithPopup",props:{thoughtInput:{},usageReason:{},isDisabled:{type:Boolean,default:!1}},setup(s){const e=p(!1);return(t,o)=>(a(),c("div",xt,[u(oe,{open:e.value,onClose:o[0]||(o[0]=l=>e.value=!1)},{default:S(()=>[u(lt,{"thought-input":t.thoughtInput,"usage-reason":t.usageReason},null,8,["thought-input","usage-reason"])]),_:1},8,["open"]),u(bt,{class:"md:w-96","contextual-resource":t.thoughtInput,"is-disabled":t.isDisabled},null,8,["contextual-resource","is-disabled"])]))}}),kt={class:"relative max-w-full"},$t={key:0,class:"absolute md:border h-full start-1/2 -z-10"},Y=I({__name:"ThoughtInputsList",props:{contextualResources:{},center:{type:Boolean,default:!1},linksDisabled:{type:Boolean,default:!1}},emits:["select"],setup(s,{emit:e}){const t=l=>l.sort((i,f)=>+(f.date>i.date)),o=l=>{console.log("Select"),e("select",l)};return(l,i)=>(a(),c("div",kt,[l.center?k("",!0):(a(),c("div",$t)),(a(!0),c(me,null,pe(t(l.contextualResources),(f,d)=>(a(),R(wt,{key:f.id,class:qe(["mb-4 md:mb-1 mx-auto max-w-full max-w-fit p-1",{"md:ml-0":d%2==0&&!l.center,"md:mr-0":!l.center}]),"thought-input":f,onClick:g=>o(f),"is-disabled":l.linksDisabled},null,8,["class","thought-input","onClick","is-disabled"]))),128))]))}}),{launchSnackbar:Vt}=Ve();function Rt(){const s={title:"",subtitle:"",content:"",external_content_url:"",publishing_state:"pbsh",maturing_state:"fnsh",image_url:"",resource_type:"",comment:""};return{interaction_progress:0,interaction_date:new Date(Date.now()),interaction_comment:"",interaction_is_public:!0,resource:s}}function ne(s){return console.log("Date : ",s.interaction_date),s.interaction_date=new Date(s.interaction_date),s}async function Ct(){return(await T.get("/thought_inputs?limit=60")).data.map(e=>ne(e))}async function It(s){const e=await T.get("/thought_inputs/"+s);return ne(e.data)}async function Ut(s){return(await T.get("/users/"+s+"/thought_inputs?limit=60")).data.map(t=>ne(t))}async function Dt(s){const e=new Date(s.interaction_date);console.log("Date : ",e);const t=e.toISOString().split(".")[0];s.interaction_progress=Number(s.interaction_progress);const o=await T.post("/thought_inputs",{...s,interaction_date:t});return Vt("Creation de l'input réussie","success"),ne(o.data)}function St(){return{getUserThoughtInputs:Ut,newThoughtInput:Rt,createThoughtInput:Dt,getThoughtInputs:Ct,getThoughtInput:It}}const At={key:0,class:"mb-4"},Tt={key:1},Bt={key:1},Ft={key:2},Lt={class:"flex flex-row-reverse"},we=I({__name:"CreateResourceRelationForm",props:{targetResource:{},originResource:{}},emits:["close","refresh"],setup(s,{emit:e}){const t=s,{user:o}=q(),l=p(),i=U=>{console.log("Event : ",U),l.value=U},f=p([{text:"Externes",value:"extr"},{text:"Internes",value:"artl"},{text:"Problème",value:"pblm"}]),d=p([{text:"Biblio",value:"bibl"},{text:"Résumé",value:"sumr"},{text:"Sujet principal",value:"main"},{text:"Evocation",value:"mino"}]),g=p([]),n=p(null),m=p([]),b=p([]),x=p([]),L=p(""),B=p(""),{createResourceRelation:W}=Ie(),{getResources:P}=ve(),{getArticles:y}=Le(),{getProblems:$}=We(),F=D(()=>g.value.map(U=>({resource:U.resource}))),G=U=>U.map(C=>({resource:C})),z=D(()=>({extr:G(m.value),artl:G(b.value),pblm:G(x.value)})),ae=async()=>{if(console.log("create"),!n.value)return;const U={target_resource_id:t.targetResource?t.targetResource.id:n.value.id,origin_resource_id:t.originResource?t.originResource.id:n.value.id,relation_comment:L.value,relation_type:B.value};await W(U),e("refresh"),e("close")},{getUserThoughtInputs:le}=St(),Q=U=>{n.value=U.resource};return A(async()=>{!o.value||!o.value.id||(t.targetResource&&(g.value=await le(o.value.id)),t.originResource&&(m.value=await P(),b.value=await y({author:!0}),x.value=await $()))}),(U,C)=>(a(),c("div",null,[M(o)?(a(),c("div",At," Nouvelle relation entre ressources par "+w(M(o).first_name)+" "+w(M(o).last_name),1)):k("",!0),n.value?(a(),c("div",Ft,[u(J,{class:"m-4",label:"Type de lien",choices:d.value,modelValue:B.value,"onUpdate:modelValue":C[2]||(C[2]=v=>B.value=v)},null,8,["choices","modelValue"]),u(ee,{class:"m-4",label:"Pourquoi ajouter cet élément ?",modelValue:L.value,"onUpdate:modelValue":C[3]||(C[3]=v=>L.value=v)},null,8,["modelValue"]),r("div",Lt,[u(K,{type:"valid",onClick:ae,text:"Ajouter"}),u(K,{type:"abort",onClick:C[4]||(C[4]=v=>e("close")),text:"Annuler",class:"mr-1"})])])):(a(),c("div",Tt,[U.targetResource?(a(),R(Y,{key:0,"contextual-resources":F.value,center:"","links-disabled":"",onSelect:C[0]||(C[0]=v=>Q(v))},null,8,["contextual-resources"])):(a(),c("div",Bt,[r("div",null,[Z(" Choisir une ressource cible "),u(ke,{center:"",choices:f.value,default:"pblm",onUpdate:i},null,8,["choices"]),u(Y,{"contextual-resources":z.value[l.value]||[],center:"",onSelect:C[1]||(C[1]=v=>Q(v)),"links-disabled":""},null,8,["contextual-resources"])])]))]))]))}}),Ot=I({__name:"CommentsThread",props:{resourceId:{}},setup(s){const e=s,{user:t}=q(),o=p([]),{createComment:l,getCommentsForThoughtOutput:i}=Re(),f=async()=>{console.log("Comment thread"),console.log("Props id : ",e.resourceId),o.value=await i(e.resourceId)},d=D(()=>o.value.filter(m=>!m.start_index).sort((m,b)=>m.created_at-b.created_at)),g=p(""),n=async()=>{await l(e.resourceId,null,g.value,!1),g.value="",await f()};return A(async()=>await f()),(m,b)=>(a(),c("div",null,[(a(!0),c(me,null,pe(d.value,x=>(a(),R(xe,{key:x.id,class:"w-full",modelValue:x.content,"onUpdate:modelValue":L=>x.content=L,editing:x.editing,onValidate:L=>x.editing=!1,author:x.author,"created-at":x.created_at},null,8,["modelValue","onUpdate:modelValue","editing","onValidate","author","created-at"]))),128)),u(xe,{class:"w-full",modelValue:g.value,"onUpdate:modelValue":b[0]||(b[0]=x=>g.value=x),editing:!0,onValidate:n,author:M(t),"created-at":null},null,8,["modelValue","author"])]))}}),{launchSnackbar:Ue}=Ve();function Pt(){return{interaction_progress:0,interaction_date:new Date(Date.now()),interaction_comment:"",interaction_is_public:!0}}function j(s){return console.log("Date : ",s.interaction_date),s.interaction_date=new Date(s.interaction_date),s}async function Et(){return(await T.get("/thought_inputs?limit=60")).data.map(e=>j(e))}async function Nt(s){const e=await T.get("/thought_inputs/"+s);return j(e.data)}async function Mt(s){return(await T.get("/users/"+s+"/thought_inputs")).data.map(t=>j(t))}async function qt(s,e){const t=new Date(e.interaction_date);console.log("Date : ",t);const o=t.toISOString().split(".")[0];e.interaction_progress=Number(e.interaction_progress);const l=await T.put("/interactions/"+s,{...e,interaction_date:o});return j(l.data)}async function jt(s){const e=new Date(s.interaction_date);console.log("Date : ",e);const t=e.toISOString().split(".")[0];s.interaction_progress=Number(s.interaction_progress);const o=await T.post("/thought_inputs",{...s,interaction_date:t});return Ue("Creation de l'input réussie","success"),j(o.data)}async function zt(s,e){const t=new Date(e.interaction_date);console.log("Date : ",t);const o=t.toISOString().split(".")[0];e.interaction_progress=Number(e.interaction_progress);const l=await T.post(`/resources/${s}/interactions`,{...e,interaction_date:o});return Ue("Creation de l'input réussie","success"),j(l.data)}async function Ht(s){return(await T.get(`/resources/${s}/interactions`)).data.map(t=>j(t))}function _e(){return{getUserInteractions:Mt,newInteraction:Pt,createInteraction:jt,getInteractions:Et,getInteraction:Nt,updateInteraction:qt,createInteractionForResource:zt,getInteractionsForResource:Ht}}const Jt={class:"flex flex-wrap"},Kt={class:"flex flex-row-reverse"},Wt=I({__name:"CreateInteraction",props:{resource:{}},emits:["close","refresh"],setup(s,{emit:e}){const t=s,o=p([{text:"Lecture / Visionage",value:"inpt"},{text:"Envie",value:"wish"}]),{newInteraction:l,createInteractionForResource:i}=_e(),{user:f}=q(),d=p(l());A(()=>{d.value.interaction_type||(d.value.interaction_type="inpt")});const g=()=>{d.value.resource_id=t.resource.id,d.value.interaction_user_id=f.value.id,i(t.resource.id,d.value),e("refresh"),n()},n=()=>e("close");return(m,b)=>(a(),c("div",null,[r("div",null,"Nouvelle interaction, avec la ressource : "+w(m.resource.title),1),r("div",Jt,[u(N,{label:"Avancement de l'ouvrage",class:"my-auto",modelValue:d.value.interaction_progress,"onUpdate:modelValue":b[0]||(b[0]=x=>d.value.interaction_progress=x),type:"number"},null,8,["modelValue"]),u(J,{label:"Type d'interaction",class:"m-4 w-full md:w-5/12 md:ml-auto",choices:o.value,modelValue:d.value.interaction_type,"onUpdate:modelValue":b[1]||(b[1]=x=>d.value.interaction_type=x)},null,8,["choices","modelValue"])]),u(N,{label:"Date de lecture",modelValue:d.value.interaction_date,"onUpdate:modelValue":b[2]||(b[2]=x=>d.value.interaction_date=x),type:"date"},null,8,["modelValue"]),u(ee,{label:"Pourquoi s'y être interessé ?",modelValue:d.value.interaction_comment,"onUpdate:modelValue":b[3]||(b[3]=x=>d.value.interaction_comment=x)},null,8,["modelValue"]),r("div",Kt,[u(K,{onClick:g,class:"m-4",text:"Valider",type:"valid"}),u(K,{onClick:n,class:"m-4",text:"Annuler",type:"abort"})])]))}}),Gt=I({__name:"DateField",props:{date:{}},setup(s){const e=s,t=D(()=>new Date(e.date).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"}));return(o,l)=>(a(),c("div",null,w(t.value),1))}}),Qt=I({__name:"CheckboxInput",props:{label:{},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:e}){const t=s,o="checkbox-"+Math.random().toString(36).substr(2,9),l=p(H(t).modelValue),i=()=>{l.value=!l.value,console.log(l.value),e("update:modelValue",!t.modelValue)};return(f,d)=>(a(),c("div",null,[je(r("input",{class:"m-2",type:"checkbox",id:o,"onUpdate:modelValue":d[0]||(d[0]=g=>l.value=g),onChange:i},null,544),[[ze,l.value]]),r("label",{for:o},w(f.label),1)]))}}),Xt={class:"m-4"},Yt={class:"block text-2xs text-slate-800"},Zt=["value","placeholder"],De=I({__name:"NumberInput",props:{label:{},modelValue:{},placeholder:{}},emits:["update:modelValue","input"],setup(s,{emit:e}){const t=o=>{e("update:modelValue",o.target.value),e("input",o.target.value)};return(o,l)=>(a(),c("div",Xt,[r("label",Yt,w(o.label),1),r("input",{class:"border border-neutral-400 block h-full w-full rounded-md border-2 p-1 pl-2 text-xs",type:"number",value:o.modelValue,placeholder:o.placeholder,onInput:l[0]||(l[0]=i=>t(i))},null,40,Zt)]))}}),eo={class:"flex"},to={class:"ml-auto h-6 m-4 w-1/3"},oo={class:"ml-auto h-6 m-4 w-1/3"},so={class:"ml-auto h-6 m-4 w-1/3"},no={class:"my-auto ml-auto h-6 m-4 w-1/3"},ao={class:"flex"},lo=I({__name:"ArticleForm",props:{article:{}},emits:["change"],setup(s,{emit:e}){const t=s,o=p([{text:"Terminé",value:"fnsh"},{text:"Relecture",value:"rvew"},{text:"Idée",value:"idea"}]),l=p([{text:"Livre",value:"book"},{text:"Fiche de lecture",value:"shet"},{text:"Article de média",value:"natc"},{text:"Article de recherche",value:"ratc"},{text:"Film",value:"movi"},{text:"Podcast",value:"pcst"}]),{categories:i}=He(),f=D(()=>i.value.map(g=>({text:g.display_name,value:g.id}))),d=(g,n)=>{let m={...t.article};m[g]=n,e("change",m)};return(g,n)=>(a(),c("div",null,[u(N,{label:"Titre",modelValue:g.article.title,"onUpdate:modelValue":n[0]||(n[0]=m=>d("title",m))},null,8,["modelValue"]),u(N,{class:"h-6",label:"Sous-titre",modelValue:g.article.subtitle,"onUpdate:modelValue":n[1]||(n[1]=m=>d("subtitle",m))},null,8,["modelValue"]),r("div",eo,[u(De,{class:"mr-auto h-6",label:"Progression",modelValue:g.article.interaction_progress,"onUpdate:modelValue":n[2]||(n[2]=m=>d("progress",m))},null,8,["modelValue"]),r("div",to,[u(J,{label:"Catégorie",choices:f.value,"model-value":g.article.category_id,"onUpdate:modelValue":n[3]||(n[3]=m=>d("category_id",m))},null,8,["choices","model-value"])]),r("div",oo,[u(J,{label:"Stade d'écriture",choices:o.value,"model-value":g.article.maturing_state,"onUpdate:modelValue":n[4]||(n[4]=m=>d("maturing_state",m))},null,8,["choices","model-value"])]),r("div",so,[u(J,{label:"Type de ressource",choices:l.value,"onUpdate:modelValue":n[5]||(n[5]=m=>d("resource_type",m)),"model-value":g.article.resource_type},null,8,["choices","model-value"])]),r("div",no,[u(Qt,{class:"mt-3",label:"Externe","onUpdate:modelValue":n[6]||(n[6]=m=>d("is_external",m)),"model-value":g.article.is_external},null,8,["model-value"])])]),r("div",ao,[u(N,{class:"h-6",label:"Lien contenu externe",modelValue:g.article.external_content_url,"onUpdate:modelValue":n[7]||(n[7]=m=>d("external_content_url",m))},null,8,["modelValue"]),u(N,{class:"h-6",label:"Lien image",modelValue:g.article.image_url,"onUpdate:modelValue":n[8]||(n[8]=m=>d("image_url",m))},null,8,["modelValue"])]),u(ee,{label:"Pistes d'amélioration",modelValue:g.article.comment,"onUpdate:modelValue":n[9]||(n[9]=m=>d("comment",m))},null,8,["modelValue"])]))}}),ro={class:"flex flex-wrap"},uo=I({__name:"ResourceAuthorPicker",props:{interaction:{},resourceId:{}},emits:["update"],setup(s,{emit:e}){const t=s,o=p(null),l=p([]),i=y=>{if(y)return{text:`${y.first_name} ${y.last_name}`,value:y.id}},f=D(()=>{var y;return(y=o.value)==null?void 0:y.id}),d=D(()=>{if(l.value)return l.value.map(y=>i(y))}),{getUsers:g,getUserById:n}=q(),m=async y=>o.value=await n(y.interaction_user_id),{createInteractionForResource:b,newInteraction:x,createInteraction:L,updateInteraction:B}=_e(),W=async y=>{if(console.log(`newUser : ${JSON.stringify(y)}`),t.interaction){const $={...t.interaction};$.interaction_user_id=y,console.log("newUserid : ",y.id),console.log(`Interaction payload : ${JSON.stringify($)}`),await B(t.interaction.id,$),e("update")}else{console.log("create interaction");const $=x();$.interaction_user_id=y,$.resource_id=t.resourceId,await b(t.resourceId,$),e("update")}},P=async y=>{await B(t.interaction.id,y),e("update")};return A(async()=>{l.value=await g(),await m(t.interaction)}),se(H(t).interaction,async y=>await m(y)),(y,$)=>(a(),c("div",null,[r("div",ro,[u(J,{label:"Auteur",class:"my-auto",choices:d.value,"model-value":f.value,"onUpdate:modelValue":$[0]||($[0]=F=>W(F))},null,8,["choices","model-value"]),y.interaction?(a(),R(N,{key:0,class:"my-auto",label:"Date d'écriture","model-value":y.interaction.interaction_date.split("T")[0],"onUpdate:modelValue":$[1]||($[1]=F=>P({...y.interaction,interaction_date:F})),type:"date"},null,8,["model-value"])):k("",!0),y.interaction?(a(),R(De,{key:1,class:"my-auto",label:"Progression",modelValue:y.interaction.interaction_progress,"onUpdate:modelValue":$[2]||($[2]=F=>P({...y.interaction,interaction_progress:F}))},null,8,["modelValue"])):k("",!0)])]))}}),io={class:"mx-auto"},co={key:0,class:"text-center text-2xl pt-10"},mo={key:1},po={key:0},vo={class:"my-8"},_o=["src"],fo={class:"text-3xl my-3 font-mplus md:text-center text-left"},go={class:"md:text-center text-left"},ho={class:"md:text-center text-left"},yo={class:"md:flex my-8"},bo=["href"],xo={key:1},wo={class:"flex flex-row-reverse"},ko={key:1,class:"p-2 border rounded bg-neutral-100"},$o=r("hr",{class:"border-top border-zinc-400 my-4"},null,-1),Vo={key:2},Ro=r("div",{class:"text-xs italic"},"Commentaire",-1),Co=r("hr",{class:"border-top border-zinc-400 my-4"},null,-1),Io=r("div",{class:"text-xs italic"},"Contenu",-1),Uo={key:3},Do={key:4},So={key:5},Ao={class:"fixed right-3 bottom-5"},To=I({__name:"ResourceComponent",props:{id:{},secondLevel:{type:Boolean}},setup(s){const e=s,t=Je(),o=D(()=>e.secondLevel?"popup_tab":"tab"),l=D(()=>[{text:"Contenu",value:"ctnt"},{text:"Biblio",value:"bbli",count:n.value.length},{text:"Sujets",value:"pblm",count:$.value.length},{text:"Interactions",value:"inpt",count:B.value.length}]),i=p(t.query[o.value]&&typeof t.query[o.value]=="string"?t.query[o.value]:"ctnt"),f=p(t.query[o.value]);se(()=>t.query[o.value],_=>{console.log("new route query",_),typeof _=="string"&&(f.value=_)});const{getResourceRelationsForResource:d,getUsagesForResource:g}=Ie(),n=p([]),m=p(!1),b=p(!1),x=async()=>{n.value=await d(H(e).id.value)},L=D(()=>n.value.map(_=>({resource:_.origin_resource,date:_.created_at,user_id:_.user_id,context_comment:_.relation_comment,progress:null})));A(()=>x());const B=p([]),{getInteractionsForResource:W}=_e(),P=async()=>{B.value=await W(e.id)};A(async()=>await P());const y=D(()=>B.value.map(_=>({resource:null,date:_.interaction_date,user_id:_.interaction_user_id,context_comment:_.interaction_comment,progress:_.interaction_progress}))),$=p([]);A(async()=>await F());const F=async()=>{$.value=await g(e.id)},G=D(()=>$.value.map(_=>({resource:_.target_resource,date:_.created_at,user_id:_.user_id,context_comment:_.relation_comment,progress:null}))),z=p(!1),{newResource:ae,getResource:le,updateResource:Q,getAuthorInteractionForResource:U}=ve(),C=p(null),v=p(ae()),Se=Ke();se(()=>t.query.editing,_=>{console.log("Editing : ",_),re.value=_==="false"?!1:!!_});const re=p(!1),fe=_=>{Se.push({query:{editing:_.toString()}})},Ae=()=>{!v.value||!v.value.id||(v.value.publishing_state="pbsh",Q(v.value.id,v.value))},ue=(_,h)=>{v.value=h,C.value!==null&&clearTimeout(C.value),C.value=setTimeout(async()=>{try{await Q(_,v.value)}catch(ie){console.log("An error : ",ie)}},1e3)},ge=_=>{_!=`
`&&ue(H(e).id.value,{...v.value,content:_})},he=_=>{_!=`
`&&ue(H(e).id.value,{...v.value,comment:_})},{user:ye,getUserById:Te}=q(),X=D(()=>v.value.is_external?!0:ye.value?E.value?E.value.id==ye.value.id:!0:!1),E=p(null),O=p(null),te=p(!1),Be=async()=>{O.value=await U(e.id)},{getCommentsForThoughtOutput:Fe}=Re(),be=p([]);return A(async()=>{z.value=!1,v.value=await le(e.id),z.value=!0,be.value=await Fe(e.id),O.value=await U(e.id),O.value&&(E.value=await Te(O.value.interaction_user_id));const _=t.query.editing;re.value=_==="false"?!1:!!_}),(_,h)=>{const ie=$e("router-link");return a(),c("div",io,[z.value?(a(),c("div",mo,[re.value?(a(),c("div",xo,[u(lo,{article:v.value,onChange:h[0]||(h[0]=V=>ue(v.value.id,V))},null,8,["article"]),u(uo,{class:"mx-4",interaction:O.value,"resource-id":_.id,onChange:Be},null,8,["interaction","resource-id"]),r("div",wo,[u(K,{class:"mx-4",onClick:h[1]||(h[1]=V=>fe(!1)),type:"valid",text:"Preview"},{default:S(()=>[Z("Ok")]),_:1}),v.value.publishing_state=="drft"?(a(),R(K,{key:0,onClick:Ae,type:"valid",text:"Publier"})):(a(),c("div",ko,"Publié"))])])):(a(),c("div",po,[r("div",vo,[r("img",{src:v.value.image_url,class:"border border-slate-300 dark:border-zinc-700 rounded-xl ml-auto mr-auto",style:{"max-height":"20rem"}},null,8,_o)]),r("h1",fo,w(v.value.title),1),r("div",go,w(v.value.subtitle),1),r("div",ho,[E.value?(a(),R(ie,{key:0,to:"/users/"+E.value.id,class:"text-sm underline"},{default:S(()=>[Z(w(E.value.first_name)+" "+w(E.value.last_name),1)]),_:1},8,["to"])):k("",!0),O.value?(a(),R(Gt,{key:1,date:O.value.interaction_date},null,8,["date"])):k("",!0)]),r("div",yo,[O.value?(a(),R(Ce,{key:0,"progress-value":O.value.interaction_progress,class:"m-2 w-1/3"},null,8,["progress-value"])):k("",!0),v.value.external_content_url?(a(),c("a",{key:1,class:"ml-auto underline",href:v.value.external_content_url,target:"_blank"}," Lien ressource externe ",8,bo)):k("",!0)])])),r("div",null,[u(ke,{choices:l.value,default:i.value,"url-key":o.value,url:""},null,8,["choices","default","url-key"])]),$o,f.value=="ctnt"?(a(),c("div",Vo,[Ro,v.value.publishing_state!="drft"?(a(),R(de,{key:0,"full-text":v.value.comment,editable:X.value,onChange:h[2]||(h[2]=V=>he(V))},null,8,["full-text","editable"])):(a(),R(ee,{key:1,class:"h-20",label:"Commentaire",modelValue:v.value.comment,"onUpdate:modelValue":h[3]||(h[3]=V=>he(V))},null,8,["modelValue"])),Co,Io,z.value&&v.value.publishing_state!="drft"?(a(),R(de,{key:2,class:"min-h-fit","ext-comments":be.value,"resource-id":v.value.id,"full-text":v.value.content,editable:X.value,onChange:h[4]||(h[4]=V=>ge(V))},null,8,["ext-comments","resource-id","full-text","editable"])):(a(),R(ee,{key:3,class:"h-96",label:"Contenu",modelValue:v.value.content,"onUpdate:modelValue":h[5]||(h[5]=V=>ge(V))},null,8,["modelValue"])),u(Ot,{"resource-id":_.id},null,8,["resource-id"])])):f.value=="bbli"?(a(),c("div",Uo,[u(oe,{open:m.value,onClose:h[7]||(h[7]=V=>m.value=!1)},{default:S(()=>[u(we,{onRefresh:x,onClose:h[6]||(h[6]=V=>m.value=!1),"target-resource":v.value},null,8,["target-resource"])]),_:1},8,["open"]),r("div",{onClick:h[8]||(h[8]=V=>m.value=!0),class:"text-sm italic underline"}," Ajouter une référence "),u(Y,{"contextual-resources":L.value},null,8,["contextual-resources"])])):f.value=="pblm"?(a(),c("div",Do,[u(Y,{"contextual-resources":G.value},null,8,["contextual-resources"])])):f.value=="inpt"?(a(),c("div",So,[u(Y,{"contextual-resources":y.value},null,8,["contextual-resources"])])):k("",!0),r("div",Ao,[X.value?(a(),R(ce,{key:0,title:"Modifier",onClick:h[9]||(h[9]=V=>fe(!0))},{default:S(()=>[u(M(Qe),{class:"m-1"})]),_:1})):k("",!0),X.value?(a(),R(ce,{key:1,class:"mt-2",color:"red",title:"Marquer comme lu",onClick:h[10]||(h[10]=V=>te.value=!0)},{default:S(()=>[u(M(Ge),{class:"m-1"})]),_:1})):k("",!0),u(oe,{open:te.value,onClose:h[12]||(h[12]=V=>te.value=!1)},{default:S(()=>[u(Wt,{onRefresh:P,onClose:h[11]||(h[11]=V=>te.value=!1),resource:v.value},null,8,["resource"])]),_:1},8,["open"]),X.value?(a(),R(ce,{key:2,class:"mt-2",color:"green",title:"Relier à d'autres ressources",onClick:h[13]||(h[13]=V=>b.value=!0)},{default:S(()=>[u(M(Xe),{class:"m-1"})]),_:1})):k("",!0),u(oe,{open:b.value,onClose:h[15]||(h[15]=V=>b.value=!1)},{default:S(()=>[u(we,{onRefresh:F,onClose:h[14]||(h[14]=V=>b.value=!1),"origin-resource":v.value},null,8,["origin-resource"])]),_:1},8,["open"])])])):(a(),c("div",co,"Loading..."))])}}});export{To as _,lt as a,oe as b,Y as c,ee as d,J as e,Qe as r,St as u};
