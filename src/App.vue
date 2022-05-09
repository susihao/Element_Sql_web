<template>
  <div class="bg_img">
    <router-view></router-view>
  </div>
</template>

<script setup>
import UsersList from "@/views/Home.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.bg_img {
  width: 100%;
  height: 100%;
  min-height: 64rem;
  background: url(../public/img/app_bg.jpg) no-repeat fixed;
  background-size: cover;
}
</style>
