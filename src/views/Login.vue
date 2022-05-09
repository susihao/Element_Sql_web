<template>

  <div class="login_bg">
    <div class="login_text">用户登录</div>
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
    >
      <!-- 挂载 表单提交的数据  ref="formRef"-->

      <el-form-item prop="name">
        <el-icon class="icon_el">
          <user />
        </el-icon>
        <el-input
          class="inputInp"
          v-model="form.name"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="icon_el">
          <key />
        </el-icon>
        <el-input
          class="inputInp"
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-button
        class="login_commit_btn"
        style=""
        @click="submitForm(formRef)"
      >提交</el-button>
    </el-form>
  </div>

</template>
<script lang="ts" setup>
import router from "@/router";
import { Edit, Share, User, Key } from "@element-plus/icons-vue";
import { ref, reactive } from "@vue/reactivity";
import $sql from "@/api/axios";
import type { FormRules, FormInstance } from "element-plus";
import { useStore } from "vuex";

// 用户数据
const form = ref({
  name: "",
  password: "",
});

// 规则
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入用户名：", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码:", trigger: "blur" }],
});

// 提交 表单数据
const formRef = ref<FormInstance>();

// 使用 store
const loginStore = useStore();

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      // 判断 用户名和密码
      if (form.value.name == "suan" && form.value.password == "123456") {
        // loginStore.dispatch("loginToken/actToken", form);

        // 设置 localstorage
        loginStore.dispatch("actToken", form.value);

        // 获取 用户数据
        await $sql.selectAllData();

        // 实现 跳转
        router.push("/home");
        window.alert("登录成功！");
      } else {
        window.alert("用户名 或者 密码输入错误 ！");
      }
    } else {
      console.log("用户名 或者 密码 不能为空 ！");
      return false;
    }
  });
};
</script>

<style scope>
/* 背景 */
.login_bg {
  display: inline-block;
  margin-top: 18.75rem;
  width: 18.75rem;
  height: 25rem;
  background-color: rgb(39, 89, 146);
  opacity: 0.85;
  border: 0.125rem solid wheat;
  border-radius: 0.625rem;
  padding: 0 1.25rem;
  text-align: start;
}

.el-form-item {
  margin: 2.125rem 0;
}

/* 图标 */
.login_bg .el-icon {
  flex: 1;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: white;
  /* margin-bottom: 0.125rem; */
}
.login_bg .el-icon svg {
  width: 1.55rem;
  height: 1.55rem;
  color: rgb(39, 89, 146);
}

/* 标题 */
.login_text {
  text-align: center;
  font-size: 1.875rem;
  margin: 1.875rem;
}

/* 输入框 */
.login_bg .inputInp {
  flex: 5.5;
  width: 100%;
  /* margin: 0.625rem 0 0.875rem 0; */
}

/* 按钮 */
.login_bg .login_commit_btn {
  display: inline-block;
  width: 100%;
  color: white;
  background-color: blue;
  margin-top: 1.275rem;
}
</style>