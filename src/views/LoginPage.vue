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
              v-model="email"
              required
              placeholder="Enter your email address"
            />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input
              v-model="password"
              type="password"
              required
              placeholder="Enter your password"
            />
          </ion-item>
        </ion-list>
        <p v-if="errMsg">{{ errMsg }}</p>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  // IonContent,
  // IonHeader,
  // IonPage,
  // IonTitle,
  // IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  // alertController,
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
      errMsg: "",
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      console.log(this.email, this.password);
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Successfully Logged In!");
          sessionStorage.setItem("login_status", "true");
          this.$router.push("home");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/email-already-in-use":
              this.errMsg = "Email already in use";
              break;
            case "auth/invalid-email":
              this.errMsg = "Invalid email";
              break;
            case "auth/wrong-password":
              this.errMsg = "Wrong Password";
              break;
            case "auth/operation-not-allowed":
              this.errMsg = "Operation not allowed";
              break;
            case "auth/weak-pasword":
              this.errMsg = "Weak Password";
              break;
            default:
              this.errMsg = "Something went wrong";
          }
        });
    },
  },

  // login() {
  //   console.log("logged in Success:", this.formData);
  // },
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
