import {url, urlPosts} from "../configAPI";

const urlResponse = url + urlPosts;

const getPosts = () => {
    return (
        fetch(urlResponse)
            .then((response) => response.json())
    );
};

export {getPosts};
