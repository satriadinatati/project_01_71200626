import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state(){
        return {
            makanan: [
                {id:1, link:"https://nos.jkt-1.neo.id/serverless-image-op-0/fd9ee9d9c0265b24bce789412bb0d5df", judul:"Gigamac", harga:70000},
                {id:2, link:"https://img-global.cpcdn.com/recipes/d1848c61417e18b6/680x482cq70/cheese-burger-foto-resep-utama.jpg", judul:"McCheese", harga:50000},
                {id:3, link:"https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/qFoLKbSe1R3OJ75zAm4B.png", judul:"McNugget", harga:30000},

            ],
            minuman: [
                {id:1, link:"https://nos.jkt-1.neo.id/mcdonalds/foods/October2022/S8loGaq9C4kwV0WF59K9.png", judul:"McCafe", harga:5000},
                {id:2, link:"https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/4ANlG5rmRU06y7H2hgos.png", judul:"Soda", harga:10000},
                {id:3, link:"https://nos.jkt-1.neo.id/mcdonalds/foods/October2022/VOAZOrzweXeLi0oSM3sQ.png", judul:"Fanta", harga:15000},

            ],
            snack: [
                {id:1, link:"https://nos.jkt-1.neo.id/serverless-image-op-0/fd9ee9d9c0265b24bce789412bb0d5df", judul:"Gigamac", harga:70000},
                {id:2, link:"https://img-global.cpcdn.com/recipes/d1848c61417e18b6/680x482cq70/cheese-burger-foto-resep-utama.jpg", judul:"McCheese", harga:50000},
                {id:3, link:"https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/qFoLKbSe1R3OJ75zAm4B.png", judul:"McNugget", harga:30000},

            ],
        }
    },
    mutations: {
        add(state, nama){
            state.listPenduduk.push(nama);
        },
    },
    actions: {
        add(context, nama){
            context.commit("add", nama);
        }
    }
})

var app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');