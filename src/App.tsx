import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
import GenreList from "./components/games/GenreList";
import { IGenre } from "./hooks/useGenres";
import PlatFormSelector from "./components/games/PlatFormSelector";
import { IPlatform } from "./hooks/usePlatforms";


export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  const templateAreas = { base: `"nva" "main"`, lg: `"nva nva" "aside main"`};
  const templateColumns = { base: "1fr", lg: "300px 1fr"}
  return (
    <Grid templateAreas={templateAreas} templateColumns={templateColumns}>

      <GridItem gridArea="nva"> <NavBar /> </GridItem>

      <Show above="lg">
          <GridItem gridArea="aside" paddingX={5}>
             <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
          </GridItem>
      </Show>

      <GridItem gridArea="main">
         <PlatFormSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
         <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  );
}

export default App;
