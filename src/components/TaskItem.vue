<template>
  <div class="title">
    <h1>Tasks</h1>
    <BaseButton class="create" @click="show = true">Create</BaseButton>
  </div>
  <TaskCreate :show="show" :task="newTask" @submit="submitTask"></TaskCreate>
  <div class="task" v-for="task in tasks" :key="task.id">
    <div class="task-info">
      <div class="task-info__main">
        <div class="task-info__main-id">{{ task.id }}</div>
        <div
          class="task-info__main-todo"
          :class="task.completed ? 'completed' : 'todo'"
        >
          {{ task.todo }}
        </div>
      </div>
      <div>
        <div
          class="task-info__status"
          :class="task.completed ? 'completed' : 'todo'"
        >
          {{ task.completed ? "completed" : "to do" }}
        </div>
        <div class="task-info__assign">
          <strong>user: </strong>{{ task.userId }}
        </div>
      </div>
    </div>
    <div class="task__btns">
      <BaseButton
        action="close"
        :status="task.completed"
        @click="closeTask(task)"
        >Close</BaseButton
      >
      <BaseButton action="edit" @click="editTask(task)">Edit</BaseButton>
      <BaseButton action="delete" @click="removeTask(task)">Delete</BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import TaskCreate from "./TaskCreate.vue";
import { ref } from "vue";
import { setToDo } from "../../api/apiToDo.js";

const tasks = ref(setToDo);
const show = ref(false);
const newTask = ref({
  id: "",
  todo: "",
  completed: false,
  userId: 13,
});

const removeTask = (task) => {
  tasks.value = tasks.value.filter((item) => item.id !== task.id);
};
const closeTask = (task) => {
  task.completed = !task.completed;
};
const submitTask = () => {
  if (!tasks.value.find((item) => item.id === newTask.value.id)) {
    newTask.value.id = tasks.value.at(-1).id + 1;
    tasks.value.push(newTask.value);
  }
  newTask.value = {
    id: "",
    todo: "",
    completed: false,
    userId: 13,
  };
  show.value = false;
};
const editTask = (task) => {
  newTask.value = tasks.value.find((item) => item.id === task.id);
  show.value = true;
  window.scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid black;
  .task-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .task-info__main {
      display: flex;
      align-items: center;
      .task-info__main-id {
        margin-right: 10px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid black;
        border-radius: 10%;
        background-color: lightgrey;
      }
      .task-info__main-todo {
        font-size: 18px;
        &.completed {
          color: gray;
          text-decoration: line-through;
        }
      }
    }
    .task-info__status {
      line-height: 20px;
      padding: 5px 10px;
      text-align: center;
      font-weight: 700;
      border: 1px solid black;
      //border-radius: 10%;
      &.todo {
        background-color: lightgrey;
      }
      &.completed {
        background-color: lawngreen;
      }
    }
  }
}
</style>
