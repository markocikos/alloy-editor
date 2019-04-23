(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(172),i=a.n(o),l=a(159),c=a(165),s="A modern WYSIWYG editor built on top of CKEDITOR, designed to create modern and gorgeous web content.",d={backgroundImage:"url(/images/home/banner_back.png)"};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-404"},r.a.createElement(i.a,null,r.a.createElement("title",null,"AlloyEditor | Page 404"),r.a.createElement("meta",{name:"description",content:s}),r.a.createElement("meta",{property:"og:title",content:"AlloyEditor | Page 404"}),r.a.createElement("meta",{property:"og:description",content:s}),r.a.createElement("meta",{property:"og:image",content:"/images/home/banner_back.png"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"og:site_name",content:"AlloyEditor"}),r.a.createElement("meta",{name:"twitter:image:alt",content:"AlloyEditor presentation"})),r.a.createElement("main",{className:"content"},r.a.createElement("header",{className:"header position-relative bg-primary text-white vh-100 d-flex flex-column justify-content-center",style:d},r.a.createElement(c.a,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-xl-8 mx-auto text-center"},r.a.createElement("h1",{className:"display-2 text-uppercase"},"Error 404"),r.a.createElement("p",{className:"h3 font-weight-light mt-5"},"The page you were looking for is not available."),r.a.createElement(l.Link,{to:"/",className:"btn btn-lg btn-light text-uppercase mt-4 mt-lg-5 mx-3"},"Back to Home"))))))))}},159:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(157),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(160),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),o=a(0),i=a.n(o),l=a(5),c=a.n(l),s=a(56),d=a(3),m=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},165:function(e,t,a){"use strict";a(173);var n=a(6),r=a.n(n),o=a(55),i=a.n(o),l=a(0),c=a.n(l),s=a(159),d=a(168),m=a.n(d),u=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._window="undefined"!=typeof window&&window,t._document="undefined"!=typeof document&&document,t._rootNode=t._window||t._document,t._addScroll=t._addScroll.bind(i()(i()(t))),t}r()(t,e);var a=t.prototype;return a._getScrollTop=function(){return this._rootNode===this._window?this._rootNode.pageYOffset:this._rootNode===this._document?this._rootNode.defaultView.pageYOffset:void 0},a._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},a.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},a.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},a.render=function(){var e=this.props,t=e.fixed,a=void 0===t||t,n=e.opaque,r=void 0!==n&&n,o=e.effect,i=void 0!==o&&o,l=e.sidebarHamburguerIcon,d=void 0!==l&&l,u=m()("navbar navbar-expand-lg navbar-dark",{"fixed-top":a,scroll:i,"bg-primary":r});return c.a.createElement("nav",{ref:"navElement",className:u},c.a.createElement(s.Link,{to:"/",className:"navbar-brand",title:"alloyeditor.com"},c.a.createElement("img",{className:"logo mr-3",src:"/images/home/logo.png",alt:"alloy editor"})),d&&c.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},c.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#bars"}))),c.a.createElement("ul",{className:"navbar-nav font-weight-bold ml-md-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.Link,{className:"nav-link ml-lg-5",to:"/docs/"},"Docs")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.Link,{className:"nav-link ml-lg-5",to:"/updates/"},"Updates"))))},t}(l.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-604940ff52c1cd08f8a6.js.map