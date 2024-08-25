import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const NewTodo = ({onNewTodo}) => {
    const [value, setValue] = useState('')
    const ESCAPE_KEY = 27
    const ENTER_KEY = 13

    const onchange = (e) => { 
    setValue(e.target.value)
  }

    const erase = () => { 
    setValue('')
  }

    const submit = () => { 
      if(onNewTodo) { 
        onNewTodo(value)
        erase()
      }
    
  }

    const onkeydown = (e) => { 
    if (e.which === ENTER_KEY) { 
      submit()
    } else if (e.which === ESCAPE_KEY) { 
      erase()
    }
  }
    return (
    <input className='new-todo' 
    placeholder='Digite sua tarefa'
    value={value}
    onChange={onchange}
    onKeyDown={onkeydown}
  />
  )
}

NewTodo.propTypes = { 
  onNewTodo: PropTypes.func.isRequired
}
export default NewTodo
