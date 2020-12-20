import * as React from 'react';
import * as ReactDOM from 'react-dom';

import LiveSearch from './Components/LiveSearch';

import './app.scss';

ReactDOM.render(
    <LiveSearch/>,
    document.getElementById('live-search-input')
);