<template>
  <section class="langing-page text-white">
    <Landing ></Landing>
    <TripSection></TripSection>
  </section>
</template>
<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import TripSection from "@/components/TripSection.vue";

export default {
  name: "Home",
  components: {
    Landing,
    TripSection
  },
};
</script>

