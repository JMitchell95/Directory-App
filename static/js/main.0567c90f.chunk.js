(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{60:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(23),s=c.n(r),i=(c(35),c(24)),l=c(25),o=c(30),a=c(29),j=c(1);var d=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(j.jsx)("div",{className:t,children:e.children})},h=function(){return Object(j.jsxs)("div",{style:{height:100,clear:"both",paddingTop:30,textAlign:"center"},className:"jumbotron border border-success",children:[Object(j.jsx)("h5",{children:"Employee Directory"}),Object(j.jsx)("div",{children:"Sorting Feature Coming Soon!"})]})};var u=function(e){return Object(j.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var b=function(e){return Object(j.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var p=function(e){return Object(j.jsxs)("table",{class:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"PhotoID"}),Object(j.jsx)("th",{scope:"col",children:"First"}),Object(j.jsx)("th",{scope:"col",children:"Last"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(j.jsx)("tbody",{children:e.results&&e.results.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{class:"img",src:e.picture.large})}),Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.phone})]})}))})]})},O=c(26),x=c.n(O),m=function(){return x.a.get("https://randomuser.me/api/?results=20")},f=function(e){Object(o.a)(c,e);var t=Object(a.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employee:""},e.renderEmployee=function(){m().then((function(t){return console.log(t.data.results),e.setState({employee:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.renderEmployee()}},{key:"render",value:function(){return Object(j.jsx)(u,{children:Object(j.jsxs)(b,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(d,{size:"md-9",children:Object(j.jsx)(p,{results:this.state.employee})})]})})}}]),c}(n.Component),v=c(27),y=c(2);var g=function(){return Object(j.jsx)(v.a,{children:Object(j.jsx)(y.c,{children:Object(j.jsx)(y.a,{exact:!0,path:"/",component:f})})})};s.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0567c90f.chunk.js.map