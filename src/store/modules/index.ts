// import { createStore } from 'vuex'
import { Module, Store } from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { ModuleExampleInferface } from './types'
import { InjectionKey } from 'vue'
import { RootState } from '../types'

export const key: InjectionKey<Store<ModuleExampleInferface>> = Symbol()

const store: Module<ModuleExampleInferface, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default store