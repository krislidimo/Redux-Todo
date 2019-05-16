import React from 'react';
import { connect } from 'react-redux';

import { addTodo, removeCompleted } from '../actions'

class TodoForm extends React.Component {
	state = {
		newTodo: ""
	}

	toggleTodo = todo => {
		this.props.toggleTodo(todo.id)
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	submitHandle = event => {
		event.preventDefault();
		this.props.addTodo({
			id: this.props.todos.length,
			text: this.state.newTodo,
			complete: false,
			classNames: 'todo '
		})
	}

	removeCompleted = event => {
		event.preventDefault();
		this.props.removeCompleted();
		console.log(this.props.todos);
	}

	render() {
		return (
			<form onSubmit={this.submitHandle}>
				<input name="newTodo" value={this.state.newTodo} onChange={this.handleChange} placeholder="New Todo" />
				<button onClick={this.submitHandle} >Add Todo</button>
				<button onClick={this.removeCompleted} >Clear Completed</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
}

export default connect(mapStateToProps, { addTodo, removeCompleted })(TodoForm);