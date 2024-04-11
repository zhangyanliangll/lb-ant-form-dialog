<template>
  <div id="app">
    <div class="page-header">
      <h1>{{ title }}</h1>
      <h2>基于 Ant Design Vue 4.0 二次封装的表单组件</h2>
      <a href="https://github.com/zhangyanliangll/lb-ant-form-dialog" class="btn" target="_blank"
        >View on GitHub</a
      >
    </div>
    <div class="page-content" v-hljs>
      <h2>Demo</h2>
      <a-button type="link" @click="visible = true">点击此处查看</a-button>
      <h2>特点</h2>
      <ol style="margin-left: 30px">
        <li>简单易用，减少代码的重复书写，通过配置进行完成</li>
        <li>提供以 npm 的形式安装提供全局组件</li>
        <li>提高工作效率，减少加班</li>
      </ol>
      <h2>安装</h2>
      <pre>$ npm install {{ title }} -S</pre>
      <h2>使用</h2>
      <h3>在 `main.ts` 文件中引入插件并注册</h3>
      <pre>
      # main.ts
      import { createApp } from 'vue'
      import App from './App.vue'

      import Antd from 'ant-design-vue'
      import 'ant-design-vue/dist/reset.css'
      import LbAntFormDialog from '{{ title }}'

      const app = createApp(App)
      app.use(LbAntFormDialog)
      app.use(Antd)

      app.mount('#app')
      </pre>
      <pre>
      # components.d.ts
      declare module 'vue' {
        export interface GlobalComponents {
          LbAntFormDialog: (typeof import('lb-ant-form-dialog/packages/form-dialog/index.vue'))['default']
        }
      }
      </pre>
      <pre>
      # module.d.ts
      declare module 'lb-ant-form-dialog'
      </pre>
      <h3>在项目中使用 {{ title }}</h3>
      <pre>
      &lt;template&gt;
        &lt;a-button
          type="link"
          @click="visible = true"
        &gt;
          点击此处演示
        &lt;/a-button&gt;

        &lt;{{ title }}
          title="标题"
          width="600px"
          v-model:visible=&quot;visible&quot;
          v-model=&quot;formData&quot;
          :formGroup="formGroup"
        &gt;
          &lt;template #customSlot &gt;
            插槽～
          &lt;/template&gt;
        &lt;/{{ title }}&gt;
      &lt;/template&gt;
      &lt;script lang="ts" setup&gt;
        import { ref } from 'vue'
        import type { IFormGroupsItem } from 'lb-ant-form-dialog/packages'

        const visible = ref(false)

        const formData = ref({
          name: '张三',
          select: '16',
          date: '',
          range: '',
          strDate: '',
          endDate: '',
          radio: '',
          checkbox: ['1', '2']
        })

        const createdFormGroup = ():IFormGroupsItem[] => {
          return [
            {
              label: '姓名：',
              // 必填
              required: true,
              targetElement: 'a-input', // 此 a-input 就是全局注册的组件，非ant的也可以，自定义的也可
              // 数据绑定的 key
              value: 'name',
              // 宽度占这行的 份数，默认：7
              // col: 7,
              // form 参数
              formProps: {},
              // form 事件
              formEvents: {},
              // 当前 input 事件
              targetEvents: {},
              // 校验 规则
              rules: [
                {
                  validator(value, resolve, reject) {
                    if (value === '') {
                      reject('不能为空')
                    }
                    resolve(true)
                  },
                  trigger: 'blur'
                }
              ]
            },
            {
              label: '下拉选择：',
              targetElement: 'a-select',
              value: 'select',
              props: {
                placeholder: '请选择', //提示内容
                disabled: true
              },
              options: [
                {
                  label: '单选框1',
                  value: '16'
                },
                {
                  label: '单选框2',
                  value: '12'
                }
              ],
              fieldNames: {
                value: 'value',
                label: 'title'
              }
            },
            {
              label: '日期选择：',
              targetElement: 'a-date-picker',
              value: 'date',
              required: true,
              props: {
                placeholder: '请选择', //提示内容
                valueFormat: 'YYYY-MM-DD',
                style: 'width: 100%'
              }
            },
            {
              label: '日期区间：',
              targetElement: 'a-range-picker',
              value: 'range',
              required: true,
              props: {
                placeholder: ['起租日期', '结束日期'],
                valueFormat: 'YYYY-MM-DD'
              },
              separateQuery: ['strDate', 'endDate']
            },
            {
              label: '插槽：',
              targetElement: 'slot',
              slotName: 'set'
            }
          ]
        }

      // 配置
      const formGroup = createdFormGroup() as any
      &lt;/script&gt;</pre
      >
      <h2>选项</h2>
      <a-table :columns="columns" :data-source="dataSource" bordered>
        <template #title>
          <h3>{{ title }}</h3>
        </template>
      </a-table>
      <h2>事件</h2>
      <p><code>rightSubmit</code>右边按钮点击提交事件</p>
      <pre>
      &lt;{{ title }}
        v-model=&quot;color&quot;
        @rightSubmit=&quot;headleRightSubmit&quot;
      /&gt;

      // 右边按钮确认提交事件
      const headleRightSubmit = (value, close, loading) => {
        loading.value = false
        console.log(value,"-=-=-=value-=-=")
        close()
      }
      </pre>
      <p><code>leftSubmit</code>左边按钮点击提交事件，非必须，默认点击关闭窗口</p>
      <pre>
      &lt;{{ title }}
        v-model=&quot;color&quot;
        @leftSubmit=&quot;headleLeftSubmit&quot;
      /&gt;

      // 左边按钮确认提交事件
      const headleLeftSubmit = (close) => {
        close()
      }
      </pre>
    </div>
    <div class="page-footer">
      {{ title }} 插件由<a href="https://zhangyanliangll.github.io/about/" target="_blank"
        >Tiankui Star</a
      >编写
    </div>
  </div>

  <lb-ant-form-dialog
    title="标题"
    v-model="formData"
    v-model:visible="visible"
    :formGroup="formGroup"
    @right-submit="submit"
  >
    <template #customSlot> 插槽～ </template>
  </lb-ant-form-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { createdFormGroup, createdColumns, createdDataSource } from './constant'

const title = 'lb-ant-form-dialog'

const visible = ref(false)

interface IFormData {
  name: string
  select: string
  date: string
  range: string
  strDate: string
  endDate: string
}

// 表单数据
const formData = ref<IFormData>({
  name: '张三',
  select: '16',
  date: '',
  range: '',
  strDate: '',
  endDate: ''
})

// 配置
const formGroup = createdFormGroup()

const columns = createdColumns()

const dataSource: Record<string, any>[] = createdDataSource()

const submit = (value: Record<string, any>) => {
  message.success(`参数：${JSON.stringify(value)}`)
}
</script>

<style lang="scss">
@import 'assets/base.scss';
@import 'assets/main';
</style>
