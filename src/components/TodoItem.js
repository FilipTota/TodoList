import React, {Component} from 'react'

class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            margin: 0,
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo
        return(
            <div>
                <p style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.removeItem.bind(this, id)} style={deleteBtn}>X</button>
                </p>
            </div>
        ) 
    }
}

const deleteBtn = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
