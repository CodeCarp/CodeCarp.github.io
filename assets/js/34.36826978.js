(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1014:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"css-浮动-float"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-浮动-float"}},[t._v("#")]),t._v(" CSS 浮动（float）")]),t._v(" "),n("h3",{attrs:{id:"传统网页布局的三种方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#传统网页布局的三种方式"}},[t._v("#")]),t._v(" 传统网页布局的三种方式")]),t._v(" "),n("blockquote",[n("p",[t._v("网页布局的本质——用CSS来摆放盒子，把盒子摆放到响应位置，")]),t._v(" "),n("p",[t._v("CSS提供了三种传统布局方式（盒子排列顺序）")]),t._v(" "),n("ul",[n("li",[t._v("普通流（标准流）")]),t._v(" "),n("li",[t._v("浮动")]),t._v(" "),n("li",[t._v("定位")])])]),t._v(" "),n("h3",{attrs:{id:"什么是浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是浮动"}},[t._v("#")]),t._v(" 什么是浮动")]),t._v(" "),n("blockquote",[n("p",[n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("float  ")]),t._v("属性用于创建浮动框，将其移动到一边，知道左边缘或右边缘触及包括块或另一个浮动框的边缘。")],1)]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    float： 属性值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("属性值")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("none")]),t._v(" "),n("td",[t._v("元素不浮动（默认）")])]),t._v(" "),n("tr",[n("td",[t._v("left")]),t._v(" "),n("td",[t._v("元素向左浮动")])]),t._v(" "),n("tr",[n("td",[t._v("right")]),t._v(" "),n("td",[t._v("元素向右浮动")])])])]),t._v(" "),n("h3",{attrs:{id:"浮动的特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮动的特点"}},[t._v("#")]),t._v(" 浮动的特点")]),t._v(" "),n("blockquote",[n("p",[t._v("设置了浮动的元素最重要的特性：")]),t._v(" "),n("ol",[n("li",[t._v("脱离标准普通流的控制（浮）移动到指定位置（动），（俗称投标）")]),t._v(" "),n("li",[n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("浮动的盒子不再保留原先的位置  ")])],1)])]),t._v(" "),n("p",[n("img",{attrs:{src:a(533),alt:"img"}})]),t._v(" "),n("blockquote",[n("p",[t._v("如果多个盒子都设置了浮动，则它们会按照属性值一行内显示并且顶端对齐排列。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(534),alt:"image-20230825180528106"}})]),t._v(" "),n("blockquote",[n("p",[n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("注意： ")]),n("font",{staticStyle:{color:"orange","font-weight":"600"}},[t._v("浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐。  ")])],1),t._v(" "),n("p",[n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("浮动元素会具有行内块元素特点  ")])],1),t._v(" "),n("p",[t._v("任何元素都可以浮动，不管原先是什么模式的元素，添加浮动之后具有"),n("font",{staticStyle:{color:"blue","font-weight":"600"}},[t._v("行内块元素 ")]),t._v("相似的特性")],1),t._v(" "),n("ul",[n("li",[t._v("如果块级盒子没有设置宽度，默认宽度和父级一样宽，但是添加浮动后，他的大小根据内容来决定")]),t._v(" "),n("li",[t._v("浮动的盒子中间是没有缝隙的，是紧挨着一起的")]),t._v(" "),n("li",[t._v("行内元素同理。")])])]),t._v(" "),n("h3",{attrs:{id:"清除浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),n("p",[n("strong",[t._v("为什么需要清除浮动")])]),t._v(" "),n("blockquote",[n("p",[t._v("由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占位置，最后父级盒子高度为0，就会影响下面的标准流盒子。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(535),alt:"image-20230825201007632"}})]),t._v(" "),n("blockquote",[n("p",[t._v("由于浮动元素不在占用源文档流的位置，所以他会对后面的元素排版产生影响。")])]),t._v(" "),n("p",[n("strong",[t._v("清除浮动的本质")])]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("清除浮动的本质就是清除浮动元素造成的影响")]),t._v(" "),n("li",[t._v("如果父盒子本身有高度，则不需要清除浮动")]),t._v(" "),n("li",[t._v("清除浮动之后，父级就会根据浮动的子盒子自动检测高度，父级有了高度，就不会影响下面的标准流")])])]),t._v(" "),n("p",[n("strong",[t._v("清除浮动")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 属性值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("属性值")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("left")]),t._v(" "),n("td",[t._v("不允许左侧有浮动元素（清除左侧浮动的影响）")])]),t._v(" "),n("tr",[n("td",[t._v("right")]),t._v(" "),n("td",[t._v("不允许右侧右浮动元素（清除右侧浮动的影响）")])]),t._v(" "),n("tr",[n("td",[t._v("both")]),t._v(" "),n("td",[t._v("同时清除左右两侧浮动的影响")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("实际开发中，几乎只用"),n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v(" clear: both;")]),t._v("清除浮动的策略是：闭合浮动。")],1)]),t._v(" "),n("h3",{attrs:{id:"清除浮动的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的方法"}},[t._v("#")]),t._v(" 清除浮动的方法")]),t._v(" "),n("blockquote",[n("ol",[n("li",[t._v("额外标签法（隔墙法）")]),t._v(" "),n("li",[t._v("父级添加overflow属性")]),t._v(" "),n("li",[t._v("父级添加after伪元素")]),t._v(" "),n("li",[t._v("父级添加双伪元素")])])]),t._v(" "),n("p",[n("strong",[t._v("额外标签法")])]),t._v(" "),n("blockquote",[n("p",[n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("额外标签法  ")]),t._v("也称为隔墙法，")],1),t._v(" "),n("p",[t._v("额外标签法会在浮动元素末尾添加一个空的标签，例如"),n("code",[t._v("<div style='cleat:both'></div>")]),t._v("，或者其他标签（如"),n("code",[t._v("<br/>")]),t._v("等）")]),t._v(" "),n("ul",[n("li",[t._v("优点：通俗易懂，书写方便")]),t._v(" "),n("li",[t._v("缺点：添加许多无意义的标签，结构化较差")])]),t._v(" "),n("p",[n("font",{staticStyle:{color:"orange","font-weight":"600"}},[t._v("注意：要求这个新的空标签必须是块级元素。  ")])],1)]),t._v(" "),n("p",[n("strong",[t._v("父级添加overflow")])]),t._v(" "),n("blockquote",[n("p",[t._v("可以给父级添加"),n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("overflow  ")]),t._v("书写，将其属性值设置为"),n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("hidden、auto")]),t._v("或"),n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v("scroll  ")])],1),t._v(" "),n("ul",[n("li",[t._v("优点：代码简洁")]),t._v(" "),n("li",[t._v("缺点：无法显示溢出部分")])])]),t._v(" "),n("p",[n("strong",[t._v("父级添加:after伪元素法")])]),t._v(" "),n("blockquote",[n("p",[n("font",{staticStyle:{color:"red","font-weight":"600"}},[t._v(":after  ")]),t._v("方式是额外标签法的升级版。也是给父元素添加")],1)]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* IE6、7专有*/")]),t._v("\n    *"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("blockquote",[n("ul",[n("li",[t._v("优点：没有添加标签，结构更简单")]),t._v(" "),n("li",[t._v("缺点：照顾低版本浏览器")])])]),t._v(" "),n("p",[n("strong",[t._v("双伪元素清除浮动")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:before,.clearfix:after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    *"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("blockquote",[n("ul",[n("li",[t._v("优点：代码更简洁")]),t._v(" "),n("li",[t._v("缺点：照顾低版本浏览器")])])])])}),[],!1,null,null,null);s.default=e.exports},533:function(t,s,a){t.exports=a.p+"assets/img/202308251416.a5fe6da9.gif"},534:function(t,s,a){t.exports=a.p+"assets/img/image-20230825180528106.25e4fe76.png"},535:function(t,s,a){t.exports=a.p+"assets/img/image-20230825201007632.ee77894d.png"}}]);