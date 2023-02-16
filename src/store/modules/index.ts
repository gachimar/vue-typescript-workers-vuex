// import { createStore } from 'vuex'
import { Module, Store } from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { ModuleExampleInferfaceState } from './types'
import { InjectionKey } from 'vue'
import { RootState } from '../types'

export const key: InjectionKey<Store<ModuleExampleInferfaceState>> = Symbol()

const store: Module<ModuleExampleInferfaceState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default store