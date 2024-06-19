(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{482:function(t,s,a){t.exports=a.p+"assets/img/image-20230630145531665.3d087ae7.png"},483:function(t,s,a){t.exports=a.p+"assets/img/image-20230630150541593.a2948924.png"},484:function(t,s,a){t.exports=a.p+"assets/img/image-20230630153119405.6b7cc7fc.png"},485:function(t,s,a){t.exports=a.p+"assets/img/image-20230630153251946.cc0f7782.png"},486:function(t,s,a){t.exports=a.p+"assets/img/image-20230630153528422.25fb3919.png"},993:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"二、整体架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、整体架构"}},[t._v("#")]),t._v(" 二、整体架构")]),t._v(" "),e("blockquote",[e("p",[t._v("在SpringSecurity的架构设计中，认证（Authentication）和授权（Authorization）是分开的，无论使用什么样的认证方式，都不会影响授权，这是两个独立的存在。可以非常方便的整合一些外部到的解决方案。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(482),alt:"image-20230630145531665"}})]),t._v(" "),e("h3",{attrs:{id:"_2-1-认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-认证"}},[t._v("#")]),t._v(" 2.1 认证")]),t._v(" "),e("h4",{attrs:{id:"_2-1-1-authenticationmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-authenticationmanager"}},[t._v("#")]),t._v(" 2.1.1 AuthenticationManager")]),t._v(" "),e("blockquote",[e("p",[t._v("在 SpringSecurity中认证是由"),e("code",[t._v("AuthenticationManager")]),t._v("接口来负责的，接口定义为：")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationManager")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Authentication")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Authentication")]),t._v(" var1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("blockquote",[e("ul",[e("li",[t._v("返回"),e("code",[t._v("Authentication")]),t._v("表示认证成功。")]),t._v(" "),e("li",[t._v("返回"),e("code",[t._v("AuthenticationException")]),t._v("异常，表示认证失败。")])]),t._v(" "),e("p",[e("code",[t._v("AuthenticationManager")]),t._v("主要实现类为"),e("code",[t._v("ProviderManager")]),t._v("，在"),e("code",[t._v("ProviderManager")]),t._v("中管理了众多"),e("code",[t._v("AuthenticationProvider")]),t._v("实例。在一次完整的认证流程中，SpringSecurity允许存在多个"),e("code",[t._v("AuthenticationProvider")]),t._v("，用来实现多种认证方式，这些"),e("code",[t._v("AuthenticationProvider")]),t._v("都是由"),e("code",[t._v("ProviderManager")]),t._v("进行统一管理的。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(483),alt:"image-20230630150541593"}})]),t._v(" "),e("h4",{attrs:{id:"_2-1-2-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-authentication"}},[t._v("#")]),t._v(" 2.1.2 Authentication")]),t._v(" "),e("blockquote",[e("p",[t._v("认证以及认证成功的信息主要是由Authentication的实现类进行保存的，其接口定义为：")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Authentication")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Principal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GrantedAuthority")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAuthorities")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取权限信息")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCredentials")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取凭证信息，一般指密码")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDetails")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户详细信息")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrincipal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户身份信息，用户名、用户对象等")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAuthenticated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否认证成功")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAuthenticated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" var1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h4",{attrs:{id:"_2-1-3-securitycontextholder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-securitycontextholder"}},[t._v("#")]),t._v(" 2.1.3 SecurityContextHolder")]),t._v(" "),e("blockquote",[e("p",[t._v("SecurityContextHolder用来获取登陆之后用户信息。SpringSecurity会将登录用户数据保存在Session中。但是，为了使用方便，SpringSecurity在此基础上还做了一些改进，其中最主要的一个变化就是线程绑定。当用户登录成功后，SpringSecurity会将登录成功的用户信息保存到SecurityContextHolder中。SecurityContextHolder中的数据保存默认是通过ThreadLocal来实现的，使用ThreadLocal创建的变量只能被当前线程访问，不能被其他线程访问和修改，也就是用户数据和请求线程绑定在一起。当登录请求处理完毕后，SpringSecurity会将SecurityContextHolder中的数据拿出来保存到Session中，同时将SecurityContextHolder中的数据清空。以后每当有请求到来时，SpringSecurity就会先从session中取出用户登录数据，保存到SecurityContextHolder中，方便在该请求的后续处理过程中使用，同时在请求结束后将SecurityContextHolder中的数据拿出来保存到session中国年，然后将SecurityContextHolder中的数据清空。这策略方便用户在Controller、Service层以及任何代码中获取当前登录用户数据。")])]),t._v(" "),e("h3",{attrs:{id:"_2-2-授权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-授权"}},[t._v("#")]),t._v(" 2.2 授权")]),t._v(" "),e("blockquote",[e("p",[t._v("当完成认证后，接下来就是授权。")])]),t._v(" "),e("h4",{attrs:{id:"_2-2-1-accessdecisionmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-accessdecisionmanager"}},[t._v("#")]),t._v(" 2.2.1 AccessDecisionManager")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("AccessDecisionManager")]),t._v("（访问决策管理器），用来决定此次访问是否被允许。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(484),alt:"image-20230630153119405"}})]),t._v(" "),e("h4",{attrs:{id:"_2-2-2-accessdecisionvoter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-accessdecisionvoter"}},[t._v("#")]),t._v(" 2.2.2 AccessDecisionVoter")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("AccessDecisionVoter")]),t._v("（访问决定投票器），投票器会检查用户是否具有应有的角色，进而投出赞成、返回或者弃权票。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(485),alt:"image-20230630153251946"}})]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("AccessDecisionVoter")]),t._v("和"),e("code",[t._v("AccessDecisionManager")]),t._v("都有众多的实现了，在"),e("code",[t._v("AccessDecisionManager")]),t._v("中会挨个遍历"),e("code",[t._v("AccessDecisionVoter")]),t._v("，进而决定是否允许用户访问。")])]),t._v(" "),e("h4",{attrs:{id:"_2-2-3-configattribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-configattribute"}},[t._v("#")]),t._v(" 2.2.3 configAttribute")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("ConfigAttribute")]),t._v("，用来保存授权时的角色信息。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(486),alt:"image-20230630153528422"}})]),t._v(" "),e("blockquote",[e("p",[t._v("在SpringSecurity中，用户请求一个资源（通常是一个接口或者一个Java方法）需要的角色会被封装成一个"),e("code",[t._v("ConfigAttribute")]),t._v("对象，在"),e("code",[t._v("ConfigAttribute")]),t._v("中只有一个"),e("code",[t._v("getAttribute")]),t._v("方法，该方法返回一个String字符串，就是角色的名称。一般来说，角色名称都带有一个ROLE_前缀，投票器"),e("code",[t._v("AccessDecisionVoter")]),t._v("所做的事情，就是比较用户所具有的角色和请求某个资源所需的"),e("code",[t._v("ConfigAttribute")]),t._v("之间的关系。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);