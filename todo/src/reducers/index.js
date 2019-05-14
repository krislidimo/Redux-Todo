import { ADD_TODO, TOGGLE_TODO, REMOVE_COMPLETED } from '../actions';

const initialState = {
	title: 'My todo list',
	todos: [
		{ id: 0, text: 'test', complete: false },
		{ id: 1, text: 'test2', complete: false }
	]
}

function reducer(state = initialState, action) {
		switch (action.type) {
			case ADD_TODO:
				return {
					...state,
					todos: [...state.todos, action.payload]
				}

			case TOGGLE_TODO:
				return {
					...state,
					todos: state.todos.map(todo => {
						if (todo.id === action.payload) {
							return { ...todo, complete: !todo.complete }
						}
						return todo;
					})
				}

			case REMOVE_COMPLETED:
				return {
					...state,
					todos: state.todos.map(todo => {
						if(todo.id !== action.paylod.id) { return todo; }
					})
				}
		}
}

export default reducer;