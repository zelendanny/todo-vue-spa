<template>
  <div class="task-card">
    Created {{ task.created_at | fromNow }}
    <span v-if="task.deadline_at">
      | Deadline {{ task.deadline_at | fromNow }}
    </span>
    <h2>{{ task.title }}</h2>
    <div class="description">{{ task.description }}</div>
    <span @click="doneTask" class="button" v-if="!task.is_completed">Done </span>
    <span v-else>
      Completed at {{ task.completed_at | dateTime }}
    </span> |
    <router-link :to="{ name: 'task-edit', params: { id: task.id }}"
                 class="button"> Edit </router-link> |
    <span @click="deleteTask" class="button"> Delete </span>
  </div>
</template>

<script>
import moment from 'moment';

import Vue from 'vue';

Vue.filter('fromNow', (value) => {
  if (value) {
    return moment(String(value)).fromNow();
  }
  return '';
});
Vue.filter('dateTime', (value) => {
  if (value) {
    return moment(String(value)).format('Do MMM hh:mm');
  }
  return '';
});

export default {
  name: 'TaskCard',
  props: {
    task: Object,
  },
  methods: {
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id);
    },
    doneTask() {
      this.$store.dispatch('doneTask', this.task.id);
    },
  },
};
</script>

<style scoped>
  .task-card {
    width: 100%;
    padding: 20px;
    margin: 10px;
    transition: all 0.2s linear;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  }

  .task-card:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0, 0, 0, 0.19);
  }

  .button {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .description {
    padding-bottom: 10px;
  }
</style>
