<template>
  <div class=" h-screen bg-fondo py-14">
    <div class="flex justify-center items-center">
      <img src="../assets/img/Ellipse10.png" class=" relative pt-14" />
      <img src="../assets/img/MaskGroup.png" class=" absolute pt-1 pl-5" />
    </div>
    <div class=" mx-10 py-20 space-y-4">
      <span class=" text-2xl font-bold text-textColor" > Welcome to Pokédex </span>
      <p class=" text-textColor1 md:w-3/5 lg:w-2/5 xl:w-2/5 mx-auto " >The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    </div>
        <router-link to="/list" class="px-6 py-3 md:text-xl  rounded-full text-white font-bold bg-botonColor" > Get Started </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
   // HelloWorld
  }
}
</script>
