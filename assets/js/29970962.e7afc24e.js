(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[789],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4085:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"philosophy",title:"Philosophy",sidebar_label:"Philosophy"},l={unversionedId:"welcome/philosophy",id:"welcome/philosophy",isDocsHomePage:!1,title:"Philosophy",description:"Http4ts aims to obey the following rules as its base architectural mindset:",source:"@site/docs/welcome/philosophy.md",sourceDirName:"welcome",slug:"/welcome/philosophy",permalink:"/docs/welcome/philosophy",editUrl:"https://github.com/http4ts/http4ts/edit/master/website/docs/welcome/philosophy.md",version:"current",sidebar_label:"Philosophy",frontMatter:{id:"philosophy",title:"Philosophy",sidebar_label:"Philosophy"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/welcome/getting-started"},next:{title:"Core Concepts",permalink:"/docs/welcome/core-concepts"}},s=[],p={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Http4ts")," aims to obey the following rules as its base architectural mindset:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server as a Function"),": This library is based on the Twitter paper ",(0,o.kt)("a",{parentName:"li",href:"https://monkey.org/~marius/funsrv.pdf"},"Your Server as a Function")," and inspired by the fantastic ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/http4k/http4k/"},"http4k")," library. An HTTP server application is a composition of two main types (Look at ",(0,o.kt)("a",{parentName:"li",href:"core-concepts"},"Core Concepts")," for more info):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HttpHandler"),": defines the functions that handle requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HttpFilter"),": a higher-order function that accepts an ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpHandler")," and returns an ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpHandler"),". It should be used to add request/response pre-/post-processing."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Runtime Independence"),": While the library has bindings to be used with a Node.js runtime, the core library does not have any dependency on the Node.js environment. It should be possible to use it for both Node.js and Deno."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Symmetric"),": Similar to http4k, this library supports symmetric interfaces for the HTTP client and HTTP server. It is possible to reuse the same ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpHandler")," interface and all the filters on both server- and client-side. There is an ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpClient")," functionality available in the library which follows the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,o.kt)("inlineCode",{parentName:"a"},"fetch"))," interface and is independent of any runtime."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type Safety"),": ",(0,o.kt)("em",{parentName:"li"},"Http4ts")," is built using the maximum type safety power of ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," and, in order to use its maximum power, you should do the same."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Immutability"),": Similar to http4k, all entities in the library are immutable unless, naturally, it is not possible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testability"),": Since the basic building blocks of this library are functions and the main entities are abstracted from the environment, it is extremely simple to write tests for the code built by ",(0,o.kt)("em",{parentName:"li"},"http4ts"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minimal")," The request and response contain only the necessary information to represent the HTTP message. Extra information such as session and cookies are not included because they don't belong to the HTTP protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Composable")," All the building blocks are composable which is a great addition to code reusability, organization and extension.")))}c.isMDXComponent=!0}}]);