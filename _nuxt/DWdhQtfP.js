import{_ as B}from"./C_gSGM5H.js";import{_ as k}from"./CmpCXyYu.js";import{d as P,Q as V,u as q,r as u,j as l,o as w,H as C,F as f,B as L,v as r,A as N,G as s,P as S,x as R,I as U}from"./BrCeWUXW.js";import{u as $}from"./B2pKkn0n.js";import{_ as M}from"./DczoD0DG.js";import"./DlAUqK2U.js";const T={key:1,class:"text-6xl text-center"},Q=P({__name:"index",setup(b){const c=V(),p=q(),e=u(""),t=$(),i=l(()=>t.finalSearchList),n=l(()=>c.query.s),v=l(()=>t.loaded),a=u(1),o=u(!1),_=l(()=>t.searchListTotalPages);w(()=>{n.value&&(e.value=`${n.value}`,m())});const m=()=>{a.value>1&&(a.value=1,o.value=!0),t.findByName(e.value,a.value),p.push({query:{...c.query,s:e.value}})};C(()=>a.value,()=>{if(console.log("pageUpdate.value -> ",o.value),o.value){o.value=!1;return}t.findByName(e.value,a.value)});const x=()=>{_.value!==a.value&&a.value++};return(j,d)=>{const h=B,g=k;return r(),f(g,{class:"pt-24 flex flex-col items-center"},{default:L(()=>[N(h,{class:"w-full sm:w-1/2 mb-6",modelValue:s(e),"onUpdate:modelValue":d[0]||(d[0]=y=>S(e)?e.value=y:null),onSearch:m},null,8,["modelValue"]),s(i).length?(r(),f(M,{key:0,class:"self-stretch","movie-list":s(i),"is-loaded":s(v),onPagination:x},null,8,["movie-list","is-loaded"])):s(n)?(r(),R("div",T," По вашему запросу ничего не найдено 😢 ")):U("",!0)]),_:1})}}});export{Q as default};