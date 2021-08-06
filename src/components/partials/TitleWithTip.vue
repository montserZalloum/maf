<template>
  <div class="head d-flex align-items-center">
    <h2 class="m-0">{{title}}</h2>
    <p class="m-0 tip-text pl-39 d-flex">
      <img class="close-icon pointer" alt="close" src="@/assets/x-icon.svg" width="24" height="24">
      <span class="pl-39 pre-line">{{tip}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "TitleWithTip",
  props:['title','tip']
};
</script>
