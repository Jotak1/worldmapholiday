(this["webpackJsonpworld-map-holiday"]=this["webpackJsonpworld-map-holiday"]||[]).push([[0],{125:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),s=a.n(r),o=(a(96),a(18)),i=a(83),l=a(169),j=a(171),d=a(173),h=a(85),b=a(186),u=a(79),O=a.n(u),p=a(3),x=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),m=function(){var e=x();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsx)(j.a,{position:"static",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(h.a,{variant:"h6",className:e.title,children:"World Map Holidays"}),Object(p.jsx)(b.a,{color:"inherit",href:"https://github.com/Jotak1",target:"blank",children:Object(p.jsx)(O.a,{className:e.iconcolor})})]})})})},f=a(40),g=a(80),v=a(185),k=a(184),w=a(183),y=a(181),N=a(182),C=a(180),S=a(21),M=a.n(S),F=a(81),E=a(82),A=a.n(E),D=a(175),P=a(179),T=a(178),W=a(174),G=a(176),B=a(177),I=a(131),L=(a(125),function(){return Object(p.jsxs)("div",{className:"sk-chase",children:[Object(p.jsx)("div",{className:"sk-chase-dot"}),Object(p.jsx)("div",{className:"sk-chase-dot"}),Object(p.jsx)("div",{className:"sk-chase-dot"}),Object(p.jsx)("div",{className:"sk-chase-dot"}),Object(p.jsx)("div",{className:"sk-chase-dot"}),Object(p.jsx)("div",{className:"sk-chase-dot"})]})}),J=function(){return Object(p.jsx)("div",{className:"alert",children:Object(p.jsx)("p",{className:"alert-message",children:"An error has occurred!"})})},_=Object(l.a)({table:{minWidth:650}});var z=function(e){var t=e.Country,a=c.a.useState([]),r=Object(o.a)(a,2),s=r[0],i=r[1],l=c.a.useState(!0),j=Object(o.a)(l,2),d=j[0],h=j[1],b=c.a.useState(!1),u=Object(o.a)(b,2),O=u[0],x=u[1],m=c.a.useState([]),f=Object(o.a)(m,2),g=f[0],v=f[1],k=(new Date).getFullYear(),w="https://date.nager.at/api/v2/publicholidays/".concat(k,"/").concat(t);Object(n.useEffect)((function(){(function(){var e=Object(F.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://cors-anywhere.herokuapp.com/".concat(w)).then((function(e){i(e.data),h(!1)})).catch((function(e){v(e),x(!0),h(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=_();return Object(p.jsx)("div",{children:d?Object(p.jsx)(L,{}):O?Object(p.jsx)(J,{errormsg:g}):Object(p.jsx)(W.a,{component:I.a,children:Object(p.jsxs)(D.a,{className:y.table,size:"small","aria-label":"a dense table",children:[Object(p.jsx)(G.a,{children:Object(p.jsxs)(B.a,{children:[Object(p.jsx)(T.a,{children:"Date"}),Object(p.jsx)(T.a,{align:"right",children:"Local Name"}),Object(p.jsx)(T.a,{align:"right",children:"Name"})]})}),Object(p.jsx)(P.a,{children:s.map((function(e){return Object(p.jsxs)(B.a,{children:[Object(p.jsx)(T.a,{component:"th",scope:"row",children:e.date}),Object(p.jsx)(T.a,{align:"right",children:e.localName}),Object(p.jsx)(T.a,{align:"right",children:e.name})]},e.date+e.localName)}))})]})})})},H=c.a.forwardRef((function(e,t){return Object(p.jsx)(C.a,Object(g.a)({direction:"up",ref:t},e))})),K=function(e){var t=e.open,a=e.handleClose,n=e.valor1,c=e.valor;return Object(p.jsxs)(v.a,{fullWidth:!0,maxWidth:"lg",open:t,onClose:a,"aria-labelledby":"max-width-dialog-title",TransitionComponent:H,PaperProps:{style:{backgroundColor:"white",boxShadow:"none"}},children:[Object(p.jsx)(y.a,{id:"max-width-dialog-title",children:Object(p.jsxs)(N.a,{children:["Holidays in ",n]})}),Object(p.jsx)(w.a,{children:Object(p.jsx)(z,{Country:c})}),Object(p.jsx)(k.a,{children:Object(p.jsx)(b.a,{onClick:a,variant:"contained",color:"primary",children:"X"})})]})},R={width:"100%",height:"500px"},X=function(e){var t=e.setTooltipContent,a=c.a.useState(!1),n=Object(o.a)(a,2),r=n[0],s=n[1],i=c.a.useState([]),l=Object(o.a)(i,2),j=l[0],d=l[1],h=c.a.useState([]),b=Object(o.a)(h,2),u=b[0],O=b[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(f.ComposableMap,{"data-tip":"",projectionConfig:{scale:200},style:R,children:Object(p.jsxs)(f.ZoomableGroup,{children:[Object(p.jsx)(f.Sphere,{stroke:"#FF5533",strokeWidth:1}),Object(p.jsx)(f.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){var a=e.geographies,n=e.proj;return a.map((function(e){return Object(p.jsx)(f.Geography,{projection:n,geography:e,onMouseEnter:function(){var a,n=e.properties,c=n.NAME,r=n.ISO_A2,s=n.POP_EST;t("".concat(c," - ").concat(r," \u2014 ").concat((a=s)>1e9?Math.round(a/1e8)/10+"Bn":a>1e6?Math.round(a/1e5)/10+"M":Math.round(a/100)/10+"K"))},onMouseLeave:function(){t("")},onClick:function(){var t,a=e.properties,n=a.NAME,c=a.ISO_A2;t=n,d(c),O(t),s(!0)},style:{default:{fill:"#D6D6DA",outline:"none",stroke:"black",strokeWidth:"0.5px"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)}))}})]})}),Object(p.jsx)(K,{open:r,handleClose:function(){s(!1)},valor1:u,valor:j})]})},Y=Object(n.memo)(X),Z=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{}),Object(p.jsx)(i.a,{children:a}),Object(p.jsx)(Y,{setTooltipContent:c})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(Z,{}),document.getElementById("root")),q()},96:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.1caabf13.chunk.js.map