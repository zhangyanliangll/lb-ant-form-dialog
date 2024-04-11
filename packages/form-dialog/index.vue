<template>
  <a-modal
    v-model:open="isShow"
    v-bind="modalOptions"
    ref="modalRef"
    class="form-modal"
    layout="inline"
    :maskClosable="maskClosable"
    :wrap-style="{ overflow: 'hidden' }"
    @ok="rightSubmit"
    @cancel="leftSubmit"
  >
    <template #title>
      <div ref="modalTitleRef" class="modal-title">
        {{ title }}
      </div>
    </template>
    <template #modalRender="{ originVNode }">
      <div :style="transformStyle">
        <component :is="originVNode" />
      </div>
    </template>
    <a-form v-bind="formProps" ref="formRef" :model="model" :scroll-to-first-error="true">
      <template v-for="item in formGroup" :key="item.value">
        <a-col v-if="!item?.isHidden" :span="item?.col || 24">
          <a-form-item
            v-bind="item.formProps || {}"
            v-on="item.formEvents || {}"
            :label="item.label"
            :name="(item as any)?.value"
            :label-col="getLabelWidth(item)"
            :rules="getFormItemRules(item)"
          >
            <!-- ⾃定义 -->
            <slot v-if="item.targetElement === 'slot'" :name="item.slotName" :row="model"></slot>
            <dynamic-component
              v-else-if="item.renderItem"
              :source-data="model"
              :render-method="item.renderItem"
              :form-item="item"
            />
            <component
              v-else
              v-model:value="model[(item as any).value]"
              v-model:valueName="model[(item as any)?.valueName]"
              v-bind="getTargetElementProps(item)"
              v-on="
                item.targetEvents || {
                  change: (...reset: any) => {
                    if (item.targetElement === 'a-input') {
                      changeInput(item.value as string, item.type, reset)
                    }
                  }
                }
              "
              :disabled="item?.disabled"
              :is="item.targetElement"
              :options="item?.options || []"
              :field-names="item?.fieldNames"
              :optionFilterProp="item?.optionFilterProp || 'label'"
            />
          </a-form-item>
        </a-col>
      </template>
    </a-form>
    <div v-if="loading" class="loading-content"><a-spin /></div>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, toRaw, nextTick } from 'vue'
import type { PropType } from 'vue'
import type { ModalProps, FormProps as FormPropsType } from 'ant-design-vue'
import { Modal, message } from 'ant-design-vue'

import DynamicComponent from '../dynamic-component'
import { floatFormater, floatFormaterJust } from '../utils/formater'
import useDraggable from '../utils/use-draggable'

import type IFormGroupsItem from './form-dialog'
import type { RulesType } from './form-dialog'

type ObjectType = Record<string, any>

defineOptions({
  name: 'LbAntFormDialog'
})

const props = defineProps({
  visible: {
    type: Boolean,
    default: () => false
  },
  title: {
    type: String,
    default: '标题'
  },
  width: {
    type: String,
    default: () => '700px'
  },
  labelWidth: {
    type: Number || String,
    default: 90
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  isClickLeftClose: {
    type: Boolean,
    default: true
  },
  okText: {
    type: String,
    default: '确认'
  },
  id: {
    type: String,
    default: () => ''
  },
  modelValue: {
    type: Object as PropType<ObjectType>,
    default: () => {
      return {}
    }
  },
  formGroup: {
    // 表单配置
    type: Array as PropType<IFormGroupsItem[]>,
    default: () => {
      return []
    }
  },
  formProps: {
    // Form 参数
    type: Object as PropType<FormPropsType>,
    default: () => {
      return {}
    }
  },
  modalProps: {
    // 弹窗 参数
    type: Object as PropType<ModalProps>,
    default: () => {
      return {}
    }
  },
  confirmTips: {
    // ⼆次确认提示
    type: String,
    default: '是否确认提交？'
  },
  isShowConfirmTips: {
    type: Boolean,
    default: false
  },
  successText: {
    // 确认成功 提示文字
    type: String,
    default: ''
  },
  isShowSuccessText: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: false
  },
  rightSubmitApi: {
    // 右边按钮 api 接口
    type: Function
  },
  rightSubmitApiQuery: {
    // 右边按钮 api 默认 参数
    type: Object as PropType<ObjectType>,
    default: () => {
      return {}
    }
  }
})

