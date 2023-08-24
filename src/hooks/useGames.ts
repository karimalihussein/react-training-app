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
}

const useGames = (
  selectedGenre: IGenre | null,
  selectedPlatForm: IPlatform | null
) =>
  useData<IGame>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatForm?.id } },
    [selectedGenre?.id, selectedPlatForm?.id]
  );
export default useGames;
