import { actionTypes } from "../actions/types"

const initialState = {
    pokemons : []
}

const pokemonObj = (state, payload) => ({
    'SET_POKEMONS' : {
        ...state,
        pokemons : payload
    }
})

export const pokemonReducer = (state = initialState, action) => {
    return pokemonObj(state, action.payload)[action.type] || {...state}
}