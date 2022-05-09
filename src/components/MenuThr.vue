<template>
  <h5
    class="mb-2"
    style="font-size:1.17rem;color:black"
  >导航栏</h5>
  <el-menu
    active-text-color="#ffd04b"
    background-color="rgba(25, 7, 192, 0.836)"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleCloseAside"
  >
    <el-sub-menu index="1">
      <template #title>
        <span>页面跳转</span>
      </template>
      <el-menu-item
        index="2"
        style="content-box"
      >
        你好
      </el-menu-item>
    </el-sub-menu>

  </el-menu>

</template>
<script lang='ts' setup>
import { defineComponent, defineProps } from "vue";

defineProps({});
</script>
<style scope>
</style>