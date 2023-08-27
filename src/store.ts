import { create } from "zustand";

interface IGameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface IGameQueryStore {
    gameQuery: IGameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<IGameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId: number) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId: number) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder: string) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}))

export default useGameQueryStore;