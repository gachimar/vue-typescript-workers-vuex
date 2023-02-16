import { Commit, Action, ActionTree } from 'vuex'
import { RootState } from '../types'
import * as types from './mutation-types'
import { ExampleActionType, ExampleMutationPayload, ModuleExampleInferface } from './types'

const modifyMessage: Action<ModuleExampleInferface, RootState> = (context: { commit: Commit }, message: ExampleActionType) => {
    const payload: ExampleMutationPayload = {
        text: message.text
    }
    context.commit(types.MODIFY_MESSAGE_EXAMPLE, payload)
  }

const actions: ActionTree<ModuleExampleInferface, any> = {
  modifyMessage,
}

export default actions
