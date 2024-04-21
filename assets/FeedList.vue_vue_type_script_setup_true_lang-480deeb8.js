import{o as i,f as c,a as s,d as C,b as _,h as x,B as T,t as f,l as B,e as $,r as M,c as L,I as P,i as m,n as y,w as k,p as R,F as A,g as I,y as S}from"./index-5d3e7966.js";import{u as j}from"./useResourceRelations-d8798ccf.js";const z=n=>{if(!n)return[];const o=n.replace("/?/g","?.").split(".");let t=0;const r=[];for(;t<o.length;){let a=0,u=[];if(o[t].length>=270)r.push(o[t].replace("/?./g","?")),t++;else{for(;t<o.length&&a+o[t].length<270;)u.push(o[t]),a+=o[t].length,t++;r.push(u.join(". ").replace("/?./g","?"))}}return r},N=n=>n?n.split(`
`).map(t=>z(t)).flat():[],F={splitTextForPanel:N};function H(n,o){return i(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}function U(n,o){return i(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})])}function V(n,o){return i(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})])}const D=["src"],q={class:"text-bold mb-2"},E={class:"absolute right-2 top-2 bg-gray-400 rounded-xl p-1 text-xs opacity-70"},G=C({__name:"FeedCardTextInterface",props:{interaction:{}},setup(n){const o=n,t=l=>{if(l>0&&l<=p.value.length){const d=p.value[l-1];return{text:d.replace(/#/g,""),header:l===1?"Commentaire : ":null,class:{"font-black":d.charAt(0)==="#","bg-gray-700":!0}}}else{const d=v.value[l-p.value.length-1];return{text:d.replace(/#/g,""),header:l===p.value.length+1?"Contenu : ":null,class:{"font-black":d.charAt(0)==="#","bg-slate-700":!0}}}},r=_(0),a=()=>{r.value=(r.value+1)%h.value},u=x(()=>`${r.value+1}/${h.value}`),h=x(()=>p.value.length+v.value.length+1),v=x(()=>F.splitTextForPanel(o.interaction.resource.content)),p=x(()=>F.splitTextForPanel(o.interaction.context_comment)),w=()=>{const l=g.value.offsetHeight;g.value.style.height=`${l}px`},g=_(null);return(l,d)=>(i(),c("div",{onClick:a,class:"overflow-auto relative w-full md:h-4/5 min-h-60 mb-2 bg-gray-700",ref_key:"parentCard",ref:g},[r.value==0?(i(),c("img",{key:0,class:"overflow-auto object-contain w-full h-full mt-auto mx-auto",src:l.interaction.resource.image_url,onLoad:w},null,40,D)):(i(),c("div",{key:1,class:T(["overflow-auto h-full overflow-scroll p-1 pt-8 border",t(r.value).class])},[s("div",{class:T([t(r.value).class,"text-center text-sm my-auto text-white"])},[s("div",q,f(t(r.value).header),1),B(" "+f(t(r.value).text),1)],2)],2)),s("div",E,f(u.value),1)],512))}}),J={class:"flex flex-col border p-1.5 overflow-auto"},K={class:"flex"},O={key:1,class:"animate-pulse w-2/3 bg-gradient-to-r from-slate-600 h-8 mb-1.5"},Q={class:"flex"},W={title:"Coming Soon ;)",class:"w-6"},X={title:"Coming Soon ;)",class:"w-6"},Y={class:"flex"},Z={class:"text-2xs"},ee={class:""},te={class:"mb-2 font-bold text-sm"},oe={class:"text-2xs mb-auto"},re=C({__name:"FeedCard",props:{interaction:{}},setup(n){const o=n,t=e=>e?e.toLocaleString("fr-FR",{day:"numeric",month:"short",year:"2-digit"}):"",r=e=>e==="outp"?"Production personnelle":"Bibliographie",a=e=>{switch(e){case"pblm":return"Problématique";case"book":return"Livre";case"atcl":return"Article";case"ratc":return"Article de recherche"}return e};_(null);const u=_(null),h=e=>e?e.length>200?e.slice(0,150)+"...":e:"",v=_([]),{getResourceRelationsForResource:p}=j(),w=async()=>{o.interaction.id&&(v.value=await p(o.interaction.resource.id))},{getUserById:g}=R(),l=_(!1),d=async()=>{try{u.value=await g(o.interaction.user_id)}catch(e){console.log(e)}l.value=!0};return $(async()=>{await w(),await d()}),(e,ne)=>{const b=M("router-link");return i(),c("div",J,[s("div",K,[l.value?(i(),L(P,{key:0,class:"flex mb-1.5 h-8",user:u.value,secondText:t(e.interaction.date),firstBottomText:r(e.interaction.interaction_type),secondBottomText:a(e.interaction.resource.resource_type)},null,8,["user","secondText","firstBottomText","secondBottomText"])):(i(),c("div",O))]),m(G,{interaction:e.interaction},null,8,["interaction"]),s("div",Q,[s("div",W,[m(y(U),{class:"w-full my-auto"})]),s("div",X,[m(y(V),{class:"w-full my-auto"})]),m(b,{to:"/resources/"+e.interaction.resource.id+"/feed",class:"ml-auto"},{default:k(()=>[m(y(H),{class:"w-8"})]),_:1},8,["to"])]),s("div",Y,[s("div",Z,f(Math.floor(Math.random()*100))+" likes",1),m(b,{to:"/resources/"+e.interaction.resource.id+"/feed",class:"ml-auto text-2xs underline"},{default:k(()=>[B(f(v.value.length)+" relations ",1)]),_:1},8,["to"])]),m(b,{class:"",to:"/resources/"+e.interaction.resource.id},{default:k(()=>[s("div",ee,[s("div",te,f(e.interaction.resource.title),1),s("div",oe,f(h(e.interaction.resource.subtitle)),1)])]),_:1},8,["to"])])}}}),se={class:"flex flex-col"},ie=C({__name:"FeedList",props:{interactionsList:{}},setup(n){const o=n,{feedFilter:t}=S(),r=x(()=>o.interactionsList.filter(a=>t.value==="production"?a.interaction_type==="outp"&&!a.resource.is_external&&a.resource.resource_type!=="pblm":t.value==="problem"?a.resource.resource_type==="pblm":t.value==="biblio"?a.interaction_type==="inpt":!0));return(a,u)=>(i(),c("div",se,[(i(!0),c(A,null,I(r.value,(h,v)=>(i(),L(re,{class:"md:mb-2 flex-grow md:rounded max-h-screen border-b-1 border-black",interaction:h,key:h.id},null,8,["interaction"]))),128))]))}});export{ie as _};
