import{u as L,a as k}from"./useProblem-668019a3.js";import{d as g,r as h,o as C,s as B,b as e,c as r,t as p,j as x,e as n,f as P,h as I,m as M,a as N,F as v,l as f,g as y,q as V,k as j,v as D,x as U}from"./index-02895f25.js";import{u as q}from"./useResource-87dc948e.js";const S={class:"border p-4"},T={key:0,class:"text-2xs italic mb-2"},E=["src"],W={key:1,class:"max-h-40 overflow-scroll bg-white p-1 rounded border"},z={class:"bg-white"},G={class:""},H={class:"mb-2"},J={class:"text-2xs mb-auto"},K={class:"flex mt-2"},O={class:"text-2xs italic mt-auto"},Q={class:"ml-auto text-2xs underline"},R=g({__name:"ProblemCard",props:{problem:{}},setup(_){const u=_,i=l=>l?l.toLocaleString("fr-FR",{hour:"numeric",weekday:"short",day:"numeric",month:"short",year:"2-digit"}):"",m=h(0),d=h(null),c=h(null),b=l=>l.length>200?l.slice(0,150)+"...":l,{getAuthorInteractionForResource:o}=q(),s=h([]),{getResourceRelationsForResource:t}=L(),a=async()=>{u.problem.id&&(s.value=await t(u.problem.id))},{getUserById:$}=M(),F=async()=>{d.value=await o(u.problem.id),d.value&&(c.value=await $(d.value.interaction_user_id))};return C(async()=>{await a(),await F()}),(l,w)=>{const A=B("router-link");return e(),r("div",S,[c.value?(e(),r("div",T,p(c.value.first_name)+" "+p(c.value.last_name),1)):x("",!0),n("div",{onClick:w[0]||(w[0]=le=>m.value=1),class:"h-3/5 mb-2 bg-gray-700"},[m.value==0?(e(),r("img",{key:0,class:"object-contain w-full h-full mt-auto mx-auto",src:l.problem.image_url},null,8,E)):(e(),r("div",W,[n("div",z,p(l.problem.content),1)]))]),P(A,{to:"/thought_outputs/"+l.problem.id},{default:I(()=>[n("div",G,[n("div",H,p(l.problem.title),1),n("div",J,p(b(l.problem.subtitle)),1),n("div",K,[n("div",O,p(i(l.problem.created_at)),1),n("div",Q,p(s.value.length)+" inputs",1)])])]),_:1},8,["to"])])}}}),X={class:"flex"},Y=n("hr",{class:"border-top border-slate-800 border-dashed my-1"},null,-1),Z={class:"flex overflow-scroll"},ee=g({__name:"CategoryProblemsCarousel",props:{problemsList:{},category:{}},setup(_){const u=_,{newProblem:i,createProblem:m}=k(),d=N(),c=async()=>{const o=i();o.resource.category_id=u.category.id;const s=await m(o);d.push({path:"/thought_outputs/"+s.resource.id,query:{editing:"true"}})},b=o=>o=="default"?"Autres":o;return(o,s)=>(e(),r("div",null,[n("div",X,[n("div",null,p(b(o.category.display_name)),1),n("div",{onClick:c,class:"ml-auto text-sm mr-2 underline"}," Ajouter ")]),Y,n("div",Z,[(e(!0),r(v,null,f(o.problemsList,(t,a)=>(e(),r("div",{class:"mb-4",key:a},[P(R,{class:"w-80 h-96 mx-3 shadow-xl rounded",problem:t},null,8,["problem"])]))),128))])]))}}),se=g({__name:"MobileProblemsFeed",props:{problemsList:{}},setup(_){return(u,i)=>(e(),r("div",null,[(e(!0),r(v,null,f(u.problemsList,(m,d)=>(e(),y(R,{class:"border-b-1 border-black",problem:m},null,8,["problem"]))),256))]))}}),te={key:0,class:"md:m-4"},oe={key:0},re={key:1},ie=g({__name:"ProblemsView",setup(_){const{getProblems:u}=k(),i=h(null),{categories:m}=D(),{isMobile:d}=U(),c=V(()=>m.value.map(s=>(s.problems=b(s),s.problems_count=s.problems?s.problems.length:0,s))),b=o=>{var s,t;return o.display_name=="default"?(s=i.value)==null?void 0:s.filter(a=>a.category_id==null):(t=i.value)==null?void 0:t.filter(a=>a.category_id==o.id)};return C(async()=>i.value=await u()),(o,s)=>(e(),r("div",null,[i.value?(e(),r("div",te,[j(d)?(e(),r("div",re,[(e(!0),r(v,null,f(c.value.sort((t,a)=>a.problems_count-t.problems_count),t=>(e(),y(se,{"problems-list":t.problems},null,8,["problems-list"]))),256))])):(e(),r("div",oe,[(e(!0),r(v,null,f(c.value.sort((t,a)=>a.problems_count-t.problems_count),t=>(e(),y(ee,{class:"mt-4",category:t,key:t.id,"problems-list":t.problems},null,8,["category","problems-list"]))),128))]))])):x("",!0)]))}});export{ie as default};
