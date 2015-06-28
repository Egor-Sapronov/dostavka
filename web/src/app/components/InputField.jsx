'use strict';

import React,{Component} from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || ''
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

export default InputField;