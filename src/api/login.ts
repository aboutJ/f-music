import request from '../utils/request'
import { LoginInfo } from '../interface/info'

// 登录
export function login(params: LoginInfo) {
  console.log(params)
  return request("/user/login", "POST", params)
}