<template>
  <button class="btn" :class="action" :disabled="status">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    action: String,
    status: Boolean
  }
}
</script>

<style lang="scss">
.btn {
  padding: 10px 15px;
  margin-right: 5px;
  background: none;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10%;
  font-weight: 700;
  &.create,  &.submit {
    background-color: lightgrey;
  }
  &.edit {
    background-color: yellow;
  }
  &.close {
    background-color: lawngreen;
    &:disabled {
      color: darkgrey;
      background-color: lightgrey;
      border: 2px solid darkgrey;
      cursor: default;
    }
  }
  &.delete {
    background-color: orangered;
  }
}
</style>