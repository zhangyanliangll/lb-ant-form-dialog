/**
 * @description: 清除空格
 * @param { string } str
 * @param { boolean } isGlobal 是否删除所有空格
 * @return { string }
 */
export const Trim = (str = '', isGlobal = false) => {
  if (isGlobal) {
    // 是否删除所有空格
    return str.replace(/\s/g, '')
  }
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * @description: 数字格式化, 保留两位小数点, 且大于0, 键盘事件输入控制
 * @param { string } num 需要处理的数字
 * @param { boolean } isNegative 是否允许负数
 * @param { number } howmMany 保留几位小数
 * @param { number } maxValue 最大值
 * @return { number }
 */
export const floatFormater = (
  num = '',
  isNegative = false,
  howmMany = 2,
  maxValue = Number.MAX_SAFE_INTEGER
) => {
  num = Trim(num)
  num = num.replace(/^\./g, '')
  if (isNegative) {
    num = num.replace(/[^-?(\d.)]/g, '') //清除数字和‘- .’以外的字符
    num = num.replace(/-{2,}/g, '-') //只保留第一个 -，清楚多余的
    num = num.replace('-', '$#$').replace(/-/g, '').replace('$#$', '-')
  } else {
    num = num.replace(/[^\d.]/g, '') //清除数字和‘.’以外的字符
  }
  num = num.replace(/\.{2,}/g, '.') //只保留第一个，清楚多余的
  num = num.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
  if (howmMany == 3) {
    // eslint-disable-next-line no-useless-escape
    num = num.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3') //只能输入三个小数
  } else {
    // eslint-disable-next-line no-useless-escape
    num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') //只能输入两个小数
  }

  if (isNegative && num === '-') {
    return num
  }
  if (num.indexOf('.') < 0 && num != '') {
    //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
    num = String(parseFloat(num))
  }

  if (Number(num) > Number(maxValue)) {
    return Number(maxValue)
  }

  return num
}

/**
 * @description: 数字格式化, 保留整正数
 * @param { string } num 需要处理的数字
 * @return {*}
 */
export const floatFormaterJust = (num = '') => {
  return String(num).replace(/[^\d]/g, '')
}
