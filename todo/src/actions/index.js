export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

export const addTodo = newTodo => {
	return {
		type: ADD_TODO,
		payload: newTodo
	}
}

export const toggleTodo = id => {
	return {
		type: TOGGLE_TODO,
		payload: id
	}
}

export const removeCompleted = () => {
	return {
		type: REMOVE_COMPLETED,
	}
}
