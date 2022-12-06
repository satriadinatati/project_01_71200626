<template>
    <div class="image">
      <img :src=link alt="">
      <h2>{{judul}}</h2>
    </div>
</template>
  
<script>
  export default {
    name: 'HelloWorld',
    props: {
      link: String, judul: String
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
    
}
</style>
  