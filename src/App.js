import React from 'react';

import './App.css';

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

const App = () => {
    return (
        <div className={'mainFrame'}>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
};

export default App;
