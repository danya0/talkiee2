import{H as a}from"./CFQ_Fs7C.js";class i{static get(t){const s=localStorage.getItem(t);return s?JSON.parse(s):null}static set(t,s){localStorage.setItem(t,JSON.stringify(s))}static removeItem(t){localStorage.removeItem(t)}}const r=a("favorite",{state:()=>({favoriteList:i.get("favoriteList")||[]}),actions:{favoriteToggle(e){e.favorite?this.$state.favoriteList=this.$state.favoriteList.filter(t=>t.kinopoiskId!==e.kinopoiskId):this.$state.favoriteList.push({...e,favorite:!0}),i.set("favoriteList",this.$state.favoriteList)},checkFavorite(e){return this.favoriteList.map(s=>s.kinopoiskId).includes(e)}}});export{i as L,r as u};
