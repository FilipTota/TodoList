import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div style={headerStyle}>
                <h1 style={{margin: '0'}}>TodoList</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </div>
        )
    }
}

const headerStyle = {
    background: '#555',
    color: '#fff',
    margin: '0px',
    textAlign: 'center',
    padding: '30px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header