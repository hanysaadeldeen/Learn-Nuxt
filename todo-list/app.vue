<template>
  <div class="container">
    <UCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input placeholder="Add a new todo..." v-model="userInput" />

        <UButton color="primary" variant="solid" @click="addTodo">Add</UButton>
      </div>
      <UCard class="card" v-for="todo in Todos" :key="todo.id">
        <h4 :class="todo.completed ? 'complete' : null">{{ todo.name }}</h4>
        <UButton style="margin-right: 20px" @click="() => updateTodo(todo.id)"
          >Update</UButton
        >
        <UButton color="red" variant="solid" @click="() => deleteTodo(todo.id)"
          >x</UButton
        >
      </UCard>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import useTodo from "./composables/useTodo";

const userInput = ref("");
const { Todos, handleClick, updateTodo, deleteTodo } = useTodo();
const addTodo = () => {
  handleClick(userInput.value);
  userInput.value = "";
};
</script>

<style scoped>
.container {
  padding: 2rem;
  margin: 50px auto;
  max-width: 50%;
}

.cards {
  padding: 2rem;
}

input {
  outline: none;
}

.add-todo {
  display: flex;
  justify-content: space-between;
}

.card {
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.complete {
  text-decoration: line-through;
}
</style>
