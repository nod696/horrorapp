import{a as b,o as i,b as l,p as S,e as C,f as o,h as N,i as L,r as v,j as M,k as w,u as n,c as B,w as p,F as I,l as R,m as V,t as u,q as F,s as j,v as D,x as E}from"./entry.a3391102.js";import{u as P,_ as q}from"./Loader.f9a6c352.js";const A=""+new URL("bg.867d0ddb.png",import.meta.url).href,G={},H=_=>(S("data-v-fde63e14"),_=_(),C(),_),K={class:"hero"},T=H(()=>o("img",{src:A,alt:"",class:"hero__image"},null,-1)),U=[T];function X(_,m){return i(),l("div",K,U)}const Y=b(G,[["render",X],["__scopeId","data-v-fde63e14"]]);const z={class:"wrapper"},J={key:1,class:"movies__container"},O={class:"buttons"},Q=["disabled"],W={key:0,class:"movies__grid"},Z=["src"],ee={class:"vote"},te={class:"movie__info"},se={class:"movie__title"},oe={class:"movie__overview"},ae={class:"movie__release"},le={__name:"index",setup(_){N(()=>{window.history.pushState(null,document.title,`${window.location.pathname}?page=${a.value}`)});const m=L();let c=v(!0),t=v([]),a=v(1),h=()=>{c.value=!0,t.value=[],a.value=a.value+1,window.history.pushState(null,document.title,`${window.location.pathname}?page=${a.value}`)},g=()=>{a.value!==1&&(c.value=!0,t.value=[],a.value=a.value-1,window.history.pushState(null,document.title,`${window.location.pathname}?page=${a.value}`))},y=async()=>{(await D.get(`https://api.themoviedb.org/3/discover/movie?api_key=${m.apiKey}&with_genres=27&page=${a.value}`)).data.results.forEach(d=>{c.value=!1,t.value.push(d)})};P(async()=>{await y()},"$PslAyef5YX");let f=M(()=>{if(t.value.length>1)for(let r=0;r<t.value.length;r++)for(let e=0;e<t.value.length-1-r;e++)t.value[e+1].vote_average>t.value[e].vote_average&&([t.value[e+1],t.value[e]]=[t.value[e],t.value[e+1]])});return(r,e)=>{const d=Y,x=q,$=E;return i(),l("div",z,[w(d),n(c)?(i(),B(x,{key:0})):(i(),l("div",J,[o("div",O,[o("button",{onClick:e[0]||(e[0]=p((...s)=>n(g)&&n(g)(...s),["prevent"])),class:"load__more",disabled:n(a)==1}," \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ",8,Q),o("button",{onClick:e[1]||(e[1]=p((...s)=>n(h)&&n(h)(...s),["prevent"])),class:"load__more"},"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"),o("button",{class:"sort",onClick:e[2]||(e[2]=p((...s)=>n(f)&&n(f)(...s),["prevent"]))}," \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443 ")]),n(t)?(i(),l("div",W,[(i(!0),l(I,null,R(n(t),(s,k)=>(i(),l("div",{class:"movie",key:k},[o("img",{src:`https://image.tmdb.org/t/p/w500${s.poster_path}`,alt:"",class:"movie__img"},null,8,Z),o("p",ee,"Rating: "+u(s.vote_average),1),o("div",te,[o("h3",se,u(s.original_title),1),o("p",oe,u(s.overview),1)]),o("p",ae," Released: "+u(new Date(s.release_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"})),1),w($,{class:"movie__link",to:"/movies/"+s.id},{default:F(()=>[j("Get More")]),_:2},1032,["to"])]))),128))])):V("",!0)]))])}}};export{le as default};
