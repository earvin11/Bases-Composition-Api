import { ref } from 'vue'


const useCounter = ( initValue = 5 ) => {
     // Crea una const que sea ref() para que sea reactiva
     const counter = ref(initValue)

     return {
         counter,

         // Manera corta de aumentar el counter.value sin declarar una funcion
         decrease: () => counter.value--,
         increase: () => counter.value++,
     }
}

export default useCounter