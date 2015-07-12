'use strict';

import React, {Component} from 'react';
import PlacesActionCreates from '../actions/PlacesActionCreators.js';
import InputField from './InputField.jsx';

class PlaceListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: this.props.place || '',
            name: this.props.name || '',
            phone: this.props.phone || '',
            comment: this.props.comment || '',
            date: this.props.date || '',
            time: this.props.time || '',
            placeIndex: this.props.placeId,
            reactId: this.props.reactId
        };
    }

    render() {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.placeIndex === 0 ? 'Откуда' : 'Куда'}
                            <button onClick={this.handleDelete.bind(this)} type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className='col-xs-12 col-md-5'>
                            <div className='row'>
                                <div className='form-group col-xs-12'>
                                    <InputField
                                        icon={'glyphicon glyphicon-map-marker'}
                                        value={this.state.place}
                                        onChange={this.placeChange.bind(this)}
                                        placeholder={'Красный проспект, 1'} />
                                </div>
                                <div className='form-group col-xs-12'>
                                    <InputField
                                        icon={'glyphicon glyphicon-user'}
                                        value={this.state.name}
                                        onChange={this.nameChange.bind(this)}
                                        placeholder={'Иван Иванов'} />
                                </div>
                                <div className='form-group col-xs-12'>
                                    <InputField
                                        icon={'glyphicon glyphicon-earphone'}
                                        value={this.state.phone}
                                        onChange={this.phoneChange.bind(this)}
                                        placeholder={'9133451234'} />
                                </div>
                                <div className='form-group col-md-6 col-xs-12'>
                                  <InputField
                                    icon={'glyphicon glyphicon-calendar'}
                                    value={this.state.date}
                                    onChange={this.dateChange.bind(this)}
                                    placeholder={'2 июня'} />
                                </div>
                                <div className='form-group col-md-6 col-xs-12'>
                                  <InputField
                                    icon={'glyphicon glyphicon-time'}
                                    value={this.state.time}
                                    onChange={this.timeChange.bind(this)}
                                    placeholder={'14:00'} />
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-7'>
                          <div className='form-group'>
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
        );
    }

    dateChange(value) {
      this.setState({
          date: value
      }, ()=> {
          this.handleChange();
      });
    }

    timeChange(value){
      this.setState({
          time: value
      }, ()=> {
          this.handleChange();
      });
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

    handleDelete() {
        PlacesActionCreates.deletePlace(this.props.placeId);
    }

    handleChange() {
        PlacesActionCreates.updatePlace(this.props.placeId, this.state);
    }
}

export default PlaceListItem;
