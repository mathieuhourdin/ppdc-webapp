import{o as d,f as p,a as x,d as $,b as g,i as R,D as V,n as E,A as I,h as j,e as N,j as S,C as F,F as M,g as P,t as T}from"./index-08f77122.js";import{u as z}from"./SelectionTextInterface.vue_vue_type_style_index_0_lang-648f2a4a.js";function K(e,t){return d(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})])}const J=$({__name:"ClipboardButton",props:{text:{}},setup(e){const t=e,r=g(!1),{launchSnackbar:i}=I(),l=async()=>{try{await navigator.clipboard.writeText(t.text),r.value=!0,i("Text copied to clipboard","success"),setTimeout(()=>r.value=!1,2e3)}catch(v){console.log(`Error with copy : ${v}`)}};return(v,b)=>(d(),p("div",null,[R(E(K),{onClick:l,class:V({"text-slate-400":r.value})},null,8,["class"])]))}});let h;const W=new Uint8Array(16);function q(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(W)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function G(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const Q=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:Q};function X(e,t,r){if(U.randomUUID&&!t&&!e)return U.randomUUID();e=e||{};const i=e.random||(e.rng||q)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){r=r||0;for(let l=0;l<16;++l)t[r+l]=i[l];return t}return G(i)}const Y={class:""},Z=x("div",{class:"cursor bg-blue-400"},null,-1),ee=[Z],te=["onClick","id"],ne={key:0},oe={key:1,class:"ml-4"},re=$({__name:"SelectionTextInterface",props:{text:{},editable:{type:Boolean}},emits:["change"],setup(e,{emit:t}){const r=e,{launchSnackbar:i}=I(),{textLines:l,keydown:v,editCount:b}=z(),y=g(""),B=j(()=>w()),O=n=>{console.log(n);const o=window.getSelection();console.log("selection : ",o);const c=o.getRangeAt(0);console.log("range : ",c)},D=n=>{if(!r.editable)return;const c=window.getSelection().getRangeAt(0);u.value={line:n,startOffset:c.startOffset,endOffset:c.endOffset}},C=()=>{if(u.value.line===void 0)return;console.log(`CursorPosition : ${JSON.stringify(u.value)}`);const n=document.createRange(),o=document.getElementById(`line-${y.value}-${u.value.line}`);console.log("Selected LIne : ",o);const c=window.getComputedStyle(o).lineHeight,a=o.firstChild.firstChild;n.setStart(a,0),n.setEnd(a,u.value.startOffset);const m=n.getClientRects(),_=m[m.length-1];k.value={left:`${_.right}px`,bottom:`${_.bottom}px`,top:`${_.top-3}px`,height:c}},L=n=>{v(n,u)},k=g({left:"0px",right:"0px"}),u=g({line:void 0,startOffset:void 0,endOffset:void 0}),A=n=>n.split(`
`).map((o,c)=>{let a=!1,m=!1;return o[0]==="#"&&(o=o.slice(1),a=!0),o[0]==="*"&&(o=o.slice(1),m=!0),{index:c,text:o,bold:a,chip:m}}),w=()=>l.value.map(n=>(n.bold?"#":"")+(n.chip?"*":"")+n.text).join(`
`);N(()=>{y.value=X(),l.value=A(r.text),document.getElementById("router-view").addEventListener("scroll",()=>{C()})});const f=g(null),H=()=>{f.value!==null&&clearTimeout(f.value),f.value=setTimeout(async()=>{const n=w();n===""||!n?i("Try to update with empty content","error"):t("change",w())},1e3)};return S(b,()=>{H()}),S(u,()=>{C()},{deep:!0}),(n,o)=>(d(),p("div",Y,[x("div",{style:F(k.value),class:"absolute flex flex-column"},ee,4),R(J,{class:"ml-auto h-6 w-6",text:B.value},null,8,["text"]),x("div",{id:"editor-interface",tabindex:"0",onKeydown:o[0]||(o[0]=c=>L(c))},[(d(!0),p(M,null,P(E(l),(c,a)=>(d(),p("div",{class:V(["whitespace-pre-wrap",{"font-bold":c.bold}]),onClick:m=>D(a),onMouseup:O,id:`line-${y.value}-${a}`},[c.chip?(d(),p("li",oe,T(c.text),1)):(d(),p("div",ne,T(c.text===""?" ":c.text),1))],42,te))),256))],32)]))}});export{re as _,J as a};
