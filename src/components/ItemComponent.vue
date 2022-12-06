<template>
    <div class="item">
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
.item img{
    height: 150px;
}

.item{
    border: 1px solid black;
    margin: 20px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>
  