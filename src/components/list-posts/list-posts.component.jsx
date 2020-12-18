import React, { Fragment, useEffect, useState } from 'react';

const ListPosts = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = await fetch("http://localhost:5000/posts")
            const jsonData = await response.json();

            setPosts(jsonData);

        } catch(error) {
            console.error(error.message)
        }
    }

    useEffect( () => {
        getPosts();
    }, [])

    return (
     <Fragment>
        <h1>List All Posts</h1>
        {posts.map(post => <p key={post.post_id}>{post.description}</p>) }
     </Fragment>
    )
        
};

export default ListPosts;