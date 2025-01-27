import React from 'react'
import {MdDelete} from 'react-icons/md'
import PropTypes from 'prop-types'
import './style.css'
const TodoList = ({todos, onToggle, onDelete}) => {

  return (
    <ul className='todo-list'>
    { 
      todos.map((todo) => (
        <li key={todo.id.toString()} >
          <span 
          className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          onClick={() => onToggle && onToggle(todo)}
          role='button'
          tabIndex={0}
          >
            {todo.title}
          </span>
          <button 
          className='remove'
           type='button'
           onClick={() => onDelete && onDelete(todo)}
           >
          <MdDelete size={28}/>
          </button>
        </li>
      ))
    }
  </ul>

  )
}

TodoList.propTypes = { 
    todos: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired
        })
    ).isRequired,
    onToggle: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired
}
export default TodoList
