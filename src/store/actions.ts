import { Commit, Action, ActionTree } from 'vuex'
import * as types from './mutation-types'
import { Message, ModifyMessagePayload, RootState } from './types'

const modifyMessage: Action<RootState, any> = (context: { commit: Commit }, message: Message) => {
    const payload: ModifyMessagePayload = {
        text: message.text
    }
    context.commit(types.MODIFY_MESSAGE, payload)
  }

const actions: ActionTree<RootState, any> = {
  modifyMessage,
}

export default actions
