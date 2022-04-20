<template>
  <div id="app">
    <div id="nav">
     
    </div>
    <router-view />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
   
  },
  mounted() {
   axios({
     method:'get',
     url:"http://localhost:8080/hello",
   }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
