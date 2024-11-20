<template>
  <div class="window"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
onMounted(() => {
  // $('.window').css('background-color', 'red');

  // good
  // let str = `<div onmouseOver="window[0].$('.window').css('background-color','blue')"><button class="btn">按钮</button></div>`;
  // bad
  let str = `<div onmouseOver="$('.window').css('background-color','blue')"><button class="btn">按钮</button></div>`;
  
  $('.window').html(str);
});
</script>
<style>
.window {
  width: 500px;
  height: 400px;
  border: 1px solid #999;
}
.btn {
  width: 100px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #999;
  cursor: pointer;
  color: #000;
}
</style>
