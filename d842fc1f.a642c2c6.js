(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{362:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(8),r=(a(0),a(413)),o={id:"security",title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565"},s={unversionedId:"security",id:"version-0.63/security",isDocsHomePage:!1,title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",description:"\u5f00\u53d1\u5e94\u7528\u65f6\u5b89\u5168\u5e38\u5e38\u662f\u4e00\u4e2a\u88ab\u5ffd\u89c6\u7684\u8bdd\u9898\u3002\u7684\u786e\uff0c\u642d\u5efa\u4e00\u4e2a\u5b8c\u5168\u65e0\u61c8\u53ef\u51fb\u7684\u8f6f\u4ef6\u662f\u4e0d\u53ef\u80fd\u7684\u2014\u2014\u6211\u4eec\u8fd8\u6ca1\u6709\u53d1\u660e\u4e00\u4e2a\u5b8c\u5168\u575a\u4e0d\u53ef\u6467\u7684\u9501\uff08\u6bd5\u7adf\uff0c\u94f6\u884c\u91d1\u5e93\u5df2\u7ecf\u8db3\u591f\u575a\u56fa\u4f46\u4ecd\u7136\u4f1a\u88ab\u95ef\u5165\uff09\u3002However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!",source:"@site/versioned_docs/version-0.63/security.md",slug:"/security",permalink:"/docs/security",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/security.md",version:"0.63",lastUpdatedAt:1613874531,sidebar:"version-0.63/docs",previous:{title:"\u8bbf\u95ee\u7f51\u7edc",permalink:"/docs/network"},next:{title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",permalink:"/docs/native-modules-intro"}},c=[{value:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f",id:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f",children:[{value:"Async Storage",id:"async-storage",children:[]},{value:"Secure Storage",id:"secure-storage",children:[]}]},{value:"Authentication and Deep Linking",id:"authentication-and-deep-linking",children:[{value:"OAuth2 and Redirects",id:"oauth2-and-redirects",children:[]}]},{value:"Network Security",id:"network-security",children:[{value:"SSL Pinning",id:"ssl-pinning",children:[]}]},{value:"Summary",id:"summary",children:[]}],l={toc:c};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5f00\u53d1\u5e94\u7528\u65f6\u5b89\u5168\u5e38\u5e38\u662f\u4e00\u4e2a\u88ab\u5ffd\u89c6\u7684\u8bdd\u9898\u3002\u7684\u786e\uff0c\u642d\u5efa\u4e00\u4e2a\u5b8c\u5168\u65e0\u61c8\u53ef\u51fb\u7684\u8f6f\u4ef6\u662f\u4e0d\u53ef\u80fd\u7684\u2014\u2014\u6211\u4eec\u8fd8\u6ca1\u6709\u53d1\u660e\u4e00\u4e2a\u5b8c\u5168\u575a\u4e0d\u53ef\u6467\u7684\u9501\uff08\u6bd5\u7adf\uff0c\u94f6\u884c\u91d1\u5e93\u5df2\u7ecf\u8db3\u591f\u575a\u56fa\u4f46\u4ecd\u7136\u4f1a\u88ab\u95ef\u5165\uff09\u3002However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!"),Object(r.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/d_security_chart.svg",width:"283",alt:" ",style:{float:"right"}}),Object(r.b)("p",null,"In this guide, you will learn about best practices for storing sensitive information, authentication, network security, and tools that will help you secure your app. This is not a preflight checklist\u2014it is a catalogue of options, each of which will help further protect your app and users."),Object(r.b)("h2",{id:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f"},"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f"),Object(r.b)("p",null,"Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zetachang/react-native-dotenv"}),"react-native-dotenv")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/luggit/react-native-config/"}),"react-native-config")," are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and api keys."),Object(r.b)("p",null,"If you must have an API key or a secret to access some resource from your app, the most secure way to handle this would be to build an orchestration layer between your app and the resource. This could be a serverless function (e.g. using AWS Lambda or Google Cloud Functions) which can forward the request with the required API key or secret. Secrets in server side code cannot be accessed by the API consumers the same way secrets in your app code can."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For persisted user data, choose the right type of storage based on its sensitivity.")," As your app is used, you\u2019ll often find the need to save data on the device, whether to support your app being used offline, cut down on network requests or save your user\u2019s access token between sessions so they wouldn\u2019t have to re-authenticate each time they use the app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Persisted vs unpersisted")," \u2014 persisted data is written to the device\u2019s memory, which lets the data be read by your app across application launches without having to do another network request to fetch it or asking the user to re-enter it. But this also can make that data more vulnerable to being accessed by attackers. Unpersisted data is never written to memory\u2014so there's no data to access!")),Object(r.b)("h3",{id:"async-storage"},"Async Storage"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/async-storage"}),"Async Storage")," is a community-maintained module for React Native that provides an asynchronous, unencrypted, key-value store. Async Storage is not shared between apps: every app has its own sandbox environment and has no access to data from other apps."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Do")," use async storage when..."),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Don't")," use async storage for..."))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Persisting non-sensitive data across app runs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Token storage")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Persisting Redux state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secrets")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Persisting GraphQL state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Storing global app-wide variables"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Async Storage is the React Native equivalent of Local Storage from the web")),Object(r.b)("h3",{id:"secure-storage"},"Secure Storage"),Object(r.b)("p",null,"React Native does not come bundled with any way of storing sensitive data. However, there are pre-existing solutions for Android and iOS platforms."),Object(r.b)("h4",{id:"ios---keychain-services"},"iOS - Keychain Services"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/security/keychain_services"}),"Keychain Services")," allows you to securely store small chunks of sensitive info for the user. This is an ideal place to store certificates, tokens, passwords, and any other sensitive information that doesn\u2019t belong in Async Storage."),Object(r.b)("h4",{id:"android---secure-shared-preferences"},"Android - Secure Shared Preferences"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/SharedPreferences"}),"Shared Preferences")," is the Android equivalent for a persistent key-value data store. ",Object(r.b)("strong",{parentName:"p"},"Data in Shared Preferences is not encrypted by default"),", but ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/topic/security/data"}),"Encrypted Shared Preferences")," wraps the Shared Preferences class for Android, and automatically encrypts keys and values."),Object(r.b)("h4",{id:"android---keystore"},"Android - Keystore"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/training/articles/keystore"}),"Android Keystore")," system lets you store cryptographic keys in a container to make it more difficult to extract from the device."),Object(r.b)("p",null,"In order to use iOS Keychain services or Android Secure Shared Preferences, you can either write a bridge yourself or use a library which wraps them for you and provides a unified API at your own risk. Some libraries to consider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/oblador/react-native-keychain"}),"react-native-keychain")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mCodex/react-native-sensitive-info"}),"react-native-sensitive-info")," - secure for iOS, but uses Android Shared Preferences for Android (which is not secure by default). There is however a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mCodex/react-native-sensitive-info/tree/keystore"}),"fork"),") that uses Android Keystore"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CodingZeal/redux-persist-sensitive-storage"}),"redux-persist-sensitive-storage")," - wraps react-native-sensitive-info")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Be mindful of unintentionally storing or exposing sensitive info.")," This could happen accidentally, for example saving sensitive form data in redux state and persisting the whole state tree in Async Storage. Or sending user tokens and personal info to an application monitoring service such as Sentry or Crashlytics.")),Object(r.b)("h2",{id:"authentication-and-deep-linking"},"Authentication and Deep Linking"),Object(r.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/d_security_deep-linking.svg",width:"225",alt:" ",style:{float:"right",margin:"0 0 1em 1em"}}),Object(r.b)("p",null,"Mobile apps have a unique vulnerability that is non-existent in the web: ",Object(r.b)("strong",{parentName:"p"},"deep linking"),". Deep linking is a way of sending data directly to a native application from an outside source. A deep link looks like ",Object(r.b)("inlineCode",{parentName:"p"},"app://")," where ",Object(r.b)("inlineCode",{parentName:"p"},"app")," is your app scheme and anything following the // could be used internally to handle the request."),Object(r.b)("p",null,"For example, if you were building an ecommerce app, you could use ",Object(r.b)("inlineCode",{parentName:"p"},"app://products/1")," to deep link to your app and open the product detail page for a product with id 1. You can think of these kind of like URLs on the web, but with one crucial distinction:"),Object(r.b)("p",null,"Deep links are not secure and you should never send any sensitive information in them."),Object(r.b)("p",null,"The reason deep links are not secure is because there is no centralized method of registering URL schemes. As an application developer, you can use almost any url scheme you choose by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app"}),"configuring it in Xcode")," for iOS or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/training/app-links/deep-linking"}),"adding an intent on Android"),"."),Object(r.b)("p",null,"There is nothing stopping a malicious application from hijacking your deep link by also registering to the same scheme and then obtaining access to the data your link contains. Sending something like ",Object(r.b)("inlineCode",{parentName:"p"},"app://products/1")," is not harmful, but sending tokens is a security concern."),Object(r.b)("p",null,"When the operating system has two or more applications to choose from when opening a link, Android will show the user a modal and ask them to choose which application to use to open the link. On iOS however, the operating system will make the choice for you, so the user will be blissfully unaware. Apple has made steps to address this issue in later iOS versions (iOS 11) where the instituted a first-come-first-served principle, although this vulnerability could still be exploited in different ways which you can read more about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.trendmicro.com/trendlabs-security-intelligence/ios-url-scheme-susceptible-to-hijacking/"}),"here"),". Using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/ios/universal-links/"}),"universal links")," will allow linking to content within your app securely in iOS."),Object(r.b)("h3",{id:"oauth2-and-redirects"},"OAuth2 and Redirects"),Object(r.b)("p",null,"The OAuth2 authentication protocol is incredibly popular nowadays, prided as the most complete and secure protocol around. The OpenID Connect protocol is also based on this. In OAuth2, the user is asked to authenticate via a third party. On successful completion, this third party redirects back to the requesting application with a verification code which can be exchanged for a JWT \u2014 a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://jwt.io/introduction/"}),"JSON Web Token"),". JWT is an open standard for securely transmitting information between parties on the web."),Object(r.b)("p",null,"On the web, this redirect step is secure, because URLs on the web are guaranteed to be unique. This is not true for apps because, as mentioned earlier, there is no centralized method of registering URL schemes! In order to address this security concern, an additional check must be added in the form of PKCE."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oauth.net/2/pkce/"}),"PKCE"),", pronounced \u201cPixy\u201d stands for Proof of Key Code Exchange, and is an extension to the OAuth 2 spec. This involves adding an additional layer of security which verifies that the authentication and token exchange requests come from the same client. PKCE uses the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.movable-type.co.uk/scripts/sha256.html"}),"SHA 256")," Cryptographic Hash Algorithm. SHA 256 creates a unique \u201csignature\u201d for a text or file of any size, but it is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Always the same length regardless of the input file"),Object(r.b)("li",{parentName:"ul"},"Guaranteed to be always produce the same result for the same input"),Object(r.b)("li",{parentName:"ul"},"One way (that is, you can\u2019t reverse engineer it to reveal the original input)")),Object(r.b)("p",null,"Now you have two values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"code_verifier")," - a large random string generated by the client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"code_challenge")," - the SHA 256 of the code_verifier")),Object(r.b)("p",null,"During the initial ",Object(r.b)("inlineCode",{parentName:"p"},"/authorize")," request, the client also sends the ",Object(r.b)("inlineCode",{parentName:"p"},"code_challenge")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"code_verifier")," it keeps in memory. After the authorize request has returned correctly, the client also sends the ",Object(r.b)("inlineCode",{parentName:"p"},"code_verifier")," that was used to generate the ",Object(r.b)("inlineCode",{parentName:"p"},"code_challenge"),". The IDP will then calculate the ",Object(r.b)("inlineCode",{parentName:"p"},"code_challenge"),", see if it matches what was set on the very first ",Object(r.b)("inlineCode",{parentName:"p"},"/authorize")," request, and only send the access token if the values match."),Object(r.b)("p",null,"This guarantees that only the application that triggered the initial authorization flow would be able to successfully exchange the verification code for a JWT. So even if a malicious application gets access to the verification code, it will be useless on its own. To see this in action, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aaronparecki.com/oauth-2-simplified/#mobile-apps"}),"this example"),"."),Object(r.b)("p",null,"A library to consider for native OAuth is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/react-native-app-auth"}),"react-native-app-auth"),". React-native-app-auth is an SDK for communicating with OAuth2 providers. It wraps the native ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openid/AppAuth-iOS"}),"AppAuth-iOS")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openid/AppAuth-Android"}),"AppAuth-Android")," libraries and can support PKCE."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"React-native-app-auth can support PKCE only if your Identity Provider supports it.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"OAuth2 with PKCE",src:a(478).default})),Object(r.b)("h2",{id:"network-security"},"Network Security"),Object(r.b)("p",null,"Your APIs should always use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ssl.com/faqs/faq-what-is-ssl/"}),"SSL encryption"),". SSL encryption protects against the requested data being read in plain text between when it leaves the server and before it reaches the client. You\u2019ll know the endpoint is secure, because it starts with ",Object(r.b)("inlineCode",{parentName:"p"},"https://")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"http://"),"."),Object(r.b)("h3",{id:"ssl-pinning"},"SSL Pinning"),Object(r.b)("p",null,"Using https endpoints could still leave your data vulnerable to interception. With https, the client will only trust the server if it can provide a valid certificate that is signed by a trusted Certificate Authority that is pre-installed on the client. An attacker could take advantage of this by installing a malicious root CA certificate to the user\u2019s device, so the client would trust all certificates that are signed by the attacker. Thus, relying on certificates alone could still leave you vulnerable to a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"}),"man-in-the-middle attack"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"SSL pinning")," is a technique that can be used on the client side to avoid this attack. It works by embedding (or pinning) a list of trusted certificates to the client during development, so that only the requests signed with one of the trusted certificates will be accepted, and any self-signed certificates will not be."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When using SSL pinning, you should be mindful of certificate expiry. Certificates expire every 1-2 years and when one does, it\u2019ll need to be updated in the app as well as on the server. As soon as the certificate on the server has been updated, any apps with the old certificate embedded in them will cease to work.")),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"There is no bulletproof way to handle security, but with conscious effort and diligence, it is possible to significantly reduce the likelihood of a security breach in your application. Invest in security proportional to the sensitivity of the data stored in your application, the number of users, and the damage a hacker could do when gaining access to their account. And remember: it\u2019s significantly harder to access information that was never requested in the first place."),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9224-sunnylqm690-1351117103086"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(92.24%), ",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(6.90%), ",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=1351117103&type=Users"}),"1351117103"),"(0.86%)"))}p.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,d=u["".concat(o,".").concat(h)]||u[h]||b[h]||r;return a?i.a.createElement(d,s(s({ref:t},l),{},{components:a})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},478:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg"}}]);