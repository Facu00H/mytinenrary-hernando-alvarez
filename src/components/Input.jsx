import React from 'react'

function Input() {

    const handleInput = (e) => {
        console.log(e.target.value);
    }

    
    return (
    <>
        <input type="text" onKeyUp={handleInput} placeholder="Search a city" />
    </>
    )
}

export default Input