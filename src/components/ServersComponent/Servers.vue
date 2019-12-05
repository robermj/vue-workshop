<template>
  <div>
    <h3>Servers List</h3>
    <app-server-status
      v-for="(server, i) in servers"
      :key="i"
      :server="server"
      :cbFunc="logAction"
      @childrenEvent="logAction2">
    </app-server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';

export default {
  data() {
    return {
      servers: [
        { name: 'Server 1', status: 'Normal', location: 'England' },
        { name: 'Server 2', status: 'Critical', location: 'Germany' },
        { name: 'Server 3', status: 'Off', location: 'France' },
      ],
    };
  },
  methods: {
    logAction(serverName) {
      console.log(`Function called by ${serverName}...`);
    },
    logAction2(value) {
      console.log(value);
    },
  },
  components: {
    appServerStatus: ServerStatus,
  },
};
</script>
