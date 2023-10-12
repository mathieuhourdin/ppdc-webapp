import{o as u,c as h,h as n,d as x,t as b,r as _,v as S,f as R,j as c,e as E,A as pe,y as M,B as H,k as me,C as he,D as ve,a as y,q as Z,w as V,g as D,E as ee,m as k,F as te,i as se,G as _e,n as q,u as B,l as L,x as oe,H as ge,s as fe,z as be,I as ye}from"./index-d56b4993.js";import{_ as K,u as xe}from"./TextInterface.vue_vue_type_script_setup_true_lang-aa32bbc1.js";import{_ as C}from"./TextInput.vue_vue_type_script_setup_true_lang-3a292905.js";import{u as ke}from"./useResource-2cb7bd48.js";import{u as le}from"./useThoughtInputUsages-dccf1396.js";function we(r,s){return u(),h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})])}const $e={class:"m-4"},Ie={class:"block text-2xs text-slate-800"},Ve=["value","placeholder"],G=x({__name:"TextAreaInput",props:{label:{},modelValue:{},placeholder:{}},emits:["update:modelValue"],setup(r,{emit:s}){const a=t=>{s("update:modelValue",t.target.value)};return(t,d)=>(u(),h("div",$e,[n("label",Ie,b(t.label),1),n("textarea",{class:"border border-neutral-800 block h-full w-full",value:t.modelValue,placeholder:t.placeholder,onInput:d[0]||(d[0]=l=>a(l))},null,40,Ve)]))}}),Ce=n("hr",{class:"border-top border-zinc-400 my-4"},null,-1),Ue=n("div",{class:"text-xs italic"},"Raison de la lecture",-1),Re=x({__name:"SeeThoughtInput",props:{thoughtInput:{}},setup(r){const s=r,{getUserById:a,user:t}=E(),d=_(null),l=S(()=>t.value?s.thoughtInput.interaction_user_id===t.value.id:!1);return R(async()=>{s.thoughtInput.interaction_user_id&&(d.value=await a(s.thoughtInput.interaction_user_id))}),(e,i)=>(u(),h("div",null,[c(qt,{id:e.thoughtInput.resource_id,"second-level":""},null,8,["id"]),Ce,Ue,c(K,{"full-text":e.thoughtInput.interaction_comment,editable:l.value},null,8,["full-text","editable"])]))}}),Te={class:"flex"},ne=x({__name:"ModalSheet",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(r,{emit:s}){const a=r,t=_(!1);return R(()=>{t.value=a.open}),pe(()=>{const d=l=>{(l.key==="Escape"||l.key==="Enter"||l.key==="Esc"||l.keyCode===27)&&s("close")};return window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}}),M(H(a).open,d=>t.value=d),(d,l)=>t.value?(u(),h("div",{key:0,tabindex:"0",onKeyup:l[2]||(l[2]=ve(e=>s("close"),["esc"])),class:"fixed top-0 left-0 w-full h-full z-10 bg-slate-500/50",onClick:l[3]||(l[3]=e=>s("close"))},[n("div",{class:"max-w-xl overflow-y-scroll max-h-screen mb-10 bg-white mx-auto mt-6 p-4 rounded shadow",onClick:l[1]||(l[1]=he(()=>{},["stop"]))},[n("div",Te,[n("div",{class:"ml-auto",onClick:l[0]||(l[0]=e=>s("close"))},"x")]),me(d.$slots,"default")])],32)):y("",!0)}}),Ae={class:"w-full md:w-96"},Se={key:0,class:"text-xs italic mb-2"},Be={class:"border shadow-lg rounded p-4 md:w-96"},De={class:"flex"},Le=["src"],Ee={class:"flex flex-wrap w-full",style:{"margin-top":"-8px"}},qe=n("div",{class:"text-2xs italic"}," Nom de l'auteur ",-1),Oe={class:"ml-auto m-1 w-1/3"},Fe={class:"text-2xs"},Ne={class:"flex flex-wrap"},Pe={key:0,class:"text-2xs italic"},ze=x({__name:"ThoughtInputCard",props:{thoughtInput:{},usageReason:{}},setup(r){const s=r,{getUserById:a}=E(),t=_(null);R(async()=>{s.thoughtInput.interaction_user_id&&(t.value=await a(s.thoughtInput.interaction_user_id))});const d=e=>e.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}),l=e=>e.length>200?e.slice(0,150)+"...":e;return(e,i)=>{const o=Z("router-link");return u(),h("div",Ae,[e.usageReason?(u(),h("div",Se,b(e.usageReason),1)):y("",!0),n("div",Be,[n("div",De,[e.thoughtInput.resource?(u(),h("img",{key:0,class:"w-8 h-fit mr-4",src:e.thoughtInput.resource.image_url},null,8,Le)):y("",!0),n("div",null,[n("div",null,[c(o,{to:"/thought_inputs/"+e.thoughtInput.id},{default:V(()=>[D(b(e.thoughtInput.resource.title),1)]),_:1},8,["to"])]),n("div",Ee,[qe,n("div",Oe,[c(ee,{"progress-value":e.thoughtInput.interaction_progress},null,8,["progress-value"])])]),n("div",Fe,b(l(e.thoughtInput.interaction_comment)),1)])]),n("div",Ne,[e.thoughtInput.interaction_date?(u(),h("div",Pe,b(d(e.thoughtInput.interaction_date)),1)):y("",!0),t.value?(u(),k(o,{key:1,to:"/users/"+t.value.id,class:"ml-auto text-2xs underline"},{default:V(()=>[D(b(t.value.first_name)+" "+b(t.value.last_name),1)]),_:1},8,["to"])):y("",!0)])])])}}}),je={class:"w-fit"},Me=x({__name:"ThoughtInputCardWithPopup",props:{thoughtInput:{},usageReason:{}},setup(r){const s=_(!1);return(a,t)=>(u(),h("div",je,[c(ne,{open:s.value,onClose:t[0]||(t[0]=d=>s.value=!1)},{default:V(()=>[c(Re,{"thought-input":a.thoughtInput,"usage-reason":a.usageReason},null,8,["thought-input","usage-reason"])]),_:1},8,["open"]),c(ze,{class:"md:w-96","thought-input":a.thoughtInput,"usage-reason":a.usageReason,onClick:t[1]||(t[1]=d=>s.value=!0)},null,8,["thought-input","usage-reason"])]))}}),He={class:"relative max-w-full"},Ke={key:0,class:"absolute md:border h-full start-1/2"},ae=x({__name:"ThoughtInputsList",props:{thoughtInputs:{},usageReasons:{},center:{type:Boolean,default:!1}},emits:["select"],setup(r,{emit:s}){const a=r,t=e=>{if(a.usageReasons&&a.usageReasons.length===a.thoughtInputs.length)return a.usageReasons[e]},d=e=>e.sort((i,o)=>+(o.interaction_date>i.interaction_date)),l=e=>{console.log("Select"),s("select",e)};return(e,i)=>(u(),h("div",He,[e.center?y("",!0):(u(),h("div",Ke)),(u(!0),h(te,null,se(d(e.thoughtInputs),(o,p)=>(u(),k(Me,{key:o.id,class:_e(["mb-4 md:mb-1 mx-auto max-w-full max-w-fit p-1",{"md:ml-0":p%2==0&&!e.center,"md:mr-0":!e.center}]),"thought-input":o,"usage-reason":t(p),onClick:T=>l(o)},null,8,["class","thought-input","usage-reason","onClick"]))),128))]))}});function We(){const r={title:"",subtitle:"",content:"",external_content_url:"",publishing_state:"pbsh",maturing_state:"fnsh",image_url:"",resource_type:"",comment:""};return{interaction_progress:0,interaction_date:new Date(Date.now()),interaction_comment:"",interaction_is_public:!0,resource:r}}function O(r){return console.log("Date : ",r.interaction_date),r.interaction_date=new Date(r.interaction_date),r}async function Ge(){return(await q.get("/thought_inputs")).data.map(s=>O(s))}async function Je(r){const s=await q.get("/thought_inputs/"+r);return O(s.data)}async function Qe(r){return(await q.get("/users/"+r+"/thought_inputs")).data.map(a=>O(a))}async function Xe(r){const s=new Date(r.interaction_date);console.log("Date : ",s);const a=s.toISOString().split(".")[0];r.interaction_progress=Number(r.interaction_progress);const t=await q.post("/thought_inputs",{...r,interaction_date:a});return O(t.data)}function Ye(){return{getUserThoughtInputs:Qe,newThoughtInput:We,createThoughtInput:Xe,getThoughtInputs:Ge,getThoughtInput:Je}}const Ze={key:0},et={key:2},tt={class:"flex flex-row-reverse"},st=x({__name:"CreateThoughtInputUsageForm",props:{thoughtOutput:{}},emits:["close","refresh"],setup(r,{emit:s}){const a=r,{user:t}=E(),d=_([]),l=_(null),e=_(""),{createThoughtInputUsage:i}=le(),o=async()=>{if(console.log("create"),!l.value)return;const U={thought_output_id:a.thoughtOutput.id,thought_input_id:l.value.id,usage_reason:e.value};await i(U),s("refresh"),s("close")},{getUserThoughtInputs:p}=Ye(),T=U=>{l.value=U};return R(async()=>{!t.value||!t.value.id||(d.value=await p(t.value.id))}),(U,w)=>(u(),h("div",null,[B(t)?(u(),h("div",Ze,"Nouvelle utilisation par "+b(B(t).first_name)+" "+b(B(t).last_name),1)):y("",!0),l.value?(u(),h("div",et,[c(G,{label:"Pourquoi ajouter cet élément ?",modelValue:e.value,"onUpdate:modelValue":w[1]||(w[1]=$=>e.value=$)},null,8,["modelValue"]),n("div",tt,[c(L,{type:"valid",onClick:o,text:"Ajouter"}),c(L,{type:"abort",onClick:w[2]||(w[2]=$=>s("close")),text:"Ajouter"})])])):(u(),k(ae,{key:1,"thought-inputs":d.value,center:"",onSelect:w[0]||(w[0]=$=>T($))},null,8,["thought-inputs"]))]))}}),ot={class:"block text-2xs text-slate-800"},lt=["value"],nt=["value"],W=x({__name:"SelectInput",props:{label:{},choices:{},modelValue:{}},emits:["update:modelValue"],setup(r,{emit:s}){const a=t=>{s("update:modelValue",t.target.value)};return(t,d)=>(u(),h("div",null,[n("label",ot,b(t.label),1),n("select",{value:t.modelValue,name:"Stade d'écriture",class:"text-xs w-full p-1 block rounded border-2 border-neutral-400",onInput:d[0]||(d[0]=l=>a(l))},[(u(!0),h(te,null,se(t.choices,l=>(u(),h("option",{key:l.value,value:l.value},b(l.text),9,nt))),128))],40,lt)]))}}),at={class:"m-4"},ut={class:"block text-2xs text-slate-800"},rt=["value","placeholder"],it=x({__name:"NumberInput",props:{label:{},modelValue:{},placeholder:{}},emits:["update:modelValue","input"],setup(r,{emit:s}){const a=t=>{s("update:modelValue",t.target.value),s("input",t.target.value)};return(t,d)=>(u(),h("div",at,[n("label",ut,b(t.label),1),n("input",{class:"border border-neutral-400 block h-full w-full rounded-md border-2 p-1 pl-2 text-xs",type:"number",value:t.modelValue,placeholder:t.placeholder,onInput:d[0]||(d[0]=l=>a(l))},null,40,rt)]))}}),dt={class:"flex"},ct={class:"ml-auto h-6 m-4 w-1/3"},pt={class:"ml-auto h-6 m-4 w-1/3"},mt={class:"flex"},ht=x({__name:"ArticleForm",props:{article:{}},emits:["change"],setup(r,{emit:s}){const a=r,t=_([{text:"Terminé",value:"fnsh"},{text:"Relecture",value:"rvew"},{text:"Idée",value:"idea"}]),{categories:d}=oe(),l=S(()=>d.value.map(i=>({text:i.display_name,value:i.id}))),e=(i,o)=>{let p={...a.article};p[i]=o,s("change",p)};return(i,o)=>(u(),h("div",null,[c(C,{label:"Titre",modelValue:i.article.title,"onUpdate:modelValue":o[0]||(o[0]=p=>e("title",p))},null,8,["modelValue"]),c(C,{class:"h-6",label:"Sous-titre",modelValue:i.article.subtitle,"onUpdate:modelValue":o[1]||(o[1]=p=>e("subtitle",p))},null,8,["modelValue"]),n("div",dt,[c(it,{class:"mr-auto h-6",label:"Progression",modelValue:i.article.interaction_progress,"onUpdate:modelValue":o[2]||(o[2]=p=>e("progress",p))},null,8,["modelValue"]),n("div",ct,[c(W,{label:"Catégorie",choices:l.value,"model-value":i.article.category_id,"onUpdate:modelValue":o[3]||(o[3]=p=>e("category_id",p))},null,8,["choices","model-value"])]),n("div",pt,[c(W,{label:"Stade d'écriture",choices:t.value,"model-value":i.article.maturing_state,"onUpdate:modelValue":o[4]||(o[4]=p=>e("maturing_state",p))},null,8,["choices","model-value"])])]),n("div",mt,[c(C,{class:"h-6",label:"Lien contenu externe",modelValue:i.article.external_content_url,"onUpdate:modelValue":o[5]||(o[5]=p=>e("external_content_url",p))},null,8,["modelValue"]),c(C,{class:"h-6",label:"Lien image",modelValue:i.article.image_url,"onUpdate:modelValue":o[6]||(o[6]=p=>e("image_url",p))},null,8,["modelValue"])]),c(G,{label:"Pistes d'amélioration",modelValue:i.article.comment,"onUpdate:modelValue":o[7]||(o[7]=p=>e("comment",p))},null,8,["modelValue"])]))}}),vt={class:"flex"},_t={class:"ml-auto h-6 m-4 w-1/3"},gt={class:"flex"},ft=x({__name:"ProblemForm",props:{problem:{}},emits:["change"],setup(r,{emit:s}){const a=r,{categories:t}=oe(),d=S(()=>t.value.map(e=>({text:e.display_name,value:e.id}))),l=(e,i)=>{let o={...a.problem};o[e]=i,s("change",o)};return(e,i)=>(u(),h("div",null,[c(C,{label:"Titre",modelValue:e.problem.title,"onUpdate:modelValue":i[0]||(i[0]=o=>l("title",o))},null,8,["modelValue"]),c(C,{class:"h-6",label:"Description",modelValue:e.problem.subtitle,"onUpdate:modelValue":i[1]||(i[1]=o=>l("subtitle",o))},null,8,["modelValue"]),n("div",vt,[n("div",_t,[c(W,{label:"Catégorie",choices:d.value,"model-value":e.problem.category_id,"onUpdate:modelValue":i[2]||(i[2]=o=>l("category_id",o))},null,8,["choices","model-value"])])]),n("div",gt,[c(C,{class:"h-6",label:"Lien image",modelValue:e.problem.image_url,"onUpdate:modelValue":i[3]||(i[3]=o=>l("image_url",o))},null,8,["modelValue"])])]))}}),bt={key:0,class:"mx-auto"},yt={key:0},xt={class:"my-8"},kt=["src"],wt={class:"text-3xl my-3 font-mplus md:text-center text-left"},$t={class:"md:text-center text-left"},It={class:"md:text-center text-left"},Vt={class:"md:flex my-8"},Ct=["href"],Ut={key:1},Rt={class:"flex flex-row-reverse"},Tt={key:1,class:"p-2 border rounded bg-neutral-100"},At=n("hr",{class:"border-top border-zinc-400 my-4"},null,-1),St={key:2},Bt=n("div",{class:"text-xs italic"},"Commentaire",-1),Dt=n("hr",{class:"border-top border-zinc-400 my-4"},null,-1),Lt=n("div",{class:"text-xs italic"},"Contenu",-1),Et={key:3},qt=x({__name:"ResourceComponent",props:{id:{},secondLevel:{type:Boolean}},setup(r){const s=r,a=ge(),t=S(()=>s.secondLevel?"popup_tab":"tab"),d=_([{text:"Contenu",value:"ctnt"},{text:"Biblio",value:"bbli"}]),l=_(a.query[t.value]&&typeof a.query[t.value]=="string"?a.query[t.value]:"ctnt"),e=_(a.query[t.value]);M(()=>a.query[t.value],g=>{console.log("new route query",g),typeof g=="string"&&(e.value=g)});const{getThoughtInputUsagesForResource:i}=le(),o=_([]),p=_(!1),T=async()=>{o.value=await i(H(s).id.value)};R(()=>T());const{newResource:U,getResource:w,updateResource:$,getAuthorInteractionForResource:ue}=ke(),F=_(null),m=_(U()),re=fe();M(()=>a.query.editing,g=>{console.log("Editing : ",g),N.value=g==="false"?!1:!!g});const N=_(!1),J=g=>{re.push({query:{editing:g.toString()}})},ie=()=>{!m.value||!m.value.id||(m.value.publishing_state="pbsh",$(m.value.id,m.value))},P=(g,v)=>{m.value=v,F.value!==null&&clearTimeout(F.value),F.value=setTimeout(async()=>{try{await $(g,m.value)}catch(j){console.log("An error : ",j)}},1e3)},Q=g=>{g!=`
`&&P(H(s).id.value,{...m.value,content:g})},{user:X,getUserById:de}=E(),z=S(()=>m.value.is_external?!0:!X.value||!I.value?!1:I.value.id==X.value.id),I=_(null),A=_(null),{getCommentsForThoughtOutput:ce}=xe(),Y=_([]);return R(async()=>{m.value=await w(s.id),Y.value=await ce(s.id),A.value=await ue(s.id),A.value&&(I.value=await de(A.value.interaction_user_id));const g=a.query.editing;N.value=g==="false"?!1:!!g}),(g,v)=>{const j=Z("router-link");return m.value?(u(),h("div",bt,[N.value?(u(),h("div",Ut,[m.value.resource_type=="atcl"?(u(),k(ht,{key:0,article:m.value,onChange:v[1]||(v[1]=f=>P(m.value.id,f))},null,8,["article"])):(u(),k(ft,{key:1,problem:m.value,onChange:v[2]||(v[2]=f=>P(m.value.id,f))},null,8,["problem"])),n("div",Rt,[c(L,{class:"mx-4",onClick:v[3]||(v[3]=f=>J(!1)),type:"valid",text:"Preview"},{default:V(()=>[D("Ok")]),_:1}),m.value.publishing_state=="drft"?(u(),k(L,{key:0,onClick:ie,type:"valid",text:"Publier"})):(u(),h("div",Tt,"Publié"))])])):(u(),h("div",yt,[n("div",xt,[n("img",{src:m.value.image_url,class:"border border-slate-300 dark:border-zinc-700 rounded-xl ml-auto mr-auto",style:{"max-height":"20rem"}},null,8,kt)]),n("h1",wt,b(m.value.title),1),n("div",$t,b(m.value.subtitle),1),n("div",It,[I.value?(u(),k(j,{key:0,to:"/users/"+I.value.id,class:"text-sm underline"},{default:V(()=>[D(b(I.value.first_name)+" "+b(I.value.last_name),1)]),_:1},8,["to"])):y("",!0)]),z.value?(u(),k(be,{key:0,onClick:v[0]||(v[0]=f=>J(!0))},{default:V(()=>[c(B(we),{class:"m-1"})]),_:1})):y("",!0),n("div",Vt,[A.value?(u(),k(ee,{key:0,"progress-value":A.value.interaction_progress,class:"m-2 w-1/3"},null,8,["progress-value"])):y("",!0),m.value.resource_type==="atcl"?(u(),h("a",{key:1,class:"ml-auto underline",href:m.value.external_content_url}," Ajouter un commentaire ",8,Ct)):y("",!0)])])),n("div",null,[c(ye,{choices:d.value,default:l.value,"url-key":t.value},null,8,["choices","default","url-key"])]),At,e.value=="ctnt"?(u(),h("div",St,[Bt,c(K,{"full-text":m.value.comment,editable:z.value},null,8,["full-text","editable"]),Dt,Lt,m.value.publishing_state!="drft"?(u(),k(K,{key:0,"ext-comments":Y.value,"resource-id":m.value.id,"full-text":m.value.content,editable:z.value,onChange:v[4]||(v[4]=f=>Q(f))},null,8,["ext-comments","resource-id","full-text","editable"])):(u(),k(G,{key:1,class:"h-96",label:"Contenu",modelValue:m.value.content,"onUpdate:modelValue":v[5]||(v[5]=f=>Q(f))},null,8,["modelValue"]))])):(u(),h("div",Et,[c(ne,{open:p.value,onClose:v[7]||(v[7]=f=>p.value=!1)},{default:V(()=>[c(st,{onRefresh:T,onClose:v[6]||(v[6]=f=>p.value=!1),"thought-output":m.value},null,8,["thought-output"])]),_:1},8,["open"]),n("div",{onClick:v[8]||(v[8]=f=>p.value=!0),class:"text-sm italic underline"}," Ajouter une référence "),c(ae,{"thought-inputs":o.value.map(f=>f.thought_input),"usage-reasons":o.value.map(f=>f.usage_reason)},null,8,["thought-inputs","usage-reasons"])]))])):y("",!0)}}});export{qt as _,Re as a,ne as b,ae as c,W as d,we as r,Ye as u};