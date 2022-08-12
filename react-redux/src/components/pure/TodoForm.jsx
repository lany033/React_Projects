import React from 'react';
import { useRef } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types'

const TodoForm = ({submit}) => {

    const newText = useRef()

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                submit(newText.current.value)
                newText.current.value = ''
            }}>
            <input type='text' ref={newText}/> 
            <button type='submit'>Create TODO</button>   
            </form>
        </div>
    );
}

Todo.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
