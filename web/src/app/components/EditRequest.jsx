'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import RequestsStore from '../stores/RequestsStore.js';

class EditRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleStoreChange() {
        this.setState(RequestsStore.getRequest());
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
                <p>{'Номер: ' + this.state._id}</p>
                <p>{'Статус: ' + this.state.status}</p>
            </div>
        );
    }
}

export default EditRequest;
