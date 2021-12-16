import { Action } from "./action";
export interface TokenState {
    tokens: string,
    names: string,
    tipos: string,
    ids: number,
}

const initialState = {
    tokens: "",
    names: "",
    tipos: "",
    ids: 0,
}


export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_TOKEN": {
            return { tokens: action.payload, names: state.names, tipos: state.tipos, ids: state.ids };
        }

        case "ADD_NAME": {
            return { names: action.payload, tokens: state.tokens, tipos: state.tipos, ids: state.ids };
        }

        case "ADD_TIPO": {
            return { tipos: action.payload, tokens: state.tokens, names: state.names, ids: state.ids };
        }
        
        case "ADD_ID": {
            return { ids: action.payload, tokens: state.tokens, names: state.names, tipos: state.tipos };
        }
        default:
            return state
    }
}