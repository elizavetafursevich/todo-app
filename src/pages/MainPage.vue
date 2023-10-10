<template>
  <div class="tasks">
    <TaskItem />
  </div>
</template>

<script>

import TaskItem from "../components/TaskItem.vue";

export default {
  name: "TasksPage",
  components: { TaskItem },
}
</script>