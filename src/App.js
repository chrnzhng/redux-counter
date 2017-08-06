import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
	render() {
		console.log( this.props );
		return (
			<div>Hello World!</div>
		)
	}
}

function mapStateToProps( state ) {
	return state;
}

export default connect( mapStateToProps )( App );