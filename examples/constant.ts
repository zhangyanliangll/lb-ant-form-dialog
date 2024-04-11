import type IFormGroupsItem from '@/form-dialog/form-dialog'

export const createdFormGroup = (): IFormGroupsItem[] => {
  return [
    {
      label: '姓名：',
      // 必填
      required: true,
      targetElement: 'a-input',
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
      targetElement: 'slot',
      slotName: 'customSlot'
    }
  ]
}

export const createdColumns = () => {
  return [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'Default',
      dataIndex: 'default'
    },
    {
      title: 'Required',
      dataIndex: 'required'
    }
  ]
}

export const createdDataSource = () => {
  return [
    {
      name: 'modelValue',
      description: 'v-model 绑定的数据',
      type: 'object',
      default: '{}',
      required: 'true'
    },
    {
      name: 'formGroup',
      description: '表单配置,详情请看 `formGroup配置`',
      type: 'IFormGroupsItem[]',
      default: '[]',
      required: 'true'
    },
    {
      name: 'title',
      description: '弹框标题',
      type: 'string',
      default: '标题',
      required: ''
    },
    {
      name: 'width',
      description: '弹框宽度',
      type: 'string',
      default: '700px',
      required: ''
    },
    {
      name: 'visible',
      description: 'v-model:visible 显示隐藏弹框',
      type: 'boolean',
      default: 'false',
      required: 'true'
    },
    {
      name: 'labelWidth',
      description: '全部 label 的宽度',
      type: 'number/string',
      default: '90px',
      required: ''
    },
    {
      name: 'okText',
      description: '弹框右边按钮确认按钮文字',
      type: 'number/string',
      default: '确认',
      required: ''
    },
    {
      name: 'successText',
      description: '成功 toast 文字/是否显示',
      type: 'boolean/string',
      default: 'true',
      required: '取消'
    },
    {
      name: 'isClickLeftClose',
      description: '左边按钮点击是否关闭窗口',
      type: 'boolean',
      default: 'false',
      required: ''
    },
    {
      name: 'isShowConfirmTips',
      description: '右边按钮点击是否二次确认提示',
      type: 'boolean',
      default: 'false',
      required: ''
    },
    {
      name: 'confirmTips',
      description: '右边按钮点击是否二次确认提示文字',
      type: 'string',
      default: '是否确认',
      required: ''
    },
    {
      name: 'rightSubmitApi',
      description: '右边按钮 api 接口，存在则不会调用 rightSubmit 事件，调用updateData事件',
      type: 'function',
      default: '',
      required: ''
    },
    {
      name: 'rightSubmitApiQuery',
      description: '右边 api 默认参数',
      type: 'object',
      default: '{}',
      required: ''
    }
  ]
}
