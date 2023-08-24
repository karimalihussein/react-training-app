import { IGameQuery } from "../App";
import useData from "./useData";
import { IGenre } from "./useGenres";
import { IPlatform } from "./usePlatforms";

export interface IPlatformGames {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: IPlatformGames }[];
  metacritic: number;
  genres: IGenre[];

}

const useGames = (
  gameQuery: IGameQuery
) =>
  useData<IGame>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery]
  );
export default useGames;
