(self.webpackChunkbilbilak=self.webpackChunkbilbilak||[]).push([[835],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s={id:"binding-to-node-js-server",title:"Binding To Node.Js Server",sidebar_label:"Binding To Node.Js Server"},a={unversionedId:"guides/binding-to-node-js-server",id:"guides/binding-to-node-js-server",isDocsHomePage:!1,title:"Binding To Node.Js Server",description:"Handlers contain the logic of your application. Handlers are executed when a client sends a request only after you bind them to a server. Http4ts is server independent, meaning that it is possible to connect a handler to almost every library or platform which can listen to http requests. Http4ts supports binding to Node.Js out-of-the-box.",source:"@site/docs/guides/binding-to-node-js-server.md",sourceDirName:"guides",slug:"/guides/binding-to-node-js-server",permalink:"/docs/guides/binding-to-node-js-server",editUrl:"https://github.com/http4ts/http4ts/edit/master/website/docs/guides/binding-to-node-js-server.md",version:"current",sidebar_label:"Binding To Node.Js Server",frontMatter:{id:"binding-to-node-js-server",title:"Binding To Node.Js Server",sidebar_label:"Binding To Node.Js Server"},sidebar:"someSidebar",previous:{title:"Your First Handler",permalink:"/docs/guides/your-first-handler"},next:{title:"Request And Response",permalink:"/docs/guides/request-and-response"}},u=[],d={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Handlers contain the logic of your application. Handlers are executed when a client sends a request only after you bind them to a server. Http4ts is ",(0,i.kt)("strong",{parentName:"p"},"server independent"),", meaning that it is possible to connect a handler to almost every library or platform which can listen to http requests. Http4ts supports binding to Node.Js out-of-the-box."),(0,i.kt)("p",null,"To bind your handler to Node.Js, create an http or https server and use ",(0,i.kt)("inlineCode",{parentName:"p"},"toNodeRequestListener")," to bind it to an http4ts handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{12-19}","{12-19}":!0},'import { HttpRequest, HttpStatus, toNodeRequestListener, res } from "http4ts";\n\nimport * as http from "http";\n\nasync function handler(req: HttpRequest) {\n  return res({\n    body: "Hello world!",\n    status: HttpStatus.OK\n  });\n}\n\nconst server = http.createServer(toNodeRequestListener(handler));\n//                                    ^---This is where the binding takes place\nconst hostname = "127.0.0.1";\nconst port = 3000;\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n')),(0,i.kt)("p",null,"If you want to create an https server, just import the ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," module. If you want to configure your server differently, you just need to learn how to configure a Node.Js server. Http4ts requires no library-specific configuration!"))}l.isMDXComponent=!0}}]);