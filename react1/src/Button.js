import "./ButtonStyle.css";

export default function Button({title,children}){
    return(
        
        <button className="btn1">{title}
        {children}
        </button>
    );
}