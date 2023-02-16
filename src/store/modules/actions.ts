import { Commit, Action, ActionTree, ActionContext, Module } from 'vuex'
import { RootState } from '../types'
import * as types from './mutation-types'
import { ExampleActionType, ExampleMutationPayload, ModuleExampleInferfaceState } from './types'

// Aqui va el contexto del Modulo.
type ModuleActionContext = ActionContext<ModuleExampleInferfaceState, RootState>

const modifyMessage: Action<ModuleExampleInferfaceState, RootState> = (context: ModuleActionContext, message: ExampleActionType) => {
    const payload: ExampleMutationPayload = {
        text: message.text
    }
    context.commit(types.MODIFY_MESSAGE_EXAMPLE, payload)
  }

const actions: ActionTree<ModuleExampleInferfaceState, any> = {
  modifyMessage,
}

export default actions
