import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
import GenreList from "./components/games/GenreList";
import PlatFormSelector from "./components/games/PlatFormSelector";
import SortSelector from "./components/games/SortSelector";
import GameHeading from "./components/games/GameHeading";

function App() {
  const templateAreas = { base: `"nva" "main"`, lg: `"nva nva" "aside main"` };
  const templateColumns = { base: "1fr", lg: "300px 1fr" };
  return (
    <Grid templateAreas={templateAreas} templateColumns={templateColumns}>

      <GridItem gridArea="nva"> <NavBar /> </GridItem>

      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}> <GenreList /></GridItem>
      </Show>

      <GridItem gridArea="main">
        <GameHeading />
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}> <PlatFormSelector /></Box>
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>

    </Grid>
  );
}

export default App;