const emit = defineEmits([
  'update:modelValue',
  'update:visible',
  'rightSubmit',
  'leftSubmit',
  'updateData'
])

const loading = ref<boolean>(false)
const { modalTitleRef, transformStyle } = useDraggable()

const formRef = ref<any>() // Form ref

const model = computed({
  get() {
    return new Proxy(props.modelValue, {
      set(obj, name, val) {
        emit('update:modelValue', {
          ...obj,
          [name]: val
        })
        return true
      }
    })
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const isShow = computed<boolean>({
  get() {
    return props.visible
  },
  set(val) {
    emit('update:visible', val)
  }
})

const modalOptions = computed<ModalProps>(() => {
  return {
    width: props.width,
    okText: props.okText,
    cancelText: props.cancelText,
    confirmLoading: loading.value,
    ...props.modalProps
  }
})

onMounted(() => {
  console.log(formRef.value, '===onMounted==', props)
})

const rightSubmit = async () => {
  const {
    confirmTips,
    isShowConfirmTips,
    successText,
    isShowSuccessText,
    rightSubmitApi,
    rightSubmitApiQuery,
    formGroup
  } = props
  try {
    await formRef.value?.validateFields()
    if (isShowConfirmTips) {
      await new Promise((resolve, reject) => {
        Modal.confirm({
          title: '提示',
          content: confirmTips,
          okText: '确认',
          cancelText: '取消',
          onOk() {
            return resolve(true)
          },
          onCancel() {
            return reject(new Error('取消'))
          }
        })
      })
    }
    // loding
    loading.value = true
    // 拷贝参数
    let query: ObjectType = JSON.parse(JSON.stringify(toRaw(model.value)))
    console.log(model.value, '===model===')
    // 处理数据
    for (let index = 0; index < formGroup.length; index++) {
      const {
        notQuery,
        value,
        separateQuery,
        splitLastKey,
        splitSymbol,
        valueName,
        options,
        fieldNames,
        notValueName
      } = formGroup[index]
      if (!value) {
        continue
      }
      // 处理时间区间
      if (Array.isArray(separateQuery) && Array.isArray(query[value])) {
        const [strDate, endDate] = separateQuery
        const [one, two] = query[value]
        query[strDate] = one
        query[endDate] = two
        delete query[value]
        continue
      }
      // 树形结构处理
      if (splitLastKey) {
        const splitValues = query[value].split(splitSymbol)
        query[splitLastKey] = splitValues[splitValues.length - 1]
        delete query[value]
      }
      if (valueName && options && !notValueName) {
        const key = fieldNames?.value || 'value'
        const label = fieldNames?.label || 'label'

        const optionsItem = options?.find((item: ObjectType) => {
          return item[key] === query[value]
        })

        query[valueName] = optionsItem ? (optionsItem as any)[label] : ''
      }
      notQuery && delete query[value]
    }
    console.log(query, '===query===')
    if (rightSubmitApi) {
      try {
        query = Object.assign(rightSubmitApiQuery || {}, query)
        await rightSubmitApi(query)
        // 成功提示文字
        isShowSuccessText && message.info(`${successText || props.okText}成功！`)
        // 更新父级 数据
        emit('updateData')
        close()
      } catch (error) {
        loading.value = false
        console.log(error)
      }
      return
    }
    emit('rightSubmit', query, close, loading)
  } catch (error) {
    console.log(error)
  }
}

const leftSubmit = () => {
  loading.value = true
  if (props.isClickLeftClose) {
    close()
  }
  emit('leftSubmit', close())
}

const getTargetElementProps = (item: IFormGroupsItem) => {
  const targetProps = item?.props || {}
  let placeholder = targetProps?.placeholder || ''
  if (!placeholder) {
    placeholder = isInput(item) ? '请输入' : '请选择'
    if (item.targetElement === 'a-range-picker') {
      placeholder = ['开始日期', '结束日期']
    }
  }
  return {
    ...targetProps,
    allowClear: true,
    'show-search': true,
    'value-format': 'YYYY-MM-DD',
    placeholder
  }
}

const getLabelWidth = ({ labelWidth, label }: IFormGroupsItem) => {
  let width = label ? labelWidth || props.labelWidth : 0
  if (typeof width === 'number') {
    width = width + 'px'
  }
  return { style: { width } }
}

const getFormItemRules = ({ rules = [], required }: IFormGroupsItem) => {
  if (required) {
    rules = [
      ...rules,
      {
        validator: (value, resolve, reject) => {
          if (!value) {
            reject('不能为空')
          }
          resolve(true)
        }
      }
    ] as RulesType[]
  }
  if (rules.length) {
    rules = rules.map((item: any) => {
      return {
        ...item,
        validator: (rule: any) => {
          return createFormRule(item.validator, rule)
        }
      }
    })
  }
  return rules
}

/**
 * 更新数据源
 * @public
 * @param {string} value FormDialogGroup 所绑定的value值
 * @param {string} propsName 要更改的属性的key值, 嵌套多层的值用.分隔
 * @param {any} changeData 要改变的值
 */
const updateSourceData = (value: string, propsName: string, changeData: any) => {
  const targetItem = props.formGroup.find((item: ObjectType) => item.value === value)
  if (targetItem) {
    const propsNameList = propsName.split('.')

    if (propsNameList.length === 1) {
      ;(targetItem as any)[propsName] = changeData
    } else {
      const len = propsNameList.length
      const targetPropsName = propsNameList[len - 1]
      const effectPropsName = propsNameList.slice(0, len - 1)
      const propsItem = effectPropsName.reduce((resultData: ObjectType, currentData) => {
        return resultData[currentData]
      }, targetItem)
      if (propsItem) {
        propsItem[targetPropsName] = changeData
      }
    }
  }
}

const createFormRule = (validator: any, rule: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const obj = JSON.parse(JSON.stringify(model.value)) || {}
      const value = obj?.[rule.field] || ''
      validator && validator(value, resolve, reject, rule)
    })
  })
}

