<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
        <h6>Hola mundo</h6>
    </li> -->
    <slot v-for="user in users" 
        :key="user.id"
        :user="user">
    </slot>
   </ul>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: true
        }
    }

}
</script>

<style>

ul {
    list-style: none;
}

</style>