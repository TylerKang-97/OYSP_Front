import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: '',
        college: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email' :
                setEmail(value);
                break;
            case 'password' :
                setPassword(value);
                break;
            case 'name' :
                setName(value);
                break;
            case 'college' :
                setCollege(value);
                break;
        }

        setInputs({
            ...inputs,
            [name]: value,
        });
    }

        const onClick = () => {
            axios.post("api/post/signup", {
                userEmail: inputs.email,
                password: inputs.password,
                userName: inputs.name,
                userCollege: inputs.college,
            }).then(res => {
                console.log("post success", res);
            }).catch(err => {
                console.log(err);
            });

            console.log(inputs);

            setInputs({
                email: '',
                password: '',
                name: '',
                college: '',
            })

        };

        return (
            <div>
                <input type="email" name="email" onChange={onChange} placeholder="email" value={email}/>
                <ul/>
                <input type="password" name="password"  onChange={onChange} placeholder="password" value={password}/>
                <ul/>
                <input name="name" onChange={onChange} placeholder="이름을 입력하세요." value={name}/>
                <ul/>
                <input name="college" onChange={onChange} placeholder="학교를 입력하세요." value={college}/>
                <ul/>
                <button onClick={onClick}>완료</button>
            </div>
        )

        
    

}

export default SignUp;