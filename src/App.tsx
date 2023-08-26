import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
import GenreList from "./components/games/GenreList";
import PlatFormSelector from "./components/games/PlatFormSelector";
import SortSelector from "./components/games/SortSelector";
import GameHeading from "./components/games/GameHeading";


export interface IGameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  const templateAreas = { base: `"nva" "main"`, lg: `"nva nva" "aside main"`};
  const templateColumns = { base: "1fr", lg: "300px 1fr"}
  return (
    <Grid templateAreas={templateAreas} templateColumns={templateColumns}>
      <GridItem gridArea="nva"> <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText})} /> </GridItem>

      <Show above="lg">
          <GridItem gridArea="aside" paddingX={5}>
             <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id})} />
          </GridItem>
      </Show>

      <GridItem gridArea="main">
          <GameHeading gameQuery={gameQuery} />
         <Flex  paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
               <PlatFormSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })} />
            </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSort={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
         </Flex>
         <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  );
}

export default App;
