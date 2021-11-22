"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[62923],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,c=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7789:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={title:"Taro Repository Overview"},p=void 0,d={unversionedId:"codebase-overview",id:"version-3.x/codebase-overview",isDocsHomePage:!1,title:"Taro Repository Overview",description:"Repository Composition",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/codebase-overview.md",sourceDirName:".",slug:"/codebase-overview",permalink:"/taro/en/docs/codebase-overview",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/codebase-overview.md",tags:[],version:"3.x",frontMatter:{title:"Taro Repository Overview"},sidebar:"version-3.x/docs",previous:{title:"CONTRIBUTING",permalink:"/taro/en/docs/CONTRIBUTING"},next:{title:"Single-step Debugging Configuration",permalink:"/taro/en/docs/debug-config"}},m=[{value:"Repository Composition",id:"repository-composition",children:[{value:"Base",id:"base",children:[],level:3},{value:"Mini Program",id:"mini-program",children:[],level:3},{value:"H5",id:"h5",children:[],level:3},{value:"RN",id:"rn",children:[],level:3},{value:"Other",id:"other",children:[],level:3}],level:2},{value:"How to develop",id:"how-to-develop",children:[{value:"Environment Preparation",id:"environment-preparation",children:[],level:3},{value:"Code Style",id:"code-style",children:[],level:3},{value:"Debug",id:"debug",children:[],level:3},{value:"Unit tests",id:"unit-tests",children:[],level:3},{value:"commit Specifications",id:"commit-specifications",children:[],level:3},{value:"Documentation",id:"documentation",children:[],level:3}],level:2},{value:"Commit Pull Request",id:"commit-pull-request",children:[],level:2}],s={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"repository-composition"},"Repository Composition"),(0,i.kt)("p",null,"The following list describes which NPM packages Taro consists of and what each package does."),(0,i.kt)("h3",{id:"base"},"Base"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/cli")),(0,i.kt)("td",{parentName:"tr",align:"left"},"CLI tool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/service")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pluginized Kernel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-loader")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Webpack loaders")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/helper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Tool library, mainly for CLI, compile-time use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/runner-utils")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Tool library, mainly for compilation tools for mini program and H5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/shared")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Tool library, mainly for runtime use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/taro")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Expose the Taro objects needed on each end")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/api")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Taro API independent of each platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"babel-preset-taro")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Babel preset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"eslint-config-taro")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ESLint rules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postcss-pxtransform")),(0,i.kt)("td",{parentName:"tr",align:"left"},"PostCSS plugin that converts ",(0,i.kt)("inlineCode",{parentName:"td"},"px")," to adaptive size units on each platform")))),(0,i.kt)("h3",{id:"mini-program"},"Mini Program"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/mini-runner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mini program compiler tool, mainly used for setting up and calling Webpack")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/react")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mini program specific React renderer based on ",(0,i.kt)("inlineCode",{parentName:"td"},"react-reconciler"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mini program Runtime Adapter Core")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-weapp")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Wechat mini program  plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-alipay")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Alipay mini program  plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-swan")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Baidu smart program  plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-tt")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ByteDance mini program plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-qq")),(0,i.kt)("td",{parentName:"tr",align:"left"},"QQ mini program  plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-jd")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Jingdong mini program  plugin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-html")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Support for plugins that use HTML tags")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postcss-html-transform")),(0,i.kt)("td",{parentName:"tr",align:"left"},"PostCSS plugin, class name for handling HTML tags")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-react-devtools")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Support for plugins using React DevTools")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/extend")),(0,i.kt)("td",{parentName:"tr",align:"left"},"jQuery-like libraries")))),(0,i.kt)("h3",{id:"h5"},"H5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/webpack-runner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"H5 compiler tool, mainly used for setting up and calling Webpack")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"H5 Router")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-h5")),(0,i.kt)("td",{parentName:"tr",align:"left"},"H5 API implemented according to the WeChat mini program specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/components")),(0,i.kt)("td",{parentName:"tr",align:"left"},"H5 Component Library\uff08Web Components version\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/components-react")),(0,i.kt)("td",{parentName:"tr",align:"left"},"H5 Component Library (React version)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-taroapi")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Babel plugin that allows the API to be used by ",(0,i.kt)("inlineCode",{parentName:"td"},"tree-shaking"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postcss-plugin-constparse")),(0,i.kt)("td",{parentName:"tr",align:"left"},"PostCSS plugin for handling the height of the ",(0,i.kt)("inlineCode",{parentName:"td"},"tabbar"))))),(0,i.kt)("h3",{id:"rn"},"RN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/components-rn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN Component Library")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-runner")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN compiler tool, mainly used to set up and call metro")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-style-transformer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN style conversion tool to make RN support sass\u3001less\u3001stylus\u3001postcss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-supporter")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN Basic metro configuration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-transformer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN application portal and page conversion tool that allows RN to support Taro-defined app and page config")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/router-rn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN router")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime-rn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RN Runtime Packaging")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-rn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The API implemented on the RN side according to the WeChat mini program specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-react-jsx-to-rn-stylesheet")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Babel plugin for jsx to support className attribute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"taro-css-to-react-native")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Converting css to RN stylesheet")))),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/taroize")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mini program to Taro compiler")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"@tarojs/with-weapp")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Runtime adapter for mini program to Taro")))),(0,i.kt)("h2",{id:"how-to-develop"},"How to develop"),(0,i.kt)("h3",{id:"environment-preparation"},"Environment Preparation"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Need to make sure your Node.js version is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," (it is recommended to install ",(0,i.kt)("inlineCode",{parentName:"p"},"10.5")," or higher)"))),(0,i.kt)("p",null,"First fork a copy of the Taro repository to your Github, then clone the project locally and switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," branch."),(0,i.kt)("p",null,"Then run the following commands in sequence."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn\n$ yarn run bootstrap\n$ yarn build\n")),(0,i.kt)("p",null,"After running the above command, the environment is ready and you can pull a new branch for development."),(0,i.kt)("h3",{id:"code-style"},"Code Style"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1aFollow ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/standard/standard"},"JavaScript Standard Style"),"\uff0cFor details, see the root directory ",(0,i.kt)("inlineCode",{parentName:"li"},".eslintrc.js"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TypeScript"),": Follow variants based on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/standard/standard"},"JavaScript Standard Style"),", see ",(0,i.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," in the root directory and ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," in the relevant package directory for details."),(0,i.kt)("li",{parentName:"ul"},"Styles: follow the ",(0,i.kt)("inlineCode",{parentName:"li"},".stylelintrc")," style in the relevant package directory.")),(0,i.kt)("h3",{id:"debug"},"Debug"),(0,i.kt)("p",null,"During debugging, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-link/"},"npm link")," command is typically used to softlink the package to be debugged to a test project."),(0,i.kt)("p",null,"To debug ",(0,i.kt)("strong",{parentName:"p"},"compile-time")," code, please refer to ",(0,i.kt)("a",{parentName:"p",href:"./debug-config"},'"Single-step debugging"'),"."),(0,i.kt)("p",null,"Debug ",(0,i.kt)("strong",{parentName:"p"},"Runtime")," code, you can breakpoint debug directly."),(0,i.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"The packages are currently equipped with unit tests for."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"babel-preset-taro")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/cli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/react")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/webpack-runner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/mini-runner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/runtime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-rn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,i.kt)("p",null,"After modifying the above packages, developers should make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run test:ci --scope [package name]")," to check if the test cases all pass."),(0,i.kt)("p",null,"Also, after developing some important features, please take time to fill in the corresponding test cases."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note: ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshot")," (snapshot of test results), and modifying these two packages or some other packages may cause these snapshots to fail, and thus fail the tests. When you modify these two packages, or if CI prompts you with a test case error for these two packages, run ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run updateSnapshot --scope [package name]")," to update the snapshot and resubmit."))),(0,i.kt)("h3",{id:"commit-specifications"},"commit Specifications"),(0,i.kt)("p",null,"When entering the ",(0,i.kt)("inlineCode",{parentName:"p"},"commit message"),", please make sure to follow the ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"},"Angular Style Commit Message Conventions")," Specifications."),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"When a commit involves new features, Breaking Changes or important modifications, please add or modify the corresponding documentation."),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"./CONTRIBUTING"},"Modifying Documentation")," for more information about the development of documentation\u3002"),(0,i.kt)("h2",{id:"commit-pull-request"},"Commit Pull Request"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are not familiar with PR (Pull Request), please read\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"},"\u300aAbout Pull Requests\u300b"))),(0,i.kt)("p",null,"After completing the development and pushing it to your own Taro repository, you are ready to submit the Pull Request."),(0,i.kt)("p",null,"Before submitting a PR, please read the following notes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")," compiles successfully."),(0,i.kt)("li",{parentName:"ol"},"Make sure the code passes the ESLint test."),(0,i.kt)("li",{parentName:"ol"},"ensure that all test cases pass when the package in question has the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm test:ci")," command."),(0,i.kt)("li",{parentName:"ol"},"when the related package has test cases, add the corresponding test cases to your commit code as well."),(0,i.kt)("li",{parentName:"ol"},"ensure that the commit message needs to follow the ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"},"Angular Style Commit Message Conventions"),"."),(0,i.kt)("li",{parentName:"ol"},"If the commit code is very large or complex, you can divide the PR into several commits together. We will squash as appropriate when merging."),(0,i.kt)("li",{parentName:"ol"},"PR authors can choose to join Taro Developer WeChat group for merging PRs and technical communication.")))}k.isMDXComponent=!0}}]);