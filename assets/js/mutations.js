export function SET_OBJ(state, payload) {
  if (payload.key) {
    state[payload.name][payload.key] = payload.value
  } else {
    state[payload.name] = payload.value
  }
}
