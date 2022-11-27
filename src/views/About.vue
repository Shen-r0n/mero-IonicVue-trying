<template>
  <nav-bar :pageTitle="pagetitle"></nav-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",

  data() {
    return {
      pagetitle: "About",
    };
  },
});
</script>
