import {
  forEachValueKey
} from './utils';

import { computed } from 'vue';

export function createMutations (store, mutations) {
  forEachValueKey(mutations, (mutationFn, mutationKey) => {
    store._mutations[mutationKey] = (payload) => {
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
  store.getters = {};

  forEachValueKey(getters, (gettersFn, gettersKey) => {
    Object.defineProperty(store.getters, gettersKey, {
      get: () => computed(() => gettersFn(store.state, store.getters)).value
    })
  })
}

export function createCommitFn (store, commit) {
  store.commit = function (type, payload) {
    commit.apply(store, [type, payload]);
  }
}

export function createDispatchFn (store, dispatch) {
  store.dispatch = function (type, payload) {
    dispatch.apply(store, [type, payload]);
  }
}