<!--
 * @Author: 月魂
 * @Date: 2022-08-23 16:12:03
 * @LastEditTime: 2022-08-23 16:22:52
 * @LastEditors: 月魂
 * @Description: 
 * @FilePath: \vue-admin\src\layout\components\header.vue
-->
<template>
  <!-- 面包屑 -->
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 操作栏 -->
  <el-dropdown class="dropdown">
    <span class="el-dropdown-link">
      用户名
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style lang='less' scoped>
.breadcrumb {
  height: 50px;
  line-height: 50px;
}
.dropdown {
  height: 50px;
  line-height: 50px;
}
</style>
