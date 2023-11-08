import React, {useState, useEffect} from "react";
import FakeAPI from "./data/fakeAPI";

const AccountData = () => {

    const [data, setData] = useState(false)

    useEffect(() => {
        FakeAPI.then(data => {
            setData(data)
        })
    }, []);

    console.log(data)

    if (!data) {
        return null
    }

    return (
        <div>
            <h1>Account Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Balance</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.day}</td>
                        <td>{row.balance}</td>
                        <td>{row.change}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AccountData