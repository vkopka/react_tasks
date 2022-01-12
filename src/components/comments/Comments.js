import {useEffect, useState} from 'react';

import './Comments.css';
import Comment from "./Comment";
import {url, urlComments} from "../../configAPI";

const urlResponse = url + urlComments;

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(urlResponse)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, []);

    return (
        <div className={'commentsFrame'}>
            <ul>
                {
                    comments.map(value =>
                        <li key={value.id}>
                            <Comment comment={value}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Comments;
