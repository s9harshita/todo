import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })
    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit?
                <>
                    <input 
                    type="text" 
                    placeholder="Edit todo"
                    value={input}
                    name='text'
                    className="todo-input edit"
                    onChange={handleChange}
                    ref={inputRef}
                /> 
                <button type="submit" className="todo-button edit">Update</button>   
                </>
                :
                <>
                    <input 
                    type="text" 
                    placeholder="type a todo"
                    value={input}
                    name='text'
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                /> 
                <button type="submit" className="todo-button">Add todo</button>   
                </>
            }
        </form>
        
    )
}

export default TodoForm
