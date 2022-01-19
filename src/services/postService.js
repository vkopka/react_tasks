import {url, urlPosts} from "../configAPI";

const urlResponse = url + urlPosts;

const getPosts = () => {
    return (
        fetch(urlResponse)
            .then((response) => response.json())
    );
};

const getPost = (id) => {
    return (
        fetch(urlResponse + '/' + id)
            .then((response) => response.json())
    );
};

export {getPosts, getPost};
