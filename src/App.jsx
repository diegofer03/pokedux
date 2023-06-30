import React from 'react'
import './App.css'
import { Search } from './components/Search'
import { PokeList } from './components/PokeList'
import logo from './assets/logo.svg'
import { getPokemon, getPokemonDetail } from './api'
import { setPokemons } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  React.useEffect(()=> {
    const fetchPokes = async() => {
      const pokeList = await getPokemon()
      const pokedetailed = await Promise.all(pokeList.map(poke => getPokemonDetail(poke)))
      dispatch(setPokemons(pokedetailed))
      
    }
    fetchPokes()
  },[])
  return (
    <> 
      <img style={{width: '20%', marginBottom: '2rem'}} src={logo} alt="pokedux" />
      <Search /> 
      <PokeList pokes={pokemons}/>    
    </>
  )
}

export default App
