const First = {
    state: {
        count: 0
    },
    getters: {
  
    },
    mutations: {
        changeCount(state, data){
            state.count += data
        }
    },
    actions: {
        changeCount({commit}){
            commit("changeCount", 1)
        }
    },
    modules: {
      
    }
}

export default First