<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const inputVal = ref('');

  const addTodo = () => {
    store.dispatch('addTodo', inputVal.value);
    inputVal.value = '';
  }
</script>

<template>
  <div class="form">
    <input 
      type="text" 
      v-model="inputVal"
    />
    <button 
      class="btn"
      @click="addTodo"
    >add</button>
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    width: 100px;
    border-radius: 5px;
    margin-left: 15px;
  }
</style>