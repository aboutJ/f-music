<template>
  <div class="wrapper">
    <div class="main">
      <div class="main-left">
        <img class="logo" :src="Logo" alt="" />
        <ul class="navs">
          <li class="nav" v-for="(item, index) in navs" :key="index">
            <router-link :to="item.path" active-class="active" exact>{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="main-right">
        <div class="search">
          <input
            class="search-input"
            type="text"
            placeholder="请输入音乐名/风格/情绪"
          />
          <div class="search-btn">
            <i class="search-icon iconfont icon-search"></i>
          </div>
        </div>
        <div class="login-register" @click="isShowLogin = true" v-if="!loginState">
          <span>登陆</span>
          <span>/</span>
          <span>注册</span>
        </div>
        <User v-else />
      </div>
    </div>
    <Login v-if="isShowLogin" @close="closeDialog"/>
  </div>
</template>

<script lang="ts" setup>
import Logo from "../../assets/image/logo.svg"
import Login from '../../components/Login/index.vue'
import { onBeforeMount, Ref, ref } from "vue"
import { useUserStore } from '../../store'
import User from '../../components/User/index.vue'

interface Nav {
  name: string
  path: string
}

const userStore = useUserStore()

let isShowLogin: Ref<boolean> = ref(false)
let loginState: Ref<boolean> = ref(false)

const navs: Ref<Nav[]> = ref([
  {
    name: "音乐",
    path: "/music-library",
  },
  {
    name: "歌单",
    path: "/playlist",
  },
])

userStore.$subscribe((mutation, state) => {
  if(state.token) {
    loginState.value = true
  } else {
    loginState.value = false
  }
}, { detached: true})

const closeDialog = () => {
  isShowLogin.value = false
}

onBeforeMount(() => {
  const token: string | null = localStorage.getItem("f-music-token")
  if(token) {
    userStore.token = token
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #191919;
  border-bottom: 2px solid rgb(67, 67, 67);

  .main {
    display: flex;
    justify-content: space-between;
    width: 1180px;
    height: 100%;
  }

  .main-left {
    display: flex;
    align-items: center;
    height: 100%;

    .logo {
      width: 68px;
      height: 20px;
    }

    .navs {
      display: flex;
      height: 100%;

      .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 100%;
      }

      a:hover {
        cursor: pointer;
      }

      .active {
        color: #34a95b;
      }
    }
  }

  .main-right {
    display: flex;
    align-items: center;

    .search {
      display: flex;
      width: 225px;
      height: 30px;

      .search-input {
        border: none;
        outline: none;
        font-size: 14px;
        color: rgb(96, 98, 102);
        width: 185px;
        height: 100%;
        border-radius: 15px 0 0 15px;
        padding-left: 22px;
        box-sizing: border-box;
      }

      .search-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 100%;
        background-color: white;
        border-radius: 0 15px 15px 0;

        > i {
          color: rgb(144, 147, 153);
        }
      }

      .search-btn:hover {
        cursor: pointer;
      }
    }
    
    .login-register {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      width: 122px;
      height: 36px;
      background-color: #34a95b;
      padding: 0 18px;
      box-sizing: border-box;
      border-radius: 18px;
      font-size: 14px;
      font-weight: 600;
      margin-left: 55px;
      cursor: pointer;
      user-select: none;

      >span:nth-child(2) {
        margin: 0 5px;
      }
    }
  }
}
</style>
