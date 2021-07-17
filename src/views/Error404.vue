<template>
  <div class="h-screen bg-fondo py-10">
    <Search class="mx-4" />
    <div class="py-10">
      <h3 class=" md:text-5xl text-3xl text-textColor font-extrabold mb-5 ">Uh-oh!</h3>
      <h3 class=" md:text-2xl text-textColor1">You look lost on your journey!</h3>
    </div>
    <button class="px-6 py-3 md:text-xl rounded-full text-white font-bold bg-botonColor" > Go back home </button>
</div>
</template>

<script>
import Search from '../components/Search';
export default {
  components:{ Search}

}
</script>

<style scoped>



</style>