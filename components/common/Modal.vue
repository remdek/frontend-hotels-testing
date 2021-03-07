<template>
  <div class="overlay">
    <div class="modal">
      <div class="header mb-20">Заказать номер</div>
      <div class="content">
        <label for="fname">Имя</label>
        <input type="text" id="fname" class="mb-20"
               v-model="user.fname">
        <label for="lname">Фамилия</label>
        <input type="text" id="lname" class="mb-20"
               v-model="user.lname">
        <label for="phone">Телефон</label>
        <the-mask type="tel" id="phone"
                  placeholder="+7(___) ___-__-__" required :mask="['+7(###) ###-##-##']" v-model="user.phone"
                  autocomplete="disabled"/>
      </div>
      <div class="actions d-flex jstf-center">
        <button class="btn-vine mr-20"
                @click="bookHotel"
        >Забронировать
        </button>
        <button class="btn-vine"
                @click="closeModal">Закрыть
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import {TheMask} from 'vue-the-mask'

  export default {
    name: "Modal",
    components: {TheMask},
    created() {
      this.user.hotelId = this.$store.state.stateModal
    },
    data() {
      return {
        user: {
          fname: '',
          lname: '',
          phone: '',
          hotelId: null
        }
      }
    },
    methods: {
      closeModal() {
        this.$store.commit('SET_OBJ', {name: 'stateModal', value: false})
      },
      bookHotel() {
        this.$store.dispatch('bookHotel', this.user)
        this.closeModal()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/var";

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }

  .modal {
    width: 300px;
    height: 375px;
    background: white;
    z-index: 101;
    margin-top: 150px;

    .content, .actions {
      padding: 20px;
    }
  }

  input {
    border: 1px solid $vine-color;
  }

  .header {
    background: $vine-color;
    color: white;
    width: 100%;
    padding: 10px 15px;
    font-weight: bolder;
  }


</style>
