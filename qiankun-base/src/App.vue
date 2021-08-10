<template>
  <div id="app">
    <el-menu default-active="activeIndex" mode="horizontal" :router="true">
      <el-menu-item index="/">主应用路由</el-menu-item>
      <el-menu-item index="/vue">vue子应用</el-menu-item>
      <el-menu-item index="/react">react子应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <!-- 定义容器用来存放子应用 -->
    <div id="vue" ></div>
    <div id="react" ></div>
  </div>
</template>

<style>

</style>
