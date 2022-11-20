<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal v-if="isOpen"
        title="Hola mundo"
        @on:close="closeModal">
    <!-- <h1>Titulo del modal</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <button>Exit</button> -->

    <template v-slot:footer>
        <button @click="closeModal">Exit</button>
    </template>

    <template v-slot:header>
        <h2>Titulo modal</h2>
    </template>

    <template v-slot:body>
        <p>Lorem ipsum dolor sit amet.</p>
    </template>

    <template v-slot:exposed="{ newTitle }">
        <h2>{{ newTitle }}</h2>
    </template>

  </modal>
</template>

<script>

import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components: { Modal },

    setup() {

        const isOpen = ref(false)

        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }

    }

}
</script>

<style scoped>

</style>