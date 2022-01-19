import {useEffect, useState} from 'react';

import './Comments.css';
import Comment from "./Comment";
import {getComments} from "../../services/commentService";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(
            (value) => setComments(value)
        );
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
