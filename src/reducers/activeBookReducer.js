//REDUCE

export default function(state = null, object) {
	// console.log(state)
	switch(object.type) {
		case'BOOK_SELECTED':
			return object.payload;
	}
	return state
}

// export default function(state = {
// 	titles: [
// 		{title: "Harry Potter"},
// 		{title: "Javascript LUL"},
// 		{title: "The Dark Tower"},
// 		{title: "Dota2"},
// 		{title: "How To Train Your Dragon"}
// 	],
// 	selected: ""
// }, object) {
// 	switch(object.type) {
// 		case'BOOK_SELECTED':
// 			return {...state, selected: object.payload }
// 	}

// 	return state	
// }