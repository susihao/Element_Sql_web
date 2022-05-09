<template>
  <div class="common-layout">
    <el-container direction="horizontal">
      <el-aside
        width="9.3rem"
        style="background:rgba(25, 7, 192, 0.836);box-sizing:none"
      >
        <MenuThr />
      </el-aside>
      <el-container>
        <el-header
          height="5.5rem"
          style="background:rgba(25, 7, 192, 0.836)"
        >
          <el-button
            type="primary"
            round
            @click="UsersListViewHandle"
          >用户信息</el-button>
          <el-button
            type="warning"
            round
            @click="LifeListViewHandle"
          >生活记录</el-button>
        </el-header>
        <el-main style="padding:0">
          <div
            class=""
            v-if="tableView"
          >
            <UsersList />
          </div>
          <div
            class=""
            v-else
          >
            <LifeList />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts' setup>
import { defineProps } from "vue";
import sqlFun from "@/api/sqlFun";
import { ref, reactive } from "@vue/reactivity";
import type { FormInstance } from "element-plus";
import { user } from "@/api/interfect";

import MenuThr from "@/components/MenuThr.vue";
import UsersList from "@/views/UsersList.vue";
import LifeList from "@/views/LifeList.vue";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

// import $sql from "@/api/axios";

// const { data } = await homeData();
// console.log(data.data);

// main 显示
const tableView = ref(true);

// 按钮点击 事件
const UsersListViewHandle = () => {
  tableView.value = true;
};
const LifeListViewHandle = () => {
  tableView.value = false;
};

// Aside 导航栏
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleCloseAside = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scope>
.el-container .el-header {
  --el-header-padding: 0 0;
  --el-header-height: 5.2rem;
  line-height: 5rem;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>