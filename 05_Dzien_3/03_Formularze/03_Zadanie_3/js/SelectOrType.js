import React, {useState} from 'react'

const SelectOrType = ({items}) => {
    const [options, setOptions] = useState(items)
    const [value, setValues] = useState('')
    const [newItem, setNewItem] = useState('')

    return (
        <>
            <select onChange={(e) => {
                setValues(e.currentTarget.value)
            }} value={value}>
                {
                    options.map((x,i) => {
                        return <option key={i}>{x}</option>
                    })
                }
                <option>Inne</option>
            </select>

            {
                value === 'Inne' && (
                    <>
                        <input value={newItem} onChange={(e) => {
                            setNewItem(e.currentTarget.value)
                        }} type="text"></input>
                        <button onClick={() => {
                            setOptions(prev => {
                                return [...options, newItem]
                            })
                        }}>Dodaj nowe</button>

                    </>
                )
            }


        </>
    )

}

export default SelectOrType;