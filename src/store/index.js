import Vue from 'vue';
import Vuex from 'vuex';
import TasksService from '@/services/TasksService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    GET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    getTasks({ commit }) {
      TasksService.getTasks().then((response) => {
        const tasks = response.data;
        commit('GET_ACCOUNTS', tasks);
      });
    },
  },
});
