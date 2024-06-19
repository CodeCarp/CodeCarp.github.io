(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{933:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_15-web应用实现资源跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-web应用实现资源跳转"}},[t._v("#")]),t._v(" 15. web应用实现资源跳转")]),t._v(" "),a("h3",{attrs:{id:"_15-1-资源跳转的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-1-资源跳转的方式"}},[t._v("#")]),t._v(" 15.1 资源跳转的方式")]),t._v(" "),a("ul",[a("li",[t._v("第一种方式：转发")]),t._v(" "),a("li",[t._v("第二种方式：重定向")])]),t._v(" "),a("h3",{attrs:{id:"_15-2-转发和重定向的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-2-转发和重定向的区别"}},[t._v("#")]),t._v(" 15.2 转发和重定向的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码上的区别：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("转发：")]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取请求转发器对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestDispatcher")]),t._v(" dispatcher "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequestDispatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用请求转发器对象的forword方法完成转发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dispatcher.forword(request,response);")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并为一行代码")]),t._v("\nrequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequestDispatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("转发的时候是一次请求，不管你转发多少次，都是一次请求")])]),t._v(" "),a("li",[a("p",[t._v("AServlet转发到BServlet，再转发到CServlet，再转发到DServlet，不管多少次，都在同一个request当中")])]),t._v(" "),a("li",[a("p",[t._v("这是因为调用forword方法的时候，会将当前的request和response对象传递给下一个Servlet")])])])]),t._v(" "),a("li",[a("p",[t._v("重定向")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("重定向在路径上要加上 项目名（项目上下文）")])]),t._v(" "),a("li",[a("p",[t._v("重定向可以理解成浏览器发送的新的一次请求")])]),t._v(" "),a("li",[a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/oa/dept/list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])])])]),t._v(" "),a("li",[a("p",[t._v("形式上的区别：")]),t._v(" "),a("ul",[a("li",[t._v("转发（一次请求）\n"),a("ul",[a("li",[t._v("在浏览器地址栏上发送的请求 是：http://localhost:8080/servlet/a，最终请求结束后，浏览器地址栏上的地址还是这个，没变")])])]),t._v(" "),a("li",[t._v("重定向（两次请求）\n"),a("ul",[a("li",[t._v("在浏览器地址栏上发送的请求是：http://localhost:8080/servlet/a，最终在地址栏上显示的地址是：http://localhsot:8080/servlet/b,请求发生变化")])])])])]),t._v(" "),a("li",[a("p",[t._v("转发和重定向的区别：")]),t._v(" "),a("ul",[a("li",[t._v("转发：是由WEN服务器来控制的，A资源跳转到B资源，这个跳转动作是Tomcat服务器内部完成的")]),t._v(" "),a("li",[t._v("重定向：是浏览器完成的，具体跳转到哪个资源，是浏览器说了算")])])]),t._v(" "),a("li",[a("p",[t._v("转发和重定向应该如何选择？什么时候使用转发，什么时候使用重定向？")]),t._v(" "),a("ul",[a("li",[t._v("如果在一个Servlet当中向request域中绑定了数据，希望从下一个Servlet中把request域里面的数据取出来，使用转发；")]),t._v(" "),a("li",[t._v("剩下的所有请求均使用重定向（重定向使用较多）")])])]),t._v(" "),a("li",[a("p",[t._v("转发会存在浏览器的刷新问题")]),t._v(" "),a("ul",[a("li",[t._v("例如：在转发过程中，用户向数据库提交数据，一直刷新浏览器页面，因为转发是一次请求，所以，会一直向数据库提交数据。")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);