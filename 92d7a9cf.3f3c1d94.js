(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),o=(r(0),r(132)),i={id:"pipeline-op",title:"Javascript Pipeline Operator and http4ts Filters",author:"Ali Sabzevari",author_title:"http4ts Core Team",author_url:"https://github.com/alisabzevari",author_image_url:"https://avatars0.githubusercontent.com/u/826242?v=4",tags:["filters"]},p={permalink:"/blog/pipeline-op",source:"@site/blog/2020-03-07-pipeline-op.md",description:"One of the unique features of http4s is its composability. You can componse multiple filters together and build reusable pieces of funtionality.",date:"2020-03-07T00:00:00.000Z",tags:[{label:"filters",permalink:"/blog/tags/filters"}],title:"Javascript Pipeline Operator and http4ts Filters"},l=[{value:"Enter pipeline operator",id:"enter-pipeline-operator",children:[]}],c={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One of the unique features of http4s is its composability. You can componse multiple filters together and build reusable pieces of funtionality."),Object(o.b)("p",null,"However, composing functions in Javascript is not the best experience you can expect. As an example, consider the following filters (Implementations are removed for brevity):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const authorize: (handler: HttpHandler) => HttpHandler; // = ...\n\nconst handleErrors: (handler: HttpHandler) => HttpHandler; // = ...\n\nconst metrics: (metricsRegistry) => (handler: HttpHandler) => HttpHandler; // = ...\n\nconst trace: (tracer) => (handler: HttpHandler) => HttpHandler; // = ...\n")),Object(o.b)("p",null,"Composing these filters together results in something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const finalHandler = req =>\n  handleErrors(trace(tracer)(metrics(metricsRegistry)(authorize(req))));\n")),Object(o.b)("p",null,"Everyone agrees that this piece of code looks weird and very hard to understand. Functional programming libraries like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ramdajs.com/"}),"Ramda")," provide helpers that improves the readability of this pattern. For example, you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ramdajs.com/docs/#pipe"}),Object(o.b)("inlineCode",{parentName:"a"},"pipe")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const finalHandler = R.pipe(\n  authorize,\n  metrics(metricsRegistry),\n  trace(tracer),\n  handleErrors\n);\n")),Object(o.b)("p",null,"It looks much better but still it would be great if Javascript could support this pattern in the language out of the box."),Object(o.b)("h2",{id:"enter-pipeline-operator"},"Enter pipeline operator"),Object(o.b)("p",null,"There is an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-pipeline-operator"}),"Ecmascript proposal")," to add an operator that solves this problem. It is called pipeline operator and here is how our code will look like when Javascript supports this operator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const finalHandler = authorize |> metrics(metricsRegistry) |> trace(tracer) |> handleErrors \n")),Object(o.b)("p",null,"I like this operator a lot since it visually describes the flow of the data through the functions which matches with the purpose and mechanics of http4ts filters."),Object(o.b)("p",null,"If you also like pipeline operator, go ahead and start the proposal repository and contribute to the importance of this language feature."),Object(o.b)("p",null,"Happy Javascripting!"))}s.isMDXComponent=!0},132:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return r?a.a.createElement(d,p({ref:t},c,{components:r})):a.a.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);