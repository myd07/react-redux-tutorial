import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBooks} from '../actions/mainAction';
import {loadUsers} from '../actions/mainAction';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	componentDidMount() {
		// console.log("i am mounted")
		this.props.loadUser()
	}

	renderList() {
		// console.log(this.props.books)
		if(!this.props.books) {
			return (
				<div>
					<p>Please Wait a Moment</p>
				</div>
			)
		}
		// console.log(this.props.books)
		return this.props.books.map((book) => {
			return (
				<li onClick={() => this.props.selectBook(book.name)} key={book.name}>{book.name}</li>
			)
		})
	}

	render() {
		return(
			<ul className="books-list">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectBook: selectBooks, loadUser: loadUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);