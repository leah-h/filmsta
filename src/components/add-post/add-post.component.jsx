import React, { Fragment, useState } from 'react';

import "./add-post.styles.scss";

const AddPost = () =>  {

    const [ description, setDescription ] = useState('');

    const onFormSubmit = async(event) => {
        event.preventDefault();
        try {
            const body = { description }
            await fetch("http://localhost:5000/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });


            window.location = '/user';

        } catch(error) {
            console.error(error.message);
        }
    };

       return (
        <Fragment>       
            <h1>My Images Posts</h1>
            <form className="add-post-form" onSubmit={onFormSubmit}>
                <input 
                    type="text"
                    className="input-text"
                    value={description} 
                    onChange={event => setDescription(event.target.value)}
                />
                <button className='button'>Add</button>
            </form>   
        </Fragment>
    )
}

export default AddPost;