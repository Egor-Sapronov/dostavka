'use strict';

import React, {Component} from 'react';
import InputField from './InputField.jsx';

class PlaceListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            place: this.props.place || null,
            name: this.props.name || null,
            phone: this.props.phone || null,
            comment: this.props.comment || null,
            placeIndex: this.props.placeId
        };
    }

    render() {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.placeIndex === 0 ? 'Откуда' : 'Куда'}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='col-xs-12 col-md-5'>
                            <div className='row'>
                                <div className='row place-item-container'>
                                    <InputField
                                        icon={'glyphicon glyphicon-map-marker'}
                                        value={this.state.place}
                                        onChange={this.placeChange.bind(this)}
                                        placeholder={'Красный проспект, 1'} />
                                </div>
                                <div className='row place-item-container'>
                                    <InputField
                                        icon={'glyphicon glyphicon-user'}
                                        value={this.state.name}
                                        onChange={this.nameChange.bind(this)}
                                        placeholder={'Иван Иванов'} />
                                </div>
                                <div className='row place-item-container'>
                                    <InputField
                                        icon={'glyphicon glyphicon-earphone'}
                                        value={this.state.phone}
                                        onChange={this.phoneChange.bind(this)}
                                        placeholder={'9133451234'} />
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-7'>
                            <div className='row'>
                                <div className='row place-item-container'>
                                    <textarea
                                        placeholder='Комментарий: во сколько подойти, какой подъезд, как пройти'
                                        value={this.state.comment}
                                        onChange={this.commentChange.bind(this)}
                                        className="form-control"
                                        rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    placeChange(value) {
        this.setState({
            place: value
        }, ()=> {
            this.handleChange();
        });
    }

    nameChange(value) {
        this.setState({
            name: value
        }, ()=> {
            this.handleChange();
        });
    }

    phoneChange(value) {
        this.setState({
            phone: value
        }, ()=> {
            this.handleChange();
        });
    }

    commentChange(e) {
        this.setState({
            comment: e.target.value
        }, ()=> {
            this.handleChange();
        });
    }

    handleChange() {
        this.props.onChange(this.props.placeId, this.state);
    }
}

export default PlaceListItem;