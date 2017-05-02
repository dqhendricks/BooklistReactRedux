export default function( state = null, action ) {
	// state means current state of this reducer only
	switch( action.type ) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}
