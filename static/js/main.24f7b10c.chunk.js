(this["webpackJsonpfirefly-calc-test"]=this["webpackJsonpfirefly-calc-test"]||[]).push([[0],{14:function(e,a,t){e.exports=t(21)},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(9),o=t.n(n),r=(t(19),t(5)),i=t(22),s=function(e){var a=e.value,t=e.maxPrecision,c="".concat(a).indexOf("."),n=a.substring(c,Object(i.a)(a.length)),o=-1===c?0:Object(i.a)(n.length-1),r=parseFloat(a).toLocaleString(void 0,{minimumFractionDigits:o}),s=parseFloat(a).toExponential(t-4),u="".concat(r).length>6?"scale(0.36)":"scale(1)";if("NaN"!==r)return r.length>15&&(r=s),"e+0"===s.substring(s.length-3,s.length)&&(s=(s=parseFloat(a).toExponential(t-1)).substring(0,s.length-3)),l.a.createElement("div",{className:"calculator-display"},l.a.createElement("div",{className:"auto-scaling-text",style:{transform:u}},r));r="Error"},u=function(){var e=Object(c.useState)("0"),a=Object(r.a)(e,2),t=a[0],n=a[1],o=Object(c.useState)(null),u=Object(r.a)(o,2),k=u[0],y=u[1],m=Object(c.useState)(!1),d=Object(r.a)(m,2),v=d[0],b=d[1],E=Object(c.useState)("0"),f=Object(r.a)(E,2),N=f[0],p=f[1],g=Object(c.useState)(!0),C=Object(r.a)(g,2),O=C[0],j=C[1],h=function(e){switch(e){case"C":console.log("clearAll",O),O?(n("0"),p("0"),y(null),b(!1),j(!0)):(n("0"),j(!0));break;case"\xb1":!function(){var e=-1*parseFloat(t).toPrecision(16);n("".concat(e)),b(!1),j(!1)}();break;case".":!function(e){var a=-1==="".concat(t).indexOf(".");if(v)return n("0"),b(!1),void j(!1);a&&(n("".concat(t).concat(e)),b(!1),j(!1))}(e);break;case"%":!function(){var e=parseFloat(t).toPrecision(16)/100;n("".concat(e)),b(!1),j(!1)}();break;default:!function(e){console.log("Input Value: ",e)}(e)}},x=function(e){S("".concat(e.target.value))},S=function(e){var a=["0","1","2","3","4","5","6","7","8","9"].includes(e),c=["/","*","-","+","="].includes(e);a&&function(e){if(v)n("".concat(e)),b(!1),j(!1),console.log(t,v,O);else{var a="0"===t?"".concat(e):"".concat(t).concat(e);n("".concat(a)),b(!1),j(!1)}}(e),c?function(e){if("0"===N||null==k||v)return n("".concat(t).concat(e)),b(!0),p(t),y(e),j(!1),void console.log("here");var a="".concat(N).concat(k).concat(t);console.log(a);var c="".concat(Object(i.a)(a));"Infinity"===c&&n("Error");var l="="===e?null:e;n("".concat(c)),b(!0),p("".concat(c)),y(l),j(!1)}(e):h(e)};return l.a.createElement("div",{className:"calculator"},l.a.createElement(s,{value:t,maxPrecision:16}),l.a.createElement("div",{className:"calculator-keypad"},l.a.createElement("div",{className:"input-keys"},l.a.createElement("div",{className:"function-keys"},l.a.createElement("button",{id:"key-clear",value:"C",className:"calculator-key key-clear",onClick:x},O?"AC":"C"),l.a.createElement("button",{id:"key-sign",value:"\xb1",className:"calculator-key key-sign",onClick:x},"\xb1")),l.a.createElement("div",{className:"digit-keys"},l.a.createElement("button",{id:"key-0",value:"0",className:"calculator-key key-0",onClick:x},"0"),l.a.createElement("button",{id:"key-dot",value:".",className:"calculator-key key-dot",onClick:x},"\xb7"),l.a.createElement("button",{id:"key-1",value:"1",className:"calculator-key key-1",onClick:x},"1"),l.a.createElement("button",{id:"key-2",value:"2",className:"calculator-key key-2",onClick:x},"2"),l.a.createElement("button",{id:"key-3",value:"3",className:"calculator-key key-3",onClick:x},"3"),l.a.createElement("button",{id:"key-4",value:"4",className:"calculator-key key-4",onClick:x},"4"),l.a.createElement("button",{id:"key-5",value:"5",className:"calculator-key key-5",onClick:x},"5"),l.a.createElement("button",{id:"key-6",value:"6",className:"calculator-key key-6",onClick:x},"6"),l.a.createElement("button",{id:"key-7",value:"7",className:"calculator-key key-7",onClick:x},"7"),l.a.createElement("button",{id:"key-8",value:"8",className:"calculator-key key-8",onClick:x},"8"),l.a.createElement("button",{id:"key-9",value:"9",className:"calculator-key key-9",onClick:x},"9"))),l.a.createElement("div",{className:"operator-keys"},l.a.createElement("button",{id:"key-divide",value:"/",className:"calculator-key calc-key key-divide",onClick:x},"\xf7"),l.a.createElement("button",{id:"key-multiply",value:"*",className:"calculator-key calc-key key-multiply",onClick:x},"\xd7"),l.a.createElement("button",{id:"key-subtract",value:"-",className:"calculator-key calc-key key-subtract",onClick:x},"\u2013"),l.a.createElement("button",{id:"key-add",value:"+",className:"calculator-key calc-key key-add",onClick:x},"+"),l.a.createElement("button",{id:"key-equals",value:"=",className:"calculator-key calc-key key-equals",onClick:x},"="))))},k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"wrapper"},l.a.createElement("div",{id:"calculator-wrapper"},l.a.createElement(u,null))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.24f7b10c.chunk.js.map