import{e as B,g as F,r as s,h as $,m as x,l as z,o as a,c as n,n as I,k as P,F as m,p as y,q as W,b as D,t as L}from"./index-ae323f31.js";const N=["onClick"],R={key:0,style:{width:"5px"}},S={key:1,style:{height:"25px"}},V={key:2},K=B({__name:"TextInterface",props:{fullText:{}},emits:["change"],setup(k,{emit:C}){const v=k,_=F(()=>{console.log("Compute lines");let e=[{id:0,text:[]}].concat(o.value.filter(l=>l.char==`
`));console.log("Compute ids.length : ",e.length);for(let l=0;l<e.length-1;l++)console.log("Compute line : ",l),e[l].text=o.value.filter(t=>t.id>=e[l].id&&t.id<e[l+1].id);return e[e.length-1].text=o.value.filter(l=>l.id>=e[e.length-1].id),e}),o=s([]),c=e=>{console.log("selectCursorPosition letter : ",e),r.value={id:e.id,char:e.char}},r=s(null),h=e=>{o.value.filter(l=>l.id>=r.value.id+1).forEach(l=>l.id+=1),o.value.splice(r.value.id+1,0,{id:r.value.id+1,char:e,line:0}),r.value.id+=1},b=async e=>{if(console.log("Writes : ",e.key),r.value===null)return;const l=e.key;if(l.length==1)h(l);else if(l=="Backspace")o.value.splice(r.value.id,1),o.value.filter(t=>t.id>r.value.id).forEach(t=>t.id-=1),r.value.id-=1;else if(l=="Enter")h(`
`);else if(l=="ArrowRight"){let t=r.value.id;t<o.value.length-1&&c(o.value[t+1])}else if(l=="ArrowLeft"){let t=r.value.id;t>0&&c(o.value[t-1])}else if(l=="Control"){console.log("Control");try{let t=await navigator.clipboard.read();console.log("Clippedtext : ",t)}catch(t){console.log("Error with clippboard : ",t)}}},u=s(!1),d=s({position:"absolute","z-index":90,top:0,left:0,height:"100px",width:"150px"}),w=e=>{e.preventDefault(),d.value.top=`${e.layerY}px`,d.value.left=`${e.layerX}px`,u.value=!0,console.log("event : ",e),console.log("Have a new right click")},f=e=>{if(console.log("textArrayFromString textString: ",e),o.value=[],e===void 0||e==""){o.value=[{id:0,char:`
`}],c({id:0,char:`
`});return}for(var l=0;l<e.length;l++)o.value.push({id:l,char:e[l]})},E=e=>e.reduce((l,t)=>l+t.char,""),p=s(!1);return $(()=>{f(v.fullText),p.value=!0}),x(o,e=>{console.log("Watch triggered : ",e),p.value&&C("change",E(e))},{deep:!0}),x(z(v).fullText,e=>{f(e)}),(e,l)=>(a(),n("div",{class:"border-2 mx-auto relative p-4",tabindex:"0",onKeydown:b,onClick:l[0]||(l[0]=t=>u.value=!1)},[u.value?(a(),n("div",{key:0,class:"bg-white border-4",style:I(d.value)},null,4)):P("",!0),(a(!0),n(m,null,y(_.value,(t,T)=>(a(),n("div",{key:T,class:"flex flex-wrap w-full"},[(a(!0),n(m,null,y(t.text,(i,A)=>{var g;return a(),n("div",{key:A,class:W(["border-blue-400",{"border-r-2":i.id==((g=r.value)==null?void 0:g.id)}]),onClick:q=>c(i),onContextmenu:w},[i.char==" "?(a(),n("div",R)):i.char==`
`?(a(),n("div",S)):(a(),n("div",V,[D("div",null,L(i.char),1)]))],42,N)}),128))]))),128))],32))}});export{K as _};
