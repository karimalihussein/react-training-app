import useData from "./useData";

export interface IGenre {
  id: number;
  name: string;
}

const useGeneres = () => useData<IGenre>("/genres");

export default useGeneres;
