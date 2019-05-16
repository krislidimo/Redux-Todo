import { ADD_TODO, TOGGLE_TODO, REMOVE_COMPLETED } from '../actions';

const initialState = {
	title: 'My todo list',
	todos: [
		{ id: 0, text: 'test', complete: false, classNames: 'todo ' },
		{ id: 1, text: 'test2', complete: false, classNames: 'todo ' }
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
						return { ...todo, 
							complete: !todo.complete, 
							classNames: todo.complete
								? todo.classNames.replace('complete', '')
								: todo.classNames + 'complete'
						}
					}
					return todo;
				})
			}
		case REMOVE_COMPLETED:
		console.log(state)
			return {
				...state,
				todos: state.todos.map(todo => {
					if (!todo.complete) { return todo; }
				})
			}
		default:
			return state;
	}
}

export default reducer;