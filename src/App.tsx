import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
function App() {
    return (
         <Grid templateAreas={{ 
            base: `"nva" "main"`,
            lg: `"nva nva" "aside main"`,
          }}>
            <GridItem  gridArea="nva">
                <NavBar />
            </GridItem>
            <Show above="lg">
            <GridItem gridArea="aside">aside</GridItem>
            </Show>
            <GridItem  gridArea="main">main</GridItem>
        </Grid>
    )
}

export default App;
