(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1043:function(e,v,_){"use strict";_.r(v);var d=_(27),o=Object(d.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"redis的安装与配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis的安装与配置"}},[e._v("#")]),e._v(" Redis的安装与配置")]),e._v(" "),_("h3",{attrs:{id:"_2-1版本选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1版本选择"}},[e._v("#")]),e._v(" 2.1版本选择")]),e._v(" "),_("blockquote",[_("p",[e._v("Linux环境安装Redis必须先具备gcc编译环境。")]),e._v(" "),_("p",[e._v("查看自己"),_("code",[e._v("redis")]),e._v("版本的命令："),_("code",[e._v("redis-server -v")])])]),e._v(" "),_("h3",{attrs:{id:"_2-2-redis-7安装步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-redis-7安装步骤"}},[e._v("#")]),e._v(" 2.2 Redis 7安装步骤")]),e._v(" "),_("blockquote",[_("ol",[_("li",[_("p",[e._v("下载获取"),_("code",[e._v("redis-7.0.0.tar.gz")]),e._v("后将它放入我们的linux目录"),_("code",[e._v("/opt")]),e._v("；")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("/opt")]),e._v("目录下解压"),_("code",[e._v("redis")]),e._v("--【"),_("code",[e._v("tar -zxvf redis-7.0.9.tar.gz")]),e._v("】；")])]),e._v(" "),_("li",[_("p",[e._v("进入目录："),_("code",[e._v("cd redis-7.0.9；")])])]),e._v(" "),_("li",[_("p",[e._v("在"),_("code",[e._v("redis-7.0.9")]),e._v("目录下执行make命令（编译安装）："),_("code",[e._v("make && make install")]),e._v("；")])]),e._v(" "),_("li",[_("p",[e._v("查看默认安装目录："),_("code",[e._v("usr/local/bin；")])])]),e._v(" "),_("li",[_("p",[e._v("将默认的"),_("code",[e._v("redis.conf")]),e._v("拷贝到自己定义好的一个路径下，比如"),_("code",[e._v("/redis7/")]),e._v("；---\x3e"),_("code",[e._v("mkdir redis7")]),e._v("---\x3e"),_("code",[e._v("cp redis.conf /redis7/redis7.conf")])])]),e._v(" "),_("li",[_("p",[e._v("修改"),_("code",[e._v("/redis7")]),e._v("目录下"),_("code",[e._v("redis.conf")]),e._v("配置文件做初始化设置；")]),e._v(" "),_("p",[_("code",[e._v("redis.conf")]),e._v("配置文件，改完后确保生效，记得重启。")]),e._v(" "),_("ol",[_("li",[e._v("默认"),_("code",[e._v("daemonize no")]),e._v(" ---------------\x3e改为"),_("code",[e._v("daemonize yes")])]),e._v(" "),_("li",[e._v("默认"),_("code",[e._v("protected-mode yes")]),e._v("-------\x3e改为"),_("code",[e._v("protected-mode no")])]),e._v(" "),_("li",[e._v("默认"),_("code",[e._v("bind 127.0.0.1")]),e._v("--------------\x3e改为  直接注释")]),e._v(" "),_("li",[e._v("添加"),_("code",[e._v("redis")]),e._v("密码-----------------------\x3e改为"),_("code",[e._v("requirpass")]),e._v("你自己设置的密码")])])]),e._v(" "),_("li",[_("p",[e._v("启动服务，在"),_("code",[e._v("/usr/local/bin")]),e._v("目录下运行："),_("code",[e._v("redis-server /redis7/redis7.conf")]),e._v("------\x3e"),_("code",[e._v("ps -ef | grep redis")])])]),e._v(" "),_("li",[_("p",[e._v("连接服务；"),_("code",[e._v("redis-cli -a root")])])]),e._v(" "),_("li",[_("p",[e._v("关闭：单实例关闭："),_("code",[e._v("redis-cli -a root shutdown")]),e._v("----------多实例关闭，指定端口关闭："),_("code",[e._v("redis-cli -p 6379 shutdown")])])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);