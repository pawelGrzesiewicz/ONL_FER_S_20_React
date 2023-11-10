import React, { useState} from 'react'
import EditCar from './EditCar'


const Car = ({ car, getCars, setCars }) => {
  const [edit, setEdit] = useState(false)


  const removeCar = (id) => {
    fetch(`http://localhost:3000/cars/${id}`, {
      method: "DELETE",
      // headers: {
      //     'Content-Type': 'application/json'
      // }
    }).then(x => {
      getCars(setCars)
    })
  }
  return (
      <li key={car.id}>{car.name} | {car.brand} | {car.engine?.hp} | {car.engine?.type}
        <button onClick={() => {
          removeCar(car.id)
        }}>Remove</button>
        <button onClick={() => setEdit(prev => !prev)}>Edit</button>


        {
            edit && (
                <EditCar id={car.id} data={car} setCars={setCars} getCars={getCars} />
            )
        }
      </li>
  )
}

export default Car