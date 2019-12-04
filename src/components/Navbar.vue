<template>
  <header>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">VueJS Workshop</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <router-link class="nav-item" to="/" tag="li" active-class="active" exact>
              <a class="nav-link">Home</a>
            </router-link>
            <router-link class="nav-item" to="/about" tag="li" active-class="active">
              <a class="nav-link">About</a>
            </router-link>
            <router-link class="nav-item" to="/vue-info" tag="li" active-class="active">
              <a class="nav-link">Vue Info</a>
            </router-link>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item infoItem">Counter: {{ counter }}</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
}
.infoItem {
  color: white;
}
</style>
