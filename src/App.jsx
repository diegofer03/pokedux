import React from 'react'
import './App.css'
import { Search } from './components/Search'
import { PokeList } from './components/PokeList'
import logo from './assets/logo.svg'
// import { getPokemon } from './api'
// import { getPokemonsDetails, setLoading } from './actions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { fetchPokemonWithDetails } from './slices/pokemonSlices'

function App() {
  const pokemons = useSelector(state => state.pokemons.pokemons, shallowEqual)
  const loading = useSelector(state => state.ui.loading, shallowEqual)
  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(fetchPokemonWithDetails())
  },[])
  return (
    <> 
      <img style={{width: '20%', marginBottom: '2rem'}} src={logo} alt="pokedux" />
      <Search />
      <Spin spinning={loading} size='large'/> 
      <PokeList pokes={pokemons}/>    
    </>
  )
}

export default App
