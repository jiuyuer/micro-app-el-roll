# 基座: vue3+vite5+micro-app:1.0.0-rc.6

子应用使用饿了么 UI 组件库中的 el-select,el-table 中 filter 属性的四种情况表现:

## 情况 1，基座是 frame 沙箱，micro-app 标签设置成 position: relative

vue2 表现：el-select 正常，el-table 的 filter 有问题(点击展示后定位问题出错，第二次点击时发生)

vue3 表现正常

## 情况 2，基座是 frame 沙箱，micro-app 标签设置成 position: unset

vue2 表现：el-select,el-table 的 filter 滚动浏览器时，弹土框均跟随滚动

vue3 表现：el-select,eltable 的 filter 液动浏览器时，弹土框均跟随滚动

## 情况 3，基座是 with 沙箱，micro-app 标签设置成 position: unset

vue2 表现正常

vue3 略

## 情况 4，基座是 with 沙箱，micro-app 标签设置成 position: relative

vue2 表现：el-select 正常，el-table 的 filter 有问题(点击展示后定位问题出错，第二次点击时发生)

vue3 略
