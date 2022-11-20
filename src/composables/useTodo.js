import { useStore } from 'vuex'
import { ref, computed } from 'vue'



const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')

    return {
        all: computed(() => store.getters['allTodos']),
        currentTab,
        pending: computed( () => store.getters['pendingTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab']( currentTab.value )),
  
        //Methods
        toggleTodo: (id) => store.commit('toggleTodo', id),
        createTodo: (text) => store.commit('createTodo', text)
  
      }


}

export default useTodos