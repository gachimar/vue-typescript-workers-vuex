import { ModifyMessagePayload, RootState } from "./types"
import * as types from './mutation-types'
import { MutationTree } from "vuex"

const mutations: MutationTree<RootState> = {

  [types.MODIFY_MESSAGE](state: RootState, payload: ModifyMessagePayload) {
    state.message = payload.text
  },

}

  export default mutations
