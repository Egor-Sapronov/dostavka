'use strict';

import React, {Component} from 'react';
import RequestsActionsCreators from '../actions/RequestsActionsCreators.js';
import RequestsStore from '../stores/RequestsStore.js';

class PlacesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: RequestsStore.getRequests()
        };
    }

    componentDidMount() {
        RequestsStore.addChangeListener(this.handleStoreChange.bind(this));
    }

    componentWillUnmount() {
        RequestsStore.removeChangeListener(this.handleStoreChange.bind(this));
    }

    render() {
        return (
            <div>
                {this.state.requests.map((request, index) => {
                    return <p key={index}>{request.status}</p>
                })}
            </div>
        );
    }

    handleStoreChange() {
        this.setState({
            requests: RequestsStore.getRequests()
        });
    }
}

export default PlacesList;