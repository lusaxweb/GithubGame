<template>
  <div id="app">
    <vuenut :store="$store.state"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <piso />
    <menu-edit />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import piso from './components/piso.vue'
import menuEdit from './components/menuEdit.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    piso,
    menuEdit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
