<template>
  <div class="tt-wrapper">{{name}}</div>
</template>

<script setup lang="ts">
defineProps(['name'])
</script>

<style lang="less">
.tt-wrapper {
  display: inline-block;
  text-align: center;
  line-height: 22px;
  margin-right: 12px;
  height: 22px;
  font-size: 12px;
  background-color: #fdfdfd;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 4px;
  padding: 0 10px;
  color: #333;
}
</style>