import{d as c,r as l,s as p,o as r,c as a,k as m,w as h,i as s,t as o,g as f,F as g,j as v,e as k,p as w}from"./index-5e3e59bb.js";const b={class:"border shadow-lg rounded p-4"},j={class:"px-20"},B=["src"],C={class:"text-center mt-4"},U={class:"text-center mt-4"},x=c({__name:"UserCard",props:{user:{}},setup(i){const t=l("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg");return(e,u)=>{const n=p("router-link");return r(),a("div",b,[m(n,{to:"/users/"+e.user.id},{default:h(()=>[s("div",j,[s("img",{src:e.user.profile_picture_url?e.user.profile_picture_url:t.value,class:"border border-slate-300 dark:border-zinc-700 rounded-xl max-w-full aspect-[2/2] object-cover object-center w-full"},null,8,B)]),s("div",C,o(e.user.first_name)+" "+o(e.user.last_name),1),s("div",U,o(e.user.handle),1)]),_:1},8,["to"])])}}}),y={class:"grid grid-cols-1 md:grid-cols-2 gap-8 p-16"},F=c({__name:"UsersView",setup(i){const{getUsers:t}=k(),e=l([]);return f(async()=>e.value=await t()),(u,n)=>(r(),a("div",null,[s("div",y,[(r(!0),a(g,null,v(e.value,(d,_)=>(r(),w(x,{key:_,user:d},null,8,["user"]))),128))])]))}});export{F as default};
