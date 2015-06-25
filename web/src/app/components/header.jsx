'use strict';

import React, {Component} from 'react';

class Header extends Component {
	render () {
		return (
			<nav className="navbar navbar-default navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">Dostavka</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;