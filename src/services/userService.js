import {url, urlUsers} from "../configAPI";

const urlResponse = url + urlUsers;

const getUsers = () => {
    return (
        fetch(urlResponse)
            .then((response) => response.json())
    );
};

const getUser = (id) => {
    return (
        fetch(urlResponse + '/' + id)
            .then((response) => response.json())
    );
};

export {getUsers, getUser};
