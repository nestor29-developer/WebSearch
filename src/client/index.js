import React from 'react';
import { render } from 'react-dom';
import './style/main.css';

const App = () => {
    return <h1>
        Welcome!.
    </h1>
}


render(
    <App/>,
    document.getElementById('app')
);