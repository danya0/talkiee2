import{u as A,a as L,s as T,_ as G}from"./DgTxzoKL.js";import{_ as U}from"./Bd82VzQZ.js";import{d as C,v as s,x as n,y as t,r as w,N as z,Z as D,G as e,Q as K,C as Z,L as y,M as b,X as H,z as a,_ as J,R as Q,j as f,o as W,F as I,B as g,J as m,A as k}from"./B9oDE-Kx.js";import{K as X}from"./D_sfbCPW.js";import"./DXt85jR_.js";import"./DlAUqK2U.js";const q={class:"p-2 rounded-lg transition-colors bg-orange-500"},O=["fill"],P=t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Y=t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),tt=t("g",{id:"SVGRepo_iconCarrier"},[t("path",{d:"M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z",stroke:"white","stroke-width":"2","stroke-linejoin":"round"})],-1),et=[P,Y,tt],st=C({__name:"movieFavoriteButton",props:{favorite:{type:Boolean}},setup(_){const i=_;return(r,h)=>(s(),n("button",q,[(s(),n("svg",{class:"h-[20px] w-[20px]",viewBox:"0 0 24 24",fill:i.favorite?"white":"transparent",xmlns:"http://www.w3.org/2000/svg",stroke:"#ffffff"},et,8,O))]))}}),ot={class:"flex flex-col overflow-y-hidden"},lt={class:"flex items-center justify-between mb-4"},nt={class:"overflow-y-auto"},at={class:"list-decimal ml-7"},it=C({__name:"factsBlock",props:{facts:{}},setup(_){const i=_,r=w(!0);return(h,p)=>(s(),n("div",ot,[t("div",lt,[t("label",null,[z(t("input",{"onUpdate:modelValue":p[0]||(p[0]=u=>K(r)?r.value=u:null),type:"checkbox"},null,512),[[D,e(r)]]),Z(" Без спойлеров ")])]),t("div",nt,[t("ol",at,[(s(!0),n(y,null,b(i.facts,u=>(s(),n("li",{class:H(["tracking-normal leading-relaxed my-2",u.spoiler&&e(r)?"blur-sm":""])},a(u.text),3))),256))])])]))}}),rt={class:"mt-6 sm:mt-16"},ct={class:"text-3xl mb-4"},ut={class:"flex flex-col gap-y-4"},M=C({__name:"movieSection",props:{title:{}},setup(_){const i=_;return(r,h)=>(s(),n("section",rt,[t("h3",ct,a(i.title),1),t("div",ut,[J(r.$slots,"default")])]))}}),dt={class:"w-full flex items-center justify-between mb-7"},_t={key:0},pt={class:"text-3xl"},vt={class:"text-white/70"},ft={class:"flex flex-col lg:flex-row gap-y-5 gap-x-12 max-h-[600px]"},mt=["data-kinopoisk"],ht=t("p",{class:"text-lg font-bold"},"Тип:",-1),xt={key:0},gt=t("p",{class:"text-lg font-bold"},"Страна производства:",-1),kt=t("p",{class:"text-lg font-bold"},"Год выпуска:",-1),wt=t("p",{class:"text-lg font-bold"},"Описание:",-1),yt={class:"flex gap-x-2"},bt=t("p",{class:"text-lg font-bold"},"Ваша оценка:",-1),Ct={class:"max-w-[200px] grow"},$t={class:"relative group"},St={class:"blur-lg transition-all group-hover:blur-0 flex gap-x-4 overflow-x-auto h-[250px]"},Rt=["src","alt"],Vt=t("div",{class:"opacity-100 group-hover:hidden transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl"}," Может содержать спойлеры ",-1),Nt=C({__name:"[id]",setup(_){const i=Q(),r=A(),h=L(),p=f(()=>Array.isArray(i.params.id)?i.params.id[0]:i.params.id),u=new X,$=w(null),o=f(()=>$.value?T([$.value])[0]:null),x=w(null),S=w([]),R=f(()=>{var l;return(l=o.value)==null?void 0:l.genres.map(c=>c.genre)}),V=f(()=>{var l;return(l=o.value)==null?void 0:l.countries.map(c=>c.country)}),j=f(()=>{var l,c,d;return((l=o.value)==null?void 0:l.type)==="FILM"?"Фильм":((c=o.value)==null?void 0:c.type)==="TV_SERIES"?"Сериал":((d=o.value)==null?void 0:d.type)==="MINI_SERIES"?"Мини-сериал":"Фильм или сериал"});W(async()=>{$.value=await u.getById(p.value),x.value=await u.getFacts(p.value).then(c=>c.map(d=>{const B=d.text.replace(/(<([^>]+)>)/gi,"");return{...d,text:B}})),S.value=await u.getMovieImages(+p.value);const l=document.createElement("script");l.setAttribute("src","/talkiee2/kinobox.min.js"),l.async=!0,document.head.appendChild(l)});const E=()=>{o.value&&r.favoriteToggle(o.value)},N=l=>{o.value&&h.rate(o.value,l)};return(l,c)=>{const d=G,B=U;return e(o)?(s(),I(B,{key:0,class:"pt-24"},{default:g(()=>[t("div",dt,[e(R)?(s(),n("div",_t,[t("h1",pt,a(e(o).name),1),(s(!0),n(y,null,b(e(R),(v,F)=>(s(),n("span",vt,a(v)+a(F===e(R).length-1?"":", "),1))),256))])):m("",!0),k(st,{favorite:e(o).favorite,onClick:E},null,8,["favorite"])]),t("div",ft,[t("div",{"data-kinobox":"auto","data-kinopoisk":e(o).kinopoiskId,class:"h-auto w-full lg:w-[70%] mx-auto"},null,8,mt)]),k(M,{class:"",title:"Информация"},{default:g(()=>[t("div",null,[ht,t("div",null,a(e(j)),1)]),e(V)?(s(),n("div",xt,[gt,t("div",null,[(s(!0),n(y,null,b(e(V),(v,F)=>(s(),n("span",null,a(v)+a(F===e(V).length-1?"":", "),1))),256))])])):m("",!0),t("div",null,[kt,t("div",null,a(e(o).year),1)]),t("div",null,[wt,t("div",null,a(e(o).description),1)]),t("div",yt,[bt,t("div",Ct,[k(d,{rating:e(o).userRating,onRate:N},null,8,["rating"])])])]),_:1}),e(S).length?(s(),I(M,{key:0,title:"Галерея",class:"mt-16"},{default:g(()=>[t("div",$t,[t("div",St,[(s(!0),n(y,null,b(e(S),v=>(s(),n("img",{class:"h-full",src:v.previewUrl,alt:v.previewUrl},null,8,Rt))),256))]),Vt])]),_:1})):m("",!0),e(x)&&e(x).length?(s(),I(M,{key:1,title:"Факты"},{default:g(()=>[k(it,{facts:e(x)},null,8,["facts"])]),_:1})):m("",!0)]),_:1})):m("",!0)}}});export{Nt as default};
