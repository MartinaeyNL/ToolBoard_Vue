<template>
  <v-app>
    <Home />
    <v-app-bar app color="primary" dark>
      <v-layout row wrap align-center>
        <v-flex xs12 sm3 md5 lg7 xl8>
          <v-card-actions>
            <h2 style="letter-spacing: 0.7px; font-weight: 500;">ToolBoard</h2>
          </v-card-actions>
        </v-flex>
        <v-flex xs12 sm9 md7 lg5 xl4>
          <v-layout row wrap align-center>
            <v-flex xs12 sm6 md6 lg6 xl6>
              <div>
                <ComponentSearch />
              </div>
            </v-flex>
            <v-flex xs6 sm3 md3 lg3 xl3>
              <v-btn
                color="blue darken-3"
                class="elevation-0"
                style="overflow: hidden;"
                @click="connectionsOverlay = !connectionsOverlay"
              >
                <v-icon style="margin-right: 2px;">mdi-lan-connect</v-icon>
                <span style="margin-left: 2px;">Connect</span>
              </v-btn>
            </v-flex>
            <v-flex xs6 sm3 md3 lg3 xl3>
              <v-btn color="blue darken-3" style="overflow: hidden;">
                <v-icon style="margin-right: 2px;">mdi-settings</v-icon>
                <span style="margin-left: 2px;">Settings</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-app-bar>
    <v-overlay :value="connectionsOverlay">
      <ConnectionsOverlay />
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <v-btn @click="connectionsOverlay = false">Close</v-btn>
        </v-flex>
      </v-layout>
    </v-overlay>
    <v-content style="margin-bottom: 200px;"></v-content>
  </v-app>
</template>

<style>
.buttonCard {
  padding: 0 !important;
}
</style>

<script>
import Home from "../src/views/Home.vue";
import ConnectionsOverlay from "../src/components/ConnectionsOverlay.vue";
import ComponentSearch from "../src/components/ComponentSearch.vue";
export default {
  name: "App",
  components: { Home, ConnectionsOverlay, ComponentSearch },
  data: () => ({
    connectionsOverlay: false
  })
};
</script>
