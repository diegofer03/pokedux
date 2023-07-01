import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetail } from "../api";
import { setLoading } from "./uiSlices";

const initialState = {
    pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk('pokemons/fetchPokemonWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const pokeList = await getPokemon()
        const pokedetailed = await Promise.all(pokeList.map(poke => getPokemonDetail(poke)))
        dispatch(setPokemons(pokedetailed))
        dispatch(setLoading(false))
    }
)

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {
            state.pokemons = action.payload
        }
    }
})

export const { setFavorite, setPokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer