import { onMounted } from 'vue';
<template>
  <div class="bg-white w-full p-4 ">
      <div class=" flex w-full mx-auto space-x-6 justify-center items-center"> 
      <router-link 
        to="/list" 
        class="px-6 py-3 md:text-xl w-1/2 md:w-1/4 flex justify-center  rounded-full bg-botonColor text-white font-bold inline-flex items-center space-x-2 rounded"
        :class="{'bg-botonColor1': ruta === 'FavList'}"
      >
        <img src="../assets/img/All.svg" class="mr-2" />
        <span>All</span>
      </router-link>

      <router-link 
        to="/favlist" 
        class="px-6 py-3 md:text-xl w-1/2 md:w-1/4 flex justify-center rounded-full bg-botonColor text-white font-bold inline-flex items-center space-x-2 rounded"
        :class="{'bg-botonColor1': ruta === 'List'}"
      >
        <img src="../assets/img/start.png" class="mr-2" />
        <span>Favorites</span>
      </router-link>
      </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import router from '../router';
export default {

    setup(){
        onMounted(() =>{
            ruta.value = router.currentRoute.value.name
        })
        const ruta = ref('');
        return {
            ruta,
        }
    }

}
</script>

<style>

</style>