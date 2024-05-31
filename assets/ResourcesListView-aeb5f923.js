import{_ as R}from"./ProgressBar.vue_vue_type_script_setup_true_lang-b9be12b4.js";import{u as h}from"./useResource-7dc6ad42.js";import{d as b,n as C,b as m,e as x,h as A,r as B,o as a,f as n,i as k,w as v,a as o,c as g,m as f,l as w,t as c,p as V,F as N,g as U}from"./index-d06ac2da.js";const $={class:"text-center mb-4"},j=["src"],F={class:"flex"},I={class:"mt-3 text-xl font-bold"},L={class:"opacity-70"},D=b({__name:"ArticleCard",props:{uuid:{},title:{},subtitle:{},imageUrl:{},progress:{},author:{}},setup(p){const u=p,{getUserById:i}=C(),{getAuthorInteractionForResource:l}=h(),s=m(null),e=m(null);x(async()=>{s.value=await l(u.uuid),e.value=await i(s.value.interaction_user_id)});const d=A(()=>u.uuid?"/resources/"+u.uuid:"");return(r,_)=>{const t=B("router-link");return a(),n("div",$,[k(t,{to:d.value},{default:v(()=>[o("img",{src:r.imageUrl,class:"border border-slate-300 dark:border-zinc-700 rounded-xl max-w-full aspect-[2/1] object-cover object-center w-full",fit:"cover",position:"center"},null,8,j),o("div",F,[s.value?(a(),g(R,{key:0,"progress-value":s.value.interaction_progress,class:"m-2 w-1/3 mr-auto"},null,8,["progress-value"])):f("",!0),e.value?(a(),g(t,{key:1,class:"text-xs italic my-auto mr-2",to:"/users/"+e.value.id},{default:v(()=>[w(c(e.value.first_name)+" "+c(e.value.last_name),1)]),_:1},8,["to"])):f("",!0)]),o("div",I,c(r.title),1),o("div",L,c(r.subtitle),1)]),_:1},8,["to"])])}}}),q={class:"p-4"},z={class:"grid grid-cols-1 md:grid-cols-2 gap-4 p-6"},T=b({__name:"ResourcesListView",setup(p){const u=V(),{getResources:i,createResource:l,newResource:s}=h(),e=m([]),d=async()=>{const r=s(),_=await l(r);u.push({path:"/resources/"+_.id,query:{editing:"true"}})};return x(async()=>e.value=await i()),(r,_)=>(a(),n("div",q,[w(" Ressources "),o("div",{class:"text-sm italic underline",onClick:d}," Ajouter une resource externe non existante "),o("div",z,[(a(!0),n(N,null,U(e.value,(t,y)=>(a(),n("div",{key:y},[k(D,{title:t.title,subtitle:t.subtitle,"image-url":t.image_url,uuid:t.id,author:t.author},null,8,["title","subtitle","image-url","uuid","author"])]))),128))])]))}});export{T as default};