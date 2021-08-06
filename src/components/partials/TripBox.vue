<template>
  <div class="trip-box">
    <div class="d-flex position-relative">
      <div class="trip-img-box">
        <img
          class="trip-dots"
          alt="joe-mania"
          src="@/assets/dots.svg"
          width="230"
          height="230"
        />
        <div class="img-box position-relative">
          <div class="slides">
            <transition-group
              name="slide"
              mode="out-in"
              enter-class="slide-in"
              leave-class="slide-out"
              enter-active-class="animated slide-in-active"
              leave-active-class="animated slide-out-active"
            >
              <!-- <div v-for="(img,index) in trip.slider" v-if="index == active" :key="index"> -->
              <div v-for="(img, index) in currentSlide" :key="index">
                <img
                  class="trip-img position-relative lazyload"
                  alt="joe-mania"
                  :src="getImgUrl(img)"
                  width="486"
                  height="607"
                />
              </div>
            </transition-group>
          </div>
          
          <span class="prev" @click="move(-1)">
            <img class="trip-img position-relative lazyload"
                  alt="joe-mania"
                  src="@/assets/arrow-left.svg"
                  width="24"
                  height="24"
                />
          </span>
          <span class="next" @click="move(1)">
            <img class="trip-img position-relative lazyload"
                  alt="joe-mania"
                  src="@/assets/arrow-right.svg"
                  width="24"
                  height="24"
                />
          </span>
        </div>
        <div class="trip-img-details font-24">
          <p class="num dark-blue position-relative m-0">0{{ idx + 1 }}.</p>
          <p class="uppercase title m-0 pre-line" v-html="trip.title"></p>
        </div>
      </div>
      <div class="trip-details">
        <h3 class="trip-title">{{ trip.mainTitle }}</h3>
        <p
          class="pre-line font-17 desc font-weight-normal w-75"
          v-html="trip.description"
        ></p>
        <div class="d-flex">
          <a
            href="javascript:;"
            class="btn_ d-flex align-items-center justify-content-center"
            title="see latest offers"
            >SEE OUR LATEST OFFER</a
          >
        </div>
        <div class="trip-social-box">
          <p class="font-15">SHARE IT:</p>
          <ul class="trip-social d-flex position-relative">
            <TripSocialMedia :href="'https://www.instagram.com/'" :title="'Follow me on instagram'" :src="'instagram'" :alt="'Follow me on instagram'" ></TripSocialMedia>
            <TripSocialMedia :href="'https://www.facebook.com/'" :title="'Follow me on facebook'" :src="'facebook'" :alt="'Follow me on facebook'" ></TripSocialMedia>
            <TripSocialMedia :href="'https://www.twitter.com/'" :title="'Follow me on twitter'" :src="'twitter'" :alt="'Follow me on twitter'" ></TripSocialMedia>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TripSocialMedia from "@/components/partials/TripSocialMedia.vue";
export default {
  name: "TripBox",
  props: ["trip", "idx"],
  data: function () {
    return {
      slides: 2,
      activeSlide: 1,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/" + pic);
    },
    move(amount) {
      let newActive;
      const newIndex = this.activeSlide + amount;
      if (newIndex > this.slides) newActive = 1;
      if (newIndex === 0) newActive = this.slides;
      this.activeSlide = newActive || newIndex;
    },
  },
  computed: {
    currentSlide: function () {
      let current = this.activeSlide;
      return this.trip.slider.filter(function (u, i) {
        if (i + 1 == current) return u;
      });
    },
  },
  components: { TripSocialMedia },
};
</script>
