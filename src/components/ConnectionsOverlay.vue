<template>
  <div style="padding: 0% 5% 0% 5%">
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 lg4 xl4>
        <div class="connectionCard">
          <OBSStudioCard />
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 lg4 xl4>
        <div class="connectionCard">
          <TwitchCard />
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 lg4 xl4>
        <div class="connectionCard">
          <OBSStudioCard />
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style>
.connectionCard {
  padding: 4%;
}
</style>

<script>
//import websocket from "../logic/websocket.js";
import OBSStudioCard from "../components/ConnectionCards/OBSStudioCard.vue";
import TwitchCard from "../components/ConnectionCards/TwitchCard.vue";
//import ChatCard from "../components/ConnectionCards/ChatCard.vue";
export default {
  components: {
    OBSStudioCard,
    TwitchCard
    //ChatCard
  }
};
</script>
