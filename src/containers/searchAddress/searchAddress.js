import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { path, partial } from 'ramda';
import select from './select';
import Autocomplete from 'react-autocomplete';

class SearchAddress extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        uuid: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.onChange = this::this.onChange;
    }

    onChange(event, value) {
        if (value.length > 1) {
            this.props.onChange(this.props.uuid, value);
        }
    }

    render() {
        return (
            <Autocomplete
                items={ this.props.items }
                getItemValue={ path(['full_name']) }
                onChange={ this.onChange }
                onSelect={ partial(this.props.onSelect, [this.props.uuid]) }
                renderItem={ item => <div key={ item.id }>{ item.full_name }</div> } />
        );
    }
}

export default connect(select)(SearchAddress);
