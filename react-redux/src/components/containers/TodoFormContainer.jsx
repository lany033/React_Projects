import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer)

export default TodoFormContainer