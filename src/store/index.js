import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selected:null,
    slots: [
      {
        number:1,
        object:null
      },
      {
        number:2,
        object:null
      },
      {
        number:3,
        object:null
      },
      {
        number:4,
        object:null
      },
      {
        number:5,
        object:null
      },
    ],
    objects:[
      'silla',
      'mesa',
      'alfombra'
    ]
  },
})

export default store
