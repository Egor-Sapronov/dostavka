'use strict';

import React, {Component} from 'react';
import RequestsActionsCreators from '../actions/RequestsActionsCreators.js';
import RequestsStore from '../stores/RequestsStore.js';

class RequestsListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className='list-group-item'>
                <span className='badge'>{this.props.status}</span>
                <h4 className='list-group-item-heading'>{this.props._id}</h4>
                {this.props.places.map(function (place, index) {
                    return <ul className='list-group' key={index}>
                        <li className='list-group-item'>{'Адрес: ' + place.place}</li>
                        <li className='list-group-item'>{'Контактное лицо: ' + place.name}</li>
                        <li className='list-group-item'>{'Телефон: ' + place.phone}</li>
                        <li className='list-group-item'>{'Комментарий: ' + place.comment}</li>
                    </ul>
                })}
                <a href={'/requests/' + this.props._id}>Редактировать</a>
            </li>
        );
    }
}

class RequestsList extends Component {
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
                    return <RequestsListItem {...request} key={index} />
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

export default RequestsList;