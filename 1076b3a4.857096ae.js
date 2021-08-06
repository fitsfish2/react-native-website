(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),c=(n(0),n(584)),i={id:"devsettings",title:"DevSettings"},o={unversionedId:"devsettings",id:"devsettings",isDocsHomePage:!1,title:"DevSettings",description:"DevSettings \u6a21\u5757\u53ef\u4ee5\u5bf9\u5f00\u53d1\u8005\u83dc\u5355\u8fdb\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u3002",source:"@site/../cndocs/devsettings.md",slug:"/devsettings",permalink:"/docs/next/devsettings",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/devsettings.md",version:"current",lastUpdatedAt:1628257443,sidebar:"api",previous:{title:"AppState",permalink:"/docs/next/appstate"},next:{title:"Dimensions",permalink:"/docs/next/dimensions"}},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addMenuItem()</code>",id:"addmenuitem",children:[]},{value:"<code>reload()</code>",id:"reload",children:[]}]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DevSettings")," \u6a21\u5757\u53ef\u4ee5\u5bf9\u5f00\u53d1\u8005\u83dc\u5355\u8fdb\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u3002"),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"addmenuitem"},Object(c.b)("inlineCode",{parentName:"h3"},"addMenuItem()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static addMenuItem(title, handler)\n")),Object(c.b)("p",null,"\u5728\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u83dc\u5355\u9879\uff1a"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(c.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"title ",Object(c.b)("div",{className:"label basic required"},"\u5fc5\u9700")),Object(c.b)("td",{parentName:"tr",align:null},"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"component ",Object(c.b)("div",{className:"label basic required"},"\u5fc5\u9700")),Object(c.b)("td",{parentName:"tr",align:null},"function")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"DevSettings.addMenuItem('Show Secret Dev Screen', () => {\n  Alert.alert('Showing secret dev screen!');\n});\n")),Object(c.b)("h3",{id:"reload"},Object(c.b)("inlineCode",{parentName:"h3"},"reload()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static reload()\n")),Object(c.b)("p",null,"\u91cd\u65b0\u52a0\u8f7d\u5f15\u7528\uff08\u5237\u65b0\uff09\u3002\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7528\u6237\u4ea4\u4e92\u6765\u89e6\u53d1\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Button title="Reload" onPress={() => DevSettings.reload()} />\n')))}p.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);