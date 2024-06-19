(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{487:function(s,t,e){s.exports=e.p+"assets/img/bVbwwP2.6d04bfdd.png"},996:function(s,t,e){"use strict";e.r(t);var _=e(27),v=Object(_.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"_1-jms与消息中间件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-jms与消息中间件"}},[s._v("#")]),s._v(" 1. JMS与消息中间件")]),s._v(" "),_("h3",{attrs:{id:"_1-1-jms介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-jms介绍"}},[s._v("#")]),s._v(" 1.1 jms介绍")]),s._v(" "),_("p",[s._v("jms是java消息服务接口规范，主要包含四大元素："),_("strong",[s._v("生产者")]),s._v("、"),_("strong",[s._v("消费者")]),s._v("、"),_("strong",[s._v("消息")]),s._v("、"),_("strong",[s._v("消息服务")]),s._v("。")]),s._v(" "),_("ul",[_("li",[s._v("生产者：创建消息，并把消息发动到消息服务；")]),s._v(" "),_("li",[s._v("消费者：从消息服务接收消息；")]),s._v(" "),_("li",[s._v("消息服务：即MQ消息服务（broker），而生产者与消费者相对其均为客服端；")]),s._v(" "),_("li",[s._v("消息：整个消息服务的传输对象，消息包含消息头、消息属性、消息体；")])]),s._v(" "),_("blockquote",[_("p",[_("strong",[s._v("常用消息头属性")]),s._v("：JMSDestination(消息目的地，如果生产者指定了目的地，在发送时会改为生产者绑定的目的地)、JMSDeliveryMode(是持久还是非持久)、JMSExpiration(过期时间，默认永久)、JMSPriority(优先级，0-9，数值越大优先级越高，默认为4)、JMSMessageId(唯一的消息ID)；\n"),_("strong",[s._v("消息属性")]),s._v("：可视为消息头属性的扩展，通过setXxxProperty(k,v)设置；\n"),_("strong",[s._v("消息体")]),s._v("：封装消息的具体数据，发送与接收的消息体类型必须一致，消息体类型总共有5种，TextMessage、Mapmessage、BytesMessage、StreamMessage、ObjectMessage；")])]),s._v(" "),_("h3",{attrs:{id:"_1-2-jms消息传递模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-jms消息传递模式"}},[s._v("#")]),s._v(" 1.2 jms消息传递模式")]),s._v(" "),_("p",[s._v("jms消息传递模式有如下两种，\n"),_("strong",[s._v("点对点消息传递模式（P2P）")]),s._v("：消息发送到一个特殊队列(queue), 消费者从队列获取消息，一条消息只能被只能被一个消费者消费；\n"),_("strong",[s._v("发布/订阅消息传递模式(publish-subscribe)")]),s._v("：消息被发送到一个主题上(topic)，所有订阅了该主题的消费者，都能接收到消息。")]),s._v(" "),_("h3",{attrs:{id:"_1-3-jms编码总体架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-jms编码总体架构"}},[s._v("#")]),s._v(" 1.3 jms编码总体架构")]),s._v(" "),_("p",[s._v("JMS应用程序由如下基本模块组成，")]),s._v(" "),_("ol",[_("li",[s._v("连接工厂对象，创建消息客户端(生产者、消费者)与消息服务端的连接(connection)；")]),s._v(" "),_("li",[s._v("连接对象，创建回话对象(session);")]),s._v(" "),_("li",[s._v("会话对象，创建生产者对象(producer)、消费者对象(consumer)以及消息对象(message)；")]),s._v(" "),_("li",[s._v("目的地(queue/topic)，点对点模式下目的地是队列(queue)，发布/订阅模式下目的地是主题(topic)，生产者把消息发送到目的地，消费者从目的地接收消息")])]),s._v(" "),_("p",[_("img",{attrs:{src:e(487),alt:"图片描述"}})]),s._v(" "),_("h3",{attrs:{id:"_1-4-消息中间件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-消息中间件"}},[s._v("#")]),s._v(" 1.4 消息中间件")]),s._v(" "),_("p",[s._v("消息中间件是实现了jms规范的落地产品，目前市场上主流的消息中间件有 ActiveMQ、Kafka、RocketMQ、RabbitMQ等。企业开发中使用消息中间件的主要目的是"),_("strong",[s._v("解决耦合调用")]),s._v("、**抵御洪峰流量(削峰)**等。 以下主要讲解ActiveMQ的使用。")])])}),[],!1,null,null,null);t.default=v.exports}}]);