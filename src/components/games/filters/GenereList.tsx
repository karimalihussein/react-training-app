import React from "react";
import useGeneres from "../../../hooks/useGeneres";

const GenereList = () => {
  const { genres, loading, error } = useGeneres();
  return (
    <div>
      {error && <div>Something went wrong</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && genres.length === 0 && <div>No genres found</div>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenereList;
