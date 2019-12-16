<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md4 lg4 xl3>
      <OBSStudioCard />
    </v-flex>
    <v-flex xs6 sm6 md4 lg4 xl3>
      <OBSStudioCard />
    </v-flex>
    <v-flex xs6 sm6 md4 lg4 xl3>
      <OBSStudioCard />
    </v-flex>
  </v-layout>
</template>

<script>
//import websocket from "../logic/websocket.js";
import OBSStudioCard from "../components/ConnectionCards/OBSStudioCard.vue";
export default {
  components: {
    //websocket,
    OBSStudioCard
  }
};
</script>
