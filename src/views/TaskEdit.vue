<template>
  <div>
    <form @submit.prevent="editTask">
      <h1>Edit Task</h1>
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
  name: 'TaskEdit',
  props: ['id'],
  data() {
    return {
      taskForm: {},
      isCompleted: false,
    };
  },
  methods: {
    editTask() {
      this.$store.dispatch('updateTask', this.taskForm)
        .then(() => {
          this.$router.push({
            name: 'tasks',
          });
        });
    },
  },
  mounted() {
    const i = this.$store.state.tasks.findIndex((el) => el.id === Number(this.id));
    if (i !== -1) {
      this.taskForm = this.$store.state.tasks[i];
      this.isCompleted = this.taskForm.is_completed;
    } else {
      this.$router.push({
        name: 'tasks',
      });
    }
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
