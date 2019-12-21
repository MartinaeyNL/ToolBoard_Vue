<template>
  <div>
    <v-autocomplete
      style="width: 90%; margin-top: 24px;"
      v-model="componentList"
      :items="detailedComponentList"
      label="Add Component"
      clearable="true"
      chips="true"
      item-text="name"
      item-value="name"
    >
      <!--  When nothing is found a hint will be given:-->
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title style="color: #999999">
            Nothing found! Do you need a
            <strong>list</strong>?
          </v-list-item-title>
        </v-list-item>
      </template>

      <!-- When something is found... -->
      <template v-slot:item="data">
        <template>
          <v-list-item-avatar>
            <img :src="data.item.picture" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span>{{ data.item.name }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </template>-
    </v-autocomplete>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      componentList: store.getters.availableComponents,
      detailedComponentList: store.getters.detailedComponentList
    };
  },
  watch: {
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
