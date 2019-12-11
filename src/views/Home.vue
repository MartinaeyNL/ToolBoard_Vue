<template>
  <div class="home">
    <WebSocketWindow />
  </div>
</template>

<script>
// @ is an alias to /src
import WebSocketWindow from "@/components/WebSocketWindow.vue";

export default {
  name: "home",
  components: {
    WebSocketWindow
  }
};
</script>
