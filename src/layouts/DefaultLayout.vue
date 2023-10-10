<template>
  <TheHeader></TheHeader>
  <slot />
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  name: "DefaultLayout",
  components: { TheHeader },
};
</script>
