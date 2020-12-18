import React, { Fragment } from 'react';

import AddPost from '../../components/add-post/add-post.component'
import ListPosts from '../../components/list-posts/list-posts.component'

import './user.styles.scss'

const UserPage = (props) => (
    <Fragment>
        <div className='user-view'>
            <AddPost />
            <ListPosts />
        </div>
        
    </Fragment>
)

export default UserPage;