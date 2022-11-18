<template>
  <h1>Counter View</h1>
  <h3>{{ counter }}</h3>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
// import { ref } from 'vue'
import useCounter from '@/composables/useCounter'
export default {
    name: 'Counter',
    props: {},
    emit: [],

    setup() {

        // // Crea una const que sea ref() para que sea reactiva
        // const counter = ref(5)

        // // // Funciones que cambian el counter, para esto se debe apuntar al value del counter que en este caso es 5 segun declaramos
        // // const increase = () => {
        // //     counter.value++
        // // }

        // // const decrease = () => {
        // //     counter.value--
        // // }


        // // Lo que se retorna del setup son las propiedades que se usaran en el template html
        // return {
        //     counter,

        //     // Manera corta de aumentar el counter.value sin declarar una funcion en el setup
        //     decrease: () => counter.value--,
        //     increase: () => counter.value++,
        // }


        //Usando composable
        // Extrae todo lo que regresa el composable
        const { counter, decrease, increase } = useCounter(0)

        //retorna para usar en el template html
        return {
            counter,
            decrease,
            increase
        }
    },
}
</script>

<style>

</style>