<template>
  <!-- <nav-bar :pageTitle="pagetitle"></nav-bar> -->
  <ion-card>
    <ion-card-header>
      <ion-card-title>Login</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <form @submit.prevent="login">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Email Address</ion-label>
            <ion-input
              v-model="formData.email"
              required
              placeholder="Enter your email address"
            />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input
              v-model="formData.password"
              type="password"
              required
              placeholder="Enter your password"
            />
          </ion-item>
        </ion-list>
        <ion-button type="submit">Login</ion-button>
      </form>
      <p>
        Don't have an account? <a href="/register">Create account here...</a>
      </p>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  alertController,
} from "@ionic/vue";

export default defineComponent({
  name: "LoginPage",
  // data() {
  //   return {
  //     pagetitle: "Login",
  //   };
  // },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      console.log("logged in Success:", this.formData);
    },
    // async login() {
    //   try {
    //     const response = await store.dispatch("loginUser", this.formData);
    //     console.log("response:", response);
    //     if (response.response !== undefined) {
    //       if (response.response.status === 403) {
    //         alert(response.response.data);
    //       }
    //       if (response.response.status === 204) {
    //         alert(response.response.data);
    //       }
    //     }
    //   } catch (err: any) {
    //     console.log(err);
    //   }
    // },
  },

  components: {
    // IonContent,
    // IonHeader,
    // IonPage,
    // IonTitle,
    // IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
});
</script>

<style focused></style>
