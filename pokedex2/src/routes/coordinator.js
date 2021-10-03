export const goToHomePage = (history) => {
    history.push("/");
  };

  export const goToStatsPage = (history, name, isPokedex) => {
    console.log("ispoke", isPokedex);
    isPokedex
      ? history.push(`/pokemon/${name}/telaPokedex`)
      : history.push(`/pokemon/${name}`);
  };
  
  export const goToPokedexPage = (history) => {
    history.push("/pokedex");
  };

  export const goBack = (history) => {
    history.goBack();
  };
