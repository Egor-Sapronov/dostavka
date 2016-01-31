import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import select from './select';
import SearchAddress from '../searchAddress/searchAddress';
import { addAddress, requestSearch, selectAddress } from '../../actions/address';
import uuid from 'node-uuid';

class CreateDelivery extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        items: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.addAddress = this::this.addAddress;
        this.onSearch = this::this.onSearch;
        this.onSelect = this::this.onSelect;
    }

    onSearch(componentUuid, search) {
        this.props.dispatch(requestSearch(componentUuid, search));
    }

    onSelect(componentUuid, value, item) {
        this.props.dispatch(selectAddress(componentUuid, item));
    }

    addAddress() {
        this.props.dispatch(addAddress(uuid.v1()));
    }

    render() {
        const { items } = this.props;
        return (
            <div>
                { items.map(item => <SearchAddress
                    key={ item }
                    uuid={ item }
                    onChange={ this.onSearch }
                    onSelect={ this.onSelect }
                />) }
                <button onClick={ this.addAddress }>Add</button>
            </div>
        );
    }
}

export default connect(select)(CreateDelivery);
