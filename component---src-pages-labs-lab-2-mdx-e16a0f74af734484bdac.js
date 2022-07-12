"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8594],{207:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(3366),l=(a(7294),a(4983)),i=a(4295),s=["components"],o={},r={_frontmatter:o},c=i.Z;function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For this lab we will focus on Linux deployments of the Instana agent."),(0,l.kt)("h2",null,"Step 1:"),(0,l.kt)("p",null,"We will SSH into the machine that was provided to us. Agent logs are located at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/instana/agent/data/log\n")),(0,l.kt)("p",null,"In the event that there is an issue, this would be where we would pull our logfiles. "),(0,l.kt)("p",null,"This is an important area to have knowledge of, as support will ask for these logs during troubleshooting sessions. "),(0,l.kt)("p",null,"It is also possible to download the logs in the UI if you have access to the UI."),(0,l.kt)("h2",null,"Step 2:"),(0,l.kt)("p",null,"To start agent debug logging, you will need to stop the agent."),(0,l.kt)("p",null,"Enter the following in your terminal window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent stop\n")),(0,l.kt)("p",null,"We can then validate that the service has stopped by entering:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent status\n")),(0,l.kt)("p",null,"Hint: type “q” to exit status command."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.06944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABIElEQVQoz32Sy26DMBBFjRKFRxLANhjbAQJS1LS0UldZ9ROaHf//Lbe6jpxN1S6OxiDPGV/L4vr1itPnAP/uYc8XGPMG032gszO0lpBSQWuNsiyR5zmKovjFfr9HmqYYxhHCzg66b9CcGnS+h7UzlO5xLBWKIg+bY0OSJBBC/IlUCqIqa8hawlkH7xyMadA0ClLWqKoKh8MhyFi32+2/QkWhdQ5tS8mDrutgrQ0RKYyVZFmG3W73jM5vDsuyHJvNBuP5DDHNM4wxAU6gkPDe+K9t2xCZkhg/3luUslJIVzghp8eTDcMA7z2cc08ojgnicO6t6zokkFIG8bIsEN/3O9Z1xe12C9JpmjCOYxCTvu+DgM1sjJVpCNePV3DEy/WKH780qKdHh5UVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Screenshot1",title:"Screenshot1",src:"/Instana_Public_Workshop/static/1ddaef1994309134f59cf3c8163a81e9/3cbba/2.3.png",srcSet:["/Instana_Public_Workshop/static/1ddaef1994309134f59cf3c8163a81e9/7fc1e/2.3.png 288w","/Instana_Public_Workshop/static/1ddaef1994309134f59cf3c8163a81e9/a5df1/2.3.png 576w","/Instana_Public_Workshop/static/1ddaef1994309134f59cf3c8163a81e9/3cbba/2.3.png 1152w","/Instana_Public_Workshop/static/1ddaef1994309134f59cf3c8163a81e9/b5909/2.3.png 1400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Step 3:"),(0,l.kt)("p",null,"Delete all of the files in /opt/instana/agent/data/logs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo rm *\n")),(0,l.kt)("p",null,"Check to make sure files are deleted."),(0,l.kt)("h2",null,"Step 4:"),(0,l.kt)("p",null,"To set the log level to debug, first browse to "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/instana/agent/etc\n")),(0,l.kt)("p",null,"We will be editing org.ops4j.pax.logging.cfg using the vi editor."),(0,l.kt)("p",null,"Note that a list of common vi commands are provided towards the end of this Lab Material. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo vi org.ops4j.pax.logging.cfg\n")),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAArklEQVQI1z2P22qEQBBE/Q8hibrujJm7l4hmB3FV8P9/6ISZhzw0BVXVp+niui5ijOz7zn3frOvKNE3M84wxBqU1fQh47/FT5NsvCCEYhoEQQh5rLVrrvF9s28brN+bAOcc4jiQvaVmWfH1+YFyPdAvKjohnS13X/5Cu62iaBiklx3FQ7Pubn2lBCk3bSh6PJoPTASGeNNKj+xfaWIxWKKUyJHXSBwlUVVX2zvPkDxSeXeVTOCh+AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Screenshot2",title:"Screenshot2",src:"/Instana_Public_Workshop/static/ff760aedd33f5e8047067afc83b51818/3cbba/2.2.png",srcSet:["/Instana_Public_Workshop/static/ff760aedd33f5e8047067afc83b51818/7fc1e/2.2.png 288w","/Instana_Public_Workshop/static/ff760aedd33f5e8047067afc83b51818/a5df1/2.2.png 576w","/Instana_Public_Workshop/static/ff760aedd33f5e8047067afc83b51818/3cbba/2.2.png 1152w","/Instana_Public_Workshop/static/ff760aedd33f5e8047067afc83b51818/0b124/2.2.png 1728w","/Instana_Public_Workshop/static/ff760aedd33f5e8047067afc83b51818/65d9c/2.2.png 1836w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"Now, change from INFO to DEBUG on the line seen below.\nCheck out vi commands if you are experiencing an issue."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABXklEQVQoz22S63KDIBCFeY5WBC/BK6ZiovEWTfr+z3Q6LJrUaX+cWdjBj3NYmZ5mZMOAfJreGkeqrj+7/ej2IgzBPQ++7/8rVvY9lDFIrlckl8tRTXPop217AHIL4ZzqLpbbg31PH2S3G7mxkKzvkXYdQUhdhyBJ4AsBzvkLuEOdPLDMGBTLgmKeUa4rivud4pbLCv18onw8UK4P6sso+uPOQhw4gCcVmCoKxFVFsVXTuFrXUKbB6XxGoBL4UkIEAbnbIS6qBBcneDIhmIWytK6R2qjTRLHsw9tqHdno9oK0a5FcGghp4wpwEb8hItzcuktY3rbIbdxloXcjkB3C1Q7FbOsOp6ZDUBgCOYh4QX4PhqXGINQakdaIdUXxY13SOtI1wnOLUF8Qll+IinJzad/xON0dyu7Pb4zLgm4Y0I4DTNWiyG+QWQ0RZ5CxQqAUfOHD+/x4T5j7R+D2H/4AC0YJcM6xdZsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Screenshot3",title:"Screenshot3",src:"/Instana_Public_Workshop/static/0ead2f84478348f40ffdd3af65d3c4e3/3cbba/2.1.png",srcSet:["/Instana_Public_Workshop/static/0ead2f84478348f40ffdd3af65d3c4e3/7fc1e/2.1.png 288w","/Instana_Public_Workshop/static/0ead2f84478348f40ffdd3af65d3c4e3/a5df1/2.1.png 576w","/Instana_Public_Workshop/static/0ead2f84478348f40ffdd3af65d3c4e3/3cbba/2.1.png 1152w","/Instana_Public_Workshop/static/0ead2f84478348f40ffdd3af65d3c4e3/4bae6/2.1.png 1366w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"Once you have modified with the proper value, save your work."),(0,l.kt)("h2",null,"Step 5:"),(0,l.kt)("p",null,"Start the agent by entering the following line into the terminal window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent start\n")),(0,l.kt)("p",null,"Validate that the service has started by entering:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent status\n")),(0,l.kt)("h2",null,"Step 6:"),(0,l.kt)("p",null,"Verify logging is now at Debug by viewing the"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/instana/agent/data/log\n")),(0,l.kt)("p",null,"Feel free to revert the log level to INFO if you’d like."))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),l=a(8650),i=a.n(l),s=a(5444),o=a(5426),r=a(4311),c=a(5900),d=a.n(c),p=function(e){var t,a=e.title,l=e.theme,i=e.tabs,s=void 0===i?[]:i;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},g=function(e){var t=e.relativePagePath,a=e.repository,l=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||l,o=i.baseUrl,r=i.subDirectory,c=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),u=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,o=l.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),p=l.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=r,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component),b=h,f=a(2881),k=a(6958),A=a(36),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,d=t.frontmatter,u=void 0===d?{}:d,h=t.relativePagePath,A=t.titleType,v=u.tabs,y=u.title,x=u.theme,N=u.description,I=u.keywords,E=u.date,P=(0,k.Z)().interiorTheme,B=(0,s.useStaticQuery)("2456312558").site.pathPrefix,S=B?l.pathname.replace(B,""):l.pathname,C=v?S.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",W=x||P;return n.createElement(r.Z,{tabs:v,homepage:!1,theme:W,pageTitle:y,pageDescription:N,pageKeywords:I,titleType:A},n.createElement(p,{title:c?n.createElement(c,null):y,label:"label",tabs:v,theme:W}),v&&n.createElement(b,{title:y,slug:S,tabs:v,currentTab:C}),n.createElement(f.Z,{padded:!0},a,n.createElement(g,{relativePagePath:h}),n.createElement(w,{date:E})),n.createElement(m.Z,{pageContext:t,location:l,slug:S,tabs:v,currentTab:C}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-2-mdx-e16a0f74af734484bdac.js.map