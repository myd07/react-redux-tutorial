import axios from 'axios';

var url = 'https://jsonplaceholder.typicode.com/users';

export function selectBooks(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}
export function addBooks(book) {
	return {
		type: 'BOOK_ADDED',
		payload: book
	}
}

export function loadUsers() {
	var request = axios.get(url)
	.then((resolve) => {
		// console.log(resolve)
		return resolve
	})
	.catch((reject) => {
		console.log("error when calling API")
		return false
	})
	return {
		type: 'USER_LOADED',
		payload: request
	}
}