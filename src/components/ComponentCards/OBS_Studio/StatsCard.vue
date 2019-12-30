<template>
  <div v-if="websocketIsNull">Please connect your OBS Studio.</div>
  <div v-else>Wooohoooo it worked!</div>
</template>

<script>
export default {
  methods: {
    websocketIsNull() {
      return this.$store.getters.webSocketOBSIsNull;
    }
  }
};
</script>
