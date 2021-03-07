<template>
  <div class="container mt-30">
    <div class="grid grid-gap-30">
      <Card class="col-12 col-md-6 col-lg-4 col-xl-3"
            :hotel="hotel"
            v-for="(hotel,idx) in hotels" :key="idx"/>

    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Card from '~/components/common/Card.vue';

  export default Vue.extend({
    components: {Card},
    computed: {
      hotels() {
        return this.$store.getters.getHotels
      }
    }
  })
</script>

<style>

</style>
