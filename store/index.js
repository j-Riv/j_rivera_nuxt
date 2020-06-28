export const state = () => ({
  locales: ['en', 'es'],
  locale: 'en',
  drawer: false
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_DRAWER(state, value) {
    state.drawer = value
  }
}

export const actions = {
  UPDATE_DRAWER({ commit }, value) {
    commit('SET_DRAWER', value)
  }
}