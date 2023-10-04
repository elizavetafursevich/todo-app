<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean
    },
    errors: Array
  },
  methods: {
    hideModal() {
      if(!this.errors.length){
        this.$emit('update:show', false);
      }
    }
  },
}
</script>

<style lang="scss">
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  .modal__content {
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    min-height: 50px;
    min-width: 300px;
  }
}
</style>