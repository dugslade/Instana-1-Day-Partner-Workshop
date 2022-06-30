"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1649],{2234:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return h}});var a=n(3366),o=(n(7294),n(4983)),l=n(4295),r=["components"],s={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},p=i("PageDescription"),m=i("AnchorLinks"),c=i("AnchorLink"),u={_frontmatter:s},d=l.Z;function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"description: Instructions for developing and contributing to the theme\ndate: 27 January 2020"),(0,o.kt)(p,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the\ndevelopment environment set up as quickly as possible so you can start\ncontributing.")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(c,{mdxType:"AnchorLink"},"Project setup"),(0,o.kt)(c,{mdxType:"AnchorLink"},"Development"),(0,o.kt)(c,{mdxType:"AnchorLink"},"Work in a branch"),(0,o.kt)(c,{mdxType:"AnchorLink"},"Sass and CSS Modules"),(0,o.kt)(c,{mdxType:"AnchorLink"},"VS Code"),(0,o.kt)(c,{mdxType:"AnchorLink"},"Test pages"),(0,o.kt)(c,{mdxType:"AnchorLink"},"Publishing")),(0,o.kt)("h2",null,"Project setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon"},"gatsby-theme-carbon"),"\nand click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fork")," button in the top-right corner.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After it’s finished, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Clone or Download")," button and copy the\ncontents.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your terminal, clone the repo into your directory of choice"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone [PASTE_URL_HERE]\ncd gatsby-theme-carbon\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"When you clone your forked repo the ",(0,o.kt)("inlineCode",{parentName:"li"},"origin")," is set to your fork by default.\nYou’ll want to add a remote that points to the upstream repo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"In your terminal, verify that the remotes have been set")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\n")),(0,o.kt)("h2",null,"Development"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/install/"},"yarn")," and yarn workspaces to\ndevelop the Carbon Gatsby theme. This allows us to have a development\nenvironment that’s closely linked to the theme with minimal setup. Run\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," to install all of the projects dependencies."),(0,o.kt)("p",null,"This project has two packages: the actual theme package (",(0,o.kt)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"),")\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," package. The example package emulates a project which uses the\ntheme. Its only dependencies are Gatsby, React, and the adjacent theme package.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," package also serves as the theme’s documentation and\n",(0,o.kt)("a",{parentName:"p",href:"https://gatsby-theme-carbon.now.sh"},"website"),"; it’s deployed on every merge to\nmain."),(0,o.kt)("p",null,"New theme development will happen in the theme package while documentation and\ntesting of that change will occur through changes in the example directory."),(0,o.kt)("h3",null,"Development scripts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn dev")," – start the development environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn dev:clean")," – clear cache and restart dev"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn format")," – format your code with prettier"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn lint")," - check for errors in your javascript"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn test:prefix")," – build and serve with a path prefix")),(0,o.kt)("h2",null,"Work in a branch"),(0,o.kt)("p",null,"You should always start a new project by pulling upstream changes into main and\nthen creating a new branch. This workflow ensures you don’t accidentally commit\nanything to your main branch and get stuck when trying to open a pull request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\ngit pull upstream main\ngit checkout -b my-branch-name\n")),(0,o.kt)("h3",null,"Commit messages"),(0,o.kt)("p",null,"For commit messages we use\n",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153#allowed-type"},"Angular commit conventions"),"\nto dictate whether a commit is for a feature, fix, docs, etc. You need to prefix\nyour commits with one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feat (feature)"),(0,o.kt)("li",{parentName:"ul"},"fix (bug fix)"),(0,o.kt)("li",{parentName:"ul"},"docs (documentation)"),(0,o.kt)("li",{parentName:"ul"},"style (formatting, missing semi colons, …)"),(0,o.kt)("li",{parentName:"ul"},"refactor"),(0,o.kt)("li",{parentName:"ul"},"test (when adding missing tests)"),(0,o.kt)("li",{parentName:"ul"},"chore (maintain)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "chore: this is a test commit message"\n')),(0,o.kt)("h3",null,"Opening a Pull request"),(0,o.kt)("p",null,"When you’re ready to open a pull request, push to your origin remote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin my-branch-name\n")),(0,o.kt)("p",null,"You’ll get a message in your terminal with a URL to open up a pull request in\nthe upstream repository. Navigate to that URL and be sure to give a detailed\nsummary of your pull request in the title and body section of the form."),(0,o.kt)("h2",null,"Sass and CSS Modules"),(0,o.kt)("p",null,"For internal theme components we use\n",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/syntax"},"Sass")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules#css-modules"},"CSS Modules"),". This\nallows us to take advantage of the Carbon Design System resources while not\nworrying about className collisions. By default, each ",(0,o.kt)("inlineCode",{parentName:"p"},".scss")," file will be\nsupplied with all of the Carbon Sass\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/blob/main/packages/components/src/globals/scss/_vars.scss"},"variables"),":\ncolor, spacing, theme, and motion, as well as type and layout mixins, are\nimported automatically."),(0,o.kt)("p",null,"You should colocate your stylesheet with the component(s) that import it. If the\ncomponent is ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeView")," then the stylesheet should be ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeView.module.scss"),".\nAll contained within the ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeView")," directory."),(0,o.kt)("h3",null,"CSS Modules"),(0,o.kt)("p",null,"You don’t need to prefix your classes as CSS Modules will generate unique class\nnames for you. Import the class from the ",(0,o.kt)("inlineCode",{parentName:"p"},".scss")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=TreeView.module.scss",path:"TreeView.module.scss"},".treeView {\n  color: $text-01;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"},"import { treeView } from './style.css';\n\nconst TreeView = (props) => <div className={treeView} />;\n")),(0,o.kt)("p",null,"For conditionally applying class names, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"classname")," library. Note how\nwe’re using a\n",(0,o.kt)("a",{parentName:"p",href:"https://tylermcginnis.com/computed-property-names/"},"computed property name")," for\nthe property being based to ",(0,o.kt)("inlineCode",{parentName:"p"},"cx"),". That’s because the className isn’t literally\n",(0,o.kt)("inlineCode",{parentName:"p"},'"long"')," it’s a value generated by CSS Modules and placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"long"),"\nvariable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"path=TreeView.js",path:"TreeView.js"},"import cx from 'classname';\nimport { treeView, long } from './style.css';\n\nconst TreeView = (props) => {\n  const className = cx(treeView, {\n    [long]: props.long,\n  });\n  const TreeView = (props) => <div className={className} />;\n};\n")),(0,o.kt)("p",null,"If you need to target a global class not processed by CSS Modules, you can do so\nwith the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules#exceptions"},"global selector"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},":global(.bx--grid) .codeBlock {\n  @include carbon--type-style('code-01');\n}\n")),(0,o.kt)("h2",null,"VS Code"),(0,o.kt)("p",null,"To get linting error feedback while writing javascript and SCSS in VS Code,\ninstall the\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint"},"stylelint"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESlint"),"\nextensions. We use ESLint’s Prettier rules to format and lint all of our\nJavaScript in one pass. To get your code to format properly on save, add the\nfollowing to a ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode/settings.json")," in the root of your project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"path=.vscode/settings.json",path:".vscode/settings.json"},'{\n  "editor.formatOnSave": true,\n  "[javascript]": {\n    "editor.formatOnSave": false\n  },\n  "[javascriptreact]": {\n    "editor.formatOnSave": false\n  },\n  "eslint.autoFixOnSave": true,\n  "prettier.disableLanguages": ["javascript", "javascriptreact"]\n}\n')),(0,o.kt)("p",null,"To lint the entire project and get errors in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Problems")," tray, you can add\nthe following to a ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode/tasks.json")," file in the root of your project. You\ncan run these tasks with ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd+shift+d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"path=.vscode/tasks.json",path:".vscode/tasks.json"},'{\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "lint:js",\n      "problemMatcher": "$eslint-stylish"\n    },\n    {\n      "type": "npm",\n      "script": "lint:scss",\n      "problemMatcher": {\n        "owner": "stylelint",\n        "fileLocation": ["relative", "${workspaceFolder}"],\n        "pattern": [\n          {\n            "regexp": "^([^\\\\s].*)$",\n            "file": 1\n          },\n          {\n            "regexp": "^\\\\s+(\\\\d+):(\\\\d+)\\\\s+(✖|warning)\\\\s+(.*)\\\\s\\\\s+(.*)$",\n            "line": 1,\n            "column": 2,\n            "severity": 3,\n            "message": 4,\n            "code": 5,\n            "loop": true\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",null,"Test pages"),(0,o.kt)("p",null,"If you want to add examples of what you are working on or see changes you’ve\nmade, you can add an MDX file to ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/src/pages/test")," that will be visible\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"(your-server-name)/test/(added-file)")," during development. If you do add a\npage to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/test")," directory, update the below list with the file you added and\nits purpose to be included with your pull request."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/test/spacing-audit"},(0,o.kt)("inlineCode",{parentName:"a"},"Spacing audit")),": use this page to test spacing around\ncomponents when combined in common patterns.")),(0,o.kt)("h2",null,"Publishing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pull the latest from the main branch, usually by running\n",(0,o.kt)("inlineCode",{parentName:"li"},"git pull upstream main")," on your local machine."),(0,o.kt)("li",{parentName:"ol"},"From the root of the package run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn release"),"."),(0,o.kt)("li",{parentName:"ol"},"Follow the prompts accordingly."),(0,o.kt)("li",{parentName:"ol"},"In the project’s\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/releases"},"release tab"),",\nedit the new release to include a summary of new changes.")))}h.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7294),o=n(8650),l=n.n(o),r=n(5444),s=n(5426),i=n(4311),p=n(5900),m=n.n(p),c=function(e){var t,n=e.title,o=e.theme,l=e.tabs,r=void 0===l?[]:l;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},u=function(e){var t=e.relativePagePath,n=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=n||o,s=l.baseUrl,i=l.subDirectory,p=s+"/edit/"+l.branch+i+"/src/pages"+t;return s?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},d=n(4275),h=n(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,s=o.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),i=n===s,p=new RegExp(s+"/?(#.*)?$"),c=o.replace(p,n);return a.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component),k=g,y=n(2881),b=n(6958),N=n(36),f=function(e){var t=e.date,n=new Date(t);return t?a.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(N.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,n=e.children,o=e.location,p=e.Title,m=t.frontmatter,h=void 0===m?{}:m,g=t.relativePagePath,N=t.titleType,w=h.tabs,v=h.title,x=h.theme,C=h.description,T=h.keywords,E=h.date,S=(0,b.Z)().interiorTheme,j=(0,r.useStaticQuery)("2456312558").site.pathPrefix,P=j?o.pathname.replace(j,""):o.pathname,L=w?P.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",V=x||S;return a.createElement(i.Z,{tabs:w,homepage:!1,theme:V,pageTitle:v,pageDescription:C,pageKeywords:T,titleType:N},a.createElement(c,{title:p?a.createElement(p,null):v,label:"label",tabs:w,theme:V}),w&&a.createElement(k,{title:v,slug:P,tabs:w,currentTab:L}),a.createElement(y.Z,{padded:!0},n,a.createElement(u,{relativePagePath:g}),a.createElement(f,{date:E})),a.createElement(d.Z,{pageContext:t,location:o,slug:P,tabs:w,currentTab:L}),a.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contributions-mdx-a0cfb6f2be43ce1f2ca8.js.map