import React from 'react'

export default class Todo extends React.Component {
  
  handleClick = ()=> {
    this.props.handleToggle(this.props.todo.id)
  }
  
  render() {
    return ( 
      <div>
        <li key={this.props.todo.id} onClick={this.handleClick}>
          {this.props.todo.name} 
          {this.props.todo.completed ? <h6>Completed</h6> : <h6></h6>}
        </li>
      </div>
    )
  }
}
