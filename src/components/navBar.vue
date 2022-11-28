<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <a href="/home" class="menu-item-text"> Home</a>
        </ion-item>
        <ion-item v-if="!loginStatus">
          <a href="/login" class="menu-item-text"> Login</a>
        </ion-item>
        <ion-item>
          <a href="/about" class="menu-item-text"> About</a>
        </ion-item>
        <ion-item v-if="loginStatus" @click="logOut">Log Out </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>

        <ion-icon
          id="click-trigger"
          class="three-dot"
          slot="end"
          :icon="ellipsisVerticalSharp"
        >
          <ion-popover trigger="click-trigger" trigger-action="click">
            <ion-content class="ion-padding">Popover</ion-content>
            <ion-content class="ion-padding">Settings</ion-content>
            <ion-content class="ion-padding">Rate Us</ion-content>
            <ion-content class="ion-padding">Log Out</ion-content>
          </ion-popover>
        </ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

import {
  ellipsisVerticalOutline,
  ellipsisVerticalSharp,
  logOut,
} from "ionicons/icons";

export default defineComponent({
  props: ["pageTitle"],
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonPopover,
    IonIcon,
  },
  setup() {
    return { ellipsisVerticalSharp };
  },

  data() {
    return {
      isExpanded: false,
      loginStatus: sessionStorage.getItem("login_status"),
    };
  },

  methods: {
    logOut() {
      sessionStorage.removeItem("login_status");
      this.loginStatus = null;
    },
  },
});
</script>

<style focused>
.three-dot {
  margin-right: 5vw;
}

.menu-item-text {
  text-decoration: none;
  color: black;
}
</style>
