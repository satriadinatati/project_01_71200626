<template>
    <div class="home">
      <ItemComponent @click="detail(item.id)" v-for="item in this.$store.state.makanan" :key="item.id" :link="item.link" :judul="item.judul"></ItemComponent>
    </div>
</template>
  
<script>
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
import ItemComponent from '@/components/ItemComponent.vue'
  
  export default {
    name: 'MakananView',
    components: {
      ItemComponent
    },
    methods: {
        detail(id){
            this.$router.push('/detailMakanan/'+id);
        }
    },
  }
</script>
<style>
.home{
    color: black;
}
</style>
  