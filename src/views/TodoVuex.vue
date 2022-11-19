<template>
  <h1>Thanos Todo List</h1>
  <!-- <h4>Total: {{ $store.state.todos.length }}</h4> -->
  <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed).length }}</h4> -->
  <h4>Pendientes: {{ pending.length }}</h4>
  <!-- {{ pending }} -->

  <hr>
  <button
  :class="(currentTab === 'all') && 'active'"
  @click="currentTab = 'all'">
     Todos
  </button>

  <button
  :class="(currentTab === 'pending') && 'active'"
  @click="currentTab = 'pending'">
     Pendientes
  </button>

  <button
  :class="(currentTab === 'completed') && 'active'"
  @click="currentTab = 'completed'">
     Completados
  </button>


  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
        :class="{ 'completed': todo.completed }">
        {{ todo.text }}
      </li>
    </ul>
  </div>

</template>

<script>

import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {

  setup() {

    const store = useStore()

    const currentTab = ref('all')

    return {
      currentTab,

      // Pending sera una propiedad computada, ve al store, a los getters, trae el getter 'pendingTodos'
      pending: computed( () => store.getters['pendingTodos']),
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),

      // Esto crea una computada usando el getter getTodosByTab, el cual es una funcion que recibe otra funcion
      // al este getter retornar una funcion este debe ser ejecutado enviandole como argumento el currenTab.value necesario para la funcion
      getTodosByTab: computed(() => store.getters['getTodosByTab']( currentTab.value ))
    }

  }

}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
 background-color: #2c3e50;
 color: white;
}

.completed {
  text-decoration: line-through;
}

</style>