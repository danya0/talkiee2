import{H as k,d as h,v as p,x as v,L,M as u,y as _,X as g,Y as C,W as m}from"./gmntjbiq.js";import{L as n}from"./DXt85jR_.js";import{_ as w}from"./DlAUqK2U.js";var r=(t=>(t.favoriteList="favoriteList",t.lastUpdatePreview="lastUpdatePreview",t.previewPoster="previewPoster",t.previewMovie="previewMovie",t.searchHistory="searchHistory",t.ratedList="ratedList",t))(r||{});const I=k("favorite",{state:()=>({favoriteList:n.get(r.favoriteList)||[]}),actions:{favoriteToggle(t){t.favorite?this.$state.favoriteList=this.$state.favoriteList.filter(i=>i.kinopoiskId!==t.kinopoiskId):this.$state.favoriteList.push({...t,favorite:!0}),n.set(r.favoriteList,this.$state.favoriteList)},checkFavorite(t){return this.favoriteList.map(s=>s.kinopoiskId).includes(t)}}}),x=k("rated",{state:()=>({list:n.get(r.ratedList)||[]}),actions:{rate(t,i){const s=this.list.findIndex(o=>o.kinopoiskId===t.kinopoiskId);s!==-1?i===this.list[s].userRating?this.removeFromList(this.list[s].kinopoiskId):this.list[s].userRating=i:this.list.push({...t,userRating:i}),n.set(r.ratedList,this.list)},removeFromList(t){const i=this.list.find(s=>s.kinopoiskId===t);i&&(this.list=this.list.filter(s=>s.kinopoiskId!==i.kinopoiskId),n.set(r.ratedList,this.list))}}}),B=t=>{const i=I(),s=x(),o=i.favoriteList,f=s.list;return t.map(e=>{const d=JSON.parse(JSON.stringify(e)),a=o.find(l=>l.kinopoiskId===e.kinopoiskId);d.favorite=!!a;const c=f.find(l=>l.kinopoiskId===e.kinopoiskId);return d.userRating=c?c.userRating:0,d})},R={class:"flex w-full flex-row-reverse"},M=["onClick"],F=m('<svg height="30" width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9f04ad23><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-9f04ad23></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-9f04ad23></g><g id="SVGRepo_iconCarrier" data-v-9f04ad23><path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#ffffff" fill="transparent" stroke-width="1.5" data-v-9f04ad23></path></g></svg>',1),S=[F],y=h({__name:"userRating",props:{rating:{}},emits:["rate"],setup(t,{emit:i}){const s=t,o=i,f=e=>{o("rate",Math.abs(e-5)+1)};return(e,d)=>(p(),v("div",R,[(p(),v(L,null,u(5,a=>_("div",{class:g(["star cursor-pointer grow flex items-center justify-center",{"filled-star-gold":a+s.rating>5}]),key:a,onClick:C(c=>f(a),["stop"])},S,10,M)),64))]))}}),N=w(y,[["__scopeId","data-v-9f04ad23"]]);export{r as S,N as _,x as a,B as s,I as u};
