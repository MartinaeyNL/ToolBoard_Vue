<template>
  <div style="padding: 7% 5% 5% 5%">
    <span>
      Dit is een willekeurige tekst die eigenlijk veelste lang is waardoor hij
      niet op het scherm past en naar de volgende lijn zou vertrekken. Hopelijk
      werkt dit, want stiekem heb ik er geen vertrouwen in. Maarja, het zal wel
      ofzo. Werkt dit? IS het zo? We zullen het zien binnen enkele seconden,
      misschien minuten hahahahahahahahahahahahahaahahahahahaahh
    </span>
    <v-layout row wrap>
      <v-flex md4 v-for="item in this.activeComponents" :key="item.name">
        <v-card>{{ item.name }}</v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      activeComponents: store.getters.activeComponents
    };
  }
};
</script>
