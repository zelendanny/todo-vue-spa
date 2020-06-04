import Vue from 'vue';
import VueRouter from 'vue-router';
import TasksList from '@/views/TasksList.vue';
import TaskCreate from '@/views/TaskCreate.vue';
import TaskEdit from '@/views/TaskEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TasksList,
  },
  {
    path: '/add/',
    name: 'task-create',
    component: TaskCreate,
  },
  {
    path: '/edit/:id',
    name: 'task-edit',
    component: TaskEdit,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
