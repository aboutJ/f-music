<template>
  <div class="sl-wrapper" ref="selecter">
    <div class="sl-main">
      <span>风格</span>
      <i class="arrow iconfont icon-caret-down"></i>
      <div class="select-dialog">
        <div class="sd-arrow" ref="sdArrow"></div>
        <div class="main">
          <SelectBtn @selectClick=""/>
        </div>
        <div class="bottom">
          <div class="btn">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import SelectBtn from '../SelectBtn/index.vue'


const selecter = ref<HTMLDivElement | null>(null)
const sdArrow = ref<HTMLDivElement | null>(null)

onMounted(() => {
  // 让sd-arrow 的left为 sl-wrapper 的一半
  const s_width: number | undefined = selecter.value?.clientWidth
  sdArrow.value!.style.left = s_width as number / 2 + "px"
})

</script>

<style lang="less" scoped>
.sl-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 3px;
  background-color: #fff;
  height: 42px;
  user-select: none;

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
      display: none;
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
        }
      }
    }
  }

  .sl-main:hover {
    .arrow {
      transform: rotate(180deg);
      animation: rotate180 0.2s linear;
    }

    .select-dialog {
      display: flex;
      flex-direction: column;
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