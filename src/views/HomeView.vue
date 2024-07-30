<template>
  <div class="home">
    <h1>基座:vue3+vite4</h1>
    <p>
      子应用使用饿了么UI组件库中的 el-select,el-table中filter属性的四种情况表现:
    </p>
    情况1，基座是 frame 沙箱，micro-app标签设置成 position: relative<br />
    vue2表现：el-select正常，el-table的filter有问题(点击展示后定位问题出错，第二次点击时发生)<br />
    vue3表现正常<br />
    <br />
    情况2，基座是 frame 沙箱，micro-app标签设置成 position: unset<br />
    vue2表现：el-select,el-table的filter滚动浏览器时，弹土框均跟随滚动<br />
    vue3表现：el-select,eltable的filter液动浏览器时，弹土框均跟随滚动<br />
    <br />
    情况3，基座是 with 沙箱，micro-app标签设置成 position: unset<br />
    vue2表现正常<br />
    vue3略<br />
    <br />
    情况4，基座是 with 沙箱，micro-app标签设置成 position: relative<br />
    vue2表现：el-select正常，el-table的filter有问题(点击展示后定位问题出错，第二次点击时发生)<br />
    vue3略<br />
  </div>
</template>
<style>
.home {
  font-size: 16px;
  h1 {
    font-size: 18px;
    padding: 20px 0;
  }
  p{
    margin-bottom: 20px;
  }
}
</style>
