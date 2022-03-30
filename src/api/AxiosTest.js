import React from "react";
import axios from "axios";

const AxiosTest = () => {
    const dataPost = () => {
        axios.post("/api/post/serviceTest", {
            subjectName: "OS",
            credit: 2
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