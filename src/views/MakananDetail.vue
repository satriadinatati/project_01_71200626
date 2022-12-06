<template>
    <div class="details">
        <div class="ket">
            <h2>Pedas/Tidak</h2>
            <span @click="(pedas=true)" >Pedas</span>   |   <Span @click="(pedas=false)" >Tidak</Span>

            <h2>Ekstra Kentang</h2>
            <span @click="(kentang=true)" >Ya</span>   |   <Span @click="(kentang=true)" >Tidak</Span>
        </div>
        <div class="pic">
            <img :src=ehe.link alt="">
            <h2>{{ehe.judul}}</h2>
            <div class="btn">Tambah ke Pesanan</div>
        </div>
    </div>
</template>
  
<script>
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'MakananView',
    beforeMount() {
        this.get();
    },
    data() {
        return {
            pedas : false,
            kentang: false,
        }
    },
    components: {
    },
    methods: {
        get(){
            let cont = this.$store.state.makanan;
            for (let index = 0; index < cont.length; index++) {
                const element = cont[index];
                if (element.id == this.$route.params.id){
                    this.ehe = element;
                }
            }
        }
    },
  }
</script>
<style>
.details{
    color: black;
    display: flex;
    justify-content: space-between;
}
.pic{
    text-align: center;
    margin-left: 200px;
}
.btn{
    background-color: salmon;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
}
.active{
    font-weight: bold;
}
</style>
  