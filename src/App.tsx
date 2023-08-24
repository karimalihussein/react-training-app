import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
import GenreList from "./components/games/GenreList";
import { IGame } from "./hooks/useGames";
import { IGenre } from "./hooks/useGenres";
import PlatFormSelector from "./components/games/PlatFormSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
  const templateAreas = {
    base: `"nva" "main"`,
    lg: `"nva nva" "aside main"`
  };
  const templateColumns = {
    base: "1fr",
    lg: "300px 1fr"
  }
  return (
    <Grid templateAreas={templateAreas} templateColumns={templateColumns}>

      <GridItem gridArea="nva"> <NavBar /> </GridItem>

      <Show above="lg">
          <GridItem gridArea="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
      </Show>

      <GridItem gridArea="main">
         <PlatFormSelector />
         <GameGrid selectedGenre={selectedGenre} /> 
      </GridItem>

    </Grid>
  );
}

export default App;
