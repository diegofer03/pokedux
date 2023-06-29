import React from 'react'
import './App.css'
import { Search } from './components/Search'
import { PokeList } from './components/PokeList'
import logo from './assets/logo.svg'
import { getPokemon } from './api'
import { setPokemons } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  // const [pokemons, setPokemons] = React.useState([])
  React.useEffect(()=> {
    const fetchPokes = async() => {
      const pokeList = await getPokemon()
      dispatch(setPokemons(pokeList))
      
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
