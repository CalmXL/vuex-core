# 完成的任务

1. 实现TodoList
所有完成项/未完成项 切换 - Tab
列表项增加             - addTodo
切换列表项完成与未完成状态 - toggleTodo
删除列表项               - removeTodo

2. 需要的state
  - todos： Array
  - filter: all/finished/unfinished -> string 
  - id: number ++

3. vuex4 设计

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import store from '../src/store/index';
// 使用 插件的方式为 vue 全局添加功能的工具代码。
createApp(App).use(store).mount('#app'); // 使用use store
```

因此 store 中肯定会有一个 install()的方法用来实现use。

将mutations,actions 中的函数放入到_actions， _mutations中。


![image-20220923143143941](/Users/xulei/Library/Application Support/typora-user-images/image-20220923143143941.png)

```javascript
class Store {
  constructor (options) {
    const {
      state,
      getters,
      mutations,
      actions
    } = options;
    
    const store = this;
    const { commit, dispatch } = this;
    
    store._state = reactive({ data: state });
    store._mutations = Object.create(null);
    store._actions = Object.create(null);
    
    // 将mutations中的方法挂载到 store
    createrMutations(store, mutations);
    createActions(store, actions);
    createGetters(store, getters);
    createCommitFn(store, commit);
    createDispatchFn(store, dispatch);
    
  }
  
  get state () {
    return this._state.data;
  }
  
  install (app) {
  	app.provide(this);  
    app.config.globalProperties.store = this;
  }
  
  commit (type, payload) {
    this._mutations(type, payload);
  }
  
  dispatch (type, payload) {
    this._actions(type, payload);
  }
  
}

export function useStore () {
  return inject('store');
}


export function createStore (options) {
  return new Store(options);
}
```



createors.js

```javascript
fucntion forEachValueKey (obj, callback) {
  Object.keys(obj).forEach(key => callback(obj[key], key));
}


export function createMutations (store, mutations) {
  forEachValueKey(mutations, (mutationFn, mutationKey) => {
    store._mutation[mutationkey] = (payload) => {
      mutationFn.apply(store, [ store.state, payload ]);
    }
  })
}

export function createActions (store, actions) {
  forEachValueKey(actions, (actionsFn, actionKey) => {
    store._actions[actionKey] = (payload) => {
      actionsFn.apply(store, [ store, payload ]);
    }
  })
}

export function createGetters (store, getters) {
  forEacnValueKey(getters, (getterFn, getterKey) => {
  	Object.defineProperty(store.getters, getterKey, {
      get: () => computed(() => getterFn(store.state, store.getters)).value
    })

  })
}

export default createCommitFn (store, commit) {
  store.commit = function (type, payload) {
    commit.apply(store, [ type, payload ]);
  }
}

export default createDispatchFn (store, dispatch) {
  store.dispatch = function (type, payload) {
    dispatch.apply(store, [ type, payload ]);
  }
}
```

