import React from 'react';

const ButtonToClick = ({onLike}) => {

    return (
        <button
            onClick={() => {
                if(typeof onLike === 'function') {
                    onLike(prev => prev + 1)
                }
            }}

        >Polub to</button>
    )
}

export default ButtonToClick;