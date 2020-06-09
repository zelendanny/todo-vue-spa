<template>
  <div>
    <router-link class="add-task-link"
                 :to="{ name: 'task-create'}">
      +
    </router-link>
    <div class="tasks-list">
      <task-card v-for="task in tasks"
                 :key="task.id"
                 :task="task">
      </task-card>
    </div>
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
    position: relative;
    left: 1.5%;
    color: darkcyan;
    text-decoration: none;
    font-size: 40px;
  }
</style>
