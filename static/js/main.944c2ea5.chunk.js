(this.webpackJsonpuserDirectory2=this.webpackJsonpuserDirectory2||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(12),s=n.n(r),a=n(13),i=n(14),l=n(15),h=n(18),j=n(17),o=n(16),d=n.n(o),u=function(){return d.a.get("https://randomuser.me/api/?results=50&nat=us")},b=n(0);var m=function(e){return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Employee User Directory"})}),Object(b.jsxs)("form",{className:"row g-3",children:[Object(b.jsxs)("div",{className:"col-auto",children:[Object(b.jsx)("label",{className:"visually-hidden",children:"Search for Employee"}),Object(b.jsx)("input",{type:"text",value:e.search,onChange:e.input,name:"search",className:"form-control",id:"search",placeholder:"Search"})]}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Search"})})]})]})};var O=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("table",{style:{width:"100%"},children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Employee"}),Object(b.jsx)("th",{children:"First Name"}),Object(b.jsx)("th",{children:"Last Name"}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Location"})]}),e.children]})})},p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],filteredEmployees:[],search:"",sorted:"",error:""},e.handleInputChange=function(t){t.preventDefault();var n=t.target,c=n.name,r=n.value;e.setState(Object(a.a)({},c,r)),console.log(r)},e.handleSubmit=function(e,t){e.preventDefault()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){console.log(t),e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{search:this.state.search,input:this.handleInputChange}),Object(b.jsx)(O,{children:this.state.employees.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{alt:e.name.first,src:e.picture.thumbnail})}),Object(b.jsx)("td",{children:e.name.first}),Object(b.jsx)("td",{children:e.name.last}),Object(b.jsx)("td",{children:e.phone}),Object(b.jsx)("td",{children:e.email}),Object(b.jsxs)("td",{children:[e.location.city,"/",e.location.state]})]})}))})]})}}]),n}(c.Component);n(42),n(43);var x=function(){return Object(b.jsx)(p,{})};s.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.944c2ea5.chunk.js.map