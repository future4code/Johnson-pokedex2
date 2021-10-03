export const goToPokemonsList = (history) => {
    history.push('/')
  }
  export const goToPokemonStats = (history, name) => {
    history.push(`/stats/${name}`)
  }
  export const goToPokedex = (history) => {
    history.push('/pokedex')
  }