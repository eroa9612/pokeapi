<template>
<div class="">
      <h3 v-if="pokemons.length === 0 "  class=" md:text-5xl text-3xl text-textColor font-extrabold mb-5 capitalize ">Uh-oh! don't has chosen favorite pokemon </h3>
    <div class="relative flex md:w-1/2 md:m-auto bg-white" 
        v-for="(item, index) in pokemons"
        :key="index" 
    >   
        <span type="text" class="w-full capitalize flex justify-start text-textColor shadow hover:underline rounded p-5" @click="open(item)" > {{item.name}} </span>
        <div class="absolute flex right-0 items-center h-full p-2 justify-center ">
                <img src="../assets/img/Ellipse23.png" class=" relative " />
                <button class="absolute w-full h-full flex justify-center items-center" @click="addFav(item.name)"> 
                     <img v-if="item.state" src="../assets/img/Vector1.png" class=" absolute" />
                     <img v-else src="../assets/img/Vector.png" class=" absolute" />
                </button>
        </div>
    </div>
    <Modal v-if="modalView" :close="close" :namePoke="namePoke" :addFav="addFav" />
</div>
</template>

<script>
import { ref} from 'vue'
import { favPokemon} from '../api/servicesStore';
import Modal from '../components/Modal';
//import services from '../api/services'

export default {
    components: {Modal},
    props: {
        pokemons: {
            type: Object
        }
    },
    setup(props){
        const close = () =>{
           modalView.value = !modalView.value; 
        }
        const open = (value) =>{
            namePoke.value = value;
            modalView.value = true;

        }
        const modalView = ref(false);
        const namePoke = ref([]);
        const addFav = (value) => {
            props.pokemons.map(x =>{
                if(x.name === value){
                    x.state = !x.state
                }
            })
            favPokemon(value);
        }

         return{
             addFav,
             modalView,
             close,
             open,
             namePoke
         }
    }
}
</script>

<style >

</style>