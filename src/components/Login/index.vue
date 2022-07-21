<template>
  <div class="wrapper" v-if="isLogin">
    <div class="top">
      <h3 class="title">欢迎来到 VFine Music</h3>
      <i class="iconfont icon-chacha" @click="$emit('close')"></i>
    </div>
    <div class="main">
      <h4 class="title">登 录</h4>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :label-position="labelPosition"
        label-width="0px"
        :model="formData"
        style="max-width: 460px"
        class="inputs"
      >
        <el-form-item prop="username">
          <el-input
            class="username"
            v-model="formData.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            class="password"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </el-form-item>
      </el-form>

      <div class="login-btn center" @click="toLogin(ruleFormRef)">登录</div>
      <p class="tip">
        还没有vfine music账号，<span
          class="quick-login"
          @click="toRegisterOrLogin"
          >快速注册</span
        >
      </p>
    </div>
  </div>

  <div class="wrapper" v-else>
    <div class="top">
      <h3 class="title">欢迎来到 VFine Music</h3>
      <i class="iconfont icon-chacha" @click="$emit('close')"></i>
    </div>
    <div class="main">
      <h4 class="title">注 册</h4>
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :label-position="labelPosition"
        label-width="0px"
        :model="formData"
        style="max-width: 460px"
        class="inputs"
      >
        <el-form-item prop="username">
          <el-input
            class="username"
            v-model="formData.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            class="password"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            class="email"
            v-model="formData.email"
            placeholder="请输入邮箱"
          />
        </el-form-item>
      </el-form>
      <div class="login-btn center" @click="register(ruleFormRef)">注册</div>
      <p class="tip">
        已有vfine music账号，<span
          class="quick-login"
          @click="toRegisterOrLogin"
          >去登录</span
        >
      </p>
    </div>
  </div>
  <div class="mask"></div>
</template>

<script setup lang="ts">
import { reactive, Ref, ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { ElMessage } from 'element-plus'
import { LoginInfo } from "../../interface/info"
import { login } from "../../api/login"
import { useUserStore } from '../../store'

const emit = defineEmits(['close'])

const labelPosition: Ref<string> = ref("right")
const ruleFormRef = ref<FormInstance>()
const userStore = useUserStore()

const formData: LoginInfo = reactive({
  username: "",
  password: "",
  email: "",
})

const isLogin: Ref<boolean> = ref(true)

const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    {
      type: "email",
      message: "请输入正确的邮箱地址",
      trigger: ["blur", "change"],
    },
  ],
})

const toRegisterOrLogin = (): void => {
  isLogin.value = !isLogin.value
}

// 登录
const toLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const data = await login(formData)
      if (data?.status == 200) {
        localStorage.setItem("f-music-token", data?.data.token)
        userStore.token = data?.data.token
        emit('close')
        ElMessage({
          type: "success",
          message: "登录成功"
        })
      }
    } else {
    }
  })
}

// 注册
const register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!", fields)
    }
  })
}
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.wrapper {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 402px;
  box-sizing: border-box;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: rgb(246, 246, 246);
    padding: 0 20px;
    box-sizing: border-box;
    .title {
      color: rgb(51, 51, 51);
      font-size: 20px;
    }

    > i {
      cursor: pointer;
      font-size: 20px;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 446px;
    box-sizing: border-box;
    background-color: #fff;

    .tip {
      color: rgb(96, 98, 102);
      font-size: 14px;
      line-height: 50px;

      .quick-login {
        cursor: pointer;
      }
    }

    .login-btn {
      width: 298px;
      height: 40px;
      padding: 0 15px;
      color: #fff;
      background-color: rgb(51, 51, 51);
      margin-top: 8px;
      cursor: pointer;
    }

    .title {
      text-align: center;
      line-height: 18px;
      font-size: 18px;
      color: rgb(51, 51, 51);
    }

    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .username,
      .email,
      .password {
        width: 328px;
        height: 38px;
        outline: none;
        color: rgb(96, 98, 102);
        font-size: 14px;
      }
    }
  }
}
</style>
