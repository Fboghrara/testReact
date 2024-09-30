
import Button from "./Button";
export default function SideMenu(){
    return(
        <div style={{
            margin:"25px",
            border:"solid teal 5px",
            
        }}>
          <Button title="أخر الاخبار">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/10096/10096972.png"/>
            </div>
            </Button>
          <Button title="أخر الاعمال">
            <div>
            <img style={{width:"50px"}} src="https://cdn-icons-png.flaticon.com/128/8153/8153748.png"/>
            </div>
            </Button>
          <Button title=" مميز">
            <img style={{margin:"10px" ,width:"20px"}} src="https://image.shutterstock.com/image-vector/collection-love-heart-symbol-icons-260nw-2481112219.jpg" />
            </Button>
          <Button title="جدول اسبوعيr"/>
          
          

        </div>
    )
}