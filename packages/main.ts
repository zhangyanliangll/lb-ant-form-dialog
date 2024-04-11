import type { Plugin, App, Component } from 'vue'

// 导入表单组件
import FormDialog from './form-dialog/index.vue'

// 组件列表
const components = [FormDialog]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install: Plugin['install'] = function (app: App) {
  // 遍历注册全局组件
  components.map((component: Component) => app.component(component.name as string, component))
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}
