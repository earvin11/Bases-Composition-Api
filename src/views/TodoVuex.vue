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
        :class="{ 'completed': todo.completed }"
        @dblclick="toggleTodo( todo.id )">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="isOpen = true">Crear TODO</button>

  <modal v-if="isOpen"
         @on:close="isOpen = false">
    <template v-slot:header>
      <h2>Crea un TODO</h2>
    </template>

    <template v-slot:body>

      <form @submit.prevent="createTodo( txtModal ); isOpen=false">

        <input 
          v-model="txtModal"
          type="text"
          placeholder="Nueva tarea">

          <br>
          <br>

          <button type="submit">Crear</button>

      </form>

    </template>

  </modal>

</template>

<script>
import useTodo from '@/composables/useTodo'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {

  components: { Modal },

  setup() {

    const { all, currentTab, getTodosByTab, toggleTodo, pending, createTodo } = useTodo()


    

    return {
      all, 
      currentTab, 
      getTodosByTab, 
      pending,
      toggleTodo,
      createTodo,

      //Modal
      isOpen: ref(false),
      txtModal: ref(null)
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