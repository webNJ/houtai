import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import mutations from './mutations'
let store = new VueX.Store({
  state: {
    managename:'请登录'
  },
  mutations

})

export default store
