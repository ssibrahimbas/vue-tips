<template>
  <slot></slot>
</template>

<script setup>
import {provide} from "vue";
import axios from "axios"

const getTodos = async() => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return response.data
}

provide("getTodos", getTodos);
</script>