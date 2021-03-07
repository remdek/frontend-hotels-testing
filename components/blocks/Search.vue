<template>
  <div class="search">
    <input type="text"
           placeholder="поиск по этим 9 отелям"
           @input="searchHotels($event.target.value)"
    >
    <button class="btn-vine"><i class="fas fa-search mr-5"></i> Search</button>
  </div>
</template>

<script>
  export default {
    name: "Search",
    methods: {
      searchHotels(str) {
        this.$store.commit('SET_OBJ', {name: 'searchStr', value: str})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/var";
  .search {
    background: $vine-color;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }


  @media (min-width: 650px) {
    input {
      width: 500px;
    }
  }

</style>
