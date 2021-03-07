<template>
  <div class="topbar">
    <div class="d-flex">
    <div class="menu-btn mr-30"
         @click="toggleVisibilitySidebar">
      <i class="fas fa-bars"></i>
    </div>
    <div class="logo">LOGO</div>
    </div>
    <div class="contacts"><a href="tel:8 (800) 700-45-10">8 (800) 700-45-10</a></div>
  </div>
</template>

<script>
  import toggleVisibilitySidebar from '../../mixsins/toggleStateSidebar.js'
  export default {
    name: "TopBar",
    mixins: [toggleVisibilitySidebar]
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/var";
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .topbar {
    width: 100%;
    padding: 10px 15px;
    background-color: $vine-color;
  }
  .topbar, .contacts a, .menu-btn {
    color: white;
  }
  .logo {
    font-size: 20px;
  }

  .menu-btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }
</style>
