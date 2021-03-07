<template>
  <nav class="sidebar" :class="{'show' : stateSidebar}">
    <i class="fa fa-times" @click="toggleVisibilitySidebar"></i>
    <ul>
      <li><n-link to="#">Каталог отелей</n-link></li>
      <li><n-link to="#">Отзывы</n-link></li>
      <li><n-link to="#">Контакты</n-link></li>
    </ul>
  </nav>
</template>

<script>
  import toggleVisibilitySidebar from '../../mixsins/toggleStateSidebar.js'

  export default {
    name: "Sidebar",
    mixins: [toggleVisibilitySidebar],
    computed: {
      stateSidebar() {
        return this.$store.state.stateSidebar
      }
    },

  }
</script>

<style scoped lang="scss">
  @import "assets/scss/var";
  .sidebar {
    padding: 30px 20px;
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 10;
    transition: all 0.3s;
    &.show {
      left: 0
    }
  }
  .fa {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: $vine-color;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
      a {
        color: black;
        font-weight: bolder;
      }
    }
  }


</style>
