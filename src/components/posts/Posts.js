import {useEffect, useState} from 'react';

import './Posts.css';

import Post from "./Post";
import {getPosts} from "../../services/postService";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(
            (value) => setPosts([...value])
        );
    }, []);

    return (
        <div className={'postsFrame'}>
            <ul>
                {
                    posts.map(value =>
                        <li key={value.id}>
                            <Post post={value}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Posts;
