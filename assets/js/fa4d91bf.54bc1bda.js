(self.webpackChunk=self.webpackChunk||[]).push([[930],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7603:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={id:"installation",title:"Installation"},c=void 0,p={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"idb is made up of 2 parts, each of which needs to be installed separately.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Guided Tour",permalink:"/docs/guided-tour"}},s=[{value:"idb companion",id:"idb-companion",children:[]},{value:"idb client",id:"idb-client",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"idb is made up of 2 parts, each of which needs to be installed separately."),(0,i.kt)("h3",{id:"idb-companion"},"idb companion"),(0,i.kt)("p",null,"Each target (simulator/device) will have a companion process attached allowing idb to communicate remotely."),(0,i.kt)("p",null,"The idb companion can be installed via brew or built from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb"},"source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew tap facebook/fb\nbrew install idb-companion\n")),(0,i.kt)("p",null,"Note: Instructions on how to install brew can be found ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh"},"here")),(0,i.kt)("h3",{id:"idb-client"},"idb client"),(0,i.kt)("p",null,"A cli tool and python client is provided to interact with idb."),(0,i.kt)("p",null,"It can be installed via pip:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip3.6 install fb-idb\n")),(0,i.kt)("p",null,"Note: The idb client requires python 3.6 or greater to be installed."),(0,i.kt)("p",null,"Note: Instructions on how to install pip can be found ",(0,i.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installing/"},"here")),(0,i.kt)("p",null,"Make sure both parts of idb are installed successfully and then you're good to go! Head over to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guided-tour"},"guided tour")," to try idb out."))}d.isMDXComponent=!0}}]);