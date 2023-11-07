import React, {useEffect, useState} from "react";

const UserInfo = () => {
    const[user, setUser] = useState({
        name: 'Paweł',
        surname: 'Grzesiewicz'
    });

    useEffect(() => {
        setUser({ name: 'John', surname: 'Doe' });
    }, []);

    return (
        <>
            <p>Imię: {user.name} Nazwisko: {user.surname}</p>
        </>
    )
}

export default UserInfo