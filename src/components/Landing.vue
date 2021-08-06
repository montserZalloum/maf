<template>
<div class="landing-section position-relative">
      <div class="container">
        <!-- header -->
        <div class="head d-flex justify-content-between align-items-center">
          <div class="logo font-36">NT</div>
          <div class="right-side">
            <a href="javascript:" class=""><img src="../assets/search-icon.svg" width="24" height="24"
                alt="MAF"></a>
            <button type="button" class="btn_ font-16 menu-btn">menu</button>
          </div>
        </div>

        <!-- body -->
        <div class="body text-center">
          <h1>Night Trips</h1>
          <p class="uppercase font-18 ls-1 small-title">we got trips for the trippster in you</p>

          <p class="font-17 w-60 m-auto font-weight-normal desc">Neque, eros commodo, nascetur ullamcorper vitae.
            Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel
            risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.</p>
        </div>

        <!-- footer -->
        <div class="footer d-flex justify-content-between position-relative">
          <div class="uppercase ls-5 font-15 scroll-shape align-self-baseline"><span>scroll</span></div>
          <div></div>
          <ul class="social-box">
            <TripSocialMedia :href="'https://www.twitter.com/'" :title="'Follow me on twitter'" :src="'twitter'" :alt="'Follow me on twitter'" ></TripSocialMedia>
            <TripSocialMedia :href="'https://www.instagram.com/'" :title="'Follow me on instagram'" :src="'instagram'" :alt="'Follow me on instagram'" ></TripSocialMedia>
            <TripSocialMedia :href="'https://www.facebook.com/'" :title="'Follow me on facebook'" :src="'facebook'" :alt="'Follow me on facebook'" ></TripSocialMedia>
            
          </ul>
        </div>
      </div>
    </div>
    <!-- end main section -->
</template>

<script>
import TripSocialMedia from "@/components/partials/TripSocialMedia.vue";
export default {
  name: "Landing",
  components: { TripSocialMedia }
};
</script>
