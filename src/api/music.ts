import request from "../utils/request"

// 获取音乐的类型
export function getMusicCategory() {
  return request("/category", "GET", null)
}