(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{642:function(t,e,l){"use strict";l.r(e);var a=l(41),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"toast-通知"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#toast-通知"}},[t._v("#")]),t._v(" toast 通知")]),t._v(" "),l("p",[t._v("悬浮出现在页面角落，显示全局的通知提醒消息。")]),t._v(" "),l("h2",{attrs:{id:"自定义弹出位置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#自定义弹出位置"}},[t._v("#")]),t._v(" 自定义弹出位置")]),t._v(" "),l("p",[t._v("可以让"),l("code",[t._v("Notification")]),t._v(" 从屏幕四角中的任意一角弹出。")]),t._v(" "),l("ClientOnly",[l("toast-demo")],1),t._v(" "),l("h3",{attrs:{id:"使用-html-片段"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#使用-html-片段"}},[t._v("#")]),t._v(" 使用 HTML 片段")]),t._v(" "),l("p",[l("code",[t._v("useHtml")]),t._v(" 属性支持传入 HTML 片段。")]),t._v(" "),l("h3",{attrs:{id:"全局方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#全局方法"}},[t._v("#")]),t._v(" 全局方法")]),t._v(" "),l("p",[l("code",[t._v("Vue.prototype")]),t._v(" 添加了全局方法 "),l("code",[t._v("$toast")]),t._v("。因此在 vue instance 中可以采用本页面中的方式调用"),l("code",[t._v("Toast")]),t._v(" 。")]),t._v(" "),l("h3",{attrs:{id:"options"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义图标的类名。若设置了 "),l("code",[t._v("type")]),t._v("，则 "),l("code",[t._v("iconClass")]),t._v(" 会被覆盖")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("说明文字")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("useHtml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否将 message 属性作为 HTML 片段处理")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("position")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义弹出位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("top-right/top-left/bottom-right/bottom-left")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("closeOptions")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭选项")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("{ delay: 2000,callback() {console.log('Toast Callback...')}}")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])]),t._v(" "),l("h3",{attrs:{id:"方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),l("p",[t._v("调用 "),l("code",[t._v("Toast")]),t._v(" 或 "),l("code",[t._v("this.$toast")]),t._v(" 会返回当前 "),l("code",[t._v("Toast")]),t._v(" 的实例。如果需要手动关闭实例，可以调用它的")]),t._v(" "),l("p",[l("code",[t._v("close")]),t._v(" 方法。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭当前的 "),l("code",[t._v("Toast")])])])])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);