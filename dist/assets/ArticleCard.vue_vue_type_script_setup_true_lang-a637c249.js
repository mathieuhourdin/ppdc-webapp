import{_ as f}from"./ProgressBar.vue_vue_type_script_setup_true_lang-5a946b4c.js";import{u as h}from"./useResource-84b37ba3.js";import{d as g,r as c,o as b,c as k,v as x,e as n,a as y,b as w,i as l,g as s,h as i,k as d,j as B,t as o,n as C}from"./index-c80b7e84.js";const N={class:"text-center mb-4"},U=["src"],V={class:"flex"},j={class:"mt-3 text-xl font-bold"},A={class:"opacity-70"},E=g({__name:"ArticleCard",props:{uuid:{},title:{},subtitle:{},imageUrl:{},progress:{},author:{}},setup(m){const r=m,{getUserById:_}=C(),{getAuthorInteractionForResource:p}=h(),t=c(null),e=c(null);b(async()=>{t.value=await p(r.uuid),e.value=await _(t.value.interaction_user_id)});const v=k(()=>r.uuid?"/thought_outputs/"+r.uuid:"");return(a,I)=>{const u=x("router-link");return n(),y("div",N,[w(u,{to:v.value},{default:l(()=>[s("img",{src:a.imageUrl,class:"border border-slate-300 dark:border-zinc-700 rounded-xl max-w-full aspect-[2/1] object-cover object-center w-full",fit:"cover",position:"center"},null,8,U),s("div",V,[t.value?(n(),i(f,{key:0,"progress-value":t.value.interaction_progress,class:"m-2 w-1/3 mr-auto"},null,8,["progress-value"])):d("",!0),e.value?(n(),i(u,{key:1,class:"text-xs italic my-auto mr-2",to:"/users/"+e.value.id},{default:l(()=>[B(o(e.value.first_name)+" "+o(e.value.last_name),1)]),_:1},8,["to"])):d("",!0)]),s("div",j,o(a.title),1),s("div",A,o(a.subtitle),1)]),_:1},8,["to"])])}}});export{E as _};