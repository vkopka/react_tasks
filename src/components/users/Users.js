import {useEffect, useState} from 'react';

import './Users.css';

import User from "./User";
import {getUsers} from "../../services/userService";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(
            (value) => setUsers(value)
        );
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
