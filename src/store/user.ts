import { RootState } from './index'
import { ActionTree, MutationTree } from 'vuex'

interface UserState {
  userName: string
}

const state:UserState = {
  userName: '张三'
}

const actions: ActionTree<UserState, RootState> = {
  getUserName({ commit }) {
    commit('SET_USER_NAME', '李四')
  }
}

const mutations: MutationTree<UserState> = {
  SET_USER_NAME(state, name: string) {
    state.userName = name
  }
}

export default {
  nameSpace: true,
  state,
  actions,
  mutations
}
