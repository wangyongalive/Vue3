import { createStore } from 'vuex'
export default createStore({
  state: { name: 'dell' },
  mutations: {
    changeName(state, str) {
      state.name = str;
    }
  },
  actions: { 
    getData(store) {
      setTimeout(() => { // 异步方法
        store.commit('changeName', 'hello')
      }, 2000)
    }
  }
})
