import{_ as f}from"./ProgressBar.vue_vue_type_script_setup_true_lang-1234e765.js";import{d as h,b as l,e as b,h as g,r as k,o as c,f as x,i as w,w as u,a as s,c as i,m as d,l as y,t as o,p as B,v as C}from"./index-b68b4189.js";const N={class:"text-center mb-4"},U=["src"],V={class:"flex"},A={class:"mt-3 text-xl font-bold"},I={class:"opacity-70"},D=h({__name:"ArticleCard",props:{uuid:{},title:{},subtitle:{},imageUrl:{},progress:{},author:{}},setup(m){const r=m,{getUserById:_}=B(),{getAuthorInteractionForResource:p}=C(),t=l(null),e=l(null);b(async()=>{t.value=await p(r.uuid),e.value=await _(t.value.interaction_user_id)});const v=g(()=>r.uuid?"/resources/"+r.uuid:"");return(a,j)=>{const n=k("router-link");return c(),x("div",N,[w(n,{to:v.value},{default:u(()=>[s("img",{src:a.imageUrl,class:"border border-slate-300 dark:border-zinc-700 rounded-xl max-w-full aspect-[2/1] object-cover object-center w-full",fit:"cover",position:"center"},null,8,U),s("div",V,[t.value?(c(),i(f,{key:0,"progress-value":t.value.interaction_progress,class:"m-2 w-1/3 mr-auto"},null,8,["progress-value"])):d("",!0),e.value?(c(),i(n,{key:1,class:"text-xs italic my-auto mr-2",to:"/users/"+e.value.id},{default:u(()=>[y(o(e.value.first_name)+" "+o(e.value.last_name),1)]),_:1},8,["to"])):d("",!0)]),s("div",A,o(a.title),1),s("div",I,o(a.subtitle),1)]),_:1},8,["to"])])}}});export{D as _};
