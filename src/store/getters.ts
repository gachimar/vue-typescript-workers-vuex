import { Getter, GetterTree } from 'vuex'
import { RootState } from './types'
 
const getMessageExample : Getter<RootState, any> = (state : RootState, getters, rootState) =>{
    return state.message
}
 
const getters : GetterTree<RootState, any> = {
    getMessage: getMessageExample
}
 
 export default getters
