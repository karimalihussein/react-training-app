import useGeneres, { IGenre } from "../../../hooks/useGeneres";

const GenereList = () => {
  const { data, loading, error } = useGeneres();
  return (
    <div>
      {error && <div>Something went wrong</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && data.length === 0 && <div>No genres found</div>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenereList;
