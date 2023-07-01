import { combineReducers } from "redux";
// import { pokemonReducer } from "./pokemons";
// import { uiReducer } from "./ui";
import pokemonReducer from "../slices/pokemonSlices";
import uiReducer from '../slices/uiSlices'

const rootReducer = combineReducers({
    pokemons: pokemonReducer,
    ui: uiReducer
})

export default rootReducer