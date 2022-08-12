import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

export const TodoContainers = (props) => {
  return (
    <div>TodoContainers</div>
  )
}

//Filtrar todo list

const filterTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => !todo.completed)
        default:
            break;
    }
}

const mapStateToProps = (state) =>  {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}


const TodosContainers = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainers