<template>
  <div class="slider"></div>
</template>

<script>
  export default {
    name: "MayBeSlider"
  }
</script>

<style scoped>
  .slider {
    width: 100%;
    height: 500px;
    background: url("/img/bg/background-1.jpg") no-repeat right bottom;
    background-size: cover;
  }

  @media (max-width: 764px) {
    .slider {
      height: 250px;
    }

  }

  @media (min-width: 1600px) {
    .slider {
      background: url("/img/bg/background-1.jpg") no-repeat center bottom;
      background-size: cover;
    }
  }

</style>
