import React, { useState } from "react";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState('');

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }

        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onClick = () => {
        axios.post("api/post/login", {
            userEmail: inputs.email,
            password: inputs.password,
        }).then(res => {
            console.log("login post success", res);
            setIsSuccess(res.data);
        }).catch(err => {
            console.log(err);
        });

        setInputs({
            email: '',
            password: ''
        })
    };

    return (
        <div>
            <input type="email" name="email" onChange={onChange} placeholder="email" value={email}/>
                <ul/>
            <input type="password" name="password"  onChange={onChange} placeholder="password" value={password}/>
                <ul/>
                <button onClick={onClick}>완료</button>
        </div>
    )



}
export default Login;