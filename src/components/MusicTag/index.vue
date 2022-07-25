<template>
  <div class="mt-wrapper">
    <div class="tools">
      <i class="iconfont icon-share">
        <div class="tip">
          分享音乐
          <div class="arrow"></div>
        </div>
      </i>
      <i class="iconfont icon-good">
        <div class="tip">
          音乐收藏
          <div class="arrow"></div>
        </div>
      </i>
      <i class="iconfont icon-download1">
        <div class="tip">
          下载音乐
          <div class="arrow"></div>
        </div>
      </i>
      <i class="iconfont icon-heart-fill">
        <div class="tip">
          赞一个
          <div class="arrow"></div>
        </div>
      </i>
    </div>
    <div class="head">
      <div class="avatar">
        <img src="" />
        <div class="mask center">
          <i class="iconfont icon-play"></i>
        </div>
      </div>
      <div class="music-info">
        <h4 class="name">剧情法式浪漫梦幻 - Parisian Waltz</h4>
        <p class="author">
          AKM Music
        </p>
      </div>
    </div>
    <div class="envelope-container">
      <div class="playing-process"></div>
      <span class="total-time">00:57</span>
    </div>
    <div class="type-list">
      <TypeTag name="民谣" />
      <TypeTag name="民谣" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TypeTag from '../TypeTag/index.vue'
</script>

<style lang="less">
.mt-wrapper {
  position: relative;
  width: 556px;
  height: 162px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .5);
  background-color: #fff;
  border-radius: 8px;

  .tools {
    position: absolute;
    right: 10px;
    top: -20px;
    display: inline-block;
    line-height: 40px;
    height: 40px;
    padding: 0 10px;
    border: 2px solid #fff;
    border-radius: 8px;
    background-color: rgb(245, 245, 245);

    >i {
      position: relative;
      cursor: pointer;
      font-size: 22px;
      margin-right: 15px;
    }

    >i .tip {
      display: none;
      position: absolute;
      line-height: 35px;
      top: -50px;
      left: -20px;
      width: 60px;
      height: 35px;
      font-size: 12px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 4px;

      .arrow {
        position: absolute;
        bottom: -4px;
        left: 25px;
        width: 10px;
        height: 10px;
        border-radius: 2px;
        background-color: #333;
        transform: rotate(-45deg)
      }
    }

    >i:hover {
      color: rgb(129, 129, 129);
    }

    >i:hover .tip {
      display: inline-block;
    }

    >i:last-child {
      margin: 0;
    }
  }

  .head {
    display: flex;
    height: 60px;

    .avatar {
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 4px;
      overflow: hidden;

      >img {
        width: 100%;
        height: 100%;
      }

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        background-color: rgba(0, 0, 0, .4);

        >i {
          font-size: 20px;
          color: #fff;
        }
      }
    }

    .music-info {
      margin-left: 18px;

      .name {
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #333;
        font-weight: 400;
      }

      .author {
        margin-top: 6px;
        font-size: 10px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        color: #777;
      }
    }
  }

  .envelope-container {
    position: relative;
    width: 450px;
    height: 30px;
    padding: 6px 20px;
    margin-top: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;

    .playing-process {
      width: 30px;
      height: 30px;
      background-color: #333;
      border-radius: 4px;
    }

    .total-time {
      position: absolute;
      right: -65px;
      bottom: 0px;
    }
  }

  .type-list {
    margin-top: 24px;
  }
}
</style>