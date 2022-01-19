import {url, urlComments} from "../configAPI";

const urlResponse = url + urlComments;

const getComments = () => {
    return (
        fetch(urlResponse)
            .then((response) => response.json())
    );
};

export {getComments};
