(window.webpackJsonponboarding=window.webpackJsonponboarding||[]).push([[0],{112:function(e,a,t){e.exports=t(272)},117:function(e,a,t){},271:function(e,a,t){},272:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(106),l=t.n(s),c=(t(117),t(111)),o=t(107),m=t.n(o),i=t(12),u=t(20),d=Object(i.c)({mapPropsToValues:function(e){return{name:e.name||"",email:e.email||"",password:e.password||"",terms:e.terms||!1}},validationSchema:u.object().shape({name:u.string().required("name required"),email:u.string().required("email required"),password:u.string().required("password required"),terms:u.string().required("terms and condition required")}),handleSubmit:function(e,a){var t=a.setStatus;m.a.post("https://reqres.in/api/users",e).then((function(e){t(e.data),console.log(e)})).catch((function(e){return console.log(e.response)}))}})((function(e){var a=e.errors,t=e.touched,s=e.values,l=e.status,o=Object(n.useState)([]),m=Object(c.a)(o,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){l&&d([l])}),[l]),r.a.createElement("div",{className:"formOne"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{id:"head"},r.a.createElement("span",{className:"color"},"Welcome ")," to ",r.a.createElement("span",{className:"school"},"Lambda School!")),r.a.createElement("p",null,"Sign up here.")),r.a.createElement(i.b,{className:"userform"},r.a.createElement("p",null,"Name:"),r.a.createElement(i.a,{className:"inputs",type:"text",name:"name"}),t.name&&a.name&&r.a.createElement("p",{className:"error"},a.name),r.a.createElement("p",null,"Email:"),r.a.createElement(i.a,{className:"inputs",type:"text",name:"email"}),t.email&&a.email&&r.a.createElement("p",{className:"error"},a.email),r.a.createElement("p",{className:"three"},"Password:"),r.a.createElement(i.a,{className:"inputs",type:"password",name:"password"}),t.password&&a.password&&r.a.createElement("p",{className:"error"},a.password),r.a.createElement("div",{className:"formTwo"},r.a.createElement("label",{className:"checkout-valid"},"Accept Terms & Conditions",r.a.createElement(i.a,{className:"checkbox",type:"checkbox",name:"users",checked:s.users}),r.a.createElement("span",{className:"checkmark"})),r.a.createElement("button",{className:"button",type:"submit"},"Sign up"))),u.map((function(e){return r.a.createElement("ul",{key:e.id},r.a.createElement("li",null,"Name: ",e.name),r.a.createElement("li",null,"Email: ",e.email),r.a.createElement("li",null,"Password: ",e.password))})))}));console.log("Error, try again!",d);var p=d;t(271);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.1ac67cc2.chunk.js.map