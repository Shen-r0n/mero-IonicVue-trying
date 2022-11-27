<template>
  <nav-bar>
    <div class="div-logo">
      <img
        class="vue-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt=""
      />
    </div>

    <div class="text-center">
      <strong>Vue.js</strong>
    </div>

    <div class="text-center">The Progressive JavaScript Framework</div>

    <ion-button class="round-button-first" shape="round">
      <ion-icon slot="start" :icon="star"></ion-icon>
      WHY VUE.JS?
    </ion-button>

    <div class="logo-seperate">
      <ion-button shape="round"
        ><a href="/introduction" class="anchor-tag-text"
          >GET STARTED</a
        ></ion-button
      >
      <ion-button class="github-logo" shape="round">
        <ion-icon slot="start" :icon="logoGithub"></ion-icon>
        GITHUB</ion-button
      >
    </div>
  </nav-bar>

  <!-- <ion-page>
    
    <ion-content>
      <div class="div-logo">
      <img class="vue-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="" />
    </div>
    
    <div class="text-center">
      <strong>Vue.js</strong>
    </div>

    <div class="text-center">
      The Progressive JavaScript Framework
    </div>
   
    <ion-button class="round-button-first" shape="round">
    <ion-icon slot="start" :icon="star"></ion-icon>
    WHY VUE.JS?
    </ion-button>
  
  <div class="logo-seperate">  
      <ion-button shape="round" routerLink="/introduction">GET STARTED</ion-button>
      <ion-button class="github-logo" shape="round">
      <ion-icon slot = "start" :icon="logoGithub"></ion-icon>
      GITHUB</ion-button>
        
    
  </div>
    
    
    

  </ion-content>
    
  </ion-page> -->
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
// import NavBar from '@/components/navBar.vue';
import { star, logoGithub, gitBranchOutline } from "ionicons/icons";
import router from "@/router";

export default defineComponent({
  name: "HomePage",
  components: {
    IonButton,
    // IonPage,
    IonIcon,
    // NavBar,
  },
  setup() {
    return { star, logoGithub, gitBranchOutline };
  },
  //   methods:{
  //  goToIntroductionPage(){
  //         console.log('button clicked')
  //      this.$router.push('/introduction');

  //     }
  //   }
});
</script>

<style scoped>
.anchor-tag-text {
  text-decoration: none;
  color: white;
}
.get-started {
  width: 25vw;
}
.round-button-first {
  display: block;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}

.logo-seperate {
  display: block;
  width: 50vw;
  /* margin-left: 0px ;
  margin-right: 0px ; */
  align-items: center;
}

.get-started-button {
  /* flex:6;
  align-items: flex-end;
  justify-content: center; */
}

.github-logo {
  /* flex:6; */
  align-items: center;
}

/* .logo-seperate { */
/* display: flex; */
/* width: 25vw; */
/* flex-direction: row; */
/* flex-wrap: wrap; */
/* padding-left: 10vw;
  padding-right: 10vw; */

/* } */

/* .round-button{ */
/* flex: 6; */
/* display: block; */
/* width: 20vw; */
/* margin-left: auto ;
  margin-right: auto ; */
/* align-items: flex-end; */
/* } */
.text-center {
  font-size: 5vw;
  text-align: center;
  margin-top: 10vw;
  margin-bottom: 10vw;
}
.div-logo {
  padding: 0px;
}
.vue-logo {
  display: block;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  /* width: 50%; */
  width: 200px;
  height: auto;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
