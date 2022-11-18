<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div  v-if="users.length > 0">
    <ul>
        <!-- Destructuring de lo que trae user en el array users -->
        <li v-for="{ first_name, last_name, email, id } in users" :key="id">
            <h4>{{ first_name }} {{ last_name }}</h4>
            <h6>{{ email }}</h6>
        </li>
    </ul>
  </div>

  <button @click="previousPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{ currentPage }}</span>

</template>

<script>

import { ref } from 'vue'
import axios from 'axios'

export default {

    setup() {

        const isLoading = ref(true)
        const currentPage = ref(1)
        const users = ref([])
        const errorMessage = ref(null)

        const getUsers = async( page = 1 ) => {
            
            // Si el page es menor a 0 conviertelo a 1, (validacion extra)
            if( page <= 0 ) page =1

            // isLoading true antes de la peticion
            isLoading.value = true

            // Extrae la data de la respuesta, los params se envian como un objeto despues del URL
            const { data } = await axios.get(`https://reqres.in/api/users`, {
                params: {
                    page
                }
            })

            
            // Si la data.data es un array con contenido almacenalo en la propiedad users
            if(data.data.length > 0) {
                users.value = data.data
                currentPage.value = page
                errorMessage.value = null
            }else if( currentPage.value > 0 ) { // si la pagina tiene un numero positivo pero el array no tiene nada muestra el mensaje
                errorMessage.value = 'No hay mas usuarios'
            }
            
            isLoading.value = false
        }

        // Lama la funcion a penas se cree el component
        getUsers()


        return {
            currentPage,
            errorMessage,
            isLoading,
            users,

            nextPage: () => getUsers( currentPage.value + 1 ),
            previousPage: () => getUsers( currentPage.value - 1 ),
        }

    }

}
</script>

<style scoped>

h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}

</style>