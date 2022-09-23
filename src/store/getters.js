
export default {
  finishedTodos (state) {
    return state.todos.filter(todo => todo.isFinished);
  },
  unFinishedTodos (state) {
    return state.todos.filter(todo => !todo.isFinished);
  },
  filteredTodos (state, getters) {
    switch (state.filter) {
      case 'finished':
        return getters.finishedTodos;
      case 'unFinished':
        return getters.unFinishedTodos;
      case 'all':
        return state.todos;
      default:
        break;
    }
  }
}