import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import './styles/main.scss';

let app_e = document.getElementById('app');

render(

        <BrowserRouter>
            <App/>
        </BrowserRouter>

    , app_e);

