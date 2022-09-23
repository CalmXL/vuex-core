export default {
  addTodo (state, text) {
    state.todos.push({
      id: state.id ++,
      text,
      isFinished: false
    });
  },
  toggleTodo (state, id) {
    state.todos.forEach(todo => {
      if (todo.id === id) {
        todo.isFinished = !todo.isFinished;
      }
    });
  },
  removeTodo (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  setFilter (state, filter) {
    state.filter = filter;
  }
}