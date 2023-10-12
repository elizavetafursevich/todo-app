<template>
  <div class="form" v-if="props.show">
    <h2>Creating new task</h2>
    <form>
      <div class="form-group">
        <h3>Task</h3>
        <textarea id="task-todo" rows="5" v-model="props.task.todo"></textarea>
      </div>
      <div class="btn-group">
        <BaseButton class="submit" @click="this.$emit('submit')"
          >Submit
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  show: Boolean,
});
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  padding: 15px;
  margin: 10px auto;
  border: 2px solid black;
  h2 {
    text-align: center;
    margin-top: 0;
  }
  .form-group {
    margin: 10px 0;
    h3 {
      margin-bottom: 10px;
    }
    textarea {
      width: calc(100% - 20px);
    }
    textarea,
    input[type="number"] {
      font-size: 18px;
      padding: 10px;
      border: 1px solid lightgrey;
      border-radius: 6px;
    }
  }
  .btn-group {
    display: flex;
    .submit {
      margin: 0 auto;
    }
  }
}
</style>
