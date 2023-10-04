<template>
  <div class="task" v-if="status">
    <div class="task-info">
      <div class="task-info__main">
        <div class="task-info__main-id">{{ task.id }}</div>
        <div class="task-info__main-todo" :class="task.completed ? 'completed' : 'todo'">{{ task.todo }}</div>
      </div>
      <div>
        <div class="task-info__status" :class="task.completed ? 'completed' : 'todo'">{{ task.completed ? 'completed' : 'to do'}}</div>
        <div class="task-info__assign"><strong>user: </strong>{{ task.userId }}</div>
      </div>

    </div>
    <div class="task__btns">
      <MyBytton action="close" :status="task.completed" @click="$emit('close',task)">Close</MyBytton>
      <MyBytton action="edit" @click="$emit('edit',task)">Edit</MyBytton>
      <MyBytton action="delete" @click="$emit('remove',task)">Delete</MyBytton>
    </div>
  </div>
</template>

<script>
import MyBytton from "./MyBytton.vue";

export default {
  name: "TaskItem",
  components: {MyBytton},
  props: {
    task: {
      type: Object,
      required: true,
    },
    status: Boolean,
  },
}
</script>

<style lang="scss">
.task {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid black;
  .task-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .task-info__main{
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
      &.todo{
        background-color: lightgrey;
      }
      &.completed{
        background-color: lawngreen;
      }
    }
  }
}
</style>