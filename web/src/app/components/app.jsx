'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import PlacesList from './PlacesList.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <PlacesList />
                </div>
            </div>
        );
    }
}

export default App;

export function display(container) {
    return React.render(<App />, container);
}