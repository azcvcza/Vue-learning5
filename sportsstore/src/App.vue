<template>
  <div id="app">
    <router-view></router-view>
   
  </div>
</template>

<script>
import store from "./components/Store";
import {mapActions} from "vuex";
export default {
  name: 'App',
  components:{store},
  methods:{
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  },
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
