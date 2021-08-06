<template>
  <div>
    <!-- <ToggleButtons :trips="trips" @activeTrip="activateTrip"></ToggleButtons> -->
    <div class="trip-toggle d-flex position-relative">
      <button v-for="(trip) in trips" :key="trip.id" :class="{'active' : trip.id == activeTripID}" @click="activateTrip(trip.id)" >{{trip.mainTitle}}</button>
      <div class="scroll"></div>
    </div>
    <div class="trip-boxes">
      <TripBox
        v-for="(trip_, index) in trips"
        :idx="index"
        :trip="trip_"
        :key="trip_.id"
        v-show="trip_.id == activeTripID"
      ></TripBox>
    </div>
  </div>
</template>

<script>
// import ToggleButtons from "@/components/partials/ToggleButtons.vue";
import TripBox from "@/components/partials/TripBox.vue";
import tripsData from "@/data/trips.json";
export default {
  name: "Trips",
  components: {
    // ToggleButtons,
    TripBox,
  },
  data: function () {
    return {
      trips: tripsData,
      activeTripID: 1
    };
  },
  methods: {
    activateTrip(tripID) {
      console.log(tripID);
      this.activeTripID = tripID;
    }
  }
};
</script>
