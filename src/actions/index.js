import { getPokemonDetail } from "../api";
import { actionTypes } from "./types";

export const setPokemons = (payload) => ({
    type: actionTypes.SET_POKEMON,
    payload
})

export const setLoading = (payload) => ({
    type: actionTypes.SET_LOADING,
    payload
})

export const setFavorite = (payload) => ({
    type: actionTypes.SET_FAVORITE,
    payload
})

export const getPokemonsDetails = (pokemons = []) => async (dispatch) => {
    const pokedetailed = await Promise.all(pokemons.map(poke => getPokemonDetail(poke)))
    dispatch(setPokemons(pokedetailed))
    dispatch(setLoading(false))
} 