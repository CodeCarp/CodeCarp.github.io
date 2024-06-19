(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{478:function(e,r,a){e.exports=a.p+"assets/img/SpringMVCHandler-94850964.f4898c6a.jpg"},961:function(e,r,a){"use strict";a.r(r);var t=a(27),v=Object(t.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_2、springmvc组件解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、springmvc组件解析"}},[e._v("#")]),e._v(" 2、SpringMVC组件解析")]),e._v(" "),t("h3",{attrs:{id:"_2-1-springmvc执行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-springmvc执行流程"}},[e._v("#")]),e._v(" 2.1 SpringMVC执行流程")]),e._v(" "),t("p",[t("img",{attrs:{src:a(478),alt:"image-20230111182737601"}})]),e._v(" "),t("ol",[t("li",[e._v("用户发送请求到前端控制器DispatcherServlet")]),e._v(" "),t("li",[e._v("DispatcherServlet收到请求调用HandlerMapping处理器映射器")]),e._v(" "),t("li",[e._v("处理器映射器找到具体的处理器，生成处理器对象及处理器拦截器，一并返回给DispatcherServlet")]),e._v(" "),t("li",[e._v("DispatcherServlet调用HandlerAdapter处理器适配器")]),e._v(" "),t("li",[e._v("HandlerAdapter经过适配调用具体的处理器Controller")]),e._v(" "),t("li",[e._v("Controller执行完成后返回ModelAndView")]),e._v(" "),t("li",[e._v("HandlerAdapter将Controller致辞那个结果ModelAndView返回给DispatcherServlet")]),e._v(" "),t("li",[e._v("DispatcherServlet将ModelAndView传给viewReslover视图解析器")]),e._v(" "),t("li",[e._v("viewReslover解析后返回具体view")]),e._v(" "),t("li",[e._v("DispatcherServlet根据view进行渲染视图")]),e._v(" "),t("li",[e._v("DispatcherServlet响应用户")])]),e._v(" "),t("h3",{attrs:{id:"_2-2-组件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-组件介绍"}},[e._v("#")]),e._v(" 2.2 组件介绍")]),e._v(" "),t("h4",{attrs:{id:"_2-2-1-前端控制器dispatcherservlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-前端控制器dispatcherservlet"}},[e._v("#")]),e._v(" 2.2.1 前端控制器DispatcherServlet")]),e._v(" "),t("p",[e._v("用户请求到达前端控制器，他就相当于MVC模式中的C，DispatcherServlet是整个流程控制的中心，由他调用其他组件用户的请求，DispatcherServlet的存在降低组件之间的耦合性")]),e._v(" "),t("h4",{attrs:{id:"_2-2-2-处理器映射器-handlermapping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-处理器映射器-handlermapping"}},[e._v("#")]),e._v(" 2.2.2 处理器映射器 HandlerMapping")]),e._v(" "),t("p",[e._v("HandlerMapping负责根据用户请求找到Handler处理器，SpringMVC提供了不同的映射器实现不同的映射方式，例如：配置文件方式，实现接口方式，注解方式等")]),e._v(" "),t("h4",{attrs:{id:"_2-2-3-处理器适配器-handleradapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-处理器适配器-handleradapter"}},[e._v("#")]),e._v(" 2.2.3 处理器适配器 HandlerAdapter")]),e._v(" "),t("p",[e._v("通过HandlerAdapter对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多类型的处理器进行执行")]),e._v(" "),t("h4",{attrs:{id:"_2-2-4-处理器-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-处理器-handler"}},[e._v("#")]),e._v(" 2.2.4  处理器 Handler")]),e._v(" "),t("p",[e._v("由DispatcherServlet把用户请求转发到Handler，由Handler对具体的用户请求进行处理")]),e._v(" "),t("h4",{attrs:{id:"_2-2-5-视图解析器-viewresolver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-视图解析器-viewresolver"}},[e._v("#")]),e._v(" 2.2.5 视图解析器 ViewResolver")]),e._v(" "),t("p",[e._v("ViewResolver负责将处理结果生成view视图，viewReslover首先根据逻辑视图名解析成物理视图名，即具体的页面地址，再生成view视图对象，最后view进行渲染将处理结果通过页面展示给用户")]),e._v(" "),t("h4",{attrs:{id:"_2-2-6-视图-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-视图-view"}},[e._v("#")]),e._v(" 2.2.6 视图 View")]),e._v(" "),t("p",[t("code",[e._v("SpringMVC")]),e._v("框架提供了很多"),t("code",[e._v("View")]),e._v("视图类型的支持，包括："),t("code",[e._v("jspView")]),e._v("、"),t("code",[e._v("freemarkerView")]),e._v("、"),t("code",[e._v("pdfView")]),e._v("等。最常用的视图就是"),t("code",[e._v("JSP")]),e._v("。一般情况下需要通过页面标签或页面模版技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面。")])])}),[],!1,null,null,null);r.default=v.exports}}]);