const isInput = ({ targetElement }: IFormGroupsItem): boolean => {
  return targetElement === 'a-input'
}

const changeInput = async (key: string, type?: string, ...reset: any) => {
  await nextTick()
  const [e] = reset[0]
  let value = e?.target['_value'] || ''
  if (type === 'number') {
    value = floatFormater(String(value), true)
  } else if (type === 'just') {
    value = floatFormaterJust(String(value))
  } else if (type === 'positive') {
    value = floatFormater(String(value))
  } else if (type === 'rate') {
    value = floatFormater(String(value)) + '%'
    value = value === '%' ? '' : value
  }
  model.value[key] = value
}

// 关闭窗口
const close = () => {
  // 清楚校验
  formRef.value.resetFields()
  loading.value = false
  isShow.value = false
}

defineExpose({
  updateSourceData
})
</script>

<style lang="scss" scoped>
::v-deep(.ant-form) {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .ant-form-item-label {
    label {
      &::before {
        position: absolute;
        left: -10px;
      }
    }
  }

  .ant-picker {
    width: 100%;
  }
}

.form-modal {
  .ant-form-item-explain-error {
    font-size: 12px;
  }

  .ant-pagination-options {
    .ant-select {
      min-width: 110px;
    }
  }

  .ant-modal-content {
    padding-top: 0 !important;
    .ant-modal-header {
      .modal-title {
        padding-top: 20px;
        margin-bottom: 25px;
        cursor: move;
      }
    }
  }
}
</style>

<style lang="scss">
.form-modal {
  .ant-modal-footer {
    .ant-btn-loading-icon {
      display: none;
    }
  }
  .ant-modal-content {
    padding-top: 0 !important;
  }
  .loading-content {
    position: absolute;
    top: 55px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    text-align: center;
    margin-bottom: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
