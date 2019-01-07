import { isArray, isObject } from './objectType'

// 空对象
const emptyObject = JSON.stringify({})

/**
 * 检查数组或对象是否为空
 * @param {any} value - 要检查的值
 */
export const isEmpty = value => {
  if (isArray(value) && isArray.length > 0) {
    return false
  } else if (isObject(value) && emptyObject !== JSON.stringify(value)) {
    return false
  }
  return true
}
