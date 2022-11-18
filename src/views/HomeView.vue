<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Change Ironman</button>
    <button @click="changeHulk">Change Hulk</button>

    <h2>Ironman: {{ironmanIsAlive}}</h2>
    <h2>Hulk: {{hulkIsAlive}}</h2>

    <button @click="changeStatus"></button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'


export default {
  name: 'HomeView',

  setup() {
    
    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 50 })

    // Reactive solo trabaja con objetos ref trabaja con cualquier tipo de dato
    const hulkIsAlive = reactive(true)
    const ironmanIsAlive = ref(false)

    const changeStatus = () => {
      ironmanIsAlive.value = !ironmanIsAlive
    }

    return {
      hulk,
      ironman,

      hulkIsAlive,
      ironmanIsAlive,

      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 45
      },
      changeIronman: () => {
        ironman.value.name = 'Tony Stark',
        ironman.value.age = 55
      },

      changeStatus
    }

  }
}
</script>
