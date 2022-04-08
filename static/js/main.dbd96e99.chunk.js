(this["webpackJsonpmlb-standings"]=this["webpackJsonpmlb-standings"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),s=n.n(r),i=(n(70),n(71),n(7)),o=n(11),j=n(2),l=n(23),u=n.n(l),d=n(28),b=n(6),O=n(58),p=n(1);var h=function(e){var t=e.gamesBack.toFixed(1);return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.team}),Object(p.jsx)("td",{children:e.wins}),Object(p.jsx)("td",{children:e.losses}),Object(p.jsx)("td",{children:e.pct.toFixed(3)}),Object(p.jsx)("td",{children:t<.5?"-":t}),Object(p.jsx)("td",{children:e.streak})]})},x=n(8),m=n(59),f=n.n(m),g=n(60);n(94);function v(e){var t=new Date;return Object(p.jsxs)("div",{id:"year-input",children:[Object(p.jsx)("label",{htmlFor:"year-input",children:"Select year"}),Object(p.jsx)("input",{type:"number","data-testid":"year-select",defaultValue:Number(t.getFullYear()),min:Number(2021),max:Number(t.getFullYear()),onChange:function(t){return e.setQueryYear(t.target.value)}})]})}var k,E=n(31),S=n.n(E),w=g.a.div(k||(k=Object(O.a)(["\n    margin: 0 auto;\n    padding-top: 1%;\n    padding-bottom: 1%;\n\n    & table {\n        margin-top: 0px;\n        margin-bottom: 0px;\n    }\n\n    & table:nth-child(2) {\n        margin-top: 1%;\n    }\n\n    & table > thead > tr > th {\n        background-color: #bf0d3e;\n        color: white;\n        padding-left: 25px;\n    }\n\n    & table:nth-child(2) > thead > tr > th {\n        background-color: #041e42;\n    }\n"])));var y=function(){var e=Object(c.useState)({american:[],national:[]}),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({american:{pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1},national:{pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1}}),s=Object(b.a)(r,2),l=s[0],O=s[1],m=Object(c.useState)(!0),g=Object(b.a)(m,2),k=g[0],E=g[1],y=Object(c.useState)((new Date).getFullYear()),T=Object(b.a)(y,2),R=T[0],_=T[1];function C(e,t){e=e.map((function(e){return Object(p.jsx)(h,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),"american"===t&&a((function(t){return Object(j.a)(Object(j.a)({},t),{},{american:e})})),"national"===t&&a((function(t){return Object(j.a)(Object(j.a)({},t),{},{national:e})}))}function N(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.wins-e.props.wins})),l["".concat(e)].wins||t.reverse(),O((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{wins:!t["".concat(e)].wins,losses:!t["".concat(e)].losses,gamesBack:!t["".concat(e)].gamesBack})))})),C(t,e)}function F(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.losses-e.props.losses})),l["".concat(e)].losses||t.reverse(),O((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{losses:!t["".concat(e)].losses,wins:t["".concat(e)].losses,pct:t["".concat(e)].losses})))})),C(t,e)}function B(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.pct-e.props.pct})),l["".concat(e)].pct||t.reverse(),O((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{pct:!t["".concat(e)].pct,losses:!t["".concat(e)].losses,gamesBack:!t["".concat(e)].gamesBack})))})),C(t,e)}function G(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.gamesBack-e.props.gamesBack})),l["".concat(e)].gamesBack||t.reverse(),O((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{gamesBack:!t["".concat(e)].gamesBack,wins:t["".concat(e)].gamesBack,pct:t["".concat(e)].gamesBack})))})),C(t,e)}function I(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(t,n){return l["".concat(e)].team?t.props.team.localeCompare(n.props.team):n.props.team.localeCompare(t.props.team)})),O((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{team:!t["".concat(e)].team})))})),C(t,e)}return Object(c.useEffect)((function(){var e,t=new AbortController;return function(){var n=Object(d.a)(u.a.mark((function n(){var c,r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),n.next=3,S.a.get("https://api-mlb.herokuapp.com/?season=".concat(R),{signal:t.signal});case 3:200===(c=n.sent).status?(e=(e=c.data.map((function(e){return Object(p.jsx)(h,{teamId:e.teamId,team:e.team,league:e.league,record:e.record,wins:e.wins,losses:e.losses,pct:e.pct,gamesBack:e.gamesBack,streak:e.streak},e.teamId)}))).sort((function(e,t){return e.props.league-t.props.league})),r=e.slice(0,15),s=e.slice(-15),a({american:r,national:s}),E(!1)):E(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){t.abort()}}),[R]),Object(p.jsx)(w,{children:k?Object(p.jsxs)("div",{style:{marginTop:"5%"},children:[" ","Loading ",Object(p.jsx)(f.a,{color:"black",height:60})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{setQueryYear:_}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("th",{colSpan:"6",children:"American League"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["Team",Object(p.jsxs)("button",{onClick:function(){return I("american")},children:[l.american.team?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})," "]})]}),Object(p.jsxs)("td",{children:["Wins"," ",Object(p.jsxs)("button",{onClick:function(){return N("american")},children:[" ",l.american.wins?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Losses"," ",Object(p.jsxs)("button",{onClick:function(){return F("american")},children:[" ",l.american.losses?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Win %"," ",Object(p.jsxs)("button",{onClick:function(){return B("american")},children:[" ",l.american.pct?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Games Back"," ",Object(p.jsxs)("button",{onClick:function(){return G("american")},children:[" ",l.american.gamesBack?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})," "]}),Object(p.jsx)("td",{children:"Streak"})]}),n.american]})]}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("th",{colSpan:"6",children:"National League"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["Team",Object(p.jsxs)("button",{onClick:function(){return I("national")},children:[l.national.team?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})," "]})]}),Object(p.jsxs)("td",{children:["Wins"," ",Object(p.jsxs)("button",{onClick:function(){return N("national")},children:[" ",l.national.wins?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Losses"," ",Object(p.jsxs)("button",{onClick:function(){return F("national")},children:[" ",l.national.losses?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Win %"," ",Object(p.jsxs)("button",{onClick:function(){return B("national")},children:[" ",l.national.pct?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Games Back"," ",Object(p.jsxs)("button",{onClick:function(){return G("national")},children:[" ",l.national.gamesBack?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})," "]}),Object(p.jsx)("td",{children:"Streak"})]}),n.national]})]})]})})},T=n(37),R=n(5),_=n(32);var C=function(e){var t=e.children;return Object(p.jsx)("div",{children:t})},N=function(e){var t=e.children;return Object(p.jsx)(p.Fragment,{children:t})};N.Venue=function(e){var t=e.children;return Object(p.jsx)(p.Fragment,{children:t})};var F=N,B=function(){var e=a.a.useState(),t=Object(b.a)(e,2),n=(t[0],t[1],a.a.useState()),c=Object(b.a)(n,2),r=(c[0],c[1]),s=a.a.useState(!0),i=Object(b.a)(s,2),o=i[0],j=i[1],l=a.a.useState(0),O=Object(b.a)(l,2),p=O[0],h=O[1];a.a.useRef(null);return a.a.useEffect((function(){var e=new AbortController;return function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(o),j(!0),t.prev=2,t.next=5,S.a.get("https://api-mlb.herokuapp.com/regular-season/page?number=".concat(p),{signal:e.signal});case 5:200===(n=t.sent).status&&(r(n),j(!1)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.warn("Error caught fetching game final scores: ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}()(),function(){e.abort()}}),[p]),{loading:o,setPageNumber:h}},G=function(){var e=B(),t=e.loading,n=e.setPageNumber;return Object(p.jsxs)(p.Fragment,{children:["Game final scores",t?console.log("loading"):console.log("cleanup/done loading"),Object(p.jsx)(F,{children:"asdf"}),Object(p.jsx)("button",{onClick:function(){return n((function(e){return++e}))},children:"unmount"})]})};var I=function(){return Object(p.jsx)(C,{children:Object(p.jsx)(G,{})})},D=n(38),A=n(39),L=n(33),M=function(e){return Object(p.jsx)("button",{type:"button",onClick:function(){return e.handleEvent(e.index)},children:e.children})},P=function(e){return Object(p.jsx)("div",{children:e.children})};var W=function(e){return Object(p.jsx)("div",{children:e.Games.map((function(t,n){return Object(p.jsxs)("form",{children:[Object(p.jsxs)("label",{children:[" Winner",Object(p.jsx)("input",{required:!0,list:"teams",name:"winner",id:"winner",value:t.winner,onChange:function(t){return e.setWinnerInfo(t.target.value,n)}}),Object(p.jsxs)("datalist",{id:"teams",children:[Object(p.jsx)("option",{hidden:!0,value:""}),e.Teams.map((function(t,n){return Object(p.jsx)("option",{value:e.Teams[n].team,children:e.Teams[n].team},n)}))]})]}),Object(p.jsxs)("label",{children:[" Loser -",Object(p.jsx)("input",{list:"teams",name:"loser",id:"loser",value:t.loser,onChange:function(t){return e.setLoserInfo(t.target.value,n)}}),Object(p.jsxs)("datalist",{id:"teams",children:[Object(p.jsx)("option",{hidden:!0}),e.Teams.map((function(t,n){return Object(p.jsx)("option",{value:e.Teams[n].team,children:e.Teams[n].team},n)}))]})]}),Object(p.jsxs)("label",{children:[" Score",Object(p.jsx)("input",{type:"text",onChange:function(t){return e.setWinnerRuns(t.target.value,n)}}),"-",Object(p.jsx)("input",{type:"text",onChange:function(t){return e.setLoserRuns(t.target.value,n)}})]}),Object(p.jsxs)("label",{children:[" Venue",Object(p.jsxs)("select",{name:"venue",id:"venue",defaultValue:"",onChange:function(t){return e.setVenue(t.target.value,n)},children:[Object(p.jsx)("option",{hidden:!0}),Object(p.jsx)("option",{children:" American Family Field "}),Object(p.jsx)("option",{children:" Angel Stadium "}),Object(p.jsx)("option",{children:" Busch Stadium "}),Object(p.jsx)("option",{children:" Camden Yards "}),Object(p.jsx)("option",{children:" Chase Field "}),Object(p.jsx)("option",{children:" Citi Field"}),Object(p.jsx)("option",{children:" Citizens Bank Park"}),Object(p.jsx)("option",{children:" Comerica Park"}),Object(p.jsx)("option",{children:" Coors Field "}),Object(p.jsx)("option",{children:" Dodger Stadium "}),Object(p.jsx)("option",{children:" Fenway Park"}),Object(p.jsx)("option",{children:" Globe Life Field"}),Object(p.jsx)("option",{children:" Great American Ball Park"}),Object(p.jsx)("option",{children:" Guaranteed Rate Field"}),Object(p.jsx)("option",{children:" Kauffman Stadium"}),Object(p.jsx)("option",{children:" loanDepot Park"}),Object(p.jsx)("option",{children:" Minute Maid Park"}),Object(p.jsx)("option",{children:" Nationals Park"}),Object(p.jsx)("option",{children:" Oakland Coliseum"}),Object(p.jsx)("option",{children:" Oracle Park"}),Object(p.jsx)("option",{children:" Petco Park"}),Object(p.jsx)("option",{children:" PNC Park"}),Object(p.jsx)("option",{children:" Progressive Field"}),Object(p.jsx)("option",{children:" Rogers Centre"}),Object(p.jsx)("option",{children:" T-Mobile Park"}),Object(p.jsx)("option",{children:" Target Field"}),Object(p.jsx)("option",{children:" Tropicana Field"}),Object(p.jsx)("option",{children:" Truist Park"}),Object(p.jsx)("option",{children:" Wrigley Field"}),Object(p.jsx)("option",{children:" Yankee Stadium"})]})]}),Object(p.jsx)(M,{handleEvent:function(t){return e.removeGame(t)},index:n,children:" Remove "}),Object(p.jsx)(M,{handleEvent:function(t){return e.swapMatchup(t)},index:n,children:" Swap "})]},n)}))})};var V=Object(L.b)((function(e){return{MLBTeams:e.FranchiseReducer,Games:e.GamesReducer,Date:e.DateReducer.date}}),(function(e){return{addFranchise:function(t){return e({type:"ADD_FRANCHISE",payload:t})},addGame:function(){return e({type:"ADD_GAME",payload:{winner:"",loser:"",winnerRuns:null,loserRuns:null,venue:""}})},removeGame:function(t){return e({type:"REMOVE_GAME",index:t})},swapMatchup:function(t){return e({type:"SWAP_MATCHUP",index:t})},setWinnerInfo:function(t,n){return e({type:"SET_WINNER_INFO",payload:t,index:n})},setLoserInfo:function(t,n){return e({type:"SET_LOSER_INFO",payload:t,index:n})},setWinnerRuns:function(t,n){return e({type:"SET_WINNER_RUNS",payload:t,index:n})},setLoserRuns:function(t,n){return e({type:"SET_LOSER_RUNS",payload:t,index:n})},setVenue:function(t,n){return e(function(e,t){return{type:"SET_VENUE",payload:e,index:t}}(t,n))},setDate:function(t){return e(function(e){return{type:"SET_DATE",payload:e}}(t))},getGames:function(){return e({type:"GET_GAMES"})}}}))((function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],s=e.addFranchise;function i(){var t=e.Date.split("-"),n=Object(_.a)(t),c=n[0],a=n.slice(1);return a=[a=a.join("-"),"-"].concat(Object(o.a)(c)).join("")}return Object(c.useEffect)((function(){fetch("https://api-mlb.herokuapp.com?season=2022").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("input",{required:!0,type:"text",placeholder:(new Date).toISOString().split("T")[0],onFocus:function(e){return e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},onChange:function(t){return function(t){t.preventDefault(),e.setDate(t.target.value)}(t)}}),0===e.Games.length?Object(p.jsx)("div",{children:" No game data "}):Object(p.jsx)(W,{Games:e.Games,Teams:e.MLBTeams,setWinnerInfo:e.setWinnerInfo,setLoserInfo:e.setLoserInfo,setWinnerRuns:e.setWinnerRuns,setLoserRuns:e.setLoserRuns,setVenue:e.setVenue,removeGame:e.removeGame,swapMatchup:e.swapMatchup}),Object(p.jsx)(M,{handleEvent:e.addGame,children:" Enter another game "}),Object(p.jsx)(M,{handleEvent:function(){return r(!a)},children:"Toggle output"}),a?e.Games.map((function(t,n){if(""===t.winner||""===t.loser)return null;var c=function(t,n){var c=1,a=(c=e.MLBTeams.filter((function(e){return e.team===t||e.team===n?e:null})))[0].league===c[1].league?0:1;return[a,function(){return a?0:c[0].division===c[1].division?1:0}]}(t.winner,t.loser),a=Object(b.a)(c,2),r=a[0],s=a[1];return Object(p.jsxs)(P,{children:[t.winner," vs ",t.loser,", ",t.venue,", ",i(),",\xa0",t.winnerRuns,", ",t.loserRuns,", 0, ",s(),",\xa0",r,","]},n)})):function(){return e.getGames}]})})),U=n(35),Y=new Date,H=Object(U.a)({FranchiseReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FRANCHISE":return Object(o.a)(t.payload);default:return e}},GamesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.slice();switch(t.type){case"ADD_GAME":return[].concat(Object(o.a)(e),[t.payload]);case"REMOVE_GAME":var c=e.slice(0,t.index),a=e.slice(t.index+1);return c=c.concat(a);case"SWAP_MATCHUP":var r=n[t.index].winner;return n[t.index].winner=n[t.index].loser,n[t.index].loser=r,Object(o.a)(n);case"SET_WINNER_INFO":return n[t.index].winner=t.payload,Object(o.a)(n);case"SET_LOSER_INFO":return n[t.index].loser=t.payload,Object(o.a)(n);case"SET_WINNER_RUNS":return n[t.index].winnerRuns=t.payload,Object(o.a)(n);case"SET_LOSER_RUNS":return n[t.index].loserRuns=t.payload,Object(o.a)(n);case"SET_VENUE":return n[t.index].venue=t.payload,Object(o.a)(n);case"GET_GAMES":default:return e}},DateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{date:Y.toISOString().split("T")[0]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return Object.assign({},{date:t.payload});default:return e}}}),X=Object(U.b)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var q=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(T.a,{basename:"/",children:[Object(p.jsxs)(D.a,{expand:"xxl",bg:"light",children:[Object(p.jsx)(D.a.Toggle,{}),Object(p.jsx)(D.a.Collapse,{className:"nav-collapse",children:Object(p.jsxs)(A.a,{children:[Object(p.jsx)(A.a.Link,{as:T.b,to:"/",children:" Standings "}),Object(p.jsx)(A.a.Link,{as:T.b,to:"/games",children:" Final Scores "})]})})]}),Object(p.jsxs)(R.c,{children:[Object(p.jsx)(R.a,{exact:!0,path:"/",children:Object(p.jsx)(y,{})}),Object(p.jsx)(R.a,{path:"/games",children:Object(p.jsx)(I,{})}),Object(p.jsx)(R.a,{path:"/admin",children:Object(p.jsx)(L.a,{store:X,children:Object(p.jsx)(V,{})})})]})]})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))},70:function(e,t,n){},71:function(e,t,n){},94:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.dbd96e99.chunk.js.map