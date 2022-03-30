import React, { useState } from "react";
import axios from "axios";
const UserInfo = () => {
    const [subject, setSubject ] = useState('');
    const [credit, setCredit ] = useState('');

    const [inputs, setInputs] = useState({
        subjectName: "",
        credits: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const {subjectName, credits } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'subjectName') {
            setSubject(value);
        } else if (name === 'credit') {
            setCredit(value);
        }
        setInputs({
            ...inputs,
            [name]: value,
        });
        
       console.log(inputs);
       console.log(subject, credit);
    };

    // const onChange = (e) => {
    //     setUserName(e.target.value);
    // };
    // const onChanges = (e) => {
    //     setUserCollege(e.target.value);
    // };

    const onClick = () => {
        
        console.log(inputs, "최종 값");

        axios.post("/api/post/serviceTest", {
            subjectName: inputs.subjectName,
            credit: inputs.credits,
        }).then(res => {
            console.log("post success", res);
        }).catch(err => {

        });

        setInputs({
            subjectName: '',
            credits: '',
        })
    };

    // const dataPost = () => {
        // axios.post("/api/post/serviceTest", {
        //     subjectName: subject,
        //     credit: credit,
        // }).then(res => {
        //     console.log("post success", res);
        // }).catch(err => {

        // });
    // }


    return (
        <div>
            <input name="subjectName" onChange={onChange} value={subjectName} />
            <input name="credits" onChange={onChange} value={credits} />
            <button onClick={onClick} >입력</button>
            <ul/>
           
            {/* <button onClick={dataPost}>전송</button> */}
            <b>{subjectName}{credits}</b>
           
        </div>
    );

}

export default UserInfo;