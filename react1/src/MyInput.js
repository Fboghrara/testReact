import { useState } from "react";

export default function MyInput(props){
    const [myInputValue,setMyInputValue]=useState("")
    function handlInputChange(event){
       setMyInputValue(event.value)
    }

    return(
        <div style={{margin:"20px",
        }}> 
            <label>{props.username} </label>
            <input 
            value={myInputValue}
            onChange={handlInputChange}/>
        </div>
    );

}