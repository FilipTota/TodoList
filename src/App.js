import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import About from './components/pages/About'
import uuid from 'uuid'

class App extends Component {
    state = {
        todos: []
    }   

    markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })})
    }

    removeItem = (id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }

    addTodo = (title) => {
        if(title.length > 0) {
            const newTodo = {
                id: uuid.v4(),
                title,
                completed: false
            }
            this.setState({todos: [...this.state.todos, newTodo]})
        }
    }

    render() {
        return(
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markComplete={this.markComplete} removeItem = {this.removeItem}/>
                            <hr style={{width: '70%', marginTop: '30px', opacity: '0.8'}} />
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default App
