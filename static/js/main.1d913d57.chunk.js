(this["webpackJsonpmlb-standings"]=this["webpackJsonpmlb-standings"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(9),a=c.n(r),o=(c(14),c(15),c(3)),j=c(7),i=c(8),p=c(2),b=c(0);var d=function(e){var t=e.gamesBack.toFixed(1);return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.team}),Object(b.jsx)("td",{children:e.record}),Object(b.jsx)("td",{children:e.wins}),Object(b.jsx)("td",{children:e.losses}),Object(b.jsx)("td",{children:e.pct.toFixed(3)}),Object(b.jsx)("td",{children:t<.5?"-":t}),Object(b.jsx)("td",{children:e.streak})]})};var u=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)({pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1}),a=Object(i.a)(r,2),u=a[0],m=a[1];function l(e){var t,s=Object(j.a)(c);s=s.sort((function(t,c){return u["".concat(e)]?c.props["".concat(e)]-t.props["".concat(e)]:t.props["".concat(e)]-c.props["".concat(e)]})),"pct"===e&&(t=u["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{pct:!t})}))),"gamesBack"===e&&(t=u["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{gamesBack:!t})}))),"wins"===e&&(t=u["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{wins:!t})}))),"losses"===e&&(t=u["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{losses:!t})}))),s=s.map((function(e){return Object(b.jsx)(d,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),n(s)}return Object(s.useEffect)((function(){fetch("https://api-mlb.herokuapp.com/",{method:"GET",accept:"*/*"}).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(b.jsx)(d,{teamId:e.teamId,team:e.team,league:e.league,record:e.summary.record,wins:e.summary.wins,losses:e.summary.losses,pct:e.summary.pct,gamesBack:e.summary.gamesBack,streak:e.summary.streak},e.teamId)}));n(t)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[" Team ",Object(b.jsxs)("button",{onClick:function(){var e=Object(j.a)(c);e=e.sort((function(e,t){return u.team?e.props.team.localeCompare(t.props.team):t.props.team.localeCompare(e.props.team)}));var t=u.team;m((function(e){return Object(o.a)(Object(o.a)({},e),{},{team:!t})})),e=e.map((function(e){return Object(b.jsx)(d,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),n(e)},children:[u.team?Object(b.jsx)(p.b,{}):Object(b.jsx)(p.a,{})," "]})]}),Object(b.jsx)("td",{children:"Record"}),Object(b.jsxs)("td",{children:["Wins ",Object(b.jsxs)("button",{onClick:function(){return l("wins")},children:[" ",u.wins?Object(b.jsx)(p.b,{}):Object(b.jsx)(p.a,{})]})]}),Object(b.jsxs)("td",{children:["Losses ",Object(b.jsxs)("button",{onClick:function(){return l("losses")},children:[" ",u.losses?Object(b.jsx)(p.b,{}):Object(b.jsx)(p.a,{})]})]}),Object(b.jsxs)("td",{children:["Win % ",Object(b.jsxs)("button",{onClick:function(){return l("pct")},children:[" ",u.pct?Object(b.jsx)(p.b,{}):Object(b.jsx)(p.a,{})]})]}),Object(b.jsxs)("td",{children:["Games Back ",Object(b.jsxs)("button",{onClick:function(){return l("gamesBack")},children:[" ",u.gamesBack?Object(b.jsx)(p.b,{}):Object(b.jsx)(p.a,{})]})," "]}),Object(b.jsx)("td",{children:"Streak"})]})}),Object(b.jsx)("tbody",{children:c})]})})};var m=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h2",{children:" MLB Standings "}),Object(b.jsx)(u,{}),Object(b.jsx)("br",{})]})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),l()}},[[17,1,2]]]);
//# sourceMappingURL=main.1d913d57.chunk.js.map