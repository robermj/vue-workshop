<template>
  <div>
    <h1>Requests with Vue Resource Library</h1>
    <div class="alert alert-info">Check the console to see the info fetched from API</div>
  </div>
</template>

<script>
export default {
  methods: {
    fetchData() {
      this.$http
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
        .then(
          (data) => {
            console.log(data);
          },
          error => console.log(error),
        );
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
