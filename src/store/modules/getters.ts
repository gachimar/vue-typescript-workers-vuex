import { Getter, GetterTree } from "vuex"
import { RootState } from "../types"
import { ModuleExampleInferface } from "./types"

const getMessageExample : Getter<ModuleExampleInferface, RootState> = (state, getters, rootState) =>{
    return state.message
}


const example : Getter<ModuleExampleInferface, RootState> = (state, getters, rootState) => (id : number) =>{
    return id
}

const getters : GetterTree<ModuleExampleInferface, RootState> = {
    getMessage: getMessageExample,
    example
}

export default getters
