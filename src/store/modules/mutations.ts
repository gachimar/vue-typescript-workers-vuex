import { ExampleMutationPayload, ModuleExampleInferfaceState } from "./types"
import * as types from './mutation-types'
import { MutationTree } from "vuex"
const mutations: MutationTree<ModuleExampleInferfaceState> = {
  
    [types.MODIFY_MESSAGE_EXAMPLE](state: ModuleExampleInferfaceState, payload: ExampleMutationPayload) {
      
      state.message = payload.text
    },
  }

  export default mutations
