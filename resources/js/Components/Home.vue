<template>
  <div>
    <h1>helo from vue</h1>

    <ul v-for="toDo in allTodos" :key="toDo.id">
        <li>{{ toDo.title }}</li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return{
            
        }
  },
  computed: mapGetters(["allTodos"]),
}
</script>

<style scoped>

</style>