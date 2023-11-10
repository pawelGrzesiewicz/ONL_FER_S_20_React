import React, {useState} from 'react'


const AddCar = ({id, data, getCars, setCars}) => {

    const [form, setForm] = useState({
        name: data.name,
        brand: data.brand,
        hp: data.engine.hp,
        type: data.engine.type
    })

    const addCar = (car) => {
        fetch(`http://localhost:3000/cars/${id}`, {
            method: "PUT",
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((res) => {
                getCars(setCars)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addCar({
            name: form.name,
            brand: form.brand,
            engine: {
                type: form.type,
                hp: form.hp
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget

        setForm(prev => {
            return { ...prev, [name]: value }
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} />
            </label>
            <label>
                Brand
                <input type="text" name="brand" value={form.brand} onChange={handleChange} />
            </label>
            <label>
                Type
                <input type="text" name="type" value={form.type} onChange={handleChange} />
            </label>
            <label>
                HP
                <input type="text" name="hp" value={form.hp} onChange={handleChange} />
            </label>
            <button>Edytuj</button>
        </form>
    )
}

export default AddCar