<template>
  <div class="s-wrapper" v-for="item in content">
    <div :class="[{'isactive': getCheckedStatus(item)},'s-btn']" @click.prevent="current(item)">
      <input
        type="checkbox"
        id="inputId"
        :checked="getCheckedStatus(item)"
      />
      <label for="inputId"></label>
      <span class="text">{{item.name}}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MusicCategory } from '../../interface/info'
import { useMusicStore } from '../../store/Music'
import { Ref, ref, computed } from 'vue'

defineProps(["content"])
const musicStore = useMusicStore()

// 状态是否被选中
function getCheckedStatus(item: MusicCategory): boolean {
  return musicStore.categoryList.findIndex((ele) => ele == item) != -1
}

function current(item: MusicCategory) {
  const result = musicStore.categoryList.findIndex((ele) => item == ele)
  if(result != -1) {
    musicStore.categoryList.splice(result, 1)
    return
  }
  musicStore.categoryList.push(item)
}
</script>

<style lang="less" scoped>
.s-wrapper {
  display: inline-block;
  min-width: 160px;
  cursor: pointer;
}
.s-btn {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 7px;
  border-radius: 3px;
  border: 1px solid #636569;
  color: #636569;
  margin-right: 8px;

  .text {
    margin-left: 5px;
  }
}

.s-btn:nth-child(3n) {
  margin: 0;
}

input {
  display: none;
}

label {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  border: 1px solid #444445;
  position: relative;
}

.s-btn:hover {
  background-color: #333333;
  color: #fff;

  label {
    border: 1px solid #444445;
    background-color: #fff;
  }
}

label::before {
  display: inline-block;
  content: " ";
  width: 10px;
  border: 2px solid #444445;
  height: 4px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  top: 3px;
  left: 2px;
  position: absolute;
  opacity: 0;
}

input:checked + label {
  background: #fff;
}

input:checked + label::before {
  opacity: 1;
}

input:checked + label {
  transform: scale(1.1);
  transition: all 0.3s;
}

.isactive {
  background-color: #333333;
  color: #fff;
}
</style>
