import{_ as he,u as Te}from"./useArticle-6ea53d43.js";import{_ as ae}from"./RoundLinkButton.vue_vue_type_style_index_0_lang-a815d169.js";import{_ as O}from"./SelectInput.vue_vue_type_script_setup_true_lang-c7552319.js";import{_ as L}from"./ActionButton.vue_vue_type_script_setup_true_lang-62a8b727.js";import{_ as X,a as Y,u as Ae,r as De}from"./useThoughtInputs-72907a1a.js";import{_ as re,a as _e,u as xe}from"./TextInterface.vue_vue_type_script_setup_true_lang-e9ed6638.js";import{o as t,f as d,a as _,d as U,b as m,h as C,e as N,i as a,p as q,r as ye,t as w,c as R,w as I,l as H,m as b,A as Fe,F as be,g as ke,B as Be,n as S,C as Se,u as Pe,j as fe,k as Oe,D as ne}from"./index-7ec0c1d6.js";import{_ as B}from"./TextInput.vue_vue_type_script_setup_true_lang-1dce810a.js";import{u as ue}from"./useInteraction-ab6f7079.js";import{_ as Re}from"./ProgressBar.vue_vue_type_script_setup_true_lang-72a36278.js";import{_ as Le}from"./UserPicker.vue_vue_type_script_setup_true_lang-a1211998.js";import{u as ie}from"./useResource-23030c86.js";import{u as we}from"./useResourceRelations-459aa499.js";import{u as Ne}from"./useProblem-ab3dd7ca.js";function qe(x,o){return t(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"})])}function je(x,o){return t(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"})])}const ze=_("hr",{class:"border-top border-zinc-400 my-4"},null,-1),Ee=_("div",{class:"text-xs italic"},"Raison de la lecture",-1),Me=U({__name:"SeeThoughtInput",props:{thoughtInput:{}},setup(x){const o=x,{getUserById:s,user:n}=q(),v=m(null),y=C(()=>n.value?o.thoughtInput.interaction_user_id===n.value.id:!1);return N(async()=>{o.thoughtInput.interaction_user_id&&(v.value=await s(o.thoughtInput.interaction_user_id))}),(f,c)=>(t(),d("div",null,[a(Gt,{id:f.thoughtInput.resource_id,"second-level":""},null,8,["id"]),ze,Ee,a(re,{"full-text":f.thoughtInput.interaction_comment,editable:y.value},null,8,["full-text","editable"])]))}}),Je={class:"w-full md:w-96"},He={key:0,class:"text-xs italic mb-2 bg-white"},We={class:"flex flex-wrap"},Ge={key:1,class:"text-2xs italic ml-2"},Ke={key:2,class:"ml-auto m-1 w-1/3"},Qe={key:0,class:"border shadow-lg rounded p-4 md:w-96 bg-white"},Xe={class:"flex"},Ye=["src"],Ze={class:"flex flex-wrap w-full",style:{"margin-top":"-8px"}},et={class:"text-2xs"},tt={class:"flex flex-wrap"},lt={key:0,class:"text-2xs italic"},ot=U({__name:"ThoughtInputCard",props:{contextualResource:{},isDisabled:{type:Boolean,default:!1}},setup(x){const o=x,{getUserById:s}=q(),{getAuthorInteractionForResource:n}=ie(),v=m(null),y=m(null),f=m(null);N(async()=>{o.contextualResource.user_id&&(f.value=await s(o.contextualResource.user_id)),o.contextualResource.resource&&(y.value=await n(o.contextualResource.resource.id)),y.value&&(v.value=await s(y.value.interaction_user_id))});const c=e=>e?e.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}):"",g=e=>e.length>200?e.slice(0,150)+"...":e;return(e,l)=>{const r=ye("router-link");return t(),d("div",Je,[e.contextualResource.context_comment?(t(),d("div",He,[_("div",null,w(e.contextualResource.context_comment),1),_("div",We,[f.value?(t(),R(r,{key:0,to:"/users/"+f.value.id,class:"text-2xs underline"},{default:I(()=>[H(w(f.value.first_name)+" "+w(f.value.last_name),1)]),_:1},8,["to"])):b("",!0),e.contextualResource.date?(t(),d("div",Ge,w(c(e.contextualResource.date)),1)):b("",!0),e.contextualResource.progress?(t(),d("div",Ke,[a(Re,{"progress-value":e.contextualResource.progress},null,8,["progress-value"])])):b("",!0)])])):b("",!0),e.contextualResource.resource?(t(),R(Fe(e.isDisabled?"span":"vue-router"),{key:1,to:"/resources/"+e.contextualResource.resource.id+"?tab=ctnt"},{default:I(()=>[e.contextualResource.resource?(t(),d("div",Qe,[_("div",Xe,[e.contextualResource.resource?(t(),d("img",{key:0,class:"w-8 h-fit mr-4",src:e.contextualResource.resource.image_url},null,8,Ye)):b("",!0),_("div",null,[_("div",null,w(e.contextualResource.resource.title)+" "+w(e.contextualResource.resource.subtitle),1),_("div",Ze,[v.value?(t(),R(r,{key:0,to:"/users/"+v.value.id,class:"text-2xs underline"},{default:I(()=>[H(w(v.value.first_name)+" "+w(v.value.last_name),1)]),_:1},8,["to"])):b("",!0)]),_("div",et,w(g(e.contextualResource.resource.comment)),1)])]),_("div",tt,[e.contextualResource.date?(t(),d("div",lt,w(c(e.contextualResource.resourcedate)),1)):b("",!0)])])):b("",!0)]),_:1},8,["to"])):b("",!0)])}}}),st={class:"w-fit"},at=U({__name:"ThoughtInputCardWithPopup",props:{thoughtInput:{},usageReason:{},isDisabled:{type:Boolean,default:!1}},setup(x){const o=m(!1);return(s,n)=>(t(),d("div",st,[a(X,{open:o.value,onClose:n[0]||(n[0]=v=>o.value=!1)},{default:I(()=>[a(Me,{"thought-input":s.thoughtInput,"usage-reason":s.usageReason},null,8,["thought-input","usage-reason"])]),_:1},8,["open"]),a(ot,{class:"md:w-96","contextual-resource":s.thoughtInput,"is-disabled":s.isDisabled},null,8,["contextual-resource","is-disabled"])]))}}),nt={class:"relative max-w-full"},rt={key:0,class:"absolute md:border h-full start-1/2 -z-10"},J=U({__name:"ThoughtInputsList",props:{contextualResources:{},center:{type:Boolean,default:!1},linksDisabled:{type:Boolean,default:!1}},emits:["select"],setup(x,{emit:o}){const s=v=>v.sort((y,f)=>+(f.date>y.date)),n=v=>{console.log("Select"),o("select",v)};return(v,y)=>(t(),d("div",nt,[v.center?b("",!0):(t(),d("div",rt)),(t(!0),d(be,null,ke(s(v.contextualResources),(f,c)=>(t(),R(at,{key:f.id,class:Be(["mb-4 md:mb-1 mx-auto max-w-full max-w-fit p-1",{"md:ml-0":c%2==0&&!v.center,"md:mr-0":!v.center}]),"thought-input":f,onClick:g=>n(f),"is-disabled":v.linksDisabled},null,8,["class","thought-input","onClick","is-disabled"]))),128))]))}}),ut={key:0,class:"mb-4"},it={key:1},ct={key:1},dt={key:2},mt={class:"flex flex-row-reverse"},ge=U({__name:"CreateResourceRelationForm",props:{targetResource:{},originResource:{}},emits:["close","refresh"],setup(x,{emit:o}){const s=x,{user:n}=q(),v=m(),y=V=>{console.log("Event : ",V),v.value=V},f=m([{text:"Externes",value:"extr"},{text:"Internes",value:"artl"},{text:"Problème",value:"pblm"}]),c=m([{text:"Biblio",value:"bibl"},{text:"Résumé",value:"sumr"},{text:"Sujet principal",value:"main"},{text:"Evocation",value:"mino"}]),g=m([]),e=m(null),l=m([]),r=m([]),h=m([]),A=m(""),D=m(""),{createResourceRelation:Z}=we(),{getResources:W}=ie(),{getArticles:ee}=Te(),{getProblems:j}=Ne(),G=C(()=>g.value.map(V=>({resource:V.resource}))),z=V=>V.map($=>({resource:$})),P=C(()=>({extr:z(l.value),artl:z(r.value),pblm:z(h.value)})),te=async()=>{if(console.log("create"),!e.value)return;const V={target_resource_id:s.targetResource?s.targetResource.id:e.value.id,origin_resource_id:s.originResource?s.originResource.id:e.value.id,relation_comment:A.value,relation_type:D.value};await Z(V),o("refresh"),o("close")},{getUserThoughtInputs:le}=Ae(),E=V=>{e.value=V.resource};return N(async()=>{!n.value||!n.value.id||(s.targetResource&&(g.value=await le(n.value.id)),s.originResource&&(l.value=await W(),r.value=await ee({author:!0}),h.value=await j()))}),(V,$)=>(t(),d("div",null,[S(n)?(t(),d("div",ut," Nouvelle relation entre ressources par "+w(S(n).first_name)+" "+w(S(n).last_name),1)):b("",!0),e.value?(t(),d("div",dt,[a(O,{class:"m-4",label:"Type de lien",choices:c.value,modelValue:D.value,"onUpdate:modelValue":$[2]||($[2]=u=>D.value=u)},null,8,["choices","modelValue"]),a(Y,{class:"m-4",label:"Pourquoi ajouter cet élément ?",modelValue:A.value,"onUpdate:modelValue":$[3]||($[3]=u=>A.value=u)},null,8,["modelValue"]),_("div",mt,[a(L,{type:"valid",onClick:te,text:"Ajouter"}),a(L,{type:"abort",onClick:$[4]||($[4]=u=>o("close")),text:"Annuler",class:"mr-1"})])])):(t(),d("div",it,[V.targetResource?(t(),R(J,{key:0,"contextual-resources":G.value,center:"","links-disabled":"",onSelect:$[0]||($[0]=u=>E(u))},null,8,["contextual-resources"])):(t(),d("div",ct,[_("div",null,[H(" Choisir une ressource cible "),a(he,{center:"",choices:f.value,default:"pblm",onUpdate:y},null,8,["choices"]),a(J,{"contextual-resources":P.value[v.value]||[],center:"",onSelect:$[1]||($[1]=u=>E(u)),"links-disabled":""},null,8,["contextual-resources"])])]))]))]))}}),vt=U({__name:"CommentsThread",props:{resourceId:{}},setup(x){const o=x,{user:s}=q(),n=m([]),{createComment:v,getCommentsForThoughtOutput:y}=xe(),f=async()=>{console.log("Comment thread"),console.log("Props id : ",o.resourceId),n.value=await y(o.resourceId)},c=C(()=>n.value.filter(l=>!l.start_index).sort((l,r)=>l.created_at-r.created_at)),g=m(""),e=async()=>{await v(o.resourceId,null,g.value,!1),g.value="",await f()};return N(async()=>await f()),(l,r)=>(t(),d("div",null,[(t(!0),d(be,null,ke(c.value,h=>(t(),R(_e,{key:h.id,class:"w-full",modelValue:h.content,"onUpdate:modelValue":A=>h.content=A,editing:h.editing,onValidate:A=>h.editing=!1,author:h.author,"created-at":h.created_at},null,8,["modelValue","onUpdate:modelValue","editing","onValidate","author","created-at"]))),128)),a(_e,{class:"w-full",modelValue:g.value,"onUpdate:modelValue":r[0]||(r[0]=h=>g.value=h),editing:!0,onValidate:e,author:S(s),"created-at":null},null,8,["modelValue","author"])]))}}),pt={class:"flex flex-wrap"},_t={class:"flex flex-row-reverse"},ft=U({__name:"CreateInteraction",props:{resource:{}},emits:["close","refresh"],setup(x,{emit:o}){const s=x,n=m([{text:"Lecture / Visionage",value:"inpt"},{text:"Envie",value:"wish"}]),{newInteraction:v,createInteractionForResource:y}=ue(),{user:f}=q(),c=m(v());N(()=>{c.value.interaction_type||(c.value.interaction_type="inpt")});const g=()=>{c.value.resource_id=s.resource.id,c.value.interaction_user_id=f.value.id,y(s.resource.id,c.value),o("refresh"),e()},e=()=>o("close");return(l,r)=>(t(),d("div",null,[_("div",null,"Nouvelle interaction, avec la ressource : "+w(l.resource.title),1),_("div",pt,[a(B,{label:"Avancement de l'ouvrage",class:"my-auto",modelValue:c.value.interaction_progress,"onUpdate:modelValue":r[0]||(r[0]=h=>c.value.interaction_progress=h),type:"number"},null,8,["modelValue"]),a(O,{label:"Type d'interaction",class:"m-4 w-full md:w-5/12 md:ml-auto",choices:n.value,modelValue:c.value.interaction_type,"onUpdate:modelValue":r[1]||(r[1]=h=>c.value.interaction_type=h)},null,8,["choices","modelValue"])]),a(B,{label:"Date de lecture",modelValue:c.value.interaction_date,"onUpdate:modelValue":r[2]||(r[2]=h=>c.value.interaction_date=h),type:"date"},null,8,["modelValue"]),a(Y,{label:"Pourquoi s'y être interessé ?",modelValue:c.value.interaction_comment,"onUpdate:modelValue":r[3]||(r[3]=h=>c.value.interaction_comment=h)},null,8,["modelValue"]),_("div",_t,[a(L,{onClick:g,class:"m-4",text:"Valider",type:"valid"}),a(L,{onClick:e,class:"m-4",text:"Annuler",type:"abort"})])]))}}),gt=U({__name:"DateField",props:{date:{}},setup(x){const o=x,s=C(()=>new Date(o.date).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"}));return(n,v)=>(t(),d("div",null,w(s.value),1))}}),ht={class:"flex flex-col"},xt={class:"block text-2xs text-slate-800"},yt=["value","placeholder"],bt=U({__name:"NumberInput",props:{label:{},modelValue:{},placeholder:{}},emits:["update:modelValue","input"],setup(x,{emit:o}){const s=n=>{o("update:modelValue",n.target.value),o("input",n.target.value)};return(n,v)=>(t(),d("div",ht,[_("label",xt,w(n.label),1),_("input",{class:"border border-neutral-400 block h-full w-full rounded-md border-2 p-1 pl-2 text-xs",type:"number",value:n.modelValue,placeholder:n.placeholder,onInput:v[0]||(v[0]=y=>s(y))},null,40,yt)]))}}),kt={class:"grid grid-cols-4 gap-y-2 gap-x-4 auto-rows-auto"},Rt=U({__name:"ArticleForm",props:{article:{}},emits:["change"],setup(x,{emit:o}){const s=x,n=m([{text:"Terminé",value:"fnsh"},{text:"Relecture",value:"rvew"},{text:"Idée",value:"idea"}]),v=m([{text:"Livre",value:"book"},{text:"Fiche de lecture",value:"shet"},{text:"Article de média",value:"natc"},{text:"Article de recherche",value:"ratc"},{text:"Film",value:"movi"},{text:"Podcast",value:"pcst"}]),{categories:y}=Se(),f=C(()=>y.value.map(g=>({text:g.display_name,value:g.id}))),c=(g,e)=>{let l={...s.article};l[g]=e,l.is_external&&(l.maturing_state="fnsh"),console.log("Article : ",l),o("change",l)};return(g,e)=>(t(),d("div",kt,[a(B,{class:"col-span-4",label:"Titre",modelValue:g.article.title,"onUpdate:modelValue":e[0]||(e[0]=l=>c("title",l))},null,8,["modelValue"]),a(B,{class:"col-span-4",label:"Sous-titre",modelValue:g.article.subtitle,"onUpdate:modelValue":e[1]||(e[1]=l=>c("subtitle",l))},null,8,["modelValue"]),a(B,{class:"col-span-4 md:col-span-2",label:"Lien contenu externe",modelValue:g.article.external_content_url,"onUpdate:modelValue":e[2]||(e[2]=l=>c("external_content_url",l))},null,8,["modelValue"]),a(B,{class:"col-span-4 md:col-span-2",label:"Lien image",modelValue:g.article.image_url,"onUpdate:modelValue":e[3]||(e[3]=l=>c("image_url",l))},null,8,["modelValue"]),a(O,{label:"Catégorie",class:"col-span-4 md:col-span-1",choices:f.value,"model-value":g.article.category_id,"onUpdate:modelValue":e[4]||(e[4]=l=>c("category_id",l))},null,8,["choices","model-value"]),a(O,{label:"Type de ressource",class:"col-span-4 md:col-span-1",choices:v.value,"onUpdate:modelValue":e[5]||(e[5]=l=>c("resource_type",l)),"model-value":g.article.resource_type},null,8,["choices","model-value"]),a(O,{label:"Ressource externe",class:"col-span-4 md:col-span-1",choices:[{text:"Oui",value:!0},{text:"Non",value:!1}],"onUpdate:modelValue":e[6]||(e[6]=l=>c("is_external",JSON.parse(l))),"model-value":g.article.is_external},null,8,["model-value"]),a(O,{label:"Stade d'écriture",class:"col-span-4 md:col-span-1",choices:n.value,"model-value":g.article.maturing_state,"onUpdate:modelValue":e[7]||(e[7]=l=>c("maturing_state",l))},null,8,["choices","model-value"])]))}}),wt={class:"grid grid-cols-3 gap-4"},$t=U({__name:"ResourceAuthorPicker",props:{interaction:{},resourceId:{}},emits:["update"],setup(x,{emit:o}){const s=x,n=C(()=>{var l;return(l=s.interaction)==null?void 0:l.interaction_user_id}),{createInteractionForResource:v,newInteraction:y,createInteraction:f,updateInteraction:c}=ue(),g=async l=>{if(console.log(`newUser : ${JSON.stringify(l)}`),s.interaction){const r={...s.interaction};r.interaction_user_id=l,console.log("newUserid : ",l.id),console.log(`Interaction payload : ${JSON.stringify(r)}`),await c(s.interaction.id,r),o("update")}else{console.log("create interaction");const r=y();r.interaction_user_id=l,r.resource_id=s.resourceId,await v(s.resourceId,r),o("update")}},e=async l=>{await c(s.interaction.id,l),o("update")};return(l,r)=>(t(),d("div",wt,[a(Le,{"model-value":n.value,"onUpdate:modelValue":r[0]||(r[0]=h=>g(h))},null,8,["model-value"]),l.interaction?(t(),R(B,{key:0,class:"text-2xs",label:"Date d'écriture","model-value":l.interaction.interaction_date?l.interaction.interaction_date.split("T")[0]:null,"onUpdate:modelValue":r[1]||(r[1]=h=>e({...l.interaction,interaction_date:h})),type:"date"},null,8,["model-value"])):b("",!0),l.interaction?(t(),R(bt,{key:1,class:"",label:"Progression",modelValue:l.interaction.interaction_progress,"onUpdate:modelValue":r[2]||(r[2]=h=>e({...l.interaction,interaction_progress:h}))},null,8,["modelValue"])):b("",!0)]))}}),Vt={key:0,class:"text-center text-2xl pt-10"},Ct={key:1},It={key:0},Ut={class:"my-8"},Tt=["src"],At={class:"text-3xl my-3 font-mplus md:text-center text-left"},Dt={class:"md:text-center text-left"},Ft={class:"md:text-center text-left"},Bt={class:"md:flex my-8"},St=["href"],Pt={key:1,class:"my-2 flex flex-col"},Ot={class:"flex flex-row-reverse mb-4"},Lt={key:1,class:"p-2 border rounded bg-neutral-100"},Nt=_("hr",{class:"border-top border-zinc-400 my-4"},null,-1),qt={key:2},jt=_("div",{class:"text-xs italic"},"Commentaire",-1),zt=_("hr",{class:"border-top border-zinc-400 my-4"},null,-1),Et=_("div",{class:"text-xs italic"},"Contenu",-1),Mt={key:3},Jt={key:4},Ht={key:5},Wt={class:"fixed right-3 bottom-5"},Gt=U({__name:"ResourceComponent",props:{id:{},secondLevel:{type:Boolean}},setup(x){const o=x,s=Pe(),n=C(()=>o.secondLevel?"popup_tab":"tab"),v=C(()=>[{text:"Contenu",value:"ctnt"},{text:"Biblio",value:"bbli",count:e.value.length},{text:"Sujets",value:"pblm",count:j.value.length},{text:"Interactions",value:"inpt",count:D.value.length}]),y=m(s.query[n.value]&&typeof s.query[n.value]=="string"?s.query[n.value]:"ctnt"),f=m(s.query[n.value]);fe(()=>s.query[n.value],i=>{console.log("new route query",i),typeof i=="string"&&(f.value=i)});const{getResourceRelationsForResource:c,getUsagesForResource:g}=we(),e=m([]),l=m(!1),r=m(!1),h=async()=>{e.value=await c(ne(o).id.value)},A=C(()=>e.value.map(i=>({resource:i.origin_resource,date:i.created_at,user_id:i.user_id,context_comment:i.relation_comment,progress:null}))),D=m([]),{getInteractionsForResource:Z}=ue(),W=async()=>{D.value=await Z(o.id)},ee=C(()=>D.value.map(i=>({resource:null,date:i.interaction_date,user_id:i.interaction_user_id,context_comment:i.interaction_comment,progress:i.interaction_progress}))),j=m([]),G=async()=>{j.value=await g(o.id)},z=C(()=>j.value.map(i=>({resource:i.target_resource,date:i.created_at,user_id:i.user_id,context_comment:i.relation_comment,progress:null}))),P=m(!1),{newResource:te,getResource:le,updateResource:E,getAuthorInteractionForResource:V}=ie(),$=m(null),u=m(te()),$e=Oe();fe(()=>s.query.editing,i=>{console.log("Editing : ",i),K.value=i==="false"?!1:!!i});const K=m(!1),ce=i=>{$e.push({query:{editing:i.toString()}})},Ve=()=>{!u.value||!u.value.id||(u.value.publishing_state="pbsh",E(u.value.id,u.value))},oe=(i,p)=>{u.value=p,$.value!==null&&clearTimeout($.value),$.value=setTimeout(async()=>{try{await E(i,u.value)}catch(se){console.log("An error : ",se)}},1e3)},de=i=>{i!=`
`&&oe(ne(o).id.value,{...u.value,content:i})},me=i=>{i!=`
`&&oe(ne(o).id.value,{...u.value,comment:i})},{user:ve,getUserById:Ce}=q(),M=C(()=>u.value.is_external?!0:ve.value?F.value?F.value.id==ve.value.id:!0:!1),F=m(null),T=m(null),Q=m(!1),Ie=async()=>{T.value=await V(o.id)},{getCommentsForThoughtOutput:Ue}=xe(),pe=m([]);return N(async()=>{P.value=!1,u.value=await le(o.id),P.value=!0,await h(),await W(),await G(),pe.value=await Ue(o.id),T.value=await V(o.id),T.value&&(F.value=await Ce(T.value.interaction_user_id));const i=s.query.editing;K.value=i==="false"?!1:!!i}),(i,p)=>{const se=ye("router-link");return t(),d("div",null,[P.value?(t(),d("div",Ct,[K.value?(t(),d("div",Pt,[a(Rt,{article:u.value,class:"",onChange:p[0]||(p[0]=k=>oe(u.value.id,k))},null,8,["article"]),a($t,{class:"my-2",interaction:T.value,"resource-id":i.id,onChange:Ie},null,8,["interaction","resource-id"]),_("div",Ot,[a(L,{class:"ml-4",onClick:p[1]||(p[1]=k=>ce(!1)),type:"valid",text:"Preview"},{default:I(()=>[H("Ok")]),_:1}),u.value.publishing_state=="drft"?(t(),R(L,{key:0,onClick:Ve,type:"valid",text:"Publier"})):(t(),d("div",Lt,"Publié"))])])):(t(),d("div",It,[_("div",Ut,[_("img",{src:u.value.image_url,class:"border border-slate-300 dark:border-zinc-700 rounded-xl ml-auto mr-auto",style:{"max-height":"20rem"}},null,8,Tt)]),_("h1",At,w(u.value.title),1),_("div",Dt,w(u.value.subtitle),1),_("div",Ft,[F.value?(t(),R(se,{key:0,to:"/users/"+F.value.id,class:"text-sm underline"},{default:I(()=>[H(w(F.value.first_name)+" "+w(F.value.last_name),1)]),_:1},8,["to"])):b("",!0),T.value?(t(),R(gt,{key:1,date:T.value.interaction_date},null,8,["date"])):b("",!0)]),_("div",Bt,[T.value?(t(),R(Re,{key:0,"progress-value":T.value.interaction_progress,class:"m-2 w-1/3"},null,8,["progress-value"])):b("",!0),u.value.external_content_url?(t(),d("a",{key:1,class:"ml-auto underline",href:u.value.external_content_url,target:"_blank"}," Lien ressource externe ",8,St)):b("",!0)])])),_("div",null,[K.value?b("",!0):(t(),R(he,{key:0,choices:v.value,default:y.value,"url-key":n.value,url:""},null,8,["choices","default","url-key"]))]),Nt,f.value=="ctnt"?(t(),d("div",qt,[jt,u.value.publishing_state!="drft"?(t(),R(re,{key:0,"full-text":u.value.comment,editable:M.value,onChange:p[2]||(p[2]=k=>me(k))},null,8,["full-text","editable"])):(t(),R(Y,{key:1,class:"h-20",label:"Commentaire",modelValue:u.value.comment,"onUpdate:modelValue":p[3]||(p[3]=k=>me(k))},null,8,["modelValue"])),zt,Et,P.value&&!u.value.is_local_draft&&u.value.publishing_state!="drft"?(t(),R(re,{key:2,class:"min-h-fit","ext-comments":pe.value,"resource-id":u.value.id,"full-text":u.value.content,editable:M.value,onChange:p[4]||(p[4]=k=>de(k))},null,8,["ext-comments","resource-id","full-text","editable"])):(t(),R(Y,{key:3,class:"h-96",label:"Contenu",modelValue:u.value.content,"onUpdate:modelValue":p[5]||(p[5]=k=>de(k))},null,8,["modelValue"])),a(vt,{"resource-id":i.id},null,8,["resource-id"])])):f.value=="bbli"?(t(),d("div",Mt,[a(X,{open:l.value,onClose:p[7]||(p[7]=k=>l.value=!1)},{default:I(()=>[a(ge,{onRefresh:h,onClose:p[6]||(p[6]=k=>l.value=!1),"target-resource":u.value},null,8,["target-resource"])]),_:1},8,["open"]),_("div",{onClick:p[8]||(p[8]=k=>l.value=!0),class:"text-sm italic underline"}," Ajouter une référence "),a(J,{"contextual-resources":A.value},null,8,["contextual-resources"])])):f.value=="pblm"?(t(),d("div",Jt,[a(J,{"contextual-resources":z.value},null,8,["contextual-resources"])])):f.value=="inpt"?(t(),d("div",Ht,[a(J,{"contextual-resources":ee.value},null,8,["contextual-resources"])])):b("",!0),_("div",Wt,[M.value?(t(),R(ae,{key:0,title:"Modifier",onClick:p[9]||(p[9]=k=>ce(!0))},{default:I(()=>[a(S(De),{class:"m-1"})]),_:1})):b("",!0),M.value?(t(),R(ae,{key:1,class:"mt-2",color:"red",title:"Marquer comme lu",onClick:p[10]||(p[10]=k=>Q.value=!0)},{default:I(()=>[a(S(qe),{class:"m-1"})]),_:1})):b("",!0),a(X,{open:Q.value,onClose:p[12]||(p[12]=k=>Q.value=!1)},{default:I(()=>[a(ft,{onRefresh:W,onClose:p[11]||(p[11]=k=>Q.value=!1),resource:u.value},null,8,["resource"])]),_:1},8,["open"]),M.value?(t(),R(ae,{key:2,class:"mt-2",color:"green",title:"Relier à d'autres ressources",onClick:p[13]||(p[13]=k=>r.value=!0)},{default:I(()=>[a(S(je),{class:"m-1"})]),_:1})):b("",!0),a(X,{open:r.value,onClose:p[15]||(p[15]=k=>r.value=!1)},{default:I(()=>[a(ge,{onRefresh:G,onClose:p[14]||(p[14]=k=>r.value=!1),"origin-resource":u.value},null,8,["origin-resource"])]),_:1},8,["open"])])])):(t(),d("div",Vt,"Loading..."))])}}});export{Gt as _,Me as a,J as b};
