<template>
  <div>
    <v-combobox
      style="width: 90%; margin-top: 26px;"
      :items="detailedComponentList"
      label="Add Component"
      clearable="true"
      item-text="name"
      item-value="name"
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title style="color: #999999">
            Nothing found! Do you need a
            <strong>list</strong>?
          </v-list-item-title>
        </v-list-item>
      </template>

      <template v-slot:item="data">
        <v-list-item @click="addComponent(data.item.name)">
          <v-list-item-avatar>
            <img :src="data.item.picture" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span>{{ data.item.name }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox>
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
  methods: {
    addComponent(componentName) {
      alert("You've clicked on something! [" + componentName + "]");
    }
  }
};
</script>
