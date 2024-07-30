<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <button @click="addTab">添加</button><br />
    <button @click="delTab">删除</button><br />
    <button @click="activeTab">激活</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  created() {
    console.log(window, window.rawWindow, 'window');
    console.log(
      window.appDataTest,
      window.rawWindow.appDataTest,
      'window.appDataTest'
    );
    // console.log(window.localStorage, 'window.localStorage');
    // window.localStorage.setItem('layout-setting', '1333333');
  },
  methods: {
    addTab() {
      const tabInfo = {
        appName: 'appvue2sys',
        path: '/about'
      };
      window.rawWindow.$wCore.tabs('add-custom-tab', tabInfo);
    },
    delTab() {
      const tabInfo = {
        appName: 'appvue2sys',
        path: '/index'
      };
      window.rawWindow.$wCore.tabs('del-custom-tab', tabInfo);
    },
    activeTab() {
      const tabInfo = {
        appName: 'appvue2sys',
        path: '/about'
      };
      window.rawWindow.$wCore.tabs('active-custom-tab', tabInfo);
    }
  }
};
</script>
