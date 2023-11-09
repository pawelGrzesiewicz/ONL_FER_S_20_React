import React, {useState, useEffect} from "react";
import getNames from "./data/names";

const Names = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        getNames().then(res => {
            console.log(res);
            setItems(res)
        })
            .catch(err => {
                console.log(err);
                setItems([])
            })
    },[])

    if(!items) {
        return <p>Loading...</p>
    }


    return (
        <>
          <ul className='list-group'>
              {
                  items.map((item, index) => (
                      <li
                         className='list-group-item' key={index}>{item}</li>
                  ))
              }
          </ul>
        </>
    )
}

export default Names;