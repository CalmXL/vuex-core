export function forEachValueKey (obj, callback) { // obj[key] key
  // mutations['addTodo']: fn  key: addTodo
  Object.keys(obj).forEach(key => callback(obj[key], key));
}