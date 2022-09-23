<script setup>
import { useStore } from 'vuex';

const store = useStore();

const toggleTodo = (id) => {
  store.dispatch('toggleTodo', id);
} 

const removeTodo = (id) => {
  store.dispatch('removeTodo', id);
}

console.log(store);

</script>

<template>
  <div>
    <div 
      v-for="item of store.getters.filteredTodos"
      :key="item.id"
    >
      <input 
        type="checkbox" 
        :checked="item.isFinished"
        @click="toggleTodo(item.id)"
      />
      <span :style="{textDecoration: item.isFinished ? 'line-through' : ''}">{{ item.text }}</span>
      <button @click="removeTodo(item.id)">delete</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>