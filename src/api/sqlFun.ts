import $sql from "@/api/axios";
import { agency } from '@/api/agency'
import { user } from '@/api/user'
let sqlFun: Object

// 发送 axios
// 用户 ************************************
// 1、  获取MYsql数据
async function aStAll() {
  return await $sql.selectAllData();
}
// 2、 删除数据
async function dtData(id: Number) {
  return await $sql.deleteData(id);
}
// 3、 添加数据
async function addData(user: user) {
  return await $sql.addData(user)
}
// 4、 更新数据
async function updateData(user: user) {
  return await $sql.updateData(user)
}


// 生活计划 ************************************
// 1、  获取MYsql数据
async function aStAllAgency() {
  return await $sql.selectAllagency();
}
// 2、 删除数据
async function dtDataAgency(id: Number) {
  return await $sql.deleteAgency(id);
}
// 3、 添加数据
async function addDataAgency(agency: agency) {
  return await $sql.addAgency(agency)
}
// 4、 更新数据
async function updateDataAgency(agency: agency) {
  return await $sql.updateAgency(agency)
}

export default sqlFun = {
  aStAll,
  dtData,
  addData,
  updateData,
  aStAllAgency, dtDataAgency, addDataAgency, updateDataAgency
}