import React, {Component} from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} removeItem={this.props.removeItem}/>
        })
    }
}

export default Todos