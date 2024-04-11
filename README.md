# lb-ant-form-dialog

> 基于 Ant Design Vue 的表单插件

## [Live demo](https://lb-ant-form-dialog.4everland.app/)

## 安装

```bash
# vue3
npm install lb-ant-form-dialog -S
```

## 使用

### vue3 使用

在`main.ts`文件中引入并注册

```ts
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import LbAntFormDialog from 'lb-ant-form-dialog'
const app = createApp(App)
app.use(LbAntFormDialog)

app.use(Antd)
```

在`components.d.ts`文件中引入并注册

```ts
declare module 'vue' {
  export interface GlobalComponents {
    LbAntFormDialog: (typeof import('lb-ant-form-dialog/packages/form-dialog/index.vue'))['default']
  }
}
```

在`module.d.ts`文件中引入并注册

````ts
declare module 'lb-ant-form-dialog'
```

在页面中使用

```vue
<template>
  <lb-ant-form-dialog
    title="标题"
    v-model="formData"
    v-model:visible="visible"
    :formGroup="formGroup"
  >
    <template #customSlot> 插槽～ </template>
  </lb-ant-form-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IFormGroupsItem } from 'lb-ant-form-dialog/packages'

const visible = ref(false)

interface IFormData {
  name: string
  select: string
  date: string
  range: string
  strDate: string
  endDate: string
  radio: string
  checkbox: string[]
}

// 表单数据
const formData = ref<IFormData>({
  name: '张三',
  select: '16',
  date: '',
  range: '',
  strDate: '',
  endDate: '',
  radio: '',
  checkbox: ['1', '2']
})

// 配置
const formGroup: IFormGroupsItem[] = [
  {
    label: '姓名：',
    // 必填
    required: true,
    targetElement: 'a-input',
    // 数据绑定的 key
    value: 'name',
    // 宽度占这行的 份数，默认：24
    col: 24,
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
    targetElement: 'slot',
    slotName: 'customSlot'
  }
]
</script>
````

## 特点

1. 简单易用，减少代码的重复书写，减少加班;
2. 提供以 `npm` 的形式安装提供全局组件;
