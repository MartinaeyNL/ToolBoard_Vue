<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md4 lg4 xl3>
      <OBSStudioCard />
    </v-flex>
    <v-flex xs6 sm6 md4 lg4 xl3>
      <TwitchCard />
    </v-flex>
    <v-flex xs6 sm6 md4 lg4 xl3>
      <ChatCard />
    </v-flex>
  </v-layout>
</template>

<script>
//import websocket from "../logic/websocket.js";
import OBSStudioCard from "../components/ConnectionCards/OBSStudioCard.vue";
import TwitchCard from "../components/ConnectionCards/TwitchCard.vue";
import ChatCard from "../components/ConnectionCards/ChatCard.vue";
export default {
  components: {
    //websocket,
    OBSStudioCard,
    TwitchCard,
    ChatCard
  }
};
</script>
