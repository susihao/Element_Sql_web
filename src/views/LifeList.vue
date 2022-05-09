<template>
  <!-- 添加 新对象 表单 -->
  <div class="addForm">
    <el-form
      :model="formAgency"
      :inline="true"
      style="background-color: white;opacity: 0.95;"
      class="demo-form-inline"
    >
      <el-form-item style="width:6rem;margin:0.3rem">
        <el-input
          v-model="formAgency.id"
          placeholder="ID"
        />
      </el-form-item>
      <el-form-item style="width:6rem;margin:0.3rem">
        <el-input
          v-model="formAgency.agency_name"
          placeholder="名字"
        />
      </el-form-item>
      <el-form-item style="width:6rem;margin:0.3rem">
        <el-input
          v-model="formAgency.agency_content"
          placeholder="内容"
        />
      </el-form-item>
      <el-form-item style="margin:auto">
        <el-select
          v-model="formAgency.agency_type"
          placeholder="类型"
        >
          <el-option
            label="游玩"
            value="游玩"
          />
          <el-option
            label="学习"
            value="学习"
          />
          <el-option
            label="工作"
            value="工作"
          />
        </el-select>
      </el-form-item>
      <el-form-item style="margin:auto">
        <el-select
          v-model="formAgency.agency_degree"
          placeholder="是否完成"
        >
          <el-option
            label="是"
            value="1"
          />
          <el-option
            label="否"
            value="2"
          />
        </el-select>
      </el-form-item>
      <span class="dialog-footer">
        <el-button
          @click="handleCanles"
          style="margin:0.3rem"
        >取消</el-button>
        <el-button
          type="primary"
          style="margin:0.3rem"
          @click="onSubmit(formAgencyRef)"
        >确定</el-button>

      </span>
    </el-form>
  </div>
  <div class="home_table">
    <!-- 显示 表格 -->
    <el-table
      border
      :data="dataAgencies"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="Id"
      />
      <el-table-column
        prop="agency_name"
        label="名字"
      />
      <el-table-column
        prop="agency_content"
        label="内容"
      />
      <el-table-column
        prop="agency_date"
        label="日期"
      />
      <el-table-column
        prop="agency_type"
        label="类型"
      />
      <el-table-column
        prop="agency_degree"
        label="是否完成"
      />
      <el-table-column
        prop='id'
        fixed="right"
        label="操作"
        width="140"
      >
        <template #default="scope">
          <el-button
            prop='id'
            type="primary"
            size="small"
            @click="deleteClick(scope.row.id)"
          >删除</el-button>
          <el-button
            type="danger"
            size="small"
            @click="updateClick(scope.row);"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 更新弹窗 -->
    <AgencyUpdata
      v-model="dialogVisibleUpdateAgency"
      :updateAgency_ho='updateAgency_ho'
      @updateTable="updateTableFun"
    />
  </div>
</template>
<script lang='ts' setup>
import { defineComponent, defineProps } from "vue";

import sqlFun from "@/api/sqlFun";
import { ref, reactive } from "@vue/reactivity";
import type { FormInstance } from "element-plus";
import { agency } from "@/api/agency";

import AgencyUpdata from "@/components/AgencyUpdataForm.vue";
const dataAgencies = ref("");

// add 数据
const formAgency = reactive<agency>({
  id: undefined,
  agency_name: undefined,
  agency_content: undefined,
  agency_date: undefined,
  agency_type: undefined,
  agency_degree: undefined,
});

// 初始化 数据
selectAllAgency(dataAgencies);
// console.log(dataAgencies.value);

// 处理 Mysql 数据
// 1、  获取所有数据
function selectAllAgency(dataAgencies: any) {
  sqlFun
    .aStAllAgency()
    .then((res) => {
      dataAgencies.value = res;
    })
    .catch((err) => {
      console.log(err);
    });
}

// 2、 删除数据
function deleteClick(id: Number) {
  console.log(id);
  sqlFun
    .dtDataAgency(id)
    .then((res) => {
      selectAllAgency(dataAgencies);
    })
    .catch((err) => {
      console.log("err" + err);
    });
}

//添加数据  提交 表单
const onSubmit = () => {
  // console.log(formUser);
  // 设置 弹窗显示
  if (
    formAgency.id == undefined ||
    formAgency.agency_name == undefined ||
    formAgency.agency_content == undefined ||
    formAgency.agency_type == undefined ||
    formAgency.agency_degree == undefined
  ) {
    return window.alert("用户名或者性别不能为空！");
  } else {
    formAgency.agency_date = getNowTime();
    console.log(formAgency.agency_date);

    sqlFun
      .addDataAgency(formAgency)
      .then((res) => {
        selectAllAgency(dataAgencies);
        formAgency.id = undefined;
        formAgency.agency_name = undefined;
        formAgency.agency_content = undefined;
        formAgency.agency_date = undefined;
        formAgency.agency_type = undefined;
        formAgency.agency_degree = undefined;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
// 添加数据  取消btn
const handleCanles = () => {
  formAgency.id = undefined;
  formAgency.agency_name = undefined;
  formAgency.agency_content = undefined;
  formAgency.agency_date = undefined;
  formAgency.agency_type = undefined;
  formAgency.agency_degree = undefined;
};
// 获取 当前时间
const getNowTime = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let mouthStr = month >= 10 ? month : "0" + month;
  let nowDay = time.getDate();
  let nowDayStr = nowDay >= 10 ? nowDay : "0" + nowDay;
  let hours = time.getHours();
  let hoursStr = hours >= 10 ? hours : "0" + hours;
  let minutes = time.getMinutes();
  let minutesStr = minutes >= 10 ? minutes : "0" + minutes;
  let seconds = time.getSeconds();
  let secondsStr = seconds >= 10 ? seconds : "0" + seconds;
  let timerStr =
    year +
    "-" +
    mouthStr +
    "-" +
    nowDayStr +
    " " +
    hoursStr +
    ":" +
    minutesStr +
    ":" +
    secondsStr;
  return timerStr;
};

// 更新数据  弹窗显示
const dialogVisibleUpdateAgency = ref(false);
// update 数据
const updateAgency = reactive<agency>({
  id: undefined,
  agency_name: undefined,
  agency_content: undefined,
  agency_date: undefined,
  agency_type: undefined,
  agency_degree: undefined,
});
// updata 数据
const updateAgency_ho = ref({});

// 传递 当前agency  数据
const updateClick = (agency: agency) => {
  dialogVisibleUpdateAgency.value = true;
  updateAgency_ho.value = agency;
  console.log(dialogVisibleUpdateAgency.value);
};
// 重新渲染 Table
const updateTableFun = () => {
  selectAllAgency(dataAgencies);
};
defineProps({});


</script>

<style scope>
.home_table {
  width: 100%;
  margin: auto;
  opacity: 0.95;
  background: white;
}
.addForm {
  display: inline;
  background-color: rgba(18, 41, 172, 0.637);
}

/* 添加数据 Btn  */
.addData {
  display: inline-block;
  position: relative;
  right: 0rem;
  bottom: -2rem;
  opacity: 2;
}
</style>