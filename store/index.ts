import {GetterTree, ActionTree, MutationTree} from 'vuex'

import {SET_OBJ} from "../assets/js/mutations.js";
import {headersJSON} from "../assets/js/constants.js";

export const state = () => ({
  stateSidebar: false,
  stateModal: false,
  searchStr: '',
  hotels: [
    {name: 'Отель 1', img: '/img/hotels/1.jpg', like: true, id: 1},
    {name: 'Отель 2', img: '/img/hotels/2.jpg', like: false, id: 2},
    {name: 'Отель 3', img: '/img/hotels/3.jpg', like: true, id: 3},
    {name: 'Отель 4', img: '/img/hotels/4.jpg', like: false, id: 4},
    {name: 'Отель 5', img: '/img/hotels/5.jpg', like: false, id: 5},
    {name: 'Отель 6', img: '/img/hotels/6.jpg', like: false, id: 6},
    {name: 'Отель 7', img: '/img/hotels/7.jpg', like: true, id: 7},
    {name: 'Отель 8', img: '/img/hotels/8.jpg', like: false, id: 8},
    {name: 'Отель 9', img: '/img/hotels/9.jpg', like: false, id: 9},
  ]
})

export type RootState = ReturnType<typeof state>
export const getters: GetterTree<RootState, RootState> = {
  getHotels(state) {
    return state.hotels.filter((h) => h.name.includes(state.searchStr))
  }
}

export const mutations: MutationTree<RootState> = {
  SET_OBJ
}

export const actions: ActionTree<RootState, RootState> = {
  async bookHotel({}, user) {
    console.log(user)
    try {
      const response = await this.$axios.$post('/create-order', JSON.stringify(user), headersJSON)
    } catch (e) {
      console.log(e)
    }

  }
}
