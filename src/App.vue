<template>
  <v-app>
    <Home />
    <!--<v-app-bar app color="primary" dark></v-app-bar>-->
    <v-content></v-content>
  </v-app>
</template>

<script>
import Home from "../src/views/Home.vue";
export default {
  name: "App",
  components: { Home },
  data: () => ({
    //
  })
};
</script>
