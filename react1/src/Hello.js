 const Hello =(props)=> {
 console.log(props)
 
    return(
        <div>
            <h1 >Hello {props.name} Age {props.age}</h1>
            {props.children} 
        </div>
       
           
    )
}
export default Hello;