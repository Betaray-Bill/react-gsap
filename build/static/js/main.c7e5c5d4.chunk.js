(this["webpackJsonpreact-gsap"]=this["webpackJsonpreact-gsap"]||[]).push([[0],{36:function(t,e,c){},66:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),a=c(15),s=c.n(a),i=(c(36),c(13)),o=c(3),d=c(12),j=c.n(d),u=c(16),p=c(10),l=c(17),O=c.n(l),b="SET_PRODUCTS",h="SELECTED_PRODUCT",f=c(1);var x=function(){var t=Object(o.f)().productId,e=Object(p.b)(),c=function(){var c=Object(u.a)(j.a.mark((function c(){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:O.a.get("https://fakestoreapi.com/products/".concat(t)).then((function(t){var c;e((c=t.data,{type:h,payload:c})),console.log(t.data)})).catch((function(t){console.log(t)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[e]),Object(f.jsx)("div",{children:Object(f.jsx)("h2",{})})};var v=function(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.product_reducer.products})),c=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.a.get("https://fakestoreapi.com/products").then((function(e){return t((c=e.data,{type:b,payload:c}),console.log(e.data));var c})).catch((function(t){console.log(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[t]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{children:"Sunapana's Shopping Store"}),Object(f.jsx)("div",{className:"store",children:e.map((function(t){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"img",children:Object(f.jsx)("img",{src:t.image,height:"250px",alt:t.title})}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("p",{children:t.title})}),Object(f.jsx)("div",{className:"price",children:Object(f.jsxs)("p",{children:["$",t.price]})})]}),Object(f.jsx)("div",{className:"btn",children:Object(f.jsx)(i.b,{to:"/product/".concat(t.id),children:"View"})})]},t.id)}))})]})};var m=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(i.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(f.jsx)(o.a,{path:"/product/:productId",exact:!0,component:x})]})})})},g=c(18),_=c(9),E={products:[]},N=Object(g.a)({product_reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case b:return Object(_.a)(Object(_.a)({},t),{},{products:n});case h:return Object(_.a)(Object(_.a)({},t),n);default:return t}}}),w=Object(g.b)(N,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(p.a,{store:w,children:Object(f.jsx)(m,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c7e5c5d4.chunk.js.map