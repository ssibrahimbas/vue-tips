<template>
  <div class="todo">
    <b>userId:</b> {{userId}} <br/>
    <b>id:</b> {{id}} <br/>
    <b>title:</b> {{title}} <br/>
    <b>completed:</b> {{completed}}
  </div>
</template>

<script setup>
const props = defineProps({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean
})
</script>