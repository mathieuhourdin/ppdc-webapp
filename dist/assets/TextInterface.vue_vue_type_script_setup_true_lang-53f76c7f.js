import{h as L,o as n,c as r,a as m,t as C,d as U,_ as W,s as A,u as Q,r as h,i as Z,p as g,n as P,j as ee,v as te,m as T,F as _,x as y,y as D,e as oe}from"./index-44c3dde8.js";const se={class:"bg-slate-100 border p-1 m-1 rounded shadow-xl"},le={class:"text-xs m-0.5 font-bold"},ae={key:0},ne=["value"],re={class:"flex"},ce={key:1,class:"text-xs"},ie=L({__name:"CommentCard",props:{editing:{type:Boolean},modelValue:{},author:{}},emits:["update:modelValue","validate","abort"],setup(u,{emit:c}){const i=o=>{c("update:modelValue",o.target.value)},v=()=>{c("validate")},l=()=>{c("abort")};return(o,E)=>(n(),r("div",se,[m("div",le,C(o.author.first_name)+" "+C(o.author.last_name),1),o.editing?(n(),r("div",ae,[m("textarea",{class:"w-full text-xs rounded-xl p-2",value:o.modelValue,onInput:i},null,40,ne),m("div",re,[U(W,{onClick:v,class:"text-sm",rounded:"",size:"2xs",text:"Commenter",type:"valid"}),U(W,{onClick:l,class:"text-sm",rounded:"",size:"2xs",text:"Annuler",type:"abort"})])])):(n(),r("div",ce,C(o.modelValue),1))]))}}),de=async(u,c)=>{const{user:i}=Q(),v={start_index:c,end_index:c};try{const o=(await A.post("/articles/"+u+"/comments",v)).data;return i.value&&o.author_id==i.value.id&&(o.author=i.value),o}catch(l){console.log("error : ",l)}},ue=async(u,c=!0)=>{const i=c?"?author=true":"";try{return(await A.get("/articles/"+u+"/comments"+i)).data}catch(v){console.log("error : ",v)}},N=async u=>{try{return(await A.put("/comments/"+u.id,u)).data}catch(c){console.log("error : ",c)}},me=async u=>{console.log("comments : ",u),u.map(c=>N(c))};function ve(){return{createComment:de,getCommentsForArticle:ue,updateComment:N,batchUpdateComments:me}}const he=m("div",{class:"text-sm align-middle flex items-center p-2",style:{height:"50px"}}," Corriger une faute ",-1),pe={class:"flex mx-auto max-w-full"},fe={class:"w-full"},xe={key:0,class:"flex"},ge=m("div",{class:"w-6"},[m("div",{class:"rounded-full ml-4 mr-2 mt-2 h-1 w-1 bg-black"})],-1),_e=[ge],ye={class:"flex flex-wrap"},Ce=["onClick","onContextmenu"],we={key:0,style:{width:"5px"}},ke={key:1,style:{height:"25px"}},be={key:2},Ve={class:"absolute h-full",style:{right:"-2%",width:"27%"}},$e={key:0,style:{width:"33%"}},Ae=L({__name:"TextInterface",props:{ressourceId:{},fullText:{},extComments:{default:()=>[]},editable:{type:Boolean,default:!0}},emits:["change","changeComments"],setup(u,{emit:c}){const i=u,v=e=>{console.log("selectCursorPosition letter : ",e),i.editable&&(l.value={id:e.id,char:e.char})},l=h(null),o=h([]),E=Z(()=>R(o.value)),R=e=>{console.log("textArrayFromString textString: ",e);let t=[{id:0,words:[{id:0,text:[]}],comments:[]}],s=0,f=0;for(var a=0;a<o.value.length;a++){o.value[a].char==`
`&&(s+=1,f=0,t.push({id:s,words:[{id:0,text:[]}],lineStyle:a<o.value.length-1?o.value[a+1].char:null,comments:[]}));const x=p.value.find(d=>d.start_index==a);x&&t[s].comments.push(x),t[s].words[f].text.push({id:a,char:o.value[a].char,comment:x}),o.value[a].char==" "&&(f+=1,t[s].words.push({id:f,text:[{id:a,char:o.value[a].char}]}))}return t},w=e=>{o.value.filter(t=>t.id>=l.value.id+1).forEach(t=>t.id+=1),o.value.splice(l.value.id+1,0,{id:l.value.id+1,char:e,line:0}),p.value.forEach(t=>{t.start_index>l.value.id&&(t.start_index+=1),t.end_index>l.value.id&&(t.end_index+=1)}),l.value.id+=1},j=e=>{if(console.log("Writes : ",e.key),l.value===null)return;const t=e.key;if(k.value&&t=="v"){K();return}if(t.length==1)e.preventDefault(),w(t);else if(t=="Backspace")o.value.splice(l.value.id,1),o.value.filter(s=>s.id>l.value.id).forEach(s=>s.id-=1),l.value.id-=1;else if(t=="Enter")w(`
`);else if(t=="ArrowRight"){let s=l.value.id;s<o.value.length-1&&v(o.value[s+1])}else if(t=="ArrowLeft"){let s=l.value.id;s>0&&v(o.value[s-1])}else t=="Control"&&(console.log("Control"),k.value=!0)},k=h(!1),K=async()=>{try{let t=await navigator.clipboard.readText();console.log("Clippedtext : ",t);for(var e=0;e<t.length;e++)w(t[e])}catch(t){console.log("Error with clippboard : ",t)}},O=e=>{e.key=="Control"&&(k.value=!1)},{createComment:H,batchUpdateComments:M}=ve(),p=h([]),I=h(null),X=e=>{console.log("Comments loading : ",e),p.value=e},Y=async()=>{console.log("Add Comment");const e=await H(i.ressourceId,B.value);p.value.push(e)};g(p,e=>{console.log("Watch comments triggered : ",e.value),$.value&&(console.log("Comments : ",e),c("changeComments",e.value),clearTimeout(I.value),I.value=setTimeout(()=>M(e),1e3))},{deep:!0}),g(P(i).extComments,e=>{p.value=e});const b=h(!1),B=h(null),V=h({position:"absolute","z-index":90,top:0,left:0,height:"106px",width:"260px"}),q=(e,t)=>{e.preventDefault(),l.value=null,V.value.top=`${e.layerY}px`,V.value.left=`${e.layerX}px`,b.value=!0,B.value=t,console.log("event : ",e),console.log("Have a new right click")},F=e=>{if(console.log("textArrayFromString textString: ",e),o.value=[],e===void 0||e==""){o.value=[{id:0,char:`
`}],v({id:0,char:`
`});return}for(var t=0;t<e.length;t++){const s=p.value.find(f=>f.start_index==t);o.value.push({id:t,char:e[t],comment:s})}},G=e=>e.reduce((t,s)=>t+s.char,""),$=h(!1);return ee(()=>{F(i.fullText),X(i.extComments),$.value=!0}),g(o,e=>{console.log("Watch triggered : ",e),$.value&&c("change",G(e))},{deep:!0}),g(P(i).fullText,e=>{F(e)}),(e,t)=>(n(),r("div",{class:"relative p-4",tabindex:"0",onKeydown:j,onKeyup:O,onClick:t[0]||(t[0]=s=>b.value=!1)},[b.value?(n(),r("div",{key:0,class:"bg-white border-4",style:te(V.value)},[m("div",{onClick:Y,class:"text-sm border-b-2 flex items-center p-2",style:{height:"50px"}}," Ajouter un commentaire "),he],4)):T("",!0),m("div",pe,[m("div",fe,[(n(!0),r(_,null,y(E.value,(s,f)=>(n(),r("div",{key:f,class:"flex"},[s.lineStyle=="*"?(n(),r("div",xe,_e)):T("",!0),m("div",ye,[(n(!0),r(_,null,y(s.words,(a,x)=>(n(),r("div",{key:x,class:"flex flex-wrap"},[(n(!0),r(_,null,y(a.text,(d,J)=>{var S;return n(),r("div",{key:J,class:D(["border-blue-400",{"border-r-2":d.id==((S=l.value)==null?void 0:S.id),"bg-yellow-400":d.comment}]),onClick:z=>v(d),onContextmenu:z=>q(z,d.id)},[d.char==" "?(n(),r("div",we)):d.char==`
`?(n(),r("div",ke)):(d.char=="#"||d.char=="*")&&x==0?(n(),r("div",be)):(n(),r("div",{key:3,class:D({"font-bold":s.lineStyle=="#"})},[m("div",null,C(d.char),1)],2))],42,Ce)}),128))]))),128))]),m("div",Ve,[(n(!0),r(_,null,y(s.comments,(a,x)=>(n(),oe(ie,{key:x,class:"w-full",modelValue:a.content,"onUpdate:modelValue":d=>a.content=d,editing:a.editing,onValidate:d=>a.editing=!1,author:a.author},null,8,["modelValue","onUpdate:modelValue","editing","onValidate","author"]))),128))])]))),128))]),p.value.length>0?(n(),r("div",$e,"Espace")):T("",!0)])],32))}});export{Ae as _,ve as u};