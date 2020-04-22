(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(6),o=(r(0),r(143)),i={id:"your-first-handler",title:"Your First Handler",sidebar_label:"Your First Handler"},c={id:"guides/your-first-handler",title:"Your First Handler",description:"Handler is the heart of http4ts. An HttpHandler connects your logic code to the library. A handler is a function that receives a request object and should return a response object:",source:"@site/docs/guides/your-first-handler.md",permalink:"/docs/guides/your-first-handler",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/your-first-handler.md",sidebar_label:"Your First Handler",sidebar:"someSidebar",previous:{title:"Symmetry",permalink:"/docs/welcome/symmetry"},next:{title:"Binding To Node.Js Server",permalink:"/docs/guides/binding-to-node-js-server"}},s=[],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Handler is the heart of http4ts. An HttpHandler connects your logic code to the library. A handler is a function that receives a request object and should return a response object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type HttpHandler = (req: HttpRequest) => HttpResponse | Promise<HttpResponse>;\n")),Object(o.b)("p",null,"As an example, the following handler echoes the request body to the response:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"async function handler(req: HttpRequest /* 1 */) {\n  return res({ /* 2 */\n    status: HttpStatus.OK,\n    body: req.body /* 3 */\n  });\n}\n")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The handler receives a request object "),Object(o.b)("li",{parentName:"ol"},"It should return a response object. ",Object(o.b)("inlineCode",{parentName:"li"},"res")," is a helper function that creates a response object."),Object(o.b)("li",{parentName:"ol"},"The request object has fields and methods to read and manipulate it. Three most important request object fields are ",Object(o.b)("inlineCode",{parentName:"li"},"body"),", ",Object(o.b)("inlineCode",{parentName:"li"},"headers"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"method"),". Here we passed ",Object(o.b)("inlineCode",{parentName:"li"},"body")," to response.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A handler should bind to a server in order to be used. You will learn about binding to server in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/guides/binding-to-node-js-server"}),"next article"),"."))))}d.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(r),p=n,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);