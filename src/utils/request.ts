import axios, { Axios } from 'axios'

const instance: Axios = axios.create({
  baseURL: "/api",
  timeout: 5000
})

export default function request(url: string, method: string, params: any) {
  method = method.trim().toUpperCase()
  if(method == 'GET') {
    return instance.get(url, {params})
  } else if(method == "POST") {
    return instance.post(url, params)
  }
}