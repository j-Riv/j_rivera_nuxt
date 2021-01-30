import { ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  locales: ['en', 'es'],
  locale: 'en',
  drawer: false,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  SET_LANG(state: { locales: string | string[]; locale: string }, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  SET_DRAWER(state: { drawer: boolean }, value: boolean) {
    state.drawer = value;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  UPDATE_DRAWER({ commit }, value) {
    commit('SET_DRAWER', value);
  },
};
