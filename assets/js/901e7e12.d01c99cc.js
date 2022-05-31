"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[4308],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],u={slug:"docusaurus-gh-action",title:"GitHub Action for Docusaurus",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","github-action","ci"]},s=void 0,l={permalink:"/blog/docusaurus-gh-action",editUrl:"https://github.com/DigiPie/kaya-folio/tree/main/website/blog/2021-01-17-docusaurus-gh-action.md",source:"@site/blog/2021-01-17-docusaurus-gh-action.md",title:"GitHub Action for Docusaurus",description:"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action.",date:"2021-01-17T00:00:00.000Z",formattedDate:"January 17, 2021",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"github-action",permalink:"/blog/tags/github-action"},{label:"ci",permalink:"/blog/tags/ci"}],readingTime:1.54,truncated:!0,authors:[{name:"Evan Tay",title:"Software Engineer at Padlet",url:"https://github.com/DigiPie",imageURL:"https://avatars2.githubusercontent.com/u/13582874"}],frontMatter:{slug:"docusaurus-gh-action",title:"GitHub Action for Docusaurus",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","github-action","ci"]},prevItem:{title:"Top 3 reasons why you should start investing with StashAway today!",permalink:"/blog/stashaway"},nextItem:{title:"History of EvanTay.com",permalink:"/blog/history"}},c={authorsImageUrls:[void 0]},d=[{value:"deploy-docusaurus.yml",id:"deploy-docusaurusyml",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action."),(0,r.kt)("p",null,"Initially, I was planning to follow the ",(0,r.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/deployment#triggering-deployment-with-github-actions"},"official guide")," on doing so. However, it was actually much more complicated than I liked. I did not really want to generate and store a SSH key on GitHub. Too much effort man."),(0,r.kt)("p",null,"I decided it was better off for me to write my own script. Here it is:"),(0,r.kt)("h2",{id:"deploy-docusaurusyml"},"deploy-docusaurus.yml"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The script below assumes that your Docusaurus website resides at ",(0,r.kt)("inlineCode",{parentName:"p"},"/website")," of your repo. If that is not the case for you, you will need to:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"cd website")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"cd <docu_site_root>"),", or delete the entire line if your Docusaurus website is at the root of your repo ",(0,r.kt)("inlineCode",{parentName:"li"},"/")),(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"build_dir"),"'s value from ",(0,r.kt)("inlineCode",{parentName:"li"},"website/build")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"<docu_site_root>/build"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," if your Docusaurus website is at the root of your repo ",(0,r.kt)("inlineCode",{parentName:"li"},"/"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'name: deploy-docusaurus\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  publish:\n    runs-on: ubuntu-latest\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - name: Check out repo\n        uses: actions/checkout@v2\n      # Node is required for npm\n      - name: Set up Node\n        uses: actions/setup-node@v2\n        with:\n          node-version: "12"\n      # Install and build Docusaurus website\n      - name: Build Docusaurus website\n        run: |\n          cd website\n          npm install \n          npm run build\n      - name: Deploy to GitHub Pages\n        if: success()\n        uses: crazy-max/ghaction-github-pages@v2\n        with:\n          target_branch: gh-pages\n          build_dir: website/build\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"GitHub will automatically add ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," to Secrets. You need not do so. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/authentication-in-a-workflow"},"this")," for more information."))),(0,r.kt)("p",null,"To see this script in action, visit my ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DigiPie/kaya-folio/actions"},"personal website repo"),"."))}m.isMDXComponent=!0}}]);