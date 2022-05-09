import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8888',
  timeout: 5000,
})

// 设置 请求拦截器 
// service.interceptors.request.use(config => {
//   config.headers.Authorization = localStorage.getItem('token')
//   return config
// })

// 处理 从数据库中获取的 数据
service.interceptors.response.use((req) => {
  const { data } = req.data
  return data
})

export default service