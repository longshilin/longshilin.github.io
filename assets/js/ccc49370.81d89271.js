"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[6103],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3366),n=a(7294),r=a(6010),i=a(2773),s=a(9960),o="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",d="sidebarItem_CF0Q",u="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",v=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var b=["sidebar","toc","children"];function h(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,l.Z)(e,b),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(7294),n=a(1217),r=a(8665),i=a(2544),s=a(7462),o=a(5999),m=a(1750);function c(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,s.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,s.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var d=a(3725),u=a(1575);function g(e){var t,a=e.content,s=e.sidebar,o=a.assets,m=a.metadata,g=m.title,v=m.description,p=m.nextItem,b=m.prevItem,h=m.date,E=m.tags,f=m.authors,N=m.frontMatter,_=N.hide_table_of_contents,Z=N.keywords,k=N.toc_min_heading_level,L=N.toc_max_heading_level,C=null!=(t=o.image)?t:N.image;return l.createElement(r.Z,{wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage,sidebar:s,toc:!_&&a.toc&&a.toc.length>0?l.createElement(u.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:L}):void 0},l.createElement(n.Z,{title:g,description:v,keywords:Z,image:C},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:h}),f.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),l.createElement(i.Z,{frontMatter:N,assets:o,metadata:m,isBlogPostPage:!0},l.createElement(a,null)),(p||b)&&l.createElement(c,{nextItem:p,prevItem:b}))}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(7294),n=a(5999),r=a(7462),i=a(3366),s=a(6010),o="iconEdit_dcUD",m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var d=a(3725);function u(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(9960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7462),n=a(3366),r=a(7294),i=a(6010),s=a(5002),o="tableOfContents_cNA8",m=["className"];function c(e){var t=e.className,a=(0,n.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7462),n=a(3366),r=a(7294),i=a(3725),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,v=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,n.Z)(e,s),h=(0,i.LU)(),E=null!=v?v:h.tableOfContents.minHeadingLevel,f=null!=p?p:h.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),_=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[d,g,E,f]);return(0,i.Si)(_),r.createElement(o,(0,l.Z)({toc:N,className:m,linkClassName:d},b))}},2544:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(7294),n=a(6010),r=a(3905),i=a(5999),s=a(9960),o=a(3725),m=a(4689),c=a(1217),d=a(6753),u={blogPostData:"blogPostData_Vfxe",blogPostDetailsFull:"blogPostDetailsFull_enUA"};var g=function(e){var t,a,g,v=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,b=e.frontMatter,h=e.metadata,E=e.truncated,f=e.isBlogPostPage,N=void 0!==f&&f,_=h.date,Z=h.formattedDate,k=h.permalink,L=h.tags,C=h.readingTime,T=h.title,P=h.editUrl,w=b.author,x=b.image,y=b.keywords,I=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,H=b.author_image_url||b.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:y,image:x}),l.createElement("article",{className:N?void 0:"margin-bottom--xl"},(g=N?"h1":"h2",l.createElement("header",null,l.createElement(g,{className:u.blogPostTitle},N?T:l.createElement(s.Z,{to:k},T)),l.createElement("div",{className:(0,n.Z)(u.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:_},Z),C&&l.createElement(l.Fragment,null," \xb7 ",v(C))),l.createElement("div",{className:"avatar margin-vert--md"},H&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:I},l.createElement("img",{src:H,alt:w})),l.createElement("div",{className:"avatar__intro"},w&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:I},w)),l.createElement("small",{className:"avatar__subtitle"},A)))))),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:m.Z},p)),(L.length>0||E)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[u.blogPostDetailsFull]=N,t))},L.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return l.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&P&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:P})),!N&&E&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:h.permalink,"aria-label":"Read more about "+T},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);