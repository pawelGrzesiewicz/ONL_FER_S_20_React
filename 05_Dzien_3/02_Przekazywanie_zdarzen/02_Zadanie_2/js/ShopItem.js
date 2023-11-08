import React from "react";

const ShopItem = ({onBuy, title}) => {

    return (
        <div>
            <h1>{title}</h1>
            <button
                onClick={() => {
                    if(typeof onBuy === 'function') {
                        onBuy(title)
                    }
                }}
            >Kup
            </button>
        </div>
    )
}

export default ShopItem;