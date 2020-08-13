(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{280:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("When projects are completed, you can build your application only run one command:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("p",[t._v("If you need a custom build, such as specifying the dist directory, you need to configure it through "),s("code",[t._v("outputDir")]),t._v(" in "),s("a",{attrs:{href:"https://github.com/LZQ5232/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The configuration of all test environments or formal environment variables is in the "),s("code",[t._v(".env.xxxx")]),t._v(" file such as "),s("a",{attrs:{href:"https://github.com/LZQ5232/vue-element-admin/blob/master/.env.development",target:"_blank",rel:"noopener noreferrer"}},[t._v(".env.development"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("note! ! !")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("You can access them in your application code:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),s("p",[t._v("After running you can see the specific size distribution at "),s("a",{attrs:{href:"http://localhost:9526/report.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9526/report.html"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12)]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("Simply speaking, the difference between them is the deal with routing. "),s("code",[t._v("hashHistory")]),t._v(" is processed by the path following "),s("code",[t._v("#")]),t._v(", front-end routing management through "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 5 History"),s("OutboundLink")],1),t._v(", and "),s("code",[t._v("browserHistory")]),t._v(" is similar to our usual page access path, and with not "),s("code",[t._v("#")]),t._v(", but must through the server's configuration.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Detail see "),s("a",{attrs:{href:"https://router.vuejs.org/zh-cn/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router document"),s("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"build-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-deploy"}},[this._v("#")]),this._v(" Build & Deploy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[this._v("#")]),this._v(" Build")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build for production environment")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build for stage environment")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:stage\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("After the build package is successful, the "),s("code",[t._v("dist")]),t._v(" folder will be generated in the root directory, which is to build a packaged file, usually static files such as "),s("code",[t._v("***.js")]),t._v(", "),s("code",[t._v("***.css")]),t._v(", "),s("code",[t._v("index.html")]),t._v(", etc. .")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"environmental-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables"}},[this._v("#")]),this._v(" Environmental variables")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("They all inject into the global context via the "),e("code",[this._v("webpack.DefinePlugin")]),this._v(" plug-ins.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Environment variables must start with "),e("code",[this._v("VUE_APP_")]),this._v(". Such as: "),e("code",[this._v("VUE_APP_API")]),this._v(", "),e("code",[this._v("VUE_APP_TITLE")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VUE_APP_xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"analyze-the-build-file-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analyze-the-build-file-size"}},[this._v("#")]),this._v(" Analyze the build file size")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If your build file is large, you can optimize your code by building and analyzing the size distribution of dependent modules using the "),e("code",[this._v("webpack-bundle-analyzer")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run preview -- --report\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://LZQ5232.gitee.io/gitee-cdn/vue-element-admin-site/3fddf034-2b38-4299-b0d2-b748fb2abef0.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("It is recommended to use gzip, after using the volume will be only the original 1/3 or so. You can also use lazy loading or Code Splitting.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"publish"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[this._v("#")]),this._v(" Publish")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For publishing, you only have to publish the resulting static file after build, which is usually the static file in the "),e("code",[this._v("dist")]),this._v(" folder, to your cdn or static server. Note that the "),e("code",[this._v("index.html")]),this._v(" usually will be an entry page for your backend service. You may need to change the page's import path after determining static for JS and css.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("In deployment may find that the resource path is wrong, just modify the "),e("code",[this._v("@/config/index.js")]),this._v(" file resource path.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("// changes configure depending on your own path")]),this._v("\npublicPath"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./'")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"router-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-server"}},[this._v("#")]),this._v(" Router & Server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In vue-element-admin, the front-end routing uses "),e("code",[this._v("vue-router")]),this._v(", so you have two options:"),e("code",[this._v("browserHistory")]),this._v(" and "),e("code",[this._v("hashHistory")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This project uses "),e("code",[this._v("hashHistory")]),this._v(" by default, so if you have"),e("code",[this._v("#")]),this._v("in your url and you want to get rid of it, you need to switch to"),e("code",[this._v("browserHistory")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Modify "),e("code",[this._v("src/router/index.js")]),this._v(" mode。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mode: 'history' // Need backend support")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);