import { createApp } from 'vue'
import LbAntFormDialog from '../packages/main'
import App from './App.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(LbAntFormDialog)

app.use(Antd)

app.directive('hljs', (el) => {
  const blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

app.mount('#app')
