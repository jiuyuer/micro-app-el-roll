<template>
  <micro-app
    style="position: relative"
    class="micro-app"
    name="appvue2sys"
    url="http://localhost:9531/appvue2sys/"
    :iframe="false"
    :inline="true"
    :data="microAppData"
    @created="handleCreate"
    @beforemount="handleBeforeMount"
    @mounted="handleMount"
    @unmount="handleUnmount"
    @error="handleError"
    @datachange="handleDataChange"
    :baseroute="`/appvue2sys/`"
    keep-alive
  />
</template>

<script lang="ts" setup>
defineOptions({ name: 'MicroApp' });
import { ref, watch } from 'vue';
import microApp from '@micro-zoe/micro-app';
import { useRoute } from 'vue-router';
const route = useRoute();

const microAppData = ref({
  msg: '来自基座的数据'
});

watch(
  () => route.fullPath,
  () => {
    microApp.setData('appvue2sys', {
      path: route.fullPath
    });
  },
  { immediate: true }
);

const handleCreate = () => {
  // console.log('micro 创建了');
};

const handleBeforeMount = () => {
  // console.log('micro 即将被渲染');
};

const handleMount = () => {
  // console.log('子应用 已经渲染完成');
  // setTimeout(() => {
  //   // @ts-ignore
  //   microAppData = { msg: '来自基座的新数据' };
  // }, 2000);
};

const handleUnmount = () => {
  // console.log('子应用 卸载了');
};

const handleError = () => {
  // console.log('子应用 加载出错了');
};

const handleDataChange = (e: CustomEvent) => {
  console.log('来自子应用的数据:', e.detail.data);
};
</script>
