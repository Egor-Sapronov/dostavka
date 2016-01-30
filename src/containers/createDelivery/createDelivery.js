import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestSearch } from '../../actions/address';
import { path } from 'ramda';
import select from './select';
import Autocomplete from 'react-autocomplete';

class CreateDelivery extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        items: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.onChange = this::this.onChange;
    }

    onChange(event, value) {
        return value.length > 2 ? this.props.dispatch(requestSearch(value)) : () => {};
    }

    render() {
        return (
            <div>
                <Autocomplete
                    items={ this.props.items }
                    getItemValue={ path(['full_name']) }
                    onChange={ this.onChange }
                    renderItem={ item => <div key={ item.id }>{ item.full_name }</div> } />
            </div>
        );
    }
}

export default connect(select)(CreateDelivery);
