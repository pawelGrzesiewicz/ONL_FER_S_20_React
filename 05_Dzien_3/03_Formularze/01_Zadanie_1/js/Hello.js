import React, {useState} from 'react';

const Hello = () => {

    const [name, setName] = useState('Ty')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <h1>Hello, {name}</h1>
                <form action=''>
                    <input type="text" value={name} onChange={handleChange}/>
                </form>
        </>
    )
}

export default Hello;