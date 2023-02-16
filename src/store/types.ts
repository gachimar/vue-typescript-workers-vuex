import { ModuleExampleInferface } from "./modules/types"

// Action models
export interface RootState {
    alertery: ModuleExampleInferface,
    message : string,
}

export interface Message {
    text : string
}

// Mutation payloads
export interface ModifyMessagePayload {
    text : string 
}