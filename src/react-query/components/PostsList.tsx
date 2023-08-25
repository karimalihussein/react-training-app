import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostsList = () => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePosts({
    page,
    limit,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <ul className="list-group">
        {data?.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default PostsList;
