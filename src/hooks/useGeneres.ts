import useData from "./useData";

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const useGeneres = () => useData<IGenre>("/genres");

export default useGeneres;
