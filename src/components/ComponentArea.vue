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
      <v-flex md4 v-for="item in this.activeComponents" :key="item.name" style="padding: 1.2%;">
        <v-card style="padding: 4%; min-height: 300px;">
          <component v-bind:is="item.card"></component>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComponents: this.$store.getters.activeComponents
    };
  }
};
</script>
