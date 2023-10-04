<template>
  <div class="tasks">
    <div class="title">
      <h1>Tasks</h1>
      <MyBytton class="create" @click="showModal">Create</MyBytton>
    </div>

    <MyModal v-model:show="openModal" :errors="errors">
      <MyForm :task="newTask" :errors="errors" @submit="submitTask"></MyForm>
    </MyModal>

    <TaskItem
        v-for="task in tasks"
        :task="task"
        :status="!task.completed"
        @remove="removeTask"
        @close="closeTask"
        @edit="editTask"
    />

    <h1>Closed</h1>
    <TaskItem
        v-for="task in tasks"
        :task="task"
        :status="task.completed"
        @remove="removeTask"
        @close="closeTask"
        @edit="editTask"
    />

  </div>
</template>

<script>
import axios from "axios";
import MyBytton from "../components/MyBytton.vue";
import TaskItem from "../components/TaskItem.vue";
import MyForm from "../components/MyForm.vue";
import MyModal from "../components/MyModal.vue";

export default {
  name: "TasksPage",
  components: {MyForm, TaskItem, MyBytton, MyModal},
  data: () => ({
    tasks: [],
    errors: [],
    openModal: false,
    newTask: {
      id: '',
      todo: '',
      completed: false,
      userId: ''
    }
  }),
  methods: {
    removeTask(task) {
      this.tasks = this.tasks.filter(item => item.id !== task.id);
    },
    closeTask(task) {
      task.completed = !task.completed;
    },
    submitTask() {
      this.validation();
      if (!this.tasks.find(item => item.id === this.newTask.id)) {
        this.newTask.id = this.tasks.at(-1).id + 1;
        this.tasks.push(this.newTask);
      }
      this.newTask = {
        id: '',
        todo: '',
        completed: false,
        userId: ''
      }
      this.openModal = false;
    },
    editTask(task){
      this.errors = [];
      this.newTask = this.tasks.find(item => item.id === task.id);
      this.openModal = true;
    },
    showModal() {
      this.newTask = {
        id: '',
        todo: '',
        completed: false,
        userId: ''
      }
      this.errors = [];
      this.openModal = true;
    },
    validation(e){
      this.errors = [];
      if (this.newTask.todo && this.newTask.userId) {
        return true;
      }
      if (!this.newTask.todo) {
        this.errors.push('Todo.');
      }
      if (!this.newTask.userId) {
        this.errors.push('UserId.');
      }
      e.preventDefault();
    }
  },
  created() {
    axios.get('https://dummyjson.com/todos')
        .then(response => {
          this.tasks = response.data.todos;
        })
        .catch(err => {
          this.errors.push(err);
        })
  }
}
</script>

<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>