"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[5901],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7651:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"MongoDB Setup"},c=void 0,l={unversionedId:"mongodb-setup",id:"mongodb-setup",title:"MongoDB Setup",description:"Published on December 23, 2020",source:"@site/docs/mongodb-setup.md",sourceDirName:".",slug:"/mongodb-setup",permalink:"/docs/mongodb-setup",tags:[],version:"current",frontMatter:{title:"MongoDB Setup"},sidebar:"docs",previous:{title:"Ubuntu Cheatsheet",permalink:"/docs/os-ubuntu-cheatsheet"},next:{title:"MongoDB Cheatsheet",permalink:"/docs/mongodb-cheatsheet"}},m={},d=[{value:"Installation and config",id:"installation-and-config",level:2},{value:"Create a new collection",id:"create-a-new-collection",level:2},{value:"Create a new user",id:"create-a-new-user",level:2},{value:"connection-string format",id:"connection-string-format",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Verify connection-string",id:"verify-connection-string",level:3},{value:"Resources",id:"resources",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Published on December 23, 2020"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This document was migrated from ",(0,i.kt)("a",{parentName:"em",href:"https://digipie.github.io/digidocs/mongodb/local-setup/"},"DigiDocs"))),(0,i.kt)("p",null,"The purpose of this guide is to quickly set up a local copy of MongoDB ",(0,i.kt)("strong",{parentName:"p"},"on Windows")," for local development purposes. Authentication will not be enabled or covered in this tutorial."),(0,i.kt)("h2",{id:"installation-and-config"},"Installation and config"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/administration/install-community/"},"MongoDB Community Edition"),", the standard configuration is fine."),(0,i.kt)("li",{parentName:"ol"},"Take note of where your installation's ",(0,i.kt)("inlineCode",{parentName:"li"},"bin")," folder is at, it should be at ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\MongoDB\\Server\\4.2\\bin")," by default."),(0,i.kt)("li",{parentName:"ol"},"Add it to your environment variables. See guide ",(0,i.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Open your terminal - if you already have it opened, exit and re-open it to reload the enviroment variables."),(0,i.kt)("li",{parentName:"ol"},"Enter ",(0,i.kt)("inlineCode",{parentName:"li"},"mongo")," to access MongoDB.")),(0,i.kt)("h2",{id:"create-a-new-collection"},"Create a new collection"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Next, create a new collection, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"use")," command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# To display the database you are using\ndb\n\n# To switch databases use `use <database>`\n# To create a new database, switch to a non-existing database\nuse dev\n\n# Template\nuse <database>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/mongo/"},"https://docs.mongodb.com/manual/mongo/")," for more information."))),(0,i.kt)("h2",{id:"create-a-new-user"},"Create a new user"),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Next, create a user with ",(0,i.kt)("inlineCode",{parentName:"li"},"readWrite")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dbAdmin")," roles, using the ",(0,i.kt)("inlineCode",{parentName:"li"},"db.createUser()")," command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Switch to the database you want to add the user to\nuse dev\n\n# Create the user with `readWrite` and `dbAdmin` rights\ndb.createUser(\n  {\n    user: "devadmin",\n    pwd: passwordPrompt(),\n    roles: [ "readWrite", "dbAdmin" ]\n  }\n)\n\n# Template\ndb.createUser(\n  {\n    user: <username>,\n    pwd: <password>,\n    roles: [ "readWrite", "dbAdmin" ]\n  }\n)\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/method/db.createUser/"},"https://docs.mongodb.com/manual/reference/method/db.createUser/")," for more information."))),(0,i.kt)("h2",{id:"connection-string-format"},"connection-string format"),(0,i.kt)("p",null,"The connection-string is used to access the MongoDB instance from your applications (i.e. MongooseJS). The format of your connection-string is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]\n# Parts in [ and ] are optional\n\n# Example, without authentication\nmongodb://localhost:27017/dev\n\n# Example, with authentication\nmongodb://devadmin:<password>@localhost:27017/dev\n# Replace the <password> with your actual password\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the username or password includes the at sign @, colon :, slash /, or the percent sign % character, use percent encoding. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/#examples"},"https://docs.mongodb.com/manual/reference/connection-string/#examples")," for more information."))),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Given that we are not enabling authentication, you can use either of the above connection-string URI formats."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"},"https://docs.mongodb.com/manual/tutorial/enable-authentication/")," for more information."))),(0,i.kt)("h3",{id:"verify-connection-string"},"Verify connection-string"),(0,i.kt)("p",null,"To verify your connection-string, simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"mongo <mongoURI>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Example, without authentication\nmongo mongodb://localhost:27017/dev\n\n# Example, with authentication\nmongo mongodb://devadmin:<password>@localhost:27017/dev\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://digipie.github.io/digidocs/mongodb/local-setup/"},"Original copy of this document at DigiDocs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/administration/install-community/"},"MongoDB's official guide to Install MongoDB Community Edition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"Architect Ryan's guide to Add to the PATH on Windows 10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/mongo/"},"MongoDB's official guide to the mongo shell")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/method/db.createUser/"},"MongoDB's official guide to db.createUser()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB's official guide to Connection String URI Format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"},"MongoDB's official guide to Enable Access Control"))))}u.isMDXComponent=!0}}]);