<template>
  <todo-service-wrapper>
    <todos></todos>
  </todo-service-wrapper>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoServiceWrapper from "@/examples/sfc/todoServiceWrapper.vue";
import Todos from "@/examples/sfc/todos.vue";

@Options({
  components: {Todos, TodoServiceWrapper}
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
