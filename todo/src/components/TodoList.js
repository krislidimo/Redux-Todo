import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions'

class TodoList extends React.Component {

	toggleTodo = todo => {
		this.props.toggleTodo(todo.id);
	}

	render() {
		return (
			<div>
				{this.props.todos.map(todo => {
					console.log(todo);
					return <div 
						className={todo.classNames}
						onClick={() => this.toggleTodo(todo)} 
						key={todo.id} 
						>{todo.text} <span>X</span>
					</div>
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
}

export default connect(mapStateToProps, { addTodo, toggleTodo })(TodoList);