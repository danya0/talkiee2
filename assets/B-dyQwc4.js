import{d as f,j as C,v as o,x as r,z as _,X as h,G as b,y as t,F as k,J as m,A as v,Y as R,r as L,u as j,o as B,L as T,M as V}from"./B1l5Ij2e.js";import{_ as S,u as M,a as F}from"./C1-eom0i.js";import{_ as G}from"./DlAUqK2U.js";const I=f({__name:"movieRating",props:{rating:{}},setup(l){const i=l,n=C(()=>{const a=+i.rating;return a>8?"border-green-500":a>5?"border-orange-500":"border-red-500"});return(a,u)=>(o(),r("div",{class:h(["h-[20px] w-[20px] flex items-center justify-center border-2 rounded-full p-4",b(n)])},_(i.rating),3))}}),P={class:"h-[40px] w-[40px] flex items-center justify-center"},z=["fill"],A=t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),N=t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),E=t("g",{id:"SVGRepo_iconCarrier"},[t("path",{d:"M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z",stroke:"orange","stroke-width":"2","stroke-linejoin":"round"})],-1),D=[A,N,E],H=f({__name:"movieBookmark",props:{status:{type:Boolean}},setup(l){const i=l;return(n,a)=>(o(),r("div",P,[(o(),r("svg",{class:"h-[20px] w-[20px]",viewBox:"0 0 24 24",fill:i.status?"orange":"transparent",xmlns:"http://www.w3.org/2000/svg",stroke:"#002aff"},D,8,z))]))}}),J=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),O={class:"cursor-pointer w-full grid group gap-y-1 max-w-[230px] self-start justify-self-center"},U={class:"relative rounded-md overflow-hidden h-[340px]"},X={class:"absolute top-0 left-0 w-full z-10 flex justify-between"},Y={class:"flex items-center mt-2 ml-2 gap-x-2"},Z={class:"p-1 rounded-md bg-[#4a6fb5] text-[0.8rem]"},q=["src","alt"],K=t("div",{class:"transition-opacity absolute group-hover:opacity-30 top-0 left-0 h-full w-full bg-black opacity-0"},null,-1),Q={class:"text-white/70 line-clamp-2"},W=f({__name:"movieCard",props:{item:{}},emits:["favoriteToggle","rate"],setup(l,{emit:i}){const n=i,a=()=>{n("favoriteToggle")},u=e=>{n("rate",e)};return(e,g)=>(o(),r("div",O,[t("div",U,[t("div",X,[t("div",Y,[e.item.rating?(o(),k(I,{key:0,rating:e.item.rating},null,8,["rating"])):m("",!0),t("div",Z,_(e.item.year),1)]),v(H,{class:"self-end",status:e.item.favorite,onClick:R(a,["stop"])},null,8,["status"])]),e.item.userRating||!b(J)?(o(),r("div",{key:0,class:h(["absolute transition-opacity bottom-4 left-0 w-full z-10",{"opacity-0 group-hover:opacity-100":!e.item.userRating}])},[v(S,{rating:e.item.userRating,onRate:u},null,8,["rating"])],2)):m("",!0),t("img",{class:"w-full h-full transition-transform group-hover:scale-105 object-fill",src:e.item.posterUrlPreview,alt:e.item.name},null,8,q),K]),t("p",Q,_(e.item.name),1)]))}}),ee={},te={class:"loader"};function oe(l,i){return o(),r("div",te)}const se=G(ee,[["render",oe],["__scopeId","data-v-12ce140c"]]),re={class:"relative"},ie={key:0,class:"text-xl mb-8"},ne={class:"w-full gap-4 gap-x-a grid this-grid mb-10"},ae={key:1,class:"absolute bottom-0 left-1/2 -translate-x-1/2"},ue=f({__name:"movieGrid",props:{movieList:{},title:{},isLoaded:{type:Boolean}},emits:["pagination"],setup(l,{emit:i}){const n=L(),a=M(),u=F(),e=j(),g=l,w=i,y=s=>{a.favoriteToggle(s)},x=(s,p)=>{u.rate(s,p)},$=s=>{e.push(`/watch/${s}`)};return B(()=>{const s=new IntersectionObserver((p,c)=>{p.forEach(d=>{if(d.isIntersecting){if(g.isLoaded)return!1;w("pagination")}})},{threshold:1});n.value&&s.observe(n.value)}),(s,p)=>(o(),r("div",re,[s.title?(o(),r("p",ie,_(s.title),1)):m("",!0),t("div",ne,[(o(!0),r(T,null,V(g.movieList,c=>(o(),k(W,{key:c.kinopoiskId,item:c,onFavoriteToggle:d=>y(c),onRate:d=>x(c,d),onClick:d=>$(c.kinopoiskId)},null,8,["item","onFavoriteToggle","onRate","onClick"]))),128))]),s.isLoaded?(o(),r("div",ae,[v(se,{class:"mx-auto"})])):m("",!0),t("div",{ref_key:"observer",ref:n,class:"h-12 w-full"},null,512)]))}});export{ue as _};
