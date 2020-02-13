import React, {Component} from 'react'

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    onSubmit = (e) => {
        e.preventDefault()
        this.setState(this.props.addTodo(this.state.title))
        this.setState({title: ''})
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="textblock" 
                name="title"
                placeholder="Add new todo..."
                style={{flex: '1', padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit"
                className='button'
                />
            </form>
        )
    }
}

export default AddTodo
