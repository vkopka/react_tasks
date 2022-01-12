import {useEffect, useState} from 'react';

import './Posts.css';
import Post from "./Post";
import {url, urlPosts} from "../../configAPI";

const urlResponse = url + urlPosts;

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(urlResponse)
            .then((response) => response.json())
            .then((json) => setPosts(json));
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
