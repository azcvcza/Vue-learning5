<template>
  <div id="app">
    
    <store></store>
    
    <router-view/>
  </div>
</template>

<script>
import store from "./components/Store"
export default {
  name: 'App',
  components:{store}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
