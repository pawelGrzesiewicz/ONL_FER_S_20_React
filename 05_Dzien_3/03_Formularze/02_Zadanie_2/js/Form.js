import React, {useState} from "react";
import fakeAPI from "./data/fakeAPI";

const Form = () => {

    const [form, setForm] = useState({login: "", password: ""});
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({login: "", password: ""})
    const [isLogged, setIsLogged] = useState(false)


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        console.log("login", form.login);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setErrors({login:"", password: ""})

        let valid = true;

        if(form.login.length <= 2) {
            valid = false
            setErrors(prevState => ({...prevState, login: "Login jest zbyt krótki"}))
        }

        if(form.password.length <= 4) {
            valid = false
            setErrors(prevState => ({...prevState, login: "Hasło jest zbyt krótkie"}))
        }

        if (valid) {
            fakeAPI.login({username: form.login, password:form.password})
                .then((res) => {console.log(res)
                    setMessage(`Witaj, ${res.name}`)
                    setIsLogged(true)
                })
                .catch((err) => {console.log(err)
                    setMessage(err)
                })
        }
    }


    return (
        <>
            <form style={{display: isLogged ? "none" : "block"}} onSubmit={handleSubmit}>
                <input type="text" name="login" value={form.login} onChange={handleChange} />
                <p>{errors.login}</p>
                <input type="password" name="password" value={form.password} onChange={handleChange}/>
                <p>{errors.password}</p>
                <button type="submit">Zaloguj</button>
            </form>
            <p>{message}</p>
        </>
    )
}

export default Form