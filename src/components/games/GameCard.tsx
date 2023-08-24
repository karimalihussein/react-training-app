import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { IGame } from "../../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../../services/ImageUrl"
import GenreShow from "./GenreShow"

interface Props {
    game: IGame
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
        <Image src={getCroppedImageUrl(game.background_image, 600, 400)} alt={game.name} />
        <CardBody>
            <Heading fontSize={'1xl'}>
              {game.name.length > 20 ? game.name.substring(0, 20) + '...' : game.name}
            </Heading>
            <HStack justifyContent={'space-between'}>
              <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard