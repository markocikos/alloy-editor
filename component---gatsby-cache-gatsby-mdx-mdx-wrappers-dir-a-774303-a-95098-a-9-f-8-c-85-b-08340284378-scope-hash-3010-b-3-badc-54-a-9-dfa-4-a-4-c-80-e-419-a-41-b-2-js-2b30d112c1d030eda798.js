(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),l=n(177),o=n.n(l),i=n(0),s=n.n(i),c=n(172),d=n(178),u=n(6),m=n.n(u),f=n(173),g=n.n(f),p=n(212),h=(n(186),n(83),n(181),n(40),n(213)),v=n(160),b=(n(215),n(216),n(169)),E=n.n(b),y=function(e){function t(){return e.apply(this,arguments)||this}m()(t,e);var n=t.prototype;return n._handleOnClick=function(e,t,n,r){r.stopPropagation();var a=this.refs["navItem"+e+t];a.classList.contains("active")&&!n.items||a.classList.toggle("active")},n._isActive=function(e){var t=this.props.location.pathname.split(".")[0];return e.isFolder?t.includes(e.id):t===e.link},n.renderNavigationItems=function(){var e=this,n=this.props,r=n.sectionList,a=n.location,l=n.depth,o=void 0===l?0:l;return r.map(function(n,r){var l=E()("nav-item",{active:!0===e._isActive(n)});return s.a.createElement("li",{key:r,ref:"navItem"+r+o,className:l,onClick:e._handleOnClick.bind(e,r,o,n)},s.a.createElement(N,{page:n}),n.items&&s.a.createElement(t,{sectionList:n.items,location:a,depth:o+1}))})},n.render=function(){return s.a.createElement("ul",{className:"nav flex-column"},this.renderNavigationItems())},t}(i.Component),N=function(e){var t=e.page;return t.items?s.a.createElement("a",{className:"nav-link",href:"#no"},s.a.createElement("span",null,t.title),s.a.createElement("svg",{className:"lexicon-icon float-right mt-1"},s.a.createElement("use",{href:"/images/icons/icons.svg#caret-bottom"}))):s.a.createElement(v.Link,{to:t.link+".html",className:"nav-link"},s.a.createElement("span",null,t.title))},x=y,_={}.ALGOLIA_API_KEY,w={}.ALGOLIA_INDEX_NAME,k=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={disabled:!1},t}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.docsearch&&""!==_&&""!==w?window.docsearch({apiKey:_||"apiKey",indexName:w||"indexName",inputSelector:"#algolia-doc-search"}):this.setState({disabled:!0})},n.render=function(){var e=this.props.placeholder;return!this.state.disabled&&s.a.createElement("div",{className:"sidebar-search"},s.a.createElement("div",{className:"page-autocomplete"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{disabled:this.state.disabled,className:"form-control h-auto",id:"algolia-doc-search",name:"q",placeholder:e,required:!0,type:"text"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{className:"btn btn-outline-secondary",type:"button"},s.a.createElement("svg",{className:"lexicon-icon"},s.a.createElement("use",{href:"/images/icons/icons.svg#search"}))))))))},t}(i.Component),T=function(e){var t=e.allMdx.edges.map(function(e){var t=e.node.fields,n=t.slug,r=t.title,a=t.alwaysActive,l=t.order;return C(n.replace(".html",""),r,l,a)});return t.filter(function(e){return e.isRoot}).map(function(e){return A(e,t)}).sort(function(e,t){return e.order-t.order})},C=function(e,t,n,r){var a=e.split("/"),l=a[a.length-1],o=a[a.length-2],i="index"===l;return{id:"index"===l?o:l,link:"/"+e,title:t,parentLink:"/"+e.substring(0,e.lastIndexOf("/")+1),isFolder:i,isRoot:3===a.length&&i||2===a.length&&!i,order:n,alwaysActive:r}},A=function e(t,n){return t.isFolder&&(t.items=n.filter(function(e){return e.link!==t.link}).filter(function(e){return e.link===t.parentLink+e.id+(e.isFolder?"/index":"")}).map(function(t){return e(t,n)}).sort(function(e,t){return e.order-t.order})),t},L=function(e){return s.a.createElement(v.StaticQuery,{query:"3449255715",render:function(t){var n="sidebar pt-header position-fixed bg-white shadow";return e.navbarToggled&&(n+=" toggler-expanded"),s.a.createElement("nav",{className:n,id:"clay-sidebar"},s.a.createElement("div",{className:"p-3 p-sm-5"},s.a.createElement(k,{placeholder:"Search"}),s.a.createElement(x,{sectionList:T(t),location:e.location})))},data:h})},S=n(166),I=(n(85),n(164)),q=n.n(I),R=n(236),M=n.n(R),D=function(){function e(){var e=this,t=[];Array.prototype.slice.call(document.querySelectorAll(".code-container")).forEach(function(n){t.push({label:e._getTabLabelFromElement(n),element:n}),n.nextElementSibling&&q.a.hasClass(n.nextElementSibling,"code-container")||(t.length>1&&e._renderTabs(t),t=[])})}var t=e.prototype;return t._getTabLabelFromElement=function(e){return e.getAttribute("data-label")},t._hide=function(e){q.a.addClasses(e,"hide")},t._hideAll=function(e){var t=this;e.forEach(function(e){t._hide(e.element)})},t._renderTabs=function(e){var t=this,n=q.a.buildFragment('<div class="tabContainer"></div>'),r=new M.a({elementClasses:"nav-code-tabs",tabs:e},n);r.on("changeRequest",function(e){var n=e.state.tab;t._hideAll(r.tabs),t._show(r.tabs[n].element)}),this._hideAll(r.tabs),this._show(r.tabs[0].element),e[0].element.parentNode.insertBefore(n,e[0].element)},t._show=function(e){q.a.removeClasses(e,"hide")},e}(),F=n(255),H=n.n(F),P=n(259),U=n.n(P),B=function(){},G=function(){function e(){this.clayTooltip=new H.a(new B),this.clayClipboard=new U.a({selector:".code-container .btn-copy",text:function(e){return e.setAttribute("title","Copied"),setTimeout(function(){e.setAttribute("title","Copy")},2e3),e.parentNode.querySelector("pre code").innerText}})}return e.prototype.dispose=function(){this.clayTooltip.dispose(),this.clayClipboard.dispose()},e}(),O=n(171),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navbarToggled:!1},n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._codeTabs=new D,this._codeClipboard=new G},n.componentWillUnmount=function(){this._codeTabs=null,this._codeClipboard.dispose()},n.docsNavbarToggleClick=function(){this.setState(function(e){return{navbarToggled:!e.navbarToggled}})},n.render=function(){var e=this.props,t=e.data,n=e.location,r=t.mdx,a=r.code,l=r.frontmatter.title,o="AlloyEditor | "+l,i=r.excerpt;return s.a.createElement("div",{className:"docs"},s.a.createElement(g.a,null,s.a.createElement("title",null,o),s.a.createElement("meta",{name:"description",content:i}),s.a.createElement("meta",{property:"og:title",content:o}),s.a.createElement("meta",{property:"og:description",content:i}),s.a.createElement("meta",{property:"og:image",content:"/images/home/banner_back.png"}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{property:"og:site_name",content:"AlloyEditor"}),s.a.createElement("meta",{name:"twitter:image:alt",content:"AlloyEditor presentation"})),s.a.createElement("main",{className:"content"},s.a.createElement("header",null,s.a.createElement(S.a,{effect:!0,static:!0,sidebarHamburguerIcon:!0,onNavbarToggleClick:this.docsNavbarToggleClick.bind(this)})),s.a.createElement("section",null,s.a.createElement(L,{location:n,navbarToggled:this.state.navbarToggled}),s.a.createElement("div",{className:"sidebar-offset pt-header"},s.a.createElement("div",{className:"py-5 bg-dark text-white"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"text-center my-5"},l))))),s.a.createElement("div",{className:"py-4 p-sm-5 min-vh-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-xl-8 mx-auto"},s.a.createElement("article",{className:"docs-content"},s.a.createElement(p.a,null,a.body)))))),s.a.createElement(O.a,null)))))},t}(i.Component);n.d(t,"pageQuery",function(){return Q});var Q="3042439324";t.default=function(e){var t=e.children,n=o()(e,["children"]);return s.a.createElement(c.MDXScopeProvider,{__mdxScope:a()({},d.a)},s.a.createElement(j,n,t))}},160:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),l=n(5),o=n.n(l),i=n(158),s=n.n(i);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(161),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var u=n(38);n.d(t,"parsePath",function(){return u.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,n){var r;e.exports=(r=n(163))&&r.default||r},163:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),l=n(0),o=n.n(l),i=n(5),s=n.n(i),c=n(56),d=n(3),u=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,a()({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},166:function(e,t,n){"use strict";n(174);var r=n(6),a=n.n(r),l=n(55),o=n.n(l),i=n(0),s=n.n(i),c=n(160),d=n(169),u=n.n(d),m=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._window="undefined"!=typeof window&&window,t._document="undefined"!=typeof document&&document,t._rootNode=t._window||t._document,t._addScroll=t._addScroll.bind(o()(o()(t))),t}a()(t,e);var n=t.prototype;return n._getScrollTop=function(){return this._rootNode===this._window?this._rootNode.pageYOffset:this._rootNode===this._document?this._rootNode.defaultView.pageYOffset:void 0},n._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},n.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},n.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},n.render=function(){var e=this.props,t=e.fixed,n=void 0===t||t,r=e.opaque,a=void 0!==r&&r,l=e.effect,o=void 0!==l&&l,i=e.sidebarHamburguerIcon,d=void 0!==i&&i,m=u()("navbar navbar-expand-lg navbar-dark",{"fixed-top":n,scroll:o,"bg-primary":a});return s.a.createElement("nav",{ref:"navElement",className:m},s.a.createElement(c.Link,{to:"/",className:"navbar-brand",title:"alloyeditor.com"},s.a.createElement("img",{className:"logo mr-3",src:"/images/home/logo.png",alt:"alloy editor"})),d&&s.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},s.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#bars"}))),s.a.createElement("ul",{className:"navbar-nav font-weight-bold ml-md-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(c.Link,{className:"nav-link ml-lg-5",to:"/docs/"},"Docs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(c.Link,{className:"nav-link ml-lg-5",to:"/updates/"},"Updates"))))},t}(i.Component);t.a=m},171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=function(){return a.a.createElement("section",{className:"footer bg-dark text-white"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12"},a.a.createElement("h2",{className:"h4 text-center"},a.a.createElement("a",{className:"text-decoration-none",href:"http://liferay.com",target:"_blank",rel:"noopener noreferrer"},"Liferay.com")),a.a.createElement("ul",{className:"nav justify-content-center mt-4"},a.a.createElement("li",{className:"nav-item mx-sm-1"},a.a.createElement("a",{className:"nav-link px-2 px-sm-3",href:"https://www.facebook.com/liferay/",target:"_blank",rel:"noopener noreferrer",title:"facebook"},a.a.createElement("svg",{className:"lexicon-icon"},a.a.createElement("use",{href:"/images/icons/icons.svg#social-facebook"})))),a.a.createElement("li",{className:"nav-item mx-sm-1"},a.a.createElement("a",{className:"nav-link px-2 px-sm-3",href:"https://twitter.com/liferay",target:"_blank",rel:"noopener noreferrer",title:"twitter"},a.a.createElement("svg",{className:"lexicon-icon"},a.a.createElement("use",{href:"/images/icons/icons.svg#twitter"})))),a.a.createElement("li",{className:"nav-item mx-sm-1"},a.a.createElement("a",{className:"nav-link px-2 px-sm-3",href:"https://www.linkedin.com/company/liferay-inc-?trk=NUS_CMPY_TWIT",target:"_blank",rel:"noopener noreferrer",title:"linkedin"},a.a.createElement("svg",{className:"lexicon-icon"},a.a.createElement("use",{href:"/images/icons/icons.svg#social-linkedin"})))),a.a.createElement("li",{className:"nav-item mx-sm-1"},a.a.createElement("a",{className:"nav-link px-2 px-sm-3",href:"https://github.com/liferay/alloy-editor",target:"_blank",rel:"noopener noreferrer",title:"github"},a.a.createElement("img",{src:"/images/home/GitHub-Mark-64px.svg",alt:""}))),a.a.createElement("li",{className:"nav-item mx-sm-1"},a.a.createElement("a",{className:"nav-link px-2 px-sm-3",href:"https://community.liferay.com/projects",target:"_blank",rel:"noopener noreferrer",title:"projects"},a.a.createElement("svg",{className:"lexicon-icon"},a.a.createElement("use",{href:"/images/icons/icons.svg#grid"})))))))))};t.a=l},178:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(179);t.a={React:a.a,MDXTag:l.MDXTag}},213:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{redirect:"/docs/develop/about.html",slug:"docs/index.html",title:"Docs",order:0}}},{node:{fields:{redirect:null,slug:"docs/develop/about.html",title:"About",order:1}}},{node:{fields:{redirect:null,slug:"docs/develop/create_buttons.html",title:"Create Buttons",order:4}}},{node:{fields:{redirect:null,slug:"docs/develop/create_toolbars.html",title:"Create Toolbars",order:6}}},{node:{fields:{redirect:null,slug:"docs/develop/create.html",title:"Create",order:3}}},{node:{fields:{redirect:null,slug:"docs/develop/create_ui.html",title:"Create entirely new UI",order:7}}},{node:{fields:{redirect:null,slug:"docs/develop/create_skin.html",title:"Create Skins",order:5}}},{node:{fields:{redirect:"/docs/develop/about.html",slug:"docs/develop/index.html",title:"Develop",order:1}}},{node:{fields:{redirect:null,slug:"docs/use/button_configuration.html",title:"Button configuration",order:7}}},{node:{fields:{redirect:null,slug:"docs/use/editor_configuration.html",title:"Editor Configuration",order:5}}},{node:{fields:{redirect:null,slug:"docs/develop/how-to-build-it.html",title:"Build it",order:2}}},{node:{fields:{redirect:null,slug:"docs/use/how_to_use_it.html",title:"How to use it?",order:2}}},{node:{fields:{redirect:"/docs/use/about.html",slug:"docs/use/index.html",title:"Use",order:2}}},{node:{fields:{redirect:null,slug:"docs/use/readonly_configuration.html",title:"Read only mode",order:8}}},{node:{fields:{redirect:null,slug:"docs/use/react_component.html",title:"Creating a React component",order:3}}},{node:{fields:{redirect:null,slug:"docs/use/skin.html",title:"Skins",order:9}}},{node:{fields:{redirect:null,slug:"docs/use/use_ckeditor_plugins.html",title:"How to use CKEditor Plugins?",order:4}}},{node:{fields:{redirect:null,slug:"docs/use/use.html",title:"Basic use",order:1}}},{node:{fields:{redirect:null,slug:"docs/use/toolbar_configuration.html",title:"Toolbar configuration",order:6}}},{node:{fields:{redirect:null,slug:"docs/features/camera.html",title:"Camera",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/hline.html",title:"Horizontal Line",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/code.html",title:"Code",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/bold.html",title:"Bold",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/hone.html",title:"Heading 1",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/image.html",title:"Image",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/htwo.html",title:"Heading 2",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/imagealigncenter.html",title:"Image Alignment - Center",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/indent-outdent.html",title:"Indent and outdent block content",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/imagealignleft.html",title:"Image Alignment - Left",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/imagealignright.html",title:"Image Alignment - Right",order:0}}},{node:{fields:{redirect:"/docs/features/bold.html",slug:"docs/features/index.html",title:"Features",order:3}}},{node:{fields:{redirect:null,slug:"docs/features/italic.html",title:"Italic",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/link.html",title:"Link",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/linkautocomplete.html",title:"Link AutoComplete",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/ol.html",title:"Lists (Numbered)",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/paragraphaligncenter.html",title:"Text Alignment - Centered",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/paragraphalignjustify.html",title:"Text Alignment - Justified",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/paragraphalignleft.html",title:"Text Alignment - Left",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/paragraphalignright.html",title:"Text Alignment - Right",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/quote.html",title:"Quote",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/removeformat.html",title:"Remove Format",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/strike.html",title:"Strike",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/subscript.html",title:"Subscript",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/styles.html",title:"Styles",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/table.html",title:"Table",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/superscript.html",title:"Superscript",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/tablecell.html",title:"Table - Cells",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/tableheading.html",title:"Table - Heading",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/tableremove.html",title:"Table - Remove",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/tablerow.html",title:"Table - Rows",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/tablecolumn.html",title:"Table - Columns",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/twitter.html",title:"Twitter",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/ul.html",title:"Lists (Bulleted)",order:0}}},{node:{fields:{redirect:null,slug:"docs/features/underline.html",title:"Underline",order:0}}}]}}}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-a-774303-a-95098-a-9-f-8-c-85-b-08340284378-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-2b30d112c1d030eda798.js.map