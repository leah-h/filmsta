import React, { Fragment, useEffect, useState } from 'react';

const ListPosts = () => {

    const [posts, setPosts] = useState([]);

    const deletePost = async(id) => {
        try {
            const deletePost = await fetch(`http://localhost:5000/posts/${id}`, {
                method: 'DELETE'
            });

            console.log(deletePost);
            setPosts(posts.filter(post => post.post_id !== id));

        } catch(error) {
            console.error(error.message);
        }
    }

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
        {posts.map(post => (
           <div key={post.post_id}>
            <p>{post.description}</p>
                <button>Edit</button>
                <button onClick={() => deletePost(post.post_id)}>Delete</button>
            </div>
            ))
        }
     </Fragment>
    )
        
};

export default ListPosts;