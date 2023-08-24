import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
import GenreList from "./components/games/GenreList";
import { IGenre } from "./hooks/useGenres";
import PlatFormSelector from "./components/games/PlatFormSelector";
import { IPlatform } from "./hooks/usePlatforms";
import SortSelector from "./components/games/SortSelector";


export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
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
         <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatFormSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSort={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
         </HStack>
         <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  );
}

export default App;
