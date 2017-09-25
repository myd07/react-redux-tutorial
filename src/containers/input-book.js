import React, {Component} from 'react';
import {addBooks} from '../actions/mainAction';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class InputBook extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}
	input(e) {
		e.preventDefault();
		// console.log(e.target.lol.value)
		this.props.addBook({name: this.state.text})
		this.setState({
			text: ''
		});
	}
	handleChange(e) {
		this.setState({
			text: e.target.value
		});
	}
	render() {
		return(
			<div>
				<form onSubmit={(e) => this.input(e)}>
					<input onChange={(e) => this.handleChange(e)} value={this.state.text} type="text" name="lol" />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addBook: addBooks}, dispatch)
}

export default connect(null, mapDispatchToProps)(InputBook);