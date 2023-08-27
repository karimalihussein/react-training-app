import { Box, Flex, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { NavBar } from "./components/games/NavBar";
import GenreList from "./components/games/GenreList";

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
      <Box p="4">
      <Text fontSize="xl" fontWeight="semibold" mb="4">
        About Our Games
      </Text>
      <Text>
        Welcome to our exciting collection of games! We are passionate about
        providing you with an immersive gaming experience that keeps you engaged
        and entertained for hours on end.
      </Text>
      <Text mt="2">
        Our diverse selection of games caters to a wide range of interests and
        preferences. Whether you're a strategy enthusiast, a puzzle solver, or a
        fan of action-packed adventures, we have something special for you.
      </Text>
      <Text mt="2">
        At our core, we believe that gaming is not just a pastime; it's a way
        to connect, learn, and have fun. Our dedicated team of developers works
        tirelessly to create unique and captivating experiences that push the
        boundaries of interactive entertainment.
      </Text>
      <Text mt="2">
        We invite you to explore our ever-growing library of games. Feel free
        to discover new worlds, conquer challenges, and make lasting memories
        through the power of gaming.
      </Text>
      <Text mt="4" fontStyle="italic">
        "Play, enjoy, and let the games begin!"
      </Text>
    </Box>
      </GridItem>

    </Grid>
  );
}

export default App;
