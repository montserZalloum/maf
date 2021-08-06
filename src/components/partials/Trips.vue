<template>
  <div>
    <div class="trip-toggle d-flex position-relative">
      <div class="active-toogle"></div>
      <button v-for="(trip) in trips" :key="trip.id" class="backface-visibility" :class="{'active' : trip.id == activeTripID}" @click="activeTripID = trip.id" >{{trip.mainTitle}}</button>
      <div class="scroll backface-visibility"></div>
    </div>
    <div class="trip-boxes">
      <div v-for="(trip_, index) in trips"
        :key="trip_.id"
        >
        <TripBox
        :trip="trip_"
        :idx="index"
        v-if="trip_.id == activeTripID"
      ></TripBox>
      </div>
      
    </div>
  </div>
</template>
<script>
import TripBox from "@/components/partials/TripBox.vue";
import tripsData from "@/data/trips.json";
export default {
  name: "Trips",
  components: {
    TripBox,
  },
  data:  () => {
    return {
      trips: tripsData,
      activeTripID: 1
    };
  }
};
</script>

<style scoped>
  
</style>