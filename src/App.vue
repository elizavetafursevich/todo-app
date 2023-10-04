<template>
  <MyHeader></MyHeader>
  <router-view />
</template>

<script>
import MyHeader from "./components/MyHeader.vue";

export default {
  components: { MyHeader }
}
</script>

<style lang="scss" scoped>

</style>
