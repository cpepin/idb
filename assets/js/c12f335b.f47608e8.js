"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9159:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>m});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"faqs",title:"Frequently Asked Questions"},s=void 0,c={unversionedId:"faqs",id:"faqs",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Why use gRPC?",source:"@site/docs/faqs.mdx",sourceDirName:".",slug:"/faqs",permalink:"/docs/faqs",tags:[],version:"current",frontMatter:{id:"faqs",title:"Frequently Asked Questions"},sidebar:"docs",previous:{title:"Accessibility Automation",permalink:"/docs/accessibility"}},p=[{value:"Why use gRPC?",id:"why-use-grpc",children:[],level:2},{value:"Where did <code>fbsimctl</code> go?",id:"where-did-fbsimctl-go",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-use-grpc"},"Why use gRPC?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gRPC")," has a number of benefits for this project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Evolution of interfaces means that features can be added for particular calls added, without the need for numeric versioning."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gRPC")," supports bidirectional streams. This is hugely beneficial for commands that produce incremental output of an indeterminate length. For example, this is heavily used in streaming video or logs from iOS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gRPC")," provides flexibility in the implementation of the server/companion. This may allow us to migrate ",(0,o.kt)("inlineCode",{parentName:"li"},"idb"),"'s companion server to a Swift implementation away from a Objective-C++ one without affecting the client's implementation.")),(0,o.kt)("h2",{id:"where-did-fbsimctl-go"},"Where did ",(0,o.kt)("inlineCode",{parentName:"h2"},"fbsimctl")," go?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fbsimctl")," has now been removed from the codebase. ",(0,o.kt)("inlineCode",{parentName:"p"},"idb")," is it's replacement. We learned a lot thought building ",(0,o.kt)("inlineCode",{parentName:"p"},"fbsimctl")," which has informed a lot of the design considerations for ",(0,o.kt)("inlineCode",{parentName:"p"},"idb"),'. For instance, it had a very provisional "RPC" mechanism via sending HTTP requests which was one of the design goals of ',(0,o.kt)("inlineCode",{parentName:"p"},"idb"),". All commands that ",(0,o.kt)("inlineCode",{parentName:"p"},"fbsimctl")," has implemented are now implemented by ",(0,o.kt)("inlineCode",{parentName:"p"},"idb"),"."),(0,o.kt)("p",null,"The last working version of ",(0,o.kt)("inlineCode",{parentName:"p"},"fbsimctl")," is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb/releases/tag/v1.1.0"},"tagged as ",(0,o.kt)("inlineCode",{parentName:"a"},"v1.1.0")),", which you can build or fork from. It has been removed from the codebase in the interests of clarity."))}m.isMDXComponent=!0}}]);