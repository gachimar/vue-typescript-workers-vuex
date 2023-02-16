import { Getter, GetterTree } from "vuex"
import { RootState } from "../types"
import { ModuleExampleInferfaceState } from "./types"

const getMessageExample : Getter<ModuleExampleInferfaceState, RootState> = (state, getters, rootState) =>{
    return state.message
}


const example : Getter<ModuleExampleInferfaceState, RootState> = (state, getters, rootState) => (id : number) =>{
    return id
}

const getters : GetterTree<ModuleExampleInferfaceState, RootState> = {
    getMessage: getMessageExample,
    example
}

export default getters
