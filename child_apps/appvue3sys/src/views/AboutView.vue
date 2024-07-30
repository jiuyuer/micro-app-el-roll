<template>
  <div class="about">
    <h1>This is an appvue3sys about page</h1>
    <br />
    <el-button type="primary" @click="dialogVisible = true">弹框</el-button>
    <br />
    <br />
    <input style="background-color: #fff; color: #333" type="text" />
    <br /><br />
    <img src="/image.jpg" />
    <br />
    <el-dialog append-to-body v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';
// if (!window.__MICRO_APP_ENVIRONMENT__) {
//   document.title = 'test';
// }
document.title = 'test';
const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>
