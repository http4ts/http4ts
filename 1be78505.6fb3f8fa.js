(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(139),s=t(141),o=t(42),i=t(144),r=t(140),m=t.n(r),u=t(142),d=t(96),b=t.n(d);function p({item:e,onItemClick:a,collapsible:t}){const{items:c,href:s,label:o,type:i}=e,[r,d]=Object(n.useState)(e.collapsed),[b,h]=Object(n.useState)(null);e.collapsed!==b&&(h(e.collapsed),d(e.collapsed));const f=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return c.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":r}),key:o},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?f:void 0},o),l.a.createElement("ul",{className:"menu__list"},c.map(e=>l.a.createElement(p,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:s,onClick:a},o))}}var h=function(e){const[a,t]=Object(n.useState)(!1),{docsSidebars:c,location:s,sidebar:o,sidebarCollapsible:i}=e;if(!o)return null;const r=c[o];if(!r)throw new Error(`Cannot find the sidebar "${o}" in the sidebar config!`);return i&&r.forEach(e=>function e(a,t){const{items:n,href:l,type:c}=a;switch(c){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t.pathname.replace(/\/$/,"")}}(e,s)),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:m()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(p,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:i})))))},f=t(151),E=t(152),k=t(17),_=t(100),v=t.n(_);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,{permalinkToSidebar:r,docsSidebars:m,version:u}=t,d=r[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:b={}}={}}=Object(s.a)(),{sidebarCollapsible:p=!0}=b;return _=a.routes,w=n.pathname,_.some(e=>Object(k.c)(w,e))?l.a.createElement(i.a,{version:u},l.a.createElement("div",{className:v.a.docPage},d&&l.a.createElement("div",{className:v.a.docSidebarContainer},l.a.createElement(h,{docsSidebars:m,location:n,sidebar:d,sidebarCollapsible:p})),l.a.createElement("main",{className:v.a.docMainContainer},l.a.createElement(c.a,{components:f.a},Object(o.a)(a.routes))))):l.a.createElement(E.default,e);var _,w}},152:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(144);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);