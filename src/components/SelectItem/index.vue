<template>
  <div class="sl-wrapper" v-for="(item, index) in data">
    <div class="sl-main" @mouseover="activeIndex = index" @mouseout="activeIndex = -1">
      <span>{{item.name}}</span>
      <i class="arrow iconfont icon-caret-down"></i>
      <div class="select-dialog" v-show="index == activeIndex">
        <div class="sd-arrow"></div>
        <div class="main">
          <SelectBtn :content="item.children"/>
        </div>
        <div class="bottom">
          <div :class="[{'canclick': canClick},'btn']" @click="search">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SelectBtn from '../SelectBtn/index.vue'
import { useMusicStore } from '../../store'

defineProps(["data"])

let canClick = ref<boolean>(false)
let activeIndex = ref<number>(-1)

const musicStore = useMusicStore()

musicStore.$subscribe((mutation, state) => {
  if(state.categoryList.length > 0) {
    canClick.value = true
  }else {
    canClick.value = false
    musicStore.canShowCgList = false
  }
})

function search() {
  if(!canClick.value) return
  // 搜索
  musicStore.canShowCgList = true
  musicStore.categorys = [...musicStore.categoryList]
  activeIndex.value = -1
}
</script>

<style lang="less" scoped>
.sl-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 3px;
  background-color: #fff;
  height: 42px;
  user-select: none;
  margin-right: 15px;

  .sl-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 16px 20px 16px;
    line-height: 42px;
    .arrow {
      transform: rotate(0);
      animation: rotatef180 0.2s linear;
    }

    >span {
      font-size: 16px;
      margin-right: 15px;
    }

    >i {
      font-size: 16px;
    }

    .select-dialog {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0;
      top: 55px;
      width: 530px;
      height: 300px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, .1);
      box-sizing: border-box;

      .sd-arrow {
        position: absolute;
        top: -4px;
        left: 42.5px;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 1px;
        transform: rotate(45deg);
      }

      .main {
        margin-top: 13px;
        padding: 0 13px;
        height: 260px;
        box-sizing: border-box;
        overflow: auto;
      }

      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F6F6F6;
        height: 56px;
        .btn {
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background-color: #A9AAAA;
          color: #fff;
          border-radius: 15px;
          cursor: pointer;
        }

        .canclick {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }

  .sl-main:hover {
    .arrow {
      transform: rotate(180deg);
      animation: rotate180 0.2s linear;
    }
  }
}

@keyframes rotate180 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes rotatef180 {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>