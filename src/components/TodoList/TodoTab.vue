<script setup>
  import { useStore } from 'vuex';

  const store = useStore();

  const setFilter = (filter) => {
    store.commit('setFilter', filter)
  }
</script>

<template>
  <div>
    <a 
      href="javascript:;"
      @click="setFilter('all')"
      :class="{ active: $store.state.filter === 'all'}"
     >All</a>
    <a 
      href="javascript:;"
      @click="setFilter('unFinished')"
      :class="{ active: $store.state.filter === 'unFinished'}"
     >unFinished</a>
    <a 
      href="javascript:;"
      @click="setFilter('finished')"
      :class="{ active: $store.state.filter === 'finished'}"
     >Finished</a>
  </div>
</template>

<style lang="scss" scoped>
  a {
    width: 100px;
    height: 44px;
    padding: 20px;
    color: #000;
    text-decoration: none;
  }

  .active {
    color: hotpink;
  }
</style>