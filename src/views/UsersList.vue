<template>
  <!-- 添加 新对象 表单 -->
  <div class="addForm">
    <el-form
      :model="formUser"
      :inline="true"
      style="background-color: white;opacity: 0.95;"
      class="demo-form-inline"
    >
      <el-form-item style="width:6rem;margin:4.8px">
        <el-input
          v-model="formUser.id"
          placeholder="ID"
        />
      </el-form-item>
      <el-form-item style="width:6rem;margin:0.3rem">
        <el-input
          v-model="formUser.name"
          placeholder="姓名"
        />
      </el-form-item>
      <el-form-item style="margin:auto">
        <el-select
          v-model="formUser.gender"
          placeholder="性别"
        >
          <el-option
            label="男"
            value="男"
          />
          <el-option
            label="女"
            value="女"
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
          @click="onSubmit(formUserRef)"
        >确定</el-button>

      </span>
    </el-form>
  </div>
  <div class="home_table">
    <!-- 显示 表格 -->
    <el-table
      border
      :data="data"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="Id"
      />
      <el-table-column
        prop="name"
        label="姓名"
      />
      <el-table-column
        prop="gender"
        label="性别"
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
    <UpdataForm
      v-model="dialogVisibleUpdate"
      :updateUser_ho='updateUser_ho'
      @updateTable="updateTableFun"
    />
  </div>
</template>
<script lang='ts' setup>
import { defineComponent, defineProps } from "vue";

import sqlFun from "@/api/sqlFun";
import { ref, reactive } from "@vue/reactivity";
import type { FormInstance } from "element-plus";
import { user } from "@/api/interfect";

import UpdataForm from "@/components/UserUpdataForm.vue";
const data = ref("");

// update 数据
const updateUser = reactive<user>({
  id: undefined,
  name: undefined,
  gender: undefined,
});

// add 数据
const formUser = reactive<user>({
  id: undefined,
  name: undefined,
  gender: undefined,
});

// updata 数据
const updateUser_ho = ref({});

// 初始化 数据
axiosSelectAll(data);

// 处理 Mysql 数据
// 1、  获取所有数据
function axiosSelectAll(data: any) {
  sqlFun
    .aStAll()
    .then((res) => {
      data.value = res;
    })
    .catch((err) => {
      console.log(err);
    });
}

// 2、 删除数据
function deleteClick(id: Number) {
  console.log(id);
  sqlFun
    .dtData(id)
    .then((res) => {
      axiosSelectAll(data);
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
    formUser.name == undefined ||
    formUser.gender == undefined ||
    formUser.id == undefined
  ) {
    return window.alert("用户名或者性别不能为空！");
  } else {
    sqlFun
      .addData(formUser)
      .then((res) => {
        axiosSelectAll(data);
        formUser.id = undefined;
        formUser.name = undefined;
        formUser.gender = undefined;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
// 添加数据  取消btn
const handleCanles = () => {
  (formUser.id = undefined),
    (formUser.name = undefined),
    (formUser.gender = undefined);
};

// 更新数据  弹窗显示
const dialogVisibleUpdate = ref(false);
// 传递 当前user 数据
const updateClick = (user: user) => {
  dialogVisibleUpdate.value = true;
  updateUser_ho.value = user;
  console.log(updateUser_ho.value);
};
// 重新渲染 Table
const updateTableFun = () => {
  axiosSelectAll(data);
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