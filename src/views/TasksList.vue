<template>
  <div class="tasks-list">
    <router-link class="add-task-link"
                 :to="{ name: 'task-create'}">
      <h3>Add task</h3>
    </router-link>
    <task-card v-for="task in tasks"
               :key="task.id"
               :task="task">
    </task-card>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue';
import { mapState } from 'vuex';

export default {
  name: 'TasksList',
  components: {
    TaskCard,
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
    }),
  },
  methods: {
    getTasks() {
      this.$store.dispatch('getTasks');
    },
  },
  created() {
    this.getTasks();
  },
};
</script>

<style scoped>
  .tasks-list {
    width: 50%;
    margin: auto;
  }

  .add-task-link {
    color: black;
    text-decoration: none;
  }
</style>
