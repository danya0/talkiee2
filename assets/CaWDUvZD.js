import{_ as F}from"./Blx4Jgev.js";import{d as w,v as o,x as l,y as e,r as g,M as j,Z as E,G as s,Q as A,C as L,K as k,L as y,X as N,z as r,_ as T,R as G,j as m,o as K,F as I,B as x,I as f,A as V}from"./CULql2UE.js";import{u as U,K as z}from"./CrYpDMNw.js";import"./DlAUqK2U.js";const D={class:"p-2 rounded-lg transition-colors bg-orange-500"},Z=["fill"],H=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Q=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),X=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z",stroke:"white","stroke-width":"2","stroke-linejoin":"round"})],-1),q=[H,Q,X],J=w({__name:"movieFavoriteButton",props:{favorite:{type:Boolean}},setup(_){const c=_;return(i,p)=>(o(),l("button",D,[(o(),l("svg",{class:"h-[20px] w-[20px]",viewBox:"0 0 24 24",fill:c.favorite?"white":"transparent",xmlns:"http://www.w3.org/2000/svg",stroke:"#ffffff"},q,8,Z))]))}}),O={class:"flex flex-col overflow-y-hidden"},P={class:"flex items-center justify-between mb-4"},W={class:"overflow-y-auto"},Y={class:"list-decimal ml-7"},ee=w({__name:"factsBlock",props:{facts:{}},setup(_){const c=_,i=g(!0);return(p,v)=>(o(),l("div",O,[e("div",P,[e("label",null,[j(e("input",{"onUpdate:modelValue":v[0]||(v[0]=t=>A(i)?i.value=t:null),type:"checkbox"},null,512),[[E,s(i)]]),L(" Без спойлеров ")])]),e("div",W,[e("ol",Y,[(o(!0),l(k,null,y(c.facts,t=>(o(),l("li",{class:N(["tracking-normal leading-relaxed my-2",t.spoiler&&s(i)?"blur-sm":""])},r(t.text),3))),256))])])]))}}),te={class:"mt-6 sm:mt-16"},se={class:"text-3xl mb-4"},oe={class:"flex flex-col gap-y-4"},B=w({__name:"movieSection",props:{title:{}},setup(_){const c=_;return(i,p)=>(o(),l("section",te,[e("h3",se,r(c.title),1),e("div",oe,[T(i.$slots,"default")])]))}}),le={class:"w-full flex items-center justify-between mb-7"},ae={key:0},ne={class:"text-3xl"},ie={class:"text-white/70"},re={class:"flex flex-col lg:flex-row gap-y-5 gap-x-12 max-h-[600px]"},ce=["data-kinopoisk"],ue=e("p",{class:"text-lg font-bold"},"Тип:",-1),de={key:0},_e=e("p",{class:"text-lg font-bold"},"Страна производства:",-1),pe=e("p",{class:"text-lg font-bold"},"Год выпуска:",-1),ve=e("p",{class:"text-lg font-bold"},"Описание:",-1),fe={class:"relative group"},he={class:"blur-lg transition-all group-hover:blur-0 flex gap-x-4 overflow-x-auto h-[250px]"},me=["src","alt"],xe=e("div",{class:"opacity-100 group-hover:hidden transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl"}," Может содержать спойлеры ",-1),be=w({__name:"[id]",setup(_){const c=G(),i=U(),p=m(()=>Array.isArray(c.params.id)?c.params.id[0]:c.params.id),v=new z,t=g(null),h=g(null),b=g([]),C=m(()=>{var a;return(a=t.value)==null?void 0:a.genres.map(u=>u.genre)}),$=m(()=>{var a;return(a=t.value)==null?void 0:a.countries.map(u=>u.country)}),M=m(()=>{var a,u,d,n;return console.log("movie.value?.type -> ",(a=t.value)==null?void 0:a.type),((u=t.value)==null?void 0:u.type)==="FILM"?"Фильм":((d=t.value)==null?void 0:d.type)==="TV_SERIES"?"Сериал":((n=t.value)==null?void 0:n.type)==="MINI_SERIES"?"Мини-сериал":"Фильм или сериал"});K(async()=>{t.value=await v.getById(p.value),t.value.favorite=i.checkFavorite(t.value.kinopoiskId),h.value=await v.getFacts(p.value).then(u=>u.map(d=>{const n=d.text.replace(/(<([^>]+)>)/gi,"");return{...d,text:n}})),b.value=await v.getMovieImages(+p.value);const a=document.createElement("script");a.setAttribute("src","/talkiee2/kinobox.min.js"),a.async=!0,document.head.appendChild(a)});const R=()=>{t.value&&(i.favoriteToggle(t.value),t.value.favorite=!t.value.favorite)};return(a,u)=>{const d=F;return s(t)?(o(),I(d,{key:0,class:"pt-24"},{default:x(()=>[e("div",le,[s(C)?(o(),l("div",ae,[e("h1",ne,r(s(t).name),1),(o(!0),l(k,null,y(s(C),(n,S)=>(o(),l("span",ie,r(n)+r(S===s(C).length-1?"":", "),1))),256))])):f("",!0),V(J,{favorite:s(t).favorite,onClick:R},null,8,["favorite"])]),e("div",re,[e("div",{"data-kinobox":"auto","data-kinopoisk":s(t).kinopoiskId,class:"h-auto w-full lg:w-[70%] mx-auto"},null,8,ce)]),V(B,{class:"",title:"Информация"},{default:x(()=>[e("div",null,[ue,e("div",null,r(s(M)),1)]),s($)?(o(),l("div",de,[_e,e("div",null,[(o(!0),l(k,null,y(s($),(n,S)=>(o(),l("span",null,r(n)+r(S===s($).length-1?"":", "),1))),256))])])):f("",!0),e("div",null,[pe,e("div",null,r(s(t).year),1)]),e("div",null,[ve,e("div",null,r(s(t).description),1)])]),_:1}),s(b).length?(o(),I(B,{key:0,title:"Галерея",class:"mt-16"},{default:x(()=>[e("div",fe,[e("div",he,[(o(!0),l(k,null,y(s(b),n=>(o(),l("img",{class:"h-full",src:n.previewUrl,alt:n.previewUrl},null,8,me))),256))]),xe])]),_:1})):f("",!0),s(h)&&s(h).length?(o(),I(B,{key:1,title:"Факты"},{default:x(()=>[V(ee,{facts:s(h)},null,8,["facts"])]),_:1})):f("",!0)]),_:1})):f("",!0)}}});export{be as default};
