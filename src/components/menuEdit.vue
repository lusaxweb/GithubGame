<template lang="html">
  <div class="con-menu-edit">
    <h2>agregar</h2>
    <ul>
      <li v-for="object in $store.state.objects">
        <button @click="add(object)" type="button" name="button">{{object}}</button>
      </li>
    </ul>
    <h2>Quitar</h2>
    <ul>
      <li>
        <button @click="$store.state.remove = !$store.state.remove" type="button" name="button">Quitar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods:{
    add(object){
      this.$store.state.selected.object = object

    }
  }
}
</script>

<style lang="css">
  .con-menu-edit {
    position: absolute;
    right: 0px;
    height: 100vh;
    width: 200px;
    background: rgb(139, 163, 14);
    top: 0px;
    right: 0px;
    z-index: 200;
    }
</style>
