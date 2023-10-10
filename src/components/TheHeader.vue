<template>
  <header>
    <nav class="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss">
.nav{
  text-align: center;
  .nav-link {
    padding: 20px;
    font-size: 20px;
    color: black;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>