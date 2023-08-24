import useData from "./useData";

export interface IPlatform {
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
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

const useGames = (selectedGenre: IGame | null) => useData<IGame>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export default useGames;
