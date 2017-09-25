import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
	render() {
		// console.log(this.props.book);
		if (!this.props.book) {
			return (
				<div className="book-detail">
					<h3>Select a Book First</h3>
				</div>
			)
		}
		return(
			<div className="book-detail">
				<h3>{this.props.book}</h3>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);