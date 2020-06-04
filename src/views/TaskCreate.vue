<template>
  <div>
    <form @submit.prevent="createTask">
      <h1>Create Task</h1>
      <div class="field">
        <label for="name">Title</label>
        <input id="name"
               v-model="taskForm.title"
               type="text"
               placeholder="Set an account name"/>
      </div>
      <div class="field">
        <label for="description">Description</label>
        <input id="description"
               v-model="taskForm.description"
               type="text"
               placeholder="Add a description"/>
      </div>
      <div class="field">
        <label for="deadline">Deadline at</label>
        <input id="deadline"
               v-model="taskForm.deadline_at"
               type="text"
               placeholder="format: YYYY-MM-DDThh:mm"/>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskCreate',
  mounted() {
    this.taskForm = this.createFreshTaskForm();
  },
  data() {
    return {
      taskForm: {},
    };
  },
  methods: {
    createTask() {
      this.$store.dispatch('postTask', this.taskForm)
        .then(() => {
          this.$router.push({
            name: 'tasks',
          });
          this.taskForm = this.createFreshTaskForm();
        });
    },
    createFreshTaskForm() {
      return {
        title: '',
        description: '',
        is_completed: false,
        deadline_at: null,
      };
    },
  },
};
</script>

<style scoped>
  form {
    width: 50%;
    margin: auto;
  }

.field {
  margin-bottom: 24px;
}
</style>
