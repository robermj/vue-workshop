<template>
  <div class="card">
    <div class="card-header">{{server.name}}</div>
    <div class="card-body">
      <p class="card-title">Status: {{server.status}} | Location: {{server.location}}</p>
      <button class="btn btn-primary" @click="cbFunc(server.name)">
        Execute function by callback
      </button>
      <button class="btn btn-primary" @click="emitEvent">
        Emmiting a event for the parent component
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['server', 'cbFunc'],
  methods: {
    emitEvent() {
      this.$emit('childrenEvent', `Called by ${this.$props.server.name}`);
    },
  },
};
</script>
