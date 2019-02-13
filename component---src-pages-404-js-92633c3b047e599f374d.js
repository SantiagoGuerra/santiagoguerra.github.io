(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(133),o=n(163),c=n(139),l=n(140),s=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"backgroundDark",height:["35vh","80vh"],width:["95vw","60vw"]}),r.a.createElement(l.a,{color:"primary",height:["25vh","35vh"],width:["75vw","60vw"],invertX:!0}),r.a.createElement(l.a,{color:"secondaryLight",height:["10vh","20vh"],width:["50vw","50vw"],invertX:!0,invertY:!0}))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a.Container,{id:"404",Background:s},r.a.createElement(i.Box,{width:[320,400,600],m:"auto"},r.a.createElement(i.Heading,{color:"primaryDark",fontSize:["9rem","13rem","16rem"]},"404"),r.a.createElement(i.Heading,{color:"secondary",fontSize:["4rem","5rem","6rem"]},"There isn't anything here"))))}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(143),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var u=n(30);n.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e,t,n){"use strict";n(136);var a=n(0),r=n.n(a),i=n(131),o=n(138),c=n(133),l=n(4),s=n.n(l),m=n(170),u=n.n(m),d=n(146),f=i.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"sc-18uueee-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;"]),h=function(){return r.a.createElement("div",null)},p=function(e){var t=e.id,n=e.children,a=e.Background,i=void 0===a?h:a;return r.a.createElement(o.b,{id:t,style:{position:"relative"}},r.a.createElement(i,null),r.a.createElement(f,null,n))};p.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,Background:s.a.func};var g=function(e){var t=e.name,n=e.icon,a=void 0===n?"":n,i=e.label,o=void 0===i?"":i;return r.a.createElement(u.a,{left:!0},r.a.createElement(c.Heading,{color:"secondaryDark",mb:4},r.a.createElement(d.a,{selected:!0},t,a&&r.a.createElement("span",{role:"img","aria-label":o,style:{marginLeft:"10px"}},a))))};g.propTypes={name:s.a.string.isRequired,icon:s.a.string,label:s.a.string},t.a={Container:p,Header:g}},140:function(e,t,n){"use strict";var a=n(131).default.div.withConfig({displayName:"Triangle",componentId:"le4p17-0"})(["position:absolute;width:0;height:0;z-index:-2;"," "," @media only screen and (min-width:768px){"," ",";}"],function(e){var t=e.theme.colors[e.color]||e.color,n=e.height[0]+" solid "+t+";";return e.invertY?"border-bottom: "+n+"; bottom: 0;":"border-top: "+n+";"},function(e){var t=e.width[0]+" solid transparent;";return e.invertX?"border-left: "+t+"; right: 0;":"border-right: "+t+";"},function(e){var t=e.height[1];return e.invertY?"border-bottom-width: "+t+";":"border-top-width: "+t+";"},function(e){var t=e.width[1];return e.invertX?"border-left-width: "+t+";":"border-right-width: "+t+";"});t.a=a},143:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},146:function(e,t,n){"use strict";var a=n(131).default.span.withConfig({displayName:"LinkAnimated",componentId:"qj14bt-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},152:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#f0e6f6",primary:"#7c37ad",primaryLight:"#ae66df",primaryDark:"#4b007d",secondary:"#ff4081",secondaryLight:"#ff79b0",secondaryDark:"#c60055"}},153:function(e){e.exports={data:{contentfulAbout:{name:"Santiago Guerra",description:"My Personal Portfolio",profile:{favicon16:{src:"//images.ctfassets.net/h3c5hloai5nv/6nf3rNaaVaUqYcoAcciSeC/f893ed5f0fcecbe98a0ea0dc00716034/letter-s-between-straight-parenthesis-symbol__2_.png?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/h3c5hloai5nv/6nf3rNaaVaUqYcoAcciSeC/f893ed5f0fcecbe98a0ea0dc00716034/letter-s-between-straight-parenthesis-symbol__2_.png?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/h3c5hloai5nv/6nf3rNaaVaUqYcoAcciSeC/f893ed5f0fcecbe98a0ea0dc00716034/letter-s-between-straight-parenthesis-symbol__2_.png?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/h3c5hloai5nv/6nf3rNaaVaUqYcoAcciSeC/f893ed5f0fcecbe98a0ea0dc00716034/letter-s-between-straight-parenthesis-symbol__2_.png?w=180&fl=progressive&q=50"}}}}}},154:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(50),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},163:function(e,t,n){"use strict";var a=n(164),r=n.n(a),i=n(0),o=n.n(i),c=n(131),l=n(4),s=n.n(l),m=n(138),u=(n(165),n(142)),d=n.n(u),f=n(152),h=n.n(f),p=(n(136),n(153)),g=n(166),v=n.n(g),b=n(137),y=function(e){var t=e.theme,n=void 0===t?{}:t;return o.a.createElement(b.StaticQuery,{query:"4063282471",render:function(e){var t=e.contentfulAbout,a=t.name,r=t.description,i=t.profile,c=a+" Portofolio";return o.a.createElement(v.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,c),o.a.createElement("meta",{name:"description",content:r}),o.a.createElement("link",{rel:"shortcut icon",href:i.favicon32.src}),o.a.createElement("meta",{name:"theme-color",content:n.background}),o.a.createElement("meta",{name:"image",content:i.favicon32.src}),o.a.createElement("meta",{itemProp:"name",content:c}),o.a.createElement("meta",{itemProp:"description",content:r}),o.a.createElement("meta",{itemProp:"image",content:i.favicon32.src}),o.a.createElement("meta",{name:"og:title",content:c}),o.a.createElement("meta",{name:"og:description",content:r}),o.a.createElement("meta",{name:"og:image",content:i.bigIcon.src}),o.a.createElement("meta",{name:"og:site_name",content:c}),o.a.createElement("meta",{name:"og:locale",content:"en_US"}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:c}),o.a.createElement("meta",{name:"twitter:description",content:r}),o.a.createElement("meta",{name:"twitter:image",content:i.bigIcon.src}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:i.appleIcon.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:i.favicon32.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:i.favicon16.src}),o.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:p})};y.propTypes={theme:s.a.object};var w=Object(c.withTheme)(y);function E(){var e=r()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return E=function(){return e},e}var x=Object(c.createGlobalStyle)(E());d()({ssrFadeout:!0});var k=function(e){var t=e.children;return o.a.createElement(i.Fragment,null,o.a.createElement(x,null),o.a.createElement(c.ThemeProvider,{theme:{colors:h.a}},o.a.createElement(m.a,null,o.a.createElement(w,null),t)))};k.propTypes={children:s.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-404-js-92633c3b047e599f374d.js.map