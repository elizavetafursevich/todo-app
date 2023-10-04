<template>
  <div class="form">
    <h2>Creating new task</h2>
    <form @submit.prevent>
      <div class="form-group">
        <h3>Task</h3>
        <textarea id="task-todo" rows="5" v-model="task.todo"></textarea>
      </div>
      <div class="form-group">
        <h3>Assign</h3>
        <input id="task-user" type="number" min="1" max="99" v-model="task.userId">
      </div>
      <div v-if="errors.length">
        <div class="errors" v-for="error in errors">{{ error }}</div>
      </div>
      <div class="btn-group">
        <MyBytton class="submit" @click="this.$emit('submit',task);">Submit</MyBytton>
      </div>
    </form>
  </div>
</template>

<script>
import MyBytton from "./MyBytton.vue";
export default {
  name: "MyForm",
  components: {MyBytton},
  props: {
    task: {
      type: Object,
      required: true,
    },
    errors: Array,
  },
}
</script>

<style lang="scss">
.form {
  width: 500px;
  padding: 15px;
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
    textarea, input[type="number"] {
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
  .errors {
    color: orangered;
  }
}

</style>