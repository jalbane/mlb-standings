(this["webpackJsonpmlb-standings"]=this["webpackJsonpmlb-standings"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),s=n.n(r),i=(n(54),n(55),n(6)),o=n(11),j=n(2),l=n(9),u=n(42),d=n(1);var b,O=function(e){var t=e.gamesBack.toFixed(1);return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.team}),Object(d.jsx)("td",{children:e.wins}),Object(d.jsx)("td",{children:e.losses}),Object(d.jsx)("td",{children:e.pct.toFixed(3)}),Object(d.jsx)("td",{children:t<.5?"-":t}),Object(d.jsx)("td",{children:e.streak})]})},p=n(7),h=n(43),x=n.n(h);function m(){var e=new Date;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"year-input",children:"Select year"}),Object(d.jsx)("input",{type:"number","data-testid":"year-select",defaultValue:Number(e.getFullYear()),min:Number(2021),max:Number(e.getFullYear())})]})}var f=n(44).a.div(b||(b=Object(u.a)(["\n    margin: 0 auto;\n    padding-top: 2%;\n    padding-bottom: 2%;\n\n    & table {\n        margin-top: 0px;\n        margin-bottom: 0px;\n    }\n\n    & table:nth-child(2){\n        margin-top: 2%;\n    }\n\n    & table > thead > tr > th{\n        background-color: #BF0D3E;\n        color: white;\n        padding-left: 25px;\n    }\n\n    & table:nth-child(2) > thead > tr > th{\n        background-color: #041E42;\n    }\n\n"])));var g=function(){var e=Object(c.useState)({american:[],national:[]}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({american:{pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1},national:{pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1}}),s=Object(l.a)(r,2),u=s[0],b=s[1],h=Object(c.useState)(!0),g=Object(l.a)(h,2),v=g[0],k=g[1];function w(e,t){e=e.map((function(e){return Object(d.jsx)(O,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),"american"===t&&a((function(t){return Object(j.a)(Object(j.a)({},t),{},{american:e})})),"national"===t&&a((function(t){return Object(j.a)(Object(j.a)({},t),{},{national:e})}))}function E(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.wins-e.props.wins})),u["".concat(e)].wins||t.reverse(),b((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{wins:!t["".concat(e)].wins,losses:!t["".concat(e)].losses,gamesBack:!t["".concat(e)].gamesBack})))})),w(t,e)}function S(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.losses-e.props.losses})),u["".concat(e)].losses||t.reverse(),b((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{losses:!t["".concat(e)].losses,wins:t["".concat(e)].losses,pct:t["".concat(e)].losses})))})),w(t,e)}function y(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.pct-e.props.pct})),u["".concat(e)].pct||t.reverse(),b((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{pct:!t["".concat(e)].pct,losses:!t["".concat(e)].losses,gamesBack:!t["".concat(e)].gamesBack})))})),w(t,e)}function T(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.gamesBack-e.props.gamesBack})),u["".concat(e)].gamesBack||t.reverse(),b((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{gamesBack:!t["".concat(e)].gamesBack,wins:t["".concat(e)].gamesBack,pct:t["".concat(e)].gamesBack})))})),w(t,e)}function N(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(t,n){return u["".concat(e)].team?t.props.team.localeCompare(n.props.team):n.props.team.localeCompare(t.props.team)})),b((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(i.a)({},"".concat(e),Object(j.a)(Object(j.a)({},t["".concat(e)]),{},{team:!t["".concat(e)].team})))})),w(t,e)}return Object(c.useEffect)((function(){var e;fetch("https://api-mlb.herokuapp.com/",{method:"GET",accept:"*/*"}).then((function(e){return e.json()})).then((function(t){console.log(t);var n=(e=(e=t.map((function(e){return Object(d.jsx)(O,{teamId:e.teamId,team:e.team,league:e.league,record:e.record,wins:e.wins,losses:e.losses,pct:e.pct,gamesBack:e.gamesBack,streak:e.streak},e.teamId)}))).sort((function(e,t){return e.props.league-t.props.league}))).slice(0,15),c=e.slice(-15);a({american:n,national:c}),k(!1)}))}),[]),Object(d.jsx)(f,{children:v?Object(d.jsxs)("div",{style:{marginTop:"5%"},children:[" Loading ",Object(d.jsx)(x.a,{color:"black",height:60})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{colSpan:"6",children:"American League"})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Team",Object(d.jsxs)("button",{onClick:function(){return N("american")},children:[u.american.team?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})," "]})]}),Object(d.jsxs)("td",{children:["Wins ",Object(d.jsxs)("button",{onClick:function(){return E("american")},children:[" ",u.american.wins?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("td",{children:["Losses ",Object(d.jsxs)("button",{onClick:function(){return S("american")},children:[" ",u.american.losses?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("td",{children:["Win % ",Object(d.jsxs)("button",{onClick:function(){return y("american")},children:[" ",u.american.pct?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("td",{children:["Games Back ",Object(d.jsxs)("button",{onClick:function(){return T("american")},children:[" ",u.american.gamesBack?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})," "]}),Object(d.jsx)("td",{children:"Streak"})]}),n.american]})]}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{colSpan:"6",children:"National League"})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Team",Object(d.jsxs)("button",{onClick:function(){return N("national")},children:[u.national.team?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})," "]})]}),Object(d.jsxs)("td",{children:["Wins ",Object(d.jsxs)("button",{onClick:function(){return E("national")},children:[" ",u.national.wins?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("td",{children:["Losses ",Object(d.jsxs)("button",{onClick:function(){return S("national")},children:[" ",u.national.losses?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("td",{children:["Win % ",Object(d.jsxs)("button",{onClick:function(){return y("national")},children:[" ",u.national.pct?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})]}),Object(d.jsxs)("td",{children:["Games Back ",Object(d.jsxs)("button",{onClick:function(){return T("national")},children:[" ",u.national.gamesBack?Object(d.jsx)(p.b,{}):Object(d.jsx)(p.a,{})]})," "]}),Object(d.jsx)("td",{children:"Streak"})]}),n.national]})]})]})})},v=n(32),k=n(5),w=n(27);var E=function(e){var t=e.props,n=t.date.split("T")[0].split("-"),c=Object(w.a)(n),a=c[0],r=c.slice(1);return Object(d.jsxs)("div",{className:"game-container",children:[Object(d.jsxs)("div",{className:"stadium-date-container",children:[Object(d.jsxs)("div",{children:[" ",t.stadium," "]}),Object(d.jsxs)("div",{children:[" ",r.join("/").concat("/",a)," "]})]}),Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsxs)("div",{className:"left",children:[" ",t.winner]}),Object(d.jsx)("div",{children:" vs "}),Object(d.jsxs)("div",{className:"right",children:[" ",t.loser,"  "]})]}),Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsxs)("div",{className:"left",children:[" ",t.winnerRuns," "]}),Object(d.jsx)("div",{children:" - "}),Object(d.jsxs)("div",{className:"right",children:[" ",t.loserRuns," "]})]})]})};var S=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(),u=Object(l.a)(j,2),b=u[0],O=u[1],p=Object(c.useState)(0),h=Object(l.a)(p,2),x=h[0],m=h[1],f=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=[];fetch("https://api-mlb.herokuapp.com/regular-season/page?number=".concat(x),{method:"GET",accept:"*/*"}).then((function(e){return e.json()})).then((function(t){e=t.result.map((function(e,t){return{key:t,date:e.date,stadium:e.stadium,winner:e.winner.name,winnerRuns:e.winner.runs,loser:e.loser.name,loserRuns:e.loser.runs}})),f.current=t.pages,a(Array.from(e)),O(Array.from(e)),o(!1)}))}),[x]),Object(d.jsx)("div",{children:i?Object(d.jsx)("div",{children:" loading "}):Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{onChange:function(e){if(e.target.value){var t=b.filter((function(t){return t.winner.toLowerCase().includes(e.target.value.toLowerCase())||t.loser.toLowerCase().includes(e.target.value.toLowerCase())||t.stadium.toLowerCase().includes(e.target.value.toLowerCase())||t.date.toLowerCase().includes(e.target.value.toLowerCase())?t:null}));return a(t)}return a(b)},placeholder:"Search for Teams, Stadiums or dates (mm-dd)"}),Object(d.jsx)("div",{className:"layout-container",children:n.map((function(e,t){return Object(d.jsx)(E,{props:e},t)}))}),Object(d.jsxs)("div",{className:"page-bar",children:[Object(d.jsxs)("button",{onClick:function(){return x?m((function(e){return e-1})):0},children:[" ",Object(d.jsx)("strong",{children:" Go back "})," "]}),Object(d.jsxs)("div",{className:"page-number",children:[" Page ",x+1," out of ",f.current+1," "]}),Object(d.jsxs)("button",{onClick:function(){return x===f.current?null:m((function(e){return e+1}))},children:[" ",Object(d.jsx)("strong",{children:" Next page "})," "]})]})]})})},y=n(33),T=n(34),N=n(28),R=function(e){return Object(d.jsx)("button",{type:"button",onClick:function(){return e.handleEvent(e.index)},children:e.children})},C=function(e){return Object(d.jsx)("div",{children:e.children})};var _=function(e){return Object(d.jsx)("div",{children:e.Games.map((function(t,n){return Object(d.jsxs)("form",{children:[Object(d.jsxs)("label",{children:[" Winner",Object(d.jsx)("input",{required:!0,list:"teams",name:"winner",id:"winner",value:t.winner,onChange:function(t){return e.setWinnerInfo(t.target.value,n)}}),Object(d.jsxs)("datalist",{id:"teams",children:[Object(d.jsx)("option",{hidden:!0,value:""}),e.Teams.map((function(t,n){return Object(d.jsx)("option",{value:e.Teams[n].team,children:e.Teams[n].team},n)}))]})]}),Object(d.jsxs)("label",{children:[" Loser -",Object(d.jsx)("input",{list:"teams",name:"loser",id:"loser",value:t.loser,onChange:function(t){return e.setLoserInfo(t.target.value,n)}}),Object(d.jsxs)("datalist",{id:"teams",children:[Object(d.jsx)("option",{hidden:!0}),e.Teams.map((function(t,n){return Object(d.jsx)("option",{value:e.Teams[n].team,children:e.Teams[n].team},n)}))]})]}),Object(d.jsxs)("label",{children:[" Score",Object(d.jsx)("input",{type:"text",onChange:function(t){return e.setWinnerRuns(t.target.value,n)}}),"-",Object(d.jsx)("input",{type:"text",onChange:function(t){return e.setLoserRuns(t.target.value,n)}})]}),Object(d.jsxs)("label",{children:[" Venue",Object(d.jsxs)("select",{name:"venue",id:"venue",defaultValue:"",onChange:function(t){return e.setVenue(t.target.value,n)},children:[Object(d.jsx)("option",{hidden:!0}),Object(d.jsx)("option",{children:" American Family Field "}),Object(d.jsx)("option",{children:" Angel Stadium "}),Object(d.jsx)("option",{children:" Busch Stadium "}),Object(d.jsx)("option",{children:" Camden Yards "}),Object(d.jsx)("option",{children:" Chase Field "}),Object(d.jsx)("option",{children:" Citi Field"}),Object(d.jsx)("option",{children:" Citizens Bank Park"}),Object(d.jsx)("option",{children:" Comerica Park"}),Object(d.jsx)("option",{children:" Coors Field "}),Object(d.jsx)("option",{children:" Dodger Stadium "}),Object(d.jsx)("option",{children:" Fenway Park"}),Object(d.jsx)("option",{children:" Globe Life Field"}),Object(d.jsx)("option",{children:" Great American Ball Park"}),Object(d.jsx)("option",{children:" Guaranteed Rate Field"}),Object(d.jsx)("option",{children:" Kauffman Stadium"}),Object(d.jsx)("option",{children:" loanDepot Park"}),Object(d.jsx)("option",{children:" Minute Maid Park"}),Object(d.jsx)("option",{children:" Nationals Park"}),Object(d.jsx)("option",{children:" Oakland Coliseum"}),Object(d.jsx)("option",{children:" Oracle Park"}),Object(d.jsx)("option",{children:" Petco Park"}),Object(d.jsx)("option",{children:" PNC Park"}),Object(d.jsx)("option",{children:" Progressive Field"}),Object(d.jsx)("option",{children:" Rogers Centre"}),Object(d.jsx)("option",{children:" T-Mobile Park"}),Object(d.jsx)("option",{children:" Target Field"}),Object(d.jsx)("option",{children:" Tropicana Field"}),Object(d.jsx)("option",{children:" Truist Park"}),Object(d.jsx)("option",{children:" Wrigley Field"}),Object(d.jsx)("option",{children:" Yankee Stadium"})]})]}),Object(d.jsx)(R,{handleEvent:function(t){return e.removeGame(t)},index:n,children:" Remove "}),Object(d.jsx)(R,{handleEvent:function(t){return e.swapMatchup(t)},index:n,children:" Swap "})]},n)}))})};var L=Object(N.b)((function(e){return{MLBTeams:e.FranchiseReducer,Games:e.GamesReducer,Date:e.DateReducer.date}}),(function(e){return{addFranchise:function(t){return e({type:"ADD_FRANCHISE",payload:t})},addGame:function(){return e({type:"ADD_GAME",payload:{winner:"",loser:"",winnerRuns:null,loserRuns:null,venue:""}})},removeGame:function(t){return e({type:"REMOVE_GAME",index:t})},swapMatchup:function(t){return e({type:"SWAP_MATCHUP",index:t})},setWinnerInfo:function(t,n){return e({type:"SET_WINNER_INFO",payload:t,index:n})},setLoserInfo:function(t,n){return e({type:"SET_LOSER_INFO",payload:t,index:n})},setWinnerRuns:function(t,n){return e({type:"SET_WINNER_RUNS",payload:t,index:n})},setLoserRuns:function(t,n){return e({type:"SET_LOSER_RUNS",payload:t,index:n})},setVenue:function(t,n){return e(function(e,t){return{type:"SET_VENUE",payload:e,index:t}}(t,n))},setDate:function(t){return e(function(e){return{type:"SET_DATE",payload:e}}(t))},getGames:function(){return e({type:"GET_GAMES"})}}}))((function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],s=e.addFranchise;function i(){var t=e.Date.split("-"),n=Object(w.a)(t),c=n[0],a=n.slice(1);return a=[a=a.join("-"),"-"].concat(Object(o.a)(c)).join("")}return Object(c.useEffect)((function(){fetch("https://api-mlb.herokuapp.com").then((function(e){return e.json()})).then((function(e){s(e)}))}),[s]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("input",{required:!0,type:"text",placeholder:(new Date).toISOString().split("T")[0],onFocus:function(e){return e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},onChange:function(t){return function(t){t.preventDefault(),e.setDate(t.target.value)}(t)}}),0===e.Games.length?Object(d.jsx)("div",{children:" No game data "}):Object(d.jsx)(_,{Games:e.Games,Teams:e.MLBTeams,setWinnerInfo:e.setWinnerInfo,setLoserInfo:e.setLoserInfo,setWinnerRuns:e.setWinnerRuns,setLoserRuns:e.setLoserRuns,setVenue:e.setVenue,removeGame:e.removeGame,swapMatchup:e.swapMatchup}),Object(d.jsx)(R,{handleEvent:e.addGame,children:" Enter another game "}),Object(d.jsx)(R,{handleEvent:function(){return r(!a)},children:"Toggle output"}),a?e.Games.map((function(t,n){if(""!==t.winner&&""!==t.loser){var c=function(t,n){var c=1,a=(c=e.MLBTeams.filter((function(e){return e.team===t||e.team===n?e:null})))[0].league===c[1].league?0:1;return[a,function(){return a?0:c[0].division===c[1].division?1:0}]}(t.winner,t.loser),a=Object(l.a)(c,2),r=a[0],s=a[1];return Object(d.jsxs)(C,{children:[t.winner," vs ",t.loser,", ",t.venue,", ",i(),",\xa0",t.winnerRuns,", ",t.loserRuns,", 0, ",s(),",\xa0",r,","]},n)}})):function(){return e.getGames}]})})),G=n(30),B=new Date,F=Object(G.a)({FranchiseReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FRANCHISE":return Object(o.a)(t.payload);default:return e}},GamesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.slice();switch(t.type){case"ADD_GAME":return[].concat(Object(o.a)(e),[t.payload]);case"REMOVE_GAME":var c=e.slice(0,t.index),a=e.slice(t.index+1);return c=c.concat(a);case"SWAP_MATCHUP":var r=n[t.index].winner;return n[t.index].winner=n[t.index].loser,n[t.index].loser=r,Object(o.a)(n);case"SET_WINNER_INFO":return n[t.index].winner=t.payload,Object(o.a)(n);case"SET_LOSER_INFO":return n[t.index].loser=t.payload,Object(o.a)(n);case"SET_WINNER_RUNS":return n[t.index].winnerRuns=t.payload,Object(o.a)(n);case"SET_LOSER_RUNS":return n[t.index].loserRuns=t.payload,Object(o.a)(n);case"SET_VENUE":return n[t.index].venue=t.payload,Object(o.a)(n);case"GET_GAMES":default:return e}},DateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{date:B.toISOString().split("T")[0]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return Object.assign({},{date:t.payload});default:return e}}}),I=Object(G.b)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var D=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(v.a,{basename:"/",children:[Object(d.jsxs)(y.a,{expand:"xxl",bg:"light",children:[Object(d.jsx)(y.a.Toggle,{}),Object(d.jsx)(y.a.Collapse,{className:"nav-collapse",children:Object(d.jsxs)(T.a,{children:[Object(d.jsx)(T.a.Link,{as:v.b,to:"/",children:" Standings "}),Object(d.jsx)(T.a.Link,{as:v.b,to:"/games",children:" Final Scores "})]})})]}),Object(d.jsxs)(k.c,{children:[Object(d.jsx)(k.a,{exact:!0,path:"/",children:Object(d.jsx)(g,{})}),Object(d.jsx)(k.a,{path:"/games",children:Object(d.jsx)(S,{})}),Object(d.jsx)(k.a,{path:"/admin",children:Object(d.jsx)(N.a,{store:I,children:Object(d.jsx)(L,{})})})]})]})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.a1aa7a8f.chunk.js.map