'use strict';

import React, {Component} from 'react';

class Dot extends Component {
	
	constructor (props) {
		super(props);
	}
	
	render () {
		return (
			<div>
				<div className="panel panel-success">
				  <div className="panel-heading">
    				<h3 className="panel-title">Адрес</h3>
  					</div>	
					<div className="panel-body">
					    <div className="input-group input-group-lg">
						  <input type="text" className="form-control" placeholder="Адрес" aria-describedby="sizing-addon1" />
						</div>
					</div>
					<div className="panel-footer">Panel footer</div>
				</div>
			</div>
		);
	}
}

class DostavkaForm extends Component {
	
	constructor (props) {
		super(props);
		
		this.state={
			dots:[<Dot key={0}/>]
		};
	}
	
	handleAdd () {
		let dots = this.state.dots;
		dots.push(<Dot key={dots.length} />);
		
		this.setState({
			dots: dots
		});
	}
	
	render () {
		return (
				<div>
					{this.state.dots}
					<button className='btn btn-primary' onClick={this.handleAdd.bind(this)} >Add</button>
				</div>
			);
	}
}

export default DostavkaForm;