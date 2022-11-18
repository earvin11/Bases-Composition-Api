<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" alt="">
    <br>
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>

</template>

<script>

import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import  usePokemon  from "@/composables/usePokemon";

export default {

    setup() {
        const route = useRoute()

        const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon( route.params.id )

        // Watcher, como primer argmenta un callback con la propiedad que va a observar, 
        // como segundo argumento callback de lo que va a hacer cuando la propiedad cambie
        watch(
          () => route.params.id,
          ( /*value, prevValue*/ ) => {
            searchPokemon( route.params.id )
          }
        )

        // Antes de abandonar esta ruta para navegar a otra ejecuta esto:
        onBeforeRouteLeave(() => {
          const answer = window.confirm('Esta seguro que desea salir?')

          //Evalua la respuesta del usuario ara validar si quiere salir de la ruta
          if(!answer) return false // false bloquea la salida del componente
        })

        return { errorMessage, isLoading, pokemon }
    }

}
</script>

<style>

</style>