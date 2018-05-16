<template lang="html">
  <section class="container">
    <div id="tridiv">
  <div class="scene" style="-webkit-transform:rotateX(-38deg) rotateY(-45deg); -moz-transform:rotateX(-38deg) rotateY(-45deg); -ms-transform:rotateX(-38deg) rotateY(-45deg); transform:rotateX(-38deg) rotateY(-45deg); ">
    <div class="shape cuboid-1 cub-1">
      <div class="face tp">
        <div :class="{
          'selected':$store.state.selected == slot
          }"
           @click="selectionx(slot)" v-for="slot in $store.state.slots" class="caja">
           {{slot.object}}
           <div v-if="slot.object" class="objectx" is="cubo">

           </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </section>
</template>

<script>
import cubo from './objects/_cubo'
export default {
  components:{
    cubo
  },
  data: ()=>({
    selection:null,
  }),
  methods:{
    selectionx(number){
      this.$store.state.selected = number
    }
  }
}
</script>

<style lang="css">
.objectx {
  transform-style: preserve-3d;
  transform: rotate(-40deg) translate(0px,-30px) !important;
  /* transform-origin: 0 0; */
}
.selected {
  background: rgb(31, 230, 145) !important;
}

/* /!\ You need to add vendor prefixes in order to render the CSS properly (or simply use http://leaverou.github.io/prefixfree/) /!\ */ #tridiv {
  /* perspective: 800px; */
  position: absolute;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: transparent;
  font-size: 100%;
  background: rgb(3, 51, 209);
  z-index: 100;
}
.face {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);
}
.scene, .shape, .face, .face-wrapper, .cr {
  position: absolute;
  transform-style: preserve-3d;
}
.scene {
  width: 600px;
  height: 600px;
  /* top: 50%; */
  /* left: 50%; */
  transform: translate(-50%,-50%);
}
.shape {
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 50%;
}
.face, .face-wrapper {
  /* overflow: hidden; */
  transform-origin: 0 0;
  backface-visibility: hidden;
  /* hidden by default, prevent blinking and other weird rendering glitchs */
}
.face {
  background-size: 100% 100%!important;
  background-position: center;
}
.face-wrapper .face {
  left: 100%;
  width: 100%;
  height: 100%
}
.photon-shader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}
.side {
  left: 50%;
}
.cr, .cr .side {
  height: 100%;
}
[class*="cuboid"] .ft, [class*="cuboid"] .bk {
  width: 100%;
  height: 100%;
}
[class*="cuboid"] .bk {
  left: 100%;
}
[class*="cuboid"] .rt {
  /* transform: rotateY(-90deg) translateX(-50%); */
}
[class*="cuboid"] .lt {
  /* transform: rotateY(90deg) translateX(-50%); */
}
[class*="cuboid"] .tp {
  transform: rotateX(90deg) translateY(-50%);
}
[class*="cuboid"] .bm {
  /* transform: rotateX(-90deg) translateY(-50%); */
}
[class*="cuboid"] .lt {
  left: 100%;
}
[class*="cuboid"] .bm {
  top: 100%;
}
/* .cub-1 styles */
.cub-1 {
  /* transform:translate3D(0.0625em, 0em, -0.0625em) rotateX(0deg) rotateY(0deg) rotateZ(0deg); */
  opacity:1;
  width:16.125em;
  height:5em;
  margin:-2.5em 0 0 -8.0625em;
}
.cub-1 .tp, .cub-1 .bm {
  width:500px;
  height:500px;
}
.cub-1 .face {
  background-color:#FFFFFF;
}


.caja {
  width: 62.5px;
  height: 62.5px;
  background: rgb(205, 205, 205);
  float: left;
  border: 1px solid rgb(41, 41, 41);
  box-sizing: border-box;
}
.caja:hover {
  background: rgb(127, 198, 100);
}
</style>
