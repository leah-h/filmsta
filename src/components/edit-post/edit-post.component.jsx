import React, { Fragment, useState } from 'react';

const EditPost = ({ post }) => {
    const [ description, setDescription ] = useState(post.description);

    //edit description function

    const updateDescription = async(event) => {
        event.preventDefault();
        try {
            const body = { description };
            await fetch(`http://localhost:5000/posts/${post.post_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
           
            window.location = "/user"

        } catch(error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${post.post_id}`}>
                Edit
            </button>
        
            <div 
                className="modal" 
                id={`id${post.post_id}`}
                onClick={()=> setDescription(post.description)}
            >
            <div className="modal-dialog">
                <div className="modal-content">
            
                
                <div className="modal-header">
                    <h4 className="modal-title">Edit Post</h4>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal"
                        onClick={()=> setDescription(post.description)}
                        >
                        &times;
                        </button>
                </div>
            
                <div className="modal-body">
                   <input 
                        type='text' 
                        className='form-control' 
                        value={description} 
                        onChange={event => setDescription(event.target.value)}
                    />
                </div>
            
                <div className="modal-footer">
                <button 
                    type="button" 
                    className="btn btn-warning" 
                    data-dismiss="modal"
                    onClick={event => updateDescription(event)}
                    >
                    Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={()=> setDescription(post.description)}
                        >
                        Close
                    </button>
                </div>
            
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditPost;