<template>
  <nav-bar :pageTitle="pageTitle">
    <h1>This is introduction Page</h1>
    <ion-icon
      id="click-trigger"
      class="three-dot"
      slot="end"
      :icon="ellipsisVerticalOutline"
    >
      <ion-popover trigger="click-trigger" trigger-action="click">
        <ion-content class="ion-padding">Popover</ion-content>
        <ion-content class="ion-padding">Settings</ion-content>
        <ion-content class="ion-padding">Rate Us</ion-content>
        <ion-content class="ion-padding">Log Out</ion-content>
      </ion-popover>
    </ion-icon>
  </nav-bar>

  <!-- <ion-page>
        <ion-header>
            <ion-content>
            <nav-bar></nav-bar>
            </ion-content>
        </ion-header>
    </ion-page> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonIcon, IonPopover } from "@ionic/vue";
import { ellipsisVerticalOutline } from "ionicons/icons";

export default defineComponent({
  name: "IntroductionPage",
  components: {
    IonContent,
    IonIcon,
    IonPopover,
  },
  data() {
    return {
      pageTitle: "Introduction",
    };
  },
  setup() {
    return { ellipsisVerticalOutline };
  },
});
</script>
