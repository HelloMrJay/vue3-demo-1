import { createStore, ActionTree, MutationTree } from 'vuex'
import user from './user'

export interface RootState {
  theme: string
}

const state: RootState = {
  theme: ''
}

const actions: ActionTree<RootState, RootState> = {
  changeThemeHandler({ commit }, theme: string) {
    commit('CHANGE_THEME', theme)
  }
}

const mutations: MutationTree<RootState> = {
  CHANGE_THEME(state, value: string) {
    state.theme = value
  }
}

export default createStore({
  state,
  actions,
  mutations,
  modules: {
    user
  }
})
