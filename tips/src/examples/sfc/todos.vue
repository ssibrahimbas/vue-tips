<template>
<div>
  <Todo
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :id="todo.id"
      :completed="todo.completed"
      :user-id="todo.userId"
  ></Todo>
</div>
</template>

<script setup>
import {ref, inject, onMounted} from "vue"
import Todo from "@/examples/sfc/todo.vue";

const todos = ref([])

const getTodos = inject("getTodos")

const _getTodos = async() => {
  todos.value =  await getTodos();
}

onMounted(() => {
  _getTodos()
})
</script>