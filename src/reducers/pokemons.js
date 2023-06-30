const initialState = {
    pokemons : [],
    loading: false
}

const pokemonObj = (state, payload) => ({
    'SET_POKEMONS' : {
        ...state,
        pokemons : payload
    },
    'SET_LOADING' : {
        ...state,
        loading: payload
    },
    'SET_FAVORITE': {
        ...state,
        pokemons: payload
    }
})

export const pokemonReducer = (state = initialState, action) => {
    return pokemonObj(state, action.payload)[action.type] || {...state}
}