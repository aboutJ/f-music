<template>
  <div class="s-wrapper">
    <div class="s-btn" ref="sbtn">
      <input
        type="checkbox"
        id="inputId"
        :checked="isBoxChecked"
        @click="selectBox"
      />
      <label for="inputId"></label>
      <span class="text"> zhoujilun</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const sbtn = ref<HTMLDivElement | null>(null)
let isBoxChecked = ref<boolean>(false)

function selectBox(): void {
  isBoxChecked.value = !isBoxChecked.value
  if (isBoxChecked.value) {
    sbtn.value!.style.backgroundColor = "#333333"
    sbtn.value!.style.color = "#fff"
  } else {
    sbtn.value!.style.backgroundColor = "#fff"
    sbtn.value!.style.color = "#636569"
  }
}
</script>

<style lang="less" scoped>
.s-wrapper {
  display: inline-block;
  min-width: 160px;
}
.s-btn {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 7px;
  border-radius: 3px;
  border: 1px solid #636569;
  color: #636569;

  .text {
    margin-left: 5px;
  }
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
  cursor: pointer;
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
</style>
