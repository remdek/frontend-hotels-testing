<template>
  <article class="card">
    <div class="card__img">
      <img :src="hotel.img" alt="">
    </div>
    <div class="card__header"><h2>{{hotel.name}}</h2></div>
    <div class="card__actions d-flex">
      <button class="btn-outline" @click="toggleLike(hotel.id)">
        <i :class="hotel.like ? 'fas' : 'far'" class="fa-heart"></i>
      </button>
      <button class="btn-outline" @click="showModal(hotel.id)">Забронировать</button>
    </div>
  </article>
</template>

<script>
  export default {
    name: "Card",
    props: ['hotel'],
    methods: {
      toggleLike(id) {
        const hotels = this.$store.state.hotels
        const updatedHotels = hotels.map((h) => {
          return {
            name: h.name,
            img: h.img,
            like: h.id === id ? !h.like : h.like,
            id: h.id
          }
        })
        this.$store.commit('SET_OBJ', {name: 'hotels', value: updatedHotels})
      },
      showModal(hotelId) {
        this.$store.commit('SET_OBJ', {name: 'stateModal', value: hotelId})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/var";

  .card {
    width: 100%;
    border: 1px solid $vine-color;

    &__img {
      width: 100%;
      min-height: 300px;
      max-height: 300px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    &__header, &__actions {
      padding: 10px 20px;
    }

    &__header {
      width: 100%;
      text-align: center;

      h2 {
        font-weight: 300;
      }
    }

    &__actions {
      justify-content: space-around;
    }
  }

</style>
