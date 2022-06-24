<script setup>
import { ref } from 'vue';


const count = ref(0)

const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
</script>

<template>
  <div >
    <h1 class="block">
      <button @click="increment">+</button>
      <h5>{{count}}</h5>
      <button @click="decrement">-</button>
    </h1>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.block{
  display: block;
}
</style>
