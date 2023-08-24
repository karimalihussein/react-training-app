import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
import GenreList from "./components/games/GenreList";
import { IGame } from "./hooks/useGames";
import { IGenre } from "./hooks/useGenres";
function App() {
  const [selectedGenree, setSelectedGenre] = useState<IGenre | null>(null);


  return (
    <Grid
      templateAreas={{
        base: `"nva" "main"`,
        lg: `"nva nva" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem gridArea="nva">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(selectedGenree)} />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid selectedGenreProp={selectedGenree} />
      </GridItem>
    </Grid>
  );
}

export default App;
