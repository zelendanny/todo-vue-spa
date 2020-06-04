import axios from 'axios';

// eslint-disable-next-line new-cap
const apiClient = new axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getTask(id) {
    return apiClient.get(`/tasks/${id}/`);
  },
  getTasks() {
    return apiClient.get('/tasks/');
  },
  addTask(task) {
    return apiClient.post('/tasks/', task);
  },
  deleteTask(id) {
    return apiClient.delete(`/tasks/${id}/`);
  },
};
