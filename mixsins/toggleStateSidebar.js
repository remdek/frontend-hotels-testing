export default {
  methods: {
    toggleVisibilitySidebar() {
      this.$store.commit('SET_OBJ', {name: 'stateSidebar', value: !this.stateSidebar})
    }
  }
}




