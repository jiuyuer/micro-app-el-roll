<template>
  <main>
    <h2>appvue3sys</h2>
    <button @click="addTab">添加</button><br />
    <button @click="delTab">删除</button><br />
    <button @click="activeTab">激活</button><br />
    <RouterLink to="/about">内部跳转</RouterLink>
  </main>
</template>
<script setup lang="ts">
console.log(window, window.rawWindow, 'window');
console.log(
  window?.appDataTest,
  window?.rawWindow?.appDataTest,
  'window.appDataTest'
);
// console.log(window.localStorage, 'window.localStorage');
// window.localStorage.setItem('layout-setting', '1333333');
const addTab = () => {
  const tabInfo = {
    appName: 'appvue3sys',
    path: '/about'
  };
  window.rawWindow.$wCore.tabs('add-custom-tab', tabInfo);
};
const delTab = () => {
  const tabInfo = {
    appName: 'appvue3sys',
    path: '/index'
  };
  window.rawWindow.$wCore.tabs('del-custom-tab', tabInfo);
};
const activeTab = () => {
  const tabInfo = {
    appName: 'appvue3sys',
    path: '/about'
  };
  window.rawWindow.$wCore.tabs('active-custom-tab', tabInfo);
};
</script>
