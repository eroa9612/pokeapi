import { onMounted } from 'vue';
<template>
    <div class="fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
		style="background: rgba(0,0,0,.7);">
		<div
			class="border border-teal-500 shadow-lg bg-white mx-6 md:mx-0 md:w-1/2 rounded shadow-lg overflow-y-auto">

            <div class="flex justify-center items-center relative">
                <img src="../assets/img/image14.png" class=" relative w-full h-64 md:h-auto" />
                <img :src="images" class="absolute w-1/2 md:h-3/5 ">
                <img src="../assets/img/close.png" class=" absolute right-4 top-4 " @click="closeModal()" />
            </div>
			
            <div class="text-left p-6 ">
				<!--Body-->
				<div class="my-5 w-full space-y-6 text-lg capitalize">
                    <div class="border-b border-gray-300 flex space-x-2">
                        <span class=" font-extrabold">Name: </span>
                        <span> {{ pokemonData.name }} </span>
                    </div>
                    <div class="border-b border-gray-300 flex space-x-2">
                        <span class=" font-extrabold">Weight: </span>
                        <span> {{ pokemonData.weight }} </span>
                    </div>
                    <div class="border-b border-gray-300 flex space-x-2">
                        <span class=" font-extrabold">Height: </span>
                        <span> {{ pokemonData.height }} </span>
                    </div>
                    <div class="border-b border-gray-300 flex space-x-2" >
                        <span class=" font-extrabold">Types: </span>
                        <span v-for="(item, i) in types" :key="i" > {{ item }}, </span>
                    </div>
				</div>
				<!--Footer-->
				<div class="flex justify-between">
                    <button class="px-6 py-3 md:text-xl rounded-full text-white font-bold bg-botonColor" @click="doCopy(pokemonData.name, pokemonData.weight, pokemonData.height, types)" > Share to my friends </button>
                    <div class="relative flex justify-center items-center ">
                        <img src="../assets/img/Ellipse23.png" class=" relative rounded-full " />
                        <button class="absolute w-full h-full flex justify-center items-center" @click="add(pokemonData.name)" > 
                            <img v-if="namePoke.state" src="../assets/img/Vector1.png" class=" absolute" />
                            <img v-else src="../assets/img/Vector.png" class=" absolute" />
                        </button>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {ref, onMounted} from 'vue';
import services from '../api/services';
import { copyText } from 'vue3-clipboard';
export default {
    props: {
        close: Function,
        namePoke: {
            type: Object
        },
        addFav: Function
    },
    setup(props){

        onMounted(() =>{
            getPokemon();
        })

        const pokemonData = ref([]);
        const images = ref([]);
        const types = ref([]);
        const copy = ref('')

        const getPokemon = async () =>{
            pokemonData.value = await  services.pokemon(props.namePoke.name);
            images.value = pokemonData.value.sprites.other.dream_world.front_default;
            pokemonData.value.types.forEach(element => {
                types.value.push(element.type.name)
            });
        }

        const doCopy = (name, weight, height, types) => {
            types.map(x =>{    
                copy.value =  'Name:' + name + ','+ ' ' + 'Weight:' + weight + ','+ ' ' + 'Height:' + height + ','+ ' ' + 'Types:' + x;
            })
            copyText( copy.value, undefined, (error) => {
                if (error) {
                    alert('Can not copy')
                } else {
                    alert('Copied')
                }
            })
        }
        const closeModal = () => {
            props.close()
        }

        const add = (value) => {
            props.addFav(value)
            getPokemon();
            closeModal();
        }


        return{
            closeModal,
            pokemonData,
            getPokemon,
            images,
            types,
            add,
            doCopy,
            copy
        }
    }

}
</script>
<style>
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .animated.faster {
        -webkit-animation-duration: 500ms;
        animation-duration: 500ms;
    }

    .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
    }

    .fadeOut {
        -webkit-animation-name: fadeOut;
        animation-name: fadeOut;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
</style>