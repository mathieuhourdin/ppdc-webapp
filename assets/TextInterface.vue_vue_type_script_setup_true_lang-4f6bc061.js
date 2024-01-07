import{_ as j}from"./ActionButton.vue_vue_type_script_setup_true_lang-e705c259.js";import{b as l,c as s,e as u,d as H,q as ie,j as y,t as w,f as O,D as P,E as K,m as q,r as g,w as D,y as ce,o as ue,C as F,k as z,I as de,F as b,l as $,g as he,J as ve}from"./index-27eb766c.js";function me(r,i){return l(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})])}const fe={class:"bg-slate-100 border p-1 m-1 rounded shadow-xl"},pe={class:"flex"},ge={key:0,class:"text-xs mt-0.5 mb-1 font-bold flex"},xe=["src"],_e={class:"my-auto"},ye={class:"text-2xs italic ml-auto mr-1 my-auto"},we={key:0},Ce=["value"],ke={class:"flex"},be={key:1,class:"text-xs mt-0.5"},$e=H({__name:"CommentCard",props:{editing:{type:Boolean},modelValue:{},author:{},createdAt:{}},emits:["update:modelValue","validate","abort"],setup(r,{emit:i}){const d=r,h=ie(()=>d.createdAt?d.createdAt.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}):""),o=c=>{i("update:modelValue",c.target.value)},n=()=>{i("validate")},f=()=>{i("abort")};return(c,T)=>(l(),s("div",fe,[u("div",pe,[c.author?(l(),s("div",ge,[c.author.profile_picture_url?(l(),s("img",{key:0,class:"h-5 w-5 rounded-full mr-1",src:c.author.profile_picture_url},null,8,xe)):y("",!0),u("div",_e,w(c.author.first_name)+" "+w(c.author.last_name),1)])):y("",!0),u("div",ye,w(h.value),1)]),c.editing?(l(),s("div",we,[u("textarea",{class:"w-full text-xs rounded-xl p-2",value:c.modelValue,onInput:o},null,40,Ce),u("div",ke,[O(j,{onClick:n,class:"text-sm",rounded:"",size:"2xs",text:"Commenter",type:"valid"}),O(j,{onClick:f,class:"text-sm",rounded:"",size:"2xs",text:"Annuler",type:"abort"})])])):(l(),s("div",be,w(c.modelValue),1))]))}}),{launchSnackbar:U}=K(),Te=async(r,i,d,h)=>{const{user:o}=q(),n={start_index:i,end_index:i,content:d,editing:h};try{const f=await P.post("/resources/"+r+"/comments",n),c=W(f.data);return o.value&&c.author_id==o.value.id&&(c.author=o.value),c}catch(f){throw console.log("error : ",f),U(`Error creating comment : ${f}`,"error"),f}},W=r=>(r.updated_at=new Date(r.updated_at.split(".")[0]),r.created_at=new Date(r.created_at.split(".")[0]),r),Ve=async(r,i=!0)=>{const d=i?"?author=true":"";try{return(await P.get("/resources/"+r+"/comments"+d)).data.map(o=>W(o))}catch(h){throw console.log("error : ",h),U(`Error getting comments : ${h}`,"error"),h}},J=async r=>{try{const i=await P.put("/comments/"+r.id,r);return W(i.data)}catch(i){console.log("error : ",i),U(`Error updating comment : ${i}`,"error")}},Ae=async r=>{console.log("comments : ",r),r.map(i=>J(i))};function Ee(){return{createComment:Te,getCommentsForThoughtOutput:Ve,updateComment:J,batchUpdateComments:Ae}}const Ie={key:0},Be=u("div",{class:"text-sm align-middle flex items-center p-2",style:{height:"50px"}}," Corriger une faute ",-1),Se={class:"flex mx-auto max-w-full"},De={class:"w-full"},Fe={key:0,class:"flex"},ze=u("div",{class:"w-6"},[u("div",{class:"rounded-full ml-4 mr-2 mt-2 h-1 w-1 bg-black"})],-1),Oe=[ze],Pe={class:"flex flex-wrap flex-1"},Ue=["onClick","onContextmenu"],We={key:0,style:{width:"5px"}},Le={key:1,style:{height:"25px"}},Me={key:2},Ne=["onClick"],Re={key:1,class:"absolute h-full",style:{right:"-2%",width:"27%"}},je={key:0,style:{width:"33%"}},qe=H({__name:"TextInterface",props:{resourceId:{},fullText:{},extComments:{default:()=>[]},editable:{type:Boolean,default:!0}},emits:["change","changeComments"],setup(r,{emit:i}){const d=r,h=e=>{console.log("selectCursorPosition letter : ",e),d.editable&&(o.value={id:e.id,char:e.char})},o=g(null),n=g([]),f=g([]),c=async()=>{let e=[{id:0,words:[{id:0,text:[]}],comments:[]}],t=0,a=0;for(var v=0;v<n.value.length;v++){n.value[v].char==`
`&&(t+=1,a=0,e.push({id:t,words:[{id:0,text:[]}],lineStyle:v<n.value.length-1?n.value[v+1].char:null,comments:[]}));const m=x.value.find(_=>_.start_index==v);m&&e[t].comments.push(m),e[t].words[a].text.push({id:v,char:n.value[v].char,comment:m}),n.value[v].char==" "&&(a+=1,e[t].words.push({id:a,text:[]}))}return e},T=e=>{e==1?x.value.forEach(t=>{o.value&&t.start_index>o.value.id&&(t.start_index+=1),o.value&&t.end_index>o.value.id&&(t.end_index+=1)}):e==-1&&x.value.forEach(t=>{o.value&&t.start_index>=o.value.id&&(t.start_index-=1),o.value&&t.end_index>=o.value.id&&(t.end_index-=1)})},V=e=>{console.log("insertChar : ",e),o.value&&(console.log("insertChar with cursor set : ",e),n.value.filter(t=>o.value&&t.id>=o.value.id+1).forEach(t=>t.id+=1),n.value.splice(o.value.id+1,0,{id:o.value.id+1,char:e}),T(1),o.value.id+=1)},X=e=>{if(console.log("Writes : ",e.key),o.value===null)return;const t=e.key;if(A.value&&t=="v"){Y();return}if(t.length==1)e.preventDefault(),V(t);else if(t=="Backspace")n.value.splice(o.value.id,1),n.value.filter(a=>o.value&&a.id>o.value.id).forEach(a=>a.id-=1),T(-1),o.value.id-=1;else if(t=="Enter")V(`
`);else if(t=="ArrowRight"){let a=o.value.id;a<n.value.length-1&&h(n.value[a+1])}else if(t=="ArrowLeft"){let a=o.value.id;a>0&&h(n.value[a-1])}else t=="Control"&&(console.log("Control"),A.value=!0)},A=g(!1),Y=async()=>{try{let t=await navigator.clipboard.readText();console.log("Clippedtext : ",t);for(var e=0;e<t.length;e++)V(t[e])}catch(t){console.log("Error with clippboard : ",t)}},G=e=>{e.key=="Control"&&(A.value=!1)},E=g(!1),{launchSnackbar:Q}=K(),Z=async()=>{try{await navigator.clipboard.writeText(d.fullText),E.value=!0,Q("Text copied to clipboard","success"),setTimeout(()=>E.value=!1,2e3)}catch(e){console.log(`Error with copy : ${e}`)}},{createComment:ee,batchUpdateComments:te}=Ee(),{isMobile:L}=ve(),x=g([]),I=g(null),M=async e=>{x.value=e.filter(t=>t.start_index!=null)},oe=async()=>{if(console.log("Add Comment"),console.log(d.resourceId),console.log(C.value),!d.resourceId||!C.value)return;console.log("Add Comment 2");const e=await ee(d.resourceId,C.value);x.value.push(e)};D(x,async(e,t)=>{console.log("Watch comments triggered : ",e),k.value&&(console.log("Comments : ",e),i("changeComments",e),I.value!==null&&clearTimeout(I.value),I.value=setTimeout(()=>te(e),1e3)),console.log(`Old comments lenght : ${t.length} new length: ${e.length}`),console.log("OldComments : ",t),console.log("NewComments : ",e),t.length===0&&e.length>0&&(console.log("Finally loading comments"),f.value=await c())},{deep:!0}),D(ce(d).extComments,async e=>{await M(e)});const B=g(!1),C=g(null),S=g({position:"absolute","z-index":90,top:"0px",left:"0px",height:"106px",width:"260px"}),{user:ae}=q(),le=(e,t)=>{e.preventDefault(),ae.value&&(o.value=null,S.value.top=`${e.layerY}px`,S.value.left=`${e.layerX}px`,B.value=!0,C.value=t,console.log("event : ",e),console.log("Have a new right click"))},se=e=>{if(n.value=[],e===void 0||e==""){n.value=[{id:0,char:`
`}],h({id:0,char:`
`});return}for(var t=0;t<e.length;t++){const a=x.value.find(v=>v.start_index==t);n.value.push({id:t,char:e[t],comment:a})}},ne=e=>e.reduce((t,a)=>t+a.char,""),k=g(!1);return ue(async()=>{await M(d.extComments),await se(d.fullText),await new Promise(e=>setTimeout(e,10)),f.value=await c(),k.value=!0}),D(n,async e=>{console.log("Watch triggered : ",e),k.value&&(i("change",ne(e)),f.value=await c())},{deep:!0}),(e,t)=>(l(),s("div",null,[O(z(me),{onClick:Z,class:F(["absolute h-6 right-2",{"text-slate-400":E.value}])},null,8,["class"]),k.value?(l(),s("div",{key:1,id:"main-interface",class:"relative md:p-4",tabindex:"0",onKeydown:X,onKeyup:G,onClick:t[0]||(t[0]=a=>B.value=!1)},[B.value?(l(),s("div",{key:0,class:"bg-white border-4",style:de(S.value)},[u("div",{onClick:oe,class:"text-sm border-b-2 flex items-center p-2",style:{height:"50px"}}," Ajouter un commentaire "),Be],4)):y("",!0),u("div",Se,[u("div",De,[(l(!0),s(b,null,$(f.value,(a,v)=>(l(),s("div",{key:v,class:"flex"},[a.lineStyle=="*"?(l(),s("div",Fe,Oe)):y("",!0),u("div",Pe,[(l(!0),s(b,null,$(a.words,(m,_)=>(l(),s("div",{key:_,class:"flex flex-wrap"},[(l(!0),s(b,null,$(m.text,(p,re)=>{var N;return l(),s("div",{key:re,class:F(["border-blue-400",{"border-r-2":p.id==((N=o.value)==null?void 0:N.id),"bg-yellow-400":p.comment}]),onClick:R=>h(p),onContextmenu:R=>le(R,p.id)},[p.char==" "?(l(),s("div",We)):p.char==`
`?(l(),s("div",Le)):(p.char=="#"||p.char=="*")&&_==0?(l(),s("div",Me)):(l(),s("div",{key:3,class:F({"font-bold":a.lineStyle=="#"})},[u("div",null,w(p.char),1)],2))],42,Ue)}),128))]))),128)),u("div",{class:"flex-1",onClick:m=>h(a.words.slice(-1)[0].text.slice(-1)[0])},null,8,Ne)]),x.value.length>0&&!z(L)?(l(),s("div",Re,[(l(!0),s(b,null,$(a.comments,(m,_)=>(l(),he($e,{key:_,class:"w-full",modelValue:m.content,"onUpdate:modelValue":p=>m.content=p,editing:m.editing,onValidate:p=>m.editing=!1,author:m.author,"created-at":m.created_at},null,8,["modelValue","onUpdate:modelValue","editing","onValidate","author","created-at"]))),128))])):y("",!0)]))),128))]),x.value.length>0&&!z(L)?(l(),s("div",je)):y("",!0)])],32)):(l(),s("div",Ie,[u("span",null,w(e.fullText),1)]))]))}});export{qe as _,$e as a,Ee as u};
