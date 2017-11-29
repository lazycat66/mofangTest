<template>
  <div class="main-wrap">
       <el-button type="primary" @click="visible = true">按钮</el-button>
       <el-dialog :visible.sync="visible" title="Hello world">
         <p>欢迎使用 Element</p>
       </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return { visible: false }
  }
}
</script>
<style>
.main-wrap{
    margin: 10px;
    padding: 10px;
}
</style>
