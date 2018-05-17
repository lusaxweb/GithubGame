<template lang="html">
  <section class="container">
    <div id="tridiv">
  <div class="scene" style=" ">
    <div class="shape cuboid-1 cub-1">
      <div class="face tp">
        <div :class="{
          'selected':$store.state.selected == slot
          }"
           @click="selectionx(slot)" v-for="slot in $store.state.slots" class="caja">
           {{slot.object}}
           <div v-if="slot.object" class="objectx">
             <div  class="" is="cubo">

             </div>
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
    selectionx(objectx){
      if(this.$store.state.remove){
        objectx.object = null
      }

      let selectedx = this.$store.state.selected
      console.log();
      if(this.$isNull(selectedx)){
        this.$store.state.selected = objectx
      } else {
        if(this.$store.state.selected.number === objectx.number) {
          this.$store.state.selected = null
        } else {
          this.$store.state.selected = objectx
        }
      }


    }
  }
}
</script>

<style lang="css">
.objectx {
  transform-style: preserve-3d;
  /* transform: rotate(-40deg) translate(0px,-30px) !important; */
  /* transform-origin: 0 0; */
  /* transform:rotateX(38deg) rotateY(45deg); */
  /* transform: scale(1) rotate(15deg) translate(-20px,-20px); */
  /* height: 100px; */
  /* background: rgb(230, 139, 217); */
  /* transform: rotate(-38deg) translate(-10px); */
  /* position: absolute; */
  /* top: 0px; */
  transform: rotate(-45deg) scaleY(1.60) translate(0%,-49%);
  width: 145%;
  height: 145%;
  top: 0px;
  position: absolute;
  left: 0px;
}
.objectx svg {
  display: block;
  position: relative;
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
  /* transform: translate(-50%,-50%); */
  transform:rotateX(-38deg) rotateY(-45deg);
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
  border: 20px solid rgb(86, 164, 97);
  background-color:#FFFFFF;
}


.caja {
  width: 62.5px;
  height: 62.5px;
  background: rgb(205, 205, 205);
  float: left;
  border: 1px solid rgb(41, 41, 41);
  box-sizing: border-box;
  position: relative;
}
.caja:hover {
  background: rgb(127, 198, 100);
}
</style>
