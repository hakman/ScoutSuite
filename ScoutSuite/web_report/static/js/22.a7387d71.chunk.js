(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[22],{567:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(642)),c=n(640),i=n(103),s=n(645),l=n(194),u=n(654),o=function(e){return Object(i.k)(e,"",(function(e){return function(e){return Object(a.jsx)(l.a,{service:"aad",resource:"groups",id:e.id,name:e.name})}(e)}))};t.default=function(e){var t=e.data,n=e.item,l=Object(u.a)("aad","groups",n.groups).data;return t?Object(a.jsxs)(c.a,{data:t,children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.c,{label:"Principal Name",valuePath:"name",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Display Name",valuePath:"display_name",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Given Name",valuePath:"given_name",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Surname",valuePath:"surname",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Mail Nickname",valuePath:"mail_nickname",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Mail",valuePath:"mail",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Sign-In Names",valuePath:"sign_in_names",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Type",valuePath:"user_type",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Status",valuePath:"account_enabled",renderValue:i.c}),Object(a.jsx)(c.c,{label:"Usage Location",valuePath:"usage_location",renderValue:i.n}),Object(a.jsx)(c.c,{label:"Deletion Timestamp",valuePath:"deletion_timestamp",renderValue:i.n})]}),Object(a.jsx)(s.b,{children:Object(a.jsx)(s.a,{title:"Groups",children:o(l)})})]}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),s=r.a.createContext(""),l=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),s=n(7),l=n.n(s),u=n(15),o=n.n(u),b=n(10),d=n.n(b),j=n(637),f=n(103),p=n(83),v=(n(641),n(624)),O=n(191),h=n.n(O),x=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,a=e.path,s=Object(c.useContext)(m.a),l=s.exceptions,u=s.addException,b=Object(x.b)().enqueueSnackbar,d=o()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(v.a,{disabled:d,size:"small",startIcon:Object(r.jsx)(h.a,{}),className:"exception-btn",onClick:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),V=function(e){var t,n=e.label,s=e.separator,u=e.valuePath,b=e.errorPath,v=e.className,O=e.inline,h=e.tooltip,x=e.tooltipProps,m=e.renderValue,V=e.basePathOverwrite,_=Object(g.g)(),k=Object(c.useContext)(j.a),N=Object(c.useContext)(j.b),C=Object(c.useContext)(j.c),S=Object(f.a)(V||N,u),w=m(e.value||o()(k.item,S,e.value));("boolean"===typeof w&&(w=String(w)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(f.a)(V||N,e)})):t=[S];var y=t.some((function(e){return k.path_to_issues.includes(e)})),A=k.level;if(Object(c.useEffect)((function(){y&&C(A)}),[A]),void 0===w||null===w)return null;var D=Object(r.jsx)(P,{service:_.service,finding:_.finding,path:"".concat(k.path,".").concat(t[0])}),E=Object(r.jsxs)("span",{className:l()(y&&l()("issue",A)),children:[w,y&&D]});return Object(r.jsx)(p.a,{className:l()(v,"partial-value",{inline:O}),label:n,separator:s,value:h?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},x),{},{children:E})):E})};V.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=V},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,s=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(s,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return s.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),s=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l.b}));var a=n(1),r=n(18),c=n(0),i=n(7),s=n.n(i),l=n(104),u=n(637),o=n(56),b=(n(644),function(e){var t=e.title,n=e.isSelected,i=e.disabled,b=e.onClick,d=e.children,j=Object(c.useState)(""),f=Object(r.a)(j,2),p=f[0],v=f[1],O=p?Object(a.jsxs)(a.Fragment,{children:[t,o.a[p].icon]}):t;return Object(a.jsx)(u.c.Provider,{value:v,children:Object(a.jsx)(l.a,{title:O,className:s()("partial-tab-pane",p),isSelected:n,disabled:i,onClick:b,children:d})})})},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(45),r=n.n(a),c=n(84),i=n(18),s=n(0),l=n(195),u=function(e,t,n){var a=Object(s.useState)([]),u=Object(i.a)(a,2),o=u[0],b=u[1],d=Object(s.useState)(!0),j=Object(i.a)(d,2),f=j[0],p=j[1];return Object(s.useEffect)((function(){(function(){var a=Object(c.a)(r.a.mark((function a(){var c,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&t&&n)){a.next=15;break}return p(!0),a.prev=2,c=n.map((function(n){return l.a("services/".concat(e,"/resources/").concat(t,"/").concat(n))})),a.next=6,Promise.all(c);case 6:i=a.sent,console.info("useResources response",e,t,n,i),b(i),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.error(a.t0.message);case 14:p(!1);case 15:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}})()()}),[n]),{data:o,loading:f}}}}]);
//# sourceMappingURL=22.a7387d71.chunk.js.map