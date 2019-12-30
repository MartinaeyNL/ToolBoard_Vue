<template>
  <div class="home">
    <ComponentArea />
    <!--<WebSocketWindow />-->
  </div>
</template>

<script>
// @ is an alias to /src
//import WebSocketWindow from "@/components/WebSocketWindow.vue";
import ComponentArea from "@/components/ComponentArea.vue";

export default {
  name: "home",
  components: {
    ComponentArea
  }
};
</script>
