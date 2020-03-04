(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(139)),i={id:"runtime-independence",title:"Runtime Independence",sidebar_label:"Runtime Independence"},c={id:"welcome/runtime-independence",title:"Runtime Independence",description:"> \u26a0\ufe0f This section is a work in progress.",source:"@site/docs/welcome/runtime-independence.md",permalink:"/http4ts/docs/welcome/runtime-independence",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/welcome/runtime-independence.md",sidebar_label:"Runtime Independence",sidebar:"someSidebar",previous:{title:"Testability",permalink:"/http4ts/docs/welcome/testability"},next:{title:"Symmetry",permalink:"/http4ts/docs/welcome/symmetry"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section is a work in progress.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add serverless environment")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Http4ts"),"' core functionality does not have any dependencies to node.js packages. All the code in the core of ",Object(a.b)("em",{parentName:"p"},"http4ts")," is written by standard javascript utilities and concepts. Here are some of the examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core module doesn't use node.js' ",Object(a.b)("inlineCode",{parentName:"li"},"IncomingMessage")," or ",Object(a.b)("inlineCode",{parentName:"li"},"ServerResponse")," types as request and responses. Instead, it defines runtime independent request and response types."),Object(a.b)("li",{parentName:"ul"},"Node.js' streams are not used in ",Object(a.b)("em",{parentName:"li"},"http4ts"),". Instead of streams we use async iterators which are pure javascript constructs."),Object(a.b)("li",{parentName:"ul"},"The project does not have any dependencies to any npm module or other package managers. Although We have a couple of devDependencies to facilitate the development of the library.")),Object(a.b)("p",null,"This design facilitates testing and enable us to build and distribute ",Object(a.b)("em",{parentName:"p"},"http4ts")," to other environments. Some of the interesting targets can be ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://deno.land/"}),"Deno")," or serverless environments. We are also working on building a browser based binding and a simple React component which can help us start the server in the browser and build fully client-side sample applications."),Object(a.b)("p",null,"However, there are some exceptional cases that we need to use some runtime dependent implementations. For example, we need ",Object(a.b)("inlineCode",{parentName:"p"},"TextEncoder")," and ",Object(a.b)("inlineCode",{parentName:"p"},"TextDecoder")," classes and while in standard javascript they should be available via ",Object(a.b)("inlineCode",{parentName:"p"},"window")," object, node.js provides them differently (We know that node.js v11 added those classes to the global object but we don't want to make node.js binding dependent to a specific version). For these cases, the core library is only dependent to a similar interface and the binding function should provide the real classes to the core library via a function called ",Object(a.b)("inlineCode",{parentName:"p"},"setupEnvironment"),"."),Object(a.b)("p",null,"Note that, the current node.js binding (",Object(a.b)("inlineCode",{parentName:"p"},"toNodeRequestListener")," function) calls ",Object(a.b)("inlineCode",{parentName:"p"},"setupEnvironment")," automatically. So, there is no need to call this function explicitly. This information will only be relevant if you want to write a binding."))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);