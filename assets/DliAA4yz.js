import{_ as S}from"./DpJqR6mV.js";import{_ as V}from"./Blx4Jgev.js";import{d as k,R as q,u as w,r as o,j as l,S as C,H as L,F as N,B as P,v,A as _,G as t,Q as R,x as $,I as A}from"./CULql2UE.js";import{u as T}from"./CrYpDMNw.js";import{_ as U}from"./QY09NBCG.js";import"./DlAUqK2U.js";const b={key:0,class:"text-3xl xl:text-4xl text-center"},z=k({__name:"index",setup(j){const r=q(),p=w(),e=o(""),s=T(),u=l(()=>s.finalSearchList),c=l(()=>r.query.s),i=l(()=>s.loaded),m=o(!1),a=o(1),n=o(!1),x=l(()=>s.searchListTotalPages);C(()=>{c.value&&(e.value=`${c.value}`,d())});const d=()=>{a.value>1&&(a.value=1,n.value=!0),s.findByName(e.value,a.value),m.value=!0,p.push({query:{...r.query,s:e.value}})};L(()=>a.value,()=>{if(n.value){n.value=!1;return}s.findByName(e.value,a.value)});const h=()=>{x.value!==a.value&&a.value++};return(E,f)=>{const y=S,g=V;return v(),N(g,{class:"pt-24 flex flex-col items-center"},{default:P(()=>[_(y,{class:"w-full sm:w-1/2 mb-6",modelValue:t(e),"onUpdate:modelValue":f[0]||(f[0]=B=>R(e)?e.value=B:null),onSearch:d},null,8,["modelValue"]),_(U,{class:"self-stretch","movie-list":t(u),"is-loaded":t(i),onPagination:h},null,8,["movie-list","is-loaded"]),!t(u).length&&!t(i)&&t(m)?(v(),$("div",b," По вашему запросу ничего не найдено 😢 ")):A("",!0)]),_:1})}}});export{z as default};
