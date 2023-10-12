<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script setup></script>

<style lang="scss">
* {
  font-family: Lato, sans-serif;
}
</style>
