<!--
 * @Author: 月魂
 * @Date: 2022-08-23 09:33:57
 * @LastEditTime: 2022-08-23 16:22:21
 * @LastEditors: 月魂
 * @Description: 
 * @FilePath: \vue-admin\src\layout\index.vue
-->
<template>
  <div class="wrapper">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <!-- header -->
      <div class="header">
        <Header></Header>
      </div>
      <div class="cont">
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import Sidebar from '@/layout/components/sidebar.vue'
import Header from '@/layout/components/header.vue'
const route = useRoute()

const key = computed(() => route.path)
</script>

<style lang='less' scoped>
.wrapper {
  display: flex;
  .sidebar {
    width: 210px;
    height: 100vh;
    .el-menu-vertical {
      height: 100%;
    }
  }

  .content {
    width: calc(100% - 210px);
    background: #f0f2f5;
    .header {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      height: 50px;
      line-height: 50px;
      background: #fff;
    }
    .cont {
      padding: 32px;
    }
  }
}
</style>
