"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[9741],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5063:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={title:"Reliable, Scalable, and Maintainable Applications"},l=void 0,c={unversionedId:"reliable-scalable-maintainable",id:"reliable-scalable-maintainable",title:"Reliable, Scalable, and Maintainable Applications",description:"Published on July 31, 2021",source:"@site/docs/reliable-scalable-maintainable.md",sourceDirName:".",slug:"/reliable-scalable-maintainable",permalink:"/docs/reliable-scalable-maintainable",tags:[],version:"current",frontMatter:{title:"Reliable, Scalable, and Maintainable Applications"},sidebar:"docs",previous:{title:"Scaling Memcached",permalink:"/docs/scaling-memcached"},next:{title:"Ikigai",permalink:"/docs/ikigai"}},u={},h=[{value:"Reliability, Scalability, and Maintainability",id:"reliability-scalability-and-maintainability",level:2},{value:"Reliability",id:"reliability",level:2},{value:"Working correctly",id:"working-correctly",level:3},{value:"Fault-tolerance",id:"fault-tolerance",level:3},{value:"Human (un)reliability",id:"human-unreliability",level:3},{value:"Scalability",id:"scalability",level:2},{value:"Load parameter",id:"load-parameter",level:3},{value:"Performance",id:"performance",level:3},{value:"Response time",id:"response-time",level:3},{value:"Tail latencies",id:"tail-latencies",level:3},{value:"Scaling to cope with increased load",id:"scaling-to-cope-with-increased-load",level:3},{value:"Maintainability",id:"maintainability",level:2},{value:"Operability",id:"operability",level:3},{value:"Simplicity",id:"simplicity",level:3},{value:"Evolvability",id:"evolvability",level:3},{value:"Resources",id:"resources",level:2}],p={toc:h};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Published on July 31, 2021",(0,o.kt)("br",{parentName:"p"}),"\n","Updated on January 3, 2022",(0,o.kt)("br",{parentName:"p"}),"\n","Edited by ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/vanessa-tay-5973021ab/"},"Vanessa Tay")),(0,o.kt)("p",null,"The opening chapter of Kleppman\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://dataintensive.net/"},(0,o.kt)("em",{parentName:"a"},"Designing Data-Intensive Applications"))," book: ",(0,o.kt)("em",{parentName:"p"},"Reliable, Scalable, and Maintainable Applications"),", addresses key concerns you should consider when designing distributed and data-intensive systems, in an insightful way. I believe anyone working on a distributed system will benefit from reading it. However, as not all of us may have the time (or will) to pour over the book, I\u2019ve decided to share a quick summary of the key points Kleppman raises, as well as to offer some of my personal inputs with references to other literature and experts."),(0,o.kt)("h2",{id:"reliability-scalability-and-maintainability"},"Reliability, Scalability, and Maintainability"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Designing Data-Intensive Applications",src:a(5336).Z,width:"457",height:"600"})),(0,o.kt)("p",null,"Reliability, Scalability, and Maintainability, the three characteristics that Kleppman opens with, are terms you might come across often. If you're not familiar with them, you may wonder: what are they and why are they important?"),(0,o.kt)("h2",{id:"reliability"},"Reliability"),(0,o.kt)("p",null,"When building an application, we want it to work correctly, even when things go wrong."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Anything that can go wrong will go wrong." - ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Murphy%27s_law"},"Murphy's law"))),(0,o.kt)("p",null,"The adage above can be applied to just about anything in life and applications are no exception. If we want our applications to be resilient during adverse conditions, we will have to design them with the expectation that things will go wrong. We can't blindly hope they won't."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Hope is not a strategy." - Traditional SRE saying, found in ',(0,o.kt)("a",{parentName:"p",href:"https://sre.google/sre-book/introduction/"},"Google's Site Reliability Engineering book"))),(0,o.kt)("h3",{id:"working-correctly"},"Working correctly"),(0,o.kt)("p",null,"When we declare an application system as working correctly, we typically mean that it is able to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Perform the expected functionality,"),(0,o.kt)("li",{parentName:"ol"},"With good enough performance under the expected load,"),(0,o.kt)("li",{parentName:"ol"},"And can tolerate unintended user behaviour or mistakes,"),(0,o.kt)("li",{parentName:"ol"},"And also prevent unauthorized access and abuse.")),(0,o.kt)("h3",{id:"fault-tolerance"},"Fault-tolerance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reliability"),": A reliable system continues to work correctly, even when things go wrong."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fault"),": A fault is typically defined as an individual component of the system deviating from its spec, when it performs in an unexpected way."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Failure"),": The entire system failing as a whole, and being unable to deliver the required service to its users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fault-tolerant/Resilient"),": If a system anticipates and prevents faults from causing failures, it is fault-tolerant.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As it is impossible to design a zero-fault system, we should focus on preventing faults from causing failures instead. We do so by implementing fault-tolerance mechanisms."))),(0,o.kt)("h3",{id:"human-unreliability"},"Human (un)reliability"),(0,o.kt)("p",null,"When we design a fault-tolerant system, we will naturally consider how we can build it to tolerate hardware and software errors. We introduce hardware redundancy, such that if a hard disk fails, there's a backup which will take its place. We also write fault-tolerant code, such that a software fault would not cause the server to fail."),(0,o.kt)("p",null,"These errors aren't the only ones we should consider. We should also consider how we can prevent human errors. After all, we humans design, create and operate these systems."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Even when they have the best intentions, humans are known to be unreliable." - Found on Page 9 of the book')),(0,o.kt)("p",null,"We humans write the code, and decide what hardware to run our code on. We are responsible for all bugs and mistakes within our systems. Given that, it is important we ask ourselves often:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"How do we make our systems reliable, in spite of unreliable humans?" - Found on Page 9 of the book')),(0,o.kt)("p",null,"To achieve that, we will need to design the system such that it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minimizes opportunities for introducing errors"),": We should design abstractions, APIs and administrator interfaces which make it easy to do the right thing, and hard to do the wrong thing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mitigates impact of failures by allowing quick and easy recovery"),": We should provide a fast and easy way for developers to roll back a failure-inducing deployment, and for operators to undo accidental changes in the administrator interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduces delay in diagnosing errors through detailed monitoring"),": We should set up clear and detailed monitoring which could provide early warning signals, and also insights into what went wrong so we can better triage errors.")),(0,o.kt)("h2",{id:"scalability"},"Scalability"),(0,o.kt)("p",null,"As the load on our system increases, we want it to continue working correctly. To achieve that, we will have to design it such that it is scalable. Scalability describes a system's ability to deliver its expected functionality in spite of increased load. Given that there are many different types of load a system can have, it is meaningless to discuss whether the system is scalable or not. It is more productive to talk about whether it is scalable in a specific manner:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"If the system grows in a particular way, what are our options for coping with the growth?" - Found on Page 11 of the book')),(0,o.kt)("p",null,"Before we can describe scalability, we will first need to define load. We can do so numerically by using load parameters."),(0,o.kt)("h3",{id:"load-parameter"},"Load parameter"),(0,o.kt)("p",null,"A load parameter is a metric you can use to describe a particular load for a given system. Examples include requests per second for a web application, and the ratio of cache hits to misses. The load parameters you should focus on depends on the architecture of your system and your user requirements."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"An architecture that scales well for a particular application is built around assumptions of which operations will be common and which will be rare - the load parameters." - Page 18 of the book')),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,"After defining the load parameters of your system, you can now describe how increases in load affect the system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a load parameter increases, how is the system performance affected if you keep the system resources constant?"),(0,o.kt)("li",{parentName:"ul"},"When a load parameter increases, how much do you need to increase the resources by to keep the system performance constant?")),(0,o.kt)("p",null,"To answer these questions, you would need to define performance metrics. Examples of such metrics include the throughput of a network protocol, and the response time of a web service."),(0,o.kt)("h3",{id:"response-time"},"Response time"),(0,o.kt)("p",null,"Response time is a common and important performance metrics for online, distributed systems. There are many different definitions for it out there. In the context of online systems, it is typically defined as the time between a client sending a request to the system and receiving a response from it."),(0,o.kt)("p",null,"When you consider a system's response time, it is important to consider it not as a single value, the average (mean), but as a distribution of values, the percentiles. That's because the response time for requests varies a lot, and there are many outliers which are much slower. There are many reasons why this is so, here are some:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Different types of requests have different processing time"),": An online system handles many different types of requests which take varying amounts of time to process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Caching reduces response time for common requests"),": Common requests are often cached for high-traffic systems, and responded to much faster than those which are not.")),(0,o.kt)("p",null,"Given these reasons, the distribution of response time is asymmetric and significant outliers are common. This makes the mean much less representative of the response time than the median, also known as the 50th percentile."),(0,o.kt)("p",null,"The median also provides information about the distribution which the mean does not - if the median response time is 80ms, you can infer that half of the requests have a response time faster than 80ms, and also that the other half would be slower than that. You can't infer the same from an average response time, as it is not a middle value like the median."),(0,o.kt)("p",null,"You can check out the article ",(0,o.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/"},"Michael Kopp: Why Averages Suck and Percentiles are Great")," for more information on why the average response time is an inadequate performance metric."),(0,o.kt)("h3",{id:"tail-latencies"},"Tail latencies"),(0,o.kt)("p",null,"You should also consider how slow the outliers are, by looking at higher percentiles such as the 95th and 99th percentile. These are the thresholds at which 95% or 99% of the requests are faster than that particular threshold. They're also commonly called tail latencies. It is important you consider these, because the users with the slowest response time are often those who have used the system most extensively."),(0,o.kt)("p",null,"Amazon uses the 99.9th percentile for internal service response time requirements. They do so even though only 0.1% of requests are slower, because the customers with these requests are often the most valuable customers. They experience longer response time because they have more data. They have more data because they made many more purchases than typical customers, thus making them more valuable."),(0,o.kt)("h3",{id:"scaling-to-cope-with-increased-load"},"Scaling to cope with increased load"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"An architecture that is appropriate for one level of load is unlikely to cope with 10 times that load." - Found on Page 17 of the book')),(0,o.kt)("p",null,"If you want to maintain good system performance, when the load parameters increase, you would need to increase the resources. There are two ways of doing so:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Vertical scaling"),": Scaling up by adding more power - adding more CPU or RAM to your virtual machine instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Horizontal scaling"),": Scaling out by adding more machines - adding more instances to your instance group.")),(0,o.kt)("p",null,"There are tradeoffs between both approaches. A system running on a single, powerful machine is much simpler to develop and maintain than one on multiple machines. However, as you scale up a machine, it gets increasingly costly to do so, and scaling out becomes inevitable. You would need to find the right balance between both approaches if you want to achieve the most cost-effective and efficient outcome."),(0,o.kt)("h2",{id:"maintainability"},"Maintainability"),(0,o.kt)("p",null,"When building a system, we want to build it such that it is as easy to maintain as possible."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"It is well known that the majority of the cost of software is not in its initial development, but in its ongoing maintenance - fixing bugs, investigating failures, modifying it for new use cases, and adding new features." - Found on Page 18 of the book')),(0,o.kt)("p",null,"We should design systems which are easy to operate, understand and evolve. To achieve that, we should follow these three principles when designing a system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Operability"),": We should make it easy for operators to keep the system running smoothly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simplicity"),": We should make it easy for engineers to understand the system by reducing as much system complexity as possible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Evolvability"),": We should make it easy for engineers to change the system in future, adapting it for unanticipated use cases to match requirement changes.")),(0,o.kt)("h3",{id:"operability"},"Operability"),(0,o.kt)("p",null,"A system with good operability makes routine maintenance tasks easy, allowing the operations team to focus on higher-value contributions. We can achieve that by designing a system with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Good telemetry"),": Set up informative and usable monitoring and logging of the system's runtime behaviour and health."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Good documentation"),': Document in an easy-to-understand manner such that operators are clear on what they can do and what is the outcome - e.g. "If I do X, Y will happen".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Good default behaviour"),": Supply default values and settings for operational/internal tools, but allow operators to override defaults when needed for edge cases.")),(0,o.kt)("h3",{id:"simplicity"},"Simplicity"),(0,o.kt)("p",null,"As a system grows larger, so does its complexity. This makes the system harder to understand by those working on it, which is problematic in many ways, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lower productivity"),": Engineers will take longer to complete tasks because they will have to spend more time understanding what they are working on"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Higher risk of introducing bugs"),": Engineers are more likely to overlook hidden assumptions and unintended side effects which will cause faults.")),(0,o.kt)("p",null,"Moseley and Marks define two types of complexity in their paper ",(0,o.kt)("a",{parentName:"p",href:"http://curtclifton.net/papers/MoseleyMarks06a.pdf"},"Out of the Tar Pit"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Essential Complexity"),": inherent in the essence of the problem"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accidental Complexity"),": anything else which the development team would not have to deal with ideally (e.g. complexity arising from suboptimal language and infrastructure)")),(0,o.kt)("p",null,"While it is inevitable that a system becomes more complex as it grows, we can mitigate it by reducing accidental complexity. We can do so by keeping simplicity in mind when working on the system. One of the best and most common approaches to doing so is by implementing abstractions, which can hide a ton of implementation detail behind a simple-to-understand facade."),(0,o.kt)("h3",{id:"evolvability"},"Evolvability"),(0,o.kt)("p",null,"It is likely your system's requirements will change due to reasons such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An unanticipated use case emerging"),(0,o.kt)("li",{parentName:"ul"},"Business priorities changing"),(0,o.kt)("li",{parentName:"ul"},"User requesting new features")),(0,o.kt)("p",null,"The ease at which you evolve your system to meet the new requirements depends heavily on its simplicity. The easier it is to understand your system, the easier it would be to modify it."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dataintensive.net/"},"Martin Kleppmann: Designing Data-Intensive Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/"},"Michael Kopp: Why Averages Suck and Percentiles are Great")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://curtclifton.net/papers/MoseleyMarks06a.pdf"},"Ben Moseley and Peter Marks: Out of the Tar Pit"))))}d.isMDXComponent=!0},5336:function(e,t,a){t.Z=a.p+"assets/images/ddia-b2e39270aee1d26da86d96745aa744e1.png"}}]);