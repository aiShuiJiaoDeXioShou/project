<!-- 这个是个人博客的编辑器 -->
<template>
  <div class="edit-root">
    <div class="ed-right-tools markdown-body" v-html="render">

    </div>
    <div class="ed-content">
      <mavon-editor v-model="text" @change="changeData" style="min-height: 750px"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      render: ""
    }
  },
  methods: {
    changeData(_, render) {
      // value中是文本值,render是渲染出的html文本
      this.render = render;
    },
  }
}

</script>

<style lang='css' scoped>
.edit-root{
  width: 100%;
  height: 100%;
  display: flex;
}
.ed-right-tools{
  
}
.ed-content{
  width: 100%;
  height: 100%;
}
</style>
