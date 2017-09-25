export default function(state = null, object) {
    // console.log(object);
    switch(object.type) {
        case 'BOOK_ADDED':
            return [...state,object.payload]
            break;
        case 'USER_LOADED':
            return object.payload.data
            break;
    }
    return state
}