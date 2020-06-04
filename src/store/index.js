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
    DELETE_TASK(state, id) {
      const i = state.tasks.findIndex((el) => el.id === id);
      if (i !== -1) {
        state.tasks.splice(i, 1);
      }
    },
    UPDATE_TASK(state, task) {
      const i = state.tasks.findIndex((el) => el.id === task.id);
      if (i !== -1) {
        state.tasks[i] = task;
      } else {
        state.tasks.push(task);
      }
    },
    POST_TASK(state, task) {
      state.tasks.push(task);
    },
  },
  actions: {
    getTasks({ commit }) {
      TasksService.getTasks().then((response) => {
        const tasks = response.data;
        commit('GET_TASKS', tasks);
      });
    },
    updateTask({ commit }, task) {
      TasksService.updateTask(task).then((response) => {
        const updatedTask = response.data;
        commit('UPDATE_TASK', updatedTask);
      });
    },
    doneTask({ state, dispatch }, id) {
      const task = state.tasks.find((el) => el.id === id);
      task.is_completed = true;
      task.completed_at = new Date();
      dispatch('updateTask', task);
    },
    postTask({ commit }, task) {
      TasksService.postTask(task).then((response) => {
        const createdTask = response.data;
        commit('POST_TASK', createdTask);
      });
    },
    deleteTask({ commit }, id) {
      TasksService.deleteTask(id).then(() => {
        commit('DELETE_TASK', id);
      });
    },
  },
});
