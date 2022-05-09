import request from './request'
import { user } from '@/api/user'
import { agency } from '@/api/agency'
let $sql: Object

// 用户 ************************************************
// 1、获取 所有数据   
const selectAllData = () => {
  return request({
    url: '/server/selectAll',
    method: 'GET',
  })
}

// 2、 删除 数据
const deleteData = (id: Number) => {
  return request({
    url: '/server/delete',
    method: 'GET',
    params: {
      id
    }
  })
}

// 3、 添加 数据
const addData = (user: user) => {
  return request({
    url: '/server/add',
    method: 'POST',
    params: user
  })
}

// 4、 更新数据
const updateData = (user: user) => {
  return request({
    url: '/server/update',
    method: 'POST',
    params: user
  })
}


// 生活计划 ************************************************
// 1、 获取 所有数据  
const selectAllagency = () => {
  return request({
    url: '/server/selectAllAgency',
    method: 'GET',
  })
}

// 2、 删除 数据
const deleteAgency = (id: Number) => {
  return request({
    url: '/server/deleteAgency',
    method: 'GET',
    params: {
      id
    }
  })
}

// 3、 添加 数据
const addAgency = (agency: agency) => {
  return request({
    url: '/server/addAgency',
    method: 'POST',
    params: agency
  })
}

// 4、 更新数据
const updateAgency = (agency: agency) => {
  return request({
    url: '/server/updateAgency',
    method: 'POST',
    params: agency
  })
}

export default $sql = {
  selectAllData,
  deleteData,
  addData,
  updateData,
  selectAllagency,
  deleteAgency,
  addAgency,
  updateAgency
}
