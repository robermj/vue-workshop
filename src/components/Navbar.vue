<template>
  <header>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">VueJS Workshop</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
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
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  padding: 0;
}
</style>
