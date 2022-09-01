import React from 'react'
import { useState, useEffect } from 'react'

function Input(props) {

    const [input, setInput] = useState('')
    
    return (
    <>
        <input type="text" onInput={props.input} placeholder="Search a city" />
    </>
    )
}

export default Input