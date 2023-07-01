import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk('pokemons/fetchPokemonWithDetails',)

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, payload) => {
            state.pokemons = payload
        },
        setFavorite: (state, payload) => {
            state.pokemons = payload
        }
    }
})

export const { setFavorite, setPokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer