(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6VaU":function(t,e,n){"use strict";var r=n("XKFU"),a=n("xF/b"),i=n("S/j/"),o=n("ne8i"),l=n("2OiF"),c=n("zRwo");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return l(t),e=o(r.length),n=c(r,0),a(n,r,r,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"9VmF":function(t,e,n){"use strict";var r=n("XKFU"),a=n("ne8i"),i=n("0sh+"),o="".startsWith;r(r.P+r.F*n("UUeW")("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return o?o.call(e,r,n):e.slice(n,n+r.length)===r}})},"9XZr":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},FLlr:function(t,e,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},KE4F:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),i=function(t){var e=t.content,n=t.className;return a.a.createElement("div",{className:n,dangerouslySetInnerHTML:{__html:e}})};e.b=function(t){var e=t.content,n=t.className;return a.a.createElement("div",{className:n},e)}},Lgjv:function(t,e,n){var r=n("ne8i"),a=n("l0Rn"),i=n("vhPU");t.exports=function(t,e,n,o){var l=String(i(t)),c=l.length,s=void 0===n?" ":String(n),u=r(e);if(u<=c||""==s)return l;var f=u-c,m=a.call(s,Math.ceil(f/s.length));return m.length>f&&(m=m.slice(0,f)),o?m+l:l+m}},Nr18:function(t,e,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");t.exports=function(t){for(var e=r(this),n=i(e.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>l;)e[l++]=t;return e}},SPin:function(t,e,n){"use strict";var r=n("XKFU"),a=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return a(this,t,arguments.length,arguments[1],!0)}})},YuTi:function(t,e,n){n("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},l0Rn:function(t,e,n){"use strict";var r=n("RYi7"),a=n("vhPU");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},mGWK:function(t,e,n){"use strict";var r=n("XKFU"),a=n("aCFj"),i=n("RYi7"),o=n("ne8i"),l=[].lastIndexOf,c=!!l&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n("LyE8")(l)),"Array",{lastIndexOf:function(t){if(c)return l.apply(this,arguments)||0;var e=a(this),n=o(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},"xF/b":function(t,e,n){"use strict";var r=n("EWmC"),a=n("0/R4"),i=n("ne8i"),o=n("m0Pp"),l=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,c,s,u,f,m,d){for(var h,g,v=u,p=0,E=!!m&&o(m,d,3);p<s;){if(p in c){if(h=E?E(c[p],p,n):c[p],g=!1,a(h)&&(g=void 0!==(g=h[l])?!!g:r(h)),g&&f>0)v=t(e,n,h,i(h.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError();e[v]=h}v++}p++}return v}},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"BlogPostTemplate",(function(){return f})),n.d(e,"pageQuery",(function(){return m}));var r=n("q1tI"),a=n.n(r),i=n("LvDl"),o=n("TJpk"),l=n.n(o),c=n("Wbzz"),s=n("7oih"),u=n("KE4F"),f=function(t){var e=t.content,n=t.contentComponent,r=t.description,o=t.tags,l=t.title,s=t.helmet,f=t.heroImage,m=n||u.b;return a.a.createElement("div",null,a.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:{heroImage:f}}},a.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #62259d, -0.5rem 0 0 #62259d",backgroundColor:"#62259d",color:"white",padding:"1rem"}},l)),a.a.createElement("section",{className:"section"},s||"",a.a.createElement("div",{className:"container content"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column is-10 is-offset-1"},a.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light"},l),a.a.createElement("p",null,r),a.a.createElement(m,{content:e}),o&&o.length?a.a.createElement("div",{style:{marginTop:"4rem"}},a.a.createElement("h4",null,"Tags"),a.a.createElement("ul",{className:"taglist"},o.map((function(t){return a.a.createElement("li",{key:t+"tag"},a.a.createElement(c.a,{to:"/tags/"+Object(i.kebabCase)(t)+"/"},t))})))):null)))))};e.default=function(t){var e=t.data.markdownRemark;return a.a.createElement(s.a,null,a.a.createElement(f,{content:e.html,contentComponent:u.a,heroImage:e.frontmatter.featuredimage,description:e.frontmatter.description,helmet:a.a.createElement(l.a,{titleTemplate:"%s | Blog"},a.a.createElement("title",null,""+e.frontmatter.title),a.a.createElement("meta",{name:"description",content:""+e.frontmatter.description})),tags:e.frontmatter.tags,title:e.frontmatter.title}),console.log(e.frontmatter.description))};var m="3514304072"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e45857aeaa55ad60a0cd.js.map