import { ref } from 'vue'
import axios from 'axios'

const useUser = () => {
    
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

export default useUser