(this["webpackJsonpmlb-standings"]=this["webpackJsonpmlb-standings"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),s=n.n(r),i=(n(70),n(71),n(7)),o=n(11),l=n(2),j=n(41),u=n.n(j),d=n(56),b=n(4),O=n(57),p=n(1);var h=function(e){var t=e.gamesBack.toFixed(1);return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.team}),Object(p.jsx)("td",{children:e.wins}),Object(p.jsx)("td",{children:e.losses}),Object(p.jsx)("td",{children:e.pct.toFixed(3)}),Object(p.jsx)("td",{children:t<.5?"-":t}),Object(p.jsx)("td",{children:e.streak})]})},x=n(8),m=n(58),f=n.n(m),v=n(60);n(94);function g(e){var t=e.queryYear,n=e.setQueryYear,c=new Date;return Object(p.jsxs)("div",{id:"year-input",children:[Object(p.jsx)("label",{htmlFor:"year-input",children:"Select year"}),Object(p.jsx)("input",{type:"number","data-testid":"year-select",defaultValue:t,min:Number(2021),value:t,max:Number(c.getFullYear()),onChange:function(e){return n(e.target.value)}})]})}var w,k=function(){var e=a.a.useState((new Date).getFullYear()),t=Object(b.a)(e,2);return{queryYear:t[0],setQueryYear:t[1]}},y=a.a.createContext(),E=function(){var e=Object(c.useContext)(y);if(void 0===e)throw new Error("QueryYearContext must be used within a QueryYearContext Provider");return e},S=function(e){var t=e.children,n=k(),c=n.queryYear,r=n.setQueryYear,s=a.a.useMemo((function(){return[c,r]}),[c,r]);return Object(p.jsx)(y.Provider,{value:s,children:t})},C=n(59),R=n.n(C),T=v.a.div(w||(w=Object(O.a)(["\n    margin: 0 auto;\n    padding-top: 1%;\n    padding-bottom: 1%;\n\n    & table {\n        margin-top: 0px;\n        margin-bottom: 0px;\n    }\n\n    & table:nth-child(2) {\n        margin-top: 1%;\n    }\n\n    & table > thead > tr > th {\n        background-color: #bf0d3e;\n        color: white;\n        padding-left: 25px;\n    }\n\n    & table:nth-child(2) > thead > tr > th {\n        background-color: #041e42;\n    }\n"])));var N=function(){var e=Object(c.useState)({american:[],national:[]}),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({american:{pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1},national:{pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1}}),s=Object(b.a)(r,2),j=s[0],O=s[1],m=Object(c.useState)(!0),v=Object(b.a)(m,2),w=v[0],k=v[1],y=E(),S=Object(b.a)(y,2),C=S[0],N=S[1];function _(e,t){e=e.map((function(e){return Object(p.jsx)(h,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),"american"===t&&a((function(t){return Object(l.a)(Object(l.a)({},t),{},{american:e})})),"national"===t&&a((function(t){return Object(l.a)(Object(l.a)({},t),{},{national:e})}))}function L(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.wins-e.props.wins})),j["".concat(e)].wins||t.reverse(),O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},"".concat(e),Object(l.a)(Object(l.a)({},t["".concat(e)]),{},{wins:!t["".concat(e)].wins,losses:!t["".concat(e)].losses,gamesBack:!t["".concat(e)].gamesBack})))})),_(t,e)}function G(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.losses-e.props.losses})),j["".concat(e)].losses||t.reverse(),O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},"".concat(e),Object(l.a)(Object(l.a)({},t["".concat(e)]),{},{losses:!t["".concat(e)].losses,wins:t["".concat(e)].losses,pct:t["".concat(e)].losses})))})),_(t,e)}function I(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.pct-e.props.pct})),j["".concat(e)].pct||t.reverse(),O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},"".concat(e),Object(l.a)(Object(l.a)({},t["".concat(e)]),{},{pct:!t["".concat(e)].pct,losses:!t["".concat(e)].losses,gamesBack:!t["".concat(e)].gamesBack})))})),_(t,e)}function B(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(e,t){return t.props.gamesBack-e.props.gamesBack})),j["".concat(e)].gamesBack||t.reverse(),O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},"".concat(e),Object(l.a)(Object(l.a)({},t["".concat(e)]),{},{gamesBack:!t["".concat(e)].gamesBack,wins:t["".concat(e)].gamesBack,pct:t["".concat(e)].gamesBack})))})),_(t,e)}function F(e){var t=Object(o.a)(n["".concat(e)]);t=t.sort((function(t,n){return j["".concat(e)].team?t.props.team.localeCompare(n.props.team):n.props.team.localeCompare(t.props.team)})),O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},"".concat(e),Object(l.a)(Object(l.a)({},t["".concat(e)]),{},{team:!t["".concat(e)].team})))})),_(t,e)}return Object(c.useEffect)((function(){var e,t=new AbortController;return function(){var n=Object(d.a)(u.a.mark((function n(){var c,r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.next=3,R.a.get("https://api-mlb.herokuapp.com/?season=".concat(C),{signal:t.signal});case 3:200===(c=n.sent).status?(e=(e=c.data.map((function(e){return Object(p.jsx)(h,{teamId:e.teamId,team:e.team,league:e.league,record:e.record,wins:e.wins,losses:e.losses,pct:e.pct,gamesBack:e.gamesBack,streak:e.streak},e.teamId)}))).sort((function(e,t){return e.props.league-t.props.league})),r=e.slice(0,15),s=e.slice(-15),a({american:r,national:s}),k(!1)):k(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){t.abort()}}),[C]),Object(p.jsx)(T,{children:w?Object(p.jsxs)("div",{style:{marginTop:"5%"},children:[" Loading ",Object(p.jsx)(f.a,{color:"black",height:60})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{queryYear:C,setQueryYear:N}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("th",{colSpan:"6",children:"American League"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["Team",Object(p.jsxs)("button",{onClick:function(){return F("american")},children:[j.american.team?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})," "]})]}),Object(p.jsxs)("td",{children:["Wins ",Object(p.jsxs)("button",{onClick:function(){return L("american")},children:[" ",j.american.wins?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Losses ",Object(p.jsxs)("button",{onClick:function(){return G("american")},children:[" ",j.american.losses?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Win % ",Object(p.jsxs)("button",{onClick:function(){return I("american")},children:[" ",j.american.pct?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Games Back ",Object(p.jsxs)("button",{onClick:function(){return B("american")},children:[" ",j.american.gamesBack?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})," "]}),Object(p.jsx)("td",{children:"Streak"})]}),n.american]})]}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("th",{colSpan:"6",children:"National League"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["Team",Object(p.jsxs)("button",{onClick:function(){return F("national")},children:[j.national.team?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})," "]})]}),Object(p.jsxs)("td",{children:["Wins ",Object(p.jsxs)("button",{onClick:function(){return L("national")},children:[" ",j.national.wins?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Losses ",Object(p.jsxs)("button",{onClick:function(){return G("national")},children:[" ",j.national.losses?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Win % ",Object(p.jsxs)("button",{onClick:function(){return I("national")},children:[" ",j.national.pct?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})]}),Object(p.jsxs)("td",{children:["Games Back ",Object(p.jsxs)("button",{onClick:function(){return B("national")},children:[" ",j.national.gamesBack?Object(p.jsx)(x.b,{}):Object(p.jsx)(x.a,{})]})," "]}),Object(p.jsx)("td",{children:"Streak"})]}),n.national]})]})]})})},_=n(34),L=n(6),G=n(29);var I=function(e){var t=e.props,n=t.date.split("T")[0].split("-"),c=Object(G.a)(n),a=c[0],r=c.slice(1);return Object(p.jsxs)("div",{className:"game-container",children:[Object(p.jsxs)("div",{className:"stadium-date-container",children:[Object(p.jsxs)("div",{children:[" ",t.stadium," "]}),Object(p.jsxs)("div",{children:[" ",r.join("/").concat("/",a)," "]})]}),Object(p.jsxs)("div",{className:"info-container",children:[Object(p.jsxs)("div",{className:"left",children:[" ",t.winner]}),Object(p.jsx)("div",{children:" vs "}),Object(p.jsxs)("div",{className:"right",children:[" ",t.loser,"  "]})]}),Object(p.jsxs)("div",{className:"info-container",children:[Object(p.jsxs)("div",{className:"left",children:[" ",t.winnerRuns," "]}),Object(p.jsx)("div",{children:" - "}),Object(p.jsxs)("div",{className:"right",children:[" ",t.loserRuns," "]})]})]})};var B=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(b.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(),j=Object(b.a)(l,2),u=j[0],d=j[1],O=Object(c.useState)(0),h=Object(b.a)(O,2),x=h[0],m=h[1],f=E(),v=Object(b.a)(f,2),w=v[0],k=v[1],y=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=[];fetch("https://api-mlb.herokuapp.com/regular-season/page?number=".concat(x,"&season=").concat(w),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e=t.result.map((function(e,t){return{key:t,date:e.date,stadium:e.stadium,winner:e.winner.name,winnerRuns:e.winner.runs,loser:e.loser.name,loserRuns:e.loser.runs}})),y.current=t.pages,a(Array.from(e)),d(Array.from(e)),o(!1)}))}),[x,w]),Object(p.jsx)("div",{children:i?Object(p.jsx)("div",{children:" loading "}):Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{queryYear:w,setQueryYear:k}),Object(p.jsx)("input",{onChange:function(e){if(e.target.value){var t=u.filter((function(t){return t.winner.toLowerCase().includes(e.target.value.toLowerCase())||t.loser.toLowerCase().includes(e.target.value.toLowerCase())||t.stadium.toLowerCase().includes(e.target.value.toLowerCase())||t.date.toLowerCase().includes(e.target.value.toLowerCase())?t:null}));return a(t)}return a(u)},placeholder:"Search for Teams, Stadiums or dates (mm-dd)"}),Object(p.jsx)("div",{className:"layout-container",children:n.map((function(e,t){return Object(p.jsx)(I,{props:e},t)}))}),Object(p.jsxs)("div",{className:"page-bar",children:[Object(p.jsxs)("button",{onClick:function(){return x?m((function(e){return e-1})):0},children:[" ",Object(p.jsx)("strong",{children:" Go back "})," "]}),Object(p.jsxs)("div",{className:"page-number",children:[" Page ",x+1," out of ",y.current+1," "]}),Object(p.jsxs)("button",{onClick:function(){return x===y.current?null:m((function(e){return e+1}))},children:[" ",Object(p.jsx)("strong",{children:" Next page "})," "]})]})]})})},F=n(35),A=n(36),D=n(30),M=function(e){return Object(p.jsx)("button",{type:"button",onClick:function(){return e.handleEvent(e.index)},children:e.children})},P=function(e){return Object(p.jsx)("div",{children:e.children})};var W=function(e){return Object(p.jsx)("div",{children:e.Games.map((function(t,n){return Object(p.jsxs)("form",{children:[Object(p.jsxs)("label",{children:[" Winner",Object(p.jsx)("input",{required:!0,list:"teams",name:"winner",id:"winner",value:t.winner,onChange:function(t){return e.setWinnerInfo(t.target.value,n)}}),Object(p.jsxs)("datalist",{id:"teams",children:[Object(p.jsx)("option",{hidden:!0,value:""}),e.Teams.map((function(t,n){return Object(p.jsx)("option",{value:e.Teams[n].team,children:e.Teams[n].team},n)}))]})]}),Object(p.jsxs)("label",{children:[" Loser -",Object(p.jsx)("input",{list:"teams",name:"loser",id:"loser",value:t.loser,onChange:function(t){return e.setLoserInfo(t.target.value,n)}}),Object(p.jsxs)("datalist",{id:"teams",children:[Object(p.jsx)("option",{hidden:!0}),e.Teams.map((function(t,n){return Object(p.jsx)("option",{value:e.Teams[n].team,children:e.Teams[n].team},n)}))]})]}),Object(p.jsxs)("label",{children:[" Score",Object(p.jsx)("input",{type:"text",value:null===t||void 0===t?void 0:t.winnerRuns,onChange:function(t){return e.setWinnerRuns(t.target.value,n)}}),"-",Object(p.jsx)("input",{type:"text",value:null===t||void 0===t?void 0:t.loserRuns,onChange:function(t){return e.setLoserRuns(t.target.value,n)}})]}),Object(p.jsxs)("label",{children:[" Venue",Object(p.jsxs)("select",{name:"venue",id:"venue",defaultValue:null===t||void 0===t?void 0:t.venue,onChange:function(t){return e.setVenue(t.target.value,n)},children:[Object(p.jsx)("option",{hidden:!0}),Object(p.jsx)("option",{children:" American Family Field "}),Object(p.jsx)("option",{children:" Angel Stadium "}),Object(p.jsx)("option",{children:" Busch Stadium "}),Object(p.jsx)("option",{children:" Camden Yards "}),Object(p.jsx)("option",{children:" Chase Field "}),Object(p.jsx)("option",{children:" Citi Field"}),Object(p.jsx)("option",{children:" Citizens Bank Park"}),Object(p.jsx)("option",{children:" Comerica Park"}),Object(p.jsx)("option",{children:" Coors Field "}),Object(p.jsx)("option",{children:" Dodger Stadium "}),Object(p.jsx)("option",{children:" Fenway Park"}),Object(p.jsx)("option",{children:" Globe Life Field"}),Object(p.jsx)("option",{children:" Great American Ball Park"}),Object(p.jsx)("option",{children:" Guaranteed Rate Field"}),Object(p.jsx)("option",{children:" Kauffman Stadium"}),Object(p.jsx)("option",{children:" loanDepot Park"}),Object(p.jsx)("option",{children:" Minute Maid Park"}),Object(p.jsx)("option",{children:" Nationals Park"}),Object(p.jsx)("option",{children:" Oakland Coliseum"}),Object(p.jsx)("option",{children:" Oracle Park"}),Object(p.jsx)("option",{children:" Petco Park"}),Object(p.jsx)("option",{children:" PNC Park"}),Object(p.jsx)("option",{children:" Progressive Field"}),Object(p.jsx)("option",{children:" Rogers Centre"}),Object(p.jsx)("option",{children:" T-Mobile Park"}),Object(p.jsx)("option",{children:" Target Field"}),Object(p.jsx)("option",{children:" Tropicana Field"}),Object(p.jsx)("option",{children:" Truist Park"}),Object(p.jsx)("option",{children:" Wrigley Field"}),Object(p.jsx)("option",{children:" Yankee Stadium"})]})]}),Object(p.jsx)(M,{handleEvent:function(t){return e.removeGame(t)},index:n,children:" Remove "}),Object(p.jsx)(M,{handleEvent:function(t){return e.swapMatchup(t)},index:n,children:" Swap "})]},n)}))})};var Y=Object(D.b)((function(e){return{MLBTeams:e.FranchiseReducer,Games:e.GamesReducer,Date:e.DateReducer.date}}),(function(e){return{addFranchise:function(t){return e({type:"ADD_FRANCHISE",payload:t})},addGame:function(){return e({type:"ADD_GAME",payload:{winner:"",loser:"",winnerRuns:null,loserRuns:null,venue:""}})},removeGame:function(t){return e({type:"REMOVE_GAME",index:t})},swapMatchup:function(t){return e({type:"SWAP_MATCHUP",index:t})},setWinnerInfo:function(t,n){return e((c=t,a=n,console.log(c,a),{type:"SET_WINNER_INFO",payload:c,index:a}));var c,a},setLoserInfo:function(t,n){return e({type:"SET_LOSER_INFO",payload:t,index:n})},setWinnerRuns:function(t,n){return e({type:"SET_WINNER_RUNS",payload:t,index:n})},setLoserRuns:function(t,n){return e({type:"SET_LOSER_RUNS",payload:t,index:n})},setVenue:function(t,n){return e(function(e,t){return{type:"SET_VENUE",payload:e,index:t}}(t,n))},setDate:function(t){return e(function(e){return{type:"SET_DATE",payload:e}}(t))},getGames:function(){return e({type:"GET_GAMES"})}}}))((function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(),i=Object(b.a)(s,2),l=i[0],j=i[1],u=Object(c.useState)(),d=Object(b.a)(u,2),O=d[0],h=d[1];console.log(l),Object(c.useEffect)((function(){console.log("asdf");l&&null!==l.name&&function(){var e=l,t=new FileReader;t.onload=function(e){var t=e.target.result;h(t)},t.readAsText(e)}()}),[l]),console.log(e),Object(c.useEffect)((function(){O&&0!==O.length&&O.split("\n").map((function(t,n){e.addGame(),console.log(n);var c=t.split(" vs ").join(", ").split(",");e.setWinnerInfo(c[0],n),e.setLoserInfo(c[1].trimStart().trimEnd(),n),e.setVenue(c[2].trimStart().trimEnd(),n),e.setWinnerRuns(Number(c[4]),n),e.setLoserRuns(Number(c[5]),n)}))}),[O]);var x=e.addFranchise;function m(){var t=e.Date.split("-"),n=Object(G.a)(t),c=n[0],a=n.slice(1);return a=[a=a.join("-"),"-"].concat(Object(o.a)(c)).join("")}return Object(c.useEffect)((function(){fetch("https://api-mlb.herokuapp.com?season=2022").then((function(e){return e.json()})).then((function(e){x(e)}))}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("input",{type:"file",placeholder:"import",accept:".csv",onChange:function(e){return j(e.target.files[0])}}),Object(p.jsx)("input",{required:!0,type:"text",placeholder:(new Date).toISOString().split("T")[0],onFocus:function(e){return e.currentTarget.type="date"},onBlur:function(e){return e.currentTarget.type="text"},onChange:function(t){return function(t){t.preventDefault(),e.setDate(t.target.value)}(t)}}),0===e.Games.length?Object(p.jsx)("div",{children:" No game data "}):Object(p.jsx)(W,{Games:e.Games,Teams:e.MLBTeams,setWinnerInfo:e.setWinnerInfo,setLoserInfo:e.setLoserInfo,setWinnerRuns:e.setWinnerRuns,setLoserRuns:e.setLoserRuns,setVenue:e.setVenue,removeGame:e.removeGame,swapMatchup:e.swapMatchup}),Object(p.jsx)(M,{handleEvent:e.addGame,children:" Enter another game "}),Object(p.jsx)(M,{handleEvent:function(){return r(!a)},children:"Toggle output"}),a?e.Games.map((function(t,n){if(""===t.winner||""===t.loser)return null;var c=function(t,n){var c=1,a=(c=e.MLBTeams.filter((function(e){return e.team===t||e.team===n?e:null})))[0].league===c[1].league?0:1;return[a,function(){return a?0:c[0].division===c[1].division?1:0}]}(t.winner,t.loser),a=Object(b.a)(c,2),r=a[0],s=a[1];return Object(p.jsxs)(P,{children:[t.winner," vs ",t.loser,", ",t.venue,", ",m(),",\xa0",t.winnerRuns,", ",t.loserRuns,", 0, ",s(),",\xa0",r,","]},n)})):function(){return e.getGames}]})})),V=n(32),U=new Date,q=Object(V.a)({FranchiseReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FRANCHISE":return Object(o.a)(t.payload);default:return e}},GamesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.slice();switch(t.type){case"ADD_GAME":return[].concat(Object(o.a)(e),[t.payload]);case"REMOVE_GAME":var c=e.slice(0,t.index),a=e.slice(t.index+1);return c=c.concat(a);case"SWAP_MATCHUP":var r=n[t.index].winner;return n[t.index].winner=n[t.index].loser,n[t.index].loser=r,Object(o.a)(n);case"SET_WINNER_INFO":return n[t.index].winner=t.payload,Object(o.a)(n);case"SET_LOSER_INFO":return n[t.index].loser=t.payload,Object(o.a)(n);case"SET_WINNER_RUNS":return n[t.index].winnerRuns=t.payload,Object(o.a)(n);case"SET_LOSER_RUNS":return n[t.index].loserRuns=t.payload,Object(o.a)(n);case"SET_VENUE":return n[t.index].venue=t.payload,Object(o.a)(n);case"GET_GAMES":default:return e}},DateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{date:U.toISOString().split("T")[0]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":return Object.assign({},{date:t.payload});default:return e}}}),Q=Object(V.b)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var H=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(S,{children:Object(p.jsxs)(_.a,{basename:"/",children:[Object(p.jsxs)(F.a,{expand:"xxl",bg:"light",children:[Object(p.jsx)(F.a.Toggle,{}),Object(p.jsx)(F.a.Collapse,{className:"nav-collapse",children:Object(p.jsxs)(A.a,{children:[Object(p.jsx)(A.a.Link,{as:_.b,to:"/",children:" Standings "}),Object(p.jsx)(A.a.Link,{as:_.b,to:"/games",children:" Final Scores "})]})})]}),Object(p.jsxs)(L.c,{children:[Object(p.jsx)(L.a,{exact:!0,path:"/",children:Object(p.jsx)(N,{})}),Object(p.jsx)(L.a,{path:"/games",children:Object(p.jsx)(B,{})}),Object(p.jsx)(L.a,{path:"/admin",children:Object(p.jsx)(D.a,{store:Q,children:Object(p.jsx)(Y,{})})})]})]})})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))},70:function(e,t,n){},71:function(e,t,n){},94:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.73f8b0fe.chunk.js.map