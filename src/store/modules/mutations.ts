import { ExampleMutationPayload, ModuleExampleInferface } from "./types"
import * as types from './mutation-types'
import { MutationTree } from "vuex"
const mutations: MutationTree<ModuleExampleInferface> = {
  
    [types.MODIFY_MESSAGE_EXAMPLE](state: ModuleExampleInferface, payload: ExampleMutationPayload) {
      
      state.message = payload.text
    },
  }

  export default mutations
