import React, { useEffect, useState } from 'react';
import AddCar from './AddCar';
import Car from './Car'

const CarManager = () => {
    const [cars, setCars] = useState(null)


    useEffect(() => {
        getCars(setCars)
    }, [])

    const getCars = (setCars) => {
        fetch(`http://localhost:3000/cars`)
            .then((res) => res.json())
            .then((res) => {
                setCars(res)
            })
            .catch(error => {
                console.error(error)
            })
    }

    if (!cars) {
        return <p>loading ...</p>
    }

    return (
        <>
            <AddCar getCars={getCars} setCars={setCars} />
            <ul>
                {
                    cars.map((x) => {
                        return <Car key={x.id} car={x} getCars={getCars} setCars={setCars} />
                    })
                }
            </ul>
        </>
    )
}


export default CarManager