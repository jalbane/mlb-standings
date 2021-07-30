(this["webpackJsonpmlb-standings"]=this["webpackJsonpmlb-standings"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(10),r=c.n(a),o=(c(16),c(17),c(4)),j=c(9),i=c(7),p=c(0);var b=function(e){var t=e.gamesBack.toFixed(1);return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.team}),Object(p.jsx)("td",{children:e.record}),Object(p.jsx)("td",{children:e.wins}),Object(p.jsx)("td",{children:e.losses}),Object(p.jsx)("td",{children:e.pct.toFixed(3)}),Object(p.jsx)("td",{children:t<.5?"-":t}),Object(p.jsx)("td",{children:e.streak})]})},d=c(3),u=c(11),l=c.n(u);var O=function(e){var t=Object(s.useState)([]),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)({pct:!0,gamesBack:!0,wins:!0,losses:!0,team:!1}),u=Object(i.a)(r,2),O=u[0],m=u[1],x=Object(s.useState)(!0),h=Object(i.a)(x,2),g=h[0],f=h[1];function k(e){var t,c=Object(j.a)(n);c=c.sort((function(t,c){return O["".concat(e)]?c.props["".concat(e)]-t.props["".concat(e)]:t.props["".concat(e)]-c.props["".concat(e)]})),"pct"===e&&(t=O["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{pct:!t})}))),"gamesBack"===e&&(t=O["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{gamesBack:!t})}))),"wins"===e&&(t=O["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{wins:!t})}))),"losses"===e&&(t=O["".concat(e)],m((function(e){return Object(o.a)(Object(o.a)({},e),{},{losses:!t})}))),c=c.map((function(e){return Object(p.jsx)(b,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),a(c)}return Object(s.useEffect)((function(){fetch("https://api-mlb.herokuapp.com/league/".concat(e.league),{method:"GET",accept:"*/*"}).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(p.jsx)(b,{teamId:e.teamId,team:e.team,league:e.league,record:e.summary.record,wins:e.summary.wins,losses:e.summary.losses,pct:e.summary.pct,gamesBack:e.summary.gamesBack,streak:e.summary.streak},e.teamId)}));a(t),f(!1)}))}),[]),Object(p.jsx)("div",{children:g?Object(p.jsxs)("div",{style:{marginBottom:"15%"},children:[" Loading ",Object(p.jsx)(l.a,{type:"Revolvingdots",height:40})]}):Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:0===e.league?Object(p.jsx)("th",{colspan:"7",children:"American League"}):Object(p.jsx)("th",{colspan:"7",children:"National League"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[" Team ",Object(p.jsxs)("button",{onClick:function(){var e=Object(j.a)(n);e=e.sort((function(e,t){return O.team?e.props.team.localeCompare(t.props.team):t.props.team.localeCompare(e.props.team)}));var t=O.team;m((function(e){return Object(o.a)(Object(o.a)({},e),{},{team:!t})})),e=e.map((function(e){return Object(p.jsx)(b,{teamId:e.props.teamId,team:e.props.team,league:e.props.league,record:e.props.record,wins:e.props.wins,losses:e.props.losses,pct:e.props.pct,gamesBack:e.props.gamesBack,streak:e.props.streak},e.props.teamId)})),a(e)},children:[O.team?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})," "]})]}),Object(p.jsx)("td",{children:"Record"}),Object(p.jsxs)("td",{children:["Wins ",Object(p.jsxs)("button",{onClick:function(){return k("wins")},children:[" ",O.wins?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})]})]}),Object(p.jsxs)("td",{children:["Losses ",Object(p.jsxs)("button",{onClick:function(){return k("losses")},children:[" ",O.losses?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})]})]}),Object(p.jsxs)("td",{children:["Win % ",Object(p.jsxs)("button",{onClick:function(){return k("pct")},children:[" ",O.pct?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})]})]}),Object(p.jsxs)("td",{children:["Games Back ",Object(p.jsxs)("button",{onClick:function(){return k("gamesBack")},children:[" ",O.gamesBack?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})]})," "]}),Object(p.jsx)("td",{children:"Streak"})]}),n]})]})})};var m=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h3",{children:" MLB Standings "}),Object(p.jsx)(O,{league:0}),Object(p.jsx)(O,{league:1})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),x()}},[[39,1,2]]]);
//# sourceMappingURL=main.90263e26.chunk.js.map