import type { FormProps, FormInstance } from 'ant-design-vue'

export type TargetElementType =
  | 'a-input'
  | 'a-select'
  | 'a-date-picker'
  | 'a-range-picker'
  | 'a-checkbox-group'
  | 'a-radio-group'
  | 'slot'
  | string

export type IFormGroupsFieldNamesItem = {
  /** @description: 绑定的键名，下拉赋值的key  */
  value: string
  /** @description: 绑定的下拉显示的title */
  label: string
}

export type RulesType = {
  /** @description: 是否`必填`项 */
  message?: string
  /**
   * @description: 校验函数
   * @param value: 当前校验的值
   * @param resolve: 成功执行的函数
   * @param reject: 失败执行的函数
   * @param rule: 规则
   * @return {Promise} `resolve(true)` ｜ `reject('错误')`
   */
  validator: (
    value: any,
    resolve: (v: any) => void,
    reject: (v: string) => void,
    rule?: any
  ) => void
  trigger: string
}

export type IFormGroupsBaseItem<T> = {
  /** @description: 标题名 */
  label?: string
  /** @description: 是否`必填`项 */
  required?: boolean
  /** @description: 是否`隐藏` */
  isHidden?: boolean
  /** @description: 值是否不需要`传给后端` */
  notQuery?: boolean
  /** @description: 数值类型`
   * @param number: 数值保留两位小数，-12.01 ｜ 12.01
   * @param just: 正整数
   * @param positive: 正值
   * @param rate: 比例
   */
  type?: 'number' | 'just' | 'positive' | 'rate'
  /**
   * @description: 渲染的目标节点
   * @param: `a-input` | `'a-select'` | `'a-date-picker'` | `'slot'`;
   */
  targetElement: TargetElementType
  /** @description: 类似 key 必须是唯一的, 除了 slot，跟v-model关联 */
  value?: T
  /** @description: 选中的下拉名字 */
  valueName?: string
  /** @description: 是否需要name */
  notValueName?: boolean
  /** @description: 是否禁用 */
  disabled?: boolean
  /** @description: 需要分割的key取最后一个进行传参，比如：树结构选择项目，跟v-model关联 */
  splitLastKey?: string
  /** @description: splitLastKey 分割符号，比如：树结构选择项目 */
  splitSymbol?: string
  /** @description:  `targetElement` `props` 传参 */
  props?: Record<string, any>
  /** @description: `当前label`的宽度，当前标题宽度 */
  labelWidth?: number | string
  /**
   * @description: 下拉选择 `key` 的配置
   * @param: { value: string; label: string; }
   */
  fieldNames?: IFormGroupsFieldNamesItem
  /** @description: `下拉/复选`选项数据 */
  options?: Record<string, any>[]
  /** @description: `下拉 搜索时过滤对应的 option 属性 */
  optionFilterProp?: string | 'label'
  /** @description: 当前列占`整行份数` */
  col?: number | string
  /** @description: 表单 `整体Form` pros */
  formProps?: FormProps | Record<string, any>
  /** @description: 表单 `整体Form` Events 事件 */
  formEvents?: FormInstance | Record<string, () => any>
  /**
   * @description: 自定义组件，渲染函数
   * @param h h函数
   * @param sourceData 源数据
   * @param config 单前配置 FormItem
   * @return: VNode | any
   */
  renderItem?: (h: any, sourceData?: any, config?: any) => any
  /** @description: `targetElement` Events 事件 */
  targetEvents?: Record<string, () => any>
  /** @description: 时间区间选择=> `[开始时间，结束时间]` */
  separateQuery?: [string, string]
  /** @description: 校验规则 */
  rules?: RulesType[]
  /** @description: targetElement='slot' 时，slotName的名字 */
  slotName?: string
}

export type IFormGroupsItem = IFormGroupsBaseItem<string>

export default IFormGroupsItem
