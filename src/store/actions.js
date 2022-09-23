/**
 * mutations -> commit(type, payload)
 * 
 * actions -> dispatch(type, payload)
 * 
 * action -> type -> (store, payload)
 * mutations -> type -> (store, payload)
 */
export default {
  addTodo ({ commit}, text) {
    commit('addTodo', text);    
  },
  toggleTodo ({ commit }, id) {
    commit('toggleTodo', id);
  },
  removeTodo ({ commit }, id) {
    commit('removeTodo', id);
  }
}