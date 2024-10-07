import { useState } from "react"
export default function MyForm(){
   const [fromInput,setFromInput]=useState({
    name:"" ,
    email:"" ,
    age:null,
    generalInfo:"",
    isStudent:false
})

function handleCheckBoxChanged(event){
   setFromInput({...fromInput,isStudent:event.target.checked})

}
    return(
        <form onSubmit={(event) =>{ 
            event.preventDefault();
        }} style={{paddingTop:"200px"}}>
        <label>Name: </label>
        <input value={fromInput.name}
        onChange={(event)=>{
            setFromInput({name:event.target.value ,email:fromInput.email,age:fromInput.age});
        }}/>

        <hr></hr>

        <label>Email: </label>
        <input 
        value={fromInput.email}
        onChange={(event)=>{
        setFromInput({...fromInput,email:event.target.value})
        }}/>

        <hr></hr>

        <label>Age: </label>
        <input 
        value={fromInput.age}
        onChange={(event)=> {
           setFromInput({...fromInput,age:event.target.value})
        }}/>

        <hr></hr>
        <label>Are you student</label>
         <input type="checkbox" checked={fromInput.isStudent}
         onChange={handleCheckBoxChanged}/>


         <hr></hr>
        <label>General Info</label>
        value={fromInput.generalInfo}
        <textarea onChange={(event)=>{
            setFromInput({...fromInput,generalInfo:event.target.value})
        }}
           / >
   

        <button>Submit</button>
        </form>
    )
}