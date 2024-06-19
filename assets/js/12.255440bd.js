(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1065:function(s,t,a){"use strict";a.r(t);var i=a(27),e=Object(i.a)({},(function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[i("h2",{attrs:{id:"自建代码托管平台-gitlab"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自建代码托管平台-gitlab"}},[s._v("#")]),s._v(" 自建代码托管平台**-GitLab**")]),s._v(" "),i("h3",{attrs:{id:"_10-1-gitlab简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-gitlab简介"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.1 GitLab")]),s._v("简介")]),s._v(" "),i("ul",[i("li",[s._v("GitLab是由 GitLabInc.开发，使用  MIT许可证的基于网络的 Git仓库管理工具，且具有  wiki和 issue跟踪功能。使用 Git作为代码管理工具，并在此基础上搭建起来的 web服务。  GitLab由乌克兰程序员  DmitriyZaporozhets和  ValerySizov开发，它使用  Ruby语言写  成。后来，一些部分用 Go语言重写。截止 2018年  5月，该公司约有 290名团队成员，以  及 2000多名开源贡献者。GitLab被  IBM，Sony，JülichResearchCenter，NASA，Alibaba，  Invincea，O’ReillyMedia，Leibniz-Rechenzentrum(LRZ)，CERN，SpaceX等组织使用。")])]),s._v(" "),i("h3",{attrs:{id:"_10-2-gitlab官网地址"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-gitlab官网地址"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.2 GitLab")]),s._v("官网地址")]),s._v(" "),i("ul",[i("li",[i("p",[s._v("官网地址：https://about.gitlab.com/")])]),s._v(" "),i("li",[i("p",[s._v("安装说明：https://about.gitlab.com/installation/")])])]),s._v(" "),i("h3",{attrs:{id:"_10-3-gitlab安装-10-3-1服务器准备"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-gitlab安装-10-3-1服务器准备"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3 GitLab")]),s._v("安装  "),i("strong",[s._v("10.3.1")]),s._v("服务器准备")]),s._v(" "),i("ul",[i("li",[s._v("准备一个系统为 CentOS7以上版本的服务器，要求内存 4G，磁盘  50G。  关闭防火墙，并且配置好主机名和 IP，保证服务器可以上网。  此教程使用虚拟机：主机名：gitlab-server  IP地址：192.168.6.200")])]),s._v(" "),i("h4",{attrs:{id:"_10-3-2安装包准备"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-2安装包准备"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.2")]),s._v("安装包准备")]),s._v(" "),i("ul",[i("li",[i("p",[s._v("Yum在线安装 gitlab- ce时，需要下载几百 M的安装文件，非常耗时，所以最好提前把  所需 RPM包下载到本地，然后使用离线 rpm的方式安装。  下载地址：")]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v(" https://packages.gitlab.com/gitlab/gitlab-  ce/packages/el/7/gitlab-ce-13.10.2-ce.0.el7.x86_64.rpm \n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br")])])]),s._v(" "),i("li",[i("p",[s._v("注：资料里提供了此 rpm包，直接将此包上传到服务器/opt/module目录下即可。")]),s._v(" "),i("h4",{attrs:{id:"_10-3-3编写安装脚本"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-3编写安装脚本"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.3")]),s._v("编写安装脚本")])]),s._v(" "),i("li",[i("p",[s._v("安装 gitlab步骤比较繁琐，因此我们可以参考官网编写 gitlab的安装脚本。")])])]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v('[root@gitlab-server module]# vim  gitlab-install.sh  sudo rpm -ivh  /opt/module/gitlab-ce-13.10.2-ce.0.el7.x86_64.rpm   \n\nsudo yum install -y curl policycoreutils-python openssh-server cronie\nsudo lokkit -s http -s ssh \nsudo yum install -y postfix \nsudo service postfix start \nsudo chkconfig postfix on \ncurl https://packages.gitlab.com/install/repositories/gitlab/gitlab-\nce/script.rpm.sh | sudo bash \nsudo EXTERNAL_URL="http://gitlab.example.com" yum -y install gitlab-\nce \n')])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br"),i("span",{staticClass:"line-number"},[s._v("4")]),i("br"),i("span",{staticClass:"line-number"},[s._v("5")]),i("br"),i("span",{staticClass:"line-number"},[s._v("6")]),i("br"),i("span",{staticClass:"line-number"},[s._v("7")]),i("br"),i("span",{staticClass:"line-number"},[s._v("8")]),i("br"),i("span",{staticClass:"line-number"},[s._v("9")]),i("br"),i("span",{staticClass:"line-number"},[s._v("10")]),i("br"),i("span",{staticClass:"line-number"},[s._v("11")]),i("br")])]),i("ul",[i("li",[s._v("给脚本增加执行权限")])]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v("[root@gitlab-server module]# chmod +x gitlab-install.sh\n[root@gitlab-server module]# ll\n总用量  403104\n-rw-r--r--. 1 root root 412774002 4月   7 15:47 gitlab-ce-13.10.2-\nce.0.el7.x86_64.rpm\n-rwxr-xr-x. 1 root root\n416 4月   7 15:49  gitlab-install.sh\n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br"),i("span",{staticClass:"line-number"},[s._v("4")]),i("br"),i("span",{staticClass:"line-number"},[s._v("5")]),i("br"),i("span",{staticClass:"line-number"},[s._v("6")]),i("br"),i("span",{staticClass:"line-number"},[s._v("7")]),i("br")])]),i("ul",[i("li",[s._v("然后执行该脚本，开始安装 gitlab-ce。注意一定要保证服务器可以上网。")])]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v("[root@gitlab-server module]# ./gitlab-install.sh\n警告：/opt/module/gitlab-ce-13.10.2-ce.0.el7.x86_64.rpm:头V4\nRSA/SHA1 Signature,密钥  ID f27eab47: NOKEY\n准备中...\n#################################\n[100%]\n正在升级/安装...\n1:gitlab-ce-13.10.2-ce.0.el7\n################################# [100%]\n。。。。。。\n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br"),i("span",{staticClass:"line-number"},[s._v("4")]),i("br"),i("span",{staticClass:"line-number"},[s._v("5")]),i("br"),i("span",{staticClass:"line-number"},[s._v("6")]),i("br"),i("span",{staticClass:"line-number"},[s._v("7")]),i("br"),i("span",{staticClass:"line-number"},[s._v("8")]),i("br"),i("span",{staticClass:"line-number"},[s._v("9")]),i("br"),i("span",{staticClass:"line-number"},[s._v("10")]),i("br")])]),i("h4",{attrs:{id:"_10-3-4初始化-gitlab服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-4初始化-gitlab服务"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.4")]),s._v("初始化  "),i("strong",[s._v("GitLab")]),s._v("服务")]),s._v(" "),i("ul",[i("li",[s._v("执行以下命令初始化 GitLab服务，过程大概需要几分钟，耐心等待…")])]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v("[root@gitlab-server module]#  gitlab-ctl reconfigure  \n\n  。。。。。。  Running handlers:  Running handlers complete  Chef Client finished, 425/608  resources updated in 03 minutes 08  seconds  gitlab Reconfigured!  \n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br")])]),i("h4",{attrs:{id:"_10-3-5启动-gitlab服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-5启动-gitlab服务"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.5")]),s._v("启动  "),i("strong",[s._v("GitLab")]),s._v("服务")]),s._v(" "),i("ul",[i("li",[i("p",[s._v("执行以下命令启动 GitLab服务，如需停止，执行 gitlab-ctl stop")]),s._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[s._v("[root@gitlab-server module]#  gitlab-ctl start  ok: run: alertmanager: (pid 6812)  134s  ok: run: gitaly: (pid 6740) 135s  \n\n  ok: run: gitlab-monitor: (pid  6765) 135s  \n  ok: run: gitlab-workhorse: (pid 6722) 136s\nok: run: logrotate: (pid 5994) 197s\nok: run: nginx: (pid 5930) 203s\nok: run: node-exporter: (pid 6234) 185s\nok: run: postgres-exporter: (pid 6834) 133s\nok: run: postgresql: (pid 5456) 257s\nok: run: prometheus: (pid 6777) 134s\nok: run: redis: (pid 5327) 263s\nok: run: redis-exporter: (pid 6391) 173s\nok: run: sidekiq: (pid 5797) 215s\nok: run: unicorn: (pid 5728) 221s\n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br"),i("span",{staticClass:"line-number"},[s._v("2")]),i("br"),i("span",{staticClass:"line-number"},[s._v("3")]),i("br"),i("span",{staticClass:"line-number"},[s._v("4")]),i("br"),i("span",{staticClass:"line-number"},[s._v("5")]),i("br"),i("span",{staticClass:"line-number"},[s._v("6")]),i("br"),i("span",{staticClass:"line-number"},[s._v("7")]),i("br"),i("span",{staticClass:"line-number"},[s._v("8")]),i("br"),i("span",{staticClass:"line-number"},[s._v("9")]),i("br"),i("span",{staticClass:"line-number"},[s._v("10")]),i("br"),i("span",{staticClass:"line-number"},[s._v("11")]),i("br"),i("span",{staticClass:"line-number"},[s._v("12")]),i("br"),i("span",{staticClass:"line-number"},[s._v("13")]),i("br"),i("span",{staticClass:"line-number"},[s._v("14")]),i("br")])]),i("h4",{attrs:{id:"_10-3-6使用浏览器访问-gitlab"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-6使用浏览器访问-gitlab"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.6")]),s._v("使用浏览器访问   "),i("strong",[s._v("GitLab")])])]),s._v(" "),i("li",[i("p",[s._v("使用主机名或者 IP地址即可访问  GitLab服务。需要提前配一下 windows的 hosts文件。")])])]),s._v(" "),i("p",[i("img",{attrs:{src:a(835),alt:"image-20221226143920772"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(836),alt:"image-20221226143928380"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(837),alt:"image-20221226143935165"}})]),s._v(" "),i("ul",[i("li",[s._v("首次登陆之前，需要修改下 GitLab提供的 root账户的密码，要求 8位以上，包含大小  写子母和特殊符号。因此我们修改密码为  Atguigu.123456  然后使用修改后的密码登录 GitLab。")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(838),alt:"image-20221226143954390"}})]),s._v(" "),i("ul",[i("li",[s._v("GitLab登录成功。")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(839),alt:"image-20221226144026466"}})]),s._v(" "),i("h4",{attrs:{id:"_10-3-7-gitlab创建远程库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-7-gitlab创建远程库"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.7 GitLab")]),s._v("创建远程库")]),s._v(" "),i("p",[i("img",{attrs:{src:a(840),alt:"image-20221226144043146"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(841),alt:"image-20221226144101340"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(842),alt:"image-20221226144109768"}})]),s._v(" "),i("h4",{attrs:{id:"_10-3-8-idea集成-gitlab"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-8-idea集成-gitlab"}},[s._v("#")]),s._v(" "),i("strong",[s._v("10.3.8 IDEA")]),s._v("集成  "),i("strong",[s._v("GitLab")])]),s._v(" "),i("ul",[i("li",[s._v("➢  1）安装 GitLab插件")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(843),alt:"image-20221226144142402"}})]),s._v(" "),i("ul",[i("li",[s._v("➢   2）设置 GitLab插件")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(844),alt:"image-20221226144159351"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(845),alt:"image-20221226144207592"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(846),alt:"image-20221226144214493"}})]),s._v(" "),i("ul",[i("li",[s._v("➢   3）push本地代码到 GitLab远程库")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(847),alt:"image-20221226144235075"}})]),s._v(" "),i("ul",[i("li",[s._v("自定义远程连接")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(848),alt:"image-20221226144249983"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(849),alt:"image-20221226144256232"}})]),s._v(" "),i("ul",[i("li",[s._v("注意：gitlab网页上复制过来的连接是：http://gitlab.example.com/root/git-test.git，  需要手动修改为：http://gitlab-server/root/git-test.git")]),s._v(" "),i("li",[s._v("选择 gitlab远程连接，进行 push。")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(850),alt:"image-20221226144336123"}})]),s._v(" "),i("ul",[i("li",[s._v("首次向连接 gitlab，需要登录帐号和密码，用  root帐号和我们修改的密码登录即可。")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(851),alt:"image-20221226144351013"}})]),s._v(" "),i("ul",[i("li",[s._v("代码 Push成功。")])]),s._v(" "),i("p",[i("img",{attrs:{src:a(852),alt:"image-20221226144408655"}})]),s._v(" "),i("ul",[i("li",[i("p",[s._v("只要 GitLab的远程库连接定义好以后，对  GitLab远程库进行  pull和  clone的操作和")]),s._v(" "),i("p",[s._v("Github和码云一致，")])])])])}),[],!1,null,null,null);t.default=e.exports},835:function(s,t,a){s.exports=a.p+"assets/img/image-20221226143920772.71462785.png"},836:function(s,t,a){s.exports=a.p+"assets/img/image-20221226143928380.a6d3a960.png"},837:function(s,t,a){s.exports=a.p+"assets/img/image-20221226143935165.d3bc82ae.png"},838:function(s,t,a){s.exports=a.p+"assets/img/image-20221226143954390.9e5a19f3.png"},839:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144026466.ca553a33.png"},840:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144043146.59bf946d.png"},841:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144101340.e4b3ef4a.png"},842:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144109768.2e5efadf.png"},843:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144142402.52f457f8.png"},844:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144159351.92ceefcd.png"},845:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144207592.dd3ab49c.png"},846:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144214493.2630d3d7.png"},847:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144235075.709f0203.png"},848:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144249983.0827f2e1.png"},849:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144256232.9d39b961.png"},850:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144336123.50fb4534.png"},851:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144351013.457f04fd.png"},852:function(s,t,a){s.exports=a.p+"assets/img/image-20221226144408655.4ae0c819.png"}}]);