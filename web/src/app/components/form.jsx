'use strict';

import React, {Component} from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div className="input-group col-xs-12">
                <span className='input-group-addon'>
                    <span className={this.props.icon}></span>
                </span>
                <input type="text" className="form-control" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }

    handleChange(e) {
        this.setState({
                value: e.target.value
            },
            ()=> {
                this.props.onChange(this.state.value);
            });
    }
}

class Place extends Component {
    constructor(props) {
        super(props);

        this.state = {
            place: null,
            name: null,
            phone: null,
            comment: null
        };
    }

    render() {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">

                        <div className='col-xs-12 col-md-5'>
                            <div className='row'>
                                <div className='row place-item-container'>
                                    <InputForm icon={'glyphicon glyphicon-map-marker'} onChange={this.placeChange.bind(this)} placeholder={'Красный проспект, 1'} />
                                </div>
                                <div className='row place-item-container'>
                                    <InputForm icon={'glyphicon glyphicon-user'} onChange={this.nameChange.bind(this)} placeholder={'Иван Иванов'} />
                                </div>
                                <div className='row place-item-container'>
                                    <InputForm icon={'glyphicon glyphicon-earphone'} onChange={this.phoneChange.bind(this)} placeholder={'9133451234'} />
                                </div>
                            </div>
                        </div>

                        <div className='col-xs-12 col-md-7'>
                            <div className='row'>
                                <div className='row place-item-container'>
                                    <textarea placeholder='Комментарий: во сколько подойти, какой подъезд, как пройти' onChange={this.commentChange.bind(this)} className="form-control" rows="8"></textarea>
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
        });
    }

    nameChange(value) {
        this.setState({
            name: value
        });
    }

    phoneChange(value) {
        this.setState({
            phone: value
        });
    }

    commentChange(value) {
        this.setState({
            comment: value
        });
    }
}

class DostavkaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [<Place title={'Откуда'} key={0} placeId={0} />, <Place title={'Куда'} key={1} placeId={1} />]
        };
    }

    handleAdd() {
        let places = this.state.places;
        dots.push(<Place title={'Куда'} placeId={places.length} key={places.length} />);

        this.setState({
            places: places
        });
    }

    render() {
        return (
            <div>
                {this.state.places}
                <button className='btn btn-primary' onClick={this.handleAdd.bind(this)} >Add</button>
            </div>
        );
    }
}

export default DostavkaForm;