<template>
  <nav-bar :pageTitle="pageTitle">
    <h1>This is introduction Page</h1>
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
import { IonPage } from "@ionic/vue";

export default defineComponent({
  name: "IntroductionPage",
  components: {
    // IonPage
  },
  data() {
    return {
      pageTitle: "Introduction",
    };
  },
});
</script>
