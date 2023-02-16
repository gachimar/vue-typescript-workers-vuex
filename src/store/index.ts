// import { createStore } from 'vuex'
import Vuex, { Store, StoreOptions } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { RootState } from './types'
import { InjectionKey } from 'vue'
import alerteryModule from "./modules"

export const key: InjectionKey<Store<RootState>> = Symbol()

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
  getters,
  modules: {
    alertery: alerteryModule
  }
}

export default new Vuex.Store<RootState>(store)
