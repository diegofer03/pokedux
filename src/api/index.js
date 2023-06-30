export const getPokemon = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => {
        if(!res.ok) throw new Error("Error HTTP: "+res.status)
        return res.json()
        })
      .then(res => res.results)
      .catch((err) => console.log(err));
};

export const getPokemonDetail = (pokemon) => { 
  return fetch(pokemon.url)
    .then((res) => {
      if(!res.ok) throw new Error("Error HTTP: "+res.status)
      return res.json()
      })
    .catch((err) => console.log(err));
};