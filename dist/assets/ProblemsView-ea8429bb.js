import{u as L,a as C}from"./useProblem-5a5d5096.js";import{d as v,b as e,c as o,e as l,r as h,o as x,s as j,f as y,t as _,j as $,h as B,m as I,a as M,F as f,l as g,g as w,q as N,k as U,v as V,x as D}from"./index-afebbf70.js";import{u as q}from"./useResource-471a7209.js";const S={class:"w-6"},T=["src"],z=v({__name:"UserAvatar",props:{user:{}},setup(p){return(n,i)=>(e(),o("div",S,[l("img",{src:n.user.profile_picture_url?n.user.profile_picture_url:n.image_src,class:"border-2 border-slate-300 dark:border-zinc-700 rounded-full max-w-full aspect-[2/2] object-cover object-center w-full"},null,8,T)]))}}),E={class:"border p-1"},W={key:0,class:"flex mb-1"},G={class:"text-2xs italic my-auto ml-2"},H=["src"],J={key:1,class:"max-h-40 overflow-scroll bg-white p-1 rounded border"},K={class:"bg-white"},O={class:""},Q={class:"mb-2"},X={class:"text-2xs mb-auto"},Y={class:"flex mt-2"},Z={class:"text-2xs italic mt-auto"},ee={class:"ml-auto text-2xs underline"},P=v({__name:"ProblemCard",props:{problem:{}},setup(p){const n=p,i=a=>a?a.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}):"",d=h(0),m=h(null),c=h(null),b=a=>a.length>200?a.slice(0,150)+"...":a,{getAuthorInteractionForResource:r}=q(),s=h([]),{getResourceRelationsForResource:t}=L(),u=async()=>{n.problem.id&&(s.value=await t(n.problem.id))},{getUserById:R}=I(),A=async()=>{m.value=await r(n.problem.id),m.value&&(c.value=await R(m.value.interaction_user_id))};return x(async()=>{await u(),await A()}),(a,k)=>{const F=j("router-link");return e(),o("div",E,[c.value?(e(),o("div",W,[y(z,{user:c.value},null,8,["user"]),l("div",G,_(c.value.first_name)+" "+_(c.value.last_name),1)])):$("",!0),l("div",{onClick:k[0]||(k[0]=ie=>d.value=1),class:"h-3/5 mb-2 bg-gray-700"},[d.value==0?(e(),o("img",{key:0,class:"object-contain w-full h-full mt-auto mx-auto",src:a.problem.image_url},null,8,H)):(e(),o("div",J,[l("div",K,_(a.problem.content),1)]))]),y(F,{to:"/thought_outputs/"+a.problem.id},{default:B(()=>[l("div",O,[l("div",Q,_(a.problem.title),1),l("div",X,_(b(a.problem.subtitle)),1),l("div",Y,[l("div",Z,_(i(a.problem.created_at)),1),l("div",ee,_(s.value.length)+" inputs",1)])])]),_:1},8,["to"])])}}}),se={class:"flex"},te=l("hr",{class:"border-top border-slate-800 border-dashed my-1"},null,-1),oe={class:"flex overflow-scroll"},re=v({__name:"CategoryProblemsCarousel",props:{problemsList:{},category:{}},setup(p){const n=p,{newProblem:i,createProblem:d}=C(),m=M(),c=async()=>{const r=i();r.resource.category_id=n.category.id;const s=await d(r);m.push({path:"/thought_outputs/"+s.resource.id,query:{editing:"true"}})},b=r=>r=="default"?"Autres":r;return(r,s)=>(e(),o("div",null,[l("div",se,[l("div",null,_(b(r.category.display_name)),1),l("div",{onClick:c,class:"ml-auto text-sm mr-2 underline"}," Ajouter ")]),te,l("div",oe,[(e(!0),o(f,null,g(r.problemsList,(t,u)=>(e(),o("div",{class:"mb-4",key:u},[y(P,{class:"w-80 h-96 mx-3 shadow-xl rounded",problem:t},null,8,["problem"])]))),128))])]))}}),le=v({__name:"MobileProblemsFeed",props:{problemsList:{}},setup(p){return(n,i)=>(e(),o("div",null,[(e(!0),o(f,null,g(n.problemsList,(d,m)=>(e(),w(P,{class:"border-b-1 border-black",problem:d},null,8,["problem"]))),256))]))}}),ne={key:0,class:"md:m-4"},ae={key:0},ue={key:1},_e=v({__name:"ProblemsView",setup(p){const{getProblems:n}=C(),i=h(null),{categories:d}=V(),{isMobile:m}=D(),c=N(()=>d.value.map(s=>(s.problems=b(s),s.problems_count=s.problems?s.problems.length:0,s))),b=r=>{var s,t;return r.display_name=="default"?(s=i.value)==null?void 0:s.filter(u=>u.category_id==null):(t=i.value)==null?void 0:t.filter(u=>u.category_id==r.id)};return x(async()=>i.value=await n()),(r,s)=>(e(),o("div",null,[i.value?(e(),o("div",ne,[U(m)?(e(),o("div",ue,[(e(!0),o(f,null,g(c.value.sort((t,u)=>u.problems_count-t.problems_count),t=>(e(),w(le,{"problems-list":t.problems},null,8,["problems-list"]))),256))])):(e(),o("div",ae,[(e(!0),o(f,null,g(c.value.sort((t,u)=>u.problems_count-t.problems_count),t=>(e(),w(re,{class:"mt-4",category:t,key:t.id,"problems-list":t.problems},null,8,["category","problems-list"]))),128))]))])):$("",!0)]))}});export{_e as default};