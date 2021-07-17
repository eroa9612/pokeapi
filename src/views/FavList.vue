<template>
  <div class=" h-screen bg-fondo py-10" >
    <Search class="mx-4 mb-10" :filter="filter" />
    <ListPoke class="mx-4" :pokemons="pokemons" />
    <Footer class="fixed bottom-0" />
    <Loader v-if="preloader" />
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import { getPokemons} from '../api/servicesStore';
import ListPoke from '../components/ListPoke';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Loader from '../components/Loading';
export default {
  components:{ ListPoke, Search, Footer, Loader},
  setup(){
        onMounted(() => {
            getPoke();
        })

        const getPoke = async () => {
            pokeFav.value = getPokemons();
              pokeFav.value.map(x =>{
                pokemons.value.push({
                  name: x,
                  state: true
                })
              }) 
              setTimeout(() => {     
                preloader.value = false;
              }, 1000);
        }

        const filter = (value) => {
            pokemons.value = pokemons.value.filter(data => data.name.toLowerCase().includes(value.toLowerCase()))
            if(!value){
              pokemons.value = [];
              getPoke();
            }
        }

        const pokemons = ref([]);
        const pokeFav = ref([]);
        const preloader = ref(true);
        

        return{
            getPoke,
            pokeFav,
            pokemons,
            preloader,
            filter
        }
    }
}
</script>

<style>

</style>
