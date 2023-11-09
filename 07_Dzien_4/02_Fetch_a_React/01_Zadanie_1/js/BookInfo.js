import React, {useState, useEffect} from "react";

const BookInfo = ({isbn}) => {
    const [title, setTitle] = useState(false);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res =>{
                console.log('RESPONSE', res)
                return res.json()
            })
            .then(res => {
                console.log(res.items[0].volumeInfo.title);
                setTitle(res.items[0].volumeInfo.title)
            })
            .catch(error => {
                console.log('Masz błąd', error)
        })
    }, []);



    if(!title) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default BookInfo