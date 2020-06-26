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
  SET_DRAWER(state) {
    state.drawer = !state.drawer
  }
}
