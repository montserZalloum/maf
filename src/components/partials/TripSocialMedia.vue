<template>
  <li class="list-unstyled">
    <a :href="href" :title="title"
      ><img
        alt="instagram"
        :src="getImgUrl(src)"
        width="24"
        height="24"
    /></a>
  </li>
</template>

<script>
export default {
  name: "TripSocialMedia",
  props: ["href","title","alt","src"],
  methods: {
    getImgUrl(pic) {
      return require("@/assets/" + pic + ".svg");
    }
  }
};
</script>
