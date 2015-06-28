'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import RequestsStore from '../stores/RequestsStore.js';
import RequestsActionsCreators from '../actions/RequestsActionsCreators.js';

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
        $('.dropdown-toggle').dropdown()
    }

    componentWillUnmount() {
        RequestsStore.removeChangeListener(this.handleStoreChange.bind(this));
    }

    render() {
        return (
            <div>
                <p>{'Номер: ' + this.state._id}</p>
                <p>{'Статус: ' + this.state.status}</p>
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Статус
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a href="javascript:void(0)" onClick={this.waitClick}>В ожидании</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={this.workClick}>В работе</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)"onClick={this.finishClick}>Выполнен</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    waitClick() {
        RequestsActionsCreators.setStatus('wait');
    }

    workClick() {
        RequestsActionsCreators.setStatus('work');
    }

    finishClick() {
        RequestsActionsCreators.setStatus('finish');
    }
}

export default EditRequest;
