<!--
 * @Author: 月魂
 * @Date: 2022-08-23 15:50:10
 * @LastEditTime: 2022-08-24 16:12:28
 * @LastEditors: 月魂
 * @Description: 
 * @FilePath: \vue-admin\src\layout\components\sidebar.vue
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in routes" :key="item.path">
      <el-sub-menu v-if="item.children.length > 1" :index="item.path">
        <template #title>
          <template v-html="item.meta.icon"></template>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{ child.meta.title }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <component class="icon" :is="item.children[0].meta.icon"></component>
        <span>{{ item.children[0].meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const routes = computed(() => router.options.routes)
console.log(routes.value)

function handleOpen(key, keyPath) {
  console.log(key, keyPath, 'open')
}

function handleClose(key, keyPath) {
  console.log(key, keyPath, 'close')
}
</script>

<style lang='less' scoped>
.icon {
  width: 14px;
  margin-right: 14px;
}
</style>
