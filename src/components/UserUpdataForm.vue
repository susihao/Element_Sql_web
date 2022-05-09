<template>
  <el-dialog
    :model-value="dialogVisibleUpdate"
    title="更新用户数据"
    width="30%"
  >
    <span>
      <!-- 添加 新对象 表单 -->
      <el-form
        :model="formUser"
        :inline="true"
        class="demo-form-inline"
        @close="handleClose"
      >
        <el-form-item style="display:block,width:6rem">
          <el-input
            v-model="updateUser.name"
            placeholder="姓名"
          />
        </el-form-item>
        <el-form-item style="display:block,margin:auto">
          <el-select
            v-model="updateUser.gender"
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
          <el-button @click="handleClose">取消</el-button>
          <el-button
            type="primary"
            @click="onSubmitUpdate(formUserRef)"
          >确定</el-button>
        </span>
      </el-form>
    </span>
  </el-dialog>
</template>
<script lang='ts' setup>
import { defineProps, reactive, ref } from "vue";

import { ElMessageBox } from "element-plus";

import { user } from "@/api/interfect";
import sqlFun from "@/api/sqlFun";
import { User } from "@element-plus/icons-vue/dist/types";

const props = defineProps({
  updateUser_ho: {
    type: Object,
    default: {
      id: undefined,
      name: undefined,
      gender: undefined,
    },
  },
});

const updateUser = reactive({
  id: undefined,
  name: undefined,
  gender: undefined,
});

// 处理 Mysql 数据
// 提交 表单  更新数据
const onSubmitUpdate = () => {
  updateUser.id = props.updateUser_ho.id;
  if (updateUser.name == undefined || updateUser.gender == undefined) {
    handleClose();
    return window.alert("用户名或者性别不能为空！");
  } else {
    sqlFun
      .updateData(updateUser)
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