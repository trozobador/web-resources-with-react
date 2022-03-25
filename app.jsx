import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage.jsx';

window.addEventListener('load', function onLoad() {
    ReactDOM.render(
        <LandingPage />,
        document.getElementById("container")
    );
});
