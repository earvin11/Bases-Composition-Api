<template>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <!-- event.prevent para prevenir el comportamiento por defecto del event submit -->
    <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Numero del pokemon"
            v-model="pokemonId"
            ref="txtSearchId">
    </form>
    <br>
    <span>Presione enter para buscar</span>

</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from "vue-router";

export default {

    setup() {

        // se importa el useRouter de vue-router y todas sus funciones se guardan en la const router
        // esta es la manera de usar lo que en optionsApi es el this.$router
        const router = useRouter()

        const pokemonId = ref(1)
        // para la referencia al input en el template
        const txtSearchId = ref(null)

        // cada vez que se active este component hara esto
        onActivated(() => {
            // txtSearchId.value.focus()
            txtSearchId.value.select()
        })

        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                // console.log('Pokemon a buscar: ', pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }

    }

}
</script>
