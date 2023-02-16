import { ModuleExampleInferfaceState } from "./modules/types"

// Action models
export interface RootState {
    alertery: ModuleExampleInferfaceState,
    message : string,
}

export interface Message {
    text : string
}

// Mutation payloads
export interface ModifyMessagePayload {
    text : string 
}