import { Commit, Action, ActionTree, ActionContext } from 'vuex'
import * as types from './mutation-types'
import { Message, ModifyMessagePayload, RootState } from './types'

// Aqui va el contexto del Root.
type RootActionContext = ActionContext<RootState, RootState>

const modifyMessage: Action<RootState, any> = (context: RootActionContext, message: Message) => {
    const payload: ModifyMessagePayload = {
        text: message.text
    }
    context.commit(types.MODIFY_MESSAGE, payload)
  }

const actions: ActionTree<RootState, any> = {
  modifyMessage,
}

export default actions
