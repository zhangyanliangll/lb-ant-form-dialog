// 动态组件
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'DynamicComponent',

  props: {
    renderMethod: {
      type: Function,
      required: true
    },
    sourceData: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  render() {
    return this.renderMethod ? this.renderMethod(h, this.sourceData) : null
  }
})
