import React from 'react';

const SecretStuff = ({password, correctPassword, secret}) => {

    return (
        <div>
            {password === correctPassword ? <span>{secret}</span> : null}
        </div>
    )
}

export default SecretStuff;