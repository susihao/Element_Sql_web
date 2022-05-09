<template>
  <el-dialog
    :model-value="dialogVisibleUpdateAgency"
    title="更新 生活数据"
    width="30%"
  >
    <span>
      <!-- 添加 新对象 表单 -->
      <el-form
        :model="formAgency"
        :inline="true"
        style="background-color: white;opacity: 0.95;"
        class="demo-form-inline"
      >
        <el-form-item style="width:40%;margin:0.3rem">
          <el-input
            v-model="updateAgency.id"
            placeholder="ID"
          />
        </el-form-item>
        <el-form-item style="width:40%;margin:0.3rem">
          <el-input
            v-model="updateAgency.agency_name"
            placeholder="名字"
          />
        </el-form-item>
        <el-form-item style="width:40%;margin:0.3rem">
          <el-input
            v-model="updateAgency.agency_content"
            placeholder='内容'
          />
        </el-form-item>
        <el-form-item style="width:40%;margin:0.3rem">
          <el-input
            v-model="updateAgency.agency_date"
            placeholder="2022-05-04 11:01:55"
          />
        </el-form-item>
        <el-form-item style="width:40%;margin:0.3rem">
          <el-select
            v-model="updateAgency.agency_type"
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
        <el-form-item style="width:40%;margin:0.3rem">
          <el-select
            v-model="updateAgency.agency_degree"
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
        <div class="dialog-footer">
          <el-button
            @click="handleClose"
            style="margin:0.3rem"
          >取消</el-button>
          <el-button
            type="primary"
            style="margin:0.3rem"
            @click="onSubmitUpdate(formAgencyRef)"
          >确定</el-button>
        </div>
      </el-form>
    </span>
  </el-dialog>
</template>
<script lang='ts' setup>
import { defineComponent, defineProps, reactive, ref } from "vue";

import { ElMessageBox } from "element-plus";

import { agency } from "@/api/agency";
import sqlFun from "@/api/sqlFun";
import { User } from "@element-plus/icons-vue/dist/types";

// 接收 父组件 传递数据
const props = defineProps({
  updateAgency_ho: {
    type: Object,
    default: {
      id: undefined,
      agency_name: undefined,
      agency_content: undefined,
      agency_date: undefined,
      agency_type: undefined,
      agency_degree: undefined,
    },
  },
});

// 实现响应
const updateAgency = reactive<agency>({
  id: undefined,
  agency_name: undefined,
  agency_content: undefined,
  agency_date: undefined,
  agency_type: undefined,
  agency_degree: undefined,
});

// 处理 Mysql 数据
// 提交 表单  更新数据
const onSubmitUpdate = () => {
  updateAgency.id = props.updateAgency_ho.id;
  if (
    updateAgency.id == undefined ||
    updateAgency.agency_name == undefined ||
    updateAgency.agency_content == undefined ||
    updateAgency.agency_date == undefined ||
    updateAgency.agency_type == undefined ||
    updateAgency.agency_degree == undefined
  ) {
    handleClose();
    return window.alert("用户名或者性别不能为空！");
  } else {
    sqlFun
      .updateDataAgency(updateAgency)
      .then((res) => {
        emit("updateTable");
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const emit = defineEmits(["update:modelValue", "updateTable"]);

const handleClose = () => {
  emit("update:modelValue", false);
};
</script>
<style scope>
</style>