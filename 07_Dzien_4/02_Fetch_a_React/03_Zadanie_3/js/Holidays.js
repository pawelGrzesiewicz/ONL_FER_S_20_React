import React, {useState, useEffect} from "react";

const Holidays = () => {
    const [country, setCountry] = useState('PL');
    const [holidays, setHolidays] = useState(false);

    useEffect(() => {
        fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${country}`)
            .then(res => {
                console.log('RESPONSE',res);
                return res.json()
            })
            .then(res => {
                console.log('Jeson', res.holidays)
                setHolidays(res.holidays)
            })
            .catch(err => {
                console.log('Błąd', err)
        })
    }, [country]);


    if(!holidays) {
        return <p>Loading...</p>
    }

    return (
        <>
            <select name="text" id="text" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="PL">Polska</option>
                <option value="GB">Wielka Brytania</option>
                <option value="US">USA</option>
            </select>

            <ul className='list'>
                {
                    holidays.map((holiday, index) => (
                        <li key={index}>
                            <h3 className='holiday-name'>{holiday.name}</h3>
                            <div className='holiday-date'>{holiday.date}</div>
                        </li>
                    ))
                }
            </ul>
        </>
    )

}

export default Holidays;