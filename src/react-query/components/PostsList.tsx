import usePosts from '../hooks/usePosts';

const PostsList = () => {
    const { data, error, isLoading } = usePosts();
    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>{ error.message }</p>;

    return (
        <ul className='list-group'>
            {data?.map((post) => (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export default PostsList;
