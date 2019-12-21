<template>
  <div>
    <v-autocomplete
      style="width: 90%; margin-top: 24px;"
      v-bind:items="availableItems"
      :loading="isLoading"
      label="Add Components"
    ></v-autocomplete>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data: () => ({
    isLoading: false,
    availableItems: store.getters.availableComponents
  }),
  methods: {
    search() {
      // Check if items are already loaded
      if (this.availableItems.length > 0) {
        return;
      } else {
        this.isLoading = true;
        this.availableItems = store.getters.availableComponents;
        this.isLoading = false;
      }
    }
  }
};
</script>
