import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "./components/games/NavBar";
import { GameGrid } from "./components/games/GameGrid";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nva" "main"`,
        lg: `"nva nva" "aside main"`,
      }}
    >
      <GridItem gridArea="nva">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">aside</GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
