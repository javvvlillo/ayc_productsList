(this.webpackJsonparomasycafelist=this.webpackJsonparomasycafelist||[]).push([[0],{30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(18),s=t.n(c),o=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),n(e),c(e),s(e),o(e)}))},r=t(11),l=[{id:"1",name:"Desayuno Dulce Amor",customers:"doble",items:["Muffin de chocolate rellenos con manjar","Profisteroles","Tartaleta frutos rojos","Galleta de mantequilla con forma de coraz\xf3n","S\xe1ndwich de miga jam\xf3n queso","Mini chocolates Sarotti","Macedonia de frutas","Panecillos para untar","Mantequilla","Manjar","T\xe9","Mermelada envase de vidrio","Jugo","Sobre de chocolate Lucaffe","taz\xf3n","vaso","cubiertos"]},{id:"2",name:"Desayuno Dulce Amor Con Oso de Peluche",customers:"simple",items:["Muffin de chocolate rellenos con manjar","Profisteroles","Tartaleta frutos rojos","Galletas de mantequeilla con forma de coraz\xf3n","S\xe1ndwich de miga jam\xf3n queso","Mini chocolates Sarotti","Macedonia de frutas","Panecillos para untar","Mantequilla","Manjar","T\xe9","Mermelada envase de vidrio","Jugo","Sobre de chocolate Lucaffe","taz\xf3n","vaso","cubiertos"]},{id:"3",name:"Desayuno Dulce Amor Con Oso de Peluche",customers:"doble",items:["Muffin de chocolate rellenos con manjar","Profisteroles","Tartaleta frutos rojos","Galletas de mantequeilla con forma de coraz\xf3n","S\xe1ndwich de miga jam\xf3n queso","Mini chocolates Sarotti","Macedonia de frutas","Panecillos para untar","Mantequilla","Manjar","T\xe9","Mermelada envase de vidrio","Jugo","Sobre de chocolate Lucaffe","taz\xf3n","vaso","cubiertos"]},{id:"4",name:"Desayuno Enamorados Saludable",customers:"simple",items:["Manqueue de vainilla o chocolate","Queque saludable","Sandwich en Pan pita integral","Frutos secos","Yogurt con mermelada de frambuesa","Fruta","mermeladas","Mantequilla","Panecillos para untar","Miel","T\xe9","Jugo natural org\xe1nico","cubiertos","taz\xf3n","vaso","cubiertos","taz\xf3n"]},{id:"5",name:"San Valent\xedn",customers:"simple",items:["Cupcake","Brownie","Galleta de mantequilla con forma de coraz\xf3n","Sandwich de miga","Chocolates SArotti","MAcedonia de Fruta","Panecillos para untar","Mantequilla","Manjar","Mermelada","T\xe9","Jugo","cubiertos","taz\xf3n","vaso","cubiertos","taz\xf3n"]}],i=t(9),u=t(1),d=function(e){var a=e.id,t=e.name,n=e.customers;e.items;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(u.jsx)("div",{className:"row no gutters",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title text-center",children:[" ",t," "]}),Object(u.jsxs)("p",{className:"card-text text-center",children:[" ",Object(u.jsxs)("small",{children:[" ",n," "]})]}),Object(u.jsx)(i.b,{to:"/".concat(a),children:"Informaci\xf3n"})]})})})})},m=function(){return Object(u.jsx)("div",{className:"card-columns",children:l.map((function(e){return Object(u.jsx)(d,Object(r.a)({},e),e.id)}))})},j=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:" Productos d\xeda de los enamorados "}),Object(u.jsx)("hr",{}),Object(u.jsx)(m,{})]})},b=t(2),h=t(8),f=t(12),O=function(e){return Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsxs)("h3",{children:[" Se deben realizar ",Object(u.jsxs)("strong",{children:[" ",e.lotes," "]})," lote(s) de desayunos "]})})},x=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(h.a)(a,2),c=t[0],s=t[1];return[c,function(e){var a=e.target;s(Object(r.a)(Object(r.a)({},c),{},Object(f.a)({},a.name,a.value)))},function(){s(e)}]}({number:0}),a=Object(h.a)(e,2),t=a[0],c=a[1],s=t.number,o=Object(n.useState)(),i=Object(h.a)(o,2),d=i[0],m=i[1],j=Object(n.useState)(!1),x=Object(h.a)(j,2),p=x[0],v=x[1],g=Object(b.g)().productId,M=l.find((function(e){return e.id===g}));if(!M)return Object(u.jsx)(b.a,{to:"/"});var S,N=M.name,q=M.customers,y=M.items;return"simple"===q&&(S=1),"doble"===q&&(S=2),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"row mt-5",children:Object(u.jsxs)("h1",{className:"text-center",children:[" ",N,"(",q,") "]})}),Object(u.jsxs)("div",{className:"row mt-5",children:[Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)("ul",{className:"list-group list-group-flash",children:y.map((function(e,a){return Object(u.jsxs)("li",{className:"list-group-item",children:[S," x ",e]},a)}))})}),Object(u.jsxs)("div",{className:"col-5",children:[Object(u.jsx)("div",{className:"form-group mt-10",children:Object(u.jsx)("input",{type:"number",name:"number",className:"form-control",placeholder:"Desayunos",autoComplete:"off",value:s,onChange:c})}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),m(Math.round(s/10)),v(!0)},children:"Calcular Lotes"}),p&&Object(u.jsx)(O,{lotes:d})]})]})]})},p=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{exact:!0,path:"/",component:j}),Object(u.jsx)(b.b,{exact:!0,path:"/:productId",component:x}),Object(u.jsx)(b.a,{to:"/"})]})})},v=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(p,{})})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root")),o()}},[[30,1,2]]]);
//# sourceMappingURL=main.43b5c9d6.chunk.js.map