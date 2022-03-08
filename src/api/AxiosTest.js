import React from "react";
import axios from "axios";

const AxiosTest = () => {
    const dataPost = () => {
        axios.post("/api/post/test", {
            userName: "tyler",
            userCollege: "mjc",
            subjectName: "Web Programming",
            credit: 3
        }).then(res => {
            console.log("post success", res);
        }).catch(error => {

        });
    }

    return (
        <div>
            <button onClick={dataPost}>
            Go Post
            </button>
        </div>
    )
}

export default AxiosTest;