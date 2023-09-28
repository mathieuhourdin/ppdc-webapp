import{_ as I}from"./useThoughtInputs-35710700.js";import{d as m,r as f,j as y,B as x,q as C,y as $,c as i,f as n,g as R,C as b,D as E,a as c,o as l,s as B,t as d,h,w as _,z as w,x as S,i as k,e as T,F as L,m as N,E as F}from"./index-6c02f670.js";const V={class:"flex"},z=m({__name:"ModalSheet",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(p,{emit:a}){const o=p,s=f(!1);return y(()=>{s.value=o.open}),x(()=>{const u=t=>{(t.key==="Escape"||t.key==="Enter"||t.key==="Esc"||t.keyCode===27)&&a("close")};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}}),C($(o).open,u=>s.value=u),(u,t)=>s.value?(l(),i("div",{key:0,tabindex:"0",onKeyup:t[2]||(t[2]=E(e=>a("close"),["esc"])),class:"fixed top-0 left-0 w-full h-full z-10 bg-slate-500/50",onClick:t[3]||(t[3]=e=>a("close"))},[n("div",{class:"max-w-xl overflow-y-scroll max-h-screen mb-10 bg-white mx-auto mt-6 p-4 rounded shadow",onClick:t[1]||(t[1]=b(()=>{},["stop"]))},[n("div",V,[n("div",{class:"ml-auto",onClick:t[0]||(t[0]=e=>a("close"))},"x")]),R(u.$slots,"default")])],32)):c("",!0)}}),D={class:"w-full md:w-96"},M={key:0,class:"text-xs italic mb-2"},O={class:"border shadow-lg rounded p-4 md:w-96"},U={class:"flex"},K=["src"],j={class:"flex flex-wrap w-full",style:{"margin-top":"-8px"}},q={class:"text-2xs italic"},A={class:"ml-auto m-1 w-1/3"},P={class:"text-2xs"},W={class:"flex flex-wrap"},G={key:0,class:"text-2xs italic"},H=m({__name:"ThoughtInputCard",props:{thoughtInput:{},usageReason:{}},setup(p){const a=p,{getUserById:o}=T(),s=f(null);y(async()=>s.value=await o(a.thoughtInput.input_user_id));const u=e=>e.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}),t=e=>e.length>200?e.slice(0,150)+"...":e;return(e,g)=>{const r=B("router-link");return l(),i("div",D,[e.usageReason?(l(),i("div",M,d(e.usageReason),1)):c("",!0),n("div",O,[n("div",U,[n("img",{class:"w-8 h-fit mr-4",src:e.thoughtInput.resource_image_url},null,8,K),n("div",null,[n("div",null,[h(r,{to:"/thought_inputs/"+e.thoughtInput.id},{default:_(()=>[w(d(e.thoughtInput.resource_title),1)]),_:1},8,["to"])]),n("div",j,[n("div",q,d(e.thoughtInput.resource_author_name),1),n("div",A,[h(S,{"progress-value":e.thoughtInput.input_progress},null,8,["progress-value"])])]),n("div",P,d(t(e.thoughtInput.input_comment)),1)])]),n("div",W,[e.thoughtInput.input_date?(l(),i("div",G,d(u(e.thoughtInput.input_date)),1)):c("",!0),s.value?(l(),k(r,{key:1,to:"/users/"+s.value.id,class:"ml-auto text-2xs underline"},{default:_(()=>[w(d(s.value.first_name)+" "+d(s.value.last_name),1)]),_:1},8,["to"])):c("",!0)])])])}}}),J={class:"w-fit"},Q=m({__name:"ThoughtInputCardWithPopup",props:{thoughtInput:{},usageReason:{}},setup(p){const a=f(!1);return(o,s)=>(l(),i("div",J,[h(z,{open:a.value,onClose:s[0]||(s[0]=u=>a.value=!1)},{default:_(()=>[h(I,{"thought-input":o.thoughtInput,"usage-reason":o.usageReason},null,8,["thought-input","usage-reason"])]),_:1},8,["open"]),h(H,{class:"md:w-96","thought-input":o.thoughtInput,"usage-reason":o.usageReason,onClick:s[1]||(s[1]=u=>a.value=!0)},null,8,["thought-input","usage-reason"])]))}}),X={class:"relative max-w-full"},Y={key:0,class:"absolute md:border h-full start-1/2"},se=m({__name:"ThoughtInputsList",props:{thoughtInputs:{},usageReasons:{},center:{type:Boolean,default:!1}},emits:["select"],setup(p,{emit:a}){const o=p,s=e=>{if(o.usageReasons&&o.usageReasons.length===o.thoughtInputs.length)return o.usageReasons[e]},u=e=>e.sort((g,r)=>+(r.input_date>g.input_date)),t=e=>{console.log("Select"),a("select",e)};return(e,g)=>(l(),i("div",X,[e.center?c("",!0):(l(),i("div",Y)),(l(!0),i(L,null,N(u(e.thoughtInputs),(r,v)=>(l(),k(Q,{key:r.id,class:F(["mb-4 md:mb-1 mx-auto max-w-full max-w-fit p-1",{"md:ml-0":v%2==0&&!e.center,"md:mr-0":!e.center}]),"thought-input":r,"usage-reason":s(v),onClick:Z=>t(r)},null,8,["class","thought-input","usage-reason","onClick"]))),128))]))}});export{se as _,z as a};
