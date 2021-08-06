<template>
<div class="trip-section">
      <div class="container-trip m-auto">
        <TitleWithTip title="Pick your trip" tip="Our team put together some trips to you to discover,
        feel free to discover each of them."></TitleWithTip>
        <Trips></Trips>
      </div>
    </div>
</template>

<script>
import TitleWithTip from "@/components/partials/TitleWithTip.vue";
import Trips from "@/components/partials/Trips.vue";

export default {
  name: "TripSection",
  components:{
    TitleWithTip, 
    Trips
  }
};
</script>
