"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{856:function(e,t,r){r.d(t,{e:function(){return f}});var n="MovieList_movieList__uFrOZ",a=r(689),u=r(87),c="MovieListItem_movieListItem__diVgK",s="MovieListItem_link__1-1ln",i=r(184),o=function(e){var t=e.id,r=e.title,n=(0,a.TH)();return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(u.rU,{className:s,to:"/movies/".concat(t),state:{from:n},children:r})})},f=function(e){var t=e.movies;return(0,i.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,r=e.title;return(0,i.jsx)(o,{id:t,title:r},t)}))})}},835:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(87),o=r(714),f="SearchBar_inputWrapper__Y3m19",v="SearchBar_input__bIy50",p="SearchBar_icon__EfDZn",l=r(566),h=r(628),m=r(184),d=function(e){var t=e.onChange,r=e.value;return(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)(h.DebounceInput,{className:v,type:"text",value:r,onChange:function(e){t(e.target.value)},placeholder:"Search movies...",minLength:2,debounceTimeout:500}),(0,m.jsx)(l.G4C,{className:p})]})},x=r(856),_=r(784),w=function(){var e,t=(0,s.useState)([]),r=(0,a.Z)(t,2),u=r[0],f=r[1],v=(0,i.lr)(),p=(0,a.Z)(v,2),l=p[0],h=p[1],w=null!==(e=l.get("query"))&&void 0!==e?e:"",Z=(0,s.useState)(!1),g=(0,a.Z)(Z,2),k=g[0],b=g[1];return(0,s.useEffect)((function(){(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,o.mv)(w);case 4:t=e.sent,f(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[w]),(0,m.jsxs)("div",{children:[(0,m.jsx)(d,{value:w,onChange:function(e){h(""!==e?{query:e}:{})}}),k?(0,m.jsx)(_.a,{}):w&&0===u.length?(0,m.jsx)("h2",{children:"\ud83d\udd0e Nothing found"}):(0,m.jsx)(x.e,{movies:u})]})}},714:function(e,t,r){r.d(t,{Hx:function(){return v},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"2322ac85e7954336cec5772afa3a57b9"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=835.a3766b4c.chunk.js.map