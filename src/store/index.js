import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    DELETE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_COMPLETE (state, {index, completed}) {
      state.todos[index].completed = completed
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    deleteTodo ({commit}, index) {
      commit('DELETE_TODO', index)
    },
    change_COMPLETE ({commit}, obj) {
      commit('CHANGE_COMPLETE', obj)
      console.log(obj)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
