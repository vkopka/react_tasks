import {useEffect, useState} from 'react';

import User from "./User";
import {url, urlUsers} from "../../configAPI";
import './Users.css';

const urlResponse = url + urlUsers;

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(urlResponse)
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div className={'usesFrame'}>
            <ul>
                {
                    users.map(value =>
                        <li key={value.id}>
                            <User user={value}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Users;
