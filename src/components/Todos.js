import React from 'react'
import TodosItem from './TodosItem'

class Todos extends React.Component{
    render()
    {
      return this.props.todos.map((todo) => (
       <TodosItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodos={this.props.delTodos} />
      )
        
      );  
    }
}

export default Todos;