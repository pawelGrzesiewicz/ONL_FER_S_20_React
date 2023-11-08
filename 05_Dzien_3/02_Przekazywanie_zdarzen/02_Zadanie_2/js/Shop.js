import React, {useState} from "react";
import ShopItem from "./ShopItem";

const Shop = () => {

    const [list, setList] = useState([])

    const handleBuy = (arg) => {
        setList([...list, arg]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={arg => handleBuy(arg)}/>
            <ShopItem title="Dell X5500" onBuy={arg => handleBuy(arg)}/>
            <ShopItem title="Asus NT6000" onBuy={arg => handleBuy(arg)}/>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Shop;