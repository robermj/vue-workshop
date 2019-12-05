<template>
  <div>
    <button class="btn btn-info" @click="show = !show">Show / Hide</button>
    <div class="alert alert-info" v-if="show">
      Open the console to see the lifecycle methods of this component
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  beforeCreate() {
    console.log('Before Create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before Mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.log('Before Updated');
  },
  updated() {
    console.log('Updated');
  },
  beforeDestroy() {
    console.log('Before Destroyed');
  },
  destroyed() {
    console.log('Destroyed');
  },
};
</script>
