(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{917:function(a,s,t){"use strict";t.r(s);var e=t(27),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_2-实现一个最基本的web应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现一个最基本的web应用"}},[a._v("#")]),a._v(" 2. 实现一个最基本的web应用")]),a._v(" "),t("h3",{attrs:{id:"_2-1-步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-步骤"}},[a._v("#")]),a._v(" 2.1 步骤")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("第一步：找到CATALINA_HOME\\webapps目录；")]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("             因为所有的webapps要放到webapps目录下（Tomcat服务器在这个目录下找搭建的应用）。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("第二步：在CATALINA_HOME\\webapps目录下新建一个子目录，起名 ：oa；")]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("              这个目录名oa就是这个webapp的名字。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("第三步：在oa目录下新建资源文件。例如：index.html；")]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("              编写index.html文件的内容；\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("第五步：启动Tomcat服务器；"),t("strong",[a._v("8080代表的是Tomcat")])]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("              <http://127.0.0.1:8080/oa/index.html>\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在浏览器上输入一个URL和超链接一样；")]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 注意一下的路径以 / 开始，是一个绝对路径，不需要添加：http://127.0.0.1:8080--\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("oa/login.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("user login"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 多个层级也没有关系，正常访问！！--\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("/oa/test/debug/d.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("d page"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])]),a._v(" "),t("h3",{attrs:{id:"_2-2-b-s结构系统的角色和协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-b-s结构系统的角色和协议"}},[a._v("#")]),a._v(" 2.2 B/S结构系统的角色和协议")]),a._v(" "),t("p",[t("img",{attrs:{src:"D:/blog/Sanwei/docs/.vuepress/public/img/JavaWeb/image-20221215165633387.png",alt:"image-20221215165633387"}})]),a._v(" "),t("h3",{attrs:{id:"_2-3-有哪些角色-在整个bs结构的系统中-有哪些人参与进去了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-有哪些角色-在整个bs结构的系统中-有哪些人参与进去了"}},[a._v("#")]),a._v(" 2.3 有哪些角色（在整个BS结构的系统中，有哪些人参与进去了？）")]),a._v(" "),t("ul",[t("li",[a._v("浏览器软件的开发团队（谷歌浏览器、火狐浏览器、IE浏览器）；")]),a._v(" "),t("li",[a._v("WEB Server的开发团队（Tomcat、Jetty、WebLogic、JBOSS、…）；")]),a._v(" "),t("li",[a._v("DB Server的开发团队（Oracle、MySQL、…）；")]),a._v(" "),t("li",[a._v("webapp的开发团队")])]),a._v(" "),t("h3",{attrs:{id:"_2-4-角色和角色之间需要遵守哪些规范-哪些协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-角色和角色之间需要遵守哪些规范-哪些协议"}},[a._v("#")]),a._v(" 2.4 角色和角色之间需要遵守哪些规范？哪些协议？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("webapp的开发团队  和   WEB Server的开发团队  之间有一套规范：JavaEE规范之一Servlet规范；")]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("   servlet规范的作用是什么？\n\n"),t("span",{pre:!0,attrs:{class:"token code keyword"}},[a._v("    WEB Server  和  webapp解耦合")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("Browser  和 WebServer之间有一套传输协议：HTTP协议。（超文本传输协议）")])]),a._v(" "),t("li",[t("p",[a._v("webapp开发团队  和  DB Server的开发团队之间有一套规范：JDBC规范。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);