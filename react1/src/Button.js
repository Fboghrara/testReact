import "./ButtonStyle.css";
import { useState } from "react";

export default function Button(){
    const [name,setName] =useState("Fatma");
    function btnClick(){
        if(name=="Fatma"){
            setName("Mohamed");
        }else{
            setName("Fatma");
        }
        
    }
    
    return (
        <div>
        <button onClick={btnClick} class="btn1" >click</button>
        <h1>{name}</h1>
        </div>
        
       
    );
}

