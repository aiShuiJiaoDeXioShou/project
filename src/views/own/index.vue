<!-- 个人信息中心 -->
<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user_data:{}
    }
  },
  methods: {
  },
  created () {
    this.$send({
      url:"/user_details",
      method:"get",
    }).then(res=>{
      this.user_data = res.data.data
    })
  },
  components: {
  }
}

</script>

<style lang='css' scoped>

</style>
