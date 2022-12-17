<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title> Register </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <form>
        <ion-list>
          <ion-item>
            <ion-label position="floating">Email Address</ion-label>
            <ion-input
              type="email"
              v-model="email"
              required
              placeholder="Enter your email address"
            />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input
              type="password"
              required
              placeholder="Enter password"
              v-model="password"
            />
          </ion-item>
        </ion-list>
        <ion-button @click="register">Register</ion-button>
        <!-- <ion-button @click="signInwithGoogle">Sign In With Google</ion-button>  -->
      </form>
      <p>Already have an account? <a href="/login">Login Here</a></p>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import instance from "@/utils/axios";
// import { useRouter } from "vue-router";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const email = ref("");
// const password = ref("");
// const router = useRouter();

// const signInWithGoogle = () => {};

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "RegisterPage",

  methods: {
    async register() {
      try {
        const response = await instance.post("auth/register", {
          email: this.email,
          password: this.password,
        });
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    },
    // register() {
    //   console.log(this.email, this.password);
    //   createUserWithEmailAndPassword(getAuth(), this.email, this.password)
    //     .then((data) => {
    //       console.log("Successfully Registered!");
    //       sessionStorage.setItem("login_status", "true");
    //       this.$router.push("about");
    //     })
    //     .catch((error) => {
    //       console.log(error.code);
    //       alert(error.message);
    //     });
    // },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
});
</script>
